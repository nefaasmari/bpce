
declare module MyWay.NGV.CaisseAuto.ServicesCommuns {
    var module: ng.IModule;
}

declare module MyWay.NGV.CaisseAuto.ServicesCommuns {
    class MwcaDistribuerCaisseAutoModalController {
        private $modalInstance;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        annuler(): void;
        valider(): void;
    }
}

declare module MyWay.Model {
    class OperationDistribution {
        montant: number;
        montant2: number;
    }
}

declare module MyWay.NGV.CaisseAuto.ServicesCommuns {
    class CaisseAutomatique {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        alimenterDistribution(montant: number): void;
        finaliserDistribution(): ng.IPromise<any>;
    }
}
