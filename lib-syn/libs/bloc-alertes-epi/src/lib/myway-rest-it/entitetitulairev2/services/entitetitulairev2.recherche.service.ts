import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {Observable} from 'rxjs';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {RessourceEntitetitulaireV2Recherche} from '../models/entitetitulairev2.recherche.models';

@Injectable({
  providedIn: 'root'
})
export class EntitetitulaireV2RechercheService {
  constructor(
    //private myWayHttpClient: MywayHttpClient,
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * Restitue les information entité titulaire pour des critères et un mode de recherche donnés.
   * @param codeEtablissement Identifiant d'un Etablissement de BPCE.
   * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
   * @param identifiantTiers Numéro d'identification de la personne dans le SI d'un Etablissement.
   * Référence interne MYSYS.
   * Personne référencée comme client, tiers ou prospect.
   * @param typeRechercheEntiteTitulaire Permet de préciser le type de recherche à effectuer.
   * Valeurs :
   * - 1   Recherche par identifiant Tiers (n° personne)
   * @returns
   */

  public getRecherche(
    codeEtablissement: string,
    identifiantTiers: number,
    typeRechercheEntiteTitulaire: string
  ): Observable<RessourceEntitetitulaireV2Recherche.RechercheEntiteTitulaire> {
    return this.requestHttpAgentService.sendRequest<RessourceEntitetitulaireV2Recherche.RechercheEntiteTitulaire>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/entitetitulaire-v2/recherche/`,
      params: {
        codeEtablissement: codeEtablissement,
        identifiantTiers: identifiantTiers,
        typeRechercheEntiteTitulaire: typeRechercheEntiteTitulaire
      },
      mywayHeaders: true
    });
  }

  /**
   * @param listePersonneRecherche
   * @returns Renvoie la liste des entités titulaires répondant aux critères fournis en entrée.
   */
  public postRecherche(
    listePersonneRecherche: RessourceEntitetitulaireV2Recherche.ListePersonneRecherche
  ): Observable<RessourceEntitetitulaireV2Recherche.RechercheEntiteTitulaire> {
    return this.requestHttpAgentService.sendRequest<RessourceEntitetitulaireV2Recherche.RechercheEntiteTitulaire>({
      method: MethodEnum.POST,
      url: `${this.env.urlRest}/entitetitulaire-v2/recherche/`,
      body: listePersonneRecherche,
      params: {},
      mywayHeaders: true
    });
  }
}
