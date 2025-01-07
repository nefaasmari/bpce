import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DescriptionTableauSimpleComponent } from './description-tableau-simple.component';


describe('DescriptionTableauSimpleComponent', () => {
  let component: DescriptionTableauSimpleComponent;
  let fixture: ComponentFixture<DescriptionTableauSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionTableauSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionTableauSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
