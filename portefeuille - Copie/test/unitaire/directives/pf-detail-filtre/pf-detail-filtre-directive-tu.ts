module Portefeuille.Tests.Directives {
    "use strict";

    let $scope: ng.IScope;
    let element: ng.IAugmentedJQuery;
    let $compile: ng.ICompileService;

    let sut: Portefeuille.Controleurs.PfDetailFiltreControleur;
    let sutPrivate: any;

    describe("Test de la directive pf-detail-filtre - Initialisation et compilation", () => {

        beforeEach(() => {
            angular.mock.module("##NOM-MODULE##");

            angular.mock.inject(
                (
                    $injector,
                    _$compile_: ng.ICompileService,
                    _$rootScope_: ng.IRootScopeService,
                    _$q_: ng.IQService
                ) => {
                    $compile = _$compile_;
                    $scope = _$rootScope_;
                });

            // Données d'entrée de la directive
            let $scopePrivate: any = $scope;
            $scopePrivate.listeFiltres = [];

            let aCompiler = '<mw-pf-detail-filtre ';
            aCompiler += 'liste-filtres="listeFiltres" ';
            aCompiler += '></mw-pf-detail-filtre>';

            element = $compile(aCompiler)($scope);

            $scope.$digest();

            sut = element.controller("mwPfDetailFiltre");
            sutPrivate = sut;

            // Mise en place des espions
        });

        it("Compilation directive mw-pf-detail-filtre", () => {
            expect(element).toBeDefined();
            expect(element[0].tagName).toBe("MW-PF-DETAIL-FILTRE");
            expect(sut).toBeDefined();
        });

        describe("Test de la methode getTxtFiltre", () => {
            it("Test avec indicateur type TEXTE", () => {
                let result = sut.getTxtFiltre(Mocks.FILTRE_TYPE_TEXTE);
                expect(result).toBe("Marché = [MEES Santé, Pro AC]");
            });

            it("Test avec indicateur type NOMBRE avec comparateur SUPERIEUR", () => {
                let filtre: Modeles.Application.IFiltre = Mocks.FILTRE_TYPE_NOMBRE_VAL_UNIQUE;
                filtre.comparateur = Enum.Filtre.COMPARATEUR.SUPERIEUR;
                let result = sut.getTxtFiltre(filtre);
                expect(result).toBe("CA/Budget  > 1 000 k€");
            });

            it("Test avec indicateur type NOMBRE avec comparateur INFERIEUR", () => {
                let filtre: Modeles.Application.IFiltre = Mocks.FILTRE_TYPE_NOMBRE_VAL_UNIQUE;
                filtre.comparateur = Enum.Filtre.COMPARATEUR.INFERIEUR;
                let result = sut.getTxtFiltre(filtre);
                expect(result).toBe("CA/Budget  < 1 000 k€");
            });

            it("Test avec indicateur type NOMBRE avec comparateur EGALE", () => {
                let filtre: Modeles.Application.IFiltre = Mocks.FILTRE_TYPE_NOMBRE_VAL_UNIQUE;
                filtre.comparateur = Enum.Filtre.COMPARATEUR.EGALE;
                let result = sut.getTxtFiltre(filtre);
                expect(result).toBe("CA/Budget  = 1 000 k€");
            });

            it("Test avec indicateur type MONTANT avec comparateur ENTRE", () => {
                let filtre: Modeles.Application.IFiltre = Mocks.FILTRE_TYPE_MONTANT_VAL_MULTIPLE;
                filtre.comparateur = Enum.Filtre.COMPARATEUR.ENTRE;
                let result = sut.getTxtFiltre(filtre);
                expect(result).toBe("CA/Budget  Entre 10 k€ et 10 000 k€");
            });

            it("Test avec indicateur type MONTANT avec comparateur null", () => {
                let filtre: Modeles.Application.IFiltre = Mocks.FILTRE_TYPE_MONTANT_VAL_MULTIPLE;
                filtre.comparateur = null;
                let result = sut.getTxtFiltre(filtre);
                expect(result).toBe("");
            });
        });
    });
}