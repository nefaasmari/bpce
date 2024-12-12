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
     * Code Etab Banque Entit� Juridique
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
     * Code rubrique r�gle
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
     * Date d�but validit�
     * Type date au format yyyy-MM-dd
     */
    dateDebutValidite: string;
    /**
     * Date fin validit�
     * Type date au format yyyy-MM-dd
     */
    dateFinValidite: string;
    /**
     * Ref ext agent cr�ation / modif enreg
     */
    codeAgent: number;
    /**
     * Date cr�ation / maj enregistrement
     * Type date au format yyyy-MM-dd
     */
    dateCreationMajEnregistrement: string;
  }

}
