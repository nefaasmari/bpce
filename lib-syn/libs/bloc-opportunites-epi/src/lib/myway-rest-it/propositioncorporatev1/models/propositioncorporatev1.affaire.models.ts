/* tslint:disable:max-line-length */
export namespace RessourcePropositioncorporateV1Affaire {
  export interface AffaireBdr {
    /**
     * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification de la personne.
     */
    identifiantPersonne: number;

    /**
     * Identifie une sous-famille de produit BDR commercialisée par le Groupe Caisse d'Epargne.
     * Valeurs :
     * - 'DISTANCE' : Banque à distance.
     * - 'CRED CT' : Crédits court terme.
     * - 'LIVRET' : Livrets.
     * ......
     */
    codeSousFamilleProduit: string;

    /**
     * Code déterminant le statut d'une affaire BDR.
     * Valeurs :
     * - 'EC' : En cours.
     * - 'CG' : Clôturée/Gagnée.
     * - 'CPNI' : Clôturée/Perdue - Non intéressé.
     * - 'CPEC' : Clôturée/Perdue - Équipé à la concurrence.
     */
    codeStatut: string;

    /**
     * Code déterminant la source de création d'une affaire BDR.
     * Valeurs :
     * - 'RV' : Revue de portefeuille.
     * - 'PC' : Proposition commerciale.
     * - 'CR' : Compte-rendu de rendez-vous clientèle.
     */
    codeSourceCreation: string;

    /**
     * Code déterminant la source de modification d'une affaire BDR.
     * Valeurs :
     * - 'RV' : Revue de portefeuille.
     * - 'PC' : Proposition commerciale.
     * - 'CR' : Compte -rendu de rendez-vous clientèle.
     * - 'AF' : Gestion des affaires.
     */
    codeSourceModification: string;

    /**
     * Montant estimé ou calculé par le chargé clientèle d'une affaire BDR.
     */
    montant: number;

    /**
     * Date de création d'une affaire BDR qui est également la date du CRE.
     */
    dateCreation: string;

    /**
     * Date de relance d'une affaire BDR réalisée par le chargé d'affaire.
     */
    dateRelance: string;

    /**
     * Date de clôture d'une affaire BDR, qu'elle soit gagnée ou perdue.
     */
    dateCloture: string;

    /**
     * Numéro affaire BDR.
     */
    numeroAffaire: number;

    /**
     * Raison Sociale
     */
    raisonSociale: string;

    /**
     * La description/les commentaires d'affaire.
     */
    descriptionAffaire: string;

    /**
     * Nombre de propositions encours liées à l'affaire.
     */
    nombrePropositionLieeAffaire: number;

    /**
     * Nombre de propositions encours de la personne.
     */
    nombrePropositionPersonne: number;
  }
  export interface Affaire {
    listeAffaireBdr: AffaireBdr[];

    /**
     * La source de modification (pour le PUT).
     * Si 'AF' : affaire -> QR P176C500.
     * Sinon -> QR P176C200.
     */
    sourceModification: string;

    /**
     * Code action suppression automatique des affaire BDR
     * Valeur :
     * - true :  dans le contexte d'une création de CRE pour effectuer une supression automatique des affaires existantes non alimentées en question.
     * - false : dans le contexte d'une modification CRE pour ne pas impacter l'existant.
     */
    creExistant: boolean;
  }
}
