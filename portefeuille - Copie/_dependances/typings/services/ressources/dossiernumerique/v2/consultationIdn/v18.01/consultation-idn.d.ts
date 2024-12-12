declare module Myway.Ressource.ConsultationIdn {

	export interface IDocumentIdntAttributaire {
		/*
		 Identifiant   document    IDN
		 */
		idDocumentIdn: string;
		/*
		 Identifiant attributaire
		 */
		idAttributaire: string;
		/*
		 Intitulé attributaire
		 */
		intituleAttributaire: string;
		/*
		 Code type attributaire
		 */
		codeTypeAttributaire: string;
	  }
	
	  export interface IRecupererDocumentsIdntAttributaireOutput {
		/*
		 Identifiant acte IDN
		 */
		idActeIdn: string;
		/*
		 Code retour
		 */
		codeRetour: number;
		/*
		 Libelle retour
		 */
		libelleRetour: string;
		/*
		 Documents
		 */
		listeDocuments: Array<IDocumentIdntAttributaire>;
	  }

}
