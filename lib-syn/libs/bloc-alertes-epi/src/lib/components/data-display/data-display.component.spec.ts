import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogService, MyWayTooltipModule } from '@myway/ui';
import { INavigationStartConfigLancementCommandInput } from '@oscaiss-pormyway-managers/portal-common';
import { HabilitationMySysAgentService } from '@ptmyway-stc-v2/ngx-mysys/habilitation';
import { Observable, of } from 'rxjs';
import { IhmBusinessService } from '../../business/ihm/ihm-business.service';
import {
  CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
  CONFIG_LANCEMENT_DSC_ID
} from '../../models/constantes/processus.constantes';
import { BusinessModelsAlertesIndicateurs as model } from '../../models/models/alertes-indicateurs.model';
import { BusinessModelsUtilsUi } from '../../models/models/ui-utils.model';
import { DataDisplayComponent } from './data-display.component';

class MockDataUtilsService {
  getNavInput() {
    return of();
  }
  getDataPointEntreeFromEntryPoint() {
    return { disabled: false, label: '' };
  }
  getNavInputConfigLancementDefault() {
    return {} as INavigationStartConfigLancementCommandInput;
  }
  getNavInputConfigLancementDSC(
    identifiantConfig: string,
    identifiantPersonne: string,
    codePage: string
  ) {
    return of();
  }
}

class MockHabilitationAgentService {
  estHabilite(): Observable<Map<string, boolean>> {
    let data = new Map<string, boolean>();
    data.set('TEST', true);
    return of(data);
  }
}

class MockPTMNavigationAgentService {
  startConfigLancement() {
    return of();
  }
}

class MockDialogService {
  openStandard<T>() {
    return of({});
  }
  info() {
    return of();
  }
}

class MockChangeDetectorRef {
  detectChanges() {}
}

class MockIhmBusinessService {
  debrancherPointLancement(
    identifiantsConfig: string,
    identifiantPersonne: string,
    infoExtra?: string
  ) {}
}

describe('DataDisplayComponent', () => {
  let component: DataDisplayComponent;
  let fixture: ComponentFixture<DataDisplayComponent>;
  let dataDisplayComponent: DataDisplayComponent;
  let dialogService: DialogService;
  let habilitationAgentService: HabilitationMySysAgentService;
  let ihmBusinessService: IhmBusinessService;
  let changeDetectionRef: ChangeDetectorRef;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DataDisplayComponent],
      imports: [MyWayTooltipModule],
      providers: [
        {
          provide: DialogService,
          useClass: MockDialogService
        },
        {
          provide: HabilitationMySysAgentService,
          useClass: MockHabilitationAgentService
        },
        { provide: ChangeDetectorRef, useClass: MockChangeDetectorRef },
        { provide: IhmBusinessService, useClass: MockIhmBusinessService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    ihmBusinessService = TestBed.inject(IhmBusinessService);
    ihmBusinessService.debrancherPointLancement = jest.fn(() => of(undefined));
    changeDetectionRef = TestBed.inject(ChangeDetectorRef);
    dialogService = TestBed.inject(DialogService);
    dialogService.openStandard = jest.fn(() => of(undefined));
    habilitationAgentService = TestBed.inject(HabilitationMySysAgentService);
    dataDisplayComponent = new DataDisplayComponent(
      null,
      dialogService,
      habilitationAgentService,
      ihmBusinessService,
      changeDetectionRef
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDisplayComponent);
    component = fixture.componentInstance;
    component.donnee = {
      libelle: 'z',
      typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      dataLancementProcessus: {
        idConfigLancement: undefined,
        processTypeContextSpecifique:
          BusinessModelsUtilsUi.enumTypeContextSpecifique.CC
      },
      estPersonnePhysique: true
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit', () => {
    dataDisplayComponent.donnee = {
      libelle: 'test',
      typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      dataLancementProcessus: {
        idConfigLancement: 'test'
      },
      habilitation: 'TEST'
    };
    dataDisplayComponent.pointAcces$ = of(mockPointAcces);
    dataDisplayComponent.ngOnInit();

    dataDisplayComponent.donnee = {
      libelle: 'test',
      typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      dataLancementProcessus: {
        idConfigLancement: 'test2'
      },
      habilitation: undefined
    };
    dataDisplayComponent.pointAcces$ = of(mockPointAcces);
    dataDisplayComponent.ngOnInit();
  });

  it('test debrancherConfig', () => {
    dataDisplayComponent.donnee = {
      libelle: 'test2',
      typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      dataLancementProcessus: {
        idConfigLancement: CONFIG_LANCEMENT_DSC_ID,
        processTypeContextSpecifique:
          BusinessModelsUtilsUi.enumTypeContextSpecifique.WATCHLIST
      }
    };
    dataDisplayComponent.debrancherConfig();
    expect(ihmBusinessService.debrancherPointLancement).toHaveBeenCalledTimes(
      1
    );

    dataDisplayComponent.donnee = {
      libelle: 'test2',
      typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      dataLancementProcessus: {
        idConfigLancement: CONFIG_LANCEMENT_DSC_ID,
        processTypeContextSpecifique: undefined
      }
    };
    dataDisplayComponent.debrancherConfig();
    expect(ihmBusinessService.debrancherPointLancement).toHaveBeenCalledTimes(
      2
    );

    dataDisplayComponent.donnee = {
      libelle: 'test2',
      typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      dataLancementProcessus: {
        idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
        processTypeContextSpecifique: undefined
      }
    };
    dataDisplayComponent.debrancherConfig();
    expect(ihmBusinessService.debrancherPointLancement).toHaveBeenCalledTimes(
      3
    );

    dataDisplayComponent.donnee = {
      libelle: 'test2',
      typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      dataLancementProcessus: {
        idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
        processTypeContextSpecifique:
          BusinessModelsUtilsUi.enumTypeContextSpecifique.CCGEST
      }
    };
    dataDisplayComponent.debrancherConfig();
    expect(ihmBusinessService.debrancherPointLancement).toHaveBeenCalledTimes(
      4
    );

    dataDisplayComponent.donnee = {
      libelle: 'test2',
      typeDebranchement: model.enumTypeDebranchement.CONFIGLANCEMENT,
      dataLancementProcessus: {
        idConfigLancement: CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
        processTypeContextSpecifique:
          BusinessModelsUtilsUi.enumTypeContextSpecifique.CCCOTATION
      }
    };
    dataDisplayComponent.debrancherConfig();
    expect(ihmBusinessService.debrancherPointLancement).toHaveBeenCalledTimes(
      5
    );
  });

  it('test openModale', () => {
    component.donnee = {} as model.IIndicateurAlerteClient;
    component.openModale();
    expect(dialogService.openStandard).toHaveBeenCalledTimes(0);

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.dataPopupInfo = {
      contenu: 'test',
      typeComposantSpecifique: model.enumTypeComposantPopup.TXT
    } as model.IDataPopupInfo;
    component.openModale();
    expect(dialogService.openStandard).toHaveBeenCalledTimes(1);

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.dataPopupInfo = {
      contenu: 'test',
      typeComposantSpecifique: model.enumTypeComposantPopup.SATISFACTIONCLIENT
    } as model.IDataPopupInfo;
    component.openModale();
    expect(dialogService.openStandard).toHaveBeenCalledTimes(2);

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.dataPopupInfo = {
      contenu: 'test',
      typeComposantSpecifique: model.enumTypeComposantPopup.OFFREENINSTANCE
    } as model.IDataPopupInfo;
    component.openModale();
    expect(dialogService.openStandard).toHaveBeenCalledTimes(3);

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.dataPopupInfo = {
      contenu: 'test',
      typeComposantSpecifique: model.enumTypeComposantPopup.TRIGGERBADLOANS
    } as model.IDataPopupInfo;
    component.openModale();
    expect(dialogService.openStandard).toHaveBeenCalledTimes(4);

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.dataPopupInfo = {
      contenu: 'test',
      typeComposantSpecifique: model.enumTypeComposantPopup.TOPLF
    } as model.IDataPopupInfo;
    component.openModale();
    expect(dialogService.openStandard).toHaveBeenCalledTimes(5);

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.dataPopupInfo = {
      contenu: 'test',
      typeComposantSpecifique: model.enumTypeComposantPopup.RPM
    } as model.IDataPopupInfo;
    component.openModale();
    expect(dialogService.openStandard).toHaveBeenCalledTimes(6);
  });

  it('test getIcon', () => {
    expect(component.getIcon()).toBeDefined();
  });

  it('test getAvecTooltip', () => {
    component.donnee = {
      libelle: '',
      typeDebranchement: undefined,
      tooltip: ''
    } as model.IIndicateurAlerteClient;
    expect(component.getAvecTooltip()).toBeFalsy();
    component.donnee = {
      libelle: '',
      typeDebranchement: undefined,
      tooltip: 'dazdad'
    } as model.IIndicateurAlerteClient;
    expect(component.getAvecTooltip()).toBeTruthy();
  });

  it('test getIconClass', () => {
    expect(component.getIconClass()).toBeDefined();
  });

  it('test aTypeInfo', () => {
    component.donnee = {} as model.IIndicateurAlerteClient;
    expect(component.aTypeInfo()).toBeFalsy();

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.typeInfo = model.enumTypeInfo.EQUAL;
    expect(component.aTypeInfo()).toBeTruthy();
  });

  it('test getStatus', () => {
    component.donnee = {} as model.IIndicateurAlerteClient;
    expect(component.getStatus()).toBeUndefined();

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.typeInfo = model.enumTypeInfo.EQUAL;
    expect(component.getStatus()).toBeUndefined();

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.typeInfo = model.enumTypeInfo.OK;
    expect(component.getStatus()).toBeDefined();

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.typeInfo = model.enumTypeInfo.KO;
    expect(component.getStatus()).toBeDefined();

    component.donnee = {} as model.IIndicateurAlerteClient;
    component.donnee.typeInfo = model.enumTypeInfo.WARN;
    expect(component.getStatus()).toBeDefined();
  });

  it('test getBadge', () => {
    expect(component.getBadge(0)).toBe('');
    expect(component.getBadge(1)).toBe('');
    expect(component.getBadge('?')).not.toBe('');
  });
});

const mockPointAcces: BusinessModelsUtilsUi.IDataPointAccesState[] = [
  {
    id: 'test',
    dataPointAcces: { disabled: true, label: 'label' }
  }
];
