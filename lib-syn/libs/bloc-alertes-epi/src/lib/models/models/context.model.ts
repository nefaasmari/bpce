import {IParametresComptables} from '@ptmyway-stc-v2/ngx-mysys/context';
export interface IContext {
  identifiantPersonne: string;
  codeEtablissement: string;
  estPersonnePhysique?: boolean;
  codeMarche: string;
  dataRecherchePersonne?: any;
  parametresComptables?: IParametresComptables;
  identifiantNationalAgent?: string;
  estClient?: boolean;
  estProspect?: boolean;
  estTiers?: boolean;
  codeAgent: string;
  identifiantEdsAgent: number;
}
