import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceSyntheseV2InformationClient} from '../models/synthesev2.informationClient.models';

/**
 * Synthèse Particulier
 * Cette ressource permet de récupérer les données administratives d'un client.
 * Les données sont regroupées en cohérence avec les blocs de la synthèse MyWay V2 :
 * - Coordonnées (implementé)
 * - Titre/ sous-titre (implémenté)
 * - Opportunité (implémenté)
 * - Banque à Distance et Digital (implémenté)
 * - Alertes (implémenté)
 * - Indicateurs (implémenté)
 * - Entretiens (implémenté)
 * Chaque groupe de données est débrayable via les indicateurs en entrée.
 */
@Injectable({
  providedIn: 'root'
})
export class SyntheseV2InformationClientService {
  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private requestHttpAgentService: HttpAgentService
  ) {}

  /**
   * @param codeEtablissement code de l'établissement
   * @param numeroClient Numéro du client
   * @param indicateurTousBlocs Oui = restituer les données de tous les blocs, équivalent de oui pour tous les autres indicateurs
   * Non = ne pas restituer données de tous les blocs, restitution en fonction des autres indicateurs
   * @param indicateurCoordonnees Oui = restituer les coordonnées
   * Non = ne pas restituer les coordonnées
   * @param indicateurTitreSousTitre Oui = restituer les données titre/sous-titre
   * Non = ne pas restituer les données titre/sous-titre
   * @param indicateurEntretiens Oui = restituer les entretiens
   * Non = ne pas restituer les entretiens
   * @param indicateurOpportunites Oui = restituer les opportunites
   * Non = ne pas restituer les opportunites
   * @param indicateurAlerte Oui = restituer les alertes
   * Non = ne pas restituer les alertes
   * @param indicateurIndicateurs Oui = restituer les indicateurs
   * Non = ne pas restituer les indicateurs
   * @returns
   */
  public getInformationClient(
    codeEtablissement: string,
    numeroClient: number,
    indicateurTousBlocs?: boolean,
    indicateurCoordonnees?: boolean,
    indicateurTitreSousTitre?: boolean,
    indicateurEntretiens?: boolean,
    indicateurOpportunites?: boolean,
    indicateurAlerte?: boolean,
    indicateurIndicateurs?: boolean
  ): Observable<RessourceSyntheseV2InformationClient.IInformationClient> {
    return this.requestHttpAgentService.sendRequest<RessourceSyntheseV2InformationClient.IInformationClient>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/synthese/v2/informationClient/`,
      params: {
        codeEtablissement: `${codeEtablissement}`,
        numeroClient: `${numeroClient}`,
        indicateurTousBlocs: `${indicateurTousBlocs}`,
        indicateurCoordonnees: `${indicateurCoordonnees}`,
        indicateurTitreSousTitre: `${indicateurTitreSousTitre}`,
        indicateurEntretiens: `${indicateurEntretiens}`,
        indicateurOpportunites: `${indicateurOpportunites}`,
        indicateurAlerte: `${indicateurAlerte}`,
        indicateurIndicateurs: `${indicateurIndicateurs}`
      }
    });
  }
}
