
declare module Mad.Commun {
    var app: ng.IModule;
}

declare namespace Mad.Commun.Constantes.Contexte {
    const IDENTIFIANT_CREDIT: string;
    const IDENTIFIANT_PERSONNE: string;
}

declare namespace Mad.Commun.Constantes.Decision {
    const LIBELLE_SUSPENSION: string;
    const LIBELLE_FORCAGE: string;
    const LIBELLE_AVEC_CORRECTION_RIB: string;
    const LIBELLE_SANS_CORRECTION_RIB: string;
    const LIBELLE_REJET: string;
    const LIBELLE_TRANSFERT_MAD_SIEGE: string;
    const LIBELLE_ATTENTE_DELEG: string;
}

declare namespace Mad.Commun.Constantes.DonneesDelocalisees {
    const TABLE_MODE_COMPOSITION: string;
    const TABLE_USAGE_ENTITE: string;
}

declare namespace Mad.Commun.Constantes.DonneesMetier {
    const NOMBRE_MOTS_MINIMUM_SMS: number;
    const NOMBRE_MOTS_TOTAL_SMS: number;
    const CODE_COMPOSANT_APPLICATIF: string;
    const CODE_EVENEMENT: string;
    const CODE_SERVICE_INITIATEUR: string;
    const CODE_TYPE_ENTITE_EVENEMENT: string;
    const NUMERO_VERSION: string;
    const NUMERO_VERSION_SERVICE_INITIATEUR: string;
    const CODE_STRUCTURE_DONNEE_EVENEMENT: string;
    const NUMERO_SEGMENT_CRE: number;
    const ZONE_BANALISEE_CRE: string;
    const NUMERO_SEGMENT_CRE_2: number;
    const IDENTIFIANT_APPLICATION_EMETTRICE: string;
    const CODE_ACTION: string;
    const TYPE_CANAL: string;
    const MODE_UTILISATION: string;
    const TYPE_DESTINATAIRE: string;
    const DATE_AU_PLUS_TOT: string;
    const HEURE_AU_PLUS_TOT: string;
    const HEURE_AU_PLUS_TARD: string;
    const PRIORITE: string;
    const IDENTIFIANT_MESSAGE_TYPE: string;
    module Habilitations {
        /** Habilitation Envoi de SMS (affichage du bouton d'envoi de SMS) */
        const ENVOI_SMS: string;
        const EDITION_SMS: string;
    }
    module Message {
        /** Message affiché par défaut */
        const DEFAUT_PART: string;
        const DEFAUT_PRO: string;
    }
}

declare namespace Mad.Commun.Constantes.Inject {
    module Angular {
        const SCOPE: string;
        const LOCATION: string;
        const Q: string;
    }
    const DECISIONS_UTILS_SERVICE: string;
    const DETAIL_MOUVEMENT_SERVICE: string;
    const EDS_REGROUPEMENT_SERVICE: string;
    const REST_TO_APP_COMMUN_SERVICE: string;
    const INFORMATIONS_ENTITE_SERVICE: string;
    const MEDIA_SERVICE: string;
    const MODAL_SERVICE: string;
    const PORTAIL_SERVICE: string;
    const POPUP_COMMUN_SERVICE: string;
    const SERVICE_AGENT: string;
    const SCOPE: string;
    const Q: string;
    const ACCES_MAD_SERVICE = "AccesMadService";
    const NOTIFICATION: string;
    const MESSAGE_SMS_SERVICE: string;
    const ERREUR_500 = "MyMAD est actuellement indisponible. Veuillez r\u00E9essayer plus tard.";
    const CODE_HTTP_500: number;
}

declare namespace Mad.Commun.Constantes.InstancesInternes {
    module CodeProduit {
        const CREDIT_P000: string;
        const CREDIT_P001: string;
        const COMPTE_DEPOT: string;
        const COMPTE_COURANT_ENTREPRISE: string;
        const PLAN_VARIO: string;
    }
    module Picto {
        const PICTO_CREDIT: string;
        const PICTO_COMPTE: string;
        const PICTO_UNDEFINED: string;
    }
    module Habilitations {
        /** Habilitation Accès débranchement Gérer Crédit Synchro */
        const ACCES_SYNCHRO: string;
    }
}

declare namespace Mad.Commun.Constantes.Lisa {
    const VERS_MY_CREDIT_IMMO: number;
    const SYNTH_CLI_NSDK: number;
    const HISTO_MAD: number;
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
        isAfficherSoldeAvantOperation(): boolean;
    }
}

declare module Mad.Commun.Enum {
    enum MotifEntreeMadEnum {
        A_VERIFIER = "A",
        COMPTE_SOLDE = "C",
        DOMICILIATION_ERRONEE = "D",
        FAUX_NUMERO = "E",
        SANS_PROVISION = "F",
        OPPOSITION = "6"
    }
    enum CodeTypeRechercheEnum {
        TOUT_HISTORIQUE = "1",
        HISTORIQUE_DU_AU = "2",
        EDS = " ",
        EDS_ATTENTE_DELEGATION = "A",
        EDS_SOUS_REGOUPEMENT = "B",
        EDS_DIRECT_REGROUPEMENT = "D",
        TOUS_EDS = "G",
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
    enum TopChoixPossibleEnum {
        OUI = "1",
        NON = "0"
    }
    enum TypeEdsEnum {
        POSTE_FONCTIONNEL = "001",
        SERVICE = "002",
        AGENCE = "003",
        SIEGE = "008",
        ENTITE_ADMINISTRATIVE = "009",
        GAB = "010",
        GUICHET = "020"
    }
}

declare module Mad.Commun.Enum {
    enum FonctionnaliteMadEnum {
        ACCES_PILOTE = "ACCPILOT",
        ADELYS_V2 = "ADELYSV2"
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
        codeEnvoiCourrierAutomatique: string;
        libelleEnvoiCourrierAutomatique: string;
        codeEnvoiSmsAutomatique: string;
        libelleEnvoiSmsAutomatique: string;
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

declare namespace Mad.Commun.Modeles.Application {
    interface IHeader {
        sousTitre: string;
        isChargement?: boolean;
        information?: IHeaderInfo;
        isInterditBancaire?: boolean;
    }
    interface IHeaderInfo {
        libelleModeComposition: string;
        edsDomiciliation: string;
        usageEntiteTitulaire: string;
        suiviPar: string;
        montantCapitauxDetenus: number;
        montantCapitauxDebiteurs: number;
        devise: string;
        montantInstancesInternes: number;
        libelleDernierCourrier: string;
        dateDernierCourrier: string;
        dateDerniereDecision: string;
        libelleInterdit: string;
        isHabilitationInstancesInternes?: boolean;
        instancesInternes: IInstancesInternes[];
        listePersonne: IPersonne[];
        personneSelectionnee: IPersonne | null;
    }
    interface IInstancesInternes {
        numeroCompte: string;
        codeGuichet?: string;
        montant: number;
        codeDevise: string;
        codeProduit: string;
        titre: string;
        picto: string;
        estHabiliteClic: boolean;
    }
}

declare namespace Mad.Commun.Modeles.Application {
    interface IInformationsEntiteTitulaire {
        designationEntite: string;
        identifiantEntite: number;
        listePersonnes: IPersonne[];
        modeComposition: string;
        codeUsageEntite: string;
        libelleModeComposition: string;
        libelleGerePar: string;
        libelleSuiviPar: string;
        libelleUsageEntite: string;
        noteBale2: string;
        dateNotation: string;
        indicateurNoteObsolete: boolean;
        codeCategorieClient: string;
        identifiantGerePar: number;
        identifiantSuiviPar: number;
        libelleAgenceDomiciliation: string;
        identifiantAgenceDomiciliation: number;
        libelleDernierCourrier: string;
        dateDernierCourrier: string;
        libelleInterditBancaire: string;
        isInterditBancaire: boolean;
        codeDerniereDecision: Commun.Enum.CodeTypeDecisionEnum;
        dateDerniereDecision: string;
        adresseMailEdsGerePar: string;
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
    }
}

declare module Mad.Commun.Modeles.Application {
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

declare namespace Mad.Commun.Controleurs {
    class EnvoieSMSControleur {
        private $scope;
        private $modalInstance;
        private personne;
        private contexteService;
        private mediaService;
        private cnilService;
        private creFonctionnelService;
        private popupService;
        private notificationService;
        private messageSmsService;
        private pdtHabilitationService;
        private static CLASS_NAME;
        private static logger;
        titre: string;
        listeMedia: Array<Modeles.VueModele.IMediaVueModele>;
        mediaChoisi: Modeles.VueModele.IMediaVueModele;
        listeModeleSms: Array<Modeles.VueModele.IModeleSmsVueModele>;
        modeleSmsChoisi: Modeles.VueModele.IModeleSmsVueModele;
        message: string;
        editionPossibleSms: boolean;
        isFormSubmitted: boolean;
        isChargement: boolean;
        private formSms;
        messageCnilInterdit: string;
        messageCnilSensible: string;
        resultatCnil: PdtEntreprise.Modele.RetourCnil;
        bloqueBoutonEnvoyerSms: boolean;
        isEnvoiEnCours: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, personne: Modeles.Application.IPersonne, contexteService: PdtEntreprise.Services.IContexteService, mediaService: Services.IMediaCommunService, cnilService: PdtEntreprise.Services.ICnilService, creFonctionnelService: Commun.Services.ICreFonctionnelService, popupService: PdtEntreprise.Services.IPopupService, notificationService: MyWay.UI.IMwNotificationService, messageSmsService: Commun.Services.IMessageSmsService, pdtHabilitationService: PdtEntreprise.Services.IPdtHabilitationService);
        /**
         * Méthode permettant de récupérer uniquement la liste des médias du client sélectionné
         */
        getMediaPersonne(): void;
        /**
         * Restitue les modèles de message par défaut
         */
        getModeleSms(): void;
        personnaliserModeles(arrayModeles: Array<Modeles.VueModele.IModeleSmsVueModele>, auth: MyWay.Services.Context.AuthentificationInfo): Array<Modeles.VueModele.IModeleSmsVueModele>;
        initMessage(): void;
        afficherMessageErreurPasAssezCaracteres(): boolean;
        caracteresRestants(): string;
        fermer(): void;
        verifieCnil(): void;
        envoyerSms(): void;
        isEditionPossibleSms(): boolean;
    }
}

declare namespace Mad.Commun.Controleurs {
    class InstancesInternesControleur {
        private $modalInstance;
        private instancesInternes;
        private lisaService;
        private pdtHabilitationService;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        listeCredit: Modeles.Application.IInstancesInternes[];
        listeCompte: Modeles.Application.IInstancesInternes[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, instancesInternes: Modeles.Application.IInstancesInternes[], lisaService: PdtEntreprise.Services.ILisaService, pdtHabilitationService: PdtEntreprise.Services.IPdtHabilitationService);
        construireTuile(): void;
        configTuileCredit: MyWay.UI.iMwConfigTuile;
        configTuileDebit: MyWay.UI.iMwConfigTuile;
        /**
         * Action du bouton "Fermer" de la modale
         * @returns {void}
         */
        fermer(): void;
        private estHabilite;
        debrancherVersMyCreditImmo(identifiantCredit: number): void;
    }
}

declare namespace Mad.Commun.Directive {
    class MadInfoEntiteControleur {
        private serviceAgent;
        private $scope;
        private $q;
        private popupCommunService;
        private portailService;
        private lisaService;
        private pdtHabilitationService;
        static $inject: string[];
        info: Modeles.Application.IHeaderInfo;
        formSelectionParticipant: ng.IFormController;
        private estHabiliteEnvoiSms;
        private static CLASS_NAME;
        private static logger;
        private authInfo;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $q: ng.IQService, popupCommunService: Services.IPopupCommunService, portailService: myway.portail.api.PortailService, lisaService: PdtEntreprise.Services.ILisaService, pdtHabilitationService: PdtEntreprise.Services.IPdtHabilitationService);
        ouvrirPopupInstancesInternes(): ng.IPromise<void>;
        /**
         * Débranche soit vers :
         * Synthèse nsdk si intéropérabilité ok
         * synthèse myway (pp ou pm) sinon
         */
        debrancherSyntheseClient(identifiantPersonne: number): ng.IPromise<void>;
        isPCM(): ng.IPromise<boolean>;
        /**
         * Méthode permettant d'ouvrir la popup afin de remplir le formulaire d'envoie de sms.
         * @param infos : Informations relative à une personne
         */
        ouvrirPopupEnvoieSMS(infos: Modeles.Application.IPersonne): ng.IPromise<void>;
        /**
         * Débranche vers l'historique du MAD Personne
         */
        debrancherHistoriqueMAD(identifiantPersonne: number): ng.IPromise<void>;
        getAuthInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        /**
         * Controle si l'utilisateur a l'habilitation pour l'envoi du SMS et que la personne sélectionnée est une personne physique (PART ou PRO EI), si oui on peut afficher le bouton
         */
        isHabilitationEnvoiSms(): boolean;
    }
}

declare namespace Mad.Commun.Directive {
    /**
     * Informations de l'entité titulaire et de ses participants
     */
    function madInfoEntite(): ng.IDirective;
}

declare namespace Mad.Commun.Modeles.DonneesDelocalisees {
    interface IDonneesDeloc<T extends IObjetDeloc> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
    interface IObjetDeloc {
    }
    interface ICleValeur {
        Key: string;
        Value: string;
    }
}

declare module Mad.Commun.Modeles.VueModele {
    interface IMediaVueModele {
        numero: string;
        numeroUsage: string;
    }
    interface IModeleSmsVueModele {
        label: string;
        contenu: string;
    }
}

declare namespace Mad.Commun.Services {
    interface IAccesMadService {
        accesFonctionnalite(codeFonctionnalite: Enum.FonctionnaliteMadEnum): ng.IPromise<boolean>;
        listeMessage: string[];
    }
}

declare module Mad.Commun.Services {
    import creFonctionnelRestModele = Rest.CreFonctionnel.Modele.CreFonctionnel;
    interface ICreFonctionnelService {
        envoieSms(identifiantPersonne: number, codeEtablissement: string, numero: string, message: string): ng.IPromise<creFonctionnelRestModele.IEntiteApplicativeRetour>;
    }
}

declare namespace Mad.Commun.Services {
    interface IDetailMouvementService {
        ouvrirPopup(caracteristique: Modeles.Application.ICaracteristique): ng.IPromise<void>;
    }
}

declare namespace Mad.Commun.Services {
    import RechercheEdsRgrp = Rest.StructureV2.Modele.RechercheEdsRegroupementMad;
    interface IEdsRegroupementService {
        chargerEdsRegroupement(referenceExterneAgent: string, codeEtablissement: string): ng.IPromise<RechercheEdsRgrp.IRechercheEdsRegrpMad>;
    }
}

declare namespace Mad.Commun.Services {
    interface IInformationsEntiteService {
        getInformationsEntite(identifiantEI: number, demandeInfoComplementaireAdelysV2?: boolean): ng.IPromise<Modeles.Application.IInformationsEntiteTitulaire>;
    }
}

declare module Mad.Commun.Services {
    interface IMediaCommunService {
        getMedia(identifiantPersonne: number, codeEtablissement: string): ng.IPromise<Modeles.Application.IMedia>;
    }
}

declare module Mad.Commun.Services {
    import messageSmsRestModele = Rest.MouvAttenteDecision.Modele.MessageSms;
    interface IMessageSmsService {
        trace(auth: MyWay.Services.Context.AuthentificationInfo, personne: Modeles.Application.IPersonne, numero: string, message: string): ng.IPromise<messageSmsRestModele.IMessageSms>;
    }
}

declare namespace Mad.Commun.Services {
    interface IDecisionsUtilsService {
        getLibelleDecision(codeDecision: string, indicAttenteDeleg?: boolean): string;
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
        getLibelleDecision(codeDecision: string, indicAttenteDeleg?: boolean): string;
        getLibelleTypeOperation(codeTypeOperation: string): string;
        getLibelleEtatRecyclage(codeEtatRecylcage: string): string;
        getLibelleOpposition(codeOpposition: string): ng.IPromise<string>;
        getCivilite(codeCivilite: string): ng.IPromise<string>;
        private findLibelleOpposition;
        private findCivilite;
    }
}

declare namespace Mad.Commun.Services {
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
    import infosSpecifiqueEtMad = madRest.InfoSpecifiqueETMad;
    interface IRestToAppCommunService {
        caracteristiqueRestToApp(caracteristiqueRest: madRest.Caracteristique.ICaracteristique): ng.IPromise<Modeles.Application.ICaracteristique>;
        mapInfosEntiteTitulaireRestToApp(infosEntiteRest: infosSpecifiqueEtMad.IInfoSpecifiqueETMad): Modeles.Application.IInformationsEntiteTitulaire;
    }
    class RestToAppCommunService implements IRestToAppCommunService {
        private decisionsUtilsService;
        private donneesDelocService;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        constructor(decisionsUtilsService: IDecisionsUtilsService, donneesDelocService: PdtEntreprise.Services.IDonneesDelocaliseesService);
        caracteristiqueRestToApp(caracteristiqueRest: madRest.Caracteristique.ICaracteristique): ng.IPromise<Modeles.Application.ICaracteristique>;
        private mapperDecisionRestToApp;
        private mapperOperationRestToApp;
        private mapperCourrierRestToApp;
        private mapperInfoDelegationRestToApp;
        private mapperInfoDecideurRestToApp;
        private mapperInfoSepaRestToApp;
        private mapperCommentaireRestToApp;
        mapInfosEntiteTitulaireRestToApp(infosEntiteRest: infosSpecifiqueEtMad.IInfoSpecifiqueETMad): Modeles.Application.IInformationsEntiteTitulaire;
    }
}
