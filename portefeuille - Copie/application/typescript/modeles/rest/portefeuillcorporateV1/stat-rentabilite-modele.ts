declare module Portefeuille.Modeles.Rest.PortefeuillCorporateV1.statRentabilite {
    export interface IStatRentabiliteParametres {
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
        /**
         * Liste numéro de personne.
         */
        listeIdentifiantPersonne: Array<number>;
    }

    export interface IStatRentabilite {
        infoPnb: IInfoPnb;
    }

    export interface IInfoPnb {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Somme de tous les PNB des clients des portefeuilles au 31/12 de l'année N-1
         */
        pnb3112AnneeNMoins1: number;
        /**
         * Date début de calcul du PNB au 31/12 de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb3112AnneeNMoins1: string;
        /**
         * Date arrêtée de calcul du PNB au 31/12 de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb3112AnneeNMoins1: string;
        /**
         * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N-1.
         */
        pnb12DerniersMoisGlissNMoins1: number;
        /**
         * Date début de calcul PNB de 12 derniers mois glissants de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb12DerMoisGlissNMoins1: string;
        /**
         * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb12DerMoisGlissNMoins1: string;
        /**
         * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N.
         */
        pnb12DerniersMoisGlissantN: number;
        /**
         * Date début de calcul du PNB de 12 derniers mois glissants de l'année N.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb12DerMoisGlissN: string;
        /**
         * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb12DerMoisGlissN: string;
        /**
         * % d'évolution du PNB entre les 12 M glissants N-1 et N.
         */
        tauxEvolutionPnb: number;
        /**
         * Ratio = Poids = Somme des 10 PNB les plus importants, sur 12 mois glissants,  des clients (relations économiques) de tous les portefeuilles sélectionnés / Somme de
         * tous les PNB sur 12 mois glissants de tous les portefeuilles sélectionnés.
         */
        ratioPnbClient: number;
    }
    
};