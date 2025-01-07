import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { DataUtilsService } from './data-utils.service';
describe('DonneesEncoursBdfBusinessService', () => {
  let service: DataUtilsService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      providers: [DataUtilsService]
    }).compileComponents();

    service = TestBed.inject(DataUtilsService);
  }));

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
