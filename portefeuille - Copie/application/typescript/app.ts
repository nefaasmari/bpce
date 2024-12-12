module Portefeuille {
	"use strict";

	export let app: any = angular.module("##NOM-MODULE##", ["ngRoute",
		"myway.ui", "ui.bootstrap", "ngAnimate", "moduleAgent", "myway.composantAide",
		"myway.comInterdomaine", "myway.comEds", "libPortail", "PdtEntreprise"]);

	let routeResolve = {
		initialisationApplication: ["InitialisationApplicationService",
			/* istanbul ignore next */
			function (initialisationApplicationService: Services.Application.InitialisationApplicationService) {
				return initialisationApplicationService.initialisation();
			}
		]
	};
	
	 app.config(
		[
			"$routeProvider",
			 function ($routeProvider: ng.route.IRouteProvider): void {
				 
				 $routeProvider.when(Constantes.Url.CLIENTS, {
					controller: "ClientsControleur",
					templateUrl: "vues/clients-vue.html",
					controllerAs: "clientsCtrl",
					resolve: routeResolve
				 });

				 $routeProvider.when(Constantes.Url.PORTEFEUILLE, {
					 controller: "PortefeuilleControleur",
					 templateUrl: "vues/portefeuille-vue.html",
					 controllerAs: "portefeuilleCtrl",
					 resolve: routeResolve
				 });

				 $routeProvider.when(Constantes.Url.SELECTION_INDICATEURS, {
					 controller: "SelectionIndicateursControleur",
					 templateUrl: "vues/selection-indicateurs-vue.html",
					 controllerAs: "selectionIndicateursCtrl",
					 resolve: routeResolve
				 });

				 $routeProvider.when(Constantes.Url.BILAN_REVUE, {
					 controller: "BilanRevueControleur",
					 templateUrl: "vues/bilan-revue-vue.html",
					 controllerAs: "bilanRevueCtrl",
					 resolve: routeResolve
				 });

				 $routeProvider.when(Constantes.Url.SAISIE_REVUE, {
					 controller: "SaisieRevueControleur",
					 templateUrl: "vues/saisie-revue-vue.html",
					 controllerAs: "saisieRevueCtrl",
					 resolve: routeResolve
                 });

                 $routeProvider.when(Constantes.Url.BILAN_REVUES_PORTEFEUILLE, {
                     controller: "BilanRevuesPortefeuilleControleur",
                     templateUrl: "vues/bilan-revues-portefeuille-vue.html",
                     controllerAs: "bilanRevuesPortefeuilleCtrl",
                     resolve: routeResolve
                 });

				 $routeProvider.otherwise({
					 templateUrl: "vues/page-non-trouvee.html",
					 resolve: routeResolve
				 });

				 
				 
				 // Non utilisé pour le moment
				 //$routeProvider.when(Constantes.Url.DETAIL_CLIENT, {
				 //    controller: "DetailClientControleur",
				 //    templateUrl: "vues/detail-client-vue.html",
				 //    controllerAs: "detailClientCtrl",
				 //    resolve: routeResolve
				 //});
				 
			 }
		 ]);

	MyWay.Services.AppServiceParameters.Instance().PortalDomain = "##DOMAINE-PORTAIL##";
}