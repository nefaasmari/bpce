
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
        const edsService: string;
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

declare namespace ContentieuxEditique.Constantes.Commun {
    class EditiqueVille {
        code: string;
        ville: string;
    }
    const LISTE_VILLES: {
        code: string;
        ville: string;
    }[];
}

declare namespace ContentieuxEditique.Constantes.Echeanciers {
    namespace Commun {
        const TYPE_FICHIER_PDF: MyWay.Services.Fichier.TYPE_FICHIER;
        const EXTENSION_LOGO: string;
        const EXTENSION_SIGNATURE: string;
        const PREFIXE_SIGNATURE: string;
        const NOM_FICHER_NON_DECHU_COMPTE_DEBITEUR_LETTRE: string;
        const NOM_FICHER_DECHU_LETTRE: string;
        const CODE_PORTEUR: string;
        const CODE_NATURE_DOC_DECHU: string;
        const CODE_NATURE_DOC_NON_DECHU_COMPTE_DEBITEUR: string;
        const CODE_PORTEUR_DNR: string;
        const CODE_NATURE_DOC_DNR: string;
        const REFERENCE_PORTEUR_DNR: string;
    }
    namespace Metier {
        const DELAIS_RETOUR_COURRIER: number;
        const PRODUIT_MARCHE_PARTICULIER: string;
        const TYPE_PRODUIT_COMPTE: string[];
        const TYPE_PRODUIT_CREDIT: string[];
        const MOT_SEPARATION_VILLE: string;
        const CIVILITE_MONSIEUR: string[];
        const CIVILITE_MADAME: string[];
        const CIVILITE_MADEMOISELLE: string[];
        const CIVILITE_DEFAUT: string;
        const PAYS_A_NE_PAS_AFFICHER: string[];
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
    namespace EDS {
        const TYPE_ORGANISATION_EDS: string;
    }
    namespace ActiveX {
        const ACTIVE_X_PREVISUALISATION: MyWay.Services.Impression.ParametreActiveX;
        const ACTIVE_X_IMPRESSION: MyWay.Services.Impression.ParametreActiveX;
    }
}

declare namespace ContentieuxEditique.Tools {
    class Commun {
        static getEnteteDNR(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): string;
        /**
         * Permet de recuperer le numero de telephone au format 99.99.99.99.99
         * @param numeroTelephone
         */
        static formatNumeroTelephone(numeroTelephone: string): string;
        /**
         * Permet de recuperer le montant au format 99,99€
         * @param value
         */
        static formatMontant(value: number): string;
        /**
         * Permet de recuperer le nom de la ville
         * @param libelleCodePostalVilleCedex de la forme "75633 PARIS CEDEX 13"
         */
        static getLibelleVille(libelleCodePostalVilleCedex: string): string;
        static stringToPascalCase(texte: string): string;
    }
}

declare namespace ContentieuxEditique.Tools {
    class Metier {
        static getCiviliteParDefaut(civilite: string): string;
        static getCiviliteReduit(civilite: string): string;
        static getCiviliteReduitEtNom(ligneDestinataire: string): string;
        static isPaysANePasAfficher(pays: string): boolean;
    }
}

declare namespace ContentieuxEditique.Modeles.EDS {
    interface IEdsGerePar {
        idGerePar: number;
        libelleEDSGestionEntiteTitulaire: string;
    }
    interface IInfosEds {
        edsGerePar: IEdsGerePar;
        libelleLongEtablissement: string;
    }
}

declare module ContentieuxEditique.Modeles.echeancierDechuLettre {
    enum genericLogoEtsLogoEtablissementContent {
        Id = 0,
        Flux = 1,
    }
    interface IecheancierDechuLettre {
        ententeDnr: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreEntenteDnr;
        blocAdresse: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresse[];
        ville: string;
        dateJour1: string;
        blocJpl: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocJpl[];
        numeroContrat: string;
        titreClient: string;
        dateRetourCourrier: string;
        montantDette3: string;
        montantDette: string;
        nomCaisseEpargne: string;
        service: string;
        gestionnaire: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        titreClient1: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreSignatureGestionnaire;
        confirmationAccordEcheancierAconserver: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreConfirmationAccordEcheancierAconserver;
        numeroContrat1: string;
        taaConserver: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissement[];
        confirmationAccordEcheancierAretourner: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreConfirmationAccordEcheancierAretourner;
        gestionnaire2: string;
        genericLogoEts: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericLogoEts[];
        numeroContrat2: string;
        taaRetourner: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissement[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IecheancierDechuLettreEntenteDnr {
        enteteDnr: string;
    }
    interface IecheancierDechuLettreBlocAdresse {
        blocExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExp[];
        blocDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDest[];
    }
    interface IecheancierDechuLettreBlocAdresseBlocExp {
        blocServiceExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExpBlocServiceExp[];
        blocAdresseExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExpBlocAdresseExp[];
        blocNomExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExpBlocExpBlocNomExp[];
        blocCodePostalVilleExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExpBlocCodePostalVilleExp[];
        blocTelExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExpBlocTelExp[];
        blocPrixAppelExp: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExpBlocPrixAppelExp[];
        blocAdresseMailGestionnaire: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire[];
        blocRefDossier: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExpBlocRefDossier[];
    }
    interface IecheancierDechuLettreBlocAdresseBlocExpBlocServiceExp {
        serviceExp: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocExpBlocAdresseExp {
        adresseExp: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocExpBlocCodePostalVilleExp {
        codePostalVilleExp: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocExpBlocExpBlocNomExp {
        nomExp: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocExpBlocTelExp {
        telExp: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocExpBlocPrixAppelExp {
        prixAppelExp: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire {
        adresseMailGestionnaire: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocExpBlocRefDossier {
        refDossier: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocDest {
        blocNomDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDestBlocNomDest[];
        blocEtageAppartDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDestBlocEtageAppartDest[];
        blocBatimentDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDestBlocBatimentDest[];
        blocVoieDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDestBlocVoieDest[];
        blocLieuDitDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDestBlocLieuDitDest[];
        blocCodePostalVilleDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDestBlocCodePostalVilleDest[];
        blocPaysDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDestBlocPaysDest[];
    }
    interface IecheancierDechuLettreBlocAdresseBlocDestBlocNomDest {
        nomDest: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocDestBlocEtageAppartDest {
        etageAppartDest: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocDestBlocBatimentDest {
        batimentDest: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocDestBlocVoieDest {
        voieDest: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocDestBlocLieuDitDest {
        lieuDitDest: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocDestBlocCodePostalVilleDest {
        codePostalVilleDest: string;
    }
    interface IecheancierDechuLettreBlocAdresseBlocDestBlocPaysDest {
        paysDest: string;
    }
    interface IecheancierDechuLettreConfirmationAccordEcheancier {
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
        gestionnaire3: string;
        signatureGestionnaire1: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreSignatureGestionnaire;
        montantDette: string;
    }
    interface IecheancierDechuLettreConfirmationAccordEcheancierAconserver extends IecheancierDechuLettreConfirmationAccordEcheancier {
    }
    interface IecheancierDechuLettreConfirmationAccordEcheancierAretourner extends IecheancierDechuLettreConfirmationAccordEcheancier {
    }
    interface IecheancierDechuLettreBlocJpl {
        urlJpl: string;
        numeroDossier: string;
    }
    interface IecheancierDechuLettreSignatureGestionnaire {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IecheancierDechuLettreBlocCompteDeVersement {
        iban: string;
        bic: string;
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
    interface IgenericLogoEts {
        logoEtablissement: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
    }
    class EcheancierDechuLettre implements IecheancierDechuLettre {
        ententeDnr: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreEntenteDnr;
        blocAdresse: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresse[];
        ville: string;
        dateJour1: string;
        blocJpl: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocJpl[];
        numeroContrat: string;
        titreClient: string;
        dateRetourCourrier: string;
        montantDette3: string;
        montantDette: string;
        nomCaisseEpargne: string;
        service: string;
        gestionnaire: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        titreClient1: string;
        gestionnaire2: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreSignatureGestionnaire;
        confirmationAccordEcheancierAconserver: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreConfirmationAccordEcheancierAconserver;
        numeroContrat1: string;
        taaConserver: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissement[];
        confirmationAccordEcheancierAretourner: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreConfirmationAccordEcheancierAretourner;
        numeroContrat2: string;
        taaRetourner: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissement[];
        genericLogoEts: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericLogoEts[];
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
    interface IEditiqueClient {
        adressePostale: ContentieuxServices.Modeles.Personne.IAdressePostale;
        identifiantEntiteTitulaire: string;
    }
    interface IEditiqueEDS {
        libelleLongEtablissement: string;
        service: string;
        gestionnaire: string;
        libelleEDSGestionEntiteTitulaire: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        libelleTarifTelEDS: string;
        numeroTelephone: string;
        villeCaisseEpargne: string;
        libelleFonctionGestionnaire: string;
        mail: string;
    }
    interface IEcheancierEditique extends ContentieuxServices.Modeles.Echeancier.IEcheancier {
        editiqueDonneesClient: IEditiqueClient;
        editiqueDonneesEds: IEditiqueEDS;
        afficherSignatureGestionnaire: boolean;
        contratDNR: ContentieuxServices.Modeles.Contrat.IContratDNR;
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
        BICCompteVersement: string;
        adresseWebUrl: string;
    }
}

declare module ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre {
    enum genericLogoEtsDateLogoEtablissementContent {
        Id = 0,
        Flux = 1,
    }
    interface IecheanciersNonDechuCompteDebiteurLettre {
        enteteDnr: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreEnteteDnr;
        blocAdresse: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresse[];
        ville: string;
        dateJour1: string;
        blocJpl: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocJpl[];
        contratNumero: string;
        titreClient: string;
        compteSolde: string;
        blocAutorisationDecouvert: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAutorisationDecouvert[];
        blocSansAutorisationDecouvert: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocSansAutorisationDecouvert[];
        contratMarcheParticulier: number;
        titreClient1: string;
        montantAccord: string;
        villeCaisseEpargne: string;
        dateJour: string;
        nomCaisseEpargne: string;
        gestionnaire: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreSignatureGestionnaire;
        numeroContrat: string;
        tableauArmortissement: any[];
        montantDette3: string;
        genericLogoEts: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericLogoEts[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreEnteteDnr {
        enteteDnr: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresse {
        blocExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExp[];
        blocDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDest[];
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExp {
        blocServiceExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocServiceExp[];
        blocAdresseExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocAdresseExp[];
        blocCodePostalVilleExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocCodePostalVilleExp[];
        blocNomExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocNomExp[];
        blocTelExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocTelExp[];
        blocPrixAppelExp: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocPrixAppelExp[];
        blocAdresseMailGestionnaire: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire[];
        blocRefDossier: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocRefDossier[];
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocServiceExp {
        serviceExp: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocAdresseExp {
        adresseExp: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocCodePostalVilleExp {
        codePostalVilleExp: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocNomExp {
        nomExp: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocTelExp {
        telExp: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocPrixAppelExp {
        prixAppelExp: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire {
        adresseMailGestionnaire: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExpBlocRefDossier {
        refDossier: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDest {
        blocNomDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocNomDest[];
        blocEtageAppartDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocEtageAppartDest[];
        blocBatimentDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocBatimentDest[];
        blocVoieDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocVoieDest[];
        blocLieuDitDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocLieuDitDest[];
        blocCodePostalVilleDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocCodePostalVilleDest[];
        blocPaysDest: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocPaysDest[];
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocNomDest {
        nomDest: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocEtageAppartDest {
        etageAppartDest: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocBatimentDest {
        batimentDest: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocVoieDest {
        voieDest: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocLieuDitDest {
        lieuDitDest: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocCodePostalVilleDest {
        codePostalVilleDest: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDestBlocPaysDest {
        paysDest: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocAutorisationDecouvert {
        compteMontantDecouvert: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocSansAutorisationDecouvert {
        blocSansAutorisationDecouvert: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreSignatureGestionnaire {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreBlocJpl {
        urlJpl: string;
        numeroDossier: string;
    }
    interface IgenericLogoEts {
        logoEtablissement: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
    }
    interface IecheanciersNonDechuCompteDebiteurLettreTableauArmortissementEcheance {
        rang: string;
        dateEcheance: string;
        montantEcheance: string;
        soldeDebiteurAttendu: string;
    }
    interface IecheanciersNonDechuCompteDebiteurLettreTableauArmortissement {
        echeance: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreTableauArmortissementEcheance[];
    }
    class EcheanciersNonDechuCompteDebiteurLettre implements IecheanciersNonDechuCompteDebiteurLettre {
        enteteDnr: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreEnteteDnr;
        blocAdresse: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresse[];
        ville: string;
        dateJour1: string;
        blocJpl: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocJpl[];
        contratNumero: string;
        titreClient: string;
        compteSolde: string;
        blocAutorisationDecouvert: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAutorisationDecouvert[];
        blocSansAutorisationDecouvert: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocSansAutorisationDecouvert[];
        contratMarcheParticulier: number;
        titreClient1: string;
        montantAccord: string;
        villeCaisseEpargne: string;
        dateJour: string;
        nomCaisseEpargne: string;
        gestionnaire: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreSignatureGestionnaire;
        numeroContrat: string;
        tableauArmortissement: any[];
        montantDette3: string;
        genericLogoEts: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IgenericLogoEts[];
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

declare namespace ContentieuxEditique.Services.EDS {
    class EDSService {
        private $q;
        private edsService;
        private entiteTitulaireService;
        static $inject: string[];
        constructor($q: ng.IQService, edsService: ContentieuxServices.Services.EDS.IEDSService, entiteTitulaireService: ContentieuxServices.Services.EntiteTitulaire.IEntiteTitulaireService);
        /**
         * Retourne les infos du siège
         * @param echeancier
         * @param identifiantSite
         */
        getInfosSiege(codeEtablissement: string, identifiantSite: number): ng.IPromise<ContentieuxServices.Modeles.EDS.IInfoSiege>;
        /**
         * Permet de recuperer le numero eds du gerePar du client bancaire donné
         * @param codeEtablissement
         * @param identifiantEntiteTitulaireClientBancaire
         */
        getInfosGerePar(codeEtablissement: string, identifiantEntiteTitulaireClientBancaire: number): ng.IPromise<ContentieuxEditique.Modeles.EDS.IEdsGerePar>;
        /**
         * Permet de recuperer les infos eds du gerePar
         * @param codeEtablissement
         * @param idEds
         */
        getInfosEDS(codeEtablissement: string, idEds: number): ng.IPromise<ContentieuxServices.Modeles.EDS.IEDSInterne>;
        /**
         * Récupération des infos EDS
         * @param echeancierSimule
         */
        getInfosGereParEcheancierEditique(codeEtablissement: string, identifiantEntiteTitulaire: string): ng.IPromise<ContentieuxServices.Modeles.EDS.IEDSInterne>;
        /**
         * Récupération du libelle long de l'établissement
         * @param codeEtablissement
         */
        getLibelleLongEtablissement(codeEtablissement: string): ng.IPromise<string>;
        getEditiqueEDS(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ng.IPromise<[ContentieuxServices.Modeles.EDS.IEDSInterne, ContentieuxEditique.Modeles.EDS.IInfosEds]>;
        getVilleEtablissement(codeEtablissement: string): string;
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
        private edsService;
        static $inject: string[];
        constructor(echeanciersNonDechuCompteDebiteurLettreService: EcheanciersNonDechuCompteDebiteurLettreService, echeancierDechuLettreService: EcheancierDechuLettreService, edsService: EDS.EDSService);
        genererNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreGenererParams]>;
        genererArchiverNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverGenererParams]>;
        genererImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreImpressionParams]>;
        archiverImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverImpressionParams]>;
        genererDechuLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreGenererParams]>;
        genererArchiverDechuLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverGenererParams]>;
        genererImprimerDechuLettreTA(echeancier: Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreImpressionParams]>;
        archiverImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverImpressionParams]>;
        setEditiqueDonneesEds(infosEds: ContentieuxServices.Modeles.EDS.IEDSInterne, libelleLongEtablissement: string, libelleEDSGestionEntiteTitulaire: string): ContentieuxEditique.Modeles.IEditiqueEDS;
    }
}

declare namespace ContentieuxEditique.Services.Echeancier {
    class EcheancierDechuLettreService {
        private gedService;
        static $inject: string[];
        constructor(gedService: GED.GEDService);
        calculDateRetourCourrier(): string;
        /**
         * La construction du courrier
         * @param echeancier
         */
        private mappeCourrier(echeancier, paramComptableInfos, authentificationInfos, isVisualisation);
        /**
         * Generation du TA
         * @param echeancier
         */
        genererTableauAmortissement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauArmortissement[];
        genererBlocAdresse(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocAdresse: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresse): ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresse;
        genererBlocExpediteur(echeancier: Modeles.IEcheancierEditique, blocExpediteur: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExp): ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocExp;
        genererBlocDestinataire(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocDestinataire: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDest): ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDest;
        getAdresseClient(blocDest: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocAdresseBlocDest): string;
        getLibelleGerePar(dataEditiqueDonneesEds: Modeles.IEditiqueEDS): string;
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
        private edsService;
        static $inject: string[];
        constructor(gedService: GED.GEDService, edsService: EDS.EDSService);
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
         * Création du bloc de decouvert autorisé
         * @param echeancier
         */
        initBlocSansDecouvertAutorise(): ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocSansAutorisationDecouvert;
        /**
         * Generation du TA
         * @param echeancier
         */
        genererTableauAmortissement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreTableauArmortissement[];
        /**
         * La construction du courrier
         * @param echeancier
         */
        private mappeCourrier(echeancier, paramComptableInfos, authentificationInfos, isVisualisation);
        genererBlocAdresse(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocAdresse: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresse): ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresse;
        genererBlocExpediteur(echeancier: Modeles.IEcheancierEditique, blocExpediteur: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExp): ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocExp;
        genererBlocDestinataire(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocDestinataire: ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDest): ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.IecheanciersNonDechuCompteDebiteurLettreBlocAdresseBlocDest;
        getLibelleGerePar(dataEditiqueDonneesEds: Modeles.IEditiqueEDS): string;
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
        genererNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreGenererParams]>;
        genererArchiverNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverGenererParams]>;
        genererImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreImpressionParams]>;
        archiverImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverImpressionParams]>;
        genererDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreGenererParams]>;
        genererArchiverDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverGenererParams]>;
        genererImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreImpressionParams]>;
        archiverImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverImpressionParams]>;
    }
}
