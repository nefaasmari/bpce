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
import {ExpertInquiryAcceptanceDevice} from './expertInquiryAcceptanceDevice';
import {ExpertInquiryAutoLease} from './expertInquiryAutoLease';
import {ExpertInquiryBillingService} from './expertInquiryBillingService';
import {ExpertInquiryCharacteristics} from './expertInquiryCharacteristics';
import {ExpertInquiryConsumerLoan} from './expertInquiryConsumerLoan';
import {ExpertInquiryEcommerce} from './expertInquiryEcommerce';
import {ExpertInquiryFactoring} from './expertInquiryFactoring';
import {ExpertInquiryIdentification} from './expertInquiryIdentification';
import {ExpertInquiryInsuranceProduct} from './expertInquiryInsuranceProduct';
import {ExpertInquiryInternationalImplementation} from './expertInquiryInternationalImplementation';
import {ExpertInquiryLoyaltyService} from './expertInquiryLoyaltyService';
import {ExpertInquiryOrganizationManagementService} from './expertInquiryOrganizationManagementService';
import {ExpertInquiryRetirementProduct} from './expertInquiryRetirementProduct';
import {ExpertInquiryServiceVoucher} from './expertInquiryServiceVoucher';

/**
 * Ressource représentant les caractéristiques d'une demande d'expertise sur un produit pour un client (non implementée pour le moment). Parfois qualifiée de \"lead\" ou opportunité.
 */
export interface ExpertInquiry {
  identification?: ExpertInquiryIdentification;
  characteristics?: ExpertInquiryCharacteristics;
  autoLease?: ExpertInquiryAutoLease;
  serviceVoucher?: ExpertInquiryServiceVoucher;
  organizationManagementService?: ExpertInquiryOrganizationManagementService;
  retirementProduct?: ExpertInquiryRetirementProduct;
  consumerLoan?: ExpertInquiryConsumerLoan;
  insuranceProduct?: ExpertInquiryInsuranceProduct;
  acceptanceDevice?: ExpertInquiryAcceptanceDevice;
  ecommerce?: ExpertInquiryEcommerce;
  factoring?: ExpertInquiryFactoring;
  billingService?: ExpertInquiryBillingService;
  loyaltyService?: ExpertInquiryLoyaltyService;
  internationalImplementation?: ExpertInquiryInternationalImplementation;
}
