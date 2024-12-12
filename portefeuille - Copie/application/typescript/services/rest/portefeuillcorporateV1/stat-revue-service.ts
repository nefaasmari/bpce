/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.StatRevue {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les information sur les statistiques de rentabilite
     */

    class StatRevueService implements IStatRevueService {
        public static CLASS_NAME = "StatRevueService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(StatRevueService.CLASS_NAME);

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
        public getStats(query: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres): ng.IPromise<Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevue> {
            StatRevueService.logger.info(">>> Appel de la méthode : StatRevueService.getStats <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PROPOSITIONCORPORATEV1_STATREVUE,
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
    export interface IStatRevueService {
        getStats(query: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres): ng.IPromise<Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevue>;
    }

    app.service(StatRevueService.CLASS_NAME, StatRevueService);
}  