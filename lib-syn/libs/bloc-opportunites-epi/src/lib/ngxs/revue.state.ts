import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {OCSelector} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {forkJoin, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {State, Action, StateContext} from '@ngxs/store';
import {IAppetencesClient, IRevueEnrichie} from '../models/models/revue.model';
import {RevueBusinessService} from '../business/revue/revue-business.service';
import {RevueActions} from './revue.actions';

export interface IRevueState {
  dataAppetences: IAppetencesClient[];
  dataRevueEnrichie: IRevueEnrichie[];
  isLoading: boolean;
  isError: boolean;
  error: HttpErrorResponse;
}

@State<IRevueState>({
  name: 'revue',
  defaults: {
    dataAppetences: undefined,
    dataRevueEnrichie: undefined,
    isLoading: false,
    isError: false,
    error: undefined
  }
})
@Injectable({
  providedIn: 'root'
})
export class DonneesRevueState {
  constructor(private revueBusinessService: RevueBusinessService) {}

  @OCSelector('RevueState.getContentAppetences')
  static getContentAppetences(state: IRevueState): IAppetencesClient[] {
    return state.dataAppetences;
  }

  @OCSelector('RevueState.getContentRevueEnrichie')
  static getContentRevueProduitClient(state: IRevueState): IRevueEnrichie[] {
    return state.dataRevueEnrichie;
  }

  @OCSelector('RevueState.getError')
  static getError(state: IRevueState): HttpErrorResponse {
    return state.error;
  }

  @OCSelector('RevueState.isLoading')
  static isLoading(state: IRevueState): boolean {
    return state.isLoading;
  }

  @Action(RevueActions.LoadRevue)
  getContent(ctx: StateContext<IRevueState>, action: RevueActions.LoadRevue) {
    if (!ctx.getState().dataAppetences && !ctx.getState().isLoading) {
      ctx.patchState({
        isLoading: true
      });
      return forkJoin([
        this.revueBusinessService.getDetailRevue(action.codeEtablissement, action.identifiantPersonne)
      ]).pipe(
        map(([data]) => {
          ctx.patchState({
            dataAppetences: data.appetencesClient,
            dataRevueEnrichie: data.revueEnrichie,
            isLoading: false,
            isError: false
          });
        }),
        catchError((err: HttpErrorResponse) => {
          console.error('LoadRevue ERROR ==> ', err);
          ctx.patchState({
            isLoading: false,
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

  @Action(RevueActions.ViderRevue)
  viderContent(ctx: StateContext<IRevueState>, action: RevueActions.ViderRevue) {
    ctx.patchState({
      dataAppetences: undefined,
      dataRevueEnrichie: undefined,
      isLoading: false,
      isError: false,
      error: undefined
    });
  }

  @Action(RevueActions.ReloadRevue)
  reloadContent(ctx: StateContext<IRevueState>, action: RevueActions.ReloadRevue) {
    ctx.patchState({
      dataAppetences: null,
      dataRevueEnrichie: null,
      isLoading: true,
      isError: false,
      error: null
    });
    return forkJoin([
      this.revueBusinessService.getDetailRevue(action.codeEtablissement, action.identifiantPersonne)
    ]).pipe(
      map(([data]) => {
        ctx.patchState({
          dataAppetences: data.appetencesClient,
          dataRevueEnrichie: data.revueEnrichie,
          isLoading: false,
          isError: false
        });
      }),
      catchError((err: HttpErrorResponse) => {
        console.error('Reload RevueActions ERROR ==> ', err);
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
}
