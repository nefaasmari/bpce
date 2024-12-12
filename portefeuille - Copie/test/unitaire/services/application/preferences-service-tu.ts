module Portefeuille.Tests.Services.Application {
    "use strict";

    describe("PreferencesService", () => {
        // Définition des variables
        let sut: Portefeuille.Services.Application.PreferencesService;
        let $q: ng.IQService;
        let $scope: ng.IScope;
        let $timeout: ng.ITimeoutService;
        let serviceAgentMock: any;
        let ContexteService: Portefeuille.Services.Application.IContexteService;
        let mockService: myway.mockTU.MockService;

        beforeEach(() => {
            angular.mock.module("##NOM-MODULE##");

            serviceAgentMock = {
                Preferences: {
                    LirePreference: jasmine.createSpy("serviceAgentMock.Preferences.LirePreference").and.callFake(() => {
                        return $q.when(Mocks.Rest.LIRE_PREFERENCE_PANIER);
                    }),
                    EcrirePreference: jasmine.createSpy("serviceAgentMock.Preferences.EcrirePreference").and.callFake(() => {
                        return $q.when();
                    })
                }
            }

            module(($provide) => {
                $provide.value("serviceAgent", serviceAgentMock);
            });

            angular.mock.inject((
                $injector,
                _$q_: ng.IQService,
                _$timeout_: ng.ITimeoutService,
                _ContexteService_: Portefeuille.Services.Application.IContexteService
            ) => {
                $q = _$q_;
                $timeout = _$timeout_;
                ContexteService = _ContexteService_;
                sut = $injector.get(Portefeuille.Constantes.Inject.Services.preferencesService);
            });

            mockService = new myway.mockTU.MockService($q);
            
            // $scope.$apply();

        });

        it("doit être défini", () => {
            expect(sut).toBeDefined();
        });

        describe("ecrirePanier", () => {

        });

        describe("lirePanier", () => {
            it("lire panier existe", (done: () => void) => {
                mockService.creerMock(ContexteService, "getContexte", true, { "identifiantUser": "123456" });
                mockService.creerMock(sut, "lirePreference", true, "{\"listeCodesIndicateurs\":[\"C\",\"Z\",\"ZG\",\"ZF\",\"ZH\",\"H\"],\"numero\":1,\"nom\":\"Sélection d'indicateurs 1\",\"estDefaut\":true}|{\"listeCodesIndicateurs\":[],\"numero\":2,\"nom\":\"Sélection d'indicateurs 2\",\"estDefaut\":false}|{\"listeCodesIndicateurs\":[],\"numero\":3,\"nom\":\"Sélection d'indicateurs 3\",\"estDefaut\":false}" );
                spyOn(sut, "convertirPanierPreferenceEnApplicatif").and.returnValue(Mocks.LISTE_INDICATEURS_CHOIX);
                let listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType> = Mocks.LISTE_TOTALE_INDICATEURS;
                let expected = Mocks.LISTE_INDICATEURS_CHOIX;
                sut.lirePanierDefaut(listeTotaleIndicateurs).then((panierDefaut: Modeles.Application.IPanier) => {
                    expect(panierDefaut).toEqual(undefined);
                    done();
                });
                $timeout.flush();
            });
        });

        describe("ecrireChoixPortefeuilles", () => {

        });

        describe("convertirPanierPreferenceEnApplicatif", () => {
            let panierPreference: Modeles.Application.IPanierPreferences = Mocks.PANIER_PREFERENCES;
            let listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType> = Mocks.LISTE_TOTALE_INDICATEURS;
            let expected: Modeles.Application.IPanier = Mocks.PANIER;
            let expectedVide: Array<Modeles.Application.IIndicateurChoix> = [];
            let expectedUndefined: any = undefined;

            it("Cas panier null", () => {
                expect(sut.convertirPanierPreferenceEnApplicatif(null, listeTotaleIndicateurs)).toEqual(expectedUndefined);
            });

            it("Cas nominal", () => {
                expect(sut.convertirPanierPreferenceEnApplicatif(panierPreference, listeTotaleIndicateurs)).toEqual(expected);
            });
        });

        describe("convertirPanierApplicatifEnPreference", () => {
            let choixIndicateurs: Array<Portefeuille.Modeles.Application.IIndicateurChoix> = Mocks.LISTE_INDICATEURS_CHOIX;
            let numPanier: number = 1;
            let expected: Modeles.Application.IPanierPreferences = { "numero": 1, "listeCodesIndicateurs": ["A", "B"], "nom": "", "estDefaut": true };

            it("Cas liste choix indicateurs non vide", () => {
                expect(sut.convertirPanierApplicatifEnPreference(choixIndicateurs, numPanier, "", true)).toEqual(expected);
            });
        });

        describe("convertirListePortefeuilleEnPreference", () => {
            let portefeuilles: Array<Portefeuille.Modeles.Application.IPortefeuille> = Mocks.LISTE_PORTEFEUILLES;
            let expected: Array<number> = [0];

            it("Cas portefeuilles non vide", () => {
                expect(sut.convertirListePortefeuilleEnPreference(portefeuilles)).toEqual(expected);
            });
        });
    });
}
