
declare module RelationEconomique {
    var app: ng.IModule;
}

declare module RelationEconomique.Controleur {
    class ModalLienEstControleur {
        private $scope;
        private relationEconomiqueService;
        private $modalInstance;
        protected data: any;
        private static CLASS_NAME;
        private static logger;
        isChargementModalLienEst: boolean;
        listeLienEstPersonne: Array<Modele.Application.IPersonneEnRelation>;
        private templateData;
        static $inject: string[];
        constructor($scope: ng.IScope, relationEconomiqueService: Services.IRelationEconomiqueService, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        fermerModal(): void;
    }
}

declare module RelationEconomique.Controleur {
    class ModalRelationEconomiqueControleur {
        private $scope;
        private relationEconomiqueService;
        private $modalInstance;
        protected data: any;
        private static CLASS_NAME;
        private static logger;
        donnees: Modele.Application.IRelationEconomique;
        entiteTitulaire: Modele.Application.IPersonneEnRelation;
        isPersonneHorsRelationChargement: boolean;
        isRelationEconomiqueChargement: boolean;
        isRelationEconomiqueErreur: boolean;
        isPersonneHorsRelationErreur: boolean;
        private templateData;
        messageErreur: string;
        static $inject: string[];
        constructor($scope: ng.IScope, relationEconomiqueService: Services.IRelationEconomiqueService, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        initModal(): void;
        selectEntiteTitulaire(entiteTitulaire: Modele.Application.IPersonneEnRelation): void;
        fermerModal(): void;
        allerConnaissanceClient(): void;
    }
}

declare module RelationEconomique.Controleur {
    class RecoBlocContenuCtrl {
        private static CLASS_NAME;
        private static logger;
        /**
         * ID du bloc
         */
        titre: string;
        typeContenu: string;
        static $inject: string[];
        constructor();
    }
}

declare module RelationEconomique.Directives {
    function recoBlocContenu(): ng.IDirective;
}

declare module RelationEconomique.Controleur {
    class RecoRelationPersonneControleur {
        private $scope;
        private relationEconomiqueService;
        private static CLASS_NAME;
        private static logger;
        listePersonne: Array<Modele.Application.IPersonneEnRelation>;
        titre: string;
        callback: any;
        static $inject: string[];
        constructor($scope: ng.IScope, relationEconomiqueService: Services.IRelationEconomiqueService);
        actionTuile(personne: Modele.Application.IPersonneEnRelation): void;
        affichageTag(personne: Modele.Application.IPersonneEnRelation): boolean;
    }
}

declare module RelationEconomique.Directives {
    /**
     * Directive bloc administratif
     * listPersonne : liste des personnes en relation
     */
    function recoRelationPersonne(): ng.IDirective;
}

declare module RelationEconomique.Modele.Application {
    interface IRelationEconomique {
        listeHolding: Array<IPersonneEnRelation>;
        listeFilliale: Array<IPersonneEnRelation>;
        listeSocietePortantMoyen: Array<IPersonneEnRelation>;
        listeSocietePortantExploitation: Array<IPersonneEnRelation>;
        listeAssociation: Array<IPersonneEnRelation>;
        listePersonneHorsRelation: Array<IPersonneEnRelation>;
        listeEntiteTitulaire: Array<IPersonneEnRelation>;
        listeAutre: Array<IPersonneEnRelation>;
        listeEnFormation: Array<IPersonneEnRelation>;
    }
    interface IPersonneEnRelation {
        icon: string;
        designationCourte: string;
        identifiantPersonne: string;
        prospect: boolean;
        leader: boolean;
        libelleLien?: string;
        voletOpen?: boolean;
        personneMorale: boolean;
        siren: string;
    }
    interface IOuvrirModale {
        identifiantPersonne: number;
        codeEtablissement: string;
    }
}

declare module RelationEconomique.Modele.Rest {
    interface ILien {
        /**
         * Deuxième tiers en relation
         * Identifie la deuxième personne liée par un lien inter-personnes avec une 1ière personne selon un type de lien.
         */
        identifiantTiersEnRelation: number;
        /**
         * Date création du lien inter-personnes
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Code type du lien inter-personnes
         *
         * **Définition :**
         * Permet de connaître à quel titre une personne (particulier personne physique ou une personne morale) est en relation avec une autre personne.
         *
         * **Valeurs :**
         *
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
         *
         * **Définition :**
         * Date de mise à jour du lien inter-personnes
         * Type date au format yyyy-MM-dd
         */
        dateMiseAJour: string;
        /**
         * Référence de la pièce justificative du lien inter-personne
         *
         * **Définition :**
         * Référence informatique donnée par la caisse pour désigner le type de pièce qui référence le lien inter personnes.
         */
        referencePieceJustificative: string;
        /**
         * Date de début effet du lien inter-personnes
         *
         * **Définition :**
         * Cette date est utile pour les liens réglementaires de type représentant légal.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffet: string;
        /**
         * Date de fin effet du lien inter-personnes
         *
         * **Définition :**
         * Date d'expiration du lien inter-personnes cette date est utile pour les liens inter-personnes réglementaires.
         *
         * **Exemple :**
         * Représentant légal
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Designation courte
         *
         * **Définition :**
         * Dénomination banalisée :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourte: string;
        /**
         * Code famille du liens inter-personnes
         *
         * **Définition :**
         * Classification en familles des types de liens inter-personnes.
         *
         * La famille  Entité Juridique représente les liens permettant de regrouper les personnes identiques entre les C.E.
         *
         * **Valeurs :**
         *
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
         *
         * **Définition :**
         * Ce code caractérise les liens de la famille GROUPE.
         *
         * **Valeurs :**
         *
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
         *
         * **Définition :**
         * Ce code ne concerne que les liens limites (famille GROUPE).
         *
         * **Valeurs :**
         *
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
         *
         * **Définition :**
         * Ce taux représente le pourcentage de détention de la mère vis à vis de la fille.
         */
        pourcentageCapitalistique: number;
        /**
         * Numéro du lien interlocuteur
         *
         * **Définition :**
         * Numéro d'identification d'un lien entre une personne morale ou PRO et son interlocuteur.
         *
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
         *
         * **Définition :**
         * Libellé de désignation du lien inter-personnes.
         */
        libelleType: string;
        /**
         * Code du sens lien
         *
         * **Description :**
         * Indique le sens de lecture du lien.
         *
         * **Exemples :**
         *  - 1 - Est
         *  - 2 - A pour
         */
        codeSens: number;
        /**
         * Code de la personnalité juridique
         *
         * **Description :**
         * Détermine le type de personnalité juridique de la personne.
         *
         * **Valeurs :**
         *
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
    }
    interface ICorporateTiersLies {
        /**
         * Identifiant Tiers
         *
         * **Définition :**
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect.
         *
         * Numéro chronologique attribué par le système :
         * Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers: number;
        listeLien: Array<ILien>;
        /**
         * Code etablissement banque entite juridique
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
         * bordereau à imprimer
         */
        indicateurBordereauImprimer: boolean;
        listeRepresentant: Array<IRepresentant>;
    }
    interface IRepresentant {
        /**
         * Code établissement
         */
        codeEtablissement: string;
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
         * Date de passation du questionnaire
         * Type date au format yyyy-MM-dd
         */
        datePassationQuestionnaire: string;
        /**
         * Code sur 4 caractères identifiant le niveau de compétence calculé par l'IHM de passation du QCF PM développé par IBP
         */
        competenceMIF2: string;
        /**
         * Identifiant personne
         */
        identifiantPersonneMorale: number;
        /**
         * Identifie une personne physique représentant la personne morale
         */
        identifiantPersonnePhysique: number;
        /**
         * Le QCF est valide s'il a été saisi il y a moins de 2 ans
         */
        indicateurValiditeQuestionnaire: string;
        /**
         * 'C1'       Novice
         * 'C2'       Apprenti
         * 'C3'       Averti
         * 'C4'       Expert
         * 'P4'       Professionnel Expert
         */
        libelleNiveauCompetence: string;
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
    }
}

declare module RelationEconomique.Modele.Rest {
    interface IRelation {
        /**
         * Libelle intitule relation
         *
         * Définition :
         *
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
         *
         * Définition :
         * Numéro d'identification de la relation économique (ex dossier ménage) dans le SI d'un Etablissement du Groupe CE.
         * Une relation économique (ex ménage) est le regroupement de plusieurs personnes ayant un lien familial et/ou économique entre elles.
         * Le dossier fédère les informations communes à ces différentes personnes regroupées par rubriques.
         *
         * Numéro chronologique attribué par le système :
         * Référence unique dans MYSYS (identifiant interne)
         */
        identiteRelationEcoMenage: number;
        /**
         * Nombre personnes relation economique
         *
         * Définition :
         * Comptage du nombre de personnes dans la relation économique.
         */
        nombrePersonneRelationEco: number;
        /**
         * Liste des personnes de la relation
         */
        listePersonne: Array<IPersonne>;
    }
    interface IPersonne {
        /**
         * Identifiant personne
         *
         * Définition :
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect.
         *
         * Numéro chronologique attribué par le système :
         * Référence unique dans MYSYS (identifiant interne)
         */
        identifiantPersonne: number;
        /**
         * Code personnalite juridique
         *
         * Définition :
         *
         * Détermine le type de personnalité juridique de la personne.
         *
         * Il existe principalement deux types de personnalité :
         * - PJ physique : concerne les individus
         * - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations ...)
         *
         * La personnalité juridique conditionne les droits et obligations.
         *
         * Valeurs :
         * '1'        Personne physique
         * '2'        Personne morale ou assimilée morale
         * *9         CONTROLE DE NUMERICITE
         */
        codePersonnaliteJuridique: string;
        /**
         * Code qualite personne
         *
         * Définition :
         *
         * Détermine la qualité de la personne dans la relation
         * Typologie MYSYS gérée dans la table DV2V
         *
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
        codeQualitePersonne: Services.QualiteRelationEnum;
        /**
         * Code leader espace entreprise
         *
         * Définition :
         * Détermine si la personne de la relation est leader de l'espace entreprise
         *
         * Valeurs :
         * 'L'        Leader
         * 'N'        Personne sans spécificité
         */
        codeLeaderEspaceEntreprise: string;
        /**
         * Code espace relation
         *
         * Définition :
         * Détermine l'espace de la relation
         *
         * Permet d'établir dans quel espace de la relation est restituée une personne donnée en fonction de sa qualité
         *
         * Valeurs :
         * 'P'        Espace privé
         * 'E'        Espace entreprise
         */
        codeEspaceRelation: string;
        /**
         * Note calculee
         *
         * Définition :
         *
         * Détermine la valeur calculée d'un type de note attribuée à une entité donnée.
         * correspond à la valeur mémorisée
         */
        noteCalculee: string;
        /**
         * Libelle etablissement de notation
         *
         * DEFINITION :
         *
         * Correspond au libellé de l'établissement qui a effectué la notation Bâle II.
         */
        libelleEtablissementNotation: string;
        /**
         * Code categorie juridique INSEE
         *
         * Définition :
         * Détermine la catégorie juridique de la personne.
         *
         * Typologie INSEE niveau 3 (256 postes)
         *
         * Format XYZZ :
         * X  : Famille juridique ( niveau 1 )
         * XY : Forme juridique   ( niveau 2 )
         * ZZ : Statut juridique
         *
         * Valeurs :
         * Typologie gérée dans la table DU1P
         *
         * Exemples :
         * 1100       artisan - commerçant
         * 5415       SARL en économie mixte
         * 7210       commune
         * 9240       congrégation
         */
        codeCategorieJuridiqueINSEE: string;
        /**
         * Nombre de liens inter-personnes
         *
         * Définition :
         * Comptage du nombre de liens inter-personne
         */
        nombreLiensInterPersonnes: number;
        /**
         * Code etat Fin Reprise
         *
         * Définition :
         *
         * Permet de spécifier la situation d'un traitement cyclique.
         *
         * Valeurs :
         * ' '        Initial
         * 'R'        Reprise
         * 'F'        Fin
         */
        codeEtatFinReprise: string;
        /**
         * Liste des dirigeants moraux et physiques
         */
        listeDirigeants: Array<IDirigeant>;
        /**
         * Code leader espace prive
         *
         * Définition :
         * Détermine si la personne de la relation est leader de l'espace privé
         *
         * Valeurs :
         * 'L'        Leader
         * 'N'        Personne sans spécificité
         */
        codeLeaderEspacePrive: string;
        /**
         * Indicateur grappage
         *
         * Définition :
         * Top indiquant si une personne est un prospect ou non.
         * Règle :
         * Si DU7A.CODATI = '1' et DU7A.CDDAPO = '1' alors prospect.
         *
         * 'O'        Prospect
         * 'N'        Non prospect"
         */
        indicateurGrappage: string;
        /**
         * Indicateur NPAI
         *
         * Définition :
         * Top indicateur de grappage
         *
         * 'O'        Grappage
         * 'N'        Pas de grappage
         */
        indicateurNPAI: string;
        /**
         * Indicateur prospect
         *
         * Définition :
         * Indicateur d'une personne en NPAI ou non dans la table pro ou part
         * 'O'        NPAI
         * 'N'        NON NPAI
         */
        indicateurProspect: string;
        /**
         * Détermine un segment de clientèle dans une typologie donnée :
         * MN : Marché national
         *
         * Marché :
         * MN 101102 /  Particuliers : Parti. non Prof
         * MN 102102 /  Professionnels : Prof. Lib.
         * MN 206101 /  Professionnels Privé  Promoteurs
         */
        codeSegmentMarche: string;
        /**
         * Numero SIREN entreprise
         *
         * Définition :
         * Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE :
         * Système d'Identification du Répertoire des ENtreprises
         * Identifie de manière unique une entreprise au niveau
         * national.
         * Attribué qu'une seule fois, n'est supprimé du répertoire qu'au moment de la disparition de la personne juridique (décès ou cessation de toute activité pour une personne physique, dissolution pour une personne morale).
         * Compose le numéro SIRET : num établissement
         *
         * Format :
         * Les 8 premiers chiffres n'ont aucune signification, excepté pour les organismes publics (communes,...) dont le numéro SIREN commence obligatoirement par 1 ou 2.
         * Le 9ième chiffre est une clé de contrôle : clé "1-2" suivant l'algorithme de Luhn
         * Un professionnel n'a pas forcément de SIREN, cas des professionnels n'ayant pas d'activité commerciale et/ou n'ayant pas de salariés :
         *
         * Pour les entreprises étarngères résidant en France :
         * SIREN fictif attribué par le Banque De France dans le cadre de l'identification FIBEN (commence par 200)
         *
         * En cas de non attribution par l'INSEE :
         * (hors périmètre SIRENE ou inscription en instance)
         * Numéro chronologique attribué par le système :
         * Référence unique dans MYSYS (identifiant interne) numéro attribué par le système
         */
        numeroSiren: string;
        /**
         * Designation courte
         *
         * Définition :
         *
         * Dénomination banalisée :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        raisonSociale: string;
        /**
         * Détermine la typologie de segmentation clientèle.
         *
         * Correspond au 2 premiers caractères du code
         *
         * Types :
         * - Activation Clientèle : Segmentation comportementale des Particuliers
         * - Fréquence : Profils client portant des objectifs commerciaux
         * - Code marché : Segmentation des secteurs d'activités
         * - Univers Client : Profil équipement Client
         *
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
        listeAdresses: Array<IAdresse>;
        listeComptes: Array<ICompte>;
        /**
         * Détermine si la personne morale est un organisme
         * public.
         * Cet état découle de le catégorie juridique
         * de l'activité professionnelle de la personne morale
         *            Valeurs :
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
    }
    interface IDirigeant {
        /**
         * Identifiant personne
         *
         * Définition :
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect.
         *
         * Numéro chronologique attribué par le système :
         * Référence unique dans MYSYS (identifiant interne)
         */
        identifiantPersonne: number;
        /**
         * Code type lien inter-personnes
         *
         * Définition :
         *
         * Permet de connaître à quel titre une personne (particulier personne physique ou une personne morale) est en relation avec une autre personne.
         *
         * Valeurs :
         * Typologie gérée dans la table DU1Y / appli GESTADM
         *
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
         *
         * Définition :
         * Dénomination banalisée :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourte: string;
    }
    interface IAdresse {
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
    interface ICompte {
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
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * la date de la dernière opération sur le produit ou le service
         * Type date au format yyyy-MM-dd
         */
        dateDerniereOperation: string;
    }
    interface IControleCoherence {
        /**
         * indicateur précisant la présence d'une alerte
         */
        indicateurAlerte: boolean;
        /**
         * message d'alerte
         */
        libelleAlerte: string;
    }
    interface ICorporateOrganigramme {
        controleCoherence: IControleCoherence;
        relation: IRelation;
    }
}

declare module RelationEconomique.Services {
    enum QualiteRelationEnum {
        HOLDING,
        FILLIALE,
        SOCIETE_PORTANT_MOYEN,
        SOCIETE_PORTANT_MOYEN_DEUX,
        SOCIETE_PORTANT_EXPLOITATION,
        SOCIETE_PORTANT_EXPLOITATION_DEUX,
        ASSOCIATION,
        AUTRE,
    }
    class RelationEconomiqueService implements IRelationEconomiqueService {
        private serviceAgentExtended;
        private popupService;
        private relationEconomiqueRestService;
        private portailService;
        private $q;
        private static CLASS_NAME;
        private static logger;
        private _relationEconomique;
        private _codeEtablissement;
        private _entreeModal;
        personne: Modele.Application.IPersonneEnRelation;
        static $inject: string[];
        constructor(serviceAgentExtended: myway.core.AgentService, popupService: Services.Utils.IPopupService, relationEconomiqueRestService: Services.Rest.RelationEconomique.IRelationEconomiqueServiceAjax, portailService: myway.portail.api.PortailService, $q: angular.IQService);
        codeEtablissement: string;
        ouvrirModalRelationEconomique(entreeModale: Modele.Application.IOuvrirModale): ng.IPromise<any>;
        ouvrirModalLienEst(personne: Modele.Application.IPersonneEnRelation): ng.IPromise<any>;
        private determinerIcon(personne?, lien?);
        private relationEconomiqueRestToApp(relationEconomiqueRest);
        private lienRestToApp(lienRest, lienEst?);
        chargerRelationEconomique(identifiantPersonne: number, codeEtablissement: string, majPersonneEnlien?: Modele.Application.IPersonneEnRelation): ng.IPromise<void>;
        recupererLienEstPersonne(personne: Modele.Application.IPersonneEnRelation, codeEtablissement: string): ng.IPromise<Array<Modele.Application.IPersonneEnRelation>>;
        entreeModal: Modele.Application.IOuvrirModale;
        relationEconomique: Modele.Application.IRelationEconomique;
        debranchementVersSynthese(personne: Modele.Application.IPersonneEnRelation): ng.IPromise<void>;
        debranchementVersConnaissanceClient(identifiantPersonne: number): ng.IPromise<any>;
    }
    interface IRelationEconomiqueService {
        ouvrirModalRelationEconomique(entreeModale: Modele.Application.IOuvrirModale): ng.IPromise<any>;
        ouvrirModalLienEst(personne: Modele.Application.IPersonneEnRelation): ng.IPromise<any>;
        chargerRelationEconomique(identifiantPersonne: number, codeEtablissement: string, majPersonneEnlien?: Modele.Application.IPersonneEnRelation): ng.IPromise<void>;
        relationEconomique: Modele.Application.IRelationEconomique;
        codeEtablissement: string;
        entreeModal: Modele.Application.IOuvrirModale;
        debranchementVersSynthese(personne: Modele.Application.IPersonneEnRelation): ng.IPromise<void>;
        debranchementVersConnaissanceClient(identifiantPersonne: number): ng.IPromise<any>;
        recupererLienEstPersonne(personne: Modele.Application.IPersonneEnRelation, codeEtablissement: string): ng.IPromise<Array<Modele.Application.IPersonneEnRelation>>;
    }
}

declare module RelationEconomique.Services.Rest.RelationEconomique {
    interface IRelationEconomiqueQuery {
        nombreLigneRelatnEcoARenvoyer: number;
        identifiantPersonne: number;
        codeEtablissement: string;
    }
    interface ILienQuery {
        identifiantTiers: number;
        codeEtablissement: string;
        codeCategorieLien?: number;
    }
    interface IRelationEconomiqueServiceAjax {
        getRelationEconomique(query: IRelationEconomiqueQuery): ng.IPromise<Modele.Rest.ICorporateOrganigramme>;
        getLien(query: ILienQuery): ng.IPromise<Modele.Rest.ICorporateTiersLies>;
    }
}

declare module RelationEconomique.Services.Utils {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupService {
        /**
         * Permet d'ouvrir une popup simple d'informations
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
        /**
         * Ouverture d'une popup demandant la confirmation d'une action
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * @param {validerTexte} Texte du bouton de validation
         * @param {closeTexte} Texte du bouton de fermeture
         */
        showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: any, backdrop?: string, size?: string): ng.IPromise<any>;
    }
}
