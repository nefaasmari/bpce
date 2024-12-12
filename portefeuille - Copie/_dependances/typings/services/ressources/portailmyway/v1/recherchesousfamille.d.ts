/**
 * Ressource : /portailmyway/v1/rechercheSousFamilles
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/portailmyway/rechercheSousFamilles
 */
declare module myway.ressources.portailmyway.recherchesousfamille {

  export interface IGetQueryParams {
    motClef?: string;
    codeEtablissement?: string;
    ihm?: string;
  }

  export interface ISousFamille {
    codeSousFamille: string;
    libelleSousFamille: string;
    positionSousFamille: number;
    codeFamille: string;
    libelleFamille: string;
    codeEtablissement: string;
  }
}
