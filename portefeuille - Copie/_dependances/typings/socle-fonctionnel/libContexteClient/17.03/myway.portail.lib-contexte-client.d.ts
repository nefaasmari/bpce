declare module libContexteClient {
    var lib: ng.IModule;
}

declare module libContexteClient {
    class Constantes {
        static KEY_NODAPE: string;
        static ENV_MYWAY_DUA: string;
        static TYPO_RELATION_LIENS: string;
        static CODE_PERSONNE_PHYSIQUE: string;
        static CODE_PERSONNE_MORALE: string;
        static CODE_PERSONNE_INCONNUE: string;
        static CODE_LISA_SYNTHESE: string;
        static CODE_LISA_AGENDA: string;
        static CODE_LISA_IDENTIFICATION_PERSONNE: string;
        static SEP_PARAM_PROCESS: string;
        static NBR_MAX_POCESS_CLIENT: number;
    }
}

declare module libContexteClient {
    interface IEventListener {
        onEvent: (event: MyWay.Services.Component.ManagerEvent) => void;
    }
    interface IGlobal {
        init(flagMessage?: boolean): ng.IPromise<MyWay.Services.Context.IPortalContext>;
        registerEventListener: (l: IEventListener) => void;
        unRegisterEventListener: (l: IEventListener) => void;
        serviceManager: MyWay.Services.ServiceManagerExtended;
        portailContext: MyWay.Services.Context.IPortalContext;
    }
    class Global implements IGlobal {
        serviceManager: MyWay.Services.ServiceManagerExtended;
        portailContext: MyWay.Services.Context.IPortalContext;
        onEvent: (event: MyWay.Services.Component.ManagerEvent) => void;
        listeListener: Array<IEventListener>;
        onAffichageModalMessage: (titreMessage: string, contenuMessage: string, boutons: string, delai: number, callback: (retour: any) => void, onModaleOuverte?: () => void) => void;
        onFermerModalMessage: () => void;
        promiseInit: ng.IPromise<MyWay.Services.Context.IPortalContext>;
        $q: ng.IQService;
        toolsService: ITools;
        static $inject: string[];
        constructor($q: ng.IQService, serviceManager: MyWay.Services.ServiceManagerExtended, Tools: ITools);
        init(flagMessage?: boolean): ng.IPromise<MyWay.Services.Context.IPortalContext>;
        registerEventListener(l: IEventListener): void;
        unRegisterEventListener(l: IEventListener): void;
    }
}

declare module libContexteClient {
    interface ITools {
        showConfirm: (options: any) => ng.IPromise<any>;
        getStrHeureCourante: () => any;
        MsgBox: (header: any, msg: any, icon?: any, size?: any) => any;
        extractErreur: (data: any) => any;
        getStrDateCourante: () => string;
        getStrDate: (d: Date) => string;
        getBase64FromImageUrl: (url) => ng.IPromise<string>;
        getStrDateHeureCourante: () => string;
        showDlg: (option: any) => ng.IPromise<any>;
        extractValue: (key: string, obj: any) => any;
        paddingIdPersonne: (id: string | number) => string;
    }
    class Tools implements ITools {
        modalService: any;
        $q: ng.IQService;
        static $inject: string[];
        constructor(modalService: any, $q: ng.IQService);
        showDlg(options: any): ng.IPromise<any>;
        showConfirm(options: any): ng.IPromise<any>;
        getStrHeureCourante(): any;
        MsgBox(header: any, msg: any, icon?: any, size?: any): any;
        getBase64FromImageUrl(url: any): ng.IPromise<string>;
        extractErreur(data: any): any;
        getStrDateHeureCourante(): string;
        getStrDateCourante(): string;
        paddingIdPersonne(id: string | number): string;
        getStrDate(d: Date): string;
        extractValue(key: string, obj: any): any;
    }
}

declare module libContexteClient {
}

declare module libContexteClient {
}

declare module libContexteClient {
}

declare module libContexteClient {
    interface IBlocParamLISA {
        key: string;
        data: any;
    }
    class BlocParamLISA implements IBlocParamLISA {
        key: string;
        data: any;
        constructor(key: string, data: any);
    }
}

declare module libContexteClient {
    interface IContexteGGO {
        numeroOffreSouscrite: number;
        codeEntite: string;
        codeCanal: string;
        codeActeGestion: string;
        codeApplicationAppelante: string;
        codeSensCommunication: string;
        identifiantEntiteTitulaire: number;
        codeProduitServiceOffre: number;
        numeroPersonneIdentifiee: number;
    }
    class ContexteGGO implements IContexteGGO {
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
    interface IParametreMailCM {
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
    }
    class ParametreMailCM implements IParametreMailCM {
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
    interface IParametreTelephoneCC {
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
    }
    class ParametreTelephoneCC implements IParametreTelephoneCC {
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
    interface IParamLisa extends MyWay.Services.Lisa.IInitialisationData {
        addParamTab: (key: string, value: string) => void;
        addSingleParam: (key: string, value: string) => void;
    }
    class ParamLisa implements IParamLisa {
        context: MyWay.Services.Context.IContextKeyValuePair;
        contextArray: Array<MyWay.Services.Context.IContextKeyValuePair>;
        displayName: string;
        idClient: string;
        processusAOuvrirDansUneNouvelleInstance: boolean;
        subProcessCode: string;
        constructor();
        addSingleParam(key: string, value: string): void;
        addParamTab(key: string, value: string): void;
    }
}

declare module libContexteClient {
    interface IParamPopupMedia {
        identifiantPersonne: number;
        libellePersonne: string;
    }
    class ParamPopupMedia implements IParamPopupMedia {
        identifiantPersonne: number;
        libellePersonne: string;
        constructor();
    }
}

declare module libContexteClient {
    interface IParamPopupRelationEconomique {
        identifiantPersonne: number;
        libellePersonne: string;
        libelleAction: string;
    }
    class ParamPopupRelationEconomique implements IParamPopupRelationEconomique {
        identifiantPersonne: number;
        libelleAction: string;
        libellePersonne: string;
        constructor();
    }
}

declare module libContexteClient {
    interface IParamProcess {
        libelle: string;
        codeLISA: string;
        codeLISABandeauClient: string;
        tabParam: Array<IBlocParamLISA>;
        flagPP: boolean;
        flagPM: boolean;
        flagMultiInstance: boolean;
        flagVisible: boolean;
        valeurDepart: number;
    }
    class ParamProcess implements IParamProcess {
        libelle: string;
        codeLISA: string;
        codeLISABandeauClient: string;
        tabParam: Array<IBlocParamLISA>;
        flagPP: boolean;
        flagPM: boolean;
        flagMultiInstance: boolean;
        flagVisible: boolean;
        valeurDepart: number;
        constructor(libelle: string, codeLISA: string, tabParam?: Array<IBlocParamLISA>, paramProcess?: string);
        private setEligibilite(vecteurEligibilite);
    }
}

declare module libContexteClient {
    interface IPersonneRelationEconomique {
        identifiantPersonne: number;
        libellePersonne: string;
    }
    class PersonneRelationEconomique implements IPersonneRelationEconomique {
        identifiantPersonne: number;
        libellePersonne: string;
        constructor();
    }
}

declare module libContexteClient {
    interface IClientData {
        designationCourte: string;
        codePersonnaliteJuridique: string;
        syntheseClientDonneesSignaletiques: any;
        identifiantPersonne: number;
        codeAgentSuiviPar: number;
        idEdsInterneSuiviPar: number;
    }
    class ClientData implements IClientData {
        designationCourte: string;
        codePersonnaliteJuridique: string;
        syntheseClientDonneesSignaletiques: any;
        identifiantPersonne: number;
        codeAgentSuiviPar: number;
        idEdsInterneSuiviPar: number;
        constructor(identifiantPersonne: string);
    }
    interface IProcessPortail {
        identifiantPersonne: number;
        flagProcessClient: boolean;
        id: string;
        processStep: MyWay.Services.Context.IProcessStep;
        libelleClient: string;
        libelleProcess: string;
        codeProcess: string;
        contexteClientId: string;
        clientData: IClientData;
        timeStamp: number;
    }
    class ProcessPortail implements IProcessPortail {
        _p: MyWay.Services.Context.IProcess;
        _idPersonne: string;
        clientData: IClientData;
        constructor(p: MyWay.Services.Context.Process, idPersonne: string);
        contexteClientId: string;
        timeStamp: number;
        processStep: MyWay.Services.Context.ProcessStep;
        id: string;
        codeProcess: string;
        flagProcessClient: boolean;
        identifiantPersonne: number;
        libelleClient: string;
        libelleProcess: string;
    }
}

declare module libContexteClient {
    interface IStatusCall {
        flagCalling: boolean;
        isInvalid: boolean;
        styleIcon: any;
        errorMessage: string;
    }
    class StatusCall implements IStatusCall {
        flagCalling: boolean;
        isInvalid: boolean;
        styleIcon: any;
        errorMessage: string;
        constructor();
    }
}

declare module libContexteClient {
    interface IMediaTelephoneIHM {
        param: ParametreTelephoneCC;
        numero: string;
        indicatif: string;
        indicateurPreferenceMedia: string;
    }
    class MediaTelephoneIHM implements IMediaTelephoneIHM {
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
    interface IMediaMailIHM {
        param: IParametreMailCM;
        mail: string;
        indicateurPreferenceMedia: string;
    }
    class MediaMailIHM implements IMediaMailIHM {
        param: IParametreMailCM;
        mail: string;
        indicateurPreferenceMedia: string;
        constructor(m: any);
    }
}

declare module libContexteClient {
}

declare module libContexteClient {
}

declare module libContexteClient {
    interface IClic2CallService {
        startCall: (numero: string) => ng.IPromise<boolean>;
        endCall: () => ng.IPromise<boolean>;
    }
    class Clic2CallService implements IClic2CallService {
        private $q;
        private global;
        static $inject: string[];
        constructor($q: ng.IQService, global: IGlobal);
        startCall(numero: string): ng.IPromise<boolean>;
        endCall(): ng.IPromise<boolean>;
    }
}

declare module libContexteClient {
    interface IClic2MailService {
        send: (mail: MyWay.Services.Communication.Mail) => ng.IPromise<boolean>;
    }
    class Clic2MailService implements IClic2MailService {
        private $q;
        private global;
        static $inject: string[];
        constructor($q: ng.IQService, global: IGlobal);
        send(mail: MyWay.Services.Communication.Mail): ng.IPromise<boolean>;
    }
}

declare module libContexteClient {
    interface IDetailPersonneService {
        detailMedia: (param: IParamPopupMedia) => void;
        getSuiviCommercial: (identifiantPersonne: number) => ng.IPromise<any>;
    }
    class DetailPersonneService implements IDetailPersonneService {
        $http: ng.IHttpService;
        $q: ng.IQService;
        tools: ITools;
        global: IGlobal;
        urlIdentification: string;
        static $inject: string[];
        constructor($q: ng.IQService, Tools: ITools, Global: IGlobal, UrlIdentification: string);
        getSuiviCommercial(identifiantPersonne: number): ng.IPromise<any>;
        detailMedia(param: IParamPopupMedia): void;
    }
}

declare module libContexteClient {
    interface IGraphiqueBase {
        personnePhysiqueService: IPersonnePhysiqueService;
        $q: ng.IQService;
        getLibelleQualite: (code: string, categorieJuridique: string) => string;
        prepareLoadingPanel: (flagVisible: boolean) => void;
        beginWait: () => void;
        endWait: () => void;
    }
    class GraphiqueBase implements IGraphiqueBase {
        static TYPE_LIEN_INCONNU: string;
        listeQualite: Array<any>;
        listeQualitePrive: Array<any>;
        listeQualiteEI: Array<any>;
        refLien: Array<any>;
        personnePhysiqueService: IPersonnePhysiqueService;
        typoService: ITypoService;
        onSelectNode: (data: any) => void;
        onDone: (data: any) => void;
        idBalise: string;
        flagDetail: boolean;
        callbackSelect: (data: any) => void;
        global: IGlobal;
        $timeout: ng.ITimeoutService;
        defInitGlobal: ng.IDeferred<string>;
        $q: ng.IQService;
        tools: ITools;
        loadingPanel: any;
        static $inject: string[];
        constructor($q: ng.IQService, Tools: ITools, TypoService: ITypoService, Global: IGlobal, $timeout: ng.ITimeoutService, PersonnePhysiqueService: IPersonnePhysiqueService);
        prepareLoadingPanel(flagVisible: boolean): void;
        beginWait(): void;
        endWait(): void;
        private initGlobal();
        getLibelleQualite(code: string, categorieJuridique: string): string;
        getLibelleLien(key: string): string;
    }
}

declare module libContexteClient {
    interface IDataGraphiqueRelationPortail {
        selectedNode: IElementNodePersonne;
        tabNode: Array<IElementNodePersonne>;
        tabGroupe: Array<IElementGroup>;
        tabLink: Array<IElementLink>;
        consolideNode: (NodeMetric: INodeMetric) => Array<any>;
    }
    class DataGraphiqueRelationPortail implements IDataGraphiqueRelationPortail {
        selectedNode: IElementNodePersonne;
        tabNode: Array<IElementNodePersonne>;
        tabGroupe: Array<IElementGroup>;
        tabLink: Array<IElementLink>;
        constructor();
        consolideNode(NodeMetric: INodeMetric): Array<any>;
    }
    interface IGraphiqueRelationService extends IGraphiqueBase {
        drawRelation: (idPersonne: number, flagDetail: boolean, idBalise?: string, callBackSelect?: (data: any) => void) => ng.IPromise<string>;
        printCurrent: (param: IPrintParam) => string;
    }
    class GraphiqueRelationService extends GraphiqueBase implements IGraphiqueRelationService {
        static NOM_DOCUMENT_PDF: string;
        diagramRelation: IGraphiqueBoardRelation;
        idPersonne: number;
        tabPromiseConsolidation: Array<any>;
        currentIdPersonne: number;
        constructor($q: ng.IQService, Tools: ITools, TypoService: ITypoService, Global: IGlobal, $timeout: ng.ITimeoutService, PersonnePhysiqueService: IPersonnePhysiqueService);
        printCurrent(param: IPrintParam): string;
        drawRelation(idPersonne: number, flagDetail: boolean, idBalise?: string, callBackSelect?: (data: any) => void): ng.IPromise<string>;
        private refreshRelation(idPersonne);
        FormatDataRelation(idPersonne: number): ng.IPromise<IDataGraphiqueRelationPortail>;
        private addSort(tab, node, id);
        private majLink(data);
        private majGroupe(data);
        private getLayoutRelation(nbNode);
        private consolideLienFromSelectNode(data);
        private consolideLienBDD(data, def);
    }
}

declare module libContexteClient {
    interface IElemNavigation {
        identifiantPersonne: number;
        process: IProcessPortail;
    }
    class ElemNavigation implements IElemNavigation {
        identifiantPersonne: number;
        process: IProcessPortail;
        constructor(id: number);
    }
    interface INavigationManager {
        tabNavigationClient: Array<IElemNavigation>;
        processNonClient: IProcessPortail;
        setCurrentProcess: (p: IProcessPortail, listeProcess?: Array<IProcessPortail>) => void;
        getCurrentProcess: (identifiantPersonne: number) => IProcessPortail;
    }
    class NavigationManager implements INavigationManager {
        tabNavigationClient: Array<IElemNavigation>;
        processNonClient: IProcessPortail;
        constructor();
        private clean(listeProcess?);
        setCurrentProcess(p: IProcessPortail, listeProcess?: Array<IProcessPortail>): void;
        getCurrentProcess(identifiantPersonne: number): IProcessPortail;
    }
}

declare module libContexteClient {
    interface IPersonnePhysiqueService {
        identification: (idPersonne: number) => ng.IPromise<any>;
        getTiersLiesAdministratifs: (idPersonne: number) => ng.IPromise<any>;
        getRelationEco: (idPersonne: number) => ng.IPromise<any>;
        getMedia: (idPersonne: number) => ng.IPromise<any>;
        getClient: (idPersonne: number) => ng.IPromise<any>;
    }
    class PersonnePhysiqueService implements IPersonnePhysiqueService {
        private $q;
        private tools;
        private urlRelationPrive;
        private urlTiersLiesAdministratif;
        private global;
        private urlMedia;
        private urlIdentification;
        private urlClient;
        static $inject: string[];
        constructor($q: ng.IQService, tools: ITools, urlRelationPrive: string, urlTiersLiesAdministratif: string, global: IGlobal, urlMedia: string, urlIdentification: any, urlClient: any);
        getTiersLiesAdministratifs(idPersonne: number): any;
        getRelationEco(idPersonne: number): ng.IPromise<any>;
        getClient(idPersonne: number): ng.IPromise<any>;
        getMedia(idPersonne: number): ng.IPromise<any>;
        identification(idPersonne: number): ng.IPromise<any>;
    }
}

declare module libContexteClient {
    interface IPrintInfoPersonneService {
        print: (identifiantPersonne: number, typePersonne: string) => ng.IPromise<void>;
    }
    class PrintInfoPersonneService implements IPrintInfoPersonneService {
        $http: ng.IHttpService;
        $q: ng.IQService;
        tools: ITools;
        personnePhysiqueService: IPersonnePhysiqueService;
        static $inject: string[];
        constructor($q: ng.IQService, Tools: ITools, PersonnePhysiqueService: IPersonnePhysiqueService);
        print(identifiantPersonne: number, typePersonne: string): ng.IPromise<void>;
        private printPersonnePhysique(identifiantPersonne, def, doc);
        private printPersonneMorale(identifiantPersonne, def, doc);
    }
}

declare module libContexteClient {
    interface IProcessusService {
        codeProcessusCourant: string;
        majListeProcess: (from?: number) => ng.IPromise<void>;
        isCurrentProcessus: (p: IProcessPortail) => boolean;
        closeOldProcess: () => Array<string>;
        fermerToutLesProcessus: () => void;
        fermerProcessus: (id: string) => boolean;
        fermerProcessusClient: (identifiantPersonne: number) => void;
        lancerProcessusUrl: (url: string) => void;
        lancerProcessusCode: (code: string, param?: IParamLisa, valeurDepart?: number, idPersonne?: number) => ng.IPromise<MyWay.Services.Lisa.LisaCallbackResult>;
        getProcessusCourant: () => IProcessPortail;
        getCurrentIdPersonne: () => number;
        getListeProcess: () => Array<IProcessPortail>;
        getCurrentProcessLibelle: () => string;
        setCurrentProcess: (p: IProcessPortail) => void;
        setCurrentProcessClient: (p: IProcessPortail) => void;
        getListeIdPersonne(): Array<string>;
        getListeProcessClient: (idPersonne: number) => Array<IProcessPortail>;
        setCurrentProcessFromId: (id: string) => void;
        getListeProcessWithContexteClient: () => Array<IProcessPortail>;
        getListeProcessWithoutContexteClient: () => Array<IProcessPortail>;
        getListeProcessClientMax: () => boolean;
        closeAllProcess: () => void;
    }
    class ProcessusService implements IProcessusService {
        private $q;
        private global;
        private PersonnePhysiqueService;
        private toolsService;
        private navigationManager;
        private _listeProcess;
        codeProcessusCourant: string;
        globalePromiseMaj: ng.IPromise<void>;
        static $inject: string[];
        constructor($q: ng.IQService, global: IGlobal, PersonnePhysiqueService: IPersonnePhysiqueService, toolsService: ITools, navigationManager: INavigationManager);
        /**
         * Fermeture des tous les processus en cours pendant la phase d'initialisation de la SPA
         * (précédent commentaire : purger les processus "fantômes" du socle technique
         * @function
         * @return {ng.IPromise<string>}
         */
        closeAllProcess: () => void;
        getListeProcess(): Array<IProcessPortail>;
        majListeProcess(from?: number): ng.IPromise<void>;
        private sortTime(tab);
        private createProcessPortail(p);
        private consolidePersonne(pp, def);
        getListeIdPersonne(): Array<string>;
        getProcessusCourant(): IProcessPortail;
        isCurrentProcessus(p: ProcessPortail): boolean;
        setCurrentProcess(p: ProcessPortail): void;
        setCurrentProcessClient(p: ProcessPortail): void;
        setCurrentProcessFromId(id: string): void;
        getCurrentIdPersonne(): number;
        getCurrentProcessLibelle(): string;
        fermerToutLesProcessus(): void;
        closeOldProcess(): Array<string>;
        fermerProcessusClient(identifiantPersonne: number): void;
        fermerProcessus(id: string): boolean;
        lancerProcessusUrl(url: string): void;
        lancerProcessusCode(code: string, param?: IParamLisa, valeurDepart?: number, idPersonne?: number): ng.IPromise<MyWay.Services.Lisa.LisaCallbackResult>;
        getListeProcessClient(idPersonne: number): Array<IProcessPortail>;
        /**
         * Méthode permettant de recuperer 5 process client
         */
        getListeProcessClientMax(): boolean;
        getListeProcessWithContexteClient(): Array<IProcessPortail>;
        private addNoDoublon(tab, elem);
        getListeProcessWithoutContexteClient(): Array<IProcessPortail>;
    }
}

declare module libContexteClient {
    interface IReferentielProcessusService {
        getListeApplication: () => ng.IPromise<Array<IParamProcess>>;
        getListeTestApplication: (dataClient: IClientData) => Array<IParamProcess>;
    }
    class ReferentielProcessusService implements IReferentielProcessusService {
        private $q;
        private global;
        private urlListeApplication;
        private tools;
        private urlDetailApplication;
        static $inject: string[];
        promiseApplication: ng.IPromise<Array<IParamProcess>>;
        constructor($q: ng.IQService, global: IGlobal, urlListeApplication: string, tools: ITools, urlDetailApplication: string);
        getListeTestApplication(dataClient: IClientData): Array<IParamProcess>;
        getListeApplication(): ng.IPromise<Array<IParamProcess>>;
        private initReferentiel();
        private rechercheApplication();
        private getDetailApplication(code);
    }
}

declare module libContexteClient {
    interface IRelationEconomiqueService {
        selectPersonneRelation: (param: IParamPopupRelationEconomique) => ng.IPromise<IPersonneRelationEconomique>;
    }
    class RelationEconomiqueService implements IRelationEconomiqueService {
        $http: ng.IHttpService;
        $q: ng.IQService;
        tools: ITools;
        static $inject: string[];
        constructor($q: ng.IQService, Tools: ITools, Global: IGlobal);
        selectPersonneRelation(param: IParamPopupRelationEconomique): ng.IPromise<IPersonneRelationEconomique>;
    }
}

declare module libContexteClient {
    interface ITypo {
        listeData: Array<any>;
        tableName: string;
    }
    class Typo implements ITypo {
        listeData: Array<any>;
        tableName: string;
        constructor(liste: Array<any>, name: string);
    }
    interface ITypoService {
        getListe: (nomTypo: string) => ng.IPromise<any>;
    }
    class TypoService implements ITypoService {
        private $q;
        private tools;
        private urlTypo;
        private global;
        static $inject: string[];
        private tabTypo;
        constructor($q: ng.IQService, tools: any, urlTypo: any, global: IGlobal);
        getListe(nomTypo: string): any;
    }
}

declare module libContexteClient {
    interface IDocumentPdf {
        doc: any;
        name: string;
        currentPage: IPagePdf;
        addPage: () => void;
        build: () => void;
        print: () => void;
    }
    class DocumentPdf implements IDocumentPdf {
        doc: any;
        name: string;
        currentPage: IPagePdf;
        constructor(name: string);
        build(): void;
        print(): void;
        addPage(): void;
    }
}

declare module libContexteClient {
    interface IInfoTexte {
        fontSizeRatio: number;
        nrTab: number;
        color: string;
        getRValue: () => number;
        getGValue: () => number;
        getBValue: () => number;
    }
    class InfoTexte implements IInfoTexte {
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
    interface IPagePdf {
        skipLine: (info?: IInfoTexte) => IPositionCursor;
        setLigneTextePied: (texte: string, info?: IInfoTexte) => void;
        addFullLigne: (info?: IInfoTexte) => PositionCursor;
        addTexte: (texte: string, info?: IInfoTexte) => PositionCursor;
        addNewLigneTexte: (texte: string, info?: IInfoTexte) => PositionCursor;
        addImage: (strImage: string, widthImage: number, heightImage: number, wDispo?: number, hDispo?: number) => PositionCursor;
    }
    class PagePdf implements IPagePdf {
        static PAGE_HEIGHT: number;
        static PAGE_WIDTH: number;
        static MARGE: number;
        static RATIO_FONT_MM: number;
        static NB_TAB: number;
        pos: IPositionCursor;
        tabLen: number;
        infoTexte: IInfoTexte;
        currentFontSize: number;
        doc: any;
        constructor(doc: IDocumentPdf);
        addImage(strImage: string, widthImage: number, heightImage: number, wDispo?: number, hDispo?: number): PositionCursor;
        private getDimText(t);
        private prepareInfo(info);
        skipLine(info?: IInfoTexte): IPositionCursor;
        addFullLigne(info?: IInfoTexte): IPositionCursor;
        addTexte(texte: string, info?: IInfoTexte): IPositionCursor;
        addNewLigneTexte(texte: string, info?: IInfoTexte): IPositionCursor;
        setLigneTextePied(texte: string, info?: IInfoTexte): void;
    }
}

declare module libContexteClient {
    interface IPositionCursor {
        x: number;
        y: number;
    }
    class PositionCursor implements IPositionCursor {
        x: number;
        y: number;
        constructor();
    }
}

declare module libContexteClient {
    interface IElementGroup {
        category: string;
        key: string;
        isGroup: boolean;
        widthUnite: number;
        width: number;
        unite: number;
        text: string;
        color: string;
        align: go.Spot;
    }
    class ElementGroup implements IElementGroup {
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
    interface IElementGroupRelation extends IElementGroup {
        group: string;
        typeLayout: go.TreeLayout;
    }
    class ElementGroupRelation extends ElementGroup implements IElementGroupRelation {
        group: string;
        typeLayout: go.TreeLayout;
        constructor(key: string, categorie: string, text: string, color: string);
    }
}

declare module libContexteClient {
    interface IElementLink {
        group: string;
        category: string;
        from: string;
        to: string;
        text: string;
        listeLigne: Array<string>;
        wEnd: number;
        wLabel: number;
        colorLink: string;
    }
    class ElementLink implements IElementLink {
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
    interface IElementNodePersonne {
        key: string;
        text: string;
        category: string;
        categorySave: string;
        categoryReduit: string;
        header: string;
        titre: string;
        titre2: string;
        sousTitre: string;
        icon: string;
        group: string;
        typeCursor: string;
        codePersonnaliteJuridique: number;
        flagSelect: boolean;
        flagLeader: boolean;
        flagActif: boolean;
        flagRelation: boolean;
        identifiantOrganigramme: string;
        identifiantPersonne: number;
        fontColor: go.Brush;
        bkBrush: go.Brush;
        borderBrush: go.Brush;
        colorLeftMark: go.Brush;
        colorIcon: go.Brush;
        fgTitre: go.Brush;
        bkTitre: go.Brush;
        widthMark: number;
        flagHover: boolean;
        formatSIREN: (siren: string) => string;
    }
    class ElementNodePersonne implements IElementNodePersonne {
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
    interface ITemplateGroupMain {
        template: go.Group;
        $: any;
    }
    class TemplateGroupMain implements ITemplateGroupMain {
        template: go.Group;
        $: any;
        constructor(nodeMetric: INodeMetric);
        getGridLayout(nodeMetric: INodeMetric): go.GridLayout;
    }
}

declare module libContexteClient {
    interface ITemplateGroupRelation {
        template: go.Group;
        $: any;
    }
    class TemplateGroupRelation implements ITemplateGroupRelation {
        template: go.Group;
        $: any;
        constructor(nodeMetric: INodeMetric);
        getTreeLayout(nodeMetric: INodeMetric): go.TreeLayout;
    }
}

declare module libContexteClient {
    interface ITemplateLinkEMPTY {
        template: go.Link;
        $: any;
    }
    class TemplateLinkEMPTY implements ITemplateLinkEMPTY {
        template: go.Link;
        $: any;
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libContexteClient {
    interface ITemplateLinkTB {
        template: go.Link;
        $: any;
    }
    class TemplateLinkTB implements ITemplateLinkTB {
        template: go.Link;
        $: any;
        constructor(nodeMetric: INodeMetric);
    }
}

declare module libContexteClient {
    interface ITemplateNodePersonne {
        template: go.Node;
        $: any;
        nodeMetric: INodeMetric;
        tablePanel: go.Panel;
        mainPanel: go.Panel;
    }
    class TemplateNodePersonne implements ITemplateNodePersonne {
        template: go.Node;
        $: any;
        nodeMetric: INodeMetric;
        tablePanel: go.Panel;
        mainPanel: go.Panel;
        constructor(nodeMetric: INodeMetric);
        private onMouseEnter(e, obj, prev);
        private onMouseLeave(e, obj, prev);
        private getRowPanelHeader();
        private getRowPanelBody(textStyle, bindText);
    }
}

declare module libContexteClient {
    interface IPrintParam {
        titrePrincipal: string;
        titreSecondaire: string;
        pied: string;
        mode: number;
        nbCol: number;
        nbRow: number;
    }
    class PrintParam implements IPrintParam {
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
    interface INodeMetric {
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
        init: (idBalise: string) => void;
    }
    class NodeMetric implements INodeMetric {
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
    interface IGraphiqueBoard {
        diagram: go.Diagram;
        currentPart: go.Part;
        nodeMetric: INodeMetric;
        model: go.GraphLinksModel;
        callBackSelect: (data: any) => void;
        $: any;
        addTemplateNode: (key: string, templateNode: ITemplateNodePersonne) => void;
        addLinkTemplate: (templateNode: any, key: string) => void;
        addGroupTemplate: (templateNode: any, key: string) => void;
        printCurrent: (tools: ITools, nomDoc: string, param: IPrintParam) => string;
    }
    class GraphiqueBoard implements IGraphiqueBoard {
        static DEF_WIDTH_NODE: number;
        static DEF_HEIGHT_NODE: number;
        static DEF_HEIGHT_NODE_REDUIT: number;
        static DEF_MARGIN_NODE: number;
        static DEF_WIDTH_BUTTON_EXPAND: number;
        static DEF_HEIGHT_BUTTON_EXPAND: number;
        static DEF_HEIGHT_HEADER: number;
        diagram: go.Diagram;
        currentPart: go.Part;
        nodeMetric: INodeMetric;
        model: go.GraphLinksModel;
        callBackSelect: (data: any) => void;
        callBackDone: (data: any) => void;
        $: any;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        ajustDiagram(): void;
        addTemplateNode(key: string, templateNode: ITemplateNodePersonne): void;
        addLinkTemplate(templateLink: any, key: string): void;
        addGroupTemplate(templateGroup: any, key: string): void;
        printCurrent(tools: ITools, nomDoc: string, param: IPrintParam): string;
        createPDF(nomDoc: string, param: IPrintParam): void;
        private PopupOptionPrint(tools, nomDoc, param);
    }
}

declare module libContexteClient {
    interface IGraphiqueBoardRelation extends IGraphiqueBoard {
        draw: (data: IDataGraphiqueRelationPortail) => void;
        refresh: (data: IDataGraphiqueRelationPortail) => void;
        drawConsolide: (data: IDataGraphiqueRelationPortail, tab: Array<any>, $q: ng.IQService) => void;
        refreshConsolide: (data: IDataGraphiqueRelationPortail, tab: Array<any>, $q: ng.IQService) => void;
        data: IDataGraphiqueRelationPortail;
    }
    class GraphiqueBoardRelation extends GraphiqueBoard implements IGraphiqueBoardRelation {
        data: IDataGraphiqueRelationPortail;
        static CATEGORIE_NODE_PERSONNE_PORTAIL: string;
        static CATEGORIE_LINK_TB: string;
        static CATEGORIE_LINK_EMPTY: string;
        static CATEGORIE_GROUP_MAIN: string;
        static CATEGORIE_GROUP_RELATION: string;
        static COLOR_LEADER: string;
        static COLOR_LINK: string;
        constructor(idBalise: string, callBackSelect: (data: any) => void, callBackDone: (data: any) => void);
        drawConsolide(data: IDataGraphiqueRelationPortail, tab: Array<any>, $q: ng.IQService): void;
        refreshConsolide(data: IDataGraphiqueRelationPortail, tab: Array<any>, $q: ng.IQService): void;
        draw(data: IDataGraphiqueRelationPortail): void;
        refresh(data: IDataGraphiqueRelationPortail): void;
        private refreshLinkOrganisation(data);
        private refreshNodeOrganisation(data);
    }
}
