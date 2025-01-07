import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {formatDate} from '@angular/common';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';
import {DATAINCONNUE} from '../../models/constantes/ihm.constantes';
import {RessourceSyntheseV2InformationClient} from '../../myway-rest-it/synthesev2/models/synthesev2.informationClient.models';
import {SyntheseV2InformationClientService} from '../../myway-rest-it/synthesev2/services/synthesev2.informationClient.service';

@Injectable({
  providedIn: 'root'
})
export class IndicateursBusinessService {
  constructor(
    private readonly _infoClientRest: SyntheseV2InformationClientService,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  getDetailIndicateurs(
    codeEtablissement: string,
    identifiantPersonne: string
  ): Observable<model.ITabSatisfactionClient> {
    return forkJoin([
      this._infoClientRest.getInformationClient(
        codeEtablissement,
        +identifiantPersonne,
        false,
        false,
        false,
        false,
        false,
        false,
        true
      )
    ]).pipe(
      map(([data]) => {
        return this.infosIndicateursRestToApp(data.indicateur);
      })
    );
  }

  /**
   * Méthode de récupération des Indicateurs
   * @param infosRisqueAlerte données rest
   * @param estPersonnePhysique permets de mettre en place les d&ébranchements quelquefois spécifiques pour un EI (personne physique)
   */
  public infosIndicateursRestToApp(
    data: RessourceSyntheseV2InformationClient.IIndicateur
  ): model.ITabSatisfactionClient {
    const reponse = {} as model.ITabSatisfactionClient;
    reponse.datas = [];
    data?.listeDetailEnqueteSatisfaction?.forEach((enquete) => {
      const enqu = {} as model.ISatisfactionClient;
      enqu.codeNiveauSatisfaction = enquete.codeNiveauSatisfaction?.trim();
      enqu.codeNoteRecommandation = enquete.codeNoteRecommandation;
      enqu.libelleNiveauSatisfaction = enquete.libelleNiveauSatisfaction;
      enqu.dateReponseEnquete = enquete.dateReponseEnquete
        ? `${formatDate(enquete.dateReponseEnquete, 'dd/MM/yyyy', this.locale)}`
        : DATAINCONNUE;
      enqu.motifEchange = enquete.motifEchange;
      if (enquete.commentaireLibre) {
        enqu.description = {} as model.IDescritionSatisfactionClient;
        enqu.description.commentaire = enquete.commentaireLibre;
      }
      reponse.datas.push(enqu);
    });
    return reponse;
  }
}
