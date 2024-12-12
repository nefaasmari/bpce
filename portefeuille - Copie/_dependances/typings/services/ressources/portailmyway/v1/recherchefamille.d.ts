/**
 * Ressource : /portailmyway/v1/rechercheFamille
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/portailmyway/rechercheFamille
 */
declare module myway.ressources.portailmyway.recherchefamille {

  export interface IGetQueryParams {
    motClef?: string;
    codeEtablissement?: string;
    ihm?: string;
  }

  export interface IFamille {
    codeFamille: string;
    codeEtablissement: string;
    libelleFamille: string;
    positionFamille: number;
    listeSousFamille: Array<ISousFamille>;
  }

  export interface ISousFamille {
    codeSousFamille: string;
    codeFamille: string;
    libelleSousFamille: string;
    positionSousFamille: number;
  }

}
