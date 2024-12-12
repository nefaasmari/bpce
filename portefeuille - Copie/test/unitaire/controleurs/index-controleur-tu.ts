module Portefeuille.Tests.Controleurs {
    "use strict";

    // Définition des variables
    let IndexControleur;

    let $scope: ng.IScope;
    let serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
    let $location: ng.ILocationService;
    let LisaApplication: Portefeuille.Services.Application.ILisaApplication;
    let ContexteService: Portefeuille.Services.Application.IContexteService;
    let PortefeuilleService: Portefeuille.Services.Application.IPortefeuilleService;
    let EventService: Portefeuille.Services.Application.IEventService;
    let PopupService: Portefeuille.Services.Application.IPopupService;

    let mockService: myway.mockTU.MockService;
    let $q: ng.IQService;

    describe("IndexControleur", () => {
        beforeEach(module("portefeuille"));

        beforeEach(() => {
            angular.mock.inject(
                (
                    _$rootScope_: ng.IRootScopeService,
                    _serviceAgentExtended_: MyWay.Services.ServiceAgentExtended,
                    _$location_: ng.ILocationService,
                    _LisaApplication_: Portefeuille.Services.Application.ILisaApplication,
                    _ContexteService_: Portefeuille.Services.Application.IContexteService,
                    _PortefeuilleService_: Portefeuille.Services.Application.IPortefeuilleService,
                    _EventService_: Portefeuille.Services.Application.IEventService,
                    _PopupService_: Portefeuille.Services.Application.IPopupService,
                    _$q_: ng.IQService
                ) => {
                    $scope = _$rootScope_.$new();
                    serviceAgentExtended = _serviceAgentExtended_;
                    $location = _$location_;
                    LisaApplication = _LisaApplication_;
                    ContexteService = _ContexteService_;
                    PortefeuilleService = _PortefeuilleService_;
                    EventService = _EventService_;
                    PopupService = _PopupService_;
                    $q = _$q_;
                });

            mockService = new myway.mockTU.MockService($q);

            $scope.$apply();

            angular.mock.inject((_$controller_: ng.IControllerService) => {
                IndexControleur = _$controller_("IndexControleur", {
                    $scope: $scope,
                    serviceAgentExtended: serviceAgentExtended,
                    $location: $location,
                    LisaApplication: LisaApplication,
                    ContexteService: ContexteService,
                    PortefeuilleService: PortefeuilleService,
                    EventService: EventService
                });
            });

        });

        it("doit être défini", () => {
            expect(IndexControleur).toBeDefined();
        });

        //Test de la methode quitter
        describe("Test de la methode quitter", () => {
            beforeEach(() => {
                // mockService.creerMock(LisaApplication, "next", true, "reponse");
            });

            it("Appel de la methode lisaApplication.next", () => {
                mockService.creerMock(serviceAgentExtended, "removeFromSharedContext", true, "reponse");
                IndexControleur.quitter();
                // expect(LisaApplication.next).toHaveBeenCalledWith(Constantes.CodeProcessusLisa.CODE_LISA_SORTIE, "");
                // expect(ContexteService.supprimerContexteDevenuInutile).toHaveBeenCalled();
            });
        });
    });
}