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
 * Cette structure doit contenir toutes les données fonctionnelles décrivant l'interaction, nécessaires à sa réalisation ou issues de son traitement. Nature de donnée : readOnly
 */
export interface InitiateRetirementProductResponse {
  /**
   * Identifiant unique de l'interaction.
   */
  interactionId?: string;
  /**
   * Le code est une donnée obligatoire dont la plage de valeur doit être décrite dans la spécification de la requête. Il qualifie la façon dont l'interaction s'est exécutée.
   */
  code?: string;
  /**
   * Label fonction du code, documentant le résultat.
   */
  label?: string;
}
