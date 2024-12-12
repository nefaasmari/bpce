/**
 * Ressource : /portailmyway/v1/regleApplication
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v1/portailmyway/regleApplication
 */
declare module myway.ressources.portailmyway.regleapplication {
  export interface IRegle {
    /**
     * Identifiant de la règle
     */
    idnt: number;

    /**
     * Code de la règle
     */
    code: string;

    /**
     * Libellé de la règle
     */
    libelle: string;

    /**
     * Description de la règle
     */
    description: string;

    /**
     * Valeur par défaut de la règle
     */
    valeurDefaut: boolean;

    /**
     * Ordre d'affichage de la règle
     */
    ordre: number;
  }

}
