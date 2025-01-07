import {HttpErrorResponse} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {PTMSentinelleAgent} from '@oscaiss-pormyway-managers/portal-interface';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {LoadIndicateurs, ReLoadIndicateurs} from '../../ngxs/indicateurs.actions';
import {DataUtilsRisqueAlertesService} from '../../utils/data-utils.service';
import {
  LISTENER_PM_BLOC_INDICATEURS,
  LISTENER_EI_BLOC_INDICATEURS
} from '../../models/constantes/sentinelle.constantes';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';

import {IContext} from '../../models/models/context.model';
import {DataUtilsService} from '../../business/utils/data-utils.service';

@Component({
  selector: 'clients-profcli-bloc-indicateurs-epi',
  templateUrl: './bloc-indicateurs-epi.component.html',
  styleUrls: ['./bloc-indicateurs-epi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlocIndicateursEpiComponent implements OnInit, OnDestroy {
  @Input() estVueClient: boolean;
  @Input() estBlocSynthese: boolean;
  @Input() context: IContext;

  private unsubscribe$ = new Subject<void>();
  listeIndicateurs: model.IIndicateurAlerteClient[];
  public date = new Date().toLocaleString();
  public identifiantPersonne: string;
  public codeEtablissement: string;

  @OCSelect('DonneesIndicateursState.getContent') indicateurs$: Observable<model.IIndicateurAlerteClient[]>;
  @OCSelect('DonneesIndicateursState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesIndicateursState.isLoading') isLoading$: Observable<boolean>;
  @OCSelect('DonneesIndicateursState.getMessages') messages$: Observable<model.IMessage[]>;

  constructor(
    private store: Store,
    private dataUtils: DataUtilsRisqueAlertesService,
    private readonly sentinelleService: PTMSentinelleAgent,
    private dataUtilsService: DataUtilsService
  ) {}

  ngOnInit() {
    this.codeEtablissement = this.context.codeEtablissement;
    this.identifiantPersonne = this.context.identifiantPersonne;
    if (!this.estBlocSynthese) {
      this.store.dispatch(new LoadIndicateurs(this.context));
    }
    this.indicateurs$.pipe(takeUntil(this.unsubscribe$)).subscribe((result: model.IIndicateurAlerteClient[]) => {
      if (result) {
        const listeAlertesSorted = result.slice().sort(this.dataUtils.compareAlertes);
        this.listeIndicateurs = listeAlertesSorted;
      }
    });
    this.getSentinelle();
  }

  getSentinelle(): void {
    const inputSentinellePm = this.dataUtilsService.getInputSentinelleDefault(
      LISTENER_PM_BLOC_INDICATEURS,
      this.context.identifiantPersonne
    );
    this.sentinelleService
      .getRefresh(inputSentinellePm)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((refresh: boolean) => {
        this.reloadData();
      });
    const inputSentinelleEi = this.dataUtilsService.getInputSentinelleDefault(
      LISTENER_EI_BLOC_INDICATEURS,
      this.context.identifiantPersonne
    );
    this.sentinelleService
      .getRefresh(inputSentinelleEi)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((refresh: boolean) => {
        this.reloadData();
      });
  }

  reloadData(): void {
    this.store.dispatch(new ReLoadIndicateurs(this.context));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
