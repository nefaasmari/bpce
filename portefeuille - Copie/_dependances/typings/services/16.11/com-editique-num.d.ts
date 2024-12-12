
declare module myway.comEditiqueNumerisation {
    var app: ng.IModule;
}

declare module myway.comEditiqueNumerisation {
    class PopupNumerisationController {
        private $modalInstance;
        private data;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        ok(): void;
    }
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
    }
}

declare module myway.comEditiqueNumerisation {
    class EditiqueNumerisationConstants {
        static classeurClientServiceUrl: string;
        static arcadeServiceUrl: string;
        static tiersServiceUrl: string;
        static entiteTitulaireServiceUrl: string;
        static contratServiceUrl: string;
        static documentParametreServiceUrl: string;
        static outilCommunServiceUrl: string;
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
    }
    interface IMotifEligibilite {
        codeEligibiliteDossier: string;
        libelle: string;
        code: string;
    }
    interface INumerisationInput {
        codeEtablissement?: string;
        identifiantPersonne: number;
        edsInterneDomiciliation?: number;
        codeCapaciteJuridique?: string;
        referenceExterneEDS?: string;
    }
    interface ICodeLisaNumerisation {
        arcade: number;
        classeurClient: number;
    }
    interface IJustificatifDonnees {
        numerisation: INumerisationInput;
        typePersonne: Enums.TypePersonne;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class CommunService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        rechercheEntiteTitulaire(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Modeles.IEntiteTitulaire[]>;
        b64toBlob(b64Data: string, contentType?: string, sliceSize?: number): Blob;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    interface ICompletudeDRC {
        piecesManquantes: string[];
        etatCompletude: string;
        nombrePiecesConcernees: string;
    }
    class CompletudeDrcService {
        private interDomainCoreService;
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        constructor(interDomainCoreService: myway.comInterdomaine.InterDomainCoreService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        verifieCompletudeDRC(identifiantPorteur: string, typeEntiteSupport?: string): ng.IPromise<ICompletudeDRC>;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class ConditionsGeneralesService {
        private $q;
        private $sce;
        private $window;
        private serviceAgentExtended;
        private communService;
        private gedService;
        static TYPE_CG: string;
        static $inject: string[];
        constructor($q: ng.IQService, $sce: ng.ISCEService, $window: ng.IWindowService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, communService: Services.CommunService, gedService: MyWay.PieceJointe.GedService);
        hasMessagerieSecuriseeInternet(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
        findEmail(codeEtablissement: string, idPersonne: number): ng.IPromise<string>;
        private electionEmail(mediasEmail);
        chargeCG(documents: Modeles.IDocumentActe[], codeEtablissement: string): ng.IPromise<any[]>;
        envoiCGParEmail(documents: Modeles.IDocumentActe[], email: string, numeroPersonne: string): ng.IPromise<boolean>;
        private createInputEnvoi(numeroPersonne, email, documents);
        private recuperationLiens(documents);
        envoiMail(input: Modeles.contactElectronique.IInputEnvoi): ng.IPromise<boolean>;
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class EditiqueService {
        private serviceAgent;
        private authentificationInfos;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getDocumentsByActeGestion(data: Modeles.IRemiseCG, filtreTypeDocument?: string): ng.IPromise<Modeles.IDocumentActe[]>;
        private unique<T>(array, propertie);
    }
}

declare module myway.comEditiqueNumerisation.Services {
    class NumerisationService {
        private modalService;
        private $q;
        private serviceAgentExtended;
        private interDomainCoreService;
        private communService;
        static $inject: string[];
        private authentificationInfos;
        constructor(modalService: MyWay.UI.ModalService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, interDomainCoreService: myway.comInterdomaine.InterDomainCoreService, communService: Services.CommunService);
        private informeMajDRC();
        private hasDrc(codeEtablissement, identifiant);
        recupereDossierClasseurClient(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne): ng.IPromise<Modeles.IDossier[]>;
        private addContexteMajDRC(input, numeroEntiteTitulaire?);
        numerisation(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne, codeLisa: Modeles.ICodeLisaNumerisation): ng.IPromise<void>;
        private recupereAuthentificationInfos();
        numerisationArcade(input: Modeles.INumerisationInput, codeLisa: number): ng.IPromise<void>;
        numerisationClasseurClient(input: Modeles.INumerisationInput, typePersonne: Enums.TypePersonne, codeLisa: number, isMiseAJourJustificatif?: boolean): ng.IPromise<void>;
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

declare module myway.comEditiqueNumerisation {
    class IndicateurCompletudeDrcController {
        private scope;
        private serviceAgentExtended;
        private completudeDrcService;
        typeEntite: string;
        idPorteur: string;
        placementContenu: string;
        ouvert: boolean;
        afficheIcone: boolean;
        LONGUEUR_PORTEUR: number;
        chargementTermine: boolean;
        completudeDrcResult: Services.ICompletudeDRC;
        static $inject: string[];
        constructor(scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, completudeDrcService: Services.CompletudeDrcService);
        private verificationCompletudeDRC();
        ouvrirPopover(): void;
    }
}

declare module myway.comEditiqueNumerisation {
}

declare module myway.comEditiqueNumerisation {
    class CompletudeDrcPopoverController {
        private scope;
        private serviceAgentExtended;
        static $inject: string[];
        piecesManquantes: string[];
        ouvert: boolean;
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
        private typeJustificatif;
        private donnees;
        private eventAvantModification;
        private codeEtablissement;
        private titre;
        private isAllowedClasseurClient;
        private hasDRC;
        private justificatifDocument;
        private justificatifDocumentErrorFlag;
        private idPersonneString;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, interDomaineCoreService: myway.comInterdomaine.InterDomainCoreService, pieceJointeService: MyWay.PieceJointe.PieceJointeService, numerisationService: myway.comEditiqueNumerisation.Services.NumerisationService);
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
        private serviceAgent;
        private modalService;
        private cgService;
        private editiqueService;
        private idPersonne;
        private data;
        private idPersonneNumber;
        private email;
        private typeRemise;
        private enableValider;
        typeRemiseEnum: Enums.TypeRemiseEnum;
        private codeEtablissement;
        private remiseHorsMSI;
        private fichiersLoaded;
        private fichiers;
        private documents;
        private openHrectractable;
        private isLoading;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IScope, $q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, cgService: Services.ConditionsGeneralesService, editiqueService: Services.EditiqueService);
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
