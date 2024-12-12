
declare module Beneficiaires {
    var app: any;
}

declare module Beneficiaires {
}

declare module Beneficiaires {
    interface IEdition {
        identifiantTiers: number;
        numeroSiren: string;
        raisonSociale: string;
        libelleChargeClientele: string;
        status: number;
        libelleStatus: string;
        etatSurveillance: string;
    }
    class Edition implements IEdition {
        static STATUS_ATTENTE: number;
        static STATUS_IMPRIME: number;
        static STATUS_NOTIF: number;
        static STATUS_ERREUR: number;
        libelleChargeClientele: string;
        identifiantTiers: number;
        numeroSiren: string;
        raisonSociale: string;
        status: number;
        etatSurveillance: string;
        static $inject: string[];
        constructor(d: libBeneficiaires.ICorporateInformation);
        libelleStatus: string;
    }
    class MainControleur implements libBeneficiaires.ICommandListener, libBeneficiaires.INavigationListener {
        private serviceAgentExtended;
        static ACTION_IMPRIME: string;
        static ACTION_REFRESH: string;
        static ACTION_QUIT: string;
        static LIBELLE_MONO_EDITION: string;
        static LIBELLE_MULTI_EDITION: string;
        infobuleListeBE: {
            type: string;
            picto: string;
            ouvertureBlock: boolean;
            message1: string;
        };
        private resultatSurveillanceBeneficiaires;
        chargementTable: boolean;
        $timeout: ng.ITimeoutService;
        uiService: libBeneficiaires.IUIService;
        idPersonne: number;
        codeEtab: string;
        contexte: libBeneficiaires.IContexte;
        beneficiaireCorporateService: libBeneficiaires.BeneficiaireCorporateService;
        listeBeneficiaire: Array<libBeneficiaires.ICorporateInformation>;
        tools: libBeneficiaires.ITools;
        tabBeneficiaire: MyWay.UI.ImwTableOptions;
        $scope: ng.IScope;
        buttonEdition: libBeneficiaires.ButtonFooter;
        impressionService: libBeneficiaires.IImpressionBeneficiairesEffectifsService;
        rechercheBeneficiaireService: libBeneficiaires.IBeneficiaireRechCorporateService;
        pdf: any;
        fileURL: any;
        surveillanceCorporateService: libBeneficiaires.ISurveillanceCorporateService;
        popupService: libBeneficiaires.IPopupService;
        modalService: MyWay.UI.IModalService;
        elementSelectionne: IEdition;
        $sce: ng.ISCEService;
        tiersConformiteBeneficiaireEffectifService: libBeneficiaires.ITiersConformiteBeneficiaireEffectifService;
        sousTitre2: string;
        sousTitre1: string;
        sousTitre3: string;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, uiService: libBeneficiaires.IUIService, contexte: libBeneficiaires.IContexte, beneficiaireCorporateService: libBeneficiaires.BeneficiaireCorporateService, tools: libBeneficiaires.ITools, $scope: ng.IScope, impressionService: libBeneficiaires.IImpressionBeneficiairesEffectifsService, rechercheBeneficiaireService: libBeneficiaires.IBeneficiaireRechCorporateService, surveillanceCorporateService: libBeneficiaires.ISurveillanceCorporateService, popupService: libBeneficiaires.IPopupService, modalService: MyWay.UI.IModalService, $sce: ng.ISCEService, tiersConformiteBeneficiaireEffectifService: libBeneficiaires.ITiersConformiteBeneficiaireEffectifService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getCommandFooter();
        init(): void;
        private createTab();
        private createCol(bind, title?, css?, filter?);
        onSelectionChange(selectedObject: Object): void;
        onNavigation(): boolean;
        isValidAction(id: string): boolean;
        private onRefreshListe();
        onAction(id: string): void;
        private getBeneficiaireFromIdPersonne(idPersonne);
        /**
         * Etat de la surveillance BE multiple
         * @param beneficiaire
         */
        private recupererSurveillanceBeneficiaires(beneficiaire);
        /**
         * Etat de la surveillance BE
         * @param siren
         */
        private recupererSurveillanceBeneficiaire(siren);
        showModalMd(templateUrl: string, controllerName: string, templateDatas: libBeneficiaires.IPopupData<any>): ng.IPromise<any>;
        private onQuit();
    }
}

declare module Beneficiaires {
    interface ICodeEvenementMetier {
        code: string;
    }
    class CodeEvenementMetier implements ICodeEvenementMetier {
        code: string;
        constructor();
    }
    interface IDonneesDossierContrat {
        codeEtablissement: string;
        codeGuichet: string;
        clientBancaire: number;
        identifiantContrat: string;
        codeElementDeStructure: string;
        codeApplication: string;
        referenceExterneEDS: string;
        codeEvenementMetierPrincipal: CodeEvenementMetier;
        listCodeEvenementMetier: Array<CodeEvenementMetier>;
    }
    class DonneesDossierContrat implements IDonneesDossierContrat {
        codeEtablissement: string;
        codeGuichet: string;
        clientBancaire: number;
        identifiantContrat: string;
        codeElementDeStructure: string;
        codeApplication: string;
        referenceExterneEDS: string;
        codeEvenementMetierPrincipal: ICodeEvenementMetier;
        listCodeEvenementMetier: Array<ICodeEvenementMetier>;
        constructor();
    }
}

declare module Beneficiaires {
}

declare module Beneficiaires {
}

declare module Beneficiaires {
    /**
     * Controleur de la modale d'affichage du detail du lien
     */
    class ModaleEditerBordereauControleur {
        private $scope;
        private serviceAgentExtended;
        private $modalInstance;
        private mwNotificationService;
        private impressionBeneficiairesEffectifsService;
        private tiersConformiteBEService;
        private modalDatas;
        static $inject: string[];
        /**
         * Constructeur
         * @param serviceAgentExtended
         * @param $modalInstance
         * @param data
         * @param impressionBeneficiairesEffectifsService
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $modalInstance: any, data: any, mwNotificationService: MyWay.UI.IMwNotificationService, impressionBeneficiairesEffectifsService: libBeneficiaires.IImpressionBeneficiairesEffectifsService, tiersConformiteBEService: libBeneficiaires.ITiersConformiteBeneficiaireEffectifService);
        annuler(): void;
        editerBordereau(): void;
        annulerEditionBordereau(): void;
    }
}
