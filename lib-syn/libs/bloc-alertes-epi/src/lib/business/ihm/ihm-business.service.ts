import {Injectable} from '@angular/core';
import {Observable, noop, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PTMNavigationAgent, SFPointEntreeAgent} from '@oscaiss-pormyway-managers/portal-interface';
import {
  ContexteLancementEnum,
  EntryPointDto,
  EligibilityCriterionTypeEnum
} from '@oscaiss-pormyway-managers/socfon-common';
import {LBL_LIEN_NON_DISPO, LBL_LIEN_NON_ELIGIBLE, LBL_LIEN_NON_HABILITE} from '../../models/constantes/ihm.constantes';
import {
  CONFIG_AGENDA_RDV_ID,
  CONFIG_FOCUS_ID,
  CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID,
  CONFIG_LANCEMENT_DOSSIER_VENTE_ID,
  CONFIG_LANCEMENT_DSC_ID,
  CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID,
  CONFIG_MYFLOW_ID
} from '../../models/constantes/processus.constantes';
import {BusinessModelsUtilsUi} from '../../models/models/ui-utils.model';
import {DataUtilsService} from '../utils/data-utils.service';

@Injectable({
  providedIn: null
})
export class IhmBusinessService {
  constructor(
    private pointEntreeService: SFPointEntreeAgent,
    private dataUtilsService: DataUtilsService,
    private readonly serviceAgentNavPort: PTMNavigationAgent
  ) {}

  getDataPointsEntreeState(
    identifiantsConfigs: string[],
    identifiantPersonne: string
  ): Observable<BusinessModelsUtilsUi.IDataPointAccesState[]> {
    const reponse = [] as BusinessModelsUtilsUi.IDataPointAccesState[];
    const entryPoints = this.getEntryPointsInput(identifiantsConfigs, identifiantPersonne);
    return this.pointEntreeService.getEntryPoints(entryPoints).pipe(
      map((result: EntryPointDto[]) => {
        if (result) {
          identifiantsConfigs.forEach((idConf) => {
            const tmp = {
              id: idConf,
              label: '',
              dataPointAcces: {disabled: true, label: LBL_LIEN_NON_DISPO}
            } as BusinessModelsUtilsUi.IDataPointAccesState;
            const entryPointTemp = result.find((pointAcces: EntryPointDto) => {
              return pointAcces.config.id === idConf;
            });
            if (entryPointTemp) {
              tmp.label = entryPointTemp.label;
              tmp.dataPointAcces.label = '';
              if (!entryPointTemp.authorizations.valid) {
                tmp.dataPointAcces.label = LBL_LIEN_NON_HABILITE;
              } else if (!entryPointTemp.eligibility.valid) {
                tmp.dataPointAcces.label = LBL_LIEN_NON_ELIGIBLE;
              }
              tmp.dataPointAcces.disabled = !entryPointTemp.authorizations.valid || !entryPointTemp.eligibility.valid;
            } else {
              console.error("Point d'entrée non récupéré => " + idConf);
            }
            reponse.push(tmp);
          });
        }
        return reponse;
      }),
      catchError((err) => {
        console.error('Erreur de récupération des habilitations', err);
        return of(reponse);
      })
    );
  }

  getEntryPointsInput(identifiantsConfig: string[], identifiantPersonne: string) {
    return {
      flat: true,
      contextualData: {
        person: +identifiantPersonne
      },
      filters: {
        configIds: identifiantsConfig,
        contexts: [ContexteLancementEnum.SyntheseClientPro],
        eligibilityConfig: {
          types: [EligibilityCriterionTypeEnum.Essential]
        }
      }
    };
  }

  debrancherPointLancement(
    identifiantsConfig: string,
    identifiantPersonne: string,
    infoExtra?: string,
    infosExtra?: string[]
  ): void {
    const configLancement = this.dataUtilsService.getNavInputConfigLancementDefault(
      identifiantsConfig,
      identifiantPersonne
    );
    switch (identifiantsConfig) {
      case CONFIG_MYFLOW_ID:
        configLancement.localScopeData = {
          idRech: identifiantPersonne,
          provenance: 'synthese'
        };
        break;
      case CONFIG_FOCUS_ID:
        configLancement.localScopeData = {
          identifiantOC: infoExtra
        };
        break;
      case CONFIG_LANCEMENT_DOSSIER_VENTE_ID:
        configLancement.localScopeData = {
          CTD2AP: 'I' /* IHM Caisse */,
          CDD2EN: '' /* Agence, centre relation clientele, E-agence ou internet ?? */
        };
        break;
      case CONFIG_LANCEMENT_DSC_ID:
        configLancement.localScopeData = {CPAGE: infoExtra};
        break;
      case CONFIG_LANCEMENT_CONNAISSANCE_CLIENT_ID:
        configLancement.localScopeData = {codePage: infoExtra};
        break;
      case CONFIG_LANCEMENT_TRTR_PRDT_INSC_RPM_ID:
        configLancement.localScopeData = {numeroEntiteTitulaire: infoExtra};
        break;
      case CONFIG_AGENDA_RDV_ID:
        configLancement.localScopeData = {
          codeAgentEntretien: +infosExtra[0],
          dateRdv: infosExtra[2],
          numeroOccupation: +infosExtra[1],
          posteFonctionnel: +infosExtra[3]
        };
        break;
      default:
        break;
    }
    this.serviceAgentNavPort.startConfigLancement(configLancement).subscribe({
      next: (res) => noop,
      error: (err) => {
        console.error('Error startConfigLancement :', err, configLancement);
      }
    });
  }
}
