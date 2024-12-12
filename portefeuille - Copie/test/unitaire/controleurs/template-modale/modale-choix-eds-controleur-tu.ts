module Portefeuille.Tests.Controleurs {
    "use strict";

    // Définition des variables
    let ModaleChoixEdsControleur: Portefeuille.Controleurs.ModaleChoixEdsControleur;

    let $scope: ng.IScope;
    let $modalInstance: angular.ui.bootstrap.IModalServiceInstance;
    let ChoixEdsService: Portefeuille.Services.Application.IChoixEdsService;
    let PopupService: Portefeuille.Services.Application.IPopupService;

    let mockService: myway.mockTU.MockService;
    let $q: ng.IQService;

    let ChoixUtilisateurService: Portefeuille.Services.Application.IChoixUtilisateurService;
    let ContexteService: Portefeuille.Services.Application.IContexteService;
    let data: Modeles.Application.IPopupData<any>;

    describe("ModaleChoixEdsControleur", () => {
        beforeEach(module("portefeuille"));

        beforeEach(() => {

            let modalInstanceMock = {
                close: jasmine.createSpy('$modalInstance.close'),
                dismiss: jasmine.createSpy('$modalInstance.dismiss')
            };

            // Mock pour data
            let dataMock = {
                headerText: "titre"
            };

            module(($provide) => {
                $provide.value("$modalInstance", modalInstanceMock);
                $provide.value("data", dataMock);
            });

            angular.mock.inject(
                (
                    _$rootScope_: ng.IRootScopeService,
                    _$modalInstance_: angular.ui.bootstrap.IModalServiceInstance,
                    _ChoixEdsService_: Portefeuille.Services.Application.IChoixEdsService,
                    _PopupService_: Portefeuille.Services.Application.IPopupService,
                    _ChoixUtilisateurService_: Portefeuille.Services.Application.IChoixUtilisateurService,
                    _ContexteService_: Portefeuille.Services.Application.IContexteService,
                    _$q_: ng.IQService,
                    $injector: any
                ) => {
                    $scope = _$rootScope_.$new();
                    $modalInstance = _$modalInstance_;
                    ChoixEdsService = _ChoixEdsService_;
                    PopupService = _PopupService_;
                    ChoixUtilisateurService = _ChoixUtilisateurService_;
                    ContexteService = _ContexteService_;
                    data = $injector.get(Constantes.Inject.MyWay.data);
                    $q = _$q_;
                });

            mockService = new myway.mockTU.MockService($q);

            mockService.creerMock(PopupService, "showErreur", false, "KO");

            $scope.$apply();

            angular.mock.inject((_$controller_: ng.IControllerService) => {
                ModaleChoixEdsControleur = _$controller_("ModaleChoixEdsControleur", {
                    $scope: $scope,
                    $modalInstance: $modalInstance,
                    ChoixEdsService: ChoixEdsService,
                    PopupService: PopupService,
                    ChoixUtilisateurService: ChoixUtilisateurService,
                    ContexteService: ContexteService,
                    data : data
                });
            });

        });

        it("doit être défini", () => {
            expect(ModaleChoixEdsControleur).toBeDefined();
        });

        //TODO TEST A SUPPRIMER => IL n'y a pas de méthode rechercher dans ce contrôleur
        //Test de la methode rechercher
        //describe("Test de la methode rechercher", () => {
        //    beforeEach(() => { });

        //    it("Test avec identifiantAgent et nomAgent à null", () => {
        //        ModaleChoixEdsControleur.identifiantAgent = null;
        //        ModaleChoixEdsControleur.nomAgent = null;
        //        ModaleChoixEdsControleur.rechercher();
        //        expect(ModaleChoixEdsControleur.listeEds).toEqual([]);
        //    });

        //    it("Test avec identifiantAgent renseigné et nomAgent à null", () => {
        //        ModaleChoixEdsControleur.identifiantAgent = "OK";
        //        ModaleChoixEdsControleur.nomAgent = null;
        //        mockService.creerMock(ChoixEdsService, "rechercherListeEds", true, Mocks.getListeEds());
        //        ModaleChoixEdsControleur.rechercher();
        //        $scope.$apply();
        //        expect(ModaleChoixEdsControleur.listeEds).toEqual(Mocks.getListeEds());
        //    });

        //    it("Test avec identifiantAgent à null et nomAgent renseigné", () => {
        //        ModaleChoixEdsControleur.identifiantAgent = null;
        //        ModaleChoixEdsControleur.nomAgent = "OK";
        //        mockService.creerMock(ChoixEdsService, "rechercherListeEds", true, Mocks.getListeEds());
        //        ModaleChoixEdsControleur.rechercher();
        //        $scope.$apply();
        //        expect(ModaleChoixEdsControleur.listeEds).toEqual(Mocks.getListeEds());
        //    });

        //    it("Test avec identifiantAgent et nomAgent renseignés (promesse en erreur)", () => {
        //        ModaleChoixEdsControleur.identifiantAgent = null;
        //        ModaleChoixEdsControleur.nomAgent = "OK";
        //        mockService.creerMockPromesseErreur(ChoixEdsService, "rechercherListeEds", "KO");
        //        ModaleChoixEdsControleur.rechercher();
        //        $scope.$apply();
        //        expect(PopupService.showErreur).toHaveBeenCalled();
        //    });
        //});

        //Test de la methode valider
        describe("Test de la methode valider", () => {
            it("Test $modalInstance.close appelé", (done: () => void) => {
                mockService.creerMock(ChoixEdsService, "getCaracteristiquesAgent", true, Portefeuille.Tests.Mocks.CARACTERISTIQUES_AGENT);

                ModaleChoixEdsControleur.valider();
                done();

                expect($modalInstance.close).toHaveBeenCalled();

                $scope.$apply();
            });
        });

        //Test de la methode valider
        describe("Test de la methode valider suite", () => {
            it("Test popupService.showErreur appelé", (done: () => void) => {
                mockService.creerMockPromesseErreur(ChoixEdsService, "getCaracteristiquesAgent", new MyWay.Services.Erreur("Plantage dans getCaracteristiquesAgent"));

                ModaleChoixEdsControleur.valider();
                done();

                expect(PopupService.showErreur).toHaveBeenCalled();

                $scope.$apply();
            });
        });

        //Test de la methode fermer
        //describe("Test de la methode fermer", () => {
        //    beforeEach(() => {});

        //    it("Test $modalInstance.dismiss appelé", () => {
        //        ModaleChoixEdsControleur.fermer();
        //        expect($modalInstance.dismiss).toHaveBeenCalled();
        //    });
        //});
    });
}