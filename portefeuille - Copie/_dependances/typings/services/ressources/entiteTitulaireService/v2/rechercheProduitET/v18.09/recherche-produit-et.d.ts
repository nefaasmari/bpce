declare module Myway.Ressource.RechercheProduitET {
    export interface IRechercheProduitETOutput {
      listeProduitEntiteTitulaire: Array<IProduitEntieTitulaire>;
    }
  
    export interface IProduitEntieTitulaire {
      /**
       * Code retour Echanges
       */
      codeRetour: number;
      /**
       * Code banque Etablissement GCE
       */
      codeEtablissement: string;
      /**
       * Code guichet interbancaire
       */
      codeGuichetInterbancaire: string;
      /**
       * Code type produit service
       */
      codeProduit: string;
      /**
       * Référence produit / service
       */
      numeroCompte: string;
      /**
       * Numéro entité titulaire
       */
      numeroEntiteTitulaire: number;
      /**
       * Numéro offre souscrite
       */
      numeroOffre: number;
      /**
       * Identifiant Produit / Service
       */
      identifiantProduitService: number;
      /**
       * Libellé type produit / service
       */
      libelleTypeProduitService: string;
    }
  
  }
