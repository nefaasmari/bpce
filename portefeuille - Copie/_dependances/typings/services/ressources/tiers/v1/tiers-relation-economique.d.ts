declare module myway.ressources.tiers.v1.relationEconomique {

  export interface IPersonneEnRelation {
    codeEtablissement: string;
    identifiantPersonne: number;
    codePersonnaliteJuridique: string;
    libellePersonnaliteJuridique: string;
    codeStatut: string;
    libelleStatut: string;
    codeTypeRelation: string;
    libelleTypeRelation: string;
    dateEntreeRelation: string;
    codeGuichetRisque: string;
    codeMarche: any;
  }

}
