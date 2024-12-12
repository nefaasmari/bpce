

declare module MyWay.UI {
    var module: ng.IModule;
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
    class IMwColumnCriterion {
        columnBind: string;
        criterion: string;
    }
    class IMwSortedColumn {
        predicate: string;
        reserve: boolean;
    }
    /**
     * Donne l'état de la pagination
     * currentPage donne la page courante lorsque la pagination est active.
     * perPage donne le nombre de ligne par page. En mode scrollInfini (option moreEnable) correspond au nombre de lignes affichées.
     */
    class IMwPaginationState {
        currentPage: number;
        perPage: number;
    }
    interface IAdapterMwTable extends IMwTableObserver {
        getFilterCriteria(): Array<IMwColumnCriterion>;
        setFilterCriteria(criteria: Array<IMwColumnCriterion>): any;
        getPaginationState(): IMwPaginationState;
        setPaginationState(pageState: IMwPaginationState): any;
        /**
         * Renvoi le nom et le sens de la colonne trié.
         * L'obet IMwSortedColumn donne le nom la propriete (option.column.bind) a trier dans predicate et le sens du tri dans reserve.
         */
        getSortedColumn(): IMwSortedColumn;
        setSortedColumn(sortedColumn: IMwSortedColumn): any;
        /**
        * Permet de réinitaliser toutes les options du tableau
        * Attention : cette méthode réinitialise les filtres, le tri, les lignes sélectionnées ...
        */
        setOptions(options: ImwTableOptions): any;
        /**
         * Ouvre le détail d'une ligne si elle en comporte un.
         */
        openItem(item: any): any;
        /**
         * Ferme le détail d'une ligne si elle en comporte un.
         */
        closeItem(item: any): any;
        /**
         * Renvoi l'objet de la ligne dont le détail est visile ou null si pas de ligne detail ou si ligne détail fermé.
         */
        getLigneOuverte(): any;
        /**
         * Permet de réinitialiser la liste des lignes sélectionnées
         */
        setSelectedLines(list: Array<any>): any;
        /**
         * Permet de réinitaliser la liste des lignes désactivées
         **/
        setDisabledLines(list: Array<any>): any;
        /**
         * Permet de d'appliquer les modifications.
         **/
        apply(): any;
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
