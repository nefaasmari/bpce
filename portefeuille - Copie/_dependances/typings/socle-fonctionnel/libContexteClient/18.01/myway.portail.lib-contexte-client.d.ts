
declare module libContexteClient {
    var lib: ng.IModule;
    var Tools: typeof libPortail.Tools;
    var ErreurPortail: typeof libPortail.ErreurPortail;
    var CodesPersonnaliteJuridique: typeof libPortail.CodesPersonnaliteJuridique;
    var CodesHabilitations: typeof libPortail.CodesHabilitations;
    var CodesProcessus: typeof libPortail.CodesProcessus;
}

declare module libContexteClient {
    abstract class Constantes {
        static ENV_MYWAY_DUA: string;
        static TYPO_RELATION_LIENS: string;
        static SEP_PARAM_PROCESS: string;
    }
    /**
     * Messages
     */
    abstract class Messages {
        static NON_HABILITATION_DEMARRAGE_PROCESSUS_TITLE: string;
        static NON_HABILITATION_DEMARRAGE_PROCESSUS_BODY: string;
    }
}

declare module libContexteClient {
}

declare module libContexteClient {
}

declare module libContexteClient {
    class ContexteGGO {
        numeroOffreSouscrite: number;
        codeEntite: string;
        codeCanal: string;
        codeActeGestion: string;
        codeApplicationAppelante: string;
        codeSensCommunication: string;
        identifiantEntiteTitulaire: number;
        codeProduitServiceOffre: number;
        numeroPersonneIdentifiee: number;
        constructor(codeActeGestion: string, identifiantEntiteTitulaire: number, codeProduitServiceOffre: number, identifiantPersonne: number);
    }
}

declare module libContexteClient {
    class ParamPopupRelationEconomique {
        identifiantPersonne: number;
        libelleAction: string;
        libellePersonne: string;
        constructor();
    }
}

declare module libContexteClient {
    class ParametreMailCM {
        static CODE_TYPE_MEDIA_MAIL: number;
        static ICON_TYPE_MEDIA_MAIL: string;
        libelle: string;
        icon: string;
        tab1: string;
        tab2: string;
        tab3: string;
        codeTypeMedia: number;
        flagCMVisible: boolean;
        flagErrorVisible: boolean;
        flagReadOnly: boolean;
        mailDefault: MyWay.Services.Communication.Mail;
        constructor(libelle: string, codeTypeMedia?: number, flagCMVisible?: boolean, flagErrorVisible?: boolean, tab1?: string, tab2?: string, tab3?: string);
    }
}

declare module libContexteClient {
    class ParametreTelephoneCC {
        static CODE_TYPE_MEDIA_FIXE: number;
        static CODE_TYPE_MEDIA_MOBILE: number;
        static CODE_TYPE_MEDIA_FAX: number;
        static ICON_TYPE_MEDIA_FIXE: string;
        static ICON_TYPE_MEDIA_MOBILE: string;
        static ICON_TYPE_MEDIA_FAX: string;
        libelle: string;
        icon: string;
        tab1: string;
        tab2: string;
        tab3: string;
        tab4: string;
        codeTypeMedia: number;
        flagIndicatifVisible: boolean;
        flagCCVisible: boolean;
        flagErrorVisible: boolean;
        flagReadOnly: boolean;
        constructor(libelle: string, codeTypeMedia?: number, flagIndicatifVisible?: boolean, flagCCVisible?: boolean, flagErrorVisible?: boolean, tab1?: string, tab2?: string, tab3?: string, tab4?: string);
    }
}

declare module libContexteClient {
    class PersonneRelationEconomique {
        identifiantPersonne: number;
        libellePersonne: string;
        constructor();
    }
}

declare module libContexteClient {
    class StatusCall {
        flagCalling: boolean;
        isInvalid: boolean;
        styleIcon: any;
        errorMessage: string;
        constructor();
    }
}

declare module libContexteClient.Lisa.Agenda {
    const enum ValeurEntreeEnum {
        /**
         * Agenda hebdomadaire
         * Contexte: IDENTIFIANT_EXTERNE_AGENT, POSTE_FONCTIONNEL, IDENTIFIANT_PERSONNE
         */
        AgendaHebdomadaire = 1,
        AgendaJour = 2,
        /**
         * Planning hebdomadaire
         * Contexte: IDENTIFIANT_EDS, POSTE_FONCTIONNEL, IDENTIFIANT_PERSONNE
         */
        PlanningHebdomadaire = 3,
        PlanningJour = 4,
    }
    class ContextKeys {
        static IDENTIFIANT_EXTERNE_AGENT: string;
        static IDENTIFIANT_EDS: string;
        static POSTE_FONCTIONNEL: string;
        static IDENTIFIANT_PERSONNE: string;
    }
}

declare module libContexteClient {
    class MediaTelephoneIHM {
        param: ParametreTelephoneCC;
        numero: string;
        indicatif: string;
        indicateurPreferenceMedia: string;
        constructor(m: any, type: number);
        /**
         * Permet de formater l'affichage d'un numero de telephone
         * Le résultat doit être sous la forme xx xx xx xx xx
         * @param {string} le numéro de téléphone
         * @return {string} le numéro formaté sur 10 caractères avec des espaces
         */
        formaterTelephone(numeroTelephone: string): string;
    }
    class MediaMailIHM {
        param: ParametreMailCM;
        mail: string;
        indicateurPreferenceMedia: string;
        constructor(m: any);
    }
}

declare module libContexteClient {
}

declare module libContexteClient {
    class BandeauClientService {
        private $q;
        private applicationService;
        private processusService;
        private tiersService;
        private edsService;
        private contexteClientService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, applicationService: libPortail.ApplicationService, processusService: libPortail.ProcessusService, tiersService: libPortail.TiersService, edsService: libPortail.EdsService, contexteClientService: libPortail.ContexteClientService, logger: libPortail.LoggerService);
        lancerProcessusAgenda(data: DataBandeauClient): ng.IPromise<void>;
        lancerProcessusClasseurClient(data: DataBandeauClient): ng.IPromise<void>;
        lancerProcessusPlanClassement(data: DataBandeauClient): ng.IPromise<void>;
        lancerProcessusCompteRenduEntretien(data: DataBandeauClient, auth: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        lancerProcessusAidePreparationEntretien(data: DataBandeauClient, auth: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        /**
         * Prépare le contexte agenda dans le cas où le codeAgentSuiviPar est égal à 0.
         */
        private preparerContexteAgenda(data, param);
    }
}

declare module libContexteClient {
    class Clic2CallService {
        private $q;
        private serviceManager;
        static $inject: string[];
        constructor($q: ng.IQService, serviceManager: MyWay.Services.ServiceManagerExtended);
        startCall(numero: string): ng.IPromise<boolean>;
        endCall(): ng.IPromise<boolean>;
    }
}

declare module libContexteClient {
    class Clic2MailService {
        private $q;
        private serviceManager;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, serviceManager: MyWay.Services.ServiceManagerExtended, logger: libPortail.LoggerService);
        send(mail: MyWay.Services.Communication.Mail): ng.IPromise<boolean>;
    }
}

declare module libContexteClient {
    class GraphiqueBase {
        $q: ng.IQService;
        private $timeout;
        private typoService;
        protected tiersService: libPortail.TiersService;
        protected modalService: MyWay.UI.IModalService;
        static TYPE_LIEN_INCONNU: string;
        listeQualite: Array<any>;
        listeQualitePrive: Array<any>;
        listeQualiteEI: Array<any>;
        refLien: Array<any>;
        onSelectNode: (data: any) => void;
        onDone: (data: any) => void;
        idBalise: string;
        flagDetail: boolean;
        callbackSelect: (data: any) => void;
        defInitGlobal: ng.IDeferred<string>;
        loadingPanel: any;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, typoService: TypoService, tiersService: libPortail.TiersService, modalService: MyWay.UI.IModalService);
        prepareLoadingPanel(flagVisible: boolean): void;
        beginWait(): void;
        endWait(): void;
        private initGlobal();
        getLibelleQualite(code: string, categorieJuridique: string): string;
        getLibelleLien(key: string): string;
    }
}

declare module libContexteClient {
    class DataGraphiqueRelationPortail {
        selectedNode: ElementNodePersonne;
        tabNode: Array<ElementNodePersonne>;
        tabGroupe: Array<ElementGroup>;
        tabLink: Array<ElementLink>;
        constructor();
        consolideNode(nodeMetric: NodeMetric): Array<any>;
    }
    class GraphiqueRelationService extends GraphiqueBase {
        static NOM_DOCUMENT_PDF: string;
        diagramRelation: GraphiqueBoardRelation;
        idPersonne: number;
        tabPromiseConsolidation: Array<any>;
        currentIdPersonne: number;
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, typoService: TypoService, tiersService: libPortail.TiersService, modalService: MyWay.UI.IModalService);
        printCurrent(param: PrintParam): string;
        drawRelation(idPersonne: number, flagDetail: boolean, idBalise?: string, callBackSelect?: (data: any) => void): ng.IPromise<string>;
        private refreshRelation(idPersonne);
        FormatDataRelation(idPersonne: number): ng.IPromise<DataGraphiqueRelationPortail>;
        private addSort(tab, node, id);
        private majLink(data);
        private majGroupe(data);
        private getLayoutRelation(nbNode);
        private consolideLienFromSelectNode(data);
        private consolideLienBDD(data, def);
    }
}

declare module libContexteClient {
    class PrintInfoPersonneService {
        private $q;
        private tiersService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, tiersService: libPortail.TiersService, logger: libPortail.LoggerService);
        print(identifiantPersonne: number, typePersonne: string): ng.IPromise<void>;
        private printPersonnePhysique(identifiantPersonne, def, doc);
        private printPersonneMorale(identifiantPersonne, def, doc);
    }
}

declare module libContexteClient {
    class RelationEconomiqueService {
        private $q;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService);
        selectPersonneRelation(param: ParamPopupRelationEconomique): ng.IPromise<PersonneRelationEconomique>;
    }
}

declare module libContexteClient {
    class Typo {
        listeData: Array<any>;
        tableName: string;
        constructor(liste: Array<any>, name: string);
    }
    class TypoService {
        private $q;
        private serviceManager;
        private tabTypo;
        static $inject: string[];
        constructor($q: ng.IQService, serviceManager: MyWay.Services.ServiceManagerExtended);
        getListe(nomTypo: string): any;
    }
}

declare module libContexteClient {
    interface IOnSelectPersonneRelationLocals {
        process: PersonneRelationEconomique;
    }
    /**
     * Contrôleur de la directive bandeauClient
     */
    class BandeauClientController {
        private $q;
        private $rootScope;
        private $interpolate;
        private serviceManager;
        private modalService;
        private agentService;
        private authentificationService;
        private initPortailService;
        private bandeauClientService;
        private applicationService;
        private processusService;
        private relationEconomiqueService;
        private tiersService;
        private printInfoPersonneService;
        private logger;
        private erreurService;
        /**
         * Données du bandeau client
         */
        data: DataBandeauClient;
        processHandler: libPortail.ProcessHandler;
        /**
         * Indique si l'agent connecté est un agent de la Hénin (agence qui possède des droits limités).
         */
        isAgentFromAgenceLaHenin: boolean;
        /**
         * Indicateur de chargement du bandeau
         */
        loading: boolean;
        /**
         * Fonction de debounce de la méthode refresh.
         * Cette dernière ne doit pas être lancée plusieurs fois en même temps.
         */
        private refreshDebounce;
        /**
         * Liste des processus pouvant être démarrés par les actions rapides.
         */
        private listeProcessusDemarrables;
        /**
         * Liste complète des processus de la base portail
         */
        private listeProcessus;
        private onSelectPersonneRelation;
        boutons: IBandeauClientBouton[];
        static $inject: string[];
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, $interpolate: ng.IInterpolateService, serviceManager: MyWay.Services.ServiceManagerExtended, modalService: MyWay.UI.IModalService, agentService: libPortail.AgentService, authentificationService: libPortail.AuthentificationService, initPortailService: libPortail.InitPortailService, bandeauClientService: BandeauClientService, applicationService: libPortail.ApplicationService, processusService: libPortail.ProcessusService, relationEconomiqueService: RelationEconomiqueService, tiersService: libPortail.TiersService, printInfoPersonneService: PrintInfoPersonneService, logger: libPortail.LoggerService, erreurService: libPortail.ErreurService);
        /**
         * Terminer un processus client
         */
        closeProcess(process: libPortail.ProcessPortail): void;
        /**
         * Terminer tous les processus du client
         */
        closeAllProcesses(): void;
        /**
         * Changer le processus courant du client (bascule vers un autre processus ouvert).
         */
        changeProcessClient(process: libPortail.ProcessPortail): void;
        /**
         * Ouvrir la modale relation économique
         */
        ouvrirModaleRelationEconomique(): void;
        /**
         * Ouvrir la modale détails des média (mails, téléphones...)
         */
        ouvrirModaleDetailsMedia(): void;
        start(bouton: IBandeauClientBouton): void;
        startProcessusClasseurClient(): void;
        tryStartProcess(bouton: IBandeauClientBouton): void;
        startProcess(bouton: IBandeauClientBouton, process: libPortail.Application): ng.IPromise<any>;
        startActionRapide(process: libPortail.Application): void;
        /**
         * Rafraichissement des données du bandeau client
         */
        private refresh();
        /**
         * Initialise la liste déroulante des actions rapides
         */
        private initActionRapide();
        /**
         * Initialisation des boutons du bandeau.
         */
        private initBoutons();
    }
}

declare module libContexteClient {
}

declare module libContexteClient {
    interface IBandeauClientBouton {
        className?: string;
        title?: () => string;
        icon?: string;
        hide?: () => boolean;
        clickFunction?: () => void;
        codeProcessus?: string;
        startProcessusHabilitation?: () => ng.IPromise<boolean>;
        startProcessusFunction?: () => ng.IPromise<any>;
    }
    class DataBandeauClient {
        processHandler: libPortail.ProcessHandler;
        identifiantPersonne: number;
        libelleClient: string;
        contexteClientData: libPortail.ContexteClientData;
        isPersonnePhysique: boolean;
        isPersonneMorale: boolean;
        listeProcessClient: libPortail.ProcessPortail[];
        listeActionRapideClient: libPortail.Application[];
        listeActionRapideNonClient: libPortail.Application[];
        constructor(processHandler: libPortail.ProcessHandler);
        /**
         * Initialise les données à partir du processus client en cours
         */
        initClient(): void;
    }
}

declare module libContexteClient {
    class IndicateurCompletudeDrcController {
        private $scope;
        private $interpolate;
        private agentService;
        private completudeDrcService;
        private erreurService;
        private logger;
        typeEntite: string;
        idPorteur: number;
        placementContenu: string;
        completudeDrcResult: ICompletudeDRC;
        indicateur: IndicateurCompletudeEnum;
        nombre: number;
        /**
         * Habilité à lancer ClasseurClient
         */
        classeurClient: boolean;
        private onStart;
        static $inject: string[];
        constructor($scope: ng.IScope, $interpolate: ng.IInterpolateService, agentService: libPortail.AgentService, completudeDrcService: CompletudeDrcService, erreurService: libPortail.ErreurService, logger: libPortail.LoggerService);
        title: string;
        startClasseurClient(): void;
        private verificationCompletudeDRC();
    }
}

declare module libContexteClient {
}

declare module libContexteClient {
    interface IPieceEnAlerte {
        typeJustificatif: string;
        libelleTypeJustificatif: string;
    }
    interface ICompletudeDRC {
        piecesManquantes: string[];
        piecesEnAlerte: IPieceEnAlerte[];
        etatCompletude: string;
        nombrePiecesConcernees: number;
    }
    enum IndicateurCompletudeEnum {
        VIDE = 0,
        INCOMPLET = 1,
        ALERTE = 2,
        COMPLET = 3,
    }
}

declare module libContexteClient {
    class CompletudeDrcService {
        private $q;
        private agentService;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: libPortail.AgentService);
        verifieCompletudeDRC(identifiantPorteur: number, typeEntiteSupport: string): ng.IPromise<ICompletudeDRC>;
    }
}

declare module libContexteClient {
    class DocumentPdf {
        doc: any;
        name: string;
        currentPage: PagePdf;
        constructor(name: string);
        build(): void;
        print(): void;
        addPage(): void;
    }
}

declare module libContexteClient {
    class InfoTexte {
        fontSizeRatio: number;
        nrTab: number;
        color: string;
        constructor();
        getRValue(): number;
        getGValue(): number;
        getBValue(): number;
    }
}

declare module libContexteClient {
    class PagePdf {
        static PAGE_HEIGHT: number;
        static PAGE_WIDTH: number;
        static MARGE: number;
        static RATIO_FONT_MM: number;
        static NB_TAB: number;
        pos: PositionCursor;
        tabLen: number;
        infoTexte: InfoTexte;
        currentFontSize: number;
        doc: any;
        constructor(doc: DocumentPdf);
        addImage(strImage: string, widthImage: number, heightImage: number, wDispo?: number, hDispo?: number): PositionCursor;
        private getDimText(t);
        private prepareInfo(info);
        skipLine(info?: InfoTexte): PositionCursor;
        addFullLigne(info?: InfoTexte): PositionCursor;
        addTexte(texte: string, info?: InfoTexte): PositionCursor;
        addNewLigneTexte(texte: string, info?: InfoTexte): PositionCursor;
        setLigneTextePied(texte: string, info?: InfoTexte): void;
    }
}

declare module libContexteClient {
    class PositionCursor {
        x: number;
        y: number;
        constructor();
    }
}

declare module libContexteClient {
    class ElementGroup {
        category: string;
        key: string;
        isGroup: boolean;
        widthUnite: number;
        unite: number;
        text: string;
        color: string;
        align: go.Spot;
        width: number;
        constructor(key: string, category: string);
    }
}

declare module libContexteClient {
    class ElementGroupRelation extends ElementGroup {
        group: string;
        typeLayout: go.TreeLayout;
        constructor(key: string, categorie: string, text: string, color: string);
    }
}

declare module libContexteClient {
    class ElementLink {
        group: string;
        from: string;
        to: string;
        category: string;
        listeLigne: Array<string>;
        wEnd: number;
        wLabel: number;
        wFromEnd: number;
        colorLink: string;
        text: string;
        constructor(from: string, to: string, category?: string, text?: string);
    }
}

declare module libContexteClient {
    class ElementNodePersonne {
        static iconEspacePrive: string;
        static iconEspaceEntreprise: string;
        static COLOR_PERSONNE_HORS_RELATION: go.Brush;
        static CODE_PERSONNE_PHYSIQUE: number;
        static CODE_PERSONNE_MORALE: number;
        static WIDTH_MARK: number;
        static WIDTH_MARK_LEADER: number;
        static BRUSH_BK: go.Brush;
        static BRUSH_BK_SELECT: go.Brush;
        static BRUSH_BK_SELECT_LEADER: go.Brush;
        static BRUSH_BORDER: go.Brush;
        static BRUSH_BORDER_HOVER: go.Brush;
        static BRUSH_BORDER_HOVER_LEADER: go.Brush;
        static BRUSH_FONT: go.Brush;
        static BRUSH_FONT_SELECT: go.Brush;
        static BRUSH_MARK: go.Brush;
        static BRUSH_MARK_LEADER: go.Brush;
        static BRUSH_ICON: go.Brush;
        static BRUSH_ICON_LEADER: go.Brush;
        static BRUSH_FG_TITRE: go.Brush;
        static BRUSH_BK_TITRE: go.Brush;
        key: string;
        category: string;
        categorySave: string;
        categoryReduit: string;
        header: string;
        titre: string;
        titre2: string;
        sousTitre: string;
        icon: string;
        text: string;
        group: string;
        typeCursor: string;
        flagSelect: boolean;
        flagActif: boolean;
        flagRelation: boolean;
        flagHover: boolean;
        flagLeader: boolean;
        codePersonnaliteJuridique: number;
        identifiantOrganigramme: string;
        identifiantPersonne: number;
        constructor(personne: any, flagRelation: boolean);
        bkBrush: go.Brush;
        borderBrush: go.Brush;
        fontColor: go.Brush;
        colorLeftMark: go.Brush;
        colorIcon: go.Brush;
        fgTitre: go.Brush;
        bkTitre: go.Brush;
        widthMark: number;
        formatSIREN(siren: string): string;
    }
}

declare module libContexteClient {
    class TemplateGroupMain {
        template: go.Group;
        $: any;
        constructor(nodeMetric: NodeMetric);
        getGridLayout(nodeMetric: NodeMetric): go.GridLayout;
    }
}

declare module libContexteClient {
    class TemplateGroupRelation {
        template: go.Group;
        $: any;
        constructor(nodeMetric: NodeMetric);
        getTreeLayout(nodeMetric: NodeMetric): go.TreeLayout;
    }
}

declare module libContexteClient {
    class TemplateLinkEMPTY {
        template: go.Link;
        $: any;
        constructor(nodeMetric: NodeMetric);
    }
}

declare module libContexteClient {
    class TemplateLinkTB {
        template: go.Link;
        $: any;
        constructor(nodeMetric: NodeMetric);
    }
}

declare module libContexteClient {
    class TemplateNodePersonne {
        template: go.Node;
        $: any;
        nodeMetric: NodeMetric;
        tablePanel: go.Panel;
        mainPanel: go.Panel;
        constructor(nodeMetric: NodeMetric);
        private onMouseEnter(e, obj, prev);
        private onMouseLeave(e, obj, prev);
        private getRowPanelHeader();
        private getRowPanelBody(textStyle, bindText);
    }
}

declare module libContexteClient {
    class PrintParam {
        static MODE_PRINT_FULL_PAGE: number;
        static MODE_PRINT_MOSA: number;
        static MODE_PRINT_CUSTOM: number;
        titrePrincipal: string;
        titreSecondaire: string;
        pied: string;
        mode: number;
        nbCol: number;
        nbRow: number;
        constructor(titrePrincipal?: string, titreSecondaire?: string, pied?: string, mode?: number, nbCol?: number, nbRow?: number);
    }
    class NodeMetric {
        heightDiagram: number;
        widthDiagram: number;
        sizeNode: go.Size;
        sizeNodeReduit: go.Size;
        heightHeader: number;
        marginNode: number;
        hBigFont: number;
        hSmallFont: number;
        hBigIconFont: number;
        hSmallIconFont: number;
        sizeButtonExpand: go.Size;
        widthLastSegment: number;
        fontTitre: string;
        fontSousTitre: string;
        marginDiagram: number;
        unite: number;
        constructor(idBalise: string);
        init(idBalise: string): void;
    }
    class GraphiqueBoard {
        static DEF_WIDTH_NODE: number;
        static DEF_HEIGHT_NODE: number;
        static DEF_HEIGHT_NODE_REDUIT: number;
        static DEF_MARGIN_NODE: number;
        static DEF_WIDTH_BUTTON_EXPAND: number;
        static DEF_HEIGHT_BUTTON_EXPAND: number;
        static DEF_HEIGHT_HEADER: number;
        diagram: go.Diagram;
        currentPart: go.Part;
        nodeMetric: NodeMetric;
        model: go.GraphLinksModel;
        callBackSelect: (data: any) => void;
        callBackDone: (data: any) => void;
        $: any;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        ajustDiagram(): void;
        addTemplateNode(key: string, templateNode: TemplateNodePersonne): void;
        addLinkTemplate(templateLink: any, key: string): void;
        addGroupTemplate(templateGroup: any, key: string): void;
        printCurrent(modalService: MyWay.UI.IModalService, nomDoc: string, param: PrintParam): string;
        createPDF(nomDoc: string, param: PrintParam): void;
        private PopupOptionPrint(modalService, nomDoc, param);
    }
}

declare module libContexteClient {
    class GraphiqueBoardRelation extends GraphiqueBoard {
        data: DataGraphiqueRelationPortail;
        static CATEGORIE_NODE_PERSONNE_PORTAIL: string;
        static CATEGORIE_LINK_TB: string;
        static CATEGORIE_LINK_EMPTY: string;
        static CATEGORIE_GROUP_MAIN: string;
        static CATEGORIE_GROUP_RELATION: string;
        static COLOR_LEADER: string;
        static COLOR_LINK: string;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        drawConsolide(data: DataGraphiqueRelationPortail, tab: Array<any>, $q: ng.IQService): void;
        refreshConsolide(data: DataGraphiqueRelationPortail, tab: Array<any>, $q: ng.IQService): void;
        draw(data: DataGraphiqueRelationPortail): void;
        refresh(data: DataGraphiqueRelationPortail): void;
        private refreshLinkOrganisation(data);
        private refreshNodeOrganisation(data);
    }
}
