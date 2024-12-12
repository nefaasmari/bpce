declare module Myway.Ressource.DossierContratServi {

  export interface IReferenceExterne {
    /**
     * Identifiant r�f�rence externe
     * 
     * Num�ro de personne : NODAPE
     */
    idReferenceExterieur: string;
    /**
     * Type r�f�rence externe.
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
     * Correspond au code acte de gestion. Typologie de l�acte de gestion telle que d�finie dans REFACTE
     */
    codeActe: string;
    /**
     * Id Document :
     * 
     * Correspond � l�identifiant du document. Dans le contexte Signature Electronique l�identifiant document est fourni par l�application IDN.
     */
    idDocument: string;
    /**
     * Type Document :
     * 
     * Correspond � un type de document du r�f�rentiel CONTELEC. C�est le Code type Document contractualisationE52I_ CTEQDO
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
     * Num�ro d�identification d�un agent au sein d�un Etablissement bancaire ou financier sur la plateforme MySys.
     * 
     * Correspond � un individu ou � un acteur g�n�rique.
     */
    codeAgent: number;
    /**
     * Code Guichet Interbancaire
     */
    codeGuichet: string;
    /**
     * Application qui est � l�origine de la cr�ation du dossier d�archivage.
     * 
     * Exemple : CONTELEC, MYWAY ...
     */
    appOrigine: string;
    /**
     * Agent EDS
     */
    agentEDS: string;
    /**
     * Code Modalit� D�tention Produit/Service :
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
     * Permet d�indiquer si une cr�ation de dossier est demand�e dans le cadre de cet appel. Valeurs possibles : �O� : Cr�ation Dossier Contrat demand�e �N� : Pas de Cr�ation de Dossier Contrat demand�e
     */
    creationDossier: string;
    /**
     * Identifiant IDN nomm� idActe sur demande architecte :
     * 
     * Identifiant g�r� par les applications en amont permettant de regrouper les documents � rattacher � un m�me dossier Classeur Client. Cet identifiant permet �galement de faire le lien entre un document et l�acte de gestion qui l�a cr��. Dans le contexte Signature Electronique cet identifiant est fourni par l�application IDN.
     */
    idActe: string;
    /**
     * Date de cr�ation de l�acte de gestion. Si non renseign�, aliment� � la date du jour.
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
     * NODIET : identifiant entit� titulaire
     */
    identifiantEntiteTitulaire: number;
    /**
     * Mode Contractualisation :
     * 
     * ''FAFP' Face � Face papier
     * 'FAFE' Face � Face �lectronique 'VADP' Vente � distance papier
     * 'VADE' Vente � distance �lectronique
     * 'VELP' Vente �lectronique papier
     * 'VELE' Vente �lectronique
     */
    modeContractualisation: string;
  }

  export interface IDossierContratServiceOutput {
    /**
     * Code retour, Valeurs possibles : 0 : Appel correct, pas d�erreur � signaler 1 : Param�tres d�appel incorrects 2 : Erreur Technique
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
