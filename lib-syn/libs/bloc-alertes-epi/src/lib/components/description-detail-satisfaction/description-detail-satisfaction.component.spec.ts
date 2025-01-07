import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DescriptionDetailSatisfactionComponent } from './description-detail-satisfaction.component';


describe('DescriptionDetailSatisfactionComponent', () => {
  let component: DescriptionDetailSatisfactionComponent;
  let fixture: ComponentFixture<DescriptionDetailSatisfactionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionDetailSatisfactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionDetailSatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
