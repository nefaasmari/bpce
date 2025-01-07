import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {ReadExpertInquiriesByExpertInquiryIdV1Response} from '../models/readExpertInquiriesByExpertInquiryIdV1Response';

/**
 *
 * Appli consommatrice Appli conso app_CE_MonExpertMyWay.desktop_1
 *
 *
 */

@Injectable({
  providedIn: 'root'
})
export class ProductorExpertService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  public getInquiries(
    codeEtab: string,
    idPersonne: string
  ): Observable<ReadExpertInquiriesByExpertInquiryIdV1Response> {
    const url = `${
      this.env.bapiRestUrlPdtMetier
    }/bapi/productorExpert/v2/expertInquiries?legalEntityId[]=${codeEtab}-${idPersonne.toString().padStart(9, '0')}`;

    return this.requestHttpAgentService.sendRequest<any>({
      method: MethodEnum.GET,
      url: url,
      timeout: 30000,
      noCache: false,
      mywayHeaders: false,
      withCredentials: true,
      bapiConf: {
        baseUrlAuthentication: this.env.bapiAuthUrlPdtMetier,
        clientId: this.env.monexpeyClientId,
        domain: this.env.bapiRestUrlPdtMetier,
        scopes: ['readProductorExpert'],
        uniqueID: 'monexpey'
      },
      headers: {
        'x-cdetab': codeEtab
      },
      refer: location.origin + location.pathname
    });
  }
}
