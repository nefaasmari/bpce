import {Injectable} from '@angular/core';
import {
  INavigationStartConfigLancementCommandInput,
  IPTMSentinelleGetRefreshInput
} from '@oscaiss-pormyway-managers/portal-common';
import {ContexteLancementEnum} from '@oscaiss-pormyway-managers/socfon-common';

@Injectable({
  providedIn: 'root'
})
export class DataUtilsService {
  getNavInputConfigLancementDefault(
    identifiantConfig: string,
    identifiantPersonne: string
  ): INavigationStartConfigLancementCommandInput {
    return {
      idConfigLancement: identifiantConfig,
      idContextClient: +identifiantPersonne,
      contextLancement: ContexteLancementEnum.SyntheseClientPro
    } as INavigationStartConfigLancementCommandInput;
  }

  getInputSentinelleDefault(idSentinelle: string, identifiantPersonne: string): IPTMSentinelleGetRefreshInput {
    return {
      idBlocMetierListen: idSentinelle,
      params: new Map<string, any>([['identifiantPersonne', +identifiantPersonne]])
    } as IPTMSentinelleGetRefreshInput;
  }
}
