import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourcePropositioncorporateV1Revue} from '../models/propositioncorporatev1.revue.models';

/**
 * Cette ressource permet de créer, consulter et modifier la revue du portefeuille BDR d'un client (personne morale ou EI).
 */
@Injectable({
  providedIn: 'root'
})
export class PropositioncorporateV1RevueService {
  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private requestHttpAgentService: HttpAgentService
  ) {}

  /**
   * @param codeEtablissement Code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France.
   * @param identifiantPersonne Numéro d'identification de la personne morale ou EI.
   * @returns Données revue du PTF d'un client.
   */
  public getRevue(
    codeEtablissement: string,
    identifiantPersonne: number
  ): Observable<RessourcePropositioncorporateV1Revue.Revue> {
    return this.requestHttpAgentService.sendRequest<RessourcePropositioncorporateV1Revue.Revue>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/propositioncorporate/v1/revue/`,
      params: {
        codeEtablissement: `${codeEtablissement}`,
        identifiantPersonne: `${identifiantPersonne}`
      }
    });
  }
}
