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
import {ExpertInquiryPointOfSale} from './expertInquiryPointOfSale';
import {ShortTypology} from './shortTypology';

/**
 * Cette structure doit contenir toutes les données fonctionnelles décrivant le lead Oney
 */
export interface ExpertInquiryConsumerLoan {
  /**
   * Nom de la marque (enseigne)
   */
  brandName?: string;
  businessUniverseType?: ShortTypology;
  /**
   * Nom du représentant légal
   */
  legalRepresentativeName?: string;
  pointOfSale?: ExpertInquiryPointOfSale;
}
