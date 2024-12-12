
declare module myway.comOpesFinancieres.FinClient {
    var app: any;
}

declare module myway.comOpesFinancieres.FinClient {
    class FinClientControleur {
        private $scope;
        private finClientService;
        private suiviEtape;
        static $inject: string[];
        constructor($scope: ng.IScope, finClientService: myway.comOpesFinancieres.FinClient.FinClientService);
    }
}

declare module myway.comOpesFinancieres.FinClient.Model {
    enum EtapeEnum {
        InitialisationTraitement = 0,
        FinaliserDistribution = 1,
        FinaliserBordereauOperation = 2,
        ImprimerBordereauOperation = 3,
    }
    interface IEtape {
        id: EtapeEnum;
        message: string;
    }
    class SuiviEtape {
        private etapes;
        private current;
        private currentIndex;
        private progress;
        constructor(etapes: IEtape[]);
        startEtape(id: EtapeEnum): void;
        endEtape(id: EtapeEnum): void;
        private setCurrent(id);
    }
}

declare module myway.comOpesFinancieres.FinClient {
    class FinClientService {
        private serviceAgentExtended;
        private caisseautomatique;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, caisseautomatique: myway.comCaisseAuto.CaisseAutomatique);
        getNodape(): ng.IPromise<string>;
        finaliserDistribution(numeroClient: string): void;
        finaliserBordereauOperation(numeroClient: string, identifiantBordereau: string): void;
        private editionBordereauOperation(numeroClient, identifiantBordereau);
    }
}
