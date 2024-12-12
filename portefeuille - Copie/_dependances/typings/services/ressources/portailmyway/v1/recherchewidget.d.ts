/**
 * Ressource : /portailmyway/v1/recherchewidget
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/portailmyway/rechercheWidget
 */
declare module myway.ressources.portailmyway.recherchewidget {

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
