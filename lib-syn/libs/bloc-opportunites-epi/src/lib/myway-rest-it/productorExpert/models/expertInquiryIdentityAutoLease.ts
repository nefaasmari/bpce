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
import {ExpertInquiryIdentityFinancingAgreement} from './expertInquiryIdentityFinancingAgreement';

/**
 *  Cette structure doit contenir toutes les données fonctionnelles décrivant le lead Bail Auto
 */
export interface ExpertInquiryIdentityAutoLease {
  /**
   * Motif de la demande (Création 'C' ou Renouvellement 'R' ou Extension de parc 'E')
   */
  reason?: string;
  financingAgreement?: ExpertInquiryIdentityFinancingAgreement;
}
