/* tslint:disable:max-line-length */
export namespace RessourceTierscorporateV1CorporateOrganigramme {
  export interface Relation {
    /**
     * Libelle intitule relation
     * Définition :
     * Désignation de la relation formaté en fonction de la composition du dossier ME
     * exemple de formulation :
     * "civilité pers 1" et "civilité pers2" et "désignat p1"
     * "désignation pers. 1" et "désignat pers. 2"
     * "désignation pers. 1" et "désignat pers. 2" "et leurs enfants"
     * "Groupe" raison sociale personne morale leader
     * "Famille" nom leader pp + "& Entp" raison sociale leader pm
     */
    libelleIntituleRelation: string;

    /**
     * Identite relation economique menage
     * Définition :
     * Numéro d'identification de la relation économique (ex dossier ménage) dans le SI d'un Etablissement du Groupe CE.
     * Une relation économique (ex ménage) est le regroupement de plusieurs personnes ayant un lien familial et/ou économique entre elles.
     * Le dossier fédère les informations communes à ces différentes personnes regroupées par rubriques.
     * Numéro chronologique attribué par le système :
     * Référence unique dans MYSYS (identifiant interne)
     */
    identiteRelationEcoMenage: number;

    /**
     * Nombre personnes relation economique
     * Définition :
     * Comptage du nombre de personnes dans la relation économique.
     */
    nombrePersonneRelationEco: number;

    /**
     * Liste des personnes de la relation
     */
    listePersonne: Personne[];
  }
  export interface Personne {
    /**
     * Identifiant personne
     * Définition :
     * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
     * Personne référencée comme client, tiers ou prospect.
     * Numéro chronologique attribué par le système :
     * Référence unique dans MYSYS (identifiant interne)
     */
    identifiantPersonne: number;

    /**
     * Code personnalite juridique
     * Définition :
     * Détermine le type de personnalité juridique de la personne.
     * Il existe principalement deux types de personnalité :
     * - PJ physique : concerne les individus
     * - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations ...)
     * La personnalité juridique conditionne les droits et obligations.
     * Valeurs :
     * '1'        Personne physique
     * '2'        Personne morale ou assimilée morale
     * *9         CONTROLE DE NUMERICITE
     */
    codePersonnaliteJuridique: string;

    /**
     * Code qualite personne
     * Définition :
     * Détermine la qualité de la personne dans la relation
     * Typologie MYSYS gérée dans la table DV2V
     * Valeurs :
     * 'ASC '     Ascendant
     * 'ASS '     Association, mutuelle,...
     * 'AUT '     Autre
     * 'CCB '     Concubin
     * 'CJT '     Conjoint
     * 'DIV '     Divers
     * 'ENF '     Enfant
     * 'EXP '     Entreprise portant l'exploitation
     * 'EXP2'     Entreprise portant une 2ieme exploitation
     * 'FIL '     Filiale
     * 'HOL '     Holding
     * 'MOY '     Société portant des moyens
     * 'MOY2'     Société portant des moyens de la deuxième exploitation
     * 'PACS'     Partenaire(PACS)
     * 'PMP '     Personne Morale Patrimoniale
     */
    codeQualitePersonne: string;

    /**
     * Code leader espace entreprise
     * Définition :
     * Détermine si la personne de la relation est leader de l'espace entreprise
     * Valeurs :
     * 'L'        Leader
     * 'N'        Personne sans spécificité
     */
    codeLeaderEspaceEntreprise: string;

    /**
     * Code espace relation
     * Définition :
     * Détermine l'espace de la relation
     * Permet d'établir dans quel espace de la relation est restituée une personne donnée en fonction de sa qualité
     * Valeurs :
     * 'P'        Espace privé
     * 'E'        Espace entreprise
     */
    codeEspaceRelation: string;

    /**
     * Note calculee
     * Définition :
     * Détermine la valeur calculée d'un type de note attribuée à une entité donnée.
     * correspond à la valeur mémorisée
     */
    noteCalculee: string;

    /**
     * Libelle etablissement de notation
     * DEFINITION :
     * Correspond au libellé de l'établissement qui a effectué la notation Bâle II.
     */
    libelleEtablissementNotation: string;

    /**
     * Code categorie juridique INSEE
     * Définition :
     * Détermine la catégorie juridique de la personne.
     * Typologie INSEE niveau 3 (256 postes)
     * Format XYZZ :
     * X  : Famille juridique ( niveau 1 )
     * XY : Forme juridique   ( niveau 2 )
     * ZZ : Statut juridique
     * Valeurs :
     * Typologie gérée dans la table DU1P
     * Exemples :
     * 1100       artisan - commerçant
     * 5415       SARL en économie mixte
     * 7210       commune
     * 9240       congrégation
     */
    codeCategorieJuridiqueINSEE: string;

    /**
     * Nombre de liens inter-personnes
     * Définition :
     * Comptage du nombre de liens inter-personne
     */
    nombreLiensInterPersonnes: number;

    /**
     * Code etat Fin Reprise
     * Définition :
     * Permet de spécifier la situation d'un traitement cyclique.
     * Valeurs :
     * ' '        Initial
     * 'R'        Reprise
     * 'F'        Fin
     */
    codeEtatFinReprise: string;

    /**
     * Liste des dirigeants moraux et physiques
     */
    listeDirigeants: Dirigeant[];

    /**
     * Code leader espace prive
     * Définition :
     * Détermine si la personne de la relation est leader de l'espace privé
     * Valeurs :
     * 'L'        Leader
     * 'N'        Personne sans spécificité
     */
    codeLeaderEspacePrive: string;

    /**
     * Indicateur grappage
     * Définition :
     * Top indiquant si une personne est un prospect ou non.
     * Règle :
     * Si DU7A.CODATI = '1' et DU7A.CDDAPO = '1' alors prospect.
     * 'O'        Prospect
     * 'N'        Non prospect"
     */
    indicateurGrappage: string;

    /**
     * Indicateur NPAI
     * Définition :
     * Top indicateur de grappage
     * 'O'        Grappage
     * 'N'        Pas de grappage
     */
    indicateurNPAI: string;

    /**
     * Indicateur prospect
     * Définition :
     * Indicateur d'une personne en NPAI ou non dans la table pro ou part
     * 'O'        NPAI
     * 'N'        NON NPAI
     */
    indicateurProspect: string;

    /**
     * Détermine un segment de clientèle dans une typologie donnée :
     * MN : Marché national
     * Marché :
     * MN 101102 /  Particuliers : Parti. non Prof
     * MN 102102 /  Professionnels : Prof. Lib.
     * MN 206101 /  Professionnels Privé  Promoteurs
     */
    codeSegmentMarche: string;

    /**
     * Numero SIREN entreprise
     * Définition :
     * Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
     * Système d'Identification du Répertoire des ENtreprises
     * Identifie de manière unique une entreprise au niveau
     * national.
     * Attribué qu'une seule fois, n'est supprimé du répertoire qu'au moment de la disparition de la personne juridique (décès ou cessation de toute activité pour une personne physique, dissolution pour une personne morale).
     * Compose le numéro SIRET : num établissement
     * Format :
     * Les 8 premiers chiffres n'ont aucune signification, excepté pour les organismes publics (communes,...) dont le numéro SIREN commence obligatoirement par 1 ou 2.
     * Le 9ième chiffre est une clé de contrôle : clé "1-2" suivant l'algorithme de Luhn
     * Un professionnel n'a pas forcément de SIREN, cas des professionnels n'ayant pas d'activité commerciale et/ou n'ayant pas de salariés :
     * Pour les entreprises étarngères résidant en France :
     * SIREN fictif attribué par le Banque De France dans le cadre de l'identification FIBEN (commence par 200)
     * En cas de non attribution par l'INSEE :
     * (hors périmètre SIRENE ou inscription en instance)
     * Numéro chronologique attribué par le système :
     * Référence unique dans MYSYS (identifiant interne) numéro attribué par le système
     */
    numeroSiren: string;

    /**
     * Designation courte
     * Définition :
     * Dénomination banalisée :
     * - désignation courte du particulier
     * - libellé libre du lieu d'activité
     */
    raisonSociale: string;

    /**
     * Détermine la typologie de segmentation clientèle.
     * Correspond au 2 premiers caractères du code
     * Types :
     * - Activation Clientèle : Segmentation comportementale des Particuliers
     * - Fréquence : Profils client portant des objectifs commerciaux
     * - Code marché : Segmentation des secteurs d'activités
     * - Univers Client : Profil équipement Client
     * Valeurs :
     * - "AC"       Activation Clientèle Particulier
     * - "AP"       Activation Clientèle Professionnel
     * - "FC"       Fréquence Client
     * - "FP"       Fréquence PRO
     * - "FR"       Fréquence Relation
     * - "MN"       Marché national
     * - 'SL'       Spécifique VAO pour progiciel Norkom (i-BP)
     * - 'SA'       Activation Clientèle V2
     * - 'SU'       Univers de détention
     */
    codeTypeSegmentMarche: string;

    /**
     * Nombre de jour pour révision annuelle
     */
    nombreJours: number;

    /**
     * Code établissement entité pilote
     */
    codeEtablissementEntitePilote: string;

    /**
     * le code entrepreneur (O/N)
     */
    codeEntrepreneurIndividuel: boolean;

    listeAdresses: Adresse[];

    listeComptes: Compte[];

    /**
     * Détermine si la personne morale est un organisme
     * public.
     * Cet état découle de le catégorie juridique
     * de l'activité professionnelle de la personne morale
     * Valeurs :
     * 'O'        La personne morale est un organisme public
     * 'N'        La personne morale n'est pas un organisme public
     */
    indicateurTiersPublic: boolean;

    /**
     * Indique si la personne morale est sur un marché
     * règlementé
     * Fonction de la catégorie juridique de
     * l'activité professionnelle de la personne morale
     * 'O'        La personne morale est sur un marché règlementé
     * 'N'        La personne morale n'est pas sur un marché règlementé
     */
    indicateurTiersMarcheRegle: boolean;

    /**
     * indicateur Bordereau Imprimer
     */
    indicateurBordereauImprimer: boolean;

    /**
     * Valeurs possibles :
     * '0'        Personne connue comme client
     * '1'        Personne connue comme tiers
     * '2'        Personne connue comme prospect
     * '3'        Personne connue comme prospect enrichi
     */
    typeRelation: string;

    /**
     * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
     * '0'        Actif
     * '1'        Cloturé
     */
    codeEtatPersonne: string;

    /**
     * Typologie de segmentation relationnelle particulier. Si c'est un particulier, la valeur renseigné est 'BC'
     */
    typeSegmentationRelPart: string;

    /**
     * Détermine le segment de clientèle dans la typologie
     * relationnelle client attribué à une personne donnée.
     * Valeurs :
     * 'GDPER'    Grand Public Essentiel à Réactiver
     * 'GDPEF'    Grand Public Essentiel à Fidéliser
     * 'GDP'      Grand Public
     * 'PBP'      Prenium Banque Privée
     * 'PHDG'     Prenium Haut de Gamme
     * 'CFra'     Clientèle fragile
     * 'PGP'      Prenium Gestion Privée
     * 'CCou'     Clientèle courante
     * 'PotP'     Potentiel Prenium
     * 'nBC'      Non Segmenté
     */
    codeSegmentationRelPart: string;

    /**
     * Typologie de segmentation relationnelle professionnel. Si c'est un professionnel, la valeur renseigné est ''BP'
     */
    typeSegmentationRelProf: string;

    /**
     * Détermine le segment de clientèle dans la typologie
     * relationnelle client attribué à un professionnelle.
     * Valeurs :
     * 'PLR_03'   Potentiel fortement capté - PLR
     * 'LRG_03'   Potentiel fortement capté - LARGE
     * 'MED_03'   Potentiel fortement capté - MEDIUM
     * 'SML_03'   Potentiel fortement capté - SMALL
     * 'PLR_02'   Potentiel partiellement capté - PLR
     * 'LRG_02'   Potentiel partiellement capté - LARGE
     * 'MED_02'   Potentiel partiellement capté - MEDIUM
     * 'SML_02'   Potentiel partiellement capté - SMALL
     * 'PLR_01'   Potentiel faible ou non capté - PLR
     * 'LRG_01'   Potentiel faible ou non capté - LARGE
     * 'MED_01'   Potentiel faible ou non capté - MEDIUM
     * 'SML_01'   Potentiel faible ou non capté - SMALL
     * 'PLR_ER'   EER - PLR
     * 'LRG_ER'   EER - LARGE
     * 'MED_ER'   EER - MEDIUM
     * 'SML_ER'   EER - SMALL
     * 'PLR_RK'   Risqué - PLR
     * 'LRG_RK'   Risqué - LARGE
     * 'MED_RK'   Risqué - MEDIUM
     * 'SML_RK'   Risqué - SMALL
     */
    codeSegmentationRelProf: string;

    /**
     * Indicateur précisant si une personne connue est un prospect : personne n'étant ni client ni tiers et généralement référencée dans le cadre d'une relation d'avant vente (simulation, pré-souscription d'une offre).
     * Valeurs :
     * '1' personne prospect
     * '0' personne non prospect
     */
    indicateurActiviteProProspect: string;
  }
  export interface Dirigeant {
    /**
     * Identifiant personne
     * Définition :
     * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
     * Personne référencée comme client, tiers ou prospect.
     * Numéro chronologique attribué par le système :
     * Référence unique dans MYSYS (identifiant interne)
     */
    identifiantPersonne: number;

    /**
     * Code type lien inter-personnes
     * Définition :
     *
     * Permet de connaître à quel titre une personne (particulier personne physique ou une personne morale) est en relation avec une autre personne.
     * Valeurs :
     * Typologie gérée dans la table DU1Y / appli GESTADM
     * '100'      Tuteur
     * '102'      Curateur
     * '103'      Administrateur légal
     * '104'      Administrateur des biens
     * '105'      Gérant de tutelle
     * '106'      Parent : représentant légal
     */
    codeTypeLienInterPersonnes: string;

    /**
     * Designation courte
     * Définition :
     * Dénomination banalisée :
     * - désignation courte du particulier
     * - libellé libre du lieu d'activité
     */
    designationCourte: string;
  }
  export interface Adresse {
    /**
     * le code établissement de l'entité juridique
     */
    codeEtablissementEntiteJuridique: string;

    /**
     * l'identifiant de l'adresse
     */
    identifiantAdresse: number;

    /**
     * l'identifiant de la personne
     */
    identifiantPersonne: number;

    /**
     * la 2ème ligne de l'adresse
     */
    ligne2: string;

    /**
     * la 3ème ligne de l'adresse
     */
    ligne3: string;

    /**
     * la 4ème ligne de l'adresse
     */
    ligne4: string;

    /**
     * la 5ème ligne de l'adresse
     */
    ligne5: string;

    /**
     * la 6ème ligne de l'adresse
     */
    ligne6: string;

    /**
     * le code pays pour l'insee
     */
    codePaysInsee: string;

    /**
     * le code insee de la localite
     */
    codeInseeLocalite: string;

    /**
     * ????
     */
    typePersonneOuLieuAdresse: string;
  }
  export interface Compte {
    /**
     * l'identifiant de la personne
     */
    identifiantPersonne: number;

    /**
     * le code banque
     */
    codeBanqueEtablissementGCE: string;

    /**
     * le code guichet
     */
    codeGuichetInterbancaire: string;

    /**
     * la référence du produit ou du service
     */
    referenceProduitService: string;

    /**
     * ????
     */
    rangAncienEtatCivil: string;

    /**
     * le code type du produit ou du service
     */
    codeTypeProduitService: string;

    /**
     * le numéro de l'entité titulaire
     */
    numeroEntiteTitulaire: number;

    /**
     * l'identifiant du produit ou du service
     */
    identifiantProduitService: number;

    /**
     * date de l'ouverture du produit ou du service
     */
    dateOuverture: string;

    /**
     * la date de la dernière opération sur le produit ou le service
     */
    dateDerniereOperation: string;
  }
  export interface ControleCoherence {
    /**
     * indicateur précisant la présence d'une alerte
     */
    indicateurAlerte: boolean;

    /**
     * message d'alerte
     */
    libelleAlerte: string;
  }
  export interface CorporateOrganigramme {
    controleCoherence: ControleCoherence;

    relation: Relation;
  }
}
