import { CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { PTMSentinelleAgent } from "@oscaiss-pormyway-managers/portal-interface";
import { of } from 'rxjs';
import { BusinessModelsAlertesIndicateurs as model } from '../../models/models/alertes-indicateurs.model';
import { DataUtilsRisqueAlertesService } from '../../utils/data-utils.service';
import { BlocAlerteEpiComponent } from './bloc-alerte-epi.component';
import { IPTMSentinelleGetRefreshInput } from '@oscaiss-pormyway-managers/portal-common';
import { DataUtilsService } from '../../business/utils/data-utils.service';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() { }
}

class MockPTMNavigationAgentService {
  getRefresh(input: IPTMSentinelleGetRefreshInput) {
    return of(true);
  }
}

describe('BlocAlerteEpiComponent', () => {
  let component: BlocAlerteEpiComponent;
  let fixture: ComponentFixture<BlocAlerteEpiComponent>;
  let store: Store;
  let blocAlerteEpiComponent: BlocAlerteEpiComponent;
  let dataUtils: DataUtilsRisqueAlertesService;
  let sentinelleService: PTMSentinelleAgent;
  let dataUtilsService: DataUtilsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlocAlerteEpiComponent, MockMywayLoadingDirective],
      imports: [NgxsModule.forRoot([])],
      providers: [
        { provide: PTMSentinelleAgent, useClass: MockPTMNavigationAgentService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    store = TestBed.inject(Store);
    dataUtils = TestBed.inject(DataUtilsRisqueAlertesService);
    sentinelleService = TestBed.inject(PTMSentinelleAgent);
    dataUtilsService = TestBed.inject(DataUtilsService);
    store.dispatch = jest.fn(() => of(true));
    blocAlerteEpiComponent = new BlocAlerteEpiComponent(store, dataUtils, sentinelleService, dataUtilsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocAlerteEpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit pas de donnee alertes', () => {
    blocAlerteEpiComponent.alertes$ = of(undefined);
    blocAlerteEpiComponent.ngOnInit();
    expect(blocAlerteEpiComponent.nbMAxDefault).toBeDefined();
    expect(store.dispatch).toHaveBeenCalled();
    expect(blocAlerteEpiComponent.listeAlertes).toBeUndefined();
  });

  it('test ngOnInit avec alertes', () => {
    blocAlerteEpiComponent.alertes$ = of(mockAlertes);
    blocAlerteEpiComponent.nbMAxDefault = 6;
    blocAlerteEpiComponent.ngOnInit();
    expect(blocAlerteEpiComponent.nbMAxDefault).toBe(6);
    expect(blocAlerteEpiComponent.listeAlertes).toStrictEqual(mockAlertes.indicateurAlerteClient);
  });
});

const mockIndicAlertes: model.IIndicateurAlerteClient[] = [
  {
    libelle: 'hh',
    typeDebranchement: undefined
  }
];

const mockAlertes: model.IAlertes = {
  indicateurAlerteClient: mockIndicAlertes,
  dataOffreEnInstance: undefined
}


