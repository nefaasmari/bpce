/**
 * Enumeartions applicatives
 * @module Portefeuille.Enum
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Enum {
    "use strict";

    /**
     * Enumeration lièe à la page clients
     */
    export module PageClients {
        export enum TYPE_VUE {
            VUE_RELATION_ECONOMIQUE = <any>"VRE",
            VUE_CLIENTS = <any>"VC"
        };

        export enum TYPE_FORCAGE {
            SANS = <any>0,
            CLIENTS = <any>1,
            PROSPECTS = <any>2,
            TOUT = <any>3
        };
    }

    /**
     * Enumeration lièe à la directive pf-tuile-indicateur
     */
    export module PfTuileIndicateur {
        export enum COULEUR {
            AGENDA = <any>"rouge",
            PNB = <any>"orange",
            CA = <any>"vert",
            EQUIPEMENTS = <any>"bleu",
            COLLECT = <any>"noir",
            BALE2 = <any>"jaune"
        };
    }

    export module FiltrageRelationCommerciale {
        export enum FILTRECLIENTPROSPECT {
            TOUS = <any>"00",
            CLIENT = <any>"01",
            PROSPECTTIERS = <any>"02"
        };
    }

    /**
     * Enumeration concernant le type de valeur d'indicateur
     */
    export module Indicateur {
        export enum TYPE {
            DATE = <any>"Date",
            NOMBRE = <any>"Nombre",
            MONTANT = <any>"Montant",
            POURCENT = <any>"Pourcent",
            TEXTE = <any>"Texte",
            BEGACLI = <any>"Begacli"
        };

        export enum CODE {
            CLIENTPROSPECT = <any>"codeTypePersonne",
            ACTIF = <any>"actif",
            EQUIPE = <any>"equipe",
            LEADER = <any>"leader",
            CA_N = <any>"chiffreAffaireN",
            CA_N_MOINS_1 = <any>"chiffreAffaireN-1",

            MARCHE = <any>"libelleCourtSegmentMarche",
            POTENTIEL_PROSPECT = <any>"potentielProspect",
            SEG_RELATIONNELLE = <any>"libelleLongSegmentationRel",
            SEG_RELATIONNELLE_GROUPE = <any>"SEG_REL_GRP",

            DATE_DERNIER_ENTRETIEN = <any>"DateDernierEntretien",
            DATE_DERNIER_RDV = <any>"DateDernierRdv",
            NB_RDV_ANNEE_EN_COURS = <any>"NbRdvAnneeEncours",
            NB_RDV_12_MOIS_GLISSANTS = <any>"NbRdvSur12moisGliss",
            DATE_PROCHAIN_RDV = <any>"DateProchainRdv",

            NOTE_BALE2 = <any>"noteBale2",
            PART_ENGAG = <any>"PART_ENGAG",
            PROCHAINE_REVISION = <any>"revision",

            PNB_3112 = <any>"pnb3112",
            PNB_N = <any>"pnbN",
            PNB_N_MOINS_1 = <any>"pnbN-1",

            REV_DATE_DERNIERE_REVUE = <any>"DateDerniereRevue",
            REV_NB_SSFAMILLES_PROPOSE = <any>"NbSousFamilleAProposer",
            REV_VALIDEE_PAR = <any>"NomAgentRevue",

            FLUX_CREDITEURS_N = <any>"CREDITEUR_N",
            FLUX_CREDITEURS_N_MOINS_1 = <any>"CREDITEUR_N-1",
            FLUX_DEBITEURS_N = <any>"DEBITEUR_N",
            FLUX_DEBITEURS_N_MOINS_1 = <any>"DEBITEUR_N-1",

            NB_AFFAIRES_EN_COURS = <any>"AFF_EC",
            NB_PROPOSITIONS_EN_COURS = <any>"PROP_EC",
            NB_APPETENCES = <any>"APP_PROD",
            // NOUVEL INDICATEUR enum code score
            SCORE_ACTIVATION = <any>"SCORE_ACTI",
            SCORE_DEFAILLANCE = <any>"SCORE_DEFA",
            SCORE_APPETENCE = <any>"SCORE_APPE",
            TOP_CC = <any>"TOP_CC",
            PART_FLUX_CONFIES_CRED = <any>"PART_FLUX_CONFIES_CRED",
            PART_FLUX_CONFIES_DEB = <any>"PART_FLUX_CONFIES_DEB",
            PREMIER_EQUIPEMENT = <any>"PREMIER_EQUIPEMENT_INDIC",
            PREMIER_EQUIPEMENT_TAG = <any>"PREMIER_EQUIPEMENT",
            PREMIER_EQUIPEMENT_TEXTE = <any>"PREMIER_EQUIPEMENT_TEXTE",
            OBJECTIF_FLUX = <any>"OBJECTIF_FLUX",
            ENCOURS_BDF = <any>"ENCOURS_BDF",
            BEGACLI = <any>"BEGACLI"
        };
        export enum CODEPREF {  // ATTENTION ! NE SURTOUT PAS CHANGER LES LETTRES EXISTANTES, CAR CE SONT LES CLES UTILISEES DANS LE PANIER DS LES PREFS !!! 
            // Pour changer l'ordre, il faut modifier la config dans indicateur-service.ts
            CLIENTPROSPECT = <any>"A",
            ACTIF = <any>"B",
            LEADER = <any>"ZE",
            CA_N = <any>"C",
            CA_N_MOINS_1 = <any>"D",

            MARCHE = <any>"E",
            POTENTIEL_PROSPECT = <any>"Z",
            SEG_RELATIONNELLE = <any>"F",
            SEG_RELATIONNELLE_GROUPE = <any>"ZA",

            DATE_DERNIER_ENTRETIEN = <any>"G",
            DATE_DERNIER_RDV = <any>"H",
            NB_RDV_ANNEE_EN_COURS = <any>"J",
            NB_RDV_12_MOIS_GLISSANTS = <any>"K",
            DATE_PROCHAIN_RDV = <any>"I",

            NOTE_BALE2 = <any>"M",
            PART_ENGAG = <any>"ZD",
            PROCHAINE_REVISION = <any>"L",

            PNB_N = <any>"N",
            PNB_N_MOINS_1 = <any>"O",

            REV_DATE_DERNIERE_REVUE = <any>"Q",
            REV_NB_SSFAMILLES_PROPOSE = <any>"R",
            REV_VALIDEE_PAR = <any>"P",

            FLUX_CREDITEURS_N = <any>"S",
            FLUX_CREDITEURS_N_MOINS_1 = <any>"T",
            FLUX_DEBITEURS_N = <any>"U",
            FLUX_DEBITEURS_N_MOINS_1 = <any>"V",

            SANS_CONTRAT = <any>"W",
            PNB_3112 = <any>"X",

            NB_AFFAIRES_EN_COURS = <any>"Y",
            NB_APPETENCES = <any>"ZC",
            NB_PROPOSITIONS_EN_COURS = <any>"ZB",

            // NOUVEL INDICATEUR enum codepref score
            SCORE_ACTIVATION = <any>"ZF",
            SCORE_DEFAILLANCE = <any>"ZG",
            SCORE_APPETENCE = <any>"ZH",
            TOP_CC = <any>"ZI",
            PART_FLUX_CONFIES_CRED = <any>"ZJ",
            PART_FLUX_CONFIES_DEB = <any>"ZK",
            PREMIER_EQUIPEMENT = <any>"ZL",
            PREMIER_EQUIPEMENT_TAG = <any>"ZM",
            OBJECTIF_FLUX = <any>"ZN",
            ENCOURS_BDF = <any>"ZO",
            BEGACLI = <any>"ZP",
            PREMIER_EQUIPEMENT_TEXTE = <any>"ZQ",
        }
        export enum CODEREST {
            ACTIF = <any>"ACTIF",
            PERSONNE_PROTEGEE = <any>"PP",
            CA_N = <any>"CA_N",
            CA_N_MOINS_1 = <any>"CA_N-1",
            PNB12MOISGLISSANT = <any>"PNB",
            PROCHAINE_REVISION = <any>"REVISION",
            NOTE_BALE2 = <any>"BAL2",
            PNB_3112 = <any>"PNB_3112",
            PNB_N = <any>"PNB_N",
            PNB_N_MOINS_1 = <any>"PNB_N-1",
            REVUE = <any>"REVUE",
            FLUX = <any>"FLUX",
            POT_PROS = <any>"POT_PROS",
            AFFAIRES_EN_COURS = <any>"AFF_EC",
            SEG_RELATIONNELLE_GROUPE = <any>"SEG_REL_GRP",
            PROPOSITIONS_EN_COURS = <any>"PROP_EC",
            NB_APPETENCES = <any>"APP_PROD",
            PART_ENGAG = <any>"PART_ENGAG",
            // NOUVEL INDICATEUR enum coderest score
            SCORE_ACTIVATION = <any>"SCORE_ACTI",
            SCORE_DEFAILLANCE = <any>"SCORE_DEFA",
            SCORE_APPETENCE = <any>"SCORE_APPE",
            TOP_CC = <any>"TOP_CC",
            PART_FLUX_CONFIES_CRED = <any>"PART_FLUX_CONFIES_CRED",
            PART_FLUX_CONFIES_DEB = <any>"PART_FLUX_CONFIES_DEB",
            PREMIER_EQUIPEMENT = <any>"PREMIER_EQUIPEMENT_INDIC",
            PREMIER_EQUIPEMENT_TAG = <any>"PREMIER_EQUIPEMENT",
            PREMIER_EQUIPEMENT_TEXTE = <any>"PREMIER_EQUIPEMENT_TEXTE",
            OBJECTIF_FLUX = <any>"OBJECTIF_FLUX",
            ENCOURS_BDF = <any>"ENCOURS_BDF",
            BEGACLI = <any>"BEGACLI"
        }
        export enum CODEREL {
            CLIENTPROSPECT = <any>"codeTypePersonneRel",
            DATE_DERNIER_ENTRETIEN = <any>"DateDernierEntretienRel",
            DATE_DERNIER_RDV = <any>"DateDernierRdvRealiseRel",
            DATE_PROCHAIN_RDV = <any>"DateProchainRdvRel",
            NB_RDV_ANNEE_EN_COURS = <any>"NbRdvAnneeEncoursRel",
            NB_RDV_12_MOIS_GLISSANTS = <any>"NbRdvSur12moisGlissRel",
            REV_NB_SSFAMILLES_PROPOSE = <any>"NbSousFamilleAProposerRel",
            PNB_3112 = <any>"pnb3112Rel",
            PNB_N = <any>"pnbNRel",
            PNB_N_MOINS_1 = <any>"pnbNMoins1Rel",
            POTENTIEL_PROSPECT = <any>"potentielProspect",
            NB_AFFAIRES_EN_COURS = <any>"NbAffairesEnCoursRel",
            SEG_RELATIONNELLE_GROUPE = <any>"SEG_REL_GRP",
            NB_PROPOSITIONS_EN_COURS = <any>"NbPropositionsEnCoursRel",
            NB_APPETENCES = <any>"APP_PROD_REL",
            PART_ENGAG = <any>"PART_ENGAG",
            REV_DATE_DERNIERE_REVUE = <any>"DateDerniereRevueRel",
            ENCOURS_BDF = <any>"ENCOURS_BDF",
            BEGACLI = <any>"BEGACLI"
        };
        export enum INTITULE {
            CLIENTPROSPECT = <any>"Client/Prospect",
            ACTIF = <any>"Top Actif",
            NON_EQUIPE = <any>"Avec contrat",
            CA_N = <any>"Dernier CA",
            CA_N_MOINS_1 = <any>"Avant dernier CA",
            LEADER = <any>"Leader",
            MARCHE = <any>"Marché",
            POTENTIEL_PROSPECT = <any>"Potentiel prospect",
            SEG_RELATIONNELLE = <any>"Seg. relationnelle client",
            SEG_RELATIONNELLE_GROUPE = <any>"Seg. relationnelle groupe",
           // SEG_RELATIONNELLE_GROUPE_TUILE = <any>"Seg. rel. groupe",
            DATE_DERNIER_ENTRETIEN = <any>"Dernier CR",
            DATE_DERNIER_RDV = <any>"Dernier RDV",
            NB_RDV_ANNEE_EN_COURS = <any> "Nb RDV ",
            NB_RDV_12_MOIS_GLISSANTS = <any>"Nb RDV 12 derniers M",
            DATE_PROCHAIN_RDV = <any>"Prochain RDV",
            NOTE_BALE2 = <any>"Note Bâle II",
            PART_ENGAG = <any>"Part en engagement",
            PROCHAINE_REVISION = <any>"Prochaine révision",
            PNB_3112 = <any>"PNB 31/12/", // 31/12, ajouté par le code
            PNB_N = <any>"PNB N",
            PNB_N_MOINS_1 = <any>"PNB N-1",

            REV_DATE_DERNIERE_REVUE = <any>"Dernière revue",
            REV_NB_SSFAMILLES_PROPOSE = <any>"Nb produits à proposer",
            REV_VALIDEE_PAR = <any>"Validé par",

            FLUX_CREDITEURS_N = <any>"Flux créditeurs N",
            FLUX_CREDITEURS_N_MOINS_1 = <any>"Flux créditeurs N-1",
            FLUX_DEBITEURS_N = <any>"Flux débiteurs N",
            FLUX_DEBITEURS_N_MOINS_1 = <any>"Flux débiteurs N-1",
            NB_AFFAIRES_EN_COURS = <any>"Nb affaires en cours",

            NB_APPETENCES = <any>"Nb appétences produits",
            NB_PROPOSITIONS_EN_COURS = <any>"Nb propositions en cours",

            // NOUVEL INDICATEUR enum intitule score
            SCORE_ACTIVATION = <any>"Score activation",
            SCORE_DEFAILLANCE = <any>"Score défaillance",
            SCORE_APPETENCE = <any>"Score appétence",
            TOP_CC = <any>"Top CC",
            PART_FLUX_CONFIES_CRED = <any>"Part de flux créditeurs",
            PART_FLUX_CONFIES_DEB = <any>"Part de flux débiteurs",
            PREMIER_EQUIPEMENT = <any>"1er équipement",
            PREMIER_EQUIPEMENT_TAG = <any>"1er équipement tag",
            PREMIER_EQUIPEMENT_TEXTE = <any>"1er équipement", // affiché dans la liste des filtres
            OBJECTIF_FLUX = <any>"Objectif de flux",
            ENCOURS_BDF = <any>"Encours BDF",
            BEGACLI = <any>"BEGACLI"
        };
        export enum FAMILLE {
            CA = <any>"CA/Budget",
            SEGMENTATION = <any>"Segmentation",
            RENDEZ_VOUS = <any>"Rendez vous",
            RISQUE = <any>"Risque",
            NC = <any>"NC",
            PNB = <any>"PNB",
            REVUE = <any>"Revue de portefeuille",
            FLUX = <any>"Flux",
            PROSPECT = <any>"Segmentation",
            OPPORTUNITES = <any>"Opportunités",
            // NOUVEL INDICATEUR nouvelle famille
            PROSPECTION = <any>"Prospection"
        };
        export enum ICONE {
            DATE_DERNIER_RDV = <any>"itce-calendar",
            DATE_PROCHAIN_RDV = <any>"itce-calendar",
            DATE_DERNIER_ENTRETIEN = <any>"itce-pencil",
            NB_RDV_ANNEE_EN_COURS = <any>"itce-calendar-o",
            NB_RDV_12_MOIS_GLISSANTS = <any>"itce-calendar-o"
        };
    }

    /**
     * Enumeration lièe aux filtres
     */
    export module Filtre {
        export enum COMPARATEUR {
            SUPERIEUR = <any>">",
            INFERIEUR = <any>"<",
            EGALE = <any>"=",
            ENTRE = <any>"Entre",
            NC = <any>"= NC",
            ECHUE = <any>"= Echue (plus d'un an)",
            ENCOURS = <any>"= En cours (moins d'un an)",
            NONREALISEE = <any>"= Non réalisée"
        };
        export enum OPERATEUR {
            ET = <any>"ET",
            OU = <any>"OU"
        };
    }

    /**
     * Enumération liée à la Revue
     */
    export module Revue {
        export enum POPUP_REVUE {
            POPUP_CLIENTS_PRODUIT_A_PROPOSER = 0,
            POPUP_CLIENTS_APPETENCE_PRODUIT = 0,
            POPUP_CLIENTS_A_ACTIVER = Number.MAX_VALUE,
            POPUP_CLIENTS_TARIFICATION = 99977,
        };
    }

    /**
     * Enumération type de vue dans la ressource statPortfeuilleEds
     */
    export module Rest {
        export enum TYPE_VUE_STAT_GLOBAL {
            VUE_GLOBAL = <any>"0",
            VUE_DETAILLE = <any>"1",
            VUE_GLOBAL_ET_DETAILLE = <any>"2"
        };
    }

    /**
     * 
     */
    export module Vue {
        export enum TYPE_VUE {
            VUE_AGENT = <any>"0",
            VUE_EDS = <any>"1",
        };
    }
}