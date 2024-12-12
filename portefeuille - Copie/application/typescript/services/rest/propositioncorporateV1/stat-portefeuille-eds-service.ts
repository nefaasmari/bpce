/// <reference path="../../../constantes/inject-constantes.ts" />

/**
 * 
 */
module Portefeuille.Services.Rest.PropositioncorporateV1.StatPortefeuilleEds {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * 
     */
    class StatPortefeuilleEdsService implements IStatPortefeuilleEdsService {
        public static CLASS_NAME = "StatPortefeuilleEdsService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(StatPortefeuilleEdsService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        /**
         * Constructeur
         * @param serviceAgentExtended
         */
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) {
        }

        /**
         * obtiens les données 
         * @param query
         */
        public getStatPortefeuilleEds(query: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds):
            ng.IPromise<Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds> {

            StatPortefeuilleEdsService.logger.info(">>> Appel de la méthode : StatPortefeuilleEdsService.getStatPortefeuilleEds <<<");
            let requete = {
                url: Constantes.urlsRest.URL_REST_PROPOSITIONCORPORATEV1_STAT_PORTEFEUILLE_EDS,
                method: MyWay.Services.MethodEnum.POST,
                withHeaders: true,
                data: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };

            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    /**
     * Interface IStatPortefeuilleEdsService
     */
    export interface IStatPortefeuilleEdsService {
        getStatPortefeuilleEds(query: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds):
            ng.IPromise<Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds>;
    }
    app.service("StatPortefeuilleEdsService", StatPortefeuilleEdsService);
}  