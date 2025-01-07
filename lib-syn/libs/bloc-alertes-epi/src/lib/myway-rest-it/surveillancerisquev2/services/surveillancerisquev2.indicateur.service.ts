import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceSurveillancerisqueV2Indicateur} from '../models/surveillancerisquev2.indicateur.models';

/**
 * Cette ressource, en GET, renvoie l'ensemble des indicateurs de surveillance des risques d'un client.
 */
@Injectable({
  providedIn: 'root'
})
export class SurveillancerisqueV2IndicateurService {
  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private requestHttpAgentService: HttpAgentService
  ) {}

  /**
   * @param indicateurEntree
   * @returns
   */
  public getIndicateur(
    indicateurEntree: RessourceSurveillancerisqueV2Indicateur.IndicateurEntree
  ): Observable<RessourceSurveillancerisqueV2Indicateur.Indicateur> {
    return this.requestHttpAgentService.sendRequest<RessourceSurveillancerisqueV2Indicateur.Indicateur>({
      method: MethodEnum.POST,
      url: `${this.env.urlRest}/surveillancerisque/v2/indicateur/`,
      body: indicateurEntree,
      params: {}
    });
  }
}
