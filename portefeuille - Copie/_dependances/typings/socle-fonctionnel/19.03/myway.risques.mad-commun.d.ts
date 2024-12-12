
declare module Mad.Commun {
    var app: ng.IModule;
}

declare namespace Mad.Commun.Constantes.Decision {
    const LIBELLE_SUSPENSION: string;
    const LIBELLE_FORCAGE: string;
    const LIBELLE_AVEC_CORRECTION_RIB: string;
    const LIBELLE_SANS_CORRECTION_RIB: string;
    const LIBELLE_REJET: string;
    const LIBELLE_TRANSFERT_MAD_SIEGE: string;
}

declare namespace Mad.Commun.Constantes.Inject {
    const DECISIONS_UTILS_SERVICE: string;
    const DETAIL_MOUVEMENT_SERVICE: string;
    const REST_TO_APP_COMMUN_SERVICE: string;
    const MODAL_SERVICE: string;
    const POPUP_COMMUN_SERVICE: string;
    const SERVICE_AGENT: string;
    const Q: string;
}

declare namespace Mad.Commun.Constantes.TypeOperation {
    const LIBELLE_CHEQUE: string;
    const LIBELLE_VIREMENT: string;
    const LIBELLE_PRELEVEMENT: string;
    const LIBELLE_DEBIT_TIP: string;
    const LIBELLE_RETRAIT_DAB: string;
    const LIBELLE_LCR: string;
    const LIBELLE_CARTE_BANCAIRE: string;
    const LIBELLE_PRELEVEMENT_SEPA_FIRST_OOFF: string;
    const LIBELLE_PRELEVEMENT_SEPA_RCUR_FNAL: string;
    const LIBELLE_ANNULATION_PRELEVEMENT_SEPA: string;
    const LIBELLE_REVERSEMENT_PRELEVEMENT_SEPA: string;
    const LIBELLE_RETOUR_PRELEVEMENT_SEPA: string;
    const LIBELLE_REMBOURSEMENT_PRELEVEMENT_SEPA: string;
    const LIBELLE_INCONNU: string;
}

declare namespace Mad.Commun.Constantes.Recylcage {
    const LIBELLE_ANNULATION: string;
    const LIBELLE_EN_COURS: string;
    const LIBELLE_NON_RECYCLABLE: string;
    const LIBELLE_RECYCLAGE_BATCH: string;
    const LIBELLE_RECYCLAGE_MANUEL: string;
}

declare module Mad.Commun.Controleurs {
    class DetailMouvementControleur {
        private $modalInstance;
        private decisionsUtilsService;
        private static CLASS_NAME;
        private static logger;
        mouvement: Modeles.Application.IMouvement;
        messagesAvertissement: Array<string>;
        agentDecideur: string;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, caracteristique: Modeles.Application.ICaracteristique, decisionsUtilsService: Services.IDecisionsUtilsService);
        /**
         * Action du bouton "Fermer" de la modale du detail d'un mouvement
         * @returns {void}
         */
        fermer(): void;
        isAfficherAutreRib(): boolean;
        isDecisionRejet(): boolean;
        isDecisionPrise(): boolean;
        getLibelleAgentDecideur(): ng.IPromise<string>;
    }
}

declare module Mad.Commun.Enum {
    const enum MotifEntreeMadEnum {
        A_VERIFIER = "A",
        COMPTE_SOLDE = "C",
        DOMICILIATION_ERRONEE = "D",
        FAUX_NUMERO = "E",
        SANS_PROVISION = "F"
    }
    enum CodeTypeRechercheEnum {
        TOUT_HISTORIQUE = "1",
        HISTORIQUE_DU_AU = "2",
        EDS = " ",
        EDS_ATTENTE_DELEGATION = "A",
        EDS_SOUS_REGOUPEMENT = "B",
        EDS_DIRECT_REGROUPEMENT = "D",
        GUICHET = "I",
        COMPTE = "R",
        PROVENANCE = "P",
        PERIODE_ENTREE = "E",
        PERIODE_LIMITE = "L"
    }
    enum CodeTypeSynthese {
        ENTITE_TITULAIRE = "ET",
        POSTE_FONCTIONNEL = "PF"
    }
    enum CodeTypeDecisionEnum {
        ATTENTE = "A",
        FORCAGE = "F",
        REJET = "R",
        FORCAGE_SANS_CORRECTION_RIB = "T",
        FORCAGE_AVEC_CORRECTION_RIB = "S",
        TRANSFERT_MAD_SIEGE = "H",
        SANS_DECISION = ""
    }
    enum IndicateurEnum {
        OUI = "O",
        NON = "N"
    }
    /**
     * ' ' : non recyclable
     * 'E' : en cours de recyclage
     * 'R' : recyclé en batch
     * 'T' : recyclé manuellement
     * 'A' : annulation d'un mouvement recyclé
     */
    enum CodeEtatRecyclageEnum {
        NON_RECYCLABLE = "",
        EN_COURS = "E",
        RECYCLAGE_BATCH = "R",
        RECYCLAGE_MANUEL = "T",
        ANNULATION_RECYCLAGE = "A"
    }
    /**
     * utilisé par IForcageAutomatique.codeTypeOperation
     * '001' : virement
     * '005' : prélèvement
     * '007' : DAB
     * '010' : débit TIP
     * '012' : retrait carte bancaire
     * '018' : LCR
     * 'CHQ' : chèque
     */
    enum CodeTypeOperationEnum {
        VIREMENT = "001",
        PRELEVEMENT = "005",
        DAB = "007",
        DEBIT_TIP = "010",
        RETRAIT_CB = "012",
        LCR = "018",
        CHEQUE = "CHQ",
        PRELEVEMENT_SEPA_FIRST_OOFF = "090",
        PRELEVEMENT_SEPA_RCUR_FNAL = "093",
        ANNULATION_PRELEVEMENT_SEPA = "095",
        REVERSEMENT_PRELEVEMENT_SEPA = "096",
        RETOUR_PRELEVEMENT_SEPA = "097",
        REMBOURSEMENT_PRELEVEMENT_SEPA = "099"
    }
    const enum TopChoixPossibleEnum {
        OUI = "1",
        NON = "0"
    }
    const enum TypeEdsEnum {
        POSTE_FONCTIONNEL = "001",
        SERVICE = "002",
        AGENCE = "003",
        SIEGE = "008",
        ENTITE_ADMINISTRATIVE = "009",
        GAB = "010",
        GUICHET = "020"
    }
}

declare module Mad.Commun.Modeles.Application {
    interface ICaracteristique {
        messagesAvertissement: Array<string>;
        mouvementMad: IMouvement;
    }
    interface IMouvement {
        identifiant: number;
        dateEntreeAuMad: string;
        codeMotifEntreeAuMad: string;
        motifEntreeAuMad: string;
        codeOpposition: string;
        libelleOpposition: string;
        dateLimiteDecision: string;
        montantHTAFacturer: number;
        codeDeviseMontantHTAFacturer: string;
        codePrestation: string;
        nombreRecyclageMad: number;
        dateDernierRecyclageMad: string;
        codeEtatRecyclageMad: string;
        libelleEtatRecyclageMad: string;
        noteBale2: string;
        dateCalculNoteBale2: string;
        codeTypeEdsGerePar: string;
        identifiantEdsGerePar: number;
        libelleEdsGerePar: string;
        identifiantEdsADeciderPar: number;
        indicateurDemandeFacturation: boolean;
        operation: IOperation;
        decision: IDecision;
        courrier: ICourrier;
        listeCommentaireMouvement: Array<ICommentaire>;
    }
    interface ICommentaire {
        contenuCommentaire: string;
        dateDeSaisie: string;
        identifiantAgent: number;
        nomAgent: string;
        prenomAgent: string;
    }
    interface IInfoSepaOperation {
        libellePaysDonneurOrdre: string;
        libelleComplementMino: string;
        libelleCompletBeneficiaire: string;
        codeBicDestinataire: string;
        numeroIbanBeneficiaire: string;
    }
    interface IInfoDelegationDecision {
        codeAttenteDelegataire: boolean;
        codeNiveauDelegataireRequis: string;
        libelleVersionCharteDelegataire: string;
        identifiantEdsPourLeCompteDe: number;
        libelleEdsPourLeCompteDe: string;
    }
    interface IChoixPossibleDecision {
        topChoixRejet: string;
        topChoixForcage: string;
        topChoixEnSuspens: string;
        topChoixForcageRib: string;
        topChoixForcageRibCorrection: string;
    }
    interface ICourrier {
        indicateurDemandeCourrier: boolean;
        codeTypeCourrier: string;
        libelleTypeCourrier: string;
        indicateurEditionCourrierMurcef: boolean;
        dateEditionCourrierMurcef: string;
        indicateurFacturationCourrier: boolean;
        dateFacturationCourrier: string;
        indicateurDemandeAutoMurcef: boolean;
    }
    interface IDecision {
        codeTypeDecision: string;
        libelleDecision: string;
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
    interface IOperation {
        reference: string;
        libelle: string;
        libelleComplementaireA: string;
        libelleComplementaireB: string;
        dateCompensation: string;
        codeOperationInterbancaire: string;
        codeTypeOperation: string;
        libelleTypeOperation: string;
        montant: number;
        deviseMontant: string;
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
        codeDestinataire: string;
        codeAnnulation: string;
        infoSepa: IInfoSepaOperation;
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
}

declare namespace Mad.Commun.Modeles.DonneesDelocalisees {
    interface IOpposition {
        UCOPNL: string;
        UCOPNN: string;
        UVTPNS: string;
        /**
         * code opposition
         */
        UCOPNM: string;
        UVTPIC: string;
        UDDXE1: string;
        UDMXMJ: string;
        ULCPNM: string;
        UCOPNW: string;
        UCOPNX: string;
        UCOPNY: string;
        /**
         * Libellé opposition
         */
        ULIPNM: string;
        UCOPNS: string;
        UCOPNV: string;
        UCOPNO: string;
        UCOPNQ: string;
        UCGPUN: string;
        UXZ80: string;
        UVTPNC: string;
        COERPR: string;
        UVTPNF: string;
        UCTPNN: string;
        UCOPN3: string;
        UCOPN1: string;
        UCTPND: string;
        UCTPNF: string;
    }
    interface ICivilite {
        Key: string;
        Value: string;
    }
}

declare namespace Mad.Commun.Services {
    interface IDecisionsUtilsService {
        getLibelleDecision(codeDecision: string): string;
        getLibelleTypeOperation(codeTypeOperation: string): string;
        getLibelleEtatRecyclage(codeEtatRecylcage: string): string;
        getLibelleOpposition(codeOpposition: string): ng.IPromise<string>;
        getCivilite(codeCivilite: string): ng.IPromise<string>;
    }
    class DecisionsUtilsService implements IDecisionsUtilsService {
        private serviceAgentExtended;
        private $q;
        private static CLASS_NAME;
        private static logger;
        private codeEtablissement;
        private tableOpposition;
        private tableCivilite;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        getLibelleDecision(codeDecision: string): string;
        getLibelleTypeOperation(codeTypeOperation: string): string;
        getLibelleEtatRecyclage(codeEtatRecylcage: string): string;
        getLibelleOpposition(codeOpposition: string): ng.IPromise<string>;
        getCivilite(codeCivilite: string): ng.IPromise<string>;
        private findLibelleOpposition;
        private findCivilite;
    }
}

declare namespace Mad.Commun.Services {
    interface IDetailMouvementService {
        ouvrirPopup(caracteristique: Modeles.Application.ICaracteristique): ng.IPromise<void>;
    }
}

declare module Mad.Commun.Services {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupCommunService {
        /**
         * Permet d'ouvrir une popup simple d'informations
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
        /**
         * Ouverture d'une popup demandant la confirmation d'une action
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * @param {validerTexte} Texte du bouton de validation
         * @param {closeTexte} Texte du bouton de fermeture
         */
        showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: any, backdrop?: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale XL. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModalXl(templateUrl: string, controllerName: string, templateDatas: any, backdrop?: string): ng.IPromise<any>;
    }
}

declare namespace Mad.Commun.Services {
    import madRest = Rest.MouvAttenteDecision.Modele;
    /**
     * Fonctions nécéssaires à la transformation des objets REST vers des objets application
     * Les interfaces des modèles REST se trouvent dans le projet mad-rest de la même solution
     */
    interface IRestToAppCommunService {
        /**
         * Transforme un objet issu de la ressource mouvAttenteDecision/caracteristique vers un objet utilisé par l'application
         * @param caracteristique REST
         */
        caracteristiqueRestToApp(caracteristiqueRest: madRest.Caracteristique.ICaracteristique): ng.IPromise<Modeles.Application.ICaracteristique>;
    }
    class RestToAppCommunService implements IRestToAppCommunService {
        private decisionsUtilsService;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        constructor(decisionsUtilsService: IDecisionsUtilsService);
        caracteristiqueRestToApp(caracteristiqueRest: madRest.Caracteristique.ICaracteristique): ng.IPromise<Modeles.Application.ICaracteristique>;
        private mapperDecisionRestToApp;
        private mapperOperationRestToApp;
        private mapperCourrierRestToApp;
        private mapperInfoDelegationRestToApp;
        private mapperInfoDecideurRestToApp;
        private mapperInfoSepaRestToApp;
        private mapperCommentaireRestToApp;
    }
}
