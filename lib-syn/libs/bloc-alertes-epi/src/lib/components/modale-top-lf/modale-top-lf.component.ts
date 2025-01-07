import {Component} from '@angular/core';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';

@Component({
  selector: 'clients-profcli-modale-top-lf',
  templateUrl: './modale-top-lf.component.html',
  styleUrls: ['./modale-top-lf.component.scss']
})
export class ModaleTopLFComponent {
  @OCSelect('DonneesIndicateursState.getContentTopLF') datas$: Observable<model.IDataTopLF>;
  @OCSelect('DonneesIndicateursState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesIndicateursState.isLoading') isLoading$: Observable<boolean>;
}
