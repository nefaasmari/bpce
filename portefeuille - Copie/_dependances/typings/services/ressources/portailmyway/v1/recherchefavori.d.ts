/**
 * Ressource : /portailmyway/v1/rechercheFavori
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/portailmyway/rechercheFavori
 * Fichier généré le : 2018-03-29
 */
declare module myway.ressources.portailmyway.recherchefavori {

  export interface IApplication {

    codeApplication: string;

    codeEtablissement: string;

    libelleDeviceCompatible: string;

    codeVisibiliteApplication: number;

    libelleHabilitation: string;

    codeTypeApplication: number;

    libelleDescriptionApplication: string;

    libelleNomApplication: string;

    codeSousFamilleCommunautaire: string;

    codeSousFamilleEtablissement: string;

    dateDebutDisponibilite: string;

    dateFinDisponibilite: string;

    codeBesoinOuvertureGuichet: number;

    codeClientIdentifie: number;

    identifiantVersionDebutPublication: string;

    prepilote: number;
  }

  export interface IFavori {

    numeroPosition: number;

    pushToFavoris: boolean;

    application: IApplication;

    identifiantFavoriMetier: number;
  }

  export interface ICategorieMetier {

    codeCategorie: number;

    libelleCategorie: string;

    numeroPosition: number;

    listeFavori: Array<IFavori>;
  }

  export interface IGetQueryParams {
    codeEtablissement: string;
    typePosteFonctionnel?: string;
    versionMySys?: string;
    ihm?: string;
    codeCategorie?: string;
  }
  
}
