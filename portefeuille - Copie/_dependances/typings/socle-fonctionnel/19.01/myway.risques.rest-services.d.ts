
declare namespace Contentieux.RestServices.Commun.Constantes.Inject {
    namespace Angular {
        const $q: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
    }
    namespace Service {
        const restService: string;
        const dossierService: string;
        const alerteService: string;
        const edsService: string;
        const personneService: string;
        const soldeService: string;
        const tiersService: string;
    }
}

declare namespace Contentieux.RestServices {
    var app: any;
}

declare namespace Contentieux.RestServices.Modeles {
    interface IAlerteProcedureCollective {
        numeroDossier: number;
        dateAlerte: string;
        portefeuille: string;
        identifiantEntiteTitulaire: string;
        libelleAlerte: string;
        exigible: number;
        montantCRD: number;
        motif: string;
        numeroPersonneGarantie: number;
        montantTotal: number;
    }
    interface IAlerteSurendettement {
        numeroDossier: number;
        dateAlerte: string;
        portefeuille: string;
        identifiantEntiteTitulaire: string;
        libelleAlerte: string;
        motifRejet: string;
    }
    interface IAlerteEcheancier {
        numeroDossier: number;
        identifiantEntiteTitulaire: string;
        dateAlerte: string;
        portefeuille: string;
        libelleAlerte: string;
        numeroPersonneGarantie: number;
        nombreAlerteDossier: number;
    }
    interface IAlerteActionPlanifiee {
        dateAlerte: string;
        portefeuille: string;
        identifiantEntiteTitulaire: string;
        libelleAlerte: string;
        commentaire: string;
        prioriteAlerte: string;
        numeroDossier: number;
    }
    interface IAffectationDossier {
        numeroDossier: number;
        dateAffectation: string;
        portefeuille: string;
        motif: string;
        identifiantEntiteTitulaire: string;
        montantContentieux: number;
        montantImpaye: number;
        montantCRD: number;
        exigible: number;
        montantTotal: number;
        numeroPersonneGarantie: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICaracteristiqueAgent {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Référence externe agent
         */
        identifiantAgent: number;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephoneAgent: string;
        /**
         * Adresse messagerie
         */
        adresseEMailAgent: string;
        /**
         * Date de fin de validité référentiel
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Nom usage Personne Physique
         */
        nomUsageAgent: string;
        /**
         * Premier prénom état civil Personne
         */
        prenomAgent: string;
        /**
         * Code civilité personne physique
         */
        civiliteAgent: string;
        /**
         * Nom famille Personne Physique
         */
        nomAgent: string;
        /**
         * Indic agent non nominatif
         */
        indicateurNonNominatifAgent: string;
        /**
         * Indic agent affectable
         */
        indicateurAffectableAgent: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IListeContrats {
        listeContrats: Array<IContrat>;
    }
    interface IContrat {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Correspond au code Banque sous lequel un Etablissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Guichet d'appartenance du contrat / compte.
         */
        codeGuichet: string;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S.
         */
        codeTypeProduitService: string;
        /**
         * Référence d'identification d'un compte, service, crédit... contrat détenu par un client d'un Etablissement bancaire sur la plateforme Mysys.
         */
        referenceProduitService: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement bancaire ou financier sur la plateforme Mysys.
         */
        numeroEntiteTitulaireContrat: number;
        /**
         * Indique l'état du contrat
         *
         *            Valeurs :
         *            'O'        Ouvert
         *            'C'        Clos
         */
        codeEtatContrat: string;
        /**
         * Libellé de désignation d'un type de produit ou service au format long.
         *
         * Valeurs exemples :
         * 'Livret A'
         * 'Capecureuil'
         */
        libelleTypeProduitService: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys.
         */
        identifiantPersonneContrat: number;
        /**
         * Détermine le rôle d'une personne dans la gestion d'un contrat.
         *
         *             Valeurs :
         *              '01'       Titulaire
         *              '02'       Mandataire
         *              '03'       Caution
         *              '04'       Autre participant
         */
        codeRolePersonneContrat: string;
        nomPPContrat: string;
        prenomPPContrat: string;
        designationPPContrat: string;
        raisonSocialePMContrat: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.Tiers {
    interface ISituationFinanciere {
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
    interface ICorporateInformation {
        /**
         * **Code situation juridique**
         */
        codeSituationJuridique: string;
        /**
         * **Numero SIREN professionnel**
         *
         * **Définition :** Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
         * Système d'Identification du Répertoire des ENtreprises Identifie de manière unique une entreprise au niveau
         * national. Attribué qu'une seule fois, n'est supprimé du répertoire qu'au moment de la disparition de la personne juridique
         * (décès ou cessation de toute activité pour une personne physique, dissolution pour une personne morale). Compose le numéro SIRET : num établissement
         *
         * **Format :** Les 8 premiers chiffres n'ont aucune signification, excepté pour les organismes publics (communes,...)
         * dont le numéro SIREN commence obligatoirement par 1 ou 2.
         * Le 9ième chiffre est une clé de contrôle : clé "1-2" suivant l'algorithme de Luhn Un professionnel n'a pas forcément de SIREN, cas des professionnels n'ayant pas d'activité commerciale et/ou n'ayant pas de salariés :
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
        /**
         * Mode d'attribution de l'agent économique BDF de la personne morale.
         *
         * L'agent économique peut être calculé automatiquement, forcé techniquement ou forcé par saisie au PTU.
         *
         * Le forcage est technique quand le calcul n'aboutit pas, la valeur par defaut de "301" est alors forcé pour le code agent économique.
         *
         *
         * Valeurs:
         * ' ' : Calculé
         *
         * 'T' : Forcage technique
         *
         * 'M' : Forcage manuel
         */
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
        /**
         * Indique si une Société est Cotée sur un marché réglementé
         */
        indicateurMarcheReglemente: boolean;
        referenceInterneEDS: number;
        /**
         * Date de fin  souscription LEI
         * Type date au format yyyy-MM-dd
         */
        dateFinSouscriptionLei: string;
    }
    interface IAdresse {
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
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identification du destinataire.
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2AdresseAFNOR: string;
        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR.
         * La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution). La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment (entrée, bâtiment, bloc, tour etc.)
         */
        ligne3AdresseAFNOR: string;
        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR.
         * La ligne 4 permet d'identifier la voie de destination.
         * Peut comprendre, le numéro dans la voie, type et nom de voie, le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit, un service X, une boîte postale ou un numéro de CEDEX.
         */
        ligne4AdresseAFNOR: string;
        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR.
         * La ligne 5 permet d'identifier la destination.
         * Peut comprendre, le nom d'un quartier, d'un lieu-dit, d'un hameau, le nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu-dit et possédant plusieurs voies internes.
         */
        ligne5AdresseAFNOR: string;
        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR.
         * La ligne 6 permet d'identifier la destination.
         * Peut comprendre, le numéro de code postal et nom de la localité, le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX.
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
    interface IEtablissement {
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
         * **Définition :** Numéro interne de classement attribué à un établissement appartenant à une entreprise par l'INSEE Identifie un établissement au sein d'une entreprise répertoriée à l'INSEE.
         * Complète le SIREN pour constituer le SIRET
         *
         * **Format :**
         * numéro d'ordre séquentiel X4
         * clé de controle du numéro SIRET : algo Luhn "1-2"
         */
        numeroComplementSIRET: string;
        dateFinExploitation: string;
    }
    interface IMessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur. Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         *
         * la partie utile du code entité (sur 4 car.) .
         * pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé) .
         * pour un segment, elle correspond aux 4 carac. codifiant le segment.
         * le rang de la rubrique (sur 3 car.)
         * le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
    interface IProspect {
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
    interface IProfessionnelImmobilier {
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
    interface IImmatriculation {
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

declare namespace Contentieux.RestServices.Modeles {
    interface IGarantie {
        dateFinGarantie: string;
        surete: ISurete;
    }
    interface ISurete {
    }
    interface ISuretePersonnelle extends ISurete {
        quotite: number;
        numeroPersonne: number;
    }
    interface ISureteReelle extends ISurete {
        montant: number;
        libelleGarantie: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.IInfosDossierAdministratif {
    interface IInfosDossierAdminist {
        /**
         * Numéro d'identification d'un portefeuille de gestion
         * de dossiers de créances en Recouvrement dans un
         * Etablissement donné du GCE (anciennement rédacteur).
         */
        portefeuille: string;
        /**
         * Date de la dernière entrée d'un dossier dans VARIO
         * Type date au format yyyy-MM-dd
         */
        dateDerniereEntree: string;
        /**
         * Détermine la cause d'entrée en gestion du
         * Recouvrement d'une créance donnée
         */
        motif: string;
        siren: string;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement du GCE.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Numéro d'identification d'un dossier de créances
         * de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * ARCHIVE / CLOS / EN COURS DE CESSION / CEDE / SURENDETTEMENT / PROCEDURE COLL
         */
        etiquette: string;
        /**
         * Date d'ouverture du jugement.
         * Type date au format yyyy-MM-dd
         */
        jugementDu: string;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement bancaire sur la plateforme
         * Mysys
         * Personne référencée comme client, tiers ou prospect.
         */
        cedeA: number;
        /**
         * Cette date détermine la date à laquelle le
         * gestionnaire a effectué la cession d'un paquet
         * de créances à un même cessionnaire.
         * Type date au format yyyy-MM-dd
         */
        dateCession: string;
        /**
         * Date de cloture adminisistrative du dossier de
         * créances dans la gestion du Recouvrement
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
    }
}

declare namespace Contentieux.RestServices.Modeles.InfosDossierContrat {
    interface IInfosDossierContrat {
        nombreContratRegularise: number;
        listeContrat: Array<IContrat>;
    }
    interface IContrat {
        /**
         * Libellé long associé à un produit participant au
         * catalogue des produits de crédit offerts au client.
         */
        nature: string;
        /**
         * Identifie un contrat détenu par un client auprès
         * d'un Etablissement du Groupe CE :
         * Concerne l'épargne, les engagements, les services ...
         */
        reference: string;
        /**
         * Montant actualisé de la créance correspondant à un
         * un contrat de crédit ou d'engagement en Recouvrement.
         */
        dettes: Array<IDette>;
        /**
         * sous-traitance / déchu / débiteur / impayé
         */
        etiquetteContrat: string;
        etatEcheancier: string;
        /**
         * Date à partir de laquelle est déterminée la date de
         * forclusion pour une créance
         * Type date au format yyyy-MM-dd
         */
        dateDefaillance: string;
        /**
         * Date de fin de contentieux
         * Type date au format yyyy-MM-dd
         */
        dateRegularisation: string;
        /**
         * 'O' débranchement synchro possible
         * 'N' débranchement synchro impossible
         */
        topSynchro: string;
        /**
         * Numéro d'identification d'une créance de la clientèle
         * dans la gestion du Recouvrement.
         * Une créance correspond à la fraction ou la totalité
         * des sommes dûes par un client sur un contrat de crédit
         * ou un engagement.
         */
        identifiantCreance: string;
        /**
         * 01         Créance en cours
         * 02         Créance levée
         */
        codeActiviteCreance: number;
        /**
         * 0         Créance vive  --> pre-ouverture
         * 1         Créance morte --> déchue
         */
        codeDecheanceDuTerme: number;
        /**
         * Définition :
         *             Détermine la situation du crédit au regard du
         *             statut comptable douteux.
         *
         *             Valeurs possibles :
         *  'O'        Douteux
         *  'N'        Sain
         *  'P'        Passage en douteux
         *  'C'        Douteux compromis
         *  'S'        Surendettement
         */
        codePassageCreditStatutDouteux: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou
         * d'un Etablissement du Groupe CE) est répertorié par
         * la Banque de France
         */
        codeGuichetInterbancaire: string;
        nombreGarantie: number;
        topSolde: string;
        libelleTypeContrat: string;
    }
    interface IDette {
        /**
         * décrit le type de la dette
         */
        type: string;
        montant: number;
        nbImpaye?: number;
        montantCumuleEcheancesReportees?: number;
    }
}

declare namespace Contentieux.RestServices.Modeles.InfosDossierHisto {
    interface IContainer {
        evenementATraiter: Array<IEvenement>;
        evenementRealises: Array<IEvenement>;
        evenementFutur: Array<IEvenement>;
    }
    interface IEvenement {
        /**
         * Cette date représente la date effective de l'événement
         * Type date au format yyyy-MM-dd
         */
        dateEvenement: string;
        /**
         * A chaque code type et sous type événement, est
         * associé un libellé.
         * Exemple :
         * Pour un type événement 'Ouverture', il existe
         * sous types suivants :
         *   - Préouverture prêt
         *   - Prise en compte d'une créance
         */
        sousTypeEvenement: string;
        /**
         * Pour les types événement 'ouverture', 'Aggravation',
         * 'Encaissement' et 'Fermeture' cette date contient la
         * date de traitement de l'événement.
         * Pour les types événement 'Notes d'alerte' et 'Notes
         * de suivi' , cette date contient la date de saisie de
         * la validation de la note. Elle vaut '0001-01-01' si
         * la note n'est pas validée.
         * Type date au format yyyy-MM-dd
         */
        dateValidation: string;
        /**
         * Personne à l'origine de l'evenement
         */
        redacteur: string;
        /**
         * Identifie un contrat détenu par un client auprès d'un Etablissement du Groupe CE
         */
        identifiantContrat: string;
        /**
         * C'est la date de la saisie de l'événement.
         * En cas de création BATCH, c'est la date du traitement
         * de l'événement.
         * Type date au format yyyy-MM-dd
         */
        dateCreationEvenement: string;
        /**
         * Pour les types événement 'ouverture', 'Aggravation',
         * 'Encaissement' et 'Fermeture' ce libellé est à blanc.
         * Pour les types événement 'Notes d'alerte' et 'Notes
         * de suivi' , c'est la valeur de la saisie lors de la
         * création de la note.
         */
        commentaire: string;
    }
    interface IEvenementProcedure extends IEvenement {
        libelleEtape: string;
        libelleProcedure: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IInfosDossier {
        /**
         * Numéro d'identification d'un dossier de créances de la clientèle dans la gestion du Recouvrement.
         */
        numeroDossier: number;
        /**
         * Détermine la date de création du dossier
         */
        dateCreation: string;
        /**
         * indique l'étape du cycle de vie d'un dossier de créances dans la gestion du Recouvrement :
         * 'amiable' ou en 'contentieux'
         * Valeurs possibles :
         *   'A'        Amiable
         *   'C'        Contentieux
         */
        phaseRecouvrement: string;
        /**
         * Cette donnée permet de bloquer la clôture automatique des dossiers.
         * Valeurs possibles :
         *   'O'        Blocage de la régularisation
         *   'N'        Pas de blocage de la régularisation
         */
        blocageCloture: boolean;
    }
    interface IListeDossierET {
        dossierET: Array<IDossierET>;
    }
    interface IDossierET {
        numeroDossier: number;
        identifiantEntiteTitulaire: string;
        portefeuille: string;
        motif: string;
        montantImpaye: number;
        montantContentieux: number;
        statutDossierConsultable: string;
        dateBlocageConsultation: string;
        dateReactivationConsultation: string;
        dateSuppressionPrevisionelle: string;
        identifiantAgent: string;
        montantCRD: number;
        exigible: number;
        montantTotal: number;
        etiquette: string;
        cedeA: string;
        dateCession: string;
        dateCloture: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
        listePersonneMandataire: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne  V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *  - 1 Usage privé
         *  - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         *  - 1 mode simple
         *  - 2 mode joint entre époux
         *  - 3 mode joint entre tiers
         *  - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         *  - 0 Actif
         *  - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateMAJEntiteTitulaire: string;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         *  - ' ' Non clôturé
         *  - '1' Plus d'activité bancaire
         *  - '2' Décédé
         *  - '3' Transféré
         *  - '4' Incident
         *  - '5' Indésirable
         *  - '6' Séparé
         *  - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        /**
         * Date de fermeture de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateClotureEntiteTitulaire: string;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         *  - 1 Mode indivision successorale
         *  - 2 Mode indivision conventionnel avec solidarité
         *  - 3 Mode indivision conventionnel sans solidarité
         */
        sousCodeModeCompositionET: string;
        /**
         * Numéro d'identification de l' agent de gestion de l'entité titulaire.
         */
        codeAgentGestionEntiteTitulaire: number;
        /**
         * Libellé de l'EDS de Gestion de l'entité titulaire.
         */
        libelleEDSGestionEntiteTitulaire: string;
        /**
         * Libellé associé au Code Etat de l'entité titulaire.
         */
        libelleEtatEntiteTitulaire: string;
        /**
         * Libellé associé au Type de désignation de l'entité titulaire.
         */
        libelleTypeDesignationEntiteTitulaire: string;
        /**
         * Libellé associé au Code usage de l"entité titulaire.
         */
        libelleUsageEntiteTitulaire: string;
        /**
         * Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        /**
         * Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        /**
         * Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique.
         */
        identifiantAdresseEntiteTitulaire: number;
        /**
         * Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire, du mode de composition et de l'usage.
         * Valeurs :
         *  * POUR ET MODE SIMPLE
         *  11 Désignation de la personne
         *  * POUR ET A USAGE PROFESSIONNEL
         *  21 Nom commercial
         *  22 Désignation courte de l'établissement
         *  23 Enseigne commerciale de l'établissement
         *  * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         *  PRIVE
         *  31 Mr ou Mme+nom patronymique Mr+prénom Mr
         *  32 Mr ou Mme+nom patronymique Mr+nom
         *  patronymique Mme+prénom Mme
         *  * POUR ET MODE JOINT ET USAGE PRIVE
         *  41 Désignation personne 1 ou désignation
         *  personne 2
         *  42 Désignation personne 2 ou désignation
         *  personne 1
         *
         *  99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
        /**
         * Type élément structure
         */
        typeElementStructure: string;
        /**
         * Référence externe du Domicilié à = EDS de domiciliation de l'entité titulaire
         */
        refExterneEDSDomiciliationET: number;
        /**
         * Référence externe du Géré par = EDS de gestion de l'entité titulaire
         */
        refExterneEDSGestionET: number;
        /**
         * identifiant élement de structure du guichet de l'entité titulaire
         */
        identifiantEDSGuichet: number;
        /**
         * Nouvelle identifiant élement de structure gestion de l'entité titulaire
         */
        identEDSGestionETNouveau: number;
        /**
         * Nouvelle identifiant élement de structure domicilation de l'entité titulaire
         */
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonneEntiteTitulaire {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe BPCE.
         * Numéro chrono attribué par le système.
         * Une personne morale est enregistrée sous une seule activité : valeur 1.
         * Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono.
         * Un professionnel est référencé dans le SI d'un Etablissement du Groupe BPCE par :
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         * Constitue une référence unique dans MYSYS.
         */
        identifiantProfessionnel: number;
        /**
         * Numéro d'identification du lieu d'activité d'un
         * professionnel dans le SI d'un Etablissement du Groupe BPCE.
         * Implantation d'une activité d'un professionnel.
         * Peut correspondre à un établissement au sens INSEE.
         * Numéro chrono attribué par le système.
         * Identification du lieu :
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         *  - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         *  - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         *  - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
         * Valeurs :
         * '0' non responsable
         * '1' responsable
         */
        indicateurResponsableCompteET: string;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire.
         * Numéro chrono attribué par le système à chaque création de personne dans l'ET.
         */
        codeRangEntiteTitulaire: string;
        /**
         * Indique quelle est la nature du lien Personne / Entité titulaire.
         * Valeurs :
         * PE : Lien Entité Titulaire / Personne
         * PR : Lien Entité Titulaire / Professionnel
         * LA : Lien Entité Titulaire / Lieu d'activité
         */
        natureLienET: string;
        /**
         * Pourcentage de Nue Propriété (valeur max 100,00 %)
         */
        pourcentageNuePropriete: number;
        /**
         * Pourcentage de pleine propriété (valeur max 100,00 %)
         */
        pourcentagePleinePropriete: number;
        /**
         * Pourcentage d'usufruit (valeur max 100,00 %)
         */
        pourcentageUsufruit: number;
        /**
         * Dénomination commerciale se rapportant à un fonds
         * de commerce exploité par une société ou assimilée
         * Nom commercial du professionnel. C'est la dénomination vis à vis de la clientèle. Elle peut correspondre à l'enseigne. Une société peut avoir un nom commercial différent pour chacun des fonds de commerce qu'elle exploite.
         * Exemples :  La Samaritaine, But ...
         */
        nomCommercialProfessionnel: string;
        /**
         * Enseigne du lieu d'activité d'un professionnel.
         * Signe/marque/appellation apposé sur un établissement commercial le distinguant des autres établissements. L'enseigne peut être commune.
         * Elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         * Exemple : Café du Commerce
         */
        enseigneCommercialeLieuActivite: string;
        /**
         * Libellé court du lieu d'activité du Professionnel.
         */
        designationCourteLieuActivite: string;
        /**
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         *  - Désignation courte du particulier si personne physique
         *  - Nom commercial si professionnel
         *  - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationTiers: string;
        /**
         * Personne titulaire à qui on a affecté l'adresse de l'entité titulaire. (Notion non applicable aux usufruitiers).
         */
        indicateurAffectationAdresse: boolean;
        /**
         * Le type de mandat permet d'enregistrer une
         * procuration qu'accorde un client sur tout
         * ou partie de ses comptes à une autre personne.
         *
         *            Valeurs :
         * 'G'        Procuration générale (sauf CDD,cpte titre,coffre)
         *            On donne procuration sur tous les comptes
         *            de la personne.
         * 'P'        Procuration générale par compte
         *            On donne procuration sur un compte
         *            en disposition
         * 'PS'       Procuration spéciale d'administration
         *            On donne le droit de gérer le compte, mais
         *            pas d'en bénéficier.
         * 'K'        Procuration spéciale porteur de carte pro
         *            On donne procuration sur les comptes support
         *            pour détention de carte
         */
        typeMandat: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IMedia {
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentificationPersonne {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le  SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
    }
    interface IListeMedia {
        /**
         * '01'       Téléphone fixe
         * '02'       Téléphone mobile
         * '03'       E-mail
         * '04'       Fax
         * '05'       SiteWeb
         */
        codeTypeMedia: string;
        /**
         * libellé type média
         */
        libelleTypeMedia: string;
        /**
         * 'P'        Personnel
         * 'T'        Professionnel
         * 'A'       Sécurisation Opérations en Ligne (SOL)
         */
        codeTypeUsageMedia: string;
        /**
         * libellé type usage média
         */
        libelleTypeUsageMedia: string;
        /**
         * ‘O’        Oui
         * ‘N’        Non
         */
        indicateurPreferenceMedia: boolean;
        /**
         * Adresse mail ou n° de téléphone
         */
        referenceAccesMedia: string;
        /**
         * Indique si le client accepte d'être contacté par ce moyen de contact (Mail, téléphone).
         * Valeurs possibles :
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurOptin: boolean;
        /**
         * commentaire d'un numero de telephone
         */
        commentaire: string;
        /**
         * Code indicatif téléphone international
         */
        indicatifTelephone: string;
        /**
         * Un téléphone défini comme étant sécurisé est celui qui sera utilisé pour les transactions en ligne, les opérations sécurisées...
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurSecu: boolean;
        /**
         * Option choisie par le client pro pour refuser de recevoir des informations commerciales par SMS, fax ou mail (ensemble des média)
         * '0'        envoi commercial par SMS, fax ou mail
         * '1'        pas d'envoi commercial par SMS, fax ou mail
         */
        indicateurProOptout: boolean;
        /**
         * Option choisie par le client pour recevoir des informations commerciales par SMS ou fax.
         * '0'        envoi commercial par SMS ou fax
         * '1'        pas d'envoi commercial par SMS ou fax
         */
        indicateurSmsFax: boolean;
    }
    interface IAdresse {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        codeValiditeAdresseUNIVERS: string;
        indicateurEnvoiCourrier: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        numeroVoiePTT: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: string;
        nombreRetourPTT: number;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface INoteBale2 {
        /**
         * Détermine le type d'entité faisant l'objet d'une notation.
         *
         * Valeurs :
         * '1'       Entité titulaire
         * '2'       Personne (physique ou morale)
         * '3'       Engagement
         * '4'       Dossier
         */
        typeAttributaireNote: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire sur la plateforme Mysys.
         * Personne référencée comme client, tiers ou prospect.
         */
        numeroPersonne: number;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ..
         * Correspond au code Banque sous lequel un Etablissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        listeNoteBale2: Array<IDetailNoteBale2>;
    }
    interface IDetailNoteBale2 {
        /**
         * Détermine la typologie d'une note Bale2.
         *
         * Exemples de valeurs :
         * 'NBP1'     Comportement
         * 'NBP2'     Financière
         * 'NBP3'     Qualitative
         * 'NET'      Entité Titulaire
         * 'NBP4'     Dossier
         * 'NENG'     Engagement
         */
        codeTypeNoteBale2: string;
        /**
         * Indique la situation de gestion de l'entité notée.
         * Les entités faisant l'objet d'une notation sont :
         * - les personnes
         * - les entités titulaires
         * - les dossiers d'engagements
         * - les engagements élémentaires
         *
         * Valeurs :
         * '1'        une entité dite "en attente" :
         *             - personne ou entité titulaire dont le dossier est
         *               en instance de décision
         *             - dossier ou engagement élémentaire en instance de décision
         * '2'        un dossier valide - accepté ou une entité titulaire dont le dossier est décidé : accepté ou refusé
         * '3'        un dossier valide - refusé
         * '4'        un dossier ou engagement obsolète
         * '5'        un dossier clos
         */
        codeEtatProprietaireNote: string;
        /**
         * Détermine l'établissement pilote / référent de la notation d'une personne donnée.
         */
        codeEtablissementPilote: string;
        /**
         * Libellé de l'identifiant moteur de Notation.
         *
         * Exemples de valeurs :
         * Moteur NIA : Notation Bâle 2 des Particuliers
         * Moteur NIO : Notation Bâle 2 des Professionnels
         * Moteur NIE : Notation Bâle 2 des Corporates
         */
        libelleMoteur: string;
        /**
         * Correspond au libellé de l'établissement pilote de la personne morale.
         */
        libelleEtablissementPilote: string;
        /**
         * Libellé de désignation de l'origine de la notation.
         */
        libelleOrigineBale2: string;
        /**
         * Libellé de désignation du processus Bale2.
         */
        libelleProcessusBale2: string;
        /**
         * Indique s'il s'agit d'une note prospect ou non.
         *
         * Valeurs :
         * True       Note Prospect
         * False     Note Client
         */
        indicateurNoteProspect: boolean;
        /**
         * Heure d'enregistrement de l’événement de création ou de modification d'une note.
         */
        heureNotation: number;
        /**
         * Détermine la date du dernier évènement :
         *      - soit la création initiale d'une note
         *      - soit la modification d'une note
         * Type date au format yyyy-MM-dd
         */
        dateNotation: string;
        /**
         * Détermine le contexte métier utilisé lors de la notation.
         * Permet de distinguer :
         *            - la notation initiale à l'octroi d'engagement
         *            - la notation de suivi périodique
         *
         * Valeurs :
         * 'O'        Octroi
         * 'S'        Suivi Périodique Mensuel
         * 'Q'        Suivi Périodique Quotidien
         * 'R'        Révision Périodique Indéfinie
         * 'F'        Forçage en défaut
         */
        codeContexteMetierBale2: string;
        /**
         * Détermine la note globale d'une entité.
         * Correspond au niveau de regroupement de la note.
         *
         * Valeurs :
         * '0'        Positif
         * '1'        Positif
         * '2'        Positif
         * '3'        Positif
         * '4'        Positif
         * '5'        Positif
         * '6'        Positif
         * '7'        Positif
         * '8'        Incertain
         * '9'        Très incertain
         * '?'        Note non calculée/non calculable
         * 'A'        Note non calculée/non calculable
         * 'J'        Jeunesse de comptes
         * 'D'        Client en défaut Bâlois (non douteux)
         * 'E'        Note Expert prioritaire
         * 'C'        Absence de comptes
         * 'R'        Absence de règles de notation
         * 'X'        Client en défaut Bâlois (douteux)
         * 'V'        Données financières trop anciennes
         */
        noteBale2Reduite: string;
        /**
         * Détermine la valeur calculée d'un type de note attribuée à une entité donnée.
         * Correspond à la valeur mémorisée.
         */
        noteBale2calculee: string;
        /**
         * Détermine l'établissement noteur de chaque note personne.
         */
        codeEtablissementNoteur: string;
        /**
         * Correspond au libellé de l'établissement qui a effectué la notation Bâle II.
         */
        libelleEtablissementNoteur: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICreanceDouteuseOuDechue extends ICreanceSaine {
        codeSessionCreance: string;
        indicateurNatureConsolidante: string;
        indicateurCadreRisque: string;
        indicateurCreanceDouteuxComprom: string;
        indicateurDepreciationProvision: string;
        codeCreanceFractionnee: string;
        indicateurRetourSain: string;
        codeClasseFINREPCreance: string;
        typeCofinancement: string;
        dateCalculProvisionCRC200203: string;
        dateDerniereCession: string;
        dateDesactualisationPrevisionne: string;
        dateValeurDecoteCession: string;
        identifiantContrat: string;
        mtCumDesactualConstateCRC: number;
        mtCumInteretCRCAAnnuler: number;
        mtCumInteretIFRSAAnnuler: number;
        mtCumDesactualConstateIFRS: number;
        mtRepriseProvCRCPartInteret: number;
        mtPerteCouverteCRCPartInteret: number;
        mtDotationProvCRCPartInteret: number;
        mtPartInteretAssietteCRC200203: number;
        mtPerteNonCouverteCRCPartInt: number;
        mtInteretCRCPeriodeAAnnuler: number;
        mtPertePartInteretMOIS: number;
        mtInteretIFRSPeriodeAAnnuler: number;
        mtStockProvCRCPartInt0101: number;
        mtUtilisationProvCRCPartInteret: number;
        mtRepriseExcedentProvCRCInt: number;
        mtRepRetourSainCRCPartInt: number;
        mtAssietteProvisionCRC200203: number;
        mtAssietteIFRSRecalculee: number;
        mtRepriseProvCRCHorsInteret: number;
        montantBoniLatent: number;
        mtcoutAmortiIFRS: number;
        mtPerteCouverteCRCHorsInteret: number;
        mtCoutAmortiCRC: number;
        mtPerteCouverteIFRS: number;
        montantCompteCorrecteur: number;
        mtDotationProvCRCHorsInteret: number;
        mtDesactualisationConstateCRC: number;
        mtDesactualPrevisionnelCRC: number;
        mtPerteNonCouverteCRCHorsInt: number;
        mtPerteNonCouverteIFRS: number;
        mtProvisionHorsActualisation: number;
        mtProvisionCRC200203: number;
        mtPerteMOIS: number;
        mtFluxRecouvrableCRC200203: number;
        mtFluxRecouvrablesIFRS: number;
        mtStockProvCRC1erJanvier: number;
        mtDesactualisationConstateIFRS: number;
        mtDesactualPrevisionnelIFRS: number;
        mtUtilisationProvCRCHorsInteret: number;
        mtUtilisationProvisionIFRS: number;
        mtRepriseProvIFRSHorsInteret: number;
        mtRepriseRetourSainCRCHorsInt: number;
        mtRepriseProvRetourSainIFRS: number;
        numeroHistoriqueCRC200203: number;
        tauxActualisationCRC200203TEO: number;
        mtRepriseProvCRCHorsInteretBis: number;
        mtRepriseRetourSainCRCPartInt: number;
        mtDecoteCessionInterne: number;
    }
    interface ICreanceSaine {
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        identifiantCreanceIFRS: string;
        codeEtatCreanceIFRS: string;
        mtStockProvIFRS1erJanv: number;
        mtProvisionIFRS: number;
        numeroHistoriqueIFRS: number;
        dateCalculProvIFRS: string;
        codeTypePopulationIFRS: string;
        mtDotationProvisionIFRS: number;
        mtRepriseProvisionIFRS: number;
        libelleCreanceIFRS: string;
        identifiantEntiteTitulaire: string;
        libelleClient: string;
        identifiantPersonneTitulaire: string;
        identifiantEDSDomiciliation: string;
        libelleEDSDomiciliationET: string;
        identifiantGestionnaireCreance: string;
        libelleGestionnaireCreance: string;
        codeAgentEconomiqueBAFI: string;
        codeNationalitePersonne: string;
        codeINSEEPaysResidencefisc: string;
        codeResident: string;
        codeAgentContrepartie: string;
        identifiantComptable: string;
        referenceExterneCreance: string;
        codeOrigineCreance: string;
        codeSegmentRisqueCategorie: string;
        codeTypeMarcheIFRS: string;
        codeProduitService: string;
        codeDomainePSCNCE: string;
        codeTypeActifIFRS: string;
        codeTypeProduitIIFRS: string;
        typeGarantieGCE: string;
        codetypeGarantieIFRS: string;
        codeSecteurActiviteNAF: string;
        codeSecteurActiviteIFRS: string;
        dateEvtRefCReance: string;
        codeTypeEcheancierRecouvrement: string;
        montantFluxSemestre1: number;
        montantFluxSemestre2: number;
        montantFluxSemestre3: number;
        montantFluxSemestre4: number;
        montantFluxSemestre5: number;
        montantFluxSemestre6: number;
        montantFluxSemestre7: number;
        montantFluxSemestre8: number;
        montantFluxSemestre9: number;
        montantFluxSemestre10: number;
        montantFluxSemestre11: number;
        montantFluxSemestre12: number;
        montantFluxSemestre13: number;
        montantFluxSemestre14: number;
        montantFluxSemestre15: number;
        montantFluxSemestre16: number;
        montantFluxSemestre17: number;
        montantFluxSemestre18: number;
        montantFluxSemestre19: number;
        montantFluxSemestre20: number;
        montantAssietteProvisionIFRS: number;
        codeDeviseISO: string;
        montantPartInteretAssietteIFRS: number;
        montantGlobalFluxARecouvrer: number;
        tauxActualisationIFRSTIE: number;
        codeSPPIProduitService: string;
        codeBusinessModel: string;
        codeClassificationIFRS9: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface IEntiteTitulaire {
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Une ET se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement de BPCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *    - 1   Usage privé
         *    - 2   Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Permet de qualifier le client détenteur d'un contrat.
         * Valeurs :
         *    - 1   mode simple
         *    - 2   mode joint entre époux
         *    - 3   mode joint entre tiers
         *    - 4   mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative des personnes.
         * Valeurs :
         *    - 0   Actif
         *    - 1   Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Précise le type d'indivision.
         * Valeurs :
         *    - 1   Mode indivision successorale
         *    - 2   Mode indivision conventionnel avec solidarité
         *    - 3   Mode indivision conventionnel sans solidarité
         */
        modeCompositionIndivision: string;
        /**
         * Complément de la désignation courte de l'entité titulaire,
         * optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationEntiteTitulaire: string;
        /**
         * Identifiant de l'Elément De Structure
         */
        identifiantEDSDomiciliation: number;
        /**
         * Référence externe EDS
         */
        referenceEDSDomiciliation: number;
        /**
         * Libellé de l'Elément De Structure
         */
        libelleEDSDomiciliation: string;
    }
    interface IRechercheEntiteTitulaire {
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface IRechercheET {
        /**
         * Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtabBanqueEntiteJuridi: string;
        /**
         * uméro d'identification d'un dossier de créances
         * e la clientèle dans la gestion du Recouvrement.
         */
        numeroDossierContentieux: number;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement du GCE.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Détermine la situation d'un dossier VARIO
         *            Valeurs
         * 'O'        Ouvert
         * 'C'        Clos
         * 'A'        Archivé
         * 'N'        Non concerné
         */
        codeStatutDossier: string;
        /**
         * Date de cloture adminisistrative du dossier de
         * créances dans la gestion du Recouvrement
         * Type date au format yyyy-MM-dd
         */
        dateClotureDossierCreance: string;
        /**
         * Cette zone doit être alimentée avec la date à laquelle
         * le dossier sera bloqué (date de cloture + delai).
         * Dans le programme, si dateJour > dateCloture + delai
         * alors la consultation sera bloquée. Le dossier sera
         * donc supprimé logiquement pour le gestionnaire.
         * Type date au format yyyy-MM-dd
         */
        dateDeBlocageConsultationPrevis: string;
        /**
         * Cette zone doit être alimentée avec la date à laquelle
         * le dossier sera définitivement supprimé (date de
         * blocage en consultation + delai)
         * Dans le programme, si dateJour > dateBloquage + delai
         * alors le dossier sera purgé. Le dossier sera
         * donc supprimé physiquement de VARIO.
         * Type date au format yyyy-MM-dd
         */
        dateSuppressionPrevisionelle: string;
    }
}

declare namespace Contentieux.RestServices.Modeles {
    interface ICaracteristiqueCDD {
        engagementDomiciliation: IEngagementDomiciliation;
        informationsCDD: IInformationsCDD;
        opposition: IOpposition;
    }
    interface IEngagementDomiciliation {
        /**
         * Montant Engagement Domiciliation
         */
        montantEngagementDomiciliation: number;
        /**
         * Code respect engt domiciliation
         */
        codeRespectEngtDomiciliation: string;
        /**
         * Date dernier controle du contrat
         * Type date au format yyyy-MM-dd
         */
        dateDernierControleContrat: string;
        /**
         * Date prochain controle du contrat
         * Type date au format yyyy-MM-dd
         */
        dateProchainControleContrat: string;
        /**
         * Périodicite versement (EN MOIS)
         */
        periodiciteVersementEnMois: number;
    }
    interface IInformationsCDD {
        /**
         * Code devise ISO 4217 alpha-3
         */
        codeDevise: string;
        /**
         * Date Transformation en Euro
         * Type date au format yyyy-MM-dd
         */
        dateTransformationEnEuro: string;
        /**
         * Montant du solde en Francs
         */
        montantSoldeEnFrancs: number;
        /**
         * Solde compte / devise tenue cpte
         */
        soldeMinuteCompte: number;
        /**
         * Montant moyen
         */
        montantMoyen: number;
        /**
         * Montant du solde le plus bas
         */
        montantSoldePlusBas: number;
        /**
         * Code type calcul agios
         */
        reversementAgios: string;
        /**
         * Code paramétrage date de valeur
         */
        codeParametrageDateValeur: string;
        /**
         * Date début suppression date valeur
         * Type date au format yyyy-MM-dd
         */
        dateDebutSuppressionDateValeur: string;
        /**
         * Type d'Offre
         */
        typeOffre: string;
        /**
         * Date dernière opération
         * Type date au format yyyy-MM-dd
         */
        dateDerniereOperation: string;
        /**
         * Montant du solde réel en francs
         */
        montantSoldeReelEnFrancs: number;
        /**
         * Année de dernière domiciliation
         */
        anneeDerniereDomiciliation: string;
        /**
         * Mois de la dernière domiciliation
         */
        moisDerniereDomiciliation: string;
        /**
         * Montant domiciliation des revenus
         */
        montantDomiciliationDesRevenus: number;
        /**
         * Cumul réserves d'encaissement
         */
        cumulReservesEncaissement: number;
        /**
         * Montant du découvert
         */
        montantDecouvert: number;
        /**
         * Cumul Montants impayés prêts Credec
         */
        montantCumuleImpayePret: number;
        /**
         * Cumul Montants opérations ecartées
         */
        montantCumuleOperationEcartee: number;
        /**
         * Numéro offre souscrite
         */
        numeroOffre: number;
        /**
         * Indicateur habilitation PREDIC
         */
        indicateurHabilitationPredic: string;
        /**
         * Indicateur pertinence PREDIC
         */
        indicateurPertinencePredic: string;
        /**
         * Date situation PREDIC
         * Type date au format yyyy-MM-dd
         */
        dateSituationPredic: string;
        /**
         * Code couleur du mois
         */
        codeCouleurMois: string;
        /**
         * Code dernière note du mois
         */
        codeDerniereNoteMois: string;
        /**
         * Présence Franchise ou Seuil
         */
        presenceFranchiseSeuil: string;
        /**
         * Solde débiteur attendu devise orig
         */
        soldeDebiteurAttenduDeviseOrig: number;
        /**
         * Code état du produit/service
         */
        codeEtatProduitService: string;
        /**
         * Date ouverture du P/S
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureProduitService: string;
        /**
         * Date avenant P/S
         * Type date au format yyyy-MM-dd
         */
        dateAvenantProduitService: string;
        /**
         * Date clôture P/S
         * Type date au format yyyy-MM-dd
         */
        dateClotureProduitService: string;
        /**
         * Solde le plus haut / période
         */
        soldePlusHautParPeriode: number;
        /**
         * Code application remuneration compte
         */
        codeAppliRemunerationCompte: string;
        /**
         * Date début application rémunération
         * Type date au format yyyy-MM-dd
         */
        dateDebutAppliRemuneration: string;
        /**
         * Taux rémunération compte CDD
         */
        tauxRemunerationCompteCDD: number;
        /**
         * Indic gestion contentieuse
         */
        indicateurGestionContentieuse: string;
        /**
         * Indic compte inactif
         */
        indicateurCompteInactif: string;
        /**
         * Mt solde disponible CDD
         */
        montantSoldeDisponibleCDD: number;
        /**
         * Indic revenus réguliers
         */
        indicateurRevenusReguliers: string;
        /**
         * Type clôture CDD
         */
        typeClotureCDD: string;
        /**
         * Cumul Fonds mis à dispo. INSTP
         */
        cumulFondsMisADispoINSTP: number;
        /**
         * Cumul Réserves fonds INSTPAY
         */
        cumulReservesFondsINSTPAY: number;
    }
    interface IOpposition {
        /**
         * Code opposition complet
         */
        codeOpposition: string;
        /**
         * Libelle opposition
         */
        libelleOpposition: string;
        /**
         * Libelle opposition complement
         */
        libelleOppositionComplement: string;
        /**
         * Libelle information service ligne 1
         */
        libelleInfoService1: string;
        /**
         * Libelle information service ligne 2
         */
        libelleInfoService2: string;
        /**
         * Libelle information service ligne 3
         */
        libelleInfoService3: string;
        /**
         * Date début d'effet de l'opposition
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffetOpposition: string;
        /**
         * Date fin d'effet de l'opposition
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetOpposition: string;
        /**
         * identifiant d'opposition
         */
        identifiantOpposition: number;
        /**
         * Indicateur d’opposition conditionnel
         */
        indicateurOppositionCondition: string;
    }
    interface ISolde {
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service
         * '0'        Produit/Service ouvert
         * '1'        Clôture demandée
         * '2'        Clôture en cours
         * '3'        Produit/Service fermé
         * '8'        Produit/Service en cours d'ouverture
         * '9'        Versements non autorisés
         */
        codeEtatproduit: string;
        /**
         * Code devise (Euro)
         */
        codeDevise: string;
        /**
         * Cumul réserves d'encaissement en Euro
         */
        cumulReserveEncaissementEuro: number;
        /**
         * Montant solde fusionné en Euro
         */
        montantSoldeFusionneEuro: number;
        /**
         * Cumul montant impayés prêts en Euro
         */
        cumulMontantImpayePretEuro: number;
        /**
         * Cumul montant opérations écartées en Euro
         */
        cumulMontantOpeEcarteEuro: number;
        /**
         * Montant autorisation découvert en Euro
         */
        montantAutoDecouvertEuro: number;
        /**
         * Montant solde disponible en Euro
         */
        montantSoldeDispoEuro: number;
        /**
         * Code établissement compte de fusion
         */
        codeEtablissementFusion: string;
        /**
         * Code guichet compte de fusion
         */
        codeGuichetFusion: string;
        /**
         * Numéro de compte de fusion
         */
        numeroCompteFusion: string;
        /**
         * Ce code permet de déterminer si un compte client est fusionné avec un autre compte.
         * ' '        Compte simple (non fusionné).
         * 'F'        Fusionnant. Ce compte fusionne sur un autre compte.
         * 'G'        Support de fusion. Au moins un autre compte fusionne sur ce compte.
         */
        codeTypeFusion: string;
        /**
         * Code devise du compte
         */
        codeDeviseTenueCompte: string;
        /**
         * Cumul réserves d'encaissement  en devise du compte
         */
        cumulReserveEncaissDeviseCpte: number;
        /**
         * Cumul montant opérations écartées dans la devise du compte
         */
        cumulMontantOpeEcarDeviseCpte: number;
        /**
         * Cumul montant opérations impayées en devise du compte
         */
        cumulMontantImpayeDeviseCpte: number;
        /**
         * Montant découvert en devise du compte
         */
        montantDecouvertDeviseCpte: number;
        /**
         * Solde disponible en devise du compte
         */
        soldeDisponibleDeviseCpte: number;
        /**
         * Solde compte en devise du compte
         */
        soldeCompteDeviseCpte: number;
        /**
         * Cumul Remises de chèques
         */
        cumulRemiseCheque: number;
        /**
         * Cumul Blocage de provisions
         */
        cumulBlocageProvisions: number;
        /**
         * Solde débiteur attendu devise origine
         */
        soldeDebiteurAttenduDeviseOrigi: number;
    }
    interface ISyntheseFinanciere {
        solde: ISolde;
        listeMontant: Array<IMontant>;
        total: ITotal;
    }
    interface IMontant {
        /**
         * Code devise expression montant
         *
         * Détermine une monnaie / devise selon la nomenclature.
         *
         * Valeurs :
         * - USD / dollar - USA
         * - JPY / yen - JAPON
         * - CNY / yuan - CHINE
         * - DKK / couronne - DANEMARK
         *
         * Devise d'expression d'un montant de mouvement / opération
         *
         * CODE DEVISE 'EUROS
         */
        codeDeviseExpressionMontant: string;
        /**
         * Solde / devise tenue compte
         *
         *  Solde du compte arrêté à une date donnée.
         *  Montant exprimé dans la devise de tenue de compte.
         *  La devise doit être explicitement stipulée.
         *
         *  Format :
         *  Valeur interne en décimales selon le nombre maximum
         *  de décimales de la devise : voir ISO 4217
         *  (majoritairement avec 2 décimales)
         *
         *  CONTROLE DE NUMERICITE
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        soldeDeviseTenueCompte: number;
        /**
         * Cumul réserves d'encaissement
         *
         *  Cumul des réserves d'encaissement en monnaie de tenue de compte.
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        cumulReserveEncaissement: number;
        /**
         * Cumul Montants opérations ecartées
         *
         *  Montant reprenant le total des opérations en attente de décision dans le MAD pour un CCE donné
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        cumulMontantOperationEcarte: number;
        /**
         * Cumul Montants impayés prêts Credec
         *
         *  Montant reprenant le total des échéances prêts crédécureuil en Impayé ayant pour compte de prélèvement un CCE donné
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         * Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        cumulMontantImpayePret: number;
        /**
         * Code type fusion
         *
         *  Ce code permet de déterminer si un compte client est fusionné avec un autre compte.
         *
         *  Valeurs :
         *  Compte simple (non fusionné).
         * - F Fusionnant.
         *  Ce compte fusionne sur un autre compte.
         * - G Support de fusion.
         *  Au moins un autre compte fusionne sur ce compte.
         */
        codeTypeFusion: string;
        /**
         * Indic fusion en CAPITAL
         *
         *  Boolen précisant si le compte doit fusionner en capital (par cumul des soldes) avec un ou plusieurs autres comptes, lors de l'imputation d'une opération.
         *
         * Ce code ne peut être positionné à OUI que si
         *  - UCAFU (fusion agio) est à OUI
         *  - UCAIND (autorisation découvert) est à NON
         *  - et s'il n'y a plus de ligne de découvert
         *
         *  Le compte principal est donc associé à un indicateur 'N', tandis que les comptes fusionnés au compte principal ont un indicateur à 'O'
         *
         *  Valeurs :
         * - O OUI : fusion des soldes
         * - N NON
         */
        indicateurFusionEnCapital: string;
        /**
         * Code devise tenue compte ISO 4217
         *
         * Détermine une monnaie / devise selon la nomenclature
         *
         *  Valeurs :
         * - EUR Euro
         *
         *  exemples :
         * - USD / dollar - USA
         * - JPY / yen - JAPON
         * - CNY / yuan - CHINE
         * - DKK / couronne - DANEMARK
         *
         *  Détermine la devise utilisée pour la gestion du compte
         * Sert notamment à l'établissement de la position / arrêté de situation du compte (solde).
         *  Correspond à la devise d'imputation des opérations.
         *
         *  Il s'agit de la devise de tenue de compte du CCE avant conversion en euro.
         */
        codeDeviseISOTenueCompte: string;
        /**
         * Solde compte / devise tenue cpte
         *
         * Solde du compte arrêté à une date donnée.
         *  Montant exprimé dans la devise de tenue de compte.
         *  La devise doit être explicitement stipulée.
         *
         *  Format :
         *  Valeur interne en décimales selon le nombre maximum de décimales de la devise : voir ISO 4217 (majoritairement avec 2 décimales)
         *
         *  CONTROLE DE NUMERICITE
         *
         *  Montant du solde du compte entreprise exprimé dans la devise de tenue de compte.
         */
        soldeCompteDevise: number;
        /**
         * Cumul réserves d'encaissmt en devise
         *
         * Cumul des réserves d'encaissement exprimé en monnaie de tenue de compte.
         */
        cumulReserveEncaissementDevise: number;
        /**
         * Cumul Montants opé.écartées devises
         *
         *  Montant reprenant le total des opérations en attente de décision dans le MAD pour un CCE donné
         *  exprimé en devises (monnaies de tenue de compte).
         *
         *  Montant du cumul des opérations écartées exprimé dans la devise de tenue de compte.
         */
        cumulMontantOperationEcarteDevise: number;
        /**
         * Cumul Montants impayés prêts Credec
         *
         * Montant reprenant le total des échéances prêts crédécureuil en Impayé, ayant pour compte de prélèvement un CCE donné, en monnaie de tenue de compte
         */
        cumulMontantImpayePretDevise: number;
        /**
         * Cumul Blocage de provisions
         *
         * Cumul des blocages de provisions des types de réserves 'SCT' remises émises par EDI et 'TRI' transfert international en monnaie de tenue de compte.
         */
        cumulBlocageProvision: number;
        /**
         * Cumul Remises de chèques
         *
         * Cumul des reserves d'encaissement de type remises de chèques 'RMC' en monnaie de tenue de compte
         */
        cumulRemiseCheque: number;
        /**
         * Code Etablissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Numéro de compte
         */
        numeroCompte: string;
    }
    interface ITotal {
        /**
         * Code devise expression montant
         *
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha
         *  voir ISO 4217 numérique
         *  Nomenclature adoptée par BPCE
         *
         *  Valeurs :
         * - EUR Euro
         *
         *  exemples :
         * - USD / dollar - USA
         * - JPY / yen - JAPON
         * - CNY / yuan - CHINE
         * - DKK / couronne - DANEMARK
         *
         * Devise d'expression d'un montant de mouvement / opération
         */
        codeDeviseExpressionMontant: string;
        /**
         * Total crédit de la personne
         *
         * Pour une personne, correspond à la somme du capital restant du des crédits détenus .
         *  Le montant est exprimé en Centimes.
         *
         * ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         * Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        totalCreditTiers: number;
        /**
         * Total impayés de la personne
         *
         *  Pour une personne, correspond à la somme des échéances de prêts impayées.
         *  Le montant est exprimé en Centimes.
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        totalImpayeTiers: number;
        /**
         * Total trésorerie de la personne
         *
         *  Pour une personne, correspond au cumul des soldes des produits de trésorerie.
         *  Le montant est exprimé en Centimes.
         *
         *  ATTENTION : Ce montant est systématiquement renvoyé en EURO.
         *  Pour les CCE en devise, ce montant est donc calculé par conversion avec le taux de change du jour.
         */
        totalTresorerieTiers: number;
        /**
         * Code devise tenue compte ISO 4217
         *
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha
         *  voir ISO 4217 numérique
         *  Nomenclature adoptée par BPCE
         *
         * Valeurs :
         *  ( AAA voir norme ISO ZZZ )
         * - EUR Euro
         *
         *  exemples :
         * - USD / dollar - USA
         * - JPY / yen - JAPON
         * - CNY / yuan - CHINE
         * - DKK / couronne - DANEMARK
         *
         *
         *  Détermine la devise utilisée pour la gestion du compte
         *  Sert notamment à l'établissement de la position / arrêté de situation du compte (solde).
         *  Correspond à la devise d'imputation des opérations.
         *
         *  Il s'agit de la devise de tenue de compte du CCE avant conversion en euro.
         */
        codeDeviseISOTenueCompte: string;
        /**
         * Total crédit de la personne devises
         *
         *  Pour une personne, correspond à la somme du capital restant du des crédits détenus .
         *  Le montant est exprimé en Centimes et en devise de tenue de compte.
         *
         *  Total crédit de la personne exprimé dans la devise de tenue de compte.
         */
        totalCreditTiersDevise: number;
        /**
         * Total impayés de la personne devises
         *
         *  Pour une personne, correspond à la somme des échéances de prêts impayées.
         *  Le montant est exprimé en Centimes et en devise de tenue de compte.
         *
         *  Total impayés de la personne exprimé dans la devise de tenue de compte.
         */
        totalImpayeTiersDevise: number;
        /**
         * Total trésorerie personne devises
         *
         *  Pour une personne, correspond au cumul des soldes des produits de trésorerie.
         *  Le montant est exprimé en Centimes et en devise de tenue de compte.
         *
         *  Total trésorerie de la personne exprimé dans la devise de tenue de compte.
         */
        totalTresorerieTiersDevise: number;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IAlerteService {
        getAlertesProceduresCollectives(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteProcedureCollective[]>;
        getAlertesEcheanciers(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteEcheancier[]>;
        getAlertesSurendettement(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteSurendettement[]>;
        getActionsPlanifiees(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteActionPlanifiee[]>;
        getAlertesAffectations(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAffectationDossier[]>;
    }
    class AlerteService implements IAlerteService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getAlertesProceduresCollectives(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteProcedureCollective[]>;
        getAlertesEcheanciers(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteEcheancier[]>;
        getAlertesSurendettement(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteSurendettement[]>;
        getActionsPlanifiees(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAlerteActionPlanifiee[]>;
        getAlertesAffectations(codeEtablissement: string, idEDS: number): ng.IPromise<Modeles.IAffectationDossier[]>;
        private getListeAlertes<T>(codeEtablissement, idEDS, url);
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IEDSService {
        getAgent(codeEtablissement: string, idAgent: number): ng.IPromise<Modeles.ICaracteristiqueAgent>;
    }
    class EDSService implements IEDSService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getAgent(codeEtablissement: string, idAgent: number): ng.IPromise<Modeles.ICaracteristiqueAgent>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IDossierService {
        getDossier(idDossier: number): ng.IPromise<Modeles.IInfosDossier>;
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, avecDetail?: boolean, identifiantCreance?: string): ng.IPromise<Modeles.InfosDossierHisto.IContainer>;
        getInfosDossierContrat(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.InfosDossierContrat.IInfosDossierContrat>;
        getInfosDossierAdministratif(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.IInfosDossierAdministratif.IInfosDossierAdminist>;
        getDossiers(codeEtablissement: string, idEntitesTitulaires: string[]): ng.IPromise<Modeles.IListeDossierET>;
        getIdET(codeEtablissement: string, numeroDossier: number): ng.IPromise<Modeles.IRechercheET>;
        getContratsMySys(codeEtablissement: string, idET: string, contratsActifs?: boolean): ng.IPromise<Modeles.IListeContrats>;
        getProvision(codeEtablissement: string, codeGuichetInterbancaire: string, idCreance: string, codeEtatCreance: string): ng.IPromise<Modeles.ICreanceDouteuseOuDechue>;
        getGaranties(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Modeles.IGarantie[]>;
    }
    class DossierService implements IDossierService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getDossier(idDossier: number): ng.IPromise<Modeles.IInfosDossier>;
        getInfosDossierHisto(codeEtablissement: string, numeroDossier?: number, avecDetail?: boolean, identifiantCreance?: string): ng.IPromise<Modeles.InfosDossierHisto.IContainer>;
        getInfosDossierAdministratif(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.IInfosDossierAdministratif.IInfosDossierAdminist>;
        getInfosDossierContrat(codeEtablissement: string, numeroDossier: number, identifiantElementStructure: number): ng.IPromise<Modeles.InfosDossierContrat.IInfosDossierContrat>;
        /**
         * Récupère les dossiers par Entites Titulaires
         * @param codeEtablissement
         * @param idEntitesTitulaires Au minimum un id doit être présent dans la liste
         */
        getDossiers(codeEtablissement: string, idEntitesTitulaires: string[]): ng.IPromise<Modeles.IListeDossierET>;
        /**
         * Recherche les entites titulaires par dossier
         * @param codeEtablissement
         * @param numeroDossier
         */
        getIdET(codeEtablissement: string, numeroDossier: number): ng.IPromise<Modeles.IRechercheET>;
        /**
         * Recherche les contrats MySys (Système d'information des caisse d'épargne) par Entites titulaires
         * @param codeEtablissement
         * @param idET
         * @param contratsActifs
         */
        getContratsMySys(codeEtablissement: string, idET: string, contratsActifs?: boolean): ng.IPromise<Modeles.IListeContrats>;
        getProvision(codeEtablissement: string, codeGuichetInterbancaire: string, idCreance: string, codeEtatCreance: string): ng.IPromise<Modeles.ICreanceDouteuseOuDechue>;
        getGaranties(codeEtablissement: string, numeroDossier: number, identifiantCreance: string): ng.IPromise<Modeles.IGarantie[]>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface IPersonneService {
        getMedia(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IMedia>;
        getAdressePostale(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IAdresse[]>;
        getInformationEntiteTitulaire(codeEtablissement: string, idET: number): ng.IPromise<Modeles.IInformationEntiteTitulaire>;
        getRechercheEntiteTitulaire(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IRechercheEntiteTitulaire>;
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.INoteBale2>;
    }
    class PersonneService implements IPersonneService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getMedia(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IMedia>;
        getAdressePostale(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IAdresse[]>;
        getInformationEntiteTitulaire(codeEtablissement: string, idET: number): ng.IPromise<Modeles.IInformationEntiteTitulaire>;
        getRechercheEntiteTitulaire(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IRechercheEntiteTitulaire>;
        getNoteBale2(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.INoteBale2>;
    }
}

declare namespace Contentieux.RestServices.Services {
    class RestService {
        private serviceAgent;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
        sendRequest<T>(settings: MyWay.Services.IRequestSettings): ng.IPromise<T>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ISoldeService {
        getDetailSoldeCCE(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string): ng.IPromise<Modeles.ISyntheseFinanciere>;
        getDetailSoldeCDD(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string): ng.IPromise<Modeles.ICaracteristiqueCDD>;
    }
    class SoldeService implements ISoldeService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getDetailSoldeCCE(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string): ng.IPromise<Modeles.ISyntheseFinanciere>;
        getDetailSoldeCDD(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroCompte: string): ng.IPromise<Modeles.ICaracteristiqueCDD>;
    }
}

declare namespace Contentieux.RestServices.Services {
    interface ITiersService {
        getCorporateInformation(codeEtablissement: string, idTiers: number): ng.IPromise<Modeles.Tiers.ICorporateInformation>;
    }
    class TiersService implements ITiersService {
        private restService;
        static $inject: string[];
        constructor(restService: Services.RestService);
        getCorporateInformation(codeEtablissement: string, idTiers: number): ng.IPromise<Modeles.Tiers.ICorporateInformation>;
    }
}

declare namespace Contentieux.RestServices.Commun.Constantes.Url {
    namespace Rest {
        const urlDossierRecouvrement: string;
        const urlTiersV2: string;
        const urlTiers: string;
        const urlEntiteTitulaire: string;
        const urlRisqueClient: string;
        const urlAgent: string;
        const urlContratCCE: string;
        const urlContratCDD: string;
    }
    namespace InfosDossier {
        const urlDossierRecouvrementInfosDossier: string;
        const urlDossierRecouvrementInfosDossierAdminist: string;
        const urlDossierRecouvrementInfosDossierHisto: string;
        const urlDossierRecouvrementInfosDossierContrat: string;
        const urlDossierRecouvrementRechercheET: string;
        const urlDossierRecouvrementProvision: string;
        const urlDossierContratsMySys: string;
    }
    namespace InfosPersonne {
        const urlDossierRecouvrementListeDossiers: string;
        const urlTiersMedia: string;
        const urlETAdresse: string;
        const urlInfoET: string;
        const urlRechET: string;
        const urlNoteBale: string;
    }
    namespace Garantie {
        const urlListeGaranties: string;
    }
    namespace PersonneMorale {
        const urlTiersCorporateInformation: string;
    }
    namespace Eds {
        const urlCaracteristique: string;
    }
    namespace Alertes {
        const urlAlertesAffectation: string;
        const urlAlertesProcedureCollective: string;
        const urlAlertesEcheancier: string;
        const urlAlertesSurendettement: string;
        const urlActionsPlanifiees: string;
    }
    namespace Parametres {
        const typeRechercheEntiteTitulaire: string;
        const codeTypeNote: number;
    }
    namespace Solde {
        const urlSoldeCDD: string;
        const urlSoldeCCE: string;
    }
}
