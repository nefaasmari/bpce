declare module Myway.Ressource.DossierNumerique {

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
     * identifiant de l'acte donné par IDN
     */
    identifiantActeIDN: string;
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
    identifiantAgentConseiller?: string;
    /**
     * Signature Agent Email :
     *         Operant = 0,
     *         ChargeAffaire = 1,
     *         OperantPourChargeAffaire = 2
     *         Aucun = 3
     */
    signatureAgentEmail?: number;
    /**
     * Destinataire Email Conseiller :
     *         Operant = 0,
     *         ChargeAffaire = 1,
     *         OperantChargeAffaire = 2,
     *         Aucun = 3
     */
    destinataireEmailConseiller?: number;
     /**
     * Contrôle complétude DRC :  Valeur par défaut est true.
     */
    controleCompletudeDRC?: boolean;
    /**
     * code Famille Gestion Locale Contrat
     * Exemple : "OFFBAD" pour l'offre ordonance démat
     */
    codeFamilleGestionLocaleContrat?: string;
    /**
     * Info complémentaire
     */
    infoComplementaire?: string;
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
     * Identifiant du document dans le dossier IDN en cours
     */
    identifiantDocumentIDN: string;
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
    moyenAuthentificationICG?: string;
     /**
     * Le numéro de téléphone portable du signataire
     */
    numeroTelephonePortable?: string;
     /**
     * Info complémentaire
     */
    infoComplementaire?: string;
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
    /**
     * CodeForcAccs
     */
    codeForcageAccessibilite: number;
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

  export interface ISessionSignature {
    /**
     * Id de la session de signature ICG qui vient d’être créée (si tout s’est bien passé …)
     */
    identifiant: string;
    /**
     * Url d’accès à la session de signature ICG
     */
    urlAppelIcg: string;
    /**
     * Id de la transaction ICG qui vient d’être créée
     */
    idTransactionIcg: string;
    /**
     * Valeurs possibles de l’enum SessionSignatureStatut : STARTED= 0 // Commencée FAILED= 1 // Un à 3 essais BLOCKED= 2 // Bloquée SIGNED= 3 // Finie signée
     */
    statut: string;
    /**
     * URL vers laquelle ICG devra naviguer à l’issue de l’éventuelle session de signature créée
     */
    urlRetourIcg: string;
    /**
     * Identifiant signataire
     */
    identifiantSignataire: string;
    /**
     * statut retourner par ICG suite à la signature électronique
     */
    statutIcg?: string;
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
  }

  export interface IImpressionDoc {
    /**
     * nExmpImpr
     */
    exmpImpr: number;
    /**
     * nExmpImprMin
     */
    exmpImprMinimum: number;
    /**
     * nExmpImprMax
     */
    exmpImprMaximum: number;
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
    urlDocument ?: string;
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
    dtOpe: Date;
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
    archivageDiffere?: boolean;
    /**
     * indicateur par lequel l'appelant signifie que ce dossier est annulable dans la journée
     */
    inActeAnnulableAJ?: string;
    /**
     * est égale à true si MySign est déployé
     */
    isDeployeMySign?: boolean;
  }

  export class DossierNumerique implements IDossierNumerique {
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

  }




  export interface IComportementSignatureDocument {
    descriptionDocument: IInfoDocument;
    /**
     * caractéristique d'impression document
     */
    impressionDocument: IImpressionDoc;
    listeSignataireDocument: Array<ISignataireDocument>;
    listeSignatureClient: Array<ISignatureClient>;
    listeSignatureEntite: Array<ISignatureEntite>;
  }

  export interface ISuiviActe {
    /**
     * code de l'état de l'acte associé au dossier. Permet de connaître notamment l'état de contractualisation
     */
    codeEtatActe: string;
    /**
     * Identifiant de la transaction ICG de signature de l'acte en cas de signature électronique
     */
    identifiantTransactionICG: string;
    /**
     * code indiquant le mode de signature de l'acte (Papier, Electronique)
     */
    codeModeContractualisation: string;
    /**
     * Date à laquelle l'acte a été signé
     */
    dateContractualisation: string;
  }

  export interface IAnnulationDossier {
    /**
     * IdntActeIdn
     */
    idActeIdn: string;
    /**
     * CodeAppli
     */
    codeApplication: string;
    /**
     * CdnEtabFinn
     */
    codeEtablissement: string;
  }

  export interface IReponseAnnulationDossier {
    /**
     * IdntActeIdn
     */
    idActeIdn: string;
    /**
     * CodeRetour
     */
    codeRetour: string;
    /**
     * LblRetour
     */
    libelleRetour: string;
  }

  export interface ITerminerActeVadInput {
    /**
     * Code etablissement
     */
    codeEtablissement: string;
    /**
     * Identifiant de l'acte IDN
     */
     idActeIdn : string;
    /**
     * Code Application. Exemple : CONTELEC, MYWAY ...
     */
    codeApplication: string;
    /**
     * Documents
     */
    listeDocuments: Array<IDocumentActeVad>;
  }

  export interface ITerminerActeVadOutput {
    /**
     * Identifiant IDN de l'acte
     */
    idDossierNumerique: string;
    /**
     * Code retour
     */
    codeRetour: number;
    /**
     * Libelle retour
     */
    libelleRetour: string;
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

  export interface IRspnWebService {
    /**
     * CorrelationId
     */
    correlationId: string;
  }

  export interface IQstnBasculerActeContractPapier {
    /**
     * Identifiant acte IDN
     */
    idActeIdn: string;
    /**
     * Code Application, exemple: CONTELEC, MYWAY
     */
    codeApplication: string;
    /**
     * Code Etablissement Financière
     */
    codeEtablissement: string;
  }

  export interface IRspnBasculerActeContractPapier {
    /**
     * Code Retour
     */
    codeRetour: number;
    /**
     * Identifiant Acte IDN
     */
    idActeIdn: string;
    /**
     * Message Erreur Interne
     */
    messageErreurInterne: string;
    /**
     * LibelleRetour
     */
    libelleRetour: string;
  }

  export interface IInitierSignatureInput {
    /**
     * Code application : Exemple : CONTELEC,MYWAY
     */
    codeApplication: string;
    /**
     * Code Mode Contractualisation
     */
    codeModeContractualisation: string;
    /**
     * Emettre Email Initial
     */
    emettreEmailInitial: boolean;
    /**
     * Code établissement financier
     */
    codeEtablissement: string;
    /**
     * Identifiant acte IDN
     */
    identifiantIDN: string;
  }

  export interface IInitierSignatureOutput {
    /**
     * Code retour
     */
    codeRetour: number;
    /**
     * Identifiant de transaction Icg
     */
    idTransactionIcg: string;
    /**
     * Correlation id
     */
    correlationId: string;
    /**
     * Identifiant acte Idn
     */
    identifiantIDN: string;
    /**
     * Libellé de retour
     */
    libelleRetour: string;
  }

  export interface ICancelTransactionByUserInput {
    /**
     * Transaction Icg
     */
    transactionIcg: string;
    /**
     * Id de la Personne
     */
    personneId: string;
    /**
     * Code de l'Action
     */
    codeAction: string;
  }

  export interface ICancelTransactionByUserOutput {
    /**
     * CodeRetour
     */
    codeRetour: number;
    /**
     * Libelle de Retour
     */
    libelleRetour: string;
    /**
     * MessageErreurInterne
     */
    messageErreurInterne: string;
  }

  export interface ICancelTransactionInput {
    /**
     * Transaction Icg
     */
    transactionIcg: string;
    /**
     * Code de l'Action
     */
    codeAction: string;
  }

  export interface ICancelTransactionOutput {
    /**
     * CodeRetour
     */
    codeRetour: number;
    /**
     * Libelle de Retour
     */
    libelleRetour: string;
    /**
     * MessageErreurInterne
     */
    messageErreurInterne: string;
  }

  export interface IActeAImprimer {
    /**
     * IdntActeIdn
     */
    idActeIdn: string;
    /**
     * LibelleActeGestion
     */
    libelleActeGestion: string;
    /**
     * NoContrat
     */
    numeroContrat: string;
    /**
     * CodeRetour
     */
    codeRetour: number;
    /**
     * LibelleRetour
     */
    libelleRetour: string;
    /**
     * ListeDocumentsAImprimerForActe
     */
    listeDocumentsAImprimer: Array<IDocumentAImprimer>;
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

  export interface IRemiseDocumentsSignesOutput {
    isDocumentsEnvoyes: boolean;
    listeActeAImprimer: Array<IActeAImprimer>;
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

  export interface IAdresseEmailSignataire {
    /**
     * adresse email du signataire
     */
    adresseEmail: string;
  }
}
