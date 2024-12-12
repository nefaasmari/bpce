
declare module GGOCommunEpi {
    var app: ng.IModule;
}

declare module GestionGeneriqueOffres.Types.Authentification {
    interface IFormulaireAuthentification {
        /**
         * 'P' => Pour papier
         * 'E' => Pour Electronique
         */
        modeSignature: string;
        autresDestinataire: IAgent[];
        /**
         * Si le tableau contient 2 éléments cela signifie que l'utilisateur a choisi 'Opérant pour le compte du suivi par...'
         */
        signataireMail: IAgent[];
        listeClientsSignataires: IClientSignataireAuthentification[];
        /**
         * PERSONNE MORALE =>"0"
         * PERSONNE PHYSIQUE => "1"
         * PROCURATION => "2"
         */
        typeClient: string;
        securespaceActif: boolean;
        idBadTitulaire: string;
    }
    class FormulaireAuthentification implements IFormulaireAuthentification {
        modeSignature: string;
        autresDestinataire: IAgent[];
        signataireMail: IAgent[];
        listeClientsSignataires: IClientSignataireAuthentification[];
        typeClient: string;
        securespaceActif: boolean;
        idBadTitulaire: string;
        constructor();
    }
    interface IMoyenAuth {
        codeMoyAuth: number;
        libelle: string;
    }
    interface IClientSignataireAuthentification extends myway.comContract.modeles.ISignataireComplet {
        /**
         * Le moyen d'authentification choisi
         */
        moyenAuthentification?: IMoyenAuth;
        /**
         * Le n° de téléphone choisi
         */
        numeroTelephone?: string;
        /**
         * l'adresse mail choisie
         */
        email?: string;
        dataAuthentification?: IDataClientSigantaireAuth;
        /**
         * identifiant utilisateur applicatif
         */
        idUsager?: string;
    }
    interface IDataClientSigantaireAuth {
        /**
         * Le moyen d'authentification choisi
         */
        listeMoyenAuthentification?: IMoyenAuth[];
        /**
         * liste des medias téléphones
         */
        listeNumeroTelephone?: string[];
        /**
         * liste des medias email
         */
        listeEmail?: string[];
    }
    interface IAgent {
        identifiantElementStructure: number;
        identifiantAgent: string;
        libelleElementStructure: string;
        adresseMail: string;
        /**
         * 'OP'  ==> Opérant
         * 'SP'  ==> Suivi Par
         */
        typeAgent: string;
    }
    class Agent implements IAgent {
        identifiantElementStructure: number;
        identifiantAgent: string;
        libelleElementStructure: string;
        adresseMail: string;
        typeAgent: string;
        constructor(caracteristiqueEds: ICaracteristiqueEDS, typeAgent: string, identifiantAgent: string);
    }
    interface ISuiviPar extends IAgent {
    }
    class AgentSuiviPar extends Agent {
    }
    interface IOperant extends IAgent {
    }
    class AgentOperant extends Agent {
    }
    interface IInfoEDS {
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Ligne 2 adresse de l'élément de structure
         */
        ligne2: string;
        /**
         * Ligne 3 adresse de l'élément de structure
         */
        ligne3: string;
        /**
         * Ligne 4 adresse de l'élément de structure
         */
        ligne4: string;
        /**
         * Ligne 5 adresse de l'élément de structure
         */
        ligne5: string;
        /**
         * Ligne 6 adresse de l'élément de structure
         */
        ligne6: string;
        /**
         * Numéro téléphone de contact de l'élément de structure
         */
        numeroTelephone: string;
        /**
         * Code pays INSEE de l'élément de structure
         */
        codePays: string;
        /**
         * Date de début de validité de l'élément de structure
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeEds: string;
        /**
         * Date de fin de validité de l'élément de structure
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEds: string;
        /**
         * Identifiant interne de l'élément de structure
         */
        identifiantInterneEDS: number;
        /**
         * Libellé de l'élément de structure
         */
        libelleEDS: string;
        /**
         * Référence externe de l'élément de structure
         */
        referenceExterneEDS: number;
        /**
         * Code établissement de l'élément de structure
         */
        codeEtablissement: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }
    interface IInfoPosteFonctionnel {
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Type de fonction de l'agent
         */
        typeFonction: string;
        /**
         * Libellé de fonction de l'agent
         */
        libelleFonction: string;
        /**
         * Code qualité de l'agent affecté au poste fonctionnel
         */
        codeQualiteAgent: string;
        /**
         * Adresse messagerie de l'agent
         */
        adresseEMail: string;
    }
    interface IInfoRattachementEDS {
        /**
         * Identifiant interne de l'EDS de rattachement de l'EDS identifié
         */
        identifiantEDSRattachement: number;
        /**
         * Référence externe de l'EDS de rattachement de l'EDS identifié
         */
        referenceEDSRattachement: number;
        /**
         * Type de l'EDS de rattachement de l'EDS identifié
         */
        typeEDSRattachement: string;
        /**
         * Libellé de l'EDS de rattachement de l'EDS identifié
         */
        libelleEDSRattachement: string;
        /**
         * Date de fin de validité de l'EDS de rattachement de l'EDS identifié
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEDSRattachement: string;
        /**
         * Identifiant du responsable de l'EDS de rattachement de l'EDS identifié
         */
        responsableEDSRattachement: number;
    }
    interface IRechercheAgent {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceElementStructure: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.
         * Sauf si l'EDS est un poste fonctionnel (c'est le cas pour rechercheAgent),  on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationAgent: string;
        /**
         * Cette rubrique décrit la date de début de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeAgent: string;
        /**
         * Cette rubrique décrit la date de fin de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque Etablissement.
         *
         * Exemples :
         * 072 / CHARGE DE CLIENTELE DE NIVEAU 2
         * 081 / AGENT COMMERCIAL
         * 082 / RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Numéro d'identification de l'élément de structure hiérarchiquement supérieur à un élément donné.
         */
        identifiantEDSHierarchique: number;
        /**
         * Référence externe de l'EDS hiérarchiquement supérieur.
         */
        referenceEDSHierarchique: number;
        /**
         * Indique le type organisationnel de l'EDS hiérarchiquement supérieur.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente
         */
        typeEDSHierarchique: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleTypeEDSHierarchique: string;
        /**
         * Désignation décrivant l'élément de structure de rattachement (niveau "hiérarchique" supérieur).
         */
        libelleEDSHierarchique: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Référence unique dans MYSYS.
         */
        identfiantAgent: number;
    }
    interface ISituationFinanciere {
        /**
         * Détermine le montant brut de l'activité d'un professionnel sur un exercice annuel :
         * - Le chiffre d'affaires social concerne les entreprises total des ventes TTC de biens et de services
         * - Le montant du budget concerne plus particulièrement les collectivités locales : total des enveloppes de crédits permettant les dépenses de l'exercice.
         *
         * Exprimé en milliers d'euros.
         */
        montantChiffreAffaires: number;
        /**
         * Année de référence du chiffre d'affaire ou du montant du budget.
         */
        anneeChiffreAffaires: number;
        /**
         * Montant des apports (en biens ou numéraires) effectué par les actionnaires ou associés au moment de la création ou de l'augmentation
         * de capital de la société. En milliers d'euros.
         */
        montantCapitalSocial: number;
        /**
         * Montant du capital social de la personne morale exprimé en centimes d'euros.
         */
        montantCapitalSocialEnCentimes: number;
        /**
         * Correspond au volume d'affaire de l'activité de promotion immobilière. Il est stocké en centimes d'Euros, mais restitué au poste de travail en KEuros.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        montantDuCADeLaPromotionImmobiliere: number;
        /**
         * Définition : correspond à l'année de valorisation du volume d'affaire de l'activité de promotion immobilière.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        anneeDuCADeLaPromotionImmobiliere: number;
        /**
         * Cette rubrique permet au central de mettre à jour la date de traçage de la rubrique CA si le CA est saisi sur le PTU. Elle permet aussi
         * au PTU de ne pas afficher les zéros par défaut.
         *
         * Valorisation:
         * - __O__ : Rubrique CA renseignée
         * - __N__ : Rubrique CA non renseignée (zéro par défaut)
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        indicateurDePresenceDuCA: string;
    }
    interface ISecteurActivite {
        /**
         * Famille de code activité exercée par le professionnel.
         *
         * Exemple:
         * - __01__ : agriculture
         * - __03__ : pêche
         * - __16__ : industrie du verre
         */
        codeDeLaFamilleAPE: string;
        /**
         * Classification des catégories juridiques des personnes selon l'INSEE. Correspond au niveau 2 de la nomenclature de l'INSEE. Correspond aux
         * deux premiers caractères du code catégorie juridique / CODACJ.
         *
         * Typologie gérée dans la table DU1F / appli GESTADM.
         *
         * Exemples:
         * - __11__ : artisan - commerçant
         * - __12__ : commercant
         * - __13__ : artisant
         * - __14__ : officier public ou ministériel
         * - __15__ : profession libéral
         * - __16__ : Exploitant agricole
         * - __19__ : autre personne physique
         */
        codeFamilleCategorieJuridique: string;
        /**
         * Détermine le statut dans une catégorie juridique donnée. Correspond à la typologie de niveau 3 de l'INSEE . Correspond aux 2 derniers
         * caractères du code catégorie juridique / CODACJ : format X4.
         */
        codeCategoJuridi2DerCaracteres: string;
        /**
         * Cette rubrique permet de définir les deux derniers caractères du code APE.
         */
        deuxDernierCaracteresAPE: string;
        /**
         * Précise l'activité économique principale du professionnel. Complète le code APE.
         *
         * Exemples:
         * - Concessionnaire Renault
         * - Franchisé Rodier
         */
        activiteEconomiquePrincipale: string;
        /**
         * Libellé libre qui précise le code APE du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        activiteEconomiqueReelleDuLieu: string;
        /**
         * Détermine une famille d'activités des personnes selon l'INSEE.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeDeLaFamilleNAF: string;
        /**
         * Détermine une activité au sein d'une famille d'activités selon l'INSEE.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeNAF3DerniersCaracteres: string;
        /**
         * Code associé à la branche d'activité.
         * Codification pour l'ensemble des caisses.
         * Donnée relative aux personnes morales et entrepreneurs individuels, basée sur une approche commerciale ou sectorielle, permettant
         * de paramétrer des      regroupements fonctionnels de codes NAF.
         * Format XX9999
         */
        brancheActivite: string;
    }
    interface IInformationJuridique {
        /**
         * Date à laquelle une entité professionnelle a commencé d'exister:
         * - date de début d'exploitation pour les personnes physiques
         * - date de création pour les personnes morales
         * Type date au format yyyy-MM-dd
         */
        dateDeCreation: string;
        /**
         * Date à partir de laquelle une entité professionnelle a cessé d'exister :
         * - date de fin d'exploitation pour les personnes physique
         * - date de dissolution d'une personne morale
         * Type date au format yyyy-MM-dd
         */
        dateDeCloture: string;
        /**
         * Le code situation juridique indique dans quel état juridique se trouve une entité professionnelle.
         *
         * Valorisation:
         * - __1__ : En formation
         * - __2__ : Normale
         * - __3__ : Dissoute
         * - __4__ : Sans objet (pseudo personne morale)
         * - __5__ : En cours d'immatriculation
         *
         * __Gestion des incidents__ : Pour avoir un état complet du professionnel, il faut également vérifier qu'il ne fait pas l'objet d'un
         * incident "redressement liquidation judiciaire".
         */
        codeSituation: string;
        /**
         * Détermine le type de personnalité juridique de la personne.
         *
         * Il existe principalement deux types de personnalité :
         * - PJ physique : concerne les individus
         * - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations ...)
         *
         * La personnalité juridique conditionne les droits et obligations.
         *
         * Valorisation:
         * - __1__ : Personne physique
         * - __2__ : Personne morale ou assimilée morale
         */
        indicateurPersonnePhysiqueOuMorale: string;
        /**
         * Détermine si l'entrepreneur individuel a opté pour le statut à responsabilité limitée. Se traduit par la création d'un patrimoine
         * affecté à l'activité professionnelle et séparé du patrimoine personnel.
         *
         * Valorisation:
         * - __O__ : EI
         * - __N__ : Non Concerné (cas des personnes morales)
         */
        indicateurEIRL: string;
        /**
         * Détermine la date de début de validité de l'option de statut à responsabilité limitée pour un entrepreneur individuel donné.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutDeOptionEIRL: string;
        /**
         * Détermine la date de fin de validité de l'option de statut à responsabilité limitée pour un entrepreneur individuel donné.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeFinDeOptionEIRL: string;
        /**
         * Détermine si l'Entrepreneur Individuel a indiqué l'option d'opposabilité de son patrimoine pour ses créances antérieures.
         * Le patrimoine exclusivement affecté à l'activité professionnelle est pris en compte, également pour les litiges antérieurs à la déclaration en EIRL.
         *
         * Valorisation:
         * - __O__ : Oui
         * - __N__ : Non
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        indicateurDeOptionOpposabiliteEIRL: string;
        /**
         * Date de début d'exploitation du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutExploitationDuLieu: string;
        /**
         * Date de fin d'exploitation du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeFinExploitationDuLieu: string;
        /**
         * Indicateur de droit au compte
         */
        indicateurDroitAuCompte: string;
        /**
         * Référence d'identification des entités juridiques (LEI : LEGAL ENTITY IDENTIFIER) effectuant des transactions financières.
         */
        identifiantLei: string;
        /**
         * Classification de la personne selon le règlement EMIR / European Market and Infrastructure Regulation. Attribut porté par une contrepartie
         * effectuant une transaction sur le marché des dérivés
         */
        codeEmir: string;
        /**
         * Autorisation donnée par le Client pour que l'Etablissement puisse effectuer des déclarations à sa place (LEI, classification EMIR).
         * 'O' Etab autorisé à effectuer les déclarations 'N' Etab non autorisé à effectuer les déclarations
         */
        indicateurDelegationDeclaration: string;
    }
    interface IDonneeAdministrative {
        /**
         * Code positionné par traitement qui indique si les données professionnel sont à vérifier.
         *
         * Valorisation:
         * - __0__ : pas de vérification
         * - __1__ : vérification à effectuer
         */
        codeDeRafraichissement: string;
        /**
         * Date système de dernière vérification des données du professionnel.
         * Type date au format yyyy-MM-dd
         */
        dateDeDerniereVerification: string;
        /**
         * Référence libre de la pièce justificative qui a servi lors de la gestion administrative du professionnel.
         *
         * Exemple:
         * - __EXEMPLAIRE DES STATUTS CERTIFIE CONFORME__
         * - __EXEMPLAIRE DU JOURNAL OFFICIEL__
         * - __EXTRAIT DE DELIBERATION SIGNE__
         */
        referenceDeLaPieceJustificative: string;
        /**
         * Code indiquant si l'entreprise est étrangère.
         *
         * Valorisation:
         * - __0__ : Oui
         * - __1__ : Non
         */
        codeIndicateurEntrepriseEtrangere: string;
        /**
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha.
         *
         * Exemple:
         * - __USD__ : dollar - USA
         * - __JPY__ : yen - JAPON
         * - __CNY__ : yuan - CHINE
         * - __DKK__ : couronne - DANEMARK
         */
        codeDevise: string;
        /**
         * __TODO__: Déterminer la différence entre la rubrique ECOLIDV (codeDevise) et la rubrique ECOLID9 (codeDeviseBis).
         */
        codeDeviseBis: string;
        /**
         * Détermine le niveau de relation de la personne avec l’Établissement GCE, personne connue comme :
         * - client : personne détentrice de contrat(s) de produit / service
         * - tiers : personne non _client_ en lien avec une personne _client_; concerne la sphère du Particulier ou Professionnel.
         * Ex : participant à un contrat, représentant légal
         *
         * Le prospect est enregistré comme un tiers au niveau de CODATI et est explicitement déterminé comme prospect dans CDDAPO. Le tiers
         *  requiert moins d'information que le client dans la gestion administrative.
         *
         * Caractéristique de la personne / table DU7A. Permet de déterminer la relation-type de la personne.
         *
         * connue avec L’Établissement -> voir CTDAPR en fonction de CDDAPO / code prospect.
         *
         * Valorisation:
         * - __0__ : Client
         * - __1__ : Tiers
         */
        indicateurClientOuTier: string;
        /**
         * Identifie une personne (tiers) dans BPCE. Identifiant Chrono affecté par la Direction. Risque du Groupe via le flux retour de la Base
         * Tiers Groupe (BTG). Cet identifiant correspond à l'identifiant unique de la personne pour l'ensemble du Groupe BPCE.
         *
         * Cet identifiant peut être modifié durant l'existence de la personne au sein du Systeme d'Information. En effet la BTG *
         * considère une personne active lorsque celle-ci à des engagements au sens Bâle 2.
         */
        identifiantDuTiersGCE: string;
        /**
         * Code établissement de l'entité appartenant à BPCE identifiée par la DRG comme pilote des données sur un Tiers (personne).
         */
        codeEtablissementDeLEntitePilote: string;
        /**
         * Mode d'imposition auquel est assujetti un professionnel entreprise ou entrepreneur individuel.
         *
         * Valorisation:
         * - __1__ : Forfait
         * - __2__ : Réel
         * - __3__ : Impôt sur les sociétés (IS)
         * - __4__ : Sans régime particulier
         * - __5__ : Réel simplifié
         * - __6__ : Impôt sur le revenu des personnes physiques (IRPP)
         */
        codeRegimeFiscal: string;
        /**
         * Mois d'arrêté de la déclaration risques BDF. Format SSAAMM.
         */
        moisDArreteDesRisquesBDF: string;
        /**
         * Dénomination commerciale se rapportant à un fonds de commerce exploité par une société ou assimilée. Dénomination vis à vis
         * de la clientèle. Peut correspondre à l'enseigne. Une société peut avoir un nom commercial différent pour chacun des fonds de commerce qu'elle exploite.
         *
         * Exemples:
         * - La Samaritaine
         * - But
         */
        nomCommercial: string;
        /**
         * Ordre de grandeur du nombre de salariés (en effet l'effectif peut varier en fonction de l'activité du professionnel).
         */
        nombreDeSalaries: number;
        /**
         * Jour d'arrêté du bilan d'un professionnel pour un exercice donné. Format : JJMM. utilisée en complément de l'année du bilan.
         */
        dateArreteComptable: number;
        /**
         * Date système de mise à jour d'au moins une des données professionnel.
         * Type date au format yyyy-MM-dd
         */
        dateDeMiseAJour: string;
        /**
         * Date système d'enregistrement du professionnel.
         * Type date au format yyyy-MM-dd
         */
        dateEnregistrement: string;
        /**
         * Correspond à l'expérience du dirigeant dans l'activité de promotion immobilière.
         *
         * Valorisation:
         * - __1__ : Moins de 5 ans
         * - __2__ : 5 ans et plus
         * - _blanc_ : Inconnue
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        experienceDuDirigeantEnImmobilier: string;
        /**
         * Correspond à l'année de valorisation de l'expérience du dirigeant concernant l'activité de promotion immobilière.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        anneeDeSaisieDeExperienceDuDirigeant: string;
        /**
         * Nature de l'organisation commerciale; Caractérise l'activité professionnelle.
         *
         * Valorisation:
         * - _blanc_ : Inconnu
         * - __0__ : Non concerné
         * - __1__ : Franchisé ou Entreprise Affiliée
         * - __2__ : Franchiseur ou Tête de Réseau
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        natureDeLOrganisationCommerciale: string;
        /**
         * Détermine le profil d'un professionnel. Classification des professionnels selon la gestion des données comptables et financières.
         *
         * Valorisation:
         * - __Z1__ : 2050 PRO REEL NORMAL
         * - __Z2__ : 2033 PRO REEL SIMPLIFIE
         * - __Z3__ : 2035 PROFESSION LIBERALE
         * - __Z4__ : 2050 PME REEL NORMAL
         * - __Z5__ : AUTRE PRO REEL NORMAL
         * - __Z6__ : AUTRE PRO REEL SIMPLIFIE
         * - __Z7__ : PROFESSIONNEL AU FORFAIT
         * - __ZA__ : 2050 PROMOTEUR
         * - __ZB__ : 2050 LOTISSEUR
         * - __ZC__ : 2050 MARCHAND DE BIENS
         * - __ZD__ : 2050 INVESTISSEUR
         * - __ZE__ : 2050 PRO AUTRES SR
         * - __ZF__ : 2050 PME AUTRES SR
         * - __ZG__ : 2033 PRO AUTRES SR
         * - __ZH__ : 2035 PRO AUTRES SR
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeDuProfilClient: string;
        /**
         * Résidents:
         * - Personnes physiques ayant leur principal centre d'interet en FRANCE
         * - Fonctionnaires et autres agents publics français en poste à l'etranger
         * - Personnes morales françaises ou étrangères pour leurs etablissement en FRANCE
         * La France est définie comme suit :
         * 	- France métropolitaine (avec la principaute de MONACO )
         * 	- DOM (avec Saint-Pierre et Miquelon)
         * 	- TOM (avec Mayotte)..
         *
         * Non résidents:
         * - Personnes physiques ayant leur principal centre d'interet à l'etranger
         * - Fonctionnaires et autres agents publics étrangers en poste en FRANCE
         * L'étranger est défini comme suite :
         * 	- Pays autre que la France (y compris les Etats dont dont l'Institut d'Emission est lié au Trésor Français
         * 	par un compte d'opérations).
         * - La distinction entre les deux types de non-résidents
         * 	- Non-résident zone euro : Personnes appartenant à un un Etat membre de la zone de monnaie unique (EMUM),hors-France,
         * 	- Non-résident hors zones euro : Personnes appartenant à un autre pays étranger (non-EMUM).
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeResident: string;
        /**
         * Code permettant d'identifier l'établissement qui souhaite être pilote ou qui est pilote du Tiers.
         *
         * Valorisation:
         * - __1__ : Je suis pilote, ou je souhaite être pilote
         * - __2__ : Je ne suis pas pilote, ou je ne souhaite pas être pilote
         * - __3__ : Je ne me prononce pas, je n'ai pas d'avis
         * - _blanc_ : N.C.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codePiloteDuTiers: string;
        /**
         * Détermine un type de pièce justifiant d'une activité/situation professionnelle.
         *
         * Exemples:
         * - __00__ : EXEMPLAIRE DES STATUTS CERTIFIE CONFORME
         * - __01__ : EXEMPLAIRE DU JOURNAL OFFICIEL
         * - __02__ : EXTRAIT DE DELIBERATION SIGNE
         * - __03__ : COPIE CERTIFIE CONFORME DU J.O
         * - __04__ : AGREMENT DE L'ASSOCIATION
         * - __05__ : COPIE DE L'ACTE AUTHENTIQUE OU TESTAMENT
         * - __06__ : STATUTS DE LA DELEGATION DEPARTEMENTALE
         * - __07__ : DECRET DE RECONNAISSANCE LEGALE
         * - __08__ : COPIE DES STATUTS CERTIFIEE CONFORME
         * - __09__ : COPIE DE L'EXTRAIT KBIS REG. DU COMMERCE
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeDeLaPieceJustificativeProfessionnelle: string;
        /**
         * Cette rubrique permet au central de mettre à jour la date de traçage de la rubrique nb de salariés si le nb de salariés est saisi sur
         * le PTU. Elle permet aussi au PTU de ne pas afficher les zéros par défaut.
         *
         * Valorisation:
         * - __O__ : Rubrique nb de salariés renseignée
         * - __N__ : Rubrique nb de salariés non renseignée (zéro par défaut)
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        indicateurDePresenceDuNombreDeSalarie: string;
        /**
         * Désignation longue du lieu d'activité. Elle est utilisée pour l'impression du volet un de l'adresse.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        designationLongueDuLieuActivite: string;
        /**
         * Libellé de désignation de l'enseigne d'un lieu d'activité d'un Professionnel. Signe/marque/appellation apposé sur un établissement
         * commercial le distinguant des autres établissements. Élément incorporel du fonds de commerce, elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         *
         * L'enseigne peut ne pas être unique mais commune, ex: Café du Commerce.
         *
         * Désignation longue qui référence le volet un et deux de l'adresse.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        enseigneCommercialeDuLieuActivite: string;
        /**
         * Numéro de télex du lieu activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroDeTelexDuLieuActivite: string;
        /**
         * Numéro de télécopie du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroTelecopieurDuLieuActivite: string;
    }
    interface ICotation {
        /**
         * Cote d'une entreprise établie à une date donnée. Concerne les entreprises suivies dans la base FIBEN.
         */
        cotation: string;
        /**
         * En retour des traitements FIBEN, contient la date de cotation de la Banque de France, en lien avec la cote Banque de France COMRCT.
         * Type date au format yyyy-MM-dd
         */
        dateDeLaCotation: string;
        /**
         * Cotation précédemment enregistrée pour une entreprise donnée.
         */
        cotationPrecedente: string;
        /**
         * Date de cotation Fiben BDF N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDeLaCotationPrecedente: string;
        /**
         * Détermine la cotation FIBEN d'un dirigeant donné pour une personne morale donnée.
         *
         * Valorisation:
         * - __000__ : Pas de réserve
         * - __040__ : Attention particulière
         * - __050__ : Réserves
         * - __060__ : Réserves sérieuses
         */
        cotationDuDirigeant: string;
        /**
         * Date à laquelle est référencée la dernière mise à jour de la cotation FIBEN du dirigeant.
         * Type date au format yyyy-MM-dd
         */
        dateDeLaCotationDuDirigeant: string;
        /**
         * La cotation FIBEN du dirigeant est attribué au dirigeant d'une personne morale ou de l'activité d'une personne physique.
         *
         * Règles de gestion et types de contrôle : La cotation du dirigeant est saisie et stockée sur l'activité. Aucune application ne
         * l'utilise. Elle est utilisée par des procédures internes caisses.
         *
         * Valorisation:
         * - __0__ : Pas de réserve
         * - __4__ : Attention particulière
         * - __5__ : Réserves
         * - __6__ : Réserves sérieuses
         */
        cotationSimplifieDuDirigeant: string;
        /**
         * Date à laquelle est référencée la dernière mise à jour de la cotation professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeDerniereMiseAJourDeLaCotation: string;
        /**
         * Cette rubrique identifie la date de dernière révision de l'activité professionnelle. Dans le cadre des interfaces ANADEFI --> SIRIS,
         * elle correspond à la date de dernière mise à jour du dossier ANADEFI, même si la cotation n'évolue pas.
         * Type date au format yyyy-MM-dd
         */
        dateDeDerniereRevisionDeLaCotation: string;
        /**
         * Précise la "qualité" d'un professionnel/collectivité.
         *
         * Règles de gestion et types de contrôle : Obligation de côter tout client ouvrant un compte commercial. La cote permet d'établir les
         *  fourchettes de taux d'agios ou de frais.
         *
         * Valorisation:
         * - __A__ : Affaire excellente
         * - __B__ : Bonne affaire : rien de défavorable
         * - __C__ : Affaire de qualité moyenne : précautions à prendre
         * - __D__ : Affaire de mauvaise qualité : à surveiller
         * - _blanc_ : Client non encore coté ('*' à l'édition)
         * - __E__ : Contentieux
         */
        codeCotation: string;
    }
    interface IActiviteProfessionnelle {
        /**
         * Numéro de SIREN du professionnel enregistré dans le SI d'un Établissement du GCE.
         */
        numeroSiren: string;
        /**
         * Identifiant d'un Établissement du RCE. Il correspond au code Banque sous lequel une Caisse ou un établissement du réseau CE est
         * répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS Perso.
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Établissement du Groupe CE. Numéro chrono attribué
         * par le système. Une personne morale est enregistrée sous une seule activité : valeur 1. Une personne physique peut avoir plusieurs
         *  activités en tant que professionnel : enregistrement chrono.
         *
         * Un professionnel est référencé dans le SI d'un Établissement du Groupe CE par :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Prof
         * Constitue une référence unique dans MYSYS.
         */
        numeroChrono: number;
        situationFinanciere: ISituationFinanciere;
        secteurActivite: ISecteurActivite;
        donneAdministrative: IDonneeAdministrative;
        informationJuridique: IInformationJuridique;
        cotation: ICotation;
        listeAdresse: Array<IAdresse>;
        listeEtablissement: Array<IEtablissement>;
        /**
         * RUBRIQUE MERE : IKDQST
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroComplementaireSIRET: string;
        listeImmatriculation: Array<IImmatriculation>;
        /**
         * à partir de la V17.01 seulement
         *
         * Si 'T' : mise à jour complète avec les Immatriculations
         * Si 'I' : mise à jour des Immatriculations seulement
         * Sinon mise à jour de corporateInformation sans les Immatriculations
         */
        codeMajImmatriculation: string;
    }
    interface IParametreCorporate {
        compteurEnregistrement: number;
        /**
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        referenceExterneDeAgent: number;
        /**
         * Poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         *
         * Valorisation:
         * - __T__ : Titulaire
         * - __R__ : Remplaçant
         * - __S__ : Suppléant
         * - __A__ : Affectation temporaire
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeQualiteDeAgentAffecte: string;
        /**
         * Trouver la différence entre les rubriques _ENOCEE1_ et _ENOCEE6_.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        identifiantDeElementDeStructure: number;
        /**
         * Trouver la différence entre les rubriques _ENOCEE1_ et _ENOCEE6_.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        identifiantDeElementDeStructureBis: number;
        /**
         * Indique si la personne est à l'état bloquée dans la table VAO.
         *
         * Valorisation:
         * - __N__ : Non bloqué
         * - __B__ : Bloqué
         * - __D__ : Débloqué
         */
        codeDeBlocageVAO: string;
        /**
         * La rubrique CIDCCB indique si un client bancaire existe pour une activité professionnelle.
         *
         * Valorisation:
         * - __O__ : Existe
         * - __N__ : N'existe pas
         */
        indicateurExistanceDeEntiteTitulaire: string;
    }
    interface ICorporateActiviteProfessionnelle {
        activitesProfessionnelles: Array<IActiviteProfessionnelle>;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
        parametreCorporate: IParametreCorporate;
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
         * 01 RCS (Registre du commerce et des sociétés) 02 RM (Répertoire des métiers) 03 MSA (Mutualité sociale agricole) 04 Publication journal
         *  officiel 05 Préfecture 06 Mairie 07 Ordre des métiers 08 Autres
         */
        codeTypeRegistre: string;
        /**
         * Numéro d'immatriculation à un registre officiel d'un professionnel.
         *
         * Ce numéro peut être notamment :
         * - un numéro RCS
         * - un numéro Registre des métiers
         * - un numéro d'inscription à la préfecture
         * - un numéro d'inscription à la MSA
         * - un ordre des métiers pour les professions libérales
         * - un numéro de publication au JO
         *
         * Le contenu de NODAIM est interprété en fonction de la valeur du code CTDARI qui lui correspond.
         */
        numeroImmatriculationRegistre: string;
        /**
         * Libellé du lieu d'inscription au registre.
         */
        lieuInscriptionRegistre: string;
        /**
         * Date à laquelle une personne est immatriculé en tant que professionnel auprès d'un organisme habilité (ex: chambre de commerce,...).
         * Type date au format yyyy-MM-dd
         */
        dateImmatriculation: string;
    }
    interface IAdresse {
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique d'une personne référencée dans Client-Tiers / appli GESTADM.
         */
        identifiantAdresse: number;
        /**
         * Indique le numéro de la voie au fichier des PTT pour les voies francaises répertoriées.
         */
        numeroDeLaVoiePTT: number;
        /**
         * RUBRIQUE MERE : CODGCP. CODIFICATION NON NORMALISEE : UTILISER CODGCP.
         */
        numeroDuCodePostalPTT: string;
        /**
         * Détermine le quartier d'une adresse.
         */
        codeDuQuartier: string;
        /**
         * Numéro de la tournée du facteur. Cette donnée pourra être utilisée à des fins de ciblage marketing de la clientèle.
         */
        numeroDeLaTourneeDuFacteur: number;
        /**
         * Numéro de téléphone associé à une adresse et concernant un particulier ou un lieu d'activité pour un professionnel.
         */
        numeroDeTelephoneAdresse: string;
        /**
         * Identifie un pays ou territoire selon la norme INSEE.
         *
         * Exemples:
         * - __99000__ : France
         * - __99132__ : Grande Bretagne
         * - __99109__ : Allemagne
         * - __99134__ : Espagne
         */
        codeDuPaysINSEE: string;
        /**
         * Identifie une commune / lieu-dit selon la nomenclature INSEE.
         *
         * Format du code INSEE des communes :
         * - numéro minéralogique du département
         * - numéro de code de la commune
         *
         * Format du code pour les lieux-dits (localités n'ayant pas le statut de commune) :
         * - numéro minéralogique du département
         * - numéro de code du lieu-dit
         */
        codeDeLaLocaliteINSEE: string;
        /**
         * Permet de savoir qui est le possesseur de l'adresse.
         *
         * Valorisation:
         * - __1__ : PERSONNE
         * - __2__ : LIEU D'ACTIVITE
         * - __3__ : ENTITE JURIDIQUE (pas géré)
         * - __4__ : ELEMENT DE STRUCTURE (pas géré)
         */
        indicateurDePossessionAdresse: string;
        /**
         * Numéro d'identification du lieu d'activité d'un professionnel dans le SI d'un Établissement du Groupe CE.
         *  Implantation d'une activité d'un professionnel. Peut correspondre à un établissement au sens INSEE.
         *
         * Numéro chrono attribué par le système. Identification du lieu :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Prof
         * - NODALS / Numéro chrono Lieu
         *
         * Constitue une référence unique dans MYSYS.
         */
        numeroChronoDuLieuActivite: number;
        /**
         * Détermine la nature/finalité d'une adresse.
         *
         * Valorisation:
         * - __1__ : Adresse légale (domicile), localisation pour un lieu d'activité
         * - __4__ : Adresse communication (correspondance)
         * - __6__ : Adresse spéciale communication
         */
        codeDuTypeAdresse: string;
        /**
         * Code validité de l'adresse. Code initialisé lors du traitement de l'adresse par le logiciel UNICONVERT.
         *
         * Valorisation:
         * - __00__ : Adresse correcte
         * - __XY__ : Adresse forcée avec X : contrôle analyse syntaxique et Y : contrôle analyse géographique (code issu d'une transposition des codes retour UNISERV).
         */
        codeDeValiditeAdresse: string;
        /**
         * Cette rubrique est initialisée lors de la saisie des adresses au PTMS. Elle indique si le téléphone de la personne est en liste rouge ou non.
         *
         * Valorisation:
         * - __0__ : Pas en liste rouge
         * - __1__ : En liste rouge
         */
        indicateurDeTelephoneSurListeRouge: string;
        /**
         * Numéro de fax du particulier ou du lieu d'activité pour un professionnel. Pour un particulier, il s'agit dans la plupart des cas, du numéro de fax du domicile.
         */
        numeroFax: string;
        /**
         * Cette rubrique indique si le client détient un téléphone. Permet d'indiquer que la rubrique numéro de téléphone de
         * l'adresse client n'est pas renseignée parce que le client n'a pas le téléphone.
         *
         * Valorisation:
         * - _blanc_ : Valeur d'initialisation
         * - __1__ : Ne détient pas de téléphone
         */
        indicateurDeDetentionDeTelephone: string;
        /**
         * Cette donnée précise à quoi correspond le téléphone NODATP.
         */
        commentaireTelephone: string;
        /**
         * Indique le numéro de la voie du fichier HEXAVIA pour les voies francaises répertoriées.
         */
        numeroDeVoieHEXAVIA: number;
        /**
         * Code postal pour la France et l'étranger :
         * - Sur 5 caractères pour la France
         * - Sur 9 caractères pour l'étranger : peut être en alphanumérique
         */
        codePostalPourFranceEtEtranger: string;
        /**
         * RUBRIQUE MERE : LIDGCM
         */
        libelleCommune: string;
        /**
         * Libellé de la ligne 2 d'une adresse normée AFNOR. La ligne 2 permet d'indiquer le point de remise ou un complément
         * d'identifiaction du destinataire : N° APP ou BAL-ETAGE-COULOIR-ESC.
         *
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement
         * , de porte, de numéro de boite aux lettres, etc ...
         */
        ligne2AdresseAFNOR: string;
        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR. La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution)
         * : ENTREE-BATIMENT-IMMEUBLE-RESIDENCE.
         *
         * La ligne 3 correspond à tout ce qui est à l'extérieur du batiment. entrée, batiment, bloc, tour etc ...
         */
        ligne3AdresseAFNOR: string;
        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR. La ligne 4 permet d'identifier la voie de destination NUMERO-LIBELLE DE LA VOIE. Peut comprendre :
         * - Le numéro dans la voie, type et nom de voie
         * - Le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit
         * - Un service X
         * - Une boîte postale
         * - Un numéro de CEDEX
         */
        ligne4AdresseAFNOR: string;
        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR. La ligne 5 permet d'identifier la destination : LIEU DIT ou SERVICE PARTICULIER
         *  DE DISTRIBUTION. Peut comprendre :
         * - Nom d'un quartier, d'un lieu dit, d'un hameau
         * - Nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu dit et possédant plusieurs voies internes.
         */
        ligne5AdresseAFNOR: string;
        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR. La ligne 6 permet d'identifier la destination : CODE POSTAL et LOCALITE DE DESTINATION
         * ou CODE CEDEX et LIBELLE CEDEX. Peut comprendre :
         * - Le numéro de code postal et nom de la localite
         * - Le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6AdresseAFNOR: string;
        /**
         * le code iso du pays
         */
        codeISOPays: string;
        /**
         * le libelle du pays
         */
        libelleISOPays: string;
        /**
         * indicatif du téléphone :
         *  - +33 pour la france
         * - + 32 pour la belgique
         */
        indicatifTelephone: string;
        /**
         * indicatif du téléphone du fax :
         *  - +33 pour la france
         * - + 32 pour la belgique
         */
        indicatifTelephoneFax: string;
    }
    interface IEtablissement {
        /**
         * Numéro de télex du lieu activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroDeTelexDuLieuActivite: string;
        /**
         * Numéro de télécopie du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroTelecopieurDuLieuActivite: string;
        /**
         * Désignation longue du lieu d'activité. Elle est utilisée pour l'impression du volet un de l'adresse.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        designationLongueDuLieuActivite: string;
        /**
         * Libellé de désignation de l'enseigne d'un lieu d'activité d'un Professionnel. Signe/marque/appellation apposé sur un établissement
         * commercial le distinguant des autres établissements. Élément incorporel du fonds de commerce, elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         *
         * L'enseigne peut ne pas être unique mais commune, ex: Café du Commerce.
         *
         * Désignation longue qui référence le volet un et deux de l'adresse.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        enseigneCommercialeDuLieuActivite: string;
        /**
         * Date de début d'exploitation du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutExploitationDuLieu: string;
        /**
         * Date de fin d'exploitation du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeFinExploitationDuLieu: string;
        /**
         * Libellé libre qui précise le code APE du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        activiteEconomiqueReelleDuLieu: string;
        /**
         * Détermine une famille d'activités des personnes selon l'INSEE.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeDeLaFamilleNAF: string;
        /**
         * Détermine une activité au sein d'une famille d'activités selon l'INSEE.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeNAF3DerniersCaracteres: string;
        /**
         * Détermine le statut du lieu d'activité d'un professionnel.
         * Permet de déterminer le siège
         *
         * Valeurs :
         *
         * - '1'        Etablissement siège
         * - '2'        Etablissement secondaire
         */
        codeStatut: string;
        /**
         * RUBRIQUE MERE : IKDQST
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroComplementaireSIRET: string;
        listeAdresse: Array<IAdresse>;
        /**
         * Numéro d'identification du lieu d'activité d'un professionnel dans le SI d'un Établissement du Groupe CE. Implantation d'une
         * activité d'un professionnel. Peut correspondre à un établissement au sens INSEE.
         *
         * Numéro chrono attribué par le système. Identification du lieu :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Prof
         * - NODALS / Numéro chrono Lieu
         *
         * Constitue une référence unique dans MYSYS.
         */
        numeroChronoDuLieuActivite: number;
        /**
         * Code associé à la branche d'activité.
         * Codification pour l'ensemble des caisses.
         * Donnée relative aux personnes morales et entrepreneurs individuels, basée sur une approche commerciale ou sectorielle, permettant de paramétrer
         * des      regroupements fonctionnels de codes NAF.
         * Format XX9999
         */
        brancheActivite: string;
    }
    interface IMessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur. Valeurs
         * : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         *
         * la partie utile du code entité (sur 4 car.) . pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères
         * du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé) . pour un segment, elle correspond
         *  aux 4 carac. codifiant le segment. le rang de la rubrique (sur 3 car.) le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues
         *  via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
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
    interface IPortefeuilleRattachement {
        /**
         * indique le type de portefeuille de suivi clientèle, à pour valeur :
         *  - H : hors portefeuille
         *  - R : portefeuille réservoir
         *  - C : portefeuille collectif
         *  - N: portefeuille nominatif
         */
        codeTypePortefeuille: string;
        /**
         * Numéro d'identification interne de l'élément de structure de type agence (type3) propriétaire du portefeuille de suivi clientèle.
         */
        identifiantElementStructurePortefeuille: number;
        /**
         * Libellé de l'élément de structure propriétaire du portefeuille de suivi de clientèle
         */
        libelleElementStructurePortefeuille: string;
        /**
         * numéro d'identification interne de l'élément de structure assurant le suivi du portefeuille clientèle, correspond à :
         *  - un poste fonctionnel pour un portefeuille nominatif affecté
         *  - (à compléter)pour les portefeuille non affecté
         */
        identifiantElementStructureSuiviPortefeuille: number;
        /**
         * Libellé de l'élément de structure assurant le suivi du portefeuille clientèle
         */
        libelleElementStructureSuiviPortefeuille: string;
        /**
         * Numéro d'identification d'un portefeuille de suivi clientèle
         */
        identifiantPortefeuille: number;
        /**
         * Indique le motif de rattachement à un portefeuille de clientèle (de type réservoir uniquement), à pour valeur :
         *  - A : Autre Motif
         *  - P : Proposition de mise en portefeuille
         *  - S : changement de segmentation
         *  - D : Changement de domiciliation
         */
        codeMotifPortefeuille: string;
        /**
         * libellé du portefeuille de suivi clientèle
         */
        libellePortefeuille: string;
    }
    interface IPortefeuilleTransfert {
        /**
         * Numéro d'identification du portefeuille destnatire du transfert
         */
        identifiantPortefeuilleTransfert: number;
        /**
         * Indicateur d'envoi d'un message d'information au chef d'agence sur demande de transfert de portefeuille, prend les valeurs:
         *  - O : envoi de message
         *  - N : pas d'envoi de message
         */
        indicateurEnvoiMessage: string;
        /**
         * Indique le motif de transfert à un portefeuille de clientèle (de type réservoir uniquement), à pour valeur :
         *  - A : Autre Motif
         *  - P : Proposition de mise en portefeuille
         *  - S : changement de segmentation
         *  - D : Changement de domiciliation
         */
        codeTypeMotifTransfert: string;
        /**
         * Numéro d'identification de l'élément de structure affecté au portefeuille de transfert,
         */
        identifiantElementStructurePortefeuilleTransfert: number;
    }
    interface ITiersPortefeuille {
        portefeuilleRattachement: IPortefeuilleRattachement;
        portefeuilleTransfert: IPortefeuilleTransfert;
        /**
         * Code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'une relation économique correspondant à une regroupement de plusieurs tiers ayant un lien familial et/ou économique entre elles
         */
        identifiantRelationEconomique: number;
        /**
         * Numéro d'identification d'une personne référencé comme client d'un établissement CEP
         */
        identifiantTiers: number;
    }
    interface ITiers {
        listeAdresse: Array<IAdresseClient>;
        etablissement: IEtablissement;
        identification: IIdentification;
        particulierInformation: IParticulierInformation;
        informationProfessionnelle: IInformationProfessionnelle;
        listeFraicheurRubrique: Array<IFraicheurRubrique>;
        listeMedia: Array<IMedia>;
        listeTiersLies: Array<ITiersLies>;
        listeTiersLiesAdministratifs: Array<ITiersLiesAdministratifs>;
        listeRevenu: Array<IRevenu>;
        listeCharge: Array<ICharge>;
        chargeImposition: IChargeImposition;
        listeBlocNotes: Array<IBlocNotes>;
        particulierNotation: IParticulierNotation;
        listeTypeRelationEconomique: Array<IListeRelationEconomique>;
        listePatrimoineFinancier: Array<IPatrimoineFinancier>;
        listePatrimoineImmobilier: Array<IPatrimoineImmobilier>;
        listeParticulierSensibilite: Array<IParticulierSensibilite>;
        listeParticulierProjet: Array<IParticulierProjet>;
        adresseEmployeur: IAdresseEmployeur;
        succession: ISuccession;
        manifestationPersonne: IManifestationPersonne;
        status: IStatus;
    }
    interface IStatus {
        codeStatus: number;
        infosErreur: Array<IInfosErreurs>;
    }
    interface IInfosErreurs {
        codeRessource: number;
        libelleRessource: string;
        messageErreur: string;
    }
    interface IManifestationPersonne {
        identifiantPersonne: number;
        codeEtablissement: string;
        codePersonnaliteJuridique: string;
        codeStatutDeces: string;
        dateDecesPersonne: string;
        dateDerniereManifestation: string;
        codeProvenanceManifestation: string;
        libelleDetailEvtManifestation: string;
        dateCreationMajEnregistrement: string;
        idAgentAppliCreationMaj: string;
    }
    interface ISuccession {
        identifiantPersonne: number;
        codeEtablissement: string;
        dateOuvertureSuccession: string;
        dateFermetureSuccession: string;
        montantARecycler: number;
        dateModification: string;
        referenceExterneAgent: number;
        designationAgent: string;
        listeOperationSuccession: Array<IOperationSuccession>;
        indicateurListe: string;
        page: string;
    }
    interface IOperationSuccession {
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroOrdre: number;
        dateRecyclageSuccession: string;
        deuxiemePersonneEnRelation: number;
        numeroCaisse: string;
        codeTypeEpargneContrat: string;
        montantRecycleOrigineCE: number;
        montantRecycleAutreEtablissement: number;
        identifiantContactAssocie: number;
        identifiantInternePFMaj: number;
        designationAgent: string;
        dateMajRecyclageSuccession: string;
    }
    interface IAdresseEmployeur {
        identifiantPersonne: number;
        codeEtablissement: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeTypeRetourPTT: string;
        dateDernierRetourPTTAdresse: string;
        nombreRetourPTT: number;
        nombreModificationAdresse: number;
        dateCreationAdresse: string;
        dateDerniereMAJAdresse: string;
        dateRestructurationAdresse: string;
        codeISOPays: string;
        codeInseePays: string;
        nomEmployeurParticulier: string;
    }
    interface IParticulierProjet {
        identifiantRelationEconomique: number;
        typeProjet: string;
        datePrevisionnelleProjet: string;
        montantPrevisionnelProjet: number;
        indicateurPresenceMontantProjet: number;
        commentaireProjet: string;
    }
    interface IParticulierSensibilite {
        identifiantRelationEconomique: number;
        typeSensibilite: string;
        inidicateurSensibilite: string;
        dateModificationEnregistrement: string;
        codeAgent: number;
    }
    interface IPatrimoineImmobilier {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        codeNatureBien: string;
        codeNatureOccupationHabitat: string;
        codeTypeUsageBien: string;
        codeTypeHabitation: string;
        dateEntreeLogement: string;
        capitalRestantDuBien: number;
        dateModification: string;
        valeurEstimeeBien: number;
        coutAcquisition: number;
        codePostalLocalisationBien: string;
        codeLocaliteLocalisationBien: string;
        libelleLocaliteLocalisationBien: string;
        codePaysLocalisationBien: string;
        numeroOrdreBienImmobilier: number;
        dateMajCapitalRestantDu: string;
    }
    interface IPatrimoineFinancier {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeEtablissementEntiteJuridique: string;
        identifiantRelationEconomique: number;
        numeroEntiteTitulaire: number;
        designationBancaireCourte: string;
        codeTypeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        personnesEntiteTitulaire: Array<number>;
        produitsServicesInternes: Array<IProduitInterne>;
        produitsServicesExternes: Array<IProduitExterne>;
    }
    interface IProduitInterne {
        montantEncours: number;
        montantVersementRemboursement: number;
        codePeriodiciteVersement: string;
        codeQualitePersonneContrat: string;
        codeTypeProduitService: string;
        dateFinContrat: string;
        codeGuichetInterbancaire: string;
        referenceProduitService: string;
        typeLienPersonneProduit: string;
        codeEtatProduitService: string;
        dateOuvertureContrat: string;
    }
    interface IProduitExterne {
        montantEncours: number;
        montantVersementRemboursement: number;
        codePeriodiciteVersement: string;
        codeQualitePersonneContrat: string;
        codeTypeProduitService: string;
        dateFinContrat: string;
        identifiantPersonne: number;
        numeroProduitServiceExterne: number;
        codeEtablissementExterne: string;
        commentaireProduitsServicesExterne: string;
        nombreUnitesProduitServiceExterne: number;
    }
    interface IRelationEconomique {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        deuxiemePersonneRelation: number;
        codeTypeLienInterPersonne: string;
        codeSensLienInterPersonne: string;
        codeCivilitePersonne: string;
        nomFamillePersonne: string;
        nomUsagePersonne: string;
        premierPrenomPersonne: string;
        identifiantElementStrucutre: number;
        designationCourte: string;
        indicateurPersonneRelation: string;
        codeQualitePersonneRelation: string;
        codePersonnaliteJuridique: string;
        codeLeaderEspacePrive: string;
        codeLeaderEspaceEntreprise: string;
        codeOrigineEvenement: string;
        codeTypeContactRelation: string;
        indicateurForcageGerePar: string;
        nomCommercialProfessionnel: string;
    }
    interface IParticulierNotation {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeSegmentRisque: string;
        dateSegmentationRisque: string;
        codeModeleNotationRisque: string;
        valeurNoteRisque: string;
        dateNoteRisque: string;
        heureNoteRisque: string;
        codeInscriptionFICP: string;
        dateDebutInscriptionFICP: string;
        dateFinInscriptionFICP: string;
        codeTypeFichageFCC: string;
        dateDebutFichageFCC: string;
        dateFinFichageFCC: string;
        dateInterrogationFichage: string;
        codeContexteMetier: string;
        codeSituationBDF: string;
        codeStatutPersonne: string;
        dateDecisionPassageDouteux: string;
        codeMotifModificationSain: string;
        dateModificationStatutDouteux: string;
    }
    interface IBlocNotes {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreDuCommentaire: number;
        dateCreationEnregistrement: string;
        dateModificationEnregistrement: string;
        codeAgent: number;
        libelleAgent: string;
        commentaireBlocNote: string;
    }
    interface IChargeImposition {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        anneeReferenceImposition: string;
        nombrePartsImposition: number;
        indicMntImpot: number;
        mntImpotRevenu: number;
        dateModificationMntImpotRevenu: string;
        indicPaiementISF: number;
        typeTrancheImposition: string;
        indicMtTaxeFonciere: string;
        mntTaxeFonciere: number;
        dateModificationTaxeFonciere: string;
        indicMntTaxeHabitat: string;
        mntTaxeHabitation: number;
        dateModificationTaxeHabitation: string;
        mntRevenuImposable: number;
        mntISF: number;
        reductionImpots: Array<IReductionImpot>;
    }
    interface IReductionImpot {
        identifiantRelationEconomique: number;
        codeReductionImpot: string;
        mntReductionImpot: number;
    }
    interface ICharge {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreCharge: number;
        codeTypeCharge: string;
        nombrePeriode: number;
        montantPeriodiqueCharge: number;
        montantChargeAnnuel: number;
        dateFinValiditeCharge: string;
        dateDebutValiditeCharge: string;
    }
    interface IRevenu {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        numeroOrdreRevenu: number;
        codeTypeRevenu: string;
        libelleTypeRevenu: string;
        nombrePeriode: number;
        montantRevenuAnnuel: number;
        dateFinValiditeRevenu: string;
        dateDebutValiditeRevenu: string;
        montantPeriodiqueRevenu: number;
    }
    interface ITiersLiesAdministratifs {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeTypeLienInterPersonne: string;
        codeSensLienInterPersonne: string;
        identifiantPersonneLie: number;
        refPieceJustificatifLien: string;
        personneRattacheeRelation: string;
        designationRelationEconomique: string;
        codeFamilleLienInterPersonne: string;
        pourcentageCapitalistique: number;
        codeQualificationLienInterPersonne: string;
        numeroLienInterlocuteur: number;
        dateDebutEffetLienInterPersonne: string;
        dateFinEffetLienInterPersonne: string;
    }
    interface ITiersLies {
        identifiantPersonne: number;
        codeEtablissement: string;
        codeTypeLienInterPersonne: string;
        codeSensLienInterPersonne: string;
        identifiantPersonneLie: number;
        refPieceJustificatifLien: string;
        personneRattacheeRelation: string;
        designationRelationEconomique: string;
        codeFamilleLienInterPersonne: string;
        pourcentageCapitalistique: number;
        codeQualificationLienInterPersonne: string;
        dateDebutEffetLienInterPersonne: string;
        dateFinEffetLienInterPersonne: string;
    }
    interface IMedia {
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
        indicateurPreferenceMedia: string;
        indicateurSecu: string;
        referenceAccesMedia: string;
        indicatifTel: string;
        indicateurOPTIN: string;
        indicateurProOptout: string;
        indicateurOppositionTelephone: string;
        indicateurEnvoiCourrier: string;
        typePersonne: string;
    }
    interface IFraicheurRubrique {
        identifiantPersonne: number;
        codeEtablissement: string;
        attributsRubrique: IAttributsRubrique;
        attributsDonnee: IAttributsDonnee;
        codeAction: string;
        dateModification: string;
        codeAgentMaj: number;
        codePosteFonctionnelAgentMaj: number;
    }
    interface IAttributsDonnee {
        identifiantDonnee: string;
        identifiantValeur: string;
        libelleDonnee: string;
    }
    interface IAttributsRubrique {
        identifiantRubrique: string;
        libelleRubrique: string;
        codeEtatRubrique: string;
        datePeremption: string;
        typeObjetGestion: string;
    }
    interface IInformationProfessionnelle {
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        designationCourteLieuActivite: string;
        codeStatutLieuActivite: number;
        numeroTelexLieuActivite: string;
        numeroTelecopieurLIeuActivite: string;
        effectifLieuActivite: number;
        enseigneCommercialeLieuActivite: string;
        dateDebutExploitLieuActivite: string;
        dateFinExploitLieuActivite: string;
        activiteEconomiqueReeleLieu: string;
        dateEnregistrementLieuActivite: string;
        dateDerniereMajLieu: string;
        codeRafraichissementLieuActivite: string;
        dateDerniereVerifLieuActivite: string;
        designationLongueLieuActivite: string;
        numeroSirenPro: string;
        numeroComplementaireSiretEtab: string;
        codeApeInsee: string;
        codeFamilleApeInsee: string;
        deuxDerniersCaracteresApe: string;
        codeResident: string;
        dateDernierTracageApeProf: string;
        libelleTracageCodificationApe: string;
        typeTracageCodificationApe: string;
        codeNafInsee: string;
        codeFamilleNafInsee: string;
        troisDerniersCaracteresNaf: string;
    }
    interface IParticulierInformation {
        identifiantPersonne: number;
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
        nomEmployeur: string;
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
        codeResidenceFiscale: string;
        codeInseePaysResidenceFiscale: string;
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
    interface IGestionPrivee {
        identifiantPersonne: number;
        codeEtablissement: string;
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
    }
    interface IIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeStatut: string;
        libelleStatut: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: string;
        codeGuichetRisque: string;
        codeMarche: ICodeMarche;
    }
    interface ICodeMarche {
        codeTypeSegmentation: string;
        codeSegmenation2DernCar: string;
        libelleLongSegmentation: string;
        libelleCourtSegmentation: string;
        codeSegmentationCalculee: string;
        libelleFamilleMarche: string;
        codeSegmentationConfirmee: string;
        recalculSegmentation: string;
        indicateurForcage: string;
        codeTypeSegmentationForcage: string;
        codeSegmentationForcage: string;
    }
    interface IEtablissement {
        numeroSiret: string;
        indicateurSiegeSocial: string;
        nomCommercial: string;
        denomination: string;
        dateCreation: string;
        codeNAF: string;
        libelleNAF: string;
        dateSessationActivite: string;
    }
    interface IAdresseClient {
        codeEtablissement: string;
        identifiantAgent: number;
        identifiantPersonne: number;
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
    interface IDocumentParametre {
        listeDocumentActe: Array<IDocumentActe>;
        /**
         * identifiant selon la nomenclature Banque de France de l'entité correspondant à l'établissement
         */
        codeEtablissementFinancier: string;
        /**
         * code du mode de mise en gestion du P/S.
         * MEGI - mise en gestion immédiate
         * VPC - vente par correspondance
         */
        codeModeMiseGestion: string;
        /**
         * code du canal de réalisation de l'acte
         */
        codeCanal: string;
        /**
         * typologie de marché d'entreprise concerné par l'acte
         */
        codeTypeMarcheEntreprise: string;
        /**
         * Liste des actes
         */
        listeActes: Array<string>;
    }
    interface IDocumentActe {
        /**
         * Détermine un document-type.
         */
        codeTypeDocument: string;
        /**
         * code décrivant la nature de la pièce justificative
         */
        codeNaturePJ: string;
        /**
         * Détermine une catégorie de justificatifs
         */
        codeTypeJustificatif: string;
        /**
         * Détermine la nature d'un document dans le catalogue de la GED
         * Correspond au niveau le plus fin caractérisant un
         * document
         */
        codeNatureGED: string;
        /**
         * code de la maquette IDocXML permettant de générer le document
         */
        codeTechniqueImpression: string;
        /**
         * Cet indicateur précise si le document est obligatoire
         * pour l'acte
         */
        indicateurDocumentObligatoire: boolean;
        /**
         * Cet indicateur précise si le document est obligatoire
         * pour la contractualisation.
         */
        indicateurNonMaterialisation: boolean;
        /**
         * Détermine un attributaire-type détenteur d'un
         * document
         *
         *             Valeurs :
         *  '01'       Contrat
         *  '02'       Personne
         *  '05'       Relation économique
         *  '06'       Demande de financement
         *  '07'       Client Bancaire
         */
        codeTypeAttributaireDocument: string;
        /**
         * code de l'application qui permet la génération du document
         */
        codeApplicationTechniqueEdition: string;
        /**
         * code de la maquette. Elle est à associer au code application (outil) qui permet la génération du document
         */
        codeMaquette: string;
        /**
         * indique si le document fait partie du Référentiel des documents d'entreprise
         */
        indicateurDocumentEntreprise: boolean;
        /**
         * libellé de description du document dans le Référentiel des documents entreprise
         */
        libelleDocumentEntreprise: string;
        /**
         * libellé externe associé au document entreprise
         */
        libelleExterneDocumentEntreprise: string;
        /**
         * identifiant dans la GED du document d'entreprise.
         */
        identifiantDocumentGED: string;
        /**
         * typologie des documents telle qu'elle est référencée dans l'ICG (Infrastructure de Confiance Groupe).
         * Un document a un type de document pour l'ICG, lors de la signature électronique
         */
        codeTypeDocumentICG: string;
        /**
         * code indiquant le type de fichier associé au type de document. Permettra de savoir sous quelle forme l'application doit fournir le ficher (XML, PDF, ...)
         */
        codeTypeFichier: string;
        /**
         * mode de contractualisation de l'acte pour le dcumnt
         */
        codeModeContractualisation: string;
        /**
         * code de comportement du document pour l'acte de gestion, lors de la contractualisation  électronique via l'ICG
         *
         * Valeurs :
         *   '00'       Document à signer
         *   '01'       A présenter au client
         *   '02'       Réservé Caisse
         */
        codeActionSignatureDocument: string;
        /**
         * Indique si le document est en cours de partage dans
         * ICG (Interface de Confiance Groupe).
         * "true" lorsque le doc est partagé,
         * 'false" dès que la suppression de partage est ok.
         */
        indicateurPartageDocumentICG: boolean;
        /**
         * Regroupement d'actes de gestion de niveau
         * processus/opération dans la gestion des pièces
         * justificatives
         */
        codeFamilleActe: string;
        /**
         * Détermine un objet (produit/service ou prestation)
         * traité par un acte de gestion dans la gestion des
         * dossiers de numérisation
         */
        codeObjetActe: string;
        /**
         * Libellé de désignation du type de document. Il sera utilisé lors de la contractualisation
         */
        libelleDocumentContract: string;
        /**
         * Indique si les documents rattachés à une classe de
         * document pourront être utilisés dans le processus
         * de signature électronique
         */
        indicClasseEligibleSignature: boolean;
        /**
         * code Classe Document Entreprise
         */
        codeClasseDocumentEntreprise: string;
        /**
         * Code l'acte de gestion
         */
        codeActeGestion: string;
        /**
         * Nombre mini exemplaires doc/ édition
         */
        nbMiniExemplairesDocEdition: number;
        /**
         * Nombre  exemplaires  par défaut / édition
         */
        nbExemplairesParDefautEdition: number;
        /**
         * Indicateur modif édition nombre exemplaires.
         */
        indicateurModifNbExemplaire: boolean;
        /**
         * Nombre maxi exemplaires doc/ édition
         */
        nbMaxiExemplairesDocEdition: number;
        /**
         * Ordre priorité utilisation
         */
        ordrePrioriteUtilisation: number;
        /**
         * libellé section regroupement document
         */
        libelleSectionRegDoc: string;
        /**
         * indicateur document principal
         */
        indicateurDocumentPrincipal: boolean;
    }
    interface IListeRelationEconomique {
        relationEconomique: Array<IRelationEconomique>;
    }
    interface IInterlocuteur {
        listeLienInterlocuteur: Array<ILienInterlocuteur>;
    }
    interface ILienInterlocuteur {
        /**
         * le Numéro lien interlocuteur
         */
        numeroLienInterlocuteur: number;
        /**
         * le Type interlocuteur
         */
        typeInterlocuteur: string;
        /**
         * Le Type rôle interlocuteur
         */
        typeRoleInterlocuteur: string;
        /**
         * le Numéro interlocuteur
         */
        numeroInterlocuteur: number;
        /**
         * La Désignation courte
         */
        designationCourte: string;
        /**
         * Le Libellé type rôle interlocuteur
         */
        libelleTypeRoleInterlocuteur: string;
        /**
         * le Code spécificité interlocuteur
         */
        codeSpecificiteInterlocuteur: string;
        /**
         * Le Libellé spécificité interlocuteur
         */
        libelleSpecificiteInterlocuteur: string;
        /**
         * La Date début validité élément
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeElement: string;
        /**
         * La Date fin validité élément
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeElement: string;
        /**
         * Le Numéro téléphone 2
         */
        numeroTelephone2: string;
        /**
         * Le Numéro téléphone 1
         */
        numeroTelephone1: string;
        /**
         * L'Adresse E-MAIL
         */
        adresseEmail: string;
        /**
         * l'Identifiant personne
         */
        identifiantPersonne: number;
    }
    interface IUsager {
        /**
         * Identifiant utilisateur applicatif.
         */
        idUsager: string;
        /**
         * Code de l'etablissement.
         */
        codeEtablissement: string;
        /**
         * Identifiant de la personne morale.
         */
        idPersonneMorale: number;
        /**
         * Identifiant de la personne physique en relation.
         */
        idPersonnePhysique: number;
        /**
         * Code de l'application.
         */
        codeApplication: string;
        /**
         * Identifiant banque a distance de la personne detentrice de l'application.
         */
        idBAD: string;
    }
    interface IIdentificationTiers {
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
    interface ICaracteristiqueTiers {
        /**
         * Code personnalité juridique
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
    interface IInformationParticulier {
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
    interface IInformationProfessionnel {
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
    interface IInformationEtablissement {
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
    interface IAdresse {
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
        codeISOPaysBis: string;
        /**
         * Libellé pays ISO3166-1
         */
        libelleISOPaysBis: string;
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
        commentaireTelephoneBis: string;
        /**
         * Code postal France & Etranger
         */
        codePostalFranceEtranger: string;
        /**
         * Libellé commune
         */
        libelleCommuneBis: string;
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
    interface IMedia {
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
        codeTypeMediaBis: string;
        libelleTypeMediaBis: string;
        codeTypeUsageMediaBis: string;
        libelleTypeUsageMediaBis: string;
    }
    interface IInformationTiersLie {
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
    interface ITiersNoyau {
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
    interface IInformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
        libelleCodeStatutEAI: string;
        libelleCodeModeSignatureEAI: string;
    }
    interface IImmatriculationProfessionnel {
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

declare module GGOCommunEpi.Modele {
    /**
     * Ensemble des constantes pour la gestion de l'url de reroutage
     */
    class UrlReroutage {
        static MYWAY: string;
        static ENVIRONNEMENT: string;
        static VERSION: string;
        static DOMAINE_GCE: string;
    }
    class CodeTypeActeGestion {
        static SOUSCRIPTION: string;
        static CONSULTATION: string;
        static ECROU: string;
        static AVENANT: string;
        static CLOTURE_CLIENT: string;
        static CLOTURE_CONSEILLER: string;
    }
    class CodeTypeCanalDistribution {
        static AGENCE: string;
        static CRC: string;
        static AUTOMATE: string;
        static BANQUE_EN_LIGNE: string;
        static PRESCRIPTION: string;
        static BACK_OFFICE: string;
        static TRAITEMENT_INFORMATIQUE: string;
        static INTERNET: string;
        static RESEAUX_SOCIAUX: string;
    }
    class JetonSecurise {
        static CODE_APPLICATION_PRODUCTEUR: string;
        static CODE_TYPE_CANAL: string;
        static GESTIONNAIRE_HABILITATION: string;
        static NIVEAU_AUTHENTIFICATION_USER: string;
        static TYPE_IDENTIFIANT_USER: string;
    }
    class CodeLisa {
        static ABANDON: number;
        static OK_SIMULATION: number;
        static OK_CONTRAT_A_SIGNER: number;
        static OK_CONTRAT_COMBI_A_SIGNER: number;
        static ERREUR: number;
    }
    class BusinessOperation {
        static SOUSCRIPTION: string;
        static AVENANT: string;
        static CONSULTATION: string;
        static RESILIATION: string;
        static SIMULATION: string;
    }
    class CodeEndForm {
        static ABAN: string;
        static VALD: string;
        static EDIT: string;
        static MEDT: string;
        static STATUT_COM_OK: string;
        static STATUT_COM_ERREUR: string;
    }
    class CodeEntiteVente {
        static AGENCE: string;
    }
    class CodeActionContexte {
        static COCO: string;
        static COCA: string;
    }
    class TypeAppelant {
        static IHM_CAISSE: string;
        static IHM_CLIENT: string;
        static BATCH_ESB: string;
        static SPA: string;
    }
    class IndicRestCompoDetail {
        static COMPOSITION: string;
        static COMPOSITION_DETAILS: string;
        static PAS_DE_COMPOSITION: string;
    }
    class IndicRestCheminAvancement {
        static RESTITUTION: string;
        static PAS_DE_RESTITUTION: string;
    }
    class CodeExterneApplication {
        static ASSURANCE: string;
        static NATIXIS_FINANCEMENT: string;
        static CFF: string;
        static CFF_PROSPECT: string;
        static CFF_BATCH: string;
    }
    class BusinessObjectCode {
        static CODE_CONTRAT: string;
        static CODE_PROPOSITION: string;
    }
    class InjectionService {
        static MEDIAS_SIGNATAIRES_PROS_SERVICE: string;
        static SERVICE_AGENT_EXTENDED: string;
        static DOLLAR_Q: string;
        static TIERS_V3_IDENTIFICATION_SERVICE: string;
    }
    class TypeClient {
        static PERSONNE_MORALE: string;
        static ENTREPRENEUR_INDIVIDUEL: string;
    }
    class CheminRessource {
        static racineRessources: string;
        static ressourceTiersV3Identification: string;
    }
    class ComposantAppele {
        static APPEL_POUR_BAPI: string;
    }
}

declare module GGOCommunEpi.Modele {
    import Types = GestionGeneriqueOffres.Types;
    interface IContexteEntree {
        /** mode papier (vaut "true" ou "false") */
        modePapier: string;
        gestionLiasse: {
            typeClient: string;
            listeSignataires: Types.Authentification.IClientSignataireAuthentification[];
        };
        listeLiasse: any;
        donneesMoyenAuthentification: any;
    }
}

declare module GGOCommunEpi.Modele {
    import Types = GestionGeneriqueOffres.Types;
    interface IDossierSignature {
        liasses: ILiasse[];
        entiteTitulaire: IEntiteLiasse;
        numeroOffreSouscrite: number;
        codeTypeCompte: string;
        codeGuichetContrat: string;
        codeEtablissementContrat: string;
        referenceProduitServiceContrat: string;
        enveloppeOffre: IEnveloppeOffreReponse;
        titulaire: number;
        numeroDeCompte?: string;
        panier?: Types.IContextePanier;
        dateOuvertureOffre?: string;
        listeContratCarte?: Types.IContratCarte[];
        listeClients?: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
    }
    interface ILiasse {
        acte: IActeLiasse;
        listeSignataire: Types.Authentification.IClientSignataireAuthentification[];
        valider: string;
        isEligibleSAGSED: string;
        active: string;
        numeroClientPorteur: number;
        isLimitSignatairesAtteint?: boolean;
        identifiantProduitService?: number;
        codeTypeProduitService?: string;
        referenceContratCarte?: string;
        identifiantProduitServiceCompo?: number;
        contexteCarte?: any;
        listeContratCarte?: any;
        liasseForcagePapier?: boolean;
        /** Si identifiantExterneDossierVente est renseigné, il faut aussi valoriser libelleResume pour permettre de retrouver le dossier de vente */
        identifiantExterneDossierVente?: string;
        libelleResume?: string;
        /** si non renseigné, il faut quand même créer le dossier pour éviter la regression */
        creerDossierVente?: boolean;
        fermerDossierVente?: boolean;
        raisonForcagePapier?: string;
    }
    interface IActeLiasse extends myway.comContract.ContractualisationActe.Modeles.IActe {
        isCarteSecuracces?: boolean;
    }
    interface IEntiteLiasse {
        numeroEntiteTitulaire: number;
        libelleEntiteTitulaire: string;
    }
    interface IEnveloppeOffreReponse {
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService: number;
        /**
         * Numéro offre souscrite
         */
        numeroOffre: number;
        /**
         * Date ouverture offre souscrite
         */
        dateOuvertureOffreSouscrite: Date;
        /**
         * Nom Commercial Court Produit / Service
         */
        nomCommercialCourtProduitService: string;
        /**
         * Date du dernier avenant effectué avant l'avenant du jour
         */
        dateAvantDernierAvenantOffre: Date;
        /**
         * Date du dernier avenant établi sur une offre donnée
         */
        dateDernierAvenantOffre: Date;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Données simplifiées (à enrichir pour être utilisées par la directive medias-esignature)
     */
    interface IMediasSignatairesPros {
        codeCanal: string;
        titulaireCompte: ITitulaireCompte;
        modeSignatureDefaut: string;
        listeSignataires: Array<ISignataireSimplifie>;
        presenceSignatairePersProt?: string;
    }
    interface ITitulaireCompte {
        numeroPersonne: number;
        typeClient: string;
        identifiantClientBad: string;
        designation: string;
    }
    interface ISignataireSimplifie {
        numeroPersonne: number;
        nomFamille: string;
        prenom: string;
        nomUsage: string;
        civilite: string;
    }
    /**
     * Erreurs rencontrées lors du traitment des données de type IMediasSignatairesPros
     */
    interface IErreurMedias {
        variableConcernee: string;
        motifErreur: string;
    }
    /**
     * Objet contenant les paramètres nécessaires à l'appel de la directvie des médias OU les erreurs ayant empêché leur création
     */
    interface IResultatCreationParametreDirectiveMedias {
        parametreDirectiveMedias: IParametreDirectiveMedias;
        listeErreursSurCreationParametre: Array<IErreurMedias>;
    }
    /**
     * Paramètres à renseigner en entrée de la directive medias-esignature
     */
    interface IParametreDirectiveMedias {
        id: string;
        indicateurPapier: boolean;
        contexte: GestionGeneriqueOffres.Types.ContexteCgo;
        compositionOffre: GestionGeneriqueOffres.Types.CompositionOffre;
        listeSignataires: Array<GestionGeneriqueOffres.Types.Authentification.IClientSignataireAuthentification>;
        typeClient: string;
        contractualisationActe: Myway.Ressource.ContractualisationActe.IEligibiliteSAGSED;
        personnes: Array<GestionGeneriqueOffres.Types.Tiers.Personne> | Array<GestionGeneriqueOffres.Types.Tiers.PersonneMorale>;
        modePanierSemd: boolean;
        modeSpaEsign: boolean;
        presenceSignatairePersProt: boolean;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IPorteurSolPro {
        porteurService: Array<IPorteurService>;
    }
    interface IPorteurService {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         */
        identifiantPersonne: number;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         * Référence externe connue du client abonné
         */
        identifiantClient: string;
        /**
         * Date de l'enrôlement par l'abonné
         * Type date au format yyyy-MM-dd
         */
        dateEnrolement: string;
        /**
         * Dénomination banalisée de la personne :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designation: string;
        /**
         * Code état de l'enrôlement
         * '1'        démarré
         * '2'        courrier envoyé
         * '3'        validé
         * '4'        bloqué
         * '5'        résilié
         * '6'        bloqué agence
         * '7'        Attente MAJ Tél. mobile
         */
        codeEtatEnrolement: string;
        /**
         * Code état édition du porteur sur le contrat
         * '1'        Porteur à confirmer
         * '2'        Porteur à éditer
         * '3'        Porteur édité
         */
        codeEtatEdition: string;
        /**
         * Ce code détermine le mode de gestion choisi par la caisse pour la distribution des lecteurs CAP commandés
         * 'F'        envoi Fournisseur au client
         * 'C'        stockage Caisse
         * 'N'        Non concernée
         */
        codeModeDistributionLecteur: string;
        /**
         * Détermine un message d'erreur du Système d'Accès Clients (Banque à distance)
         * Pour un même code message, chaque média (Vidéotex, Voc etc...) a un libellé spécifique (un message, une référence, un fichier son, etc...)
         */
        codeMessageErreurSac: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         * - soit au nom du père
         * - soit au nom de la mère
         * - soit aux 2 noms accolés
         *        ordre quelconque, dans la limite d'un nom de famille par parent
         */
        nomFamille: string;
        /**
         * Code qui permet de respecter la dénomination de la personne suivant sa situation de famille.
         * '1'        MME
         * '2'        MLLE
         * '3'        M
         */
        codeCivilite: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         * - soit au nom de famille de l'époux(se) (conjoint)
         * - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque
         *
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique. Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         */
        nomUsage: string;
        /**
         * Date de naissance personne physique
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         * Nom joint au patronyme qui distingue les personnes d'un même groupe familial entre elles.
         */
        premierPrenomEtatCivil: string;
        /**
         * '00'       reprise initiale de l'authentification renforcée .
         *            et 1er traitement CERA d'enrôlement en masse à SOL-SMS
         * '01'       en agence
         * '02'       sur DEI
         * '03'       sur GAB
         * '04'       sur DEM
         * '05'       sur BLS
         * '06'       enrôlement en masse à SOL-SMS
         */
        canalCreationEnrolement: string;
        /**
         * Top permettant de savoir si l'enrôlement a été pris en compte par le provisionning (alimentation du référentiel d'authentification renforcée)
         * ' '        enrôlement non validé
         * 'O'        pris en compte par le provisionning
         * 'N'        non pris en compte par le provisionning
         */
        indicateurPriseCompteProvision: string;
        /**
         * Indique le jour de la résiliation par le client de l'enrôlement CAP ou SMS
         * Type date au format yyyy-MM-dd
         */
        dateResiliationEnrolement: string;
        /**
         * Cette rubrique permet une traçabilité : N° téléphone GSM lors de la création de l'enrôlement.
         */
        telephoneGsm: string;
        /**
         * N° de carte servant pour le lecteur carte à puce
         */
        numeroCarte: string;
        /**
         * Date de début de validité du lecteur pour enrôlement par CAP
         * Type date au format yyyy-MM-dd
         */
        datedebutValiditeLecteur: string;
        /**
         * Date de fin de validité du lecteur pour enrôlement par CAP
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeLecteur: string;
        /**
         * Numéro de série du lecteur dans le cas d'un enrôlement par CAP
         */
        numeroSerieLecteur: string;
        /**
         * Date du jour de la commande du lecteur CAP.
         * Cette date est mise à jour lors de la souscription du service SOL-CAP ou lors de la demande d'un nouveau lecteur CAP par le client (lecteur HS, perdu, ...).
         * Type date au format yyyy-MM-dd
         */
        dateCommandeLecteur: string;
        /**
         * Code état de la commande de lecteurs CAP
         * '0'        Client non équipé lecteur CAP
         * '1'        Client équipé lecteur CAP
         * '2'        Demande lecteur CAP en cours
         * '3'        Lecteur CAP à distribuer par le fournisseur
         * '4'        Lecteur CAP distribué par le fournisseur
         * '5'        Lecteur CAP en anomalie de distribution
         */
        codeEtatCommande: string;
        /**
         * Date de demande de l'enrôlement par l'abonné
         * Type date au format yyyy-MM-dd
         */
        dateDemandeEnrolement: string;
        /**
         * Date de traitement du courrier client
         * Date mise à jour lors du traitement batch de création du courrier pour confirmer son enrôlement
         * Cette date désigne également la date de traitement du courrier édité pour informer l'abonné du code  activation attribué pour confirmer sa demande de     modification du numéro de téléphone portable saisie par internet (DEI)
         * Type date au format yyyy-MM-dd
         */
        dateTraitementCourrier: string;
        /**
         * Type de carte : produit au catalogue
         * Codification  : Fnnnn
         * F représente le niveau de fonctionnalité :
         * - 0 : carte particulier immédiat
         * - 1 : carte particulier différé
         * - 2 : carte professionnelle immédiat
         * - 3 : carte professionnelle différé
         * - 4 : carte de remplacement différé
         * - 5 : carte de remplacement immédiat
         */
        codeProduitCarte: string;
        /**
         * Date de dernière modification des données de gestion relatives à un moyen d'authentification associé à un utilisateur BAD
         * Type date au format yyyy-MM-dd
         */
        dateModifMoyenAuthentification: string;
        /**
         * Numéro d'identification du contrat carte incrémenté de 1 à chaque ouverture (identifiant)
         */
        numeroContratCarte: number;
        /**
         * 'N'        carte non partagée
         * 'O'        carte partagée
         */
        indicateurCartePartagee: string;
    }
    interface IActionPorteur {
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         * Référence externe connue du client abonné
         */
        identifiantClient: string;
        /**
         * Détermine le système/support de sécurisation
         * des opérations en ligne :
         *   - par SMS (01 = PART, 03 = PRO)
         *   - par CAP (02 = PART, 04 = PRO)
         *   - par Carte à Chemin
         *   - par Certificat Electronique
         *   - .......
         */
        codeTypeEnrolement: string;
        /**
         * 'C'        Création   Souscription
         * 'M'        Mise à jour Avenant
         * 'G'        Gestion
         */
        codeActionMaj: string;
        /**
         * Détermine l'action à mener par le programme
         * '1'        Lecture / Interrogation
         * '2'        Mise à jour / Création
         * '3'        Validation
         * '4'        Déblocage
         * '5'        Clôture
         * '6'        Blocage
         * '7'        Gestion de lecteur CAP
         * '8'        Annulation
         */
        codeActionEnrolement: string;
        /**
         * Correspond à un numéro de téléphone qui n'est pas le celui du domicile et permet de contacter directement
         *  ou indirectement la personne
         *  ou peut correspondre au n° portable
         *  ou Numéro de téléphone de correspondance de la personne morale , association
         */
        numeroTelephone: string;
        /**
         * Code indiquant si le client est équipé d'un lecteur CAP.
         * 'O'        oui
         * 'N'        non
         */
        codeClientEquipeLecteur: string;
        /**
         * Code état de la commande de lecteurs CAP
         * '0'        Client non équipé lecteur CAP
         * '1'        Client équipé lecteur CAP
         * '2'        Demande lecteur CAP en cours
         * '3'        Lecteur CAP à distribuer par le fournisseur
         * '4'        Lecteur CAP distribué par le fournisseur
         * '5'        Lecteur CAP en anomalie de distribution
         */
        codeEtatCommandeLecteur: string;
        /**
         * Code indiquant si le client commande un lecteur CAP.
         * 'O'        oui
         * 'N'        non
         */
        codeCommandeLecteur: string;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         */
        identifiantPersonne: number;
    }
}

declare module GGOCommunEpi.Services {
    import Types = GestionGeneriqueOffres.Types;
    interface IHeaderXBPCEClientContexte {
        organizationalUnit: string;
        bankCode: string;
        processInstanceDatetime: string;
        workstationId: string;
        processInstanceId: string;
        logLevel: string;
        position: string;
        deviceType: string;
        componentSource: string;
        componentVersion: string;
        userNameId: string;
        userTitle?: string;
        sortCode: string;
        bankDeskCode: string;
        bankDeskOpening: string;
    }
    interface IAuthentificationService {
        getListeMediaPart(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<Types.Authentification.IMedia>;
        getActivitePro(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Types.Authentification.ICorporateActiviteProfessionnelle>;
        getListeInterlocuteurs(codeEtablissement: string, identifiantPersonne: string, typeInterlocuteur: string, codeApplicationCartographie: string): ng.IPromise<any>;
        getDetailsInterlocuteur(identifiantPersonne: string, numeroLienInterlocuteur: string): ng.IPromise<any>;
        getPortefeuille(identifiantTiers: number, codeEtablissement: string): ng.IPromise<GestionGeneriqueOffres.Types.Authentification.ITiersPortefeuille>;
        getCaracteristiqueEDS(codeEtablissement: string, codeAgent: string, identifiantInterneEDS?: string): ng.IPromise<Types.Authentification.ICaracteristiqueEDS>;
        getRecherche(codeEtablissement: string, groupeFonction: string): ng.IPromise<Array<Types.Authentification.IRechercheAgent>>;
        getPorteursSolCap(typeSelection: string, codeEtablissement: string, identifiantClient: string, typeEnrolement: string, typeTraitement: string, identifiantPersonne: number): ng.IPromise<GestionGeneriqueOffres.Types.IPorteurSolPro>;
        getInterlocuteurListe(codeEtablissement: string, identifiantTiers: number, typeInterlocuteur: string, codeApplicationCartographie: string): ng.IPromise<Types.Authentification.IInterlocuteur>;
        getActivationSecurespace(codeEtablissement: string): ng.IPromise<boolean>;
        getProfilUsager(codeEtablissement: string, idPersonneMorale: number, idPersonnePhysique: number): ng.IPromise<Types.Authentification.IUsager>;
        doProvisioningModePanier(signataire: Types.Authentification.IClientSignataireAuthentification, usager: Types.Authentification.IUsager): ng.IPromise<any>;
        getInfosAuthentification(): ng.IPromise<MyWay.Services.ServiceAgentExtended>;
        getMoyensAuthentification(): ng.IPromise<Types.Authentification.IMoyenAuth[]>;
        getTiersNoyau(codeEtablissement: string, idPersonnePhysique: number): any;
        decoderRaison(raison: any, message?: string): string;
    }
    class ErreurModel {
        idService: string;
        message: string;
        estBloquant: boolean;
    }
    class AuthentificationService implements IAuthentificationService {
        private $q;
        private serviceAgentExtended;
        private $http;
        private urlBapiAuthenticationFactor;
        private clientIdHomol;
        private clientIdProd;
        private environnement;
        private urlOAuth;
        private urlBapiDomain;
        private urlBapiAuthDomain;
        static authentificationServiceId: string;
        static URL_PORTEFEUILLE: string;
        static URL_MEDIA_PART: string;
        static URL_CORPORATE_ACT_PRO: string;
        static URL_CARACTERISTIQUE_EDS: string;
        static URL_AGENT: string;
        static URL_CONTRAT_BQD_PRO: string;
        static URL_TIERS_CORPORATE: string;
        static URL_TIERS_NOYAU: string;
        static URL_USAGER: string;
        private _authentificationInfo;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        private _agentConnecte;
        agentConnecte: MyWay.Services.Context.AgentConnecte;
        private _codeEtablissement;
        getCodeEtablissement(): string;
        setCodeEtablissement(codeEtab: string): void;
        private _parametresComptables;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        private _parametresServeurPoste;
        parametresServeurPoste: string;
        private _numeroCompte;
        getNumeroCompte(): string;
        private _numeroPersonne;
        getNumeroPersonne(): number;
        setNumeroPersonne(numero: string): void;
        private headerXBPCEClientContext;
        iframeTargetRetourAuthent: HTMLElement;
        private origin;
        private urlRedirect;
        contextAller: Modele.IBusinessProvisionningRequest;
        operationPartenaire: string;
        dansPortailMySys: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $http: ng.IHttpService, urlBapiAuthenticationFactor: string, clientIdHomol: string, clientIdProd: string, environnement: string, urlOAuth: string, urlBapiDomain: string, urlBapiAuthDomain: string);
        getActivationSecurespace(codeEtablissement: string): ng.IPromise<boolean>;
        getProfilUsager(codeEtablissement: string, idTitulaireActe: number, idPersonnePhysique: number): ng.IPromise<Types.Authentification.IUsager>;
        getTiersNoyau(codeEtablissement: string, idPersonnePhysique: number): ng.IPromise<Types.Authentification.ITiersNoyau>;
        getInfosAuthentification(): ng.IPromise<MyWay.Services.ServiceAgentExtended>;
        doProvisioningModePanier(signataire: Types.Authentification.IClientSignataireAuthentification, usager: Types.Authentification.IUsager): ng.IPromise<any>;
        getPorteursSolCap(typeSelection: string, codeEtablissement: string, identifiantClient: string, typeEnrolement: string, typeTraitement: string, identifiantPersonne: number): ng.IPromise<GestionGeneriqueOffres.Types.IPorteurSolPro>;
        getPortefeuille(identifiantTiers: number, codeEtablissement: string): ng.IPromise<GestionGeneriqueOffres.Types.Authentification.ITiersPortefeuille>;
        getListeMediaPart(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<Types.Authentification.IMedia>;
        getActivitePro(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Types.Authentification.ICorporateActiviteProfessionnelle>;
        getInterlocuteurListe(codeEtablissement: string, identifiantPersonne: number, typeInterlocuteur: string, codeApplicationCartographie: string): ng.IPromise<Types.Authentification.IInterlocuteur>;
        getMoyensAuthentification(): ng.IPromise<Types.Authentification.IMoyenAuth[]>;
        getDetailsInterlocuteur(identifiantPersonne: string, numeroLienInterlocuteur: string): ng.IPromise<any>;
        getListeInterlocuteurs(codeEtablissement: string, identifiantPersonne: string, typeInterlocuteur: string, codeApplicationCartographie: string): ng.IPromise<any>;
        getCaracteristiqueEDS(codeEtablissement: string, codeAgent: string, identifiantInterneEDS?: string): ng.IPromise<Types.Authentification.ICaracteristiqueEDS>;
        getRecherche(codeEtablissement: string, groupeFonction: string): ng.IPromise<Array<Types.Authentification.IRechercheAgent>>;
        private callServiceRest(params, methode, url, idService, important, estAppelePourBapi?);
        determinerTypeClient(compositionOffre: Types.CompositionOffre, contexte: Types.ContexteGgo): string;
        checkIfDateIsBetween(fromDate: string, toDate: string): boolean;
        private initContexteChargement();
        private recupererTokenOAuth();
        private demanderEnrolement(accessToken, donneesInitContexteChargement);
        private demanderEnrolementPortailMySys(donneesInitContexteChargement);
        /**
         * génère le header d'authentification pour la BAPI à l'aide du token oAuth précédemment récupéré et passé en paramètre
         * @param accessToken : string récupéré via l'appel préléable à l'oAuth
         * @returns l'objet de header pour appel à la BAPI
         */
        private genererHeader(accessToken, donneesInitContexteChargement);
        /**
         * génère le base64 du JSON attendu pour X-BPCEClientContext
         * informations identifiées sur le ngAgent 89C3
         * en alimentant toutes les clefs avec les données issues du contexte
         * (authentification, processus, paramètres comptables, etc.)
         */
        private genererXBPCEClientContext(donneesInitContexteChargement);
        private initialiserContexteAller(signataire, usager);
        decoderRaison(raison: any, message?: string): string;
    }
}

declare module GGOCommunEpi.Services {
    import Types = GestionGeneriqueOffres.Types;
    interface IMediaEsignatureService {
        isSolCapPresent(compositionOffre: Types.CompositionOffre, contexte: Types.ContexteGgo): boolean;
        recupererDonneesContexte(estModePanierSemdPro: boolean): ng.IPromise<Modele.IContexteEntree>;
        /**
         * True si le solcap force la liasse du compte à passer en papier
         * false si non
         * @param contexte
         * @param listeSignataire
         * @param identifiantClient
         */
        isModePapierSuiteRechercheSolCap(contexte: Types.ContexteGgo, listeSignataire: Types.Authentification.IClientSignataireAuthentification[], identifiantClient: string): ng.IPromise<boolean>;
        /**
         * Trouve l'index de la liasse à traiter
         * @param listeLiasse
         */
        recupererIndexLiasseCourante(listeLiasse: any): number;
        remplirFormulaireEnElectroniqueModePanier(formulaireAuthentification: Types.Authentification.IFormulaireAuthentification, contexte: Types.ContexteGgo, caracteristiqueEdsOperant: Types.Authentification.ICaracteristiqueEDS, caracteristiqueEdsSuiviPar: Types.Authentification.ICaracteristiqueEDS, identifiantSP: string, checkDestinataireOperant: any, checkDestinataireSuiviPar: any, signataire: any, libSignataireOperant: string, libSignataireSuiviPar: string, libSignataireOperantPourLeCompteSP: string, listeSignataires: Types.Authentification.IClientSignataireAuthentification[]): ng.IPromise<Types.Authentification.IFormulaireAuthentification>;
    }
    class MediaEsignatureService implements IMediaEsignatureService {
        private $q;
        private serviceAgentExtended;
        private servicesAuth;
        static mediaEsignatureServiceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, servicesAuth: Services.AuthentificationService);
        recupererDonneesContexte(estModePanierSemdPro: boolean): ng.IPromise<Modele.IContexteEntree>;
        isSolCapPresent(compositionOffre: Types.CompositionOffre, contexte: Types.ContexteGgo): boolean;
        remplirFormulaireEnElectroniqueModePanier(formulaireAuthentification: Types.Authentification.IFormulaireAuthentification, contexte: Types.ContexteGgo, caracteristiqueEdsOperant: Types.Authentification.ICaracteristiqueEDS, caracteristiqueEdsSuiviPar: Types.Authentification.ICaracteristiqueEDS, identifiantSP: string, checkDestinataireOperant: any, checkDestinataireSuiviPar: any, signataire: any, libSignataireOperant: string, libSignataireSuiviPar: string, libSignataireOperantPourLeCompteSP: string, listeSignataires: Types.Authentification.IClientSignataireAuthentification[]): ng.IPromise<Types.Authentification.IFormulaireAuthentification>;
        /**
         * Traite le provisionning pour un signataire donné en paramètre.
         * Une fois passés les contrôles sur les paramètres, le traitement s'effectue en 2 étapes majeures:
         * - un appel à getProfilUsager,
         * - un appel à doProvisionning
         * @param codeEtablissement
         * @param numeroPersonneIdentifiee
         * @param signataire
         */
        private traiterProvisionningParSignataire(codeEtablissement, numeroPersonneIdentifiee, signataire, estTitulaire);
        private traiterProvisionningListeSignatairesRecursif(codeEtablissement, numeroPersonneIdentifiee, listeSignataires, indexSignataire, listeProvisionningAppel);
        isModePapierSuiteRechercheSolCap(contexte: Types.ContexteGgo, listeSignataire: Types.Authentification.IClientSignataireAuthentification[], identifiantClient: string): ng.IPromise<boolean>;
        recupererIndexLiasseCourante(listeLiasse: Modele.IDossierSignature): number;
    }
}

declare module GGOCommunEpi.Services {
    interface ITiersV1GetIdentificationQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    interface IMediasSignatairesProsService {
        getParametreDirectiveMedias(mediasSignatairesPros: GGOCommunEpi.Modele.IMediasSignatairesPros, estDemandeGenerationParametreDirective: boolean): ng.IPromise<GGOCommunEpi.Modele.IResultatCreationParametreDirectiveMedias>;
    }
    class MediasSignatairesProsService implements IMediasSignatairesProsService {
        private $q;
        private serviceAgentExtended;
        static SERVICE_NAME: string;
        private static logger;
        private parametreDirectiveMedias;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne les paramètres nécessaires à l'appel de la directive "medias-esignature" OU les erreurs ayant empêché leur création.
         * Si le paramètre estDemandeGenerationParametreDirective vaut true, les paramètres seront générés à partir de mediasSignatairesPros.
         * Sinon, les paramètres seront simplement retournés à l'appelant via le contenu de this.parametreDirectiveMedias
         * @param mediasSignatairesPros
         * @param estDemandeGenerationParametreDirective
         */
        getParametreDirectiveMedias(mediasSignatairesPros: GGOCommunEpi.Modele.IMediasSignatairesPros, estDemandeGenerationParametreDirective: boolean): ng.IPromise<GGOCommunEpi.Modele.IResultatCreationParametreDirectiveMedias>;
        /**
         * Contrôle le paramètre mediasSignatairesPros, puis provoque la création des paramètres nécessaires à la directive "medias-esignature"
         * @param mediasSignatairesPros
         */
        private creerObjetsDirectiveMedias(mediasSignatairesPros);
        /**
         * Contrôle les paramètres nécessaires à la directive "medias-esignature" à partir du paramètre d'entrée mediasSignatairesPros.
         * Retourne une liste contenant les erreurs rencontrées lors du contrôle.
         * Retourne une liste vide si aucune erreur.
         * @param mediasSignatairesPros
         */
        private controlerObjetsPourAlimentationParametresDirectiveMedias(mediasSignatairesPros);
        /**
         * Contrôle la valorisation du paramètre mediasSignatairesPros.
         * Retourne l'éventuelle erreur rencontrée lors du contrôle.
         * Retourne null si aucune erreur.
         * @param mediasSignatairesPros
         */
        private controlerMediasSignatairesPros(mediasSignatairesPros);
        /**
         * Contrôle le contenu du paramètre titulaireCompte.
         * Retourne l'éventuelle erreur rencontrée lors du contrôle.
         * Retourne null si aucune erreur.
         * @param titulaireCompte
         */
        private controlerTitulaireCompte(titulaireCompte);
        /**
         * Contrôle le contenu du paramètre typeClient (présence, "EI" ou "PM").
         * Retourne l'éventuelle erreur rencontrée lors du contrôle.
         * Retourne null si aucune erreur.
         * @param typeClient
         */
        private controlerTypeClient(typeClient);
        /**
         * Contrôle le paramètre listeSignataires.
         * Retourne une liste contenant les erreurs rencontrées lors du contrôle.
         * Retourne une liste vide si aucune erreur.
         * @param listeSignataires
         */
        private controlerListeSignataires(listeSignataires);
        /**
         * Contrôle le contenu du paramètre signataire.
         * Retourne l'éventuelle erreur rencontrée lors du contrôle.
         * Retourne null si aucune erreur.
         * @param signataire
         */
        private controlerSignataire(signataire);
        /**
         * Contrôle le contenu du paramètre modeSignatureDefaut (présence, "E" ou "P").
         * Retourne l'éventuelle erreur rencontrée lors du contrôle.
         * Retourne null si aucune erreur.
         * @param modeSignatureDefaut
         */
        private controlerModeSignatureDefaut(modeSignatureDefaut);
        /**
         * Contrôle le contenu du paramètre codeEtablissement.
         * Retourne l'éventuelle erreur rencontrée lors du contrôle.
         * Retourne null si aucune erreur.
         * @param codeEtablissement
         */
        private controlerCodeEtablissement(codeEtablissement);
        /**
         * Crée les paramètres nécessaires à l'appel de la directive "medias-esignature" à partir du paramètre mediasSignatairesPros.
         * @param mediasSignatairesPros
         */
        private creerParametreDirectiveMedias(mediasSignatairesPros);
        /**
         * Crée le paramètre "contexte" nécessaire à l'appel de la directive "medias-esignature" à partir du paramètre titulaireCompte.
         * @param titulaireCompte
         */
        private creerParametreContexte(titulaireCompte);
        /**
         * Crée le paramètre "personnes" nécessaire à l'appel de la directive "medias-esignature" à partir du paramètre titulaireCompte.
         * @param titulaireCompte
         */
        private creerParametrePersonnes(codeEtablissement, titulaireCompte);
        /**
         * Crée le paramètre "liste-signataires" nécessaire à l'appel de la directive "medias-esignature" à partir du paramètre listeSignataires.
         * @param listeSignataires
         */
        private creerParametreListeSignataires(listeSignataires);
        /**
         * Crée le paramètre "indicateur-papier" nécessaire à l'appel de la directive "medias-esignature" à partir du paramètre modeSignatureDefaut.
         * @param modeSignatureDefaut
         */
        private creerParametreIndicateurPapier(modeSignatureDefaut);
        /**
         * Crée le paramètre "type-client" nécessaire à l'appel de la directive "medias-esignature" à partir du paramètre typeClient.
         * @param typeClient
         */
        private creerParametreTypeClient(typeClient);
        /**
         * Crée un objet de type IErreurMedias à partir des paramères fournis en entrée.
         * @param variable
         * @param motif
         */
        private creerIErreurMedias(variable, motif);
        /**
         * Crée un objet IErreurMedias "vide" (concrètement la méthode retourne pour le moment la valeur null)
         */
        private creerIErreurMediasVide();
        /**
         * Indique si l'erreur transmise en paramètre est vide ou non (true si vide)
         * @param erreurMedias
         */
        private estErreurVide(erreurMedias);
        /**
         * Vérifie l'existence de la donnée du service this.parametreDirectiveMedias, et l'instancie si nécessaire.
         */
        private instancierSiBesoinParametreDirectiveMedias();
        /**
         * Instancie un objet PersonneMorale minimaliste à partir du paramètre titulaireCompte.
         * Cet objet pourra être utilisé pour alimenter le paramètre "personnes" attendu par la directive "medias-esignature".
         * @param titulaireCompte
         */
        private instancierPersonneMoraleSimplifiee(codeEtablissement, titulaireCompte);
        /**
         * Instancie un objet Personne minimaliste à partir du paramètre titulaireCompte.
         * Cet objet pourra être utilisé pour alimenter le paramètre "personnes" attendu par la directive "medias-esignature".
         * @param titulaireCompte
         */
        private instancierPersonnePhysiqueSimplifiee(codeEtablissement, titulaireCompte);
        /**
         * Instancie un objet Identification minimaliste à partir du paramètre identifiantPersonne.
         * Cet objet pourra être utilisé pour alimenter le paramètre "personnes" attendu par la directive "medias-esignature".
         * @param identifiantPersonne
         */
        private instancierIdentificationPersonne(codeEtablissementConnexion, identifiantPersonne);
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Api response for CreateAuthenticationFactorBusinessProvisionning
     */
    interface ICreateAuthenticationFactorBusinessProvisionningRequestV1Response {
        "characteristics"?: IBusinessProvisionningRequestCharacteristics;
        "response"?: IProvisionningRequestResponse;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Error response object (BAPI)
     */
    interface IErrorResponse {
        /**
         * list of errors
         */
        "errors"?: Array<IError>;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Error object (BAPI)
     */
    interface IError {
        /**
         * list of errors
         */
        "code"?: string;
        "message"?: string;
        "attribute"?: string;
        "additionalInformation"?: string;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Moyen d'authentification d'un client dans ICG
     */
    interface IBusinessProvisionningRequestCharacteristicsAuthenticationFactorsItem {
        "authenticationFactorId"?: string;
        "authenticationFactorType"?: IShortTypology;
        "authenticationFactorValue"?: string;
        "authenticationFactorStatus"?: IShortTypology;
        "authenticationFactorActivationDate"?: string;
        "activationCode"?: string;
        "activationLink"?: string;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Structure contenant les informations du client a provisionner
     */
    interface IBusinessProvisionningRequestCharacteristicsUser {
        "physicalPersonCivilityCode": string;
        "physicalPersonFamilyName": string;
        "physicalPersonFirstName": string;
        "numericIdentityId": string;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Structure contenant les informations pour initier un "provisionning" d'un utilisateur
     */
    interface IBusinessProvisionningRequestCharacteristics {
        "user"?: IBusinessProvisionningRequestCharacteristicsUser;
        "applicationCode"?: string;
        "authenticationFactors"?: Array<IBusinessProvisionningRequestCharacteristicsAuthenticationFactorsItem>;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Réponse à la demande d'enrôlement
     */
    interface IProvisionningRequestResponse {
        "code"?: string;
        "interactionId"?: string;
        "label"?: string;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Demande d'enrôlement de moyens d'authentification
     */
    interface IBusinessProvisionningRequest {
        "characteristics"?: IBusinessProvisionningRequestCharacteristics;
        "response"?: IProvisionningRequestResponse;
    }
}

declare module GGOCommunEpi.Modele {
    /**
     * Objet défaut de typologie courte
     */
    interface IShortTypology {
        "code"?: string;
        "label"?: string;
    }
}

declare module GGOCommunEpi {
    import Types = GestionGeneriqueOffres.Types;
    module AuthentificationIhmConst {
        const LIB_MODE_SIGNATURE_ECTRONIQUE: string;
        const LIB_MODE_SIGNATURE_PAPIER: string;
        const CODE_MODE_SIGNATURE_ELECTRONIQUE: string;
        const CODE_MODE_SIGNATURE_PAPIER: string;
        const LIB_EXPEDITEUR_SUIVI_PAR: string;
        const LIB_EXPEDITEUR_OPERANT: string;
        const LIB_EXPEDITEUR_OPERANT_POUR_LE_COMPTE_DU_SUIVI_PAR: string;
        const NUM_SORTIE_LISA_CONNAISSANCE_CLIENT_PRO: number;
        const NUM_SORTIE_LISA_CONNAISSANCE_CLIENT_PART: number;
        const NUM_SORTIE_LISA_ROUTAGE_EDITIQUE: number;
        const NUM_SORTIE_LISA_ROUTAGE_SEMD_PAPIER: number;
        const NUM_SORTIE_LISA_ROUTAGE_SEMD_PRES_PERS_PP_PROT: number;
        const TYPE_PERSONNE_MORALE: string;
        const TYPE_PERSONNE_PHYSIQUE: string;
        const TYPE_PROCURATION: string;
        const MESSAGE_ASTUCE_CONTOURNEMENT_CAS_BLOCAGE: string;
        const TYPE_AGENT_OPERANT: string;
        const TYPE_AGENT_SUIVI_PAR: string;
        const LIB_BOUTON_VALIDER_PAPIER: string;
        const LIB_BOUTON_VALIDER_ELECTRONIQUE: string;
        const LIB_BOUTON_SUIVANT: string;
        const ID_SERVICE_REST_PORTEFEUIL: string;
        const ID_SERVICE_REST_MEDIA_PART: string;
        const ID_SERVICE_REST_ACT_PRO: string;
        const ID_SERVICE_REST_MOYEN_AUTH: string;
        const ID_SERVICE_REST_CARACTERISTIQUES_EDS: string;
        const ID_SERVICE_REST_AGENT: string;
        const ID_SERVICE_REST_RISQUES_CLIENT: string;
        const ID_SERVICE_REST_CONTRAT_BQD_PRO: string;
        const ID_SERVICE_REST_TIERS_CORPORATE: string;
        const ID_SERVICE_REST_USAGER: string;
        const ID_SERVICE_REST_NOYAU: string;
        module Contexte {
            const gestionLiasse: string;
            const listeLiasse: string;
            const modeToutPapier: string;
            const donneesAuthentificationPm: string;
        }
        const TYPE_PRODUIT_CENET: string;
    }
    class MediasEsignature {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private servicesAuth;
        private mediaEsignatureService;
        private modalService;
        private notificationService;
        contexte: Types.ContexteGgo;
        compositionOffre: Types.CompositionOffre;
        typeClient: string;
        modePapier: boolean;
        modeElectronique: boolean;
        raisonForcagePapier: string;
        libModeSignatElectronique: string;
        libModeSignatPapier: string;
        libSignatiareSuiviPar: string;
        libSignatiareOperant: string;
        libSignatiareOperantPourLeCompteSP: string;
        texteBoutonValider: string;
        isDesactiverBoutonValider: boolean;
        private checkDestinataireOperant;
        private checkDestinataireSuiviPar;
        private estMemePersonneOperantSuiviPar;
        private clientPossedeSuiviPar;
        private modeSignature;
        private signatiare;
        private suiviPar;
        private caracteristiqueEdsSuiviPar;
        private caracteristiqueEdsOperant;
        messageAstuceContournementCasBlocage: string;
        identifiantAgentSuiviPar: any;
        private listeLiasse;
        private acteGestionAverifier;
        private numeroLiasseEnCours;
        listeSignataires: Types.Authentification.IClientSignataireAuthentification[];
        personnes: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
        contractualisationActe: Myway.Ressource.ContractualisationActe.IEligibiliteSAGSED;
        modePanierSemd: boolean;
        modeSpaEsign: boolean;
        presenceSignatairePersProt: boolean;
        private formulaireAuthentification;
        private operantAdrMailExiste;
        private suiviParAdrMailExiste;
        private listeErreurs;
        private listeErreursOpSp;
        private existeErreurBloquante;
        private donneesMoyenAuthentification;
        private indexSignataire;
        loadingSignataire: boolean;
        isChargementValider: boolean;
        private estLiasseCeNet;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, servicesAuth: Services.IAuthentificationService, mediaEsignatureService: Services.IMediaEsignatureService, modalService: MyWay.UI.IModalService, notificationService: MyWay.UI.IMwNotificationService);
        verifierSignatureElec(): void;
        afficherErreursMotifNonEligibile(): boolean;
        modifierLibelleActe(libelleActe: string): string;
        private calculerModeSignature();
        private initialiserIhm();
        verifierSelectSP(): void;
        disableListeBox(arrayListeBox: any[]): boolean;
        allerAConnaissanceClient(): void;
        reloadAllBlocSignataire(): ng.IPromise<void>;
        loadBlocSignataire(index: number): ng.IPromise<void>;
        private formatNumeroTel(num, indicatifTelephone?);
        private pasUnDoublon(listeTelAdminPro, numTel);
        private supprimerDoublons(tabIn);
        private nettoyerListeExceptionsMedia();
        private miseAJourEtatBoutonValider();
        valider(): void;
        afficherBlocDetailSignature(): boolean;
        retourSynthese(): void;
        afficherErreurs(): boolean;
        afficherErreursOpSp(): boolean;
        /**
         * Permet de rafraîchir la synthèse NSDK avec la nouvelle offre souscrite
         */
        majSyntheseNSDK(): void;
        choisirMode(mode: string): void;
        modifierBoutonValiderGGO(mode: string): void;
        isDisabledCocheSuiviPar(): boolean;
    }
}

declare module GGOCommunEpi {
    function ggoCommunMediasEsignatureEPI(): ng.IDirective;
}
