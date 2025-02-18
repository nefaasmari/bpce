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
import {ShortTypology} from './shortTypology';

/**
 * Cette structure doit contenir toutes les données fonctionnelles décrivant le lead Izicap
 */
export interface ExpertInquiryLoyaltyService {
  /**
   * Indique si le client est présent sur les réseaux sociaux
   */
  socialNetworkIndicator?: boolean;
  socialNetworkDurationType?: ShortTypology;
  /**
   * Nombre de TPE à équiper
   */
  tpeQuantity?: number;
  implementationDelayType?: ShortTypology;
}
