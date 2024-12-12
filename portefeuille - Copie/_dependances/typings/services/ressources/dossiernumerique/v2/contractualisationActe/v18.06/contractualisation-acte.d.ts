declare module Myway.Ressource.ContractualisationActe {

      export interface IModeContractualisationActe {
    /*
     Code mode contractualisation d�crit par le canal et la mani�re de contractualiser un acte de gestion
exemple : FAFE - Face A Face Electronique => acte r�alis� en agence et sign� �lectroniquement
     */
    codeModeContractualisation: string;
    /*
     Libell� mode contractualisation
     */
    libelleModeContractualisation: string;
    /*
     Code statut contractualisation
     */
    codeStatutContractualisation: string;
    /*
     Code type signature. D�crit la fa�on dont la signature est faite (scripturale, double clic, ...)
     */
    codeTypeSignature: string;
    /*
     code Activation MSI
     */
    codeActivationMSI: string;
    /*
     niveau authentification requis 
0 - faible
1 - fort
     */
    codeNiveauAuthentification: string;
    /*
     Code du  mat�riel compatible avec le mode de contractualisation
     */
    codeMaterielCompatible: string;
    /*
     Libell� du mat�riel compatible
     */
    libelleMaterielCompatible: string;
    /*
     typologie r�f�renc�e permettant de constituer le corps du message de confirmation envoy� au client apr�s signature
     */
    codeTypeMailConfirmation: string;
    /*
     D�termine le type de demande de recherche en GED de la pi�ce justificative d'identit� du client.
     */
    codeActionRecherchePJI: string;
    /*
     code permettant l'inhibition de l'affichage de l'�cran de choix de signature.
     */
    codeActionInhiberChoixSignature: string;
    /*
     indique le mode de remise au client des Conditions G�n�rales.
     */
    codeRemiseCG: string;
    /*
     undefined
     */
    listeInfosContractualisation: Array<IInfosContractualisation>;
    /*
     Indique si la consultation des documents est possible pendant la phase d'authentificaton
     */
    indicConsultationDocumentAuth: boolean;
    /*
     Indique si la consultation des documents est possible apr�s la signature
     */
    indicConsultationDocSignature: boolean;
    /*
     indique si le mode d'emploi de la contractualisation est affich� lors de la signature du client
     */
    indicModeEmploi: boolean;
    /*
     Indique si un r�capitulatif des documents est pr�sent� pendant la phase de signature
     */
    indicRecapitulatifPresentation: boolean;
    /*
     Indique si la consultation des documents est possible pendant la phase de restitution
     */
    indicConsultationDocRestitution: boolean;
    /*
     Indique si le t�t�chargement des documents est possible pendant la phase de restitution
     */
    indicTelechargementRestitution: boolean;
    /*
     Indicateur authentification SOL-SMS possible
     */
    indicAuthentificationSolSms: boolean;
    /*
     Indicateur authentification SOL-CAP possible
     */
    indicAuthentificationSolCap: boolean;
    /*
     Indicateur authentification Identit� possible
     */
    indicAuthentificationIdentite: boolean;
    /*
     Cet indicateur pr�cise si l'authentification par SOL-SMS est possible ou requise
     */
    indicAuthentifiationSMS: boolean;
    /*
     Cet indicateur pr�cise si l'authentification par  SOL-CAP est possible ou requise
     */
    indicAuthentficationCAP: boolean;
    /*
     D�termine la demande d'�mission d'un CRE fonctionnel  en fin d'acte de gestion.
     */
    indicEmissionCRE: string;
    /*
     Code indiquant si une restitution papier est possible pour un mode de contractualisation.
     */
    indicRestitutionPapier: boolean;
    /*
     Cet indicateur pr�cise si l'authentification par justificatif d'identit� est possible ou requise
     */
    indicAuthPieceIdentite: boolean;
    /*
     True?: existence r�gle bloquante
 False?: existence r�gle non bloquante
     */
    codeRegleRecherchePJI: string;
    /*
     code action collecte doc compl�ment
     */
    codeRegleCollecteDocComplement: string;
  }

  export interface IContractualisationActe {
    /*
     Top papier O/N
     */
    indicateurPapier: boolean;
    /*
     undefined
     */
    acteGestion: IActeGestion;
    /*
     liste de mat�riels
     */
    listeMateriels: Array<IMateriel>;
    /*
     surchargeNonEligibilite
     */
    surchargeNonEligibilite: boolean;
    /*
     motif de non �ligibilit� SAG SED
     */
    motifNonEligibiliteSAGSED: IMotifNonEligibiliteSAGSED;
    /*
     Liste de pi�ces identit�s manquantes
     */
    listePiecesIdentiteManquantes: Array<IPieceIdentiteManquante>;
  }

  export interface IDocumentAProduire {
    /*
     D�termine un document-type.                                                       
                                  
 Nomenclature g�r�e dans la table E52I / appli        
 CONTELEC
     */
    codeTypeDocument: string;
    /*
     code d�crivant la nature de la pi�ce justificative
     */
    codeNaturePJ: string;
    /*
     D�termine une cat�gorie de justificatifs
     */
    codeTypeJustificatif: string;
    /*
     D�termine la nature d'un document dans le catalogue de la GED     
Correspond au niveau le plus fin caract�risant un 
document
     */
    codeNatureGED: string;
    /*
     code de la maquette IDocXML permettant de g�n�rer le document
     */
    codeTechniqueImpression: string;
    /*
     D�termine un attributaire-type d�tenteur d'un
document                           
                                                         
            Valeurs :                                    
 '01'       Contrat                                      
 '02'       Personne                                     
 '05'       Relation �conomique                          
 '06'       Demande de financement                       
 '07'       Client Bancaire
     */
    codeTypeAttributaireDocument: string;
    /*
     code de l'application qui permet la g�n�ration du document
     */
    codeApplicationTechniqueEdition: string;
    /*
     code de la maquette. Elle est � associer au code application (outil) qui permet la g�n�ration du document
     */
    codeMaquette: string;
    /*
     libell� de description du document dans le R�f�rentiel des documents entreprise (DOCENTRP)
     */
    libelleDocumentEntreprise: string;
    /*
     identifiant dans la GED du document d'entreprise.
     */
    identifiantDocumentGED: string;
    /*
     typologie des documents telle qu'elle est r�f�renc�e dans l'ICG. 
Un document a un type de document pour l'ICG, lors de la signature �lectronique
     */
    codeTypeDocumentICG: string;
    /*
     code indiquant le type de fichier associ� au type de document. Permettra de savoir sous quelle forme l'application doit fournir le ficher (XML, PDF, ...)
     */
    codeTypeFichier: string;
    /*
     code de comportement du document pour l'acte de gestion, lors de la contractualisation  �lectronique via l'ICG
                                                            
Valeurs :                                        
  '00'       Document � signer                                
  '01'       A pr�senter au client                            
  '02'       R�serv� Caisse
     */
    codeActionSignatureDocument: string;
    /*
     codeModeUsage
     */
    codeModeUsage: number;
    /*
     Regroupement d'actes de gestion de niveau
processus/op�ration dans la gestion des pi�ces justificatives
     */
    codeFamilleActe: string;
    /*
     D�termine un objet (produit/service ou prestation)
trait� par un acte de gestion dans la gestion des
dossiers de num�risation
     */
    codeObjetActe: string;
    /*
     identifiant de l'attributaire. Correspond � un identifiant m�tier du type 
 d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond � la r�f�rence du contrat
     */
    identifiantAttributaire: string;
    /*
     libell� d'intitul� de l'attributaire. Par exemple, pour un contrat, correspond � l'intitul� du contrat. Pour une personne, correspond � l'intitul� de la personne
     */
    intituleAttributaire: string;
    /*
     libell� d�crivant le document.
     */
    libelleDescriptionDocument: string;
    /*
     undefined
     */
    listeSignataireDocument: Array<ISignataireDocument>;
    /*
     code Classe Document Entreprise
     */
    codeClasseDocumentEntreprise: string;
    /*
     Code de l'acte de gestion
     */
    codeActeGestion: string;
    /*
     Nombre mini exemplaires doc/ �dition
     */
    nbMiniExemplairesDocEdition: number;
    /*
     Nombre maxi exemplaires doc/ �dition
     */
    nbMaxiExemplairesDocEdition: number;
    /*
     Nombre exemplaires par d�faut / �dition
     */
    nbExemplairesParDefautEdition: number;
    /*
     Ordre priorit� utilisation
     */
    ordrePrioriteUtilisation: number;
    /*
     libell� section regroupement document
     */
    libelleSectionRegDoc: string;
    /*
     Libell� de d�signation du type de document. Il sera utilis� lors de la contractualisation
     */
    libelleDocContractualisation: string;
    /*
     libell� externe associ� au document entreprise (DOCENTRP)
     */
    libelleExterneDocEntreprise: string;
    /*
     Indique si les documents rattach�s � une classe de 
document pourront �tre utilis�s dans le processus  
de signature �lectronique
     */
    indicClasseEligibleSignature: boolean;
    /*
     Indique si le document est en cours de partage dans    
ICG (Interface de Confiance Groupe).                   
"true" lorsque le doc est partag�,       
'false" d�s que la suppression de partage est ok.
     */
    indicPartageDocumentICG: boolean;
    /*
     Indicateur modif �dition nombre exemplaires.
     */
    indicModifNbExemplaire: boolean;
    /*
     indique si le document fait partie du R�f�rentiel des documents d'entreprise (DOCENTRP)
     */
    indicDocumentEntreprise: boolean;
    /*
     Cet indicateur pr�cise si le document est obligatoire  
pour la contractualisation.
     */
    indicNonMaterialisation: boolean;
    /*
     Cet indicateur pr�cise si le document est obligatoire  
pour l'acte
     */
    indicDocumentObligatoire: boolean;
    /*
     * (valeur par d�faut = true) et il sert � indiquer � l�appelant qui r�cup�re 
     * la liste des documents � produire s�il a le droit de modifier cet objet ou non.
     */
    indicDocumentModifiable: boolean;
        /*
     indicateur document principal
     */
    indicDocumentPrincipal: boolean;
  }

  export interface ISignataireActe {
    /*
     Identifiant justificatif identit�
     */
    identifiantJustificatifIdentite: string;
    /*
     Adresse mail du signataire
     */
    adresseMailSign: string;
    /*
     Code type de signataire
(n'est pas aliment� en entr�e)
     */
    codeTypeSignataire: string;
    /*
     code r�le signataire
     */
    codeRoleSignataire: string;
    /*
     Nom du signataire d'acte
     */
    nomSignataire: string;
    /*
     Rang signataire
     */
    rangSignataire: number;
    /*
     Identifiant personne
     */
    numeroSignataire: string;
    /*
     pr�nom du signataire d'acte
     */
    prenomSignataire: string;
  }

  export interface IContractualisationActeInput {
    /*
     undefined
     */
    acteGestion: IActeGestion;
    /*
     Indicateur agence d�ploy�e SAG
     */
    indicateurAgenceDeployee: boolean;
    /*
     Liste des mat�riels
     */
    listeMateriels: Array<IMateriel>;
    /*
     Indicateur caisse auto
     */
    indicateurCaisseAuto: boolean;

    surchargeNonEligibilite: boolean;
  }

  export interface IMateriel {
    /*
     Type de p�riph�rique:

TABLETTE_SIGNATURE = 0,
CAISSE_AUTO = 1
     */
    typePeripherique: number;
    /*
     Type de materiel
     */
    type: string;
    /*
     le mod�le du mat�riel
     */
    modele: string;
    /*
     Code mod�le du mat�riel
     */
    codeModele: string;
  }

  export interface ITitulaireActe {
    /*
     num�ro personne
     */
    numeroPersonne: string;
    /*
     adresse mail de la personne
     */
    adresseMail: string;
  }

  export interface ISignataireDocument {
    /*
     undefined
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

  export interface IOptionSignataire {
    /*
     Identifiant Option Signataire
     */
    idOptionSignataire: string;
    /*
     message option signataire
     */
    msgOptionSignataire: string;
  }

  export interface IActeGestion {
    /*
     libelle acte de gestion
     */
    libelleActe: string;
    /*
     code de l'acte de gestion identifi� dans r�f�rentiel des Actes (REFACTE)
     */
    codeActeGestion: string;
    /*
     Client Bancaire
     */
    numeroEntiteTitulaire: string;
    /*
     code canal de vente
     */
    codeCanal: string;
    /*
     code du mode de mise en gestion du P/S.
MEGI - mise en gestion imm�diate
VPC - vente par correspondance
     */
    codeModeMiseGestion: string;
    /*
     codeTypeMarcheEntreprise
     */
    codeTypeMarcheEntreprise: string;
    /*
     identifiant de l'acte donn� par IDN
     */
    identifiantActeIDN: string;
    /*
     code guichet
     */
    codeGuichet: string;
    /*
     topFAFGXML
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
     codeEntite
     */
    codeEntite?: string;
    /*
     referenceOffre
     */
    referenceOffre: string;
    /*
     referenceContratCarte
     */
    referenceContratCarte: string;
    /*
     undefined
     */
    listeDocumentAProduire: Array<IDocumentAProduire>;
    /*
     undefined
     */
    listeModeContractualisation: Array<IModeContractualisationActe>;
    /*
     Liste des actes secondaires de l'acte principal
     */
    listeActeSecondaires: Array<string>;
    /*
     undefined
     */
    listeSignatairesActe: Array<ISignataireActe>;
    /*
     undefined
     */
    listeTitulairesActe: Array<ITitulaireActe>;
    /*
     code Type Produit
     */
    codeTypeProduit: string;
    /*
     undefined
     */
    listeOperationFinanciere: Array<IOperationFinanciere>;
    /*
     R�f�rence EDS interne de domiciliation du client
     */
    referenceEDSInterneClient: string;
    /*
     R�f�rence EDS externe de domiciliation du client
     */
    referenceEDSExterneClient: string;
    /*
     Nombre de personnes de l'entit� titulaire
     */
    nbPersonneEntiteTitulaire: number;
    /*
     undefined
    */
    indicateurActeIDNExistant: boolean;
       /*
     acte de gestion compte support
     */
    acteGestionCompteSupport: string;	
      /*
     Num�ro d'offre VMC
     */
    numeroOffreVMC: string;
  }

  export interface IOperationFinanciere {
    /*
     num�ro de personne: NODAP
     */
    numeroPersonne: string;
    /*
     libelle du client op�ration
     */
    libelleClientOperation: string;
    /*
     libelle du compte op�ration
     */
    libelleCompteOperation: string;
    /*
     Date d'op�ration
     */
    dateOperation: Date;
    /*
     montant d'op�ration
     */
    montantOperation: number;
    /*
     nature de l'op�ration
     */
    natureOperation: string;
    /*
     Mode de versement d'une op�ration financi�re
     */
    modeVersementOpeFinanciere: string;
  }

  export interface IInfosContractualisation {
    /*
     Num�ro entit� titulaire
     */
    numeroEntiteTitulaire: string;
    /*
     Identifiant personne
     */
    identifiantPersonne: string;
    /*
     Libell� message erreur
     */
    libelleMessageErreur: string;
  }

  export interface IEligibiliteSAGSED {
    /*
     Top papier O/N
     */
    indicateurPapier: boolean;
    /*
     Motif de non �ligibilit� SAG SED
     */
    motifNonEligibiliteSAGSED: IMotifNonEligibiliteSAGSED;
    /*
     Liste de pi�ces identit�s manquantes
     */
    listePiecesIdentiteManquantes: Array<IPieceIdentiteManquante>;
  }

    export interface IMotifNonEligibiliteSAGSED {
    /*
     libell� non �ligibilit�
     */
    libelleNonEligibilite: string;
    /*
     code non �ligibilit�
     */
    codeNonEligibilite: string;
  }
  
  export interface IPieceIdentiteManquante {
    /*
     nom du signataire
     */
    nomSignataire: string;
    /*
     pr�nom du signataire
     */
    prenomSignataire: string;
    /*
     identifiant du signataire
     */
    idSignataire: string;
    /*
     identifiant du dossier DRC
     */
    idDossierDrc: string;
    /*
     type attributaire
     */
    typeAttributaire: string;
  }

}
