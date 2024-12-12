/**
 * Ressource : /portailmyway/v1/widget
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/portailmyway/widget
 */
declare module myway.ressources.portailmyway.widget {

  export interface IGetQueryParams {
    identifiantWidget: number;
    versionMySys: string;
  }
  
  export interface IWidget {
    identifiantWidget: number;
    versionDebutPublication: string;
    libelleWidget: string;
    libelleHabilitationWidget: string;
    codeTailleWidget: number;
    versionFinPublication: string;
    codePrepilote: number;  
  }

}
