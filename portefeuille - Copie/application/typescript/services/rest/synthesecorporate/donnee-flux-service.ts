/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.Flux {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer une liste donnees flux
     */

    class FluxService implements IFluxService {
        public static CLASS_NAME = "FluxService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(FluxService.CLASS_NAME);

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
         * Méthode de récupération de la liste des donnees flux
         * @param query
         */
        public getFlux(query: any): ng.IPromise<Array<Modeles.Rest.SyntheseCorporateV1.flux.IInfosFlux>> {
            FluxService.logger.info(">>> Appel de la méthode : FluxService.getFlux <<<");
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
     * Interface de la classe FluxService
     */
    export interface IFluxService {
        getFlux(query: any): ng.IPromise<Array<Modeles.Rest.SyntheseCorporateV1.flux.IInfosFlux>>;
    }

    app.service(FluxService.CLASS_NAME, FluxService);
}  