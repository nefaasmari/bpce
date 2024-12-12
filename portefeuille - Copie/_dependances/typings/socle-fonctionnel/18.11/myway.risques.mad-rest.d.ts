
declare module Mad.Rest.Constantes {
    module Url {
        const URL_REST: string;
        module MouvAttenteDecision {
            const BASE: string;
            const SYNTHESE: string;
            const RECHERCHE: string;
        }
    }
    module Inject {
        const RECHERCHE_REST_SERVICE: string;
        const SYNTHESE_REST_SERVICE: string;
    }
}

declare module Mad.Rest {
    var app: ng.IModule;
}

declare module Mad.Rest.MouvAttenteDecision.Modele {
    enum CodeTypeRechercheEnum {
        TOUT_HISTORIQUE,
        HISTORIQUE_DU_AU,
        EDS,
        EDS_ATTENTE_DELEGATION,
        EDS_SOUS_REGOUPEMENT,
        EDS_DIRECT_REGROUPEMENT,
        GUICHET,
        COMPTE,
        PROVENANCE,
        PERIODE_ENTREE,
        PERIODE_LIMITE,
    }
    enum RechercheAgentEnum {
        OUI,
        NON,
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Recherche {
    interface ICritereSelection {
        codeTypeRecherche: CodeTypeRechercheEnum;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        identifiantPersonne: number;
        identifiantEntiteTitulaire: number;
        identifiantEds: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeProvenanceMouvement: string;
        codeAgentConnecte: string;
    }
    interface IInfoGeneraleEntiteTitulaire {
        codeCotationInterne: string;
        codeCategorieSocioPro: string;
        libelleCategorieSocioPro: string;
        noteBale2: string;
        dateCalculNoteBale2: string;
        dateDomiciliation: number;
        dateDerniereDecisionMad: string;
        dateDernierCourrier: string;
        libelleDernierCourrier: string;
        indicateurExistence: string;
        libelleNatureInterdiction: string;
        codeAppartenanceReseau: string;
    }
    interface IInfoStructureEntiteTitulaire {
        identifiantEdsSuiviPar: number;
        libelleEdsSuiviPar: string;
        identifiantEdsGerePar: number;
        libelleEdsGerePar: string;
        identifiantEdsDomicilieA: number;
        libelleEdsDomicilieA: string;
    }
    interface IInfoFinanciereEntiteTitulaire {
        montantCapitauxDetenus: number;
        deviseMontantCapitauxDetenus: string;
        montantCapitauxDebiteurs: number;
        deviseMontantCapitauxDebiteurs: string;
        montantGlobalMad: number;
        deviseMontantGlobalMad: string;
        montantInstancesInternes: number;
        deviseMontantInstancesInternes: string;
        soldeDisponibleGlobal: number;
        deviseSoldeDisponibleGlobal: string;
        montantDomiciliationTotal: number;
        deviseMontantDomiciliationTotal: string;
    }
    interface IInfoAdministrativeEntiteTitulaire {
        ligneAdresse2: string;
        ligneAdresse3: string;
        ligneAdresse4: string;
        ligneAdresse5: string;
        ligneAdresse6: string;
        numeroTelephoneDomicile: string;
        numeroTelephoneTravail: string;
    }
    interface IInfoFinanciereCompteBancaire {
        soldeCompteBancaire: number;
        soldeMoyen: number;
        soldeLePlusBas: number;
        soldeLePlusHaut: number;
        soldeDisponible: number;
        montantDecouvert: number;
        montantDomiciliation: number;
        deviseCompteBancaire: string;
    }
    interface IInfoSepaOperation {
        libellePaysDonneurOrdre: string;
        libelleComplementMino: string;
        libelleCompletBeneficiaire: string;
        codeBicDestinataire: string;
        numeroIbanBeneficiaire: string;
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
    interface IChoixPossibleDecision {
        topChoixEnSuspens: string;
        topChoixForcage: string;
        topChoixRejet: string;
        topChoixForcageRib: string;
        topChoixForcageRibCorrection: string;
    }
    interface ICourrier {
        indicateurDemandeCourrier: string;
        codeTypeCourrier: string;
        libelleTypeCourrier: string;
        indicateurEditionCourrier: string;
        dateEditionCourrier: string;
        indicateurFacturationCourrier: string;
        dateFacturationCourrier: string;
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
        indicateurDecisionFacturable: string;
        choixPossibleDecision: IChoixPossibleDecision;
        infoDelegation: IInfoDelegationDecision;
        infoDecideur: IInfoDecideurDecision;
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
        soldeCompteAvantOperation: number;
        soldeCompteFinJournee: number;
        deviseSoldeCompte: string;
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
        codeAnnulation: string;
        infoSepa: IInfoSepaOperation;
        libelleDomiciliation: string;
    }
    interface IMouvementMad {
        identifiantMouvement: number;
        dateEntreeAuMad: string;
        codeMotifEntreeAuMad: string;
        motifEntreeAuMad: string;
        codeOpposition: string;
        dateLimiteDecision: string;
        montantHTAFacturer: number;
        deviseMontantHTAFacturer: string;
        codePrestation: string;
        nombreRecyclageMad: number;
        dateDernierRecyclageMad: string;
        noteBale2: string;
        dateCalculNoteBale2: string;
        codeTypeEdsGerePar: string;
        identifiantEdsGerePar: number;
        libelleEdsGerePar: string;
        identifiantEdsADeciderPar: number;
        operation: IOperation;
        decision: IDecision;
        courrier: ICourrier;
        codeEtatRecyclageMad: string;
    }
    interface ICompteBancaire {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeTypeCompte: string;
        codeTypeDecouvert: string;
        dateDomiciliation: string;
        dateDerniereOperation: string;
        listeMouvementMadDuJour: Array<IMouvementMad>;
        listeMouvementMadHistorise: Array<IMouvementMad>;
        infoFinanciere: IInfoFinanciereCompteBancaire;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        codeEtat: string;
        codeComposition: string;
        infoAdministrative: IInfoAdministrativeEntiteTitulaire;
        infoFinanciere: IInfoFinanciereEntiteTitulaire;
        infoStructure: IInfoStructureEntiteTitulaire;
        infoGenerale: IInfoGeneraleEntiteTitulaire;
        listeCompteBancaire: Array<ICompteBancaire>;
        codeEtablissement: string;
        codeUsage: string;
    }
    interface IRecherche {
        critereSelection: ICritereSelection;
        messageAvertissement: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
}

declare module Mad.Rest.MouvAttenteDecision.Modele.Synthese {
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        identifiantGerePar: number;
        dateLimiteDecision: string;
        nombreMouvementMad: number;
        montantGlobalMouvementMad: number;
        codeAttenteDelegation: string;
    }
    interface IElementStructure {
        nombreTotalMouvementMad: number;
        nombreTotalEntiteTitulaire: number;
        libelleEtatPriseDecision: string;
        nombreMouvementEnDateLimite: number;
        codeAttenteDelegation: string;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface ISynthese {
        critereSelection: ICritereSelection;
        listeElementStructure: Array<IElementStructure>;
    }
    interface ICritereSelection {
        codeTypeRecherche: CodeTypeRechercheEnum;
        indicateurRechercheAgent: RechercheAgentEnum;
        dateDebutRecherche: string;
        dateFinRecherche: string;
        identifiantEds: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteBancaire: string;
        codeProvenanceMouvement: string;
        codeAgentConnecte: string;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface IRechercheRestService {
        getRecherche(criteres: Modele.Recherche.ICritereSelection): ng.IPromise<Modele.Recherche.IRecherche>;
    }
}

declare module Mad.Rest.MouvAttenteDecision {
    interface ISyntheseRestService {
        getSynthese(criteres: Modele.Synthese.ICritereSelection): ng.IPromise<Modele.Synthese.ISynthese>;
    }
}
