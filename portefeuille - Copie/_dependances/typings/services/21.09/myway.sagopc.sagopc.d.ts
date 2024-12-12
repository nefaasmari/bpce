
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
        private contractualisationActeService;
        private gcedocService;
        private sagOpcServiceComContract;
        private serviceAgent;
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
        private static CLASS_NAME;
        private static logger;
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, logger: LoggerService, sagopcService: SagopcService, eligibiliteService: EligibiliteService, contractualisationActeService: myway.comContract.Services.ContractualisationActeService, gcedocService: GcedocService, sagOpcServiceComContract: myway.comContract.Services.SagOpcService, serviceAgent: MyWay.Services.ServiceAgentExtended);
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
         * ou imprimer le document en cas de signature papier. En fonction de l'éligibilité ou
         */
        private startProcess();
        /**
         * Vérifie si le signataire Visa Collaborateur est présent dans la liste des signataires
         * et le met dans le contexte
         */
        private getApplicationContexte();
        private verifParamsObligatoires(isSAGOPCHistorique);
        private mettreAJourContexte(context, retourEligSAGOPC);
        private mettreAJourContexteAvantAppelEligibilite(context);
        private startProcessSignatureElectronique(isSAGOPCHistorique);
        private startProcessSignaturePapier(isSAGOPCHistorique?);
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
        static MODE_SIGNATURE_ELECTRONIQUE: string;
        static CODE_PROCESSUS_METIER: string;
        static DONNEES_SAGOPC: string;
        static CONTEXT_KEY_MULTI_DOSS: string;
        static MARCHE_PARTICULIER: string;
        static MEGI: string;
        /**
         * Code type signataire
         */
        static CODE_TYPE_SIGNATAIRE: string;
        static CODE_TYPE_SIGNATAIRE_USER: string;
        /**
         * Structure par défaut d'identification du signataire
         */
        static IDENTIFICATION_SIGNATAIRE_DEFAUT: IIdentificationSignataire;
        static DONNEES_STOCKAGE_DOCUMENT_CODE_TYPE_FICHIER_XML: string;
        static DONNEES_STOCKAGE_DOCUMENT_CODE_TYPE_FICHIER_PDF: string;
    }
    /**
     * Codes d'entrée LISA
     */
    enum LisaCodeEntreeEnum {
        CONTRACTUALISATION = 1,
        FINALISATION_CONTRACTUALISATION = 2,
        RETOUR_ACQUISITION_DOCUMENT = 3,
    }
    /**
     * Codes de sortie LISA
     */
    enum LisaCodeSortieEnum {
        FIN_NORMAL = 1,
        APPEL_IDN = 2,
        APPEL_SPA_CONTRACT = 3,
        ERREUR = 4,
        APPEL_MULT_DOSS = 7,
    }
    /**
     * Clés du contexte pour le débranchement IDN
     */
    class IdnInputContextKey {
        static ID_IDN: string;
        static ID_MAT: string;
        static CAISSE: string;
        static AGENT: string;
        static MODE: string;
        static PE: string;
        static TOP_FAFG_XML: string;
        static PTU: string;
        static CHOIXIMPR: string;
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
     * Codes statut de la contractualisation
     */
    class CodeStatutContractualisationEnum {
        static OK: string;
        static KO: string;
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
        static OPERATION_FINANCIERE: string;
        static REMISE_CARTE_TEMPO: string;
        static REMISE_CARTE_BANCAIRE: string;
        static VISITE_COFFRE: string;
        static OPPOSITION_CARTE_BANCAIRE: string;
        static VIREMENT_IMMEDIAT: string;
        static VIREMENT_INTERNE: string;
        static VIREMENT_INTERNATIONAL: string;
        static ECHEANCIER_VIREMENT_SEPA: string;
        static ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static AVENANT_ECHEANCIER_VIREMENT_SEPA: string;
        static AVENANT_ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static CLOTURE_ECHEANCIER_VIREMENT_SEPA: string;
        static CLOTURE_ECHEANCIER_VIREMENT_INTERNATIONAL: string;
        static SUSPENSION_ECHEANCIER_VIREMENT_SEPA: string;
        static REACTIVATION_ECHEANCIER_VIREMENT_SEPA: string;
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
        static TYPE_MIME_DOCUMENT_PDF_MYSIGN: string;
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
    class VisaCollaborateur {
        static NUMERO_PERSONNE: string;
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
        referenceIdentite?: string;
        /**
         * Identification du signataire
         */
        identificationSignataire?: IIdentificationSignataire;
        acte: IActeGestion;
        /**
         * Type de bordereau
         */
        typeBordereau: TypeBordereauEnum;
        /**
         * Données spécifiques au bordereau
         */
        donneesBordereau: CarteBancaire.IContexte;
        indicateurPapier?: boolean;
        signataires?: Array<myway.comContract.SAGOPC.Modeles.ISignataireSagOpc>;
        operationsFinancieres?: Array<myway.comContract.SAGOPC.Modeles.IOperationsFinancieres>;
        isDeployeMySign?: boolean;
        isDeployeBulleConfiance?: boolean;
        listeMateriels?: Myway.Ressource.ContractualisationActe.IMateriel[];
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
        materiels: Myway.Ressource.ContractualisationActe.IMateriel[];
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
        /**
         * Indicateur si le signataire est un Visa Collaborateur
         */
        visaCollaborateur?: boolean;
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
        dateOperation: string;
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
        listeModeContractualisation?: Array<Myway.Ressource.ContractualisationParametre.IModeContractualisationActe>;
        listeDocumentsAProduire?: Array<Myway.Ressource.DocumentParametre.IDocumentActe>;
        codeTypeMarcheEntreprise?: string;
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
        static MODE_CONTRACTUALISATION_VIDE: string;
        static ACTE_VIDE: string;
        static LISTE_DOCUMENT_VIDE: string;
        static ID_DOC_GED_VIDE: string;
        static FLUX_BINAIRE_VIDE: string;
        static SIGNATAIRE_VIDE: string;
        messageAffiche: string;
        messageLog: string;
        action: string;
        child: MessageErreur;
        constructor(messageAffiche: string, erreur?: any, action?: string, child?: MessageErreur);
    }
}

declare module Myway.Sagopc.Smartnum {
    module Smartnum {
        interface IPorteur {
            idntAttributaire1: string;
            idntAttributaire2?: any;
            typeAttributaire: string;
        }
        interface IDonneesLue {
            idChamp: string;
            libAff: string;
            valeur: string;
            type: string;
            tauxConf: number;
        }
        interface IResultatRADLAD {
            nature: string;
            tauxConfNature: number;
            tauxConfGeneral?: any;
            nbChampLus: number;
            nbChampModele: number;
            donneesLues: IDonneesLue[];
            dureeLad?: number;
        }
        interface IDocument {
            codeTypeNatrDoc: string;
            dureeConserv: number;
            idntDocument: string;
            idntFoncDocument: string;
            indicLad: boolean;
            indicRad: boolean;
            dateEmissionOblig: boolean;
            indicTransitoire: boolean;
            libAffichDocument: string;
            porteur: IPorteur;
            resultatRADLAD: IResultatRADLAD;
            dateEmission: string;
            sujet: string;
            dateNumerisation: string;
        }
        interface IRegroupement {
            idFoncRegr: string;
            libAffichRegroupement: string;
            documents: IDocument[];
        }
        interface IObjetRacine {
            codeEtablissement: string;
            idntCmpstApplf: string;
            indicAfficheLad: boolean;
            libAffichAcquisition: string;
            modeAcquisition: number;
            regroupements: IRegroupement[];
        }
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
        static createDocument(context: IApplicationContext, isSAGOPCHistorique?: boolean): Myway.Ressource.DossierNumerique.V3.IDocument;
        private static createContenuDocument(documentActe, codeEtablissementFinancier, fluxBinaireBordereau);
        private static createFluxBinaire(fluxBinaireBordereau);
        private static createFluxFilenet(documentActe, codeEtablissement);
        private static createFluxGedTemporaire(documentActe);
        private static createFluxDocPartageICG(documentActe);
        private static createComportementSignatureDocument(context, isSAGOPCHistorique?);
        private static createInfoDocument(context);
        private static getLabelDocument(documentActe);
        private static getLibelleDescriptionDocumentIDN(documentActe);
        private static getModeUsageDocument(documentActe);
        private static createListeSignataireDocument(documentActe, signataires);
        private static createListeSignataireDocumentSAGOPC(documentActe, signataires);
        private static getNumeroAffichageDocument(documentActe);
        private static getDonneesDocumentAlternatif(context);
        private static getFluxXHtml(listLignes);
        private static getDonneesDocumentAltOperationFinanciere(context);
        private static getDonneesDocumentAlternatifRemiseCarte(context);
        private static getDonneesDocumentAlternatifRemiseCarteTempo(context);
        private static getDonneesDocumentAlternatifOppositionCarte(context);
        private static getDonneesDocumentAltVirementImmediat(context);
        private static getDonneesDocumentAltVirementInterne(context);
        private static getDonneesDocumentAltVirementInternational(context);
        private static getDonneesDocumentAltEchanVirSEPA(context);
        private static getDonneesDocumentAltEchanVirInternational(context);
        private static getDonneesDocumentAltAvenantEchanVirSEPA(context);
        private static getDonneesDocumentAltAvenantEchanVirInternational(context);
        private static getDonneesDocumentAltClotureEchanVirSEPA(context);
        private static getDonneesDocumentAltClotureEchanVirInternational(context);
        private static getDonneesDocumentAltSuspensionEchanVirInternat(context);
        private static getDonneesDocumentAltReactivEchanVirSEPA(context);
    }
}

declare module Myway.Sagopc {
    class DossierFactory {
        static createDossierFromContext(context: IApplicationContext, isSAGOPCHistorique?: boolean): Myway.Ressource.DossierNumerique.V3.IDossierNumerique;
        private static createActe(context);
        private static createActeNouveauSysteme(context);
        private static createOperationsFinancieres(contexte);
        private static createSignatairesActe(signataires);
        private static createReferencesActe(acte);
    }
}

declare module Myway.Sagopc {
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
        controlerEligibiliteSag(context: IApplicationContext): void;
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
        private static CLASS_NAME;
        private static logger;
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
        genererImprimer(context: IApplicationContext, isSAGOPCHistorique?: boolean): ng.IPromise<void>;
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
    class MultiDossierNumeriqueService {
        private $q;
        private serviceAgentExtended;
        private tiersNoyauService;
        protected logger: LoggerService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, tiersNoyauService: TiersNoyauService, logger: LoggerService);
        /**
         *
         * @param codeEtablissementFinancier
         * @param identifiantPersonne
         */
        getTiersNoyau(codeEtablissementFinancier: string, identifiantPersonne: number): ng.IPromise<Myway.Ressource.Tiers.TiersNayau.ITiersNoyau>;
        createMultiDossierNumeriques(context: IApplicationContext): ng.IPromise<MyWay.Contractualisation.IMultiDossiersNumeriques>;
        createDocumentAProduireFromDocumentActe(listedocumentActe: Array<Myway.Ressource.DocumentParametre.IDocumentActe>, acte: IActeGestion): Myway.Ressource.ContractualisationActe.IDocumentAProduire[];
        /**
         *
         * @param contractualisationActe
         */
        private getListeSignataireDocumentFromContractualisationActe(acte);
        /**
         *
         * @param contractualisationActe
         */
        private constituerSignataires(codeEtablissementFinancier, signataires, listeSignatairesActe);
        /**
         *
         * @param signataireActe
         * @param tiersNoyau
         */
        private majSignataireSagOpc(signataireSagOpc, tiersNoyau);
        /**
         *
         * @param signataireActe
         * @param tiersNoyau
         */
        private majSignataireActe(signataireSagOpc, tiersNoyau);
        /**
         *
         * @param contractualisationActe
         */
        private getListeTitulaireDossierNumeriqueFromContractualisationActe(acte, codeEtablissementFinancier);
        private majTitulaireSagOpc(titulaireSagOpc, tiersNoyau);
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
        protected classeurClientRechercheRestUrl: string;
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
        getDossierNumerique(data: Myway.Ressource.DossierNumerique.V3.IDossierNumerique): ng.IPromise<string>;
        /**
         * Appelle la ressource dossierNumerique et renvoie l'identifiant IDN.
         */
        getDossierClasseurClient(query: IClasseurClientQuery): ng.IPromise<ClasseurClient.IRechercherDossierOutput>;
    }
    interface IClasseurClientQuery {
        idPersonne: string;
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
        protected dossierPropagationService: myway.comEditiqueNumerisation.Services.DossierPropagationService;
        protected multiDossierNumeriqueService: MultiDossierNumeriqueService;
        protected documentParametreRestUrl: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, logger: LoggerService, ressourcesService: RessourcesService, identificationSignataireService: IdentificationSignataireService, eligibiliteService: EligibiliteService, gcedocService: GcedocService, dossierPropagationService: myway.comEditiqueNumerisation.Services.DossierPropagationService, multiDossierNumeriqueService: MultiDossierNumeriqueService);
        /**
         * Renvoie le contexte de l'application
         */
        getApplicationContext(): ng.IPromise<IApplicationContext>;
        /**
         * Lancer la signature électronique
         */
        lancerSignatureElectronique(context: IApplicationContext, isSAGOPCHistorique?: boolean): ng.IPromise<void>;
        /**
         * Lancer la signature papier
         */
        lancerSignaturePapier(context: IApplicationContext, isSAGOPCHistorique?: boolean): ng.IPromise<void>;
        /**
         * Récupération du dossier numérique et stockage de l'identifiant IDN
         */
        getDossierNumerique(context: IApplicationContext, isSAGOPCHistorique?: boolean): ng.IPromise<void>;
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
        preparerDocumentXml(context: IApplicationContext, donnees: IDonneesGCEDOC): ng.IPromise<void>;
        /**
         * permettre la propagation dans le DRC du(des) client(s) des pièces d’identité qui viennent d’être acquises dans smartnum.
         */
        propagerPieceAcquiseDansDRC(): ng.IPromise<void>;
    }
}

declare module Myway.Sagopc {
    class TiersNoyauService {
        private $q;
        private serviceAgentExtended;
        private static CODE_TYPE_MEDIA_MAIL;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *
         * @param codeEtablissementFinancier
         * @param identifiantPersonne
         */
        getTiersNoyau(codeEtablissementFinancier: string, identifiantPersonne: number): ng.IPromise<Myway.Ressource.Tiers.TiersNayau.ITiersNoyau>;
        /**
         *
         * @param tiersNoyau
         */
        getMailSignataireFromTiersNoyau(tiersNoyau: Myway.Ressource.Tiers.TiersNayau.ITiersNoyau): string;
        /**
         *
         * @param tiersNoyau
         */
        getCiviliteSignataireFromTiersNoyau(tiersNoyau: Myway.Ressource.Tiers.TiersNayau.ITiersNoyau): string;
        /**
         *
         * @param codeCivilite
         */
        private getLibelleCiviliteAvecCodeCivilite(codeCivilite);
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

declare module Myway.Sagopc.SAG_SIKGGCE_BordTMF {
    function createDocument(context: IApplicationContext): SAG_SIKGGCE_BordTMF_Myway;
    function createImpressionParams(context: IApplicationContext): SAG_SIKGGCE_BordTMF_MywayImpressionParams;
    function createArchiverParams(context: IApplicationContext): SAG_SIKGGCE_BordTMF_MywayArchiverParams;
    function createArchiverImpressionParams(context: IApplicationContext): SAG_SIKGGCE_BordTMF_MywayArchiverImpressionParams;
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
        BL_MOUVEMENTS: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTS2[];
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
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface GENERIC_PIEDPAGEETS {
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_CLIENT {
        NOMCLIENT: string;
        ADRESSE: string;
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTS2 {
        LISTEMOUV: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTS[];
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTS {
        LIGNE1: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTSLIGNE[];
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_MOUVEMENTSLIGNE {
        LIBLIGNE: string;
    }
    interface SAG_SIKGGCE_BordTMF_MywaySECTION1BL_SIGNATURE {
        ETABLISSEMENT: string;
        IMG_SIGNATURE?: SAG_SIKGGCE_BordTMF_MywaySECTION1BL_SIGNATUREIMG_SIGNATURE;
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

declare module Myway.Sagopc.OperationFinanciere {
    class CreationBordereauOperationFinanciere {
        static createArchiverParams(context: IApplicationContext): SAG_SIPRGCE_BORDEREAU_BORD002_MywayArchiverParams;
        static createImpressionParams(context: IApplicationContext): SAG_SIPRGCE_BORDEREAU_BORD002_MywayImpressionParams;
        static createArchiverImpressionParams(context: IApplicationContext): SAG_SIPRGCE_BORDEREAU_BORD002_MywayArchiverImpressionParams;
        static createDocument(context: IApplicationContext): SAG_SIPRGCE_BORDEREAU_BORD002_Myway;
        static getReferenceIdentite(context: IApplicationContext): string;
    }
}

declare module Myway.Sagopc.OperationFinanciere {
    enum SIXIENTETEETSLOGO_ETABLISSEMENTContent {
        Id = 0,
        Flux = 1,
    }
    interface ISAG_SIPRGCE_BORDEREAU_BORD002_Myway {
        SECTION1: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1[];
        SIXIENTETEETS: Myway.Sagopc.OperationFinanciere.SIXIENTETEETS[];
        GENERIC_PIEDPAGEETS: Myway.Sagopc.OperationFinanciere.GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1 {
        _blocChoice_: (choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_1 | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Infosgene | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Lignes | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Lignes2 | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Suite | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_SuiteFin | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_SuiteMon | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Avis | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Saut | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_SIXICLAUSECNIL | choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_SIXISIGNATURE_BORD2)[];
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_1 {
        BL_1: SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_1;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Infosgene {
        BL_Infosgene: SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Infosgene;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Lignes {
        BL_Lignes: SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Lignes;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Lignes2 {
        BL_Lignes2: SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Lignes2;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Suite {
        BL_Suite: SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Suite;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_SuiteFin {
        BL_SuiteFin: SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_SuiteFin;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_SuiteMon {
        BL_SuiteMon: SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_SuiteMon;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Avis {
        BL_Avis: number;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_BL_Saut {
        BL_Saut: number;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_SIXICLAUSECNIL {
        SIXICLAUSECNIL: number;
    }
    interface choice_SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1_SIXISIGNATURE_BORD2 {
        SIXISIGNATURE_BORD2: SIXISIGNATURE_BORD2;
    }
    interface SIXIENTETEETS {
        LOGO_ETABLISSEMENT: Myway.Sagopc.OperationFinanciere.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
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
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB10175[];
        b13135: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB13135[];
        b13705: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB13705[];
        b14445: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB14445[];
        b14505: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB14505[];
        b15135: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB15135[];
        b15905: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB15905[];
        b15965: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB15965[];
        b16275: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB16275[];
        b18025: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB18025[];
        b18279: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB18279[];
        b43199: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB43199[];
        b18715: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB18715[];
        b13335: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB13335[];
        b17515: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB17515[];
        b62108: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB62108[];
        b12579: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB12579[];
        b13825: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB13825[];
        b16705: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB16705[];
        b12135: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB12135[];
        b14265: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB14265[];
        b13485: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB13485[];
        b18315: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB18315[];
        b11315: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB11315[];
        b11425: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB11425[];
        b12548: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB12548[];
        b30051: Myway.Sagopc.OperationFinanciere.SIXIPIEDPAGEETSLISTE_PIEDETSB30051[];
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB13135 {
        d13135_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB13705 {
        d13705_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB14445 {
        d14445_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB14505 {
        d14505_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB15135 {
        d15135_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB16275 {
        d16275_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB18025 {
        d18025_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB18715 {
        d18715_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB13335 {
        d13335_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB17515 {
        d17515_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB62108 {
        d62108_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB12579 {
        d12579_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB13825 {
        d13825_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB16705 {
        d16705_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB12135 {
        d12135_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB14265 {
        d14265_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB13485 {
        d13485_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB18315 {
        d18315_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB11315 {
        d11315_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB11425 {
        d11425_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB12548 {
        d12548_L1: string;
    }
    interface SIXIPIEDPAGEETSLISTE_PIEDETSB30051 {
        d30051_L1: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_1 {
        TITRE: string;
    }
    interface SIXISIGNATURE_BORD2 {
        LIB_TITRE: string;
        QUALITE_SIGNATAIRE: string;
        LIDANM: string;
        LIDAPP: string;
        IMG_SIGNATURE: Myway.Sagopc.OperationFinanciere.SIXISIGNATURE_BORD2IMG_SIGNATURE;
        LIB_PROCURATION: string;
    }
    interface SIXISIGNATURE_BORD2IMG_SIGNATURE {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Infosgene {
        D3: string;
        D9: string;
        D4: string;
        D10: string;
        D5: string;
        D12: string;
        D6: string;
        D7: string;
        D8: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Lignes {
        Liste0: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0[];
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0 {
        LIGNE1: number;
        LIGNE2: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE2[];
        LIGNE2BIS: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE2BIS[];
        LIGNE6: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE6[];
        LIGNE5: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE5[];
        LIGNE5BIS: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE5BIS[];
        LIGNE3: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE3[];
        LIGNE4: number;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE2 {
        D1: string;
        D2: string;
        D3: string;
        D4: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE2BIS {
        D1B: string;
        D2B: string;
        D3B: string;
        D4B: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE6 {
        D31: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE5 {
        D21: string;
        D22: string;
        D23: string;
        D24: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE5BIS {
        D21B: string;
        D22B: string;
        D23B: string;
        D24B: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_LignesListe0LIGNE3 {
        D6: string;
        D7: string;
        D8: string;
        D9: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Lignes2 {
        Liste0: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Lignes2Liste0[];
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Lignes2Liste0 {
        LIGNE2: number;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_Suite {
        D1: string;
        D2: string;
        D6: string;
        D7: string;
        D8: string;
        D9: string;
        D10: string;
        D5: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_SuiteFin {
        D5: string;
        D6: string;
        D7: string;
        D8: string;
        D9: string;
        D10: string;
        D11: string;
    }
    interface SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1BL_SuiteMon {
        NB1: string;
        VB1: string;
        NP1: string;
        VP1: string;
        NB2: string;
        VB2: string;
        NP2: string;
        VP2: string;
        NB3: string;
        VB3: string;
        NP3: string;
        VP3: string;
        NB4: string;
        VB4: string;
        NP4: string;
        VP4: string;
        NB5: string;
        VB5: string;
        NP5: string;
        VP5: string;
        NB6: string;
        VB6: string;
        NP6: string;
        VP6: string;
        NB7: string;
        VB7: string;
        NP7: string;
        VP7: string;
        NP8: string;
        VP8: string;
        TotBil: string;
        TotMon: string;
        TotEnc: string;
    }
    class SAG_SIPRGCE_BORDEREAU_BORD002_Myway implements ISAG_SIPRGCE_BORDEREAU_BORD002_Myway {
        SECTION1: Myway.Sagopc.OperationFinanciere.SAG_SIPRGCE_BORDEREAU_BORD002_MywaySECTION1[];
        SIXIENTETEETS: Myway.Sagopc.OperationFinanciere.SIXIENTETEETS[];
        GENERIC_PIEDPAGEETS: Myway.Sagopc.OperationFinanciere.GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SAG_SIPRGCE_BORDEREAU_BORD002_MywayArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SAG_SIPRGCE_BORDEREAU_BORD002_MywayGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SAG_SIPRGCE_BORDEREAU_BORD002_MywayArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SAG_SIPRGCE_BORDEREAU_BORD002_MywayImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SAG_SIPRGCE_BORDEREAU_BORD002_MywayArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SAG_SIPRGCE_BORDEREAU_BORD002_MywayImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module Myway.Sagopc.OperationFinanciere {
    enum sixienteteetsLogoEtablissementContent {
        Id = 0,
        Flux = 1,
    }
    interface IsagSiprgceBordereauBord002Myway {
        section1: IsagSiprgceBordereauBord002MywaySection1[];
        sixienteteets: Isixienteteets[];
        sixipiedpageets: Isixipiedpageets[];
        attributeId: string;
        attributeXmlns: string;
    }
    interface IsagSiprgceBordereauBord002MywaySection1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03 | Ich04 | Ich05 | Ich06 | Ich07 | Ich08 | Ich09 | Ich010)[];
    }
    interface Ich00 {
        bl1: IsagSiprgceBordereauBord002Section1Bl1;
    }
    interface Ich01 {
        blInfosgene: IsagSiprgceBordereauBord002Section1BlInfosgene;
    }
    interface Ich02 {
        blLignes: IsagSiprgceBordereauBord002Section1BlLignes;
    }
    interface Ich03 {
        blLignes2: IsagSiprgceBordereauBord002Section1BlLignes2;
    }
    interface Ich04 {
        blSuite: IsagSiprgceBordereauBord002Section1BlSuite;
    }
    interface Ich05 {
        blSuiteFin: IsagSiprgceBordereauBord002Section1BlSuiteFin;
    }
    interface Ich06 {
        blSuiteMon: IsagSiprgceBordereauBord002Section1BlSuiteMon;
    }
    interface Ich07 {
        blAvis: number;
    }
    interface Ich08 {
        blSaut: number;
    }
    interface Ich09 {
        sixiclausecnil: number;
    }
    interface Ich010 {
        sixisignatureBord2: IsixisignatureBord2;
    }
    interface Isixienteteets {
        logoEtablissement: Myway.Sagopc.OperationFinanciere.IsixienteteetsLogoEtablissement;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        dateEdition: string;
        heureEdition: string;
        numRefdoc: string;
        codeBarre: string;
        refActe: string;
    }
    interface IsixienteteetsLogoEtablissement {
        Content: Myway.Sagopc.OperationFinanciere.sixienteteetsLogoEtablissementContent;
        Value: string;
    }
    interface Isixipiedpageets {
        listePiedets: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedets[];
    }
    interface IsixipiedpageetsListePiedets {
        b10175: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB10175[];
        b13135: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB13135[];
        b13705: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB13705[];
        b14445: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB14445[];
        b14505: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB14505[];
        b15135: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB15135[];
        b15905: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB15905[];
        b15965: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB15965[];
        b16275: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB16275[];
        b18025: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB18025[];
        b18279: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB18279[];
        b43199: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB43199[];
        b18715: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB18715[];
        b13335: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB13335[];
        b17515: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB17515[];
        b62108: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB62108[];
        b12579: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB12579[];
        b13825: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB13825[];
        b16705: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB16705[];
        b12135: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB12135[];
        b14265: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB14265[];
        b13485: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB13485[];
        b18315: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB18315[];
        b11315: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB11315[];
        b11425: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB11425[];
        b12548: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB12548[];
        b30051: Myway.Sagopc.OperationFinanciere.IsixipiedpageetsListePiedetsB30051[];
    }
    interface IsixipiedpageetsListePiedetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IsixipiedpageetsListePiedetsB13135 {
        d13135L1: string;
    }
    interface IsixipiedpageetsListePiedetsB13705 {
        d13705L1: string;
    }
    interface IsixipiedpageetsListePiedetsB14445 {
        d14445L1: string;
    }
    interface IsixipiedpageetsListePiedetsB14505 {
        d14505L1: string;
    }
    interface IsixipiedpageetsListePiedetsB15135 {
        d15135L1: string;
    }
    interface IsixipiedpageetsListePiedetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IsixipiedpageetsListePiedetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IsixipiedpageetsListePiedetsB16275 {
        d16275L1: string;
    }
    interface IsixipiedpageetsListePiedetsB18025 {
        d18025L1: string;
    }
    interface IsixipiedpageetsListePiedetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IsixipiedpageetsListePiedetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IsixipiedpageetsListePiedetsB18715 {
        d18715L1: string;
    }
    interface IsixipiedpageetsListePiedetsB13335 {
        d13335L1: string;
    }
    interface IsixipiedpageetsListePiedetsB17515 {
        d17515L1: string;
    }
    interface IsixipiedpageetsListePiedetsB62108 {
        d62108L1: string;
    }
    interface IsixipiedpageetsListePiedetsB12579 {
        d12579L1: string;
    }
    interface IsixipiedpageetsListePiedetsB13825 {
        d13825L1: string;
    }
    interface IsixipiedpageetsListePiedetsB16705 {
        d16705L1: string;
    }
    interface IsixipiedpageetsListePiedetsB12135 {
        d12135L1: string;
    }
    interface IsixipiedpageetsListePiedetsB14265 {
        d14265L1: string;
    }
    interface IsixipiedpageetsListePiedetsB13485 {
        d13485L1: string;
    }
    interface IsixipiedpageetsListePiedetsB18315 {
        d18315L1: string;
    }
    interface IsixipiedpageetsListePiedetsB11315 {
        d11315L1: string;
    }
    interface IsixipiedpageetsListePiedetsB11425 {
        d11425L1: string;
    }
    interface IsixipiedpageetsListePiedetsB12548 {
        d12548L1: string;
    }
    interface IsixipiedpageetsListePiedetsB30051 {
        d30051L1: string;
    }
    interface IsagSiprgceBordereauBord002Section1Bl1 {
        titre: string;
    }
    interface IsixisignatureBord2 {
        libTitre: string;
        qualiteSignataire: string;
        lidanm: string;
        lidapp: string;
        IMG_SIGNATURE: Myway.Sagopc.OperationFinanciere.IsixisignatureBord2ImgSignature;
        libProcuration: string;
    }
    interface IsixisignatureBord2ImgSignature {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlInfosgene {
        d3: string;
        d9: string;
        d4: string;
        d10: string;
        d5: string;
        d12: string;
        d6: string;
        d7: string;
        d8: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlLignes {
        liste0: Myway.Sagopc.OperationFinanciere.IsagSiprgceBordereauBord002Section1BlLignesListe0[];
    }
    interface IsagSiprgceBordereauBord002Section1BlLignesListe0 {
        ligne1: number;
        ligne2: Myway.Sagopc.OperationFinanciere.IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne2[];
        ligne2bis: Myway.Sagopc.OperationFinanciere.IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne2bis[];
        ligne6: Myway.Sagopc.OperationFinanciere.IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne6[];
        ligne5: Myway.Sagopc.OperationFinanciere.IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne5[];
        ligne5bis: Myway.Sagopc.OperationFinanciere.IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne5bis[];
        ligne3: Myway.Sagopc.OperationFinanciere.IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne3[];
        ligne4: number;
    }
    interface IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne2 {
        d1: string;
        d2: string;
        d3: string;
        d4: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne2bis {
        d1b: string;
        d2b: string;
        d3b: string;
        d4b: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne6 {
        d31: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne5 {
        d21: string;
        d22: string;
        d23: string;
        d24: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne5bis {
        d21b: string;
        d22b: string;
        d23b: string;
        d24b: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlLignesListe0Ligne3 {
        d6: string;
        d7: string;
        d8: string;
        d9: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlLignes2 {
        liste0: Myway.Sagopc.OperationFinanciere.IsagSiprgceBordereauBord002Section1BlLignes2Liste0[];
    }
    interface IsagSiprgceBordereauBord002Section1BlLignes2Liste0 {
        ligne2: number;
    }
    interface IsagSiprgceBordereauBord002Section1BlSuite {
        d1: string;
        d2: string;
        d6: string;
        d7: string;
        d8: string;
        d9: string;
        d10: string;
        d5: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlSuiteFin {
        d5: string;
        d6: string;
        d7: string;
        d8: string;
        d9: string;
        d10: string;
        d11: string;
    }
    interface IsagSiprgceBordereauBord002Section1BlSuiteMon {
        nb1: string;
        vb1: string;
        np1: string;
        vp1: string;
        nb2: string;
        vb2: string;
        np2: string;
        vp2: string;
        nb3: string;
        vb3: string;
        np3: string;
        vp3: string;
        nb4: string;
        vb4: string;
        np4: string;
        vp4: string;
        nb5: string;
        vb5: string;
        np5: string;
        vp5: string;
        nb6: string;
        vb6: string;
        np6: string;
        vp6: string;
        nb7: string;
        vb7: string;
        np7: string;
        vp7: string;
        np8: string;
        vp8: string;
        totBil: string;
        totMon: string;
        totEnc: string;
    }
    class SagSiprgceBordereauBord002Myway implements IsagSiprgceBordereauBord002Myway {
        section1: IsagSiprgceBordereauBord002MywaySection1[];
        sixienteteets: Isixienteteets[];
        sixipiedpageets: Isixipiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SagSiprgceBordereauBord002MywayArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SagSiprgceBordereauBord002MywayGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SagSiprgceBordereauBord002MywayArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SagSiprgceBordereauBord002MywayImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SagSiprgceBordereauBord002MywayArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SagSiprgceBordereauBord002MywayImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module Myway.Sagopc.AlimentationOppCarte {
    function createDocument(context: IApplicationContext): sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarte;
    function createImpressionParams(context: IApplicationContext): sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteImpressionParams;
    function createArchiverParams(context: IApplicationContext): sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteArchiverGenererParams;
    function createArchiverImpressionParams(context: IApplicationContext): sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteArchiverImpressionParams;
}

declare module Myway.Sagopc.sirpgce_opposition_OppoCarte {
    enum GENERIC_ENTETEETSLOGO_ETABLISSEMENTContent {
        Id = 0,
        Flux = 1,
    }
    interface Isirpgce_opposition_OppoCarte {
        SECTION1: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1[];
        genericRgpdSecretBancaire1: Sagopc.sirpgce_opposition_OppoCarte.genericRgpdSecretBancaire1docx[];
        GENERIC_ENTETEETS: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1 {
        _blocChoice_: (choice_sirpgce_opposition_OppoCarteSECTION1_BL_1 | choice_sirpgce_opposition_OppoCarteSECTION1_GENERIC_INFO_PP | choice_sirpgce_opposition_OppoCarteSECTION1_GENERIC_INFO_PM | choice_sirpgce_opposition_OppoCarteSECTION1_BL_2 | choice_sirpgce_opposition_OppoCarteSECTION1_BL_3 | choice_sirpgce_opposition_OppoCarteSECTION1_BL_4 | choice_sirpgce_opposition_OppoCarteSECTION1_BL_5 | choice_sirpgce_opposition_OppoCarteSECTION1_BL_6 | choice_sirpgce_opposition_OppoCarteSECTION1_BL_7 | choice_sirpgce_opposition_OppoCarteSECTION1_BL_SIGNATURE)[];
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_BL_1 {
        BL_1: sirpgce_opposition_OppoCarteSECTION1BL_1;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_GENERIC_INFO_PP {
        GENERIC_INFO_PP: GENERIC_INFO_PP;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_GENERIC_INFO_PM {
        GENERIC_INFO_PM: GENERIC_INFO_PM;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_BL_2 {
        BL_2: sirpgce_opposition_OppoCarteSECTION1BL_2;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_BL_3 {
        BL_3: sirpgce_opposition_OppoCarteSECTION1BL_3;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_BL_4 {
        BL_4: sirpgce_opposition_OppoCarteSECTION1BL_4;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_BL_5 {
        BL_5: sirpgce_opposition_OppoCarteSECTION1BL_5;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_BL_6 {
        BL_6: sirpgce_opposition_OppoCarteSECTION1BL_6;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_BL_7 {
        BL_7: sirpgce_opposition_OppoCarteSECTION1BL_7;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1_BL_SIGNATURE {
        BL_SIGNATURE: sirpgce_opposition_OppoCarteSECTION1BL_SIGNATURE;
    }
    interface genericRgpdSecretBancaire1docx {
        blTitreSecretBancaire: number;
        libLaleEts1: string;
        urlEts: string;
        libLaleEts2: string;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
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
        attributeContent: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_ENTETEETSLOGO_ETABLISSEMENTContent;
        valueImgJson: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB10175[];
        b13135: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB13135[];
        b13705: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB13705[];
        b14445: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB14445[];
        b14505: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB14505[];
        b15135: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB15135[];
        b15905: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB15905[];
        b15965: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB15965[];
        b16275: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB16275[];
        b18025: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB18025[];
        b18279: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB18279[];
        b43199: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB43199[];
        b18715: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB18715[];
        b13335: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB13335[];
        b17515: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB17515[];
        b62108: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB62108[];
        b12579: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB12579[];
        b13825: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB13825[];
        b16705: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB16705[];
        b12135: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB12135[];
        b14265: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB14265[];
        b13485: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB13485[];
        b18315: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB18315[];
        b11315: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB11315[];
        b11425: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB11425[];
        b12548: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB12548[];
        b30051: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETSB30051[];
    }
    interface GENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13135 {
        d13135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14445 {
        d14445_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15135 {
        d15135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18025 {
        d18025_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13335 {
        d13335_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB62108 {
        d62108_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13825 {
        d13825_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12135 {
        d12135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13485 {
        d13485_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11315 {
        d11315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12548 {
        d12548_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_1 {
        Titre: string;
    }
    interface GENERIC_INFO_PM {
        LISTE_PERSONNES: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_INFO_PMLISTE_PERSONNES[];
    }
    interface GENERIC_INFO_PMLISTE_PERSONNES {
        _blocChoice_: (choice_GENERIC_INFO_PMLISTE_PERSONNES_TITRE_ROLE | choice_GENERIC_INFO_PMLISTE_PERSONNES_INFOS_PM)[];
    }
    interface choice_GENERIC_INFO_PMLISTE_PERSONNES_TITRE_ROLE {
        TITRE_ROLE: GENERIC_INFO_PMLISTE_PERSONNESTITRE_ROLE;
    }
    interface choice_GENERIC_INFO_PMLISTE_PERSONNES_INFOS_PM {
        INFOS_PM: GENERIC_INFO_PMLISTE_PERSONNESINFOS_PM;
    }
    interface GENERIC_INFO_PMLISTE_PERSONNESINFOS_PM {
        LIDARS: string;
        DADATJ: string;
        LIDGV2_6: string;
        IDNSBD: string;
        NODATP: string;
    }
    interface GENERIC_INFO_PMLISTE_PERSONNESTITRE_ROLE {
        LIB_CTDHLI: string;
    }
    interface GENERIC_INFO_PP {
        LISTE_PERSONNES: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_INFO_PPLISTE_PERSONNES[];
    }
    interface GENERIC_INFO_PPLISTE_PERSONNES {
        _blocChoice_: (choice_GENERIC_INFO_PPLISTE_PERSONNES_TITRE_ROLE | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS2 | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS3 | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS_VIDE)[];
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_TITRE_ROLE {
        TITRE_ROLE: GENERIC_INFO_PPLISTE_PERSONNESTITRE_ROLE;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS {
        INFOS_PERS: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS2 {
        INFOS_PERS2: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS2;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS3 {
        INFOS_PERS3: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS3;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS_VIDE {
        INFOS_PERS_VIDE: number;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS {
        LIDACV: string;
        LIDANM: string;
        NOM_PRENOM_CLIENT: string;
        LIB_CODIRC: string;
        DADANA: string;
        LIDGIL_NAISSANCE: string;
        LIDGV2_6: string;
        LIDGNA: string;
        IDNSBD: string;
        NODATP_CLIENT: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS2 {
        LIDACV2: string;
        NOM_PRENOM_CLIENT2: string;
        LIDANM2: string;
        NOM_USAGE2: string;
        LIB_CODIRC2: string;
        DADANA2: string;
        LIDGIL_NAISSANCE2: string;
        LIDGV2_62: string;
        LIDGNA2: string;
        IDNSBD2: string;
        NODATP_CLIENT2: string;
        SITUATION_FAMILLE2: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS3 {
        LIDACV3: string;
        NOM_PRENOM_CLIENT3: string;
        LIDANM3: string;
        NOM_USAGE3: string;
        LIB_CODIRC3: string;
        DADANA3: string;
        LIDGIL_NAISSANCE3: string;
        LIDGV2_63: string;
        LIDGNA3: string;
        IDNSBD3: string;
        NODATP_CLIENT3: string;
        SITUATION_FAMILLE3: string;
        REGIME_MATRIMONIAL3: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESTITRE_ROLE {
        LIB_CTDHLI: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_2 {
        LISTE1: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1[];
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1 {
        _blocChoice_: (choice_sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1_LIGNE1 | choice_sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1_LIGNE2)[];
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1_LIGNE1 {
        LIGNE1: sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1LIGNE1;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1_LIGNE2 {
        LIGNE2: sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1LIGNE2;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1LIGNE1 {
        BL2_LIB1: string;
        Date_declaration: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_2LISTE1LIGNE2 {
        BL2_LIB2: string;
        Date_confirmation: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_3 {
        LISTE2: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2[];
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2 {
        _blocChoice_: (choice_sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2_LIGNE1 | choice_sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2_LIGNE2 | choice_sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2_LIGNE3 | choice_sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2_LIGNE4)[];
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2_LIGNE1 {
        LIGNE1: sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2LIGNE1;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2_LIGNE2 {
        LIGNE2: sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2LIGNE2;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2_LIGNE3 {
        LIGNE3: sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2LIGNE3;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2_LIGNE4 {
        LIGNE4: sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2LIGNE4;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2LIGNE1 {
        BL3_LIB1: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2LIGNE2 {
        BL3_LIB2: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2LIGNE3 {
        BL3_LIB3: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_3LISTE2LIGNE4 {
        BL3_LIB4: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_4 {
        LISTE3: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3[];
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3 {
        _blocChoice_: (choice_sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3_LIGNE1 | choice_sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3_LIGNE2 | choice_sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3_LIGNE3)[];
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3_LIGNE1 {
        LIGNE1: sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3LIGNE1;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3_LIGNE2 {
        LIGNE2: sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3LIGNE2;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3_LIGNE3 {
        LIGNE3: sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3LIGNE3;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3LIGNE1 {
        BL4_LIB1: string;
        Carte_numero: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3LIGNE2 {
        BL4_LIB2: string;
        Porteur: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_4LISTE3LIGNE3 {
        BL4_LIB3: string;
        Motif: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_5 {
        LISTE4: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4[];
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4 {
        _blocChoice_: (choice_sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4_LIGNE1 | choice_sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4_LIGNE2)[];
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4_LIGNE1 {
        LIGNE1: sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4LIGNE1;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4_LIGNE2 {
        LIGNE2: sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4LIGNE2;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4LIGNE1 {
        BL5_LIB1: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_5LISTE4LIGNE2 {
        Date_expiration: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_6 {
        LISTE5: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5[];
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5 {
        _blocChoice_: (choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE1 | choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE2 | choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE3 | choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE4 | choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE5)[];
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE1 {
        LIGNE1: sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE1;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE2 {
        LIGNE2: sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE2;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE3 {
        LIGNE3: sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE3;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE4 {
        LIGNE4: sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE4;
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5_LIGNE5 {
        LIGNE5: sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE5;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE1 {
        BL6_LIB1: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE2 {
        BL6_LIB2: string;
        Montant1: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE3 {
        BL6_LIB3: string;
        Beneficiaire: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE4 {
        BL6_LIB4: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_6LISTE5LIGNE5 {
        BL6_LIB5: string;
        Montant2: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_7 {
        LISTE6: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1BL_7LISTE6[];
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_7LISTE6 {
        _blocChoice_: (choice_sirpgce_opposition_OppoCarteSECTION1BL_7LISTE6_LIGNE1)[];
    }
    interface choice_sirpgce_opposition_OppoCarteSECTION1BL_7LISTE6_LIGNE1 {
        LIGNE1: sirpgce_opposition_OppoCarteSECTION1BL_7LISTE6LIGNE1;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_7LISTE6LIGNE1 {
        BL7_LIB1: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_SIGNATURE {
        ETABLISSEMENT: string;
        IMG_SIGNATURE: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1BL_SIGNATUREIMG_SIGNATURE;
        AGENT: string;
        PIECE: string;
    }
    interface sirpgce_opposition_OppoCarteSECTION1BL_SIGNATUREIMG_SIGNATURE {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    class sirpgce_opposition_OppoCarte implements Isirpgce_opposition_OppoCarte {
        SECTION1: Sagopc.sirpgce_opposition_OppoCarte.sirpgce_opposition_OppoCarteSECTION1[];
        genericRgpdSecretBancaire1: Sagopc.sirpgce_opposition_OppoCarte.genericRgpdSecretBancaire1docx[];
        GENERIC_ENTETEETS: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Sagopc.sirpgce_opposition_OppoCarte.GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class sirpgce_opposition_OppoCarteArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class sirpgce_opposition_OppoCarteGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class sirpgce_opposition_OppoCarteArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class sirpgce_opposition_OppoCarteImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class sirpgce_opposition_OppoCarteArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class sirpgce_opposition_OppoCarteImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module Myway.Sagopc {
    /**
     * Contrôleur de la directive mwIdentificationSignataire
     */
    class IdentificationSignataireController {
        private modale;
        private $q;
        private identificationSignataireService;
        private sagopcService;
        protected logger: LoggerService;
        private serviceAgentExtended;
        protected ressourcesService: RessourcesService;
        identificationSignataire: IIdentificationSignataire;
        controleEditique: boolean;
        parametresJustificatif: myway.comEditiqueNumerisation.IJustificatifSettings;
        /**
         * constante définissant l'habilitation passée au composant de justificatifs
         *
         */
        private codeHabilitationSmartnum;
        static $inject: string[];
        constructor(modale: ng.ui.bootstrap.IModalServiceInstance, $q: ng.IQService, identificationSignataireService: IdentificationSignataireService, sagopcService: SagopcService, logger: LoggerService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, ressourcesService: RessourcesService);
        /**
         *
         */
        beforeSmartnum(): ng.IPromise<void>;
        /**
         * Valider le formulaire d'identification du signataire
         */
        validerIdentificationSignataire(): void;
        /**
         * Contrôler la table SU1P.
         * Ce contrôle permet de savoir s'il est possible d'utiliser le composant éditique
         */
        controlerTableSU1P(): void;
        /**
         * Appel au service DRC pour la configuration Smartnum
         */
        private genererObjetParametrage();
    }
}

declare module Gce.EditiqueVente.Services.Documents.SIKTGCE_Carte {
    interface ISIKTGCE_Carte {
        SECTION1: SIKTGCE_CarteSECTION1[];
        SECTION2: SIKTGCE_CarteSECTION2[];
        SECTION3: SIKTGCE_CarteSECTION3[];
        SECTION4: SIKTGCE_CarteSECTION4[];
        SECTION5: SIKTGCE_CarteSECTION5[];
        GENERIC_ENTETEETS: Editique.Generique.GENERIC_ENTETEETS[];
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
        GENERIC_ENTETEETS: Editique.Generique.GENERIC_ENTETEETS[];
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

declare module Myway.Sagopc.ClasseurClient {
    interface IPorteur {
        idPorteur: string;
        typePorteur: string;
    }
    interface IDossier {
        codeApp: string;
        idDossier: string;
        codeEvenementMetier: string;
        dateCreation: Date;
        dateModification: Date;
        libelleDossier: string;
        libelleMotif: string;
        indicateurCompletude: string;
        typeDossier: string;
        porteur: IPorteur;
        referenceContexte: string;
        indicateurEnCoursAcquisition: boolean;
    }
    interface IRechercherDossierOutput {
        dossiers: Array<IDossier>;
    }
    interface IRechercherPieceValideDRCOutput {
        documents: Array<IDocument>;
    }
    interface IDocument {
        idDocument: string;
        typeDocument: string;
        codeNature: string;
        idPersonne: string;
    }
}

declare module Myway.Sagopc {
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
        dateDeclaration: string;
        dateConfirmation: string;
        motif: string;
        numeroCarteTempo: string;
        operation: IOperations[];
        numeroCarte: string;
        designationTitulaireCarte: string;
        dateFinValiditeCarte: string;
        typeCarte: string;
        caracteristiquesOppoL1: string;
        caracteristiquesOppoL2: string;
        caracteristiquesOppoL3: string;
        listeOperation: Array<IOperationBordereauOPFI>;
        montantEspecesDepot: string;
        montantMonnaieDepot: string;
        detailsBilleterieDepot: IDetailBilleterie;
        montantEspecesRetrait: string;
        montantMonnaieRetrait: string;
        detailsBilleterieRetrait: IDetailBilleterie;
        poste: string;
        bureauGuichet: string;
        numeroAgent: string;
        affichageAvis: boolean;
        libLaleEts1: string;
        urlEts: string;
        libLaleEts2: string;
        nomPrenomSignataire: string;
        libelleTitulaire: string;
        donneesVirement?: myway.comContract.SAGOPC.Modeles.IDonneesVirement;
        donneesEcheancier?: myway.comContract.SAGOPC.Modeles.IDonneesEcheancier;
        donneesVirementInterne?: myway.comContract.SAGOPC.Modeles.IDonneesVirementInterne;
    }
    interface IOperationBordereauOPFI {
        intituleOperation: string;
        dateOperation: string;
        libelleComplementaire: string;
        sensImputationCompte: string;
        montant: string;
        numChequeBanque: string;
        libelleCompte: string;
        numeroCompte: string;
        codeDevise: string;
        soldeCompte: string;
        beneficiaireChequeBanque: string;
        listeMontantCheques: string[];
    }
    interface IDetailBilleterie {
        nbBillets5: string;
        nbBillets10: string;
        nbBillets20: string;
        nbBillets50: string;
        nbBillets100: string;
        nbBillets200: string;
        nbBillets500: string;
    }
    interface IPlafondCarte {
        libelle: string;
        montant: string;
        monnaie: string;
        nbJours: string;
    }
    interface IOperations {
        numeroCompte: string;
        typeOperation: string;
        montant: string;
        titreRolePersonne: string;
    }
}

declare module Myway.Sagopc {
    interface IContexteCarteTempo {
        libelleTitulaire: string;
        adresse: string;
        numeroCarte: string;
    }
}

declare module Myway.Sagopc.TiersNoyau {
    /**
     * La classe IdentificationConstants d�finit l'URI de la ressource REST tiersNoyau.
     */
    class TiersNoyauConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module Myway.Sagopc.TiersNoyau {
    /**
     * La classe IdentificationRequestFactory permet de produire la requ�te de la ressource identification.
     */
    class TiersNoyauRequestFactory {
        constructor();
        create(codeEtablissement: string, identifiantPersonne: number): MyWay.Services.IRequestSettings;
    }
}
