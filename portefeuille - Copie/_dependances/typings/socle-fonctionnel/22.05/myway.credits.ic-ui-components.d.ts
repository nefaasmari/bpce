
declare module ICUIComponents {
    var app: any;
}

declare module ICUIComponents {
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
    class ICComboboxController {
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
        selected: any;
        private offDestroy;
        private previousSelection;
        private popUpEl;
        private boutonEl;
        private guidageEl;
        guidageId: any;
        private popupId;
        private inputsContainer;
        private hintInputElem;
        private debouncedRecalculate;
        private itemPerPage;
        private resultGetMatches;
        private inputIsExactMatch;
        loading: boolean;
        private onOpenCallBack;
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
        /**
         *  Property to flag if the lazy function as been called
         */
        private lazyLoaded;
        /**
         * Call the lazy load function passed in parameter and handle spinner and result refresh
         */
        private hanlelLazyLoadFunction();
    }
}

declare module ICUIComponents {
}

declare module ICUIComponents {
    function ComboboxHighlight($sce: ng.ISCEService, $injector: any, $log: ng.ILogService): (matchItem: string, query: string) => string;
    function ComboboxPagingBy(): (input: any, pageCount: number, itemPerPage: number) => any;
}

declare module ICUIComponents {
}

declare module ICUIComponents {
}

declare namespace ICUIComponents {
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
        cssClass: string;
        /** permet d'appliquer une class en cas d'erreur */
        hasError: boolean;
        constructor($scope: IScopeHretractable, $log: ng.ILogService);
        /**
         *  Fonction de changement d'état
         */
        toggleOpen(): void;
    }
}

declare namespace ICUIComponents {
    function mwHretractable($log: ng.ILogService): ng.IDirective;
}
