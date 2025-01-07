import {HttpErrorResponse} from '@angular/common/http';
import {BusinessModelsAlertesIndicateurs} from '../models/models/alertes-indicateurs.model';
import {IContext} from '../models/models/context.model';

export class LoadIndicateurs {
  constructor(public ctx: IContext) {}
  static readonly type = '[Indicateurs] Load content';
}

export class ReLoadIndicateurs {
  constructor(public ctx: IContext) {}
  static readonly type = '[Indicateurs] Re-Load content';
}

export class SetLoadingIndicateurs {
  static readonly type = '[Indicateurs] set loading';
}

export class PatchDataIndicateurs {
  static readonly type = '[Indicateurs] patch data';
  constructor(public data: BusinessModelsAlertesIndicateurs.IIndicateurs) {}
}

export class PatchErrorIndicateurs {
  static readonly type = '[Indicateurs] patch error';
  constructor(public data: HttpErrorResponse) {}
}
