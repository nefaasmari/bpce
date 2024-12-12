/**
 * Ressource : /portailmyway/v1/famille
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/portailmyway/famille
 */
declare module myway.ressources.portailmyway.sousfamille {

  export interface IGetQueryParams {
    codeSousFamille?: string;
    ihm?: string;
  }

  export interface IDeleteQueryParams {
    codeSousFamille: string;
    ihm?: string;
  }

  export interface ISousFamille {
    codeSousFamille: string;
    libelleSousFamille: string;
    positionSousFamille: number;
    codeFamille: string;
    ihm: string;
  }

}
