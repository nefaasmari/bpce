
declare module DeblocageFonds.Commun.Constantes.Inject {
    module Angular {
        const $q: string;
        const $modalInstance: string;
        const $scope: string;
        const $filter: string;
    }
    module MyWay {
        const serviceAgentExtended: string;
    }
    module Logger {
    }
    module Services {
        const myFlowServices: string;
        const dossierNumeriqueCreditServices: string;
        const montantUtilsServices: string;
        const restServices: string;
    }
    module Filtres {
        const montantDevise: string;
    }
}

declare module DeblocageFonds.Commun {
    var app: any;
}

declare module DeblocageFonds.Commun.Constantes.Commun {
    module Devise {
        const codeEuro: string;
    }
    module Rest {
        const restDemandeMultiCanal: string;
        const restCreditParametreV6: string;
        const restClasseurMetier: string;
        const demande: string;
        const listerParamApplicatif: string;
        const dossNUmeriqueMetier: string;
    }
}

declare module DeblocageFonds.Commun.Constantes.MyFlow {
    module Cles {
        const codeTypeTache: string;
        const libelleTypeTache: string;
        const libelleCorbeille: string;
        const topDevise: string;
        const codeDevise: string;
        const codeStatutSED: string;
        const avis: string;
        const conformite: string;
        const codeCategorieEmprunteur: string;
        const codeTypeObjetRegle: string;
        const topVip: string;
        const topEtatSignature: string;
        const topOrigineDemande: string;
        const topTypeFinancement: string;
        const topApplication: string;
        const topPhaseCredit: string;
        const topGarantieATraiter: string;
        const topPresencePrescripteur: string;
        const topProduitReglemente: string;
        const topAssurance: string;
        const topEditionAgence: string;
        const typeFinancement: string;
        const structureDelegataire: string;
        const identifiantSDPI: string;
        const typeLoi: string;
        const typeEdition: string;
        const libelleOrigineDemande: string;
        const statutDossier: string;
        const numeroCreditGestion: string;
        const numeroDossierGestion: string;
        const codeTypeCanal: string;
        const topCreditCollaborateur: string;
        const prescripteur: string;
        const assuranceIQS: string;
        const canal: string;
        const phaseCredit: string;
        const montant: string;
        const numeroDemandeDeblocage: string;
        const dateSouhaiteDemande: string;
        const dateSignatureNotaire: string;
        const destinataireDeblocage: string;
        const libelleDestinataireDeblocage: string;
    }
    module Libelle {
        const corbeilleDevise: string;
        const corbeilleVIP: string;
        const corbeilleReglemente: string;
        const corbeilleComplexe: string;
        const corbeilleStandard: string;
        const myCreditGestion: string;
        const originePortailInternetClient: string;
        const originePortailInternetNotaire: string;
        const tacheFrais: string;
        const tacheHorsFrais: string;
    }
    module Code {
        const tache302Frais: string;
        const tache303HorsFrais: string;
        const origineMyCreditGestion: string;
        const originePortailInternetClient: string;
        const originePortailInterneNotaire: string;
        const typeMotif106: string;
        const myCg: string;
        const ecugest: string;
    }
}

declare module DeblocageFonds.Commun.Filtres {
    function montantDevise(): (montant: number, devise: string) => string;
}

declare module DeblocageFonds.Commun.Modeles.DemandeMultiCanal.Demande {
    interface IDonneesDemandeDeblocage {
        numeroDemandeDeblocage: string;
        dateSouhaiteeDemandeDeblocage: string;
        dateNotaireDemandeDeblocage: string;
        dateSignatureDossier: string;
        dateCreationDemandeMyFlow: string;
        montantDemandeDeblocage: string;
        codeTache: string;
        codeDevise: string;
        codeFamilleControle: string;
        codeCategorieEmprunteur: string;
        codeDestinataireMyFlow: string;
        codeEtablissement: string;
        codeTypeLoi: string;
        codeApplicationEmetrice: string;
        codeTypeCanal: string;
        /**
         * 2 pour DEI, 3 pour MyCreditGestion, 4 pour Notaire
         */
        codeTypeCanalNumerique: string;
        codeTypeMotif: string;
        codeOrigine: string;
        libelleTache: string;
        libelleDestinataireMyFlow: string;
        identifiantDossierSynchro: string;
        identifiantDossierNeo: string;
        identifiantPersonne: string;
        numeroInterneEdsAgent: string;
        applicationEmetrice: string;
        typeObjetReglementeCredit: string;
        canal: string;
        /** Liste crédits séparés par un - */
        listeCredits: string;
    }
    interface IDemande {
        caracteristique: ICaracteristique;
        formulaire: IFormulaire;
        nonClient: INonClient;
        objetDemande: IObjetDemande;
        serviceResult?: IServiceResult;
    }
    interface IServiceResult {
        code: number;
        message: string;
    }
    interface ICaracteristique {
        /**
         * Identifiant de la demande connue du Système Mysys (GDMc)
         */
        identifiantDemande: string;
        /**
         * Identifiant interne de la demande dans MyFlow
         */
        identifiantDemandeMyFlow?: string;
        /**
         * Code type d'une demande
         */
        codeTypeMotif: string;
        /**
         * Décrit le Canal par lequel a été initier la demande.
         * Reprendre typo MySys
         */
        codeTypeCanal: string;
        /**
         * Décrit le device sur lequel a été initiée la demande
         * Reprendre typo MySys
         */
        codeTypeDevice?: string;
        /**
         * Code caisse
         */
        codeEtablissement: string;
        /**
         * Code qualifiant le porteur de la demande.
         * A pour valeurs :
         *   - 1 : Demande Client
         *   - 2 : Demande non client
         *   - 3  : Demande Interne établissement (Collaborateur)
         */
        codeTypePorteurDemande: string;
        /**
         * Numéro abonné BAD de la personne à l'origine de la demande.
         */
        numeroAbonneInitiateurDemande?: string;
        /**
         * Identifiant porteur de la demande
         * si codeTypePorteurDemade = 1 (demande client) alors IdentifiantPorteur demande = Identifiant Personne
         * codeTypePorteurDemade = 3 (demande agent) alors IdentifiantPorteur Demande = Identifiant Agent
         */
        identifiantPorteurDemande: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE. Correspond à un poste fonctionnel, ... Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: string;
        piecesJointe: Array<IPieceJointe>;
        /**
         * Code du Motif MyFlow aossocié à la demande
         */
        codeTypeMotifMyFlow?: string;
        /**
         * Date de création de la demande
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Application émettrice (ex: MyCredimmo)
         */
        applicationEmettrice: string;
        /**
         * Code applicatif ARIS de l'application émettrice (ex: NEO)
         */
        codeApplicationEmettrice: string;
        /**
         * Code interne structure d'affectation de la tâche "applicationExterne" (Code EDS interne structure)
         */
        codeInterneStructureAffectation?: string;
        /**
         * Poste fonctionnel d'affectation de la tâche "application externe" (PF agent)
         */
        posteFonctionnelAffectation?: string;
        /**
         * Etat de la demande
         * - 01 : Clôturée
         * - 02 : Abandonné
         */
        etatDemande?: string;
        /**
         * Raison justifiant de l'état de la demande
         */
        raisonEtat?: string;
        /**
         * Commentaire relatif à l'état de la demande
         */
        commentaireEtat?: string;
        /**
         * Code application ARIS
         */
        codeApplication?: string;
        /**
         * Caractéristique ajoutée à la demande
         */
        nouvelleCaracteristique?: string;
    }
    interface IFormulaire {
        listeCleValeur: Array<ICleValeur>;
        /**
         * Version du formulaire
         */
        version: number;
        /**
         * Identifiant interne du formulaire associé à la demande
         */
        identifiantFormulaire: string;
    }
    interface ICleValeur {
        /**
         * Code clé
         */
        cle: string;
        /**
         * Valeur correspondante au code clé
         */
        valeur: string;
        /** Valeur si on affiche le champ ou non. */
        display?: string;
    }
    interface INonClient {
        /**
         * Titre de civilité
         */
        civilite: string;
        /**
         * Nom de naissance
         */
        nomPatronymique: string;
        /**
         * Nom marital
         */
        nomMarital: string;
        /**
         * Prénom
         */
        prenom: string;
        /**
         * Date de naissance
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Lieu de naissance
         */
        lieuNaissance: string;
        adresse: IAdresse;
        /**
         * Numéro de téléphone fixe
         */
        telephoneFixe: string;
        /**
         * Numéro de téléphone portable
         */
        telephonePortable: string;
        /**
         * Adresse e-mail
         */
        adresseMail: string;
        /**
         * Numéro de carte bancaire
         */
        numeroCarte: string;
    }
    interface IAdresse {
        /**
         * Etage du logement
         */
        etage: string;
        /**
         * Numéro d'appartement
         */
        appartement: string;
        /**
         * Numéro de porte
         */
        porte: string;
        /**
         * Numéro ou nom du bâtiment
         */
        batiment: string;
        /**
         * Numéro et nom de la voie ou de la rue liée à l'adresse
         */
        rue: string;
        /**
         * Nom du lieu-dit
         */
        lieuDit: string;
        /**
         * Code postal de la commune liée à l'adresse
         */
        codePostal: string;
        /**
         * Dénomination de la commune liée à l'adresse
         */
        localite: string;
        /**
         * Code INSEE du pays
         */
        codeInseePays: string;
    }
    interface IPieceJointe {
        /**
         * Identifiant de la pièce jointe
         */
        identifiantPieceJointe: string;
    }
    interface IObjetDemande {
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte. Ce critère de recherche ne peut être utilisé uniquement pour les comptes de dépôt / épargne.
         */
        numeroRib?: string;
        /**
         * Référence interne de la gestion du compte ou service. Il correspond :
         * - au numéro de compte pour un livret A, un CDD,
         * - au numéro de prêt,
         * - au numéro de service,
         * - ...
         */
        referenceCompteService?: string;
        /**
         * Identifie un Produit/Service dans le catalogue BPCE. Correspond au niveau N-5 de la nomenclature des P/S.
         */
        codeProduit?: string;
        /**
         * Code qualifiant l'objet de la demande.
         * A pour valeurs :
         * - 1 : Contrat Dépôt Epargne
         * - 2 : Dossier Crédit
         * - 3 : Contrat Carte
         * - 4 : Contrat EDEN
         * - 5 : Contrat Titre
         * - 6 : Contrat Assurance
         */
        codeTypeObjetDemande: string;
        /**
         * Identifiant objet de la demande
         * - Si codeTypeObjetDemande = 1 (Contrat Dépôt Epargne), alors identifiantObjet = Identifiant contrat dépôt épargne souscrit dans un établissement
         * - Si codeTypeObjetDemande = 2 (Dossier Crédit), alors identifiantObjet = Identifiant dossier crédit
         * - Si codeTypeObjetDemande = 3 (Contrat Carte), alors identiantObjet = Identifiant contrat carte
         */
        identifiantObjet: string;
        /**
         * Libellé objet demande
         */
        libelleObjetDemande: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.ClasseurMetier.DossNumeriqueMetier {
    interface IParamGet {
        codeFournisseur: string;
        listeReferenceRegroupement?: string[];
        indicateurDocumentInvalide: boolean;
    }
    interface IDocumentVersionOutput {
        identifiantDocument: string;
        dateVersion: string;
        dateDocument: string;
        codeNature: string;
        identifiantDocumentGED: string;
        etatInjection: string;
        critereInjection: string;
        /**
         * Date metier
         * Type date au format yyyy-MM-dd
         */
        dateMetier: string;
        /**
         * Identifiant qui a modifié la date metier
         */
        agentModifDateMetier: string;
        /**
         * La date de la dernière modification de la date métier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifDateMetier: string;
        /**
         * Commentaire
         */
        commentaire: string;
        /**
         * Identifiant qui a modifié le commentaire
         */
        agentModifCommentaire: string;
        /**
         * La date de la dernière modification du commentaire
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifCommentaire: string;
        /**
         * Indicateur de de corbeille :
         * O pour document à la corbeille
         * N pour document non mis à la corbeille
         */
        indicateurCorbeille: boolean;
        /**
         * Identifiant qui a modifié l'indicateur de corbeille
         */
        agentModifIndicCorbeille: string;
        /**
         * La date de la dernière modification de l'indicateur de corbeille
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModifIndicCorbeille: string;
    }
    interface IDocumentOutput {
        typeDocument: string;
        codeNatureAcquisition: string;
        typeAttributaire: string;
        identifiantAttributaire: string;
        libelleAttributaire: string;
        critereInjection: string;
        metaDonnee: string;
        classementNiveau1: string;
        ordreNiveau1: string;
        classementNiveau2: string;
        ordreNiveau2: string;
        etatInjection: string;
        indicDeplacementEspaceArchivage: string;
        invalide: boolean;
        listeDocumentVersion: Array<IDocumentVersionOutput>;
    }
    interface IRegroupementOutput {
        identifiantRegroupement: string;
        referenceRegroupement: string;
        libelleRegroupement: string;
        indicateurVerrouille: boolean;
        identifiantEtablissementGce: string;
        agent: string;
        dateCreation: string;
        userCreation: string;
        dateModification: string;
        userModification: string;
        listeDocument: Array<IDocumentOutput>;
        /**
         * Date de la dernière importation automatique des documents
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateAutoImportDocm: string;
    }
    interface IDossierNumeriqueMetierOutput {
        listeRegroupement: Array<IRegroupementOutput>;
    }
    interface ICommentaire {
        /**
         * IdntDocm
         */
        idDocm: string;
        /**
         * LiblCommentaire
         */
        libelleCommentaire: string;
    }
    interface IDateMetier {
        /**
         * IdntDocm
         */
        idDocm: string;
        /**
         * DateMetr
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateMetier: string;
    }
    interface IQstnMettreAJourDateMetier {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        listeDateMetier: Array<IDateMetier>;
    }
    interface IQstnMettreAJourCorbeilleSuppression {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        /**
         * ListIdntDoc
         */
        listeIdDoc: Array<string>;
    }
    interface IQstnMettreAJourCorbeilleRestauration {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        /**
         * ListIdntDoc
         */
        listeIdDoc: Array<string>;
    }
    interface IQstnMettreAJourCommentaire {
        /**
         * IdntEtabGce
         */
        idEtabGce: string;
        listeCommentaire: Array<ICommentaire>;
    }
    interface IRspnCreerOuMajDossierNumerique {
        /**
         * IdntRegr
         */
        idRegr: string;
    }
    interface IBlocDocm {
        typeDoc: string;
        codeNatureAcq: string;
        typeAttrb: string;
        codeAttrb: string;
        libelleAttrb: string;
        metadonnee: string;
        critereInjc: string;
        classementNiveau1: string;
        ordreNiveau1: number;
        classementNiveau2: string;
        ordreNiveau2: number;
        indiceEnvoiDossierPartg: string;
        aideDoc: string;
    }
    interface IQstnCreerOuMajDossierNumerique {
        codeFour: string;
        idEtabGce: string;
        agent: string;
        referenceRegr: string;
        libelleRegr: string;
        metadonnee?: string;
        indiceEnvoiDossierPartg?: string;
        listeDoc: Array<IBlocDocm>;
    }
    interface IReponseImportAutomatique {
        nbDocumentImportes: number;
    }
    interface IQueryImportAutomatique {
        codeFour: string;
        referenceRegroupement: string;
    }
}

declare module DeblocageFonds.Commun.Modeles.ListeParamApplicatif {
    interface IParamGet {
        versionWsdl: number;
        dateDeTraitement: string;
        codeEtablissement: string;
        rubriquesFiltre?: string;
        valeursFiltre?: string;
        rubriquesTri?: string;
        valeurTri?: string;
    }
    interface IAnyType {
    }
    interface IScCriteresAcces {
        /**
         * RubriquesFiltre
         */
        rubriquesFiltre: Array<string>;
        /**
         * ValeursFiltre
         */
        valeursFiltre: Array<IAnyType>;
        /**
         * RubriquesTri
         */
        rubriquesTri: Array<string>;
        /**
         * ValeurTri
         */
        valeurTri: string;
    }
    interface IScElement {
    }
    interface IScParamApplicatif extends IScElement {
        /**
         * Idfcej_IdntCaisEpar
         */
        idCaisseEpargne: number;
        /**
         * Idfast_IdntElmtStrcInstr
         */
        idElementStructureInstruction: string;
        /**
         * Cdfcpf_CodeParmApplf
         */
        codeParametreApplicatif: string;
        /**
         * Ddftva_DateDebuVald
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * Dfftva_DateFinVald
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * Lbftpa_LiblParm
         */
        libelleParametre: string;
        /**
         * Ctfcpa_CodeTypeParm
         */
        codeTypeParametre: string;
        /**
         * Mtftpa_MtParmMt
         */
        montantParametreMontant: number;
        /**
         * Npfcpp_DurDunParm
         */
        dureeDunParametre: number;
        /**
         * Dtftpa_DateParmDate
         * Type date au format yyyy-MM-dd
         */
        dateParametreDate: string;
        /**
         * Txftt1_TxParmTx
         */
        tauxParametreTaux: number;
        /**
         * Llficl_ValrParm
         */
        valeurParametre: string;
        /**
         * Cdfcnv_CodeVersNeo
         */
        codeVersementNEO: string;
        /**
         * Cdfcnl_CodeRelsNeo
         */
        codeReleaseNEO: string;
        /**
         * VersParm
         */
        versementParametre: number;
    }
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateDeTraitement: string;
        criteresAccess: IScCriteresAcces;
        codeEtablissement: number;
    }
}

declare module DeblocageFonds.Commun.Modeles {
    interface IRetourQR {
        messageRetour: Array<string>;
        /**
         * Nous indique le type du message. 0 = informatif, 1 : erreur bloquante, 2 : erreur fonctionnelle, 3 : forcage, 4 : confirmation.
         */
        codeRetour: number;
        /**
         * Nous indique si l'erreur est bloquante.
         */
        isErreurBloquante: boolean;
    }
    interface IErreurQrCustom {
        estBloquant: boolean;
        message: string;
        objetErreurMyWay: MyWay.Services.Erreur;
    }
}

declare module DeblocageFonds.Commun.Services {
    class DossierNumeriqueCreditServices {
        private restServices;
        private $q;
        static $inject: string[];
        constructor(restServices: Services.RestServices, $q: ng.IQService);
        /**
         * Permet de savoir si un établissement est ouvert au DNC
         * @param codeEtablissement
         */
        estEtablissementOuvertAuDNC(codeEtablissement: string, dateTraitement: string): ng.IPromise<boolean>;
        /**
         * Permet de rechercher un dossier numérique crédit par dossier instruction
         * @param codeEtablissement
         * @param identifiantDossierInstruction
         */
        rechercheDossierNumeriqueCreditParDossierInstruction(codeEtablissement: string, identifiantDossierInstruction: string): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IDossierNumeriqueMetierOutput>;
        /**
         * Permet la création d'un dossier numérique crédit
         * @param codeEtablissement
         * @param codeAgent
         * @param identifiantDossierInstruction
         * @param codeFournisseur Par exemple "INCR"
         */
        creationDossierNumeriqueCredit(codeEtablissement: string, codeAgent: string, identifiantDossierInstruction: string, codeFournisseur: string, documents: Modeles.ClasseurMetier.DossNumeriqueMetier.IBlocDocm[]): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IDossierNumeriqueMetierOutput>;
    }
}

declare module DeblocageFonds.Commun.Services {
    class MontantUtilsServices {
        static $inject: any[];
        constructor();
        /**
         * Permet de faire une soustraction de montant et d'arrondir sans perte
         * @param montantASoustraire
         * @param montantSoustre
         * @param nombreDecimal
         */
        static soustractionMontant(montantASoustraire: number, montantSoustre: number, nombreDecimal?: number): number;
    }
}

declare module DeblocageFonds.Commun.Services {
    class MyFlowServices {
        private restServices;
        private $q;
        static $inject: string[];
        constructor(restServices: Services.RestServices, $q: ng.IQService);
        creationDemandeDeblocageMyFlow(parametres: Modeles.DemandeMultiCanal.Demande.IDonneesDemandeDeblocage): ng.IPromise<Modeles.DemandeMultiCanal.Demande.IDemande>;
        private mappingClesValeurs(parametres);
        /**
         * Permet d'ajouter via le POST une demande MyFlow
         * @param demande
         */
        postDemandeMyFlow(demande: Modeles.DemandeMultiCanal.Demande.IDemande): ng.IPromise<Modeles.DemandeMultiCanal.Demande.IDemande>;
        private mappingPostDemandeMyFlow(listeClesValeurs, parametres);
        /**
         * Creation d'un objet CleValeur pour le service REST MyFlow de demande
         * @param cle
         * @param valeur
         * @param isDisplay
         */
        private cleValeurMyFlow(cle, valeur, isDisplay);
    }
}

declare module DeblocageFonds.Commun.Services {
    class RestServices {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * POST la demande dans MyFlow
         * @param prestationMyFlow
         */
        postDemandeMyFlow(prestationMyFlow: Modeles.DemandeMultiCanal.Demande.IDemande): ng.IPromise<Modeles.DemandeMultiCanal.Demande.IDemande>;
        /**
         * Récupère la liste des paramètres applicatifs
         * @param param
         */
        getListerParamApplicatif(param: Modeles.ListeParamApplicatif.IParamGet): ng.IPromise<Modeles.ListeParamApplicatif.IScParamApplicatif[]>;
        /**
         * Récupère le dossier numérique d'un dossier d'instruction
         * @param param
         */
        getConsulterDossierNumerique(param: Modeles.ClasseurMetier.DossNumeriqueMetier.IParamGet): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IDossierNumeriqueMetierOutput>;
        /**
         * Permet la création ou la maj d'un dossier numérique
         * @param param
         */
        postDossierNumerique(param: Modeles.ClasseurMetier.DossNumeriqueMetier.IQstnCreerOuMajDossierNumerique): ng.IPromise<Modeles.ClasseurMetier.DossNumeriqueMetier.IDossierNumeriqueMetierOutput>;
    }
}
