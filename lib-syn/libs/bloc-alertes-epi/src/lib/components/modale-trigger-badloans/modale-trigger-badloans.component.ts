import {Component} from '@angular/core';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';

@Component({
  selector: 'clients-profcli-modale-trigger-badloans',
  templateUrl: './modale-trigger-badloans.component.html',
  styleUrls: ['./modale-trigger-badloans.component.scss']
})
export class ModaleTriggerBadloansComponent {
  @OCSelect('DonneesIndicateursState.getContentBadLoans') datasBadloans$: Observable<model.IDataBadLoans[]>;
  @OCSelect('DonneesIndicateursState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesIndicateursState.isLoading') isLoading$: Observable<boolean>;
}
