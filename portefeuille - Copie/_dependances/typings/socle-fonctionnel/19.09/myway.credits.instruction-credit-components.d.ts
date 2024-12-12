
declare namespace ICCreditComponents.Constantes.Inject {
    namespace Modale {
        const data: string;
    }
    namespace Services {
        const popinService: string;
        const totemCreditService: string;
        const loaderService: string;
    }
    namespace Error {
        const popinErrorService: string;
    }
}

declare module ICCreditComponents {
    var app: any;
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
        constructor(popinService: Services.IPopinService);
        open<T>(libelle: string, error: T): ng.IPromise<void>;
    }
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

declare namespace ICCreditComponents.Forms {
    let inputDirectiveScope: IInputDirectiveScope;
    abstract class InputControleur {
        private $timeout;
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
        protected isSettingsConsultation: boolean;
        protected isSettingsReadonly: boolean;
        /** return true if consulting mode is set or readonly is set */
        isReadOnly: boolean;
        isRequired: boolean;
        /** role used for accessibility aria attribute */
        role: string;
        constructor($timeout: ng.ITimeoutService);
        isValid(): boolean;
        onKeyDown($event: KeyboardEvent): void;
        onChange(): void;
    }
}

declare namespace ICCreditComponents.Forms {
    interface IInputDirectiveScope {
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
    interface IButtonSettings {
        hidden?: boolean;
    }
    interface IInputSettings {
        consultation: boolean;
        hidden?: boolean;
        readonly?: boolean;
        required?: boolean;
    }
    interface IPanelSettings {
        hidden?: boolean;
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
        items: ICBusiness.Models.Common.ICodeLabel<T>[];
        model: ICBusiness.Models.Common.ICodeLabel<T>;
        onOpen: <U>(...args: any[]) => ng.IPromise<U>;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
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
        noFormGroup: boolean;
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
    /** @deprecated */
    interface INavigationService extends INavigationCreditService {
        onNavigationStarts?: <T>(trigger: () => ng.IPromise<T>) => void;
        cancelNavigation?(): void;
    }
    interface INavigationCreditService {
        goToSynthese?(): void;
        goToClient?(): void;
        goToProjet?(): void;
        goToFinancement?(): void;
        goToGestionAdmin?(): void;
        goToGarantie?(): void;
        goToAssurance?(): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemCreditService {
        private $timeout;
        /** Paramètrage du Totem Crédit Conso */
        totemSettings: ITotemSettings;
        /** Context applicatif sur lequel se base le totem pour extraire les règles de gestion d'affichage du totem */
        private context;
        /** Service fournissant les méthodes de navigation */
        private navigationService;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService);
        /**
         * Mise en place des dépendances
         * @param navigationService
         * @param context
         */
        setUpDependencies(navigationService: INavigationCreditService, context: ICBusiness.Models.Common.IContext): void;
        /** controle la possition des section de la page pour activer les totems correspondants */
        private selectTotemSectionOnScroll;
        setActivePage(pageId: string): void;
        setActiveSection(sectionId: string): void;
        /**
         * Retrouve une totem page par Id
         * @param pageId
         */
        private findPage(pageId);
        /**
         * Retrouve la section d'une pas par section id
         * @param page
         * @param sectionId
         */
        private findSection(page, sectionId);
        private goToAnchor(id);
        /** Construction du Totem Crédit instruction conso / pro */
        private buildTotem();
        /** Return true if "emprunteur" and "dossier" exists */
        private dossierHasProjetFinancement();
        private getNewPageSynthese();
        private getNewPageClient();
        private getNewPageProjet();
        private getNewPageFinancement();
        private getNewPageGaranties();
        private getNewPageAssurance();
        private getNewPageGestionAdministrative();
        private getNewPageDecisionPreteur();
        private getNewPageEditionContrat();
        private getNewPageMiseAJourAdministrative();
        private getNewPageSignatureContrat();
        private getNewPagePieceEtControle();
    }
}

declare namespace ICCreditComponents.Navigation.Constantes {
    namespace PageId {
        const synthese: string;
        const client: string;
        const projet: string;
        const financement: string;
        const gestionAdministrative: string;
        const garanties: string;
        const assurance: string;
        const decisionPreteur: string;
        const editionDuContrat: string;
        const miseAJourAdministrative: string;
        const signatureDuContrat: string;
        const pieceEtControle: string;
    }
    namespace SectionId {
        namespace client {
            const intervenantsDuDossier: string;
            const revenusCharges: string;
            const surfaceFinanciere: string;
            const droitEpargneLogement: string;
        }
        namespace projet {
            const descriptionDuProjet: string;
            const reamenagement: string;
        }
        namespace financement {
            const financementDuProjet: string;
            const detailCredit: string;
        }
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemDirectiveControleur {
        static parametres: ICCommon.Controleur.IControleurParametre;
        constructor();
        settings: ITotemSettings;
        selectPage(page: ITotemPage): void;
        selectSection(section: ITotemSection): void;
        getIdItem(item: ITotemItem): string;
        getLibelleItem(item: ITotemItem): string;
        isPageActive(item: ITotemItem): boolean;
        isSectionActive(item: ITotemItem): boolean;
        showSections(page: ITotemPage): boolean;
        itemEstVisible(item: ITotemItem): boolean;
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
    /** Représente un totem page */
    interface ITotemPage extends ITotemItem {
        sections?: ITotemSection[];
    }
    /** Settings d'un menu */
    interface ITotemSettings {
        pages?: ITotemPage[];
        showSectionOnlyOnActivePage?: boolean;
        activePage?: ITotemPage;
        activeSection?: ITotemSection;
    }
}

declare namespace ICCreditComponents.Navigation {
}
