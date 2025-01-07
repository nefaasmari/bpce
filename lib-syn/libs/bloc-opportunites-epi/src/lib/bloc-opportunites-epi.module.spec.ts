import { TestBed, waitForAsync } from '@angular/core/testing';
import { BlocOpportunitesEpiModule } from './bloc-opportunites-epi.module';

describe('BlocOpportunitesEpiModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BlocOpportunitesEpiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BlocOpportunitesEpiModule).toBeDefined();
  });
});
