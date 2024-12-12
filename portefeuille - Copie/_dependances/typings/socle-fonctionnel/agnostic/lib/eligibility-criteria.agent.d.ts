import { WorkContext } from '@oscaiss-pormyway-managers/socfon-lib-model';
import { Observable } from 'rxjs';
import { AbstractBaseAgentService } from './base.agent';
export declare class EligibilityCriteriaService extends AbstractBaseAgentService {
    constructor();
    /**
     * Renvoie la situation de travail de l'agent (Interne Etablissement, Interne Groupe, Externe Commercial, Externe Télétravail)
     */
    getWorkContext(): Observable<WorkContext>;
}
