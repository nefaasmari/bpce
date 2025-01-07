import { DecimalPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Directive } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { ModalePNBComponent } from './modale-PNB.component';

@Directive({
  selector: '[mywayLoading]',
  inputs: ['mywayLoading']
})
class MockMywayLoadingDirective {
  constructor() { }
}

describe('ModalePNBComponent', () => {
  let component: ModalePNBComponent;
  let fixture: ComponentFixture<ModalePNBComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModalePNBComponent, MockMywayLoadingDirective],
      imports: [],
      providers: [
        { provide: Store, useValue: {} },
        DecimalPipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    store = TestBed.inject(Store);
    store.dispatch = jest.fn(() => of(true));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalePNBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test create', () => {
    let res = component.getEvolutionPNB(0,0);
    expect(res).toBe('');

    res = component.getEvolutionPNB(0,1);
    expect(res).toBeDefined();
  });
});
