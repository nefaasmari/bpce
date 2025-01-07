import {HttpErrorResponse} from '@angular/common/http';
import {BusinessModelsAlertesIndicateurs} from '../models/models/alertes-indicateurs.model';
import {BusinessModelsUtilsUi} from '../models/models/ui-utils.model';

export class LoadAlertes {
  constructor(
    public codeEtablissement: string,
    public identifiantPersonne: string,
    public estPersonnePhysique: boolean
  ) {}
  static readonly type = '[Alertes] Load content';
}

export class ReLoadAlertes {
  constructor(
    public codeEtablissement: string,
    public identifiantPersonne: string,
    public estPersonnePhysique: boolean
  ) {}
  static readonly type = '[Alertes] Re-Load content';
}

export class SetLoadingAlertes {
  static readonly type = '[Alertes] set loading';
}

export class PatchDataAlertes {
  static readonly type = '[Alertes] patch data';
  constructor(public data: BusinessModelsAlertesIndicateurs.IAlertes) {}
}

export class PatchDataAlertesPointAcces {
  static readonly type = '[Alertes] patch data point acces';
  constructor(public data: BusinessModelsUtilsUi.IDataPointAccesState[]) {}
}

export class PatchErrorAlertes {
  static readonly type = '[Alertes] patch error';
  constructor(public data: HttpErrorResponse) {}
}
