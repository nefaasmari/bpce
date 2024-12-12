
declare module $maintsmodule$ {
    var app: any;
}

export declare namespace LibCommon {
    class Triangle {
    }
    class Square {
    }
}

declare module $maintsmodule$ {
    class GroupChartControleur {
        $scope: IScope;
        majChartsService: MajChartsService;
        margin: any;
        width: number;
        height: number;
        el: any;
        constructor($scope: IScope, majChartsService: MajChartsService);
        generateChart(el: any, data: Array<IGroupChartData>): void;
    }
}

declare module $maintsmodule$ {
    class LisaControleur {
        localite: string;
        private contextCC;
        private contextEDS;
        private contextPF;
        private contextCU;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor($scope: ng.IScope, serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        init(): void;
        nextView(cu: string, cc: string, pf: string, nextValue: number): void;
        urlParam(name: string): string;
        testerServiceAgent(): void;
    }
}

declare module $maintsmodule$ {
    class ListeControleur implements MyWay.UI.ISelectionChangeHandler, MyWay.UI.IMwTableHandler {
        $scope: ng.IScope;
        tableService: MyWay.UI.IMwTableServiceOpefi;
        listeService: ListeService;
        serviceAgent: MyWay.Services.ServiceAgent;
        listColonneTachesSelected: Array<String>;
        columns: Array<MyWay.UI.ImwTableColumnOptions>;
        private confListeTaches;
        tableauListeTaches: Tableau;
        constructor($scope: ng.IScope, serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService, tableService: MyWay.UI.IMwTableServiceOpefi, listeService: ListeService);
        onSelectionChange(selectedObject: Object): void;
        onPageChange(currentPage: number): void;
        customList(): void;
    }
}


declare module $maintsmodule$ {
    interface IConfigPieChart {
        titreNombre: string;
        titreLibelle: string;
        zoomChart: boolean;
    }
    class PieChartControleur {
        $scope: IScope;
        majChartsService: MajChartsService;
        pieChartService: PieChartService;
        el: any;
        activeClick: boolean;
        config: IConfigPieChart;
        constructor($scope: IScope, majChartsService: MajChartsService, pieChartService: PieChartService);
    }
}

declare module $maintsmodule$ {
    class StackChartControleur {
        $scope: IScope;
        majChartsService: MajChartsService;
        width: number;
        height: number;
        tooltip: any;
        el: any;
        idChart: number;
        constructor($scope: IScope, majChartsService: MajChartsService);
        generateChart(el: any, data: Array<IStackChartData>, listParts: Array<any>): void;
        drawAxes(svg: any, x: any, y: any): void;
        createTooltip(svg: any): void;
        createLegend(svg: any, colors: Array<Color>, listParts: Array<any>): void;
        createGroupsRect(svg: any, x: any, y: any, dataset: any, colors: any): void;
    }
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
    enum Color {
        Vert,
        Orange,
        Rouge,
        Violet,
        Gris
    }
    interface IScope extends ng.IScope {
        dataGroupChart: Array<IGroupChartData>;
        dataStackChart: Array<IStackChartData>;
        dataPieChart: Array<IPieChartData>;
        dataPieChart2: Array<IPieChartData>;
        dataPieChart3: Array<IPieChartData>;
        titreNombre: string;
        titreLibelle: string;
        titlePage: string;
        hidden: boolean;
        zoomChart: boolean;
        majChartsService: MajChartsService;
        pfTitle: string;
        structureTitle: string;
        fullName: string;
        listeEDS: Array<string>;
        monEds: any;
        monSU: any;
        monRenfort: any;
        monGrpDeleg: any;
        indicateurs: any;
        idChart: number;
    }
    interface IGroupChartData {
        categorie: string;
        values: Array<IValueGroupChart>;
    }
    interface IStackChartData {
        nom: string;
        priorite0: number;
        priorite1: number;
        priorite2: number;
        priorite3: number;
        priorite4: number;
    }
    interface IStackedChartData {
        nom: string;
        nbDemandeP1: string;
        nbDemandeP2: string;
        nbDemandeP3: string;
        nbDemandeP4: string;
        nbDemandeP5: string;
        nbDemandeP6: string;
    }
    interface IPieChartData {
        nom: string;
        nombre: number;
    }
    interface IValueGroupChart {
        value: number;
        rate: string;
    }
}

declare module $maintsmodule$ {
    class ListeService {
        serviceAgent: MyWay.Services.IServiceAgent;
        $http: ng.IHttpService;
        listTaches: Array<Object>;
        listLabels: Array<any>;
        constructor(serviceAgent: MyWay.Services.IServiceAgent, $http: ng.IHttpService);
    }
}

declare module $maintsmodule$ {
    interface IStackObject {
        nom: string;
    }
    class MajChartsService {
        private serviceAgentExtended;
        static $inject: string[];
        getRandomArbitrary(min: number, max: number): number;
        dataGroupChart: Array<IGroupChartData>;
        dataPieChart: Array<IPieChartData>;
        dataStackChart: Array<IStackChartData>;
        listParts: Array<any>;
        formatDataStackChart(): void;
        stackChart: Array<Object>;
        dataPieChart2: any;
        dataPieChart3: any;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        majDataGroupChart(data: Array<IGroupChartData>): void;
        majDataPieChart(data: Array<IPieChartData>): void;
        majDataStackChart(data: Array<IStackChartData>): void;
        getDataPieChart(): Array<IPieChartData>;
        getDataGroupChart(): Array<IGroupChartData>;
        getDataStackChart(): Array<IStackChartData>;
    }
}

declare module $maintsmodule$ {
    class MotDePasseService {
        constructor();
        forceDeMotDePasse(motDePasse: string): string;
    }
}

declare module $maintsmodule$ {
    class PerimetreService {
        serviceAgent: MyWay.Services.IServiceAgent;
        $http: ng.IHttpService;
        constructor(serviceAgent: MyWay.Services.IServiceAgent, $http: ng.IHttpService);
        getContexteAgentByPFandHAB(pf: string, hab: Array<string>): MyWay.Services.IPromesse<any>;
        sauverPerimetre(perimetre: any): MyWay.Services.IPromesse<any>;
        recupererPerimetre(): MyWay.Services.IPromesse<any>;
        url(): string;
        urlSauve(): string;
        urlRecuperer(): string;
    }
}

declare module $maintsmodule$ {
    function groupChartDirective(): ng.IDirective;
}

declare module $maintsmodule$ {
    function pieChartDirective(): ng.IDirective;
}

declare module $maintsmodule$ {
    function stackChartDirective(): ng.IDirective;
}

declare module $maintsmodule$ {
    function entete(): ng.IDirective;
}

declare module $maintsmodule$ {
    class NavigationPerimetreEdsController {
        $window: Window;
        monEds: any;
        monSU: any;
        modalService: any;
        dt: any;
        window: ng.IWindowService;
        afficherPerimetre(): void;
        constructor(modalService: MyWay.UI.IModalService, $window: Window);
    }
}

declare module $maintsmodule$ {
    function navigationPerimetreEdsDirective(): ng.IDirective;
}

declare module $maintsmodule$ {
    interface IListeEDS {
        CodeTypeEds: string;
        DesgEds: string;
        IdntEtabGce: string;
        IdntInteEds: string;
        LiblTypeEds: string;
        RefrExtnEds: string;
        Checked: boolean;
    }
    interface IObjet {
        [key: string]: string;
    }
    class NavigationPerimetreEdsModaleControleur {
        $scope: IScope;
        private $modalInstance;
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        perimetreService: PerimetreService;
        private modalService;
        monEds: any;
        monSU: any;
        monRenfort: any;
        monGrpDeleg: any;
        message: string;
        perimetre: {
            eds: any[];
            su: any[];
            renfort: any[];
            grpdeleg: any[];
        };
        listeEDS: any;
        listeSU: any;
        listeRenfort: any;
        listeGroupeDeleg: any;
        constructor($scope: IScope, $modalInstance: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, perimetreService: PerimetreService, modalService: MyWay.UI.ModalService);
        annuler(): void;
        /**
         * @description selectionne, pour le moment, l'eds de la struture d'usage de l'agent
         * @param structure {string} la structure d'usage de l'agent
         */
        init(structure: string): void;
        valider(): void;
        filtrerCheckbox(result: any): any;
        sauver(): void;
        charger(): void;
        showErrorPopupBloquante(): void;
    }
}

declare module $maintsmodule$ {
    interface ITableauConfig {
        width?: string;
        reserve?: boolean;
        perPage?: number;
        multiSelect?: boolean;
        filterEnable?: boolean;
        sortEnable?: boolean;
        moreEnable?: boolean;
        caption?: string;
        theadSticky?: string;
        readOnly?: boolean;
        templateUrl?: string;
        openSelected?: boolean;
        data: Array<Object>;
        selectedItems?: Array<Object>;
        disabledItems?: Array<Object>;
        columns: Array<MyWay.UI.ImwTableColumnOptions>;
        selectionChangeHandler?: MyWay.UI.ISelectionChangeHandler;
        tableHandler?: MyWay.UI.IMwTableHandler;
    }
}

declare module $maintsmodule$ {
    class Tableau implements MyWay.UI.ImwTableOptions {
        width: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        caption: string;
        theadSticky: string;
        readOnly: boolean;
        templateUrl: string;
        openSelected: boolean;
        data: Array<Object>;
        selectedItems: Array<Object>;
        disabledItems: Array<Object>;
        columns: MyWay.UI.ImwTableColumnOptions[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        tableHandler: MyWay.UI.IMwTableHandler;
        constructor(conf: ITableauConfig);
        setData(data: Array<Object>): void;
        private setConf;
    }
}

declare module $maintsmodule$ {
    class PieChartService {
        majChartsService: MajChartsService;
        width: number;
        height: number;
        radius: number;
        dataPieChart2: Array<IPieChartData>;
        dataPieChart3: Array<IPieChartData>;
        classSecondPie: string;
        static $inject: string[];
        constructor(majChartsService: MajChartsService);
        generatePieChart(el: any, data: Array<IPieChartData>, config: IConfigPieChart, activeClick: boolean): void;
        createTextInCenter(text: any): void;
        wrap(text: any, width: number): void;
    }
}
