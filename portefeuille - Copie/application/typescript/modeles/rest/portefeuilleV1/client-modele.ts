declare module Portefeuille.Modeles.Rest.PortefeuilleV1.client {
    export interface IClient {
        listeClientIndicateur: Array<IClientIndicateur>;
    }

    export interface IIndicateur {
        /**
         * Le libellé de l'inducateur : 
         * Exemple: "PersonnesProtegees" ....
         */
        code: string;
        /**
         * Le nombre de personnes protégées pour un identifiant de client.
         */
        valeur: string;
        /**
         * La date de dernière mise à jour.
         */
        dateMaj: string;
        /**
         * Pourcentage d'évolution valorisé pour les indicateurs PNB ,  CA, Flux créditeurs et débiteurs de l'année N.
         */
        tendance?: number;
    }

    export interface IParametresEntree {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * La liste des identifiants des clients.
         */
        listeClients: Array<IClients>;
        /**
         * Liste des indicateurs : 
         * 
         * * Exemple de valeurs possibles:
         *       PP : Personne Protégée.
         *       PNB ....
         */
        listeIndicateurs: Array<string>;
    }

    export interface IClients {
        /**
         * L'identifiant du client
         */
        idClient: number;
        /**
         * Le SIREN du client
         */
        sirenClient: string;
    }

    export interface IClientIndicateur {
        /**
         * Numéro d'identification de la personne morale.
         */
        identifiantPersonne: number;
        listeIndicateurClient: Array<IIndicateur>;
    }
};