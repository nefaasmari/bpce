declare module Myway.Ressource.DossierContrat {

	export interface IEligibiliteResponse {
		/*
		 Type porteur
		 */
		typePorteur: string;
		/*
		 Code �tablissement
		 */
		codeEtablissement: string;
		/*
		 Libelle de non �ligiblite
		 */
		libelle: string;
		/*
		 Code motif
		 */
		codeMotifOF: string;
		/*
		 Code Motif
		 */
		codeMotif: string;
		/*
		 Identifiant porteur
		 */
		identifiantPorteur: string;
	  }
	
	  export interface IInfoClientBancaire {
		/*
		 Num�ro
		 */
		numero: string;
		/*
		 undefined
		 */
		libelleCourt: string;
	  }
	
	  export interface ICodeEvenementMetier {
		/*
		 Code �v�nement m�tier
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
	
	  export interface IReferenceExterne {
		/*
		 Identifiant r�f�rence externe
	
	Num�ro de personne : NODAPE
		 */
		identifiantReferenceExterne: string;
		/*
		 Type r�f�rence externe.
	
	Valeurs possibles : 
	
	"001" : Mandant procuration
	
	"003" : Mandataire procuration 
	
	"002" : Dossier de vente
		 */
		typeReferenceExterne: string;
	  }
	
	  export interface IDossierContratOuput {
		/*
		 Cet indicateur permet de valider la cr�ation du classeur client papier
		 */
		isCCPapierCree: boolean;
		/*
		 motifsNonEligibilite est une liste de motifs non �ligibilit� � la cr�ation du classeur client
		 */
		motifsNonEligibilite: Array<string>;
		/*
		 Cette liste contenant les num�ros de dossiers CC cr�es
		 */
		listeNumerosDossiers: Array<string>;
	  }
	
	  export interface IDossierContratInput {
		/*
		 Code �tablissement
		 */
		codeEtablissement: string;
		/*
		 code du Guichet de l'agent
		 */
		codeGuichet: string;
		/*
		 NODIET: num�ro entit� titulaire
		 */
		clientBancaire: number;
		/*
		 Identifiant contrat
		 */
		identifiantContrat: string;
		/*
		 R�f�rence EDS interne de domiciliation du client
		 */
		codeElementDeStructure: string;
		/*
		 code de l'application qui veut cr�er le dossier.
	
	Exemple : MYWAY, CONTELEC
		 */
		codeApplication: string;
		/*
		 R�f�rence EDS externe de domiciliation du client
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
		 Nombre de personnes de l'entit� titulaire
		 */
		nbPersonneEntiteTitulaire: number;
		/*
		 Code mode contractualisation, exemple :
	
		FAFE : SAG 
		
		FAFP : Face � Face Papier
		
		VADE : SED
		
		VADP : Vente � distance Papier
		 */
		codeModeContractualisation: string;
		/*
		 undefined
		 */
		listeReferenceExterne: Array<IReferenceExterne>;
	  }

}
