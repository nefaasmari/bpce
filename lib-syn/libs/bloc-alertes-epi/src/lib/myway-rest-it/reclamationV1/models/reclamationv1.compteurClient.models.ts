/* tslint:disable:max-line-length */
export namespace RessourceReclamationV1CompteurClient {
  export interface CompteurClient {
    /**
     * Nombre de réclamation pour un client
     */
    nombreReclamation: number;

    /**
     * Indique si les données ont été basculées dans salesforce ou non
     */
    indicateurBascule: boolean;
  }
}
