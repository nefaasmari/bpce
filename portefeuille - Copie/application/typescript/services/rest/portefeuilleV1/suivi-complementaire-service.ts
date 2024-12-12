/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.SuiviComplementaire {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les client expertise
     */

    class SuiviComplementaireService implements ISuiviComplementaireService {
        public static CLASS_NAME = "SuiviComplementaireService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(SuiviComplementaireService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) {
        }

        /**
         * Méthode de récupération de la liste des relation eco et des clients avec certains indicateurs (/portefeuille/v1/relationCommerciale)
         * @param query
         */
        public getClientsSuiviComplementaire(query: Portefeuille.Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuiviComplementaire): ng.IPromise<Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuiviComplementaire> {
            SuiviComplementaireService.logger.info(">>> Appel de la méthode : SuiviComplementaireService.getClientsSuiviComplementaire <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PORTEFEUILLEV1_SUIVI_COMPLEMENTAIRE,
                method: MyWay.Services.MethodEnum.POST,
                withHeaders: true,
                data: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };
            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    /**
     * Interface de la classe CorporateTiersLiesService
     */
    export interface ISuiviComplementaireService {
        getClientsSuiviComplementaire(query: Portefeuille.Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuiviComplementaire): ng.IPromise<Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuiviComplementaire>;
    }

    app.service(SuiviComplementaireService.CLASS_NAME, SuiviComplementaireService);
}  