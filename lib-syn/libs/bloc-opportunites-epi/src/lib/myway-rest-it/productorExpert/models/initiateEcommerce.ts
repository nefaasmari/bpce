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
import {InitiateEcommerceAttributes} from './initiateEcommerceAttributes';
import {InitiateEcommerceCharacteristics} from './initiateEcommerceCharacteristics';
import {InitiateEcommerceResponse} from './initiateEcommerceResponse';

/**
 * Sous-Ressource d'interaction permettant la creation d'une demande d'expertise Ecommerce
 */
export interface InitiateEcommerce {
  characteristics?: InitiateEcommerceCharacteristics;
  attributes?: InitiateEcommerceAttributes;
  response?: InitiateEcommerceResponse;
}
