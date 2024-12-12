
declare module myway.gestionEpargne.commun {
    var communModule: ng.IModule;
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
         * @return {}
         */
        ajouterLSE(codeEtablissement: string, codeGuichet: string, numeroPersonne: number, numeroCompte: string, dateNaissancePersonne: Date): void;
        /**
         * Permet de créer le body de la ressource PostLibreServiceEcureuil pour ajout de l'offre dans un LSE
         * @param {ContratLibreServiceEcureuil} contratLibreServiceEcureuil
         * @param {string} numeroCompte
         * @return {ContratLibreServiceEcureuil}
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
         * @return {ng.IPromise<ExistenceLSE>}
         */
        getExistenceLSE(codeEtablissement: string, codeGuichet: string, numeroPersonne: number, numeroCompte: string, dateNaissancePersonne: Date): ng.IPromise<ExistenceLSE>;
    }
}

declare module myway.gestionEpargne.commun {
    class CaracteristiqueGenerale {
        operationFinanciere: myway.gestionEpargne.commun.OperationFinanciere;
        donneesCommunes: myway.gestionEpargne.commun.DonneesCommunes;
        specifiqueLGP: SpecifiqueLgp;
        constructor(operationFinanciere?: myway.gestionEpargne.commun.OperationFinanciere, specifiqueLgp?: SpecifiqueLgp, donneesCommunes?: myway.gestionEpargne.commun.DonneesCommunes);
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
         * @return {ng.IPromise<CaracteristiqueGenerale>}
         */
        creerContratCompteSurLivret(caracteristiqueGeneraleCpteSurLivret: CaracteristiqueGenerale, parametresRequete: ParametresCaracteritiqueGeneraleLivretPOST): ng.IPromise<CaracteristiqueGenerale>;
        /**
         * Requête GET
         * Permet de récupérer les données d'un livret 01
         * @param {ParametresCaracteritiqueGeneraleLivretGET} parametresRequete
         * @return {ng.IPromise<CaracteristiqueGenerale>}
         */
        getCaracteristiqueGenerale(parametreRequete: ParametresCaracteritiqueGeneraleLivretGET): ng.IPromise<CaracteristiqueGenerale>;
        /**
         * Requête PUT
         * Permet d'enregistrer l'avenant sur un livret 01
         * @param {CaracteristiqueGenerale} caracteristiqueGeneraleCpteSurLivret - contient les donnees communes aux offres epargne, les données spécifiques au LGP et l'operation financière
         * @param {number} tauxVersementComplementaire - specifique LGP
         * @return {ng.IPromise<CaracteristiqueGenerale>}
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
    }
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
        /**
         * Données contextuelles de GGO
         */
        contexteAppel: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
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
        constructor(resultat: IResultatCommercial);
    }
}

declare module myway.gestionEpargne.commun {
}

declare module myway.gestionEpargne.commun {
    function mwRecapitulatifVersementInitial(): ng.IDirective;
}

declare module myway.gestionEpargne.commun {
    class BatOpeFiService {
        private $parse;
        private $q;
        private serviceAgentExtended;
        private deviseService;
        private filtreCodeProduitService;
        static $inject: string[];
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        forcageBadge: boolean;
        constructor($parse: ng.IParseService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, deviseService: DeviseService, filtreCodeProduitService: myway.gestionEpargne.commun.FiltreCodeProduitService);
        /**
         * Notifie à GGO que le chargement des données du controleur est terminé afin d'arrêter le spinner sur l'ihm
         */
        notifierChargementTermine(scope: ng.IScope, idBloc: string): void;
        /**
         * Initialiser l'objet de la BAT OP-FI au chargement de l'offre
         * @return myway.comOpesFinancieres.Model.OperationFinanciere
         */
        initialiserOperationFinanciere(codeProduit: string, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, codeTypeProduit: string, codeFonctionnalite?: string): myway.comOpesFinancieres.Model.OperationFinanciere;
        setOperationFinanciere(operationFinanciere?: myway.comOpesFinancieres.Model.OperationFinanciere): void;
        getOperationFinanciere(): myway.comOpesFinancieres.Model.OperationFinanciere;
        setTrueForcageBadge(): void;
        setFalseForcageBadge(): void;
        getForcageBadge(): boolean;
    }
}

declare module myway.gestionEpargne.commun {
    class EpargneCommunService {
        private espaceGlobalService;
        static $inject: string[];
        constructor(espaceGlobalService: myway.c0410.commun.EspaceGlobalService);
        /**
         * Permet de récupérer la personne concerné par l'offre en cours à partir du contexte GGO
         */
        extraireDonneesPersonne(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.Tiers.Personne;
        /**
         * Permet de récupérer le numéro de personne concerné par l'offre en cours à partir du contexte GGO
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @return {number}
         */
        identifierNumeroPersonne(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): number;
        /**
         * Permet de récupérer le numéro entité titulaire concerné par l'offre en cours à partir du contexte GGO
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @return {number}
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
         * @return {myway.c0410.compteDeDepot.DonneesCompte}
         */
        enregistrerObjetgenerique(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, numeroCompte: string, identifiantBordereau?: string): myway.c0410.compteDeDepot.DonneesCompte;
        /**
         * Créer objet generique C05.10
         * @param {myway.c0410.compteDeDepot.DonneesCompte} donneesCompte
         * @param {InformationEcheancier} informationEcheancier
         * @return {ObjetGeneriqueC0510}
         */
        creerObjetGeneriqueC0510(donneesCompte: myway.c0410.compteDeDepot.DonneesCompte, informationEcheancier: InformationEcheancier): ObjetGeneriqueC0510;
        /**
         * Permet de calculer l'age à partir de la date de naissance
         * @param {Date} dateNaissance
         * @return {number}
         */
        calculateAge(dateNaissance: Date): number;
        /**
         * Permet de filtrer et de récupérer les caractéristiques du produit/ service à partir du tableau fourni par GGO
         */
        filtrerReferencesProduit(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): GestionGeneriqueOffres.Types.ReferenceProduit;
        /**
         * Avenant compte simple
         */
        lancerAvenantSimple(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): void;
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
        constructor($q: ng.IQService);
        estMineurProtege(capaciteJuridique: string): boolean;
        estMajeurProtege(capaciteJuridique: string): boolean;
    }
}

declare module myway.gestionEpargne.commun {
    class DeviseService {
        private $q;
        private serviceAgentExtended;
        private epargneCommunService;
        static $inject: string[];
        private restServiceUrl;
        private data;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, epargneCommunService: myway.gestionEpargne.commun.EpargneCommunService);
        /**
         * Requête GET
         * Permet d'avoir les caractéristique de la devise
         * @return promise<Devise>
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
        static PLAN_EPARGNE_LOGEMENT: string;
        static CSL_DEVISE_CAD: string;
        static CSL_DEVISE_USD: string;
    }
    class FiltreCodeProduitService {
        constructor();
        getFiltreProduit(produit: string): string[];
        private filtreBDDHorsCompteAttente();
        private filtreBDD();
        private filtreCSLDevise();
    }
}

/**
 * Ce service référence des fonctionnalités ggo réutilisable
 */
declare module myway.gestionEpargne.commun {
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
        creationErreurGgoTab(error: MyWay.Services.Erreur): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        /**
         * Concaténer les messages d'erreurs du service
         */
        messagesErreursGGO(error: MyWay.Services.Erreur): string;
        /**
         * Concaténer les messages d'erreurs du service
         */
        messagesInformationsPopine(error: MyWay.Services.Erreur): string;
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
         * @return promise<Personne[]>
         */
        getIntervenantEntiteTitulaire(codeEtablissement: string, identifiantPersonne: number, identifiantEntiteTitulaire: number): ng.IPromise<Personne[]>;
    }
}

declare module myway.gestionEpargne.commun {
    class CommunNumberService {
        /**
         *  Fonction permettant de créer un séparation de milliers pour un numéro en entrée
         *  @return string (numéro formatté)
         */
        formatAffichageNumber(nbr: string): string;
        /**
         *  Fonction permettant de créer le format de l'argent MyWay à partir d'un entier
         *  @return string
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
        static $inject: string[];
        private numeroRadical;
        private cleCompte;
        private cleRice;
        constructor($q: ng.IQService, epargneCommunService: myway.gestionEpargne.commun.EpargneCommunService, affectationRadicalService: myway.comInterdomaine.AffectationRadicalService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, signatureElectroniqueService: myway.comContract.Services.SignatureElectroniqueService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, postOperationFinanciere: myway.comOpesFinancieres.PostOperationFinanciereService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, ggoService: myway.gestionEpargne.commun.GgoService, communicationComposantService: myway.gestionEpargne.commun.CommunicationComposantService, versementRegulierService: myway.gestionEpargne.commun.VersementRegulierService, modalService: MyWay.UI.ModalService, controlePersonneProtegeService: myway.gestionEpargne.commun.ControlePersonneProtegeService, intervenantEntiteTitulaireService: myway.gestionEpargne.commun.IntervenantEntiteTitulaireService, resultatCommercialService: ResultatCommercialService, ajoutLSEService: AjoutLSEService);
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
        /**
         * Effectue les traitements qui suivent la mise en gestion
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @param {boolean} eligibleSag - eligibilité à la signature electronique
         * @param {number} montantAnnuelEcheancierPEL - montant annuel des échéance d'un PEL
         * @returns void
         */
        traitementPostMiseEnGestion(controleur: IControleur, eligibleSag: boolean): ng.IPromise<void>;
        versementPeriodiqueMiseEnGestion(controleur: IControleur, compteRenduMiseEnGestion: GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Préparer le compte rendu de la mise en gestion pour ggo
         * @param {IControleur} controleur
         * @param {boolean} eligibleSag
         * @param {GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]} retourMessages
         * @param {myway.c0410.compteDeDepot.DonneesCompte} donneesCompte
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
         * @returns myway.c0410.compteDeDepot.DonneesCompte
         */
        getDonneesCompte(): myway.c0410.compteDeDepot.DonneesCompte;
        /**
         * Fonction générique de validation des données pour le passage en récapitulatif en avenant simple (sans traitements)
         * @param {IControleur} controleur - Un controleur gerant une offre epargne
         * @returns {ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>} tableau des possibles erreurs survenues lors de la transaction pour renvoi à GGO
         */
        validerOffreAvenantSimple(controleur: IControleur): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
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
        enregistrerResultatCommercial(numeroPersonne: number, identifiantProduitService: number, montantOperation: number): ng.IPromise<IResultatCommercial>;
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
        private creerResultatCommercialProduit(numeroPersonne, identifiantProduitService, montantOperation);
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
        constructor();
    }
}

declare module myway.gestionEpargne.commun {
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
         * @return {promise<InformationEcheancier>}
         */
        postInformationEcheancier(informationEcheancier: InformationEcheancier): ng.IPromise<InformationEcheancier>;
        /**
         * Requête POST
         * Permet d'initialiser un object InformationEcheancier
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @param {ConversionRibBicIban} conversionRibBicIban
         * @param {string} numeroCompte
         * @return {InformationEcheancier}
         */
        initInformationEcheancier(versementPeriodique: MyWay.Model.VersementPeriodique, contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, conversionRibBicIban: ConversionRibBicIban, numeroCompte: string): InformationEcheancier;
        /**
         * Méthode permettant de détermine le BIC et l'IBAN à partir du RICE passé en paramètre
         * @param {string} codeEtablissement
         * @param {string} codeGuichet
         * @param {string} numeroCompte
         * @param {number} cleRib
         * @return {ng.IPromise<ConversionRibBicIban>}
         */
        getBicIban(codeEtablissement: string, codeGuichet: string, numeroCompte: string, cleRib: number): ng.IPromise<ConversionRibBicIban>;
        /**
         * Permet de lancer le composant de versmeent périodique
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @return {MyWay.Model.ParametreVersementPeriodique}
         */
        lancerVersementPeriodique(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): MyWay.Model.ParametreVersementPeriodique;
        /**
         * Permet de restituer le composant de versement périodique en revant de l'écran de récap
         * {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte
         * @return {MyWay.Model.ParametreVersementPeriodique}
         */
        restituerVersementPeriodiqueParametre(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles): MyWay.Model.ParametreVersementPeriodique;
        /**
         * Permet de tester si l'offre en cours contient un versement périodique ou pas
         * @param {MyWay.Model.VersementPeriodique} versementPeriodique
         * @return {boolean}
         */
        testActivationVersementRegulier(versementPeriodique: MyWay.Model.VersementPeriodique): boolean;
    }
}
