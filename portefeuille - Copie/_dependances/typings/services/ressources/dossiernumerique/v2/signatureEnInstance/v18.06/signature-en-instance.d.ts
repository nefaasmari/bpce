declare module Myway.Ressource.SignatureEnInstance {

export interface ISignataire {
    /*
     Identifiant de la session de signature ICG (vide si non sign�)
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
     Statut de la signature (vide si non sign�), voici les valeurs possibles:
Create:	Creation de l�utilisateur
Started:	Connexion espace de signature
OTP_Send:	OTP demand�
OTP_KO:	OTP KO
User_Blocked:	OTP bloqu�
OTP_OK:	OTP OK
Validate:	Valid� client
Refused	:       Refus� client
Download:	Documents t�l�charg�s
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
     Identifiant de la transaction ICG(vide si non sign�)
     */
      idTransactionICG: string;
      /*
       Identifiant de l'acte MySign
       */
      identifiantPanier: number;
  }

}
