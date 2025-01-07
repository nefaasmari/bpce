import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Action, StateContext, Store} from '@ngxs/store';
import {OCState} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {forkJoin, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {IhmBusinessService} from '../business/ihm/ihm-business.service';
import {RisquesAlertesBusinessService} from '../business/risques-alertes/risques-alertes-business.service';
import {
  CONFIG_LANCEMENT_ACTE_SAISIE_ID,
  CONFIG_LANCEMENT_BALE2_ID,
  CONFIG_LANCEMENT_CLASSEUR_CLIENT_ID,
  CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
  CONFIG_LANCEMENT_CONS_HIST_EVNM_RPM_ID,
  CONFIG_LANCEMENT_CONTROL_DOCUMENT,
  CONFIG_LANCEMENT_DSC_ID,
  CONFIG_LANCEMENT_ECKERT_ID,
  CONFIG_LANCEMENT_GAE_ID,
  CONFIG_LANCEMENT_MAD_ID,
  CONFIG_LANCEMENT_MYOPPO_ID,
  CONFIG_LANCEMENT_PARCOURS_CLIENT_ID,
  CONFIG_LANCEMENT_RECLAMATION_ID,
  CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID,
  CONFIG_LANCEMENT_REVISION_ANNUELLE_ID,
  CONFIG_LANCEMENT_RISQUE_CLIENT_ID,
  CONFIG_LANCEMENT_RPM_ID,
  CONFIG_LANCEMENT_TOPCC_ID,
  CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID,
  CONFIG_LANCEMENT_VARIO_ID,
  CONFIG_MYFLOW_ID,
  CONFIG_QUESTIONNAIRE_PIM_ID
} from '../models/constantes/processus.constantes';
import {BusinessModelsAlertesIndicateurs} from '../models/models/alertes-indicateurs.model';
import {PatchDataAlertes, PatchDataAlertesPointAcces, PatchErrorAlertes, SetLoadingAlertes} from './alertes.actions';
import {LoadAlertesEtIndicateurs} from './alertesEtIndicateurs.actions';
import {PatchDataIndicateurs, PatchErrorIndicateurs, SetLoadingIndicateurs} from './indicateurs.actions';

export interface IAlertesEtIndicateursState {
  loading: boolean;
}

@OCState<IAlertesEtIndicateursState>({
  name: 'alertesEtIndicateurs',
  defaults: {
    loading: false
  }
})
@Injectable({
  providedIn: 'root'
})
export class DonneesAlertesEtIndicateursState {
  constructor(
    private risqueAlerteBusinessService: RisquesAlertesBusinessService,
    private store: Store,
    private ihmBusinessService: IhmBusinessService
  ) {}

  @Action(LoadAlertesEtIndicateurs)
  getContent(ctx: StateContext<IAlertesEtIndicateursState>, action: LoadAlertesEtIndicateurs) {
    if (!ctx.getState().loading) {
      ctx.patchState({
        loading: true
      });
      const lstPointsEntree = [
        CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
        CONFIG_LANCEMENT_DSC_ID,
        CONFIG_LANCEMENT_TOPCC_ID,
        CONFIG_LANCEMENT_ACTE_SAISIE_ID,
        CONFIG_LANCEMENT_RISQUE_CLIENT_ID,
        CONFIG_LANCEMENT_RPM_ID,
        CONFIG_LANCEMENT_MAD_ID,
        CONFIG_LANCEMENT_CLASSEUR_CLIENT_ID,
        CONFIG_LANCEMENT_PARCOURS_CLIENT_ID,
        CONFIG_LANCEMENT_RECLAMATION_ID,
        CONFIG_LANCEMENT_ECKERT_ID,
        CONFIG_LANCEMENT_REVISION_ANNUELLE_ID,
        CONFIG_LANCEMENT_BALE2_ID,
        CONFIG_LANCEMENT_GAE_ID,
        CONFIG_LANCEMENT_MYOPPO_ID,
        CONFIG_LANCEMENT_CONTROL_DOCUMENT,
        CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID,
        CONFIG_LANCEMENT_CONS_HIST_EVNM_RPM_ID,
        CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID,
        CONFIG_QUESTIONNAIRE_PIM_ID,
        CONFIG_MYFLOW_ID,
        CONFIG_LANCEMENT_VARIO_ID
      ];
      this.store.dispatch(new SetLoadingIndicateurs());
      this.store.dispatch(new SetLoadingAlertes());
      return forkJoin([
        this.risqueAlerteBusinessService.getAlertesEtIndicateurs(action.ctx),
        this.ihmBusinessService.getDataPointsEntreeState(lstPointsEntree, action.ctx.identifiantPersonne)
      ]).pipe(
        map(([datas, lstPointsEntreeRep]) => {
          const datasAlerteEtIndicateurs = datas as BusinessModelsAlertesIndicateurs.IIndicateursEtAlertes;
          this.store.dispatch(new PatchDataAlertes(datasAlerteEtIndicateurs.dataAlertes));
          this.store.dispatch(new PatchDataIndicateurs(datasAlerteEtIndicateurs.dataIndicateurs));
          this.store.dispatch(new PatchDataAlertesPointAcces(lstPointsEntreeRep));
          ctx.patchState({
            loading: false
          });
        }),
        catchError((err: HttpErrorResponse) => {
          console.error('LoadAlertesEtIndicateurs ERROR ==> ', err);
          this.store.dispatch(new PatchErrorAlertes(err));
          this.store.dispatch(new PatchErrorIndicateurs(err));
          ctx.patchState({
            loading: false
          });
          return of(err);
        })
      );
    } else {
      return ctx.getState();
    }
  }
}
