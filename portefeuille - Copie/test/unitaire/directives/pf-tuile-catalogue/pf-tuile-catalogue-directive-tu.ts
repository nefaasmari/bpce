module Portefeuille.Tests.Directives {
    "use strict";

    let $scope: ng.IScope;
    let element: ng.IAugmentedJQuery;
    let $compile: ng.ICompileService;

    let sut: Portefeuille.Controleurs.PfTuileCatalogueControleur;
    let sutPrivate: any;

    describe("Test de la directive pf-tuile-catalogue - Initialisation et compilation", () => {

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
            $scopePrivate.tuileCatalogueSettings = Mocks.ModalePaniers.TUILE_CATALOGUE_SETTINGS;
            $scopePrivate.listeTuileCatalogueSettings = [];
            $scopePrivate.listeTuilePanierSettings = [];
            $scopePrivate.listeFiltresClients = [];
            $scopePrivate.listeFiltresRelationEco = [];

            let aCompiler = '<mw-pf-tuile-catalogue ';
            aCompiler += 'tuile-catalogue-settings="tuileCatalogueSettings" ';
            aCompiler += 'liste-tuile-catalogue-settings="listeTuileCatalogueSettings" ';
            aCompiler += 'liste-tuile-panier-settings="listeTuilePanierSettings" ';
            aCompiler += 'liste-filtres-clients="listeFiltresClients" ';
            aCompiler += 'liste-filtres-relation-eco="listeFiltresRelationEco" ';
            aCompiler += '></mw-pf-tuile-catalogue>';

            element = $compile(aCompiler)($scope);

            $scope.$digest();

            sut = element.controller("mwPfTuileCatalogue");
            sutPrivate = sut;

            // Mise en place des espions
            spyOn(sutPrivate.modalePaniersService, "activerDropPanier").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "desactiverDropPanier").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "activerDropTuilesPanier").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "desactiverDropTuilesPanier").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "cacherBoutonValider").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "afficherBoutonValider").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "afficherMessageAvertissementFiltre").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "rafraichirListeTuileCatalogueSettings").and.returnValue("OK");
        });

        it("Compilation directive mw-pf-tuile-catalogue", () => {
            expect(element).toBeDefined();
            expect(element[0].tagName).toBe("MW-PF-TUILE-CATALOGUE");
            expect(sut).toBeDefined();
        });

        describe("Test de la methode initialiser", () => {
            it("listeTuilePanierSettings.length = NOMBRE_INDICATEUR_MAX ET tuileCatalogueSettings.indicateur.choisi = FALSE", () => {
                sut.tuileCatalogueSettings.indicateur.choisi = false;
                sut.listeTuilePanierSettings = [];
                for (let i = 0; i < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX; i++) {
                    sut.listeTuilePanierSettings.push(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                }
                sutPrivate.initialiser();
                expect(sut.tuileCatalogueSettings.dragSettings.estActiver).toBeFalsy();
            });
        });

        describe("Test de la methode dragStartBeforeEvent", () => {
            it("Test nominal", () => {
                sutPrivate.dragStartBeforeEvent();
                expect(sutPrivate.modalePaniersService.activerDropPanier).toHaveBeenCalled();
            });

            it("Test avec listeTuilePanierSettings.length = NOMBRE_INDICATEUR_MAX - 1", () => {
                sut.listeTuilePanierSettings = [];
                for (let i = 0; i < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX - 1; i++) {
                    sut.listeTuilePanierSettings.push(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                }
                sutPrivate.dragStartBeforeEvent();
                expect(sutPrivate.modalePaniersService.cacherBoutonValider).toHaveBeenCalled();
            });
        });

        describe("Test de la methode dragEndBeforeEvent", () => {
            it("Test nominal", () => {
                sutPrivate.dragEndBeforeEvent();
                expect(sutPrivate.modalePaniersService.desactiverDropPanier).toHaveBeenCalled();
            });

            it("Test avec listeTuilePanierSettings.length = NOMBRE_INDICATEUR_MAX - 1", () => {
                sut.listeTuilePanierSettings = [];
                for (let i = 0; i < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX - 1; i++) {
                    sut.listeTuilePanierSettings.push(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                }
                sutPrivate.dragEndBeforeEvent();
                expect(sutPrivate.modalePaniersService.afficherBoutonValider).toHaveBeenCalled();
            });
        });

        describe("Test de la methode afficherMarquage", () => {
            it("Test avec choisi = false ET estUniquementVueClients = false", () => {
                sut.tuileCatalogueSettings.indicateur.choisi = false;
                sut.tuileCatalogueSettings.indicateur.indicateur.estUniquementVueClients = false;
                expect(sut.afficherMarquage()).toBeFalsy();
            });
        });

        describe("Test de la methode nomMarquage ", () => {
            it("Test avec choisi = false ET estUniquementVueClients = true", () => {
                sut.tuileCatalogueSettings.indicateur.choisi = false;
                sut.tuileCatalogueSettings.indicateur.indicateur.estUniquementVueClients = true;
                expect(sut.nomMarquage()).toBe(Constantes.ModalePaniers.TUILE_NOM_MARQUAGE_CLIENT_PROSPECT);
            });
        });

        describe("Test de la methode ajouter", () => {
            it("Test nominal", () => {
                sut.ajouter();
                expect(sutPrivate.modalePaniersService.rafraichirListeTuileCatalogueSettings).toHaveBeenCalled();
            });

            it("Test avec listeTuilePanierSettings.length = NOMBRE_INDICATEUR_MAX - 1 ET listeTuileCatalogueSettings non vide", () => {
                sut.listeTuilePanierSettings = [];
                for (let i = 0; i < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX - 1; i++) {
                    sut.listeTuilePanierSettings.push(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                }
                sut.listeTuileCatalogueSettings = [];
                sut.listeTuileCatalogueSettings.push(Mocks.ModalePaniers.TUILE_CATALOGUE_SETTINGS);
                sut.ajouter();
                expect(sutPrivate.modalePaniersService.cacherBoutonValider).toHaveBeenCalled();
                expect(sutPrivate.modalePaniersService.rafraichirListeTuileCatalogueSettings).toHaveBeenCalled();
            });
        });
    });
}