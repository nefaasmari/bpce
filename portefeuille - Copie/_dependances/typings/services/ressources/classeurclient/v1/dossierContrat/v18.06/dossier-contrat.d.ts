declare module Myway.Ressource.DossierContrat {

	export interface IEligibiliteResponse {
		/*
		 Type porteur
		 */
		typePorteur: string;
		/*
		 Code établissement
		 */
		codeEtablissement: string;
		/*
		 Libelle de non éligiblite
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
		 Numéro
		 */
		numero: string;
		/*
		 undefined
		 */
		libelleCourt: string;
	  }
	
	  export interface ICodeEvenementMetier {
		/*
		 Code événement métier
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
		 Identifiant référence externe
	
	Numéro de personne : NODAPE
		 */
		identifiantReferenceExterne: string;
		/*
		 Type référence externe.
	
	Valeurs possibles : 
	
	"001" : Mandant procuration
	
	"003" : Mandataire procuration 
	
	"002" : Dossier de vente
		 */
		typeReferenceExterne: string;
	  }
	
	  export interface IDossierContratOuput {
		/*
		 Cet indicateur permet de valider la création du classeur client papier
		 */
		isCCPapierCree: boolean;
		/*
		 motifsNonEligibilite est une liste de motifs non éligibilité à la création du classeur client
		 */
		motifsNonEligibilite: Array<string>;
		/*
		 Cette liste contenant les numéros de dossiers CC crées
		 */
		listeNumerosDossiers: Array<string>;
	  }
	
	  export interface IDossierContratInput {
		/*
		 Code établissement
		 */
		codeEtablissement: string;
		/*
		 code du Guichet de l'agent
		 */
		codeGuichet: string;
		/*
		 NODIET: numéro entité titulaire
		 */
		clientBancaire: number;
		/*
		 Identifiant contrat
		 */
		identifiantContrat: string;
		/*
		 Référence EDS interne de domiciliation du client
		 */
		codeElementDeStructure: string;
		/*
		 code de l'application qui veut créer le dossier.
	
	Exemple : MYWAY, CONTELEC
		 */
		codeApplication: string;
		/*
		 Référence EDS externe de domiciliation du client
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
		 Code mode contractualisation, exemple :
	
		FAFE : SAG 
		
		FAFP : Face à Face Papier
		
		VADE : SED
		
		VADP : Vente à distance Papier
		 */
		codeModeContractualisation: string;
		/*
		 undefined
		 */
		listeReferenceExterne: Array<IReferenceExterne>;
	  }

}
