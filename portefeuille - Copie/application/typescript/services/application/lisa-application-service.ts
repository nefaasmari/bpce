/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer LISA en LOCALHOST/DUA
     */
    class LisaApplication implements ILisaApplication {
        public static CLASS_NAME = "LisaApplication";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(LisaApplication.CLASS_NAME);
        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Angular.$window,
            Constantes.Inject.Angular.$q
        ];

        /**
         * Constructeur
         * @param serviceAgentExtended
         * @param $location
         * @param $window
         * @param $q
         */
        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $location: ng.ILocationService,
            private $window: ng.IWindowService,
            private $q: ng.IQService) {
        }

        /**
         * Gestion du routage LISA
         * @param valeurSortie
         * @param urlLocal
         */
        /* istanbul ignore next */
        public next(valeurSortie: number, urlLocal: string): ng.IPromise<void> {
            if (this.$location.host() === "localhost") {
                // En local
                return <ng.IPromise<void>>this.naviguerHorsLisa(urlLocal);
            } else {
                return <ng.IPromise<void>>this.serviceAgentExtended.Lisa.Next(valeurSortie).catch((erreur: MyWay.Services.Erreur) => {
                    if (Constantes.Token.TOKEN_ENVIRONNEMENT === Constantes.Token.TOKEN_ENVIRONNEMENT_VALEUR_DUA) {
                        LisaApplication.logger.debug("Pas de LISA et en DUA");
                        // Revient à naviguer en local
                        return this.naviguerHorsLisa(urlLocal);
                    } else {
                        LisaApplication.logger.debug("Pas de LISA et pas en DUA");
                        //Lisa KO ET pas en local => Erreur à remonter
                        return this.$q.reject(erreur);
                    }
                });
            }
        }

        /**
         * Gestion du routage Hors LISA
         * @param urlLocal
         */
        /* istanbul ignore next */
        private naviguerHorsLisa(urlLocal: string): ng.IPromise<void> {
            if (urlLocal && urlLocal.length > 0) {
                if (urlLocal.length > 4 && urlLocal.substr(0, 5) === "http:") {
                    return this.$q.when().then(() => {
                        this.$window.location.href = urlLocal;
                    });
                } else {
                    return this.$q.when().then(() => {
                        this.$location.path(urlLocal);
                    });
                }
            } else {
                return this.$q.reject(new MyWay.Services.Erreur(": Navigation locale impossible. Vérifier le paramétrage LISA."));
            }
        }
    }

    /**
     * Interface de la classe LisaApplication
     */
    export interface ILisaApplication {
        next(valeurSortie: number, urlLocal: string): ng.IPromise<void>;
    }

    app.service("LisaApplication", LisaApplication);
}  