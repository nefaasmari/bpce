import {
  CUSTOM_ELEMENTS_SCHEMA,
  Directive,
  Pipe,
  PipeTransform
} from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { IPTMSentinelleGetRefreshInput } from '@oscaiss-pormyway-managers/portal-common';
import { PTMSentinelleAgent } from "@oscaiss-pormyway-managers/portal-interface";
import { of } from 'rxjs';
import { DataUtilsService } from '../../business/utils/data-utils.service';
import { BusinessModelsAlertesIndicateurs } from '../../models/models/alertes-indicateurs.model';
import { IContext } from '../../models/models/context.model';
import { DataUtilsRisqueAlertesService } from '../../utils/data-utils.service';
import { BlocIndicateursEpiComponent } from './bloc-indicateurs-epi.component';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() {}
}

class MockPTMNavigationAgentService {
  getRefresh(input: IPTMSentinelleGetRefreshInput) {
    return of(true);
  }
}

@Pipe({ name: 'vueClientPipe' })
class MockVueClientPipe implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}

describe('BlocIndicateursEpiComponent', () => {
  let component: BlocIndicateursEpiComponent;
  let fixture: ComponentFixture<BlocIndicateursEpiComponent>;
  let store: Store;
  let blocIndicateursEpiComponent: BlocIndicateursEpiComponent;
  let dataUtils: DataUtilsRisqueAlertesService;
  let sentinelleService: PTMSentinelleAgent;
  let dataUtilsService: DataUtilsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlocIndicateursEpiComponent,
        MockMywayLoadingDirective,
        MockVueClientPipe
      ],
      imports: [NgxsModule.forRoot([])],
      providers: [
        { provide: PTMSentinelleAgent, useClass: MockPTMNavigationAgentService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    store = TestBed.inject(Store);
    dataUtils = TestBed.inject(DataUtilsRisqueAlertesService);
    sentinelleService = TestBed.inject(PTMSentinelleAgent);
    dataUtilsService = TestBed.inject(DataUtilsService);
    store.dispatch = jest.fn(() => of(true));
    blocIndicateursEpiComponent = new BlocIndicateursEpiComponent(
      store,
      dataUtils,
      sentinelleService,
      dataUtilsService
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocIndicateursEpiComponent);
    component = fixture.componentInstance;
    component.context = {} as IContext;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit', () => {
    blocIndicateursEpiComponent.context = {} as IContext;
    blocIndicateursEpiComponent.indicateurs$ = of(mockIndicateurs);
    blocIndicateursEpiComponent.ngOnInit();

    blocIndicateursEpiComponent.estBlocSynthese = true;
    blocIndicateursEpiComponent.ngOnInit();
    expect(store.dispatch).toHaveBeenCalled();
  });
});

const mockIndicateurs: BusinessModelsAlertesIndicateurs.IIndicateurAlerteClient[] = [];
