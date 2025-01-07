import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogRef, MyWayTooltipModule, IGenericData } from '@myway/ui';
import { of } from 'rxjs';
import { ModaleReclamationComponent } from './modale-reclamation.component';
import { CONFIG_LANCEMENT_RECLAMATION_ID, CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID } from '../../models/constantes/processus.constantes';
import { BusinessModelsUtilsUi } from '../../models/models/ui-utils.model';

describe('ModaleReclamationComponent', () => {
  let component: ModaleReclamationComponent;
  let fixture: ComponentFixture<ModaleReclamationComponent>;
  let dialogRef: DialogRef;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModaleReclamationComponent],
      imports: [MyWayTooltipModule],
      providers: [{ provide: DialogRef, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    dialogRef = TestBed.inject(DialogRef);
    dialogRef.close = jest.fn(() => of(true));

    component = new ModaleReclamationComponent(dialogRef);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test init sans point entree', () => {
    dialogRef.data = { valeurBadge: '> 2'} as unknown as IGenericData;
    component = new ModaleReclamationComponent(dialogRef);
    component.pointAccesState$ = of(mockPointAccesVide);
    component.ngOnInit();
    expect(component.dataPointAccesReclamationAquarel).toBeUndefined();
    expect(component.dataPointAccesSalesForce).toBeUndefined();
  });

  it('test init avec point entree', () => {
    dialogRef.data = { valeurBadge: '> 1'} as unknown as IGenericData;
    component = new ModaleReclamationComponent(dialogRef);
    component.pointAccesState$ = of(mockPointAcces);
    component.ngOnInit();
    expect(component.dataPointAccesReclamationAquarel).toBeDefined();
    expect(component.dataPointAccesSalesForce).toBeDefined();
  });

  it('test init avec point entree non def', () => {
    component.pointAccesState$ = of(mockPointAccesNonDef);
    component.ngOnInit();
    expect(component.dataPointAccesReclamationAquarel).toBeUndefined();
    expect(component.dataPointAccesSalesForce).toBeUndefined();
  });

  it('Test debranchements', () => {
    component.debranchement0951();
    component.debranchementSalesForce();
    expect(dialogRef.close).toHaveBeenCalledTimes(2);
  });
});

const mockPointAcces: BusinessModelsUtilsUi.IDataPointAccesState[] = [
  {
    id: CONFIG_LANCEMENT_RECLAMATION_ID,
    dataPointAcces: { disabled: true, label: 'label' }
  },
  {
    id: CONFIG_LANCEMENT_RECLAMATION_SALESFORCE_ID,
    dataPointAcces: { disabled: true, label: 'label' }
  }
];

const mockPointAccesNonDef: BusinessModelsUtilsUi.IDataPointAccesState[] = [
  {
    id: 'hjjhjh',
    dataPointAcces: { disabled: true, label: 'label' }
  }
];

const mockPointAccesVide: BusinessModelsUtilsUi.IDataPointAccesState[] = [];
