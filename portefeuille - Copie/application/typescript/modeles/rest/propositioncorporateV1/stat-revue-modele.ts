declare module Portefeuille.Modeles.Rest.PropositionCorporateV1.statRevue {
    export interface IStatRevueParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        identifiantElementStructure: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
    }

    export interface IStatRevue {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: string;
        /**
         * Pourcentage de revue portefeuille réalisée.
         */
        pourcentageRevuePtfRealisee: number;
        /**
         * Nombre de clients revus.
         */
        nombreDeClientsRevus: number;
        /**
         * Nombre de clients total.
         */
        nombreDeClientsTotal: number;
        /**
         * Nombre de produits à proposer.
         */
        nombreDeProduitsAProposer: number;
        /**
         * Nombre de clients à activer.
         */
        nombreDeClientsAActiver: number;
        /**
         * Nombre de clients à renégocier (tarification).
         */
        nombreDeClientsARenegocier: number;
        /**
         * Nombre de clients avec Appétence.
         */
        nombreDeClientsAAppetence: number;
        /**
         * Cumul nombre des affaires.
         */
        cumulNombreAffaires: number;
        /**
         * Cumul Proposition Commerciale BDR.
         */
        cumulPropositionCommerciale: number;
    }

};