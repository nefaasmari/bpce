/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.StatFluxMouvementFinancier {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Ce service permet de récupérer les flux créditeurs + débiteurs.
     */

    class StatFluxMouvementFinancierService implements IStatFluxMouvementFinancierService {
        public static CLASS_NAME = "StatFluxMouvementFinancierService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(StatFluxMouvementFinancierService.CLASS_NAME);

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
        public postStatFluxMvtFinancier(query: Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancierParametres):
            ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancier> {
            StatFluxMouvementFinancierService.logger.info(">>> Appel de la méthode : StatFluxMouvementFinancierService.postStatFluxMvtFinancier <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PORTEFEUILLECORPORATEV1_STATFLUXMOUVEMENTFINANCIER,
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
    export interface IStatFluxMouvementFinancierService {
        postStatFluxMvtFinancier(query: Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancierParametres): ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancier>;
    }

    app.service(StatFluxMouvementFinancierService.CLASS_NAME, StatFluxMouvementFinancierService);
}  