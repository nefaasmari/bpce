import {Pipe, PipeTransform} from '@angular/core';
import {BusinessModelsAlertesIndicateurs as model} from '../models/models/alertes-indicateurs.model';

@Pipe({
  name: 'vueClientPipe',
  pure: true
})
export class VueClientPipe implements PipeTransform {
  transform(items: model.IIndicateurAlerteClient[], filtre: boolean): model.IIndicateurAlerteClient[] {
    if (!filtre) {
      return items;
    } else {
      let result = items;
      result = items.filter((item) => item.estVueClient === filtre);
      return result;
    }
  }
}
