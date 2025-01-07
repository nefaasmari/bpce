import {HttpErrorResponse} from '@angular/common/http';
import {Action, StateContext} from '@ngxs/store';
import {catchError, map} from 'rxjs/operators';

import {Injectable} from '@angular/core';
import {OCSelector, OCState} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {forkJoin, of} from 'rxjs';
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
  CONFIG_LANCEMENT_VARIO_ID
} from '../models/constantes/processus.constantes';
import {BusinessModelsAlertesIndicateurs as model} from '../models/models/alertes-indicateurs.model';
import {BusinessModelsUtilsUi} from '../models/models/ui-utils.model';
import {
  LoadAlertes,
  PatchDataAlertes,
  PatchDataAlertesPointAcces,
  PatchErrorAlertes,
  ReLoadAlertes,
  SetLoadingAlertes
} from './alertes.actions';
export interface IAlertesState {
  data: model.IAlertes;
  dataPointAcces: BusinessModelsUtilsUi.IDataPointAccesState[];
  loading: boolean;
  isError: boolean;
  error: HttpErrorResponse;
}

@OCState<IAlertesState>({
  name: 'alertes',
  defaults: {
    data: undefined,
    dataPointAcces: undefined,
    loading: false,
    isError: false,
    error: undefined
  }
})
@Injectable({
  providedIn: 'root'
})
export class DonneesAlertesState {
  constructor(
    private risqueAlerteBusinessService: RisquesAlertesBusinessService,
    private ihmBusinessService: IhmBusinessService
  ) {}

  @OCSelector('DonneesAlertesState.getContent')
  static getContent(state: IAlertesState): model.IAlertes {
    return state.data;
  }

  @OCSelector('DonneesAlertesState.getOffresInstanceContent')
  static getOffresInstanceContent(state: IAlertesState): model.IOffreEnInstance[] {
    return state.data?.dataOffreEnInstance;
  }

  @OCSelector('DonneesAlertesState.getContentRPM')
  static getContentRPM(state: IAlertesState): model.IDataRPM[] {
    return state.data.dataRPM;
  }

  @OCSelector('DonneesAlertesState.getContentPointAcces')
  static getContentPointAcces(state: IAlertesState): BusinessModelsUtilsUi.IDataPointAccesState[] {
    return state.dataPointAcces;
  }

  @OCSelector('DonneesAlertesState.getError')
  static getError(state: IAlertesState): HttpErrorResponse {
    return state.error;
  }

  @OCSelector('DonneesAlertesState.isLoading')
  static isLoading(state: IAlertesState): boolean {
    return state.loading;
  }

  @Action(SetLoadingAlertes)
  setLoading(ctx: StateContext<IAlertesState>, action: SetLoadingAlertes) {
    ctx.patchState({
      loading: true
    });
  }

  @Action(PatchDataAlertes)
  patchData(ctx: StateContext<IAlertesState>, action: PatchDataAlertes) {
    ctx.patchState({
      data: action.data,
      loading: false,
      isError: false,
      error: undefined
    });
  }

  @Action(PatchDataAlertesPointAcces)
  patchDataPointAcces(ctx: StateContext<IAlertesState>, action: PatchDataAlertesPointAcces) {
    ctx.patchState({
      dataPointAcces: action.data,
      loading: false,
      isError: false,
      error: undefined
    });
  }

  @Action(PatchErrorAlertes)
  patchError(ctx: StateContext<IAlertesState>, action: PatchErrorAlertes) {
    ctx.patchState({
      data: undefined,
      loading: false,
      isError: true,
      error: action.data
    });
  }

  @Action(LoadAlertes)
  getContent(ctx: StateContext<IAlertesState>, action: LoadAlertes) {
    if (!ctx.getState().data && !ctx.getState().loading) {
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
        CONFIG_LANCEMENT_VARIO_ID
      ];
      return forkJoin([
        this.risqueAlerteBusinessService.getAlertes(
          action.codeEtablissement,
          action.identifiantPersonne,
          action.estPersonnePhysique
        ),
        this.ihmBusinessService.getDataPointsEntreeState(lstPointsEntree, action.identifiantPersonne)
      ]).pipe(
        map(([datas, lstPointsEntreeResult]) => {
          ctx.patchState({
            data: datas as model.IAlertes,
            dataPointAcces: lstPointsEntreeResult,
            loading: false,
            isError: false,
            error: undefined
          });
        }),
        catchError((err: HttpErrorResponse) => {
          console.error('LoadAlertes ERROR ==> ', err);
          ctx.patchState({
            loading: false,
            isError: true,
            error: err
          });
          return of(err);
        })
      );
    }
  }

  @Action(ReLoadAlertes)
  reloadContent(ctx: StateContext<IAlertesState>, action: ReLoadAlertes) {
    if (!ctx.getState().loading) {
      ctx.patchState({
        data: null,
        loading: true,
        isError: false,
        error: null
      });
      return this.risqueAlerteBusinessService
        .getAlertes(
          action.codeEtablissement,
          action.identifiantPersonne,
          action.estPersonnePhysique ? action.estPersonnePhysique : false
        )
        .pipe(
          map((data) => {
            ctx.patchState({
              data: data,
              loading: false,
              isError: false,
              error: undefined
            });
          }),
          catchError((err: HttpErrorResponse) => {
            ctx.patchState({
              loading: false,
              isError: true,
              error: err
            });
            return of(err);
          })
        );
    }
  }
}
