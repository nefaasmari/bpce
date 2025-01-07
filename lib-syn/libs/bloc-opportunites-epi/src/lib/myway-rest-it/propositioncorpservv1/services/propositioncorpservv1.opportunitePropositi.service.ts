import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourcePropositioncorpservV1OpportunitePropositi} from '../models/propositioncorpservv1.opportunitePropositi.models';

/**
 * Cette Objet métier permet de remonter les indicateurs suivants dans la synthèse V2 :
 * - Nombre affaires BDR du ou des client(s).
 * - Nombre sous-familles de produits du ou des client(s).
 * - Nb propositions commerciales présentées aux clients BDR.
 * - Nb propositions commerciales présentées aux clients BDR ayant une échéance à 7 jours.
 * - Nombre Score d'appétence du ou des client(s).
 */
@Injectable({
  providedIn: 'root'
})
export class PropositioncorpservV1OpportunitePropositiService {
  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private requestHttpAgentService: HttpAgentService
  ) {}

  /**
   * Cette méthode permet la restitution des indicateurs Opportuniés / Propositions : Alimenter la liste des critères pour restituer la liste des cumuls
   * @param opportuniteProposition
   * @returns Indicateurs de cumuls pour Opportunité/Propositions
   */
  public postOpportuniteProposition(
    opportuniteProposition: RessourcePropositioncorpservV1OpportunitePropositi.OpportuniteProposition
  ): Observable<RessourcePropositioncorpservV1OpportunitePropositi.OpportuniteProposition> {
    return this.requestHttpAgentService.sendRequest<RessourcePropositioncorpservV1OpportunitePropositi.OpportuniteProposition>(
      {
        method: MethodEnum.POST,
        url: `${this.env.urlRest}/propositioncorpserv/v1/opportunitePropositi/`,
        body: opportuniteProposition,
        params: {}
      }
    );
  }
}
