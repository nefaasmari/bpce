import { TestBed, waitForAsync } from '@angular/core/testing';

import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { RevueActions } from './revue.actions';
import { DonneesRevueState } from './revue.state';
import { RevueBusinessService } from '../business/revue/revue-business.service';
import { IRevue } from '../models/models/revue.model';

describe('Revue state', () => {
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [NgxsModule.forRoot([DonneesRevueState])],
      providers: [{ provide: RevueBusinessService, useValue: revueBusinessServiceFake }]
    });
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeDefined();
  });

  it('Test actions LoadRevue', async () => {
    store.dispatch(new RevueActions.LoadRevue('1', '2'));
    expect(DonneesRevueState.getContentAppetences(store.selectSnapshot(DonneesRevueState))).toBe(mockRevue.appetencesClient);
    expect(DonneesRevueState.getContentRevueProduitClient(store.selectSnapshot(DonneesRevueState))).toBe(mockRevue.revueEnrichie);
    expect(DonneesRevueState.getError(store.selectSnapshot(DonneesRevueState))).toBeUndefined();
    expect(DonneesRevueState.isLoading(store.selectSnapshot(DonneesRevueState))).toBeFalsy();
    store.dispatch(new RevueActions.LoadRevue('1', '2'));
    expect(revueBusinessServiceFake.getDetailRevue).toHaveBeenCalledTimes(1);
  });

  it('Test actions ViderRevue', async () => {
    store.dispatch(new RevueActions.ViderRevue());
    expect(DonneesRevueState.getContentAppetences(store.selectSnapshot(DonneesRevueState))).toBeUndefined();
    expect(DonneesRevueState.getContentRevueProduitClient(store.selectSnapshot(DonneesRevueState))).toBeUndefined();
  });

  it('Test actions ReloadRevue', async () => {
    store.dispatch(new RevueActions.ReloadRevue('3', '4'));
    expect(DonneesRevueState.getContentAppetences(store.selectSnapshot(DonneesRevueState))).toBe(mockRevue.appetencesClient);
    expect(DonneesRevueState.getContentRevueProduitClient(store.selectSnapshot(DonneesRevueState))).toBe(mockRevue.revueEnrichie);
  });

  const mockRevue: IRevue = {
    revueProduitClient: [],
    appetencesClient: [],
    revueEnrichie: []
  };
  const revueBusinessServiceFake = {
    getDetailRevue: jest.fn(() => of(mockRevue))
  };
});
