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
  /**
   * Formate d'une date au format YYYY-MM-DD vers DD/MM/YYYY
   * @param dateStrIn
   */
  formatDateString(dateStrIn: string): string {
    const data = dateStrIn.split('-');
    if (data.length === 3) {
      return `${data[2]}/${data[1]}/${data[0]}`;
    } else {
      return dateStrIn;
    }
  }

  getDateIhmFromDate(dateIn: Date): string {
    return `${dateIn.getDay()}/${dateIn.getMonth()}/${dateIn.getFullYear()}`;
  }

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
