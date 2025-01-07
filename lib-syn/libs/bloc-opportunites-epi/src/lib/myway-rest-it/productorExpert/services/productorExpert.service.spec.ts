import { TestBed } from '@angular/core/testing';
import { ENVIRONMENT, Environment } from '@myway/env';
import { HttpAgentService, IParamHttpRequest } from '@ptmyway-stc-v2/ngx-bpce/http';
import { of } from 'rxjs';
import { mockProductorExpert } from '../mock/productorExpert.mock';
import { ProductorExpertService } from './productorExpert.service';

const envMock: Environment = {} as Environment;

describe('ProductorExpertService', () => {
  let productorExpertService: ProductorExpertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductorExpertService,
        {
          provide: HttpAgentService,
          useClass: MockRequestHttpAgentService
        },
        { provide: ENVIRONMENT, useValue: envMock }
      ]
    });

    productorExpertService = TestBed.inject(ProductorExpertService);
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  it('should create an instance successfully', () => {
    expect(productorExpertService).toBeDefined();
  });

  it('test getInquiries', (done: any) => {
    productorExpertService
      .getInquiries('11315', '012345678')
      .subscribe(_res => {
        done();
      });
  });

  it('test getInquiries 2', (done: any) => {
    productorExpertService
      .getInquiries('11315', '012345678')
      .subscribe(_res => {
        done();
      });
  });
});

export class MockRequestHttpAgentService {
  sendRequest<T>(param: IParamHttpRequest) {
    return of(mockProductorExpert);
  }
}
