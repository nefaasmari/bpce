export interface IOpportunites {
  aOpportunites: boolean;
  nombreOpportunitesClient: number;
  commentaireOpportunite: string;
  aPropositionsOuDossierVente: boolean;
  nombrePropositionsClient: number;
  estMigre: boolean;
  designationCourteClient: string;
  identifiantOC?: string;
}

export interface IOpportunitesCorporate {
  aAffairesEnCours: boolean;
  nombreAffairesEnCours: number;
  aAppetenceProduits: boolean;
  nombreAppetencesProduits: number;
  aProduitsAProposer: boolean;
  nombreProduitsAProposer: number;
  aPropositions: boolean;
  nombrePropositions: number;
  aProjetsFinancement: boolean;
  nombreProjetsFinancement: number;
}

export interface IOpportunitesAll {
  opportunites: IOpportunites;
  opportunitesCorporate: IOpportunitesCorporate;
  opportunitesMonExpert: number;
}
