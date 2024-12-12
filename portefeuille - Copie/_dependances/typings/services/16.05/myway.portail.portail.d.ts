
declare module MonPortail {
    var app: any;
}

declare module MonPortail {
    class PortailControleur {
        private serviceManager;
        $scope: ng.IScope;
        private toggleContactService;
        $interval: ng.IIntervalService;
        private barreRechercheGlobaleService;
        authentificationInfo: any;
        codeEtablissement: string;
        nomAgent: string;
        prenomAgent: string;
        idAgent: string;
        environnement: string;
        libelleEds: string;
        versionMySys: string;
        referenceExterneAgent: string;
        numeroStationTravail: string;
        codeAgent: string;
        parametresComptables: any;
        codeGuichetInterbancaire: string;
        edsExterneGuichetComptable: string;
        edsExterneRattachementGuichetComptable: string;
        dateOperationJourneeComptable: string;
        bureau: string;
        accueil: string;
        myInCall: string;
        decalage: number;
        decalageListe: number;
        depassementZoneScroll: number;
        portailContext: MyWay.Services.Context.IPortalContext;
        portailService: MonPortail.PortailService;
        processusCourants: Array<string>;
        clientsCourants: Array<string>;
        processusCourant: string;
        clientCourant: string;
        listeProcessusClient: Array<MyWay.Services.Context.IProcess>;
        listeProcessus: Array<MyWay.Services.Context.IProcess>;
        motCleRecherche: string;
        client: any;
        static $inject: string[];
        constructor(serviceManager: MyWay.Services.ServiceManagerExtended, portailService: MonPortail.PortailService, $scope: ng.IScope, toggleContactService: MonPortail.ToggleContactService, $interval: ng.IIntervalService, barreRechercheGlobaleService: myway.comServiceRecherche.Communs.BarreRechercheGlobaleService);
        getGuichetEtGuichetDebutJournee(): string;
        getInfosAgent(): string;
        onEvent: (event: MyWay.Services.Component.ManagerEvent) => void;
        retourMaJournee(): void;
        lancerProcessusRecherche(): void;
        lancerProcessusRechercheCollaborateur(matricule: string): void;
        lancerProcessus(code: string): void;
        fermerToutLesProcessus(): void;
        fermerProcessus(processus: MyWay.Services.Context.IProcess): void;
        basculerProcessus(processus: MyWay.Services.Context.IProcess): void;
        extraireProcessus(processus: MyWay.Services.Context.IProcess): void;
        estProcessusCourant(processus: MyWay.Services.Context.IProcess): string;
        estProcessusClient(processus: MyWay.Services.Context.IProcess): boolean;
        fondBandeauClient(): string;
        afficherZoneProcessusClients(): boolean;
        afficherZoneProcessusAutres(): boolean;
        listerClients(): void;
        scrollUp(): void;
        scrollDown(): void;
        scrollToLastClient(): void;
        scrollToLastApplication(): void;
        scrollUpDisable(): boolean;
        scrollDownDisable(): boolean;
        getNombreProcessusClients(): number;
        getNombreProcessusNonClients(): number;
        scrollButtonDisplayed(): boolean;
        scrollUpListe(): void;
        scrollDownListe(): void;
        scrollUpListeDisable(): boolean;
        scrollDownListeDisable(): boolean;
        onWindowResized(event: UIEvent): void;
        estActif(libelle: string): string;
        lancerProcessusPortail(url: string): void;
        lancerProcessusLisa(): void;
        lancerProcessusExterne(url: string): void;
        creerClient(): void;
        getNomAgent(): string;
        getPrenomAgent(): string;
        afficherInitiales(chaine: string): string;
        getBureau(): string;
        getAccueil(): string;
        decalageIdentite(): string;
        decalageIcones(): string;
    }
}

declare module MonPortail {
}

declare module MonPortail {
    var portailConfig: {
        "containerId": string;
        "portaitBreakpoint": number;
        "cssOpeningAnimClass": string;
        "navigation": {
            "id": string;
            "cssClass": string;
            "cssExpandClass": string;
            "cssExpandAnimClass": string;
            "cssClosingAnimClass": string;
            "width": number;
            "openWidth": number;
        };
    };
    class PortailService {
        _iframeElement: HTMLElement;
        _navigationElement: ng.IAugmentedJQuery;
        $q: ng.IQService;
        $timeout: ng.ITimeoutService;
        $http: ng.IHttpService;
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, $http: ng.IHttpService);
        /**
         * setContainerWidth() fixe la taille du conteneur principal
         * en fonction de la taille de la navigation.
         * @param {number} navWidth - La largeur en pixel de la navigation principale
         * @param {boolean} async - Defini si la fonction doit retourner une promesse
         * @return {promise} deferred.promise - en mode async seulement.
         */
        setContainerWidth(navWidth: number, async: boolean): ng.IPromise<any>;
        /**
         * isPortrait() verfifie si la résolution de l'écran
         * est de type portrait.
         * @return {boolean}
         */
        isPortrait(): boolean;
        /**
         * getTransitionDuration() retourne, pour un élément HTML
         * donné, le temps de la transition CSS qui lui est associé
         * @param {HTMLElement} elem - L'élement HTML ciblé
         * @return {number} convertInMs(duration) - La durée en ms de la transition
         */
        getTransitionDuration(elem: HTMLElement): number;
        /**
         * isNavigationExpanded() verifie si la
         * navigation principale est en mode étendu ou non.
         * @return {boolean}
         */
        isNavigationExpanded(): boolean;
        static Factory(): ($q: ng.IQService, $timeout: ng.ITimeoutService, $http: ng.IHttpService) => PortailService;
    }
}

declare module MonPortail {
    class ToggleContactService {
        $animate: any;
        private _contact;
        private _contactContext;
        private _expandedElement;
        private _composedNumber;
        private _client;
        static $inject: string[];
        constructor($animate: any);
        showContact(): void;
        showContactContext(client: any): void;
        show(item: any): void;
        close(item: any): void;
        toggleContact(): void;
        private closeItems();
        private isExpanded(element);
        private setTopPosition(element);
        toggleCall(num: any): void;
        onCall(): boolean;
        isCalling(num: any): boolean;
        startLync(mail: any): void;
        sendMail(mail: any): void;
    }
}

declare module MonPortail {
    function entete(): ng.IDirective;
}

declare module MonPortail {
    function toggleContactContext(toggleContactService: MonPortail.ToggleContactService): {
        templateUrl: string;
        restrict: string;
        replace: boolean;
        scope: {
            client: string;
        };
        link: (scope: any, element: any, attrs: any) => void;
    };
}

declare module MonPortail {
}

declare module MonPortail {
}
