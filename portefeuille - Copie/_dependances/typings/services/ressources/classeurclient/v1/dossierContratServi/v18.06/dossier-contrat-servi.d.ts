declare module Myway.Ressource.DossierContratServi {

  export interface IReferenceExterne {
    /**
     * Identifiant référence externe
     * 
     * Numéro de personne : NODAPE
     */
    idReferenceExterieur: string;
    /**
     * Type référence externe.
     * Valeurs possibles :
     * "001" : Mandant procuration
     * "003" : Mandataire procuration
     * "002" : Dossier de vente
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
  }

  export interface IActeGestion {
    /**
     * Code Acte de Gestion
     */
    codeActe: string;
    /**
     * Acte Principal
     */
    actePrincipal: string;
    /**
     * Code Dossier
     */
    codeDossier: string;
    /**
     * Id Contrat
     */
    idContrat: string;
    /**
     * CodeModeCreationDossier
     */
    codeModeCreationDossier: string;
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
     * Code Guichet Interbancaire
     */
    codeGuichet: string;
    /**
     * Application qui est à l’origine de la création du dossier d’archivage.
     * 
     * Exemple : CONTELEC, MYWAY ...
     */
    appOrigine: string;
    /**
     * Agent EDS
     */
    agentEDS: string;
    /**
     * Code Modalité Détention Produit/Service :
     * 
     * ''C' via un Compte
     * 'E' via une ET (CB) 'P' via une Personne
     */
    cGEGMD: string;
    /**
     * CodeCanal
     */
    codeCanal: string;
    /**
     * Creation Dossier :
     * 
     * Permet d’indiquer si une création de dossier est demandée dans le cadre de cet appel. Valeurs possibles : ‘O’ : Création Dossier Contrat demandée ‘N’ : Pas de Création de Dossier Contrat demandée
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
    /**
     * NODAPE : identifiant de personne
     */
    identifiantPersonne: number;
    /**
     * NODIET : identifiant entité titulaire
     */
    identifiantEntiteTitulaire: number;
    /**
     * Mode Contractualisation :
     * 
     * ''FAFP' Face à Face papier
     * 'FAFE' Face à Face électronique 'VADP' Vente à distance papier
     * 'VADE' Vente à distance électronique
     * 'VELP' Vente électronique papier
     * 'VELE' Vente électronique
     */
    modeContractualisation: string;
  }

  export interface IDossierContratServiceOutput {
    /**
     * Code retour, Valeurs possibles : 0 : Appel correct, pas d’erreur à signaler 1 : Paramètres d’appel incorrects 2 : Erreur Technique
     */
    coderetour: number;
    /**
     * CompDRC
     */
    compDRC: string;
    /**
     * CodeDossierDRC
     */
    codeDossierDRC: string;
  }

}
