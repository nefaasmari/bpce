
declare module MyWay.UI {
    var hostName: string;
    class Constants {
        static TEMPLATE_PATH: string;
        static VERSION: string;
        static CLAVIER_KEYCODE: {
            RETOUR: number;
            TAB: number;
            ENTRER: number;
            ECHAP: number;
            ESPACE: number;
            FIN: number;
            ORIGINE: number;
            FLECHE_GAUCHE: number;
            FLECHE_HAUT: number;
            FLECHE_DROITE: number;
            FLECHE_BAS: number;
            SUPPRIMER: number;
        };
    }
    var module: ng.IModule;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    interface IMwGenerateurIdService {
        /**
         * Suffixe tous les éléments de la directive ayant un attribut id par baseId
         * Si baseId n'est pas défini, tous les attributs id sont supprimés
         */
        suffixerId(element: ng.IAugmentedJQuery, baseId: string): void;
    }
}

declare module MyWay.UI {
    interface IMwResizeService {
        resizeMain(): void;
        /**
         * Calcule la distance (en px) entre le bas de l'élément en paramètre jusqu'au bas de l'élément main, return 0 par défaut
         */
        getDistanceElementMainBottom(element: ng.IAugmentedJQuery, marginBottom?: number): number;
    }
}

declare module MyWay.UI {
    interface IWatchForScrollScope extends ng.IScope {
        watchForScroll: boolean;
    }
}

declare module MyWay.UI {
    function body(): ng.IDirective;
}

declare module MyWay.UI {
    interface IMwCalendrierScope extends ng.IScope {
        ngModel: Object;
        onChange: any;
        dateOptions: any;
        minDate: string;
        maxDate: string;
        minDateDt: any;
        maxDateDt: any;
        showWeeks: string;
        onWeekClick: any;
        onWeekClickFunction: (week: any) => void;
        openCalendar: (event: Event) => void;
        opened: boolean;
    }
}

declare module MyWay.UI {
}


declare module MyWay.UI {
    interface ImwInputDateControllerScope extends ng.IScope {
        id: string;
        name: string;
        errmsg: string;
        onChange: any;
        ngChange: any;
        ngFocus: any;
        ngBlur: any;
        required: boolean;
        showWeeks: any;
        minDate: string;
        maxDate: string;
        onWeekClick: any;
        minDateDt: Date;
        maxDateDt: Date;
    }
    class InputDateController {
        private ngModelCtrl;
        required: boolean;
        id: string;
        opened: boolean;
        openedOnce: boolean;
        dateOptions: any;
        maDate: string;
        private $filter;
        private $scope;
        private element;
        errMsg: string;
        name: string;
        onChangeFunction: any;
        ngFocusFunction: any;
        ngBlurFunction: any;
        minDate: Date;
        maxDate: Date;
        private firstModelRender;
        private hasFocus;
        constructor($scope: ImwInputDateControllerScope, $filter: ng.IFilterService, $element: ng.IAugmentedJQuery);
        /**
         * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
         * C'est par lui qu'on va manipuler la donnée de notre directive.
         */
        init(ngModelCtrl: ng.INgModelController): void;
        updateModelFromPopIn(): void;
        convertDateToString(date: Date): string;
        toJSONLocal(date: any): string;
        isValidDate(date: string): boolean;
        isValid(): boolean;
        onInputChange(): void;
        onFocus($event: any): void;
        onBlur($event: any): void;
        openCalendar($event: any): void;
        reset: () => void;
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    interface ImwWeekButtonsScope extends ng.IScope {
        onWeekClick: Function;
    }
    interface ImwWeekButtonsAttributes extends ng.IScope {
        onWeekClick: string;
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    function head($compile: ng.ICompileService): ng.IDirective;
}

declare module MyWay.UI {
    interface IMwEmbedScope extends ng.IScope {
        src: string;
        width: string;
        height: string;
        alt: string;
    }
    class MwEmbedController {
        private $scope;
        src: string;
        width: string;
        height: string;
        alt: string;
        static $inject: string[];
        constructor($scope: IMwEmbedScope);
    }
}

declare module MyWay.UI {
    function mwEmbed(): ng.IDirective;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    interface IHorizontalPanelCtrlScope extends ng.IScope {
        id: string;
    }
    class HorizontalPanelCtrl {
        private $scope;
        static $inject: string[];
        constructor($scope: IHorizontalPanelCtrlScope, element: ng.IAugmentedJQuery);
        onClickLeft($event: JQueryEventObject): void;
        onClickRight($event: JQueryEventObject): void;
    }
}

declare module MyWay.UI {
    function HorizontalPanel(): ng.IDirective;
}

declare module MyWay.UI {
    interface ImwIntegerpickerControllerScope extends ng.IScope {
        step: number;
        min: number;
        max: number;
        id: string;
        required: boolean;
        onChange: any;
        ngFocus: any;
        ngChange: any;
        ngBlur: any;
    }
    class MwIntegerpickerController {
        private ngModelCtrl;
        step: number;
        min: number;
        max: number;
        id: string;
        required: boolean;
        value: number;
        onFocus: boolean;
        onChange: any;
        ngFocus: any;
        ngBlur: any;
        static $inject: string[];
        constructor($scope: ImwIntegerpickerControllerScope);
        /**
         * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
         * C'est par lui qu'on va manipuler la donnée de notre directive.
         */
        init(_ngModelCtrl: ng.INgModelController): void;
        /**
         * Incrémente la données
         */
        incremente(): number;
        /**
         * Décrémente la données
         */
        decremente(): number;
        handelKey(event: KeyboardEvent): void;
    }
}

declare module MyWay.UI {
    function mwIntegerpicker(): ng.IDirective;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    class ModalDefaultController {
        private $modalInstance;
        private popupOptions;
        static $inject: string[];
        private checkParam();
        styleFooter: string;
        validateur: boolean;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, popupOptions: IModalConfirm, element: ng.IAugmentedJQuery);
        annuler(): void;
        valider(): void;
        handelKey(event: KeyboardEvent): void;
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    class ModalExitController {
        private $modalInstance;
        static $inject: string[];
        avecEnregistrement: boolean;
        styleFooter: string;
        validateur: boolean;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, element: ng.IAugmentedJQuery);
        annuler(): void;
        sansEnregistrer(): void;
        enregistrer(): void;
        handelKey(event: KeyboardEvent): void;
    }
}

declare module MyWay.UI {
    enum TYPE_POPUP_ERREUR {
        BLOQUANT = 0,
        NON_BLOQUANT = 1,
        CHOIX = 2,
    }
    interface IModalServiceProvider extends ng.IServiceProvider {
        $get: () => IModalService;
    }
    interface IModalService {
        showPopup(popupOptions: IModalPopup): ng.IPromise<any>;
        showConfirm(confirmOptions: IModalConfirm): ng.IPromise<any>;
        showModal(modalOptions: angular.ui.bootstrap.IModalSettings): ng.IPromise<any>;
        /**
         * @description
         * Méthode permettant d'afficher une modale d'erreur de type poupup.
         * @param {TYPE_POPUP_ERREUR} type: indique le type de la modale
         * @param {string} titre:  Titre de la modale
         * @param {string} message:  Texte du message
         * @param {string} boutonPrincipale: Texte du bouton qui retournera un succes
         * @param {string} boutonSecondaire: Texte du bouton qui retournera un catch
         */
        showErreur(type: TYPE_POPUP_ERREUR, titre: string, message: string, boutonPrincipal?: string, boutonSecondaire?: string): ng.IPromise<any>;
        /**
         * @description
         * Méthode permettant de demander à l'utilisateur d'enregistrer ou non les données non sauvées lorsqu'il quitte l'application.
         */
        showExit(): ng.IPromise<any>;
    }
    interface IModalPopup {
        headerText: string;
        bodyText: string;
        closeButtonText?: string;
        iconName?: string;
        size: string;
    }
    interface IModalConfirm extends IModalPopup {
        actionButtonText: string;
    }
    interface IModalPdf {
        headerText: string;
        closeButtonText?: string;
        pdfUrl: string;
        pdfWidth: string;
        pdfHeight: string;
        size: string;
    }
    class ModalService {
        $templateCache: ng.ITemplateCacheService;
        $sce: ng.ISCEService;
        private $modal;
        constructor($modal: angular.ui.bootstrap.IModalService, $templateCache: ng.ITemplateCacheService, $sce: ng.ISCEService);
        /**
         *  Cette méthode permet d'afficher une fenêtre de type popup (avec un bouton de fermeture).
         */
        showPopup(popupOptions: IModalPopup, erreur?: boolean): ng.IPromise<any>;
        /**
         *  Cette méthode permet d'afficher une fenêtre de confirmation avec un bouton action et un bouton annulation.
         */
        showConfirm(confirmOptions: IModalConfirm): ng.IPromise<any>;
        showModal(modalOptions: angular.ui.bootstrap.IModalSettings): ng.IPromise<any>;
        showPDF(modalPdfOptions: IModalPdf): ng.IPromise<any>;
        showErreur(type: TYPE_POPUP_ERREUR, titre: string, message: string, boutonPrincipal?: string, boutonSecondaire?: string): ng.IPromise<any>;
        showExit(): ng.IPromise<any>;
    }
}

declare module MyWay.UI {
    /**
     * Énumération sur l'état global de l'accordéon
     */
    class EtatGlobal {
        static mixte: string;
        static ouvert: string;
        static ferme: string;
    }
    /**
     * Classe AccordeonController
     * Contrôlleur de la directive mv-accordeon
     */
    class AccordeonController {
        private $scope;
        static $inject: string[];
        idPanneauDefaut: string;
        fermetureAutomatique: boolean;
        etatGlobal: EtatGlobal;
        mapCtrlHretractable: {
            key: string;
            value: HRetractableController;
        };
        constructor($scope: ng.IScope);
        ajouterPanneauRetractable(id: string, ctrl: HRetractableController): void;
        /**
         * Fonction pour la vérification de la fermeture de l'ensemble des panneaux
         */
        verifierFermetureGlobale(): boolean;
        /**
         * Fonction pour la vérification de l'ouverture de l'ensemble des panneaux
         */
        verifierOuvertureGlobale(): boolean;
        fermerPanneauxRetractable(id: string): void;
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    interface IMwAutocompletionScope extends ng.IScope {
        data: any;
        liste: any;
        showDropdown: boolean;
        placeholder: string;
        focusIn: boolean;
        id: string;
        searchStr: string;
        obligatoire: boolean;
        query: string;
        limitSearch: string;
        valueinput: string;
        keyupsearch: any;
        search: any;
        select: any;
        autocompletionWidth: string;
    }
    class MwAutocompletionController {
        private $scope;
        static $inject: string[];
        constructor($scope: IMwAutocompletionScope);
    }
}

declare module MyWay.UI {
    function mwAutocompletion(): ng.IDirective;
}

declare module MyWay.UI {
    interface IMwAutoSelectScope extends ng.IScope {
        getIsSelection: Function;
    }
}

declare module MyWay.UI {
    interface IBoutonActionRiche {
        titreAction: string;
        clicAction: Function;
    }
    class MwBoutonListeActionsController {
        private $scope;
        static $inject: string[];
        titre: string;
        data: IBoutonActionRiche[];
        id: string;
        sens: string;
        modele: string;
        position: string;
        ouvert: boolean;
        isDisabled: boolean;
        constructor($scope: ng.IScope);
        afficherDropdown(): void;
        cacherDropdown(): void;
        getSens(): string;
        toggle(open: boolean): void;
    }
}

declare module MyWay.UI {
    function mwBoutonListeActions(): ng.IDirective;
}

declare module MyWay.UI {
    interface ImwBoutonVoletControllerScope extends ng.IScope {
        gauche: boolean;
        droite: boolean;
        bas: boolean;
        haut: boolean;
        opened: boolean;
        simple: boolean;
        autoClose: string;
        position: string;
        texte: string;
        modele: string;
        etat: Function;
        close: Function;
        fermer: Function;
    }
    class MwBoutonVoletController {
        private $scope;
        private $element;
        private $document;
        static $inject: string[];
        constructor($scope: ImwBoutonVoletControllerScope, $element: ng.IAugmentedJQuery, $document: ng.IAugmentedJQuery);
        containsChild(parent: Node, child: Node): boolean;
    }
}

declare module MyWay.UI {
    function mwBoutonVolet(): ng.IDirective;
}

declare module MyWay.UI {
    function mwButton(): ng.IDirective;
}

declare module MyWay.UI {
    function mwButtonIcone(): ng.IDirective;
}

declare module MyWay.UI {
    interface MWChargementAttributes extends ng.IAttributes {
        mwChargement: string;
    }
    /**
     * Directive mw-chargement. Attribut
     * Mettant en place le chargement court. Prend en attribut un booléen ou une promesse.
     * Permet de bloquer l'élément de la directive de toutes interactions utilisateurs.
     * Permet d'afficher un style avec une icône d'attente.
     */
    function mwChargement($q: ng.IQService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService): ng.IDirective;
}

declare module MyWay.UI {
    interface ImwChargementScope extends ng.IScope {
        etat: any;
        texte: string;
        visible: boolean;
        annuler: Function;
        getPourcentage: Function;
    }
}

declare module MyWay.UI {
    interface IMwCheckbox extends ng.IScope {
        data: any;
        id: string;
    }
    class MwCheckbox {
        private $scope;
        _data: any;
        static $inject: string[];
        constructor($scope: IMwCheckbox);
    }
    interface IMwSimpleCheckbox extends ng.IScope {
        model: any;
        indeterminate: boolean;
        id: string;
        label: string;
        disabled: boolean;
        onChange: any;
    }
    class MwSimpleCheckboxCtrl {
        private $scope;
        _data: any;
        static $inject: string[];
        constructor($scope: IMwSimpleCheckbox);
        onChange(): void;
    }
}

declare module MyWay.UI {
    function mwCheckbox(): ng.IDirective;
    /**
     * Code extrait de Angular-ui : https://github.com/angular-ui/ui-indeterminate/blob/master/src/indeterminate.js
     *
     * Provides an easy way to toggle a checkboxes indeterminate property
     *
     * @example <input type="checkbox" ui-indeterminate="isUnkown">
     */
    function mwIndeterminate(): ng.IDirective;
    function mwSimpleCheckbox(): ng.IDirective;
}

declare module MyWay.UI {
    /**
     * Directive qui permet de modifier la propriété inderterminate d'une case à cocher
     */
    function mwIndeterminateTroisEtats($compile: ng.ICompileService): ng.IDirective;
}

declare module MyWay.UI {
    /**
     * Énumération listant les état possible du composant.
     *
     */
    enum ComboboxState {
        onInit = 0,
        onFocus = 1,
        onClick = 2,
        onSelect = 3,
        onClose = 4,
        onOpen = 5,
        onQuit = 6,
        onGetMatchesAsync = 7,
    }
    /**
     * Controleur de la directive mw-combobox
     */
    class ComboboxController {
        private originalScope;
        private element;
        private $parse;
        private $q;
        private $timeout;
        private $position;
        static $inject: string[];
        private state;
        private modelCtrl;
        private ngModelOptions;
        private scope;
        private hasFocus;
        private isAutocomplete;
        private waitTime;
        private HOT_KEYS;
        private eventDebounceTime;
        private minLength;
        private inputFormatter;
        private originalParserResult;
        private filterParserResult;
        private parserResult;
        private timeoutPromise;
        private isLoadingSetter;
        private isNoResultsSetter;
        private focusFirst;
        private isSelectEvent;
        private onSelectCallback;
        private onBottomActionCallback;
        private autocompleteAction;
        private isSelectOnBlur;
        private appendToBody;
        private appendTo;
        private selectOnExact;
        private isOpenSetter;
        private showHint;
        private parsedModel;
        private invokeModelSetter;
        private $setModelValue;
        private selected;
        private offDestroy;
        private previousSelection;
        private popUpEl;
        private boutonEl;
        private guidageEl;
        private guidageId;
        private popupId;
        private inputsContainer;
        private hintInputElem;
        private debouncedRecalculate;
        private itemPerPage;
        private resultGetMatches;
        private inputIsExactMatch;
        /**
         * Constructeur
         */
        constructor(originalScope: any, element: any, attrs: any, $compile: ng.ICompileService, $parse: ng.IParseService, $q: ng.IQService, $timeout: ng.ITimeoutService, $document: ng.IDocumentService, $window: ng.IWindowService, $rootScope: ng.IRootScopeService, $$debounce: any, $position: any, comboboxParser: any);
        /**
         *
         * Initialisation du Controleur
         *
         */
        init(_modelCtrl: any, _ngModelOptions: any): void;
        private scheduleSearchWithTimeout(inputValue);
        private cancelPreviousTimeout();
        /**
         * Recalcule le contenu de la liste filtré par la valeur du champ
         */
        private getMatchesAsync;
        private resetHint();
        private resetMatches();
        private getMatchId(index);
        private fireRecalculating();
        private recalculatePosition();
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    function ComboboxHighlight($sce: ng.ISCEService, $injector: any, $log: ng.ILogService): (matchItem: any, query: any) => any;
    function ComboboxPagingBy(): (input: any, pageCount: number, itemPerPage: number) => any;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    class DatatableColumn {
        field: string;
        orderable: boolean;
        filterable: boolean;
        constructor(field: string);
    }
    class Datatable {
        items: any;
        filteredItems: any;
        orderedItems: any;
        displayedItems: any;
        selectedItems: any;
        filter: any;
        order: any;
        private filterFilter;
        private orderByFilter;
        orderable: boolean;
        filterable: boolean;
        datatableColumnList: Array<DatatableColumn>;
        static $inject: string[];
        constructor(filterFilter: ng.IFilterService, orderByFilter: ng.IFilterService);
        setItems(items: any): void;
        private refreshFilteredItems();
        private refreshOrderedItems();
        private refreshDisplayedItems();
        setSelectedItems(selectedItems: any): void;
        getDatatableColumn(field: String): void;
        registerDatatableColumn(datatableColumn: DatatableColumn): void;
        setDatatableColumnOrderable(orderable: boolean): void;
        setDatatableColumnFilterable(filterable: boolean): void;
    }
    class DatatableSelection {
        isAllSelected: any;
        isPartialSelected: any;
        constructor();
        calculatePartialSelected(selectedItems: any, orderedItems: any): boolean;
        setAllNoneSelected(selectedItems: any, orderedItems: any): void;
    }
}

declare module MyWay.UI {
    class DatatableColumnOptions {
        field: string;
        orderable: boolean;
        filterable: boolean;
        constructor(field: string);
    }
    class DatatableOptions {
        orderable: boolean;
        filterable: boolean;
        datatableColumnOptionsList: Array<DatatableColumnOptions>;
        constructor();
        registerDatatableColumnOptions(datatableColumOptions: DatatableColumnOptions): void;
        setDatatableColumnOptionsOrderable(orderable: boolean): void;
        setDatatableColumnOptionsFilterable(filterable: boolean): void;
    }
    class MwDatatable {
        items: any;
        filteredItems: any;
        orderedItems: any;
        displayedItems: any;
        selectedItems: any;
        pagination: any;
        numberOfPages: any;
        filter: any;
        order: any;
        private filterFilter;
        private orderByFilter;
        datatableOptions: any;
        isAllSelected: any;
        isPartialSelected: any;
        selectionMode: any;
        static $inject: string[];
        constructor(filterFilter: ng.IFilterService, orderByFilter: ng.IFilterService);
        setItems(items: any): void;
        setSelectedItems(selectedItems: any): void;
        calculatePartialSelected(): void;
        setAllNoneSelected(): void;
        changeSelectedItemValue(item: any): void;
        setPagination(pageSize: any, pageNumber: any): void;
        private refreshFilteredItems();
        private refreshOrderedItems();
        private refreshDisplayedItems();
        private refreshPageNumber();
        clearFilter(): void;
        filterBy(field: string, customExpression: string, comparator: string): void;
        setFilterValue(value: string): void;
        orderBy(field: string, expression: string, reverse: string): void;
        contains(arr: any, obj: any): boolean;
        containsIndex(arr: any, obj: any): number;
    }
}

declare module MyWay.UI {
    function datatable($parse: ng.IParseService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService, $log: ng.ILogService): ng.IDirective;
    function datatableField(): ng.IDirective;
    function filterable($templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService): ng.IDirective;
    function orderable($templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService): ng.IDirective;
}

declare module MyWay.UI {
    function mwDatatable($parse: ng.IParseService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService, $log: ng.ILogService): ng.IDirective;
    function mwDatatableField($parse: ng.IParseService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService): ng.IDirective;
    function mwDatatableFilters($parse: ng.IParseService): ng.IDirective;
    function mwDatatableSelection($compile: ng.ICompileService, $templateCache: ng.ITemplateCacheService): ng.IDirective;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    function mwInfobulleMessage($document: ng.IDocumentService, $timeout: ng.ITimeoutService): ng.IDirective;
}

declare module MyWay.UI {
    interface MwInfobulleData {
        type: string;
        picto: string;
        ouvertureBlock: boolean;
        message1: string;
        open: boolean;
        infobulleMessageId: string;
    }
    function mwInfobullePicto(): ng.IDirective;
}

declare module MyWay.UI {
    interface ImwMontantControllerScope extends ng.IScope {
        step: number;
        min: number;
        max: number;
        id: string;
        required: boolean;
    }
    class MwMontantController {
        stringMontant: string;
        private ngModelCtrl;
        private element;
        private scope;
        private attrs;
        oldValue: string;
        negative: boolean;
        el: HTMLInputElement;
        constructor($scope: ImwMontantControllerScope, $attrs: ng.IAttributes, $element: ng.IAugmentedJQuery);
        /**
         * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
         * C'est par lui qu'on va manipuler la donnée de notre directive.
         */
        init(_ngModelCtrl: ng.INgModelController): void;
        formatValue(inputValeur: string): string;
        format(inputVal: String): string;
        mainFormat(inputValue: string, inputVal: string): string;
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    function mwMarqueur(): ng.IDirective;
}

declare module MyWay.UI {
    interface IMwNumberCtrlScope extends ng.IScope {
        ngModel: number;
        id: string;
        name: string;
        decimal: number;
        required: boolean;
        onChange: any;
        isNumber: any;
        ngChange: Function;
        ngBlur: Function;
        ngFocus: Function;
    }
    class mwNumberCtrl {
        private scope;
        private ngModelCtrl;
        private model;
        private element;
        private attrs;
        private input;
        private cursorPos;
        private virgulePos;
        private rootscope;
        private keyCode;
        private keyPressed;
        private ngModelatt;
        private action;
        private viewLenghtBeforeChange;
        required: boolean;
        view: string;
        onChangeAttribut: any;
        private nbDecimal;
        static $inject: string[];
        constructor($scope: IMwNumberCtrlScope, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes);
        /**
         * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
         * C'est par lui qu'on va manipuler la donnée de notre directive.
         */
        init(_ngModelCtrl: ng.INgModelController): void;
        onKeyDown($event: any): void;
        onKeyPress($event: any): void;
        onChange(): void;
        getChar(event: any): string;
        stringToNumber(inputValue: string): number;
        numberToString(model: number): string;
        onFocus(): void;
        onBlur(): void;
    }
}

declare module MyWay.UI {
    /**
     * Input formatté d'un number
     * - Séparateur espace entre les milliers
     * - Saisie or digits non affiché
     * - Saisie "." ou "," converti en ","
     * - Negatif possible
     * - Formattage  du number à l"affichage
     * - Gestion min
     * - Gestion max
     */
    function mwNumber(): ng.IDirective;
}

declare module MyWay.UI {
    /**
     * Ce filtre permet d'utilise le service $parse dans une expression angular d'une vue.
     * Par exemple dans un ng-bind
     *
     */
    function mwParseFilter($parse: ng.IParseService): (expression: string, context: any) => any;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    function factory($timeout: any): ng.IDirective;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    interface INavcolHandler {
        onSelectionChangeNavcolList(objet: any, colId: string): any;
        onNavcolRecherche(critere: string, id: string): any;
    }
    interface INavcolCtrlScope extends ng.IScope {
        searchEnabled?: boolean;
        handler: INavcolHandler;
        responsiveClasses?: string;
        id: string;
    }
    class NavigationColonne {
        selection: any;
        distinctField: string;
        filterValue: string;
        activeItem: Object;
        id: string;
        filteredItems: Array<Object>;
        titre: string;
        constructor(selection: any, distinctField: string, titre?: string);
        setFilterValue(value: string): void;
    }
    /**
     *
     *   Controlleur de la directive mw-navcol (composant entier)
     *
     */
    class NavcolCtrl {
        private $scope;
        static $inject: string[];
        datalist: any;
        searchEnabled: boolean;
        search: string;
        currentCol: number;
        responsiveClasses: string;
        colonnes: Array<NavigationColonne>;
        handler: INavcolHandler;
        /**
         * Contruction du controleur
         */
        constructor($scope: INavcolCtrlScope, attrs: any);
        addColumn(newColonne: NavigationColonne): number;
        rechercher(critereRecherche: string): void;
        clearSubColonne(index: number): void;
        colPrev(): void;
    }
    interface INavcolListCtrlScope extends ng.IScope {
        titre: string;
        id: string;
        distinctField: string;
        datalist: Array<Object>;
        lastColumn: boolean;
        templateUrl: string;
        hasChevron: any;
        preSelectedActiveItem: Object;
    }
    /**
     *
     *   Controlleur de la directive mw-navcol-list qui représente une colonne
     *
     */
    class NavcolListCtrl {
        private $scope;
        private $compile;
        private $timeout;
        static $inject: string[];
        datalist: Array<Object>;
        parentCtrl: NavcolCtrl;
        colonne: NavigationColonne;
        private indexcolonne;
        searchEnabled: boolean;
        searchActive: boolean;
        search: any;
        activeItem: Object;
        lastColumn: boolean;
        id: string;
        templateUrl: string;
        isNextColumnHasElements: boolean;
        /**
         * Contruction
         */
        constructor($scope: INavcolListCtrlScope, $compile: any, $timeout: ng.ITimeoutService);
        initParentCtrl(parentCtrl: NavcolCtrl, ctrl: NavcolListCtrl): void;
        /**
         * Cette fonciton prend en compte la pré sélection
         */
        private preSelection();
        toogleSearch(): void;
        onFilterChange(): void;
        onClick(item: any): void;
        isActiveItem(item: any): boolean;
        setChevron(item: any): any;
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    /**
     * Énumération listant les types de composants possibles.
     * La hiérarchie étant : Chapitre -> SousChapitre -> Page -> Section.
     */
    enum TypeComponent {
        Chapitre = 0,
        SousChapitre = 1,
        Page = 2,
        Section = 3,
    }
    /**
     * Classe mère des composants de la navigation.
     */
    class TotemComponent {
        titre: string;
        private isActif;
        typeComponent: TypeComponent;
        parent: TotemComponent;
        isComplete: boolean;
        isFiabilise: boolean;
        /**
         * Constructeur de la classe mère
         * @param {string} titre - Titre du composant
         * @param {MyWay.UI.TypeComponent} typeComponent - Type du composant
         */
        constructor(titre: string, typeComponent: TypeComponent);
        /**
         * Méthode de vérification si le composant est de type Chapitre
         * @return {boolean}
         */
        isChapitre(): boolean;
        /**
         * Méthode de vérification si le composant est de type SousChapitre
         * @return {boolean}
         */
        isSousChapitre(): boolean;
        /**
         * Méthode de vérification si le composant est de type Page
         * @return {boolean}
         */
        isPage(): boolean;
        /**
         * Méthode de vérification si le composant est de type Section
         * @return {boolean}
         */
        isSection(): boolean;
        /**
         * Méthode qui renvoie la valeur de l'indice de complétude (indique si les données obligatoire de la page ou de la section sont toutes renseignées
         * àreturn {boolean}
         */
        checkIsComplete(): boolean;
        /**
         * Méthode qui renvoie la valeur de l'indice de fiabilité (indique si les données de la page ou de la section sont fiables
         * àreturn {boolean}
         */
        checkIsFiabilise(): boolean;
    }
    class TotemComposite extends TotemComponent {
        list: TotemComponent[];
        constructor(titre: string, typeComponent: TypeComponent);
        /**
         * Méthode d'ajout d'un composant dans la liste des composants fils
         * @param {MyWay.UI.TypeComponent} c - Composant à ajouter
         */
        add(c: TotemComponent): void;
        /**
         * Méthode de suppression d'un composant dans la liste des composants fils
         * @param {number} i - Index de composant à supprimer
         */
        remove(i: number): void;
        /**
         * Méthode de vérification si le composant est terminé
         * @return {boolean}
         */
        checkIsComplete(): boolean;
    }
    /**
     * Classe des composants de type Page.
     * @extends MyWay.UI.TotemComposite
     */
    class TotemPage extends TotemComposite {
        target: string;
        /**
         * Constructeur de la classe
         * @param {string} titre - Titre du composant
         * @param {string} target - Identifiant de l'élément du DOM visé
         */
        constructor(titre: string, target: string);
    }
    /**
     * Classe des composants de type Chapitre.
     * @extends MyWay.UI.TotemComposite
     */
    class TotemChapitre extends TotemComposite {
        /**
         * Constructeur de la classe
         * @param {string} titre - Titre du composant
         */
        constructor(titre: string);
    }
    /**
     * Classe des composants de type Sous-chapitre.
     * @extends MyWay.UI.TotemComposite
     */
    class TotemSSChapitre extends TotemComposite {
        toggle: boolean;
        pageAutoRoute: TotemPage;
        ouverturePageAuto: boolean;
        /**
         * Constructeur de la classe
         * @param {string} titre - Titre du composant
         */
        constructor(titre: string);
    }
    /**
     * Classe des composants de type Section.
     * @extends MyWay.UI.TotemComponent
     */
    class TotemSection extends TotemComponent {
        target: string;
        /**
         * Constructeur de la classe
         * @param {string} titre - Titre du composant
         * @param {string} target - Identifiant de l'élément du DOM visé
         */
        constructor(titre: string, target: string);
    }
}

declare module MyWay.UI {
    interface INavigationService {
        setActivePage(page: TotemPage, section: TotemSection, fromRouteChangeSuccessEvent?: boolean): any;
        setActiveSection(section: TotemSection): any;
        setActiveSousChapitre(sousChapitre: TotemSSChapitre): any;
        getChapitre(titre: string): TotemChapitre;
        getSousChapitre(titre: string): TotemSSChapitre;
        getPage(titre: string): TotemPage;
        getSection(titre: string): TotemSection;
        getActivePage(): TotemPage;
        getActiveSection(): TotemSection;
        changeRoute(page: TotemPage, section: TotemSection): any;
        /**
         * Return la proprieté _navigation. PErme td esavoir si la page contient le composant
         */
        getNavigationArray(): Array<TotemComponent>;
        /**
        * setter de l'indicateur scrollToSectionOnPageLoad qui permet de désactivé le scroll à la section lors du chargement d'une page.
        * C'est très utile pour laisser le chemin de fer visible
        **/
        enableScrollToSectionOnPageLoad(scrollToSectionOnPageLoad: boolean): any;
        /**
        * Scroll le contenu pour que la section soit en haut de l'écran
        **/
        scrollToSection(section: TotemSection): any;
    }
    class NavigationService implements INavigationService {
        private $location;
        private $document;
        private mwSmoothScroll;
        private _navigation;
        private _activePage;
        private _activeSection;
        private _activeSousChapitreActif;
        _$rootScope: ng.IRootScopeService;
        private _MW_EVENTS;
        private _$timeout;
        private scrollInProgress;
        private isFromTotemContenuDirective;
        private deRegistrationChangeRouteHandler;
        private scrollToSectionOnPageLoad;
        constructor($rootScope: ng.IRootScopeService, totemEvent: IMwEvents, $timeout: ng.ITimeoutService, $location: ng.ILocationService, $document: ng.IDocumentService, mwSmoothScroll: MyWay.UI.IMwSmoothScrollService);
        init(navigation: Array<TotemComponent>, origine?: string): void;
        /**
         * Return la proprieté _navigation. PErme td esavoir si la page contient le composant
         */
        getNavigationArray(): Array<TotemComponent>;
        setNavigation(navigation: Array<TotemComponent>): void;
        private getFirstPage(component);
        private findComponent(listComponent, titre, type);
        private findPageByTarget(listComponent, target);
        getActivePage(): TotemPage;
        getActiveSection(): TotemSection;
        setActiveSection(section: TotemSection): void;
        /**
         *
         * Lors d'un clic sur une page du menu :
         * - ferme le chapitre ouvert si autre chapitre
         * - ouvre le chapitre de la page si la page et dans un chapitre
         * - positionne la page active et la section active
         * - positionne le focus sur la section cible
         * - scroll jusqu'à la section cible si 3eme parametres fromRouteChangeSuccessEvent vaut false ou est non présent.
         *    en d'autre terme si true et propriete scrollToSectionOnPageLoad à false, alors pas de scroll.
         * TODO gérer le cas ou si la route echoue il ne faut pas jouer cette fonction !
         */
        setActivePage(page: TotemPage, section: TotemSection, fromRouteChangeSuccessEvent?: boolean): void;
        callbackSmoothScroll(section: TotemSection): void;
        getActiveLinks(): TotemComponent[];
        /**
         * Active ou Desactive le sous chapitre.
         */
        setActiveSousChapitre(sousChapitre: TotemSSChapitre): void;
        getChapitre(titre: string): TotemChapitre;
        getSousChapitre(titre: string): TotemSSChapitre;
        getPage(titre: string): TotemPage;
        getSection(titre: string): TotemSection;
        isScrollInProgress(): boolean;
        setScrollInProgress(enable: boolean): void;
        changeRoute(page: TotemPage, section: TotemSection): void;
        scrollTotem(event: any, deltaY?: number): void;
        scrollPage(container: any, deltaY: any): void;
        scrollTotemBy(deltaY: number): void;
        scrollToSection(section: TotemSection): void;
        enableScrollToSectionOnPageLoad(enable: boolean): void;
        focusWithoutScrolling(el: any): void;
    }
}

declare module MyWay.UI {
    class MwNotificationController {
        static $inject: string[];
        mwNotificationService: IMwNotificationService;
        constructor(mwNotificationService: MwNotificationService);
        showNotification(data: string): void;
        closeNotification(id: any): void;
    }
}

declare module MyWay.UI {
    interface IMwNotificationService {
        showNotification(mess: string, type?: string): void;
        message: string;
        notificationList: Array<any>;
        close(id: any): void;
        closeAll(): void;
        closeCurrent(): void;
    }
    class Notification {
        id: number;
        tpl: any;
        promise: ng.IPromise<void>;
        constructor(id: number, tpl: any);
    }
    class MwNotificationService implements IMwNotificationService {
        private $rootScope;
        private $document;
        private $compile;
        $templateCache: ng.ITemplateCacheService;
        private $timeout;
        isNotificationShow: boolean;
        private tpl;
        notificationList: Array<any>;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $document: ng.IDocumentService, $compile: ng.ICompileService, $templateCache: ng.ITemplateCacheService, $timeout: ng.ITimeoutService);
        message: string;
        showNotification(mess: string, type?: string): void;
        private showNotifications(notification);
        close(id: any): void;
        closeCurrent(): void;
        closeAll(): void;
    }
}

declare module MyWay.UI {
    interface IMwPanelControllerScope extends ng.IScope {
        niveau: string;
        titre: string;
        _titre: string;
        icone: string;
        inconeClass: string;
        id: string;
        cssPanel: string;
    }
    class MwPanelController {
        private $scope;
        _navigationService: MyWay.UI.INavigationService;
        _titre: string;
        _niveau: string;
        _id: string;
        static $inject: string[];
        isInactif: boolean;
        hasTitle: boolean;
        constructor($scope: IMwPanelControllerScope, navigationService: MyWay.UI.INavigationService, attrs: any);
        isPanelActif(): boolean;
    }
}

declare module MyWay.UI {
    function mwPanel(): ng.IDirective;
    function mwPanelSticky($window: any, $uibPosition: any): ng.IDirective;
}

declare module MyWay.UI {
    interface IMwPanelActionControllerScope extends ng.IScope {
        iconName: string;
    }
    class MwPanelActionController {
        private $scope;
        static $inject: string[];
        constructor($scope: IMwPanelActionControllerScope);
    }
}

declare module MyWay.UI {
    function mwPanelAction(): ng.IDirective;
}

declare module MyWay.UI {
    interface IMwPanelEditionControllerScope extends ng.IScope {
        id: string;
        texteBtnEditionOn: string;
        eventNameEditionOn: string;
        texteBtnEditionOff: string;
        eventNameEditionOff: string;
    }
    class MwPanelEditionController {
        private $scope;
        isModeEdition: boolean;
        texteBouton: string;
        static $inject: string[];
        constructor($scope: IMwPanelEditionControllerScope);
        toggleMode(): void;
    }
}

declare module MyWay.UI {
    function mwPanelEdition(): ng.IDirective;
}

declare module MyWay.UI {
    interface IMwPanelFreeControllerScope extends ng.IScope {
        niveau: string;
        id: string;
    }
    interface IMwPanelBarControllerScope extends ng.IScope {
        titre: string;
        largeur: string;
    }
    class MwPanelFreeController {
        private $scope;
        niveau: string;
        id: string;
        _navigationService: MyWay.UI.INavigationService;
        static $inject: string[];
        constructor($scope: IMwPanelFreeControllerScope, navigationService: MyWay.UI.INavigationService);
        isPanelActif(): boolean;
    }
    class MwPanelBarController {
        private $scope;
        titre: string;
        largeur: string;
        private mwPanelFreeCtrl;
        static $inject: string[];
        constructor($scope: IMwPanelBarControllerScope);
        setPanelFreeCtrl(mwPanelFreeCtrl: MwPanelFreeController): void;
        getNiveau(): string;
        getTitre(): string;
        getClass(): string;
    }
}

declare module MyWay.UI {
    interface IPanelBarScope extends ng.IScope {
        getNiveau: () => string;
    }
    function mwPanelFree(): ng.IDirective;
    function mwPanelBar(): ng.IDirective;
    function mwPanelBody(): ng.IDirective;
    function mwPanelFreeSticky($window: any): ng.IDirective;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    interface IScopeHretractable extends ng.IScope {
        id: string;
        type: string;
        open: boolean;
        titre: string;
    }
    class HRetractableController {
        private $scope;
        private $log;
        static $inject: string[];
        id: string;
        style: string;
        titre: string;
        type: string;
        open: boolean;
        constructor($scope: IScopeHretractable, $log: ng.ILogService);
        /**
         *  Fonction de changement d'état
         */
        toggleOpen(): void;
    }
}

declare module MyWay.UI {
    function mwHretractable($log: ng.ILogService): ng.IDirective;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    interface IMwSelectAttributes extends ng.IAttributes {
        labelAttribute: string;
    }
}

declare module MyWay.UI {
    interface IErreurFormulaire {
        nom: string;
        ancre: string;
    }
    function mwSyntheseErreurs($rootScope: ng.IRootScopeService, MW_EVENTS: MyWay.UI.IMwEvents, $timeout: ng.ITimeoutService, mwGenerateurIdService: IMwGenerateurIdService, $animate: ng.IAnimateService): ng.IDirective;
}

declare module MyWay.UI {
    interface ImwTableControllerScope extends ng.IScope {
        options: any;
        id: string;
    }
    interface ImwTableColumnOptions {
        title: string;
        bind: string;
        cssClass: string;
        filter?: string;
        template?: string;
        disableFilter?: boolean;
        comparator?: IMwTableComparator;
    }
    /**
     * Description des options du composant tableau mw-table.
     *
     * width : string, Permet d'indiquer la class bootstrap pour la largeur du composant global.
     * orderBy ?:  string, Nom du champ trié au chargement (facultatif).
     * reserve : boolean, Sens du tri de l'orderBy (true: descendant, false: ascendant).
     * perPage : number, Nombre de ligne par page.
     * multiSelect : boolean, Indique si le tableau est multiselection.
     * filterEnable: boolean, Active ou non les filtres sur colonnes.
     * sortEnable : boolean, active ou non le tri sur colonnes.
     * moreEnable: boolean, Si à true, la pagination n'est plus affiché et se fait par scroll. Chaque scroll ajoute le nombre d eligne définit dans perPage.
     * columns : Array<ImwTableColumnOptions>, Décrit une colonne.
     *      title : string, Titre de la colonne
     *       bind : string, Nom du champ affiché dans la colonne et utilisé pour le tri
     *       cssClass : string, Permet d'indiquer une classe de style bootstrap
     * data : Array<Object>: Liste de données à afficher dans le tableau.
     * selectedItems : Array<Object>, Cette objet contiendra les lignes sélectionnées.
     * disabledItems ?: Array<Object>, Cette objet contiendra les lignes désactivées (facultatif).
     * openSelected ?: ouvre le détail de la premiere ligne sélectionnées (facultatif)
     * templateUrl : string, Chemin du template qui décrit l'affichage des données détail (complément de la ligne affiché sur la sélection).
     * selectionChangeHandler ?: ISelectionChangeHandler, Handler qui implémente l'interface ISelectionChangeHandler (facultatif)
     * caption : string, titre du tableau. Obligatoire pour l'accessibilité.
     * theadSticky ?: booelan, Active ou non le mode sticky (entête visible même lors du scroll ) de l'entête du tableau (facultatif).
     * tableHandler ?: IMwTableHandler, Handler qui permet d'être averti des changements de filtre, page ou du tri (facultatif).
     */
    interface ImwTableOptions {
        width: string;
        orderBy?: string;
        reserve?: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: Array<ImwTableColumnOptions>;
        data: Array<Object>;
        selectedItems: Array<Object>;
        disabledItems?: Array<Object>;
        openSelected?: boolean;
        templateUrl: string | Function;
        selectionChangeHandler?: ISelectionChangeHandler;
        readOnly?: boolean;
        caption?: string;
        theadSticky?: string;
        tableHandler?: IMwTableHandler;
    }
    interface ISelectionChangeHandler {
        onSelectionChange(selectedObjet: Object): any;
        onShowDetail?(rowObjet: Object): any;
        onHideDetail?(rowObjet: Object): any;
    }
    interface IMwTableHandler {
        onPageChange?(currentPage: number): any;
        onFilterChange?(search: Object): any;
        onSortChange?(predicate: any, reserve: any): any;
    }
    class MwTableController implements IMwTableObserver {
        private $scope;
        private $timeout;
        private tableService;
        private tableFilterService;
        tableObserverDirectiveId: string;
        predicate: string;
        reserve: boolean;
        lastExpandedItem: any;
        myFilter: ng.IFilterService;
        totalItems: number;
        currentPage: number;
        maxSize: number;
        perPage: number;
        search: Object;
        filteredModel: Array<Object>;
        filteredColumns: Object;
        sortedModel: Array<Object>;
        moreEnable: boolean;
        avecLigneDetail: boolean;
        selectionChangeHandler: ISelectionChangeHandler;
        mwTableHandler: IMwTableHandler;
        id: string;
        allOrNoneChecked: boolean;
        partialSelection: boolean;
        filtrageEnCours: boolean;
        indexColumnFilter: number;
        colspan: number;
        hasSticky: boolean;
        readOnly: boolean;
        element: ng.IAugmentedJQuery;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor($scope: ImwTableControllerScope, $filter: ng.IFilterService, $element: ng.IAugmentedJQuery, $timeout: ng.ITimeoutService, tableService: IMwTableServiceOpefi, tableFilterService: TableFilterService);
        getPaginationState(): IMwPaginationState;
        setPaginationState(pageState: IMwPaginationState): void;
        /**
         * Cette méthode est appelé a chaque mise à jour du tableau
         * Elle permet de réactualisé , le filtre, le tri, la pagination, l'ouverture des lignes et gérer les cases à cocher si sélection multiple
         *
         *
         */
        updateTable(): void;
        /**
         * Appele lorsque le filtre change
         */
        filtreChange(): void;
        /**
         * Getter sur templateUrl
         */
        getTemplateUrl(ligne?: any): any;
        /**
         * Click sur l'icone de tri
         */
        onSortClick(column: any): void;
        /**
         *
         * @param column
         */
        onFilterClick(column: any): void;
        gererSelectionLignes(ligne: any): void;
        gererDetailLigne(ligne: any, index: number): void;
        /**
         * Gestion de la sélection d'une ligne.
         */
        onClickLigne(item: any, index: number): void;
        /**
         *
         */
        getNbColonne(): any;
        /**
         * Click sur la case à coché de l'entête
         *  - S'il y avait ue sélection partiel des lignes on désélectionne tout
         *  - S'il y avait aucunes sélection de ligne on sélectionne tout
         *  - S'il y avait toutes les lignes sélectionnées on désélecitonne tout
         */
        onMultiSelectionClick(): void;
        /**
         *
         */
        private checkMultiSelectionVariable();
        /**
         *
         * @param item
         */
        onSelectionCase(item: any): void;
        isColumnFilterable(index: number, column: any): boolean;
        /**
         * Appeler lorsqu'on click sur le picto filtre d'une colonne
         */
        onClickPictoFilter(index: number, columnName: string): void;
        isTbodyAriaExpanded(expanded: boolean): boolean;
        tBodyAriaControls(expanded: boolean, index: number): string;
        handelKeyLigneAvecDetail(item: any, index: number, event: KeyboardEvent): void;
        /**
         * Implementation de l'interface IMWTableObserver
         */
        unSelectItem(item: any): void;
    }
}

declare module MyWay.UI {
    function mwTable(): ng.IDirective;
    /**
     * @ngdoc directive
     * @name myway.ui.directive.mwTheadSticky
     * @scope
     * @restrict A
     *
     * @description
     * Permet de rendre sticky l'entête du tableau.
     * la directive se positionne en tant qu'attribut du thead.
     * Si la valeur de l'attribut est vide par défaut c'est le document qui est l 'élément scrollable
     * sinon, la valeur fourni doit être un selecteur type css permettant d'identifier l'élément scrollable qui contient le tableau.
     *
     *
     */
    function mwTheadSticky($window: any, $uibPosition: any): ng.IDirective;
}

declare module MyWay.UI {
    function mwTableSlice(): (arr: any, start: any, end: any, mwTableCtrl: any) => any;
    function mwTableSetPagination(): (items: any, mwTableCtrl: any) => any;
    function mwStartFrom(): (input: any, start: any) => any;
    /**
     * Filtre d'une colonne
     */
    function columnFilter(): (liste: Object[], customComporator: Function, criteria: string, columnDescriptor: ImwTableColumnOptions) => Object[];
}

declare module MyWay.UI {
    type comparatorFunction = (item: Object, criteria: string, columnDescriptor: ImwTableColumnOptions) => boolean;
    interface IMwTableComparator {
        comparatorFn(item: Object, criteria: string, columnDescriptor: ImwTableColumnOptions): boolean;
    }
}

declare module MyWay.UI {
    /**
     * Méthodes partagées par la directive MwTable
     */
    interface IMwTableAdapter {
        unSelectItem(item: any): any;
    }
    /**
    * Fourni les méthodes nécessaire pour modifier des données ou des comportement du controlleur de la directive MWTable
    */
    interface IMwTableObserver extends IMwTableAdapter {
        tableObserverDirectiveId: string;
    }
    /**
     * A implémenter pour gérer les observers
     */
    interface IMwTableService {
        registerMwTableObserver(observer: IMwTableObserver): any;
        removeMwTableObserver(observer: IMwTableObserver): any;
        getMwTableObserver(directiveId: string): any;
    }
    /**
     * Ce Service mets à disposition des méthodes permettant à un controlleur de page par exemple de modifier des données de la directive.
     */
    class MwTableService implements IMwTableService {
        private observers;
        constructor();
        /**
         * Renvoie l'observateur (MwTable directive) identifiable par son ID
         * L'observateur permet de manipuler des données dans le controleur d ela directive MwTable
         */
        getMwTableObserver(directiveId: string): IMwTableObserver;
        /**
         * Abonne le controlleur d'une directive MwTable (Observateur)
         * Le controlleur doit implémenter l'interface IMwTableObserver
         */
        registerMwTableObserver(observer: IMwTableObserver): void;
        /**
         * Désabonne le controlleur d'une directive MwTable (Observateur)
         */
        removeMwTableObserver(observer: IMwTableObserver): void;
    }
    /**
     * Service qui offre un eméthode pour filtrer le tableau dans le controleur.
     */
    class TableFilterService {
        private $parse;
        constructor($parse: ng.IParseService);
        filter(array: Array<Object>, tableOptions: ImwTableOptions, criteria: Object): Array<Object>;
    }
}

declare module MyWay.UI {
    class MwTableControllerv1710 implements MyWay.UI.IAdapterMwTable {
        private $scope;
        private $filter;
        private $element;
        private $timeout;
        private tableService;
        private tableFilterService;
        tableObserverDirectiveId: string;
        predicate: string;
        reserve: boolean;
        lastExpandedItem: any;
        myFilter: ng.IFilterService;
        totalItems: number;
        currentPage: number;
        maxSize: number;
        perPage: number;
        search: Object;
        filteredModel: Array<Object>;
        filteredColumns: Object;
        sortedModel: Array<Object>;
        moreEnable: boolean;
        avecLigneDetail: boolean;
        selectionChangeHandler: ISelectionChangeHandler;
        mwTableHandler: IMwTableHandler;
        id: string;
        allOrNoneChecked: boolean;
        partialSelection: boolean;
        filtrageEnCours: boolean;
        indexColumnFilter: number;
        colspan: number;
        hasSticky: boolean;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor($scope: ImwTableControllerScope, $filter: ng.IFilterService, $element: ng.IAugmentedJQuery, $timeout: ng.ITimeoutService, tableService: IMwTableServiceOpefi, tableFilterService: TableFilterService);
        initOption(option: ImwTableOptions): void;
        /**
         * Cette méthode est appelé a chaque mise à jour du tableau
         * Elle permet de réactualisé , le filtre, le tri, la pagination, l'ouverture des lignes et gérer les cases à cocher si sélection multiple
         *
         *
         */
        updateTable(): void;
        /**
         * Appele lorsque le filtre change
         */
        filtreChange(): void;
        /**
         * Getter sur templateUrl
         */
        getTemplateUrl(): any;
        /**
         * Click sur l'icone de tri
         */
        onSortClick(column: any): void;
        /**
         *
         * @param column
         */
        onFilterClick(column: any): void;
        /**
         * Gestion de la sélection d'une ligne.
         */
        onClickLigne(item: any, index: number): void;
        isItemExpanded(item: any): boolean;
        isItemSelected(item: any): boolean;
        indexOf(list: Array<any>, item: any): number;
        isEqual(item1: any, item2: any): boolean;
        /**
         *
         */
        getNbColonne(): any;
        /**
         * Click sur la case à coché de l'entête
         *  - S'il y avait ue sélection partiel des lignes on désélectionne tout
         *  - S'il y avait aucunes sélection de ligne on sélectionne tout
         *  - S'il y avait toutes les lignes sélectionnées on désélecitonne tout
         */
        onMultiSelectionClick(): void;
        /**
         *
         */
        private checkMultiSelectionVariable();
        /**
         * Méthode appelé par la vue lors du changement de la case à coché
         * @param item
         */
        onSelectionCase(item: any, value: boolean): void;
        isColumnFilterable(index: number, column: any): boolean;
        /**
         * Appeler lorsqu'on click sur le picto filtre d'une colonne
         */
        onClickPictoFilter(index: number, columnName: string): void;
        isTbodyAriaExpanded(expanded: boolean): boolean;
        tBodyAriaControls(index: number): string;
        handelKeyLigneAvecDetail(item: any, index: number, event: KeyboardEvent): void;
        getColumnIndex(columnBind: string): number;
        isItemDisabled(item: any): boolean;
        private _showItemInViewPort(indexLigne);
        private _hideDetail();
        private _showDetail(item);
        private _selectItem(item);
        private _unSelectItem(item);
        selectItem(item: any): void;
        /**
         *
         * Implementation de l'interface IAdapterMwTable
         *
         */
        unSelectItem(item: any): void;
        getFilterCriteria(): Array<IMwColumnCriterion>;
        setFilterCriteria(criteria: Array<IMwColumnCriterion>): void;
        getPaginationState(): IMwPaginationState;
        setPaginationState(pageState: IMwPaginationState): void;
        getSortedColumn(): IMwSortedColumn;
        setSortedColumn(sortedColumn: IMwSortedColumn): void;
        setOptions(options: ImwTableOptions): void;
        /**
         * Ouvre le détail d'une ligne si elle en comporte un.
         */
        openItem(item: any): void;
        /**
         * Ferme le détail d'une ligne si elle en comporte un.
         */
        closeItem(item: any): void;
        getLigneOuverte(): any;
        /**
         * Permet de d'appliquer les modifications.
         **/
        apply(): void;
        /**
         * Permet de réinitialiser la liste des lignes sélectionnées
         */
        setSelectedLines(list: Array<any>): void;
        /**
         * Permet de réinitaliser la liste des lignes désactivées
         **/
        setDisabledLines(list: Array<any>): void;
    }
}

declare module MyWay.UI {
    function mwTableOpefi(): ng.IDirective;
}

declare module MyWay.UI {
    /**
     * Description du filtre pour une colonne
     */
    class IMwColumnCriterion {
        columnBind: string;
        criterion: string;
    }
    /**
     * Description de la colonne trié
     */
    class IMwSortedColumn {
        predicate: string;
        reserve: boolean;
    }
    /**
     * Donne l'état de la pagination
     */
    class IMwPaginationState {
        currentPage: number;
        perPage: number;
    }
    interface IAdapterMwTable extends IMwTableObserver {
        getFilterCriteria?(): Array<IMwColumnCriterion>;
        setFilterCriteria?(criteria: Array<IMwColumnCriterion>): any;
        getPaginationState?(): IMwPaginationState;
        setPaginationState?(pageState: IMwPaginationState): any;
        /**
         * Renvoi le nom et le sens de la colonne trié.
         * L'obet IMwSortedColumn donne le nom la propriete (option.column.bind) a trier dans predicate et le sens du tri dans reserve.
         */
        getSortedColumn?(): IMwSortedColumn;
        setSortedColumn?(sortedColumn: IMwSortedColumn): any;
        /**
        * Permet de réinitaliser toutes les options du tableau
        * Attention : cette méthode réinitialise les filtres, le tri, les lignes sélectionnées ...
        */
        setOptions?(options: ImwTableOptions): any;
        /**
         * Ouvre le détail d'une ligne si elle en comporte un.
         */
        openItem?(item: any): any;
        /**
         * Ferme le détail d'une ligne si elle en comporte un.
         */
        closeItem?(item: any): any;
        /**
         * Renvoi l'objet de la ligne dont le détail est visile ou null si pas de ligne detail ou si ligne détail fermé.
         */
        getLigneOuverte?(): any;
        /**
         * Permet de réinitialiser la liste des lignes sélectionnées
         * (remplace l'utilisation de l'option selectedItems)
         */
        setSelectedLines?(list: Array<any>): any;
        /**
         * Permet de réinitaliser la liste des lignes désactivées
         * (remplace l'utilisation de l'option disabledItems)
         **/
        setDisabledLines?(list: Array<any>): any;
        /**
         * Permet de d'appliquer les modifications.
         **/
        apply?(): any;
    }
    /**
     * Api pour modifier l'état d'un controlleur du composant mw-table
     */
    interface IMwTableServiceOpefi {
        /**
         * Renvoie les critères de filtre des colonnes de la table
         * @param idTable : identifiant de la table
         */
        getFilterCriteria(idTable: string): Array<IMwColumnCriterion>;
        /**
         * Initialise les valeurs des critères de filtre des colonnes.
         * Attention, cette initialisation réinitialise la liste des lignes sélectionnées.
         * Si vous devez avoi rde lignes pré sélectionnées, il faut appelé la méthode selectItem après celle ci.
         */
        setFilterCriteria(idTable: string, criteria: Array<IMwColumnCriterion>): any;
        getPaginationState(idTable: string): IMwPaginationState;
        setPaginationState(idTable: string, pageState: IMwPaginationState): any;
        /**
         * Dé selectionne une ligne. Si l'option multiSelect est à faux, la ligne sera fermé si elle avait une ligne détail ouverte.
         * Pour sélectionner a nouveau des lignes par programme il suffit d'alimenter la liste options.selectedLignes
         */
        unSelectItem(idTable: string, item: any): void;
        /**
         * Renvoi le nom et le sens de la colonne trié.
         * L'obet IMwSortedColumn donne le nom la propriete (option.column.bind) a trier dans predicate et le sens du tri dans reserve.
         */
        getSortedColumn(idTable: string): IMwSortedColumn;
        /**
        * Initialise La colonne trié.
        */
        setSortedColumn(idTable: string, sortedColumn: IMwSortedColumn): any;
        /**
        * Permet de réinitaliser toutes les options du tableau
        * Attention : cette méthode réinitialise les filtres, le tri, les lignes sélectionnées ...
        */
        setOptions(idTable: string, options: ImwTableOptions): any;
        /**
         * Ouvre le détail d'une ligne si elle en comporte un.
         */
        openItem(idTable: string, item: any): any;
        /**
         * Ferme le détail d'une ligne si elle en comporte un.
         */
        closeItem(idTable: string, item: any): any;
        /**
         * Renvoi l'objet de la ligne dont le détail est visile ou null si pas de ligne detail ou si ligne détail fermé.
         */
        getLigneOuverte(idTable: string): any;
        /**
         * Permet de réinitialiser la liste des lignes sélectionnées
         */
        setSelectedLines(dTable: string, list: Array<any>): any;
        /**
         * Permet de réinitaliser la liste des lignes désactivées
         **/
        setDisabledLines(dTable: string, list: Array<any>): any;
        /**
         * Permet de d'appliquer les modifications.
         **/
        apply(idTable: string): any;
        /**
         * Utilisé par le Framework pour enregistrer les controleurs au service.
         */
        registerMwTableObserver(observer: IAdapterMwTable): any;
        /**
         * Utilisé par le Framework pour dé-enregistrer les controleurs du service.
         */
        removeMwTableObserver(observer: IAdapterMwTable): any;
        /**
         * Utilisé par le Framework pour récupérer un controleur enregistré.
         */
        getMwTableObserver(directiveId: string): IAdapterMwTable;
    }
    /**
     * Ce Service mets à disposition des méthodes permettant à un controlleur de page par exemple de modifier des données de la directive.
     */
    class MwTableServiceOpefi implements IMwTableServiceOpefi {
        private observers;
        constructor();
        /**
         * Renvoie l'observateur (MwTable directive) identifiable par son ID
         * L'observateur permet de manipuler des données dans le controleur d ela directive MwTable
         */
        getMwTableObserver(directiveId: string): IAdapterMwTable;
        /**
         * Abonne le controlleur d'une directive MwTable (Observateur)
         * Le controlleur doit implémenter l'interface IMwTableObserver
         */
        registerMwTableObserver(observer: IAdapterMwTable): void;
        /**
         * Désabonne le controlleur d'une directive MwTable (Observateur)
         */
        removeMwTableObserver(observer: IAdapterMwTable): void;
        getFilterCriteria(idTable: string): Array<IMwColumnCriterion>;
        /**
         * Initialise les valeurs des critères de filtre des colonnes.
         * Attention, cette initialisation réinitialise la liste des lignes sélectionnées.
         * Si vous devez avoi rde lignes pré sélectionnées, il faut appelé la méthode selectItem après celle ci.
         */
        setFilterCriteria(idTable: string, criteria: Array<IMwColumnCriterion>): void;
        getPaginationState(idTable: string): IMwPaginationState;
        setPaginationState(idTable: string, pageState: IMwPaginationState): void;
        /**
         * Dé selectionne une ligne. Si l'option multiSelect est à faux, la ligne sera fermé si elle avait une ligne détail ouverte.
         * Pour sélectionner a nouveau des lignes par programme il suffit d'alimenter la liste options.selectedLignes
         */
        unSelectItem(idTable: string, item: any): void;
        /**
         * Renvoi le nom et le sens de la colonne trié.
         * L'obet IMwSortedColumn donne le nom la propriete (option.column.bind) a trier dans predicate et le sens du tri dans reserve.
         */
        getSortedColumn(idTable: string): IMwSortedColumn;
        setSortedColumn(idTable: string, sortedColumn: IMwSortedColumn): void;
        setOptions(idTable: string, options: ImwTableOptions): void;
        /**
         * Ouvre le détail d'une ligne si elle en comporte un.
         */
        openItem(idTable: string, item: any): void;
        /**
         * Ferme le détail d'une ligne si elle en comporte un.
         */
        closeItem(idTable: string, item: any): void;
        /**
         * Renvoi l'objet de la ligne dont le détail est visile ou null si pas de ligne detail ou si ligne détail fermé.
         */
        getLigneOuverte(idTable: string): any;
        /**
         * Permet de d'appliquer les modifications.
         **/
        apply(idTable: string): void;
        /**
         * Permet de réinitialiser la liste des lignes sélectionnées
         */
        setSelectedLines(idTable: string, list: Array<any>): void;
        /**
         * Permet de réinitaliser la liste des lignes désactivées
         **/
        setDisabledLines(idTable: string, list: Array<any>): void;
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    /**
     * @ngdoc directive
     * @name myway.ui.directive.mwTinymce
     * @scope
     * @restrict A
     *
     * @description
     * Cette directive simplifie la mise en oeuvre de tinyMce. TinyMce est un éditeur HTML wisiwig.
     * Il suffit de la placer sur un textarea pour que ce dernier se transforme en éditeur de texte riche.
     * @element ANY
     * @priority 0
     * @param {object}  mwTinymce  Peut être vide ou contenir un objet correspondant à la configuration de TinyMce.
     * {@link http://www.tinymce.com/wiki.php/Configuration/ Doc TinyMce}
     *
     * @example
     *     <example>
     *       <file name="index.html" >
     *              <div class="container-fluid" ng-controller="MainController as ctrl">
     *                 <form class="form-horizontal">
     *                         <div class="form-group">
     *                                  <label class="col-md-2 control-label">Texte wysiwyg par defaut</label>
     *                                  <div class="col-md-7">
     *                                      <textarea ng-model="ctrl.modelTinyMce" mw-tinymce></textarea>
     *                                  </div>
     *                         </div>
     *                         <div class="form-group">
     *                                  <label class="col-md-2 control-label">Texte wysiwyg custom </label>
     *                                  <div class="col-md-7">
     *                                      <textarea ng-model="ctrl.modelTinyMce" mw-tinymce="{{ctrl.tinyConfig}}"></textarea>
     *                                  </div>
     *                         </div>
     *                  </form>
     *             </div>
     *           </file>
     *       <file name="script.js">
     *          angular.module('test', ['myway.ui'])
     *                .controller('MainController', ['$scope',
     *                  function ($scope) {
     *                     this.tinyConfig = {
     *                          toolbar : false;
     *                      }
     *                     this.modelTinyMce = 'Bienvenue dans TinyMce';
     *                     var _this = this;
     *                  }]);
     *       </file>
     *     </example>
     */
    /**
     * Directive de restriction attribut à placer sur un textarea pour avoir un éditeur Wisiwig.
     * Les source sont issu de ce site : https://jadendreamer.wordpress.com/2014/03/11/angular-ui-tutorial-tinymce-directive/
     * C'est pourquoi elle n'est pas totalement en Typescript. (Mais est ce bien génant ?)
     */
    function mwTinyMce(uiTinymceConfig: any): ng.IDirective;
}

declare module MyWay.UI {
    interface IScopeTotemContenu extends ng.IScope {
        navigations: Array<TotemComponent>;
        isActive(link: INavigationSecondaireLink): any;
        setActive(group: INavigationSecondaireGroup, link: INavigationSecondaireLink): any;
    }
    class TotemCtrl {
        private _NavigationService;
        private sideBarPosition;
        constructor($scope: IScopeTotemContenu, navigationService: NavigationService, $element: ng.IAugmentedJQuery);
        isActive(component: TotemComponent): void;
        isPageActive(page: TotemPage): boolean;
    }
    /**
     *   Directive mw-totem-contenu. Cette directive prend en compte le niveau chapitre et sous chapitre dans l'objet passé en paramétre.
     */
    function mwTotemContenu(): ng.IDirective;
    function mwTotemChapitre(): ng.IDirective;
    /**
     * Controleur
     */
    class TotemSousChapitreCtrl {
        private _NavigationService;
        toggle: boolean;
        constructor(navigationService: NavigationService, $element: ng.IAugmentedJQuery);
        onClick(sousChapitre: TotemSSChapitre): void;
    }
    function mwTotemSousChapitre(): ng.IDirective;
    class TotemPageCtrl {
        private _NavigationService;
        private sideBarPosition;
        constructor(navigationService: NavigationService, $element: ng.IAugmentedJQuery);
        /**
         * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
         */
        setActivePage(page: TotemPage): void;
        isPageActive(page: TotemPage): boolean;
    }
    function mwTotemPage(): ng.IDirective;
    class TotemSectionCtrl {
        private _NavigationService;
        private sideBarPosition;
        constructor(navigationService: NavigationService, $element: ng.IAugmentedJQuery);
        /**
         * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
         */
        setActiveSection(page: TotemPage, section: TotemSection): void;
        isSectionActive(section: TotemSection): boolean;
    }
    function mwTotemSection(): ng.IDirective;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    function mwVolet(): ng.IDirective;
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    function uiSelectToggle(): ng.IDirective;
}

declare module MyWay.UI {
    interface IMwVoletPropositionScope extends ng.IScope {
        id: string;
        affichageCompteur: boolean;
        hauteurVoletContenu: string;
    }
    function mwVoletProposition($window: ng.IWindowService, $document: ng.IDocumentService, $timeout: ng.ITimeoutService, mwResizeService: IMwResizeService): ng.IDirective;
}

declare module MyWay.UI {
    interface INavigationSecondaireLink {
        title: string;
        target: string;
        isComplete: boolean;
    }
    interface INavigationSecondaireGroup {
        title: string;
        target: string;
        links: Array<INavigationSecondaireLink>;
    }
    interface IScopeNavigationSecondaire extends ng.IScope {
        navigations: Array<INavigationSecondaireGroup>;
        isActive(link: INavigationSecondaireLink): any;
        setActive(group: INavigationSecondaireGroup, link: INavigationSecondaireLink): any;
    }
    interface IGroupeTravailScope extends ng.IScope {
        isActiveGroup: (target: string) => boolean;
    }
    interface IZoneTravailScope extends ng.IScope {
        enabledscroll: boolean;
    }
    interface IMwEvents {
        activeNavigationEvent: string;
    }
    /**
     * Controleur
     * DEPRECIE
     */
    class NavContenuCtrl {
        private _NavigationService;
        private sideBarPosition;
        totem: Array<TotemComponent>;
        constructor($scope: IScopeNavigationSecondaire, navigationService: NavigationService, $element: ng.IAugmentedJQuery);
        transformToTotemComponent(navigations: Array<INavigationSecondaireGroup>): Array<TotemComponent>;
        /**
         * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
         */
        setActive(group: TotemPage, link: TotemSection): void;
        isActive(link: TotemSection): boolean;
        isGroupActive(group: TotemPage): boolean;
    }
    /**
     * Directive mw-nav-contenu
     */
    function mwNavContenu(): ng.IDirective;
    /**
     * DEPRECIE
     */
    function mwContenu(): ng.IDirective;
    /**
     * DEPRECIE
     */
    function main(): ng.IDirective;
    /**
     * DEPRECIE
     */
    function mwGroupeTravail(navigationService: NavigationService): ng.IDirective;
    /**
     * Cette directive sert uniquement à gérer de ScrollSpy et aussi de cacher l'indicateur de scroll (hideScrollIndicator)
     * Elle reçoit un évènement du totem lors d'un clic sur un lien pour scroller jusqu'au paneau de ce lien.
     * Elle capture l'èvénement onScroll et wheel pour activer un élément du totem lors d'un scroll de la page.
     *  - TODO exporter tout ca dans un directive scrollSpy  posé sur l'lélement comme mwZoneTravail
     *  - TODO remplacer la fonction hideScrollIndicator par une directive a placer égalemetn sur lélément scrollable.
     */
    function mwZoneTravail($timeout: ng.ITimeoutService, navigationService: NavigationService, MW_EVENTS: IMwEvents): ng.IDirective;
}

declare module MyWay.UI {
    /**
     * Ce service est constuit à partir du code ngSmoothScroll : https://github.com/d-oliveros/ngSmoothScroll/blob/master/lib/angular-smooth-scroll.js
     *
     */
    interface IMwSmoothScrollOptions {
        duration?: number;
        offset?: number;
        easing?: string;
        callbackBefore?: any;
        callbackAfter?: any;
        containerSelector?: string;
    }
    interface IMwSmoothScrollService {
        scrollTo(element: HTMLElement, options?: IMwSmoothScrollOptions): any;
    }
}

declare module MyWay.UI {
    function mwTuile(): ng.IDirective;
}

declare module MyWay.UI {
    function mwTuileEdit(): ng.IDirective;
}

declare module MyWay.UI {
    class TuileListeController {
        liste: any[];
        constructor();
    }
}

declare module MyWay.UI {
}

declare module MyWay.UI {
    interface ITuileHandler {
        onTuileClick(objetTuile: any): any;
        onAction1(objetTuile: any): any;
        onAction2(objetTuile: any): any;
        onAction3(objetTuile: any): any;
        onAction4(objetTuile: any): any;
        onClickLeft?(objetTuile: any, listeObjetTuile: any): any;
        onClickRight?(objetTuile: any, listeObjetTuile: any): any;
    }
    interface IMwTuileControllerScope extends ng.IScope {
        id: string;
        avecMarquage: boolean;
        titre: string;
        ligne1: string;
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
        picto?: string;
        texteMarquage: string;
        typeFiletMarquage?: string;
        couleur: string;
        object: Object;
        listeObject: any[];
        config: iMwConfigTuile;
    }
    interface iMwConfigTuile {
        taille: string;
        typeMarquage: string;
        pictoMarquage?: string;
        eventNameEditionOn?: string;
        eventNameEditionOff?: string;
        tuileHandler: ITuileHandler;
        isSortable?: boolean;
        pictoAction1?: string;
        pictoAction2?: string;
        pictoAction3?: string;
        pictoAction4?: string;
        nomAction1?: string;
        nomAction2?: string;
        nomAction3?: string;
        nomAction4?: string;
    }
    class MwAbstractTuileController {
        protected $scope: IMwTuileControllerScope;
        protected $exceptionHandler: ng.IExceptionHandlerService;
        id: string;
        modeEdition: boolean;
        tabIndex: number;
        config: iMwConfigTuile;
        constructor($scope: IMwTuileControllerScope, $exceptionHandler: ng.IExceptionHandlerService);
        setEditionOn(): void;
        setEditionOff(): void;
        clickSurTuile(object: Object): void;
        keydownSurAction($event: JQueryEventObject, index: number, object: any, listObject?: any): void;
        onAction(index: number, object: any, listObject?: any): void;
    }
    class MwTuileStandardController extends MwAbstractTuileController {
        static $inject: string[];
        constructor($scope: IMwTuileControllerScope, $exceptionHandler: ng.IExceptionHandlerService);
    }
}

declare module MyWay.UI {
    function mwTuileStandard(): ng.IDirective;
}

declare module MyWay.UI {
    function mwTuileStandardBtn(): ng.IDirective;
}

declare module MyWay.UI {
    interface IScopeNavigation extends ng.IScope {
        navigations: Array<TotemComponent>;
        isActive(link: INavigationSecondaireLink): boolean;
        setActive(group: INavigationSecondaireGroup, link: INavigationSecondaireLink): void;
    }
    class NavigationCtrl {
        private _NavigationService;
        private sideBarPosition;
        private startCoords;
        private scrollableContainer;
        constructor($scope: IScopeNavigation, navigationService: NavigationService, $element: ng.IAugmentedJQuery);
        private getRawNode(elem);
        private getCoordinates(event);
        isActive(component: TotemComponent): void;
        isPageActive(page: TotemPage): boolean;
    }
    /**
     *   Directive mw-totem-contenu. Cette directive prend en compte le niveau chapitre et sous chapitre dans l'objet passé en paramétre.
     */
    function mwNavigation(): ng.IDirective;
    function mwNavigationChapitre(): ng.IDirective;
    class NavigationSousChapitreCtrl {
        private _NavigationService;
        toggle: boolean;
        constructor(navigationService: NavigationService, $element: ng.IAugmentedJQuery);
        onClick(sousChapitre: TotemSSChapitre): void;
    }
    function mwNavigationSousChapitre(): ng.IDirective;
    class NavigationPageCtrl {
        private $rootScope;
        private $location;
        private _NavigationService;
        private sideBarPosition;
        constructor(navigationService: NavigationService, $element: ng.IAugmentedJQuery, $rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        /**
         * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
         */
        setActivePage(page: TotemPage): void;
        isPageActive(page: TotemPage): boolean;
    }
    function mwNavigationPage(): ng.IDirective;
    class NavigationSectionCtrl {
        private $location;
        private $anchorScroll;
        private $timeout;
        private _NavigationService;
        private sideBarPosition;
        constructor(navigationService: NavigationService, $element: ng.IAugmentedJQuery, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService);
        /**
         * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
         */
        setActiveSection(page: TotemPage, section: TotemSection): void;
        isSectionActive(section: TotemSection): boolean;
    }
    function mwNavigationSection(): ng.IDirective;
}

declare module MyWay.UI {
    /**
     *   Directive mw-totem-contenu. Cette directive prend en compte le niveau chapitre et sous-chapitre dans l'objet passé en paramètre.
     */
    function mwNavigationV2(): ng.IDirective;
    function mwNavigationPageV2(): ng.IDirective;
    function mwNavigationChapitreV2(): ng.IDirective;
    function mwNavigationSousChapitreV2(): ng.IDirective;
}

