import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { INavigationStartItemOutput } from '@oscaiss-pormyway-managers/portal-common';
import { PTMNavigationAgent, SFPointEntreeAgent } from "@oscaiss-pormyway-managers/portal-interface";
import { EntryPointDto } from '@oscaiss-pormyway-managers/socfon-common';
import { of } from 'rxjs';
import {
  CONFIG_AGENDA_RDV_ID,
  CONFIG_FOCUS_ID,
  CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
  CONFIG_LANCEMENT_DOSSIER_VENTE_ID,
  CONFIG_LANCEMENT_DSC_ID,
  CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID,
  CONFIG_MYFLOW_ID
} from '../../models/constantes/processus.constantes';
import { IhmBusinessService } from './ihm-business.service';

describe('IhmBusinessService', () => {
  let service: IhmBusinessService;
  let serviceAgentNavPort: PTMNavigationAgent;
  let pointEntreeService: SFPointEntreeAgent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      providers: [IhmBusinessService, SFPointEntreeAgent, PTMNavigationAgent]
    }).compileComponents();

    service = TestBed.inject(IhmBusinessService);
    serviceAgentNavPort = TestBed.inject(PTMNavigationAgent);
    pointEntreeService = TestBed.inject(SFPointEntreeAgent);
  }));

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('test getDataPointsEntreeState', () => {
    jest
      .spyOn(pointEntreeService, 'getEntryPoints')
      .mockReturnValue(of([mockEntryPointDtoValid]));
    service.getDataPointsEntreeState(['dz'], '').subscribe(_res => {
      expect(_res).toBeDefined();
    });

    jest
      .spyOn(pointEntreeService, 'getEntryPoints')
      .mockReturnValue(of([mockEntryPointDtoEli]));
    service.getDataPointsEntreeState(['dp'], '').subscribe(_res => {
      expect(_res).toBeDefined();
    });

    jest
      .spyOn(pointEntreeService, 'getEntryPoints')
      .mockReturnValue(of(undefined));
    service.getDataPointsEntreeState([''], '').subscribe(_res => {
      expect(_res).toBeDefined();
    });

    expect(pointEntreeService.getEntryPoints).toHaveBeenCalledTimes(3);
  });

  it('debrancherPointLancement should work', () => {
    jest
      .spyOn(serviceAgentNavPort, 'startConfigLancement')
      .mockReturnValue(of(navigationStartItemOutput));
    service.debrancherPointLancement('idConfigLAncement', '45405494');
    service.debrancherPointLancement(CONFIG_LANCEMENT_DOSSIER_VENTE_ID, 'czec');
    service.debrancherPointLancement(CONFIG_LANCEMENT_DSC_ID, 'bnyhnt');
    service.debrancherPointLancement(
      CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
      'vcsv'
    );
    service.debrancherPointLancement(
      CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID,
      '45405494'
    );
    service.debrancherPointLancement(
      CONFIG_AGENDA_RDV_ID,
      '45405494',
      undefined,
      ['2', '455', '6']
    );
    service.debrancherPointLancement(
      CONFIG_MYFLOW_ID,
      '45405494',
      undefined,
      undefined
    );
    service.debrancherPointLancement(
      CONFIG_FOCUS_ID,
      '45405494',
      'fe',
      undefined
    );
    expect(serviceAgentNavPort.startConfigLancement).toHaveBeenCalledTimes(8);
  });
});

const navigationStartItemOutput: INavigationStartItemOutput = {
  idNavigationContext: '',
  idNavigationItem: '',
  processStarted: true
};

const mockEntryPointDtoValid: EntryPointDto = {
  applicationType: undefined,
  authorizations: { code: '', lotCode: '', valid: true },
  categories: undefined,
  configurations: undefined,
  description: '',
  eligibility: {
    criteria: undefined,
    valid: Math.random() <= 0.5,
    validByType: undefined
  },
  deploymentProjectCode: undefined,
  icon: undefined,
  id: '',
  keywords: [],
  label: '',
  codeEtablissement: '',
  unicityControlType: undefined,
  config: {
    id: 'string',
    type: undefined,
    context: undefined,
    browser: undefined,
    contextualLabel: undefined,
    clientView: false,
    standaloneStart: false,
    portalLink: false,
    params: [],
    lisaProcessCode: undefined,
    lisaProcessVersion: undefined,
    lisaStartValue: undefined,
    url: undefined,
    nsdkTransactionCode: undefined,
    nsdkHiddenSummary: false,
    windowsPath: undefined,
    windowsWorkingPath: undefined,
    cultureNetCode: undefined,
    customStartCode: undefined,
    multiLaunch: undefined,
    useClientSet: undefined,
    tabletDisplay: undefined,
    closingActionType: undefined,
    eligibility: undefined,
    techId: '',
    dynamicLabel: false,
    launchWithoutCodeGuichet: false,
    taskInfoOID: '',
    attachDetachAppli: false
  }
};

const mockEntryPointDtoEli: EntryPointDto = {
  applicationType: undefined,
  authorizations: { code: '', lotCode: '', valid: false },
  categories: undefined,
  configurations: undefined,
  description: '',
  eligibility: {
    criteria: undefined,
    valid: true,
    validByType: undefined
  },
  deploymentProjectCode: undefined,
  icon: undefined,
  id: '',
  keywords: [],
  label: '',
  codeEtablissement: '',
  unicityControlType: undefined,
  config: {
    id: 'string',
    type: undefined,
    context: undefined,
    browser: undefined,
    contextualLabel: undefined,
    clientView: false,
    standaloneStart: false,
    portalLink: false,
    params: [],
    lisaProcessCode: undefined,
    lisaProcessVersion: undefined,
    lisaStartValue: undefined,
    url: undefined,
    nsdkTransactionCode: undefined,
    nsdkHiddenSummary: false,
    windowsPath: undefined,
    windowsWorkingPath: undefined,
    cultureNetCode: undefined,
    customStartCode: undefined,
    multiLaunch: undefined,
    useClientSet: undefined,
    tabletDisplay: undefined,
    closingActionType: undefined,
    eligibility: undefined,
    techId: '',
    dynamicLabel: false,
    launchWithoutCodeGuichet: false,
    taskInfoOID: '',
    attachDetachAppli: false
  }
};
