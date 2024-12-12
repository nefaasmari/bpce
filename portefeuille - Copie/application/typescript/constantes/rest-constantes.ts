module Portefeuille.Constantes {
    "use strict";

    export module Rest {
        export let AGENT_V2_CODE_ACTION_1: string = "1";
        export let AGENT_V2_TYPE_RECHERCHE_NOM: number = 1;
        export let AGENT_V2_TYPE_RECHERCHE_GROUPE_FONCTION: number = 4;
        export let AGENT_V2_TYPE_RECHERCHE_MATRICULE: number = 5;
        export let AGENT_V2_TYPE_RECHERCHE_AGENCE_RATTACHEMENT: number = 21;
        export let AGENT_V2_RECHERCHE_GROUPE_FONCTION_BDR: string = "009";
        export let CODE_PERSONNALITE_JURIDIQUE_EI: string = "1";
        export let CODE_PERSONNALITE_JURIDIQUE_PM: string = "2";
        export let CODE_TYPE_PERSONNE_CLIENT: string = "0";
        export let CODE_TYPE_PERSONNE_TIERS: string = "1";
        export let CODE_TYPE_PERSONNE_PROPECT_RESTREINT: string = "2";
        export let CODE_TYPE_PERSONNE_PROPECT_ENRICHI: string = "3";
        export let CODE_O_TRUE: string = "O";
        export let CODE_STRING_ACTIF: string = "O";

        export const CODE_ENTREE_EN_RELATION: string = "EER";
        export const CODE_RISQUE: string = "RSK";
        export const CODE_PRO_NON_CAPTE: string = "NCP";
        export const CODE_PRO_PARTIELLEMENT_CAPTE: string = "PCP";
        export const CODE_PRO_LARGEMENT_CAPTE: string = "LCP";
        export const CODE_AUTRES: string = "AUT";

        export const ENTREE_EN_RELATION: string = "_ER";
        export const PRO_RISQUE: string = "_RK";
        export const NON_CALCULE_NON_CONCERNE: string = "NON";

    }
}