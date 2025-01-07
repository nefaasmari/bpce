export interface IRevue {
  revueProduitClient: IRevueProduitClient[];
  appetencesClient: IAppetencesClient[];
  revueEnrichie: IRevueEnrichie[];
}

export interface IAppetencesClient {
  famille: string;
  libelleAppetence: string;
}

export interface IRevueProduitClient {
  codeSousFamilleProduitPtf: string;
  libelleSousFamilleProduitPtf: string;
  indicateurClientEquipe: string;
  indicateurClientAEquiper: string;
  indicateurClientNonInteressProd: string;
  indicateurTarifARenegocier: string;
  codeStatut: string;
  nombrePropositionLieeAffaire: number;
  tauxObjectifFlux: number;
  indicateurClientAActiver: string;
}

export interface IRevueEnrichie {
  codeFamilleProduitPtf: string;
  libelleFamilleProduitPtf: string;
  revueProduitClient: IRevueProduitClient[];
}
