/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.AgentV2.gestionAffectation {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les information du corporate
     */
    class GestionAffectationService implements IGestionAffectationService {
        public static CLASS_NAME = "GestionAffectationService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(GestionAffectationService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ]; 

        //constructeur
        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended
        ) { }

        /**
         * Méthode permettant de de visualiser le détail de l'affectation d'un agent
         * @param query
         */
        public getGestionAffectation(query: Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectationQuery): ng.IPromise<Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectation> {
            GestionAffectationService.logger.info(">>> Appel de la méthode : GestionAffectationService.getGestionAffectation <<<");

            var requete = {
                url: Constantes.urlsRest.URL_REST_AGENTV2_GESTION_AFFECTATION,
                method: MyWay.Services.MethodEnum.GET,
                withHeaders: true,
                params: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };

            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    /**
     * Interface de la classe GestionAffectationService
     */
    export interface IGestionAffectationService {
        getGestionAffectation(query: Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectationQuery): ng.IPromise<Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectation>;
    }

    app.service("GestionAffectationService", GestionAffectationService);
}  