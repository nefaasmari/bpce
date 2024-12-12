/**
 * Ressource : /portailmyway/v1/elementConfPortail
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/portailmyway/elementConfPortail
 * Fichier généré le : 2017-10-10
 */
declare module myway.ressources.portailmyway.elementconfportail {

  export interface IElementConfigurationPortail {

    /**
     * identifiant technique et fonctionnel
     */
    identifiant: string;

    /**
     * libellé succinct de l'élément de configuration
     */
    libelle: string;

    /**
     * Description de l'élément de configuration
     */
    description: string;

    /**
     * Type de l'élément de configuration :
     * 1 : Entier
     * 2 : String
     * 3 : Booléen
     * 4 : Object
     * 5 : Float
     */
    typeElement: number;

    /**
     * Typologie de l'élément :
     * 1 : LISA
     * 2 : Client
     * 3 : Autre
     */
    typologieElement: number;

    valeurDefaut: string;
  }
}
