import { TestBed, waitForAsync } from '@angular/core/testing';
import { DataUtilsService } from './data-utils.service';
import { NgxsModule } from '@ngxs/store';

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



