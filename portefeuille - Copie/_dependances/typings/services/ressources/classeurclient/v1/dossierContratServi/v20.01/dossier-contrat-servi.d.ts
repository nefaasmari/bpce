declare module Myway.Ressource.DossierContratServi {

  export interface IReferenceExterne {
    /**
     * Identifiant r�f�rence externe
     * Num�ro de personne : NODAPE
     */
    idReferenceExterieur: string;
    /**
     * Type r�f�rence externe. Valeurs possibles : 
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
    /**
     * Type Attributaire du porteur du document.
     * Valeurs Possibles :
     * �1� : Personne
     * �2� : Contrat
     * �7� : Entit� Titulaire
     */
    typeAttributaire: string;
    /**
     * Code Nature du Document. La nature du document permet de conna�tre le document (CNI, passeport, document contractuel sign�,�.) qui est associ� � un type de document (Justificatif d�identit�, justificatif de revenu, justificatif de domicile,�).
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
     * Typologie de l�acte de gestion  telle que d�finie dans REFACTE
     */
    codeActe: string;
    /**
     * Acte Principal
     * 
     * Permet d�indiquer si l�acte de gestion est consid�r� comme un acte principal ou non.
     * Valeurs Possibles :
     * �1� : Acte Principal
     * �0� : Acte Secondaire
     */
    actePrincipal: number;
    /**
     * Code Dossier
     * Correspond � l�identifiant du dossier Classeur Client s�il est connu d�IDN et qu�il a pu �tre cr��.
     */
    codeDossier: string;
    /**
     * Id Contrat
     * Correspond � l�identifiant du contrat li� � l�acte de gestion.
     */
    idContrat: string;
    /**
     * Identifiant Offre
     */
    idOffre: number;
    /**
     * Num�ro de personne : NODAPE
     * 
     * Num�ro d�identification de la personne dans le SI d�un Etablissement bancaire sur la plateforme MySys.
     * Personne r�f�renc�e comme client, tiers ou prospect.
     */
    numeroPersonne: number;
    /**
     * Num�ro entit� titulaire : NODIET
     * 
     * Num�ro d�identification d�un client d�tenteur de contrat (s) de produit/service dans le SI d�un Etablissement bancaire ou financier sur la plateforme MySys.
     * Une entit� titulaire se compose d�une ou plusieurs personnes.
     */
    numeroEntiteTitulaire: number;
    /**
     * Num�ro dossier de vente
     */
    numeroDossierVente: number;
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
     * Application qui est � l�origine de la cr�ation du dossier d�archivage.
     * 
     * Exemple : CONTELEC, MYWAY ...
     */
    appOrigine: string;
    /**
     * R�f�rence Externe d�un �l�ment de structure d�un Etablissement bancaire ou financier de la plateforme MySys.
     * Correspond au code EDS de l�agent op�rant.
     * 
     * EDS responsable de l�op�ration
     */
    agentEDS: string;
    /**
     * Code Canal
     */
    codeCanal: string;
    /**
     * Mode Contractualisation :
     * 
     * FAFP Face � Face papier 
     * FAFE Face � Face �lectronique 
     * VADP Vente � distance papier 
     * VADE Vente � distance �lectronique 
     * VELP Vente �lectronique papier 
     * VELE Vente �lectronique
     */
    modeContractualisation: string;
    /**
     * Creation Dossier :
     * Permet d�indiquer si une cr�ation de dossier est demand�e dans le cadre de cet appel. 
     * Valeurs possibles : 
     * O : Cr�ation Dossier Contrat demand�e 
     * N : Pas de Cr�ation de Dossier Contrat demand�e
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
  }

  export interface IDossierContratServiceOutput {
    /**
     * Code retour, Valeurs possibles : 
     * 0 : Appel correct, pas d�erreur � signaler 
     * 1 : Param�tres d�appel incorrects 
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
