module Portefeuille.Tests.Controleurs {
    "use strict";

    // Définition des variables
    let PortefeuilleControleur;

    let $scope: ng.IScope;
    let serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
    let $location: ng.ILocationService;
    let LisaApplication: Portefeuille.Services.Application.ILisaApplication;
    let ContexteService: Portefeuille.Services.Application.IContexteService;

    let mockService: myway.mockTU.MockService;
    let $q: ng.IQService;

    describe("PortefeuilleControleur", () => {
        beforeEach(module("portefeuille"));

        beforeEach(() => {
            angular.mock.inject(
                (
                    _$rootScope_: ng.IRootScopeService,
                    _serviceAgentExtended_: MyWay.Services.ServiceAgentExtended,
                    _$location_: ng.ILocationService,
                    _LisaApplication_: Portefeuille.Services.Application.ILisaApplication,
                    _ContexteService_: Portefeuille.Services.Application.IContexteService,
                    _$q_: ng.IQService
                ) => {
                    $scope = _$rootScope_.$new();
                    serviceAgentExtended = _serviceAgentExtended_;
                    $location = _$location_;
                    LisaApplication = _LisaApplication_;
                    ContexteService = _ContexteService_;
                    $q = _$q_;
                });

            mockService = new myway.mockTU.MockService($q);

            $scope.$apply();

            angular.mock.inject((_$controller_: ng.IControllerService) => {
                PortefeuilleControleur = _$controller_("PortefeuilleControleur", {
                    $scope: $scope,
                    serviceAgentExtended: serviceAgentExtended,
                    $location: $location,
                    LisaApplication: LisaApplication,
                    ContexteService: ContexteService
                });
            });

        });

        it("doit être défini", () => {
            expect(PortefeuilleControleur).toBeDefined();
        });

        ////Test de la methode accederPageListeClients => COPIER / COLLER
        //describe("Test de la methode accederPageListeClients", () => {
        //    beforeEach(() => {
        //        mockService.creerMock(LisaApplication, "next", true, "reponse");
        //    });

        //    it("Appel de la methode lisaApplication.next", () => {
        //        PortefeuilleControleur.accederPageListeClients();
        //        expect(LisaApplication.next).toHaveBeenCalledWith(Constantes.CodeProcessusLisa.CODE_LISA_ACCES_CLIENTS, Constantes.Url.CLIENTS);
        //    });
        //});
    });
}