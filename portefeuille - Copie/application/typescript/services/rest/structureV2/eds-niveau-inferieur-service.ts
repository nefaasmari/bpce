/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.StructureV2.edsNiveauInferieur {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    class EdsNiveauInferieurService implements IEdsNiveauInferieurService {
        public static CLASS_NAME = "EdsNiveauInferieurService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(EdsNiveauInferieurService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) { }

        public getEdsNiveauInferieur(query: Modeles.Rest.StructureV2.edsniveauinferieur.IEdsniveauinferieurQuery):
            ng.IPromise<Modeles.Rest.StructureV2.edsniveauinferieur.IEdsNiveauInferieur> {
            EdsNiveauInferieurService.logger.info(">>> Appel de la méthode : EdsNiveauInferieurService.getEdsNiveauInferieur <<<");

            let requete = {
                url: Constantes.urlsRest.URL_REST_STRUCTUREV2_EDS_NIVEAU_INFERIEURE,
                method: MyWay.Services.MethodEnum.GET,
                withHeaders: true,
                params: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };

            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    export interface IEdsNiveauInferieurService {
        getEdsNiveauInferieur(query: Modeles.Rest.StructureV2.edsniveauinferieur.IEdsniveauinferieurQuery):
            ng.IPromise<Modeles.Rest.StructureV2.edsniveauinferieur.IEdsNiveauInferieur>;
    }

    app.service("EdsNiveauInferieurService", EdsNiveauInferieurService);
}  