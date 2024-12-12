/**
 * Ressource : /portailmyway/v1/zonePortail
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/portailmyway/zonePortail
 * Fichier généré le : 2017-10-13
 */
declare module myway.ressources.portailmyway.zoneportail {

  export interface IZonePortail {

    /**
     * identifiant technique et fonctionnel
     */
    identifiant: string;

    /**
     * Libellé de la zone
     */
    libelle: string;

    /**
     * Identifiant de la zone parente
     */
    idZoneParent: string;
  }
}
