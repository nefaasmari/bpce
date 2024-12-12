declare module Myway.Ressource.DossierCanalNumerique {

	export interface IDossierCanalNumeriqueOutput {
		/*
		 undefined
		 */
		listeDossierCanalNumerique: Array<IDossierCanalNumerique>;
	  }
	
	  export interface IDossierCanalNumerique {
		/*
		 identifiant dossier canal num�rique
		 */
		identifiantDossier: string;
	  }
	
	  export interface IActeGestion {
		/*
		 Acte de Gestion Classeur Client
		 */
		acteGestionClasseurClient: string;
		/*
		 ActeGestionArcade
		 */
		acteGestionArcade: string;
		/*
		 topActeGestionPrincipal
		 */
		topActeGestionPrincipal: string;
		/*
		 IdOffre
		 */
		idOffre: number;
		/*
		 Compte
		 */
		compte: string;
		/*
		 CodeIPR
		 */
		codeIPR: string;
		/*
		 IsMajDrcDemandee
		 */
		isMAJDrcDemandee: string;
		/*
		 NodapeTitulaire
		 */
		nodapeTitulaire: number;
		/*
		 CodeAgent
		 */
		codeAgent: number;
		/*
		 CodeEtablissement
		 */
		codeEtablissement: string;
		/*
		 CodeClientBancaire
		 */
		codeClientBancaire: number;
		/*
		 ReferenceInterneEDS
		 */
		referenceInterneEDS: number;
		/*
		 CodeTypeEDS
		 */
		codeTypeEDS: string;
		/*
		 ReferenceExterneEDS
		 */
		referenceExterneEDS: number;
		/*
		 CodeAppli
		 */
		codeApplication: string;
		/*
		 CodeGuichet
		 */
		codeGuichet: string;
		/*
		 CodeCanal
		 */
		codeCanal: string;
		/*
		 IdIDN
		 */
		idIDN: string;
		/*
		 Code mode contractualisation, FAFE, FAFP, VADE, VADP
		 */
		modeContract: string;
		/*
		 TypeDRC
		 */
		typeDRC: string;
		/*
		 undefined
		 */
		listeReferenceExterne: Array<IReferenceExterne>;
	  }
	
	  export interface IDossierCanalNumeriqueInput {
		/*
		 undefined
		 */
		listeActeGestion: Array<IActeGestion>;
	  }
	
	  export interface IReferenceExterne {
		/*
		 Identifiant r�f�rence externe
		 */
		identifiantReferenceExterne: string;
		/*
		 Type r�f�rence externe.
	
		Valeurs possibles:
		
		"001" : Mandant procuration
		
		"003" : Mandataire procuration
		
		"002" : Dossier de vente
		 */
		typeReferenceExterne: string;
	  }
}
