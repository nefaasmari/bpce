import {Component, ElementRef, OnInit} from '@angular/core';
import {DialogService, NotificationService, TableItemBaseComponent, TableService} from '@myway/ui';
import {PTMSentinelleAgent} from '@oscaiss-pormyway-managers/portal-interface';
import {ContextAgentServiceMySys} from '@ptmyway-stc-v2/ngx-mysys/context';
import {take} from 'rxjs/operators';
import {RisquesAlertesBusinessService} from '../../business/risques-alertes/risques-alertes-business.service';
import {BusinessModelsAlertesIndicateurs} from '../../models/models/alertes-indicateurs.model';
import {NOTIFIER_ALERTE} from '../../models/constantes/sentinelle.constantes';

@Component({
  selector: 'app-table-item-custom-action',
  templateUrl: './table-item-custom-action.component.html',
  styleUrls: ['./table-item-custom-action.component.scss']
})
export class TableItemCustomActionComponent extends TableItemBaseComponent implements OnInit {
  public data: BusinessModelsAlertesIndicateurs.IDataSuppOffre;

  constructor(
    protected el: ElementRef,
    protected service: TableService,
    private dialogService: DialogService,
    private risquesAlertesBusinessService: RisquesAlertesBusinessService,
    private contextAgentService: ContextAgentServiceMySys,
    private notification: NotificationService,
    private readonly sentinelleService: PTMSentinelleAgent
  ) {
    super(el, service);
  }

  ngOnInit() {
    this.data = this.value as unknown as BusinessModelsAlertesIndicateurs.IDataSuppOffre;
  }

  supprimer(): void {
    this.dialogService
      .confirm({
        titleHeader: "Confirmer la suppression de l'offre",
        message: `Cette offre va être supprimée directement.<br />Confirmez-vous la suppression de l'offre n° ${this.data.numeroOffre} ?`
      })
      .subscribe((ok) => {
        if (ok) {
          this.contextAgentService
            .getAuthentificationInfoMySys()
            .pipe(take(1))
            .subscribe((authentificationInfo) => {
              if (authentificationInfo) {
                return this.risquesAlertesBusinessService
                  .supprimerEnveloppeOffre(
                    +authentificationInfo.agent.codeAgent,
                    this.data.codeEtablissement,
                    authentificationInfo.posteFonctionnel.identifiantEds,
                    authentificationInfo.agent.codeQualite,
                    authentificationInfo.rattachement.identifiantEds,
                    this.data.numeroOffre
                  )
                  .subscribe((res) => {
                    if (res) {
                      this.sentinelleService
                        .setDirty({
                          idBlocMetierNotify: NOTIFIER_ALERTE,
                          params: new Map().set('identifiantPersonne', this.data.identifiantPersonne)
                        })
                        .subscribe();
                    } else {
                      this.notification.openInfo('Erreur suppression offre vide n°' + this.data.numeroOffre);
                    }
                  });
              }
            });
        }
      });
  }
}
