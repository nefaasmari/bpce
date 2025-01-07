import {Component, Input} from '@angular/core';
import {BusinessModelsAlertesIndicateurs as model} from '../../models/models/alertes-indicateurs.model';

@Component({
  selector: 'clients-profcli-description-detail-satisfaction',
  templateUrl: './description-detail-satisfaction.component.html',
  styleUrls: ['./description-detail-satisfaction.component.scss']
})
export class DescriptionDetailSatisfactionComponent {
  @Input() item: model.IDescritionSatisfactionClient;
}
