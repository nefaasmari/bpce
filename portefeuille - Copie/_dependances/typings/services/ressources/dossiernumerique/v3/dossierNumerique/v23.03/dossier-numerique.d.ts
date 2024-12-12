declare module Myway.Ressource.DossierNumerique.V3 {
  export interface IActe {
    /**
     * libell� de l'acte de gestion
     */
    libelleActe: string;
    /**
     * code de l'acte de gestion. Correspond � un identifiant du r�f�rentiel des actes (REFACTE)
     */
    codeActe: string;
    /**
     * CodeEntite
     */
    codeEntite: string;
    /**
     * Code du canal de d�roulement de  l'acte
     */
    codeCanal: string;
    /**
     * Date de fin de validit� de l'acte de gestion. Cette date permet de g�rer la dur�e de vie et l'�puration du  dossier
     * Type date au format yyyy-MM-dd
     */
    dateFinValiditeActe: Date;
	/**
     * Date de fin validit� papier

     */
	 dateFinValiditePapier?: Date;
    /**
     * CodeMailSignataire
     */
    codeMailSignataire: string;
    /**
     * CdGuichet
     */
    codeGuichet: string;
    /**
     * TopFAFGXML
     */
    topFAFGXML: boolean;
    /**
     * identifiant externe de l'acte. Il permet d'identifier le dossier num�rique
     */
    identifiantActeExterne: string;
    /**
     * identifiant de l'agence ou du point de vente o� se d�roule l'acte
     */
    identifiantAgence: string;
    /**
     * identifiant de l'agent associ� � l'acte de gestion
     */
    identifiantAgent: string;
    /**
     * R�f�rence du contrat associ� � l'acte de gestion
     */
    referenceContrat: string;
    /**
     * r�f�rence du contrat dans le SI du producteur, dans le cas d'un acte de gestion instruit chez un producteur externe (exemple : num�ro FFI chez Natixis Financement)
     */
    referenceActeProducteur: string;
    /**
     * code type action associ� � la contractualisation
     */
    codeTypeActionContrat: string;
    /**
     * libell� fourni en cas d'in�gibilit� de l'acte � la signature �lectronique
     */
    libelleMotifNonEligibilite: string;
    /**
     * Num�ro de l'entit� titulaire concern�e � l'acte
     */
    numreroEntiteTitulaire: string;
    /**
     * Code Message de Consentement pour l'acte.
     */
    codeMessageConsentement: string;
    /**
     * code indiquant si la contractualisation de l'acte force la cr�ation d'une BAL MSI pour le signataire
     */
    codeTypeActionMSI: string;
    /**
     * Code indiquant si la contractualisation de l'acte n�cessite la recherche d'une Pi�ce justificative d'identit� pour le signataire
     */
    codeTypeActionPJI: string;
    /**
     * code permettant l'�mission d'un CRE suite � la contractualisation
     */
    codeTypeActionCRE: string;
    /**
     * identifiant du dossier num�rique (IDN/MYSIGN)
     */
    idDossierNumerique: string;
    /**
     * Signataires
     */
    listeSignataire: Array<ISignataire>;
    /**
     * liste des titulaires concern�s par l'acte de gestion
     */
    listeTitulaire: Array<ITitulaire>;
    /**
     * ReferencesActe
     */
    listeReferenceActe: Array<IReferenceActe>;
    /**
     * OperationsFinancieres
     */
    listeOperationFinanciere: Array<IOperationFinanciere>;
    /**
     * code de l'�tat de l'acte associ� au dossier. Permet de conna�tre notamment l'�tat de contractualisation
     */
    suiviActe: ISuiviActe;
    /**
     * Identifiant agent conseiller
     */
    identifiantAgentConseiller: string;
    /**
     * Signature Agent Email :
     *         Operant = 0,
     *         ChargeAffaire = 1,
     *         OperantPourChargeAffaire = 2
     *         Aucun = 3
     */
    signatureAgentEmail: number;
    /**
     * Destinataire Email Conseiller :
     *         Operant = 0,
     *         ChargeAffaire = 1,
     *         OperantChargeAffaire = 2,
     *         Aucun = 3
     */
    destinataireEmailConseiller: number;
    /**
     * Contr�le compl�tude DRC :  Valeur par d�faut est true.
     */
    controleCompletudeDRC: boolean;
    /**
     * A renseigner � true pour remettre les documents vias dossier de partage, false sinon
     */
    remiseDocViaDossierPartage: boolean;
    /**
     * Le code mode de contractualisation
     */
      codeModeContract?: string;
      /**
     * Etat du dossier num�rique que nous retourne la r�ponse du consulter dossier uniquement
     * Valeurs possibles : 
     * EN_CREATION("EnCreation"), ATTENTE_SIGNATURE("AttenteDeSignature"), WAIT24H("Wait24H"), ATTENTE_COMPLEMENT(
     *                     "AttenteComplement"), SIGNE_ELEC(
     *                                     "SigneElectroniquement"), EN_COURS_ARCHIVAGE("EnCoursArchivage"), ACQUITTE(
     *                                                     "Acquitte"), REFUS_CLIENT("RefusClient"), SIGNE_PAPIER(
     *                                                                     "SignePapier"), EXPIRE("Expire"), ANNULE("Annule");
     */
      etatDossier?: string;




      estSignatureXml?: boolean;
	/**
     * Famille de mail souhait�e, quand elle n'est pas renseign�e nous prenons celle du panier
     */
    emailFamille: number;
    /**
     * code agence de rattachement externe
     */
    referenceExterneAgence?: string;







  }

  export interface IReferenceActe {
    /**
     * TypeReferenceActe
     */
    typeReferenceActe: string;
    /**
     * ValReferenceActe
     */
    valReferenceActe: string;
  }

  export interface ITitulaire {
    /**
     * IdntPers
     */
    idPersonne: string;
    /**
     * AdrMailContr
     */
    adresseMailContr: string;

  }

  export interface IFluxGCEDoc {
    /**
     * Nom du mod�le permettant la g�n�ration du document (Gcedoc � ce jour)
     */
    nomModeleGcedoc: string;
    /**
     * Flux Xml Gcedoc. Ce flux, associ� au mod�le, permet � l'outil de g�n�rer un document.
     */
    fluxXmlGcedoc: string;
  }

  export interface IFluxBinaire {
    /**
     * flux binaire d'un document (Pdf, ...).
     */
    documentElectronique: string;
  }

  export interface IFluxFilenet {
    /**
     * Identifiant de l''application de r�f�rence en GED
     */
    identifiantComposantApplicatif: string;
    /**
     * identifiant du document dans la GED
     */
    identifiantGEDDocument: string;
  }

  export interface IFluxGedTemporaire {
    /**
     * Identifiant de l'application de r�f�rence en GED
     */
    identifiantComposantApplicatif: string;
    /**
     * identifiant du document dans la GED temporaire
     */
    identifiantDocumentTemporaire: string;
  }

  export interface IFluxDocPartageICG {
    /**
     * Reference de partage du document. Cette r�f�rence correspond � un document d'entreprise stock� dans l'ICG
     */
    referencePartage: string;
  }

  export interface IFluxXHTML {
    /**
     * contenu de la repr�sentation alternative du document. Permet lors du processus de signature client, d'afficher le document dans une page web
     */
    contenuDocumentAlternatif: string;
  }

  export interface IFluxLignes {
    /**
     * Ligne1 du document alternatif
     */
    ligne1DocumentAlternatif: string;
    /**
     * Ligne2 du document alternatif
     */
    ligne2DocumentAlternatif: string;
    /**
     * Ligne3 du document alternatif
     */
    ligne3DocumentAlternatif: string;
    /**
     * Ligne4 du document alternatif
     */
    ligne4DocumentAlternatif: string;
    /**
     * Ligne 5 du document alternatif
     */
    ligne5DocumentAlternatif: string;
    /**
     * Ligne 6 du document alternatif
     */
    ligne6DocumentAlternatif: string;
    /**
     * Ligne7 du document alternatif
     */
    ligne7DocumentAlternatif: string;
    /**
     * Ligne8 du document alternatif
     */
    ligne8DocumentAlternatif: string;
    /**
     * Ligne9 du document alternatif
     */
    ligne9DocumentAlternatif: string;
    /**
     * Ligne10 du document alternatif
     */
    ligne10DocumentAlternatif: string;
  }

  export interface IDocument {
    /**
     * Nom du document
     */
    nomDocument: string;
    /**
     * Identifiant du document dans le dossier num�rique (IDN/MYSIGN)
     */
    idDocument: string;
    /**
     * r�f�rence du document chez le producteur responsable de sa production(cas d'un document fourni par un producteur externe - Natixis, IARD, ...)
     */
    referenceDocumentProducteur: string;
    /**
     * StockageDoc
     */
    donneesStockageDocument: IStockageDocument;
    /**
     * RecupDoc
     */
    donneesContenuDocument: IContenuDocument;
    indicateurRestituable?: boolean;
    /**
     * RecupDocAlternatif
     */
    donneesDocumentAlternatif: IContenuDocumentAlternatif;
    donneesComportementSignatureDocument: IComportementSignatureDocument;
















  }

  export interface ISignataire {
    /**
     * CdTypeSignr
     */
    codeTypeSignr: string;
    /**
     * IdntPers
     */
    idPersonne: string;
    /**
     * AdrMailContr
     */
    adresseMailContr: string;
    /**
     * IdntJustIdGed
     */
    idJustificatifIdGed: string;
    /**
     * RangSignr
     */
    rangSignr: number;
    /**
     * Le moyen authentification ICG
     */
    moyenAuthentificationICG: string;
    /**
     * Le num�ro de t�l�phone portable du signataire
     */
    numeroTelephonePortable: string;
    /**
     * Info compl�mentaire
     */
    infoComplementaire: string;


    /*
     Identifiant permettant de d�finir l'usage qu'a cette personne le DEI d'un PRO
     */
     numUsagerBAD?: string;
     /**









     * Famille de mail souhait�e, quand elle n'est pas renseign�e nous prenons celle du panier
     */
     emailFamille? : number;
     /**
     * Identifiant de l'Usager BAD (NumeroPersonneExterneLiee est l'identifiant g�n�rique)
     */
    identifiantBADPersonneEnLien?: string;
	/**

     * Num�ro de personne externe li�e (identifiant du RPL du GMP)
     */

    identifiantPersonneEnLien?: string;
	/**
     * Personnalit� Juridique : PP, PM ou EI

     */
    personnaliteJuridique?: string;
  }

  export interface IOptionSignataire {
    /**
     * IdOptSignr
     */
    idOptSignr: string;
    /**
     * MsgOptSignr
     */
    msgOptSignr: string;
  }

  export interface IContenuDocument {
    /**
     * FluxBinaire
     */
    fluxBinaire: IFluxBinaire;
    /**
     * FluxGCEDoc
     */
    fluxGCEDoc: IFluxGCEDoc;
    /**
     * FluxFilenet
     */
    fluxFilenet: IFluxFilenet;
    /**
     * FluxGedTemporaire
     */
    fluxGedTemporaire: IFluxGedTemporaire;
    /**
     * FluxDocPartageICG
     */
    fluxDocPartageICG: IFluxDocPartageICG;
  }

  export interface IContenuDocumentAlternatif {
    /**
     * FluxXHTML
     */
    fluxXHTML: IFluxXHTML;
    /**
     * FluxLignes
     */
    listeFluxLignes: Array<IFluxLignes>;
  }

  export interface IStockageDocument {
    /**
     * CodeForcAccs
     */
    codeForcageAccessibilite: number;
    /**
     * code type de fichier correspondant au docuemnt
     */
    codeTypeFichier: string;
    /**
     * code type attributaire du document. Il correspond � un code d�fini dans le catalogue GED. exemple 1 - contrat, 2 - personne, ....)





     */
    codeTypeAttributaire: string;
    /**
     * identifiant de l'attributaire. Correspond � un identifiant m�tier du type d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond � la r�f�rence du contrat
     */
    identifiantAttributaire: string;
    /**
     * libell� d'intitul� de l'attributaire. Par exemple, pour un contrat, correspond � l'intitul� du contrat. Pour une personne, correspond � l'intitul� de la personne
     */
    intituleAttributaire: string;
    /**
     * identifiant de typologie du document. Ce typage correspond � une nature de document g�r�e par le catalogue GED. Permet de classifier le document (offre contrat, pi�ce justificative d'identit�, avis d'imposition, ...)
     */
    identifiantNaturePieceJointe: string;
    /**
     * libell� d�crivant le document.
     */
    libelleDescriptionDocument: string;
  }

  export interface ISignatureEntite {
    /**
     * type de signataire du dossier)
     */
    codeTypeSignataire: string;
    /**
     * correspond � l'identifiant de la banque qui signe le contra
     */
    identifiantEntiteSignataire: string;
    /**
     * Num�ro de la page o� se situe la signature dans le document
     */
    numeroPageDocument: number;
    /**
     * coordonn�e abscisse o� la signature se trouve sur la page du document
     */
    numeroAbscisseSignature: number;
    /**
     * coordonn�e ordonn�e o� la signature se trouve sur la page du document
     */
    numeroOrdonneeSignature: number;
    /**
     * hauteur de la zone de signature.
     */
    hauteurSignature: number;
    /**
     * largeur de la zone de signature
     */
    largeurSignature: number;
    /**
     * r�f�rence de l'image correspondant � la signature entit�. Permet d'apposer une signature scripturale dans un document
     */
    imageSignatureEntite: string;












  }

  export interface ISignatureClient {
    /**
     * CdTypeSignr
     */
    codeTypeSignr: string;
    /**
     * NumrOrdrSign
     */
    numeroOrdreSigne: number;
    /**
     * LablSign
     */
    lablSigne: string;
    /**
     * NumrPageDoc
     */
    numeroPageDoc: number;
    /**
     * NumrAbscSign
     */
    numeroAbscSigne: number;
    /**
     * NumrOrdnSign
     */
    numeroOrdnSigne: number;
    /**
     * HautSign
     */
    hautSigne: number;
    /**
     * LargSign
     */
    largSigne: number;
  }

  export interface ISignataireDocument {
    /**
     * OptionsSignataire
     */
    optionsSignataire: IOptionSignataire;
    /**
     * type au sens num�ro de signataire du dossier.
     * on affecte un type (1, 2,...) � un signataire (personne)
     */
    codeTypeSignataire: string;
    /**
     * Num�ro permettant de g�rer l'ordre d'affichage du document lors du processus de signature
     */
    numeroAffichageDocument: number;
    /**
     * indicateur permettant de g�rer la signature du document par le signataire
     */
    codeIndicateurSignature: boolean;
     /**
     * numero du signataire document
     */
    numeroPersonne?: string;
    /**
     * Abcisse de la signature
     */
    abscisse?: number;
    /**
     * Ordonnee  de la signature
     */
    ordonnee?: number;
    /**
     * Hauteur  de la signature
     */
    hauteur?: number;
    /**
     * Largeur  de la signature
     */
    largeur?: number;
    /**
     * Ancre  de la signature
     */
    ancre?: string;
    /**
     * Numero page de la signature
     */
    numeroPage?: number;
  }

  export interface IInfoDocument {
    /**
     * typologie de document utilis�e pour la signature. Se r�f�re au param�trage de la contractualisation dans l'application CONTELEC
     */
    codeTypeDocument: string;
    /**
     * type mim du document. Donn�e caract�risant le type de fichier du document
     */
    typeMimDocument: string;
    /**
     * Label du document. Un label peut �tre utilis� dans le processus de signature
     */
    labelDocument: string;
    /**
     * caract�rise l'usage du document lors de la contractualisation (papier ou �lectronique). 
     * cas de figure possibles :
     * - document pour impression papier uniquement
     * - document pour signature �lectronique uniquement
     * - document tout mode (papier et �lectronique)
     */
    modeUsageDocument: string;
    /**
     * r�f�rence du contrat associ� au document chez le producteur (fait le lien avec la r�f�rence fournie par le producteur responsable du document)
     */
    referenceContratProducteur: string;
    /**
     * r�f�rence du contrat associ� au document chez le distributeur
     */
    referenceContratDistributeur: string;
    /**
     * libell� de description du document pour IDN (pour affichage)
     */
    libelleDescriptionDocumentIDN: string;
    /**
     * libell� de la section de regroupement dans laquelle le document sera pr�sent� lors de l'affichage. Permet de pr�senter les documents par th�me de regroupement
     */
    libelleSectionRegroupement: string;
    /**
     * la ressource documentparametre.documentEntreprise renvoi un objet ResponseDocumentEntreprise avec une donn�e url � sauvegarder dans urlDocument et � envoyer � IDN
     */
    urlDocument: string;
  }

  export interface IOperationFinanciere {
    /**
     * LiblClientOpe
     */
    libelleClientOpe: string;
    /**
     * LiblCompteOpe
     */
    libelleCompteOpe: string;
    /**
     * DtOpe
     * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
     */
    dtOpe: string;
    /**
     * MontantOpe
     */
    montantOpe: number;
    /**
     * NatureOpe
     */
    natureOpe: string;
    /**
     * IdntPers
     */
    idPersonne: string;
  }

    export interface IDossierNumerique {
        /**
         * Acte
         */
        acte: IActe;
        /**
         * code application � l'origine du dossier
         */
        codeApplication: string;
        /**
         * Documents
         */
        listeDocument: Array<IDocument>;
        /**
         * Indicateur par lequel l'appelant signifie que l'archivage est diff�r�
         */
        archivageDiffere: boolean;
        /**
         * indicateur par lequel l'appelant signifie que ce dossier est annulable dans la journ�e
         */
        inActeAnnulableAJ: string;
        /**
         * est �gale � true si MySign est d�ploy�
         */
        isDeployeMySign: boolean;
        /**
         * Dans un contexte Pro, indicateur pour savoir si le dossier numerique est inclus dans un groupe d'autres dossiers dont au moins l'un deux n'est pas �ligible � MySign
         */
        isOffreMixte: boolean;
    }

  export interface IDocumentActeVad {
    /**
     * Identifiant IDN du document
     */
    idDocumentIdn: string;
    /**
     * Code type attributaire du document
     */
    codeTypeAttributaire: string;
    /**
     * Identifiant attributaire du document
     */
    idAttributaire: string;
    /**
     * Intitule attributaire du document
     */
    intituleAttributaire: string;
  }

  export interface IFinDossierVisaInput {
    /**
     * Identifiant de l'acte IDN
     */
    idActeIdn: string;
    /**
     * Code du mode de contrat
     */
    codeModeContract: string;
    /**
     * visa
     */
    visa: string;
    /**
     * Code application : Exemple : CONTELEC,MYWAY
     */
    codeApplication: string;
  }

  export interface IFinDossierVisaOutput {
    /**
     * Identifiant de l'acte IDN
     */
    idActeIdn: string;
    /**
     * Code de retour
     */
    codeRetour: string;
    /**
     * Libelle retour
     */
    lblRetour: string;
  }

  export interface IRspnWebService {
    /**
     * CorrelationId
     */
    correlationId: string;
  }

  export interface IDocumentAImprimer {
    /**
     * NomDoc
     */
    nomDoc: string;
    /**
     * ModeUsage
     */
    modeUsage: string;
    /**
     * IdNaturePJ
     */
    idNaturePJ: string;
    /**
     * LibelleImpression
     */
    libelleImpression: string;
    /**
     * BloquerNbCopies
     */
    bloquerNombreCopies: boolean;
    /**
     * CodeModeCont
     */
    codeModeContrat: string;
    /**
     * CodeTechImpr
     */
    codeTechniqueImpr: string;
    /**
     * CodeNatrPiecJust
     */
    codeNaturePieceJustificatif: string;
    /**
     * CodeNatrGed
     */
    codeNatureGed: string;
    /**
     * CodeTypeIcg
     */
    codeTypeIcg: string;
    /**
     * NbMiniExmpDocEdit
     */
    nombreMinimumExmpDocEdit: number;
    /**
     * NbMaxiExmpDocEdit
     */
    nombreMaximumExmpDocEdit: number;
    /**
     * NbExmpParDeftEdit
     */
    nombreExmpParDeftEdit: number;
    /**
     * TypeDocCont
     */
    typeDocContrat: string;
    /**
     * OrdrePrio
     */
    ordrePrio: number;
    /**
     * identifiant Ged temporaire
     */
    identifiantGedTemp: string;
  }

  export interface IComportementSignatureDocument {
    descriptionDocument: IInfoDocument;
    impressionDocument: IImpressionDocument;
    listeSignataireDocument: Array<ISignataireDocument>;
    listeSignatureClient: Array<ISignatureClient>;
    listeSignatureEntite: Array<ISignatureEntite>;
    /**
     * urlDocument r�cup�rer de docEntreprise
     */
    lienInternet: string;
  }

  export interface ISuiviActe {
    codeEtatActe: string;
    identifiantTransactionICG: string;
    codeModeContractualisation: string;
    dateContractualisation: string;
  }

  export interface IWsInput {
    /**
     * ApplicationAppelante
     */
    applicationAppelante: string;
  }

  export interface IErreur {
    /**
     * Code
     */
    code: string;
    /**
     * Message
     */
    message: string;
  }

  export interface IWsOutput {
    /**
     * Erreur
     */
    erreur: IErreur;
  }

  export interface IImpressionDocument {
    /**
     * nombre exemple � imprimer par d�faut
     */
    nbExempleImprimerDefaut: number;
    /**
     * nombre exemple � imprimer minimum
     */
    nbExempIeImprimerMin: number;
    /**
     * nombre exemple � imprimer maximum
     */
    nbExempleImprimerMax: number;
    }

    export interface IDocumentAttributaire {
        /**
         * Identifiant document
         */
        identifiantDocument: string;
        /**
         * Identifiant attributaire
         */
        idAttributaire: string;
        /**
         * Intitul� attributaire
         */
        intituleAttributaire: string;
        /**

         * Code type attributaire
         */
        codeTypeAttributaire: string;
        /**

         * Code type Document
         */
        codeTypeDoc: string;
    }

    export interface IDocumentsAttributaireInput {
        /**
         * Code application
         */
        codeApplication: string;
        /**
         * Identifiant dossier num�rique
         */
        idDossierNumerique: string;
        documents: Array<IDocumentAttributaire>;
        /**
         * Permet de faire l'aiguillage vers le bon WS (dans le cas des dossiers MySign).
         *   - Si dossier IDN, la ressource appellera la Web M�thode IDN terminerActeVAD.
         *   - Si dossier MySign, la ressource appellera :
         *        - 1) soit la Web M�thode MySign archiverDossierEnAttente si le codeActionDossierVente n'est pas renseign� ou s'il est renseign� � CCAR
         *        - 2) soit la Web M�thode MySign modifierTypeArchivage si le codeActionDossierVente est renseign� � CCSA 
         * 
         * Pour info :
         *  - CCAR - "Classeur client+finalise papier"
         *  - CCSA - "Classeur client sans archivage"
         */
        codeActionDossierVente: string;
    }


  export interface ICoordonneesPersonne {
    /**
     * Num�ro Personne (Signataire/Titulaire)
     */
    numeroPersonne: string;
    /**
     * Adresse E-mail
     */
    adresseEmail: string;
  }
 
}
