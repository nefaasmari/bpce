
declare module MyWay.Contractualisation {
    var app: any;
}

declare module MyWay.Contractualisation {
    /**
     * La classe Utils propose des fonctions utiles pour l'application.
     * @author S0076222
     */
    class Utils {
        private static CLASS_NAME;
        static formatDateYYMMDD(date: Date): string;
        static formatDateHHMMSS(date: Date): string;
        /**
         * checkContractualisationActeObjet est une méthode permettant de vérifier la bonne alimentation de l'objet ContractualisationActe envoyé par
         * l'application appellante.
         * @params {Ressources.ContractualisationActe.IContractualisationActe}
         * @returns {boolean}
         */
        static checkContractualisationActeObject(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): boolean;
        static checkPanierObject(multiDossiersNumeriques: IMultiDossiersNumeriques): boolean;
        static formatIdentifiantsPersonnes(multiDossiersNumeriques: IMultiDossiersNumeriques): IMultiDossiersNumeriques;
        static formatIdentifiant(personne: ISignataire | ITitulaireDossierNumerique | ISignataireDossierNumerique): void;
        static isMySign(idDossierNumerique: string): boolean;
        /**
         * checkActeRepriseObjet est une méthode permettant de vérifier la bonne alimentation de l'objet ActeReprise envoyé par
         * l'application appellante.
         * @params {IActeReprise}
         * @returns {boolean}
         */
        static checkActeRepriseObjet(acteReprise: IActeReprise): boolean;
        static isOuvertureChargement(codeActeGestionPrincipal: string): boolean;
        static checkDossierNumIsPart(listDossNum: IDossierNumerique[]): boolean;
        static checkDossierNumIsPro(listDossNum: IDossierNumerique[]): boolean;
        static getCodeRoleEtutelle(role: string): boolean;
        static getCodeRoleEtutelleGMP(role: string): boolean;
        static getCodeRoleEtutelleEI(role: string): boolean;
        static isNullOrEmpty(val: string): boolean;
        static parsJson(val: string): any;
        static getValueBeforCheck(val: string): string;
        /**
         *
         * @param codeCivilite
         */
        static getLibelleCiviliteFromCode(codeCivilite: string): string;
        /**
         * tester si une valeur est renseignée
         * @param value
         */
        static testEmpty(value: any[]): boolean;
        /**
         * Déterminer si l'acte de gestion est dans le périmètre d'ETutelle ou non
         * @param codeActeGestion
         */
        static isActeGestionPerimetreETutelle(codeActeGestion: string): boolean;
        static hasSignataireVisaCollaborateur(listeSignataires: Array<Myway.Ressource.ContractualisationActe.ISignataireActe>): boolean;
    }
}

declare module MyWay.Contractualisation {
    class Loggers {
        /**
         * On feature branches :
         * set 'current' version Major.minor.fix-SNAPSHOT
         * to Major.minor.fix.FEATURE_number_id-SNAPSHOT
         * :(
         * Releasing is done manually beacause we are on TFS
         * and can not use node-release yet !
         * @private
         */
        static APP_VERSION: string;
        /**
         * Utilitaire pour les traces.
         * Alimentation de la console : passe les objets dans le flux standard,
         * afin de bénéficier de la représentation interactive en arbre de propriétés depuis la console DEBUG du navigateur.
         * Reçoit un Logger myWay en argument afin d'alimenter également les indexes elasticsearch: alimentation a posteriori
         * via Kibana.
         *
         * @param loggerName nom de la classe appelante, exemple: MyWay.Contractualisation.LivretAService.
         * @param methodeName nom de la méthode souhaitant tracer.
         * @param message le message d'information, contenant les tokens '%o' pour positionner les objets dans le message rendu.
         * @param objects les objets passés dans l'ordre attendu par/avec le message lié
         */
        static info(loggerName: string, methodName: string, message: string, ...objects: any[]): void;
        static warn(loggerName: string, methodName: string, message: string, ...objects: any[]): void;
        static error(loggerName: string, methodName: string, message: string, ...objects: any[]): void;
        private static kibanaLogger(loggerName);
        private static getLogMessage(loggerName, methodName, message);
        static parseAndStringify(message: string, ...objects: any[]): string;
    }
}

declare module MyWay.Contractualisation.Constantes {
    module Popup {
        var BOUTON_FERMER: string;
        var LIBELLE_ERREUR_DEFAULT: string;
        var LIBELLE_HEADER_DETAIL_FLUX: string;
        var LIBELLE_ERREUR_CHARGEMENT: string;
    }
    class CodeRoleSignataire {
        static TITULAIRE: string;
        static REPRESENTANT_LEGAL: string;
        static MANDATAIRE: string;
        static AUTRE: string;
        static VISA_COLLABORATEUR: string;
        static GESTIONNAIRE_MESURE_PROTECTION: string;
        static REPRESENTANT_LEGAL_PRO: string;
    }
    class CodeObjetActe {
        static VISA_COLLABORATEUR: string;
    }
    class CodeErreurMysign {
        static ERREUR_PJI: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le controleur ContractualisationRouteurControleur a pour objectif d'initialiser le service
     * RouteurService.
     * @author S0076222
     */
    class RouteurControleur {
        private routeurService;
        private contractualisationModaleService;
        private static CLASS_NAME;
        static $inject: string[];
        private chargementLong;
        titrePage: string;
        constructor(routeurService: RouteurService, contractualisationModaleService: ContractualisationModaleService);
        init(): ng.IPromise<void>;
        estVisible: boolean;
    }
}

declare module MyWay.Contractualisation {
    /**
     * L'objectif du controleur IdentificationControleur est de gérer l’appel de la directive « IdentificationSignatires ».
     * @author S0076222
     */
    class AlimenterDossierNumeriqueControleur {
        private serviceAgentExtended;
        private contractualisationModaleService;
        private alimenterDossierNumeriqueService;
        private static CLASS_NAME;
        static $inject: string[];
        private chargementLong;
        private titrePage;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, alimenterDossierNumeriqueService: AlimenterDossierNumeriqueService);
        init(): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * L'objectif du controleur CreerClasseurClientControleur .
     * @author S0006664
     */
    class CreationClaCliControleur {
        private creationDossClaCliService;
        private static CLASS_NAME;
        static $inject: string[];
        private chargementLong;
        constructor(creationDossClaCliService: CreationDossClaCliService);
    }
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
    enum ChoixSelectionnerEnum {
        RETENTER_ENVOI_MAILS = 0,
        RETENTER_PLUS_TARD = 1,
        PASSER_EN_SIGNATURE_PAPIER = 2,
    }
    /**
     * EnvoiMailProControleur est le controleur de l'étape envoiMailPro.
     * @author S0076222
     */
    class EnvoiMailProControleur {
        private serviceAgentExtended;
        private envoiMailProService;
        private mwNotificationService;
        private static CLASS_NAME;
        static $inject: string[];
        private chargementLong;
        private titrePage;
        private static TITRE_PAGE_DEFAUT;
        TITRE_PANEL_2: string;
        MESSAGE_PASSER_EN_PAPIER_OBLIGATOIRE: string;
        MESSAGE_ENVOI_MAILS_EN_COURS: string;
        MESSAGE_ERREUR_TECHNIQUE_ENVOI_MAIL: string;
        MESSAGE_NOMBRE_TENTATIVE_ATTEINT: string;
        MESSAGE_SIGNAUTRE_ELECTRONIQUE_INDISPONIBLE: string;
        static MESSAGE_CONFIRMATION_ENVOI_MAILS: string;
        QUITTER_SIGNER_PLUSTARD_MSG_INFO: string;
        PASSER_SINGATURE_PAPIER_MSG_INFO: string;
        RETENTER_IMMEDIATEMENT_ENVOI_MAIL_MSG_INFO: string;
        static ERREUR_DOCENTP_REFERENCE: string;
        static ERREUR_DOCENTP_SHARED_DOCUMENT: string;
        static MAPPING_DOCENTP: string;
        static ERREUR_GED: string;
        static MAPPING_GED: string;
        static ERREUR_ICG: string;
        static MAPPING_ICG: string;
        BOUTTON_RADIO_RETENTER_IMMEDIATEMENT: string;
        BOUTTON_RADIO_QUITTER_SIGNER_PLUS_TARD: string;
        BOUTTON_RADIO_PASSER_SIGNATURE_PAPIER: string;
        private nombreTentative;
        private afficherEcranTentative;
        private enCanalVenteMobilite;
        private forcerPasserPapier;
        private detailsErreur;
        private isLibelleErreur;
        boutonValiderEnvoirMailProTexte: string;
        private static NOMBRE_TENTATIVE_MAX;
        choixSelectionner: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, envoiMailProService: EnvoiMailProService, mwNotificationService: MyWay.UI.IMwNotificationService);
        retenterPlustard(): void;
        retenterEnvoiMails(): void;
        passerEnSignaturePapier(): void;
        valider(): void;
        mapperLibelleErreur(): void;
    }
}

declare module MyWay.Contractualisation {
    class ImprimerDocsArchivesControleur {
        private contractualisationModaleService;
        private imprimerDocsArchivesService;
        private static CLASS_NAME;
        static $inject: string[];
        private chargementLong;
        constructor(contractualisationModaleService: ContractualisationModaleService, imprimerDocsArchivesService: ImprimerDocsArchivesService);
        init(): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    class ListerDossiersNumeriquesControleur {
        private $q;
        private serviceAgentExtended;
        private listDossierNumService;
        private contractualisationModaleService;
        private static CLASS_NAME;
        static $inject: string[];
        etapeActive: number;
        canalEnTete: string;
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        _listDossierEnAttente: Array<Myway.Ressource.DossierVente.Recherche.IDossierVente>;
        _listeParticulierInformation: Array<Myway.Ressource.Tiers.ParticulierInformation.IParticulierInformation>;
        listeDossierNumerique: Array<IDossierNumeriqueDecorateur>;
        listeEtatDossierNum: Array<string>;
        dossiersASigner: Array<IDossierNumerique>;
        dossiersASignerPro: Array<IDossierNumerique>;
        dossiesrParGroupes: Array<ISignatairesPanier>;
        private chargementLong;
        listDossierEnAttenteRegroupables: Array<any>;
        listDossierEnAttenteNonRegroupables: Array<any>;
        listDossierEnAttenteRegroupablesPro: Array<any>;
        listDossierEnAttenteNonRegroupablesPro: Array<any>;
        configTuiles: MyWay.UI.iMwConfigTuile;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, listDossierNumService: ListerDossiersNumeriquesService, contractualisationModaleService: ContractualisationModaleService);
        init(): void;
        /**
         *  Implementation de MyWay.UI.ITuileHandler
         */
        onTuileClick(dossier: any): void;
        onAction1(objetTuile: any): void;
        onAction2(objetTuile: any): void;
        onAction3(objetTuile: any): void;
        onAction4(objetTuile: any): void;
        onClickLeft(objetTuile: Object, listeObjetTuile: Object[]): void;
        onClickRight(objetTuile: Object, listeObjetTuile: Object[]): void;
        constructTuilesDossier(listeDossierNumerique: Array<IDossierNumeriqueDecorateur>): void;
        /**
         * La méthode signerDossiersNum compose un un multiDossierNumerique afin d'appeler la méthode
         * nextEtape qui se chargera de le metre dans le contexte et d'aller plus loin dans le process de signature.
         *
         * @returns {void}
         */
        signerDossiersNum(): void;
        signerDossiersNumPro(): void;
        /**
         * La méthode signerDossiersNumExclusif compose un un multiDossierNumerique afin d'appeler la méthode
         * nextEtape qui se chargera de le metre dans le contexte et d'aller plus loin dans le process de signature.
         *
         * @returns {void}
         */
        signerDossierNumExclusifPros(listTuile: Array<any>): void;
        signerDossierNumExclusifPart(listTuile: Array<any>): void;
        createMultiDossToSign(dossiers: IDossierNumerique[]): IMultiDossiersNumeriques;
        groupeSuivant(): void;
        groupePrecedent(): void;
        affichageTitulaireTuile(dossier: IDossierNumerique): string;
        affichageSignataireTuile(dossier: IDossierNumerique): string;
        affichageIdentifiantDossierVenteTuile(dossier: IDossierNumerique): string;
        erreurContext(message: string): void;
        popupInfo(message: string): void;
        exitEtape(): void;
        dontDisplayBouttonSigner(list: Array<any>): boolean;
        displayBouttonSigner(listExctAndMulti: Array<any>): boolean;
    }
}

declare module MyWay.Contractualisation {
    /**
     * L'objectif du controleur RemiseCGControleur est de gérer l’appel de la directive « remise CG ».
     * @author S0076222
     */
    class RemiseCGControleur {
        private $scope;
        private contractualisationModaleService;
        private remiseCGService;
        private static CLASS_NAME;
        static $inject: string[];
        /**
         * Paramètres de Directive RemiseCG
         */
        private remiseCGDirectiveShow;
        idPersonne: string;
        donneesRemiseCG: myway.comEditiqueNumerisation.Modeles.IRemiseCG;
        /**
         * Paramètres de bouton 'Valider' dans l'étape RemiseCG
         */
        private static TEXT_CONTINUER;
        private boutonValiderRemiseCGEnable;
        private boutonValiderRemiseCGTexte;
        /**
         *  La propriété chargementLong contrôle l'affichage de bloc de chargement
         */
        private chargementLong;
        titrePage: string;
        constructor($scope: ng.IScope, contractualisationModaleService: ContractualisationModaleService, remiseCGService: RemiseCGService);
        initialiserEtapeRemiseCG(): void;
        validerRemiseCG(): void;
        gererEvenementsDirectiveRemiseCG(): void;
    }
}

declare module MyWay.Contractualisation {
    interface ITableauRecapitulatifContratsSignesData {
        contrat: string;
        detenuPar: string;
    }
    interface ITableauRecapitulatifContratsSignesDataOPC {
        operation: string;
        titulaire: string;
        signataire: string;
    }
    class RemiseDocsSignesControleur {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private remiseDocsSignesService;
        private static CLASS_NAME;
        static $inject: string[];
        private chargementLong;
        private isOpenPanneauRetractable;
        isBouttonTerminerActive: boolean;
        isSagOpc: boolean;
        isHotSign: boolean;
        private isInitialise;
        impressionDocsSignes: boolean;
        tableauRecapitulatifContratsSignes: MyWay.UI.ImwTableOptions;
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, remiseDocsSignesService: RemiseDocsSignesService);
        init(): void;
        construireTableauRecaputitlatifContratsSignes(multiDossiersNumeriques: IMultiDossiersNumeriques): MyWay.UI.ImwTableOptions;
        construireTableauRecaputitlatifContratsSignesDatas(multiDossiersNumeriques: IMultiDossiersNumeriques): Array<ITableauRecapitulatifContratsSignesData>;
        getDetenusPar(titulaires: Array<ITitulaireDossierNumerique>): string;
        construireTableauRecaputitlatifContratsSignesOPC(multiDossiersNumeriques: IMultiDossiersNumeriques): MyWay.UI.ImwTableOptions;
        construireTableauRecaputitlatifContratsSignesDatasOPC(multiDossiersNumeriques: IMultiDossiersNumeriques): Array<ITableauRecapitulatifContratsSignesDataOPC>;
        getDetenusParOPC(titulaires: Array<ITitulaireDossierNumerique>): string;
        getSigneParOPC(signataires: Array<ISignataireDossierNumerique>): string;
        mettreAJourAdresseEmail(): void;
        getMessageCFN(signataire: ISignataireDossierNumerique): string;
        onCheckMail(index: number): void;
        isEnvoiEmail(): boolean;
        onCheckImpression(): void;
        remiseDocumentsSignesViaAdresseMailPerso(): ng.IPromise<boolean>;
        imprimerDocumentsSignes(): ng.IPromise<boolean>;
        terminerAction(): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    class SignerDocumentsElecControleur {
        private $scope;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private signerDocumentsElecService;
        private static CLASS_NAME;
        static $inject: string[];
        etapeActive: number;
        titrePage: string;
        private isNotificationIcgPending;
        private contratsContexte;
        private chargementLong;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, signerDocumentsElecService: SignerDocumentsElecService);
        signerDocuments(): void;
        getTitrePage(multiDossiersNumeriques: IMultiDossiersNumeriques): string;
        private isSagOpc();
    }
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    interface IActeReprise {
        codeActeGestion: string;
        codeCanal: string;
        numeroEntiteTitulaire: string;
        codeTypeMarcheEntreprise: string;
        codeModeMiseEnGestion: string;
        indicateurPapier?: boolean;
        indicateurDossierIDNExistant?: boolean;
        referenceOffre: string;
        referenceContrat: string;
        referenceContratCarte?: string;
        referenceActeProducteur?: string;
        codeTypeProduit: string;
        identifiantActeIDN: string;
        listeActeSecondaires: Array<string>;
        listeSignataires: Array<myway.comContract.modeles.ISignataire>;
        listeTitulairesActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>;
        libelleActe: string;
        codeGuichet?: string;
        identifiantAgent?: string;
        referenceEDSExterneClient: string;
        referenceEDSInterneClient: string;
        nbPersonneEntiteTitulaire: number;
        acteGestionCompteSupport: string;
        codeEntite?: string;
        numeroOffreVMC?: string;
        typeProfessionnel?: string;
        identifiantActeExterne?: string;
        /**
         * Identifiant Porteur carte (pour les professionnel)
         */
        identifiantPorteurCarte?: string;
        contratExterne?: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    interface IChargementLong {
        etat: number;
        visible: boolean;
        text?: string;
        promise?: ng.IPromise<boolean>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'application Contractualisation.
     * @author S0076222
     */
    class ContractualisationConstants {
        static CONTRACTULISATION_ACTE_KEY_CONTEXT: string;
        static MULTI_DOSSIERS_NUMERIQUES_KEY_CONTEXT: string;
        static ID_DOSSIER_NUMERIQUE_KEY_CONTEXT: string;
        static IDENTIFIANT_PERSONNE_KEY_CONTEXT: string;
        static MULTI_DOSSIERS_NUMERIQUES_OUT_KEY_CONTEXT: string;
        static IS_APPELER_CONNAISSANCE_CLIENT: string;
        static IS_BULLE_CONFIANCE: string;
        static IDENTIFIANT_PERSONNE: string;
        static DOSSIER_NUMERIQUE_KEY_CONTEXT: string;
        static ACTE_REPRISE_KEY_CONTEXT: string;
        static LISTE_DOSSIER_CC_KEY_CONTEXT: string;
        static MODE_KEY_CONTEXT: string;
        static URL_SIGNATURE_KEY_CONTEXT: string;
        static IDENTIFIANT_ECRAN_SIGNATURE_KEY_CONTEXT: string;
        static MODE_SIGNATURE_KEY_CONTEXT: string;
        static IDENTIFIANT_ACTE_EXT_KEY_CONTEXT: string;
        static CODE_MODE_MISE_EN_GESTION_KEY_CONTEXT: string;
        static HUBMAIL_KEY_CONTEXT: string;
        static CODE_CANAL_KEY_CONTEXT: string;
        static CODE_CANAL: string;
        static CODE_ENTITE_KEY_CONTEXT: string;
        static ID_IDN_KEY_CONTEXT: string;
        static LIBELLE_ACTE_KEY_CONTEXT: string;
        static TYPE_PROFESSIONNEL_KEY_CONTEXT: string;
        static MODE_IMPR_IDN_KEY_CONTEXT: string;
        static MODE_PREV_IDN_KEY_CONTEXT: string;
        static POINT_ENTREE_IDN_KEY_CONTEXT: string;
        static ID_MAT_KEY_CONTEXT: string;
        static CAISSE_KEY_CONTEXT: string;
        static AGENT_KEY_CONTEXT: string;
        static MODE_ENVOI_KEY_CONTEXT: string;
        static REMISE_PAPIER_KEY_CONTEXT: string;
        static INDICATEUR_IMPRESSION_KEY_CONTEXT: string;
        static ENVOI_MAIL_KEY_CONTEXT: string;
        static ADRESSE_MAIL_KEY_CONTEXT: string;
        static ID_TRANSACTION_ICG_KEY_CONTEXT: string;
        static APPEL_IHM_ACQ_CLACLI: string;
        static APPEL_IHM_SEMD: string;
        static CONTEXTE_GGO: string;
        static CODE_REMISE_CG_MSI: string;
        static IDNT_PERS: string;
        static IDNT_ETAB: string;
        static LIST_IDNT_DOSS: string;
        static CODE_APPLICATION_CONTELEC: string;
        static CODE_GUICHET_A_BLANC: string;
        static QUITTER_ETAPE_LIBELLE: string;
        static RETOUR_ETAPE_LIBELLE: string;
        static MEDIAS_SIGNATAIRES_PRO: string;
        static DESIGNATION_PERSONNE: string;
        static CODE_ETABLISSEMENT_KEY_CONTEXT: string;
        static MODE_SIGNIDN_KEY_CONTEXT: string;
        static MODE_SIGNIDN_QUITTER: string;
        static MODE_SIGNIDN_IMPR: string;
        static MODE_SIGNIDN_VADPAPHUB: string;
        static SAGOPC: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    interface IContractualisationContexteModele {
        authenficationInfo?: MyWay.Services.Context.AuthentificationInfo;
        modeSignature?: string;
        contractualisationActe?: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        idIDN?: string;
        idMat?: string;
        caisse?: string;
        agent?: string;
    }
    interface IContractualisationContexteManager {
        contratsContexte: IContractualisationContexteModele;
        init(): ng.IPromise<void>;
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * ContractualisationEvents présente les évenements utilisés pour communiquer avec le composant Identifications signataires.
     * @author S0076222
     */
    class FinProcessIdenSignProperties {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        modeSignature: string;
        constructor(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les messages erreur que l'application Contractualisation peut retourner.
     * @author S0076222
     */
    class ContractualisationMessageErreur {
        static PB_GET_CONTRACTUALISATION_ACTE_FROM_CONTEXT: string;
        static PB_GET_ACTE_REPRISE_FROM_CONTEXT: string;
        static PB_ADD_CONTRACTUALISATION_ACTE_TO_CONTEXT: string;
        static PB_ADD_PANIER_TO_CONTEXT: string;
        static PB_CONTEXT: string;
        static CODE_ACTE_GESTION_UNDEFINED: string;
        static ID_IDN_UNDEFINED: string;
        static ERREUR_TECHNIQUE: string;
        static CODE_CANAL_UNDEFINED: string;
        static CODE_ENTITE_UNDEFINED: string;
        static INDICATEUR_PAPIER_UNDEFINED: string;
        static CODE_ETABLISSEMENT_FINANACIER_UNDEFINED: string;
        static ACTE_GESTION_UNDEFINED: string;
        static NOMBRE_SIGNATAIRES_ACTE_VIDE: string;
        static PB_CANAL_NUM: string;
        static PB_CONTEXT_ETAPE: string;
        static PB_CONTEXT_ETAPE_REMISE_DOCS_SIGNES: string;
        static PB_CONTEXT_ETAPE_IMPRESSION_DOCS_ARCHIVES: string;
        static PB_CONTEXT_ETAPE_CREATION_DOSSIER_CLASSEUR_CLIENT: string;
        static PB_DOSSIER_NUMERIQUE: string;
        static PB_DOSSIER_NUMERIQUE_MOBILITE: string;
        static PB_TEMO_SEMD: string;
        static PB_CONTEXT_VALEUR_ENTREE_1: string;
        static PB_CONTEXT_VALEUR_ENTREE_2: string;
        static PB_CONTEXT_VALEUR_ENTREE_3: string;
        static PB_CONTEXT_AUTHENTIFICATION_INFO: string;
        static PB_CONTEXT_VALEUR_ENTREE: string;
        static PB_HUBMAIL_ENTREE: string;
        messageErreur: string;
        private messageComplementaire;
        private action;
        private erreurMyWay;
        private classeTypeScript;
        /**
         * @constructor
         */
        constructor(messageErreur: string, action: string, classe?: string, erreurMyWay?: MyWay.Services.Erreur, messageComplementaire?: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0006664
     */
    interface IDonneesSignerContrat {
        modeSignature: string;
        autresDestinataire: IAgent[];
        signataireMail: IAgent[];
        listeClientsSignataires: IClientSignataireAuthentification[];
        typeClient: string;
    }
    interface IAgent {
        identifiantElementStructure: number;
        identifiantAgent: string;
        libelleElementStructure: string;
        adresseMail: string;
        typeAgent: string;
    }
    interface IClientSignataireAuthentification extends myway.comContract.modeles.ISignataireComplet {
        moyenAuthentification: IMoyenAuth;
        numeroTelephone: string;
        email: string;
        dataAuthentification: IDataClientSigantaireAuth;
        idUsager: string;
    }
    interface IDataClientSigantaireAuth {
        listeMoyenAuthentification: IMoyenAuth[];
        listeNumeroTelephone: string[];
        listeEmail: string[];
    }
    interface IMoyenAuth {
        codeMoyAuth: number;
        libelle: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0079240
     * isLivretA: boolean
     * listeActeSecondaires: Array<string>
     */
    interface ILivretA {
        isLivretA: boolean;
        listeActeSecondaires: Array<string>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * le titulaire de compte est le signataire !!
     * @author S0006664
     */
    interface IMediasSignatairesPro {
        titulaireCompte: ITitulaireCompte;
        modeSignatureDefaut: string;
        listeSignataires: Array<ISignataireSimplifie>;
        codeCanal: string;
        presenceSignatairePersProt?: boolean;
        numeroPersonneProtegee?: number;
    }
    interface ITitulaireCompte {
        numeroPersonne: number;
        identifiantClientBad: string;
        designation: string;
        typeClient: string;
    }
    interface ISignataireSimplifie {
        numeroPersonne: number;
        nomFamille: string;
        prenom: string;
        nomUsage: string;
        civilite: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0006664
     */
    interface IMessageNotifierRetourSignatureModel {
        status: string;
        txid: string;
        aid: string;
        code: string;
    }
}

declare module MyWay.Contractualisation {
    class MultiDossierNumeriqueFactory {
        private static CLASS_NAME;
        constructor();
        static createFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature: string, codeApplication: string): IMultiDossiersNumeriques;
        static createFromActeReprise(acteReprise: IActeReprise, modeSignature: string, codeApplication: string): IMultiDossiersNumeriques;
        private static getListeSignataireSEMDFromContractualisationActe(contractualisationActe);
        private static getListeSignataireSEMDFromActeReprise(acteReprise);
        private static getCodeRole(signataire);
        private static getListeSignataireDossierNumeriqueFromContractualisationActe(contractualisationActe);
        private static getListeSignataireDossierNumeriqueFromActeReprise(acteReprise);
        private static getListeTitulaireDossierNumeriqueFromContractualisationActe(contractualisationActe);
        private static getListeTitulaireDossierNumeriqueFromActeReprise(acteReprise);
        private static getPrenomTitulaire(contractualisationActe, titulaire);
        private static getNomTitulaire(contractualisationActe, titulaire);
        private static findSignataire(contractualisationActe, titulaire);
        private static getCodeRemiseCG(contractualisationActe);
        static creatDossierNumeriqueFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): IDossierNumerique;
        static creatDossierNumeriqueFromActeReprise(acteReprise: IActeReprise): IDossierNumerique;
        /**
         * Mettre a jour les codes roles pour listeSignataire (IDossierNumerique) et listeSignataires (IMultiDossiersNumeriques)
         * @param multiDossierNumerique
         */
        static majDosNumCodeRole(multiDossierNumerique: IMultiDossiersNumeriques): IMultiDossiersNumeriques;
        /**
         * Le codeRoleSignataire est sensé être alimenté avec les valeurs (ex: G) et non par le code (ex: 11).
         * @return si présence d'un signataire PART personne protégée ET d'un signataire PRO --> true
         * @param multiDossierNumerique
         */
        static createPresenceSignatairePersProt(multiDossierNumerique: IMultiDossiersNumeriques): boolean;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0006664
     */
    interface IMultiDossiersNumeriques {
        codeCanal: string;
        codeApplication: string;
        listeDossiersNumeriques: Array<IDossierNumerique>;
        listeSignataires: Array<ISignataire>;
        listeMateriels?: Array<Myway.Ressource.ContractualisationActe.IMateriel>;
        etatSignature: string;
        modeSignature: string;
        idTransactionIcg: string;
        isDeployeMySign?: boolean;
        isDeployeBulleConfiance?: boolean;
        isDernier?: boolean;
        /**
         * Code du Processus Metier
         */
        codeProcessusMetier?: string;
        isVisaCollaborateur?: boolean
    }
    interface IDossierNumerique {
        libelleActe: string;
        codeActeGestion: string;
        codeGuichet: string;
        listeActesSecondaires: Array<string>;
        codeRemiseCG: string;
        referenceOffre: string;
        referenceContratCarte: string;
        referenceContrat: string;
        referenceActeProducteur: string;
        identifiantPorteurCarte: string;
        nbPersonneEntiteTitulaire: number;
        codeTypeProduit: string;
        identifiantDossierVente: string;
        identifiantAgent: string;
        numeroEntiteTitulaire: string;
        referenceEDSInterneClient: string;
        referenceEDSExterneClient: string;
        acteGestionCompteSupport: string;
        identifiantDossierNumerique: string;
        listeTitulaire: Array<ITitulaireDossierNumerique>;
        listeSignataire: Array<ISignataireDossierNumerique>;
        listeDocumentsAProduire: Array<Myway.Ressource.ContractualisationActe.IDocumentAProduire>;
        codeModeMiseEnGestion: string;
        codeTypeMarcheEntreprise: string;
        typeProfessionnel: string;
        listeDossierClasseurClient?: Array<string>;
        isEligibleRegroupement?: boolean;
        contratExterne?: string;
        etatDossier?: string;
    }
    interface ISignataire {
        identifiant: string;
        nom: string;
        prenom: string;
        civilite: string;
        adresseMail: string;
        codeRoleSignataire?: string;
        identifiantPersonneEnLien?: string;
    }
    interface ITitulaireDossierNumerique {
        identifiant: string;
        nom: string;
        prenom: string;
        civilite: string;
        adresseMail: string;
        designation?: string;
    }
    interface ISignataireDossierNumerique {
        identifiant: string;
        nom: string;
        prenom: string;
        civilite: string;
        adresseMail: string;
        isDocsSignesEnvoyesSurMSI?: boolean;
        isCFNActif?: boolean;
        designation?: string;
        isChecked?: boolean;
        identifiantPersonneEnLien?: string;
        codeRoleSignataire?: string;
    }
    interface ISignatairesPanier {
        groupe: string;
        dossiers: Array<IDossierNumeriqueDecorateur>;
        position: number;
    }
    interface IDossierNumeriqueDecorateur extends IDossierNumerique {
        identifiantProduitServiceCompo?: Array<string>;
        donneeData?: string;
    }
    interface IRegleSignatireOUTPUT {
        codeActeGestion: string;
        isEligibleRegroupement: boolean;
    }
    interface SpaContractInput {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        multiDossiersNumeriques: IMultiDossiersNumeriques,
        nextStep?: string
    }
}

declare module MyWay.Contractualisation {
    /**
     *
     */
    interface IDataClasseurClient {
        acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion;
        listeNumerosDossiers: string[];
    }
}

declare module MyWay.Contractualisation.Modeles.Application {
    /**
     * Modèle de l'objet à passer en paramètre au service d'ouverture d'une fenêtre modale complexe
     */
    interface IPopupData<T> {
        closeButtonText: string;
        actionButtonText: string;
        headerText: string;
        iconName: string;
        bodyText: string;
        model?: T;
    }
}

declare module MyWay.Contractualisation {
    class SedConstantes {
        static urlAnnulation: string;
    }
}

declare module MyWay.Contractualisation.Services.Application {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupService {
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
        showModal(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * La classe RouteurContexteModele présente les contrats d'entrées de l'étape LISA Routeur.
     * @author S0076222
     */
    class RouteurContexteModele implements IContractualisationContexteModele {
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        mode: number;
        idIDN: string;
        codeCanal: string;
        codeEntite: string;
        modeSignature: string;
        acteReprise: MyWay.Contractualisation.IActeReprise;
        valeurEntree: LisaValeurEntreeEtapeRouteurEnum;
        identifiantActeExterne: string;
        codeModeMiseEnGestion: string;
        typeProfessionnel: string;
        identifiantPersonne: number;
        designationPersonne: string;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, valeurEntree: LisaValeurEntreeEtapeRouteurEnum, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, mode: number, idIDN: string, codeCanal: string, modeSignature: string, acteReprise: MyWay.Contractualisation.IActeReprise, codeEntite: string, typeProfessionnel: string, identifiantActeExterne?: string, codeModeMiseEnGestion?: string, identifiantPersonne?: number, designationPersonne?: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * La Classe RouteurContexteService a pour objectif d'initialiser l'étape Routeur.
     * Elle récupére les contrats d'entrées: l'objet contractualisationActe et le mode,
     * @author S0076222
     */
    class RouteurContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: RouteurContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape routeur.
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT"
         * si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape routeur en
         * fonction de la valeur d'entrée.
         * Valeur d'entrée == 1, les contrats d'entrées sont : l'objet ContractualisationActe
         * Valeur d'entrée == 2, les contrats d'entrées sont : IdIDN, ModeSignature, CodeCanal, Mode, CodeEntite,
         * identifantActeExterne, ModeMiseEnGestion
         * Valeur d'entrée == 3, les contrats d'entrées sont : l'objet ActeReprise
         * @param valeurEntreeEtapeRouteur
         */
        private getDonneesContexte(valeurEntreeEtapeRouteur);
        /**
         * checkContractualisationActeObjet est une méthode permettant de vérifier la bonne
         * alimentation de l'objet ContractualisationActe envoyé par
         * l'application appelante.
         * @params {MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe}
         * @returns {boolean}
         */
        private checkContractualisationActeObjet(contractualisationActe);
        /**
         * checkActeRepriseObjet est une méthode permettant de vérifier la bonne alimentation de l'objet ActeReprise envoyé par
         * l'application appelante.
         * @params {MyWay.Contractualisation.IActeReprise}
         * @returns {boolean}
         */
        private checkActeRepriseObjet(acteReprise);
        /**
         * mettreAJourContractualisationActeObjet permet d'alimenter les propriétés codeGuichet, identifiantAgence,
         * identifiantAgent et codeEntite de l'objet
         * ContractualisationActe depuis les objets authentificationInfo et parametreComptable.
         * @params {MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe}
         * @returns  {MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe}
         */
        private mettreAJourContractualisationActeObjet(contractualisationActe);
        /**
         * mettreAJourActeRepriseObjet permet d'alimenter les propriétés codeGuichet, identifiantAgence,
         * identifiantAgent de l'objet
         * ActeReprise depuis les objets authentificationInfo et parametreComptable.
         * @params {MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe}
         * @returns  {MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe}
         */
        private mettreAJourActeRepriseObjet(acteReprise);
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
        /**
         *
         * @param codeCanal
         * @param modeSignature
         * Règles (Defect ALM-QC 9552):
         *  - Si codeCanal=FF, ModePrevIDN=FAFPAPPE
         *  - Si codeCanal != (FF ou TL), ModePrevIDN=VADPAPPE
         *  - Si codeCanal=TL et ModeSignature !=E, ModePrevIDN=VADPAPPE
         *  - Si codeCanal=TL et ModeSignature=E, ModePrevIDN=VADEAPPE
         */
        private getModePrevisualisationIDN(codeCanal, modeSignature);
        /**
         * La méthode getPointEntreeIDN permettant de déterminer le pointEntreeIDN
         * en fonction du codeCanal passé en entrée
         * @param codeCanal
         */
        private getPointEntreeIDN(codeCanal);
        addIdMaterielToContexte(): ng.IPromise<void>;
        /**
         * La méthode getIdMateriel a pour objectif de retourner l'identifiant(Code modéle)  du matériel de type TABLETTE_SIGNATURE.
         * @params {MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe}
         * @returns {string}
         */
        private getIdMateriel(contractualisationActe);
    }
}

declare module MyWay.Contractualisation {
    /**
     * ContractualisationRouteurService est un service angularJs responsable de l'enchainement LISA
     * en fonction du mode envoyé par l'application appelante.
     * @author S0076222
     */
    class RouteurService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private routeurContexteService;
        private dossierContratService;
        private contractualisationActeService;
        private hubmailService;
        private static CLASS_NAME;
        static $inject: string[];
        _chargementLong: boolean;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, routeurContexteService: RouteurContexteService, dossierContratService: DossierContratService, contractualisationActeService: myway.comContract.Services.ContractualisationActeService, hubmailService: HubmailService);
        init(): ng.IPromise<string>;
        /**
         * La méthode dispatcher réalise l'enchainement LISA en fonction du contrat d'entrée "Mode" envoyé
         * par l'application appelante.
         * @params
         * @returns void
         */
        dispatcher(): void;
        /**
         * La méthode executerModeNumeroUN permet d'executer le mode numéro 1 du processus Contractualisation.
         * @params
         * @returns void
         */
        private executerModeUN();
        /**
         * La méthode executerModeActeReprise permet d'executer le mode Contractualisation reprise.
         * @params
         * @returns void
         */
        private executerModeActeReprise();
        private getActeFromActeReprise(acteReprise);
        /**
         * La méthode executerModeActeReprise permet d'executer les modes Vente à distance Contractualisation.
         * @params
         * @returns void
         */
        private executerModesVAD();
        /**
         * La méthode executerModeEchec permet d'executer le mode d'échec.
         * @params
         * @returns void
         */
        executerModeEchec(): void;
        estVisible: boolean;
        /**
         * Permet de construire un objet pour débrancher vers SmartNum dans le cadre de Visa Collaborateur
         * @param contractualisationActe
         * @returns SmartNum.IAcquisitionEntree ou null si aucun document à produire n'est disponible
         */
        private construireContratVersSmartNum(contractualisationActe);
    }
}

declare module MyWay.Contractualisation {
    /**
     * LivretAService est un service angularJs permettant de vérifier si l'on est dans le cas d'un livretA
     * returns isLivretA et la listeActeSecondaires transcodés DO à la place OU
     * @author S0076222
     */
    class LivretAService {
        private static CLASS_NAME;
        static $inject: string[];
        /**
         * getLivretA vérifie si l'on est dans le cas d'un livret A
         * @returns { isLivretA: boolean, listeActeSecondaires: Array<string> }
         * listeActeSecondaires : les Ouvertures livretA deviennent des Demandes d'Ouverture livretA
         */
        getDonneesLivretA(codeActeGestion: string, listeActesSecondaires: Array<string>): ILivretA;
        /**
         * Utilisé par le dossier numérique, l'acte de gestion ou de reprise.
         * @param codeActeGestion
         * @param listeActesSecondaires
         * @return true si l'acte de gestion principal est une Demande d'Ouverture,
         * et que nous trouvons parmi les actes secondaires les actes d'Cuverture de livretA
         */
        isLivretA(codeActeGestion: string, listeActesSecondaires: Array<string>): boolean;
        private isDemandeOuverture(codeActeGestion);
        private findOuverturesLivretA(listeActesSecondaires);
        private isOuvertureLivretA(codeActe);
    }
}

declare module MyWay.Contractualisation {
    class ImpressionService {
        private $q;
        private routeurContexteService;
        private alerteImpressionService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, routeurContexteService: RouteurContexteService, alerteImpressionService: AlerteImpressionService);
        /**
         * Permet l'impression papier avec le contôle entité
         * @constructor
         * @returns void
         */
        impression(): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation.ImpressionLot {
    /**
     * @author S0076222
     */
    class DocumentImpressionLotFactory {
        private static DOCUMENT_BPJI;
        private static DOCUMENT_NOTE_BALE2;
        private static DOCUMENT_INTERO_BDF;
        /**
         *
         * @param documentAProduire
         */
        createDocumentImpressionLotFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): MyWay.Services.Impression.DocumentImpressionLot;
        /**
         *
         * @param documentsAImprimer
         */
        getDocumentsImpressionLot(documentsAImprimer: Array<Myway.Ressource.DossierNumerique.IDocumentAImprimer>): Array<MyWay.Services.Impression.DocumentImpressionLot>;
        /**
         *
         * @param documentsAImprimer
         */
        getDocumentsImpressionLotMySign(documentsAImprimer: Array<Myway.Ressource.DossierNumerique.V3.IDocument>): Array<MyWay.Services.Impression.DocumentImpressionLot>;
        /**
         *
         * @param documentsAImprimer
         */
        getDocumentsSignesImpressionLotMySign(documentsAImprimer: Array<Myway.Ressource.DossierNumerique.V3.IDocument>): Array<MyWay.Services.Impression.DocumentImpressionLot>;
        /**
         *
         * @param documentAImprimer
         */
        createDocumentImpressionLotFromDocumentAImprimer(documentAImprimer: Myway.Ressource.DossierNumerique.IDocumentAImprimer): MyWay.Services.Impression.DocumentImpressionLot;
        /**
         *
         * @param documentAImprimer
         * @param documentElectroniqueBinaire
         */
        createDocumentImpressionLotFromDocumentAImprimerMySign(documentAImprimer: Myway.Ressource.DossierNumerique.V3.IDocument, documentElectroniqueBinaire: any, identifiantFilenet: string): MyWay.Services.Impression.DocumentImpressionLot;
        /**
         *
         * @param documentAImprimer
         */
        private getImpressionParamsFromDocumentAImprimer(documentAImprimer);
        /**
         *
         * @param documentAImprimer
         */
        private getImpressionParamsFromDocumentAImprimerMySign(documentAImprimer);
        /**
         *
         * @param documentAProduire
         */
        private getImpressionParamsFromDocumentAProduire(documentAProduire);
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ActeGestionArcade {
        static DEFAUT: string;
        static LIVRET_A: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class AppelIhmSEMD {
        static ACTIVE: string;
        static DESACTIVE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeApplication {
        static MYWAY: string;
        static CONTELEC: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeCanalVente {
        static FACE_A_FACE: string;
        static TELEPHONIQUE: string;
        static INTERNET: string;
        static MOBILITE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeModeMiseEnGestion {
        static MEGI: string;
        static VPC: string;
        static C: string;
        static ALL: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0006664
     */
    class CodeProcessusMetier {
        static DOCS_PERSONNE: string;
        static SAGOPC: string;
        static HOT_SIGN: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeRegleCollecte {
        static POP_IN: string;
        static FORCAGE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeTypeAttributaire {
        static CONTRAT: string;
        static PERSONNE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeTypeReferenceExterne {
        static DOSSIER_VENTE: string;
        static COMPTE_SUPPORT_CONTRAT: string;
        static CONTRAT_CARTE: string;
        static CONTRAT_EXTERNE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0006664
     */
    class EtatSignaturePanier {
        static ENCOURS: string;
        static SIGNEE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    interface IPropriete {
        newValue: boolean;
    }
    class Event {
        private topic;
        private proprietes;
        constructor(topic: string, proprietes: Array<IPropriete>);
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class HubmailDisponible {
        static OUI: string;
        static NON: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class IconModale {
        static ITCE_WARNING: string;
        static ITCE_INFO: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class IndicateurImpression {
        static OK: string;
        static KO: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    enum LisaValeurEntreeEtapeRouteurEnum {
        CONTRACTUALISATION = 1,
        CONTRACTUALISATION_VAD = 2,
        CONTRACTUALISATION_MODE_REPRISE = 3,
    }
    enum LisaValeurEntreeEtapeRemiseCGEnum {
        CONTRACTUALISATION = 1,
        CONTRACTUALISATION_MODE_REPRISE = 2,
        CONTRACTUALISATION_SEMD = 3,
    }
    enum LisaCodeSortieEtapeRouteurEnum {
        CODE_LISA_ALIM_DOSS_NUMQ = 11,
        CODE_LISA_IDENTIFICATION_SIGNATAIRES = 11,
        CODE_LISA_REMISE_CG = 12,
        CODE_LISA_CRR_DOSS_CLSS_CLNT = 23,
        CODE_LISA_ENVOI_MAIL_SED_IDN = 20,
        CODE_LISA_ENVR_MAIL_SIGN_PRO = 21,
        CODE_LISA_IMPRESSION_CONTRACT = 30,
        CODE_LISA_SIGN_IDN = 31,
        CODE_LISA_ACQR_RECN_LIRE_DOCM = 34,
        CODE_LISA_IMPRESSION_IDN = 40,
        CODE_LISA_ANNULATION = 50,
        CODE_LISA_PREVISUALISATION = 60,
        CODE_LISA_IMPRESSION_IDN_ALERTE = 2,
        CODE_LISA_ENVR_MAIL_SIGN_ELCT = 18,
        CODE_LISA_IMPR_DOCM_ARCH = 19,
        CODE_LISA_PREV_DOCM_DOSS_SIGN = 22,
        CODE_LISA_IDN_SIGNATURE = 13,
        CODE_LISA_REMISE_CG_MODE_REPRISE = 14,
        CODE_LISA_ENVOI_MAIL_PRO = 15,
        CODE_LISA_SIGN_MULT_DOSS_TMTS = 16,
        CODE_LISA_FINL_PANR_EN_ETAT = 24,
    }
    enum LisaCodeSortieEtapeAlimentationDossierNumEnum {
        CODE_LISA_IDN_SIGNATURE = 1,
        CODE_LISA_REMS_CG = 2,
        CODE_LISA_ENVOI_MAIL_PRO = 3,
        CODE_LISA_RETOUR_APPELLANT = 4,
        CODE_LISA_SIGN_MULT_DOSS_TMTS = 5,
        CODE_LISA_IMPR_DOCM_ARCH = 7,
    }
    enum LisaCodeSortieEtapeEnvoiMailProEnum {
        CODE_LISA_REMISE_CG = 1,
        CODE_LISA_PROCESS_APPELANT = 2,
    }
    enum LisaCodeEntreeEtapeRemiseCGEnum {
        CONTRACTUALISATION = 1,
        CONTRACTUALISATION_MODE_REPRISE = 2,
        CONTRACTUALISATION_SEMD = 3,
    }
    enum LisaCodeSortieEtapeRemiseCGEnum {
        CODE_LISA_IDN_IMPRESSION = 1,
        CODE_LISA_CRR_DOSS_CLSS = 2,
        CODE_LISA_IMPR_DOCM_ARCH = 4,
        CODE_LISA_CRR_DOSS_CLSS_CLNT = 5,
    }
    enum LisaValeurEntreeEtapeAnnulationEnum {
        CODE_LISA_IDN_IMPRESSION = 1,
        CONTRACTUALISATION = 50,
    }
    enum LisaCodeSortieEtapeAnnulationEnum {
        CODE_LISA_SIGN_IDN = 3,
        CODE_LISA_IDN_IMPRESSION = 2,
        CODE_LISA_SORTIE_PROCESSUS = 1,
    }
    enum LisaCodeSortieEtapeConfirmationEnum {
        CODE_LISA_IDN_IMPRESSION = 2,
        CODE_LISA_SORTIE_PROCESSUS = 1,
    }
    enum LisaCodeEntreeEtapeClaCliPapierEnum {
        CONTRACTUALISATION = 1,
        CONTRACTUALISATION_MODE_REPRISE = 2,
    }
    enum LisaCodeSortieClaCliPapierEnum {
        CODE_LISA_IDN_SIGNATURE = 1,
        CODE_LISA_REMISE_CG = 2,
    }
    enum LisaCodeSortieEtapeVisualiserPanierEnum {
        CODE_LISA_MODE_ECHEC = -1,
        CODE_LISA_SORTIE = 11,
        CODE_LISA_SIGN_MULT_DOSS = 1,
        CODE_LISA_SIGN_MULT_DOSS_SED = 2,
        CODE_LISA_SIGN_MULT_DOSS_PRO = 3,
        CODE_LISA_SIGN_M_DOSS_PRTG_SED = 4,
    }
    enum LisaCodeSortieEtapeSignerdocsElecEnum {
        CODE_LISA_MODE_ECHEC = -1,
        CODE_LISA_REMT_DOCM_SIGN = 1,
        CODE_LISA_REMS_CG = 2,
        CODE_LISA_SIGN_ELCT_DOCM_AGNC = 3,
        CODE_LISA_IMPR_DOCM_ARCH = 4,
    }
    enum LisaCodeSortieEtapeImpressiondocsArchiEnum {
        CODE_LISA_CRR_DOSS_CLSS_CLNT = 1,
        CODE_LISA_SORTIE_OPC = 2,
    }
    enum LisaCodeEntreeEtapeSignerdocsElecEnum {
        CODE_LISA_LIST_DOSS_MENG_SIGN = 1,
    }
    enum LisaCodeSortieEtapeRemiseDocsSigneEnum {
        CODE_LISA_REMS_CG = 1,
        CODE_LISA_GERER_PERSONNE_PHYSIQUE = 2,
        CODE_LISA_CRR_DOSS_CLSS_CLNT = 3,
        CODE_LISA_SORTIE_OPC = 4,
        CODE_LISA_SORTIE_HOT_SIGN = 4,
    }
    enum LisaCodeSortieEtapeCreerDossierCCEnum {
        CODE_LISA_PROCESSUS_APPELLANT = 1,
        CODE_LIST_DOSS_MENG_SIGN = 2,
        CODE_LIST_ACQR_DOC_DOSS_CLACLI = 3,
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeContractualisation {
        static FAFE: string;
        static FAFP: string;
        static VADE: string;
        static VADP: string;
        static FFPE: string;
        static AUCUN: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0006664
     */
    class ModeDiffusionMail {
        static SIGNATAIRE_MSI: string;
        static SIGNATAIRE_PERSO: string;
        static CONSEILLER: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeEnvoi {
        static MANUEL: string;
        static HUBMAIL: string;
        static POPUP_HUBMAIL_MESSAGE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeImpressionIDN {
        static FACE_A_FACE: string;
        static TELEPHONIQUE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModePrevisualisationIDN {
        static FACE_A_FACE_ELECTRONIQUE: string;
        static FACE_A_FACE_PAPIER: string;
        static FACE_A_FACE_PRO_PAPIER: string;
        static TELEPHONIQUE_ELECTRONIQUE: string;
        static TELEPHONIQUE_PAPIER: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeSignature {
        static PAPIER: string;
        static ELECTRONIQUE: string;
        static INDETERMINE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeUsageDocument {
        static PAPIER: string;
        static ELECTRONIQUE: string;
        static PAPIER_ELECTRONIQUE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeModeVente {
        static MEGI: string;
        static VPC: string;
        static CPCL: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class PointEntreeIDN {
        static PTU: string;
        static VMC: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    enum PorteurClasseurClientEnum {
        CONTRAT = 1,
        PERSONNE = 2,
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class StatutDossierNum {
        static EN_CREATION: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0006664
     */
    class EtatSignature {
        static STARTED: string;
        static FINISHED: string;
        static FAILED: string;
        static REFUSEE: string;
        static SIGNEE: string;
        static DEMARREE: string;
        static CREE: string;
        static BLOQUEE: string;
        static ERREUR: string;
        static SIGNATURE_SUIVANTE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0006664
     */
    class TypeDocument {
        static CCSE: string;
        static CSEP: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class TypeMail {
        static INITIAL: string;
        static RELANCE: string;
        static CONFIRMATION: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class TypePersonneContract {
        static TITULAIRE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * AdresseEmailSignataireService est un service angularJs a pour objectif d'appeler la ressource
     * AdresseEmailSignataire.
     * @author S0006664
     */
    class AdresseEmailSignataireService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getAdresseEmailSignataire(listeIdActeIdn: Array<string>, identifiantSignataire: string): ng.IPromise<Myway.Ressource.DossierNumerique.IAdresseEmailSignataire>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service AlerteImpressionService a pour objectif d'appeler la ressource REST alerteImpression.
     * @author S0076222
     */
    class AlerteImpressionService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        getAlerteImpression(codeEtablissement: string, codeCanal: string, codeEntiteVente: string): ng.IPromise<boolean>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe IdentificationSignContexteModele implemente l'interface
     * IContractualisationContexteModele afin de présenter les contrats d'entrées
     * de l'étape Identification de signataires.
     * @author S0076222
     */
    class AlimenterDossierNumeriqueContexteModele implements IContractualisationContexteModele {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        idIDN: string;
        idMat: string;
        caisse: string;
        agent: string;
        modeSignature: string;
        indicateurImpression: string;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        constructor(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, idIDN: string, idMat: string, caisse: string, agent: string, modeSignature: string, authenficationInfo: MyWay.Services.Context.AuthentificationInfo);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service IdentificationSignContexteService a pour objectif d'intialiser l'étape Identification de signataires.
     * @author S0076222
     */
    class AlimenterDossierNumeriqueContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private hubmailService;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: AlimenterDossierNumeriqueContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, hubmailService: HubmailService);
        /**
         * La méthode init a pour objectif d'initialiser le service identificationSignataireContexteService.
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        /**
         * checkContractualisationActeObjet est une méthode permettant de vérifier la bonne alimentation de l'objet
         * ContractualisationActe envoyé par
         * l'application appelante.
         * @params {MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe}
         * @returns {boolean}
         */
        private checkContractualisationActeObject(contractualisationActe);
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
        private getPointEntreeIDN(codeCanal);
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    class AlimenterDossierNumeriqueService {
        private $q;
        private serviceAgentExtended;
        private dossierNumeriqueService;
        private contractualisationModaleService;
        private alimenterDossierNumeriqueContexteService;
        private documentParametreService;
        private documentEntrepriseService;
        private hubmailService;
        private tiersNoyauService;
        private dossierVenteService;
        private static CLASS_NAME;
        static $inject: string[];
        private static DOCUMENT_BPJI;
        private static DOCUMENT_NOTE_BALE2;
        private static DOCUMENT_INTERO_BDF;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService, contractualisationModaleService: ContractualisationModaleService, alimenterDossierNumeriqueContexteService: AlimenterDossierNumeriqueContexteService, documentParametreService: DocumentParametreService, documentEntrepriseService: DocumentEntrepriseService, hubmailService: HubmailService, tiersNoyauService: TiersNoyauService, dossierVenteService: DossierVenteService);
        /**
         * la méthode init a pour objectif d'initialiser le service identificationSignataireContexteService.
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        /**
         * la méthode getIdentificationSignataireContexte permet de récupérer les contrats de contrats d'entrée
         * de l'étape identificationSignataire
         * @params
         * @returns {IdentificationSignContexteModele}
         */
        getAlimenterDossierNumeriqueContexte(): AlimenterDossierNumeriqueContexteModele;
        /**
         * Le rôle de la méthode alimenterDossierNumerique est d'alimenter le dossier numérique IDN/MySign avec les documents ayant un
         * identifiant GED non nulle.
         * @params  {contractualisationActe: Ressources.ContractualisationActe.IContractualisationActe, modeSignature: string}
         * @returns {IdentificationSignContexteModele}
         */
        alimenterDossierNumerique(): ng.IPromise<void>;
        private getCodeModeContractualisation(contractualisationActe);
        private getModeSignature(contractualisationActe);
        nextEtape(valeurSortie?: number): ng.IPromise<void>;
        nextEtapeContexteMySign(): ng.IPromise<void>;
        nextEtapeContexteMySignSAG(): ng.IPromise<void>;
        nextEtapeContexteMySignSED(): ng.IPromise<void>;
        isEligibleSemdSedPart(): boolean;
        nextEtapeContexteIdn(): ng.IPromise<void>;
        envoiMailPro(): ng.IPromise<void>;
        nextEtapeContexteIdnSAG(): ng.IPromise<void>;
        nextEtapeContexteIdnSED(): ng.IPromise<void>;
        private getInfosSignatairesTitulairesActe(contractualisationActe, codeEtablissementFinancier);
        private majSignataireActe(signataireActe, tiersNoyau);
        private majTitulaireActe(titulaireActe, tiersNoyau);
        private checkSignataireActe(signataireActe);
        private checkTitulaireActe(titulaireActe);
        private getIdentifiantPersonneFromContractualisationActe(contractualisationActe);
        /**
         * Dans le cas ou l'alimentation du dossier numérique a échouée, on appelle la méthode
         * executerModeRepliPapier afin d'imprimer les papiers.
         * @params  {}
         * @returns {ng.IPromise<any>}
         */
        executerModeRepliPapier(): ng.IPromise<any>;
        /**
         * getDocumentsAImprimer permet de récupérer les documents à imprimer.
         * @params  {}
         * @returns {Array<MyWay.Services.Impression.DocumentImpressionLot>}
         */
        private getDocumentsAImprimer();
    }
}

declare module MyWay.Contractualisation {
    class CaracteristiqCatalogService {
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        ajouterActesSecondairesClaCli(listDossiers: Array<IDossierNumeriqueDecorateur>, codeEtablissement: string): ng.IPromise<Array<IDossierNumeriqueDecorateur>>;
        /**
         * Appel la ressource CaracteristiqCatalog
         * @param données necessaires du get
         */
        getCaracteristiq(codeEtablissement: string, identifiantProduitService: number, codeSousFamilleActe: string): ng.IPromise<Myway.Ressource.CaracteristiqCatalog.ICaracteristiqCatalog>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * AdresseEmailSignataireService est un service angularJs a pour objectif d'appeler la ressource
     * AdresseEmailSignataire.
     * @author S0006664
     */
    class CoffreFortNumeriqueService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        isCFNActifExiste(identifiantPersonne: string): ng.IPromise<boolean>;
        private getListCFNActifsIdPersonne(identifiantPersonne);
    }
}

declare module MyWay.Contractualisation {
    /**
     * ContractualisationModaleService
     * @author S0076222
     */
    class ContractualisationModaleService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        private static CLASS_NAME;
        static $inject: string[];
        static STANDARD_MDALE_HEADER: string;
        static BOUTTON_CONTINUER: string;
        static BOUTTON_IMPRIMER: string;
        static BOUTTON_QUITTER: string;
        static BOUTTON_VALIDER: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        afficherModale(headerText: string, bodyText: string, iconModale: string, boutonText: string): ng.IPromise<void>;
        afficherModaleConfirm(headerText: string, bodyText: string, iconModale: string, actionButtonText: string, closeButtonText?: string): ng.IPromise<any>;
    }
}

declare module MyWay.Contractualisation {
    class CorporateInformationService {
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Appel la ressource CorporateInformation
         * @param
         */
        getCorporateInformation(codeEtablissement: string, identifiantTiers: number): ng.IPromise<Myway.Ressource.TiersCorporate.Corporateinformation.ICorporateInformation>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape LISA Imprimer Documents Archivés.
     * @author S0006664
     */
    class CreationDossClaCliConstants {
        static ERREUR_TECHNIQUE_CREATION_CLASSEUR_CLIENT: string;
        static ENTETE_POPUP: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service CreerDossierClasseurClientContexteService permet d'initialiser l'étape Création dossier classeur client.
     * @author S0006664
     */
    class CreationDossClaCliContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private caracteristiqCatalogService;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: CreationDossClaCliContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, caracteristiqCatalogService: CaracteristiqCatalogService);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape Création dossier classeur client.
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT"
         * si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape ImprimerDocsArchives
         */
        private getDonneesContexte();
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe ImprimerDocsArchivesContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape ImprimerDocsArchives.
     * @author S0006664
     */
    class CreationDossClaCliContexteModele implements IContractualisationContexteModele {
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        modeSignature: string;
        appelIhmAcquisitionClacli: string;
        constructor(multiDossiersNumeriques: IMultiDossiersNumeriques, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, modeSignature: string, appelIhmAcquisitionClacli: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0006664
     */
    class CreationDossClaCliService {
        private $q;
        private creationDossClaCliContexteService;
        private dossierCanalNumeriqueService;
        private dossierContratService;
        private dossierContratServiService;
        private su1pService;
        private livretAService;
        private mettreAJourDRCService;
        static $inject: string[];
        private static CLASS_NAME;
        private _listeDossierClasseurClient;
        private isLivretA;
        constructor($q: ng.IQService, creationDossClaCliContexteService: CreationDossClaCliContexteService, dossierCanalNumeriqueService: DossierCanalNumeriqueService, dossierContratService: DossierContratService, dossierContratServiService: DossierContratServiService, su1pService: Su1pService, livretAService: LivretAService, mettreAJourDRCService: MettreAJourDRCService);
        /**
         * La méthode init a pour objectif d'initialiser le service VisualiserPanierService;
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        private creerClasseurClient(modeSignature, dossierNumerique, codeCanal, authenficationInfo);
        private creerClasseurClientMultiDossiersNumeriques(multiDossiersNumeriques, authenficationInfo);
        private appelRessourceClasseurClient(modeSignature, dossierNumerique, isEligibleCREDOSCC, codeCanal, authenficationInfo, isLivretA);
        private mettreAJourDRC();
        private verifierCompletudeDRC();
        private updateIndicAppelIhmClaCli(isDrcComplet);
        /**
         * La méthode executerModeEchec permet d'executer le mode d'échec.
         * @params
         * @returns void
         */
        executerModeEchec(): void;
        listeDossierClasseurClient: Array<string>;
        nextEtape(): ng.IPromise<void>;
        private miseAjourListDossierNum(dossNum);
    }
}

declare module MyWay.Contractualisation {
    /**
     * L'objectif du service DocumentParametreService est d'appeler la ressource
     * documentparametre afin de récupérer les document à produire d'un acte de gestion.
     * @author S0076222
     */
    class ContractualisationParametreService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        postContractualisationParametre(multiDossiersNumeriques: IMultiDossiersNumeriques, listeTabeletteSignature: MyWay.Services.Mobilite.ITabletteSignature[]): ng.IPromise<Myway.Ressource.ContractualisationParametre.IContractualisationParametre>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * L'objectif du service DocumentEntrepriseService est d'appeler la ressource
     * documentparametre/documentEntreprise afin de récupérer la ResponseDocumentEntreprise
     * Liste d'objets:
     * url : string               URL de publication
     * cleRattachement : string   Clé de rattachement
     * libelle : string           Libellé du document
     * @author S0079240
     */
    class DocumentEntrepriseService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer la liste de doc contenant url, cleRattachement, libelle
         * @param clesRattachement ?: Liste de primitives, Liste des clés de rattachement de chaque document
         * @returns {liste ResponseDocumentEntreprise} Result promise.
         */
        getDocumentEntreprise(listClesRattachement: Array<string>): ng.IPromise<Myway.Ressource.DocumentParametre.IResponseDocumentEntreprise[]>;
        /**
         * permet de trouver l'index du documentAproduire selon la cle de rattachement
         * @param listeDocAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire[], cleRattachement: string
         * @returns index: number
         */
        findIndexDocumentAProduire(listDocs: Myway.Ressource.ContractualisationActe.IDocumentAProduire[], valeurCle: string): number;
        /**
         * Ajout pour Evol, obtenir urlDocument
         * et l'ajouter à dossiernumerique avant appel à this.dossierNumeriqueService.putDossierNumerique(dossierNumerique)
         *
         * Permet d'ajouter l'url des documents obtenue par getDocumentEntreprise(listClesRattachement)
         * @param contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe
         * @returns {Myway.Ressource.ContractualisationActe.IContractualisationActe} Result promise.
         */
        ajouterDocumentUrl(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * L'objectif du service DocumentParametreService est d'appeler la ressource
     * documentparametre afin de récupérer les document à produire d'un acte de gestion.
     * @author S0076222
     */
    class DocumentParametreService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        private static CODE_MARCHER_2023;
        private static CODE_MARCHER_208;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getDocumentParametre(actes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheEntreprise: string, codeTypeSousMarcheDocEntreprise?: string): ng.IPromise<Array<Myway.Ressource.DocumentParametre.IDocumentActe>>;
        /**
         * Permet de reévaluer un code type marcher sur plus de 5 caractères
         * @param codeTypeMarcheEntreprise
         * @returns codeTypeMarcheEntreprise
         */
        private getCodeTypeMarcheEntreprise(codeTypeMarcheEntreprise);
        ajouterDocumentsActesSecondaires(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * L'objectif du service DocumentsAtributaire (anciennement RecupererDocumentsIdnService) est d'appeler la ressource
     * dossierNumerique/documentsAttributaire afin de récuperer les documents d'un dossier numérique
     * @author S0006664
     */
    class DocumentsAttributaireService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getDocumentsAttributaire(idDossierNumerique: string, codeApplication: string): ng.IPromise<Array<Myway.Ressource.DossierNumerique.V3.IDocumentAttributaire>>;
    }
}

declare module MyWay.Contractualisation {
    class DossierVenteService {
        private $q;
        private serviceAgentExtended;
        private $filter;
        private static CLASS_NAME;
        private static RESUME;
        private static CLASSEUR_CLIENT;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $filter: ng.IFilterService);
        /**
         * Appel la ressource DossierVente
         * @param
         */
        getDVsEnAttenteSignature(authentificationInfo: MyWay.Services.Context.AuthentificationInfo, identifiantPersonne: number, codeCanal: string, statutEtape: string, isRecherchePro: boolean): ng.IPromise<Array<Myway.Ressource.DossierVente.Recherche.IDossierVente>>;
        private setDossierNumeriqueDeGestionDossierVente(dossierNumerique, codeEtablissement, codeCanal);
        private majDossierNumerique(dv, dossierNumerique);
        private getDonneeData(dv, searchVal);
        private getSignataireFromListePersLiee(dv, listeSignataire);
        private getGestionDossierVente(dossierNumerique, codeEtablissement, codeCanal);
        private getListeActesGestionSecondairesFromGestionDossierVente(gestionDossierVente);
        private getDossierVenteCompositionDossier(gestionDossierVente);
        private getListeIdentifiantProduitServiceCompoFromGestionDossierVente(gestionDossierVente);
        ajoutListeActesSecondairesToDossiersNumeriques(listeDossiersNumeriques: Array<IDossierNumeriqueDecorateur>, codeEtablissement: string, codeCanal: string): ng.IPromise<Array<IDossierNumeriqueDecorateur>>;
        withCodeSendeCommunication(): ng.IPromise<string>;
        forRequest(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature: string, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, codeSens: string): MyWay.Services.IRequestSettings;
        processMajDossierVente(request: MyWay.Services.IRequestSettings): ng.IPromise<Array<Myway.Ressource.DossierVente.GestionDossierVente.IGestionDossierVente>>;
        mettreAJourDossierVente(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature: string, authenficationInfo: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<Array<Myway.Ressource.DossierVente.GestionDossierVente.IGestionDossierVente>>;
        private getGestionDossierVenteFromContractualisationActe(contractualisationActe, modeSignature, authenficationInfo);
    }
}

declare module MyWay.Contractualisation {
    /**
     * DossierCanalNumeriqueService est un service angularJs a pour objectif d'appeler la ressource
     * dossierCanalNumerique afin de créer un dossier canal numérique électronique.
     * @author S0076222
     */
    class DossierCanalNumeriqueService {
        private $q;
        private serviceAgentExtended;
        private mettreAJourDRCService;
        private popupService;
        private livretAService;
        private su1pService;
        private dossierContratServiService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mettreAJourDRCService: MettreAJourDRCService, popupService: Services.Application.IPopupService, livretAService: LivretAService, su1pService: Su1pService, dossierContratServiService: DossierContratServiService);
        /**
         * La méthode createDossierClasseurClientElectronique a pour objectif de créer le classeur client numérique, mettre à jour le DRC,
         * ajouter l'indicateur APPEL_IHM_ACQ_CLACLI au contexte glabal et appeler next LISA afin de passer à l'étape suivante.
         * @params {acteReprise: IActeReprise,
         * acteGestion: IActeGestion,
         * indicateurPapier: boolean
         * indicateurPapier: boolean
         * modeSignature: string
         * ihmAcquisition: number}
         * @returns {{ng.IPromise<void>}}
         */
        createDossierClasseurClientElectronique(acteReprise: IActeReprise, acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion, indicateurPapier: boolean, modeSignature: string, ihmAcquisition: number, typeProfessionnel: string): ng.IPromise<void>;
        private createCCElectroniqueModeClassique(acteGestion, indicateurPapier, modeSignature, ihmAcquisition, typeProfessionnel);
        private createCCElectroniqueModeReprise(acteReprise, indicateurPapier, ihmAcquisition, typeProfessionnel);
        /**
         * Permet de mettre à jour le DRC
         * @param acte
         * @param ihmAcquisition
         */
        private mettreAJourDRC(acte, ihmAcquisition, typeProfessionnel, indicateurPapier);
        /**
         * La méthode appelCollecteClasseurClient
         * @params { dossierCanalNumeriqueOutput: Ressources.DossierCanalNumerique.IDossierCanalNumeriqueOutput,
         *  acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion,
         *  indicateurPapier: boolean, modeSignature: string }
         * @returns {{ng.IPromise<any>}}
         */
        private appelCollecteClasseurClient(listeNumeroDossiersCC, acteGestion);
        /**
         * La méthode createDossierClasseurClientElectronique a pour objectif de créer le classeur client numérique.
         * @returns {{ng.IPromise<void>}}
         */
        private postCreationDossierCanalNum(acte, acteGestionArcade, typeProfessionnel, authenficationInfo, codeGuichet);
        postCreationDossierCanalNumSEMD(dossierNumerique: IDossierNumerique, acteGestionArcade: string, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, codeCanal: string): ng.IPromise<string[]>;
        appelerRessourceClasseurClient(acte: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise, indicateurPapier: boolean, acteGestionArcade: string, typeProfessionnel: string): ng.IPromise<string[]>;
        /**
         * La méthode getIdOffre permet de retourner referenceOffre ou 0 (zéro) si referenceOffre est null
         */
        private getIdOffre(referenceOffre);
        /**
         * La méthode getActeFGestionArcade permet de retourner l'acte de gestion arcade
         */
        private getActeGestionArcade(acteGestion);
        /**
         * La méthode getNodapeTitulaire permet de retourner le NODAPE du titulaire
         */
        private getNodapeTitulaire(titulaireActes);
        private getIdentifiantTitulaire(titulaireDossierNumeriques);
        /**
         * La méthode getCompte retourne le compte bancaire.
         * @params {authenficationInfo: MyWay.Services.Context.AuthentificationInfo, referenceContrat: string, codeGuichet: string}
         * @returns {{string}}
         */
        private getCompte(authenficationInfo, referenceContratCarte, referenceContrat, codeGuichet);
        /**
         * La méthode getCodeTypeEDS retourne le typeEdsRattachement.
         * @params {authenficationInfo: MyWay.Services.Context.AuthentificationInfo}
         * @returns {{string}}
         */
        private getCodeTypeEDS(authenficationInfo);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape ClasseurClientPapier.
     * @author S0076222
     */
    class DossierContratConstants {
        static ERREUR_TECHNIQUE: string;
        static ENTETE_POPUP: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe DossierContratContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape ClasseurClientPapier.
     * @author S0076222
     */
    class DossierContratContexteModele implements IContractualisationContexteModele {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        modeSignature: string;
        ihmAcquisition: number;
        acteReprise: IActeReprise;
        valeurEntree: number;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        constructor(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature: string, ihmAcquisition: number, acteReprise: IActeReprise, valeurEntree: number, authenficationInfo: MyWay.Services.Context.AuthentificationInfo);
    }
}

declare module MyWay.Contractualisation {
    class DossierContratContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: DossierContratContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): ng.IPromise<void>;
        nextEtape(valeurSortie: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service DossierContratService  a pour objectif d'appeler la ressource
     * dossierContrat afin de créer un dossier canal numérique papier.
     * @author S0076222
     */
    class DossierContratService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private dossierContratContexteService;
        private mettreAJourDRCService;
        private livretAService;
        private su1pService;
        private dossierContratServiService;
        private static CLASS_NAME;
        static $inject: string[];
        private donneesLivretA;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, dossierContratContexteService: DossierContratContexteService, mettreAJourDRCService: MettreAJourDRCService, livretAService: LivretAService, su1pService: Su1pService, dossierContratServiService: DossierContratServiService);
        createDossierClasseurClientPapier(valeurSortie: number): ng.IPromise<void>;
        private createCCPapierModeClassique(valeurSortie);
        private createCCPapierModeReprise(valeurSortie);
        private putDossierContratFromActeGestion(acteGestion, indicateurPapier, donneesLivretA, typeProfessionnel);
        private putDossierContratFromActeReprise(acteReprise, indicateurPapier, donneesLivretA);
        putDossierContratSEMD(dossierNumerique: IDossierNumerique, codeCanal: string, authenficationInfo: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<string[]>;
        creationDosContrat(request: MyWay.Services.IRequestSettings): ng.IPromise<string[]>;
        private getCodeModeContractualisation(codeCanal, typeProfessionnel, indicateurPapier);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service DossierContratServiService  a pour objectif d'appeler la ressource
     * dossierContratServi afin de créer un dossier canal numérique papier.
     * @author S0076222
     */
    class DossierContratServiService {
        private $q;
        private serviceAgentExtended;
        private documentsAttributaireService;
        private dossierNumeriqueService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, documentsAttributaireService: DocumentsAttributaireService, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService);
        postDossierContratService(acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise, indicateurPapier: boolean, modeSignature: string): ng.IPromise<string[]>;
        postDossierContratServiceSEMD(dossierNumerique: IDossierNumerique, modeSignature: string, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, codeCanal: string): ng.IPromise<string[]>;
        creationDosContract(request: MyWay.Services.IRequestSettings): ng.IPromise<string[]>;
        private getCodeModeContractualisation(codeCanal, modeSignature, typeProfessionnel?);
        private convertListeDocumentsAttributaireToDocIDocument(documents, dossierNumerique);
        private mapListeDocuments(listeDocuments, dossierNumerique);
        private mapTypeAttributaireToCodeTypeAttributaire(typeAttrib);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape LISA envoiMailPro.
     * @author S0076222
     */
    class EnvoiMailProConstants {
        static ERREUR_TECHNIQUE: string;
        static CODE_APPLICATION: string;
        static ENVOI_MAIL_OK: string;
        static ENVOI_MAIL_KO: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe EnvoiMailProContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape EnvoiMailPro.
     * @author S0076222
     */
    class EnvoiMailProContexteModele implements IContractualisationContexteModele {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        acteReprise: IActeReprise;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        idIDN: string;
        libelleActe: string;
        modeSignature: string;
        isMode2: boolean;
        constructor(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, acteReprise: IActeReprise, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, idIDN: string, libelleActe: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service EnvoiMailProContexteService permet d'initialiser l'étape EnvoicMailPro.
     * @author S0076222
     */
    class EnvoiMailProContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private dossierNumeriqueService;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: EnvoiMailProContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape EnvoicMailPro @link(EnvoiMailProContexteModele).
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT"
         * si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape EnvoiMailPro
         */
        private getDonneesContexte();
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    class EnvoiMailProService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private envoiMailProContexteService;
        private initierSignatureService;
        private static CLASS_NAME;
        static $inject: string[];
        private identifiantIDN;
        private libelleActe;
        private idTransactionICG;
        private mode2;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, envoiMailProContexteService: EnvoiMailProContexteService, initierSignatureService: InitierSignatureService);
        /**
         * La méthode init a pour objectif d'initialiser le service EnvoiMailProService;
         * Elle récupere l'objet contractualisationActe, ActeReprise ou l'idIDN depuis le contexte.
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        envoiMailPro(): ng.IPromise<{
            isMailEnvoye: boolean;
            libelleErreur: string;
        }>;
        getContratsContexte(): EnvoiMailProContexteModele;
        getIdentifiantIDN(): string;
        getLibelleActe(): string;
        isMode2(): boolean;
        nextEtape(valeurSortie: number): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape ClasseurClientPapier.
     * @author S0076222
     */
    class HubmailConstants {
        static CODE_CARACTERISTIQUE_OFFRE_HUBMAIL_ACTIVE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * HubmailService est un service angularJs permet de vérifier la disponibilité
     * de la fonctionnalité de Hubmail en appellant les
     * deux services parametreEtabService et offresEtabService.
     * @author S0076222
     */
    class HubmailService {
        private $q;
        private serviceAgentExtended;
        private offresEtabService;
        private parametreEtabService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, offresEtabService: OffresEtabService, parametreEtabService: ParametreEtabService);
        /**
         * Cette méthode permettant de vérifier si la fonctionnalité de Hubmail est disponible ou pas.
         *
         */
        isHubmailDisponible(identifiantActeExterne: string, codeModeMiseEnGestion: string, codeCanal: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Cette méthode permettant de vérifier l'existence du code caractéristique offre hubmail(28)
         * @param offresEtabOutput
         */
        private findOffreHubmailActive(offresEtabOutput);
        /**
         * Cette méthode permettant de récuperer le FlagHubmail depuis l'objet ParametresCaisse
         * @param paramEtab
         */
        private getFlagHubmail(paramEtab);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape LISA Imprimer Documents Archivés.
     * @author S0006664
     */
    class ImprimerDocsArchivesConstants {
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service ImprimerDocsArchivesContexteService permet d'initialiser l'étape ImprimerDocsArchives.
     * @author S0006664
     */
    class ImprimerDocsArchivesContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: ImprimerDocsArchivesContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape ImprimerDocsArchives.
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT"
         * si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape ImprimerDocsArchives
         */
        private getDonneesContexte();
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe ImprimerDocsArchivesContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape ImprimerDocsArchives.
     * @author S0006664
     */
    class ImprimerDocsArchivesContexteModele implements IContractualisationContexteModele {
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        constructor(multiDossiersNumeriques: IMultiDossiersNumeriques, authenficationInfo: MyWay.Services.Context.AuthentificationInfo);
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0006664
     */
    class ImprimerDocsArchivesService {
        private $q;
        private serviceAgentExtended;
        private dossierNumeriqueService;
        private imprimerDocsArchivesContexteService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService, imprimerDocsArchivesContexteService: ImprimerDocsArchivesContexteService);
        /**
         * La méthode init a pour objectif d'initialiser le service VisualiserPanierService;
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        recupererDocumentsAImprimer(): ng.IPromise<Array<MyWay.Services.Impression.DocumentImpressionLot>>;
        basculerVersDossierPapier(): ng.IPromise<Array<boolean>>;
        imprimerDocumentsASignes(listeDocumentImpressionLot: Array<MyWay.Services.Impression.DocumentImpressionLot>): ng.IPromise<boolean>;
        initierSignaturePapier(): ng.IPromise<boolean>;
        private createInitierSignatureInputFromDossierNumerique(listeDossierNumerique, codeApplication);
        verifSAGOPC(): boolean;
        executerModeEchec(): void;
        nextEtape(valeurSortie: number): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * InitierSignatureService est un service angularJs a pour objectif d'appeler la ressource
     * InitierSignature .
     * @author S0076222
     */
    class InitierSignatureService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        postInitierSignature(codeEtablissement: string, identifiantIDN: string, codeApplication: string, codeModeContractualisation: string, emettreEmailInitial: boolean): ng.IPromise<Myway.Ressource.DossierNumerique.IInitierSignatureOutput>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape LISA ListerDossiersNumeriques.
     * @author S0006664
     */
    class ListerDossiersNumeriquesConstants {
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe VisualiserPanierContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape EnvoiMailPro.
     * @author S0006664
     */
    class ListerDossiersNumeriquesContexteModele implements IContractualisationContexteModele {
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        dossierNumerique: IDossierNumerique;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        identifiantPersonne: number;
        codeCanal: string;
        isDeployBulleConfiance: boolean;
        constructor(multiDossiersNumeriques: IMultiDossiersNumeriques, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, identifiantPersonne: number, codeCanal: string, isDeployBulleConfiance: boolean);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service VisualiserPanierContexteService permet d'initialiser l'étape EnvoicMailPro.
     * @author S0076222
     */
    class ListerDossiersNumeriquesContexteService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: ListerDossiersNumeriquesContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape EnvoiMailPro
         */
        getDonneesContexte(): ng.IPromise<ListerDossiersNumeriquesContexteModele>;
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0006664
     */
    class ListerDossiersNumeriquesService {
        private $q;
        private serviceAgentExtended;
        private listerDossiersNumeriquesContexteService;
        private dossierVenteService;
        private particulierInformationService;
        private dossierNumeriqueService;
        private reglesSignaturesService;
        private contractualisationParametreService;
        private corporateInformationService;
        private tiersNoyauService;
        private alimenterDossierNumeriqueContexteService;
        private contractualisationModaleService;
        private static CLASS_NAME;
        static $inject: string[];
        private _multiDossiersNumeriques;
        private _codeCanal;
        private _identifiantPersonne;
        private _codeEtablissement;
        private _idDossierNumerique;
        private _listeDossierVenteAmeliore;
        private _listeParticulierInformation;
        private listeDossierNumerique;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, listerDossiersNumeriquesContexteService: ListerDossiersNumeriquesContexteService, dossierVenteService: DossierVenteService, particulierInformationService: ParticulierInformationService, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService, reglesSignaturesService: ReglesSignaturesService, contractualisationParametreService: ContractualisationParametreService, corporateInformationService: CorporateInformationService, tiersNoyauService: TiersNoyauService, alimenterDossierNumeriqueContexteService: AlimenterDossierNumeriqueContexteService, contractualisationModaleService: ContractualisationModaleService);
        /**
         * La méthode init a pour objectif d'initialiser le service VisualiserPanierService;
         * @params
         * @returns {ng.IPromise<ListerDossiersNumeriquesContexteModele>}
         */
        listDosNumServ(): ng.IPromise<ListerDossiersNumeriquesContexteModele>;
        getInfoContexte(): ng.IPromise<ListerDossiersNumeriquesContexteModele>;
        getDossierVenteEnAttenteSignature(): ng.IPromise<Array<IDossierNumeriqueDecorateur>>;
        private setInformationsPersonnes(listeDossierNumerique);
        private setEtatDossier(listeDossierNumerique);
        private popupInfo();
        private setIsEligibleRegroupement(listeDossierNumerique);
        setListeActesSecondaires(listeDossiersNum: Array<IDossierNumeriqueDecorateur>): ng.IPromise<Array<IDossierNumeriqueDecorateur>>;
        mapDossierNumWithDossierVente(dv: Myway.Ressource.DossierVente.Recherche.IDossierVente): IDossierNumerique;
        mapTitulaire(donneesPersonnesDDV: Array<Myway.Ressource.DossierVente.Recherche.IDonneePersonne>, statutEtapePro: string): Array<ITitulaireDossierNumerique>;
        mapSignataire(donneesPersonnesDDV: Array<Myway.Ressource.DossierVente.Recherche.IDonneePersonne>): Array<ISignataireDossierNumerique>;
        private getModeContractualisationFromCodeCanal(codeCanal, isPro);
        getCodeModeMiseEnGestionFromCodeModeVente(dossierVente: Myway.Ressource.DossierVente.Recherche.IDossierVente): string;
        genererGroupesSignataires(listeDossierNumerique: Array<IDossierNumeriqueDecorateur>, dossiersParGroupes: Array<ISignatairesPanier>): Array<ISignatairesPanier>;
        nextEtape(multiDossierNumerique: IMultiDossiersNumeriques): ng.IPromise<void>;
        nextEtapeSignMultDoss(multiDossierNumerique: IMultiDossiersNumeriques): ng.IPromise<void>;
        nextEtapeSignMultDossSED(multiDossierNumerique: IMultiDossiersNumeriques): ng.IPromise<void>;
        nextEtapeSignMultDossPRO(multiDossierNumerique: IMultiDossiersNumeriques): ng.IPromise<void>;
        nextEtapeSignMultDossPrtgSED(multiDossierNumerique: IMultiDossiersNumeriques): ng.IPromise<void>;
        /**
         * champs requis pour titulaireCompte : numeroPersonne, typeClient, designation
         * champs requis pour listeSignataires : civilite, nomFamille, nomUsage, numeroPersonne, prenom
         * @param multiDossierNumerique
         */
        private createMediaSignatairesPro(multiDossierNumerique);
        /**
         * pour le lot 1 tutelle, la sélection des signataire se fait soit pour un GMP soit pour un EI
         * 1 : recherche identifiant du signataire GMP
         * 2 : recherche identifiant de la Personne Morale en lien des GMP
         * 3 : appel du service tiersNoyau pour récupérer la codePersonnaliteJuridique et la raison sociale
         * @return  ng.IPromise<ITitulaireCompte>
         * @param multiDossierNumerique
         */
        createTitulaireCompte(multiDossierNumerique: IMultiDossiersNumeriques): ng.IPromise<ITitulaireCompte>;
        getInfosProEI(signataireEI: string): ng.IPromise<ITitulaireCompte>;
        getInfosProGMP(idPersonneEnLien: string): ng.IPromise<ITitulaireCompte>;
        createSignataireSimplifie(listeSignataires: Array<ISignataire>): ng.IPromise<Array<ISignataireSimplifie>>;
        /**
         * cette méthode permet d'avoir nbDossier/signataire
         * si un signataire appartient à tous les Dossier/vignette selectionnée c que ce signataire il
         * est commun
         * @param dossiersProAControler
         */
        controleSignatairesCommun(dossiersProAControler: Array<IDossierNumerique>): boolean;
        private getMateriels(multiDossiersNumeriques);
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        codeCanal: string;
        identifiantPersonne: number;
        idDossierNumerique: string;
        listeDossierVenteAmeliore: Array<Myway.Ressource.DossierVente.Recherche.IDossierVente>;
        listeParticulierInformation: Array<Myway.Ressource.Tiers.ParticulierInformation.IParticulierInformation>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service MettreAJourDRCService  a pour objectif d'appeler le service AngularJS
     * numerisationService afin de mettre à jour le DRC après la création du classeur client.
     * @author S0076222
     */
    class MettreAJourDRCService {
        private $q;
        private serviceAgentExtended;
        private numerisationService;
        private completudeDrcService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, numerisationService: myway.comEditiqueNumerisation.Services.NumerisationService, completudeDrcService: myway.comEditiqueNumerisation.Services.CompletudeDrcService);
        mettreAJourDRCTitulaires(listeTitulaires: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>): ng.IPromise<void>;
        mettreAJourDRC(identifiantPersonne: string): ng.IPromise<boolean>;
        private putDossierReglementaireClient(identifiantPersonne);
        private filterDuplicates(list);
        verifierCompletudeDRC(listeIdentifiantsTitulaires: Array<string>): ng.IPromise<boolean>;
        private isDRCComplet(identifiantTitulaire);
    }
}

declare module MyWay.Contractualisation {
    /**
     * OffresEtabService est un service angularJs a pour objectif d'appeler la ressource
     * offresEtab .
     * @author S0076222
     */
    class OffresEtabService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getOffresEtab(codeModeMiseEnGestion: string, codeCanal: string, identifiantActeExterne: string): ng.IPromise<Myway.Ressource.OffresEtab.IOffresEtabOutput>;
        private getFlagVPC(modeMiseEnGestion);
        private getFlagMEGI(modeMiseEnGestion);
    }
}

declare module MyWay.Contractualisation {
    /**
     * ParametreEtabService est un service angularJs a pour objectif d'appeler la ressource
     * parametreEtab.
     * @author S0076222
     */
    class ParametreEtabService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getParametreEtab(codeEtablissement: string): ng.IPromise<Myway.Ressource.ParametreEtab.IParametresCaisse>;
    }
}

declare module MyWay.Contractualisation {
    class ParticulierInformationService {
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Appel la ressource ParticulierInformation
         */
        getParticulierInformation(codeEtablissement: string, idSignataire: number): ng.IPromise<Myway.Ressource.Tiers.ParticulierInformation.IParticulierInformation>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * RechercheProduitETService est un service angularJs a pour objectif d'appeler la ressource
     * rechercheProduitET.
     * @author S0076222
     */
    class RechercheProduitETService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        static CODE_GUICHET_A_BLANC: string;
        static CODE_TYPE_PRODUIT_F004: string;
        static CODE_TYPE_PRODUIT_FDCT: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getCodeGuichet(codeEtablissement: string, acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise | IDossierNumerique): ng.IPromise<string>;
        private getRechercheProduitET(codeAgent, codeEtablissement, numeroEntiteTitulaire, codeGuichetInterbancaire, codeProduit, numeroCompte);
    }
}

declare module MyWay.Contractualisation {
    class ReglesSignaturesService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        static INDICATEUR_MODE_APPEL_QR: string;
        static CODE_RUBRIQUE_REGLE_REGROUPEMENT_SIGNATURE: string;
        static INDICATEUR_REGLE_BLOQUANTE_N: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        isEligibleRegroupementSignature(donneesEntrer: myway.comContract.ReglesSignataires.IRegleSignatireInput): ng.IPromise<IRegleSignatireOUTPUT>;
        /**
         * Appel la ressource ReglesSignature
         * @param donneesEntrer
         */
        private getReglesSignatures(donneesEntrer);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape LISA Remise documents signés.
     * @author S0006664
     */
    class RemiseDocsSignesConstants {
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe RemiseDocsSignesContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape RemiseDocumentsSignes.
     * @author S0006664
     */
    class RemiseDocsSignesContexteModele implements IContractualisationContexteModele {
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        isConnaissanceClientAppeller: string;
        identifiantPersonne: string;
        constructor(multiDossiersNumeriques: IMultiDossiersNumeriques, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, isAppelerConnaissanceClient: string, identifiantPersonne: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service RemiseDocsSignesContexteService permet d'initialiser l'étape Remise documents signes.
     * @author S0006664
     */
    class RemiseDocsSignesContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: RemiseDocsSignesContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape RemiseDocsSignes.
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT"
         * si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape EnvoiMailPro
         */
        private getDonneesContexte();
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0006664
     */
    class RemiseDocsSignesService {
        private $q;
        private serviceAgentExtended;
        private dossierNumeriqueService;
        private remiseDocsSignesContexteService;
        private adresseEmailSignataireService;
        private tiersNoyauService;
        private coffreFortNumeriqueService;
        private static CLASS_NAME;
        static $inject: string[];
        private _documentsAImprimer;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService, remiseDocsSignesContexteService: RemiseDocsSignesContexteService, adresseEmailSignataireService: AdresseEmailSignataireService, tiersNoyauService: TiersNoyauService, coffreFortNumeriqueService: CoffreFortNumeriqueService);
        /**
         * La méthode init a pour objectif d'initialiser le service VisualiserPanierService;
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        getDesignation(client: ISignataireDossierNumerique | ITitulaireDossierNumerique): string;
        getNomPrenom(signataire: ISignataireDossierNumerique | ITitulaireDossierNumerique): string;
        getCivilite(signataire: ISignataireDossierNumerique | ITitulaireDossierNumerique): string;
        remiseDocumentsSignesViaMsi(): ng.IPromise<void>;
        remiseDocumentsSignesViaAdresseMailPerso(): ng.IPromise<boolean>;
        verifierPresenceCFN(): ng.IPromise<void>;
        remiseDocumentsSignes(modeDiffusionMail: string, listeIdentifiantsSignataires: Array<string>, nouvellesAdressesMail: Array<Myway.Ressource.Signature.V3.INouvelleAdresseMail>): ng.IPromise<Myway.Ressource.Signature.V3.IMailOutput>;
        private isFAFE();
        imprimerDocumentsSignes(): ng.IPromise<boolean>;
        recupererDocumentsSignesAImprimer(): ng.IPromise<Array<MyWay.Services.Impression.DocumentImpressionLot>>;
        mettreAjourAdresseEmailSignataire(): ng.IPromise<boolean>;
        recupurerNouvelleAdresseEmailSignataire(): ng.IPromise<boolean>;
        /**
         * La méthode executerModeEchec permet d'executer le mode d'échec.
         * @params
         * @returns void
         */
        executerModeEchec(): void;
        nextEtape(valeurSortie: number): ng.IPromise<void>;
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        documentsAImprimer: Array<Myway.Ressource.DossierNumerique.IDocumentAImprimer>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'application Contractualisation.
     * @author S0076222
     */
    class RemiseCGConstants {
        static ERREUR_TECHNIQUE: string;
        static CODE_REMISE_CG_MSI: string;
        static ENTETE_POPUP: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe RemiseCGContexteModele implemente l'interface IContractualisationContexteModele afin de présenter les contrats d'entrées
     * de l'étape RemiseCG.
     * @author S0076222
     */
    class RemiseCGContexteModele implements IContractualisationContexteModele {
        modeSignature: string;
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        acteReprise: IActeReprise;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        ihmAcquisition: number;
        indicateurImpression: string;
        modeEnvoi: string;
        valeurEntree: number;
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        constructor(modeSignature: string, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, acteReprise: IActeReprise, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, ihmAcquisition: number, valeurEntree: number, indicateurImpression: string, modeEnvoi: string, multiDossiersNumeriques: IMultiDossiersNumeriques);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service RemiseCGContexteService permet d'initialiser l'étape remiseCG.
     * @author S0076222
     */
    class RemiseCGContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private alerteImpressionService;
        private contractualisationModaleService;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: RemiseCGContexteModele;
        private static POPUP_HUBMAIL_MESSAGE;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, alerteImpressionService: AlerteImpressionService, contractualisationModaleService: ContractualisationModaleService);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape RemiseCG @link(RemiseCGContexteModele).
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT"
         * si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape routeur en fonction de
         * la valeur d'entrée.
         * Valeur d'entrée == 12, les contrats d'entrées sont : l'objet ContractualisationActe et IndicateurImpression
         * Valeur d'entrée == 14, les contrats d'entrées sont : l'objet ActeReprise
         * Valeur d'entrée == 1, les contrats d'entrées sont : l'objet ActeReprise et ModeSignature
         * Valeur d'entrée == 2, les contrats d'entrées sont : l'objet ContractualisationActe et ModeSignature
         * @param valeurEntreeEtapeRouteur
         */
        private getDonneesContexte(valeurEntreeEtapeRemiseCG);
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
        /**
         * La méthode nextIDNImpression réalise un enchainement vers l'étape LISA suivante: IDNImpression.
         * @params
         * @returns {ng.IPromise<void>}
         */
        private nextIDNImpression();
        /**
         * La méthode nextClasseurClientPapier réalise un enchainement vers l'étape LISA suivante: ClasseurClientPapier.
         * @params
         * @returns {ng.IPromise<void>}
         */
        private nextClasseurClientPapier();
        /**
         * La méthode nextClasseurClientElectronique réalise un enchainement vers l'étape LISA suivante: ClasseurClientElectronique.
         * @params
         * @returns {ng.IPromise<void>}
         */
        private nextClasseurClientElectronique();
        private addIdMaterielToContexte();
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    class RemiseCGService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private remiseCGContexteService;
        private dossierNumeriqueService;
        private static CLASS_NAME;
        static $inject: string[];
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         * @param contractualisationModaleService
         * @param remiseCGContexteService
         * @param dossierNumeriqueService
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, remiseCGContexteService: RemiseCGContexteService, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService);
        /**
         * La méthode init a pour objectif d'initialiser le service RemiseCGService;
         * Elle récupere l'objet contractualisationActe et le modeSignature depuis le contexte.
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<boolean>;
        nextEtape(): ng.IPromise<void>;
        private getCodeRemiseCG(contractualisationActe);
        private getCodeModeContractualistion(modeVente, modeSignature);
        private getModeVente(contractualisationActe);
        getRemiseCGContexte(): RemiseCGContexteModele;
        getIdPersonne(): string;
        getLibelleActe(): string;
        getListDocumentsRDE(listeDocumentAProduire: Array<Myway.Ressource.ContractualisationActe.IDocumentAProduire>): Array<myway.comEditiqueNumerisation.Modeles.IDocumentEntreprise>;
        private getListeActesSecondaires();
        getDonneesRemiseCG(): myway.comEditiqueNumerisation.Modeles.IRemiseCG;
    }
}

declare module MyWay.Contractualisation {
    /**
     * SignatureElectroniqueService est un service angularJs a pour objectif d'appeler la ressource
     * SessionSignature .
     * @author S0006664
     */
    class SignatureElecService {
        private $q;
        private serviceAgentExtended;
        private dossierNumeriqueService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService);
        initierSignatureElectronique(listeDossierNumerique: Array<string>, codeApplication: string, urlRetourIcg: string, idSignataire: string, supportSignature?: string): ng.IPromise<Myway.Ressource.Signature.V3.ISignatureElectronique>;
        createSessionSignature(signatureElectronique: Myway.Ressource.Signature.V3.ISignatureElectronique): ng.IPromise<Myway.Ressource.Signature.V3.ISignatureElectronique>;
        private createInitierSignatureInputFromDossierNumerique(listeDossierNumerique, codeApplication);
        updateSignatureElectronique(signatureElectronique: Myway.Ressource.Signature.V3.ISignatureElectronique): ng.IPromise<Myway.Ressource.Signature.V3.ISignatureElectronique>;
        deleteSessionSignature(codeApplication: string, idTransactionIcg: string, listeIdDossierNumerique: Array<string>): ng.IPromise<Array<Myway.Ressource.DossierNumerique.IActeAImprimer>>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape LISA SignerDocumentsElecConstants.
     * @author S0006664
     */
    class SignerDocumentsElecConstants {
        static ERREUR_TECHNIQUE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe SignerDocumentsElecContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape SIGN_DOCM_ELEC.
     * @author S0006664
     */
    class SignerDocumentsElecContexteModele implements IContractualisationContexteModele {
        multiDossiersNumeriques: IMultiDossiersNumeriques;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        constructor(multiDossiersNumeriques: IMultiDossiersNumeriques, authenficationInfo: MyWay.Services.Context.AuthentificationInfo);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service SignerDocumentsElecContexteService permet d'initialiser l'étape SIGN_DOCM_ELEC.
     * @author S0076222
     */
    class SignerDocumentsElecContexteService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        private contratsContexte;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape SIGN_DOCM_ELEC @link(SignerDocumentsElecContexteModele).
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT"
         * si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        getContratsContext(): ng.IPromise<SignerDocumentsElecContexteModele>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape SIGN_DOCM_ELEC
         */
        private getDonneesContexte();
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0006664
     */
    class SignerDocumentsElecService {
        private $q;
        private serviceAgentExtended;
        private signatureElecService;
        private signerDocumentsElecContexteService;
        private static CLASS_NAME;
        static $inject: string[];
        private _signatureElectronique;
        private _isInitialised;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, signatureElecService: SignatureElecService, signerDocumentsElecContexteService: SignerDocumentsElecContexteService);
        /**
         * La méthode init a pour objectif d'initialiser le service EnvoiMailProService;
         * Elle récupere l'objet contractualisationActe, ActeReprise ou l'idIDN depuis le contexte.
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<SignerDocumentsElecContexteModele>;
        /**
         *
         * Initialisation de la signature electronique avec mise a jour du dossier numerique
         * @param contratsContexte
         */
        createSignatureElectronique(contratsContexte: SignerDocumentsElecContexteModele): ng.IPromise<void>;
        private getListeIdentifiantDossierNumerique(listeDossierNumerique);
        private updateSignatureELectronique(statutIcg);
        traiterRetourIcg(statutIcg: string): ng.IPromise<string>;
        appelerEcranSignatureIcg(contratsContexte: SignerDocumentsElecContexteModele): void;
        /**
         * Cretation de l url pour le next etape d ICG
         */
        constituerUrlRetourIcg(): ng.IPromise<string>;
        isInitialised: boolean;
        signatureElectronique: Myway.Ressource.Signature.V3.ISignatureElectronique;
        nextEtape(valeurSortie: number, contratsContexte?: SignerDocumentsElecContexteModele, error?: string): void;
        /**
         * @ngdoc method
         * @name identifierTablettePrioritaire
         * @param MyWay.Contractualisation.IMultiDossiersNumeriques
         * @description
         * Cette méthode permet de recuperer la tablette la plus prioritaire
         * @returns {Myway.Ressource.ContractualisationActe.IMateriel}
         */
        identifierTablettePrioritaire(multiDossiersNumeriques: MyWay.Contractualisation.IMultiDossiersNumeriques): Myway.Ressource.ContractualisationActe.IMateriel;
    }
}

declare module MyWay.Contractualisation {
    class TiersNoyauService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        private static CODE_TYPE_MEDIA_MAIL;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getTiersNoyau(codeEtablissementFinancier: string, identifiantPersonne: number): ng.IPromise<Myway.Ressource.Tiers.TiersNayau.ITiersNoyau>;
        getMailSignataireFromTiersNoyau(tiersNoyau: Myway.Ressource.Tiers.TiersNayau.ITiersNoyau): string;
        getCiviliteSignataireFromTiersNoyau(tiersNoyau: Myway.Ressource.Tiers.TiersNayau.ITiersNoyau): string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * détermine la bascule CREDOSCC en appelant SU1P
     * pour dossiercontratserv
     */
    class Su1pService {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Vérifier si bascule CREDOSCC pour creation Classeur Client par WebService DossierConratServ
         */
        isBasculeCREDOSCC(codeEtablissement: string, codeActeGestion: string): ng.IPromise<boolean>;
        private filtreSU1PParDates(datas);
        /**
         * Vérification CREDOSCC et Agence
         * si agence(WLNLU) présente ou si WLNLU vide alors bascule
         */
        private isBasculeAgence(caissesBasculeesCREDOSCC, agenceRattachement);
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe AnnulationContexteModele implemente l'interface IContractualisationContexteModele afin de présenter les contrats d'entrées
     * de l'étape annulation mode électronique.
     * @author S0076222
     */
    class AnnulationContexteModele implements IContractualisationContexteModele {
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        idIDN: string;
        idMat: string;
        caisse: string;
        agent: string;
        codeCanal: string;
        codeEntite: string;
        identifiantActeExterne: string;
        codeModeMiseEnGestion: string;
        modeEnvoi: string;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, idIDN: string, idMat: string, caisse: string, agent: string, codeCanal: string, codeEntite: string, identifiantActeExterne?: string, codeModeMiseEnGestion?: string, modeEnvoi?: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service AnnulationContexteService a pour objectif d'intialiser annulation en mode electronique.
     * @author S0076222
     */
    class AnnulationContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: AnnulationContexteModele;
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode init a pour objectif d'initialiser le service annulationContexteService.
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    interface IAnnulationResponse {
    }
    class AnnulationContractualisationService {
        private serviceAgent;
        private alerteImpressionService;
        private annulationContexteService;
        private dossierNumeriqueService;
        private contractualisationModaleService;
        private hubmailService;
        private static CLASS_NAME;
        static $inject: string[];
        /**
         *
         * @param serviceAgent
         * @param alerteImpressionService
         * @param annulationContexteService
         * @param dossierNumeriqueService
         * @param contractualisationModaleService
         * @param hubmailService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, alerteImpressionService: AlerteImpressionService, annulationContexteService: AnnulationContexteService, dossierNumeriqueService: myway.comContract.Services.DossierNumeriqueService, contractualisationModaleService: ContractualisationModaleService, hubmailService: HubmailService);
        /**
         * Permet l'annulation d'une signature électronique
         * @constructor
         * @returns void
         */
        annulationContractualisationElectronique(): ng.IPromise<void>;
        private nextEtapeAlerteImpression();
        /**
         * fonction checkEligibleHubmail()
         * @params mode
         * vérifie l'éligibilité à hubmail et retourne boolean
         */
        private checkEligibleHubmail();
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe ConfirmationContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape confirmation.
     * @author S0076222
     */
    class ConfirmationContexteModele implements IContractualisationContexteModele {
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        idIDN: string;
        idMat: string;
        caisse: string;
        agent: string;
        codeCanal: string;
        codeEntite: string;
        modeEnvoi: string;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, idIDN: string, idMat: string, caisse: string, agent: string, codeCanal: string, codeEntite: string, modeEnvoi?: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service ConfirmationContexteService a pour objectif d'intialiser annulation en mode electronique.
     * @author S0076222
     */
    class ConfirmationContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private static CLASS_NAME;
        static $inject: string[];
        contratsContexte: ConfirmationContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode init a pour objectif d'initialiser le service identificationSignataireContexteService.
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode nextEtape réalise un enchainement vers l'étape LISA suivante.
         * @params  {valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>}
         * @returns {ng.IPromise<void>}
         */
        nextEtape(valeurSortie?: number, ...contrats: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    class ConfirmationService {
        private $q;
        private routeurContexteService;
        private alerteImpressionService;
        private contractualisationModaleService;
        private confirmationContexteService;
        private static CLASS_NAME;
        static $inject: string[];
        constructor($q: ng.IQService, routeurContexteService: RouteurContexteService, alerteImpressionService: AlerteImpressionService, contractualisationModaleService: ContractualisationModaleService, confirmationContexteService: ConfirmationContexteService);
        /**
         * Permet l'impression papier avec le contôle entité
         * @constructor
         * @returns void
         */
        controlerImpression(): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation.Ressources.CaracteristiqCatalog {
    /**
     * La classe CaracteristiqCatalog définit l'URL des la ressource REST CaracteristiqCatalog.
     * @author S0061512
     */
    class CaracteristiqCatalogConstants {
        static RESSOURCE_REST_URL: string;
        static CODE_ENTITE_VENTE: string;
    }
}

declare module MyWay.Contractualisation.Ressources.CaracteristiqCatalog {
    /**
     * La classe ReglesSignatureRequestFactory permet de produire la requête de la ressource ReglesSignature.
     * @author S0061512
     */
    class CaracteristiqCatalogRequestFactory {
        create(codeEtablissement: string, identifiantProduitService: number, codeSousFamilleActe: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.AdresseEmailSignataire {
    class AdresseEmailSignataireConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.AdresseEmailSignataire {
    class AdresseEmailSignataireRequestFactory {
        getAdresseEmailSignataire(listeIdActeIdn: Array<string>, identifiantSignataire: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.CoffreFortNumerique {
    class CoffreFortNumeriqueConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.CoffreFortNumerique {
    class CoffreFortNumeriqueRequestFactory {
        getListCFNIdPersonne(identifiantPersonne: string, listeComplete: boolean): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.ContractualisationParametre {
    class ContractualisationParametreConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.ContractualisationParametre {
    class ContractualisationParametreInputFactory {
        private static CODE_NATURE_APPEL_COMPLET;
        /**
         *
         * @param multiDossiersNumeriques
         */
        createContractualisationParametreInputFromMultiDossiersNumeriques(multiDossiersNumeriques: IMultiDossiersNumeriques, listeTabeletteSignature: MyWay.Services.Mobilite.ITabletteSignature[]): Myway.Ressource.ContractualisationParametre.IContractualisationParametreInput;
        /**
         *
         * @param listeSignataireDossierNumerique
         */
        getListeSignatairesDocument(listeSignataireDossierNumerique: Array<ISignataireDossierNumerique>): Array<Myway.Ressource.ContractualisationParametre.ISignataire>;
        /**
         *
         * @param signataireDossierNumerique
         */
        getSignataireDocument(signataireDossierNumerique: ISignataireDossierNumerique): Myway.Ressource.ContractualisationParametre.ISignataire;
        /**
         *
         * @param listeMateriels
         * @param codeCanal
         */
        getListeMateriel(listeTabeletteSignature: MyWay.Services.Mobilite.ITabletteSignature[], codeCanal: string): Array<Myway.Ressource.ContractualisationParametre.IMateriel>;
        /**
         *
         * @param materiel
         * @param codeCanal
         */
        getMateriel(tabletteSignature: MyWay.Services.Mobilite.ITabletteSignature, codeCanal: string): Myway.Ressource.ContractualisationParametre.IMateriel;
    }
}

declare module MyWay.Contractualisation.Ressources.ContractualisationParametre {
    class ContractualisationParametreRequestFactory {
        /**
         *
         * @param listeActes
         * @param codeCanal
         * @param codeModeMiseGestion
         * @param codeTypeMarcheDocumentEntreprise
         */
        create(contractualisationParametreInput: Myway.Ressource.ContractualisationParametre.IContractualisationParametreInput): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.TiersCorporate {
    /**
     * La classe DossierVenteConstants définit l'URL des la ressource REST DossierVente.
     * @author S0061512
     */
    class CorporateInformationConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.TiersCorporate {
    /**
     * La classe CorporateInformationRequestFactory permet de produire la requête de la ressource Corporate Information.
     * @author S0061512
     */
    class CorporateInformationRequestFactory {
        create(codeEtablissement: string, identifiantTiers: number): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.AlerteImpression {
    class AlerteImpressionConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.AlerteImpression {
    interface IDetailAlerteImpression {
        codeEtablissement: string;
        codeEntiteVente: string;
        codeCanal: string;
        libelleMessagePopUp: string;
        libelleActionReservee: string;
        indicAlerteImpressionPapier: string;
    }
}

declare module MyWay.Contractualisation.Ressources.AlerteImpression {
    class AlerteImpressionRequestFactory {
        /**
         *
         * @param codeEtablissement
         * @param codeCanal
         * @param codeEntiteVente
         */
        create(codeEtablissement: string, codeCanal: string, codeEntiteVente: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentAProduireRequestFactory {
        /**
         *
         * @param documentActe
         * @param contractualisationActe
         * @param listeDocumentActe
         */
        createDocumentAProduireFromDocumentActe(documentActe: Myway.Ressource.DocumentParametre.IDocumentActe, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, listeDocumentActe: Array<Myway.Ressource.DocumentParametre.IDocumentActe>): Myway.Ressource.ContractualisationActe.IDocumentAProduire;
        /**
         *
         * @param documentActe
         * @param listeDocumentActe
         * @param codeCanal
         */
        private getCodeModeUsage(documentActe, listeDocumentActe, codeCanal);
        /**
         *
         * @param documentActe
         * @param listeDocumentActe
         * @param codeCanal
         */
        private getCodeModeUsageBIS(documentActe, listeDocumentActe, codeCanal);
        /**
         *
         * @param contractualisationActe
         * @param documentActe
         */
        getListeSignatairesDocument(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentActe: Myway.Ressource.DocumentParametre.IDocumentActe): Array<Myway.Ressource.ContractualisationActe.ISignataireDocument>;
        /**
         *
         * @param signataireActe
         */
        getSignataireDocument(signataireActe: Myway.Ressource.ContractualisationActe.ISignataireActe): Myway.Ressource.ContractualisationActe.ISignataireDocument;
        /**
         *
         * @param signataireActe
         */
        getIdentifiantAttributaire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentActe: Myway.Ressource.DocumentParametre.IDocumentActe): string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentParametreConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentParametreRequestFactory {
        /**
         *
         * @param listeActes
         * @param codeCanal
         * @param codeModeMiseGestion
         * @param codeTypeMarcheDocumentEntreprise
         */
        create(listeActes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheDocumentEntreprise: string, codeTypeSousMarcheDocEntreprise?: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentEntreprise {
    class DocumentEntrepriseConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentEntreprise {
    class DocumentEntrepriseRequestFactory {
        create(clesRattachement: string[]): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentsAttributaire {
    class DocumentsAttributaireConstants {
        static RESSOURCE_REST_URL_DOCUMENTS_ATTRIBUTAIRE: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentsAttributaire {
    class DocumentsAttributaireFactory {
        private methode;
        private idDossierNumerique;
        private codeApplication;
        constructor(methode: MyWay.Services.MethodEnum, idDossierNumerique: string, codeApplication: string);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierVente {
    /**
     * La classe DossierVenteConstants définit l'URL des la ressource REST DossierVente.
     * @author S0061512
     */
    class DossierVenteConstants {
        static RESSOURCE_REST_URL: string;
        static RESSOURCE_REST_URL_GESTION_DOSSIER_VENTE: string;
        static TYPE_RECHERCHE: string;
        static TYPE_COMPOSITION_RELAION: string;
        static TYPE_APPELANT: string;
        static PERSONNE_SIGNATAIRE: string;
        static IINDIC_REST_DV_MYWAY: string;
        static INDIC_REST_JSON_RESUME: string;
        static INDIC_REST_ACTION_POSSIBLE: string;
        static CODE_EDS_INTERNE_PF_CONTEXTE: number;
        static STATUT_ETAPE_PART: string;
        static STATUT_ETAPE_PRO: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierVente {
    /**
     * La classe DossierVenteRequestFactory permet de produire la requête de la ressource DossierVente.
     * @author S0061512
     */
    class DossierVenteRequestFactory {
        create(recherche: Myway.Ressource.DossierVente.Recherche.IRecherche): MyWay.Services.IRequestSettings;
        /**
         *
         * @param gestionDossierVente
         * @param codeActionContexte
         * @param typeAppelant
         * @param codeCanalContexte
         * @param codeSensCommunicationContexte
         * @param indicMajCommentaire
         * @param indicMajPersonne
         * @param indicMajPartenaire
         * @param indicMajCompositionDetail
         * @param indicMajContractSignature
         * @param codeRetourAppliExterne
         * @param valeurReponseAppliExterne
         * @param indicateurEnvoiMail
         * @param indicateurExemplairePapier
         * @param modeEnvoiDocumentPapier
         * @param indicateurImpressionEffectuee
         * @param indicateurForcageVPC
         */
        createPutGestionDossierVenteRequest(gestionDossierVente: Myway.Ressource.DossierVente.GestionDossierVente.IGestionDossierVente, codeActionContexte: string, typeAppelant: string, codeCanalContexte: string, codeSensCommunicationContexte: string, indicMajCommentaire: string, indicMajPersonne: string, indicMajPartenaire: string, indicMajCompositionDetail: string, indicMajContractSignature: string, codeRetourAppliExterne: string, valeurReponseAppliExterne: string, indicateurEnvoiMail: string, indicateurExemplairePapier: string, modeEnvoiDocumentPapier: string, indicateurImpressionEffectuee: string, indicateurForcageVPC: string): MyWay.Services.IRequestSettings;
        createGetGestionDossierVenteRequest(codeEtablissement: string, identifiantDossierVente: number, codeActionContexte: string, typeAppelant: string, codeCanalContexte: string, codeEntiteVenteContexte: string, codeEdsInternePFContexte: number, indicRestCompoDetail: string, indicRestCheminAvancement: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class ActeGestionFactory {
        /**
         *
         * @param codeActeGestion
         * @param identifiantActeIDN
         * @param codeCanal
         * @param referenceOffre
         * @param codeTypeProduit
         * @param numeroEntiteTitulaire
         * @param identifiantAgent
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         * @param codeGuichet
         * @param acteGestionArcade
         * @param nodapeTitulaire
         * @param isActeGestionPrincipal
         * @param indicateurPapier
         * @param compte
         * @param codeTypeEDS
         * @param codeEtablissement
         * @param identifiantActeExterne
         * @param typeProfessionnel
         */
        createActeGestion(codeActeGestion: string, identifiantActeIDN: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, isActeGestionPrincipal: boolean, compte: string, codeTypeEDS: string, codeEtablissement: string, identifiantActeExterne: string, typeProfessionnel: string, referenceContrat: string, referenceContratCarte: string, identifiantPorteurCarte: string): IActeGestion;
        /**
         *
         * @param codeActeGestion
         * @param listeActeSecondaires
         * @param identifiantActeIDN
         * @param codeCanal
         * @param referenceOffre
         * @param codeTypeProduit
         * @param numeroEntiteTitulaire
         * @param identifiantAgent
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         * @param codeGuichet
         * @param acteGestionArcade
         * @param nodapeTitulaire
         * @param acteGestionCompteSupport
         * @param isActeGestionPrincipal
         * @param compte
         * @param codeTypeEDS
         * @param codeEtablissement
         * @param identifiantActeExterne
         * @param typeProfessionnel
         * @param referenceContrat
         * @param referenceContratCarte
         */
        createListeActeGestion(codeActeGestion: string, listeActeSecondaires: Array<string>, identifiantActeIDN: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, acteGestionCompteSupport: string, isActeGestionPrincipal: boolean, compte: string, codeTypeEDS: string, codeEtablissement: string, identifiantActeExterne: string, typeProfessionnel: string, referenceContrat: string, referenceContratCarte: string, identifiantPorteurCarte: string): Array<IActeGestion>;
        /**
         *
         * @param isActeGestionPrincipal
         */
        private getTopActeGestionPrincipal(isActeGestionPrincipal);
        /**
         * @param codeCanal
         * @param typeProfessionnel
         */
        private getModeContract(codeCanal, typeProfessionnel);
        /**
         * @param codeEtablissementFinancier
         * @param codeGuichet
         * @param identifiantDossierVente
         * @param referenceContrat
         * @param referenceContratCarte
         * @param listeTitulairesActe
         */
        private getListeReferenceExterne(codeEtablissementFinancier, codeGuichet, identifiantDossierVente, referenceContrat, referenceContratCarte, identifiantPorteurCarte);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class DossierCanalNumeriqueConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    interface IDossierCanalNumeriqueOutput {
        listeDossierCanalNumerique: Array<IDossierCanalNumerique>;
    }
    interface IDossierCanalNumerique {
        identifiantDossier: string;
    }
    interface IActeGestion {
        acteGestionClasseurClient: string;
        acteGestionArcade: string;
        topActeGestionPrincipal: string;
        idOffre: number;
        compte: string;
        codeIPR: string;
        isMAJDrcDemandee: string;
        nodapeTitulaire: number;
        codeAgent: number;
        codeEtablissement: string;
        codeClientBancaire: number;
        referenceInterneEDS: number;
        codeTypeEDS: string;
        referenceExterneEDS: number;
        codeApplication: string;
        codeGuichet: string;
        codeCanal: string;
        idIDN: string;
        modeContract: string;
        typeDRC: string;
        listeReferenceExterne: Array<IReferenceExterne>;
    }
    interface IDossierCanalNumeriqueInput {
        listeActeGestion: Array<IActeGestion>;
    }
    interface IReferenceExterne {
        identifiantReferenceExterne: string;
        typeReferenceExterne: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class DossierCanalNumeriqueRequestFactory {
        private methode;
        private dossierCanalNumeriqueInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierCanalNumeriqueInput: IDossierCanalNumeriqueInput);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class CodeEvenementMetierFactory {
        /**
         *
         * @param codeActeGestion
         */
        createCodeEvenementMetierFromCodeActeGestion(codeActeGestion: string): Myway.Ressource.DossierContrat.ICodeEvenementMetier;
        createListeCodeEvenementMetierFromListeActeSecondaires(listeActeSecondaires: Array<string>): Array<Myway.Ressource.DossierContrat.ICodeEvenementMetier>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratFactory {
        createDossierContratFromActeGestion(acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string): Myway.Ressource.DossierContrat.IDossierContratInput;
        /**
         *
         * @param codeEtablissementFinancier
         * @param codeGuichet
         * @param identifiantDossierVente
         * @param referenceContrat
         * @param referenceContratCarte
         * @param listeTitulairesActe
         */
        private getListeReferenceExterne(codeEtablissementFinancier, codeGuichet, identifiantDossierVente, referenceContrat, referenceContratCarte, identifiantPorteurCarte);
        /**
         *
         * @param acteGestion
         * @param listeTitulairesActe
         */
        private getIdentifiantContrat(acteGestion, listeTitulairesActe);
        private getIdentifiantContratDossierNumerique(dossierNumerique);
        /**
         *
         * @param acteGestion
         * @param listeTitulairesActe
         */
        private getIdentifiantContratActeReprise(acteReprise, listeTitulairesActe);
        createDossierContratFromActeReprise(acteReprise: IActeReprise, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string): Myway.Ressource.DossierContrat.IDossierContratInput;
        createDossierContratFromDossierNumerique(dossierNumerique: IDossierNumerique, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string): Myway.Ressource.DossierContrat.IDossierContratInput;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratRequestFactory {
        private methode;
        private dossierContratInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierContratInput: Myway.Ressource.DossierContrat.IDossierContratInput);
        /**
         *
         */
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContratServi {
    class DossierContratServiConstants {
        static RESSOURCE_REST_URL: string;
        static ACTE_PRINCIPAL: string;
        static ACTE_SECONDAIRE: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContratServi {
    class DossierContratServiRequestFactory {
        private methode;
        private dossierContratServiceInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierContratServiceInput: Myway.Ressource.DossierContratServi.IDossierContratServiceInput);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContratServi {
    enum TypeActeEnum {
        PRINCIPAL = 1,
        SECONDAIRE = 0,
    }
    class DossierContratServiceInputFactory {
        private static CODE_APPLICATION;
        private static CREATION_DOSSIER;
        /**
         *
         * @param acteGestion
         * @param indicateurPapier
         * @param codeEtablissementFinancier
         * @param codeModeContractualisation
         * @param codeGuichet
         */
        createDossierContratServiceInputFromActe(acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise, indicateurPapier: boolean, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string, identifiantPorteurCarte: string, documents: Array<Myway.Ressource.DossierNumerique.V3.IDocumentAttributaire>): Myway.Ressource.DossierContratServi.IDossierContratServiceInput;
        createDossierContratServiceInputFromDossierNumerique(dossierNumerique: IDossierNumerique, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string, identifiantPorteurCarte: string, codeCanal: string, listeDocuments: Array<Myway.Ressource.DossierContratServi.IDocuments>): Myway.Ressource.DossierContratServi.IDossierContratServiceInput;
        private getListeActeFromDossierNumerique(dossierNumerique, codeEtablissementFinancier, codeGuichet);
        /**
         *
         * @param dossierNumerique
         * @param codeEtablissementFinancier
         * @param codeGuichet
         */
        private getIdentifiantContratFromDossierNumerique(dossierNumerique, codeEtablissementFinancier, codeGuichet);
        /**
         *
         * @param acteGestion
         */
        private getListeActe(acteGestion, codeEtablissementFinancier, codeGuichet);
        private getIdentifiantContratFromActeGestion(acteGestion, codeEtablissementFinancier, codeGuichet);
        /**
         *
         * @param acteGestion
         * @param codeEtablissementFinancier
         * @param codeGuichet
         */
        private getRice(referenceContrat, codeEtablissementFinancier, codeGuichet);
        private getAgentEds(identifiantAgent, referenceEDSExterneClient);
        /**
         *
         * @param numeroEntiteTitulaire
         */
        getEntiteTitulaire(numeroEntiteTitulaire: string): number;
        /**
         *
         * @param codeActe
         * @param actePrincipal
         * @param codeDossier
         * @param idContrat
         * @param codeModeCreationDossier
         * @param idRegroupement
         * @param idOffre
         * @param numeroEntiteTitulaire
         * @param numeroPersonne
         * @param modeMiseAJourDossier
         */
        private getActe(codeActe, actePrincipal, codeDossier, idContrat, idOffre, numeroEntiteTitulaire, numeroPersonne, numeroDossierVente);
        private getListeReferenceExterne(codeEtablissementFinancier, codeGuichet, identifiantDossierVente, referenceContrat, referenceContratCarte, identifiantPorteurCarte, contratExterne?);
        private getListeDocumentsDossierContratServi(codeActe, documents);
        /**
         *
         * @param listeTitulairesActe
         */
        private getIdentifiantPersonne(listeTitulairesActe);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ActeFactory {
        /**
         *
         * @param contractualisationActe
         */
        createActeFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeModeContractualisation: string): Myway.Ressource.DossierNumerique.V3.IActe;
        /**
         *
         * @param contractualisationActe
         */
        private getReferenceContrat(contractualisationActe);
        /**
         *
         * @param acteGestion
         */
        private isActeGestionBPCEA(codeActeGestion);
        /**
         * Modif ALB 19/08/2019 pour    , pas de set de date de fin de validité par la spa.contract à
         * 1 an pour les actes Impulse, Izivente et Epargne.
         * Ainsi dans IDN, la date de fin de validité est celle établie par le producteur
         * Creation d'une autre fonction car isActeGestionBPCEA est aussi utilisé pour récupérer le code mail signataire
         * Pas propre mais je n'ai pas trouvé mieux pour identifier les actes Impulse, Izivente et Epargne'
         * @param acteGestion
         */
        private isActeGestionWithDateFinValiditeToBeReplaced(codeActeGestion);
        /**
         * Modif ALB 19/08/2019 pour INC001532187,
         * Pas propre mais je n'ai pas trouvé mieux pour identifier les actes Epargne'
         * pour les épargnes, la date de fin de validité doit être à 2 mois, sinon on a un soucis avec les documents
         * @param acteGestion
         */
        private isActeGestionEpargne(libelleActeGestion);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionMSI(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getLibelleMotifNonEligibilite(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionPJI(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionContrat(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionCRE(contractualisationActe);
        private getCodeMailSignataire(contractualisationActe);
        private getDateFinValiditeActe(typeProfessionnel, libelleActe);
        private getDateFinValiditePapier();
        private getTopFAFGXML();
        private getListeReferenceActe(referenceOffre, referenceContratCarte);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class AnnulationDossierFactory {
        /**
         *
         * @param idActeIdn
         * @param codeEtablissementFinancier
         * @param codeApplication
         */
        create(idActeIdn: string, codeEtablissementFinancier: string, codeApplication: string): Myway.Ressource.DossierNumerique.IAnnulationDossier;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ComportementSignatureDocumentFactory {
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         */
        createComportementSignatureDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.IComportementSignatureDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ContenuDocumentAlternatifFactory {
        /**
         *
         * @param documentAProduire
         */
        createContenuDocumentAlternatifFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.IContenuDocumentAlternatif;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ContenuDocumentFactory {
        /**
         *
         * @param documentAProduire
         * @param codeEtablissementFinancier
         */
        createContenuDocumentFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Myway.Ressource.DossierNumerique.V3.IContenuDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class DocumentFactory {
        private static CODE_ACTE_GESTION_CSEP;
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         * @param codeEtablissementFinancier
         */
        createDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Myway.Ressource.DossierNumerique.V3.IDocument;
        /**
         *
         * @param contractualisationActe
         * @param codeEtablissementFinancier
         */
        createListeDocumentFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeEtablissementFinancier: string): Array<Myway.Ressource.DossierNumerique.V3.IDocument>;
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         */
        private getReferenceDocumentProducteur(contractualisationActe, documentAProduire);
        private getReferenceDocumentProducteurContractuel(identifiantAgent, indice);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class DossierNumeriqueFactory {
        /**
         *
         * @param contractualisationActe
         * @param codeEtablissementFinancier
         * @param codeApplication
         */
        createDossierNumeriqueFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeEtablissementFinancier: string, codeApplication: string, codeModeContractualisation: string): Myway.Ressource.DossierNumerique.V3.IDossierNumerique;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxBinaireFactory {
        /**
         *
         */
        createFluxBinaireFromDocumentAProduire(): Myway.Ressource.DossierNumerique.V3.IFluxBinaire;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxDocPartageICGFactory {
        /**
         *
         * @param documentAProduire
         */
        createFluxDocPartageICG(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.IFluxDocPartageICG;
        /**
         *
         * @param documentAProduire
         */
        private getReferencePartage(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxFilenetFactory {
        private static GED_DOCUMENT_CCSE;
        private static IDENTIFIANT_COMPOSANT_APPLICATIF;
        /**
         *
         * @param documentAProduire
         * @param codeEtablissementFinancier
         */
        createFluxFilenet(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Myway.Ressource.DossierNumerique.V3.IFluxFilenet;
        /**
         *
         * @param documentAProduire
         * @param codeEtablissementFinancier
         */
        private getIdentifiantGEDDocument(documentAProduire, codeEtablissementFinancier);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxGCEDocFactory {
        /**
         *
         * @param nomModeleGcedoc
         * @param fluxXmlGcedoc
         */
        createFluxGCEDoc(nomModeleGcedoc: string, fluxXmlGcedoc: string): Myway.Ressource.DossierNumerique.V3.IFluxGCEDoc;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxGedTemporaireFactory {
        private static IDENTIFIANT_COMPOSANT_APPLICATIF;
        /**
         *
         * @param documentAProduire
         */
        createFluxGedTemporaireFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.IFluxGedTemporaire;
        /**
         *
         * @param documentAProduire
         */
        private getIdentifiantDocumentTemporaire(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxLignesFactory {
        /**
         *
         */
        createFluxLignesFromDocumentAProduire(): Myway.Ressource.DossierNumerique.V3.IFluxLignes;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxXHTMLFactory {
        /**
         *
         */
        createFluxXHTMLFromDocumentAProduire(): Myway.Ressource.DossierNumerique.V3.IFluxXHTML;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ImpressionDocFactory {
        /**
         *
         * @param documentAProduire
         */
        createImpressionDocFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.IImpressionDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class InfoDocumentFactory {
        private static LABEL_DOCUMENT_CCSE;
        private static LIBELLE_DESCRIPTION_DOCUMENT_IDN_CCSE;
        private static TYPE_MIME_DOCUMENT;
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         */
        createInfoDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.IInfoDocument;
        /**
         *
         * @param documentAProduire
         */
        private getLabelDocument(documentAProduire);
        /**
         *
         * @param documentAProduire
         */
        private getLibelleDescriptionDocumentIDN(documentAProduire);
        /**
         *
         * @param documentAProduire
         */
        private getUrlDocument(documentAProduire);
        /**
         *
         * @param documentAProduire
         * @param codeCanal
         */
        private getModeUsageDocument(documentAProduire, codeCanal);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class OperationFinanciereFactory {
        /**
         *
         * @param operationFinanciere
         */
        createOperationFinanciereFromContractualisationActe(operationFinanciere: Myway.Ressource.ContractualisationActe.IOperationFinanciere): Myway.Ressource.DossierNumerique.V3.IOperationFinanciere;
        /**
         *
         * @param listeOperationFinanciere
         */
        createListeOperationFinanciere(listeOperationFinanciere: Array<Myway.Ressource.ContractualisationActe.IOperationFinanciere>): Array<Myway.Ressource.DossierNumerique.V3.IOperationFinanciere>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class OptionSignataireFactory {
        createOptionSignataireFromDocumentAProduire(optionSignataire: Myway.Ressource.ContractualisationActe.IOptionSignataire): Myway.Ressource.DossierNumerique.V3.IOptionSignataire;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ReferenceActeFactory {
        static TYPE_REFERENCE_ACTE_E01: string;
        static TYPE_REFERENCE_ACTE_E02: string;
        createReferenceActe(typeReferenceActe: string, valReferenceActe: string): Myway.Ressource.DossierNumerique.V3.IReferenceActe;
        createListeReferenceActe(typeReferenceActe: string, valReferenceActe: string): Array<Myway.Ressource.DossierNumerique.V3.IReferenceActe>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignataireDocumentFactory {
        private static NUMERO_AFFICHAGE_DOC_ENTREPRISE;
        createSignataireDocumentFromSignataireDocument(signataireDocument: Myway.Ressource.ContractualisationActe.ISignataireDocument, numeroAffichageDocument: number, codeIndicateurSignature: boolean, numeroPersonne: string): Myway.Ressource.DossierNumerique.V3.ISignataireDocument;
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         */
        createListeSignataireDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Array<Myway.Ressource.DossierNumerique.V3.ISignataireDocument>;
        /**
         *
         * @param signataireDocument
         * @param listeSignataireActe
         */
        private getNumeroSignataireDocument(signataireDocument, listeSignataireActe);
        private getCodeIndicateurSignature(documentAProduire);
        private getNumeroAffichageDocument(contractualisationActe, documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignataireFactory {
        createSignataireFromSignataireActe(signataireActe: Myway.Ressource.ContractualisationActe.ISignataireActe): Myway.Ressource.DossierNumerique.V3.ISignataire;
        createListeSignataireFromListeSignataireeActe(listeSignataireActe: Array<Myway.Ressource.ContractualisationActe.ISignataireActe>): Array<Myway.Ressource.DossierNumerique.V3.ISignataire>;
        private getCodeTypeSignr(codeTypeSignataire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignatureClientFactory {
        /**
         *
         * @param documentAProduire
         */
        createSignatureClientFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.ISignatureClient;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignatureEntitetFactory {
        createSignatureEntiteFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.ISignatureEntite;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class StockageDocumentFactory {
        createStockageDocumentFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.V3.IStockageDocument;
        private getCodeTypeFichier(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SuiviActeFactory {
        /**
         *
         * @param contractualisationActe
         */
        createSuiviActeFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): Myway.Ressource.DossierNumerique.V3.ISuiviActe;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class TitulaireFactory {
        createTitulaireFromTitulaireActe(titulaireActe: Myway.Ressource.ContractualisationActe.ITitulaireActe): Myway.Ressource.DossierNumerique.V3.ITitulaire;
        createListeTitulaireFromListeTitulaireActe(listeTitulaireActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>): Array<Myway.Ressource.DossierNumerique.V3.ITitulaire>;
    }
}

declare module MyWay.Contractualisation.Ressources.InitierSignature {
    class InitierSignatureConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.InitierSignature {
    class InitierSignatureFactory {
        private methode;
        private initierSignatureInput;
        constructor(methode: MyWay.Services.MethodEnum, initierSignatureInput: Myway.Ressource.DossierNumerique.IInitierSignatureInput);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.OffresEtab {
    class OffresEtabConstants {
        static RESSOURCE_REST_URL: string;
        static FLAG_VPC: string;
        static FLAG_MEGI: string;
        static FLAG_ALL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.OffresEtab {
    class OffresEtabFactory {
        create(flagvpc: boolean, flagmegi: boolean, codeCanal: string, dateStandard: Date, idDossierVente: number): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.ParametreEtab {
    class ParametreEtabConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.ParametreEtab {
    class ParametreEtabFactory {
        create(codeEtablissement: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.Tiers {
    /**
     * La classe DossierVenteConstants définit l'URL des la ressource REST DossierVente.
     * @author S0061512
     */
    class ParticulierInformationConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.Tiers {
    /**
     * La classe ParticulierInformationRequestFactory permet de produire la requête de la ressource Particulier Information.
     * @author S0061512
     */
    class ParticulierInformationRequestFactory {
        create(codeEtablissement: string, idSignataire: number): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.RechercheProduitET {
    class RechercheProduitETConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.RechercheProduitET {
    class RechercheProduitETRequestFactory {
        private methode;
        private codeAgent;
        private codeEtablissement;
        private numeroEntiteTitulaire;
        private codeGuichetInterbancaire;
        private codeProduit;
        private numeroCompte;
        constructor(methode: MyWay.Services.MethodEnum, codeAgent: string, codeEtablissement: string, numeroEntiteTitulaire: string, codeGuichetInterbancaire: string, codeProduit: string, numeroCompte: string);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.ReglesSignature {
    /**
     * La classe ReglesSignatureConstants définit l'URL des la ressource REST reglesSignature.
     * @author S0006664
     */
    class ReglesSignatureConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.ReglesSignature {
    /**
     * La classe ReglesSignatureRequestFactory permet de produire la requête de la ressource ReglesSignature.
     * @author S0006664
     */
    class ReglesSignatureRequestFactory {
        create(indicateurModeAppelQr: string, codeActeGestion: string, listeCodeModeContractualisation: Array<string>, codeRubriqueRegle: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.RemiseDocumentsSignes {
    class RemiseDocumentsSignesConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.RemiseDocumentsSignes {
    class RemiseDocumentsSignesRequestFactory {
        /**
         *
         * @param codeApplication
         * @param listeIdActeIdn
         * @param codeModeContractualisation
         * @param identifiantSignataire
         * @param urlRetourIcg
         * @param presenceTablette
         */
        createPostRemiseDocumentsSignesRequest(viaMsi: boolean, listeIdDossierNumerique: Array<string>, viaEmailPerso: boolean, emailSignataire: string, retournerDocuments: boolean, codeApplication: string, idTransactionIcg: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.SessionSignature {
    class SessionSignatureConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.SessionSignature {
    class SessionSignatureRequestFactory {
        /**
         *
         * @param codeApplication
         * @param listeIdActeIdn
         * @param codeModeContractualisation
         * @param identifiantSignataire
         * @param urlRetourIcg
         * @param presenceTablette
         */
        createPostSessionSignatureRequest(codeApplication: string, listeIdActeIdn: Array<string>, codeModeContractualisation: string, identifiantSignataire: string, urlRetourIcg: string, presenceTablette: boolean): MyWay.Services.IRequestSettings;
        /**
         *
         * @param sessionSignature
         */
        createDeleteSessionSignatureRequest(codeApplication: string, idTransactionIcg: string, listeIdDossierNumerique: Array<string>): MyWay.Services.IRequestSettings;
        /**
         *
         * @param sessionSignature
         */
        createPutSessionSignatureRequest(sessionSignature: Myway.Ressource.DossierNumerique.ISessionSignature): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.TiersNoyau {
    /**
     * La classe IdentificationConstants définit l'URI de la ressource REST tiersNoyau.
     * @author S0076222
     */
    class TiersNoyauConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.TiersNoyau {
    /**
     * La classe IdentificationRequestFactory permet de produire la requête de la ressource identification.
     * @author S0076222
     */
    class TiersNoyauRequestFactory {
        constructor();
        create(codeEtablissement: string, identifiantPersonne: number): MyWay.Services.IRequestSettings;
    }
}
