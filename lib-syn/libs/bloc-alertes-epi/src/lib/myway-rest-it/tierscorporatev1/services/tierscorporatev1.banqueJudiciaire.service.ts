import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceTierscorporateV1BanqueJudiciaire} from '../models/tierscorporatev1.banqueJudiciaire.models';

/**
 * Cette ressource permet de consulter/modifier les informations relatives aux procédures et gestion judiciaire.
 * Les données sont utilisées pour le pilotage des personnes morales.
 */
@Injectable({
  providedIn: 'root'
})
export class TierscorporateV1BanqueJudiciaireService {
  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private requestHttpAgentService: HttpAgentService
  ) {}

  /**
   * @param identifiantPersonne Numéro chrono attribué par le système à chaque ouverture de personne.
   * L'identifiant est unique au sein du CTR. Cela permet d'éviter les conflits d'identifiant en cas de fusion de caisse
   * @returns retourne les informations de la banque judiciaire
   */
  public getBanqueJudiciaire(
    identifiantPersonne: number
  ): Observable<RessourceTierscorporateV1BanqueJudiciaire.BanqueJudiciaire> {
    return this.requestHttpAgentService.sendRequest<RessourceTierscorporateV1BanqueJudiciaire.BanqueJudiciaire>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/tierscorporate/v1/banqueJudiciaire/`,
      params: {
        identifiantPersonne: `${identifiantPersonne}`
      }
    });
  }
}
