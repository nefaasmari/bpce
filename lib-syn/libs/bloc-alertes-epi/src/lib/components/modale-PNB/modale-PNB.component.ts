import {Component} from '@angular/core';
import {OCSelect} from '@outinfr-commyway/commycli-lib-ngxs-upgrade';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {DecimalPipe} from '@angular/common';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';

@Component({
  selector: 'clients-profcli-modale-pnb',
  templateUrl: './modale-PNB.component.html',
  styleUrls: ['./modale-PNB.component.scss']
})
export class ModalePNBComponent {
  @OCSelect('DonneesIndicateursState.getContentPNB') datas$: Observable<model.IDataPNB>;
  @OCSelect('DonneesIndicateursState.getError') error$: Observable<HttpErrorResponse>;
  @OCSelect('DonneesIndicateursState.isLoading') isLoading$: Observable<boolean>;

  constructor(private _decimalPipe: DecimalPipe) {}

  getEvolutionPNB(pnbN: number, pnbN1: number): string {
    if (!pnbN1) return '';
    return `${(pnbN - pnbN1) / pnbN1 > 0 ? '+' : ''}${this._decimalPipe.transform(((pnbN - pnbN1) / pnbN1) * 100, '1.0-2')}%`;
  }
}
