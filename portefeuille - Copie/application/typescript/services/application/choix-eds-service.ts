/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de choix EDS
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer le choix EDS
     */
    class ChoixEdsService implements IChoixEdsService {
        public static CLASS_NAME = "EventService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ChoixEdsService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Angular.$q
        ];

        // Variables utiles

        /**
         * Constructeur
         */
        constructor(
            private contexteService: Services.Application.IContexteService,
            private $q: ng.IQService
        ) { }

        /**
         * Methode permetant de récupérer les caractéristiques agent à partir du modèle MyWay.Model.Agent
         * @param {MyWay.Model.Agent} agent
         * @return {ng.IPromise<Modeles.Application.ICaracteristiquesAgent>}
         */
        public getCaracteristiquesAgent(agent: MyWay.Model.Agent): ng.IPromise<Modeles.Application.ICaracteristiquesAgent> {
            let deferred = this.$q.defer<Modeles.Application.ICaracteristiquesAgent>();

            this.contexteService.getContexte()
                .then((contexte: Modeles.Application.IContexte) => {
                    let caracteristiquesAgent = <Modeles.Application.ICaracteristiquesAgent>{};
                    caracteristiquesAgent.designationAgent = agent.designation;
                    caracteristiquesAgent.identifiantElementStructure = agent.idEds;
                    caracteristiquesAgent.libelleFonction = agent.libelleFonction;
                    caracteristiquesAgent.codeEtablissement = contexte.codeEtablissement;

                    deferred.resolve(caracteristiquesAgent);
                })
                .catch((error: MyWay.Services.Erreur) => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

    /**
     * Interface de la classe EventService
     */
    export interface IChoixEdsService {
        getCaracteristiquesAgent(agent: MyWay.Model.Agent): ng.IPromise<Modeles.Application.ICaracteristiquesAgent>;
    }

    // Déclaration du service
    app.service("ChoixEdsService", ChoixEdsService);
}  