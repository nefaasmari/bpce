module Portefeuille.Tests.Services.Application
{
    "use strict";

    // Définition des variables
    let ContexteService;

    let serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
    let $q: ng.IQService;
    let $scope: ng.IScope;
    let $location: ng.ILocationService;

    let mockService: myway.mockTU.MockService; 

    describe("ContexteService", () =>
    {
        beforeEach(module("portefeuille"));

        beforeEach(() =>
        {
            let serviceAgentExtendedMock = {
                Context: {
                    GetCurrentStepInfo: jasmine.createSpy("serviceAgentExtendedMock.Context.GetCurrentStepInfo").and.callFake(() => {
                        var defer = $q.defer();
                        defer.resolve("OK");
                        return defer.promise;
                    })
                },
                getAuthentificationInfo: jasmine.createSpy("serviceAgentExtendedMock.getAuthentificationInfo").and.callFake(() => {
                    var defer = $q.defer();
                    defer.resolve("toto");
                    return defer.promise;
                }),
                getFromContext: jasmine.createSpy("serviceAgentExtendedMock.getFromContext").and.callFake(() => {
                    var defer = $q.defer();
                    defer.resolve("toto");
                    return defer.promise;
                }),
                addToSharedContext: jasmine.createSpy("serviceAgentExtendedMock.addToSharedContext").and.callFake(() => {
                    var defer = $q.defer();
                    defer.resolve("OK");
                    return defer.promise;
                }),
                addToContext: jasmine.createSpy("serviceAgentExtendedMock.addToContext").and.callFake(() => {
                    var defer = $q.defer();
                    defer.resolve("OK");
                    return defer.promise;
                }),
                sendRequest: jasmine.createSpy("serviceAgentExtendedMock.sendRequest").and.callFake(() => {
                    var defer = $q.defer();
                    defer.resolve("OK");
                    return defer.promise;
                }),
            }
            module(($provide) => {
                $provide.value("serviceAgentExtended", serviceAgentExtendedMock);
            })
            angular.mock.inject(
                ( 
                    _$rootScope_: ng.IRootScopeService,
                    _serviceAgentExtended_: MyWay.Services.ServiceAgentExtended,
                    _$q_: ng.IQService,
                    _ContexteService_: Portefeuille.Services.Application.IContexteService,
                    _$location_: ng.ILocationService
                ) =>
                {

                    $scope = _$rootScope_.$new();
                    serviceAgentExtended = _serviceAgentExtended_;
                    $q = _$q_;
                    ContexteService = _ContexteService_;
                    $location = _$location_;
                });


            mockService = new myway.mockTU.MockService($q);
            mockService.creerMock($q, "when", true, "OK");

            $scope.$apply();
        });

        it("doit être défini", () => {
            expect(ContexteService).toBeDefined();
        });

        //Test de la methode getAuthentification
        describe("Test de la methode getAuthentification", () => {
            it("cas 1er passage", () => {
                ContexteService.getAuthentification();
                $scope.$apply();
                expect(ContexteService.authentificationInfo).toBeDefined();
            }); 
            it("cas authentificationInfo déjà défini", () => {
                ContexteService.authentificationInfo = "defini";
                ContexteService.getAuthentification();
                $scope.$apply();
                expect(ContexteService.authentificationInfo).toBeDefined();
            });  
        });

        //Test de la methode setContexte
        describe("Test de la methode setContexte", () => {

            it("cas contexte non défini et authentificationInfo défini", () => {
                ContexteService.authentificationInfo = Mocks.getAuthentificationInfo();
                ContexteService.setContexte();
                $scope.$apply();
                expect(ContexteService.contexte).toBeDefined();
            });

            it("cas contexte non défini et authentificationInfo non défini", () => {
                ContexteService.contexte = null;
                ContexteService.setContexte();
                $scope.$apply();
                expect(ContexteService.contexte).toBe(null);
            });
        });

        //Test de la methode getContexte
        describe("Test de la methode getContexte", () => {
            it("cas 1er passage", () => {
                mockService.creerMock(ContexteService, "setContexte", true, "OK");
                ContexteService.getContexte();
                $scope.$apply();
                expect(ContexteService.setContexte).toHaveBeenCalled();
            });
            it("cas contexte déjà défini", () => {
                ContexteService.contexte = "defini";
                ContexteService.getContexte();
                $scope.$apply();
                expect(ContexteService.contexte).toBeDefined();
            });
        });

        //Test de la methode getDesignation
        describe("Test de la methode getDesignation", () => {
            it("cas contexte défini", () => {
                ContexteService.contexte = { designation: 1 };
                let resultat = ContexteService.getDesignation();
                expect(resultat).toBe(1);
            });
            it("cas contexte non défini", () => {
                ContexteService.contexte = null;
                let resultat = ContexteService.getDesignation();
                expect(resultat).toBe("");
            });
        });

        //Test de la methode setEdsVisu
        describe("Test de la methode setEdsVisu", () => {
            it("cas contexte défini", () => {
                ContexteService.contexte = {};
                ContexteService.setEdsVisu(1);
                let resultat = ContexteService.contexte.edsVisu;
                expect(resultat).toBe(1);
            });
        });
    });
}