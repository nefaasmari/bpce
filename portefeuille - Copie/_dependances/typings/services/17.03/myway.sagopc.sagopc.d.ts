
declare module Myway.Sagopc {
    var app: ng.IModule;
}

declare module Myway.Sagopc {
    class DefautControleur {
        private $q;
        private $timeout;
        private logger;
        private sagopcService;
        private eligibiliteService;
        private gcedocService;
        /**
         * Contexte de l'application
         */
        context: IApplicationContext;
        /**
         * Message d'erreur (cible utilisateur)
         */
        messageErreur: string;
        /**
         * Message d'erreur technique
         */
        messageErreurTechnique: string;
        /**
         * Indicateur d'affichage de l'erreur technique
         */
        afficherErreurTechnique: boolean;
        /**
         * Indicateur d'affichage du bouton Abandonner
         */
        showAbandonner: boolean;
        /**
         * Bascule vers la signature papier
         */
        basculePapierPromise: ng.IPromise<void>;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, logger: LoggerService, sagopcService: SagopcService, eligibiliteService: EligibiliteService, gcedocService: GcedocService);
        /**
         * Quitter le processus en erreur
         */
        abandonner(): void;
        /**
         * Basculer vers la signature papier
         */
        basculerPapier(): void;
        /**
         * Processus SAGOPC dont l'objectif est de faire une signature électronique en appellant IDN
         * ou imprimer le document en cas de signature papier.
         */
        private startProcess();
        private getApplicationContexte();
        private startProcessSignatureElectronique();
        private startProcessSignaturePapier();
        /**
         * Finalisation de la contractualisation (post-IDN).
         */
        private finaliserContractualisation();
        /**
         * Afficher une erreur bloquante
         */
        private afficherErreurBloquante(erreur);
    }
}

declare module Myway.Sagopc.SAG_SIKGGCE_BordTMF {
    function createDocument(context: IApplicationContext): SAG_SIKGGCE_BordTMF_Myway;
    function createImpressionParams(context: IApplicationContext): SAG_SIKGGCE_BordTMF_MywayImpressionParams;
    function createArchiverParams(context: IApplicationContext): SAG_SIKGGCE_BordTMF_MywayArchiverParams;
    function createArchiverImpressionParams(context: IApplicationContext): SAG_SIKGGCE_BordTMF_MywayArchiverImpressionParams;
}

declare module Myway.Sagopc {
    class GcedocFactory {
        static getGenerationParams(infosDocument: IInfosDocumentGcedoc, identifiantAttributaire: string, intituleAttributaire: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.GenerationParams;
        static getGenerationImpressionParams(infosDocument: IInfosDocumentGcedoc, identifiantAttributaire: string, intituleAttributaire: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.GenerationImpressionParams;
        static getParametresImpressionOptionnels(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.ParametresImpressionOptionnels;
        static getParametresGenerationOptionnels(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.ParametresGenerationOptionnels;
        static getParametresGenerationImpressionOptionnels(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        static getParametreActiveX(): MyWay.Services.Impression.ParametreActiveX;
        static getParametresArchivage(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.Archivage;
        static getGceContextSoapHeader(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.GceContextSoapHeader;
        static getQuestionsCreationDocument(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.AQstnCreerDoc;
        static getDonneesContextuelles(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.DonnCntx;
        static getDocument(): MyWay.Services.Impression.Document;
        static getEnteteGenerique(authentificationInfos: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, referenceActe: string): Editique.Generique.GENERIC_ENTETEETS[];
        static getReferenceIdentite(context: IApplicationContext): string;
    }
}

declare module Myway.Sagopc {
    /**
     * Regroupe certaines informations techniques d'un document GCEDOC
     */
    interface IInfosDocumentGcedoc {
        nomFichier: string;
        sousRepModele: string;
        /**
         * Identifiant de l'application à l'origine de la demande
         */
        idApplicationOrigineDemande: string;
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
    }
    /**
     * Données GCEDOC
     */
    interface IDonneesGCEDOC {
        /**
         * Données d'impression
         */
        data: any;
        /**
         * Paramètres d'impression
         */
        params: MyWay.Services.Impression.GenerationImpressionParams;
    }
}

declare module Myway.Sagopc {
    /**
     * Constantes générales de l'application
     */
    class Constants {
        /**
         * Code application pour dossier numérique
         */
        static CODE_APPLICATION_DOSSIER_NUMERIQUE: string;
        /**
         * Code type signataire
         */
        static CODE_TYPE_SIGNATAIRE: string;
        /**
         * Structure par défaut d'identification du signataire
         */
        static IDENTIFICATION_SIGNATAIRE_DEFAUT: IIdentificationSignataire;
        static DONNEES_STOCKAGE_DOCUMENT_CODE_TYPE_FICHIER_XML: string;
    }
    /**
     * Codes d'entrée LISA
     */
    enum LisaCodeEntreeEnum {
        CONTRACTUALISATION = 1,
        FINALISATION_CONTRACTUALISATION = 2,
    }
    /**
     * Codes de sortie LISA
     */
    enum LisaCodeSortieEnum {
        FIN_NORMAL = 1,
        APPEL_IDN = 2,
        ERREUR = 4,
    }
    /**
     * Clés du contexte pour le débranchement IDN
     */
    class IdnInputContextKey {
        static ID_IDN: string;
        static ID_MAT: string;
        static CAISSE: string;
        static AGENT: string;
        static TOP_FAFG_XML: string;
    }
    /**
     * Clés du contexte pour le débranchement IDN
     */
    class IdnOutputContextKey {
        static MODE_SIGNATURE: string;
    }
    /**
     * Type de document à stocker
     */
    enum TypeDocumentEnum {
        PDF = 0,
        XML = 1,
    }
    /**
     * Sexe
     */
    enum SexeEnum {
        HOMME = 0,
        FEMME = 1,
    }
    /**
     * Modes de contractualisation
     */
    class ModeSignatureEnum {
        static ELECTRONIQUE: string;
        static PAPIER: string;
    }
    /**
     * Modes de contractualisation
     */
    class CodeModeContractualisationEnum {
        static FAFP: string;
        static FAFG: string;
        static FAFGXML: string;
    }
    /**
     * Codes canaux
     */
    class CodeCanalEnum {
        static FACE_A_FACE: string;
        static TELEPHONE: string;
        static VISIOCONFERENCE: string;
    }
    /**
     * Type de bordereau à générer/imprimer
     */
    class TypeBordereauEnum {
        static OPERATIONS_FINANCIERES: string;
        static REMISE_CARTE_TEMPO: string;
        static REMISE_CARTE_BANCAIRE: string;
        static VISITE_COFFRE: string;
    }
    /**
     * Type de référence acte
     */
    class TypeReferenceActeEnum {
        static TYPE_REFERENCE_ACTE_E01: string;
        static TYPE_REFERENCE_ACTE_E02: string;
    }
    /**
     * Code mode usage
     */
    enum CodeModeUsageEnum {
        FAFP_FAFG = 0,
        FAFP = 1,
        FAFG = 2,
    }
    /**
     * Constantes du flux filenet
     */
    class DossierNumeriqueConstants {
        static TYPE_MIME_DOCUMENT_PDF: string;
        static TYPE_MIME_DOCUMENT_XML: string;
        static TYPE_DOCUMENT_CCSE: string;
        static GED_DOCUMENT_CCSE: string;
        static LABEL_DOCUMENT_CCSE: string;
        static LIBELLE_DESCRIPTION_DOCUMENT_IDN_CCSE: string;
        static DEFAULT_CODE_TYPE_SIGNATAIRE: string;
    }
    /**
     * Codes de comportement du document pour l'acte de gestion, lors de la contractualisation  électronique via l'ICG
     */
    class CodeActionSignatureDocumentEnum {
        static DOCUMENT_A_SIGNER: string;
        static A_PRESENTER_AU_CLIENT: string;
        static RESERVE_CAISSE: string;
    }
}

declare module Myway.Sagopc {
    /**
     * Clés du contexte d'entrée (LISA)
     */
    class ApplicationInputContextKey {
        /**
         * Contient toutes les données permettant de démarrer le processus
         */
        static DONNEES_SAGOPC: string;
        /**
         * Contient toutes les données permettant de finaliser la contractualisation
         */
        static DONNEES_FIN_CONTRACTUALISATION: string;
    }
    /**
     * Contient toutes les données du processus appelant nécessaires pour les traitements de la SAGOPC
     */
    interface IApplicationInputContext {
        identifiantPersonne: number;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        acte: IActeGestion;
        /**
         * Type de bordereau
         */
        typeBordereau: TypeBordereauEnum;
        /**
         * Données spécifiques au bordereau
         */
        donneesBordereau: IContexteCarteTempo | CarteBancaire.IContexte;
    }
    /**
     * Contient les données de fin de contractualisation
     */
    interface IFinContratualisationContext {
        /**
         * Mode de signature (exploité par ModeSignatureEnum)
         */
        modeSignature: string;
        /**
         * Identification du signataire
         */
        identificationSignataire: IIdentificationSignataire;
    }
    /**
     * Contexte de l'application (basé sur le contexte d'entrée puis enrichi au fil des traitements)
     */
    interface IApplicationContext extends IApplicationInputContext {
        /**
         * Données d'authentification
         */
        authentificationInfos: MyWay.Services.Context.AuthentificationInfo;
        /**
         * Paramètres comptables
         */
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        /**
         * Indicateur de signature électronique
         */
        signatureElectronique: boolean;
        /**
         * Habilitation à l'identification du signataire (saisie de la référence d'identité)
         */
        habilitations: Habilitations;
        /**
         * Type de document (PDF, XML)
         */
        typeDocument: TypeDocumentEnum;
        /**
         * Liste des matériels de signature (tablettes)
         */
        materiels: MyWay.Services.Mobilite.ITabletteSignature[];
        /**
         * Identification du signataire
         */
        identificationSignataire?: IIdentificationSignataire;
        /**
         * Document acte (la SAGOPC ne gère qu'un seul document)
         */
        documentActe?: IDocumentActe;
        /**
         * Flux binaire du bordereau (utilisé lorsque le PDF n'est pas stocké)
         */
        fluxBinaireBordereau?: string;
        /**
         * Décrit l'éligibilité et le paramétrage de contractualisation de l'acte de gestion
         */
        contractualisationParametre?: Myway.Ressource.ContractualisationParametre.IContractualisationParametre;
        /**
         * Identifiant IDN
         */
        identifiantActeIDN?: string;
    }
    /**
     * Document Acte
     * Cette structure regroupe tous les documents identiques en un seul.
     * Les modes de contractualisation (papier ou électronique) sont alors identifiés par codeModeUsage.
     */
    interface IDocumentActe extends Myway.Ressource.DocumentParametre.IDocumentActe {
        /**
         * CodeModeUsage:
         * - 0 : FAFE et FAFP
         * - 1 : FAFP
         * - 2 : FAFE
         */
        codeModeUsage?: number;
    }
    /**
     * Informations relatives au signataire (issues de l'écran Identification du signataire)
     */
    interface IIdentificationSignataire {
        identifie: boolean;
        referenceIdentite: string;
    }
    interface IOperationFinanciere {
        /**
         * Numéro de personne (NODAP)
         */
        numeroPersonne: string;
        /**
         * Montant de l'opération
         */
        montantOperation: number;
        /**
         * Code devise de l'opération
         */
        codeDevise: string;
        /**
         * Libellé du client
         */
        libelleClientOperation: string;
        /**
         * Libellé du compte
         */
        libelleCompteOperation: string;
        /**
         * Date d'opération
         */
        dateOperation: Date;
        /**
         * Nature de l'opération
         */
        natureOperation: string;
    }
    interface ISignataireActe {
        /**
         * Identifiant personne
         */
        numeroPersonne: string;
        /**
         * Adresse mail du signataire
         */
        adresseMailSign: string;
        /**
         * Rang signataire
         */
        rangSign: number;
    }
    interface IActeGestion {
        /**
         * Libellé acte de gestion
         */
        libelleActe: string;
        /**
         * Code de l'acte de gestion identifié dans référentiel des Actes (REFACTE)
         */
        codeActeGestion: string;
        /**
         * Code canal de vente
         */
        codeCanal: string;
        /**
         * Code du mode de mise en gestion du P/S.
         * MEGI - mise en gestion immédiate
         * VPC - vente par correspondance
         */
        codeModeMiseGestion: string;
        listeTitulairesActe: Myway.Ressource.ContractualisationActe.ITitulaireActe[];
        listeOperationFinanciere: IOperationFinanciere[];
        listeSignatairesActe: ISignataireActe[];
    }
}

declare module Myway.Sagopc {
    /**
     * Liste des codes habilitations utilisés par la sag-opc
     */
    class CodeHabilitation {
        /**
         * Identification signataire
         */
        static SHEQ23: string;
        static list(): string[];
    }
    /**
     * Conteneur pour les habilitations.
     */
    class Habilitations {
        private habilitations;
        /**
         * Identification du signataire (saisie de la référence d'identité)
         */
        identificationSignataire: boolean;
        constructor(habilitations: {
            [code: string]: boolean;
        });
    }
}

declare module Myway.Sagopc {
    class MessageErreur {
        static INPUT_CONTEXT_NOT_FOUND: string;
        static INPUT_CONTEXT_INVALID: string;
        static CONTEXT: string;
        static TECHNICAL_ERROR: string;
        static ELIGIBILITE_ERROR: string;
        static DOCUMENT_PARAMETRE_ERROR: string;
        static DOSSIER_NUMERIQUE_ERROR: string;
        static GENERER_ERROR: string;
        static GENERER_IMPRIMER_ERROR: string;
        static LISA_ERROR: string;
        static SIGNATURE_PAPIER: string;
        static SIGNATURE_ELECTRONIQUE: string;
        messageAffiche: string;
        messageLog: string;
        action: string;
        child: MessageErreur;
        constructor(messageAffiche: string, erreur?: any, action?: string, child?: MessageErreur);
    }
}

declare module Myway.Sagopc {
    /**
     * Service de manipulation des binaires.
     */
    class BinaryUtils {
        /**
         * Renvoie une chaine encodée en base64 à partir de n'importe quel type
         */
        static toBinary(data: any): string;
        /**
         * Renvoie un objet à partir d'une chaine encodée en base64
         */
        static binaryToObject<T>(data: string): T;
        /**
         * Renvoie une chaine à partir d'une chaine encodée en base64
         */
        static binaryToString(data: string): string;
    }
}

declare module Myway.Sagopc {
    /**
     * Service de manipulation des dates.
     */
    class DateUtils {
        static reISO: RegExp;
        static dateParser(key: any, value: any): any;
    }
}

declare module Myway.Sagopc {
    class DocumentFactory {
        private static numeroAffichageDocumentEntreprise;
        static createDocument(context: IApplicationContext): Myway.Ressource.DossierNumerique.IDocument;
        private static createContenuDocument(documentActe, codeEtablissementFinancier, fluxBinaireBordereau);
        private static createFluxBinaire(fluxBinaireBordereau);
        private static createFluxFilenet(documentActe, codeEtablissement);
        private static createFluxGedTemporaire(documentActe);
        private static createFluxDocPartageICG(documentActe);
        private static createComportementSignatureDocument(context);
        private static createInfoDocument(context);
        private static getLabelDocument(documentActe);
        private static getLibelleDescriptionDocumentIDN(documentActe);
        private static getModeUsageDocument(documentActe);
        private static createListeSignataireDocument(documentActe, signataires);
        private static getNumeroAffichageDocument(documentActe);
        private static getDonneesDocumentAlternatif(context);
        private static getDonneesDocumentAlternatifRemiseCarte(context);
    }
}

declare module Myway.Sagopc {
    class DossierFactory {
        static createDossierFromContext(context: IApplicationContext): Myway.Ressource.DossierNumerique.IDossierNumerique;
        private static createActe(context);
        private static createOperationsFinancieres(operations);
        private static createReferencesActe(acte);
    }
}

declare module Myway.Sagopc {
    /**
     * Ce service regroupe tous les traitements liés aux tests d'éligibilité à la SAG.
     */
    class EligibiliteService {
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected logger: LoggerService;
        protected ressourcesService: RessourcesService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, logger: LoggerService, ressourcesService: RessourcesService);
        /**
         * Contrôler l'éligibilité à la signature électronique.
         * Le contexte de l'application est mis à jour pendant les contrôles.
         * La promesse est résolue dans tous les cas car l'inéligibilité n'est pas bloquante
         */
        controlerEligibiliteSag(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Contrôler le nombre de signataires.
         * Les bordereaux d’opérations courantes ne peuvent être signés électroniquement que par un seul signataire.
         * La promesse est résolue si contrôle OK. Sinon, elle est rejetée avec un objet contenant l'erreur.
         */
        controlerNombreSignataires(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Contrôler la table SU1P.
         * Ce contrôle permet de savoir s'il est possible de faire une signature électronique, et si oui, si on devra rechercher la sensibilité du bordereau
         * La promesse est résolue si contrôle OK. Sinon, elle est rejetée avec un objet contenant l'erreur.
         */
        controlerTableSU1P(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Contrôler la présence du matériel de signature
         * La promesse est résolue si contrôle OK. Sinon, elle est rejetée avec un objet contenant l'erreur.
         */
        controlerPresenceMateriel(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Tester éligibilité via la ressource contractualisationParametre
         * La promesse est résolue si test OK. Sinon, elle est rejetée avec un objet contenant l'erreur.
         */
        testerEligibilite(context: IApplicationContext): ng.IPromise<void>;
    }
}

declare module Myway.Sagopc {
    class GcedocService {
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected logger: LoggerService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, logger: LoggerService);
        /**
         * Renvoie un flux binaire à partir des données du bordereau. Ce flux est destiné à être stocké dans la GED.
         */
        getDonneesGCEDOC(context: IApplicationContext): IDonneesGCEDOC;
        /**
         * Imprime un bordereau à partir des données GCEDOC
         */
        imprimer(donnees: IDonneesGCEDOC): ng.IPromise<void>;
        /**
         * Génère un bordereau et renvoie l'identifiant d'archivage en GED
         */
        generer(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Génère et imprime un bordereau
         */
        genererImprimer(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Renvoie les paramètres d'impression
         */
        getParametresImpression(context: IApplicationContext): MyWay.Services.Impression.GenerationImpressionParams;
        /**
         * Renvoie les paramètres de génération et impression
         */
        getParametresGeneration(context: IApplicationContext): MyWay.Services.Impression.GenerationParams;
        /**
         * Renvoie les données à envoyer pour l'impression
         */
        getDonneesImpression(context: IApplicationContext): any;
        /**
         * Renvoie les données de la remise de carte bancaire
         */
        private getDonneesCarteBancaire(context);
    }
}

declare module Myway.Sagopc {
    /**
     * Service identificationSignataire
     */
    class IdentificationSignataireService {
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected logger: LoggerService;
        protected modalService: MyWay.UI.ModalService;
        showFormulaire: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, logger: LoggerService, modalService: MyWay.UI.ModalService);
        getIdentificationSignataire(context: IApplicationContext): ng.IPromise<void>;
    }
}

declare module Myway.Sagopc {
    /**
     * Service lié aux loggers
     */
    class LoggerService {
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        private LEVEL_ALL;
        private LEVEL_NONE;
        private LEVEL_ERROR;
        private LEVEL_WARNING;
        private LEVEL_INFO;
        private LEVEL_TRACE;
        /**
         * Préfixe pour les messages de log, ce qui permet de les regrouper par un filtre dans une console.
         */
        private CONSOLE_PREFIX;
        /**
         * Définit le niveau de log effectif
         */
        private logLevel;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        trace(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private log(func, level, message, args?);
    }
}

declare module Myway.Sagopc {
    class RessourcesService {
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected logger: LoggerService;
        protected documentParametreRestUrl: string;
        protected contractualisationParametreRestUrl: string;
        protected dossierNumeriqueRestUrl: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, logger: LoggerService);
        /**
         * Renvoie toutes les habilitations liées à la sag-opc.
         */
        getHabilitations(): ng.IPromise<{
            [code: string]: boolean;
        }>;
        /**
         * Renvoie une liste d'éléments du contexte myway sous une forme plus exploitable que celle du framework client
         */
        getListFromContext(keys: string[]): ng.IPromise<{
            [key: string]: any;
        }>;
        /**
         * Renvoie la table délocalisée SU1P
         */
        getTableSU1P(codeEtablissement: string): ng.IPromise<MyWay.TableDeloc.ISU1P[]>;
        /**
         * Renvoie les tablettes de signature du poste
         */
        getTablettesSignature(): ng.IPromise<MyWay.Services.Mobilite.ITabletteSignature[]>;
        /**
         * Renvoie les paramètres des documents
         */
        getDocumentParametre(params: Myway.Ressource.DocumentParametre.IGetQueryParams): ng.IPromise<Myway.Ressource.DocumentParametre.IDocumentParametre>;
        /**
         * Renvoie les paramètres de contractualisation
         */
        getContractualisationParametre(input: Myway.Ressource.ContractualisationParametre.IContractualisationParametreInput): ng.IPromise<Myway.Ressource.ContractualisationParametre.IContractualisationParametre>;
        /**
         * Appelle la ressource dossierNumerique et renvoie l'identifiant IDN.
         */
        getDossierNumerique(data: Myway.Ressource.DossierNumerique.IDossierNumerique): ng.IPromise<string>;
    }
}

declare module Myway.Sagopc {
    /**
     * Service principal de l'application, il contient l'ensemble des traitements liés à la signature électronique
     */
    class SagopcService {
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected logger: LoggerService;
        protected ressourcesService: RessourcesService;
        protected identificationSignataireService: IdentificationSignataireService;
        protected eligibiliteService: EligibiliteService;
        protected gcedocService: GcedocService;
        protected documentParametreRestUrl: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, logger: LoggerService, ressourcesService: RessourcesService, identificationSignataireService: IdentificationSignataireService, eligibiliteService: EligibiliteService, gcedocService: GcedocService);
        /**
         * Renvoie le contexte de l'application
         */
        getApplicationContext(): ng.IPromise<IApplicationContext>;
        /**
         * Lancer la signature électronique
         */
        lancerSignatureElectronique(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Lancer la signature papier
         */
        lancerSignaturePapier(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Récupération du dossier numérique et stockage de l'identifiant IDN
         */
        getDossierNumerique(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Récupère les paramètres du document (un seul document pour la SAGOPC)
         */
        getDocument(context: IApplicationContext): ng.IPromise<void>;
        /**
         * Récupère l'ensemble des habilitations de l'application.
         * Renvoie une promesse avec les habilitations.
         */
        recupererHabilitations(): ng.IPromise<Habilitations>;
        /**
         * Renvoie la valeur d'entrée du processus
         */
        getValeurEntreeProcessus(): LisaCodeEntreeEnum;
        /**
         * Effectue un débranchement LISA.
         * La promesse est rejetée en cas d'erreur.
         */
        startNextStep(codeSortie: LisaCodeSortieEnum): ng.IPromise<void>;
        /**
         * Renvoie un objet contenant le contexte d'entrée de l'application
         * Ce contexte est également contrôlé et la promesse sera rejetée en cas d'erreur
         */
        getApplicationInputContext(): ng.IPromise<IApplicationInputContext>;
        /**
         * Renvoie un objet contenant le contexte de fin de contractualisation
         * Ce contexte est également contrôlé et la promesse sera rejetée en cas d'erreur
         */
        getContexteFinContratualisation(): ng.IPromise<IFinContratualisationContext>;
        /**
         * Prépare le document XML (constitution du flux binaire)
         */
        preparerDocumentXml(context: IApplicationContext, donnees: IDonneesGCEDOC): void;
    }
}

declare module Myway.Sagopc {
    interface IXMLNode {
        value: string;
        toString: (level?: number) => void;
    }
    class XMLBuilder {
        private rootObject;
        private xmldec;
        static create(name: string, attributes?: {
            [name: string]: any;
        }): XMLElement;
        constructor(name: string, attributes?: {
            [name: string]: any;
        });
        toString(): string;
    }
    class XMLElement implements IXMLNode {
        builder: XMLBuilder;
        parent: XMLElement;
        name: string;
        value: string;
        children: IXMLNode[];
        attributes: {
            [name: string]: XMLAttribute;
        };
        constructor(parent: XMLElement | XMLBuilder, name: string, attributes?: {
            [name: string]: any;
        });
        element(name: string, attributes?: {
            [name: string]: any;
        }, text?: any): XMLElement;
        attribute(attrs: {
            [name: string]: any;
        }): XMLElement;
        attribute(name: string, value?: any): XMLElement;
        text(value: any): XMLElement;
        cdata(value: any): XMLElement;
        end(): string;
        document(): XMLBuilder;
        root(): XMLElement;
        toString(level?: number): string;
    }
    class XMLAttribute {
        name: string;
        value: string;
        constructor(parent: XMLElement, name: string, value: any);
        toString(): string;
    }
    class XMLDeclaration {
        version: string;
        encoding: string;
        standalone: string;
        constructor(version?: string, encoding?: string, standalone?: string);
        toString(level?: number): string;
    }
    class XMLText implements IXMLNode {
        value: string;
        constructor(parent: XMLElement, text: string);
        toString(level?: number): string;
    }
    class XMLCData implements IXMLNode {
        value: string;
        constructor(parent: XMLElement, data: string);
        toString(level?: number): string;
    }
    class XMLStringifier {
        static allowSurrogateChars: boolean;
        static convertAttKey: string;
        static convertPIKey: string;
        static convertTextKey: string;
        static convertCDataKey: string;
        static convertCommentKey: string;
        static convertRawKey: string;
        static convertListKey: string;
        static eleName(val: any): string;
        static eleText(val: any): string;
        static cdata(val: any): string;
        static comment(val: any): string;
        static raw(val: any): string;
        static attName(val: any): string;
        static attValue(val: any): string;
        static insTarget(val: any): string;
        static insValue(val: any): string;
        static xmlVersion(val: any): string;
        static xmlEncoding(val: any): string;
        static xmlStandalone(val: any): string;
        static dtdPubID(val: any): string;
        static dtdSysID(val: any): string;
        static dtdElementValue(val: any): string;
        static dtdAttType(val: any): string;
        static dtdAttDefault(val: any): string;
        static dtdEntityValue(val: any): string;
        static dtdNData(val: any): string;
        static assertLegalChar(str: string): string;
        static elEscape(str: string): string;
        static attEscape(str: string): string;
    }
}

declare module Myway.Sagopc {
}

declare module Gce.EditiqueVente.Services.Documents.SIKTGCE_Carte {
    interface ISIKTGCE_Carte {
        SECTION1: SIKTGCE_CarteSECTION1[];
        SECTION2: SIKTGCE_CarteSECTION2[];
        SECTION3: SIKTGCE_CarteSECTION3[];
        SECTION4: SIKTGCE_CarteSECTION4[];
        SECTION5: SIKTGCE_CarteSECTION5[];
        GENERIC_ENTETE_SECTION: Editique.Generique.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Editique.Generique.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIKTGCE_CarteSECTION1 {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION1_BL_CORPS | choice_SIKTGCE_CarteSECTION1_BL_CORPS2 | choice_SIKTGCE_CarteSECTION1_BL_CORPS2Bis | choice_SIKTGCE_CarteSECTION1_BL_CORPS_CSCM | choice_SIKTGCE_CarteSECTION1_GENERIC_INFO_PM | choice_SIKTGCE_CarteSECTION1_GENERIC_INFO_PP | choice_SIKTGCE_CarteSECTION1_GENERIC_SIGNAT_SANS_CNIL | choice_SIKTGCE_CarteSECTION1_GENERIC_SIGNAT_SAG | choice_SIKTGCE_CarteSECTION1_GENERIC_TITREDOCUMENT)[];
    }
    interface choice_SIKTGCE_CarteSECTION1_BL_CORPS {
        BL_CORPS: SIKTGCE_CarteSECTION1BL_CORPS;
    }
    interface choice_SIKTGCE_CarteSECTION1_BL_CORPS2 {
        BL_CORPS2: SIKTGCE_CarteSECTION1BL_CORPS2;
    }
    interface choice_SIKTGCE_CarteSECTION1_BL_CORPS2Bis {
        BL_CORPS2Bis: number;
    }
    interface choice_SIKTGCE_CarteSECTION1_BL_CORPS_CSCM {
        BL_CORPS_CSCM: SIKTGCE_CarteSECTION1BL_CORPS_CSCM;
    }
    interface choice_SIKTGCE_CarteSECTION1_GENERIC_INFO_PM {
        GENERIC_INFO_PM: Editique.Generique.GENERIC_INFO_PM;
    }
    interface choice_SIKTGCE_CarteSECTION1_GENERIC_INFO_PP {
        GENERIC_INFO_PP: Editique.Generique.GENERIC_INFO_PP;
    }
    interface choice_SIKTGCE_CarteSECTION1_GENERIC_SIGNAT_SANS_CNIL {
        GENERIC_SIGNAT_SANS_CNIL: Editique.Generique.GENERIC_SIGNATURE_STD_SANS_CNIL;
    }
    interface choice_SIKTGCE_CarteSECTION1_GENERIC_SIGNAT_SAG {
        GENERIC_SIGNAT_SAG: Editique.Generique.GENERIC_SIGNAT_SAG;
    }
    interface choice_SIKTGCE_CarteSECTION1_GENERIC_TITREDOCUMENT {
        GENERIC_TITREDOCUMENT: Editique.Generique.GENERIC_TITREDOCUMENT;
    }
    interface SIKTGCE_CarteSECTION2 {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION2_BL_CONDITION)[];
    }
    interface choice_SIKTGCE_CarteSECTION2_BL_CONDITION {
        BL_CONDITION: SIKTGCE_CarteSECTION2BL_CONDITION;
    }
    interface SIKTGCE_CarteSECTION2BL_CONDITION {
        TEXT1: string;
        TEXT2: string;
        TEXT3: string;
        TEXT4: string;
        TEXT5: string;
        TEXT6: string;
        TEXT7: string;
        TEXT8: string;
        TEXT9: string;
    }
    interface SIKTGCE_CarteSECTION3 {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION3_BL_TERANGA)[];
    }
    interface choice_SIKTGCE_CarteSECTION3_BL_TERANGA {
        BL_TERANGA: SIKTGCE_CarteSECTION3BL_TERANGA;
    }
    interface SIKTGCE_CarteSECTION3BL_TERANGA {
        TEXT10: string;
        TEXT11: string;
        TEXT12: string;
        TEXT13: string;
        TEXT14: string;
    }
    interface SIKTGCE_CarteSECTION4 {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION4_BL_CONDG | choice_SIKTGCE_CarteSECTION4_BL_InfosMand | choice_SIKTGCE_CarteSECTION4_BL_MONEO | choice_SIKTGCE_CarteSECTION4_BL_REPLEG | choice_SIKTGCE_CarteSECTION4_BL_Signature)[];
    }
    interface choice_SIKTGCE_CarteSECTION4_BL_CONDG {
        BL_CONDG: number;
    }
    interface choice_SIKTGCE_CarteSECTION4_BL_InfosMand {
        BL_InfosMand: SIKTGCE_CarteSECTION4BL_InfosMand;
    }
    interface choice_SIKTGCE_CarteSECTION4_BL_MONEO {
        BL_MONEO: number;
    }
    interface choice_SIKTGCE_CarteSECTION4_BL_REPLEG {
        BL_REPLEG: SIKTGCE_CarteSECTION4BL_REPLEG;
    }
    interface choice_SIKTGCE_CarteSECTION4_BL_Signature {
        BL_Signature: SIKTGCE_CarteSECTION4BL_Signature;
    }
    interface SIKTGCE_CarteSECTION5 {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION5_BL_DATA | choice_SIKTGCE_CarteSECTION5_BL_ENTETE | choice_SIKTGCE_CarteSECTION5_BL_ENTETE1 | choice_SIKTGCE_CarteSECTION5_BL_ENTETE2 | choice_SIKTGCE_CarteSECTION5_BL_ENTETEREC | choice_SIKTGCE_CarteSECTION5_BL_TABLEAU | choice_SIKTGCE_CarteSECTION5_BL_TABLEAU1 | choice_SIKTGCE_CarteSECTION5_BL_TABLEAU2 | choice_SIKTGCE_CarteSECTION5_BL_TABLEAUREC | choice_SIKTGCE_CarteSECTION5_BL_TITRE)[];
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_DATA {
        BL_DATA: SIKTGCE_CarteSECTION5BL_DATA;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_ENTETE {
        BL_ENTETE: SIKTGCE_CarteSECTION5BL_ENTETE;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_ENTETE1 {
        BL_ENTETE1: SIKTGCE_CarteSECTION5BL_ENTETE1;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_ENTETE2 {
        BL_ENTETE2: SIKTGCE_CarteSECTION5BL_ENTETE2;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_ENTETEREC {
        BL_ENTETEREC: SIKTGCE_CarteSECTION5BL_ENTETEREC;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_TABLEAU {
        BL_TABLEAU: SIKTGCE_CarteSECTION5BL_TABLEAU;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_TABLEAU1 {
        BL_TABLEAU1: SIKTGCE_CarteSECTION5BL_TABLEAU1;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_TABLEAU2 {
        BL_TABLEAU2: SIKTGCE_CarteSECTION5BL_TABLEAU2;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_TABLEAUREC {
        BL_TABLEAUREC: SIKTGCE_CarteSECTION5BL_TABLEAUREC;
    }
    interface choice_SIKTGCE_CarteSECTION5_BL_TITRE {
        BL_TITRE: SIKTGCE_CarteSECTION5BL_TITRE;
    }
    interface SIKTGCE_CarteSECTION1BL_CORPS {
        LIDACR: string;
        NUMCARTE: string;
        DATE_FIN: string;
        TYPE_CARTE: string;
    }
    interface SIKTGCE_CarteSECTION1BL_CORPS2 {
        LISTE_INFOS: SIKTGCE_CarteSECTION1BL_CORPS2LISTE_INFOS[];
    }
    interface SIKTGCE_CarteSECTION1BL_CORPS2LISTE_INFOS {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION1BL_CORPS2LISTE_INFOS_LIGNE1)[];
    }
    interface choice_SIKTGCE_CarteSECTION1BL_CORPS2LISTE_INFOS_LIGNE1 {
        LIGNE1: SIKTGCE_CarteSECTION1BL_CORPS2LISTE_INFOSLIGNE1;
    }
    interface SIKTGCE_CarteSECTION1BL_CORPS2LISTE_INFOSLIGNE1 {
        LIBELLE: string;
        MONTANT: string;
        MONNAIE: string;
        NBJOURS: string;
    }
    interface SIKTGCE_CarteSECTION1BL_CORPS_CSCM {
        LIB_CARTEENCOURS: string;
        LIB_ANCIENNECARTE: string;
    }
    interface SIKTGCE_CarteSECTION4BL_InfosMand {
        D1: string;
        D2: string;
        D3: string;
        D6: string;
        D4: string;
        D5: string;
    }
    interface SIKTGCE_CarteSECTION4BL_REPLEG {
        TITULAIRE: string;
        PORTEUR: string;
        TYPECARTE: string;
        COMPTE: string;
    }
    interface SIKTGCE_CarteSECTION4BL_Signature {
        D1_Signature: string;
        D2_Signature: string;
    }
    interface SIKTGCE_CarteSECTION5BL_DATA {
        LIB_LOT: string;
        LIB_DATE_JOUR: string;
    }
    interface SIKTGCE_CarteSECTION5BL_ENTETE {
        LIB_TITRE_COL2: string;
        LIB_TITRE_COL3: string;
        LIB_TITRE_COL1: string;
        LIB_TITRE_COL4: string;
        LIB_TITRE_COL5: string;
        LIB_TITRE_COL6: string;
        LIB_TITRE_COL11: string;
    }
    interface SIKTGCE_CarteSECTION5BL_ENTETE1 {
        LIB_TITRE_COL2_ENTETE1: string;
        LIB_TITRE_COL3_ENTETE1: string;
        LIB_TITRE_COL1_ENTETE1: string;
        LIB_TITRE_COL4_ENTETE1: string;
        LIB_TITRE_COL5_ENTETE1: string;
        LIB_TITRE_COL6_ENTETE1: string;
        COL5_TITRE_REC_ENTETE1: string;
    }
    interface SIKTGCE_CarteSECTION5BL_ENTETE2 {
        TITRE_COL1: string;
        TITRE_COL2: string;
        TITRE_COL3: string;
        TITRE_COL4: string;
        TITRE_COL5: string;
    }
    interface SIKTGCE_CarteSECTION5BL_ENTETEREC {
        COL1_TITRE_REC: string;
        COL2_TITRE_REC: string;
        COL3_TITRE_REC: string;
        COL4_TITRE_REC: string;
        COL5_TITRE_REC: string;
        COL6_TITRE_REC: string;
        COL7_TITRE_REC: string;
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAU {
        LIGNE1: SIKTGCE_CarteSECTION5BL_TABLEAULIGNE1[];
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAULIGNE1 {
        LIB_COL2: string;
        LIB_COL3: string;
        LIB_COL1: string;
        LIB_COL4: string;
        LIB_COL5: string;
        LIB_COL6: string;
        LIB_COL11: string;
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAU1 {
        LISTE1: SIKTGCE_CarteSECTION5BL_TABLEAU1LISTE1[];
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAU1LISTE1 {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION5BL_TABLEAU1LISTE1_LIGNE1)[];
    }
    interface choice_SIKTGCE_CarteSECTION5BL_TABLEAU1LISTE1_LIGNE1 {
        LIGNE1: SIKTGCE_CarteSECTION5BL_TABLEAU1LISTE1LIGNE1;
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAU1LISTE1LIGNE1 {
        LIB_COL2_TABL1: string;
        LIB_COL3_TABL1: string;
        LIB_COL1_TABL1: string;
        LIB_COL4_TABL1: string;
        LIB_COL5_TABL1: string;
        LIB_COL6_TABL1: string;
        LIB_COL11_TABL1: string;
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAU2 {
        LISTE1: SIKTGCE_CarteSECTION5BL_TABLEAU2LISTE1[];
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAU2LISTE1 {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION5BL_TABLEAU2LISTE1_LIGNE1)[];
    }
    interface choice_SIKTGCE_CarteSECTION5BL_TABLEAU2LISTE1_LIGNE1 {
        LIGNE1: SIKTGCE_CarteSECTION5BL_TABLEAU2LISTE1LIGNE1;
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAU2LISTE1LIGNE1 {
        LIB_COL1_TABL2: string;
        LIB_COL2_TABL2: string;
        LIB_COL3_TABL2: string;
        LIB_COL4_TABL2: string;
        LIB_COL5_TABL2: string;
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAUREC {
        LISTEREC: SIKTGCE_CarteSECTION5BL_TABLEAURECLISTEREC[];
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAURECLISTEREC {
        _blocChoice_: (choice_SIKTGCE_CarteSECTION5BL_TABLEAURECLISTEREC_LIGNEREC)[];
    }
    interface choice_SIKTGCE_CarteSECTION5BL_TABLEAURECLISTEREC_LIGNEREC {
        LIGNEREC: SIKTGCE_CarteSECTION5BL_TABLEAURECLISTERECLIGNEREC;
    }
    interface SIKTGCE_CarteSECTION5BL_TABLEAURECLISTERECLIGNEREC {
        COL1_REC: string;
        COL2_REC: string;
        COL3_REC: string;
        COL4_REC: string;
        COL5_REC: string;
        COL6_REC: string;
        COL7_REC: string;
    }
    interface SIKTGCE_CarteSECTION5BL_TITRE {
        LIB_TITRE: string;
    }
    class SIKTGCE_Carte implements ISIKTGCE_Carte {
        SECTION1: SIKTGCE_CarteSECTION1[];
        SECTION2: SIKTGCE_CarteSECTION2[];
        SECTION3: SIKTGCE_CarteSECTION3[];
        SECTION4: SIKTGCE_CarteSECTION4[];
        SECTION5: SIKTGCE_CarteSECTION5[];
        GENERIC_ENTETE_SECTION: Editique.Generique.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Editique.Generique.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIKTGCE_CarteGenerationParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIKTGCE_CarteGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIKTGCE_CarteImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

declare module Myway.Sagopc.SAG_SIKGGCE_BordTMF {
    enum GENERIC_ENTETEETSLOGO_ETABLISSEMENTContent {
        Id = 0,
        Flux = 1,
    }
    interface ISAG_SIKGGCE_BordTMF_Myway {
        SECTION1: SAG_SIKGGCE_BordTMF_MywaySECTION1[];
        GENERIC_ENTETEETS: GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1 {
        _blocChoice_: (choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_BL_CLIENT | choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_BL_TEXTE | choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_BL_MOUVEMENTS | choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_GENERIC_CLAUSECNIL | choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_BL_SIGNATURE)[];
    }
    interface choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_BL_CLIENT {
        BL_CLIENT: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_CLIENT;
    }
    interface choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_BL_TEXTE {
        BL_TEXTE: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_TEXTE;
    }
    interface choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_BL_MOUVEMENTS {
        BL_MOUVEMENTS: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTS;
    }
    interface choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_GENERIC_CLAUSECNIL {
        GENERIC_CLAUSECNIL: number;
    }
    interface choice_SAG_SIKGGCE_BordTMF_MywaySECTION1_BL_SIGNATURE {
        BL_SIGNATURE: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_SIGNATURE;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        Content: GENERIC_ENTETEETSLOGO_ETABLISSEMENTContent;
        Value: string;
    }
    interface GENERIC_PIEDPAGEETS {
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_CLIENT {
        NOMCLIENT: string;
        ADRESSE: string;
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTS {
        LIGNE: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTSLIGNE[];
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTSLIGNE {
        LIBLIGNE: string;
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_SIGNATURE {
        ETABLISSEMENT: string;
        IMG_SIGNATURE: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_SIGNATUREIMG_SIGNATURE;
        AGENT: string;
        PIECE: string;
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_SIGNATUREIMG_SIGNATURE {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_TEXTE {
        NOMCLIENT: string;
        NUMCARTE: string;
    }
    class SAG_SIKGGCE_BordTMF_Myway implements ISAG_SIKGGCE_BordTMF_Myway {
        SECTION1: SAG_SIKGGCE_BordTMF_MywaySECTION1[];
        GENERIC_ENTETEETS: GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SAG_SIKGGCE_BordTMF_MywayArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SAG_SIKGGCE_BordTMF_MywayImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class SAG_SIKGGCE_BordTMF_MywayArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

declare module Myway.Sagopc {
    /**
     * Contrôleur de la directive mwIdentificationSignataire
     */
    class IdentificationSignataireController {
        private $q;
        private modale;
        private identificationSignataireService;
        identificationSignataire: IIdentificationSignataire;
        static $inject: string[];
        constructor($q: ng.IQService, modale: ng.ui.bootstrap.IModalServiceInstance, identificationSignataireService: IdentificationSignataireService);
        /**
         * Valider le formulaire d'identification du signataire
         */
        validerIdentificationSignataire(): void;
    }
}

declare module Myway.Sagopc.CarteBancaire {
    var INFOS_DOCUMENT: IInfosDocumentGcedoc;
    interface IContexte {
        /**
         * Référence de l'acte dans l'entête (REF_ACTE)
         */
        referenceActe: string;
        /**
         * Titre du document (TITRE_DOCUMENT)
         */
        titreDocument: string;
        /**
         * Titre ou rôle de la personne (TITRE_ROLE)
         */
        titreRolePersonne: string;
        /**
         * Libellé du code civilité (LIDACV3)
         */
        civilite: string;
        /**
         * Nom et prénom du client (NOM_PRENOM_CLIENT3)
         */
        nomPrenomClient: string;
        /**
         * Préfixe du nom d'usage (LIDANM3)
         */
        prefixeNomUsage: string;
        /**
         * Nom d'usage (NOM_USAGE3)
         */
        nomUsage: string;
        /**
         * Préfixe date naissance (LIB_CODIRC3)
         */
        prefixeDateNaissance: string;
        /**
         * Date de naissance (DADANA3)
         */
        dateNaissance: string;
        /**
         * Lieu de naissance (LIDGIL_NAISSANCE3)
         */
        lieuNaissance: string;
        /**
         * Adresse - lignes 4 et 6 (LIDGV2_63)
         */
        adresse: string;
        /**
         * Numéro de téléphone (NODATP_CLIENT3)
         */
        telephone: string;
        /**
         * Libellé situation famille (SITUATION_FAMILLE3)
         */
        situationFamille: string;
        /**
         * Libellé code régime matrimonial (REGIME_MATRIMONIAL3)
         */
        regimeMatrimonial: string;
        /**
         * Nationalité (LIDGNA3)
         */
        nationalite: string;
        /**
         * Identifiant personne (IDNSBD3)
         */
        identifiantPersonne: string;
        /**
         * Désignation du titulaire de la carte (LIDACR)
         */
        designationTitulaireCarte: string;
        /**
         * Numéro de la carte (NUMCARTE)
         */
        numeroCarte: string;
        /**
         * Date de fin de validité de la carte (DATE_FIN)
         */
        dateFinValiditeCarte: string;
        /**
         * Type de carte (TYPE_CARTE)
         */
        typeCarte: string;
        /**
         * Libellé de l'agent signataire (PRENOM_NOM_AGENT)
         */
        libelleAgentSignataire: string;
        /**
         * Libellé établissement signataire (LIB_DELADU_ETS)
         */
        libelleEtablissementSignataire: string;
        /**
         * Plafonds de la carte
         */
        plafonds: IPlafondCarte[];
    }
    interface IPlafondCarte {
        libelle: string;
        montant: string;
        monnaie: string;
        nbJours: string;
    }
}

declare module Myway.Sagopc {
    interface IContexteCarteTempo {
        libelleTitulaire: string;
        adresse: string;
        numeroCarte: string;
    }
}
