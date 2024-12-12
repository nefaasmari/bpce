/**
 * Ressource : /tiers/v3/media
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v3/tiers/media
 * Fichier généré le : 2017-10-04
 * ATTENTION: le typage REST-IT n'est pas toujours exact, il y a des corrections manuelles dans ce fichier !
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
    indicateurPreferenceMedia: string;

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
    indicateurOptin: string;

    /**
     * commentaire d'un numero de telephone
     */
    commentaire: string;

    /**
     * Code indicatif téléphone international
     */
    indicatifTelephone: string;

    /**
     * Un téléphone défini comme étant sécurisé est celui qui sera utilisé pour les transactions en ligne, les opérations sécurisées...
     * 'O'        Oui
     * 'N'        Non
     */
    indicateurSecu: string;

    /**
     * Option choisie par le client pro pour refuser de recevoir des informations commerciales par SMS, fax ou mail (ensemble des média)
     * '0'        envoi commercial par SMS, fax ou mail
     * '1'        pas d'envoi commercial par SMS, fax ou mail
     */
    indicateurProOptout: string;

    /**
     * Option choisie par le client pour recevoir des informations commerciales par SMS ou fax.
     * '0'        envoi commercial par SMS ou fax
     * '1'        pas d'envoi commercial par SMS ou fax
     */
    indicateurSmsFax: string;
  }
}
