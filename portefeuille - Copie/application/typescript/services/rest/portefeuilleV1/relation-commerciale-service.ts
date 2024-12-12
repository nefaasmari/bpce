/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.RelationCommerciale {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les information du corporate
     */

    class RelationCommercialeService implements IRechercheCommercialeService {
        public static CLASS_NAME = "RelationCommercialeService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(RelationCommercialeService.CLASS_NAME);

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
        public getRelationCommerciale(query: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommercialeParametres): ng.IPromise<Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale> {
            RelationCommercialeService.logger.info(">>> Appel de la méthode : RelationCommercialeService.getRelationCommerciale <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PORTEFEUILLEV1_RELATION_COMMERCIALE,
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
    export interface IRechercheCommercialeService {
        getRelationCommerciale(query: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommercialeParametres): ng.IPromise<Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale>;
    }

    app.service(RelationCommercialeService.CLASS_NAME, RelationCommercialeService);
}  