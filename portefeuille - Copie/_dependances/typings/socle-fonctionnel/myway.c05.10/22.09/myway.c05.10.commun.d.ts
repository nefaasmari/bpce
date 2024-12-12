/** ne pas supprimer sert pour le done des tests asynchrones */
interface IDoneFn extends Function {
    (): void;
    /** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
    fail: (message?: Error | string) => void;
}

declare module myway.gestionEpargne.commun {
    var communModule: ng.IModule;
}

declare module myway.gestionEpargne.commun {
    /**
     * Constantes communes aux produits épargnes
     */
    class ConstantesCommunes {
        static OUVERTURE: string;
        static CLOTURE: string;
        static AVENANT: string;
        static MODE_PRECEDENT: string;
        static EMIT_REFERENCE_PRODUIT: string;
        static CSPR_DEFINIR_ROUTAGE_EDITIQUE: string;
        static CSPR_CHARGEMENT_EFFECTUE: string;
        static CSPR_QUITTER: string;
        static CONTEXTE_APPELANT_BDR: number;
        static CODE_RETOUR_MISE_EN_GESTION_EST_OK: number;
        static ERREUR_MONTANT_OPERATION_FINANCIERE: string;
        static CODE_LIBELLE_FORCAGE: string;
        static CODE_BADGE_FORCAGE: string;
        static CODE_LIBELLE_ERREUR_AUTRE: string;
    }
    class ProduitsServiceEpargne {
        static COMPTE_ATTENTE: string;
        static COMPTE_EPARGNE_LOGEMENT: string;
        static LIVRET_A: string;
        static LIVRET_B: string;
        static LIVRET_DEVELOPPEMENT_DURABLE: string;
        static LIVRET_EPARGNE_POPULAIRE: string;
        static LIVRET_GRAND_PRIX: string;
        static LIVRET_JEUNE: string;
        static PLAN_EPARGNE_LOGEMENT: string;
        static RELEVE_LIVRET: string;
    }
    class Contexte {
        static PARAMETRES_SERVEUR_POSTE: string;
    }
}

declare module myway.gestionEpargne.commun {
    class AjoutLSEService {
        private serviceAgentExtended;
        private ecureuilService;
        private existenceLSEService;
        private modalService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, ecureuilService: EcureuilService, existenceLSEService: ExistenceLSEService, modalService: MyWay.UI.ModalService);
        /**
         * Permet d'ajouter une offre dans un LSE
         * @param {string} codeEtablissement
         * @param {string} codeGuichet
         * @param {number} numeroPersonne
         * @param {string} numeroCompte
         * @param {string} dateNaissancePersonne
         * @returns {ng.IPromise<void>}
         */
        ajouterLSE(codeEtablissement: string, codeGuichet: string, numeroPersonne: number, numeroCompte: string, dateNaissancePersonne: Date): ng.IPromise<void>;
        /**
         * Permet de créer le body de la ressource PostLibreServiceEcureuil pour ajout de l'offre dans un LSE
         * @param {ContratLibreServiceEcureuil} contratLibreServiceEcureuil
         * @param {string} numeroCompte
         * @returns {ContratLibreServiceEcureuil}
         */
        creerBodyPutLibreServiceEcureuil(contratLibreServiceEcureuil: ContratLibreServiceEcureuil, numeroCompte: string): ContratLibreServiceEcureuil;
    }
}

/**
 * Ressource : /contratcarte/v1/libreServiceEcureuil
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/contratcarte/libreServiceEcureuil
 * Fichier généré le : 2016-12-29
 */
declare module myway.gestionEpargne.commun {
    class CompteDansAbonnement {
        /**
         * CODIRF
         * Référence d'identification d'un compte, service,
         * crédit ... détenu par un client d'un Etablissement
         * du GCE.
         */
        referenceProduitService: string;
        /**
         * NOKTRG
         * Rang utilisé par TIM pour la remontée des comptes LSE
         * au serveur monétique.
         */
        numeroRangDuCompte: string;
        /**
         * CODAQP
         * Définit le role d'une personne dans la gestion d'un
         * contrat (compte, service ...)
         */
        codeQualitePersonne: string;
        /**
         * COCXB6
         * Détermine l'Etablissement en relation d'affaires avec le client
         */
        codeEtablissementBanque: string;
        /**
         * COCXG2
         * Référence sous laquelle un guichet d'une Caisse (ou
         * d'un Etablissement du Groupe CE) est répertorié par
         * la Banque de France
         */
        codeGuichetInterbancaire: string;
        constructor();
    }
    interface ICompteDansAbonnement1 {
    }
    interface ICompteDansAbonnement2 {
    }
    interface ICompteDansAbonnement3 {
    }
    interface ICompteDansAbonnement4 {
    }
    interface ICompteDansAbonnement5 {
    }
    interface ICompteDansAbonnement6 {
    }
    interface ICompteDansAbonnement7 {
    }
    interface ICompteDansAbonnement8 {
    }
    interface ICompteDansAbonnement9 {
    }
    interface ICompteDansAbonnement10 {
    }
    interface ICompteDansAbonnement11 {
    }
    interface ICompteDansAbonnement12 {
    }
    class ContratLibreServiceEcureuil {
        /**
         * COCXBQ
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou
         * un Etablissement du réseau CE est répertoriée par la
         * Banque de France
         */
        codeEtablissementBanque: string;
        /**
         * NODAPE
         *  Numéro d'identification de la personne dans le
         *  SI d'un Etablissement qui servira aussi de référence avec le service
         */
        identifiantPersonne: number;
        contratCarte: Array<ContratCarte>;
        constructor();
    }
    class ContratCarte {
        /**
         * IDKRS1
         * Identifie une carte bancaire (support)
         * au format réduit sur 19 car
         */
        identifiantSupportCarte: string;
        /**
         * LIK0CR
         * Libelle du produit carte
         */
        libelleCodeProduitCarte: string;
        /**
         * COCXBQ
         * Code banque
         */
        codeEtablissementBanque: string;
        /**
         * COCXGU
         * Code Guichet de la caisse
         */
        codeGuichetInterbancaire: string;
        /**
         * NOGXCP
         * Numéro d'identification d'un compte géré par un
         * Etablissement du GCE.
         */
        numeroCompteSupportCarte: string;
        compteDansAbonnement: Array<CompteDansAbonnement>;
        compteHorsAbonnement: Array<CompteHorsAbonnement>;
        /**
         * NOKTCA
         * Numéro d'identification du contrat carte
         */
        numeroContratCarte: number;
        /**
         * il s'agit du code qualité agent du compte sur lequel porte la carte
         */
        codeQualiteAgentSupportCarte: string;
        constructor();
    }
    class CompteHorsAbonnement {
        /**
         * COCXBQ
         * Code Banque
         */
        codeEtablissementBanque: string;
        /**
         * COCXGU
         * Code Guichet
         */
        codeGuichetInterbancaire: string;
        /**
         * CODAQP
         */
        codeQualitePersonne: string;
        /**
         * NOGXCP
         */
        referenceProduitService: string;
        constructor();
    }
}

/**
 * Ressource : /contratcarte/v1/libreServiceEcureuil
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/contratcarte/libreServiceEcureuil
 * Fichier généré le : 2016-12-29
 */
declare module myway.gestionEpargne.commun {
    class EcureuilService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getLibreServiceEcureuil(codeEtablissementBanque: string, personneEnRelation: number, dateNaissancePersonne: Date): ng.IPromise<ContratLibreServiceEcureuil>;
        putLibreServiceEcureuil(contratLibreServiceEcureuil: ContratLibreServiceEcureuil, dateNaissancePersonne: Date): ng.IPromise<ContratLibreServiceEcureuil>;
    }
}

/**
 * Ressource : /contratcarteservice/v1/existenceLSE
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/contratcarteservice/existenceLSE
 * Fichier généré le : 2016-12-29
 */
declare module myway.gestionEpargne.commun {
    class ExistenceLSE {
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Code Guichet Interbancaire
         */
        codeGuichet: string;
        /**
         * Référence produit / service
         */
        numeroCompte: string;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * true = LSE existant
         * false = Pas de LSE
         */
        existence: boolean;
        constructor();
    }
}

/**
 * Ressource : /contratcarteservice/v1/existenceLSE
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/contratcarteservice/existenceLSE
 * Fichier généré le : 2016-12-29
 */
declare module myway.gestionEpargne.commun {
    class ExistenceLSEService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de vérifier l'existence d'un LSE
         * @param {string} codeEtablissement
         * @param {string} codeGuichet
         * @param {number} numeroPersonne
         * @param {string} numeroCompte
         * @param {string} dateNaissancePersonne
         * @returns {ng.IPromise<ExistenceLSE>}
         */
        getExistenceLSE(codeEtablissement: string, codeGuichet: string, numeroPersonne: number, numeroCompte: string, dateNaissancePersonne: Date): ng.IPromise<ExistenceLSE>;
    }
}

declare module myway.gestionEpargne.commun {
    interface IDemandeFicoba {
        /**
         * Cette variable va permettre d'indiquer que l'on peut faire une demande d'ouverture du Livret A
         */
        autorisationDemandeOuverture: boolean;
        informationsComplementaires: IInformationsComplementaires;
        informationsOperationVersement: IInformationsOperationVersement;
        informationsMobilite: IInformationsMobilite;
        informationsFicoba: IInformationsFicoba;
        releveSurLivret: IReleveSurLivret;
        autorisationsMineur: IAutorisationsMineur;
        informationsProduitEngage: IInformationsProduitEngage;
        etatDemande: IEtatDemande;
    }
    interface IEtatDemande {
        /**
         * Permet de savoir si c'est une demande que l'on doit faire ou partir directement vers l'ouverture de l'offre.
         */
        estDemande: boolean;
        /**
         * Permet de savoir si on est dans les cas d'une ouverture manuelle
         */
        estFicoba: boolean;
        numeroDossierVente?: number;
        dateCreation?: Date;
    }
    interface IInformationsProduitEngage {
        /**
         * Indicateur permettant de savoir si le client à souscrit ou non à l'option de Partage
         */
        indicateurPartage: boolean;
        /**
         * Identifiant du bénéficiaire choisis pour l'option de Partage
         */
        identifiantBeneficiaire: number;
        /**
         * valeur de taux choisi en fonction du Identifiant du bénéficiaire choisis pour l'option de Partage
         */
        valeurTauxPartage: number;
        /**
         * Indicateur permettant de savoir si le client à souscrit ou non à l'option de traçabilité
         */
        indicateurTracabilite: boolean;
        /**
         * Code de l'univers de traçabilité si l'indicateur est à vrai
         */
        codeUniversTracabilite: string;
    }
    interface IInformationsComplementaires {
        /**
         * permet d'indiquer si l'on veut ouvrir le Livret A automatiquement après vérification de FICOBA
         */
        ouvertureAutomatique: boolean;
        /**
         * Liste des services que l'on veut ajouter
         */
        services: Array<string>;
        /**
         * Cote type de livret A à ouvrir dans le process d'ouverture par étape.
         *
         * Valeurs:
         * - '01' = Particulier
         * - '02' = Association
         * - '03' = HLM
         */
        typeLivretA: string;
    }
    interface IInformationsOperationVersement {
        /**
         * Montant du versement initial
         */
        montantInitial: number;
        /**
         * Le libellé du versement
         */
        libelleVersement: string;
        comptePrelevement: IComptePrelevement;
        /**
         * Détermine une catégorie de compte dans la gestion des controles FICOBA des ouvertures de comptes concerne notamment le livret A.
         *
         * Valeurs :
         * - '0' = Compte client
         * - '1' = Compte tiers
         * - '2' = Compte technique
         */
        typeCompte: string;
    }
    interface IAutorisationsMineur {
        /**
         * Paramètre permettant de savoir si le client à le droit de retirer entre ses 16 et 18 ans
         */
        autorisationRetraitEntre16Et18: boolean;
        /**
         * Paramètre permettant de savoir si le client à le droit de retirer avant ses 16 ans
         */
        autorisationRetraitAvant16: boolean;
        /**
         * indique s'il y a la présence ou non d'un représentant légal ou non
         */
        presenceRepresentantLegal: boolean;
        /**
         * Numéro de personne du représentant légal présent
         */
        numeroPersonneRepresentantLegal: number;
    }
    interface IInformationsFicoba {
        /**
         * Le client autorise l’administration fiscale à communiquer les informations concernant d’éventuels livrets A qu’il détiendrait
         */
        autorisationAdminisFiscal: boolean;
        compteVersement: ICompteVersement;
    }
    interface IInformationsMobilite {
        /**
         * S’agit-il d’une mobilité ?
         */
        estMobilite: boolean;
        compteMobilite: ICompteMobilite;
        /**
         * Cet indicateur précise si l'on peut procéder à l'ouverture automatique du produit dans le cas d'une mobilité de compte
         */
        indicateurOuvAutoMobilite: boolean;
    }
    interface ICompteVersement {
        /**
         * code établissement du compte de versement
         */
        codeEtablissement: string;
        /**
         * code guichet du compte de versement
         */
        codeGuichet: string;
        /**
         * numéro du compte de versement
         */
        numeroCompte: string;
        /**
         * clé RIB du compte de versement
         */
        cleRIB: string;
    }
    interface IComptePrelevement {
        /**
         * code établissement du compte de pélèvement
         */
        codeEtablissement: string;
        /**
         * code guichet du compte de pélèvement
         */
        codeGuichet: string;
        /**
         * numéro du compte de pélèvement
         */
        numeroCompte: string;
        /**
         * clé RIB du compte de pélèvement
         */
        cleRIB: string;
    }
    interface ICompteMobilite {
        /**
         * code établissement du compte mobilite
         */
        codeEtablissement: string;
        /**
         * code guichet du compte mobilite
         */
        codeGuichet: string;
        /**
         * numero du compte mobilite
         */
        numeroCompte: string;
        /**
         * clé RIB du compte mobilite
         */
        cleRIB: string;
    }
    interface IReleveSurLivret {
        /**
         * numéro du jour de l'envoi du relevé (de 1 à 31)
         *
         * coté ressource : de 1 à 6 pour l'hebdomadaire (ce qui représente le jour de la semaine) de 01 à 31 pour Bi-mensuelle et mensuelle
         */
        jourArreteDuReleve: number;
        /**
         * Valeurs possibles :
         * - 'M' = Mensuelle
         * - 'B' = Bi-mensuelle
         * - 'H' = Hebdomadaire
         * - 'S' = Semestrielle
         * - 'A' = Annuelle
         */
        periodiciteEnvoiDuReleve: string;
        /**
         * - 'A'  = Relevé en clair à envoyer à l'agence
         * - 'B'  = Relevé braille à envoyer systématiquement au client
         * - 'D' = Relevé en clair à envoyer à l'adresse du client
         */
        modeEnvoiCourrier: string;
        /**
         * Indique si le relevé est en braille (O) oui (N) non
         */
        indicateurReleveBraille: boolean;
        /**
         * Détermine si on doit envoyer le RMP au gérant de tutelle et à la personne sous tutelle.
         * - 'O' On envoie aux deux destinataires (envoi d'un 2eme courrier)
         * - 'N' On n'envoie qu'au gérant
         */
        indicateurDoubleDestinataire: boolean;
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Structure de données pour les appel à la ressource REST de demande FICOBA
     */
    interface IDemandeFicobaParametres {
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        codeTypeUsage: string;
        identifiantProduitService: number;
        codeCanal?: string;
        numeroDossierVente?: number;
        codeActeGestion?: string;
        identifiantProduitServiceOffre?: number;
        modeFonctionnement?: string;
        indicateurPresenceEcheancier?: string;
    }
}

declare module myway.gestionEpargne.commun {
    class DemandeFicobaService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private demandeFicoba;
        demandeFicobaModeConsultation: string;
        demandeFicobaModeModification: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet d'obtenir les info du service rest ou du cache local
         * @param {IDemandeFicobaParametres} parametres
         * @returns {ng.IPromise<IDemandeFicoba>}
         */
        obtenirDemandeFicoba(parametres?: IDemandeFicobaParametres): ng.IPromise<IDemandeFicoba>;
        /**
         * Method GET
         * Obtient les informations de demande FICOBA
         * @param {DemandeFicobaParametres} parametres - query params
         */
        getDemandeFicoba(parametres: IDemandeFicobaParametres): ng.IPromise<IDemandeFicoba>;
        /**
         * Method POST
         * Permet de créer une demande FICOBA
         * @param {IDemandeFicoba} demandeFicoba
         * @param {IDemandeFicobaParametres} parametres
         */
        creerDemandeFicoba(demandeFicoba: IDemandeFicoba, parametres: IDemandeFicobaParametres): ng.IPromise<IDemandeFicoba>;
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Données communes aux produits épargne utilisé dans les services REST
     */
    class DonneesCommunes {
        /**
         * code interbancaire banque
         */
        codeEtablissement: string;
        /**
         * code guichet banque
         */
        codeGuichet: string;
        /**
         * Référence produit/service
         */
        numeroCompte: string;
        /**
         * code type produit service
         */
        codeProduit: string;
        /**
         * code monnaie tenue compte
         */
        codeDevise: string;
        /**
         * IDEGPS
         */
        identifiantProduitService: number;
        /**
         * Solde compte/devise tenue compte
         */
        montantSoldeCompte: number;
        /**
         * code état du produit/service
         */
        codeEtatProduit: string;
        /**
         * date d'ouverture du P/S
         */
        dateCloture: Date;
        /**
         * date clôture P/S
         */
        dateOuverture: Date;
        plafondProduit: string;
        /**
         * Montant intérêt anticipés
         */
        montantInteretsAnticipes: number;
        constructor(codeEtablissement?: string, codeGuichet?: string, codeProduit?: string, codeDevise?: string, identifiantProduitService?: number, numeroCompte?: string);
    }
    /**
     * Données communes étendues pour Partage et traçabilité CREDIT COOP
     */
    class DonneesCommunesExtended extends DonneesCommunes {
        /**
         * Indicateur permettant de savoir si le client à souscrit ou non à l'option de Partage
         */
        indicateurPartage: boolean;
        /**
         * Identifiant du bénéficiaire choisis pour l'option de Partage
         */
        identifiantBeneficiaire: number;
        /**
         * valeur de taux choisi en fonction du Identifiant du bénéficiaire choisis pour l'option de Partage
         */
        valeurTauxPartage: number;
        /**
         * Indicateur permettant de savoir si le client à souscrit ou non à l'option de traçabilité
         */
        indicateurTracabilite: boolean;
        /**
         * Code de l'univers de traçabilité si l'indicateur est à vrai
         */
        codeUniversTracabilite: string;
        /**
         * Libellé d'un univers de traçabilité. Il est associé au code COGXUT (code univers de traçabilité)
         */
        libelleUniversTracabilite: string;
        /**
         * Désignation de la personne morale
         */
        raisonSociale: string;
        constructor(codeEtablissement?: string, codeGuichet?: string, codeProduit?: string, codeDevise?: string, identifiantProduitService?: number, numeroCompte?: string);
    }
    /**
     * OperationFinanciere utilisé par le service rest, il n'expose que ce qui est necessaire pour éviter
     * d'utiliser le modele complet de la BAT
     */
    class OperationFinanciere {
        /**
         * mode financier numerique
         * ex
         * '00' : Virement operation Diverse
         * '01' : Especes
         * ...
         */
        modeFinancierNumerique: string;
        /**
         * Code évènement financier ATOME
         * ex :
         *   'O01'      Ouverture simple
         */
        codeEvenementAtome: string;
        /**
         * Code mode financier
         *      Valeurs :
         * 'ESP'      Espèces
         * 'CHQ'      Chèque
         * 'VIR'      Virement interne
         * 'DIV'      Divers
         * 'AUT'      Automatique
         * 'VIO'      Virement opération diverse
         * 'CHC'      Chèque CNCE émis
         * 'CHB'      Chèque de banque émis
         */
        modeFinancierChoisi: string;
        libelleOperation1: string;
        libelleOperation2: string;
        infosOperationDiverse: InfosOperationDiverse;
        infosCheque: InfosCheque;
        infosVirementInterne: InfosVirementInterne;
        codeDeviseOperation: string;
        montantOperation: number;
        /**
         * Date de valeur de l'opération au format C
         * ex  01102015
         */
        dateValeurOperation: Date;
        constructor();
    }
    /**
     * Informations pour OperationFinanciere par chèque
     */
    class InfosCheque {
        riceCompteVirement: string;
        typeCheque: string;
        nombreJourReserveEncaissement: string;
        constructor();
    }
    /**
     * Informations pour OperationFinanciere divers
     */
    class InfosOperationDiverse {
        codeReference: string;
        libelleType: string;
        codeFamille: string;
        libelle1Saisi: string;
        libelle2Saisi: string;
        constructor();
    }
    /**
     * Information pour OperationFinanciere par virement interne
     */
    class InfosVirementInterne {
        riceCompteVirement: string;
        libelleVirement: string;
        constructor();
    }
    /**
     * Information d'identification d'un compte
     */
    class InfosCompte {
        codeGuichet: string;
        codeEtablissement: string;
        numeroCompte: string;
        constructor();
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Données utilisées pour mapper le contexte de la Justif LEP (transaction 0572)
     */
    class AuthentificationInfo {
        agentConnecte: AgentConnecte;
        numeroStationTravail: string;
        codeEtablissement: string;
        $$hashKey: string;
    }
    class AgentConnecte {
        designationPosteFonctionnel: string;
        numeroExterneEds: number;
        referenceExterneAgent: string;
        libelleEds: string;
        ligne4Adresse: string;
        designationLongueAgent: string;
        prenom: string;
        ligne5Adresse: string;
        nomUsagePersonnePhysique: string;
        ligne3Adresse: string;
        dateFinValidite: number;
        typeFonction: string;
        ligne6Adresse: string;
        adresseMessagerie: string;
        typeEds: string;
        nomFamillePersonnePhysique: string;
        dateDebutValidite: string;
        referenceExterneEdsRattachemen: string;
        numeroEdsSuperieur: number;
        codeCivilite: string;
        codeIndicateurFinStructure: string;
        typeEdsRattachement: string;
        numeroInterneEds: number;
        NODATP: string;
        ligne2Adresse: string;
        libelleTypeEds: string;
        identifiantInterneSite: number;
        codeQualiteAgent: string;
    }
    class ParametresComptables {
        codeGuichetInterbancaire: string;
        edsInterneGuichetComptable: string;
        edsExterneGuichetComptable: string;
        edsTypeGuichetComptable: string;
        edsInterneRattachementGuichetComptable: string;
        edsExterneRattachementGuichetComptable: string;
        edsTypeRattachementGuichetComptable: string;
        dateOperationJourneeComptable: string;
    }
    class JustifLepContexte {
        numeroCompte: string;
        codeGuichet: string;
    }
    class Habilitations {
        codesHabilites: string[];
        timestamp: number;
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Objet d'encapsulation des flags d'appel de la directive principale,
     * utilisé pour la transmission des flags à des sous directives
     */
    class IndicateursOffre {
        /**
         * Flag d'appel de la vue récapitulative
         */
        enRecapitulatif: boolean;
        /**
         * Flag d'appel de la vue de personnalisation
         */
        enPerso: boolean;
        /**
         * Flag d'appel de la directive en ouverture de produit
         */
        enOuverture: boolean;
        /**
         * Flag d'appel de la directive en avenant de produit
         */
        enModification: boolean;
        /**
         * Flag d'appel de la directive en cloture de produit
         */
        enCloture: boolean;
        /**
         * Flag d'appel de la directive en retour de la vue récapitulative vers la personnalisation
         */
        modeRevenir: boolean;
        /**
         * Flag d'appel de la directive en canal de vente à distance
         */
        enVAD: boolean;
        /**
         * Flag d'appel de la directive en réstitution d'un dossier de vente
         */
        enRestitutionDV: boolean;
        constructor();
    }
    /**
     * contrat de d'interface pour les controleurs produits épargnes
     */
    interface IControleur {
        /**
         * Flags d'appel
         */
        indicateursOffre?: IndicateursOffre;
        enRecapitulatif: boolean;
        enPerso: boolean;
        enOuverture: boolean;
        enModification: boolean;
        enCloture: boolean;
        modeRevenir: boolean;
        enVAD?: boolean;
        enRestitutionDV?: boolean;
        contexteAppelantBdr?: boolean;
        /**
         * Données contextuelles de GGO
         */
        contexteAppel: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        enBdr?: boolean;
        codeCanal?: string;
        /**
         * Données de compte
         */
        numeroCompte: string;
        /**
         * numéro de bordereau d'operation
         */
        bordereau: number;
        /**
         * Numéro de personne du titulaire
         */
        numeroPersonne: number;
        /**
         * BAT OperationFinanciere
         */
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        /**
         * Montant à afficher dans le bordereau si ce n'est pas juste le montant de l'OperationFinanciere
         */
        montantBordereau?: number;
        /**
         * BAT échéancier
         */
        versementPeriodique?: MyWay.Model.VersementPeriodique;
        /**
         * Flag d'utilisation du versement régulier
         */
        versementActif?: boolean;
        /**
         * Paramétrage de la BAT echéancier
         */
        parametreVersementPeriodique?: MyWay.Model.ParametreVersementPeriodique;
        /**
         * Compte rendu de mise engestion
         */
        compteRenduMiseEnGestion: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion;
        /**
         * Tableau des erreurs survenues lors de la mise en gestion
         */
        tabErreursMiseEnGestion: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Tableau des erreurs survenues lors de la validation
         */
        tabErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Données du produit engagé CREDIT COOP
         */
        donneesProduitEngage?: myway.transProduitEngage.Model.DonneesProduitEngage;
        /**
         * Formulaire produit engagé CREDIT COOP
         */
        formulaireProduitEngage?: myway.transProduitEngage.ProduitEngageFormulaire;
        /**
         * Indicateurs CREDIT COOP pour avenant
         */
        infoPartageTracab?: myway.transProduitEngage.IInfoPartageTracab;
        /**
         * Fonction d'initialisation des paramètres et du body des requetes REST épargne
         */
        initQueryAndBodyCaracteristiqueGeneral(modeFonctionnement: string): void;
        /**
         * Fonction de validation de données de l'offre en ouverture
         */
        validerOffreOuverture(): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        /**
         * Fonction de mise en gestion de l'offre en ouverture
         */
        miseEnGestionOffreOuverture(): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        /**
         * Fonction de mise en gestion de l'offre en avenant (hors avenant simple)
         */
        miseEnGestionOffreAvenant?(): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Information sur la devise utilisé dans le compte (euros, dollars, etc.)
     */
    class Devise {
        codeDevise: string;
        libelleDevise: string;
        symboleDevise: string;
        nombreDecimalesReelles: number;
        nombreDecimalesGerees: number;
        constructor();
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Modele d'objet personne pour la récupération d'information sur l'entité titulaire
     */
    class Personne {
        codeEtablissement: string;
        identifiantPersonne: number;
        indiceResponsableET: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLiensInterPersonnes: string;
        numeroRangPersonneET: string;
        identifiantEntiteTitulaire: number;
        /**
         * Défini le type de personne.
         * |code|description|
         * |---|---|
         * |P|Personne physique|
         * |M|Personne moral|
         */
        codeTypePersonne: string;
        /**
         * Rang Ancien Etat Civil
         */
        rangAncienEtatCivil: string;
        /**
         * codePersonnaliteJuridique
         *
         * |code | Description |
         * |--- | --- |
         * |00 | MINEUR SOUS MESURE AIDE GESTION BUDGET FAMILIAL MAGBF|
         * |01 | MINEUR EMANCIPE|
         * |02 | MINEUR SOUS ADMINISTRATION LEGALE PURE ET SIMPLE|
         * |03 | MINEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE|
         * |04 | MINEUR SS TUTELLE COMPLETE(TUTEUR+SUBROGE TUT.+ JUGE)|
         * |05 | MINEUR SOUS TUTELLE D'ETAT|
         * |06 | MINEUR SOUS ADMINISTRATION AD HOC|
         * |07 | MAJEUR CAPABLE|
         * |08 | MAJEUR SOUS SAUVEGARDE DE JUSTICE|
         * |09 | MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT DONNE|
         * |10 | MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT SPECIAL|
         * |11 | MAJEUR SOUS CURATELLE SIMPLE|
         * |12 | MAJEUR SOUS CURATELLE RENFORCEE|
         * |13 | MAJEUR SOUS TUTELLE COMPLETE|
         * |14 | MAJEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE|
         * |15 | MAJEUR SOUS TUTELLE|
         * |16 | MAJEUR SS MESURE ACCOMP. SOCIAL PERSONNALISE (MASP)|
         * |17 | MAJEUR SS MESURE ACCOMP. JUDICIAIRE (MAJ)|
         * |18 | MAJEUR SS MESURE AIDE GESTION BUDGET FAMILIAL (MAGBF)|
         * |19 | MAJEUR SS MANDAT DE PROTECTION FUTURE SIMPLE|
         * |20 | MAJEUR SS MANDAT DE PROTECTION FUTURE ETENDU|
         */
        codePersonnaliteJuridique: string;
        dateFin: Date;
        dateDebut: Date;
        informationPersonneMoral: InformationPersonneMoral;
        informationPersonnePhysique: InformationPersonnePhysique;
    }
    /**
     * Objet Modele de personne morale pour la récupération d'information sur l'entité titulaire
     */
    class InformationPersonneMoral {
        raisonSocial: string;
    }
    /**
     * Objet Modele de personne physique pour la récupération d'information sur l'entité titulaire
     */
    class InformationPersonnePhysique {
        nomFamille: string;
        nomUsage: string;
        prenom: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeMandat: string;
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Objet generique de l'épargne à renvoyer dans le compte rendu de l'editique
     */
    class ObjetGeneriqueC0510 {
        numeroDeCompte: string;
        codeGuichet: string;
        codeEtablissement: string;
        identifiantBordereau: string;
        identifiantDossierVirementSepa: string;
        constructor();
    }
}

declare module myway.gestionEpargne.commun {
    class IndicateursPartageTracabilite {
        /**
         * Indicateur permettant de savoir si la valeur d'option par rapport au paramétrage du partage est renseignée.
         * - True = Valeur d'option retournée
         * - False = Valeur d'option non retournée
         */
        indicateurPartageVisible: boolean;
        /**
         * Indicateur permettant de savoir si la valeur d'option par rapport au paramétrage de la traçabilité est renseignée.
         * - True = Valeur d'option retournée
         * - False = Valeur d'option non retournée
         */
        indicateurTracabiliteVisible: boolean;
    }
    class ParametresRequetePartageTracabilite {
        /**
         * Code Etablissement
         */
        codeEtablissement: string;
        /**
         * Code Type Opération : Exemple 'OU' pour ouverture ou 'AV' pour Avenant
         */
        codeTypeOperation: string;
        /**
         * IDEGPS
         */
        identifiantProduitService: number;
    }
}

declare module myway.gestionEpargne.commun.DossierDeVente {
    /**
     * Structure de donn?es pour les appel ? la ressource REST de demande FICOBA
     */
    interface IRecherche {
        critereConsultation: ICritereConsultation;
        listeDossierVente: Array<IDossierVente>;
    }
    interface ICritereConsultation {
        /**
         * Obligatoire, contr?l? par QR
         * -1 : recherche de la liste des dossiers d'une personne
         * -2 : recherche de la liste des dossiers des personnes composant la relation ?conomique
         * -3 : recherche de la liste des dossiers d'une personne et des personnes composant la relation ?conomique
         * -4 : recherche de la liste des dossiers affect?s/cr??s/confirm?s par un agent
         * -5 : recherche par un num?ro de dossier de vente ou l?identifiant externe dossier de vente et son code externe
         */
        typeRecherche: string;
        /**
         * R?f?rence d'identification d'un Etablissement bancaire  ou financier utilisant la plateforme bancaire Mysys.
         * Donn?e obligatoire, contr?l? par la QR.
         */
        codeEtablissementCritere: string;
        /**
         * Num?ro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys                                         Personne r?f?renc?e comme client, tiers ou prospect.
         * Obligatoire pour type de recherche 1, 2 et 3.
         */
        identifiantPersonne?: number;
        /**
         * Num?ro d'identification d'un client d?tenteur de contrat(s) de produit/service dans le SI d'un Etablissement bancaire ou financier sur la plateforme Mysys.
         * Crit?re facultatif .
         */
        identifiantClient?: number;
        /**
         * Obligatoire pour le typeRecherche 2 et 3 contr?l? par QR
         * D?termine une composition type de relation (entit? ?conomique)
         * Valeurs possibles :
         * -'1' personnes physiques rattach?es ? la relation
         * -'2' personnes physiques rattach?es ? la relation + activit?s pro + personnes morales
         * -'3' personnes physiques rattach?es ? la relation + personnes physiques li?es et non rattach?es
         */
        typeCompositionRelation?: string;
        /**
         * 'Obligatoire contr?l? par QR
         * 'I'= IHM Caisse,'C'= IHM Client,'S'=SPA CONS DV , 'P' = DECP
         */
        typeAppelant: string;
        /**
         * R?f?rence externe de l'agent de cr?ation du dossier de vente.
         * Obligatoire pour le typeRecherche 4 si referenceExterneAgentModification ou referenceExterneAgentAffect? non renseign?
         * contr?l? par QR.
         */
        referenceExterneAgentCreation?: number;
        /**
         * R?f?rence externe de l'agent de modification du dossier de vente.
         * Obligatoire pour le typeRecherche 4 si referenceExterneAgentCreation ou referenceExterneAgentAffect? non renseign?
         * contr?l? par QR
         */
        referenceExterneAgentModif?: number;
        /**
         * R?f?rence externe de l'agent d'affectation du dossier de vente.
         * Obligatoire pour le typeRecherche 4 si referenceExterneAgentCreation ou referenceExterneAgentModification non renseign?
         * contr?l? par QR
         */
        referenceExterneAgentAffecte?: number;
        /**
         * Il s'agit de l'identifiant ?l?ment de structure interne de l'agent de cr?ation.
         * Crit?re facultatif
         */
        identifiantEDSinterneCreation?: number;
        /**
         * Canal de vente courant:
         * Exemples:
         * -'IN'       Internet
         * -'TL'       T?l?phone
         * -'FF'       Face ? face
         * Crit?re facultatif.
         */
        canalVenteCourant?: string;
        /**
         * Cette rubrique sp?cifie l'entit? type de l'organisation ayant cr?? le dossier de vente. Valeurs :
         *
         * -'1' = Agence
         * -'2' = CRC
         * -'3' = E-Agence
         * -'4' = Internet
         * -'5' = Administratif
         * Crit?re facultatif.
         */
        codeEntiteVenteCreation?: string;
        /**
         * Num?ro d'identification d'un poste fonctionnel d'un Etablissement du GCE.
         * Obligatoire si PF externe non renseign?s.
         */
        codeEDSInternePFContexte?: number;
        /**
         * R?f?rence externe EDS.
         * Obligatoire PF interne non renseign?.
         */
        codeEdsExternePFContexte?: number;
        /**
         * Indique le type organisationnel d'un ?l?ment de structure d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Obligatoire si code EDS externe renseign?.
         */
        typeEdsExterneContexte?: string;
        /**
         * D?termine le mode de contractualisation soit ?lectronique, soit papier, soit double clic  (uniquement sur Internet, ? partir de la mise en placde Myway)
         *  Valeurs:
         *  -'I'        Ind?termin?
         * - 'P'        Papier
         * - 'E'        Electronique
         * - 'D'        Double clic
         * Crit?re facultatif
         */
        modeDeSignature?: string;
        /**
         * D?termine une situation de gestion caract?ristique du
         * dossier de vente .
         * Valeurs :
         * -'01'       Non encore valid?
         * -'02'       En attente envoi documents
         * -'03'       En attente de retours
         * -'04'       Actions ? mener dans le SI
         * -'05'       Termin?
         * -'06'       Hors d?lai
         * Crit?re facultatif
         */
        momentVie?: string;
        /**
         * D?termine le statut de l'?tape du processus de vente
         * ? un instant donn?.
         * Exemples:
         * -'VENA'     Vente non aboutie
         * -'VECS'     Vente ? cl?turer SI
         * -'EAFI'     Vente ? finaliser
         * Crit?re facultatif
         */
        statutEtape?: string;
        /**
         * Classification des statuts des ?tapes des processus
         * de vente .
         * Permet de regrouper les statuts qui ont le m?me
         * libell?.
         * Exemples :
         * -'ERMG'     Erreur, ? ouvrir manuellement
         * -'EAMA'     Ouverture en cours
         * Crit?re facultatif.
         */
        familleStatut?: string;
        /**
         * Cet indicateur permet de restituer les dossiers pour laquelle la personne est signataire:
         * Valeur possible :
         * -'O' : on restitue les dossiers pour laquelle est titulaire et ou signataire
         * -'N' : on restitue les dossier pour laquelle la personne est titulaire.
         * Crit?re facultatif
         */
        personneSignataire?: string;
        /**
         * D?termine un acte de gestion dans le catalogue des processus/op?rations de la gestion bancaire.
         * Un acte de gestion est une op?ration sur un produit /service ou une prestation ? la client?le.
         * Format :  concat?nation de code sous famille acte de gestion et code objet acte de gestion
         * Exemples :
         * - 'AV00000821' = Avenant BOUQUET LIBERTE
         * - 'OU00000761' = OUVERTURE FORFAIT SATELLIS INTEGRAL.
         * Crit?re facultatif.
         */
        codeActeGestionPrincipal?: string;
        /**
         * Num?ro d'identification d'une offre de vente du catalogue de distribution de la gestion du dossier de  vente.
         * Une offre correspond ? une prestation (op?ration) sur un produit / service.
         * Une offre est associ?e ? un code produit service national.
         * Exemples :
         * - '109' = Souscription offre bouquet libert?
         * - '173' = Souscription Pr?t Personnel Auto IZIVENTE
         * Crit?re facultatif
         */
        offre?: number;
        /**
         * Identifie le contrat support du dossier de vente. Permet d'afficher en ent?te des ?crans GGO le compte support.
         * Format de la rubrique : donn?e cadr?e ? gauche, compl?t?e par des blancs ? droite,
         * Exemple :
         * - 'FR7611425002000403809356890'
         * Crit?re facultatif
         */
        numeroCompte?: string;
        /**
         * Num?ro d'identification du dossier de vente.
         * Un dossier de vente g?re la vente d'une offre ? un client donn? (souscription de contrat de produit ou service, op?ration sur un contrat, avenant ...)
         * Le dossier de vente m?morise les donn?es de la proposition / souscription de l'offre commerciale ou de l'op?ration : contexte de l'acte et caract?ristiques du produit / service.
         * Cet identifiant est attribu? par le central-DB2 ? la cr?ation du dossier de vente.
         * Exemple :
         * - 12413558
         * Crit?re obligatoire en recherche de type 5 si identifiant externe dossier vente non renseign?.
         */
        identifiantDossierVente?: number;
        /**
         * R?f?rence du dossier fournie par le producteur qui g?re l'offre.
         * Cette r?f?rence producteur permet d'associer les diff?rents CRE ?mis par le producteur au dossier de vente concern?.
         * Exemples :
         * - 'FFI136593693' = n? FFI pour les Cr?dits Conso Nafi.
         * Obligatoire en recherche de type 5 si identifiant dossier de vente non renseign?.
         */
        identifiantExterneDossierVente?: string;
        /**
         * Code de d?signation externe de l'application dans la gestion des dossiers de vente.
         * Concerne notamment les ?changes avec les producteurs.
         * Exemples :
         * - 'BPCEA_IMPACT' : Assurances
         * - 'NFI_IZIVENTE' : Natixis & Natixis Financement.
         * Obligatoire en recherche de type 5 si identifiant externe dossier de vente renseign?.
         */
        codeExterneApplication?: string;
        /**
         * Crit?re de recherche de date de cr?ation minimum d'un dossier de vente .
         * Le format est date et heure mais seul la date est retenue pour la recherche.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateDebutCreation?: string;
        /**
         * Crit?re de recherche de date de cr?ation maximum d'un dossier de vente .
         * Le format est date et heure mais seul la date est retenue pour la recherche.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateFinCreation?: string;
        /**
         * Crit?re de recherche de date de modification minimum d'un dossier de vente .
         * Le format est date et heure mais seul la date est retenue pour la recherche.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateDebutModification?: string;
        /**
         * Crit?re de recherche de date de modification maximum d'un dossier de vente .
         * Le format est date et heure mais seul la date est retenue pour la recherche.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateFinModification?: string;
        /**
         * Crit?re de recherche de date de relance minimum d'un dossier de vente .
         * Le format est date et heure mais seul la date est retenue pour la recherche.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateDebutRelance?: string;
        /**
         * Crit?re de recherche de date de relance maximum d'un dossier de vente .
         * Le format est date et heure mais seul la date est retenue pour la recherche.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateFinRelance?: string;
        /**
         * Crit?re de recherche de date de signature minimum d'un dossier de vente .
         * Le format est date et heure mais seul la date est retenue pour la recherche.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateDebutSignature?: string;
        /**
         * Crit?re de recherche de date de signature maximum d'un dossier de vente .
         * Le format est date et heure mais seul la date est retenue pour la recherche.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateFinSignature?: string;
        /**
         * Indicateur obligatoire.
         * Il permet la restitution ou non des dossiers VMC.
         * Valeurs:
         * -'O' : dossier uniquement MyWay
         * -'N': restitution dossier MyWay et VMC
         */
        indicRestDVMyWay: string;
        /**
         * Indicateur obligatoire.
         * Il permet la restitution ou non des JSON (resume et m?tier r?f?rence) associ?s au dossier de vente.
         * Valeurs:
         * -'O' restitution des JSON
         * -'N' pas des restitution des JSON
         */
        indicRestJSONResume: string;
        /**
         * Indicateur obligatoire.
         * Il permet la restitution ou non des actions possible associ?s au dossier de vente.
         * Valeurs:
         * -'O' restitution des actions possible.
         * -'N' pas des restitution des actions possible.
         */
        indicRestActionPossible: string;
        /**
         * Indicateur facultatif permettant le restitution des dossiers VPC.
         * Valeurs:
         * -'1' restitution des dossiers VPC
         * -'0' non restitution des dossiers VPC.
         * Cet indicateur fonctionne avec l'indicateur MEGI, si l'indicateur MEGI est ? '1' l'indicateur VPC doit ?tre ? '0' et inversement.
         */
        indicVPC?: string;
        /**
         * Indicateur facultatif permettant le restitution des dossiers MEGI.
         * Valeurs:
         * -'1' restitution des dossiers MEGI
         * -'0' non restitution des dossiers MEGI.
         * Cet indicateur fonctionne avec l'indicateur VPC, si l'indicateur VPC est ? '1' l'indicateur MEGI doit ?tre ? '0' et inversement.
         */
        indicMEGI?: string;
    }
    interface IDossierVente {
        listeActionPossible: Array<IActionPossible>;
        listeCompositionDossier: Array<ICompositionDossier>;
        donneeDossier: IDonneeDossier;
        listeDonneePersonne: Array<IDonneePersonne>;
        donneeSignature: IDonneeSignature;
        etatDossier: IEtatDossier;
        referenceDossierVente: IReferenceDossierVente;
    }
    interface IActionPossible {
        /**
         * D?termine un acte dans le processus de vente de la gestion des dossiers de vente.
         * Une action repr?sente ce qui peut ?tre fait pour faire progresser le processus de vente.
         * Une action peut se traduire par un bouton ou une ic?ne  dans l'IHM charg? de client?le ou dans l'espace client, une action  peut ?galement ?tre disponible uniquement pour les traitements hors IHM.
         * Cette rubrique contient un code action qu'il sera possible d'effectuer sur le dossier.
         * Exemples :
         * - VECO : vente confirm?e
         * - ANNU : annuler dossier de vente
         * - MIGE : appeler l'application qui r?alise la mise en gestion
         */
        codeActionPossible: string;
        /**
         * Libell? associ? ? un code action, ? destination du charg? de client?le pour IHM MyWay.
         * Exemples :
         * - 'Imprimer et envoyer' pour le code action DOTR
         * - 'Valider' pour le code action VALI
         */
        libelleActionPossibleAgent: string;
        /**
         * Libell? associ? ? un code action, ? destination du client (dans l'espace client sur internet par exemple).
         * Exemples :
         * - 'Abandon signature ?lectronique'
         */
        libelleActionPossibleClient: string;
        /**
         * d?termine le contexte d'une action effectu?e sur le poste MyWay.
         * Valeurs :
         * - 'V'        Virtuel (non pr?sent? ? l'utilisateur),
         * - 'O'        Op?ration (code op?ration fonctionnelle, appel autre appli ou pop-up),
         * - 'S'        Bouton Sp?cial (ABAN ANNU),
         * - 'E'        Action retour Editique (r?gle sp?ciale),
         * - 'B'        Bouton.
         */
        codeTypeActionPossible: string;
        /**
         * D?termine l'action ? effectuer en cas de bouton uniquement (codeTypeActionPossible=B). Permet d'optimiser les temps de traitement, et d'?viter des rappels ? la ressource pour donner la suite.
         * Pour un bouton, il n?y a toujours qu?un seul code op?ration fonctionnel possible.
         */
        codeOperationFonctionnelle: string;
        /**
         * Indique le rang d'un bouton associ? ? une action.
         */
        rangBoutonAction: number;
    }
    interface ICompositionDossier {
        /**
         * Nom de la classe objet sans son chemin d'acc?s qui permet d'identifier la classe objet renseign?e dans les donn?es g?n?riques au format JSON, associ?es ? une
         * offre de vente.
         * Ce nom sera pr?fix? de :
         * - "DATA_" pour les donn?es process m?tier
         * - "MDEC_" pour les donn?es MDEC, et pour les donn?es de l'?cran de consultation. La distinction entre MDEC et l'?cran de consultation se fera ? l'int?rieur des donn?es JSON.
         * - "MDPJ_" pour donn?es sur les pi?ces justificatives concernant MDEC et l'?cran de consultation.
         * Exemples :
         * - 'DATA_CompteDeDepot'
         * - 'MDEC_OuvertureCB'
         * - 'MDEC_AlertEcureuil'
         */
        referenceExterneData: string;
        /**
         * Zone groupe comprenant les donn?es relative ? une op?ration li?e ? l'offre commerciale souscrite par le client.
         * Instance d'une classe objet au format JSON dont le sch?ma est variable. Elle comprend les ?l?ments, propri?t?s et les donn?es associ?es.
         * Exemples :
         * {"_id":"DataCompte","_data":{"Agence":"00301","NumCompte":"08.0021581.73"}},
         * {"_id":"DataChequier","_data":{"ChoixChequier":"CHEQUIERS","ChoixTypeChequier":"PORTEFEUILLE 42","RenouvellementAuto":"OUI","SeuilRenouvellement":"10","Dotation":1,"AgenceDistribution":"12345","Routage":"ROUTAGE A L'AGENCE"}}
         */
        donneeData: string;
    }
    interface IDonneeDossier {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du r?seau CE est r?pertori?e par la Banque de France
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Cr?dit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Num?ro d'identification du dossier de vente.
         * Un dossier de vente g?re la vente d'une offre ? un client donn? (souscription de contrat de produit ou service, op?ration sur un contrat, avenant ...)
         * Le dossier de vente m?morise les donn?es de la proposition / souscription de l'offre commerciale ou de l'op?ration : contexte de l'acte et caract?ristiques du produit / service.
         * Cet identifiant est attribu? par le central-DB2 ? la cr?ation du dossier de vente.
         * Exemple :
         * - 12413558
         */
        identifiantDossierVente: number;
        /**
         * R?f?rence du dossier fournie par le producteur qui g?re l'offre.
         * Cette r?f?rence producteur permet d'associer les diff?rents CRE ?mis par le producteur au dossier de vente concern?.
         * Exemples :
         * - 'FFI136593693' = n? FFI pour les Cr?dits Conso Nafi
         */
        identifiantExterneDossierVente: string;
        /**
         * Code de d?signation externe de l'application dans la gestion des dossiers de vente.
         * Concerne notamment les ?changes avec les producteurs.
         * Exemples :
         * - 'BPCEA_IMPACT' : Assurances
         * - 'NFI_IZIVENTE' : Natixis & Natixis Financement
         */
        codeExterneApplication: string;
        /**
         * Num?ro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         * Identifiant produit/service de l'offre principale du dossier de vente.
         */
        identifiantProduit: number;
        /**
         * Num?ro d'identification d'une offre de vente du catalogue de distribution de la gestion du dossier de  vente.
         * Une offre correspond ? une prestation (op?ration) sur un produit / service.
         * Une offre est associ?e ? un code produit service national.
         * Exemples :
         * - '109' = Souscription offre bouquet libert?
         * - '173' = Souscription Pr?t Personnel Auto IZIVENTE
         */
        numeroOffre: number;
        /**
         * Libell? commercial associ? ? l'offre de vente, vision charg? de client?le.
         * Exemples :
         * - 'Souscription Bouquet Libert?' pour l'offre 109
         * - 'Souscription Pr?t Personnel Auto IZIVENTE' pour l'offre 173
         */
        libelleOffreVisionAgent: string;
        /**
         * Libell? commercial associ? ? l'offre de vente, vision client. Exemples :
         *
         * -'Souscription Bouquet Libert?' pour l'offre 109
         * -'Souscription Pr?t Personnel Auto ' pour l'offre 173
         */
        libelleOffreVisionClient: string;
        /**
         * Permet de regrouper les offres de ventes en groupes
         * simples ? appr?hender pour l'utilisateur.
         * Exemples:
         * - '01' = Assurance
         * - '02' = Bancarisation
         * - '03' = Credit
         */
        codeCategorieOffre: string;
        /**
         * D?termine un acte de gestion dans le catalogue des processus/op?rations de la gestion bancaire.
         * Un acte de gestion est une op?ration sur un produit /service ou une prestation ? la client?le.
         * Format :  concat?nation de code sous famille acte de gestion et code objet acte de gestion
         * Exemples :
         * - 'AV00000821' = Avenant BOUQUET LIBERTE
         * - 'OU00000761' = OUVERTURE FORFAIT SATELLIS INTEGRAL
         */
        codeActeGestionPrincipal: string;
        /**
         * Libell? de d?signation d'un acte de gestion.
         * Exemples de valorisation :
         * - Ouverture Livret A
         * - Ouverture CAT
         */
        libelleActeGestion: string;
        /**
         * D?termine le mode de vente/gestion du dossier de vente.
         * Valeurs :
         * - 'MEGI' = Mise en gestion imm?diate(ouvrir puis signer)
         * - 'VPC' = Vente par correspondance(signer puis ouvrir)
         */
        codeModeVente: string;
        /**
         * D?termine si un processus de vente donn? concerne la plateforme MyWay.
         * Il permet de distinguer les dossiers de vente issus d'un processus VMC, des dossiers de vente issus d'un processus MyWay.
         * Valeurs :
         * - 'O' = Oui - MyWay
         * - 'N' = Non - Mysys (par d?faut)
         */
        indicateurProcessusMyway: string;
        /**
         * Date et heure pr?cise de cr?ation du dossier de vente par l'agent.
         * Exemple :
         * - '2015-11-10-14.47.55.788994'
         */
        dateCreationDossier: string;
        /**
         * Date et heure pr?cise de relance du dossier de vente par l'agent.
         * Exemple :
         * - '2015-11-10-14.47.55.788994'
         */
        dateDerniereRelance: string;
        /**
         * Code canal de cr?ation du dossier de vente.
         * Exemple :
         *
         * - 'FF' = Face ? face
         * -'TL' = T?l?phone
         */
        codeCanalCreation: string;
        /**
         * Cette rubrique sp?cifie l'entit? type de l'organisation ayant cr?? le dossier de vente. Valeurs :
         *
         * -'1' = Agence
         * -'2' = CRC
         * -'3' = E-Agence
         * -'4' = Internet
         * -'5' = Administratif
         */
        codeEntiteCreation: string;
        /**
         * Date et heure ? laquelle le dossier de vente est pass? ? l'?tat 'confirm?'.
         * Valeurs :
         * - '0001-01-01-00.00.00.000000', dossier non confirm?
         * - si valeur diff?rente de ci-dessus, dossier confirm?
         * (exemple : '2015-11-10-14.49.09.387646')
         */
        dateConfirmationDossier: string;
        /**
         * Date et heure pr?cise de derni?re modification du dossier de vente.
         * Exemple :
         * - '2015-11-10-14.49.09.387646'
         */
        dateModificationDossier: string;
        /**
         * Num?ro de l'entit? titulaire principale du dossier de vente.
         * Une entit? titulaire se compose d'une ou plusieurs personnes. Synonyme : Client bancaire.
         */
        numeroEntiteTitulaire: number;
        /**
         * Identifie le contrat support du dossier de vente. Permet d'afficher en ent?te des ?crans GGO le compte support.
         * Format de la rubrique : donn?e cadr?e ? gauche, compl?t?e par des blancs ? droite,
         * Exemple :
         * - 'FR7611425002000403809356890'
         */
        numeroCompte: string;
        /**
         * Num?ro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour ?ventuellement d'un compte de d?p?t (ou compte courant) pour un tarif en g?n?ral forfaitaire.
         * Cette r?f?rence est la r?f?rence de l'offre cr??e dans le cadre du dossier de vente.
         */
        numeroOffreSouscrite: number;
        /**
         * Valeur de EDS de domiciliation attribu? au moment de la cr?ation du dossier de vente pour aider ? l'affectation des dossiers de vente.
         * Le dossier de vente ne conserve que l'EDS attribu? ? la cr?ation et ne le modifie jamais.
         * Cette rubrique dans un premier temps, concernera les prospects. Si le prospect devient client et se domicilie ailleurs, ce sont les bases client qui font foi.
         */
        codeEdsAttribueCreation: number;
    }
    interface IDonneePersonne {
        /**
         * Num?ro d'identification de la personne dans le SI d'un Etablissement. R?f?rence interne MYSYS attribu? par le central.
         * Personne r?f?renc?e comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
        /**
         * Etablit le r?le de l'interlocuteur (personne de la client?le) li? au dossier de vente : soit le titulaire souscripteur / ordonateur, soit le repr?sentant du titulaire souscripteur...
         * Exemples :
         * - '1' = Titulaire
         * - '2' = Repr?sentant l?gal
         * - '3' = Emprunteur
         * - '4' = Co-Emprunteur
         * - '5' = Co-Titulaire
         */
        codeRoleInterlocuteur: string;
        /**
         * Libell? associ? au r?le de la personne li?e au dossier de vente.
         * Exemples :
         * - 'Titulaire'
         * - 'Repr?sentant l?gal'
         * - 'Emprunteur'
         * - 'Co-Emprunteur'
         */
        libelleRolePersonne: string;
        /**
         * Cet indicateur permet d'indiquer si la personne li?e est signataire du dossier de vente.
         * Valeurs :
         * - 'O'        La personne est signataire
         * - 'N'        La personne n'est pas signataire
         */
        indicateurPersSignataire: string;
    }
    interface IDonneeSignature {
        /**
         * D?termine le mode de contractualisation :
         * soit ?lectronique, soit papier, soit blanc ou Ind?termin? si le choix du mode de signature n'a pas ?t? effectu?, soit double clic (sur formulaire internet)
         * Valeurs:
         * - 'P' = Papier
         * - 'E' = Electronique
         * - ' ' ou 'I' = choix du mode de signature non effectu?
         * - 'D' = Double clic (internet)
         */
        codeModeSignature: string;
        /**
         * Libell? associ? au code mode de signature utilis?.
         * Exemple de valeurs :
         * - 'Papier'
         * - 'Electronique'
         */
        libelleModeSignature: string;
        /**
         * R?f?rence d'identification du document num?ris? ?tablie par l'application IDN
         * Fournie au moment du d?p?t de la liasse documentaire et utilis?e ensuite pour r?cup?rer cette liasse.
         * Format :
         * - Code ?tablissement financier 5 car
         * - Identifiant agent 7 car
         * - Date du jour AAMMJJhhmmss
         * - Incr?mentation entre 0 et 999999,  6 car
         * Exemple :
         * - '183158311352150914123724831031'
         */
        identifiantDocumentNumerise: string;
        /**
         * identifiant unique d'une transaction de contractualisation ?lectronique d'un dossier de vente.
         * Identifiant ?tabli par l'application de contractualisation.
         * Exemple de valeurs :
         * - '0ea0cb25-d029-4874-8f72-9267c663c51e'
         */
        identifiantTransactionContract: string;
        /**
         * Date et heure pr?cise de signature du dossier de vente.
         * Dans le cas d'un dossier avec plusieurs cosignataires, c'est la date et l'heure de la derni?re signature effectu?e qui est enregistr?e.
         * Exemple :
         * - '2015-11-10-14.47.55.788994'
         * - '0001-01-01-00.00.00.000000' si non sign?
         */
        dateSignature: string;
    }
    interface IEtatDossier {
        /**
         * D?termine un processus de vente dans la gestion des dossiers de vente.
         * Un processus de vente est une suite ordonn?e d'?tapes qui d?crivent comment une offre doit ?tre vendue sur un canal de vente bien pr?cis.
         * A chaque dossier de vente, est associ? un processus de vente, qui peut ?tre modifi? au cours de la vie du dossier.
         * Exemples :
         * - 'FAFA' = Face ? face
         * - 'OUSI' = Ouvrir puis signer
         * - 'SIOU' = Signer puis ouvrir
         */
        codeProcessus: string;
        /**
         * D?termine une phase de vente dans la gestion du dossier de vente.
         * Une phase est le premier niveau de d?coupage du processus de vente.
         * Exemples:
         * -'SIMU' = Simulation
         * -'PROP' = Proposition
         * -'CONT' = Contractualisation
         */
        codePhaseVente: string;
        /**
         * D?termine une ?tape de vente dans la gestion du dossier de vente.
         * Une ?tape est une t?che/s?quence caract?ristique du processus de vente durant laquelle une action doit ?tre effectu?e par le client ou l'Etablissement.
         * Une ?tape peut ?tre l'occasion d'un rebond commercial ou d'un changement de canal.
         * Exemples :
         * - 'CONF' = Confirmation
         * - 'SGNE' = Signature ?lectronique
         * - 'SGNP' = Signature papier
         */
        codeEtapeVente: string;
        /**
         * D?termine le statut de l'?tape du processus de vente ? un instant donn?.
         * Exemples :
         * - 'VECO' = Vente confirm?e
         * - 'EAMS' = En attente choix mode de signature
         * - 'EASP' = En attente signature client
         * - 'ABAN' = Abandonn? client
         */
        codeStatutEtape: string;
        /**
         * Cette rubrique permet de stocker une phrase expliquant de fa?on claire le statut du dossier de vente.
         * Exemples :
         * - 'Le client doit donner son accord pour poursuivre'
         * - 'le client doit signer le contrat et renvoyer des pi?ces'
         */
        libelleStatutActionAMener: string;
        /**
         * D?termine une situation de gestion caract?ristique du
         * dossier de vente.
         * Exemples:
         * - '01' = Non encore valid?
         * - '02' = En attente envoie document
         * - '03' = En attente de retours
         */
        codeMomentVie: string;
        /**
         * Cette rubrique a pour but de stocker la date li?e ? l'?ch?ance d'une ?tape d'un dossier de vente.
         * Exemple :
         * - '2016-01-09'
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Date et Heure pr?cise du dernier ?v?nement d'intervention r?alis?e au niveau du dossier de vente.
         * Elle provient du poste client de l'agent commercial.
         * Exemple:
         * -'2019-11-10-17.20.33.666074'
         */
        dateDerniereIntervention: string;
        /**
         * Cette rubrique sp?cifie le canal de vente sur lequel a eu lieu la derni?re modification du dossier de vente, ou sur lequel on souhaite effectuer une simulation (m?thode GET, codeActionContexte COCA)
         *
         * Exemples :
         * - 'TL' = T?l?phone
         * - 'FF' = Face ? face
         * - 'IN' = Internet
         */
        codeCanalEnCours: string;
        /**
         * Cette rubrique sp?cifie le sens de la communication dans lequel a eu lieu la derni?re modification du dossier de vente, ou dans lequel  on souhaite effectuer une simulation (m?thode GET, codeActionContexte COCA).
         * contact entrant (? l'initiative du client),
         * contact sortant (? l'initiative de l'Etablissement).
         *
         * Valeurs :
         * - 'E' = Entrant
         * - 'S' = Sortant
         */
        codeSensCommunicEnCours: string;
    }
    interface IReferenceDossierVente {
        /**
         * Date et heure de r?f?rence Catalogue
         * Exemple :
         * - '2015-11-10-14.47.55.788994'
         */
        dateReferenceDossier: string;
        /**
         * Cette rubrique sp?cifie la derni?re entit? type de l'organisation ayant modifi? le dossier de vente.
         *  Valeurs :
         * - '1' = Agence
         * - '2' = CRC
         * - '3' = E-Agence
         * - '4' = Internet
         * - '5' = Administratif
         */
        entiteReferenceDossier: string;
        /**
         * Canal de vente de r?f?rence
         *            Exemples:
         * 'IN'       Internet
         * 'TL'       T?l?phone
         * 'FF'       Face ? face
         */
        canalReferenceDossier: string;
        /**
         * D?termine un processus de vente dans la gestion des dossiers de vente.
         * Un processus de vente est une suite ordonn?e d'?tapes qui d?crivent comment une offre doit ?tre vendue sur un canal de vente bien pr?cis.
         * A chaque dossier de vente, est associ? un processus de vente, qui peut ?tre modifi? au cours de la vie du dossier.
         * Exemples :
         * - 'FAFA' = Face ? face
         * - 'OUSI' = Ouvrir puis signer
         * - 'SIOU' = Signer puis ouvrir
         */
        codeProcessus: string;
    }
}

declare module myway.gestionEpargne.commun {
    interface IResultatCommercial {
        identifiantPersonne: number;
        codeTypeFamilleResultat: string;
        identifiantProduitService: number;
        codeNatureResultatCommercial: string;
        codeTypeResultatCommercial: string;
        codeTypeProduitService: string;
        indicRattachableCRE: string;
        codeTypeProduitServiceGCP: string;
        codeOrigineFonds: number;
        montantResultatCommercial: number;
        codeModeGestionLivret: string;
        sousCodeProduitService: string;
        codeProduitCarte: string;
        codeModeFinancier: string;
        codeCaractereForfaitaireOffre: string;
        indicProduitServiceObligatoire: string;
        dateCreationResultatCommercial: string;
    }
    class ResultatCommercial {
        private _identifiantPersonne;
        identifiantPersonne: number;
        private _codeTypeFamilleResultat;
        codeTypeFamilleResultat: string;
        private _identifiantProduitService;
        identifiantProduitService: number;
        private _codeNatureResultatCommercial;
        codeNatureResultatCommercial: string;
        private _codeTypeResultatCommercial;
        codeTypeResultatCommercial: string;
        private _codeTypeProduitService;
        codeTypeProduitService: string;
        private _indicRattachableCRE;
        indicRattachableCRE: string;
        private _codeTypeProduitServiceGCP;
        codeTypeProduitServiceGCP: string;
        private _codeOrigineFonds;
        codeOrigineFonds: number;
        private _montantResultatCommercial;
        montantResultatCommercial: number;
        private _codeModeGestionLivret;
        codeModeGestionLivret: string;
        private _sousCodeProduitService;
        sousCodeProduitService: string;
        private _codeProduitCarte;
        codeProduitCarte: string;
        private _codeModeFinancier;
        codeModeFinancier: string;
        private _codeCaractereForfaitaireOffre;
        codeCaractereForfaitaireOffre: string;
        private _indicProduitServiceObligatoire;
        indicProduitServiceObligatoire: string;
        private _dateCreationResultatCommercial;
        dateCreationResultatCommercial: string;
        constructor(resultat: IResultatCommercial);
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Les données spécifique des produits
     */
    interface ISpecifiqueProduits {
    }
}

declare module myway.gestionEpargne.commun {
    interface ISU1P {
        DFEJDA: string;
        CTGXMF: string;
        DDLIEU: string;
        COCXBQ: string;
        LNSMPX: string;
        DDLIEE: string;
        COLIDO: string;
        CTLIME: string;
        COSXAP: string;
        DFLIFR: string;
        DDEJDA: string;
        WLNLU: string;
        COEIO1: string;
        CTSFBA: string;
    }
}

declare module myway.gestionEpargne.commun {
}

declare module myway.gestionEpargne.commun {
    function mwRecapitulatifVersementInitial(): ng.IDirective;
}

declare module myway.gestionEpargne.commun {
    function mwRecapitulatifVersementInitialVpc(): ng.IDirective;
}

declare module myway.gestionEpargne.commun {
    class BatOpeFiService {
        private $parse;
        private $q;
        private serviceAgentExtended;
        private deviseService;
        private filtreCodeProduitService;
        private operationFinanciereService;
        static $inject: string[];
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        forcageBadge: boolean;
        constructor($parse: ng.IParseService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, deviseService: DeviseService, filtreCodeProduitService: myway.gestionEpargne.commun.FiltreCodeProduitService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService);
        /**
         * Notifie à GGO que le chargement des données du controleur est terminé afin d'arrêter le spinner sur l'ihm
         */
        notifierChargementTermine(scope: ng.IScope, idBloc: string): void;
        /**
         * Initialiser l'objet de la BAT OP-FI au chargement de l'offre
         * @returns myway.comOpesFinancieres.Model.OperationFinanciere
         */
        initialiserOperationFinanciere(codeProduit: string, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, codeTypeProduit: string, codeCanal?: string, codeFonctionnalite?: string, libelleOperation?: string, isAppelBdr?: boolean): myway.comOpesFinancieres.Model.OperationFinanciere;
        setOperationFinanciere(operationFinanciere?: myway.comOpesFinancieres.Model.OperationFinanciere): void;
        getOperationFinanciere(): myway.comOpesFinancieres.Model.OperationFinanciere;
        setTrueForcageBadge(): void;
        setFalseForcageBadge(): void;
        getForcageBadge(): boolean;
        initialiserContexteSaisieOperationFinanciere(): ng.IPromise<myway.comOpesFinancieres.Model.ContexteSaisieOperationFinanciere>;
        getSignataireOpeFiPourBordereau(signataires: myway.comContract.modeles.ISignataireComplet[], enAppelBdr?: boolean): MyWay.Model.ParticipantInformationClient;
        private GetCurrentProcessId();
        getSegmentprvrio(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, location?: string): ng.IPromise<myway.comOpesFinancieres.Model.SegmentPRVRIO>;
        getModeFinancier(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, location?: string): ng.IPromise<any>;
    }
}

declare module myway.gestionEpargne.commun {
    class EpargneCommunService {
        private espaceGlobalService;
        private controlePersonneProtegeService;
        private serviceAgentExtended;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        constructor(espaceGlobalService: myway.c0410.commun.EspaceGlobalService, controlePersonneProtegeService: myway.gestionEpargne.commun.ControlePersonneProtegeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer la personne concerné par l'offre en cours à partir du contexte GGO
         */
        extraireDonneesPersonne(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.Tiers.Personne;
        /**
         * Permet de récupérer le numéro de personne concerné par l'offre en cours à partir du contexte GGO
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {number}
         */
        identifierNumeroPersonne(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): number;
        /**
         * Permet de récupérer le numéro entité titulaire concerné par l'offre en cours à partir du contexte GGO
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {number}
         */
        identifierEntiteTitulaire(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): number;
        /**
         * Permet de convertir une date au format ISO
         */
        toLocalString(date: Date): string;
        /**
         * Enregistrer objet generique
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @param {string} numeroCompte
         * @param {string} identifiantBordereau
         * @returns {myway.c0410.commun.DonneesCompte}
         */
        enregistrerObjetgenerique(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, numeroCompte: string, identifiantBordereau?: string): myway.c0410.commun.DonneesCompte;
        /**
         * Créer objet generique C05.10
         * @param {myway.c0410.commun.DonneesCompte} donneesCompte
         * @param {InformationEcheancier} informationEcheancier
         * @returns {ObjetGeneriqueC0510}
         */
        creerObjetGeneriqueC0510(donneesCompte: myway.c0410.commun.DonneesCompte, informationEcheancier: InformationEcheancier): ObjetGeneriqueC0510;
        /**
         * Permet de calculer l'age à partir de la date de naissance
         * @param {Date} dateNaissance
         * @returns {number}
         */
        calculateAge(dateNaissance: Date): number;
        /**
         * @returns {boolean} Renvoie VRAI si le client est mineur
         */
        estMineur(): boolean;
        /**
         * Permet de filtrer et de récupérer les caractéristiques du produit/ service à partir du tableau fourni par GGO
         */
        filtrerReferencesProduit(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.ReferenceProduit;
        /**
         * Avenant compte simple
         */
        lancerAvenantSimple(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): void;
        /**
         * Affiche un compte en séparant les partie caisse/guichet/numeroCompte(RICE + clé RICE)/clé compte
         * @param {string} numeroCompte - nuléro complet du compte
         * @param {boolean} avecCle - présence de la clé dans le numéro de compte
         * @returns {string} numero de compte formaté avec espaces
         */
        formatCompte(numeroCompte: string, avecCle: boolean): string;
        /**
         * Permet de créer un rice en String à partir de l'objet interdomaine Rice
         * @param {MyWay.Model.Rice} rice
         * @returns {string}
         */
        objetRiceToString(rice: MyWay.Model.Rice): string;
        /**
         * Permet de créer un rice à partir d'un numéro de compte complet string
         * @param {string} numeroCompte
         * @param {string} codeEtablissement
         * @param {string} codeGuichet
         * @returns {MyWay.Model.Rice}
         */
        stringToObjetRice(numeroCompte: string, codeEtablissement: string, codeGuichet: string): MyWay.Model.Rice;
        getModeFinancierByCTGXM1(codeModeFinancierNumerique: string): string;
        getModeFinancierByCTGXML(codeModeFinancier: string): string;
        /**
         * Renvoie le libellé de la périodicté en fonction du code
         * @param {string} key
         */
        getValuePeriodiciteByKey(key?: string): string;
        estDefiniEtPasNull(variable: any): boolean;
        estDefiniEtPasNullEtPositif(variable: any): boolean;
        static formaterEnChaine(code: number | string, longueur: number): string;
        isRiceEpargne(riceSaisie: MyWay.Model.Rice, inclureComptesAttente?: boolean): boolean;
        initErreurBloquanteGGO(message: string): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
    }
}

declare module myway.gestionEpargne.commun {
    class CommunicationComposantService {
        private $q;
        static $inject: string[];
        private operationFinanciere;
        private caracteristiqueGenerale;
        private configurationComposant;
        private dateObtentionPJ;
        private versementPeriodique;
        private parametreVersementPeriodique;
        constructor($q: ng.IQService);
        setOperationFinanciere(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere): void;
        getOperationFinanciere(): myway.comOpesFinancieres.Model.OperationFinanciere;
        setCaracteristiqueGenerale(caracteristiqueGenerale: any): void;
        getCaracteristiqueGenerale(): any;
        setConfigurationComposant(configurationComposant: any): void;
        getConfigurationComposant(): any;
        setVersementPeriodique(versementPeriodique: MyWay.Model.VersementPeriodique): void;
        getVersementPeriodique(): MyWay.Model.VersementPeriodique;
        setParametreVersementPeriodique(parametreVersementPeriodique: MyWay.Model.ParametreVersementPeriodique): void;
        getParametreVersementPeriodique(): MyWay.Model.ParametreVersementPeriodique;
        setDateObtentionPJ(dateObtentionPJ: Date): void;
        getDateObtentionPJ(): Date;
        setPassages(method: string): number;
    }
}

declare module myway.gestionEpargne.commun {
    class CapaciteJuridiqueEnum {
        static MINEUR_SS_MESURE_AIDE_GESTION_BUDGET_FAMILIAL: string;
        static MINEUR_EMANCIPE: string;
        static MINEUR_SS_ADMIN_PURE: string;
        static MINEUR_SS_ADMIN_JUDICIAIRE: string;
        static MINEUR_SS_TUTELLE_COMPLETE: string;
        static MINEUR_SS_TUTELLE_D_ETAT: string;
        static MINEUR_SS_ADMIN_AD_HOC: string;
        static MAJEUR_CAPABLE: string;
        static MAJEUR_SS_SAUV_DE_JUSTICE: string;
        static MAJEUR_SS_SAUV_DE_JUSTICE_MANDAT_DONNE: string;
        static MAJEUR_SS_SAUV_DE_JUSTICE_MANDAT_SPECIAL: string;
        static MAJEUR_SS_CURATELLE_SIMPLE: string;
        static MAJEUR_SS_CURATELLE_RENFORCEE: string;
        static MAJEUR_SS_TUTELLE_COMPLETE: string;
        static MAJEUR_SS_ADMIN_JUDICIAIRE: string;
        static MAJEUR_SS_TUTELLE: string;
        static MAJEUR_SS_MESURE_ACCOMP_SOCIAL_PERSONNALISE: string;
        static MAJEUR_SS_MESURE_ACCOMP_JUDICIAIRE: string;
        static MAJEUR_SS_MESURE_AIDE_GESTION_BUDGET_FAMILIAL: string;
        static MAJEUR_SS_MANDAT_DE_PROTECTION_FUTURE_SIMPLE: string;
        static MAJEUR_SS_MANDAT_DE_PROTECTION_FUTURE_ETENDU: string;
    }
    class CodeFamilleLiensInterPersonnesEnum {
        static REPRESENTANT_PERSONNE_PHYSIQUE: string;
        static REPRESENTANT_PERSONNE_MORALE: string;
    }
    class ControlePersonneProtegeService {
        private $q;
        static $inject: string[];
        _estMineurProtege: boolean;
        constructor($q: ng.IQService);
        estMineurProtege(capaciteJuridique: string): boolean;
        estMajeurProtege(capaciteJuridique: string): boolean;
    }
}

declare module myway.gestionEpargne.commun {
    class CreerCompteService {
        private $q;
        private modalService;
        private ggoService;
        private batOpeFiService;
        private communicationComposantService;
        private offreUtilService;
        private libelleProduitEpargneService;
        private epargneCommunService;
        private compteSurLivretService;
        private serviceTrace;
        static $inject: string[];
        erreurs: MyWay.Services.Erreur;
        constructor($q: ng.IQService, modalService: MyWay.UI.ModalService, ggoService: myway.gestionEpargne.commun.GgoService, batOpeFiService: myway.gestionEpargne.commun.BatOpeFiService, communicationComposantService: myway.gestionEpargne.commun.CommunicationComposantService, offreUtilService: myway.gestionEpargne.commun.OffreUtilService, libelleProduitEpargneService: myway.gestionEpargne.commun.LibelleProduitEpargneService, epargneCommunService: myway.gestionEpargne.commun.EpargneCommunService, compteSurLivretService: myway.gestionEpargne.commun.CompteSurLivretService, serviceTrace: myway.gestionEpargne.commun.ServiceTrace);
        creerCompte(caracteristiqueGenerale: any, parametresCaracteristiqueGenerale: myway.gestionEpargne.commun.ParametresCaracteritiqueGeneraleLivretPOST): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        /**
         *
         * @param {boolean} enVAD
         * @param {boolean} restitutionDV
         * @param {string} codeModeVente
         * @param {GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion} compteRenduMiseEnGestion
         * @returns {boolean} retourne si en VPC et la MIGE s'est mal passée (forçage requis)
         */
        estEnVpcEtNecessiteForcage(enVAD: boolean, restitutionDV: boolean, codeModeVente: string, compteRenduMiseEnGestion: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion, codeLibelle: string): boolean;
        /**
         *
         * @param {string} numeroCompte
         * @param {contexte} contexte
         * @returns {string} numero de compte calculé depuis le contexte si celui passé en paramètre est vide
         */
        setNumeroCompte(numeroCompte: string, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): string;
        /**
         *
         * @param caracteristiqueGenerale
         * @param parametresCaracteristiqueGenerale
         * @param controleur
         * @returns Compte Rendu de mise en gestion
         */
        mettreEnGestionApresForcage(caracteristiqueGenerale: any, parametresCaracteristiqueGenerale: any, controleur: IControleur): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
    }
}

declare module myway.gestionEpargne.commun {
    class DeviseService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private data;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête GET
         * Permet d'avoir les caractéristique de la devise
         * @returns promise<Devise>
         */
        getDeviseCaracteristique(codeDevise: string): ng.IPromise<Devise>;
    }
}

declare module myway.gestionEpargne.commun {
    class CodeTypeProduitsEnum {
        static LIVRET_A: string;
        static LIVRET_B: string;
        static LIVRET_GRAND_PRIX: string;
        static COMPTE_ATTENTE: string;
        static COMPTE_DEPOTS: string;
        static LIVRET_EPARGNE_POPULAIRE: string;
        static LIVRET_DEVELOPPEMENT_DURABLE: string;
        static COMPTE_COURANT_ENTREPRISE: string;
        static LIVRET_JEUNE: string;
        static COMPTE_EPARGNE_LOGEMENT: string;
        static ANCIEN_PEL: string;
        static ANCIEN_PEL2: string;
        static ANCIEN_PEL3: string;
        static ANCIEN_PEL4: string;
        static PLAN_EPARGNE_LOGEMENT: string;
        static CSL_DEVISE_CAD: string;
        static CSL_DEVISE_USD: string;
        static DEPOT_A_TERME: string;
        static SOLUTION_LIBRE_REVENU: string;
        static COMPTE_COURANT_INTERET: string;
    }
    class FiltreCodeProduitService {
        private estVersementPeriodique;
        constructor();
        setEstVersementPeriodique(indicateur?: boolean): void;
        getFiltreProduit(produit: string, isAppelBdr?: boolean): string[];
        private filtreBDDHorsCompteAttente();
        private filtreBDD();
        private filtreBDR();
        private filtreCSLDevise();
        private filtreLivretA();
        getFiltreFicoba(): string[];
        getFiltreVersementPeriodiqueVAD(codeProduit?: string): string[];
    }
}

/**
 * Ce service référence des fonctionnalités ggo réutilisable
 */
declare module myway.gestionEpargne.commun {
    class CodeCanalEnum {
        static FF: string;
        static VAD: string;
    }
    class GgoService {
        /**
         * Permet de remplir tabErreurs dans le cas où pas de problème après l'envoi de la requête ouverture mode contrôle
         */
        formulaireOk(tabErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Permet de remplir tabErreurs dans le cas où on a un problème après forçage dans l'envoi de la requête ouverture mode contrôle
         */
        formulaireKoAnnulationForcage(tabErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Permet de remplir tabErreurs dans le cas où on a un problème après forçage dans l'envoi de la requête ouverture mode contrôle
         */
        formulaireKoApresForcage(error: MyWay.Services.Erreur, tabErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        formulaireKoDiversRaisons(error: MyWay.Services.Erreur, tabErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        formulaireKoValidation(error: string, tabErreurs: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Permet de remplir tabErreursMiseEnGestion quand le produit est ouvert
         */
        miseEnGestionOk(tabErreursMiseEnGestion: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[], nomProduit: string): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Permet de remplir tabErreursMiseEnGestion quand il y a un problème d'ouverture du produit
         */
        miseEnGestionKo(error: MyWay.Services.Erreur, tabErreursMiseEnGestion: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[], nomProduit: string, estWarning?: boolean): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Créer un tableau d'erreur de GGO à partir d'une erreur MyWay
         */
        creationErreurGgoTab(error: MyWay.Services.Erreur, bloquant?: boolean): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Concaténer les messages d'erreurs du service
         */
        messagesErreursGGO(error: MyWay.Services.Erreur): string;
        /**
         * Concaténer les messages d'erreurs du service
         */
        messagesInformationsPopine(error: MyWay.Services.Erreur): string;
        /**
         * Permet de determiner la canale de vente (face à face/ vente à distance)
         * @param {IControleur} controleur
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {void}
         */
        determinerCodeCanal(controleur: IControleur, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): void;
        /**
         * Permet de determiner si on est en mode restitution du dossier de vente dans la VAD
         * @param {IControleur} controleur
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {void}
         */
        determinerRestitutionDV(controleur: IControleur, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): void;
    }
}

declare module myway.gestionEpargne.commun {
    class IntervenantEntiteTitulaireService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private data;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête GET
         * Permet d'obtenir la liste des personne associé à une entité titulaire ou une personne.
         * La recherche peux se faire soit via l'entité titulaire ou via un identifiant personne
         * @returns promise<Personne[]>
         */
        getIntervenantEntiteTitulaire(codeEtablissement: string, identifiantPersonne: number, identifiantEntiteTitulaire: number): ng.IPromise<Personne[]>;
    }
}

declare module myway.gestionEpargne.commun {
    class LibelleProduitEpargneService {
        libelleCompteAttente: string;
        libelleCompteEpargneLogement: string;
        libelleLivretA: string;
        libelleLivretB: string;
        libelleLivretDeveloppementDurable: string;
        libelleLivretEpargnePopulaire: string;
        libelleLivretGrandPrix: string;
        libelleLivretJeune: string;
        libellePlanEpargneLogement: string;
        libelleReleveLivret: string;
        creerlibelleProduit(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, produitsServiceEpargne: string): void;
    }
}

declare module myway.gestionEpargne.commun {
    class CommunNumberService {
        /**
         *  Fonction permettant de créer un séparation de milliers pour un numéro en entrée
         *  @returns string (numéro formatté)
         */
        formatAffichageNumber(nbr: string): string;
        /**
         *  Fonction permettant de créer le format de l'argent MyWay à partir d'un entier
         *  @returns string
         */
        formatMoney(amount: number): string;
        dateToString(date: Date): string;
        formatTaux(taux: string): string;
    }
}

declare module myway.gestionEpargne.commun {
    class OffreUtilService {
        private $q;
        private epargneCommunService;
        private affectationRadicalService;
        private saisieRiceService;
        private signatureElectroniqueService;
        private identifiantBordereauService;
        private postOperationFinanciere;
        private espaceGlobalService;
        private ggoService;
        private communicationComposantService;
        private versementRegulierService;
        private modalService;
        private controlePersonneProtegeService;
        private intervenantEntiteTitulaireService;
        private resultatCommercialService;
        private ajoutLSEService;
        private produitEngageService;
        private serviceAgentExtended;
        private operationFinanciereService;
        private serviceTrace;
        static $inject: string[];
        private numeroRadical;
        private cleCompte;
        private cleRice;
        enRestitutionDVenVadVpc: boolean;
        vadVpcOpeFiChargee: boolean;
        codeTypeProduitServiceGcp: string;
        estEnVad: boolean;
        referenceProduitService: GestionGeneriqueOffres.Types.ReferenceProduitPrincipalOffre;
        idBloc: string;
        constructor($q: ng.IQService, epargneCommunService: myway.gestionEpargne.commun.EpargneCommunService, affectationRadicalService: myway.comInterdomaine.AffectationRadicalService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, signatureElectroniqueService: myway.comContract.Services.SignatureElectroniqueService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, ggoService: myway.gestionEpargne.commun.GgoService, communicationComposantService: myway.gestionEpargne.commun.CommunicationComposantService, versementRegulierService: myway.gestionEpargne.commun.VersementRegulierService, modalService: MyWay.UI.ModalService, controlePersonneProtegeService: myway.gestionEpargne.commun.ControlePersonneProtegeService, intervenantEntiteTitulaireService: myway.gestionEpargne.commun.IntervenantEntiteTitulaireService, resultatCommercialService: ResultatCommercialService, ajoutLSEService: AjoutLSEService, produitEngageService: myway.transProduitEngage.IProduitEngageService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, serviceTrace: myway.gestionEpargne.commun.ServiceTrace);
        /**
         * Fonction générique d'initialisation des flags de mode d'affichage: Ouverture, avenant, perso, recap, retour à l'offre, etc. pour les offres C05.10
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {string} mode - Le mode d'ouverture de l'offre OU, AV, CL
         */
        determinerMode(controleur: IControleur, mode: string): void;
        /**
         * Fonction générique d'initialisation de la ressource modèle d'operation financière pour les ressources REST C05.10
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {myway.comOpesFinancieres.Model.SegmentPRVRIO} segmentPRVRIO - Le segment PRVRIO de l'operation financiere
         * @param {myway.comOpesFinancieres.Model.SegmentPRJO} SegmentPRJO - Le segment PRJO de l'operation financiere
         */
        initOperationFinanciereRessource(segmentPRVRIO: myway.comOpesFinancieres.Model.SegmentPRVRIO, segmentPRJO: myway.comOpesFinancieres.Model.SegmentPRJO): myway.gestionEpargne.commun.OperationFinanciere;
        /**
         * Fonction générique de validation des données pour le passage en récapitulatif
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {string} libelleProduit - Libelle du produit ciblé par l'offre
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>} tableau des possibles erreurs survenues lors de la transaction pour renvoi à GGO
         */
        validerDonneeOffreOuverture(controleur: IControleur, libelleProduit: string): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        /**
         * Fonction générique de mise en gestion d'une offre
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {string} codeProduit - code produit sur 2 caractères ex: 11
         * @param {string} codeTypeProduitService - code IPR du produit ex: 0011
         * @param {string} libelleProduit - Libelle du produit ciblé par l'offre
         * @param {Myway.Ressource.ContractualisationActe.IContractualisationActe} contractualisationActe - Objet de la BAT contractualisationActe permettant de déterminer l'éligibilité SAG
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} compte rendu de mise en gestion de l'offre pour renvoi à GGO
         */
        miseEnGestionOffreOuverture(controleur: IControleur, codeProduit: string, codeTypeProduitService: string, libelleProduit: string, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        private paddy(n, p, c);
        /**
         * Effectue les traitements qui suivent la mise en gestion
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {boolean} eligibleSag - eligibilité à la signature electronique
         * @param {number} montantAnnuelEcheancierPEL - montant annuel des échéance d'un PEL
         * @returns void
         */
        traitementPostMiseEnGestion(controleur: IControleur, eligibleSag: boolean): ng.IPromise<void>;
        /**
         * @param {IControleur} controleur
         * @param {string} dateCreationResCom Date du résultat commercial
         * @param {GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion} compteRenduMeg Compte rendu de mise en gestion après forçage
         * @returns {ResultatCommercial} Résultat commercial
         */
        enregistrerResultatCommercial(controleur: IControleur, dateCreationResCom?: string, compteRenduMeg?: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion): ng.IPromise<any>;
        versementPeriodiqueMiseEnGestion(controleur: IControleur, compteRenduMiseEnGestion: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        emitEventEnvoiNumeroCompte(compteRenduMiseEnGestion: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion): GestionGeneriqueOffres.Types.ReferenceProduitPrincipalOffre;
        /**
         * Préparer le compte rendu de la mise en gestion pour ggo
         * @param {IControleur} controleur
         * @param {boolean} eligibleSag
         * @param {GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]} retourMessages
         * @param {myway.c0410.commun.DonneesCompte} donneesCompte
         * @param {InformationEcheancier} informationEcheancier
         */
        compteRenduMiseEnGestion(compteRenduMiseEnGestion: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion, infoEcheancier: InformationEcheancier): ObjetGeneriqueC0510;
        /**
         * Permet de lancer la mise en Gestion en mode avenant
         */
        miseEnGestionOffreAvenant(controleur: IControleur): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Préparation du bordereau d'operation
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         */
        private preparationBordereau(controleur);
        /**
         * Mise à jour du(des) signataire(s) dans opéfi
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere - BAT operation financiere
         * @param {myway.comContract.modeles.ISignataireComplet[]} listeDesSignataires - Liste des signataires
         * @param {number} numeroPersonneIdentifiee - numero de la personne titulaire
         */
        private setOperationFinanciereSignataire(operationFinanciere, listeDesSignataires, numeroPersonneIdentifiee);
        /**
         * Mise à jour dusignataire dans opéfi
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere - BAT operation financiere
         * @param {GestionGeneriqueOffres.Types.Tiers.Personne} signataires - personne signataire
         */
        private setOperationFinanciereAvecPersonne(operationFinanciere, signataire);
        /**
         * Determination de l'affectation des signataires
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere - BAT operation financiere
         * @returns {boolean}
         */
        private estSignataireVide(operationFinanciere);
        /**
         * Permet de Reserver le radical d'un numéro de compte en mode ouverture
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {string} codeTypeProduitService - code IPR du produit ex: 0011
         * @returns {ng.IPromise<string>} radical du numero de compte reserve
         */
        private reserverNumeroRadical(controleur, codeTypeProduitService);
        /**
         * Permet de creer une cle de compte en mode ouverture
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {string} codeProduit - code produit sur 2 caractères ex: 11
         */
        private calculeCleCompte(controleur, codeProduit);
        /**
         * Permet de creer un numéro de compte en mode ouverture
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {string} codeProduit - code produit sur 2 caractères ex: 11
         */
        private creerNumeroCompte(controleur, codeProduit);
        /**
         * Permet de récuperer la reference du produit principal de l'offre
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte - données contextuelles de GGO
         * @returns GestionGeneriqueOffres.Types.ReferenceProduitPrincipalOffre
         */
        getReferenceProduitPrincipalOffre(): GestionGeneriqueOffres.Types.ReferenceProduitPrincipalOffre;
        /**
         * Permet de récuperer les données du compte en avenant
         * @returns myway.c0410.commun.DonneesCompte
         */
        getDonneesCompte(): myway.c0410.commun.DonneesCompte;
        /**
         * Fonction générique de validation des données pour le passage en récapitulatif en avenant simple (sans traitements)
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {any} modalOptions - Affiche une popine d'informations avant de passer au récap, lors d'un avenant
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>} tableau des possibles erreurs survenues lors de la transaction pour renvoi à GGO
         */
        validerOffreAvenantSimple(controleur: IControleur, modalOptions?: any): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        /**
         * Fonction générique de mise en gestion d'une offre en avenant simple (sans traitements)
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} compte rendu de mise en gestion de l'offre pour renvoi à GGO
         */
        miseEnGestionOffreAvenantSimple(controleur: IControleur, libelleProduit: string): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Controle l'existance de lien de type représentant légal
         * renvoie vrai si ils sont nécessaires et présents
         * renvoie faux si ils ne sont pas nécessaires
         * renvoie une erreur si il sont nécessaires et absents  ou que le service ne répond pas.
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {string} codeTypeProduitService - Code IPR
         * @param {string} codeProduit - code produit service sur 11 caractères
         * @returns {ng.IPromise<boolean>}
         */
        controleExistanceRepresentants(controleur: IControleur): ng.IPromise<boolean>;
        showErreurRepresentantModal(bodyText: string): ng.IPromise<any>;
        /**
         * Initialise les données pour le credit COOP
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {string} codeSousFamilleActeGestion - OU, AV, CL
         * @param {string} codeProduit - CODIPR
         * @returns {IPromise<void>}
         */
        initialiserDonneesProduitEngage(controleur: IControleur, codeSousFamilleActeGestion: string, codeProduit: string): ng.IPromise<void>;
        /**
         * Rafraichit les données pour le credit COOP en recap et en mode retour
         * @param {boolean} enRecapitulatif
         * @param {boolean} modeRevenir
         * @param {myway.transProduitEngage.Model.DonneesProduitEngage} donneesProduitEngage - objet à rafraichir
         * @returns {void}
         */
        rafraichirDonneesProduitEngage(enRecapitulatif: boolean, modeRevenir: boolean, donneesProduitEngage: myway.transProduitEngage.Model.DonneesProduitEngage): void;
        /**
         * Check si le contexte appelant est BDR ou BDD
         * @param {number} contexteAppelant
         * @returns {boolean}
         */
        isBDR(contexteAppelant: GestionGeneriqueOffres.Types.AppelantsGgo): boolean;
        /**
         * Check si personne morale
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {boolean}
         */
        isPersonneMorale(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): boolean;
        /**
         * Vérifie que la totalité des mises en gestion s'est passé correctement. Si oui, renvoyer TRUE sinon, FALSE
         * @param {GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion} compteRenduMiseEnGestion
         * @returns {boolean};
         */
        miseEnGestionEstOk(compteRenduMiseEnGestion: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion): boolean;
        /**
         * En fonction du contexte, recrée un objet donneesProduitEngage correctement valorisé - Rechargement DV en VPC uniquement
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @param {string} contexteAppel
         * @param {string} codeTypeOperation
         * @returns {ng.IPromise<transProduitEngage.Model.DonneesProduitEngage>}
         */
        rechargerProduitEngage(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, contexteAppel: string, codeTypeOperation: string): ng.IPromise<transProduitEngage.Model.DonneesProduitEngage>;
        /**
         * En fonction du contexte, recrée un objet de type {transProduitEngage.IInfoPartageTracab} - Rechargement DV en VPC uniquement
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @param donneesRechargement - contient les données chargées depuis le DV (reprise DV - VPC)
         * @return {transProduitEngage.IInfoPartageTracab} infoPartageTracab
         */
        rechargerInfoPartageTracab(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, donneesRechargement: any): transProduitEngage.IInfoPartageTracab;
        /**
         * Retourne TRUE si un objet creditCoopDV ou optionTracagePartage est présent dans le DV rechargé
         * @returns boolean
         */
        creditCoopEstActif(donneesRechargement: any): boolean;
        /**
         * Renvoie la valeur du code retour de la ressource de mise en gestion (contrat/v1/caracteristiqueGenerale)
         * @returns {string}
         * @param erreur
         */
        getCodeLibelleHttpRessource(erreur: MyWay.Services.Erreur): string;
        /**
         * Renvoie la valeur en numérique du code retour HTTP de la ressource de mise en gestion (contrat/v1/caracteristiqueGenerale)
         * @returns {number}
         * @param erreur
         */
        getCodeErreurHttpRessource(erreur: MyWay.Services.Erreur): number;
        /**
         * @returns {boolean} si le niveau d'erreur du compte rendu de MEG est bloquant (valeur > 1), renvoyer TRUE sinon FALSE
         * @param compteRendu
         */
        getNiveauEstBloquantCompteRendu(compteRendu: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion): boolean;
        /**
         * @returns {boolean} Renvoie vrai si le code HTTP est différent de 200, 201, 202, 203 et 400 (retours standards de la QR)
         * @param {number} codeHttp Valeur du code HTTP à analyser
         */
        codeHttpAutre(codeHttp: number): boolean;
        /**
         * Renvoie un Compte Rendu de MEG en erreur si requete en erreur 500 ou en TIMEOUT
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} Compte rendu de MEG avec une erreur sur la requête
         * @param compteRenduMiseEnGestion
         */
        creerCompteRenduCodeHttpIncorrect(compteRenduMiseEnGestion: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion, libelleProduit: string): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Ce serice gère le credit coop
     */
    class PartageTracabiliteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private indicateursPartageTracabilite;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête GET
         * Permet de recuperer les indicateur credit coop
         * @param {parametresRequetePartageTracabilite} parametres - query params pour appel au service
         * @returns {ng.IPromise<IndicateursPartageTracabilite>}
         */
        recupererIndicateursPartageTracabilite(parametres: ParametresRequetePartageTracabilite): ng.IPromise<IndicateursPartageTracabilite>;
    }
}

declare module myway.gestionEpargne.commun.DossierDeVente {
    /**
     * Classe permettant d'effectuer la communication avec la ressource dossier de vente.
     */
    class RechercheDossierVenteService {
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected $q: ng.IQService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        /**
         * Méthode de recherche de dossier de vente.
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPostRequest(criteres: ICritereConsultation): ng.IPromise<Array<IDossierVente>>;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Ce serice gère les resultats commerciaux
     */
    class ResultatCommercialService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        codeTypeProduitServiceGcp: string;
        estEnVad: boolean;
        private restServiceUrl;
        private resultatCommercial;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête POST
         * Permet d'enregistrer un résultat commercial
         * @param {number} numeroPersonne
         * @param {number} identifiantProduitService - IDEGPS
         * @param {number} montantOperation - montant du versement initial
         * @returns {ng.IPromise<IResultat>}
         */
        enregistrerResultatCommercial(numeroPersonne: number, identifiantProduitService: number, montantOperation: number, dateCreationResCom?: string): ng.IPromise<IResultatCommercial>;
        /**
         * /!\ ATTENTION /!\ PEL UNIQUEMENT
         * Requête POST
         * Permet d'enregistrer un résultat commercial de l'échéancier lors de l'avenant d'un PEL
         * @param {number} numeroPersonne
         * @param {number} identifiantProduitService - IDEGPS
         * @param {number} montantOperation - montant du versement initial
         * @param {boolean} estAugmentation - si le montant est en augmentation
         * @returns {ng.IPromise<IResultat>}
         */
        modifierResultatCommercialEcheancierPEL(numeroPersonne: number, identifiantProduitService: number, montantOperation: number, estAugmentation: boolean): ng.IPromise<IResultatCommercial>;
        /**
         * /!\ ATTENTION /!\ PEL UNIQUEMENT
         * Requête POST
         * Permet d'enregistrer la modification du résultat commercial d'un PEL dû à un changement de sa durée
         * @param {number} numeroPersonne
         * @returns {ng.IPromise<IResultat>}
         */
        modifierResultatCommercialDureePEL(numeroPersonne: number): ng.IPromise<IResultatCommercial>;
        /**
         * Créer la stucture qui permet d'enregistrer un résultat commercial d'un produit
         * @param {number} numeroPersonne
         * @param {number} identifiantProduitService - IDEGPS
         * @param {number} montantOperation - montant du versement initial
         * @returns {ng.IPromise<IResultat>}
         */
        private creerResultatCommercialProduit(numeroPersonne, identifiantProduitService, montantOperation, dateCreationResultatCommercial?);
        /**
         * /!\ ATTENTION /!\ PEL UNIQUEMENT
         * Créer la stucture qui permet d'enregistrer la modification du  résultat commercial de l'échéancier lors de l'avenant d'un PEL
         * @param {number} numeroPersonne
         * @param {number} identifiantProduitService - IDEGPS
         * @param {number} montantOperation - montant du versement initial
         * @param {boolean} estAugmentation - si le montant est en augmentation
         * @returns {ng.IPromise<IResultat>}
         */
        private modifierEcheancierPEL(numeroPersonne, identifiantProduitService, montantOperation, estAugmentation);
        /**
         * /!\ ATTENTION /!\ PEL UNIQUEMENT
         * Créer la stucture qui permet d'enregistrer la modification du résultat commercial d'un PEL dû à un changement de sa durée (prorogation uniquement)
         * @param {number} numeroPersonne
         * @returns {ng.IPromise<IResultat>}
         */
        private modifierDureePEL(numeroPersonne);
        estLivretADemandeOuvertureVad(): boolean;
    }
}

declare module myway.gestionEpargne.commun {
    const enum LogType {
        DEBUG = 1,
        ERROR = 2,
        INFO = 3,
        WARNING = 4,
    }
    interface IServiceTrace {
        debug(message: string, action?: any, object?: any): void;
        error(message: string, action?: any, object?: any): void;
        info(message: string, action?: any, object?: any): void;
        warn(message: string, action?: any, object?: any): void;
        warning(message: string, action?: any, object?: any): void;
        historiqueLog: string;
    }
    class ServiceTrace {
        private $q;
        private $timeout;
        private static CLASS_NAME;
        private static logger;
        private _logType;
        private colors;
        historiqueLog: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService);
        /**
         * Méthode d'affichage des logs dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        log(message?: string, object?: any, logType?: string): void;
        /**
         * Méthode d'affichage des logs en mode DEBUG dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        debug(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode ERROR dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        error(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode INFO dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        info(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warning(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warn(message: string, object?: any, cache?: boolean): void;
        traceServiceLogger(logType: string, message: string, object?: any, cache?: boolean): void;
        private getTime();
        clearHistoriqueLog(): void;
        logType: string;
    }
}

declare module myway.gestionEpargne.commun {
    class Su1pService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        estSU1PValide(codeAppli: string): ng.IPromise<boolean>;
        private su1pFilterDDEJDA(item);
    }
}

declare module myway.gestionEpargne.commun {
}

declare module myway.gestionEpargne.commun {
    function mwRecapitulatifVersementRegulier(): ng.IDirective;
}

declare module myway.gestionEpargne.commun {
    class ConversionRibBicIban {
        /**
         * Référence d'identification d'un établissement financier ou assimilé au niveau international.
         * BIC = Bank Identifier Code ; norme ISO 9362
         *
         * Format : de 8 à 11 car
         *  - Code banque sur 4 caractère
         *  - Code pays sur 2 caractères ISO 3166
         *  - Code emplacement sur 2 caractères (ville, état, province)
         *  - Code branche sur 3 caractères optionnel (agence)
         *     * Si BIC sur 8 car : siège central national de la banque
         * Codification Caisse Epargne :
         * CEPAFRPPXXX XXX : 2/3/4ème chiffres du code établissement
         */
        codeBic: string;
        /**
         * Numéro IBAN du compte pour lequel on recherche le BIC
         *   Référence d'identification du compte bancaire au niveau international
         *   IBAN = International Bank Account Number Format : norme ISO 13616
         *
         *   Code pays : 2 caractères - norme ISO 3166
         *   Clé de contrôle : 2 caractères - norme ISO 7604
         *   Numéro de base (BBAN) : référence du compte dans le pays d'origine jusqu'à 30 caractères, format fixe par pays
         *   France : RIB du compte sur 23 caractères, clé inclue
         *
         *   Exemple pour France (format fixe 27 caractères) : FRKK BBBB BGGG GGCC CCCC CCCC Ckk
         *      - FR - Pays
         *      - KK - Clé
         *      - IBAN :
         *         * B - Banque
         *         * G - Guichet
         *         * C - Compte
         *         * K - Clé
         *
         *   Pas d'espace sous forme électronique
         */
        numeroIbanCompteBeneficiaire: string;
        /**
         * Numéro d'identification d'un compte géré par un établissement du Groupe BPCE.
         */
        numeroCompte: string;
        /**
         * Référence d'identification d'un établissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         *   Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ...
         *   Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         *
         *   Exemples :
         *   '17515' - CE Ile de France
         *   '16275' - CE Nord France Europe
         *   '43199' - Crédit Foncier de France
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         *   Un établissement bancaire peut disposer de plusieurs guichets.
         *
         *   Exemples :
         *   '90000' - IDF PARIS de la CE Ile de France
         *   '00600' - LILLE de la CE Nord France Europe
         */
        codeGuichet: string;
        /**
         * clé RIB du compte.
         */
        cleRib: number;
    }
}

declare module myway.gestionEpargne.commun {
    class InformationEcheancier {
        /**
         * Code type traitement
         */
        codeTypeTraitement: string;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Code interbancaire banque
         */
        codeEtablissement: string;
        /**
         * Code guichet banque
         */
        codeGuichet: string;
        /**
         * Numéro compte client donneur ordre
         */
        numeroCompteClientDonneurOrdre: string;
        /**
         * Clé RIB numéro compte
         */
        cleRibNumeroCompte: string;
        /**
         * Code BIC banque donneur ordre
         */
        codeBicBanqueDonneurOrdre: string;
        /**
         * Numéro IBAN compte donneur ordre
         */
        numeroIbanCompteDonneurOrdre: string;
        /**
         * Priorité virement
         */
        prioriteVirement: string;
        /**
         * Type virement immédiat
         */
        typeVirementImmediat: string;
        /**
         * Code devise ISO 4217 alpha-3
         */
        codeDevise: string;
        /**
         * Montant contre valeur
         */
        montantContreValeur: number;
        /**
         * Code devise contre-valeur
         */
        codeDeviseContreValeur: string;
        /**
         * Code périodicité
         */
        codePeriodicite: string;
        /**
         * Date première échéance
         */
        datePremiereEcheance: Date;
        /**
         * Date dernière échéance
         */
        dateDerniereEcheance: Date;
        /**
         * Code état dossier de prélèvement
         */
        codeEtatDossierPrelevement: string;
        /**
         * Jour de référence échéancier
         */
        jourReferenceEcheancier: string;
        /**
         * Type jour référence échéancier
         */
        typeJourReferenceEcheancier: string;
        /**
         * Code application DEI origine
         */
        codeApplicationDeiOrigine: string;
        /**
         * Type instruction
         */
        typeInstruction: string;
        /**
         * date de contre appel
         */
        dateContreAppel: Date;
        /**
         * Numéro téléphone
         */
        numeroTelephone: string;
        /**
         * Référence transaction
         */
        referenceTransaction: string;
        /**
         * Code BIC Destinataire
         */
        codeBicDestinataire: string;
        /**
         * Numéro IBAN compte bénéficiaire
         */
        numeroIbanCompteBeneficiaire: string;
        /**
         * Libellé complet bénéficiaire
         */
        libelleCompletBeneficiaire: string;
        /**
         * Identifiant bénéficiaire
         */
        identifiantBeneficiaire: string;
        /**
         * Indicatif pays bénéficiaire
         */
        indicatifPaysBeneficiaire: string;
        /**
         * Code Pays banque du bénéficiaire
         */
        codePaysBanqueBeneficiaire: string;
        /**
         * Code Pays résidence du bénéficiaire
         */
        codePaysResidenceBeneficiaire: string;
        /**
         * Code économique
         */
        codeEconomique: string;
        /**
         * Libellé 1 du virement immédiat
         */
        libelle1VirementImmediat: string;
        /**
         * Libellé 2 du virement immédiat
         */
        libelle2VirementImmediat: string;
        /**
         * Libellé 3 du virement immédiat
         */
        libelle3VirementImmediat: string;
        /**
         * Libellé 4 du virement immédiat
         */
        libelle4VirementImmediat: string;
        /**
         * Type compte destinataire
         */
        typeCompteDestinataire: string;
        /**
         * Référence donneur ordre
         */
        referenceDonneurOrdre: string;
        /**
         * Identifiant donneur ordre
         */
        identifiantDonneurOrdre: string;
        /**
         * Libellé bénéficiaire ultime
         */
        libelleBeneficiaireUltime: string;
        /**
         * Identifiant bénéficiaire ultime
         */
        identifiantBeneficiaireUltime: string;
        /**
         * Libellé donneur ordre ultime
         */
        libelleDonneurOrdreUltime: string;
        /**
         * Identifiant donneur ordre ultime
         */
        identifiantDonneurOrdreUltime: string;
        /**
         * Code classe idt bénéficiaire ultime
         */
        codeClasseIdtBeneficiaireUltime: string;
        /**
         * Code classe idt donneur ordre ultime
         */
        codeClasseIdtDonneurOrdreUltime: string;
        /**
         * Code classe idt donneur ordre
         */
        codeClasseIdtDonneurOrdre: string;
        /**
         * Code classe idt bénéficiaire
         */
        codeClasseIdtBeneficiaire: string;
        /**
         * Libellé nature paiement
         */
        libelleNaturePaiement: string;
        /**
         * Code catégorie paiement
         */
        codeCategoriePaiement: string;
        /**
         * Valeur dernier numéro distribué
         */
        valeurDernierNumeroDistribue: string;
        /**
         * Code acteur création dossier
         */
        codeActeurCreationDossier: string;
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService: number;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Référence virement tutelle
         */
        referenceVirementTutelle: number;
        /**
         * Identifiant remise magnétique
         */
        identifiantRemiseMagnetique: string;
        /**
         * Numéro ordre opération
         */
        numeroOrdreOperation: number;
        /**
         * 1iere ligne adresse bénéficiaire
         */
        adresse1Beneficiaire: string;
        /**
         * 2ieme ligne adresse bénéficiaire
         */
        adresse2Beneficiaire: string;
        /**
         * 3ieme ligne adresse bénéficiaire
         */
        adresse3Beneficiaire: string;
        /**
         * 4ieme ligne adresse bénéficiaire
         */
        adresse4Beneficiaire: string;
        /**
         * Identifiant dossier SEPA
         */
        identifiantDossierSepa: string;
        /**
         * Identifiant dossier virement SEPA
         */
        identifiantDossierVirementSepa: string;
        /**
         * Montant mouvement virement immédiat
         */
        montantMouvementVirmtImmediat: number;
        /**
         * Date d'opération'
         */
        dateOperation: string;
        constructor();
    }
}

declare module myway.gestionEpargne.commun {
    class CodeTypeVirementVersementPeriodique {
        static INTERNE: string;
        static EXTERNE: string;
        static DV_PROPRE_SOINS: string;
        static DV_INTERNE: string;
        static DV_EXTERNE: string;
    }
    class VersementRegulierService {
        private $parse;
        private serviceAgentExtended;
        private $q;
        private filtreCodeProduitService;
        private communicationComposantService;
        private saisieRiceService;
        static $inject: string[];
        private restServiceUrl;
        private urlRest;
        constructor($parse: ng.IParseService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, filtreCodeProduitService: myway.gestionEpargne.commun.FiltreCodeProduitService, communicationComposantService: myway.gestionEpargne.commun.CommunicationComposantService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * Requête POST
         * Permet de créer un versement périodique dans une offre
         * param {InformationEcheancier} informationEcheancier
         * @returns {promise<InformationEcheancier>}
         */
        postInformationEcheancier(informationEcheancier: InformationEcheancier): ng.IPromise<InformationEcheancier>;
        /**
         * Requête POST
         * Permet d'initialiser un object InformationEcheancier
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @param {ConversionRibBicIban} conversionRibBicIban
         * @param {string} numeroCompte
         * @returns {InformationEcheancier}
         */
        initInformationEcheancier(versementPeriodique: MyWay.Model.VersementPeriodique, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, conversionRibBicIban: ConversionRibBicIban, numeroCompte: string, dateOperation?: string): InformationEcheancier;
        /**
         * Méthode permettant de détermine le BIC et l'IBAN à partir du RICE passé en paramètre
         * @param {string} codeEtablissement
         * @param {string} codeGuichet
         * @param {string} numeroCompte
         * @param {number} cleRib
         * @returns {ng.IPromise<ConversionRibBicIban>}
         */
        getBicIban(codeEtablissement: string, codeGuichet: string, numeroCompte: string, cleRib: number): ng.IPromise<ConversionRibBicIban>;
        /**
         * Permet de lancer le composant de versmeent périodique
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @param {string} codeCanal - canal de vente (FF, TL, etc)
         * @returns {MyWay.Model.ParametreVersementPeriodique}
         */
        lancerVersementPeriodique(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, codeCanal: string): MyWay.Model.ParametreVersementPeriodique;
        /**
         * Permet de restituer le composant de versement périodique en revant de l'écran de récap
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {MyWay.Model.ParametreVersementPeriodique}
         */
        restituerVersementPeriodiqueParametre(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): MyWay.Model.ParametreVersementPeriodique;
        /**
         * Permet de tester si l'offre en cours contient un versement périodique ou pas
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @returns {boolean}
         */
        testActivationVersementRegulier(versementPeriodique: MyWay.Model.VersementPeriodique): boolean;
        /**
         * Permet de tester si l'offre en cours contient un versement périodique ou pas
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @returns {GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]}
         */
        checkVersementRegulier(versementPeriodique: MyWay.Model.VersementPeriodique, libelleProduit: string): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        private verifierVersementPeriodique(versementPeriodique);
    }
}

declare module myway.gestionEpargne.commun {
    class VirementInterneController {
        private $scope;
        private serviceAgentExtended;
        private operationFinanciereService;
        static $inject: string[];
        rice: MyWay.Model.Rice;
        numeroPersonne: string;
        soldeCompteChoisi: number;
        afficherBoutonSaisirCompte: boolean;
        static TEXTE_SAISIR_AUTRE_COMPTE: string;
        static TEXTE_BOUTON_AFFICHER_LISTE: string;
        static TEXTE_LETTRE_CODE_ETAT_RECHERCHE_T: string;
        static TEXTE_LETTRE_TYPE_RECHERCHE_B: string;
        texteBouton: string;
        compteSelectionne: MyWay.Model.Contrat;
        parametreListeComptes: MyWay.Model.ParametresListeComptes;
        typeRecherche: string;
        codeEtatRecherche: string;
        listeNumerosPersonnes: string[];
        listeTypesProduits: string[];
        codeDevise: string;
        estForcage: boolean;
        blocageEditionVirement: boolean;
        /** Compte à enlever de la liste des comptes. */
        compteEnleverListe: MyWay.Model.Contrat;
        /** Permet de forcer l'affichage du rice saisie. */
        forcerAffichageRiceSaisie: boolean;
        /** Permet de pré remplir le RICE saisie. */
        riceSaisiePreRemplit: MyWay.Model.Rice;
        /** Permet de pré selectionné le guichet du RICE (selection d'un guichet spécifique lors qu'il y a multi-guichet). */
        codeGuichet: string;
        /** texte à afficher pour la liste des comptes */
        itemBottomText: string;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService);
        /**
         * Permet les traitements pour mettre a jour la liste des comptes en fonction des paramètres.
         */
        traitementRechercheComptes(): void;
        /**
         * Permet de switcher entre les 2 boutons (Saisir Compte et Afficher la liste)
         */
        boutonSaisirCompte(): void;
    }
}

declare module myway.gestionEpargne.commun {
    function gestionEpargneVirementInterne(): ng.IDirective;
}

declare module myway.gestionEpargne.commun {
    class CaracteristiqueGenerale {
        operationFinanciere: myway.gestionEpargne.commun.OperationFinanciere;
        donneesCommunes: myway.gestionEpargne.commun.DonneesCommunesExtended;
        specifiqueLGP: SpecifiqueLgp;
        constructor(operationFinanciere?: myway.gestionEpargne.commun.OperationFinanciere, specifiqueLgp?: SpecifiqueLgp, donneesCommunes?: myway.gestionEpargne.commun.DonneesCommunesExtended);
    }
    class SpecifiqueLgp {
        /**
         * 'N'         Nationale - Prioritaire  -> obsolète
         * 'R'         Régionale
         * 'C'         Client - Prioritaire
         */
        codePrioriteCampagne: string;
        /**
         * Date début de la compagne
         */
        dateDebutCampagne: Date;
        /**
         * 'O'         appel de QR en ouverture
         * 'A'         appel de QR en avenant
         * 'I'         appel de QR en interrogation
         * 'D'         appel de QR en Détail
         */
        codeOrigineAppel: string;
        /**
         * Date début de l'application de rémunération
         */
        dateDebutApplicationRemu: Date;
        /**
         * Date fin de la campagne
         */
        dateFinCampagne: Date;
        /**
         * Date de la fin de l'application de rémunération
         */
        dateFinApplicationRemu: Date;
        /**
         * Intitulé de la campagne
         */
        intituleCampagne: string;
        /**
         * Montant minimum de l'opération
         */
        montantMiniOperation: number;
        /**
         * Montant plafond de rémunération bonif
         */
        montantPlafondRemu: number;
        /**
         * Taux versement à l'ouverture inscrit sur l'écran de saisie
         */
        codeTypeTaux2: string;
        /**
         * Code type Taux 1
         */
        codeTypeTaux1: string;
        /**
         * Taux versement à l'ouverture inscrit sur l'écran de saisie
         */
        tauxVersementOuverture: number;
        /**
         * Taux versement à l'ouverture minimum
         */
        tauxVersementOuvertureMin: number;
        /**
         * Taux versement à l'ouverture maximum
         */
        tauxVersementOuvertureMax: number;
        /**
         * Taux versement complémentaire inscrit sur l'écran de saisie
         */
        tauxVersementComplementaire: number;
        /**
         * Taux versement complémentaire minimum
         */
        tauxVersementComplementaireMin: number;
        /**
         * Taux versement complémentaire maximum
         */
        tauxVersementComplementaireMax: number;
        /**
         * Est-ce que l'on accorde ou non les taux bonifiés au client ?
         */
        tauxBonifiesAccordes: boolean;
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Ce service permet d'effectuer les appels REST permettant d'ouvrir, de faire un avenant ou récupérer les données d'un livret 01
     * Livret B, Livret Grand Prix, Livret Grand Format, Livret 10-12, Livret Ecureil+
     */
    class CompteSurLivretService {
        private $q;
        private serviceAgentExtended;
        private epargneCommunService;
        static $inject: string[];
        private restServiceUrl;
        private data;
        private caracteristiqueGenerale;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, epargneCommunService: myway.gestionEpargne.commun.EpargneCommunService);
        /**
         * Requête POST
         * Permet de créer un contrat sur livret 01
         * @param {CaracteristiqueGenerale} caracteristiqueGeneraleCpteSurLivret - contient les donnees communes aux offres epargne, les données spécifiques au LGP et l'operation financière
         * @param {ParametresCaracteritiqueGeneraleLivretPOST} parametresRequete
         * @returns {ng.IPromise<CaracteristiqueGenerale>}
         */
        creerContratCompteSurLivret(caracteristiqueGeneraleCpteSurLivret: CaracteristiqueGenerale, parametresRequete: ParametresCaracteritiqueGeneraleLivretPOST): ng.IPromise<CaracteristiqueGenerale>;
        /**
         * Requête GET
         * Permet de récupérer les données d'un livret 01
         * @param {ParametresCaracteritiqueGeneraleLivretGET} parametresRequete
         * @returns {ng.IPromise<CaracteristiqueGenerale>}
         */
        getCaracteristiqueGenerale(parametreRequete: ParametresCaracteritiqueGeneraleLivretGET): ng.IPromise<CaracteristiqueGenerale>;
        /**
         * Requête PUT
         * Permet d'enregistrer l'avenant sur un livret 01
         * @param {CaracteristiqueGenerale} caracteristiqueGeneraleCpteSurLivret - contient les donnees communes aux offres epargne, les données spécifiques au LGP et l'operation financière
         * @param {number} tauxVersementComplementaire - specifique LGP
         * @returns {ng.IPromise<CaracteristiqueGenerale>}
         */
        putCaracteristiqueGenerale(caracteristiqueGenerale: CaracteristiqueGenerale, tauxVersementComplementaire?: number): ng.IPromise<CaracteristiqueGenerale>;
        getCaracteristiqueGeneraleObject(): CaracteristiqueGenerale;
        setCaracteristiqueGeneraleObject(caracteristiqueGenerale: CaracteristiqueGenerale): void;
    }
}

declare module myway.gestionEpargne.commun {
    class ParametresCaracteritiqueGeneraleLivretPOST {
        /**
         * NODAPE du titulaire
         */
        numeroPersonne: number;
        /**
         * NODIET du Titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Numero de l'offre
         */
        numeroOffreSouscrite: number;
        codeRepriseSuccursale: string;
        /**
         * Badge de forçage
         * 0000 si normal 3999 si forçage
         */
        numeroBadge: string;
        nombreQuinzainesRestantACourir: string;
        indicValidationMsgInformation: string;
        /**
         * numéro du bordereau de quittance d'operation
         */
        bordereau: number;
        /**
         * Mode de fonctionnement
         * "C" si controle, "M" si mise en gestion
         */
        modeFonctionnement: string;
        /**
         * Specifique LGP
         */
        tauxVersementOuverture: number;
        /**
         * Specifique LGP
         */
        tauxVersementComplementaire: number;
    }
    class ParametresCaracteritiqueGeneraleLivretGET {
        /**
         * Code de l'établissement bancaire
         */
        codeEtablissement: string;
        /**
         * code guichet interbancaire
         */
        codeGuichet: string;
        /**
         * Numero du compte
         */
        numeroCompte: string;
        /**
         * IDEGPS
         */
        identifiantProduitService: number;
        codeProduit: string;
        indicateurPartageVisible: boolean;
        indicateurTracabiliteVisible: boolean;
        numeroPersonne: number;
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * Interface permettant de définir le dossier de vente
     */
    interface IDossierVente {
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * class permettant de définir les données à enregistrer dans le DV concernant l'OPE-FI dans le cadre de la VAD
     */
    class OperationFinanciereDV {
        operationFinanciere: myway.comOpesFinancieres.Model.ChoixUtilisateurOpeFi;
        constructor();
    }
}

declare module myway.gestionEpargne.commun {
    /**
     * class permettant de définir les données à enregistrer dans le DV concernant le versement périodique dans le cadre de la VAD
     */
    class VesementPeriodiqueDV {
        version: string;
        periodicite: string;
        montant: number;
        codeDevise: string;
        libelle: string;
        dateDebut: string;
        dateFin: string;
        ricePrelevement: string;
        ibanPrelevement: string;
        bicPrelevement: string;
        libelleComptePrelevementProduit: string;
        libelleComptePrelevementEntiteTitulaire: string;
        constructor();
    }
}

declare module myway.gestionEpargne.commun {
    class CreerDossierDeVenteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de créer un dossier de vente complet pour tous les produits/services
         * @param {GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC} donneesMDEC
         * @param {GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService} donneesSauvegardeProduitService
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {boolean} estModifie
         * @param {boolean} indicateurForcageVPC
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>}
         */
        creerDossierDeVente(donneesMDEC: GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC, donneesSauvegardeProduitService: GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService, operationFinanciere?: myway.comOpesFinancieres.Model.OperationFinanciere, estModifie?: boolean, indicateurForcageVPC?: boolean): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>;
    }
}

declare module myway.gestionEpargne.commun {
    class EnregistrerCreditCoopDansDVService {
        private $q;
        private communNumberService;
        static $inject: string[];
        constructor($q: ng.IQService, communNumberService: CommunNumberService);
        /**
         * Permet d'enregistrer les données MDEC pour le credit coop
         * @param {myway.transProduitEngage.ProduitEngageFormulaire} formulaireProduitEngage
         * @returns {GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC}
         */
        getVueMDECCreditCoop(formulaireProduitEngage: myway.transProduitEngage.ProduitEngageFormulaire): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
    }
}

declare module myway.gestionEpargne.commun {
    class EnregistrerOpeFiDansDVService {
        private $q;
        private epargneCommunService;
        private operationFinanciereService;
        private communNumberService;
        static $inject: string[];
        private MODE_FINANCIER_02_LIBELLE;
        private MODE_FINANCIER_02_LIBELLE_CORRIGE;
        constructor($q: ng.IQService, epargneCommunService: EpargneCommunService, operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, communNumberService: CommunNumberService);
        /**
         * Permet de créer les données technique lié à la BAT OPE-FI
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @returns {OperationFinanciereDV}
         */
        creerDonneesSauvegardeOperationFinanciere(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere): OperationFinanciereDV;
        /**
         * Pérmet d'enregistrer les données MDEC pour l'operation financière
         * @param {myway.comOpesFinancieres.Model.OperationFinanciere} operationFinanciere
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC}
         */
        getVueMDECOPEFI(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        /**
         *
         * @param {MyWay.Model.Contrat} virementInterne
         */
        formatterLibelleCompteVirementInterne(virementInterne: MyWay.Model.Contrat): string;
    }
}

declare module myway.gestionEpargne.commun {
    class EnregistrerVersPerDansDVService {
        private $q;
        private communNumberService;
        private epargneCommunService;
        static $inject: string[];
        constructor($q: ng.IQService, communNumberService: CommunNumberService, epargneCommunService: EpargneCommunService);
        /**
         * créer les données de sauvegarde dossier de vente pour le composant versement périodique
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @returns {VesementPeriodiqueDV}
         */
        creerDonneesSauvegardeVersementPeriodique(versementPeriodique: MyWay.Model.VersementPeriodique): VesementPeriodiqueDV;
        /**
         * Créer la vue MDEC pour le dossier de vente pour le composant versement périodique
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @returns {GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC}
         */
        getVueMDECEcheancier(versementPeriodique: MyWay.Model.VersementPeriodique): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        /**
         * vérifier le composant versement périodique avant de le sauvgarder dans le DV
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @returns {boolean}
         */
        verifierVersementPeriodique(versementPeriodique: MyWay.Model.VersementPeriodique): boolean;
    }
}

declare module myway.gestionEpargne.commun {
    class RestituerOperationFinanciereService {
        private operationFinanciereService;
        private deviseService;
        private filtreCodeProduitService;
        static $inject: string[];
        constructor(operationFinanciereService: myway.comOpesFinancieres.OperationFinanciereService, deviseService: DeviseService, filtreCodeProduitService: myway.gestionEpargne.commun.FiltreCodeProduitService);
        restituerOperationFinanciere(operationFinanciereDV: OperationFinanciereDV, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, codeProduit: string, codeTypeProduit: string): ng.IPromise<myway.comOpesFinancieres.Model.OperationFinanciere>;
        /**
         * Permet de restituer les signataires cochés dans le bloc signataires
         * @returns {void}
         */
        restituerListeNumerosPersonnesPourVirementInterne(operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere, signatairesRestitution: myway.comContract.modeles.ISignataireComplet[], numeroPersonne: number): string[];
    }
}

declare module myway.gestionEpargne.commun {
    class RestituerVersementPeriodiqueService {
        private serviceAgentExtended;
        private $q;
        private filtreCodeProduitService;
        private epargneCommunService;
        private saisieRiceService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, filtreCodeProduitService: FiltreCodeProduitService, epargneCommunService: EpargneCommunService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * Permet de restituer le paramètre du versement périodique
         * @param {VesementPeriodiqueDV} versementPeriodiqueDV
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {MyWay.Model.ParametreVersementPeriodique}
         */
        restituerParametreVersementPeriodique(versementPeriodiqueDV: VesementPeriodiqueDV, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, codeTypeProduit?: string): MyWay.Model.ParametreVersementPeriodique;
        /**
         * Permet de restituer l'objet versement périodique
         * @param {VesementPeriodiqueDV} versementPeriodiqueDV
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @returns {MyWay.Model.VersementPeriodique}
         */
        restituerVersementPeriodique(versementPeriodiqueDV: VesementPeriodiqueDV, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): MyWay.Model.VersementPeriodique;
    }
}

declare module myway.gestionEpargne.commun {
    class CommunVersementPeriodiqueControleur {
        private $scope;
        private $rootScope;
        private epargneCommunService;
        private filtreCodeProduitService;
        private communVersementPeriodiqueService;
        private signataireVersementPeriodiqueService;
        private serviceAgentExtended;
        /**
         * NE PAS UTILISER, en cours de développement.
         */
        static $inject: string[];
        /**
         *  Variables récupérées lors de l'appel de la directive, en paramètres
         */
        listeSignataires: myway.comContract.modeles.ISignataireComplet[];
        identifiantPersonneTitulaire: string;
        codeProduitAppelant: string;
        enVad: string;
        afficherFormulaireSaisieRice: boolean;
        datejour: Date;
        genPel: string;
        listePeriodicite: Array<Object>;
        parametreListeComptes: MyWay.Model.ParametresListeComptes;
        checkAdresseDomTom: boolean;
        pays: Array<Object>;
        donnesGeneriques: myway.gestionEpargne.commun.VersementPeriodiqueGenerique;
        riceSaisi: MyWay.Model.Rice;
        private afficherSaisieRice;
        donnesPEL: myway.gestionEpargne.commun.VersementPeriodiquePEL;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, epargneCommunService: myway.gestionEpargne.commun.EpargneCommunService, filtreCodeProduitService: myway.gestionEpargne.commun.FiltreCodeProduitService, communVersementPeriodiqueService: myway.gestionEpargne.commun.VersementPeriodiqueService, signataireVersementPeriodiqueService: myway.gestionEpargne.commun.SignataireVersementPeriodiqueService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode pour vérifier le type Interne
         * @returns {boolean}
         */
        estPEL(): boolean;
        /**
         * Appel de la bonne fonction de validation suivant le produit
         * @returns {boolean} Renvoie VRAI si le formulaire est validé
         */
        validerDonnees(): boolean;
        /**
         * Méthode pour validation de donnes generique
         * @returns {boolean}
         */
        private validationDonnesGenerique();
        /**
         * Méthode pour validation de donnes PEL
         * @returns boolean
         */
        private validationDonnesPEL();
        /**
         * Met a jour la liste des comptes pour le versement périodique, en fonction des signataires cochés
         */
        modifierParametresListeComptes(): void;
        estEnVAD(): boolean;
        afficherCacherSaisieRice(): void;
        afficherLienListeComptes(): boolean;
        afficherLienSaisirAutreCompte(): boolean;
        private initialiserRice();
        estInitialise(): boolean;
    }
}

declare module myway.gestionEpargne.commun {
    class ListeSignataires {
        private identifiantTitulaire;
        private identifiantPersonne;
        private identifiantsSignataires;
        private comptesAutorisesTitulaire;
        private comptesAutorisesSignataires;
        constructor(identifiantTitulaire: string);
        ajouterSignataire(signataire: string | number): void;
        ajouterCompteTitulaire(listeComptes: string[]): void;
        ajouterComptesSignataires(listeComptes: string[]): void;
        getListeSignataires(): string[];
        getListeComptesAutorises(): string[][];
    }
}

declare module myway.gestionEpargne.commun {
    class VersementPeriodiqueGenerique {
        compteSelectionne: MyWay.Model.Contrat;
        montant: number;
        periodicite: MyWay.Model.Periodicite;
        libelle: string;
        dateDebut: string;
        dateFin: string;
    }
}

declare module myway.gestionEpargne.commun {
    class VersementPeriodiquePEL extends VersementPeriodiqueGenerique {
        versementAutomatique: boolean;
        typeVirement: string;
    }
}

declare module myway.gestionEpargne.commun {
    function mwCommunVersementPeriodique(): ng.IDirective;
}

declare module myway.gestionEpargne.commun {
    class SignataireVersementPeriodiqueService {
        private $parse;
        private serviceAgentExtended;
        private $q;
        private filtreCodeProduitService;
        private communVersementPeriodiqueService;
        private epargneCommunService;
        static $inject: string[];
        listeComptesSuivantBlocSignataires: myway.gestionEpargne.commun.ListeSignataires;
        constructor($parse: ng.IParseService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, filtreCodeProduitService: myway.gestionEpargne.commun.FiltreCodeProduitService, communVersementPeriodiqueService: myway.gestionEpargne.commun.VersementPeriodiqueService, epargneCommunService: myway.gestionEpargne.commun.EpargneCommunService);
        getListeComptesAutorises(identifiantPersonneTitulaire: string, identifiantsPersonnes: myway.comContract.modeles.ISignataireComplet[]): myway.gestionEpargne.commun.ListeSignataires;
    }
}

declare module myway.gestionEpargne.commun {
    class VersementPeriodiqueService {
        private $parse;
        private serviceAgentExtended;
        private $q;
        private filtreCodeProduitService;
        static $inject: string[];
        /**
         * Contient le code produit appelant la directive
         */
        private codeProduitAppelant;
        /**
         * Contient l'identifiant de personne titulaire du compte
         */
        /**
         * Contient la liste des signataires
         */
        private tableauListeSignataires;
        constructor($parse: ng.IParseService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, filtreCodeProduitService: myway.gestionEpargne.commun.FiltreCodeProduitService);
        /**
         * @returns {string} Renvoie le code produit appelant la directive
         */
        /**
         * @param {string} Code produit appelant la directive
         */
        produitAppelant: string;
        /**
         * @returns {string} Renvoie la liste des signataires
         */
        /**
         * @param {string[]} Liste des signataires
         */
        listeSignataires: string[];
    }
}
