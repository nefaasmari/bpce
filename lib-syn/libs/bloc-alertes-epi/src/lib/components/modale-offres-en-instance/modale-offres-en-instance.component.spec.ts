import { CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { ModaleOffresEnInstanceComponent } from './modale-offres-en-instance.component';
import { IContext } from '../../models/models/context.model';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() { }
}

describe('ModaleOffresEnInstanceComponent', () => {
  let component: ModaleOffresEnInstanceComponent;
  let fixture: ComponentFixture<ModaleOffresEnInstanceComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModaleOffresEnInstanceComponent, MockMywayLoadingDirective],
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
    fixture = TestBed.createComponent(ModaleOffresEnInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
