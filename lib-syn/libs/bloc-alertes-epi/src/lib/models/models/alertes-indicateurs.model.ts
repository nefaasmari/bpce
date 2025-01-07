import {BusinessModelsUtilsUi} from './ui-utils.model';

export namespace BusinessModelsAlertesIndicateurs {
  export interface IIndicateurs {
    dataGCEDOC: IIndicateurGCEDOC;
    indicateurAlerteClient: IIndicateurAlerteClient[];
    dataBadLoans?: IDataBadLoans[];
    dataTopLF?: IDataTopLF;
    dataPNB?: IDataPNB;
    dataTarification?: IDataTarification;
    estTopActif?: boolean;
    messages?: IMessage[];
  }

  export interface IDataPNB {
    montantN: number;
    montantN1: number;
    montant3112: number;
    dataArrete: string;
    periodeN: string;
    periodeN1: string;
    periode3112: string;
  }
  export interface IDataTarification {
    dateDebutN: string;
    dateFinN: string;
    montantStandardN: number;
    montantAppliqueN: number;
    montantRemiseN: number;
    dateDebutN1: string;
    dateFinN1: string;
    montantStandardN1: number;
    montantAppliqueN1: number;
    montantRemiseN1: number;
  }
  export interface IMessage {
    messageLib: string;
  }

  export interface IDataTopLF {
    rationLevierNet: number;
    rationLevierBrut: number;
    dateRatio: string;
  }
  export interface IDataBadLoans {
    code: string;
    libelle: string;
    dateDebut: Date;
    dateDebutStr: string;
    description: string;
  }

  export interface IAlertes {
    indicateurAlerteClient: IIndicateurAlerteClient[];
    dataOffreEnInstance?: IOffreEnInstance[];
    dataRPM?: IDataRPM[];
    messages?: IMessage[];
  }

  export interface IOffreEnInstance {
    numeroEntiteTitulaire: number;
    designationEntite: string;
    libelleOffre: string;
    compteOuContratSupport: string;
    commentaire: string;
    dataSuppressionOffre: IDataSuppOffre;
  }

  export interface IDataSuppOffre {
    estSupprimable: boolean;
    numeroOffre: number;
    codeEtablissement: string;
    identifiantPersonne: string;
  }

  export interface IIndicateursEtAlertes {
    dataIndicateurs: IIndicateurs;
    dataAlertes: IAlertes;
  }
  export interface IIndicateurAlerteClient {
    libelle: string;
    valeur?: string;
    typeInfo?: enumTypeInfo;
    iconType?: enumIconType;
    estVueClient?: boolean;
    estPersonnePhysique?: boolean;
    habilitation?: string;
    typeDebranchement: enumTypeDebranchement;
    dataLancementProcessus?: BusinessModelsUtilsUi.IDataLancementProcessus;
    dataPopupInfo?: IDataPopupInfo;
    tooltip?: string;
    valeurBadge?: string;
  }

  export interface IIndicateurGCEDOC {
    bale2: IBale2;
  }

  export interface IBale2 {
    noteBale2: string;
    moteurNotation: string;
    dateNotation: string;
    etablissementNotation: string;
    etablissementPilote: string;
  }

  export interface IDataPopupInfo {
    contenu?: string;
    titre?: string;
    typeComposantSpecifique?: enumTypeComposantPopup;
  }

  export enum enumTypeComposantPopup {
    TXT = 0,
    SATISFACTIONCLIENT = 1,
    OFFREENINSTANCE = 2,
    TRIGGERBADLOANS = 3,
    RPM = 4,
    TOPLF = 5,
    RECLAMATION = 6,
    PNB = 7,
    TARIFICATION = 8
  }

  export interface ITabSatisfactionClient {
    datas: ISatisfactionClient[];
  }

  export interface ISatisfactionClient {
    codeNiveauSatisfaction: string;
    libelleNiveauSatisfaction: string;
    dateReponseEnquete: string;
    motifEchange: string;
    description: IDescritionSatisfactionClient;
    codeNoteRecommandation: string;
  }

  export interface IDataRPM {
    identifiantEntiteTitulaire: string;
    designationEntiteTitulaire: string;
    codeUsageEntiteTitulaire: string;
    modeCompositionEntiteTitulaire: string;
  }

  export interface IDescritionSatisfactionClient {
    commentaire: string;
  }

  export enum enumTypeDebranchement {
    CONFIGLANCEMENT,
    POPUP
  }

  export enum enumTypeInfo {
    OK = 'OK' as any,
    WARN = 'WARN' as any,
    EQUAL = 'EQUAL' as any,
    KO = 'KO' as any
  }

  export enum enumIconType {
    WARNING = 'WARNING' as any,
    FLECHE = 'FLECHE' as any,
    EMOJI = 'EMOJI' as any,
    CHECK = 'CHECK' as any,
    CLOCHE = 'CLOCHE' as any
  }

  export enum enumTypeIndicateur {
    OK = 'OK' as any,
    WARN = 'WARN' as any,
    KO = 'KO' as any
  }

  export enum enumTypeAlerte {
    OK = 'OK' as any,
    WARN = 'WARN' as any,
    KO = 'KO' as any
  }

  export enum BooleanEnum {
    OUI = 'Oui' as any,
    NON = 'Non' as any
  }

  export enum ICompletudeEnum {
    VIDE = 'vide' as any,
    INCOMPLET = 'incomplet' as any,
    COMPLET = 'complet' as any,
    ALERTE = 'alerte' as any,
    INCONNU = 'absent' as any
  }
}
