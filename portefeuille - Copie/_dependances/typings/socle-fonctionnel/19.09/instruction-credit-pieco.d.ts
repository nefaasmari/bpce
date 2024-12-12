
declare namespace PiecesControles.Constantes.Ascii {
    namespace Caractere {
        const space: number;
    }
    /**
     * Code ascii des caractères numériques
     */
    namespace Nombre {
        const zero: number;
        const un: number;
        const deux: number;
        const trois: number;
        const quatre: number;
        const cinq: number;
        const six: number;
        const sept: number;
        const huit: number;
        const neuf: number;
    }
    /**
     * Code ascii des lettres
     */
    namespace Lettre {
        const A: number;
        const B: number;
        const C: number;
        const D: number;
        const E: number;
        const F: number;
        const G: number;
        const H: number;
        const I: number;
        const J: number;
        const K: number;
        const L: number;
        const M: number;
        const N: number;
        const O: number;
        const P: number;
        const Q: number;
        const R: number;
        const S: number;
        const T: number;
        const U: number;
        const V: number;
        const W: number;
        const X: number;
        const Y: number;
        const Z: number;
        const a: number;
        const b: number;
        const c: number;
        const d: number;
        const e: number;
        const f: number;
        const g: number;
        const h: number;
        const i: number;
        const j: number;
        const k: number;
        const l: number;
        const m: number;
        const n: number;
        const o: number;
        const p: number;
        const q: number;
        const r: number;
        const s: number;
        const t: number;
        const u: number;
        const v: number;
        const w: number;
        const x: number;
        const y: number;
        const z: number;
    }
}

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
    namespace Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
    }
    namespace Services {
        const ficherService: string;
        const q: string;
        const modalService: string;
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
}

declare namespace PiecesControles.Constantes.Url {
    namespace Rest {
        const urlDossierInstruction: string;
        const urlCreditParametre: string;
    }
    namespace DossierCreditInstruction {
        const urlLireElements: string;
        const urlLireSchema: string;
        const urlEditerDocument: string;
        const urlRecupererContexteEdition: string;
        const urlCalculerPiecesEtControles: string;
        const urlMiseAJourElements: string;
    }
    namespace CreditParametre {
        const listerParamApplicatif: string;
        const listerInfoAgent: string;
    }
    namespace versionWSDL {
        const versionWSDL0: number;
    }
}

declare module PiecesControles {
    var app: any;
}

declare module PiecesControles.Builder {
    class PiecoBuilder {
        /**
         * Créé les liste des pièces associées à leur sous titre
         * @param dataPieco
         * @param client détermine s'il faut créer une liste de pièces client ou pièces agence (true: piece client, false: pièce agence)
         */
        createListePieces(dataPieco: ICRest.Modeles.CalculerPiecesEtControles.IResultatPiecesEtControles, typePiece: Enum.EnumTypePiece): PiecesControles.Modele.IPiecoModele[];
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

declare module PiecesControles {
    class PiecesControlesControleur {
        private $q;
        private pieceControleRestService;
        private elementRestService;
        private creditParametreBusinessService;
        private contexteEditionRestService;
        dataPieco: ICRest.Modeles.CalculerPiecesEtControles.IResultatPiecesEtControles;
        static $inject: Array<string>;
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
        codeAffichageActionPieco: string;
        dncActif: boolean;
        isCompletelyCharged: boolean;
        isPropositionCommerciale: boolean;
        isClientReadOnly: boolean;
        isAgenceReadOnly: boolean;
        isControleReadOnly: boolean;
        constructor($q: ng.IQService, pieceControleRestService: ICRest.Services.PiecesEtControles.IPiecesEtControlesService, elementRestService: ICRest.Services.Element.IElementService, creditParametreBusinessService: ICBusiness.Services.CreditParametre.ICreditParametreService, contexteEditionRestService: ICRest.Services.ContexteEdition.IContexteEditionService);
        /**
         * Initialise la liste des pièces et les commentaires
         */
        private initDonneesPieco();
        /**
         * Initialise le booleen qui vérifie si le dnc est activé ou non
         */
        private initDNCActif();
        /**
         * Initialise le traitement en cours et vérifie si l'utilisateur a le droit de tout cocher d'un coup
         */
        private initTraitementEnCours();
        /**
         * Vérifie si l'utilisateur à le droit de tout cocher
         * @param codeProcessusInstruction
         */
        private getDroitToutCocher(codeProcessusInstruction);
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
        checkIfAutoriseAToutCocher(paramApplicatif: ICBusiness.Models.Common.IParametreApplicatif, codeProcessusInstruction: string): boolean;
        getClientEnum(): Enum.EnumTypePiece;
        getAgenceEnum(): Enum.EnumTypePiece;
        getControleEnum(): Enum.EnumTypePiece;
        /**
         * Vérifie si le dossier est en proposition commerciale en fonction du sousEtat
         * @param sousEtatDossier
         */
        checkIfPropositionCommerciale(sousEtatDossier: number): boolean;
        /**
         * Initialise l'accès à la mise à jour
         * @param sousEtatDossier
         */
        private defineReadOnly(sousEtatDossier);
        private setReadOnly(clientReadOnly, agenceReadOnly, controleReadOnly);
        isChargedAndClientNotReadOnly(): boolean;
        isChargedAndAgenceNotReadOnly(): boolean;
        isChargedAndControleNotReadOnly(): boolean;
        enregistrer(): void;
    }
}

declare module PiecesControles {
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
        filterByFinalite(listePiecoModele: PiecesControles.Modele.IPiecoModele[], codeProcessus: string): PiecesControles.Modele.IPiecoModele[];
        filterByConformite(listePiecoModele: PiecesControles.Modele.IPiecoModele[], codeStatut: number): PiecesControles.Modele.IPiecoModele[];
        filter(listePiecoModele: PiecesControles.Modele.IPiecoModele[], codeProcessus?: string, codeStatut?: number): PiecesControles.Modele.IPiecoModele[];
    }
}

declare module PiecesControles.Enum {
    enum EnumTypePiece {
        client = 0,
        agence = 1,
        controle = 2,
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

declare module PiecesControles.Modele {
    interface IException {
        libelle: string;
        valeurs: Array<string>;
        codeLibelle: string;
        causes?: Array<string>;
        codeHttp?: number;
    }
    class Exception implements IException {
        libelle: string;
        valeurs: Array<string>;
        codeLibelle: string;
        constructor(libelle?: string);
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

declare module PiecesControles {
    class PiecesControlesImpressionControleur {
        private editerDocumentRestService;
        private fichierService;
        idDossier: string;
        isPropositionCommerciale: boolean;
        dataListeActions: MyWay.UI.IBoutonActionRiche[];
        static $inject: Array<string>;
        constructor(editerDocumentRestService: ICRest.Services.Dossier.IEditerDocumentsService, fichierService: Service.FichierService);
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
        libelle: string;
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
         * @param oui
         * @param listePiecoMoele
         */
        majToutesPieces(oui: boolean): void;
    }
}

declare module PiecesControles {
}
