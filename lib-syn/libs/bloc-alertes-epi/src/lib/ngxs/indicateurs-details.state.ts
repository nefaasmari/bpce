import {State, Action, StateContext, Selector} from '@ngxs/store';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {OCState, OCSelector} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Injectable} from '@angular/core';
import {BusinessModelsAlertesIndicateurs as model} from '../models/models/alertes-indicateurs.model';
import {IndicateursBusinessService} from '../business/indicateurs/indicateurs-business.service';
import {LoadIndicateursDetail} from './indicateurs-details.actions';

export interface IIndicateursDetailState {
  data: model.ITabSatisfactionClient;
  loading: boolean;
  isError: boolean;
  error: HttpErrorResponse;
}

@OCState<IIndicateursDetailState>({
  name: 'indicateursDetail',
  defaults: {
    data: null,
    loading: false,
    isError: false,
    error: undefined
  }
})
@Injectable({
  providedIn: 'root'
})
export class DonneesIndicateursDetailState {
  constructor(private indicateursBusinessService: IndicateursBusinessService) {}

  @OCSelector('DonneesIndicateursDetailState.getContent')
  static getContent(state: IIndicateursDetailState): model.ITabSatisfactionClient {
    return state.data;
  }

  @OCSelector('DonneesIndicateursDetailState.getError')
  static getError(state: IIndicateursDetailState): HttpErrorResponse {
    return state.error;
  }

  @OCSelector('DonneesIndicateursDetailState.isLoading')
  static isLoading(state: IIndicateursDetailState): boolean {
    return state.loading;
  }

  @Action(LoadIndicateursDetail)
  getContent(ctx: StateContext<IIndicateursDetailState>, action: LoadIndicateursDetail) {
    if (!ctx.getState().data && !ctx.getState().loading) {
      ctx.patchState({
        loading: true
      });
      return this.indicateursBusinessService
        .getDetailIndicateurs(action.codeEtablissement, action.identifiantPersonne)
        .pipe(
          map((datas) => {
            ctx.patchState({
              data: datas,
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
    } else {
      return ctx.getState();
    }
  }
}
