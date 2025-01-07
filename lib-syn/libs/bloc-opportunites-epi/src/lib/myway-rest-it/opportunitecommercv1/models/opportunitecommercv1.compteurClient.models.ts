/* tslint:disable:max-line-length */
export namespace RessourceOpportunitecommercV1CompteurClient {
  export interface CompteurClient {
    /**
     * Nombre d'opportunité pour le client en entrée
     */
    nombreOpportuniteClient: number;

    /**
     * designation retrouvé à partir du numeroPersonne dans le cas ou il n'y a qu'une seule opportunité
     */
    designationCourteClient: string;

    /**
     * commentaire de l’opportunité la plus récente
     */
    commentaireOpportunite: string;

    /**
     * true = basculé
     * false = non basculé
     */
    indicateurBascule: boolean;
    /**
     * Identifiant de l'opportunité principale
     */
    identifiantOCPrincipale: string;
  }
  export interface InformationClientOpportunitePrincipale {
    /**
     * Numéro du client de l'opportunité principale
     */
    numeroClient: number;

    /**
     * Désignation du client de l'opportunité principale
     */
    designationClient: string;
  }
}
