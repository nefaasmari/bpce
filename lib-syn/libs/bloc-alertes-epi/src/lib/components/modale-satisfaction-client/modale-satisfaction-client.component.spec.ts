import { CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModaleSatisfactionClientComponent } from './modale-satisfaction-client.component';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { IContext } from '../../models/models/context.model';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() { }
}

describe('ModaleSatisfactionClientComponent', () => {
  let component: ModaleSatisfactionClientComponent;
  let fixture: ComponentFixture<ModaleSatisfactionClientComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModaleSatisfactionClientComponent, MockMywayLoadingDirective],
      imports: [],
      providers: [
        { provide: Store, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    store = TestBed.inject(Store);
    store.dispatch = jest.fn(() => of(true));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleSatisfactionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledTimes(0);

    component.context$ = of(mockContextNull);
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledTimes(0);

    component.context$ = of(mockContext);
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});

const mockContext: IContext = {
  identifiantPersonne: '',
  codeEtablissement: '',
  codeMarche: '',
  dataRecherchePersonne: undefined,
  codeAgent: '',
  identifiantEdsAgent: undefined
};

const mockContextNull: IContext = undefined;
