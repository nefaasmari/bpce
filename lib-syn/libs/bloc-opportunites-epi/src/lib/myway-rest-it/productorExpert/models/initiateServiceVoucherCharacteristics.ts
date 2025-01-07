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
 * Cette structure doit contenir toutes les données fonctionnelles décrivant l'interaction, nécessaires à sa réalisation ou issues de son traitement.
 */
export interface InitiateServiceVoucherCharacteristics {
  /**
   * Code Insee permettant l'identification d'un établissement ou d'une entreprise française (W)
   */
  siret?: string;
  /**
   * Code Insee permettant l'identification d'un établissement ou d'une entreprise française (W)
   */
  siren?: string;
  /**
   * Indique si PRO
   */
  professionalIndicator?: boolean;
  /**
   * Identifiant interne du lead
   */
  expertInquiryId?: string;
  /**
   * Code de la banque
   */
  bankCode?: string;
}
