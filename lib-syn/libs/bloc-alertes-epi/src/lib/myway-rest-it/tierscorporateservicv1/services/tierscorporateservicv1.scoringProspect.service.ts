import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceTierscorporateservicV1ScoringProspect} from '../models/tierscorporateservicv1.scoringProspect.models';

/**
 * Restitution des informations compléments prospects dont les scores
 */
@Injectable({
  providedIn: 'root'
})
export class TierscorporateservicV1ScoringProspectService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * Méthode de restitution des informations compléments prospects dont les scores
   * @param codeEtablissement Code établissement
   * @param identifiantPersonne Identifiant personne
   * @param categorieProspect Le prospect est soit un particulier soit un professionnel et/ou Entrepreneur individuel
   * Alimenté à "E" par défaut
   * 'P'        Prospect particulier
   * 'E'        Prospect professionnel ou Entrepreneur individuel
   * @returns
   */
  public getScoringProspect(
    codeEtablissement: string,
    identifiantPersonne: number,
    categorieProspect?: string
  ): Observable<RessourceTierscorporateservicV1ScoringProspect.ScoringProspect> {
    return this.requestHttpAgentService.sendRequest<RessourceTierscorporateservicV1ScoringProspect.ScoringProspect>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/tierscorporateservic-v1/scoringProspect/`,
      params: {
        codeEtablissement: `${codeEtablissement}`,
        identifiantPersonne: `${identifiantPersonne}`,
        categorieProspect: `${categorieProspect}`
      },
      timeout: 60000
    });
  }
}
