
declare module PdtEntreprise {
    var app: ng.IModule;
}

declare module PdtEntreprise.Constantes.Date {
    const FORMAT_MOMENT: string;
    const JOUR_MOMENT: string;
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
    /**
     * Service Lisa
     */
    interface ILisaService {
        /**
         * Appelle la prochaine étape (code sortie : valeurSortie
         * urlLocal est appelé si travail en local ou en DUA sans utiliser le code processus
         */
        next(valeurSortie: number, urlLocal: string): ng.IPromise<void>;
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
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope);
        create(): void;
        private calculateRadius;
        /** Calcul de la circonférence */
        private circumference;
        private center;
        setHeight(height: number): void;
    }
}

declare module PdtEntreprise.Directive {
    function mwPercentDisplay(): ng.IDirective;
}

declare module PdtEntreprise.LoggerDecorator {
    interface ILogFunction {
        (message: string): void;
    }
}
