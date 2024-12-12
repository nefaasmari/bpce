module Portefeuille.Tests.Directives {
    "use strict";

    let $scope: ng.IScope;
    let element: ng.IAugmentedJQuery;
    let $compile: ng.ICompileService;

    let sut: Portefeuille.Controleurs.PfTuilePanierControleur;
    let sutPrivate: any;

    describe("Test de la directive pf-tuile-panier - Initialisation et compilation", () => {

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
            $scopePrivate.tuilePanierSettings = Mocks.ModalePaniers.TUILE_PANIER_SETTINGS;
            $scopePrivate.listeTuileCatalogueSettings = [];
            $scopePrivate.listeTuilePanierSettings = [];
            $scopePrivate.listeFiltresClients = [];
            $scopePrivate.listeFiltresRelationEco = [];

            let aCompiler = '<mw-pf-tuile-panier ';
            aCompiler += 'tuile-panier-settings="tuilePanierSettings" ';
            aCompiler += 'liste-tuile-catalogue-settings="listeTuileCatalogueSettings" ';
            aCompiler += 'liste-tuile-panier-settings="listeTuilePanierSettings" ';
            aCompiler += 'liste-filtres-clients="listeFiltresClients" ';
            aCompiler += 'liste-filtres-relation-eco="listeFiltresRelationEco" ';
            aCompiler += '></mw-pf-tuile-panier>';

            element = $compile(aCompiler)($scope);

            $scope.$digest();

            sut = element.controller("mwPfTuilePanier");
            sutPrivate = sut;

            // Mise en place des espions
            spyOn(sutPrivate.modalePaniersService, "afficherDropPoubelle").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "cacherDropPoubelle").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "activerDropTuilesPanier").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "desactiverDropTuilesPanier").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "desactiverDropPanier").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "afficherMessageAvertissementFiltre").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "rafraichirListeTuileCatalogueSettings").and.returnValue("OK");
            spyOn(sutPrivate.modalePaniersService, "supprimerIndicateurPanier").and.returnValue("OK");
            spyOn(sutPrivate.$scope, "$apply").and.returnValue("OK");
        });

        it("Compilation directive mw-pf-tuile-panier", () => {
            expect(element).toBeDefined();
            expect(element[0].tagName).toBe("MW-PF-TUILE-PANIER");
            expect(sut).toBeDefined();
        });

        describe("Test de la methode dragStartBeforeEvent", () => {
            it("Test nominal", () => {
                sutPrivate.dragStartBeforeEvent();
                expect(sutPrivate.modalePaniersService.activerDropTuilesPanier).toHaveBeenCalledWith(sut.listeTuilePanierSettings);
            });
        });

        describe("Test de la methode dragEndBeforeEvent", () => {
            it("Test nominal", () => {
                sutPrivate.dragEndBeforeEvent();
                expect(sutPrivate.modalePaniersService.desactiverDropTuilesPanier).toHaveBeenCalledWith(sut.listeTuilePanierSettings);
            });
        });

        describe("Test de la methode indicateurPanierDeposeEvent", () => {
            let tuilePanierSettings: Modeles.Application.ITuilePanierSettings;
            let tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings

            beforeEach(() => {
                tuilePanierSettings = angular.copy(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                tuilePanierSettings.dropSettings = <Modeles.Application.IDropSettings>{};
                tuileCatalogueSettings = Mocks.ModalePaniers.TUILE_CATALOGUE_SETTINGS;
                sut.listeTuilePanierSettings = [];
                for (let i = 0; i < Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX - 1; i++) {
                    sut.listeTuilePanierSettings.push(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                }
                sut.listeTuileCatalogueSettings = [];
                sut.listeTuileCatalogueSettings.push(tuileCatalogueSettings);
            });

            it("Test avec une tuile panier en entrée", () => {
                sut.indicateurPanierDeposeEvent(tuilePanierSettings);
                expect(sutPrivate.$scope.$apply).toHaveBeenCalled();
            });

            it("Test avec une tuile catalogue en entrée", () => {
                sut.indicateurPanierDeposeEvent(tuileCatalogueSettings);
                expect(sutPrivate.modalePaniersService.rafraichirListeTuileCatalogueSettings).toHaveBeenCalled();
            });
        });

        describe("Test de la methode afficherMarquage", () => {
            it("Test avec attribut estUniquementVueClients = false", () => {
                sut.tuilePanierSettings.indicateur.indicateur.estUniquementVueClients = false;
                expect(sut.afficherMarquage()).toBeFalsy();
            });
        });

        describe("Test de la methode nomMarquage", () => {
            it("Test avec attribut estUniquementVueClients = false", () => {
                sut.tuilePanierSettings.indicateur.indicateur.estUniquementVueClients = false;
                expect(sut.nomMarquage()).toBe(Constantes.ModalePaniers.TUILE_NOM_MARQUAGE_VIDE);
            });
        });

        describe("Test de la methode supprimer", () => {
            it("Test nominal", () => {
                sut.supprimer();
                expect(sutPrivate.modalePaniersService.supprimerIndicateurPanier).toHaveBeenCalled();
            });
        });

        describe("Test de la methode deplacerAGauche", () => {
            let tuilePanierSettings: Modeles.Application.ITuilePanierSettings;

            beforeEach(() => {
                tuilePanierSettings = angular.copy(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                sut.tuilePanierSettings = tuilePanierSettings;
                sut.listeTuilePanierSettings.push(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                sut.listeTuilePanierSettings.push(tuilePanierSettings);
            });

            it("Test nominal", () => {
                sut.deplacerAGauche();
                expect(sut.listeTuilePanierSettings[0]).toBe(tuilePanierSettings);
            });
        });

        describe("Test de la methode deplacerADroite", () => {
            let tuilePanierSettings: Modeles.Application.ITuilePanierSettings;

            beforeEach(() => {
                tuilePanierSettings = angular.copy(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
                sut.tuilePanierSettings = tuilePanierSettings;
                sut.listeTuilePanierSettings.push(tuilePanierSettings);
                sut.listeTuilePanierSettings.push(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS);
            });

            it("Test nominal", () => {
                sut.deplacerADroite();
                expect(sut.listeTuilePanierSettings[1]).toBe(tuilePanierSettings);
            });
        });

        describe("Test de la methode afficherFlecheGauche", () => {
            it("Test nominal", () => {
                expect(sut.afficherFlecheGauche()).toBeFalsy();
            });

            it("Test estEnEdition = true", () => {
                sut.tuilePanierSettings.estEnEdition = true;
                expect(sut.afficherFlecheGauche()).toBeTruthy();
            });

            it("Test estEnEdition = true ET la tuile est à la première position", () => {
                sut.tuilePanierSettings.estEnEdition = true;
                sut.listeTuilePanierSettings.push(sut.tuilePanierSettings);
                expect(sut.afficherFlecheGauche()).toBeFalsy();
            });
        });

        describe("Test de la methode afficherFlecheDroite", () => {
            it("Test estEnEdition = true ET la tuile est à la première position", () => {
                sut.tuilePanierSettings.estEnEdition = true;
                sut.listeTuilePanierSettings.push(sut.tuilePanierSettings);
                sut.listeTuilePanierSettings.push(angular.copy(Mocks.ModalePaniers.TUILE_PANIER_SETTINGS));
                expect(sut.afficherFlecheDroite()).toBeTruthy();
            });
        });
    });
}