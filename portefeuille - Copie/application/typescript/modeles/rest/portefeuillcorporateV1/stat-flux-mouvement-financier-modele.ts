declare module Portefeuille.Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier {
    export interface IStatFluxMvtFinancier {
        infoFluxMvtFinancier: IInfoFluxMvtFinancier;
    }

    export interface IStatFluxMvtFinancierParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
        /**
         * Liste identifiant de la relation économique.
         */
        listeIdentifiantRelationEco: Array<number>;
    }

    export interface IInfoFluxMvtFinancier {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Somme des flux crediteurs des clients de l'année N.
         */
        fluxCrediteursAnneeN: number;
        /**
         * Somme des flux débiiteurs des clients de l'année N.
         */
        fluxDebiteursAnneeN: number;
        /**
         * Date début de calcul flux année N.
         */
        dateDebFluxAnneeN: string;
        /**
         * Date fin de calcul flux année N.
         */
        dateFinFluxAnneeN: string;
        /**
         * Somme des flux crediteurs des clients de l'année N-1.
         */
        fluxCrediteursNMoins1: number;
        /**
         * Somme des flux debiiteurs des clients de l'année N-1.
         */
        fluxDebiteursNMoins1: number;
        /**
         * Date début de calcul flux année N-1.
         */
        dateDebFluxAnneeNMoins1: string;
        /**
         * Date fin de calcul flux année N-1.
         */
        dateFinFluxAnneeNMoins1: string;
        /**
         * Taux évolution flux créditeurs
         */
        tauxEvolutionFluxCrediteurs: number;
        /**
         * Taux évolution flux débiteurs
         */
        tauxEvolutionFluxDebiteurs: number;
    }

};