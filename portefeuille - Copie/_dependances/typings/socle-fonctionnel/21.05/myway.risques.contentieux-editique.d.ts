
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
        const echeancierNonDechuCreditLettre: string;
        const echeancierDechuLettre: string;
        const echeancierDechuProceduresCollectivesLettre: string;
        const echeancierDechuSurendettementLettre: string;
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
        const NOM_FICHER_NON_DECHU_CREDIT_LETTRE: string;
        const NOM_FICHER_DECHU_LETTRE: string;
        const NOM_FICHER_DECHU_LETTRE_PROCEDURES_COLLECTIVES: string;
        const NOM_FICHER_DECHU_LETTRE_SURENDETTEMENT: string;
        const NOM_MODELE_NON_DECHU_COMPTE_DEBITEUR_LETTRE: string;
        const NOM_MODELE_NON_DECHU_CREDIT_LETTRE: string;
        const NOM_MODELE_DECHU_LETTRE: string;
        const NOM_MODELE_DECHU_LETTRE_PROCEDURES_COLLECTIVES: string;
        const NOM_MODELE_DECHU_LETTRE_SURENDETTEMENT: string;
        const CODE_PORTEUR_CONTRAT: string;
        const CODE_PORTEUR_ENTITE_TITULAIRE: string;
        const CODE_NATURE_DOC_DECHU: string;
        const CODE_NATURE_DOC_DECHU_PROCEDURES_COLLECTIVES: string;
        const CODE_NATURE_DOC_DECHU_SURENDETTEMENT: string;
        const CODE_NATURE_DOC_NON_DECHU_COMPTE_DEBITEUR: string;
        const CODE_NATURE_DOC_NON_DECHU_CREDIT: string;
        const CODE_PORTEUR_DNR: string;
        const CODE_NATURE_DOC_DNR: string;
        const REFERENCE_PORTEUR_DNR: string;
        const NB_CARACTERES_ID_ENTITE_TITULAIRE: number;
    }
    namespace Metier {
        const DELAIS_RETOUR_COURRIER: number;
        const PRODUIT_MARCHE_PARTICULIER: string;
        const TYPE_PRODUIT_COMPTE: string[];
        const TYPE_PRODUIT_CREDIT: string[];
        const MOT_SEPARATION_VILLE: string;
        const CIVILITE_MONSIEUR: string[];
        const CIVILITE_MADAME: string[];
        const CIVILITE_DEFAUT: string;
        const PAYS_A_NE_PAS_AFFICHER: string[];
        const DENOMINATION_CLIENT_MAJ: string;
        const DENOMINATION_CLIENT: string;
        const DENOMINATION_CAUTION_MAJ: string;
        const DENOMINATION_CAUTION: string;
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
        static getEnteteDNR(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, codePorteur: string): string;
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
        /**
         * Cette méthode permet d'obtenir le nom de la durée en fonction de la périodicité choisie
         * @param periodicite
         * @param duree
         */
        static periodiciteVersNomDuree(periodicite: string, duree: number): string;
        /**
         * Cette methode permet d'obtenir le nombre de periode annuelle en fonction de la périodicité
         * @param periode
         */
        static getNombreEcheanceParPeriode(periode: string): number;
        /**
         * Recupere une date au formzt DD-MM-YYYY
         * @param date
         */
        static dateToDDMMYYYY(date: Date): string;
        private static getZeroNonSignificatif(numero, taille);
    }
}

declare namespace ContentieuxEditique.Tools {
    class Metier {
        static getCiviliteParDefaut(civilite: string): string;
        static getCiviliteReduit(civilite: string): string;
        static getCiviliteReduitEtNom(ligneDestinataire: string, estPro: boolean): string;
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

declare module ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre {
    enum EcheancierDechuProceduresCollectivesLettreGenericLogoEtsLogoEtablissementContent {
        Id = 0,
        Flux = 1,
    }
    interface IEcheancierDechuProceduresCollectivesLettre {
        ententeDnr: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreEntenteDnr;
        ville: string;
        dateJour1: string;
        blocAdresse: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresse[];
        blocJpl: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocJpl[];
        numeroContrat: string;
        blocLibelleEt: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocLibelleEt[];
        titreClient: string;
        dateJugement: string;
        blocCompteDeVersement: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IecheancierDechuLettreProceduresCollectivesBlocCompteDeVersement[];
        nomTribunal: string;
        titreClient1: string;
        gestionnaire2: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreSignatureGestionnaire;
        numeroContrat2: string;
        tableauPalier: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreTableauPalier[];
        tableauAmortissement: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreTableauAmortissement[];
        genericLogoEts: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IgenericLogoEts[];
        genericPiedpageets: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreEntenteDnr {
        enteteDnr: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresse {
        blocExp: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExp[];
        blocDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDest[];
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExp {
        blocServiceExp: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocServiceExp[];
        blocAdresseExp: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocAdresseExp[];
        blocCodePostalVilleExp: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocCodePostalVilleExp[];
        blocNomExp: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocNomExp[];
        blocTelExp: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocTelExp[];
        blocPrixAppelExp: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocPrixAppelExp[];
        blocAdresseMailGestionnaire: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire[];
        blocRefDossier: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocRefDossier[];
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocServiceExp {
        serviceExp: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocAdresseExp {
        adresseExp: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocCodePostalVilleExp {
        codePostalVilleExp: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocNomExp {
        nomExp: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocTelExp {
        telExp: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocPrixAppelExp {
        prixAppelExp: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire {
        adresseMailGestionnaire: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExpBlocRefDossier {
        refDossier: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDest {
        blocNomDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocNomDest[];
        blocEtageAppartDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocEtageAppartDest[];
        blocBatimentDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocBatimentDest[];
        blocVoieDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocVoieDest[];
        blocLieuDitDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocLieuDitDest[];
        blocCodePostalVilleDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocCodePostalVilleDest[];
        blocPaysDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocPaysDest[];
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocNomDest {
        nomDest: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocEtageAppartDest {
        etageAppartDest: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocBatimentDest {
        batimentDest: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocVoieDest {
        voieDest: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocLieuDitDest {
        lieuDitDest: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocCodePostalVilleDest {
        codePostalVilleDest: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDestBlocPaysDest {
        paysDest: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocJpl {
        urlJpl: string;
        numeroDossier: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreBlocLibelleEt {
        libelleEntiteTitulaireDossier: string;
    }
    interface IecheancierDechuLettreProceduresCollectivesBlocCompteDeVersement {
        bic: string;
        iban: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreSignatureGestionnaire {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreTableauPalier {
        palier: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreTableauPalierPalier[];
    }
    interface IEcheancierDechuProceduresCollectivesLettreTableauPalierPalier {
        numeroPalier: string;
        nombreEcheance: string;
        periodicite: string;
        montantEcheance: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreTableauAmortissement {
        echeance: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreTableauAmortissementEcheance[];
        totalInteret: string;
    }
    interface IEcheancierDechuProceduresCollectivesLettreTableauAmortissementEcheance {
        rang: string;
        dateEcheance: string;
        montantEcheance: string;
        interetEcheance: string;
        restantDuEcheance: string;
    }
    interface IgenericLogoEts {
        logoEtablissement: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
    }
    class EcheancierDechuProceduresCollectivesLettre implements IEcheancierDechuProceduresCollectivesLettre {
        ententeDnr: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreEntenteDnr;
        ville: string;
        dateJour1: string;
        blocAdresse: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresse[];
        blocJpl: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocJpl[];
        numeroContrat: string;
        blocLibelleEt: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocLibelleEt[];
        titreClient: string;
        dateJugement: string;
        blocCompteDeVersement: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IecheancierDechuLettreProceduresCollectivesBlocCompteDeVersement[];
        nomTribunal: string;
        titreClient1: string;
        gestionnaire2: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreSignatureGestionnaire;
        numeroContrat2: string;
        tableauPalier: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreTableauPalier[];
        tableauAmortissement: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreTableauAmortissement[];
        genericLogoEts: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IgenericLogoEts[];
        genericPiedpageets: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class EcheancierDechuProceduresCollectivesLettreArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuProceduresCollectivesLettreGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuProceduresCollectivesLettreArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuProceduresCollectivesLettreImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheancierDechuProceduresCollectivesLettreArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheancierDechuProceduresCollectivesLettreImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre {
    enum echeancierDechuSurendettementLettreGenericLogoEtsLogoEtablissementContent {
        Id = 0,
        Flux = 1,
    }
    interface IecheancierDechuSurendettementLettre {
        ententeDnr: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreEntenteDnr;
        ville: string;
        dateJour1: string;
        blocAdresse: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresse[];
        blocJpl: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocJpl[];
        numeroContrat: string;
        blocLibelleEt: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocLibelleEt[];
        titreClient: string;
        blocCompteDeVersement: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuLettreSurendettementBlocCompteDeVersement[];
        titreClient1: string;
        gestionnaire2: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreSignatureGestionnaire;
        numeroContrat2: string;
        tableauPalier: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreTableauPalier[];
        tableauAmortissement: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreTableauAmortissement[];
        genericLogoEts: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IgenericLogoEts[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IecheancierDechuSurendettementLettreEntenteDnr {
        enteteDnr: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresse {
        blocExp: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExp[];
        blocDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDest[];
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExp {
        blocServiceExp: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocServiceExp[];
        blocAdresseExp: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocAdresseExp[];
        blocCodePostalVilleExp: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocCodePostalVilleExp[];
        blocNomExp: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocNomExp[];
        blocTelExp: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocTelExp[];
        blocPrixAppelExp: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocPrixAppelExp[];
        blocAdresseMailGestionnaire: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire[];
        blocRefDossier: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocRefDossier[];
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocServiceExp {
        serviceExp: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocAdresseExp {
        adresseExp: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocCodePostalVilleExp {
        codePostalVilleExp: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocNomExp {
        nomExp: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocTelExp {
        telExp: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocPrixAppelExp {
        prixAppelExp: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire {
        adresseMailGestionnaire: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocExpBlocRefDossier {
        refDossier: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocDest {
        blocNomDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocNomDest[];
        blocEtageAppartDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocEtageAppartDest[];
        blocBatimentDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocBatimentDest[];
        blocVoieDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocVoieDest[];
        blocLieuDitDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocLieuDitDest[];
        blocCodePostalVilleDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocCodePostalVilleDest[];
        blocPaysDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocPaysDest[];
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocNomDest {
        nomDest: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocEtageAppartDest {
        etageAppartDest: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocBatimentDest {
        batimentDest: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocVoieDest {
        voieDest: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocLieuDitDest {
        lieuDitDest: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocCodePostalVilleDest {
        codePostalVilleDest: string;
    }
    interface IecheancierDechuSurendettementLettreBlocAdresseBlocDestBlocPaysDest {
        paysDest: string;
    }
    interface IecheancierDechuSurendettementLettreBlocJpl {
        urlJpl: string;
        numeroDossier: string;
    }
    interface IecheancierDechuSurendettementLettreBlocLibelleEt {
        libelleEntiteTitulaireDossier: string;
    }
    interface IecheancierDechuLettreSurendettementBlocCompteDeVersement {
        bic: string;
        iban: string;
    }
    interface IecheancierDechuSurendettementLettreSignatureGestionnaire {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IecheancierDechuSurendettementLettreTableauPalier {
        palier: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreTableauPalierPalier[];
    }
    interface IecheancierDechuSurendettementLettreTableauPalierPalier {
        numeroPalier: string;
        nombreEcheance: string;
        periodicite: string;
        montantEcheance: string;
    }
    interface IecheancierDechuSurendettementLettreTableauAmortissement {
        echeance: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreTableauAmortissementEcheance[];
        totalInteret: string;
    }
    interface IecheancierDechuSurendettementLettreTableauAmortissementEcheance {
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
    class EcheancierDechuSurendettementLettre implements IecheancierDechuSurendettementLettre {
        ententeDnr: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreEntenteDnr;
        ville: string;
        dateJour1: string;
        blocAdresse: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresse[];
        blocJpl: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocJpl[];
        numeroContrat: string;
        blocLibelleEt: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocLibelleEt[];
        blocCompteDeVersement: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuLettreSurendettementBlocCompteDeVersement[];
        titreClient: string;
        titreClient1: string;
        gestionnaire2: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreSignatureGestionnaire;
        numeroContrat2: string;
        tableauPalier: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreTableauPalier[];
        tableauAmortissement: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreTableauAmortissement[];
        genericLogoEts: ContentieuxEditique.Modeles.echeancierDechuLettre.IgenericLogoEts[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class EcheancierDechuSurendettementLettreArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuSurendettementLettreGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuSurendettementLettreArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierDechuSurendettementLettreImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheancierDechuSurendettementLettreArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheancierDechuSurendettementLettreImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
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
        blocLibelleEt: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocLibelleEt[];
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
        tableauPalierAconserver: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauPalier[];
        tableauPalierAretourner: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauPalier[];
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
        denomination: string;
        denomination1: string;
        denomination2: string;
        denomination3: string;
        denomination4: string;
    }
    interface IecheancierDechuLettreConfirmationAccordEcheancierAconserver extends IecheancierDechuLettreConfirmationAccordEcheancier {
    }
    interface IecheancierDechuLettreConfirmationAccordEcheancierAretourner extends IecheancierDechuLettreConfirmationAccordEcheancier {
    }
    interface IecheancierDechuLettreBlocJpl {
        urlJpl: string;
        numeroDossier: string;
    }
    interface IecheancierDechuLettreBlocLibelleEt {
        libelleEntiteTitulaireDossier: string;
    }
    interface IecheancierDechuLettreSignatureGestionnaire {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IecheancierDechuLettreBlocCompteDeVersement {
        iban: string;
        bic: string;
    }
    interface IecheancierDechuLettreTableauPalier {
        palier: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauPalierPalier[];
    }
    interface IecheancierDechuLettreTableauPalierPalier {
        numeroPalier: string;
        nombreEcheance: string;
        periodicite: string;
        montantEcheance: string;
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
        blocLibelleEt: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreBlocLibelleEt[];
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
        tableauPalierAconserver: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauPalier[];
        tableauPalierAretourner: ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauPalier[];
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
        libelleEntiteTitulaire: string;
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
    interface IEditiqueProceduresCollectivesExpert {
        dateJugement: Date;
        tribunal: string;
    }
    interface IEcheancierEditique extends ContentieuxServices.Modeles.Echeancier.IEcheancier {
        editiqueDonneesClient: IEditiqueClient;
        editiqueDonneesEds: IEditiqueEDS;
        afficherSignatureGestionnaire: boolean;
        afficherBlocDecouvertAutorise: boolean;
        contratDNR: ContentieuxServices.Modeles.Contrat.IContratDNR;
        editiqueProceduresCollectivesExpert: IEditiqueProceduresCollectivesExpert;
        typeCourrier: ContentieuxServices.Constantes.Echeancier.TypeCourrier;
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
        ocf: number;
        montantAccord: string;
        montantAccord1: string;
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
        ocf: number;
        montantAccord: string;
        montantAccord1: string;
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

declare module ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre {
    enum genericLogoEtsLogoEtablissementContent {
        Id = 0,
        Flux = 1,
    }
    interface IecheancierNonDechuCreditLettre {
        ententeDnr: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreEntenteDnr;
        blocAdresse: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresse[];
        ville: string;
        dateJour1: string;
        blocJpl: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocJpl[];
        numeroContrat: string;
        numeroContrat5: string;
        blocLibelleEt: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocLibelleEt[];
        titreClient: string;
        dateRetourCourrier: string;
        montantDette3: string;
        montantDette4: string;
        montantDette: string;
        nomCaisseEpargne: string;
        service: string;
        gestionnaire: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        titreClient1: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreSignatureGestionnaire;
        confirmationAccordEcheancierAconserver: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreConfirmationAccordEcheancierAconserver;
        numeroContrat1: string;
        numeroContrat6: string;
        numeroContrat7: string;
        taaConserver: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreTableauArmortissement[];
        confirmationAccordEcheancierAretourner: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreConfirmationAccordEcheancierAretourner;
        gestionnaire2: string;
        genericLogoEts: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IgenericLogoEts[];
        numeroContrat2: string;
        taaRetourner: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreTableauArmortissement[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IecheancierNonDechuCreditLettreEntenteDnr {
        enteteDnr: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresse {
        blocExp: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExp[];
        blocDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDest[];
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExp {
        blocServiceExp: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocServiceExp[];
        blocAdresseExp: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocAdresseExp[];
        blocNomExp: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocExpBlocNomExp[];
        blocCodePostalVilleExp: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocCodePostalVilleExp[];
        blocTelExp: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocTelExp[];
        blocPrixAppelExp: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocPrixAppelExp[];
        blocAdresseMailGestionnaire: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire[];
        blocRefDossier: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocRefDossier[];
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocServiceExp {
        serviceExp: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocAdresseExp {
        adresseExp: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocCodePostalVilleExp {
        codePostalVilleExp: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocExpBlocNomExp {
        nomExp: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocTelExp {
        telExp: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocPrixAppelExp {
        prixAppelExp: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocAdresseMailGestionnaire {
        adresseMailGestionnaire: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocExpBlocRefDossier {
        refDossier: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocDest {
        blocNomDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocNomDest[];
        blocEtageAppartDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocEtageAppartDest[];
        blocBatimentDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocBatimentDest[];
        blocVoieDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocVoieDest[];
        blocLieuDitDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocLieuDitDest[];
        blocCodePostalVilleDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocCodePostalVilleDest[];
        blocPaysDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocPaysDest[];
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocNomDest {
        nomDest: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocEtageAppartDest {
        etageAppartDest: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocBatimentDest {
        batimentDest: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocVoieDest {
        voieDest: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocLieuDitDest {
        lieuDitDest: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocCodePostalVilleDest {
        codePostalVilleDest: string;
    }
    interface IecheancierNonDechuCreditLettreBlocAdresseBlocDestBlocPaysDest {
        paysDest: string;
    }
    interface IecheancierNonDechuCreditLettreConfirmationAccordEcheancier {
        nomCaisseEpargne1: string;
        gestionnaire1: string;
        nomClient: string;
        adresseClient: string;
        montantDette1: string;
        numeroContrat1: string;
        numeroContrat6: string;
        numeroContrat7: string;
        montantDette2: string;
        blocCompteDeVersement: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocCompteDeVersement[];
        villeCaisseEpargne: string;
        dateJour: string;
        nomCaisseEpargne2: string;
        gestionnaire3: string;
        signatureGestionnaire1: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreSignatureGestionnaire;
        montantDette: string;
    }
    interface IecheancierNonDechuCreditLettreConfirmationAccordEcheancierAconserver extends IecheancierNonDechuCreditLettreConfirmationAccordEcheancier {
    }
    interface IecheancierNonDechuCreditLettreConfirmationAccordEcheancierAretourner extends IecheancierNonDechuCreditLettreConfirmationAccordEcheancier {
    }
    interface IecheancierNonDechuCreditLettreBlocJpl {
        urlJpl: string;
        numeroDossier: string;
    }
    interface IecheancierNonDechuCreditLettreBlocLibelleEt {
        libelleEntiteTitulaireDossier: string;
    }
    interface IecheancierNonDechuCreditLettreSignatureGestionnaire {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IecheancierNonDechuCreditLettreBlocCompteDeVersement {
        iban: string;
        bic: string;
    }
    interface IecheancierNonDechuCreditLettreTableauArmortissement {
        echeance: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreTableauArmortissementEcheance[];
    }
    interface IecheancierNonDechuCreditLettreTableauArmortissementEcheance {
        rang: string;
        dateEcheance: string;
        montantEcheance: string;
        restantDuEcheance: string;
    }
    interface IgenericLogoEts {
        logoEtablissement: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IgenericLogoEtsLogoEtablissement;
    }
    interface IgenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface IgenericPiedpageets {
    }
    class EcheancierNonDechuCreditLettre implements IecheancierNonDechuCreditLettre {
        ententeDnr: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreEntenteDnr;
        blocAdresse: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresse[];
        ville: string;
        dateJour1: string;
        blocJpl: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocJpl[];
        numeroContrat: string;
        numeroContrat5: string;
        blocLibelleEt: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocLibelleEt[];
        titreClient: string;
        dateRetourCourrier: string;
        montantDette3: string;
        montantDette4: string;
        montantDette: string;
        nomCaisseEpargne: string;
        service: string;
        gestionnaire: string;
        adresseCaisseEpargne: string;
        codePostalCaisseEpargne: string;
        titreClient1: string;
        gestionnaire2: string;
        fonctionGestionnaire: string;
        signatureGestionnaire: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreSignatureGestionnaire;
        confirmationAccordEcheancierAconserver: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreConfirmationAccordEcheancierAconserver;
        numeroContrat1: string;
        numeroContrat6: string;
        numeroContrat7: string;
        taaConserver: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreTableauArmortissement[];
        confirmationAccordEcheancierAretourner: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreConfirmationAccordEcheancierAretourner;
        numeroContrat2: string;
        taaRetourner: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreTableauArmortissement[];
        genericLogoEts: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IgenericLogoEts[];
        genericPiedpageets: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class EcheancierNonDechuCreditLettreArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierNonDechuCreditLettreGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierNonDechuCreditLettreArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class EcheancierNonDechuCreditLettreImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheancierNonDechuCreditLettreArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class EcheancierNonDechuCreditLettreImpressionLotParams {
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
        private echeanciersNonDechuCreditLettreService;
        private echeancierDechuLettreProceduresCollectivesService;
        private echeancierDechuLettreSurendettementService;
        private edsService;
        static $inject: string[];
        constructor(echeanciersNonDechuCompteDebiteurLettreService: EcheanciersNonDechuCompteDebiteurLettreService, echeancierDechuLettreService: EcheancierDechuLettreService, echeanciersNonDechuCreditLettreService: EcheancierNonDechuCreditLettreService, echeancierDechuLettreProceduresCollectivesService: EcheancierDechuProceduresCollectivesLettreService, echeancierDechuLettreSurendettementService: EcheancierDechuSurendettementLettreService, edsService: EDS.EDSService);
        genererNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreGenererParams]>;
        genererArchiverNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverGenererParams]>;
        genererImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreImpressionParams]>;
        archiverImprimerNonDechuCompteDebiteurLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettre, ContentieuxEditique.Modeles.echeanciersNonDechuCompteDebiteurLettre.EcheanciersNonDechuCompteDebiteurLettreArchiverImpressionParams]>;
        genererDechuLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreGenererParams]>;
        genererArchiverDechuLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverGenererParams]>;
        genererImprimerDechuLettreTA(echeancier: Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreImpressionParams]>;
        archiverImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettre, ContentieuxEditique.Modeles.echeancierDechuLettre.EcheancierDechuLettreArchiverImpressionParams]>;
        genererDechuLettreTAProceduresCollectives(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverGenererParams]>;
        genererArchiverDechuLettreTAProceduresCollectives(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverGenererParams]>;
        genererImprimerDechuLettreTAProceduresCollectives(echeancier: Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverImpressionParams]>;
        archiverImprimerDechuLettreTAProceduresCollectives(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverImpressionParams]>;
        genererDechuLettreTASurendettement(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreGenererParams]>;
        genererArchiverDechuLettreTASurendettement(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreArchiverGenererParams]>;
        genererImprimerDechuLettreTASurendettement(echeancier: Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreArchiverImpressionParams]>;
        archiverImprimerDechuLettreTASurendettement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreArchiverImpressionParams]>;
        genererNonDechuCreditLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreGenererParams]>;
        genererArchiverNonDechuCreditLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreArchiverGenererParams]>;
        genererImprimerNonDechuCreditLettreTA(echeancier: Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreImpressionParams]>;
        archiverImprimerNonDechuCreditLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreArchiverImpressionParams]>;
        setEditiqueDonneesEds(infosEds: ContentieuxServices.Modeles.EDS.IEDSInterne, libelleLongEtablissement: string, libelleEDSGestionEntiteTitulaire: string): ContentieuxEditique.Modeles.IEditiqueEDS;
    }
}

declare namespace ContentieuxEditique.Services.Echeancier {
    class EcheancierDechuProceduresCollectivesLettreService {
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
         * Generation tableau de synthèse des paliers
         * @param paliers
         */
        genererTableauPaliers(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreTableauPalier[];
        /**
         * Generation du TA
         * @param echeancier
         */
        genererTableauAmortissement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreTableauAmortissement[];
        genererBlocAdresse(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocAdresse: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresse): ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresse;
        genererBlocExpediteur(echeancier: Modeles.IEcheancierEditique, blocExpediteur: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExp): ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocExp;
        genererBlocDestinataire(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocDestinataire: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDest): ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDest;
        getAdresseClient(blocDest: ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.IEcheancierDechuProceduresCollectivesLettreBlocAdresseBlocDest): string;
        getLibelleGerePar(dataEditiqueDonneesEds: Modeles.IEditiqueEDS): string;
        private createGenererParams();
        genererDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreGenererParams];
        private createArchiverGenererParams(echeancier);
        genererArchiverDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverGenererParams];
        private createImpressionParams(isPrevisualisation);
        genererImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreImpressionParams];
        private createArchiverImpressionParams(echeancier);
        archiverImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverImpressionParams];
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
         * Generation tableau de synthèse des paliers
         * @param paliers
         */
        genererTableauPaliers(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeancierDechuLettre.IecheancierDechuLettreTableauPalier[];
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
    class EcheancierDechuSurendettementLettreService {
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
         * Generation tableau de synthèse des paliers
         * @param paliers
         */
        genererTableauPaliers(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreTableauPalier[];
        /**
         * Generation du TA
         * @param echeancier
         */
        genererTableauAmortissement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreTableauAmortissement[];
        genererBlocAdresse(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocAdresse: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresse): ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresse;
        genererBlocExpediteur(echeancier: Modeles.IEcheancierEditique, blocExpediteur: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExp): ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocExp;
        genererBlocDestinataire(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocDestinataire: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDest): ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDest;
        getAdresseClient(blocDest: ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.IecheancierDechuSurendettementLettreBlocAdresseBlocDest): string;
        getLibelleGerePar(dataEditiqueDonneesEds: Modeles.IEditiqueEDS): string;
        private createGenererParams();
        genererDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreGenererParams];
        private createArchiverGenererParams(echeancier);
        genererArchiverDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreArchiverGenererParams];
        private createImpressionParams(isPrevisualisation);
        genererImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreImpressionParams];
        private createArchiverImpressionParams(echeancier);
        archiverImprimerDechuLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreArchiverImpressionParams];
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
         * Création du bloc sans decouvert autorisé
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
    class EcheancierNonDechuCreditLettreService {
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
        genererTableauAmortissement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique): ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreTableauArmortissement[];
        genererBlocAdresse(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocAdresse: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresse): ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresse;
        genererBlocExpediteur(echeancier: Modeles.IEcheancierEditique, blocExpediteur: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExp): ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocExp;
        genererBlocDestinataire(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, blocDestinataire: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDest): ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDest;
        getAdresseClient(blocDest: ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.IecheancierNonDechuCreditLettreBlocAdresseBlocDest): string;
        getLibelleGerePar(dataEditiqueDonneesEds: Modeles.IEditiqueEDS): string;
        private createGenererParams();
        genererNonDechuCreditLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreGenererParams];
        private createArchiverGenererParams(echeancier);
        genererArchiverNonDechuCreditLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreArchiverGenererParams];
        private createImpressionParams(isPrevisualisation);
        genererImprimerNonDechuCreditLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreImpressionParams];
        private createArchiverImpressionParams(echeancier);
        archiverImprimerNonDechuCreditLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): [ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreArchiverImpressionParams];
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
        genererDechuLettreTASurendettement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreGenererParams]>;
        genererArchiverDechuLettreTASurendettement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreArchiverGenererParams]>;
        genererImprimerDechuLettreTASurendettement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreImpressionParams]>;
        archiverImprimerDechuLettreTASurendettement(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettre, ContentieuxEditique.Modeles.echeancierDechuSurendettementLettre.EcheancierDechuSurendettementLettreArchiverImpressionParams]>;
        genererDechuLettreTAProceduresCollectives(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverGenererParams]>;
        genererArchiverDechuLettreTAProceduresCollectives(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverGenererParams]>;
        genererImprimerDechuLettreTAProceduresCollectives(echeancier: Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverImpressionParams]>;
        archiverImprimerDechuLettreTAProceduresCollectives(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettre, ContentieuxEditique.Modeles.EcheancierDechuProceduresCollectivesLettre.EcheancierDechuProceduresCollectivesLettreArchiverImpressionParams]>;
        genererNonDechuCreditLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreGenererParams]>;
        genererArchiverNonDechuCreditLettreTA(echeancier: Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreArchiverGenererParams]>;
        genererImprimerNonDechuCreditLettreTA(echeancier: Modeles.IEcheancierEditique, isPrevisualisation: boolean, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreImpressionParams]>;
        archiverImprimerNonDechuCreditLettreTA(echeancier: ContentieuxEditique.Modeles.IEcheancierEditique, paramComptableInfos: MyWay.Services.Context.ParametresComptables, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ng.IPromise<[ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettre, ContentieuxEditique.Modeles.echeancierNonDechuCreditLettre.EcheancierNonDechuCreditLettreArchiverImpressionParams]>;
    }
}
