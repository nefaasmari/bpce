/* tslint:disable:max-line-length */
export namespace RessourceTierscorporateV1CorporateTiersLies {
  export interface Lien {
    /**
     * Deuxième tiers en relation
     * Identifie la deuxième personne liée par un lien inter-personnes avec une 1ière personne selon un type de lien.
     */
    identifiantTiersEnRelation: number;

    /**
     * Date création du lien inter-personnes
     */
    dateCreation: string;

    /**
     * Code type du lien inter-personnes
     * **Définition :**
     * Permet de connaître à quel titre une personne (particulier personne physique ou une personne morale) est en relation avec une autre personne.
     * **Valeurs :**
     * | Code | Libellé |
     * | - | - |
     * | '100' | Tuteur |
     * | '102' | Curateur |
     * | '103' | Administrateur légal |
     * | '104' | Administrateur des biens |
     * | '105' | Gérant de tutelle |
     * | '106' | Parent : représentant légal |
     * | '202' | Président Directeur Général |
     * | '203' | Membre du directoire |
     * | '204' | Président |
     * | '205' | Président conseil régional |
     * | '206' | Président conseil général |
     * | '207' | Président du directoire |
     * | '208' | Directeur général unique |
     * | '209' | Représentant |
     * | '210' | Maire |
     * | '211' | Directeur |
     * | '212' | Directeur général |
     * | '213' | Recteur |
     * | '214' | Associé |
     * | '215' | Membre |
     * | '216' | Fondateur |
     * | '217' | Directeur général adjoint |
     */
    codeType: string;

    /**
     * Date de mise à jour du lien inter-personnes
     * **Définition :**
     * Date de mise à jour du lien inter-personnes
     */
    dateMiseAJour: string;

    /**
     * Référence de la pièce justificative du lien inter-personne
     * **Définition :**
     * Référence informatique donnée par la caisse pour désigner le type de pièce qui référence le lien inter personnes.
     */
    referencePieceJustificative: string;

    /**
     * Date de début effet du lien inter-personnes
     * **Définition :**
     * Cette date est utile pour les liens réglementaires de type représentant légal.
     */
    dateDebutEffet: string;

    /**
     * Date de fin effet du lien inter-personnes
     * **Définition :**
     * Date d'expiration du lien inter-personnes cette date est utile pour les liens inter-personnes réglementaires.
     * **Exemple :**
     * Représentant légal
     */
    dateFinEffet: string;

    /**
     * Designation courte
     * **Définition :**
     * Dénomination banalisée :
     * - désignation courte du particulier
     * - libellé libre du lieu d'activité
     */
    designationCourte: string;

    /**
     * Code famille du liens inter-personnes
     * **Définition :**
     * Classification en familles des types de liens inter-personnes.
     * La famille  Entité Juridique représente les liens permettant de regrouper les personnes identiques entre les C.E.
     * **Valeurs :**
     * | Code | Libellé |
     * | - | - |
     * | RPP | Représentant légal de personne physique |
     * | RPM | Représentant légal de personne morale |
     * | FA | Famille |
     * | ME | Ménage |
     * | GR | Groupe |
     * | FO | Fonction |
     * | DI | Divers |
     * | GE | Gérant (Protection juridique) |
     */
    codeFamille: string;

    /**
     * Code caractéristique du lien
     * **Définition :**
     * Ce code caractérise les liens de la famille GROUPE.
     * **Valeurs :**
     * | Code | Libellé |
     * | - | - |
     * | ' '  | Non concerné |
     * | '1' | Lien Limite |
     * | '2' | Lien capitalistique |
     * | '3' | Lien juridique |
     * | '4' | Lien nature de représentation |
     */
    codeCaracteristique: string;

    /**
     * Code Qualification du lien
     * **Définition :**
     * Ce code ne concerne que les liens limites (famille GROUPE).
     * **Valeurs :**
     * | Code | Libellé |
     * | - | - |
     * | '00' | Lien négatif |
     * | '01' | Lien nul |
     * | '02' | Lien faible |
     * | '03' | Lien moyen |
     * | '04' | Lien fort |
     * | '  ' | N.C. |
     * | 'FP' | Gérant familial principal |
     * | 'FS' | Gérant familial secondaire |
     * | 'PP' | Gérant professionnel principal |
     * | 'PS' | Gérant professionnel secondaire |
     */
    codeQualification: string;

    /**
     * Pourcentage capitalistique
     * **Définition :**
     * Ce taux représente le pourcentage de détention de la mère vis à vis de la fille.
     */
    pourcentageCapitalistique: number;

    /**
     * Numéro du lien interlocuteur
     * **Définition :**
     * Numéro d'identification d'un lien entre une personne morale ou PRO et son interlocuteur.
     * | Caractéristiques du lien |   |
     * | - | - |
     * | Personne morale ou PRO | NODAPE |
     * | Interlocuteur | NODHIN |
     * | Type d'interlocuteur | CTDHIN |
     * | Type de rôle | CTDHRO |
     */
    numero: number;

    /**
     * Libellé du lien inter-personnes
     * **Définition :**
     * Libellé de désignation du lien inter-personnes.
     */
    libelleType: string;

    /**
     * Code du sens lien
     * **Description :**
     * Indique le sens de lecture du lien.
     * **Exemples :**
     * - 1 - Est
     * - 2 - A pour
     */
    codeSens: number;

    /**
     * Code de la personnalité juridique
     * **Description :**
     * Détermine le type de personnalité juridique de la personne.
     * **Valeurs :**
     * | Code | Libellé |
     * | - | - |
     * | "1" | Personne physique |
     * | "2" | Personne morale ou assimilée morale |
     */
    codePersonnaliteJuridique: string;

    /**
     * la référence du locataire. taille 32
     */
    referenceLocataire: string;

    /**
     * taux de droit de vote
     */
    tauxDroitVote: number;

    /**
     * Code catégorie de lien.
     * Valeurs :
     * 0 : Réglementaire, Représentant légal, En lien avec la personne morale
     * 1 : Réglementaire.
     * 5 : Locataires.
     * 7 : En lien avec la Personne Morale.
     * 9 : Représentant légal.
     * 10 : Technique.
     * 11 : Personnes protégées.
     * 12 : De sens "est".
     * 13 : A requalifier
     */
    codeCategorieLien: string;

    /**
     * Déterminer si le lien est éligible à l'ajout aux Sponsors Financiers.
     * Valeurs :
     * « O » si la personne est éligible
     * « N » si non.
     */
    eligibleSponsorFinancier: boolean;

    /**
     * Déterminer si le lien est Sponsor Financier ou non.
     * Valeurs :
     * « O » si la personne 2 est sponsor de la personne morale
     * « N » si la personne 2 n'est pas sponsor de la personne morale.
     * « » si la personne n’est pas concerné
     */
    estSponsorFinancier: boolean;

    /**
     * Pourcentage capitalistique indirect.
     */
    pourcentageCapitalIndirect: number;

    /**
     * Taux de droit de vote indirect.
     */
    tauxDroitVoteIndirect: number;

    /**
     * Code permettant de définir le type de détention en l'absence de détentions de vote ou capital strictement supérieurs à 25%.
     * Valeurs :
     * ' ' valeur par défaut (% de détentions [votes,capital])
     * 'R' Représentant légal (détention du lien au titre de la représentation légale de la PM)
     * 'A' Autre pouvoir de contrôle (détention du lien au titre d'un pouvoir de contrôle sur la PM autre que la détention de vote ou capital, ou la représentation légale).
     */
    codeTypeDetentionPM: string;

    /**
     * Détermine le pourcentage de détention en nue propriété ou usufruit. Le démembrement de propriété est un acte juridique qui consiste à diviser la pleine propriété en nue propriété et usufruit.
     */
    pourcentageDemembrement: number;

    /**
     * Détermine le type de droit de propriété du lien capitalistique : pleine propriété, usufruit ou nue-propriété. Concerne les liens: Bénéficiaire Effectif, Actionnaire et Associé.
     * Valeurs :
     * 'P' Pleine Propriété (pas de démembrement)
     * 'U' Usufruitier
     * 'N' Nue-Propriété
     * ' ' Non concerné
     */
    codeTypeDroitPropriete: string;
  }
  export interface CorporateTiersLies {
    /**
     * Identifiant Tiers
     * **Définition :**
     * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
     * Personne référencée comme client, tiers ou prospect.
     * Numéro chronologique attribué par le système :
     * Référence unique dans MYSYS (identifiant interne)
     */
    identifiantTiers: number;

    listeLien: Lien[];

    /**
     * Code etablissement banque entite juridique
     * **Définition :**
     * Identifiant d'un Etablissement du RCE.
     * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
     * Code interbancaire
     * Nomenclature des sièges des Etablissements du Réseau des Caisses d'Epargne
     * Codif des Caisses: 1er car= 1 et le 5ème = 5
     * **Exemples :**
     * | Code | Libellé |
     * | - | - |
     * | 17515 | CE Ile de France |
     * | 16275 | CE Nord France Europe |
     * | 43199 | Crédit Foncier de France (CFF) |
     */
    codeEtablissement: string;

    /**
     * bordereau à imprimer
     */
    indicateurBordereauImprimer: boolean;

    listeRepresentant: Representant[];
  }
  export interface Representant {
    /**
     * Code établissement
     */
    codeEtablissement: string;

    /**
     * Identifiant personne
     */
    identifiantPersonneMorale: number;

    /**
     * Identifie une personne physique représentant la personne morale
     */
    identifiantPersonnePhysique: number;

    /**
     * Numéro d'identification de l'activité professionnelle
     */
    numeroChrono: number;

    /**
     * 'QCF' Questionnaire de Compétence et d'expertise financière
     * 'QC3' Questionnaire de Compétence Financière pour les Personnes Physiques
     * 'QR1' Questionnaire de Risque Client pour les Personnes Physiques
     */
    codeQuestionnaire: string;

    /**
     * Dénomination banalisée de la personne
     */
    designationCourte: string;

    /**
     * Libellé de désignation du lien inter-personnes
     */
    libelleTypeLien: string;

    /**
     * Niveau de compétence financière détermine lors de la passation du QCF PM par le représentant légal de la personne morale.
     * 'C1'       Novice
     * 'C2'       Apprenti
     * 'C3'       Averti
     * 'C4'       Expert
     * 'P4'       Professionnel Expert
     * Dans le cas d'une restitution de la liste des représentants éligibles (code choix "V"), le niveau de compétence restitué est le niveau de compétence calculé (COD1CC)
     */
    niveauCompetence: string;

    /**
     * 'C1'       Novice
     * 'C2'       Apprenti
     * 'C3'       Averti
     * 'C4'       Expert
     * 'P4'       Professionnel Expert
     */
    libelleNiveauCompetence: string;

    /**
     * Date de passation du questionnaire
     */
    datePassationQuestionnaire: string;

    /**
     * Code sur 4 caractères identifiant le niveau de compétence calculé par l'IHM de passation du QCF PM développé par IBP
     */
    competenceMIF2: string;

    /**
     * Le QCF est valide s'il a été saisi il y a moins de 2 ans
     */
    indicateurValiditeQuestionnaire: string;

    /**
     * Indique si une personne morale appartient à la catégorie professionnelle au sens de la catégorie MIF2
     * Valeurs possibles :
     * '0' Statut non professionnel
     * '1' Statut professionnel
     * '2' Statut professionnel forcé
     * '3' Statut contrepartie éligible
     */
    typeCategorie: string;

    /**
     * '0' Non PRO
     * '1' PRO
     * '2' PRO Forcé (par choix)
     * '3' Contrepartie éligible
     */
    libelleTypeCategorie: string;

    /**
     * Code sur 4 caractères identifiant le niveau d'appetance aux risque de la personne morale.
     * Valeurs:
     * 0: Prudent
     * 1: Pondéré
     * 2: Actif
     */
    niveauQuestionnaireRisque: string;

    /**
     * Le niveau questionnaire risque accompagné de son libellé. Valeurs possible: R0 - refus R1 - Prudent R2 - Pondéré R3 - Offensif
     */
    libelleNiveauRisque: string;

    /**
     * La date de fin de validité du questionnaire risque(QR).
     */
    dateFinValiditeQR: string;

    /**
     * Détermine si la personne morale est représentée par plusieurs personnes physiques 'O' Oui - représentée par plusieurs personnes physiques 'N' Non - représentée par une seule personne physique
     */
    indicateurPmMultiRepresentee: string;

    /**
     * Détermine si la personne morale multi représentée est en lien avec une personne physique de type MIF2 'O' en lien avec une personne physique de type MIF2 'N ' pas en lien avec une personne physique de type MIF2
     */
    indicateurReferentMif2: string;
  }
  export interface RestitutionAdminUPBAD {
    listeAdminUPBAD: AdminUPBAD[];

    listeMessageFonctionnel: MessageFonctionnel[];
  }
  export interface MessageFonctionnel {
    /**
     * Avec le code domaine, ce code message compose l'identifiant réduit du central
     */
    code: string;

    /**
     * Libellé de description de l'anomalie
     */
    libelle: string;
  }
  export interface AdminUPBAD {
    /**
     * Domaine de Valeurs : 000 La requette a normalement aboutie 001 La requette n'a pas aboutie ??? Service indisponible
     */
    codeRetourEchanges: number;

    /**
     * Détermine le type d'abonnement BAD. Valeurs : '1' DEIPRO '2' CENET ...
     */
    typeAbonnementBad: string;

    /**
     * Numéro chrono attribué par le système à chaque ouverture de personne. L'identifiant est unique au sein du CTR. Cela permet d'éviter les conflits d'identifiant en cas de fusion de caisses.
     */
    identifiantPersonne: number;

    /**
     * Dénomination banalisée de la personne : - désignation courte du particulier - libellé libre du lieu d'activité
     */
    designationCourte: string;

    /**
     * Détermine le role-type (profil) d'un utilisateur dans la gestion des abonnements de l'Espace Unique. Typologie gérée dans la table P41Q / appli OCFBDR Valeurs : '0' Administrateur '1' Utilisateur '2' Utilisateur principal
     */
    codeRoleuUilisateurAEU: string;

    /**
     * Libellé de désignation de role-type (profil) d'un utilisateur dans la gestion des Abonnements de l'Espace Unique - 'Admnistrateur' - 'Utilisateur' - 'Admnistrateur-Utilisateur' Attribut géré dans table P41Q /appli OCFBDR
     */
    libelleCourtRoleUtilisateurAEU: string;

    /**
     * Référence d'identification d'une boite à lettre électronique. Chaine de caractères identifiant une boite sur un serveur de messagerie.
     */
    idtAdresseEmail: string;
  }
}
