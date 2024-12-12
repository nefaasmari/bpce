declare module myway.clients.suiviDossierVente {

    export interface IInterventionDossier {
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

    export interface IHistoriqueIntervention {
        dossierVente: IDossierVente;
        listeInterventionDossier: Array<IInterventionDossier>;
    }


    export interface IActeurContexte {
        codeEntiteVenteContexte: string;
        libelleEntiteVenteContexte: string;
        codeEdsInternePFContexte: number;
        codeEdsExternePFContexte: number;
        typeEdsExterneContexte: string;
        codeEdsInterneRattachContexte: number;
        referenceExterneAgentContexte: number;
    }

    export interface IActeurDerniereModification {
        codeEntiteVenteDerMod: string;
        libelleEntiteVenteDerMod: string;
        codeEdsInternePFDerMod: number;
        nomAgentDerMod: string;
        prenomAgentDerMod: string;
        codeEdsInterneRattachDerMod: number;
        referenceExterneAgentDerMod: number;
    }

    export interface IActionPossible {
        codeActionPossible: string;
        libelleActionPossibleAgent: string;
        libelleActionPossibleClient: string;
        codeTypeActionPossible: string;
    }

    export interface IAlerteFonctionnelle {
        codeAlerteFonctionnelle: number;
        libelleAlerteFonctionnelle: string;
    }

    export interface ICanalReprise {
        codeCanalReprise: string;
        libelleCanalReprise: string;
        rangAffichageCanalReprise: number;
        codeSensCommunicReprise: string;
        libelleSensCommunicReprise: string;
    }

    export interface ICheminAvancement {
        codeJalon: string;
        libelleJalon: string;
        codeFranchissement: string;
        rangJalon: number;
    }

    export interface ICommentaire {
        texteCommentaire: string;
    }

    export interface ICompositionCaracteristique {
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

    export interface ICompositionDonneeDetail {
        identifiantDonneeDetailJson: number;
        referenceExterneData: string;
        donneeData: string;
    }

    export interface ICompositionDossier {
        compositionCaracteristique: ICompositionCaracteristique;
        listeCompositionDonneeDetail: Array<ICompositionDonneeDetail>;
    }

    export interface IContractualisationSignature {
        codeModeSignature: string;
        libelleModeSignature: string;
        identifiantDocumentNumerise: string;
        indicateurEnvoiHubmail: string;
        identifiantTransactionContract: string;
        dateSignature: string;
    }

    export interface IDonneePrincipale {
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

    export interface IDossierVente {
        codeEtablissement: string;
        identifiantDossierVente: number;
        codeExterneApplication: string;
        identifiantExterneDossierVente: string;
    }

    export interface IEtapeEnCours {
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

    export interface IGestionDossierVente {
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

    export interface IPartenaire {
        identifiantPartenaire: string;
        libellePartenaire: string;
    }

    export interface IPersonneLiee {
        identifiantPersonne: string;
        codeRolePersonne: string;
        libelleRolePersonne: string;
        adresseMailPersonne: string;
        indicateurSignataire: string;
    }

    //Rest Tiers/ParticulierInfo
    export interface IParticulierInformation {
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

    export interface IGestionPrivee {
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

    export interface IStatutPro {
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
    //
    //export interface IParticulierInformation {
        
    //    identifiantPersonne: number;        
    //    situationProfessionnelle: ISituationProfessionnellle;        
    //    codeEtablissement: string;
    //    etatCivil: IEtatCivil;
    //    situationFiscale: ISituationFiscale;
    //    donneesAdministratives: IDonneesAdministratives;
    //}

    //export interface IEtatCivil {        
    //    codeCivilite: string;        
    //    nomFamillePersonnePhysique: string;
    //    prenom: string;
    //    dateNaissance: Date;
    //    codeDepartementNaissance: string;
    //    codeInseePaysNationalite: string;
    //    dateNaturalisation: Date;
    //    codeSituationFamiliale: string;
    //    codeSexe: string;
    //    nomMarital: string;
    //    designationCourte: string;
    //    codeCommuneNaissance: string;
    //    libelleCommuneNaissance: string;
    //    dateDeces: Date;
    //    codeCapaciteJuridique: string;
    //    codePaysNaissance: string;
    //    codeInseePaysDoubleNationalite: string;
    //    libelleInseePaysDoubleNationalite: string;
    //    dateEffetSituationFamiliale: Date;
    //    codeRegimeMatrimonial: string;
    //    nombreEnfantACharge: number;
    //    libelleCapaciteJuridique: string;
    //    libelleCivilite: string;
    //    libelleDepartementNaissance: string;
    //    libellePaysNationalite: string;
    //    libellePaysNaissance: string;
    //    libelleRegimeMatrimonial: string;
    //    libelleSexe: string;
    //    libelleCodeSituationFamiliale: string;
    //    autresPrenom: string;
    //}

    //export interface ISituationProfessionnellle {
    //    catégorieSocioProfessionnelle: string;
    //    denominationEmployeur: string;
    //    sirenEmployeur: string;
    //    dateEffetCSP: Date;
    //    dateEmbaucheEmployeurActuel: Date;
    //    codeTypeContratTravail: string;
    //    dateFinContratTravail: Date;
    //    codeNAFInsee: string;
    //    libelleCategorieSocioProfessionnelle: string;
    //    libelleNAFInsee: string;
    //    libelleTypeContratTravail: string;
    //    libelleProfession: string;
    //    codeFamilleNAFINSEE: string;
    //    troisDerniersCaracteresNAF: string;
    //    codeSecteurEmploi: string;
    //}

    //export interface ISituationFiscale {
    //    codeResident: string;
    //}

    //export interface IDonneesAdministratives {
    //    codeAppartenanceReseau: string;
    //    indicateurSocietaire: string;
    //    libelleAppartenanceReseau: string;
    //    identifiantRelationEconomique: number;
    //    EDSDomiciliation: number;
    //    domiciliationRevenu: string;
    //    horsPresenceClient: string;
    //}

    //Rest Tiers/identification
    export interface IIdentification {
        donneeIdentification: IDonneeIdentification;
        lutteAntiBlanchiment: ILutteAntiBlanchiment;
        listMarche: Array<ICodeMarche>;
        suiviComercial: ISuiviCommercial;
    }

    export interface IDonneeIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: Date;
    }

    export interface ILutteAntiBlanchiment {
        codeAlerteVAO: boolean;
        messageAlerteVAO: string;        
    }

    export interface ICodeMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }

    export interface ISuiviCommercial {
        identifiantEDSSuiviCommercial: number;
        typeEDSSuiviCommercial: string;
        referenceExterneEDSSuiviCommercial: number;
        identifiantAgent: number;
        designationCourteEDS: string;
        designationLongueEDS: string;
    }
    //REST TIERS/adresse
    export interface IAdresse {
        identificationPersonne: IIdentificationPersonne;
        listeAdresse: Array<IListeAdresse>;
    }

    export interface IListeAdresse {
        ligneAdresse: ILigneAdresse;
        caracteristiqueAdresse: ICaracteristiqueAdresse;
    }

    export interface ILigneAdresse {
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

    export interface ICaracteristiqueAdresse {
        codeRetourDistribution: string;
        libelleRetourDistribution: string;
        indicateurEnvoiCourrier: boolean;
        indicateurDifferencePostFisc: boolean;
    }

    export interface IIdentificationPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
    }

    // REST VAD (Doctypeparametre)
    export interface IOptionDocument {
        jeuDocument: IJeuDocumentDetail;
        jeuParametre: IJeuParametreCaracteristique;
        entiteVente: IEntite;
    }
    export interface IJeuDocumentDetail {
        codeEtablissement: string;
        typeDocument: string;
        identJeuParametre: number;
        dateDebutValiditeJeuDoc: string;
        dateFinValiditeJeuDoc: string;
        dateMajEnrgJeuDoc: string;
        referenceExterneAgentDerModJeuD: number;
    }
    export interface IJeuParametreCaracteristique {
        codeEtablissement: string;
        identifiantJeuParametre: number;
        libelleJeuParametre: string;
        dateDebutValiditeJeu: string;
        dateFinValiditeJeu: string;
        dateMajEnrgJeu: string;
        referenceExterneAgentDerModJeu: number;
    }
    export interface IEntite {
        codeEntiteVente: string;
        listeJeuDetail: Array<IJeuDetail>;        
    }
    export interface IJeuDetail {
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
    export interface IAdresseRetourDetail {
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

    // REST structure/caracteristiqueEDS
    export interface IInfoEDS {
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

    export interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }

    export interface IInfoPosteFonctionnel {
        codeAgent: number;
        typeFonction: string;
        libelleFonction: string;
        codeQualiteAgent: string;
        adresseEMail: string;
    }

    export interface IInfoRattachementEDS {
        identifiantEDSRattachement: number;
        referenceEDSRattachement: number;
        typeEDSRattachement: string;
        libelleEDSRattachement: string;
        dateFinValiditeEDSRattachement: Date;
        responsableEDSRattachement: number;
    }

    export interface IParametresSuiviDossier {
        // Données composant un dossier de vente
        gestionDossierVente: IGestionDossierVente;
        // Code canal en cours
        codeCanal: string;
        // Indique le sens de la communication pour le canal de vente téléphone
        // Valeurs possibles : "E" = entrant ou "S" = sortant
        codeSensCommunication: string;
    }

    export interface IGestionDossierVentePutQuery {
        // Données composant un dossier de vente
        gestionDossierVente: IGestionDossierVente;
        // Code canal en cours
        codeCanal: string;
        // Indique le sens de la communication pour le canal de vente téléphone
        // Valeurs possibles : "E" = entrant ou "S" = sortant
        codeSensCommunication: string;
    }
    
    export interface IGestionDossierVenteService {
        sendPutRequest(gestionDossierVentePutQuery: IGestionDossierVentePutQuery, actionPossible: string): ng.IPromise<IGestionDossierVente>;
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
        getContext(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        getPersonnesLiees(identifiantPersonne: string): ng.IPromise<myway.clients.suiviDossierVente.IParticulierInformation>;
        getIdentification(identifiantPersonne: string): ng.IPromise<IIdentification>;
        getOptionDocument(codeEtablissement: string, typeDocument: string, codeEntiteVente: string): ng.IPromise<IOptionDocument>;
        getAdresse(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<IAdresse>;
        getCaracteristiqueEDS(codeEtablissement: string, typeEDS: string, referenceExterneEDS: number): ng.IPromise<ICaracteristiqueEDS>;
    }
    
    export interface IHistoriqueInterventionService {
        sendGetRequest(dossierVente: IDossierVente): ng.IPromise<IHistoriqueIntervention>;
    }

    export interface ISuiviDossierVenteEditiqueService {
        genererLettreAccompagnement(dossierVente: myway.clients.suiviDossierVente.IGestionDossierVente,
            client: myway.clients.suiviDossierVente.IParticulierInformation,
            option: myway.clients.suiviDossierVente.IOptionDocument,
            adresse: myway.clients.suiviDossierVente.IAdresse,
            agence: myway.clients.suiviDossierVente.ICaracteristiqueEDS): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
    }
        
}
