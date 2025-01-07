import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Environment } from '@myway/env';
import {
  DialogService,
  MyWayTableModule,
  NotificationService
} from '@myway/ui';
import { PTMSentinelleAgent } from "@oscaiss-pormyway-managers/portal-interface";
import { IAuthentificationInfoMySys, IParametresComptables, IParamGetListFromContext } from '@ptmyway-stc-v2/ngx-mysys/context';
import { Observable, of } from 'rxjs';
import { RisquesAlertesBusinessService } from '../../business/risques-alertes/risques-alertes-business.service';
import { TableItemCustomActionComponent } from './table-item-custom-action.component';

describe('TableItemCustomActionComponent', () => {
  let component: TableItemCustomActionComponent;
  let fixture: ComponentFixture<TableItemCustomActionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TableItemCustomActionComponent],
      imports: [MyWayTableModule],
      providers: [
        {
          provide: DialogService,
          useValue: mockDialogService
        },
        {
          provide: NotificationService,
          useClass: MockNotificationService
        },
        {
          provide: RisquesAlertesBusinessService,
          useValue: mockRisquesAlertesBusinessService
        },
        { provide: PTMSentinelleAgent, useClass: MockPTMSentinelleAgentService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemCustomActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test ngOnInit', () => {
    component.ngOnInit();
  });

  it('test supprimer', () => {
    component.data = {
      codeEtablissement: '11315',
      estSupprimable: true,
      numeroOffre: 1,
      identifiantPersonne: '12'
    };
    component.supprimer();
    jest
      .spyOn(mockRisquesAlertesBusinessService, 'supprimerEnveloppeOffre')
      .mockReturnValue(of(false));
    component.supprimer();
    jest.spyOn(mockDialogService, 'confirm').mockReturnValue(of(false));
    component.supprimer();
  });
});

export const envMock: Environment = {} as Environment;

class MockPTMSentinelleAgentService {
  setDirty() {
    return of(true);
  }
}

const mockDialogService = {
  openStandard: jest.fn(() => of({})),
  info: jest.fn(() => of()),
  confirm: jest.fn(() => of(true))
};

class MockNotificationService {
  openInfo(message: string, marginTopValue?: number) {
    return undefined;
  }
  openSuccess(message: string, marginTopValue?: number) {
    return undefined;
  }
}
const mockRisquesAlertesBusinessService = {
  supprimerEnveloppeOffre: jest.fn(() => of(true))
};

class MockContextAgentService {
  getAuthentificationInfoMySys(): Observable<IAuthentificationInfoMySys> {
    let authentificationInfoMySys = {} as IAuthentificationInfoMySys;
    authentificationInfoMySys = {
      agent: undefined,
      environnement: 'DUA',
      nomPosteTravail: 'TEST',
      posteFonctionnel: {
        codeCanalAppartenance: undefined,
        codeEtablissement: '13135',
        identifiantEds: 0,
        libelleFonction: '',
        referenceExterneEds: '',
        sigleEtablissement: '',
        telephone: '',
        typeEds: '',
        typeFonction: '',
        nomEtablissement: ''
      },
      rattachement: undefined,
      site: undefined,
      typeServicePoste: undefined
    };
    return of(authentificationInfoMySys);
  }

  getParametresComptables(aze): Observable<IParametresComptables> {
    return of({
      codeGuichetInterbancaire: '45454',
      dateOperationJourneeComptable: undefined,
      guichet: undefined,
      rattachement: undefined,
      typeCaisseAuto: ''
    });
  }

  getListFromContext(
    param: IParamGetListFromContext
  ): Observable<Map<string, any>> {
    return of(
      new Map<string, any>([['identifiantPersonne', 1]])
    );
  }
}
