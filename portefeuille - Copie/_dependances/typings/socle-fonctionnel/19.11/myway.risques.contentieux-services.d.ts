
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
    namespace SocleFonctionnel {
        const identifiantBordereauService: string;
        const saisieRiceService: string;
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
        const echeancierService: string;
        const edsService: string;
        const entiteTitulaireService: string;
        const garantieService: string;
        const habilitationsService: string;
        const noteAlerteService: string;
        const operationDiverseService: string;
        const personneService: string;
        const pointBudgetService: string;
        const portefeuilleService: string;
        const processusService: string;
        const paiement: string;
        const paiementCbUnique: string;
        const paiementCheque: string;
        const paiementPrelevement: string;
        const siegeService: string;
        const soldeService: string;
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
        const ETIQUETTE_CEDE: string;
        const ETIQUETTE_ARCHIVE: string;
        const ETIQUETTE_CLOTURE: string;
        const ETIQUETTE_SURENDETTEMENT: string;
        const ETIQUETTE_LIEN_ETAT_DATE: string;
    }
}

declare namespace ContentieuxServices.Constantes.Echeancier {
    const LIBELLE_STATUT_RESPECTE: string;
    const LIBELLE_STATUT_NON_RESPECTE: string;
    const LIBELLE_STATUT_EN_RETARD: string;
    const LIBELLE_STATUT_ATTENTE_SIGNATURE: string;
    const LIBELLE_STATUT_CADUC: string;
    const LIBELLE_STATUT_SUPPRIME: string;
    const LIBELLE_STATUT_TERMINE: string;
    const CODE_ACTION_CREATION: string;
    const CODE_ACTION_SIMULER: string;
    const CODE_ACTION_LECTURE: string;
    const CODE_TYPE_ECHEANCIER_APUREMENT: string;
    const CODE_TYPE_ECHEANCIER_REGLEMENT: string;
    const CODE_TYPE_ECHEANCIER_SURVEILLANCE: string;
    const CODE_TYPE_ECHEANCIER_POINT_BUDGET: string;
    const CODE_PERIODICITE_MENSUELLE: string;
    const CODE_PERIODICITE_TRIMESTRIEL: string;
    const CODE_PERIODICITE_ANNUELLE: string;
    const CODE_ORIGNE_FLUX_DEBITEUR: string;
    const CODE_ORIGNE_FLUX_GARANTIE: string;
    const CODE_ORIGNE_FLUX_AUTRE: string;
    const CODE_ETAT_PLAN_APUREMENT_ATTENTE_SIGNATURE: string;
    const CODE_ETAT_PLAN_APUREMENT_ACTIF: string;
    const CODE_ETAT_PLAN_APUREMENT_EN_RETARD: string;
    const CODE_ETAT_PLAN_APUREMENT_NON_RESPECT: string;
    const CODE_ETAT_PLAN_APUREMENT_CADUC: string;
    const CODE_ETAT_PLAN_APUREMENT_SUPPRIME: string;
    const CODE_ETAT_PLAN_APUREMENT_TERMINE: string;
    const CODE_APUREMENT_TOTAL_OUI: string;
    const CODE_APUREMENT_TOTAL_NON: string;
    const CODE_TAUX_PENALITE_CREANCE_OUI: string;
    const CODE_TAUX_PENALITE_CREANCE_NON: string;
    const CODE_NEIERTZ_OUI: string;
    const CODE_NEIERTZ_NON: string;
    const CODE_MORATOIRE_OUI: string;
    const CODE_MORATOIRE_NON: string;
    const CODE_COURRIER_RELANCE_OUI: string;
    const CODE_COURRIER_RELANCE_NON: string;
    const CODE_COURRIER_MISE_EN_DEMEURE_OUI: string;
    const CODE_COURRIER_MISE_EN_DEMEURE_NON: string;
    const CODE_PRESENCE_HISTORIQUE_OUI: string;
    const CODE_PRESENCE_HISTORIQUE_NON: string;
    const CODE_SMS_NON_PAIEMENT_OUI: string;
    const CODE_SMS_NON_PAIEMENT_NON: string;
    const CODE_SMS_ECHEANCE_OUI: string;
    const CODE_SMS_ECHEANCE_NON: string;
    const CODE_COMPTE_INTERNE: string;
    const CODE_COMPTE_EXTERNE: string;
    namespace Tableau {
        const ENTETE_TABLEAU_PAIEMENT_SIMULATION: string[];
        const ENTETE_TABLEAU_DEGRESSIVITE_SIMULATION: string[];
        const ENTETE_TABLEAU_PAIEMENT_VISUALISATION: string[];
        const ENTETE_TABLEAU_DEGRESSIVITE_VISUALISATION: string[];
    }
}

declare namespace ContentieuxServices.Constantes.Garantie {
    namespace Garantie {
        const sansDetail: string;
        const avecDetail: string;
        const codeCategorieGarantieAutre: string;
        const CODE_NATURE_GARANTIE_PERSONNE_PHYSIQUE: string;
    }
}

declare namespace ContentieuxServices.Constantes {
    namespace ContentieuxHabilitations {
        const superviseur: string;
        const consultation: string;
        const gestionnaire: string;
        type Roles = "superviseur" | "consultation" | "gestionnaire";
        const codeAccesConsultationPortefeuille: string;
        const codeAccesGestionPortefeuille: string;
        const codeAccesIdentificationPortefeuille: string;
        const codeAccesTous: string;
    }
}

declare namespace ContentieuxServices.Constantes.Paiement {
    namespace Commun {
        const CODE_DEVISE_EUR: string;
        const TYPE_PARTICIPANT: string;
        const TITRE_POPUP_ERREUR_PAIEMENT: string;
        const MESSAGE_POPUP_ERREUR_PAIEMENT: string;
        namespace AggravationNonComptable {
            const CODE_SENS_AGGRAVATION: string;
            const LIBELLE_MOUVEMENT_CREANCE_POUR_AGGRAVATION: string;
        }
        namespace Recuperation {
            const CODE_SENS_RECUPERATION: string;
            const CODE_TYPE_ORIGINE_FLUX_RECUPERATION: string;
            const CODE_TYPE_ORIGINE_FLUX_RECUPERATION_GARANTIE: string;
            const INDICATEUR_EVT_DECLENCHEMENT_AUTO_RECUPERATION: string;
        }
        namespace Garantie {
            const SANS_DETAIL: string;
            const AVEC_DETAIL: string;
            const TYPE_GARANTIE: string;
            const CODE_ACTION_MISE_A_JOUR_GARANTIE: string;
            const CODE_ACTION: string;
            const CODE_TYPE_MEMO: string;
            const LIBELLE_MISE_EN_JEU_TOTALE: string;
            const LIBELLE_MISE_EN_JEU_PARTIELLE: string;
            const DATE_DEFAUT: string;
            const MISE_EN_JEU_TOTALE: string;
            const TOP_CREATION_LIEN_HISTO_FINANCIER_GARANTIE: string;
        }
    }
    namespace PaiementEnLigne {
        namespace SMS {
            const NUMERO_MODELE_SMS_VALIDATION_PAIEMENT: {
                "numeroModeleSMS": number;
            };
            const TYPE_RELANCE_02: string;
            const TYPE_ENVOI_RELANCE: string;
            const TAILLE_MAX_SMS: number;
        }
    }
    namespace Prelevement {
        namespace PrelevementPonctuel {
            const TYPE_SORTIE_ORDINAIRE: string;
            const CODE_TYPE_ORIGINE_FLUX_DEBITEUR: string;
            const CODE_TYPE_ORIGINE_FLUX_GARANTIE: string;
            const CODE_TYPE_ORIGINE_FLUX_AUTRE: string;
        }
        namespace OperationFinanciere {
            const CODE_RETOUR_999: number;
            const TOP_VALIDATION_MESSAGE_INFORMATION_OUI: string;
            const TOP_VALIDATION_MESSAGE_INFORMATION_NON: string;
            const INDICATEUR_FORCAGE_OPERATION_FALSE: boolean;
            const CODE_SENS_OPERATION_DEBIT: string;
            const CODE_MODE_FINANCIER_VIREMENT_OPERATION_DIVERSE: string;
            const CODE_INTICATEUR_ANNULATION: string;
            const LIBELLE_MODE_FINANCIER: string;
            const CODE_FONCTIONNALITE_ORIGINE_OPE_RETRAIT: string;
            const LIBELLE_RELEVE_COMPTE_1: string;
            const LIBELLE_RELEVE_COMPTE_2: string;
            const EST_SIGNATAIRE_REPRESENTANT_LEGAL_FALSE: boolean;
            const ELIGIBILITE_SAG_FALSE: boolean;
            namespace Forcage {
                const ERREUR_FORCAGE: string;
                const MESSAGE_ERREUR: string;
                const ENTETE_CONFIRMATION_FORCAGE_CREATION_OPERATION_FINANCIERE_DEPOT_RETRAIT: string;
                const TEXTE_BOUTON_OUI: string;
                const TEXTE_BOUTON_NON: string;
                const TAILLE_MODALE_MD: string;
                const CODE_RETOUR_ERREUR: number;
                const CODE_RETOUR_MOTIF_PRESENT: number;
                const CODE_RETOUR_MOTIF_ABSENT: number;
            }
        }
        namespace OperationDiverse {
            const TYPE_OPERATION_DIVERSE: string;
            const LIBELLE_2_OPERATION_DIVERSE: string;
            const LIBELLE_OPERATION_DIVERSE: string;
            const PREFIXE_CODE_FAMILLE: string;
        }
    }
    namespace Cheque {
        const CODE_TYPE_ORIGINE_FLUX_SURPLUS_CHEQUE: string;
        const INDICATEUR_EVT_DECLENCHEMENT_AUTO_SURPLUS_CHEQUE: string;
        namespace OperationDiverse {
            const TYPE_OPERATION_DIVERSE: string;
            const LIBELLE_OPERATION_DIVERSE: string;
            const PREFIXE_CODE_FAMILLE: string;
            const CODE_MODE_APPARITION_FAMILLE: string;
            const CODE_SENS_TRANSACTION: string;
            const CODE_ANNULATION_OPERATION: string;
            const MODE_FINANCIER: string;
            const TYPE_CHEQUE: string;
        }
    }
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
    const listeCodeProduitServiceNonDechuPlanApurement: string[];
    const listeCodeProduitServiceNonDechuPlanReglement: string[];
    const etiquetteEcheancier: string;
    namespace Lisa {
        const syntheseVersDossierNumeriqueRecouvrement: number;
        const syntheseVersDossierNumeriqueCredit: number;
        const syntheseVersDossierNumeriqueCreditHorsPortail: number;
        const syntheseVersEffectuerPaiement: number;
        const syntheseVersGererEcheancierCreation: number;
        const syntheseVersGererEcheancierVisualisation: number;
        const syntheseVersVARIO: number;
    }
    namespace processusDebrancherVARIO {
        const code: string;
        const libelleEcheancier: string;
        const valeurDepart: string;
        const debranchementNSDKEcranPlanApurement: string;
        const debranchementNSDKEcranPlanReglement: string;
    }
    namespace processusEffectuerPaiement {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
    namespace processusGererEcheancier {
        const code: string;
        const libelleCreation: string;
        const libelleVisualisation: string;
        const libelleGestion: string;
        const valeurDepartCreation: string;
        const valeurDepartAjout: string;
        const valeurDepartModification: string;
        const valeurDepartVisualisation: string;
        const modeCreation: string;
        const modeModification: string;
        const modeVisualisation: string;
        const modeSimulation: string;
    }
    namespace processusGererCreditSynchro {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
    namespace processusDossierNumeriqueCredit {
        const code: string;
        const libelle: string;
        const valeurDepart: string;
    }
}

declare namespace ContentieuxServices.Constantes.Solde {
    const etiquetteDechu: string;
    const etiquetteDebiteur: string;
    const etiquetteSousSurveillance: string;
    const estDechu: string;
    const estSousTraitance: string;
    const codeDecheanceDechu: number;
    const codeDecheanceActive: number;
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
        const libelleMontant2: string;
        const codeCreditNormaux: string;
        const codeCreditRestructure: string;
        const libelleCreditNormaux: string;
        const libelleCreditRestructure: string;
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

declare namespace ContentieuxServices.Constantes.TablesDelocalisees {
    const TABLE_DELOC_TYPES_OD_JU2B: string;
    namespace JU2B {
        const PROPRIETE_TABLE_DELOC_YNOXCE: string;
        const PROPRIETE_TABLE_DELOC_COJXHD: string;
        const PROPRIETE_TABLE_DELOC_COJOFA: string;
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
        identifiantDossierInstruction: string;
        tauxActualisationIFRS: number;
        tauxActualisationCRC: number;
        tauxPenaliteRetard: number;
        typeEcheancier: Modeles.Echeancier.Type;
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
        codeTypeEvenement: string;
        codeSousTypeEvenement: string;
        numeroSousTypeEvenement: number;
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
        identifiantPortefeuille: number;
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
        idEDSGerePar: number;
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

declare namespace ContentieuxServices.Modeles.Echeancier {
    type Mode = "Simple" | "Expert";
    type Type = "Degressivite" | "Paiement";
    type TypePaiement = "Carte Bancaire" | "Prélèvement" | "Mandat / Chèque";
    type Action = "C" | "A" | "M" | "S" | "V" | "VC";
    interface IInputEcheancier {
        numeroDossier: number;
        identifiantCreance: number;
        identifiantEntiteTitulaire: string;
        action: Action;
    }
    interface IInputSimulationEcheancier {
        numeroDossier: number;
        identifiantCreance: number;
        identifiantEntiteTitulaire: string;
        action: Action;
    }
    interface IInputVisualisationEcheancier {
        numeroDossier: number;
        identifiantCreance: number;
        identifiantEntiteTitulaire: string;
        codeProduitService: string;
        typeEcheancier: string;
        action: Action;
    }
    interface IPrelevement {
        isInterne: boolean;
        /**
         * Prélèvement interne
         */
        compteMySys?: MyWay.Model.Contrat;
        /**
         * RICE du prélèvement interne
         */
        rice?: MyWay.Model.Rice;
        iban?: string;
        bic?: string;
        /**
         * Prélèvement externe
         */
        mandat?: string;
        dateSignatureMandat?: string;
    }
    interface ICarteBancaire {
        type: ContentieuxServices.Modeles.Paiement.PaiementCbUnique.CarteBancaireType;
        numero: MyWay.Model.NumCarte;
        dateValidite: string;
        cryptogramme: string;
    }
    interface IEcheancierPaiement {
        typePaiement: TypePaiement;
    }
    interface IEcheancierPaiementCB extends IEcheancierPaiement {
        carteBancaire: ContentieuxServices.Modeles.Echeancier.ICarteBancaire;
    }
    interface IEcheancierPaiementPrelevement extends IEcheancierPaiement {
        /**
         * Interne ou Externe
         */
        modePrelevement?: string;
        parametreListeComptes: MyWay.Model.ParametresListeComptes;
        isNouveauCompte?: boolean;
        listeComptesExternes: string[];
        compteExterne?: string;
        prelevement?: ContentieuxServices.Modeles.Echeancier.IPrelevement;
    }
    interface IEcheancier {
        panel: IPanelEcheancier;
        codeEtablissement: string;
        numeroDossier: number;
        identifiantCreance: string;
        codeTypeProduitService: string;
        codeProduitService: string;
        identifiantContrat: string;
        numeroTitulaire: number;
        isDossierSurendettement: boolean;
        idGerePar: number;
        numeroHistoAccord: number;
        modeEcheancier: Mode;
        typeEcheancier: Type;
        montantAccord: number;
        isTauxApplicable: boolean;
        /**
         * Taux applicable
         * si  = Taux initial de la créance => mettre indicateur pénalité à "O", "N" sinon
         */
        tauxApplicable: number;
        /**
         * Taux initial de la créance
         */
        tauxCreance: number;
        periodicite: string;
        isCalculAuto: boolean;
        montantEcheance: number;
        dureeEcheancier: number;
        montantTotal: number;
        montantRetard: number;
        datePremiereEcheance: Date;
        smsEcheanceAVenir: boolean;
        smsRelanceNonPaiment: boolean;
        editionLettreRelance: boolean;
        editionLettreMiseEnDemeure: boolean;
        isTypeDegressivite: boolean;
        isTypePaiement: boolean;
        isNouveauPayeur: boolean;
        payeur: ContentieuxServices.Modeles.Participant.Participant;
        smsPayeur: string;
        isNouveauSMS: boolean;
        paiement: IEcheancierPaiement;
        statut: string;
        tableauEcheances: ContentieuxServices.Modeles.Echeancier.Tableau.ITableauEcheancier;
        pointBudget: ContentieuxServices.Modeles.PointBudget.PointBudget;
    }
    interface IPanelEcheancier {
        id: string;
        titre: string;
        isOpen: boolean;
    }
    interface IPalier {
        numeroPalier: number;
        duree: number;
        montant: number;
        taux: number;
        restantDu?: number;
    }
}

declare namespace ContentieuxServices.Modeles.Echeancier.Tableau {
    /**
     * Tableau d'un échéancier
     */
    interface ITableauEcheancier {
        isTypeDegressivite: boolean;
        isTypePaiement: boolean;
        listePeriodes: ITableauPeriodeEcheancier[];
    }
    /**
     * Période d'un tableau d'échéancier
     */
    interface ITableauPeriodeEcheancier {
        listeEntetes: string[];
        listeEcheances: IEcheance[];
        totalInterets: number;
    }
    /**
     * Une échéance d'une période
     */
    interface IEcheance {
        rang: string;
        date: Date;
        montant: number;
        etat: string;
    }
    interface IEcheancePaiement extends IEcheance {
        interet: number;
        restantDu: number;
    }
    interface IEcheanceDegressivite extends IEcheance {
        soldeDebiteur: number;
    }
}

declare namespace ContentieuxServices.Modeles.EDS {
    interface IEDSInterne {
        designation: string;
        telephone2: string;
        telephoneAdresse: string;
        fax: string;
        email: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        service: string;
        gestionnaire: string;
        libelleTarifTel: string;
        identifiantSite: number;
    }
    interface IInfoSiege {
        lieuEnregistrement: string;
        raisonSociale: string;
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
        montantEstimation: number;
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
        indicateurValorisatTauxCouvertu: string;
        tauxDecoteGarantie: number;
        indicateurDecoteGarantie: string;
        libelleGarantie: string;
        libelleTypeGarantie: string;
        indicateurContreGarantieRisque: string;
        referenceExterneGarantie: string;
        lienHistoFinanceGarantie: ILienHistoFinanceGarantie;
        objetGarantie: Array<IObjetGarantie>;
    }
    interface IGarantie {
        numeroDossier: number;
        identifiantPersonneGarant: number;
        codeGarantie: string;
        numeroGarantieDossierCTX: number;
        dateFinGarantie: string;
        /**
         * 'O' : La garantie est exprimée en taux
         * 'N' : la garantie est exprimée en montant
         */
        indicateurGarantieEnTaux: string;
        surete: ISurete;
        detailGarantie: IDetailGarantie;
    }
    interface ISurete {
        /**
         * Indique si la garantie est exprimée en
         * taux ou en montant
         * 'O' -> Taux
         * 'N' -> Montant
         */
        indicateurGarantieEnTaux: string;
    }
    interface ISuretePersonnelle extends ISurete {
        quotite: number;
        numeroPersonne: number;
        montant: number;
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
        valeurObjet: Array<IValeurObjet>;
    }
}

declare namespace ContentieuxServices.Modeles.Habilitations {
    interface IHabilitations {
        consultation: boolean;
        gestionnaire: boolean;
        superviseur: boolean;
        portefeuilles: Array<Modeles.Portefeuille.IPortefeuille>;
    }
}

declare namespace ContentieuxServices.Modeles.Paiement.OperationFinanciere {
    interface ICodeForcage {
        /**
         * libellé retourné par la Qr pour expliquer pourquoi il y a une demande de forcage
         */
        libelleForcage: string;
        /**
         * code établissement du compte concerné par la demande de forcage
         */
        codeEtablissementCompteForcage: string;
        /**
         * code guichet du compte concerné par la demande de forcage
         */
        codeGuichetCompteForcage: string;
        /**
         * référence produit service du compte concerné par la demande de forcage
         */
        referenceProduitCompteForcage: string;
        /**
         * ce code retour indique à l'appelant si un forcage est possible ou non. 000 la mise à jour a été faite 999 la mise à jour n'a pas été faite mais peut être forcée
         */
        codeRetour: number;
    }
    interface IDetailOperationCheque {
        /**
         * Numéro du chèque déposé ou retiré
         */
        numeroCheque: string;
        /**
         * Type du chèque déposé ou retiré, à ne valoriser qu'en mode 02
         */
        typeCheque: string;
        /**
         * Nom du bénéficiaire du chèque
         */
        nomBeneficiaire: string;
        /**
         * Indique s'il s'agit de la dernière contrepartie d'un chèque de banque. à ne valoriser qu'en mode 09
         *             Valeurs possibles :
         *  'M'        Le chèque reste ou passe à l'état "en cours".
         *  'L'        Dernière contrepartie, le chèque passe à l'état "émis".
         *  'D'        Identique à 'L' (Besoin PETRA).
         */
        codeDerniereContrePartie: string;
    }
    interface IDetailOperationDiverse {
        /**
         * Type de l'opération diverse, il dépend de la famille du niveau supérieur.
         */
        typeOperationDiverse: string;
        /**
         * grandes familles des opérations diverses
         * Les 3 caractères sont le code famille "007" par exemple
         */
        familleOperationDiverse: string;
        /**
         * le 2 caractères sont variables "  " ou "01" "02" etc
         */
        prefixeCodeFamille: string;
        /**
         * premier libellé à saisir pour une opération diverse
         */
        libelle1OperationDiverse: string;
        /**
         * second libellé à saisir pour une opération diverse
         */
        libelle2OperationDiverse: string;
        /**
         * Libelle de l'operation diverse pour alimenter le JAB
         */
        libelleOperationDiverse: string;
    }
    interface IDetailOperation {
        detailOperationCheque: IDetailOperationCheque;
        detailOperationDiverse: IDetailOperationDiverse;
        /**
         * code établissement financier
         */
        codeEtablissement: string;
        /**
         * code Guichet
         */
        codeGuichet: string;
        /**
         * Référence du produit service ex :04000084683
         */
        referenceProduitService: string;
        /**
         * code du type de référence du produit service, ex : 0004
         */
        codeTypeProduitService: string;
        /**
         * montant de l'opération dont le détail est présenté ici
         */
        montantOperationUnitaire: number;
        /**
         * montant total de l’opération toutes opérations confondues
         */
        montantTotalOperation: number;
        /**
         * premier libellé apparaissant sur le relevé de compte
         */
        libelleReleveCompte1: string;
        /**
         * second libellé apparaissant sur le relevé de compte
         */
        libelleReleveCompte2: string;
        /**
         * nombre de jours d'encaissement du moyen de paiement
         */
        nombreJourEncaissement: string;
        /**
         * code interne sur 4 caractères pour définir la tarification de l'opération
         */
        codeInterneTarification: string;
        /**
         * Numéro du sac de dépot pour alimenter le JAB
         */
        numeroSacDepot: string;
        /**
         * Indique si le signataire est le représentant légal
         */
        estSignataireRepresentantLegal: boolean;
    }
    interface IOperationFinanciere {
        listeDetailsOperation: Array<IDetailOperation>;
        listeCodeForcage: Array<ICodeForcage>;
        /**
         * devise de l'ensemble de l'ensemble des mouvements de l'opération
         */
        deviseOperation: string;
        /**
         * date de valeur souhaitée pour les opérations
         * Type date au format yyyy-MM-dd
         */
        dateValeurOperation: string;
        /**
         * Permet d'indiquer qu'en cas de retour 999 de la QR, le conseiller souhaite poursuivre l'opération. Est utilisé en cas de forçage des contrôles réalisés par les applicatifs.
         */
        indicateurForcageOperation: boolean;
        /**
         * D pour débit; C pour crédit
         * envoyé à la QR : débit : R01 ; crédit V01
         */
        codeSensOperation: string;
        /**
         * 00: VIO; opérations diverses
         * 01:ESP; espèces
         * 02:CHQ; versement chèque
         * 07:VIO ; espèce divers
         * 09:CHB ; retrait chèque de banque
         * 10:DIV ; divers
         */
        codeModeFinancier: string;
        /**
         * Liste des messages d'information nécessitant une validation
         */
        listeMessageInformationValidation: Array<string>;
        /**
         * top O ou N
         * O : validation du message d'information
         * N : pas de validation
         */
        topValidationMessageInformation: string;
        /**
         * code permettant d'indiquer qu'il s'agit d'une operation d'extourne
         */
        codeIndicateurAnnulation: string;
        /**
         * référence inconnue du conseiller
         */
        referenceTechniqueOperation: string;
        /**
         * Libellé du mode financier alimenté pour envoyer au JAB
         */
        libelleModeFinancier: string;
        /**
         * identifiant de la personne permettant d'alimenter le JAB
         */
        identifiantPersonne: number;
        /**
         * Nom d'usage de la personne permettant d'alimenter le JAB
         */
        nomUsagePersonne: string;
        /**
         * Prénom de la personne permettant d'alimenter le JAB
         */
        prenomPersonne: string;
        /**
         * Identifiant de l'opération permettant d'alimenter le JAB
         */
        identifiantBordereauJab: string;
        /**
         * code fonctionnalité d'origine de l'opération permettant d'alimenter le JAB
         */
        codeFonctionnaliteOrigineOpe: string;
        listeDetailsOperationExtourne: Array<IDetailOperationExtourne>;
        /**
         * Indique si le signataire est le représentant légal pour un retrait sur Livret A
         *
         * 0 : Retrait hors Livret A
         * 1 : Retrait sur Livret A avec signataire RL
         * 2 : Retrait sur Livret A sans signataire RL
         */
        indicateurSignataireRL: number;
    }
    interface IDetailOperationExtourne {
        codeEtablissementOpOrigine: string;
        identifiantAgentOpOrigine: number;
        timeStampOpOrigine: string;
    }
}

declare namespace ContentieuxServices.Modeles.Paiement.PaiementCheque {
    interface ICheque {
        date: string;
        maxDate: string;
    }
    interface IChequeParamEntree {
        codeGuichetInterbancaire: string;
        codeTypeProduitService: string;
        infosCommunes: Modeles.Paiement.IPaiementCommun;
        codeFamilleOD: string;
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
    interface IPaiementCommun {
        codeEtablissement: string;
        numeroDossier: string;
        codeAgent: string;
        identifiantCreance: string;
        identifiantContrat: string;
        montantPaiement: number;
        exigibleMyVario: number;
        pertes: number;
        dateValeurOperationContentieux: string;
        referencePayeur: string;
        isGarantie: boolean;
        garantie?: Modeles.Garantie.IGarantie;
        indicateurMisEnJeuGarantieTotale?: string;
    }
}

declare namespace ContentieuxServices.Modeles.Paiement.PaiementPrelevement {
    interface IPrelevement {
        infosCommunes: Modeles.Paiement.IPaiementCommun;
        numeroPersonne: string;
        nomUsagePersonne: string;
        prenomPersonne: string;
        compte: MyWay.Model.Contrat;
        riceCompte: MyWay.Model.Rice;
        referenceContrat: string;
        codeTypeProduitServiceCreance: string;
        codeFamilleOD: string;
    }
    interface IForcageImputation {
        /**
         * True : mode extourne False : mode normal
         */
        modeExtourne: boolean;
        /**
         * "V" Versement "R" Remboursement
         */
        codeSens: string;
        /**
         * Mode financier avec lequel est passée l'opération (quelle que soit son origine).
         * 'ESP' Espèces
         * 'CHQ' Chèque
         * 'VIR' Virement interne
         * 'DIV' Divers
         * 'AUT' Automatique
         * 'VIO' Virement opération diverse
         * 'CHC' Chèque CNCE émis
         * 'CHB' Chèque de banque émis
         */
        modeFinancier: string;
        /**
         * Montant brut de l'opération dans la monnaie de sa prise d'ordre (monnaie initiale) avant chargement de frais, pénalité, taxe ...
         * Le montant net correspond au montant brut quand il n'y a pas de pénalités ou frais
         */
        montantBrutOperation: number;
        /**
         * Cumul des montants en monnaie de prise d'ordre pour tous les comptes constituant l'opération.
         * Versements => Cumul des versements
         * Retraits => Cumul des retraits
         * Virements => Cumul Versements = Cumul Retraits
         */
        montantTotalPriseOrdre: number;
        /**
         * Référence sous laquelle est répertorié par la Banque de France un Etablissement bancaire : Etablissement de crédit, Institution financière.
         */
        codeBanque: string;
        /**
         * Référence d'un guichet domiciliataire au sein d'un Etablissement bancaire : Etablissement de crédit, Institution financière.
         * Code attribué par la Banque de France.
         * Code banque + code guichet identifient un guichet d'un Etablissement en France.
         */
        codeGuichet: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... détenu par un client d'un Etablissement du GCE. X2 / code produit/service X7 / radical X2 / chiffre clé modulo 97
         */
        referenceProduitService: string;
        /**
         * Date de valeur de l'opération (mouvement) sur un compte.
         * Comptabilisation de l'opération en compte : date retenue pour le calcul des intérêts éventuelle -ment dûs par l'une des parties (intérêts créditeur agios ...)
         */
        dateValeur: string;
        /**
         * Code devise
         */
        codeDevise?: string;
    }
}

declare namespace ContentieuxServices.Modeles.Participant {
    type TypeRole = "Titulaire" | "Caution" | "Mandataire" | "Client Bancaire";
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

declare namespace ContentieuxServices.Modeles.PointBudget {
    class PointBudget {
        montantRevenusSalaire: number;
        montantRevenusLocatifs: number;
        montantRevenusAutres: number;
        montantCharges: number;
        constructor(montantSalaire: number, montantRevenusLocatifs: number, montantAutresRevenus: number, montantCharges: number);
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
        codeAgence: string;
        codeEtablissement: string;
        codeModeAcces: string;
        codeTypeRattachement: string;
    }
}

declare namespace ContentieuxServices.Modeles.Processus {
    class ProcessusDebrancherVario implements IProcessus {
        code: string;
        libelle: string;
        valeurDepart: string;
        initData: MyWay.Services.Lisa.IInitialisationData;
        numDossierVario: string;
        identifiantCreanceVario: string;
        ecranVario: string;
        constructor(numeroDossier: string, identifiantCreance: string, ecran: string);
    }
}

declare namespace ContentieuxServices.Modeles.Processus {
    class ProcessusDossierNumeriqueCredit implements IProcessus {
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
    class ProcessusGererEcheancier implements IProcessus {
        code: string;
        libelle: string;
        valeurDepart: string;
        initData: MyWay.Services.Lisa.IInitialisationData;
        identifiantEntiteTitulaire: string;
        numeroDossier: string;
        identifiantCreance: string;
        constructor(identifiantEntiteTitulaire: string, numeroDossier: string, identifiantCreance: string, mode: string, typeEcheancier?: Modeles.Echeancier.Type);
        private createProcessusCreation(identifiantEntiteTitulaire, numeroDossier, identifiantCreance);
        private createProcessusVisualisation(identifiantEntiteTitulaire, numeroDossier, identifiantCreance, typeEcheancier);
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
        montantSoldeRecouvrement: number;
        numeroDossierContratProducteur: string;
        libelle: string;
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
        validerAlerte(codeEtablissement: string, codeTypeEvenement: string, codeSousTypeEvenement: string, numeroEvenementSousType: number): ng.IPromise<any>;
    }
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
         * Liste des alertes de surendettement pour l'agent connecté
         */
        getAlertesSurendettement(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteSurendettement[]>;
        /**
         * Liste des alertes sur échéanciers pour l'agent connecté
         */
        getAlertesEcheanciers(codeEtablissement: string, numeroInterneEds: string): ng.IPromise<Modeles.Agenda.IAlerteEcheancier[]>;
        validerAlerte(codeEtablissement: string, codeTypeEvenement: string, codeSousTypeEvenement: string, numeroEvenementSousType: number): ng.IPromise<any>;
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
        set<T>(key: string, data: T, timeToLive: number): void;
        private isExpired(cacheData);
    }
}

declare module ContentieuxServices.Services.Commun {
    interface ICacheService {
        get<T>(key: string, promise: () => ng.IPromise<T>, timeToLive: number, fromCache?: boolean): ng.IPromise<T>;
        defaultTimeToLive: number;
        set<T>(key: string, data: T, timeToLive: number): void;
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
        /**
         * Indique si le dossier est en surendettement ou pas
         * @param codeEtablissement
         * @param identifiantEntiteTitulaire
         * @param numeroDossier
         */
        isDossierSurendettement(codeEtablissement: string, identifiantEntiteTitulaire: string, numeroDossier: string): ng.IPromise<boolean>;
    }
}

declare namespace ContentieuxServices.Services.Dossier {
    interface IDossierSyntheseService {
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, identifiantCreance?: string, fromCache?: boolean): ng.IPromise<Modeles.Dossier.IInfoDossierHistorique>;
        getContratsVario(codeEtablissement: string, numeroDossier: number, numeroInterneEds: string, idEntiteTitulaire: string, fromCache?: boolean): ng.IPromise<Modeles.Contrat.IContratTuile[]>;
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
        getContratsVario(codeEtablissement: string, numeroDossier: number, numeroInterneEds: string, idEntiteTitulaire: string, fromCache?: boolean): ng.IPromise<Modeles.Contrat.IContratTuile[]>;
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
        /**
         * Maj du libellé pour les 008
         * @param contrat
         * @param idEntiteTitulaire
         */
        private miseAJourLibelleCCE(contrat, idEntiteTitulaire);
        /**
         * Maj des montants Mysys
         * @param contrat
         * @param listeSoldeMinute
         */
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
        /**
         * Retourne le code type de l'échéancier en fonction du type de paiement
         * @param typeEcheancier
         */
        private getTypeEcheancier(codeTypeEcheancier);
    }
}

declare namespace ContentieuxServices.Services.Dossier {
    interface IDossierService {
        getDossiersActifsPortefeuille(codeEtablissement: string, identifiantPortefeuille: number): ng.IPromise<Modeles.Dossier.IDossierListe[]>;
        isDossierSurendettement(codeEtablissement: string, identifiantEntiteTitulaire: string, numeroDossier: string): ng.IPromise<boolean>;
    }
}

declare namespace ContentieuxServices.Services.DossierNumerique {
    class DossierNumeriqueService implements IDossierNumeriqueService {
        private dossierNumeriqueRestService;
        static $inject: string[];
        constructor(dossierNumeriqueRestService: Contentieux.RestServices.Services.DossierNumeriqueMetierService);
        /**
         * Vérifie qu'un dossier numérique existe
         * @param codeFournisseur
         * @param ReferenceRegroupement
         */
        dossierNumeriqueExiste(codeFournisseur: string, referenceRegroupement: string): ng.IPromise<boolean>;
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
        dossierNumeriqueExiste(codeFournisseur: string, referenceRegroupement: string): ng.IPromise<boolean>;
    }
}

declare namespace ContentieuxServices.Services.Echeancier {
    class EcheancierService implements IEcheancierService {
        private echeancierRestService;
        private cacheService;
        private riceService;
        private $q;
        private entiteTitulaireService;
        static $inject: string[];
        constructor(echeancierRestService: Contentieux.RestServices.Services.EcheancierService, cacheService: Services.Commun.ICacheService, riceService: myway.comInterdomaine.SaisieRiceService, $q: ng.IQService, entiteTitulaireService: ContentieuxServices.Services.EntiteTitulaire.IEntiteTitulaireService);
        /**
         * Simulation d'un échéancier pour le montant total uniquement..
         * @param inputEcheancier
         * @param fromCache
         */
        simulerMontantTotalEcheancier(inputEcheancier: ContentieuxServices.Modeles.Echeancier.IEcheancier, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Echeancier.IEcheancier>;
        /**
         * Simulation d'un échéancier
         * @param inputEcheancier
         * @param fromCache
         */
        simulerEcheancier(inputEcheancier: ContentieuxServices.Modeles.Echeancier.IEcheancier, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Echeancier.IEcheancier>;
        /**
         * Création d'un échéancier
         * Et création du point budget associé
         * @param inputEcheancier
         * @param fromCache
         */
        creerEcheancier(inputEcheancier: ContentieuxServices.Modeles.Echeancier.IEcheancier): ng.IPromise<boolean>;
        /**
         * Suppression d'un échéancier
         * @param echeancier
         */
        supprimerEcheancier(echeancier: ContentieuxServices.Modeles.Echeancier.IEcheancier): ng.IPromise<ContentieuxServices.Modeles.Echeancier.IEcheancier>;
        /**
         * Cette méthode créer un objet rest echeancier de type point budget
         * @param echeancier
         * @param pointBudget
         */
        initEcheancierPointBudget(restEcheancier: Contentieux.RestServices.Modeles.IEcheancier, inputPointBudget: ContentieuxServices.Modeles.PointBudget.PointBudget): Contentieux.RestServices.Modeles.IEcheancier;
        /**
         * Initialisation d'un point budget
         * @param inputPointBudget
         */
        initPointBudget(inputPointBudget: ContentieuxServices.Modeles.PointBudget.PointBudget): Contentieux.RestServices.Modeles.IPointBudget;
        /**
         * Liste des échéanciers
         * @param codeEtablissement
         * @param numeroDossier
         * @param identifianCreance
         * @param codeProduitService
         * @param identifiantEntiteTitulaire
         * @param typeEcheancier
         */
        getListeEcheanciers(codeEtablissement: string, numeroDossier: number, identifianCreance: string, codeProduitService: string, identifiantEntiteTitulaire: number, typeEcheancier: Modeles.Echeancier.Type): ng.IPromise<[ContentieuxServices.Modeles.Echeancier.IEcheancier[], ContentieuxServices.Modeles.Echeancier.IEcheancier[]]>;
        /**
         * Echeancier simple de paiement
         * @param inputEcheancier
         */
        private initEcheancierSimplePaiement(inputEcheancier, codeAction);
        /**
         * Echeancier simple de degressivite
         * @param inputEcheancier
         */
        private initEcheancierSimpleDegressivite(inputEcheancier, codeAction);
        /**
         * Echeancier simple de paiement
         * @param inputEcheancier
         */
        private initEcheancierSimplePaiementPourCalculMontantTotal(inputEcheancier, codeAction);
        /**
         * Echeancier simple de degressivite
         * @param inputEcheancier
         */
        private initEcheancierSimpleDegressivitePourCalculMontantTotal(inputEcheancier, codeAction);
        /**
         * Initialisation d'un palier
         * Retourne palier et le code d'indicateur pour le taux de pénalité créeance
         * @param numero
         * @param duree
         * @param taux
         * @param montant
         */
        private initPalier(numero, duree, tauxApplicable, montant, tauxCreance);
        /**
         * Initialisation d'un compte
         * @param numero
         * @param quotite
         * @param montant
         * @param prelevement
         */
        private initCompte(quotite, montant, prelevement);
        /**
         * Initialisation d'un compte temporaire (pour le calcul du montant total)
         * @param numero
         * @param quotite
         * @param montant
         * @param prelevement
         */
        private initCompteTemporaire();
        initPrelevementInterne(restCompte: Contentieux.RestServices.Modeles.ICompte): ContentieuxServices.Modeles.Echeancier.IEcheancierPaiementPrelevement;
        /**
         * Mappage des listes : récupération du nom du titulaire
         * @param listeRest
         * @param identifiantEntiteTitulaire
         */
        private mappeListeEcheanciers(listeRest, identifiantEntiteTitulaire);
        /**
         * Mappe Echancier
         * @param restEcheancier
         * @param identifiantEntiteTitulaire
         * @param inputEcheancier
         */
        private mappeEcheancier(restEcheancier, identifiantEntiteTitulaire, inputEcheancier?);
        /**
         * Mappage du statut
         * @param codeEtatPlanApurement
         */
        private mappeStatut(codeEtatPlanApurement);
        /**
         * Mappage d'un panel
         * @param echeancier
         * @param codeEtablissement
         * @param identifiantEntiteTitulaire
         * @param numeroTitulaire
         */
        private mappePanel(echeancier, codeEtablissement, identifiantEntiteTitulaire, numeroTitulaire);
        private mappePaiementPrelevement(restCompte);
        /**
         * Mappe le tableau des échances REST / SERVICE
         * @param mode : S pour simulation / V pour Visualisation ( colonne Etat supplémentaire )
         * @param restListePeriode
         */
        private mappeTableau(restListePeriode, typeEcheancier, mode);
        /**
         * Mappe une période d'un échéancier de paiement REST / SERVICE
         * @param mode : S pour simulation / V pour Visualisation ( colonne Etat supplémentaire )
         * @param restPeriode
         */
        private mappePeriodePaiement(restPeriode, mode);
        /**
         * Mappe une période d'un échéancier de degressivite REST / SERVICE
         * @param mode : S pour simulation / V pour Visualisation ( colonne Etat supplémentaire )
         * @param restPeriode
         */
        private mappePeriodeDegressivite(restPeriode, mode);
        /**
         * Mappe une échéance de paiement REST / SERVICE
         * @param restEcheance
         */
        private mappeEcheancePaiement(restEcheance);
        /**
         * Mappe une échéance de paiement REST / SERVICE
         * @param restEcheance
         */
        private mappeEcheanceDegressivite(restEcheance);
        /**
         * Mappe le point budget
         * @param echeancier
         */
        private mappePointBudget(echeancier);
        /**
         * Retourne code de la périodicité en fonction du libellé
         * @param periodicite
         */
        private getCodePeriodicite(periodicite);
        /**
         * Retourne le libelle de la périodicité en fonction du code
         * @param periodicite
         */
        private getLibellePeriodicite(code);
        /**
         * Retourne le code type de l'échéancier en fonction du type de paiement
         * @param typeEcheancier
         */
        private getCodeTypeEcheancier(typeEcheancier);
        /**
         * Retourne le code type de l'échéancier en fonction du type de paiement
         * @param typeEcheancier
         */
        private getTypeEcheancier(codeTypeEcheancier);
        /**
         *  Récupération des infos du participants dossier  en fonction du nodape du titulaire
         */
        private getParticipant(codeEtablissement, identifiantEntiteTitulaire, numeroTitulaire);
        private getPointBudget(codeEtablissement, numeroDossier, identifiantCreance, codeProduitService, typeEcheancier, numeroHistoAccord);
    }
}

declare namespace ContentieuxServices.Services.Echeancier {
    interface IEcheancierService {
        simulerMontantTotalEcheancier(inputEcheancier: ContentieuxServices.Modeles.Echeancier.IEcheancier, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Echeancier.IEcheancier>;
        simulerEcheancier(echeancier: ContentieuxServices.Modeles.Echeancier.IEcheancier, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Echeancier.IEcheancier>;
        creerEcheancier(echeancier: ContentieuxServices.Modeles.Echeancier.IEcheancier): ng.IPromise<boolean>;
        supprimerEcheancier(echeancier: ContentieuxServices.Modeles.Echeancier.IEcheancier): ng.IPromise<ContentieuxServices.Modeles.Echeancier.IEcheancier>;
        getListeEcheanciers(codeEtablissement: string, numeroDossier: number, identifianCreance: string, codeProduitService: string, identifiantEntiteTitulaire: number, typeEcheancier: Modeles.Echeancier.Type): ng.IPromise<[ContentieuxServices.Modeles.Echeancier.IEcheancier[], ContentieuxServices.Modeles.Echeancier.IEcheancier[]]>;
    }
}

declare namespace ContentieuxServices.Services.EDS {
    class EDSService implements IEDSService {
        private $q;
        private edsRestService;
        static $inject: string[];
        constructor($q: ng.IQService, edsRestService: Contentieux.RestServices.Services.IEDSService);
        /**
         * récupère les informations  EDS d'un agent
         * @param codeEtablissement
         * @param idPersonne
         */
        getInformationEDSInterne(codeEtablissement: string, refInterneEDS: number): ng.IPromise<Modeles.EDS.IEDSInterne>;
        getInformationSiege(codeEtablissement: string, identifiantElementStructure: number, typeOrganisation: string): ng.IPromise<Modeles.EDS.IInfoSiege>;
    }
}

declare namespace ContentieuxServices.Services.EDS {
    interface IEDSService {
        getInformationEDSInterne(codeEtablissement: string, refInterneEDS: number): ng.IPromise<Modeles.EDS.IEDSInterne>;
        getInformationSiege(codeEtablissement: string, identifiantElementStructure: number, typeOrganisation: string): ng.IPromise<Modeles.EDS.IInfoSiege>;
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
         * récupère les personnes liées à l'entité titulaire + la désignation de l'entité titulaire
         * @param codeEtablissement
         * @param idEntite
         * @param fromCache
         */
        getParticipantsAvecEntiteTitulaire(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Participant.Participant[]>;
        /**
         * Mappe la désignation de l'ET en participant
         * Utilisé pour l'affichage des payeurs dans la saisie d'un échéancier
         * @param caracteristiqueET
         */
        private mappeDesignationEntiteTitulaireToParticipant(caracteristiqueET);
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
         * @description Récupères la designation de plusieurs entiteTitulaires
         * @param listeInterrogationDesignation
         */
        getEntitesTitulairesDesignation(listeInterrogationDesignation: Contentieux.RestServices.Modeles.IListeInterrogationDesignation): ng.IPromise<ContentieuxServices.Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        /**
         * @description Converti les objects de type IDesignation en IEntiteTitulaire, met à null [domiciliation, idDomiciliation, modeComposition]
         * @param et : entiteTitulaire reçu sous le type IDesignation
         */
        private conversionIDesignationToIEntiteTitulaire(et);
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
        getEntitesTitulairesDesignation(listeInterrogationDesignation: Contentieux.RestServices.Modeles.IListeInterrogationDesignation): ng.IPromise<ContentieuxServices.Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        getEntitesTitulairesFromIdPersonne(codeEtablissement: string, idPersonne: number, fromCache?: boolean): ng.IPromise<Modeles.EntiteTitulaire.IEntiteTitulaire[]>;
        getParticipants(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Participant.Participant[]>;
        getParticipantsAvecEntiteTitulaire(codeEtablissement: string, idEntite: number, fromCache?: boolean): ng.IPromise<ContentieuxServices.Modeles.Participant.Participant[]>;
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
        getDesignationPersonneGarantie(numeroPersoneGarantie: number, fromCache?: boolean): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale>;
        /**
         * @description Récupère la designation de plusieurs personnes
         * @param listeInterrogationDesignation
         */
        getListeGarantiesPersonnesMorales(listeInterrogationDesignation: Contentieux.RestServices.Modeles.Tiers.IListeInterrogationDesignation): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale[]>;
        /**
         * @description Converti les obejets de types Tiers.IDesignation en IGarantiePersonneMorale,
         * @param personne : personne reçu sous le type Tiers.IDesignation
         */
        private conversionIDesignationPersonneToIGarantiePersonneMorale(personne);
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
        getDesignationPersonneGarantie(numeroPersoneGarantie: number, fromCache?: boolean): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale>;
        getListeGarantiesPersonnesMorales(listeInterrogationDesignation: Contentieux.RestServices.Modeles.Tiers.IListeInterrogationDesignation): ng.IPromise<Modeles.Garantie.IGarantiePersonneMorale[]>;
        getListeGarantiesContrat(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, topDetails: string, numeroGarantieDossierCTX?: number): ng.IPromise<Modeles.Garantie.IGarantie[]>;
    }
}

declare namespace ContentieuxServices.Services.Habilitations {
    class HabilitationsService implements IHabilitationsService {
        private serviceAgent;
        private $q;
        private portefeuilleRestService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent, $q: ng.IQService, portefeuilleRestService: Contentieux.RestServices.Services.IPortefeuilleService);
        private isRoleSuperviseur();
        private isRoleConsultation();
        private isRoleGestionnaire();
        isHabilite(role: Constantes.ContentieuxHabilitations.Roles): MyWay.Services.IPromesse<boolean>;
        getHabilitationsPortefeuilles(codeEtablissement: string, identifiantEDS: string): ng.IPromise<Modeles.Portefeuille.IPortefeuille[]>;
        isPortefeuilleHabiliteGestion(identifiantPortefeuille: number, listePortefeuilles: Modeles.Portefeuille.IPortefeuille[]): boolean;
        isPortefeuilleHabiliteConsultation(identifiantPortefeuille: number, listePortefeuilles: Modeles.Portefeuille.IPortefeuille[]): boolean;
        /**
         * Indique si le portefeuille est en mode d'accès "Identification" (donc interdit ..)
         * Retourne le portefeuille du dossier également
         * @param identifiantPortefeuille
         * @param listePortefeuilles
         */
        isPortefeuilleHabiliteIdentification(identifiantPortefeuille: number, listePortefeuilles: Modeles.Portefeuille.IPortefeuille[]): [boolean, string];
    }
}

declare namespace ContentieuxServices.Services.Habilitations {
    interface IHabilitationsService {
        isHabilite(role: Constantes.ContentieuxHabilitations.Roles): MyWay.Services.IPromesse<boolean>;
        getHabilitationsPortefeuilles(codeEtablissement: string, identifiantEDS: string): ng.IPromise<Modeles.Portefeuille.IPortefeuille[]>;
        isPortefeuilleHabiliteGestion(identifiantPortefeuille: number, listePortefeuilles: Modeles.Portefeuille.IPortefeuille[]): boolean;
        isPortefeuilleHabiliteConsultation(identifiantPortefeuille: number, listePortefeuilles: Modeles.Portefeuille.IPortefeuille[]): boolean;
        isPortefeuilleHabiliteIdentification(identifiantPortefeuille: number, listePortefeuilles: Modeles.Portefeuille.IPortefeuille[]): [boolean, string];
    }
}

declare namespace ContentieuxServices.Services.OperationDiverse {
    interface IOperationDiverseService {
        getCodeFamilleParCodeType(codeEtablissement: string, codeType: string): ng.IPromise<MyWay.Model.TypeOperationDiverse>;
    }
}

declare namespace ContentieuxServices.Services.OperationDiverse {
    class OperationDiverseService implements IOperationDiverseService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getCodeFamilleParCodeType(codeEtablissement: string, codeType: string): ng.IPromise<MyWay.Model.TypeOperationDiverse>;
    }
}

declare namespace ContentieuxServices.Services.Paiement {
    interface IPaiement {
        getEligibiliteModePaiement(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Modeles.Paiement.IEligibiliteModePaimt>;
        getlistePayeurChqPrelev(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, idEntiteTitulaire: number, avecGaranties: boolean): ng.IPromise<Modeles.Paiement.PaiementCheque.IPayeur[]>;
        getlistePayeurCB(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, idEntiteTitulaire: number, avecGaranties: boolean): ng.IPromise<Modeles.Paiement.PaiementCheque.IPayeur[]>;
    }
    class Paiement implements IPaiement {
        private $q;
        private paiementService;
        private dossierSyntheseService;
        private garantieService;
        private dossierService;
        private entiteTitulaireService;
        static $inject: string[];
        constructor($q: ng.IQService, paiementService: Contentieux.RestServices.Services.IPaiementService, dossierSyntheseService: ContentieuxServices.Services.Dossier.IDossierSyntheseService, garantieService: ContentieuxServices.Services.Garantie.IGarantieService, dossierService: Contentieux.RestServices.Services.IDossierService, entiteTitulaireService: ContentieuxServices.Services.EntiteTitulaire.IEntiteTitulaireService);
        getEligibiliteModePaiement(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Modeles.Paiement.IEligibiliteModePaimt>;
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
         * Méthode permettant de récupérer la liste des payeurs pour le paiement par chèque et prélévement
         * La liste des garanties inclus la liste des cautions
         * Récupération de la liste des participants, sauf les cautions
         * @param codeEtablissement
         * @param numeroDossier
         * @param identifiantCreance
         * @param idEntiteTitulaire
         * @param avecGaranties
         */
        getlistePayeurCB(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, idEntiteTitulaire: number, avecGaranties: boolean): ng.IPromise<Modeles.Paiement.PaiementCheque.IPayeur[]>;
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
    }
}

declare namespace ContentieuxServices.Services.Personne {
    interface IPersonneService {
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
        getListeTelsMobile(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<string[]>;
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
        /**
         * Récupére les medias mobiles de la personne
         * @param codeEtablissement
         * @param identifiantPersonne
         */
        getListeTelsMobile(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<string[]>;
    }
}

declare namespace ContentieuxServices.Services.PointBudget {
    interface IPointBudgetService {
        getPointBudget(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, codeProduitService: string, typeEcheancier: string, numeroHistoAccord: number): any;
    }
}

declare namespace ContentieuxServices.Services.PointBudget {
    class PointBudgetService implements IPointBudgetService {
        private $q;
        private pointBudgetRestService;
        private cacheService;
        static $inject: string[];
        constructor($q: ng.IQService, pointBudgetRestService: Contentieux.RestServices.Services.IEcheancierService, cacheService: Services.Commun.ICacheService);
        getPointBudget(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, codeProduitService: string, typeEcheancier: string, numeroHistoAccord: number): ng.IPromise<ContentieuxServices.Modeles.PointBudget.PointBudget>;
    }
}

declare namespace ContentieuxServices.Services.Portefeuille {
    interface IPortefeuilleService {
        getPortefeuillesByEtablissement(codeEtablissement: string, optionMesPortefeuilles: boolean): ng.IPromise<Modeles.Portefeuille.IPortefeuille[]>;
        getPortefeuillesByEDS(codeEtablissement: string, identifiantEDS: string, optionMesPortefeuilles: boolean): ng.IPromise<[Modeles.Portefeuille.IPortefeuille[], Modeles.Portefeuille.IPortefeuille[], Modeles.Portefeuille.IPortefeuille[]]>;
        filtrerHabilitationsPortefeuille(listePortefeuilles: ContentieuxServices.Modeles.Portefeuille.IPortefeuille[], listeHabilitationsPortefeuilles: ContentieuxServices.Modeles.Portefeuille.IPortefeuille[]): ContentieuxServices.Modeles.Portefeuille.IPortefeuille[];
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
        filtrerHabilitationsPortefeuille(listePortefeuilles: ContentieuxServices.Modeles.Portefeuille.IPortefeuille[], listeHabilitationsPortefeuilles: ContentieuxServices.Modeles.Portefeuille.IPortefeuille[]): ContentieuxServices.Modeles.Portefeuille.IPortefeuille[];
    }
}

declare namespace ContentieuxServices.Services.Processus {
    interface IProcessusService {
        getListeProcessusPourContratMySys(habilitations: ContentieuxServices.Modeles.Habilitations.IHabilitations, dossier: Modeles.Dossier.IDossierSynthese, contrat: Modeles.Contrat.IContratTuile): Modeles.Processus.IProcessusADebrancher[];
        getListeProcessusPourContratMyVario(habilitations: ContentieuxServices.Modeles.Habilitations.IHabilitations, dossier: Modeles.Dossier.IDossierSynthese, contrat: Modeles.Contrat.IContratTuile): Modeles.Processus.IProcessusADebrancher[];
    }
}

declare namespace ContentieuxServices.Services.Processus {
    class ProcessusService implements IProcessusService {
        private dossierNumeriqueService;
        private habilitationsService;
        static $inject: string[];
        constructor(dossierNumeriqueService: Services.DossierNumerique.DossierNumeriqueService, habilitationsService: ContentieuxServices.Services.Habilitations.IHabilitationsService);
        getListeProcessusPourContratMySys(habilitations: ContentieuxServices.Modeles.Habilitations.IHabilitations, dossier: Modeles.Dossier.IDossierSynthese, contrat: Modeles.Contrat.IContratTuile): Modeles.Processus.IProcessusADebrancher[];
        getListeProcessusPourContratMyVario(habilitations: ContentieuxServices.Modeles.Habilitations.IHabilitations, dossier: Modeles.Dossier.IDossierSynthese, contrat: Modeles.Contrat.IContratTuile): Modeles.Processus.IProcessusADebrancher[];
        private isExigible(dettes);
        private getProcessusEffectuerPaiement(dossier, contrat);
        private getProcessusGererEcheancierCreation(dossier, contrat);
        private getProcessusGererEcheancierVisualisation(dossier, contrat);
        private getProcessusCreditSynchro(dossier, contrat);
        private isAutoriseDNC(codeProduitService);
        /**
         * Processus hors portail, hors processus, donc débranchement lisa
         * @param codeEtablissement
         * @param dossier
         * @param referenceDNC
         */
        private getProcessusDossierNumeriqueCredit(codeEtablissement, dossier, referenceDNC);
        private isAutoriseNonDechuPlanApurement(codeProduitService);
        private getProcessusDebrancherVarioEcheancier(dossier, contrat, ecran);
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
        private getLibelleCreditConso(identifiantContrat, codeOffre);
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
        effectuerPaiementCheque(input: Modeles.Paiement.PaiementCheque.IChequeParamEntree): ng.IPromise<void>;
    }
    class PaiementCheque implements IPaiementChequeService {
        private creanceService;
        static $inject: string[];
        constructor(creanceService: Contentieux.RestServices.Services.ICreanceService);
        effectuerPaiementCheque(input: Modeles.Paiement.PaiementCheque.IChequeParamEntree): ng.IPromise<void>;
    }
}

declare namespace ContentieuxServices.Services.Paiement.PaiementPrelevement {
    interface IPaiementPrelevementService {
        effectuerPaiementParPrelevement(input: Modeles.Paiement.PaiementPrelevement.IPrelevement): ng.IPromise<any>;
        controlerForcages(inputData: Modeles.Paiement.PaiementPrelevement.IPrelevement): ng.IPromise<[number, string]>;
    }
    class PaiementPrelevement implements IPaiementPrelevementService {
        private operationFinanciereRestService;
        private identifiantBordereauService;
        private modalService;
        private paiementRestService;
        private $q;
        static $inject: string[];
        constructor(operationFinanciereRestService: Contentieux.RestServices.Services.IOperationFinanciereService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, modalService: MyWay.UI.IModalService, paiementRestService: Contentieux.RestServices.Services.IPaiementService, $q: ng.IQService);
        /**
         * Methode qui va effectuer un prélèvement TP et l'OD comptable
         * @param input
         */
        private effectuerPrelevementPonctuel(input);
        controlerForcages(inputData: Modeles.Paiement.PaiementPrelevement.IPrelevement): ng.IPromise<[number, string]>;
        /**
         * Méthode de paiement par prélèvement
         * @param inputData
         */
        effectuerPaiementParPrelevement(inputData: Modeles.Paiement.PaiementPrelevement.IPrelevement): ng.IPromise<any>;
    }
}
