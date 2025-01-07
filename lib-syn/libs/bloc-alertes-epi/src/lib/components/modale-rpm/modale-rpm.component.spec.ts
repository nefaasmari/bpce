import { CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogRef, IGenericData, MyWayTooltipModule } from '@myway/ui';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { ModaleRPMComponent } from './modale-rpm.component';
import { CONFIG_LANCEMENT_CONS_HIST_EVNM_RPM_ID, CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID } from '../../models/constantes/processus.constantes';
import { BusinessModelsUtilsUi } from '../../models/models/ui-utils.model';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() { }
}

describe('ModaleTriggerBadloansComponent', () => {
  let component: ModaleRPMComponent;
  let fixture: ComponentFixture<ModaleRPMComponent>;
  let dialogRef: DialogRef;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModaleRPMComponent, MockMywayLoadingDirective],
      imports: [MyWayTooltipModule],
      providers: [
        { provide: DialogRef, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
      dialogRef = TestBed.inject(DialogRef);
    dialogRef.close = jest.fn(() => of(true));

    component = new ModaleRPMComponent(dialogRef);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleRPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('test init sans point entree', () => {
    dialogRef.data = { idPersonne: '1111111'} as unknown as IGenericData;
    component = new ModaleRPMComponent(dialogRef);
    component.pointAccesState$ = of(mockPointAccesVide);
    component.ngOnInit();
    expect(component.dataPointAccesHistoriqueRPM).toBeUndefined();
    expect(component.dataPointAccesGestionRPM).toBeUndefined();
  });

  it('test init avec point entree', () => {
    dialogRef.data = { idPersonne: '1111111'} as unknown as IGenericData;
    component = new ModaleRPMComponent(dialogRef);
    component.pointAccesState$ = of(mockPointAcces);
    component.ngOnInit();
    expect(component.dataPointAccesHistoriqueRPM).toBeDefined();
    expect(component.dataPointAccesGestionRPM).toBeDefined();
  });

  it('test init avec point entree non def', () => {
    component.pointAccesState$ = of(mockPointAccesNonDef);
    component.ngOnInit();
    expect(component.dataPointAccesHistoriqueRPM).toBeUndefined();
    expect(component.dataPointAccesGestionRPM).toBeUndefined();
  });

  it('Test debranchements', () => {
    component.debranchementGestionRPM();
    component.debranchementHistoriqueRPM();
    expect(dialogRef.close).toHaveBeenCalledTimes(2);
  });
});

const mockPointAcces: BusinessModelsUtilsUi.IDataPointAccesState[] = [
  {
    id: CONFIG_LANCEMENT_CONS_HIST_EVNM_RPM_ID,
    dataPointAcces: { disabled: true, label: 'label' }
  },
  {
    id: CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID,
    dataPointAcces: { disabled: true, label: 'label' }
  }
];

const mockPointAccesNonDef: BusinessModelsUtilsUi.IDataPointAccesState[] = [
  {
    id: '******',
    dataPointAcces: { disabled: true, label: 'label' }
  }
];

const mockPointAccesVide: BusinessModelsUtilsUi.IDataPointAccesState[] = [];
