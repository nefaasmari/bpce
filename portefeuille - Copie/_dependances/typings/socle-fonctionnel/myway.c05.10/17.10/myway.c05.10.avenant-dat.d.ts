
declare module myway.gestionEpargne.avenant.gestionGeneriqueHorsOffre {
    var app: any;
}

declare module myway.gestionEpargne.avenant.gestionGeneriqueHorsOffre {
    class Avenant {
        protected appelAveant: IAppelAvenant;
        constructor(appelAveant: IAppelAvenant);
        htmlPath: string;
        leDATestModifiable(): boolean;
        validerDonneesPourAvenant: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Permet de lancer la mise en Gestion depuis GGHO
         * @implements {GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion}
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} compte rendu de mise en gestion de l'offre pour renvoi à GGHO
         */
        realiserLaMajConditionnee: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
    }
    class AvenantDatControleur {
        protected $scope: ng.IScope;
        protected $q: ng.IQService;
        protected appelAvenantService: AppelAvenantService;
        protected opeFiService: gghoCommun.OpeFiService;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        contexteAppel: string;
        codeActeGestion: string;
        idBloc: string;
        modeAcces: string;
        modeAffichage: string;
        avenant: Avenant;
        estInitialise: boolean;
        numeroPersonne: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, appelAvenantService: AppelAvenantService, opeFiService: gghoCommun.OpeFiService);
        private initialisation();
        private construireRequeteAppelAvenant();
        private calculerNumeroCompteDepuisContexteGGHO();
        private instancierAvenant(appelAvenant);
        protected associerBoutonGGHOavecFonctionControleur(): void;
        private signalerPasDeModificationPossible();
    }
    class AvenantCAT extends Avenant {
        protected appelAveant: IAppelAvenant;
        htmlPath: string;
        nouveauRiceCptCapital: string;
        nouveauRiceCptInterets: string;
        topModifRenouvellement: boolean;
        riceCptCapital: string;
        riceCptInterets: string;
        libelleRenouvellement: string;
        constructor(appelAveant: IAppelAvenant);
        dateOuverture: string;
        dateEcheance: string;
        getLibelleCaracterisitque(): string;
    }
    class AvenantQuadreto extends Avenant {
        protected appelAveant: IAppelAvenant;
        htmlPath: string;
        constructor(appelAveant: IAppelAvenant);
    }
}

declare module myway.gestionEpargne.avenant.gestionGeneriqueHorsOffre {
    /**
     * Composant de dépot a terme pour intégration à GGHO
     */
    function mwAvenantDat(): ng.IDirective;
}

declare module myway.gestionEpargne.avenant.gestionGeneriqueHorsOffre {
    interface IAppelAvenant {
        nomenclatureProduitsCENCEP: INomenclatureProduitsCENCEP;
        infosContrat: IInfosContrat;
        prepaCptAssocies: IPrepaCptAssocies;
        prepaRenouvellement: IPrepaRenouvellement;
        prepaRenouvellementRBDR: IPrepaRenouvellementRBDR;
        autorisations: IAutorisations;
        identification: IIdentification;
    }
    interface INomenclatureProduitsCENCEP {
        codeFamilleDAT: string;
    }
    interface IInfosContrat {
        codeProduit: string;
        numeroLigneContrat: string;
        codeProduitNational: string;
        deviseInterIso: string;
        libelleProduitCatalogueDAT: string;
        numeroSequenceCompte: string;
        dateEffetContrat: string;
        dateEcheanceContrat: string;
        numeroContrat: string;
        typeTaux: string;
    }
    interface IPrepaCptAssocies {
        RICECptCapital: string;
        RICECptRevenus: string;
        RICECptInterets: string;
    }
    interface IPrepaRenouvellement {
        dateProchainRenouvellementContrat: string;
        nbLimiteRenouvellementAuto: string;
        nbReelRenouvellementEffectif: string;
        soldeProchainRenouvellement: string;
        nbRenouvellementRestant: number;
    }
    interface IPrepaRenouvellementRBDR {
        dateNonReconduction: string;
        nbPeriodeARealiser: string;
    }
    interface IAutorisations {
        topCptCapital: string;
        topCptInterets: string;
        topArretRenouvellement: string;
        topRepriseRenouvellement: string;
        topModifAuto: string;
    }
    interface IIdentification {
        topCapit: string;
    }
}

declare module myway.gestionEpargne.avenant.gestionGeneriqueHorsOffre {
    interface IAppelAvenantQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numIdClientContratDAT: string;
        numeroPersonne: string;
        numeroEntiteTitulaire: string;
        typeCanal: string;
    }
    class AppelAvenantService {
        private serviceAgentExtended;
        private restServiceUrl;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        appelAvenant(query: IAppelAvenantQuery): ng.IPromise<IAppelAvenant>;
        estUnAppelAvenantQuadreto(appelAvenant: IAppelAvenant): boolean;
    }
}

declare module myway.gestionEpargne.avenant.gestionGeneriqueHorsOffre {
    class ModificationCompteControleur {
        protected $scope: ng.IScope;
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected appelAvenantService: AppelAvenantService;
        protected opeFiService: gghoCommun.OpeFiService;
        portefeuille: string;
        numeroNouveauCompte: string;
        /**
         * liste de type compte qui seront proposé dans les composant virement interne
         */
        listeTypesComptes: string[];
        rice: MyWay.Model.Rice;
        compte: MyWay.Model.Contrat;
        libelleCompteActuel: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, appelAvenantService: AppelAvenantService, opeFiService: gghoCommun.OpeFiService);
        protected initialiserDonneeComposantVirementInterne(): void;
        protected calculerNumeroNouveauCompte(): void;
    }
}

declare module myway.gestionEpargne.avenant.gestionGeneriqueHorsOffre {
    /**
     * Composant de dépot a terme pour intégration à GGHO
     */
    function mwModificationCompte(): ng.IDirective;
}
