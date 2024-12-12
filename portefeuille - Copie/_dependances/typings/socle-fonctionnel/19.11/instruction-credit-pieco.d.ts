
declare namespace PiecesControles.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
        const $route: string;
        const $rootScope: string;
        const $filter: string;
        const $modalInstance: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
        const serviceAgent: string;
        const modalService: string;
    }
    namespace Services {
        const fichierService: string;
        const q: string;
        const modalService: string;
        const filtreService: string;
        const piecoService: string;
        const sessionService: string;
        const dncService: string;
        const droitToutCocherService: string;
        const exceptionService: string;
    }
    namespace Controleurs {
        const impressionControleur: string;
        const tablePieceControleur: string;
        const piecesControlesControleur: string;
        const toutCocherControleur: string;
    }
}

declare namespace PiecesControles.Constantes {
    namespace Filtres {
        /**
         * Valeurs possibles pour la finalité des pièces
         */
        const listeFiltresProcessus: Array<PiecesControles.Modele.ISelectbox<string>>;
        /**
         * Valeurs possibles pour le filtre controle traiter avant
         */
        const listeFiltresProcessusControle: Array<PiecesControles.Modele.ISelectbox<string>>;
        /**
         * Valeurs possibles pour la conformité des pièces
         */
        const listeStatutDNCActive: Array<PiecesControles.Modele.ISelectbox<number>>;
        /**
         * Valeurs possibles pour la conformité des pièces
         */
        const listeStatutDNCDesactive: Array<PiecesControles.Modele.ISelectbox<number>>;
        /**
         * Valeurs possibles pour le filtre controle etat
         */
        const listeStatutsControle: Array<PiecesControles.Modele.ISelectbox<number>>;
    }
    namespace IdentifiantClasse {
        const classsMajPieceClient: string;
        const classsMajPieceAgence: string;
        const classsMajControle: string;
    }
    namespace TitreActionImpression {
        const titrePiecesClient: string;
        const titrePiecesAgence: string;
        const titreControle: string;
        const titreTout: string;
    }
    namespace FormConst {
        const formPieceControlesName: string;
    }
}

declare module PiecesControles {
    var app: any;
}

declare module PiecesControles {
    class PiecesControlesControleur {
        private elementRestService;
        private pieceControleRestService;
        private piecoService;
        private sessionService;
        private dncService;
        private droitToutCocherService;
        private mwNotificationService;
        private $scope;
        private $q;
        private $location;
        private modalService;
        idDossier: string;
        dateDeTraitement: string;
        codeEtablissement: number;
        readOnly: boolean;
        listePiecoModeleClient: PiecesControles.Modele.IPiecoModele[];
        listePiecoModeleAgence: PiecesControles.Modele.IPiecoModele[];
        listePiecoModeleControle: PiecesControles.Modele.IPiecoModele[];
        commentairePiecesClient: string;
        commentairePiecesAgence: string;
        codeR: number;
        codeA: number;
        codeN: number;
        traitementEnCours: string;
        isAutoriseToutCocher: boolean;
        dncActif: boolean;
        isLoading: boolean;
        isClientReadOnly: boolean;
        isAgenceReadOnly: boolean;
        isControleReadOnly: boolean;
        private confirmedShown;
        private redirectionAsked;
        static $inject: Array<string>;
        constructor(elementRestService: ICRest.Services.Element.IElementService, pieceControleRestService: ICRest.Services.PiecesEtControles.IPiecesEtControlesService, piecoService: Service.PiecoService, sessionService: Service.PiecoSessionService, dncService: Service.DNCService, droitToutCocherService: Service.DroitToutCocherService, mwNotificationService: MyWay.UI.IMwNotificationService, $scope: ng.IScope, $q: ng.IQService, $location: ng.ILocationService, modalService: Service.ModaleService);
        hasSomePieces(): boolean;
        hasSomePiecesClients(): boolean;
        hasSomePiecesAgences(): boolean;
        hasSomeControles(): boolean;
        /**
         * Détermine le libellé du traitement en cours en fonciton des 2 paramètres
         * @param codeTraitementComp
         * @param codeProcessusInstruction
         */
        private decodeTraitementEnCours(codeTraitementComp, codeProcessusInstruction);
        /**
         * Détermine si le dossier est en sous état "instruction agence"
         * @param codeTraitementComp
         * @param codeProcessusInstruction
         */
        isInstructionAgence(codeTraitementComp: string, codeProcessusInstruction: string): boolean;
        getClientEnum(): Enum.EnumTypePiece;
        getAgenceEnum(): Enum.EnumTypePiece;
        getControleEnum(): Enum.EnumTypePiece;
        /**
         * Initialise l'accès à la mise à jour
         * @param sousEtatDossier
         */
        private defineReadOnly(sousEtatDossier);
        private setReadOnly(clientReadOnly, agenceReadOnly, controleReadOnly);
        isChargedAndClientNotReadOnly(): boolean;
        isChargedAndAgenceNotReadOnly(): boolean;
        isChargedAndControleNotReadOnly(): boolean;
        /**
         * Initialise les données pour la mise à jour des pièces (client ou agence)
         * @param listePiecoModele
         * @param listePiecesEtControlesMAJ
         * @param listeIdentifiants
         * @param indentifiantClasse
         */
        private setPieceInfosForMaj(listePiecoModele, listePiecesEtControlesMAJ, listeIdentifiants, indentifiantClasse);
        /**
         * Initialise les données utilles pour la mise à jour des contrôles
         * @param listePiecesEtControlesMAJ
         * @param listeIdentifiants
         * @param indentifiantClasse
         */
        private setControlesInfosForMaj(listePiecesEtControlesMAJ, listeIdentifiants, indentifiantClasse);
        /**
         * Mise à jour des données pieces et contrôles
         */
        enregistrer(): void;
        debrancherDNC(): void;
    }
}

declare module PiecesControles {
}

declare module PiecesControles.Service {
    class DNCService {
        private contexteEditionRestService;
        static $inject: Array<string>;
        constructor(contexteEditionRestService: ICRest.Services.ContexteEdition.IContexteEditionService);
        isDNCActif(idDossier: string): ng.IPromise<boolean>;
    }
}

declare module PiecesControles.Service {
    class DroitToutCocherService {
        private creditParametreBusinessService;
        static $inject: Array<string>;
        constructor(creditParametreBusinessService: ICBusiness.Services.CreditParametre.ICreditParametreService);
        /**
         * Vérifie si l'utilisateur à le droit de tout cocher
         * @param codeProcessusInstruction
         */
        getDroitToutCocher(codeProcessusInstruction: string, dateDeTraitement: string, codeEtablissement: number, codeAffichageActionPieco: string): ng.IPromise<boolean>;
        private checkIfAutoriseAToutCocher(paramApplicatif, codeProcessusInstruction);
    }
}

declare module PiecesControles.Services {
    /**
     * Do never inject this service
     * To display an error you should throw an exception lik this
     *  throw new Modele.MyWayError(error, true);
     */
    class ExceptionService {
        private $location;
        private popinErrorService;
        static $inject: Array<string>;
        constructor($location: ng.ILocationService, popinErrorService: ICCreditComponents.Erreur.IPopinErrorService);
        /**
         * Show exception in a popin and redirect to error page if fatal
         * @param exception
         */
        displayException(exception: any, fatal?: boolean): void;
    }
}

declare module PiecesControles.Service {
    class FichierService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string, idDossier: string): void;
    }
}

declare module PiecesControles.Service {
    class FilterService {
        private filterByFinalite(listePiecoModele, codeProcessus);
        private filterByConformite(listePiecoModele, codeStatut);
        filter(listePiecoModele: PiecesControles.Modele.IPiecoModele[], codeProcessus?: string, codeStatut?: number): PiecesControles.Modele.IPiecoModele[];
    }
}

declare module PiecesControles.Service {
    class ModaleService {
        private modalService;
        private $q;
        static $inject: Array<string>;
        constructor(modalService: MyWay.UI.IModalService, $q: ng.IQService);
        showModalConfirm(titre: string, message: string, taille: string): ng.IPromise<boolean>;
    }
}

declare module PiecesControles.Service {
    class PiecoService {
        constructor();
        /**
         * Créé les liste des pièces associées à leur sous titre
         * @param dataPieco
         * @param client détermine s'il faut créer une liste de pièces client ou pièces agence (true: piece client, false: pièce agence)
         */
        createListePiecoModeles(dataPieco: ICRest.Modeles.CalculerPiecesEtControles.IResultatPiecesEtControles, typePiece: Enum.EnumTypePiece): PiecesControles.Modele.IPiecoModele[];
        /**
         * retourne la liste des pièces
         * @param listePieces
         * @param dataPieco
         */
        private findtlistPieces(listePieces, dataPieco);
        /**
         * Définit le libellé de la pièce
         * @param piece
         */
        private defineLibellePiece(piece);
        /**
         * Trouve le libelle du processus à afficher en fonction de l'identifiant processus
         * @param dataPieco
         * @param identifiantProcessusAuPlusTard
         */
        private findProcessusFromDataPieco(dataPieco, identifiantProcessusAuPlusTard);
        private constructAcquisition(code);
    }
}

declare namespace PiecesControles.Service {
    interface ISessionService {
        contextloaded: boolean;
        context: Modele.IContexte;
        loadContext(idDossier: string, dateDeTraitement: string, codeEtablissement: number, readOnly: boolean): ng.IPromise<void>;
    }
    class PiecoSessionService implements ISessionService {
        private $q;
        private elementRestService;
        private pieceControleRestService;
        static $inject: string[];
        constructor($q: ng.IQService, elementRestService: ICRest.Services.Element.IElementService, pieceControleRestService: ICRest.Services.PiecesEtControles.IPiecesEtControlesService);
        contextloaded: boolean;
        context: Modele.IContexte;
        /**
         * Load "Dossier credit" and authentification context informations
         * @param inputParams params to load datas.
         */
        loadContext(idDossier: string, dateDeTraitement: string, codeEtablissement: number, readOnly: boolean): ng.IPromise<void>;
    }
}

declare namespace PiecesControles.Constantes {
    namespace ProcessusInstruction {
        const instructionAgence: string;
        const instructionBO: string;
        const priseEnChargeBO: string;
    }
    namespace TraitementComp {
        const transfertConformite: string;
        const transfertAccordPreteur: string;
        const misEnAttente: string;
        const instruction: string;
    }
    namespace Acquisition {
        const acquis: string;
        const nonCollecte: string;
        const enCours: string;
    }
    /**
     * "O" masque activé, que l'on soit en Instruction agence ou Back office
     * "N" masque non activé, que l'on soit en Instruction agence ou Back office
     * "A" masque activé en instruction agence (inactif en BO)
     * "B" masque activé en BO (inactif en agence)
     */
    namespace MasqueBoutonPieco {
        const masqueActive: string;
        const masqueNonActive: string;
        const masqueActiveEnIA: string;
        const masqueActiveEnBO: string;
    }
    /**
     * Codes des formats éditiques
     */
    namespace TypeDocument {
        const piecoClient: string;
        const piecoAgence: string;
        const piecoControle: string;
    }
    /**
     * Codes des types de documents
     */
    namespace FormatEditique {
        const industrialise: number;
        const papier: number;
        const signatureElectronique: number;
    }
    namespace TypeEditique {
        const neo: number;
        const eps: number;
    }
    namespace ParamPieco {
        const codeAffichageActionPieco: string;
    }
}

declare namespace PiecesControles.Constantes {
    namespace SousEtatDossier {
        /** 65 => ascii A */
        const propositionCommerciale: number;
        /** 66 => ascii B */
        const demandeDeCredit: number;
        /** 67 => ascii C */
        const decision: number;
        /** 68 => ascii D */
        const offreEnAttenteEdition: number;
        /** 69 => ascii E */
        const offreEnAttenteRemiseEmprunteur: number;
        /** 71 => ascii G */
        const offreEnAttenteSignature: number;
        /** 72 => ascii H */
        const offreSigneeDelaiRetractation: number;
        /** 85 => ascii U */
        const offreConclue: number;
        /** 86 => ascii V */
        const demandeCreditSansSuite: number;
        /** 87 => ascii W */
        const propositionCommercialeSansSuite: number;
        /** 88 => ascii X */
        const offreSansSuite: number;
    }
}

declare module PiecesControles.Enum {
    enum EnumTypePiece {
        client = 0,
        agence = 1,
        controle = 2,
    }
}

declare module PiecesControles.Factory {
    function extendExceptionHandler($injector: ng.auto.IInjectorService): (exception: Error, cause: string) => void;
}

declare module PiecesControles.Modele {
    /**
     * This const is used to be able to identify if the exception thrown intentionaly or if is an JS exception or Other
     */
    const MYWAY_REST_ERROR: string;
    interface IPiecesControlesError extends Error {
        exception: MyWay.Services.Erreur;
        fatal: boolean;
    }
    class PiecesControlesError implements IPiecesControlesError {
        exception: MyWay.Services.Erreur;
        fatal: boolean;
        errorDescription: string;
        name: string;
        message: string;
        constructor(exception: MyWay.Services.Erreur, fatal: boolean, errorDescription?: string);
    }
}

declare module PiecesControles.Modele {
    interface IPiecoModele {
        sousTitre: ISousTitre;
        pieces: IPiece[];
    }
    interface ISousTitre {
        codeTheme: string;
        libelle: string;
    }
    interface IPiece {
        idws: string;
        libelle: string;
        processus: IShortTypologie;
        statutCode: number;
        acquisition: IShortTypologie;
        aide: string;
        avis: string;
    }
    interface IShortTypologie {
        code: string;
        libelle: string;
    }
    interface ILibelleEnteteTableau {
        thPiece: string;
        thProcessus: string;
        thStatut: string;
    }
}

declare module PiecesControles.Modele {
    interface ISelectbox<T> {
        libelle: string;
        code: T;
    }
}

declare module PiecesControles.Modele {
    interface IContexte {
        dossier: ICRest.Modeles.LireElement.IDossierLecture;
        dateDeTraitement: string;
        codeEtablissement: number;
        readOnly: boolean;
        dataPieco: ICRest.Modeles.CalculerPiecesEtControles.IResultatPiecesEtControles;
    }
}

declare module PiecesControles {
    class PiecesControlesImpressionControleur {
        private editerDocumentRestService;
        private fichierService;
        idDossier: string;
        isLoading: boolean;
        chargementLongEtat: number;
        hasPiecesClients: boolean;
        hasPiecesAgences: boolean;
        hasControles: boolean;
        dataListeActions: MyWay.UI.IBoutonActionRiche[];
        static $inject: Array<string>;
        constructor(editerDocumentRestService: ICRest.Services.Dossier.IEditerDocumentsService, fichierService: Service.FichierService);
        /**
         * Ajouter une action à la liste des impressions
         * @param titre
         * @param imprimer
         */
        private addToListeActions(titre, imprimer);
        private imprimerTout();
        private hasMoreThanOneTypeOfPieces();
        /**
         * Imprimer un document en fonction du type de document
         *
         * @param typeDoc
         */
        imprimer(typeDoc: string): void;
    }
}

declare module PiecesControles {
}

declare module PiecesControles {
    class PiecesControlesTablePiecesControleur {
        private filtreService;
        listePiecoModele: Modele.IPiecoModele[];
        listePiecoModeleFiltre: Modele.IPiecoModele[];
        processusFiltres: Array<Modele.ISelectbox<string>>;
        filtreProcessusSelected: Modele.ISelectbox<string>;
        filtreProcessusActif: boolean;
        statutFiltres: Array<Modele.ISelectbox<number>>;
        filtreStatutSelected: Modele.ISelectbox<number>;
        filtreStatutActif: boolean;
        libelle: string;
        isInstructionAgence: boolean;
        isControle: boolean;
        readOnly: boolean;
        codeR: number;
        codeA: number;
        codeN: number;
        dncActif: boolean;
        typePiece: Enum.EnumTypePiece;
        libelleEnteteTableau: Modele.ILibelleEnteteTableau;
        static $inject: Array<string>;
        constructor(filtreService: Service.FilterService);
        /**
         * Defini les filtres et les entêtes du tableau
         * @param processusFiltres
         * @param filtreProcessusSelected
         * @param statutFiltres
         * @param filtreStatutSelected
         * @param thPiece
         * @param thProcessus
         * @param thStatut
         */
        private defineFiltreAndEnteteTableau(processusFiltres, filtreProcessusSelected, statutFiltres, filtreStatutSelected, thPiece, thProcessus, thStatut);
        /**
         * Détermine la classe de l'acquisistion
         * @param codeEtatAcquistion
         */
        getAcquisitionClass(codeEtatAcquistion: string): string;
        libelleClientOrAgence(typePiece: Enum.EnumTypePiece): string;
        getLibelleStatutOui(): string;
        getLibelleStatutNon(): string;
        getLibelleStatutNC(): string;
        private getLibelleStatut(lettre);
        isNonControleAndDNCActif(): boolean;
        /**
         * Détermine si la pièce a le statut sans objet
         * @param piece
         */
        isSansObjet(piece: Modele.IPiece): boolean;
        /**
         * filtre les liste des pièces en fonciton des filtres sélectionnés
         */
        filtrer(): void;
        /**
         * Active ou désactive le filtre processus
         */
        activeUnactiveFiltreProcessus(): void;
        /**
         * Active ou désactive le filtre statut
         */
        activeUnactiveFiltreStatut(): void;
        /**
         * vérifie si au moins un filtre est activé
         */
        hasFiltreActif(): boolean;
    }
}

declare module PiecesControles {
}

declare module PiecesControles {
    class PiecesControlesToutCocherControleur {
        listePiecoModele: Modele.IPiecoModele[];
        isAutoriseToutCocher: boolean;
        typePiece: Enum.EnumTypePiece;
        dncActif: boolean;
        libelleLegend: string;
        libelleOui: string;
        libelleNon: string;
        constructor();
        /**
         * Initialisation des libellés en fonction du dncActif et s'il s'agit de contrôles
         */
        private initLibelles();
        /**
         * Set libellés
         * @param libelleLegend
         * @param libelleOui
         * @param libelleNon
         */
        private setLibelles(libelleLegend, libelleOui, libelleNon);
        /**
         * met à jour le statut des pièces
         * @param statutOK
         * @param listePiecoMoele
         */
        toutCocher(statutOK: boolean): void;
    }
}

declare module PiecesControles {
}
