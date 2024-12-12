declare module Myway.Ressource.SignatureEnInstance {

export interface ISignataire {
    /*
     Identifiant de la session de signature ICG (vide si non signé)
     */
    idSessionIcg: string;
    /*
     Identifiant de signataire
     */
    identifiantPersonne: string;
    /*
     Rang de signataire
     */
    rangSignataire: number;
    /*
     Statut de la signature (vide si non signé), voici les valeurs possibles:
Create:	Creation de l’utilisateur
Started:	Connexion espace de signature
OTP_Send:	OTP demandé
OTP_KO:	OTP KO
User_Blocked:	OTP bloqué
OTP_OK:	OTP OK
Validate:	Validé client
Refused	:       Refusé client
Download:	Documents téléchargés
Error:	Erreur technique
     */
    etatSessionIcg: string;
  }

  export interface ISignatureEnInstanceOutput {
    /*
     Identifiant de l'acte IDN
     */
    idActeIDN: string;
    /*
     Liste de signataires
     */
    signataires: Array<ISignataire>;
    /*
     Identifiant de la transaction ICG(vide si non signé)
     */
      idTransactionICG: string;
      /*
       Identifiant de l'acte MySign
       */
      identifiantPanier: number;
  }

}
