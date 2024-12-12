declare module Myway.Ressource.DossierNumerique.V3 {
  export interface IActe {
    /**
     * libellé de l'acte de gestion
     */
    libelleActe: string;
    /**
     * code de l'acte de gestion. Correspond à un identifiant du référentiel des actes (REFACTE)
     */
    codeActe: string;
    /**
     * CodeEntite
     */
    codeEntite: string;
    /**
     * Code du canal de déroulement de  l'acte
     */
    codeCanal: string;
    /**
     * Date de fin de validité de l'acte de gestion. Cette date permet de gérer la durée de vie et l'épuration du  dossier
     * Type date au format yyyy-MM-dd
     */
    dateFinValiditeActe: Date;
	/**
     * Date de fin validité papier

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
     * identifiant externe de l'acte. Il permet d'identifier le dossier numérique
     */
    identifiantActeExterne: string;
    /**
     * identifiant de l'agence ou du point de vente où se déroule l'acte
     */
    identifiantAgence: string;
    /**
     * identifiant de l'agent associé à l'acte de gestion
     */
    identifiantAgent: string;
    /**
     * Référence du contrat associé à l'acte de gestion
     */
    referenceContrat: string;
    /**
     * référence du contrat dans le SI du producteur, dans le cas d'un acte de gestion instruit chez un producteur externe (exemple : numéro FFI chez Natixis Financement)
     */
    referenceActeProducteur: string;
    /**
     * code type action associé à la contractualisation
     */
    codeTypeActionContrat: string;
    /**
     * libellé fourni en cas d'inégibilité de l'acte à la signature électronique
     */
    libelleMotifNonEligibilite: string;
    /**
     * Numéro de l'entité titulaire concernée à l'acte
     */
    numreroEntiteTitulaire: string;
    /**
     * Code Message de Consentement pour l'acte.
     */
    codeMessageConsentement: string;
    /**
     * code indiquant si la contractualisation de l'acte force la création d'une BAL MSI pour le signataire
     */
    codeTypeActionMSI: string;
    /**
     * Code indiquant si la contractualisation de l'acte nécessite la recherche d'une Pièce justificative d'identité pour le signataire
     */
    codeTypeActionPJI: string;
    /**
     * code permettant l'émission d'un CRE suite à la contractualisation
     */
    codeTypeActionCRE: string;
    /**
     * identifiant du dossier numérique (IDN/MYSIGN)
     */
    idDossierNumerique: string;
    /**
     * Signataires
     */
    listeSignataire: Array<ISignataire>;
    /**
     * liste des titulaires concernés par l'acte de gestion
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
     * code de l'état de l'acte associé au dossier. Permet de connaître notamment l'état de contractualisation
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
     * Contrôle complétude DRC :  Valeur par défaut est true.
     */
    controleCompletudeDRC: boolean;
    /**
     * A renseigner à true pour remettre les documents vias dossier de partage, false sinon
     */
    remiseDocViaDossierPartage: boolean;
    /**
     * Le code mode de contractualisation
     */
      codeModeContract?: string;
      /**
     * Etat du dossier numérique que nous retourne la réponse du consulter dossier uniquement
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
     * Famille de mail souhaitée, quand elle n'est pas renseignée nous prenons celle du panier
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
     * Nom du modèle permettant la génération du document (Gcedoc à ce jour)
     */
    nomModeleGcedoc: string;
    /**
     * Flux Xml Gcedoc. Ce flux, associé au modèle, permet à l'outil de générer un document.
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
     * Identifiant de l''application de référence en GED
     */
    identifiantComposantApplicatif: string;
    /**
     * identifiant du document dans la GED
     */
    identifiantGEDDocument: string;
  }

  export interface IFluxGedTemporaire {
    /**
     * Identifiant de l'application de référence en GED
     */
    identifiantComposantApplicatif: string;
    /**
     * identifiant du document dans la GED temporaire
     */
    identifiantDocumentTemporaire: string;
  }

  export interface IFluxDocPartageICG {
    /**
     * Reference de partage du document. Cette référence correspond à un document d'entreprise stocké dans l'ICG
     */
    referencePartage: string;
  }

  export interface IFluxXHTML {
    /**
     * contenu de la représentation alternative du document. Permet lors du processus de signature client, d'afficher le document dans une page web
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
     * Identifiant du document dans le dossier numérique (IDN/MYSIGN)
     */
    idDocument: string;
    /**
     * référence du document chez le producteur responsable de sa production(cas d'un document fourni par un producteur externe - Natixis, IARD, ...)
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
     * Le numéro de téléphone portable du signataire
     */
    numeroTelephonePortable: string;
    /**
     * Info complémentaire
     */
    infoComplementaire: string;


    /*
     Identifiant permettant de définir l'usage qu'a cette personne le DEI d'un PRO
     */
     numUsagerBAD?: string;
     /**









     * Famille de mail souhaitée, quand elle n'est pas renseignée nous prenons celle du panier
     */
     emailFamille? : number;
     /**
     * Identifiant de l'Usager BAD (NumeroPersonneExterneLiee est l'identifiant générique)
     */
    identifiantBADPersonneEnLien?: string;
	/**

     * Numéro de personne externe liée (identifiant du RPL du GMP)
     */

    identifiantPersonneEnLien?: string;
	/**
     * Personnalité Juridique : PP, PM ou EI

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
     * code type attributaire du document. Il correspond à un code défini dans le catalogue GED. exemple 1 - contrat, 2 - personne, ....)





     */
    codeTypeAttributaire: string;
    /**
     * identifiant de l'attributaire. Correspond à un identifiant métier du type d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond à la référence du contrat
     */
    identifiantAttributaire: string;
    /**
     * libellé d'intitulé de l'attributaire. Par exemple, pour un contrat, correspond à l'intitulé du contrat. Pour une personne, correspond à l'intitulé de la personne
     */
    intituleAttributaire: string;
    /**
     * identifiant de typologie du document. Ce typage correspond à une nature de document gérée par le catalogue GED. Permet de classifier le document (offre contrat, pièce justificative d'identité, avis d'imposition, ...)
     */
    identifiantNaturePieceJointe: string;
    /**
     * libellé décrivant le document.
     */
    libelleDescriptionDocument: string;
  }

  export interface ISignatureEntite {
    /**
     * type de signataire du dossier)
     */
    codeTypeSignataire: string;
    /**
     * correspond à l'identifiant de la banque qui signe le contra
     */
    identifiantEntiteSignataire: string;
    /**
     * Numéro de la page où se situe la signature dans le document
     */
    numeroPageDocument: number;
    /**
     * coordonnée abscisse où la signature se trouve sur la page du document
     */
    numeroAbscisseSignature: number;
    /**
     * coordonnée ordonnée où la signature se trouve sur la page du document
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
     * référence de l'image correspondant à la signature entité. Permet d'apposer une signature scripturale dans un document
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
     * type au sens numéro de signataire du dossier.
     * on affecte un type (1, 2,...) à un signataire (personne)
     */
    codeTypeSignataire: string;
    /**
     * Numéro permettant de gérer l'ordre d'affichage du document lors du processus de signature
     */
    numeroAffichageDocument: number;
    /**
     * indicateur permettant de gérer la signature du document par le signataire
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
     * typologie de document utilisée pour la signature. Se réfère au paramétrage de la contractualisation dans l'application CONTELEC
     */
    codeTypeDocument: string;
    /**
     * type mim du document. Donnée caractérisant le type de fichier du document
     */
    typeMimDocument: string;
    /**
     * Label du document. Un label peut être utilisé dans le processus de signature
     */
    labelDocument: string;
    /**
     * caractérise l'usage du document lors de la contractualisation (papier ou électronique). 
     * cas de figure possibles :
     * - document pour impression papier uniquement
     * - document pour signature électronique uniquement
     * - document tout mode (papier et électronique)
     */
    modeUsageDocument: string;
    /**
     * référence du contrat associé au document chez le producteur (fait le lien avec la référence fournie par le producteur responsable du document)
     */
    referenceContratProducteur: string;
    /**
     * référence du contrat associé au document chez le distributeur
     */
    referenceContratDistributeur: string;
    /**
     * libellé de description du document pour IDN (pour affichage)
     */
    libelleDescriptionDocumentIDN: string;
    /**
     * libellé de la section de regroupement dans laquelle le document sera présenté lors de l'affichage. Permet de présenter les documents par thème de regroupement
     */
    libelleSectionRegroupement: string;
    /**
     * la ressource documentparametre.documentEntreprise renvoi un objet ResponseDocumentEntreprise avec une donnée url à sauvegarder dans urlDocument et à envoyer à IDN
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
         * code application à l'origine du dossier
         */
        codeApplication: string;
        /**
         * Documents
         */
        listeDocument: Array<IDocument>;
        /**
         * Indicateur par lequel l'appelant signifie que l'archivage est différé
         */
        archivageDiffere: boolean;
        /**
         * indicateur par lequel l'appelant signifie que ce dossier est annulable dans la journée
         */
        inActeAnnulableAJ: string;
        /**
         * est égale à true si MySign est déployé
         */
        isDeployeMySign: boolean;
        /**
         * Dans un contexte Pro, indicateur pour savoir si le dossier numerique est inclus dans un groupe d'autres dossiers dont au moins l'un deux n'est pas éligible à MySign
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
     * urlDocument récupérer de docEntreprise
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
     * nombre exemple à imprimer par défaut
     */
    nbExempleImprimerDefaut: number;
    /**
     * nombre exemple à imprimer minimum
     */
    nbExempIeImprimerMin: number;
    /**
     * nombre exemple à imprimer maximum
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
         * Intitulé attributaire
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
         * Identifiant dossier numérique
         */
        idDossierNumerique: string;
        documents: Array<IDocumentAttributaire>;
        /**
         * Permet de faire l'aiguillage vers le bon WS (dans le cas des dossiers MySign).
         *   - Si dossier IDN, la ressource appellera la Web Méthode IDN terminerActeVAD.
         *   - Si dossier MySign, la ressource appellera :
         *        - 1) soit la Web Méthode MySign archiverDossierEnAttente si le codeActionDossierVente n'est pas renseigné ou s'il est renseigné à CCAR
         *        - 2) soit la Web Méthode MySign modifierTypeArchivage si le codeActionDossierVente est renseigné à CCSA 
         * 
         * Pour info :
         *  - CCAR - "Classeur client+finalise papier"
         *  - CCSA - "Classeur client sans archivage"
         */
        codeActionDossierVente: string;
    }


  export interface ICoordonneesPersonne {
    /**
     * Numéro Personne (Signataire/Titulaire)
     */
    numeroPersonne: string;
    /**
     * Adresse E-mail
     */
    adresseEmail: string;
  }
 
}
