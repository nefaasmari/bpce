module Portefeuille.Tests.Directives {
    "use strict";

    let $scope: ng.IScope;
    let element: ng.IAugmentedJQuery;
    let $compile: ng.ICompileService;

    let sut: Portefeuille.Controleurs.PfCoreDraggableControleur;
    let sutPrivate: any;

    describe("Test de la directive pf-core-draggable - Initialisation et compilation", () => {

        beforeEach(() => {
            angular.mock.module("##NOM-MODULE##");

            angular.mock.inject(
                (
                    $injector,
                    _$compile_: ng.ICompileService,
                    _$rootScope_: ng.IRootScopeService
                ) => {
                    $compile = _$compile_;
                    $scope = _$rootScope_;
                });

            // Données d'entrée de la directive
            let $scopePrivate: any = $scope;
            $scopePrivate.dragSettings = <Modeles.Application.IDragSettings>{};

            element = $compile('<div mw-pf-core-draggable drag-settings="dragSettings"></div>')($scope);

            $scope.$digest();

            sut = element.controller("mwPfCoreDraggable");
            sutPrivate = sut;
        });

        it("Compilation directive mw-pf-core-draggable", () => {
            expect(element).toBeDefined();
            expect(element[0].attributes[0].name).toBe("mw-pf-core-draggable");
            expect(sut).toBeDefined();
        });
    });
}