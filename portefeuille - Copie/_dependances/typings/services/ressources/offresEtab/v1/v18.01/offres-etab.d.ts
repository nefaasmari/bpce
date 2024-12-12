declare module Myway.Ressource.OffresEtab {

export interface IOffresEtabOutput {
    /*
     undefined
     */
    listeOffresEtab: Array<IOffreEtab>;
    /*
     undefined
     */
    listeCaracteristiqueOffre: Array<ICaracteristiqueOffre>;
  }

  export interface IOffreEtab {
    /*
     Code retour Echanges
     */
    codeRetour: number;
    /*
     Numéro offre
     */
    numeroOffre: number;
    /*
     Indic contrat oblig dossier vente
     */
    indicContratObligDossierVente: string;
    /*
     Code PS CNCE Large
     */
    codePsCnceLarge: string;
    /*
     Code opération dossier vente
     */
    codeOperationDossierVente: string;
    /*
     Type processus vente
     */
    codeModeVente: string;
    /*
     Code caractéristique offre dos-v
     */
    codeCaracteristiqueOffreDosV: string;
    /*
     Libellé associé offre de vente
     */
    libelleAssocieOffreVente: string;
    /*
     Date début validité
     Type date au format yyyy-MM-dd
     */
    dateDebutValidite: string;
    /*
     Date fin validité
     Type date au format yyyy-MM-dd
     */
    dateFinValidite: string;
    /*
     Code canal dossier vente
     */
    codeCanal: string;
    /*
     Indice de traitement
     */
    indiceTraitement: string;
  }

  export interface ICaracteristiqueOffre {
    /*
     Numéro offre
     */
    numeroOffre: number;
    /*
     codeCaracteristiqueOffreDosV
     */
    codeCaracteristiqueOffreDosV: string;
    /*
     Code retour Echanges
     */
    codeRetour: number;
  }

}
