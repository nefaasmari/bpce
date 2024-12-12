module Portefeuille.Tests.Services.Application {
    "use strict";

    // Définition des variables
    let PopupService;
    let modalService: MyWay.UI.IModalService;
    let LisaApplication: Portefeuille.Services.Application.ILisaApplication;
    let $q: ng.IQService;
    let $scope: ng.IScope;

    let mockService: myway.mockTU.MockService;

    describe("PopupService", () => {
        beforeEach(module("portefeuille"));

        beforeEach(() => {
            angular.mock.inject(
                (
                    _$rootScope_: ng.IRootScopeService,
                    _$q_: ng.IQService,
                    _PopupService_: Portefeuille.Services.Application.IPopupService,
                    _modalService_: MyWay.UI.IModalService,
                    _LisaApplication_: Portefeuille.Services.Application.ILisaApplication

                ) => {

                    $scope = _$rootScope_.$new(),
                        $q = _$q_,
                        PopupService = _PopupService_,
                        modalService = _modalService_,
                        LisaApplication = _LisaApplication_
                });


            mockService = new myway.mockTU.MockService($q);
            mockService.creerMock(modalService, "showPopup", false, "retour");
            mockService.creerMock(modalService, "showConfirm", false, "retour");
            mockService.creerMock(modalService, "showErreur", true, "retour");
            mockService.creerMock(modalService, "showModal", false, "retour");
            mockService.creerMock(LisaApplication, "next", true, "retour");
            $scope.$apply();
        });

        it("doit être défini", () => {
            expect(PopupService).toBeDefined();
        });

        //Test de la methode showInfos
        describe("Test de la methode showInfos ", () => {
            it("Appel de la methode showPopup", () => {
                let resultat = PopupService.showInfos("titre", "blabla");
                expect(modalService.showPopup).toHaveBeenCalled();
            });
        });

        //Test de la methode showErreur
        describe("Test de la methode showErreur", () => {
            it("Appel de la methode showErreur", () => {
                let resultat = PopupService.showErreur({ libelle: "erreur", codeLibelle: "codeLibelle" });
                expect(modalService.showErreur).toHaveBeenCalled();
            });
            it("Appel de la methode showErreur sans erreur.libelle", () => {
                let resultat = PopupService.showErreur({ libelle: null, codeLibelle: "codeLibelle" });
                expect(modalService.showErreur).toHaveBeenCalled();
            });
        });

        //Test de la methode showInfos
        describe("Test de la methode showConfirmations", () => {
            it("Appel de la methode showConfirm", () => {
                let resultat = PopupService.showConfirmations("titre", "blabla", "Valider", "Annuler");
                expect(modalService.showConfirm).toHaveBeenCalled();
            });
        });

        //Test de la methode showModal
        describe("Test de la methode showModal", () => {
            it("Appel de la methode showModal", () => {
                let resultat = PopupService.showModal("/", "nameControlleur", "data");
                expect(modalService.showModal).toHaveBeenCalled();
            });
        });

        //Test de la methode showModalMd
        describe("Test de la methode showModalMd", () => {
            it("Appel de la methode showModalMd", () => {
                PopupService.showModalMd("/", "nameControlleur", "data");
                expect(modalService.showModal).toHaveBeenCalled();
            });
        });
    });
}