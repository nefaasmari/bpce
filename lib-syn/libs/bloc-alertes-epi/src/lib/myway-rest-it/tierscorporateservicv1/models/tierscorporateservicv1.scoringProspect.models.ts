/* tslint:disable:max-line-length */
export namespace RessourceTierscorporateservicV1ScoringProspect {
  export interface ScoringProspect {
    /**
     * Code établissement
     */
    codeEtablissement: string;

    /**
     * Identifiant personne
     */
    identifiantPersonne: number;

    /**
     * Numéro chrono professionnel
     */
    numeroChrono: number;

    /**
     * Origine de la création du prospect
     * Exemples :
     * 'AF'       Apporteur d'affaires
     * 'MA'       Saisie manuelle
     * 'BA'       Bannière
     * 'FA'       Fichier Marketing
     * etc.
     */
    codeOrigineCreation: string;

    /**
     * Référence d'identification de l'origine de la création du prospect.
     */
    referenceOrigineCreation: string;

    /**
     * Numéro interne de classement attribué par l'INSEE à un établissement appartenant à une entreprise
     * Identifie un établissement au sein d'une entreprise répertoriée à l'INSEE.
     * Complète le SIREN pour constituer le SIRET
     */
    numeroNICSiret: string;

    /**
     * Date de transformation du prospect en client
     */
    dateTransformationEnClient: string;

    /**
     * Score d'activation - note de 0 à 100,000
     * Score permettant de déterminer le potentiel /appétence d'activation de cette entreprise. Plus on est proche de 100, plus la probabilité d'activation est importante.
     */
    scoreActivation: string;

    /**
     * Score d'appétence - note de 0 à 100,00
     * Score permettant de déterminer le potentiel/appétence d'entrée en relation, plus on est proche de 100, plus la probabilité d'entrée en relation est importante.
     */
    scoreAppetence: string;

    /**
     * Score de défaillance - note de 1 à 20
     * Score permettant de déterminer la qualité de l'entreprise, plus le score est élevé, plus l'entreprise est en bonne santé.
     */
    scoreDefaillance: string;

    /**
     * Date de rafraichissement des scores
     */
    dateRafraichissementScore: string;

    /**
     * Indicateur sur score d'activation
     * Permet de différencier le zéro significatif et l'absence de donnée.
     * ' '        Non renseigné
     * 'O'        Renseigné
     */
    indicateurActivation: string;

    /**
     * Indicateur sur score défaillance
     * Permet de différencier le zéro significatif et l'absence de donnée.
     * ' '        Non renseigné
     * 'O'        Renseigné
     */
    indicateurDefaillance: string;

    /**
     * Indicateur sur score d'appétence
     * Permet de différencier le zéro significatif et l'absence de donnée.
     * ' '        Non renseigné
     * 'O'        Renseigné
     */
    indicateurAppetence: string;
  }
}
