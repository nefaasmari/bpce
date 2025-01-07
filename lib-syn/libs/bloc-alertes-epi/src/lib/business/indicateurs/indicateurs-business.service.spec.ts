import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { SyntheseV2InformationClientService } from '../../myway-rest-it/synthesev2/services/synthesev2.informationClient.service';
import { of } from 'rxjs';
import { RessourceSyntheseV2InformationClient } from '../../myway-rest-it/synthesev2/models/synthesev2.informationClient.models';
import { IndicateursBusinessService } from './indicateurs-business.service';
registerLocaleData(localeFr);

describe('IndicateursBusinessService', () => {
  let service: IndicateursBusinessService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      providers: [
        IndicateursBusinessService,
        {
          provide: SyntheseV2InformationClientService,
          useValue: mockSyntheseV2InformationClientService
        },
        { provide: LOCALE_ID, useValue: 'fr-FR' }
      ]
    }).compileComponents();
    service = TestBed.inject(IndicateursBusinessService);
  }));

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('indicateurs should work', () => {
    const returnValue = service.getDetailIndicateurs('13135', '45405494');
    expect(returnValue).toBeDefined();
  });

  it('test infosIndicateursRestToApp', () => {
    let returnValue = service.infosIndicateursRestToApp(mockIndicateurs);
    expect(returnValue).toBeDefined();
    expect(returnValue.datas).toBeDefined();
    expect(returnValue.datas.length).toEqual(1);

    returnValue = service.infosIndicateursRestToApp(mockIndicateurs2);
    expect(returnValue).toBeDefined();
    expect(returnValue.datas).toBeDefined();
    expect(returnValue.datas.length).toEqual(1);

    returnValue = service.infosIndicateursRestToApp(mockIndicateurs3);
    expect(returnValue).toBeDefined();
    expect(returnValue.datas).toBeDefined();
  });
});

const mockIndicateurs: RessourceSyntheseV2InformationClient.IIndicateur = {
  codeEtatCompletudeDRC: null,
  indicateurAlerteDRC: null,
  libelleEtatDRC: null,
  niveauRisqueInvestisseur: null,
  dateMesureRisqueInvestisseur: null,
  competenceFinanciere: null,
  dateDernierQCF: null,
  indicateurSocietaire: null,
  codeSLE: null,
  libelleSLE: null,
  dateDerniereEnquete: null,
  codeNiveauSatisfaction: null,
  libelleNiveauSatisfaction: null,
  codeAppartenanceReseau: null,
  libelleAppartenanceReseau: null,
  scoreVigilance: null,
  libelleScoreVigilance: null,
  noteBaleII: null,
  detailNoteBaleII: null,
  codeStatutPPE: null,
  libelleStatutPPE: null,
  listeDetailEnqueteSatisfaction: [
    {
      codeEtablissement: '13135',
      numeroClient: 6685677,
      codeNiveauSatisfaction: '1',
      libelleNiveauSatisfaction: 'Très satisfait',
      dateReponseEnquete: '2019-09-03',
      codeNoteRecommandation: '10',
      motifEchange: 'Suivre l_avancement d_un dossier',
      commentaireLibre: null,
      codeSourceEnquete: '12',
      libelleProfilRecommandation: 'kjjk',
      libelleSourceEnquete: 'kjhk'
    }
  ],
  indicateurEngagementDom: null,
  libelleEngagementDom: null,
  listeDetailEngagementDom: null,
  detailCompetenceFinanciere: null,
  codeEtatClientScoring: null,
  codeSourceEnquete: null,
  codeTopCC: null,
  dateClotureDossierSuccession: null,
  detailPrecibleCreditConso: null,
  indicateurBlocageRGPD: null,
  indicateurPersonnePPPMEI: null,
  indicDossierSuccessionCloture: null,
  libelleEtatClientScoring: null,
  libelleEtatDossierSuccession: '',
  libelleNiveauRisqueInvestisseur: '',
  libelleTopCC: ''
};

const mockIndicateurs2: RessourceSyntheseV2InformationClient.IIndicateur = {
  codeEtatCompletudeDRC: null,
  indicateurAlerteDRC: null,
  libelleEtatDRC: null,
  niveauRisqueInvestisseur: null,
  dateMesureRisqueInvestisseur: null,
  competenceFinanciere: null,
  dateDernierQCF: null,
  indicateurSocietaire: null,
  codeSLE: null,
  libelleSLE: null,
  dateDerniereEnquete: null,
  codeNiveauSatisfaction: null,
  libelleNiveauSatisfaction: null,
  codeAppartenanceReseau: null,
  libelleAppartenanceReseau: null,
  scoreVigilance: null,
  libelleScoreVigilance: null,
  noteBaleII: null,
  detailNoteBaleII: null,
  codeStatutPPE: null,
  libelleStatutPPE: null,
  listeDetailEnqueteSatisfaction: [
    {
      codeEtablissement: '13135',
      numeroClient: 6685677,
      codeNiveauSatisfaction: null,
      libelleNiveauSatisfaction: 'dzaddza',
      dateReponseEnquete: '',
      codeNoteRecommandation: '10',
      motifEchange: 'fezeffezf fezf',
      commentaireLibre: 'blabla',
      codeSourceEnquete: '12',
      libelleProfilRecommandation: 'kjjk',
      libelleSourceEnquete: 'kjhk'
    }
  ],
  indicateurEngagementDom: null,
  libelleEngagementDom: null,
  listeDetailEngagementDom: null,
  detailCompetenceFinanciere: null,
  codeEtatClientScoring: null,
  codeSourceEnquete: null,
  codeTopCC: null,
  dateClotureDossierSuccession: null,
  detailPrecibleCreditConso: null,
  indicateurBlocageRGPD: null,
  indicateurPersonnePPPMEI: null,
  indicDossierSuccessionCloture: null,
  libelleEtatClientScoring: null,
  libelleEtatDossierSuccession: '',
  libelleNiveauRisqueInvestisseur: '',
  libelleTopCC: ''
};

const mockIndicateurs3: RessourceSyntheseV2InformationClient.IIndicateur = {
  codeEtatCompletudeDRC: null,
  indicateurAlerteDRC: null,
  libelleEtatDRC: null,
  niveauRisqueInvestisseur: null,
  dateMesureRisqueInvestisseur: null,
  competenceFinanciere: null,
  dateDernierQCF: null,
  indicateurSocietaire: null,
  codeSLE: null,
  libelleSLE: null,
  dateDerniereEnquete: null,
  codeNiveauSatisfaction: null,
  libelleNiveauSatisfaction: null,
  codeAppartenanceReseau: null,
  libelleAppartenanceReseau: null,
  scoreVigilance: null,
  libelleScoreVigilance: null,
  noteBaleII: null,
  detailNoteBaleII: null,
  codeStatutPPE: null,
  libelleStatutPPE: null,
  listeDetailEnqueteSatisfaction: null,
  indicateurEngagementDom: null,
  libelleEngagementDom: null,
  listeDetailEngagementDom: null,
  detailCompetenceFinanciere: null,
  codeEtatClientScoring: null,
  codeSourceEnquete: null,
  codeTopCC: null,
  dateClotureDossierSuccession: null,
  detailPrecibleCreditConso: null,
  indicateurBlocageRGPD: null,
  indicateurPersonnePPPMEI: null,
  indicDossierSuccessionCloture: null,
  libelleEtatClientScoring: null,
  libelleEtatDossierSuccession: '',
  libelleNiveauRisqueInvestisseur: '',
  libelleTopCC: ''
};

const mockInfosClient: RessourceSyntheseV2InformationClient.IInformationClient = {
  coordonnees: undefined,
  titreSousTitre: undefined,
  entretien: undefined,
  opportunite: undefined,
  alerte: undefined,
  indicateur: mockIndicateurs
};

const mockSyntheseV2InformationClientService = {
  getInformationClient: jest.fn(() => of(mockInfosClient))
};
