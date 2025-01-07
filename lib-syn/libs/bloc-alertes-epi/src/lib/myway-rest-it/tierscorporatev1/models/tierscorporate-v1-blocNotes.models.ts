export namespace RessourceTierscorporateV1BlocNotes {
  export interface ICommentaireInfos {
    /**
     * Identifiant d'un commentaire.
     */
    identifiantCommentaire: number;
    /**
     * Code banque sous lequel l'établissement est répertorié par la banque de France.
     */
    codeEtablissement: string;
    /**
     * Code application Origine.
     */
    codeApplicationOrigine: string;
    /**
     * Détermine l'entité objet d'un commentaire.
     * Valeurs :
     * - 'C'  Contrat
     * - 'E'  Entité titulaire
     * - 'P'  Particulier
     * - 'Q'  Professionnel
     * - 'R'  Relation économique
     * - 'D'  Demande de financement
     * - 'O'  concours - demande de financement
     */
    codeTypeAttributaireCommentaire: string;
    /**
     * Identifiant défini par l'application origine.
     * Ex : identifiant Personne, identifiant Relation ....
     */
    identifiantCommentaireAppliOrig: string;
    /**
     * Identifiant complémentaire d'un commentaire, déterminé par l'application d'origine. Il vient en complément à l'identifiant d'un commentaire IDDERF. Cet identifiant est facultatif.
     */
    identifiantComplCommentaire: string;
    /**
     * Date de création du commentaire.
     * Type date au format yyyy-MM-dd
     */
    dateCreationCommentaire: string;
    /**
     * Reference de l'agent ou l'appli qui a créé le commentaire.
     */
    identifiantAgentAppliCreation: string;
    /**
     * Date de dernière modification du commentaire.
     * Type date au format yyyy-MM-dd
     */
    dateDerniereMajCommentaire: string;
    /**
     * Reference de l'agent ou l'appli qui a modifié le commentaire.
     */
    identifiantAgentAppliMaj: string;
    /**
     * Indicateur épuration.
     */
    indicateurEpuration: string;
  }

  export interface ICommentaireDetail {
    /**
     * Identifiant d'un commentaire.
     */
    identifiantCommentaire: number;
    /**
     * Identifiant de la rubrique.
     */
    identifiantRubrique: string;
    /**
     * Pour pouvoir trier dans les IHM Sans signification fonctionnelle.
     */
    numeroSequenceRang: number;
    /**
     * Libellé commentaire.
     */
    libelleCommentaire: string;
  }

  export interface IBlocNotes {
    commentaireInfos: ICommentaireInfos;
    listeCommentaireDetail: Array<ICommentaireDetail>;
  }
}
