declare module myway.ressources.encaisseagenceservice.ctrlDebutJournee {

  export interface IGetQueryParams {
    codeEtablissement?: string;
    referenceExterneGuichet?: number;
    identifiantInternePF?: number;
    typeFonctionPF?: string;
    identifiantInterneEDSRattPF?: number;
  }

  export interface IControleDebutJournee {
    coordonneeGuichet: ICoordonneeGuichet;
    adresseGuichet: IAdresseGuichet;
  }

  export interface ICoordonneeGuichet {
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;

    /**
     * Identifiant interne du guichet
     */
    identifiantInterneGuichet: number;

    /**
     * Référence externe du guichet
     */
    referenceExterneGuichet: number;

    /**
     * Identifiant interne du poste fonctionnel
     */
    identifiantInternePF: number;

    /**
     * Type de fonction associée au poste fonctionnel
     */
    typeFonctionPF: string;

    /**
     * Identifiant interne de l'EDS de rattachement du poste fonctionnel
     */
    identifiantInterneEDSRattPF: string;

    /**
     * Identifiant interne de l'EDS de rattachement du guichet
     */
    identifiantEDSRattGuichet: number;

    /**
     * Type de l'EDS de rattachement du guichet
     */
    typeEDSRattGuichet: string;

    /**
     * Référence externe de l'EDS de rattachement du guichet
     */
    referenceEDSRattGuichet: number;

    /**
     * Type de l'agence de rattachement du guichet.
     */
    typeAgenceRattGuichet: string;

    /**
     * Référence externe du guichet tel qu'il est identifié chez EUROTITRES.
     */
    codeExterneEurotitre: string;
  }

  export interface IAdresseGuichet {
    /**
     * Libellé de l'EDS de rattachement du guichet
     */
    libelleEDSRattGuichet: string;

    /**
     * Ligne 2 de l'adresse de l'EDS de rattachement du guichet
     */
    ligne2EDSRattGuichet: string;

    /**
     * Ligne 3 de l'adresse de l'EDS de rattachement du guichet
     */
    ligne3EDSRattGuichet: string;

    /**
     * Ligne 4 de l'adresse de l'EDS de rattachement du guichet
     */
    ligne4EDSRattGuichet: string;

    /**
     * Ligne 5 de l'adresse de l'EDS de rattachement du guichet
     */
    ligne5EDSRattGuichet: string;

    /**
     * Ligne 6 de l'adresse de l'EDS de rattachement du guichet
     */
    ligne6EDSRattGuichet: string;

    /**
     * Numéro de téléphone de l'EDS de rattachement du guichet
     */
    telephoneEDSRattGuichet: string;
  }

}
