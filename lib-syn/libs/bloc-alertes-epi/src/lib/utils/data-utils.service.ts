import {Injectable} from '@angular/core';
import {BusinessModelsAlertesIndicateurs as model} from '../models/models/alertes-indicateurs.model';
import {
  ICONCHECK,
  ICONCLOCHE,
  ICONWARNING,
  ICONFLECHEHAUT,
  ICONFLECHEBAS,
  ICONFLECHEEGAL,
  ICONEMOJICONTENT,
  ICONEMOJIMECONTENT,
  ICONEMOJINEUTRE
} from '../models/constantes/ihm.constantes';

@Injectable({
  providedIn: 'root'
})
export class DataUtilsRisqueAlertesService {
  /**
   * Méthode de comparaison des typeDebranchement des alertes:
   * d'abord celle qui en ont un, ensuite celles dont le typeDebranchement est undefined
   */
  compareAlertes(alerte1: model.IIndicateurAlerteClient, alerte2: model.IIndicateurAlerteClient) {
    if (alerte1.typeDebranchement === undefined && alerte2.typeDebranchement !== undefined) {
      return 1;
    } else {
      if (alerte1.typeDebranchement !== undefined && alerte2.typeDebranchement === undefined) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  getIcon(item: model.IIndicateurAlerteClient): string {
    if (item && item.iconType) {
      switch (item.iconType) {
        case model.enumIconType.CHECK:
          return ICONCHECK;
        case model.enumIconType.CLOCHE:
          return ICONCLOCHE;
        case model.enumIconType.WARNING:
          return ICONWARNING;
        case model.enumIconType.FLECHE:
          switch (item.typeInfo) {
            case model.enumTypeInfo.OK:
              return ICONFLECHEHAUT;
            case model.enumTypeInfo.KO:
              return ICONFLECHEBAS;
            case model.enumTypeInfo.EQUAL:
              return ICONFLECHEEGAL;
            case model.enumTypeInfo.WARN:
              return '';
            default:
              break;
          }
          break;
        case model.enumIconType.EMOJI:
          switch (item.typeInfo) {
            case model.enumTypeInfo.OK:
              return ICONEMOJICONTENT;
            case model.enumTypeInfo.KO:
              return ICONEMOJIMECONTENT;
            case model.enumTypeInfo.EQUAL:
              return ICONEMOJINEUTRE;
            case model.enumTypeInfo.WARN:
              return ICONEMOJINEUTRE;
            default:
              break;
          }
          break;
        default:
          break;
      }
    } else {
      return '';
    }
  }

  getIconClass(item: model.IIndicateurAlerteClient): string {
    if (item && item.iconType && item.iconType === model.enumIconType.WARNING) {
      return 'warning';
    }
    if (item && item.typeInfo) {
      switch (item.typeInfo) {
        case model.enumTypeInfo.OK:
          return 'success';
        case model.enumTypeInfo.KO:
          return 'error';
        case model.enumTypeInfo.EQUAL:
          return '';
        case model.enumTypeInfo.WARN:
          return 'warning';
        default:
          break;
      }
    } else {
      return '';
    }
  }

  getIconColor(item: model.IIndicateurAlerteClient): string {
    if (item && item.iconType && item.iconType === model.enumIconType.WARNING) {
      return '#fa5c00';
    }
    if (item && item.typeInfo) {
      switch (item.typeInfo) {
        case model.enumTypeInfo.OK:
          return '#398538';
        case model.enumTypeInfo.KO:
          return '#e91b06';
        case model.enumTypeInfo.EQUAL:
          return '#333333';
        case model.enumTypeInfo.WARN:
          return '#fa5c00';
        default:
          return '';
      }
    } else {
      return '';
    }
  }
}
