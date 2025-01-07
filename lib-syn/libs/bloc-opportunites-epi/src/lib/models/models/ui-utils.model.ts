export namespace BusinessModelsUtilsUi {
  export const ECHELLE_M = 'M';
  export const ECHELLE_K = 'k';
  export const ECHELLE_G = 'G';
  export const ECHELLE_U_EURO = '';
  export const ARRAY_NIVEAUX_UNITES: string[] = [ECHELLE_U_EURO, ECHELLE_K, ECHELLE_M, ECHELLE_G];
  export const LENGTH_MAX_VALEURS_CHART = 5;

  export enum typePageEnum {
    standard,
    graphique,
    detailProduit,
    ei,
    groupe
  }

  export interface IDataLancementProcessus {
    idConfigLancement: string;
    processTypeContextSpecifique?: enumTypeContextSpecifique;
  }

  export enum enumTypeContextSpecifique {
    DRC,
    ATD,
    CC,
    CCGEST,
    SURV_RISQUE,
    MAD,
    WATCHLIST,
    QCF
  }

  export interface IDataPointAcces {
    disabled: boolean;
    label: string;
  }

  export interface IDataPointAccesState {
    id: string;
    label?: string;
    dataPointAcces: IDataPointAcces;
  }
}
