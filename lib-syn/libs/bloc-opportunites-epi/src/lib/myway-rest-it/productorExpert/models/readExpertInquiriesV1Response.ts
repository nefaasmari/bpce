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
import {ExpertInquiryIdentification} from './expertInquiryIdentification';
import {ExpertInquiryIdentity} from './expertInquiryIdentity';
import {Links} from './links';
import {Page} from './page';
import {Sort} from './sort';

/**
 * Api response for readExpertInquiriesV1
 */
export interface ReadExpertInquiriesV1Response {
  links: Links;
  page: Page;
  sort: Sort;
  expertInquiryIdentification?: ExpertInquiryIdentification;
  expertInquiryIdentity?: ExpertInquiryIdentity;
}
