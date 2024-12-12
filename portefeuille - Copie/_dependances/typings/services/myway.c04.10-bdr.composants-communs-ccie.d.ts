
declare module ComposantsCommunsCcie {
    var app: any;
}

declare module ComposantsCommunsCcie.Constantes {
    module Habilitations {
        var SAISIR_ENCADREMENT_IBAN: string;
        var GERER_LISTE_IBAN: string;
        var VALIDER_SAISIE_IBAN: string;
    }
    module Popup {
        var BOUTON_FERMER: string;
        var LIBELLE_ERREUR_DEFAULT: string;
        var LIBELLE_HEADER_DETAIL_FLUX: string;
        var LIBELLE_ERREUR_CHARGEMENT: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratserveurbancaire/v1/abonnementEdi"
 * @module ComposantsCommunsCcie.Modeles.AbonnementEdi
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Modeles.AbonnementEdi {
    interface IAbonnementEdi {
        listeCompteRattache: Array<ICompteRattache>;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface ICompteRattache {
        numeroAbonne: string;
        codeProtocole: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeOperationServeur: string;
        codeRetourEchange: number;
        libelleNomCENET: string;
        libelleSousFoncAEU: string;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    /**
     * Interface de la requête au service REST "contratserveurbancaire/v1/abonnementEdi" de type GET
     */
    interface IAbonnementEdiRestServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant l'application
 * @author S0077536 (Arnaud Despalins)
 */
declare module ComposantsCommunsCcie.Modeles.Commun {
    interface IParametres {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteProduitService: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratccieparametre/v1/natureCompte"
 * @module ComposantsCommunsCcie.Modeles.IbanContrat
 */
declare module ComposantsCommunsCcie.Modeles.IbanContrat {
    /**
     * Interface de la requête au service REST "contratccieparametre/v1/ibanContrat" de type GET
     */
    interface IParametreAppelGet {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Code Guichet Interbancaire
         */
        codeGuichetInterbancaire: string;
        /**
         * Numéro compte P/S
         */
        numeroComptePS: string;
        /**
         * Code action mode appel QR
         */
        codeAction: string;
    }
    interface IConsultationIBAN {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Code Guichet Interbancaire
         */
        codeGuichetInterbancaire: string;
        /**
         * Numéro compte P/S
         */
        numeroComptePS: string;
        /**
         * Numéro IBAN compte bénéficiaire
         */
        numeroIBANCompteBeneficiaire: string;
        /**
         * La date de création en Timestamp
         */
        dateCreation: string;
        /**
         * Code Etat IBAN autorisé
         */
        codeEtatIBAN: string;
        /**
         * Libellé bénéficiaire ultime
         */
        libelleBeneficiaireUltime: string;
        /**
         * Date de début d'activation
         * Type date au format yyyy-MM-dd
         */
        dateDebutActivation: string;
        /**
         * Date fin activation
         * Type date au format yyyy-MM-dd
         */
        dateFinActivation: string;
        /**
         * TS Clôture IBAN autorisé
         */
        timeStampClotureIBAN: string;
        /**
         * TS Validation IBAN autorisé
         */
        timeStampValidationIBAN: string;
        /**
         * Date/Heure dernière modification
         */
        dateHeureDerniereModification: string;
        /**
         * Ref ext agent création enreg
         */
        referenceExterneAgentCreation: number;
        /**
         * Ref ext agent suppression élément
         */
        referenceExterneAgentSuppressio: number;
        /**
         * Ref ext agent validation contrat
         */
        referenceExterneAgentValidation: number;
        /**
         * Référence externe agent modif
         */
        referenceExterneAgentModif: number;
        /**
         * Le nom d'usage de la personne physique
         */
        nomUsagePersonnePhysique: string;
        /**
         * Le premier prénom état civil de la personne
         */
        premierPrenomEtatCivilPersonne: string;
    }
    interface IGestionIBAN {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Code Guichet Interbancaire
         */
        codeGuichetInterbancaire: string;
        /**
         * Numéro compte P/S
         */
        numeroComptePS: string;
        /**
         * Référence externe agent modif
         */
        referenceExterneAgentModif: number;
        /**
         * Numéro IBAN compte bénéficiaire
         */
        numeroIBANCompteBeneficiaire: string;
        /**
         * Libellé bénéficiaire ultime
         */
        libelleBeneficiaireUltime: string;
        /**
         * Timestamp création
         */
        dateCreation: string;
        /**
         * Ref ext agent création enreg
         */
        referenceExterneAgentCreation: number;
        /**
         * Date début activation
         * Type date au format yyyy-MM-dd
         */
        dateDebutActivation: string;
        /**
         * Date fin activation
         * Type date au format yyyy-MM-dd
         */
        dateFinActivation: string;
        /**
         * Code Etat IBAN autorisé
         */
        codeEtatIBANAutorise: string;
        /**
         * Code action question gestion IBAN
         */
        codeActionQuestionGestionIBAN: string;
    }
    interface IListeIBAN {
        listeDesIBAN: Array<IConsultationIBAN>;
    }
    interface IIbanContrat {
        listeDesIBANDeConsultation: IListeIBAN;
        gestionDesIBAN: IGestionIBAN;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "entitetitulaire/v2/informationEntiteTitulaire"
 * @module ComposantsCommunsCcie.Modeles.InformationEntiteTitulaire
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Modeles.InformationEntiteTitulaire {
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        complementDesignationBancaire: string;
        codeEtatEntiteTitulaire: string;
        dateMAJEntiteTitulaire: string;
        codeMotifClotureEntiteTitulaire: string;
        dateClotureEntiteTitulaire: string;
        sousCodeModeCompositionET: string;
        codeAgentGestionEntiteTitulaire: number;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        codeTypeDesignationEntiteTitulaire: string;
        typeElementStructure: string;
        refExterneEDSDomiciliationET: number;
        refExterneEDSGestionET: number;
        identifiantEDSGuichet: number;
        identEDSGestionETNouveau: number;
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonneEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        natureLienET: string;
        pourcentageNuePropriete: number;
        pourcentagePleinePropriete: number;
        pourcentageUsufruit: number;
        nomCommercialProfessionnel: string;
        enseigneCommercialeLieuActivite: string;
        designationCourteLieuActivite: string;
        designationTiers: string;
        indicateurAffectationAdresse: boolean;
    }
    /**
     * Interface de la requête au service REST "entitetitulaire/v2/informationEntiteTitulaire" de type GET
     */
    interface IInformationEntiteTitulaireRestServiceGetQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratccie/v1/informationCci"
 * @module ComposantsCommunsCcie.Modeles.InformationCci
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Modeles.InformationCci {
    interface IInformationCci {
        caracteristiqueCci: ICaracteristiqueCci;
        soldeCci: ISoldeCci;
        personneMorale: IPersonneMorale;
        listePersonnePhysique: Array<IPersonnePhysique>;
        creReduit: ICreReduit;
        caracteristiqueET: ICaracteristiqueET;
    }
    interface IRice {
        codeEtablissement: string;
        codeGuichet: string;
        referenceProduitService: string;
    }
    interface ICaracteristiqueCci {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Détermine la nature du compte CCI. Permet de distinguer les activités des départements / directions des Etablissements du GCE
         * Exemple :
         * 'A01'      RH-paie
         */
        codeNatureCompte: string;
        /**
         * Premier intitulé du compte courant interne
         */
        libelle1Compte: string;
        /**
         * Deuxième intitulé du compte courant interne
         */
        libelle2Compte: string;
        /**
         * Code permettant de savoir dans quelle monnaie sont indiqués les montants des opérations du compte CCE.
         */
        codeMonnaieFonctionnement: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire
         * Une ET se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire: number;
        /**
         * Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
         * Système d'Identification du Répertoire des Entreprises
         * Identifie de manière unique une entreprise au niveau national
         */
        numeroSirenProfessionel: string;
        /**
         * Numéro d'identification de la personne
         */
        identifiantPersonne: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         */
        numeroOffreSouscrite: number;
        /**
         * Numéro d'identification d'un produit ou service
         */
        identifiantProduitService: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         */
        identifiantElementStructure: number;
        rice: IRice;
        /**
         * Ce code état permet de savoir si le compte courant interne est ouvert ou clos
         * '0'        Ouvert
         * '3'        Clos
         */
        codeEtatCci: string;
        /**
         * Libellé court de la nature de compte correspondant à un code nature.
         */
        libelleCourtNature: string;
        /**
         * Libellé long de la nature de compte correspondant à un code nature.
         */
        libelleLongNature: string;
        /**
         * Date d'ouverture d'un contrat de compte
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Date de clôture d'un contrat de compte
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * Détermine la devise utilisée pour la gestion du compte
         */
        codeDeviseTenueCompte: string;
        /**
         * Position en capital du compte établie à un instant donné
         * Situation comptabilisant les opérations imputées en date d'opération
         */
        soldeComptable: number;
        /**
         * Montant du solde disponible d'un compte à un instant donné
         * Montant en devise de tenue de compte
         * Solde dispo = Solde comptable
         *             + Découvert autorisé
         *             - Opérations écartées (MAD)
         *             - Impayés crédits
         *             - Réserves d'encaissement
         */
        soldeDisponible: number;
        /**
         * Détermine la date d'exécution de la dernière opération financière constatée sur un contrat à la date de situation/arrêté
         * Type date au format yyyy-MM-dd
         */
        dateDerniereOperation: string;
        /**
         * Montant de la dernière opération enregistrée sur un compte donné dans la journée
         */
        montantDerniereOperation: number;
        /**
         * Détermine le type de la dernière opération passée sur un compte
         */
        codeTypeDerniereOperation: string;
        /**
         * Devise d'expression d'un montant de mouvement / opération
         */
        codeDeviseMontant: string;
        /**
         * Indicateur encadrement CCI
         */
        indicateurEncadrementCCI: string;
    }
    interface ISoldeCci {
        rice: IRice;
        codeDeviseMontant: string;
        soldeCompteEuro: number;
        soldeDisponibleEuro: number;
        cumulReserveEncaissementEuro: number;
        cumulOperationEcarteEuro: number;
        soldeCompte1Euro: number;
        codeDeviseCompte: string;
        soldeCompteDevise: number;
        soldeDisponibleDevise: number;
        cumulReserveEncaissementDevise: number;
        cumulOperationEcarteDevise: number;
        soldeCompte1Devise: number;
    }
    interface IAdresse {
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        numeroTelephoneAdresse: string;
    }
    interface IPersonneMorale {
        codeEtablissement: string;
        numeroEntiteTitulaire: number;
        identifiantPersonne: number;
        indicateurResponsableEntite: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        raisonSociale: string;
        dateCreationJuridique: Date;
        adresse: IAdresse;
        codePostal: string;
        codePaysInsee: string;
        codePaysIso: string;
        codeAgentEconomique: string;
        codeFamilleCategorieJuridique: string;
        sigle: string;
        designationLieuActivite: string;
        numeroSiren: string;
        numeroComplementSiret: string;
        codeResident: string;
        codeFamilleAPE: string;
        dernierCaractereAPE: string;
        codeAppartenanceReseau: string;
        nomCommercial: string;
        typeDesignationPersonne: string;
        codeCategorieJuridique: string;
        rangPersonne: string;
        codePaysOMCR: string;
        codeTypeLienInterPersonne: string;
        codeFamilleLien: string;
        identifiantClientBAD: string;
    }
    interface IPersonnePhysique {
        codeEtablissement: string;
        numeroEntiteTitulaire: number;
        identifiantPersonne: number;
        indicateurPersonneResponsable: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: Date;
        nomLocalite: string;
        libelleNationalite: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        referencePieceJustificative: string;
        codeInseeLocalite: string;
        codeResident: string;
        numeroTelephoneTravail: string;
        codeFamilleLien: string;
        codeTypeLienInterPersonne: string;
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
        numeroComplementSiret: string;
        codeFamilleCategorieJuridique: string;
        codeFamilleAPE: string;
        dernierCaractereAPE: string;
        rangPersonne: string;
        codePaysOMCR: string;
        codePaysTitre: string;
        codepaysIso1: string;
        codePaysIso2: string;
        numeroIdentificationFiscale: string;
        codePostalFranceEtranger: string;
        libelleCommune: string;
        codeInseeLocaliteNaissance: string;
        designationCourteParticulier: string;
        dateDeces: Date;
        codeClientTiers: string;
        identifiantClientBAD: string;
        adresse: IAdresse;
    }
    interface ICreReduit {
        numeroCheque: string;
        nombreQuinzaine: number;
        montantSoldeAvantOperation: number;
        numeroNationalEmeteur: string;
        codeOperationOrigine: string;
        codeProvenanceLot: string;
        ancienneProvenanceLot: string;
        montantBrutOperation: number;
        referenceExterneAgent: number;
        typeElementStructure: string;
        typeMoyenPaiement: string;
        codeMonnaiePriseOrdre: string;
        codeMoyenPaiement: string;
    }
    interface ICaracteristiqueET {
        codeEtablissement: string;
        numeroEntiteTitulaire: number;
        codeTypeUsage: string;
        modeComposition: string;
        designationBancaire1: string;
        codeTypeDesignation1: string;
        designationBancaire2: string;
        designationBancaire3: string;
        designationBancaire4: string;
        designationBancaire5: string;
        codeTypeDesignation2: string;
        codeTypeDesignation3: string;
        codeTypeDesignation4: string;
        codeTypeDesignation5: string;
        identifiantElementStructure: number;
        libelleElementStructure: string;
        designationBancaireLongue: string;
        codeEtatPersonneEntite: string;
        dateFermetureEntite: Date;
        codeMotifCloture: string;
        dateEnregistrementEntite: Date;
        codeTypeElementStructure: string;
        codeEntiteAdministrative: string;
        libelleElementStructure1: string;
        identifiantElementStructure1: number;
        identifiantEDSContact: number;
        codeTypeElementStructureCont: string;
        codeEntiteAdministrative1: string;
        referenceExterneElementStruc1: number;
        referenceExterneElementStruc: number;
        referenceInterneElementStruc: number;
        typeElementStructure1: string;
        libelleElementStructure2: string;
        identifiantElementStructure2: number;
        referenceExterneElementStruc2: number;
        typeElementStructure2: string;
        libelleCalculeCourtEDS2: string;
        libelleCalculeCourtEDS1: string;
        designationLongueEDS1: string;
        designationLongueEDS2: string;
        referenceExterneAgent1: number;
        referenceExterneAgent2: number;
        libellePosteFonctionnel1: string;
        libellePosteFonctionnel2: string;
        codeCotationBancaire: string;
        typeIndivision: string;
    }
    /**
     * Interface de la requête au service REST "contratccie/v1/informationCci" de type GET
     */
    interface IInformationCciRestServiceGetQuery {
        typeRestitution?: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteProduitService: string;
        codeAction: string;
        codeTypeProduitService?: string;
        codeOrigineOperation?: string;
    }
    /**
     * Interface de la requête au service REST "contratccie/v1/informationCci" de type DELETE
     */
    interface IInformationCciRestServiceDeleteQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateClotureCompte: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "devise/v1/listeDevise"
 * @module ComposantsCommunsCcie.Modeles.ListeDevise
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Modeles.ListeDevise {
    interface IDevise {
        codeDevise: string;
        libelleDevise: string;
        symboleDevise: string;
        nombreDecimalesReelles: number;
        nombreDecimalesGerees: number;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratccieparametre/v1/natureCompte"
 * @module ComposantsCommunsCcie.Modeles.NatureCompte
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Modeles.NatureCompte {
    interface INatureCompte {
        codeNatureCompte: string;
        libelleCourtNatureCompte: string;
    }
    /**
     * Interface de la requête au service REST "contratccieparametre/v1/natureCompte" de type GET
     */
    interface INatureCompteRestServiceGetQuery {
        codeEtablissement: string;
    }
}

/**
 * Ensemble d'énumérations concernant le service REST "contratccie/v1/informationCci"
 * @module ComposantsCommunsProduitsNonGeres.Enumerations
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ComposantsCommunsCcie.Enumerations {
    enum InformationCciTypeRestitution {
        CARACTERISTIQUES,
        SOLDES,
    }
    enum InformationCciCodeAction {
        SYNTHESE_PRODUIT_CCI_SEUL,
        SYNTHESE_PRODUIT_CCI_MULTI,
        CRE_SOLDE_MINUTE,
        CRE_SOLDE_DISPONIBLE,
    }
}

/***
 * Service concernant le service REST "contratserveurbancaire/v1/abonnementEdi"
 * @module ComposantsCommunsCcie.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Services {
    /**
     * Classe du service
     */
    class AbonnementEdiService implements IAbonnementEdiService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la restitution des abonnements EDI d'un compte rattaché (pour Affichage infos)
         * Elle fournit pour un Rice, la liste des abonnements EDI et les services associés.
         * @param {Modeles.AbonnementEdi.IAbonnementEdiRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.AbonnementEdi.IAbonnementEdi>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.AbonnementEdi.IAbonnementEdiRestServiceGetQuery): ng.IPromise<Modeles.AbonnementEdi.IAbonnementEdi>;
    }
    /**
     * Interface du service
     */
    interface IAbonnementEdiService {
        sendGetRequest(query: Modeles.AbonnementEdi.IAbonnementEdiRestServiceGetQuery): ng.IPromise<Modeles.AbonnementEdi.IAbonnementEdi>;
    }
}

/***
 * Service concernant le service REST "contratccieparametre/v1/ibanContrat"
 * @module ComposantsCommunsCcie.Services
 */
declare module ComposantsCommunsCcie.Services {
    /**
     * Classe du service
     */
    class IbanContratService implements IIbanContratService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la restitution des iban
         */
        getIbanContrat(query: Modeles.IbanContrat.IParametreAppelGet): ng.IPromise<Modeles.IbanContrat.IIbanContrat>;
        /**
         * Méthode permettant l'ajout d'un IBAN
         * @param {Modeles.IbanContrat.IGestionIBAN} body - le modèle de donnée de la requête
         * @return {Modeles.IbanContrat.IGestionIBAN>} La promesse contenant les résultats
         */
        postIbanContrat(body: Modeles.IbanContrat.IGestionIBAN): ng.IPromise<Modeles.IbanContrat.IIbanContrat>;
        /**
         * Méthode permettant la modification d'un IBAN
         * @param {Modeles.IbanContrat.IGestionIBAN} body - le modèle de donnée de la requête
         * @return {Modeles.IbanContrat.IGestionIBAN>} La promesse contenant les résultats
         */
        putIbanContrat(body: Modeles.IbanContrat.IGestionIBAN): ng.IPromise<Modeles.IbanContrat.IIbanContrat>;
        /**
         * Méthode permettant la suppression d'un IBAN
         * @param {Modeles.IbanContrat.IGestionIBAN} body - le modèle de donnée de la requête
         * @return {Modeles.IbanContrat.IGestionIBAN>} La promesse contenant les résultats
         */
        deleteIbanContrat(body: Modeles.IbanContrat.IGestionIBAN): ng.IPromise<Modeles.IbanContrat.IIbanContrat>;
    }
    /**
     * Interface du service
     */
    interface IIbanContratService {
        getIbanContrat(query: Modeles.IbanContrat.IParametreAppelGet): ng.IPromise<Modeles.IbanContrat.IIbanContrat>;
        postIbanContrat(body: Modeles.IbanContrat.IGestionIBAN): ng.IPromise<Modeles.IbanContrat.IIbanContrat>;
        putIbanContrat(body: Modeles.IbanContrat.IGestionIBAN): ng.IPromise<Modeles.IbanContrat.IIbanContrat>;
        deleteIbanContrat(body: Modeles.IbanContrat.IGestionIBAN): ng.IPromise<Modeles.IbanContrat.IIbanContrat>;
    }
}

/***
 * Service concernant le service REST "entitetitulaire/v2/informationEntiteTitulaire"
 * @module ComposantsCommunsCcie.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Services {
    /**
     * Classe du service
     */
    class InformationEntiteTitulaireService implements IInformationEntiteTitulaireService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de manipuler les informations relatives à l'entité titulaire (également appelée Client Bancaire)
         * @param {Modeles.InformationEntiteTitulaire.IInformationEntiteTitulaireRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.InformationEntiteTitulaire.IInformationEntiteTitulaire>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.InformationEntiteTitulaire.IInformationEntiteTitulaireRestServiceGetQuery): ng.IPromise<Modeles.InformationEntiteTitulaire.IInformationEntiteTitulaire>;
    }
    /**
     * Interface du service
     */
    interface IInformationEntiteTitulaireService {
        sendGetRequest(query: Modeles.InformationEntiteTitulaire.IInformationEntiteTitulaireRestServiceGetQuery): ng.IPromise<Modeles.InformationEntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

/***
 * Service concernant le service REST "contratccie/v1/informationCci"
 * @module ComposantsCommunsCcie.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Services {
    /**
     * Classe du service
     */
    class InformationCciService implements IInformationCciService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la restitution : des caractéristiques d'un compte courant interne CCI des soldes minutes ou soldes disponibles
         * @param {Modeles.InformationCci.IInformationCciRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.InformationCci.IInformationCci>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.InformationCci.IInformationCciRestServiceGetQuery): ng.IPromise<Modeles.InformationCci.IInformationCci>;
        /**
         * Méthode permettant l'ouverture d'un contrat CCI
         * @param {Modeles.InformationCci.IInformationCci} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.InformationCci.IInformationCci>} La promesse contenant les résultats
         */
        sendPostRequest(query: Modeles.InformationCci.IInformationCci): ng.IPromise<Modeles.InformationCci.IInformationCci>;
        /**
         * Méthode permettant la modification d'un contrat CCI
         * @param {Modeles.InformationCci.IInformationCci} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.InformationCci.IInformationCci>} La promesse contenant les résultats
         */
        sendPutRequest(query: Modeles.InformationCci.IInformationCci): ng.IPromise<Modeles.InformationCci.IInformationCci>;
        /**
         * Méthode permettant la clôture d'un CCI
         * @param {Modeles.InformationCci.IInformationCciRestServiceDeleteQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<any>} La promesse contenant les résultats
         */
        sendDeleteRequest(query: Modeles.InformationCci.IInformationCciRestServiceDeleteQuery): ng.IPromise<any>;
    }
    /**
     * Interface du service
     */
    interface IInformationCciService {
        sendGetRequest(query: Modeles.InformationCci.IInformationCciRestServiceGetQuery): ng.IPromise<Modeles.InformationCci.IInformationCci>;
        sendPostRequest(query: Modeles.InformationCci.IInformationCci): ng.IPromise<Modeles.InformationCci.IInformationCci>;
        sendPutRequest(query: Modeles.InformationCci.IInformationCci): ng.IPromise<Modeles.InformationCci.IInformationCci>;
        sendDeleteRequest(query: Modeles.InformationCci.IInformationCciRestServiceDeleteQuery): ng.IPromise<any>;
    }
}

/***
 * Service concernant le service REST "devise/v1/listeDevise"
 * @module ComposantsCommunsCcie.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Services {
    /**
     * Classe du service
     */
    class ListeDeviseService implements IListeDeviseService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer la liste des devises
         * @return {MyWay.Services.IPromesse<Modeles.ListeDevise.IDevise[]>} La promesse contenant les résultats
         */
        getListeDevise(): ng.IPromise<Modeles.ListeDevise.IDevise[]>;
    }
    /**
     * Interface du service
     */
    interface IListeDeviseService {
        getListeDevise(): ng.IPromise<Modeles.ListeDevise.IDevise[]>;
    }
}

/***
 * Service concernant le service REST "contratccieparametre/v1/natureCompte"
 * @module ComposantsCommunsCcie.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsCcie.Services {
    /**
     * Classe du service
     */
    class NatureCompteService implements INatureCompteService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la restitution des natures de compte CCIE
         * @param {Modeles.NatureCompte.INatureCompteRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.NatureCompte.INatureCompte[]>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.NatureCompte.INatureCompteRestServiceGetQuery): ng.IPromise<Modeles.NatureCompte.INatureCompte[]>;
    }
    /**
     * Interface du service
     */
    interface INatureCompteService {
        sendGetRequest(query: Modeles.NatureCompte.INatureCompteRestServiceGetQuery): ng.IPromise<Modeles.NatureCompte.INatureCompte[]>;
    }
}

declare module ComposantsCommunsCcie.Modeles.Application {
    /**
     * Modèle de l'objet à passer en paramètre au service d'ouverture d'une fenêtre modale complexe
     */
    interface IPopupData<T> {
        closeButtonText: string;
        actionButtonText: string;
        headerText: string;
        iconName: string;
        bodyText: string;
        model?: T;
    }
}

declare module ComposantsCommunsCcie.Services {
    /**
     * Service contenant des méthodes utiles pour gérer le Habilitation applicatif
     */
    interface IHabilitationService {
        isHabiliteSaisirEncadrementIban: boolean;
        isHabiliteGererListeIbna: boolean;
        isHabiliteValiderSaisieIban: boolean;
        /**
         * Chargement des habilitations
         * Retour : tableau de booléens correspondant à chaque habilitations.
         */
        chargerHabilitation(): ng.IPromise<Array<boolean>>;
        estHabilite(codeHabilitation: string): ng.IPromise<boolean>;
    }
}

declare module ComposantsCommunsCcie.Services {
    interface IInitialisationService {
        authInfo: MyWay.Services.Context.AuthentificationInfo;
        getAuthInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        initialiserApplication(): ng.IPromise<any>;
        texteHeader: string;
    }
}

declare module ComposantsCommunsCcie.Services {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupService {
        /**
         * Permet d'ouvrir une popup simple d'informations
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
        /**
         * Ouverture d'une popup demandant la confirmation d'une action
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * @param {validerTexte} Texte du bouton de validation
         * @param {closeTexte} Texte du bouton de fermeture
         */
        showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>, dimension: string): ng.IPromise<any>;
    }
}
