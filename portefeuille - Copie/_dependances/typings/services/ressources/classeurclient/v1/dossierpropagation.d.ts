declare module Myway.Ressource.DossierPropagation {

  export interface IBlocDocmGED {

    /**
     * IdntDocmGED
     */
    idDocmGED: string;

    /**
     * CodeNAtr
     */
    codeNAtr: string;

    /**
     * TypeAttr
     */
    typeAttribut: string;

    /**
     * IdntAttr
     */
    idAttribut: string;

    /**
     * DateEmission
     */
    dateEmission: string;

    /**
     * DateNumerisation
     */
    dateNumerisation: string;

    /**
     * Sujet du catalogue ayant permis l'acquisition du document. 
     * Permet au service d'effectuer la correspondance avec les types de document classeurs client (mappage manuel au sein du service)
     */
    sujetCatalogue: string;

    /**
     * ListTypeDocm
     */
    listeTypeDocm: Array<string>;
  }

  export interface IQstnPropagerDocumentsGED {

    /**
     * IdntDoss
     */
    idDossier: string;

    /**
     * ForcerEnrichissement
     */
    forcerEnrichissement: boolean;

    /**
     * ListDocmGED
     */
    listeDocmGED: Array<IBlocDocmGED>;
  }

  export interface IBlocDocGEDResl {

    /**
     * IdntDocmGED
     */
    idDocmGED: string;

    /**
     * TypeDocm
     */
    typeDocm: string;

    /**
     * LiblTypeDocm
     */
    libelleTypeDocm: string;
  }

  export interface IRspnPropagerDocumentGED {

    /**
     * IndcComp
     */
    indiceComp: string;

    /**
     * ListDocmResl
     */
    listeDocmResl: Array<IBlocDocGEDResl>;
  }
}
