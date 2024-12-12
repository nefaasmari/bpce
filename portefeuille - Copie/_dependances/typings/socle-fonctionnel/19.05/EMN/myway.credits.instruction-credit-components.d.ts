
declare namespace ICCreditComponents.Constantes.Inject {
    namespace Modale {
        const data: string;
    }
    namespace Services {
        const popinService: string;
        const totemCreditService: string;
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

declare namespace ICCreditComponents.Forms {
    let inputDirectiveScope: IInputModele;
    abstract class InputControleur {
        fieldClass: string;
        form: ng.IFormController;
        label: string;
        labelClass: string;
        name: string;
        placeholder: string;
        readonly: boolean;
        required: boolean;
        rules: ICBusiness.Rules.IValidationRule[];
        suffix: string;
        suffixClass: string;
        _onEnter: any;
        errorLabel: string;
        fieldClassExtended: string;
        role: string;
        constructor();
        isValid(): boolean;
        onKeyDown($event: KeyboardEvent): void;
    }
}

declare namespace ICCreditComponents.Forms {
    interface IInputModele {
        fieldClass: string;
        form: string;
        label: string;
        labelClass: string;
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
    class InputCheckBoxControleur extends InputControleur {
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        change: any;
        model: number;
        constructor($timeout: ng.ITimeoutService);
        onChange(): void;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputIntegerPickerControleur extends InputControleur {
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        change: any;
        max: number;
        min: number;
        model: number;
        step: number;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        onChange(): void;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputDateControleur extends InputControleur {
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        change: any;
        format: string;
        model: string;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        onChange(): void;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputListBoxControleur<T extends string | number> extends InputControleur {
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        change: any;
        items: ICBusiness.Models.Common.ICodeLabel<T>[];
        model: ICBusiness.Models.Common.ICodeLabel<T>;
        onOpen: <U>(...args: any[]) => ng.IPromise<U>;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        onChange(): void;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputNumberControleur extends InputControleur {
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        change: any;
        decimals: number;
        devise: string;
        model: number;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        onChange(): void;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Forms {
    class InputStringControleur extends InputControleur {
        private $timeout;
        static parametres: ICCommon.Controleur.IControleurParametre;
        static $inject: string[];
        change: any;
        model: string;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        onChange(): void;
    }
}

declare namespace ICCreditComponents.Forms {
}

declare namespace ICCreditComponents.Navigation {
    interface INavigationService {
        goToSynthese(): void;
        goToClient(): void;
        goToProjet(): void;
        goToFinancement(): void;
        goToGestionAdmin(): void;
        goToGarantie(): void;
        goToAssurance(): void;
    }
}

declare namespace ICCreditComponents.Navigation {
    class TotemCreditService {
        totemSettings: ITotemSettings;
        setNavigationService(navigationService: INavigationService): void;
        private navigationService;
        private sousEtatDossier;
        setSousEtatDossier(sousEtatDossier: ICBusiness.Enum.SousEtatDossier): void;
        setActivePage(pageId: string): void;
        private findPage(pageId);
        private buildTotem();
        private getNewPageSynthese();
        private getNewPageClient();
        private getNewPageProjet();
        private getNewPageFinancement();
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
