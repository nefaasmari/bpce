import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceReclamationV1CompteurClient} from '../models/reclamationv1.compteurClient.models';

/**
 * Cette ressource permet de récupérer le nombre de réclamation pour un client dans le progiciel salesforce. Elle accède en amont à ola SU1V pour savoir si les données sont basculé dans salesforce ou non.
 */
@Injectable({
  providedIn: 'root'
})
export class ReclamationV1CompteurClientService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * @param codeEtablissement Code de l'établissement du client
   * @param identifiantClient Identifiant du client dont on veut les réclamations
   * @returns OK
   */
  public getCompteurClient(
    codeEtablissement: string,
    identifiantClient: number
  ): Observable<RessourceReclamationV1CompteurClient.CompteurClient> {
    return this.requestHttpAgentService.sendRequest<RessourceReclamationV1CompteurClient.CompteurClient>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/reclamation/v1/compteurClient/`,
      params: {
        codeEtablissement: `${codeEtablissement}`,
        identifiantClient: `${identifiantClient}`,
        codeAppelant: `SYNTHPRO`
      },
      mywayHeaders: true
    });
  }
}
