declare module Myway.Ressource.ContractualisationParametre {
  export interface IPersonne {
    /*
     Identifiant personne
     */
    numeroPersonne: string;
    /*
     typologie des moyens de restitution dont dispose le client � des fins de restitution des documents sign�s
     */
    typeMoyenRestitution: string;
    /*
     Identifiant coffre-fort num�rique d�tenu par le client
     */
    identifiantCoffreFortNumerique: string;
    /*
     Adresse E-MAIL personnelle du client
     */
    adresseEMail: string;
    /*
     num�ro de t�l�phone mobile du client permettant l'authentification forte par OTP/SMS
     */
    numeroTelephoneClient: string;
    /*
     Indicateur authentification SOL-SMS possible ((S�curisation des Op�ration en Ligne par SMS)
     */
    indicAuthentificationSolSms: boolean;
    /*
     Indicateur authentification SOL-CAP possible (S�curisation des Op�ration en Ligne par lecteur Carte A Puce)
     */
    indicAuthentificationSolCap: boolean;
    /*
     Indicateur authentification Identit� possible
     */
    indicAuthentificationIdentite: boolean;
  }

  export interface IDocument {
    /*
     Code technique impression
     */
    codeTechniqueImpression: string;
    /*
     Code nature pi�ce justificative
     */
    codeNaturePieceJustificative: string;
    /*
     Code type justificatif
     */
    codeTypeJustificatif: string;
    /*
     Code Nature GED
     */
    codeNatureGed: string;
    /*
     Code type ICG (Infrastructure de Confiance Groupe)
     */
    codeTypeIcg: string;
    /*
     Indicateur Document obligatoire
     */
    indicateurDocumentObligatoire: boolean;
    /*
     Indicateur document visualisable
     */
    indicateurDocumentVisualisable: boolean;
    /*
     Indicateur document supprimable
     */
    indicateurDocumentSupprimable: boolean;
    /*
     Code action document
     */
    codeActionDocument: string;
    /*
     Indicateur document eligible ICG (Infrastructure de Confiance Groupe)
     */
    indicateurDocumentEligibleIcg: boolean;
    /*
     Indicateur document sceller ICG (Infrastructure de Confiance Groupe)
     */
    indicateurDocumentScellerIcg: boolean;
    /*
     Indicateur document archiver ICG (Infrastructure de Confiance Groupe)
     */
    indicateurDocumentArchiverIcg: boolean;
    /*
     Indicateur document � injecter GED
     */
    indicateurDocumentAInjecterGed: boolean;
    /*
     Indicateur document restituable
     */
    indicateurDocumentRestituable: boolean;
    /*
     Ordre priorit� utilisation
     */
    ordrePrioriteUtilisation: string;
    /*
     Type document contractualisation
     */
    typeDocumentContractualisation: string;
    /*
     Type attributaire classeur client
     */
    typeAttributaireClasseurClient: string;
    /*
     Indicateur signature banque
     */
    indicateurSignatureBanque: boolean;
    /*
     undefined
     */
    listeZoneSignature: Array<IZoneSignature>;
    /*
     code de la famille de l'acte de gestion
     */
    codeFamilleActe: string;
    /*
     code objet de l'acte de gestion (P/S ou objet m�tier)
     */
    codeObjetActe: string;
    /*
     D�termine le type de section de regroupement de documents   
de m�me nature                                       
Permet l'affichage des documents dans ICG (Infrastructure de Confiance Groupe)
Correspond � un onglet du dossier
     */
    codeTypeSectionRegroupement: string;
    /*
     libell� de description de regroupement des documents lors de l'affichage dans ICG (Infrastructure de Confiance Groupe)
     */
    libelleSectionRegroupement: string;
    /*
     indique si le document fait partie du r�f�rentiel des documents d'entreprise
     */
    indicateurDocumentEntreprise: boolean;
    /*
     Nb maxi exemplaires doc / �dition
     */
    nbMaxiExemplairesDocEdition: number;
    /*
     Nb mini exemplaires doc / �dition
     */
    nbMiniExemplairesDocEdition: number;
    /*
     Nb exemplaires par d�faut / �dition
     */
    nbExemplairesParDefautEdition: number;
    /*
     Libell� document contractualisation
     */
    libelleDocContractualisation: string;
    /*
     indique si  la modification du nombre d'exemplaires des documents 
 (Nb mini, Nb maxi et Nb par d�faut) par l'utilisateur 
 est possible.
Pour la signature �lectronique en agence              .
     */
    indicateurMAJNbExemplaires: boolean;
    /*
     Code de l'acte de gestion
     */
    codeActeGestion: string;
    /*
     intitul� du fichier du document d'entreprise. sert de r�f�rence dans l'ICG (Infrastructure de Confiance Groupe)
     */
    libelleFichierDocEntreprise: string;
    /*
     libell� de description du document entreprise. Il sert � l'affichage lors de la contractualisation
     */
    libelleExterneDocEntreprise: string;
    /*
     identifiant du document d'entreprise dans la GED Mysys
     */
    identifiantGEDDocEntreprise: string;
  }

  export interface IZoneSignature {
    /*
     Num�ro bloc signature du document. Un document peut contenir plusieurs blocs
     */
    numeroBlocSignatureDocument: number;
    /*
     Code type signataire. Typologie g�n�rique permettant d'associer une personne ou entit� � un signataire
     */
    codeTypeSignataire: string;
    /*
     Identifiant label signature. donn�e permettant de reconnaitre la zone de signature dans un document
     */
    identifiantLabelSignature: string;
    /*
     Num�ro page document o� se trouve la zone de signature
     */
    numeroPageDocument: number;
    /*
     abscisse position de la zone de signature
     */
    abscissePositionSignature: number;
    /*
     ordonn�e position de la zone de signature
     */
    ordonneePositionSignature: number;
    /*
     hauteur de la zone de signature
     */
    hauteurSignature: number;
    /*
     largeur de la zone de signature
     */
    largeurSignature: number;
    /*
     Libell� associ� � la zone de signature
     */
    libelleTexteZoneSignature: string;
    /*
     indique le sens de la hauteur (incr�ment ou d�cr�ment)
     */
    codeSensAbcisse: string;
    /*
     indique le sens de l'ordonn�e (incr�ment ou d�cr�ment)
     */
    codeSensOrdonnee: string;
  }

  export interface IContractualisationParametre {
    /*
     code acte de gestion
     */
    codeActeGestion: string;
    /*
     undefined
     */
    listeModeContractualisation: Array<IModeContractualisationActe>;
  }

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
     undefined
     */
    listeDocuments: Array<IDocument>;
    /*
     indique si le mode d'emploi de la contractualisation est affich� lors de la signature du client
     */
    indicateurModeEmploi: boolean;
    /*
     Cet indicateur pr�cise si l'authentification par  SOL-CAP est possible ou requise (S�curisation des Op�ration en Ligne par lecture Carte A Puce)
     */
    indicateurAuthentficationCAP: boolean;
    /*
     typologie r�f�renc�e permettant de constituer le corps du message de confirmation envoy� au client apr�s signature
     */
    codeTypeMailConfirmation: string;
    /*
     code indiquant l'activation de la MSI
     */
    codeActivationMSI: string;
    /*
     D�termine le type de demande de recherche en GED de la pi�ce justificative d'identit� du client.
     */
    codeActionRecherchePJI: string;
    /*
     Code indiquant si une restitution papier est possible pour un mode de contractualisation.
     */
    indicateurRestitutionPapier: boolean;
    /*
     D�termine la demande d'�mission d'un CRE fonctionnel  en fin d'acte de gestion.
     */
    indicateurEmissionCRE: string;
    /*
     indique le mode de remise au client des Conditions G�n�rales.
     */
    codeRemiseCG: string;
    /*
     undefined
     */
    listePersonne: Array<IPersonne>;
    /*
     Indique si la consultation des documents est possible pendant la phase d'authentificaton
     */
    indicateurConsultationDocAuth: boolean;
    /*
     Cet indicateur pr�cise si l'authentification par justificatif d'identit� est possible ou requise
     */
    indicateurAuthentificationPJI: boolean;
    /*
     Indique si le t�t�chargement des documents est possible pendant la phase de restitution
     */
    indicTelechargementRestitution: boolean;
    /*
     code permettant l'inhibition de l'affichage de l'�cran de choix de signature.
     */
    codeActionInhiberChoixSignature: string;
    /*
     Cet indicateur pr�cise si l'authentification par SOL-SMS est possible ou requise (S�curisation des Op�ration en Ligne par SMS)
     */
    indicateurAuthentificationSMS: boolean;
    /*
     Indicateur de sensibilit� du montant
     */
    indicateurSensibiliteMontant: boolean;
    /*
     undefined
     */
    listeInfosContractualisation: Array<IInfosContractualisation>;
    /*
     Indique si un r�capitulatif des documents est pr�sent� pendant la phase de signature
     */
    indicRecapitulatifPresentation: boolean;
    /*
     Indique si la consultation des documents est possible apr�s la signature
     */
    indicConsultationDocSignature: boolean;
    /*
     Indique si la consultation des documents est possible pendant la phase de restitution
     */
    indicConsultationDocRestitution: boolean;
    /*
     space?: pas de r�gle existante
 O?: existence r�gle bloquante
 N?: existence r�gle non bloquante
     */
    codeRegleRecherchePJI: string;
  }

  export interface IContractualisationParametreInput {
    /*
     Num�ro entit� titulaire
     */
    numeroEntiteTitulaire: string;
    /*
     Num�ro  personne
     */
    numeroPersonne: string;
    /*
     Indicateur pr�sence tablette
     */
    indicateurPresenceTablette: boolean;
    /*
     Indicateur pr�sence lecteur carte
     */
    indicateurPresenceLecteurCarte: boolean;
    /*
     Code canal dossier vente
     */
    codeCanal: string;
    /*
     Code nature appel QR
     */
    codeNatureAppelQr: string;
    /*
     Indicateur traitement impression
     */
    indicateurTraitementImpression: boolean;
    /*
     Code mat�riel compatible
     */
    codeMaterielCompatible: Array<string>;
    /*
     code de l'acte de gestion principal
     */
    codeActeGestionPrincipal: string;
    /*
     Liste des codes acte de gestion secondaires
     */
    listeActeGestionSecondaire: Array<string>;
    /*
     undefined
     */
    listeSignataires: Array<ISignataire>;
    /*
     Liste des montants des op�rations (uniquement pour SAG-OPC)
     */
    listeMontantOperation: Array<IMontantOperation>;
  }

  export interface ISignataire {
    /*
     Identifiant personne
     */
    numeroPersonne: string;
    /*
     Identifiant justificatif identit�
     */
    identifiantJustificatifIdentite: string;
  }

  export interface ISensibiliteOperation {
    /*
     Code mode contractualisation
     */
    codeModeContractualisation: string;
    /*
     Indicateur de sensibilit� du montant
     */
    indicateurSensibiliteMontant: boolean;
  }

  export interface IMontantOperation {
    /*
     Code ISO devise
     */
    codeDevise: string;
    /*
     Montant de l'op�ration ou du compte
     */
    montant: number;
  }

  export interface IInfosContractualisation {
    /*
     Identifiant personne
     */
    identifiantPersonne: string;
    /*
     Libell� message erreur
     */
    libelleMessageErreur: string;
    /*
     Num�ro entit� titulaire
     */
    numeroEntiteTitulaire: string;
  }

}
