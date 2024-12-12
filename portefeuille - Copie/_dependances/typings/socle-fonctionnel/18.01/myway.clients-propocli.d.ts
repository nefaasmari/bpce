
declare module propoClient {
    var app: any;
}

declare module propoClient.Constantes {
    class PropoClientConstantes {
        personnePhysique: string;
        personneMorale: string;
        codeCivilite: string[];
        genre: string[];
        marchePart: string;
        marchePro: string;
        static codeCanalTel: string;
        static codeCanalFace: string;
        static codeCanalNet: string;
        static codeCanalCourrier: string;
        static libelleCanalTelEnt: string;
        static libelleCanalTelSort: string;
        static libelleCanalFace: string;
        formatDate: string;
        static deviseEuro: string;
        referenceMomentDossier: {
            "01": string;
            "02": string;
            "03": string;
            "04": string;
            "05": string;
            "06": string;
        };
        tableauAction: {
            "dateNaissance": string;
            "designationCourte": string;
            "nomFamille": string;
            "prenom": string;
            "codeCivilite": string;
            "nomUsage": string;
            "dateMAJEnregistrement": string;
            "dateCotationFibenBdfN1": string;
            "codeProspect": string;
            "codePersonnaliteJuridique": string;
            "identifiantTiersEnRelation": string;
        }[];
    }
}

declare module propoClient.T {
    function isDefined(value: any): boolean;
    function isUndefined(value: any): boolean;
    function isBoolean(value: boolean): boolean;
    function isBooleanOfValue(object: any, value: boolean): boolean;
    function isString(value: string): boolean;
    function isStringOfValue(object: any, value: string): boolean;
    function isArray(value: Array<any>): boolean;
    function isArrayNotEmpty(value: any): boolean;
    function isDate(value: Date): boolean;
    function isNumber(value: number): boolean;
    function replaceNUStringWith(value: string, replacedValue: string): string;
}

declare module propoClient {
    class ChargementControleur {
        private serviceAgentExtended;
        private propoClientChargementService;
        private propoClientUtilsService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propoClientChargementService: Service.PropoClientChargementService, propoClientUtilsService: Service.PropoClientUtilsService);
        /**
         * initialisation du service de chargement
         */
        init(): void;
    }
}

declare module propoClient {
    class ErreurControleur {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        fermer(): void;
    }
}

declare module propoClient {
    interface IRechercheScope extends ng.IScope {
        result: myway.comGestionClient.RecherchePersonneResult;
    }
    class RechercheControleur {
        private serviceAgentExtended;
        private propoClientInitService;
        private $scope;
        result: myway.comGestionClient.RecherchePersonneResult;
        private watcher;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propoClientInitService: Service.PropoClientInitService, $scope: IRechercheScope);
        chargerPersonne(): void;
    }
}

declare module propoClient {
    class VuePropoClientControleur {
        private objetSynthese;
        private $route;
        private propoClientRestService;
        private propoClientProfilService;
        private propoClientProduitsService;
        private modalService;
        private propoClientUtilsService;
        private $rootScope;
        titrePage: string;
        titreVoletDosPers: string;
        titreActionCompl: string;
        titreDossVide: string;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseClient.ISyntheseClientDonneesSignaletiques;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits;
        urlVue: string;
        loader: boolean;
        listeProduitsActifs: IObjetProduitFormate[];
        _categories: any;
        /**
         * état de l'accordéon
         */
        etatAccordeon: string;
        static $inject: string[];
        constructor(objetSynthese: Modeles.SyntheseClient.ISyntheseDonneesClient, $route: ng.route.IRouteService, propoClientRestService: Service.PropoClientRestService, propoClientProfilService: Service.PropoClientProfilService, propoClientProduitsService: Service.PropoClientProduitsService, modalService: MyWay.UI.IModalService, propoClientUtilsService: Service.PropoClientUtilsService, $rootScope: ng.IRootScopeService);
        /**
         * initialisation des données
         */
        init(): void;
        /**
         *
         * @param produit
         */
        filtreCategories(produit: any): boolean;
        /**
         *
         */
        produitFiltrer(): IObjetProduitFormate[];
        /**
         *
         */
        verifierEtatAccordeon(): void;
    }
}

declare module propoClient {
}

declare module propoClient.Modeles.CanalVente {
    interface IChoixCanal {
        codeCanal: string;
        codeSens?: string;
        libelle: string;
        icon: string;
    }
    interface ITableauEntiteTitulaireFormate {
        designationBancaireEntTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        libelleCourtEDSEntiteTitulaire: string;
    }
    interface IVieDossier {
        cle: string;
        valeur: string;
    }
}

declare module propoClient.Modeles.DonneesDelocalisees {
    interface IDonneesDelocalisees<T> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
}

declare module propoClient.Modeles.Produits {
    interface ISyntheseProduitsInfoCommune extends ISyntheseClientServicesInfoCom {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        libelleOffre: string;
        libelleCategorie: string;
        libelleCategorieLong: string;
        soldeProduitCommun: number;
        indicOppoIBCCE: string;
        indicOppoIBCptDepot: string;
        anneeAyantDroit: number;
        indicVersementDirectLivretA: string;
        nombreEcheanceExt: number;
        nombreEcheance: number;
        nombreEcheancesEnImpaye: number;
        nbreEchEnImpayeCredAlis: number;
        montantEcheance: number;
        montantEcheanceCredAlis: number;
        indicExistenceEngtDomicilation: string;
        codeRespectEngtDomiciliation: string;
        dateOuvertureService: string;
        identDossCommercialCredit: string;
        identifiantEnveloppe: string;
        deviseCredit: string;
        chargeMensuelleEndettement: number;
        mtEcheancePretAvecAssurance: number;
        identifiantContratCredBail: string;
        montantGarantiCredBail: number;
        montantEcheanceMer: number;
        montantAutoriseTotal: number;
        numeroContratCnp: string;
        libelleBlocageSouscriptionTitre: string;
        codeGestionnaireCompteTitres: string;
        codeDeviseTenueCompteCCE: string;
        dateEcheanceCompteHPEL: string;
        dateEcheanceComptePEL: string;
        libelleCourtContratIARD: string;
        libelleCourtContratIARDComp: string;
        typeSituationContratAssIARD: string;
        libelleSituationContratAss: string;
        montantAutoriseEnEuros: number;
        identifiantInterneSerena: string;
        numeroFormule: number;
        codeProduitNationalSAP: string;
        identifiantAdhesion: string;
        montantDecouvertUtileAurore: number;
        montantMensualiteCarteTeoz: number;
        mensualite: number;
        mntAutorisationCAU: number;
        montantGarantiEpargSal: number;
        typeSituationContratAssurance: string;
        codeEtatDossierCEDI: string;
        numDossContratProducteur: string;
        identifiantContratCefi: string;
        numDossierCetelemAurore: string;
        numeroDossierCetelemTeoz: string;
        codeEtatDossierCarteDB: string;
        numeroDossierCreditRevolving: number;
        identifiantContratDebCred: string;
        identifiantSupportCarte: string;
        numCarteAffaire: string;
        libelleCourtContratEpargSal: string;
        identifiantContratEpargSal: string;
        idtExterneContratPlacement: string;
        dateCreationEnregistrement: string;
        libelleLEtatTransfert: string;
        dateFinPel: string;
        codeEtatProduitServiceOrigine: string;
        libelleCourtFDG: string;
        identCredit: string;
        nomCommercialCourtPS: string;
        idExterneContratAssOM: string;
    }
    interface ISyntheseClientServicesInfoCom {
        libelleService: string;
        montantDecouvertCdd: number;
        codeNatureCompteCCE: string;
        montantDecouvertAutoDevise: number;
        identifiantLigneAlisOrigine: string;
        codeOrigineCredDossierOptAlis: string;
        typeCreditAlis: string;
        deviseCreditAlis: string;
        libelleTypeProduitCiloger: string;
        codeOffreCefiPretConso: string;
        libelleTypeProduitVega: string;
        libelle1CompteCci: string;
        codeDeviseTenueCptDepot: string;
        typeCredit: string;
        deviseCreditComp: string;
        libelleNatureCompteCCE: string;
        identifiantProduitAssCFF: string;
        libelleIdentifiantSourceExterne: string;
        nomCourtDomaineCNCECredBail: string;
        numeroContratIardComp: string;
        numeroCoffre: string;
        numeroSalleCoffre: number;
        codeTypeCoffre: string;
    }
    interface ISyntheseClientProduits {
        listeSyntheseClientCodeEtatProduit: Array<ISyntheseClientCodeEtatProduit>;
    }
    interface ISyntheseClientCodeEtatProduit {
        codeEtatProduitService: string;
        listeSyntheseClientEntiteTitulaireProduit: Array<ISyntheseClientEntiteTitulaireProduit>;
    }
    interface ISyntheseClientProdSmile {
        codeAdhesionActeGestion: string;
        operationSurForfaitALOrigine: string;
        identifiantCarteSmiles: string;
        dateCreationContratSMiles: string;
        dateResiliationContratSMiles: string;
    }
    class SyntheseclientTitulaireProduit implements ISyntheseClientEntiteTitulaireProduit {
        numeroEntiteTitulaireProd: number;
        listeSyntheseClientProdAssIARD: Array<ISyntheseClientProdAssIARD>;
        listeSyntheseClientProdLivretA: Array<ISyntheseClientProdLivretA>;
        listeSyntheseClientProdLivretB: Array<ISyntheseClientProdLivretB>;
        listeSyntheseClientProdLEP: Array<ISyntheseClientProdLEP>;
        listeSyntheseClientProdCptDepot: Array<ISyntheseClientProdCptDepot>;
        listeSyntheseClientProdLEL: Array<ISyntheseClientProdLEL>;
        listeSyntheseClientProdPEL: Array<ISyntheseClientProdPEL>;
        listeSyntheseClientProdPER: Array<ISyntheseClientProdPER>;
        listeSyntheseClientProdPEP: Array<ISyntheseClientProdPEP>;
        listeSyntheseClientProdPEA: Array<ISyntheseClientProdPEA>;
        listeSyntheseClientProdLivretJeune: Array<ISyntheseClientProdLivretJeune>;
        listeSyntheseClientProdLivretDev: Array<ISyntheseClientProdLivretDev>;
        listeSyntheseClientProdCptInstance: Array<ISyntheseClientProdCptInstance>;
        listeSyntheseClientProdEscompteCCE: Array<ISyntheseClientProdEscompteCCE>;
        listeSyntheseClientProdCptTeoz: Array<ISyntheseClientProdCptTeoz>;
        listeSyntheseClientProdVega: Array<ISyntheseClientProdVega>;
        listeSyntheseClientProdCredit: Array<ISyntheseClientProdCredit>;
        listeSyntheseClientProdTitres: Array<ISyntheseClientProdTitres>;
        listeSyntheseClientProdCoffre: Array<ISyntheseClientProdCoffre>;
        listeSyntheseClientProdCarteAurore: Array<ISyntheseClientProdCarteAurore>;
        listeSyntheseClientProdAssCNP: Array<ISyntheseClientProdAssCNP>;
        listeSyntheseClientProdCCE: Array<ISyntheseClientProdCCE>;
        listeSyntheseClientProdCreditComp: Array<ISyntheseClientProdCreditComp>;
        listeSyntheseClientProdAssCFF: Array<ISyntheseClientProdAssCFF>;
        listeSyntheseClientProdDATHorsPEL: Array<ISyntheseClientProdDATHorsPEL>;
        listeSyntheseClientProdDATPEL: Array<ISyntheseClientProdDATPEL>;
        listeSyntheseClientProdCreditAlis: Array<ISyntheseClientProdCreditAlis>;
        listeSyntheseClientProdCreditCEDI: Array<ISyntheseClientProdCreditCEDI>;
        listeSyntheseClientProdCiloger: Array<ISyntheseClientProdCiloger>;
        listeSyntheseClientProdTrade: Array<ISyntheseClientProdTrade>;
        listeSyntheseClientProdCreditBail: Array<ISyntheseClientProdCreditBail>;
        listeSyntheseClientProdEpargSalariale: Array<ISyntheseClientProdEpargSalariale>;
        listeSyntheseClientProdEpargnSalComp: Array<ISyntheseClientProdEpargnSalComp>;
        listeSyntheseClientProdOptAlis: Array<ISyntheseClientProdOptAlis>;
        listeSyntheseClientProdAutoTransfert: Array<ISyntheseClientProdAutoTransfert>;
        listeSyntheseClientProdSAP: Array<ISyntheseClientProdSAP>;
        listeSyntheseClientProdGarantieSante: Array<ISyntheseClientProdGarantieSante>;
        listeSyntheseClientProdFacturea: Array<ISyntheseClientProdFacturea>;
        listeSyntheseClientProdCartAffComp: Array<ISyntheseClientProdCartAffComp>;
        listeSyntheseClientProdCartAffaire: Array<ISyntheseClientProdCartAffaire>;
        listeSyntheseClientProdMomentverite: Array<ISyntheseClientProdMomentverite>;
        listeSyntheseClientProdSocfim: Array<ISyntheseClientProdSocfim>;
        listeSyntheseClientProdSmileComp: Array<ISyntheseClientProdSmileComp>;
        listeSyntheseClientProdCarteDebCredit: Array<ISyntheseClientProdCarteDebCredit>;
        listeSyntheseClientProdCautionFiliale: Array<ISyntheseClientProdCautionFiliale>;
        listeSyntheseClientProdAssIARDComp: Array<ISyntheseClientProdAssIARDComp>;
        listeSyntheseClientProdCCI: Array<ISyntheseClientProdCCI>;
        listeSyntheseClientProdOctav: Array<ISyntheseClientProdOctav>;
        listeSyntheseClientProdAssCFFComp: Array<ISyntheseClientProdAssCFFComp>;
        listeSyntheseClientProdAssIARDAllianz: Array<ISyntheseClientProdAssIARDAllianz>;
        listeSyntheseClientProdOPEFI: Array<ISyntheseClientProdOPEFI>;
        listeSyntheseClientProdAssNatixis: Array<ISyntheseClientProdAssNatixis>;
        listeSyntheseClientProdContratMonetique: Array<ISyntheseClientProdContratMonetique>;
        listeSyntheseClientProdCreditExterne: Array<ISyntheseClientProdCreditExterne>;
        listeSyntheseClientProdAssParaBanc: Array<ISyntheseClientProdAssParaBanc>;
        listeSyntheseClientProdCartado: Array<ISyntheseClientProdCartado>;
        listeSyntheseClientProdGarSanteColl: Array<ISyntheseClientProdGarSanteColl>;
        listeSyntheseClientProdSmile: Array<ISyntheseClientProdSmile>;
        listeSyntheseClientProdCodevi: Array<ISyntheseClientProdCodevi>;
        listeSyntheseClientProdFDG: Array<ISyntheseClientProdFDG>;
        listeSyntheseClientProdAssOM: Array<ISyntheseClientProdAssOM>;
    }
    interface ISyntheseClientEntiteTitulaireProduit {
        numeroEntiteTitulaireProd: number;
        listeSyntheseClientProdAssIARD: Array<ISyntheseClientProdAssIARD>;
        listeSyntheseClientProdLivretA: Array<ISyntheseClientProdLivretA>;
        listeSyntheseClientProdLivretB: Array<ISyntheseClientProdLivretB>;
        listeSyntheseClientProdLEP: Array<ISyntheseClientProdLEP>;
        listeSyntheseClientProdCptDepot: Array<ISyntheseClientProdCptDepot>;
        listeSyntheseClientProdLEL: Array<ISyntheseClientProdLEL>;
        listeSyntheseClientProdPEL: Array<ISyntheseClientProdPEL>;
        listeSyntheseClientProdPER: Array<ISyntheseClientProdPER>;
        listeSyntheseClientProdPEP: Array<ISyntheseClientProdPEP>;
        listeSyntheseClientProdPEA: Array<ISyntheseClientProdPEA>;
        listeSyntheseClientProdLivretJeune: Array<ISyntheseClientProdLivretJeune>;
        listeSyntheseClientProdLivretDev: Array<ISyntheseClientProdLivretDev>;
        listeSyntheseClientProdCptInstance: Array<ISyntheseClientProdCptInstance>;
        listeSyntheseClientProdEscompteCCE: Array<ISyntheseClientProdEscompteCCE>;
        listeSyntheseClientProdCptTeoz: Array<ISyntheseClientProdCptTeoz>;
        listeSyntheseClientProdVega: Array<ISyntheseClientProdVega>;
        listeSyntheseClientProdCredit: Array<ISyntheseClientProdCredit>;
        listeSyntheseClientProdTitres: Array<ISyntheseClientProdTitres>;
        listeSyntheseClientProdCoffre: Array<ISyntheseClientProdCoffre>;
        listeSyntheseClientProdCarteAurore: Array<ISyntheseClientProdCarteAurore>;
        listeSyntheseClientProdAssCNP: Array<ISyntheseClientProdAssCNP>;
        listeSyntheseClientProdCCE: Array<ISyntheseClientProdCCE>;
        listeSyntheseClientProdCreditComp: Array<ISyntheseClientProdCreditComp>;
        listeSyntheseClientProdAssCFF: Array<ISyntheseClientProdAssCFF>;
        listeSyntheseClientProdDATHorsPEL: Array<ISyntheseClientProdDATHorsPEL>;
        listeSyntheseClientProdDATPEL: Array<ISyntheseClientProdDATPEL>;
        listeSyntheseClientProdCreditAlis: Array<ISyntheseClientProdCreditAlis>;
        listeSyntheseClientProdCreditCEDI: Array<ISyntheseClientProdCreditCEDI>;
        listeSyntheseClientProdCiloger: Array<ISyntheseClientProdCiloger>;
        listeSyntheseClientProdTrade: Array<ISyntheseClientProdTrade>;
        listeSyntheseClientProdCreditBail: Array<ISyntheseClientProdCreditBail>;
        listeSyntheseClientProdEpargSalariale: Array<ISyntheseClientProdEpargSalariale>;
        listeSyntheseClientProdEpargnSalComp: Array<ISyntheseClientProdEpargnSalComp>;
        listeSyntheseClientProdOptAlis: Array<ISyntheseClientProdOptAlis>;
        listeSyntheseClientProdAutoTransfert: Array<ISyntheseClientProdAutoTransfert>;
        listeSyntheseClientProdSAP: Array<ISyntheseClientProdSAP>;
        listeSyntheseClientProdGarantieSante: Array<ISyntheseClientProdGarantieSante>;
        listeSyntheseClientProdFacturea: Array<ISyntheseClientProdFacturea>;
        listeSyntheseClientProdCartAffComp: Array<ISyntheseClientProdCartAffComp>;
        listeSyntheseClientProdCartAffaire: Array<ISyntheseClientProdCartAffaire>;
        listeSyntheseClientProdMomentverite: Array<ISyntheseClientProdMomentverite>;
        listeSyntheseClientProdSocfim: Array<ISyntheseClientProdSocfim>;
        listeSyntheseClientProdSmileComp: Array<ISyntheseClientProdSmileComp>;
        listeSyntheseClientProdCarteDebCredit: Array<ISyntheseClientProdCarteDebCredit>;
        listeSyntheseClientProdCautionFiliale: Array<ISyntheseClientProdCautionFiliale>;
        listeSyntheseClientProdAssIARDComp: Array<ISyntheseClientProdAssIARDComp>;
        listeSyntheseClientProdCCI: Array<ISyntheseClientProdCCI>;
        listeSyntheseClientProdOctav: Array<ISyntheseClientProdOctav>;
        listeSyntheseClientProdAssCFFComp: Array<ISyntheseClientProdAssCFFComp>;
        listeSyntheseClientProdAssIARDAllianz: Array<ISyntheseClientProdAssIARDAllianz>;
        listeSyntheseClientProdOPEFI: Array<ISyntheseClientProdOPEFI>;
        listeSyntheseClientProdAssNatixis: Array<ISyntheseClientProdAssNatixis>;
        listeSyntheseClientProdContratMonetique: Array<ISyntheseClientProdContratMonetique>;
        listeSyntheseClientProdCreditExterne: Array<ISyntheseClientProdCreditExterne>;
        listeSyntheseClientProdAssParaBanc: Array<ISyntheseClientProdAssParaBanc>;
        listeSyntheseClientProdCartado: Array<ISyntheseClientProdCartado>;
        listeSyntheseClientProdGarSanteColl: Array<ISyntheseClientProdGarSanteColl>;
        listeSyntheseClientProdSmile: Array<ISyntheseClientProdSmile>;
        listeSyntheseClientProdCodevi: Array<ISyntheseClientProdCodevi>;
        listeSyntheseClientProdFDG: Array<ISyntheseClientProdFDG>;
        listeSyntheseClientProdAssOM: Array<ISyntheseClientProdAssOM>;
    }
    interface ISyntheseClientProdAssOM {
        idExterneContratAssOM: string;
        designationCourtierAssExtBOM: string;
        libelleOptionCTAssuranceOM: string;
        dateSouscriptionContratAss: Date;
        encoursContrat: number;
        tauxAssurance: number;
        libelleCommContratAssOM: string;
        numeroCompteSupportContrat: string;
        nomCommercialCourtPS: string;
        nomCommercialPS: string;
    }
    interface ISyntheseClientProdFDG {
        libelleCourtFDG: string;
        identCredit: string;
    }
    interface IListeSyntheseClientProduitInfoCommune {
        listeSyntheseClientProduitInfoCommune: Array<ISyntheseClientProduitInfoCommune>;
    }
    interface ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        libelleCategorie: string;
        libelleCategorieLong: string;
        soldeProduitCommun: number;
        codeEtatProduitServiceOrigine: string;
        indPresenceDansRpm: string;
    }
    interface ISyntheseClientProdOffreInfoCommune extends ISyntheseClientProduitInfoCommune {
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        libelleOffre?: string;
    }
    interface ISyntheseClientProdSPSPereCommune extends ISyntheseClientProdOffreInfoCommune {
        identifiantProduitSPSPere: number;
        libelleOffre: string;
    }
    interface ISyntheseClientProdCCI extends ISyntheseClientProdSPSPereCommune {
        codeNatureCompteCci: string;
        soldeComptableCompte: number;
        mtSoldeDisponibleCompte: number;
        libelle1CompteCci: string;
        libelleCourtNatureCompte: string;
        libelle2CompteCci: string;
        numeroCompteCCI: string;
        codeDeviseTenueCompteCCI: string;
    }
    interface ISyntheseClientProdCCE extends ISyntheseClientProdSPSPereCommune {
        soldeDeviseTenueCompte: number;
        montantDecouvertAutoDevise: number;
        typeAutorisationDecouvert: string;
        typeNatureCompteEntreprise: string;
        codeTypeFusion: string;
        typeContratEntreprise: string;
        codeNatureCompteCCE: string;
        indicOppoIBCCE: string;
        PresenceDansRpmCCE: string;
        codeDeviseTenueCompteCCE: string;
        soldeCteDeviseTenueCpteCCE: number;
        montantDecouvertDevise: number;
        codeProduitNationalCCE: string;
        libelleNatureCompteCCE: string;
    }
    interface ISyntheseClientProdCarteAurore extends ISyntheseClientProdSPSPereCommune {
        mtDecouvertMaxSurCarteAurore: number;
        activiteContratAurore: string;
        montantMensualiteCarteAurore: number;
        montantDecouvertUtileAurore: number;
        numeroCarteRevolvingAurore: string;
        numDossierCetelemAurore: string;
        dateOuverturePSAurore: string;
        dateDernMajFichierImageAurore: string;
    }
    interface ISyntheseClientProdMntCommun extends ISyntheseClientProdSPSPereCommune {
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
    }
    interface ISyntheseClientProdEscompteCCE extends ISyntheseClientProdSPSPereCommune {
        codeCategoriePapier: string;
        signeMontantsEib: string;
        montantCumuleDesEffets: number;
        montantAutorisationEscompte: number;
    }
    interface ISyntheseClientProdCptTeoz extends ISyntheseClientProdSPSPereCommune {
        libelleEtatCompteTeoz: string;
        mtDecouvertMaxSurCptTeoz: number;
        montantDecouvertUtileTeoz: number;
        numCarteRevolvingTeoz: string;
        activiteContratTeoz: string;
        montantMensualiteCarteTeoz: number;
        numeroDossierCetelemTeoz: string;
        dateOuverturePSTeoz: string;
        dateDernMajFichierImageTeoz: string;
        dateDernierFinancementTeoz: string;
        montantDisponibleTeoz: number;
        codeEtatDossierCptTeoz: string;
        dateEffetEtatDossierNfiTeoz: string;
        mtSoldeRecouvrementTeoz: number;
    }
    interface ISyntheseClientProdCptInstance extends ISyntheseClientProdMntCommun {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        sousCodePSCptInst: string;
    }
    interface ISyntheseClientProdCommunLivret extends ISyntheseClientProduitInfoCommune {
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        codeEtatLOffre?: string;
        libelleOffre?: string;
        numeroOffre?: number;
        indChoixTracabilite: string;
        indChoixPartage: string;
    }
    interface ISyntheseClientProdLEP extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        anneeAyantDroit: string;
        indicAyantDroitAJustifierLep: string;
        anneeGraceLep: string;
    }
    interface ISyntheseClientProdLEL extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        codeProduitCarteLEL: string;
    }
    interface ISyntheseClientProdPEL extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        dateFinPel: string;
        tauxPelLee: number;
        tauxPleinPel: number;
        montantARegulariser: number;
        codEtatContractuelAnniversaire: string;
        syntheseClientAlertePEL: ISyntheseClientAlertePEL;
    }
    interface ISyntheseClientProdLivretDev extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        sousCodePSLivretDev: string;
        mntVersementRegulierLivretD: number;
    }
    interface ISyntheseClientProdCodevi extends ISyntheseClientProdCommunLivret {
        codeProduitCarteCodevi: string;
    }
    interface ISyntheseClientProdLivretB extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        sousCodePSLivretB: string;
        mntVersementRegulierLivretB: number;
        codeDeviseTenueCptDepot: string;
        soldeCompteDeviseTenueCpte: number;
    }
    interface ISyntheseClientProdLivretA extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        indicLivretConditionnel: string;
        indicVersementDirectLivretA: string;
        codeProduitCarteLivretA: string;
    }
    interface ISyntheseClientProdLivretJeune extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        indicAutorisationVirement: string;
        indicAutorisationRetraits: string;
        indicVersementDirectLivret: string;
        codeProduitCarteLivretJ: string;
    }
    interface ISyntheseClientProdCptDepot extends ISyntheseClientProdMntCommun {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        indicDetenteurCarte: string;
        montantDecouvertCdd: number;
        typeDecouvert: string;
        dateFinValiditeDecouvAcceba: number;
        indicExistenceContentieux: string;
        indicateurHabilitationPredic: string;
        indicateurPertinencePredic: string;
        dateSituationPredic: string;
        codeCouleurMois: string;
        codeDerniereNoteMois: string;
        montantCumuleOperationEcartee: number;
        cumulReservesEncaissement: number;
        montantCumuleImpayePret: number;
        soldeCompteDeviseTenueCpte: number;
        indicExistenceEngtDomicilation: string;
        codeRespectEngtDomiciliation: string;
        libellePersonnalise: string;
        dateOuvertureOffreSouscrite: string;
        indicArchivageCompteDepot: string;
        codeProduitCarteCptDepot: string;
        indPresenceDansRpmCDepot: string;
        codeDeviseTenueCptDepot: string;
        cumulMntOpeEcarteesDevises: number;
        indCpteRattacheRmpDepot: string;
        indicOppoIBCptDepot: string;
        indChoixTracabilite: string;
    }
    interface ISyntheseClientProdAssIARD extends ISyntheseClientProdOffreInfoCommune {
        numeroContratIard: string;
        typeSituationContratAssIARD: string;
        datePriseEffetContratIARD: string;
        libelleCourtContratIARD: string;
        dateArreteInformationsIARD: string;
    }
    interface ISyntheseClientProdAutoTransfert extends ISyntheseClientProdOffreInfoCommune {
        codeEtatTraitementTransfert: string;
        codeGuichetClient: string;
        libelleLEtatTransfert: string;
        dateCreationEnregistrement: string;
        referenceProduitService: string;
        codeEtablissementAutoTransf: string;
        codeGuichetAutoTransf: string;
        idtDemandeTransfAuto: number;
    }
    interface ISyntheseClientProdSocfim extends ISyntheseClientProdOffreInfoCommune {
        nomCommercialProduitService: string;
        libelleEtablissementBancaire10c: string;
        libelleStatutContrat: string;
        quotiteEnRisquePorteeParGarant: number;
        typeConcours: string;
        montantAutoriseTotal: number;
        montantEncoursTotal: number;
        montantAutoriseQuotePartSocfim: number;
        montantEncoursQuotePartSocfim: number;
        quotePartFinancement: number;
        nomCourtDomCnceSocfim: string;
        periodeArreteInfSocfim: string;
    }
    interface ISyntheseClientProdCarteDebCredit extends ISyntheseClientProdOffreInfoCommune {
        decouvertMaxAutorise: number;
        mensualite: number;
        totalDu: number;
        numeroDossierCreditRevolving: number;
        decouvertUtilise: number;
        numCarteRevolvingDebCredit: string;
        montantDisponibleDebCred: number;
        identifiantContratDebCred: string;
        dateDernMajFichierImageDebC: string;
        libelleEtatCompteDebCred: string;
        codeEtatDossierCarteDB: string;
        dateEffetEtatDossierNfiDB: string;
        mtSoldeRecouvrementDebC: number;
        dateDernierFinancementDebC: string;
    }
    interface ISyntheseClientProdAssIARDComp extends ISyntheseClientProdOffreInfoCommune {
        typeSituationContratAssurance: string;
        datePriseEffetContrat: string;
        dateArreteInformations: string;
        numeroContratIardComp: string;
        libelleCourtContratIARDComp: string;
    }
    interface ISyntheseClientProdAssCFFComp extends ISyntheseClientProdSPSPereCommune {
        codeEtatVente: string;
    }
    interface ISyntheseClientProdAssIARDAllianz extends ISyntheseClientProdOffreInfoCommune {
        numeroContratIardHorsBpcea: string;
        codeSituationContratAssurance: string;
        libelleSituationContratAss: string;
        mtPrimeAssuranceIardTtc: number;
        idtExterneContratIardPro: string;
        datePriseEffetContratAllianz: string;
    }
    interface ISyntheseClientAlertePEL {
        etatContractuelProchAnniv: string;
        mtARegulariserNonRespect: number;
        codeEtatContractuelPotentiel: string;
        mtARegulariserPotentielNr: number;
        codeEtatPropositionAvenant: string;
        codeDevise: string;
    }
    interface ISyntheseClientProdPER extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        assuranceSurPer: string;
        compteTitrePER: string;
        soldeProduitPER: number;
    }
    interface ISyntheseClientProdPEP extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        dateEcheanceContractuellePep: string;
        indicNantissementPep: string;
        cumulDesRevenusRestantAPayer: number;
        soldeProduitPEP: number;
        sousCodePSPEP: string;
    }
    interface ISyntheseClientProdPEA extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        cumulDesVersementsSurPea: number;
        dateOuvertureService: string;
        soldeProduitPEA: number;
        sousCodePSPEA: string;
        indicateurCpteRattacheRmpPEA: string;
        codeGestionnaireComptePEA: string;
    }
    interface ISyntheseClientProdVega extends ISyntheseClientProduitInfoCommune {
        identifiantClient: string;
        dateOuvertureContratChezVega: string;
        dateClotureContratChezVega: string;
        sommeDesCessionsAnneeEnCours: number;
        codeEtatContart: string;
        libelleTypeProduitVega: string;
        mntValoCpteFinMoisVega: number;
        dateDerniereValorisationVega: string;
    }
    interface ISyntheseClientProdCreditExterne extends ISyntheseClientProduitInfoCommune {
        mtCapitalRestantDuExt: number;
        chargeMensuelleEndettExt: number;
        nombreEcheanceExt: number;
        dateFinCreditExt: string;
        cumulImpayesPretExt: number;
        indicExistenceCTXPretExt: string;
    }
    interface ISyntheseClientProdCredit extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        mtCapitalRestantDu: number;
        chargeMensuelleEndettement: number;
        nombreEcheance: number;
        dateFinCredit: string;
        cumulImpayesPret: number;
        indicExistenceContentieuxPret: string;
        montantOrigineCredit: number;
        tauxEffectifGlobal: number;
        mtTotalVerseUnPret: number;
        montantRestantAVerser: number;
        deviseCredit: string;
        mtCumuleCreancesGelees: number;
        codeOrigineCreditDossier: string;
        identifiantEnveloppe: string;
        PresenceDansRpmCredit: string;
        codeProduitNationalCredit: string;
        identDossCommercialCredit: string;
        dateEffetContratCredit: string;
    }
    interface ISyntheseClientProdTitres extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        valoGestitresPortefeuille: number;
        dateValorisationGestitres: string;
        libelleBlocageSouscriptionTitre: string;
        pourcentagePropriete: number;
        montantCessionsSeuilGeneral: number;
        plusMoinsValueSeuilGeneral: number;
        plusMoinsValueLatente: number;
        valoGestitresPTFPonderee: number;
        codeGestionnaireCompteTitres: string;
        dateArreteInformationsTitres: string;
        montantIsfTitres: number;
    }
    interface ISyntheseClientProdCoffre extends ISyntheseClientProduitInfoCommune {
        codeTypeCoffre: string;
        numeroCoffre: string;
        numeroSalleCoffre: number;
        edsDomiciliationCoffre: number;
        libelleEDSCoffre: string;
        designationBancaireCoffre: string;
        modeCompositionEntTitCoffre: string;
        codeUsageEntTitCoffre: string;
    }
    interface ISyntheseClientProdAssCNP extends ISyntheseClientProduitInfoCommune {
        numeroContratCnp: string;
        valeurRachatAssuranceCnp: number;
        dateArreteInformationsAssCNP: string;
        dateDebutEffetAssCNP: string;
        montantIsfAssCNP: number;
    }
    interface ISyntheseClientProdAssParaBanc extends ISyntheseClientProdSPSPereCommune {
        numeroAdhesionIardAsc: string;
        codeFormuleContratIard: string;
        statutContratIardParaBanc: string;
        numeroCompteAssParaBanc: string;
        numeroRibCpteNumeraireAssocie: string;
        datePriseEffetContratAssParaBanc: string;
        dateArretInfAssParaBanc: string;
        codeSituationContrat: string;
        codeMotifResiliation: string;
    }
    interface ISyntheseClientProdCreditComp extends ISyntheseClientProduitInfoCommune {
        identifiantCreditExterne: string;
        typeCredit: string;
        montantCrd: number;
        indicMontantCrdRenseigne: string;
        dateMiseAJourInfos: string;
        indicDateMajInfosRenseignee: string;
        dateDebutCredit: string;
        montantInitial: number;
        indicMontantInitialRenseigne: string;
        indicDateFinCreditRenseignee: string;
        periodiciteDesMER: string;
        dateProchaineEcheance: string;
        codeDateProchaineEchRenseigne: string;
        codeExistenceContentieux: string;
        montantImpaye: number;
        indicMontantImpayeRenseigne: string;
        nombreEcheancesEnImpaye: number;
        codeNombreImpayesRenseigne: string;
        date1erImpaye: string;
        indicDate1erImpayeRenseignee: string;
        indicMontantHorsBilanRenseigne: string;
        montantLUtilisation: number;
        montantHorsBilan: number;
        codeMacroFamilleDecisionnel: string;
        codeEtatProduitService: string;
        indicMntUtilisationRenseigne: string;
        identifiantProduitCredit: string;
        montantEcheance: number;
        indicMntEcheanceRenseigne: string;
        indicDateDebutCreditRenseigne: string;
        dateFinCreditComp: string;
        indPresenceDansRpmCComp: string;
        codeProduitNationalCredComp: string;
        deviseCreditComp: string;
        dateEffetContratCredit: string;
        dateFinCredit: string;
    }
    interface ISyntheseClientProdAssCFF extends ISyntheseClientProduitInfoCommune {
        codePresenceValeurRachat: string;
        valeurRachatAssurance: number;
        codePresenceDateArrete: string;
        mtVersementInitialContrat: number;
        codePresenceDateContrat: string;
        dateSouscriptionAssurance: string;
        cumulVersementsDepuisLOrigine: number;
        libelleIdentifiantSourceExterne: string;
        identifiantProduitAssCFF: string;
        dateArreteInformationsAssCFF: string;
        PresenceMontantVersementInit: string;
        PresenceCumVersementOrigine: string;
    }
    interface ISyntheseClientProdDATHorsPEL extends ISyntheseClientProduitInfoCommune {
        tauxNominalApplicableCompte: number;
        mtCapitalCompteHPEL: number;
        dateEcheanceCompteHPEL: string;
        sousCodePSHPEL: string;
        indChoixTracabilite: string;
        indChoixPartage: string;
    }
    interface ISyntheseClientProdDATPEL extends ISyntheseClientProduitInfoCommune {
        numeroRicePel: string;
        mtCapitalComptePEL: number;
        dateEcheanceComptePEL: string;
        sousCodePSPEL: string;
    }
    interface ISyntheseClientProdCreditAlis extends ISyntheseClientProduitInfoCommune {
        identifiantProduitCredAlis: string;
        montantEcheanceCredAlis: number;
        montantCrdAlis: number;
        indicMntCrdAlisRenseigne: string;
        dateMiseAJourInfosCredAlis: string;
        dateDebutCreditAlis: string;
        indicMntEchRenseignCredAlis: string;
        indicDateMajInfRenseigCrdAlis: string;
        indicDateDebutCrdAlisRenseign: string;
        montantInitialCredAlis: number;
        indicMntInitRenseignCrdAlis: string;
        dateFinCreditAlis: string;
        indicDateFinCrdAlisRenseign: string;
        periodiciteDesMERCrdAlis: string;
        dateProchaineEchCredAlis: string;
        codeDateProchEchCrdAlisRenseig: string;
        codeExistenceCTXCredAlis: string;
        montantImpayeCredAlis: number;
        indicMntImpayeCrdAlisRenseig: string;
        nbreEchEnImpayeCredAlis: number;
        codeNbreImpayesCrdAlisRenseig: string;
        date1erImpayeCredAlis: string;
        indicDate1erImpRenseigCrdAlis: string;
        PresenceDansRpmCredAlis: string;
        indicMntHorsBilanRenseigCrdAlis: string;
        indicMntUtilCrdAlisRenseigne: string;
        montantLUtilisationCrdAlis: number;
        montantHorsBilanCredAlis: number;
        codeMacroFamilleDecCrdAlis: string;
        codeProduitNationalCrdAlis: string;
        deviseCreditAlis: string;
        identCreditAlisExterne: string;
        typeCreditAlis: string;
    }
    interface ISyntheseClientProdCreditCEDI extends ISyntheseClientProduitInfoCommune {
        codeOffreCefiPretConso: string;
        numeroMysysDossierContratNfi: string;
        mtEcheancePretAvecAssurance: number;
        dateOuvertureContratSatellis: string;
        montantEmprunte: number;
        tauxEffectifGlobalCefi: number;
        nombreEcheancesPretCefi: number;
        periodiciteDesEcheancesCefi: string;
        identifiantContratCefi: string;
        datePremiereMensualite: string;
        dateFinPret: string;
        codeOptionAssTitulaire: string;
        codeOptionAssConjoint: string;
        libelleAssuranceProfilPretCefi: string;
        dateOctroi: string;
        tauxNominal: number;
        libelleSort: string;
        montantCapitalFinance: number;
        dateFinancement: string;
        dateValidationSimulation: string;
        libelleStadeLOffre: string;
        capitalRestantOuEncoursCEDI: number;
        libelleEtatCompteCEDI: string;
        dateDernMajFichierImageCEDI: string;
        mtSoldeRecouvrementCEDI: number;
        codeEtablissementCEDI: string;
        codeGuichetCEDI: string;
        dateProchaineEchCrdCEDI: string;
        codeEtatDossierCEDI: string;
        dateEffetEtatDossierNfiCEDI: string;
        numDossContratProducteur: string;
        refProduit2emeOccurence: string;
    }
    interface ISyntheseClientProdCiloger extends ISyntheseClientProduitInfoCommune {
        dateArretePosition: string;
        nombrePartScpi: number;
        libelleNatureScpi: string;
        libelleTypeProduitCiloger: string;
        mntValoCpteFinMoisCiloger: number;
        dateDerniereValorisationCiloger: string;
        mtEstimationRachatLigneScpi: number;
        dateCoursRachatScpi: string;
        valeurUnitaireRachatPartScpi: number;
    }
    interface ISyntheseClientProdTrade extends ISyntheseClientProduitInfoCommune {
        dateDebutAutorisation: string;
        dateEcheanceAutorisation: string;
        codeDeviseExpressionMt: string;
        montantAutoriseEnEuros: number;
        montantUtiliseEnCvEuros: number;
    }
    interface ISyntheseClientProdCreditBail extends ISyntheseClientProduitInfoCommune {
        sousCodeEtatContrat: string;
        capitalRestantOuEncoursCredBail: number;
        codeProduitNationalCredBail: string;
        nomCourtDomaineCNCECredBail: string;
        periodeArreteInfosCredBail: string;
        libelleOrganismeCredBail: string;
        identifiantContratCredBail: string;
        montantGarantiCredBail: number;
    }
    interface ISyntheseClientEpargCommun extends ISyntheseClientProduitInfoCommune {
        codeProduitNational: string;
        nomCourtDomaineNomenclatureCnce: string;
        periodeArreteInfos: string;
        dateOuvertureDossier: string;
        libelleEtablissementPilote: string;
    }
    interface ISyntheseClientProdEpargSalariale extends ISyntheseClientEpargCommun {
        dateDenonciationConventionNie: string;
        libelleCourtContratEpargSal: string;
        capitalRestantOuEncoursEpargSal: number;
    }
    interface ISyntheseClientProdEpargnSalComp extends ISyntheseClientEpargCommun {
        mtContrevaleurComptableBrute: number;
        codeCategorieProduitDerive: string;
        identifiantContratEpargSal: string;
        montantGarantiEpargSal: number;
        sousCodePSEpargSal: string;
    }
    interface ISyntheseClientProdSAP extends ISyntheseClientProduitInfoCommune {
        identifiantInterneSerena: string;
        numeroFormule: number;
        statutFormule: string;
        codeProduitNationalSAP: string;
        dateEffetSAP: string;
        dateEcheanceSAP: string;
        dateMiseAJourSAP: string;
        codeBanqueCptePrelevSAP: string;
        codeGuichetSAP: string;
        numeroCompteSAP: string;
        cleRibCpteSAP: string;
    }
    interface ISyntheseClientProdCartado extends ISyntheseClientProduitInfoCommune {
        identifiantSupportCarte: string;
        dateExpiration: string;
        codeTypePorteurCartado: string;
    }
    interface ISyntheseClientProdGarantieSante extends ISyntheseClientProduitInfoCommune {
        identifiantAdhesion: string;
        codeProduitMuracef: string;
        dateDebutEffetContrat: string;
        dateFinEffetContrat: string;
        codeMotifResiliation: string;
        codeSituationContrat: string;
        codeFormuleAssSante: string;
        indicEligibiliteClient: string;
        dateArreteInfGarSante: string;
        codeBanqueCptePrelevGarSante: string;
        codeGuichetGarSante: string;
        numeroCompteGarSante: string;
        cleRibCpteGarSante: string;
        segment: string;
    }
    interface ISyntheseClientProdFacturea extends ISyntheseClientEpargCommun {
        dateEcheanceDossier: string;
        mtCumCrdEncours: number;
        mtCumEncoursMoyenDateOp: number;
        mtCumBoPayesMoisEnCours: number;
        mtCumBoPayesCeMoisM: number;
        libelleOrganismeFacturea: string;
        mtCumCommApport1erJanv: number;
    }
    interface ISyntheseClientProdCartAffComp extends ISyntheseClientProduitInfoCommune {
        nomLongPsNomenclatureCnce: string;
        numCarteAffaire: string;
        mntEncTotalCartAffaire: number;
        typeCarteAffaire: string;
        dateFinValiditeCartAffaire: string;
        codeOppositionCartAffaire: string;
    }
    interface ISyntheseClientProdCartAffaire extends ISyntheseClientProduitInfoCommune {
        nomLongPsNomenclatureCnce: string;
        numCarteAffaire: string;
        mntEncTotalCartAffaire: number;
        typeCarteAffaire: string;
        dateFinValiditeCartAffaire: number;
        codeOppositionCartAffaire: string;
    }
    interface ISyntheseClientProdSmileComp extends ISyntheseClientProduitInfoCommune {
        numeroCompteSMiles: string;
        codeProduitNationalSmile: string;
        identifiantCarteSmilesComp: string;
    }
    interface ISyntheseClientProdCautionFiliale extends ISyntheseClientProduitInfoCommune {
        mntGarantiCAU: number;
        mntAutorisationCAU: number;
        nomCourtDomCnceCAU: string;
        libelleStatutContratCAU: string;
        periodeArreteInfosCAU: string;
        quotiteRisqPorteParGarantCAU: number;
        montantTotalFinanceCAU: number;
        capitalRestantOuEncoursCAU: number;
    }
    interface ISyntheseClientProdOctav extends ISyntheseClientProduitInfoCommune {
        idtExterneContratPlacement: string;
        dateCloturePs: string;
        refExterneAgentMaj: number;
        identExtEDSRattachementPI: number;
        codeProduitEpargne: string;
        montantEncoursContrat: number;
        datePriseEffetContratOctav: string;
        refExtAgentCommercialProduct: number;
    }
    interface ISyntheseClientProdOPEFI extends ISyntheseClientProduitInfoCommune {
        codeEtablissementOrigine: string;
        mtEngagementBrutBilanCt: number;
        mtEngagementBrutBilanMlt: number;
        mtEngagementBrutBilanEps: number;
        mtEngagementBrutBilanEc: number;
        mtEngagementBrutHorsBilanCt: number;
        mtEngagementBrutHorsBilanCmlt: number;
        mtEngagementBrutHorsBilanEs: number;
        mtEngagementBrutHorsBilanEc: number;
        nombreOperations: number;
        identifiantContratOPEFI: string;
        numeroSIRENOPEFI: string;
        periodeArreteInfosOPEFI: string;
    }
    interface ISyntheseClientProdAssNatixis extends ISyntheseClientProduitInfoCommune {
        numeroRibCompte: string;
        valeurRachat: number;
        mtCumBrutVerstPeridAnneeN: number;
        mtIsfAnneeN: number;
        dateArreteInformationsNatixis: string;
        dateDebutEffetNatixis: string;
        identifiantExtContratAssurance: string;
    }
    interface ISyntheseClientProdContratMonetique extends ISyntheseClientProduitInfoCommune {
        dateOuvertureContrat: string;
        dateClotureContrat: string;
        designationTypePaiementInterne: string;
        typePdtServContratAssocie: string;
        typeSupportContratCommercant: string;
        codeGuichetContratMonetique: string;
        numeroCompteContratMonetique: string;
        codeEtablissContratMonetique: string;
    }
    interface ISyntheseClientProdGarSanteColl extends ISyntheseClientProduitInfoCommune {
        numRibCpteGarSanteColl: string;
        mntPrimeAnInitGarSanteColl: number;
        codeTypeTarifGarSanteColl: string;
        dateArretInfGarSanteColl: string;
        dateOpeAssGarSanteColl: string;
        libProdGarSanteColl: string;
    }
    interface ISyntheseClientProdOptAlis extends ISyntheseClientProduitInfoCommune {
        identifiantLigneAlisOrigine: string;
        libelleLigneAlisOrigine: string;
        montantNonVerseCredit: number;
        dateFinValiditeReferentiel: string;
        montantEcheanceMer: number;
        codeStatutDouteuxPersonne: string;
        identDossCommercialOptAlis: string;
        mtTotalVerseUnPretOptAlis: number;
        codeDeviseOptAlis: string;
        dateOuvertureDossOptAlis: string;
        dateProchaineEchCrdOptAlis: string;
        mtCapitalRestantDuOptAlis: number;
        codeOrigineCredDossierOptAlis: string;
    }
    interface ISyntheseClientProdPIM {
        indicSteCivileImmoPatrimonial: string;
        indicSocieteExploitation: string;
        indicGarantieSurActifImmoFi: string;
        indicStructureRemboursConcours: string;
        indicexerciceSupActiviteImmo: string;
        codeCategorieProImmo: string;
        timestampCreationQuestionnaire: string;
        indicStructureDedieOpeImmo: string;
        codeEtablissement: string;
    }
    interface ISyntheseClientProdMomentverite extends ISyntheseClientProduitInfoCommune {
        dateEffetContrat: string;
        libelleNatureFinancement: string;
        libelleTypeObjetCommercialToc: string;
        libelleEtatDossier: string;
        typeLoi: string;
        libelleEntiteProprietaireDossier: string;
        libelleAgence: string;
        nomPrescripteur: string;
        codeNatureFinancement: string;
        codeEtatDossier: string;
        codeProduitNationalVerite: string;
    }
    interface IProduitCibleParRecherche {
        codeEtatProduitService: string;
        numeroEntiteTitulaireProd: number;
        produit: any;
    }
}

declare module propoClient.Modeles.Profil {
    interface ISyntheseClientOrigineClient {
        typeCategorieClient: string;
        indicSocietaire: string;
        libelleCourtSle: string;
        numeroTelephoneDomicile: string;
        adresseEMail: string;
        totalCollectePersonne: number;
        totalCreditPersonne: number;
        totalImpayesPersonne: number;
        totalDebitsDifferesPersonne: number;
        indicateurExistenceLiens: string;
        indicateurExistenceServices: string;
        libelleInseePays: string;
        totalTresoreriePersonne: number;
        codeResident: string;
        totalDesContentieuxPersonne: number;
        codeStatutDouteuxPersonne: string;
        codeBlocageVao: string;
        totalTresoreriePersonneCpteJoint: number;
        totalCollectePersonneCpteJoint: number;
        identifiantBad: string;
        codeEtatStatutPro: string;
        codePhaseRecouvrement: string;
        totalCreancesGeleesPersonne: number;
        codeSituation: string;
        totalCptCantonnementPersonne: number;
        indicateurExisteParticipations: string;
        codeDeviseOrigineClient: string;
        codeEtablissementOrigineClient: string;
        codePersonnaliteJuridique: string;
        numeroTelephoneTravail: string;
        numeroTelephoneCorresp: string;
        idEdsOrigineClient: number;
        numeroPersonne: number;
    }
    interface ISyntheseClientProfil {
        dateNaissance: string;
        designationCourte: string;
        codeCategorieSocioProf: string;
        dateEffetCsp: string;
        libelleProfessionParticulier: string;
        codeAppartenanceReseau: string;
        codeSuiviCommercial: string;
        nomCommercial: string;
        nomFamille: string;
        prenom: string;
        codeCapaciteJuridique: string;
        codMotifClotureEntTitulaire: string;
        codeCivilite: string;
        nomUsage: string;
        codeClientTiers: string;
        dateDeces: string;
        typeCotationFIBEN: string;
        indicExistenceProfessionnel: string;
        codeCommuneNaissance: string;
        codeCotation: string;
        dateDerniereMAJCotationProf: string;
        dateDernRevisionCotationPro: string;
        dateSituationBDF: string;
        noteBale2Personne: string;
        dateMAJEnregistrement: string;
        libelleMoteur: string;
        codeEtablissementNotation: string;
        cotationPrecedenteFibenBdf: string;
        dateCotationFibenBdfN1: string;
        codeDegradationCotationFiben: string;
        dateBDFAttributionEvenement: string;
        libelleEtablissementNotation: string;
        codeEtablissementPilote: string;
        libelleEtablissementPilote: string;
        indicPresenceActesaisieOuATD: string;
        codeAlerteWatchList: string;
        indicAlerteSurPersonne: string;
        indicAlerteReclamation: string;
        codeAdministrationSpecifique: string;
        codeDegreSensibilitePersonne: string;
        dateEntreeRelation: string;
        codeNiveauWatchListLocale: string;
        dateEntreeEnWatchListLocale: string;
        dateSortieWatchListLocale: string;
        codeNiveauWatchListNationale: string;
        dateEntreeEnWatchListNationale: string;
        dateSortieWatchListNationale: string;
        codeNiveauWatchListBanqueRef: string;
        dateEntreeEnWatchListBanqueRef: string;
        dateSortieWatchListBanqueRef: string;
        indicEnregHorsPresenceClient: string;
        codeTeteGroupe: string;
        codeNatureLienReglementaire: string;
        typeGroupe: string;
        codeSensContact: string;
        codeCanalContact: string;
        codeMediacontact: string;
        dateContact: string;
        codeMotifContact: string;
        codeNiveauConnaissanceClient: string;
        dateDernEvaluationConnaissance: string;
        codeProspect: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        codePresenceCompteDesherence: string;
        syntheseClientProfilSpecifiquePersonneMorale: ISyntheseClientProfilSpecifiquePersonneMorale;
    }
    interface ISyntheseClientProfilSpecifiquePersonneMorale {
        raisonSocial: string;
        numeroSIREN: string;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        numeroSIRET: string;
        dateCreationJuridique: string;
        designationLieuActivite: string;
    }
    interface ISyntheseClientEntiteTitulaire {
        numeroEntiteTitulaire: number;
        modeCompositionEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        codeEtatPersonne: string;
        indicateurEntiteTitulaireDouteuse: number;
        codeCotationBancaire: string;
        sousCodeModeCompositionET: string;
        timestampEvenementNotation: string;
        codeDomaineGestionPacbase: string;
        codeMessageErreur8c: string;
        libelleReponse: string;
        designationBancaireEntTitulaire: string;
        idEdsInterneEntiteTitulaire: number;
        edsDomiciliationEntiteTitulaire: number;
        typeEDSEntiteTitulaire: string;
        libelleCalculeCourtEdsET: string;
        identifiantEDSEntiteTitulaire: number;
        referenceExterneEDSN1ET: number;
        typeEDSNiveau1: string;
        libelleCourtEDSEntiteTitulaire: string;
        numeroTelephoneDomicileET: string;
        noteBale2EntiteTitulaire: string;
    }
    interface IListeSyntheseClientEntiteTitulaire {
        listeSyntheseClientEntiteTitulaire: ISyntheseClientEntiteTitulaire[];
    }
}

declare module propoClient.Modeles.Routage {
    interface IScRouteParam extends ng.route.IRouteParamsService {
        typePersonne: string;
        codeAgent: number;
        idEds: number;
        numeroPersonne: number;
    }
    interface IScopeEcpElementNav extends ng.IScope {
        id: string;
        codePersonnaliteJuridique: string;
    }
    interface IRootScope extends ng.IRootScopeService {
        title: string;
    }
    interface IDetailCurrentRoute {
        title: string;
        originalPath: string;
    }
    interface ICurrentRoute {
        $$route: IDetailCurrentRoute;
        loadedTemplateUrl: string;
        params: propoClient.Modeles.Routage.IScRouteParam;
    }
    interface IRoute extends ng.route.IRoute {
        title?: string;
    }
    interface IRouteProvider extends ng.route.IRouteProvider {
        otherwise(route: IRoute): IRouteProvider;
        when(path: string, route: IRoute): IRouteProvider;
    }
}

declare module propoClient.Modeles.SyntheseClient {
    interface ISyntheseDonneesClient {
        syntheseClientDonneesSignaletiques: ISyntheseClientDonneesSignaletiques;
        syntheseClientProduits: propoClient.Modeles.Produits.ISyntheseClientProduits;
    }
    interface ISyntheseClientDonneesSignaletiques {
        syntheseClientAdresse: ISyntheseClientAdresse;
        syntheseClientProfil: propoClient.Modeles.Profil.ISyntheseClientProfil;
        syntheseClientDonneesCommerciales: ISyntheseClientDonneesCommerciales;
        syntheseClientSurendettement: ISyntheseClientSurendettement;
        syntheseClientSuivi: ISyntheseClientSuivi;
        listeSyntheseClientEntiteTitulaire: Array<Profil.ISyntheseClientEntiteTitulaire>;
        listeSyntheseClientSegRevise: Array<ISyntheseClientSegRevise>;
        listeSyntheseClientSegAu1erJanv: Array<ISyntheseClientSegAu1erJanv>;
        syntheseClientOrigineClient: propoClient.Modeles.Profil.ISyntheseClientOrigineClient;
        listeSyntheseClientGP: Array<ISyntheseClientGP>;
        syntheseClientAdresseNPAI: ISyntheseClientAdresseNPAI;
    }
    interface ISyntheseClientAdresse {
        codePays: string;
        codeTypeRetourPtt: string;
        dateDernierRetourPttAdresse: Date;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        codeValiditeAdresseUNISERV: string;
        codeValiditeAdresseUNIMAIL: string;
        ligne2AdresseLong: string;
        ligne3AdresseLong: string;
        ligne4AdresseLong: string;
        ligne5AdresseLong: string;
        ligne6AdresseLong: string;
    }
    interface ISyntheseClientAdresseNPAI {
        identifiantAdresse: number;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        codeTypeAdresse: string;
        codeValiditeAdresseUNISERV: string;
        codeValiditeAdresseUNIMAIL: string;
        designationCourte: string;
        numeroTelephoneAdresse: string;
        codePays: string;
        codeTypeRetourPtt: string;
        dateDernierRetourPttAdresse: string;
        dateCreationAdresse: string;
        dateRestructurationAdresse: string;
        dateDerniereMajAdresse: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        ligne2AdresseLong: string;
        ligne3AdresseLong: string;
        ligne4AdresseLong: string;
        ligne5AdresseLong: string;
        ligne6AdresseLong: string;
    }
    interface ISyntheseClientSuivi {
        codeSuiviPar: string;
        nomAgentTraitement: string;
        edsDomiciliation: number;
        referenceExterneEDSNiveau1: number;
        typeEDS: string;
        identifiantElementStructure: number;
        typeElementStructure: string;
        codeTypePortefeuille: string;
        codeAgentSuiviPar: number;
        idEdsInterneSuiviPar: number;
        codeCiviliteSuiviPar: string;
    }
    interface ISyntheseClientGP {
        codeEtatSuiviPersonnalise: string;
        libelleCalculeCourtEds: string;
        libelleCalculeCourtEds1: string;
        debutValiditeGestionPrivee: string;
        libelleCourtEDSClientGP: string;
    }
    interface ISyntheseClientSegRevise {
        codeForcageTpSegmentation: string;
        dateSegmRisqueRevu: string;
        codeSegmRevu: string;
        libelleCourtSegmRevu: string;
        libelleSegmRevu: string;
    }
    interface ISyntheseClientSegAu1erJanv {
        dateSegmRisque0101: string;
        codeSegm0101: string;
        libelleCourtSegm0101: string;
        libelleSegm0101: string;
    }
    interface IListeSyntheseClientSegAu1erJanv {
        listeSyntheseClientSegAu1erJanv: Array<ISyntheseClientSegAu1erJanv>;
    }
    interface IListeSyntheseClientGP {
        listeSyntheseClientGP: Array<ISyntheseClientGP>;
    }
    interface ISyntheseClientPiecesManquantes {
        nbPiecesManquantes: number;
    }
    interface ISyntheseClientDonneesCommerciales {
        codeExistenceAlertesCom: string;
        codeExistenceInfoclient: string;
        codeExistenceInfoListeNoire: string;
        dateArreteDossierSuccession: string;
        codeExistenceAccrocheGuichet: string;
        nbDossiersVenteActifs: number;
        codeEtatCompletudeDossier: string;
        dateEnregistrementRendezVous: string;
        nbOpportunitesParRelation: number;
        codeExisteInfoInterneService: string;
        codeExistenceEvtCommerciaux: string;
        indicExistenceRdvJourClient: string;
        syntheseClientPiecesManquantes: ISyntheseClientPiecesManquantes;
    }
    interface ISyntheseClientSurendettement {
        indicPresenceOppo0109Active: string;
        codeFamilleDossier: string;
    }
    interface IInfosSegmentationMarcheReponse {
        codeEtablissement: string;
        identificationTiers: string;
        libelleSegmentationCalculee: string;
        codeSegmentationCalculee: string;
        libelleCourtSegmentationCalculee: string;
        dateCalculSegmentation: string;
        dateModificationSegmentation: string;
        codeForcageSegmentation: string;
        codeSegmentationForcee: string;
        libelleSegmentationForcee: string;
        libelleCourtSegmentationForcee: string;
        codeTypeSegmentMarche: string;
    }
    interface ICaracteristiqueAgence {
        comptoirGuichetRattachement: IComptoirGuichetRattachement;
        donneeCommune: IDonneeCommune;
        donneeSpecifique: IDonneeSpecifique;
        responsableAgence: IResponsableAgence;
        localisation: Array<ILocalisation>;
    }
    interface IComptoirGuichetRattachement {
        codeComptoirBDF: string;
        codeGuichetRisqueBDF: string;
        codeGuichetInterbancaire: string;
        codeGuichetStatistiqueBDF: string;
        codeGuichetBCE: string;
        codeEchantillonBCE: string;
        indicateurGuichetPermanentBCE: string;
        libelleComptoirBDF: string;
        libelleGuichetRisqueBDF: string;
    }
    interface IDonneeCommune {
        referenceElementStructure: number;
        identifiantElementStructure: number;
        typeElementStructure: string;
        libelleElementStructure: string;
        dateDebutValiditeEDS: string;
        dateFinValiditeEDS: string;
        codeEtablissement: string;
        libelleTypeElementStructure: string;
    }
    interface IDonneeSpecifique {
        typeAgence: string;
        codeExistenceCoffre: string;
        codeValidationAutoDepotCheque: string;
    }
    interface ILocalisation {
        identifiantSite: number;
        typeAdresse: string;
        dateDebutValiditeSite: string;
        dateFinValiditeSite: string;
    }
    interface IResponsableAgence {
        identifiantResponsableEDS: number;
        dateDebutValiditeResponsable: string;
        dateFinValiditeResponsable: string;
    }
    interface IListeDetailRelations {
        codeSegmentation: string;
        codeSegmentActivationPro: string;
        typeSegmentationSuMensuel: string;
        codeSegmentationSuMensuel: string;
        identifiantPersonne: number;
        nomRaisonSociale: string;
        libelleSegmentationCommercialLigne1: string;
        libelleSegmentationCommercialLigne2: string;
        libelleSegmentActivation: string;
    }
    interface ISegmentCommercial {
        listeDetailRelations: Array<IListeDetailRelations>;
    }
}

declare module propoClient.Service {
    interface IChargement {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<any>;
    }
    class PropoClientChargementService {
        private serviceAgentExtended;
        private propoClientUtilsService;
        private propoClientInitService;
        private propoClientRestService;
        private $q;
        texteChargement: Array<string>;
        chargementLong: IChargement;
        estARecharger: boolean;
        private authentificationInfo;
        private parametresComptables;
        private objetSynthese;
        private codeAgent;
        private numeroPersonne;
        private idEds;
        private typePersonne;
        private objetAuthentificationFormate;
        private identifiantPersonne;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propoClientUtilsService: Service.PropoClientUtilsService, propoClientInitService: Service.PropoClientInitService, propoClientRestService: Service.PropoClientRestService, $q: ng.IQService);
        /**
         * initialisation du chargement de la synthèse
         * (promesses d'authentification, paramètres comptables, critères de rechercne et identifiant dans le contexte)
         * @param {boolean} rechargement : facultatif, pour indiquer si on doit aller chercher dans le contexte client
         */
        initialisationChargement(rechargement?: boolean): void;
        /**
         * permet de recuperer les erreurs et de les afficher dans la vue erreur
         * @param erreur
         */
        erreur(erreur: string): void;
        /**
         * annulation d'un chargement long
         */
        annulerChargementLong(): void;
    }
}

declare module propoClient.Service {
    class PropoClientDossVenteService {
        private propoClientConstantes;
        static $inject: string[];
        constructor(propoClientConstantes: propoClient.Constantes.PropoClientConstantes);
        /**
         * permet de tester si le dossier est en cours ou non
         * un dossier de vente en cours est un dossier dont le moment de vie est différent de ‘Non encore validé ‘ et de ‘Terminé ‘
         * @param idMoment
         * @return {boolean} retourne true si le dossier est en cours
         */
        isDossierEnCours(idMoment: string): boolean;
    }
}

declare module propoClient.Service {
    /**
     * test de récupération de logs de comportement utilisateur; version POC, à voir si conservée au final ou non
     */
    interface IActionUtilisateur {
        typeAction: string;
        action?: IComportement;
        erreur?: IErreur;
        cause?: any;
    }
    interface IErreur {
        url: string;
        codeHttp: number;
        methode: string;
        params: string;
        message: string;
    }
    interface IComportement {
        entree: string;
        sortie: string;
        timestamp?: string;
        idElement: string;
        element: any;
    }
    class Comportement implements IComportement {
        entree: any;
        sortie: any;
        timestamp: any;
        idElement: any;
        element: any;
        constructor(comportement: IComportement);
    }
    class ErreursManagement {
        private maximum;
        tableauListeActions: IActionUtilisateur[];
        /**
         * ajout d'une action utilisateur dans le tableau des événements
         * @param {string} action : l'action utilisateur loggée ("click", "lectureContexte", "changement Route", etc.)
         * @param {IComportement} complement : un objet permettant d'avoir plus d'information sur l'action
         */
        ajouterAction(action: string, complement: IComportement): void;
        /**
         * ajout d'une erreur dans le tableau des événements
         * @param {IErreur} erreur : l'erreur remontée, avec les informations ciblées
         * @param {string} cause : un message complémentaire
         */
        ajouterErreur(erreur: IErreur, cause: any): void;
        /**
         * retourne le tableau des "maximum" dernières actions utilisateur
         * @param {string} le format attendu, facultatif, "string" pour stringifier le retour, objet dans les autres cas
         * @return {any} le tableau, soit en objet JSON, soit stringifié pour envoi
         */
        getListeActions(format?: string): any;
    }
}

declare module propoClient.Service {
    interface IAgent {
        codeAgent: number;
        edsInterne: number;
    }
    class PropoClientInitService {
        private $location;
        private $route;
        private _numeroPersonne;
        private _referenceExterneAgent;
        private _edsInterne;
        private _codeEtablissement;
        private _codeAgent;
        private _urlAppel;
        private _criteresClient;
        static $inject: string[];
        constructor($location: ng.ILocationService, $route: ng.route.IRouteService);
        /**
         * formate le numéro de personne depuis une string vers un nombre,
         * renvoi null si valeur d'entrée undefined ou non convertible en nombre
         * @param numeroPersonne {string}
         * @return retour {number}
         */
        formaterNumeroPersonne(numeroPersonne: string): number;
        /**
         * retourne un objet simplifié, contenant le codeAgent et l'edsInterne, au format numérique,
         * à partir des informations d'authentification du contexte MyWay
         * @param authentificationInfo {MyWay.Services.Context.AuthentificationInfo}
         *
         */
        preparerDonnesAgent(authentificationInfo: MyWay.Services.Context.AuthentificationInfo): IAgent;
        chargerVuesClient(route: string): void;
        getCodeEtablissement(): string;
        setCodeEtablissement(codeEtab: string): void;
        getCodeAgent(): number;
        getNumeroPersonne(): number;
        setNumeroPersonne(numero: number): void;
        getReferenceExterneAgent(): number;
        getEdsInterne(): number;
        setUrlAppel(url: string): void;
        getUrlAppel(): string;
        setCriteresClient(criteresClient: MyWay.Model.Client): void;
        genererUrlClient(codeAgent: number, edsInterne: number, numeroPersonne: number, typePersonne: string): string;
    }
}

declare module propoClient {
    interface IObjetProduitFormate {
        idProduit: string;
        libelleProduit: string;
        typeProduit: string;
        objetOrigine: any;
        indicateur: string;
        libelleActeGestion: string;
        libelleAction: string;
        dateCreation: string;
        libelleCanal: string;
        picto: string;
        libelleIcon: string;
        libelleCategorie: string;
        libelleCategorieLong: string;
    }
    class ObjetProduitFormate implements IObjetProduitFormate {
        idProduit: string;
        libelleProduit: string;
        typeProduit: string;
        objetOrigine: any;
        indicateur: string;
        libelleActeGestion: string;
        libelleAction: string;
        dateCreation: string;
        libelleCanal: string;
        picto: string;
        libelleIcon: string;
        libelleCategorie: string;
        libelleCategorieLong: string;
        constructor();
    }
}

declare module propoClient.Service {
    class PropoClientProduitsService {
        private propoClientInitService;
        private propoClientUtilsService;
        private propoClientConstantes;
        private $q;
        private serviceAgentExtended;
        private tableauProduits;
        referenceTypeSituationContrat: any[];
        referencesModeComposition: {
            "1": string;
            "2": string;
            "3": string;
            "4": string;
        };
        referenceCodeUsage: {
            "1": string;
            "2": string;
        };
        static $inject: string[];
        constructor(propoClientInitService: Service.PropoClientInitService, propoClientUtilsService: Service.PropoClientUtilsService, propoClientConstantes: Constantes.PropoClientConstantes, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): ng.IPromise<string>;
        /** ligne1
         * Permet de recuperer l"indicateur du produit
         * @param numeroEntite {number} numero de l"entite titulaire
         * @param produit {any} le type de produit
         * @return indicateur {string} le texte de l'indicateur à positionner
         */
        afficherIndicateurProduit(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune): string;
        recupererLibelleProduit(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune, nomProduit?: string): string;
        /**
         * Permet d"afficher le libellé de l'acte de gestion
         * (Ouverture, Souscription, Avenant, Clôture, ..)
         * @return le libellé de l'acte de gestion ligne3
         */
        afficherLibelleActeGestion(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune, nomProduit?: string): string;
        /**
         * Permet de recuperer le libelle de l'action à effectuer sur le produit
         * @param objetProduit {Modeles.Produits.ISyntheseProduitsInfoCommune}
         * @return libelle de l'action {string} sur le produit cor. ligne4
         */
        recupererLibelleAction(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune): string;
        /**
         * Permet de recuperer la date de creation du dossier
         * @param objetProduit {Modeles.Produits.ISyntheseProduitsInfoCommune}
         * @return date {string} ligne5
         */
        recupererDateCreation(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune): string;
        /**
         * Permet de recuperer le libellé de la dernière entité plus le picto
         * @param objetProduit {Modeles.Produits.ISyntheseProduitsInfoCommune}
         * @return libelle {string} ligne6
         */
        recupererLibelleCanal(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune): string;
        private formaterProduit(produit, nomProduit, indicateur?, idProduit?);
        /**
         * generer tableau de produits
         * @param numeroEntite{number} numero entite titulaire
         * @param listeProduits {Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]}
         */
        genererTableauProduits(listeProduits: Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]): IObjetProduitFormate[];
    }
}

declare module propoClient.Service {
    class PropoClientProfilService {
        private propoClientUtilsService;
        private propoClientInitService;
        static $inject: string[];
        constructor(propoClientUtilsService: Service.PropoClientUtilsService, propoClientInitService: Service.PropoClientInitService);
        /**
         * Permet de calculer l'age d'une personne à partir de sa date de naissance et de la date du jour
         * @param dateNaissance:string
         * @param dateDuJour:Date
         * @return age:number
         */
        calculerAgePersonne(dateNaissance: string, dateDuJour: Date): number;
        /**
         * Permet d'afficher le pictogramme en fonction de la civilité et de l'age de la personne
         * @param pictogramme:string
         * @param codeCivilité: string
         * @param age:string
         */
        afficherPictogramme(codeGenre: string, dateNaissance: string, dateDuJour: Date, codePersonnaliteJuridique: string): string;
        /**
         * Permet d'afficher le texte Lié à l'entrepreneur individuel en fonction d'un indicateut
         * @param indicExistenceProfessionnel:string
         */
        formaterEntrepreneurIndividuel(indicExistenceProfessionnel: string): string;
        /**
         * Permet d'afficher le code civilite et la designation courte de la personne physique
         * @param codePersonnaliteJuridique:string
         * @param libelleDesignationCourte:string
         * @param codeCivilite:string
         * @param nomFamille:string
         * @param prenom:string
         */
        afficherDesignationCourte(codePersonnaliteJuridique: string, designationCourte: string, codeCivilite: string, nomFamille: string, prenom: string): string;
        /**
         * Permet d'afficher la mention prospect ou client de la personne
         * @param codePersonnaliteJuridique:string
         * @param codeProspect: string
         * @param libelleMentionPersonne:string
         */
        afficherMentionPersonne(codePersonnaliteJuridique: string, codeProspect: string, codeClientTiers: string): string;
    }
}

declare module propoClient.Service {
    class PropoClientRestService {
        private serviceAgentExtended;
        private urlSyntheseClient;
        private $q;
        private propoClientErreurService;
        private propoClientUtilsService;
        private _donneeRestClient;
        static $inject: string[];
        /**
         * constructeur de la classe
         * @param serviceAgentExtended
         * @param urlSyntheseClient
         * @param $q
         * @param propoClientErreurService
         * @param propoClientUtilsService
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, urlSyntheseClient: string, $q: ng.IQService, propoClientErreurService: Service.ErreursManagement, propoClientUtilsService: Service.PropoClientUtilsService);
        /**
         * set donnees client
         * @param objet
         */
        setDonneesClient(objet: Modeles.SyntheseClient.ISyntheseDonneesClient): Modeles.SyntheseClient.ISyntheseDonneesClient;
        /**
         * service d'appel de la ressource syntheseClient - DBPE
         * @param codeAgent
         * @param numeroPersonne
         * @param idEdsInterne
         * @param forcer
         */
        recupererSyntheseClient(codeAgent: number, numeroPersonne: number, idEdsInterne: number, forcer?: boolean): ng.IPromise<Modeles.SyntheseClient.ISyntheseDonneesClient>;
        getDonneesProduits(): Modeles.Produits.ISyntheseClientProduits;
        getDonneesSignaletiques(): Modeles.SyntheseClient.ISyntheseClientDonneesSignaletiques;
    }
}

declare module propoClient.Service {
    class PropoClientUtilsService {
        private propoClientConstantes;
        private modalService;
        static $inject: string[];
        constructor(propoClientConstantes: propoClient.Constantes.PropoClientConstantes, modalService: MyWay.UI.IModalService);
        /**
         * permet d'afficher le libelle du code civilite
         * le resultat doit etre Mme ou Melle ou M
         * @param {string} codeCivilite
         * @return {string} libellé associé à la civilité
         */
        afficherCodeCivilite(genre: string): string;
        /**
         * permet d'afficher le format de la date
         * le resultat doit etre JJ/MM/AAAA
         * @param {string} formatDate
         * @return {string} la date au format JJ/MM/AAAA
         */
        formaterDate(date: string): string;
        /**
         * Permet de retourner le statut "pp" ou "pm" (personne physique ou personne morale)
         * @param codePersonnaliteJuridique:string ("1" pour particulier, "2" pour professionnel)
         * @return {string} le code pp ou pm
         */
        getStatutPersonne(codePersonnaliteJuridique: string): string;
        /**
         * Permet de retourner le marche "particulier" ou "professionnel" (personne physique ou personne morale)
         * @param codePersonnaliteJuridique:string ("1" pour particulier, "2" pour professionnel)
         * @return {string} le code pp ou pm
         */
        getMarchePersonne(codePersonnaliteJuridique: string): string;
        /**
         * Permet de formater un nombre au format d'un solde compte
         * @param montant {number}
         * @return {string} le solde précédé d'un +/- en fonction du solde du Produit
         */
        formaterMontant(montant: number, codeDevise: string): string;
        /**
         * Permet de formater un nombre au format d'un montant sans notion de devise
         * @param montant {number}
         * @return {string} le montant formaté
         */
        formaterMontantSimple(montant: number): string;
        /**
         * Fonction permettant de formater le numero de compte
         * d'un produit ou d'un service ou d'un moyen de paiement
         * @param numeroCompte {string} le numero de compte
         * @return {string} numero de compte formate
         */
        formaterNumeroCompte(numeroCompte: string): string;
        /**
         * Permet de formater un nombre au format sans le diviser par 100
         * @param montant {number}
         * @return {string} le montant précédé d'un +/-
         */
        formaterMontantEcheance(montant: number, codeDevise: string): string;
        /**
         * permet d'extraire les erreurs
         * @param data
         */
        extractErreur(data: any): any;
        /**
         * permet d'afficher un popup d'information
         * @param header
         * @param msg
         * @param icon
         * @param size
         */
        MsgBox(header: string, msg: string, icon?: string, size?: any): any;
        /**
         * Retourne la chaine tronqué pour limiter la taille du libellé
         * @param {string} chaine d'origine
         * @param {number} le nombre de caractères maximum attendues
         * @return {string} la chaine tronquée
         */
        tronquerChaine(chaineATronquer: string, longueurMaximal: number): string;
        /**
         *
         * @param value
         */
        transformerAccents(value: string): string;
        /**
         * permet d'afficher l'icone correspondant à un code canal
         * @param codeCanal
         * @param codeSensCom
         */
        getIcone(codeCanal: string, codeSensCom?: string): string;
        /**
         * permet d'afficher le libelle correspondant à un code canal
         * @param codeCanal
         * @param codeSensCom
         */
        getLibelleCanal(codeCanal: string, codeSensCom?: string): string;
    }
}

declare module propoClient.Directive {
    class PropoClientEnteteControleur {
        private propoClientProfilService;
        private propoClientRestService;
        private propoClientInitService;
        private serviceAgentExtended;
        private propoClientUtilsService;
        private $rootScope;
        titreHeader: string;
        static $inject: string[];
        constructor(propoClientProfilService: propoClient.Service.PropoClientProfilService, propoClientRestService: Service.PropoClientRestService, propoClientInitService: Service.PropoClientInitService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propoClientUtilsService: Service.PropoClientUtilsService, $rootScope: ng.IRootScopeService);
        libelleEntrepreneurIndividuel: string;
        numeroPersonne: number;
        designationCourte: string;
        /**
         * permet de fermer l'application
         */
        quitter(): MyWay.Services.IPromesse<MyWay.Services.Lisa.LisaCallbackResult>;
    }
}

declare module propoClient.Directive {
    function PropoClientEnteteDirective(): ng.IDirective;
}

declare module propoClient.Directive {
    class PropoClientFooterControleur {
        private propoClientInitService;
        private serviceAgentExtended;
        private modalService;
        private propoClientUtilsService;
        private $rootScope;
        static $inject: string[];
        constructor(propoClientInitService: Service.PropoClientInitService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, propoClientUtilsService: Service.PropoClientUtilsService, $rootScope: ng.IRootScopeService);
        numeroPersonne: number;
        /**
         * permet de fermer l'application
         */
        quitter(): MyWay.Services.IPromesse<MyWay.Services.Lisa.LisaCallbackResult>;
    }
}

declare module propoClient.Directive {
    function PropoClientFooterDirective(): ng.IDirective;
}

declare module propoClient.Directive {
    interface IScopeEcpElementProduit extends ng.IScope {
        listeObject: string;
        object: Modeles.Produits.IListeSyntheseClientProduitInfoCommune;
        dateCreation: string;
        titre: string;
        id: string;
        avecMarquage: string;
        indicateur: string;
        libelleActeGestion: string;
        libelleAction: number;
        libelleCanal: string;
        picto: string;
        libelleIcon: string;
        clickAction: () => void;
    }
    class PropoClientElementProduitControleur {
        private $scope;
        private propoClientUtilsService;
        private propoClientProduitsService;
        nomProduitCourt: string;
        nomProduitMoyen: string;
        libelleActionCourt: string;
        visible: boolean;
        listActesDeGestions: boolean;
        listeObject: string;
        codeCategorie: string;
        template: any;
        templateFonction: ($scope: ng.IScope, fn: (clone: any) => void) => void;
        isProduitMw: boolean;
        isProduitVmc: boolean;
        static $inject: string[];
        constructor($scope: IScopeEcpElementProduit, propoClientUtilsService: Service.PropoClientUtilsService, propoClientProduitsService: Service.PropoClientProduitsService);
        /**
         * report de l'action de click/keypress sur la tuile
         */
        clickAction(): void;
    }
}

declare module propoClient.Directive {
    function PropoClientElementProduitDirective(): ng.IDirective;
}
