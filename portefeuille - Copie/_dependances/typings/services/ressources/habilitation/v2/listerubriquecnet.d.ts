/**
 * Ressource : /habilitation/v2/listeRubriqueCNet
 */
declare module myway.ressources.habilitation.listerubriquecnet {
  export type OrigineRubrique = "Communaute" | "National" | "Regional";

  export interface IGetQueryParams {
    codeEtablissement: string;
    origineRubrique?: OrigineRubrique;
  }

  export interface IRubrique {
    /**
     * Sigle (habilitation de l'application)
     */
    sigle: string;

    /**
     * Nom de l'application
     */
    nom: string;

    /**
     * Type d'affichage de l'application
     */
    typeAffichage: number;

    /**
     * Etablissements inclus
     */
    sitesInclus: Array<string>;

    /**
     * Etablissements exclus
     */
    sitesExclus: Array<string>;

    /**
     * Origine de la rubrique (National, Regional ou Communaute)
     */
    origine: string;
  }

}
