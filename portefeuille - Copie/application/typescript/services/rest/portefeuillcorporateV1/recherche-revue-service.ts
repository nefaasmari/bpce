/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.RechercheRevue {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les informations sur la revue
     */
    class RechercheRevueService implements IRechercheRevueService {
        public static CLASS_NAME = "RechercheRevueService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(RechercheRevueService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) {
        }

        /**
         * Méthode de récupération de la liste des données d'une revue
         * @param query
         */
        public postRechercheRevue(query: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevueParametres): ng.IPromise<Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue> {
            RechercheRevueService.logger.info(">>> Appel de la méthode : RechercheRevueService.getRevue <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PROPOSITIONCORPORATEV1_RECHERCHE_REVUE,
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
    export interface IRechercheRevueService {
        postRechercheRevue(query: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevueParametres): ng.IPromise<Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue>;
    }

    app.service(RechercheRevueService.CLASS_NAME, RechercheRevueService);
}  