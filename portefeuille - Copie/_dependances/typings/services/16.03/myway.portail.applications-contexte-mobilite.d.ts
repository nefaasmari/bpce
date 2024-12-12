
declare module ApplicationsContexteMobilite {
    var logg: (values?: any, comments?: string) => void;
    var app: any;
}

declare module ApplicationsContexteMobilite {
    class ApplicationsContexteMobiliteService {
        private $q;
        private $filter;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getConnexionReseau: () => any;
        getApplicationsContexteMobilite: (applications: any) => boolean[];
    }
}
