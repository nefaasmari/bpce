
declare module ApplicationsContexteMobilite {
    var app: any;
}

declare module ApplicationsContexteMobilite {
    interface IApplicationsCodeMobiliteAttributs {
        codeApplication: string;
        codeVisibiliteApplication: number;
        libelleDeviceCompatible: string;
    }
    class ApplicationsContexteMobiliteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne le catalogue des applications de l'utilisateur.
         * L'object retourné est constitué d'une clé correspondant au code de l'application et une valeur booléenne
         * pour indiquer si l'application est disponible dans le contexte de mobilité de l'utilisateur
         * @method
         * @param {Array<IApplicationsCodeMobiliteAttributs>} applications
         * @return {ng.IPromise<{ [codeApplication: string]: boolean }>}
         */
        getApplicationsContexteMobilite: (applications: IApplicationsCodeMobiliteAttributs[]) => ng.IPromise<{
            [codeApplication: string]: boolean;
        }>;
        /**
         * Extraire les valeurs des clés de l'application pour le contexte de mobilité
         * @method
         * @param {any} value
         * @param {string} id
         * @return {string}
         */
        private getStringFromServiceMobilite;
        /**
         * Retourne la liste des périphériques associé au device de l'utilisteur
         * ***** Méthode en cours d'implémentation *****
         * @method
         * @return {ng.IPromise<string>}
         */
        getPeripheriques: () => ng.IPromise<string>;
        /**
         * Retourne la signature de la tablette de l'utilisteur
         * ***** Méthode en cours d'implémentation *****
         * @method
         * @return {ng.IPromise<string>}
         */
        getTablettesSignature: () => ng.IPromise<string>;
        /**
         * Retourne le numéro de caisse de l'utilisteur
         * ***** Méthode en cours d'implémentation *****
         * @method
         * @return {ng.IPromise<string>}
         */
        getCaissesAuto: () => ng.IPromise<string>;
        /**
         * Retourne la configuration réseau de l'utilisteur
         * @method
         * @return {ng.IPromise<string>}
         */
        getReseau: () => ng.IPromise<string>;
        /**
         * Retourne les information sur le device de l'utilisteur
         * ***** Méthode en cours d'implémentation *****
         *  1  : MySys (environnement Windows avec tout l’environnement IT-CE)
         *  2  : Windows
         *  3  : Apple (iOS)
         *  4  : Android
         *  99 : Autres
         * @method
         * @return {ng.IPromise<string>}
         */
        getInfoMachine: () => ng.IPromise<any>;
        /**
         * Retourne la résolution d'écran du device de l'utilisteur
         * @method
         * @return {ng.IPromise<string>}
         */
        getCapacite: () => ng.IPromise<boolean>;
    }
}

declare module ApplicationsContexteMobilite {
}
