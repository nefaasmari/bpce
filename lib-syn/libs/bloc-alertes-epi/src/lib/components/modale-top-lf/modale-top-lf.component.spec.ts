import { CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { ModaleTopLFComponent } from './modale-top-lf.component';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() { }
}

describe('ModaleTopLFComponent', () => {
  let component: ModaleTopLFComponent;
  let fixture: ComponentFixture<ModaleTopLFComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModaleTopLFComponent, MockMywayLoadingDirective],
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
    fixture = TestBed.createComponent(ModaleTopLFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
