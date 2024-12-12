declare module Myway.Ressource.DossierContratServ {

	export interface IReferenceExterne {
		/*
		 Id Référence Exterieure
		 */
		idReferenceExterieur: string;
		/*
		 Type Référence Exterieure
		 */
		typeReferenceExterieur: string;
	  }
	
	  export interface IDocuments {
		/*
		 Code Acte de gestion
		 */
		codeActe: string;
		/*
		 Id Document
		 */
		idDocument: string;
		/*
		 Type Document
		 */
		typeDocument: string;
	  }
	
	  export interface IActeGestion {
		/*
		 Code Acte de Gestion
		 */
		codeActe: string;
		/*
		 Acte Principal
		 */
		actePrincipal: string;
		/*
		 Code Dossier
		 */
		codeDossier: string;
		/*
		 Id Contrat
		 */
		idContrat: string;
	  }
	
	  export interface IDossierContratServiceInput {
		/*
		 CodeAgent
		 */
		codeAgent: number;
		/*
		 CodeGuichet
		 */
		codeGuichet: string;
		/*
		 App Origine
		 */
		appOrigine: string;
		/*
		 Agent EDS
		 */
		agentEDS: string;
		/*
		 CoMoDPS
		 */
		coMoDPS: string;
		/*
		 Code Canal
		 */
		codeCanal: string;
		/*
		 Creation Dossier
		 */
		creationDossier: string;
		/*
		 Date Acte
		 Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
		 */
		dateActe: string;
		/*
		 ListeRefExternes
		 */
		listeReferenceExternes: Array<IReferenceExterne>;
		/*
		 ListeDocuments
		 */
		listeDocuments: Array<IDocuments>;
		/*
		 ListeActe
		 */
		listeActe: Array<IActeGestion>;
		/*
		 Mode Contractualisation
		 */
		modeContractualisation: string;
		/*
		 NODIET
		 */
		identifiantEntiteTitulaire: number;
		/*
		 NODAPE
		 */
		identifiantPersonne: string;
		/*
		 Identifiant IDN nommé idActe sur demande architecte
		 */
		idActe: string;
	  }
	
	  export interface IDossierContratServiceOutput {
		/*
		 Code retour, Valeurs possibles :
	0 : Appel correct, pas d’erreur à signaler
	1 : Paramètres d’appel incorrects
	2 : Erreur Technique
		 */
		codeRetour: number;
	  }

}
