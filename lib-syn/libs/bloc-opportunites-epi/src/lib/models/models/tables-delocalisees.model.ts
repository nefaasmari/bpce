export namespace BusinessModelsDonneesDelocalisees {
  export enum TableDelocEnum {
    FORME_JURIDIQUE = 'DU1P',
    DATA_NAF = 'DU2X',
    NOM_ETABLISSEMENT = 'CV51',
    SEGMENTATION_RELAT_RELACTIONECO = 'DU2L',
    DETAIL_SEGMENTATION_RELATIONNELLE = 'DU21',
    SEGMENT_RISQUE = 'MY7A',
    FAMILLE_PRODUIT = 'P61A',
    SOUS_FAMILLE_PRODUIT = 'P61C'
  }

  export interface IDonneeDelocalisee<T> {
    id: string;
    referentiel: string;
    nom: string;
    datemaj: string;
    donnees: Array<T>;
  }

  export interface ISegmentationsRelRelationEco {
    CVDLHI: string;
    CODLTS: string;
    CODLSC: string;
    LIDLSG: string;
    CODLST: string;
    LIDLSC: string;
    CIDLRN: string;
    CIDLRS: string;
  }

  export interface IDetailSegmentationsRel {
    CODLTS: string;
    LLDCSG: string;
    LLDCS1: string;
    CODLST: string;
  }

  export interface IJuridique {
    codeFamilleCategorieJuridique: string;
    codeFormeJuridiqueProfessionel: string;
    codeCategorieJuridiqueStatut: string;
    categorieJuridiqueEligibleEirl: string;
    libelleCategorieJuridique: string;
  }

  export interface INaf {
    codeFamilleNAFInsee: string;
    libelleNAFInsee: string;
    codeFamilleNAFInseeSuite: string;
  }

  export interface ITableEtablissement {
    CICEOR: string;
    CTCEOG: string;
    COCXBQ: string;
    LBCEOR: string;
    COCEOR: string;
  }

  export interface ITableListeEtablissement {
    id: string;
    referentiel: string;
    nom: string;
    datemaj: string;
    donnees: Array<ITableEtablissement>;
  }

  export interface ITableSegmentRisque {
    /* code */
    CDMBSR: string;
    /* libelle */
    LI3SEG: string;
  }

  export interface ITableFamilleProduit {
    HMEHEG: string;
    CGPIFA: string;
    HDEHEG: string;
    IDSECR: string;
    IDSEMJ: string;
    LBPIFA: string;
  }

  export interface ITableListeFamilleProduit {
    id: string;
    referentiel: string;
    nom: string;
    datemaj: string;
    donnees: Array<ITableFamilleProduit>;
  }

  export interface ITableSousFamilleProduit {
    CGPIAF: string;
    NSPISF: string;
    HMEHEG: string;
    CGPISF: string;
    LBPISF: string;
    CGPIFA: string;
    HDEHEG: string;
    IDSECR: string;
    IDSEMJ: string;
    CIPISE: string;
  }

  export interface ITableListeSousFamilleProduit {
    id: string;
    referentiel: string;
    nom: string;
    datemaj: string;
    donnees: Array<ITableSousFamilleProduit>;
  }
}
