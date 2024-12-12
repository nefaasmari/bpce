/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.StatPortefeuille {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les information sur les statistiques de rentabilite
     */

    class StatPortefeuilleService implements IStatPortefeuilleService {
        public static CLASS_NAME = "StatPortefeuilleService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(StatPortefeuilleService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) {
        }

        /**
         * Méthode de récupération de la liste des données statistiques de rentabilite sur une liste de client 
         * ou relation ou portefeuilles
         * @param query
         */
        public getStats(query: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuilleParametres):
            ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuille> {
            StatPortefeuilleService.logger.info(">>> Appel de la méthode : StatRevueService.getStats <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PORTEFEUILLECORPORATEV1_STATPTF,
                method: MyWay.Services.MethodEnum.POST,
                withHeaders: true,
                data: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };
            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    /**
     * Interface de la classe StatRevueService
     */
    export interface IStatPortefeuilleService {
        getStats(query: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuilleParametres):
            ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuille>;
    }

    app.service(StatPortefeuilleService.CLASS_NAME, StatPortefeuilleService);
}  