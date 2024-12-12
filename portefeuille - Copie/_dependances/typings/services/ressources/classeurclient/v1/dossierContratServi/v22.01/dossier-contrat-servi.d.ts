declare module Myway.Ressource.DossierContratServi {

  export interface IReferenceExterne {
    /**
     * Identifiant référence externe
     * Numéro de personne : NODAPE
     */
    idReferenceExterieur: string;
    /**
     * Type référence externe. Valeurs possibles : 
     * 001 : Mandant procuration 
     * 002 : Dossier de vente
     * 003 : Mandataire procuration
     */
    typeReferenceExterieur: string;
  }

  export interface IDocuments {
    /**
     * Code Acte de gestion :
     * 
     * Correspond au code acte de gestion. Typologie de l’acte de gestion telle que définie dans REFACTE
     */
    codeActe: string;
    /**
     * Id Document :
     * 
     * Correspond à l’identifiant du document. Dans le contexte Signature Electronique l’identifiant document est fourni par l’application IDN.
     */
    idDocument: string;
    /**
     * Type Document :
     * 
     * Correspond à un type de document du référentiel CONTELEC. C’est le Code type Document contractualisationE52I_ CTEQDO
     */
    typeDocument: string;
    /**
     * Type Attributaire du porteur du document.
     * Valeurs Possibles :
     * ‘1’ : Personne
     * ‘2’ : Contrat
     * ‘7’ : Entité Titulaire
     */
    typeAttributaire: string;
    /**
     * Code Nature du Document. La nature du document permet de connaître le document (CNI, passeport, document contractuel signé,….) qui est associé à un type de document (Justificatif d’identité, justificatif de revenu, justificatif de domicile,…).
     */
    natureDocument: string;
    /**
     * Identifiant attributaire primaire du porteur du document.
     * En lien direct avec le Code Type Attributaire.
     */
    attributairePrincipal: string;
    /**
     * Identifiant attributaire secondaire du porteur du document.
     */
    attributaireSecondaire: string;
  }

  export interface IActeGestion {
    /**
     * Code Acte de Gestion
     * 
     * Correspond au code acte de gestion.
     * Typologie de l’acte de gestion  telle que définie dans REFACTE
     */
    codeActe: string;
    /**
     * Acte Principal
     * 
     * Permet d’indiquer si l’acte de gestion est considéré comme un acte principal ou non.
     * Valeurs Possibles :
     * ‘1’ : Acte Principal
     * ‘0’ : Acte Secondaire
     */
    actePrincipal: number;
    /**
     * Code Dossier
     * Correspond à l’identifiant du dossier Classeur Client s’il est connu d’IDN et qu’il a pu être créé.
     */
    codeDossier: string;
    /**
     * Id Contrat
     * Correspond à l’identifiant du contrat lié à l’acte de gestion.
     */
    idContrat: string;
    /**
     * Identifiant Offre
     */
    idOffre: number;
    /**
     * Numéro de personne : NODAPE
     * 
     * Numéro d’identification de la personne dans le SI d’un Etablissement bancaire sur la plateforme MySys.
     * Personne référencée comme client, tiers ou prospect.
     */
    numeroPersonne: number;
    /**
     * Numéro entité titulaire : NODIET
     * 
     * Numéro d’identification d’un client détenteur de contrat (s) de produit/service dans le SI d’un Etablissement bancaire ou financier sur la plateforme MySys.
     * Une entité titulaire se compose d’une ou plusieurs personnes.
     */
    numeroEntiteTitulaire: number;
    /**
     * Numéro dossier de vente
     */
    numeroDossierVente: number;
  }

  export interface IDossierContratServiceInput {
    /**
     * CodeEtablissement
     */
    codeEtablissement: string;
    /**
     * Numéro d’identification d’un agent au sein d’un Etablissement bancaire ou financier sur la plateforme MySys.
     * 
     * Correspond à un individu ou à un acteur générique.
     */
    codeAgent: number;
    /**
     * Application qui est à l’origine de la création du dossier d’archivage.
     * 
     * Exemple : CONTELEC, MYWAY ...
     */
    appOrigine: string;
    /**
     * Référence Externe d’un élément de structure d’un Etablissement bancaire ou financier de la plateforme MySys.
     * Correspond au code EDS de l’agent opérant.
     * 
     * EDS responsable de l’opération
     */
    agentEDS: string;
    /**
     * Code Canal
     */
    codeCanal: string;
    /**
     * Mode Contractualisation :
     * 
     * FAFP Face à Face papier 
     * FAFE Face à Face électronique 
     * VADP Vente à distance papier 
     * VADE Vente à distance électronique 
     * VELP Vente électronique papier 
     * VELE Vente électronique
     */
    modeContractualisation: string;
    /**
     * Creation Dossier :
     * Permet d’indiquer si une création de dossier est demandée dans le cadre de cet appel. 
     * Valeurs possibles : 
     * O : Création Dossier Contrat demandée 
     * N : Pas de Création de Dossier Contrat demandée
     */
    creationDossier: string;
    /**
     * Identifiant IDN nommé idActe sur demande architecte :
     * 
     * Identifiant géré par les applications en amont permettant de regrouper les documents à rattacher à un même dossier Classeur Client. Cet identifiant permet également de faire le lien entre un document et l’acte de gestion qui l’a créé. Dans le contexte Signature Electronique cet identifiant est fourni par l’application IDN.
     */
    idActe: string;
    /**
     * Date de création de l’acte de gestion. Si non renseigné, alimenté à la date du jour.
     * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
     */
    dateActe: string;
    /**
     * ListeRefExternes
     */
    listeReferenceExternes: Array<IReferenceExterne>;
    /**
     * ListeDocuments
     */
    listeDocuments: Array<IDocuments>;
    /**
     * ListeActe
     */
    listeActe: Array<IActeGestion>;
  }

  export interface IDossierContratServiceOutput {
    /**
     * Code retour, Valeurs possibles : 
     * 0 : Appel correct, pas d’erreur à signaler 
     * 1 : Paramètres d’appel incorrects 
     * 2 : Erreur Technique
     */
    coderetour: number;
    /**
     * CompDRC
     */
    listeDossierDrc: Array<IDossierDrc>;
    /**
     * CodeDossierDRC
     */
    listeDossierClasseurClient: Array<IDossierClasseurClient>;
  }

  export interface IDossierClasseurClient {
    /**
     * code dossier ClasseurClient
     */
    codeDossier: string;
    /**
     * code type dossier Classeur client
     */
    codeTypeDossier: string;
    /**
     * code evenement
     */
    codeEvenement: string;
    /**
     * code type porteur
     */
    codeTypePorteur: string;
    /**
     * identifiant de proteur
     */
    identifiantPorteur: string;
  }

  export interface IDossierDrc {
    /**
     * code dossier DRC
     */
    codeDossierDrc: string;
    /**
     * code type dossier DRC
     */
    codeTypeDossierDrc: string;
    /**
     * Code type porteur
     */
    codeTypePorteur: string;
    /**
     * identifiant porteur
     */
    identifiantPorteur: string;
    /**
     * code Reference Externe
     */
    codeReferenceExterne: string;
    /**
     * composition Drc
     */
    compositionDrc: string;
  }

  export interface IDossierRetour {
    /**
     * CodeDossier
     */
    codeDossier: string;
    /**
     * CodeTypeDossier
     */
    codeTypeDossier: string;
    /**
     * CodeEvnmt
     */
    codeEvnmt: string;
    /**
     * CodeTypePort
     */
    codeTypePort: string;
    /**
     * IdntPorteur
     */
    idPorteur: string;
  }

  export interface IDrcRetour {
    /**
     * CodeDossier
     */
    codeDossier: string;
    /**
     * CodeTypeDossier
     */
    codeTypeDossier: string;
    /**
     * CodeTypePort
     */
    codeTypePort: string;
    /**
     * IdntPorteur
     */
    idPorteur: string;
    /**
     * CodeRefExt
     */
    codeReferenceExterieur: string;
    /**
     * CompDrc
     */
    compDrc: string;
  }

}
