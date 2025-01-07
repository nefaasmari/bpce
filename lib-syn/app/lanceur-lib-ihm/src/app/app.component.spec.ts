import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  BusinessModelsUtilsUi,
} from '../../../../libs/bloc-alertes-epi/src/lib/models/models/ui-utils.model';
import { ENVIRONMENT, Environment } from '@myway/env';
import { Store } from '@ngxs/store';
import { RessourceDemandemulticanalsrvV1RestitutionCompteur } from '../../../../libs/bloc-alertes-epi/src/lib/myway-rest-it/demandemulticanalsrvv1/models/demandemulticanalsrvv1.restitutionCompteur.models';
import { RessourceEntitetitulaireV2Recherche } from '../../../../libs/bloc-alertes-epi/src/lib/myway-rest-it/entitetitulairev2/models/entitetitulairev2.recherche.models';
import { RessourceOffreV2EnveloppeOffre } from '../../../../libs/bloc-alertes-epi/src/lib/myway-rest-it/offrev2/models/offrev2.enveloppeOffre.models';
import { RessourceSynthesecorporateV1DonneeDossierPartage } from '../../../../libs/bloc-alertes-epi/src/lib/myway-rest-it/synthesecorporatev1/models/synthesecorporatev1.donneeDossierPartage.models';
import { RessourceSynthesecorporateV1InfosRisqueAlerte } from '../../../../libs/bloc-alertes-epi/src/lib/myway-rest-it/synthesecorporatev1/models/synthesecorporatev1.infosRisqueAlerte.models';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

const mockStore = {
  dispatch: jest.fn(() => of(true))
};
const mockEnv: Environment = {} as Environment;
const mockSFPointEntreeAgent = {
  getEntryPoints: jest.fn(() => of([]))
};
const mockPTMNavigationAgent = {
  startConfigLancement: jest.fn(() => of(undefined))
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: ENVIRONMENT, useValue: mockEnv }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init', () => {
    component.ngOnInit();
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});

const mockDataPointsEntrees: BusinessModelsUtilsUi.IDataPointAccesState[] = [];

const mockIhmBusinessService = {
  getDataPointsEntreeState: jest.fn(() => of(mockDataPointsEntrees))
};

const mockCompteurDemandeMyFlow: RessourceDemandemulticanalsrvV1RestitutionCompteur.DemandesCompteur = {
  nbDemandes: 5
};

const mockDonneeDossierPartage: RessourceSynthesecorporateV1DonneeDossierPartage.DonneeDossierPartage = {
  codeEtablissement: '13135',
  numeroPersonne: '9038489',
  alertDossierAControler: true
};

const mockRisqueAlerteFull2: RessourceSynthesecorporateV1InfosRisqueAlerte.InfosRisqueAlerte = {
  informationO2S: 'E',
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
  codeIndicateurPersonnePSActif: '',
  indicateurSocietaire: '1',
  identifiantLEI: 'F',
  dateFinValiditeLEI: '2019-11-30',
  codeNiveauWatchListBanque: '',
  codeNiveauWatchListLocale: '1',
  codeNiveauWatchListNational: '',
  codePresenceDansRPMOuFDS: 'F',
  codeSLE: '',
  codeTypeRetourPTT: '1',
  indicExistenceOppoSurContrat: '1',
  indicateurOppoInterditBancaire: 'O',
  indicateurPresenceGAE: 'O',
  indicateurPresencePreventis: 'O',
  indicateurWatchListBanqueRef: 'O',
  indicateurWatchListLocale: 'O',
  indicateurWatchListNational: '',
  nombreRejets: 1,
  dateDerniereMajRevAnnuel: '2019-11-30',
  codePhaseRecouvrement: 'A',
  soldeActualise: 12,
  codeDegreSensibilitePersonne: 'A',
  codeNiveauSatisfaction: '3',
  indicateurAlerteReclamation: '1',
  codePresenceCompteDesherence: '2',
  dateDecesPersonnePhysique: '',
  libelleCourtSLE: 'jkjk',
  optinParCourrierElectronique: '1',
  indicateurEnvoiSMSOuFax: '1',
  codeNatureLienReglementaire: '',
  typeGroupe: '',
  libelleCodeNatLienRegl: 'jhjhj',
  libelleTypeGroupe: 'fefzefze',
  leverageFinance: {
    dateRatio: '',
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
  modeGestionQpim: '',
  antiCorruption: {
    dateCreation: '2024-04-01',
    dateFin: '',
    statut: 'I'
  },
  mif: {
    codeCouleur: '',
    libelleMessage: 'jijijij'
  },
  questionnaireEsg: {
    dateValidation: '01-01-2024',
    indicateurObsolescence: false
  }
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
      modeCompositionIndivision: '',
      complementDesignationEntiteTitulaire: '',
      identifiantEDSDomiciliation: 139325,
      referenceEDSDomiciliation: 804,
      libelleEDSDomiciliation: 'POLE GRANDS COMPTES',
      dateFermetureEntiteTitulaire: '',
      codePresenceDansRpmOuFds: 'R'
    },
    {
      identifiantEntiteTitulaire: 502022748,
      codeEtablissement: '11315',
      designationEntiteTitulaire: 'BEIMAVVC CO',
      codeUsageEntiteTitulaire: '2',
      modeCompositionEntiteTitulaire: '1',
      codeEtatEntiteTitulaire: '0',
      modeCompositionIndivision: '',
      complementDesignationEntiteTitulaire: '',
      identifiantEDSDomiciliation: 139325,
      referenceEDSDomiciliation: 804,
      libelleEDSDomiciliation: 'POLE GRANDS COMPTES',
      dateFermetureEntiteTitulaire: '',
      codePresenceDansRpmOuFds: 'A'
    },
    {
      identifiantEntiteTitulaire: 502022748,
      codeEtablissement: '11315',
      designationEntiteTitulaire: 'BEIMAVVC CO',
      codeUsageEntiteTitulaire: '1',
      modeCompositionEntiteTitulaire: '3',
      codeEtatEntiteTitulaire: '0',
      modeCompositionIndivision: '',
      complementDesignationEntiteTitulaire: '',
      identifiantEDSDomiciliation: 139325,
      referenceEDSDomiciliation: 804,
      libelleEDSDomiciliation: 'POLE GRANDS COMPTES',
      dateFermetureEntiteTitulaire: '',
      codePresenceDansRpmOuFds: 'R'
    }
  ],
  listeInformationActiviteProf: []
};

const mockRessourceOffreV2EnveloppeOffreEnveloppeOffreClotureReponse: RessourceOffreV2EnveloppeOffre.EnveloppeOffreClotureReponse = {
  dateClotureOffre: '12',
  identifiantProduitService: 1,
  numeroOffre: 2
};

const mockSynthesecorporateV1InfosRisqueAlerteService = {
  getInfosRisqueAlerte: jest.fn(() => of(mockRisqueAlerteFull2))
};

const mockSurveillancerisqueV2IndicateurService = {
  getIndicateur: jest.fn(() => of(undefined))
};

const mockTierscorporateV1BanqueJudiciaireService = {
  getBanqueJudiciaire: jest.fn(() => of(undefined))
};

const mockMockTierscorporateV1PotentielProspectService = {
  getPotentielProspect: jest.fn(() => of(undefined))
};
const mockTierscorporateservicV1ScoringProspectService = {
  getScoringProspect: jest.fn(() => of(undefined))
};

const mockReclamationV1CompteurClientService = {
  getCompteurClient: jest.fn(() => of(undefined))
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
