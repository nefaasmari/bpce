declare module Myway.Ressource.Signature.V3 {
  export interface ISignatureElectronique extends ISignature {
    /**
     * identifiant de la signature qui correspond à id transaction dans MySign
     */
    idSignature?: number;
    /**
     * identifiant transaction Icg
     */
    idTransactionIcg: string;
    /**
     * Identifiant signataire
     */
    idSignataire: string;
    /**
     * Identifiant Session signature
     */
    idSessionSignature?: string;
    /**
     * Url Session de signature
     */
    urlSessionSignature?: string;
    /**
     * Url retour ICG
     */
    urlRetourIcg: string;
    /**
     * Statut retourner par Icg suite à la signature électronique
     */
    statutRetourIcg?: string;
    /**
     * Etat de la signature
     * 
     * <s:enumeration value="Cree"/>
     * <s:enumeration value="Annulee"/>
     * <s:enumeration value="Demarree"/>
     * <s:enumeration value="Refusee"/>
     * <s:enumeration value="Signee"/>
     * <s:enumeration value="Bloquee"/>
     * <s:enumeration value="Erreur"/>
     */
    etatSignature?: string;
      /*
       * Support matériel pour réaliser la signature electronique"
       */
    supportSignature?: string;
  }

  export interface ISignature {
    /**
     * Identifiant multi dossiers numériques
     */
    idMultiDossiersNumeriques: number;
    /**
     * Code application : exemple: CONTELEC, MYWAY
     */
    codeApplication: string;
  }

  export interface IModeSignature {
  }

  export interface IModeSignaturePapier extends IModeSignature {
  }

  export interface IModeSignatureElectronique extends IModeSignature {
    /**
     * A vérifier avec Patrice
     */
    envoiEmailInitial: boolean;
  }

  export interface IModeSignatureVisa extends IModeSignature {
    /**
     * le message visa du collaborateur à imposer sur le document
     */
    messageVisa: string;
  }

  export interface IModeSignatureDoubleClick extends IModeSignature {
    /**
     * A rensiegner par true pour envoyer le mail de confirmation
     */
    envoiEmailConfirmation: boolean;
  }

  export interface ISignatureDoubleClick extends ISignature {
  }

  export interface ISignaturePapier extends ISignature {
  }

  export interface ISignatureVisa extends ISignature {
  }

  export interface IInitierSignatureInput {
    /**
     * liste des identifiants de dossiers numériques
     */
    listeDossiersNumeriques: Array<string>;
    modeSignature: IModeSignature;
    /**
     * reférence lien entre un dossier interne existant et celui qu'on souhaite rattaché
     */
    referenceExterne: string;
    /**
     * code application : CONTELEC, MYSIGN
     */
    codeApplication: string;
  }

  export interface INouvelleAdresseMail {
    /**
     * NumeroPersonne
     */
    numeroPersonne: string;
    /**
     * AdresseMail
     */
    adresseMail: string;
  }

  export interface IMailInput {
    /**
     * type de mail. Valeurs Possibles:
     * Initial
     * Relance
     * Confirmation  : à utiliser pour envoyer les documents signés
     * Annulation
     * Expiration
     */
    typeMail: string;
    /**
     * Le mode de diffusion :
     * SignataireMsi = 0,
     * SignatairePerso = 1,
     * Conseiller = 10
     */
    modeDiffusion: string;
    /**
     * Identifiant du panier
     */
    idPanier: string;
    /**
     * Identifiant Transaction ICG
     */
    idTransactionICG: string;
    /**
     * Liste des identifiants des signataires (destinataires)
     */
    listIdDestinataires: Array<string>;
    /**
     * NouvellesAdressesMail
     */
    nouvellesAdressesMail: Array<INouvelleAdresseMail>;
    /**
     * Numéro (référence) de l'agent
     */
    referenceAgent?: string;
    /**
     * Poste fonctionnel de l'agent
     */
    posteFonctionnelAgent?: string;
    /**
     * permet la reprise de l'envoi d'email si échec
     */
    avecRepriseSurEchec?: boolean;
  }


  export interface IMailOutput {
    /**
     * IdentifiantPanier
     */
    identifiantPanier: string;
    /**
     * NumeroPersonnes
     */
    destinataires: Array<IDestinataire>;
  }

  export interface IDestinataire {
    /**
     * NumeroPersonne
     */
    numeroPersonne: string;
    /**
     * AdresseDestination
     */
    adresseDestination: string;
    /**
     * CodeStatut
     */
    codeStatut: number;
    /**
     * LibelleStatut
     */
    libelleStatut: string;
  }


 
}
