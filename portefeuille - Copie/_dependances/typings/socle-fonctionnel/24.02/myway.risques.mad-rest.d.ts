
declare module Mad.Rest {
    var app: ng.IModule;
}

declare module Mad.Rest.Constantes {
    module Url {
        const URL_REST: string;
        module MouvAttenteDecision {
            const BASE: string;
            const ANNULATION_DECISION: string;
            const AUDIT_TARIFICATION: string;
            const CARACTERISTIQUE: string;
            const COMMENTAIRE: string;
            const COMPTE_FORCAGE: string;
            const DECISION: string;
            const DELEGATAIRE: string;
            const DEMANDE_DELEGATION: string;
            const DEPLOIEMENT_MAD: string;
            const INFO_SPECIFIQUE_ET_MAD: string;
            const JOURNAL: string;
            const LISTE_DELEGATAIRE: string;
            const MESSAGE_SMS: string;
            const RECHERCHE_FORCAGE_AUTO: string;
            const RECHERCHE_HISTORIQUE: string;
            const RECHERCHE_MAD_DU_JOUR: string;
            const SUIVI_ACTIVITE: string;
            const SYNTHESE: string;
            const SYNTHESE_HISTORIQUE: string;
            const SYNTHESE_TARIFICATION: string;
            const VISION_FINANCIERE: string;
            const SOLDE_DISPONIBLE: string;
            const CONTROLE_DELEGATAIRE: string;
            const CONTROLE_DELEGATION: string;
            const PRISE_DECISION: string;
        }
        module AgentV2 {
            const BASE: string;
            const RECHERCHE: string;
        }
        module CreFonctionnelV1 {
            const BASE: string;
            const CREFONCTIONNEL: string;
        }
        module StructureV2 {
            const BASE: string;
            const CARACTERISTIQUE_EDS: string;
            const POSTE_FONCTIONNEL_AGENT: string;
            const RECHERCHE_EDS_NIVEAU_INFERIEUR: string;
            const RECHERCHE_EDS_REGRP_MAD: string;
        }
        module TiersV3 {
            const BASE: string;
            const MEDIA: string;
        }
        module MouvAttenteDecisionParam {
            const BASE = "/mouvattentedecisparm/v1";
            const COURRIER: string;
            const TABLE_PARAM: string;
        }
        module DelegationV1 {
            const BASE: string;
            const DEMANDE: string;
        }
    }
    module Inject {
        const ANNULATION_DECISION_REST_SERVICE: string;
        const AUDIT_TARIFICATION_REST_SERVICE: string;
        const CARACTERISTIQUE_REST_SERVICE: string;
        const COMMENTAIRE_REST_SERVICE: string;
        const COMPTE_FORCAGE_REST_SERVICE: string;
        const DECISION_REST_SERVICE: string;
        const DELEGATAIRE_REST_SERVICE: string;
        const DEMANDE_DELEGATION_REST_SERVICE: string;
        const DEPLOIEMENT_MAD_REST_SERVICE: string;
        const INFO_SPECIFIQUE_ET_MAD_REST_SERVICE: string;
        const JOURNAL_REST_SERVICE: string;
        const LISTE_DELEGATAIRE_REST_SERVICE: string;
        const MESSAGE_SMS_REST_SERVICE: string;
        const RECHERCHE_FORCAGE_AUTO_REST_SERVICE: string;
        const RECHERCHE_HISTORIQUE_REST_SERVICE: string;
        const RECHERCHE_MAD_JOUR_REST_SERVICE: string;
        const SUIVI_ACTIVITE_REST_SERVICE: string;
        const SYNTHESE_REST_SERVICE: string;
        const SYNTHESE_HISTORIQUE_REST_SERVICE: string;
        const SYNTHESE_TARIFICATION_REST_SERVICE: string;
        const VISION_FINANCIERE_REST_SERVICE: string;
        const SOLDE_DISPONIBLE_REST_SERVICE: string;
        const RECHERCHE_AGENT_REST_SERVICE: string;
        const CRE_FONCTIONNEL_REST_SERVICE: string;
        const CARACTERISTIQUE_EDS_REST_SERVICE: string;
        const POSTE_FONCTIONNEL_AGENT_REST_SERVICE: string;
        const RECHERCHE_EDS_NIVEAU_INFERIEUR_REST_SERVICE: string;
        const RECHERCHE_EDS_REGRP_MAD_REST_SERVICE: string;
        const MEDIA_REST_SERVICE: string;
        const COURRIER_REST_SERVICE: string;
        const TABLE_PARAM_REST_SERVICE: string;
        const CONTROLE_DELEGATAIRE_REST_SERVICE: string;
        const CONTROLE_DELEGATION_REST_SERVICE: string;
        const PRISE_DECISION_REST_SERVICE: string;
        const DEMANDE_REST_SERVICE: string;
    }
}

declare module Mad.Rest.AgentV2.Modele.Recherche {
    interface IParametreRecherche {
        typeRecherche: number;
        codeEtablissement: string;
        identifiantEDSRattachement?: number;
        codeAction?: string;
    }
    interface IParametreRechercheParNomAgent {
        typeRecherche: string;
        codeEtablissement: string;
        nomAgentDebutPlage: string;
        nombreMaximumReponse: number;
        indicateurAgentNonNominatif?: number;
        codeAction?: string;
    }
    interface IRechercheAgent {
        listeAgents: Array<IAgent>;
    }
    interface IAgent {
        codeEtablissement: string;
        identifiantElementStructure: number;
        referenceElementStructure: number;
        designationAgent: string;
        dateDebutValiditeAgent: string;
        dateFinValiditeAgent: string;
        typeFonction: string;
        libelleFonction: string;
        identifiantEDSHierarchique: number;
        referenceEDSHierarchique: number;
        typeEDSHierarchique: string;
        libelleTypeEDSHierarchique: string;
        libelleEDSHierarchique: string;
        identifiantAgent: string;
        indicateurAgentNonNominatif: string;
        typePersonnalisation: string;
        indicateurAffectationTemporaire: string;
        indicateurNonElligibiliteRDV: string;
    }
    interface IZoneDeTravail {
        codeSuiteListe: string;
    }
}

declare module Mad.Rest.CreFonctionnel.Modele.CreFonctionnel {
    interface IParametreGet {
        codeNatureFlux: string;
        codeModeEchange: string;
    }
    interface ICreFonctionnel {
        caracteristiqueCRE: ICaracteristiqueCRE;
        partieSpecifiqueCRE: Array<IPartieSpecifiqueCRE>;
    }
    interface ICaracteristiqueCRE {
        codeComposantApplicatif: string;
        codeEvenement: string;
        numeroVersion: string;
        codeServiceInitiateur: string;
        numeroVersionServiceInitiateur: string;
        codeTypeEntiteEvenement: string;
        identifiantEntiteEvenement: string;
        dateEvenement: string;
    }
    interface IPartieSpecifiqueCRE {
        numeroSegmentCre: number;
        codeStructureDonneeEvenement: string;
        zoneBanaliseeCre: string;
    }
    interface IEntiteApplicativeRetour {
        codeService: string;
        numeroVersionService: string;
        codeRetour: string;
        codeAnomalie: string;
        libelleAnomalie: string;
    }
}

declare module Mad.Rest.DelegationV1.Modele.Demande {
    interface IDemandeControleDelegation {
        codeEtablissement: string;
        codeApplicationAppelante: string;
        dateHeureDemande: string;
        agent: IAgent;
        questions: Array<IQuestion>;
    }
    interface IAgent {
        codeAgent: number;
        typeFonctionAgent: string;
        identifiantPosteFonctionnel: number;
    }
    interface IQuestion {
        idQuestion: string;
        data: IData;
    }
    interface IData {
        note: string;
        typeNote: string;
        categorieClient: string;
        produit: IProduit;
        personnes: Array<IPersonneAppelAdelys>;
        idLienDatamart: Array<ILienDatamart>;
    }
    interface IProduit {
        codeProduitNiv3: string;
        codeProduitNiv4: string;
        codeProduitNiv5: string;
        infoMouvementMAD: IInfoMouvementMAD;
    }
    interface IInfoMouvementMAD {
        pourcentDecouvert: number;
        soldeForcageMAD: number;
        montantRejetMax: number;
    }
    interface IPersonneAppelAdelys {
        identifiantPersonne: number;
        codeNAF: string;
        cotationFibenSociete: string;
        cotationFibenDirigeant: string;
        topageWatchListLocale: string;
        topageWatchListNationale: string;
        topageWatchListBanqueReferente: string;
        fichageFCC: boolean;
        fichageFICP: boolean;
        paysTerritorialite: string;
        departementsTerrit: string;
        incidents: Array<IIncidentAppelAdelys>;
    }
    interface IIncidentAppelAdelys {
        clientAvecIncident: string;
    }
    interface ILienDatamart {
        cle: string;
        valeur: string;
    }
    interface IRetourControleDelegation {
        codeEtablissement: string;
        codeApplicationAppelante: string;
        dateHeureDemande: string;
        identifiantDemande: number;
        autorisation: boolean;
        niveauDelegataireMinimum: INiveauDelegataireMinimum;
        message: string;
        numeroCompteBancaire: string;
    }
    interface INiveauDelegataireMinimum {
        identifiantEchelleDelegataire: number;
        libelleEchelleDelegataire: string;
        niveauDelegataire: number;
        libelleNiveauDelegataire: number;
        rangNiveau: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.AnnulationDecision {
    interface IAnnulationDecision {
        codeEtablissement: string;
        codeAgentConnecte: string;
        listeMouvementMadAnnule: Array<IMouvementMad>;
    }
    interface IMouvementMad {
        codeOrigine: string;
        identifiantMouvementMadAgence: number;
        identifiantMouvementMadSiege: string;
        codeTypeDecision: string;
        identifiantEdsDecidePar: number;
        resultatPriseDecision: IResultatPriseDecision;
        timestampDecisionMouvement: string;
    }
    interface IResultatPriseDecision {
        messageApplicatif: string;
        messageAvertissement: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.AuditTarification {
    interface IParametreGet {
        codeTypeRecherche: string;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeAgentConnecte: string;
    }
    interface IAuditTarification {
        messageAvertissement: string;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        listeJourneeAudit: Array<IJourneeAudit>;
    }
    interface IJourneeAudit {
        dateJourneeAudit: string;
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        infoStructure: IInfoStructure;
        infoFinanciere: IInfoFinanciere;
        synthese: ISynthese;
        listeMouvementAudit: Array<IMouvementAudit>;
    }
    interface IInfoStructure {
        codeTypeEdsGerePar: string;
        identifiantInterneEdsGerePar: number;
        identifiantExterneEdsGerePar: number;
        identifiantInterneEdsDomicilieA: number;
        identifiantExterneEdsDomicilieA: number;
    }
    interface IInfoFinanciere {
        codeDeviseCompteBancaire: string;
        soldeDisponibleDeReference: number;
        soldeDisponibleFinJournee: number;
        soldeReel: number;
        montantDecouvertAutorise: number;
        soldeActualiseApurementVario: number;
        montantReservesEncaissement: number;
        montantMouvementsMadEcartes: number;
    }
    interface ISynthese {
        nombreMouvementTarifable: number;
        nombreMouvementReellementTarife: number;
        montantGlobalReellementTarife: number;
        nombreExoneration: number;
    }
    interface IMouvementAudit {
        numeroSequence: number;
        codeTypeMouvementAudit: string;
        indicateurCIUniqueDebitDiffere: string;
        indicateurTarification: string;
        soldeDisponibleRecalcule: number;
        infoMad: IInfoMad;
        compteTarification: ICompteTarification;
        operation: IOperation;
        listePrestation: Array<IPrestation>;
    }
    interface IInfoMad {
        identifiantMouvementMad: number;
        codeMotifEntreeAuMad: string;
        codeTypeDecision: string;
        ribDestinationForcage: string;
    }
    interface ICompteTarification {
        codeGuichetCompteTarification: string;
        numeroCompteTarification: string;
    }
    interface IOperation {
        libelleOperation: string;
        libelleOperationEnrichi: string;
        codeDeviseMontantOperation: string;
        montantOperation: number;
        dateOperationEffective: string;
    }
    interface IPrestation {
        numeroPrestation: number;
        indicateurTypePrestation: string;
        montantTarifableTheorique: number;
        montantATarifer: number;
        statutTarification: string;
        montantReellementTarife: number;
        datePrelevementFrais: string;
        motifExoneration: string;
        libelleMotifExoneration: string;
        dateRemise: string;
        motifRemise: string;
        libelleMotifRemise: string;
        montantRemise: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Caracteristique {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantMouvementMadAgence: number;
        identifiantMouvementMadSiege: string;
        codeOrigine: string;
    }
    interface ICaracteristique {
        listeMessageAvertissement: Array<string>;
        mouvementMad: IMouvementMad;
    }
    interface IMouvementMad {
        identifiantMouvement: number;
        dateEntreeAuMad: string;
        codeMotifEntreeAuMad: string;
        motifEntreeAuMad: string;
        codeOpposition: string;
        dateLimiteDecision: string;
        indicateurDemandeFacturation: string;
        montantHTAFacturer: number;
        codeDeviseMontantHTAFacturer: string;
        codePrestation: string;
        nombreRecyclageMad: number;
        dateDernierRecyclageMad: string;
        codeEtatRecyclageMad: string;
        noteBale2: string;
        dateCalculNoteBale2: string;
        codeTypeEdsGerePar: string;
        identifiantEdsGerePar: number;
        libelleEdsGerePar: string;
        identifiantEdsADeciderPar: number;
        operation: IOperation;
        decision: IDecision;
        courrier: ICourrier;
        listeCommentaireMouvement: Array<ICommentaireMouvement>;
    }
    interface IOperation {
        referenceOperation: string;
        libelleOperation: string;
        libelleComplementaireA: string;
        libelleComplementaireB: string;
        dateCompensation: string;
        codeOperationInterbancaire: string;
        codeTypeOperation: string;
        montantOperation: number;
        deviseMontantOperation: string;
        numeroCheque: string;
        identifiantCarte: string;
        soldeCompteAvantOperation: number;
        soldeCompteFinJournee: number;
        deviseSoldeCompte: string;
        libelleDomiciliation: string;
        referenceArchivage: string;
        referencePresentateur: string;
        codeProvenance: string;
        libelleProvenance: string;
        numeroNationalEmetteur: string;
        libelleNumeroEmetteur: string;
        codeEtablissementDonneurOrdre: string;
        codeGuichetDonneurOrdre: string;
        numeroCompteDonneurOrdre: string;
        libelleEmetteurDonneurOrdre: string;
        codeDestinataireOperation: string;
        codeAnnulation: string;
        infoSepa: IInfoSepaOperation;
    }
    interface IInfoSepaOperation {
        libellePaysDonneurOrdre: string;
        libelleComplementMino: string;
        libelleCompletBeneficiaire: string;
        codeBicDestinataire: string;
        numeroIbanBeneficiaire: string;
    }
    interface IDecision {
        codeTypeDecision: string;
        datePriseDecision: string;
        commentairePriseDecision: string;
        codeMotifRejet: string;
        motifRejet: string;
        codeMotifRejetComplementaire: string;
        motifRejetComplementaire: string;
        ribDestinationForcage: string;
        indicateurTableMotifDecision: string;
        infoDelegationDecision: IInfoDelegationDecision;
        infoDecideurDecision: IInfoDecideurDecision;
    }
    interface IInfoDelegationDecision {
        codeAttenteDelegataire: string;
        codeNiveauDelegataireRequis: string;
        libelleVersionCharteDelegataire: string;
        identifiantEdsPourLeCompteDe: number;
        libelleEdsPourLeCompteDe: string;
    }
    interface IInfoDecideurDecision {
        codeTypeEdsDecidePar: string;
        identifiantEdsDecidePar: number;
        libelleEDSDecidePar: string;
        identifiantAgentDecideur: string;
        nomAgentDecideur: string;
        prenomAgentDecideur: string;
        codeCiviliteAgentDecideur: string;
    }
    interface ICourrier {
        indicateurDemandeCourrier: string;
        codeTypeCourrier: string;
        libelleTypeCourrier: string;
        indicateurFacturationCourrier: string;
        dateFacturationCourrier: string;
        indicateurDemandeAutoMurcef: string;
        indicateurEditionCourrierMurcef: string;
        dateEditionCourrierMurcef: string;
        codeEnvoiCourrierAutomatique: string;
        libelleEnvoiCourrierAutomatique: string;
        codeEnvoiSmsAutomatique: string;
        libelleEnvoiSmsAutomatique: string;
    }
    interface ICommentaireMouvement {
        numeroSequence: number;
        contenuCommentaire: string;
        dateDeSaisie: string;
        identifiantAgent: number;
        nomAgent: string;
        prenomAgent: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Commentaire {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantMouvement: number;
    }
    interface ICommentaire {
        listeMessageAvertissement: Array<string>;
        listeMouvementMad: Array<IMouvementMad>;
    }
    interface IMouvementMad {
        codeEtablissement: string;
        identifiantMouvement: number;
        listeCommentaireMouvement: Array<ICommentaireMouvement>;
    }
    interface ICommentaireMouvement {
        numeroSequence: number;
        contenuCommentaire: string;
        dateDeSaisie: string;
        identifiantAgent: number;
        nomAgent: string;
        prenomAgent: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.CompteForcage {
    interface IParametreGet {
        codeProduit: string;
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeAgentConnecte: string;
        codeTypeOperation: string;
        codeProvenance: string;
        codeOperationInterbancaire: string;
    }
    interface ICompteForcage {
        messageAvertissement: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        libelleTypeProduit: string;
        codeDevise: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.ControleDelegataire {
    interface IPutParametre {
        codeGestion: string;
        controleDelegataire: IControleDelegataire;
    }
    interface IControleDelegataire {
        listeMessageAvertissement: Array<string>;
        listeMouvementMad: Array<IMouvementMad>;
    }
    interface IMouvementMad {
        codeEtablissement: string;
        identifiantMouvement: number;
        identifiantEdsDelegataire: number;
        codeNiveauDelegRequisInterne: string;
        codeNiveauDelegRequisExterne: string;
        libelleVersionCharteDelegataire: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.ControleDelegation {
    interface IParametreGet {
        /** celui en cours */
        codeAgentConnecte: number;
        /** celui en cours */
        codeEtablissement: string;
        /** celui en cours */
        codeGuichet: string;
        /** celui en cours */
        codeProduit: string;
        /** celui en cours */
        identifiantEntiteTitulaire: number;
        /** mettre "1" */
        codeAppelMoteurDelegation: string;
        /** celui en cours */
        identifiantPosteFonctionnel: number;
        /** entiteTitulaire.infoGeneraleEntiteTitulaire.noteBale2  */
        noteBale2: string;
        numeroCompteBancaire: string;
        /**  EntiteTitulaire / CompteBancaire / InfoFinanciereEntiteTitulaire / montantCapitauxDebiteurs */
        montantCapitauxDebiteurs: number;
        /** EntiteTitulaire / CompteBancaire / InfoFinanciereEntiteTitulaire / deviseMontantCapitauxDebiteurs */
        codeDeviseCapitauxDebiteurs?: string;
        /** mettre 0 */
        identifiantMouvement: number;
        /** mettre "F" */
        codeTypeDecision: string;
        /** non renseigné */
        codeMotifEntreeAuMad?: string;
        /** EntiteTitulaire / CompteBancaire / MouvementMad du jour / Operation / montantOperation */
        montantOperation: number;
    }
    interface IPersonne {
        /**
         * Identifiant interne unique d'une personne du SI Mysys.
         */
        identifiantPersonne: number;
        /**
         * Pays de résidence de la personne selon la norme ISO 3166-1.
         */
        codePaysResidence: string;
        /**
         * Identifie un département ou une collectivité d'outre-mer dans la nomenclature INSEE.
         * 01/96 : correspondent aux départements métropolitains
         * 2A : corse du Sud
         * 2B : haute Corse
         */
        codeDepartementResidence: string;
        /**
         * Détermine la branche d'activité du Profressionnel selon la nomenclature NAF Révision 2,2008 de l'INSEE.
         */
        codeNafInsee: string;
        /**
         * Cotation attribuée à une entreprise donnée par la Banque de France.
         * Exemples : 3, 3+, 3++, 4, 4+,...
         */
        cotationFibenEntreprise: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FCC de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFcc: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FICP de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFicp: string;
        /**
         * Indique si la personne est topée Watch List Locale (liste de surveillance).
         * 'O' : la personne est topée Watch List Locale
         * 'N' : la personne n'est pas topée Watch List Locale
         */
        indicateurWatchListLocale: string;
        /**
         * Détermine le niveau de Watch List Locale.
         * '1' : encours sain et significatif
         * '2' : risque dégradé
         * '3' : risque de défaillance
         */
        codeNiveauWatchListLocale: string;
        /**
         * Indique si la personne est topée Watch List Nationale.
         * 'O' : la personne est topée Watch List Nationale
         * 'N' : la personne n'est pas topée Watch List Nationale
         */
        indicateurWatchListNationale: string;
        /**
         * Détermine le niveau de Watch List Nationale.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListNationale: string;
        /**
         * Indique si la personne est topée Watch List Banque Référente.
         * 'O' : la personne est topée Watch List Banque Référente
         * 'N' : la personne n'est pas topée Watch List Banque Référente
         */
        indicateurWatchListBanqueRef: string;
        /**
         * Détermine le niveau de Watch List Banque Référente.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListBanqueRef: string;
        /**
         * Cotation attribuée à un dirigeant donné pour une personne morale donnée par la Banque de France.
         * '000' : pas de réserve
         * '040' : attention particulière
         * '050' : réserves
         * '060' : réserves sérieuses
         */
        cotationFibenDirigeant: string;
        /**
         * Catégorisation de la clientèle selon la segmentation de marché. Permet de déduire les segmentations risque et marché.
         * 'CC000001' : personnel Groupe
         * 'CC000002' : dirigeant de société de capitaux profession libérale
         */
        codeCategorieClient: string;
        /**
         * Ce code permet d'identifier le type de moteur de notation utilisé par l'application appelante.
         * '01' : Bâle2
         * '02' : NAFI
         * '03' : BEST
         */
        typeMoteurNotation: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        listeIncident: Array<IIncident>;
    }
    interface IControleDelegation {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys. Correspond au code banque sous lequel un établissement est répertorié par la Banque de France. Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant interne de l'agent connecté.
         */
        codeAgentConnecte: number;
        /**
         * Identifiant unique interne du poste fonctionnel en cours de travail.
         */
        identifiantPosteFonctionnel: number;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant unique interne de l'EDS gérant une entité titulaire.
         */
        identifiantEdsGerePar: number;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        listePersonne: Array<IPersonne>;
        compteBancaire: ICompteBancaire;
        /**
         * Somme des montants des capitaux débiteurs.
         */
        montantCapitauxDebiteurs: number;
        /**
         * Code de la devise du montant des capitaux débiteurs. Exemple : 'EUR' - euros
         */
        codeDeviseCapitauxDebiteurs: string;
    }
    interface ICompteBancaire {
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France. Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * '0004' : CDD
         * '0008' : COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        mouvementMad: IMouvementMad;
    }
    interface IIncident {
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        codeTypeIncident: string;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Libellé du motif d'entrée au MAD. 'A' : à vérifier 'C' : compte soldé 'D' : domiciliation erronée 'E' : faux numéro 'F' : sans provision
         */
        codeMotifEntreeAuMad: string;
        /**
         * Montant de l'opération financière entrée au MAD.
         */
        montantOperation: number;
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forcage autre RIB sans correction RIB
         * 'S' : correction de RIB + forçage
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Détermine le type d'appel au moteur de délégation.
         * '1' : demande de délégation
         * '2' : demande de délégation en mode information
         */
        codeAppelMoteurDelegation: string;
        resultatControleDelegation: IResultatControleDelegation;
    }
    interface IResultatControleDelegation {
        /**
         * Détermine,pour chaque type de fonction (Métier) ou pour chaque Agent, les éléments de délégation se référant à la
         * charte délégataire auquel il a droit.
         */
        codeNiveauDelegataireInterne: string;
        /**
         * Détermine le niveau de délégation géré sur les écrans de paramétrage (niveaux et affectations).
         */
        codeNiveauDelegataireExterne: string;
        /**
         * Libellé associé au niveau délégataire.
         */
        libelleNiveauDelegataire: string;
        /**
         * Détermine le numéro d'ordre d'affichage du niveau délégataire.
         */
        numeroOrdreAffichage: number;
        /**
         * Libellé associé au niveau délégataire requis.
         */
        libelleNiveauDelegataireRequis: string;
        /**
         * Détermine le numéro d'ordre d'affichage du niveau délégataire requis.
         */
        numeroOrdreAffichage2: number;
        /**
         * Libellé associé à la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        libelleVersionCharteDelegataire: string;
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisExterne: string;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisInterne: string;
        /**
         * Détermine la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        codeCharteDelegataire: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Decision {
    interface IDecision {
        codeEtablissement: string;
        codeAgentConnecte: string;
        codeQualiteAgentConnecte: string;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        noteBale2: string;
        dateCalculNoteBale2: string;
        indicateurNoteObsolete: boolean;
        codeCategorieClient: string;
        indicateurEvaluationRisque: boolean;
        listePersonne: Array<IPersonne>;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface IPersonne {
        identifiantPersonne: number;
        indicateurExpositionPPE: boolean;
        codeAppartenanceReseau: string;
        codeNafInsee: string;
        cotationFibenEntreprise: string;
        cotationFibenDirigeant: string;
        indicateurWatchListLocale: boolean;
        codeNiveauWatchListLocale: string;
        indicateurWatchListNationale: boolean;
        codeNiveauWatchListNationale: string;
        indicateurWatchListBanqueRef: boolean;
        codeNiveauWatchListBanqueRef: string;
        codeFichageFcc: boolean;
        codeFichageFicp: boolean;
        codePaysResidence: string;
        codeDepartementResidence: string;
        codeMarcheCommercial: string;
    }
    interface ICompteBancaire {
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        entiteAdministrative: string;
        codeProduitNationalNiveau5: string;
        codeProduitNationalNiveau4: string;
        codeProduitNationalNiveau3: string;
        infoFinanciereCompteBancaire: IInfoFinanciereCompteBancaire;
        listeMouvementMadTraite: Array<IMouvementMad>;
    }
    interface IInfoFinanciereCompteBancaire {
        soldeDisponible: number;
        soldeCompteBancaire: number;
        montantDecouvertAutorise: number;
        codeDeviseCompteBancaire: string;
        soldeDisponibleEnEuro: number;
        montantDecouvertAutoriseEnEuro: number;
    }
    interface IMouvementMad {
        identifiantMouvement: number;
        codeMotifEntreeAuMad: string;
        montantOperation: number;
        codeDeviseOperation: string;
        montantOperationEnEuro: number;
        libelleOperation: string;
        codeTypeCourrier: string;
        topEligibiliteAdelysMvt: boolean;
        infoStructure: IInfoStructure;
        decisionMouvement: IDecisionMouvement;
        resultatEnregistrementDecision: IResultatEnregistrementDecision;
        codeCouleurAffichageIhm: string;
    }
    interface IInfoStructure {
        identifiantEdsGerePar: number;
        identifiantEdsADeciderPar: number;
        identifiantEdsRegroupement: number;
        identifiantEdsDomicilieA: number;
        identifiantEdsRattachement: number;
    }
    interface IDecisionMouvement {
        codeTypeDecision: string;
        indicateurAnnulationDecision: string;
        codeMotifRejet: string;
        codeMotifRejetComplementaire: string;
        indicateurDecisionFacturable: string;
        identifiantEdsDecidePar: number;
        identifiantEdsPourLeCompteDe: number;
        infoDelegationDecision: IInfoDelegationDecision;
        compteBancaireForcage: ICompteBancaireForcage;
    }
    interface IInfoDelegationDecision {
        identifiantEdsDelegataire: number;
        idNiveauDelegataireRequis: number;
        libelleNiveauDelegataireRequis: string;
        rangNiveauDelegataireRequis: string;
        idVersionCharteDelegataire: number;
        libelleVersionCharteDelegataire: string;
    }
    interface ICompteBancaireForcage {
        codeGuichetForcage: string;
        codeProduitForcage: string;
        numeroCompteBancaireForcage: string;
    }
    interface IResultatEnregistrementDecision {
        messageApplicatif: string;
        messageAvertissement: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Delegataire {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantAgentConnecte: number;
        codeCharteDelegataire: string;
        codeNiveauDelegRequisInterne: string;
    }
    interface IDelegataire {
        listeMessageAvertissement: Array<string>;
        listeDelegataireMad: Array<IDelegataireMad>;
    }
    interface IDelegataireMad {
        identifiantDelegataire: number;
        designationDelegataire: string;
        codeFonctionDelegataire: string;
        identifiantInterneEds: number;
        identifiantExterneEds: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.DemandeDelegation {
    interface IDemandeControleDelegation {
        codeEtablissement: string;
        codeApplicationAppelante: string;
        dateHeureDemande: string;
        agent: IAgent;
        questions: Array<IQuestion>;
    }
    interface IAgent {
        codeAgent: number;
        typeFonctionAgent: string;
        identifiantPosteFonctionnel: number;
    }
    interface IQuestion {
        idQuestion: string;
        data: IData;
    }
    interface IData {
        note: string;
        typeNote: string;
        categorieClient: string;
        marcheCommercial: string;
        produit: IProduit;
        personnes: Array<IPersonneAppelAdelys>;
        idLienDatamart: Array<ILienDatamart>;
    }
    interface IProduit {
        codeProduitNiv3: string;
        codeProduitNiv4: string;
        codeProduitNiv5: string;
        infoMouvementMAD: IInfoMouvementMAD;
    }
    interface IInfoMouvementMAD {
        pourcentDecouvert: number;
        soldeForcageMAD: number;
        montantRejetMax: number;
    }
    interface IPersonneAppelAdelys {
        identifiantPersonne: number;
        expositionPPE: boolean;
        appartenanceReseau: string;
        codeNAF: string;
        cotationFibenSociete: string;
        cotationFibenDirigeant: string;
        topageWatchListLocale: string;
        topageWatchListNationale: string;
        topageWatchListBanqueReferente: string;
        fichageFCC: boolean;
        fichageFICP: boolean;
        paysTerritorialite: string;
        departementsTerrit: string;
    }
    interface ILienDatamart {
        cle: string;
        valeur: string;
    }
    interface IRetourControleDelegation {
        codeEtablissement: string;
        codeApplicationAppelante: string;
        dateHeureDemande: string;
        identifiantDemande: number;
        autorisation: boolean;
        niveauDelegataireMinimum: INiveauDelegataireMinimum;
        message: string;
        numeroCompteBancaire: string;
    }
    interface INiveauDelegataireMinimum {
        identifiantEchelleDelegataire: number;
        libelleEchelleDelegataire: string;
        niveauDelegataire: number;
        libelleNiveauDelegataire: string;
        rangNiveau: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.DeploiementMyMad {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeEtablissement: string;
        identifiantEds: number;
        codeFonctionnalite: string;
    }
    interface IDeploiementMyMad {
        listeMessageAvertissement: Array<string>;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.InfoSpecifiqueETMad {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        topEligibiliteAdelysET?: boolean;
    }
    interface IInfoSpecifiqueETMad {
        listeMessageAvertissement: Array<string>;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        codeModeComposition: string;
        codeUsage: string;
        datePriseDerniereDecision: string;
        libelleTypeDernierCourrier: string;
        dateEditionDernierCourrier: string;
        libelleInterdictionBancaire: string;
        noteBale2: string;
        dateNotation: string;
        indicateurNoteObsolete: boolean;
        codeCategorieClient: string;
        infoStructureEntiteTitulaire: IInfoStructureEntiteTitulaire;
        listePersonne: Array<IPersonne>;
    }
    interface IInfoStructureEntiteTitulaire {
        identifiantInterneEdsSuiviPar: number;
        identifiantExterneEdsSuiviPar: number;
        libelleEdsSuiviPar: string;
        identifiantInterneEdsGerePar: number;
        identifiantExterneEdsGerePar: number;
        libelleEdsGerePar: string;
        adresseMailEdsGerePar: string;
        identifiantInterneEdsDomicilieA: number;
        identifiantExterneEdsDomicilieA: number;
        libelleEdsDomicilieA: string;
    }
    interface IPersonne {
        identifiantPersonne: number;
        designationPersonne: string;
        indicateurResponsable: string;
        codePersonnaliteJuridique: string;
        codeCivilite: string;
        prenom: string;
        nom: string;
        codeTypeMandat: string;
        identifiantInterneEdsSuiviPar: number;
        identifiantExterneEdsSuiviPar: number;
        libelleEdsSuiviPar: string;
        codePaysResidence: string;
        codeDepartementResidence: string;
        codeNafInsee: string;
        cotationFibenEntreprise: string;
        cotationFibenDirigeant: string;
        codeFichageFcc: boolean;
        codeFichageFicp: boolean;
        indicateurWatchListLocale: boolean;
        codeNiveauWatchListLocale: string;
        indicateurWatchListNationale: boolean;
        codeNiveauWatchListNationale: string;
        indicateurWatchListBanqueRef: boolean;
        codeNiveauWatchListBanqueRef: string;
        codeMotifCloture: string;
        indicateurExpositionPPE: boolean;
        codeAppartenanceReseau: string;
        codeMarcheCommercial: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Journal {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeEtablissement: string;
        codeTypeRecherche: string;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        identifiantEds: number;
        identifiantMouvement: number;
        timestampDecisionMouvement: string;
    }
    interface IJournal {
        listeMessageAvertissement: Array<string>;
        listeMouvementMad: Array<IMouvementMad>;
    }
    interface IMouvementMad {
        identifiantMouvementMadAgence: number;
        identifiantMouvementMadSiege: string;
        timestampDecisionMouvement: string;
        timestampAnnulationDecision: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        noteBale2: string;
        dateCalculNoteBale2: string;
        libelleOperation: string;
        indicateurProcessusMyway: boolean;
        indicateurDecisionAnnulable: boolean;
        infoStructure: IInfoStructure;
        infoFinanciere: IInfoFinanciere;
        decision: IDecision;
    }
    interface IInfoStructure {
        identifiantEdsGerePar: number;
        libelleEdsGerePar: string;
        identifiantEdsRegroupement: number;
        libelleEdsRegroupement: string;
        identifiantEdsDecidePar: number;
        libelleEdsDecidePar: string;
        identifiantEdsAnnulation: number;
        libelleEdsAnnulation: string;
        identifiantEdsPourLeCompteDe: number;
        libelleEdsPourLeCompteDe: string;
        identifiantEdsDelegataire: number;
        libelleEdsDelegataire: string;
        identifiantEdsRattachement: number;
        libelleEdsRattachement: string;
        identifiantEdsDomicilieA: number;
        libelleEdsDomicilieA: string;
    }
    interface IInfoFinanciere {
        codeDevise: string;
        soldeDisponible: number;
        soldeCompteBancaire: number;
        montantDecouvertAutorise: number;
        codeDeviseOperation: string;
        montantOperation: number;
    }
    interface IDecision {
        indicateurAnnulationDecision: string;
        codeTypeDecision: string;
        datePriseDecision: string;
        codeOriginePriseDecision: string;
        indicateurDecisionFacturable: string;
        codeMotifRejet: string;
        codeMotifRejetComplementaire: string;
        codeTypeCourrier: string;
        codeGuichetForcage: string;
        numeroCompteBancaireForcage: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.ListeDelegataire {
    interface IListeDelegataire {
        codeEtablissement: string;
        codeAgentConnecte: string;
        codeQualiteAgentConnecte: string;
        entiteTitulaire: IEntiteTitulaire;
        listeDelegataireAutorise: Array<IDelegataireAutorise>;
        listeMessageAvertissement: Array<string>;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        noteBale2: string;
        dateCalculNoteBale2: string;
        codeCategorieClient: string;
        listePersonne: Array<IPersonne>;
        compteBancaire: ICompteBancaire;
        infoMad: IInfoMad;
    }
    interface IPersonne {
        identifiantPersonne: number;
        indicateurExpositionPPE: boolean;
        codeAppartenanceReseau: string;
        codeNafInsee: string;
        cotationFibenEntreprise: string;
        cotationFibenDirigeant: string;
        indicateurWatchListLocale: boolean;
        codeNiveauWatchListLocale: string;
        indicateurWatchListNationale: boolean;
        codeNiveauWatchListNationale: string;
        indicateurWatchListBanqueRef: boolean;
        codeNiveauWatchListBanqueRef: string;
        codeFichageFcc: boolean;
        codeFichageFicp: boolean;
        codePaysResidence: string;
        codeDepartementResidence: string;
        codeMarcheCommercial: string;
    }
    interface ICompteBancaire {
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        entiteAdministrative: string;
        codeProduitNationalNiveau5: string;
        codeProduitNationalNiveau4: string;
        codeProduitNationalNiveau3: string;
        infoFinanciereCompteBancaire: IInfoFinanciereCompteBancaire;
    }
    interface IInfoFinanciereCompteBancaire {
        soldeDisponible: number;
        soldeCompteBancaire: number;
        montantDecouvertAutorise: number;
        codeDeviseCompteBancaire: string;
        soldeDisponibleEnEuro: number;
        montantDecouvertAutoriseEnEuro: number;
    }
    interface IInfoMad {
        identifiantMouvement: number;
        cumulMontantOperation: number;
        codeDeviseCumul: string;
    }
    interface IDelegataireAutorise {
        identifiantDelegataire: number;
        designationDelegataire: string;
        codeFonctionDelegataire: string;
        identifiantInterneEds: number;
        identifiantExterneEds: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.MessageSms {
    interface IMessageSms {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantEntiteTitulaire: number;
        identifiantEds: number;
        contenuMessage: string;
        listeMessageAvertissement: Array<string>;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.PriseDecision {
    interface IPersonne {
        /**
         * Identifiant interne unique d'une personne du SI Mysys.
         */
        identifiantPersonne: number;
        /**
         * Pays de résidence de la personne selon la norme ISO 3166-1.
         */
        codePaysResidence: string;
        /**
         * Identifie un département ou une collectivité d'outre-mer dans la nomenclature INSEE.
         * 01/96 : correspondent aux départements métropolitains
         * 2A : corse du Sud
         * 2B : haute Corse
         */
        codeDepartementResidence: string;
        /**
         * Détermine la branche d'activité du Profressionnel selon la nomenclature NAF Révision 2,2008 de l'INSEE.
         */
        codeNafInsee: string;
        /**
         * Cotation attribuée à une entreprise donnée par la Banque de France.
         * Exemples : 3, 3+, 3++, 4, 4+,...
         */
        cotationFibenEntreprise: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FCC de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFcc: string;
        /**
         * Détermine la situation de fichage d'une personne à une date donnée, situation enregistrée dans le fichier FICP de la BDF.
         * '0' : Actif
         * '1' : Prescription
         * '2' : Annulation
         * '3' : Mainlevée (ou régularisation)
         * '4' : Néant
         */
        codeFichageFicp: string;
        /**
         * Indique si la personne est topée Watch List Locale (liste de surveillance).
         * 'O' : la personne est topée Watch List Locale
         * 'N' : la personne n'est pas topée Watch List Locale
         */
        indicateurWatchListLocale: string;
        /**
         * Détermine le niveau de Watch List Locale.
         * '1' : encours sain et significatif
         * '2' : risque dégradé
         * '3' : risque de défaillance
         */
        codeNiveauWatchListLocale: string;
        /**
         * Indique si la personne est topée Watch List Nationale.
         * 'O' : la personne est topée Watch List Nationale
         * 'N' : la personne n'est pas topée Watch List Nationale
         */
        indicateurWatchListNationale: string;
        /**
         * Détermine le niveau de Watch List Nationale.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListNationale: string;
        /**
         * Indique si la personne est topée Watch List Banque Référente.
         * 'O' : la personne est topée Watch List Banque Référente
         * 'N' : la personne n'est pas topée Watch List Banque Référente
         */
        indicateurWatchListBanqueRef: string;
        /**
         * Détermine le niveau de Watch List Banque Référente.
         * 'S' : saine
         * 'D' : douteuse
         */
        codeNiveauWatchListBanqueRef: string;
        /**
         * Cotation attribuée à un dirigeant donné pour une personne morale donnée par la Banque de France.
         * '000' : pas de réserve
         * '040' : attention particulière
         * '050' : réserves
         * '060' : réserves sérieuses
         */
        cotationFibenDirigeant: string;
        /**
         * Catégorisation de la clientèle selon la segmentation de marché. Permet de déduire les segmentations risque et marché.
         * 'CC000001' : personnel Groupe
         * 'CC000002' : dirigeant de société de capitaux profession libérale
         */
        codeCategorieClient: string;
        /**
         * Ce code permet d'identifier le type de moteur de notation utilisé par l'application appelante.
         * '01' : Bâle2
         * '02' : NAFI
         * '03' : BEST
         */
        typeMoteurNotation: string;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        listeIncident: Array<IIncident>;
    }
    interface IEntiteTitulaire {
        /**
         * Identifiant d'un client bancaire détenteur de contrats de produit/service.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Valeur calculée de note bâle 2 attribuée à une entité titulaire.
         */
        noteBale2: string;
        /**
         * Date à laquelle la valeur de note bâle 2 attribuée à une entité titulaire a été calculée.
         * Type date au format yyyy-MM-dd
         */
        dateCalculNoteBale2: string;
        /**
         * Somme des montants des capitaux débiteurs.
         */
        montantCapitauxDebiteurs: number;
        /**
         * Code de la devise du montant des capitaux débiteurs. Exemple : 'EUR' - euros
         */
        codeDeviseCapitauxDebiteurs: string;
        listePersonne: Array<IPersonne>;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface IIncident {
        /**
         * Liste de code déterminant la nature d'un incident bancaire.
         * '01' - inscription de privilège sur compte interne à l'établissement
         * '04' - impayé sur prêt
         * '08' - rejet de prélèvement
         */
        codeTypeIncident: string;
    }
    interface IMouvementMad {
        /**
         * Identifiant unique interne d'une opération entrée au MAD, devenant ainsi un mouvement MAD à gérer.
         */
        identifiantMouvement: number;
        /**
         * Détermine le motif pour lequel une opération a été rejetée suite à une imputation pour entrer ensuite au MAD.
         * Typologie gérée dans la table délocalisée MV1E.
         */
        codeMotifEntreeAuMad: string;
        /**
         * Montant de l'opération financière entrée au MAD.
         */
        montantOperation: number;
        /**
         * Détermine la devise d'une opération bancaire. Exemple : 'EUR' - euros
         */
        codeDeviseOperation: string;
        /**
         * Désignation de l'opération rejetée à l'imputation et donc entrée au MAD.
         */
        libelleOperation: string;
        /**
         * Détermine le type d'un courrier dans la gestion du MAD.
         * '001' : PROPOSITION DE DECOUVERT
         * '002' : AUGMENTATION DE DECOUVERT
         * '003' : MISE EN GARDE AVANT REJET
         * '030' : COURRIER LOI MURCEF
         */
        codeTypeCourrier: string;
        infoStructure: IInfoStructure;
        decision: IDecision;
        resultatPriseDecision: IResultatPriseDecision;
    }
    interface IPriseDecision {
        /**
         * Identifiant d'un établissement du Groupe BPCE, et plus précisément de la plateforme MySys. Correspond au code banque sous lequel un établissement est répertorié par la Banque de France. Exemples : '13135' - CE Midi-Pyrénées
         */
        codeEtablissement: string;
        /**
         * Identifiant interne de l'agent connecté.
         */
        codeAgentConnecte: string;
        /**
         * Détermine la qualité du poste fonctionnel occupé par l'agent connecté.
         * 'T' : titulaire
         * 'R' : remplaçant
         * 'S' : suppléant
         * 'A' : affectation temporaire
         */
        codeQualiteAgentConnecte: string;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IResultatPriseDecision {
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageApplicatif: string;
        /**
         * Message d'anomalie, d'erreur ou d'information, restitué par le central à l'intention de l'IHM pour une gestion non bloquante.
         */
        messageAvertissement: string;
    }
    interface IDecision {
        /**
         * Détermine l'acte de gestion relatif à une prise décision sur la gestion d'un mouvement du MAD.
         * 'A' : décision en attente
         * 'F' : forçage
         * 'R' : rejet
         * 'T' : forçage autre RIB sans correction RIB au créancier
         * 'S' : forçage autre RIB avec correction RIB au créancier
         * ' ' : sans décision (valeur par défaut)
         * 'H' : transfert Mad Siège
         */
        codeTypeDecision: string;
        /**
         * Donnée valant O ou N, et indiquant l'annulation d'une décision prise sur un mouvement MAD.
         */
        indicateurAnnulationDecision: string;
        /**
         * Détermine le motif pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         * '01' : OPPOSITION POUR VOL
         * '02' : OPPOSITION POUR PERTE
         * '03' : UTILISATION FRAUDULEUSE
         * '12' : COORDONNES ERRONEES
         * '14' : COMPTE SOLDE
         */
        codeMotifRejet: string;
        /**
         * Détermine le motif complémentaire pour lequel un mouvement entré au MAD a été rejeté pour l'utilisateur.
         */
        codeMotifRejetComplementaire: string;
        /**
         * Donnée valant O ou N, et indiquant si une demande de tarification été effectuée pour le traitement du mouvement MAD.
         */
        indicateurDecisionFacturable: string;
        /**
         * Identifiant interne du décideur réel d'un mouvement MAD.
         */
        identifiantEdsDecidePar: number;
        /**
         * Identifiant de l'agent pour le compte duquel la décision concernant un mouvement MAD a été prise.
         */
        identifiantEdsPourLeCompteDe: number;
        infoDelegationDecision: IInfoDelegationDecision;
        /**
         * Référence du guichet du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        compteBancaireForcage: ICompteBancaireForcage;
    }
    interface IInfoDelegationDecision {
        /**
         * Détermine le type d'appel au moteur de délégation.
         * '1' : demande de délégation
         * '2' : demande de délégation en mode information
         */
        codeAppelMoteurDelegation: string;
        /**
         * Identifiant interne du délégataire sélectionné par l'agent.
         */
        identifiantEdsDelegataire: number;
        /**
         * Détermine le niveau délégataire nécessaire pour valider une transaction financière ou forcer un mouvement MAD.
         */
        codeNiveauDelegRequisExterne: string;
        /**
         * Libellé associé à la charte délégataire à laquelle est rattachée l'agent traitant les mouvements MAD.
         */
        libelleVersionCharteDelegataire: string;
    }
    interface ICompteBancaire {
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France. Exemples : '00600' : LILLE
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service. Exemples : '0004' - CDD ; '0008' - COMPTE COURANT ENTREPRISE
         */
        codeProduit: string;
        /**
         * Référence d'identification d'un compte, service, crédit ...
         */
        numeroCompteBancaire: string;
        /**
         * Code de l'entité administrative, issu de la recherche délocalisée CU3E à partir du code établissement + code guichet.
         */
        entiteAdministrative: string;
        infoFinanciereCompteBancaire: IInfoFinanciereCompteBancaire;
        listeMouvementMadTraite: Array<IMouvementMad>;
    }
    interface ICompteBancaireForcage {
        /**
         * Référence du guichet du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        codeGuichetForcage: string;
        /**
         * Catégorie de gestion du produit/service du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        codeProduitForcage: string;
        /**
         * Référence d'identification du compte bancaire sur lequel est forcé un mouvement MAD.
         */
        numeroCompteBancaireForcage: string;
    }
    interface IInfoFinanciereCompteBancaire {
        /**
         * Solde disponible d'un compte bancaire au moment d'une opération financière sur celui-ci.
         */
        soldeDisponible: number;
        /**
         * Solde d'un compte bancaire à un instant donné.
         */
        soldeCompteBancaire: number;
        /**
         * Montant du découvert autorisé sur un compte bancaire.
         */
        montantDecouvertAutorise: number;
        /**
         * Détermine la devise d'un compte bancaire. Exemple : 'EUR' - euros
         */
        codeDeviseCompteBancaire: string;
    }
    interface IInfoStructure {
        /**
         * Identifiant interne du "géré par" du mouvement.
         */
        identifiantEdsGerePar: number;
        /**
         * Identifiant interne de l'EDS de regroupement du "géré par".
         */
        identifiantEdsRegroupement: number;
        /**
         * Identifiant interne de domiciliation lié au mouvement.
         */
        identifiantEdsDomicilieA: number;
        /**
         * Identifiant interne de rattachement du mouvement.
         */
        identifiantEdsRattachement: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.RechercheForcageAuto {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        codeTypeRecherche: string;
        dateDebutRecherche: string;
        dateFinRecherche: string;
    }
    interface IRechercheForcageAuto {
        listeMessageAvertissement: Array<string>;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        listeForcageAutomatique: Array<IForcageAutomatique>;
    }
    interface IForcageAutomatique {
        dateImputationOperation: string;
        montantOperation: number;
        codeDeviseMontantOperation: string;
        libelleOperation: string;
        libelleRegleImputation: string;
        indicateurFacturation: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.RechercheHistorique {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        codeTypeRecherche: string;
        dateDebutRecherche: string;
        dateFinRecherche: string;
    }
    interface IRechercheHistorique {
        listeMessageAvertissement: Array<string>;
        nombreMouvementADecider: number;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        listeMouvementMadHistorise: Array<IMouvementMad>;
    }
    interface IMouvementMad {
        identifiantMouvement: number;
        identifiantMouvementMadSiege: string;
        dateEntreeAuMad: string;
        libelleOperation: string;
        montantOperation: number;
        codeTypeDecision: string;
        datePriseDecision: string;
        indicateurDecisionFacturable: string;
        codeTypeCourrier: string;
        libelleTypeCourrier: string;
        codeOriginePriseDecision: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.RechercheMadDuJour {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeTypeRecherche: string;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantEds: number;
        identifiantPersonnePrincipale?: number;
    }
    interface IRechercheMadDuJour {
        messageAvertissement: Array<string>;
        listeCompteBancaire: Array<ICompteBancaire>;
        evaluationRisqueMad: IEvaluationRisqueMad;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        libelleOffrePS: string;
        dateDernierCourrierMurcefCompte: string;
        codeEnvoiCourrierAutoCompte: string;
        libelleEnvoiCourrierAutoCompte: string;
        codeEnvoiSmsAutoCompte: string;
        libelleEnvoiSmsAutoCompte: string;
        identifiantProduitService: number;
        codeProduitNationalNiveau5: string;
        codeProduitNationalNiveau4: string;
        codeProduitNationalNiveau3: string;
        listeMouvementMadDuJour: Array<IMouvementMad>;
    }
    interface IMouvementMad {
        identifiantMouvement: number;
        codeMotifEntreeAuMad: string;
        motifEntreeAuMad: string;
        dateEntreeAuMad: string;
        dateLimiteDecision: string;
        codeOpposition: string;
        libelleOperation: string;
        montantOperation: number;
        codeDeviseMontantOperation: string;
        montantOperationEnEuro: number;
        codeTypeOperation: string;
        codeOperationInterbancaire: string;
        codeProvenance: string;
        codeTypeDernierCourrier: string;
        dateDernierCourrierMurcef: string;
        indicateurDemandeAutoMurcef: string;
        indicateurEditionCourrierMurcef: string;
        codeEnvoiCourrierAutomatique: string;
        libelleEnvoiCourrierAutomatique: string;
        codeEnvoiSmsAutomatique: string;
        libelleEnvoiSmsAutomatique: string;
        indicateurPresenceCommentaire: string;
        identifiantEdsGerePar: number;
        identifiantEdsRegroupement: number;
        identifiantEdsADeciderPar: number;
        identifiantEdsDecidePar: number;
        identifiantEdsDelegataire: number;
        identifiantEdsPourLeCompteDe: number;
        codeTypeDecision: string;
        topEligibiliteAdelysMvt: boolean;
        choixPossibleDecision: IChoixPossibleDecision;
        preconisationIAMad: IPreconisationIAMad;
    }
    interface IChoixPossibleDecision {
        topChoixRejet: "0" | "1";
        topChoixForcage: "0" | "1";
        topChoixEnSuspens: "0" | "1";
        topChoixForcageRib: "0" | "1";
        topChoixForcageRibCorrection: "0" | "1";
        topChoixTransfertMadSiege: "0" | "1";
    }
    interface IPreconisationIAMad {
        codeTypeDecisionPrecoBrute: string;
        codeTypeDecisionPrecoFinale: string;
        tauxDeConfiancePrecoFinale: number;
        libelleJustificatifPreco1: string;
        libelleJustificatifPreco2: string;
        libelleJustificatifPreco3: string;
        libelleJustificatifGestion1: string;
        libelleJustificatifGestion2: string;
        libelleJustificatifGestion3: string;
        codeNiveauAnalyseDuTaux: string;
        niveauAnalyseDuTaux: string;
        codeNiveauAnalyseGlobal: string;
        niveauAnalyseGlobal: string;
    }
    interface IEvaluationRisqueMad {
        indicateurEvaluationRisque: boolean;
        listeAlerteRisque: Array<IAlerteRisque>;
    }
    interface IAlerteRisque {
        indicateurAlerte: boolean;
        libelleCourtAlerte: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.SoldeDisponible {
    interface IParametreGet {
        codeEtablissement: string;
        numeroCompteBancaire: string;
        codeProduit: string;
        codeGuichet: string;
    }
    interface ISoldeDisponibleMad {
        compteBancaire: ICompteBancaire;
        compositionEnDevise: ICompositionEnDevise;
        compositionEnEuro: ICompositionEnEuro;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
    }
    interface ICompositionEnDevise {
        codeDevise: string;
        soldeDisponibleEnDevise: number;
        soldeCompteEnDevise: number;
        mtDecouvertAutoriseEnDevise: number;
        mtImpayeCreditSynchroEnDevise: number;
        mtReserveEncaissementEnDevise: number;
        mtPlanReglementVarioEnDevise: number;
    }
    interface ICompositionEnEuro {
        codeDeviseEuro: string;
        soldeDisponibleEnEuro: number;
        soldeCompteEnEuro: number;
        mtDecouvertAutoriseEnEuro: number;
        mtImpayeCreditSynchroEnEuro: number;
        mtReserveEncaissementEnEuro: number;
        mtPlanReglementVarioEnEuro: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.SuiviActivite {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeEtablissement: string;
    }
    interface ISuiviActivite {
        listeMessageAvertissement: Array<string>;
        listeElementStructure: Array<IElementStructure>;
    }
    interface IElementStructure {
        identifiantInterneEds: number;
        listeEntiteRattachee: Array<IEntiteRattachee>;
    }
    interface IEntiteRattachee {
        identifiantInterne: number;
        identifiantExterne: number;
        codeType: string;
        libelleEtatPriseDecision: string;
        nombreMouvementMad: number;
        nombreMouvementMadEnDateLimite: number;
        nombreMouvementMadTraite: number;
        nombreMouvementMadEnSuspens: number;
        nombreMouvementMadNonDecide: number;
        montantTotalMouvementMad: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.SyntheseHistorique {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface ISyntheseHistorique {
        listeMessageAvertissement: Array<string>;
        nombreTotalEntiteTitulaire: number;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        dateDerniereDecision: string;
        dateDernierForcage: string;
        nombreMouvementADecider: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Synthese {
    interface IParametreGet {
        codeEtablissement: string;
        codeAgentConnecte: string;
        codeTypeRecherche: string;
        codeTypeSynthese: string;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        identifiantEds: number;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeProvenanceMouvement: string;
    }
    interface ISynthese {
        listeMessageAvertissement: Array<string>;
        listeElementStructure: Array<IElementStructure>;
    }
    interface IElementStructure {
        nombreTotalMouvementMad: number;
        nombreTotalEntiteTitulaire: number;
        libelleEtatPriseDecision: string;
        nombreMouvementEnDateLimite: number;
        codeAttenteDelegation: string;
        identifiantEDS: number;
        designationEDS: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        identifiantGerePar: number;
        dateLimiteDecision: string;
        nombreMouvementMad: number;
        montantGlobalMouvementMad: number;
        nombreMouvementEnSuspensDuJour: number;
        nombreMouvementEntreAuMadCeJour: number;
        codeAttenteDelegation: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.SyntheseTarification {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantEds: number;
        dateDebutRecherche: string;
        dateFinRecherche: string;
    }
    interface ISyntheseTarification {
        listeMessageAvertissement: Array<string>;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        cumulMontantOperation: number;
        nombreOperation: number;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeDevise: string;
        cumulMontantOperation: number;
        nombreOperation: number;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.VisionFinanciere {
    interface IParametreGet {
        codeAgentConnecte: string;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    interface IVisionFinanciere {
        listeMessageAvertissement: Array<string>;
        entiteTitulaire: IEntiteTitulaire;
    }
    interface IEntiteTitulaire {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        dateDomiciliation: string;
        infoFinanciereEntiteTitulaire: IInfoFinanciereEntiteTitulaire;
        listeCompteBancaire: Array<ICompteBancaire>;
    }
    interface IInfoFinanciereEntiteTitulaire {
        codeDevise: string;
        montantCapitauxDetenus: number;
        montantCapitauxDebiteurs: number;
        soldeDisponibleGlobal: number;
        montantDomiciliationTotal: number;
        montantInstancesInternes: number;
        montantRevenusReguliersTotal: number;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompteBancaire: string;
        etatOuvertureCompte: string;
        codeTypeCompte: string;
        codeTypeDecouvertAutorise: string;
        codeTypeCompteFusion: string;
        dateDomiciliation: string;
        dateDerniereOperation: string;
        infoFinanciereCompteBancaire: IInfoFinanciereCompteBancaire;
    }
    interface IInfoFinanciereCompteBancaire {
        codeDeviseCompteBancaire: string;
        soldeMoyen: number;
        soldeLePlusBas: number;
        soldeLePlusHaut: number;
        soldeCompteFusion: number;
        montantDomiciliation: number;
        montantInstancesInternes: number;
        montantInstancesIntCreditrices: number;
        montantInstancesIntDebitrices: number;
        soldeDisponible: number;
        compositionSoldeDisponible: ICompositionSoldeDisponible;
        soldeDisponibleEnEuro: number;
        montantRevenusReguliers: number;
    }
    interface ICompositionSoldeDisponible {
        soldeCompteBancaire: number;
        montantDecouvertAutorise: number;
        montantDecouvertAutoriseEnEuro: number;
        montantImpayeCreditSynchro: number;
        montantReserveEncaissement: number;
        montantPlanReglementVario: number;
    }
}

declare module Mad.Rest.MouvAttenteDecisionParam.Modele.Courrier {
    interface IParametreGet {
        codeEtablissement: string;
    }
    interface ICourrier {
        listeMessageAvertissement: Array<string>;
        codeEtablissement: string;
        listeCourrierMad: Array<ICourrierMad>;
    }
    interface ICourrierMad {
        codeTypeCourrier: string;
        libelleTypeCourrier: string;
        codeLieuTraitement: string;
        libelleLieuTraitement: string;
        listeEnvoiAutomatique: Array<IEnvoiAutomatique>;
        infoRetourEnregistrement: string;
    }
    interface IEnvoiAutomatique {
        codeTypeDecision: string;
        libelleDecision: string;
        codeTypeCompte: string;
        libelleTypeCompte: string;
        codeMotifEntreeAuMad: string;
        libelleMotifEntreeAuMad: string;
        codeOpposition: string;
        libelleOpposition: string;
    }
}

declare module Mad.Rest.MouvAttenteDecisionParam.Modele.TableParam {
    interface ITableParametreMad {
        tableMV11: Array<IEnregistrementTableMV11>;
        tableMV12: Array<IEnregistrementTableMV12>;
        tableMV14: Array<IEnregistrementTableMV14>;
        tableMV1E: Array<IEnregistrementTableMV1E>;
        tableMV1F: Array<IEnregistrementTableMV1F>;
        tableMV1G: Array<IEnregistrementTableMV1G>;
        tableMV1Q: Array<IEnregistrementTableMV1Q>;
        tableMV1S: Array<IEnregistrementTableMV1S>;
        tableMV5B: Array<IEnregistrementTableMV5B>;
        tableMV5I: Array<IEnregistrementTableMV5I>;
        tableMV6B: Array<IEnregistrementTableMV6B>;
        tableMV6C: Array<IEnregistrementTableMV6C>;
    }
    interface IEnregistrementTableMV11 {
        codeMotifRejet: string;
        codeMotifRejetComplementaire: string;
        dateCreationMiseAJour: string;
    }
    interface IEnregistrementTableMV12 {
        codeProduit: string;
        codeTypeDecision: string;
        codeMotifEntreeAuMad: string;
        dateCreationMiseAJour: string;
    }
    interface IEnregistrementTableMV14 {
        codeTypeDecision: string;
        numeroSequenceSeuilConfiance: number;
        dateDebutValidite: string;
        dateFinValidite: string;
        pourcentageConfiance: number;
        codeCouleurAnalyse: string;
        timestampCreation: string;
    }
    interface IEnregistrementTableMV1E {
        codeMotifEntreeAuMad: string;
        libelleMotifEntreeAuMad: string;
    }
    interface IEnregistrementTableMV1F {
        codeMotifRejet: string;
        libelleMotifRejet: string;
        codeCategorieOperationSIT: string;
    }
    interface IEnregistrementTableMV1G {
        codeProvenance: string;
        libelleProvenance: string;
        indciateurGestionProvenance: boolean;
        codeGestionTechnique: boolean;
    }
    interface IEnregistrementTableMV1Q {
        codeProvenance: string;
        codeOperationOc: string;
        codeTypeDecision: string;
        codeOperationInterbancaire: string;
    }
    interface IEnregistrementTableMV1S {
        codeProvenanceMouvement: string;
        codeOperationOc: string;
        codeMotifRejet: string;
    }
    interface IEnregistrementTableMV5B {
        codeTypeDecision: string;
        codeMotifRejetOuEntreeAuMad: string;
        codeProduit: string;
        indicateurDemandeFacturation: boolean;
    }
    interface IEnregistrementTableMV5I {
        codeProduit: string;
        codeStatutTarification: string;
        libelleStatutTarification: string;
        dateDebutValidite: string;
        dateFinValidite: string;
    }
    interface IEnregistrementTableMV6B {
        codeTypeDecision: string;
        codeTypeCourrier: string;
        codeProduit: string;
        codeMotifRejet: string;
        codeOpposition: string;
    }
    interface IEnregistrementTableMV6C {
        codeTypeCourrier: string;
        codeProduit: string;
        indicateurDemandeEnvoiSmsAuto: string;
    }
    interface IParameterGetParam {
        codeEtablissement: string;
        designationTable: string;
    }
}

declare module Mad.Rest.StructureV2.Modele.CaracteristiqueEds {
    interface IParametreGet {
        codeEtablissement: string;
        identifiantInterneEDS: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }
    interface IInfoEDS {
        typeEDS: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        numeroTelephone: string;
        codePays: string;
        dateDebutValiditeEds: string;
        dateFinValiditeEds: string;
        identifiantInterneEDS: number;
        libelleEDS: string;
        referenceExterneEDS: number;
        codeEtablissement: string;
    }
    interface IInfoRattachementEDS {
        identifiantEDSRattachement: number;
        referenceEDSRattachement: number;
        typeEDSRattachement: string;
        libelleEDSRattachement: string;
        dateFinValiditeEDSRattachement: string;
        responsableEDSRattachement: number;
    }
    interface IInfoPosteFonctionnel {
        codeAgent: number;
        typeFonction: string;
        libelleFonction: string;
        codeQualiteAgent: string;
        adresseEMail: string;
    }
}

declare module Mad.Rest.StructureV2.Modele.PosteFonctionnelAgent {
    interface IParametreGet {
        codeEtablissement: string;
        codeAgent: string;
    }
    interface IPosteFonctionnelAgent {
        listePosteFonctionnel: Array<IInformationPosteFonctionnel>;
    }
    interface IInformationPosteFonctionnel {
        typeFonction: string;
        libelleFonction: string;
        codeQualiteAgent: string;
        identifiantPosteFonctionnel: number;
        designationAgent: string;
        referencePosteFonctionnel: number;
        civiliteAgent: string;
        nomFamilleAgent: string;
        nomUsageAgent: string;
        prenomAgent: string;
        dateDebutValiditePF: string;
        dateFinValiditePF: string;
        identSitePosteFonctionnel: number;
        ligne2AdresseSite: string;
        ligne3AdresseSite: string;
        ligne4AdresseSite: string;
        ligne5AdresseSite: string;
        ligne6AdresseSite: string;
        telephonePosteFonctionnel: string;
        emailPosteFonctionnel: string;
        codePaysSite: string;
        codeCanalAppartenance: string;
        informationRattachement: IRattachementPosteFonctionnel;
        codeEtablissement: string;
        codeAgent: number;
    }
    interface IRattachementPosteFonctionnel {
        codeIndicateurFinStructure: string;
        identifiantResponsableEDS: number;
        identifiantEDSRattachement: number;
        libelleEDSRattachement: string;
        typeEDSRattachement: string;
        libelleTypeEDSRattachement: string;
        dateFinValiditeEDSRattachement: string;
        referenceEDSRattachement: number;
    }
}

declare module Mad.Rest.StructureV2.Modele.RechercheEdsRegroupementMad {
    interface IParametreGet {
        codeEtablissement: string;
        codeAgentConnecte: string;
    }
    interface IParametreGet2 {
        codeEtablissement: string;
        codeAgentConnecte: string;
        identifiantInterneEds: number;
    }
    interface IRechercheEdsRegrpMad {
        listeMessageAvertissement: Array<string>;
        listeEdsRegrpMad: Array<IEdsRegrpMad>;
    }
    interface IEdsRegrpMad {
        identifiantInterneEdsRegrpMad: number;
        identifiantExterneEdsRegrpMad: number;
        libelleEdsRegrpMad: string;
    }
}

declare module Mad.Rest.StructureV2.Modele.RechercheEdsNiveauInferieurMad {
    interface IParametreGet {
        identifiantAgentTexte?: string;
        codeEtablissement: string;
        identifiantInterneEDS: number;
        dateInterrogation?: Date;
        typeOrganisation?: string;
    }
    interface IEdsNiveauInferieur {
        infoRattachementEDS: IInfoRattachementEDS;
        infoEDS: Array<IInfoEDS>;
        infoPosteFonctionnel: Array<IInfoPosteFonctionnel>;
    }
    interface IInfoRattachementEDS {
        identifiantEDSRattachement: number;
        referenceEDSRattachement: number;
        libelleEDSRattachement: string;
        typeEDSRattachement: string;
        libelleTypeEDSRattachement: string;
    }
    interface IInfoEDS {
        identifiantInterneEDS: number;
        referenceExterneEDS: number;
        libelleEDS: string;
        typeEDS: string;
        libelleTypeEDS: string;
    }
    interface IInfoPosteFonctionnel {
        identifiantPosteFonctionnel: number;
        referencePosteFonctionnel: number;
        libellePosteFonctionnel: string;
        typeEDS: string;
        libelleTypeEDS: string;
        codeAgent: number;
        designationAgent: string;
        typeFonction: string;
        libelleFonction: string;
        civiliteAgent: string;
        nomFamilleAgent: string;
        prenomAgent: string;
        nomUsageAgent: string;
    }
}

declare module Mad.Rest.Tiers.Modele.Media {
    interface IParametreGet {
        identifiantPersonne: number;
        codeEtablissement: string;
    }
    interface IMedia {
        identificationPersonne: IIdentifiantPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentifiantPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IListeMedia {
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: boolean;
        referenceAccesMedia: string;
        indicateurOptin: boolean;
        commentaire: string;
        indicatifTelephone: string;
        indicateurSecu: boolean;
        indicateurProOptout: boolean;
        indicateurSmsFax: boolean;
    }
}

declare module Mad.Rest.AgentV2 {
    interface IRechercheRestService {
        getRecherche(criteres: Modele.Recherche.IParametreRecherche | Modele.Recherche.IParametreRechercheParNomAgent): ng.IPromise<Modele.Recherche.IRechercheAgent>;
    }
}

declare module Mad.Rest.CreFonctionnel {
    interface ICreFonctionnelRestService {
        postCreFonctionnel(parametres: Modele.CreFonctionnel.IParametreGet, body: Modele.CreFonctionnel.ICreFonctionnel): ng.IPromise<Modele.CreFonctionnel.IEntiteApplicativeRetour>;
    }
}

declare module Mad.Rest.DelegationV1 {
    interface IDemandeRestService {
        postDemande(body: Modele.Demande.IDemandeControleDelegation): ng.IPromise<Modele.Demande.IRetourControleDelegation>;
    }
}

declare module Mad.Rest.MouvAttenteDecisionParam {
    interface ICourrierRestService {
        getCourrier(params: Modele.Courrier.IParametreGet): ng.IPromise<Modele.Courrier.ICourrier>;
    }
}

declare module Mad.Rest.MouvAttenteDecisionParam {
    interface ITableParamRestService {
        getTableParam(criteres: Modele.TableParam.IParameterGetParam): ng.IPromise<Modele.TableParam.ITableParametreMad>;
    }
}

declare module Mad.Rest.StructureV2 {
    interface ICaracteristiqueEdsRestService {
        getCaracteristiqueEds(criteres: Modele.CaracteristiqueEds.IParametreGet): ng.IPromise<Modele.CaracteristiqueEds.ICaracteristiqueEDS>;
    }
}

declare module Mad.Rest.StructureV2 {
    interface IPosteFonctionnelAgentRestService {
        getPostesFonctionnelsAgent(criteres: Modele.PosteFonctionnelAgent.IParametreGet): ng.IPromise<Modele.PosteFonctionnelAgent.IPosteFonctionnelAgent>;
    }
}

declare module Mad.Rest.StructureV2 {
    interface IRechercheEdsNiveauInferieurRestService {
        getEdsNiveauInferieur(criteres: Modele.RechercheEdsNiveauInferieurMad.IParametreGet): ng.IPromise<Modele.RechercheEdsNiveauInferieurMad.IEdsNiveauInferieur>;
    }
}

declare module Mad.Rest.StructureV2 {
    interface IRechercheEdsRegroupementMadRestService {
        getEdsRegroupement(criteres: Modele.RechercheEdsRegroupementMad.IParametreGet | Modele.RechercheEdsRegroupementMad.IParametreGet2): ng.IPromise<Modele.RechercheEdsRegroupementMad.IRechercheEdsRegrpMad>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IAnnulationDecisionRestService {
        annulerDecision(criteres: Modele.AnnulationDecision.IAnnulationDecision): ng.IPromise<Modele.AnnulationDecision.IAnnulationDecision>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IAuditTarificationRestService {
        getAuditTarification(criteres: Modele.AuditTarification.IParametreGet): ng.IPromise<Modele.AuditTarification.IAuditTarification>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ICaracteristiqueRestService {
        getCaracteristique(criteres: Modele.Caracteristique.IParametreGet): ng.IPromise<Modele.Caracteristique.ICaracteristique>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ICommentaireRestService {
        getCommentaire(criteres: Modele.Commentaire.IParametreGet): ng.IPromise<Modele.Commentaire.ICommentaire>;
        postCommentaire(commentaire: Modele.Commentaire.ICommentaire): ng.IPromise<Modele.Commentaire.ICommentaire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ICompteForcageRestService {
        getCompteForcage(criteres: Modele.CompteForcage.IParametreGet): ng.IPromise<Modele.CompteForcage.ICompteForcage>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IControleDelegataireRestService {
        putControleDelegataire(criteres: Modele.ControleDelegataire.IPutParametre): ng.IPromise<Modele.ControleDelegataire.IControleDelegataire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IControleDelegationRestService {
        getControleDelegation(criteres: Modele.ControleDelegation.IParametreGet): ng.IPromise<Modele.ControleDelegation.IControleDelegation>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IDecisionRestService {
        putDecision(body: Modele.Decision.IDecision): ng.IPromise<Modele.Decision.IDecision>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IDelegataireRestService {
        getDelegataires(criteres: Modele.Delegataire.IParametreGet): ng.IPromise<Modele.Delegataire.IDelegataire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IDemandeDelegationRestService {
        postDemande(body: Modele.DemandeDelegation.IDemandeControleDelegation): ng.IPromise<Modele.DemandeDelegation.IRetourControleDelegation>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IDeploiementMyMadRestService {
        getDeploiement(criteres: Modele.DeploiementMyMad.IParametreGet): ng.IPromise<Modele.DeploiementMyMad.IDeploiementMyMad>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IInfoSpecifiqueETMadRestService {
        getInfoEntite(params: Modele.InfoSpecifiqueETMad.IParametreGet): ng.IPromise<Modele.InfoSpecifiqueETMad.IInfoSpecifiqueETMad>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IJournalRestService {
        getJournal(criteres: Modele.Journal.IParametreGet): ng.IPromise<Modele.Journal.IJournal>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IListeDelegataireRestService {
        postListeDelegataire(body: Modele.ListeDelegataire.IListeDelegataire): ng.IPromise<Modele.ListeDelegataire.IListeDelegataire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IMessageSmsRestService {
        postMessageSms(message: Modele.MessageSms.IMessageSms): ng.IPromise<Modele.MessageSms.IMessageSms>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IPriseDecisionRestService {
        putPriseDecision(criteres: Modele.PriseDecision.IPriseDecision): ng.IPromise<Modele.PriseDecision.IPriseDecision>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IRechercheForcageAutoRestService {
        getForcageAuto(parametres: Modele.RechercheForcageAuto.IParametreGet): ng.IPromise<Modele.RechercheForcageAuto.IRechercheForcageAuto>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IRechercheHistoriqueRestService {
        getHistorique(parametres: Modele.RechercheHistorique.IParametreGet): ng.IPromise<Modele.RechercheHistorique.IRechercheHistorique>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IRechercheMadJourRestService {
        getRechercheMadJour(criteres: Modele.RechercheMadDuJour.IParametreGet): ng.IPromise<Modele.RechercheMadDuJour.IRechercheMadDuJour>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ISoldeDisponibleRestService {
        getSoldeDisponible(criteres: Modele.SoldeDisponible.IParametreGet): ng.IPromise<Modele.SoldeDisponible.ISoldeDisponibleMad>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ISuiviActiviteRestService {
        getSuiviActivites(criteres: Modele.SuiviActivite.IParametreGet, suiviActivite: Modele.SuiviActivite.ISuiviActivite): ng.IPromise<Modele.SuiviActivite.ISuiviActivite>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ISyntheseHistoriqueRestService {
        getSyntheseHistorique(parametres: Modele.SyntheseHistorique.IParametreGet): ng.IPromise<Modele.SyntheseHistorique.ISyntheseHistorique>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ISyntheseTarificationRestService {
        getSyntheseTarification(parametres: Modele.SyntheseTarification.IParametreGet): ng.IPromise<Modele.SyntheseTarification.ISyntheseTarification>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ISyntheseRestService {
        getSynthese(criteres: Modele.Synthese.IParametreGet): ng.IPromise<Modele.Synthese.ISynthese>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IVisionFinanciereRestService {
        getVisionFinanciere(criteres: Modele.VisionFinanciere.IParametreGet): ng.IPromise<Modele.VisionFinanciere.IVisionFinanciere>;
    }
}

declare module Mad.Rest.Tiers {
    interface IMediaRestService {
        getMedia(parametres: Modele.Media.IParametreGet): ng.IPromise<Modele.Media.IMedia>;
    }
}
