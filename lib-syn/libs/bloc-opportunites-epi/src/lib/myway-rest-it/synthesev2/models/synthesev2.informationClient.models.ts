/* tslint:disable:max-line-length */
export namespace RessourceSyntheseV2InformationClient {
  export interface IAdresse {
    /**
     * Code du type de l'adresse :
     * 1 = adresse légale/principale
     * 4 = adresse de communication
     * 6 = adresse spécial communication
     */
    codeTypeAdresse: string;
    /**
     * Libellé du type de l'adresse en fonction du code :
     * 1 = adresse légale/principale
     * 4 = adresse de communication
     * 6 = adresse spécial communication
     */
    libelleTypeAdresse: string;
    ligne2: string;
    ligne3: string;
    ligne4: string;
    ligne5: string;
    ligne6: string;
    /**
     * Code retour information PND :
     * 1 = NPAI (n'habite pas à l'adresse indiquée)
     * 2 = Refusé
     * 3 = Homonyme
     * 4 = Non réclamé
     * 5 = Adresse incomplète localité voie numéro
     * 6 = Voie inconnue
     * 7 = Divers
     * 8 = Décédé
     */
    codeRetourPTT: string;
  }

  export interface ITelephone {
    /**
     * Code du type de média :
     * 1 = Fixe
     * 6 = Mobile
     */
    codeSupportTelephone: string;
    /**
     * Code nature du média :
     * 10 = Perso
     * 12 = Pro
     * 13 = Perso (Portable)
     * 14 = Pro (Portable)
     */
    codeNatureTelephone: string;
    /**
     * Libellé nature du média en fonction du code :
     * 10 = Perso
     * 12 = Pro
     * 13 = Perso (Portable)
     * 14 = Pro (Portable)
     */
    libelleNatureTelephone: string;
    /**
     * Code de l'indicatif international pour les numéros étrangés
     */
    indicatifInternational: string;
    /**
     * Numéro de téléphone
     */
    numeroTelephone: string;
    /**
     * Indique si il s'agit du numéro de téléphone de préférence
     */
    indicateurNumeroPrefere: boolean;
    /**
     * indique à qui sont les coordonnées : 1 = le client, 2 = le Représentant Légal
     */
    indicateurTypeClient: string;
    numeroClient: number;
  }

  export interface IEMail {
    /**
     * Code du type de média :
     * 2 = E-Mail
     */
    codeSupportEMail: string;
    /**
     * Code nature du média :
     * 10 = Perso
     * 12 = Pro
     * 99 = MSI
     */
    codeNatureEMail: string;
    /**
     * Libellé nature du média en fonction du code :
     * Code nature du média :
     * 10 = Perso
     * 12 = Pro
     * 99 = MSI
     */
    libelleNatureEMail: string;
    /**
     * Adresse e-mail
     */
    adresseEMail: string;
    /**
     * Indique si il s'agit de l'adresse e-mail de préférence
     */
    indicateurAdressePreferee: boolean;
    /**
     * indique à qui sont les coordonnées : 1 = le client, 2 = le Représentant Légal
     */
    indicateurTypeClient: string;
    /**
     * Numéro du client
     */
    numeroClient: number;
  }

  export interface ICoordonnees {
    adresses: Array<IAdresse>;
    telephones: Array<ITelephone>;
    eMails: Array<IEMail>;
    /**
     * Identifiant du type de donnée correspondant à la fraicheur :
     * R02 = Coordonnées
     */
    identifiantTypeFraicheur: string;
    /**
     * Date de préemption des coordonnées
     * Type date au format yyyy-MM-dd
     */
    dateFraicheur: string;
    /**
     * Code état de la fraicheur des données :
     * 0 = valide
     * 1 = à verifier
     * 2 = périmée
     */
    codeEtatFraicheur: string;
    /**
     * Coordonnées du représentant légal
     */
    coordonneesRepresentantLegal: Array<ICoordonneesRepresentantLegal>;
    /**
     * Indique si le client a souscrit l'Opt'In sur ses téléphones
     */
    indicateurOptInTelephone: boolean;
    /**
     * Indique si le client a souscrit l'Opt'In sur ses Mails
     */
    indicateurOptinMail: boolean;
  }

  export interface IInformationClient {
    coordonnees: ICoordonnees;
    titreSousTitre: ITitreSousTitre;
    entretien: IEntretien;
    opportunite: IOpportunite;
    alerte: IAlerte;
    indicateur: IIndicateur;
  }

  export interface ITitreSousTitre {
    /**
     * Désignation courte du client particulier :
     * = civilité + nom + prénom
     */
    designationCourteClient: string;
    /**
     * Date de naissance du client
     * Type date au format yyyy-MM-dd
     */
    dateDeNaissance: string;
    /**
     * Code définissant le type de situation familiale
     */
    codeTypeSituationFamille: string;
    /**
     * Libellé de la situation familiale
     */
    libelleSituationFamille: string;
    /**
     * Code catégorie socio-professionnel
     */
    codeCategorieSocioProfessionnel: string;
    /**
     * Libellé profession du client
     */
    libelleProfession: string;
    /**
     * Libellé de la catégorie socio-professionnelle
     */
    libelleCSP: string;
    /**
     * Identifiant de l'agence de domiciliation
     */
    identifiantEDSDomiciliation: number;
    /**
     * Code type de l'agence de domiciliation
     */
    typeEDSDomiciliation: string;
    /**
     * Libellé de l'agence de domiciliation
     */
    libelleEDSDomiciliation: string;
    /**
     * identifiant de l'agent qui suit le client
     */
    identifiantEDSSuiviPar: number;
    /**
     * Code type de l'agent qui suit le client
     */
    typeEDSSuiviPar: string;
    /**
     * Libellé de l'agent qui suit le client
     */
    libelleEDSSuiviPar: string;
    /**
     * Date d'entrée en relation du client
     * Type date au format yyyy-MM-dd
     */
    dateEntreeEnRelation: string;
    /**
     * Code type de segmentation marché du client
     */
    typeSegmentationMarche: string;
    /**
     * Code de segmentation marché du client
     */
    codeSegmentationMarche: string;
    /**
     * Libellé de la segmentation marché du client
     */
    libelleSegmentationMarche: string;
    /**
     * Code type de segmentation relationnelle du client
     */
    typeSegmentationRelation: string;
    /**
     * Date de calcul de la segmentation relation
     * Type date au format yyyy-MM-dd
     */
    dateCalculSegmentationRelation: string;
    /**
     * Code de segmentation relationnelle du client
     */
    codeSegmentationRelation: string;
    /**
     * Libellé de la segmentation relationnelle du client
     */
    libelleSegmentationRelation: string;
    /**
     * Code de la segmentation activation du client
     */
    codeSegmentationActive: string;
    /**
     * Libellé de la segmentation active
     */
    libelleSegmentationActive: string;
    /**
     * Code du type de l'univers de segmentation active du client
     */
    typeUnivers: string;
    /**
     * Code de l'univers de segmentation active du client
     */
    codeUnivers: string;
    /**
     * Date de calcul de la segmentation active du client
     * Type date au format yyyy-MM-dd
     */
    dateCalculSegmentationActive: string;
    /**
     * Code type de suivi GP du client
     */
    codeSuiviGP: string;
    /**
     * Libellé du suivi GP du client
     */
    libelleSuiviGP: string;
    /**
     * Numéro de l'agent qui "suit GP" le client
     */
    identifiantEDSSuiviGP: number;
    /**
     * Code du type d'agent qui "suit GP" le client
     */
    typeEDSSuiviGP: string;
    /**
     * Libellé de l'agent qui "suit GP" le client
     */
    libelleEDSSuiviGP: string;
    /**
     * libellé descriptif du type de suivi GP
     */
    descriptionSuiviGP: string;
    /**
     * Date de début de validité du statut suivi GP
     * Type date au format yyyy-MM-dd
     */
    dateDebutSuiviGP: string;
    listeDetailMarche: Array<IDetailMarche>;
    detailSuiviPar: IDetailSuiviPar;
    listeDetailSegmentationActive: Array<IDetailSegmentationActive>;
    listeDetailSegmentationPro: Array<IDetailSegmentationProfessionnelle>;
    listeDetailSegmentationRelation: Array<IDetailSegmentationRelationnelle>;
    /**
     * Code du repérage pro du client
     */
    codeReperePro: string;
    /**
     * Libellé du repérage pro du client
     */
    libelleReperePro: string;
    /**
     * Ville de naissance du client
     */
    villeNaissance: string;
    /**
     * Pays de naissance du client
     */
    paysNaissance: string;
    /**
     * Code INSEE de la ville de naissance
     */
    codeInseeNaissance: string;
    /**
     * Date de décès
     * Type date au format yyyy-MM-dd
     */
    dateDeces: string;
    /**
     * Nationalité du client
     */
    nationalite: string;
    /**
     * Référence externe EDS Suivi par
     */
    referenceExterneEDSSuiviPar: number;
  }

  export interface IDetailMarche {
    /**
     * code de l'établissement de la personne
     */
    codeEtablissement: string;
    /**
     * Numéro de la personne
     */
    numeroClient: number;
    /**
     * Code type de la segmentation marché de la personne
     */
    codeTypeSegmentationMarche: string;
    /**
     * Code de la segmentation marché de la personne
     */
    codeSegmentationMarche: string;
    /**
     * Libellé de la segmentation marché du client
     */
    libelleSegmentationMarche: string;
    /**
     * Libellé court de la segmentation marché du client
     */
    libelleCourtSegmentationMarche: string;
    /**
     * Date de calcul de la segmentation marché
     * Type date au format yyyy-MM-dd
     */
    dateCalculSegmentationMarche: string;
    /**
     * Indique si la segmentation marché a été forcée au TP
     */
    indicateurForcageSegmentation: string;
    /**
     * Code de la segmentation forcée
     */
    codeSegmentationForcee: string;
    /**
     * Libellé de la segmentation forcée
     */
    libelleSegmentationForcee: string;
    /**
     * Libellé court de la segmentation forcée
     */
    libelleCourtSegmentationForcee: string;
    /**
     * Date de forçage de la segmentation marché
     * Type date au format yyyy-MM-dd
     */
    dateForcageSegmentation: string;
    /**
     * Libellé lié à l'indicateur forçage segmentation :
     *
     * ' ' : Non forcé
     * '1' : Forcé le
     * '2' : Propagé le
     */
    libelleForcageSegmentation: string;
  }

  export interface IDetailSuiviPar {
    /**
     * Ligne 1 du détail de suivi par
     */
    ligne1: string;
    /**
     * Ligne 2 du détail de suivi par
     */
    ligne2: string;
    /**
     * Ligne 3 du détail de suivi par
     */
    ligne3: string;
    /**
     * Ligne 4 du détail de suivi par
     */
    ligne4: string;
  }

  export interface IDetailSegmentationActive {
    /**
     * Numéro du client
     */
    numeroClient: number;
    /**
     * Désignation ou raison sociale
     */
    libelleClient: string;
    /**
     * Code type de segmentation à titre privé
     */
    typeSegmentationParticulier: string;
    /**
     * Code segmentation à titre privé
     */
    codeSegmentationParticulier: string;
    /**
     * Code de l'univers de la segmentation active
     */
    codeUniversSegmentation: string;
    /**
     * Date de calcul de la segmentation
     * Type date au format yyyy-MM-dd
     */
    dateCalculSegmentation: string;
    /**
     * Libellé de la segmentation
     */
    libelleSegmentation: string;
    /**
     * 245 premiers caractères de la description de la segmentation
     */
    descriptionSegmentation1: string;
    /**
     * 245 derniers caractères de la description de la segmentation
     */
    descriptionSegmentation2: string;
  }

  export interface IDetailSegmentationProfessionnelle {
    /**
     * Numéro du client
     */
    numeroClient: number;
    /**
     * Désignation ou raison sociale
     */
    libelleClient: string;
    /**
     * Code type de segmentation à titre professionnel
     */
    typeSegmentationProfessionnelle: string;
    /**
     * Code segmentation à titre professionnel
     */
    codeSegmentationProfessionnelle: string;
    /**
     * Date de calcul de la segmentation
     * Type date au format yyyy-MM-dd
     */
    dateCalculSegmentation: string;
    /**
     * Libellé de la segmentation
     */
    libelleSegmentation: string;
    /**
     * 245 premiers caractères de la description de la segmentation
     */
    descriptionSegmentation1: string;
    /**
     * 245 derniers caractères de la description de la segmentation
     */
    descriptionSegmentation2: string;
  }

  export interface IDetailSegmentationRelationnelle {
    /**
     * Numéro du client
     */
    numeroClient: number;
    /**
     * Désignation ou raison sociale
     */
    libelleClient: string;
    /**
     * Code type de segmentation à titre privé
     */
    typeSegmentationParticulier: string;
    /**
     * Code segmentation à titre privé
     */
    codeSegmentationParticulier: string;
    /**
     * Date de calcul de la segmentation
     * Type date au format yyyy-MM-dd
     */
    dateCalculSegmentation: string;
    /**
     * Libellé de la segmentation
     */
    libelleSegmentation: string;
    /**
     * 245 premiers caractères de la description de la segmentation
     */
    descriptionSegmentation1: string;
    /**
     * 245 derniers caractères de la description de la segmentation
     */
    descriptionSegmentation2: string;
  }

  export interface ISegmentation {
    /**
     * Numéro du client
     */
    numeroClient: number;
    /**
     * Désignation ou raison sociale du client
     */
    libelleClient: string;
    /**
     * Code type de segmentation relationnelle
     */
    typeSegmentationRelation: string;
    /**
     * Code segmentation relationnelle
     */
    codeSegmentationRelation: string;
    /**
     * Code type de segmentation professionnelle
     */
    typeSegmentationProfessionnelle: string;
    /**
     * Code segmentation professionnelle
     */
    codeSegmentationProfessionnelle: string;
    /**
     * Code type de segmentation active
     */
    typeSegmentationActive: string;
    /**
     * Code segmentation active
     */
    codeSegmentationActive: string;
    /**
     * Code de l'univers de la segmentation active
     */
    codeUniversSegmentationActive: string;
    /**
     * Date de calcul de la segmentation
     * Type date au format yyyy-MM-dd
     */
    dateCalculSegmentation: string;
    /**
     * Libellé de la segmentation
     */
    libelleSegmentation: string;
    /**
     * 245 premiers caractères de la description de la segmentation
     */
    descriptionSegmentation1: string;
    /**
     * 245 derniers caractères de la description de la segmentation
     */
    descriptionSegmentation2: string;
  }

  export interface IEntretien {
    /**
     * Détermine le média support du contact avec un client ou un agent .
     * Communication avec la clientèle Valeurs: 'FF' FACE A FACE 'TL' TELEPHONE 'EM' EM ...
     */
    codeMediaEntretien: string;
    /**
     * libelle correspondant au codeMediaEntretien
     */
    libelleMediaEntretien: string;
    /**
     * Détermine le motif de contact avec la clientèle.
     * Motif établi par l'application qui capture ou initie le contact.
     */
    codeMotifEntretien: string;
    /**
     * libelle correspondant au codeMotifEntretien
     */
    libelleMotifEntretien: string;
    /**
     * Détermine le canal du contact d'une personne
     * (client, participant, prospect ...) avec l'Etablissement. Valeurs : 'AG' AGENCE 'CR' CRC
     * 'AU' AUTOMATES 'MB' MON
     * BANQUIER EN LIGNE 'IN' INTER
     */
    codeCanalEntretien: string;
    /**
     * libelle correspondant au codeCanalEntretien
     */
    libelleCanalEntretien: string;
    /**
     * Détermine le sens du contact client/agent :
     * entrant : initié par le client
     * sortant : initié par la C.E.
     * Valeurs :Tous 'E' E - Entrant  / 'S' S - Sortant
     */
    codeSensEntretien: string;
    /**
     * libelle correspondant au codeSensEntretien
     */
    libelleSensEntretien: string;
    /**
     * Date d'enregistrement du contact, fonction de sa nature : pour un Evénement : la date de l'événement
     * la date de relance si contact prévisionnel créé à  l'issue d'une réaction client ou d'un compte-rendu d'entretien
     * Type date au format yyyy-MM-dd
     */
    dateEntretien: string;
    /**
     * code media du prochain entretien
     */
    codeMediaProchainEntretien: string;
    /**
     * libellé qui montre le motif du prochain entretien
     */
    libelleMotifProchainEntretien: string;
    /**
     * Date à laquelle est enregistré un Rendez-Vous entre une personne connue de l'Application Gestion Commerciale et un agent.
     * Type date au format yyyy-MM-dd
     */
    dateProchainEntretien: string;
    /**
     * Indicateur d'existence d'un RDV dans la journée pour le client Valeurs possibles :
     * 'Non' Pas de RDV pour ce client dans la journée
     * 'Oui' Il existe un RDV pour ce client dans la journée
     */
    indicateurExistenceProchainRDV: boolean;
    /**
     * libellé media du prochain entretien
     */
    libelleMediaProchainEntretien: string;
    /**
     * Numéro d'identification d'un contact dans la GERC
     * Notion générique regroupant les motifs de contact
     * avec la clientèle type Evénement ou Campagne :
     * les compte-rendus d'entretien CRE, les compte-rendus
     * d'accroche CRA, les rendez-vous
     */
    identifiantGERC: number;
    /**
     * Code agent externe ayant le rendez-vous
     */
    codeAgentEntretien: number;
    /**
     * Désignation de l'agent ayant le rendez-vous
     */
    designationAgentEntretien: string;
    /**
     * N° du rendez-vous (nécessaire pour le débranchement sur le détail du rendez-vous dans l'application Agenda)
     */
    numeroRendezVous: number;
    /**
     * Idt PF responsable du contact
     */
    identifiantPosteFonctionnelAgen: number;
  }

  export interface IOpportunite {
    /**
     * numéro de personne qui permet de trouver la désignation
     * courte à afficher dans le cas où il n’y a qu’une seule opportunité
     */
    numeroPersonne: number;
    /**
     * designation retrouvé à partir du numeroPersonne dans le cas ou il n'ya qu'une seule opportunité
     */
    designationCourteClient: string;
    /**
     * nombre d'opportunite client .
     * pour un client avec plusieurs opportunités, afficher
     * "x opportunités dont texte de l'opportunité la plus récente" ==> x = nb opportunités souligné pour débrancher
     * vers le Plan d'opportunités PDO
     */
    nombreOpportunitesClient: number;
    /**
     * commentaire de l’opportunité la plus récente
     */
    commentaireOpportunite: string;
    /**
     * nombre de dossier de vente et proposition à finaliser
     */
    nombreDVetPropositionClient: number;
  }

  export interface ICoordonneesRepresentantLegal {
    telephones: Array<ITelephone>;
    eMails: Array<IEMail>;
    /**
     * Désignation courte du client particulier :
     * = civilité + nom + prénom
     * Pour une personne morale ca sera la raison sociale
     */
    designationCourteClient: string;
    /**
     * Type de lien entre le client et son représentant légal
     */
    typeLien: string;
    numeroClient: number;
    codeTypeLien: string;
  }

  export interface IAlerte {
    /**
     * Code état de complétude du dossier DRC
     */
    codeEtatCompletudeDRC: string;
    /**
     * Indique si le DRC est en alerte
     */
    indicateurAlerteDRC: boolean;
    /**
     * Libellé de l'état du DRC en fonction de la complétude et des alertes
     */
    libelleEtatDRC: string;
    /**
     * Indique si le client a une adresse NPAI/PND
     */
    indicateurNPAI: boolean;
    /**
     * Indique la "fragilité" du client :
     * ' '       Hors périmètre clientèle fragile
     * '1'       Client éligible OCF
     * '2'       Client en potentiel surendettement
     */
    codeClientFragile: string;
    /**
     * Libellé du statut client fragile
     */
    libelleClientFragile: string;
    /**
     * Détermine le degré de sensibilité du client:
     * 'S'        Orange
     * 'T'        Rouge
     */
    scoreVigilance: string;
    /**
     * Détermine le degré de sensibilité du client:
     * 'S'        Orange
     * 'T'        Rouge
     */
    libelleScoreVigilance: string;
    /**
     * Détermine si le client possède un compte en déshérence :
     * '0'        Pas de compte en déshérence.
     * '1'        Compte(s) en déshérence à traiter sans urgence
     * '2'        Compte(s) en déshérence à traiter en urgence
     */
    codeEckert: string;
    /**
     * Date de décès du client si il existe un dossier de succession
     * Type date au format yyyy-MM-dd
     */
    dateDeces: string;
    /**
     * Indique si un dossier de succession est actif pour le client
     */
    indicDossierSuccessionActif: boolean;
    /**
     * Indique si le client fait l'objet d'une opposition
     */
    indicateurOpposition: boolean;
    /**
     * Indique si le client est en statut douteux :
     * 'C' = Contentieux
     * 'A' = Recouvrement amiable
     */
    codeContentieux: string;
    /**
     * Montant de contentieux si le client est douteux
     */
    montantContentieux: number;
    /**
     * Indique si le client fait l'objet d'un ATD
     */
    indicateurATD: boolean;
    /**
     * Indique si le client fait l'objet de réclamation
     */
    indicateurReclamation: boolean;
    /**
     * Indique si le client fait l'objet d'une opposition d'interdiction bancaire
     */
    indicateurInterditBancaire: boolean;
    /**
     * R = RPM Actif
     * F = RPM Fiche Suivi
     * A = absence RPM
     */
    codePresenceRPM: string;
    /**
     * R = RPM Actif
     * F = RPM Fiche Suivi
     * A = absence RPM
     */
    libellePresenceRPM: string;
    /**
     * Nombre de rejet MAD/MyMAD
     */
    nombreRejetMAD: number;
    /**
     * Indique si un PEL/LEP est en anomalie
     */
    indicateurReglementaireEpargne: boolean;
    /**
     * Indique si il existe une alerte sur un LEP
     */
    indicateurAlerteLEP: boolean;
    /**
     * Indique si il existe une alerte sur un PEL
     */
    indicateurAlertePEL: boolean;
    listeDetailReglementaireEpargne: Array<IDetailReglementaireEpargne>;
    listeDetailAlerteRPM: Array<IDetailAlerteRPM>;
    listeDetailDRC: Array<IDetailDRC>;
    /**
     * 00           Mineur avec mesure d'aide à la gestion du budget familial (MJAGBF)
     * 03           Mineur en administration légale avec autorisation préalable du juge
     * 04           Mineur en tutelle
     * 05           Mineur en tutelle d'état
     * 06           Mineur avec administration ad hoc
     * 08           Majeur avec sauvegarde de justice
     * 10           Majeur avec sauvegarde de justice avec mandat spécial
     * 11           Majeur en curatelle simple
     * 12           Majeur en curatelle renforcée
     * 14           Majeur avec habilitation familiale
     * 15           Majeur en tutelle
     * 16           Majeur avec mesure d'accompagnement social personnalisé (MASP)
     * 17           Majeur avec mesure d'accompagnement judiciaire (MAJ)
     * 18           Majeur avec mesure d'aide à la gestion du budget familial (MJAGBF)
     * 19           Majeur avec mandat de protection future simple
     * 20           Majeur avec mandat de protection future étendu
     */
    codeCapaciteJuridique: string;
    /**
     * 00           Mineur avec mesure d'aide à la gestion du budget familial (MJAGBF)
     * 03           Mineur en administration légale avec autorisation préalable du juge
     * 04           Mineur en tutelle
     * 05           Mineur en tutelle d'état
     * 06           Mineur avec administration ad hoc
     * 08           Majeur avec sauvegarde de justice
     * 10           Majeur avec sauvegarde de justice avec mandat spécial
     * 11           Majeur en curatelle simple
     * 12           Majeur en curatelle renforcée
     * 14           Majeur avec habilitation familiale
     * 15           Majeur en tutelle
     * 16           Majeur avec mesure d'accompagnement social personnalisé (MASP)
     * 17           Majeur avec mesure d'accompagnement judiciaire (MAJ)
     * 18           Majeur avec mesure d'aide à la gestion du budget familial (MJAGBF)
     * 19           Majeur avec mandat de protection future simple
     * 20           Majeur avec mandat de protection future étendu
     */
    libelleCapaciteJuridique: string;
    /**
     * Indique si le client fait l'objet d'un contentieux
     */
    indicateurContentieux: boolean;
    /**
     * Indique si le client fait l'objet d'un recouvrement amiable
     */
    indicateurRecouvrementAmiable: boolean;
    listeDetailAlerteMAD: Array<IDetailAlerteMAD>;
    /**
     * R = Top CC action immédiate
     * O = Top CC période de revue
     */
    codeTopCC: string;
    /**
     * R = Top CC action immédiate
     * O = Top CC période de revue
     */
    libelleTopCC: string;
    listeOffresInstance: Array<IOffresInstance>;
    /**
     * indique si le client fait l'objet d'alerte externe :
     * ' '  = pas d'alerte
     * '1' = alerte
     */
    indicateurGAE: string;
    /**
     * Permet d'indiquer si la caisse est identifiée comme Bloquée dans le processus RGPD via la SU1P
     * Valeurs :
     * 'O' Bloquée
     * 'N' Non bloquée
     */
    indicateurBlocageRGPD: boolean;
    /**
     * Nombre de demandes et réclamations en cours liés à l'applicatif Salesforce "Liste des demandes et réclamations"
     */
    nombreDemandeReclamation: number;
    /**
     * Code qui détermine le niveau de watch-list
     * locale
     */
    codeNiveauWatchListLocale: string;
    /**
     * Code qui détermine le niveau de watch-list
     * nationale.
     */
    codeNiveauWatchListNationale: string;
    /**
     * Code qui permet de déterminer le niveau de
     * watch-list de la banque référente
     */
    codeNiveauWatchListBqRef: string;
    /**
     * Libellé du code qui détermine le niveau de watch-list
     * locale
     */
    libelleNiveauWatchListLocale: string;
    /**
     * Libellé du code qui détermine le niveau de watch-list
     * nationale.
     */
    libelleNiveauWatchListNationale: string;
    /**
     * Libellé du code qui permet de déterminer le niveau de
     * watch-list de la banque référente
     */
    libelleNiveauWatchListBqRef: string;
    /**
     * Date de création du dossier de succession
     * Type date au format yyyy-MM-dd
     */
    dateCreationDossierSuccession: string;
    /**
     * Date ouverture du dossier de succession
     * Type date au format yyyy-MM-dd
     */
    dateOuvertureDossierSuccession: string;
    /**
     * Libellé pouvant être :
     * Succession : En cours d’ouverture
     * Succession : Ouverte le
     */
    libelleEtatDossierSuccession: string;
    /**
     * Indique si la gélule Succession est cliquable ou non :
     * "O" : Cliquable
     * "N" : Non cliquable
     */
    indicGeluleSuccessionCliquable: boolean;
    /**
     * TopCC - Indique si le personne est une Personne Physique ou une Personne Morale ou Entreprise individuelle. Cette rubrique sert donc à compter le nombre PP,PM ou entreprise individuelle. 'P' Personne Physique 'M' Personne Morale 'E' Entreprise individuelle
     */
    indicateurPersonnePPPMEI: string;
  }

  export interface IIndicateur {
    /**
     * Code état de complétude du dossier DRC
     */
    codeEtatCompletudeDRC: string;
    /**
     * Indique si le DRC est en alerte
     */
    indicateurAlerteDRC: boolean;
    /**
     * Libellé de l'état du DRC en fonction de la complétude et des alertes
     */
    libelleEtatDRC: string;
    /**
     * Indique le niveau de risque que le client est prêt à prendre pour ses investissements :
     * 'R1'       Prudent.
     * 'R2'       Equilibré.
     * 'R3'       Dynamique.
     * 'R4'       Offensif.
     */
    niveauRisqueInvestisseur: string;
    /**
     * Indique le niveau de risque que le client est prêt à prendre pour ses investissements :
     * 'R1'       Prudent.
     * 'R2'       Equilibré.
     * 'R3'       Dynamique.
     * 'R4'       Offensif.
     */
    libelleNiveauRisqueInvestisseur: string;
    /**
     * Date du questionnaire de risque investisseur
     * Type date au format yyyy-MM-dd
     */
    dateMesureRisqueInvestisseur: string;
    /**
     * Note de la compétence financière du client :
     * 'C0'       Refus de réponse au QCF
     * 'C1'       Débutant
     * 'C2'       Initié
     * 'C3'       Confirmé
     * 'C4'       Expert
     * 'P4'       Professionnel Expert
     */
    competenceFinanciere: string;
    /**
     * Date du dernier QCF
     * Type date au format yyyy-MM-dd
     */
    dateDernierQCF: string;
    /**
     * Indique si le client est societaire
     */
    indicateurSocietaire: boolean;
    /**
     * Code du SLE du client sociétaire
     */
    codeSLE: string;
    /**
     * Code du SLE du client sociétaire
     */
    libelleSLE: string;
    /**
     * Date de la dernière réponse du client à l'enquète de satisfaction
     * Type date au format yyyy-MM-dd
     */
    dateDerniereEnquete: string;
    /**
     * '1'        Très satisfait  (smiley :Très souriant et vert foncé)
     * '2'        Assez satisfait (smiley : Souriant et vert clair)
     * '3'        Peu satisfait   (smiley : Neutre et orange)
     * '4'        Pas du tout satisfait (smiley : Triste et rouge)
     * ' '        Pas d'opinion   (smiley : Neutre et gris)
     */
    codeNiveauSatisfaction: string;
    /**
     * '1'        Très satisfait  (smiley :Très souriant et vert foncé)
     * '2'        Assez satisfait (smiley : Souriant et vert clair)
     * '3'        Peu satisfait   (smiley : Neutre et orange)
     * '4'        Pas du tout satisfait (smiley : Triste et rouge)
     * ' '        Pas d'opinion   (smiley : Neutre et gris)
     */
    libelleNiveauSatisfaction: string;
    /**
     * Indique si le client fait partit du réseau :
     * '0'        Hors réseau
     * '1'        Agent de l'établissement
     * '2'        Enfant du personnel de l'établissement
     * '3'        Membre du COS de l'établissement
     * '4'        Conjoint du personnel de l'établissement
     * '5'        Divers (personnel réseau autre établissement)
     * '6'        Personne morale de l'établissement
     * '8'        Retraité de l'établissement
     * '9'        Société locale d'Epargne (SLE)
     * 'A'        Administrateur SLE
     */
    codeAppartenanceReseau: string;
    /**
     * Indique si le client fait partit du réseau :
     * '0'        Hors réseau
     * '1'        Agent de l'établissement
     * '2'        Enfant du personnel de l'établissement
     * '3'        Membre du COS de l'établissement
     * '4'        Conjoint du personnel de l'établissement
     * '5'        Divers (personnel réseau autre établissement)
     * '6'        Personne morale de l'établissement
     * '8'        Retraité de l'établissement
     * '9'        Société locale d'Epargne (SLE)
     * 'A'        Administrateur SLE
     */
    libelleAppartenanceReseau: string;
    /**
     * Détermine le degré de sensibilité du client:
     * 'N'        Vert
     * 'A'        Non scoré
     */
    scoreVigilance: string;
    /**
     * Détermine le degré de sensibilité du client:
     * 'N'        Vert
     * 'A'        Non scoré
     */
    libelleScoreVigilance: string;
    /**
     * Note Bale II calculée
     */
    noteBaleII: string;
    detailNoteBaleII: IDetailNoteBaleII;
    /**
     * Indique le statut Personne Politiquement Exposée
     */
    codeStatutPPE: string;
    /**
     * Indique le statut Personne Politiquement Exposée
     */
    libelleStatutPPE: string;
    listeDetailEnqueteSatisfaction: Array<IDetailEnqueteSatisfaction>;
    /**
     * "M"= Manuelle, "V"= Validée, "O"= En Cours, "N"= Non Validée
     */
    indicateurEngagementDom: string;
    /**
     * "M"= Manuelle, "V"= Validée, "O"= En Cours, "N"= Non Validée
     */
    libelleEngagementDom: string;
    listeDetailEngagementDom: Array<IDetailEngagementDomiciliation>;
    detailCompetenceFinanciere: IDetailCompetenceFinanciere;
    /**
     * V = Top CC actualisé
     * Null = Top CC non calculé
     */
    codeTopCC: string;
    /**
     * V = Top CC actualisé
     * Null = Top CC non calculé
     */
    libelleTopCC: string;
    /**
     * Code état client particulier scoring
     */
    codeEtatClientScoring: string;
    /**
     * Non scoré
     * Scoré OK
     * Scoré KO
     */
    libelleEtatClientScoring: string;
    detailPrecibleCreditConso: IDetailPrecibleCreditConso;
    /**
     * Permet d'indiquer si la caisse est identifiée comme Bloquée dans le processus RGPD via la SU1P
     * Valeurs :
     * 'O' Bloquée
     * 'N' Non bloquée
     */
    indicateurBlocageRGPD: boolean;
    /**
     * Code permettant d'indiquer l'origine des données
     * utilisées pour définir le niveau de satisfaction
     * du client.
     *
     *            Valeurs :
     * ' '        Enquête à chaud QHD (Environnement Quality High Data)
     * '1'        Enquête à froid SAE (Serveur d'Autorisations Emetteur)
     * '2'        Score Estimation
     */
    codeSourceEnquete: string;
    /**
     * Indique l'état du dossier de succession :
     * '0' : Dossier non clos
     * '1' : Dossier clos
     */
    indicDossierSuccessionCloture: boolean;
    /**
     * Libellé pouvant être :
     * Succession : Clôturé le xx/xx/xxx
     */
    libelleEtatDossierSuccession: string;
    /**
     * Date de clôture du dossier de succession
     * Type date au format yyyy-MM-dd
     */
    dateClotureDossierSuccession: string;
    /**
     * Top CC : Indique si le personne est une Personne Physique ou une Personne Morale ou Entreprise individuelle. Cette rubrique sert donc à compter le nombre PP,PM ou entreprise individuelle. 'P' Personne Physique 'M' Personne Morale 'E' Entreprise individuelle
     */
    indicateurPersonnePPPMEI: string;
  }

  export interface IDetailReglementaireEpargne {
    /**
     * Libelle de l'alerte sur PEL/LEP
     */
    libelleAlerte: string;
    /**
     * Montant de l'alerte PEL
     */
    montantAlerte: number;
    /**
     * Numéro du produit en alerte
     */
    numeroProduitAlerte: string;
    /**
     * Code état prochain anniversaire
     */
    codeEtatProchainAnniversaire: string;
    /**
     * Montant à régulariser
     */
    montantARegulariser: number;
    /**
     * Code état potentiel prochain anniversaire
     */
    codeEtatPotentielProchainAnniv: string;
    /**
     * Montant potentiel à régulariser
     */
    montantPotentielARegulariser: number;
    /**
     * Code reference d'un LEP en alerte
     */
    codeReferenceProduit: string;
    /**
     * Coe état proposition avenant
     */
    codeEtatPropositionAvenant: string;
  }

  export interface IDetailAlerteRPM {
    /**
     * Code établissement du produit en RPM
     */
    codeEtablissement: string;
    /**
     * Code guichet du produit en RPM
     */
    codeGuichet: string;
    /**
     * Code produit du produit en RPM
     */
    codeProduit: string;
    /**
     * Numéro du produit en RPM
     */
    numeroCompte: string;
    /**
     * Cléf RIB du produit en RPM
     */
    clefRIB: string;
    /**
     * R = RPM Actif
     * F = RPM Fiche Suivi
     * A = absence RPM
     */
    codePresenceRPM: string;
    /**
     * R = RPM Actif
     * F = RPM Fiche Suivi
     * A = absence RPM
     */
    libellePresenceRPM: string;
    /**
     * Libellé du produit
     */
    libelleProduit: string;
    /**
     * Identifiant du type de produit (IDEGPS)
     */
    identifiantTypeProduit: number;
    /**
     * Numéro entité titulaire
     */
    numeroET: number;
  }

  export interface IDetailEnqueteSatisfaction {
    /**
     * Code établissement
     */
    codeEtablissement: string;
    /**
     * Numéro du client
     */
    numeroClient: number;
    /**
     * '1'        Très satisfait
     * '2'        Assez satisfait
     * '3'        Peu satisfait
     * '4'        Pas du tout satisfait
     * ' '        Pas d'opinion
     */
    codeNiveauSatisfaction: string;
    /**
     * '1'        Très satisfait
     * '2'        Assez satisfait
     * '3'        Peu satisfait
     * '4'        Pas du tout satisfait
     * ' '        Pas d'opinion
     */
    libelleNiveauSatisfaction: string;
    /**
     * Date de réponse du client à l'enquête
     * Type date au format yyyy-MM-dd
     */
    dateReponseEnquete: string;
    /**
     * Code représentant la note donnée par le client pour
     * recommander la banque à son entourage.
     * 00 à 10    valeur autorisée : de 00 - évaluation la plus mauvaise
     *              donnée par le client, à 10
     */
    codeNoteRecommandation: string;
    /**
     * Permet d'indiquer ce qui a motivé l'entretien ou
     * la visite du client donnant lieu à une
     * enquête satisfaction client.
     */
    motifEchange: string;
    /**
     * Commentaire du client
     */
    commentaireLibre: string;
    /**
     * Code permettant d'indiquer l'origine des données
     * utilisées pour définir le niveau de satisfaction
     * du client.
     *
     * Valeurs :
     * ' '        Enquête à chaud QHD (Environnement Quality High Data)
     * '1'        Enquête à froid SAE (Serveur d'Autorisations Emetteur)
     * '2'        Score Estimation
     */
    codeSourceEnquete: string;
    /**
     * Libellé lié au code source de l'enquête
     * A chaud (QHD)
     * A froid (SAE)
     * Estimation (Score)
     */
    libelleSourceEnquete: string;
    /**
     * Libellé lié au code note recommandation :
     * de 1 à 6 : Détracteur
     * de 7 à 8 : Neutre
     * de 9 à 10 : Promoteur
     */
    libelleProfilRecommandation: string;
  }

  export interface IDetailNoteBaleII {
    /**
     * Note Bale II calculée
     */
    noteBaleII: string;
    /**
     * date de calcul de la note Bale II
     * Type date au format yyyy-MM-dd
     */
    dateNotationBaleII: string;
    /**
     * Libellé du moteur de notation Bale II
     */
    libelleMoteurNotation: string;
    /**
     * Code de l'établissement noteur
     */
    codeEtablissementNoteur: string;
    /**
     * Libellé de l'établissement noteur
     */
    libelleEtablissementNoteur: string;
    /**
     * Code de l'établissement pilote de calcul Bale II
     */
    codeEtablissementPilote: string;
    /**
     * Libellé de l'établissement pilote de calcul Bale II
     */
    libelleEtablissementPilote: string;
    /**
     * Libellé de l'origine de la notation Bale II
     */
    libelleOrigineNotation: string;
    /**
     * Libellé du processus de notation Bale II
     */
    libelleProcessusNotation: string;
  }

  export interface IDetailEngagementDomiciliation {
    /**
     * Code établissement du compte sur lequel un engagement de domiciliation des revenus existe
     */
    codeEtablissement: string;
    /**
     * Code guichet du compte sur lequel un engagement de domiciliation des revenus existe
     */
    codeGuichet: string;
    /**
     * Code produit du compte sur lequel un engagement de domiciliation des revenus existe
     */
    codeProduit: string;
    /**
     * Numéro du compte sur lequel un engagement de domiciliation des revenus existe
     */
    numeroCompte: string;
    /**
     * Clé RIB du compte sur lequel un engagement de domiciliation des revenus existe
     */
    cleRIB: string;
    /**
     * Numéro d'entité titulaire de rattachement du compte
     */
    numeroET: number;
    /**
     * "M"= Manuelle, "V"= Validée, "O"= En Cours, "N"= Non Validée
     */
    indicateurEngagementDom: string;
    /**
     * "M"= Manuelle, "V"= Validée, "O"= En Cours, "N"= Non Validée
     */
    libelleEngagementDom: string;
  }

  export interface IDetailCompetenceFinanciere {
    codeNiveauCompetenceFinanciere: string;
    libelleNivCompetenceFinanciere: string;
    dateDerniereMAJ: string;
    nomAgent: string;
    prenomAgent: string;
    codeCiviliteAgent: string;
    libelleCiviliteAgent: string;
    codeOrigineSourcage: string;
    dateNumerisation: string;
    identifiantDocumentFileNet: string;
    indicateurAccordClient: boolean;
    dateCreationEvenement: string;
    designationOrigineQCF: string;
    libelleStatutQCF: string;
    niveauRisqueInvestisseur: string;
    libelleStatutNumerisation: string;
    libelleNiveauRisqueInvestisseur: string;
  }

  export interface IDetailDRC {
    /**
     * Libellé de la pièce manquante ou à actualiser
     */
    libellePieceManquante: string;
  }

  export interface IDetailAlerteMAD {
    /**
     * Code établissement
     */
    codeEtablissement: string;
    /**
     * Code guichet du produit en MAD
     */
    codeGuichet: string;
    /**
     * Code produit du produit en MAD
     */
    codeProduit: string;
    /**
     * Numéro du produit en MAD
     */
    numeroCompte: string;
    /**
     * Clé RIB du produit en MAD
     */
    clefRIB: string;
    /**
     * Libellé du produit
     */
    libelleProduit: string;
    /**
     * Identifiant du type de produit (IDEGPS)
     */
    identifiantTypeProduit: number;
    /**
     * Numéro entité titulaire
     */
    numeroET: number;
    /**
     * Nombre de rejet MAD/MyMAD
     */
    nombreRejetMAD: number;
    /**
     * Désignation de l'entité titulaire
     */
    designationET: string;
  }

  export interface IOffresInstance {
    /**
     * Code établissement
     */
    codeEtablissement: string;
    /**
     * Numéro entité titulaire
     */
    numeroET: number;
    /**
     * Désignation de l'entité titulaire
     */
    designationET: string;
    /**
     * Code Guichet du compte support de l'offre en instance
     */
    codeGuichet: string;
    /**
     * Code produit du compte support de l'offre en instance
     */
    codeProduit: string;
    /**
     * Numero du compte support de l'offre en instance
     */
    numeroCompte: string;
    /**
     * Numéro de l'offre
     */
    numeroOffre: number;
    /**
     * Libellé de l'offre
     */
    libelleOffre: string;
    /**
     * Commentaire :
     * Ex : "Offre vide, avenant impossible"
     */
    commentaire: string;
    /**
     * Détermine si l'entité titulaire est privée ou professionnelle.
     */
    codeTypeUsage: string;
    /**
     * Libellé du code type usage.
     */
    libelleTypeUsage: string;
  }

  export interface IDetailPrecibleCreditConso {
    /**
     * code de l'établissement de la personne
     */
    codeEtablissement: string;
    /**
     * Numéro du client
     */
    numeroClient: number;
    /**
     * Code état client particulier scoring
     */
    codeEtatClientScoring: string;
    /**
     * MT engagement crédit conso actuel
     */
    montantEngagementActuel: number;
    /**
     * Date montant engagement actuel
     * Type date au format yyyy-MM-dd
     */
    dateMontantEngagementActuel: string;
    /**
     * Montant engagement -1 crédit conso
     */
    montantEngagementPrecedent: number;
    /**
     * Date montant engagement précédent
     * Type date au format yyyy-MM-dd
     */
    dateMontantEngagementPrecedent: string;
    /**
     * Montant engagement -2 crédit conso
     */
    montantEngagementHistorique: number;
    /**
     * Date montant engagement -2
     * Type date au format yyyy-MM-dd
     */
    dateMontantEngagementHistorique: string;
  }
}
