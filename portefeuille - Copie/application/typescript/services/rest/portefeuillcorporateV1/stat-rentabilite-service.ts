/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.StatRentabilite {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les information sur les statistiques de rentabilite
     */

    class StatRentabiliteService implements IStatRentabiliteService {
        public static CLASS_NAME = "StatRentabiliteService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(StatRentabiliteService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) {
        }

        /**
         * Méthode de récupération de la liste des données statistiques de rentabilite sur une liste de client ou relation ou portefeuilles
         * @param query
         */
        public getStatsRentab(query: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabiliteParametres): ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabilite> {
            StatRentabiliteService.logger.info(">>> Appel de la méthode : StatRentabiliteService.getStatsRentab <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PORTEFEUILLECORPORATEV1_STATRENTABILITE,
                method: MyWay.Services.MethodEnum.POST,
                withHeaders: true,
                data: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };
            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    /**
     * Interface de la classe StatRentabiliteService
     */
    export interface IStatRentabiliteService {
        getStatsRentab(query: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabiliteParametres): ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabilite>;
    }

    app.service(StatRentabiliteService.CLASS_NAME, StatRentabiliteService);
}  