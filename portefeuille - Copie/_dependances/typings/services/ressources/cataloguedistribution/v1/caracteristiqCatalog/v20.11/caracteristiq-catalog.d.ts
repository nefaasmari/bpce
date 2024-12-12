declare module Myway.Ressource.CaracteristiqCatalog {
  export interface ICodeMarche {
    /**
     * Code acte gestion
     */
    codeActeGestion: string;
    /**
     * Libellé acte gestion
     */
    libelleActeGestion: string;
    /**
     * Code canal dossier vente
     */
    codeCanal: string;
    /**
     * Libellé canal dossier vente
     */
    libelleCanal: string;
    /**
     * Code marché
     */
    codeMarche: string;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;
  }

  export interface ICaracteristiques {
    /**
     * Code acte gestion
     */
    codeActeGestion: string;
    /**
     * Libellé acte gestion
     */
    libelleActeGestion: string;
    /**
     * Code canal dossier vente
     */
    codeCanal: string;
    /**
     * Libellé canal dossier vente
     */
    libelleCanal: string;
    /**
     * Code entité vente
     */
    codeEntiteVente: string;
    /**
     * Libellé entité vente
     */
    libelleEntiteVente: string;
    /**
     * Type processus vente
     */
    codeModeVente: string;
    /**
     * Libellé type processus de vente
     */
    libelleTypeProcessusVente: string;
    /**
     * Numéro offre
     */
    numeroOffre: number;
    /**
     * Idt processus SI
     */
    idtProcessusSi: string;
    /**
     * Identifiant Produit / Service
     */
    identifiantProduitService: number;
    /**
     * Nom Technique long
     */
    nomTechniqueLong: string;
    /**
     * Code processus de vente
     */
    codeModeVente1: string;
    /**
     * Libellé processus vente
     */
    libelleProcessusVente: string;
    /**
     * Code signature offre
     */
    codeSignatureOffre: string;
    /**
     * Libellé signature offre
     */
    libelleSignatureOffre: string;
    /**
     * Code type personnalité juridique
     */
    codeTypePersonnaliteJuridique: string;
    /**
     * Indicateur droit retractation
     */
    indicateurDroitRetractation: string;
    /**
     * Libellé indic choix retractation
     */
    libelleIndicChoixRetractation: string;
    /**
     * Date début validité
     * Type date au format yyyy-MM-dd
     */
    dateDebutValidite: string;
    /**
     * Date fin validité
     * Type date au format yyyy-MM-dd
     */
    dateFinValidite: string;
    /**
     * Date création enregistrement
     * Type date au format yyyy-MM-dd
     */
    dateCreationEnregistrement: string;
    /**
     * Date fin validité élément
     * Type date au format yyyy-MM-dd
     */
    dateFinValiditeElement: string;
    /**
     * Nom Technique du P/S
     */
    nomTechniquePs: string;
    /**
     * Code modalité détention P/S
     */
    codeModaliteDetentionPs: string;
    /**
     * Code éligibilité EAI et FATCA P/S
     */
    codeEligibiliteEaiFatcaPs: string;
    /**
     * Date début commercialisation P/S
     * Type date au format yyyy-MM-dd
     */
    dateDebutCommercialisationPs: string;
    /**
     * Date fin commercialisation P/S
     * Type date au format yyyy-MM-dd
     */
    dateFinCommercialisationPs: string;
    /**
     * Age Minimum souscription P/S
     */
    ageMinimumSouscriptionPs: number;
    /**
     * Age Maximum souscription P/S
     */
    ageMaximumSouscriptionPs: number;
    /**
     * Indic activation susp/réactiv
     */
    indicActivationSuspreactiv: string;
    /**
     * Indic activation / désactivation
     */
    indicActivationDesactivation: string;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;
  }

  export interface ICapaciteJuridique {
    /**
     * Code acte gestion
     */
    codeActeGestion: string;
    /**
     * Libellé acte gestion
     */
    libelleActeGestion: string;
    /**
     * Code canal dossier vente
     */
    codeCanal: string;
    /**
     * Libellé canal dossier vente
     */
    libelleCanal: string;
    /**
     * Code type capacité juridique
     */
    codeCapaciteJuridique: string;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;
  }

  export interface IModeComposition {
    /**
     * Libellé acte gestion
     */
    libelleActeGestion: string;
    /**
     * Code acte gestion
     */
    codeActeGestion: string;
    /**
     * Libellé canal dossier vente
     */
    libelleCanal: string;
    /**
     * Code canal dossier vente
     */
    codeCanal: string;
    /**
     * Code type usage entité titulaire
     */
    codeUsageEntiteTitulaire: string;
    /**
     * Mode composition entité titulaire
     */
    modeCompositionEntiteTitulaire: string;
    /**
     * Code Etab Banque Entité Juridique
     */
    codeEtablissement: string;
  }

  export interface ICaracteristiqCatalog {
    codeMarche: Array<ICodeMarche>;
    modeComposition: Array<IModeComposition>;
    capaciteJuridique: Array<ICapaciteJuridique>;
    caracteristiques: Array<ICaracteristiques>;
  }

}
