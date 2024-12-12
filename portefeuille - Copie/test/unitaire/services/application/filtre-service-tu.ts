module Portefeuille.Tests.Services.Application {
    "use strict";

    describe("FiltreService", () => {
        let sut: Portefeuille.Services.Application.IFiltreService;
        let $q: ng.IQService;
        let $timeout: ng.ITimeoutService;
        let eventService: Portefeuille.Services.Application.IEventService;

        beforeEach(() => {
            angular.mock.module("##NOM-MODULE##");
            angular.mock.inject((
                $injector,
                _$q_: ng.IQService,
                _$timeout_: ng.ITimeoutService
            ) => {
                $q = _$q_;
                $timeout = _$timeout_;
                sut = $injector.get(Portefeuille.Constantes.Inject.Services.filtreService);
                eventService = $injector.get(Portefeuille.Constantes.Inject.Services.eventService);
            });
        });

        it("sut must be defined", () => {
            expect(sut).toBeDefined();
        });

        describe("filtrerListeClients", () => {
            it("Test avec listeFiltres non vide", () => {
                let listeFiltres = Mocks.LISTE_FILTRES_POUR_CLIENTS;
                let listeDeClient = Mocks.LISTE_CLIENTS;
                let listeResultatFiltre = [];
                spyOn(sut, "creerTableauResultatsFiltre").and.returnValue(listeResultatFiltre);
                spyOn(sut, "estConformeAuxCriteres").and.returnValue(true);
                expect(sut.filtrerListeClients(listeDeClient, listeFiltres)).toEqual(listeDeClient);
            });
            it("Test avec listeFiltres vide", () => {
                let listeFiltres = [];
                let listeDeClient = [];
                expect(sut.filtrerListeClients(listeDeClient, listeFiltres)).toBe(listeDeClient);
            });
        });

        describe("filtrerListeRelationsEco", () => {
            it("Test avec listeFiltres non vide", () => {
                let listeFiltres = Mocks.LISTE_FILTRES_POUR_RELATION_ECO;
                let listeRelationEco = Mocks.LISTE_RELATION_ECO;
                let listeResultatFiltre = [];
                spyOn(sut, "creerTableauResultatsFiltre").and.returnValue(listeResultatFiltre);
                spyOn(sut, "estConformeAuxCriteres").and.returnValue(true);
                expect(sut.filtrerListeRelationsEco(listeRelationEco, listeFiltres)).toEqual(listeRelationEco);
            });
            it("Test avec listeFiltres vide", () => {
                let listeFiltres = [];
                let listeDeRelationEco = [];
                expect(sut.filtrerListeRelationsEco(listeDeRelationEco, listeFiltres)).toBe(listeDeRelationEco);
            });
        });

    });
}