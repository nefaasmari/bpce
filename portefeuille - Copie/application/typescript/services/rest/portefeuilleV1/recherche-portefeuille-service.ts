/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.RecherchePortefeuille {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les information du corporate
     */

    class RecherchePortefeuilleService implements IRecherchePortefeuilleService {
        public static CLASS_NAME = "RecherchePortefeuilleService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(RecherchePortefeuilleService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) {}

        /**
         * Méthode de récupération de la liste des portefeuilles pour un élément de structure donné d'un agent (/portefeuille/v1/recherche)
         * @param query
         */
        public getPortefeuilles(query: IRecherchePortefeuilleQuery): ng.IPromise<Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche> {
            RecherchePortefeuilleService.logger.info(">>> Appel de la méthode : RecherchePortefeuilleService.getPortefeuilles <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PORTEFEUILLEV1_RECHERCHE,
                method: MyWay.Services.MethodEnum.GET,
                withHeaders: true,
                params: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };
            return this.serviceAgentExtended.sendRequest(requete);
        }

        /**
         * Méthode de récupération de la liste des portefeuilles pour un pour un élément de structure donné (agence, centre, etc)  (/portefeuille/v1/recherche/getListe)
         * @param query
         */
        public getlistePortefeuillesParEds(query: IRecherchePortefeuilleQuery): ng.IPromise<Modeles.Rest.PortefeuilleV1.recherche.IListePortefeuille> {
            RecherchePortefeuilleService.logger.info(">>> Appel de la méthode : RecherchePortefeuilleService.getPortefeuilles <<<");
            var requete = {
                url: Constantes.urlsRest.URL_REST_PORTEFEUILLEV1_RECHERCHE_LISTE,
                method: MyWay.Services.MethodEnum.GET,
                withHeaders: true,
                params: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };
            return this.serviceAgentExtended.sendRequest(requete);
        }
    }


    /**
     * Interface représentant un objet pour la méthode GET
     */
    export interface IRecherchePortefeuilleQuery {
        codeEtablissement: string;
        IdentifianElementStructure: number;
        typeRecherche: string;
    }

    /**
     * Interface représentant un objet pour la méthode GET
     */
    export interface IListeRecherchePortefeuilleQuery {
        codeEtablissement: string;
        IdentifianElementStructure: number;
    }

    /**
     * Interface de la classe CorporateTiersLiesService
     */
    export interface IRecherchePortefeuilleService {
        getPortefeuilles(
            query: IRecherchePortefeuilleQuery): ng.IPromise<Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche>;
        getlistePortefeuillesParEds(
            query: IListeRecherchePortefeuilleQuery): ng.IPromise<Modeles.Rest.PortefeuilleV1.recherche.IListePortefeuille>;
    }

    app.service("RecherchePortefeuilleService", RecherchePortefeuilleService);
}  