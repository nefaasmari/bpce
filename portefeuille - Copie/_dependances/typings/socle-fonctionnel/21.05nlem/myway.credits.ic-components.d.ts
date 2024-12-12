
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
        const chartService: string;
        const contextEditionService: string;
        const cookieService: string;
        const controleSyntheseService: string;
        const dataPiecoService: string;
        const detailGarantieRuleService: string;
        const detailGarantieSettingsService: string;
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
        const rendreDossierService: string;
        const repriseDossierService: string;
        const recherchePersonne: string;
        const saccefService: string;
        const smacService: string;
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
    namespace TraitementComp {
        /** TC */
        const transfertConformite: string;
        /** TD */
        const transfertAccordPreteur: string;
        /** MA */
        const misEnAttente: string;
        /** IN */
        const instruction: string;
        /** PB */
        const transfertBackOffice: string;
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

declare namespace ICCreditComponents.Constantes {
    namespace Cookie {
        const UID: string;
    }
}

declare namespace ICCreditComponents.Constantes {
    namespace Form {
        const rgpdAlertMessage: string;
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
    interface IRecherchePersonneParam {
        isPersonneMorale: boolean;
        canCreatePersonne: boolean;
        actionCreatePersonneMorale?: (data: ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT.ICreationClientContext) => void;
        actionCreatePersonnePhysique?: (data: ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT.ICreationClientContext) => void;
    }
}

declare module ICCreditComponents.Modeles {
    interface ITransfertBo {
        /**
         * Propriété pour savoir si le transfert est auto
         */
        estAuto: boolean;
        /**
         * Propriété pour savoir si le transfert est réalisé avec succès ou n'est pas à faire
         */
        estPasse: boolean;
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
        reloadWithoutSaving: boolean;
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
        reloadWithoutSaving: boolean;
        loadingRedacteurActe: boolean;
        constructor(context: BusinessModel.Common.IContext, canBeReload?: boolean);
        hasChanged: boolean;
        isEmpty: boolean;
        isValid: boolean;
        saveTemporaryAddress(): void;
        private getRules();
    }
}

declare namespace ICCreditComponents.Directives.ReponseAssureur {
    interface IAssuranceFormSettings {
        inputBasique: ICCreditComponents.Forms.IInputSettings;
    }
    interface IAssuranceFormRules {
        dateEnvoi: ICBusiness.Rules.IValidationRule[];
        dateAcceptation: ICBusiness.Rules.IValidationRule[];
    }
    interface IReponseAssureurDirectiveParam {
        getContext: () => ICBusiness.Models.Common.IContext;
        assurance: ICBusiness.Models.Assurances.IAssuranceDetails;
        dateDemandeFinancier: string;
        afficherModePanel: boolean;
    }
    class ReponseAssureurControleur {
        private assuranceService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        private code0;
        private code1;
        private code2;
        private code5;
        private code6;
        params: IReponseAssureurDirectiveParam;
        reponseAssureur: boolean;
        listeReserves: ICBusiness.Models.Common.ICodeLabel<number>[];
        selectedReserve: ICBusiness.Models.Common.ICodeLabel<number>;
        formSettings: IAssuranceFormSettings;
        formRules: IAssuranceFormRules;
        static $inject: string[];
        constructor(assuranceService: ICBusiness.Services.Assurances.IAssurancesService);
        private setRules();
        libelleReponseAssureur: string;
        parDelegation: boolean;
        isAttente(): boolean;
        private loadReserves();
        majReserve(): void;
        majReponseAssureur(): void;
        getIconDecisionCNP(): string;
        canDisplayReponseDecision(): boolean;
        /** Form Settings */
        private getAssuranceFormSettings(codeEtatInitial);
        private isEtatConsultation(codeEtatAccessoire);
    }
}

declare namespace ICCreditComponents.Directives.ReponseAssureur {
}

declare namespace ICCreditComponents.Services {
    interface IAnomalieService {
        /**
         * Méthode pour annuler la décision prêteur
         * @param dateInstruction
         * @param idDossier
         */
        filterAnomalies(anomalies: ICBusiness.Models.Common.IAnomalieLecture[], typeAno: ICBusiness.Enum.TypeAnomalieEnum): ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * Affichage d'une modale de gestion des anomalies en vérifiant au préalable si on peut forcer les anomalies
         * @param codeEtablissement
         * @param dateTraitement
         * @param anomalies
         * @param idElementStructureInstruction
         * @param numeroInterneEdsAgent
         * @param titreModaleAnomalie titre qui sera affiché sur la modale des anoamlies
         * returns true Si aucune anomalie bloquante ou l'utilisateur a forcé.  False si ano bloquante impossible à forcer.
         */
        afficherModaleAnomalieControleAvecGestionForcage(codeEtablissement: string, dateTraitement: string, anomalies: ICBusiness.Models.Edition.IAnomaliesControleEdition, idElementStructureInstruction: string, numeroInterneEdsAgent: string, titreModaleAnomalie: string): ng.IPromise<boolean>;
    }
    class AnomalieService implements IAnomalieService {
        private $q;
        private editionOffreService;
        private habilitationService;
        private popinService;
        static $inject: string[];
        constructor($q: ng.IQService, editionOffreService: ICBusiness.Services.Edition.IEditionOffreService, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService, popinService: ICCreditComponents.Services.IPopinService);
        filterAnomalies(anomalies: ICBusiness.Models.Common.IAnomalieLecture[], typeAno: ICBusiness.Enum.TypeAnomalieEnum): ICBusiness.Models.Common.IAnomalieLecture[];
        afficherModaleAnomalieControleAvecGestionForcage(codeEtablissement: string, dateTraitement: string, anomalies: ICBusiness.Models.Edition.IAnomaliesControleEdition, idElementStructureInstruction: string, numeroInterneEdsAgent: string, titreModaleAnomalie: string): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface IApplicationService {
        /**
         * Ferme l'application avec sauvegarde du dossier
         * @param context
         * @param navigationService
         */
        fermerApplication(context: ICBusiness.Models.Common.IContext, navigationService: Navigation.INavigationCreditService, sauvegarde?: boolean): void;
        /**
         * Permet de changer de mode de visualisation du dossier vers la consultation sans repasser par la recherche
         * @param appParams Paramètres permettant la fermeture et la réouverture en mode consultation
         * @param navigationService permet d'utiliser la méthode setModeOuvertureDossier(...) de navigationService
         * @param fermerDossier permet d'indiquer s'il faut fermer le dossier au préalable avant réouverture
         */
        switchToConsultationMode(appParams: ICBusiness.Models.Common.ILowLevelParams, navigationService: ICCreditComponents.Navigation.INavigationUtils, fermerDossier?: boolean): ng.IPromise<void>;
    }
    class ApplicationService implements IApplicationService {
        private $q;
        private dossierService;
        private popinService;
        private repriseDossierService;
        private traceService;
        private controleSyntheseService;
        private loaderService;
        static $inject: string[];
        private fermerApplicationError;
        constructor($q: ng.IQService, dossierService: ICBusiness.Services.Dossier.IDossierService, popinService: Services.IPopinService, repriseDossierService: Services.IRepriseDossierService, traceService: ICCreditComponents.Services.ITraceService, controleSyntheseService: ICCreditComponents.Controle.IControleSyntheseService, loaderService: ICCreditComponents.Services.ILoaderService);
        fermerApplication(context: ICBusiness.Models.Common.IContext, navigationService: Navigation.INavigationCreditService, sauvegarde?: boolean): void;
        private afficherPopinErreurDossier(message);
        private fermerDossier(identifiantDossier, context, sauvegarde?);
        switchToConsultationMode(appParams: ICBusiness.Models.Common.ILowLevelParams, navigationService: ICCreditComponents.Navigation.INavigationUtils, fermerDossier?: boolean): ng.IPromise<void>;
    }
}

declare namespace ICCreditComponents.Services {
    interface IPieDatum {
        value: number;
        color: string;
    }
    interface IGraphicInternalData {
        value: number;
        data: IPieDatum;
    }
    interface IChartService {
        drawArcGraphic(document: Document, containerId: string, elementId: string, data: IPieDatum[]): void;
    }
    class ChartService implements IChartService {
        private $filter;
        static $inject: string[];
        private arc;
        private outerArc;
        private pie;
        private radius;
        private small;
        private svg;
        constructor($filter: ng.IFilterService);
        drawArcGraphic(document: Document, containerId: string, elementId: string, data: IPieDatum[]): void;
        /**
         * Constructs the chart
         * @param svg
         * @param sideSize
         */
        constructArcGraphic(svg: D3._Selection<any>, height: number, width: number): void;
        /**
         * Updates the chart data
         * @param data
         */
        changeDataOfArcGraphic(data: IPieDatum[]): void;
    }
}

declare namespace ICCreditComponents.Services {
    interface ICookieService {
        /**
         * Fonction permettant de lire une valeur contenue dans un cookie en fonction d'un code
         *
         * @param anomalies
         * @param typeAno
         */
        lectureCookie(code: string): string;
    }
    class CookieService implements ICookieService {
        private $document;
        static $inject: string[];
        constructor($document: ng.IDocumentService);
        lectureCookie(code: string): string;
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
        private loaderService;
        static $inject: string[];
        constructor(decisionService: ICBusiness.Services.Decision.IDecisionService, popinService: ICCreditComponents.Services.IPopinService, mwNotificationService: MyWay.UI.IMwNotificationService, loaderService: ICCreditComponents.Services.ILoaderService);
        annulerDecision(idDossier: string): ng.IPromise<boolean>;
        refuserDecision(idDossier: string, date: string): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface IEditionOffreService {
        actionEditionOffre(dateInstruction: string, codeEtablissement: string, idDossier: string, idProjet: string, numeroInterneEdsAgent: string, goToEdition: () => void): ng.IPromise<void>;
        imprimerDocument(idDossier: string, infoDocument: ICBusiness.Models.EditionOffre.IInfoDocument, paramEditiques: any[], forceControleGestion: boolean, forceControleEdition: boolean, readOnly?: boolean): ng.IPromise<ICBusiness.Models.Impression.IImpression>;
        imprimerListeDocumentsOffre(codeEtablissement: string, idDossier: string, listeDocuments: ICBusiness.Models.EditionOffre.IInfoDocument[], forceControleGestion: boolean, forceControleEdition: boolean, traiterNotices: boolean, readonly?: boolean): ng.IPromise<void>;
        traiterSaisieDonneesComplementaires(dossier: ICBusiness.Models.Dossier.IDossierSchema, idDocument: string, libelleDocument: string, traiterNotices: boolean): ng.IPromise<boolean>;
    }
    class EditionOffreService implements IEditionOffreService {
        private $q;
        private editionOffreService;
        private refusAssuranceService;
        private habilitationService;
        private mwNotificationService;
        private popinService;
        private parametrageAppicatifService;
        private dossierService;
        private saisiesComplementairesService;
        private impressionService;
        private dossierSchemaService;
        private notarisationService;
        private anomalieService;
        static $inject: string[];
        private _listeDocumentsAImprimer;
        constructor($q: ng.IQService, editionOffreService: ICBusiness.Services.Edition.IEditionOffreService, refusAssuranceService: ICBusiness.Services.RefusAssurances.IRefusAssurancesService, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService, mwNotificationService: MyWay.UI.IMwNotificationService, popinService: ICCreditComponents.Services.IPopinService, parametrageAppicatifService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifService, dossierService: ICBusiness.Services.Dossier.IDossierService, saisiesComplementairesService: ICBusiness.Services.SaisiesComplementaires.ISaisiesComplementairesService, impressionService: ICBusiness.Services.ImpressionService.IImpressionService, dossierSchemaService: ICBusiness.Services.Dossier.IDossierShemaService, notarisationService: Services.INotarisationService, anomalieService: Services.IAnomalieService);
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
        private continuerActionEditionOffre(donneesDossier, dateInstruction, codeEtablissement, idProjet, numeroInterneEdsAgent, goToEdition);
        /**
         * Gestion du contrôle avant edition de l'offre en gérant le forcage des anomalies bloquante SI l'agent a pu forcer ces anomalies OU s'il y en avait
         * @param donneesDossier
         * @param codeEtablissement
         * @param dateTraitement
         * @param numeroInterneEdsAgent
         */
        private traiterControleAvantEditionOffre(donneesDossier, codeEtablissement, dateTraitement, numeroInterneEdsAgent);
        /**
         *  Méthode pour traiter les éventuelles données complémentaires (i.e. affichage d'une popin si nécessaire)
         *
         * @param dossier objet ICBusiness.Models.Dossier.IDossierSchema
         * @param idDocument identifiant théorique du document
         * @param traiterNotices booléen pour savoir s'il faut traiter les notices d'assurance
         * @param libelleDocument libellé du document
         */
        traiterSaisieDonneesComplementaires(dossier: ICBusiness.Models.Dossier.IDossierSchema, idDocument: string, libelleDocument: string, traiterNotices: boolean): ng.IPromise<boolean>;
        /**
         * Méthode qui permet d'ouvrir la popin de saisie des données complémentaires
         * @param idDossier identifiant du dossier en instruction
         * @param libelleDocument libellé du document
         * @param donneesComplementaires données complémentaires à traiter
         */
        private ouvrirPopinDonneesComplementaires(idDossier, idDocument, libelleDocument, donneesComplementaires);
        /**
         * Méthode pour imprimer un document
         *
         * @param idDossier identifiant du dossier en instruction
         * @param infoDocument information sur le document
         * @param paramEditiques paramétrage de l'éditique
         * @param forceControleGestion booléen pour le forçage des contrôles au passage en gestion
         * @param forceControleEdition booléen pour le contrôle à l'édition de l'offre
         * @param readOnly booléen optionnel pour savoir si le dossier est ouvert en lecture seule ou s'il est édité depuis la page d'émission de document
         */
        imprimerDocument(idDossier: string, infoDocument: ICBusiness.Models.EditionOffre.IInfoDocument, paramEditiques: any[], forceControleGestion: boolean, forceControleEdition?: boolean, readOnly?: boolean): ng.IPromise<ICBusiness.Models.Impression.IImpression>;
        /**
         * Méthode pour renseigner le libellé d'un flux de document si l'édition par le socle ne l'a pas généré
         * @param libelle libellé
         * @param data objet ICBusiness.Models.Impression.IImpression
         */
        private alimenteLibelleDocuments(libelle, data);
        /**
         * Traitement du retour de l'édition d'un document
         * @param data objet retour de l'édition du document ICBusiness.Models.Impression.IImpression
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument pour lequel l'édition a été demandée
         */
        private traitementRetourEdition(data, doc);
        /**
         * Traitement du retour d'impression si aucun document n'est édité
         * @param data données d'impression
         * @param doc
         */
        private traitementRetourEditionSiAucunDocument(data, doc);
        /**
         * Traitement du retour d'impression si au moins un document n'est pas édité
         * @param data données d'impression
         */
        private traitementRetourEditionSiAuMoinsUnDocument(data);
        /**
         * Méthode pour créer le message de non impression de documents
         * @param data données d'impression
         */
        private creerMessageDocsPasImprimes(data);
        /**
         * Méthode pour savoir si un des documents n'a pas été édité
         * @param data données d'impression
         */
        private estAvecDocumentPasEdite(data);
        /**
         * Méthode pour savoir si tous les documents n'ont pas été édités
         * @param data données d'impression
         */
        private estToutDocumentPasEdite(data);
        /**
         * Méthode pour ajouter un document à la liste des documents à éditer via l'ActiveX
         * @param data objet ICBusiness.Models.Impression.IImpression contenant de 1 à N documents
         */
        private alimenteListeDocuments(data);
        /**
         * Méthode pour imprimer la liste des documents de l'offre
         * Remarque : Cette méthode permet l'affichage de l'éventuelle 'popin' de saisie des données complémentaires
         *
         * @param idDossier identifiant du dossier en instruction
         * @param listeDocuments liste des documents
         * @param forceControleGestion
         * @param forceControleEdition
         * @param traiterNotices booléen pour savoir s'il faut traiter les notices d'assurance
         * @param readonly booléen optionnel pour dossier ouvert en lecture seule
         */
        imprimerListeDocumentsOffre(codeEtablissement: string, idDossier: string, listeDocuments: ICBusiness.Models.EditionOffre.IInfoDocument[], forceControleGestion: boolean, forceControleEdition: boolean, traiterNotices: boolean, readonly?: boolean): ng.IPromise<void>;
        /**
         * Méthode pour traiter séquentiellement la liste des documents
         * @param dossier
         * @param listeDocuments
         * @param index
         * @param forceControleGestion
         * @param forceControleEdition
         * @param traiterNotices booléen pour savoir s'il faut traiter les notices d'assurance
         * @param readonly booléen pour dossier ouvert en lecture seule
         */
        private traitementSequentiel(codeEtablissement, dossier, listeDocuments, index, forceControleGestion, forceControleEdition, traiterNotices, readonly);
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
    class FilterService {
        private filterByFinalite(listePiecoModele, codeProcessus);
        private filterByConformite(listePiecoModele, codeStatut);
        filter(listePiecoModele: ICBusiness.Models.IPiecoModele[], codeProcessus?: string, codeStatut?: number): ICBusiness.Models.IPiecoModele[];
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
        controleAvantDecision(context: ICBusiness.Models.Common.IContext): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        /** Dernier retour de controle effecutué */
        controleDecision: ICBusiness.Models.Dossier.IControleDossier;
    }
    class PrendreDecisionPreteur implements IPrendreDecisionPreteur {
        private controleSyntheseService;
        private popinService;
        private $rootScope;
        private habilitationService;
        private editionOffreService;
        private dossierService;
        controleDecision: ICBusiness.Models.Dossier.IControleDossier;
        private _forcageControle;
        static $inject: string[];
        constructor(controleSyntheseService: ICCreditComponents.Controle.IControleSyntheseService, popinService: ICCreditComponents.Services.IPopinService, $rootScope: ng.IScope, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService, editionOffreService: ICBusiness.Services.Edition.IEditionOffreService, dossierService: ICBusiness.Services.Dossier.IDossierService);
        controleAvantDecision(context: ICBusiness.Models.Common.IContext): ng.IPromise<ICBusiness.Models.Dossier.IControleDossier>;
        private traitementAnomaliesBloquantes(context, controles);
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
        validerRemiseOffre(idDossier: string, dateRemise: string, naviguerVers?: () => void): ng.IPromise<boolean>;
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
        validerRemiseOffre(idDossier: string, dateRemise: string, naviguerVers?: () => void): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface IRendreDossierService {
        openModaleRendreDossier(lowLevelParams: ICBusiness.Models.Common.ILowLevelParams, navigationService: ICCreditComponents.Navigation.INavigationCreditService): ng.IPromise<void>;
    }
    class RendreDossierService implements IRendreDossierService {
        private popinService;
        static $inject: string[];
        constructor(popinService: ICCreditComponents.Services.IPopinService);
        openModaleRendreDossier(lowLevelParams: ICBusiness.Models.Common.ILowLevelParams, navigationService: ICCreditComponents.Navigation.INavigationCreditService): ng.IPromise<void>;
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
        verifierEtatCEGC(dateTraitement: string, codeEtab: string, idDossier: string, avecInterval: boolean, navigationService: Navigation.INavigationCreditService, isCurrentPageReadOnly: () => boolean, fromOuvertureDossier?: boolean): ng.IPromise<boolean>;
        onRetourSaccefUpdated(eventHandler: () => void): void;
    }
    class SaccefService implements ISaccefService {
        private garantieService;
        private $q;
        private parametreApplicatifService;
        private $interval;
        private popinService;
        private avisService;
        private anomalieService;
        static $inject: string[];
        constructor(garantieService: ICBusiness.Services.Garanties.IGarantiesService, $q: ng.IQService, parametreApplicatifService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifService, $interval: ng.IIntervalService, popinService: ICCreditComponents.Services.IPopinService, avisService: ICBusiness.Services.Avis.IAvisService, anomalieService: Services.IAnomalieService);
        transmissionSaccef(dateTraitement: string, codeEtab: string, idDossier: string, idPlanFinancement: string): ng.IPromise<boolean>;
        private _retourSaccefUpdatedHanlders;
        /**
         * Interroger le back pour vérifier un possible résultat CEGC
         * Retourne un boolean indiquant si on a été redirigé vers la page gestion admin
         * @param dateTraitement
         * @param codeEtab
         * @param idDossier
         * @param avecInterval
         * @param navigationService
         * @param fromOuvertureDossier
         */
        verifierEtatCEGC(dateTraitement: string, codeEtab: string, idDossier: string, avecInterval: boolean, navigationService: Navigation.INavigationCreditService, isCurrentPageReadOnly: () => boolean, fromOuvertureDossier?: boolean): ng.IPromise<boolean>;
        onRetourSaccefUpdated(eventHandler: () => void): void;
        private onRetourSaccefUpdatedRaiseEvent();
        /**
         * Affiche une popin de confirmation pour la prise en compte de la réponse à la CEGC
         * Retourne true si le traitement s'est effectué correctement pour indiquer qu'il va falloir rediriger vers la page gestionAdminSectionGaranties (ouverture de dossier)
         * @param idDossier
         * @param navigationService
         * @param fromOuvertureDossier
         */
        private afficherPopinReponseCEGC(idDossier, navigationService, fromOuvertureDossier, isReadOnly);
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
    interface ISmacService {
        /**
         * Synchronise avec SMAC et affiche les anomalies s'il y en a.
         * @param identifiantDossier
         * @param identifiantPlanFinancement
         * @param miseAJourDossierSMAC
         * @param miseAJourDossierNEO
         * @param uIDSmac
         * @returns contient des anomalies bloquantes
         */
        synchroniserAvecSmac(identifiantDossier: string, identifiantPlanFinancement: string, miseAJourDossierSMAC: boolean, miseAJourDossierNEO: boolean, uIDSmac: string): ng.IPromise<boolean>;
    }
    class SmacService implements ISmacService {
        private $q;
        private smacService;
        private popinService;
        static $inject: string[];
        constructor($q: ng.IQService, smacService: ICBusiness.Services.Financement.ISmacService, popinService: ICCreditComponents.Services.IPopinService);
        synchroniserAvecSmac(idDossier: string, idPlanFinancement: string, miseAJourDossierSMAC: boolean, miseAJourDossierNEO: boolean, uIDSmac: string): ng.IPromise<boolean>;
        private constructModaleDonneesAnoSmac(anos);
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
        transfertBackOffice(codeEtab: string, idDossier: string, dateTraitement: string, idElementStructureInstruction: string, numeroInterneEds: string, afficherBtnAnnuler: boolean): ng.IPromise<boolean>;
        transfertBackOfficeAuto(codeEtab: string, idDossier: string, dateTraitement: string, modeEdition: number, codeApplication: number, codeProcessusInstruction: string): ng.IPromise<ICCreditComponents.Modeles.ITransfertBo>;
    }
    class TransfertBoService implements ITransfertBoService {
        private $q;
        private popinService;
        private anomalieService;
        private transfertService;
        private parametrageApplicatifService;
        static $inject: string[];
        constructor($q: ng.IQService, popinService: IPopinService, anomalieService: Services.IAnomalieService, transfertService: ICBusiness.Services.Transfert.ITransfertService, parametrageApplicatifService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifService);
        /**
         * Transfert back office
         *
         * @param codeEtab code établissement
         * @param idDossier identifiant du dossier en instruction
         * @param dateTraitement date de traitement
         * @param afficherBtnAnnuler booléen pour affichage/masquage du bouton annuler
         */
        private transfererAuBackOffice(codeEtab, idDossier, dateTraitement, afficherBtnAnnuler);
        /**
         * Transfert back office
         *
         * @param codeEtab code établissement
         * @param idDossier identifiant du dossier en instruction
         * @param dateTraitement date de traitement
         * @param idElementStructureInstruction
         * @param numeroInterneEds
         * @param afficherBtnAnnuler booléen pour affichage/masquage du bouton annuler
         */
        transfertBackOffice(codeEtab: string, idDossier: string, dateTraitement: string, idElementStructureInstruction: string, numeroInterneEds: string, afficherBtnAnnuler: boolean): ng.IPromise<boolean>;
        /**
         * Méthode pour faire un transfert automatique au back-office pour l'application IMMO en mode d'instruction agence
         * @param codeEtab code établissement
         * @param idDossier identifiant du dossier en instruction
         * @param dateTraitement date de traitement
         * @param modeEdition mode d'édition de l'offre (papier/électronique/industrialisation)
         * @param codeApplication code de l'application
         */
        transfertBackOfficeAuto(codeEtab: string, idDossier: string, dateTraitement: string, modeEdition: number, codeApplication: number, codeProcessusInstruction: string): ng.IPromise<ICCreditComponents.Modeles.ITransfertBo>;
    }
}

declare namespace ICCreditComponents.Services {
    interface ITransfertConformiteService {
        transfertConformite(codeEtab: string, idDossier: string, dateTraitement: string, idElementStructureInstruction: string, numeroInterneEds: string): ng.IPromise<boolean>;
    }
    class TransfertConformiteService implements ITransfertConformiteService {
        private popinService;
        private transfertService;
        private anomalieService;
        static $inject: string[];
        constructor(popinService: IPopinService, transfertService: ICBusiness.Services.Transfert.ITransfertService, anomalieService: Services.IAnomalieService);
        /**
         * Transfert pour conformité
         *
         * @param codeEtab code établissement
         * @param idDossier identifiant du dossier en instruction
         * @param dateTraitement date de traitement
         * @param idElementStructureInstruction
         * @param numeroInterneEds
         */
        transfertConformite(codeEtab: string, idDossier: string, dateTraitement: string, idElementStructureInstruction: string, numeroInterneEds: string): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface ITransfertDecisionService {
        transfertDecision(codeEtab: string, idDossier: string, dateTraitement: string, lancerControleAuTransfert: boolean): ng.IPromise<boolean>;
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
        transfertDecision(codeEtab: string, idDossier: string, dateTraitement: string, lancerControleAuTransfert: boolean): ng.IPromise<boolean>;
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
        private loaderService;
        private popinService;
        private repriseDossierService;
        private dossierService;
        private lisaService;
        private traceService;
        static $inject: string[];
        constructor(loaderService: ILoaderService, popinService: IPopinService, repriseDossierService: IRepriseDossierService, dossierService: ICBusiness.Services.Dossier.IDossierService, lisaService: ICCommon.Services.IlisaService, traceService: Services.ITraceService);
        transfererDossierDansNeo(idDossier: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        private debrancherVersNeo(idDossier, authentificationInfos);
    }
}

declare namespace ICCreditComponents.Services {
    interface IVerifierEligibiliteService {
        openModaleVerifierEligibilite(identifiantDossier: string, coutTotal: number): void;
    }
    class VerifierEligibiliteService implements IVerifierEligibiliteService {
        private popinService;
        static $inject: string[];
        constructor(popinService: ICCreditComponents.Services.IPopinService);
        openModaleVerifierEligibilite(identifiantDossier: string, coutTotal: number): void;
    }
}

declare namespace ICCreditComponents.Directives.SyntheseFinanciere {
    import BusinessModel = ICBusiness.Models;
    class SyntheseFinanciereControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        synthese: BusinessModel.Emprunteur.ISyntheseFinanciere;
        codeDevise: string;
        /** Pie Chart Data */
        private chartColors;
        static $inject: string[];
        constructor($scope: ng.IScope, chartService: ICCreditComponents.Services.IChartService);
        momentVeriteClass: string;
    }
}

declare namespace ICCreditComponents.Directives.SyntheseFinanciere {
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
         * Lance la récupération du contexte d'édition avec un loader si cela est trop long
         * @param idDossier
         */
        getContextEditionAvecLoader(idDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContextEditionDocument>;
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
        /**
         * Définit l'action à éxecuter avant l'ouverture du contexte d'édition
         * @param promise
         */
        setActionBeforeOpenPopinContextEdition(promiseDelegate?: () => ng.IPromise<boolean>): void;
    }
    class ContexteEditionService implements IContexteEditionService {
        private $q;
        private contexteEditionService;
        private popinService;
        private loaderService;
        contexteEdition: ICBusiness.Models.Edition.IContextEditionDocument;
        gettingContext: boolean;
        private _beforeOpenPopinContexteEdition;
        private contextEditionUpdatedHanlders;
        static $inject: string[];
        constructor($q: ng.IQService, contexteEditionService: ICBusiness.Services.Edition.IContexteEditionService, popinService: Services.IPopinService, loaderService: ICCreditComponents.Services.ILoaderService);
        /**
         * Récupération du contexte edition
         * @param idDossier
         */
        getContextEdition(idDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContextEditionDocument>;
        /**
         * Lance la récupération du contexte d'édition avec un loader si cela est trop long
         * @param idDossier identifiant du dossier en instruction
         */
        getContextEditionAvecLoader(idDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContextEditionDocument>;
        onContextEditionUpdated(eventHandler: () => void): void;
        private contexteEditionUpdatedRaiseEvent();
        setActionBeforeOpenPopinContextEdition(promiseDelegate?: () => ng.IPromise<boolean>): void;
        openPopinContexteEdition(idDossier: string): ng.IPromise<void>;
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
        MRH = 9,
    }
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
        onControlerCompletudeEtDecisionDone(eventHandler: () => void): void;
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
        /**
         * Mise à jour des propriétés de service avec un résultat d'erreurs
         * @param cd
         */
        setControleResult(cd: ICBusiness.Models.Dossier.IControleDossier): ICBusiness.Models.Dossier.IControleDossier;
    }
    class ControleSyntheseService {
        private $q;
        private $timeout;
        private controleDossierService;
        private labelService;
        private contextService;
        private mwNotificationService;
        private $rootScope;
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
        private _onControlerCompletudeEtDecisionEventhandler;
        private syntheseDisplayed;
        controleEnCours: boolean;
        controleEffectue: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, controleDossierService: ICBusiness.Services.Dossier.IControleDossierService, labelService: Services.IlabelService, contextService: ICCommon.Services.IProcessusContextService, mwNotificationService: MyWay.UI.IMwNotificationService, $rootScope: ng.IScope);
        /**
         * Add a delegate function to be executed before controle
         * @param delegate
         */
        onBeforeControle(delegate: () => ng.IPromise<boolean>): void;
        onControlerCompletudeEtDecisionDone(eventHandler: () => void): void;
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
        setControleResult(cd: ICBusiness.Models.Dossier.IControleDossier): ICBusiness.Models.Dossier.IControleDossier;
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

declare namespace ICCreditComponents.Directives {
    class BoutonListeActionsDirectiveControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        settings: IActionDirectiveSettings;
        open: boolean;
        constructor();
        visibleButtons: () => IActionButton[];
        btnMultipleHasOneVisible: boolean;
        firstVisibleButton: IActionButton;
        onDropdownChange(): void;
        /** fonction pour satisfaire le linter */
        doNothing(): void;
        getButtonLabel(b: IActionButton): string;
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    interface IActionDirectiveSettings {
        hidden: () => boolean;
        id: string;
        label: string | (() => string);
        cssClass?: string;
        listButtons: IActionButton[];
    }
    interface IActionButton {
        id: string;
        label: string | (() => string);
        enable: () => boolean;
        visible: () => boolean;
        action: (button: IActionButton) => void;
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
    interface IDevisEcoPtzDirectiveInput {
        context: ICBusiness.Models.Common.IContext;
        navigationService: Navigation.INavigationCreditService;
        isLoading: boolean;
        isVisible: boolean;
    }
    class DevisEcoPtzDirectiveControleur {
        private appelSGFGASService;
        private creditService;
        private popinService;
        private loaderService;
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        data: IDevisEcoPtzDirectiveInput;
        btnRemplirDevisEcoPtz: Forms.IInputSettings;
        btnCreerDossierEcoPtz: Forms.IInputSettings;
        static $inject: string[];
        constructor(appelSGFGASService: ICBusiness.Services.Financement.IAppelSGFGASService, creditService: ICBusiness.Services.Financement.ICreditService, popinService: ICCreditComponents.Services.IPopinService, loaderService: ICCreditComponents.Services.ILoaderService, $timeout: ng.ITimeoutService);
        remplirDevisEcoPtz(): void;
        creerDossierEcoPtz(): void;
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    class FooterDirectiveControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        settings: IFooterDirectiveSettings;
        /** Bouton plus d'action affiché si plus de 4 boutons présents */
        private btnPlusActions;
        listeButtons: IFooterButton[];
        constructor();
        isBtnMulti: (btn: IFooterButton) => boolean;
        btnMultipleHasOneVisible: (btn: IFooterMultiButton) => boolean;
        getFirstMultiButtonVisible: (btn: IFooterMultiButton) => IFooterSimpleButton;
        getBtnClassStyle(btn: IFooterButton): string;
        private isPrimary(btn);
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
        isDebranchement?: boolean;
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
        isPvh: boolean;
        isTransmisExpert: boolean;
        close(): void;
        openContexteEdition(): void;
        openPreference(): void;
    }
}

declare namespace ICCreditComponents.Directives {
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
         * Show the unknown progression loader until the end of the promise
         * @param text to show on loader
         * @param promise
         * @param duration waiting time before stop loading
         * @param delay default 200
         * @param fullScreen default false
         */
        startLoadingPromiseForTime<T>(promise: ng.IPromise<T>, timeToStopLoading: number, text?: string, delay?: number, fullScreen?: boolean): ng.IPromise<T>;
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
        startLoadingPromiseForTime<T>(promise: ng.IPromise<T>, timeToStopLoading: number, text: string, delay?: number, fullScreen?: boolean): ng.IPromise<T>;
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
        afficherDNC: boolean;
    }
    class PiecesControlesControleur {
        private piecoService;
        private dossierService;
        private dncService;
        private parametrageApplicatifService;
        private mwNotificationService;
        private $scope;
        private $q;
        private popinService;
        private impressionService;
        private totemService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        piecoParams: IPiecoDirectiveParams;
        idBlocPiecesClient: string;
        idBlocPiecesAgence: string;
        idBlocControles: string;
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
        private piecoData;
        private piecoDataInitiale;
        toutCocherClient: IPiecesControlesToutCocherControleurParams;
        toutCocherAgence: IPiecesControlesToutCocherControleurParams;
        toutCocherControle: IPiecesControlesToutCocherControleurParams;
        static $inject: Array<string>;
        constructor(piecoService: ICBusiness.Services.Pieco.IPiecoService, dossierService: ICBusiness.Services.Dossier.IDossierService, dncService: ICBusiness.Services.IDNCService, parametrageApplicatifService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifService, mwNotificationService: MyWay.UI.IMwNotificationService, $scope: ng.IScope, $q: ng.IQService, popinService: Services.PopinService, impressionService: ICBusiness.Services.ImpressionService.IImpressionService, totemService: ICCreditComponents.Navigation.TotemCreditService);
        private initParamsToutCocher();
        hasSomePieces(): boolean;
        hasSomePiecesClients(): boolean;
        hasSomePiecesAgences(): boolean;
        hasSomeControles(): boolean;
        /**
         * renvoie true s'il y a strictement plus d'un type de pièce (utile pour le bouton imprimer du footer)
         * On affiche "imprimer tout" s'il y a au moins 2 types de pièces
         * exemple : pièces clients et agences --> affiche bouton multi avec "imprimer tout", "imprimer pièces clients", "imprimer pièces agence"
         * uniquement pièces clients --> affiche "imprimer pièces clients"
         */
        hasMoreThanOneTypeOfPieces(): boolean;
        private refreshPiecesAcquisition();
        /**
         * Imprimer un document en fonction du type de document
         *
         * @param typeDoc
         */
        imprimer(typePiece: ICBusiness.Enum.EnumTypePiece): ng.IPromise<void>;
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
        getClientEnum(): ICBusiness.Enum.EnumTypePiece;
        getAgenceEnum(): ICBusiness.Enum.EnumTypePiece;
        getControleEnum(): ICBusiness.Enum.EnumTypePiece;
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
         * Mise à jour des données pieces et contrôles
         */
        enregistrer(): ng.IPromise<void>;
        afficherErreursDossierNumerique(): boolean;
    }
}

declare module ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Forms {
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
    class PopinErrorController<T> {
        private $modalInstance;
        private errorService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        /**
         * Transform une Error JS en objet car celui-ci ne peux pas être JSON.stringify
         * @param obj
         */
        getdetails(obj: any): Object;
        errors: IErrorDescritption<Object>[];
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, errorService: IPopinErrorService);
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
        listErrors: IErrorDescritption<Object>[];
    }
    interface IErrorDescritption<T> {
        libelle: string;
        error: T;
    }
    class PopinErrorService implements IPopinErrorService {
        private popinService;
        private $q;
        listErrors: IErrorDescritption<Object>[];
        private isOpen;
        static $inject: string[];
        constructor(popinService: ICCreditComponents.Services.IPopinService, $q: ng.IQService);
        open<T>(libelle: string, error: T): ng.IPromise<void>;
    }
}

declare module ICCreditComponents {
    class ErrorHandler {
        static $inject: string[];
        constructor(exceptionService: Erreur.Services.ExceptionService, logger: ICCommon.Logger.ILogger);
        static exceptionService: Erreur.Services.ExceptionService;
        static logger: ICCommon.Logger.ILogger;
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
        private static displayException(error, fatal, description?);
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
        displayException(exception: Erreur.Modeles.ICreditInstructionError, fatal?: boolean): void;
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
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        _address: MyWayDqeAdresse.Adresse;
        private _onLoad;
        loading: boolean;
        address: IAddress;
        name: string;
        settings: IAddressSettings;
        change: <T>() => T;
        static $inject: string[];
        constructor($scope: ng.IScope, adresseService: MyWayDqeAdresse.AdresseService, $timeout: ng.ITimeoutService);
        private _loaderpromise;
        private startLoading;
        private stopLoading;
        private nombrePull;
        private pullAddress();
        private libelleInseeLocaliteWithArrondissementSubstring();
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
        noFormGroup: boolean;
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
    class InputRadioControleur<T extends string | number> extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        isInline: boolean;
        model: T;
        options: ICBusiness.Models.Common.ICodeLabel<T>[];
        prefixId: string;
        noFormGroup: boolean;
        listStyleClass: string;
        readOnlyModel: string;
        constructor($timeout: ng.ITimeoutService);
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
        /** Masque la colonne des ids dans le tableau */
        masquerIdAno?: boolean;
    }
    class ModaleAnomalieControleur {
        private $q;
        private $modalInstance;
        private $scope;
        data: ICCreditComponents.Modales.IModalAnomalieControleurData;
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
         * Libellé du bouton fermer/annuler
         */
        libelleBtnFermerAnnuler: string;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($q: ng.IQService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, data: ICCreditComponents.Modales.IModalAnomalieControleurData);
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
         * Méthode pour la création des libellées des sections
         * NB: la méthode traitementListeAlertesAnomalies doit être exécutée avant.
         */
        creationLibellesSection(): void;
        /**
         * Méthode pour créer les données de pagination
         */
        creationPagination(): void;
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
    /**
     * Interface for modal window data
     * Note: the compliance mode is deduced from the typology code of the notice
     */
    interface IModalAvisControleurData {
        avis: ICBusiness.Models.Avis.IAvis;
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
        conformiteOptions: ICBusiness.Models.Common.ICodeLabel<boolean>[];
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
        rgpdMessage: string;
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
    interface IModaleDetailsEligibiliteDatas {
        identifiantDossier: string;
    }
    class ModaleDetailsEligibiliteControleur {
        private $modalInstance;
        resultatsEligibilite: ICBusiness.Models.Dossier.IResultatEligibilite[];
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, verifierEligibiliteService: ICBusiness.Services.Dossier.IVerifierEligibilite, modalData: Modales.IModaleDetailsEligibiliteDatas);
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
    /** Interface des donnees en entrée de la pop-in */
    interface IModaleRendreDossierData {
        lowLevelParams: ICBusiness.Models.Common.ILowLevelParams;
        navigationService: ICCreditComponents.Navigation.INavigationCreditService;
    }
    class ModaleRendreDossierControleur {
        private $modalInstance;
        private $q;
        private data;
        private popinService;
        private rendreDossierService;
        private applicationService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        isLoading: boolean;
        listeAnomalies: ICBusiness.Models.Common.IAnomalieLecture[];
        isRendu: boolean;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $q: ng.IQService, data: IModaleRendreDossierData, popinService: ICCreditComponents.Services.IPopinService, rendreDossierService: ICBusiness.Services.Transfert.IRendreDossierService, applicationService: ICCreditComponents.Services.IApplicationService);
        annuler(): void;
        rendreDossier(): void;
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

declare namespace ICCreditComponents.Modales {
    interface IModalAnnulationSagControleurData {
        idDossier: string;
        estFait: boolean;
        listeAnomalie: ICBusiness.Models.Common.IAnomalieLecture[];
    }
    class ModalAnnulationSagControleur {
        private $modalInstance;
        private data;
        private signatureElectroniqueService;
        private mwNotificationService;
        private idDossier;
        private loading;
        listeMotifs: ICBusiness.Models.Common.ICodeLabel<number>[];
        motifChoisi: ICBusiness.Models.Common.ICodeLabel<number>;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: ICCreditComponents.Modales.IModalAnnulationSignElecControleurData, signatureElectroniqueService: ICBusiness.Services.SignatureElectronique.ISignatureElectroniqueService, mwNotificationService: MyWay.UI.IMwNotificationService);
        static parametres: ICCommon.Controleur.IControleurParametre;
        valider(): ng.IPromise<void>;
        annuler(): void;
    }
}

declare namespace ICCreditComponents.Modales {
    interface IModalAnnulationSedControleurData {
        idDossier: string;
        estFait: boolean;
        listeAnomalie: ICBusiness.Models.Common.IAnomalieLecture[];
    }
    class ModalAnnulationSedControleur {
        private $modalInstance;
        private data;
        private signatureElectroniqueService;
        private mwNotificationService;
        private idDossier;
        private loading;
        listeMotifs: ICBusiness.Models.Common.ICodeLabel<number>[];
        motifChoisi: ICBusiness.Models.Common.ICodeLabel<number>;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: ICCreditComponents.Modales.IModalAnnulationSignElecControleurData, signatureElectroniqueService: ICBusiness.Services.SignatureElectronique.ISignatureElectroniqueService, mwNotificationService: MyWay.UI.IMwNotificationService);
        static parametres: ICCommon.Controleur.IControleurParametre;
        valider(): ng.IPromise<void>;
        annuler(): void;
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
        private serviceAgentExtended;
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
        private codeEtablissment;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: ICCreditComponents.Modales.IModalTransfertBoControleurData, transfertBoService: ICBusiness.Services.TransfertBo.ITransfertBoService, transfertService: ICBusiness.Services.Transfert.ITransfertService, edsService: ICBusiness.Services.Eds.IEdsService, mwNotificationService: MyWay.UI.IMwNotificationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        validerTransfertBackOffice(): ng.IPromise<void>;
        /**
         * Méthode de traitement d'éventuelles anomalies
         * @param liste liste des anomalies
         * @returns true si pas d'anomalies
         */
        private traiterAnomalies(anomalies);
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
         *
         */
        private referenceEds();
        /**
         * Récupération de la référence EDS de l'agent sélectionné sur  7 caractères
         */
        private referenceAgent();
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
        /**  */
        lancerControleAuTransfert: boolean;
    }
    /**
     * Classe pour le transfert pour avis ou décision.
     */
    class ModaleTransfertDecisionControleur {
        private $modalInstance;
        private $scope;
        private $q;
        private data;
        private mwNotificationService;
        private transfertDecisionService;
        private decisionService;
        private avisService;
        private transfertService;
        typesEds: ICBusiness.Models.TypeEds.ITypeEds[];
        codeEtablissement: string;
        idDossier: string;
        dateTraitement: string;
        agentSelectionne: MyWay.Model.Agent;
        avis: ICBusiness.Models.Avis.IAvis;
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
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, $q: ng.IQService, data: ICCreditComponents.Modales.IModalTransfertDecisionControleurData, mwNotificationService: MyWay.UI.IMwNotificationService, transfertDecisionService: ICBusiness.Services.TransfertDecision.ITransfertDecisionService, decisionService: ICBusiness.Services.Decision.IDecisionService, avisService: ICBusiness.Services.Avis.IAvisService, transfertService: ICBusiness.Services.Transfert.ITransfertService);
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
    class ModaleValiderRefusClientControleur {
        private $modalInstance;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        /**
         * To validate the popin
         */
        validerRefusClient(): void;
        /**
         * To cancel the notice entry
         */
        annuler(): void;
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
        private loaderService;
        private idDossier;
        listeMotifs: ICBusiness.Models.Common.ICodeLabel<number>[];
        motifChoisi: ICBusiness.Models.Common.ICodeLabel<number>;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: ICCreditComponents.Modales.IModalAnnulationSignElecControleurData, signatureElectroniqueService: ICBusiness.Services.SignatureElectronique.ISignatureElectroniqueService, loaderService: ICCreditComponents.Services.ILoaderService);
        static parametres: ICCommon.Controleur.IControleurParametre;
        valider(): ng.IPromise<void>;
        annuler(): void;
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
    interface INavigationCreditService extends ICCreditComponents.Navigation.INavigationUtils {
        goToRouteurStateImmo?: () => void;
        goToSynthese(): void;
        goToClient(): void;
        goToClientSectionIntervenant(): void;
        goToClientSectionRevenusCharge(): void;
        goToClientSectionSurfaceFinanciere(): void;
        goToClientSectionDroitsEpargneLogement(): void;
        goToProjet(): void;
        goToProjetSectionDescription(): void;
        goToProjetSectionMontant(): void;
        goToProjetSectionObjetGarantie(): void;
        goToProjetSectionGarants(): void;
        goToProjetSectionExpertise(): void;
        goToProjetSectionReamenagement?(): void;
        goToProjetSectionObjetFinance?(): void;
        goToFinancement(): void;
        goToFinancementSectionCritereRemboursement(): void;
        goToFinancementSectionProjet(): void;
        goToFinancementSectionDetailCredit(): void;
        goToFinancementSectionGarantie(): void;
        goToFinancementSectionAssurance(): void;
        goToPretReglemente(): void;
        goToPretReglementeSectionInformationsPtz(): void;
        goToGestionAdmin(): void;
        goToGestionAdminSectionAssurances(): void;
        goToGestionAdminSectionGaranties(): void;
        goToGestionAdminSectionModalites(): void;
        goToGestionAdminSectionRedacteurActe(): void;
        goToGestionAdminSectionAvis(): void;
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
        goToMajAdminSectionEcoPTZ(): void;
        goToPiecesEtControles(): void;
        goToPiecesEtControlesSectionClient(): void;
        goToPiecesEtControlesSectionAgence(): void;
        goToPiecesEtControlesSectionControles(): void;
        goToConformiteDossier(): void;
        goToMultiRisqueHabitation(): void;
        goToHistorique(): void;
        goToSuiviEditions(): void;
        goToEditionDocuments(): void;
        goToBlocNotes(): void;
        goToEmissionDocuments(): void;
        goToEmissionDocumentsSectionDocumentsClients(): void;
        goToEmissionDocumentsSectionFicheSuiveuse(): void;
        goToEmissionDocumentsSectionRefusAssuranceExterne(): void;
        fermerApplication(close: () => ng.IPromise<void>): void;
        fermerApplicationEnErreur(): void;
        transfererDansNeo(): void;
        goToChoixEditionDemandeCredit(): void;
        goToEditionDemandeCreditSag(): void;
        goToValoriseSgfgas?(creditInterneEcoPtz: ICBusiness.Models.Financement.ICreditInterne, produitFinancier: ICBusiness.Models.Financement.IProduitFinancier): void;
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
    interface INavigationUtils {
        /**
         * Add a delegate function to be executed before navigation
         * @param delegate if delegate result is falsy, navigation we'll be cancelled
         */
        onNavigationStarts<T>(delegate: () => ng.IPromise<boolean>): void;
        /**
         * Permet de set le nouveau mode d'ouverture du dossier qui sera prit en compte lors de la navigation suivante
         * @param mode facultatif car permet de reset la donnée à "undefined"
         */
        setModeOuvertureDossier(mode?: ICBusiness.Enum.ModeOuvertureDossier): void;
    }
    abstract class NavigationUtils {
        private $q;
        private popinService;
        protected loaderService: Services.ILoaderService;
        private _modeOuverture;
        setModeOuvertureDossier(mode?: ICBusiness.Enum.ModeOuvertureDossier): void;
        /**
         * Permet de récupérer le mode d'ouverture de dossier à set dans le contexte
         * Utilisé pour récupérer la valeur de _modeOuverture, qui peut être set via setModeOuvertureDossier(...)
         * Si la valeur est "undefined", on récupère la valeur de session passé en paramètre
         * @param sessionMode
         */
        protected getModeOuvertureDossier(sessionMode: ICBusiness.Enum.ModeOuvertureDossier): ICBusiness.Enum.ModeOuvertureDossier;
        constructor($q: ng.IQService, popinService: Services.IPopinService, loaderService: Services.ILoaderService);
        /** For now, just one action can be added. We'll see if we need more later on */
        protected actionsBeforeNavigation: () => ng.IPromise<boolean>;
        /**
         * Add a delegate function to be executed before navigation
         * @param delegate if delegate result is falsy, navigation we'll be cancelled
         */
        onNavigationStarts<T>(delegate: () => ng.IPromise<boolean>): void;
        /**
         * Checks if navigation is allowed
         * @param navHandler function containing the navigation logic
         * @returns navHandler if navigation is allowed or rejects
         */
        protected controlNavigation(navHandler: () => void): ng.IPromise<() => void>;
        private canNavigate();
        /**
         * Lance une popin de chargement si le traitement est trop long
         * @param promise
         * @param navigationEntreSPA permet d'indiquer si on arrête le loader > false pour les débranchements LISA
         */
        protected handleLoader<T>(promise: ng.IPromise<T>, navigationEntreSPA?: boolean): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemCreditService {
        private $timeout;
        private labelService;
        private etatDossierService;
        private controleSyntheseService;
        private paramApplicatifRemanentService;
        private loggerService;
        private preferenceService;
        private suiviEditionsService;
        private habilitationService;
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
        constructor($timeout: ng.ITimeoutService, labelService: Services.IlabelService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, controleSyntheseService: Controle.IControleSyntheseService, paramApplicatifRemanentService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifRemanentService, loggerService: ICCommon.Logger.FullLoggerService, preferenceService: ICBusiness.Services.Preferences.IPreferencesService, suiviEditionsService: ICBusiness.Services.SuiviEditions.ISuiviEditionsService, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService);
        /**
         * Mise en place des dépendances
         * @param navigationService
         * @param context
         */
        setUpDependencies(navigationService: INavigationCreditService, context: ICBusiness.Models.Common.IContext): void;
        majTotemPieceControle(piecoData: ICBusiness.Models.IPiecoData): void;
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
        accederDevisMRH(delegate: () => ng.IPromise<void>): void;
        refuserAccordPreteurAction(delegate: () => ng.IPromise<void>): void;
        calculerAction(delegate: () => ng.IPromise<void>): void;
        calculerActionEnabled(delegate: () => boolean): void;
        enregistrerSignatairesAction(delegate: () => ng.IPromise<void>): void;
        enregistrerSignatairesActionEnabled(delegate: () => boolean): void;
        enregistrerQuestionnairePTZAction(delegate: () => ng.IPromise<void>): void;
        enregistrerQuestionnairePTZActionEnabled(delegate: () => boolean): void;
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
        consulterInfosCompPtzAction(delegate: () => ng.IPromise<void>): void;
        consulterInfosCompPTZVisible(delegate: () => boolean): void;
        constituerLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        constituerLiasseElecVisible(delegate: () => boolean): void;
        constituerLiasseElecEnabled(delegate: () => boolean): void;
        constituerLiasseElecDemandeAction(delegate: () => ng.IPromise<void>): void;
        constituerLiasseElecDemandeVisible(delegate: () => boolean): void;
        constituerLiasseElecDemandeEnabled(delegate: () => boolean): void;
        modifierLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        modifierLiasseElecEnabled(delegate: () => boolean): void;
        modifierLiasseElecVisible(delegate: () => boolean): void;
        modifierLiasseElecDemandeAction(delegate: () => ng.IPromise<void>): void;
        modifierLiasseElecDemandeEnabled(delegate: () => boolean): void;
        modifierLiasseElecDemandeVisible(delegate: () => boolean): void;
        annulerLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        annulerLiasseElecEnabled(delegate: () => boolean): void;
        annulerLiasseElecVisible(delegate: () => boolean): void;
        annulerLiasseElecDemandeAction(delegate: () => ng.IPromise<void>): void;
        annulerLiasseElecDemandeEnabled(delegate: () => boolean): void;
        envoyerOffreElecAction(delegate: () => ng.IPromise<void>): void;
        envoyerOffreElecEnabled(delegate: () => boolean): void;
        envoyerDemandeElecAction(delegate: () => ng.IPromise<void>): void;
        envoyerDemandeElecEnabled(delegate: () => boolean): void;
        signerDemandeSagAction(delegate: () => ng.IPromise<void>): void;
        signerDemandeSagEnabled(delegate: () => boolean): void;
        consulterLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        editerOffrePapierAction(delegate: () => ng.IPromise<void>): void;
        editerOffreIndusAction(delegate: () => ng.IPromise<void>): void;
        constituerDossierIndusAction(delegate: () => ng.IPromise<void>): void;
        constituerDossierIndusEnabled(delegate: () => boolean): void;
        constituerDossierIndusVisible(delegate: () => boolean): void;
        constituerDossierIndusLibelle(delegate: () => string): void;
        annulerDossierIndusAction(delegate: () => ng.IPromise<void>): void;
        annulerDossierIndusVisible(delegate: () => boolean): void;
        editerOffreSignElecAction(delegate: () => ng.IPromise<void>): void;
        verifierEligibiliteAction(delegate: () => ng.IPromise<boolean>): void;
        editerDemandeCreditAction(delegate: () => ng.IPromise<void>): void;
        suiviDesEditionsAction(delegate: () => ng.IPromise<void>): void;
        suiviDesEditionsActionEnabled(delegate: () => boolean): void;
        ouvrirSyntheseFinancement(delegate: () => ng.IPromise<void>): void;
        ouvrirSyntheseFinancementEnabled(delegate: () => boolean): void;
        rendreDossierActionVisible(delegate: () => boolean): void;
        imprimerOptimisationAction(delegate: () => void): void;
        btnImprimerOptimisationVisible(delegate: () => boolean): void;
        transfererPourConformite(delegate: () => boolean): void;
        /**
         * renovoyer pour modification suite à transfert pour decision
         * @param action
         */
        renvoyerPourModificationAction(action: () => ng.IPromise<void>): void;
        renvoyerPourModificationEnabled(delegate: () => boolean): void;
        calculerBonificationVisible(delegate: () => boolean): void;
        calculerBonificationAfterAction(delegate: () => ng.IPromise<void>): void;
        onBeforeFooterAction(delegate: () => ng.IPromise<boolean>): void;
    }
    class FooterCreditService implements IFooterCreditService {
        private $q;
        private controleSyntheseService;
        private etatDossierService;
        private verifierEligibiliteService;
        private paramApplicatifRemanentService;
        private bonificationService;
        private transfertConformiteService;
        private applicationService;
        private transfertBoComponentsService;
        private loaderService;
        private prendreDecisionPreteurService;
        private transfertDecisionService;
        private decisionPreteur;
        private popinService;
        private rendreDossierService;
        private $route;
        private dossierService;
        private transfertBoService;
        private mwNotificationService;
        private contextEditionService;
        private industrialisationService;
        private queryMultiCallService;
        private _onBeforeFooterAction;
        private _annulerAccordPreteurAction;
        private _accederDevisMRH;
        private _refuserAccordPreteurAction;
        private _calculerAction;
        private _calculerActionEnabled;
        private _enregistrerSignatairesAction;
        private _enregistrerSignatairesActionEnabled;
        private _enregistrerQuestionnairePTZAction;
        private _enregistrerQuestionnairePTZActionEnabled;
        private _editerOffrePapierAction;
        private _editerOffreIndusAction;
        private _editerOffreSignElecAction;
        private _enregistrerSignatureAction;
        private _enregistrerSignatureActionEnabled;
        private _fermerDossierAction;
        private _imprimerOffreAction;
        private _imprimerOffreActionEnabled;
        private _miseAJourAdminAction;
        private _ouvrirSyntheseFinancement;
        private _ouvrirSyntheseFinancementEnabled;
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
        private _consulterInfosCompPtzAction;
        private _consulterInfosCompPTZVisible;
        private _constituerLiasseElecAction;
        private _constituerLiasseElecEnabled;
        private _constituerLiasseElecVisible;
        private _constituerLiasseElecDemandeAction;
        private _constituerLiasseElecDemandeEnabled;
        private _constituerLiasseElecDemandeVisible;
        private _modifierLiasseElecAction;
        private _modifierLiasseElecEnabled;
        private _modifierLiasseElecVisible;
        private _modifierLiasseElecDemandeAction;
        private _modifierLiasseElecDemandeEnabled;
        private _modifierLiasseElecDemandeVisible;
        private _annulerLiasseElecAction;
        private _annulerLiasseElecEnabled;
        private _annulerLiasseElecVisible;
        private _annulerLiasseElecDemandeAction;
        private _annulerLiasseElecDemandeEnabled;
        private _envoyerOffreElecAction;
        private _envoyerOffreElecEnabled;
        private _envoyerDemandeElecAction;
        private _envoyerDemandeElecEnabled;
        private _signerDemandeSagAction;
        private _signerDemandeSagEnabled;
        private _consulterLiasseElecAction;
        private _rendreDossierAction;
        private _rendreDossierActionVisible;
        private _renvoyerPourModificationAction;
        private _renvoyerPourModificationEnabled;
        private _calculerBonificationVisible;
        private _calculerBonificationAfterAction;
        private _transfererPourDecisionAction;
        private _transfererPourDecisionVisible;
        private _transfererPourConformiteVisible;
        private _transfererPourConformiteAction;
        private _transfererPourBoAction;
        private _constituerDossierIndusAction;
        private _constituerDossierIndusVisible;
        private _constituerDossierIndusEnabled;
        private _constituerDossierIndusLibelle;
        private _annulerDossierIndusAction;
        private _annulerDossierIndusVisible;
        private _verifierEligibiliteAction;
        private _editerDemandeCreditAction;
        private _suiviDesEditionsAction;
        private _suiviDesEditionsActionEnabled;
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
         * Delegate pour accéder au devis MRH
         * @param delegate
         */
        accederDevisMRH(delegate: () => ng.IPromise<void>): void;
        consulterInfosCompPtzAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Delegate pour activer l'action Enregistrer questionnairePTZ
         * @param delegate
         */
        enregistrerQuestionnairePTZActionEnabled(delegate: () => boolean): void;
        /**
         * Delegate pour l'action Enregistrer questionnairePTZ
         * @param delegate
         */
        enregistrerQuestionnairePTZAction(delegate: () => ng.IPromise<void>): void;
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
         * Delegate pour ouvrir la synthèse de financement immo
         * @param delegate
         */
        ouvrirSyntheseFinancement(delegate: () => ng.IPromise<void>): void;
        /**
         * Delegate pour activer l'action d'ouvrir la synthèse de financement immo
         * @param delegate
         */
        ouvrirSyntheseFinancementEnabled(delegate: () => boolean): void;
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
        renvoyerPourModificationAction(action: () => ng.IPromise<void>): void;
        renvoyerPourModificationEnabled(delegate: () => boolean): void;
        private _footerSettings;
        footerSettings: Directives.IFooterDirectiveSettings;
        /** Context applicatif sur lequel se base le service pour extraire les règles de gestion d'affichage du footer */
        private context;
        private navigationService;
        static $inject: string[];
        constructor($q: ng.IQService, controleSyntheseService: Controle.IControleSyntheseService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, verifierEligibiliteService: ICCreditComponents.Services.IVerifierEligibiliteService, paramApplicatifRemanentService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifRemanentService, bonificationService: ICBusiness.Services.Financement.IBonificationService, transfertConformiteService: ICCreditComponents.Services.ITransfertConformiteService, applicationService: ICCreditComponents.Services.IApplicationService, transfertBoComponentsService: ICCreditComponents.Services.ITransfertBoService, loaderService: ICCreditComponents.Services.ILoaderService, prendreDecisionPreteurService: ICCreditComponents.Services.IPrendreDecisionPreteur, transfertDecisionService: ICCreditComponents.Services.ITransfertDecisionService, decisionPreteur: ICCreditComponents.Services.IDecisionPreteur, popinService: ICCreditComponents.Services.IPopinService, rendreDossierService: ICCreditComponents.Services.IRendreDossierService, $route: ng.route.IRouteService, dossierService: ICBusiness.Services.Dossier.IDossierService, transfertBoService: ICBusiness.Services.TransfertBo.ITransfertBoService, mwNotificationService: MyWay.UI.IMwNotificationService, contextEditionService: ICCreditComponents.ContextEdition.IContexteEditionService, industrialisationService: ICBusiness.Services.Industrialisation.IIndustrialisationService, queryMultiCallService: ICCommon.Services.IRetryRequestService);
        private quitterDossier();
        private footerVisible();
        /**
         * Mise en place des dépendances
         * @param navigationService
         * @param context
         */
        setUpDependencies(navigationService: Navigation.INavigationCreditService, context: ICBusiness.Models.Common.IContext): void;
        /**
         * Récupération du context d'édition si nécessaire
         */
        private getContextEditon();
        private executeActionBefore();
        private getButtonTransfertBackOffice();
        private getButtonTransfertConformite();
        private isTransfertConformiteVisible();
        transfererPourConformite(delegate: () => boolean): void;
        private getButtonRenvoyerPourModification();
        private getButtonTransfertDecision();
        private getButtonRefuserDossier();
        private getButtonAnnulerDecision();
        private getButtonCalculer();
        private getButtonEnregistrerSignataire();
        private getButtonAccederDevisMRH();
        private getButtonRendreDossier();
        private isRendreDossierVisible();
        rendreDossierActionVisible(delegate: () => boolean): void;
        private getButtonConsulterInfoCompPTZ();
        private getButtonEnregistrerQuestionnairePTZ();
        private getButtonOuvrirSyntheseFinancement();
        private getButtonControlerDossier();
        /**
         * Add a delegate function to be executed before check eligibility
         * @param delegate
         */
        verifierEligibiliteAction(delegate: () => ng.IPromise<boolean>): void;
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
        private _imprimerOptimisationAction;
        private _btnImprimerOptimisationVisible;
        imprimerOptimisationAction(delegate: () => void): void;
        btnImprimerOptimisationVisible(delegate: () => boolean): void;
        private getButtonImprimerOptimisation();
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
        private getButtonConstituerLiasseElecDemande();
        constituerLiasseElecDemandeAction(delegate: () => ng.IPromise<void>): void;
        constituerLiasseElecDemandeEnabled(delegate: () => boolean): void;
        constituerLiasseElecDemandeVisible(delegate: () => boolean): void;
        private getButtonModifierLiasseElec();
        modifierLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        modifierLiasseElecEnabled(delegate: () => boolean): void;
        modifierLiasseElecVisible(delegate: () => boolean): void;
        private getButtonModifierLiasseElecDemande();
        modifierLiasseElecDemandeAction(delegate: () => ng.IPromise<void>): void;
        modifierLiasseElecDemandeEnabled(delegate: () => boolean): void;
        modifierLiasseElecDemandeVisible(delegate: () => boolean): void;
        private getButtonAnnulerLiasseElec();
        annulerLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        annulerLiasseElecEnabled(delegate: () => boolean): void;
        annulerLiasseElecVisible(delegate: () => boolean): void;
        private getButtonAnnulerLiasseElecDemande();
        annulerLiasseElecDemandeAction(delegate: () => ng.IPromise<void>): void;
        annulerLiasseElecDemandeEnabled(delegate: () => boolean): void;
        private getButtonRemettreOffreElec();
        envoyerOffreElecAction(delegate: () => ng.IPromise<void>): void;
        envoyerOffreElecEnabled(delegate: () => boolean): void;
        private getButtonRemettreDemandeElec();
        envoyerDemandeElecAction(delegate: () => ng.IPromise<void>): void;
        envoyerDemandeElecEnabled(delegate: () => boolean): void;
        private getButtonSignerDemandeSag();
        signerDemandeSagAction(delegate: () => ng.IPromise<void>): void;
        signerDemandeSagEnabled(delegate: () => boolean): void;
        consulterInfosCompPTZVisible(delegate: () => boolean): void;
        consulterLiasseElecAction(delegate: () => ng.IPromise<void>): void;
        private isButtonAnnulerDecisionVisible();
        private isButtonControlerDossierVisible();
        /**
         * Visibilité du bouton 'Editer l'offre'
         */
        private editerOffrePapierVisible();
        /**
         * Visibilité du bouton 'Editer l'offre industrialisée'
         */
        private editerOffreIndusVisible();
        private _editerOffreIndusActif;
        /**
         * Activation du bouton 'Editer l'offre industrialisée'
         */
        private editerOffreIndusEnabled();
        /**
         * Visibilité du bouton 'Editer l'offre en signature électronique'
         */
        private editerOffreSignElecVisible();
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
        private hasSomePieces();
        suiviDesEditionsAction(delegate: () => ng.IPromise<void>): void;
        suiviDesEditionsActionEnabled(delegate: () => boolean): void;
        private getButtonSuiviDesEditions();
        private actionValiderRefusClient();
        private getButtonValiderRefusClient();
        private _calculerBonificationAction;
        calculerBonificationVisible(delegate: () => boolean): void;
        /**
         * Action qui sera executée après l'action de base du calcul de bonification
         * @param delegate
         */
        calculerBonificationAfterAction(delegate: () => ng.IPromise<void>): void;
        private getButtonCalculerBonification();
    }
}

declare module ICCreditComponents.Directives {
    class PiecesControlesTablePiecesControleur {
        private filtreService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        listePiecoModele: ICBusiness.Models.IPiecoModele[];
        listePiecoModeleFiltre: ICBusiness.Models.IPiecoModele[];
        processusFiltres: Array<ICBusiness.Models.Common.ICodeLabel<string>>;
        filtreProcessusSelected: ICBusiness.Models.Common.ICodeLabel<string>;
        filtreProcessusActif: boolean;
        statutFiltres: Array<ICBusiness.Models.Common.ICodeLabel<number>>;
        filtreStatutSelected: ICBusiness.Models.Common.ICodeLabel<number>;
        filtreStatutActif: boolean;
        libelle: string;
        isInstructionAgence: boolean;
        isControle: boolean;
        readOnly: boolean;
        codeR: number;
        codeA: number;
        codeN: number;
        dncActif: boolean;
        typePiece: ICBusiness.Enum.EnumTypePiece;
        libelleEnteteTableau: ICBusiness.Models.ILibelleEnteteTableau;
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
        libelleClientOrAgence(typePiece: ICBusiness.Enum.EnumTypePiece): string;
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
        hasAncienAvisEtStatut(piece: ICBusiness.Models.IPiece): boolean;
        /**
         * Vérifie si la pièce est un contrôle et dispose de la propriété anciensAvisEtStatut et d'au moins un ancien avis
         * @param piece
         */
        printAncienAvisAgenceOuBo(piece: ICBusiness.Models.IPiece): boolean;
        /**
         * Détermine si la pièce a le statut sans objet
         * @param piece
         */
        isSansObjet(piece: ICBusiness.Models.IPiece): boolean;
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
        listePiecoModele: ICBusiness.Models.IPiecoModele[];
        isAutoriseToutCocher: boolean;
        typePiece: ICBusiness.Enum.EnumTypePiece;
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
        cadastresLotsRules: ICBusiness.Rules.IValidationRule[];
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
        getCadastresLotsRules(garantie: ICBusiness.Models.Garanties.IGarantie): ICBusiness.Rules.IValidationRule[];
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
        ajouterGarant: ICCreditComponents.Forms.IInputSettings;
    }
    interface IGarantieReponseOrganismeSettings {
        blocReponseOrganisme: ICCreditComponents.Forms.IInputSettings;
        inputStringIdExterne: ICCreditComponents.Forms.IInputSettings;
        radioBtnReponse: ICCreditComponents.Forms.IInputSettings;
        dateAccorde: ICCreditComponents.Forms.IInputSettings;
        dateRefuse: ICCreditComponents.Forms.IInputSettings;
        dateEnAttente: ICCreditComponents.Forms.IInputSettings;
        referenceCadastresLots: ICCreditComponents.Forms.IInputSettings;
    }
    class DetailGarantieSettingsService {
        private garantieService;
        static $inject: string[];
        constructor(garantieService: ICBusiness.Services.Garanties.IGarantiesService);
        getDetailsGarantieSettings(context: ICBusiness.Models.Common.IContext, garantie: ICBusiness.Models.Garanties.IGarantie): IDetailGarantieFormSettings;
        getReponseOrganismeSettings(context: ICBusiness.Models.Common.IContext, garantie: ICBusiness.Models.Garanties.IGarantie, garantieOrigine: ICBusiness.Models.Garanties.IGarantie): IGarantieReponseOrganismeSettings;
        blocReponseOrganismeIsHidden(codeApplication: number, garantieNatureCode: string): boolean;
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
        documentId: string;
        /**
         * Liste des données complémentaires à traiter
         */
        donneesComplementaires: ICBusiness.Models.Edition.IDocumentComplementaireInfos;
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
    interface IOutil extends ICBusiness.Models.Edition.IOutil {
        id: string;
        expanded: boolean;
        selected: boolean;
        rules: IFCM17OMERules;
    }
    interface IFCM17OMERules {
        materiel: ICBusiness.Rules.IValidationRule[];
        fournisseur: ICBusiness.Rules.IValidationRule[];
        dateLivraison: ICBusiness.Rules.IValidationRule[];
        allRules: ICBusiness.Rules.IValidationRule[];
    }
    class ModalDonneesCompNecessaireControleur {
        private $modalInstance;
        private $scope;
        private popinService;
        private saisiesComplementairesService;
        private data;
        static parametres: ICCommon.Controleur.IControleurParametre;
        chargementEnCours: boolean;
        donneesComplementaires: IDonneeComplementaire[];
        donneesFCM17OME: ICBusiness.Models.Edition.IFCM17OME;
        idDossier: string;
        title: string;
        estAvecBtnAnnuler: boolean;
        inputBasic: ICCreditComponents.Forms.IInputSettings;
        inputRequired: ICCreditComponents.Forms.IInputSettings;
        private selectedOutil;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope, popinService: Services.IPopinService, saisiesComplementairesService: ICBusiness.Services.SaisiesComplementaires.ISaisiesComplementairesService, data: ICCreditComponents.Modales.IModalDonneesCompNecessaireControleurData);
        form: ng.IFormController;
        estGenerique: boolean;
        private buildInputSettings();
        /**
         * Méthode pour le bouton annuler
         */
        annuler(): void;
        getFieldClass(donneeComplementaire: IDonneeComplementaire): string;
        getRules(donneeComp: ICBusiness.Models.Edition.IDonneeComplementaire): ICBusiness.Rules.IValidationRule[];
        private isValid();
        /**
         * Méthode pour le bouton imprimer
         */
        imprimer(): void;
        /**
         * Code spécifique à FCM17OME
         */
        private initDocumentFCM17OME();
        private getRulesFCM17OME(outil);
        estDocumentFCM17OME: boolean;
        isAjoutOutilPossible: boolean;
        private isSaisieOutilValide(outil);
        ajouterMateriel(): void;
        private compteurOutil;
        private duplicateTableRowModel();
        private selectAndExpandTableRow(tableRow, collapseAll?, event?);
        validerMateriel(outil: IOutil): void;
        supprimerMateriel(outil: IOutil): void;
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
        private suiviEditionsService;
        private habilitationService;
        constructor(context: ICBusiness.Models.Common.IContext, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, paramApplicatifRemanentService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifRemanentService, controleSyntheseService: Controle.IControleSyntheseService, navigationService: INavigationCreditService, labelService: Services.IlabelService, suiviEditionsService: ICBusiness.Services.SuiviEditions.ISuiviEditionsService, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService);
        getSousChapitreActionsComplementaires(): ITotemSousChapitre;
        private checkAccesSuiviEditionPromiseCalled;
        private checkAccesSuiviEdition();
        private checkOffreDejaEditee();
        private getNewPageBlocNotes();
        private getNewPageConformiteDossier();
        private getNewPageMultirisqueHabitation();
        private getNewPagePieceEtControle();
        private getNewPageChoixEditionDemandeCredit();
        private getNewPageEmissionDocuments();
        private displayRefusAssuranceExterne();
        private getTransfererDansNeoActif();
        private _estAgentHabiliTransfererNeo;
        private _transfertNeoPromiseDejaAppelee;
        private agentAuthoriseTransfererNeo();
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
        private paramApplicatifRemanentService;
        private controleSyntheseService;
        private navigationService;
        private labelService;
        private preferenceService;
        constructor(context: ICBusiness.Models.Common.IContext, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, paramApplicatifRemanentService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifRemanentService, controleSyntheseService: Controle.IControleSyntheseService, navigationService: INavigationCreditService, labelService: Services.IlabelService, preferenceService: ICBusiness.Services.Preferences.IPreferencesService);
        getSousChapitreProposition(): ITotemSousChapitre;
        private getNewPageClient();
        private getNewPageProjet();
        private getVisibilityPageFinancement();
        private preferencesUtilisateur;
        private loadPreferenceOnce;
        private getNewPageFinancement();
        /**
         * Affiche le totem de saisie des information PTZ SI
         * - On est sur l'application Immo
         * - L'état du dossier à dépassé le stade de proposition
         * - Un PTZ a été retenu
         * - Le code BT95 CIFCBB est activé
         */
        private getPageSaisieInformationsPTZ();
        private getNewPageGestionAdministrative();
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemCcreditCommon {
        static dossierHasProjet(context: ICBusiness.Models.Common.IContext): boolean;
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
