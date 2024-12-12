
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
    enum ObjetMetier {
        tachesATraiter = 0,
        tachesEnInstance = 1,
        demandesInitiees = 2,
        demandesEnPortefeuille = 3,
        delegations = 4,
        demandesEnCours = 5,
        demandes = 20,
        demandesRechercheAvancee = 21,
    }
    enum TypeStructure {
        inconnu = 0,
        eds = 1,
        renfort = 1,
        structureUsage = 2,
        groupeDelegataire = 3,
    }
    const URLMYFLOW: Object;
    enum CodeSortieLisa {
        spaListe = 2,
    }
    const contextConstants: IContextConstants;
    const CIVILITE: {
        "1": string;
        "2": string;
        "3": string;
    };
    const HABILITATION: {
        RECHERCHE_AVANCEE: number;
    };
    enum StackChart {
        width = 720,
        height = 275,
        top = 20,
        right = 110,
        bottom = 90,
        left = 80,
        heigthOfScrollBar = 21.25,
        maxStacks = 750,
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
        x = 512,
        transform = 19,
    }
    enum LegendText {
        x = 535,
        y = 9,
    }
    enum TypeIndicateur {
        nombre = 0,
        pourcentage = 1,
        secteur = 2,
        histogramme = 3,
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
    interface IContextConstants {
        partChartConstant: string;
    }
    interface IHabilitation {
        codeFonction: number;
        libFonction: string;
    }
}

declare module myflow.libcommon {
    class MyfHeaderController {
        lisaService: myflow.libcommon.LisaService;
        perimetreService: myflow.libcommon.PerimetreService;
        fullName: any;
        constructor(lisaService: myflow.libcommon.LisaService, perimetreService: myflow.libcommon.PerimetreService);
        fermerApp(): void;
    }
}

declare module myflow.libcommon {
    interface IStackObject {
        nom: string;
    }
    interface IStackChartObject {
        dataStackChart: Array<IStackChartData>;
        listLegend: Array<Object>;
    }
    class MajChartsService {
        private serviceAgentExtended;
        static $inject: string[];
        getRandomArbitrary(min: number, max: number): number;
        dataPieChart: Array<IPieChartData>;
        dataStackChart: Array<IStackChartData>;
        listParts: Array<any>;
        isSizeChartValid(sc: Array<any>): boolean;
        formatDataStackChart(sc: Array<any>): IStackChartObject;
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
    interface IUserInfo {
        posteFonctionnel: string;
        codeEtablissement: string;
        identifiantConnexionAgent: string;
        habilitation: Array<string>;
        nomComplet: string;
    }
    interface IAgent {
        codeAgent: string;
        codeCaisse: string;
        idPosteFonctionnel: string;
        nomComplet: string;
    }
    interface IEdsSelectionne {
        eds: Array<any>;
        groupesDelegataires: Array<any>;
        structuresUsages: Array<any>;
        renforts: Array<any>;
    }
    interface IContext {
        agent: IAgent;
        selectionne: IEdsSelectionne;
    }
    interface IPerimetreContext {
        context: IContext;
    }
    class UserInfo implements IUserInfo {
        posteFonctionnel: string;
        codeEtablissement: string;
        identifiantConnexionAgent: string;
        habilitation: Array<string>;
        nomComplet: string;
        constructor();
    }
    class GestionCookies {
        constructor();
        createOrUpdateCookie(name: string, value: any, hours: number): void;
        deleteCookie(name: string): void;
        checkExistCookie(name: string, value?: any): boolean | RegExpMatchArray;
        writeCookie(name: string, value: any, hours: number): void;
    }
    class PerimetreService {
        serviceAgent: MyWay.Services.CoreCommon;
        $http: ng.IHttpService;
        $q: ng.IQService;
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        stringService: StringService;
        dataTree: any;
        listeStructures: any;
        perimetreContexte: IPerimetreContext;
        observer: any;
        posteFonctionel: string;
        callbackMethod: any;
        perimetreGojsSauveDansContext: boolean;
        perimetreGojsSauveDansBase: boolean;
        perimetreGojs: any;
        userInfo: IUserInfo;
        edsRatachement: string;
        treeAllchecked: boolean;
        constructor(serviceAgent: MyWay.Services.CoreCommon, $http: ng.IHttpService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, stringService: StringService);
        getContexteAgentByPFandHAB(): any;
        /**
         * Permet de savoir si l'agent est habilité a utilisé une fonction recensé dans les habilitations
         * @param codeFonction le code fonction, par ex 48 correspond à l'itilisation de la recherche avancée
         */
        estHabilite(codeFonction: number): boolean;
        valoriseTreeAllchecked(): void;
        createNomComplet(codeCivilite: string, nomFamillePersonnePhysique: string, nomUsagePersonnePhysique: string, prenom: string): string;
        /**
         * Method permettant de savoir si le périmetre est tout selectionné, elle retourne un boolean
         */
        checkSelectedAllPerimetre(): boolean;
        /**
         * Method qui difinit les enfants a selectioner en partant de l'identifiant de leur parent
         * @param eds liste de tous les EDS
         * @param edsCourant Id eds parents
         */
        GetEdsEnfants(eds: Array<IEds>, edsCourant: string): Array<IEds>;
        getListeStructures(): ng.IPromise<{}>;
        sauverPerimetre(perimetre: string): ng.IPromise<any>;
        recupererPerimetre(idPF: string, codeEtablissement: string, codeCaisse: string, nomComplet: string): ng.IPromise<any>;
        recupererLimitations(codeCaisse: string): ng.IPromise<any>;
        /**
         * Methode qui renvoit l'url su service rest permettant d'avoir le contexte de l'agent
         * @param idPosteFonctionnel {string}
         * @param codeEtablissement {string}
         * @param habilitation {string}
         * @returns {string}
         */
        url(idPosteFonctionnel: string, codeEtablissement: string): string;
        urlSauvegardePerimetre(): string;
        urlRecupererSauvegardePerimetre(idPF: string, codeAgent: string, codeCaisse: string, nomComplet: string): string;
        /**
         * methode qui permet de retourner l'url restrictions
         */
        urlrestrictions(codeEtablissement: string): string;
    }
}

declare module myflow.libcommon {
}

declare module myflow.libcommon {
    function pourcentageFilter(): (input: number) => string;
}

declare module myflow.libcommon {
    function conditionOnChangeDirective($parse: any): ng.IDirective;
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
    interface IListeQuery {
        /**
         * contient les éléments pour construire la requête
         */
        clauses: IQueryClauses;
        /**
         * contient le contexte de connexion de l'utilisateur
         */
        context: IUserContext;
    }
    interface IUserContext {
        agent: IAgent;
        selectionne: IPerimetre;
    }
    interface IPerimetre {
        /**
         * Liste des EDS
         */
        eds: Array<string>;
        /**
         * Liste des structures d'usages
         */
        structuresUsages: Array<string>;
        /**
         * Liste des groupes délégataires
         */
        groupesDelegataires: Array<string>;
    }
    interface IQueryClauses {
        /**
         * Clause de sélection des colonnes
         */
        select: Array<string>;
        /**
         * Identifiant de l'objet métier
         */
        from: number;
        where: Array<ICondition>;
        /**
         * Clause de regroupement
         */
        groupBy: Array<string>;
        /**
         * Clause d'ordre de tri
         */
        orderBy: Array<string>;
    }
    interface ICondition {
        colonne: IColonne;
        comparateurs: Array<IComparateur>;
    }
    interface IColonne {
        /**
         * Nom fonctionnel
         */
        value: string;
        /**
         * Identifiant de la colonne
         */
        identifiant: string;
        /**
         * Libelle de la colonne
         */
        libelle: string;
    }
    interface IComparateur {
        /**
         * Opérateur
         */
        operator: string;
        /**
         * Valeur
         */
        value: string;
        /**
         * Identifiant du comparateur
         */
        identifiant: number;
    }
    interface IMessageErreur {
        /**
         * un message rappelant l'action demandée qui a échouée
         */
        message: string;
        /**
         * le code de la famille d'erreur: code fixe
         * l'utilisateur final s'en servira pour ouvrir un ticket support,
         * avec ce code on saura à l'avance la nature de l'erreur
         */
        errorCode: number;
        /**
         * un identifiant unique de l'erreur: identifiant généré à la levée de l'exception →
         * l'utilisateur final s'en servira pour ouvrir un ticket support, avec cet identifiant l'exploitant pourra retrouver rapidement les logs via ELK
         * (le format est <le timestamp complet>-<1 code aléatoire sur 32 caractères>)
         */
        uniqueErrorNumber: string;
    }
    interface IObjetErreur {
        libelle: string;
        valeurs: Array<IMessageErreur>;
        codeLibelle: string;
    }
    /**
     * Interface des pictos affichés dans la SPA liste
     */
    interface IPictoData {
        nom: string;
        description: string;
        ordre: number;
        valeur: boolean;
    }
}

declare module myflow.libcommon {
    class CommunService {
        $q: ng.IQService;
        requeteHTTPService: myflow.libcommon.RequeteHTTPService;
        noKillIfram: boolean;
        loadingChart: boolean;
        static $inject: string[];
        additionalHeaders: {
            "pragma": string;
            "cache-control": string;
        };
        constructor($q: ng.IQService, requeteHTTPService: myflow.libcommon.RequeteHTTPService);
        getProperties(codeCaisse: string): ng.IPromise<{}>;
        /**
         * Methode qui retourne l'url du ws qui recupere les propriétés de la tache
         * @returns {string} url du service
         */
        urlProperties(codeCaisse: string): string;
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
        comptageObjetMetier: any;
        nomObjetMetier: string;
        dataTree: any;
        dataIndicateur: any;
        tableauListeTaches: any;
        tableauListe: any;
        filtreApplique: boolean;
        chargementTableau: boolean;
        listCount: boolean;
        dataPicto: Array<IPictoData>;
        idPicto: number;
        tableauDataLigne: any;
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
        lisaService: LisaService;
        message: string;
        noKillIfram: boolean;
        constructor(modalService: MyWay.UI.ModalService, lisaService: LisaService);
        showErrorPopupNonBloquante(title: string, corps: string): void;
        showErrorPopupErreur(title: string, corps: any): void;
        showErrorConfirmWithLisa(corps: any, retourCallback: any): void;
    }
}

declare module myflow.libcommon {
    class StringService {
        $q: ng.IQService;
        requeteHTTPService: myflow.libcommon.RequeteHTTPService;
        static $inject: string[];
        constructor($q: ng.IQService, requeteHTTPService: myflow.libcommon.RequeteHTTPService);
        /**
         * Méthode qui permet de faire un padStart, non supporté par ie
         * @param tailleChaineApresAjout la taille souhaité, par exemple au total je veux une chaîne qui fasse 7 car apres ajout du car complementaire
         * @param chaine la chaine où il faut ajouter le caractère supplementaire
         * @param caractereComplementaire le caractere complementaire
         */
        ajoutCaracteresDebutChaine(tailleChaineApresAjout: number, chaine: string, caractereComplementaire: string): string;
    }
}

declare module myflow.libcommon {
    class StackChartControleur {
        $scope: myflow.libcommon.IScope;
        majChartService: MajChartsService;
        lisaService: LisaService;
        perimetreService: PerimetreService;
        communService: CommunService;
        width: number;
        height: number;
        tooltip: any;
        idChart: number;
        filtrePartOfHist: any;
        stackChartOverFlow: boolean;
        constructor($scope: myflow.libcommon.IScope, majChartService: MajChartsService, lisaService: LisaService, perimetreService: PerimetreService, communService: CommunService);
        showMessage(el: any, htmlMessage: string): void;
        showNoDataMessage(el: any): void;
        isValidDate(dateString: string): string;
        generateChart(el: any, data: Array<IStackChartData>, listParts: Array<any>): void;
        drawAxes(svg: any, x: any, y: any): void;
        createTooltip(svg: any): void;
        createLegend(svg: any, colors: Array<any>, listParts: Array<any>): void;
        createGroupsRect(svg: any, x: any, y: any, dataset: any, colors: any): void;
        redirectionSpaListe(params: any, codeSortie: number): void;
        cleanFiltreObject(filtre: any): void;
    }
}

declare module myflow.libcommon {
    function stackChartDirective(): ng.IDirective;
}

declare module myflow.libcommon {
    interface IEds {
        key: string;
        libelle: string;
        parent: string;
        checked: boolean;
        firstDepth: boolean;
        type: string;
        idntInteEds: string;
    }
    interface IobjetGoJs {
        key: string;
        libelle: string;
        parent: string;
        checked: boolean;
        type: string;
    }
    class TreeGojsControleur {
        $scope: myflow.libcommon.IScope;
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        perimetreService: myflow.libcommon.PerimetreService;
        myDiagram: any;
        $: any;
        chargementPerimetre: boolean;
        grpDeleg: Array<Object>;
        structureUsage: Array<Object>;
        renforts: Array<Object>;
        eds: any;
        perimetre: any;
        perimetreGojsSauve: any;
        hasChild: boolean;
        firstLoadTree: boolean;
        treeAllchecked: boolean;
        triStateIndeterminate: boolean;
        deselectAll: boolean;
        dataNodesAllChecked: Array<any>;
        dataNodesAllUnchecked: Array<any>;
        constructor($scope: myflow.libcommon.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, perimetreService: myflow.libcommon.PerimetreService);
        majPerimetreGojsSelectAll(): void;
        majPerimetreGojsUnSelectAll(): void;
        selectOrUnselectAllStructuredusage(structureUsage: Array<any>, checked: boolean): any[];
        selectOrUnselectAllRenforts(renforts: Array<any>, checked: boolean): any[];
        selectOrUnselectAllGroupeDelegataire(groupeDelegataire: Array<any>, checked: boolean): any[];
        getPerimetreSelectioner(eds: Array<IEds>, edsCourant: string): Array<IEds>;
        selectOrUnselectAllEds(eds: Array<IEds>, checked: boolean): IEds[];
        /**
         * Method qui difinit les enfants a selectioner en partant de l'identifiant de leur parent
         * @param eds list de toutes les EDS
         * @param edsCourant Id eds parents
         */
        GetEdsEnfants(eds: Array<IEds>, edsCourant: string): Array<IEds>;
        creerBuilderCheckboxMultistate(): any;
        checkOrUncheckAllCallback(): void;
        initTree(): void;
        majNodeData(): Array<any>;
        configTree(): any;
        creerNodeTemplate(myDiagram: any): void;
        creerLinkTemplate(myDiagram: any): void;
        makeTree(level: any, count: any, max: any, nodeDataArray: any, parentdata: any): any;
    }
}

declare module myflow.libcommon {
    function treeGojsDirective(): ng.IDirective;
}

declare module myflow.libcommon {
    interface ISelectionPerimetre {
        agent: IAgent;
        /**
         * Sélections du périmètre
         */
        selection: any;
    }
    class NavigationPerimetreEdsController {
        $window: Window;
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        perimetreService: myflow.libcommon.PerimetreService;
        monEds: any;
        monSU: any;
        modalService: any;
        dt: any;
        window: ng.IWindowService;
        constructor(modalService: MyWay.UI.IModalService, $window: Window, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, perimetreService: myflow.libcommon.PerimetreService);
        afficherPerimetre(): void;
        /**
         *
         * @param {string} etat : etat de l'initialisation, si true alors on cochera toutes les cases du perimètre et
         * on ne chragera pas le perimtre sauvegardé dans le context
         */
        initialiser(etat: string): void;
    }
}

declare module myflow.libcommon {
    function navigationPerimetreEdsDirective(): ng.IDirective;
}

declare module myflow.libcommon {
    interface IListeEDS {
        CodeTypeEds: string;
        DesgEds: string;
        IdntEtabGce: string;
        IdntInteEds: string;
        LiblTypeEds: string;
        RefrExtnEds: string;
    }
    interface IListeStructureUsage {
        IdPosteFonctionnel: string;
        IdStructurePorteuse: string;
        IdStructureUsage: string;
        LibStructurePorteuse: string;
        LibStructureUsage: string;
        createur: string;
        dateDebut: string;
        parent: string;
        posteFonctionnel: string;
    }
    interface IListeRenfort {
        createur: string;
        idEds: string;
        idRenfort: string;
        libelleEds: string;
        type: string;
        typeEds: string;
    }
    interface IListeGroupeDelegataire {
        dateMaj: string;
        eligibleNotification: string;
        hierarchie: Array<any>;
        idCaisse: string;
        idGroupeDelegataire: number;
        libelleGroupeDelegataire: string;
        typeCreation: number;
        typeFonction: Array<any>;
    }
    interface IObjet {
        [key: string]: string;
    }
    class NavigationPerimetreEdsModaleControleur {
        $scope: myflow.libcommon.IScope;
        private $modalInstance;
        serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        perimetreService: myflow.libcommon.PerimetreService;
        private modalService;
        mwNotificationService: MyWay.UI.IMwNotificationService;
        message: string;
        initialise: boolean;
        perimetreSelectionneGojs: any;
        perimetreContexte: any;
        treeData: any;
        listeEDS: any;
        listeSU: any;
        listeRenfort: any;
        listeGroupeDeleg: any;
        constructor($scope: myflow.libcommon.IScope, $modalInstance: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, perimetreService: myflow.libcommon.PerimetreService, modalService: MyWay.UI.ModalService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         *   Methode qui gère le clic sur bouton annuler
         */
        annuler(): void;
        /**
         *   Methode qui gère le clic sur bouton valider
         */
        valider(): void;
        obtenirPerimetrePersonnalise(): void;
        appliquerPerimetre(methode: any): void;
        /**
         *   Methode qui gère la sauvegarde du périmetre
         */
        sauver(): void;
        /**
         * Methode qui affiche popup d'erreur
         *
         */
        showErrorPopupBloquante(): void;
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
