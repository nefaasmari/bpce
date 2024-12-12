declare module Myway.Ressource.ParametreEtab {

export interface IParametresAdresse {
    /*
     Description
     */
    description: string;
    /*
     Adresse
     */
    adresse: string;
    /*
     Tag
     */
    tag: string;
  }

  export interface IParametresReport {
    /*
     titre
     */
    titre: string;
    /*
     code
     */
    code: string;
    /*
     flag
     */
    flag: boolean;
    /*
     numéro Ordre
     */
    numeroOrdre: number;
  }

  export interface IParametresOvad {
    /*
     ListeData
     */
    listeParametresBase: Array<IParametresBase>;
  }

  export interface IParametresEntite {
    /*
     Adresse du Bordereau
     */
    adresseBordereau: string;
    /*
     Code Entite  Ovad
     */
    codeEntiteOvad: string;
    /*
     Adresse Libre Réponse
     */
    adresseLibreReponse: string;
    /*
     horaires
     */
    horaires: string;
    /*
     flag Message Process
     */
    flagMessageProcess: boolean;
    /*
     flag RV
     */
    flagRV: boolean;
    /*
     Message Process
     */
    messageProcess: string;
    /*
     Nombre de Relances
     */
    nombreRelances: number;
    /*
     Delai du Premier Relance
     */
    delaiPremierRelance: number;
    /*
     Intervalles
     */
    intervalles: number;
    /*
     ListeAdresse
     */
    listeParametresAdresse: Array<IParametresAdresse>;
    /*
     ListeParamProduits
     */
    listeParametresOvad: IParametresOvad;
  }

  export interface IParametresBase {
    /*
     Identifiant établissement Gce
     */
    identifiantEtabGce: string;
    /*
     Code du Produit
     */
    codeProduit: string;
  }

  export interface IParametresCaisse {
    /*
     Mediateur
     */
    parametresMediateur: IParametresMediateur;
    /*
     Mention
     */
    parametresMentionsCaisse: IParametresMentionsCaisse;
  }

  export interface IParametresMentionsCaisse {
    /*
     Adresse du Bordereau
     */
    adresseBordereau: string;
    /*
     creat RIB
     */
    creatRIB: string;
    /*
     Numéro du Téléphone
     */
    numeroTel: string;
    /*
     Prix d'appel
     */
    prixAppel: string;
    /*
     Nom du signataire
     */
    nomSignataire: string;
    /*
     Fct du signataire
     */
    fctSignataire: string;
    /*
     Numéro ORIAS
     */
    numeroORIAS: string;
    /*
     adresse CNIL
     */
    adresseCNIL: string;
    /*
     horaires DE
     */
    horairesDE: string;
    /*
     flag Relance Automatique
     */
    flagRelanceAutomatique: boolean;
    /*
     Flag du HubMail
     */
    flagHubMail: boolean;
    /*
     identifiant Mentions caisse
     */
    identifiantMentionsCaisse: string;
    /*
     Entites
     */
    listeParametresEntite: Array<IParametresEntite>;
    /*
     Report
     */
    listeParametresReport: Array<IParametresReport>;
  }

  export interface IParametresMediateur {
    /*
     adresse
     */
    adresse: string;
  }

}
