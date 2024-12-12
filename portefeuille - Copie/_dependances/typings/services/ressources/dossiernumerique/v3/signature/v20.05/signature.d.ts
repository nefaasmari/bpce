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

  export interface IMailOutput {
    /**
     * Identifiant personne
     */
    idPersonne: string;
    /**
     * Le mode de diffusion :
     * SignataireMsi = 0,
     * SignatairePerso = 1,
     * Conseiller = 10
     */
    modeDiffusion: string;
    /**
     * Adresse de destination
     */
    adresseDestination: string;
    /**
     * code Statut
     * Valeurs possibles :
     * 0: OK mail a été envoyé
     * 1: KO porblème d'envoi du mail
     */
    codeStatut: string;
    /**
     * libelle du statut
     */
    libelleStatut: string;
  }
 
}
