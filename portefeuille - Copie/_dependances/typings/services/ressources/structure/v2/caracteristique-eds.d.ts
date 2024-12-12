/**
 * Ressource : /structure/v2/caracteristiqueEDS
 * Lien Rest-it : http://modeler.ssi.sigcesie.caisse-epargne.fr/v2/structure/caracteristiqueEDS
 * Fichier généré le : 2017-05-22
 */
declare module myway.ressources.structure.caracteristiqueeds {

  export interface IGetQueryParams {
    codeEtablissement?: string;
    identifiantInterneEDS?: number;
    typeEDS?: string;
    referenceExterneEDS?: number;
    codeAgent?: number;
    typeOrganisation?: string;
  }

  export interface IInfoEDS {

    /**
     * Type de l'élément structure
     */
    typeEDS: string;

    /**
     * Ligne 2 adresse de l'élément de structure
     */
    ligne2: string;

    /**
     * Ligne 3 adresse de l'élément de structure
     */
    ligne3: string;

    /**
     * Ligne 4 adresse de l'élément de structure
     */
    ligne4: string;

    /**
     * Ligne 5 adresse de l'élément de structure
     */
    ligne5: string;

    /**
     * Ligne 6 adresse de l'élément de structure
     */
    ligne6: string;

    /**
     * Numéro téléphone de contact de l'élément de structure
     */
    numeroTelephone: string;

    /**
     * Code pays INSEE de l'élément de structure
     */
    codePays: string;

    /**
     * Date de début de validité de l'élément de structure
     */
    dateDebutValiditeEds: string;

    /**
     * Date de fin de validité de l'élément de structure
     */
    dateFinValiditeEds: string;

    /**
     * Identifiant interne de l'élément de structure
     */
    identifiantInterneEDS: number;

    /**
     * Libellé de l'élément de structure
     */
    libelleEDS: string;

    /**
     * Référence externe de l'élément de structure
     */
    referenceExterneEDS: number;

    /**
     * Code établissement de l'élément de structure
     */
    codeEtablissement: string;
  }

  export interface ICaracteristiqueEDS {

    infoEDS: IInfoEDS;

    infoRattachementEDS: IInfoRattachementEDS;

    infoPosteFonctionnel: IInfoPosteFonctionnel;
  }

  export interface IInfoPosteFonctionnel {

    /**
     * Référence externe de l'agent
     */
    codeAgent: number;

    /**
     * Type de fonction de l'agent
     */
    typeFonction: string;

    /**
     * Libellé de fonction de l'agent
     */
    libelleFonction: string;

    /**
     * Code qualité de l'agent affecté au poste fonctionnel
     */
    codeQualiteAgent: string;

    /**
     * Adresse messagerie de l'agent
     */
    adresseEMail: string;
  }

  export interface IInfoRattachementEDS {

    /**
     * Identifiant interne de l'EDS de rattachement de l'EDS identifié
     */
    identifiantEDSRattachement: number;

    /**
     * Référence externe de l'EDS de rattachement de l'EDS identifié
     */
    referenceEDSRattachement: number;

    /**
     * Type de l'EDS de rattachement de l'EDS identifié
     */
    typeEDSRattachement: string;

    /**
     * Libellé de l'EDS de rattachement de l'EDS identifié
     */
    libelleEDSRattachement: string;

    /**
     * Date de fin de validité de l'EDS de rattachement de l'EDS identifié
     */
    dateFinValiditeEDSRattachement: string;

    /**
     * Identifiant du responsable de l'EDS de rattachement de l'EDS identifié
     */
    responsableEDSRattachement: number;
  }

}
