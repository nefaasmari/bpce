
declare module myway.comEditiqueNumerisation {
    var app: ng.IModule;
}

declare module myway.comEditiqueNumerisation.Enums {
    enum TypeRemiseEnum {
        EMAIL = 1,
        IMPRESSION = 2,
    }
    class RemiseCGEventsEnum extends MyWay.Services.StringEnum {
        static VALIDER: RemiseCGEventsEnum;
        static ENABLE_VALIDATE: RemiseCGEventsEnum;
        static ACTION_VALIDATE: RemiseCGEventsEnum;
        static AUTOMATIC_VALIDATE: RemiseCGEventsEnum;
    }
    enum TypeEtablissementEnum {
        CAISSE_EPARGNE = 1,
        BCP = 2,
        AUTRE = 3,
        CREDIT_COOP = 4,
        BANQUE_BTP = 5,
    }
}

declare module myway.comEditiqueNumerisation.Modeles {
    interface IResultatCGHorsMSI {
        isRemisAuClient: boolean;
        isEditionPosteTravail: boolean;
    }
    interface IEtatMSI {
        adresseEMAIL: string;
        codeEtatBALMSI: string;
        dateCreationBALMSI: string;
        dateDerniereMajBALMSI: string;
        tsDerniereConnexion: string;
    }
    interface IDocumentEntreprise {
        cleRattachement: string;
        url: string;
        libelle: string;
    }
    interface IRemiseCG {
        codeActeGestion: string;
        actesSecondaires: string[];
        codeCanal: string;
        modeMiseGestion: string;
        typeMarche: string;
        isModePapier?: boolean;
        modeSignature?: string;
        list?: IDocumentEntreprise[];
    }
    interface IFichier {
        nom: string;
        url: string;
    }
    interface IMediaResponse {
        listeMedia: IMedia[];
    }
    interface IMedia {
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

declare module myway.comEditiqueNumerisation.Modeles.contactElectronique {
    interface IInputEnvoi {
        applicationOrigine: string;
        numeroPersonne: string;
        supportCommunication: string;
        plageHoraire?: IPlageHoraire;
        message: IDetailsMessage;
    }
    interface IToken {
        valeur: string;
        cle: string;
    }
    interface IPlageHoraire {
        dateDebut: Date;
        dateFin: Date;
        amplitudeHoraireDebut: number;
        amplitudeHoraireFin: number;
    }
    interface IDetailsMessage {
        priorite: number;
        accuseReception: string;
        objet?: string;
        corps?: string;
        typeDestinataire: number;
        destinataire: string;
        modele?: number;
        tokens?: Array<IToken>;
    }
}

declare module myway.comEditiqueNumerisation.Modeles {
    interface IDocumentParametre {
        acte: IActeGestion;
        listeDocumentActe: IDocumentActe[];
    }
    interface IDocumentActe {
        codeTypeDocument: string;
        codeNaturePJ: string;
        codeTypeJustificatif: string;
        codeNatureGED: string;
        codeTechniqueImpression: string;
        indicateurDocumentObligatoire: boolean;
        indicateurNonMaterialisation: boolean;
        codeTypeAttributaireDocument: string;
        codeApplicationTechniqueEdition: string;
        codeMaquette: string;
        indicateurDocumentEntreprise: boolean;
        libelleDocumentEntreprise: string;
        libelleExterneDocumentEntreprise: string;
        identifiantDocumentGED: string;
        codeTypeDocumentICG: string;
        codeTypeFichier: string;
        codeModeContractualisation: string;
        codeActionSignatureDocument: string;
        indicateurPartageDocumentICG: boolean;
        codeFamilleActe: string;
        codeObjetActe: string;
        libelleDocumentContract: string;
        indicClasseEligibleSignature: boolean;
        codeClasseDocumentEntreprise: string;
    }
    interface IActeGestion {
        codeEtablissementFinancier: string;
        codeActeGestion: string;
        codeModeMiseGestion: string;
        codeCanal: string;
        codeTypeMarcheEntreprise: string;
    }
    interface IVisualisationCG {
        headerText: string;
        model: IVisualisationCGModel;
    }
    interface IVisualisationCGModel {
        idDocuments: string[];
    }
}

declare module myway.comEditiqueNumerisation.Enums {
    enum TypeJustificatifEnum {
        JUSTIFICATIF_IDENTITE = 0,
        JUSTIFICATIF_DOMICILE = 1,
        JUSTIFICATIF_REVENU = 2,
        AVIS_IMPOSITION = 3,
    }
}

declare module myway.comEditiqueNumerisation.Enums {
    class TypePersonne extends MyWay.Services.StringEnum {
        static PERSONNE_PHYSIQUE: TypePersonne;
        static PERSONNE_MORALE: TypePersonne;
        static PERSONNE_PRO: TypePersonne;
    }
}

declare module myway.comEditiqueNumerisation.Modeles {
    interface IEntiteTitulaire {
        codeEtablissement: string;
        codeEtatEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        complementDesignationEntiteTitulaire: string;
        designationEntiteTitulaire: string;
        identifiantEntiteTitulaire: number;
        modeCompositionEntiteTitulaire: string;
        modeCompositionIndivision: string;
    }
    interface IDossier {
        numeroCRDU: string;
        codeRetourEchanges: number;
        motifs: IMotifEligibilite[];
        /**
         * Type de porteur du dossier
         */
        typePorteur: string;
        /**
         * Porteur du dossier (numéro de personne dans notre cas car c'est un DRC)
         */
        porteur: string;
        /**
         * Numéro chrono du professionnel
         */
        numeroChronoProfessionnel: number;
    }
    interface IMotifEligibilite {
        codeEligibiliteDossier: string;
        libelle: string;
        code: string;
    }
    interface INumerisationInput {
        codeEtablissement?: string;
        codeCapaciteJuridique?: string;
        identifiantPersonne: number;
        libellePersonne?: string;
        /**
         * Code catégorie juridique, uniquement pour la BDR
         */
        codeCategorieJuridique?: string;
    }
    interface ICodeLisaNumerisation {
        sortie: number;
        classeurClient: number;
    }
    interface IJustificatifDonnees {
        numerisation: INumerisationInput;
        typePersonne: Enums.TypePersonne;
    }
    interface IContexteMajDRC {
        numeroEntiteTitulaire: number;
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantAgencePersonne: number;
    }
    interface IContexteDossier {
        LIST_IDNT_DOSS: string;
        IDNT_ETAB: string;
        IDNT_PERS: string;
    }
    interface IParticulierInformation {
        edsInterneDomiciliation: number;
        edsDomiciliation: number;
    }
    interface IInformationEDS {
        identifiantEDS: number;
        typeEDS: string;
        referenceExterneEDS: number;
    }
    interface ICaracteristiqueEDS {
        infoEDS: ICaracteristiqueEDSInfo;
    }
    interface ICaracteristiqueEDSInfo {
        typeEDS: string;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class CommunService {
        private serviceAgent;
        private ressourceService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, ressourceService: RessourceService);
        rechercheEntiteTitulaire(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Modeles.IEntiteTitulaire[]>;
        b64toBlob(b64Data: string, contentType?: string, sliceSize?: number): Blob;
        verifiePresenceTablette(): ng.IPromise<boolean>;
        getTypeEtablissement(): ng.IPromise<Enums.TypeEtablissementEnum>;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    interface IPieceEnAlerte {
        typeJustificatif: string;
        libelleTypeJustificatif: string;
    }
    interface ICompletudeDRC {
        piecesManquantes: string[];
        piecesEnAlerte: IPieceEnAlerte[];
        etatCompletude: string;
        nombrePiecesConcernees: number;
    }
    class CompletudeDrcService {
        protected $q: ng.IQService;
        protected serviceAgent: MyWay.Services.ServiceAgentExtended;
        protected ressourceService: RessourceService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, ressourceService: RessourceService);
        verifieCompletudeDRC(identifiantPorteur: string, typeEntiteSupport?: string): ng.IPromise<ICompletudeDRC>;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class ConditionsGeneralesService {
        private $q;
        private $sce;
        private $window;
        private serviceAgent;
        private communService;
        private gedService;
        private ressourceService;
        static TYPE_CG: string;
        static $inject: string[];
        constructor($q: ng.IQService, $sce: ng.ISCEService, $window: ng.IWindowService, serviceAgent: MyWay.Services.ServiceAgentExtended, communService: Services.CommunService, gedService: MyWay.PieceJointe.GedService, ressourceService: RessourceService);
        hasMessagerieSecuriseeInternet(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
        findEmail(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
        private electionEmail(mediasEmail);
        chargeCG(documents: Modeles.IDocumentActe[], codeEtablissement: string, documentFournis?: Modeles.IDocumentEntreprise[]): ng.IPromise<Modeles.IFichier[]>;
        envoiCGParEmail(typeEtablissement: Enums.TypeEtablissementEnum, documents: Modeles.IDocumentActe[], email: string, numeroPersonne: string, documentFournis?: Modeles.IDocumentEntreprise[]): ng.IPromise<boolean>;
        private contientUrlVide(documentFournis);
        private getUrlCGP(typeEtablissement);
        private createInputEnvoi(typeEtablissement, numeroPersonne, email, documents);
        private recuperationLiens(documents);
        envoiMail(input: Modeles.contactElectronique.IInputEnvoi): ng.IPromise<boolean>;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class DossierPropagationService {
        private $q;
        private serviceAgent;
        private ressourceService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, ressourceService: RessourceService);
        propagerDocumentsGED(data: Myway.Ressource.DossierPropagation.IQstnPropagerDocumentsGED): ng.IPromise<Myway.Ressource.DossierPropagation.IRspnPropagerDocumentGED>;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class EditiqueService {
        private serviceAgent;
        private ressourceService;
        private authentificationInfos;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, ressourceService: RessourceService);
        getDocumentsByActeGestion(data: Modeles.IRemiseCG, filtreTypeDocument?: string): ng.IPromise<Modeles.IDocumentActe[]>;
        private unique<T>(array, propertie);
    }
}

declare module myway.comEditiqueNumerisation.Services {
    /**
     * Service dédié à la gestion des justificatifs.
     * Injection angular: EditiqueJustificatifService
     */
    class JustificatifService {
        private $q;
        private serviceAgent;
        private pieceJointeService;
        private gedService;
        private dossierPropagationService;
        private contexteJustificatif;
        private promiseLoadContexteJustificatif;
        private promiseAcquisitionSortie;
        private promiseTraiterAcquisitionSortie;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, pieceJointeService: MyWay.PieceJointe.PieceJointeService, gedService: MyWay.PieceJointe.GedService, dossierPropagationService: DossierPropagationService);
        /**
         * Valide les documents dans le draft de la GED.
         *
         * Les documents à valider sont récupérés du contexte éditique.
         *
         * Il y a un appel rest par document à valider donc un tableau de promesses en retour d'erreur.
         */
        validerDocumentsDrafts(attributaire: IAttributaire): ng.IPromise<boolean[]>;
        /**
         * Propager les documents de la GED dans classeur client
         */
        propagerDocumentsGED(dossier: Modeles.IDossier): ng.IPromise<Myway.Ressource.DossierPropagation.IRspnPropagerDocumentGED>;
        /**
         * Renvoie la structure d'acquisition de sortie de SmartNum.
         */
        getAcquisitionSortie(): ng.IPromise<SmartNum.IAcquisitionSortie>;
        /**
         * Traite le résultat de l'acquisition en mettant à jour le contexte éditique avec tous les documents numérisés.
         *
         * Cette méthode est conçue pour exécuter le traitement une seule fois.
         *
         * Pour les appels successifs, la promesse sera résolue lorsque le traitement initial sera terminé.
         */
        traiterAcquisitionSortie(): ng.IPromise<void>;
        /**
         * Renvoie un document qui a été numérisé provenant de l'acquisition.
         */
        getDocumentFromAcquisitionSortie(identifiantFonctionnel: string): ng.IPromise<SmartNum.IDocumentSortie>;
        /**
         * Renvoie l'id technique du document s'il existe dans le contexte myway.
         */
        getDocumentJustificatifContexte(identifiantFonctionnel: string): ng.IPromise<IDocumentJustificatif>;
        /**
         * Enregistre l'id technique du document dans le contexte myway.
         */
        setDocumentJustificatifContexte(document: IDocumentJustificatif): ng.IPromise<void>;
        /**
         * Renvoie le contexte des justificatifs.
         */
        getContexteJustificatif(): ng.IPromise<IContexteEditiqueJustificatif>;
        /**
         * Charge le contexte des justificatifs et stocke l'objet dans le service puisqu'il sera manipulé par tous les composants
         */
        private loadContexteJustificatif();
        /**
         * Enregistre le contexte des justificatifs
         */
        private saveContexteJustificatif();
        /**
         * Numériser un justificatif (débranchement vers l'application SmartNum)
         */
        numeriserPieceJointe(settings: IJustificatifSettings, beforeNext: () => ng.IPromise<any>): void;
        /**
         *
         * @param settings : IJustificatifSettings
         * @param eventAvantDebranchement  Evènement exécuté avant un débranchement LISA
         */
        private controlerConfigurationAcquisition(settings, eventAvantDebranchement);
        /**
         *
         * @param bouton IBoutonBase
         * @param section
         */
        private controlerHabilitation(bouton, section);
    }
}

declare module myway.comEditiqueNumerisation.Services {
    /**
     * Service de numérisation
     * Injection angular: numerisationService
     */
    class NumerisationService {
        private $q;
        private modalService;
        private serviceAgent;
        private communService;
        private justificatifService;
        private ressourceService;
        private authentificationInfos;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.ModalService, serviceAgent: MyWay.Services.ServiceAgentExtended, communService: Services.CommunService, justificatifService: JustificatifService, ressourceService: RessourceService);
        /**
         * Création ou mise à jour des DRC
         */
        recupereDossierClasseurClient(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne): ng.IPromise<Modeles.IDossier[]>;
        /**
         * @deprecated utiliser la méthode [[appelClasseurClient]].
         */
        numerisation(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne, codeLisa: Modeles.ICodeLisaNumerisation): ng.IPromise<void>;
        /**
         * @deprecated utiliser la méthode [[appelClasseurClient]].
         *
         * Permet de déclencher une maj creation de dossier et un débranchement Lisa vers l'acquisition Classeur client.
         * uniquement si l'agent est correctement habilité.
         */
        numerisationClasseurClient(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne, codeLisaClasseurClient: number, codeLisaSortie: number, isMiseAJourJustificatif?: boolean): ng.IPromise<void>;
        /**
         * @deprecated utiliser la méthode [[appelClasseurClient]]
         */
        numerisationV2(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne, skipPopup?: boolean): ng.IPromise<void>;
        /**
         * Permet de déclencher une maj creation de dossier.
         *
         * Renvoie une promesse résolue pour un débranchement vers classeur client.
         *
         * Sinon, elle sera rejetée avec le motif d'erreur.
         *
         * Actions réalisées dans l'ordre:
         *
         * 1 - contrôle de présence d'un DRC, fin du traitement si aucun
         *
         * 2 - mise à jour du DRC et récupération des dossiers
         *
         * 3 - propagation des documents dans classeur client
         *
         * 4 - si pas habilité à ClasseurClient, fin du traitement et affichage d'une modale d'erreur
         *
         * 5 - affichage d'une modale informative sauf si skipPopup vaut true
         *
         * 6 - si on est sur tablette, rejet de la promesse (pas de lancement de classeur client)
         *
         * 7 - préparation du contexte LISA pour ClasseurClient
         *
         * 8 - résolution de la promesse
         *
         * En cas d'une erreur imprévue, une modale d'erreur sera affichée et la promesse sera rejetée.
         */
        appelClasseurClient(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne, skipPopup?: boolean): ng.IPromise<void>;
        /**
         * Propage les documents acquis dans Classeur Client.
         * La promesse est résolue dans tous les cas même en cas d'erreur.
         */
        propagerDocumentsDRC(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne): ng.IPromise<void>;
        private recupereAuthentificationInfos();
        /**
         * Affiche une popup d'avertissement de mise à jour du DRC ou d'information en cas de tablette.
         * Dans certains cas, l'utilisateur pourra choisir de lancer classeur client ou non.
         * Renvoie une promesse d'un booléen: true si oui ou ok, false sinon
         */
        private informeMajDRC(reponsePropagation, libelleClient, nombreDrc, isOnTablet);
        /**
         * Renvoie un indicateur de présence d'un drc pour la personne.
         * La promesse est rejetée en cas d'erreur technique
         */
        private hasDrc(codeEtablissement, identifiant);
        private recuperationInfosEDS(identifiantPersonne);
    }
}

declare module myway.comEditiqueNumerisation {
    interface IOffset {
        top: number;
        left: number;
        height?: number;
        width?: number;
    }
    interface IScroll {
        scroll: number;
    }
    class PopoverTemplateService {
        private $window;
        static $inject: string[];
        constructor($window: ng.IWindowService);
        applyTooltipPosition(placement: string, tooltipContent: ng.IAugmentedJQuery, picto: ng.IAugmentedJQuery): void;
        private getCalculatedOffset(placement, tooltipContent, picto);
        private getPosition(element);
        private applyPlacement(offset, placement, tooltipContent);
        private replaceArrow(arrow, dimension, isVertical, placement);
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class RessourceService {
        protected $q: ng.IQService;
        protected serviceAgent: MyWay.Services.ServiceAgentExtended;
        classeurClientServiceUrl: string;
        tiersv1ServiceUrl: string;
        tiersServiceUrl: string;
        structureServiceUrl: string;
        entiteTitulaireServiceUrl: string;
        contratServiceUrl: string;
        documentParametreServiceUrl: string;
        outilCommunServiceUrl: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended);
    }
}

declare module myway.comEditiqueNumerisation {
    class IndicateurAlerteJustificatifController {
        private $scope;
        private serviceAgentExtended;
        private completudeDrcService;
        private pieceJointeService;
        private settings;
        isAlerte: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, completudeDrcService: Services.CompletudeDrcService, pieceJointeService: MyWay.PieceJointe.PieceJointeService);
    }
}

declare module myway.comEditiqueNumerisation {
}

declare module myway.comEditiqueNumerisation {
    /**
     * Configuration de la directive mwsfAlerteJustificatif
     */
    interface IAlerteJustificatifSettings {
        /**
         * Identifiant du porteur
         */
        idPorteur: string;
        /**
         * Type de porteur
         */
        typePorteur: string;
        /**
         * Type de justificatif
         */
        typeJustificatif: MyWay.PieceJointe.TypePieceJointeEnum;
    }
}

declare module myway.comEditiqueNumerisation {
    class IndicateurCompletudeDrcController {
        private $scope;
        private $document;
        private $element;
        private serviceAgentExtended;
        private completudeDrcService;
        LONGUEUR_PORTEUR: number;
        typeEntite: string;
        idPorteur: string;
        placementContenu: string;
        ouvert: boolean;
        chargementTermine: boolean;
        completudeDrcResult: Services.ICompletudeDRC;
        indicateur: IndicateurCompletudeEnum;
        private closeEvent;
        static $inject: string[];
        constructor($scope: ng.IScope, $document: ng.IDocumentService, $element: ng.IAugmentedJQuery, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, completudeDrcService: Services.CompletudeDrcService);
        private verificationCompletudeDRC();
        toggle(): void;
        private openInfobulle();
        private closeInfobulle();
    }
}

declare module myway.comEditiqueNumerisation {
}

declare module myway.comEditiqueNumerisation {
    enum IndicateurCompletudeEnum {
        VIDE = 0,
        INCOMPLET = 1,
        ALERTE = 2,
        COMPLET = 3,
    }
}

declare module myway.comEditiqueNumerisation {
    class CompletudeDrcPopoverController {
        private scope;
        private serviceAgentExtended;
        static $inject: string[];
        piecesManquantes: string[];
        piecesEnAlerte: Services.IPieceEnAlerte[];
        ouvert: boolean;
        idBouton: string;
        constructor(scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module myway.comEditiqueNumerisation {
}

declare module myway.comEditiqueNumerisation {
    class JustificatifController {
        private serviceAgentExtended;
        private $q;
        private interDomaineCoreService;
        private pieceJointeService;
        private numerisationService;
        private communService;
        private typeJustificatif;
        private donnees;
        private eventAvantModification;
        private codeEtablissement;
        private titre;
        private isAllowedClasseurClient;
        private consultationAllowed;
        private hasDRC;
        private justificatifDocument;
        private justificatifDocumentErrorFlag;
        private idPersonneString;
        private affichageGlobal;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, interDomaineCoreService: myway.comInterdomaine.InterDomainCoreService, pieceJointeService: MyWay.PieceJointe.PieceJointeService, numerisationService: Services.NumerisationService, communService: Services.CommunService);
        consulterPieceJointe(): void;
        modifierPieceJointe(): any;
        private initBoutonMiseAJour();
        private rechercheJustificatif(typePiece);
        private isAllowConsultation();
        private isAllowMiseAJour();
    }
}

declare module myway.comEditiqueNumerisation {
}

declare module myway.comEditiqueNumerisation {
    class JustificatifControllerV2 {
        private $q;
        private $timeout;
        private serviceAgentExtended;
        private pieceJointeService;
        private numerisationService;
        private communService;
        private justificatifService;
        /**
         * Id du composant dans le DOM (provient de l'attribut id de la directive).
         */
        id: string;
        /**
         * Configuration du composant (provient de l'attribut settings de la directive).
         * Cette configuration viendra en surcharge de la configuration par défaut.
         */
        settings: IJustificatifSettings;
        /**
         * Evènement exécuté avant un débranchement LISA. Doit renvoyer une promesse.
         */
        eventAvantDebranchement: () => ng.IPromise<any>;
        /**
         * Document justificatif (utilisé pour la consultation)
         */
        documentJustificatif: IDocumentJustificatif;
        /**
         * Indicateur d'initialisation du composant. La vue est masqué tant qu'il est false
         */
        isInitialized: boolean;
        /**
         * Indicateur de tablette (afin de désactiver les fonctionnalités non disponibles sur ce support)
         */
        private indicateurTablette;
        /**
         * Fonction à appeler dès qu'une erreur de service rest se produit (provient de l'attribut onError de la directive).
         */
        private onErrorFunction;
        /**
         * Nom de la directive, utilisé par les traces
         */
        private directiveName;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, pieceJointeService: MyWay.PieceJointe.PieceJointeService, numerisationService: Services.NumerisationService, communService: Services.CommunService, justificatifService: Services.JustificatifService);
        /**
         * Visualiser un justificatif
         */
        consulterPieceJointe(): void;
        /**
         * Numériser un justificatif (débranchement vers l'application SmartNum)
         */
        numeriserPieceJointe(): void;
        private controlerHabilitation(bouton, section);
        /**
         * Recherche de l'id du justificatif par ordre de priorité:
         * - dans le contexte myway
         * - dans Classeur Client ou la GED
         */
        private rechercheJustificatif();
        /**
         * Recherche de l'id du justificatif dans le contexte myway
         */
        private rechercheJustificatifFromContexte();
        /**
         * Recherche de l'id du justificatif dans Classeur Client ou la GED
         */
        private rechercheJustificatifFromServer();
        /**
         * Initialisation de la configuration et contrôles de cohérence.
         */
        private initSettings();
        private controlerConfigurationConsultation();
        private controlerConfigurationAcquisition();
        private controlerCoherenceConsultationNumerisation();
    }
}

declare module myway.comEditiqueNumerisation {
}

declare module myway.comEditiqueNumerisation {
    /**
     * Clés d'entrée-sortie de SmartNum dans le contexte myway
     */
    class SmartNumContextKeys {
        static INPUT: string;
        static OUTPUT: string;
    }
    /**
     * Clés d'entrée-sortie de SmartNum dans le contexte myway
     */
    class JustificatifContextKeys {
        static JUSTIFICATIF: string;
    }
    /**
     * Document justificatif
     */
    interface IDocumentJustificatif {
        identifiantFonctionnel: string;
        identifiantTechnique: string;
        /**
         * Indicateur d'une acquisition récente, c'est-à-dire dans le processus myway en cours.
         */
        acquisitionRecente: boolean;
        /**
         * Indicateur de présence du document dans le draft de la GED (par opposition à la GED définitive)
         */
        draft: boolean;
        /**
         * Code nature du document (obligatoire en cas de draft car utilisé pour la validation)
         */
        codeTypeNatrDoc?: string;
        /**
         * Sujet catalogue
         */
        sujetCatalogue?: string;
        /**
         * Définit si le document doit être archivé en GED transitoire ou non (obligatoire en cas de draft car utilisé pour la validation)
         */
        isTransitoire?: boolean;
        /**
         * Date d'émission
         */
        dateEmission?: string;
        /**
         * Date de numérisation
         */
        dateNumerisation?: string;
        /**
         * Porteur du document
         */
        porteur?: IAttributaire;
    }
    /**
     * Contexte éditique des justificatifs
     */
    interface IContexteEditiqueJustificatif {
        /**
         * Table de mapping entre les identifiants fonctionnels et techniques des documents
         * (ces derniers étant renvoyés par SmartNum).
         */
        [identifiantFonctionnel: string]: IDocumentJustificatif;
    }
    /**
     * Variables locales accessibles par la valeur de l'attribut on-error de la directive
     */
    interface IJustificatifOnErrorLocals {
        /**
         * Id du composant (correspond à l'attribut id de la directive)
         */
        id: string;
        /**
         * Contenu de l'erreur (très probablement [[MyWay.Services.Erreur]])
         */
        erreur: any;
        /**
         * Type de l'erreur
         */
        type: JustificatifErreurEnum;
    }
    /**
     * Liste des erreurs importantes au sein du composant justificatif
     */
    const enum JustificatifErreurEnum {
        /**
         * Erreur lors de l'appel de classeur client ou la ged
         */
        RECHERCHE_JUSTIFICATIF = 0,
        /**
         * Erreur lors de la récupération du document dans la ged
         */
        CONSULTATION_JUSTIFICATIF = 1,
    }
}

declare module myway.comEditiqueNumerisation {
    /**
     * Configuration de la directive mwsfJustificatifV2, par défaut: [[justificatifDefaultSettings]]
     */
    interface IJustificatifSettings {
        /**
         * Configuration de la consultation
         */
        consultation?: IConsultationJustificatif;
        /**
         * Configuration de la numérisation
         */
        numerisation?: INumerisationJustificatif;
        /**
         * Mode affichage vertical des boutons (horizontal par défaut)
         */
        verticalLayout?: boolean;
    }
    /**
     * Paramètres de base d'un bouton
     */
    interface IBoutonBase {
        /**
         * Indicateur d'affichage du bouton (false par défaut)
         */
        etat?: boolean;
        /**
         * Code habilitation pour afficher le bouton (affiché si omis)
         */
        codeHabilitation?: string;
        /**
         * Classe CSS pour le bouton (btn-primary, btn-default, btn-zone, btn-contextuel)
         */
        classBouton?: string;
    }
    /**
     * Configuration de la consultation
     */
    interface IConsultationJustificatif extends IBoutonBase {
        /**
         * Identifiant du document au sein de l’application fonctionnelle.
         * Cet identifiant sert à faire le lien avec celui fourni dans la configuration d'entrée de SmartNum,
         * afin de récupérer l'identifiant technique du document numérisé.
         */
        idntFoncDocument?: string;
        /**
         * Libellé du bouton
         */
        libelleBouton?: string;
        /**
         * Type de justificatif (recherche de justificatif dans ClasseurClient)
         */
        typeJustificatif?: MyWay.PieceJointe.TypePieceJointeEnum;
        /**
         * Sujet du catalogue GED (recherche de justificatif dans la GED)
         */
        sujetCatalogueGed?: string;
        /**
         * Code établissement (utilisé pour la recherche de justificatif)
         */
        codeEtablissement?: string;
        /**
         * Identifiant de l'application (utilisé pour la recherche de justificatif)
         */
        codeApplication?: string;
        /**
         * Attributaire, utilisé pour la consultation du justificatif, omis en cas de création
         */
        attributaire?: IAttributaire;
    }
    /**
     * Configuration de la numérisation
     */
    interface INumerisationJustificatif extends IBoutonBase {
        /**
         * Libellé du bouton si présence d'un document consultable.
         * Pour avoir un document consultable, la section consultation doit être active et un document a été trouvé
         * dans ClasseurClient ou la GED.
         */
        libelleBoutonDocumentConsultable?: string;
        /**
         * Libellé du bouton si pas de document consultable.
         * La section consultation est désactivée ou aucun document trouvé.
         */
        libelleBoutonDocumentNonConsultable?: string;
        /**
         * Code sortie LISA permetant de débrancher vers SmartNum
         */
        codeSortieLisaSmartnum?: number;
        /**
         * Configuration d'entrée de SmartNum
         */
        smartnum?: SmartNum.IAcquisitionEntree;
    }
    /**
     * Attributaire
     */
    interface IAttributaire {
        /**
         * Définit le type d'attributaire
         */
        typeAttributaire: string;
        /**
         * Identifiant primaire de l'attributaire.
         */
        idntAttributaire1: string;
        /**
         * Identifiant secondaire de l'attributaire. Il n'est renseigné que pour certains types d'attributaire
         */
        idntAttributaire2?: string;
    }
    /**
     * Configuration par défaut de la directive mwsfJustificatifV2.
     */
    var justificatifDefaultSettings: IJustificatifSettings;
}

declare module myway.comEditiqueNumerisation {
    interface IPopoverScope extends ng.IScope {
        template: string;
        content: string;
        titre: string;
        placement: string;
    }
}

declare module myway.comEditiqueNumerisation {
    class RemiseConditionsGeneralesController {
        private $scope;
        private $rootScope;
        private $q;
        private $timeout;
        private serviceAgent;
        private modalService;
        private cgService;
        private editiqueService;
        private communService;
        static impressionInformation: string;
        static impressionAlerte: string;
        private idPersonne;
        private data;
        private idPersonneNumber;
        private email;
        private typeRemise;
        private enableValider;
        typeRemiseEnum: Enums.TypeRemiseEnum;
        private codeEtablissement;
        private typeEtablissement;
        private pasDeRemise;
        private remiseHorsMSI;
        private fichiersLoaded;
        private fichiers;
        private documents;
        private openHrectractable;
        private isLoading;
        private messageImpression;
        private enErreur;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IScope, $q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgent: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, cgService: Services.ConditionsGeneralesService, editiqueService: Services.EditiqueService, communService: Services.CommunService);
        private terminerPasDeRemise();
        private init();
        private initRemiseHorsMSI();
        private watcherChoixRemiseCg();
        private etatBoutonValider();
        private actionValidation();
        private addListeners();
    }
}

declare module myway.comEditiqueNumerisation {
}

declare module myway.comEditiqueNumerisation {
    class PopupNumerisationController {
        private $modalInstance;
        private isOnTablet;
        private libelleClient;
        nombreDrc: number;
        private reponsePropagation;
        private contexteJustificatif;
        documentsPropages: Myway.Ressource.DossierPropagation.IBlocDocGEDResl[];
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, isOnTablet: boolean, libelleClient: string, nombreDrc: number, reponsePropagation: Myway.Ressource.DossierPropagation.IRspnPropagerDocumentGED, contexteJustificatif: IContexteEditiqueJustificatif);
    }
}
