
declare module myway.recherchePersonne {
    var app: ng.IModule;
}

declare module myway.recherchePersonne {
    class CritereRechercheContext {
        raisonSociale: string;
        siren: string;
        communeSiegeSocial: string;
        agence: string;
    }
}

declare module myway.recherchePersonne {
    /**
     * Exemple d'utilisation :
     *      <button class="btn btn-default" ng-click="ctrl.showDiv = true">Afficher la div</button>
     *      <div ng-if="ctrl.showDiv"
     *           click-out="ctrl.showDiv = false">
     *          Mon contenu de div
     *      </div>
     * @param {ng.IWindowService} $window
     * @param {ng.ITimeoutService} $timeout
     * @returns
     */
    function clickOut($window: ng.IWindowService, $timeout: ng.ITimeoutService): ng.IDirective;
}

declare module myway.recherchePersonne {
    class ConfidentialiteForcageService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        tracerForcage(personne: MyWay.Model.Client): void;
    }
}

declare module myway.recherchePersonne {
    class CodeMarcheService {
        private $q;
        private serviceAgentExtended;
        private static TIERS_VERSION;
        private static codeMarchePros;
        private idCodeMarchePro;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc function
         * @name isCodeMarchePro
         * @methodOf myway.recherchePersonne.CodeMarcheService
         * @description
         * return true si codes marchés concernés par le marché des PROS.
         * @returns {ng.IPromise<boolean>} une promesse de type boolean.
         */
        isCodeMarchePro(numeroPersonne: string): ng.IPromise<boolean>;
        /**
         * @ngdoc function
         * @name getCodeMarche
         * @methodOf myway.recherchePersonne.CodeMarcheService
         * @description
         * appel a la ressource tier-v1/identification pour recuperer les infos de code marche du client.
         * @param {codeEtablissement: string, numeroPersonne: string}.
         * @returns {ng.IPromise<ICodeMarche>} une promesse de type ICodeMarche.
         */
        private getCodeMarche(codeEtablissement, numeroPersonne);
        /**
         * @ngdoc function
         * @name setIdCodeMarchePro
         * @methodOf myway.recherchePersonne.CodeMarcheService
         * @description
         * set idCodeMarchePro.
         * @param {paramIdCodeMarchePro: string}.
         */
        private setIdCodeMarchePro(paramIdCodeMarchePro);
        /**
         * @ngdoc function
         * @name getIdCodeMarchePro
         * @methodOf myway.recherchePersonne.CodeMarcheService
         * @description
         * get idCodeMarchePro.
         * @returns {string} l'idCodeMarchePro.
         */
        private getIdCodeMarchePro();
    }
}

declare module myway.recherchePersonne {
    class ParticulierInformationService {
        private serviceAgentExtended;
        private static TIERS_VERSION;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name getParticulierInformation
         * @methodOf myway.recherchePersonne.getParticulierInformation
         * @description
         * méthode qui retourne les informations particulier d'un client passé en param.
         * @param {MyWay.Model.Client, MyWay.Model.Rice} : le code capacite juridique de la personne
         * @returns {ng.IPromise<Array<MyWay.Model.Identification>>}.
         */
        getParticulierInformation(clientSelectionne: MyWay.Model.Client[]): ng.IPromise<Array<MyWay.Model.Identification>>;
        /**
         * @ngdoc method
         * @name getDonneesDelocaliseesDU2C
         * @methodOf myway.recherchePersonne.ParticulierInformationService
         * @description
         * méthode qui retourne delocate table DU2C.
         * @param {string, MyWay.Model.Rice}.
         * @returns {ng.IPromise<any>} liste la table DU2C.
         */
        getDonneesDelocaliseesDU2C(codeCapaciteJuridique: string): ng.IPromise<any>;
    }
}

declare module myway.recherchePersonne {
    class ReferentielCorporateService {
        private serviceAgentExtended;
        static $inject: string[];
        private referentielCorporateList;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name getSecteurActivite
         * @methodOf myway.comGestionClient.ReferentielCorporateService.getSecteurActivite
         * @description
         * méthode qui retourne les informations des secteurs d'activité: id/libelle.
         * @param {void}.
         * @returns {ng.IPromise<Array<any>>}.
         */
        private getSecteurActivite();
        /**
         * @ngdoc method
         * @name getQualite
         * @methodOf myway.comGestionClient.ReferentielCorporateService.getQualite
         * @description
         * méthode qui retourne le libelle d'une qualité d'un idSecteurActivite passé en param.
         * @param {String}: id du secteur d'activite.
         * @returns {ng.IPromise<Array<any>>}.
         */
        private getQualite(idSecteurActivite);
        /**
         * @ngdoc method
         * @name buildReferentielCorporateObject
         * @methodOf myway.comGestionClient.ReferentielCorporateService.buildReferentielCorporateObject
         * @description
         * méthode qui appel setReferentielCorporateList pour sauvragrader le tableau constituer.
         * @param {void}.
         * @returns {void}.
         */
        buildReferentielCorporateObject(): void;
        /**
         * @ngdoc method
         * @name getReferentielCorporateList
         * @methodOf myway.comGestionClient.ReferentielCorporateService.getReferentielCorporateList
         * @description
         * méthode qui retourne le tableau contenant le referentiel corporate.
         * @param {void}.
         * @returns {Array<any>} : le tableau contenant le referentiel corporate.
         */
        getReferentielCorporateList(): Array<any>;
        /**
         * @ngdoc method
         * @name setReferentielCorporateList
         * @methodOf myway.comGestionClient.ReferentielCorporateService.setReferentielCorporateList
         * @description
         * méthode qui set la valeur du tableau contenant le referentiel corporate.
         * @param {Array<any>} : le tableau contenant le referentiel corporate.
         * @returns {void}.
         */
        private setReferentielCorporateList(param);
    }
}
