module Portefeuille.Tests.Controleurs {
    "use strict";

    // Définition des variables
    let ClientsControleur;

    let $scope: ng.IScope;
    let $location: ng.ILocationService;
    let ListeClientsService: Portefeuille.Services.Application.IListeClientsService;
    let $filter: ng.IFilterService;
    let PopupService: Portefeuille.Services.Application.IPopupService;
    let $parse: ng.IParseService;
    let tableService: MyWay.UI.IMwTableServiceOpefi;
    let EventService: Portefeuille.Services.Application.IEventService;
    let LisaApplication: Portefeuille.Services.Application.ILisaApplication;
    let contexteService: Portefeuille.Services.Application.IContexteService;
    let IndicateurService: Portefeuille.Services.Application.IIndicateurService;
    let FiltreService: Portefeuille.Services.Application.IFiltreService;
    let PortefeuilleService: Portefeuille.Services.Application.IPortefeuilleService;
    let PreferencesService: Portefeuille.Services.Application.IPreferencesService;
    let PortailService: myway.portail.api.PortailService;

    let mockService: myway.mockTU.MockService;
    let $q: ng.IQService;

    describe("ClientsControleur", () => {
        beforeEach(module("portefeuille"));

        beforeEach(() => {
            angular.mock.inject(
                (
                    _$rootScope_: ng.IRootScopeService,
                    _$location_: ng.ILocationService,
                    _ListeClientsService_: Portefeuille.Services.Application.IListeClientsService,
                    _$filter_: ng.IFilterService,
                    _PopupService_: Portefeuille.Services.Application.IPopupService,
                    _$parse_: ng.IParseService,
                    _tableService_: MyWay.UI.IMwTableServiceOpefi,
                    _EventService_: Portefeuille.Services.Application.IEventService,
                    _LisaApplication_: Portefeuille.Services.Application.ILisaApplication,
                    _ContexteService_: Portefeuille.Services.Application.IContexteService,
                    _IndicateurService_: Portefeuille.Services.Application.IIndicateurService,
                    _FiltreService_: Portefeuille.Services.Application.IFiltreService,
                    _PortefeuilleService_: Portefeuille.Services.Application.IPortefeuilleService,
                    _PreferencesService_: Portefeuille.Services.Application.IPreferencesService,
                    _$q_: ng.IQService,
                    $injector: any
                ) => {
                    $scope = _$rootScope_.$new();
                    $location = _$location_;
                    ListeClientsService = _ListeClientsService_;
                    $filter = _$filter_;
                    PopupService = _PopupService_;
                    $parse = _$parse_;
                    tableService = _tableService_;
                    EventService = _EventService_;
                    LisaApplication = _LisaApplication_;
                    contexteService = _ContexteService_
                    IndicateurService = _IndicateurService_;
                    FiltreService = _FiltreService_;
                    PortefeuilleService = _PortefeuilleService_;
                    PreferencesService = _PreferencesService_;
                    $q = _$q_;
                    PortailService = $injector.get(Constantes.Inject.MyWay.portailService);
                });

            mockService = new myway.mockTU.MockService($q);
            mockService.creerMock($location, "path", false, "OK");

            $scope.$apply();

            angular.mock.inject((_$controller_: ng.IControllerService) => {
                ClientsControleur = _$controller_("ClientsControleur", {
                    $scope: $scope,
                    $location: $location,
                    ListeClientsService: ListeClientsService,
                    $filter: $filter,
                    PopupService: PopupService,
                    $parse: $parse,
                    tableService: tableService,
                    EventService: EventService,
                    LisaApplication: LisaApplication,
                    contexteService: contexteService,
                    IndicateurService: IndicateurService,
                    FiltreService: FiltreService,
                    PortefeuilleService: PortefeuilleService,
                    PreferencesService: PreferencesService,
                    PortailService: PortailService
                });
            });

        });

        it("doit être défini", () => {
            expect(ClientsControleur).toBeDefined();
        });

        //Test de la methode onSelectionChange
        describe("Test de la methode onSelectionChange", () => {
            it("Appel de la methode $location.path", () => {
                ClientsControleur.onSelectionChange();
                //expect($location.path).toHaveBeenCalledWith(Constantes.Url.DETAIL_CLIENT);
            });
        });


        describe("Test de la methode initialiser ", () => {
            it("cas no 1", () => {
                mockService.creerMock(PortefeuilleService, "aPortefeuillesAffiche", false, true);
                mockService.creerMock(contexteService, "getAuthentification", true, Mocks.AUTHENTIFICATION);
                ClientsControleur.initialiser();
                //expect($location.path).toHaveBeenCalledWith(Constantes.Url.DETAIL_CLIENT);
            });
        });


        //Test de la methode changePage
        //describe("Test de la methode changePage", () => {
        //    it("", () => {
        //        ClientsControleur.changePage();
        //    });
        //});
    });
}