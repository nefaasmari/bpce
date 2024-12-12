declare module Myway.Ressource.DossierNumerique {

	export interface IActe {
		/*
		 libell� de l'acte de gestion
		 */
		libelleActe: string;
		/*
		 code de l'acte de gestion. Correspond � un identifiant du r�f�rentiel des actes (REFACTE)
		 */
		codeActe: string;
		/*
		 CodeEntite
		 */
		codeEntite: string;
		/*
		 Code du canal de d�roulement de  l'acte
		 */
		codeCanal: string;
		/*
		 Date de fin de validit� de l'acte de gestion. Cette date permet de g�rer la dur�e de vie et l'�puration du  dossier
		 */
		dateFinValiditeActe: Date;
		/*
		 CodeMailSignataire
		 */
		codeMailSignataire: string;
		/*
		 CdGuichet
		 */
		codeGuichet: string;
		/*
		 TopFAFGXML
		 */
		topFAFGXML: boolean;
		/*
		 identifiant externe de l'acte. Il permet d'identifier le dossier num�rique
		 */
		identifiantActeExterne: string;
		/*
		 identifiant de l'agence ou du point de vente o� se d�roule l'acte
		 */
		identifiantAgence: string;
		/*
		 identifiant de l'agent associ� � l'acte de gestion
		 */
		identifiantAgent: string;
		/*
		 R�f�rence du contrat associ� � l'acte de gestion
		 */
		referenceContrat: string;
		/*
		 r�f�rence du contrat dans le SI du producteur, dans le cas d'un acte de gestion instruit chez un producteur externe (exemple : num�ro FFI chez Natixis Financement)
		 */
		referenceActeProducteur: string;
		/*
		 code type action associ� � la contractualisation
		 */
		codeTypeActionContrat: string;
		/*
		 libell� fourni en cas d'in�gibilit� de l'acte � la signature �lectronique
		 */
		libelleMotifNonEligibilite: string;
		/*
		 Num�ro de l'entit� titulaire concern�e � l'acte
		 */
		numreroEntiteTitulaire: string;
		/*
		 Code Message de Consentement pour l'acte.
		 */
		codeMessageConsentement: string;
		/*
		 code indiquant si la contractualisation de l'acte force la cr�ation d'une BAL MSI pour le signataire
		 */
		codeTypeActionMSI: string;
		/*
		 Code indiquant si la contractualisation de l'acte n�cessite la recherche d'une Pi�ce justificative d'identit� pour le signataire
		 */
		codeTypeActionPJI: string;
		/*
		 code permettant l'�mission d'un CRE suite � la contractualisation
		 */
		codeTypeActionCRE: string;
		/*
		 identifiant de l'acte donn� par IDN
		 */
		identifiantActeIDN: string;
		/*
		 Signataires
		 */
		listeSignataire: Array<ISignataire>;
		/*
		 liste des titulaires concern�s par l'acte de gestion
		 */
		listeTitulaire: Array<ITitulaire>;
		/*
		 ReferencesActe
		 */
		listeReferenceActe: Array<IReferenceActe>;
		/*
		 OperationsFinancieres
		 */
		listeOperationFinanciere: Array<IOperationFinanciere>;
		/*
		 code de l'�tat de l'acte associ� au dossier. Permet de conna�tre notamment l'�tat de contractualisation
		 */
		suiviActe: ISuiviActe;
	}

	export interface IReferenceActe {
		/*
		 TypeReferenceActe
		 */
		typeReferenceActe: string;
		/*
		 ValReferenceActe
		 */
		valReferenceActe: string;
	}

	export interface ITitulaire {
		/*
		 IdntPers
		 */
		idPersonne: string;
		/*
		 AdrMailContr
		 */
		adresseMailContr: string;
	}

	export interface IFluxGCEDoc {
		/*
		 Nom du mod�le permettant la g�n�ration du document (Gcedoc � ce jour)
		 */
		nomModeleGcedoc: string;
		/*
		 Flux Xml Gcedoc. Ce flux, associ� au mod�le, permet � l'outil de g�n�rer un document.
		 */
		fluxXmlGcedoc: string;
	}

	export interface IFluxBinaire {
		/*
		 flux binaire d'un document (Pdf, ...).
		 */
		documentElectronique: string;
	}

	export interface IFluxFilenet {
		/*
		 Identifiant de l''application de r�f�rence en GED
		 */
		identifiantComposantApplicatif: string;
		/*
		 identifiant du document dans la GED
		 */
		identifiantGEDDocument: string;
	}

	export interface IFluxGedTemporaire {
		/*
		 Identifiant de l'application de r�f�rence en GED
		 */
		identifiantComposantApplicatif: string;
		/*
		 identifiant du document dans la GED temporaire
		 */
		identifiantDocumentTemporaire: string;
	}

	export interface IFluxDocPartageICG {
		/*
		 Reference de partage du document. Cette r�f�rence correspond � un document d'entreprise stock� dans l'ICG
		 */
		referencePartage: string;
	}

	export interface IFluxXHTML {
		/*
		 contenu de la repr�sentation alternative du document. Permet lors du processus de signature client, d'afficher le document dans une page web
		 */
		contenuDocumentAlternatif: string;
	}

	export interface IFluxLignes {
		/*
		 Ligne1 du document alternatif
		 */
		ligne1DocumentAlternatif: string;
		/*
		 Ligne2 du document alternatif
		 */
		ligne2DocumentAlternatif: string;
		/*
		 Ligne3 du document alternatif
		 */
		ligne3DocumentAlternatif: string;
		/*
		 Ligne4 du document alternatif
		 */
		ligne4DocumentAlternatif: string;
		/*
		 Ligne 5 du document alternatif
		 */
		ligne5DocumentAlternatif: string;
		/*
		 Ligne 6 du document alternatif
		 */
		ligne6DocumentAlternatif: string;
		/*
		 Ligne7 du document alternatif
		 */
		ligne7DocumentAlternatif: string;
		/*
		 Ligne8 du document alternatif
		 */
		ligne8DocumentAlternatif: string;
		/*
		 Ligne9 du document alternatif
		 */
		ligne9DocumentAlternatif: string;
		/*
		 Ligne10 du document alternatif
		 */
		ligne10DocumentAlternatif: string;
	}

	export interface IDocument {
		/*
		 Nom du document
		 */
		nomDocument: string;
		/*
		 Identifiant du document dans le dossier IDN en cours
		 */
		identifiantDocumentIDN: string;
		/*
		 r�f�rence du document chez le producteur responsable de sa production(cas d'un document fourni par un producteur externe - Natixis, IARD, ...)
		 */
		referenceDocumentProducteur: string;
		/*
		 StockageDoc
		 */
		donneesStockageDocument: IStockageDocument;
		/*
		 RecupDoc
		 */
		donneesContenuDocument: IContenuDocument;
		/*
		 RecupDocAlternatif
		 */
		donneesDocumentAlternatif: IContenuDocumentAlternatif;
		/*
		 undefined
		 */
		donneesComportementSignatureDocument: IComportementSignatureDocument;
	}

	export interface ISignataire {
		/*
		 CdTypeSignr
		 */
		codeTypeSignr: string;
		/*
		 IdntPers
		 */
		idPersonne: string;
		/*
		 AdrMailContr
		 */
		adresseMailContr: string;
		/*
		 IdntJustIdGed
		 */
		idJustificatifIdGed: string;
		/*
		 RangSignr
		 */
		rangSignr: number;
	}

	export interface IOptionSignataire {
		/*
		 IdOptSignr
		 */
		idOptSignr: string;
		/*
		 MsgOptSignr
		 */
		msgOptSignr: string;
	}

	export interface IContenuDocument {
		/*
		 FluxBinaire
		 */
		fluxBinaire: IFluxBinaire;
		/*
		 FluxGCEDoc
		 */
		fluxGCEDoc: IFluxGCEDoc;
		/*
		 FluxFilenet
		 */
		fluxFilenet: IFluxFilenet;
		/*
		 FluxGedTemporaire
		 */
		fluxGedTemporaire: IFluxGedTemporaire;
		/*
		 FluxDocPartageICG
		 */
		fluxDocPartageICG: IFluxDocPartageICG;
	}

	export interface IContenuDocumentAlternatif {
		/*
		 FluxXHTML
		 */
		fluxXHTML: IFluxXHTML;
		/*
		 FluxLignes
		 */
		listeFluxLignes: Array<IFluxLignes>;
	}

	export interface IStockageDocument {
		/*
		 code type de fichier correspondant au docuemnt
		 */
		codeTypeFichier: string;
		/*
		 code type attributaire du document. Il correspond � un code d�fini dans le catalogue GED. exemple 1 - contrat, 2 - personne, ....)
		 */
		codeTypeAttributaire: string;
		/*
		 identifiant de l'attributaire. Correspond � un identifiant m�tier du type d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond � la r�f�rence du contrat
		 */
		identifiantAttributaire: string;
		/*
		 libell� d'intitul� de l'attributaire. Par exemple, pour un contrat, correspond � l'intitul� du contrat. Pour une personne, correspond � l'intitul� de la personne
		 */
		intituleAttributaire: string;
		/*
		 identifiant de typologie du document. Ce typage correspond � une nature de document g�r�e par le catalogue GED. Permet de classifier le document (offre contrat, pi�ce justificative d'identit�, avis d'imposition, ...)
		 */
		identifiantNaturePieceJointe: string;
		/*
		 libell� d�crivant le document.
		 */
		libelleDescriptionDocument: string;
		/*
		 CodeForcAccs
		 */
		codeForcageAccessibilite: number;
	}

	export interface ISignatureEntite {
		/*
		 type de signataire du dossier)
		 */
		codeTypeSignataire: string;
		/*
		 correspond � l'identifiant de la banque qui signe le contra
		 */
		identifiantEntiteSignataire: string;
		/*
		 Num�ro de la page o� se situe la signature dans le document
		 */
		numeroPageDocument: number;
		/*
		 coordonn�e abscisse o� la signature se trouve sur la page du document
		 */
		numeroAbscisseSignature: number;
		/*
		 coordonn�e ordonn�e o� la signature se trouve sur la page du document
		 */
		numeroOrdonneeSignature: number;
		/*
		 hauteur de la zone de signature.
		 */
		hauteurSignature: number;
		/*
		 largeur de la zone de signature
		 */
		largeurSignature: number;
		/*
		 r�f�rence de l'image correspondant � la signature entit�. Permet d'apposer une signature scripturale dans un document
		 */
		imageSignatureEntite: string;
	}

	export interface ISignatureClient {
		/*
		 CdTypeSignr
		 */
		codeTypeSignr: string;
		/*
		 NumrOrdrSign
		 */
		numeroOrdreSigne: number;
		/*
		 LablSign
		 */
		lablSigne: string;
		/*
		 NumrPageDoc
		 */
		numeroPageDoc: number;
		/*
		 NumrAbscSign
		 */
		numeroAbscSigne: number;
		/*
		 NumrOrdnSign
		 */
		numeroOrdnSigne: number;
		/*
		 HautSign
		 */
		hautSigne: number;
		/*
		 LargSign
		 */
		largSigne: number;
	}

	export interface ISignataireDocument {
		/*
		 OptionsSignataire
		 */
		optionsSignataire: IOptionSignataire;
		/*
		 type au sens num�ro de signataire du dossier.
	on affecte un type (1, 2,...) � un signataire (personne)
		 */
		codeTypeSignataire: string;
		/*
		 Num�ro permettant de g�rer l'ordre d'affichage du document lors du processus de signature
		 */
		numeroAffichageDocument: number;
		/*
		 indicateur permettant de g�rer la signature du document par le signataire
		 */
		codeIndicateurSignature: boolean;
	}

	export interface IImpressionDoc {
		/*
		 nExmpImpr
		 */
		exmpImpr: number;
		/*
		 nExmpImprMin
		 */
		exmpImprMinimum: number;
		/*
		 nExmpImprMax
		 */
		exmpImprMaximum: number;
	}

	export interface IInfoDocument {
		/*
		 typologie de document utilis�e pour la signature. Se r�f�re au param�trage de la contractualisation dans l'application CONTELEC
		 */
		codeTypeDocument: string;
		/*
		 type mim du document. Donn�e caract�risant le type de fichier du document
		 */
		typeMimDocument: string;
		/*
		 Label du document. Un label peut �tre utilis� dans le processus de signature
		 */
		labelDocument: string;
		/*
		 caract�rise l'usage du document lors de la contractualisation (papier ou �lectronique). 
	cas de figure possibles :
	- document pour impression papier uniquement
	- document pour signature �lectronique uniquement
	- document tout mode (papier et �lectronique)
		 */
		modeUsageDocument: string;
		/*
		 r�f�rence du contrat associ� au document chez le producteur (fait le lien avec la r�f�rence fournie par le producteur responsable du document)
		 */
		referenceContratProducteur: string;
		/*
		 r�f�rence du contrat associ� au document chez le distributeur
		 */
		referenceContratDistributeur: string;
		/*
		 libell� de description du document pour IDN (pour affichage)
		 */
		libelleDescriptionDocumentIDN: string;
		/*
		 libell� de la section de regroupement dans laquelle le document sera pr�sent� lors de l'affichage. Permet de pr�senter les documents par th�me de regroupement
		 */
		libelleSectionRegroupement: string;
	}

	export interface IOperationFinanciere {
		/*
		 LiblClientOpe
		 */
		libelleClientOpe: string;
		/*
		 LiblCompteOpe
		 */
		libelleCompteOpe: string;
		/*
		 DtOpe
		 */
		dtOpe: Date;
		/*
		 MontantOpe
		 */
		montantOpe: number;
		/*
		 NatureOpe
		 */
		natureOpe: string;
		/*
		 IdntPers
		 */
		idPersonne: string;
	}

	export interface IDossierNumerique {
		/*
		 Acte
		 */
		acte: IActe;
		/*
		 code application � l'origine du dossier
		 */
		codeApplication: string;
		/*
		 Documents
		 */
		listeDocument: Array<IDocument>;
	}

	export interface IComportementSignatureDocument {
		/*
		 undefined
		 */
		descriptionDocument: IInfoDocument;
		/*
		 caract�ristique d'impression document
		 */
		impressionDocument: IImpressionDoc;
		/*
		 undefined
		 */
		listeSignataireDocument: Array<ISignataireDocument>;
		/*
		 undefined
		 */
		listeSignatureClient: Array<ISignatureClient>;
		/*
		 undefined
		 */
		listeSignatureEntite: Array<ISignatureEntite>;
	}

	export interface ISuiviActe {
		/*
		 code de l'�tat de l'acte associ� au dossier. Permet de conna�tre notamment l'�tat de contractualisation
		 */
		codeEtatActe: string;
		/*
		 Identifiant de la transaction ICG de signature de l'acte en cas de signature �lectronique
		 */
		identifiantTransactionICG: string;
		/*
		 code indiquant le mode de signature de l'acte (Papier, Electronique)
		 */
		codeModeContractualisation: string;
		/*
		 Date � laquelle l'acte a �t� sign�
		 */
		dateContractualisation: string;
	}

 export interface IAnnulationDossier {
    /*
     IdntActeIdn
     */
    idActeIdn: string;
    /*
     CodeAppli
     */
    codeApplication: string;
    /*
     CdnEtabFinn
     */
    codeEtablissement: string;
  }

  export interface IReponseAnnulationDossier {
    /*
     IdntActeIdn
     */
    idActeIdn: string;
    /*
     CodeRetour
     */
    codeRetour: string;
    /*
     LblRetour
     */
    libelleRetour: string;
  }

}
