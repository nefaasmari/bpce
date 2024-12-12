/**
 * Ressource : /dossiercreditinstruction/v6/ajouterVersementAttendu
 * Lien Rest-it : http://restit-ref.sigcesie.caisse-epargne.fr/v6/dossiercreditinstruction/ajouterVersementAttendu
 * Fichier généré le : 2017-11-14
 */
declare module myway.ressources.dossiercreditinstruction.ajouterversementattendu {

  export interface IElementMaj {

    /**
     * Idws
     */
    idws: string;
  }

  export interface IVersementAttenduMaj extends IElementMaj {

    /**
     * Ctftve_TypeVerst
     */
    typeVersement: string;

    /**
     * Mtfvat_MtVerst
     */
    montantVersement: number;

    /**
     * Dtfdeb_DateDebt
     */
    dateDebut: string;

    /**
     * Dtfvfn_DateFin
     */
    dateFin: string;

    /**
     * Ctfapi_PerdVerst
     */
    periodeVersement: number;
  }

  export interface IElementLecture {

    /**
     * Idws
     */
    idws: string;
  }

  export interface IVersementAttenduLecture extends IElementLecture {

    /**
     * Nufcrl_NumeReltVerstAttn
     */
    numeroRelationVersementAttn: number;

    /**
     * Ctftve_TypeVerst
     */
    typeVersement: string;

    /**
     * Mtfvat_MtVerst
     */
    montantVersement: number;

    /**
     * Dtfdeb_DateDebt
     */
    dateDebut: string;

    /**
     * Dtfvfn_DateFin
     */
    dateFin: string;

    /**
     * Ctfapi_PerdVerst
     */
    periodeVersement: number;

    /**
     * IdntContAssrGarn
     */
    idContratAssuranceGarantie: string;
  }

  export interface IAjouterVersementAttenduRequest {

    identifiantDossier: string;

    identifiantContratAssurance: string;

    versementAttenduMAJ: IVersementAttenduMaj;
  }
}
