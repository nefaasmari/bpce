
declare module myway.credits.suiviDossierVente {
    var app: any;
    class FilterNames {
        static CIVILITE: string;
    }
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
        static prefixeMdpjSection: string;
        static codeVision: number;
    }
    class Environnement {
        static DUA: string;
        static VFO: string;
        static UTI: string;
    }
    var urlSiteWebCe: string;
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
        getContractualisation(acte: myway.comContract.ContractualisationActe.Modeles.IActe, listeSignataires: Array<myway.comContract.modeles.ISignataire>, listeTitulaires: Array<myway.comContract.ContractualisationActe.Modeles.ITitulaire>, nonEligibilite: boolean): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
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
        affichageSignataires: myway.comContract.RecapSignataires.IRecapSignatairesInput;
        coemprunteur: Rest.TiersV3.ParticulierInformation.IParticulierInformation;
        parametres: IParametresSuiviDossier;
        private abonnementsNouveauDossier;
        abonnerNouveauDossier(lecteur: INouveauDossierCallback): void;
        private abonnementsNouveauDossierEnvoyer();
        static $inject: string[];
        constructor(qService: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, svcModalMyway: MyWay.UI.IModalService, svcTiersV3ParticulierInformation: Rest.TiersV3.ParticulierInformation.TiersV3ParticulierInformation);
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
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(): ng.IPromise<IGestionDossierVente>;
        getCOCO(): ng.IPromise<IGestionDossierVente>;
        enregistrerEtape(codeAction?: string): ng.IPromise<IGestionDossierVente>;
        redirectionIziVente(): void;
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
        verifierIZMF(): boolean;
        formatageIdentifiantPersonne(idPersonne: string): string;
        ajusterMdecPp(): void;
        showErreur(err: MyWay.Services.Erreur): void;
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
        private $q;
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
        listePiecesJustificatives: Array<IpieceJustificative>;
        listePiecesJustificatives2: Array<CaseACocher>;
        frmPiecesJustificatives: FormulairePiecesJustificatives;
        constructor(svcGestionDossierVente: GestionDossierVenteService, suiviDossierVenteEditiqueService: SuiviDossierVenteEditiqueService, $q: ng.IQService, rstContratBadInformation: Rest.ContratServiceBqd.InformationBad.ContratServiceBqdInformationBad);
        onNouveauDossierVente(): void;
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
        private serviceAgentExtended;
        private $scope;
        private modalService;
        private svcGestionDossierVente;
        private piecesJustificativesService;
        private frmPiecesJustificatives;
        private chargementEnCours;
        afficherListePJ: boolean;
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du controleur PiecesJustificativesController
         *
         * @returns {void}
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, modalService: MyWay.UI.IModalService, svcGestionDossierVente: GestionDossierVenteService, piecesJustificativesService: myway.credits.suiviDossierVente.PiecesJustificativesService);
        onNouveauDossierVente(): void;
        keyDownTroisEtat($event: KeyboardEvent): void;
        ouvrirModalePieceJustificative(): void;
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
        static getBlocPrincipal(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, client: myway.credits.suiviDossierVente.IParticulierInformation, option: myway.credits.suiviDossierVente.IOptionDocument, adresse: myway.credits.suiviDossierVente.IAdresse, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, civilite: string, authentificationInfos: MyWay.Services.Context.AuthentificationInfo): LettreAccompagnement.LettreAccompagnementBlocPrincipal;
        static getBlocAdresse(client: myway.credits.suiviDossierVente.IParticulierInformation, civilite: string): LettreAccompagnement.BlAdresse;
        static getBlocReferences(client: myway.credits.suiviDossierVente.IParticulierInformation, dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente): LettreAccompagnement.BlReferences;
        static getBlocCivilite(civilite: string): LettreAccompagnement.BlCivilite;
        static getBlocPiecesJointes(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente): LettreAccompagnement.LettreAccompagnementBlocPrincipalBlocPiecesJointes[];
        static getBlocRetourDocuments(option: myway.credits.suiviDossierVente.IOptionDocument, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS): LettreAccompagnement.LettreAccompagnementBlocPrincipalBlocRetourDocuments;
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
    function creerLettreAccompagnement(authenticateInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, parametrageEtablissement: Rest.OutilImpressionV1.LibelleEtablissement.ILibelleEtablissement, gestionDossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, option: myway.credits.suiviDossierVente.IOptionDocument, infosPersonne: Rest.TiersV3.ParticulierInformation.IParticulierInformation, civiliteEditique: string, infosCoemprunteur: Rest.TiersV3.ParticulierInformation.IParticulierInformation, civiliteCoemprunteur: string, piecesJointes: Array<string>, adressePersonne: IAdresse, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, identifiantBad: string): LettreAccompagnement;
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
        static getBlocPrincipal(dossierVente: myway.credits.suiviDossierVente.IGestionDossierVente, personnes: myway.credits.suiviDossierVente.PersonneLieeInfo[], option: myway.credits.suiviDossierVente.IOptionDocument, adresse: myway.credits.suiviDossierVente.IAdresse, agence: myway.credits.suiviDossierVente.ICaracteristiqueEDS, authentificationInfos: MyWay.Services.Context.AuthentificationInfo, piecesJustificatives: Array<string>): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocument;
        static getBlocTitrePJ(dossierVente: IGestionDossierVente): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj;
        static getBlocIntroPJ(dossierVente: IGestionDossierVente): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj;
        static getBlocPersonne(dossierVente: IGestionDossierVente, personnes: myway.credits.suiviDossierVente.PersonneLieeInfo[], piecesJustificatives: Array<string>): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne[];
        static getBlocPiecesJustificatives(dossierVente: IGestionDossierVente, piecesJustificatives: Array<string>): Array<ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPieceJustificative>;
        static getBlocPasMsi(option: IOptionDocument, agence: ICaracteristiqueEDS): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi[];
        static getBlocMsiChoisirObj(option: IOptionDocument, agence: ICaracteristiqueEDS): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj[];
        static getBlocblMsirepMsgCons(option: IOptionDocument, agence: ICaracteristiqueEDS): ListePiecesJustificatives.ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons[];
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
        blTitrePj: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlTitrePj;
        blIntroPj: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlIntroPj;
        blCopieDocuments: number;
        blPersonne: ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPersonne[];
        blAenvoye: number;
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
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlPasMsi {
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsichoisirObj {
        adresseBordRetrLgnUn: string;
        adresseBordRetrLgnDeux: string;
        adresseBordRetrLgnTrois: string;
        adresseBordRetrLgnQuatre: string;
        adresseBordRetrLgnCinq: string;
        adresseBordRetrLgnSix: string;
        denominationAdresse: string;
        objetCaisse: string;
    }
    interface ListePiecesJustificativesPiecesJustificativesCorpsDocumentBlMsirepMsgCons {
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
