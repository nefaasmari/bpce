import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { LoadIndicateurs, PatchDataIndicateurs, ReLoadIndicateurs } from './indicateurs.actions';
import { DonneesIndicateursState } from './indicateurs.state';
import { RisquesAlertesBusinessService } from '../business/risques-alertes/risques-alertes-business.service';
import { BusinessModelsAlertesIndicateurs } from '../models/models/alertes-indicateurs.model';

describe('Indicateurs state', () => {
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([DonneesIndicateursState])],
      providers: [{ provide: RisquesAlertesBusinessService, useValue: risquesAlertesBusinessServiceFake }]
    });
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeDefined();
  });

  it('Test actions LoadIndicateurs, ReLoadIndicateurs, PatchDataIndicateurs', async () => {
    store.dispatch(new LoadIndicateurs(undefined));
    expect(DonneesIndicateursState.getContent(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(
      mockIndicateurs.indicateurAlerteClient
    );
    expect(DonneesIndicateursState.getContentTarification(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(
      mockIndicateurs.dataTarification
    );
    expect(DonneesIndicateursState.getContentPNB(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(mockIndicateurs.dataPNB);
    expect(DonneesIndicateursState.getContentGCEDOC(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(mockIndicateurs.dataGCEDOC);
    expect(DonneesIndicateursState.isClientActif(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(mockIndicateurs.estTopActif);
    expect(DonneesIndicateursState.getError(store.selectSnapshot(DonneesIndicateursState))).toBeUndefined();
    expect(DonneesIndicateursState.getMessages(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(mockIndicateurs.messages);
    expect(DonneesIndicateursState.isLoading(store.selectSnapshot(DonneesIndicateursState))).toBeFalsy();
    store.dispatch(new LoadIndicateurs(undefined));
    store.dispatch(new ReLoadIndicateurs(undefined));
    expect(risquesAlertesBusinessServiceFake.getIndicateurs).toHaveBeenCalledTimes(2);

    store.dispatch(new PatchDataIndicateurs(mockIndicateurs));
    expect(DonneesIndicateursState.getContentBadLoans(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(mockIndicateurs.dataBadLoans);
    expect(DonneesIndicateursState.getContentTarification(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(mockIndicateurs.dataTarification);
    expect(DonneesIndicateursState.getContentTopLF(store.selectSnapshot(DonneesIndicateursState))).toStrictEqual(mockIndicateurs.dataTopLF);
  });

  
});

const risquesAlertesBusinessServiceFake = {
  getIndicateurs: jest.fn(() => of(mockIndicateurs))
};
const mockDataTopLF: BusinessModelsAlertesIndicateurs.IDataTopLF = {
  rationLevierNet: 0,
  rationLevierBrut: 0,
  dateRatio: ''
};
const mockPNBData: BusinessModelsAlertesIndicateurs.IDataPNB = {
  dataArrete: undefined,
  montant3112: 0,
  montantN: 0,
  montantN1: 0,
  periode3112: '',
  periodeN: '',
  periodeN1: ''
};
const mockDataTarification: BusinessModelsAlertesIndicateurs.IDataTarification = {
  dateDebutN: '',
  dateFinN: '',
  montantStandardN: 0,
  montantAppliqueN: 0,
  montantRemiseN: 0,
  dateDebutN1: '',
  dateFinN1: '',
  montantStandardN1: 0,
  montantAppliqueN1: 0,
  montantRemiseN1: 0
};
const mockIndicateurs: BusinessModelsAlertesIndicateurs.IIndicateurs = {
  dataGCEDOC: undefined,
  indicateurAlerteClient: [],
  dataBadLoans: [],
  dataPNB: mockPNBData,
  dataTarification: mockDataTarification,
  dataTopLF: mockDataTopLF,
  estTopActif: true,
  messages: []
};
