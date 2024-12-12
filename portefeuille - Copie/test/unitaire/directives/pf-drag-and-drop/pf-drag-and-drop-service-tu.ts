module Portefeuille.Tests.Services {
    "use strict";

    describe("PfDragAndDropService", () => {

        let sut: Portefeuille.Services.Application.IPfDragAndDropService;
        let $q: ng.IQService;
        let $timeout: ng.ITimeoutService;

        // Injection dans le controleur
        

        beforeEach(() => {
            angular.mock.module("##NOM-MODULE##");

            angular.mock.inject(
                (
                    $injector,
                    _$q_: ng.IQService,
                    _$timeout_: ng.ITimeoutService
                ) => {
                    $q = _$q_;
                    $timeout = _$timeout_;
                    sut = $injector.get(Constantes.Inject.Services.pfDragAndDropService);
                });
        });

        it("doit être definie", () => {
            expect(sut).toBeDefined();
        });

        describe("Test de la méthode getDonnees", () => {
            it("Test nominal", () => {
                (<any>sut).donnees = "DATA";
                expect(sut.getDonnees()).toEqual((<any>sut).donnees);
            });
        });

        describe("Test de la méthode setDonnees", () => {
            it("Test nominal", () => {
                let donnees = "NEW DATA";
                sut.setDonnees(donnees);
                expect(sut.getDonnees()).toEqual(donnees);
            });
        });
    });
}