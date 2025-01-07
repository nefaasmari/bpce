/* tslint:disable:max-line-length */
export namespace RessourcePropositioncorpservV1OpportunitePropositi {
  export interface OpportuniteProposition {
    listeCritereCumul: CritereCumul[];

    listeCumul: Cumul[];
  }
  export interface Cumul {
    /**
     * Nombre d'affaires 'en cours', 'closes' ou les 2 pour une personne, une relation économique ou un portefeuille de chargé d'affaire BDR
     */
    nombreAffaire: number;

    /**
     * Nombre total de sous-familles de produits pour un client qui ont été cochées "A proposer" par le chargé d'affaire lors de la revue de son portefeuille
     */
    sousFamillePrdAProposer: number;

    /**
     * Nombre total de propositions commerciales en cours (Remontée des statuts 1,2,3 et 4)  pour un ou des client(s) ou pour un chargé d'affaire.
     */
    propositionCommerciale: number;

    /**
     * Nombre total de propositions commerciales pour un ou des client(s) ou pour un chargé d'affaire dont l'échéance se trouve entre la date du jour et la date du jour plus 7 jours.
     */
    propositionCommercialeAEcheance: number;

    /**
     * Nombre total de scores d'appétence pour une personne, une relation économique ou un portefeuille de chargé d'affaire BDR.
     */
    scoreAppetence: number;

    /**
     * Nombre d'opérations de financement
     */
    nbOperationFinancement: number;
  }
  export interface CritereCumul {
    /**
     * "1" EDS
     * "2" EDS et numéro de portefeuille
     * "3" Relation économique
     * "4" Numéro de personne
     */
    codeChoix: string;

    /**
     * Numéro d'identification d'un agent
     */
    identifiantAgent: number;

    /**
     * Correspond au code Banque sous lequel un Etablissement est répertorié par la Banque de France
     */
    codeEtablissement: string;

    /**
     * Elément de Structure
     */
    elementDeStructure: number;

    /**
     * Numéro d'identification du portefeuille de clientèle
     */
    numeroPortefeuille: number;

    /**
     * Une relation économique (ex ménage) est le regroupement de plusieurs personnes ayant un lien familial et/ou économique entre elles.
     */
    relationEconomique: number;

    /**
     * Numéro d'identification de la personne
     */
    identifiantPersonne: number;
  }
}
