import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourcePortefeuillcorporateV1StatRentabilite} from '../models/portefeuillcorporatev1.statRentabilite.models';

/**
 * Cette ressource permet de récupérer les données PNB (Sommes des pnb des clients des portefeuilles ou des clients des relations eco ou des clients)
 * En entrée : code établissement + identifiant élément structure + liste des portefeuilles ou liste relations eco ou liste des personnes.
 */
@Injectable({
  providedIn: 'root'
})
export class PortefeuillcorporateV1StatRentabiliteService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * @param statRentabiliteParametres
   * @returns
   */
  public postStatRentabilite(
    statRentabiliteParametres: RessourcePortefeuillcorporateV1StatRentabilite.StatRentabiliteParametres
  ): Observable<RessourcePortefeuillcorporateV1StatRentabilite.StatRentabilite> {
    return this.requestHttpAgentService.sendRequest<RessourcePortefeuillcorporateV1StatRentabilite.StatRentabilite>({
      method: MethodEnum.POST,
      url: `${this.env.urlRest}/portefeuillcorporate-v1/statRentabilite/`,
      body: statRentabiliteParametres,
      mywayHeaders: true
    });
  }
}
