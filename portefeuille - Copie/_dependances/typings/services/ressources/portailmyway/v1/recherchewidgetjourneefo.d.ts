/**
 * Ressource : /portailmyway/v1/rechercheWidgetJourneeFO
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/portailmyway/rechercheWidgetJourneeFO
 * Fichier généré le : 2018-02-22
 */
declare module myway.ressources.portailmyway.recherchewidgetjourneefo {

  export interface IWidget {
    identifiantWidget: number;
    libelleWidget: string;
    libelleHabilitationWidget: string;
    codeTailleWidget: number;
    versionDebutPublication: string;
    versionFinPublication: string;
    numeroPositionWidget: number;
  }

  export interface IGetQueryParams {
    codeEtablissement: string;
    identifiantTypePosteFonctionnel: string;
  }
  
}
