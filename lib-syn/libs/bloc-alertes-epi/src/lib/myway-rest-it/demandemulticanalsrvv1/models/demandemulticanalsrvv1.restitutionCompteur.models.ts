/* tslint:disable:max-line-length */
export namespace RessourceDemandemulticanalsrvV1RestitutionCompteur {
  export interface RestitutionCompteur {
    /**
     * Nombre de nouvelles tâches en cours de la journée
     */
    quotidien: number;

    /**
     * Nombre de tâche en cours dans le stock
     */
    stock: number;
  }
  export interface Query {
    clauses: QueryClauses;

    context: UserContext;
  }
  export interface UserContext {
    agent: Agent;

    selectionne: Perimetre;
  }
  export interface Agent {
    /**
     * Code caisse de l'agent
     */
    codeCaisse: string;

    /**
     * Code agent
     */
    codeAgent: string;

    /**
     * Nom et prénom de l'agent
     */
    fullName: string;

    /**
     * Identifiant du poste fonctionnel de l'agent
     */
    idPosteFonctionnel: string;

    /**
     * Libellé du poste fonctionnel
     */
    libPosteFonctionnel: string;

    /**
     * identifiant interne structure de rattachement
     */
    idStructureRattachement: string;

    /**
     * Libellé structure de rattachement
     */
    libStructureRattachement: string;

    /**
     * Identifiant externe structure d'appartenance
     */
    coceelEdsSup: string;
  }
  export interface Perimetre {
    /**
     * Liste des EDS
     */
    eds: string[];

    /**
     * Liste des structures d'usages
     */
    structuresUsages: string[];

    /**
     * Liste des groupes délégataires
     */
    groupesDelegataires: string[];

    /**
     * Liste des renforts solidaires
     */
    renforts: string[];
  }
  export interface QueryClauses {
    /**
     * Clause de sélection des colonnes
     */
    select: string[];

    /**
     * Identifiant de l'objet métier
     */
    from: number;

    where: Condition[];

    /**
     * Clause de regroupement
     */
    groupBy: string[];

    /**
     * Clause d'ordre de tri
     */
    orderBy: string[];
  }
  export interface Condition {
    colonne: Colonne;

    comparateurs: Comparateur[];
  }
  export interface Colonne {
    /**
     * Nom fonctionnel
     */
    value: string;

    /**
     * Identifiant de la colonne
     */
    identifiant: string;

    /**
     * Libelle de la colonne
     */
    libelle: string;
  }
  export interface Comparateur {
    /**
     * Opérateur
     */
    operator: string;

    /**
     * Valeur
     */
    value: string;

    /**
     * Identifiant du comparateur
     */
    identifiant: number;
  }
  export interface Contexte {
    delegataire: KeyLibelle[];

    /**
     * fff
     */
    renforts: KeyLibelle[];

    agent: Agent;

    structuresUsages: KeyLibelle[];

    eds: KeyLibelle[];
  }
  export interface TachesCompteur {
    /**
     * nombre total des taches à traiter par périmètre sélectionné
     */
    nbTachesATraiter: number;

    /**
     * nombre total des taches à traiter par agent et périmètre sélectionné
     */
    nbTachesATraiterParAgent: number;

    /**
     * nombre total des taches de délégation par agent et périmètre sélectionné
     */
    nbTachesDeDelegationParAgent: number;
  }
  export interface KeyLibelle {
    /**
     * identifiant
     */
    key: string;

    /**
     * libelle
     */
    libelle: string;
  }
  export interface TachesCompteurBPM {
    /**
     * nombre total des taches à traiter par PF
     */
    nbTachesATraiterAffPF: number;
  }
  export interface DemandesCompteur {
    /**
     * Compteur des demandes.
     */
    nbDemandes: number;
  }
}
