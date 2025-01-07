/* eslint-disable max-len */
import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceSynthesecorporateV1InfosRisqueAlerte} from '../models/synthesecorporatev1.infosRisqueAlerte.models';

/**
 * Cette ressource permet de restituer les informations concernant les risques et alertes d'un client.
 */
@Injectable({
  providedIn: 'root'
})
export class SynthesecorporateV1InfosRisqueAlerteService {
  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private requestHttpAgentService: HttpAgentService
  ) {}

  /**
   * Cette opération permet de restituer les informations concernant les risques et  alertes d'un client.
   * @param codeEtablissement Identifiant d'un Etablissement correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
   * @param identifiantPersonne Numéro d'identification dans le SI d'un Etablissement.
   * @param codeChoixCriteres Détermine l'option ou le critère choisi dans une QR ou un sous-programme. Permet de définir notamment dans la question ou zone de communication : - un critère de sélection (parmi plusieurs) - une option de restitution Donnée générique : valeurs en fonction du contexte de la QR ou du sous-programme. Valeurs : ('A' '9') Valeurs spécifiques au contexte de la QR ou du S/P.
   * @returns Les informations concernant le risques et alertes du client.
   */
  public getInfosRisqueAlerte(
    codeEtablissement: string,
    identifiantPersonne: string
  ): Observable<RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte> {
    return this.requestHttpAgentService.sendRequest<RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/synthesecorporate/v1/infosRisqueAlerte/`,
      params: {
        codeEtablissement: `${codeEtablissement}`,
        identifiantPersonne: `${identifiantPersonne}`
      }
    });
  }
}
