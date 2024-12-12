declare module Myway.Ressource.DossierContrat {

	export interface IDonneesDossierContrat {
		/*
		 undefined
		 */
		codeEtablissement: string;
		/*
		 code du Guichet de l'agent
		 */
		codeGuichet: string;
		/*
		 undefined
		 */
		clientBancaire: number;
		/*
		 undefined
		 */
		identifiantContrat: string;
		/*
		 code EDS
		 */
		codeElementDeStructure: string;
		/*
		 code de l'application qui veut créer le dossier
		 */
		codeApplication: string;
		/*
		 Reference Externe EDS
		 */
		referenceExterneEDS: string;
		/*
		 undefined
		 */
		codeEvenementMetierPrincipal: ICodeEvenementMetier;
		/*
		 undefined
		 */
		listCodeEvenementMetier: Array<ICodeEvenementMetier>;
		/*
		 Nombre de personnes de l'entité titulaire
		 */
		nbPersonneEntiteTitulaire: number;
		/*
		 Code mode contractualisation, FAFE, FAFP, VADE, VADP
		 */
		codeModeContractualisation: string;
	  }
	
	  export interface IEligibiliteResponse {
		/*
		 undefined
		 */
		IdentifiantPorteur: string;
		/*
		 undefined
		 */
		typePorteur: string;
		/*
		 undefined
		 */
		codeEtablissement: string;
		/*
		 undefined
		 */
		libelle: string;
		/*
		 undefined
		 */
		codeMotifOF: string;
		/*
		 undefined
		 */
		codeMotif: string;
	  }
	
	  export interface IInfoClientBancaire {
		/*
		 undefined
		 */
		numero: string;
		/*
		 undefined
		 */
		libelleCourt: string;
	  }
	
	  export interface ICodeEvenementMetier {
		/*
		 undefined
		 */
		code: string;
	  }
	
	  export interface IEvenementMetier {
		/*
		 undefined
		 */
		libelle: string;
		/*
		 undefined
		 Type date au format yyyy-MM-dd
		 */
		dateDebutValidite: string;
		/*
		 undefined
		 Type date au format yyyy-MM-dd
		 */
		dateFinValidite: string;
		/*
		 undefined
		 */
		codeFamilleActeGestion: string;
		/*
		 undefined
		 */
		codeObjetActeGestion: string;
		/*
		 undefined
		 */
		codeActeGestion: string;
		/*
		 undefined
		 */
		codeSousFamilleActeGestion: string;
	  }

}
