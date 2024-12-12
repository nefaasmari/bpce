
declare module DecompteAgios {
    var app: any;
}

declare module DecompteAgios.Controleurs {
    class EchelleInteretControleur {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
    }
}

/**
 * Controleur de la page test dev de la directive mw-decompte-agios
 * @module DecompteAgios.Controleurs
 * @author S0077482 (Thomas PRAT)
 */
declare module DecompteAgios.Controleurs {
    /**
     * Classe du controleur de la page test dev de la directive mw-decompte-agios
     */
    class PageDevMwDecompteAgiosControleur {
        private $scope;
        private serviceAgentExtended;
        private $location;
        private donneesContexteDecompteAgios;
        static $inject: string[];
        contexte: ComposantsCommunsConsultationCCE.Modeles.IContexteDecompteAgios;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, donneesContexteDecompteAgios: ComposantsCommunsConsultationCCE.Services.IDonneesContexteDecompteAgios);
        initContexte(): void;
        consulterDecompteAgios(): void;
    }
}

/**
 * Controleur de la page decompte agios
 * @module DecompteAgios.Controleurs
 * @author S0077482 (Thomas PRAT)
 */
declare module DecompteAgios.Controleurs {
    /**
     * Classe du controleur de la page decompte agios
     */
    class SpaDecompteAgiosControleur {
        private donneesContexteDecompteAgios;
        static $inject: string[];
        private contexte;
        constructor(donneesContexteDecompteAgios: ComposantsCommunsConsultationCCE.Services.DonneesContexteDecompteAgios);
    }
}

declare module DecompteAgios.Controleurs {
    class TableauDetailEchelleInteretControleur {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
        controlerPresenceNumeroCompte(contexte: ComposantsCommunsConsultationCCE.Modeles.IContexteDecompteAgios, ligneOperation: ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IOperation): boolean;
    }
}

/**
 * Filtres utiles
 * @module DecompteAgios.Filtres
 * @author S0077482 (Thomas PRAT)
 */
declare module DecompteAgios.Filtres {
    /**
     * Filtre pour ajouter le signe à un nombre
     * @return {Function} La fonction du filtre
     */
    function formatSigneSansPlusFiltre($filter: ng.IFilterService): Function;
}

/**
 * Filtres utiles
 * @module DecompteAgios.Filtres
 * @author S0077482 (Thomas PRAT)
 */
declare module DecompteAgios.Filtres {
    function TypeArreteFiltre(): (codeTypeArrete: string) => string;
}

/***
 * Ensemble d'énumérations pour les decomptes agios
 * @module DecompteAgios.Enumerations.DecompteAgios
 * @author S0077482 (Thomas Prat)
 */
declare module DecompteAgios.Enumerations.DecompteAgios {
    /**
     * Periodicite du decompte agio
     * "M" MENSUELLE
     * "T" TRIMESTRIELLE
     */
    enum Periodicite {
        MENSUELLE,
        TRIMESTRIELLE,
    }
    /**
     * Mois de la periodicité
     * "1" JANVIER
     * "2" FEVRIER
     * "3" MARS
     * "4" AVRIL
     * "5" MAI
     * "6" JUIN
     * "7" JUILLET
     * "8" AOUT
     * "9" SEPTEMBRE
     * "10" OCTOBRE
     * "11" NOVEMBRE
     * "12" DECEMBRE
     */
    enum MoisPeriodicite {
        JANVIER,
        FEVRIER,
        MARS,
        AVRIL,
        MAI,
        JUIN,
        JUILLET,
        AOUT,
        SEPTEMBRE,
        OCTOBRE,
        NOVEMBRE,
        DECEMBRE,
    }
    /**
     * Libellé des Intérets et frais
     * "Intérêts créditeurs" CREDITEUR
     * "Intérêts débiteurs" DEBITEUR
     * "Frais et commissions" FRAIS_COMMISSION
     * "Frais tenue de compte" FRAIS_TENUE_COMPTE
     */
    enum LibelleInteretFrais {
        CREDITEUR,
        DEBITEUR,
        FRAIS_COMMISSION,
        FRAIS_TENUE_COMPTE,
    }
}

/**
 * Service concernant les donnees de decompte agios
 * @module DecompteAgios.Services
 * @author S0077482(Thomas Prat)
 */
declare module DecompteAgios.Services {
    /**
     * Interface du service de donnees de decompte agios
     */
    interface IDonneesDecompteAgiosService {
        enregistrerListePeriodes(listePeriodes: ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete[]): any;
        recupererListePeriodes(): ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete[];
        enregistrerIndicateurFusionAgio(indicateurFusionAgio: boolean): any;
        isTypeEchelleFusion(): boolean;
        enregistrerPeriodeSelectionnee(periode: ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete): any;
        recupererPeriodeSelectionnee(): ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete;
    }
    /**
     * Déclaration du service de donnees de decompte agios
     */
    class DonneesDecompteAgiosService implements IDonneesDecompteAgiosService {
        private listePeriodes;
        private typeEchelleFusion;
        private periode;
        enregistrerListePeriodes(listePeriodes: ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete[]): void;
        recupererListePeriodes(): ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete[];
        enregistrerPeriodeSelectionnee(periode: ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete): void;
        recupererPeriodeSelectionnee(): ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete;
        enregistrerIndicateurFusionAgio(indicateurFusionAgio: boolean): void;
        isTypeEchelleFusion(): boolean;
    }
}

declare module DecompteAgios.Services.sipcgceDecompteagios {
    function createArchiverParams(): Modeles.sipcgceDecompteagios.SipcgceDecompteagiosArchiverParams;
    function createGenererParams(): Modeles.sipcgceDecompteagios.SipcgceDecompteagiosGenererParams;
    function createArchiverGenererParams(): Modeles.sipcgceDecompteagios.SipcgceDecompteagiosArchiverGenererParams;
    function createImpressionParams(): Modeles.sipcgceDecompteagios.SipcgceDecompteagiosImpressionParams;
    function createArchiverImpressionParams(): Modeles.sipcgceDecompteagios.SipcgceDecompteagiosArchiverImpressionParams;
    function createImpressionLotParams(): Modeles.sipcgceDecompteagios.SipcgceDecompteagiosImpressionLotParams;
    function createDocument(contexte: ComposantsCommunsConsultationCCE.Modeles.IContexteDecompteAgios, periode: ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IPeriodeArrete, designationBancaire: string, infosDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise, typeArrete: string, montantTotal: string, isMontantDebiteur: boolean, teg: string, tauxTVA: string, dataDecompteTableau: Modeles.Tableaux.IDonneesDecompteAgiosTableauModele[], listeAgio: Modeles.IDecompteAgioTableauEditiqueModele[], typeDecompte: string, compteFusionne: boolean, compteFusion: string, compteRattache: string[]): Modeles.sipcgceDecompteagios.SipcgceDecompteagios;
}

declare module DecompteAgios.Services.sipcgceEchelleinteretsdetaillee {
    function createArchiverParams(): Modeles.sipcgceEchelleinteretsdetaillee.SipcgceEchelleinteretsdetailleeArchiverParams;
    function createGenererParams(): Modeles.sipcgceEchelleinteretsdetaillee.SipcgceEchelleinteretsdetailleeGenererParams;
    function createArchiverGenererParams(): Modeles.sipcgceEchelleinteretsdetaillee.SipcgceEchelleinteretsdetailleeArchiverGenererParams;
    function createImpressionParams(): Modeles.sipcgceEchelleinteretsdetaillee.SipcgceEchelleinteretsdetailleeImpressionParams;
    function createArchiverImpressionParams(): Modeles.sipcgceEchelleinteretsdetaillee.SipcgceEchelleinteretsdetailleeArchiverImpressionParams;
    function createImpressionLotParams(): Modeles.sipcgceEchelleinteretsdetaillee.SipcgceEchelleinteretsdetailleeImpressionLotParams;
    function createDocument(contexte: ComposantsCommunsConsultationCCE.Modeles.IContexteDecompteAgios, listeTauxCrediteurs: Modeles.ILigneConditionsArretesTableauEditiqueModele[], listeTauxDebiteurs: Modeles.ILigneConditionsArretesTableauEditiqueModele[], dateDebut: Date, dateFin: Date, dateDebutMoinsUn: Date, designationBancaire: string, soldeValeurDateDebut: number, soldeValeurDateFin: number, listeEchelles: Modeles.IEchelleInteretTableauEditiqueModele[], echelleInitialRecalcul: string): Modeles.sipcgceEchelleinteretsdetaillee.SipcgceEchelleinteretsdetaillee;
}

declare module DecompteAgios.Modeles.sipcgceDecompteagios {
    interface IsipcgceDecompteagios {
        section1: DecompteAgios.Modeles.sipcgceDecompteagios.IsipcgceDecompteagiosSection1[];
        genericLogoEts: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericLogoEts[];
        genericPiedpageets: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsipcgceDecompteagiosSection1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03)[];
    }
    interface Ich00 {
        blEntete: IsipcgceDecompteagiosSection1BlEntete;
    }
    interface Ich01 {
        blCorps: IsipcgceDecompteagiosSection1BlCorps;
    }
    interface Ich02 {
        blFin: IsipcgceDecompteagiosSection1BlFin;
    }
    interface Ich03 {
        genericLignevide: number;
    }
    interface IgenericLogoEts {
        logoEtablissement: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
        b10175: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB10175[];
        b13135: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB13135[];
        b13705: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB13705[];
        b14445: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB14445[];
        b14505: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB14505[];
        b15135: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB15135[];
        b15905: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB15905[];
        b15965: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB15965[];
        b16275: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB16275[];
        b18025: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB18025[];
        b18279: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB18279[];
        b43199: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB43199[];
        b18715: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB18715[];
        b13335: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB13335[];
        b17515: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB17515[];
        b62108: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB62108[];
        b12579: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB12579[];
        b13825: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB13825[];
        b16705: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB16705[];
        b12135: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB12135[];
        b14265: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB14265[];
        b13485: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB13485[];
        b18315: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB18315[];
        b11315: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB11315[];
        b11425: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB11425[];
        b12548: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB12548[];
        b30051: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageetsB30051[];
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
    interface IsipcgceDecompteagiosSection1BlCorps {
        typeArrete: string;
        libelleDevise: string;
        liste1: DecompteAgios.Modeles.sipcgceDecompteagios.IsipcgceDecompteagiosSection1BlCorpsListe1[];
    }
    interface IsipcgceDecompteagiosSection1BlCorpsListe1 {
        blocChoiceJson: (Ich10 | Ich11 | Ich12 | Ich13)[];
    }
    interface Ich10 {
        ligne5: number;
    }
    interface Ich11 {
        ligne2: IsipcgceDecompteagiosSection1BlCorpsListe1Ligne2;
    }
    interface Ich12 {
        ligne7: number;
    }
    interface Ich13 {
        ligne6: number;
    }
    interface IsipcgceDecompteagiosSection1BlCorpsListe1Ligne2 {
        d1: string;
        d2: string;
        d3: string;
        d4: string;
        d5: string;
        d6: string;
        d7: string;
    }
    interface IsipcgceDecompteagiosSection1BlEntete {
        page: string;
        pageTotal: string;
        dateDebut: string;
        dateFin: string;
        dateJour: string;
        heure: string;
        client: string;
        libelleNumeroCompte: string;
        numeroCompte: string;
        libelleFusion: string;
        libelleTypeDecompte: string;
        blCptFusion: IsipcgceDecompteagiosSection1BlEnteteBlCptFusion[];
    }
    interface IsipcgceDecompteagiosSection1BlEnteteBlCptFusion {
        blocChoiceJson: (Ich14)[];
    }
    interface Ich14 {
        cptRattLigne: IsipcgceDecompteagiosSection1BlEnteteBlCptFusionCptRattLigne[];
    }
    interface IsipcgceDecompteagiosSection1BlEnteteBlCptFusionCptRattLigne {
        l1: string;
        l2: string;
    }
    interface IsipcgceDecompteagiosSection1BlFin {
        libelleMontant: string;
        montantTotal: string;
        codeDevise: string;
        interetsCrediteurs: string;
        codeDevise1: string;
        interetsDebiteurs: string;
        codeDevise2: string;
        commissionsFrais: string;
        codeDevise3: string;
        fraisTenueCompte: string;
        codeDevise4: string;
        tauxEffectifGlobal: string;
        tauxTva: string;
    }
    class SipcgceDecompteagios implements IsipcgceDecompteagios {
        section1: DecompteAgios.Modeles.sipcgceDecompteagios.IsipcgceDecompteagiosSection1[];
        genericLogoEts: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericLogoEts[];
        genericPiedpageets: DecompteAgios.Modeles.sipcgceDecompteagios.IgenericPiedpageets[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SipcgceDecompteagiosArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceDecompteagiosGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceDecompteagiosArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceDecompteagiosImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SipcgceDecompteagiosArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SipcgceDecompteagiosImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module DecompteAgios.Modeles.sipcgceEchelleinteretsdetaillee {
    interface IsipcgceEchelleinteretsdetaillee {
        section1: DecompteAgios.Modeles.sipcgceEchelleinteretsdetaillee.IsipcgceEchelleinteretsdetailleeSection1[];
        blEntete: DecompteAgios.Modeles.sipcgceEchelleinteretsdetaillee.IsipcgceEchelleinteretsdetailleeBlEntete[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IsipcgceEchelleinteretsdetailleeSection1 {
        blCorps: DecompteAgios.Modeles.sipcgceEchelleinteretsdetaillee.IsipcgceEchelleinteretsdetailleeSection1BlCorps[];
        blFin: DecompteAgios.Modeles.sipcgceEchelleinteretsdetaillee.IsipcgceEchelleinteretsdetailleeSection1BlFin[];
        genericLignevide: number;
    }
    interface IsipcgceEchelleinteretsdetailleeSection1BlCorps {
        liste1: DecompteAgios.Modeles.sipcgceEchelleinteretsdetaillee.IsipcgceEchelleinteretsdetailleeSection1BlCorpsListe1[];
    }
    interface IsipcgceEchelleinteretsdetailleeSection1BlCorpsListe1 {
        blocChoiceJson: (Ich00 | Ich01 | Ich02 | Ich03)[];
    }
    interface Ich00 {
        entLign1: number;
    }
    interface Ich01 {
        entLign2: number;
    }
    interface Ich02 {
        ligne4: IsipcgceEchelleinteretsdetailleeSection1BlCorpsListe1Ligne4;
    }
    interface Ich03 {
        ligne2: IsipcgceEchelleinteretsdetailleeSection1BlCorpsListe1Ligne2;
    }
    interface IsipcgceEchelleinteretsdetailleeSection1BlFin {
        soldeValeur2: string;
    }
    interface IsipcgceEchelleinteretsdetailleeBlEntete {
        dateDebut: string;
        dateFin: string;
        dateJour: string;
        heure: string;
        client: string;
        type: string;
        rice: string;
        soldeValeur: string;
    }
    interface IsipcgceEchelleinteretsdetailleeSection1BlCorpsListe1Ligne2 {
        d1: string;
        d2: string;
        d3: string;
        d4: string;
        d5: string;
        d6: string;
        d7: string;
        d8: string;
        d9: string;
        d10: string;
        d11: string;
        d12: string;
    }
    interface IsipcgceEchelleinteretsdetailleeSection1BlCorpsListe1Ligne4 {
        d20: string;
    }
    class SipcgceEchelleinteretsdetaillee implements IsipcgceEchelleinteretsdetaillee {
        section1: DecompteAgios.Modeles.sipcgceEchelleinteretsdetaillee.IsipcgceEchelleinteretsdetailleeSection1[];
        blEntete: DecompteAgios.Modeles.sipcgceEchelleinteretsdetaillee.IsipcgceEchelleinteretsdetailleeBlEntete[];
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class SipcgceEchelleinteretsdetailleeArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceEchelleinteretsdetailleeGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceEchelleinteretsdetailleeArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SipcgceEchelleinteretsdetailleeImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SipcgceEchelleinteretsdetailleeArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SipcgceEchelleinteretsdetailleeImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module DecompteAgios.Modeles {
    interface ILigneConditionsArretesTableauEditiqueModele {
        dateValeurOperation: Date;
        libelleTauxReference: string;
        valeurTauxReference: number;
        valeurVariationBaremeDebiteur: string;
        typeLigneDetail: string;
        montantPalier: string;
        borneSuperieurPalier: string;
        numeroPalier: string;
    }
    interface IEchelleInteretTableauEditiqueModele {
        dateValeur: Date;
        montant: string;
        soldeDebit: string;
        soldeCredit: string;
        nombreJours: number;
        totalDebit: string;
        totalCredit: string;
        totalDepassement: string;
        listeDetails: Modeles.IOperationTableauEditiqueModele[];
    }
    interface IDecompteAgioTableauEditiqueModele {
        libelleDetailDecompte: string;
        tauxCommission: string;
        montantCommissionAgio: string;
        montantBaseCalculCommission: string;
        montantNetCommissionInteret: string;
        tauxTVA: string;
        montantTVA: string;
    }
    interface IOperationTableauEditiqueModele {
        dateValeurOperation: Date;
        dateOperation: Date;
        premierLibelleReleve: string;
        montantOperation: string;
        fluxCommercial: string;
        retroactivite: string;
    }
}

/**
 * Controleur mw-decompte-agios
 * @module DecompteAgios.Controleurs
 * @author S0077482 (Thomas PRAT)
 */
declare module DecompteAgios.Controleurs {
    /**
     * Classe du controleur de la directive mw-decompte-agios
     */
    class MwDecompteAgiosControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private decompteAgioService;
        private modalService;
        private listeDeviseService;
        private $filter;
        private $location;
        private donneesDecompteAgiosService;
        private donneesContexteDecompteAgios;
        static $inject: string[];
        private tableauDecompteAgios;
        private dataDecompteAgios;
        private decompteAgioGetRequete;
        infosDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise;
        private numComptePrincipal;
        private afficherNumComptePrincipal;
        private indicateurFusionAgio;
        private compteFusion;
        private compteRattache;
        private typeArrete;
        private codeCalculEstimation;
        private dateEstimationPosition;
        private periodicite;
        private typeDecompte;
        private listePeriodes;
        private choixPeriode;
        montantTotal: string;
        montantTotalSigne: number;
        private isMontantDebiteur;
        private teg;
        chargementEnCours: boolean;
        listeInteretsCrediteurs: Modeles.Tableaux.IInteret[];
        listeInteretsDebiteurs: Modeles.Tableaux.IInteret[];
        listeFraisCommissions: Modeles.Tableaux.IFraisCommission[];
        fraisTenueDeCompte: string;
        private contexte;
        private boutonEchelleInteretActif;
        private designationBancaire;
        private tauxTVA;
        private listeAgiosImpression;
        private listeAgioImpressionTmp;
        isBoutonImprimerActif: boolean;
        ricePrelevement: string;
        datePrelevement: Date;
        indicateurPrelevement: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, decompteAgioService: ComposantsCommunsConsultationCCE.Services.DecompteAgios.IDecompteAgiosService, modalService: MyWay.UI.ModalService, listeDeviseService: ComposantsCommunsConsultationCCE.Services.ListeDeviseService, $filter: ng.IFilterService, $location: ng.ILocationService, donneesDecompteAgiosService: Services.IDonneesDecompteAgiosService, donneesContexteDecompteAgios: ComposantsCommunsConsultationCCE.Services.DonneesContexteDecompteAgios);
        imprimerDecompteAgios(): void;
        clickEchelleInteret(): void;
        changementPeriodeSelectionnee(): void;
        private constitutionlisteInteretsCrediteurs(decompteAgio);
        private constitutionlisteInteretsDebiteurs(decompteAgio);
        private constitutionlisteFraisCommissions(decompteAgio);
        private constitutionFraisTenueDeCompte(decompteAgio);
        private constitutionlisteInterets(decompteAgio, typeAgio, listeInterets, typesLigneDetail);
        private consitutionListeAgiosImpression(decompteAgio);
        private decoupageListeAgios(decompteAgio);
        private formatageListeInterets(listeAgios, typeAgio, listeInterets);
        private changeLibellePeriodeConcerneeAvant(libellePeriodeConcernee);
        private changeLibellePeriodeConcerneeDuAu(libellePeriodeConcernee);
        onSelectionChange(selectedObject: any): void;
    }
}

/**
 * Directive mw-decompte-agios
 * @module DecompteAgios.Directives
 * @author S0077482 (Thomas PRAT)
 */
declare module DecompteAgios.Directives {
    /**
     * Méthode permettant de déclarer la directive mw-decompte-agios
     * @return {ng.IDirective} La directive créée
     */
    function mwDecompteAgios(): ng.IDirective;
}

/**
 * Controleur mw-echelle-nteret
 * @module DecompteAgios.Controleurs
 * @author S0077482 (Thomas PRAT)
 */
declare module DecompteAgios.Controleurs {
    /**
     * Classe du controleur de la directive mw-echelle-interet
     */
    class MwEchelleInteretControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private decompteAgioService;
        private modalService;
        private listeDeviseService;
        private donneesDecompteAgiosService;
        private donneesContexteDecompteAgios;
        private mwEvents;
        private $filter;
        private $location;
        static $inject: string[];
        private echelleSimpleFusion;
        private echelleInitialRecalcul;
        private choixArrete;
        private listeArrete;
        private dateDu;
        private dateAu;
        private rechercheEffectuee;
        private listeTauxCrediteurs;
        private listeTauxDebiteurs;
        private tableauEchelleInteret;
        listeErreurs: any[];
        private decompteAgioGetRequete;
        private contexte;
        private rechercheEnCours;
        private dateDebut;
        private dateFin;
        private dateDebutMoinsUn;
        private soldeValeurDateDebut;
        private soldeValeurDateFin;
        private infosDevise;
        private listeDevises;
        private listeEchelles;
        private designationBancaire;
        isBoutonImprimerActif: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, decompteAgioService: ComposantsCommunsConsultationCCE.Services.DecompteAgios.IDecompteAgiosService, modalService: MyWay.UI.ModalService, listeDeviseService: ComposantsCommunsConsultationCCE.Services.ListeDeviseService, donneesDecompteAgiosService: Services.IDonneesDecompteAgiosService, donneesContexteDecompteAgios: ComposantsCommunsConsultationCCE.Services.IDonneesContexteDecompteAgios, mwEvents: MyWay.UI.IMwEvents, $filter: ng.IFilterService, $location: ng.ILocationService);
        effacerDatesPourDuAu(): void;
        effacerDatesPourListeArrete(): void;
        rechercher(): void;
        envoiRequeteSuite(resultatRequete: ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IDecompteAgio): void;
        imprimerEchellesInterets(): void;
        clickRetour(): void;
        effacerRecherche(): void;
        goToAnchor(ancre: string): void;
        onSelectionChange(selectedObject: any): void;
    }
}

/**
 * Directive mw-echelle-interet
 * @module DecompteAgios.Directives
 * @author S0077482 (Thomas PRAT)
 */
declare module DecompteAgios.Directives {
    /**
     * Méthode permettant de déclarer la directive mw-echelle-interet
     * @return {ng.IDirective} La directive créée
     */
    function mwEchelleInteret(): ng.IDirective;
}

/**
 * Modele du tableau des decomptes agios
 * @module DecompteAgios.Modeles.Tableaux
 * @author S0077482(Thomas Prat)
 */
declare module DecompteAgios.Modeles.Tableaux {
    interface IInteret {
        periodeConcernee: string;
        numPalier: string;
        nombreValeur: string;
        taux: string;
        montantHT: string;
        montantTTC: string;
        tauxTVA: string;
    }
    interface IFraisCommission {
        libelle: string;
        assietteCalcul: string;
        taux: string;
        montantHT: string;
        montantTTC: string;
        tauxTVA: string;
    }
    interface IDonneesDecompteAgiosTableauModele {
        interetFrais: string;
        montant: number;
        infosDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise;
        listeInterets?: IInteret[];
        listeFraisCommissions?: IFraisCommission[];
        fraisTenueCompte?: string;
    }
    class DecompteAgiosTableauModele implements MyWay.UI.ImwTableOptions {
        tableauColonneOptionsInteretFrais: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMontant: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: IDonneesDecompteAgiosTableauModele[];
        selectedItems: any[];
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler, infosDevise?: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise);
    }
}

/**
 * Modele du tableau des echelles interets
 * @module DecompteAgios.Modeles.Tableaux
 * @author S0077482(Thomas Prat)
 */
declare module DecompteAgios.Modeles.Tableaux {
    interface IDonneesEchelleInteretTableauModele {
        dateValeur: Date;
        montant: number;
        solde: number;
        nombreJours: number;
        total: number;
        totalDepassement: number;
        infosDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise;
        listeDetails: ComposantsCommunsConsultationCCE.Modeles.DecompteAgios.IOperation[];
        contexte: ComposantsCommunsConsultationCCE.Modeles.IContexteDecompteAgios;
    }
    class EchelleInteretTableauModele implements MyWay.UI.ImwTableOptions {
        tableauColonneOptionsDateValeur: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMontant: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsSolde: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNombreJours: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsTotal: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsTotalDepassement: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: IDonneesEchelleInteretTableauModele[];
        selectedItems: any[];
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler, infosDevise?: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise);
    }
}
