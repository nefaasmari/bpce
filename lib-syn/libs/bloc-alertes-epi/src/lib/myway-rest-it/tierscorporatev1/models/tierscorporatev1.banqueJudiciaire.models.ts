/* tslint:disable:max-line-length */
export namespace RessourceTierscorporateV1BanqueJudiciaire {
  export interface BanqueJudiciaire {
    /**
     * Indicateur qui précise s'il s'agit d'une banque judiciaire ou non. Valeurs : 'O' Oui 'N' Non
     */
    indicateurBanqueJudiciaire: boolean;

    /**
     * Contient le type de procédure Judiciaire. Valeurs possibles : '1' Sauvegarde '2' Redressement judiciaire '3' Liquidation judiciaire '4' En plan de continuation '5' Préparation à la procédure / conciliation '6' Administration provisoire
     */
    typeProcedure: string;

    /**
     * Date de début de la procédure judiciaire (sauvegarde, redressement, liquidation, ...)
     */
    dateProcedure: string;

    /**
     * Contient le type de gestion d'une banque judiciaire. Valeurs possibles : 'A' Administrateur judiciaire 'M' Mandataire judiciaire
     */
    typeGestion: string;

    /**
     * Numéro de la personne désignée administrateur judiciaire.
     */
    idPersonneAdminJudiciaire: number;

    /**
     * Champ contenant la désignation du mandataire.
     */
    nomMandataireJudiciaire: string;
  }
}
