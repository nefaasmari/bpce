/**
 * Ressource : /portailmyway/v1/famille
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/portailmyway/famille
 */
declare module myway.ressources.portailmyway.famille {

  export interface IGetQueryParams {
    codeEtablissement?: string;
    codeFamille?: string;
  }

  export interface IDeleteQueryParams {
    codeEtablissement: string;
    codeFamille: string;
    ihm?: string;
  }
  
  export interface IFamille {
    codeEtablissement: string;
    libelleFamille: string;
    positionFamille: number;
    codeFamille: string;
    ihm: string;
  }

}
