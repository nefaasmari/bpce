import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { PTMSentinelleAgent, SFPointEntreeAgent } from "@oscaiss-pormyway-managers/portal-interface";
import { Observable, of } from 'rxjs';
import { BlocOpportunitesEpiComponent } from './bloc-opportunites-epi.component';
import { DialogService } from '@myway/ui';
import { IPTMSentinelleGetRefreshInput } from '@oscaiss-pormyway-managers/portal-common';
import { HabilitationMySysAgentService } from '@ptmyway-stc-v2/ngx-mysys/habilitation';
import { DataUtilsService } from '../../business/data-utils/data-utils.service';
import { IhmBusinessService } from '../../business/ihm/ihm-business.service';
import { OpportunitesBusinessService } from '../../business/opportunites/opportunites-business.service';
import { RevueBusinessService } from '../../business/revue/revue-business.service';
import {
  CONFIG_LANCEMENT_CR_ET_OPPORTUNITES_ID,
  CONFIG_LANCEMENT_DOSSIER_VENTE_ID,
  CONFIG_LANCEMENT_GESTION_AFFAIRES_ID,
  CONFIG_LANCEMENT_PROPOSITIONCOM_ID,
  CONFIG_LANCEMENT_REVUE_ID,
  CONFIG_SUIVI_MONEXPERT_ID
} from '../../models/constantes/processus.constantes';
import {
  IOpportunitesAll,
  IOpportunitesCorporate
} from '../../models/models/opportunites.model';
import { IRevue } from '../../models/models/revue.model';
import { BusinessModelsUtilsUi } from '../../models/models/ui-utils.model';
import { DonneesOpportunitesState } from '../../ngxs/opportunites.state';
import { DonneesRevueState } from '../../ngxs/revue.state';

class MockPTMSentinelleAgentService {
  getRefresh(input: IPTMSentinelleGetRefreshInput) {
    return of(true);
  }
}

class MockDialogService {
  openStandard<T>() {
    return of({});
  }
  info() {
    return of();
  }
}

const dataUtilsServiceFake = {
  getInputSentinelleDefault: jest.fn(() => {}),
  getNavInputConfigLancementDefault(
    identifiantsConfig: string,
    identifiantPersonne: string
  ): any {
    return {
      localScopeData: {}
    };
  }
};

class MockDataUtilsService {
  getInputSentinelleDefault(
    idSentinelle: string,
    identifiantPersonne: string
  ): IPTMSentinelleGetRefreshInput {
    return undefined;
  }
}

class MockHabilitationAgentService {
  estHabilite(): Observable<Map<string, boolean>> {
    return of();
  }
}

class MockIhmBusinessService {
  debrancherPointLancement(
    identifiantsConfig: string,
    identifiantPersonne: string,
    infoExtra?: string
  ) {}
}

const ihmBusinessServiceFake = {
  debrancherPointLancement: jest.fn(() => {})
};

const mockOpportunitesCorp: IOpportunitesCorporate = {} as IOpportunitesCorporate;

const mockpportunitesMonExpert: number = 2;

const opportunitesBusinessServiceFake = {
  getOpportunites: jest.fn(() => of(mockOpportunites)),
  getOpportunitesCorporate: jest.fn(() => of(mockOpportunitesCorp)),
  getOpportunitesMonExpert: jest.fn(() => of(mockpportunitesMonExpert))
};

const mockRevue: IRevue = {
  revueProduitClient: [],
  appetencesClient: [],
  revueEnrichie: []
};
const revueBusinessServiceFake = {
  getDetailRevue: jest.fn(() => of(mockRevue))
};

describe('BlocOpportunitesEpiComponent', () => {
  let component: BlocOpportunitesEpiComponent;
  let fixture: ComponentFixture<BlocOpportunitesEpiComponent>;
  let store: Store;
  let ihmBusinessService: IhmBusinessService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlocOpportunitesEpiComponent],
      imports: [
        NgxsModule.forRoot([DonneesOpportunitesState, DonneesRevueState])
      ],
      providers: [
        SFPointEntreeAgent,
        {
          provide: DialogService,
          useClass: MockDialogService
        },
        {
          provide: HabilitationMySysAgentService,
          useClass: MockHabilitationAgentService
        },
        {
          provide: PTMSentinelleAgent,
          useClass: MockPTMSentinelleAgentService
        },
        { provide: IhmBusinessService, useValue: ihmBusinessServiceFake },
        { provide: DataUtilsService, useValue: dataUtilsServiceFake },
        {
          provide: OpportunitesBusinessService,
          useValue: opportunitesBusinessServiceFake
        },
        { provide: RevueBusinessService, useValue: revueBusinessServiceFake }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    ihmBusinessService = TestBed.inject(IhmBusinessService);
    ihmBusinessService.debrancherPointLancement = jest.fn(() => of(undefined));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocOpportunitesEpiComponent);
    store = TestBed.inject(Store);
    store.dispatch = jest.fn(() => of(true));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test majIhm pas de donnee opportunite', () => {
    component.opportunites$ = of(undefined);
    component.majIhm();
    expect(component.opportunites).toBeUndefined();
    component.opportunites$ = of(mockOpportunitesVides);
    component.majIhm();
    expect(component.opportunites).toBeUndefined();
    component.estVueClient = true;
    component.majIhm();
    expect(component.opportunites).toBeUndefined();
  });

  it('test majIhm avec donnees opportunite', () => {
    component.opportunites$ = of(mockOpportunites);
    component.majIhm();
    expect(component.opportunites).toBe(mockOpportunites.opportunites);

    component.estVueClient = true;
    component.majIhm();
    expect(component.opportunitesCorp).toBe(
      mockOpportunites.opportunitesCorporate
    );

    component.opportunites$ = of(mockOpportunitesSansCorp);
    component.estVueClient = false;
    component.majIhm();
  });

  it('test setEtatPointLancement pas de donnee pointacces', () => {
    component.pointAcces$ = of(undefined);
    component.setEtatPointLancement();
    expect(component.dataPointAccesDossierVente).toBeUndefined();
    expect(component.dataPointAccesPropoCom).toBeUndefined();
  });

  it('test setEtatPointLancement avec donnees pointacces', () => {
    component.pointAcces$ = of(mockPointAccesStateVide);
    component.setEtatPointLancement();
    expect(component.dataPointAccesDossierVente).toBeDefined();
    expect(component.dataPointAccesPropoCom).toBeDefined();
    expect(component.dataPointAccesAffaires).toBeDefined();
    expect(component.dataPointAccesRevue).toBeDefined();

    component.pointAcces$ = of(mockPointAccesStateComplete);
    component.setEtatPointLancement();
    expect(component.dataPointAccesDossierVente).toBeDefined();
    expect(component.dataPointAccesPropoCom).toBeDefined();
    expect(component.dataPointAccesAffaires).toBeDefined();
    expect(component.dataPointAccesRevue).toBeDefined();
  });

  it('test debrancherConfig', () => {
    component.debrancherConfig('');
    component.debrancherConfig('blabla');
  });

  it('test debrancherFocus', () => {
    component.debrancherFocus();
  });

  it('test openModale', () => {
    component.openModale();
  });

  it('test getLibAppetence', () => {
    let res = component.getLibAppetence(undefined);
    expect(res).toBeDefined();
    res = component.getLibAppetence(0);
    expect(res).toBeDefined();
    res = component.getLibAppetence(1);
    expect(res).toBeDefined();
    res = component.getLibAppetence(2);
    expect(res).toBeDefined();
  });

  it('test getLibAffaires', () => {
    let res = component.getLibAffaires(undefined);
    expect(res).toBeDefined();
    res = component.getLibAffaires(0);
    expect(res).toBeDefined();
    res = component.getLibAffaires(1);
    expect(res).toBeDefined();
    res = component.getLibAffaires(2);
    expect(res).toBeDefined();
  });

  it('test getLibProduitPropo', () => {
    let res = component.getLibProduitPropo(undefined);
    expect(res).toBeDefined();
    res = component.getLibProduitPropo(0);
    expect(res).toBeDefined();
    res = component.getLibProduitPropo(1);
    expect(res).toBeDefined();
    res = component.getLibProduitPropo(2);
    expect(res).toBeDefined();
  });

  it('test getLibPropositionsCommerciales', () => {
    let res = component.getLibPropositionsCommerciales(undefined);
    expect(res).toBeDefined();
    res = component.getLibPropositionsCommerciales(0);
    expect(res).toBeDefined();
    res = component.getLibPropositionsCommerciales(1);
    expect(res).toBeDefined();
    res = component.getLibPropositionsCommerciales(2);
    expect(res).toBeDefined();
  });

  it('test getLibDossiersVente', () => {
    let res = component.getLibDossiersVente(undefined);
    expect(res).toBeDefined();
    res = component.getLibDossiersVente(0);
    expect(res).toBeDefined();
    res = component.getLibDossiersVente(1);
    expect(res).toBeDefined();
    res = component.getLibDossiersVente(2);
    expect(res).toBeDefined();
  });

  it('test getLibOpportunites', () => {
    let res = component.getLibOpportunites(undefined);
    expect(res).toBeDefined();
    res = component.getLibOpportunites(0);
    expect(res).toBeDefined();
    res = component.getLibOpportunites(1);
    expect(res).toBeDefined();
    res = component.getLibOpportunites(2);
    expect(res).toBeDefined();
  });

  it('test getLibSubtitleOpportunites', () => {
    let res = component.getLibSubtitleOpportunites();
    expect(res).toBeDefined();
  });

  it('test getLibRightIcon', () => {
    let res = component.getLibRightIcon(false);
    expect(res).toBe(component.libNoIcon);
    res = component.getLibRightIcon(true);
    expect(res).toBe('');
  });

  it('test getEstAfficheSiExiste', () => {
    let res = component.getEstAfficheSiExiste(undefined);
    expect(res).toBeFalsy();
    res = component.getEstAfficheSiExiste(0);
    expect(res).toBeTruthy();
    res = component.getEstAfficheSiExiste(1);
    expect(res).toBeTruthy();
  });

  it('test ngOnChanges', () => {
    component.ngOnChanges();
    expect(component.compteurTest).toBeDefined();
  });
});

const mockOpportunitesVides: IOpportunitesAll = {
  opportunites: undefined,
  opportunitesCorporate: undefined,
  opportunitesMonExpert: undefined
};

const mockOpportunites: IOpportunitesAll = {
  opportunites: {
    aOpportunites: true,
    aPropositionsOuDossierVente: true,
    commentaireOpportunite: 'jj',
    nombreOpportunitesClient: 2,
    nombrePropositionsClient: 2,
    estMigre: false,
    designationCourteClient: 'TT'
  },
  opportunitesCorporate: {
    aAffairesEnCours: true,
    aAppetenceProduits: true,
    aProduitsAProposer: true,
    aPropositions: true,
    nombreAffairesEnCours: 1,
    nombreAppetencesProduits: 2,
    nombreProduitsAProposer: 3,
    nombrePropositions: 4,
    aProjetsFinancement: true,
    nombreProjetsFinancement: 5
  },
  opportunitesMonExpert: 2
};

const mockOpportunitesSansCorp: IOpportunitesAll = {
  opportunites: {
    aOpportunites: true,
    aPropositionsOuDossierVente: true,
    commentaireOpportunite: 'jj',
    nombreOpportunitesClient: 2,
    nombrePropositionsClient: 2,
    estMigre: false,
    designationCourteClient: 'YU'
  },
  opportunitesCorporate: {
    aAffairesEnCours: undefined,
    aAppetenceProduits: undefined,
    aProduitsAProposer: undefined,
    aPropositions: undefined,
    nombreAffairesEnCours: undefined,
    nombreAppetencesProduits: undefined,
    nombreProduitsAProposer: undefined,
    nombrePropositions: undefined,
    aProjetsFinancement: undefined,
    nombreProjetsFinancement: undefined
  },
  opportunitesMonExpert: 0
};

const mockPointAccesStateVide: BusinessModelsUtilsUi.IDataPointAccesState[] = [
  {
    id: 'tets',
    dataPointAcces: {
      disabled: false,
      label: ''
    }
  }
];

const mockPointAccesStateComplete: BusinessModelsUtilsUi.IDataPointAccesState[] = [
  {
    id: CONFIG_LANCEMENT_DOSSIER_VENTE_ID,
    dataPointAcces: {
      disabled: false,
      label: ''
    }
  },
  {
    id: CONFIG_LANCEMENT_PROPOSITIONCOM_ID,
    dataPointAcces: {
      disabled: false,
      label: ''
    }
  },
  {
    id: CONFIG_LANCEMENT_CR_ET_OPPORTUNITES_ID,
    dataPointAcces: {
      disabled: false,
      label: ''
    }
  },
  {
    id: CONFIG_LANCEMENT_GESTION_AFFAIRES_ID,
    dataPointAcces: {
      disabled: false,
      label: ''
    }
  },
  {
    id: CONFIG_LANCEMENT_REVUE_ID,
    dataPointAcces: {
      disabled: false,
      label: ''
    }
  },
  {
    id: CONFIG_SUIVI_MONEXPERT_ID,
    dataPointAcces: {
      disabled: false,
      label: ''
    }
  }
];
