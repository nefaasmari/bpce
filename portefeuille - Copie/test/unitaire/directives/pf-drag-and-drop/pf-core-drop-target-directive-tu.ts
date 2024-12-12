module Portefeuille.Tests.Directives {
    "use strict";

    let $scope: ng.IScope;
    let element: ng.IAugmentedJQuery;
    let $compile: ng.ICompileService;

    let sut: Portefeuille.Controleurs.PfCoreDropTargetControleur;
    let sutPrivate: any;

    describe("Test de la directive pf-core-drop-target - Initialisation et compilation", () => {

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
            $scopePrivate.dropSettings = <Modeles.Application.IDropSettings>{};

            element = $compile('<div mw-pf-core-drop-target drop-settings="dropSettings"></div>')($scope);

            $scope.$digest();

            sut = element.controller("mwPfCoreDropTarget");
            sutPrivate = sut;
        });

        it("Compilation directive mw-pf-core-drop-target", () => {
            expect(element).toBeDefined();
            expect(element[0].attributes[0].name).toBe("mw-pf-core-drop-target");
            expect(sut).toBeDefined();
        });

        describe("Test de la méthode initialiser", () => {
            beforeEach(() => {
                spyOn(sutPrivate.$element, "bind").and.returnValue("OK");
            });

            it("Test avec dropSettings.estActiver = true", () => {
                sut.dropSettings.estActiver = true;
                sutPrivate.initialiser();
                expect(sutPrivate.$element.bind).toHaveBeenCalled();
            });
        });
    });
}