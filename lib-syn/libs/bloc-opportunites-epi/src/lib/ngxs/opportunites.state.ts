import {Action, StateContext, State} from '@ngxs/store';
import {OCSelector} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {HttpErrorResponse} from '@angular/common/http';
import {of, forkJoin} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {IOpportunitesAll} from '../models/models/opportunites.model';
import {BusinessModelsUtilsUi} from '../models/models/ui-utils.model';
import {IhmBusinessService} from '../business/ihm/ihm-business.service';
import {
  CONFIG_LANCEMENT_PROPOSITIONCOM_ID,
  CONFIG_LANCEMENT_DOSSIER_VENTE_ID,
  CONFIG_LANCEMENT_CR_ET_OPPORTUNITES_ID,
  CONFIG_LANCEMENT_GESTION_AFFAIRES_ID,
  CONFIG_LANCEMENT_REVUE_ID,
  CONFIG_ETUD_BESOIN_FINN_ID,
  CONFIG_SUIVI_MONEXPERT_ID,
  CONFIG_FOCUS_ID
} from '../models/constantes/processus.constantes';
import {OpportunitesBusinessService} from '../business/opportunites/opportunites-business.service';
import {OpportunitesActions} from './opportunites.actions';

export interface IOpportunitesState {
  data: IOpportunitesAll;
  dataPointAcces: BusinessModelsUtilsUi.IDataPointAccesState[];
  isLoading: boolean;
  isMonExpertLoading: boolean;
  isError: boolean;
  error: HttpErrorResponse;
}

@State<IOpportunitesState>({
  name: 'opportunites',
  defaults: {
    data: undefined,
    dataPointAcces: undefined,
    isLoading: false,
    isMonExpertLoading: false,
    isError: false,
    error: undefined
  }
})
@Injectable({
  providedIn: 'root'
})
export class DonneesOpportunitesState {
  constructor(
    private opportunitesBusinessService: OpportunitesBusinessService,
    private ihmBusinessService: IhmBusinessService
  ) {}

  @OCSelector('OpportunitesState.getContent')
  static getContent(state: IOpportunitesState): IOpportunitesAll {
    return state.data;
  }

  @OCSelector('OpportunitesState.getContentPointAcces')
  static getContentPointAcces(state: IOpportunitesState): BusinessModelsUtilsUi.IDataPointAccesState[] {
    return state.dataPointAcces;
  }

  @OCSelector('OpportunitesState.getContentMonExpert')
  static getContentMonExpert(state: IOpportunitesState): number {
    return state.data.opportunitesMonExpert;
  }

  @OCSelector('OpportunitesState.getError')
  static getError(state: IOpportunitesState): HttpErrorResponse {
    return state.error;
  }

  @OCSelector('OpportunitesState.isLoading')
  static isLoading(state: IOpportunitesState): boolean {
    return state.isLoading;
  }

  @OCSelector('OpportunitesState.isMonExpertLoading')
  static isMonExpertLoading(state: IOpportunitesState): boolean {
    return state.isMonExpertLoading;
  }

  @Action(OpportunitesActions.SetLoading)
  setLoading(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.SetLoading) {
    ctx.patchState({
      ...ctx.getState(),
      isLoading: true
    });
  }

  @Action(OpportunitesActions.SetMonExpertLoading)
  setMonExpertIsLoading(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.SetLoading) {
    ctx.patchState({
      ...ctx.getState(),
      isMonExpertLoading: true
    });
  }
  @Action(OpportunitesActions.PatchData)
  patchData(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.PatchData) {
    ctx.patchState({
      ...ctx.getState(),
      data: {...ctx.getState().data, opportunites: action.data, opportunitesCorporate: action.dataCorp},
      isLoading: false,
      isError: false,
      error: undefined
    });
  }

  @Action(OpportunitesActions.PatchMonExpertData)
  patchMonExpertData(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.PatchMonExpertData) {
    ctx.patchState({
      ...ctx.getState(),
      data: {...ctx.getState().data, opportunitesMonExpert: action.monExpert},
      isMonExpertLoading: false
    });
  }

  @Action(OpportunitesActions.PatchDataPointAcces)
  patchDataPointAcces(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.PatchDataPointAcces) {
    ctx.patchState({
      ...ctx.getState(),
      dataPointAcces: action.data,
      isLoading: false,
      isError: false,
      error: undefined
    });
  }

  @Action(OpportunitesActions.PatchError)
  patchError(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.PatchError) {
    ctx.patchState({
      ...ctx.getState(),
      error: action.err,
      isError: true,
      isLoading: false
    });
  }

  @Action(OpportunitesActions.LoadOpportunites)
  getContent(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.LoadOpportunites) {
    if (!ctx.getState().data && !ctx.getState().isLoading) {
      ctx.patchState({
        ...ctx.getState(),
        isLoading: true
      });
      const lstPointsEntree = [
        CONFIG_LANCEMENT_PROPOSITIONCOM_ID,
        CONFIG_LANCEMENT_DOSSIER_VENTE_ID,
        CONFIG_LANCEMENT_CR_ET_OPPORTUNITES_ID,
        CONFIG_LANCEMENT_GESTION_AFFAIRES_ID,
        CONFIG_LANCEMENT_REVUE_ID,
        CONFIG_ETUD_BESOIN_FINN_ID,
        CONFIG_SUIVI_MONEXPERT_ID,
        CONFIG_FOCUS_ID
      ];
      return forkJoin([
        this.opportunitesBusinessService.getOpportunites(action.codeEtablissement, action.identifiantPersonne),
        this.opportunitesBusinessService.getOpportunitesCorporate(
          action.codeEtablissement,
          action.identifiantPersonne,
          action.identifiantAgent
        ),
        this.ihmBusinessService.getDataPointsEntreeState(lstPointsEntree, action.identifiantPersonne)
      ]).pipe(
        map(([data1, data2, lstPointsEntreeRep]) => {
          ctx.patchState({
            ...ctx.getState(),
            data: {...ctx.getState().data, opportunites: data1, opportunitesCorporate: data2},
            dataPointAcces: lstPointsEntreeRep,
            isLoading: false,
            isError: false
          });
        }),
        catchError((err: HttpErrorResponse) => {
          console.error('LoadOpportunites ERROR ==> ', err);
          ctx.patchState({
            isLoading: false,
            isError: true,
            error: err
          });
          return of(err);
        })
      );
    }
  }

  @Action(OpportunitesActions.LoadMonExpert)
  getOpportunitesMonExpert(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.LoadMonExpert) {
    if (!Number.isInteger(ctx.getState().data?.opportunitesMonExpert) && !ctx.getState().isMonExpertLoading) {
      ctx.patchState({
        ...ctx.getState(),
        isMonExpertLoading: true
      });

      return this.opportunitesBusinessService
        .getOpportunitesMonExpert(action.codeEtablissement, action.identifiantPersonne)
        .pipe(
          map((opportunitesMonExpert: number) => {
            ctx.patchState({
              ...ctx.getState(),
              data: {...ctx.getState().data, opportunitesMonExpert: opportunitesMonExpert},
              isMonExpertLoading: false,
              isError: false
            });
          }),
          catchError((err: HttpErrorResponse) => {
            console.error('LoadMonExpertExecution ERROR ==> ', err);
            ctx.patchState({
              ...ctx.getState(),
              isMonExpertLoading: false,
              isError: true
              //monExpertError: err
            });
            return of(err);
          })
        );
    }
  }

  @Action(OpportunitesActions.ReloadOpportunites)
  reloadContent(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.ReloadOpportunites) {
    ctx.patchState({
      data: null,
      isLoading: true,
      isError: false,
      error: null
    });
    return forkJoin([
      this.opportunitesBusinessService.getOpportunites(action.codeEtablissement, action.identifiantPersonne),
      this.opportunitesBusinessService.getOpportunitesCorporate(
        action.codeEtablissement,
        action.identifiantPersonne,
        action.identifiantAgent
      )
    ]).pipe(
      map(([data1, data2]) => {
        ctx.patchState({
          data: {...ctx.getState().data, opportunites: data1, opportunitesCorporate: data2},
          isLoading: false,
          isError: false,
          error: null
        });
      }),
      catchError((err: HttpErrorResponse) => {
        ctx.patchState({
          ...ctx.getState(),
          isLoading: false,
          isError: true,
          error: err
        });
        return of(err);
      })
    );
  }

  @Action(OpportunitesActions.ReloadMonExpert)
  reloadMonExpert(ctx: StateContext<IOpportunitesState>, action: OpportunitesActions.ReloadOpportunites) {
    ctx.patchState({
      ...ctx.getState(),
      isMonExpertLoading: true
    });
    return this.opportunitesBusinessService
      .getOpportunitesMonExpert(action.codeEtablissement, action.identifiantPersonne)
      .pipe(
        map((dataMonExpert) => {
          ctx.patchState({
            ...ctx.getState(),
            data: {...ctx.getState().data, opportunitesMonExpert: dataMonExpert},
            isMonExpertLoading: false
          });
        }),
        catchError((err: HttpErrorResponse) => {
          ctx.patchState({
            ...ctx.getState(),
            isMonExpertLoading: false
          });
          return of(err);
        })
      );
  }
}
