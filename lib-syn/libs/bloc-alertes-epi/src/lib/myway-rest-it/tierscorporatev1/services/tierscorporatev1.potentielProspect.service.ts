import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceTierscorporateV1PotentielProspect} from '../models/tierscorporatev1.potentielProspect.models';

/**
 * Cette ressource permet de créer, consulter, modifier les données de qualification d'un prospect.
 */
@Injectable({
  providedIn: 'root'
})
export class TierscorporateV1PotentielProspectService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * @param codeEtablissement Code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France.
   * @param identifiantPersonne Numéro d'identification de la personne morale ou EI.
   * @returns Données de qualification d'un prospect.
   */
  public getPotentielProspect(
    codeEtablissement: string,
    identifiantPersonne: number
  ): Observable<RessourceTierscorporateV1PotentielProspect.PotentielProspect> {
    return this.requestHttpAgentService.sendRequest<RessourceTierscorporateV1PotentielProspect.PotentielProspect>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/tierscorporate-v1/potentielProspect/`,
      params: {
        codeEtablissement: `${codeEtablissement}`,
        identifiantPersonne: `${identifiantPersonne}`
      },
      timeout: 60000
    });
  }
}
