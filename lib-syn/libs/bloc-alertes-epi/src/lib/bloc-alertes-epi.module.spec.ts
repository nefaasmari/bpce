import { TestBed, waitForAsync } from '@angular/core/testing';
import { OCNgxsUpgradeModule } from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import { BlocAlertesEpiModule } from './bloc-alertes-epi.module';

describe('BlocAlertesEpiModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BlocAlertesEpiModule, OCNgxsUpgradeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BlocAlertesEpiModule).toBeDefined();
  });
});
