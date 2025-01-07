import { CurrencyPipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { IContext } from '../../models/models/context.model';
import { RessourceDemandemulticanalsrvV1RestitutionCompteur } from '../../myway-rest-it/demandemulticanalsrvv1/models/demandemulticanalsrvv1.restitutionCompteur.models';
import { DemandemulticanalsrvV1RestitutionCompteurService } from '../../myway-rest-it/demandemulticanalsrvv1/services/demandemulticanalsrvv1.restitutionCompteur.service';
import { RessourceEntitetitulaireV2Recherche } from '../../myway-rest-it/entitetitulairev2/models/entitetitulairev2.recherche.models';
import { EntitetitulaireV2RechercheService } from '../../myway-rest-it/entitetitulairev2/services/entitetitulairev2.recherche.service';
import { RessourceOffreV2EnveloppeOffre } from '../../myway-rest-it/offrev2/models/offrev2.enveloppeOffre.models';
import { OffreV2EnveloppeOffreService } from '../../myway-rest-it/offrev2/services/offrev2.enveloppeOffre.service';
import { RessourceReclamationV1CompteurClient } from '../../myway-rest-it/reclamationV1/models/reclamationv1.compteurClient.models';
import { ReclamationV1CompteurClientService } from '../../myway-rest-it/reclamationV1/services/reclamationv1.compteurClient.service';
import { RessourceSurveillancerisqueV2Indicateur } from '../../myway-rest-it/surveillancerisquev2/models/surveillancerisquev2.indicateur.models';
import { SurveillancerisqueV2IndicateurService } from '../../myway-rest-it/surveillancerisquev2/services/surveillancerisquev2.indicateur.service';
import { RessourceSynthesecorporateV1DonneeDossierPartage } from '../../myway-rest-it/synthesecorporatev1/models/synthesecorporatev1.donneeDossierPartage.models';
import { RessourceSynthesecorporateV1InfosRisqueAlerte } from '../../myway-rest-it/synthesecorporatev1/models/synthesecorporatev1.infosRisqueAlerte.models';
import { SynthesecorporateV1DonneeDossierPartageService } from '../../myway-rest-it/synthesecorporatev1/services/synthesecorporatev1.donneeDossierPartage.service';
import { SynthesecorporateV1InfosRisqueAlerteService } from '../../myway-rest-it/synthesecorporatev1/services/synthesecorporatev1.infosRisqueAlerte.service';
import { RessourceTierscorporateservicV1ScoringProspect } from '../../myway-rest-it/tierscorporateservicv1/models/tierscorporateservicv1.scoringProspect.models';
import { TierscorporateservicV1ScoringProspectService } from '../../myway-rest-it/tierscorporateservicv1/services/tierscorporateservicv1.scoringProspect.service';
import { RessourceTierscorporateV1BanqueJudiciaire } from '../../myway-rest-it/tierscorporatev1/models/tierscorporatev1.banqueJudiciaire.models';
import { RessourceTierscorporateV1PotentielProspect } from '../../myway-rest-it/tierscorporatev1/models/tierscorporatev1.potentielProspect.models';
import { TierscorporateV1BanqueJudiciaireService } from '../../myway-rest-it/tierscorporatev1/services/tierscorporatev1.banqueJudiciaire.service';
import { TierscorporateV1PotentielProspectService } from '../../myway-rest-it/tierscorporatev1/services/tierscorporatev1.potentielProspect.service';
import { RisquesAlertesBusinessService } from './risques-alertes-business.service';
import { DataUtilsService } from '../utils/data-utils.service';
registerLocaleData(localeFr);

describe('RisquesAlertesBusinessService', () => {
  let service: RisquesAlertesBusinessService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        RisquesAlertesBusinessService,
        DataUtilsService,
        {
          provide: EntitetitulaireV2RechercheService,
          useValue: mockEntitetitulaireV2RechercheService
        },
        {
          provide: SynthesecorporateV1InfosRisqueAlerteService,
          useValue: mockSynthesecorporateV1InfosRisqueAlerteService
        },
        {
          provide: SurveillancerisqueV2IndicateurService,
          useValue: mockSurveillancerisqueV2IndicateurService
        },
        {
          provide: TierscorporateV1BanqueJudiciaireService,
          useValue: mockTierscorporateV1BanqueJudiciaireService
        },
        {
          provide: TierscorporateV1PotentielProspectService,
          useValue: mockMockTierscorporateV1PotentielProspectService
        },
        {
          provide: TierscorporateservicV1ScoringProspectService,
          useValue: mockTierscorporateservicV1ScoringProspectService
        },
        {
          provide: ReclamationV1CompteurClientService,
          useValue: mockReclamationV1CompteurClientService
        },
        {
          provide: DemandemulticanalsrvV1RestitutionCompteurService,
          useValue: mockDemandemulticanalsrvV1RestitutionCompteurService
        },
        {
          provide: OffreV2EnveloppeOffreService,
          useValue: mockOffreV2EnveloppeOffreService
        },
        {
          provide: SynthesecorporateV1DonneeDossierPartageService,
          useValue: mockSynthesecorporateV1DonneeDossierPartageService
        },
        { provide: CurrencyPipe, useValue: mockCurrencyPipe },
        { provide: LOCALE_ID, useValue: 'fr-FR' }
      ]
    }).compileComponents();
    service = TestBed.inject(RisquesAlertesBusinessService);
  }));

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('test supprimerEnveloppeOffre', () => {
    jest
      .spyOn(mockOffreV2EnveloppeOffreService, 'deleteEnveloppeOffre')
      .mockReturnValue(of(mockRessourceOffreV2EnveloppeOffreEnveloppeOffreClotureReponse));
    service.supprimerEnveloppeOffre(1, '12', 12, '12', 4, 5).subscribe(res => {
      expect(res).toBeTruthy();
    });
  });

  it('test getAlertes', () => {
    jest.spyOn(mockSynthesecorporateV1InfosRisqueAlerteService, 'getInfosRisqueAlerte').mockReturnValue(of(mockRisqueAlerteFull2));
    jest.spyOn(mockReclamationV1CompteurClientService, 'getCompteurClient').mockReturnValue(of(mockCompteurReclamation));
    service.getAlertes('11315', '1', false).subscribe(_res => {
      expect(_res).toBeDefined();
    });
  });

  it('test getIndicateurs', () => {
    jest.spyOn(mockEntitetitulaireV2RechercheService, 'getRecherche').mockReturnValue(of(mockRechercheEntiteTitulaire));
    jest.spyOn(mockSynthesecorporateV1InfosRisqueAlerteService, 'getInfosRisqueAlerte').mockReturnValue(of(mockRisqueAlerteFull));
    jest.spyOn(mockTierscorporateservicV1ScoringProspectService, 'getScoringProspect').mockReturnValue(of(mockScoring));
    jest.spyOn(mockMockTierscorporateV1PotentielProspectService, 'getPotentielProspect').mockReturnValue(of(mockPotentielProspect));
    jest.spyOn(mockSurveillancerisqueV2IndicateurService, 'getIndicateur').mockReturnValue(of(mockIndicateursSurveillance));
    jest.spyOn(mockTierscorporateV1BanqueJudiciaireService, 'getBanqueJudiciaire').mockReturnValue(of(mockBanqueJudiciaireTrue));
    jest.spyOn(mockSynthesecorporateV1DonneeDossierPartageService, 'getAlertDossierAttenteValid').mockReturnValue(of(mockDonneeDossierPartage));
    jest.spyOn(mockDemandemulticanalsrvV1RestitutionCompteurService, 'getCompteurSyntheseClient').mockReturnValue(of(mockCompteurDemandeMyFlow));
    service.getIndicateurs(mockContextProspect).subscribe(_res => {
      expect(_res).toBeDefined();
    });

    service.getIndicateurs(mockContextClient).subscribe(_res => {
      expect(_res).toBeDefined();
    });

    jest
      .spyOn(mockMockTierscorporateV1PotentielProspectService, 'getPotentielProspect')
      .mockReturnValue(of(mockRessourceTierscorporateV1PotentielProspectErreurHabilitation));
    service.getIndicateurs(mockContextProspect).subscribe(_res => {
      expect(_res).toBeDefined();
    });

    jest
      .spyOn(mockMockTierscorporateV1PotentielProspectService, 'getPotentielProspect')
      .mockReturnValue(of(mockRessourceTierscorporateV1PotentielProspectErreur));
    service.getIndicateurs(mockContextProspect).subscribe(_res => {
      expect(_res).toBeDefined();
    });
  });

  it('test getAlertesEtIndicateurs', () => {
    jest.spyOn(mockSynthesecorporateV1InfosRisqueAlerteService, 'getInfosRisqueAlerte').mockReturnValue(of(mockRisqueAlerteFull2));
    jest.spyOn(mockTierscorporateservicV1ScoringProspectService, 'getScoringProspect').mockReturnValue(of(mockScoring));
    jest.spyOn(mockMockTierscorporateV1PotentielProspectService, 'getPotentielProspect').mockReturnValue(of(mockPotentielProspect));
    jest.spyOn(mockSurveillancerisqueV2IndicateurService, 'getIndicateur').mockReturnValue(of(mockIndicateursSurveillance));
    jest.spyOn(mockTierscorporateV1BanqueJudiciaireService, 'getBanqueJudiciaire').mockReturnValue(of(mockBanqueJudiciaireTrue));
    jest.spyOn(mockSynthesecorporateV1DonneeDossierPartageService, 'getAlertDossierAttenteValid').mockReturnValue(of(mockDonneeDossierPartage));
    jest.spyOn(mockReclamationV1CompteurClientService, 'getCompteurClient').mockReturnValue(of(mockCompteurReclamation));
    jest.spyOn(mockDemandemulticanalsrvV1RestitutionCompteurService, 'getCompteurSyntheseClient').mockReturnValue(of(mockCompteurDemandeMyFlow1));

    service.getAlertesEtIndicateurs(mockContextProspect).subscribe(_res => {
      expect(_res).toBeDefined();
    });
    jest.spyOn(mockDemandemulticanalsrvV1RestitutionCompteurService, 'getCompteurSyntheseClient').mockReturnValue(of(mockCompteurDemandeMyFlowError));
    jest.spyOn(mockTierscorporateV1BanqueJudiciaireService, 'getBanqueJudiciaire').mockReturnValue(of(mockBanqueJudiciaireError));
    service.getAlertesEtIndicateurs(mockContextClient).subscribe(_res => {
      expect(_res).toBeDefined();
      expect(_res.dataIndicateurs.messages.length).toBe(1);
    });

    jest
      .spyOn(mockMockTierscorporateV1PotentielProspectService, 'getPotentielProspect')
      .mockReturnValue(of(mockRessourceTierscorporateV1PotentielProspectErreurHabilitation));
    service.getAlertesEtIndicateurs(mockContextProspect).subscribe(_res => {
      expect(_res).toBeDefined();
    });

    jest
      .spyOn(mockMockTierscorporateV1PotentielProspectService, 'getPotentielProspect')
      .mockReturnValue(of(mockRessourceTierscorporateV1PotentielProspectErreur));
    service.getAlertesEtIndicateurs(mockContextProspect).subscribe(_res => {
      expect(_res).toBeDefined();
    });
  });

  it('test infosAlerteRestToApp', () => {
    let res = service.infosAlerteRestToApp(undefined, true, null, null);

    res = service.infosAlerteRestToApp(
      mockRisqueAlerteVide,
      true,
      null,
      mockCompteurReclamationVide
    );
    expect(res).toBeDefined();

    res = service.infosAlerteRestToApp(
      mockRisqueAlerteFull,
      false,
      null,
      mockCompteurReclamation1
    );
    expect(res).toBeDefined();

    res = service.infosAlerteRestToApp(
      mockRisqueAlerteFull,
      true,
      null,
      mockCompteurReclamation
    );
    expect(res).toBeDefined();

    res = service.infosAlerteRestToApp(
      mockRisqueAlerteFull,
      false,
      null,
      mockCompteurReclamation
    );
    expect(res).toBeDefined();

    res = service.infosAlerteRestToApp(
      mockRisqueAlerteFull2,
      false,
      null,
      mockCompteurReclamation
    );
    expect(res).toBeDefined();
  });

  it('test infoIndicateurRestToApp', () => {
    let res = service.infoIndicateurRestToApp(undefined, true);
    expect(res).toBeDefined();
    expect(res.length).toBe(0);

    res = service.infoIndicateurRestToApp(mockRisqueAlerteVide, true);
    expect(res).toBeDefined();

    res = service.infoIndicateurRestToApp(mockRisqueAlerteFull, true);
    expect(res).toBeDefined();

    res = service.infoIndicateurRestToApp(mockRisqueAlerteFull, false);
    expect(res).toBeDefined();

    res = service.infoIndicateurRestToApp(mockRisqueAlerteFull2, true);
    expect(res).toBeDefined();

    res = service.infoIndicateurRestToApp(mockRisqueAlerteFull2, false);
    expect(res).toBeDefined();
  });

  it('test getOffreEnInstanceRestToApp', () => {
    let res = service.getOffreEnInstanceRestToApp('', undefined, '1');
    expect(res).toBeDefined();
    expect(res.length).toBe(0);

    res = service.getOffreEnInstanceRestToApp(
      '',
      mockRisqueAlerteVide.offreEnInstance,
      '1'
    );
    expect(res).toBeDefined();
    expect(res.length).toBe(0);

    res = service.getOffreEnInstanceRestToApp(
      '',
      mockRisqueAlerteFull.offreEnInstance,
      '1'
    );
    expect(res).toBeDefined();
    expect(res.length).toBe(0);

    res = service.getOffreEnInstanceRestToApp(
      '',
      mockRisqueAlerteFull.offreEnInstance,
      '1'
    );
    expect(res).toBeDefined();
    expect(res.length).toBe(0);

    res = service.getOffreEnInstanceRestToApp(
      '',
      mockRisqueAlerteFull2.offreEnInstance,
      '1'
    );
    expect(res).toBeDefined();
    expect(res.length).toBe(1);
  });

  it('test infoEntitesRPMToApp', () => {
    let res = service.infoEntitesRPMToApp(undefined);
    expect(res).toBeDefined();
    expect(res.length).toBe(0);

    res = service.infoEntitesRPMToApp(mockRechercheEntiteTitulaire);
    expect(res).toBeDefined();
    expect(res.length).toBe(2);
  });

  it('test getDatasBadLoans', () => {
    let res = service.getDatasBadLoans(undefined);
    expect(res).toBeDefined();
    expect(res.length).toBe(0);

    res = service.getDatasBadLoans(mockIndicateursSurveillanceVide);
    expect(res).toBeDefined();
    expect(res.length).toBe(0);

    res = service.getDatasBadLoans(mockIndicateursSurveillance);
    expect(res).toBeDefined();
    expect(res.length).toBe(
      mockIndicateursSurveillance.listeConsultationIndicateur.length
    );
  });

  it('test getIndicBadLoans', () => {
    let res = service.getIndicBadLoans(undefined);
    expect(res).toBeUndefined();

    res = service.getIndicBadLoans(mockIndicateursSurveillanceVide);
    expect(res).toBeUndefined();

    res = service.getIndicBadLoans(mockIndicateursSurveillance);
    expect(res).toBeDefined();
  });

  it('test getIndicBanqueJudiciaire', () => {
    let res = service.getIndicBanqueJudiciaire(undefined);
    expect(res).toBeUndefined();

    res = service.getIndicBanqueJudiciaire(mockBanqueJudiciaireFalse);
    expect(res).toBeUndefined();

    res = service.getIndicBanqueJudiciaire(mockBanqueJudiciaireTrue);
    expect(res).toBeDefined();
  });

  it('test getDatasTopLF', () => {
    let res = service.getDatasTopLF(undefined);
    expect(res).toBeDefined();

    res = service.getDatasTopLF(mockLeverageFinanceTrue);
    expect(res).toBeDefined();

    res = service.getDatasTopLF(mockLeverageFinanceTrueBadDate);
    expect(res).toBeDefined();
  });

  it('test getHasTopLF', () => {
    let res = service.getHasTopLF(undefined);
    expect(res).toBeFalsy();

    res = service.getHasTopLF(mockLeverageFinanceTrue);
    expect(res).toBeTruthy();

    res = service.getHasTopLF(mockLeverageFinanceFalse);
    expect(res).toBeFalsy();
  });

  it('test getIndicPotentielProspect', () => {
    let res = service.getIndicPotentielProspect(undefined);
    expect(res).toBeFalsy();

    res = service.getIndicPotentielProspect(
      mockRessourceTierscorporateV1PotentielProspect
    );
    expect(res).toBeTruthy();

    res = service.getIndicPotentielProspect(
      mockRessourceTierscorporateV1PotentielProspectFalse
    );
    expect(res).toBeFalsy();
  });

  it('test getIndicScoringProspect', () => {
    let res = service.getIndicScoringProspect(undefined);
    expect(res).toBeDefined();

    res = service.getIndicScoringProspect(
      mockRessourceTierscorporateservicV1ScoringProspect
    );
    expect(res).toBeDefined();
    expect(res.length).toBe(3);

    res = service.getIndicScoringProspect(
      mockRessourceTierscorporateservicV1ScoringProspectFalse
    );
    expect(res).toBeDefined();
    expect(res.length).toBe(0);
  });
});


const mockContextProspect: IContext = {
  codeAgent: 'A',
  codeEtablissement: '11315',
  codeMarche: '',
  identifiantEdsAgent: 0,
  identifiantPersonne: '0',
  dataRecherchePersonne: undefined,
  estClient: false,
  estPersonnePhysique: false,
  estProspect: true,
  estTiers: false,
  identifiantNationalAgent: ''
};

const mockContextClient: IContext = {
  codeAgent: 'B',
  codeEtablissement: '11316',
  codeMarche: '',
  identifiantEdsAgent: 0,
  identifiantPersonne: '0',
  dataRecherchePersonne: undefined,
  estClient: true,
  estPersonnePhysique: false,
  estProspect: false,
  estTiers: false,
  identifiantNationalAgent: ''
};

const mockRessourceOffreV2EnveloppeOffreEnveloppeOffreClotureReponse: RessourceOffreV2EnveloppeOffre.EnveloppeOffreClotureReponse = {
  dateClotureOffre: '12',
  identifiantProduitService: 1,
  numeroOffre: 2
};

const mockCompteurReclamation: RessourceReclamationV1CompteurClient.CompteurClient = {
  nombreReclamation: 2,
  indicateurBascule: false
};

const mockCompteurReclamation1: RessourceReclamationV1CompteurClient.CompteurClient = {
  nombreReclamation: 1,
  indicateurBascule: false
};

const mockCompteurReclamationVide: RessourceReclamationV1CompteurClient.CompteurClient = {
  nombreReclamation: 0,
  indicateurBascule: false
};

const mockPotentielProspect: RessourceTierscorporateV1PotentielProspect.PotentielProspect = {
  codeEtablissement: '',
  dateCreation: '',
  dateMaj: '',
  estProspect: true,
  identifiantAgentAppliCreation: '',
  identifiantAgentAppliMaj: '',
  identifiantPersonne: 0,
  rangPrioriteProspect: 12
};

const mockScoring: RessourceTierscorporateservicV1ScoringProspect.ScoringProspect = {
  codeEtablissement: '',
  codeOrigineCreation: '',
  dateRafraichissementScore: '11012020',
  dateTransformationEnClient: '',
  identifiantPersonne: 0,
  indicateurActivation: '',
  indicateurAppetence: 'O',
  indicateurDefaillance: 'O',
  numeroChrono: 0,
  numeroNICSiret: '',
  referenceOrigineCreation: '',
  scoreActivation: '10',
  scoreAppetence: '10',
  scoreDefaillance: '10'
};

const mockRessourceTierscorporateV1PotentielProspectErreurHabilitation: RessourceTierscorporateV1PotentielProspect.PotentielProspect = ({
  codeHttp: 400,
  codeLibelle: 'SendRequest',
  libelle: 'kjkjjk',
  valeurs: [
    {
      codeErreur: 1,
      codeLibelle: 'ECH.ERREUR_RAISA06',
      libelle: 'Agent non autorisé 11315-9001101-SHPIQ1. (Erreur PID-PQ01BAAC)'
    }
  ]
} as unknown) as RessourceTierscorporateV1PotentielProspect.PotentielProspect;

const mockRessourceTierscorporateV1PotentielProspectErreur: RessourceTierscorporateV1PotentielProspect.PotentielProspect = ({
  codeHttp: 500,
  codeLibelle: 'SendRequest',
  libelle: 'kjkjjk',
  valeurs: [
    {
      codeErreur: 1,
      codeLibelle: 'ECH.ERREUR_RAISA06',
      libelle: 'lkjlkjlkjlk'
    }
  ]
} as unknown) as RessourceTierscorporateV1PotentielProspect.PotentielProspect;

const mockRessourceTierscorporateV1PotentielProspect: RessourceTierscorporateV1PotentielProspect.PotentielProspect = {
  codeEtablissement: 'dsqf',
  identifiantPersonne: 564654654,
  rangPrioriteProspect: 2,
  dateCreation: '2021-03-03',
  identifiantAgentAppliCreation: '12345',
  dateMaj: '2021-03-03',
  identifiantAgentAppliMaj: '12345',
  estProspect: true
};

const mockRessourceTierscorporateV1PotentielProspectFalse: RessourceTierscorporateV1PotentielProspect.PotentielProspect = {
  codeEtablissement: undefined,
  identifiantPersonne: undefined,
  rangPrioriteProspect: undefined,
  dateCreation: undefined,
  identifiantAgentAppliCreation: undefined,
  dateMaj: undefined,
  identifiantAgentAppliMaj: undefined,
  estProspect: false
};

const mockRessourceTierscorporateservicV1ScoringProspect: RessourceTierscorporateservicV1ScoringProspect.ScoringProspect = {
  codeEtablissement: 'dsqf',
  identifiantPersonne: 564654654,
  numeroChrono: 0,
  codeOrigineCreation: undefined,
  referenceOrigineCreation: undefined,
  numeroNICSiret: undefined,
  dateTransformationEnClient: '2021-10-01',
  scoreActivation: '7',
  scoreAppetence: '9',
  scoreDefaillance: '1',
  dateRafraichissementScore: '2021-10-01',
  indicateurActivation: undefined,
  indicateurDefaillance: undefined,
  indicateurAppetence: undefined
};

const mockRessourceTierscorporateservicV1ScoringProspectFalse: RessourceTierscorporateservicV1ScoringProspect.ScoringProspect = {
  codeEtablissement: undefined,
  identifiantPersonne: undefined,
  numeroChrono: undefined,
  codeOrigineCreation: undefined,
  referenceOrigineCreation: undefined,
  numeroNICSiret: undefined,
  dateTransformationEnClient: undefined,
  scoreActivation: undefined,
  scoreAppetence: undefined,
  scoreDefaillance: undefined,
  dateRafraichissementScore: undefined,
  indicateurActivation: undefined,
  indicateurDefaillance: undefined,
  indicateurAppetence: undefined
};

const mockLeverageFinanceTrueBadDate: RessourceSynthesecorporateV1InfosRisqueAlerte.LeverageFinance = {
  dateRatio: '01010101',
  estLeverageFinance: true,
  ratioLevierBrut: 0.1,
  ratioLevierNet: 5
};

const mockLeverageFinanceTrue: RessourceSynthesecorporateV1InfosRisqueAlerte.LeverageFinance = {
  dateRatio: '2021-03-03',
  estLeverageFinance: true,
  ratioLevierBrut: 0.1,
  ratioLevierNet: 5
};

const mockLeverageFinanceFalse: RessourceSynthesecorporateV1InfosRisqueAlerte.LeverageFinance = {
  dateRatio: '2021-03-03',
  estLeverageFinance: false,
  ratioLevierBrut: 0.1,
  ratioLevierNet: 5
};

const mockBanqueJudiciaireFalse: RessourceTierscorporateV1BanqueJudiciaire.BanqueJudiciaire = {
  indicateurBanqueJudiciaire: false,
  dateProcedure: undefined,
  idPersonneAdminJudiciaire: undefined,
  nomMandataireJudiciaire: '',
  typeGestion: undefined,
  typeProcedure: undefined
};

const mockBanqueJudiciaireTrue: RessourceTierscorporateV1BanqueJudiciaire.BanqueJudiciaire = {
  indicateurBanqueJudiciaire: true,
  dateProcedure: undefined,
  idPersonneAdminJudiciaire: undefined,
  nomMandataireJudiciaire: '',
  typeGestion: undefined,
  typeProcedure: undefined
};

const mockIndicateursSurveillanceVide: RessourceSurveillancerisqueV2Indicateur.Indicateur = {
  compteRendu: undefined,
  listeDonneeComplementaire: undefined,
  listeConsultationIndicateur: []
};

const mockIndicateursSurveillance: RessourceSurveillancerisqueV2Indicateur.Indicateur = {
  compteRendu: undefined,
  listeDonneeComplementaire: undefined,
  listeConsultationIndicateur: [
    {
      codeIndicateur: 'kjkj',
      libelleDeclencheurSurv: 'kjkj',
      descriptionDeclencheurSurv: 'kljlk',
      codeOrigineIndicateur: undefined,
      dateDebutValidite: '2021-04-22',
      dateFinValidite: undefined,
      designationClient: undefined,
      idExterneIndicateur: undefined,
      identifiantPersonne: undefined,
      siEligibIndicateurCommunautaire: undefined,
      siEligibIndicateurEtablissement: undefined
    }
  ]
};

const mockRisqueAlerteFull: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte = {
  informationO2S: 'E',
  mif: {
    codeCouleur: 'V',
    libelleMessage: 'OK'
  },
  questionnaireEsg: {
    dateValidation: '01/01/2024',
    indicateurObsolescence: false
  },
  nombreDemandesReclamations: 3,
  noteBale2: 'A',
  fibenBDF: 'B',
  fibenBDFPrecedent: 'B',
  dateNotationPrecedente: '2017-10-01',
  saisieATD: 'Oui',
  interditBancaire: 'Oui',
  dateNotation: '2018-10-01',
  dateNoteBale2: '2019-06-27',
  codeErreur: '000',
  codeEtabBanqueEntiteJuridique: '13135',
  identifiantPersonne: 9038489,
  numeroChronoProfessionnel: 1,
  dateArreteCalculPNB: '2019-11-30',
  montantPNBPersonneCalcule12MN: 308100,
  montantPNBPersonneCalcule3112N1: 275441,
  montantPNBPersonneCalcule12MN1: 273406,
  indicateurActivitePersonne: 'O',
  codeIndicateurPersonnePSActif: null,
  codeCouleurTopCC: 'V',
  libelleCodeCouleurTopCC: 'Top CC: Complet - vert',
  indicateurSocietaire: '1',
  identifiantLEI: 'F',
  dateFinValiditeLEI: '2019-11-30',
  codeNiveauWatchListBanque: null,
  codeNiveauWatchListLocale: '3',
  codeNiveauWatchListNational: null,
  codePresenceDansRPMOuFDS: 'R',
  codeSLE: null,
  codeTypeRetourPTT: '1',
  indicExistenceOppoSurContrat: '1',
  indicateurOppoInterditBancaire: 'O',
  indicateurPresenceGAE: 'O',
  indicateurPresencePreventis: 'O',
  indicateurWatchListBanqueRef: 'O',
  indicateurWatchListLocale: '0',
  indicateurWatchListNational: null,
  nombreRejets: 1,
  dateDerniereMajRevAnnuel: '2019-11-30',
  codePhaseRecouvrement: 'C',
  soldeActualise: 12,
  codeDegreSensibilitePersonne: 'N',
  codeNiveauSatisfaction: '1',
  indicateurAlerteReclamation: '1',
  codePresenceCompteDesherence: '1',
  dateDecesPersonnePhysique: null,
  libelleCourtSLE: 'jkjk',
  optinParCourrierElectronique: '0',
  indicateurEnvoiSMSOuFax: '0',
  codeNatureLienReglementaire: '',
  typeGroupe: '',
  libelleCodeNatLienRegl: 'jhjhj',
  libelleTypeGroupe: '',
  leverageFinance: {
    dateRatio: '2021-03-03',
    estLeverageFinance: true,
    ratioLevierBrut: 5,
    ratioLevierNet: 4
  },
  offreEnInstance: {
    listeInfoEntiteTitulaire: [
      {
        codeEtablissement: '',
        codeTypeUsage: '',
        designationBancaire: 'g',
        identifiantPersonne: 1,
        libelleUsage: '',
        numeroEntiteTitulaire: 1,
        listeInfoOffre: []
      },
      {
        codeEtablissement: '',
        codeTypeUsage: '',
        designationBancaire: 'r',
        identifiantPersonne: 2,
        libelleUsage: '',
        numeroEntiteTitulaire: 2,
        listeInfoOffre: []
      }
    ]
  },
  estDoubleRelation: false,
  tarificationN: {
    dateDebut: '2023-01-01',
    dateFin: '2023-12-31',
    montantaRemiser: 0,
    montantaTariferInitial: 12,
    montantaTariferPrix: 10
  },
  tarificationN1: {
    dateDebut: '2022-01-01',
    dateFin: '2022-12-31',
    montantaRemiser: 0,
    montantaTariferInitial: 12,
    montantaTariferPrix: 10
  },
  modeGestionQpim: 'jkjkj',
  antiCorruption: {
    dateCreation: '2024-04-01',
    dateFin: undefined,
    statut: 'I'
  }
};

const mockBanqueJudiciaireError = ({
  name: 'HttpErrorResponse',
  message: 'un message'
} as any) as RessourceTierscorporateV1BanqueJudiciaire.BanqueJudiciaire;

const mockCompteurDemandeMyFlowError = ({
  name: 'HttpErrorResponse',
  message: 'un message'
} as any) as RessourceDemandemulticanalsrvV1RestitutionCompteur.DemandesCompteur;

const mockCompteurDemandeMyFlow: RessourceDemandemulticanalsrvV1RestitutionCompteur.DemandesCompteur = {
  nbDemandes: 5
};

const mockCompteurDemandeMyFlow1: RessourceDemandemulticanalsrvV1RestitutionCompteur.DemandesCompteur = {
  nbDemandes: 1
};

const mockDonneeDossierPartage: RessourceSynthesecorporateV1DonneeDossierPartage.DonneeDossierPartage = {
  codeEtablissement: '13135',
  numeroPersonne: '9038489',
  alertDossierAControler: true
};

const mockRisqueAlerteFull2: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte = {
  informationO2S: 'O',
  mif: {
    codeCouleur: 'R',
    libelleMessage: 'KO'
  },
  questionnaireEsg: {
    dateValidation: '01/01/2021',
    indicateurObsolescence: true
  },
  nombreDemandesReclamations: 0,
  noteBale2: 'A',
  fibenBDF: 'B',
  fibenBDFPrecedent: 'B',
  dateNotationPrecedente: '2017-10-01',
  saisieATD: 'Oui',
  interditBancaire: 'Oui',
  dateNotation: '2018-10-01',
  dateNoteBale2: '2019-06-27',
  codeErreur: '000',
  codeEtabBanqueEntiteJuridique: '13135',
  identifiantPersonne: 9038489,
  codeCouleurTopCC: ' ',
  libelleCodeCouleurTopCC: 'Top CC: non calculé - gris',
  numeroChronoProfessionnel: 1,
  dateArreteCalculPNB: '2019-11-30',
  montantPNBPersonneCalcule12MN: 308100,
  montantPNBPersonneCalcule3112N1: 275441,
  montantPNBPersonneCalcule12MN1: 308100,
  indicateurActivitePersonne: 'N',
  codeIndicateurPersonnePSActif: null,
  indicateurSocietaire: '1',
  identifiantLEI: 'F',
  dateFinValiditeLEI: '2019-11-30',
  codeNiveauWatchListBanque: null,
  codeNiveauWatchListLocale: '1',
  codeNiveauWatchListNational: null,
  codePresenceDansRPMOuFDS: 'F',
  codeSLE: null,
  codeTypeRetourPTT: '1',
  indicExistenceOppoSurContrat: '1',
  indicateurOppoInterditBancaire: 'O',
  indicateurPresenceGAE: 'O',
  indicateurPresencePreventis: 'O',
  indicateurWatchListBanqueRef: 'O',
  indicateurWatchListLocale: 'O',
  indicateurWatchListNational: null,
  nombreRejets: 1,
  dateDerniereMajRevAnnuel: '2019-11-30',
  codePhaseRecouvrement: 'A',
  soldeActualise: 12,
  codeDegreSensibilitePersonne: 'A',
  codeNiveauSatisfaction: '3',
  indicateurAlerteReclamation: '1',
  codePresenceCompteDesherence: '2',
  dateDecesPersonnePhysique: null,
  libelleCourtSLE: 'jkjk',
  optinParCourrierElectronique: '1',
  indicateurEnvoiSMSOuFax: '1',
  codeNatureLienReglementaire: '',
  typeGroupe: '',
  libelleCodeNatLienRegl: 'jhjhj',
  libelleTypeGroupe: 'fefzefze',
  leverageFinance: {
    dateRatio: undefined,
    estLeverageFinance: false,
    ratioLevierBrut: 0,
    ratioLevierNet: 0
  },
  offreEnInstance: {
    listeInfoEntiteTitulaire: [
      {
        codeEtablissement: '',
        codeTypeUsage: '',
        designationBancaire: 'g',
        identifiantPersonne: 1,
        libelleUsage: '',
        numeroEntiteTitulaire: 1,
        listeInfoOffre: [
          {
            codeGuichet: '',
            codeTypeProduitService: 'hgh',
            libelleOffre: 'libo',
            numeroOffre: 0,
            referenceProduitService: 'fzefzef',
            commentaire: 'kjk'
          }
        ]
      },
      {
        codeEtablissement: '',
        codeTypeUsage: '',
        designationBancaire: 'r',
        identifiantPersonne: 2,
        libelleUsage: '',
        numeroEntiteTitulaire: 2,
        listeInfoOffre: []
      }
    ]
  },
  estDoubleRelation: false,
  tarificationN: undefined,
  tarificationN1: undefined,
  modeGestionQpim: '',
  antiCorruption: null
};

const mockRechercheEntiteTitulaire: RessourceEntitetitulaireV2Recherche.RechercheEntiteTitulaire = {
  listeEntiteTitulaire: [
    {
      identifiantEntiteTitulaire: 502022748,
      codeEtablissement: '11315',
      designationEntiteTitulaire: 'BEIMAVVC CO',
      codeUsageEntiteTitulaire: '2',
      modeCompositionEntiteTitulaire: '1',
      codeEtatEntiteTitulaire: '0',
      modeCompositionIndivision: null,
      complementDesignationEntiteTitulaire: null,
      identifiantEDSDomiciliation: 139325,
      referenceEDSDomiciliation: 804,
      libelleEDSDomiciliation: 'POLE GRANDS COMPTES',
      dateFermetureEntiteTitulaire: null,
      codePresenceDansRpmOuFds: 'R'
    },
    {
      identifiantEntiteTitulaire: 502022748,
      codeEtablissement: '11315',
      designationEntiteTitulaire: 'BEIMAVVC CO',
      codeUsageEntiteTitulaire: '2',
      modeCompositionEntiteTitulaire: '1',
      codeEtatEntiteTitulaire: '0',
      modeCompositionIndivision: null,
      complementDesignationEntiteTitulaire: null,
      identifiantEDSDomiciliation: 139325,
      referenceEDSDomiciliation: 804,
      libelleEDSDomiciliation: 'POLE GRANDS COMPTES',
      dateFermetureEntiteTitulaire: null,
      codePresenceDansRpmOuFds: 'A'
    },
    {
      identifiantEntiteTitulaire: 502022748,
      codeEtablissement: '11315',
      designationEntiteTitulaire: 'BEIMAVVC CO',
      codeUsageEntiteTitulaire: '1',
      modeCompositionEntiteTitulaire: '3',
      codeEtatEntiteTitulaire: '0',
      modeCompositionIndivision: null,
      complementDesignationEntiteTitulaire: null,
      identifiantEDSDomiciliation: 139325,
      referenceEDSDomiciliation: 804,
      libelleEDSDomiciliation: 'POLE GRANDS COMPTES',
      dateFermetureEntiteTitulaire: null,
      codePresenceDansRpmOuFds: 'R'
    }
  ],
  listeInformationActiviteProf: null
};

const mockRisqueAlerteVide: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte = {
  informationO2S: '',
  mif: null,
  questionnaireEsg: null,
  nombreDemandesReclamations: 0,
  noteBale2: null,
  fibenBDF: null,
  fibenBDFPrecedent: null,
  dateNotationPrecedente: null,
  saisieATD: null,
  interditBancaire: null,
  dateNotation: null,
  dateNoteBale2: null,
  codeErreur: null,
  codeEtabBanqueEntiteJuridique: null,
  identifiantPersonne: null,
  numeroChronoProfessionnel: null,
  dateArreteCalculPNB: null,
  codeCouleurTopCC: 'R',
  libelleCodeCouleurTopCC: 'jkjk',
  montantPNBPersonneCalcule12MN: null,
  montantPNBPersonneCalcule3112N1: null,
  montantPNBPersonneCalcule12MN1: null,
  indicateurActivitePersonne: null,
  codeIndicateurPersonnePSActif: null,
  indicateurSocietaire: null,
  identifiantLEI: null,
  dateFinValiditeLEI: null,
  codeNiveauWatchListBanque: null,
  codeNiveauWatchListLocale: null,
  codeNiveauWatchListNational: null,
  codePresenceDansRPMOuFDS: null,
  codeSLE: null,
  codeTypeRetourPTT: null,
  indicExistenceOppoSurContrat: null,
  indicateurOppoInterditBancaire: null,
  indicateurPresenceGAE: null,
  indicateurPresencePreventis: null,
  indicateurWatchListBanqueRef: null,
  indicateurWatchListLocale: null,
  indicateurWatchListNational: null,
  nombreRejets: null,
  dateDerniereMajRevAnnuel: null,
  codePhaseRecouvrement: null,
  soldeActualise: null,
  codeDegreSensibilitePersonne: null,
  codeNiveauSatisfaction: null,
  indicateurAlerteReclamation: null,
  codePresenceCompteDesherence: null,
  dateDecesPersonnePhysique: null,
  libelleCourtSLE: null,
  optinParCourrierElectronique: null,
  indicateurEnvoiSMSOuFax: null,
  codeNatureLienReglementaire: null,
  typeGroupe: null,
  libelleCodeNatLienRegl: null,
  libelleTypeGroupe: null,
  leverageFinance: null,
  offreEnInstance: {
    listeInfoEntiteTitulaire: []
  },
  estDoubleRelation: false,
  tarificationN: undefined,
  tarificationN1: undefined,
  modeGestionQpim: undefined,
  antiCorruption: null
};

const mockSynthesecorporateV1InfosRisqueAlerteService = {
  getInfosRisqueAlerte: jest.fn(() => of(mockRisqueAlerteFull2))
};

const mockSurveillancerisqueV2IndicateurService = {
  getIndicateur: jest.fn(() => of(mockIndicateursSurveillance))
};

const mockTierscorporateV1BanqueJudiciaireService = {
  getBanqueJudiciaire: jest.fn(() => of(mockBanqueJudiciaireTrue))
};

const mockMockTierscorporateV1PotentielProspectService = {
  getPotentielProspect: jest.fn(() => of(mockPotentielProspect || mockRessourceTierscorporateV1PotentielProspectErreurHabilitation || mockRessourceTierscorporateV1PotentielProspectErreur))
};
const mockTierscorporateservicV1ScoringProspectService = {
  getScoringProspect: jest.fn(() => of(mockScoring))
};

const mockReclamationV1CompteurClientService = {
  getCompteurClient: jest.fn(() => of(mockCompteurReclamation))
};

const mockDemandemulticanalsrvV1RestitutionCompteurService = {
  getCompteurSyntheseClient: jest.fn(() => of(mockCompteurDemandeMyFlow))
};

const mockOffreV2EnveloppeOffreService = {
  deleteEnveloppeOffre: jest.fn(() =>
    of(mockRessourceOffreV2EnveloppeOffreEnveloppeOffreClotureReponse)
  )
};

const mockCurrencyPipe = {
  transform: jest.fn(() => '')
};

const mockEntitetitulaireV2RechercheService = {
  getRecherche: jest.fn(() => of(mockRechercheEntiteTitulaire))
};

const mockSynthesecorporateV1DonneeDossierPartageService = {
  getAlertDossierAttenteValid: jest.fn(() => of(mockDonneeDossierPartage))
};
