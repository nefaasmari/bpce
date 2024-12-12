
declare module myway.gestionEpargne.depotATerme.gestionGeneriqueHorsOffre {
    var depotATermeGGHOModule: ng.IModule;
}


declare module myway.gestionEpargne.depotATerme.gestionGeneriqueHorsOffre {
    class DepotATermeControleur {
        private serviceAgentExtended;
        private contexteProcessusService;
        private ouvertureProduitService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        contexteAppel: string;
        codeActeGestion: string;
        idBloc: string;
        modeAcces: string;
        modeAffichage: string;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        codeModeFinancierParDefaut: string;
        donneesOuverture: myway.gestionEpargne.horsOffre.commun.DonneesOuvertureDAT;
        riceVersementInterets: MyWay.Model.Rice;
        compteVersementIneteret: MyWay.Model.Contrat;
        riceRemboursementEcheance: MyWay.Model.Rice;
        compteRemboursementEcheance: MyWay.Model.Contrat;
        ricePrelevement: MyWay.Model.Rice;
        comptePrelevement: MyWay.Model.Contrat;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteProcessusService: myway.gestionEpargne.horsOffre.commun.ContexteProcessusService, ouvertureProduitService: OuvertureProduitService);
        private associerBoutonGGHOavecFonctionControleur();
        private validerFormulaireDAT;
        /**
         * Permet de lancer la mise en Gestion depuis GGHO
         * @implements {GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion}
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} compte rendu de mise en gestion de l'offre pour renvoi à GGHO
         */
        ouvrirDAT: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private preparerListeDesComptes();
    }
}

declare module myway.gestionEpargne.depotATerme.gestionGeneriqueHorsOffre {
    /**
     * Composant de dépot a terme pour intégration à GGHO
     */
    function mwDepotATerme(): ng.IDirective;
}

declare module myway.gestionEpargne.depotATerme.gestionGeneriqueHorsOffre {
    interface IDonneesCommunes {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        codeProduitNational: string;
        codeBaremeTauxProgressif: string;
        typeTaux: string;
        dateEffetContrat: string;
        dateEcheanceContrat: string;
        codeDevise: string;
        compteSupport: ICompteSupport;
    }
    interface IInfosOperationDiverse {
        codeReference: string;
        libelleType: string;
        codeFamille: string;
        libelle1Saisi: string;
        libelle2Saisi: string;
    }
    interface IInfosVirementInterne {
        riceCompteVirement: string;
        libelleVirement: string;
    }
    interface IOperationFinanciere {
        modeFinancierNumerique: string;
        codeEvenementAtome: string;
        modeFinancierChoisi: string;
        libelleOperation1: string;
        libelleOperation2: string;
        infosOperationDiverse: IInfosOperationDiverse;
        infosCheque: IInfosCheque;
        infosVirementInterne: IInfosVirementInterne;
        codeDeviseOperation: string;
        montantOperation: number;
        dateValeurOperation: string;
    }
    interface IInfosComplementaires {
        typeVersementInterets: string;
        codeIndexTauxReference: string;
        codeSigneTxMargeNego: string;
        tauxMargeNegoAgent: number;
    }
    interface IInfosCheque {
        riceCompteVirement: string;
        typeCheque: string;
        nombreJourReserveEncaissement: string;
    }
    interface ICompteSupport {
        numeroRICECompteRevenus: string;
        numeroRICECompteCapital: string;
        numeroRIBComptePaiementInterets: string;
    }
    interface ICaracteristiqueGenerale {
        donneesCommunes: IDonneesCommunes;
        infosComplementaires: IInfosComplementaires;
        operationFinanciere: IOperationFinanciere;
    }
}

declare module myway.gestionEpargne.depotATerme.gestionGeneriqueHorsOffre {
    interface IpostCaracteristiqueGeneraleQuery {
        numeroDerogation?: string;
        codeApplicationTaxesFiscales: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        dateOperation?: string;
        codeNatureJuridique: string;
        codeResidenceFiscale: string;
        codePaysResidencePrincipale: string;
        designationBancaire: string;
        codeOptionAutorisation?: string;
    }
    class OuvertureProduitService {
        private serviceAgentExtended;
        private restServiceUrl;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        ouvrirProduit(adapteurOuvertureProduit: AdapteurOuvertureProduit): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        postCaracteristiqueGenerale(query: IpostCaracteristiqueGeneraleQuery, ouvertureProduit: ICaracteristiqueGenerale): ng.IPromise<ICaracteristiqueGenerale>;
    }
    class AdapteurOuvertureProduit {
        private donneesOuverture;
        private operationFinanciere;
        query: IpostCaracteristiqueGeneraleQuery;
        ouvertureProduit: ICaracteristiqueGenerale;
        constructor(donneesOuverture: myway.gestionEpargne.horsOffre.commun.DonneesOuvertureDAT, operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, compteSupport: ICompteSupport);
        private obtenirParametrePourServiceOuvertureDAT();
        private obtenirObjetOuvertureProduit();
        private obtenirDonneesCommunes();
        private obtenirInfosComplementaires();
        private obtenirOperationFinanciere();
    }
}
