
declare module myway.comOpesFinancieres.apptest {
    var app: any;
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
    class DefautControleur {
        title: string;
        version: string;
        constructor($scope: ng.IScope, serviceAgent: MyWay.Services.ServiceAgent);
    }
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
    interface IListeCompteClientTestScope extends ng.IScope {
        viewModelListeCompteClientTestCtrl: IListeCompteClientTestController;
    }
    interface IListeCompteClientTestController {
        listeCompte: MyWay.Model.Compte[];
        comptePrincipal: MyWay.Model.Compte;
        listeCodeProduit: string[];
        compteSelectionne: MyWay.Model.Compte;
    }
    class ListeCompteClientTestController implements IListeCompteClientTestController {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        listeCompte: MyWay.Model.Compte[];
        comptePrincipal: MyWay.Model.Compte;
        listeCodeProduit: string[];
        compteSelectionne: MyWay.Model.Compte;
        constructor($scope: IListeCompteClientTestScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
}

declare module myway.comOpesFinancieres.apptest {
}

declare module MonApplication {
}

declare module myway.comOpesFinancieres.apptest {
    /**
     * Classe de service permettant de comparer les traces PCM avec les traces MyWay pour une opération financière
     */
    class ChargementSegmentsPCMService {
        private serviceAgentExtended;
        $inject: string[];
        private tableauDifferencePrvRio;
        private tableauDifferenceBilletterie;
        private tableauDifferenceCheque;
        private tableauDifferencePrvRioUgr;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de lire un fichier JSON répondant à la structure du segment PRVRIO
         */
        lireFichierPcm(nomFichier: string): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        /**
         * Méthode permettant d'écrire un fichier
         */
        ecrireFichierPcm(nomFichier: string, contenu: Object): void;
        /**
         * Méthode permettant de comparer le segment PRVRIO issu du PCM et le segment PRVRIO généré par MyWay
         */
        comparerSegmentPrvRio(segmentMyWay: myway.comOpesFinancieres.Model.SegmentPRVRIO, segmentPcm: myway.comOpesFinancieres.Model.SegmentPRVRIO): void;
        /**
         * Méthode permettant de comparer le segment Billetterie issu du PCM et le segment Billetterie généré par MyWay
         */
        comparerSegmentBilletterie(segmentBilletterieMyWay: Object, segmentBilletteriePcm: Object): void;
        /**
         * Méthode permettant de comparer le segment Chèque issu du PCM et le segment Chèque généré par MyWay
         */
        comparerSegmentCheque(segmentChequeMyWay: Object, segmentChequePcm: Object): void;
        /**
         * Méthode permettant de comparer le segment PRVRIOUGR issu du PCM et le segment PRVRIOUGR généré par MyWay
         */
        comparerSegmentPrvRioUgr(segmentPrvRioUgrMyWay: Object, segmentPrvRioUgrPcm: Object): void;
        /**
         * Retourne le tableau des différences pour le segment PRVRIO
         */
        getTableauDifferencePrvRio(): Object[];
        /**
         * Retourne le tableau des différences pour le segment BILLETTERIE
         */
        getTableauDifferenceBilletterie(): Object[];
        /**
         * Retourne le tableau des différences pour le segment CHEQUE
         */
        getTableauDifferenceCheque(): Object[];
        /**
         * Retourne le tableau des différences pour le segment PRVRIOUGR
         */
        getTableauDifferencePrvRioUgr(): Object[];
    }
}

declare module myway.comOpesFinancieres.apptest {
    class DefautService {
        private $q;
        private $timeout;
        private serviceAgentExtended;
        private modeFinancierService;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modeFinancierService: comInterdomaine.ModeFinancierService);
        getOperationFinanciere(): ng.IPromise<comOpesFinancieres.Model.OperationFinanciere>;
        getClients(): ng.IPromise<MyWay.Model.Client[]>;
        getById(id: number): ng.IPromise<MyWay.Model.Client>;
        getComptes(clientId: number): ng.IPromise<MyWay.Model.Compte[]>;
    }
}

declare module myway.comOpesFinancieres.apptest {
    class SaisieVersementService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        initOperationVersement(): comOpesFinancieres.Model.OperationFinanciere;
    }
}

declare module myway.comOpesFinancieres.apptest {
    function entete(): ng.IDirective;
}
