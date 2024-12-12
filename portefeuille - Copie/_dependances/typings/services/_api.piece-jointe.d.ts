
declare module MyWay.PieceJointe {
    var app: ng.IModule;
}

declare module MyWay.PieceJointe {
    class ClasseurClientConstants {
        static serviceUrl: string;
    }
}

declare module MyWay.PieceJointe {
    class ClasseurClientService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name rechercherDossier
         * @methodOf myWay.EntrepriseNumerique.mweeClasseurClientService
         * @description
         * Recherche des dossiers à partir de différents critères (cf la structure d'entrée).
         * @param {Object} req Structure contenant les paramètres de recherche (interface IRechercherDossierRequest).
         * @returns {Object} Promesse contenant la réponse (RechercherDossierResponse).
         */
        rechercherDossier(req: IRechercherDossierRequest): ng.IPromise<RechercherDossierResponse>;
        /**
         * @ngdoc method
         * @name rechercherPieceValideDRC
         * @methodOf myWay.EntrepriseNumerique.mweeClasseurClientService
         * @description
         * Recherche des documents à partir d'une liste de personnes et d'une liste de types de document.
         * Si aucun type n'est précisé, tous les types seront renvoyés.
         * @param {Object} req Structure contenant les paramètres de recherche (interface IRechercherPieceValideDrcRequest).
         * @returns {Object} Promesse contenant la réponse (RechercherPieceValideDrcResponse).
         */
        rechercherPieceValideDRC(req: IRechercherPieceValideDrcRequest): ng.IPromise<RechercherPieceValideDrcResponse>;
        protected getRechercherDossierResponse(request: RechercherDossierRequest): ng.IPromise<IRechercherDossierResponse>;
        protected getRechercherPieceValideDRCResponse(request: RechercherPieceValideDrcRequest): ng.IPromise<IRechercherPieceValideDrcResponse>;
    }
}

declare module MyWay.PieceJointe {
    class GedConstants {
        static serviceUrl: string;
    }
}

declare module MyWay.PieceJointe {
    class GedService {
        private $q;
        private modalService;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.ModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name consulterDocument
         * @methodOf myWay.EntrepriseNumerique.mweeGedService
         * @description
         * Renvoie un document à partir d'un id et d'un code établissement.
         * @param {Object} req Structure contenant les paramètres (interface IConsulterDocumentRequest).
         * @returns {Object} Promesse contenant la réponse (IConsulterDocumentResponse).
         */
        consulterDocument(req: IConsulterDocumentRequest): ng.IPromise<IConsulterDocumentResponse>;
        /**
         * @ngdoc method
         * @name getStockageDocument
         * @methodOf myWay.EntrepriseNumerique.mweeGedService
         * @description
         * Renvoie un document à partir de la GED draft.
         * @param {Object} req Structure contenant les paramètres (interface IStockageDocumentRequest).
         * @returns {Object} Promesse contenant la réponse (IStockageDocumentResponse).
         */
        getStockageDocument(req: Myway.Ressource.DocumentStockage.IGetDocumentQueryParams): ng.IPromise<Myway.Ressource.DocumentStockage.IGetDocumentOutput>;
        /**
         * @ngdoc method
         * @name validerDraft
         * @methodOf myWay.EntrepriseNumerique.mweeGedService
         * @description
         * Permet d'effectuer la validation d'un document présent dans la base Draft
         * @param {Object} req Structure contenant les paramètres (interface IStockageDocumentRequest).
         * @returns {Object} Promesse contenant la réponse (IStockageDocumentResponse).
         */
        validerDraft(data: Myway.Ressource.DocumentStockage.IPostValiderDocumentInput): ng.IPromise<void>;
        /**
         * @ngdoc method
         * @name filtrerDocument
         * @methodOf myWay.EntrepriseNumerique.mweeGedService
         * @description
         * Renvoie une liste de documents à partir de critères de filtre.
         * @param {Object} request Structure contenant les paramètres de filtre (interface IFiltrerDocumentRequest).
         * @returns {Object} Promesse contenant la réponse (IConsulterDocumentResponse).
         */
        filtrerDocument(request: IFiltrerDocumentRequest): ng.IPromise<IFiltrerDocumentResponse>;
        protected getConsulterDocumentResponse(request: ConsulterDocumentRequest): ng.IPromise<IConsulterDocumentResponse>;
        protected getStockageDocumentResponse(request: StockageDocumentRequest): ng.IPromise<Myway.Ressource.DocumentStockage.IGetDocumentOutput>;
        protected getFiltrerDocumentResponse(request: IFiltrerDocumentRequest): ng.IPromise<IFiltrerDocumentResponse>;
    }
}

declare module MyWay.PieceJointe {
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
}

declare module MyWay.PieceJointe {
    interface IDocument {
        idDocument: string;
        typeDocument: string;
        codeNature: string;
        idPersonne: string;
    }
    class Document {
        idDocument: string;
        typeDocument: TypeDocumentEnum;
        codeNature: string;
        idPersonne: string;
        constructor(document?: IDocument);
    }
}

declare module MyWay.PieceJointe {
    class Dossier {
        idDossier: string;
        libelleDossier: string;
        libelleMotif: string;
        codeEvenementMetier: string;
        indicateurCompletude: string;
        dateCreation: Date;
        dateModification: Date;
        typeDossier: TypeDossierEnum;
        indicateurEnCoursAcquisition: boolean;
        porteur: Porteur;
        constructor(dossier?: Dossier);
    }
}

declare module MyWay.PieceJointe {
    class Porteur {
        idPorteur: string;
        typePorteur: TypePorteurEnum;
        constructor(idPorteur: string, typePorteur?: TypePorteurEnum);
    }
}

declare module MyWay.PieceJointe {
    class PieceJointeService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        private mweeClasseurClientService;
        private mweeGedService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, mweeClasseurClientService: MyWay.PieceJointe.ClasseurClientService, mweeGedService: MyWay.PieceJointe.GedService);
        /**
         * @ngdoc method
         * @name hasPersonneDRC
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Renvoie un indicateur sur l'existence d'un DRC pour une personne donnée.
         * @param {string} idPersonne Id de la personne.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @returns {Object} Promesse contenant un booléen.
         */
        hasPersonneDRC(idPersonne: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * @ngdoc method
         * @name rechercheDocumentByPersonneByType
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Recherche et renvoie un document à partir d'une personne et d'un type.
         * @param {string} idPersonne Id de la personne.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @param {Object} type Type de pièce jointe (TypePieceJointeEnum).
         * @returns {Object} Promesse contenant un document.
         */
        rechercheDocumentByPersonneByType(idPersonne: string, codeEtablissement: string, type: TypePieceJointeEnum): ng.IPromise<PieceJointe>;
        /**
         * @ngdoc method
         * @name rechercheDocumentByTypeOrSujet
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Recherche et renvoie un document à partir d'un attributaire et d'un type ou un sujet.
         * @param {IAttributaire} attributaire Attributaire.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @param {string} codeApplication Code application.
         * @param {Object} type Type de pièce jointe (TypePieceJointeEnum).
         * @param {string} sujet Sujet catalogue GED.
         * @returns {Object} Promesse contenant un document.
         */
        rechercheDocumentByTypeOrSujet(attributaire: IAttributaire, codeEtablissement: string, codeApplication: string, type?: TypePieceJointeEnum, sujet?: string): ng.IPromise<PieceJointe>;
        getFiltrerDocumentResponseAvancee(attributaire: IAttributaire, codeEtablissement: string, codeApplication: string, sujet: string): ng.IPromise<IDocumentFiltre[]>;
        /**
         * @ngdoc method
         * @name rechercheDocumentsByPersonne
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Recherche et renvoie tous les documents d'une personne.
         * @param {string} idPersonne Id de la personne.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @returns {Object} Promesse contenant une liste de documents (mis dans un conteneur pour une exploitation plus facile).
         */
        rechercheDocumentsByPersonne(idPersonne: string, codeEtablissement: string): ng.IPromise<RechercherDocument>;
        /**
         * @ngdoc method
         * @name rechercheJustificatifIdentite
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Recherche et renvoie le justificatif d'identité d'une personne.
         * @param {string} idPersonne Id de la personne.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @returns {Object} Promesse contenant un document.
         */
        rechercheJustificatifIdentite(idPersonne: string, codeEtablissement: string): ng.IPromise<PieceJointe>;
        /**
         * @ngdoc method
         * @name rechercheJustificatifDomicile
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Recherche et renvoie le justificatif de domicile d'une personne.
         * @param {string} idPersonne Id de la personne.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @returns {Object} Promesse contenant un document.
         */
        rechercheJustificatifDomicile(idPersonne: string, codeEtablissement: string): ng.IPromise<PieceJointe>;
        /**
         * @ngdoc method
         * @name rechercheJustificatifRevenu
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Recherche et renvoie le justificatif de revenu d'une personne.
         * @param {string} idPersonne Id de la personne.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @returns {Object} Promesse contenant un document.
         */
        rechercheJustificatifRevenu(idPersonne: string, codeEtablissement: string): ng.IPromise<PieceJointe>;
        /**
         * @ngdoc method
         * @name rechercheJustificatifRevenu
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Recherche et renvoie un document.
         * @param {string} idDocument Id du document.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @param {string=} contentType Type MIME du document (PDF par défaut).
         * @returns {Object} Promesse contenant un document.
         */
        viewDocument(idDocument: string, codeEtablissement: string, contentType?: ContentTypeEnum): void;
        /**
         * @ngdoc method
         * @name rechercheJustificatifRevenu
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Télécharge un document.
         * @param {string} idDocument Id du document.
         * @param {string} codeEtablissement Code établissement de la personne.
         * @param {string} codeApplication Code application.
         * @param {boolean} draft Si oui, le document est récupéré du draft (GED).
         * @param {string=} contentType Type MIME du document (PDF par défaut).
         * @returns {Object} Promesse contenant un document.
         */
        downloadDocument(idDocument: string, codeEtablissement: string, codeApplication: string, draft: boolean, contentType?: ContentTypeEnum): ng.IPromise<any>;
        getFiltrerDocumentResponse(idPersonne: string, codeEtablissement: string, types?: TypePieceJointeEnum[]): ng.IPromise<IDocumentFiltre[]>;
        private getTypePieceJointes(types);
        private getTypePieceJointe(type);
        private getTypePieceJointeFromNature(nature);
        getTypeDocuments(type: TypePieceJointeEnum): TypeDocumentEnum[];
        private getNatureDocuments(types);
        private getNatureDocument(type);
        private getSujetDocuments(types);
        private getSujetDocument(type);
    }
}

declare module MyWay.PieceJointe {
    interface IRechercherDossierRequest {
        typeDossier?: TypeDossierEnum;
        codeEtablissement: string;
        codeEvenementMetier?: string;
        dateDebut?: Date;
        dateFin?: Date;
        indicateurDateCreation?: boolean;
        indicateurCompletude?: IndicateurCompletudeEnum;
        indicateurTraitement?: boolean;
        utilisateurCreation?: string;
        referenceExterne?: string;
        limiteNombreResultat?: boolean;
        porteurs?: Porteur | Porteur[];
        idDossiers?: string | string[];
        codeExterneEds?: string | string[];
        referenceContextes?: string | string[];
    }
    class RechercherDossierRequest {
        typeDossier: TypeDossierEnum;
        codeEtablissement: string;
        codeEvenementMetier: string;
        dateDebut: Date;
        dateFin: Date;
        indicateurDateCreation: boolean;
        indicateurCompletude: IndicateurCompletudeEnum;
        indicateurTraitement: boolean;
        utilisateurCreation: string;
        referenceExterne: string;
        limiteNombreResultat: boolean;
        porteurs: Porteur[];
        idDossiers: string[];
        codeExterneEds: string[];
        referenceContextes: string[];
        constructor(request: IRechercherDossierRequest);
    }
}

declare module MyWay.PieceJointe {
    interface IRechercherDossierResponse {
        dossiers: Dossier[];
    }
    class RechercherDossierResponse {
        dossiers: Dossier[];
        constructor();
        /**
         * @name getDossier
         * @methodOf MyWay.PieceJointe.RechercherDossierResponse
         * @description
         * Renvoie un dossier à partir d'un numéro de porteur.
         * @param {string} idPorteur id du porteur.
         * @returns {Object} Dossier.
         */
        getDossier(idPorteur: string): Dossier;
    }
}

declare module MyWay.PieceJointe {
    interface IRechercherPieceValideDrcRequest {
        codeEtablissement: string;
        idPersonnes: string | string[];
        typeDocuments?: TypeDocumentEnum | TypeDocumentEnum[];
    }
    class RechercherPieceValideDrcRequest {
        codeEtablissement: string;
        idPersonnes: string[];
        typeDocuments: string[];
        constructor(request: IRechercherPieceValideDrcRequest);
    }
}

declare module MyWay.PieceJointe {
    interface IRechercherPieceValideDrcResponse {
        documents: IDocument[];
    }
    class RechercherPieceValideDrcResponse {
        documents: Document[];
        constructor();
        getTypeDocuments(): TypeDocumentEnum[];
        /**
         * @name getDocument
         * @methodOf MyWay.PieceJointe.RechercherPieceValideDrcResponse
         * @description
         * Renvoie le premier document du conteneur. Cette méthode ne devrait être utilisée que lorsqu'il n'y a potentiellement qu'un seul document.
         * @returns {Object} Document.
         */
        getDocument(): Document;
        /**
         * @name getDocument
         * @methodOf MyWay.PieceJointe.RechercherPieceValideDrcResponse
         * @description
         * Renvoie les documents d'une personne.
         * @param {string} idPersonne id de la personne.
         * @returns {array} Documents.
         */
        getDocument(idPersonne: string): Document[];
        /**
         * @name getDocument
         * @methodOf MyWay.PieceJointe.RechercherPieceValideDrcResponse
         * @description
         * Renvoie un document à partir d'un numéro de personne et d'un type.
         * @param {string} idPersonne id de la personne.
         * @param {Object} typeDocument type de document.
         * @returns {Object} Document.
         */
        getDocument(idPersonne: string, typeDocument: TypeDocumentEnum): Document;
    }
}

declare module MyWay.PieceJointe {
    enum CodeApplicationEnum {
        MYWAY,
        DOCUMENT_ENTREPRISE,
    }
}

declare module MyWay.PieceJointe {
    enum CodeDateEnum {
        DATE_CREATION,
        DATE_GESTION,
        DATE_NUMERISATION,
        DATE_DELIVRANCE,
    }
}

declare module MyWay.PieceJointe {
    enum CodeTypeAttributaireEnum {
        CONTRAT,
        PERSONNE_PARTICULIER,
        PERSONNE_PROFESSIONNEL,
        PERSONNE_MORALE,
        RELATION_ECONOMIQUE,
        DEMANDE_FINANCEMENT,
        CLIENT_BANCAIRE,
        GCE_ASSURANCES,
    }
}

declare module MyWay.PieceJointe {
    enum CodeTypeStockageEnum {
        CONTRAT,
        PERSONNE_PARTICULIER,
        PERSONNE_PROFESSIONNEL,
        PERSONNE_MORALE,
        RELATION_ECONOMIQUE,
        DEMANDE_FINANCEMENT,
        ENTITE_TITULAIRE,
        SINISTRE_ASSURANCE,
        DOSSIER_TEMPORAIRE,
        PROSPECT_BDR,
        BENEFICIAIRE_ASSURANCE_VIE,
    }
}

declare module MyWay.PieceJointe {
    enum ContentTypeEnum {
        PDF,
    }
}

declare module MyWay.PieceJointe {
    enum IndicateurCompletudeEnum {
        NR,
        C,
        I,
    }
}

declare module MyWay.PieceJointe {
    class NatureDocumentEnum extends MyWay.Services.StringEnum {
        static AVIS_IMPOSITION: NatureDocumentEnum;
    }
}

declare module MyWay.PieceJointe {
    enum OrdreTriEnum {
        CROISSANT,
        DECROISSANT,
    }
}

declare module MyWay.PieceJointe {
    class SujetDocumentEnum extends MyWay.Services.StringEnum {
        static JUSTIFICATIF_IDENTITE: SujetDocumentEnum;
        static JUSTIFICATIF_DOMICILE: SujetDocumentEnum;
        static JUSTIFICATIF_REVENU: SujetDocumentEnum;
    }
}

declare module MyWay.PieceJointe {
    class TypeDocumentEnum extends MyWay.Services.StringEnum {
        static JUSTIFICATIF_IDENTITE: TypeDocumentEnum;
        static JUSTIFICATIF_IDENTITE_MINEUR: TypeDocumentEnum;
        static JUSTIFICATIF_IDENTITE_MAJEUR_PROTEGE: TypeDocumentEnum;
        static JUSTIFICATIF_DOMICILE: TypeDocumentEnum;
        static JUSTIFICATIF_REVENU: TypeDocumentEnum;
    }
}

declare module MyWay.PieceJointe {
    enum TypeDossierEnum {
        DRC,
    }
}

declare module MyWay.PieceJointe {
    enum TypePieceJointeEnum {
        JUSTIFICATIF_IDENTITE = 0,
        JUSTIFICATIF_DOMICILE = 1,
        JUSTIFICATIF_REVENU = 2,
        AVIS_IMPOSITION = 3,
    }
}

declare module MyWay.PieceJointe {
    enum TypePorteurEnum {
        PERSONNE,
    }
}

declare module MyWay.PieceJointe {
    interface IConsulterDocumentRequest {
        codeEtablissement?: string;
        codeApplication?: CodeApplicationEnum;
        idDocument: string;
        indicateurDocument?: boolean;
        indicateurDetails?: boolean;
        indicateurPresenceAnnotation?: boolean;
        indicateurRecuperationAnnotation?: boolean;
    }
    class ConsulterDocumentRequest {
        codeEtablissement: string;
        codeApplication: CodeApplicationEnum;
        idDocument: string;
        indicateurDocument: boolean;
        indicateurDetails: boolean;
        indicateurPresenceAnnotation: boolean;
        indicateurRecuperationAnnotation: boolean;
        constructor(request: IConsulterDocumentRequest);
    }
}

declare module MyWay.PieceJointe {
    interface IConsulterDocumentResponse {
        fichier: IDocumentFichier;
        details: IDocumentDetails;
        annotations: IDocumentAnnotation[];
    }
}

declare module MyWay.PieceJointe {
    interface IDocumentAnnotation {
        id: string;
        contenu: string;
    }
}

declare module MyWay.PieceJointe {
    interface IDocumentDetails {
        codeEtablissement: string;
        idDocument: string;
        idLot: string;
        codeApplication: string;
        moyenAcquisition: string;
        origineAcquisition: string;
        agentAcquisition: string;
        codeNature: string;
        libelleNature: string;
        typeAttributaire: string;
        idAttributaire: string;
        idAttributaireSecondaire: string;
        dateCreation: Date;
        dateModification: Date;
        dateDelivrance: Date;
        dateNumerisation: Date;
        dateCollecte: Date;
        datePeremption: Date;
        dateFinValidite: Date;
        numeroUnitePhysique: string;
        positionUnitePhysique: number;
        intituleAttributaire: string;
        dateAttributaire: Date;
        referencePosteFonctionAcquisition: string;
        descriptionDocument: string;
        codeTypeStockage: string;
        codeAccessibilite: number;
        methodeSignature: string;
        topAnnotation: boolean;
    }
}

declare module MyWay.PieceJointe {
    interface IDocumentFichier {
        nom: string;
        taille: string;
        contenu: string;
    }
}

declare module MyWay.PieceJointe {
    interface IDocumentFiltre extends IDocumentDetails {
        nomFichier: string;
        tailleDocument: number;
    }
}

declare module MyWay.PieceJointe {
    interface IFiltrerDocumentRequest {
        codeApplication: CodeApplicationEnum;
        codeTypePersonne: CodeTypeAttributaireEnum;
        idPersonne: string;
        idAttributaireSecondaire?: string;
        sujets: SujetDocumentEnum | SujetDocumentEnum[] | string;
        natures: NatureDocumentEnum | NatureDocumentEnum[];
    }
}

declare module MyWay.PieceJointe {
    interface IFiltrerDocumentResponse {
        indicateurCompletude: string;
        nombreDocuments: number;
        documents: IDocumentFiltre[];
    }
}

declare module MyWay.PieceJointe {
    class StockageDocumentRequest {
        idntCmpstApplf: string;
        codeEtablissement: string;
        idntDocument: string;
        indicRecupDoc: boolean;
        indicRecupDetl: boolean;
        constructor(request: Myway.Ressource.DocumentStockage.IGetDocumentQueryParams);
    }
}

declare module MyWay.PieceJointe {
    class PieceJointe {
        idDocument: string;
        type: TypePieceJointeEnum;
        codeNature: string;
        idPersonne: string;
        sujet: string;
        constructor(document: Document | IDocumentFiltre, type: TypePieceJointeEnum, sujet?: string);
    }
}

declare module MyWay.PieceJointe {
    class RechercherDocument {
        documents: PieceJointe[];
        constructor();
        addDocument(document: Document | IDocumentFiltre, type: TypePieceJointeEnum): void;
        /**
         * @name getDocument
         * @methodOf MyWay.PieceJointe.RechercherPieceValideDrcResponse
         * @description
         * Renvoie un document à partir d'un numéro de personne et d'un type.
         * @param {Object=} typePieceJointe type de pièce jointe (optionnel).
         * @returns {Object} PieceJointe.
         */
        getDocument(typePieceJointe?: TypePieceJointeEnum): PieceJointe;
        getJustificatifIdentite(): PieceJointe;
        getJustificatifDomicile(): PieceJointe;
        getJustificatifRevenu(): PieceJointe;
    }
}
