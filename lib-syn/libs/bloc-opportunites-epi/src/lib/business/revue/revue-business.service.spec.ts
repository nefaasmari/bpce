import { TestBed, waitForAsync } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { BusinessModelsDonneesDelocalisees as delocModel } from '../../models/models/tables-delocalisees.model';
import { RessourcePropositioncorporateV1Affaire } from '../../myway-rest-it/propositioncorporatev1/models/propositioncorporatev1.affaire.models';
import { RessourcePropositioncorporateV1Revue } from '../../myway-rest-it/propositioncorporatev1/models/propositioncorporatev1.revue.models';
import { PropositioncorporateV1AffaireService } from '../../myway-rest-it/propositioncorporatev1/services/propositioncorporatev1.affaire.service';
import { PropositioncorporateV1RevueService } from '../../myway-rest-it/propositioncorporatev1/services/propositioncorporatev1.revue.service';
import { DonneesDelocaliseesService } from '../deloc/donnees-delocalisees.service';
import { RevueBusinessService } from './revue-business.service';

describe('RevueBusinessService', () => {
  let service: RevueBusinessService;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        RevueBusinessService,
        {
          provide: PropositioncorporateV1RevueService,
          useValue: mockRevueService
        },
        {
          provide: PropositioncorporateV1AffaireService,
          useValue: mockAffaireService
        },
        {
          provide: DonneesDelocaliseesService,
          useValue: mockDonneesDelocaliseesService
        }
      ]
    }).compileComponents();

    service = TestBed.inject(RevueBusinessService);
  }));

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('revue should work', () => {
    const returnValue = service.getDetailRevue('13135', '45405494');
    expect(returnValue).toBeDefined();
  });

  it('test infosPropositionRevueRestToApp', () => {
    let returnValue = service.infosPropositionRevueRestToApp(
      mockRevue,
      mockDataAffaire,
      tableListeFamilleMock,
      tableListeSousFamilleMock
    );
    expect(returnValue.revueEnrichie).toBeDefined();
    expect(returnValue.appetencesClient).toBeDefined();
    expect(returnValue.revueProduitClient.length).toBeDefined();

    returnValue = service.infosPropositionRevueRestToApp(
      mockRevueVide,
      mockAffaireVide,
      tableListeFamilleVideMock,
      tableListeSousFamilleVideMock
    );
    expect(returnValue).toBeDefined();
    expect(returnValue.revueEnrichie.length).toEqual(0);
    expect(returnValue.appetencesClient.length).toEqual(0);
  });
});

const mockDonneesDelocaliseesService = {
  getFamilleProduit: jest.fn(() => of()),
  getSousFamilleProduit: jest.fn(() => of()),
  getTableListeFamilleProduit: jest.fn(() => of()),
  getTableListeSousFamilleProduit: jest.fn(() => of())
};

const mockRevueService = {
  getRevue: jest.fn(() => of())
};

const mockAffaireService = {
  getAffaire: jest.fn(() => of())
};

const mockAppetencesUndef: RessourcePropositioncorporateV1Revue.AppetenceProduit[] = undefined;

const mockAppetencesVide: RessourcePropositioncorporateV1Revue.AppetenceProduit[] = [];

const mockAppetences: RessourcePropositioncorporateV1Revue.AppetenceProduit[] = [
  {
    codeAppetence: '',
    codeSousFamilleProduitRevue: 'AFFACTUR',
    familleProduit: 'FINANCE',
    libelleAppetence: 'regfer',
    libelleFamilleProduit: 'mkjlk'
  },
  {
    codeAppetence: '',
    codeSousFamilleProduitRevue: 'ASS_POST',
    familleProduit: 'ASSUR',
    libelleAppetence: 'regfer',
    libelleFamilleProduit: 'mkjlk'
  }
];

const mockAffaireUndef: RessourcePropositioncorporateV1Affaire.Affaire = undefined;

const mockAffaireVide: RessourcePropositioncorporateV1Affaire.Affaire = {
  creExistant: null,
  sourceModification: null,
  listeAffaireBdr: []
};

const mockAffaireListeAffaireBdr: RessourcePropositioncorporateV1Affaire.AffaireBdr[] = [
  {
    codeEtablissement: '13135',
    identifiantPersonne: 45405494,
    codeSousFamilleProduit: 'ASS_POST',
    codeStatut: 'EC',
    codeSourceCreation: 'CR',
    codeSourceModification: null,
    montant: 0,
    dateCreation: '2023-01-25',
    dateRelance: '0001-01-01',
    dateCloture: '0001-01-01',
    numeroAffaire: 8000026791,
    raisonSociale: null,
    descriptionAffaire: 'dzagrfgtrhgtrgtr',
    nombrePropositionLieeAffaire: 0,
    nombrePropositionPersonne: 14
  },
  {
    codeEtablissement: '13135',
    identifiantPersonne: 45405494,
    codeSousFamilleProduit: 'AFFACTUR',
    codeStatut: 'EC',
    codeSourceCreation: 'CR',
    codeSourceModification: null,
    montant: 0,
    dateCreation: '2023-01-25',
    dateRelance: '0001-01-01',
    dateCloture: '0001-01-01',
    numeroAffaire: 8000026792,
    raisonSociale: null,
    descriptionAffaire: 'dzadzadzad',
    nombrePropositionLieeAffaire: 0,
    nombrePropositionPersonne: 14
  }
];

const mockDataAffaire: RessourcePropositioncorporateV1Affaire.Affaire = {
  creExistant: null,
  sourceModification: null,
  listeAffaireBdr: mockAffaireListeAffaireBdr
};

const mockRevueUndef: RessourcePropositioncorporateV1Revue.Revue = undefined;

const mockListeRevueProduitClientVide: RessourcePropositioncorporateV1Revue.RevueProduitClient[] = [];

const mockRevueVide: RessourcePropositioncorporateV1Revue.Revue = {
  listeRevueProduitClient: mockListeRevueProduitClientVide,
  listeAppetencesProduits: mockAppetencesVide
};

const mockListeRevueProduitClient: RessourcePropositioncorporateV1Revue.RevueProduitClient[] = [
  {
    codeEtablissement: '13135',
    identifiantElementStructure: null,
    identifiantPortefeuille: null,
    identifiantRelationEco: null,
    identifiantPersonne: 81086558,
    codeFamilleProduitPtf: 'FINANCE',
    codeSousFamilleProduitPtf: 'AFFACTUR',
    indicateurClientEquipe: null,
    produitPresentDansMysys: 'O',
    indicateurClientAEquiper: 'O',
    indicateurClientEquipeConcurren: 'N',
    indicateurClientNonInteressProd: 'N',
    tauxObjectifFlux: 0,
    indicateurClientAActiver: null,
    indicateurTarifARenegocier: null,
    dateMaj: '2023-06-20-11.36.35.994856',
    identfiantAgentAppliMaj: '0080167',
    designationAgent: 'MR GRARE  OLIVIER'
  },
  {
    codeEtablissement: '13135',
    identifiantElementStructure: null,
    identifiantPortefeuille: null,
    identifiantRelationEco: null,
    identifiantPersonne: 81086558,
    codeFamilleProduitPtf: 'ASSUR',
    codeSousFamilleProduitPtf: 'ASS_HCLE',
    indicateurClientEquipe: null,
    produitPresentDansMysys: 'O',
    indicateurClientAEquiper: 'N',
    indicateurClientEquipeConcurren: 'N',
    indicateurClientNonInteressProd: 'N',
    tauxObjectifFlux: 0,
    indicateurClientAActiver: null,
    indicateurTarifARenegocier: null,
    dateMaj: '2023-06-20-11.36.35.994856',
    identfiantAgentAppliMaj: '0080167',
    designationAgent: 'MR GRARE  OLIVIER'
  },
  {
    codeEtablissement: '13135',
    identifiantElementStructure: null,
    identifiantPortefeuille: null,
    identifiantRelationEco: null,
    identifiantPersonne: 81086558,
    codeFamilleProduitPtf: 'ASSUR',
    codeSousFamilleProduitPtf: 'ASS_POST',
    indicateurClientEquipe: null,
    produitPresentDansMysys: 'O',
    indicateurClientAEquiper: 'N',
    indicateurClientEquipeConcurren: 'N',
    indicateurClientNonInteressProd: 'N',
    tauxObjectifFlux: 0,
    indicateurClientAActiver: null,
    indicateurTarifARenegocier: null,
    dateMaj: '2023-06-20-11.36.35.994856',
    identfiantAgentAppliMaj: '0080167',
    designationAgent: 'MR GRARE  OLIVIER'
  }
];
const mockRevue: RessourcePropositioncorporateV1Revue.Revue = {
  listeAppetencesProduits: mockAppetences,
  listeRevueProduitClient: mockListeRevueProduitClient
};

export const tableListeFamilleVideMock: delocModel.ITableListeFamilleProduit = {
  id: null,
  datemaj: null,
  referentiel: null,
  nom: null,
  donnees: []
};

export const tableListeFamilleMock: delocModel.ITableListeFamilleProduit = {
  id: '13135-P61A',
  referentiel: '13135',
  nom: 'P61A',
  datemaj: '20230623',
  donnees: [
    {
      HMEHEG: '',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Assurances / Prévoyance'
    },
    {
      HMEHEG: '',
      CGPIFA: 'AUTRE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Autre'
    },
    {
      HMEHEG: '',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Banque au quotidien'
    },
    {
      HMEHEG: '',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Financement'
    },
    {
      HMEHEG: '',
      CGPIFA: 'FLUX',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Flux'
    },
    {
      HMEHEG: '',
      CGPIFA: 'ING_FIN',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Ingénierie Financière'
    },
    {
      HMEHEG: '',
      CGPIFA: 'ING_SOC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Ingénierie Sociale'
    },
    {
      HMEHEG: '',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'International'
    },
    {
      HMEHEG: '',
      CGPIFA: 'MC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Encours de crédit'
    },
    {
      HMEHEG: '',
      CGPIFA: 'ME',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Epargne salariale'
    },
    {
      HMEHEG: '',
      CGPIFA: 'MP',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Encours de placement'
    },
    {
      HMEHEG: '',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Placement'
    },
    {
      HMEHEG: '',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Proposition commerciale'
    },
    {
      HMEHEG: '',
      CGPIFA: 'TARIF',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      LBPIFA: 'Tarification'
    }
  ]
};

export const tableListeSousFamilleVideMock: delocModel.ITableListeSousFamilleProduit = {
  id: null,
  datemaj: null,
  referentiel: null,
  nom: null,
  donnees: []
};

export const tableListeSousFamilleMock: delocModel.ITableListeSousFamilleProduit = {
  id: '13135-P61C',
  referentiel: '13135',
  nom: 'P61C',
  datemaj: '20230623',
  donnees: [
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000011',
      HMEHEG: '',
      CGPISF: 'AFFACTUR',
      LBPISF: 'Affacturage',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000038',
      HMEHEG: '',
      CGPISF: 'ASS_DO',
      LBPISF: 'Dommage ouvrage',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000023',
      HMEHEG: '',
      CGPISF: 'ASS_HCLE',
      LBPISF: 'Homme clé',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000025',
      HMEHEG: '',
      CGPISF: 'ASS_POST',
      LBPISF: 'Assurance poste client',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000039',
      HMEHEG: '',
      CGPISF: 'ASS_RC',
      LBPISF: 'R.C. maitre d ouvrage',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000037',
      HMEHEG: '',
      CGPISF: 'ASS_TRC',
      LBPISF: 'Tous risques chantiers',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'ACCOMPAG',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'ASSURANC',
      LBPISF: 'Assurance',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'BAD',
      LBPISF: 'Abonnement Banque A Distance',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000081',
      HMEHEG: '',
      CGPISF: 'BAI',
      LBPISF: 'Crédit-Bail',
      CGPIFA: 'MC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000041',
      HMEHEG: '',
      CGPISF: 'BILAN_GP',
      LBPISF: 'Bilan patrimonial - GP',
      CGPIFA: 'AUTRE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'BON_CAEP',
      LBPISF: 'Bon de caisse / Bon d épargne',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000029',
      HMEHEG: '',
      CGPISF: 'BQE_DIR',
      LBPISF: 'Banque du dirigeant',
      CGPIFA: 'AUTRE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000045',
      HMEHEG: '',
      CGPISF: 'CARTE_AP',
      LBPISF: 'Carte achat public',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'CARTES',
      LBPISF: 'Carte à l unité',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000008',
      HMEHEG: '',
      CGPISF: 'CBI',
      LBPISF: 'CBI',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000007',
      HMEHEG: '',
      CGPISF: 'CBM',
      LBPISF: 'CBM',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'CCE',
      LBPISF: 'Compte Courant Entreprise à l unité',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'CCE_FOR',
      LBPISF: 'Offre groupée de services',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000091',
      HMEHEG: '',
      CGPISF: 'CDD',
      LBPISF: 'Compte Courant',
      CGPIFA: 'MP',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000010',
      HMEHEG: '',
      CGPISF: 'CEGICEGC',
      LBPISF: 'Cautions CEGI / CEGC',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'CIVILITE',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'CIVILITE',
      LBPISF: 'Civilité',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'CLICNTRA',
      LBPISF: 'Click n Trade',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'COFACE',
      LBPISF: 'Coface',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000028',
      HMEHEG: '',
      CGPISF: 'CONSEIL',
      LBPISF: 'Conseil Cession / Acquisition',
      CGPIFA: 'ING_FIN',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000017',
      HMEHEG: '',
      CGPISF: 'COUV_CHG',
      LBPISF: 'Couverture de change',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000012',
      HMEHEG: '',
      CGPISF: 'COUV_TX',
      LBPISF: 'Couverture taux / matières 1ères',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000042',
      HMEHEG: '',
      CGPISF: 'COVE',
      LBPISF: 'Coverage',
      CGPIFA: 'AUTRE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'CPT_DEVI',
      LBPISF: 'Compte en devise',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'CPT_TERM',
      LBPISF: 'Compte à Terme / Dépôt à Terme',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000015',
      HMEHEG: '',
      CGPISF: 'CREDITS',
      LBPISF: 'Crédits / Remises documentaires',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000004',
      HMEHEG: '',
      CGPISF: 'CRT_TERM',
      LBPISF: 'Court Terme',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000047',
      HMEHEG: '',
      CGPISF: 'CT_CR',
      LBPISF: 'CT - Crédit relais',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000046',
      HMEHEG: '',
      CGPISF: 'CT_LT',
      LBPISF: 'CT - Ligne de trésorerie',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000014',
      HMEHEG: '',
      CGPISF: 'DAT',
      LBPISF: 'Epargne bilantielle / Dépôt à Terme',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000016',
      HMEHEG: '',
      CGPISF: 'DEVISES',
      LBPISF: 'Avances en devises',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000044',
      HMEHEG: '',
      CGPISF: 'DIAG_ENE',
      LBPISF: 'Diagnostic énergétique',
      CGPIFA: 'AUTRE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'DOC_EXP',
      LBPISF: 'Crédit Documentaire Export',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'DOC_IMP',
      LBPISF: 'Crédit Documentaire Import',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000092',
      HMEHEG: '',
      CGPISF: 'ECO',
      LBPISF: 'Epargne contractuelle',
      CGPIFA: 'MP',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000093',
      HMEHEG: '',
      CGPISF: 'EIN',
      LBPISF: 'Epargne investie',
      CGPIFA: 'MP',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000094',
      HMEHEG: '',
      CGPISF: 'ELI',
      LBPISF: 'Epargne liquide',
      CGPIFA: 'MP',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'ENGAGEME',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'ENG_COMM',
      LBPISF: 'Engagements commerciaux',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'ACCOMPAG',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'ENG_SIGN',
      LBPISF: 'Engagement Par Signature',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000082',
      HMEHEG: '',
      CGPISF: 'EPS',
      LBPISF: 'Engagement Par Signature',
      CGPIFA: 'MC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000006',
      HMEHEG: '',
      CGPISF: 'EPS2',
      LBPISF: 'Engagement Par Signature',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'EPS3',
      LBPISF: 'Engagement Par Signature',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000049',
      HMEHEG: '',
      CGPISF: 'ER_PERI',
      LBPISF: 'Epargne retraite / PERI',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'EXCEDENT',
      LBPISF: 'Compte Excédent Pro',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'ACCOMPAG',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'EXPERTIS',
      LBPISF: 'Expertises',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000021',
      HMEHEG: '',
      CGPISF: 'FIN_CARR',
      LBPISF: 'Indemnités Fin de Carrière',
      CGPIFA: 'ING_SOC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000026',
      HMEHEG: '',
      CGPISF: 'FINANCEM',
      LBPISF: 'Financements structurés',
      CGPIFA: 'ING_FIN',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'ACCOMPAG',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'FINANCE2',
      LBPISF: 'Financements',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'FLUX',
      NSPISF: '0000000030',
      HMEHEG: '',
      CGPISF: 'FLUX',
      LBPISF: 'Flux',
      CGPIFA: 'FLUX',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000018',
      HMEHEG: '',
      CGPISF: 'GAR_INT',
      LBPISF: 'Garanties internationales',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000001',
      HMEHEG: '',
      CGPISF: 'GEST_CPT',
      LBPISF: 'Gestion de comptes et des flux',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000032',
      HMEHEG: '',
      CGPISF: 'IARD_AUT',
      LBPISF: 'IARD - Auto pro',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000033',
      HMEHEG: '',
      CGPISF: 'IARD_MUL',
      LBPISF: 'IARD - MR pro',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'ACCOMPAG',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'ING_SOCI',
      LBPISF: 'Ingénierie sociale',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000027',
      HMEHEG: '',
      CGPISF: 'K_INVEST',
      LBPISF: 'Capital Investissement',
      CGPIFA: 'ING_FIN',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000009',
      HMEHEG: '',
      CGPISF: 'LDD',
      LBPISF: 'Location Longue Durée',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'LIVRETS',
      LBPISF: 'Livrets',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000008',
      HMEHEG: '',
      CGPISF: 'LLD',
      LBPISF: 'Location Longue Durée',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'LNG_MIXT',
      LBPISF: 'Ligne d autorisation mixte',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'LOC_FIN',
      LBPISF: 'Location financière',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'LT_STDBY',
      LBPISF: 'Lettre de crédit stand by',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'MAD_PREV',
      LBPISF: 'Madelin Prévoyance',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'MAD_SANT',
      LBPISF: 'Madelin Santé',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000019',
      HMEHEG: '',
      CGPISF: 'MCNE',
      LBPISF: 'MCNE',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000005',
      HMEHEG: '',
      CGPISF: 'MLG_TERM',
      LBPISF: 'Moyen Long Terme (yc Green, BEI, PAI)',
      CGPIFA: 'FINANCE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000083',
      HMEHEG: '',
      CGPISF: 'MLT',
      LBPISF: 'Crédit d équipement',
      CGPIFA: 'MC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000084',
      HMEHEG: '',
      CGPISF: 'MOB',
      LBPISF: 'Mobilisation poste client',
      CGPIFA: 'MC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'MON',
      LBPISF: 'Monétique',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000003',
      HMEHEG: '',
      CGPISF: 'MONETIK',
      LBPISF: 'Monétique (prox. et E-commerce)',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'NEUCP',
      LBPISF: 'Negotiable EUropean Commercial Paper',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'NEUMTN',
      LBPISF: 'Negotiable EUropean Medium Term Note',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000043',
      HMEHEG: '',
      CGPISF: 'OFF_SUBV',
      LBPISF: 'Offre subvention',
      CGPIFA: 'AUTRE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000002',
      HMEHEG: '',
      CGPISF: 'OPTI_TRE',
      LBPISF: 'Optimisation de trésorerie',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'PAP',
      LBPISF: 'Protection de l Activité Professionnelle',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'PART_SOC',
      LBPISF: 'Parts sociales',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000020',
      HMEHEG: '',
      CGPISF: 'PEE',
      LBPISF: 'PEE / PERCOL',
      CGPIFA: 'ING_SOC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000096',
      HMEHEG: '',
      CGPISF: 'PEI',
      LBPISF: 'Plan Epargne Interentreprise',
      CGPIFA: 'ME',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'PREF_EXP',
      LBPISF: 'Préfinancement Export',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000035',
      HMEHEG: '',
      CGPISF: 'PREV_PRO',
      LBPISF: 'Prévoyance pro',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'ACCOMPAG',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'PST_CLIE',
      LBPISF: 'Gestion du poste client',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000036',
      HMEHEG: '',
      CGPISF: 'RC_DECE',
      LBPISF: 'RC décennale',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000024',
      HMEHEG: '',
      CGPISF: 'RDE/RDA',
      LBPISF: 'RDE / RDA',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'REM_DOC',
      LBPISF: 'Remises Documentaires',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'REMUNERA',
      LBPISF: 'Rémunération de compte',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000048',
      HMEHEG: '',
      CGPISF: 'SANT_COL',
      LBPISF: 'Santé collective',
      CGPIFA: 'ING_SOC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000034',
      HMEHEG: '',
      CGPISF: 'SANT_IND',
      LBPISF: 'Santé individuelle',
      CGPIFA: 'ASSUR',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'SIGNATAI',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'SIGNATAI',
      LBPISF: 'Signataires',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'TARI_EDI',
      LBPISF: 'Tarification des flux Banque A Distance',
      CGPIFA: 'BQE_QUOT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'TARI_ED2',
      LBPISF: 'Tarification des flux Banque A Distance',
      CGPIFA: 'INTERNAT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'TARIF',
      NSPISF: '0000000031',
      HMEHEG: '',
      CGPISF: 'TARIF',
      LBPISF: 'Tarification',
      CGPIFA: 'TARIF',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000022',
      HMEHEG: '',
      CGPISF: 'TIT_SERV',
      LBPISF: 'Titres de service',
      CGPIFA: 'ING_SOC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000013',
      HMEHEG: '',
      CGPISF: 'TITRES',
      LBPISF: 'Epargne financière / Titres',
      CGPIFA: 'PLACEMT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'O'
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000085',
      HMEHEG: '',
      CGPISF: 'TRE',
      LBPISF: 'Crédit de trésorerie',
      CGPIFA: 'MC',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'ACCOMPAG',
      NSPISF: '0000000000',
      HMEHEG: '',
      CGPISF: 'TRE_PLAC',
      LBPISF: 'Gestion trésorerie et placements',
      CGPIFA: 'PROPOSIT',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: ''
    },
    {
      CGPIAF: 'PRODUITS',
      NSPISF: '0000000040',
      HMEHEG: '',
      CGPISF: '2_RELATI',
      LBPISF: 'Double relation',
      CGPIFA: 'AUTRE',
      HDEHEG: '',
      IDSECR: '',
      IDSEMJ: '',
      CIPISE: 'N'
    }
  ]
};
