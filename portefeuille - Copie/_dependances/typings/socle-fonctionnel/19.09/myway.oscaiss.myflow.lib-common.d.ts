
declare module myflow.libcommon {
    var app: any;
}

declare module myflow.libcommon {
    enum DataType {
        string = 8,
        object = 7,
        number = 6,
        identifiant = 5,
        decimal = 4,
        date = 3,
        boolean = 2,
        binary = 1,
    }
    enum StackChart {
        width = 640,
        height = 300,
        top = 20,
        right = 110,
        bottom = 90,
        left = 80,
    }
    enum RangeRoundBands {
        interval = 10,
        outerPadding = 0.02,
    }
    enum YAxis {
        ticks = 5,
    }
    enum Tooltip {
        width = 30,
        height = 20,
        opacity = 0.5,
        x = 15,
    }
    enum Legend {
        width = 18,
        height = 18,
        opacity = 0.5,
        x = 432,
        transform = 19,
    }
    enum LegendText {
        x = 455,
        y = 9,
    }
    enum PositionPie {
        width = 500,
        height = 300,
        radius = 100,
    }
    enum SvgPie {
        innerRadius = 70,
        padAngle = 0.03,
    }
    enum TooltipPie {
        width = 180,
        height = 20,
        opacity = 0.5,
    }
}

declare module myflow.libcommon {
}

declare module myflow.libcommon {
    interface IStackObject {
        nom: string;
    }
    class MajChartsService {
        private serviceAgentExtended;
        static $inject: string[];
        getRandomArbitrary(min: number, max: number): number;
        dataPieChart: Array<IPieChartData>;
        dataStackChart: Array<IStackChartData>;
        listParts: Array<any>;
        formatDataStackChart(): void;
        stackChart: Array<Object>;
        dataPieChart2: any;
        dataPieChart3: any;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        majDataPieChart(data: Array<IPieChartData>): void;
        majDataStackChart(data: Array<IStackChartData>): void;
        getDataPieChart(): Array<IPieChartData>;
        getDataStackChart(): Array<IStackChartData>;
    }
}

declare module myflow.libcommon {
    class PerimetreService {
        serviceAgent: MyWay.Services.IServiceAgent;
        $http: ng.IHttpService;
        constructor(serviceAgent: MyWay.Services.IServiceAgent, $http: ng.IHttpService);
        getContexteAgentByPFandHAB(pf: string, hab: Array<string>): any;
        sauverPerimetre(perimetre: any): MyWay.Services.IPromesse<any>;
        recupererPerimetre(): MyWay.Services.IPromesse<any>;
        url(): string;
        urlSauve(): string;
        urlRecuperer(): string;
    }
}

declare module myflow.libcommon {
    function formOnChange($parse: any): ng.IDirective;
}

declare module myflow.libcommon {
    function myfFooter(): ng.IDirective;
}

declare module myflow.libcommon {
    function myfHeaderDirective(): ng.IDirective;
}

declare module myflow.libcommon {
    function entete(): ng.IDirective;
}

declare module myflow.libcommon {
    interface IScope extends ng.IScope {
        $parent: any;
        dataPieChart: Array<IPieChartData>;
        titlePage: string;
        hidden: boolean;
        majChartsService: any;
        pfTitle: string;
        structureTitle: string;
        fullName: string;
        monEds: any;
        monSU: any;
        monRenfort: any;
        monGrpDeleg: any;
        indicateurs: any;
        idChart: number;
        contextClausesPagination: any;
        tableauListeTaches: any;
        filtreApplique: boolean;
        chargementTableau: boolean;
        listCount: boolean;
    }
}

declare module myflow.libcommon {
    class RequeteHTTPService {
        serviceAgent: MyWay.Services.IServiceAgent;
        $q: ng.IQService;
        $http: ng.IHttpService;
        message: string;
        constructor(serviceAgent: MyWay.Services.IServiceAgent, $q: ng.IQService, $http: ng.IHttpService);
        /**
         * Methode qui permet d'executer une requete http
         * @param {string} url : url de la requete
         * @param {*} data : les donnéées de la requête
         * @param {boolean} withHeaders : si true, la reqyete comporte un header
         * @param {number} method :   DELETE = 0,  GET = 1,  POST = 2,    PUT = 3
         * @param {object} additionalHeaders : objet qui contient les headers additionnels
         */
        requeteHTTPAvecPromesse(url: string, data: any, withHeaders: boolean, method: number, additionalHeaders?: any): any;
    }
}

declare module myflow.libcommon {
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

declare module myflow.libcommon {
    class LisaService {
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        init(codeApp: string): void;
        nextView(valuesContextMap: any, nextValue: number): void;
        urlParam(name: string): string;
    }
}

declare module myflow.libcommon {
    class ModalsService {
        modalService: MyWay.UI.ModalService;
        message: string;
        constructor(modalService: MyWay.UI.ModalService);
        showErrorPopupNonBloquante(title: string, corps: string): void;
    }
}

declare module myflow.libcommon {
    class PieChartControleur {
        $scope: myflow.libcommon.IScope;
        majChartsService: MajChartsService;
        pieChartService: PieChartService;
        el: any;
        activeClick: boolean;
        config: IConfigPieChart;
        constructor($scope: myflow.libcommon.IScope, majChartsService: MajChartsService, pieChartService: PieChartService);
    }
}

declare module myflow.libcommon {
    function pieChartDirective(): ng.IDirective;
}

declare module myflow.libcommon {
    class StackChartControleur {
        $scope: myflow.libcommon.IScope;
        width: number;
        height: number;
        tooltip: any;
        idChart: number;
        constructor($scope: myflow.libcommon.IScope);
        generateChart(el: any, data: Array<IStackChartData>, listParts: Array<any>): void;
        drawAxes(svg: any, x: any, y: any): void;
        createTooltip(svg: any): void;
        createLegend(svg: any, colors: Array<any>, listParts: Array<any>): void;
        createGroupsRect(svg: any, x: any, y: any, dataset: any, colors: any): void;
    }
}

declare module myflow.libcommon {
    function stackChartDirective(): ng.IDirective;
}

declare module myflow.libcommon {
    interface IConfigPieChart {
        titreNombre: string;
        titreLibelle: string;
        zoomChart: boolean;
    }
    interface IPieChartData {
        nom: string;
        nombre: number;
    }
}

declare module myflow.libcommon {
    interface IStackChartData {
        nom: string;
        priorite0: number;
        priorite1: number;
        priorite2: number;
        priorite3: number;
        priorite4: number;
    }
}
