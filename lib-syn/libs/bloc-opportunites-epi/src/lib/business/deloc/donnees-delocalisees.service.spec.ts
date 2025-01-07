import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { IParamGetDonneesDelocalisees, IReturnGetDonneesDelocalisees, DonneesDelocaliseesAgentService } from '@ptmyway-stc-v2/ngx-mysys/donnees-delocalisees';
import { Observable, of } from 'rxjs';
import { DonneesDelocaliseesService } from './donnees-delocalisees.service';

class MockDonneesDelocaliseesAgentService {
  getDonneesDelocalisees(
    param: IParamGetDonneesDelocalisees
  ): Observable<IReturnGetDonneesDelocalisees> {
    return of(
      new Map<
        'PRODUIT',
        {
          id: '11315-PRODUIT';
          nom: 'PRODUIT';
          referentiel: '11315';
          donnees: [null];
        }
      >()
    );
  }
}

describe('DonneesDelocaliseesServices', () => {
  let service: DonneesDelocaliseesService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      providers: [
        DonneesDelocaliseesService,
        {
          provide: DonneesDelocaliseesAgentService,
          useClass: MockDonneesDelocaliseesAgentService
        }
      ]
    }).compileComponents();

    service = TestBed.inject(DonneesDelocaliseesService);
  }));

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
