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
import {ServiceVouchersItem} from './serviceVouchersItem';

/**
 * Cette structure doit contenir toutes les données fonctionnelles décrivant le lead lease, nécessaires à sa création.  Nature de donnée : readOnly
 */
export interface InitiateServiceVoucherAttributes {
  /**
   * Cette structure doit contenir toutes les données fonctionnelles décrivant le lead NIT
   */
  serviceVouchers?: Array<ServiceVouchersItem>;
}
