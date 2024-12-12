/* Fichier pré-requis pour utiliser c'est constantes
 * sans cela une erreur est produite lors de l'execution */
/// <reference path="./service-constantes.ts" />


module Portefeuille.Constantes {
    "use strict";

    export module Application {
        export let TITRE_APPLICATION: string = "Animer les portefeuilles PM et EI";
        export let TITRE_VUE_CLIENT: string = "Liste des clients";
        export let TITRE_VUE_RELATION: string = "Liste des relations économiques";
        export let CHAINE_INDICATEUR_ACTIF: string = "Actif";
        export let CHAINE_INDICATEUR_INACTIF: string = "Inactif";
        export let CHAINE_INDICATEUR_CLIENT: string = "Client";
        export let CHAINE_INDICATEUR_TIERS: string = "Tiers";
        export let CHAINE_INDICATEUR_PROSPECT: string = "Prospect";
        export let CHAINE_INDICATEUR_LEADER: string = "Leader";
        export let CHAINE_INDICATEUR_NON_CONNU: string = "NC";
        export let CHAINE_AJOUT_PERSONNALISATION: string = "Ajouter nouvelle personnalisation";
        export let CHAINE_OUI: string = "Oui";
        export let CHAINE_NON: string = "Non";
        export let FORMAT_DATE_IHM: string = "DD/MM/YYYY";
        export let FORMAT_DATE_REST: string = "YYYY-MM-DD";

        export let CODE_HABILITATION_CHOIX_EDS: string = "SHDC23";
        export let CODE_HABILITATION_AGENCE_NIVEAU_2: string = "SHDC23";
        export let CODE_HABILITATION_ACCES_PNB: string = "SHDC26";
        export let CODE_HABILITATION_CONSULT_REVUE: string = "SHDC24";
        export let CODE_HABILITATION_CONSULT_AFFAIRES: string = "SHP6AF";
        export let CODE_HABILITATION_CONSULT_PROPOSITIONS: string = "SHPI04";
        export let CODE_HABILITATION_MAJ_REVUE: string = "SHDC25";
        export let CODE_HABILITATION_CONSULT_POT_PROSPECT: string = "SHPIQ1";
        export let CODE_HABILITATION_MAJ_POT_PROSPECT: string = "SHPIQ2";
        export let CODE_HABILITATION_CONSULT_SEGMENTATIONS: string = "SHDL01";
        export let CODE_HABILITATION_CHOIX_AGENT: string = "SHDC22";

        export let TXT_SELECTIONNER_TOUT: string = "Sélectionner tout";
        export let TXT_DESELECTIONNER_TOUT: string = "Désélectionner tout";
        export let NB_LIGNE_TABLEAU: number = 20;
        export let CODE_LEADER_RELATION: string = "L";
        export let CHAINE_NOM_PANIER_INDICATEUR: string = "Ma sélection d'indicateurs";
        export let TXT_CHOIX_PORTEFEUILLE: string = "Choix de portefeuille";
        export let CLASSE_COLONNE_CLIENTS: string = ".colonne-clients";
        export let CLASSE_COLONNE_RELATIONS: string = ".colonne-relations";
        export let CLASSE_BTN_FILTRE: string = ".btn-filtre";
        export let ID_TABLE_CLIENT: string = "#tab-client";
        export let CLASSE_ACTIF: string = "actif";
        export let LIMITE_CLIENTS_ATTEINTE_CHOIX_CLIENTS_SINGULIER: string = "Votre portefeuille est filtré, seuls les clients sont affichés.";
        export let LIMITE_CLIENTS_ATTEINTE_CHOIX_PROSPECTS_SINGULIER: string = "Votre portefeuille est filtré, seuls les prospects sont affichés.";
        export let LIMITE_CLIENTS_ATTEINTE_CHOIX_CLIENTS_PLURIEL: string = "Vos portefeuilles sont filtrés, seuls les clients sont affichés.";
        export let LIMITE_CLIENTS_ATTEINTE_CHOIX_PROSPECTS_PLURIEL: string = "Vos portefeuilles sont filtrés, seuls les prospects sont affichés.";
        export let LIMITE_CLIENTS_ATTEINTE_CHOIX_TOUT_SINGULIER: string = `Votre portefeuille comporte plus de ${Constantes.Service.RELATION_COMMERCIALE_NB_MAX_RES} clients/prospects.`;
        export let LIMITE_CLIENTS_ATTEINTE_CHOIX_TOUT_PLURIEL: string = `Vos portefeuilles comportent plus de ${Constantes.Service.RELATION_COMMERCIALE_NB_MAX_RES} clients/prospects.`;
        export let LISTE_RELATIONS_ECONOMIQUES_INACCESSIBLE: string = "La liste des relations économiques n'est pas accessible.";
        export let INDICATEURS_PREDEFINIS_NON_MODIFIABLES: string = "Les indicateurs sont prédéfinis et non modifiables.";
        export let NOM_PANIER_FORCAGE: string = "Indicateurs prédéfinis";
        export let NOM_PANIER_DEFAUT: string = "Ma sélection d'indicateurs";
        export let NOM_PANIER_CREATION: string = "Sélection d'indicateurs";
        export let LIMITE_NB_PANIERS: number = 3;
        export let FIL_ARIANE_PAGE_SELECTION_INDICATEURS: string = "Personnaliser les indicateurs";

        //Vue Globale => Partie "Portefeuille"
        export let DIAGRAMME_COLONNE_CLIENTS: string = "Clients";
        export let DIAGRAMME_COLONNE_CLIENTS_ACTIFS: string = "Dont actifs";
        export let DIAGRAMME_COLONNE_SANS_CONTRAT: string = "Dont clients sans contrat";
        export let DIAGRAMME_COLONNE_PROSPECTS: string = "Prospects et<br>clients sans contrat";
        export let DIAGRAMME_COLONNE_RELATIONS: string = "Relations";
        export let BADGE_CLIENTS_PME_ESI: string = "Clients PME et ESI";
        export let BADGE_CLIENTS_PE_ET_PEES: string = "Dont clients PE et PEES";
        export let BADGE_CLIENTS_ME_ET_MEES: string = "Dont clients ME et MEES";
        export let BADGE_CLIENTS_GE_ET_GEES: string = "Dont clients GE et GEES";
        export let BADGE_CLIENTS_PRO: string = "Clients Pro";
        export let BADGE_AUTRES_CLIENTS: string = "Clients autres marchés";
        export let GRAPHE_SEGMENTATION_TITRE: string = "Segmentation relationnelle";
        export let GRAPHE_SEGMENTATION_TITRE_GROUPE: string = "Segmentation relationnelle groupe";
        export let GRAPHE_SEGMENTATION_TITRE_CLIENT: string = "Segmentation relationnelle client";
        export let PUCE_SEGMENTATION_FIDELISER: string = "A fidéliser";
        export let PUCE_SEGMENTATION_SURVEILLER: string = "A surveiller";
        export let PUCE_SEGMENTATION_DEVELOPPER: string = "A développer";
        export let PUCE_SEGMENTATION_ACQUERIR: string = "A acquérir";
        export let PUCE_SEGMENTATION_GERER: string = "A gérer";
        export let PUCE_SEGMENTATION_PRESERVER: string = "A préserver";
        export let PUCE_SEGMENTATION_NON_SEGMENTE: string = "Non segmenté";
        export const DONUT_PRO: string = "PRO";
        export const DONUT_PME_ESI: string = "PME/ESI";
        export const TABLE_DELOC_SEGMENTATIONS: string = "DU2L";

        //Vue Globale => Partie "Rentabilité"
        export let GRAPHE_POIDS_PNB: string = "Poids du PNB des 10 relations économiques les plus importantes";

        // SPC identifiant maximum de portefeuille qui ne sont pas des id portfeuille mais des type de suivi par complémentaires
        // Pour le moment 13/06/2024, les type de suivi par complémentaire vont de 001 à 009.
        // Les id portefeuille en production commencent à 1 mais les 20 premiers sont des portefeuilles collectifs ou reservoire
        export const ID_PORTEFEUILLE_MAX_SPC = 20;

        //Vue Globale => Partie "Revue Portefeuille"
        export let BADGE_PRODUITS_PROPOSER: string = "Produits à proposer";
        export let BADGE_APPETENCE_PRODUITS: string = "Appétence produits";
        export let BADGE_CLIENTS_ACTIVER: string = "Clients à activer";
        export let BADGE_CLIENTS_RENEGOCIER: string = "Tarifications à renégocier";

        export let BADGE_PROPOSITIONS_EN_COURS: string = "Propositions en cours";
        export let BADGE_AFFAIRES_EN_COURS: string = "Affaires en cours";

        export let GRAPHE_REVUE_PORTEFEUILLE: string = "Taux de revues";

        //Vue Globale => Partie "Rendez-vous"
        export let TITRE_PANEL_RDV: string = "Activité commerciale depuis le 1er janvier "; //Suivi de l'année en cours
        export let TITRE_PANEL_RDV_AVEC_CRE: string = "(RDV avec CRE)";
        export let BADGE_RDV_REALISES_ANNEE_EN_COURS: string = "RDV réalisés";
        export let BADGE_CLIENTS_REALISES_ANNEE_EN_COURS: string = "Dont RDV Clients";
        export let BADGE_PROSPECTS_REALISES_ANNEE_EN_COURS: string = "Dont RDV Prospects et clients sans contrat";
        export let BADGE_PROSPECTS_VUS_ANNEE_EN_COURS: string = "Prospects rencontrés";
        export let BADGE_RELATION_ECONOMIQUE_ANNEE_EN_COURS: string = "Relations économiques rencontrées";

        //Libellés IHM associés aux codes segmentation Pro
        export const LIBELLE_AGGLOMERAT_ENTREE_RELATION: string = "Entrée en relation";
        export const LIBELLE_AGGLOMERAT_RISQUE: string = "Risqué";
        export const LIBELLE_AGGLOMERAT_PRO_NON_CAPTE: string = "Faiblement/Non capté";
        export const LIBELLE_AGGLOMERAT_PRO_PARTIELLEMENT_CAPTE: string = "Partiellement capté";
        export const LIBELLE_AGGLOMERAT_PRO_LARGEMENT_CAPTE: string = "Largement capté";
        export const LIBELLE_AGGLOMERAT_AUTRES: string = "Non concerné/calculé";

        //Fin de chaîne pour la chaîne max utilisée lors des tris dans tableau relations éco et clients
        export const FIN_CHAINE_MAX: string = new Date().toDateString();
        export const DATE_MIN: string = "1970/01/01";
        export const DATE_MAX: string = "9999/12/31";
        export const DONNEE_NUMBER: string = "number";
        export const DONNEE_STRING: string = "string";
        export const DONNEE_VALEUR_NUMBER: string = "valeurNumber";
        export const DONNEE_VALEUR_DATE: string = "valeurDate";

        export const LIBELLE_NOTE_PROSPECT: string[] = ["0", "1 étoile", "2 étoiles", "3 étoiles"];

        export const LIBELLE_TOP_CC_BLANC: string = "Blanc";
    }
}