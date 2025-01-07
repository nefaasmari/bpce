import {Component} from '@angular/core';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';

@Component({
  selector: 'clients-profcli-modale-tarification',
  templateUrl: './modale-tarification.component.html',
  styleUrls: ['./modale-tarification.component.scss']
})
export class ModaleTarificationComponent {
  @OCSelect('DonneesIndicateursState.getContentTarification') datas$: Observable<model.IDataTarification>;
  @OCSelect('DonneesIndicateursState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesIndicateursState.isLoading') isLoading$: Observable<boolean>;
}
