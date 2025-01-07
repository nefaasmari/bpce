import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { OpportunitesBusinessService } from './opportunites-business.service';
import { of, Observable } from 'rxjs';
import { SyntheseV2InformationClientService } from '../../myway-rest-it/synthesev2/services/synthesev2.informationClient.service';
import { PropositioncorpservV1OpportunitePropositiService } from '../../myway-rest-it/propositioncorpservv1/services/propositioncorpservv1.opportunitePropositi.service';
import { ProductorExpertService } from '../../myway-rest-it/productorExpert/services/productorExpert.service';
import { RessourceSyntheseV2InformationClient } from '../../myway-rest-it/synthesev2/models/synthesev2.informationClient.models';
import { OpportunitecommercV1CompteurClientService } from '../../myway-rest-it/opportunitecommercv1/services/opportunitecommercv1.compteurClient.service';
import { RessourcePropositioncorpservV1OpportunitePropositi as ressPropoCorp } from '../../myway-rest-it/propositioncorpservv1/models/propositioncorpservv1.opportunitePropositi.models'
import { RessourceOpportunitecommercV1CompteurClient } from '../../myway-rest-it/opportunitecommercv1/models/opportunitecommercv1.compteurClient.models';

describe('OpportunitesBusinessService', () => {
  let service: OpportunitesBusinessService;
  let productorExpertService: ProductorExpertService;
  let restCompteur: OpportunitecommercV1CompteurClientService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      providers: [
        OpportunitesBusinessService,
        { provide: SyntheseV2InformationClientService, useClass: MockOpportunites },
        { provide: PropositioncorpservV1OpportunitePropositiService, useClass: MockPropositionsCorp },
        { provide: ProductorExpertService, useClass: MockProductorExpertService },
        { provide: OpportunitecommercV1CompteurClientService, useClass: OpportunitecommercV1CompteurClientServiceMock }
      ]
    }).compileComponents();

    service = TestBed.inject(OpportunitesBusinessService);
    productorExpertService = TestBed.inject(ProductorExpertService);
  }));

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('test getOpportunites', () => {
    const returnValue = service.getOpportunites('13135', '45405494');
    expect(returnValue).toBeDefined();
  });

  it('test getOpportunitesCorporate', () => {
    const returnValue = service.getOpportunitesCorporate('13135', '45405494', 5353);
    expect(returnValue).toBeDefined();
  });

  it('test opportunitesRestToApp', () => {
    let returnValue = service.opportunitesRestToApp(mockOpportunites1, compteurClient, true);
    expect(returnValue).toBeDefined();

    returnValue = service.opportunitesRestToApp(mockOpportunites2, compteurClient2, true);
    expect(returnValue).toBeDefined();

    returnValue = service.opportunitesRestToApp(undefined, compteurClient, true);
    expect(returnValue).toBeDefined();
  });

  it('test opportunitesCorporateRestToApp', () => {
    let returnValue = service.opportunitesCorporateRestToApp(undefined);
    expect(returnValue).toBeUndefined();

    returnValue = service.opportunitesCorporateRestToApp(mockOpportunitesCorpVide);
    expect(returnValue).toBeUndefined();

    returnValue = service.opportunitesCorporateRestToApp(mockOpportunitesCorp);
    expect(returnValue).toBeDefined();
  });

  it('test getOpportunitesMonExpert', () => {
    jest.spyOn(productorExpertService, 'getInquiries').mockReturnValue(of(mockBapiResp));
    service.getOpportunitesMonExpert('11315', '121221212').subscribe(_res => {
      expect(_res).toBeDefined()
    });
  });
});


class MockOpportunites {
  getInformationClient(identifiantPersonne, codeEtablissement): Observable<RessourceSyntheseV2InformationClient.IOpportunite> {
    return of();
  }
}

class MockPropositionsCorp {
  postOpportuniteProposition(oppInput): Observable<ressPropoCorp.OpportuniteProposition> {
    return of();
  }
}

class OpportunitecommercV1CompteurClientServiceMock {
  getCompteurClient(codeEtablissement: string, identifiantClient: number, typeOpportunite: string, codeAppelant: string): Observable<ressPropoCorp.OpportuniteProposition> {
    return of();
  }

}

class MockProductorExpertService {
  getInquiries(codeEtab: string, idPersonne: string): Observable<any> {
    return of(mockBapiResp)
  }
}

const mockBapiResp: any = {
  items: [
    {
      "expertInquiryIdentification": {
        "expertInquiryId": "4000582"
      },
      "expertInquiryIdentity": {
        "characteristics": {
          "siret": "52022354600042",
          "expertInquiryType": {
            "code": "acceptanceDevice",
            "label": "TPE Santé"
          },
          "legalEntityId": {
            "entityCode": "17515",
            "id": "091298716"
          },
          "followUpProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "companyName": "LES PETITES CANAILLES",
          "creationDate": "2022-03-14 17:17:14",
          "lastUpdate": "2022-03-14 17:17:14",
          "creatorProfessionalRoleId": {
            "entityCode": "17515",
            "id": "1325520"
          },
          "instructionMode": {
            "code": "AGENCE",
            "label": "Conseiller"
          },
          "implementationDelayType": null,
          "expertInquiryProgressStateType": {
            "code": "STDBY-SUPPORTED",
            "label": "Lead en attente de prise en charge"
          },
          "expertInquiryProgressStateLastModificationDate": "2022-03-14 17:17:14",
          "expertInquiryStatusLastModificationDate": "2022-03-14 17:17:14",
          "creatorAgentId": {
            "entityCode": "17515",
            "id": "9075143"
          },
          "campaignRef": null,
          "campaignResponseType": null
        },
        "contact": {
          "civility": {
            "code": "mr",
            "label": "M"
          },
          "lastname": "TURCAN ",
          "firstname": "XXX@YY.COM",
          "email": null
        },
        "autoLease": null,
        "serviceVoucher": null,
        "organizationManagementService": null,
        "retirementProduct": null,
        "consumerLoan": null,
        "insuranceProduct": null,
        "acceptanceDevice": {
          "contractRequestIndicator": true,
          "professionalActivityType": {
            "code": "AUXILIAIRE",
            "label": "Auxiliaire"
          }
        },
        "ecommerce": null,
        "factoring": null,
        "billingService": null,
        "loyaltyService": null,
        "internationalImplementation": null
      }
    }
  ]
};

const mockOpportunitesCorpVide: ressPropoCorp.OpportuniteProposition = {
  listeCritereCumul: undefined,
  listeCumul: []
};

const mockOpportunitesCorp: ressPropoCorp.OpportuniteProposition = {
  listeCritereCumul: undefined,
  listeCumul: [
    {
      nombreAffaire: 1,
      propositionCommerciale: 2,
      propositionCommercialeAEcheance: 4,
      scoreAppetence: 1,
      sousFamillePrdAProposer: 3,
      nbOperationFinancement: 1
    }
  ]
};

const mockOpportunites1: RessourceSyntheseV2InformationClient.IOpportunite = {
  numeroPersonne: 7905303,
  designationCourteClient: 'Mr',
  nombreOpportunitesClient: 1,
  commentaireOpportunite: 'fefzefezfzef',
  nombreDVetPropositionClient: 0
};

const compteurClient: RessourceOpportunitecommercV1CompteurClient.CompteurClient = {
  commentaireOpportunite: 'zazeaze',
  designationCourteClient: 'Mr',
  nombreOpportuniteClient: 1,
  indicateurBascule: true,
  identifiantOCPrincipale: 'blabla'
};

const compteurClient2: RessourceOpportunitecommercV1CompteurClient.CompteurClient = {
  commentaireOpportunite: 'zazeaze',
  designationCourteClient: 'Mr',
  nombreOpportuniteClient: 2,
  indicateurBascule: false,
  identifiantOCPrincipale: 'blabla'
};

const mockOpportunites2: RessourceSyntheseV2InformationClient.IOpportunite = {
  numeroPersonne: 7905303,
  designationCourteClient: 'fzezf',
  nombreOpportunitesClient: 2,
  commentaireOpportunite: undefined,
  nombreDVetPropositionClient: 1
};

