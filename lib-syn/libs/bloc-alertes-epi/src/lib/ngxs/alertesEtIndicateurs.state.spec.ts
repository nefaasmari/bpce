import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { LoadAlertesEtIndicateurs } from './alertesEtIndicateurs.actions';
import { DonneesAlertesEtIndicateursState } from './alertesEtIndicateurs.state';
import { IhmBusinessService } from '../business/ihm/ihm-business.service';
import { RisquesAlertesBusinessService } from '../business/risques-alertes/risques-alertes-business.service';
import { BusinessModelsAlertesIndicateurs } from '../models/models/alertes-indicateurs.model';
import { BusinessModelsUtilsUi } from '../models/models/ui-utils.model';
import { IContext } from '../models/models/context.model';

describe('DonneesAlertesEtIndicateursState state', () => {
  let store: Store;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([DonneesAlertesEtIndicateursState])],
      providers: [
        { provide: RisquesAlertesBusinessService, useValue: risquesAlertesBusinessServiceFake },
        { provide: IhmBusinessService, useValue: ihmBusinessServiceFake }
      ]
    });
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeDefined();
  });

  it('Test LoadAlertesEtIndicateurs', async () => {
    store.dispatch(new LoadAlertesEtIndicateurs(mockContext));
    expect(risquesAlertesBusinessServiceFake.getAlertesEtIndicateurs).toHaveBeenCalledTimes(1);
  });
});

const mockContext: IContext = {
  identifiantPersonne: '',
  codeEtablissement: '',
  codeMarche: '',
  codeAgent: '',
  identifiantEdsAgent: 0
}

const risquesAlertesBusinessServiceFake = {
  getAlertesEtIndicateurs: jest.fn(() => of(mockAlertesEtIndicateurs))
};

const mockIndicAlertes: BusinessModelsAlertesIndicateurs.IIndicateurAlerteClient[] = [];

const mockAlertes: BusinessModelsAlertesIndicateurs.IAlertes = {
  indicateurAlerteClient: mockIndicAlertes,
  dataOffreEnInstance: undefined
};

const mockAlertesEtIndicateurs: BusinessModelsAlertesIndicateurs.IIndicateursEtAlertes = {
  dataAlertes: mockAlertes,
  dataIndicateurs: {
    dataGCEDOC: undefined,
    indicateurAlerteClient: []
  }
};

const mockDataPointsEntrees: BusinessModelsUtilsUi.IDataPointAccesState[] = [];

const ihmBusinessServiceFake = {
  getDataPointsEntreeState: jest.fn(() => of(mockDataPointsEntrees))
};
