import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { OpportunitesActions } from './opportunites.actions';
import { DonneesOpportunitesState } from './opportunites.state';
import { IhmBusinessService } from '../business/ihm/ihm-business.service';
import { IOpportunites, IOpportunitesAll, IOpportunitesCorporate } from '../models/models/opportunites.model';
import { BusinessModelsUtilsUi } from '../models/models/ui-utils.model';
import { OpportunitesBusinessService } from '../business/opportunites/opportunites-business.service';

describe('Entretien state', () => {
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [NgxsModule.forRoot([DonneesOpportunitesState])],
      providers: [
        { provide: OpportunitesBusinessService, useValue: opportunitesBusinessServiceFake },
        { provide: IhmBusinessService, useValue: ihmBusinessServiceFake }
      ]
    });
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeDefined();
  });

  it('Test actions LoadOpportunites && ReloadOpportunites', async () => {
    store.dispatch(new OpportunitesActions.LoadOpportunites('1', '2', 0));
    expect(DonneesOpportunitesState.getContent(store.selectSnapshot(DonneesOpportunitesState))).toStrictEqual(mockOpportunitesAll);
    expect(DonneesOpportunitesState.getContentPointAcces(store.selectSnapshot(DonneesOpportunitesState))).toStrictEqual(
      mockDataPointsEntrees
    );
    expect(DonneesOpportunitesState.getError(store.selectSnapshot(DonneesOpportunitesState))).toBeUndefined();
    expect(DonneesOpportunitesState.isLoading(store.selectSnapshot(DonneesOpportunitesState))).toBeFalsy();

    store.dispatch(new OpportunitesActions.LoadOpportunites('1', '2', 0));
    store.dispatch(new OpportunitesActions.ReloadOpportunites('1', '2', 0));
    expect(opportunitesBusinessServiceFake.getOpportunites).toHaveBeenCalledTimes(2);
    expect(opportunitesBusinessServiceFake.getOpportunitesCorporate).toHaveBeenCalledTimes(2);
  });

  it('Test actions LoadMonExpert && ReloadMonExpert', async () => {
    store.dispatch(new OpportunitesActions.LoadMonExpert('5', '12'));
    expect(DonneesOpportunitesState.isMonExpertLoading(store.selectSnapshot(DonneesOpportunitesState))).toBeFalsy();
    expect(DonneesOpportunitesState.getContentMonExpert(store.selectSnapshot(DonneesOpportunitesState))).toStrictEqual(
      mockpportunitesMonExpert
    );

    store.dispatch(new OpportunitesActions.LoadMonExpert('5', '12'));
    store.dispatch(new OpportunitesActions.ReloadMonExpert('5', '12'));
    expect(opportunitesBusinessServiceFake.getOpportunites).toHaveBeenCalledTimes(2);
    expect(opportunitesBusinessServiceFake.getOpportunitesCorporate).toHaveBeenCalledTimes(2);
  });

  it('Test autres actions', async () => {
    store.dispatch(new OpportunitesActions.SetLoading());
    expect(DonneesOpportunitesState.isLoading(store.selectSnapshot(DonneesOpportunitesState))).toBeTruthy();

    store.dispatch(new OpportunitesActions.SetMonExpertLoading());
    expect(DonneesOpportunitesState.isMonExpertLoading(store.selectSnapshot(DonneesOpportunitesState))).toBeTruthy();

    store.dispatch(new OpportunitesActions.PatchData(mockOpportunites, mockOpportunitesCorp));
    expect(DonneesOpportunitesState.getContent(store.selectSnapshot(DonneesOpportunitesState))).toStrictEqual(mockOpportunitesAll);

    store.dispatch(new OpportunitesActions.PatchMonExpertData(mockpportunitesMonExpert));
    expect(DonneesOpportunitesState.getContentMonExpert(store.selectSnapshot(DonneesOpportunitesState))).toStrictEqual(
      mockpportunitesMonExpert
    );

    store.dispatch(new OpportunitesActions.PatchDataPointAcces(mockDataPointsEntrees));
    expect(DonneesOpportunitesState.getContentPointAcces(store.selectSnapshot(DonneesOpportunitesState))).toStrictEqual(
      mockDataPointsEntrees
    );
  });

  const mockOpportunites: IOpportunites = {} as IOpportunites;
  const mockOpportunitesCorp: IOpportunitesCorporate = {} as IOpportunitesCorporate;
  const mockOpportunitesAll: IOpportunitesAll = {
    opportunites: mockOpportunites,
    opportunitesCorporate: mockOpportunitesCorp
  } as IOpportunitesAll;
  const mockpportunitesMonExpert: number = 2;
  const mockDataPointsEntrees: BusinessModelsUtilsUi.IDataPointAccesState[] = [];
  const opportunitesBusinessServiceFake = {
    getOpportunites: jest.fn(() => of(mockOpportunites)),
    getOpportunitesCorporate: jest.fn(() => of(mockOpportunitesCorp)),
    getOpportunitesMonExpert: jest.fn(() => of(mockpportunitesMonExpert))
  };
  const ihmBusinessServiceFake = {
    getDataPointsEntreeState: jest.fn(() => of(mockDataPointsEntrees))
  };
});
