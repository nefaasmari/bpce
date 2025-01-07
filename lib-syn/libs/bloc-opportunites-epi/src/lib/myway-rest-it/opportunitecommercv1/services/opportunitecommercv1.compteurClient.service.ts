import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceOpportunitecommercV1CompteurClient} from '../models/opportunitecommercv1.compteurClient.models';

/**
 * Cette ressource fourni le nombre d'opportunites du client
 */
@Injectable({
  providedIn: 'root'
})
export class OpportunitecommercV1CompteurClientService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * @param codeEtablissement Code de l'établissement du client
   * @param identifiantClient Identifiant du client
   * @param typeOpportunite Type d'opportunité recherchée
   * @param codeAppelant Code permettant d'identifier l'appelant. Code au choix de l'appelant. Mettre un code parlant :
   * Exemple : pour un appel depuis la synthèse PP -> SYNTHPP
   * @returns Réponse OK
   */
  public getCompteurClient(
    codeEtablissement: string,
    identifiantClient: number,
    typeOpportunite: string,
    codeAppelant: string,
    typeRelation: string,
    statut: string
  ): Observable<RessourceOpportunitecommercV1CompteurClient.CompteurClient> {
    return this.requestHttpAgentService.sendRequest<RessourceOpportunitecommercV1CompteurClient.CompteurClient>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/opportunitecommerc-v1/compteurClient/`,
      params: {
        codeEtablissement: `${codeEtablissement}`,
        identifiantClient: `${identifiantClient}`,
        typeOpportunite: `${typeOpportunite}`,
        codeAppelant: `${codeAppelant}`,
        typeRelation: `${typeRelation}`,
        statut: `${statut}`
      },
      mywayHeaders: true
    });
  }

  /**
   * @param codeEtablissement code établissement
   * @param numeroClient numéro du client
   * @returns OK
   */
  public getDescriptionClient(
    codeEtablissement: string,
    numeroClient: number
  ): Observable<RessourceOpportunitecommercV1CompteurClient.InformationClientOpportunitePrincipale> {
    return this.requestHttpAgentService.sendRequest<RessourceOpportunitecommercV1CompteurClient.InformationClientOpportunitePrincipale>(
      {
        method: MethodEnum.GET,
        url: `${this.env.urlRest}/opportunitecommerc-v1/descriptionClient`,
        params: {
          codeEtablissement: `${codeEtablissement}`,
          numeroClient: `${numeroClient}`
        }
      }
    );
  }
}
