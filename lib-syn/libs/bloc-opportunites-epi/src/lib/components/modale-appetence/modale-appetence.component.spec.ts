import { CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { ModaleAppetenceComponent } from './modale-appetence.component';
import { DialogRef, IGenericData } from '@myway/ui';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() {}
}

describe('ModaleAppetenceComponent', () => {
  let component: ModaleAppetenceComponent;
  let fixture: ComponentFixture<ModaleAppetenceComponent>;
  let store: Store;
  let dialogRef: DialogRef;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModaleAppetenceComponent, MockMywayLoadingDirective],
      imports: [],
      providers: [
        { provide: Store, useValue: {} },
        { provide: DialogRef, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    store = TestBed.inject(Store);
    store.dispatch = jest.fn(() => of(true));
    dialogRef = TestBed.inject(DialogRef);
    dialogRef.data = { identifiantPersonne: '', codeEtablissement: ''} as unknown as IGenericData;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleAppetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
