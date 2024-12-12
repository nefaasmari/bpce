declare module Myway.Ressource.ContractualisationActe {

      export interface IModeContractualisationActe {
        /**
         * Code mode contractualisation d�crit par le canal et la mani�re de contractualiser un acte de gestion
         * exemple : FAFE - Face A Face Electronique => acte r�alis� en agence et sign� �lectroniquement
         */
        codeModeContractualisation: string;
        /**
         * Libell� mode contractualisation
         */
        libelleModeContractualisation: string;
        /**
         * Code statut contractualisation
         */
        codeStatutContractualisation: string;
        /**
         * Code type signature. D�crit la fa�on dont la signature est faite (scripturale, double clic, ...)
         */
        codeTypeSignature: string;
        /**
         * Indique si la consultation des documents est possible pendant la phase d'authentificaton
         */
        indicConsultationDocumentAuth: boolean;
        /**
         * code Activation MSI
         */
        codeActivationMSI: string;
        /**
         * indique si le mode d'emploi de la contractualisation est affich� lors de la signature du client
         */
        indicModeEmploi: boolean;
        /**
         * Indique si la consultation des documents est possible apr�s la signature
         */
        indicConsultationDocSignature: boolean;
        /**
         * Indique si un r�capitulatif des documents est pr�sent� pendant la phase de signature
         */
        indicRecapitulatifPresentation: boolean;
        /**
         * Indique si la consultation des documents est possible pendant la phase de restitution
         */
        indicConsultationDocRestitution: boolean;
        /**
         * Indique si le t�t�chargement des documents est possible pendant la phase de restitution
         */
        indicTelechargementRestitution: boolean;
        /**
         * niveau authentification requis 
         * 0 - faible
         * 1 - fort
         */
        codeNiveauAuthentification: string;
        /**
         * Indicateur authentification SOL-SMS possible
         */
        indicAuthentificationSolSms: boolean;
        /**
         * Indicateur authentification SOL-CAP possible
         */
        indicAuthentificationSolCap: boolean;
        /**
         * Indicateur authentification Identit� possible
         */
        indicAuthentificationIdentite: boolean;
        /**
         * Code du  mat�riel compatible avec le mode de contractualisation
         */
        codeMaterielCompatible: string;
        /**
         * Libell� du mat�riel compatible
         */
        libelleMaterielCompatible: string;
        /**
         * Cet indicateur pr�cise si l'authentification par SOL-SMS est possible ou requise
         */
        indicAuthentifiationSMS: boolean;
        /**
         * Cet indicateur pr�cise si l'authentification par  SOL-CAP est possible ou requise
         */
        indicAuthentficationCAP: boolean;
        /**
         * Cet indicateur pr�cise si l'authentification par justificatif d'identit� est possible ou requise
         */
        indicAuthPieceIdentite: boolean;
        /**
         * typologie r�f�renc�e permettant de constituer le corps du message de confirmation envoy� au client apr�s signature
         */
        codeTypeMailConfirmation: string;
        /**
         * D�termine le type de demande de recherche en GED de la pi�ce justificative d'identit� du client.
         */
        codeActionRecherchePJI: string;
        /**
         * code permettant l'inhibition de l'affichage de l'�cran de choix de signature.
         */
        codeActionInhiberChoixSignature: string;
        /**
         * D�termine la demande d'�mission d'un CRE fonctionnel  en fin d'acte de gestion.
         */
        indicEmissionCRE: string;
        /**
         * Code indiquant si une restitution papier est possible pour un mode de contractualisation.
         */
        indicRestitutionPapier: boolean;
        /**
         * indique le mode de remise au client des Conditions G�n�rales.
         */
        codeRemiseCG: string;
        listeInfosContractualisation: Array<IInfosContractualisation>;
        /**
         * space?: pas de r�gle existante 
         * O?: existence r�gle bloquante 
         * N?: existence r�gle non bloquante.
         */
        codeRegleRecherchePJI: string;
        /**
         * code action collecte doc compl�ment
         */
        codeRegleCollecteDocComplement: string;
      }
    
    export interface IContractualisationActe {
        acteGestion: IActeGestion;
        /**
         * Top papier O/N
         */
        indicateurPapier: boolean;
        listeMateriels: Array<IMateriel>;
        /**
         * motif de non �ligibilit� SAG SED
         */
        motifNonEligibiliteSAGSED: IMotifNonEligibiliteSAGSED;
        /**
         * surchargeNonEligibilite
         */
        surchargeNonEligibilite: boolean;
        listePiecesIdentiteManquantes: Array<IPieceIdentiteManquante>;
        /**
         * Type Professionnel : EI : Entrepreneur individuel, PM : Personne morale
         */
        typeProfessionnel: string;
        /**
         * Renseign� � true si c'est d�ploy� SEMD: Signature �lectronique mutli dossiers. Donn�e optionnelle dans le d.ts, utilis�e par le front
         */
        isDeployeSEMD: boolean;
        /**
         * True si on veut desactiver le panier signature et forcer a signer immediatement
         */
        isPanierDesactive?: boolean;
        /**
         * Renseign� � true si c'est d�ploy� MySign
         */
        isDeployeMySign: boolean;
        /**
         * Renseign� � true si il existe un signataire de type visa collaborateur
         */
        isEligibleVisaCollaborateur: boolean;
        /**
         * Code du processus m�tier
         * Exemple : "001" = processus docs  personne
         */
        codeProcessusMetier: string;
        /**
         * Renseign� � true si c'est d�ploy� SEMD: Signature �lectronique mutli dossiers. Donn�e optionnelle dans le d.ts, utilis�e par le front
         */
        isDeployeBulleConfiance: boolean;
        /**
         * Dans un contexte Pro, isDerniereLiasse permet d'indiquer il reste d'autres liasses contractuelles � traiter ou pas.
         */
        isDerniereLiasse: boolean;
        /**
         * Dans un contexte Pro, indicateur pour savoir si le contacturalisationActe est inclus dans un groupe d'autres actes dont au moins l'un deux n'est pas �ligible � MySign
         */
        isOffreMixte: boolean;
	    /**
         *  codeSensCommunication transmis par les appelants. GGO, GGHO, et GGO EPI. Pour dossier de vente.
         */
        codeSensCommunication?: string;
    }
    
      export interface IDocumentAProduire {
        /**
         * D�termine un document-type.                                                       
         *                                   
         *  Nomenclature g�r�e dans la table E52I / appli        
         *  CONTELEC
         */
        codeTypeDocument: string;
        /**
         * code d�crivant la nature de la pi�ce justificative
         */
        codeNaturePJ: string;
        /**
         * D�termine une cat�gorie de justificatifs
         */
        codeTypeJustificatif: string;
        /**
         * D�termine la nature d'un document dans le catalogue de la GED     
         * Correspond au niveau le plus fin caract�risant un 
         * document
         */
        codeNatureGED: string;
        /**
         * code de la maquette IDocXML permettant de g�n�rer le document
         */
        codeTechniqueImpression: string;
        /**
         * Cet indicateur pr�cise si le document est obligatoire  
         * pour l'acte
         */
        indicDocumentObligatoire: boolean;
        /**
         * Cet indicateur pr�cise si le document est obligatoire  
         * pour la contractualisation.
         */
        indicNonMaterialisation: boolean;
        /**
         * D�termine un attributaire-type d�tenteur d'un
         * document                           
         *                                                          
         *             Valeurs :                                    
         *  '01'       Contrat                                      
         *  '02'       Personne                                     
         *  '05'       Relation �conomique                          
         *  '06'       Demande de financement                       
         *  '07'       Client Bancaire
         */
        codeTypeAttributaireDocument: string;
        /**
         * Libell� de d�signation du type de document. Il sera utilis� lors de la contractualisation
         */
        libelleDocContractualisation: string;
        /**
         * code de l'application qui permet la g�n�ration du document
         */
        codeApplicationTechniqueEdition: string;
        /**
         * code de la maquette. Elle est � associer au code application (outil) qui permet la g�n�ration du document
         */
        codeMaquette: string;
        /**
         * indique si le document fait partie du R�f�rentiel des documents d'entreprise (DOCENTRP)
         */
        indicDocumentEntreprise: boolean;
        /**
         * libell� de description du document dans le R�f�rentiel des documents entreprise (DOCENTRP)
         */
        libelleDocumentEntreprise: string;
        /**
         * libell� externe associ� au document entreprise (DOCENTRP)
         */
        libelleExterneDocEntreprise: string;
        /**
         * identifiant dans la GED du document d'entreprise.
         */
        identifiantDocumentGED: string;
        /**
         * typologie des documents telle qu'elle est r�f�renc�e dans l'ICG. 
         * Un document a un type de document pour l'ICG, lors de la signature �lectronique
         */
        codeTypeDocumentICG: string;
        /**
         * Indique si les documents rattach�s � une classe de 
         * document pourront �tre utilis�s dans le processus  
         * de signature �lectronique
         */
        indicClasseEligibleSignature: boolean;
        /**
         * Indique si le document est en cours de partage dans    
         * ICG (Interface de Confiance Groupe).                   
         * "true" lorsque le doc est partag�,       
         * 'false" d�s que la suppression de partage est ok.
         */
        indicPartageDocumentICG: boolean;
        /**
         * code de comportement du document pour l'acte de gestion, lors de la contractualisation  �lectronique via l'ICG
         *                                                             
         * Valeurs :                                        
         *   '00'       Document � signer                                
         *   '01'       A pr�senter au client                            
         *   '02'       R�serv� Caisse
         */
        codeActionSignatureDocument: string;
        /**
         * code indiquant le type de fichier associ� au type de document. Permettra de savoir sous quelle forme l'application doit fournir le ficher (XML, PDF, ...)
         */
        codeTypeFichier: string;
        /**
         * codeModeUsage
         */
        codeModeUsage: number;
        /**
         * Regroupement d'actes de gestion de niveau
         * processus/op�ration dans la gestion des pi�ces justificatives
         */
        codeFamilleActe: string;
        /**
         * D�termine un objet (produit/service ou prestation)
         * trait� par un acte de gestion dans la gestion des
         * dossiers de num�risation
         */
        codeObjetActe: string;
        /**
         * identifiant de l'attributaire. Correspond � un identifiant m�tier du type 
         *  d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond � la r�f�rence du contrat
         */
        identifiantAttributaire: string;
        /**
         * libell� d'intitul� de l'attributaire. Par exemple, pour un contrat, correspond � l'intitul� du contrat. Pour une personne, correspond � l'intitul� de la personne
         */
        intituleAttributaire: string;
        /**
         * libell� d�crivant le document.
         */
        libelleDescriptionDocument: string;
        listeSignataireDocument: Array<ISignataireDocument>;
        /**
         * code Classe Document Entreprise
         */
        codeClasseDocumentEntreprise: string;
        /**
         * Code de l'acte de gestion
         */
        codeActeGestion: string;
        /**
         * Nombre mini exemplaires doc/ �dition
         */
        nbMiniExemplairesDocEdition: number;
        /**
         * Nombre maxi exemplaires doc/ �dition
         */
        nbMaxiExemplairesDocEdition: number;
        /**
         * Nombre exemplaires par d�faut / �dition
         */
        nbExemplairesParDefautEdition: number;
        /**
         * Indicateur modif �dition nombre exemplaires.
         */
        indicModifNbExemplaire: boolean;
        /**
         * Ordre priorit� utilisation
         */
        ordrePrioriteUtilisation: number;
        /**
         * libell� section regroupement document
         */
        libelleSectionRegDoc: string;
        /**
         * (valeur par d�faut = true) et il sert � indiquer � l�appelant qui r�cup�re la liste des documents � produire s�il a le droit de modifier cet objet ou non.
         */
        indicDocumentModifiable: boolean;
        /**
         * indicateur document principal
         */
        indicDocumentPrincipal: boolean;
        /**
         * url du Document obtenu de documentEntreprise
         */
        urlDocument: string;
        /**
         * Identifiant IDN du document
         */
        identifiantIDN: string;
      }
    
      export interface ISignataireActe {
        /**
         * Identifiant personne
         */
        numeroSignataire: string;
        /**
         * Nom du signataire d'acte
         */
        nomSignataire: string;
        /**
         * pr�nom du signataire d'acte
         */
        prenomSignataire: string;
        /**
         * Identifiant justificatif identit�
         */
        identifiantJustificatifIdentite: string;
        /**
         * Adresse mail du signataire
         */
        adresseMailSign: string;
        /**
         * Rang signataire
         */
        rangSignataire: number;
        /**
         * Code type de signataire
         * (n'est pas aliment� en entr�e)
         */
        codeTypeSignataire: string;
        /**
         * code r�le signataire
         */
        codeRoleSignataire: string;
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
        /**
         * La civilit� du signataire
         */
         civiliteSignataire: string;
        /*
         Identifiant permettant de d�finir l'usage qu'a cette personne le DEI d'un PRO
         */
        numUsagerBAD?: string;
		/**
		* Famille de mail souhait�e, quand elle n'est pas renseign�e nous prenons celle du panier.
		*/
		emailFamille?: number;
		/**
		* Num�ro de personne externe li�e
		*/
		identifiantPersonneEnLien?: string;
		/**
		* Identifiant de l'Usager BAD
		*/
		identifiantBADPersonneEnLien?: string;
      }
    
      export interface IContractualisationActeInput {
        /*
         IdentifiantActeGestion
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
        /**
         * Type Professionnel : EI : Entrepreneur individuel, PM : Personne morale
         */
        typeProfessionnel: string;
		/**
		* Motif Non Eligib venant du Producteur
		*/
		libelleMotifNonEligibProducteur: string;
        /**
         * Renseign� � true si c'est d�ploy� SEMD: Signature �lectronique mutli dossiers
         */
        isDeployeSEMD?: boolean;
        /**
         * Renseign� � true si c'est d�ploy� MySign
         */
        isDeployeMySign?: boolean;
      }
    
      export interface IMateriel {
        /**
         * Type de p�riph�rique:
         * 
         * TABLETTE_SIGNATURE = 0,
         * CAISSE_AUTO = 1
         */
        typePeripherique: number;
        /**
         * Type de materiel
         */
        type: string;
        /**
         * le mod�le du mat�riel
         */
        modele: string;
        /**
         * Code mod�le du mat�riel
         */
        codeModele: string;
        /**
        * Identifiant mat�riel
        */
        identifiant?: string;
        /**
         * Rang
         */
        rang?: string;
      }
    
      export interface ITitulaireActe {
        /**
         * num�ro personne
         */
        numeroPersonne: string;
        /**
         * adresse mail de la personne
         */
        adresseMail: string;
        /**
         * nom du signataire
         */
        nom?: string;
        /**
         * pr�nom du signataire
         */
        prenom?: string;
        /**
         * civilit� du signataire
         */
        civilite?: string;
        
      }
    
      export interface ISignataireDocument {
        optionsSignataire: IOptionSignataire;
        /**
         * type au sens num�ro de signataire du dossier.
         *         on affecte un type (1, 2,...) � un signataire (personne)
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
      }
    
      export interface IOptionSignataire {
        /**
         * Identifiant Option Signataire
         */
        idOptionSignataire: string;
        /**
         * message option signataire
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
        /*
         * Identifiant agent conseiller
         */
        identifiantAgentConseiller: string;
        /**
         * Signature Agent Email : 
         * Operant = 0, 
         * ChargeAffaire = 1, 
         * OperantPourChargeAffaire = 2 
         * Aucun = 3
         */
        signatureAgentEmail: number;
        /**
         * Destinataire Email Conseiller : 
         * Operant = 0, 
         * ChargeAffaire = 1, 
         * OperantChargeAffaire = 2, 
         * Aucun = 3
         */
        destinataireEmailConseiller: number;
         /**
          * Contr�le compl�tude DRC : Valeur par d�faut est true.
          */
        controleCompletudeDRC?: boolean;
        /**
         * code Famille Gestion Locale Contrat
         * Exemple : "OFFBAD" pour l'offre ordonance d�mat
         */
        codeFamilleGestionLocaleContrat?: string;
        /**
         * 1 : contrat
         * 2 : personne
         */
        porteurClasseurClient?: number;
        /**
         * Identifiant Porteur carte (pour les professionnel)
         */
        identifiantPorteurCarte?: string;
        /**
         * A renseigner par True pour remettre les documents via le dossier de partage, false sinon
         */
        remiseDocViaDossierPartage ?: boolean;
		/**
         * codeTypeSousMarcheDocEntreprise
         */
        codeTypeSousMarcheDocEntreprise?: string;  
		/**
		contratExterne
		*/		
		contratExterne?: string;
      }
    
      export interface IOperationFinanciere {
        /**
         * num�ro de personne: NODAP
         */
        numeroPersonne: string;
        /**
         * libelle du client op�ration
         */
        libelleClientOperation: string;
        /**
         * libelle du compte op�ration
         */
        libelleCompteOperation: string;
        /**
         * Date d'op�ration
         * Type date au format yyyy-MM-dd
         */
        dateOperation: string;
        /**
         * montant d'op�ration
         */
        montantOperation: number;
        /**
         * Mode de versement d'une op�ration financi�re
         */
        modeVersementOpeFinanciere: string;
        /**
         * nature de l'op�ration
         */
        natureOperation: string;
      }
    
      export interface IInfosContractualisation {
        /**
         * Num�ro entit� titulaire
         */
        numeroEntiteTitulaire: string;
        /**
         * Identifiant personne
         */
        identifiantPersonne: string;
        /**
         * code statut contractualisation
         */
        codeStatutContractualisation: string;
        /**
         * Libell� message erreur
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

        isEligibleVisaCollaborateur ?: boolean;
        /**
         * Renseign� � true si c'est d�ploy� SEMD: Signature �lectronique mutli dossiers
         */
        isDeployeSEMD?: boolean;
        /**
         * Renseign� � true si c'est d�ploy� MySign
         */
        isDeployeMySign?: boolean;
        /**
         * Renseign� � true si c'est d�ploy� Bulle de confiance
         */
        isDeployeBulleConfiance?: boolean;
      }
    
      export interface IMotifNonEligibiliteSAGSED {
        /**
         * code non �ligibilit�
         */
        codeNonEligibilite: string;
        /**
         * libell� non �ligibilit�
         */
        libelleNonEligibilite: string;
      }
    
      export interface IPieceIdentiteManquante {
        /**
         * nom du signataire
         */
        nomSignataire: string;
        /**
         * pr�nom du signataire
         */
        prenomSignataire: string;
        /**
         * identifiant du signataire
         */
        idSignataire: string;
        /**
         * identifiant du dossier DRC
         */
        idDossierDrc: string;
        /**
         * type attributaire
         */
        typeAttributaire: string;
      }
    
}
