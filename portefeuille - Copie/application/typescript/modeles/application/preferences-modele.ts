module Portefeuille.Modeles.Application {
    "use strict";

    /**
     * Modèle d'un panier pour les préférences utilisateurs
     */
    export interface IPanierPreferences {
        numero: number;
        listeCodesIndicateurs: Array<string>;
        // Evolution multi panier
        nom: string;
        estDefaut: boolean;
        // fin Evolution multi panier
    }


} 