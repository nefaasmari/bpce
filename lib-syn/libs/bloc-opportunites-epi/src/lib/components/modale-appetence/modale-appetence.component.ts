import {Component, OnInit} from '@angular/core';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable, Subject} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Store} from '@ngxs/store';
import {DialogRef} from '@myway/ui';
import {RevueActions} from '../../ngxs/revue.actions';
import {IAppetencesClient} from '../../models/models/revue.model';

@Component({
  selector: 'clients-profcli-modale-appetence',
  templateUrl: './modale-appetence.component.html',
  styleUrls: ['./modale-appetence.component.scss']
})
export class ModaleAppetenceComponent implements OnInit {
  @OCSelect('RevueState.getContentAppetences') datas$: Observable<IAppetencesClient[]>;
  @OCSelect('RevueState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('RevueState.isLoading') isLoading$: Observable<boolean>;
  private unsubscribe$ = new Subject<void>();
  public dataModal: any;

  constructor(
    private store: Store,
    private dialogRef: DialogRef
  ) {
    this.dataModal = this.dialogRef.data;
  }

  ngOnInit(): void {
    this.store.dispatch(
      new RevueActions.LoadRevue(this.dataModal.identifiantPersonne, this.dataModal.codeEtablissement)
    );
  }
}
