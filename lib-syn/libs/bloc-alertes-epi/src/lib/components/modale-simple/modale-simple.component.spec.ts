import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModaleSimpleComponent } from './modale-simple.component';
import { DialogRef } from '@myway/ui';

describe('ModaleSimpleComponent', () => {
  let component: ModaleSimpleComponent;
  let fixture: ComponentFixture<ModaleSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ModaleSimpleComponent],
      imports: [],
      providers: [
        { provide: DialogRef, useValue: { mockDialogRef } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.dataModal = mockDialogRef.data;
    expect(component).toBeTruthy();
  });
});

const mockDialogRef: any = {
  data: {
    titre: 'ggg',
    contenu: ''
  }
};
