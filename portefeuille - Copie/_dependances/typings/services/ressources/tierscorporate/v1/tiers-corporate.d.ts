declare module Myway.Ressource.TiersCorporate.Corporateinformation {
  export interface ISituationFinanciere {
    /**
     * **Montant capital social**
     */
    montantCapitalSocial: number;
    /**
     * **Montant chiffre affaires TTC Budget**
     */
    montantChiffreAffaires: number;
    effectif: number;
    /**
     * Jour d'arrêté du bilan d'un professionnel pour un exercice donné.
     * 
     * Format : JJMM
     * Utilisée en complément de l'année du bilan (Annee Chiffre Affaire)
     */
    dateArreteComptable: number;
    /**
     * Année de référence du chiffre d'affaire ou du montant du budget.
     */
    anneeChiffreAffaires: number;
  }

  export interface ICorporateInformation {
    /**
     * **Code situation juridique**
     */
    codeSituationJuridique: string;
    /**
     * **Numero SIREN professionnel**
     * 
     * **Définition :** Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE : Système d'Identification du Répertoire des ENtreprises Identifie de manière unique une entreprise au niveau
     * national. Attribué qu'une seule fois, n'est supprimé du répertoire qu'au moment de la disparition de la personne juridique (décès ou cessation de toute activité pour une personne physique, dissolution pour une personne morale). Compose le numéro SIRET : num établissement
     * 
     * **Format :** Les 8 premiers chiffres n'ont aucune signification, excepté pour les organismes publics (communes,...) dont le numéro SIREN commence obligatoirement par 1 ou 2. Le 9ième chiffre est une clé de contrôle : clé "1-2" suivant l'algorithme de Luhn Un professionnel n'a pas forcément de SIREN, cas des professionnels n'ayant pas d'activité commerciale et/ou n'ayant pas de salariés :
     * 
     * Pour les entreprises étarngères résidant en France : SIREN fictif attribué par le Banque De France dans le cadre de l'identification FIBEN (commence par 200)
     * 
     * En cas de non attribution par l'INSEE : (hors périmètre SIRENE ou inscription en instance) Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne) numéro attribué par le système
     */
    numeroSiren: string;
    /**
     * Code indiquant si l'entreprise est étrangère.
     */
    codeIndicateurEntrepriseEtrangere: string;
    /**
     * **Date creation juridique**
     * Type date au format yyyy-MM-dd
     */
    dateCreationJuridique: string;
    /**
     * **Raison sociale**
     */
    raisonSociale: string;
    /**
     * **Nom commercial**
     */
    nomCommercial: string;
    /**
     * **Code type commerce organise**
     * 
     * Définition :
     * Nature de l'organisation commerciale;
     * caractérise l'activité professionnelle.
     * 
     * Valeur :
     * - ' '        Inconnu
     * - '0'        Non concerné
     * - '1'        Franchisé ou Entreprise Affiliée
     * - '2'        Franchiseur ou Tête de Réseau
     */
    codeTypeCommerceOrganise: string;
    /**
     * Identifie une segmentation de clientèle selon BAFI.
     * 
     * Permet de classifier la clientèle pour les restitutions règlementaires et BAFI.
     * 
     * Format : FSS 
     *  - F : Code famille segmentation BAFI / CODFBF
     *  - SS : Sous code segmentation BAFI / CODCBF
     * 
     * Exemples :
     *  - '107' SOCIETES FINANCIERES
     *  - '302' ENTREPRENEURS INDIVIDUELS
     *  - '303' PARTICULIERS
     */
    codeAgentEconomique: string;
    /**
     * **Identifiant tiers**
     * 
     * **Définition :** Numéro d'identification du tiers dans le SI d'un Etablissement Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
     * 
     * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne)
     */
    identifiantTiers: number;
    situationFinanciere: ISituationFinanciere;
    /**
     * ####Code etablissement banque entite juridique
     * 
     * **Définition :**
     * Identifiant d'un Etablissement du RCE.
     * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
     * Code interbancaire
     * 
     * Nomenclature des sièges des Etablissements du Réseau des Caisses d'Epargne
     * 
     * Codif des Caisses: 1er car= 1 et le 5ème = 5
     * 
     * **Exemples :**
     * 
     * | Code | Libellé |
     * | - | - |
     * | 17515 | CE Ile de France |
     * | 16275 | CE Nord France Europe |
     * | 43199 | Crédit Foncier de France (CFF) |
     */
    codeEtablissement: string;
    /**
     * Code devise ISO 4217 alpha-3
     * 
     * Exemple :
     * EUR
     */
    codeDeviseISO4217a3: string;
    /**
     * 1 minimum
     */
    dureeViePersonneMorale: number;
    /**
     * Détermine un type de pièce justifiant d'une activité/situation professionnelle
     * '00'       EXEMPLAIRE DES STATUTS CERTIFIE CONFORME
     * '01'       EXEMPLAIRE DU JOURNAL OFFICIEL
     * '02'       EXTRAIT DE DELIBERATION SIGNE
     * '03'       COPIE CERTIFIE CONFORME DU J.O
     * '04'       AGREMENT DE L'ASSOCIATION
     * '05'       COPIE DE L'ACTE AUTHENTIQUE OU TESTAMENT
     * '06'       STATUTS DE LA DELEGATION DEPARTEMENTALE 
     * ...
     */
    codePieceJustificative: string;
    /**
     * 'P'        Personne physique
     * 'M'        Personne morale  
     * 'A'        Association
     */
    codeTypeTiers: string;
    /**
     * Mode d'imposition auquel est assujéti un professionnel entreprise ou entrepreneur individuel.
     * Valeurs :
     * 
     * - '1'        Forfait
     * - '2'        Réel
     * - '3'        Impôt sur les sociétés (IS)
     * - '4'        Sans régime particulier
     * - '5'        Réel simplifié
     * - '6'        Impôt sur le revenu des personnes physiques (IRPP)
     */
    codeRegimeFiscal: string;
    /**
     * Représente le code cotation
     */
    codeCotation: string;
    /**
     * Indique le type de relation de la personne vis à vis de l'Etablissement GCE ou du réseau CE.
     * Permet de déterminer le personnel de l'Etablissement et leur famille.
     * 
     * Les valeurs '6' et '9' concernent des personnes morales
     */
    codeAppartenanceReseau: string;
    adresse: IAdresse;
    /**
     * Détermine le statut dans une famille de catégorie juridique donnée : correspond aux 2 derniers caractères du code catégorie juridique INSEE sur 4 caractères.
     */
    codeCategoJuridi2DerCaracteres: string;
    /**
     * **Code famille categorie juridique INSEE**
     */
    codeFamilleCategorieJuridique: string;
    codeGuichetRisque: number;
    referenceExterneEDS: number;
    eligibiliteTiers: string;
    /**
     * deux chiffre
     */
    codeTypeRegistre: string;
    lieuInscriptionRegistre: string;
    dateImmatriculation: string;
    numeroImmatriculation: string;
    sigle: string;
    etablissement: IEtablissement;
    listeMessageFonctionnel: Array<IMessageFonctionnel>;
    /**
     * Mot clé pour recherche OU4A
     */
    listeMotCle: Array<string>;
    /**
     * Numero de chrono d'un pro
     */
    numeroChrono: number;
    /**
     * Code tête de groupe
     * 
     * Précise la situation d'appartenance de la personne vis à vis d'un groupe (grappage)
     * Entité économique formée par un ensemble de sociétés qui sont soit des sociétés contrôlées par une même société, soit cette société est contrôlante.
     * 
     * Valeurs :
     * - '1'        Personne tête de groupe (grappage)
     * - '2'        Personne filiale du groupe (Via lien inter-personnes)
     * - '3'        Personne n'appartenant pas à un groupe
     * - '4'        Personne appartenant à un groupe
     */
    codeTeteGroupe: string;
    troisDerniersCaracteresNAF: string;
    /**
     * **Code famille NAF INSEE**
     * 
     * **Définition :** Cette rubrique permet de définir les deux premiers caractères du code NAF qui correspond à la famille de code activité exercée par le professionnel
     */
    codeFamilleNAFINSEE: string;
    activiteEconomiqueReelleProfessionnelle: string;
    codeAgentEconomiqueTheorique: string;
    codeModeAttributionAgentEconomique: string;
    /**
     * permet d'aiguiller vers les QR concernées.
     * - 0 : Personne connue comme client
     * - 1 : Personne connue comme Tiers
     * - 2 : Personne connue comme prospect
     * - 3 : Personne connue comme Prospect enrichi
     */
    codeTypePersonne: string;
    prospect: IProspect;
    /**
     * indicateur de droits au compte
     */
    indicateurDroitAuCompte: string;
    professionnelImmobilier: IProfessionnelImmobilier;
    dateClotureJuridique: string;
    /**
     * à partir de la V17.01 seulement
     * - Si 'T' : mise à jour complète avec les Immatriculations
     * - Si 'I' : mise à jour des Immatriculations seulement
     * - Sinon mise à jour de corporateInformation sans les Immatriculations
     */
    codeMajImmatriculation: string;
    listeImmatriculation: Array<IImmatriculation>;
    /**
     * Référence d'identification des entités juridiques (LEI : LEGAL ENTITY IDENTIFIER) effectuant des transactions financières.
     */
    identifiantLei: string;
    /**
     * Classification de la personne selon le règlement EMIR / European Market and Infrastructure Regulation.
     * Attribut porté par une contrepartie effectuant une transaction sur le marché des dérivés
     */
    codeEmir: string;
    /**
     * Autorisation donnée par le Client pour que l'Etablissement puisse effectuer des déclarations à sa place (LEI, classification EMIR).
     * 'O'        Etab autorisé à effectuer les déclarations
     * 'N'        Etab non autorisé à effectuer les déclarations
     */
    indicateurDelegationDeclaration: string;
    /**
     * Détermine l'état de blocage d'une personne dans la table Vigilance VAO.
     * 'N'        non bloqué
     * 'B'        bloqué
     * 'D'        débloqué
     */
    codeBlocageVao: string;
    /**
     * indique si la personne "possède" un indice d'américanité
     */
    indiceAmericanite: string;
    /**
     * Cette rubrique indique si le code de classification des personnes morales est renseigné ou non
     */
    indicateurPresenceClassif: string;
    /**
     * Code associé à la branche d'activité.
     * Codification pour l'ensemble des caisses.
     * Donnée relative aux personnes morales et entrepreneurs individuels, basée sur une approche commerciale ou sectorielle, permettant de paramétrer des      regroupements fonctionnels de codes NAF.
     * Format XX9999
     */
    brancheActivite: string;
    /**
     * Indicateur Prospect restreint
     */
    indicProspectRestreint: boolean;
    /**
     * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes : '0' Actif '1' Cloturé
     */
    codeEtatPersonne: string;
    /**
     * Valeurs possibles : '0' Personne connue comme client '1' Personne connue comme tiers '2' Personne connue comme prospect '3' Personne connue comme prospect enrichi
     */
    typeRelation: string;
  }

  export interface IAdresse {
    /**
     * Numéro d'identification de l'adresse en tant que localisation géographique.
     */
    identifiant: number;
    /**
     * Détermine la nature/finalité d'une adresse.
     * Valeurs :
     * - '1'        adresse légale (domicile) localisation pour un lieu d'activité
     * - '4'        adresse communication (correspondance)
     * - '6'        adresse spéciale communication
     */
    codeType: string;
    /**
     * Détermine si la personne (client) accepte de recevoir du courrier                                         
     * Valeurs :                                         
     * '0'        envoi de courrier
     * '1'        pas d'envoi de courrier
     */
    indicateurEnvoiCourrier: string;
    /**
     * Permet de savoir qui est le possesseur de l'adresse.
     * 
     * Valeurs :
     * - 1          PERSONNE
     * - 2          LIEU D'ACTIVITE
     * - 3          ENTITE JURIDIQUE          (pas géré)
     * - 4          ELEMENT DE STRUCTURE      (pas géré)
     */
    codeTypeLieu: string;
    /**
     * Libellé de la ligne 2 d'une adresse normée AFNOR.
     * La ligne 2 permet d'indiquer le point de remise ou un complément d'identification du destinataire. La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
     */
    ligne2AdresseAFNOR: string;
    /**
     * Libellé de la ligne 3 d'une adresse normée AFNOR. La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution). La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment (entrée, bâtiment, bloc, tour etc.)
     */
    ligne3AdresseAFNOR: string;
    /**
     * Libellé de la ligne 4 d'une adresse normée AFNOR. La ligne 4 permet d'identifier la voie de destination. Peut comprendre, le numéro dans la voie, type et nom de voie, le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit, un service X, une boîte postale ou un numéro de CEDEX.
     */
    ligne4AdresseAFNOR: string;
    /**
     * Libellé de la ligne 5 d'une adresse normée AFNOR.
     * La ligne 5 permet d'identifier la destination. Peut comprendre, le nom d'un quartier, d'un lieu-dit, d'un hameau, le nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu-dit et possédant plusieurs voies internes.
     */
    ligne5AdresseAFNOR: string;
    /**
     * Libellé de la ligne 6 d'une adresse normée AFNOR.
     * La ligne 6 permet d'identifier la destination. Peut comprendre, le numéro de code postal et nom de la localité, le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX.
     */
    ligne6AdresseAFNOR: string;
    /**
     * Indique le numéro de la voie
     */
    numeroVoiePTT: number;
    /**
     * Numéro code postal PTT
     */
    codePostalPTT: string;
    /**
     * Détermine le quartier d'une adresse
     */
    codeQuartier: string;
    /**
     * Numéro de la tournée du facteur
     */
    numeroTourneeFacteur: number;
    /**
     * Numéro de téléphone associé à une adresse
     */
    numeroTelephoneAdresse: string;
    /**
     * Identifie une commune / lieu-dit selon la nomenclature INSEE.
     */
    codeInseeLocalite: string;
    /**
     * code validité de l'adresse
     * "00"       adresse correcte
     * "XY"       adresse forcée
     *            X : contrôle analyse syntaxique  
     *            Y : contrôle analyse géographique
     */
    codeValiditeAdresse: string;
    /**
     * '0'        Pas en liste rouge
     * '1'        En liste rouge
     */
    codeExistenceListeRouge: string;
    /**
     * numero du fax
     */
    numeroFax: string;
    /**
     * '1'        Ne détient pas de téléphone
     */
    indicateurDetentionTelephone: string;
    /**
     * Cette donnée précise à quoi correspond le téléphone
     */
    commentaireTelephone: string;
    /**
     * Indique le numéro de la voie du fichier HEXAVIA pour les voies francaises répertoriées.
     */
    numeroVoieHexavia: number;
    /**
     * Code postal pour la France et l'étranger :
     * Sur 5 caractères pour la France
     * Sur 9 caractères pour l'étranger : peut être en alphanumérique
     */
    codePostalFranceEtEtranger: string;
    /**
     * Libellé localité
     */
    libelleInseeLocalite: string;
    /**
     * identifie un pays selon la nomenclature AFNOR
     */
    codePaysISO: string;
    /**
     * ' '        Client ne détient pas de Minitel.
     * '1'        Client accède par un Minitel.
     * '2'        Client accède par autre chose que le Minitel
     */
    codeAccesMinitel: string;
    /**
     * Identifie un pays ou territoire selon la norme INSEE.
     */
    codeInseePays: string;
  }

  export interface IEtablissement {
    /**
     * Libellé libre du lieu d'activité.
     */
    designationCourteLieuActivite: string;
    /**
     * Désignation longue du lieu activité. Elle est utilisée pour l'impression du volet un de l'adresse. Elle correspond :
     * 
     * aux nom et prénom pour la personne physique
     * à la raison sociale pour la personne morale.
     */
    designationLongueLieuActivite: string;
    /**
     * Date de début d'exploitation de l'établissement.
     * Type date au format yyyy-MM-dd
     */
    dateDebutExploitationLieuActivite: string;
    /**
     * Résidents :
     * 
     * Personnes physiques ayant leur principal centre d'intérêt en FRANCE
     * Fonctionnaires et autres agents publics français en poste à l'étranger
     * Personnes morales françaises ou étrangères pour leur établissement en FRANCE La France est définie comme suit :
     * France métropolitaine (avec la principauté de MONACO )
     * DOM (avec Saint-Pierre et Miquelon))
     * TOM (avec Mayotte)..
     * Non résidents :
     * 
     * Personnes physiques ayant leur principal centre d'intérêt à l'étranger
     * Fonctionnaires et autres agents publics étrangers en poste en FRANCE
     * L'étranger est défini comme suite :
     * 
     * Pays autre que la France (y compris les Etats dont l'Institut d'Emission est lié au Trésor Français par un compte d'opérations).
     * La distinction entre les deux types de non-résidents
     * Non-résident zone euro :
     * Personnes appartenant à un un Etat membre de la zone de monnaie unique (EMUM),hors-France,
     * 
     * Non-résident hors zones euro :
     * Personnes appartenant à un autre pays étranger (non-EMUM).
     * 
     * - '1' Résident
     * - '2' Non Résident
     */
    codeResident: string;
    /**
     * **Numéro complément SIRET établissement**
     * 
     * **Définition :** Numéro interne de classement attribué à un établissement appartenant à une entreprise par l'INSEE Identifie un établissement au sein d'une entreprise répertoriée à l'INSEE. Complète le SIREN pour constituer le SIRET
     * 
     * **Format :**
     * numéro d'ordre séquentiel X4
     * clé de controle du numéro SIRET : algo Luhn "1-2"
     */
    numeroComplementSIRET: string;
    dateFinExploitation: string;
  }

  export interface IMessageFonctionnel {
    /**
     * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur. Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
     * 
     * la partie utile du code entité (sur 4 car.) . pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé) . pour un segment, elle correspond aux 4 carac. codifiant le segment.
     * le rang de la rubrique (sur 3 car.)
     * le type de l'erreur (sur 1 car.)
     */
    code: string;
    /**
     * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
     */
    libelle: string;
  }

  export interface IProspect {
    /**
     * Détermine un segment de clientèle dans une typologie donnée :
     * AC : Activation Clientèle Particuliers
     * AP : Activation Clientèle Professionnel
     * FC : Fréquence Client Personne
     * FP : Fréquence Client PRO
     * FR : Fréquence Client Relation
     * MN : Marché national
     * SA : Activation Clientèle V2
     * SU : Univers Client
     */
    codeSegmentation: string;
    /**
     * Numéro d'identification du portefeuille de clientèle
     * Regroupement de la clientèle pour la gestion commerciale :
     * Ensemble de relations économiques affecté ou non à un poste fonctionnel ou à une agence.
     * Une relation peut être hors portefeuille
     */
    numeroPortefeuille: number;
    /**
     * Détermine la typologie de segmentation clientèle. 
     * Correspond au 2 premiers caractères du code   segmentation sur 8 caractères     
     * Types :
     * - Activation Clientèle. Segmentation comportementale des Particuliers
     * - Fréquence : Profils client portant des objectifs commerciaux
     * - Code marché : Segmentation des secteurs d'activités       
     * - Univers Client.  Profil équipement Client
     * "AC"       Activation Clientèle Particulier
     * "AP"       Activation Clientèle Professionnel
     * "FC"       Fréquence Client
     * "FP"       Fréquence PRO
     * "FR"       Fréquence Relation
     * "MN"       Marché national
     * 'SL'       Spécifique VAO pour progiciel Norkom (i-BP)
     * 'SA'       Activation Clientèntèle v2
     * 'SU'       Univers de détention
     */
    codeTypeSegmentation: string;
  }

  export interface IProfessionnelImmobilier {
    /**
     * Réponse arbre de décision                     
     * Indicateur de réponse à la première question :
     * Socièté Civile Immobilière Patrimoniale       
     * 'N'        Non
     * 'O'        Oui
     * ' '        NC
     */
    indicateurSteCivileImmoPatrimoniale: boolean;
    /**
     * Réponse arbre de décision PIM                 
     * Indicateur de réponse à la deuxième question :
     * Société d'exploitation                        
     * 'N'        Non
     * 'O'        Oui
     * ' '        NC
     */
    indicateurSocieteExploitation: boolean;
    /**
     * arbre de décision PIM                               
     * Indicateur de réponse à la question 3a :            
     * Structure dédiée à une opération immobilière maximum
     * 'N'        Non
     * 'O'        Oui
     * ' '        NC
     */
    indicateurStrDedieeA1OpeImmoMax: boolean;
    /**
     * arbre de décision PIM                             
     * Indicateur de réponse à la question 3b :          
     * Avec garantie prise sur l'actif immobilier financé
     * 'N'        Non
     * 'O'        Oui
     * ' '        NC
     */
    indicateurGarantieSurActifImmoFi: boolean;
    /**
     * Indicateur de réponse à la question 3c :             
     * La Structure Assure-t-elle elle-même le remboursement
     * des concours ?                                       
     * 'N'        Non
     * 'O'        Oui
     * ' '        NC
     */
    indicateurStrRemboursementDesConcours: boolean;
    /**
     * Arbre de décision PIM                      
     * Indicateur de réponse à la question 3d :   
     * Exercice de plus d'une activité immobilière
     * 'N'        Non
     * 'O'        Oui
     * ' '        NC
     */
    indicateurExerciceSup1ActiviteImmo: boolean;
    /**
     * Classification des professionnels de l'immobilier   
     * dans le cadre de la segmentation de la clientèle.   
     * Code déterminé en fonction des réponses à l'arbre de
     * décision des Prof de l'Immobilier.                  
     * attribut du Prof mémorisé dans la table DU40 / appli
     * SEGMENTATION SADS                                   
     *            Valeurs possibles :                               
     * 'ENFI'     Entrep. clientèles Non Financières de l'Immobilier
     * 'FSI'      Financements Spécialisés de l'Immobilier          
     * 'EXP'      société d'EXPloitation                            
     * 'PAT'      société PATrimoniale                              
     * 'ENFI2'    autres professionnels de l'immobilier
     */
    codeCategorieProfImmo: string;
    /**
     * Timestamp de création du questionnaire PIM
     */
    timestampCreationQuestionnairePIM: string;
  }

  export interface IImmatriculation {
    /**
     * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
     */
    codeEtablissement: string;
    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire
     */
    identifiantPersonne: number;
    /**
     * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe CE.
     */
    numeroChronoProfesionnel: number;
    /**
     * Détermine un registre officiel en France permettant l'immatriculation de personnes ou la publication d'informations
     * 01         RCS (Registre du commerce et des sociétés)
     * 02         RM (Répertoire des métiers)
     * 03         MSA (Mutualité sociale agricole)
     * 04         Publication journal officiel
     * 05         Préfecture
     * 06         Mairie
     * 07         Ordre des métiers
     * 08         Autres
     */
    codeTypeRegistre: string;
    /**
     * Numéro d'immatriculation à un registre officiel       
     * d'un professionnel.                                   
     *                                                       
     * Ce numéro peut être notamment :
     *  - un numéro RCS
     *  - un numéro Registre des métiers
     *  - un numéro d'inscription à la préfecture
     *  - un numéro d'inscription à la MSA
     *  - un ordre des métiers pour les professions libérales
     *  - un numéro de publication au JO
     */
    numeroImmatriculationRegistre: string;
    /**
     * Libellé du lieu d'inscription au registre.
     */
    lieuInscriptionRegistre: string;
    /**
     * Date à laquelle une personne est immatriculé en tant que professionnel auprès d'un organisme habilité.
     * Type date au format yyyy-MM-dd
     */
    dateImmatriculation: string;
  }

}
