
declare module MyWay.OsCaiss.Lib {
    var app: any;
    class Manifeste {
        static moduleNom: string;
        static version: string;
        static restRacine: string;
    }
    class DependanceMetier {
    }
}

declare module MyWay.OsCaiss.Constantes {
    class Environnement {
        static DUA: string;
        static VFO: string;
        static UTI: string;
        static QPA: string;
        static PRD: string;
        constructor();
        setEnvironnement(codeEnvironnement: string): void;
        private _codeEnvironnement;
        codeEnvironnement: string;
        enDUA: boolean;
        enVFO: boolean;
        enUTI: boolean;
        maxDUA: boolean;
        maxVFO: boolean;
        maxUTI: boolean;
    }
    var env: Environnement;
    class DependanceSocle {
        /**
         * $rootScope => ng.IRootScopeService
         */
        static serviceAngularRootScope: string;
        /**
         * $scope => ng.IScope
         */
        static serviceAngularScope: string;
        /**
         * $q => ng.IQService
         */
        static serviceAngularQ: string;
        /**
         * $route => ng.route.IRouteservice
         */
        static serviceAngularRoute: string;
        /**
         * $routeParams => ng.route.IRouteParamsService
         */
        static serviceAngularRouteParams: string;
        /**
         * $location => ng.ILocationService
         */
        static serviceAngularLocation: string;
        /**
         * $sce => ng.ISCEService
         */
        static serviceAngularSce: string;
        /**
         * $modalInstance => ng.ui.bootstrap.IModalServiceInstance
         */
        static serviceAngularModalInstance: string;
        /**
         * $timeout => ng.ITimeoutService
         */
        static serviceAngularTimeout: string;
        /**
         * $window => ng.IWindowService
         */
        static serviceAngularWindow: string;
    }
    class DependanceMyway {
        /**
         * Module myway.ui
         */
        static moduleUi: string;
        /**
         * Service NavigationService => MyWay.UI.INavigationService. moduleUi.
         */
        static serviceNavigation: string;
        /**
         * modalService => MyWay.UI.IModalService
         */
        static serviceModal: string;
        /**
         * MwNotificationService => MyWay.UI.MwNotificationService
         */
        static serviceNotification: string;
        /**
         * mwSmoothScrollService => MyWay.UI.IMwSmoothScrollService
         */
        static serviceScroll: string;
        /**
         * MW_EVENTS => MyWay.UI.IMwEvents
         */
        static serviceMwEvents: string;
        /**
         * Module moduleAgent
         */
        static moduleAgent: string;
        /**
         * Attention ! déprécié. serviceAgent => MyWay.Services.ServiceAgent
         */
        static serviceAgent: string;
        /**
         * serviceAgentExtended => MyWay.Services.ServiceAgentExtended
         */
        static serviceAgentExtended: string;
        /**
         * Module myway.composantAide
         */
        static moduleComposantAide: string;
    }
    class TaillePopup {
        static petite: string;
        static moyenne: string;
        static grande: string;
        static largeurPage: string;
    }
    class Icone {
        static arrowDown: string;
        static ban: string;
        static calendar: string;
        static car: string;
        static chevronDown: string;
        static chevronLeft: string;
        static chevronRight: string;
        static chevronUp: string;
        static child: string;
        static circleO: string;
        /**
         * Attention : déprécié !
         */
        static corporation: string;
        static dotCircleO: string;
        static enveloppe: string;
        static eur: string;
        static exclamation: string;
    }
}

declare module MyWay.OsCaiss.MyData {
    class MyChaine {
        valeur: String;
        constructor(chaine: string);
        static toEntier(chaine: string): Number;
        asNumber: Number;
        /**
         * Indique si la chaine est valorisée (not null, not undefined, trim.length > 0)
         * @param valeur Valeur à tester
         */
        static valeurNonVide(valeur: string): boolean;
        /**
         * Indique si la chaine n'est valorisée (null, undefined, trim.length = 0)
         * @param valeur Valeur à tester
         */
        static valeurVide(valeur: string): boolean;
    }
    class MyNombre {
        valeur: Number;
        constructor(aNombre: number);
        asNumber: Number;
        static fromNumber(aNombre: number): MyNombre;
        toLeftPadZero(aTaille: number): string;
    }
    class MyDateHeure {
        static formatDateTiretAAAAMMJJ: string;
        static formatDateTiretAAAAMMJJhhmmss: string;
        static formatDateSlashJJMMAAAA: string;
        static formatDateSlashJJMMAAAAaHHhMM: string;
        static formatDateDivers001: string;
        /**
         * YYYY-MM-DDThh.mm.ss.SSS+-HHmm
         */
        static formatDateDivers002base: string;
        static uniteJour: string;
        static momentJour: string;
        valeur: Date;
        constructor(aDate: Date);
        ajouterJours(nbJours: number): MyDateHeure;
        static fromDate(aDate: Date): MyDateHeure;
        static fromChaine(aDate: string): MyDateHeure;
        static fromChaineTiretAAAAMMJJ(aDate: string): MyDateHeure;
        static fromChaineSlashJJMMAAAA(aDate: string): MyDateHeure;
        static validerDateSlashJJMMAAAA(aDate: string): boolean;
        static fromChaineTiretAAAAMMJJ_HHMMSS(aDate: string, aHeure: string): MyDateHeure;
        static fromChaineDivers001(aDate: string): MyDateHeure;
        onlyDate(): MyDateHeure;
        static aujourdhui: MyDateHeure;
        static maintenant: MyDateHeure;
        asDate: Date;
        static nowDate(): MyDateHeure;
        static now(): MyDateHeure;
        toDate(): Date;
        toOnlyDate(): Date;
        toIsoString(): string;
        static estAujourdhui(aDate: Date): boolean;
        estAujourdhui(): boolean;
        static nbJoursDepuis(aDate: MyDateHeure): Number;
        asChaineTiretAAAAMMJJ: string;
        /**
         * Retourne une chaine de caractères au format 2018-05-18T15:50:44+02:00, mais avec une heure utc, donc non locale.
         */
        asChaineUtcOffset: string;
        /**
         * Retourne une chaine de caractères au format 2018-05-17T00:00:00.000+0200 (17Mai2018Minuit)
         */
        asChaineDivers002: string;
        asChaineDivers001: string;
        toChaineUtcOffset(): string;
        toChaineMoment(aFormat: string): string;
        toChaineSlashJJMMAAAA(): string;
        toChaineSlashJJMMAAAAaHHhMM(): string;
        toChaineTiretAAAAMMJJ(): string;
    }
    class MyPeriode {
        debut: Date;
        fin: Date;
        constructor(debut: Date, fin: Date);
        static toChaineMaj(dateDebut: Date, dateFin: Date): string;
        asDureeExecution: string;
    }
    class MyDate {
    }
    class MyHeure {
    }
}

declare module MyWay.OsCaiss.ObjetLog {
    class ObjetLog {
        protected logger: MyWay.Services.Loggers.ILogger;
        static CLASS_NAME: string;
        static logger: Services.Loggers.ILogger;
        constructor(logger: MyWay.Services.Loggers.ILogger);
        protected error(pMessage: string, ...divers: any[]): void;
        protected warn(pMessage: string, ...divers: any[]): void;
        protected info(pMessage: string, ...divers: any[]): void;
        protected debug(pMessage: string, ...divers: any[]): void;
    }
}

declare module MyWay.OsCaiss.TablesDelocalisees {
    class CodeLibelle {
        code: string;
        libelle: string;
        constructor(code: string, libelle: string);
        codeAsInt: number;
    }
    class TableCodification {
        protected datas: CodeLibelle[];
        constructor();
        protected ajouter(code: string, libelle: string): void;
        getData(code: string): CodeLibelle;
        getLibelle(code: string): string;
        contient(code: string): boolean;
        liste: CodeLibelle[];
    }
    class ListeTablesDelocalisees {
        static refCARTE: string;
        static refX105ETAC: string;
        static refX106FORM: string;
        static refX107RNLT: string;
        static refX108SEUI: string;
        static refX109DOTA: string;
        static refX112FAMI: string;
        static refX113ORIG: string;
        static refX114NRES: string;
        static refX125CROU: string;
        static refX126ACAC: string;
        static refX127RSAC: string;
        static refDU1V: string;
        static refDU2L: string;
        static refCodeSituationFamiliale: string;
        static refCodeRegimeMatrimonial: string;
        static refCodeCivilite: string;
        static refNATURE: string;
        static routageMotifNonRespect: string;
    }
    class TableDelocalisee {
        protected svcAgent: MyWay.Services.ServiceAgentExtended;
        static nomClasse: string;
        data: Array<any>;
        referenceTableDelocalisee: string;
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended, aReference: string);
        charger(aCodeEtablissement5: string): ng.IPromise<any>;
        callbackThen: (data: any) => void;
    }
    class TdCARTE extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
    }
    class CdX105ETAC {
        static COMMANDE: string;
        static DELIVRE_CLIENT: string;
    }
    class TdX105ETAC extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleEtatChequier(aCodeEtat: string): String;
    }
    class TdX106FORM extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleFormatChequier(aCodeFamille: string, aCodeFormat: string): string;
    }
    class TdX107RNLT extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleRenouvellementAuto(aCode: string): string;
    }
    class TdX113ORIG extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleOrigine(aCode: string): string;
    }
    class TdX114NRES extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleMotifRoutageNonrespecte(aCodeMotif: string): string;
    }
    class TdX125CROU extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleModeRoutage(aCodeFamille: string, aCodeFormat: string): string;
        static estEnvoiADomicile(aCode: string): boolean;
    }
    class TdDU1V extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        getLibellePaysNationalite(aCodeInseePaysNationalite: string): string;
    }
    class EltDU2L {
        CVDLHI: string;
        CODLTS: string;
        CODLSC: string;
        LIDLSG: string;
        CODLST: string;
        LIDLSC: string;
        CIDLRN: string;
        CIDLRS: string;
    }
    class TdDU2L extends TableDelocalisee {
        private listeMarche;
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        private initListeMarche();
        getLibelleMarche(aCodeMarche: string): string;
    }
    class TdCodeCivilite extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        static codeMadame: string;
        static codeMademoiselle: string;
        static codeMonsieur: string;
        getLibelle(aCode: string): string;
        static getLibellePascal(aCode: string): string;
        static getLibelleEditique(aCode: string): string;
    }
    class TdCodeRegimeMatrimonial extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        static codeNonConcerne: string;
        static codeCommunauteLegaleAvant1966: string;
        static codeCommunauteReduiteAuxAcquets: string;
        static codeCommunauteUniverselle: string;
        static codeSeparationDeBiens: string;
        static codeRegimeDotalAvant1966: string;
        static codeCommunauteMeublesEtAcquetsApres1966: string;
        static codeParticipationAuxAcquets: string;
        static codeAutresRegimes: string;
        static codeRegimeInconnu: string;
        getLibelle(aCode: string): string;
    }
    class TdCodeSituationFamiliale extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        getLibelle(aCode: string): string;
    }
    class TdNature extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne le libelle long de la nature (LIDYNC). Au cas où il n'est pas renseigné, retourne le libelle court (LIDYNB).
         * @param aCode Code nature du document (CODYNA).
         */
        getLibelle(aCode: string): string;
    }
}

declare module MyWay.OsCaiss.Lib.Rest {
    class RacineRestService {
        static id: string;
        id: string;
        urlServer: string;
        urlService: string;
        url: string;
        protected $q: ng.IQService;
        protected $timeout: ng.ITimeoutService;
        protected svcAgent: MyWay.Services.ServiceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, svcAgent: MyWay.Services.ServiceAgentExtended);
        protected env: OsCaiss.Constantes.Environnement;
        protected debug(message: string, detail?: any): void;
        protected error(message: string, detail?: any): void;
        protected sendMyway(question: Services.IRequestSettings): ng.IPromise<any>;
        getHttpParam(question: any, methode: MyWay.Services.MethodEnum): any;
        getHttpParam2(dataUrl: any, dataBody: any, methode: MyWay.Services.MethodEnum): any;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGet(dataUrl: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPost(dataBody: any): ng.IPromise<any>;
        sendPost2(dataUrl: any, dataBody: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPut(dataBody: any): ng.IPromise<any>;
        sendPut2(dataUrl: any, dataBody: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendDelete(dataBody: any): ng.IPromise<any>;
        estStringValorise(valeur: string): boolean;
        estDateValorisee(valeur: Date): boolean;
    }
}
