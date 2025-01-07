import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourcePropositioncorporateV1Affaire} from '../models/propositioncorporatev1.affaire.models';

/**
 * Cette ressource permet de :
 * - Consulter une liste des affaires qui ont déjà été soumises au client/relation eco (P176C100) ou afficher les produits "A proposer" (P176B300) et les affaire "en cours" (P176C300) pour ce client/relation eco lors de la saisie d'un CRE.
 * - Créer et mettre à jour des affaires (P176C200, P176C500)
 */
@Injectable({
  providedIn: 'root'
})
export class PropositioncorporateV1AffaireService {
  constructor(
    @Inject(ENVIRONMENT) private env: Environment,
    private requestHttpAgentService: HttpAgentService
  ) {}

  /**
   * Méthode de restitution de la liste des affaires.
   * @param codeEtablissement Code Banque sous lequel l'établissement est répertorié par la Banque de France.
   * @param identifiantPersonne Numéro d'identification de la personne morale ou EI.
   * @param identifiantRelationEco Numéro d'identification de la relation économique.
   * @param identifiantCre identifiant CRE.
   * @param dateCreationCre Date de création du CRE.
   * @param affaireEnCours
   * @returns Restitution de la liste des affaires.
   */
  public getAffaire(
    codeEtablissement: string,
    identifiantPersonne?: number,
    identifiantRelationEco?: number,
    identifiantCre?: number,
    dateCreationCre?: string,
    affaireEnCours?: boolean
  ): Observable<RessourcePropositioncorporateV1Affaire.Affaire> {
    return this.requestHttpAgentService.sendRequest<RessourcePropositioncorporateV1Affaire.Affaire>({
      method: MethodEnum.GET,
      url: `${this.env.urlRest}/propositioncorporate/v1/affaire/`,
      params: {
        codeEtablissement: `${codeEtablissement}`,
        identifiantPersonne: `${identifiantPersonne}`,
        /* identifiantRelationEco: `${identifiantRelationEco}`,
         identifiantCre: `${identifiantCre}`,
         dateCreationCre: `${dateCreationCre}`, */
        affaireEnCours: `${affaireEnCours}`
      }
    });
  }
}
