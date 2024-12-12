
declare module ApplicationsContexteMobilite {
    var app: any;
}

declare module ApplicationsContexteMobilite {
    interface IApplicationsCodeMobiliteAttributs {
        codeApplication: string;
        codeVisibiliteApplication: number;
        libelleDeviceCompatible: string;
    }
    class ApplicationsContexteMobiliteService {
        private $q;
        private $filter;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getApplicationsContexteMobilite: (applications: IApplicationsCodeMobiliteAttributs[]) => ng.IPromise<{
            [codeApplication: string]: boolean;
        }>;
    }
}
