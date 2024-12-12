declare module Myway.Ressource.Tiers.ParticulierInformation {
  export interface IParticulierInformation {
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
    nif: string;
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
    email: string;
  }

  export interface IGestionPrivee {
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

  export interface IStatutPro {
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

  export interface IAdresse {
    numeroChronoLieuActivite: number;
    numeroChronoProfessionnel: number;
    codeTypeAdresse: string;
  }

  export interface IMedia {
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
