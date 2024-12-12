
declare namespace ICCreditComponents.Constantes.Inject {
    namespace Modale {
        const data: string;
    }
    namespace Services {
        const anchorService: string;
        const decisionPreteur: string;
        const anomalieService: string;
        const applicationService: string;
        const cheminDeFerCreditService: string;
        const contextEditionService: string;
        const controleSyntheseService: string;
        const dataPiecoService: string;
        const detailGarantieRuleService: string;
        const detailGarantieSettingsService: string;
        const dncService: string;
        const droitToutCocherService: string;
        const editionOffreService: string;
        const fichierService: string;
        const filtreService: string;
        const footerCreditService: string;
        const informationCreationService: string;
        const labelService: string;
        const loaderService: string;
        const modalService: string;
        const navigationCreditCommonService: string;
        const notarisationService: string;
        const piecoService: string;
        const popinService: string;
        const prendreDecisionPreteur: string;
        const redacteurActeFormSettingsService: string;
        const recapInterroBdfService: string;
        const recherchePersonneService: string;
        const redacteurActeDirectiveService: string;
        const remiseOffre: string;
        const repriseDossierService: string;
        const recherchePersonne: string;
        const sessionService: string;
        const saccefService: string;
        const totemCreditService: string;
        const traceService: string;
        const transfertNeoService: string;
        const transfertDecisionService: string;
        const transfertBoService: string;
        const transfertConformiteService: string;
        const verifierEligibiliteService: string;
    }
    namespace Error {
        const popinErrorService: string;
        const exceptionService: string;
    }
}

declare module ICCreditComponents {
    var app: any;
}

declare namespace ICCreditComponents.Constantes {
    namespace Cnp {
        const etatAccordee: string;
        const etatEnAttente: string;
        const etatRefusee: string;
    }
}

declare namespace ICCreditComponents.Constantes {
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

declare namespace ICCreditComponents.Constantes {
    namespace Form {
        const rgpdAlertMessage: string;
    }
}

declare namespace ICCreditComponents.Constantes {
    /**
     * Donne des identifiants pour gérer l'ancrage du totem appelant
     */
    namespace Ancrage {
        const piecesClient: string;
        const piecesAgence: string;
        const controles: string;
    }
    namespace Filtres {
        /**
         * Valeurs possibles pour la finalité des pièces
         */
        const listeFiltresProcessus: Array<Modeles.ISelectbox<string>>;
        /**
         * Valeurs possibles pour le filtre controle traiter avant
         */
        const listeFiltresProcessusControle: Array<Modeles.ISelectbox<string>>;
        /**
         * Valeurs possibles pour la conformité des pièces
         */
        const listeStatutDNCActive: Array<Modeles.ISelectbox<number>>;
        /**
         * Valeurs possibles pour la conformité des pièces
         */
        const listeStatutDNCDesactive: Array<Modeles.ISelectbox<number>>;
        /**
         * Valeurs possibles pour le filtre controle etat
         */
        const listeStatutsControle: Array<Modeles.ISelectbox<number>>;
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
    namespace TitreSyntheseAnomaliesPieco {
        const titre: string;
    }
}

declare namespace ICCreditComponents.Constantes {
    namespace Route {
        const erreur: string;
    }
}

declare namespace ICCreditComponents.Constantes {
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

declare namespace ICCreditComponents.Services {
    /** Données paramètrable en fonction d'activation caisse et habilitation */
    interface IInformationCreationResult {
        /** date d'instruction */
        dateInstruction: string;
        /** Devise du dossier */
        devise: string;
        /** pour le compte de */
        agentId: string;
    }
    interface IInformationCreationService {
        getInformationCreation(): ng.IPromise<IInformationCreationResult>;
    }
    class InformationCreationService implements IInformationCreationService {
        private $q;
        private popinService;
        private habilitationService;
        private parametreApplicatifService;
        private serviceAgent;
        static $inject: string[];
        constructor($q: ng.IQService, popinService: Services.IPopinService, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService, parametreApplicatifService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupération des informations de date d'instruction, devise et agent instructeur
         * Ces informations sont saisissables par l'utilisateur en fonction de paramètrage caisse et habilitation
         * Il peut donc y avoir une popin qui s'ouvre pour demander ces informations.
         * Si aucune saisie n'est autorisée, des valeurs par défaut sont retournées
         */
        getInformationCreation(): ng.IPromise<IInformationCreationResult>;
    }
}

declare module ICCreditComponents.Enum {
    enum EnumTypePiece {
        client = 0,
        agence = 1,
        controle = 2,
    }
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Filters {
}

declare namespace ICCreditComponents.Modeles {
    interface IIntervalleInterroCEGC {
        intervalle: number;
        nombreInterro: number;
    }
}

declare namespace ICCreditComponents.Modeles {
    interface ILoading<T> {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<T>;
        texte?: string;
    }
}

declare module ICCreditComponents.Modeles {
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
        anciensAvisEtStatut: IAnciensAvisEtStatut;
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
    interface IDataPieco {
        dossier: ICRest.Modeles.LireElement.IDossierLecture;
        dateDeTraitement: string;
        codeEtablissement: number;
        readOnly: boolean;
        dataPieco: ICRest.Modeles.CalculerPiecesEtControles.IResultatPiecesEtControles;
    }
    interface IErreurDossierNumerique {
        titre: string;
        libellesErreurs: string[];
    }
    interface IAnciensAvisEtStatut {
        statutAgence: number;
        statutBoOuConformite: number;
        avisAgence: string;
        avisBoOuConformite: string;
    }
}

declare module ICCreditComponents.Modeles {
    interface IRecherchePersonneParam {
        isPersonneMorale: boolean;
        canCreatePersonne: boolean;
        actionCreatePersonneMorale?: (data: ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT.ICreationClientContext) => void;
        actionCreatePersonnePhysique?: (data: ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT.ICreationClientContext) => void;
    }
}

declare module ICCreditComponents.Modeles {
    interface ISelectbox<T> {
        libelle: string;
        code: T;
    }
}

declare namespace ICCreditComponents.Directives.RedacteurActe {
    class RedacteurActeControleur {
        private $q;
        private $scope;
        private dossierService;
        private redacteurActeService;
        private popinService;
        private redacteurActeFormSettingsService;
        private redacteurActeDirectiveService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        open: boolean;
        idBloc: string;
        loadingSignatureNotaire: boolean;
        viewModel: IRedacteurActeViewModel;
        /** Form settings */
        form: ng.IFormController;
        formSettings: IRedacteurActeFormSettings;
        loadingRedacteurActe: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, $scope: ng.IScope, dossierService: ICBusiness.Services.Dossier.IDossierService, redacteurActeService: ICBusiness.Services.RedacteurActe.IRedacteurActeService, popinService: Services.IPopinService, redacteurActeFormSettingsService: IRedacteurActeFormSettingsService, redacteurActeDirectiveService: IRedacteurActeDirectiveService);
        private isOpen();
        private getRedacteurActe();
        private loadRedacteurActe(redacteurActe);
        private watchRedacteurActeReload();
        showNoRedacteurActe(): boolean;
        getLabelBoutonRechercher(): string;
        modifierRedacteurActe(): void;
        ouvrirPopinRechercher(): void;
        supprimerRedacteurActe(): void;
    }
}

declare namespace ICCreditComponents.Directives.RedacteurActe {
    interface IRedacteurActeDirectiveService {
        /**
         * Sauvegarde les information rédacteur d'acte et signature contenu dans la directive.
         * Seulement si des changements sont détectés
         * @param redacteurActeViewModel
         */
        saveInfoDirectiveIfNeeded(redacteurActeViewModel: IRedacteurActeViewModel): ng.IPromise<void>;
        /**
         * Contrôle si des modifications on besoins d'une sauvegarde
         * @param redacteurActeViewModel
         */
        needsSaving(redacteurActeViewModel: IRedacteurActeViewModel): boolean;
    }
    class RedacteurActeDirectiveService implements IRedacteurActeDirectiveService {
        private redacteurActeService;
        private $q;
        static $inject: string[];
        constructor(redacteurActeService: ICBusiness.Services.RedacteurActe.IRedacteurActeService, $q: ng.IQService);
        saveInfoDirectiveIfNeeded(redacteurActeViewModel: IRedacteurActeViewModel): ng.IPromise<void>;
        needsSaving(redacteurActeViewModel: IRedacteurActeViewModel): boolean;
        private redacteurActeChanged(redacteurActeViewModel);
        private dateSignatureChanged(redacteurActeViewModel);
    }
}

declare namespace ICCreditComponents.Directives.RedacteurActe {
}

declare namespace ICCreditComponents.Directives.RedacteurActe {
    import BusinessModel = ICBusiness.Models;
    interface IRedacteurActeViewModel {
        context: BusinessModel.Common.IContext;
        redacteurActe: BusinessModel.RedacteurActe.IRedacteurActe;
        redacteurActeInitial: BusinessModel.RedacteurActe.IRedacteurActe;
        adresseRedacteurActe: Forms.IAddress;
        intituleRules: ICBusiness.Rules.IValidationRule[];
        ligne6Rules: ICBusiness.Rules.IValidationRule[];
        nomRules: ICBusiness.Rules.IValidationRule[];
        canBeReload: boolean;
        hasChanged: boolean;
        isEmpty: boolean;
        isValid: boolean;
        needsToBeReload: boolean;
        loadingRedacteurActe: boolean;
        saveTemporaryAddress(): void;
    }
    interface IRechercheRedacteurActeViewModel {
        recherche: IRechercheRedacteurActe;
        typePersonne: number;
        rechercheMorale?: IRechercheRedacteurActe;
        recherchePhysique?: IRechercheRedacteurActe;
        selection?: BusinessModel.Emprunteur.IDetailPersonne;
    }
    interface IRechercheRedacteurActe {
        identifiantPersonne?: string;
        nom?: string;
        numeroSiren?: string;
        dateDeNaissance?: string;
        prenom?: string;
    }
    class RedacteurActeViewModel implements IRedacteurActeViewModel {
        context: BusinessModel.Common.IContext;
        canBeReload: boolean;
        redacteurActe: BusinessModel.RedacteurActe.IRedacteurActe;
        redacteurActeInitial: BusinessModel.RedacteurActe.IRedacteurActe;
        adresseRedacteurActe: Forms.IAddress;
        intituleRules: ICBusiness.Rules.IValidationRule[];
        ligne6Rules: ICBusiness.Rules.IValidationRule[];
        nomRules: ICBusiness.Rules.IValidationRule[];
        dateSignatureRules: ICBusiness.Rules.IValidationRule[];
        needsToBeReload: boolean;
        loadingRedacteurActe: boolean;
        constructor(context: BusinessModel.Common.IContext, canBeReload?: boolean);
        hasChanged: boolean;
        isEmpty: boolean;
        isValid: boolean;
        saveTemporaryAddress(): void;
        private getRules();
    }
}

declare namespace ICCreditComponents.Services {
    interface IAnomalieService {
        /**
         * Méthode pour annuler la décision prêteur
         * @param dateInstruction
         * @param idDossier
         */
        filterAnomalies(anomalies: ICBusiness.Models.Common.IAnomalieLecture[], typeAno: ICBusiness.Enum.TypeAnomalieEnum): ICBusiness.Models.Common.IAnomalieLecture[];
    }
    class AnomalieService implements IAnomalieService {
        filterAnomalies(anomalies: ICBusiness.Models.Common.IAnomalieLecture[], typeAno: ICBusiness.Enum.TypeAnomalieEnum): ICBusiness.Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICCreditComponents.Services {
    interface IApplicationService {
        /**
         * Ferme l'application avec sauvegarde du dossier
         * @param identifiantDossier
         * @param navigationService
         */
        fermerApplication(identifiantDossier: string, navigationService: Navigation.INavigationCreditService): void;
    }
    class ApplicationService implements IApplicationService {
        private dossierService;
        private popinService;
        private repriseDossierService;
        private traceService;
        static $inject: string[];
        private fermerApplicationError;
        constructor(dossierService: ICBusiness.Services.Dossier.IDossierService, popinService: Services.IPopinService, repriseDossierService: Services.IRepriseDossierService, traceService: ICCreditComponents.Services.ITraceService);
        fermerApplication(identifiantDossier: string, navigationService: Navigation.INavigationCreditService): void;
        private afficherPopinConfirmationSauvegarde();
        private fermerDossier(identifiantDossier, sauvegarde?);
    }
}

declare namespace ICCreditComponents.Services {
    interface IDataPiecoService {
        dataPiecoLoaded: boolean;
        dataPieco: Modeles.IDataPieco;
        getDataPieco(idDossier: string, dateDeTraitement: string, idPlanFinancement: number, codeEtablissement: number, readOnly: boolean): ng.IPromise<void>;
    }
    class DataPiecoService implements IDataPiecoService {
        private $q;
        private elementRestService;
        private pieceControleRestService;
        static $inject: string[];
        constructor($q: ng.IQService, elementRestService: ICRest.Services.Element.IElementService, pieceControleRestService: ICRest.Services.PiecesEtControles.IPiecesEtControlesService);
        dataPiecoLoaded: boolean;
        dataPieco: Modeles.IDataPieco;
        getDataPieco(idDossier: string, dateDeTraitement: string, idPlanFinancement: number, codeEtablissement: number, readOnly: boolean): ng.IPromise<void>;
    }
}


declare namespace ICCreditComponents.Services {
    interface IDecisionPreteur {
        /**
         * Méthode pour annuler la décision prêteur
         * @param dateInstruction
         * @param idDossier
         */
        annulerDecision(idDossier: string): ng.IPromise<boolean>;
        refuserDecision(idDossier: string, date: string): ng.IPromise<boolean>;
    }
    class DecisionPreteur implements IDecisionPreteur {
        private decisionService;
        private popinService;
        private mwNotificationService;
        static $inject: string[];
        constructor(decisionService: ICBusiness.Services.Decision.IDecisionService, popinService: ICCreditComponents.Services.IPopinService, mwNotificationService: MyWay.UI.IMwNotificationService);
        annulerDecision(idDossier: string): ng.IPromise<boolean>;
        refuserDecision(idDossier: string, date: string): ng.IPromise<boolean>;
    }
}

declare module ICCreditComponents.Services {
    interface IDNCService {
        isDNCActif(idDossier: string): ng.IPromise<boolean>;
        getReferenceRegroupement(idDossier: string): ng.IPromise<string>;
        miseAJourDossierNumerique(idDossier: string): ng.IPromise<void>;
    }
    class DNCService implements IDNCService {
        private contextEditionService;
        private dossierNumeriqueService;
        static $inject: Array<string>;
        constructor(contextEditionService: ICCreditComponents.ContextEdition.IContexteEditionService, dossierNumeriqueService: ICRest.Services.Dossier.DossierNumeriqueService);
        isDNCActif(idDossier: string): ng.IPromise<boolean>;
        getReferenceRegroupement(idDossier: string): ng.IPromise<string>;
        miseAJourDossierNumerique(idDossier: string): ng.IPromise<void>;
    }
}

declare module ICCreditComponents.Services {
    class DroitToutCocherService {
        private parametrageApplicatifService;
        static $inject: Array<string>;
        constructor(parametrageApplicatifService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifService);
        /**
         * Vérifie si l'utilisateur à le droit de tout cocher
         * @param codeProcessusInstruction
         */
        getDroitToutCocher(codeProcessusInstruction: string, dateDeTraitement: string, codeEtablissement: string, codeAffichageActionPieco: string): ng.IPromise<boolean>;
        private checkIfAutoriseAToutCocher(paramApplicatif, codeProcessusInstruction);
    }
}

declare namespace ICCreditComponents.Services {
    interface IEditionOffreService {
        actionEditionOffre(dateInstruction: string, codeEtablissement: string, idDossier: string, idProjet: string, numeroInterneEdsAgent: string, goToEdition: () => void): ng.IPromise<void>;
        imprimerDocument(idDossier: string, idws: string, infoDocument: ICBusiness.Models.EditionOffre.IInfoDocument, paramEditiques: any[], forceControleGestion: boolean, forceControleEdition: boolean): ng.IPromise<ICBusiness.Models.Impression.IImpression>;
        imprimerListeDocumentsOffre(codeEtablissement: string, idDossier: string, listeDocuments: ICBusiness.Models.EditionOffre.IInfoDocument[], forceControleGestion: boolean, forceControleEdition: boolean): ng.IPromise<void>;
        traiterSaisieDonneesComplementaires(dossier: ICBusiness.Models.Dossier.IDossierSchema, idDocument: string, libelleDocument: string, estAvecBtnAnnuler?: boolean): ng.IPromise<boolean>;
    }
    class EditionOffreService implements IEditionOffreService {
        private $q;
        private editionOffreService;
        private habilitationService;
        private mwNotificationService;
        private popinService;
        private parametrageAppicatifService;
        private dossierService;
        private saisiesComplementairesService;
        private impressionService;
        private dossierSchemaService;
        private notarisationService;
        static $inject: string[];
        private _listeDocumentsAImprimer;
        constructor($q: ng.IQService, editionOffreService: ICBusiness.Services.Edition.IEditionOffreService, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService, mwNotificationService: MyWay.UI.IMwNotificationService, popinService: ICCreditComponents.Services.IPopinService, parametrageAppicatifService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifService, dossierService: ICBusiness.Services.Dossier.IDossierService, saisiesComplementairesService: ICBusiness.Services.SaisiesComplementaires.ISaisiesComplementairesService, impressionService: ICBusiness.Services.ImpressionService.IImpressionService, dossierSchemaService: ICBusiness.Services.Dossier.IDossierShemaService, notarisationService: Services.INotarisationService);
        /**
         * Interface pour l'édition de l'offre
         * Cette méthode permet:
         * 1/ le contrôle du dossier
         * 2/ Si aucune anomalie ou forçage fait, routage sur l'un des différents types d'édition de l'offre (papier, industrialisée, etc)
         *
         * @param dateInstruction : date d'ainstruction
         * @param codeEtablissement : code établissement
         * @param idDossier : identifiant du dossier en instruction
         * @param numeroInterneEdsAgent : numéro interne EDS de l'agent connecté
         * @param goToEdition delegate pour la navigation vers l'édition de l'offre
         */
        actionEditionOffre(dateInstruction: string, codeEtablissement: string, idDossier: string, idProjet: string, numeroInterneEdsAgent: string, goToEdition: () => void): ng.IPromise<void>;
        /**
         * Méthode pour continuer les traitements avant l'accès à la page d'édition de l'offre/contrat
         * @param donneesDossier
         * @param dateInstruction
         * @param codeEtablissement
         * @param idProjet
         * @param numeroInterneEdsAgent
         * @param goToEdition
         */
        continuerActionEditionOffre(donneesDossier: ICBusiness.Models.Dossier.IDossierElement, dateInstruction: string, codeEtablissement: string, idProjet: string, numeroInterneEdsAgent: string, goToEdition: () => void): ng.IPromise<void>;
        /**
         * Méthode de traitement des anomalies
         *
         * @param codeEtablissement : code établissement
         * @param resultats : objet ICBusiness.Models.Edition.IAnomaliesControleEdition
         * @param forcagePiecoAgent : booléen pour savoir si le forçage des anomalies non bloquantes est possible
         */
        private traitementAnomalies(codeEtablissement, resultats, forcagePiecoAgent);
        /**
         *  Méthode pour traiter les éventuelles données complémentaires (i.e. affichage d'une popin si nécessaire)
         *
         * @param idDossier identifiant du dossier en instruction
         * @param idDocument identifiant théorique du document
         * @param libelleDocument libellé du document
         * @param dossier objet ICBusiness.Models.Dossier.IDossierSchema
         */
        traiterSaisieDonneesComplementaires(dossier: ICBusiness.Models.Dossier.IDossierSchema, idDocument: string, libelleDocument: string, estAvecBtnAnnuler?: boolean): ng.IPromise<boolean>;
        /**
         * Méthode qui permet d'ouvrir la popin de saisie des données complémentaires
         * @param idDossier identifiant du dossier en instruction
         * @param libelleDocument libellé du document
         * @param donneesComplementaires données complémentaires à traiter
         */
        private ouvrirPopinDonneesComplementaires(idDossier, libelleDocument, donneesComplementaires, estAvecBtnAnnuler?);
        /**
         * Méthode pour imprimer un document
         *
         * @param idDossier identifiant du dossier en instruction
         * @param idws identifiant de l'élément
         * @param infoDocument information sur le document
         * @param paramEditiques paramétrage de l'éditique
         * @param forceControleGestion booléen pour le forçage des contrôles au passage en gestion
         * @param forceControleEdition booléen pour le contrôle à l'édition de l'offre
         */
        imprimerDocument(idDossier: string, idws: string, infoDocument: ICBusiness.Models.EditionOffre.IInfoDocument, paramEditiques: any[], forceControleGestion: boolean, forceControleEdition?: boolean): ng.IPromise<ICBusiness.Models.Impression.IImpression>;
        private traitementRetourEdition(data, doc);
        /**
         * Envoi du document pdf
         * @param data
         */
        /**
         * Méthode pour ajouter un document à la liste des documents à éditer via l'ActiveX
         * @param data
         * @param doc
         */
        private alimenteListeDocuments(data, doc);
        /**
         * Méthode pour imprimer la liste des documents de l'offre
         * Remarque : Cette méthode permet l'affichage de l'éventuelle 'popin' de saisie des données complémentaires
         *
         * @param codeEtablissement code établissement
         * @param idDossier identifiant du dossier en instruction
         * @param listeDocuments liste des documents
         */
        imprimerListeDocumentsOffre(codeEtablissement: string, idDossier: string, listeDocuments: ICBusiness.Models.EditionOffre.IInfoDocument[]): ng.IPromise<void>;
        /**
         * Méthode pour traiter séquentiellement la liste des documents
         * @param codeEtablissement
         * @param idDossier
         * @param idws
         * @param listeDocuments
         * @param index
         */
        private traitementSequentiel(codeEtablissement, dossier, idws, listeDocuments, index);
    }
}

declare module ICCreditComponents.Services {
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

declare module ICCreditComponents.Services {
    class FichierService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string, idDossier: string): ng.IPromise<void>;
    }
}

declare module ICCreditComponents.Services {
    class FilterService {
        private filterByFinalite(listePiecoModele, codeProcessus);
        private filterByConformite(listePiecoModele, codeStatut);
        filter(listePiecoModele: Modeles.IPiecoModele[], codeProcessus?: string, codeStatut?: number): Modeles.IPiecoModele[];
    }
}

declare namespace ICCreditComponents.Services {
    interface IlabelService {
        getPageLabel(pageId: string): string;
    }
    class LabelService implements IlabelService {
        getPageLabel(pageId: string): string;
    }
}

declare module ICCreditComponents.Services {
    class ModaleService {
        private modalService;
        private $q;
        static $inject: Array<string>;
        constructor(modalService: MyWay.UI.IModalService, $q: ng.IQService);
        showModalConfirm(titre: string, message: string, taille: string): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface INotarisationService {
        consulterFicpNotarise(idDossier: string, idProjet: string, sousEtatDossier: ICBusiness.Enum.SousEtatDossier, codeEtablissement: string, dateInstruction: string): ng.IPromise<boolean>;
    }
    class NotarisationService implements INotarisationService {
        private $q;
        private emprunteurService;
        private recapInterroBdfService;
        static $inject: string[];
        constructor($q: ng.IQService, emprunteurService: ICBusiness.Services.Emprunteur.IEmprunteurService, recapInterroBdfService: Services.IRecapInterroBdfService);
        consulterFicpNotarise(idDossier: string, idProjet: string, sousEtatDossier: ICBusiness.Enum.SousEtatDossier, codeEtablissement: string, dateInstruction: string): ng.IPromise<boolean>;
    }
}

declare module ICCreditComponents.Services {
    class PiecoService {
        constructor();
        /**
         * Créé les liste des pièces associées à leur sous titre
         * @param dataPieco
         * @param client détermine s'il faut créer une liste de pièces client ou pièces agence (true: piece client, false: pièce agence)
         */
        createListePiecoModeles(dataPieco: ICRest.Modeles.CalculerPiecesEtControles.IResultatPiecesEtControles, typePiece: Enum.EnumTypePiece): Modeles.IPiecoModele[];
        /**
         * retourne la liste des pièces
         * @param listePieces
         * @param dataPieco
         */
        private findtlistPieces(listePieces, dataPieco);
        /**
         * Set IPiece datas
         * @param piece
         * @param processus
         */
        mapPiece(piece: ICRest.Modeles.CalculerPiecesEtControles.IControleManuelLecture | ICRest.Modeles.CalculerPiecesEtControles.IPieceLecture, processus: Modeles.IShortTypologie): Modeles.IPiece;
        private mapAnciensAvisEtStatut(histAgence, histBoOuConformite);
        /**
         * Définit le libellé de la pièce
         * @param piece
         */
        private defineLibellePiece(piece);
        /**
         * Définit le libellé d'acquisition pour le mapage des pièces
         * @param code
         */
        private constructAcquisition(code);
        /**
         * Récupère l'historique du type d'acteur que l'on recherche: Agent OU (BO ou Conformité)'
         * @param histControles
         * @param typeActrs
         */
        private getHistActr(histControles, typeActrs);
        /**
         * Trouve le libelle du processus à afficher en fonction de l'identifiant processus
         * @param dataPieco
         * @param identifiantProcessusAuPlusTard
         */
        private findProcessusFromDataPieco(dataPieco, identifiantProcessusAuPlusTard);
        /**
         * retourne une liste de pieces par type avec le statut d'acquisition mis à jour
         * @param liste
         * @param dataPieco
         * @param typePiece
         */
        updatePiecesAcquisition(liste: Modeles.IPiecoModele[], dataPieco: ICRest.Modeles.CalculerPiecesEtControles.IResultatPiecesEtControles, typePiece: Enum.EnumTypePiece): Modeles.IPiecoModele[];
        /**
         * Set Erreur Dossier Numerique et verification si le contexte est bien présent pour le cas des caisses non pilotes
         * @param titre
         * @param contexte
         */
        mapErreurDossierNumerique(titre: string, contexte: ICRest.Modeles.CalculerPiecesEtControles.IContexteDossierNumeriqueLecture): Modeles.IErreurDossierNumerique;
    }
}

declare namespace ICCreditComponents.Services {
    /**
     *  backdrop true : affichage d'un arrière plan grisé. Un clic sur l'arrière plan ferme la popin
     *  backdrop 'static': affichage d'un arrière plan grisé. Un clic sur l'arrière plan NE ferme la popin
     *  backdrop false: L'arrière plan reste la page courante. Un clic sur l'arrière plan NE ferme la popin
     */
    type ModalBackdrop = "static";
    interface IPopinService {
        showConfirmModal(headerText?: string, bodyText?: string, actionButtonText?: string, closeButtonText?: string): ng.IPromise<void>;
        showErrorModal(headerText: string, bodyText: string, actionButtonText?: string): ng.IPromise<void>;
        showFullModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        showExtraLargeModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        showLargeModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        showMediumModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        showSmallModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
    }
    class PopinService implements IPopinService {
        private modalService;
        private $templateCache;
        private $modal;
        static $inject: string[];
        constructor(modalService: MyWay.UI.ModalService, $templateCache: ng.ITemplateCacheService, $modal: angular.ui.bootstrap.IModalService);
        private showModal(modalOptions);
        showConfirmModal(headerText?: string, bodyText?: string, actionButtonText?: string, closeButtonText?: string): ng.IPromise<void>;
        showErrorModal(headerText: string, bodyText: string, actionButtonText?: string): ng.IPromise<void>;
        showFullModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        showExtraLargeModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        showLargeModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        showMediumModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        showSmallModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | ModalBackdrop, keyboard?: boolean): ng.IPromise<U>;
        getModalSettings<T>(data: T, ctrl: string, ctrlAs: string, templateUrl: string, size: string, backdrop: boolean | ModalBackdrop, keyboard: boolean, windowClass?: string): ng.ui.bootstrap.IModalSettings;
    }
}

declare namespace ICCreditComponents.Services {
    interface IPrendreDecisionPreteur {
        /**
         * Méthode pour effectuer les contrôles pour savoir si la décision prêteur peut êre prise
         * @param dateInstruction
         * @param idDossier
         */
        controleAvantDecision(dateInstruction: string, idDossier: string): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        /** Dernier retour de controle effecutué */
        controleDecision: ICBusiness.Models.Dossier.IControleDossier;
    }
    class PrendreDecisionPreteur implements IPrendreDecisionPreteur {
        private controleSyntheseService;
        private popinService;
        private $rootScope;
        controleDecision: ICBusiness.Models.Dossier.IControleDossier;
        private anomalieNonBloquante;
        static $inject: string[];
        constructor(controleSyntheseService: ICCreditComponents.Controle.IControleSyntheseService, popinService: ICCreditComponents.Services.IPopinService, $rootScope: ng.IScope);
        controleAvantDecision(dateInstruction: string, idDossier: string): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        /**
         * Méthode pour savoir s'il existe des alertes et/ou des anomalies non bloquantes AVEC absence d'anomalies bloquantes
         * @param controles
         */
        existeAlerteSansAnomalieBloquantes(controles: ICBusiness.Models.Dossier.IControleDossier): boolean;
        /**
         * Méthode pour savoir s'il existe au moins une anomalie bloquante
         * @param controles
         */
        existeAnomaliesBloquantes(controles: ICBusiness.Models.Dossier.IControleDossier): boolean;
    }
}

declare namespace ICCreditComponents.Services {
    interface IRecapInterroBdfParam extends ICBusiness.Services.InterroBdf.IVerifierFichageBdfMultipleParam {
        sousEtatDossier: ICBusiness.Enum.SousEtatDossier;
    }
    interface IRecapInterroBdfService {
        /**
         * Vérifie si les personnes passées en paramètre sont fichées et permet de forcer en cas de besoin
         * @param param
         */
        verifierFichageMultipleAvecRecap(param: IRecapInterroBdfParam): ng.IPromise<boolean>;
    }
    class RecapInterroBdfService implements IRecapInterroBdfService {
        private mwNotificationService;
        private interroBdfService;
        private popinService;
        static $inject: string[];
        constructor(mwNotificationService: MyWay.UI.IMwNotificationService, interroBdfService: ICBusiness.Services.InterroBdf.IInterroBdfService, popinService: Services.IPopinService);
        verifierFichageMultipleAvecRecap(param: IRecapInterroBdfParam): ng.IPromise<boolean>;
        private recapitulatifBdf(tuples, identifiantDossier, sousEtatDossier);
    }
}

declare namespace ICCreditComponents.Services {
    interface IRecherchePersonne {
        /**
         * service de recherche de personne (morale ou physique)
         * @param personneMorale
         */
        recherchePersonne(rechercheParam: Modeles.IRecherchePersonneParam): ng.IPromise<ICBusiness.Models.Emprunteur.IPersonne>;
        /**
         * Transforme une personne en Client myWay et renvoi un context de creation client
         * @param personne
         */
        mapPersonneToCreationClientContext(personne: ICBusiness.Models.Emprunteur.IPersonne): ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT.ICreationClientContext;
    }
    class RecherchePersonne implements IRecherchePersonne {
        private mwgcRechercherPersonneService;
        static $inject: string[];
        constructor(mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService);
        recherchePersonne(rechercheParam: Modeles.IRecherchePersonneParam): ng.IPromise<ICBusiness.Models.Emprunteur.IPersonne>;
        private mapPersonneSelectionneeFromRecherche(personneSelectionnee);
        mapPersonneToCreationClientContext(personne: ICBusiness.Models.Emprunteur.IPersonne): ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT.ICreationClientContext;
    }
}

declare namespace ICCreditComponents.Services {
    interface IRemiseOffre {
        /**
         * Méthode pour valider la remise de l'offre
         *
         * @param identifiant du dossier en instruction
         * @param dateRemise date de remise de l'offre/contrat
         * @param naviguerVers éventuelle méthode pour naviguer vers
         * @returns un booléen sur la réussite ou l'échec de l'enregistrement de la remise de l'offre/contrat
         */
        validerRemiseOffre(idDossier: string, dateRemise: string, naviguerVers?: () => void): ng.IPromise<void>;
    }
    class RemiseOffre implements IRemiseOffre {
        private $q;
        private remiseOffreService;
        private mwNotificationService;
        private popinService;
        static $inject: string[];
        constructor($q: ng.IQService, remiseOffreService: ICBusiness.Services.RemiseOffre.IRemiseOffreService, mwNotificationService: MyWay.UI.IMwNotificationService, popinService: ICCreditComponents.Services.IPopinService);
        /**
         * Méthode pour valider la remise de l'offre
         *
         * @param identifiant du dossier en instruction
         * @param dateRemise date de remise de l'offre/contrat
         * @param naviguerVers éventuelle méthode pour naviguer vers
         * @returns un booléen sur la réussite ou l'échec de l'enregistrement de la remise de l'offre/contrat
         */
        validerRemiseOffre(idDossier: string, dateRemise: string, naviguerVers?: () => void): ng.IPromise<void>;
    }
}

declare namespace ICCreditComponents.Services {
    interface IRepriseDossierService {
        addCookie(idDossier: string, codeEtablissement: string, referenceExterneAgent: string, dateTraitement: string, codeApplication: ICBusiness.Enum.CodeApplicationEnum): void;
        removeCookie(): void;
        hasCookie(): boolean;
    }
    const NOM_COOKIE: string;
    const NOM_COOKIE_MYCREDIMMO: string;
    class RepriseDossierService implements IRepriseDossierService {
        addCookie(idDossier: string, codeEtablissement: string, referenceExterneAgent: string, dateTraitement: string, codeApplication: ICBusiness.Enum.CodeApplicationEnum): void;
        removeCookie(): void;
        hasCookie(): boolean;
    }
}

declare namespace ICCreditComponents.Services {
    interface ISaccefService {
        /**
         * Transmet à la saccef. Retourne true si transmis, false sinon
         * @param dateTraitement
         * @param codeEtab
         * @param idDossier
         * @param idPlanFinancement
         */
        transmissionSaccef(dateTraitement: string, codeEtab: string, idDossier: string, idPlanFinancement: string): ng.IPromise<boolean>;
        verifierEtatCEGC(dateTraitement: string, codeEtab: string, idDossier: string, avecInterval: boolean, navigationService: Navigation.INavigationCreditService): void;
    }
    class SaccefService implements ISaccefService {
        private garantieService;
        private $q;
        private parametreApplicatifService;
        private $interval;
        private popinService;
        private decisionService;
        private anomalieService;
        static $inject: string[];
        constructor(garantieService: ICBusiness.Services.Garanties.IGarantiesService, $q: ng.IQService, parametreApplicatifService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifService, $interval: ng.IIntervalService, popinService: ICCreditComponents.Services.IPopinService, decisionService: ICBusiness.Services.Decision.IDecisionService, anomalieService: Services.IAnomalieService);
        transmissionSaccef(dateTraitement: string, codeEtab: string, idDossier: string, idPlanFinancement: string): ng.IPromise<boolean>;
        /**
         * Interroger le back pour vérifier un possible résultat CEGC
         */
        verifierEtatCEGC(dateTraitement: string, codeEtab: string, idDossier: string, avecInterval: boolean, navigationService: Navigation.INavigationCreditService): ng.IPromise<void>;
        /**
         * Affiche une popin de confirmation pour la prise en compte de la réponse à la CEGC
         */
        private afficherPopinReponseCEGC(idDossier, navigationService);
        private constructTextPopinResultatCEGC(result);
        /**
         * Contrôle avant transmission saccef
         */
        private controleTransmissionSaccef(idDossier);
        /**
         * Initialise le parametre de transmission CEGC
         */
        private checkIfTransmissionCEGCActif(dateTraitement, codeEtab);
        /**
         * Récupére les paramètres d'interrogation du resultatCEGC (délai et nombre de fois)
         */
        private recupererIntervalleInterrogationCEGC(dateTraitement, codeEtablissement);
    }
}

declare namespace ICCreditComponents.Services {
    interface ITraceService {
        setOnTrace(): ng.IPromise<void>;
        setOffTrace(isRecherche?: boolean): ng.IPromise<void>;
    }
    const TRACE_COOKIE: string;
    class TraceService implements ITraceService {
        private $q;
        private traceService;
        private popinService;
        private fichierService;
        private fullLoggerService;
        static $inject: string[];
        constructor($q: ng.IQService, traceService: ICBusiness.Services.Trace.ITraceService, popinService: Services.IPopinService, fichierService: ICCommon.Services.IFichierService, fullLoggerService: ICCommon.Logger.FullLoggerService);
        setOnTrace(): ng.IPromise<void>;
        private errorSetOnTrace();
        setOffTrace(isRecherche?: boolean): ng.IPromise<void>;
        private hasTraceCookieAlreadySet();
        private addTraceCookie();
        private removeTraceCookie();
    }
}

declare namespace ICCreditComponents.Services {
    interface ITransfertBoService {
        transfertBackOffice(codeEtab: string, idDossier: string, dateTraitement: string, afficherBtnAnnuler: boolean): ng.IPromise<boolean>;
    }
    class TransfertBoService implements ITransfertBoService {
        private popinService;
        static $inject: string[];
        constructor(popinService: IPopinService);
        /**
         * Transfert pour décision
         *
         * @param codeEtab code établissement
         * @param idDossier identifiant du dossier en instruction
         * @param dateTraitement date de traitement
         * @param afficherBtnAnnuler booléen pour affichage/masquage du bouton annuler
         */
        transfertBackOffice(codeEtab: string, idDossier: string, dateTraitement: string, afficherBtnAnnuler: boolean): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface ITransfertConformiteService {
        transfertConformite(codeEtab: string, idDossier: string, dateTraitement: string): ng.IPromise<boolean>;
    }
    class TransfertConformiteService implements ITransfertConformiteService {
        private popinService;
        static $inject: string[];
        constructor(popinService: IPopinService);
        /**
         * Transfert pour conformité
         *
         * @param codeEtab code établissement
         * @param idDossier identifiant du dossier en instruction
         * @param dateTraitement date de traitement
         */
        transfertConformite(codeEtab: string, idDossier: string): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface ITransfertDecisionService {
        transfertDecision(codeEtab: string, idDossier: string, dateTraitement: string): ng.IPromise<boolean>;
    }
    class TransfertDecisionService implements ITransfertDecisionService {
        private popinService;
        static $inject: string[];
        constructor(popinService: IPopinService);
        /**
         * Transfert pour décision
         *
         * @param codeEtab code établissement
         * @param idDossier identifiant du dossier en instruction
         * @param dateTraitement date de traitement
         */
        transfertDecision(codeEtab: string, idDossier: string, dateTraitement: string): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface ITransfertNeoService {
        /**
         * Affiche une popin de confirmation
         * si confirmé: transfert le dossier et débranche vers NEO
         * @param idDossier
         */
        transfererDossierDansNeo(idDossier: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
    }
    class TransfertNeoService implements ITransfertNeoService {
        private popinService;
        private repriseDossierService;
        private dossierService;
        private lisaService;
        private traceService;
        static $inject: string[];
        constructor(popinService: IPopinService, repriseDossierService: IRepriseDossierService, dossierService: ICBusiness.Services.Dossier.IDossierService, lisaService: ICCommon.Services.IlisaService, traceService: Services.ITraceService);
        transfererDossierDansNeo(idDossier: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        private debrancherVersNeo(idDossier, authentificationInfos);
    }
}

declare namespace ICCreditComponents.Services {
    interface IVerifierEligibiliteService {
        openModaleVerifierEligibilite(identifiantDossier: string, coutTotal: number): void;
    }
    class VerifierEligibiliteService implements IVerifierEligibiliteService {
        private verifierEligibiliteService;
        private popinService;
        static $inject: string[];
        constructor(verifierEligibiliteService: ICBusiness.Services.Dossier.IVerifierEligibilite, popinService: ICCreditComponents.Services.IPopinService);
        openModaleVerifierEligibilite(identifiantDossier: string, coutTotal: number): void;
    }
}

declare namespace ICCreditComponents.ContextEdition {
    interface IModaleContexteEditionControleurData {
        idDossier: string;
    }
    interface ITaleauContextData {
        label: string;
        contexteEdition: ICBusiness.Models.Edition.IContexteEdition;
        listeAnomalies: string[];
    }
    class ModaleContexteEditionControleur {
        private $modalInstance;
        private contextEditiqueService;
        loading: boolean;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, contextEditiqueService: IContexteEditionService, data: IModaleContexteEditionControleurData);
        private updateTaleau();
        private getDocumentAnomalies(ctx);
        tableauParams: MyWay.UI.ImwTableOptions;
        fermer(): void;
    }
}

declare namespace ICCreditComponents.ContextEdition {
    interface IContexteEditionService {
        /** Dernier Contexte d'édition récupéré */
        contexteEdition: ICBusiness.Models.Edition.IContextEditionDocument;
        /** Indicateur de la récupération du contexte en cours */
        gettingContext: boolean;
        /**
         * Lance la récupération du contexte d'édition
         * @param idDossier
         */
        getContextEdition(idDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContextEditionDocument>;
        /**
         * Abonnement à l'événement de mise à jours du contexte d'édition
         * @param enventHandler
         */
        onContextEditionUpdated(enventHandler: () => void): void;
        /**
         * Ouvre une popin présentant le contexte d'édition des documents
         * @param idDossier
         */
        openPopinContexteEdition(idDossier: string): ng.IPromise<void>;
    }
    class ContexteEditionService implements IContexteEditionService {
        private $q;
        private contexteEditionService;
        private popinService;
        contexteEdition: ICBusiness.Models.Edition.IContextEditionDocument;
        gettingContext: boolean;
        private contextEditionUpdatedHanlders;
        static $inject: string[];
        constructor($q: ng.IQService, contexteEditionService: ICBusiness.Services.Edition.IContexteEditionService, popinService: Services.IPopinService);
        /**
         * Récupération du contexte edition
         * @param idDossier
         */
        getContextEdition(idDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContextEditionDocument>;
        onContextEditionUpdated(eventHandler: () => void): void;
        private contexteEditionUpdatedRaiseEvent();
        openPopinContexteEdition(idDossier: string): ng.IPromise<void>;
    }
}

declare namespace ICCreditComponents.Directives {
    class CheminDeFerControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        private _maxLgMdStepPrinted;
        private _maxSmStepPrinted;
        private _maxXsStepPrinted;
        private _activeIndex;
        private _lgMdLimits;
        private _smLimits;
        private _xsLimits;
        settings: ICheminDeFerSettings;
        constructor();
        private getMinMaxIndex(activeIndex, maxStep);
        private getMinIndex(indexActiveStep, stepPrinted);
        private getMaxIndex(indexActiveStep, stepPrinted);
        checkLgMdClass(index: number): boolean;
        checkSmClass(index: number): boolean;
        checkXsClass(index: number): boolean;
        private checkClassActive(index, minIndex, maxIndex);
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    interface ICheminDeFerSettings {
        listeEtapes: ICheminDeFerEtape[];
    }
    interface ICheminDeFerEtape {
        libelle: string;
        active: () => boolean;
        inProgress: () => boolean;
    }
    interface IStepListInformation {
        value: number;
        label: string;
    }
}

declare namespace ICCreditComponents.Directives {
    class LoaderDirectiveControleur {
        private loaderService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor(loaderService: Services.IloaderData);
        loading: ILoaderSetting;
        fullScreen: boolean;
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    interface ILoaderSetting {
        visible: boolean;
        text?: string;
        fullScreen?: boolean;
    }
}

declare namespace ICCreditComponents.Services {
    interface ILoaderService {
        /**
         * Show the unknown progression loader
         * @param text
         * @param delay default 200
         */
        startLoading(text?: string, delay?: number, fullScreen?: boolean): void;
        /**
         * Show the unknown progression loader until the end of the promise
         * @param text to show on loader
         * @param promise
         * @param delay default 200
         */
        startLoadingPromise<T>(promise: ng.IPromise<T>, text?: string, delay?: number, fullScreen?: boolean): ng.IPromise<T>;
        /**
         * Update the text to display on loader
         * @param text
         */
        updateText(text: string): void;
        /** Hide loader */
        stopLoading(): void;
    }
    interface IloaderData {
        loading: Directives.ILoaderSetting;
    }
    class LoaderService implements ILoaderService {
        private $timeout;
        private $q;
        loading: Directives.ILoaderSetting;
        private currentTimeOut;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, $q: ng.IQService);
        startLoadingPromise<T>(promise: ng.IPromise<T>, text: string, delay?: number, fullScreen?: boolean): ng.IPromise<T>;
        startLoading(text: string, delay?: number, fullScreen?: boolean): void;
        stopLoading(): void;
        updateText(text: string): void;
        private clearCurrentTimeOut();
    }
}

declare module ICCreditComponents.Directives {
    interface IPiecoDirectiveParams {
        idDossier: string;
        dateDeTraitement: string;
        idPlanFinancement: number;
        codeEtablissement: string;
        readOnly: boolean;
        sauvegarderPieces: () => ng.IPromise<void>;
        sauvegardeHandler: () => ng.IPromise<boolean>;
        imprimerPiecesClientHandler: () => ng.IPromise<void>;
        imprimerPiecesAgenceHandler: () => ng.IPromise<void>;
        imprimerControlesHandler: () => ng.IPromise<void>;
        isDNCActif: () => boolean;
        hasPiecesClients: () => boolean;
        hasPiecesAgences: () => boolean;
        hasControles: () => boolean;
        hasMoreThanOneTypeOfPieces: () => boolean;
        piecoCompletelyLoaded: () => boolean;
        refreshPiecesAcquisition: () => void;
    }
    class PiecesControlesControleur {
        private elementRestService;
        private pieceControleRestService;
        private piecoService;
        private dataPiecoService;
        private dncService;
        private droitToutCocherService;
        private mwNotificationService;
        private $scope;
        private $q;
        private popinService;
        private editerDocumentRestService;
        private fichierService;
        private totemService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        piecoParams: IPiecoDirectiveParams;
        idBlocPiecesClient: string;
        idBlocPiecesAgence: string;
        idBlocControles: string;
        listePiecoModeleClient: Modeles.IPiecoModele[];
        listePiecoModeleAgence: Modeles.IPiecoModele[];
        listePiecoModeleControle: Modeles.IPiecoModele[];
        erreurDossierNumerique: Modeles.IErreurDossierNumerique;
        commentairePiecesClient: string;
        commentairePiecesAgence: string;
        codeR: number;
        codeA: number;
        codeN: number;
        traitementEnCours: string;
        isAutoriseToutCocher: boolean;
        isLoading: boolean;
        isClientReadOnly: boolean;
        isAgenceReadOnly: boolean;
        isControleReadOnly: boolean;
        private dncActif;
        toutCocherClient: IPiecesControlesToutCocherControleurParams;
        toutCocherAgence: IPiecesControlesToutCocherControleurParams;
        toutCocherControle: IPiecesControlesToutCocherControleurParams;
        static $inject: Array<string>;
        constructor(elementRestService: ICRest.Services.Element.IElementService, pieceControleRestService: ICRest.Services.PiecesEtControles.IPiecesEtControlesService, piecoService: Services.PiecoService, dataPiecoService: Services.IDataPiecoService, dncService: Services.DNCService, droitToutCocherService: Services.DroitToutCocherService, mwNotificationService: MyWay.UI.IMwNotificationService, $scope: ng.IScope, $q: ng.IQService, popinService: Services.PopinService, editerDocumentRestService: ICRest.Services.Dossier.IEditerDocumentsService, fichierService: Services.FichierService, totemService: ICCreditComponents.Navigation.TotemCreditService);
        private initParamsToutCocher();
        hasSomePieces(): boolean;
        hasSomePiecesClients(): boolean;
        hasSomePiecesAgences(): boolean;
        hasSomeControles(): boolean;
        hasMoreThanOneTypeOfPieces(): boolean;
        private refreshPiecesAcquisition();
        /**
         * Imprimer un document en fonction du type de document
         *
         * @param typeDoc
         */
        imprimer(typeDoc: string): ng.IPromise<void>;
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
        enregistrer(): ng.IPromise<void>;
    }
}

declare module ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.InformationDossier {
    interface IModaleInformationDossierControleurData {
        showFieldDate: boolean;
        showFieldDevise: boolean;
        showFieldAgent: boolean;
        codeEtablissement: string;
    }
    interface IModaleInformationDossierControleurResult extends Services.IInformationCreationResult {
    }
    class ModaleInformationDossierControleur {
        private $modalInstance;
        private catalogueService;
        private data;
        private popinService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        result: IModaleInformationDossierControleurResult;
        dateInstructionRules: ICBusiness.Rules.IValidationRule[];
        deviseRules: ICBusiness.Rules.IValidationRule[];
        listeDevise: ICBusiness.Models.Common.ICodeLabel<string>[];
        selectedDevise: ICBusiness.Models.Common.ICodeLabel<string>;
        afficherAgent: boolean;
        agentSelectionne: MyWay.Model.Agent;
        pourCompteDeSelected: boolean;
        private agentRules;
        isValid: boolean;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, catalogueService: ICBusiness.Services.Catalogue.ICatalogueService, data: IModaleInformationDossierControleurData, popinService: ICCreditComponents.Services.IPopinService);
        listerDevise(): ng.IPromise<ICBusiness.Models.Common.ICodeLabel<string>[]>;
        valider(): void;
    }
}

declare namespace ICCreditComponents.Directives {
    class HeaderDirectiveControleur {
        private contextEditiqueService;
        private popinService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        onCloseClick: () => void;
        context: ICBusiness.Models.Common.IContext;
        voletContextEditionOuvert: boolean;
        static $inject: string[];
        constructor(contextEditiqueService: ContextEdition.IContexteEditionService, popinService: Services.IPopinService);
        /** Construction du libelle de détail sous le header */
        libelleDetail: string;
        showLienContexteEdition: boolean;
        isConso: boolean;
        isPro: boolean;
        isImmo: boolean;
        close(): void;
        openContexteEdition(): void;
        openPreference(): void;
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    class FooterDirectiveControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        settings: IFooterDirectiveSettings;
        constructor();
        isBtnMulti: (btn: IFooterButton) => boolean;
        btnMultipleHasOneVisible: (btn: IFooterMultiButton) => boolean;
        getFirstMultiButtonVisible: (btn: IFooterMultiButton) => IFooterSimpleButton;
        getBtnClassStyle(btn: IFooterButton): string;
        /** fonction pour satisfaire le linter */
        doNothing(): void;
        getButtonLabel(b: IFooterButton): string;
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    interface IFooterDirectiveSettings {
        hidden: () => boolean;
        listButtons: IFooterButton[];
        /**
         * si true, le premier bouton non désactivé depuis la droite de l'écran est primaire (couleur plus visible qu'un bouton secondaire)
         * sinon, seul le bouton à droite est primaire même si celui si est désactivé
         */
        firstButtonFromRightEnabledIsPrimary: boolean;
    }
    enum IFooterButtonTypeEnum {
        simple = 0,
        multiple = 1,
    }
    interface IFooterButton {
        id: string;
        label: string | (() => string);
        enable: () => boolean;
        visible: () => boolean;
        /** Indique si le bouton est primaire (couleur plus visible que les boutons secondaires). True par defaut */
        primary?: () => boolean;
        type: IFooterButtonTypeEnum;
    }
    interface IFooterMultiButton extends IFooterButton {
        listButtons: IFooterSimpleButton[];
        onDropdownChange: (open: boolean, id: string) => void;
        open: boolean;
    }
    interface IFooterSimpleButton extends IFooterButton {
        action: (button: IFooterSimpleButton) => void;
        promise?: ng.IPromise<any>;
    }
    class FooterMultiButton implements IFooterMultiButton {
        id: string;
        label: string;
        enable: () => boolean;
        listButtons: IFooterSimpleButton[];
        type: IFooterButtonTypeEnum;
        primary: () => boolean;
        visible: () => boolean;
        onDropdownChange(open: boolean): void;
        open: boolean;
        constructor(id: string, label: string, enable: () => boolean, visible: () => boolean, listButtons: IFooterSimpleButton[], type: IFooterButtonTypeEnum, primary: () => boolean);
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Controle {
    interface IControleSyntheseService {
        nombreAnomalieBloquante: number;
        nombreAlertes: number;
        controleResultByTheme: IControleDossierGroupByTheme;
        setUpDependencies(navigationService: Navigation.INavigationCreditService): ng.IPromise<void>;
        controlerDossier(idDossier: string): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        controlerCompletude(idDossier: string): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        controlerDecision(params: ICBusiness.Services.Dossier.IParamsControleDecision): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        controlerCompletudeEtDecision(params: ICBusiness.Services.Dossier.IParamsControleDecision): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        redirect(pageid: string): void;
        /**
         * Fournit une fonction à appeler avant de lancer le controle (ex: sauvegarder la page)
         * @param delegate
         */
        onBeforeControle(delegate: () => ng.IPromise<boolean>): void;
        syntheseDisplayed: boolean;
        /**
         * Relance le dernier controle effectué
         * @param actionAutomatique Mettre à true si ce n'est pas une action explicite de l'utilisateur.
         * actionAutomatique : Pour un affichage plus discret quand l'action ne vient pas d'un clic direct de l'utilisateur (ex: changement de page)
         */
        rafraichir(actionAutomatique?: boolean): ng.IPromise<void>;
        controleEnCours: boolean;
        /** indique si un controle à déja été lancé */
        controleEffectue: boolean;
        /** désactive les controles en cours. Les controles automatiques ne sont plus lancé jusqu'à ce qu'un nouveau contrôle soit effectué */
        resetControle(): void;
    }
    class ControleSyntheseService {
        private $q;
        private $timeout;
        private controleDossierService;
        private labelService;
        private contextService;
        private mwNotificationService;
        nombreAnomalieBloquante: number;
        nombreAlertes: number;
        /** Resultat du controle */
        controleResult: ICBusiness.Models.Dossier.IControleDossier;
        /** Resultat du controle par theme */
        controleResultByTheme: IControleDossierGroupByTheme;
        private _currentControlResult;
        private currentControlResultGroupByTheme;
        /** navigation service permettant de rediriger sur la bonne page en fonction du theme */
        private navigationService;
        /** Données du dernier appel d'un controle */
        private sauvegarde;
        private _onBeforeControle;
        private syntheseDisplayed;
        controleEnCours: boolean;
        controleEffectue: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, controleDossierService: ICBusiness.Services.Dossier.IControleDossierService, labelService: Services.IlabelService, contextService: ICCommon.Services.IProcessusContextService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Add a delegate function to be executed before controle
         * @param delegate
         */
        onBeforeControle(delegate: () => ng.IPromise<boolean>): void;
        /**
         * Redirection vers une page de l'app
         * @param pageid
         */
        redirect(pageid: string): void;
        resetControle(): void;
        /**
         * Mise en place des dépendances
         * @param navigationService
         */
        setUpDependencies(navigationService: Navigation.INavigationCreditService): ng.IPromise<void>;
        /**
         * Controle dossier manuel
         * @param idDossier
         */
        controlerDossier(idDossier: string): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        /**
         * Controle dossier pour passer l'accord client
         * @param idDossier
         */
        controlerCompletude(idDossier: string): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        /**
         * Controle dossier pour passer l'accord client
         * @param idDossier
         */
        controlerCompletudeEtDecision(params: ICBusiness.Services.Dossier.IParamsControleDecision): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        /**
         * Controle dossier à la décision prêteur
         * @param params
         */
        controlerDecision(params: ICBusiness.Services.Dossier.IParamsControleDecision): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        /** Appelle de la dernière fonction appelée */
        rafraichir(actionAutomatique?: boolean): ng.IPromise<void>;
        private executeActionBeforeControle();
        private handleLoaderFlag<T>(promise);
        /**
         * Sauvegarde l'action pour pouvoir être rejouée.
         * Sauvegarde en cache et dans le context pour permettre de rejouer le contrôle au débranchement sur une autre SPA
         * @param fonction
         * @param params
         */
        private setSauvegarde(fonction, params);
        /** récupération de la sauvegarde du context */
        private loadSauvegardeFromContext();
        /**
         * Mise à jour des propriétés de service avec un résultat d'erreurs
         * @param cd
         */
        private setControleResult(cd);
        private stripHtml(html);
        private automticRefresh;
        private displayTimeout;
        private handleResultDisplay();
        /**
         * Regroupe les anomalies du contrôle par thème.
         * @param cd
         */
        private getControlGroupByTheme(cd);
        /**
         * Regroupement des anomalies par thème ThemeAnomalieEnum (plusieurs types de contrôle Neo peuvent intégrer un thème )
         * Les thèmes peuvent correspondre à des pages de l'applicaiton
         * @param anomalies
         */
        private getAnomaliesGroupeBytheme(anomalies);
        /** Change le thème de certains controles car le champ concernés n'est pas au même endroit que Neo */
        private changeTheme(anomalies);
        private setTypeControleNumeroRegle(anomalies, typeControle, idAno);
        /**
         * Construction d'un objet theme.
         * Retourne null si aucune anomalie dans le theme
         * @param theme
         * @param typesControles
         * @param anomalies
         * @param pageId
         * @param title
         */
        private getTheme(theme, typesControles, anomalies, pageId, title);
    }
}

declare namespace ICCreditComponents.Controle {
    interface IThemeAnomalie {
        theme: ThemeAnomalieEnum;
        title: string;
        pageId: string;
        listeAnomalie: ICBusiness.Models.Dossier.IAnomalie[];
    }
    interface IControleDossierGroupByTheme {
        listeAnomaliesBloquantes: IThemeAnomalie[];
        listeAlertes: IThemeAnomalie[];
    }
}

declare namespace ICCreditComponents.Controle {
    enum ThemeAnomalieEnum {
        CoherenceDossier = 0,
        Client = 1,
        Projet = 2,
        Financement = 3,
        Assurances = 4,
        Garanties = 5,
        GestionAdmin = 6,
        Pieces = 7,
        Manuel = 8,
    }
}

declare namespace ICCreditComponents.Controle {
    class SyntheseAnomaliesDirectiveControleur {
        private controleSyntheseService;
        display: boolean;
        controleEnCours: boolean;
        title: string;
        nombreErreurs: number;
        anomalies: IThemeAnomalie[];
        getThemeTitle(t: IThemeAnomalie): string;
        plierDeplier(): void;
        estSyntheseComplete: boolean;
        btnVoirToutVisible: boolean;
        alertes: IThemeAnomalie[];
        nombreAlertes: number;
        private hasControleResult;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor(controleSyntheseService: IControleSyntheseService);
        goToPage(pageid: string): void;
        rafraichir(): void;
    }
}

declare namespace ICCreditComponents.Controle {
}

declare module ICCreditComponents.Erreur.Factory {
    function extendExceptionHandler($injector: ng.auto.IInjectorService): (exception: Error, cause: string) => void;
}

declare module ICCreditComponents.Erreur.Modeles {
    /**
     * This const is used to be able to identify if the exception thrown intentionaly or if this is a JS exception or other
     */
    const MYWAY_REST_ERROR: string;
    interface ICreditInstructionError extends Error {
        exception: MyWay.Services.Erreur;
        fatal: boolean;
    }
    class CreditInstructionError implements ICreditInstructionError {
        exception: MyWay.Services.Erreur;
        fatal: boolean;
        errorDescription: string;
        name: string;
        message: string;
        constructor(exception: MyWay.Services.Erreur, fatal: boolean, errorDescription?: string);
    }
}

declare namespace ICCreditComponents.Erreur {
    interface IModalErrorData<T> {
        description: string;
        error: T;
    }
    class PopinErrorController<T> {
        private $modalInstance;
        data: IModalErrorData<T>;
        static parametres: ICCommon.Controleur.IControleurParametre;
        /**
         * Transform une Error JS en objet car celui-ci ne peux pas être JSON.stringify
         * @param obj
         */
        getdetails(obj: any): Object;
        /** détails de l'erreur */
        details: Object;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: IModalErrorData<T>);
        close(): void;
    }
}

declare namespace ICCreditComponents.Erreur {
    interface IPopinErrorService {
        /**
         * Open a popup to display the message
         * @param libelle
         * @param error
         */
        open<T>(libelle: string, error: T): ng.IPromise<void>;
    }
    class PopinErrorService implements IPopinErrorService {
        private popinService;
        static $inject: string[];
        constructor(popinService: ICCreditComponents.Services.IPopinService);
        open<T>(libelle: string, error: T): ng.IPromise<void>;
    }
}

declare module ICCreditComponents {
    class ErrorHandler {
        /**
         * Throw fatal error wich means a popin will display the error
         * and a redirection occurred to an error page.
         * @param error
         */
        static throwFatal: (error: MyWay.Services.Erreur, description?: string) => any;
        /**
         * Throw recoverable Error wich means a popin will display the error
         * but the user will stay on the current page and can continue to work
         * @param error
         */
        static throwRecoverable: (error: MyWay.Services.Erreur, description?: string) => any;
    }
}

declare module ICCreditComponents.Erreur.Services {
    /**
     * Do never inject this service
     * To display an error you should throw an exception like this
     *  throw new Modele.MyWayError(error, true);
     */
    class ExceptionService {
        private $location;
        private popinErrorService;
        static $inject: string[];
        constructor($location: ng.ILocationService, popinErrorService: ICCreditComponents.Erreur.IPopinErrorService);
        /**
         * Show exception in a popin and redirect to error page if fatal
         * @param exception
         */
        displayException(exception: any, fatal?: boolean): void;
    }
}

declare namespace ICCreditComponents.Modales {
    interface IModaleInterroBdfRecapControleurData {
        identifiantDossier: string;
        listePersonnesFichees: ICBusiness.Models.Emprunteur.IPersonnePhysique[];
        sousEtatDossier: ICBusiness.Enum.SousEtatDossier;
        typeRecap: ICBusiness.Enum.TypeRecapitulatif;
    }
    interface IModaleInterroBdfRecapControleurResult {
        typeRecapitulatif: ICBusiness.Enum.TypeRecapitulatif;
        typeForcage: ICBusiness.Enum.TypeForcage;
    }
    class ModaleInterroBdfRecapControleur {
        private $modalInstance;
        private $q;
        private serviceAgent;
        private dossierService;
        private habilitationService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        listePersonnesFichees: ICBusiness.Models.Emprunteur.IPersonnePhysique[];
        bdfIndisponible: boolean;
        estHabilite: boolean;
        estFiche: boolean;
        libelleBoutonPrincipal: string;
        libelleEtapeDossier: string;
        loading: boolean;
        result: IModaleInterroBdfRecapControleurResult;
        texteRecapitulatif: string;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, dossierService: ICBusiness.Services.Dossier.IDossierService, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService, data: IModaleInterroBdfRecapControleurData);
        private getTexteRecapitulatifSiHabilite();
        private getTexteRecapitulatifSiNonHabilite();
        getPersonneFicheeText(personneFichee: ICBusiness.Models.Emprunteur.IPersonnePhysique): string;
        valider(): void;
        close(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    interface IPaginationParams {
        currentPage: number;
        itemPerPage: number;
    }
    interface IModalAnomalieControleurData {
        /**
         * Titre de la 'popin'
         */
        titre: string;
        /**
         * Ensemble des anomalies bloquantes, non bloquantes et alertes
         */
        listeAnomaliesAlertes: ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * Libellé du bouton de poursuite du traitement 'Poursuivre', 'Forcer'
         */
        libelleBtnValidation: string;
        /**
         * Booléen pour l'affichage du bouton de poursuite du traitement
         */
        afficherBtnValidation: boolean;
        /**
         * Eventuel message à afficher
         */
        texteMessage?: string;
        /**
         * Classe html pour le formatage du message
         */
        cssClassTexteMessage?: string;
    }
    class ModaleAnomalieControleur {
        private $q;
        private $modalInstance;
        private $scope;
        /**
         * Liste des alertes
         */
        listeAlertes: ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * Booléen pour l'existence d'alertes
         */
        existeAlertes: boolean;
        /**
         * Données de pagination des alertes
         */
        tableauAlertes: IPaginationParams;
        /**
         * Liste des anomalies non bloquantes
         */
        listeAnomaliesNonBloquantes: ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * Booléen pour l'existence d'anomalies non bloquantes
         */
        existeAnomaliesNonBloquantes: boolean;
        /**
         * Données de pagination des anomalies non bloquantes
         */
        tableauAnomaliesNonBloquantes: IPaginationParams;
        /**
         * Liste des anomalies bloquantes
         */
        listeAnomaliesBloquantes: ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * Booléen pour l'existence d'anomalies bloquantes
         */
        existeAnomaliesBloquantes: boolean;
        /**
         * Données de pagination des anomalies bloquantes
         */
        tableauAnomaliesBloquantes: IPaginationParams;
        /**
         * Libellé de la section des alertes
         */
        libelleSectionAlertes: string;
        /**
         * Libellé de la section des anomalies non bloquantes
         */
        libelleSectionAnomaliesNonBloquantes: string;
        /**
         * Libellé de la section des anomalies bloquantes
         */
        libelleSectionAnomaliesBloquantes: string;
        /**
         * Libellé du bouton d'action
         */
        libelleBtnValidation: string;
        /**
         * Libellé du bouton fermer/annuler
         */
        libelleBtnFermerAnnuler: string;
        /**
         * Visibilité du bouton de validation
         */
        visibleBtnValidation: boolean;
        /**
         * Texte en haut de la popin
         */
        titrePopin: string;
        /**
         * Eventuel message à afficher
         */
        texteMessage: string;
        /**
         * Classe html pour le formatage du message
         */
        cssClassTexteMessage: string;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($q: ng.IQService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, data: ICCreditComponents.Modales.IModalAnomalieControleurData);
        /**
         * Initialisation de l'éventuel message à afficher
         * @param data
         */
        private initMessage(data);
        /**
         * Permet de savoir si un message est à afficher
         */
        existeMessage(): boolean;
        /**
         * Méthode pour le traitement de la liste des alertes/anomalies en entreé de la popin
         * (i.e. ventilation des alertes/anomalies selon leurs types.)
         * @param liste
         */
        traitementListeAlertesAnomalies(liste: ICBusiness.Models.Common.IAnomalieLecture[]): ng.IPromise<void>;
        /**
         * Méthode pour initialiser le libellé du bouton fermer/annuler
         * @param validation
         */
        initLibelleBtnFermerAnnuler(validation: boolean): void;
        /**
         * Méthode pour la création des libellées des sections
         * NB: la méthode traitementListeAlertesAnomalies doit être exécutée avant.
         */
        creationLibellesSection(): void;
        /**
         * Méthode pour créer les données de pagination
         */
        creationPagination(): void;
        /**
         * Méthode pour initialiser le bouton de validation
         */
        initialisationBtnValidation(data: ICCreditComponents.Modales.IModalAnomalieControleurData): void;
        /**
         * Méthode pour la fermeture en annulation de la 'popin'
         */
        annuler(): void;
        /**
         * Méthode pour poursuivre le traitement appelant la 'popin'
         * Exemple: Bouton 'Forcer' ou 'Poursuivre' de la prise de décision
         */
        valider(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    class ModaleDateInstructionControleur {
        private $modalInstance;
        private $scope;
        private popinService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        dateInstruction: string;
        dateInstructionRules: ICBusiness.Rules.IValidationRule[];
        isValid: boolean;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, popinService: Services.IPopinService);
        /**
         * Permet de valider la popin
         */
        valider(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    /**
     * Interface for modal window data
     * Note: the compliance mode is deduced from the typology code of the notice
     */
    interface IModalAvisControleurData {
        avis: ICBusiness.Models.Decision.IAvis;
        conformite: boolean;
        title: string;
        labelValidate: string;
    }
    /**
     * Class for popin controller inputting a notice for decision or compliance
     * Note: In addition to the wording, the Compliance Notice has a radio button for Yes / No compliance management.
     */
    class ModaleAvisControleur {
        private $modalInstance;
        private $scope;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        modaleOutput: IModalAvisControleurData;
        /**
         * Boolean for compliance
         */
        isCompliance: boolean;
        /**
         * Title
         */
        title: string;
        /**
         * Label of the validation button
         */
        labelValidate: string;
        /**
         *
         * @param $modalInstance
         * @param $scope
         * @param data
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, data: ICCreditComponents.Modales.IModalAvisControleurData);
        validationImpossible(): boolean;
        isValid: boolean;
        /**
         * To validate the popin
         */
        valider(): void;
        /**
         * To cancel the notice entry
         */
        annuler(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    interface IModaleDetailsEligibiliteDatas {
        resultatsEligibilite: ICBusiness.Models.Dossier.IResultatEligibilite[];
    }
    class ModaleDetailsEligibiliteControleur {
        private $modalInstance;
        private $scope;
        modalData: ICCreditComponents.Modales.IModalAnomalieControleurData;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, modalData: ICCreditComponents.Modales.IModalAnomalieControleurData);
        closeModal(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    import BusinessModel = ICBusiness.Models;
    /**
     * Données pour l'ouvertue de la popin de recherche des clients bancaires
     */
    interface IDataRechercheClientBancaireEntree {
        rattachementEntiteTitulaire: boolean;
        listeIdsPersonneSI: Array<string>;
        codeEtablissement: string;
    }
    interface IDataRechercheClientBancaireSortie {
        identifiantEntiteTitulaire: string;
    }
    class ModaleRechercheClientBancaireControleur implements MyWay.UI.ISelectionChangeHandler {
        private $q;
        private $filter;
        private $modalInstance;
        private modaleData;
        private personneService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        chargementEnCours: boolean;
        uniquementPersonne: boolean;
        tableauResultats: MyWay.UI.ImwTableOptions;
        private _listeEntite;
        listeEntite: BusinessModel.EntiteTitulaire.IInformationEntiteTitulaire[];
        listeEntiteSelected: BusinessModel.EntiteTitulaire.IInformationEntiteTitulaire[];
        phraseDescription: string;
        /**
         * Récupération du libellé du bouton valider
         */
        libelleBoutonValider: string;
        rattachementEntiteTitulaire: boolean;
        enableBtnAjouterPersonne: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, modaleData: ICCreditComponents.Modales.IDataRechercheClientBancaireEntree, personneService: ICBusiness.Services.Emprunteur.PersonneService);
        /**
         * Chargement des clients bancaires
         */
        rafraichirClientBancaires(): void;
        /**
         * Récupération des entités titulaires complètes pour une liste de personne
         * @param idsPersonneSI
         */
        private getAllEntitesTitulaires(listeIdsPersonneSI);
        /**
         * Si seule la personne est retenue, déselection des clients bancaires
         */
        majRetenirPersonne(): void;
        /**
         * Lors de la selection d'une personne, on force la désactivation du choix sans client bancaire
         * @param selectedObject
         */
        onSelectionChange(selectedObject: BusinessModel.EntiteTitulaire.IInformationEntiteTitulaire): void;
        /**
         * Récupération des entités titulaires pour une personne
         * @param idsPersonneSI
         */
        private getEntitesTitulairesByPersonne(idsPersonneSI);
        /**
         * Récupération des informations complémentaires des entités titulaires d'une personne
         * @param idsPersonneSI
         */
        private getInfoEntiteTitulaire(listeEntiteTitulaire);
        /**
         * Initialisation du tableau de résultats
         */
        private initialiserTableau();
        /**
         * Permet de fermer la popin
         */
        close(): void;
        /**
         * Validation de la popin
         */
        valider(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    interface IModalTransfertBoControleurData {
        /**
         * Titre de la popin
         */
        titre?: string;
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Identifiant du dossier en instruction
         */
        idDossier: string;
        /**
         * Date de traitement
         */
        dateTraitement: string;
        /**
         * Affichage/masquage du bouton annuler
         */
        afficherBtnAnnuler: boolean;
    }
    class ModaleTransfertBoControleur {
        private $modalInstance;
        private transfertBoService;
        private transfertService;
        private edsService;
        private mwNotificationService;
        codeEtab: string;
        idDossier: string;
        dateTraitement: string;
        afficherBtnAnnuler: boolean;
        titre: string;
        typesBo: ICBusiness.Models.TypeEds.ITypeEds[];
        codeTypeAgent: string;
        numEtapeActive: number;
        showErreurReference: boolean;
        typeBoSelectionne: ICBusiness.Models.TypeEds.ITypeEds;
        agentSelectionne: MyWay.Model.Agent;
        referenceExterne: string;
        donneesEds: ICBusiness.Models.Eds.IDonneesCommunesEDS;
        listeAnomalies: ICBusiness.Models.Common.IAnomalieLecture[];
        btnValiderActif: boolean;
        isChargementEnCours: boolean;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: ICCreditComponents.Modales.IModalTransfertBoControleurData, transfertBoService: ICBusiness.Services.TransfertBo.ITransfertBoService, transfertService: ICBusiness.Services.Transfert.ITransfertService, edsService: ICBusiness.Eds.Services.IEdsService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Méthode pour initialiser les données de la modale
         * @param data
         */
        private initialisationDonnees(data);
        /**
         * Méthode pour réinitiliser l'affichage du message d'erreur
         */
        clearMessage(): void;
        /**
         * Méthode pour fermer la fenêtre
         */
        annuler(): void;
        /**
         * Méthode pour fermer la fenêtre par la croix en haut à droite
         */
        fermer(): void;
        /**
         * Validation du transfert au bak-office
         */
        validerTransfertBackOffice(): ng.IPromise<any>;
        /**
         * Méthode de traitement d'éventuelles anomalies
         * @param liste liste des anomalies
         * @returns true si pas d'anomalies
         */
        private traiterAnomalies(anomalies);
        /**
         * Récupération de la valeur element structure
         * @param rangNiveauStructure rang demandé
         */
        private valeurElementStructure(rangNiveauStructure);
        /**
         * Méthode pour savoir si le bouton 'Rechercher' est actif
         */
        btnRechercherInactif(): boolean;
        /**
         * Méthode pour charger la liste des types de back-office
         */
        private lireTypesBackOffice();
        /**
         * Visibilité de l'étape 1
         */
        etape1Visible(): boolean;
        /**
         * Méthode pour afficher/masquer la zone de saisie de l'agent
         */
        showAgent(): boolean;
        /**
         * Méthode pour afficher/masquer la zone de saisie du code référence et déterminer le type de back-office sélectionné (i.e. agent ou autre)
         */
        showReference(): boolean;
        /**
         * Action de retour aux critères de recherche
         */
        modifierRecherche(): void;
        /**
         * Récupération de la référence EDS de l'agent sélectionné sur  7 caractères
         */
        private referenceEds();
        /**
         * Méthode pour l'action de recherche
         */
        validerRecherche(): void;
        /**
         * Méthode pour rechercher la validité de la référence externe saisie
         */
        private traitementReference();
        /**
         * Traitement en retour de la recherche des données de la référence externe saisie
         * @param donnees
         */
        private traitementRecherche(donnees);
        /**
         * Méthode pour réinitialiser l'IHM lors du changement du type de back-office sélectionné
         */
        resetRecherche(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    interface IModalTransfertConfControleurData {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Identifiant du dossier en instruction
         */
        idDossier: string;
    }
    class ModaleTransfertConfControleur {
        private $modalInstance;
        private transfertService;
        private mwNotificationService;
        codeEtab: string;
        idDossier: string;
        titre: string;
        agentSelectionne: MyWay.Model.Agent;
        listeAnomalies: ICBusiness.Models.Common.IAnomalieLecture[];
        isChargementEnCours: boolean;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: ICCreditComponents.Modales.IModalTransfertConfControleurData, transfertService: ICBusiness.Services.Transfert.ITransfertService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Méthode pour initialiser les données de la modale
         * @param data
         */
        private initialisationDonnees(data);
        /**
         * Activation/désactivation du bouton de transfert
         */
        transfertImpossible(): boolean;
        /**
         * Méthode pour fermer la fenêtre
         */
        annuler(): void;
        /**
         * Validation du transfert au bak-office
         */
        validerTransfert(): ng.IPromise<any>;
        /**
         * Méthode de traitement d'éventuelles anomalies
         * @param liste liste des anomalies
         * @returns true si pas d'anomalies
         */
        private traiterAnomalies(anomalies);
        /**
         * Récupération de la référence EDS de l'agent sélectionné sur  7 caractères
         */
        private referenceEds();
    }
}

declare namespace ICCreditComponents.Modales {
    interface IModalTransfertDecisionControleurData {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Identifiant du dossier en instruction
         */
        idDossier: string;
        /**
         * Date de traitement
         */
        dateTraitement: string;
    }
    /**
     * Classe pour le transfert pour avis ou décision.
     */
    class ModaleTransfertDecisionControleur {
        private $modalInstance;
        private $scope;
        private $q;
        private mwNotificationService;
        private transfertDecisionService;
        private decisionService;
        private transfertService;
        typesEds: ICBusiness.Models.TypeEds.ITypeEds[];
        codeEtablissement: string;
        idDossier: string;
        dateTraitement: string;
        agentSelectionne: MyWay.Model.Agent;
        avis: ICBusiness.Models.Decision.IAvis;
        infosDecision: ICBusiness.Models.Decision.IDecision;
        numEtapeActive: number;
        showNiveauDelegationAvis: boolean;
        referenceStructure: string;
        codeTypeAgent: string;
        typeEdsSelectionne: ICBusiness.Models.TypeEds.ITypeEds;
        showErreurReference: boolean;
        listeAnomalies: ICBusiness.Models.Common.IAnomalieLecture[];
        choixDelegataire: string;
        calculDelegation: ICBusiness.Models.Decision.IResultatCalculDelegation;
        isChargementEnCours: boolean;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        /**
         * Constructeur
         *
         * @param $modalInstance
         * @param $scope
         * @param data
         */
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, $q: ng.IQService, data: ICCreditComponents.Modales.IModalTransfertDecisionControleurData, mwNotificationService: MyWay.UI.IMwNotificationService, transfertDecisionService: ICBusiness.Services.TransfertDecision.ITransfertDecisionService, decisionService: ICBusiness.Services.Decision.IDecisionService, transfertService: ICBusiness.Services.Transfert.ITransfertService);
        /**
         * Affichage du choix de la sélection
         */
        afficherChoixDelegataire(): void;
        /**
         * Méthode pour afficher/masquer la zone de saisie de l'agent
         */
        showAgent(): boolean;
        /**
         * Méthode pour afficher/masquer la zone de saisie du code référence
         */
        showReference(): boolean;
        /**
         * Méthode pour réinitiliser l'affichage du message d'erreur
         */
        clearMessage(): void;
        /**
         * Méthode pour alimenter la liste des type de délégataires/EDS
         */
        private lireTypeDelegataire();
        /**
         * Méthode pour initialiser les données de la popin
         * @param data données en entrée de la popin
         */
        private initialisationDonnees(data);
        /**
         * Méthode pour connaître le 'niveau' de délégation de l'agent sélectionné
         */
        /**
         * Méthode pour savoir si le bouton de validation du transfert est activé
         */
        validationImpossible(): boolean;
        /**
         * Visibilité de l'étape 1
         */
        etape1Visible(): boolean;
        /**
         * Sélection de l'agent ou de la structure/référence
         */
        validerSelection(): void;
        /**
         * Méthode pour récupérer la référence EDS d'un agent
         */
        private referenceAgent();
        /**
         * Méthode pour l'action de sélection d'un agent
         */
        selectionnerAgent(): void;
        /**
         * Méthode pour afficher le message de transfert pour avis
         */
        affichageTransfertPourAvis(): boolean;
        /**
         * Méthode pour l'action de validation d'un code externe EDS saisi
         */
        selectionnerReference(): void;
        /**
         * Annulation de transfert
         */
        annuler(): void;
        /**
         * Récupération de la valeur element structure
         * @param rangNiveauStructure rang demandé
         */
        private valeurElementStructure(rangNiveauStructure);
        /**
         * Validation du transfert
         */
        valider(): void;
        /**
         * Méthode pour activer/désactiver le bouton de sélection d'un agent ou d'un EDS
         */
        modeSelectInactif(): boolean;
        /**
         * Méthode de traitement d'éventuelles anomalies bloquantes
         * @param liste liste des anomalies
         * @returns true si pas d'anomalies bloquantes
         */
        private traiterAnomaliesBloquantes(anomalies);
        /**
         * Méthode de traitement d'éventuelles anomalies
         * @param liste liste des anomalies
         * @returns true si pas d'anomalies
         */
        private traiterAnomalies(anomalies);
    }
}

declare namespace ICCreditComponents.Modales {
    class ModalePreferencesControleur {
        private $modalInstance;
        private preferencesService;
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        calculPopoverContent: string;
        restitutionChargesPopoverContent: string;
        loading: boolean;
        listeCalcul: ICBusiness.Models.Common.ICodeLabel<"optimise" | "manuel">[];
        listeRestitution: ICBusiness.Models.Common.ICodeLabel<"graphique" | "tableau">[];
        preferences: ICBusiness.Models.Preferences.IPreferenceUtilisateur;
        private _preferencesInitiales;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, preferencesService: ICBusiness.Services.Preferences.IPreferencesService, $timeout: ng.ITimeoutService);
        private loadPreferences();
        annuler(): void;
        valider(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    interface IModalAnnulationSignElecControleurData {
        idDossier: string;
    }
    class ModalAnnulationSignElecControleur {
        private $modalInstance;
        private data;
        private signatureElectroniqueService;
        private idDossier;
        listeMotifs: ICBusiness.Models.Common.ICodeLabel<number>[];
        motifChoisi: ICBusiness.Models.Common.ICodeLabel<number>;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: ICCreditComponents.Modales.IModalAnnulationSignElecControleurData, signatureElectroniqueService: ICBusiness.Services.SignatureElectronique.ISignatureElectroniqueService);
        static parametres: ICCommon.Controleur.IControleurParametre;
        valider(): ng.IPromise<void>;
        annuler(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    interface IModaleSaccefReponseData {
        retourEnvoiSaccef: string[];
    }
    /**
     * Class for popin controller inputting a notice for decision or compliance
     * Note: In addition to the wording, the Compliance Notice has a radio button for Yes / No compliance management.
     */
    class ModaleReponseSaccefControleur {
        private $modalInstance;
        private $scope;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        modaleInput: IModaleSaccefReponseData;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, data: ICCreditComponents.Modales.IModaleSaccefReponseData);
        /**
         * To cancel the notice entry
         */
        close(): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    interface IAnchorService {
        goToSection(idSection: string, onScrollToSectionDone?: () => void, headerIds?: string[]): void;
        tryToGoToSection(idSection: string, onScrollToSectionDone?: () => void, tryDuringMs?: number): void;
    }
    interface IExtendedHtmlElement extends HTMLElement {
        onElementHeightChangeTimer: number;
    }
    class AnchorService implements IAnchorService {
        private defaultTryDelay;
        private idSection;
        private timeoutDelay;
        goToSection(idSection: string, onScrollToSectionDone?: () => void, headerIds?: string[]): void;
        tryToGoToSection(idSection: string, onScrollToSectionDone?: () => void, tryDuringMs?: number): void;
        /**
         * Detection du changment de hauteur d'un element
         * @param elm
         * @param callback
         */
        private onElementHeightChange(elm, callback, idSection);
    }
}

declare namespace ICCreditComponents.Navigation {
    /** @deprecated */
    interface INavigationService extends INavigationCreditService {
        onNavigationStarts?: <T>(trigger: () => ng.IPromise<T>) => void;
        cancelNavigation?(): void;
    }
    interface INavigationCreditService {
        goToSynthese(): void;
        goToClient(): void;
        goToClientSectionIntervenant(): void;
        goToClientSectionRevenusCharge(): void;
        goToClientSectionSurfaceFinanciere(): void;
        goToClientSectionDroitsEpargneLogement(): void;
        goToProjet(): void;
        goToProjetSectionDescription(): void;
        goToProjetSectionReamenagement?(): void;
        goToProjetSectionObjetFinance?(): void;
        goToFinancement(): void;
        goToFinancementSectionProjet(): void;
        goToFinancementSectionDetailCredit(): void;
        goToFinancementSectionGarantie(): void;
        goToFinancementSectionAssurance(): void;
        goToGestionAdmin(): void;
        goToGestionAdminSectionAssurances(): void;
        goToGestionAdminSectionGaranties(): void;
        goToGestionAdminSectionModalites(): void;
        goToGestionAdminSectionRedacteurActe(): void;
        goToGestionAdminSectionSuivisPlanifies(): void;
        goToSignataires(): void;
        goToDecisionPreteur(): void;
        goToDecisionPreteurSectionAvis(): void;
        goToDecisionPreteurSectionIndicateursOctroi(): void;
        goToDecisionPreteurSectionDecision(): void;
        goToEditionOffre(): void;
        goToEditionOffreSectionCaracteristiques(): void;
        goToEditionOffreSectionClausesPersonnalisees(): void;
        goToEditionOffreSectionListeMandats(): void;
        goToRemiseOffre(): void;
        goToSignatureOffre(): void;
        goToMajAdmin(): void;
        goToMajAdminSectionAssurances(): void;
        goToMajAdminSectionGaranties(): void;
        goToMajAdminSectionSignatureElectronique(): void;
        goToMajAdminSectionRedacteurActe(): void;
        goToPiecesEtControles(): void;
        goToPiecesEtControlesSectionClient(): void;
        goToPiecesEtControlesSectionAgence(): void;
        goToPiecesEtControlesSectionControles(): void;
        goToHistorique(): void;
        goToBlocNotes(): void;
        goToEmissionDocuments(): void;
        goToEmissionDocumentsSectionDocumentsClients(): void;
        goToEmissionDocumentsSectionFicheSuiveuse(): void;
        fermerApplication(close: () => ng.IPromise<void>): void;
        fermerApplicationEnErreur(): void;
        transfererDansNeo(): void;
        goToChoixEditionDemandeCredit(): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    interface INavigationCreditCommonService {
        navigateToPageCode(pageCode: ICBusiness.Enum.CodePageEnum, navigationService: INavigationCreditService): void;
    }
    class NavigationCreditCommonService {
        navigateToPageCode(pageCode: ICBusiness.Enum.CodePageEnum, navigationService: INavigationCreditService): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemCreditService {
        private $timeout;
        private labelService;
        private etatDossierService;
        private controleSyntheseService;
        private paramApplicatifRemanentService;
        /** Paramètrage du Totem Crédit Conso */
        totemSettings: ITotemSettings;
        /** Context applicatif sur lequel se base le totem pour extraire les règles de gestion d'affichage du totem */
        private context;
        /** Service fournissant les méthodes de navigation */
        private navigationService;
        private totemChapitreProposition;
        private totemChapitreActionsComplementaires;
        private totemChapitreDecisionEdition;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, labelService: Services.IlabelService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, controleSyntheseService: Controle.IControleSyntheseService, paramApplicatifRemanentService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifRemanentService);
        /**
         * Mise en place des dépendances
         * @param navigationService
         * @param context
         */
        setUpDependencies(navigationService: INavigationCreditService, context: ICBusiness.Models.Common.IContext): void;
        majTotemPieceControle(listePiecesClient: Modeles.IPiecoModele[], listePiecesAgence: Modeles.IPiecoModele[], listeControle: Modeles.IPiecoModele[]): void;
        private majIcone(listePiecoModele, pagePieceControle, idSection);
        private scrollTotemOnSroll();
        /** Controle la position des sections de la page pour activer les totems correspondants.
         * Ne fonctionne pas sur les sections qui ne peuvent atteindre le haut de la page
         */
        private selectTotemSectionOnScroll;
        setActivePage(pageId: string): void;
        setActiveSection(sectionId: string): void;
        /**
         * Retrouve une totem page par Id
         * @param pageId
         */
        private findPage(pageId);
        /**
         * Retrouve la section d'une pagez par section id
         * @param page
         * @param sectionId
         */
        private findSection(page, sectionId);
        /** Construction du Totem Crédit instruction conso / pro */
        private buildTotem();
        private getNewPageSynthese();
        private getNewPageSignataires();
        private getNewPageRemiseOffre();
        private getNewPageSignatureOffre();
    }
}

declare namespace ICCreditComponents.Directives.RedacteurActe {
    interface IBaseRedacteurActeFormSettings {
        labelIdentifiantPersonne: Forms.ISettings;
        inputMaitreNom: Forms.IInputSettings;
        inputPrenom: Forms.IInputSettings;
        inputIntitule: Forms.IInputSettings;
        inputAdresse: Forms.IAddressSettings;
        inputTelephone: Forms.IInputSettings;
    }
    interface IRedacteurActeFormSettings extends IBaseRedacteurActeFormSettings {
        buttonRechercher: Forms.ISettings;
        buttonSupprimer: Forms.ISettings;
        buttonModifier: Forms.ISettings;
        inputDatePrevisionnelleSignatureNotaire: Forms.IInputSettings;
    }
    interface IModifierRedacteurActeFormSettings extends IBaseRedacteurActeFormSettings {
    }
    interface IRechercherRedacteurActeFormSettings {
        radioButtonTypePersonne: Forms.IInputSettings;
        inputNom: Forms.IInputSettings;
        inputNumeroSiren: Forms.IInputSettings;
        inputPrenom: Forms.IInputSettings;
        inputDateNaissance: Forms.IInputSettings;
        inputNumeroPersonne: Forms.IInputSettings;
        boutonRechercher: Forms.ISettings;
        boutonSelectionner: Forms.ISettings;
    }
}

declare namespace ICCreditComponents.Directives.RedacteurActe {
    interface IRedacteurActeFormSettingsService {
        getAdresseRedacteurActeFormSettings(viewModel: IRedacteurActeViewModel, previousSettings?: Forms.IAddressSettings, enModification?: boolean): Forms.IAddressSettings;
        getModifierRedacteurActeFormSettings(viewModel: IRedacteurActeViewModel, modeModification?: boolean): IModifierRedacteurActeFormSettings;
        getRechercherRedacteurActeFormSettings(viewModel: IRechercheRedacteurActeViewModel): IRechercherRedacteurActeFormSettings;
        getRedacteurActeFormSettings(viewModel: IRedacteurActeViewModel): IRedacteurActeFormSettings;
    }
    class RedacteurActeFormSettingsService implements IRedacteurActeFormSettingsService {
        getAdresseRedacteurActeFormSettings(viewModel: IRedacteurActeViewModel, previousSettings?: Forms.IAddressSettings): Forms.IAddressSettings;
        /**
         * Form Setting pour le formulaire dans la popin de modification
         * @param viewModel
         * @param modeModification
         */
        getModifierRedacteurActeFormSettings(viewModel: IRedacteurActeViewModel, modeModification?: boolean): IModifierRedacteurActeFormSettings;
        getRechercherRedacteurActeFormSettings(viewModel: IRechercheRedacteurActeViewModel): IRechercherRedacteurActeFormSettings;
        /**
         * Form settings pour le formulaire dans la page
         * @param viewModel
         */
        getRedacteurActeFormSettings(viewModel: IRedacteurActeViewModel): IRedacteurActeFormSettings;
        private isReadOnly(context);
    }
}

declare namespace ICCreditComponents.Directives.RedacteurActe.Modales {
    import BusinessModel = ICBusiness.Models;
    interface IModaleRechercherControleurData {
        context: BusinessModel.Common.IContext;
    }
    class ModaleRechercherControleur implements MyWay.UI.ISelectionChangeHandler {
        private $modalInstance;
        private personneService;
        private redacteurActeService;
        private redacteurActeFormSettingsService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        context: BusinessModel.Common.IContext;
        headerText: string;
        loading: boolean;
        tableauPersonnes: MyWay.UI.ImwTableOptions;
        typesPersonne: BusinessModel.Common.ICodeLabel<number>[];
        viewModel: IRechercheRedacteurActeViewModel;
        /** Form settings */
        formSettings: IRechercherRedacteurActeFormSettings;
        nomLabel: string;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, personneService: ICBusiness.Services.Emprunteur.IPersonneService, redacteurActeService: ICBusiness.Services.RedacteurActe.IRedacteurActeService, redacteurActeFormSettingsService: IRedacteurActeFormSettingsService, data: IModaleRechercherControleurData);
        private buildTableauPersonnes(typePersonne);
        private getColumnsTableauPersonnes(typePersonne);
        getNomLabel(): string;
        /**
         * Permet de fermer la popin tout en annulant la saisie
         */
        close(): void;
        /**
         * Au changement de type de personne
         */
        onChangeTypePersonne(): void;
        /**
         * Au changement de sélection dans le tableau
         * @param selection
         */
        onSelectionChange(selection: BusinessModel.Emprunteur.IDetailPersonne): void;
        /**
         * Permet de rechercher la liste de personnes correspondant aux critères saisis
         */
        research(): void;
        /**
         * Permet de soumettre la popin tout en validant la recherche effectuée
         */
        select(): void;
    }
}

declare namespace ICCreditComponents.Directives.RedacteurActe.Modales {
    import BusinessModel = ICBusiness.Models;
    interface IModaleModifierControleurData {
        context: BusinessModel.Common.IContext;
        redacteurActe: ICBusiness.Models.RedacteurActe.IRedacteurActe;
    }
    class ModaleModifierControleur {
        private $modalInstance;
        private $scope;
        private redacteurActeService;
        private redacteurActeFormSettingsService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        loading: boolean;
        viewModel: IRedacteurActeViewModel;
        /** Form settings */
        formSettings: IModifierRedacteurActeFormSettings;
        form: ng.IFormController;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, redacteurActeService: ICBusiness.Services.RedacteurActe.IRedacteurActeService, redacteurActeFormSettingsService: IRedacteurActeFormSettingsService, data: IModaleModifierControleurData);
        /** sauvegarde de la saisie utilisateur */
        private save();
        /** Validation du formulaire */
        private validate();
        /**
         * Permet de fermer la popin tout en annulant la saisie
         */
        close(): void;
        /**
         * Permet de soumettre la popin tout en validant la saisie effectuée
         */
        submit(): void;
    }
}

declare namespace ICCreditComponents.Forms {
    interface ISettings {
        hidden?: () => boolean;
        readonly?: () => boolean;
    }
    interface IInputSettings extends ISettings {
        consultation: () => boolean;
        disabled?: () => boolean;
        required?: () => boolean;
    }
}

declare namespace ICCreditComponents.Forms {
    let inputDirectiveScope: IInputDirectiveScope;
    abstract class InputControleur {
        private $timeout;
        blur: <T>() => T;
        change: <T>() => T;
        consulting: boolean;
        fieldClass: string;
        form: ng.IFormController;
        inputSettings: IInputSettings;
        label: string;
        labelClass: string;
        protected model: any;
        name: string;
        placeholder: string;
        readonly: boolean;
        required: boolean;
        rules: ICBusiness.Rules.IValidationRule[];
        suffix: string;
        suffixClass: string;
        _onEnter: <T>() => T;
        errorLabel: string;
        fieldClassExtended: string;
        /** return true if consulting mode is set and model is null or undefined */
        hideField: boolean;
        private inputSettingsHidden(inputSettings);
        isDisabled: boolean;
        /** return true if consulting mode is set or readonly is set */
        isReadOnly: boolean;
        isRequired: boolean;
        protected isSettingsConsultation: boolean;
        protected isSettingsReadonly: boolean;
        protected isSettingsRequired: boolean;
        labelClassExtended: string;
        /** role used for accessibility aria attribute */
        role: string;
        constructor($timeout: ng.ITimeoutService);
        isValid(): boolean;
        onKeyDown($event: KeyboardEvent): void;
        onChange(): void;
        onBlur(): void;
    }
}

declare namespace ICCreditComponents.Forms {
    interface IInputDirectiveScope {
        blur: string;
        change: string;
        consulting: string;
        fieldClass: string;
        form: string;
        inputSettings: string;
        label: string;
        labelClass: string;
        model: any;
        name: string;
        placeholder: string;
        readonly: string;
        required: string;
        rules: string;
        suffix: string;
        suffixClass: string;
        _onEnter: string;
    }
}

declare namespace ICCreditComponents.Forms {
    type IAddressSettings = myway.comAdresseDqe.IAdresseSettings;
    interface IAddress extends ICBusiness.Models.Common.IAddress {
        zipCode: string;
        city: string;
        codeInseeLocalite: string;
        countryCode: string;
        hasChanged: boolean;
        isFrance: boolean;
    }
}

declare namespace ICCreditComponents.Forms {
    import MyWayDqeAdresse = myway.comAdresseDqe;
    class InputAddressControleur {
        private $scope;
        private adresseService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        private _address;
        private _onLoad;
        address: IAddress;
        name: string;
        settings: IAddressSettings;
        static $inject: string[];
        constructor($scope: ng.IScope, adresseService: MyWayDqeAdresse.AdresseService);
        private pullAddress();
        private pushAddress();
        private watchAddressChange();
        onChange(): void;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputCheckBoxControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        model: number;
        constructor($timeout: ng.ITimeoutService);
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputDateControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        format: string;
        model: string;
        maxDate: Date;
        minDate: Date;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputIntegerPickerControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        max: number;
        min: number;
        model: number;
        step: number;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputListBoxControleur<T extends string | number> extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        isLoading: boolean;
        items: ICBusiness.Models.Common.ICodeLabel<T>[];
        model: ICBusiness.Models.Common.ICodeLabel<T>;
        onOpen: <U>(...args: any[]) => ng.IPromise<U>;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        listBoxPlaceholder: string;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputNumberControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        decimals: number;
        devise: string;
        model: number;
        customErrorLabel: string;
        maxLength: string;
        addonSuffix: string;
        tooltipPlacement: string;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        getMaxLength(): string;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputNumberTextControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        model: string;
        customErrorLabel: string;
        maxLength: string;
        back: number;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        getMaxLength(): string;
        numberOnly($event: KeyboardEvent): boolean;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputStringControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        model: string;
        mask: string;
        maxLength: number;
        noFormGroup: boolean;
        displayNumberCharacters: boolean;
        private showMore;
        constructor($timeout: ng.ITimeoutService);
        moreClass: string;
        /**
         * Renvoie le nombre de caratères sous la forme "{Longueur saisie}/{Longueur maximum} caratères"
         */
        numberOfCharacters: string;
        showNumberCharacters: boolean;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputTextAreaControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        maxLength: number;
        model: string;
        rows: number;
        noFormGroup: boolean;
        displayNumberCharacters: boolean;
        private showMore;
        constructor($timeout: ng.ITimeoutService);
        moreClass: string;
        /**
         * Renvoie le nombre de caratères sous la forme "{Longueur saisie}/{Longueur maximum} caratères"
         */
        numberOfCharacters: string;
        showNumberCharacters: boolean;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputSaisieRiceControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        rice: MyWay.Model.Rice;
        saisieLibre: boolean;
        modeAppel: string;
        private _formRibName;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService);
        fieldClassExtended: string;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputRadioControleur<T extends string | number> extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        isInline: boolean;
        model: T;
        options: ICBusiness.Models.Common.ICodeLabel<T>[];
        noFormGroup: boolean;
        listStyleClass: string;
        readOnlyModel: string;
        constructor($timeout: ng.ITimeoutService);
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.ContextEdition {
    class VoletEnteteDirectiveControleur {
        private contextEditiqueService;
        /** paramètre de la directive */
        idDossier: string;
        libelleIndicateur: string;
        listeAnomalies: string[];
        editionBackOfficeEligible: boolean;
        editionAgenceEligible: boolean;
        editionSignatureElectroniqueEligible: boolean;
        editionSignatureDemandeCreditSAGEligible: boolean;
        loading: boolean;
        visible: boolean;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor(contextEditiqueService: IContexteEditionService, $scope: ng.IScope);
        private onContextUpdated();
        private getLibelleIndicateur(ce);
        /**
         * Création du libelle de signature electronique.
         * @param ce
         */
        private getLabelSignatureElectronique(ce);
        private getlabel(etat, label);
        private etatActifEtEligible(etat);
    }
}

declare namespace ICCreditComponents.ContextEdition {
}

declare namespace ICCreditComponents.Enum {
    namespace CheminDeFerCredit {
        enum EnumActiveStep {
            stepOne = 0,
            stepTwo = 1,
            stepThree = 2,
            stepFour = 3,
            stepFive = 4,
            stepSix = 5,
        }
    }
}

declare namespace ICCreditComponents.Constantes {
    namespace CheminDeFerCredit {
        const stepListCredit: Directives.IStepListInformation[];
    }
}

declare namespace ICCreditComponents.Directives {
    class CheminDeFerCreditControleur {
        private cheminDeFerCreditService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        context: ICBusiness.Models.Common.IContext;
        cheminDeFerSettings: ICCreditComponents.Directives.ICheminDeFerSettings;
        static $inject: string[];
        constructor(cheminDeFerCreditService: ICCreditComponents.Services.CheminDeFerCreditService);
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Services {
    interface ICheminDeFerCreditService {
        getStepList(context: ICBusiness.Models.Common.IContext): Directives.ICheminDeFerSettings;
    }
    class CheminDeFerCreditService implements ICheminDeFerCreditService {
        getStepList(context: ICBusiness.Models.Common.IContext): Directives.ICheminDeFerSettings;
        /** Voir pour gérer le in progress step one et four */
        private checkIsActiveStep(context, step);
    }
}

declare module ICCreditComponents.Directives {
    class PiecesControlesTablePiecesControleur {
        private filtreService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        listePiecoModele: Modeles.IPiecoModele[];
        listePiecoModeleFiltre: Modeles.IPiecoModele[];
        processusFiltres: Array<Modeles.ISelectbox<string>>;
        filtreProcessusSelected: Modeles.ISelectbox<string>;
        filtreProcessusActif: boolean;
        statutFiltres: Array<Modeles.ISelectbox<number>>;
        filtreStatutSelected: Modeles.ISelectbox<number>;
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
        libelleEnteteTableau: Modeles.ILibelleEnteteTableau;
        static $inject: Array<string>;
        constructor(filtreService: Services.FilterService);
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
        /**
         * Récupère le libellé de la lettre passé en paramètre
         * @param lettre
         */
        getLibelleStatut(lettre: number): string;
        isNonControleAndDNCActif(): boolean;
        /**
         * Vérifie si la pièce est un contrôle et dispose de la propriété anciensAvisEtStatut
         * @param piece
         */
        hasAncienAvisEtStatut(piece: Modeles.IPiece): boolean;
        /**
         * Vérifie si la pièce est un contrôle et dispose de la propriété anciensAvisEtStatut et d'au moins un ancien avis
         * @param piece
         */
        printAncienAvisAgenceOuBo(piece: Modeles.IPiece): boolean;
        /**
         * Détermine si la pièce a le statut sans objet
         * @param piece
         */
        isSansObjet(piece: Modeles.IPiece): boolean;
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

declare module ICCreditComponents.Directives {
}

declare module ICCreditComponents.Directives {
    interface IPiecesControlesToutCocherControleurParams {
        libelle: string;
        listePiecoModele: Modeles.IPiecoModele[];
        isAutoriseToutCocher: boolean;
        typePiece: Enum.EnumTypePiece;
        dncActif: boolean;
        needSaving: () => boolean;
    }
    class PiecesControlesToutCocherControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        params: IPiecesControlesToutCocherControleurParams;
        private needSaving;
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

declare module ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    class FooterCreditDirectiveControleur {
        private footerCreditService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        hidden: boolean;
        settings: IFooterDirectiveSettings;
        static $inject: string[];
        constructor(footerCreditService: Services.IFooterCreditService);
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Services {
    interface IFooterCreditService {
        footerSettings: Directives.IFooterDirectiveSettings;
        setUpDependencies(navigationService: Navigation.INavigationCreditService, context: ICBusiness.Models.Common.IContext): void;
        refuserAccordPreteurAction(delegate: () => ng.IPromise<void>): void;
        refuserAccordPreteurVisible(delegate: () => boolean): void;
        calculerAction(delegate: () => ng.IPromise<void>): void;
        calculerActionEnabled(delegate: () => boolean): void;
        enregistrerSignatairesAction(delegate: () => ng.IPromise<void>): void;
        enregistrerSignatairesActionEnabled(delegate: () => boolean): void;
        enregistrerSignatureAction(delegate: () => ng.IPromise<void>): void;
        enregistrerSignatureActionEnabled(delegate: () => boolean): void;
        fermerDossierAction(delegate: () => void): void;
        imprimerOffreAction(delegate: () => ng.IPromise<void>): void;
        imprimerOffreActionEnabled(delegate: () => boolean): void;
        miseAJourAdminAction(delegate: () => void): void;
        prendreDecisionAction(delegate: () => ng.IPromise<void>): void;
        remiseOffreAction(delegate: () => void): void;
        retenirAction(delegate: () => ng.IPromise<void>): void;
        retenirActionEnabled(delegate: () => boolean): void;
        validerRemiseOffreAction(delegate: () => ng.IPromise<void>): void;
        validerRemiseOffreActionEnabled(delegate: () => boolean): void;
        validerRemiseOffreVisible(delegate: () => boolean): void;
        sauvegarderPieco(delegate: () => ng.IPromise<void>): void;
        accederDNC(delegate: () => void): void;
        imprimerPiecesClientPieco(delegate: () => ng.IPromise<void>): void;
        imprimerPiecesAgencePieco(delegate: () => ng.IPromise<void>): void;
        imprimerControlesPieco(delegate: () => ng.IPromise<void>): void;
        hasPiecesClients(delegate: () => boolean): void;
        hasPiecesAgences(delegate: () => boolean): void;
        hasControles(delegate: () => boolean): void;
        hasMoreThanOneTypeOfPieces(delegate: () => boolean): void;
        isPiecoCompletelyLoaded(delegate: () => boolean): void;
        constituerLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        constituerLiasseElecVisible(delegate: () => boolean): void;
        constituerLiasseElecEnabled(delegate: () => boolean): void;
        modifierLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        modifierLiasseElecEnabled(delegate: () => boolean): void;
        modifierLiasseElecVisible(delegate: () => boolean): void;
        annulerLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        annulerLiasseElecEnabled(delegate: () => boolean): void;
        envoyerOffreElecAction(delegate: () => ng.IPromise<void>): void;
        envoyerOffreElecEnabled(delegate: () => boolean): void;
        consulterLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        consulterLiasseElecVisible(delegate: () => boolean): void;
        editerOffrePapierAction(delegate: () => ng.IPromise<void>): void;
        editerOffrePapierVisible(delegate: () => boolean): void;
        editerOffreIndusAction(delegate: () => ng.IPromise<void>): void;
        editerOffreIndusVisible(delegate: () => boolean): void;
        constituerDossierIndusAction(delegate: () => ng.IPromise<void>): void;
        constituerDossierIndusEnabled(delegate: () => boolean): void;
        constituerDossierIndusVisible(delegate: () => boolean): void;
        constituerDossierIndusLibelle(delegate: () => string): void;
        annulerDossierIndusAction(delegate: () => ng.IPromise<void>): void;
        annulerDossierIndusVisible(delegate: () => boolean): void;
        editerOffreSignElecAction(delegate: () => ng.IPromise<void>): void;
        editerOffreSignElecVisible(delegate: () => boolean): void;
        verifierEligibiliteAction(delegate: () => ng.IPromise<void>): void;
        editerDemandeCreditAction(delegate: () => ng.IPromise<void>): void;
    }
    class FooterCreditService implements IFooterCreditService {
        private $q;
        private controleSyntheseService;
        private etatDossierService;
        private verifierEligibiliteService;
        private paramApplicatifRemanentService;
        private transfertConformiteService;
        private applicationService;
        private transfertBoService;
        private loaderService;
        private prendreDecisionPreteurService;
        private transfertDecisionService;
        private decisionPreteur;
        private $route;
        private _onBeforeFooterAction;
        private _annulerAccordPreteurAction;
        private _refuserAccordPreteurAction;
        private _refuserAccordPreteurVisible;
        private _calculerAction;
        private _calculerActionEnabled;
        private _enregistrerSignatairesAction;
        private _enregistrerSignatairesActionEnabled;
        private _editerOffrePapierAction;
        private _editerOffrePapierVisible;
        private _editerOffreIndusAction;
        private _editerOffreIndusVisible;
        private _editerOffreSignElecAction;
        private _editerOffreSignElecVisible;
        private _enregistrerSignatureAction;
        private _enregistrerSignatureActionEnabled;
        private _fermerDossierAction;
        private _imprimerOffreAction;
        private _imprimerOffreActionEnabled;
        private _miseAJourAdminAction;
        private _prendreDecisionAction;
        private _remiseOffreAction;
        private _retenirAction;
        private _retenirActionEnabled;
        private _validerRemiseOffreAction;
        private _validerRemiseOffreActionEnabled;
        private _validerRemiseOffreVisible;
        private _sauvegarderPieco;
        private _accederDNC;
        private _imprimerPiecesClientPieco;
        private _imprimerPiecesAgencePieco;
        private _imprimerControlesPieco;
        private _hasPiecesAgences;
        private _hasPiecesClients;
        private _hasControles;
        private _hasMoreThanOneTypeOfPieces;
        private _isPiecoCompletelyLoaded;
        private _constituerLiasseElecAction;
        private _constituerLiasseElecEnabled;
        private _constituerLiasseElecVisible;
        private _modifierLiasseElecAction;
        private _modifierLiasseElecEnabled;
        private _modifierLiasseElecVisible;
        private _annulerLiasseElecAction;
        private _annulerLiasseElecEnabled;
        private _envoyerOffreElecAction;
        private _envoyerOffreElecEnabled;
        private _consulterLiasseElecAction;
        private _consulterLiasseElecVisible;
        private _transfererPourDecisionAction;
        private _transfererPourDecisionVisible;
        private _transfererPourConformiteAction;
        private _transfererPourConformiteVisible;
        private _transfererPourBoAction;
        private _constituerDossierIndusAction;
        private _constituerDossierIndusVisible;
        private _constituerDossierIndusEnabled;
        private _constituerDossierIndusLibelle;
        private _annulerDossierIndusAction;
        private _annulerDossierIndusVisible;
        private _verifierEligibiliteAction;
        private _editerDemandeCreditAction;
        /**
         * Add a delegate function to be executed before controle
         * @param delegate
         */
        onBeforeFooterAction(delegate: () => ng.IPromise<boolean>): void;
        /**
         * Delegate pour l'action de refus de l'accord prêteur
         * @param delegate
         */
        refuserAccordPreteurAction(delegate: () => ng.IPromise<void>): void;
        refuserAccordPreteurVisible(delegate: () => boolean): void;
        /**
         * Delegate pour l'action Calculer
         * @param delegate
         */
        calculerAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Delegate pour activer l'action Calculer
         * @param delegate
         */
        enregistrerSignatairesActionEnabled(delegate: () => boolean): void;
        /**
         * Delegate pour l'action Calculer
         * @param delegate
         */
        enregistrerSignatairesAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Delegate pour activer l'action Calculer
         * @param delegate
         */
        calculerActionEnabled(delegate: () => boolean): void;
        /**
         * Delegate pour l'édition papier
         * @param delegate
         */
        editerOffrePapierAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Delegate pour l'édition industrialisée
         * @param delegate
         */
        editerOffreIndusAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Delegate pour l'édition en signature électronique
         * @param delegate
         */
        editerOffreSignElecAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Add a delegate function for Enregistrer la signature
         * @param delegate
         */
        enregistrerSignatureAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Méthode pour l'activation/désactivation du bouton 'Enregistrer la réponse'
         * @param delegate
         */
        enregistrerSignatureActionEnabled(delegate: () => boolean): void;
        /**
         * Add a delegate function for fermer le dossier
         * @param delegate
         */
        fermerDossierAction(delegate: () => void): void;
        /**
         * Méthode pour l'action du bouton 'Imprimer'
         * @param delegate
         */
        imprimerOffreAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Méthode pour l'activation/désactivation du bouton 'Imprimer'
         * @param delegate
         */
        imprimerOffreActionEnabled(delegate: () => boolean): void;
        /**
         * Delegate pour activer l'action Mise à jour admin
         * @param delegate
         */
        miseAJourAdminAction(delegate: () => void): void;
        /**
         * Add a delegate function for Prendre décision
         * @param delegate
         */
        prendreDecisionAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Add a delegate function for Remise offre
         * @param delegate
         */
        remiseOffreAction(delegate: () => void): void;
        /**
         * Add a delegate function for retenir
         * @param delegate
         */
        retenirAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Add a delegate function for retenir enabled
         * @param delegate
         */
        retenirActionEnabled(delegate: () => boolean): void;
        /**
         * Add a delegate function for Valider la remise de l'offre
         * @param delegate
         */
        validerRemiseOffreAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Méthode pour l'activation/désactivation du bouton 'Valider la remise de l'offre'
         * @param delegate
         */
        validerRemiseOffreActionEnabled(delegate: () => boolean): void;
        /**
         * Méthode pour l'affichage du bouton 'Valider la remise de l'offre'
         * @param delegate
         */
        validerRemiseOffreVisible(delegate: () => boolean): void;
        /**
         * Méthode pour l'affichage du bouton 'Valider la remise de l'offre'
         * @param delegate
         */
        validerRemiseOffreLibelle(): string;
        sauvegarderPieco(delegate: () => ng.IPromise<void>): void;
        accederDNC(delegate: () => void): void;
        imprimerPiecesClientPieco(delegate: () => ng.IPromise<void>): void;
        imprimerPiecesAgencePieco(delegate: () => ng.IPromise<void>): void;
        imprimerControlesPieco(delegate: () => ng.IPromise<void>): void;
        hasPiecesClients(delegate: () => boolean): void;
        hasPiecesAgences(delegate: () => boolean): void;
        hasControles(delegate: () => boolean): void;
        hasMoreThanOneTypeOfPieces(delegate: () => boolean): void;
        isPiecoCompletelyLoaded(delegate: () => boolean): void;
        private _footerSettings;
        footerSettings: Directives.IFooterDirectiveSettings;
        /** Context applicatif sur lequel se base le service pour extraire les règles de gestion d'affichage du footer */
        private context;
        private navigationService;
        static $inject: string[];
        constructor($q: ng.IQService, controleSyntheseService: Controle.IControleSyntheseService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, verifierEligibiliteService: ICCreditComponents.Services.IVerifierEligibiliteService, paramApplicatifRemanentService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifRemanentService, transfertConformiteService: ICCreditComponents.Services.ITransfertConformiteService, applicationService: ICCreditComponents.Services.IApplicationService, transfertBoService: ICCreditComponents.Services.ITransfertBoService, loaderService: ICCreditComponents.Services.ILoaderService, prendreDecisionPreteurService: ICCreditComponents.Services.IPrendreDecisionPreteur, transfertDecisionService: ICCreditComponents.Services.ITransfertDecisionService, decisionPreteur: ICCreditComponents.Services.IDecisionPreteur, $route: ng.route.IRouteService);
        private quitterDossier();
        private footerVisible();
        /**
         * Mise en place des dépendances
         * @param navigationService
         * @param context
         */
        setUpDependencies(navigationService: Navigation.INavigationCreditService, context: ICBusiness.Models.Common.IContext): void;
        private executeActionBefore();
        private getButtonAnnulerDecision();
        private getButtonCalculer();
        private getButtonEnregistrerSignataire();
        private getButtonControlerDossier();
        /**
         * Add a delegate function to be executed before check eligibility
         * @param delegate
         */
        verifierEligibiliteAction(delegate: () => ng.IPromise<void>): void;
        private getButtonVerifierEligibilite();
        editerDemandeCreditAction(delegate: () => ng.IPromise<void>): void;
        private getButtonEditerDemandeCredit();
        private editerDemandeCreditVisible();
        private getButtonEditerOffreHorsSignElec();
        private getButtonEditerOffreSignElec();
        private getButtonConstituerDossierIndus();
        constituerDossierIndusAction(delegate: () => ng.IPromise<void>): void;
        constituerDossierIndusEnabled(delegate: () => boolean): void;
        constituerDossierIndusVisible(delegate: () => boolean): void;
        constituerDossierIndusLibelle(delegate: () => string): void;
        private getButtonAnnulerDossierIndus();
        annulerDossierIndusAction(delegate: () => ng.IPromise<void>): void;
        annulerDossierIndusVisible(delegate: () => boolean): void;
        private getButtonEnregistrerSignature();
        private getButtonFermerDossier();
        private getButtonImprimerOffreDossier();
        private getButtonMiseAJourAdmin();
        private getButtonPrendreDecision();
        private getButtonRemiseOffre();
        private getButtonRetenir();
        private getButtonRetourMontage();
        private getButtonValiderRemiseOffre();
        private getButtonSauvegarderPieco();
        private getButtonAccederDNCPieco();
        private getButtonPlusActionMultiple();
        private transfererPourBoVisible;
        private getButtonImprimerMultiplePieco();
        /**
         * Méthode pour avoir le libellé du bouton imprimer pour l'offre/contrat
         */
        private getLabelButtonImprimerOffre();
        /**
         * Méthode pour avoir le libellé du bouton remise de l'offre pour l'offre/contrat
         */
        private getLabelButtonRemiseOffre();
        private getButtonConstituerLiasseElec();
        constituerLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        constituerLiasseElecEnabled(delegate: () => boolean): void;
        constituerLiasseElecVisible(delegate: () => boolean): void;
        private getButtonModifierLiasseElec();
        modifierLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        modifierLiasseElecEnabled(delegate: () => boolean): void;
        modifierLiasseElecVisible(delegate: () => boolean): void;
        private getButtonAnnulerLiasseElec();
        annulerLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        annulerLiasseElecEnabled(delegate: () => boolean): void;
        private getButtonRemettreOffreElec();
        envoyerOffreElecAction(delegate: () => ng.IPromise<void>): void;
        envoyerOffreElecEnabled(delegate: () => boolean): void;
        private getButtonConsulterLiasseElec();
        consulterLiasseElecVisible(delegate: () => boolean): void;
        consulterLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        private isButtonAnnulerDecisionVisible();
        private isButtonControlerDossierVisible();
        editerOffrePapierVisible(delegate: () => boolean): void;
        editerOffreIndusVisible(delegate: () => boolean): void;
        editerOffreSignElecVisible(delegate: () => boolean): void;
        private isButtonFermerDossierVisible();
        /**
         * Visibilité du bouton 'Imprimer'
         */
        private isButtonImprimerOffreDossier();
        private isButtonMiseAJourAdmin();
        private isButtonPrendreDecisionVisible();
        private isButtonRemiseOffreVisible();
        private isButtonRetenirVisible();
        private isButtonsSignatureVisible();
        private isButtonPiecoVisible();
    }
}

declare namespace ICCreditComponents.Directives.Garantie {
    /** Paramètres de la directive  */
    interface IDetailGarantieAdminParams {
        garantieOrigine: ICBusiness.Models.Garanties.IGarantie;
        garantie: ICBusiness.Models.Garanties.IGarantie;
        afficherMajAdminUniquement: boolean;
        objetPorteEnGarantieGCData: () => ICBusiness.Services.Garanties.IObjetPorteGarantieGCData;
        context: ICBusiness.Models.Common.IContext;
        canSave: () => boolean;
    }
    /** Controleur de la directive "liste garanties" */
    class DetailGarantieAdminControleur {
        private $scope;
        private garantieService;
        private popinService;
        private detailGarantieSettingsService;
        private detailGarantieRulesService;
        private recherchePersonneService;
        private personneService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        /** Données en entrée de la directive */
        params: IDetailGarantieAdminParams;
        listeFormeActe: ICBusiness.Models.Common.ICodeLabel<number>[];
        garantieSettings: IDetailGarantieFormSettings;
        listeBeneficiaire: ICBusiness.Models.Common.ICodeLabel<string>[];
        listeSessionAnteriorite: ICBusiness.Models.Common.ICodeLabel<number>[];
        rang1HypothequeRules: ICBusiness.Rules.IValidationRule[];
        rang2HypothequeRules: ICBusiness.Rules.IValidationRule[];
        objetPorteEnGarantieAdminParams: IObjetPorteEnGarantieAdminParams;
        reponseEnAttente: ICBusiness.Enum.ReponseGarantie;
        reponseAccorde: ICBusiness.Enum.ReponseGarantie;
        reponseRefuse: ICBusiness.Enum.ReponseGarantie;
        reponseOrganismeSettings: IGarantieReponseOrganismeSettings;
        reponseOrganismedateRules: ICBusiness.Rules.IValidationRule[];
        referenceExterneRules: ICBusiness.Rules.IValidationRule[];
        dataAjouterGarant: MyWay.UI.IBoutonActionRiche[];
        loading: boolean;
        libelleReponseGarantie: string;
        /** Retourne la date correspondant à la réponse organisme sélectionnée */
        private getDateReponseSelected();
        private loadRules();
        static $inject: string[];
        constructor($scope: ng.IScope, garantieService: ICBusiness.Services.Garanties.IGarantiesService, popinService: ICCreditComponents.Services.IPopinService, detailGarantieSettingsService: DetailGarantieSettingsService, detailGarantieRulesService: DetailGarantieRuleService, recherchePersonneService: ICCreditComponents.Services.IRecherchePersonne, personneService: ICBusiness.Services.Emprunteur.IPersonneService);
        listePactCommissoire: ICBusiness.Models.Common.ICodeLabel<string>[];
        private garantieReponseOrganismeIsSaved();
        changeReponseRefuse(): void;
        rangHypothequeChanged(): void;
        getLibelleReponse(): string;
        getDateReponse(): Date;
        alerterFormeAuthentique(): void;
        ajouterIntervenant(personneMorale: boolean): ng.IPromise<ICBusiness.Models.Emprunteur.IGarant>;
        getAppartenanceLibelle(): string;
    }
}

declare namespace ICCreditComponents.Directives.Garantie {
}

declare namespace ICCreditComponents.Directives.Garantie {
    class DetailGarantieRuleService {
        getRang1HypothequeRules(garantie: ICBusiness.Models.Garanties.IGarantie): ICBusiness.Rules.IValidationRule[];
        getRang2HypothequeRules(garantie: ICBusiness.Models.Garanties.IGarantie): ICBusiness.Rules.IValidationRule[];
        getReponseOrganismedateRules(garantie: ICBusiness.Models.Garanties.IGarantie, dateInstruction: string, dateSelected: () => Date): ICBusiness.Rules.IValidationRule[];
        getReferenceExterneRules(garantie: ICBusiness.Models.Garanties.IGarantie): ICBusiness.Rules.IValidationRule[];
    }
}

declare namespace ICCreditComponents.Directives.Garantie {
    interface IDetailGarantieFormSettings {
        inputRadioFormActe: ICCreditComponents.Forms.IInputSettings;
        inputDateFinValidite: ICCreditComponents.Forms.IInputSettings;
        listBoxBeneficiaire: ICCreditComponents.Forms.IInputSettings;
        rang1Hypotheque: ICCreditComponents.Forms.IInputSettings;
        rang2Hypotheque: ICCreditComponents.Forms.IInputSettings;
        dureeHypotheque: ICCreditComponents.Forms.IInputSettings;
        listBoxCessionAnteriorite: ICCreditComponents.Forms.IInputSettings;
        inputRadioPacteCommissoire: ICCreditComponents.Forms.IInputSettings;
    }
    interface IGarantieReponseOrganismeSettings {
        blocReponseOrganisme: ICCreditComponents.Forms.IInputSettings;
        inputStringIdExterne: ICCreditComponents.Forms.IInputSettings;
        radioBtnReponse: ICCreditComponents.Forms.IInputSettings;
        dateAccorde: ICCreditComponents.Forms.IInputSettings;
        dateRefuse: ICCreditComponents.Forms.IInputSettings;
        dateEnAttente: ICCreditComponents.Forms.IInputSettings;
    }
    class DetailGarantieSettingsService {
        private garantieService;
        static $inject: string[];
        constructor(garantieService: ICBusiness.Services.Garanties.IGarantiesService);
        getDetailsGarantieSettings(context: ICBusiness.Models.Common.IContext, garantie: ICBusiness.Models.Garanties.IGarantie): IDetailGarantieFormSettings;
        getReponseOrganismeSettings(context: ICBusiness.Models.Common.IContext, garantie: ICBusiness.Models.Garanties.IGarantie, garantieOrigine: ICBusiness.Models.Garanties.IGarantie): IGarantieReponseOrganismeSettings;
        private reponseOrganismeConsultation(context, garantie, garantieOrigine);
    }
}

declare namespace ICCreditComponents.Directives.Garantie {
    interface IObjetPorteEnGarantieAdminParams {
        garantieReelle: ICBusiness.Models.Garanties.IGarantie;
        garantieReelleOrigine: ICBusiness.Models.Garanties.IGarantie;
        contexte: ICBusiness.Models.Common.IContext;
        loader: boolean;
        objetPorteEnGarantieGCData: ICBusiness.Services.Garanties.IObjetPorteGarantieGCData;
        canSaveObjetPorte: () => boolean;
    }
    class ObjetPorteEnGarantieAdminControleur {
        private wrapperService;
        private parametreRestServiceGarantieCredit;
        private garantieService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        /** Données en entrée de la directive */
        params: IObjetPorteEnGarantieAdminParams;
        initObjetPorteGarantie: boolean;
        nomServiceLocator: string;
        estimationSettings: GarantieCredit.Estimation.ISettings;
        loader: boolean;
        static $inject: string[];
        constructor(wrapperService: ICBusiness.Services.Garanties.ObjetPorteGarantieWrapperService, parametreRestServiceGarantieCredit: ICBusiness.Services.ParametreRestService, garantieService: ICBusiness.Services.Garanties.IGarantiesService);
    }
}

declare namespace ICCreditComponents.Directives.Garantie {
}

declare namespace ICCreditComponents.Modales {
    interface IDonneeComplementaire extends ICBusiness.Models.Edition.IDonneeComplementaire {
        /**
         * Input settings
         */
        inputSettings: Forms.IInputSettings;
    }
    /**
     * Interface pour les données en entrée de la fenêtre modale de saisie des données complémentaires nécessaires à l'édition
     */
    interface IModalDonneesCompNecessaireControleurData {
        /**
         * Liste des données complémentaires à traiter
         */
        donneesComplementaires: ICBusiness.Models.Edition.IDonneeComplementaire[];
        /**
         * Identifiant du dossier en instruction
         */
        idDossier: string;
        /**
         * Eventuel complément pour le titre de la popin
         */
        libelleDocument: string;
        /**
         * Booléen pour affichage ou pas du bouton annuler
         */
        estAvecBtnAnnuler?: boolean;
    }
    class ModalDonneesCompNecessaireControleur {
        private $modalInstance;
        private $scope;
        private saisiesComplementairesService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        chargementEnCours: boolean;
        donneesComplementaires: IDonneeComplementaire[];
        idDossier: string;
        title: string;
        estAvecBtnAnnuler: boolean;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, saisiesComplementairesService: ICBusiness.Services.SaisiesComplementaires.ISaisiesComplementairesService, data: ICCreditComponents.Modales.IModalDonneesCompNecessaireControleurData);
        private buildInputSettings();
        /**
         * Méthode pour le bouton annuler
         */
        annuler(): void;
        getTextAreaFieldClass(donneeComplementaire: IDonneeComplementaire): string;
        /**
         * Méthode pour le bouton imprimer
         */
        imprimer(): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemDirectiveControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        constructor();
        settings: ITotemSettings;
        selectPage(page: ITotemPage): void;
        selectSection(section: ITotemSection): void;
        onSousChapitreClick(sousChapitre: ITotemSousChapitre): void;
        getIdItem(item: ITotemItem): string;
        getLibelleItem(item: ITotemItem): string;
        isPageActive(item: ITotemItem): boolean;
        isSectionActive(item: ITotemItem): boolean;
        showSections(page: ITotemPage): boolean;
        notValide(page: ITotemPage): boolean;
        valide(page: ITotemPage): boolean;
        itemEstVisible(item: ITotemItem): boolean;
        mouseOverSection(pageId: string): void;
        mouseLeaveSection(pageId: string): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    enum EnumTotemIcone {
        erreur = 0,
        valide = 1,
    }
    /** Item de base d'un totem */
    interface ITotemItem {
        label: () => string;
        id: () => string;
        onClick?: () => void;
        route?: () => string;
        icone?: () => EnumTotemIcone;
        visible?: () => boolean;
    }
    /** Une section est un sous item de page */
    interface ITotemSection extends ITotemItem {
    }
    interface ITotemPageOuSousChapitre extends ITotemItem {
        isPage: boolean;
    }
    /** Représente un totem page */
    interface ITotemPage extends ITotemPageOuSousChapitre {
        sections?: ITotemSection[];
    }
    /** Totem sous Chapitre */
    interface ITotemSousChapitre extends ITotemPageOuSousChapitre {
        pages?: ITotemPage[];
        toggle: boolean;
    }
    /** Settings d'un menu */
    interface ITotemSettings {
        totemItems?: ITotemPageOuSousChapitre[];
        showSectionOnlyOnActivePage?: boolean;
        activePage?: ITotemPage;
        activeSection?: ITotemSection;
    }
}

declare namespace ICCreditComponents.Navigation {
}

declare namespace ICCreditComponents.Navigation {
    class TotemChapitreActionsComplementaires {
        private context;
        private etatDossierService;
        private paramApplicatifRemanentService;
        private controleSyntheseService;
        private navigationService;
        private labelService;
        constructor(context: ICBusiness.Models.Common.IContext, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, paramApplicatifRemanentService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifRemanentService, controleSyntheseService: Controle.IControleSyntheseService, navigationService: INavigationCreditService, labelService: Services.IlabelService);
        getSousChapitreActionsComplementaires(): ITotemSousChapitre;
        private getNewPagePieceEtControle();
        private getNewPageChoixEditionDemandeCredit();
        private getNewPageEmissionDocuments();
        private getTransfererDansNeoActif();
        private getparametreTransfereNeoActif();
        private displayFicheSuiveuse();
        private getParametreFicheSuiveuse();
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemChapitreDecisionEdition {
        private context;
        private etatDossierService;
        private navigationService;
        private labelService;
        constructor(context: ICBusiness.Models.Common.IContext, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, navigationService: INavigationCreditService, labelService: Services.IlabelService);
        getSousChapitreDecisionEdition(): ITotemSousChapitre;
        private getNewPageDecisionPreteur();
        private getNewPageEditionOffre();
        private getNewPageMajAdministrative();
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemChapitreProposition {
        private context;
        private etatDossierService;
        private controleSyntheseService;
        private navigationService;
        private labelService;
        constructor(context: ICBusiness.Models.Common.IContext, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, controleSyntheseService: Controle.IControleSyntheseService, navigationService: INavigationCreditService, labelService: Services.IlabelService);
        getSousChapitreProposition(): ITotemSousChapitre;
        private getNewPageClient();
        private getNewPageProjet();
        private getNewPageFinancement();
        private getNewPageGestionAdministrative();
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemCcreditCommon {
        /** Return true if "emprunteur" and "dossier" exists */
        static dossierHasProjetEmprunteur(context: ICBusiness.Models.Common.IContext): boolean;
        /**
         * Recherche l'icone OK ou KO dans le controleSyntheseService pour un theme d'amolie
         * @param theme
         * @param controleSyntheseService
         */
        static getIconeByThemeAnomalie(theme: Controle.ThemeAnomalieEnum, controleSyntheseService: Controle.IControleSyntheseService): EnumTotemIcone;
    }
}
