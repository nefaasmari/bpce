/* tslint:disable:max-line-length */
export namespace RessourcePortefeuillcorporateV1StatRentabilite {
  export interface StatRentabiliteParametres {
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
    listeIdentifiantPortefeuille: number[];

    /**
     * Liste identifiant de la relation économique.
     */
    listeIdentifiantRelationEco: number[];

    /**
     * Liste numéro de personne.
     */
    listeIdentifiantPersonne: number[];
  }
  export interface StatRentabilite {
    infoPnb: InfoPnb;
  }
  export interface InfoPnb {
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
     */
    dateDebPnb3112AnneeNMoins1: string;

    /**
     * Date arrêtée de calcul du PNB au 31/12 de l'année N-1.
     */
    dateFinPnb3112AnneeNMoins1: string;

    /**
     * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N-1.
     */
    pnb12DerniersMoisGlissNMoins1: number;

    /**
     * Date début de calcul PNB de 12 derniers mois glissants de l'année N-1.
     */
    dateDebPnb12DerMoisGlissNMoins1: string;

    /**
     * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N-1.
     */
    dateFinPnb12DerMoisGlissNMoins1: string;

    /**
     * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N.
     */
    pnb12DerniersMoisGlissantN: number;

    /**
     * Date début de calcul du PNB de 12 derniers mois glissants de l'année N.
     */
    dateDebPnb12DerMoisGlissN: string;

    /**
     * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N.
     */
    dateFinPnb12DerMoisGlissN: string;

    /**
     * % d'évolution du PNB entre les 12 M glissants N-1 et N.
     */
    tauxEvolutionPnb: number;

    /**
     * Ratio = Poids = Somme des 10 PNB les plus importants, sur 12 mois glissants,  des clients (relations économiques) de tous les portefeuilles sélectionnés / Somme de tous les PNB sur 12 mois glissants de tous les portefeuilles sélectionnés.
     */
    ratioPnbClient: number;
  }
}
