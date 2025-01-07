/* tslint:disable:max-line-length */
export namespace RessourceTierscorporateV1PotentielProspect {
  export interface PotentielProspect {
    /**
     * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification de la personne morale ou EI.
     */
    identifiantPersonne: number;

    /**
     * Rang priorité prospect.
     */
    rangPrioriteProspect: number;

    /**
     * TS création enregistrement.
     */
    dateCreation: string;

    /**
     * Identifiant Agent/Application création.
     */
    identifiantAgentAppliCreation: string;

    /**
     * TS modification enregistrement.
     */
    dateMaj: string;

    /**
     * Identifiant Agent/Application maj.
     */
    identifiantAgentAppliMaj: string;

    /**
     * Déterminer si la personne est un prospect.
     */
    estProspect: boolean;
  }
}
