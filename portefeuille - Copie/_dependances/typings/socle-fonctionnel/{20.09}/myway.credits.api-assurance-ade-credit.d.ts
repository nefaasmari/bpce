
declare namespace AssuranceAdeCredit {
    var app: any;
}

declare namespace AssuranceAdeCredit.Constantes {
    /** Constantes relatives aux devises */
    namespace Devise {
        /** Code de la devise Euro (EUR) */
        const codeEuro: string;
        /** Code de la devise Dollar Canadien (CAD) */
        const codeDollarCanadien: string;
        /** Code de la devise Dollar (USD) */
        const codeDollar: string;
        /** Code de la devise Franc Suisse (CHF) */
        const codeFrancSuisse: string;
        /** Code de la devise Livre (GBP) */
        const codeLivre: string;
        const listeLibellesByCode: {
            "EUR": string;
            "CAD": string;
            "USD": string;
            "CHF": string;
            "GBP": string;
            "": string;
        };
    }
}

declare namespace AssuranceAdeCredit.Constantes.Inject {
    namespace Angular {
        const $filter: string;
    }
}

declare namespace AssuranceAdeCredit.Filters {
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IConfiguration {
        intitulePersonne: string;
        garantieDeces: boolean;
        garantiePtia: boolean;
        garantieArretTravail: boolean;
        garantieInvalidite: boolean;
        garantieFranchise: boolean;
        garantieCouvertureEcheance: boolean;
        garantieNiveauInvalidite: boolean;
        garantiePerteEmploi: boolean;
        montantPerteEmploi: number;
    }
    interface ISynthese {
        idPersonne: string;
        intituleAssure: string;
        libelleProduit: string;
        montantCredit: number;
        dureeCredit: number;
        garanties: string[];
        isCreditInFine: boolean;
        garantieFranchise: boolean;
        garantieCouvertureEcheance: boolean;
        garantieNiveauInvalidite: boolean;
        garantiePerteEmploi: boolean;
        montantPerteEmploi: number;
        quotite: number;
        coutMoyenMensuel: number;
        coutTotal: number;
        tauxTaea: number;
        codeDevise: string;
        syntheses: ISynthese[];
    }
    interface IViewModel {
        avantagePanels: IViewModelAvantagePanels;
        boutonPoursuivreVisible: boolean;
        cheminDeFer: Modeles.ICheminDeFer;
        libelleProduitInFine: string;
        listeCreditsVisible: boolean;
        listeMontantsPerteEmploi: number[];
        modeExpertActif: boolean;
        quotiteCouvertureVisible: boolean;
        tabset: IViewModelTabset;
        tarificationDerogatoire: boolean;
    }
    interface IViewModelAvantagePanels {
        groupe: boolean;
        personnalises: boolean;
    }
    interface IViewModelTabset {
        ready: boolean;
        show: boolean;
        tabs: IViewModelTabs;
    }
    interface IViewModelTabs {
        garanties: boolean;
        personnalisation: boolean;
        syntheseAssure: boolean;
        synthesesProposition: boolean;
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface ICheminDeFer {
        estVisible: boolean;
        etapes: ICheminDeFerEtape[];
    }
    interface ICheminDeFerEtape {
        cssClass: string;
        libelle: string;
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IControleurParametre {
        controleurAs: string;
        controleurName: string;
        templateUrl: string;
    }
}

declare namespace AssuranceAdeCredit {
    class AssuranceAdeControleur {
        static parametres: Modeles.IControleurParametre;
        configurationActuelle: Modeles.IConfiguration;
        quotiteCouverture: number;
        synthesePropositionParAssure: Modeles.ISynthese[];
        synthesePropositionParProduit: Modeles.ISynthese[];
        codeDevise: string;
        estModale: boolean;
        tooltips: {};
        viewModel: Modeles.IViewModel;
        static $inject: any[];
        constructor();
        private initTooltips();
        private initViewModel();
    }
}

declare namespace AssuranceAdeCredit {
}
