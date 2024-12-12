module Portefeuille.Tests.Directives {
    "use strict";

    let $scope: ng.IScope;
    let element: ng.IAugmentedJQuery;
    let $compile: ng.ICompileService;

    let sut: Portefeuille.Controleurs.PfBlocConditionFiltreControleur;
    let sutPrivate: any;

    describe("Test de la directive pf-bloc-condition-filtre - Initialisation et compilation", () => {

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
            $scopePrivate.listeIndicateurs = [];
            $scopePrivate.listeFiltres = Mocks.LISTE_FILTRES_POUR_CLIENTS;
            $scopePrivate.filtre = $scopePrivate.listeFiltres[0];
            $scopePrivate.afficherOperateur = false;
            $scopePrivate.estVueClient = false;

            let aCompiler = '<mw-pf-bloc-condition-filtre ';
            aCompiler += 'liste-indicateurs="listeIndicateurs" ';
            aCompiler += 'liste-filtres="listeFiltres" ';
            aCompiler += 'filtre="filtre" ';
            aCompiler += 'afficher-operateur="afficherOperateur" ';
            aCompiler += 'est-vue-client="estVueClient" ';
            aCompiler += '></mw-pf-bloc-condition-filtre>';

            element = $compile(aCompiler)($scope);

            $scope.$digest();

            sut = element.controller("mwPfBlocConditionFiltre");
            sutPrivate = sut;

            // Mise en place des espions
        });

        it("Compilation directive mw-pf-bloc-condition-filtre", () => {
            expect(element).toBeDefined();
            expect(element[0].tagName).toBe("MW-PF-BLOC-CONDITION-FILTRE");
            expect(sut).toBeDefined();
        });

        describe("Test de la methode selectionIndicateur", () => {
            it("Test nominal", () => {
                sut.selectionIndicateur();
                expect(sutPrivate.dernierIndicateurSelect).toBe(sut.filtre.indicateur);
            });

            it("Test avec estVueClient = true", () => {
                sut.estVueClient = true;
                sut.selectionIndicateur();
                expect(sutPrivate.dernierIndicateurSelect.utilise).toBeTruthy();
            });
        });

/*        describe("Test de la methode indicateurEstDeTypeDate", () => {
            it("Test avec un type date", () => {
                expect(sut.indicateurEstDeTypeDate(Portefeuille.Enum.Indicateur.TYPE.DATE)).toBeTruthy();
            });

            it("Test avec un type montant", () => {
                expect(sut.indicateurEstDeTypeDate(Portefeuille.Enum.Indicateur.TYPE.MONTANT)).toBeFalsy();
            });
        });*/

        describe("Test de la methode supprimerCondition", () => {
            it("Test nominal", () => {
                spyOn(sut.listeFiltres, "splice");
                sut.supprimerCondition();
                expect(sut.listeFiltres.splice).toHaveBeenCalled();
            });

            it("Test avec estVueClient = true", () => {
                sut.estVueClient = true;
                sut.supprimerCondition();
                expect(sut.filtre.indicateur.utilise).toBeFalsy();
            });
        });
    });
}