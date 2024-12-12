module Portefeuille.Tests.Services.Application {
    "use strict";

    // Définition des variables
    let InitialisationApplicationService;

    let serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
    let ContexteService: Portefeuille.Services.Application.IContexteService;
    let PopupService: Portefeuille.Services.Application.IPopupService;
    let $q: ng.IQService;
    let $scope: ng.IScope;
    let $location: ng.ILocationService;
    let EventService: Portefeuille.Services.Application.IEventService;
    let HabilitationService: Portefeuille.Services.Application.IHabilitationService;
    let PreferencesService: Portefeuille.Services.Application.IPreferencesService;

    let mockService: myway.mockTU.MockService;

    describe("InitialisationApplicationService", () => {
        beforeEach(module("portefeuille"));

        beforeEach(() => {
            let serviceAgentExtendedMock = {
                init: jasmine.createSpy("serviceAgentExtendedMock.init").and.callFake(() => {
                    let defer = $q.defer();
                    defer.resolve("OK");
                    return defer.promise;
                }),
                Habilitation: {
                    EstHabilite: () => undefined
                },
                getFromContext: () => undefined
            }

            module(($provide) => {
                $provide.value("serviceAgentExtended", serviceAgentExtendedMock);
            })

            angular.mock.inject(
                (
                    _$rootScope_: ng.IRootScopeService,
                    _serviceAgentExtended_: MyWay.Services.ServiceAgentExtended,
                    _$q_: ng.IQService,
                    _InitialisationApplicationService_: Portefeuille.Services.Application.InitialisationApplicationService,
                    _ContexteService_: Portefeuille.Services.Application.IContexteService,
                    _PopupService_: Portefeuille.Services.Application.IPopupService,
                    _$location_: ng.ILocationService,
                    _EventService_: Portefeuille.Services.Application.IEventService,
                    _HabilitationService_: Portefeuille.Services.Application.IHabilitationService,
                    _PreferencesService_: Portefeuille.Services.Application.IPreferencesService
                ) => {

                    $scope = _$rootScope_.$new();
                    serviceAgentExtended = _serviceAgentExtended_;
                    $q = _$q_;
                    InitialisationApplicationService = _InitialisationApplicationService_;
                    ContexteService = _ContexteService_;
                    PopupService = _PopupService_;
                    $location = _$location_;
                    EventService = _EventService_;
                    HabilitationService = _HabilitationService_;
                    PreferencesService = _PreferencesService_;
                });


            mockService = new myway.mockTU.MockService($q);
            mockService.creerMock(PopupService, "showErreur", false, "erreur");

            $scope.$apply();
        });

        it("doit être défini", () => {
            expect(InitialisationApplicationService).toBeDefined();
        });

        //Test de la methode initialisation
        describe("Test de la methode initialisation", () => {
            it("cas nominal", () => {
                mockService.creerMock(ContexteService, "getAuthentification", true, "OK");
                mockService.creerMock(ContexteService, "getContexte", true, "OK");
                mockService.creerMock(EventService, "initialiserListePortfeuilleIndexControleur", true, "OK");
                mockService.creerMock(PreferencesService, "completerCreationPaniers", true, "OK");
                mockService.creerMock(MyWay.Services.CoreCommon.ServiceDePromesse, "all", true, "OK");
                mockService.creerMock(serviceAgentExtended.Habilitation, "EstHabilite", true, true);
                mockService.creerMock(serviceAgentExtended, "getFromContext", true, "OK");
                InitialisationApplicationService.initialisation();
                $scope.$apply();
                expect(InitialisationApplicationService.promesseInitialisation).toBeTruthy();
            });

            it("cas promesseInitialisation = true", () => {
                InitialisationApplicationService.promesseInitialisation = true;
                InitialisationApplicationService.initialisation();
                $scope.$apply();
                expect(InitialisationApplicationService.promesseInitialisation).toBeTruthy();
            });

            it("cas ServiceDePromesse.all en erreur", () => {
                mockService.creerMock(ContexteService, "getAuthentification", true, "OK");
                mockService.creerMock(ContexteService, "getContexte", true, "OK");
                mockService.creerMock(PreferencesService, "completerCreationPaniers", true, "OK");
                mockService.creerMockPromesseErreur(MyWay.Services.CoreCommon.ServiceDePromesse, "all", "KO");
                mockService.creerMock(serviceAgentExtended.Habilitation, "EstHabilite", true, true);
                mockService.creerMock(serviceAgentExtended, "getFromContext", true, "OK");

                InitialisationApplicationService.initialisation();
                $scope.$apply();
                expect(PopupService.showErreur).toHaveBeenCalled();
            });

            it("cas contexteService.getAuthentification en erreur", () => {
                mockService.creerMockPromesseErreur(ContexteService, "getAuthentification", "KO");
                InitialisationApplicationService.initialisation();
                $scope.$apply();
                expect(PopupService.showErreur).toHaveBeenCalled();
            });
        });
    });
}