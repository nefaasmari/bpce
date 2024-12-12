declare module Myway.Ressource.ContractualisationActe {

      export interface IModeContractualisationActe {
    /*
     Code mode contractualisation décrit par le canal et la manière de contractualiser un acte de gestion
exemple : FAFE - Face A Face Electronique => acte réalisé en agence et signé électroniquement
     */
    codeModeContractualisation: string;
    /*
     Libellé mode contractualisation
     */
    libelleModeContractualisation: string;
    /*
     Code statut contractualisation
     */
    codeStatutContractualisation: string;
    /*
     Code type signature. Décrit la façon dont la signature est faite (scripturale, double clic, ...)
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
     Code du  matériel compatible avec le mode de contractualisation
     */
    codeMaterielCompatible: string;
    /*
     Libellé du matériel compatible
     */
    libelleMaterielCompatible: string;
    /*
     typologie référencée permettant de constituer le corps du message de confirmation envoyé au client après signature
     */
    codeTypeMailConfirmation: string;
    /*
     Détermine le type de demande de recherche en GED de la pièce justificative d'identité du client.
     */
    codeActionRecherchePJI: string;
    /*
     code permettant l'inhibition de l'affichage de l'écran de choix de signature.
     */
    codeActionInhiberChoixSignature: string;
    /*
     indique le mode de remise au client des Conditions Générales.
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
     Indique si la consultation des documents est possible après la signature
     */
    indicConsultationDocSignature: boolean;
    /*
     indique si le mode d'emploi de la contractualisation est affiché lors de la signature du client
     */
    indicModeEmploi: boolean;
    /*
     Indique si un récapitulatif des documents est présenté pendant la phase de signature
     */
    indicRecapitulatifPresentation: boolean;
    /*
     Indique si la consultation des documents est possible pendant la phase de restitution
     */
    indicConsultationDocRestitution: boolean;
    /*
     Indique si le tétéchargement des documents est possible pendant la phase de restitution
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
     Indicateur authentification Identité possible
     */
    indicAuthentificationIdentite: boolean;
    /*
     Cet indicateur précise si l'authentification par SOL-SMS est possible ou requise
     */
    indicAuthentifiationSMS: boolean;
    /*
     Cet indicateur précise si l'authentification par  SOL-CAP est possible ou requise
     */
    indicAuthentficationCAP: boolean;
    /*
     Détermine la demande d'émission d'un CRE fonctionnel  en fin d'acte de gestion.
     */
    indicEmissionCRE: string;
    /*
     Code indiquant si une restitution papier est possible pour un mode de contractualisation.
     */
    indicRestitutionPapier: boolean;
    /*
     Cet indicateur précise si l'authentification par justificatif d'identité est possible ou requise
     */
    indicAuthPieceIdentite: boolean;
    /*
     True?: existence règle bloquante
 False?: existence règle non bloquante
     */
    codeRegleRecherchePJI: string;
    /*
     code action collecte doc complément
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
     liste de matériels
     */
    listeMateriels: Array<IMateriel>;
    /*
     surchargeNonEligibilite
     */
    surchargeNonEligibilite: boolean;
    /*
     motif de non éligibilité SAG SED
     */
    motifNonEligibiliteSAGSED: IMotifNonEligibiliteSAGSED;
    /*
     Liste de piéces identités manquantes
     */
    listePiecesIdentiteManquantes: Array<IPieceIdentiteManquante>;
  }

  export interface IDocumentAProduire {
    /*
     Détermine un document-type.                                                       
                                  
 Nomenclature gérée dans la table E52I / appli        
 CONTELEC
     */
    codeTypeDocument: string;
    /*
     code décrivant la nature de la pièce justificative
     */
    codeNaturePJ: string;
    /*
     Détermine une catégorie de justificatifs
     */
    codeTypeJustificatif: string;
    /*
     Détermine la nature d'un document dans le catalogue de la GED     
Correspond au niveau le plus fin caractérisant un 
document
     */
    codeNatureGED: string;
    /*
     code de la maquette IDocXML permettant de générer le document
     */
    codeTechniqueImpression: string;
    /*
     Détermine un attributaire-type détenteur d'un
document                           
                                                         
            Valeurs :                                    
 '01'       Contrat                                      
 '02'       Personne                                     
 '05'       Relation économique                          
 '06'       Demande de financement                       
 '07'       Client Bancaire
     */
    codeTypeAttributaireDocument: string;
    /*
     code de l'application qui permet la génération du document
     */
    codeApplicationTechniqueEdition: string;
    /*
     code de la maquette. Elle est à associer au code application (outil) qui permet la génération du document
     */
    codeMaquette: string;
    /*
     libellé de description du document dans le Référentiel des documents entreprise (DOCENTRP)
     */
    libelleDocumentEntreprise: string;
    /*
     identifiant dans la GED du document d'entreprise.
     */
    identifiantDocumentGED: string;
    /*
     typologie des documents telle qu'elle est référencée dans l'ICG. 
Un document a un type de document pour l'ICG, lors de la signature électronique
     */
    codeTypeDocumentICG: string;
    /*
     code indiquant le type de fichier associé au type de document. Permettra de savoir sous quelle forme l'application doit fournir le ficher (XML, PDF, ...)
     */
    codeTypeFichier: string;
    /*
     code de comportement du document pour l'acte de gestion, lors de la contractualisation  électronique via l'ICG
                                                            
Valeurs :                                        
  '00'       Document à signer                                
  '01'       A présenter au client                            
  '02'       Réservé Caisse
     */
    codeActionSignatureDocument: string;
    /*
     codeModeUsage
     */
    codeModeUsage: number;
    /*
     Regroupement d'actes de gestion de niveau
processus/opération dans la gestion des pièces justificatives
     */
    codeFamilleActe: string;
    /*
     Détermine un objet (produit/service ou prestation)
traité par un acte de gestion dans la gestion des
dossiers de numérisation
     */
    codeObjetActe: string;
    /*
     identifiant de l'attributaire. Correspond à un identifiant métier du type 
 d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond à la référence du contrat
     */
    identifiantAttributaire: string;
    /*
     libellé d'intitulé de l'attributaire. Par exemple, pour un contrat, correspond à l'intitulé du contrat. Pour une personne, correspond à l'intitulé de la personne
     */
    intituleAttributaire: string;
    /*
     libellé décrivant le document.
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
     Nombre mini exemplaires doc/ édition
     */
    nbMiniExemplairesDocEdition: number;
    /*
     Nombre maxi exemplaires doc/ édition
     */
    nbMaxiExemplairesDocEdition: number;
    /*
     Nombre exemplaires par défaut / édition
     */
    nbExemplairesParDefautEdition: number;
    /*
     Ordre priorité utilisation
     */
    ordrePrioriteUtilisation: number;
    /*
     libellé section regroupement document
     */
    libelleSectionRegDoc: string;
    /*
     Libellé de désignation du type de document. Il sera utilisé lors de la contractualisation
     */
    libelleDocContractualisation: string;
    /*
     libellé externe associé au document entreprise (DOCENTRP)
     */
    libelleExterneDocEntreprise: string;
    /*
     Indique si les documents rattachés à une classe de 
document pourront être utilisés dans le processus  
de signature électronique
     */
    indicClasseEligibleSignature: boolean;
    /*
     Indique si le document est en cours de partage dans    
ICG (Interface de Confiance Groupe).                   
"true" lorsque le doc est partagé,       
'false" dès que la suppression de partage est ok.
     */
    indicPartageDocumentICG: boolean;
    /*
     Indicateur modif édition nombre exemplaires.
     */
    indicModifNbExemplaire: boolean;
    /*
     indique si le document fait partie du Référentiel des documents d'entreprise (DOCENTRP)
     */
    indicDocumentEntreprise: boolean;
    /*
     Cet indicateur précise si le document est obligatoire  
pour la contractualisation.
     */
    indicNonMaterialisation: boolean;
    /*
     Cet indicateur précise si le document est obligatoire  
pour l'acte
     */
    indicDocumentObligatoire: boolean;
    /*
     * (valeur par défaut = true) et il sert à indiquer à l’appelant qui récupère 
     * la liste des documents à produire s’il a le droit de modifier cet objet ou non.
     */
    indicDocumentModifiable: boolean;
        /*
     indicateur document principal
     */
    indicDocumentPrincipal: boolean;
  }

  export interface ISignataireActe {
    /*
     Identifiant justificatif identité
     */
    identifiantJustificatifIdentite: string;
    /*
     Adresse mail du signataire
     */
    adresseMailSign: string;
    /*
     Code type de signataire
(n'est pas alimenté en entrée)
     */
    codeTypeSignataire: string;
    /*
     code rôle signataire
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
     prénom du signataire d'acte
     */
    prenomSignataire: string;
  }

  export interface IContractualisationActeInput {
    /*
     undefined
     */
    acteGestion: IActeGestion;
    /*
     Indicateur agence déployée SAG
     */
    indicateurAgenceDeployee: boolean;
    /*
     Liste des matériels
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
     Type de périphérique:

TABLETTE_SIGNATURE = 0,
CAISSE_AUTO = 1
     */
    typePeripherique: number;
    /*
     Type de materiel
     */
    type: string;
    /*
     le modèle du matériel
     */
    modele: string;
    /*
     Code modèle du matériel
     */
    codeModele: string;
  }

  export interface ITitulaireActe {
    /*
     numéro personne
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
     type au sens numéro de signataire du dossier.
        on affecte un type (1, 2,...) à un signataire (personne)
     */
    codeTypeSignataire: string;
    /*
     Numéro permettant de gérer l'ordre d'affichage du document lors du processus de signature
     */
    numeroAffichageDocument: number;
    /*
     indicateur permettant de gérer la signature du document par le signataire
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
     code de l'acte de gestion identifié dans référentiel des Actes (REFACTE)
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
MEGI - mise en gestion immédiate
VPC - vente par correspondance
     */
    codeModeMiseGestion: string;
    /*
     codeTypeMarcheEntreprise
     */
    codeTypeMarcheEntreprise: string;
    /*
     identifiant de l'acte donné par IDN
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
     identifiant externe de l'acte. Il permet d'identifier le dossier numérique
     */
    identifiantActeExterne: string;
    /*
     identifiant de l'agence ou du point de vente où se déroule l'acte
     */
    identifiantAgence: string;
    /*
     identifiant de l'agent associé à l'acte de gestion
     */
    identifiantAgent: string;
    /*
     Référence du contrat associé à l'acte de gestion
     */
    referenceContrat: string;
    /*
     référence du contrat dans le SI du producteur, dans le cas d'un acte de gestion instruit chez un producteur externe (exemple : numéro FFI chez Natixis Financement)
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
     Référence EDS interne de domiciliation du client
     */
    referenceEDSInterneClient: string;
    /*
     Référence EDS externe de domiciliation du client
     */
    referenceEDSExterneClient: string;
    /*
     Nombre de personnes de l'entité titulaire
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
     Numéro d'offre VMC
     */
    numeroOffreVMC: string;
  }

  export interface IOperationFinanciere {
    /*
     numéro de personne: NODAP
     */
    numeroPersonne: string;
    /*
     libelle du client opération
     */
    libelleClientOperation: string;
    /*
     libelle du compte opération
     */
    libelleCompteOperation: string;
    /*
     Date d'opération
     */
    dateOperation: Date;
    /*
     montant d'opération
     */
    montantOperation: number;
    /*
     nature de l'opération
     */
    natureOperation: string;
    /*
     Mode de versement d'une opération financière
     */
    modeVersementOpeFinanciere: string;
  }

  export interface IInfosContractualisation {
    /*
     Numéro entité titulaire
     */
    numeroEntiteTitulaire: string;
    /*
     Identifiant personne
     */
    identifiantPersonne: string;
    /*
     Libellé message erreur
     */
    libelleMessageErreur: string;
  }

  export interface IEligibiliteSAGSED {
    /*
     Top papier O/N
     */
    indicateurPapier: boolean;
    /*
     Motif de non éligibilité SAG SED
     */
    motifNonEligibiliteSAGSED: IMotifNonEligibiliteSAGSED;
    /*
     Liste de piéces identités manquantes
     */
    listePiecesIdentiteManquantes: Array<IPieceIdentiteManquante>;
  }

    export interface IMotifNonEligibiliteSAGSED {
    /*
     libellé non éligibilité
     */
    libelleNonEligibilite: string;
    /*
     code non éligibilité
     */
    codeNonEligibilite: string;
  }
  
  export interface IPieceIdentiteManquante {
    /*
     nom du signataire
     */
    nomSignataire: string;
    /*
     prénom du signataire
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
