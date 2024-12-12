/**
 * Ressource : /tiers/v1/media
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v1/tiers/media
 * Fichier généré le : 2017-10-04
 * PAS EN PHASE AVEC LE SERVICE REST...
 */
declare module myway.ressources.tiers.media {

  export interface IMedia {

    identificationPersonne: IIdentificationPersonne;

    listeMedia: Array<IListeMedia>;
  }

  export interface IIdentificationPersonne {

    /**
     * Identifiant d'un Etablissement du RCE.
     * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification de la personne dans le  SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne: number;
  }

  export interface IListeMedia {

    /**
     * '01'       Téléphone fixe
     * '02'       Téléphone mobile
     * '03'       E-mail
     * '04'       Fax
     * '05'       SiteWeb
     */
    codeTypeMedia: string;

    /**
     * libellé type média
     */
    libelleTypeMedia: string;

    /**
     * 'P'        Personnel
     * 'T'        Professionnel
     * 'A'       Sécurisation Opérations en Ligne (SOL)
     */
    codeTypeUsageMedia: string;

    /**
     * libellé type usage média
     */
    libelleTypeUsageMedia: string;

    /**
     * ‘O’        Oui
     * ‘N’        Non
     */
    indicateurPreferenceMedia: boolean;

    /**
     * Adresse mail ou n° de téléphone
     */
    referenceAccesMedia: string;

    /**
     * Indique si le client accepte d'être contacté par ce moyen de contact (Mail, téléphone). 
     * Valeurs possibles :
     * 'O'        Oui
     * 'N'        Non
     */
    indicateurOptin: boolean;

    /**
     * commentaire d'un numero de telephone
     */
    commentaire: string;
  }
}
