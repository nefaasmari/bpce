
declare module myway.comCaisseAuto {
    var module: ng.IModule;
}

declare module myway.comCaisseAuto {
    class MwcaDistribuerCaisseAutoModalController {
        private $modalInstance;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        annuler(): void;
        valider(): void;
    }
}

declare module myway.comCaisseAuto {
    class OperationDistribution {
        montantRetrait: number;
        montantDepot: number;
        constructor(montantRetrait: number, montantDepot: number);
    }
}

declare module myway.comCaisseAuto {
    class CaisseAutomatique {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        /**
         */
        isPosteCaisseAuto(): ng.IPromise<boolean>;
        alimenterDistribution(opefi: myway.comOpesFinancieres.Model.OperationFinanciere): void;
        finaliserDistribution(numeroClient: string): void;
        InventaireEspeces(): ng.IPromise<number>;
    }
}
