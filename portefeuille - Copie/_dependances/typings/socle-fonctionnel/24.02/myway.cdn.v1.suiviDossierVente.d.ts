
declare module myway.credits.suiviDossierVente.Constantes.Inject {
    const restService: string;
    const creditParametreService: string;
    const espacePartageService: string;
    const classeurClientParametrageService: string;
    const dossierPartageService: string;
    const piecesJustificativesService: string;
}

declare module myway.credits.suiviDossierVente {
    var app: any;
    class FilterNames {
        static CIVILITE: string;
    }
}

declare module myway.credits.suiviDossierVente.Constantes.CollecteVAD {
    const listeTypeDocument: string[];
    const documentJustificatifIdentite: Models.CollecteVAD.IDocument;
    const documentJustificatifDomicile: Models.CollecteVAD.IDocument;
    const documentJustificatifRevenu: Models.CollecteVAD.IDocument;
    const documentJustificatifAutre: Models.CollecteVAD.IDocument;
    const documentDeclarationRevenusFonciers: Models.CollecteVAD.IDocument;
    const documentBilan: Models.CollecteVAD.IDocument;
    const documentCreditExterne: Models.CollecteVAD.IDocument;
    const documentReleveCompteAutrebanque: Models.CollecteVAD.IDocument;
    const documentdevis: Models.CollecteVAD.IDocument;
    const documentFacture: Models.CollecteVAD.IDocument;
    const documentQuittanceLoyer: Models.CollecteVAD.IDocument;
    const documentBail: Models.CollecteVAD.IDocument;
    const documentCarteEtudiant: Models.CollecteVAD.IDocument;
    const docAttestationEmployeur: Models.CollecteVAD.IDocument;
    const docJustificatifAutoEcole: Models.CollecteVAD.IDocument;
    const docAttestLogementaTitreGratuit: Models.CollecteVAD.IDocument;
    const docAttestPensionInvalidite: Models.CollecteVAD.IDocument;
    const docJugementDeDivorce: Models.CollecteVAD.IDocument;
    const docJustifPensionAlimentaire: Models.CollecteVAD.IDocument;
    const docJustifCreditExterne: Models.CollecteVAD.IDocument;
    const docLivretDeFamille: Models.CollecteVAD.IDocument;
    const docTaxeFonciere: Models.CollecteVAD.IDocument;
    const docRIBExterne: Models.CollecteVAD.IDocument;
    const codeNotifPJ1: string;
    const codeNotifPJ2: string;
    const codeNotifPJ3: string;
    const codeNotifPJ4: string;
    const listePieceCollecteVAD: Models.CollecteVAD.IPieceCollecteVAD[];
}

declare module myway.credits.suiviDossierVente.Constantes {
    module Etablissement {
        module Code {
            const CAISSE_EPARGNE_MIDI_PYRENEES: number;
        }
    }
    module GceDoc {
        const IDNT_ATTR: number;
    }
    module Code {
        module ModeVente {
            const FACE_A_FACE: string;
            const VENTE_A_DISTANCE: string;
            const VENTE_EN_LIGNE: string;
        }
        module CanalCommunication {
            const FACE_A_FACE: string;
            const TELEPHONE: string;
            const INTERNET: string;
        }
    }
    module Context {
        const NUMERO_FFI: string;
        const MODE_VENTE: string;
        const ID_TRANSACTION_ICG: string;
        const MODE_SIGNATURE: string;
        const ENVOI_EMAIL: string;
        const REMISE_PAPIER: string;
        const MODE_ENVOI: string;
        const INDICATEUR_IMPRESSION: string;
    }
    module Application {
        const refVersionApplication: string;
    }
    module Rest {
        module EspacePartage {
            const codeAppliInttDossPartgVAD: string;
            const codeRestNatrVAD: string;
        }
        module ClasseurClient {
            const idComposantApplciatifCollecteVAD: string;
        }
    }
}

declare module suiviDossierVente.Constantes {
    /**
     * Gestion des urls pour les appels aux services REST
     */
    module Services {
        module UrlRessourcesRest {
            var urlDossierVenteGestionDossierVente: string;
            var urlTiersParticulierInformationEtatCivile: string;
        }
    }
}

declare module myway.credits.suiviDossierVente.Constantes {
    module Services {
        module UrlRessoutcesRest {
            var URL_RESSOURCE_GESTION_DOSSIER_VENTE: string;
        }
    }
    class DossierVente {
        static referencePJ: string;
        static referenceMdecPp: string;
        static referenceDataIzivente: string;
        static referenceNotifPJ: string;
        static referenceUrlCollecte: string;
        static referenceMDPJ: string;
        static prefixeMdpjSection: string;
        static codeVision: number;
        static indicateurGestionPiecePresent: string;
        static indicateurGestionPieceAbsent: string;
        static codeEtapeSimulationEffectuee: string;
        static codeEtapeSimulationConfirmee: string;
    }
    class Environnement {
        static DUA: string;
        static VFO: string;
        static UTI: string;
    }
    var urlSiteWebCe: string;
}

declare module myway.credits.suiviDossierVente {
    interface IInterventionDossier {
        codeAction: string;
        codeCanal: string;
        codeEdsAgentAffectation: number;
        codeEdsAgentTraitement: number;
        codeEntiteVente: string;
        codeErreurApplicative: string;
        codeEtapeVente: string;
        codeEvenement: string;
        codeMotifCommunication: string;
        codeMoyenContact: string;
        codeSensCommunication: string;
        codeStatutEtape: string;
        dateHeureIntervention: Date | string;
        designationAgentAffectation: string;
        designationAgentTraitement: string;
        identifiantInterventionDossier: number;
        indicateurRelance: string;
        libelleAction: string;
        libelleCanal: string;
        libelleEdsAgentAffectation: string;
        libelleEdsAgentTraitement: string;
        libelleEntiteVente: string;
        libelleErreurApplicative: string;
        libelleEtapeVente: string;
        libelleEvenement: string;
        libelleMotifCommunication: string;
        libelleMoyenContact: string;
        libelleNatureIntervention: string;
        libelleSensCommunication: string;
        libelleStatutEtape: string;
        nomAgentAffectation: string;
        nomAgentTraitement: string;
        prenomAgentAffectation: string;
        prenomAgentTraitement: string;
        referenceAgentAffectation: number;
        referenceAgentTraitement: number;
    }
    interface IHistoriqueIntervention {
        dossierVente: IDossierVente;
        listeInterventionDossier: Array<IInterventionDossier>;
    }
    interface IActeurContexte {
        codeEntiteVenteContexte: string;
        codeEdsInternePFContexte: number;
        codeEdsExternePFContexte: number;
        typeEdsExterneContexte: string;
        codeEdsInterneRattachContexte: number;
        referenceExterneAgentContexte: number;
    }
    interface IActeurDerniereModification {
        codeEntiteVenteDerMod: string;
        libelleEntiteVenteDerMod: string;
        codeEdsInternePFDerMod: number;
        nomAgentDerMod: string;
        prenomAgentDerMod: string;
        codeEdsInterneRattachDerMod: number;
        referenceExterneAgentDerMod: number;
    }
    interface IActionPossible {
        codeActionPossible: string;
        libelleActionPossibleAgent: string;
        libelleActionPossibleClient: string;
        codeTypeActionPossible: string;
        codeOperationFonctionnelle: string;
        identifiantProcessusSI: string;
        valeurEntreeProcessusSI: number;
        rangBoutonAction: number;
    }
    interface IAlerteFonctionnelle {
        codeAlerteFonctionnelle: number;
        libelleAlerteFonctionnelle: string;
    }
    interface ICanalReprise {
        codeCanalReprise: string;
        libelleCanalReprise: string;
        rangAffichageCanalReprise: number;
        codeSensCommunicReprise: string;
        libelleSensCommunicReprise: string;
    }
    interface ICheminAvancement {
        codeJalon: string;
        libelleJalon: string;
        codeFranchissement: string;
        rangJalon: number;
    }
    interface ICommentaire {
        texteCommentaire: string;
    }
    interface ICompositionCaracteristique {
        referenceProduitServiceCompo: string;
        identifiantOccurrence: number;
        identifiantPereOccurrence: number;
        libelleActeGestionComposition: string;
        codeSousFamilleActeComposition: string;
        codeNatureActeGestion: string;
        codeModaliteDetention: string;
        numeroEntiteTitulaireCompo: number;
        numeroPersonneComposition: number;
        codeModeFinancier: string;
        codeEtablissementOperation: string;
        indicateurServiceDetenu: string;
        numeroOffreOrigine: number;
        indicateurMiseEnGestion: string;
        dateCreationLigneComposition: string;
        identifiantProduitServiceCompo: number;
        identifiantLigneComposition: number;
    }
    interface ICompositionDonneeDetail {
        identifiantDonneeDetailJson: number;
        referenceExterneData: string;
        donneeData: string;
    }
    interface IDonneeData {
        _id: string;
        _data: IData;
        _pj: string[];
    }
    interface IData {
        NrDossier: string;
        CdFaisabilite: string;
        Teg: number;
        Montant: number;
        Duree: number;
        NbEch: number;
        MensHorsAssr: number;
        MensAvAssr: number;
        CoutCrdtHorsAssr: number;
        CoutCrdtAvAssr: number;
        NoteBale2: string;
        EliSign: string;
        LibMotNonEli: string;
        ModePilEdit: string;
    }
    interface IMdpjSections {
        sections: Array<IMdpjSection>;
    }
    interface IMdpjSection {
        titresSections: Array<IMdpjTitreSection>;
        champs: Array<IMdpjChamps>;
    }
    interface IMdpjTitreSection {
        libelle: string;
        vision: string;
    }
    interface IMdpjChamps {
        libelle: string;
        valeur: string;
        vision: string;
    }
    interface IStockagePieceJustificative {
        piecesJustificatives: IPersonnePieceJustificative;
    }
    interface IPersonnePieceJustificative {
        personne: Array<IPersonneDetailPiece>;
    }
    interface IPersonneDetailPiece {
        titreSection: string;
        listePiece: Array<string>;
    }
    interface ICompositionDossier {
        compositionCaracteristique: ICompositionCaracteristique;
        listeCompositionDonneeDetail: Array<ICompositionDonneeDetail>;
    }
    interface IContractualisationSignature {
        codeModeSignature: string;
        libelleModeSignature: string;
        identifiantDocumentNumerise: string;
        indicateurEnvoiHubmail: string;
        identifiantTransactionContract: string;
        dateSignature: string;
    }
    interface IDonneePrincipale {
        numeroOffre: number;
        libelleOffreVisionAgent: string;
        libelleOffreVisionClient: string;
        codeActeGestionPrincipal: string;
        indicateurProcessusMyway: string;
        dateCreationDossier: string;
        dateDerniereRelance: string;
        indicateurGestionPiece: string;
        codeNotificationAEmettre: string;
        referenceOffreMysys: number;
        codeModeVente: string;
        codeCaractereSignature: string;
        dateModificationDossier: string;
        indicateurExecutionImmediate: string;
        nomAgentAffecte: string;
        prenomAgentCreation: string;
        nomAgentCreation: string;
        prenomAgentAffecte: string;
        dateConfirmationDossier: string;
        codeSousFamilleActePrincipal: string;
        identProduitServicePrincipal: number;
        libelleModeVente: string;
        libelleCaractereSignature: string;
        libelleActeGestionPrincipal: string;
        referenceExterneAgentCreation: number;
        referenceExterneAgentAffecte: number;
        codeCanalCreation: string;
    }
    interface IDossierVente {
        codeEtablissement: string;
        identifiantDossierVente: number;
        codeExterneApplication: string;
        identifiantExterneDossierVente: string;
    }
    interface IEtapeEnCours {
        codeCanalEnCours: string;
        libelleCanalEnCours: string;
        libelleStatutActionAMener: string;
        identifiantEtape: number;
        codeProcessus: string;
        libelleProcessus: string;
        codeEtape: string;
        libelleEtapeClient: string;
        libelleEtapeAgent: string;
        codeStatut: string;
        libelleStatutClient: string;
        libelleStatutAgent: string;
        libelleActionReservee: string;
        dateDebutEtape: string;
        dateFinEtape: string;
        dateEcheanceEtape: string;
        codeSensCommunicEnCours: string;
        libelleSensCommunicEnCours: string;
    }
    interface IGestionDossierVente {
        dossierVente: IDossierVente;
        donneePrincipale: IDonneePrincipale;
        commentaire: ICommentaire;
        etapeEnCours: IEtapeEnCours;
        partenaire: IPartenaire;
        acteurDerniereModification: IActeurDerniereModification;
        acteurContexte: IActeurContexte;
        contractualisationSignature: IContractualisationSignature;
        listePersonneLiee: Array<IPersonneLiee>;
        listeCompositionDossier: Array<ICompositionDossier>;
        listeCheminAvancement: Array<ICheminAvancement>;
        listeActionPossible: Array<IActionPossible>;
        listeCanalReprise: Array<ICanalReprise>;
        listeAlerteFonctionnelle: Array<IAlerteFonctionnelle>;
        /**
         * Désérialise les données génériques d'un produit dossier de vente et en renvoie le résultat dans un tableau de données génériques désérialisées.
         * la fonction prend en compte la limite de taille de champ imposée par DB2 qui impose de découper les JSON par bloc de 3000.
         * @param {Types.DossierDeVente.CompositionDossier} produit Le produit dossier de vente qui contient les blocs de données à désérialiser
         * @returns Les données désérialisées pour les P/S
         */
        deserialiserDonneesProduit(produit: ICompositionDossier): any;
        deserialiserDonneesMdec(): any;
        /**
         * Désérialise les données génériques d'un produit dossier de vente et en renvoie le résultat dans un tableau de données génériques désérialisées.
         * la fonction prend en compte la limite de taille de champ imposée par DB2 qui impose de découper les JSON par bloc de 3000.
         * @param {Types.DossierDeVente.GestionDossierVente} dossier Le dossier de vente
         * @param {string} id id de la donnée transverse
         * @returns Les données désérialisées pour les P/S
         */
        deserialiserDonneeTransverse(dossier: IGestionDossierVente, id: string): any;
    }
    interface IPartenaire {
        identifiantPartenaire: string;
        libellePartenaire: string;
    }
    interface IPersonneLiee {
        identifiantPersonne: string;
        codeRolePersonne: string;
        libelleRolePersonne: string;
        adresseMailPersonne: string;
        indicateurSignataire: string;
    }
    interface IParametresSuiviDossier {
        gestionDossierVente: IGestionDossierVente;
        codeCanal: string;
        codeSensCommunication?: string;
    }
    interface IGestionDossierVentePutQuery {
        gestionDossierVente: IGestionDossierVente;
        codeCanal: string;
        codeSensCommunication?: string;
    }
    interface IParticulierInformation {
        identifiantPersonne: string;
        codeEtablissement: string;
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libelleCapaciteJuridique: string;
        libellePaysNaissance: string;
        libelleInseePaysDoubleNationalite: string;
        libelleSituationFamiliale: string;
        libelleRegimeMatirimonial: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleTypeContratTravail: string;
        libelleNAFInsee: string;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        autresPrenom: string;
        codeSexe: string;
        dateNaissance: Date;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: Date;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: string;
        codeRegimeMatrimonial: string;
        typeClauseMatrimoniale: string;
        indicDonationEntreEpoux: string;
        nombreEnfantACharge: number;
        categorieSocioprofessionnelle: string;
        nomEmployeur: string;
        dateEffetCSP: string;
        dateEmbaucheEmployeurActuel: Date;
        codeTypeContratTravail: string;
        dateFinContratTravail: Date;
        libelleProfession: string;
        codeResident: string;
        codeAppartenanceReseau: string;
        edsDomiciliation: number;
        codePieceJustif: string;
        dateObtentionPieceJustificative: string;
        refPieceJustificative: string;
        codeTypeNIF: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        edsInterneDomiciliation: number;
        sirenEmployeur: string;
        sirenAutoEntrepreneur: string;
        indicateurAutoEntrepreneur: string;
        indicateurSocietaire: string;
        identifiantRelationtEconomique: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
        dateNaturalisation: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
        indicateurActiviteProfessionnel: string;
        codeGuichetRisque: number;
        identifiantAdresse: number;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeInseeLocalite: string;
        numeroVoiePTT: number;
        codePostalPTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        codeInseePays: string;
        codeTypeAdresse: string;
        codeRetourDistribution: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        libelleInseeLocalite: string;
        codeISOPays: string;
        indicateurEnvoiCourrier: string;
        indiceAmericaniteFATCA: string;
        libelleStatutFATCA: string;
        dateAttributionFATCA: Date;
        codeBlocageVAO: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        statutPro: IStatutPro;
        gestionPrivee: IGestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        nif: string;
    }
    interface IStatutPro {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: string;
        identifiantInterneAgentModification: string;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
    interface IGestionPrivee {
        identifiantPersonne: string;
        codeEtablissement: string;
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: string;
        identifiantExterneEDS: string;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: string;
        identifiantExterneEDS2: string;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
    }
    interface IHistoriqueInterventionService {
        sendGetRequest(dossierVente: IDossierVente): ng.IPromise<IHistoriqueIntervention>;
    }
    interface ISuiviDossierVenteEditiqueService {
        genererLettreAccompagnement(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, client: myway.credits.suiviDossierVente.IParticulierInformation, option: myway.credits.suiviDossierVente.IOptionDocument, adresse: myway.credits.suiviDossierVente.IAdresse, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
    }
    interface IOptionDocument {
        jeuDocument: IJeuDocumentDetail;
        jeuParametre: IJeuParametreCaracteristique;
        entiteVente: IEntite;
    }
    interface IJeuDocumentDetail {
        codeEtablissement: string;
        typeDocument: string;
        identJeuParametre: number;
        dateDebutValiditeJeuDoc: string;
        dateFinValiditeJeuDoc: string;
        dateMajEnrgJeuDoc: string;
        referenceExterneAgentDerModJeuD: number;
    }
    interface IJeuParametreCaracteristique {
        codeEtablissement: string;
        identifiantJeuParametre: number;
        libelleJeuParametre: string;
        dateDebutValiditeJeu: string;
        dateFinValiditeJeu: string;
        dateMajEnrgJeu: string;
        referenceExterneAgentDerModJeu: number;
    }
    interface IEntite {
        codeEntiteVente: string;
        listeJeuDetail: Array<IJeuDetail>;
    }
    interface IJeuDetail {
        codeRubriqueParametre: string;
        libelleTypeParametre: string;
        valeurOptionParametre: string;
        libelleOptionParametre: string;
        identifiantAdresseRetour: number;
        texteComplementaire: string;
        dateDebutValiditeParam: string;
        dateFinValiditeParam: string;
        dateMajEnrgParam: string;
        referenceExterneAgentDerModPara: number;
        adresseRetour: IAdresseRetourDetail;
    }
    interface IAdresseRetourDetail {
        designationAdresse: string;
        ligne1Adresse: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        dateDebutValiditeAdresse: string;
        dateFinValiditeAdresse: string;
        dateMajEnrgAdresse: string;
        referenceExterneAgentDerModAdre: string;
    }
    interface IInfoEDS {
        typeEDS: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        numeroTelephone: string;
        codePays: string;
        dateDebutValiditeEds: Date;
        dateFinValiditeEds: Date;
        identifiantInterneEDS: number;
        libelleEDS: string;
        referenceExterneEDS: number;
        codeEtablissement: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }
    interface IInfoPosteFonctionnel {
        codeAgent: number;
        typeFonction: string;
        libelleFonction: string;
        codeQualiteAgent: string;
        adresseEMail: string;
    }
    interface IInfoRattachementEDS {
        identifiantEDSRattachement: number;
        referenceEDSRattachement: number;
        typeEDSRattachement: string;
        libelleEDSRattachement: string;
        dateFinValiditeEDSRattachement: Date;
        responsableEDSRattachement: number;
    }
    interface IGestionDossierVenteService {
        codeActeGestion: string;
        numeroEntiteTitulaire: string;
        identifiantActeIDN: string;
        numeroPersonne: number;
        rang: number;
        role: number;
        nomFamille: string;
        prenom: string;
        listePersonneLiees: Array<IPersonneLiee>;
        codeCanalContexte: string;
        typeEdsExterneContexte: string;
        modeSignature: string;
        parametres: IParametresSuiviDossier;
        sendPutRequest(gestionDossierVentePutQuery: IGestionDossierVentePutQuery, actionPossible: string): ng.IPromise<IGestionDossierVente>;
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
        getContext(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        getPersonnesLiees(identifiantPersonne: string): ng.IPromise<myway.credits.suiviDossierVente.IParticulierInformation>;
        getIdentification(identifiantPersonne: string): ng.IPromise<IIdentification>;
        getOptionDocument(typeDocument: string, codeEntiteVente: string): ng.IPromise<IOptionDocument>;
        getAdresse(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<IAdresse>;
        getCaracteristiqueEDS(typeEDS: string, referenceExterneEDS: string): ng.IPromise<ICaracteristiqueEDS>;
        getParametre(gestionDossierVente: IGestionDossierVente): void;
    }
    interface IHistoriqueInterventionService {
        sendGetRequest(dossierVente: IDossierVente): ng.IPromise<IHistoriqueIntervention>;
    }
    interface IIdentification {
        donneeIdentification: IDonneeIdentification;
        lutteAntiBlanchiment: ILutteAntiBlanchiment;
        listMarche: Array<ICodeMarche>;
        suiviComercial: ISuiviCommercial;
    }
    interface IDonneeIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: Date;
    }
    interface ILutteAntiBlanchiment {
        codeAlerteVAO: boolean;
        messageAlerteVAO: string;
    }
    interface ICodeMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }
    interface ISuiviCommercial {
        identifiantEDSSuiviCommercial: number;
        typeEDSSuiviCommercial: string;
        referenceExterneEDSSuiviCommercial: number;
        identifiantAgent: number;
        designationCourteEDS: string;
        designationLongueEDS: string;
    }
    interface IAdresse {
        identificationPersonne: IIdentificationPersonne;
        listeAdresse: Array<IListeAdresse>;
    }
    interface IListeAdresse {
        ligneAdresse: ILigneAdresse;
        caracteristiqueAdresse: ICaracteristiqueAdresse;
    }
    interface ILigneAdresse {
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
    }
    interface ICaracteristiqueAdresse {
        codeRetourDistribution: string;
        libelleRetourDistribution: string;
        indicateurEnvoiCourrier: boolean;
        indicateurDifferencePostFisc: boolean;
    }
    interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
    }
}

declare module MyData {
    class MyChaine {
        valeur: String;
        static leftPadZero(aValeur: string, aTaille: number): string;
        toLeftPadZero(aTaille: number): string;
    }
    class MyNombre {
        valeur: Number;
        constructor(aNombre: number);
        static fromNumber(aNombre: number): MyNombre;
        toLeftPadZero(aTaille: number): string;
    }
    class MyDateHeure {
        static formatDateTiretAAAAMMJJ: string;
        static formatDateTiretAAAAMMJJhhmmss: string;
        static formatDateSlashJJMMAAAA: string;
        static formatDateSlashJJMMAAAAaHHhMM: string;
        static formatDateDivers001: string;
        static uniteJour: string;
        valeur: Date;
        constructor(aDate: Date);
        static fromDate(aDate: Date): MyDateHeure;
        static fromChaineTiretAAAAMMJJ(aDate: string): MyDateHeure;
        static fromChaineTiretAAAAMMJJ_HHMMSS(aDate: string, aHeure: string): MyDateHeure;
        static fromChaineDivers001(aDate: string): MyDateHeure;
        static nowDate(): MyDateHeure;
        static now(): MyDateHeure;
        toDate(): Date;
        toOnlyDate(): Date;
        toIsoString(): string;
        static estAujourdhui(aDate: Date): boolean;
        estAujourdhui(): boolean;
        static nbJoursDepuis(aDate: MyDateHeure): Number;
        toChaineMoment(aFormat: string): string;
        toChaineSlashJJMMAAAA(): string;
        toChaineSlashJJMMAAAAaHHhMM(): string;
        toChaineTiretAAAAMMJJ(): string;
    }
    class MyPeriode {
        debut: Date;
        fin: Date;
        constructor(debut: Date, fin: Date);
        static toChaineMaj(dateDebut: Date, dateFin: Date): string;
    }
    class MyDate {
    }
    class MyHeure {
    }
}

declare module myway.credits.suiviDossierVente {
    function civiliteFilter(codeCivilite: string): string;
}

declare module myway.credits.suiviDossierVente {
    class GcedocFactory {
        static getGenerationParams(infosDocument: IInfosDocumentGcedoc, identifiantAttributaire: string, intituleAttributaire: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo, codeDoc: string): MyWay.Services.Impression.GenerationParams;
        static getGenerationImpressionParams(infosDocument: IInfosDocumentGcedoc, identifiantAttributaire: string, intituleAttributaire: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.GenerationImpressionParams;
        static getParametresImpressionOptionnels(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.ParametresImpressionOptionnels;
        static getParametresGenerationOptionnels(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.ParametresGenerationOptionnels;
        static getParametresGenerationImpressionOptionnels(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        static getParametreActiveX(): MyWay.Services.Impression.ParametreActiveX;
        static getParametresArchivage(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.Archivage;
        static getGceContextSoapHeader(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.GceContextSoapHeader;
        static getQuestionsCreationDocument(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.AQstnCreerDoc;
        static getDonneesContextuelles(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.DonnCntx;
        static getDocument(): MyWay.Services.Impression.Document;
        static getEnteteGenerique(authentificationInfos: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, referenceActe: string): Editique.Generique.GENERIC_ENTETEETS[];
        static getGeneriqueLogo(authentificationInfos: MyWay.Services.Context.AuthentificationInfo): ListePiecesJustificatives.GenericLogoEts[];
    }
}

declare module myway.credits.suiviDossierVente {
    /**
     * Regroupe certaines informations techniques d'un document GCEDOC
     */
    interface IInfosDocumentGcedoc {
        nomFichier: string;
        sousRepModele: string;
        /**
         * Identifiant de l'application à l'origine de la demande
         */
        idApplicationOrigineDemande: string;
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
    }
    var editiqueInfosLettreAccompagnement: IInfosDocumentGcedoc;
    var editiqueInfosListePiecesJustificatives: IInfosDocumentGcedoc;
}

declare module myway.credits.suiviDossierVente.Models.CollecteVAD {
    interface IPieceCollecteVAD {
        isGroup: boolean;
        document: IDocument;
        precisions: string[];
        checked: boolean;
        canBeChecked: boolean;
        codeNOtifPJ: string;
        libelleNotifPJ: string;
        panelOpened?: boolean;
    }
    interface IDocument {
        code: string;
        label: string;
    }
    enum NiveauAffichage {
        type = 0,
        nature = 1,
    }
}

declare module myway.credits.suiviDossierVente {
    /**
     * Classe permettant d'effectuer la communication
     */
    class ContractualisationService {
        private $q;
        private contractualisationActeService;
        static $inject: string[];
        contractualisationActe: any;
        constructor($q: ng.IQService, contractualisationActeService: myway.comContract.Services.ContractualisationActeService);
        getContractualisation(acte: myway.comContract.ContractualisationActe.Modeles.IActe, listeSignataires: Array<myway.comContract.modeles.ISignataire>, listeTitulaires: Array<myway.comContract.ContractualisationActe.Modeles.ITitulaire>, nonEligibilite: boolean, mfNonEligibilite: string): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
    }
}

declare module myway.credits.suiviDossierVente {
    interface IDossierPartageService {
        getDossierPartage(codeEtab: string, idDossier: string): ng.IPromise<Rest.EspacePartage.DossierPartage.ICsultDossPartgRspn>;
        /**
         * Retourne l'id du dossier créé ou modifié
         * @param question
         */
        creerDossierPartage(dossierVente: IGestionDossierVente, codeAgent: string, personneLieeInfo: PersonneLieeInfo[]): ng.IPromise<number>;
    }
    /**
     * Classe permettant d'effectuer la communication
     */
    class DossierPartageService implements IDossierPartageService {
        private espacePartageService;
        private classeurClientParametrageService;
        static $inject: string[];
        contractualisationActe: any;
        constructor(espacePartageService: Rest.EspacePartage.IEspacePartageService, classeurClientParametrageService: Rest.ClasseurCLient.IParametrageService);
        getDossierPartage(codeEtab: string, idDossier: string): ng.IPromise<myway.credits.suiviDossierVente.Rest.EspacePartage.DossierPartage.ICsultDossPartgRspn>;
        creerDossierPartage(dossierVente: IGestionDossierVente, codeAgent: string, personneLieeInfo: PersonneLieeInfo[]): ng.IPromise<number>;
    }
}

declare module myway.credits.suiviDossierVente {
    /**
     * Service lié à l'éditique
     */
    class SuiviDossierVenteEditiqueService {
        private $q;
        private $filter;
        private serviceAgent;
        private gestionDossierVenteService;
        private svcParametrageEtablissement;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, serviceAgent: MyWay.Services.ServiceAgentExtended, gestionDossierVenteService: GestionDossierVenteService, svcParametrageEtablissement: Rest.OutilImpressionV1.LibelleEtablissement.Service);
        /**
         * Génère une lettre d'accompagnement
         */
        genererLettreAccompagnement(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, client: Rest.TiersV3.ParticulierInformation.IParticulierInformation, coemprunteur: Rest.TiersV3.ParticulierInformation.IParticulierInformation, option: myway.credits.suiviDossierVente.IOptionDocument, adresse: myway.credits.suiviDossierVente.IAdresse, piecesJustificatives: Array<string>, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, identifiantBad: string, test?: boolean): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
        genererListePiecesJustificatives(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, personnes: myway.credits.suiviDossierVente.PersonneLieeInfo[], option: myway.credits.suiviDossierVente.IOptionDocument, adresse: myway.credits.suiviDossierVente.IAdresse, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, piecesJustificatives: Array<string>, test?: boolean): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
    }
}

declare module myway.credits.suiviDossierVente {
    interface INouveauDossierCallback {
        onNouveauDossierVente(): any;
    }
    class PersonneLieeInfo {
        personneLiee: IPersonneLiee;
        particulierInformation: Rest.TiersV3.ParticulierInformation.IParticulierInformation;
        constructor(aPersonneLiee: IPersonneLiee, aParticulierInformation: Rest.TiersV3.ParticulierInformation.IParticulierInformation);
    }
    class TypeAction {
        static bouton: string;
        static fonction: string;
    }
    class CodeEtape {
        static CHPJ: string;
        static GENE: string;
        static CHSI: string;
        static SIMU: string;
    }
    class CodeAction {
        static COCA: string;
        static COCO: string;
        static VALS: string;
        static SIGN: string;
        static ED02: string;
        static CHMS: string;
        static BE11: string;
        static RECO: string;
        static IZMF: string;
        static IZIV: string;
        static COSI: string;
    }
    class CodeOperation {
        static IZMF: string;
    }
    class Lisa {
        static sortieParDefaut: number;
        static sortieSyntheseClient: number;
    }
    class Contexte {
        static identifiantPersonne: string;
        static aMAJSYNTHESESENSDK: string;
        static sensAppel: string;
        sensAppel: string;
        constructor();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "dossiervente/v1/gestionDossierVente".
     */
    class GestionDossierVenteService implements IGestionDossierVenteService {
        private qService;
        private serviceAgentExtended;
        svcModalMyway: MyWay.UI.IModalService;
        private svcTiersV3ParticulierInformation;
        private consoParametreService;
        private dossierPartageService;
        nomService: string;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        contexte: Contexte;
        codeCanalContexte: string;
        identifiantExterneDossierVente: string;
        codeModeVente: string;
        codeCanalCommunication: string;
        codeSensCommunication: string;
        modeSignature: string;
        idTransactionIcg: string;
        envoiMail: string;
        remisePapier: string;
        modeEnvoi: string;
        indicateurImpression: string;
        tdCivilite: TablesDelocalisees.TdCodeCivilite;
        codeEtablissement: string;
        codeActionContexte: string;
        typeAppelant: string;
        codeExterneApplication: string;
        codeEdsExternePFContexte: string;
        typeEdsExterneContexte: string;
        identifiantDossierVente: number;
        referenceExterne: string;
        codeActeGestion: string;
        numeroEntiteTitulaire: string;
        identifiantActeIDN: string;
        numeroPersonne: number;
        rang: number;
        role: number;
        nomFamille: string;
        prenom: string;
        dossierVente: IGestionDossierVente;
        actionPrincipale: IActionPossible;
        codeActionPrincipale: string;
        listePersonneLiees: Array<IPersonneLiee>;
        personnesLiees: Array<PersonneLieeInfo>;
        dossierPartage: Rest.EspacePartage.DossierPartage.ICsultDossPartgRspn;
        libelleAdresseWeb: string;
        collecteVADActif: boolean;
        affichageSignataires: myway.comContract.RecapSignataires.IRecapSignatairesInput;
        coemprunteur: Rest.TiersV3.ParticulierInformation.IParticulierInformation;
        parametres: IParametresSuiviDossier;
        private abonnementsNouveauDossier;
        abonnerNouveauDossier(lecteur: INouveauDossierCallback): void;
        private abonnementsNouveauDossierEnvoyer();
        static $inject: string[];
        constructor(qService: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, svcModalMyway: MyWay.UI.IModalService, svcTiersV3ParticulierInformation: Rest.TiersV3.ParticulierInformation.TiersV3ParticulierInformation, consoParametreService: myway.credits.suiviDossierVente.Rest.CreditConsoParametre.ICreditConsoParametreService, dossierPartageService: IDossierPartageService);
        isDUA: boolean;
        isVFO: boolean;
        isUTI: boolean;
        getCodeActionPrincipale(dossierVente: IGestionDossierVente): string;
        isSignaturePapier(): boolean;
        isFAF: boolean;
        isVAD: boolean;
        /**
         * En l'absence de maîtrise du  StringEnum, retourne le RoleSignataireEnum à partir du codeRole
         * @codeRolePersonne code parmi:
         * @return Le Role SignataireEnum
         */
        static getRoleSignataireEnum(codeRolePersonne: string): myway.comContract.RecapSignataires.RoleSignataireEnum;
        private hasPiecesEnregistrees(dossierVente);
        private isCollecteVadActif(dossierVente);
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
        getCOCO(): ng.IPromise<IGestionDossierVente>;
        enregistrerEtape(codeAction?: string): ng.IPromise<IGestionDossierVente>;
        redirectionIziVente(dossierVente: IGestionDossierVente): void;
        setDossierVente(nouvelleVersion: IGestionDossierVente): void;
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(gestionDossierVentePutQuery: IGestionDossierVentePutQuery, actionPossible: string): ng.IPromise<IGestionDossierVente>;
        annulaTionDossier(): ng.IPromise<Object>;
        /**
         * Permet de rechercher une personne
         * @param codeEtablissement : string
         * @param identifiantPersonne : string
         * @return nom: string
         * @return prenom : string
         */
        getPersonnesLiees(idPersonne: string): ng.IPromise<IParticulierInformation>;
        getPersonnesLieesv3(idPersonne: string): ng.IPromise<Rest.TiersV3.ParticulierInformation.IParticulierInformation>;
        /**
         * Permet de rechercher un acte
         * @param codeEtablissement : string
         * @param identifiantPersonne : string
         * return typeMarcheParticulier: string
         */
        getIdentification(idPersonne: string): ng.IPromise<IIdentification>;
        /**
         * Méthode permettant de récupérer la liste des adresses postales d’un tiers identifié.
         * @param codeEtablissement : string
         * @param identifiantPersonne : string
         * return adresse: Objet
         */
        getAdresse(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<IAdresse>;
        /**
         * Méthode permettant de Restituer les informations relatives à l'EDS identifié et à son EDS de rattachement.
         * @param codeEtablissement : string
         * @param identifiantPersonne : string
         * return CaracteristiqueEDS: Objet
         */
        getCaracteristiqueEDS(typeEDS: string, referenceExterneEDS: string): ng.IPromise<ICaracteristiqueEDS>;
        getCaracteristiqueEdsInterne(idInterneEds: number): ng.IPromise<ICaracteristiqueEDS>;
        /**
         * Permet de recuperer les donnees VAD
         * @param codeEtablissement : string
         * @param typeDocument : string
         * @param: codeEntiteVente: string
         * @param: dateTraitement : string
         */
        getOptionDocument(typeDocument: string, codeEntiteVente: string): ng.IPromise<IOptionDocument>;
        /**
         * Méthode récupération du contexte utilisateurConnecte
         * @return contexte utilisateurConnecte
         */
        getContext(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        /**
         * Méthode de construction des urls web service
         * @return L'url du web service
         */
        private urlDossierVente();
        private urlDossierNumerique();
        private urlTiers();
        private urlDoctypeParametre();
        private urlStructure();
        getParametre(): IParametresSuiviDossier;
        actionDemandee(codeAction: string): boolean;
        actionPossibleEst(codeAction: string): boolean;
        getActionPossible(dossierVente: IGestionDossierVente): IActionPossible;
        verifierIZMF(dossierVente: IGestionDossierVente, collecteVad1Actif: boolean): boolean;
        formatageIdentifiantPersonne(idPersonne: string): string;
        ajusterMdecPp(): void;
        showErreur(err: MyWay.Services.Erreur): void;
        creerDossierPartage(): ng.IPromise<number>;
    }
}

declare module myway.credits.suiviDossierVente {
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "dossiervente/v1/gestionDossierVente".
     */
    class HistoriqueInterventionService implements IHistoriqueInterventionService {
        private serviceAgent;
        private qService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(dossierVente: IDossierVente): ng.IPromise<IHistoriqueIntervention>;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
}

declare module myway.credits.suiviDossierVente {
    class PiecesJustificativesService implements INouveauDossierCallback {
        private svcGestionDossierVente;
        private suiviDossierVenteEditiqueService;
        private rstContratBadInformation;
        static $inject: string[];
        document: MyWay.Services.Impression.DocumentGenere;
        documentLacc: MyWay.Services.Impression.DocumentGenere;
        dossier: IGestionDossierVente;
        pieceJustificativeAAjouter: string;
        selectionComplete: boolean;
        labelSelectionComplete: string;
        listePiecesJustificativesSelectionnees: Array<string>;
        pieceSelectionnees: IpieceJustificative;
        personneLiee: Array<IPersonneLiee>;
        infoEmprunteur: Rest.TiersV3.ParticulierInformation.IParticulierInformation;
        idEmprunteur: string;
        identifiantBad: string;
        adresseEmprunteur: any;
        codeEtablissement: string;
        LACC: string;
        LPCC: string;
        codeEntiteVente: string;
        lettreAccompagnementOption: IOptionDocument;
        listePiecesJustificativesOption: IOptionDocument;
        structureCaracteristiqueEDS: ICaracteristiqueEDS;
        listePiecesJustificatives2: Array<CaseACocher>;
        frmPiecesJustificatives: FormulairePiecesJustificatives;
        frmPiecesJustificativesVAD: FormulairePiecesJustificativesVAD;
        constructor(svcGestionDossierVente: GestionDossierVenteService, suiviDossierVenteEditiqueService: SuiviDossierVenteEditiqueService, rstContratBadInformation: Rest.ContratServiceBqd.InformationBad.ContratServiceBqdInformationBad);
        isCollecteVADActif(): boolean;
        /**
         * Charge la liste des pièces VAD et les sélectionne si certaines sont déjà enregistrées sur le dossier de vente
         */
        loadPiecesVADSelected(): void;
        /**
         * récupère la liste des pièces VAD enregistrées sur le dossier de vente
         */
        private getPieceVADStored();
        isEtapeChoixPiecesJustifiactives(): boolean;
        hasNotifPJ(): boolean;
        onNouveauDossierVente(): void;
        private stockageDataIzivente();
        private stockageNotifPJ();
        private stockageMDPJ();
        private stockageUrlCollecte();
        private defineSalesModeType(etapeEnCours);
        stockagePiecesJustificativesVAD(): void;
        stockagePiecesJustificatives(dossier: IGestionDossierVente): IGestionDossierVente;
        voirLACC(): void;
        voirLPCC(): void;
    }
    class CaseACocher {
        label: string;
        value: boolean;
        constructor(label: string, value: boolean);
    }
    class FormulairePiecesJustificatives {
        static choixOui: string;
        static choixNon: string;
        static choixIndetermine: string;
        static libelleToutSelectionner: string;
        static libelleToutDeselectionner: string;
        static modeLecture: number;
        static modeModification: number;
        choixON: boolean;
        demanderPieces: string;
        listePieces: Array<CaseACocher>;
        mode: number;
        selectionnerTout: boolean;
        selectionnerToutIndetermine: boolean;
        labelSelectionnerTout: string;
        constructor(demanderPieces: string, listePieces: Array<CaseACocher>);
        disabled: boolean;
        nbSelection: number;
        getListePieces2(): Array<string>;
        setListePieces2(liste: Array<string>): void;
        ajouterPiece(piece: CaseACocher): void;
        majToutSelectionner(): void;
        onClickToutSelectionner(): void;
        onClickChoix(piece: CaseACocher): void;
        estValide: boolean;
        erreurDemanderPiecesIndefini: boolean;
        erreurPasDeSelection: boolean;
        valider(): boolean;
    }
    class FormulairePiecesJustificativesVAD {
        listePiecesCollecteVADSelected: Models.CollecteVAD.IPieceCollecteVAD[];
        radioPieceJustificativesValue: boolean;
        selectionnerTout: boolean;
        selectionnerToutIndetermine: boolean;
        labelSelectionnerTout: string;
        donneeData: IDonneeData;
        canBeModified: boolean;
        disableRadioBouton: boolean;
        disable: boolean;
        majToutSelectionner(): void;
        toutSelectionner(): void;
        unSelectAll(): void;
        nbSelection(): number;
        nbSelectionnable(): number;
        getListeLibellePieces(): string[];
        erreurDemanderPiecesIndefini: boolean;
        erreurPasDeSelection: boolean;
        estValide(): boolean;
    }
}

declare module myway.credits.suiviDossierVente.TablesDelocalisees {
    class ListeTablesDelocalisees {
        static refCARTE: string;
        static refX105ETAC: string;
        static refX106FORM: string;
        static refX107RNLT: string;
        static refX108SEUI: string;
        static refX109DOTA: string;
        static refX112FAMI: string;
        static refX113ORIG: string;
        static refX114NRES: string;
        static refX125CROU: string;
        static refX126ACAC: string;
        static refX127RSAC: string;
        static refDU1V: string;
        static refCodeSituationFamiliale: string;
        static refCodeRegimeMatrimonial: string;
        static refCodeCivilite: string;
        static routageMotifNonRespect: string;
    }
    class TableDelocalisee {
        private svcAgent;
        static nomClasse: string;
        info: any;
        data: Array<any>;
        referenceTableDelocalisee: string;
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended, aReference: string);
        charger(aCodeEtablissement5: string): ng.IPromise<any>;
        callbackThen: (data: any) => void;
    }
    class TdCARTE extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
    }
    class CdX105ETAC {
        static COMMANDE: string;
        static DELIVRE_CLIENT: string;
    }
    class TdX105ETAC extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleEtatChequier(aCodeEtat: string): String;
    }
    class TdX106FORM extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleFormatChequier(aCodeFamille: string, aCodeFormat: string): string;
    }
    class TdX107RNLT extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleRenouvellementAuto(aCode: string): string;
    }
    class TdX113ORIG extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleOrigine(aCode: string): string;
    }
    class TdX114NRES extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleMotifRoutageNonrespecte(aCodeMotif: string): string;
    }
    class TdX125CROU extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        libelleModeRoutage(aCodeFamille: string, aCodeFormat: string): string;
        static estEnvoiADomicile(aCode: string): boolean;
    }
    class TdDU1V extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        getLibellePaysNationalite(aCodeInseePaysNationalite: string): string;
    }
    class TdCodeCivilite extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        static codeMadame: string;
        static codeMademoiselle: string;
        static codeMonsieur: string;
        getLibelle(aCode: string): string;
        static getLibellePascal(aCode: string): string;
        static getLibelleEditique(aCode: string): string;
    }
    class TdCodeRegimeMatrimonial extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        static codeNonConcerne: string;
        static codeCommunauteLegaleAvant1966: string;
        static codeCommunauteReduiteAuxAcquets: string;
        static codeCommunauteUniverselle: string;
        static codeSeparationDeBiens: string;
        static codeRegimeDotalAvant1966: string;
        static codeCommunauteMeublesEtAcquetsApres1966: string;
        static codeParticipationAuxAcquets: string;
        static codeAutresRegimes: string;
        static codeRegimeInconnu: string;
        getLibelle(aCode: string): string;
    }
    class TdCodeSituationFamiliale extends TableDelocalisee {
        constructor(svcAgent: MyWay.Services.ServiceAgentExtended);
        getLibelle(aCode: string): string;
    }
}

declare module myway.credits.suiviDossierVente.Tools {
    abstract class ObjectUtils {
        /** as this is a singleton returned as empty obj, Object.freez prevents it to be modified   */
        private static obj;
        /**
         * Return an object reference that cannot be set
         * @param o
         */
        static nullToEmpty<T>(o: T): T;
        /**
         * try to access properties with null parent.
         * if failed, return an empty object.
         * Example a.b.c => if b is null: return empty object. else return c
         * @param o the methods returning the property to access
         */
        static safeAccess<T>(o: () => T): T;
        /**
         * Returns string to display all keys/value  of the object
         * @param o
         */
        static toString<T>(o: T): string;
    }
}

declare module myway.credits.suiviDossierVente {
    class ActionFooterControleur implements INouveauDossierCallback {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private gestionDossierVenteService;
        private piecesJustificativesService;
        private contractualisationService;
        private suiviDossierVenteEditiqueService;
        static $inject: string[];
        dossier: IGestionDossierVente;
        parametres: IParametresSuiviDossier;
        private actionPossible;
        private codeSensCommunication;
        private codeCanalEnCours;
        private acte;
        private listeSignataires;
        private listeTitulaires;
        private eligibilite;
        private mfEligibilite;
        private idTransactionIcg;
        private modeSignature;
        private reference;
        libelleAction: string;
        private particulierInformation;
        private chargementEnCours;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionDossierVenteService: GestionDossierVenteService, piecesJustificativesService: PiecesJustificativesService, contractualisationService: ContractualisationService, suiviDossierVenteEditiqueService: SuiviDossierVenteEditiqueService);
        afficherBouton: boolean;
        libelleBouton: string;
        afficherTestImpression: boolean;
        afficherTestRetourIzivente: boolean;
        asyncInit(): ng.IPromise<any>;
        onNouveauDossierVente(): void;
        onClickLettrePj(): void;
        onClickLettreAcc(): void;
        disableValider(): boolean;
        valider(): void;
        majContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeCanal: string): Myway.Ressource.ContractualisationActe.IContractualisationActe;
    }
}

declare module myway.credits.suiviDossierVente {
}

declare module myway.credits.suiviDossierVente {
    /**
     * Classe du controleur Caracteristiques
     * @class controleur Caracteristiques
     */
    class CaracteristiquesControleur implements INouveauDossierCallback {
        private svcGestionDossierVente;
        dossier: IGestionDossierVente;
        caracteristiquesDossier: string;
        montant: string;
        donneePrincipale: string;
        chargementEnCours: boolean;
        mdpj: IMdpjSections;
        static $inject: string[];
        constructor(svcGestionDossierVente: GestionDossierVenteService);
        onNouveauDossierVente(): void;
    }
}

declare module myway.credits.suiviDossierVente {
}

declare module myway.credits.suiviDossierVente {
    class ModaleAjouterPiecesJustificatives {
        private $modalInstance;
        private piecesJustificativesService;
        static $inject: string[];
        private pieceJustificativeAAjouter;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, piecesJustificativesService: myway.credits.suiviDossierVente.PiecesJustificativesService);
        fermer(): void;
        valider(): void;
    }
}

declare module myway.credits.suiviDossierVente {
    /**
     * Classe du controleur PiecesJustificativesController
     * @class PiecesJustificativesController
     */
    class PiecesJustificativesController implements INouveauDossierCallback {
        private modalService;
        private svcGestionDossierVente;
        private piecesJustificativesService;
        private $scope;
        frmPiecesJustificatives: FormulairePiecesJustificatives;
        chargementEnCours: boolean;
        afficherListePJ: boolean;
        listePieceVadAvecPrecision: Models.CollecteVAD.IPieceCollecteVAD[];
        listePieceVadSansPrecision: Models.CollecteVAD.IPieceCollecteVAD[];
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du controleur PiecesJustificativesController
         *
         * @returns {void}
         */
        constructor(modalService: MyWay.UI.IModalService, svcGestionDossierVente: GestionDossierVenteService, piecesJustificativesService: myway.credits.suiviDossierVente.PiecesJustificativesService, $scope: ng.IScope);
        frmPiecesJustificativesVAD: FormulairePiecesJustificativesVAD;
        onNouveauDossierVente(): void;
        ouvrirModalePieceJustificative(): void;
        isCollecteVADActif(): boolean;
        errorLabel: string;
        role: string;
        toggleOpen(piece: Models.CollecteVAD.IPieceCollecteVAD): void;
        private getListePieceAvecPrecision();
        private getListePieceSansPrecision();
    }
}

declare module myway.credits.suiviDossierVente {
    interface IpieceJustificative {
        label: string;
        value: boolean;
    }
}

declare module myway.credits.suiviDossierVente {
    /**
     * Classe du controleur SuiviDossierVenteController
     * @class SuiviDossierVenteController
     */
    class SuiviDossierVenteController implements INouveauDossierCallback {
        private modalService;
        private gestionDossierVenteService;
        private historiqueInterventionService;
        ouvert: boolean;
        abandonDossierVente: IGestionDossierVente;
        private chargementEnCours;
        abandonDossierBoutonActions: MyWay.UI.IBoutonActionRiche[];
        abandonDossierBoutonVisible: boolean;
        previsualiserLesDocumentsVisible: boolean;
        historiqueIntervention: IHistoriqueIntervention;
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du controleur SuiviDossierVenteController
         *
         * @returns {void}
         */
        constructor(modalService: MyWay.UI.IModalService, gestionDossierVenteService: GestionDossierVenteService, historiqueInterventionService: HistoriqueInterventionService);
        onNouveauDossierVente(): void;
    }
}

declare module myway.credits.suiviDossierVente {
    interface IMwSuiviDossierVenteAttributes extends ng.IAttributes {
        parametres: string;
        ouvert: boolean;
        abandonDossierVente: string;
    }
}

declare module myway.credits.suiviDossierVente.editique.generiqueV1701 {
    interface IgenericEnteteets {
        logoEtablissement: editique.generiqueV1701.IgenericEnteteetsLogoEtablissement;
        libelleAgence: string;
        coceelAgence: string;
        nodatpAgence: string;
        dateEdition: string;
        heureEdition: string;
        numRefdoc: string;
        codeBarre: string;
        refActe: string;
    }
    interface IgenericEnteteetsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    function getEntete(authenticateInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, numRefDoc: string, codeBarre: string, refActe: string): IgenericEnteteets;
    function getLogo(codeEtablissement: string): IgenericEnteteetsLogoEtablissement;
    interface IgenericLogoEtsDate {
        logoEtablissement: myway.credits.suiviDossierVente.editique.generiqueV1701.IgenericLogoEtsDateLogoEtablissement;
        date: string;
    }
    interface IgenericLogoEtsDateLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    function getLogoEtsDate(authenticateInfo: MyWay.Services.Context.AuthentificationInfo): IgenericLogoEtsDate;
    function getLogoEtsDateLogoEtablissement(codeEtablissement: string): IgenericLogoEtsDateLogoEtablissement;
    interface IgenericPiedpageets {
    }
    var genericPiedPageAutomatique: IgenericPiedpageets;
    interface IgenericAdresseDest {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    function getAdresseDest(ligne1: string, ligne2: string, ligne3: string, ligne4: string, ligne5: string, ligne6: string): IgenericAdresseDest;
    interface IgenericAdresseExp {
        liceli: string;
        lidgv2: string;
        lidgv3: string;
        lidgv4: string;
        lidgv5: string;
        lidgv6: string;
    }
    function getAdresseEnveloppe(ligne1: string, ligne2: string, ligne3: string, ligne4: string, ligne5: string, ligne6: string): IgenericAdresseExp;
    function getAdresseTexte(ligne1: string, ligne2: string, ligne3: string, ligne4: string, ligne5: string, ligne6: string): IgenericAdresseExp;
    function getJeuOption(option: myway.credits.suiviDossierVente.IOptionDocument, codeRubriqueParametre: string): IJeuDetail;
}

declare module myway.credits.suiviDossierVente {
    class LettreAccompagnementFactory {
        static getBlocPrincipal(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, client: myway.credits.suiviDossierVente.IParticulierInformation, option: myway.credits.suiviDossierVente.IOptionDocument, adresse: myway.credits.suiviDossierVente.IAdresse, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, civilite: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo, collecteVADActif: boolean): LettreAccompagnement.LettreAccompagnementBlocPrincipal;
        static getBlocAdresse(client: myway.credits.suiviDossierVente.IParticulierInformation, civilite: string): LettreAccompagnement.BlAdresse;
        static getBlocReferences(client: myway.credits.suiviDossierVente.IParticulierInformation, dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente): LettreAccompagnement.BlReferences;
        static getBlocCivilite(civilite: string): LettreAccompagnement.BlCivilite;
        static getBlocPiecesJointes(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente): LettreAccompagnement.LettreAccompagnementBlocPrincipalBlocPiecesJointes[];
        static getBlocRetourDocuments(option: myway.credits.suiviDossierVente.IOptionDocument, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, collecteVADActif: boolean): LettreAccompagnement.LettreAccompagnementBlocPrincipalBlocRetourDocuments;
        static getBlocContacter(option: myway.credits.suiviDossierVente.IOptionDocument): LettreAccompagnement.BlContacter;
        static getBlocAvantSignature(option: myway.credits.suiviDossierVente.IOptionDocument): LettreAccompagnement.BlAvantSign;
        static getBlocSignature(option: myway.credits.suiviDossierVente.IOptionDocument, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): LettreAccompagnement.BlSignCaisse;
        static getBlocApresSignature(option: myway.credits.suiviDossierVente.IOptionDocument): LettreAccompagnement.BlApresNotaBene;
        static getBlocSalutation(civilite: string): LettreAccompagnement.BlSalutation;
        private static getJeuOption(option, codeRubriqueParametre);
    }
}

declare module myway.credits.suiviDossierVente.LettreAccompagnement {
    interface ILettreAccompagnement {
        blocPrincipal: LettreAccompagnementBlocPrincipal;
        GENERIC_ENTETEETS: Editique.Generique.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Editique.Generique.GENERIC_PIEDPAGEETS;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface LettreAccompagnementBlocPrincipal {
        BlAdresse: BlAdresse;
        BlReferences: BlReferences;
        BlCivilite: BlCivilite;
        blocPiecesJointes: LettreAccompagnementBlocPrincipalBlocPiecesJointes[];
        blocRetourDocuments: LettreAccompagnement.LettreAccompagnementBlocPrincipalBlocRetourDocuments;
        BlContacter: BlContacter;
        BlAvantSign: BlAvantSign;
        BlSalutation: BlSalutation;
        BlSignCaisse: BlSignCaisse;
        BlApresNotaBene: BlApresNotaBene;
    }
    interface BlAdresse {
        civilite: string;
        prenom: string;
        nom: string;
        ligneAdresseDeux: string;
        ligneAdresseTrois: string;
        ligneAdresseQuatre: string;
        ligneAdresseCinq: string;
        ligneAdresseSix: string;
    }
    interface BlReferences {
        numDossierVente: string;
        idClient: string;
    }
    interface BlCivilite {
        civilite: string;
    }
    interface LettreAccompagnementBlocPrincipalBlocPiecesJointes {
        titre: string;
        piecesJointes: LettreAccompagnementBlocPrincipalBlocPiecesJointesPiecesJointes[];
    }
    interface LettreAccompagnementBlocPrincipalBlocPiecesJointesPiecesJointes {
        pieceJointe: string;
    }
    interface LettreAccompagnementBlocPrincipalBlocRetourDocuments {
        renvoiDocumentTexte: string;
        GENERIC_ADRESSE_EXP: LettreAccompagnement.GENERIC_ADRESSE_EXP;
    }
    interface BlContacter {
        libelle: string;
    }
    interface BlAvantSign {
        libelle: string;
    }
    interface BlSalutation {
        civilite: string;
    }
    interface BlSignCaisse {
        denoSignataire: string;
        nomConseiller: string;
    }
    interface BlApresNotaBene {
        libelle: string;
    }
    interface GENERIC_ADRESSE_EXP {
        LICELI: string;
        LIDGV2: string;
        LIDGV3: string;
        LIDGV4: string;
        LIDGV5: string;
        LIDGV6: string;
    }
    class LettreAccompagnement implements ILettreAccompagnement {
        blocPrincipal: LettreAccompagnementBlocPrincipal;
        GENERIC_ENTETEETS: Editique.Generique.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Editique.Generique.GENERIC_PIEDPAGEETS;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class LettreAccompagnementArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class LettreAccompagnementArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.credits.suiviDossierVente.editique.lettreAccompagnement {
    function createArchiverParams(): LettreAccompagnementArchiverParams;
    function createGenererParams(): LettreAccompagnementGenererParams;
    function createArchiverGenererParams(): LettreAccompagnementArchiverGenererParams;
    function createImpressionParams(): LettreAccompagnementImpressionParams;
    function createArchiverImpressionParams(): LettreAccompagnementArchiverImpressionParams;
    function createImpressionLotParams(): LettreAccompagnementImpressionLotParams;
    function creerLettreAccompagnement(authenticateInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, parametrageEtablissement: Rest.OutilImpressionV1.LibelleEtablissement.ILibelleEtablissement, gestionDossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, option: myway.credits.suiviDossierVente.IOptionDocument, infosPersonne: Rest.TiersV3.ParticulierInformation.IParticulierInformation, civiliteEditique: string, infosCoemprunteur: Rest.TiersV3.ParticulierInformation.IParticulierInformation, civiliteCoemprunteur: string, piecesJointes: Array<string>, adressePersonne: IAdresse, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, identifiantBad: string, collecteVADActif: boolean): LettreAccompagnement;
}

declare module myway.credits.suiviDossierVente.editique.lettreAccompagnement {
    interface IlettreAccompagnement {
        blocPrincipal: myway.credits.suiviDossierVente.editique.lettreAccompagnement.IlettreAccompagnementBlocPrincipal;
        genericLogoEtsDate: myway.credits.suiviDossierVente.editique.generiqueV1701.IgenericLogoEtsDate[];
        genericPiedpageets: myway.credits.suiviDossierVente.editique.generiqueV1701.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface IlettreAccompagnementBlocPrincipal {
        biadresseWebCe: credits.suiviDossierVente.editique.lettreAccompagnement.IlettreAccompagnementBlocPrincipalBiadresseWebCe;
        genericAdresseDest: myway.credits.suiviDossierVente.editique.generiqueV1701.IgenericAdresseDest[];
        blReferences: credits.suiviDossierVente.editique.lettreAccompagnement.IblReferences;
        blCivilite: credits.suiviDossierVente.editique.lettreAccompagnement.IblCivilite;
        blocPiecesJointes: credits.suiviDossierVente.editique.lettreAccompagnement.IlettreAccompagnementBlocPrincipalBlocPiecesJointes[];
        blocRetourDocuments: credits.suiviDossierVente.editique.lettreAccompagnement.IlettreAccompagnementBlocPrincipalBlocRetourDocuments;
        blContacter: credits.suiviDossierVente.editique.lettreAccompagnement.IblContacter;
        blAvantSign: credits.suiviDossierVente.editique.lettreAccompagnement.IblAvantSign;
        blSalutation: credits.suiviDossierVente.editique.lettreAccompagnement.IblSalutation;
        blSignCaisse: credits.suiviDossierVente.editique.lettreAccompagnement.IblSignCaisse;
        blApresNotaBene: credits.suiviDossierVente.editique.lettreAccompagnement.IblApresNotaBene;
        letablissement: string;
    }
    interface IlettreAccompagnementBlocPrincipalBiadresseWebCe {
        adresseWebCe: string;
    }
    interface IblReferences {
        numDossierVente: string;
        idClient: string;
    }
    interface IblCivilite {
        civilite: string;
    }
    interface IlettreAccompagnementBlocPrincipalBlocPiecesJointes {
        titre: string;
        piecesJointes: myway.credits.suiviDossierVente.editique.lettreAccompagnement.IlettreAccompagnementBlocPrincipalBlocPiecesJointesPiecesJointes[];
    }
    interface IlettreAccompagnementBlocPrincipalBlocPiecesJointesPiecesJointes {
        pieceJointe: string;
    }
    interface IlettreAccompagnementBlocPrincipalBlocRetourDocuments {
        renvoiDocumentTexte: string;
        genericAdresseExp: myway.credits.suiviDossierVente.editique.generiqueV1701.IgenericAdresseExp;
    }
    interface IblContacter {
        libelle: string;
    }
    interface IblAvantSign {
        libelle: string;
    }
    interface IblSalutation {
        civilite: string;
    }
    interface IblSignCaisse {
        denoSignataire: string;
        nomConseiller: string;
    }
    interface IblApresNotaBene {
        libelle: string;
    }
    class LettreAccompagnement implements IlettreAccompagnement {
        blocPrincipal: myway.credits.suiviDossierVente.editique.lettreAccompagnement.IlettreAccompagnementBlocPrincipal;
        genericLogoEtsDate: myway.credits.suiviDossierVente.editique.generiqueV1701.IgenericLogoEtsDate[];
        genericPiedpageets: myway.credits.suiviDossierVente.editique.generiqueV1701.IgenericPiedpageets;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    var parametresGenerationSysteme: MyWay.Services.Impression.ParametresGenerationSysteme;
    var parametresGenerationFichier: MyWay.Services.Impression.ParametresGenerationFichier;
    class LettreAccompagnementArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class LettreAccompagnementArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class LettreAccompagnementImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.credits.suiviDossierVente {
    class ListePiecesJustificativesFactory {
        static getBlocPrincipal(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, personnes: myway.credits.suiviDossierVente.PersonneLieeInfo[], option: myway.credits.suiviDossierVente.IOptionDocument, adresse: myway.credits.suiviDossierVente.IAdresse, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, authentificationInfos: MyWay.Services.Context.AuthentificationInfo, piecesJustificatives: Array<string>, collecteVADActif: boolean): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocument;
        static getBlocTitrePJ(dossierVente: IGestionDossierVente): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj[];
        static getBlocIntroPJ(dossierVente: IGestionDossierVente, collecteVADActif: boolean): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj[];
        static getBlocIntroPJDossierPartage(dossierVente: IGestionDossierVente, collecteVADActif: boolean): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPjdossierPartage[];
        static getBlocPersonne(dossierVente: IGestionDossierVente, personnes: myway.credits.suiviDossierVente.PersonneLieeInfo[], piecesJustificatives: Array<string>): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne[];
        static getBlocAEnvoye(dossierVente: IGestionDossierVente, collecteVADActif: boolean): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlAEnvoye[];
        static getBlocPiecesJustificatives(dossierVente: IGestionDossierVente, piecesJustificatives: Array<string>): Array<ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPieceJustificative>;
        static getBlocPasMsi(option: IOptionDocument, agence: ICaracteristiqueEDS, collecteVADActif: boolean): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi[];
        static getBlocMsiChoisirObj(option: IOptionDocument, agence: ICaracteristiqueEDS, collecteVADActif: boolean): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj[];
        static getBlocblMsirepMsgCons(option: IOptionDocument, agence: ICaracteristiqueEDS, collecteVADActif: boolean): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons[];
        private static getJeuOption(option, codeRubriqueParametre);
    }
}

declare module myway.credits.suiviDossierVente.ListePiecesJustificatives {
    interface IListePiecesJustificatives {
        piecesJustificativesCorpsDocument: ListePiecesJustificativesPiecesJustificativesCorpsDocument;
        genericLogoEts: GenericLogoEts[];
        genericPiedpageets: Editique.Generique.GENERIC_PIEDPAGEETS;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocument {
        blTitrePj: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj[];
        blIntroPj: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj[];
        blIntroPjdossierPartage: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPjdossierPartage[];
        blCopieDocuments: number;
        blPersonne: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne[];
        blAenvoye: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlAEnvoye[];
        blPasMsi: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi[];
        blMsichoisirObj: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj[];
        blMsirepMsgCons: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons[];
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj {
        libelleActe: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj {
        libelleActe: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPjdossierPartage {
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne {
        civilite: string;
        nom: string;
        prenom: string;
        role: string;
        blPieceJustificative: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPieceJustificative[];
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPieceJustificative {
        libelle: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlAEnvoye {
        libelleEnvoi: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi {
        blEnLigne: number;
        blCourrier: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsiBlCourrier;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsiBlCourrier {
        libelleCaisse: string;
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj {
        blEnLigne: number;
        blCourrier: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObjBlCourrier;
        blMsiObj: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObjBlMsiObj;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObjBlCourrier {
        libelleCaisse: string;
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObjBlMsiObj {
        objetCaisse: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons {
        blEnLigne: number;
        blCourrier: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgConsBlCourrier;
        blMsiRep: number;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgConsBlCourrier {
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface GenericLogoEts {
        logoEtablissement: GenericLogoEtsLogoEtablissement;
    }
    interface GenericLogoEtsLogoEtablissement {
        attributeContent: MyWay.Services.Impression.TYPE_IMAGE;
        valueImgJson: string;
    }
    interface GenericPiedpageets {
    }
    class ListePiecesJustificatives implements IListePiecesJustificatives {
        piecesJustificativesCorpsDocument: ListePiecesJustificativesPiecesJustificativesCorpsDocument;
        genericLogoEts: ListePiecesJustificatives.GenericLogoEts[];
        genericPiedpageets: Editique.Generique.GENERIC_PIEDPAGEETS;
        attributeId: string;
        attributeXmlns: string;
        attributeCamel: string;
        constructor();
    }
    class ListePiecesJustificativesArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ListePiecesJustificativesImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class ListePiecesJustificativesArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class ListePiecesJustificativesImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.credits.suiviDossierVente.Rest.ClasseurCLient.Parametrage {
    interface INatureDocument {
        codeNature: string;
        codeAffichage: number;
        /**
         * True si la nature est ouverte à l'acquisition
         */
        ouvertAcquisition: boolean;
    }
    interface ITypeDocumentNature {
        /**
         * code type document
         */
        codeTypeDocument: string;
        libelleTypeDocumentNature: string;
        libelleLongTypeDocumentNature: string;
        listeNatureDocument: Array<INatureDocument>;
    }
    interface IRecupDescListeTypeDocumentNatureOutput {
        listeTypeDocumentNature: Array<ITypeDocumentNature>;
    }
}

declare module myway.credits.suiviDossierVente.Rest.ClasseurCLient {
    interface IParametrageService {
        /**
         * Cette méthode permet d'appeler les méthodes (PMM) RecupererListeTypeDocument et RecupererListeTypeDocumentNature. Grace à cette méthode on évite d'appeler plusieurs fois ces deux méthodes
         * @param codeEtablissementBancaire
         * @param listeCodeTypeDocumentcla
         * @param dateConsultation
         * @param identifiantComposantApplicatif
         */
        getListeTypeDocumentNature(codeEtablissementBancaire: string, listeCodeTypeDocument: string[], dateConsultation: string, identifiantComposantApplicatif: string): ng.IPromise<myway.credits.suiviDossierVente.Rest.ClasseurCLient.Parametrage.IRecupDescListeTypeDocumentNatureOutput>;
    }
    class ParametrageService implements IParametrageService {
        private restService;
        static $inject: Array<string>;
        private urlClasseurClientParametrage;
        constructor(restService: Common.IRestService);
        getListeTypeDocumentNature(codeEtablissementBancaire: string, listeCodeTypeDocument: string[], dateConsultation: string, identifiantComposantApplicatif: string): ng.IPromise<Rest.ClasseurCLient.Parametrage.IRecupDescListeTypeDocumentNatureOutput>;
    }
}

declare module myway.credits.suiviDossierVente.Rest.Common {
    interface IRestService {
        /**
         * Exécution de la requête GET
         * @param urlService : url du service appelé
         * @param params : paramètres dans la query
         * @param timeout : optionnel
         */
        sendGetRequest<T, U>(urlService: string, params: U, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requête POST
         * @param urlService : url du service appelé
         * @param data : données dans le body
         * @param params : optionnel, paramètres dans la query
         * @param timeout : optionnel
         */
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requête PUT
         * @param urlService : url du service appelé
         * @param data : données dans le body
         * @param params : optionnel, paramètres dans la query
         * @param timeout : optionnel
         */
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requête DELETE
         * @param urlService : url du service appelé
         * @param data : optionnel, données dans le body
         */
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
    }
    class RestService implements IRestService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        sendGetRequest<T, U>(urlService: string, params: U, timeout?: number): ng.IPromise<T>;
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
        private consume<T, U, V>(typeMethode, urlService, params?, data?, timeout?);
    }
}

declare module myway.credits.suiviDossierVente.Rest.ContratServiceBqd.InformationBad {
    interface IInformationBAD {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantClientBAD: string;
        etatAbonnementBADGlobal: string;
        libelleEtatAbonnement: string;
    }
}

/**
 * Service de gestion de la ressource "/tiers/v3/particulierInformation"
 * @author S0012451 (Philippe LEMAIRE)
 */
declare module myway.credits.suiviDossierVente.Rest.ContratServiceBqd.InformationBad {
    interface IParametresContratServiceBqdInformationBad {
        codeEtablissement: string;
        numeroPersonne: string;
    }
    /**
     * Déclaration du service
     */
    class ContratServiceBqdInformationBad {
        protected svcAgent: MyWay.Services.ServiceAgent;
        protected $q: ng.IQService;
        protected $timeout: ng.ITimeoutService;
        static nomService: string;
        url: string;
        static $inject: string[];
        constructor(svcAgent: MyWay.Services.ServiceAgent, $q: ng.IQService, $timeout: ng.ITimeoutService);
        protected debug(message: string, detail?: any): void;
        protected error(message: string, detail?: any): void;
        protected sendMyway(question: any): ng.IPromise<any>;
        getHttpParam(question: any, methode: MyWay.Services.MethodEnum): any;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGet(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPost(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPut(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendDelete(data: any): ng.IPromise<any>;
        /**
         * Méthode de test
         * @return Une promesse de type IInfoDemandeRA
         */
        getIdentification(parametres: IParametresContratServiceBqdInformationBad): ng.IPromise<IInformationBAD>;
    }
}

/**
 * Service de gestion de la ressource "/tiers/v3/particulierInformation"
 * @author S0012451 (Philippe LEMAIRE)
 */
declare module myway.credits.suiviDossierVente.Rest.CreditConsoParametre {
    interface ICreditConsoParametreService {
        parametreVersion(codeEtab: string, dateTraitement: string, typeEds: string, edsDomiciliation: number, refVersionApplication?: string): ng.IPromise<myway.credits.suiviDossierVente.Rest.CreditConsoParametre.ParametreVersion.IParametreVersionResponse>;
    }
    class CreditConsoParametreService implements ICreditConsoParametreService {
        private restService;
        static $inject: Array<string>;
        url: string;
        constructor(restService: Common.IRestService);
        parametreVersion(codeEtab: string, dateTraitement: string, typeEds: string, edsDomiciliation: number, refVersionApplication?: string): ng.IPromise<myway.credits.suiviDossierVente.Rest.CreditConsoParametre.ParametreVersion.IParametreVersionResponse>;
    }
}

declare module myway.credits.suiviDossierVente.Rest.CreditConsoParametre.ParametreVersion {
    interface IParametreVersionResponse {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Code agence opérante
         */
        codeAgenceOperante: string;
        /**
         * Ref version application
         */
        refVersionApplication: string;
        /**
         * Code paramètre divers
         */
        codeParametreDivers: string;
        /**
         * Libelle adresse WEB
         */
        libelleAdresseWeb: string;
    }
}

declare module myway.credits.suiviDossierVente.Rest.EspacePartage.DossierPartage {
    interface ICsultDossPartgRspn {
        csultDossPartg: ICsultDossPartg;
    }
    interface ICsultDossPartg {
        /**
         * Identifiant du dossier de partage généré par un composteur dans le service de création d'un dossier de partage.
         */
        idntDossPartg: number;
        /**
         * Code déterminant un établissement bancaire.
         */
        codeEtabBanc: string;
        /**
         * Code application correspondant à l'application qui a demandé la création du dossier de partage.
         * Exemple : DNC, CLACLI, etc…
         */
        codeAppliInttDossPartg: string;
        /**
         * Identifiant du Dossier de partage fournis par l'application qui a initié le dossier de partage
         */
        idntExtnDossPartg: string;
        /**
         * Identifiant de l'application à l'origine de la création de ce doucment.
         */
        idntCmpstApplf: string;
        /**
         * Libelle fonctionnel du Dossier de partage permettant de comprendre le contexte donnant lieu à l'échange de document ( ex : Dossier de crédit 123456)
         */
        liblDossPartg: string;
        /**
         * Statut d'un dossier de partage
         * - OUV : Le dossier de partage est ouvert
         * - CLO : Le dossier de partage est clos
         */
        codeStttDossPartg: string;
        /**
         * Permet d'indiquer si le dossier de partage est visible en externe. True = visible à l'extérieur, false = non visible de l'exterieur
         */
        indicVisbExtr: boolean;
        /**
         * Date de modification de l'indicateur de visibilite
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModfIndicVisbExtr: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la modification de l'indicateur de visiblité
         */
        idntUtilModfIndicVisbExtr: string;
        /**
         * Date de création
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCrtn: string;
        /**
         * Date de mise à jour
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModf: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la création
         */
        idntUtilCrtn: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la modification
         */
        idntUtilModf: string;
        /**
         * date de purge du dossier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        datePurge: string;
        /**
         * code type de l'identifiant externe du dossier cible
         */
        codeTypeIdntExtnDossCible: number;
        /**
         * identifiant externe du dossier cible
         */
        idntExtnDossCible: string;
        listCsultDemnDocm: Array<ICsultDemnDocm>;
    }
    interface ICsultDossPartgByIdQstn {
        /**
         * Identifiant technique du dossier de partage pouvant être converti en nombre
         */
        idntDossPartg: string;
    }
    interface ICsultDemnDocm {
        /**
         * Identifiant unique de la demande de document.
         */
        idntDemnDocm: number;
        /**
         * Identifiant externe du document au sein de l'application initiatrice du Dossier de partage.
         */
        idntExtrDemnDocm: string;
        /**
         * Libelle fonctionnel du document attendu,
         */
        liblNomDemnDocm: string;
        /**
         * Libellé de la catégorie de demande de document. Exemple Etat Civil
         */
        catgDemnDocm: string;
        /**
         * Numéro d'ordre de la catégorie de demande document
         */
        ordrCatgDemnDocm: number;
        /**
         * Type de demande de document
         * 1 : Mono-document
         * 2: Multi-document
         */
        typeDemnDocm: string;
        /**
         * Statut d'une demande de document
         * - OUV : La demande de document est ouverte
         * - VAL : La demande de document est satisfaite
         */
        codeStttDemnDocm: string;
        /**
         * Description du document à échanger. Permet d'indiquer précisément ce qui est attendu
         * Ex : (Facture EDF de moins de 3 mois ou quittance de loyer)
         */
        liblDescDemnDocm: string;
        /**
         * Code permettant de déterminer le sens de transfert du document :
         * 2 valeurs possibles :
         * - E : Entrant ==> Le document est fournit par le client en direction de la banque
         * - S : Sortant ==> Le document est founit par la banque en direction du client
         */
        codeSensTrnsDemnDocm: string;
        /**
         * Code définisant le type de porteur auquel est associé le document :
         * 1 : contrat
         * 2 : personne
         * 7 : client bancaire
         */
        codeTypAttrDocm: string;
        /**
         * Identifiant attributaire primaire du porteur du document
         */
        idntAttrbPrmr: string;
        /**
         * Identifiant attributaire secondaire du porteur du document
         */
        idntAttrbSecn: string;
        /**
         * Libelle fonctionnel de l'attributaire (Nom de la personne, numéro du contrat
         */
        liblAttrb: string;
        /**
         * Ce code indique la GED (Gestion Electronique de Documents)  cible pour l'injection du document.
         * Valeurs :
         * -'T' : GED Transitoire ;
         * -'A' : GED Archivages.
         */
        codeCritInjcAcqs: string;
        /**
         * Date de création
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCrtn: string;
        /**
         * Date de mise à jour
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateModf: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la création
         */
        idntUtilCrtn: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la modification
         */
        idntUtilModf: string;
        /**
         * identifiant externe de la demande cible
         */
        idntExtnDemnCible: string;
        listCsultDocmFour: Array<ICsultDocmFour>;
        listNatr: Array<INatr>;
        listNatrBAPI: Array<INatrBAPI>;
        listCsultDestDemnDocm: Array<ICsultDestDemnDocm>;
    }
    interface INatr {
        /**
         * Code nature
         */
        codeNatr: string;
        /**
         * Libellé nature
         */
        liblNatr: string;
    }
    interface ICsultDocmFour {
        /**
         * Identifiant unique du document fourni
         */
        idntDocmFour: number;
        /**
         * Nature du document cohérent avec le référentiel Catalogue GED Mysys.
         */
        codeNatrDocmGestElctDocm: string;
        /**
         * Libellé du code nature du document
         */
        liblNatrDocmGestElctDocm: string;
        /**
         * Code nature BAPI
         * Présent uniquement si le code nature BAPI est différent du code nature
         */
        codeNatrBAPI: string;
        /**
         * Libelle du code nature BAPI
         * Présent uniquement si le code nature BAPI est différent du code nature
         */
        liblNatrBAPI: string;
        /**
         * Identifiant FileNet du document. Numero unique du document.
         */
        idntDocmGed: string;
        /**
         * Canal d'acquisition (W : Web, A : Agence)
         */
        canlAcqs: string;
        /**
         * Code du motif de refus de validation du document fourni
         */
        codeMotfRefuDocmFour: string;
        /**
         * Libellé du motif de refus de validation du document fourni
         */
        liblMotfRefuDocmFour: string;
        /**
         * Libellé commentaire refus du document fourni
         */
        liblCommRefuDocmFour: string;
        /**
         * Statut du document fourni au sein de l'espace de partage :
         * - DEM : Demandé, le document est à transmettre
         * - EAV : Le document est en attente de validation pour vérifier sa conformité
         * - VCA : Le document est validé et il est en attente d'archivage
         * - REF : Le document a été refusé
         * - TRT : Le document a été traité
         */
        codeStttDocmFour: string;
        /**
         * Date de création
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCrtn: string;
        /**
         * Numéro de personne ayant effectué la création
         */
        numrPersCrtn: number;
        /**
         * Date de décision
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDecs: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la décision
         */
        idntUtilDecs: string;
        /**
         * Date de récupération du fichier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateRecupFichier: string;
        /**
         * Code statut du traitement Rad/Lad du document
         * - ATT : A traiter
         * - TRT : Traité
         * - ERR : En erreur
         * - NCR : Non concerné
         */
        codeStatutRadLad: string;
        listHistDocmFourRefuse: Array<IHistDocmFourRefuse>;
    }
    interface IHistDocmFourRefuse {
        /**
         * Identifiant unique du document fourni
         */
        idntDocmFour: number;
        /**
         * Nature du document cohérent avec le référentiel Catalogue GED Mysys.
         */
        codeNatrDocmGestElctDocm: string;
        /**
         * Libellé du code nature du document
         */
        liblNatrDocmGestElctDocm: string;
        /**
         * Code nature BAPI
         * Présent uniquement si le code nature BAPI est différent du code nature
         */
        codeNatrBAPI: string;
        /**
         * Libelle du code nature BAPI
         * Présent uniquement si le code nature BAPI est différent du code nature
         */
        liblNatrBAPI: string;
        /**
         * Identifiant FileNet du document. Numero unique du document.
         */
        idntDocmGed: string;
        /**
         * Canal d'acquisition (W : Web, A : Agence)
         */
        canlAcqs: string;
        /**
         * Code du motif de refus de validation du document fourni
         */
        codeMotfRefuDocmFour: string;
        /**
         * Libellé du motif de refus de validation du document fourni
         */
        liblMotfRefuDocmFour: string;
        /**
         * Libellé commentaire refus du document fourni
         */
        liblCommRefuDocmFour: string;
        /**
         * - DEM : Demandé, le document est à transmettre
         * - EAV : Le document est en attente de validation pour vérifier sa conformité
         * - VCA : Le document est validé et il est en attente d'archivage
         * - REF : Le document a été refusé
         * - TRT : Le document a été traité
         */
        codeStttDocmFour: string;
        /**
         * Date de création
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCrtn: string;
        /**
         * Numéro de personne ayant effectué la création
         */
        numrPersCrtn: number;
        /**
         * Date de décision
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDecs: string;
        /**
         * Identifiant technique de l'utilisateur ayant effectué la décision
         */
        idntUtilDecs: string;
        /**
         * Date de récupération du fichier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateRecupFichier: string;
        /**
         * Code statut du traitement Rad/Lad du document
         * - ATT : A traiter
         * - TRT : Traité
         * - ERR : En erreur
         * - NCR : Non concerné
         */
        codeStatutRadLad: string;
    }
    interface ICsultDestDemnDocm {
        /**
         * Code indiquant le destinataire de la demande de documents
         */
        codeDescDemnDocm: string;
        /**
         * Identifiant du destinataire de la demande de documents
         */
        idntDestDemnDocm: string;
    }
    interface ICsultDemnDocQstn {
        /**
         * Identifiant unique de la demande de document.
         */
        idntDemnDocm: number;
        /**
         * Mode de restitution des natures dans une demande de document
         * - 0 : Restitution des Natures catalogues
         * - 1 : Restitution des natures BAPI
         * - 2 : Restitution des natures BAPI et Catalogue
         */
        modeRestNatr: string;
    }
    interface INatrBAPI {
        /**
         * Code nature BAPI
         */
        codeNatrBAPI: string;
        /**
         * Libellé nature BAPI
         */
        liblNatrBAPI: string;
        /**
         * Description de la nature BAPI
         */
        descNatrBAPI: string;
    }
    interface IModifierIndicateurVisibiliteExterneQstn {
        /**
         * Code déterminant un établissement bancaire.
         */
        codeEtabBanc: string;
        /**
         * Code application correspondant à l'application qui a demandé la création du dossier de partage.
         * Exemple : DNC, CLACLI, etc…
         */
        codeAppliInttDossPartg: string;
        /**
         * Identifiant du Dossier de partage fournis par l'application qui a initié le dossier de partage
         */
        idntExtnDossPartg: string;
        /**
         * Permet d'indiquer si le dossier de partage est visible en externe. True = visible à l'extérieur, false = non visible de l'exterieur
         */
        indicVisbExtr: boolean;
        /**
         * Identifiant de l'utilisateur
         */
        agnt: string;
    }
    interface IModifierIndicateurVisibiliteExterneRspn {
        /**
         * Permet d'indiquer si le dossier de partage est visible en externe. True = visible à l'extérieur, false = non visible de l'exterieur
         */
        indicVisbExtr: boolean;
    }
    interface ICreerOuMettreAjourDossierPartageQstn {
        /**
         * Code etablissement
         */
        codeEtablissement: string;
        /**
         * Utilisateur qui créé le dossier (Sans la lettre)
         */
        agent: string;
        /**
         * Code application initiateur du dossier de partage (8 caractère)
         * INCR : Instruction de crédit
         */
        codeAppliInitiatriceDossPartg: string;
        /**
         * Identifiant du composant applicatif du catalogue GED pour définir la liste des natures autorisés
         */
        identifiantComposantApplicatif: string;
        /**
         * Identifiant propre à l'application doit être unique avec le couple (CodeApplicationInitiatrice + identifiantExterne)
         */
        identifiantExterneDossPartg: string;
        /**
         * Libellé affiché du dossier de partage
         */
        libelleDossPartg: string;
        /**
         * date de purge du dossier
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        datePurge: string;
        /**
         * code type de l'identifiant externe du dossier cible
         */
        codeTypeIdntExtnDossCible: number;
        /**
         * identifiant externe du dossier cible
         */
        idntExtnDossCible: string;
        listDemandeDocumentsMAJ: Array<IDemandesDocumentsMaj>;
    }
    interface ICreerOuMettreAjourDossierPartageRspn {
        /**
         * Retourne l'identifiant du dossier.
         */
        idntDossierPartage: number;
    }
    interface IDemandesDocumentsMaj {
        /**
         * Identifiant externe de la demande de document (exemple numéro de piece PIECO)
         */
        identifiantExterne: string;
        /**
         * Type de demande de document
         * 1 : Mono-document
         * 2: Multi-document
         */
        typeDemande: string;
        /**
         * Libellé de la demande de document affiché à l'écran
         */
        libelle: string;
        /**
         * Facultatif : Description de la demande de document à échanger. Permet d'indiquer précisément ce qui est attendu
         */
        description: string;
        /**
         * Ce code indique la GED (Gestion Electronique de Documents)  cible pour l'injection du document.
         * Valeurs :
         * -'T' : GED Transitoire ;
         * -'A' : GED Archivages.
         */
        codeCritereInjection: string;
        /**
         * Code permettant de déterminer le sens de transfert de la demande du document :
         * 2 valeurs possibles :
         * - E : Entrant ==> Le document est fournit par le client en direction de la banque
         * - S : Sortant ==> Le document est founit par la banque en direction du client
         */
        codeSensTransfert: string;
        /**
         * Libellé de la catégorie de demande de document.
         * Permet d'indiquer où s'affiche la demande de document
         * Exemple Etat Civil
         */
        categorie: string;
        /**
         * Ordre d'affichage de la catégorie au sein du Totem
         */
        ordreCategorie: number;
        /**
         * Code définisant le type de porteur auquel est associé la demande document :
         * 1 : contrat
         * 2 : personne
         * 7 : client bancaire
         * etc…
         */
        codeTypeAttributaire: string;
        /**
         * Identifiant du contrat  ou de la personne ou du client bancaire
         */
        identifiantAttributairePrimaire: string;
        /**
         * identifiantAttributaireSecondaire (correspond au numéro de chrono pour les PRO)
         */
        identifiantAttributaireSecondr: string;
        /**
         * Libellé de l'attributaire affiché à l'écran
         */
        libelleAttributaire: string;
        /**
         * Identifiant extene de la demande cible
         */
        idntExtnDemCible: string;
        perimetreNature: IPerimetreNature;
        listDestinataireDocumentMaj: Array<IDestinataireDocumentMaj>;
    }
    interface IPerimetreNature {
        /**
         * Liste des codes natures autorisées pour la demande de document
         * PACN
         * CSCR
         * etc...
         */
        listCodeNature: Array<string>;
        /**
         * Sujet catalogue GED (permet d'avoir la liste des natures)
         */
        sujetCategorieGed: string;
    }
    interface IDestinataireDocumentMaj {
        /**
         * Code indiquant le destinataire de la demande de document
         * 1 : Personne
         * 2 : Entité Titulaire
         */
        codeDestinataireDemandeDocument: string;
        /**
         * Identifiant du destinataire de la demande de documents
         * Identifiant de la personne ou du contrat
         */
        idntDestinataireDemandeDom: string;
    }
    interface IPurgeQstn {
        /**
         * Date après laquelle le dossier de partage doit être purgé
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        datePurge: string;
        /**
         * Code etablissement
         */
        codeEtablissement: string;
        /**
         * Code application initiateur du dossier de partage (8 caractère)
         * INCR : Instruction de crédit
         */
        codeAppliInitiatriceDossPartg: string;
        /**
         * Identifiant propre à l'application doit être unique avec le couple (CodeApplicationInitiatrice + identifiantExterne)
         */
        identifiantExterneDossPartg: string;
        /**
         * Agent mettant a jour la date de purge
         */
        agent: string;
    }
    interface IPasserDocumentGedDefinitiveQstn {
        codeEtablissement: string;
        identifiantExterneDossierPartg: string;
        codeAppliIntDossPartg: string;
    }
    interface IPasserDocumentGedDefinitveRspn {
        nbreDocAtraiter: number;
        nbreDocTraite: number;
        listeDocErreur: string;
    }
    interface IDeleteDossPartgRspn {
        retourSuppression: boolean;
    }
}

declare module myway.credits.suiviDossierVente.Rest.EspacePartage {
    interface IEspacePartageService {
        /**
         *
         * @param idntDossPartg : Identifiant technique du dossier de partage pouvant être converti en nombre
         * @param modeRestNatr : Mode de restitution des natures dans une demande de document
         *  0 : Restitution des Natures catalogues
         *  1 : Restitution des natures BAPI
         *  2 : Restitution des natures BAPI et Catalogue
         */
        getCsultDossPartgByIdQstn(idntDossPartg: number, modeRestNatr: string): ng.IPromise<myway.credits.suiviDossierVente.Rest.EspacePartage.DossierPartage.ICsultDossPartgRspn>;
        /**
         *
         * @param codeAppliInttDossPartg : Code application correspondant à l'application qui a demandé la création du dossier de partage. Exemple : DNC, CLACLI, etc…
         * @param idntExtnDossPartg : Identifiant du Dossier de partage fournis par l'application qui a initié le dossier de partage
         * @param codeEtabBanc : Code déterminant un établissement bancaire.
         * @param modeRestNatr : Mode de restitution des natures dans une demande de document
         *  0 : Restitution des Natures catalogues
         *  1 : Restitution des natures BAPI
         *  2 : Restitution des natures BAPI et Catalogue
         */
        getConsulterDossierPartageByIdExterne(codeAppliInttDossPartg: string, idntExtnDossPartg: string, codeEtabBanc: string, modeRestNatr: string): ng.IPromise<myway.credits.suiviDossierVente.Rest.EspacePartage.DossierPartage.ICsultDossPartgRspn>;
        postCreerOuMettreAjourDossierPartage(question: Rest.EspacePartage.DossierPartage.ICreerOuMettreAjourDossierPartageQstn): ng.IPromise<Rest.EspacePartage.DossierPartage.ICreerOuMettreAjourDossierPartageRspn>;
    }
    class EspacePartageService implements IEspacePartageService {
        private restService;
        static $inject: Array<string>;
        private urlDossierPartage;
        private urlGetConsulterDossierPartageByIdExterne;
        private urlPostCreerOuMettreAjourDossierPartage;
        constructor(restService: Common.IRestService);
        getConsulterDossierPartageByIdExterne(codeAppliInttDossPartg: string, idntExtnDossPartg: string, codeEtabBanc: string, modeRestNatr: string): ng.IPromise<myway.credits.suiviDossierVente.Rest.EspacePartage.DossierPartage.ICsultDossPartgRspn>;
        getCsultDossPartgByIdQstn(idntDossPartg: number, modeRestNatr: string): ng.IPromise<myway.credits.suiviDossierVente.Rest.EspacePartage.DossierPartage.ICsultDossPartgRspn>;
        postCreerOuMettreAjourDossierPartage(question: Rest.EspacePartage.DossierPartage.ICreerOuMettreAjourDossierPartageQstn): ng.IPromise<Rest.EspacePartage.DossierPartage.ICreerOuMettreAjourDossierPartageRspn>;
    }
}

declare module myway.credits.suiviDossierVente {
    const codeRolePersonneEmprunteur: string;
    const codeRolePersonneCoEmprunteur: string;
    class DossierPartagetransformer {
        static getQuestionCreationDossierPartage(dossierVente: IGestionDossierVente, codeAgent: string, listeTypeDoc: string[], listeTypeDocumentNature: Rest.ClasseurCLient.Parametrage.ITypeDocumentNature[], personnesLieeInfo: PersonneLieeInfo[]): Rest.EspacePartage.DossierPartage.ICreerOuMettreAjourDossierPartageQstn;
        private static createListeDemandeDocumentMAJ(listeTypeDoc, dossierVente, listeTypeDocumentNature, personnesLieeInfo);
        private static defineLibelle(typeDoc);
        private static definePerimetreNature(listeTypeDocumentNature, typeDoc);
    }
}

declare module myway.credits.suiviDossierVente.Rest.TiersV3.Identification {
    interface ICodeMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }
    interface IDonneeIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: string;
        identifiantClientBad: string;
    }
    interface IIdentification {
        donneeIdentification: IDonneeIdentification;
        lutteAntiBlanchiment: ILutteAntiBlanchiment;
        listMarche: Array<ICodeMarche>;
        suiviComercial: ISuiviCommercial;
        informationsEAI: IInformationsEAI;
    }
    interface ILutteAntiBlanchiment {
        codeAlerteVAO: boolean;
        messageAlerteVAO: string;
    }
    interface ISuiviCommercial {
        identifiantEDSSuiviCommercial: number;
        typeEDSSuiviCommercial: string;
        referenceExterneEDSSuiviCommercial: number;
        identifiantAgent: number;
        designationCourteEDS: string;
        designationLongueEDS: string;
    }
    interface IInformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
        libelleCodeStatutEAI: string;
        libelleCodeModeSignatureEAI: string;
    }
}

/**
 * Service de gestion de la ressource "/tiers/v3/identification"
 * @author S0012451 (Philippe LEMAIRE)
 */
declare module myway.credits.suiviDossierVente.Rest.TiersV3.Identification {
    interface IParametresTiersV3Identification {
        codeEtablissement: string;
        identifiantPersonne: string;
    }
    /**
     * Déclaration du service
     */
    class TiersV3Identification {
        protected svcAgent: MyWay.Services.ServiceAgent;
        protected $q: ng.IQService;
        protected $timeout: ng.ITimeoutService;
        static nomService: string;
        url: string;
        static $inject: string[];
        constructor(svcAgent: MyWay.Services.ServiceAgent, $q: ng.IQService, $timeout: ng.ITimeoutService);
        protected debug(message: string, detail?: any): void;
        protected error(message: string, detail?: any): void;
        protected sendMyway(question: any): ng.IPromise<any>;
        getHttpParam(question: any, methode: MyWay.Services.MethodEnum): any;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGet(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPost(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPut(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendDelete(data: any): ng.IPromise<any>;
        /**
         * Méthode de test
         * @return Une promesse de type IInfoDemandeRA
         */
        getIdentification(parametres: IParametresTiersV3Identification): ng.IPromise<IIdentification>;
    }
}

declare module myway.credits.suiviDossierVente.Rest.TiersV3.ParticulierInformation {
    interface IParticulierInformation {
        libelleCivilite: string;
        libelleSexe: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libellePaysNationnalite: string;
        libelleAppartenanceReseau: string;
        libelleSocietaire: string;
        libellePaysNaissance: string;
        libelleCapaciteJuridique: string;
        libelleInseePaysDoubleNationalite: string;
        libelleSituationFamiliale: string;
        libelleRegimeMatirimonial: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleTypeContratTravail: string;
        libelleNAFInsee: string;
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        autresPrenom: string;
        codeSexe: string;
        dateNaissance: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeInseePaysNationnalite: string;
        dateDeces: string;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        codeSituationFamiliale: string;
        dateEffetSituationFamiliale: string;
        codeRegimeMatrimonial: string;
        typeClauseMatrimoniale: string;
        indicDonationEntreEpoux: string;
        nombreEnfantACharge: number;
        categorieSocioprofessionnelle: string;
        dateEffetCSP: string;
        dateEmbaucheEmployeurActuel: string;
        codeTypeContratTravail: string;
        dateFinContratTravail: string;
        libelleProfession: string;
        codeResident: string;
        codeAppartenanceReseau: string;
        edsDomiciliation: number;
        codePieceJustif: string;
        dateObtentionPieceJustificative: string;
        refPieceJustificative: string;
        codeTypeNIF: string;
        dateNaissanceConjoint: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        edsInterneDomiciliation: number;
        sirenEmployeur: string;
        sirenAutoEntrepreneur: string;
        indicateurAutoEntrepreneur: string;
        indicateurSocietaire: string;
        identifiantRelationtEconomique: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
        dateNaturalisation: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
        indicateurActiviteProfessionnel: string;
        codeGuichetRisque: number;
        identifiantAdresse: number;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeInseeLocalite: string;
        numeroVoiePTT: number;
        codePostalPTT: string;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        numeroTelephoneCorrespondancePerso: string;
        numeroTelephoneCorrespondancePro: string;
        codeInseePays: string;
        codeTypeAdresse: string;
        codeRetourDistribution: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        libelleInseeLocalite: string;
        codeISOPays: string;
        indicateurEnvoiCourrier: string;
        indiceAmericaniteFATCA: string;
        libelleStatutFATCA: string;
        dateAttributionFATCA: string;
        codeBlocageVAO: string;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        statutPro: IStatutPro;
        gestionPrivee: IGestionPrivee;
        eligibiliteFGDR: string;
        droitAuCompte: string;
        dateEffetOptionResidence: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        indicateurPPE: string;
        codeEtablissement: string;
        identifiantPersonne: number;
        nomEmployeur: string;
        codeResidenceFiscale: string;
        codeInseePaysResidenceFiscale: string;
        nif: string;
        email: string;
    }
    interface IGestionPrivee {
        codeActnMajSuivSpclGp: string;
        codeEtatSuiviGP: string;
        identifiantEDS: number;
        identifiantExterneEDS: number;
        libelleCalculeEDS: string;
        typeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
        dateDebutValiditeGP: string;
        dateFinValiditeGP: string;
        identifiantEDS2: number;
        identifiantExterneEDS2: number;
        libelleCalculeEDS2: string;
        codeMotivationMarquageGP: string;
        commentaireMarquageProspect: string;
        identifiantPersonne: number;
        codeEtablissement: string;
    }
    interface IStatutPro {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeEtatStatutPro: string;
        dateModificationStatutPro: string;
        dateFinValiditeStatutPro: string;
        identifiantExterneAgentModification: number;
        identifiantInterneAgentModification: number;
        libelleCalculeEDS: string;
        libelleFonctionPF: string;
        libelleEDS: string;
    }
    interface IAdresse {
        numeroChronoLieuActivite: number;
        numeroChronoProfessionnel: number;
        codeTypeAdresse: string;
    }
    interface IMedia {
        codeTypeMedia: string;
        portableEtranger: string;
        codeTypeMoyenContact: string;
        codeTypeUsageMedia: string;
        preferenceTelephone: string;
        clientAccepte: string;
        indicateurOppositionTelephone: string;
        referenceAccessMedia: string;
        indicateurPreferenceMedia: string;
    }
}

/**
 * Service de gestion de la ressource "/tiers/v3/particulierInformation"
 * @author S0012451 (Philippe LEMAIRE)
 */
declare module myway.credits.suiviDossierVente.Rest.TiersV3.ParticulierInformation {
    interface IParametresTiersV3ParticulierInformation {
        codeEtablissement: string;
        idPersonne: string;
    }
    /**
     * Déclaration du service
     */
    class TiersV3ParticulierInformation {
        protected svcAgent: MyWay.Services.ServiceAgent;
        protected $q: ng.IQService;
        protected $timeout: ng.ITimeoutService;
        static nomService: string;
        url: string;
        static $inject: string[];
        constructor(svcAgent: MyWay.Services.ServiceAgent, $q: ng.IQService, $timeout: ng.ITimeoutService);
        protected debug(message: string, detail?: any): void;
        protected error(message: string, detail?: any): void;
        protected sendMyway(question: any): ng.IPromise<any>;
        getHttpParam(question: any, methode: MyWay.Services.MethodEnum): any;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGet(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPost(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPut(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendDelete(data: any): ng.IPromise<any>;
        /**
         * Méthode de test
         * @return Une promesse de type IInfoDemandeRA
         */
        getParticulierInformation(parametres: IParametresTiersV3ParticulierInformation): ng.IPromise<IParticulierInformation>;
    }
}

declare module myway.credits.suiviDossierVente.Rest.OutilImpressionV1.LibelleEtablissement {
    interface IGet {
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
}

/**
 * Service de gestion de la ressource "/outilimpression/v1/libelleEtablissement"
 * @author S0012451 (Philippe LEMAIRE)
 */
declare module myway.credits.suiviDossierVente.Rest.OutilImpressionV1.LibelleEtablissement {
    /**
     * Déclaration du service
     */
    class Service {
        protected svcAgent: MyWay.Services.ServiceAgent;
        protected $q: ng.IQService;
        protected $timeout: ng.ITimeoutService;
        static nomService: string;
        url: string;
        static $inject: string[];
        constructor(svcAgent: MyWay.Services.ServiceAgent, $q: ng.IQService, $timeout: ng.ITimeoutService);
        protected debug(message: string, detail?: any): void;
        protected error(message: string, detail?: any): void;
        protected sendMyway(question: any): ng.IPromise<any>;
        getHttpParam(question: any, methode: MyWay.Services.MethodEnum): any;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendGet(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPost(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendPut(data: any): ng.IPromise<any>;
        /**
         * Méthode d'appel du service
         * @param Paramètre de la recherche de contrat carte
         * @return Une promesse de type contrat carte recherche
         */
        sendDelete(data: any): ng.IPromise<any>;
        /**
         * Méthode de test
         * @return Une promesse de type IInfoDemandeRA
         */
        lireParametre(codeEtablissement: string): ng.IPromise<ILibelleEtablissement>;
    }
}
