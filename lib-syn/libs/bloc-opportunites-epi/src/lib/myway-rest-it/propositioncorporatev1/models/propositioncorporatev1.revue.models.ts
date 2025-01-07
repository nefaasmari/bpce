/* tslint:disable:max-line-length */
export namespace RessourcePropositioncorporateV1Revue {
  export interface RevueProduitClient {
    /**
     * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification de l'élément de structure.
     */
    identifiantElementStructure: number;

    /**
     * Numéro d'identification d'un portefeuille.
     */
    identifiantPortefeuille: number;

    /**
     * Numéro d'identification de la relation économique.
     */
    identifiantRelationEco: number;

    /**
     * Numéro d'identification de la personne morale ou EI.
     */
    identifiantPersonne: number;

    /**
     * Code Famille produit porteFeuille BDR.
     */
    codeFamilleProduitPtf: string;

    /**
     * Code sous famille produit portefeuille BDR.
     */
    codeSousFamilleProduitPtf: string;

    /**
     * Indicateur client équipé.
     */
    indicateurClientEquipe: string;

    /**
     * Indicateur sous famille produits BDR MySys.
     * Valeurs :
     * ‘O’   sous famille de produits commercialisée par MySys
     * ‘N’   sous famille de produits non commercialisée par MySys
     */
    produitPresentDansMysys: string;

    /**
     * Indicateur sous-famille à proposer. Valeurs : O/N.
     */
    indicateurClientAEquiper: string;

    /**
     * Indicateur client équipé concurrence.
     */
    indicateurClientEquipeConcurren: string;

    /**
     * Indicateur client non intéressé par produit.
     */
    indicateurClientNonInteressProd: string;

    /**
     * Taux objectif flux.
     */
    tauxObjectifFlux: number;

    /**
     * Indicateur client à activer. Valeur : O/N.
     */
    indicateurClientAActiver: string;

    /**
     * Indicateur Tarif à renégocier.
     */
    indicateurTarifARenegocier: string;

    /**
     * Date de dernière mise à jour.
     */
    dateMaj: string;

    /**
     * Identifiant agent/Application mise à jour.
     */
    identfiantAgentAppliMaj: string;

    /**
     * Nom et Prénom de l'agent maj.
     */
    designationAgent: string;
  }
  export interface Revue {
    listeRevueProduitClient: RevueProduitClient[];

    listeAppetencesProduits: AppetenceProduit[];
  }
  export interface AppetenceProduit {
    familleProduit: string;

    libelleFamilleProduit: string;

    codeAppetence: string;

    libelleAppetence: string;

    codeSousFamilleProduitRevue: string;
  }
}
