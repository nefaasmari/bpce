module Portefeuille.Constantes.Inject {
    "use strict";

    export module Angular {
        export const $q: string = "$q";
        export const $modalInstance: string = "$modalInstance";
        export const $scope: string = "$scope";
        export const $location: string = "$location";
        export const $filter: string = "$filter"; 
        export const $parse: string = "$parse";
        export const $window: string = "$window";
        export const $rootScope: string = "$rootScope";
        export const $element: string = "$element";
        export const $anchorScroll: string = "$anchorScroll";
    }

    export module MyWay {
        export const serviceAgentExtended: string = "serviceAgentExtended";
        export const serviceAgent: string = "serviceAgent";
        export const tableServiceOpefi: string = "tableServiceOpefi";
        export const mwsfRechercheEdsGlobaleService: string = "mwsfRechercheEdsGlobaleService";
        export const data: string = "data";
        export const mwEvents: string = "MW_EVENTS";

        export const portailService: string = "portailService-libPortail";
    }

    export module Services {
        export const suiviParComplementaireRestService: string = "SuiviComplementaireService";
        export const choixEdsService: string = "ChoixEdsService";
        export const contexteService: string = "ContexteService";
        export const eventService: string = "EventService";
        export const filtreService: string = "FiltreService";
        export const begacliService: string = "BegacliService";
        export const indicateurService: string = "IndicateurService";
        export const lisaApplication: string = "LisaApplication";
        export const listeClientsService: string = "ListeClientsService";
        export const popupService: string = "PopupService";
        export const portefeuilleService: string = "PortefeuilleService";
        export const preferencesService: string = "PreferencesService";
        export const rechercheAgentRestService: string = "RechercheAgentService";
        export const recherchePortefeuilleRestService: string = "RecherchePortefeuilleService";
        export const indicateursRestService: string = "IndicateursService";
        export const rechercheCommercialRestService: string = "RechercheCommercialeService";
        export const corporateInformationRestService: string = "CorporateFamilleLienService";
        export const relationCommercialeRestService: string = "RelationCommercialeService";
        export const clientRestService: string = "ClientService";
        export const habilitationService: string = "HabilitationService";
        export const gestionAffectationRestService: string = "GestionAffectationService";
        export const choixUtilisateurService: string = "ChoixUtilisateurService";
        export const modalePaniersService: string = "ModalePaniersService";
        export const pfDragAndDropService: string = "PfDragAndDropService";
        export const mwNotificationService: string = "MwNotificationService";
        export const modalService: string = "modalService";
        export const applicationUtils: string = "ApplicationUtils";
        export const preferenceUtilisateurRestService: string = "PreferenceUtilisateurService";
        export const restStatRentabiliteService: string = "StatRentabiliteService";
        export const restStatRevueService: string = "StatRevueService";
        export const restStatPortefeuilleService: string = "StatPortefeuilleService";
        export const restStatFluxMouvementFinancierService: string = "StatFluxMouvementFinancierService";
        export const statService: string = "StatsService";
        export const ihmService: string = "IhmService";
        export const rechercheRevueService: string = "RechercheRevueService";
        export const indicateurFlecheService: string = "IndicateurFlecheService";
        export const creationPourcentageService: string = "CreationPourcentageService";
        export const restStatPortefeuilleEdsService: string = "StatPortefeuilleEdsService";
        export const mwCsvService: string = "mwCsvService";
        export const edsNiveauInferieurService: string = "EdsNiveauInferieurService";
        export const mockService: string = "MockService";
    }

    export module LibrairieD3 {
        export const creationDonutService: string = "CreationDonutService";
        export const creationPourcentageService: string = "CreationPourcentageService";
    }

    export module Autres {
        export const dataModale: string = "data";
    }
}