
declare namespace ContentieuxServices.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
        const serviceAgent: string;
        const modalService: string;
    }
    namespace Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
        const applicationLoggerName: string;
    }
    namespace Metier {
        const entiteTitulaireUtils: string;
    }
    namespace Services {
        const actionPlanifieeService: string;
        const cacheService: string;
        const dossierNumeriqueService: string;
        const dossierService: string;
        const dossierSyntheseService: string;
        const entiteTitulaireService: string;
        const garantieService: string;
        const habilitationsService: string;
        const noteAlerteService: string;
        const personneService: string;
        const portefeuilleService: string;
        const processusService: string;
        const soldeService: string;
        const paiement: string;
        const paiementCbUnique: string;
        const paiementCheque: string;
    }
}

declare namespace ContentieuxServices {
    var app: any;
}

declare namespace ContentieuxServices.Constantes.Agenda {
    namespace NoteAlerte {
        const libellePlusieursAlertesSurDossier: string;
    }
}

declare namespace ContentieuxServices.Constantes.DossierNumerique {
    namespace Lisa {
        const contexteCodeFournisseur: string;
        const contexteReferenceRegroupement: string;
    }
    namespace dossierNumeriqueCredit {
        const formatageEspace: string[];
    }
    namespace codeFournisseur {
        const creditInstruction: string;
        const vario: string;
    }
    namespace dossierNumeriqueRecouvrement {
        const codeNatureAcquisition: string;
        const critereInjection: string;
        const metaDonnee: string;
        const indicateurEnvoiDossierPartage: string;
        const libelleRegroupement: string;
        const typeAttributaireContrat: string;
        const typeAttributairePersonne: string;
        const typeAttributaireEntiteTitulaire: string;
        const listeCodeProduitServiceAutorise: string[];
        const listeCodeProduitServiceFormatageEspace: string[];
        const listeCodeProduitServiceFormatageGuichet: string[];
        const formatageEspace: string[];
        namespace ThemeClients {
            const libelleTheme: string;
            const ordreTheme: number;
            const listeCodesContrat: string[];
            const listeCodesPersonne: string[];
        }
        namespace ThemeProcedures {
            const libelleTheme: string;
            const ordreTheme: number;
            const listeCodesContrat: string[];
            const listeCodesEntiteTitulaire: string[];
            const listeCodeProduitAutorisesMEPS: string[];
            const listeCodeProduitAutorisesMJOC: string[];
        }
        namespace ThemeDocsInternes {
            const libelleTheme: string;
            const ordreTheme: number;
            const listeCodesContrat: string[];
            const listeCodesPersonne: string[];
            const listeCodesEntiteTitulaire: string[];
        }
        namespace ThemeContrats {
            const libelleTheme: string;
            const ordreTheme: number;
            const listeCodesContrat: string[];
        }
    }
}

declare namespace ContentieuxServices.Constantes.Dossier {
    namespace Etiquette {
        const cede: string;
        const archive: string;
        const cloture: string;
        const lienEtatDate: string;
    }
}

declare namespace ContentieuxServices.Constantes.Garantie {
    namespace Garantie {
        const sansDetail: string;
        const avecDetail: string;
        const codeCategorieGarantieAutre: string;
    }
}

declare namespace ContentieuxServices.Constantes {
    namespace ContentieuxHabilitations {
        const superviseur: string;
        const consultation: string;
        const gestionnaire: string;
        type Roles = "superviseur" | "consultation" | "gestionnaire";
    }
}

declare namespace ContentieuxServices.Constantes.Paiement {
    const codeMonnaiePriseOrdrePaiement: string;
    const numeroModelSMSValidationPaiement: {
        "numeroModeleSMS": number;
    };
    const typeRelance: string;
    const typeEnvoiRelance: string;
    const tailleMaxSMS: number;
    const sansDetail: string;
    const avecDetail: string;
    const indicateur0: string;
    const indicateur1: string;
    const codeMonnaiePriseOrdre: string;
    const codeSensAggravation: string;
    const codeSensRecuperation: string;
    const codeActionRecuperationPerte: string;
    const libelleMouvementCrancePourAggravation: string;
    const codeTypeOrigineFluxSurplusDuChq: string;
    const codeTypeOrigineFluxRecuperation: string;
    const codeTypeOrigineFluxRecuperationGarantie: string;
    const indicateurEvtDeclenchementAutoSurplusDuChq: string;
    const indicateurEvtDeclenchementAutoRecuperation: string;
    const typesDettes: string[];
    const typeParticipant: string;
    const typeGarantie: string;
    const codeActionMiseAJourGarantie: string;
    const codeActionMemo: string;
    const codeTypeMemo: string;
    const libelleMiseEnJeuTotale: string;
    const libelleMiseEnJeuPartielle: string;
    const dateParDefaut: string;
    const miseEnJeuTotale: string;
    const topCreationLienHistoFiGarantie: string;
    const codeActionLienHistoGarantie: string;
}

declare namespace ContentieuxServices.Constantes.Portefeuille {
    namespace Affichage {
        const mesPortefeuillesLibelle: string;
        const mesPortefeuillesIdentifiant: string;
        const mesPortefeuillesIdentifiantEDS: number;
        const mesPortefeuillesIdentifiantEDSsuperieur: number;
        const mesPortefeuillesNbDossiersActifs: number;
        const mesPortefeuillesComboDebut: string;
        const mesPortefeuillesComboFin: string;
    }
}

declare namespace ContentieuxServices.Constantes.Processus {
    const listeCodeProduitServiceDNC: string[];
    namespace Lisa {
        const syntheseVersDossierNumerique: number;
        const syntheseVersEffectuerPaiement: number;
    }
    namespace processusEffectuerPaiement {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
    namespace processusGererCreditSynchro {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
    namespace processusDossierNumerique {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
}

declare namespace ContentieuxServices.Constantes.Solde {
    const etiquetteDechu: string;
    const etiquetteDebiteur: string;
    const etiquetteSousSurveillance: string;
    namespace CDD {
        const listeCodeProduitService: string[];
        const libelleMontant1: string;
        const libelleMontant2: string;
    }
    namespace CCE {
        const listeCodeProduitService: string[];
        const codeActionSoldeMinute: number;
        const codeActionSoldeDispo: number;
        const codeActionSoldeDefault: number;
        const libelleMontant1: string;
        const libelleMontant2: string;
    }
    namespace CreditGestion {
        const listeCodeProduitService: string[];
        const libelleMontant1: string;
        const libelleMontant2: string;
    }
    namespace CreditConso {
        const listeCodeProduitService: string[];
        const libelleMontant1: string;
    }
    namespace Epargne {
        const listeCodeProduitService: string[];
    }
    namespace CompteDInstance {
        const listeCodeProduitService: string[];
    }
    namespace MiniProfil {
        const typeRechercheEntiteTitulaire: string;
        const typeRestitutionMiniProfil: string;
        const libelleMontant1: string;
    }
}

declare namespace ContentieuxServices.Modeles.Agenda {
    interface IActionPlanifiee extends IEvenement {
        commentaire: string;
        libelle: string;
        prioriteAlerte: string;
    }
}

declare namespace ContentieuxServices.Modeles.Agenda {
    interface IEvenement {
        dateEvenement: string;
        numeroDossier: number;
        portefeuille: string;
        identifiantEntiteTitulaire: string;
        entiteTitulaire: ContentieuxServices.Modeles.EntiteTitulaire.IEntiteTitulaire;
    }
}

declare namespace ContentieuxServices.Modeles.Agenda {
    interface IAlerteAffectation extends IAlerte {
        montantTotal: number;
        montantExigible: number;
        motif: string;
        numeroPersonneGarantie: number;
        garantiePersonneMorale: Modeles.Garantie.IGarantiePersonneMorale;
    }
    interface IAlerteProcedureCollective extends IAlerte {
        montantExigible: number;
        montantTotal: number;
        motif: string;
        numeroPersonneGarantie: number;
        garantiePersonneMorale: Modeles.Garantie.IGarantiePersonneMorale;
    }
    interface IAlerteSurendettement extends IAlerte {
        motifRejet: string;
    }
    interface IAlerteEcheancier extends IAlerte {
        nombreAlertesDossier: number;
        libelleAlertePourListe: string;
        numeroPersonneGarantie: number;
        garantiePersonneMorale: Modeles.Garantie.IGarantiePersonneMorale;
    }
    interface IAlerte extends IEvenement {
        libelleAlerte: string;
    }
}

declare namespace ContentieuxServices.Modeles.Contrat {
    interface IContratMySys {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        estOuvert: boolean;
        referenceProduitService: string;
        libelleTypeProduitService: string;
        numeroEntiteTitulaireContrat: number;
        identifiantPersonneContrat: number;
        codeRolePersonneContrat: string;
        nomPersonnePhysiqueContrat: string;
        prenomPersonnePhysiqueContrat: string;
        designationPersonnePhysiqueContrat: string;
        raisonSocialePersonneMoraleContrat: string;
        montantAfficheLigne1: IMontantAffiche;
        montantAfficheLigne2: IMontantAffiche;
    }
    interface IContratTuile {
        codeEtablissement: string;
        nature: string;
        reference: string;
        etiquetteContrat: string;
        dettes: Array<IDette>;
        etatEcheancier: string;
        dateDefaillance: string;
        topSynchro: boolean;
        dateRegularisation: string;
        identifiantContrat: string;
        identifiantCreance: string;
        codeActiviteCreance: string;
        codeDecheanceDuTerme: number;
        codePassageCreditStatutDouteux: string;
        codeGuichetInterbancaire: string;
        mtProvisionIFRS: number;
        nombreGarantie: number;
        topSolde: boolean;
        libelleTypeContrat: string;
        codeProduitService: string;
        /**
         * false si contrat MyVario
         * true si contrat MySys non présent dans Vario
         */
        isContratMysys: boolean;
        montantMySysAfficheLigne1: IMontantAffiche;
        montantMySysAfficheLigne2: IMontantAffiche;
        /**
         * true si débranchement DNC Valide (identifiantDossierInstruction présent)
         */
        topDNC: boolean;
    }
    /**
     * DNR = Dossier Numerique recouvrement
     */
    interface IContratDNR {
        nature: string;
        reference: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeProduitService: string;
    }
    interface IDette {
        type: string;
        montant: number;
        nbImpaye?: number;
        montantCumuleEcheancesReportees?: number;
    }
    interface IMontantAffiche {
        type: string;
        montant: number;
    }
    interface IContratMySysParticipants {
        contratMySys: Modeles.Contrat.IContratMySys[];
        participants: Modeles.Participant.Participant[];
    }
}

declare namespace ContentieuxServices.Modeles.Dossier {
    interface IInfoDossierHistorique {
        listeEvenementsATraiter: Array<IEvenementCalendrier>;
        listeEvenementsRealises: Array<IEvenementCalendrierRealise>;
        listeEvenementsFuturs: Array<IEvenementCalendrier>;
        limiteEvenementsRealises?: number;
        limiteEvenementsFuturs?: number;
    }
    interface IEvenementCalendrier {
        dateEvenement: string;
        libelleEvenement?: string;
        libelleEvenementEtapeProcedure?: string;
        commentaire: string;
        identifiantContrat: string;
        dateCreationEvenement: string;
    }
    interface IEvenementCalendrierRealise extends IEvenementCalendrier {
        dateValidation: string;
    }
}

declare namespace ContentieuxServices.Modeles.Dossier {
    interface IInputDossier {
        identifiantPersonne: string;
        numeroDossier: string;
    }
    interface IDossier {
        numeroDossier: number;
        identifiantEntiteTitulaire: string;
        dateSuppressionPrevisionelle?: string;
        dateBlocageConsultation?: string;
        dateClotureDossier?: string;
        dateCession?: string;
        codeStatutDossier?: string;
    }
    interface IDossierListe extends IDossier {
        dateAffectation?: string;
        portefeuille: string;
        motif: string;
        exigible: number;
        montantTotal: number;
        montantGel?: number;
        montantPerteRecouvrable?: number;
        numeroPersonneGarantie: number;
        garantiePersonneMorale: Modeles.Garantie.IGarantiePersonneMorale;
        entiteTitulaire: ContentieuxServices.Modeles.EntiteTitulaire.IEntiteTitulaire;
        nombreCreances?: number;
    }
    interface IDossierSynthese extends IDossier {
        typeUsageEntiteTitulaire: string;
        gerePar: string;
        cedeA: string;
        portefeuille: string;
        domiciliation: string;
        etiquette: string;
        montantTotal: number;
        exigible: number;
        statutDossierConsultable: string;
        motif: string;
    }
}

declare namespace ContentieuxServices.Modeles.DossierNumerique {
    interface IQuestionMajDossierNumerique {
        numeroDossier: string;
        identifiantEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        listeContrats: ContentieuxServices.Modeles.Contrat.IContratDNR[];
        listeParticipants: ContentieuxServices.Modeles.Participant.Participant[];
    }
    interface IReponseMajDossierNumerique {
        identifiantRegroupement: string;
    }
    /**
     * DNR = Dossier Numerique Recouvrement
     */
    interface IDocumentDNR {
        typeDocument: string;
        classementNiveau1: string;
        ordreNiveau1: number;
        classementNiveau2?: string;
        ordreNiveau2?: number;
        aide?: string;
    }
    interface IDocumentDNRContrat extends IDocumentDNR {
        /**
         * Format GED : code ets + code guichet  + num contrat (DU5B)
         */
        numeroContrat: string;
        libelleContrat: string;
    }
    interface IDocumentDNRPersonne extends IDocumentDNR {
        /**
         * NODAPE
         */
        numeroPersonne: string;
        designationPersonne: string;
    }
    interface IDocumentDNREntiteTitulaire extends IDocumentDNR {
        /**
         * Identifiant
         */
        identifiantEntiteTitulaire: string;
        designationEntiteTitulaire: string;
    }
}

declare namespace ContentieuxServices.Modeles.EntiteTitulaire {
    interface IEntiteTitulaire {
        designation: string;
        identifiantEntiteTitulaire?: number;
        domiciliation: string;
        idDomiciliation: number;
        gerePar?: string;
        idGerePar?: number;
        modeComposition: string;
        typeUsage?: string;
        codeUsage?: string;
        modeCompositionIndivision?: string;
    }
}

declare namespace ContentieuxServices.Modeles.Garantie {
    interface IGarantiePersonneMorale {
        numeroPersonneGarantie: number;
        designationLongue: string;
    }
}

declare namespace ContentieuxServices.Modeles.Garantie {
    interface ILienHistoFinanceGarantie {
        codeAction: string;
        identifiantContrat: string;
        dateJourneeBancaireEvt: string;
        numeroHistoComptable: number;
        datePassageContentieuxDossier: string;
        montantOperation: number;
        dateValeurOperationContentieux: string;
    }
    interface IValeurObjet {
        codeTypeEstimation: string;
        dateEstimation: string;
        montantEstimation: string;
        codeModaliteEstimation: string;
        indicValeurObjetUtilise: string;
        codeMotifReestimation: string;
    }
    interface IDetailGarantie {
        codeAction: string;
        identifiantAgent: string;
        codeEtablissement: string;
        identifiantCreance: string;
        numeroDossier: number;
        numeroGarantieDossierCTX: number;
        identifiantPersonneGarant: number;
        dateAffectationGarantie: string;
        dateFinAffectationGarantie: string;
        montantCouvertureCreanceGar: number;
        montantActuelGarantie: number;
        montantInitialCouvertParGaranti: number;
        montantInitialGarantie: number;
        tauxGarantie: number;
        codeNatureGarantieMySys: string;
        datePublication: string;
        datePremiereMiseEnJeuGarantie: string;
        indicateurMisEnJeuGarantieTotal: string;
        indicateurAlerteActivee: string;
        topGarantieUtiliseeCalcul: string;
        indicateurEditionCaution: string;
        rangHypotheque: number;
        rangGarantie: number;
        codeGarantie: string;
        typeGarantieGCE: string;
        codeCategorieGarantie: string;
        indicateurValorisatTauxGarantie: string;
        identifiantObjetCtx: string;
        codeObjetGarantie: string;
        adresseLigne1: string;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4CodePostal: string;
        adresseLigne5Commune: string;
        adresseLigne1Suite: string;
        indicateurValorisatEstimJuridiq: string;
        dateEstimationObjetJuridique: string;
        montantEstimationObjetJuridique: number;
        codeModaliteEstimationJuridique: string;
        codeMotifReestimationJuridique: string;
        indicateurValeurObjtUtilJuridiq: string;
        indicateurValorEstimPrudent: string;
        dateEstimationObjetPrudent: string;
        montantEstimObjetPrudentiel: number;
        codeModeEstimationObjetPrudent: string;
        codeMotifReestimationPrudentiel: string;
        indicateurValeurObjtUtilPrudent: string;
        indicateurValorEstimAmiable: string;
        dateEstimationObjetAmiable: string;
        montantEstimObjetAmiable: number;
        codeModeEstimationObjetAmiable: string;
        codeMotifReestimationAmiable: string;
        topValeurObjetUtilAmiable: string;
        indicateurValorisatEstimVenal: string;
        dateEstimationObjetVenale: string;
        montantEstimObjetVenale: number;
        codeModaliteEstimObjetVenal: string;
        codeMotifReestimVenal: string;
        topValeurObjetUtilVenale: string;
        tauxDecoteGarantie: number;
        indicateurDecoteGarantie: string;
        libelleGarantie: string;
        libelleTypeGarantie: string;
        indicateurContreGarantierisque: string;
        referenceExterneGarantie: string;
        indicateurValorTauxcouverture: string;
        lienHistoFinanceGarantie: ILienHistoFinanceGarantie;
        objetGarantie: Array<IObjetGarantie>;
    }
    interface IGarantie {
        numeroDossier: number;
        identifiantPersonneGarant: number;
        codeGarantie: string;
        numeroGarantieDossierCTX: number;
        dateFinGarantie: string;
        surete: ISurete;
        detailGarantie: IDetailGarantie;
    }
    interface ISurete {
        indicateurGarantieEnTaux: string;
    }
    interface ISuretePersonnelle extends ISurete {
        quotite: number;
        numeroPersonne: number;
    }
    interface ISureteReelle extends ISurete {
        montant: number;
        libelleGarantie: string;
    }
    interface IObjetGarantie {
        identifiantObjetCtx: string;
        codeObjetGarantie: string;
        adresseLigne1: string;
        adresseLigne1Suite: string;
        adresseLigne2: string;
        adresseLigne3: string;
        codePostale: string;
        commune: string;
        codeMotifReestimation: string;
        valeurObjet: Array<IValeurObjet>;
    }
}

declare namespace ContentieuxServices.Modeles.Paiement.PaiementCheque {
    interface ICheque {
        date: string;
        reference: string;
        miseEnJeu: IMiseEnJeuGarantie;
        maxDate: string;
    }
    interface IChequeParamEntree {
        montantCheque: number;
        exigibleMyVario: number;
        pertes: number;
        dateValeurOperationContentieux: string;
        identifiantCreance: string;
        identifiantContrat: string;
        codeTypeProduitService: string;
        codeEtablissement: string;
        referencePayeur: string;
        codeAgent: string;
        isGarantie: boolean;
        garantie?: Modeles.Garantie.IGarantie;
        indicateurMisEnJeuGarantieTotale?: string;
    }
    interface IGarantie {
        garanties: ContentieuxServices.Modeles.Garantie.IGarantie[];
        participants: ContentieuxServices.Modeles.Participant.Participant[];
    }
    interface IPayeur {
        typePayeur?: string;
        libelle?: string;
        referencePayeur?: string;
        codeGarantie?: string;
        dateFinGarantie?: string;
        numeroDossier?: number;
        numeroGarantie?: number;
        montant?: number;
        identifiantPersonneGarant?: number;
        detailGarantie?: Modeles.Garantie.IDetailGarantie;
        surete?: Modeles.Garantie.ISurete;
        designation?: string;
        estPro?: boolean;
        idPersonne?: number;
        role?: string;
        titulaire?: boolean;
    }
    interface IMiseEnJeuGarantie {
        libelle: string;
        value: string;
    }
}

declare namespace ContentieuxServices.Modeles.Paiement.PaiementCbUnique {
    interface IPaiementCbUniqueParamEntree {
        codeEtablissement: string;
        numeroDossier: number;
        identifiantCreance: string;
        numeroEntiteTitulaire: number;
        identifiantContrat: string;
        montantPaiementERecouvrement: number;
        codeReseauCarteProsodie: string;
        adresseEmail: string;
        dateFinValidite: string;
        numeroCarteBancaire: string;
        codeCVVCarte: string;
        designationLonguePersonne: string;
        identifiantPersonne: number;
        referenceExternePersonne: number;
        identifiantElementStructure: number;
        codeCivilitePersonnePhysique: string;
        codePersonnaliteJuridique: string;
        codeEnvironnement: string;
    }
    interface IPaiementCbUniqueRetour {
        identifiantERecouvrementNatixis: string;
        identifiantEcheanciePaiementVAD: number;
        numeroEcheance: number;
    }
    type CarteBancaireType = {
        code: string;
        libelle: string;
    };
    interface ICarteBancaire {
        type: CarteBancaireType;
        numero: MyWay.Model.NumCarte;
        dateValidite: string;
        cryptogramme: string;
        numeroSMS: Contentieux.RestServices.Modeles.IListeMedia;
        newSMS: boolean;
        numeroNewSMS: MyWay.Model.NumTelephone;
        adresseMail: string;
        newMail: boolean;
        newAdresseMail: string;
    }
}

declare namespace ContentieuxServices.Modeles.Paiement {
    type PaiementType = "Carte Bancaire" | "Chèque" | "Prélèvement";
    type OrigineType = "Débiteur" | "Garantie" | "Autre";
    interface IPaiement {
        estDechu: boolean;
        montant: number;
        type: PaiementType;
        devise: string;
        origine: OrigineType;
        contrat: ContentieuxServices.Modeles.Contrat.IContratTuile;
        nouveauPayeurShow: boolean;
        nouveauPayeur: string;
        eligibiliteModePaiement?: ContentieuxServices.Modeles.Paiement.IEligibiliteModePaimt;
    }
    interface IEligibiliteModePaimt {
        topPaiementCB: boolean;
        motifCBNonAutorisee: string;
        topPaiementCheque: boolean;
        motifChequeNonAutorise: string;
        topPaiementPrelevement: boolean;
        motifPrelevementNonAutorise: string;
    }
}

declare namespace ContentieuxServices.Modeles.Paiement.PaiementPrelevement {
    interface IPaiementPrelevementPonctuelParamEntree {
        codeEtablissement: string;
        numeroDossier: number;
        montantPrelevementPonctuel: number;
        numeroIbanCompte: string;
    }
    interface IPrelevement {
        compte: MyWay.Model.Contrat;
        date: string;
        riceCompte: MyWay.Model.Rice;
    }
    interface IPaiementPrelevementRetour {
    }
}

declare namespace ContentieuxServices.Modeles.Participant {
    type TypeRole = "Titulaire" | "Caution" | "Mandataire";
    class Participant {
        designation: string;
        idPersonne: number;
        role: TypeRole;
        libelle: string;
        estPro: boolean;
        titulaire: boolean;
        constructor(designation: string, idPersonne: number, titulaire?: boolean, estPro?: boolean, role?: TypeRole);
    }
}

declare namespace ContentieuxServices.Modeles.Portefeuille {
    type PortefeuilleType = "MesPortefeuilles" | "Collaborateur" | "Etablissement";
    interface IInputPortefeuille {
        identifiantPortefeuille: string;
    }
    interface IPortefeuille {
        identifiantPortefeuille: string;
        libellePortefeuille: string;
        libelleMesPortefeuilles: string;
        identifiantEDS: number;
        identifiantEDSSuperieur: number;
        nombreDossiersActifs: number;
        typePortefeuille: PortefeuilleType;
    }
}

declare namespace ContentieuxServices.Modeles.Processus {
    class ProcessusDossierNumerique implements IProcessus {
        code: string;
        libelle: string;
        valeurDepart: string;
        initData: MyWay.Services.Lisa.IInitialisationData;
        codeFournisseur: string;
        reference: string;
        constructor(codeFournisseur: string, reference: string);
    }
}

declare namespace ContentieuxServices.Modeles.Processus {
    class ProcessusEffectuerPaiement implements IProcessus {
        code: string;
        libelle: string;
        valeurDepart: string;
        initData: MyWay.Services.Lisa.IInitialisationData;
        identifiantEntiteTitulaire: string;
        numeroDossier: string;
        identifiantCreance: string;
        constructor(identifiantEntiteTitulaire: string, numeroDossier: string, identifiantCreance: string);
    }
}

declare namespace ContentieuxServices.Modeles.Processus {
    class ProcessusGererCreditSynchro implements IProcessus {
        code: string;
        libelle: string;
        valeurDepart: string;
        initData: MyWay.Services.Lisa.IInitialisationData;
        identifiantCredit: string;
        constructor(identifiantCredit: string);
    }
}

declare namespace ContentieuxServices.Modeles.Processus {
    interface IProcessus {
        code: string;
        libelle: string;
        valeurDepart: string;
        initData: MyWay.Services.Lisa.IInitialisationData;
    }
    interface IProcessusADebrancher {
        libelleDebranchement: string;
        processus: ContentieuxServices.Modeles.Processus.IProcessus;
        initData?: MyWay.Services.Lisa.IInitialisationData;
        isLancementLisa?: boolean;
        nextLisa?: number;
    }
}

declare namespace ContentieuxServices.Modeles.Solde {
    interface IDetailSolde {
        soldeReel: number;
        montantDecouvertAutorise: number;
        ecartes: number;
        reservesEncaissement: number;
        impayesSurPret: number;
        planReglement: number;
        soldeDisponible: number;
    }
    interface IDetailSoldeCDD extends IDetailSolde {
        fondsMisADisposition: number;
        fondsReserves: number;
    }
    interface IDetailSoldeCCE extends IDetailSolde {
        blocageProvisions: number;
        codeDevise: string;
        soldeFusionneEuro: number;
        soldeCompteDevise: number;
        montantDecouvertEuro: number;
        montantDecouvertDevise: number;
    }
    interface IDetailSoldeCreditGestion {
        montantImpayeCredit: number;
        montantEcheanceMER: number;
    }
    interface IDetailSoldeCreditConso {
        capitalRestantOuEncours: number;
    }
    interface IDetailSoldeMinute {
        codeProduitService?: string;
        referenceProduitService?: string;
        deviseTenueCompte?: string;
        soldeMinuteCompte?: number;
    }
    interface IContrat {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        numeroEntiteTitulaireContrat: number;
        codeEtatContrat: string;
        libelleTypeProduitService: string;
        identifiantPersonneContrat: number;
        codeRolePersonneContrat: string;
        nomPPContrat: string;
        prenomPPContrat: string;
        designationPPContrat: string;
        raisonSocialePMContrat: string;
        deviseTenueCompte?: string;
        soldeMinuteCompte?: number;
    }
}

declare namespace ContentieuxServices.Services.Agenda {
    class ActionPlanifieeService implements IActionPlanifieeService {
        private serviceAgent;
        private alerteRestService;
        private entitetitulaireService;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, alerteRestService: Contentieux.RestServices.Services.IAlerteService, entitetitulaireService: ContentieuxServices.Services.EntiteTitulaire.IEntiteTitulaireService, $q: ng.IQService);
        /**
         * Liste des actions planifiées pour l'agent connecté
         */
        getActionsPlanifiees(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IActionPlanifiee[]>;
    }
}

declare namespace ContentieuxServices.Services.Agenda {
    interface IActionPlanifieeService {
        getActionsPlanifiees(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IActionPlanifiee[]>;
    }
}

declare namespace ContentieuxServices.Services.Agenda {
    interface INoteAlerteService {
        getAlertesAffectations(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteAffectation[]>;
        getAlertesProceduresCollectives(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteProcedureCollective[]>;
        getAlertesSurendettement(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteSurendettement[]>;
        getAlertesEcheanciers(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteEcheancier[]>;
    }
}

declare namespace ContentieuxServices.Services.Agenda {
    class NoteAlerteService implements INoteAlerteService {
        private serviceAgent;
        private alerteRestService;
        private entitetitulaireService;
        private garantieService;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, alerteRestService: Contentieux.RestServices.Services.IAlerteService, entitetitulaireService: ContentieuxServices.Services.EntiteTitulaire.IEntiteTitulaireService, garantieService: ContentieuxServices.Services.Garantie.IGarantieService, $q: ng.IQService);
        /**
         * Liste des alertes de nouvelles affectations de dossiers de l'agent connecté
         */
        getAlertesAffectations(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteAffectation[]>;
        /**
         * Liste des alertes de procédures collectives pour l'agent connecté
         */
        getAlertesProceduresCollectives(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteProcedureCollective[]>;
        /**
         * Liste des alertes de surrendettement pour l'agent connecté
         */
        getAlertesSurendettement(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteSurendettement[]>;
        /**
         * Liste des alertes sur échéanciers pour l'agent connecté
         */
        getAlertesEcheanciers(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteEcheancier[]>;
    }
}

declare module ContentieuxServices.Services.Commun {
    class CacheService {
        private $q;
        private logger;
        private cache;
        /**
         * 15 minutes
         */
        defaultTimeToLive: number;
        static $inject: string[];
        constructor($q: ng.IQService, logger: ContentieuxCommun.Logger.ILogger);
        /**
         * Set data To cache
         * @param key
         * @param object to store in cache
         * @param timeToLive in millisecond. -1 for infinite
         */
        private setToCache<T>(key, data, timeToLive);
        /**
         * Set promise result in cache
         * @param key
         * @param promise
         * @param timeToLive
         */
        private setToCacheFromPromise<T>(key, promise, timeToLive);
        /**
         *
         * @param key
         */
        private getFromCache<T>(key);
        /**
         * Try to resolve from cache. If not in cache, set the promise's result in cache and return the promise
         * @param key
         * @param promise
         * @param timeToLive
         */
        get<T>(key: string, promise: () => ng.IPromise<T>, timeToLive: number, fromCache?: boolean): ng.IPromise<T>;
        private isExpired(cacheData);
    }
}

declare module ContentieuxServices.Services.Commun {
    interface ICacheService {
        get<T>(key: string, promise: () => ng.IPromise<T>, timeToLive: number, fromCache?: boolean): ng.IPromise<T>;
        defaultTimeToLive: number;
    }
    interface ICacheData {
        data: any;
        timeToLive: number;
        instantiatedTime: number;
    }
}

declare namespace ContentieuxServices.Services.Dossier {
    class DossierService implements IDossierService {
        private dossierRestService;
        private $q;
        private entiteTitulaireService;
        private garantieService;
        static $inject: string[];
        constructor(dossierRestService: Contentieux.RestServices.Services.IDossierService, $q: ng.IQService, entiteTitulaireService: Services.EntiteTitulaire.IEntiteTitulaireService, garantieService: ContentieuxServices.Services.Garantie.IGarantieService);
        getDossiersActifsPortefeuille(codeEtablissement: string, identifiantPortefeuille: number): ng.IPromise<Modeles.Dossier.IDossierListe[]>;
    }
}

declare namespace ContentieuxServices.Services.Dossier {
    interface IDossierSyntheseService {
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, identifiantCreance?: string, fromCache?: boolean): ng.IPromise<Modeles.Dossier.IInfoDossierHistorique>;
        getContratsVario(codeEtablissement: string, numeroDossier: number, numeroInterneEds: string, fromCache?: boolean): ng.IPromise<Modeles.Contrat.IContratTuile[]>;
        getContratsMySys(codeEtablissement: string, idEntiteTitulaire: string, fromCache?: boolean): ng.IPromise<[Modeles.Contrat.IContratMySysParticipants]>;
        getDossiersSynthese(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.Dossier.IDossierSynthese[]>;
        getDossierRecherche(codeEtablissement: string, numeroDossier: number): ng.IPromise<ContentieuxServices.Modeles.Dossier.IDossier>;
        getDossierRechercheEtParticipants(codeEtablissement: string, numeroDossier: number): ng.IPromise<[Modeles.Dossier.IDossier, ContentieuxServices.Modeles.Participant.Participant[]]>;
    }
    class DossierSyntheseService implements IDossierSyntheseService {
        private dossierRestService;
        private creanceRestService;
        private serviceAgent;
        private $q;
        private entiteTitulaireService;
        private cacheService;
        private logger;
        private soldeService;
        static $inject: string[];
        constructor(dossierRestService: Contentieux.RestServices.Services.IDossierService, creanceRestService: Contentieux.RestServices.Services.ICreanceService, serviceAgent: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, entiteTitulaireService: Services.EntiteTitulaire.IEntiteTitulaireService, cacheService: Services.Commun.ICacheService, logger: ContentieuxCommun.Logger.ILogger, soldeService: Services.Solde.ISoldeService);
        /**
         * Retrouve la liste de dossiers d'une personne
         * @param codeEtablissement
         * @param idPersonne
         * @return Modeles.Dossier.IDossierSynthese[]
         */
        getDossiersSynthese(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.Dossier.IDossierSynthese[]>;
        /**
         * Construit dossier pour la synthèse
         * @param listeDossierEntiteTitulaire
         * @param listinfosEntiteTitulaires
         * @param listeEntiteTitulaire
         */
        private createDossierSynthese(listeDossierEntiteTitulaire, listinfosEntiteTitulaires, listeEntiteTitulaire);
        /**
         * Récupère les informations de base lors de la recherche d'un dossier
         * @param codeEtablissement
         * @param numeroDossier
         * @return Modeles.Dossier.IDossier
         */
        getDossierRecherche(codeEtablissement: string, numeroDossier: number): ng.IPromise<Modeles.Dossier.IDossier>;
        /**
         * Récupère les informations de base lors de la recherche d'un dossier et les participants
         * @param codeEtablissement
         * @param numeroDossier
         */
        getDossierRechercheEtParticipants(codeEtablissement: string, numeroDossier: number): ng.IPromise<[Modeles.Dossier.IDossier, ContentieuxServices.Modeles.Participant.Participant[]]>;
        /**
         * Récupère l'historique/calendrier du dossier
         * @param codeEtablissement
         * @param numeroDossier
         * @param identifiantCreance
         * @param fromCache
         */
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, identifiantCreance?: string, fromCache?: boolean): ng.IPromise<Modeles.Dossier.IInfoDossierHistorique>;
        /**
         * Contrats Vario du dossier
         * @param codeEtablissement
         * @param numeroDossier
         * @param numeroInterneEds
         * @param fromCache
         */
        getContratsVario(codeEtablissement: string, numeroDossier: number, numeroInterneEds: string, fromCache?: boolean): ng.IPromise<Modeles.Contrat.IContratTuile[]>;
        /**
         * get les contrats MySys de l'entité titulaire
         * @param codeEtablissement
         * @param idEntiteTitulaire
         * @param fromCache
         */
        getContratsMySys(codeEtablissement: string, idEntiteTitulaire: string, fromCache?: boolean): ng.IPromise<[Modeles.Contrat.IContratMySysParticipants]>;
        /**
         * retourne les cuations d'un contrat MySys
         * @param contratRest
         */
        private mappingContratParticipants(contratRest);
        /**
         * mappe le contrat Rest en contrat MySys
         * @param contratRest
         */
        private mappingContrat(contratRest, listeSoldeMinute);
        /**
         * Vérifie si le code produit est présent dans une liste de produit spécifique
         * @param codeTypeProduitService
         * @param codeDuProduit
         */
        private isProduitSpecifique(codeTypeProduitService, codeDuProduit);
        /**
         * Retourne le code Etat de la Créance à renseigner pour l'appel de provision
         */
        private getCodeEtatCreance(codeActiviteCreance, codeDecheanceDuTerme, codePassageCreditStatutDouteux);
        /**
         * récupère la provision
         * @param codeEtablissement
         * @param idCreance
         * @param codeEtatCreance
         * @param codeGuichetInterbancaire
         */
        private getProvision(codeEtablissement, idCreance, codeEtatCreance, codeGuichetInterbancaire);
        /**
         * Mise à jour des soldes depuis MySys pour les contrats VARIO
         * Uniquement pour 004 et 008 qui n'ont pas l'étiquette "DECHU"
         * Pour le contrats "Vario", on conserve le tableau Dette
         * @param codeEtablissement
         * @param contrat
         */
        private affecterMontantMySysContratTuile(contrat);
        private affecterMontantMySysContratMySys(contrat, listeSoldeMinute);
        /**
         * 004
         * @param codeEtablissement
         * @param codeGuichet
         * @param numeroCompte
         */
        private getMontantsCDD(codeEtablissement, codeGuichet, numeroCompte);
        /**
         * 008
         * @param codeEtablissement
         * @param codeGuichet
         * @param numeroCompte
         */
        private getMontantsCCE(codeEtablissement, codeGuichet, numeroCompte);
        /**
         * P000 et P0001
         * @param codeEtablissement
         * @param codeGuichet
         * @param numeroCompte
         */
        private getMontantsCreditGestion(codeEtablissement, identifiantCredit);
        /**
         * F0004
         * @param codeEtablissement
         * @param codeGuichet
         * @param numeroCompte
         */
        private getMontantsCreditConso(codeEtablissement, entitetitulaire, codeGuichet, numeroCompte, codeProduitService);
        /**
         * Mise à jour MontantIFRS
         * @param contrat
         * @param codeEtatCreance
         */
        private affecterMontantIFRS(contrat, codeEtatCreance);
        /**
         * Mappe l'evenement REST en evenement Calendrier Réalisé
         * @param evtRest
         */
        private mappingEvenementRealise(evtRest);
        /**
         * Mappe l'evenement REST en evenement Calendrier
         * @param evtRest
         */
        private mappingEvenementCalendrier(evtRest);
        /**
         * formatte identifiant de l'entité titulaire
         * @param entite
         */
        private extractIdEntiteTitulaire(entite);
    }
}

declare namespace ContentieuxServices.Services.Dossier {
    interface IDossierService {
        getDossiersActifsPortefeuille(codeEtablissement: string, identifiantPortefeuille: number): ng.IPromise<Modeles.Dossier.IDossierListe[]>;
    }
}

declare namespace ContentieuxServices.Services.DossierNumerique {
    class DossierNumeriqueService implements IDossierNumeriqueService {
        private dossierNumeriqueRestService;
        static $inject: string[];
        constructor(dossierNumeriqueRestService: Contentieux.RestServices.Services.DossierNumeriqueMetierService);
        /**
         * Création de l'enveloppe DNR
         * @param codeEtablissement
         * @param agent
         * @param question
         */
        creerEnveloppeDossierNumerique(codeEtablissement: string, agent: string, question: Modeles.DossierNumerique.IQuestionMajDossierNumerique): ng.IPromise<Modeles.DossierNumerique.IReponseMajDossierNumerique>;
        private creerEnveloppeDocumentContrat(listeContrats);
        private creerEnveloppeDocumentPersonne(listeParticipants);
        private creerEnveloppeDocumentEntiteTitulaire(identifiantEntiteTitulaire, designationEntiteTitulaire);
        /**
         * Formattage de la référence
         * @param codeProduitService
         * @param codeEtablissement
         * @param codeGuichet
         * @param reference
         */
        private formatterReference(codeProduitService, codeEtablissement, codeGuichet, reference);
        /**
         * Gestion des exceptions MEPS
         * @param codeProduitService
         */
        private isAutoriseMEPS(codeProduitService);
        /**
         * Gestion des exceptions MJOC
         * @param codeProduitService
         */
        private isAutoriseMJOC(codeProduitService);
        /**
         * Création ou Mise à jour d'un dossier numérique (Appel du Service Rest)
         */
        private mettreAJourDossierNumerique(codeEtablissement, agent, question, listeDocumentsContrat, listeDocumentsPersonne, listeDocumentsEntiteTitulaire);
        private ajouterDocumentContrat(liste, document);
        private ajouterDocumentPersonne(liste, document);
        private ajouterDocumentEntiteTitulaire(liste, document);
    }
}

declare namespace ContentieuxServices.Services.DossierNumerique {
    interface IDossierNumeriqueService {
        creerEnveloppeDossierNumerique(codeEtablissement: string, agent: string, question: Modeles.DossierNumerique.IQuestionMajDossierNumerique): ng.IPromise<Modeles.DossierNumerique.IReponseMajDossierNumerique>;
    }
}

declare namespace ContentieuxServices.Services.EntiteTitulaire {
    class EntiteTitulaireService implements IEntiteTitulaireService {
        private personneRestService;
        private $q;
        private cacheService;
        static $inject: string[];
        constructor(personneRestService: Contentieux.RestServices.Services.IPersonneService, $q: ng.IQService, cacheService: Services.Commun.ICacheService);
        /**
         * Récupération d'une entiteTitulaire
         * @param idEntite Id Entite titulaire
         * @param fromCache false âr defaut
         */
        getEntiteTitulaire(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.EntiteTitulaire.IEntiteTitulaire>;
        /**
         * récupère les personnes liées à l'entité titulaire
         * @param codeEtablissement
         * @param idEntite
         * @param fromCache
         */
        getParticipants(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Participant.Participant[]>;
        /**
         * @description Récupère les personnes dont le natureLien est PE (à afficher dans Contacts) et s'il possède un natureLien LA, on indique que c'est un professionnel
         * @param liste
         */
        private getListePersonnesPE(liste);
        /**
         * ATTENTION: cette méthode fait un appel par idEntites au RestService
         * @param idEntites
         * @param fromCache
         */
        getEntitesTitulaires(codeEtablissement: string, idEntites: number[], fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        /**
         * récupère les informations sur l'entité titulaire à partir d'un identifiant Personne
         * @param codeEtablissement
         * @param idPersonne
         * @param fromCache
         */
        getEntitesTitulairesFromIdPersonne(codeEtablissement: string, idPersonne: number, fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
    }
}

declare namespace ContentieuxServices.Services.EntiteTitulaire {
    interface IEntiteTitulaireService {
        getEntiteTitulaire(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire>;
        getEntitesTitulaires(codeEtablissement: string, idEntites: number[], fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        getEntitesTitulairesFromIdPersonne(codeEtablissement: string, idPersonne: number, fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        getParticipants(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Participant.Participant[]>;
    }
}

declare namespace ContentieuxServices.Services.Garantie {
    class GarantieService implements IGarantieService {
        private serviceAgent;
        private tiersRestService;
        private dossierRestService;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, tiersRestService: Contentieux.RestServices.Services.ITiersService, dossierRestService: Contentieux.RestServices.Services.IDossierService, $q: ng.IQService);
        /**
         * Retourne les infos de la personne morale garantie
         * @param numeroPersoneGarantie
         * @param fromCache
         */
        getInformationGarantiePersonneMorale(numeroPersoneGarantie: number, fromCache?: boolean): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale>;
        /**
         * Retourne la listes des personnes morales en garantie
         * @param numeroPersoneGarantie : liste de numéro de personne
         * @param fromCache
         */
        getListeGarantiePersonneMorale(numeroPersoneGarantie: number[], fromCache?: boolean): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale[]>;
        /**
         * Récupère les listes des garanties pour un contrat
         * @param codeEtablissement
         * @param numeroDossier
         * @param identifiantCreance
         * @param topDetails
         * @param numeroGarantieDossierCTX
         */
        getListeGarantiesContrat(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, topDetails: string, numeroGarantieDossierCTX?: number): ng.IPromise<Modeles.Garantie.IGarantie[]>;
    }
}

declare namespace ContentieuxServices.Services.Garantie {
    interface IGarantieService {
        getInformationGarantiePersonneMorale(numeroPersoneGarantie: number): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale>;
        getListeGarantiePersonneMorale(idPersoneGarantie: number[], fromCache?: boolean): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale[]>;
        getListeGarantiesContrat(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, topDetails: string, numeroGarantieDossierCTX?: number): ng.IPromise<Modeles.Garantie.IGarantie[]>;
    }
}

declare namespace ContentieuxServices.Services.Habilitations {
    class HabilitationsService implements IHabilitationsService {
        private serviceAgent;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent, $q: ng.IQService);
        private isRoleSuperviseur();
        private isRoleConsultation();
        private isRoleGestionnaire();
        isHabilite(role: Constantes.ContentieuxHabilitations.Roles): MyWay.Services.IPromesse<boolean>;
    }
}

declare namespace ContentieuxServices.Services.Habilitations {
    interface IHabilitationsService {
        isHabilite(role: Constantes.ContentieuxHabilitations.Roles): MyWay.Services.IPromesse<boolean>;
    }
}

declare namespace ContentieuxServices.Services.Paiement {
    interface IPaiement {
        getEligibiliteModePaiement(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Modeles.Paiement.IEligibiliteModePaimt>;
    }
    class Paiement implements IPaiement {
        private paiementService;
        static $inject: string[];
        constructor(paiementService: Contentieux.RestServices.Services.IPaiementService);
        getEligibiliteModePaiement(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Modeles.Paiement.IEligibiliteModePaimt>;
    }
}

declare namespace ContentieuxServices.Services.Personne {
    interface IPersonneService {
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
    }
}

declare namespace ContentieuxServices.Services.Personne {
    class PersonneService implements IPersonneService {
        private $q;
        private personneRestService;
        private cacheService;
        static $inject: string[];
        constructor($q: ng.IQService, personneRestService: Contentieux.RestServices.Services.IPersonneService, cacheService: Services.Commun.ICacheService);
        /**
         * récupère la note bale 2 de la personne
         * @param codeEtablissement
         * @param idPersonne
         */
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
    }
}

declare namespace ContentieuxServices.Services.Portefeuille {
    interface IPortefeuilleService {
        getPortefeuillesByEtablissement(codeEtablissement: string, optionMesPortefeuilles: boolean): ng.IPromise<Modeles.Portefeuille.IPortefeuille[]>;
        getPortefeuillesByEDS(codeEtablissement: string, identifiantEDS: string, optionMesPortefeuilles: boolean): ng.IPromise<[Modeles.Portefeuille.IPortefeuille[], Modeles.Portefeuille.IPortefeuille[], Modeles.Portefeuille.IPortefeuille[]]>;
    }
}

declare namespace ContentieuxServices.Services.Portefeuille {
    class PortefeuilleService implements IPortefeuilleService {
        private portefeuilleRestService;
        private $q;
        static $inject: string[];
        private mesPortefeuilles;
        constructor(portefeuilleRestService: Contentieux.RestServices.Services.IPortefeuilleService, $q: ng.IQService);
        getPortefeuillesByEtablissement(codeEtablissement: string, optionMesPortefeuilles: boolean): ng.IPromise<Modeles.Portefeuille.IPortefeuille[]>;
        getPortefeuillesByEDS(codeEtablissement: string, identifiantEDS: string, optionMesPortefeuilles: boolean): ng.IPromise<[Modeles.Portefeuille.IPortefeuille[], Modeles.Portefeuille.IPortefeuille[], Modeles.Portefeuille.IPortefeuille[]]>;
    }
}

declare namespace ContentieuxServices.Services.Processus {
    interface IProcessusService {
        getListeProcessusPourContratMySys(codeEtablissement: string, dossier: Modeles.Dossier.IDossierSynthese, contrat: Modeles.Contrat.IContratTuile): Modeles.Processus.IProcessusADebrancher[];
        getListeProcessusPourContratMyVario(codeEtablissement: string, dossier: Modeles.Dossier.IDossierSynthese, contrat: Modeles.Contrat.IContratTuile): Modeles.Processus.IProcessusADebrancher[];
    }
}

declare namespace ContentieuxServices.Services.Processus {
    class ProcessusService implements IProcessusService {
        constructor();
        getListeProcessusPourContratMySys(codeEtablissement: string, dossier: Modeles.Dossier.IDossierSynthese, contrat: Modeles.Contrat.IContratTuile): Modeles.Processus.IProcessusADebrancher[];
        getListeProcessusPourContratMyVario(codeEtablissement: string, dossier: Modeles.Dossier.IDossierSynthese, contrat: Modeles.Contrat.IContratTuile): Modeles.Processus.IProcessusADebrancher[];
        private getProcessusCreditSynchro(dossier, contrat);
        private isAutoriseDNC(codeProduitService);
        private getProcessusDossierNumeriqueCredit(codeEtablissement, dossier, contrat);
    }
}

declare namespace ContentieuxServices.Services.Solde {
    interface ISoldeService {
        getDetailSoldeCDD(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCDD>;
        getDetailSoldeCCE(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCCE>;
        getDetailSoldeMinuteCCE(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCCE>;
        getDetailSoldeDisponibleCCE(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCCE>;
        getDetailSoldeCreditGestion(codeEtablissement: string, identifiantCredit: string): ng.IPromise<Modeles.Solde.IDetailSoldeCreditGestion>;
        getDetailSoldeCreditConso(codeEtablissement: string, entitetitulaire: string, codeGuichet: string, numeroCompte: string, codeProduitService: string): ng.IPromise<Modeles.Solde.IDetailSoldeCreditConso>;
        getSyntheseMiniProfilParEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Modeles.Solde.IDetailSoldeMinute[]>;
    }
    class SoldeService implements ISoldeService {
        private $q;
        private soldeRestService;
        private cddRestService;
        private cceRestService;
        private creditGestionRestService;
        private creditConsoRestService;
        static $inject: string[];
        constructor($q: ng.IQService, soldeRestService: Contentieux.RestServices.Services.ISyntheseService, cddRestService: Contentieux.RestServices.Services.ICDDService, cceRestService: Contentieux.RestServices.Services.ICCEService, creditGestionRestService: Contentieux.RestServices.Services.ICreditGestionService, creditConsoRestService: Contentieux.RestServices.Services.ICreditConsoService);
        getDetailSoldeCDD(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCDD>;
        getDetailSoldeCCE(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCCE>;
        getDetailSoldeMinuteCCE(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCCE>;
        getDetailSoldeDisponibleCCE(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<ContentieuxServices.Modeles.Solde.IDetailSoldeCCE>;
        getDetailSoldeCreditGestion(codeEtablissement: string, identifiantCredit: string): ng.IPromise<Modeles.Solde.IDetailSoldeCreditGestion>;
        getDetailSoldeCreditConso(codeEtablissement: string, entitetitulaire: string, codeGuichet: string, numeroCompte: string, codeProduitService: string): ng.IPromise<Modeles.Solde.IDetailSoldeCreditConso>;
        /**
         * Appel rest + mappage (2 tableaux du rest ==> 1 tableau)
         * @param codeEtablissement
         * @param identifiantEntiteTitulaire
         */
        getSyntheseMiniProfilParEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Modeles.Solde.IDetailSoldeMinute[]>;
        /**
         * Mappage  (2 tableaux du rest ==> 1 tableau)
         * @param data
         */
        private getListeSoldeProduit(data);
    }
}

declare namespace ContentieuxServices.Services.Paiement.PaiementCbUnique {
    interface IPaiementCbUniqueService {
        effectuerPaiementUniqueCb(inputParam: Modeles.Paiement.PaiementCbUnique.IPaiementCbUniqueParamEntree): ng.IPromise<Modeles.Paiement.PaiementCbUnique.IPaiementCbUniqueRetour>;
        getModeleSmsPaiement(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Contentieux.RestServices.Modeles.IModeleSms[]>;
    }
    class PaiementCbUnique implements IPaiementCbUniqueService {
        private paiementService;
        private smsService;
        static $inject: string[];
        constructor(paiementService: Contentieux.RestServices.Services.IPaiementService, smsService: Contentieux.RestServices.Services.ISmsService);
        effectuerPaiementUniqueCb(input: Modeles.Paiement.PaiementCbUnique.IPaiementCbUniqueParamEntree): ng.IPromise<Modeles.Paiement.PaiementCbUnique.IPaiementCbUniqueRetour>;
        getModeleSmsPaiement(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Contentieux.RestServices.Modeles.IModeleSms[]>;
    }
}

declare namespace ContentieuxServices.Services.Paiement.PaiementCheque {
    interface IPaiementChequeService {
        getlistePayeurChqPrelev(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, idEntiteTitulaire: number, avecGaranties: boolean): ng.IPromise<Modeles.Paiement.PaiementCheque.IPayeur[]>;
        effectuerPaiementParChq(inputData: Modeles.Paiement.PaiementCheque.IChequeParamEntree): ng.IPromise<void>;
    }
    class PaiementCheque implements IPaiementChequeService {
        private $q;
        private paiementService;
        private creanceService;
        private dossierSyntheseService;
        private garantieService;
        private dossierService;
        private entiteTitulaireService;
        static $inject: string[];
        constructor($q: ng.IQService, paiementService: Contentieux.RestServices.Services.IPaiementService, creanceService: Contentieux.RestServices.Services.ICreanceService, dossierSyntheseService: ContentieuxServices.Services.Dossier.IDossierSyntheseService, garantieService: ContentieuxServices.Services.Garantie.IGarantieService, dossierService: Contentieux.RestServices.Services.IDossierService, entiteTitulaireService: ContentieuxServices.Services.EntiteTitulaire.IEntiteTitulaireService);
        /**
         * Méthode permettant de récupérer la liste des payeurs pour le paiement par chèque et prélévement
         * La liste des garanties inclus la liste des cautions
         * Récupération de la liste des participants, sauf les cautions
         * @param codeEtablissement
         * @param numeroDossier
         * @param identifiantCreance
         * @param idEntiteTitulaire
         * @param avecGaranties
         */
        getlistePayeurChqPrelev(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, idEntiteTitulaire: number, avecGaranties: boolean): ng.IPromise<Modeles.Paiement.PaiementCheque.IPayeur[]>;
        /**
         * Méthode permettant d'associer mon objet Garantie vers Payeur pour le chèque et prélévement
         * @param garantie
         */
        private mappeGarantieEnPayeur(garantie);
        /**
         * Méthode permettant d'associer mon objet Participant vers Payeur pour le chèque et prélévement
         * @param participant
         */
        private mappeParticipantEnPayeur(participant);
        /**
         * Aggravation non comptable pour le paiement par chèque
         * Méthode pour potentiellement utilisée, si le montant du chèque et suppérieur au montant exigible
         * @param inputData
         * @param montant
         */
        private effectuerAggravationNonComptable(inputData, montant);
        /**
         * Récupération spécifique pour le paiement par chèque
         * Méthode pour potentiellement utilisée, si le montant du chèque et suppérieur au montant exigible
         * @param inputData
         * @param montant
         */
        private effectuerRecuperationSpecifique(inputData, montant);
        /**
         * Récupération de l'exigible pour le paiement par chèque, prioritaire devant la récupération perte
         * @param inputData
         * @param montant
         */
        private effectuerRecuperationExigible(inputData, montant);
        /**
         * Récupération des pertes pour le paiement par chèque, s'il reste de l'argent après la récupération de l'exigible
         * @param inputData
         * @param montant
         */
        private effectuerRecuperationPertes(inputData, montant);
        /**
         * Créer un lien historique financier/garantie
         * @param inputData
         */
        private effectuerLienHistoFinancierGarantie(inputData, montant);
        private effectuerUneMiseAJourGarantie(inputData);
        /**
         * Créer un memo par rapport au paiement effectué
         * @param inputData
         */
        private effectuerMemoSurGarantie(inputData);
        /**
         * Méthode qui calcul le montant d'exigible à recouvrer à partir de l'exigible total et des pertes
         * @param montantExigible
         * @param pertes
         */
        private calculMontantExigibleARecouvrer(montantExigible, pertes);
        /**
         * Méthode de paiement par chèque
         * Suit l'algorithme publié sur confluence, réalisé à partir des règles métiers
         * Effectue une ou plusieurs promesses en fonction du montant du chèque et de l'exigible
         * @param inputData
         */
        effectuerPaiementParChq(inputData: Modeles.Paiement.PaiementCheque.IChequeParamEntree): ng.IPromise<any>;
    }
}
