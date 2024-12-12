
declare module myway.comEcheancier {
    var app: ng.IModule;
}

declare module myway.comEcheancier.impression {
    function createDocument(donnees: myway.comEcheancier.impression.DonneesEcheancierPourImpression): OrdreVirementPermSepa;
    function getTitulaire(signataires: MyWay.Model.ParticipantInformationClient[]): any;
}

declare module myway.comEcheancier {
    class EcheancierImpressionService {
        private serviceAgentExtended;
        private versementPeriodiqueService;
        private mwsfDeviseService;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, versementPeriodiqueService: VersementPeriodiqueService, mwsfDeviseService: myway.comInterdomaine.DeviseService, $q: ng.IQService);
        /**
         * @Alias imprimerEcheancier
         * @Param {myway.comEcheancier.impression.ParametreEcheancierPourImpression} contenu du doc à imprimer
         * @Param {myway.comEcheancier.impression.ArchivageEcheancier} paramètre d'archivage
         * @Description remplit le document Echeancier Permanent et l'imprime
         * @Return {MyWay.Services.Impression.DocumentGenere}.
         */
        imprimerEcheancier(contenu: myway.comEcheancier.impression.ParametreEcheancierPourImpression, archivage: myway.comEcheancier.impression.ArchivageEcheancier, codeCanal?: string, signataire?: MyWay.Model.ParticipantInformationClient, referenceIdentite?: string): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
        /**
         * @Alias imprimerEcheancierUnit
         * @Param {myway.comEcheancier.impression.ParametreEcheancierPourImpression} contenu du doc à imprimer
         * @Param {myway.comEcheancier.impression.ArchivageEcheancier} paramètre d'archivage
         * @Description remplit le document Echeancier Unit et l'imprime
         * @Return {MyWay.Services.Impression.DocumentGenere}.
         */
        imprimerEcheancierUnit(contenu: myway.comEcheancier.impression.ParametreEcheancierPourImpression, archivage: myway.comEcheancier.impression.ArchivageEcheancier, signataire?: MyWay.Model.ParticipantInformationClient, referenceIdentite?: string): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
        /**
         * @Alias mappeEcheancierRessourcePourImpression.
         * @Param {myway.comEcheancier.impression.EcheancierFromRessource} données échéancier
         * @Param {myway.comEcheancier.impression.DonneesEcheancierPourImpression} données impression à remplir
         * @Description mappe les objets en entrée pour l'impression
         * @Return {void}.
         */
        private mappeEcheancierRessourcePourImpression(fromRessource, pourImpression, signataire?, referenceIdentite?);
        /**
         * @Alias getInfoEds.
         * @Param {string}. code etablissement
         * @Description récupère l'adresse de l'EDS
         * @Return {myway.comEcheancier.impression.InfoEds}.
         */
        private getInfoEds(etab);
        /**
         * @Alias getMentionsLegales.
         * @Param {string}. code établissement
         * @Description récupère les mentions légales
         * @Return {any}.
         */
        private getMentionsLegales(codeEtab);
        /**
         * @ngdoc method
         * @description
         * méthode qui retourne les informations du détenteur du compte passé en param
         * @param {string, string, string} : codeEtablissement, codeGuichet, numeroCompte
         */
        getInformationParticulier(codeEtablissement: string, codeGuichet: string, numeroCompte: string, donnees: myway.comEcheancier.impression.DonneesEcheancierPourImpression): ng.IPromise<void>;
        /**
         * Récupérer la liste des natures de paiement
         * @return {IPromise<INaturePaiement>} promesse sur la réponse WS
         */
        private getNaturePaiement();
        /**
         * Récupérer la liste des catégories de paiement
         * @return {IPromise<ICategoriePaiement>} promesse sur la réponse WS
         */
        private getCategoriePaiement();
        /**
         * Récupérer la liste des codes économiques
         * @param codeGroupeAppartenancePays {string} code groupe appartenance pays
         * @return {IPromise<ICodeEconomique>} promesse sur la réponse WS
         */
        getCodeEconomique(codeGroupeAppartenancePays?: string): ng.IPromise<Array<MyWay.Model.IDetailCodeEconomique>>;
        /**
         * Récupérer les libellés d'édition d'un établissement
         * @param codeEtablissement {string} code établissement
         * @return {IPromise<ILibelleEtablissement>} promesse sur la réponse WS
         */
        private getLibelleEtablissement(codeEtablissement);
        /**
         * Récupérer les informations liées à un code BIC
         * @param codeBic {string} code BIC
         * @return {IPromise<IInformationBicSepa>} promesse sur la réponse WS
         */
        private getInformationBicSepa(codeBic);
        /**
         * Récupérer l'adresse et le libellé d'un couple (ETABLISSEMENT,GUICHET) dans les tables FIB
         * @param codeEtablissement {string} code établissement
         * @param codeGuichet {string} code guichet
         * @param codeAgent {string} code agent
         * @return {IPromise<IInterrogationFIB>} promesse sur la réponse WS
         */
        private getInterrogationFIB(codeEtablissement, codeGuichet, codeAgent);
        /**
         * Vérifier si un code pays correspond à la France
         * @param codeBic {string} code BIC contenant le code pays
         * @return {boolean} true si le code pays correspond à la France, false sinon
         */
        private estCodePaysFrance(codeBic);
    }
}

declare module myway.comEcheancier.impression {
    interface IOrdreVirementPermSepa {
        Nomdemandeur_1: string;
        AdrsDO1: string;
        AdrsDO2: string;
        AdrsDO3: string;
        IdentCli: string;
        LibCE_1: string;
        PaveSoussigné: string;
        PaveSoussigneSpecifique: OrdreVirementPermSepaPaveSoussigneSpecifique;
        PaveSoussigneSpecifique2: OrdreVirementPermSepaPaveSoussigneSpecifique2;
        PaveSoussigneSpecifique3: OrdreVirementPermSepaPaveSoussigneSpecifique3;
        BicIban_1: string;
        CodeEco_1: string;
        Montant_1: string;
        Periodicite_1: string;
        DateDeCreation: string;
        DateDerniereModification: string;
        DatePremEch: string;
        DateDerEch: string;
        Motif_2: string;
        IdentDO_1: string;
        RefDO_1: string;
        NomBen_1: string;
        AdrsBen1: string;
        PaysResidBen_1: string;
        AdrsBen2: string;
        AdrsBen3: string;
        BicBen_1: string;
        IbanBen_1: string;
        BqueBen_3: string;
        PaysBque: string;
        IdentBen_1: string;
        TexteOpe: OrdreVirementPermSepaTexteOpe;
        NomDOInit_1: string;
        IdentDOInit_1: string;
        NomBenFin_1: string;
        IdentBenFin_1: string;
        NatPaie_1: string;
        CatPaie_1: string;
        CertifiExact: OrdreVirementPermSepaCertifiExact;
        SignatureSepa: OrdreVirementPermSepaSignatureSepa;
        SignatureSepa2: OrdreVirementPermSepaSignatureSepa2;
        Logo: OrdreVirementPermSepaLogo;
        DesignationEDS: string;
        type_edition: string;
        AdresseEDS: string;
        Ligne6AdrsAfnr: string;
        NumrTelpEDS: string;
        LibelleDesignationBancaire: string;
        CodeTypeAdrsMult: string;
        AdresseDetenteur: string;
        Ligne6AdrsAfnrDet_1: string;
        RefDossier_1: string;
        Date_2: string;
        MentionsLegales: OrdreVirementPermSepaMentionsLegales;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface OrdreVirementPermSepaPaveSoussigneSpecifique {
        PaveSoussigneSpecifique: string;
    }
    interface OrdreVirementPermSepaPaveSoussigneSpecifique2 {
        PaveSoussigneSpecifique2: string;
    }
    interface OrdreVirementPermSepaPaveSoussigneSpecifique3 {
        PaveSoussigneSpecifique3: string;
    }
    interface OrdreVirementPermSepaTexteOpe {
        LibCE: string;
    }
    interface OrdreVirementPermSepaCertifiExact {
        Nom_Etablissement: string;
    }
    interface OrdreVirementPermSepaSignatureSepa {
        NomAgent: string;
    }
    interface OrdreVirementPermSepaSignatureSepa2 {
        QUALITE_SIGNATAIRE: string;
        LIDANM: string;
        LIDAPP: string;
        REF_IDENTITE: string;
        NomAgent: string;
    }
    interface OrdreVirementPermSepaLogo {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface OrdreVirementPermSepaMentionsLegales {
        MentionsLegales: string;
    }
    class OrdreVirementPermSepa implements IOrdreVirementPermSepa {
        Nomdemandeur_1: string;
        AdrsDO1: string;
        AdrsDO2: string;
        AdrsDO3: string;
        IdentCli: string;
        LibCE_1: string;
        PaveSoussigné: string;
        PaveSoussigneSpecifique: OrdreVirementPermSepaPaveSoussigneSpecifique;
        PaveSoussigneSpecifique2: OrdreVirementPermSepaPaveSoussigneSpecifique2;
        PaveSoussigneSpecifique3: OrdreVirementPermSepaPaveSoussigneSpecifique3;
        BicIban_1: string;
        CodeEco_1: string;
        Montant_1: string;
        Periodicite_1: string;
        DateDeCreation: string;
        DateDerniereModification: string;
        DatePremEch: string;
        DateDerEch: string;
        Motif_2: string;
        IdentDO_1: string;
        RefDO_1: string;
        NomBen_1: string;
        AdrsBen1: string;
        PaysResidBen_1: string;
        AdrsBen2: string;
        AdrsBen3: string;
        BicBen_1: string;
        IbanBen_1: string;
        BqueBen_3: string;
        PaysBque: string;
        IdentBen_1: string;
        TexteOpe: OrdreVirementPermSepaTexteOpe;
        NomDOInit_1: string;
        IdentDOInit_1: string;
        NomBenFin_1: string;
        IdentBenFin_1: string;
        NatPaie_1: string;
        CatPaie_1: string;
        CertifiExact: OrdreVirementPermSepaCertifiExact;
        SignatureSepa: OrdreVirementPermSepaSignatureSepa;
        SignatureSepa2: OrdreVirementPermSepaSignatureSepa2;
        Logo: OrdreVirementPermSepaLogo;
        DesignationEDS: string;
        type_edition: string;
        AdresseEDS: string;
        Ligne6AdrsAfnr: string;
        NumrTelpEDS: string;
        LibelleDesignationBancaire: string;
        CodeTypeAdrsMult: string;
        AdresseDetenteur: string;
        Ligne6AdrsAfnrDet_1: string;
        RefDossier_1: string;
        Date_2: string;
        MentionsLegales: OrdreVirementPermSepaMentionsLegales;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class OrdreVirementPermSepaArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor(modeArchivage: myway.comEcheancier.impression.ArchivageEcheancier);
    }
    class OrdreVirementPermSepaGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class OrdreVirementPermSepaImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class OrdreVirementPermSepaArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor(modeArchivage: myway.comEcheancier.impression.ArchivageEcheancier);
    }
}

declare module myway.comEcheancier.impression {
    function createUnitDocument(donnees: myway.comEcheancier.impression.DonneesEcheancierPourImpression): OrdreVirementUnitSepa;
    function miseEnFormeIban(value: string): string;
}

declare module myway.comEcheancier.impression {
    interface IOrdreVirementUnitSepa {
        Nomdemandeur_1: string;
        BicIban_1: string;
        PaveSoussigné: string;
        PaveSoussigneSpecifique: myway.comEcheancier.impression.OrdreVirementUnitSepaPaveSoussigneSpecifique;
        PaveSoussigneSpecifique2: myway.comEcheancier.impression.OrdreVirementUnitSepaPaveSoussigneSpecifique2;
        PaveSoussigneSpecifique3: myway.comEcheancier.impression.OrdreVirementUnitSepaPaveSoussigneSpecifique3;
        Montant_1: string;
        DateDeCreation: string;
        DateDerniereModification: string;
        DateCreaVir: string;
        Motif_1: string;
        CodeEco_2: string;
        IdentDO_1: string;
        RefDO_1: string;
        NomBen_1: string;
        AdrsBen1_1: string;
        PaysResidBen_2: string;
        AdrsBen2: string;
        AdrsBen3: string;
        BicBen_1: string;
        IbanBen_1: string;
        BqueBen_1: string;
        PaysBque: string;
        IdentBen_1: string;
        NomDOInit_1: string;
        IdentDOInit_1: string;
        NomBenFin_1: string;
        IdentBenFin_1: string;
        NatPaie_1: string;
        CatPaie_1: string;
        SignatureSepa: myway.comEcheancier.impression.OrdreVirementUnitSepaSignatureSepa;
        SignatureSepa2: myway.comEcheancier.impression.OrdreVirementUnitSepaSignatureSepa;
        Logo: myway.comEcheancier.impression.OrdreVirementUnitSepaLogo;
        DesignationEDS: string;
        type_edition: string;
        AdresseEDS: string;
        Ligne6AdrsAfnr: string;
        NumrTelpEDS: string;
        LibelleDesignationBancaire: string;
        CodeTypeAdrsMult: string;
        AdresseDetenteur: string;
        Ligne6AdrsAfnrDet: string;
        RefDossier_1: string;
        Date_2: string;
        MentionsLegales: myway.comEcheancier.impression.OrdreVirementUnitSepaMentionsLegales;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface OrdreVirementUnitSepaPaveSoussigneSpecifique {
        PaveSoussigneSpecifique: string;
    }
    interface OrdreVirementUnitSepaPaveSoussigneSpecifique2 {
        PaveSoussigneSpecifique2: string;
    }
    interface OrdreVirementUnitSepaPaveSoussigneSpecifique3 {
        PaveSoussigneSpecifique3: string;
    }
    interface OrdreVirementUnitSepaSignatureSepa {
        NomAgent: string;
    }
    interface OrdreVirementUnitSepaSignatureSepa2 {
        QUALITE_SIGNATAIRE: string;
        LIDANM: string;
        LIDAPP: string;
        REF_IDENTITE: string;
        NomAgent: string;
    }
    interface OrdreVirementUnitSepaLogo {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface OrdreVirementUnitSepaMentionsLegales {
        MentionsLegales: string;
    }
    class OrdreVirementUnitSepa implements IOrdreVirementUnitSepa {
        Nomdemandeur_1: string;
        BicIban_1: string;
        PaveSoussigné: string;
        PaveSoussigneSpecifique: myway.comEcheancier.impression.OrdreVirementUnitSepaPaveSoussigneSpecifique;
        PaveSoussigneSpecifique2: myway.comEcheancier.impression.OrdreVirementUnitSepaPaveSoussigneSpecifique2;
        PaveSoussigneSpecifique3: myway.comEcheancier.impression.OrdreVirementUnitSepaPaveSoussigneSpecifique3;
        Montant_1: string;
        DateDeCreation: string;
        DateDerniereModification: string;
        DateCreaVir: string;
        Motif_1: string;
        CodeEco_2: string;
        IdentDO_1: string;
        RefDO_1: string;
        NomBen_1: string;
        AdrsBen1_1: string;
        PaysResidBen_2: string;
        AdrsBen2: string;
        AdrsBen3: string;
        BicBen_1: string;
        IbanBen_1: string;
        BqueBen_1: string;
        PaysBque: string;
        IdentBen_1: string;
        NomDOInit_1: string;
        IdentDOInit_1: string;
        NomBenFin_1: string;
        IdentBenFin_1: string;
        NatPaie_1: string;
        CatPaie_1: string;
        SignatureSepa: myway.comEcheancier.impression.OrdreVirementUnitSepaSignatureSepa;
        SignatureSepa2: myway.comEcheancier.impression.OrdreVirementUnitSepaSignatureSepa2;
        Logo: myway.comEcheancier.impression.OrdreVirementUnitSepaLogo;
        DesignationEDS: string;
        type_edition: string;
        AdresseEDS: string;
        Ligne6AdrsAfnr: string;
        NumrTelpEDS: string;
        LibelleDesignationBancaire: string;
        CodeTypeAdrsMult: string;
        AdresseDetenteur: string;
        Ligne6AdrsAfnrDet: string;
        RefDossier_1: string;
        Date_2: string;
        MentionsLegales: myway.comEcheancier.impression.OrdreVirementUnitSepaMentionsLegales;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class OrdreVirementUnitSepaArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor(modeArchivage: myway.comEcheancier.impression.ArchivageEcheancier);
    }
    class OrdreVirementUnitSepaGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class OrdreVirementUnitSepaImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class OrdreVirementUnitSepaArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor(modeArchivage: myway.comEcheancier.impression.ArchivageEcheancier);
    }
}

declare module MyWay.Model {
    interface ICategoriePaiement {
        listeCategoriePaiement: Array<IDetailCategoriePaiement>;
    }
    interface IDetailCategoriePaiement {
        descriptionCategoriePaiement: string;
        codeCategoriePaiement: string;
    }
}

declare module MyWay.Model {
    interface ICodeEconomique {
        listeCodeEconomique: Array<IDetailCodeEconomique>;
    }
    interface IDetailCodeEconomique {
        codeEconomique: string;
        libelleCodeEconomique: string;
        codeFrequenceUtilisationCodeEco: string;
    }
}

declare module myway.comEcheancier.impression {
    enum TypeDocumentImpression {
        Creation = 0,
        Suspension = 1,
        Cloture = 2,
        Modification = 3,
        Reactivation = 4,
        DoubleValidation = 5,
        Duplicata = 6,
    }
    class Banques {
        static CODE_ETABLISSEMENT_CREDIT_FONCIER: string;
        static LIBELLE_ETABLISSEMENT_CREDIT_FONCIER: string;
        static LIBELLE_ETABLISSEMENT_BCP: string;
        static CODE_ETABLISSEMENT_BCP: string;
        static LIBELLE_ETABLISSEMENT_CAISSE_EPARGNE: string;
    }
}

declare module myway.comEcheancier.impression {
    class ArchivageEcheancier {
        idntCmpstApplf: string;
        codeEtablissement: string;
        codeTypeNatrDoc: string;
        codeTypeAttrb: string;
        dateDeliv: Date;
        dateNumr: Date;
        inttAttr: string;
        idntAttrb: string;
        codeTypeStck: string;
    }
    class DonneesEcheancierPourImpression {
        enteteEds: InfoEds;
        nomAgent: string;
        mentionsLegales: string;
        contenu: ParametreEcheancierPourImpression;
        nomDemandeur: string;
        adresseDemandeur: string;
        complementAdresseDemandeur: string;
        cPVilleDemandeur: string;
        numPersonneDemandeur: string;
        identifiantDonneurOrdre: string;
        referenceDonneurOrdre: string;
        codeEconomique: string;
        periodicite: MyWay.Model.Periodicite;
        montant: MyWay.Model.MontantDevise;
        libelle: string;
        dateCreation: Date;
        dateModificationDossier: Date;
        ibanDonneurOrdre: string;
        bicDonneurOrdre: string;
        dateDebut: Date;
        dateFin: Date;
        nomBeneficiaire: string;
        adresseBeneficiaire: string;
        complementAdresseBeneficiaire: string;
        cPVilleBeneficiaire: string;
        paysBeneficiaire: string;
        bicBeneficiaire: string;
        ibanBeneficiaire: string;
        banqueBeneficiaire: string;
        identifiantBeneficiaire: string;
        paysBanqueBeneficiaire: string;
        nomDesignationDonneurOrdreInitial: string;
        identifiantDonneurOrdreInitial: string;
        nomDesignationBeneficiaireFinal: string;
        identifiantBeneficiaireFinal: string;
        naturePaiement: string;
        categoriePaiement: string;
        libelleEtablissement: ILibelleEtablissement;
        nomPrenomParticipant: string;
        qualite: string;
        nom: string;
        prenom: string;
        referenceIdentite: string;
    }
    class ParametreEcheancierPourImpression {
        typeEdition: myway.comEcheancier.impression.TypeDocumentImpression;
        decideurClient: boolean;
        refDossier: string;
        indicateurVirementBQD: string;
        motifChangement: string;
        dateActivation: Date;
        dateReactivation: Date;
    }
    class InfoEds {
        codeEtablissement: string;
        libelleEtablissement: string;
        adresse: string;
        cPVille: string;
        numeroTelephone: string;
        identifiantInterneEDS: number;
        libelleEDS: string;
        referenceExterneEDS: number;
    }
    class EcheancierFromRessource {
        codeTypeTraitement: string;
        referenceExterneAgent: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteClientDonneurOrdre: string;
        cleRibNumeroCompte: string;
        codeBicBanqueDonneurOrdre: string;
        numeroIbanCompteDonneurOrdre: string;
        prioriteVirement: string;
        typeVirementImmediat: string;
        codeDevise: string;
        montantContreValeur: number;
        codeDeviseContreValeur: string;
        codePeriodicite: string;
        datePremiereEcheance: Date;
        dateDerniereEcheance: Date;
        codeEtatDossierPrelevement: string;
        jourReferenceEcheancier: string;
        typeJourReferenceEcheancier: string;
        codeApplicationDeiOrigine: string;
        typeInstruction: string;
        dateContreAppel: Date;
        numeroTelephone: string;
        referenceTransaction: string;
        codeBicDestinataire: string;
        numeroIbanCompteBeneficiaire: string;
        libelleCompletBeneficiaire: string;
        identifiantBeneficiaire: string;
        indicatifPaysBeneficiaire: string;
        codePaysBanqueBeneficiaire: string;
        codePaysResidenceBeneficiaire: string;
        codeEconomique: string;
        libelle1VirementImmediat: string;
        libelle2VirementImmediat: string;
        libelle3VirementImmediat: string;
        libelle4VirementImmediat: string;
        typeCompteDestinataire: string;
        referenceDonneurOrdre: string;
        identifiantDonneurOrdre: string;
        libelleBeneficiaireUltime: string;
        identifiantBeneficiaireUltime: string;
        libelleDonneurOrdreUltime: string;
        identifiantDonneurOrdreUltime: string;
        codeClasseIdtBeneficiaireUltime: string;
        codeClasseIdtDonneurOrdreUltime: string;
        codeClasseIdtDonneurOrdre: string;
        codeClasseIdtBeneficiaire: string;
        libelleNaturePaiement: string;
        codeCategoriePaiement: string;
        valeurDernierNumeroDistribue: string;
        codeActeurCreationDossier: string;
        identifiantProduitService: number;
        numeroPersonne: number;
        referenceVirementTutelle: number;
        identifiantRemiseMagnetique: string;
        numeroOrdreOperation: number;
        adresse1Beneficiaire: string;
        adresse2Beneficiaire: string;
        adresse3Beneficiaire: string;
        adresse4Beneficiaire: string;
        identifiantDossierSepa: string;
        identifiantDossierVirementSepa: string;
        montantMouvementVirmtImmediat: number;
        dateCreationEcheancier: Date;
        dateModificationEcheancier: Date;
        nomCorrespondant: string;
        fonctionCorrespondant: string;
    }
    class PersonneRg1 {
        numeroPersonne: number;
        numChronoProfessionnel: number;
        codeAppartenanceReseau: string;
        codeResident: string;
        codePaysINSEE: string;
        raisonSociale: string;
        designationBancaireCourte: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        identifiantElementStructure: number;
        cotationCompleteBDF: string;
        codePersonnaliteJuridique: string;
        numeroTelephoneAdresse: string;
        codeAgentEconomiqueBAFI: string;
    }
    interface IMentionLegalePied {
        codeEtablissement: string;
        codePied: number;
        typeEditique: string;
        typeSaisie: string;
        typeEntete: string;
        ligne1: string;
        ligne2: string;
        ligne6: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligneEntete: string;
    }
    interface IMentionLegaleCorps {
        codeEtablissement: string;
        idEdsInterne: number;
        codeInterneEtab: string;
        codeInterneEtab2: string;
        codeCtrRattachement: string;
        critereRoutageBin: string;
        numTelex: string;
        numTelecopieur: string;
        numSiret: string;
        lieuEnregistrement: string;
        mntDotation: number;
        libEdsChequier: string;
        libEdsDomiciliation: string;
        raisonSociale: string;
        codeCategorieJuridique: string;
        codeBic: string;
        numSiretEtab: string;
        numRcsSiren: string;
        mntCapitalEtab: number;
        numNationalEmetteur: string;
        commentaire1: string;
        commentaire2: string;
        commentaire3: string;
        commentaire4: string;
        numOrias: string;
    }
    interface IMentionLegale {
        corps: IMentionLegaleCorps;
        pied: IMentionLegalePied;
        dateModification: string;
        codeEtablissement: string;
    }
    interface ILibelleEtablissement {
        libelleMinuscule: string;
        libelleMajuscule: string;
        genreNomEtablissement: string;
        url: string;
        nomServiceInternet: string;
        articleMinusculeDeLaDu: string;
        articleMinusculeALaAu: string;
        articleMinusculeLaLe: string;
        adjectifMinusucleSaSon: string;
        articleMajusculeDeLaDu: string;
        articleMajusculeALaAu: string;
        articleMajusculeLaLe: string;
        adjectifMajusculeSaSon: string;
        articleReseauDeLaDu: string;
        articleServiceRelCliDeLaDuDeSon: string;
        articleServiceRelCliALaAuASon: string;
        codeEtablissement: string;
        articleLaLe: string;
        articleALaAu: string;
        articleDeLaDu: string;
        etablissementLibelleLong: string;
    }
    interface IDonneesBicPays {
        codeBrancheBic: string;
        codeTypeOperationSrd: string;
        dateDebutValiditePf: string;
        dateFinValiditePf: string;
        libelleBanque: string;
        codePaysBanqueCorrespondante: string;
        libelleVilleBanque: string;
        codeGroupeAppartenancePays: string;
        codeBic: string;
        codePaysIso: string;
    }
    interface IInformationBicSepa {
        donneesBicPays: IDonneesBicPays;
    }
    interface IAdresseGuichet {
        codeEtablissement: string;
        codeGuichet: string;
        libelleDomiciliationGuichet: string;
        ligneAdresse3: string;
        ligneAdresse4: string;
        ligneAdresse5: string;
        ligneAdresse6: string;
    }
    interface IInterrogationFIB {
        adresseGuichet: IAdresseGuichet;
    }
}

declare module MyWay.Model {
    interface INaturePaiement {
        listeNaturePaiement: Array<IDetailNaturePaiement>;
    }
    interface IDetailNaturePaiement {
        codeNaturePaiementEnFrancais: string;
        descriptionNaturePaiement: string;
    }
}

declare module MyWay.Model {
    class Periodicite {
        key: string;
        value: string;
        seuil: number;
        plafond: number;
        constructor(key?: string, value?: string, seuil?: number, plafond?: number);
    }
    class ParametreVersementPeriodique {
        periodicites: MyWay.Model.Periodicite[];
        codePeriodiciteParDefaut: string;
        cacherCompteVirement: boolean;
        riceVirement: MyWay.Model.Rice;
        parametreListeCompte: MyWay.Model.ParametresListeComptes;
        ricePrelevement: MyWay.Model.Rice;
        cacherComptePrelevement: boolean;
        afficheRice: boolean;
        codeDevise: string;
        dateMin: Date;
        constructor(periodicites?: MyWay.Model.Periodicite[], periodiciteParDefaut?: string, riceVirement?: MyWay.Model.Rice, cacherCompteVirement?: boolean, paramListeCompte?: MyWay.Model.ParametresListeComptes, ricePrelev?: MyWay.Model.Rice, cacherComptePrelev?: boolean, codeDevise?: string, afficheRice?: boolean, dateMin?: Date);
    }
    class VersementPeriodique {
        periodicite: MyWay.Model.Periodicite;
        montant: MyWay.Model.MontantDevise;
        libelle: string;
        dateDebut: Date;
        dateFin: Date;
        riceVirement: MyWay.Model.Rice;
        ibanVirement: string;
        bicVirement: string;
        comptePrelevement: MyWay.Model.Contrat;
        ricePrelevement: MyWay.Model.Rice;
        ibanPrelevement: string;
        bicPrelevement: string;
        $valid: boolean;
    }
}
declare module myway.conversionribbiciban {
    interface IConversionRibBicIban {
        codeBic: string;
        numeroIbanCompteBeneficiaire: string;
        numeroCompte: string;
        codeEtablissement: string;
        codeGuichet: string;
        cleRib: number;
    }
}

declare module myway.comEcheancier {
    class VersementPeriodiqueController {
        private $scope;
        private versementPeriodiqueService;
        private serviceAgentExtended;
        private saisieRiceService;
        static $inject: string[];
        versementPeriodique: MyWay.Model.VersementPeriodique;
        parametre: MyWay.Model.ParametreVersementPeriodique;
        periodicites: MyWay.Model.Periodicite[];
        minDate: Date;
        required: boolean;
        constructor($scope: ng.IScope, versementPeriodiqueService: VersementPeriodiqueService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * @Description Permet de tester si une valeur est undefined ET non égale null
         * @param val valeur à tester
         */
        private isDefinedAndNotNull(val);
        /**
         * @Alias isValid.
         * @Param {void}.
         * @Description Permet de faire de contrôle de validité simple (mettre en public et sur l'objet VersementPeriodique si on veut l'utiliser en dehors).
         * Lorsque le montant n'est pas saisi, aucun champs n'est obligatoire si non tous les champs le sont (Attention : deux modes d'affichage avec le RICE.
         * Le code n'a pas été réduit pour raison de lisibilité.
         * @Return {void}.
         */
        private isValid();
        /**
         * @Alias changePeriodicite.
         * @Param {void}.
         * @Description event onChange périodicité
         * @Return {void}.
         */
        changePeriodicite(): void;
        /**
         * @Alias changeDateDebut.
         * @Param {void}
         * @Description event onChange date de début
         * @Return {void}.
         */
        changeDateDebut(): void;
        /**
         * @Alias onSelectComptePrelevement.
         * @Param {void}.
         * @Description event onSelect Compte de prélèvement
         * @Return {void}.
         */
        onSelectComptePrelevement(): void;
        /**
         * @Alias calculeCleRiceIbanBic.
         * @Param {void}.
         * @Description calcule la clé Rice
         * @Return {void}.
         */
        private calculeCleRiceIbanBic();
        /**
         * @Alias initIHM.
         * @Param {void}.
         * @Description initialise les objets pour l'IHM
         * @Return {void}.
         */
        private initIHM();
        /**
         * @Alias initDateDebutEtLibelleEnFonctionPeriodicite.
         * @Param {void}.
         * @Description initialise la date de début et le libellé en fonction de la périodicité
         * @Return {void}.
         */
        initDateDebutEtLibelleEnFonctionPeriodicite(): void;
        /**
         * @Alias clickSwitchListeComptesRice.
         * @Param {void}.
         * @Description switch l'affichage Liste des comptes en un champs de saisie (RICE)
         * @Return {void}.
         */
        clickSwitchListeComptesRice(): void;
    }
}

declare module myway.comEcheancier {
    function mwsfVersementPeriodique(): ng.IDirective;
}

declare module myway.comEcheancier {
    class VersementPeriodiqueService {
        private serviceAgentExtended;
        private $q;
        private static OPE_FI_VERSION;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        /**
         * @alias getBicIban
         * @description Méthode permettant de détermine le BIC et l'IBAN à partir du RICE passé en paramètre
         * @param {MyWay.Model.Rice}
         * @return {myway.conversionribbiciban.IConversionRibBicIban}
         */
        getBicIban(rice: MyWay.Model.Rice): ng.IPromise<myway.conversionribbiciban.IConversionRibBicIban>;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
        /**
         * @Returns {Array<MyWay.Model.Periodicite>}. la liste des périodicités
         * @alias getPeriodicites.
         * @param {MyWay.Model.ParametreVersementPeriodique} : paramètres d'appel à la ressource.
         * @description permet de récupérer la liste des périodicités
         */
        getPeriodicites(parametre?: MyWay.Model.ParametreVersementPeriodique): ng.IPromise<Array<MyWay.Model.Periodicite>>;
    }
}
