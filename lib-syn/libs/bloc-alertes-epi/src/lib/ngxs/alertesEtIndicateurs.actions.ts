import {IContext} from '../models/models/context.model';

export class LoadAlertesEtIndicateurs {
  constructor(public ctx: IContext) {}
  static readonly type = '[AlertesEtIndicateurs] Load content';
}
