import {Action, StateContext} from '@ngxs/store';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {OCState, OCSelector} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Injectable} from '@angular/core';
import {BusinessModelsAlertesIndicateurs as model} from '../models/models/alertes-indicateurs.model';
import {RisquesAlertesBusinessService} from '../business/risques-alertes/risques-alertes-business.service';
import {
  LoadIndicateurs,
  ReLoadIndicateurs,
  SetLoadingIndicateurs,
  PatchDataIndicateurs,
  PatchErrorIndicateurs
} from './indicateurs.actions';

export interface IIndicateursState {
  data: model.IIndicateurAlerteClient[];
  dataPNB: model.IDataPNB;
  dataTarification: model.IDataTarification;
  dataGCEDOC: model.IIndicateurGCEDOC;
  dataBadLoans: model.IDataBadLoans[];
  dataTopLF: model.IDataTopLF;
  isClientActif: boolean;
  messages: model.IMessage[];
  loading: boolean;
  isError: boolean;
  error: HttpErrorResponse;
}

@OCState<IIndicateursState>({
  name: 'indicateurs',
  defaults: {
    data: null,
    dataPNB: null,
    dataTarification: null,
    dataGCEDOC: null,
    dataBadLoans: null,
    dataTopLF: null,
    isClientActif: null,
    messages: null,
    loading: false,
    isError: false,
    error: undefined
  }
})
@Injectable({
  providedIn: 'root'
})
export class DonneesIndicateursState {
  constructor(private risqueAlerteBusinessService: RisquesAlertesBusinessService) {}

  @OCSelector('DonneesIndicateursState.getContent')
  static getContent(state: IIndicateursState): model.IIndicateurAlerteClient[] {
    return state.data;
  }

  @OCSelector('DonneesIndicateursState.getMessages')
  static getMessages(state: IIndicateursState): model.IMessage[] {
    return state.messages;
  }

  @OCSelector('DonneesIndicateursState.getContentBadLoans')
  static getContentBadLoans(state: IIndicateursState): model.IDataBadLoans[] {
    return state.dataBadLoans;
  }

  @OCSelector('DonneesIndicateursState.getContentTopLF')
  static getContentTopLF(state: IIndicateursState): model.IDataTopLF {
    return state.dataTopLF;
  }

  @OCSelector('DonneesIndicateursState.getContentPNB')
  static getContentPNB(state: IIndicateursState): model.IDataPNB {
    return state.dataPNB;
  }

  @OCSelector('DonneesIndicateursState.getContentTarification')
  static getContentTarification(state: IIndicateursState): model.IDataTarification {
    return state.dataTarification;
  }
  @OCSelector('DonneesIndicateursState.getContentGCEDOC')
  static getContentGCEDOC(state: IIndicateursState): model.IIndicateurGCEDOC {
    return state.dataGCEDOC;
  }
  @OCSelector('DonneesIndicateursState.isClientActif')
  static isClientActif(state: IIndicateursState): boolean {
    return state.isClientActif;
  }
  @OCSelector('DonneesIndicateursState.getError')
  static getError(state: IIndicateursState): HttpErrorResponse {
    return state.error;
  }

  @OCSelector('DonneesIndicateursState.isLoading')
  static isLoading(state: IIndicateursState): boolean {
    return state.loading;
  }

  @Action(SetLoadingIndicateurs)
  setLoading(ctx: StateContext<IIndicateursState>, action: SetLoadingIndicateurs) {
    ctx.patchState({
      loading: true
    });
  }

  @Action(PatchDataIndicateurs)
  patchData(ctx: StateContext<IIndicateursState>, action: PatchDataIndicateurs) {
    ctx.patchState({
      data: action.data.indicateurAlerteClient,
      dataPNB: action.data.dataPNB,
      dataTarification: action.data.dataTarification,
      dataGCEDOC: action.data.dataGCEDOC,
      dataBadLoans: action.data.dataBadLoans,
      dataTopLF: action.data.dataTopLF,
      isClientActif: action.data.estTopActif,
      messages: action.data.messages,
      loading: false,
      isError: false,
      error: undefined
    });
  }

  @Action(PatchErrorIndicateurs)
  patchError(ctx: StateContext<IIndicateursState>, action: PatchErrorIndicateurs) {
    ctx.patchState({
      data: undefined,
      dataGCEDOC: undefined,
      loading: false,
      isError: true,
      error: action.data
    });
  }

  @Action(LoadIndicateurs)
  getContent(ctx: StateContext<IIndicateursState>, action: LoadIndicateurs) {
    if (!ctx.getState().data && !ctx.getState().loading) {
      console.time('IndicateursStateExecution');
      ctx.patchState({
        loading: true
      });
      return this.risqueAlerteBusinessService.getIndicateurs(action.ctx).pipe(
        map((datas) => {
          ctx.patchState({
            data: datas.indicateurAlerteClient,
            dataPNB: datas.dataPNB,
            dataTarification: datas.dataTarification,
            dataGCEDOC: datas.dataGCEDOC,
            messages: datas.messages,
            isClientActif: datas.estTopActif,
            loading: false,
            isError: false,
            error: undefined
          });
          console.timeEnd('IndicateursStateExecution');
        }),
        catchError((err: HttpErrorResponse) => {
          console.error('LoadIndicateurs ERROR ==> ', err);
          console.timeEnd('IndicateursStateExecution');
          ctx.patchState({
            loading: false,
            isError: true,
            error: err
          });
          return of(err);
        })
      );
    } else {
      return ctx.getState();
    }
  }

  @Action(ReLoadIndicateurs)
  reloadContent(ctx: StateContext<IIndicateursState>, action: ReLoadIndicateurs) {
    if (!ctx.getState().loading) {
      ctx.patchState({
        data: null,
        loading: true,
        isError: false,
        error: null
      });
      return this.risqueAlerteBusinessService.getIndicateurs(action.ctx).pipe(
        map((datas) => {
          ctx.patchState({
            data: datas.indicateurAlerteClient,
            dataPNB: datas.dataPNB,
            dataTarification: datas.dataTarification,
            dataGCEDOC: datas.dataGCEDOC,
            messages: datas.messages,
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
