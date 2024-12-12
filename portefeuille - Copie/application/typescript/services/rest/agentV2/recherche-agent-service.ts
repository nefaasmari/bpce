/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.AgentV2.recherche {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les information du corporate
     */
    class RechercheAgentService implements IRechercheAgentService {
        public static CLASS_NAME = "RechercheAgentService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(RechercheAgentService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) {}

        public getListeCaracteristiquesAgent(query: Modeles.Rest.AgentV2.recherche.IRechercheAgentQuery): ng.IPromise<Modeles.Rest.AgentV2.recherche.IRechercheAgent> {
            RechercheAgentService.logger.info(">>> Appel de la méthode : RechercheAgentService.getListeCaracteristiquesAgent <<<");

            var requete = {
                url: Constantes.urlsRest.URL_REST_AGENTV2_RECHERCHE,
                method: MyWay.Services.MethodEnum.GET,
                withHeaders: true,
                params: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };

            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    /**
     * Interface de la classe CorporateTiersLiesService
     */
    export interface IRechercheAgentService {
        getListeCaracteristiquesAgent(query: Modeles.Rest.AgentV2.recherche.IRechercheAgentQuery): ng.IPromise<Modeles.Rest.AgentV2.recherche.IRechercheAgent>;
    }

    app.service("RechercheAgentService", RechercheAgentService);
}  