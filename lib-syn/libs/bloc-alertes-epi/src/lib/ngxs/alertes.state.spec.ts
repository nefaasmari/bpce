import { TestBed, waitForAsync } from '@angular/core/testing';

import { NgxsModule, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import {
  LoadAlertes,
  PatchDataAlertes,
  PatchErrorAlertes,
  ReLoadAlertes,
  SetLoadingAlertes
} from './alertes.actions';
import { DonneesAlertesState } from './alertes.state';
import {
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders
} from '@angular/common/http';
import { IhmBusinessService } from '../business/ihm/ihm-business.service';
import { RisquesAlertesBusinessService } from '../business/risques-alertes/risques-alertes-business.service';
import { BusinessModelsAlertesIndicateurs } from '../models/models/alertes-indicateurs.model';
import { BusinessModelsUtilsUi } from '../models/models/ui-utils.model';

describe('Alertes state', () => {
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([DonneesAlertesState])],
      providers: [
        {
          provide: RisquesAlertesBusinessService,
          useValue: risquesAlertesBusinessServiceFake
        },
        { provide: IhmBusinessService, useValue: ihmBusinessServiceFake }
      ]
    });
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeDefined();
  });

  it('Test getContent + reloadContent', () => {
    store.dispatch(new LoadAlertes('', '', false));
    store.dispatch(new LoadAlertes('', '', false)); 
    store.dispatch(new ReLoadAlertes('', '', true));
    /*
    1 pour load et 1 pour reload. Le second load ne recharge pas car le state existe déja
    expect(risquesAlertesBusinessServiceFake.getAlertes).toHaveBeenCalledTimes(
      2
    );
    */
    expect(
      DonneesAlertesState.isLoading(store.selectSnapshot(DonneesAlertesState))
    ).toBeFalsy();
    expect(
      DonneesAlertesState.getContent(store.selectSnapshot(DonneesAlertesState))
    ).toStrictEqual(mockAlertes);
    expect(
      DonneesAlertesState.getContentPointAcces(
        store.selectSnapshot(DonneesAlertesState)
      )
    ).toStrictEqual(mockDataPointsEntrees);
    expect(
      DonneesAlertesState.getContentRPM(
        store.selectSnapshot(DonneesAlertesState)
      )
    ).toStrictEqual(mockDataRPM);
    expect(
      DonneesAlertesState.getOffresInstanceContent(
        store.selectSnapshot(DonneesAlertesState)
      )
    ).toStrictEqual(mockOffreInstance);
    expect(
      DonneesAlertesState.getError(store.selectSnapshot(DonneesAlertesState))
    ).toBeUndefined();
  });

  it('Test autres actions', () => {
    store.dispatch(new SetLoadingAlertes());
    expect(
      DonneesAlertesState.isLoading(store.selectSnapshot(DonneesAlertesState))
    ).toBeTruthy();
    store.dispatch(new PatchDataAlertes(undefined));
    expect(
      DonneesAlertesState.getContent(store.selectSnapshot(DonneesAlertesState))
    ).toBeUndefined();
    store.dispatch(new PatchErrorAlertes(mockHttpResponseError));
    expect(
      DonneesAlertesState.getError(store.selectSnapshot(DonneesAlertesState))
    ).toBeDefined();
  });
});

const mockHttpResponseError: HttpErrorResponse = {
  name: 'HttpErrorResponse',
  message: '',
  error: undefined,
  ok: false,
  headers: new HttpHeaders(),
  status: 0,
  statusText: '',
  url: '',
  type: HttpEventType.ResponseHeader
};

const mockDataPointsEntrees: BusinessModelsUtilsUi.IDataPointAccesState[] = [];

const ihmBusinessServiceFake = {
  getDataPointsEntreeState(
    identifiantsConfigs: string[],
    identifiantPersonne: string
  ): Observable<BusinessModelsUtilsUi.IDataPointAccesState[]> {
    return of(mockDataPointsEntrees);
  }
};

const risquesAlertesBusinessServiceFake = {
  getAlertes(
    codeEtablissement: string,
    identifiantPersonne: string,
    estPersonnePhysique: boolean
  ): Observable<BusinessModelsAlertesIndicateurs.IAlertes> {
    return of(mockAlertes);
  }
};

const mockOffreInstance: BusinessModelsAlertesIndicateurs.IOffreEnInstance[] = [];
const mockDataRPM: BusinessModelsAlertesIndicateurs.IDataRPM[] = [];

const mockAlertes: BusinessModelsAlertesIndicateurs.IAlertes = {
  indicateurAlerteClient: [],
  dataOffreEnInstance: mockOffreInstance,
  dataRPM: mockDataRPM,
  messages: []
};
