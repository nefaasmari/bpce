import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceDemandemulticanalsrvV1RestitutionCompteur} from '../models/demandemulticanalsrvv1.restitutionCompteur.models';

/**
 * Restitution des compteurs MyFlow des tâches en cours (à terme ce périmètre évoluera et pourra traiter d'autres typologies de compteurs)
 * Les compteurs restitués sont :
 * - Vision managériale : retourne les compteurs de tâches en cours (quotidien et stock) du point de vente ou de l'agence correspondant à l'EDS spécifié (entrée : identifiantEDS)
 * - Vision individuelle : retourne les compteurs de tâches en cours (quotidien et stock) de l'agent correspondant au poste fonctionnel spécifié (entrée : identifiantPosteFonctionnel)
 */
@Injectable({
  providedIn: 'root'
})
export class DemandemulticanalsrvV1RestitutionCompteurService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * Compteur de l'ensemble des demandes sur lesquelles l'agent a le droit d'agir pour ce client.
   * @param idClient Identifiant du client
   * @param idPosteFonctionnel Identifiant du poste fonctionnel
   * @param codeEtablissement Le code établissement de la caisse
   * @param codeAgent Identifiant de l'agent
   * @returns Retourne le compteur de l'ensemble des demandes sur lesquelles l'agent a le droit d'agir pour ce client.
   */
  public getCompteurSyntheseClient(
    idClient: string,
    idPosteFonctionnel: string,
    codeEtablissement: string,
    codeAgent: string
  ): Observable<RessourceDemandemulticanalsrvV1RestitutionCompteur.DemandesCompteur> {
    return this.requestHttpAgentService.sendRequest<RessourceDemandemulticanalsrvV1RestitutionCompteur.DemandesCompteur>(
      {
        method: MethodEnum.GET,
        url: `${this.env.urlRest}/demandemulticanalsrv-v1/restitutionCompteur/compteurSyntheseClient`,
        params: {
          codeEtablissement: `${codeEtablissement}`,
          idClient: `${idClient}`,
          idPosteFonctionnel: `${idPosteFonctionnel}`,
          codeAgent: `${codeAgent}`
        },
        mywayHeaders: true
      }
    );
  }
}
