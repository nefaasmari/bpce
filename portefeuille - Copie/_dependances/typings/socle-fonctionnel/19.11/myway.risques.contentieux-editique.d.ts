
declare namespace ContentieuxEditique.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
        const serviceAgent: string;
        const modalService: string;
    }
    namespace Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
    }
    /**
     * Les namespace "non GCEDOC"
     */
    namespace Services {
        const errorService: string;
        const echeancierEditiqueService: string;
        const gedService: string;
    }
    /**
     * Les namespace "GCEDOC"
     */
    namespace CourrierServices {
        const echeanciersNonDechuCompteDebiteurLettre: string;
        const echeancierDechuLettre: string;
    }
}

declare namespace ContentieuxEditique {
    var app: any;
}

declare namespace ContentieuxEditique.Constantes.Parametres {
    namespace Echeancier {
        const TYPE_FICHIER_PDF: MyWay.Services.Fichier.TYPE_FICHIER;
        const NOM_FICHER_NON_DECHU_COMPTE_DEBITEUR_LETTRE: string;
        const NOM_FICHER_DECHU_LETTRE: string;
        const EXTENSION_LOGO: string;
        const DELAIS_RETOUR_COURRIER: number;
        const PRODUIT_MARCHE_PARTICULIER: string;
        const TYPE_PRODUIT_COMPTE: string[];
    }
}

declare namespace ContentieuxEditique.Constantes.Parametres {
    namespace Ged {
        const COMPOSANT_APPLICATIF: string;
        const TYPE_STOCKAGE_ARCHIVAGE: string;
        const TYPE_MODE_ACQUISITION_INJECTION_TEMPS_REEL: string;
        const TYPE_ORGINE_ACQUISITION_EDITIQUE: string;
        const TYPE_SIGNATURE: string;
    }
    namespace ActiveX {
        const ACTIVE_X_PREVISUALISATION: MyWay.Services.Impression.ParametreActiveX;
        const ACTIVE_X_IMPRESSION: MyWay.Services.Impression.ParametreActiveX;
    }
}

declare module ContentieuxEditique.Modeles.echeancierDechuLettre {
    function createArchiverParams(): EcheancierDechuLettreArchiverParams;
    function createGenererParams(): EcheancierDechuLettreGenererParams;
    function createArchiverGenererParams(): EcheancierDechuLettreArchiverGenererParams;
    function createImpressionParams(): EcheancierDechuLettreImpressionParams;
    function createArchiverImpressionParams(): EcheancierDechuLettreArchiverImpressionParams;
    function createImpressionLotParams(): EcheancierDechuLettreImpressionLotParams;
    function createDocument(): EcheancierDechuLettre;
}

declare module ContentieuxEditique.Modeles.echeancierDechuLettre {
    interface IecheancierDechuLettre {
        genericAdresseExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericAdresseExp[];
        genericAdresseDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericAdresseDest[];
        numeroContrat: string;
        titreClient: string;
        dateRetourCourrier: string;
        montantDette: string;
        nomCaisseEpargne: string;
        service: string;
        gestionnaire: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        titreClient1: string;
        nomCaisseEpargne1: string;
        gestionnaire1: string;
        nomClient: string;
        adresseClient: string;
        montantDette1: string;
        numeroContrat1: string;
        montantDette2: string;
        blocCompteDeVersement: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocCompteDeVersement[];
        villeCaisseEpargne: string;
        dateJour: string;
        nomCaisseEpargne2: string;
        gestionnaire2: string;
        montantDette3: string;
        tableauArmortissement: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissement[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IgenericAdresseExp {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    interface IgenericAdresseDest {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    interface IecheancierDechuLettreBlocCompteDeVersement {
        iban: string;
    }
    interface IecheancierDechuLettreTableauArmortissement {
        echeance: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissementEcheance[];
        totalInteret: string;
    }
    interface IecheancierDechuLettreTableauArmortissementEcheance {
        rang: string;
        dateEcheance: string;
        montantEcheance: string;
        interetEcheance: string;
        restantDuEcheance: string;
    }
    interface IgenericPiedpageets {
    }
    class EcheancierDechuLettre implements IecheancierDechuLettre {
        genericAdresseExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericAdresseExp[];
        genericAdresseDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericAdresseDest[];
        numeroContrat: string;
        titreClient: string;
        dateRetourCourrier: string;
        montantDette: string;
        nomCaisseEpargne: string;
        service: string;
        gestionnaire: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        titreClient1: string;
        nomCaisseEpargne1: string;
        gestionnaire1: string;
        nomClient: string;
        adresseClient: string;
        montantDette1: string;
        numeroContrat1: string;
        montantDette2: string;
        blocCompteDeVersement: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocCompteDeVersement[];
        villeCaisseEpargne: string;
        dateJour: string;
        nomCaisseEpargne2: string;
        gestionnaire2: string;
        montantDette3: string;
        tableauArmortissement: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissement[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class EcheancierDechuLettreArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuLettreGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuLettreArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuLettreImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheancierDechuLettreArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheancierDechuLettreImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare namespace ContentieuxEditique.Modeles {
    interface IEcheancierEditique extends ContentieuxServices.Modeles.Echeancier.IEcheancier {
        titreClient: string;
        nomClient: string;
        adresseClient: string;
        iban: string;
        soldeReelCompte: number;
        montantDette: number;
        decouvertAutoriseCompte: number;
        numeroCompte: string;
        numeroCredit: string;
        IBANCompteVersement: string;
        nomCaisseEpargne: string;
        service: string;
        gestionnaire: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        villeCaisseEpargne: string;
        libelleTarifTelEDS: string;
        numeroTelephone: string;
    }
}

declare module ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre {
    function createArchiverParams(): EcheanciersNonDechuCompteDebiteurLettreArchiverParams;
    function createGenererParams(): EcheanciersNonDechuCompteDebiteurLettreGenererParams;
    function createArchiverGenererParams(): EcheanciersNonDechuCompteDebiteurLettreArchiverGenererParams;
    function createImpressionParams(): EcheanciersNonDechuCompteDebiteurLettreImpressionParams;
    function createArchiverImpressionParams(): EcheanciersNonDechuCompteDebiteurLettreArchiverImpressionParams;
    function createImpressionLotParams(): EcheanciersNonDechuCompteDebiteurLettreImpressionLotParams;
    function createDocument(): EcheanciersNonDechuCompteDebiteurLettre;
}

declare module ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre {
    interface IecheanciersNonDechuCompteDebiteurLettre {
        genericAdresseExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericAdresseExp[];
        genericAdresseDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericAdresseDest[];
        contratNumero: string;
        compteSolde: string;
        blocAutorisationDecouvert: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAutorisationDecouvert[];
        contratMarcheParticulier: number;
        villeCaisseEpargne: string;
        dateJour: string;
        nomCaisseEpargne2: string;
        gestionnaire2: string;
        tableauArmortissement: any[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IgenericAdresseExp {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    interface IgenericAdresseDest {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAutorisationDecouvert {
        compteMontantDecouvert: string;
    }
    interface IgenericPiedpageets {
    }
    interface IecheanciersNonDechuCompteDebiteurLettreTableauArmortissement {
        echeance: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreTableauArmortissementEcheance[];
    }
    interface IecheanciersNonDechuCompteDebiteurLettreTableauArmortissementEcheance {
        rang: string;
        dateEcheance: string;
        montantEcheance: string;
        soldeDebiteurAttendu: string;
    }
    class EcheanciersNonDechuCompteDebiteurLettre implements IecheanciersNonDechuCompteDebiteurLettre {
        genericAdresseExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericAdresseExp[];
        genericAdresseDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericAdresseDest[];
        contratNumero: string;
        compteSolde: string;
        blocAutorisationDecouvert: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAutorisationDecouvert[];
        contratMarcheParticulier: number;
        villeCaisseEpargne: string;
        dateJour: string;
        nomCaisseEpargne2: string;
        gestionnaire2: string;
        tableauArmortissement: any[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class EcheanciersNonDechuCompteDebiteurLettreArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheanciersNonDechuCompteDebiteurLettreGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheanciersNonDechuCompteDebiteurLettreArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheanciersNonDechuCompteDebiteurLettreImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheanciersNonDechuCompteDebiteurLettreArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheanciersNonDechuCompteDebiteurLettreImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare namespace ContentieuxEditique.Services.GED {
    class GEDService {
        static $inject: any[];
        constructor();
        getProprietesDoc(echeancier: ContentieuxServices.Modeles.Echeancier.IEcheancier): MyWay.Services.Impression.ProprietesDoc;
    }
}

declare namespace ContentieuxEditique.Services.Echeancier {
    class EcheancierEditiqueService implements IEcheancierEditiqueService {
        private echeanciersNonDechuCompteDebiteurLettreService;
        private echeancierDechuLettreService;
        static $inject: string[];
        constructor(echeanciersNonDechuCompteDebiteurLettreService: EcheanciersNonDechuCompteDebiteurLettreService, echeancierDechuLettreService: EcheancierDechuLettreService);
        genererNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreGenererParams];
        genererArchiverNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverGenererParams];
        genererImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreImpressionParams];
        archiverImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverImpressionParams];
        genererDechuLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreGenererParams];
        genererArchiverDechuLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverGenererParams];
        genererImprimerDechuLettreTA(echeancier: Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreImpressionParams];
        archiverImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverImpressionParams];
    }
}

declare namespace ContentieuxEditique.Services.Echeancier {
    class EcheancierDechuLettreService {
        private gedService;
        static $inject: string[];
        constructor(gedService: GED.GEDService);
        calculDateRetourCourrier(): string;
        formatMontant(montant: number): string;
        /**
         * La construction du courrier
         * @param echeancier
         */
        private mappeCourrier(echeancier, paramComptableInfos, authentificationInfos);
        /**
         * Generation du TA
         * @param echeancier
         */
        genererTableauAmortissement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissement[];
        private createGenererParams();
        genererDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreGenererParams];
        private createArchiverGenererParams(echeancier);
        genererArchiverDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverGenererParams];
        private createImpressionParams(isPrevisualisation);
        genererImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreImpressionParams];
        private createArchiverImpressionParams(echeancier);
        archiverImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverImpressionParams];
    }
}

declare namespace ContentieuxEditique.Services.Echeancier {
    class EcheanciersNonDechuCompteDebiteurLettreService {
        private gedService;
        static $inject: string[];
        constructor(gedService: GED.GEDService);
        /**
         * Construction de l'entête du courrier
         * @param numrefdoc
         * @param codebarre
         * @param refacte
         */
        /**
         * Création du bloc de decouvert autorisé
         * @param echeancier
         */
        initBlocDecouvertAutorise(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAutorisationDecouvert;
        /**
         * Generation du TA
         * @param echeancier
         */
        genererTableauAmortissement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreTableauArmortissement[];
        /**
         * Génération du bloc adresse du destinataire
         */
        genererBlocAdresseDestinataire(): ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericAdresseDest;
        /**
         * La construction du courrier
         * @param echeancier
         */
        private mappeCourrier(echeancier, paramComptableInfos, authentificationInfos);
        private createGenererParams();
        genererNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreGenererParams];
        private createArchiverGenererParams(echeancier);
        genererArchiverNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverGenererParams];
        private createImpressionParams(isPrevisualisation);
        genererImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreImpressionParams];
        private createArchiverImpressionParams(echeancier);
        archiverImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverImpressionParams];
    }
}

declare namespace ContentieuxEditique.Services.Echeancier {
    interface IEcheancierEditiqueService {
        genererNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreGenererParams];
        genererArchiverNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverGenererParams];
        genererImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreImpressionParams];
        archiverImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverImpressionParams];
        genererDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreGenererParams];
        genererArchiverDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverGenererParams];
        genererImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreImpressionParams];
        archiverImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverImpressionParams];
    }
}
