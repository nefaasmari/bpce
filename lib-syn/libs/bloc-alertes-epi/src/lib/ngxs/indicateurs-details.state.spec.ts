import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { DonneesIndicateursDetailState } from './indicateurs-details.state';
import { LoadIndicateursDetail } from './indicateurs-details.actions';
import { BusinessModelsAlertesIndicateurs } from '../models/models/alertes-indicateurs.model';
import { IndicateursBusinessService } from '../business/indicateurs/indicateurs-business.service';

describe('Indicateurs detail state', () => {
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [NgxsModule.forRoot([DonneesIndicateursDetailState])],
      providers: [{ provide: IndicateursBusinessService, useValue: indicateursBusinessServiceFake }],
      schemas: []
    });
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeDefined();
  });

  it('Test LoadIndicateursDetail', async () => {
    store.dispatch(new LoadIndicateursDetail('1', '2'));
    expect(DonneesIndicateursDetailState.getContent(store.selectSnapshot(DonneesIndicateursDetailState))).toStrictEqual(mockIndicateursDetail);
    store.dispatch(new LoadIndicateursDetail('1', '2'));
    /* 1 pour load. Le second load ne recharge pas car le state existe déja */
    expect(indicateursBusinessServiceFake.getDetailIndicateurs).toHaveBeenCalledTimes(1);
    expect(DonneesIndicateursDetailState.getError(store.selectSnapshot(DonneesIndicateursDetailState))).toBeUndefined();
    expect(DonneesIndicateursDetailState.isLoading(store.selectSnapshot(DonneesIndicateursDetailState))).toBeFalsy();
  });
});

const indicateursBusinessServiceFake = {
  getDetailIndicateurs: jest.fn(() => of(mockIndicateursDetail))
};
const mockIndicateursDetail: BusinessModelsAlertesIndicateurs.ITabSatisfactionClient = { datas: [] };
