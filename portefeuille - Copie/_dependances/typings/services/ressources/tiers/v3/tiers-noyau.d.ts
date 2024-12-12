declare module Myway.Ressource.Tiers.TiersNayau {
  export interface IIdentificationTiers {
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;
    /**
     * Identifiant personne
     */
    identifiantPersonne: number;
    /**
     * Numéro chrono professionnel
     */
    numeroChrono: number;
    /**
     * Numéro chrono lieu activité
     */
    numeroLieuActivite: number;
  }

  export interface ICaracteristiqueTiers {
    /**
     * Code personnalité juridique
     * 1 -> personne physique : PP
     * 2 -> Personne morale : PM
     * 3 -> personne assimilée morale : EI
     */
    codePersonnaliteJuridique: string;
    /**
     * Libellé Code personnalité juridique
     */
    libellePersonnaliteJuridique: string;
    /**
     * Code état personne/entité titulaire
     */
    codeEtatPersonne: string;
    /**
     * Code type relation personne
     */
    codeTypePersonne: string;
    /**
     * Date première entrée en relation
     * Type date au format yyyy-MM-dd
     */
    dateEntreeRelation: string;
    /**
     * Code Guichet Risques BDF
     */
    codeGuichetRisque: string;
    /**
     * Code classe pers non éligible FGDR
     */
    eligibiliteTiers: string;
    /**
     * Indic droit au compte
     */
    indicateurDroitCompte: string;
    identifiantClientBad: string;
  }

  export interface IInformationParticulier {
    /**
     * Code retour Echanges
     */
    codeRetour: number;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;
    /**
     * Identifiant personne
     */
    identifiantPersonne: number;
    /**
     * Code Civilité Particulier
     */
    codeCivilite: string;
    /**
     * Libellé Code Civilité
     */
    libelleCivilite: string;
    /**
     * Code Sexe Particulier
     */
    sexe: string;
    /**
     * Libellé Code Sexe Particulier
     */
    libelleSexe: string;
    /**
     * Nom famille Personne Physique
     */
    nomFamillePersonnePhysique: string;
    /**
     * nom marital
     */
    nomMarital: string;
    /**
     * Désignation courte particulier
     */
    designationCourte: string;
    /**
     * Premier prénom état civil Personne
     */
    prenom: string;
    /**
     * Date Naissance Personne Physique
     * Type date au format yyyy-MM-dd
     */
    dateNaissance: string;
    /**
     * Code INSEE localité naissance
     */
    codeCommuneNaissance: string;
    /**
     * Libellé commune naissance
     */
    libelleCommuneNaissance: string;
    /**
     * Code département naissance
     */
    codeDepartementNaissance: string;
    /**
     * libellé Département naissance
     */
    libelleDepartementNaissance: string;
    /**
     * Code pays nationalité INSEE
     */
    codeInseePaysNationalite: string;
    /**
     * Libellé nationalité pays
     */
    libelleNationalite: string;
    /**
     * Date décès Personne Physique
     * Type date au format yyyy-MM-dd
     */
    dateDeces: string;
    /**
     * Code appartenance réseau
     */
    codeAppartenanceReseau: string;
    /**
     * Libellé appartenance réseau
     */
    libelleAppartenanceReseau: string;
    /**
     * Indic sociétaire
     */
    indicSocietaire: string;
    /**
     * Code type capacité juridique
     */
    codeCapaciteJuridique: string;
    /**
     * Libellé type capacité juridique
     */
    libelleCapaciteJuridique: string;
    /**
     * Code pays naissance INSEE
     */
    codePaysNaissance: string;
    /**
     * Libellé INSEE Pays de Naissance
     */
    libellePaysNaissance: string;
    /**
     * Code INSEE PAYS double nationalité
     */
    codeInseePaysDoubleNationalite: string;
    /**
     * Libellé double nationalité du pays
     */
    libelleDoubleNationalitePays: string;
    /**
     * Code type situation de famille
     */
    situationFamille: string;
    /**
     * Libellé situation famille
     */
    libelleCodeSituationFamiliale: string;
    /**
     * Date effet situation famille
     * Type date au format yyyy-MM-dd
     */
    dateEffetSituationFamille: string;
    /**
     * Code type régime matrimonial
     */
    codeRegimeMatrimonial: string;
    /**
     * Libellé du régime matrimonial
     */
    libelleRegimeMatrimonial: string;
    /**
     * Nombre enfants à charge
     */
    nombreEnfantACharge: number;
    /**
     * Code catégorie socio-professionnelle
     */
    codeCategorieSocioProf: string;
    /**
     * libellé CSP
     */
    libelleCsp: string;
    /**
     * Date effet CSP
     * Type date au format yyyy-MM-dd
     */
    dateEffetCsp: string;
    /**
     * Nom employeur du particulier
     */
    nomEmployeur: string;
    /**
     * Numéro SIREN employeur principal
     */
    numeroSirenEmployeurPrincipal: string;
    /**
     * Date embauche par employeur actuel
     * Type date au format yyyy-MM-dd
     */
    dateEmbaucheParEmployeurActuel: string;
    /**
     * Code type contrat travail
     */
    codeTypeContratTravail: string;
    /**
     * Libellé Code type contrat travail
     */
    libelleCodeTypeContratTravail: string;
    /**
     * Date fin contrat
     * Type date au format yyyy-MM-dd
     */
    dateFinContrat: string;
    /**
     * Code famille NAF INSEE
     */
    codeFamilleNAFINSEE: string;
    /**
     * Code NAF 3 dernier caractere
     */
    troisDerniersCaracteresNAF: string;
    /**
     * Libelle Code NAF rev2 INSEE
     */
    libelleEtablissement: string;
    /**
     * Code résident
     */
    codeResident: string;
    /**
     * Idt relation économique (ménage)
     */
    identiteRelationEcoMenage: number;
    /**
     * Référence externe EDS
     */
    referenceExterneEds: number;
    /**
     * Type clause matrimoniale
     */
    typeClauseMatrimoniale: string;
    /**
     * Code donation entre époux
     */
    codeDonationEntreEpoux: string;
    /**
     * Indicateur auto entrepreneur
     */
    indicateurAutoEntrepreneur: string;
    /**
     * Autres prénoms état civil
     */
    autresPrenomsEtatCivil: string;
    /**
     * Indic domiciliation revenus
     */
    indicDomiciliationRevenus: string;
    /**
     * Indic enreg hors présence client
     */
    indicEnregHorsPresenceClient: string;
    /**
     * Libellé profession particulier
     */
    libelleProfessionParticulier: string;
    /**
     * Code type secteur emploi
     */
    codeTypeSecteurEmploi: string;
    /**
     * Indicateur Activité Professionnelle
     */
    indicateurActiviteProfessionnel: string;
    /**
     * Indic envoi courrier
     */
    indicateurEnvoiCourrier: string;
    /**
     * Code pièce justif professionnelle
     */
    codePieceJustificative: string;
    /**
     * date d'obtention piece justificative
     * Type date au format yyyy-MM-dd
     */
    dateObtentionPieceJustificative: string;
    /**
     * Référence pièce justificative
     */
    referencePieceJustificative: string;
    /**
     * No identification fiscale NIF NNI
     */
    noIdentificationFiscaleNifNni: string;
    /**
     * Code type NIF NNI
     */
    codeTypeNifNni: string;
    /**
     * Date naturalisation
     * Type date au format yyyy-MM-dd
     */
    dateNaturalisation: string;
    /**
     * Date naissance conjoint
     * Type date au format yyyy-MM-dd
     */
    dateNaissanceConjoint: string;
    /**
     * Indic décès présumé
     */
    indicDecesPresume: string;
    /**
     * Date décès présumé
     * Type date au format yyyy-MM-dd
     */
    dateDecesPresume: string;
    /**
     * Idt élément structure domiciliation
     */
    identifiantEDSDomiciliation: number;
    /**
     * Code classe pers non éligible FGDR
     */
    eligibiliteTiers: string;
    /**
     * Indic droit au compte
     */
    indicDroitCompte: string;
    /**
     * Numero SIREN auto entrepreneur
     */
    numeroSirenAutoEntrepreneur: string;
    /**
     * Date effet option résidence
     * Type date au format yyyy-MM-dd
     */
    dateEffetOptionResidence: string;
    /**
     * Code famille catégorie juridique
     */
    codeCategorieJuridique: string;
    /**
     * Code catégorie juridique 2 dern car
     */
    codeCategoJuridi2DerCaracteres: string;
    /**
     * libelle statut FATCA
     */
    libelleStatutFatca: string;
    /**
     * Date attribution statut FATCA
     * Type date au format yyyy-MM-dd
     */
    dateAttributionStatutFatca: string;
    /**
     * Identifiant Client
     */
    identifiantBad: string;
  }

  export interface IInformationProfessionnel {
    /**
     * Code retour Echanges
     */
    codeRetour: number;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtab: string;
    /**
     * Identifiant personne
     */
    numeroPersonne: number;
    /**
     * Numéro chrono professionnel
     */
    numeroChrono: number;
    /**
     * Numéro SIREN entreprise
     */
    numeroSiren: string;
    /**
     * Code type NIF NNI
     */
    codeTypeNifNni: string;
    /**
     * Libellé code type NIF NNI
     */
    libelleCodeTypeNifNni: string;
    /**
     * No identification fiscale NIF NNI
     */
    noIdentificationFiscaleNifNni: string;
    /**
     * Nom commercial professionnel
     */
    nomCommercial: string;
    /**
     * Raison sociale
     */
    raisonSocial: string;
    /**
     * Code situation jurid professionnel
     */
    codeSituationJuridique: string;
    /**
     * libellé situation juridique prof
     */
    libelleSituationJuridiqueProf: string;
    /**
     * Code catégorie juridique INSEE
     */
    codeINSEE: string;
    /**
     * Libellé catégorie juridique INSEE
     */
    libelleCategorieJuridiqueInsee: string;
    /**
     * Date création juridique prof
     * Type date au format yyyy-MM-dd
     */
    dateCreationJuridique: string;
    /**
     * Code NAF INSEE
     */
    codeNafInsee: string;
    /**
     * Libelle Code NAF rev2 INSEE
     */
    libelleEtablissement: string;
    /**
     * Date clôture juridique professionnel
     * Type date au format yyyy-MM-dd
     */
    dateClotureJuridiqueProf: string;
    /**
     * Code régime fiscal du professionnel
     */
    codeRegimeFiscal: string;
    /**
     * libellé code régime fiscal
     */
    libelleCodeRegimeFiscal: string;
    /**
     * Mt Chiffre affaires social
     */
    montantChiffreAffaires: number;
    /**
     * Année CA ou budget
     */
    anneeChiffreAffaires: number;
    /**
     * Montant capital social en euro
     */
    montantCapitalSocial: number;
    /**
     * Date arrêté bilan du professionnel
     */
    dateArreteComptable: number;
    /**
     * Identifiant Elément structure
     */
    idEdsInterne: number;
    /**
     * Activité économique réelle prof
     */
    activiteEconomiqueReelleProf: string;
    /**
     * Code famille APE INSEE
     */
    codeFamilleApeInsee: string;
    /**
     * Deux derniers caractères APE
     */
    deuxDernierCaractereApe: string;
    /**
     * Code indicateur entreprise étrangère
     */
    codeIndicateurEntrepEtrangere: string;
    /**
     * Code devise ISO 4217 alpha-3
     */
    codeDevise: string;
    /**
     * Code appartenance réseau
     */
    codeAppartenanceReseau: string;
    /**
     * Code agent économique BAFI
     */
    codeAgentEconomique: string;
    /**
     * Code Type Commerce Organisé
     */
    codeTypeCommerceOrganise: string;
    /**
     * Durée de vie personne morale
     */
    dureeViePersonneMorale: number;
    /**
     * Code pièce justif professionnelle
     */
    codePieceJustificative: string;
    /**
     * Référence pièce justificative prof
     */
    referencePieceJustificativeProf: string;
    /**
     * Code cotation Professionnel
     */
    codeCotation: string;
    /**
     * Référence externe EDS
     */
    edsDomiciliation: number;
    /**
     * Sigle
     */
    sigle: string;
    /**
     * Type de personne
     */
    codeTypeTiers: string;
    /**
     * Effectif salarié professionnel
     */
    effectif: number;
    /**
     * Code banque entité pilote
     */
    codeBanqueEntitePilote: string;
    /**
     * Code agent économique théorique
     */
    codeAgentEconomiqueTheorique: string;
    /**
     * Code mode attribution agent éco
     */
    codeModeAttributionAgentEco: string;
    /**
     * Indicateur EIRL
     */
    indicateurEirl: string;
    /**
     * Date début option EIRL
     * Type date au format yyyy-MM-dd
     */
    dateDebutOptionEirl: string;
    /**
     * Date fin option EIRL
     * Type date au format yyyy-MM-dd
     */
    dateFinOptionEirl: string;
    /**
     * Indic option opposabilité EIRL
     */
    indicOptionOpposabiliteEirl: string;
    /**
     * Indic Pers morale organisme public
     */
    indicPersMoraleOrganismePublic: string;
    /**
     * Indic Pers morale marché règlementé
     */
    indicPersMoraleMarcheReglemente: string;
    /**
     * Indic édition benefr effectifs
     */
    indicEditionBenefrEffectifs: string;
    /**
     * Identifiant LEI
     */
    identifiantLei: string;
    /**
     * Code EMIR
     */
    codeEmir: string;
    /**
     * Indic délégation Client déclaration
     */
    indicDelegationClientDeclarat: string;
    identifiantEDSDomiciliation: number;
  }

  export interface IInformationEtablissement {
    /**
     * Code retour Echanges
     */
    codeRetour: number;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtab: string;
    /**
     * Identifiant personne
     */
    numeroPersonne: number;
    /**
     * Numéro chrono professionnel
     */
    numeroChrono: number;
    /**
     * Numéro chrono lieu activité
     */
    numeroLieuActivite: number;
    /**
     * Désignation courte lieu activité
     */
    designationEntiteTitulaire: string;
    /**
     * Code statut lieu activité
     */
    codeStatutLieuActivite: string;
    /**
     * Numéro telex lieu activité
     */
    numTelex: string;
    /**
     * Numéro télécopieur lieu activité
     */
    numTelecopieur: string;
    /**
     * Effectif du lieu d'activité
     */
    effectifDuLieuActivite: number;
    /**
     * Enseigne commerciale lieu d'activité
     */
    enseigneCommercialeLieuActivit: string;
    /**
     * Date début exploit lieu activité
     * Type date au format yyyy-MM-dd
     */
    dateDebut: string;
    /**
     * Date fin exploitation lieu activité
     * Type date au format yyyy-MM-dd
     */
    dateFin: string;
    /**
     * Activité économique réelle lieu
     */
    activiteEconomiqueReelleLieu: string;
    /**
     * Date d' enregistrement lieu activité
     * Type date au format yyyy-MM-dd
     */
    dateEnregistrementLieuActivite: string;
    /**
     * Date dernière mise à jour du lieu
     * Type date au format yyyy-MM-dd
     */
    dateDerniereMiseAJourLieu: string;
    /**
     * Code rafraîchissement lieu activité
     */
    codeRafraichLieuActivite: string;
    /**
     * Date dernière vérif lieu activité
     * Type date au format yyyy-MM-dd
     */
    dateDerniereVerifLieuActivite: string;
    /**
     * Désignation longue lieu activité
     */
    designationLongueLieuActivite: string;
    /**
     * Numéro SIREN professionnel
     */
    numeroSIREN: string;
    /**
     * No complément SIRET établissement
     */
    complementSIRET: string;
    /**
     * Code famille APE INSEE
     */
    codeFamilleApeInsee: string;
    /**
     * Deux derniers caractères APE
     */
    deuxDernierCaractereApe: string;
    /**
     * Code résident
     */
    codeResident: string;
    /**
     * Date dern traçage APE du prof
     * Type date au format yyyy-MM-dd
     */
    dateDernTracageApeProf: string;
    /**
     * Libellé traçage codification APE
     */
    libelleTracageCodificationApe: string;
    /**
     * Type traçage codification APE
     */
    typeTracageCodificationApe: string;
    /**
     * Code famille NAF INSEE
     */
    codeFamilleNAFINSEE: string;
    /**
     * Code NAF 3 dernier caractere
     */
    troisDerniersCaracteresNAF: string;
    /**
     * Libelle Code NAF rev2 INSEE
     */
    libelleEtablissement: string;
  }

  export interface IAdresse {
    /**
     * Code retour Echanges
     */
    codeRetour: number;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtab: string;
    /**
     * Identifiant personne
     */
    numeroPersonne: number;
    /**
     * Numéro chrono professionnel
     */
    numeroChrono: number;
    /**
     * Numéro chrono lieu activité
     */
    numeroLieuActivite: number;
    /**
     * Identifiant adresse
     */
    identifiant: number;
    /**
     * Code type adresse
     */
    codeType: string;
    /**
     * Libellé type adresse
     */
    libelleType: string;
    /**
     * Ligne 2 adresse AFNOR
     */
    ligne2AFNOR: string;
    /**
     * Ligne 3 adresse AFNOR
     */
    ligne3AFNOR: string;
    /**
     * Ligne 4 adresse AFNOR
     */
    ligne4AFNOR: string;
    /**
     * Ligne 5 adresse AFNOR
     */
    ligne5AFNOR: string;
    /**
     * Ligne 6 adresse AFNOR
     */
    ligne6AFNOR: string;
    /**
     * Code postal PTT
     */
    codePostalPTT: string;
    /**
     * Code pays INSEE
     */
    codePays: string;
    /**
     * Code Pays norme ISO 3166-1 alpha-2
     */
    codeISOPays: string;
    /**
     * Libellé pays ISO3166-1
     */
    libelleISOPays: string;
    /**
     * Code INSEE localité
     */
    codeInseelocalite: string;
    /**
     * Libellé commune
     */
    libelleInseeLocalite: string;
    /**
     * Code type retour PTT
     */
    codeTypeRetourPtt: string;
    /**
     * libellé code type de retour PTT
     */
    libelleCodeTypeRetourPtt: string;
    /**
     * Indic envoi courrier
     */
    indicateurEnvoiCourrier: string;
    /**
     * Ind. dif. adresse fiscale postale
     */
    inddifadresseFiscalePostale: string;
    /**
     * Numéro voie PTT ville plus 50000 hab
     */
    numeroVoiePTT: number;
    /**
     * Code quartier
     */
    codeQuartier: string;
    /**
     * Numéro tournée facteur
     */
    numeroTourneeFacteur: number;
    /**
     * Numéro téléphone adresse
     */
    numeroTelephone: string;
    /**
     * Code validité adresse UNISERV
     */
    codeValiditeAdresseUniserv: string;
    /**
     * Code existence liste rouge
     */
    codeExistenceListeRouge: string;
    /**
     * Numéro fax
     */
    numeroFAX: string;
    /**
     * Code accès au Minitel
     */
    codeAccesMinitel: string;
    /**
     * Indicateur détention téléphone
     */
    indicateurDetentionTelephone: string;
    /**
     * Commentaire téléphone
     */
    commentaireTelephone: string;
    /**
     * Code postal France & Etranger
     */
    codePostalFranceEtranger: string;
    /**
     * Libellé commune
     */
    libelleCommune: string;
    /**
     * Type personne ou lieu Adresse
     */
    codeTypeLieu: string;
    /**
     * Date dernier retour PTT adresse
     * Type date au format yyyy-MM-dd
     */
    dateDernierRetourPttAdresse: string;
    /**
     * Nombre retour PTT
     */
    nombreRetourPtt: number;
  }

  export interface IMedia {
    /**
     * Code retour Echanges
     */
    codeRetour: number;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtab: string;
    /**
     * Identifiant personne
     */
    numeroPersonne: number;
    /**
     * Type moyen de contact
     */
    typeMoyenContact: string;
    /**
     * Adresse moyen de contact
     */
    adresseMoyenContact: string;
    /**
     * Code indicatif international tel
     */
    codeIndicatifInternationalTel: string;
    /**
     * Numéro téléphone adresse
     */
    numeroTelephone: string;
    /**
     * Code Opt'in
     */
    codeOptIn: string;
    /**
     * Téléphone/E-Mail préféré
     */
    telephoneEmailPrefere: string;
    /**
     * Telephone sécurisé
     */
    telephoneEmailSecurise: string;
    /**
     * Indic envoi média PRO OPT'OUT
     */
    indicEnvoiMediaProOptOut: string;
    /**
     * Indic envoi SMS ou fax
     */
    indicEnvoiSmsFax: string;
    codeTypeMedia: string;
    libelleTypeMedia: string;
    codeTypeUsageMedia: string;
    libelleTypeUsageMedia: string;
  }

  export interface IInformationTiersLie {
    /**
     * Code type lien inter-personnes
     */
    codeTypeLienInterPersonne: string;
    /**
     * Code banque Etablissement GCE
     */
    codeEtablissement: string;
    /**
     * Deuxième personne en relation
     */
    identifiantPersonneLie: number;
    /**
     * Code sens lien inter-personnes
     */
    codeSensLienInterPersonne: string;
    /**
     * Personne Rattachée Relation Economiq
     */
    personneRattacheeRelation: string;
    identifiantPersonne: number;
    designationRelationEconomique: string;
    codeFamilleLienInterPersonne: string;
    pourcentageCapitalistique: number;
    codeQualifLienInterPersonne: string;
    dateDebutEffetLienInterPersonne: string;
    dateFinEffetLienInterPersonne: string;
    refPieceJustificatifLien: string;
  }

  export interface ITiersNoyau {
    identificationTiers: IIdentificationTiers;
    caracteristiqueTiers: ICaracteristiqueTiers;
    informationParticulier: IInformationParticulier;
    informationProfessionnel: Array<IInformationProfessionnel>;
    informationEtablissement: Array<IInformationEtablissement>;
    adresse: Array<IAdresse>;
    media: Array<IMedia>;
    informationTiersLie: Array<IInformationTiersLie>;
    informationsEAI: IInformationsEAI;
    immatriculationProfessionnel: Array<IImmatriculationProfessionnel>;
  }

  export interface IInformationsEAI {
    codeModeSignatureEAI: string;
    indicateurOuvertureCompte: string;
    codeStatutEAI: string;
    libelleCodeStatutEAI: string;
    libelleCodeModeSignatureEAI: string;
  }

  export interface IImmatriculationProfessionnel {
    /**
     * Identifiant personne
     */
    numeroPersonne: number;
    /**
     * Numéro chrono professionnel
     */
    numeroChrono: number;
    /**
     * Code type registre
     */
    codeTypeRegistre: string;
    /**
     * Numéro immatriculation registre
     */
    numeroImmatriculationRegistre: string;
    /**
     * Lieu inscription registre
     */
    lieuImmatriculationRegistre: string;
    /**
     * Date immatriculation professionnel
     * Type date au format yyyy-MM-dd
     */
    dateImmatriculationRegistre: string;
  }

}
