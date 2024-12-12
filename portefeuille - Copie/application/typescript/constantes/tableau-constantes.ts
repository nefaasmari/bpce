module Portefeuille.Constantes {
    "use strict";

    export module Tableau {
        export let TAB_LISTE_CLIENTS_CAPTION: string = "Liste clients";
        export let TAB_LISTE_CLIENTS_NO_ELEMENT: string = "Aucun client";
        export let TAB_LISTE_CLIENTS_COLONNE_NOM: string = "Nom";
        export let TAB_LISTE_CLIENTS_COLONNE_DETAIL: string = "Détail";
        export let TAB_NO_ELEMENT_CLIENT: string = "Aucun client";
        export let TAB_NO_ELEMENT_RELATION: string = "Aucune relation";
        export let TAB_LISTE_CLIENTS_COLONNE_ID: string = "N° de personne";
        export let TAB_LISTE_CLIENTS_COLONNE_RAISON_SOCIALE: string = "Raison sociale";
        export let TAB_LISTE_CLIENTS_COLONNE_MARCHE: string = "Marché";
        export let TAB_LISTE_CLIENTS_COLONNE_OBJECTIF_DE_FLUX: string = "Objectif de flux";

        export let VALEUR_POSSIBLE_POTENTIEL_PROSPECT: Array<string> = ["1 étoile", "2 étoiles", "3 étoiles"];
        export let VALEUR_POSSIBLE_TOP_CC: Array<string> = ["Vert", "Orange", "Rouge", "Blanc"];

        export let ID_TABLE_CLIENT: string = "tab-client";
        export let ID_TABLE_RELATION: string = "tab-relation";
    }
}