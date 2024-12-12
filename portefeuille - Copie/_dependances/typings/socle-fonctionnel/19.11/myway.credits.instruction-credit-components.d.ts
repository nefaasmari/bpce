
declare namespace ICCreditComponents.Constantes.Inject {
    namespace Modale {
        const data: string;
    }
    namespace Services {
        const anchorService: string;
        const controleSyntheseService: string;
        const footerCreditService: string;
        const labelService: string;
        const loaderService: string;
        const navigationCreditCommonService: string;
        const popinService: string;
        const prendreDecisionPreteur: string;
        const annulerDecisionPreteur: string;
        const recapInterroBdfService: string;
        const totemCreditService: string;
        const transfertNeoService: string;
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
    namespace Route {
        const erreur: string;
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

declare namespace ICCreditComponents.Modeles {
    interface ILoading<T> {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<T>;
        texte?: string;
    }
}

declare namespace ICCreditComponents.Modeles {
    enum TypeRecapitulatif {
        OK = 0,
        FICHE = 1,
        INDISPONIBLE = 2,
        ERREUR = 3,
    }
    enum TypeForcage {
        NON_HABILITE = 0,
        NON_FORCE = 1,
        FORCE = 2,
    }
    interface IOutput {
        typeRecapitulatif: TypeRecapitulatif;
        typeForcage: TypeForcage;
    }
}

declare namespace ICCreditComponents.Services {
    interface IAnnulerDecisionPreteur {
        /**
         * Méthode pour annuler la décision prêteur
         * @param dateInstruction
         * @param idDossier
         */
        annulerDecision(idDossier: string): ng.IPromise<boolean>;
    }
    class AnnulerDecisionPreteur implements IAnnulerDecisionPreteur {
        private $q;
        private annulerDecisionPreteur;
        private popinService;
        private mwNotificationService;
        static $inject: string[];
        constructor($q: ng.IQService, annulerDecisionPreteur: ICRest.Services.Dossier.DecisionService, popinService: ICCreditComponents.Services.IPopinService, mwNotificationService: MyWay.UI.IMwNotificationService);
        annulerDecision(idDossier: string): ng.IPromise<boolean>;
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

declare namespace ICCreditComponents.Services {
    interface IPopinService {
        showConfirmModal(headerText?: string, bodyText?: string, actionButtonText?: string, closeButtonText?: string): ng.IPromise<void>;
        showFullModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | string, keyboard?: boolean): ng.IPromise<U>;
        showLargeModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | string, keyboard?: boolean): ng.IPromise<U>;
        showMediumModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | string, keyboard?: boolean): ng.IPromise<U>;
        showSmallModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | string, keyboard?: boolean): ng.IPromise<U>;
    }
    class PopinService implements IPopinService {
        private $q;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.ModalService);
        showConfirmModal(headerText?: string, bodyText?: string, actionButtonText?: string, closeButtonText?: string): ng.IPromise<void>;
        showFullModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | string, keyboard?: boolean): ng.IPromise<U>;
        showLargeModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | string, keyboard?: boolean): ng.IPromise<U>;
        showMediumModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | string, keyboard?: boolean): ng.IPromise<U>;
        showSmallModal<T, U>(data: T, parametres: ICCommon.Controleur.IControleurParametre, backdrop?: boolean | string, keyboard?: boolean): ng.IPromise<U>;
        getModalSettings<T>(data: T, ctrl: string, ctrlAs: string, templateUrl: string, size: string, backdrop: boolean | string, keyboard: boolean, windowClass?: string): ng.ui.bootstrap.IModalSettings;
    }
}

declare namespace ICCreditComponents.Services {
    interface IPrendreDecisionPreteur {
        /**
         * Méthode pour effectuer les contrôles pour savoir si la décision prêteur peut êre prise
         * @param dateInstruction
         * @param idDossier
         */
        controleAvantDecision(dateInstruction: string, idDossier: string): ng.IPromise<boolean>;
    }
    class PrendreDecisionPreteur implements IPrendreDecisionPreteur {
        private $q;
        private controleSyntheseService;
        static $inject: string[];
        constructor($q: ng.IQService, controleSyntheseService: ICCreditComponents.Controle.IControleSyntheseService);
        controleAvantDecision(dateInstruction: string, idDossier: string): ng.IPromise<boolean>;
    }
}

declare namespace ICCreditComponents.Services {
    interface IRecapInterroBdfService {
        /**
         * Vérifie si les personnes passées en paramètre sont fichées et permet de forcer en cas de besoin
         * @param param
         */
        verifierFichageMultipleAvecRecap(param: ICBusiness.Services.InterroBdf.IVerifierFichageBdfMultipleParam): void;
    }
    class RecapInterroBdfService implements IRecapInterroBdfService {
        private interroBdfService;
        private mwNotificationService;
        private $q;
        private popinService;
        static $inject: string[];
        constructor(interroBdfService: ICBusiness.Services.InterroBdf.IInterroBdfService, mwNotificationService: MyWay.UI.IMwNotificationService, $q: ng.IQService, popinService: ICCreditComponents.Services.IPopinService);
        verifierFichageMultipleAvecRecap(param: ICBusiness.Services.InterroBdf.IVerifierFichageBdfMultipleParam): ng.IPromise<boolean>;
        private recapitulatifBdf(tuples, dossierSchema);
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
        private $q;
        private popinService;
        private dossierService;
        private lisaService;
        static $inject: string[];
        constructor($q: ng.IQService, popinService: IPopinService, dossierService: ICBusiness.Services.Dossier.IDossierService, lisaService: ICCommon.Services.IlisaService);
        transfererDossierDansNeo(idDossier: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        private debrancherVersNeo(idDossier, authentificationInfos);
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
    class FooterDirectiveControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        settings: IFooterDirectiveSettings;
        constructor();
        isBtnMulti: (btn: IFooterButton) => boolean;
        getBtnClassStyle(btn: IFooterButton): string;
        /** fonction pour satisfaire le linter */
        doNothing(): void;
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    interface IFooterDirectiveSettings {
        hidden: () => boolean;
        listButtons: IFooterButton[];
    }
    enum IFooterButtonTypeEnum {
        simple = 0,
        multiple = 1,
    }
    interface IFooterButton {
        id: string;
        label: string;
        enable: () => boolean;
        visible: () => boolean;
        type: IFooterButtonTypeEnum;
    }
    interface IFooterMultiButton extends IFooterButton {
        listButtons: IFooterSimpleButton[];
        onDropdownChange: (open: boolean, id: string) => void;
        open: boolean;
    }
    interface IFooterSimpleButton extends IFooterButton {
        action: (button: IFooterSimpleButton) => void;
        promise: ng.IPromise<any>;
    }
    class FooterMultiButton implements IFooterMultiButton {
        id: string;
        label: string;
        enable: () => boolean;
        listButtons: IFooterSimpleButton[];
        type: IFooterButtonTypeEnum;
        visible: () => boolean;
        onDropdownChange(open: boolean): void;
        open: boolean;
        constructor(id: string, label: string, enable: () => boolean, visible: () => boolean, listButtons: IFooterSimpleButton[], type: IFooterButtonTypeEnum);
    }
}

declare namespace ICCreditComponents.Directives {
    class HeaderDirectiveControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        onCloseClick: () => void;
        context: ICBusiness.Models.Common.IContext;
        /** Construction du libelle de détail sous le header */
        libelleDetail: string;
        isConso: boolean;
        isPro: boolean;
        close(): void;
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
    }
}

declare namespace ICCreditComponents.Directives {
}

declare namespace ICCreditComponents.Directives {
    interface ILoaderSetting {
        visible: boolean;
        text?: string;
    }
}

declare namespace ICCreditComponents.Services {
    interface ILoaderService {
        /**
         * Show the unknown progression loader
         * @param text
         * @param delay default 200
         */
        startLoading(text?: string, delay?: number): any;
        /**
         * Show the unknown progression loader until the end of the promise
         * @param text to show on loader
         * @param promise
         * @param delay default 200
         */
        startLoadingPromise<T>(promise: ng.IPromise<T>, text?: string, delay?: number): ng.IPromise<T>;
        /**
         * Update the text to display on loader
         * @param text
         */
        updateText(text?: string): any;
        /** Hide loader */
        stopLoading(): any;
    }
    interface IloaderData {
        loading: Directives.ILoaderSetting;
    }
    class LoaderService {
        private $timeout;
        loading: Directives.ILoaderSetting;
        private currentTimeOut;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService);
        startLoadingPromise<T>(promise: ng.IPromise<T>, text: string, delay?: number): ng.IPromise<T>;
        startLoading(text: string, delay?: number): void;
        stopLoading(): void;
        private clearCurrentTimeOut();
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
    class FormAddressControleur {
        private $scope;
        private mwsfAdresseService;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        affichageAdresse: myway.comAdresseDqe.Adresse;
        settingsAdresse: myway.comAdresseDqe.IAdresseSettings;
        adresse: IAddress;
        constructor($scope: ng.IScope, mwsfAdresseService: myway.comAdresseDqe.AdresseService);
        /**
         * Mise à jour des infos adresse suite à une recherche
         */
        miseAJourAdresse(): void;
        private initAdresse();
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    interface IAddress {
        row1: string;
        row2: string;
        row3: string;
        row4: string;
        row5: string;
        city: string;
        zipCode: string;
        countryCode: string;
        loaded: boolean;
        codeInseeLocalite: string;
        isFrance: boolean;
        isEdited: boolean;
        readOnly: boolean;
    }
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

declare module ICCreditComponents.Forms {
    class TexteLongControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        private _hauteurCss;
        elementHtml: HTMLElement;
        texte: string;
        afficherTexteComplet: boolean;
        getHauteur(): number;
        getTexteTropLong(): boolean;
        getTexteAction(): string;
        getTexteFormate(): string;
        constructor($timeout: ng.ITimeoutService);
        /**
         * Action qui affiche/cache le texte
         */
        gererAffichageTexteComplet(): void;
    }
}

declare module ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputNumberControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        decimals: number;
        devise: string;
        model: number;
        customErrorLabel: string;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
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

declare namespace ICCreditComponents.Forms {
    class InputStringControleur extends InputControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        model: string;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Modales {
    interface IModaleInterroBdfRecapControleurData {
        typeRecap: Modeles.TypeRecapitulatif;
        listeFiches: ICBusiness.Models.Emprunteur.IPersonnePhysique[];
        sousEtatDossier: ICBusiness.Enum.SousEtatDossier;
    }
    class ModaleInterroBdfRecapControleur {
        private serviceAgent;
        private $modalInstance;
        private data;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        listeFiches: ICBusiness.Models.Emprunteur.IPersonnePhysique[];
        actionEnCours: boolean;
        estHabilite: boolean;
        estFiche: boolean;
        output: Modeles.IOutput;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: IModaleInterroBdfRecapControleurData);
        bdfIndisponible: boolean;
        clientsFiches: boolean;
        libelleBtnPrincipal: string;
        libelleEtapeDossier: string;
        valider(): void;
        onAnnuler(): void;
        close(): void;
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
    class ModaleDateInstructionControleur {
        private $modalInstance;
        private $scope;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        dateInstruction: string;
        dateInstructionRules: ICBusiness.Rules.IValidationRule[];
        isValid: boolean;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, $scope: ng.IScope);
        /**
         * Permet de valider la popin
         */
        valider(): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    interface IAnchorService {
        goToSection(idSection: string, onScrollToSectionDone?: () => void): void;
        tryToGoToSection(idSection: string, onScrollToSectionDone?: () => void, tryDuringMs?: number): void;
    }
    interface IExtendedHtmlElement extends HTMLElement {
        onElementHeightChangeTimer: number;
    }
    class AnchorService implements IAnchorService {
        private defaultTryDelay;
        private idSection;
        private timeoutDelay;
        goToSection(idSection: string, onScrollToSectionDone?: () => void): void;
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
        goToSynthese?(): void;
        goToClient?(): void;
        goToClientSectionIntervenant?(): void;
        goToClientSectionRevenusCharge?(): void;
        goToClientSectionSurfaceFinanciere?(): void;
        goToProjet?(): void;
        goToProjetSectionDescription?(): void;
        goToProjetSectionReamenagement?(): void;
        goToProjetSectionObjetFinance?(): void;
        goToFinancement?(): void;
        goToFinancementSectionProjet?(): void;
        goToFinancementSectionDetailCredit?(): void;
        goToGestionAdmin?(): void;
        goToGarantie?(): void;
        goToAssurance?(): void;
        goToGestionAdminSectionAssurances?(): void;
        goToGestionAdminSectionModalites?(): void;
        goToDecisionPreteur?(): void;
        goToDecisionPreteurSectionAvis?(): void;
        goToDecisionPreteurSectionIndicateursOctroi?(): void;
        goToDecisionPreteurSectionDecision?(): void;
        goToEditionOffre?(): void;
        goToEditionOffreSectionCaracteristiques?(): void;
        goToEditionOffreSectionClausesPersonnalisees?(): void;
        goToEditionOffreSectionListeMandats?(): void;
        goToEditionOffreSectionInstitutsEmission?(): void;
        goToPiecesEtControles?(): void;
        goToPiecesEtControlesSectionClient?(): void;
        goToPiecesEtControlesSectionAgence?(): void;
        goToPiecesEtControlesSectionControles?(): void;
        goToHistorique?(): void;
        transfererDansNeo?(): void;
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
        constructor($timeout: ng.ITimeoutService, labelService: Services.IlabelService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, controleSyntheseService: Controle.IControleSyntheseService);
        /**
         * Mise en place des dépendances
         * @param navigationService
         * @param context
         */
        setUpDependencies(navigationService: INavigationCreditService, context: ICBusiness.Models.Common.IContext): void;
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
        setUpDependencies(context: ICBusiness.Models.Common.IContext): any;
        footerSettings: Directives.IFooterDirectiveSettings;
        retenirAction(delegate: () => ng.IPromise<void>): void;
        calculerAction(delegate: () => ng.IPromise<void>): void;
        retenirEnabled(delegate: () => boolean): void;
        prendreDecision(delegate: () => ng.IPromise<void>): void;
        annulerAccordPreteur(delegate: () => ng.IPromise<void>): void;
    }
    class FooterCreditService implements IFooterCreditService {
        private $q;
        private controleSyntheseService;
        private etatDossierService;
        private _onBeforefooterAction;
        private _retenirAction;
        private _calculerAction;
        private _retenirEnabled;
        private _prendreDecision;
        private _editerOffre;
        private _annulerAccordPreteur;
        /**
         * Add a delegate function to be executed before controle
         * @param delegate
         */
        onBeforefooterAction(delegate: () => ng.IPromise<boolean>): void;
        /**
         * Add a delegate function for retenir
         * @param delegate
         */
        retenirAction(delegate: () => ng.IPromise<void>): void;
        /**
         * Add a delegate function for Prendre décision
         * @param delegate
         */
        prendreDecision(delegate: () => ng.IPromise<void>): void;
        /**
         * Add a delegate function for Prendre décision
         * @param delegate
         */
        editerOffre(delegate: () => ng.IPromise<void>): void;
        annulerAccordPreteur(delegate: () => ng.IPromise<void>): void;
        /**
         * Add a delegate function for retenir enabled
         * @param delegate
         */
        retenirEnabled(delegate: () => boolean): void;
        calculerAction(delegate: () => ng.IPromise<void>): void;
        private _footerSettings;
        footerSettings: Directives.IFooterDirectiveSettings;
        /** Context applicatif sur lequel se base le service pour extraire les règles de gestion d'affichage du footer */
        private context;
        static $inject: string[];
        constructor($q: ng.IQService, controleSyntheseService: Controle.IControleSyntheseService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService);
        private footerVisible();
        /**
         * Mise en place des dépendances
         * @param navigationService
         * @param context
         */
        setUpDependencies(context: ICBusiness.Models.Common.IContext): void;
        private getButtonCalculer();
        private getButtonRetenir();
        private getButtonPrendreDecision();
        private getButtonAnnulerDecision();
        private getButtonEditerOffre();
        private getButtonControlerDossier();
        private getButtonRetourMontage();
        private getButtonRefuserDossier();
        private buttonRefuserDossierVisible();
        private buttonRetourMontageVisible();
        private buttonPrendreDecisionVisible();
        private buttonAnnulerDecisionVisible();
        private buttonEditerOffreVisible();
        private buttonControlerDossierVisible();
        private buttonRetenirVisible();
        private executeActionBefore();
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
        private $timeout;
        private labelService;
        private etatDossierService;
        private controleSyntheseService;
        private navigationService;
        private context;
        constructor($timeout: ng.ITimeoutService, labelService: Services.IlabelService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, controleSyntheseService: Controle.IControleSyntheseService, navigationService: INavigationCreditService, context: ICBusiness.Models.Common.IContext);
        getSousChapitreActionsComplementaires(): ITotemSousChapitre;
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemChapitreDecisionEdition {
        private $timeout;
        private labelService;
        private etatDossierService;
        private controleSyntheseService;
        private navigationService;
        private context;
        constructor($timeout: ng.ITimeoutService, labelService: Services.IlabelService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, controleSyntheseService: Controle.IControleSyntheseService, navigationService: INavigationCreditService, context: ICBusiness.Models.Common.IContext);
        getSousChapitreDecisionEdition(): ITotemSousChapitre;
        private getNewPageDecisionPreteur();
        private getNewPageEditionOffre();
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemChapitreProposition {
        private $timeout;
        private labelService;
        private etatDossierService;
        private controleSyntheseService;
        private navigationService;
        private context;
        constructor($timeout: ng.ITimeoutService, labelService: Services.IlabelService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService, controleSyntheseService: Controle.IControleSyntheseService, navigationService: INavigationCreditService, context: ICBusiness.Models.Common.IContext);
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
