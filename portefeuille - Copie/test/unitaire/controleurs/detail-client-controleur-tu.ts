module Portefeuille.Tests.Controleurs {
    "use strict";

    // Définition des variables
    let DetailClientControleur;

    let $scope: ng.IScope;
    let mockService: myway.mockTU.MockService;
    let $q: ng.IQService;

    describe("DetailClientControleur", () => {
        beforeEach(module("portefeuille"));

        beforeEach(() => {
            angular.mock.inject(
                (
                    _$rootScope_: ng.IRootScopeService,
                    _$q_: ng.IQService
                ) => {
                    $scope = _$rootScope_.$new();
                    $q = _$q_;
                });

            mockService = new myway.mockTU.MockService($q);

            $scope.$apply();

            angular.mock.inject((_$controller_: ng.IControllerService) => {
                DetailClientControleur = _$controller_("DetailClientControleur", {});
            });

        });

        it("doit être défini", () => {
            expect(DetailClientControleur).toBeDefined();
        });
    });
}