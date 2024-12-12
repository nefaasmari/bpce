/// <reference path="../../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Rest.PreferenceUtilisateur {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de récupérer les information du corporate
     */
    class PreferenceUtilisateurService implements IPreferenceUtilisateurService {
        public static CLASS_NAME = "RechercheAgentService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PreferenceUtilisateurService.CLASS_NAME);

        //Injection des dépendances
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended
        ];

        //constructeur
        constructor(private serviceAgentExtended: MyWay.Services.ServiceAgentExtended) { }

        public getListePreferences(query: Modeles.Rest.PreferenceUtilisateur.IParametresEntree): ng.IPromise<Array<Modeles.Rest.PreferenceUtilisateur.IPreference>> {
            PreferenceUtilisateurService.logger.info(">>> Appel de la méthode : PreferenceUtilisateurService.getListeCaracteristiquesAgent <<<");

            var requete = {
                url: Constantes.urlsRest.URL_REST_PREFERENCE_UTILISATEUR,
                method: MyWay.Services.MethodEnum.GET,
                withHeaders: true,
                params: query,
                responseType: MyWay.Services.ResponseTypeEnum.JSON
            };

            return this.serviceAgentExtended.sendRequest(requete);
        }
    }

    /**
     * Interface de la classe CorporateTiersLiesService
     */
    export interface IPreferenceUtilisateurService {
        getListePreferences(query: Modeles.Rest.PreferenceUtilisateur.IParametresEntree): ng.IPromise<Array<Modeles.Rest.PreferenceUtilisateur.IPreference>>;
    }

    app.service("PreferenceUtilisateurService", PreferenceUtilisateurService);
}  