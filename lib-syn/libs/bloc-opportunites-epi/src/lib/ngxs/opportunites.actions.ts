import {HttpErrorResponse} from '@angular/common/http';
import {IOpportunites, IOpportunitesCorporate} from '../models/models/opportunites.model';
import {BusinessModelsUtilsUi} from '../models/models/ui-utils.model';

export namespace OpportunitesActions {
  export class LoadOpportunites {
    static readonly type = '[Opportunites] Load opportunites';
    constructor(
      public identifiantPersonne: string,
      public codeEtablissement: string,
      public identifiantAgent: number
    ) {}
  }

  export class ReloadOpportunites {
    static readonly type = '[Opportunites] Reload opportunites';
    constructor(
      public identifiantPersonne: string,
      public codeEtablissement: string,
      public identifiantAgent: number
    ) {}
  }

  export class ReloadMonExpert {
    static readonly type = '[Opportunites] Reload mon expert';
    constructor(
      public identifiantPersonne: string,
      public codeEtablissement: string
    ) {}
  }

  export class LoadMonExpert {
    static readonly type = '[Opportunites] Load mon expert';
    constructor(
      public identifiantPersonne: string,
      public codeEtablissement: string
    ) {}
  }

  export class SetMonExpertLoading {
    static readonly type = '[Opportunites] set mon expert loading';
  }

  export class SetLoading {
    static readonly type = '[Opportunites] set loading';
  }

  export class PatchData {
    static readonly type = '[Opportunites] patch data';
    constructor(
      public data: IOpportunites,
      public dataCorp: IOpportunitesCorporate
    ) {}
  }

  export class PatchMonExpertData {
    static readonly type = '[Opportunites] patch data mon expert';
    constructor(public monExpert: number) {}
  }

  export class PatchDataPointAcces {
    static readonly type = '[Opportunites] patch data point acces';
    constructor(public data: BusinessModelsUtilsUi.IDataPointAccesState[]) {}
  }

  export class PatchError {
    static readonly type = '[Opportunites] patch error';
    constructor(public err) {}
  }
}
