/* tslint:disable:max-line-length */
export namespace RessourceEntitetitulaireV2Recherche {
  export interface EntiteTitulaire {
    /**
     * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
     * Une ET se compose d'une ou plusieurs personnes.
     */
    identifiantEntiteTitulaire: number;

    /**
     * Identifiant d'un Etablissement de BPCE.
     * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
     */
    codeEtablissement: string;

    /**
     * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
     * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
     */
    designationEntiteTitulaire: string;

    /**
     * Détermine si l'entité titulaire est privée ou professionnelle.
     * Valeurs :
     * - 1   Usage privé
     * - 2   Usage professionnel
     */
    codeUsageEntiteTitulaire: string;

    /**
     * Mode de relation des personnes composant une entité titulaire.
     * Permet de qualifier le client détenteur d'un contrat.
     * Valeurs :
     * - 1   mode simple
     * - 2   mode joint entre époux
     * - 3   mode joint entre tiers
     * - 4   mode indivision
     */
    modeCompositionEntiteTitulaire: string;

    /**
     * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative des personnes.
     * Valeurs :
     * - 0   Actif
     * - 1   Clôturé
     */
    codeEtatEntiteTitulaire: string;

    /**
     * Précise le type d'indivision.
     * Valeurs :
     * - 1   Mode indivision successorale
     * - 2   Mode indivision conventionnel avec solidarité
     * - 3   Mode indivision conventionnel sans solidarité
     */
    modeCompositionIndivision: string;

    /**
     * Complément de la désignation courte de l'entité titulaire,
     * optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères ne convient pas au client (cas de forçage).
     * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
     */
    complementDesignationEntiteTitulaire: string;

    /**
     * Identifiant de l'Elément De Structure
     */
    identifiantEDSDomiciliation: number;

    /**
     * Référence externe EDS
     */
    referenceEDSDomiciliation: number;

    /**
     * Libellé de l'Elément De Structure
     */
    libelleEDSDomiciliation: string;

    /**
     * Date de fermeture de l'entité titulaire dans la gestion administrative des personnes
     */
    dateFermetureEntiteTitulaire: string;

    /**
     * Code presence dans RPM ou FdS
     * - 'R' RPM actif
     * - 'F' Fiche de suivi
     * - 'A' Absent de RPM
     */
    codePresenceDansRpmOuFds: string;
  }
  export interface RechercheEntiteTitulaire {
    listeEntiteTitulaire: EntiteTitulaire[];

    listeInformationActiviteProf: InformationActiviteProf[];
  }
  export interface ListePersonneRecherche {
    /**
     * Identifiant d'un Etablissement de BPCE.
     * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne1: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne2: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne3: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne4: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne5: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne6: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne7: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne8: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne9: number;

    /**
     * Numéro d'identification de la personne dans le SI d'un Etablissement.
     * Référence interne MYSYS.
     * Personne référencée comme client, tiers ou prospect.
     */
    identifiantPersonne10: number;
  }
  export interface InformationActiviteProf {
    /**
     * Identifiant d'un Etablissement de BPCE.
     * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
     */
    codeEtablissement: string;

    /**
     * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
     * Une ET se compose d'une ou plusieurs personnes.
     */
    identifiantEntiteTitulaire: number;

    /**
     * Numéro d'identification d'une entreprise francaise
     * répertoriée dans le fichier SIRENE de l'INSEE
     */
    numeroSiren: string;

    /**
     * Numéro interne de classement attribué par l'INSEE
     * à un établissement appartenant à une entreprise
     * Identifie un établissement au sein d'une entreprise
     * répertoriée à l'INSEE.
     */
    numeroNicSiretEtablissement: string;
  }
}
