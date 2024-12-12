
declare module CommissionNonUtilisation {
    var app: any;
}

/***
 * Controleur de la directive mw-commission-non-utilisation
 * @module CommissionNonUtilisation
 * @author S0078068 (Yannis Vessereau)
 */
declare module CommissionNonUtilisation {
    /**
     * Classe de la directive
     */
    class MwCommissionNonUtilisationControleur {
        private $scope;
        private serviceAgentExtended;
        private commissionNonUtilisationService;
        private listeDeviseService;
        private mwNotificationService;
        private $filter;
        private tiersRechercheService;
        private saisieRiceService;
        private caracteristiqueSiegeService;
        static $inject: string[];
        indicateurRequeteEnCours: boolean;
        indicateurDonneesRecus: boolean;
        infosCompte: Modeles.IInformationsCompte;
        queryCommissionNonUtilisation: ComposantsCommunsConsultationCCE.Modeles.CommissionNonUtilisation.ICommissionNonUtilisationRestServiceGetQuery;
        listeJustificatif: ComposantsCommunsConsultationCCE.Modeles.CommissionNonUtilisation.IJustificatif[];
        listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[];
        numeroRIB: string;
        listeTrimestre: Array<Object>;
        choixTrimestre: any;
        choixRecherche: ComposantsCommunsConsultationCCE.Enumerations.CommissionNonUtilisation.TypeRestitutionEnum;
        dateEnCours: string;
        isBoutonImprimerPresent: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, commissionNonUtilisationService: ComposantsCommunsConsultationCCE.Services.CommissionNonUtilisationService, listeDeviseService: ComposantsCommunsConsultationCCE.Services.ListeDeviseService, mwNotificationService: MyWay.UI.IMwNotificationService, $filter: ng.IFilterService, tiersRechercheService: ComposantsCommunsConsultationCCE.Services.TiersRecherche.ITiersRechercheService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, caracteristiqueSiegeService: ComposantsCommunsConsultationCCE.Services.Structure.IStructureCaracteristiqueSiegeService);
        getLibellePeriodeEnCours(): string;
        /**
         * Méthode permettant de rechercher les données
         * @return void
         */
        rechercher(): void;
        /**
         * Méthode permettant de récuperer le résultat du service
         * @return void
         */
        private getDonneesService();
        clickImprimer(): void;
    }
}

/***
 * Controleur de la page commission-non-utilisation
 * @module CommissionNonUtilisation
 * @author S0078068 (Yannis Vessereau)
 */
declare module CommissionNonUtilisation {
    /**
     * Classe du controleur
     */
    class PageCommissionNonUtilisationControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        infosCompte: Modeles.IInformationsCompte;
        indicateurVueDirective: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer les informations du compte
         * @return {void}
         */
        recupererInformationsCompte(): void;
    }
}

/***
 * Controleur de la page dev-mw-commission-non-utilisation
 * @module CommissionNonUtilisation
 * @author S0078068 (Yannis Vessereau)
 */
declare module CommissionNonUtilisation {
    /**
     * Classe du controleur
     */
    class PageDevMwCommissionNonUtilisationControleur {
        private $scope;
        private serviceAgentExtended;
        private $timeout;
        static $inject: string[];
        infosCompte: Modeles.IInformationsCompte;
        indicateurVueDirective: boolean;
        indicateurVueFormulaire: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService);
        /**
         * Méthode permettant de récupérer les informations du compte
         * @return void
         */
        recupererInformationsCompte(): void;
        /**
         * Méthode permettant d'exécuter la directive
         * @return void
         */
        executerDirective(): void;
    }
}

/***
 * Controleur de la directive tableau-commission-non-utilisation
 * @module CommissionNonUtilisation
 * @author S0078068 (Yannis Vessereau)
 */
declare module CommissionNonUtilisation {
    /**
     * Classe de la directive
     */
    class TableauCommissionNonUtilisationControleur {
        private $scope;
        private listeDeviseService;
        private $filter;
        static $inject: string[];
        listeJustificatif: ComposantsCommunsConsultationCCE.Modeles.CommissionNonUtilisation.IJustificatif[];
        listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[];
        listeCommissionNonUtilisation: any[];
        tableauCommissionNonUtilisation: MyWay.UI.ImwTableOptions;
        infoDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, listeDeviseService: ComposantsCommunsConsultationCCE.Services.ListeDeviseService, $filter: ng.IFilterService);
        /**
         * Méthode permettant de mettre en forme les données
         * @return void
         */
        miseEnFormeDonnees(): void;
        getTitreTableau(): string;
        /**
         * Méthode permettant la construction du tableau de commission non utilisation
         * @return void
         */
        construireTableauCommissionNonUtilisation(): void;
    }
}

/***
 * Directive mw-commission-non-utilisation
 * @module CommissionNonUtilisation
 * @author S0078068 (Yannis Vessereau)
 */
declare module CommissionNonUtilisation {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwCommissionNonUtilisation(): ng.IDirective;
}

/***
 * Directive mw-tableau-commission-non-utilisation
 * @module CommissionNonUtilisation
 * @author S0078068 (Yannis Vessereau)
 */
declare module CommissionNonUtilisation {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwTableauCommissionNonUtilisation(): ng.IDirective;
}

declare module CommissionNonUtilisation.Services.sipcgceCalculCnu {
    function createArchiverParams(): Modeles.sipcgceCalculCnu.SipcgceCalculCnuArchiverParams;
    function createGenererParams(): Modeles.sipcgceCalculCnu.SipcgceCalculCnuGenererParams;
    function createArchiverGenererParams(): Modeles.sipcgceCalculCnu.SipcgceCalculCnuArchiverGenererParams;
    function createImpressionParams(): Modeles.sipcgceCalculCnu.SipcgceCalculCnuImpressionParams;
    function createArchiverImpressionParams(): Modeles.sipcgceCalculCnu.SipcgceCalculCnuArchiverImpressionParams;
    function createImpressionLotParams(): Modeles.sipcgceCalculCnu.SipcgceCalculCnuImpressionLotParams;
    function createDocument(rib: string, listeJustificatif: Modeles.IJustificatifEditique[], montantDevise: string, listeTiers: ComposantsCommunsConsultationCCE.Modeles.TiersRecherche.ITiers[], caracteristiqueSiege: ComposantsCommunsConsultationCCE.Modeles.Structure.ICaracteristiqueSiege): Modeles.sipcgceCalculCnu.SipcgceCalculCnu;
}

/***
 * Ensemble d'interfaces de modèles du projet
 * @module CommissionNonUtilisation.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module CommissionNonUtilisation.Modeles {
    interface IInformationsCompte {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
    interface IJustificatifEditique {
        dateArrete: Date;
        codeAppartenanceFusion: string;
        soldeDeviseTenueCompte: string;
        montantAutorisationDecouvert: string;
        montantNonUtilisationDecouvert: string;
        tauxCommissionNonUtilisation: string;
        nombreJoursNonUtilisation: number;
        numeroCptePrincipal: string;
        dateDebut: Date;
        dateFin: Date;
    }
}

declare module CommissionNonUtilisation.Modeles.sipcgceCalculCnu {
    interface IsipcgceCalculCnu {
        section0: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IsipcgceCalculCnuSection0[];
        genericLogoEts: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericLogoEts[];
        genericPiedpageets: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsipcgceCalculCnuSection0 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02)[];
    }
    interface Ich00 {
        bloc1: IsipcgceCalculCnuSection0Bloc1;
    }
    interface Ich01 {
        bloc2: IsipcgceCalculCnuSection0Bloc2;
    }
    interface Ich02 {
        bloc3: IsipcgceCalculCnuSection0Bloc3;
    }
    interface IgenericLogoEts {
        logoEtablissement: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB10175[];
        b13135: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB13135[];
        b13705: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB13705[];
        b14445: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB14445[];
        b14505: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB14505[];
        b15135: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB15135[];
        b15905: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB15905[];
        b15965: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB15965[];
        b16275: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB16275[];
        b18025: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB18025[];
        b18279: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB18279[];
        b43199: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB43199[];
        b18715: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB18715[];
        b13335: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB13335[];
        b17515: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB17515[];
        b62108: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB62108[];
        b12579: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB12579[];
        b13825: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB13825[];
        b16705: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB16705[];
        b12135: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB12135[];
        b14265: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB14265[];
        b13485: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB13485[];
        b18315: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB18315[];
        b11315: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB11315[];
        b11425: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB11425[];
        b12548: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB12548[];
        b30051: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageetsB30051[];
    }
    interface IgenericPiedpageetsB10175 {
        d10175L1: string;
        d10175L2: string;
    }
    interface IgenericPiedpageetsB13135 {
        d13135L1: string;
    }
    interface IgenericPiedpageetsB13705 {
        d13705L1: string;
    }
    interface IgenericPiedpageetsB14445 {
        d14445L1: string;
    }
    interface IgenericPiedpageetsB14505 {
        d14505L1: string;
    }
    interface IgenericPiedpageetsB15135 {
        d15135L1: string;
    }
    interface IgenericPiedpageetsB15905 {
        d15905L1: string;
        d15905L2: string;
    }
    interface IgenericPiedpageetsB15965 {
        d15965L1: string;
        d15965L2: string;
    }
    interface IgenericPiedpageetsB16275 {
        d16275L1: string;
    }
    interface IgenericPiedpageetsB18025 {
        d18025L1: string;
    }
    interface IgenericPiedpageetsB18279 {
        d18279L1: string;
        d18279L2: string;
    }
    interface IgenericPiedpageetsB43199 {
        d43199L1: string;
        d43199L2: string;
    }
    interface IgenericPiedpageetsB18715 {
        d18715L1: string;
    }
    interface IgenericPiedpageetsB13335 {
        d13335L1: string;
    }
    interface IgenericPiedpageetsB17515 {
        d17515L1: string;
    }
    interface IgenericPiedpageetsB62108 {
        d62108L1: string;
    }
    interface IgenericPiedpageetsB12579 {
        d12579L1: string;
    }
    interface IgenericPiedpageetsB13825 {
        d13825L1: string;
    }
    interface IgenericPiedpageetsB16705 {
        d16705L1: string;
    }
    interface IgenericPiedpageetsB12135 {
        d12135L1: string;
    }
    interface IgenericPiedpageetsB14265 {
        d14265L1: string;
    }
    interface IgenericPiedpageetsB13485 {
        d13485L1: string;
    }
    interface IgenericPiedpageetsB18315 {
        d18315L1: string;
    }
    interface IgenericPiedpageetsB11315 {
        d11315L1: string;
    }
    interface IgenericPiedpageetsB11425 {
        d11425L1: string;
    }
    interface IgenericPiedpageetsB12548 {
        d12548L1: string;
    }
    interface IgenericPiedpageetsB30051 {
        d30051L1: string;
    }
    interface IsipcgceCalculCnuSection0Bloc1 {
        nomClient: string;
        adr1: string;
        adr2: string;
        adr3: string;
        adr4: string;
        adr5: string;
        dateEtLieu: string;
    }
    interface IsipcgceCalculCnuSection0Bloc2 {
        compte: string;
        dateDebut: string;
        dateFin: string;
        mtDeviseCompte: string;
        mtDeviseFacturation: string;
    }
    interface IsipcgceCalculCnuSection0Bloc3 {
        liste0: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IsipcgceCalculCnuSection0Bloc3Liste0[];
    }
    interface IsipcgceCalculCnuSection0Bloc3Liste0 {
        ligne1: number;
        ligne2: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IsipcgceCalculCnuSection0Bloc3Liste0Ligne2[];
    }
    interface IsipcgceCalculCnuSection0Bloc3Liste0Ligne2 {
        date: string;
        type: string;
        solde: string;
        decouvertAutorise: string;
        decouvertNonUtilise: string;
        taux: string;
        nbJours: string;
        comptePrincipal: string;
    }
    class SipcgceCalculCnu implements IsipcgceCalculCnu {
        section0: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IsipcgceCalculCnuSection0[];
        genericLogoEts: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericLogoEts[];
        genericPiedpageets: CommissionNonUtilisation.Modeles.sipcgceCalculCnu.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SipcgceCalculCnuArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceCalculCnuGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceCalculCnuArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceCalculCnuImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SipcgceCalculCnuArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SipcgceCalculCnuImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}
