import { CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { ModaleTriggerBadloansComponent } from './modale-trigger-badloans.component';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() { }
}

describe('ModaleTriggerBadloansComponent', () => {
  let component: ModaleTriggerBadloansComponent;
  let fixture: ComponentFixture<ModaleTriggerBadloansComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModaleTriggerBadloansComponent, MockMywayLoadingDirective],
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
    fixture = TestBed.createComponent(ModaleTriggerBadloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
