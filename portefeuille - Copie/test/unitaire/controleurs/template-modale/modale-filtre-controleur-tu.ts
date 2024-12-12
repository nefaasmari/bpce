module Portefeuille.Tests.Controleurs {
    "use strict";

    // Définition des variables
    let ModaleFiltreControleur: Portefeuille.Controleurs.ModaleFiltreControleur;

    let $scope: ng.IScope;
    let $modalInstance: angular.ui.bootstrap.IModalServiceInstance;
    let data: Modeles.Application.IPopupData<any>;
    let $filter: ng.IFilterService;
    let IndicateurService: Portefeuille.Services.Application.IIndicateurService;
    let FiltreService: Portefeuille.Services.Application.IFiltreService;

    let mockService: myway.mockTU.MockService;
    let $q: ng.IQService;

    describe("ModaleFiltreControleur", () => {
        beforeEach(module("portefeuille"));

        beforeEach(() => {

            let modalInstanceMock = {
                close: jasmine.createSpy('$modalInstance.close'),
                dismiss: jasmine.createSpy('$modalInstance.dismiss')
            };

            let dataMock = {
                "closeButtonText": "Annuler",
                "actionButtonText": "Valider",
                "headerText": "",
                "iconName": "",
                "bodyText": "",
                "model": {
                    "listeIndicateursTableau": [{
                        "choisi": true,
                        "indicateur": {
                            "code": "chiffreAffaire",
                            "typeIndicateur": "Montant",
                            "intitule": "CA/Budget ",
                            "estUniquementVueClients": false,
                            "estVisibleColonne": true
                        }
                    }, {
                        "choisi": true,
                        "indicateur": {
                            "code": "libelleCourtSegmentMarche",
                            "typeIndicateur": "Texte",
                            "intitule": "Marché",
                            "estUniquementVueClients": true,
                            "estVisibleColonne": true
                        }
                    }],
                    "listeIndicateursFiltre": [],
                    "listeFiltres": [],
                    "estVueClient": false
                }
            };

            module(($provide) => {
                $provide.value("$modalInstance", modalInstanceMock);
                $provide.value("data", dataMock);
            });

            angular.mock.inject(
                (
                    _$rootScope_: ng.IRootScopeService,
                    _$modalInstance_: angular.ui.bootstrap.IModalServiceInstance,
                    _data_: Modeles.Application.IPopupData<any>,
                    _$q_: ng.IQService,
                    _$filter_: ng.IFilterService,
                    _IndicateurService_: Portefeuille.Services.Application.IIndicateurService,
                    _FiltreService_: Portefeuille.Services.Application.IFiltreService
                ) => {
                    $scope = _$rootScope_.$new();
                    $modalInstance = _$modalInstance_;
                    data = _data_;
                    $q = _$q_;
                    $filter = _$filter_;
                    IndicateurService = _IndicateurService_;
                    FiltreService = _FiltreService_;
                });

            mockService = new myway.mockTU.MockService($q);

            $scope.$apply();

            angular.mock.inject((_$controller_: ng.IControllerService) => {
                ModaleFiltreControleur = _$controller_("ModaleFiltreControleur", {
                    $scope: $scope,
                    $modalInstance: $modalInstance,
                    data: data,
                    $filter: $filter,
                    IndicateurService: IndicateurService,
                    FiltreService: FiltreService
                });
            });

        });

        it("doit être défini", () => {
            expect(ModaleFiltreControleur).toBeDefined();
        });

        //Test de la methode ajouterCondition
        describe("Test de la methode ajouterCondition", () => {
            beforeEach(() => {
                spyOn(FiltreService, "ajouterFiltre");
            });

            it("Test méthode FiltreService.ajouterFiltre appelé", () => {
                ModaleFiltreControleur.ajouterCondition(false);
                expect(FiltreService.ajouterFiltre).toHaveBeenCalled();
            });
        });

        //Test de la methode appliquer
        describe("Test de la methode appliquer", () => {
            beforeEach(() => { });

            it("Test $modalInstance.close appelé", () => {
                ModaleFiltreControleur.appliquer();
                expect($modalInstance.close).toHaveBeenCalled();
            });
        });

        //Test de la methode fermer
        describe("Test de la methode fermer", () => {
            beforeEach(() => { });

            it("Test $modalInstance.dismiss appelé", () => {
                ModaleFiltreControleur.fermer();
                expect($modalInstance.dismiss).toHaveBeenCalled();
            });
        });

        //Test de la methode afficherBoutonAjouter
        describe("Test de la methode afficherBoutonAjouter", () => {
            let resultat: boolean;
            let resultatAttendu: boolean;

            let listeFiltres: Array<Modeles.Application.IFiltre> = [];
            let unSeulFiltreDisponible: boolean;

            beforeEach(() => {
                listeFiltres = [];
                unSeulFiltreDisponible = true;
            });

            it("Test résultat true attendu", () => {
                resultatAttendu = true;
                ModaleFiltreControleur.listeFiltres = listeFiltres;

                resultat = ModaleFiltreControleur.afficherBoutonAjouter();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat false attendu <=> length >= 2", () => {
                resultatAttendu = false;
                ModaleFiltreControleur.listeFiltres = Portefeuille.Tests.Mocks.LISTE_FILTRES_TYPES_IFILTRE;

                resultat = ModaleFiltreControleur.afficherBoutonAjouter();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat false attendu <=> length === 1 ET unSeulFiltreDisponible", () => {
                resultatAttendu = false;
                ModaleFiltreControleur.listeFiltres.push(<Modeles.Application.IFiltre>{});

                resultat = ModaleFiltreControleur.afficherBoutonAjouter();
                expect(resultat).toEqual(resultatAttendu);
            });
        });

        //Test de la methode desactiverBoutonAppliquer
        describe("Test de la methode desactiverBoutonAppliquer", () => {
            let resultat: boolean;
            let resultatAttendu: boolean;

            let listeFiltres: Array<Modeles.Application.IFiltre> = [];
            let pasDeFiltreDisponible: boolean;
            let sansFiltreActif: boolean;

            beforeEach(() => {
                listeFiltres = [];
            });

            it("Test résultat false attendu <=> listeFiltres ne contient aucun élément ET les autres données sont valorisées à false", () => {
                resultatAttendu = false;
                pasDeFiltreDisponible = false;
                sansFiltreActif = false;

                ModaleFiltreControleur.listeFiltres = listeFiltres;
                ModaleFiltreControleur.pasDeFiltreDisponible = pasDeFiltreDisponible;
                ModaleFiltreControleur.sansFiltreActif = sansFiltreActif;

                resultat = ModaleFiltreControleur.desactiverBoutonAppliquer();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat true attendu <=> listeFiltres contient un élément ET filtre.indicateur non valorisé", () => {
                resultatAttendu = true;
                pasDeFiltreDisponible = false;
                sansFiltreActif = false;

                ModaleFiltreControleur.listeFiltres = listeFiltres;
                ModaleFiltreControleur.listeFiltres.push(Portefeuille.Tests.Mocks.LISTE_FILTRES_TYPES_IFILTRE[0]);

                ModaleFiltreControleur.pasDeFiltreDisponible = pasDeFiltreDisponible;
                ModaleFiltreControleur.sansFiltreActif = sansFiltreActif;

                resultat = ModaleFiltreControleur.desactiverBoutonAppliquer();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat true attendu  1 <=> listeFiltres contient un élément ET filtre.indicateur valorisé", () => {
                resultatAttendu = true;
                pasDeFiltreDisponible = false;
                sansFiltreActif = false;

                ModaleFiltreControleur.listeFiltres = listeFiltres;
                ModaleFiltreControleur.listeFiltres.push(Portefeuille.Tests.Mocks.LISTE_FILTRES_TYPES_IFILTRE[1]);

                ModaleFiltreControleur.pasDeFiltreDisponible = pasDeFiltreDisponible;
                ModaleFiltreControleur.sansFiltreActif = sansFiltreActif;

                resultat = ModaleFiltreControleur.desactiverBoutonAppliquer();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat true attendu 2 <=> listeFiltres contient un élément ET filtre.indicateur valorisé", () => {
                resultatAttendu = false;
                pasDeFiltreDisponible = false;
                sansFiltreActif = false;

                ModaleFiltreControleur.listeFiltres = listeFiltres;
                ModaleFiltreControleur.listeFiltres.push(Portefeuille.Tests.Mocks.LISTE_FILTRES_TYPES_IFILTRE[2]);

                ModaleFiltreControleur.pasDeFiltreDisponible = pasDeFiltreDisponible;
                ModaleFiltreControleur.sansFiltreActif = sansFiltreActif;

                resultat = ModaleFiltreControleur.desactiverBoutonAppliquer();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat true attendu 3 <=> listeFiltres contient un élément ET filtre.indicateur valorisé", () => {
                resultatAttendu = false;
                pasDeFiltreDisponible = false;
                sansFiltreActif = false;

                ModaleFiltreControleur.listeFiltres = listeFiltres;
                ModaleFiltreControleur.listeFiltres.push(Portefeuille.Tests.Mocks.LISTE_FILTRES_TYPES_IFILTRE[3]);

                ModaleFiltreControleur.pasDeFiltreDisponible = pasDeFiltreDisponible;
                ModaleFiltreControleur.sansFiltreActif = sansFiltreActif;

                resultat = ModaleFiltreControleur.desactiverBoutonAppliquer();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat true attendu 4 <=> listeFiltres contient un élément ET filtre.indicateur valorisé", () => {
                resultatAttendu = false;
                pasDeFiltreDisponible = false;
                sansFiltreActif = false;

                ModaleFiltreControleur.listeFiltres = listeFiltres;
                ModaleFiltreControleur.listeFiltres.push(Portefeuille.Tests.Mocks.LISTE_FILTRES_TYPES_IFILTRE[4]);

                ModaleFiltreControleur.pasDeFiltreDisponible = pasDeFiltreDisponible;
                ModaleFiltreControleur.sansFiltreActif = sansFiltreActif;

                resultat = ModaleFiltreControleur.desactiverBoutonAppliquer();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat true attendu 5 <=> listeFiltres contient un élément ET filtre.indicateur valorisé", () => {
                resultatAttendu = true;
                pasDeFiltreDisponible = false;
                sansFiltreActif = false;

                ModaleFiltreControleur.listeFiltres = listeFiltres;
                ModaleFiltreControleur.listeFiltres.push(Portefeuille.Tests.Mocks.LISTE_FILTRES_TYPES_IFILTRE[5]);

                ModaleFiltreControleur.pasDeFiltreDisponible = pasDeFiltreDisponible;
                ModaleFiltreControleur.sansFiltreActif = sansFiltreActif;

                resultat = ModaleFiltreControleur.desactiverBoutonAppliquer();
                expect(resultat).toEqual(resultatAttendu);
            });

            it("Test résultat true attendu 6 <=> listeFiltres contient un élément ET filtre.indicateur valorisé", () => {
                resultatAttendu = true;
                pasDeFiltreDisponible = false;
                sansFiltreActif = false;

                ModaleFiltreControleur.listeFiltres = listeFiltres;
                ModaleFiltreControleur.listeFiltres.push(Portefeuille.Tests.Mocks.LISTE_FILTRES_TYPES_IFILTRE[6]);

                ModaleFiltreControleur.pasDeFiltreDisponible = pasDeFiltreDisponible;
                ModaleFiltreControleur.sansFiltreActif = sansFiltreActif;

                resultat = ModaleFiltreControleur.desactiverBoutonAppliquer();
                expect(resultat).toEqual(resultatAttendu);
            });
        });

        //TODO TEST A SUPPRIMER CAR méthode genererIdentifiantAleatoire inexistante
        //Test de la methode genererIdentifiantAleatoire
        //describe("Test de la methode genererIdentifiantAleatoire", () => {
        //    beforeEach(() => { });

        //    it("Test méthode définie", () => {
        //        expect(ModaleFiltreControleur.genererIdentifiantAleatoire()).toBeDefined();
        //    });
        //});
    });
}