declare module Myway.Ressource.Signature.V3 {
  export interface ISignatureElectronique extends ISignature {
    /**
     * identifiant de la signature qui correspond � id transaction dans MySign
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
     * Statut retourner par Icg suite � la signature �lectronique
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
       * Support mat�riel pour r�aliser la signature electronique"
       */
    supportSignature?: string;
  }

  export interface ISignature {
    /**
     * Identifiant multi dossiers num�riques
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
     * A v�rifier avec Patrice
     */
    envoiEmailInitial: boolean;
  }

  export interface IModeSignatureVisa extends IModeSignature {
    /**
     * le message visa du collaborateur � imposer sur le document
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
     * liste des identifiants de dossiers num�riques
     */
    listeDossiersNumeriques: Array<string>;
    modeSignature: IModeSignature;
    /**
     * ref�rence lien entre un dossier interne existant et celui qu'on souhaite rattach�
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
     * Confirmation  : � utiliser pour envoyer les documents sign�s
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
     * Num�ro (r�f�rence) de l'agent
     */
    referenceAgent?: string;
    /**
     * Poste fonctionnel de l'agent
     */
    posteFonctionnelAgent?: string;
    /**
     * permet la reprise de l'envoi d'email si �chec
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
