declare module Portefeuille.Modeles.Rest.PreferenceUtilisateur {
    export interface IPreference {
        /**
         * Clé
         */
        cle: string;

        /**
         * Valeur
         */
        valeur: string;
    }

    export interface IParametresEntree {
        /**
         * Code agent
         */
        codeAgent: string;
    }
};