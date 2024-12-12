/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.Client {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer une liste de clients avec certains indicateurs
     */

    class ClientService implements IClientService {
        public static CLASS_NAME = "ClientService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ClientService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$q
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $q: ng.IQService) {
        }

        /**
         * Méthode de récupération de la liste des clients avec certains indicateurs (/portefeuille/v1/client)
         * @param query
         */
        public getClientsIndicateurs(query: Modeles.Rest.PortefeuilleV1.client.IParametresEntree): ng.IPromise<Modeles.Rest.PortefeuilleV1.client.IClient> {
            ClientService.logger.info(">>> Appel de la méthode : ClientService.getClientsIndicateurs <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PORTEFEUILLEV1_CLIENT,
                method: MyWay.Services.MethodEnum.POST,
                withHeaders: true,
                data: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };
            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    /**
     * Interface de la classe ClientService
     */
    export interface IClientService {
        getClientsIndicateurs(query: Modeles.Rest.PortefeuilleV1.client.IParametresEntree): ng.IPromise<Modeles.Rest.PortefeuilleV1.client.IClient>;
    }

    app.service(ClientService.CLASS_NAME, ClientService);
}  