
declare module ComposantCommunSecurExpress {
    var app: any;
}

/***
 * Ensemble d'énumérations concernant le service REST "contratcce/v1/informationGlobale"
 * @module ComposantCommunSecurExpress.Enumerations.InformationsGlobales
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunSecurExpress.Enumerations.InformationsGlobales {
    /**
     * Indicateur d'information découvert
     * "O" Appel de la QR PC68 Synthèse complète CCE (avec liste des découverts, liste des conditions d'arrêté...)
     * "N" Appel de la QR PC85 Synthèse CCE
     */
    enum IndicateurInfoDecouvertEnum {
        OUI,
        NON,
    }
    /**
     * Code Action
     * 'AA' : 1 segment réponse de type QPCSP5M (segment SP5M) infos CCE simples
     * 'CP' ou 'CC' : 1 segment réponse de type RPCSP5N (segment SP5N) infos CCE complètes
     * 'CP' ou 'CR' : 1 segment réponse de type RPCSP4G (segment SP4G) relevé de compte
     * 'CP' ou 'CA' : 1 segment réponse de type RPCSP5P (segment SP5P) conditions d'arrêté
     * 'CP' ou 'CD' : 1 segment réponse de type RPCSP5Q (segment SP5Q) dates de valeur
     * 'CP' ou 'CF' : 1 segment réponse de type RPCSP8B (segment SP8B) fusions en agios
     * 'CP' ou 'CG' : 1 segment réponse de type RPCSP8H (segment SP8H) fusion en capital
     * 'CP' ou 'CT' : 1 segment réponse de type RDCSD8L (segment SD8L) entité titulaire ET 1 segment réponse de type RDCSD3O (segment SD3O) entité titulaire
     * 'CP' ou 'CI' : 1 segment réponse de type RPCSD98 (segment SD98) liens inter personnes
     * 'CP' ou 'CL' : 1 segment réponse de type RPCSD3T (segment SD3T) personne physique d'une ET 1 segment réponse de type RPCSD3J (segment SD3J) domiciliation ET 1 segment réponse de type RPCSD3U (segment SD3U) d'une personne morale
     */
    enum CodeActionEnum {
        AA,
        CP,
        CC,
        CR,
        CA,
        CD,
        CF,
        CG,
        CT,
        CI,
        CL,
    }
}

/**
 * Ensemble d'énumérations concernant le service REST "servicesecurexpress/v1/contrat"
 * @module ComposantCommunSecurExpress.Enumerations
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ComposantCommunSecurExpress.Enumerations {
    enum SecurExpressCodeEtat {
        OUVERT,
        CLOTURE_DEMANDEE,
        CLOTURE_EN_COURS,
        FERMER,
        OUVERTURE_EN_COURS,
        VERSEMENTS_NON_AUTORISES,
    }
    enum SecurExpressOptionProduit {
        SEUL,
        TOUT,
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcce/v1/informationGlobale"
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunSecurExpress.Modeles.InformationsGlobales {
    interface IInformationGlobale {
        fonctionnement: IFonctionnement;
        conditionDebitriceNegociee: IConditionDebitriceNegociee[];
        etatCompte: IEtatCompte;
        donneesCompte: IDonneesCompte;
        parametresReleve: IParametresReleve;
        indicateurFusion: IIndicateurFusion;
        representantLegal: IRepresentantLegal;
        listeInfomationDateValeur: IInformationDateValeur;
        listeConditionDebitriceDefaut: IConditionDebitriceDefaut[];
        listeConditionDebitriceGenerale: IConditionDebitriceGenerale[];
        listeCommissionFraisMarche: ICommissionFraisMarche[];
        listeCommissionFraisNegociee: ICommissionFraisNegociee[];
        conditionArreteSynthese: IConditionArreteSynthese;
        commissionFraisDefaut: ICommissionFraisDefaut;
    }
    interface IFonctionnement {
        codeAdresse?: string;
        codeAutorisationRemuneration: string;
        codeEtabCompteSuppFactur: string;
        codeDateValeurCheque: string;
        codeDepassementAutorisation: string;
        codeEchelleFusionEnvoi: string;
        codeEchelleCompteEnvoi: string;
        codeElementSurveillance: string;
        codeEtabCompteAncien: string;
        codeEtabCompteFusion: string;
        codeFonctionnementAutorise: string;
        codeGuichetCompteFusion: string;
        codeGuichetCompteSuppFactur: string;
        codeGuichetCompteAncien: string;
        codeGuichetComptePrlvmtAgios: string;
        codeDevise: string;
        codeNatureCompte: string;
        codePeriodeArreteCompte: string;
        codePeriodiciteReleve?: string;
        dateChangementPeriod?: Date;
        dateClotureCompteCourant?: Date;
        datePassageEuro?: Date;
        dateOuvertureCompteCourant?: Date;
        futurePeriodiciteArrete: string;
        indicAutorisationCmdeChequier: string;
        indicAutorisationCreationDec: string;
        indicAutorisationCmdeCarte: string;
        indicFusionAgios: string;
        indicFusionCapital: string;
        libelleCompte: string;
        libelleLongNature?: string;
        modeArreteCompte: string;
        montantSeuil: number;
        motifClotureCompte?: string;
        codeEtabComptePrlvmtAgios: string;
        numeroCompteAncien: string;
        numeroCompteSuppFactur: string;
        numeroContrat: number;
        numeroComptePrlvmtAgios: string;
        numeroCompteFusion: string;
        soldeDeviseTenueCompte?: number;
        soldeFrancs?: number;
        typeContratEntreprise?: string;
        typeNatureCompte: string;
    }
    interface IConditionDebitriceNegociee {
        "dateDebutValidite": string;
        "dateHeureCreation": string;
        "identifiantBareme": number;
        "libelleCourtBareme": string;
        "libelleBareme": string;
        "margeMaximumBareme": number;
        "margeMinimumBareme": number;
        "montantDecouvert": number;
        "nombrePaliersActifs": number;
        "nombreMaximumPaliers": number;
        "numeroChrono": number;
        "listePalier": Modeles.InformationsGlobales.IPalier[];
        "indicateurBaremeDefaut"?: string;
        "codeDevise"?: string;
        "codeEtablissement"?: string;
        "codeGuichet"?: string;
        "numeroCompte"?: string;
    }
    interface IEtatCompte {
        codeDeviseExpressionMontant: string;
        codeEtatProduitService: string;
        dateOuverture: Date;
        dateCloture: Date;
        soldeCompte: number;
        codeDeviseTenueCompte: string;
        soldeDeviseTenueCompte: number;
    }
    interface IDonneesCompte {
        codeGuichet: string;
        numeroCompte: string;
        codeDevise: string;
        codeEtatProduitService: string;
        dateOuverture: Date;
        dateCloture: Date;
        motifClotureCompte: string;
        soldeDeviseTenueCompte: number;
        libelleCompte: string;
        numeroContrat: number;
        typeNatureCompte: string;
        libelleNatureCompte: string;
        libelleLongNatureCompte: string;
        codeFonctionnement: string;
        libelleFonctionnement: string;
        montantSeuilRemarquable: number;
        codeElementSurveillance: string;
        libelleSurveillance: string;
        indicAutoCreatDecouvert: string;
        codeDepassementAutorisation: string;
        indicAutoCommandeChequier: string;
        indicAutoRemunerationCpte: string;
        indicAutoCommandeCarte: string;
        codeEtablissementGab: string;
        codeGuichetCompteRecepteur: string;
        numeroComptePrelevement: string;
        codeBanqueTarification: string;
        codeGuichetTarification: string;
        numeroCompteTarification: string;
        codeNatureCompte: string;
        codeEtablissement: string;
    }
    interface IParametresReleve {
        codePeriocictié: string;
        codeTypeAdresse: string;
        designationCourte: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        libellePeriodicite: string;
    }
    interface IIndicateurFusion {
        montantSoldeFusionne: number;
        codeTypeFusion: string;
    }
    interface IRepresentantLegal {
        codeEtablissement: string;
        numeroEntiteTitulaire: number;
        identifiantPersonne: number;
        indicateurResponsableCompte: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: Date;
        nomLocalite: string;
        libelleNationalite: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        numeroTelephoneAdresse: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLienInterPersonnes: string;
        referencePieceJustificative: string;
        codeInseeLocalite: string;
        codeResident: string;
        numeroTelephoneTravail: string;
        codeAppartenanceReseau: string;
        codePaysInsee: string;
        codePaysIso: string;
        codePostal: string;
        codeSexe: string;
        codeAgentEconomique: string;
        nomEmployeur: string;
        dateEmbauche: Date;
        codePaysNaissance: string;
        codeCategorieSocioPro: string;
        numeroSiren: string;
        numeroSiret: string;
        codeFamilleCategorieJuridique: string;
        codeFamilleApeInsee: string;
        deuxDerniersCarInsee: string;
        rangPersonneET: string;
        codePaysOmcr: string;
        codePaysTitre: string;
    }
    interface IInformationDateValeur {
        codeDateValeurCheque: string;
        codeGestion: string;
    }
    interface IConditionDebitriceDefaut {
        codeDevise: string;
        identifiantBareme: number;
        indicateurBaremeDefaut: string;
        libelleCourtBareme: string;
        libelleBareme: string;
        margeMaximumBareme: number;
        margeMinimumBareme: number;
        listePalier: IPalier[];
        nombrePaliersActifs: number;
        dateDebutValidite: string;
    }
    interface ICommissionFraisMarche {
        "codeDevise": string;
        "codeGestionTechnique": string;
        "codeNiveauResponsabilite": string;
        "commissionDecouvert": number;
        "commissionDepassement1": number;
        "commissionDepassement2": number;
        "commissionDepassement3": number;
        "commissionImmobilisation": number;
        "dateCreationBareme": string;
        "dateModifBareme": string;
        "fraisOperations": number;
        "indicateurBareme": string;
        "libelleBareme": string;
        "montantFraisTenueCompte": number;
        "numeroBaremeCommission": number;
        "codeMarche": string;
        "commissionMouvement": number;
    }
    interface ICommissionFraisNegociee {
        codeMarche: string;
        codeTauxReferenceCredit: string;
        codeTauxReferenceDebit: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionMouvement: number;
        commissionImmobilisation: number;
        dateCreation: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        dateModification: Date;
        montantFraisOperations: number;
        baseFraisOperations: number;
        indicateurBaremeCommission: string;
        libelleBaremeCommission: string;
        montantFraisTenueCompte: number;
        baseFraisTenueCompte: string;
        numeroBaremeCommission: number;
        numeroBaremeCrediteur: number;
        tauxApplicationOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxCommissionDecouvert: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        tauxCommissionMouvement: number;
        tauxCommissionImmobilisation: number;
        tauxFraisTenueCompte: number;
        variationBaremeCrediteur: number;
        variationBaremeDebiteur: number;
        numeroBaremeDebiteur: number;
        codeDeviseCommissionFraisNegociee: string;
        tauxApplicationDecouvert: number;
        "codeDeviseCommission"?: string;
        "delaiRenouvellementDebiteur"?: number;
        "numeroBaremeCommissionDefaut"?: number;
        "numeroBaremeCrediteurDefaut"?: number;
        "numeroBaremeDebiteurDefaut"?: number;
        "tauxApplicationFraisOperation"?: number;
        "valeurVariationBaremeDebiteur"?: number;
    }
    interface IConditionArreteSynthese {
        modeArrete: string;
        periodiciteArrete: string;
        periodiciteFutureArrete: string;
        dateChangementPeriodicite: Date;
        codeEchelleCompteEnvoi: string;
        codeEchelleFusionEnvoi: string;
        editionEchelleDetailleCompte: string;
        editionEchelleDetailleFusion: string;
        codeBanquePrelevement: string;
        codeGuichetPrelevement: string;
        numeroComptePrelevement: string;
        numeroBaremeCommission: number;
        numeroBaremeInteretDebiteur: number;
        codeTauxDebiteurReference: string;
        libelleTauxDebiteur: string;
        variationTauxBaremeDebiteur: number;
        numeroBaremeInteretCrediteur: number;
        codeTauxCrediteurReference: string;
        libelleTauxCrediteur: string;
        variationBaremeTauxCrediteur: number;
        tauxCaisseCommissionDecouvert: number;
        tauxApplicationComDecouvert: number;
        tauxCommissionDecouvert: number;
        tauxCaisseCommMouvement: number;
        tauxApplicationCommMouvement: number;
        tauxCommissionMouvement: number;
        tauxCaisseCommissionImmo: number;
        tauxApplicationCommissionImmo: number;
        tauxCommissionImmo: number;
        tauxCaisseCommDepassement1: number;
        tauxCaisseCommDepassement2: number;
        tauxCaisseCommDepassement3: number;
        tauxAppCommDepassement1: number;
        tauxAppCommDepassement2: number;
        tauxAppCommDepassement3: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        montantFraisOperationEuro: number;
        tauxApplicationFraisOperation: number;
        montantUnitFraisOperationEuro: number;
        montantCaisseFraisTenueCptEuro: number;
        tauxFraisTenueCompteEuro: number;
        montantFraisTenueCptEuro: number;
        codeGestionTechnique: string;
        indicateurContratOuvertClos: string;
        typeFranchiseAgios: string;
        montantFranchiseAgiosEuro: number;
        libelleFamilleMarche: string;
        indicateurOuvertureAssurance: string;
        libelleCourtBareme: string;
        nombrePaliersBareme: number;
        indicateurConditionsPerso: string;
        margeEtablissementTranche1: number;
        margeEtablissementTranche2: number;
        margeEtablissementTranche3: number;
        margeEtablissementTranche4: number;
        margeEtablissementTranche5: number;
        codeDevise: string;
        nombrePaliersActifs: number;
        libelleCourtBaremeDebit: string;
        indicateurConditionDefaut: string;
        tauxReferencePalier1Devise: string;
        tauxReferencePalier2Devise: string;
        tauxReferencePalier3Devise: string;
        tauxReferencePalier4Devise: string;
        tauxReferencePalier5Devise: string;
        borneSuperieurePalier1Devise: number;
        borneSuperieurePalier2Devise: number;
        borneSuperieurePalier3Devise: number;
        borneSuperieurePalier4Devise: number;
        borneSuperieurePalier5Devise: number;
        margeTauxReferencePalier1Dev: number;
        margeTauxReferencePalier2Dev: number;
        margeTauxReferencePalier3Dev: number;
        margeTauxReferencePalier4Dev: number;
        margeTauxReferencePalier5Dev: number;
        valeurTauxReferenceTranche1Dev: number;
        valeurTauxReferenceTranche2Dev: number;
        valeurTauxReferenceTranche3Dev: number;
        valeurTauxReferenceTranche4Dev: number;
        valeurTauxReferenceTranche5Dev: number;
        listePalier: IPalier[];
    }
    interface ICommissionFraisDefaut {
        codeDeviseCommission: string;
        codeTauxReferenceCredit: string;
        codeTauxReferenceDebit: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionMouvement: number;
        commissionImmobilisation: number;
        delaiRenouvellementDebiteur: number;
        montantFraisTenueCompte: number;
        numeroBaremeCommissionDefaut: number;
        numeroBaremeCrediteurDefaut: number;
        tauxApplicationDecouvert: number;
        tauxApplicationFraisOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxCommissionDecouvert: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        tauxCommissionMouvement: number;
        tauxCommissionImmobilisation: number;
        valeurVariationBaremeDebiteur: number;
        montantFraisOperations: number;
        baseFraisOperations: number;
        numeroConditionDebitriceDefaut: number;
    }
    interface IConditionDebitriceGenerale {
        "identifiantConditionDebitriceGenerale": number;
        "dateDebutValidite": string;
        "dateFinEffet": string;
        "libelleCourtBareme": string;
        "libelleBareme": string;
        "codeNiveauResponsabilite": string;
        "codeTaux": string;
        "libelleTauxDebiteur": string;
        "periodiciteMajTaux": string;
        "valeurTauxReference": number;
        "indicateurBaremeDefaut": string;
        "nombrePaliersActifs": number;
        "nombreMaximumPaliers": number;
        "margeMinimumBareme": string;
        "margeMaximumBareme": string;
        "codeDevise": string;
        "codeTauxSubstitution1": string;
        "libelleTauxSubstitution1": string;
        "valeurTauxSubstitution1": number;
        "periodiciteMajTauxSubstitution1": string;
        "codeTauxSubstitution2": string;
        "libelleTauxSubstitution2": string;
        "periodiciteMajTauxSubstitution2": string;
        "valeurTauxSubstitution2": number;
        "codeTauxUsure": string;
        "libelleTauxUsure": string;
        "valeurTauxUsure": number;
        "codeGestionTechnique": string;
    }
    interface IPalier {
        numeroPalier: number;
        borneInferieure: number;
        borneSuperieure: number;
        margeTauxReference: number;
        tauxReference: string;
        valeurTaux: number;
        variationBorneSuperieure: number;
    }
    /**
     * Interface de la requête au service REST "contratcce/v1/informationGlobale" de type GET
     */
    interface IInformationsGlobalesRestServiceGetQuery {
        indicateurInfoDecouvert: Enumerations.InformationsGlobales.IndicateurInfoDecouvertEnum;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "servicesecurexpress/v1/contrat"
 * @module ComposantCommunSecurExpress.Modeles.Contrat
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunSecurExpress.Modeles.Contrat {
    interface IContrat {
        codeEtablissement: string;
        codeGuichet: string;
        numeroClef: string;
        codeEtat: string;
        dateOuverture: Date;
        dateCloture: Date;
        optionProduitSecurExpress: string;
        identifiantContrat: string;
        identifiantPersonne: number;
        numeroOffre: number;
        identifiantProduit: number;
        nomCommercial: string;
        comptePrelevement: IComptePrelevement;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IComptePrelevement {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    /**
     * Interface de la requête au service REST "servicesecurexpress/v1/contrat" de type DELETE
     */
    interface ISecurExpressContratRestServiceDeleteQuery {
        codeEtablissement: string;
        identifiantContrat: string;
        numeroOffre: number;
        identifiantPersonne: number;
        identifiantProduit: number;
    }
}

/***
 * Service concernant le service REST "contratcce/v1/informationGlobale"
 * @module ComposantCommunSecurExpress.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunSecurExpress.Services {
    /**
     * Classe du service
     */
    class InformationsGlobalesService implements IInformationsGlobalesService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer les informations de fonctionnement du compte
         * @param {Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.InformationsGlobales.IInformationGlobale>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery): ng.IPromise<Modeles.InformationsGlobales.IInformationGlobale>;
    }
    /**
     * Interface du service
     */
    interface IInformationsGlobalesService {
        sendGetRequest(query: Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery): ng.IPromise<Modeles.InformationsGlobales.IInformationGlobale>;
    }
}

/***
 * Service concernant le service REST "servicesecurexpress/v1/contrat"
 * @module ComposantCommunSecurExpress.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunSecurExpress.Services {
    /**
     * Classe du service
     */
    class SecurExpressContratService implements ISecurExpressContratService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant l'interrogation d'un contrat SecurExpress
         * @param {string} query - l'identifiant contrat SECUREXPRESS
         * @return {MyWay.Services.IPromesse<Modeles.Contrat.IContrat>} La promesse contenant les résultats
         */
        sendGetRequest(query: string): ng.IPromise<Modeles.Contrat.IContrat>;
        /**
         * Méthode permettant la création d'un contrat SecurExpress
         * @param {Modeles.Contrat.IContrat} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.Contrat.IContrat>} La promesse contenant les résultats
         */
        sendPostRequest(query: Modeles.Contrat.IContrat): ng.IPromise<Modeles.Contrat.IContrat>;
        /**
         * Méthode permettant la mise à jour d'un contrat SecurExpress
         * @param {Modeles.Contrat.IContrat} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.Contrat.IContrat>} La promesse contenant les résultats
         */
        sendPutRequest(query: Modeles.Contrat.IContrat): ng.IPromise<Modeles.Contrat.IContrat>;
        /**
         * Méthode permettant la clotûre d'un contrat SecurExpress
         * @param {Modeles.Contrat.ISecurExpressContratRestServiceDeleteQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.Contrat.IContrat>} La promesse contenant les résultats
         */
        sendDeleteRequest(query: Modeles.Contrat.ISecurExpressContratRestServiceDeleteQuery): ng.IPromise<Modeles.Contrat.IContrat>;
    }
    /**
     * Interface du service
     */
    interface ISecurExpressContratService {
        sendGetRequest(query: string): ng.IPromise<Modeles.Contrat.IContrat>;
        sendPostRequest(query: Modeles.Contrat.IContrat): ng.IPromise<Modeles.Contrat.IContrat>;
        sendPutRequest(query: Modeles.Contrat.IContrat): ng.IPromise<Modeles.Contrat.IContrat>;
        sendDeleteRequest(query: Modeles.Contrat.ISecurExpressContratRestServiceDeleteQuery): ng.IPromise<Modeles.Contrat.IContrat>;
    }
}
