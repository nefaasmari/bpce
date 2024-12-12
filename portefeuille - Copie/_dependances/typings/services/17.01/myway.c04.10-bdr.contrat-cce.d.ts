
declare module contratCCE {
    var app: any;
}

declare module contratCCE {
    class AjoutCompteControleur {
        private modalService;
        static $inject: string[];
        listeAIncrementer: MyWay.Model.Compte[];
        informationCompte: Model.IIdentificationContrat;
        popupSaisieComptes: Object;
        compteAffiche: MyWay.Model.Compte;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        constructor(modalService: MyWay.UI.IModalService);
        contruirePopInAjoutCompte(): ng.ui.bootstrap.IModalSettings;
        ouvrirPopInAjoutCompte(): void;
    }
}

declare module contratCCE {
    class ConditionArretesControleur {
        private $scope;
        private serviceAgentExtended;
        private recupererConditionArreteService;
        private modifierConditionArreteService;
        private informationsGlobalesService;
        private modalService;
        private servicesCommuns;
        private $location;
        private $anchorScroll;
        static $inject: string[];
        informationConditionsArretes: Model.IInformationGlobale;
        informationGlobale: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        dateOuvertureContrat: string;
        deviseDuCompte: string;
        popupConditionArrete: Object;
        listeConditionsArretesDebitrices: any[];
        tableauConditionsDebitrices: MyWay.UI.ImwTableOptions;
        bloquerConditionCommissionsEtFrais: boolean;
        listeCodeTaux: string[];
        listeConditionsCommissionsEtFrais: any[];
        tableauCommissionsEtFrais: MyWay.UI.ImwTableOptions;
        tableauListeBaremesEtablissement: MyWay.UI.ImwTableOptions;
        montrerConditionsCommissionsEtFrais: boolean;
        montrerListeBaremesEtablissements: boolean;
        bloquerConditionDebitrice: boolean;
        pages: string;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, recupererConditionArreteService: Service.RecupererConditionArreteService, modifierConditionArreteService: Service.ModifierConditionArreteService, informationsGlobalesService: Service.InformationsGlobalesService, modalService: MyWay.UI.IModalService, servicesCommuns: Service.ServicesCommuns, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService);
        initialiserTableaux(): void;
        getAllConditionsArretes(): void;
        selectedLinesPourModificationConditionDebitrice: Array<Object>;
        selectedLinesPourModificationConditionCommissions: Array<Object>;
        construireTableauConditionsArretesDebitrices(conditionDebitriceDefaut: Model.IConditionDebitriceDefaut, listeConditionsDebitricesNegociees: Model.IConditionDebitriceNegociee[], conditionsDebitricesGenerales: Model.IConditionDebitriceGenerale[]): void;
        onSelectionChange(selectedObject: Object): void;
        supprimerConditionDebitrice(conditionDebitriceNegociee: Model.IConditionDebitriceNegociee): void;
        construirePopInConditionDebitrice(url: string, controller: string): ng.ui.bootstrap.IModalSettings;
        ouvrirPopInAjoutConditionDebitrice(): void;
        ouvrirPopInModificationConditionDebitrice(): void;
        construireTableauConditionsCommissionsEtFrais(conditionArreteDefaut: Model.ICommissionFraisDefaut, listeConditionArreteNegociee: Model.ICommissionFraisNegociee[], listeCommissionsFraisMarche: Model.ICommissionFraisMarche[]): void;
        construirePopInConditionCommissionsEtFrais(url: string, controller: string): ng.ui.bootstrap.IModalSettings;
        ouvrirPopInAjoutConditionCommissions(): void;
        ouvrirPopInModificationConditionCommissions(): void;
        supprimerConditionCommissionsEtFrais(conditionCommissionFraisNegociee: Model.ICommissionFraisNegociee): void;
    }
}

declare module contratCCE {
    class DateValeurControleur {
        private $scope;
        private serviceAgentExtended;
        private modifierDateDeValeurService;
        private recupererDateDeValeurService;
        private informationsGlobalesService;
        private mwNotificationService;
        pages: any;
        informationContrat: Model.IInformationGlobaleOuverture;
        informationGlobale: Model.IInformationGlobale;
        tableauDateValeur: MyWay.UI.ImwTableOptions;
        tableauDateValeurTemporaire: Model.IDateValeur[];
        listeOperationDateDeValeur: Model.IDateValeurCCE;
        tableauHorsDirective: Object;
        booleanModifierDatesDeValeurs: boolean;
        listeLibelleTypeCalendrier: any[];
        calendrierSelectionne: any;
        dataRecupererViaCreationContrat: Model.IIdentificationContrat;
        fonctionnement: Model.IFonctionnement;
        codeDateValeurAppliqueeAvant: any;
        listeDateValeurDefaut: Model.IDateValeur[];
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierDateDeValeurService: Service.ModifierDateDeValeurService, recupererDateDeValeurService: Service.RecupererDateDeValeurService, informationsGlobalesService: Service.InformationsGlobalesService, mwNotificationService: MyWay.UI.IMwNotificationService);
        getListeCalendriers(): void;
        construireTableau(liste: Model.IDateValeur[]): void;
        onPageChange(currentPage: number): void;
        getListeOperationDateDeValeurDefaut(): ng.IPromise<void>[];
        getListeOperationDateDeValeur(): void;
        constituerListeDatesValeursPourTableau(inputListe: Model.IDateValeur[]): any[];
        getLibelleOperationDateDeValeur(codeOperation: string, codeProvenance: string, typeProvenance: string): Model.OperationDateDeValeur;
        getLibelleTypeCalendrier(typeCalendrier: string): Model.OperationDateDeValeur;
        getValeurDateDeValeurAppliquee(): void;
        getLibelleDateDeValeurAppliquee(typeValeurAppliquee: string): any;
        modifierDatesDeValeurs(): void;
        modifierNombreJours(codeOperation: string, typeProvenance: string, codeProvenance: string, valeurJours: number): void;
        annulerModificationDatesDeValeurs(): void;
        sauvegarderDatesDeValeurs(): void;
    }
}

declare module contratCCE {
    class FonctionnementControleur {
        private $q;
        private $scope;
        private serviceAgentExtended;
        private recupererFonctionnementService;
        private informationsGlobalesService;
        private compteService;
        private servicesCommuns;
        private mwsfDeviseService;
        static $inject: string[];
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        listeTypeFonctionnement: Object[];
        listeSurveillance: Object[];
        informationFonctionnement: Model.IFonctionnement;
        informationContrat: Model.IInformationGlobaleOuverture;
        dataRecupererViaCreationContrat: Model.IIdentificationContrat;
        boutonValiderBloquer: boolean;
        informationGlobale: Model.IInformationGlobale;
        deviseDuCompte: MyWay.Model.Devise;
        montantDevise: MyWay.Model.MontantDevise;
        loading: boolean;
        compteEstEnDevise: boolean;
        estUnAvenant: boolean;
        datePeriode: Date;
        afficherSaisieDatePeriode: boolean;
        messageErreurChangementPeriodicite: string;
        afficherMessageErreurPeriodicite: any;
        codePeriodeTemporaire: string;
        indicAutorisationCreationDec: boolean;
        codeDepassementAutorisation: boolean;
        indicAutorisationCmdeChequier: boolean;
        indicAutorisationCmdeCarte: boolean;
        riceCompteAncien: MyWay.Model.Rice;
        messageErreur: string;
        afficherMessageErreurAncienCompte: boolean;
        indicateurChargementRice: boolean;
        indicFusionAgios: boolean;
        indicFusionCapital: boolean;
        listeCompte: MyWay.Model.Compte[];
        compteAgios: MyWay.Model.Compte;
        compteFacturation: MyWay.Model.Compte;
        compteFusion: MyWay.Model.Compte;
        infobulleMontantSeuilRemarquable: any;
        infobulleModeArrete: any;
        infobulleSurveillance: any;
        constructor($q: ng.IQService, $scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, recupererFonctionnementService: Service.RecupererFonctionnementService, informationsGlobalesService: Service.InformationsGlobalesService, compteService: myway.comInterdomaine.CompteService, servicesCommuns: Service.ServicesCommuns, mwsfDeviseService: myway.comInterdomaine.DeviseService);
        getValeursFonctionnement(): void;
        miseEnFormeAffichageFonctionnement(informationFonctionnement: Model.IFonctionnement): void;
        getCompteSelonRice(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<MyWay.Model.Compte>;
        getLibelleSurveillance(typeSurveillance: string): Model.InformationFormulaireFonctionnement;
        getLibelleTypeFonctionnement(typeFonctionnement: string): Model.InformationFormulaireFonctionnement;
        getListeTypeFonctionnement(): Object[];
        getListeSurveillance(): Object[];
        estACocher(code: string): boolean;
        estVraiOuFaux(code: boolean): string;
        verifierPeriodeArrete(periodeChoisie: string): void;
        verifierCompteFusion(): void;
        verifierFusionCapital(): void;
        miseAuNormeDonneesPourEnregistrementFonctionnement(): void;
        sauvegarderFonctionnement(): void;
    }
}

declare module MyWay.UI {
    interface ImwJPickerControleurScope extends ng.IScope {
        step: number;
        min: number;
        max: number;
        id: string;
        required: boolean;
        onChange: any;
        ngFocus: any;
        ngChange: any;
        ngBlur: any;
    }
    class JPickerControleur {
        private ngModelCtrl;
        step: number;
        min: number;
        max: number;
        id: string;
        required: boolean;
        value: number;
        onFocus: boolean;
        onChange: any;
        ngFocus: any;
        ngBlur: any;
        static $inject: string[];
        constructor($scope: ImwJPickerControleurScope);
        /**
         * Appelée par la fonction link de la directive pour initialiser le ngModelCtrl
         * C'est par lui qu'on va manipuler la donnée de notre directive.
         */
        init(ngModelCtrlLink: ng.INgModelController): void;
        /**
         * Incrémente la donnée
         */
        incremente(): number;
        /**
         * Décrémente la donnée
         */
        decremente(): number;
        handelKey(event: KeyboardEvent): void;
    }
}

declare module contratCCE {
    class ListeDeCompteControleur {
        private $scope;
        private serviceAgentExtended;
        private compteService;
        static $inject: string[];
        listeDesComptes: MyWay.Model.Compte[];
        compteActuel: MyWay.Model.Compte;
        informationCompte: Model.IIdentificationContrat;
        listeCodeProduit: string[];
        valeurNulleAutorisee: boolean;
        placeHolder: string;
        compteConnecteDansListe: boolean;
        typeDeCompte: string;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, compteService: myway.comInterdomaine.CompteService);
        determinerPlaceHolder(listeCompte: Object[], compteConnecte: MyWay.Model.Compte): void;
    }
}

declare module contratCCE {
    interface IModalChoixDeviseScope extends ng.IScope {
        viewModelChoixDeviseCtrl: IModalChoixDeviseControleur;
    }
    interface IModalChoixDeviseControleur {
        modalDatas: any;
        deviseChoisie: Model.IDevise;
        listeDevise: MyWay.Model.Devise[];
        messageErreur: string;
        afficherMessageErreur: boolean;
        boutonValiderBloquer: boolean;
        valider(): void;
    }
    class ModalChoixDeviseControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        static $inject: string[];
        modalDatas: any;
        deviseChoisie: Model.IDevise;
        listeDevise: MyWay.Model.Devise[];
        messageErreur: string;
        afficherMessageErreur: boolean;
        boutonValiderBloquer: boolean;
        constructor($scope: IModalChoixDeviseScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        valider(): void;
    }
}

declare module contratCCE {
    interface IModalGestionAjoutCommissionsScope extends ng.IScope {
        viewModelModalGestionAjoutCommissionsCtrl: IModalGestionAjoutCommissionsControleur;
    }
    interface IModalGestionAjoutCommissionsControleur {
        modalDatas: any;
        informationConditionsArretes: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        deviseDuCompte: string;
        tableauListeCommissionsFraisMarche: MyWay.UI.ImwTableOptions;
        selectedLinesPourAjoutCommission: Array<Object>;
        montrerListeCommissionsEtFrais: boolean;
        commissionsFraisMarcheSelectionnee: Model.ICommissionFraisMarche;
        messageErreurDate: string;
        dateEffet: Date;
        afficherMessageErreur: boolean;
        tauxApplication: any;
        boutonValiderActif: boolean;
        montrerAjoutCommissionSelectionnee: boolean;
        construireTableauListeCommissionsEtFrais(listeCommissionsFraisMarche: Model.ICommissionFraisMarche[]): void;
        miseEnFormeCommissionFraisMarcheSelectionnee(commissionsFraiMarche: Model.ICommissionFraisMarche): void;
        sauvegarderNouvelleCommission(): void;
        annuler(): void;
    }
    class ModalGestionAjoutCommissionsControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private modifierConditionArreteService;
        private servicesCommuns;
        private mwNotificationService;
        static $inject: string[];
        modalDatas: any;
        informationConditionsArretes: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        deviseDuCompte: string;
        tableauListeCommissionsFraisMarche: MyWay.UI.ImwTableOptions;
        selectedLinesPourAjoutCommissions: Array<Object>;
        montrerListeCommissionsEtFrais: boolean;
        commissionsFraisMarcheSelectionnee: Model.ICommissionFraisMarche;
        messageErreurDate: string;
        dateEffet: Date;
        afficherMessageErreur: boolean;
        tauxApplication: any;
        boutonValiderActif: boolean;
        montrerAjoutCommissionSelectionnee: boolean;
        constructor($scope: IModalGestionAjoutCommissionsScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierConditionArreteService: Service.ModifierConditionArreteService, servicesCommuns: Service.ServicesCommuns, mwNotificationService: MyWay.UI.IMwNotificationService);
        selectedLinesPourAjoutCommission: Array<Object>;
        construireTableauListeCommissionsEtFrais(listeCommissionsFraisMarche: Model.ICommissionFraisMarche[]): void;
        miseEnFormeCommissionFraisMarcheSelectionnee(commissionsFraisMarche: Model.ICommissionFraisMarche): void;
        rafraichirValeursCalculees(): void;
        changerTauxApplication(): void;
        sauvegarderNouvelleCommission(): void;
        annuler(): void;
    }
}

declare module contratCCE {
    interface IModalGestionConditionsAjoutDebitricesScope extends ng.IScope {
        viewModelModalGestionAjoutConditionsDebitricesCtrl: IModalGestionAjoutConditionsDebitricesControleur;
    }
    interface IModalGestionAjoutConditionsDebitricesControleur {
        modalDatas: any;
        informationConditionsArretes: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        deviseDuCompte: string;
        tableauListeConditionDebitriceGenerale: MyWay.UI.ImwTableOptions;
        selectedLinesPourAjoutConditionDebitrice: Array<Object>;
        montrerListeConditionDebitriceGenerale: boolean;
        conditionDebitriceGeneraleSelectionnee: Model.IConditionDebitriceGenerale;
        messageErreurDate: string;
        listeCodeTauxSubstitution: string[];
        listeTauxSubstitution: any[];
        dateEffet: Date;
        listePalier: Model.IPalierBaremeDebiteur[];
        afficherMessageErreur: boolean;
        boutonValiderActif: boolean;
        montrerAjoutConditionDebitriceSelectionnee: boolean;
        ajoutPalierAutorise: boolean;
        construireTableauListeConditionsDebitricesGenerales(listeConditionDebitricesGenerales: Model.IConditionDebitriceGenerale[]): void;
        miseEnFormeConditionGeneraleSelectionnee(conditionDebitricesGenerales: Model.IConditionDebitriceGenerale): void;
        sauvegarderNouvelleConditionDebitrice(): void;
        changerCodeTaux(numeroPalier: number): void;
        changerMargeClient(numeroPalier: number): void;
        changerVariationPalier(numeroPalier: number): void;
        modifierNombrePalier(estUnAjout: boolean): void;
        annuler(): void;
    }
    class ModalGestionAjoutConditionsDebitricesControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private modifierConditionArreteService;
        private servicesCommuns;
        static $inject: string[];
        modalDatas: any;
        informationConditionsArretes: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        tableauListeConditionDebitriceGenerale: MyWay.UI.ImwTableOptions;
        conditionDebitriceGeneraleSelectionnee: Model.IConditionDebitriceGenerale;
        listePalier: Model.IPalierBaremeDebiteur[];
        listeCodeTauxSubstitution: string[];
        listeTauxSubstitution: any[];
        dateEffet: Date;
        boutonValiderActif: boolean;
        montrerListeConditionDebitriceGenerale: boolean;
        montrerAjoutConditionDebitriceSelectionnee: boolean;
        deviseDuCompte: string;
        messageErreurDate: string;
        afficherMessageErreur: boolean;
        ajoutPalierAutorise: boolean;
        constructor($scope: IModalGestionConditionsAjoutDebitricesScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierConditionArreteService: Service.ModifierConditionArreteService, servicesCommuns: Service.ServicesCommuns);
        selectedLinesPourAjoutConditionDebitrice: Array<Object>;
        construireTableauListeConditionsDebitricesGenerales(listeConditionDebitricesGenerales: Model.IConditionDebitriceGenerale[]): void;
        getListeTauxSubstitution(conditionDebitriceGeneraleSelectionnee: Model.IConditionDebitriceGenerale): void;
        miseEnFormeConditionGeneraleSelectionnee(conditionDebitricesGenerales: Model.IConditionDebitriceGenerale): void;
        sauvegarderNouvelleConditionDebitrice(): void;
        modifierNombrePalier(estUnAjout: boolean): void;
        remiseEnFormeConditionGeneraleSelectionnee(conditionDebitricesGenerales: Model.IConditionDebitriceGenerale, estUnAjout: boolean): void;
        changerCodeTaux(numeroPalier: number): void;
        changerMargeClient(numeroPalier: number): void;
        changerVariationPalier(numeroPalier: number): void;
        annuler(): void;
    }
}

declare module contratCCE {
    interface IModalGestionModificationCommissionsScope extends ng.IScope {
        viewModelModalGestionModificationCommissionsCtrl: IModalGestionModificationCommissionsControleur;
    }
    interface IModalGestionModificationCommissionsControleur {
        modalDatas: any;
        informationConditionsArretes: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        deviseDuCompte: string;
        commissionNegocieeSelectionnee: Model.ICommissionFraisNegociee;
        tauxApplication: any;
        messageErreurDate: string;
        dateEffet: Date;
        afficherMessageErreur: boolean;
        boutonValiderActif: boolean;
        sauvegarderModificationCommission(): void;
        annuler(): void;
    }
    class ModalGestionModificationCommissionsControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private modifierConditionArreteService;
        private servicesCommuns;
        private mwNotificationService;
        static $inject: string[];
        modalDatas: any;
        informationConditionsArretes: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        deviseDuCompte: string;
        tableauListeCommissionsFraisMarche: MyWay.UI.ImwTableOptions;
        montrerListeCommissionsEtFrais: boolean;
        commissionNegocieeSelectionnee: Model.ICommissionFraisNegociee;
        tauxApplication: any;
        messageErreurDate: string;
        dateEffet: Date;
        dateEffetIHM: string;
        afficherMessageErreur: boolean;
        boutonValiderActif: boolean;
        constructor($scope: IModalGestionModificationCommissionsScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierConditionArreteService: Service.ModifierConditionArreteService, servicesCommuns: Service.ServicesCommuns, mwNotificationService: MyWay.UI.IMwNotificationService);
        miseEnFormeCommissionNegocieeSelectionnee(commissionNegociee: Model.ICommissionFraisNegociee): void;
        rafraichirValeursCalculees(): void;
        changerTauxApplication(): void;
        sauvegarderModificationCommission(): void;
        annuler(): void;
    }
}

declare module contratCCE {
    interface IModalGestionModificationConditionsDebitricesScope extends ng.IScope {
        viewModelModalGestionModificationConditionsDebitricesCtrl: IModalGestionModificationConditionsDebitricesControleur;
    }
    interface IModalGestionModificationConditionsDebitricesControleur {
        modalDatas: any;
        informationConditionsArretes: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        deviseDuCompte: string;
        conditionDebitriceNegocieeSelectionnee: Model.IConditionDebitriceNegociee;
        messageErreurDate: string;
        listeCodeTauxSubstitution: string[];
        listeTauxSubstitution: any[];
        dateEffet: Date;
        listePalier: Model.IPalierBaremeDebiteur[];
        afficherMessageErreur: boolean;
        boutonValiderActif: boolean;
        ajoutPalierAutorise: boolean;
        sauvegarderModificationConditionDebitrice(): void;
        changerCodeTaux(numeroPalier: number): void;
        changerMargeClient(numeroPalier: number): void;
        changerVariationPalier(numeroPalier: number): void;
        modifierNombrePalier(estUnAjout: boolean): void;
        annuler(): void;
    }
    class ModalGestionModificationConditionsDebitricesControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private modifierConditionArreteService;
        private servicesCommuns;
        static $inject: string[];
        modalDatas: any;
        informationConditionsArretes: Model.IInformationGlobale;
        informationContrat: Model.IInformationGlobaleOuverture;
        conditionDebitriceNegocieeSelectionnee: Model.IConditionDebitriceNegociee;
        conditionDebitriceGeneraleCorrespondante: Model.IConditionDebitriceGenerale;
        listePalier: Model.IPalierBaremeDebiteur[];
        listeCodeTauxSubstitution: string[];
        listeTauxSubstitution: any[];
        dateEffet: Date;
        boutonValiderActif: boolean;
        deviseDuCompte: string;
        messageErreurDate: string;
        afficherMessageErreur: boolean;
        ajoutPalierAutorise: boolean;
        constructor($scope: IModalGestionModificationConditionsDebitricesScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierConditionArreteService: Service.ModifierConditionArreteService, servicesCommuns: Service.ServicesCommuns);
        getListeTauxSubstitution(conditionDebitriceNegocieeSelectionnee: Model.IConditionDebitriceNegociee): void;
        miseEnFormeConditionDebitriceNegociee(conditionDebitriceNegocieeSelectionnee: Model.IConditionDebitriceNegociee): void;
        sauvegarderModificationConditionDebitrice(): void;
        modifierNombrePalier(estUnAjout: boolean): void;
        remiseEnFormeConditionDebitriceNegocieeSelectionnee(conditionDebitriceNegocieeSelectionnee: Model.IConditionDebitriceNegociee): void;
        changerCodeTaux(numeroPalier: number): void;
        changerMargeClient(numeroPalier: number): void;
        changerVariationPalier(numeroPalier: number): void;
        annuler(): void;
    }
}

declare module contratCCE {
    interface IModalAjoutCompteScope extends ng.IScope {
        viewModelModalAjoutCompteCtrl: IModalAjoutCompteControleur;
    }
    interface IModalAjoutCompteControleur {
        modalDatas: any;
        rice: MyWay.Model.Rice;
        messageErreur: string;
        afficherMessageErreurCompte: boolean;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        ok(): void;
        close(): void;
    }
    class ModalSaisieRiceControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private compteService;
        private informationsGlobalesService;
        static $inject: string[];
        modalDatas: any;
        rice: MyWay.Model.Rice;
        messageErreur: string;
        afficherMessageErreurCompte: boolean;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        informationRiceSaisi: Model.IInformationGlobaleOuverture;
        informationGlobale: Model.IInformationGlobale;
        compteAOuvrir: Model.IInformationGlobaleOuverture;
        constructor($scope: IModalAjoutCompteScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, compteService: myway.comInterdomaine.CompteService, informationsGlobalesService: Service.InformationsGlobalesService);
        ok(): void;
        close(): void;
    }
}

declare module contratCCE {
    class MwContratCCEControleur {
        private $scope;
        private serviceAgentExtended;
        private informationsGlobalesService;
        private compteService;
        private creationCCEService;
        static $inject: string[];
        action: Enum.ActionContrat;
        infosCompte: Model.IInformationGlobaleOuverture;
        codeNatureCompte: string;
        identifiantPersonne: number;
        private nomAction;
        informationGlobale: Model.IInformationGlobale;
        titre: string;
        informationContrat: Model.IInformationGlobaleOuverture;
        estUnAvenant: boolean;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        indicateurRequeteEnCours: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, informationsGlobalesService: Service.InformationsGlobalesService, compteService: myway.comInterdomaine.CompteService, creationCCEService: Service.CreationCCEService);
        getInformationsGlobales(): void;
    }
}

declare module contratCCE {
}

declare module contratCCE {
    class PageDevMwContratCCEControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        compteAOuvrir: Model.IInformationGlobaleOuverture;
        compteACreer: Model.IIdentificationContrat;
        creationAutorisee: boolean;
        ouvertureAutorisee: boolean;
        indicateurVueDirective: boolean;
        action: Enum.ActionContrat;
        infosCompte: Model.IInformationGlobaleOuverture;
        codeNatureCompte: string;
        identifiantPersonne: number;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
        creerContratCCE(): void;
        ouvrirContratCCE(): void;
    }
}

declare module contratCCE {
    function mwAjoutCompte(): ng.IDirective;
}

declare module contratCCE {
    function mwConditionsArretes(): ng.IDirective;
}

declare module contratCCE {
    function mwDateValeur(): ng.IDirective;
}

declare module contratCCE {
    function mwFonctionnement(): ng.IDirective;
}

declare module MyWay.UI {
    function mwJPicker(): ng.IDirective;
}

declare module contratCCE {
    function mwListeDeCompte(): ng.IDirective;
}

declare module contratCCE {
    function mwContratCCE(): ng.IDirective;
}

declare module contratCCE.Enum {
    enum ActionContrat {
        Ouverture = 0,
        Avenant = 1,
        Cloture = 2,
    }
}

declare module contratCCE.Service {
    class CreationCCEService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        sauvegarderContratCCE(compteACreer: Model.IIdentificationContrat): ng.IPromise<Model.IIdentificationContrat>;
    }
}

declare module contratCCE.Service {
    class InformationsGlobalesService {
        private serviceAgentExtended;
        static $inject: string[];
        data: Object;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getInformationsGlobales(informationContrat: Model.IInformationGlobaleOuverture): ng.IPromise<Model.IInformationGlobale>;
        sauvegarderInformationsGlobales(fonctionnementComplet: Model.IFonctionnement, identifiantContrat: Model.IIdentificationContrat): ng.IPromise<Model.ICaracteristiqueGenerale>;
    }
}

declare module contratCCE.Service {
    class ModifierConditionArreteService {
        private serviceAgentExtended;
        static $inject: string[];
        private numeroCompte;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        miseEnFormePalier(listePaliers: Model.IPalierBaremeDebiteur[]): Object[];
        sauvegarderConditionArrete(conditionDebitriceGenerale: Model.IConditionDebitriceGenerale, listePaliers: Model.IPalierBaremeDebiteur[], informationContrat: Model.IInformationGlobaleOuverture): ng.IPromise<Model.IConditionDebitriceNegociee>;
        modifierConditionArrete(conditionArreteDebitrice: Model.IConditionDebitriceNegociee, listePaliers: Model.IPalierBaremeDebiteur[], informationContrat: Model.IInformationGlobaleOuverture): ng.IPromise<Model.IConditionDebitriceNegociee>;
        supprimerConditionArrete(conditionArreteDebitrice: Model.IConditionDebitriceNegociee, informationContrat: Model.IInformationGlobaleOuverture): ng.IPromise<string>;
        sauvegarderConditionCommissionsFrais(commissionFraisMarche: Model.ICommissionFraisMarche, tauxApplication: any, informationContrat: Model.IInformationGlobaleOuverture, dateEffet: Date): ng.IPromise<Model.IConditionCommissionFrais>;
        modifierConditionCommissionsFrais(commissionNegociee: Model.ICommissionFraisNegociee, tauxApplication: any, informationContrat: Model.IInformationGlobaleOuverture, dateEffet: Date): ng.IPromise<Model.IConditionCommissionFrais>;
        supprimerConditionCommissionsFrais(informationContrat: Model.IInformationGlobaleOuverture, dateEffet: Date): ng.IPromise<Model.IConditionCommissionFrais>;
    }
}

declare module contratCCE.Service {
    class ModifierDateDeValeurService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getMessageErreur(typeOperation: string): Model.ErreurDatesDeValeurs;
        sauvegarderDatesDeValeurs(contratCCE: Model.IDateValeurCCE): ng.IPromise<Model.IDateValeurCCE>;
    }
}

declare module contratCCE.Service {
    class RecupererConditionArreteService {
        private serviceAgentExtended;
        private servicesCommuns;
        static $inject: string[];
        data: Object;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, servicesCommuns: Service.ServicesCommuns);
        miseEnFormeDonneesPourAffichageConditionsArretesDebitrices(conditionDebitriceDefaut: Model.IConditionDebitriceDefaut, listeConditionsNegociees: Model.IConditionDebitriceNegociee[], conditionDebitriceGenerales: Model.IConditionDebitriceGenerale[], dateOuvertureContrat: string): Model.IConditionDebitriceNegociee[];
        miseEnFormeDonneesPourAffichageConditionsArretesCommissions(conditionArreteDefaut: Model.ICommissionFraisDefaut, listeConditionArreteNegociee: Model.ICommissionFraisNegociee[], listeCommissionsEtFrais: Model.ICommissionFraisMarche[], dateOuvertureContrat: string): Model.ICommissionFraisNegociee[];
        MiseEnFormeDateDuJours(date: Date): string;
    }
}

declare module contratCCE.Service {
    class RecupererDateDeValeurService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getLibelleTypeCalendrier(typeCalendrier: string): Model.OperationDateDeValeur;
        getLibelleOperation(typeOperation: string, codeProvenance: string, typeProvenance: string): Model.OperationDateDeValeur;
        getLibelleDateDeValeurAppliquee(typeValeurAppliquee: string): any;
        getListeOperationDateDeValeur(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<Model.IDateValeur[]>;
        getListeDateDeValeurParDefaut(codeEtablissement: string, codeGuichet: string): ng.IPromise<Model.IDateValeur[]>;
    }
}

declare module contratCCE.Service {
    class RecupererFonctionnementService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getLibelleSurveillance(typeSurveillance: string): Model.InformationFormulaireFonctionnement;
        getLibelleTypeFonctionnement(typeFonctionnement: string): Model.InformationFormulaireFonctionnement;
        getListeTypeFonctionnement(): string[];
        getListeSurveillance(): string[];
    }
}

declare module contratCCE.Service {
    class ServicesCommuns {
        private serviceAgentExtended;
        static $inject: string[];
        data: Object;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        miseEnFormeDate(date: Date): string;
        MiseEnFormeDateExistante(date: string): string;
    }
}

declare module contratCCE.Model {
    interface ICommissionFraisDefaut {
        codeDeviseCommission: string;
        codeTauxReferenceCredit: string;
        codeTauxReferenceDebit: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionMouvement: number;
        commissionImmobilisation: number;
        delaiRenouvellementDebiteur: number;
        montantFraisTenueCompte: number;
        numeroBaremeCommissionDefaut: number;
        numeroBaremeCrediteurDefaut: number;
        tauxApplicationDecouvert: number;
        tauxApplicationFraisOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxCommissionDecouvert: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        tauxCommissionMouvement: number;
        tauxCommissionImmobilisation: number;
        valeurVariationBaremeDebiteur: number;
        montantFraisOperations: number;
        baseFraisOperations: number;
        numeroConditionDebitriceDefaut: number;
    }
}

declare module contratCCE.Model {
    interface ICommissionFraisMarche {
        "codeDevise": string;
        "codeGestionTechnique": string;
        "codeNiveauResponsabilite": string;
        "commissionDecouvert": number;
        "commissionDepassement1": number;
        "commissionDepassement2": number;
        "commissionDepassement3": number;
        "commissionImmobilisation": number;
        "dateCreationBareme": string;
        "dateModifBareme": string;
        "fraisOperations": number;
        "indicateurBareme": string;
        "libelleBareme": string;
        "montantFraisTenueCompte": number;
        "numeroBaremeCommission": number;
        "codeMarche": string;
        "commissionMouvement": number;
    }
}

declare module contratCCE.Model {
    interface ICommissionFraisNegociee {
        codeMarche: string;
        codeTauxReferenceCredit: string;
        codeTauxReferenceDebit: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionMouvement: number;
        commissionImmobilisation: number;
        dateCreation: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        dateModification: Date;
        montantFraisOperations: number;
        baseFraisOperations: number;
        indicateurBaremeCommission: string;
        libelleBaremeCommission: string;
        montantFraisTenueCompte: number;
        baseFraisTenueCompte: string;
        numeroBaremeCommission: number;
        numeroBaremeCrediteur: number;
        tauxApplicationOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxCommissionDecouvert: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        tauxCommissionMouvement: number;
        tauxCommissionImmobilisation: number;
        tauxFraisTenueCompte: number;
        variationBaremeCrediteur: number;
        variationBaremeDebiteur: number;
        numeroBaremeDebiteur: number;
        codeDeviseCommissionFraisNegociee: string;
        tauxApplicationDecouvert: number;
        "codeDeviseCommission"?: string;
        "delaiRenouvellementDebiteur"?: number;
        "numeroBaremeCommissionDefaut"?: number;
        "numeroBaremeCrediteurDefaut"?: number;
        "numeroBaremeDebiteurDefaut"?: number;
        "tauxApplicationFraisOperation"?: number;
        "valeurVariationBaremeDebiteur"?: number;
    }
}

declare module contratCCE.Model {
    interface IConditionArreteCommission {
        dateEffet: Date;
        numeroBaremeCommission: number;
        numeroBaremeCrediteur: number;
        numeroBaremeDebiteur: number;
        tauxApplicationDecouvert: number;
        tauxApplicationOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxFraisTenueCompte: number;
        variationBaremeCrediteur: number;
        variationBaremeDebiteur: number;
    }
}

declare module contratCCE.Model {
    interface IConditionArreteSynthese {
        modeArrete: string;
        periodiciteArrete: string;
        periodiciteFutureArrete: string;
        dateChangementPeriodicite: Date;
        codeEchelleCompteEnvoi: string;
        codeEchelleFusionEnvoi: string;
        editionEchelleDetailleCompte: string;
        editionEchelleDetailleFusion: string;
        codeBanquePrelevement: string;
        codeGuichetPrelevement: string;
        numeroComptePrelevement: string;
        numeroBaremeCommission: number;
        numeroBaremeInteretDebiteur: number;
        codeTauxDebiteurReference: string;
        libelleTauxDebiteur: string;
        variationTauxBaremeDebiteur: number;
        numeroBaremeInteretCrediteur: number;
        codeTauxCrediteurReference: string;
        libelleTauxCrediteur: string;
        variationBaremeTauxCrediteur: number;
        tauxCaisseCommissionDecouvert: number;
        tauxApplicationComDecouvert: number;
        tauxCommissionDecouvert: number;
        tauxCaisseCommMouvement: number;
        tauxApplicationCommMouvement: number;
        tauxCommissionMouvement: number;
        tauxCaisseCommissionImmo: number;
        tauxApplicationCommissionImmo: number;
        tauxCommissionImmo: number;
        tauxCaisseCommDepassement1: number;
        tauxCaisseCommDepassement2: number;
        tauxCaisseCommDepassement3: number;
        tauxAppCommDepassement1: number;
        tauxAppCommDepassement2: number;
        tauxAppCommDepassement3: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        montantFraisOperationEuro: number;
        tauxApplicationFraisOperation: number;
        montantUnitFraisOperationEuro: number;
        montantCaisseFraisTenueCptEuro: number;
        tauxFraisTenueCompteEuro: number;
        montantFraisTenueCptEuro: number;
        codeGestionTechnique: string;
        indicateurContratOuvertClos: string;
        typeFranchiseAgios: string;
        montantFranchiseAgiosEuro: number;
        libelleFamilleMarche: string;
        indicateurOuvertureAssurance: string;
        libelleCourtBareme: string;
        nombrePaliersBareme: number;
        indicateurConditionsPerso: string;
        margeEtablissementTranche1: number;
        margeEtablissementTranche2: number;
        margeEtablissementTranche3: number;
        margeEtablissementTranche4: number;
        margeEtablissementTranche5: number;
        codeDevise: string;
        nombrePaliersActifs: number;
        libelleCourtBaremeDebit: string;
        indicateurConditionDefaut: string;
        tauxReferencePalier1Devise: string;
        tauxReferencePalier2Devise: string;
        tauxReferencePalier3Devise: string;
        tauxReferencePalier4Devise: string;
        tauxReferencePalier5Devise: string;
        borneSuperieurePalier1Devise: number;
        borneSuperieurePalier2Devise: number;
        borneSuperieurePalier3Devise: number;
        borneSuperieurePalier4Devise: number;
        borneSuperieurePalier5Devise: number;
        margeTauxReferencePalier1Dev: number;
        margeTauxReferencePalier2Dev: number;
        margeTauxReferencePalier3Dev: number;
        margeTauxReferencePalier4Dev: number;
        margeTauxReferencePalier5Dev: number;
        valeurTauxReferenceTranche1Dev: number;
        valeurTauxReferenceTranche2Dev: number;
        valeurTauxReferenceTranche3Dev: number;
        valeurTauxReferenceTranche4Dev: number;
        valeurTauxReferenceTranche5Dev: number;
        listePalier: IPalier[];
    }
}

declare module contratCCE.Model {
    interface IConditionCommissionFrais {
        identificationContrat: IIdentificationContratCommission;
        listeConditionArrete: IConditionArreteCommission[];
    }
}

declare module contratCCE.Model {
    interface IConditionDebitriceDefaut {
        codeDevise: string;
        identifiantBareme: number;
        indicateurBaremeDefaut: string;
        libelleCourtBareme: string;
        libelleBareme: string;
        margeMaximumBareme: number;
        margeMinimumBareme: number;
        listePalier: IPalier[];
        nombrePaliersActifs: number;
        dateDebutValidite: string;
    }
}

declare module contratCCE.Model {
    interface IConditionDebitriceGenerale {
        "identifiantConditionDebitriceGenerale": number;
        "dateDebutValidite": string;
        "dateFinEffet": string;
        "libelleCourtBareme": string;
        "libelleBareme": string;
        "codeNiveauResponsabilite": string;
        "codeTaux": string;
        "libelleTauxDebiteur": string;
        "periodiciteMajTaux": string;
        "valeurTauxReference": number;
        "indicateurBaremeDefaut": string;
        "nombrePaliersActifs": number;
        "nombreMaximumPaliers": number;
        "margeMinimumBareme": string;
        "margeMaximumBareme": string;
        "codeDevise": string;
        "codeTauxSubstitution1": string;
        "libelleTauxSubstitution1": string;
        "valeurTauxSubstitution1": number;
        "periodiciteMajTauxSubstitution1": string;
        "codeTauxSubstitution2": string;
        "libelleTauxSubstitution2": string;
        "periodiciteMajTauxSubstitution2": string;
        "valeurTauxSubstitution2": number;
        "codeTauxUsure": string;
        "libelleTauxUsure": string;
        "valeurTauxUsure": number;
        "codeGestionTechnique": string;
    }
}

declare module contratCCE.Model {
    interface IConditionDebitriceNegociee {
        "dateDebutValidite": string;
        "dateHeureCreation": string;
        "identifiantBareme": number;
        "libelleCourtBareme": string;
        "libelleBareme": string;
        "margeMaximumBareme": number;
        "margeMinimumBareme": number;
        "montantDecouvert": number;
        "nombrePaliersActifs": number;
        "nombreMaximumPaliers": number;
        "numeroChrono": number;
        "listePalier": Model.IPalier[];
        "indicateurBaremeDefaut"?: string;
        "codeDevise"?: string;
        "codeEtablissement"?: string;
        "codeGuichet"?: string;
        "numeroCompte"?: string;
    }
}

declare module contratCCE.Model {
    interface IIdentificationContratCommission {
        codeGuichet: string;
        numeroCompte: string;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        identifiantContrat: number;
    }
}

declare module contratCCE.Model {
    interface IPalierBaremeDebiteur {
        "numeroPalier": number;
        "tauxReference": string;
        "valeurTaux": number;
        "margeTauxReference": number;
        "tauxClientIndicatif": number;
        "borneSuperieure": number;
        "variationBorneSuperieure": number;
        "margeMinimum": number;
        "margeMaximum": number;
    }
}

declare module contratCCE.Model {
    interface IPalier {
        numeroPalier: number;
        borneInferieure: number;
        borneSuperieure: number;
        margeTauxReference: number;
        tauxReference: string;
        valeurTaux: number;
        variationBorneSuperieure: number;
    }
}

declare module contratCCE.Model {
    interface ICaracteristiqueGenerale {
        "fonctionnement": IFonctionnementCatGen;
        "identificationContrat": IIdentificationContrat;
    }
}

declare module contratCCE.Model {
    interface IDevise {
        CILIUD: string;
        COLIDV: string;
        LILIDV: string;
    }
}

declare module contratCCE.Model {
    interface IIdentificationContratDatVal {
        numeroCompte: string;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        codeGuichet: string;
    }
}

declare module contratCCE.Model {
    interface IIdentificationContrat {
        "codeEtablissement": string;
        "codeGuichet": string;
        "numeroEntiteTitulaire"?: number;
        "numeroSirenProfessionnel"?: string;
        "identifiantPersonne"?: number;
        "numeroOffreSouscrite": number;
        "numeroCompte"?: string;
        "codeProduitEngagement"?: string;
        "identifiantContrat"?: string;
        "identifiantProduitService": number;
        "codeNatureCompte"?: string;
        "codeMonnaieFonctionnement"?: string;
    }
}

declare module contratCCE.Model {
    interface ITablesDelocalisees {
        "id": string;
        "referentiel": string;
        "nom": string;
        "datemaj": string;
        "donnees": Model.IDevise[];
    }
}

declare module contratCCE.Model {
    interface IFonctionnementCatGen {
        codeFonctionnementAutorise: string;
        montantSeuil: number;
        codeElementSurveillance: string;
        modeArreteCompte: string;
        codePeriodeArreteCompte: string;
        codeEchelleCompteEnvoi: string;
        codeEchelleFusionEnvoi: string;
        indicAutorisationCreationDec: string;
        codeAutorisationRemuneration: string;
        codeDepassementAutorisation: string;
        indicAutorisationCmdeCarte: string;
        indicAutorisationCmdeChequier: string;
        indicFusionAgios: string;
        indicFusionCapital: string;
        numeroCompteFusion: string;
        codeDateValeurCheque: string;
        libelleCompte: string;
        futurePeriodiciteArrete: string;
        dateChangementPeriod: Date;
        codeNatureCompte: string;
        codeEtabComptePrlvmtAgios: string;
        codeEtabCompteSuppFactur: string;
        codeEtabCompteFusion: string;
        numeroComptePrlvmtAgios: string;
        numeroCompteSuppFactur: string;
        codeGuichetComptePrlvmtAgios: string;
        codeGuichetCompteSuppFactur: string;
        codeGuichetCompteFusion: string;
        numeroCompteAncien: string;
        codeEtabCompteAncien: string;
        codeGuichetCompteAncien: string;
        codeDevise: string;
        editionEchelleDetailleCompte: string;
        editionEchelleDetailleFusion: string;
        numeroContrat: number;
    }
}

declare module contratCCE.Model {
    interface IFonctionnement {
        codeAdresse?: string;
        codeAutorisationRemuneration: string;
        codeEtabCompteSuppFactur: string;
        codeDateValeurCheque: string;
        codeDepassementAutorisation: string;
        codeEchelleFusionEnvoi: string;
        codeEchelleCompteEnvoi: string;
        codeElementSurveillance: string;
        codeEtabCompteAncien: string;
        codeEtabCompteFusion: string;
        codeFonctionnementAutorise: string;
        codeGuichetCompteFusion: string;
        codeGuichetCompteSuppFactur: string;
        codeGuichetCompteAncien: string;
        codeGuichetComptePrlvmtAgios: string;
        codeDevise: string;
        codeNatureCompte: string;
        codePeriodeArreteCompte: string;
        codePeriodiciteReleve?: string;
        dateChangementPeriod?: Date;
        dateClotureCompteCourant?: Date;
        datePassageEuro?: Date;
        dateOuvertureCompteCourant?: Date;
        futurePeriodiciteArrete: string;
        indicAutorisationCmdeChequier: string;
        indicAutorisationCreationDec: string;
        indicAutorisationCmdeCarte: string;
        indicFusionAgios: string;
        indicFusionCapital: string;
        libelleCompte: string;
        libelleLongNature?: string;
        modeArreteCompte: string;
        montantSeuil: number;
        motifClotureCompte?: string;
        codeEtabComptePrlvmtAgios: string;
        numeroCompteAncien: string;
        numeroCompteSuppFactur: string;
        numeroContrat: number;
        numeroComptePrlvmtAgios: string;
        numeroCompteFusion: string;
        soldeDeviseTenueCompte?: number;
        soldeFrancs?: number;
        typeContratEntreprise?: string;
        typeNatureCompte: string;
    }
}

declare module contratCCE.Model {
    interface IBaremeConditionEtablissement {
        "dateValeurDefaut": IDateValeur[];
    }
}

declare module contratCCE.Model {
    interface IDateValeur {
        typeOperation: string;
        codeProvenance: string;
        nombreJours: number;
        typeCalendrier: string;
        typeOperationInterbancaire: string;
        typeProvenance: string;
    }
}

declare module contratCCE.Model {
    interface IDateValeurCCE {
        "identificationContrat": IIdentificationContratDatVal;
        "listeDateValeur": IDateValeur[];
    }
}

declare module contratCCE.Model {
    interface IEtatCompte {
        codeDeviseExpressionMontant: string;
        codeEtatProduitService: string;
        dateOuverture: Date;
        dateCloture: Date;
        soldeCompte: number;
        codeDeviseTenueCompte: string;
        soldeDeviseTenueCompte: number;
    }
}

declare module contratCCE.Model {
    interface IIndicateurFusion {
        montantSoldeFusionne: number;
        codeTypeFusion: string;
    }
}

declare module contratCCE.Model {
    interface IInfoDecouvert {
        "numeroContrat": number;
        "codeFonctionnementAutorise": string;
        "montantSeuil": number;
        "codeElementSurveillance": string;
        "modeArreteCompte": string;
        "codePeriodeArreteCompte": string;
        "codeEchelleCompteEnvoi": string;
        "codeEchelleFusionEnvoi": string;
        "indicAutorisationCreationDec": string;
        "codeAutorisationRemuneration": string;
        "codeDepassementAutorisation": string;
        "indicAutorisationCmdeCarte": string;
        "indicAutorisationCmdeChequier": string;
        "indicFusionAgios": string;
        "indicFusionCapital": string;
        "numeroCompteFusion": string;
        "codeDateValeurCheque": string;
        "libelleCompte": string;
        "codeMonnaie": string;
        "futurePeriodiciteArrete": string;
        "dateChangementPeriod": Date;
        "editionEchelleDetCompte": string;
        "editionEchelleDetFusion": string;
        "codeNatureCompte": string;
        "codeGuichet": string;
        "codeEtabComptePrlvmtAgios": string;
        "codeEtabCompteSuppFactur": string;
        "codeEtabCompteFusion": string;
        "numeroComptePrlvmtAgios": string;
        "numeroCompteSuppFactur": string;
        "codeGuichetComptePrlvmtAgios": string;
        "codeGuichetCompteSuppFactur": string;
        "codeGuichetCompteFusion": string;
        "numeroCompteAncien": string;
        "codeEtabCompteAncien": string;
        "codeGuichetCompteAncien": string;
    }
}

declare module contratCCE.Model {
    interface IInfoSynthese {
        "numeroContrat": number;
        "codeFonctionnementAutorise": string;
        "montantSeuil": number;
        "codeElementSurveillance": string;
        "modeArreteCompte": string;
        "codePeriodeArreteCompte": string;
        "codeEchelleCompteEnvoi": string;
        "codeEchelleFusionEnvoi": string;
        "indicAutorisationCreationDec": string;
        "codeAutorisationRemuneration": string;
        "codeDepassementAutorisation": string;
        "indicAutorisationCmdeCarte": string;
        "indicAutorisationCmdeChequier": string;
        "indicFusionAgios": string;
        "indicFusionCapital": string;
        "numeroCompteFusion": string;
        "codeDateValeurCheque": string;
        "libelleCompte": string;
        "codeMonnaie": string;
        "futurePeriodiciteArrete": string;
        "dateChangementPeriod": Date;
        "editionEchelleDetCompte": string;
        "editionEchelleDetFusion": string;
        "codeNatureCompte": string;
        "codeGuichet": string;
        "codeEtabComptePrlvmtAgios": string;
        "codeEtabCompteSuppFactur": string;
        "codeEtabCompteFusion": string;
        "numeroComptePrlvmtAgios": string;
        "numeroCompteSuppFactur": string;
        "codeGuichetComptePrlvmtAgios": string;
        "codeGuichetCompteSuppFactur": string;
        "codeGuichetCompteFusion": string;
        "numeroCompteAncien": string;
        "codeEtabCompteAncien": string;
        "codeGuichetCompteAncien": string;
    }
}

declare module contratCCE.Model {
    interface IInformationDateValeur {
        codeDateValeurCheque: string;
        codeGestion: string;
    }
}

declare module contratCCE.Model {
    interface IInformationGlobale {
        fonctionnement: IFonctionnement;
        conditionDebitriceNegociee: IConditionDebitriceNegociee[];
        etatCompte: IEtatCompte;
        donneesCompte: IDonneesCompte;
        parametresReleve: IParametresReleve;
        indicateurFusion: IIndicateurFusion;
        representantLegal: IRepresentantLegal;
        listeInfomationDateValeur: IInformationDateValeur;
        listeConditionDebitriceDefaut: IConditionDebitriceDefaut[];
        listeConditionDebitriceGenerale: IConditionDebitriceGenerale[];
        listeCommissionFraisMarche: ICommissionFraisMarche[];
        listeCommissionFraisNegociee: ICommissionFraisNegociee[];
        conditionArreteSynthese: IConditionArreteSynthese;
        commissionFraisDefaut: ICommissionFraisDefaut;
    }
}

declare module contratCCE.Model {
    interface IInformationGlobaleOuverture {
        indicateurInfoDecouvert: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeAction: string;
        numeroEntiteTitulaire: number;
        codeMonnaie: string;
        identifiantProduitService: number;
        numeroSirenProfessionnel?: string;
        numeroOffreSouscrite?: number;
    }
}

declare module contratCCE.Model {
    interface IDonneesCompte {
        codeGuichet: string;
        numeroCompte: string;
        codeDevise: string;
        codeEtatProduitService: string;
        dateOuverture: Date;
        dateCloture: Date;
        motifClotureCompte: string;
        soldeDeviseTenueCompte: number;
        libelleCompte: string;
        numeroContrat: number;
        typeNatureCompte: string;
        libelleNatureCompte: string;
        libelleLongNatureCompte: string;
        codeFonctionnement: string;
        libelleFonctionnement: string;
        montantSeuilRemarquable: number;
        codeElementSurveillance: string;
        libelleSurveillance: string;
        indicAutoCreatDecouvert: string;
        codeDepassementAutorisation: string;
        indicAutoCommandeChequier: string;
        indicAutoRemunerationCpte: string;
        indicAutoCommandeCarte: string;
        codeEtablissementGab: string;
        codeGuichetCompteRecepteur: string;
        numeroComptePrelevement: string;
        codeBanqueTarification: string;
        codeGuichetTarification: string;
        numeroCompteTarification: string;
        codeNatureCompte: string;
        codeEtablissement: string;
    }
}

declare module contratCCE.Model {
    interface IParametresReleve {
        codePeriocictié: string;
        codeTypeAdresse: string;
        designationCourte: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        libellePeriodicite: string;
    }
}

declare module contratCCE.Model {
    interface IRepresentantLegal {
        codeEtablissement: string;
        numeroEntiteTitulaire: number;
        identifiantPersonne: number;
        indicateurResponsableCompte: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: Date;
        nomLocalite: string;
        libelleNationalite: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        numeroTelephoneAdresse: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLienInterPersonnes: string;
        referencePieceJustificative: string;
        codeInseeLocalite: string;
        codeResident: string;
        numeroTelephoneTravail: string;
        codeAppartenanceReseau: string;
        codePaysInsee: string;
        codePaysIso: string;
        codePostal: string;
        codeSexe: string;
        codeAgentEconomique: string;
        nomEmployeur: string;
        dateEmbauche: Date;
        codePaysNaissance: string;
        codeCategorieSocioPro: string;
        numeroSiren: string;
        numeroSiret: string;
        codeFamilleCategorieJuridique: string;
        codeFamilleApeInsee: string;
        deuxDerniersCarInsee: string;
        rangPersonneET: string;
        codePaysOmcr: string;
        codePaysTitre: string;
    }
}

declare module contratCCE.Model {
    class ChequesDebites {
        static libelleTypeCalendrier: any;
    }
}

declare module contratCCE.Model {
    class ErreurDatesDeValeurs {
        static libelleErreur: any;
        static inferieurJInterdit: any;
        static superieurJInterdit: any;
        static superieurJPlus1Interdit: any;
    }
}

declare module contratCCE.Model {
    class OperationDateDeValeur {
        static libelleOperation: any;
        static libelleTypeCalendrier: any;
        static libelleDateDevaleurAppliquee: any;
    }
}

declare module contratCCE.Model {
    class InformationFormulaireFonctionnement {
        static libelleArreteMode: any;
        static libelleArretePeriode: any;
        static libelleSurveillance: any;
        static libelleTypeFonctionnement: any;
    }
}

declare module contratCCE.Model {
    class MessagesErreursProjet {
        static libelleErreur: any;
    }
}
