declare module Myway.Ressource.ReglesSignature {

  export interface IReglesSignatureOutput {
    listeReglesSignature: Array<IRegleSignature>;
  }

  export interface IRegleSignature {
    /**
     * Code Retour Echanges
     */
    codeRetour: number;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;
    /**
     * Code acte gestion
     */
    codeActeGestion: string;
    /**
     * Code mode contractualisation
     */
    codeModeContractualisation: string;
    /**
     * Code rubrique régle
     */
    codeRubriqueRegle: string;
    /**
     * Valeur regle contractualisation
     */
    valeurRegleContractualisation: string;
    /**
     * Indicateur regle bloquante
     */
    indicateurRegleBloquante: string;
    /**
     * Date début validité
     * Type date au format yyyy-MM-dd
     */
    dateDebutValidite: string;
    /**
     * Date fin validité
     * Type date au format yyyy-MM-dd
     */
    dateFinValidite: string;
    /**
     * Ref ext agent création / modif enreg
     */
    codeAgent: number;
    /**
     * Date création / maj enregistrement
     * Type date au format yyyy-MM-dd
     */
    dateCreationMajEnregistrement: string;
  }

}
