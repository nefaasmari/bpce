import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceSynthesecorporateV1DonneeDossierPartage} from '../models/synthesecorporatev1.donneeDossierPartage.models';

/**
 * Cette ressource permet la restitution des alerts de dossiers de partage en attente de validation pour un client
 */
@Injectable({
  providedIn: 'root'
})
export class SynthesecorporateV1DonneeDossierPartageService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * Méthode de restitution des alerts de dossiers de partage en attente de validation pour un client
   * @param codeEtablissement code Etablissement
   * @param numeroPersonne Numéro client
   * @returns Alert de dossiers de partage en attente de validation pour un client
   */
  public getAlertDossierAttenteValid(
    codeEtablissement: string,
    numeroPersonne: string
  ): Observable<RessourceSynthesecorporateV1DonneeDossierPartage.DonneeDossierPartage> {
    return this.requestHttpAgentService.sendRequest<RessourceSynthesecorporateV1DonneeDossierPartage.DonneeDossierPartage>(
      {
        method: MethodEnum.GET,
        url: `${this.env.urlRest}/synthesecorporate/v1/donneeDossierPartage/`,
        params: {
          codeEtablissement: codeEtablissement,
          numeroPersonne: numeroPersonne
        },
        mywayHeaders: true
      }
    );
  }
}
