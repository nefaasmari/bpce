import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IContext} from '../../models/models/context.model';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';
import {LoadIndicateursDetail} from '../../ngxs/indicateurs-details.actions';

@Component({
  selector: 'clients-profcli-modale-satisfaction-client',
  templateUrl: './modale-satisfaction-client.component.html',
  styleUrls: ['./modale-satisfaction-client.component.scss']
})
export class ModaleSatisfactionClientComponent implements OnInit {
  @OCSelect('ContextState.getContent') context$: Observable<IContext>;
  @OCSelect('DonneesIndicateursDetailState.getContent') indicateurDetail$: Observable<model.ITabSatisfactionClient>;
  @OCSelect('DonneesIndicateursDetailState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesIndicateursDetailState.isLoading') isLoading$: Observable<boolean>;

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.context$.pipe(takeUntil(this.unsubscribe$)).subscribe((result: IContext) => {
      if (result) {
        this.store.dispatch(new LoadIndicateursDetail(result.codeEtablissement, result.identifiantPersonne));
      }
    });
  }
}
