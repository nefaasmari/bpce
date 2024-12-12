module Portefeuille.Tests.Controleurs {
    "use strict";

    describe("ModalePaniersControleur", () => {

        let sut: Portefeuille.Controleurs.ModalePaniersControleur;
        let $q: ng.IQService;
        let $timeout: ng.ITimeoutService;

        // Injection dans le controleur
        let $scope: ng.IScope;
        let modalePaniersService: Portefeuille.Services.Application.IModalePaniersService;
        let $modalInstance: angular.ui.bootstrap.IModalServiceInstance;
        let data: Modeles.Application.IPopupData<any>;
        let preferencesService: Portefeuille.Services.Application.IPreferencesService;
        let popupService: Portefeuille.Services.Application.IPopupService;
        let indicateurService: Portefeuille.Services.Application.IIndicateurService;
        let listeClientsService: Portefeuille.Services.Application.IListeClientsService;

        let getSut: () => Portefeuille.Controleurs.ModalePaniersControleur;

        beforeEach(() => {
            angular.mock.module("##NOM-MODULE##");

            // Mock pour $modalInstance
            let modalInstanceMock = {
                close: jasmine.createSpy("$modalInstance.close"),
                dismiss: jasmine.createSpy("$modalInstance.dismiss")
            };

            // Mock pour data
            let dataMock = {
                model: {
                    listeTotaleIndicateurs: Mocks.ModalePaniers.LISTE_TOTALE_INDICATEURS,
                    listePaniers: Mocks.ModalePaniers.LISTE_PANIERS,
                    listeFiltresClients: Mocks.ModalePaniers.LISTE_FILTRES_CLIENTS,
                    listeFiltresRelationEco: Mocks.ModalePaniers.LISTE_FILTRES_RELATION_ECO
                }
            };

            module(($provide) => {
                $provide.value("$modalInstance", modalInstanceMock);
                $provide.value("data", dataMock);
            });

            angular.mock.inject((
                $injector,
                _$q_: ng.IQService,
                _$timeout_: ng.ITimeoutService,
                _$rootScope_: ng.IRootScopeService,
                _serviceAgentExtended_: MyWay.Services.ServiceAgentExtended
            ) => {
                $q = _$q_;
                $timeout = _$timeout_;
                $scope = _$rootScope_.$new();
                $modalInstance = $injector.get(Constantes.Inject.Angular.$modalInstance);
                modalePaniersService = $injector.get(Constantes.Inject.Services.modalePaniersService);
                data = $injector.get(Constantes.Inject.MyWay.data);
                preferencesService = $injector.get(Constantes.Inject.Services.preferencesService);
                popupService = $injector.get(Constantes.Inject.Services.popupService);
                indicateurService = $injector.get(Constantes.Inject.Services.indicateurService);
                listeClientsService = $injector.get(Constantes.Inject.Services.listeClientsService);
            });

            angular.mock.inject((_$controller_: ng.IControllerService) => {
                getSut = () => {
                    return _$controller_("ModalePaniersControleur", {
                        $scope: $scope,
                        modalePaniersService: modalePaniersService,
                        $modalInstance: $modalInstance,
                        data: data,
                        preferencesService: preferencesService,
                        popupService: popupService,
                        indicateurService: indicateurService,
                        listeClientsService: listeClientsService,
                        $q: $q
                    })
                };
            });
        });

        describe("Initialisation du controleur", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("doit être défini", () => {
                expect(sut).toBeDefined();
            });
        });

        describe("Test de la méthode initialiser", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test avec un nombre d'indicateur max", () => {
                sut.listePaniers = Mocks.ModalePaniers.LISTE_PANIERS_MAX;
                (<any>sut).initialiser();
                expect(sut.estAfficherBoutonAjouter).toBeFalsy();
            });
        });

        describe("Test de la méthode panierDeposeEvent", () => {
            beforeEach(() => {
                spyOn(modalePaniersService, "desactiverDropTuilesPanier").and.returnValue("OK");
                sut = getSut();
                sut.panierDropSettings.desactiverDragOver = function () { };
            });

            it("Test nominal", () => {
                let tailleBefore = sut.listeTuilePanierSettings.length;
                sut.panierDeposeEvent(sut.listeTuileCatalogueSettings[0]);
                expect(sut.listeTuilePanierSettings.length).toEqual(tailleBefore + 1);
            });

            it("Test avec nombre d'indicateur max atteint", () => {
                spyOn(sut, "getNombreIndicateurPanier").and.returnValue(Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX);
                _.forEach(sut.listeTuileCatalogueSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.desactiverDrag = function () { };
                });

                let tailleBefore = sut.listeTuilePanierSettings.length;
                sut.panierDeposeEvent(sut.listeTuileCatalogueSettings[0]);
                expect(sut.listeTuilePanierSettings.length).toEqual(tailleBefore + 1);
            });
        });

        describe("Test de la méthode setEstActiverDropPanier", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test estAfficher = true", () => {
                sut.panierDropSettings.activerDragOver = function () { };
                sut.setEstActiverDropPanier(true);
                expect(sut.estAfficherDropPanier).toEqual(true);
            });

            it("Test estAfficher = false", () => {
                sut.panierDropSettings.desactiverDragOver = function () { };
                sut.setEstActiverDropPanier(false);
                expect(sut.estAfficherDropPanier).toEqual(false);
            });
        });

        describe("Test de la méthode poubelleDeposeEvent", () => {
            beforeEach(() => {
                spyOn(modalePaniersService, "desactiverDropTuilesPanier").and.returnValue("OK");
                sut = getSut();
                sut.poubelleDropSettings.desactiverDragOver = function () { };
            });

            it("Test nominal", () => {
                let tailleBefore = sut.listeTuilePanierSettings.length;
                sut.poubelleDeposeEvent(sut.listeTuilePanierSettings[0]);
                expect(sut.listeTuilePanierSettings.length).toEqual(tailleBefore - 1);
            });

            it("Test mode édition", () => {
                sut.estEnEditionCatalogue = true;
                let tailleBefore = sut.listeTuilePanierSettings.length;
                sut.poubelleDeposeEvent(sut.listeTuilePanierSettings[0]);
                expect(sut.listeTuilePanierSettings.length).toEqual(tailleBefore - 1);
            });
        });

        describe("Test de la méthode setEstAfficherDropPoubelle", () => {
            beforeEach(() => {
                spyOn($scope, "$apply");
                sut = getSut();
            });

            it("Test estAfficher = true", () => {
                sut.poubelleDropSettings.activerDragOver = function () { };
                sut.setEstAfficherDropPoubelle(true);
                expect($scope.$apply).toHaveBeenCalled();
            });

            it("Test estAfficher = false", () => {
                sut.poubelleDropSettings.desactiverDragOver = function () { };
                sut.setEstAfficherDropPoubelle(false);
                expect($scope.$apply).toHaveBeenCalled();
            });
        });

        describe("Test de la méthode activerModeEditionPanier", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test nominal", () => {
                _.forEach(sut.listeTuilePanierSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                    tuile.dragSettings.desactiverDrag = function () { };
                });

                _.forEach(sut.listeTuileCatalogueSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                    tuile.dragSettings.desactiverDrag = function () { };
                });

                sut.activerModeEditionPanier();
                expect(sut.estEnEditionPanier).toBeTruthy();
            });
        });



        describe("Test de la méthode enregistrerEditionPanier", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test nominal", () => {
                _.forEach(sut.listeTuilePanierSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                });

                _.forEach(sut.listeTuileCatalogueSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                    tuile.dragSettings.desactiverDrag = function () { };
                });

                sut.enregistrerEditionPanier();
                expect(sut.estEnEditionPanier).toBeFalsy();
            });
        });

        describe("Test de la méthode annulerEditionPanier", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test nominal", () => {
                _.forEach(sut.listeTuilePanierSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                });

                _.forEach(sut.listeTuileCatalogueSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                    tuile.dragSettings.desactiverDrag = function () { };
                });

                sut.annulerEditionPanier();
                expect(sut.estEnEditionPanier).toBeFalsy();
            });
        });

        describe("Test de la méthode enregistrerEditionCatalogue", () => {
            beforeEach(() => {
                sut = getSut();
                _.forEach(sut.listeTuileCatalogueSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                    tuile.dragSettings.desactiverDrag = function () { };
                });
            });

            it("Test nominal enregistrerEditionCatalogue ", () => {
                sut.enregistrerEditionCatalogue();
                expect(sut.estEnEditionCatalogue).toBeFalsy();
            });

        });

        describe("Test de la méthode annulerEditionCatalogue", () => {
            beforeEach(() => {
                sut = getSut();
                _.forEach(sut.listeTuileCatalogueSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                    tuile.dragSettings.desactiverDrag = function () { };
                });
            });

            it("Test nominal", () => {
                sut.annulerEditionCatalogue();
                expect(sut.estEnEditionCatalogue).toBeFalsy();
            });
        });

        describe("Test de la méthode initFinEditionCatalogue", () => {
            beforeEach(() => {
                sut = getSut();
                _.forEach(sut.listeTuileCatalogueSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.activerDrag = function () { };
                    tuile.dragSettings.desactiverDrag = function () { };
                });
            });

            it("Test nominal", () => {
                (<any>sut).initFinEditionCatalogue();
                expect(sut.estEnEditionCatalogue).toBeFalsy();
            });

            it("Test getNombreIndicateurPanier = Nombre d'indicateur max", () => {
                spyOn(sut, "getNombreIndicateurPanier").and.returnValue(Constantes.ModalePaniers.NOMBRE_INDICATEUR_MAX);
                (<any>sut).initFinEditionCatalogue();
                expect(sut.estEnEditionCatalogue).toBeFalsy();
            });

            it("Test avec un indicateur choisi", () => {
                sut.listeTuileCatalogueSettings[0].indicateur.choisi = true;
                (<any>sut).initFinEditionCatalogue();
                expect(sut.estEnEditionCatalogue).toBeFalsy();
            });
        });

        describe("Test de la méthode remettrePanierInitial", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test nominal", () => {
                spyOn(sut, "rafraichirListeTuileCatalogueSettings");
                (<any>sut).remettrePanierInitial();
                expect(sut.rafraichirListeTuileCatalogueSettings).toHaveBeenCalled();
            });

            it("Test avec listeCodesIndicateursPanierInit avec nombre d'indicateur max atteint", () => {
                sut.listeCodesIndicateursPanierInit = Mocks.ModalePaniers.LISTE_CODES_INDICATEURS_PANIER_INIT;
                spyOn(sut, "rafraichirListeTuileCatalogueSettings");
                (<any>sut).remettrePanierInitial();
                expect(sut.rafraichirListeTuileCatalogueSettings).toHaveBeenCalled();
            });
        });

        describe("Test de la méthode ajouterIndicateur", () => {
            beforeEach(() => {
                sut = getSut();
                _.forEach(sut.listeTuileCatalogueSettings, function (tuile) {
                    tuile.dragSettings = <Modeles.Application.IDragSettings>{};
                    tuile.dragSettings.desactiverDrag = function () { };
                });
            });

            it("Test nominal", () => {
                spyOn(_, "pluck");
                sut.ajouterIndicateur();
                expect(_.pluck).toHaveBeenCalled();
            });
        });

        describe("Test de la méthode majIndicateursClients", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test nominal", () => {
                (<any>sut).majIndicateursClients();
            });

            it("Test avec listeEcartIndicateursParametrables.length = 1", () => {
                spyOn(indicateurService, "getListeEcartIndicateurParametrable").and.returnValue(Mocks.ModalePaniers.LISTE_ECART_INDICATEURS_PARAMETRABLES);
                spyOn(listeClientsService, "majClientsIndicateurs").and.returnValue($q.when("OK"));
                (<any>sut).majIndicateursClients();
            });
        });

        describe("Test de la méthode valider OK", () => {
            beforeEach(() => {
                spyOn(sut, "majIndicateursClients").and.returnValue($q.when("OK"));
                spyOn(preferencesService, "ecrirePaniers").and.returnValue($q.when("OK"));
                sut = getSut();
            });

            it("Test nominal", (done: () => void) => {
                sut.valider().then(() => {
                    expect($modalInstance.close).toHaveBeenCalled();
                    done();
                });

                $timeout.flush();
            });
        });

        describe("Test de la méthode valider KO", () => {
            let expectedErr = {
                codeLibelle: "",
                libelle: ""
            };

            beforeEach(() => {
                spyOn(sut, "majIndicateursClients").and.returnValue($q.reject(expectedErr));
                spyOn(preferencesService, "ecrirePaniers").and.returnValue($q.reject(expectedErr));
                spyOn(popupService, "showErreur");
                sut = getSut();
            });

            it("Test nominal", (done: () => void) => {
                sut.valider().then(() => {
                    expect(popupService.showErreur).toHaveBeenCalled();
                    done();
                });

                $timeout.flush();
            });
        });

        describe("Test de la méthode estValidable", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test nominal", () => {
                expect(sut.estValidable()).toBeFalsy();
            });
        });

        describe("Test de la méthode fermer", () => {
            beforeEach(() => {
                sut = getSut();
            });

            it("Test nominal", () => {
                sut.fermer();
                expect($modalInstance.dismiss).toHaveBeenCalled();
            });
        });
    });
}