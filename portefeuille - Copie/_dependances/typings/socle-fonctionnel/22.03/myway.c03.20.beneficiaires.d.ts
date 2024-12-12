
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
        constructor(d: libBeneficiaires.ICorporateInformation);
        libelleStatus: string;
    }
    class MainControleur implements libBeneficiaires.ICommandListener, libBeneficiaires.INavigationListener {
        static ACTION_IMPRIME: string;
        static ACTION_REFRESH: string;
        static ACTION_QUIT: string;
        static LIBELLE_MONO_EDITION: string;
        static LIBELLE_MULTI_EDITION: string;
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
        $sce: ng.ISCEService;
        sousTitre2: string;
        sousTitre1: string;
        sousTitre3: string;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, uiService: libBeneficiaires.IUIService, contexte: libBeneficiaires.IContexte, beneficiaireCorporateService: libBeneficiaires.BeneficiaireCorporateService, tools: libBeneficiaires.ITools, $scope: ng.IScope, impressionService: libBeneficiaires.IImpressionBeneficiairesEffectifsService, rechercheBeneficiaireService: libBeneficiaires.IBeneficiaireRechCorporateService, $sce: ng.ISCEService);
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
        private onQuit();
    }
}

declare module Beneficiaires {
}

declare module Beneficiaires {
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
