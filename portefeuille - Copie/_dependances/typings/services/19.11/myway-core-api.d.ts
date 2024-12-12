
declare module myway.core {
    abstract class ServiceNames {
        static Logger: string;
        static Loader: string;
        static Erreur: string;
        static Csv: string;
        static Agent: string;
        static Common: string;
        static ContexteClient: string;
        static Contexte: string;
        static Display: string;
        static Habilitation: string;
        static Lisa: string;
        static Mail: string;
        static Mobilite: string;
        static Processus: string;
        static Trace: string;
    }
    abstract class ProviderNames {
        static Logger: string;
    }
    var app: ng.IModule;
}

declare module myway.core {
    abstract class ContextKeys {
        /**
         * Indicateur de présence du portail myway (si la valeur vaut 1)
         */
        static PORTAIL_MYWAY: string;
        /**
         * Type de portail.
         * Valeurs possibles:
         * - MYWAY
         */
        static TYPE_PORTAIL: string;
    }
    const enum TypePortailEnum {
        MYWAY = 1,
        PCM = 2,
    }
    interface IInfosCaisses {
        sigle: string;
    }
    abstract class ConstantesSiglesCaisses {
        static TOKEN: string;
        static SIGLES_CAISSES: {
            [codeEtablissement: string]: IInfosCaisses;
        };
    }
}

declare module myway.core {
    /**
     * Configuration du fichier CSV (utilisé par le service mwCsvService).
     */
    interface ICsvOptions {
        /**
         * Use this characters to "escape" fields, otherwise will use double quotes as deafult
         */
        txtDelimiter?: string;
        /**
         * Defines the decimal separator character (default is ,). If set to "locale", it uses the language sensitive representation of the number.
         */
        decimalSeparator?: string;
        /**
         * Will force escaping of every string field. (it should always true)
         */
        quoteStrings?: boolean;
        /**
         * Add the Byte Order Mark, use this option if you are getting an unexpected char when opening the file on any windows App (default is true).
         */
        addByteOrderMarker?: boolean;
        /**
         * Defines the field separator character (default is ;)
         */
        fieldSeparator?: any;
        /**
         * charset encoding
         */
        charset?: string;
        /**
         * output filename (default is export.csv)
         */
        filename?: string;
        /**
         * Defines whether or not using keys as csv column value (default is false).
         */
        label?: boolean;
        /**
         * If provided, would use this attribute to create a header row. This property should be used along with columnOrder because natural order can eventually change.
         */
        header?: string[];
        /**
         * Defines the column order to be set when creating the body of the CSV (may be according to the csv-headers).
         * It can also be used to filter properties in csv.
         */
        columnOrder?: any;
    }
}

declare module myway.core {
    /**
     * Service de génération d'un fichier CSV à partir d'un tableau
     */
    class CsvService {
        private $q;
        private $parse;
        private $window;
        private $document;
        private $timeout;
        static EOL: string;
        static BOM: string;
        static SPECIAL_CHARS: {
            [index: string]: string;
        };
        static DEFAULT_OPTIONS: ICsvOptions;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $window: ng.IWindowService, $document: ng.IDocumentService, $timeout: ng.ITimeoutService);
        /**
         * Création et téléchargement d'un fichier csv à partir du tableau passé en paramètre.
         * Le tableau doit être un objet simple sans sous-objets puisque ces derniers ne sont pas gérés.
         * Les options sont toutes détaillées dans l'interface dédiée.
         *
         * #Configuration
         * La configuration fonctionne par surcharge, il faut donc indiquer ce qui diffère de la configuration par défaut.
         * <pre class="prettyprint">
         *   header: [ "Nom", "Prénom", "Age" ],
         *   columnOrder: ["nom", "prenom", "age" ],
         *   filename: "personnes.csv"
         * </pre>
         *
         * ##Configuration par défaut du fichier csv:
         * <pre class="prettyprint">
         *   txtDelimiter: "\"",
         *   decimalSeparator: ",",
         *   quoteStrings: true,
         *   addByteOrderMarker: true,
         *   fieldSeparator: ";",
         *   charset: "utf-8",
         *   label: false,
         *   filename: "export.csv"
         * </pre>
         * @param data Tableau de données
         * @param options Configuration du fichier csv
         * @returns Promesse résolue lorsque le téléchargement est lancé ou rejetée en cas d'erreur.
         */
        downloadCsv(data: any[], options?: ICsvOptions): ng.IPromise<any>;
        /**
         * Get options
         */
        private getOptions(options?);
        /**
         * Creates a csv from a data array
         */
        private stringify(data, options?);
        /**
         * Helper function to check if input is really a special character
         */
        isSpecialChar(input: string): boolean;
        /**
         * Helper function to get what the special character was supposed to be since Angular escapes the first backslash
         */
        getSpecialChar(input: string): string;
        /**
         * Stringify one field
         */
        private stringifyField(data, options);
    }
}

declare module myway.core {
    /**
     * Cette classe permet de créer une énumération avec des méthodes à l'image des énums en java.
     * De plus, on peut associer à chaque valeur un libellé qui pourra par exemple être utilisé dans une vue.
     *
     * Voici un exemple d'implémentation:
     * <code>
     * export class EtatLieuOccupationEnum extends MyWay.Services.LabelValueEnum<string> {
     *   public static EN_COURS = new EtatLieuOccupationEnum("En cours", "EN_COURS");
     *   public static A_VENIR = new EtatLieuOccupationEnum("A venir", "A_VENIR");
     *   public static TERMINE = new EtatLieuOccupationEnum("Terminé", "TERMINE");
     * }
     *
     * var etat: EtatLieuOccupationEnum = EtatLieuOccupationEnum.EN_COURS;
     * console.log("etat", etat.value, etat.label);
     * </code>
     *
     * Le 1er argument du constructeur correspond au label et le 2nd à la valeur.
     * Les méthodes statiques renverront des types any au lieu du type générique. C'est à cause d'une limitation de typescript !
     */
    class LabelValueEnum<U> {
        label: string;
        value: U;
        constructor(label: string, value: U);
        /**
         * Renvoie la valeur de l'objet.
         */
        toString(): string;
        /**
         * Renvoie toutes les valeurs de l'énumération.
         */
        static values<T extends LabelValueEnum<any>>(): any[];
        /**
         * Renvoie les valeurs d'une liste énumérée.
         * @param items Liste énumérée (chaque élément doit être une instance héritée de LabelValueEnum).
         */
        static valuesFromList<T extends LabelValueEnum<any>>(items: T[]): any[];
        /**
         * Renvoie un élément de l'énumération à partir d'une valeur donnée.
         * @param value Valeur à chercher.
         * @returns Element de l'énumération correspondant à la valeur (instance héritée de LabelValueEnum).
         */
        static fromValue<T extends LabelValueEnum<any>>(value: any): T;
        /**
         * Renvoie une liste énumérée. Il est possible d'effectuer une transformation via une fonction.
         * @param transform Fonction de transformation.
         */
        static list<T extends LabelValueEnum<any>>(transform?: (item: T) => any): any[];
    }
}

declare module myway.core {
    /**
     * Cette classe permet de créer une énumération de string, avec des méthodes à l'image des énums en java. L'unique attrait de cette classe
     * est la possibilité d'utiliser ou d'ajouter des méthodes.
     *
     * Voici un exemple d'implémentation:
     * <code>
     * class TypeDocumentEnum extends MyWay.Services.StringEnum {
     *    public static JUSTIFICATIF_IDENTITE = new TypeDocumentEnum("JUSTIFICATIF_IDENTITE", "ID");
     *    public static JUSTIFICATIF_IDENTITE_MINEUR = new TypeDocumentEnum("JUSTIFICATIF_IDENTITE_MINEUR", "IDMI");
     *    public static JUSTIFICATIF_DOMICILE = new TypeDocumentEnum("JUSTIFICATIF_DOMICILE", "JD");
     *    public static JUSTIFICATIF_REVENU = new TypeDocumentEnum("JUSTIFICATIF_REVENU", "JR");
     * }
     * var type: TypeDocumentEnum = TypeDocumentEnum.JUSTIFICATIF_IDENTITE;
     * console.log("type", type.value);
     * </code>
     *
     * Le 1er argument du constructeur correspond à la clé de l'énumération. Il sert uniquement en phase de debug parce que la valeur n'est pas forcément parlante.
     *
     * Si Typescript n'autorise pas les énum de type string, il est possible de tromper le compilateur par un cast <any> des valeurs string.
     * Etant donné la nature des énumérations Typescript, on ne peut pas utiliser de méthode associée.
     * <code>
     * enum TypeDocumentEnum {
     *    JUSTIFICATIF_IDENTITE = <any> "ID",
     *    JUSTIFICATIF_IDENTITE_MINEUR = <any> "IDMI",
     *    JUSTIFICATIF_DOMICILE = <any> "JD",
     *    JUSTIFICATIF_REVENU = <any> "JR"
     * }
     * var type: TypeDocumentEnum = TypeDocumentEnum.JUSTIFICATIF_IDENTITE;
     * console.log("type", type);
     * </code>*
     *
     *
     *
     */
    class StringEnum {
        key: string;
        value: string;
        constructor(key: string, value: string);
        /**
         * Renvoie la valeur de l'objet.
         */
        toString(): string;
        /**
         * Renvoie toutes les valeurs de l'énumération.
         */
        static values<T extends StringEnum>(): string[];
        /**
         * Renvoie les valeurs d'une liste énumérée.
         * @param items Liste énumérée (chaque élément doit être une instance héritée de StringEnum).
         */
        static valuesFromList<T extends StringEnum>(items: T[]): string[];
        /**
         * Renvoie un élément de l'énumération à partir d'une valeur donnée.
         * @param value Valeur à chercher.
         * @returns Element de l'énumération correspondant à la valeur (instance héritée de StringEnum).
         */
        static fromValue<T extends StringEnum>(value: string): T;
        /**
         * Renvoie une liste énumérée. Il est possible d'effectuer une transformation via une fonction.
         * @param transform Fonction de transformation.
         */
        static list<T extends StringEnum>(transform?: (item: T) => any): any[];
    }
}

declare module myway.core {
    interface IInfosMobilite {
        /**
         * Type de réseau
         */
        typeReseau: fwkTech.Services.Mobilite.TYPE_RESEAU;
        /**
         * Ecran compatible myway
         */
        ecranCompatibleMyway: boolean;
        /**
         * Informations sur le device de l'utilisteur
         */
        infoMachine: fwkTech.Services.Mobilite.IInfoMachine;
        /**
         * Plateforme du device
         */
        plateforme?: IPlateforme;
        /**
         * Liste des plateformes supportées
         */
        plateformes: IPlateforme[];
    }
}

declare module myway.core {
    class ModaleErreurControleur {
        $modale: ng.ui.bootstrap.IModalServiceInstance;
        infos: IErreurModale;
        static $inject: string[];
        constructor($modale: ng.ui.bootstrap.IModalServiceInstance, infos: IErreurModale);
        fermer(): void;
    }
}

declare module myway.core {
    const enum ErreurCodeEnum {
        ERREUR_TECHNIQUE = 0,
        PAS_DE_GUICHET_DANS_PREFERENCE_UTILISATEUR = 1,
        DONNEES_AUTHENTIFICATION_INCOMPLETES = 2,
        AUCUN_POSTE_FONCTIONNEL = 3,
        PLUSIEURS_POSTES_FONCTIONNELS = 4,
        PAS_DE_CLIENT = 5,
        CONTEXTE_CLIENT_VIDE_OU_ILLISIBLE = 6,
    }
    class ErreurMyway {
        message: string;
        details: any;
        /**
         * Code d'erreur optionnel
         */
        code: ErreurCodeEnum;
        constructor(message: string);
        constructor(message: string, code: ErreurCodeEnum);
        constructor(message: string, details: string | Object);
        constructor(message: string, details: string | Object, code: ErreurCodeEnum);
    }
    interface IErreurModale {
        title?: string;
        bodyText?: string;
        erreur?: any;
        bouton?: IErreurBoutonModale;
        icone?: string;
        size?: string;
        /**
         * Ferme le navigateur sur le bouton fermer de la modale.
         */
        exitOnClose?: boolean;
        /**
         * Masque le bouton dans la modale.
         */
        hideButton?: boolean;
    }
    interface IErreurBoutonModale {
        text?: string;
        onClose?: () => ng.IPromise<any>;
    }
}

declare namespace myway.core {
    /**
     * Service de gestion d'erreur.
     * Le but de ce service est de fournir une interface d'erreur généralisée dont le but est de distinguer le message d'erreur présenté à l'utilisateur avec la stack technique.
     * L'utilisateur ne doit pas voir la stack technique par défaut, mais un message d'erreur compréhensible qui décrit globalement la nature du problème.
     * La stack technique est utile à des fins d'assistance, elle est accessible via un bouton détail.
     * Certaines erreurs sont bloquantes et d'autres non, ceci n'est pas toujours bien consistant dans ce service.
     * L'un des objectifs du service est de savoir parser les objets d'erreur les plus connus pour en extraire les informations à afficher.
     * Enfin, la modale d'erreur affichée permet également d'y ajouter un bouton d'action configurable.
     *
     * TODO: ce service est une version brouillonne qui gagnerait à être totalement refactoré. A utiliser en l'état avec précaution!
     * L'ensemble des fonctionnalités n'est pas toujours accessible selon la méthode utilisée.
     * Il faudrait disposer d'une méthode permettant de pouvoir tout faire via une configuration par interface
     * puis de créer un ensemble de méthodes pré-configurées pour les cas les plus fréquents.
     */
    class ErreurService {
        private $q;
        private $window;
        private modalService;
        private loaderService;
        static $inject: string[];
        constructor($q: ng.IQService, $window: ng.IWindowService, modalService: MyWay.UI.IModalService, loaderService: myway.core.loader.LoaderService);
        /**
         * Affiche une modale d'erreur.
         * L'erreur est analysée pour afficher le message le plus pertinent.
         * Présence d'un bouton rafraichir en option et actif par défaut.
         */
        afficherErreur(erreur: any, refreshButton?: boolean): void;
        /**
         * Affiche une modale d'erreur avec un bouton qui permet de rafraichir la page
         */
        afficherModaleErreurWithRefreshButton(infos: IErreurModale): void;
        /**
         * Affiche une modale d'erreur
         */
        afficherModaleErreur(infos: IErreurModale): void;
        /**
         * Affiche une modale d'erreur
         */
        afficherModaleErreurNonBloquante(infos: IErreurModale): ng.IPromise<void>;
        /**
         * Affiche une modale d'information
         */
        afficherModaleInformation(infos: IErreurModale): ng.IPromise<void>;
        /**
         * Renvoie une structure contenant les détails de l'erreur.
         */
        getInfosErreur(erreur: any): IErreurModale;
        private decodeServiceErreur(infos, erreur);
        private decodeErreurPortail(infos, erreur);
    }
}

declare namespace myway.core.ui.infiniteScroll {
    /**
     * Mise en forme et simplification du composant : https://github.com/sroze/ngInfiniteScroll
     */
    class InfiniteScrollControleur {
        private $scope;
        private $rootScope;
        private $window;
        private $interval;
        private $element;
        private $attrs;
        infiniteScrollThrottleMilliseconds: number;
        infiniteScroll: () => void;
        infiniteScrollDistance: string;
        infiniteScrollDisabled: boolean;
        infiniteScrollContainer: HTMLElement | ng.IAugmentedJQuery | string;
        infiniteScrollUseDocumentBottom: boolean;
        private windowElement;
        private scrollDistance;
        private scrollEnabled;
        private checkWhenEnabled;
        private container;
        private immediateCheck;
        private useDocumentBottom;
        private checkInterval;
        private handler;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $window: ng.IWindowService, $interval: ng.IIntervalService, $element: ng.IAugmentedJQuery, $attrs: IAttributes);
        private height(element);
        private pageYOffset(element);
        private offsetTop(element);
        private defaultHandler;
        private handleDestroy();
        private handleInfiniteScrollDistance;
        private handleInfiniteScrollDisabled;
        private handleInfiniteScrollUseDocumentBottom;
        private changeContainer(newContainer);
        private handleInfiniteScrollContainer;
        private intervalCheck;
        private init();
    }
}

declare module myway.core.ui.infiniteScroll {
    interface IAttributes extends ng.IAttributes {
        infiniteScrollParent: string;
        infiniteScrollImmediateCheck: string;
    }
}

declare namespace myway.core.loader {
    class LoaderService {
        private $q;
        private $templateCache;
        private $interpolate;
        private $document;
        private $timeout;
        /**
         * Délai minimum d'affichage du loader (millisecondes)
         */
        minDelay: number;
        private BACKGROUND_ZINDEX;
        private POSITION;
        private SPINNER_HEIGHT;
        private PROGRESS_HEIGHT;
        private SPINNER_WIDTH;
        private TEXT_WIDTH;
        private BACKGROUND;
        private backgroundElement;
        private backgroundStack;
        private startLoaderPromise;
        private loaderElement;
        private progressPromise;
        private nextStepPromise;
        private progressElement;
        private progressBarElement;
        private progressStepElement;
        private progressSettings;
        static $inject: string[];
        constructor($q: ng.IQService, $templateCache: ng.ITemplateCacheService, $interpolate: ng.IInterpolateService, $document: ng.IDocumentService, $timeout: ng.ITimeoutService);
        /**
         * Active le loader et affiche un spinner.
         * @param settings Configuration optionnelle du loader
         */
        start(settings?: ILoaderStartSettings): void;
        /**
         * Désactive le loader.
         */
        stop(settings?: ILoaderStopSettings): void;
        /**
         * Affiche une barre de progression.
         * @param settings Configuration optionnelle de la barre de progression
         */
        startProgress(settings?: IProgressSettings): void;
        /**
         * Relance la barre de progression qui a été démarrée puis arrêtée. Elle sera relancée à l'étape indiquée (1 par défaut).
         */
        restartProgress(step?: number): void;
        /**
         * Supprime la barre de progression.
         */
        stopProgress(): void;
        /**
         * Se positionne sur l'étape suivante dans la barre de progression.
         * Après la dernière étape, la barre affiche une progression complète et la méthode stop est appelée.
         */
        goToNextProgressStep(): void;
        /**
         * Ajoute un loader au centre de l'écran.
         */
        private addLoader(rootElement, text);
        private getSpinnerElement();
        private getTextElement(text);
        private removeLoader();
        private addBackground(rootElement);
        private removeBackground();
        private getBackgroundElement();
        /**
         * Ajoute un conteneur de progression au centre de l'écran.
         */
        private addProgress(rootElement);
        private removeProgress();
        private getProgressContainerElement();
        private getSimpleRowElement(title);
        private getProgressBarElement();
        private getProgressStepElement();
        private getRootElement(rootElementId);
    }
}

declare module myway.core.loader {
    interface ILoaderStartSettings {
        /**
         * Indicateur de présence d'un background pour bloquer l'IHM (true par défaut)
         */
        background?: boolean;
        /**
         * Id de l'élément où le loader sera rattaché
         */
        rootElementId?: string;
        /**
         * Texte qui apparait sous le spinner
         */
        text?: string;
        /**
         * Source à l'origine de la demande (à titre purement indicatif)
         */
        source?: string;
    }
    interface ILoaderStopSettings {
        /**
         * Source à l'origine de la demande (à titre purement indicatif)
         */
        source?: string;
    }
    const loaderDefaultSettings: ILoaderStartSettings;
    interface IProgressSettings {
        /**
         * Indicateur de présence d'un background pour bloquer l'IHM (true par défaut)
         */
        background?: boolean;
        /**
         * Id de l'élément où le loader sera rattaché
         */
        rootElementId?: string;
        /**
         * Marges horizontales (exemple: 5rem)
         */
        horizontalMargins?: string;
        /**
         * Titre (nom de l'application ou du processus)
         */
        title?: string;
        /**
         * Texte qui apparait sous le titre
         */
        text?: string;
        /**
         * Timeout d'arrêt de la barre de progression en millisecondes (permet de voir la barre complète). 400 par défaut.
         */
        stopTimeout?: number;
        /**
         * Configuration des étapes
         */
        steps?: IProgressStepSettings;
    }
    interface IProgressStepSettings {
        /**
         * Nombre d'étapes
         */
        stepCount?: number;
        /**
         * Poids de chaque étape (la somme doit être 100).
         * Par défaut, il est uniforme et correspond à la formule: 100 / stepCount.
         */
        stepWeights?: number[];
        /**
         * Etape actuelle (interne au service)
         */
        currentStep?: number;
        /**
         * Timeout minimum de changement d'étape en millisecondes (permet de marquer l'affichage entre 2 étapes rapides). 200 par défaut.
         */
        stepTimeout?: number;
        /**
         * Timestamp du dernier changement d'étape (interne au service)
         */
        lastStepTime?: number;
    }
    const progressDefaultSettings: IProgressSettings;
}

declare namespace myway.core {
    const enum LoggerLevel {
        NONE = -1,
        ERROR = 0,
        WARNING = 1,
        INFO = 2,
        TRACE = 3,
        ALL = 10,
    }
    /**
     * Service lié aux loggers
     */
    class LoggerService {
        private traceService;
        protected logLevel: LoggerLevel;
        protected bufferCapacity: number;
        protected consolePrefix: string;
        protected frameworkAppender: boolean;
        protected consoleAppender: boolean;
        private buffer;
        constructor(traceService: TraceService, logLevel: LoggerLevel, bufferCapacity: number, consolePrefix: string, frameworkAppender: boolean, consoleAppender: boolean);
        /**
         * Définit le niveau du logger
         */
        setLoggerLevel(level: LoggerLevel): void;
        getLoggerLevel(): LoggerLevel;
        /**
         * Définit l'activation des traces du framework
         */
        setAppenderFramework(frameworkAppender: boolean): void;
        /**
         * Définit l'activation des traces de la console
         */
        setAppenderConsole(consoleAppender: boolean): void;
        trace(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        /**
         * Vide le buffer dans la console.
         */
        flush(): void;
        private log(func, funcFwk, flushMode, level, message, args?);
        private handleBuffer(func, flushMode, level, message, args?);
    }
    class LoggerServiceProvider implements ng.IServiceProvider {
        private level;
        private bufferCapacity;
        private consolePrefix;
        /**
         * Active les traces du framework
         */
        private frameworkAppender;
        /**
         * Active la console du navigateur
         */
        private consoleAppender;
        constructor();
        $get(traceService: TraceService): LoggerService;
        /**
         * Définit le niveau du logger
         */
        setLoggerLevel(level: LoggerLevel): void;
        /**
         * Préfixe du message dans la console, ce qui permet de les regrouper par un filtre.
         */
        setConsolePrefix(consolePrefix: string): void;
        /**
         * Capacité du buffer (en nombre de lignes).
         * Toute instruction console correspond à une entrée dans le buffer.
         * Le buffer fonctionne comme une file.
         *
         * Ce buffer peut ensuite être utilisé pour restituer la console à tout moment
         * puisqu'elle est désactivée par défaut sur IE tant que le debugger tools est fermé
         */
        setBufferCapacity(buffer: number): void;
        /**
         * Définit l'activation des traces du framework
         */
        setAppenderFramework(frameworkAppender: boolean): void;
        /**
         * Définit l'activation des traces de la console
         */
        setAppenderConsole(consoleAppender: boolean): void;
    }
}

declare module myway.core {
    abstract class ArrayUtils {
        /**
         * Renvoie un arbre à partir d'une liste.
         * @param items Liste d'éléments
         * @param idFunction Fonction pour récupérer la propriété id d'un élément
         * @param parentFunction Fonction pour récupérer la propriété id parent d'un élément
         * @param setChildrenFunction Fonction (setter) pour définir la liste d'enfants d'un élément
         */
        static getTree<T>(items: T[], idFunction: (item: T) => any, parentFunction: (item: T) => any, setChildrenFunction: (item: T, children: T[]) => void): T[];
        /**
         * Inverse 2 éléments dans un tableau.
         */
        static swapItems<T>(array: T[], index1: number, index2: number): void;
        /**
         * Creates an array of array values not included in the other given array
         * using iteratee which is invoked for each element of array and values to generate the criterion by which they're compared.
         * The order and references of result values are determined by the first array.
         */
        static differenceBy<T>(array: T[], otherArray: T[], iteratee: (item: T) => any): T[];
        /**
         * Creates an array of array values not included in the other given array
         * using comparator which is invoked to compare elements of array to values.
         * The order and references of result values are determined by the first array.
         */
        static differenceWith<T>(array: T[], otherArray: T[], comparator: (item1: T, item2: T) => boolean): T[];
    }
}

declare module myway.core {
    abstract class ClientUtils {
        /**
         * Renvoie la désignation du client à partir de ses informations.
         * @param civilite Civilité ou code civilité
         * @param nomUsage Nom d'usage (marital)
         * @param nomPatronymique nom patronymique (de famille)
         * @param prenom Prénom
         */
        static getDesignation(civilite: string, nomUsage: string, nomPatronymique: string, prenom: string): string;
        /**
         * Renvoie la désignation courte du client à partir de ses informations.
         * @param nomUsage Nom d'usage (marital)
         * @param nomPatronymique nom patronymique (de famille)
         * @param prenom Prénom
         */
        static getDesignationCourte(nomUsage: string, nomPatronymique: string, prenom: string): string;
    }
}

declare module myway.core {
    abstract class CommonRegExp {
        static URL: RegExp;
    }
}

declare module myway.core {
    abstract class EdsUtils {
        /**
         * Renvoie un identifiant personne (NODAPE) formaté sur 9 caractères
         */
        static getIdentifiantPersonne(id: string | number): string;
        /**
         * Renvoie un identifiant entité titulaire (NODIET) formaté sur 10 caractères
         */
        static getIdentifiantEntiteTitulaire(id: string | number): string;
        /**
         * Renvoie un identifiant professionnel formaté sur 2 caractères
         */
        static getIdentifiantProfessionnel(id: string | number): string;
        /**
         * Renvoie un identifiant EDS formaté sur 7 caractères
         */
        static getIdentifiantEDS(id: number | string): string;
        /**
         * Renvoie true si l'identifiant de l'EDS est valide (7 caractères)
         */
        static isValidIdentifiantEDS(id: string): boolean;
        /**
         * Renvoie un type EDS formaté sur 3 caractères
         */
        static getTypeEDS(type: number | string): string;
    }
}

declare module myway.core {
    abstract class FrameworkUtils {
        /**
         * Renvoie le libellé du type de réseau à partir d'un code.
         */
        static getNetworkTypeName(networkType: fwkTech.Services.Mobilite.TYPE_RESEAU): string;
    }
}

declare module myway.core {
    abstract class NumberUtils {
        /**
         * Renvoie un number (integer) à partir d'un string, ou undefined si la string est null, vide, ou undefined.
         */
        static parseInt(value: string): number;
        /**
         * Helper function to check if input is float
         */
        static isFloat(input: any): boolean;
    }
}

declare module myway.core {
    abstract class PopupUtils {
        /**
         * Ouvre une fenêtre qui prend la taille de l'espace disponible (viewport).
         */
        static openMaxSize(url: string, windowName: string): void;
    }
}

declare module myway.core {
    abstract class RibUtils {
        static format(rib: string): string;
    }
}

declare module myway.core {
    abstract class StringUtils {
        /**
         * Supprime les accents d'une chaine
         */
        static stripAccents(text: string): string;
        /**
         * Renvoie true si une chaine en contient une autre.
         * Pas sensible à la casse et les accents sont ignorés.
         * @param textString
         * @param searchString
         */
        static contains(textString: string, searchString: string): boolean;
        /**
         * Décode une string en provenant d"un service REST.
         * Si elle est null ou a pour valeur "null", une chaine vide sera renvoyée
         */
        static decodeRestString(value: string): string;
        /**
         * Renvoie le texte d'un code HTML en supprimant toutes les balises.
         */
        static stripHtml(html: string): string;
    }
}

declare module myway.core {
    abstract class Utils {
        static ENVIRONNEMENT: string;
        /**
         * Indique si le portail est exécuté dans en environnement de développement (DUA et VFO).
         */
        static isEnvironnementDev(): boolean;
        /**
         * Indique si le portail est exécuté dans en environnement de recette (UTI, UPP, QPA).
         */
        static isEnvironnementRecette(): boolean;
        /**
         * Indique si l'environnement est la production (pilote ou non).
         */
        static isEnvironnementProduction(): boolean;
        /**
         * Crée un objet à partir de son prototype et recopie ses propriétés.
         * Cette méthode permet de recréer un objet récupéré du contexte ou d'un postMessage.
         * @param func Fonction du prototype (Class)
         * @param object
         */
        static fromPrototype<T>(func: new () => T, object: any): T;
        static getStrDateHeureCourante(): string;
        /**
         * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
         * where each x is replaced with a random hexadecimal digit from 0 to f, and y is replaced with a random hexadecimal digit from 8 to b.
         */
        static generateUUID(placeholder?: string): string;
        /**
         * Renvoie true si une modale Boostrap est ouverte
         */
        static isModaleBoostrapOpened(): boolean;
        /**
         * Cross-browser @media (width)
         */
        static mediaWidth: number;
        /**
         * Cross-browser @media (height)
         */
        static mediaHeight: number;
    }
}

declare module myway.core {
    abstract class XmlUtils {
        /**
         * Renvoie un document XML à partir d'un xml stringifié.
         * Une exception est renvoyée si le parser rencontre une erreur.
         * @param xml xml stringifié
         * @param useHtmlCodeVersion False par défaut.
         *                           Si true, certains caractères qui font planter le parser seront convertis dans leur équivalent HTML:
         *                           - & par &amp;
         */
        static parseFromString(xml: string, useHtmlCodeVersion?: boolean): Document;
    }
}

declare module myway.core {
    /**
     * Wrapper du serviceManager (Portail myway) et du techAgent (SPAs).
     *
     * Ce service existe parce que les déclarations Typescript ne sont pas compatibles entre les différents frameworks, et aussi à cause des variations dans les APIs disponibles.
     * Il s'appuie sur un typage légèrement modifié et surtout basé sur une version précise du framework (17.10).
     * C'est donc clairement du bricolage temporaire, puisque le framework devrait être unifié dans une version 18.xx.
     *
     * Toutes ces méthodes utilisent les promesses Angular, qui exécutent donc un cycle $digest lors de la résolution.
     */
    abstract class FrameworkService {
        private $injector;
        protected serviceAgent: fwkTech.Services.TechAgentExtended;
        protected techAgent: fwkTech.Services.TechAgentExtended;
        protected phantomAgent: fwkManager.Services.ServiceManagerExtended;
        protected NON_GEREE: string;
        constructor($injector: ng.auto.IInjectorService);
        private initPhantomAgent();
        private initTechAgent();
        private initServiceAgent();
    }
}

declare namespace myway.core {
    /**
     * Wrapper du serviceManager (Portail myway) et du techAgent (SPAs).
     *
     * Ce service existe parce que les déclarations Typescript ne sont pas compatibles entre les différents frameworks, et aussi à cause des variations dans les APIs disponibles.
     * Il s'appuie sur un typage légèrement modifié et surtout basé sur une version précise du framework (17.10).
     * C'est donc clairement du bricolage temporaire, puisque le framework devrait être unifié dans une version 18.xx.
     *
     * Toutes ces méthodes utilisent les promesses Angular, qui exécutent donc un cycle $digest lors de la résolution.
     */
    class AgentService extends FrameworkService {
        $q: ng.IQService;
        private commonService;
        private displayService;
        private contexteService;
        private habilitationService;
        private lisaService;
        private mobiliteService;
        private processusService;
        private traceService;
        private mailService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, commonService: CommonService, displayService: DisplayService, contexteService: ContexteService, habilitationService: HabilitationService, lisaService: LisaService, mobiliteService: MobiliteService, processusService: ProcessusService, traceService: TraceService, mailService: MailService);
        versionMySys: string;
        init(serviceInit: fwkManager.Services.IServiceManagerInitialisation): ng.IPromise<fwkManager.Services.Context.IPortalContext>;
        init(serviceInit: fwkTech.Services.IServiceAgentInitialisation): ng.IPromise<any>;
        initialize(): ng.IPromise<any>;
        getAuthentificationInfo(): ng.IPromise<fwkManager.Services.Context.AuthentificationInfo>;
        setAuthentificationInfo(value: fwkManager.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        getParametresComptables(): ng.IPromise<fwkManager.Services.Context.ParametresComptables>;
        setParametresComptables(value: fwkManager.Services.Context.ParametresComptables): ng.IPromise<void>;
        getDonneesDelocalisees<T>(objectDataName: string, codeEtablissement?: string): ng.IPromise<MyWay.TableDeloc.Donnees<T>>;
        getListDonneesDelocalisees<T>(objectDataName: string, resultType?: string): ng.IPromise<T[]>;
        getDonneesParCriteres(objectDataName: string, criteres: fwkTech.Services.DonneesDelocalisees.ObjectDataCritere[] | fwkManager.Services.DonneesDelocalisees.ObjectDataCritere[], codeEtablissement?: string): ng.IPromise<any>;
        chargerHabilitations(): ng.IPromise<any>;
        estHabilite(code: string): ng.IPromise<boolean>;
        estHabilite(codes: string[]): ng.IPromise<boolean[]>;
        /**
         * Ajoute ou modifie une habilitation
         * @param code Le code de l'habilitation à insérer / modifier
         * @param valeur La valeur true/false de l'habilitation
         */
        modifierHabilitation(code: string, valeur: boolean): ng.IPromise<any>;
        /**
         * Renvoie un objet avec les codes habilitations et leurs valeurs respectives.
         * @param codes Codes habilitations
         */
        estHabiliteKV(codes: string[]): ng.IPromise<{
            [code: string]: boolean;
        }>;
        sendRequest<T>(settings: fwkManager.Services.IRequestSettings): ng.IPromise<T>;
        sendRequest<T>(settings: fwkTech.Services.IRequestSettings): ng.IPromise<T>;
        getFromContext<T>(key: string): ng.IPromise<T | string>;
        addToGlobalContext(key: string, value: string): ng.IPromise<boolean | any>;
        addToSharedContext(key: string, value: string): ng.IPromise<any>;
        addListToGlobalContext(context: IContextKeyValue): ng.IPromise<boolean | any>;
        addListToContext(context: IContextKeyValue): ng.IPromise<boolean | any>;
        addToContext(key: string, value: string): ng.IPromise<void | boolean>;
        /**
         * Afficher une URL dans l'iframe d'un processus donné
         */
        afficherUrl(url: string, processId?: string): ng.IPromise<boolean>;
        /**
         * Démarrer un processus à partir d'une URL
         */
        startUrl(name: string, url: string, standAlone?: boolean): ng.IPromise<fwkManager.Services.Lisa.LisaCallbackResult>;
        lirePreference(key: string): ng.IPromise<any>;
        ecrirePreference(nomVariable: string, valeurVariable: string): ng.IPromise<any>;
        lirePreferences(keys: string[]): ng.IPromise<fwkManager.Services.Preferences.IPreferenceUtilisateur[]>;
        ecrirePreferences(preferences: fwkManager.Services.Preferences.IPreferenceUtilisateur[]): ng.IPromise<void>;
        startProcess(processCode: string, standAlone?: boolean, initData?: fwkManager.Services.Lisa.IInitialisationData, valeurDepart?: number): ng.IPromise<fwkManager.Services.Lisa.LisaCallbackResult | void>;
        /**
         * Terminer un processus à partir de son id.
         * Bascule l'affichage automatiquement sur le dernier processus actif.
         * Emet un événement de [[Component.ManagerEventType.BasculeProcess]] avec le contexte du portail en paramètre.
         * Renvoie une promesse indiquant si la fin de processus s'est bien passée.
         */
        stopProcess(processId: string): ng.IPromise<boolean>;
        /**
         * Basculer vers un processus donnée en le mettant au 1er plan (iframe).
         */
        switchProcess(processId: string): ng.IPromise<boolean>;
        trace: fwkManager.Services.Trace.TraceManagerExtended | fwkTech.Services.Trace.Logger;
        changeMainProcessName(name: string): ng.IPromise<any>;
        getCurrentProcessId(): ng.IPromise<string>;
        step: fwkTech.Services.Context.StepInfo;
        lisaNext(valeurSortie: number): ng.IPromise<fwkTech.Services.Lisa.LisaCallbackResult>;
        /**
         * Renvoie le type de portail (Myway ou PCM).
         */
        getTypePortail(): ng.IPromise<TypePortailEnum>;
        isPCM(): ng.IPromise<boolean>;
        isPortailMobilite(): ng.IPromise<boolean>;
        /**
         * Renvoie les informations de la caisse de l'établissement.
         * @param codeEtablissement Code établissement. Par défaut celui de l'agent connecté.
         */
        getInfosCaisse(codeEtablissement?: string): ng.IPromise<IInfosCaisses>;
        /**
         * Renvoie la valeur de la variable système DOMAINE_DNS.
         */
        getDomaineDns(): ng.IPromise<string>;
        envoyerMail(mail: fwkTech.Services.Communication.Mail): ng.IPromise<string>;
        getCapacite(regle: fwkTech.Services.Capacites.REGLE): ng.IPromise<boolean>;
        /**
         * Renvoie true si l'agent connecté est un agent de La Hénin.
         */
        isAgentFromAgenceLaHenin(): ng.IPromise<boolean>;
        startApplication(codeApplication: string): ng.IPromise<boolean>;
        /**
         * Masquer un flash. Ce dernier ne sera plus affiché à l'utilisateur.
         */
        masquerFlash(aidePref: fwkManager.Services.Aide.IAidePref): void;
        /**
         * Détermine si l'agent connecté est du métier BDR
         */
        isAgentBDR(): ng.IPromise<boolean>;
    }
}

declare namespace myway.core {
    class CommonService extends FrameworkService {
        private $q;
        private contexteService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, contexteService: ContexteService);
        versionMySys: string;
        init(serviceInit: fwkManager.Services.IServiceManagerInitialisation): ng.IPromise<fwkManager.Services.Context.IPortalContext>;
        init(serviceInit: fwkTech.Services.IServiceAgentInitialisation): ng.IPromise<any>;
        initialize(): ng.IPromise<any>;
        sendRequest<T>(settings: fwkManager.Services.IRequestSettings): ng.IPromise<T>;
        sendRequest<T>(settings: fwkTech.Services.IRequestSettings): ng.IPromise<T>;
        getDonneesDelocalisees<T>(objectDataName: string, codeEtablissement?: string): ng.IPromise<MyWay.TableDeloc.Donnees<T>>;
        getListDonneesDelocalisees<T>(objectDataName: string, resultType?: string): ng.IPromise<T[]>;
        getDonneesParCriteres(objectDataName: string, criteres: fwkTech.Services.DonneesDelocalisees.ObjectDataCritere[] | fwkManager.Services.DonneesDelocalisees.ObjectDataCritere[], codeEtablissement?: string): ng.IPromise<any>;
        /**
         * Démarrer un processus à partir d'une URL
         */
        startUrl(name: string, url: string, standAlone?: boolean): ng.IPromise<fwkManager.Services.Lisa.LisaCallbackResult>;
        lirePreference(key: string): ng.IPromise<any>;
        ecrirePreference(nomVariable: string, valeurVariable: string): ng.IPromise<any>;
        lirePreferences(keys: string[]): ng.IPromise<fwkManager.Services.Preferences.IPreferenceUtilisateur[]>;
        ecrirePreferences(preferences: fwkManager.Services.Preferences.IPreferenceUtilisateur[]): ng.IPromise<void>;
        /**
         * Renvoie les informations de la caisse de l'établissement.
         * @param codeEtablissement Code établissement. Par défaut celui de l'agent connecté.
         */
        getInfosCaisse(codeEtablissement?: string): ng.IPromise<IInfosCaisses>;
        /**
         * Renvoie la valeur de la variable système DOMAINE_DNS.
         */
        getDomaineDns(): ng.IPromise<string>;
        /**
         * Renvoie true si l'agent connecté est un agent de La Hénin.
         */
        isAgentFromAgenceLaHenin(): ng.IPromise<boolean>;
        /**
         * Renvoie l'état de bascule d'un processus pour l'établissement dans le contexte.
         * La table délocalisée SU1P est utilisée pour déterminer l'état.
         * Le code application est PETRA par défaut.
         * @returns Promesse contenant un booléen.
         */
        isProcessusBascule(codeProcessus: string, codeApplication?: string): ng.IPromise<boolean>;
        /**
         * Masquer un flash. Ce dernier ne sera plus affiché à l'utilisateur.
         */
        masquerFlash(aidePref: fwkManager.Services.Aide.IAidePref): void;
    }
}

declare module myway.core {
    class ContexteClientService extends FrameworkService {
        private $q;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService);
        /**
         * Créer un contexte client sur un client donné transmis par son id
         * @param identifiantPersonne identifiant de la personne
         * @return id technique du contexte client créé (ou mergé)
         */
        createNewContext(identifiantPersonne?: number | string): string;
        /**
         * Supprimer tous les contextes clients
         */
        deleteAllContexts(): void;
        /**
         * Renvoie l'ensemble des processus attachés à un contexte client
         *
         * @param contextId Identifiant du contexte client.
         * @return Liste des ids des processus
         */
        getAttachedProcessIdFromContext(contextId: string): string[];
        /**
         * Renvoie l'identifiant personne du contexte client courant.
         */
        getIdClient(): ng.IPromise<string>;
        /**
         * Modification de l'identifiant client du contexte client courant.
         * L'identifiant personne est correctement formaté puisqu'il est la clé du client.
         * @throws Erreur si processus non associé à un contexte client
         * @throws Erreur si contexte client déjà associé à un client
         * @throws Erreur si code client invalide (ex : null, undefined, ...)
         * @param identifiantPersonne Identifiant de la personne
         */
        setIdClient(identifiantPersonne: number | string): ng.IPromise<void>;
        /**
         * Renvoie l'identifiant personne d'un contexte client.
         * @param contextId Id du contexte client
         */
        getIdClientFromContext(contextId: string): ng.IPromise<string>;
        /**
         * Renvoie la liste des identifiants clients assignés à des contextes clients.
         */
        getAllIdClients(): ng.IPromise<string[]>;
        /**
         * Renvoie la liste des identifiants des contextes clients.
         */
        getAllIdContextes(): ng.IPromise<string[]>;
        /**
         * Modifie le mode du contexte client (AUTOMATIQUE ou MANUEL).
         * @param contextId Id du contexte client
         * @param mode Mode
         */
        setContextMode(contextId: string, mode: fwkManager.Services.ContexteClient.Messages.ContexteClientMode): void;
        /**
         * Récupère le contexte client d'une personne.
         * @param identifiantPersonne Identifiant de la personne
         */
        getContextByIdClient(identifiantPersonne: number | string): ng.IPromise<any>;
        /**
         * Récupère un contexte client à partir de son id.
         * @param contextId Id du contexte client
         */
        getContextById(contextId: string): ng.IPromise<any>;
        /**
         * Récupère la valeur d'une propriété du context client courant. Si cette dernière est omise, renvoie tout le contexte client.
         * @param prop Nom de la propriété.
         * @return Valeur de la propriété
         */
        getProperty(prop?: string): ng.IPromise<any>;
        /**
         * Définit la valeur d'une propriété dans le context client courant.
         * @param prop Nom de la propriété.
         * @return Valeur de la propriété
         */
        setProperty(prop: string, valeur: any): ng.IPromise<boolean>;
        /**
         * Récupère la valeur d'une propriété d'un contexte client. Si cette dernière est omise, renvoie tout le contexte client.
         * @param contextId Id du contexte client
         * @param prop Nom de la propriété.
         * @return Valeur de la propriété
         */
        getContextProperty(contextId: string, prop?: string): ng.IPromise<any>;
        /**
         * Définit la valeur d'une propriété dans le contexte client.
         * @param prop Nom de la propriété.
         * @param value Valeur de la propriété.
         * @param contextId Id du contexte client. Dans le cas d'une SPA, ce paramètre n'a pas de sens car on utilise systématiquement le contexte client courant.
         */
        setContextProperty(prop: string, value: any, contextId?: string): ng.IPromise<any>;
    }
}

declare module myway.core {
    class ContexteService extends FrameworkService {
        private $q;
        private CONTEXT_KEY_AUTHENTIFICATION_INFO;
        private CONTEXT_KEY_PARAMETRES_COMPTABLES;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService);
        getAuthentificationInfo(): ng.IPromise<fwkManager.Services.Context.AuthentificationInfo>;
        setAuthentificationInfo(value: fwkManager.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        getParametresComptables(): ng.IPromise<fwkManager.Services.Context.ParametresComptables>;
        setParametresComptables(value: fwkManager.Services.Context.ParametresComptables): ng.IPromise<void>;
        getFromContext<T>(key: string): ng.IPromise<T | string>;
        addToGlobalContext(key: string, value: string): ng.IPromise<boolean | any>;
        addToSharedContext(key: string, value: string): ng.IPromise<any>;
        addListToGlobalContext(context: IContextKeyValue): ng.IPromise<boolean | any>;
        addToContext(key: string, value: string): ng.IPromise<void | boolean>;
        addListToContext(context: IContextKeyValue): ng.IPromise<boolean | any>;
    }
}

declare namespace myway.core {
    class DisplayService extends FrameworkService {
        private $q;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService);
        /**
         * Afficher une URL dans l'iframe d'un processus donné
         */
        afficherUrl(url: string, processId: string): ng.IPromise<boolean>;
        /**
         * Callback utilisé par le framework dans les APIs liées aux impressions.
         * Il est appelé lors de la fermeture de la modale ouverte par le framework.
         */
        setFermerModalMessage(func: () => void): void;
        /**
         * Callback utilisé par le framework dans les APIs liées aux impressions.
         * Il est appelé au moment d'afficher la modale liée aux impressions, c'est donc un déclencheur.
         */
        setAffichageModalMessage(func: (titreMessage: string, contenuMessage: string, boutons: string, delai: number, callback: (retour: any) => void, onModaleOuverte?: () => void) => void): void;
        /**
         * Callback utilisé par le framework dans les APIs liées aux impressions.
         * Il est appelé si un flash (aide) doit être affiché. C'est donc lui qui est chargé de la restitution du flash.
         */
        setAffichageModalAide(func: (titreMessage: string, contenuMessage: string, codeEtape: string, idFlashcode: number) => void): void;
    }
}

declare module myway.core {
    interface IPlateforme {
        id: fwkTech.Services.Mobilite.PLATEFORME;
        code: string;
        libelle: string;
    }
    interface IReseau {
        id: fwkTech.Services.Mobilite.TYPE_RESEAU;
        libelle: string;
    }
    interface IContextKeyValue {
        [key: string]: any;
    }
}

declare module myway.core {
    class HabilitationService extends FrameworkService {
        private $q;
        private contexteService;
        private commonService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, contexteService: ContexteService, commonService: CommonService);
        chargerHabilitations(): ng.IPromise<any>;
        chargerHabilitationsCultureNet(): ng.IPromise<any>;
        chargerHabilitationsIAM(): ng.IPromise<any>;
        /**
         * Ajoute ou modifie une habilitation
         * @param code Le code de l'habilitation à insérer / modifier
         * @param valeur La valeur true/false de l'habilitation
         */
        modifierHabilitation(code: string, valeur: boolean): ng.IPromise<any>;
        estHabilite(code: string): ng.IPromise<boolean>;
        estHabilite(codes: string[]): ng.IPromise<boolean[]>;
        /**
         * Renvoie un objet avec les codes habilitations et leurs valeurs respectives.
         * @param codes Codes habilitations
         */
        estHabiliteKV(codes: string[]): ng.IPromise<{
            [code: string]: boolean;
        }>;
        /**
         * Chargement des habilitations Culture.Net communautaires
         */
        loadHabilitationsCommunautaires(): ng.IPromise<any>;
        /**
         * Renvoie les rubriques cultureNet d'une origine donnée.
         * @param origineRubrique Origine de la rubrique: Communaute, National, Regional
         */
        private getRubriquesCultureNet(origineRubrique);
    }
}

declare namespace myway.core {
    class LisaService extends FrameworkService {
        private $q;
        private contexteService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, contexteService: ContexteService);
        next(valeurSortie: number): ng.IPromise<fwkTech.Services.Lisa.LisaCallbackResult>;
    }
}

declare module myway.core {
    class MailService extends FrameworkService {
        private $q;
        private contexteService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, contexteService: ContexteService);
        envoyerMail(mail: fwkTech.Services.Communication.Mail): ng.IPromise<string>;
    }
}

declare module myway.core {
    class MobiliteService extends FrameworkService {
        private $q;
        private logger;
        private typePortailPromise;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, logger: LoggerService);
        /**
         * Retourne les informations sur le device de l'utilisteur
         */
        getInfoMachine(): ng.IPromise<fwkTech.Services.Mobilite.IInfoMachine>;
        /**
         * Retourne la liste des périphériques associé au device de l'utilisteur
         */
        getPeripheriques(): ng.IPromise<fwkTech.Services.Mobilite.IPeripherique[]>;
        /**
         * Retourne la signature de la tablette de l'utilisteur
         */
        getTablettesSignature(): ng.IPromise<fwkTech.Services.Mobilite.ITabletteSignature[]>;
        /**
         * Retourne le numéro de caisse de l'utilisteur
         */
        getCaissesAuto(): ng.IPromise<fwkTech.Services.Mobilite.ICaisseAuto[]>;
        /**
         * Permet de savoir à quel type de réseau on est connecté
         */
        getReseau(): ng.IPromise<fwkTech.Services.Mobilite.TYPE_RESEAU>;
        /**
         * Retourne une capacité
         */
        getCapacite(regle: fwkTech.Services.Capacites.REGLE): ng.IPromise<boolean>;
        /**
         * Renvoie le type de portail (Myway ou PCM).
         */
        getTypePortail(): ng.IPromise<TypePortailEnum>;
        isPCM(): ng.IPromise<boolean>;
        isPortailMobilite(): ng.IPromise<boolean>;
        /**
         * Renvoie une liste des plateformes
         */
        getPlateformes(): ng.IPromise<IPlateforme[]>;
        /**
         * Renvoie une liste des types de réseau
         */
        getReseaux(): ng.IPromise<IReseau[]>;
        /**
         * Renvoie des informations relatives à la mobilité du device utilisé par l'agent.
         * En cas d'erreur, chaque information concernée sera nulle.
         *
         */
        getInfosMobilite(): ng.IPromise<IInfosMobilite>;
    }
}

declare module myway.core {
    class ProcessusService extends FrameworkService {
        private $q;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService);
        getCurrentProcessId(): ng.IPromise<string>;
        step: fwkTech.Services.Context.StepInfo;
        startApplication(codeApplication: string): ng.IPromise<boolean>;
        startProcess(processCode: string, standAlone?: boolean, initData?: fwkManager.Services.Lisa.IInitialisationData, valeurDepart?: number): ng.IPromise<fwkManager.Services.Lisa.LisaCallbackResult | void>;
        /**
         * Terminer un processus à partir de son id.
         * Bascule l'affichage automatiquement sur le dernier processus actif.
         * Emet un événement de [[Component.ManagerEventType.BasculeProcess]] avec le contexte du portail en paramètre.
         * Renvoie une promesse indiquant si la fin de processus s'est bien passée.
         */
        stopProcess(processId: string): ng.IPromise<boolean>;
        /**
         * Basculer vers un processus donnée en le mettant au 1er plan (iframe).
         */
        switchProcess(processId: string): ng.IPromise<boolean>;
        changeMainProcessName(name: string): ng.IPromise<any>;
    }
}

declare module myway.core {
    class TraceService extends FrameworkService {
        private $q;
        private contexteService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, contexteService: ContexteService);
        trace: fwkManager.Services.Trace.TraceManagerExtended | fwkTech.Services.Trace.Logger;
        debug(message: string, action?: string, detail?: any): void;
        info(message: string, action?: string, detail?: any): void;
        warning(message: string, action?: string, detail?: any): void;
        error(message: string, action?: string, detail?: any): void;
    }
}
