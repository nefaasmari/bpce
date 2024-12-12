
declare module $maintsmodule$ {
    var app: any;
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
        constructor($scope: IScope, majChartsService: MajChartsService);
        generateChart(el: any, data: Array<IStackChartData>): void;
        drawAxes(svg: any, x: any, y: any): void;
        createTooltip(svg: any): void;
        createLegend(svg: any, colors: Array<Color>): void;
        createGroupsRect(svg: any, x: any, y: any, dataset: any, colors: any): void;
    }
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
    enum Color {
        Vert,
        Orange,
        Rouge,
        Violet,
        Gris,
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
    }
    interface IGroupChartData {
        categorie: string;
        values: Array<IValueGroupChart>;
    }
    interface IStackChartData {
        nom: string;
        priorite1: number;
        priorite2: number;
        priorite3: number;
        priorite4: number;
        priorite5: number;
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
    class MajChartsService {
        private serviceAgentExtended;
        static $inject: string[];
        getRandomArbitrary(min: number, max: number): number;
        dataGroupChart: Array<IGroupChartData>;
        dataPieChart: Array<IPieChartData>;
        dataStackChart: Array<IStackChartData>;
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

declare module $maintsmodule$ {
    class PerimetreService {
        static $inject: string[];
    }
}
