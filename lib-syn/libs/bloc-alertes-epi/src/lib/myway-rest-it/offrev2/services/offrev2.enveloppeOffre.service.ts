import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENT, Environment} from '@myway/env';
import {HttpAgentService, MethodEnum} from '@ptmyway-stc-v2/ngx-bpce/http';
import {Observable} from 'rxjs';
import {RessourceOffreV2EnveloppeOffre} from '../models/offrev2.enveloppeOffre.models';

/**
 * En POST :
 * - met en référence une offre dans le cas d'une souscription (Qr BO03).
 * En PUT :
 * - met en référence une offre dans le cas d'un avenant (Qr BO12) [codeAction="REF"].
 * - met à jour l'état d'une offre (Qr BO39) [codeAction="MAJ"].
 * - clôture une offre (Qr BO11). [NON DISPONIBLE]
 */
@Injectable({
  providedIn: 'root'
})
export class OffreV2EnveloppeOffreService {
  constructor(
    private requestHttpAgentService: HttpAgentService,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  /**
   * @param referenceExterneAgent Référence externe de l'agent.
   * @param codeEtablissement Identifiant d'un Etablissement du Réseau CE. Il correspond au code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France.
   * @param identifiantElementStructure Identifiant de l'élément de structure.
   * @param codeQualiteAgent Code qualité agent affecté au PF.
   * @param posteRattachementAgent Poste de rattachement de l'agent.
   * @param numeroOffreSouscrite Numéro offre souscrite.
   * @param typeClotureOffre Type clôture offre.
   * @returns Objet validant la clôture de l'offre.
   */
  public deleteEnveloppeOffre(
    referenceExterneAgent: number,
    codeEtablissement: string,
    identifiantElementStructure: number,
    codeQualiteAgent: string,
    posteRattachementAgent: number,
    numeroOffreSouscrite: number,
    typeClotureOffre: string
  ): Observable<RessourceOffreV2EnveloppeOffre.EnveloppeOffreClotureReponse> {
    return this.requestHttpAgentService.sendRequest<RessourceOffreV2EnveloppeOffre.EnveloppeOffreClotureReponse>({
      method: MethodEnum.DELETE,
      url: `${this.env.urlRest}/offre-v2/enveloppeOffre/`,
      params: {
        referenceExterneAgent: referenceExterneAgent,
        codeEtablissement: codeEtablissement,
        identifiantElementStructure: identifiantElementStructure,
        codeQualiteAgent: codeQualiteAgent,
        posteRattachementAgent: posteRattachementAgent,
        numeroOffreSouscrite: numeroOffreSouscrite,
        typeClotureOffre: typeClotureOffre
      }
    });
  }
}
