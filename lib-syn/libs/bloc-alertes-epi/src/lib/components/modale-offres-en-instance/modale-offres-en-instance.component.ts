import {Component} from '@angular/core';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';

@Component({
  selector: 'clients-profcli-modale-offres-en-instance',
  templateUrl: './modale-offres-en-instance.component.html',
  styleUrls: ['./modale-offres-en-instance.component.scss']
})
export class ModaleOffresEnInstanceComponent {
  @OCSelect('DonneesAlertesState.getOffresInstanceContent') offresEnInstance$: Observable<model.IOffreEnInstance[]>;
  @OCSelect('DonneesAlertesState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesAlertesState.isLoading') isLoading$: Observable<boolean>;
}
