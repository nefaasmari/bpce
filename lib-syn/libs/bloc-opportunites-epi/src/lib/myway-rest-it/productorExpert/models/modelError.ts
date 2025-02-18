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
 * Error object (BAPI)
 */
export interface ModelError {
  /**
   * Error code
   */
  code?: string;
  /**
   * Error message
   */
  message?: string;
  /**
   * Error attribute
   */
  attribute?: string;
  /**
   * Optional data
   */
  additionalInformation?: string;
}
