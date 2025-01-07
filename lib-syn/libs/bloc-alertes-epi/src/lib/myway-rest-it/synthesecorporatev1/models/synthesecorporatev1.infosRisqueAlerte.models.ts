/* eslint-disable max-len */
export namespace RessourceSynthesecorporateV1InfosRisqueAlerte {
  export interface InfosRisqueAlerte {
    /**
     * la note Bale2
     */
    noteBale2: string;

    /**
     * Le champ fibenBDF
     */
    fibenBDF: string;

    /**
     * Cotation Précédente FIBEN BDF
     */
    fibenBDFPrecedent: string;

    /**
     * La date notation Fiben BDF
     */
    dateNotation: string;

    /**
     * Date de Cotation Fiben BDF N-1
     */
    dateNotationPrecedente: string;

    /**
     * Ce champ représente la saisie ATD pour un client, il prend deux valeurs possibles :
     * -  Oui si le client interrogé possède le code "02"  ou "27" dans la liste des codes incidents.
     * -  Non si le client interrogé ne possède pas le code "02"  ou "27" dans la liste des codes incidents.
     * Cette liste de codes incidents est alimentée par la rubrique "CT6INC"  du segment IG4I630 (Qr Z4I00100).
     */
    saisieATD: string;

    /**
     * Ce champ indique si le client est interdit bancaire, il prend deux valeurs possibles :
     * -  Oui si le client interrogé possède le code "43"  ou "44" dans la liste des codes incidents.
     * -  Non si le client interrogé ne possède pas le code "43"  ou "44" dans la liste des codes incidents.
     * Cette liste de codes incidents est alimentée par la rubrique "CT6INC"  du segment IG4I630 (Qr Z4I00100).
     */
    interditBancaire: string;

    /**
     * Date Notation Bale2
     */
    dateNoteBale2: string;

    /**
     * Code qui détermine la nature de l'anomalie Valeurs
     */
    codeErreur: string;

    /**
     * Code Banque sous lequel la Caisse est répertoriée dans le fichier des implantations bancaires gérés par la Banque de France. Au niveau du réseau des Caisses d'Epargne le 1er car.= 1 et le 5ème = 5
     * Exemples :
     * 10001 = Banque de France
     * 30003 = Société Générale
     * 15965 = Caisse de Flandre
     */
    codeEtabBanqueEntiteJuridique: string;

    /**
     * Numéro chrono attribué par le système à chaque ouverture de personne. L'identifiant est unique au sein du CTR. Cela permet d'éviter les conflits d'identifiant en cas de fusion de caisses.
     */
    identifiantPersonne: number;

    /**
     * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys Une personne morale est enregistrée sous une seule activité :
     * valeur 1 Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono Référencement des professionnels dans la table DU4B / appli GESTADM Un professionnel est référencé dans le SI d'un Etablissement bancaire par : - NODAPE / Numéro de personne - NODAPS / Numéro chrono Prof Identifiant interne MYSYS Référence unique pour une personne dans un Etablissement bancaire Numéro chronologique attribué par le système : Attribution du numéro par max+1 effectuée par table de référencement DU4B / Prof
     */
    numeroChronoProfessionnel: number;

    /**
     * Détermine la date arrêté de calcul concernant le PNB
     */
    dateArreteCalculPNB: string;

    /**
     * Donnée reçu depuis les datamart, il s'agit du montant du PNB calculé d'une personne sur 12 mois glissant de l'année N. Donnée calculée par le décisionnel. Créée pour avoir un format d'entrée de type 9(15).
     */
    montantPNBPersonneCalcule12MN: number;

    /**
     * Donnée reçu depuis les datamart, il s'agit du montant du PNB calculé d'une personne à la date du 31/12 N-1. Donnée calculée par le décisionnel.
     */
    montantPNBPersonneCalcule3112N1: number;

    /**
     * Donnée reçu depuis les datamart, il s'agit du montant du PNB calculé d'une personne sur 12 mois glissant de l'année N-1. Donnée calculée par le décisionnel.
     */
    montantPNBPersonneCalcule12MN1: number;

    /**
     * Indicateur permettant de définir un client actif sur les marchés Entreprises et Economie Sociale. Pour le marché Entreprise le calcul est réalisé en fonction du montant des flux créditeurs et du CA. Pour le marché Economie Sociale le calcul est réalisé en fonction des flux commerciaux ou de l'encours de collecte CEP. Les calculs sont effectués par le DATAMART et le résultat mensuel est stocké en table DU8B par l'application PHG0RDM1 (programme DCBCC1).
     * Valeurs possibles : 'N' Inactif 'O' Actif
     */
    indicateurActivitePersonne: string;

    /**
     * Indicateur permettant de définir l'état d'une personne en fonction de ses équipements. Cette donnée est utilisée lors d'une revue de portefeuille par un chargé d'affaire BDR. Elle permet de faire la distinction entre une personne présente (avec au moins un produit ouvert) et une personne qui est partie (sans produit ouvert). Les calculs sont effectués par le DATAMART et le résultat mensuel est stocké en table DU8B par l'application PHG0RDM1 (programme DCBCC1).
     * Valeurs possibles : 'N' La personne n'a plus de produits ouvert (client parti) 'O' La personne a au moins un produits ouvert (client présent)
     */
    codeIndicateurPersonnePSActif: string;

    /**
     * Précise si la personne est sociétaire de l'Etablissement GCE : détient des parts sociales Valeurs : ' ' non initialisé '0' non '1' Oui
     */
    indicateurSocietaire: string;

    /**
     * Référence d'identification des entités juridiques (LEI : LEGAL ENTITY IDENTIFIER) effectuant des transactions financières. Ne concerne pas les personnes physiques. Référence pré-attribuée par l'INSEE pour les entités de droit francais (pré-opérateur local / LOU). Format selon la norme ISO 17442 : - XXXX préfixe de LOU - YY initialement réservé et mis à zéro - ZZZZZZZZZZZZ identifiant de l'entité, attribué par le LOU - KK clé de controle numérique calculée selon la norme ISO 70641 Mod 97,10 Attribut du professionnel géré par la table DU4B / appli GESTADM Donnée mémorisée dans le Référentiel des tiers RFT table DU4T / appli GESTADM
     */
    identifiantLEI: string;

    /**
     * Les attributions de code LEI sont valables un an. Permet de gérer l'obsolescence du code LEI (IDDEPM). Cette date correspond à la donnée DAFLEI chez Natixis. Date sous la forme 'SSAAMMJJ'.
     */
    dateFinValiditeLEI: string;

    /**
     * Détermine le motif du retour du courrier par la Poste. Typologie gérée dans la table DU1T / appli GESTADM Mémorisation du retour dans l'appli GESTADM : - du Particulier : table DU6D - du Lieu d'activité (Professionnel) : table DU6C Valeurs : 1 NPAI (n'habite pas à l'adresse indiquée) 2 Refusé 3 Homonyme 4 Non réclamé 5 Adresse incomplète localité voie numéro 6 Voie inconnue 7 Divers 8 Décédé *9 CONTROLE DE NUMERICITE
     */
    codeTypeRetourPTT: string;

    /**
     * Indique si la personne est topée Watch List Local (liste de surveillance). Valeurs : 'O' la personne est topée Watch List Local 'N' la personne n'est pas topée Watch List Local
     */
    indicateurWatchListLocale: string;

    /**
     * Code qui détermine le niveau de watch-list locale. Valeurs : '1' Surveillance établissement '2' Risque dégradé '3' Risque de défaillance
     */
    codeNiveauWatchListLocale: string;

    /**
     * Indique si la personne est topée Watch List Nationale (liste de surveillance). Valeurs : 'O' la personne est topée Watch List Nationale 'N' la personne n'est pas topée Watch List Nationale
     */
    indicateurWatchListNational: string;

    /**
     * Code qui détermine le niveau de watch-list nationale. Valeurs : 'S' Saine 'D' Douteuse
     */
    codeNiveauWatchListNational: string;

    /**
     * Définition Indique si la personne est topée Watch List Banque Référente (liste de surveillance). Valeurs : 'O' la personne est topée Watch List Banque Référente 'N' la personne n'est pas topée Watch List Bq Référente
     */
    indicateurWatchListBanqueRef: string;

    /**
     * Code qui permet de déterminer le niveau de watch-list de la banque référente Valeurs : 'S' Saine 'D' Douteuse
     */
    codeNiveauWatchListBanque: string;

    /**
     * Indique si la personne est topée Préventis Valeurs : 'O' la personne est topée Préventis 'N' la personne n'est pas topée Préventis
     */
    indicateurPresencePreventis: string;

    /**
     * Indique si la personne est topée GAE Valeurs : 'O' la personne est topée GAE 'N' la personne n'est pas topée GAE
     */
    indicateurPresenceGAE: string;

    /**
     * Précise s'il existe une opposition active sur un contrat donné (compte, crédit, service ...) Valeurs : '0' pas d'opposition '1' opposition
     */
    indicExistenceOppoSurContrat: string;

    /**
     * Indicateur opposition interdit bancaire Valeurs : 'O' Opposition interdit bancaire 'N' Opposition non interdit bancaire
     */
    indicateurOppoInterditBancaire: string;

    /**
     * Code indicateur déterminant si l'un des produits de la personne se trouve dans RPM ou se trouvait dans RPM dans ce cas une fiche de suivi est toujous existante ou bien absent de RPM. Valeurs  'R' RPM actif 'F' Fiche de suivi 'A' absent de RPM ==> A NE PLUS UTILISER
     */
    codePresenceDansRPMOuFDS: string;

    /**
     * Référence d'identification d'une SLE : Société Locale d'Epargne Société coopérative sans activité bancaire rattachée à une Caisse d'Epargne. Codification EUROTITRES (ex Gestitres) Une personne ne peut être sociétaire de plusieurs SLE d'un même Etablissement.
     */
    codeSLE: string;

    /**
     * Nombre indiquant le nombre de rejets présents dans le MAD.
     */
    nombreRejets: number;

    /**
     * Date de dernière mise à jour d'une révision annuelle.
     */
    dateDerniereMajRevAnnuel: string;

    /**
     * indique l'étape du cycle de vie d'un dossier de créances dans la gestion du Recouvrement : 'amiable' ou en 'contentieux' Impacte l'organisation du dossier Valeurs possibles : 'A' Amiable 'C' Contentieux
     */
    codePhaseRecouvrement: string;

    /**
     * Montant actualisé de la créance correspondant à un un contrat de crédit ou d'engagement en Recouvrement. Règle de gestion spécifique à la gestion du Recouvrement : capital + intérêts + commissions et frais divers éventuellement Correspond à la somme due par la client
     */
    soldeActualise: number;

    /**
     * Détermine le degré de sensibilité d'une personne au risque de blanchiment et/ou de terrorisme Donnée de la Synthèse : mémorisée dans la table DU8D / appli GESTADM valeurs : 'N' Vert 'S' Orange 'T' Rouge 'A' Non scoré
     */
    codeDegreSensibilitePersonne: string;

    /**
     * Code permettant d'indiquer le niveau de satisfaction du client, qui figurera sous la forme d'un smiley sur la synthèse client. Valeurs : '1' Très satisfait (smiley :Très souriant et vert foncé) '2' Assez satisfait (smiley : Souriant et vert clair) '3' Peu satisfait (smiley : Neutre et orange) '4' Pas du tout satisfait (smiley : Triste et rouge) ' ' Pas d'opinion (smiley : Neutre et gris)
     */
    codeNiveauSatisfaction: string;

    /**
     * Détermine si la personne fait l'objet d'une alerte pour réclamation (dépôt par la clientèle) Donnée de la Synthèse : mémorisée dans la table DU8D / appli GESTADM Présence d'une alerte s'il existe au moins une réclamation en cours active pour la relation dans l'applicatif Silligent Un clic sur cette alerte affiche les informations les plus importantes de cette ou de ces réclamation(s). Valeurs : ' ' Pas de réclamation sur la personne '1' Réclamation sur la personne
     */
    indicateurAlerteReclamation: string;

    /**
     * Détermine la présence de comptes en déshérence pour un client donné et un niveau de réactivité. Valeurs : '0' Pas de compte en déshérence. '1' Compte(s) en déshérence à traiter sans urgence '2' Compte(s) en déshérence à traiter en urgence
     */
    codePresenceCompteDesherence: string;

    /**
     * Date de décès de la personne physique
     */
    dateDecesPersonnePhysique: string;

    /**
     * Désignation courte de la Solciété Locale d'Epargne
     */
    libelleCourtSLE: string;

    /**
     * Option choisie par le client pour recevoir des informations commerciales par email. valeur: ------- '0' envoi commercial par courrier électronique '1' pas d'envoi commercial par courrier électronique
     */
    optinParCourrierElectronique: string;

    /**
     * Option choisie par le client pour recevoir des informations commerciales par SMS ou fax. valeurs : '0' envoi commercial par SMS ou fax '1' pas d'envoi commercial par SMS ou fax
     */
    indicateurEnvoiSMSOuFax: string;

    /**
     * Détermine la couleur du Top CC pour une personne. Donnée présente dans la table DU8W. La couleur du TOP CC est définie par : 1. niveau du DRC 2. EAI 3. PPE 4. Période d'actualisation Si tous les éléments sont OK => Top CC = VERT Si l'un des éléments n'est pas OK => Top CC = ORANGE Seulement si la période d'actualisation est dépassée : Top CC = ROUGE Valeurs possibles : 'R ' Rouge 'O ' Orange 'V ' Vert ' ' Blanc
     */
    codeCouleurTopCC: string;

    /**
     * libelle du code couleur top CC
     * CODETC = ' ' => libellé : "Top CC : non calculé"
     * CODETC = 'V' => libellé : "Top CC actualisé - vert"
     * CODETC = 'O' => libellé : "Top CC période de revue - orange"
     * CODETC = 'R' => libellé : "Top CC action immédiate - rouge"
     */
    libelleCodeCouleurTopCC: string;

    /**
     * Classification des liens des personnes (entités) composant un groupe réglementaire (grappage). Dans un groupe informel la nature de lien de la personne ne peut être que '05' Les autres codes sont utilisés pour les groupes formels Valeurs : Typologie gérée dans la table DU12 / appli GESTADM '01' Tête de groupe '02' Tête de sous-groupe '03' Filiale de groupe '04' Filiale de sous-groupe '05' Entreprise évaluée individuellement '07' Succursale de groupe '08' Succursale de sous-groupe
     */
    codeNatureLienReglementaire: string;

    /**
     * libelle codeNatureLienReglementaire
     */
    libelleCodeNatLienRegl: string;

    /**
     * Détermine si un groupe est formel ou informel. - Formel : qui publie des comptes consolidés - Informel : sans bilan consolidé Valeurs : 'F' Formel 'I' Informel
     */
    typeGroupe: string;

    /**
     * libelle typeGroupe
     */
    libelleTypeGroupe: string;

    offreEnInstance: OffreEnInstance;

    leverageFinance: LeverageFinance;

    /**
     * Compteur permettant de restituer le nombre de demandes et réclamations sur les synthèses du client
     */
    nombreDemandesReclamations: number;

    /**
     * Détermine si une personne possède une double relation cad si elle appartient à la fois à une E.T. de type particulier
     * et une E.T. de type professionnel.
     * 'N '       Personne sans double relation
     * 'O '       Personne avec double relation
     * 'NA'       non appliqué
     */
    estDoubleRelation: boolean;

    tarificationN: Tarification;

    tarificationN1: Tarification;
    /**
     * Libellé du mode de gestion du questionnaire PIM : Standard Allégé Simplifié
     */
    modeGestionQpim: string;
    /**
     * Objet des données anticorruption
     */
    antiCorruption: AntiCorruption;
    /**
     * MIF
     */
    mif: Mif;
    /**
     * questionnaire ESG
     */
    questionnaireEsg: QuestionnaireEsg;
    /**
     * O2S
     */
    informationO2S: string;
  }

  /**
   * Objet info MIF
   */
  export interface Mif {
    codeCouleur: string;
    libelleMessage: string;
  }

  /**
   * Objet info Questionnaire ESG
   */
  export interface QuestionnaireEsg {
    dateValidation: string;
    indicateurObsolescence: boolean;
  }

  /**
   * Objet des données anticorruption
   */
  export interface AntiCorruption {
    dateCreation: string;
    dateFin: string;
    statut: string;
  }

  export interface IncidentPersonne {
    /**
     * Le code type incident
     */
    listeIncidents: Incidents[];
  }
  export interface InfoGeneral {
    /**
     * la valeur note bale2
     */
    valeurNoteBale2: string;

    /**
     * La date de notation Bale2
     */
    dateNoteBale2: string;
  }
  export interface Incidents {
    /**
     * Le code type incident
     */
    codeTypeIncident: string[];

    /**
     * Le code incident
     */
    codeIncident: string;

    /**
     * La date de début de l'incident.
     */
    dateDebutIncident: string;

    /**
     * La date de fin incident.
     */
    dateFinIncident: string;

    /**
     * Le statut du code incident.
     */
    statutIncident: string;
  }
  export interface OffreEnInstance {
    listeInfoEntiteTitulaire: InfoEntiteTitulaire[];
  }
  export interface InfoEntiteTitulaire {
    /**
     * Code établissement bancaire
     */
    codeEtablissement: string;

    /**
     * Identifiant personne
     */
    identifiantPersonne: number;

    /**
     * Client bancaire
     */
    numeroEntiteTitulaire: number;

    /**
     * Désignation
     */
    designationBancaire: string;

    /**
     * Code déterminant si l'entité titulaire est privée ou professionnelle
     */
    codeTypeUsage: string;

    /**
     * Libellé associé au code type usage
     */
    libelleUsage: string;

    listeInfoOffre: InfoOffre[];
  }
  export interface InfoOffre {
    /**
     * Code guichet
     */
    codeGuichet: string;

    /**
     * Catégorie de gestion du produit / service
     */
    codeTypeProduitService: string;

    /**
     * Identifie un contrat de produit / service dans le cadre d'une offre
     */
    referenceProduitService: string;

    /**
     * Identifiant offre
     */
    numeroOffre: number;

    /**
     * Libellé de l'offre
     */
    libelleOffre: string;

    /**
     * Commentaire positionné par la ressource. Par défaut, "Aucune observation". S'il y a une référence produit service, le commentaire est positionné à "Offre vide, avenant impossible"
     */
    commentaire: string;
  }
  export interface LeverageFinance {
    /**
     * Indique si un tiers (PM) est Leverage Finance
     */
    estLeverageFinance: boolean;

    /**
     * Rapport entre les dettes du client et son EBITDAR
     * Ratio de levier brut = Dettes / EBITDAR
     */
    ratioLevierBrut: number;

    /**
     * Rapport entre les dettes du client auxquelles on soustrait sa trésorerie et son EBITDAR
     * Ratio de levier net = ( Dettes - Trésorerie - Dettes financières non tirées )  /   EBITDAR
     */
    ratioLevierNet: number;

    /**
     * Date du ratio de levier LF (Leverage Finance) pour une personne
     */
    dateRatio: string;
  }
  export interface Tarification {
    dateDebut: string;

    dateFin: string;

    montantaTariferInitial: number;

    montantaTariferPrix: number;

    montantaRemiser: number;
  }
}
