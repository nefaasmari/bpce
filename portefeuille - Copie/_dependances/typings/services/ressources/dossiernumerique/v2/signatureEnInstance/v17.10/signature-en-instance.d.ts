declare module Myway.Ressource.SignatureEnInstance {

export interface ISignataire {
    /*
     Identifiant de la session de signature ICG (vide si non signé)
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
    idStatut: string;
  }

  export interface ISignatureEnInstanceOutput {
    /*
     Date de signature de l’Acte (vide si non signé)
     */
    dateSignatureActe: Date;
    /*
     Identifiant de l'acte IDN
     */
    idActeIDN: string;
    /*
     Code canal: Exemple: FF (face à face), TL (vente à distance)
     */
    codeCanal: string;
    /*
     Liste de signataires
     */
    signataires: Array<ISignataire>;
    /*
     Code canal de l’acte, voici les valeurs possibles:
E :	En cours de signature
S :	Signé par tous les signataires
R :	En cours d’archivage, acquittement en attente (Running)
A :	Archivé et acquitté
F :	Erreur lors de l’archivage (Faulted) 
I : 	Acquittement incomplet (Incomplet)
C :	Annulé (Canceled)
W :	Wait
     */
    codeEtatActe: string;
    /*
     Identifiant de la transaction ICG(vide si non signé)
     */
    idTransactionICG: string;
  }

}
