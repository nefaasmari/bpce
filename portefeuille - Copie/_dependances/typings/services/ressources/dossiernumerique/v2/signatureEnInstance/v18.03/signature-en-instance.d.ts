declare module Myway.Ressource.SignatureEnInstance {

export interface ISignataire {
    /*
     Identifiant de la session de signature ICG (vide si non sign�)
     */
    idSession: string;
    /*
     Identifiant de signataire
     */
    idSignataire: string;
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
    idStatut: string;
  }

  export interface ISignatureEnInstanceOutput {
    /*
     Date de signature de l�Acte (vide si non sign�)
     */
    dateSignatureActe: Date;
    /*
     Identifiant de l'acte IDN
     */
    idActeIDN: string;
    /*
     Code canal: Exemple: FF (face � face), TL (vente � distance)
     */
    codeCanal: string;
    /*
     Liste de signataires
     */
    signataires: Array<ISignataire>;
    /*
     Code canal de l�acte, voici les valeurs possibles:
E :	En cours de signature
S :	Sign� par tous les signataires
R :	En cours d�archivage, acquittement en attente (Running)
A :	Archiv� et acquitt�
F :	Erreur lors de l�archivage (Faulted) 
I : 	Acquittement incomplet (Incomplet)
C :	Annul� (Canceled)
W :	Wait
     */
    codeEtatActe: string;
    /*
     Identifiant de la transaction ICG(vide si non sign�)
     */
    idTransactionICG: string;
  }

}
