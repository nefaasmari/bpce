
declare module GarantiesCCE {
    var app: any;
}

/**
 * Controleur du footer de la page
 * @author S0077482
 */
declare module GarantiesCCE.Controleurs {
    class FooterControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private $location;
        private mwEvents;
        static $inject: string[];
        isBoutonValiderActif: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, mwEvents: MyWay.UI.IMwEvents);
        goToAnchor(ancre: string): void;
        clickRetour(): void;
    }
}

/**
 * Controleur de la page de dev pour l'utilisation de la directive mw-garanties-cce
 * @author S0077482
 */
declare module GarantiesCCE.Controleurs {
    class PageDevDirectiveFormulaireContexteControleur {
        private $scope;
        private serviceAgentExtended;
        private $location;
        private donneesContexteService;
        static $inject: string[];
        contexte: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexte;
        montrerDirective: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, donneesContexteService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexteService);
        initContexte(): void;
        consulterGarantie(): void;
        desactiverDirective(): void;
    }
}

/**
 * Controleur de la page de dev de la SPA garanties CCE
 * @author S0077482
 */
declare module GarantiesCCE.Controleurs {
    class PageDevFormulaireContexteControleur {
        private $scope;
        private serviceAgentExtended;
        private $location;
        private donneesContexteService;
        static $inject: string[];
        contexte: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexte;
        montrerDirective: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, donneesContexteService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexteService);
        initContexte(): void;
        consulterGarantie(): void;
    }
}

/**
 * Controleur de la spa pour les garanties cce
 * @author S0077482
 */
declare module GarantiesCCE.Controleurs {
    class SPAGarantiesCCEControleur {
        private $scope;
        private serviceAgentExtended;
        private donneesContexteService;
        static $inject: string[];
        contexte: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexte;
        montrerDirective: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, donneesContexteService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexteService);
    }
}

/**
 * Controleur de la directive d'ajout de garanties
 * @author S0077482
 */
declare module GarantiesCCE.Controleurs {
    interface IAjouterGarantiesScope extends ng.IScope {
        ajoutForm: any;
    }
    class AjouterGarantiesCCEControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private recherchePersonneService;
        private donneesCodeLibelleNatureGarantieService;
        private donneesCodeLibelleTypeBienGarantieService;
        private mwEvents;
        private caracteristiqueGarantieCCEService;
        private natureGarantieCCEService;
        private $location;
        private donneesContexteService;
        private mwNotificationService;
        static $inject: string[];
        dateEffet: Date;
        dateEcheance: Date;
        montantGarantie: string;
        isMontantGarantieValide: boolean;
        typeGarantie: string;
        rang: number;
        natureGarantie: ComposantsCommunsGarantiesCCE.Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantie[];
        choixNature: ComposantsCommunsGarantiesCCE.Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantie;
        commentaire1: string;
        commentaire2: string;
        typeBienEnGarantie: ComposantsCommunsGarantiesCCE.Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE[];
        choixTypeBienEnGarantie: ComposantsCommunsGarantiesCCE.Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE;
        codeTypeBien: string;
        designationCourte: string;
        identifiantTiers: string;
        valeurGarantie: string;
        isValeurGarantieValide: boolean;
        dateEstimation: Date;
        detail2: string;
        detail3: string;
        detail4: string;
        detail5: string;
        detail6: string;
        isTiersSelected: boolean;
        private result;
        listeErreurs: any[];
        private contexte;
        private isFormValid;
        constructor($scope: IAjouterGarantiesScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, recherchePersonneService: myway.comGestionClient.RechercherPersonneService, donneesCodeLibelleNatureGarantieService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesCodeLibelleNatureGarantieService, donneesCodeLibelleTypeBienGarantieService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesCodeLibelleTypeBienGarantieService, mwEvents: MyWay.UI.IMwEvents, caracteristiqueGarantieCCEService: ComposantsCommunsGarantiesCCE.Services.Rest.ICaracteristiqueGarantieCCEService, natureGarantieCCEService: ComposantsCommunsGarantiesCCE.Services.Rest.INatureGarantieCCEService, $location: ng.ILocationService, donneesContexteService: ComposantsCommunsGarantiesCCE.Services.Application.DonneesContexteService, mwNotificationService: MyWay.UI.IMwNotificationService);
        goToAnchor(ancre: string): void;
        changementTypeGarantie(): void;
        recherchePersonne(): void;
        onSelectType($item: ComposantsCommunsGarantiesCCE.Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE): void;
        onKeyPressTypeBien(): void;
        onCodeTypeBienChange(): void;
        onChangeMontantGarantie(): void;
        onChangeValeurGarantie(): void;
        ajoutZeros(nombre: string, length: number): string;
        clickAnnuler(): void;
        clickValider(): void;
    }
}

/**
 * Directive pour l'ajout des garanties CCE
 * @author S0077482 (Thomas PRAT)
 */
declare module GarantiesCCE.Directives {
    function mwAjoutGarantiesCce(): ng.IDirective;
}

/**
 * Controleur de la directive de consultation des garanties
 * @author S0077482
 */
declare module GarantiesCCE.Controleurs {
    class ConsultationGarantiesCCEControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private caracteristiqueGarantieCCEService;
        private natureGarantieCCEService;
        private donneesCodeLibelleNatureGarantieService;
        private donneesCodeLibelleTypeBienGarantieService;
        private $location;
        private $timeout;
        private mwEvents;
        private donneesGarantieSelectionneeService;
        private donneesContexteService;
        private mwNotificationService;
        static $inject: string[];
        isLineSelected: boolean;
        rechercheEnCours: boolean;
        rechercheEffectuee: boolean;
        selectedItem: ComposantsCommunsGarantiesCCE.Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantie;
        tableauGaranties: ComposantsCommunsGarantiesCCE.Modeles.Tableaux.TableauListeGarantiesCCEControleur;
        reponseIdentificationContrat: ComposantsCommunsGarantiesCCE.Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IIdentificationContrat;
        private contexte;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, caracteristiqueGarantieCCEService: ComposantsCommunsGarantiesCCE.Services.Rest.ICaracteristiqueGarantieCCEService, natureGarantieCCEService: ComposantsCommunsGarantiesCCE.Services.Rest.INatureGarantieCCEService, donneesCodeLibelleNatureGarantieService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesCodeLibelleNatureGarantieService, donneesCodeLibelleTypeBienGarantieService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesCodeLibelleTypeBienGarantieService, $location: ng.ILocationService, $timeout: ng.ITimeoutService, mwEvents: MyWay.UI.IMwEvents, donneesGarantieSelectionneeService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesGarantieSelectionneeService, donneesContexteService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexteService, mwNotificationService: MyWay.UI.IMwNotificationService);
        onSelectionChange(selectedObject: any): void;
        private appelServiceCaracteristiqueGarantieGet();
        ajouter(): void;
        modifier(): void;
        goToAnchor(ancre: string): void;
        supprimer(): void;
    }
}

/**
 * Directive pour la consultation des garanties CCE
 * @author S0077482 (Thomas PRAT)
 */
declare module GarantiesCCE.Directives {
    function mwConsultationGarantiesCce(): ng.IDirective;
}

/**
 * Controleur pour la directive des garanties CCE
 * @author S0077482 (Thomas PRAT)
 */
declare module GarantiesCCE.Controleurs {
    class GarantiesCCEControleur {
        private $rootScope;
        private donneesContexteService;
        static $inject: string[];
        contexte: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexte;
        numeroCompte: string;
        afficherConsultation: boolean;
        afficherAjout: boolean;
        afficherModification: boolean;
        constructor($rootScope: ng.IRootScopeService, donneesContexteService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexteService);
    }
}

/**
 * Directive pour les garanties CCE
 * @author S0077482 (Thomas PRAT)
 */
declare module GarantiesCCE.Directives {
    function mwGarantiesCce(): ng.IDirective;
}

/**
 * Controleur de la directive de modification d'une garantie
 * @author S0077482
 */
declare module GarantiesCCE.Controleurs {
    interface IModificationGarantiesScope extends ng.IScope {
        modificationForm: any;
    }
    class ModifierGarantiesCCEControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private donneesGarantieSelectionneeService;
        private donneesCodeLibelleNatureGarantieService;
        private donneesCodeLibelleTypeBienGarantieService;
        private caracteristiqueGarantieCCEService;
        private natureGarantieCCEService;
        private $location;
        private mwEvents;
        private donneesContexteService;
        private mwNotificationService;
        static $inject: string[];
        garantieSelected: ComposantsCommunsGarantiesCCE.Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantie;
        typeBienEnGarantie: ComposantsCommunsGarantiesCCE.Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE[];
        choixTypeBienEnGarantie: ComposantsCommunsGarantiesCCE.Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE;
        isValeurGarantieValide: boolean;
        valeurGarantie: string;
        isDateEcheanceModifiable: boolean;
        dateEstimationReel: string;
        private contexte;
        isFormValid: boolean;
        constructor($scope: IModificationGarantiesScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, donneesGarantieSelectionneeService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesGarantieSelectionneeService, donneesCodeLibelleNatureGarantieService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesCodeLibelleNatureGarantieService, donneesCodeLibelleTypeBienGarantieService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesCodeLibelleTypeBienGarantieService, caracteristiqueGarantieCCEService: ComposantsCommunsGarantiesCCE.Services.Rest.ICaracteristiqueGarantieCCEService, natureGarantieCCEService: ComposantsCommunsGarantiesCCE.Services.Rest.INatureGarantieCCEService, $location: ng.ILocationService, mwEvents: MyWay.UI.IMwEvents, donneesContexteService: ComposantsCommunsGarantiesCCE.Services.Application.IDonneesContexteService, mwNotificationService: MyWay.UI.IMwNotificationService);
        goToAnchor(ancre: string): void;
        onSelectType($item: ComposantsCommunsGarantiesCCE.Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE): void;
        onChangeDateEcheance(): void;
        onKeyPressTypeBien(): void;
        onCodeTypeBienChange(): void;
        validationRegexValeurGarantie(): void;
        onChangeValeurGarantie(): void;
        ajoutZeros(nombre: string, length: number): string;
        clickAnnuler(): void;
        clickValider(): void;
        dateEcheanceModifiable(): boolean;
    }
}

/**
 * Directive pour la modification des garanties CCE
 * @author S0077482 (Thomas PRAT)
 */
declare module GarantiesCCE.Directives {
    function mwModificationGarantiesCce(): ng.IDirective;
}
