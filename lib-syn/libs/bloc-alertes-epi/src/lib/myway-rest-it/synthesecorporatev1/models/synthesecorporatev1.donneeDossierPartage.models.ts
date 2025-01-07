/* tslint:disable:max-line-length */
export namespace RessourceSynthesecorporateV1DonneeDossierPartage {
  export interface DonneeDossierPartage {
    /**
     * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
     */
    codeEtablissement: string;

    /**
     * Numéro client
     */
    numeroPersonne: string;

    /**
     * Dossier à contrôler
     */
    alertDossierAControler: boolean;
  }
  export interface RechercheDossierPartageQstn {
    /**
     * code Etablissement
     */
    codeEtablissement: string;

    listProprietaireDossierPartage: ProprietaireDossierPartage[];
  }
  export interface RechercheDossierPartageRspn {
    listDossierPartage: InformationsDossierPartage[];
  }
  export interface InformationsDossierPartage {
    /**
     * Identifiant technique du dossier de partage
     */
    idntDossierPartage: string;

    statistiqueDossierPartage: StatistiqueDossierPartage;
  }
  export interface StatistiqueDossierPartage {
    /**
     * Nombre de document du dossier de partage au statut en attente de traitement
     */
    nombreDocumentEnStatutEAT: number;

    /**
     * Nombre de document du dossier de partage au statut en attente de validation
     */
    nombreDocumentEnStatutEAV: number;

    /**
     * Nombre de document du dossier de partage au statut validé
     */
    nombreDocumentEnStatutVAL: number;

    /**
     * Nombre de document du dossier de partage au statut refusé
     */
    nombreDocumentEnStatutREF: number;

    /**
     * Date la plus ancienne des documents en attente de validation
     */
    dateDocumentEnStatutEAV: string;

    /**
     * Date de la derniere mise à jour des statistiques
     */
    dateMiseAjourStatistique: string;

    /**
     * Nombre de demande de document pour un dossier
     */
    nombreDemandeDocument: number;
  }
  export interface ProprietaireDossierPartage {
    /**
     * Numero client NODAPE (Obligatoire)
     */
    numeroPersonneProprietaire: string;

    /**
     * Numero chrono pour les clients pro (Facultatif)
     */
    numeroChrono: string;
  }
}
