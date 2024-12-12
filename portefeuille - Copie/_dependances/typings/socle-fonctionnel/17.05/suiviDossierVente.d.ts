
declare module myway.clients.suiviDossierVente {
    var app: any;
    class FilterNames {
        static CIVILITE: string;
    }
}

declare module myway.clients.suiviDossierVente {
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
        dateHeureIntervention: string;
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
        libelleEntiteVenteContexte: string;
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
    }
    interface IPartenaire {
        identifiantPartenaire: string;
        libellePartenaire: string;
    }
    interface IPersonneLiee {
        identifiantPersonne: number;
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
        identifiantPersonne: number;
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
    interface IGestionDossierVenteService {
        sendPutRequest(gestionDossierVentePutQuery: IGestionDossierVentePutQuery, actionPossible: string): ng.IPromise<IGestionDossierVente>;
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
        getContext(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        getPersonnesLiees(identifiantPersonne: string): ng.IPromise<myway.clients.suiviDossierVente.IParticulierInformation>;
        getIdentification(identifiantPersonne: string): ng.IPromise<IIdentification>;
        getOptionDocument(codeEtablissement: string, typeDocument: string, codeEntiteVente: string): ng.IPromise<IOptionDocument>;
        getAdresse(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<IAdresse>;
        getCaracteristiqueEDS(codeEtablissement: string, typeEDS: string, referenceExterneEDS: number): ng.IPromise<ICaracteristiqueEDS>;
    }
    interface IHistoriqueInterventionService {
        sendGetRequest(dossierVente: IDossierVente): ng.IPromise<IHistoriqueIntervention>;
    }
    interface ISuiviDossierVenteEditiqueService {
        genererLettreAccompagnement(dossierVente: myway.clients.suiviDossierVente.IGestionDossierVente, client: myway.clients.suiviDossierVente.IParticulierInformation, option: myway.clients.suiviDossierVente.IOptionDocument, adresse: myway.clients.suiviDossierVente.IAdresse, agence: myway.clients.suiviDossierVente.ICaracteristiqueEDS): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
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
        sendPutRequest(gestionDossierVentePutQuery: IGestionDossierVentePutQuery, actionPossible: string): ng.IPromise<IGestionDossierVente>;
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
        getContext(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        getPersonnesLiees(identifiantPersonne: string): ng.IPromise<myway.clients.suiviDossierVente.IParticulierInformation>;
        getIdentification(identifiantPersonne: string): ng.IPromise<IIdentification>;
        getOptionDocument(codeEtablissement: string, typeDocument: string, codeEntiteVente: string): ng.IPromise<IOptionDocument>;
        getAdresse(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<IAdresse>;
        getCaracteristiqueEDS(codeEtablissement: string, typeEDS: string, referenceExterneEDS: number): ng.IPromise<ICaracteristiqueEDS>;
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

declare module suiviDossierVente.Constantes {
    /**
     * Gestion des urls pour les appels aux services REST
     */
    module Services {
        module UrlRessourcesRest {
            var urlDossierVenteGestionDossierVente: string;
        }
    }
}

declare module myway.clients.suiviDossierVente.Constantes {
    module Services {
        module UrlRessoutcesRest {
            var URL_RESSOURCE_GESTION_DOSSIER_VENTE: string;
        }
    }
}

declare module myway.clients.suiviDossierVente {
    function civiliteFilter(codeCivilite: string): string;
}

declare module myway.clients.suiviDossierVente {
    class GcedocFactory {
        static getGenerationParams(infosDocument: IInfosDocumentGcedoc, identifiantAttributaire: string, intituleAttributaire: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): MyWay.Services.Impression.GenerationParams;
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
    }
}

declare module myway.clients.suiviDossierVente {
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
}

declare module myway.clients.suiviDossierVente {
    class LettreAccompagnementFactory {
        static getBlocPrincipal(dossierVente: myway.clients.suiviDossierVente.IGestionDossierVente, client: myway.clients.suiviDossierVente.IParticulierInformation, option: myway.clients.suiviDossierVente.IOptionDocument, adresse: myway.clients.suiviDossierVente.IAdresse, agence: myway.clients.suiviDossierVente.ICaracteristiqueEDS, civilite: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): LettreAccompagnement.LettreAccompagnementBlocPrincipal;
        static getBlocAdresse(client: myway.clients.suiviDossierVente.IParticulierInformation, civilite: string): LettreAccompagnement.BlAdresse;
        static getBlocReferences(client: myway.clients.suiviDossierVente.IParticulierInformation, dossierVente: myway.clients.suiviDossierVente.IGestionDossierVente): LettreAccompagnement.BlReferences;
        static getBlocCivilite(civilite: string): LettreAccompagnement.BlCivilite;
        static getBlocPiecesJointes(dossierVente: myway.clients.suiviDossierVente.IGestionDossierVente): LettreAccompagnement.LettreAccompagnementBlocPrincipalBlocPiecesJointes[];
        static getBlocRetourDocuments(option: myway.clients.suiviDossierVente.IOptionDocument, agence: myway.clients.suiviDossierVente.ICaracteristiqueEDS): LettreAccompagnement.LettreAccompagnementBlocPrincipalBlocRetourDocuments;
        static getBlocContacter(option: myway.clients.suiviDossierVente.IOptionDocument): LettreAccompagnement.BlContacter;
        static getBlocAvantSignature(option: myway.clients.suiviDossierVente.IOptionDocument): LettreAccompagnement.BlAvantSign;
        static getBlocSignature(option: myway.clients.suiviDossierVente.IOptionDocument, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): LettreAccompagnement.BlSignCaisse;
        static getBlocApresSignature(option: myway.clients.suiviDossierVente.IOptionDocument): LettreAccompagnement.BlApresNotaBene;
        static getBlocSalutation(civilite: string): LettreAccompagnement.BlSalutation;
        private static getJeuOption(option, codeRubriqueParametre);
    }
}


declare module myway.clients.suiviDossierVente {
    /**
     * Service lié à l'éditique
     */
    class SuiviDossierVenteEditiqueService {
        private $q;
        private $filter;
        private serviceAgent;
        private gestionDossierVenteService;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, serviceAgent: MyWay.Services.ServiceAgentExtended, gestionDossierVenteService: GestionDossierVenteService);
        /**
         * Génère une lettre d'accompagnement
         */
        genererLettreAccompagnement(dossierVente: myway.clients.suiviDossierVente.IGestionDossierVente, client: myway.clients.suiviDossierVente.IParticulierInformation, option: myway.clients.suiviDossierVente.IOptionDocument, adresse: myway.clients.suiviDossierVente.IAdresse, agence: myway.clients.suiviDossierVente.ICaracteristiqueEDS): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
    }
}

declare module myway.clients.suiviDossierVente {
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "dossiervente/v1/gestionDossierVente".
     */
    class GestionDossierVenteService implements IGestionDossierVenteService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        codeEtablissement: string;
        indicRestCompoDetail: string;
        indicRestCheminAvancement: string;
        codeActionContexte: string;
        typeAppelant: string;
        codeCanalContexte: string;
        identifiantExterneDossierVente: string;
        codeExterneApplication: string;
        codeEdsInternePFContexte: string;
        identifiantDossierVente: number;
        referenceExterne: string;
        codeEntiteVente: IGestionDossierVente;
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(gestionDossierVentePutQuery: IGestionDossierVentePutQuery, actionPossible: string): ng.IPromise<IGestionDossierVente>;
        /**
         * Permet de rechercher une personne
         * @param codeEtablissement : string
         * @param identifiantPersonne : string
         * @return nom: string
         * @return prenom : string
         */
        getPersonnesLiees(idPersonne: string): ng.IPromise<IParticulierInformation>;
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
        getCaracteristiqueEDS(codeEtablissement: string, typeEDS: string, referenceExterneEDS: number): ng.IPromise<ICaracteristiqueEDS>;
        /**
         * Permet de recuperer les donnees VAD
         * @param codeEtablissement : string
         * @param typeDocument : string
         * @param: codeEntiteVente: string
         * @param: dateTraitement : string
         */
        getOptionDocument(codeEtablissement: string, typeDocument: string, codeEntiteVente: string): ng.IPromise<IOptionDocument>;
        /**
         * Méthode récupération du contexte utilisateurConnecte
         * @return contexte utilisateurConnecte
         */
        getContext(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        /**
         * Redirection vers contract
         */
        redirectionContractualisation(params: any): void;
        /**
         * Méthode de construction des urls web service
         * @return L'url du web service
         */
        private urlDossierVente();
        private urlTiers();
        private urlDoctypeParametre();
        private urlStructure();
    }
}

declare module myway.clients.suiviDossierVente {
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

declare module myway.clients.suiviDossierVente {
    class PiecesJustificativesService {
        private gestionDossierVenteService;
        private suiviDossierVenteEditiqueService;
        static $inject: string[];
        dossier: IGestionDossierVente;
        pieceJustificativeAAjouter: string;
        selectionComplete: boolean;
        labelSelectionComplete: string;
        listePiecesJustificativesSelectionnees: Array<string>;
        pieceSelectionnees: IpieceJustificative;
        afficherPiecesJustificatives: string;
        personneLiee: Array<IPersonneLiee>;
        numeroClient: any;
        client: IParticulierInformation;
        idPersonne: string;
        codeEtablissement: string;
        typeDocument: string;
        codeEntiteVente: string;
        doctyparametreOptionDoc: any;
        tiersAdresse: any;
        structureCaracteristiqueEDS: any;
        listePiecesJustificatives: Array<IpieceJustificative>;
        constructor(gestionDossierVenteService: GestionDossierVenteService, suiviDossierVenteEditiqueService: SuiviDossierVenteEditiqueService);
        checkPiecesJustificative(pieceJustificative: IpieceJustificative, valuePieceJustificative: boolean): Array<string>;
        addPieceJustificative(pieceAAjouter: string): Array<IpieceJustificative>;
        changementSelectionComplete(selectionComplete: boolean): Array<string>;
        recupererListePiecesJustificativesSelectionnees(): Array<string>;
        stockagePiecesJustificatives(dossier: IGestionDossierVente): IGestionDossierVente;
    }
}

declare module myway.clients.suiviDossierVente {
    /**
     * Classe du controleur Caracteristiques
     * @class controleur Caracteristiques
     */
    class ActionFooterControleur {
        private gestionDossierVenteService;
        private piecesJustificativesService;
        newDossierVente: IGestionDossierVente;
        static $inject: string[];
        private gestionDossier;
        private codeCanalEnCours;
        private codeSensCommunication;
        private dossierVente;
        private listeAction;
        private libelleAction;
        private dossierVenteQuery;
        private actionPossible;
        constructor(gestionDossierVenteService: GestionDossierVenteService, piecesJustificativesService: PiecesJustificativesService);
        valider(): void;
    }
}

declare module myway.clients.suiviDossierVente {
}

declare module myway.clients.suiviDossierVente {
    /**
     * Classe du controleur Caracteristiques
     * @class controleur Caracteristiques
     */
    class CaracteristiquesControleur {
        dossier: IGestionDossierVente;
        caracteristiquesDossier: string;
        montant: string;
        donneePrincipale: string;
        static $inject: string[];
        constructor(gestionDossierVenteService: GestionDossierVenteService);
    }
}

declare module myway.clients.suiviDossierVente {
}

declare module myway.clients.suiviDossierVente {
    /**
     * Classe du controleur FormulaireContexte temporaire
     * @class controleur FormulaireContexte temporaire
     */
    class FormulaireContexteControleur {
        static $inject: string[];
        codeEtablissement: any;
        identifiantDossierVente: any;
        identifiantExterneDossierVente: any;
        codeExterneApplication: any;
        codeActionContexte: any;
        typeAppelant: any;
        codeCanal: any;
        codeSensDeCommunication: any;
        codeEntiteVente: any;
        codeEdsInterne: any;
        typeEdsExterne: any;
        referenceExterneAgent: any;
        indicRestCompo: any;
        indicRestCheminAvancement: any;
        estValider: boolean;
        constructor(gestionDossierVenteService: GestionDossierVenteService);
        valider(): any;
    }
}

declare module myway.clients.suiviDossierVente {
    interface IMwFormulaireContexteAttributes extends ng.IAttributes {
    }
}

declare module myway.clients.suiviDossierVente {
    class ModaleAjouterPiecesJustificatives {
        private $modalInstance;
        private piecesJustificativesService;
        static $inject: string[];
        private pieceJustificativeAAjouter;
        idPieceJustificative: string;
        private listePiecesJustificatives;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, piecesJustificativesService: myway.clients.suiviDossierVente.PiecesJustificativesService);
        fermer(): void;
        valider(): void;
    }
}

declare module myway.clients.suiviDossierVente {
    /**
     * Classe du controleur PiecesJustificativesController
     * @class PiecesJustificativesController
     */
    class PiecesJustificativesController {
        private $scope;
        private modalService;
        private piecesJustificativesService;
        private listePiecesJustificatives;
        private labelSelectionComplete;
        private listePiecesJustificativesSelectionnees;
        private selectionComplete;
        afficherPiecesJustificatives: string;
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du controleur PiecesJustificativesController
         *
         * @returns {void}
         */
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, piecesJustificativesService: myway.clients.suiviDossierVente.PiecesJustificativesService);
        changementSelectionComplete(): void;
        checkPiecesJustificative(pieceJustificative: IpieceJustificative): void;
        ouvrirModalePieceJustificative(): void;
    }
}

declare module myway.clients.suiviDossierVente {
    interface IpieceJustificative {
        label: string;
        value: boolean;
    }
}

declare module myway.clients.suiviDossierVente {
    /**
     * Classe du controleur SuiviDossierVenteController
     * @class SuiviDossierVenteController
     */
    class SuiviDossierVenteController {
        private $scope;
        private modalService;
        private gestionDossierVenteService;
        private historiqueInterventionService;
        private parametres;
        ouvert: boolean;
        abandonDossierVente: IGestionDossierVente;
        acte: myway.comContract.ContractualisationActe.Modeles.IActe;
        signataire: myway.comContract.modeles.ISignataire;
        listeSignataires: Array<myway.comContract.modeles.ISignataire>;
        titulaire: myway.comContract.ContractualisationActe.Modeles.ITitulaire;
        listeTitulaires: Array<myway.comContract.ContractualisationActe.Modeles.ITitulaire>;
        surchargeNonEligibilite: boolean;
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
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, gestionDossierVenteService: GestionDossierVenteService, historiqueInterventionService: HistoriqueInterventionService);
        abandonDossier(actionPossible: string): void;
        chercherCodeActionPossible(codes: string[]): boolean;
        chargerHistoriqueIntervention(): void;
        construireBoutonAbandon(): void;
    }
}

declare module myway.clients.suiviDossierVente {
    interface IMwSuiviDossierVenteAttributes extends ng.IAttributes {
        parametres: string;
        ouvert: boolean;
        abandonDossierVente: string;
    }
}

declare module myway.clients.suiviDossierVente.LettreAccompagnement {
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
