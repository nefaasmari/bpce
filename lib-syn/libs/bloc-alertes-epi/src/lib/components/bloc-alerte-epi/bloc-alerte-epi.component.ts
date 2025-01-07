import {HttpErrorResponse} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Store} from '@ngxs/store';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {PTMSentinelleAgent} from '@oscaiss-pormyway-managers/portal-interface';
import {DataUtilsService} from '../../business/utils/data-utils.service';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';
import {LoadAlertes, ReLoadAlertes} from '../../ngxs/alertes.actions';
import {DataUtilsRisqueAlertesService} from '../../utils/data-utils.service';
import {
  LISTENER_EI_BLOC_ALERTES_BANDEAU,
  LISTENER_PM_BLOC_ALERTES_BANDEAU,
  LISTENER_EI_BLOC_ALERTES,
  LISTENER_PM_BLOC_ALERTES
} from '../../models/constantes/sentinelle.constantes';

@Component({
  selector: 'clients-profcli-bloc-alerte-epi',
  templateUrl: './bloc-alerte-epi.component.html',
  styleUrls: ['./bloc-alerte-epi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlocAlerteEpiComponent implements OnInit, OnDestroy {
  @Input() codeEtablissement: string;
  @Input() identifiantPersonne: string;
  @Input() estPersonnePhysique: boolean;
  @Input() nbMAxDefault: number;
  @Input() estBlocSynthese: boolean;
  @Output() compteur = new EventEmitter<number>();
  @Output() debranchement = new EventEmitter<boolean>();
  @Output() popUp = new EventEmitter<boolean>();

  private unsubscribe$ = new Subject<void>();
  listeAlertes: model.IIndicateurAlerteClient[];
  public date = new Date().toLocaleString();
  private listenerPROEI: string;
  private listenerBDR: string;

  @OCSelect('DonneesAlertesState.getContent') alertes$: Observable<model.IAlertes>;
  @OCSelect('DonneesAlertesState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesAlertesState.isLoading') isLoading$: Observable<boolean>;

  constructor(
    private store: Store,
    private dataUtils: DataUtilsRisqueAlertesService,
    private readonly sentinelleService: PTMSentinelleAgent,
    private dataUtilsService: DataUtilsService
  ) {}

  ngOnInit() {
    if (!this.estBlocSynthese) {
      this.listenerPROEI = LISTENER_EI_BLOC_ALERTES_BANDEAU;
      this.listenerBDR = LISTENER_PM_BLOC_ALERTES_BANDEAU;
      this.store.dispatch(new LoadAlertes(this.codeEtablissement, this.identifiantPersonne, this.estPersonnePhysique));
    } else {
      this.listenerPROEI = LISTENER_EI_BLOC_ALERTES;
      this.listenerBDR = LISTENER_PM_BLOC_ALERTES;
    }
    if (!this.nbMAxDefault || isNaN(this.nbMAxDefault)) {
      this.nbMAxDefault = 99;
    }
    this.alertes$.pipe(takeUntil(this.unsubscribe$)).subscribe((result: model.IAlertes) => {
      if (result?.indicateurAlerteClient) {
        const listeAlertesSorted = result.indicateurAlerteClient.slice().sort(this.dataUtils.compareAlertes);
        this.listeAlertes = listeAlertesSorted;
        this.compteur.emit(result.indicateurAlerteClient.length);
      }
    });
    this.getSentinelle();
  }

  getSentinelle(): void {
    const inputSentinellePm = this.dataUtilsService.getInputSentinelleDefault(
      this.listenerBDR,
      this.identifiantPersonne
    );
    this.sentinelleService
      .getRefresh(inputSentinellePm)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((refresh: boolean) => {
        this.reloadData();
      });
    const inputSentinelleEi = this.dataUtilsService.getInputSentinelleDefault(
      this.listenerPROEI,
      this.identifiantPersonne
    );
    this.sentinelleService
      .getRefresh(inputSentinelleEi)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((refresh: boolean) => {
        this.reloadData();
      });
  }

  reloadData(): void {
    this.store.dispatch(new ReLoadAlertes(this.codeEtablissement, this.identifiantPersonne, this.estPersonnePhysique));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  debranchementEvt(): void {
    this.debranchement.emit(true);
  }
  popUpEvt($event) {
    this.popUp.emit($event);
  }
}
