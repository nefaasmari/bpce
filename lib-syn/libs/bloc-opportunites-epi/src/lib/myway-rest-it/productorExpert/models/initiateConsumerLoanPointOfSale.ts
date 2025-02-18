/**
 * productorExpert
 * productorExpert api for bapi Project
 *
 * OpenAPI spec version: 1.5.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Cette structure doit contenir toutes les données fonctionnelles décrivant le point de vente du lead Oney
 */
export interface InitiateConsumerLoanPointOfSale {
  /**
   * Nom du point de vente
   */
  name?: string;
  /**
   * Nom du responsable du point de vente / gérant
   */
  managerName?: string;
  /**
   * Prénom du responsable du point de vente / gérant
   */
  managerFirstname?: string;
  /**
   * Email du responsable du point de vente / contact
   */
  managerEmail?: string;
}
