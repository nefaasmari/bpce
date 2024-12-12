
declare module PdtEntreprise {
    var app: ng.IModule;
}

declare module PdtEntreprise.Constantes.Cnil {
    const TABLE_DELOC: string;
    const TITRE_SENSIBLE: string;
    const TITRE_INTERDIT: string;
    const INTRO_SENSIBLE: string;
    const INTRO_INTERDIT: string;
}

declare module PdtEntreprise.Constantes.Date {
    /** YYYY-MM-DD */
    const FORMAT_MOMENT: string;
    /** day */
    const JOUR_MOMENT: string;
    /** days */
    const JOURS_MOMENT: string;
}

declare module PdtEntreprise.Constantes.Environnement {
    const ENV_TOKEN: string;
    const DUA: string;
}

declare module PdtEntreprise.Constantes.Inject {
    module Angular {
        const SCOPE: string;
        const LOCATION: string;
        const MODAL_INSTANCE: string;
        const Q: string;
    }
    module Myway {
        const SERVICE_AGENT: string;
        const NOTIFICATION: string;
        const MODAL_SERVICE: string;
        const NAVIGATION_SERVICE: string;
        const TABLE_SERVICE_OPEFI: string;
        const RECHERCHE_EDS_SERVICE: string;
        const PORTAIL_SERVICE: string;
    }
    module Services {
        const CONTEXTE_SERVICE: string;
        const POPUP_SERVICE: string;
        const LISA_SERVICE: string;
        const CNIL_SERVICE: string;
        const DONNEES_DELOCALISEES_SERVICE: string;
        const PDT_HABILITATION_SERVICE: string;
    }
}

declare module PdtEntreprise.Filter {
    function booleanTextFilter(): Function;
}

declare module PdtEntreprise.Filter {
    function mwCurrencyFilter($filter: ng.IFilterService): Function;
}

declare module PdtEntreprise.Filter {
    function mwMajFirstFilter(): Function;
}

declare module PdtEntreprise.Comparator {
    class BooleanTextComparator implements MyWay.UI.IMwTableComparator {
        private $filter;
        private $parse;
        constructor($filter: ng.IFilterService, $parse: ng.IParseService);
        comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean;
    }
}

declare module PdtEntreprise.Comparator {
    class DateComparator implements MyWay.UI.IMwTableComparator {
        private $filter;
        private $parse;
        constructor($filter: ng.IFilterService, $parse: ng.IParseService);
        comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean;
    }
}

declare module PdtEntreprise.FormValidator {
    function formIsAfter(): ng.IDirective;
}

declare module PdtEntreprise.FormValidator {
    function formIsBefore(): ng.IDirective;
}

declare module PdtEntreprise.LoggerDecorator {
    function MyWayClassLogger(logger: MyWay.Services.Loggers.ILogger, activateConsole?: boolean): Function;
}

declare module PdtEntreprise.LoggerDecorator {
    function getMonkeyPatchMethod(method: Function, methodName: string, logger: MyWay.Services.Loggers.ILogger, activateConsole: boolean): Function;
    function DisableMethodLogger(): Function;
}

declare module PdtEntreprise.LoggerDecorator {
    function logMessage(isStart: boolean, targetInstance: any, functionName: string, originalFunction: Function, functionArgsVals: any[], logger: MyWay.Services.Loggers.ILogger, activateConsole: boolean, result?: any): void;
}

declare module PdtEntreprise.Modele {
    class RetourCnil {
        isValide: boolean;
        listeInterdit: Array<string>;
        listeSensible: Array<string>;
        constructor();
    }
    interface ICnilDelocDetail {
        CIDETB: string;
        /**
         * Type mot
         */
        CIDEAL: string;
        CIDETP: string;
        /**
         * Etablissement
         */
        COCXBQ: string;
        /**
         * Mot
         */
        CODEMS: string;
    }
}

declare module PdtEntreprise.Services {
    interface ICnilService {
        /**
         * Vérification cnil du texte en paramètre
         * par défaut ouverture de la popup pour afficher le resultat
         * @param contenu
         */
        ouvrirPopinCnil(contenu: string, affichagePopup?: boolean): ng.IPromise<Modele.RetourCnil>;
    }
    /**
     * Service permettant de gerer la mise en place de la cnil sur les zones de saisie
     */
    class CnilService implements ICnilService {
        private $q;
        private popupService;
        private contexteService;
        private donneesDelocService;
        listeMotsInterditsOuNonInterdits: Array<string>;
        titrePopin: string;
        introductionPopin: string;
        popinCnil: Object;
        iconPopin: string;
        listeInterdits: Array<string>;
        listeSensibles: Array<string>;
        contenuOk: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, popupService: IPopupService, contexteService: IContexteService, donneesDelocService: IDonneesDelocaliseesService);
        chaineSansAccent(contenu: string): string;
        preparerContenu(contenu: string): string;
        /**
         * Recherche les mots interdits (bloquants) ou sensibles trouvés dans le texte passé en paramètre
         * @param {string} contenu est le texte à analyser
         */
        rechercherMotsInterditsOuSensible(contenu: string): ng.IPromise<Modele.RetourCnil>;
        verifierContenu(contenu: string): ng.IPromise<Modele.RetourCnil>;
        construirePopinCnil(retourCnil: Modele.RetourCnil): any;
        ouvrirPopinCnil(contenu: string, affichagePopup?: boolean): ng.IPromise<Modele.RetourCnil>;
    }
}

declare module PdtEntreprise.Services {
    interface IContexteService {
        /**
         * Appelé avant le resolve d'une page.
         * Charge les données d'authenfication, les données délocalisées indispensables, puis crée le totem de navigation
         */
        initialiserApplication(): ng.IPromise<void>;
        getAuthInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        /**
         * addtoContext avec un cast pour ne pas utiliser MyWay.Promesse
         * @param key
         * @param value
         */
        addToContext(key: string, value: string): ng.IPromise<void>;
        /**
         * getFromContext avec un cast pour ne pas utiliser MyWay.Promesse
         * @param key
         * @param value
         */
        getFromContext(key: string): ng.IPromise<string>;
    }
}

declare module PdtEntreprise.Services {
    interface IDonneesDeloc<T extends IObjetDeloc> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
    interface IObjetDeloc {
    }
    class DonneesDelocaliseesService implements IDonneesDelocaliseesService {
        private serviceAgentExtended;
        private $q;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        private listeTable;
        private listeHeavyTable;
        private codeEtablissement;
        private _isChargementTable;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        chargerDonneesDeloc(codeEtablissement: string, tables: string[], heavyTables: string[]): ng.IPromise<void>;
        chargerListeTables(codeEtablissement: string, listeNomTable: Array<string>, slow?: boolean): ng.IPromise<void>;
        getTable<T>(nomTable: string): Array<T>;
        getTableLourde<T>(nomTable: string): ng.IPromise<Array<T>>;
        chargerTable<T>(nomTable: string): ng.IPromise<Array<T>>;
        isChargementTable(): boolean;
    }
    interface IDonneesDelocaliseesService {
        getTable<T>(nomTable: string): Array<T>;
        getTableLourde<T>(nomTable: string): ng.IPromise<Array<T>>;
        chargerDonneesDeloc(codeEtablissement: string, tables: string[], heavyTables: string[]): ng.IPromise<void>;
        isChargementTable(): boolean;
    }
}

declare module PdtEntreprise.Services {
    interface IHabilitation {
        code: string;
        habilitation: boolean;
    }
    interface IPdtHabilitationService {
        chargerHabilitation(listeCodeHabilitation: Array<string>): ng.IPromise<Array<IHabilitation>>;
        getHabilitation(code: string): boolean;
    }
}

declare module PdtEntreprise.Services {
    interface IAjoutContexte {
        [key: string]: string;
    }
    class LisaService implements ILisaService {
        private serviceAgentExtended;
        private $location;
        private $q;
        private contexteService;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, $q: ng.IQService, contexteService: IContexteService);
        next(valeurSortie: number, urlLocal: string, parametresContexte?: IAjoutContexte): ng.IPromise<void>;
        ajouterDonneesContexte(parametresContexte: IAjoutContexte): ng.IPromise<void>;
    }
    /**
     * Service Lisa
     */
    interface ILisaService {
        /**
         * Appelle la prochaine étape (code sortie : valeurSortie
         * urlLocal est appelé si travail en local ou en DUA sans utiliser le code processus
         */
        next(valeurSortie: number, urlLocal: string, parametresContexte?: IAjoutContexte): ng.IPromise<void>;
    }
}

declare module PdtEntreprise.Services {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupService {
        /**
         * Permet d'ouvrir une popup simple d'informations
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
        /**
         * Ouverture d'une popup demandant la confirmation d'une action
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * @param {validerTexte} Texte du bouton de validation
         * @param {closeTexte} Texte du bouton de fermeture
         */
        showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: any, backdrop?: string): ng.IPromise<any>;
    }
}

declare module PdtEntreprise.Directive {
    class MwPercentDisplayCtrl {
        private serviceAgentExtended;
        private $scope;
        private static CLASS_NAME;
        private static logger;
        private percent;
        private height;
        private radius;
        /** Coord du centre des cercle */
        private centerCoord;
        private total;
        private dashOffsetAttribute;
        private elementHtml;
        private fontSizePercent;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope);
        setHeight(): void;
        updatePercent(element?: ng.IAugmentedJQuery): void;
        /**
         * Si nombre entier entre 0 et 99 -> font size 30%
         * Si 100 ou nombre > 9 avec une décimal  -> font size 25%
         * Si nombre avec 2 décimales -> font size 20%
         */
        getFontSize(): number;
        private calculateRadius;
        /** Calcul de la circonférence */
        private circumference;
        private center;
        countDecimal(num: number): number;
        /**
         * arrondi
         * @param num
         * @param digits
         */
        roundTo(num: number, digits: number): number;
    }
}

declare module PdtEntreprise.Directive {
    /** affiche un pourcentage avec un cercle réprésentant graphiquement la valeur
     * placer dans une div avec une classe ayant width = height
     * prendre une hauteur min de 50px pour fonctionner correctement
     */
    function mwPercentDisplay(): ng.IDirective;
}

declare module PdtEntreprise.Directive {
    class ModalCnilControleur {
        private $q;
        private $modalInstance;
        private data;
        static $inject: string[];
        modalDatas: any;
        constructor($q: ng.IQService, $modalInstance: any, data: any);
        valider(): void;
        annuler(): void;
    }
}

declare module PdtEntreprise.LoggerDecorator {
    interface ILogFunction {
        (message: string): void;
    }
}
