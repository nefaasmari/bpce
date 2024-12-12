
declare module ProcessusApplications {
    var app: any;
}

declare module ProcessusApplications {
}

declare module ProcessusApplications {
}

declare module ProcessusApplications {
}

declare module ProcessusApplications {
    class ApplicationsService {
        private serviceAgentExtended;
        private favorisService;
        private applicationsContexteMobiliteService;
        listeApplications: any;
        listeApplicationsHabilitees: Array<any>;
        listeApplicationsAccessibles: Array<any>;
        listeApplicationsFavorites: Array<any>;
        listeHabilitations: Array<string>;
        libelleSousFamille: string;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, favorisService: AjoutFavorisCommun.FavorisService, applicationsContexteMobiliteService: ApplicationsContexteMobilite.ApplicationsContexteMobiliteService);
        initialisation(codeSousFamille: any): MyWay.Services.IPromesse<void>;
    }
}

declare module ProcessusApplications {
    class SousFamillesService {
        listeCodesSousFamilles: Array<string>;
        listeLibellesSousFamilles: Array<string>;
        constructor();
        getLibelleSousFamille(codeSousFamille: string): string;
    }
}
