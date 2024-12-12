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
     Num�ro offre
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
     Code op�ration dossier vente
     */
    codeOperationDossierVente: string;
    /*
     Type processus vente
     */
    codeModeVente: string;
    /*
     Code caract�ristique offre dos-v
     */
    codeCaracteristiqueOffreDosV: string;
    /*
     Libell� associ� offre de vente
     */
    libelleAssocieOffreVente: string;
    /*
     Date d�but validit�
     Type date au format yyyy-MM-dd
     */
    dateDebutValidite: string;
    /*
     Date fin validit�
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
     Num�ro offre
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
