declare module Myway.Ressource.ContractualisationActe {

      export interface IModeContractualisationActe {
        /**
         * Code mode contractualisation décrit par le canal et la manière de contractualiser un acte de gestion
         * exemple : FAFE - Face A Face Electronique => acte réalisé en agence et signé électroniquement
         */
        codeModeContractualisation: string;
        /**
         * Libellé mode contractualisation
         */
        libelleModeContractualisation: string;
        /**
         * Code statut contractualisation
         */
        codeStatutContractualisation: string;
        /**
         * Code type signature. Décrit la façon dont la signature est faite (scripturale, double clic, ...)
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
         * indique si le mode d'emploi de la contractualisation est affiché lors de la signature du client
         */
        indicModeEmploi: boolean;
        /**
         * Indique si la consultation des documents est possible après la signature
         */
        indicConsultationDocSignature: boolean;
        /**
         * Indique si un récapitulatif des documents est présenté pendant la phase de signature
         */
        indicRecapitulatifPresentation: boolean;
        /**
         * Indique si la consultation des documents est possible pendant la phase de restitution
         */
        indicConsultationDocRestitution: boolean;
        /**
         * Indique si le tétéchargement des documents est possible pendant la phase de restitution
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
         * Indicateur authentification Identité possible
         */
        indicAuthentificationIdentite: boolean;
        /**
         * Code du  matériel compatible avec le mode de contractualisation
         */
        codeMaterielCompatible: string;
        /**
         * Libellé du matériel compatible
         */
        libelleMaterielCompatible: string;
        /**
         * Cet indicateur précise si l'authentification par SOL-SMS est possible ou requise
         */
        indicAuthentifiationSMS: boolean;
        /**
         * Cet indicateur précise si l'authentification par  SOL-CAP est possible ou requise
         */
        indicAuthentficationCAP: boolean;
        /**
         * Cet indicateur précise si l'authentification par justificatif d'identité est possible ou requise
         */
        indicAuthPieceIdentite: boolean;
        /**
         * typologie référencée permettant de constituer le corps du message de confirmation envoyé au client après signature
         */
        codeTypeMailConfirmation: string;
        /**
         * Détermine le type de demande de recherche en GED de la pièce justificative d'identité du client.
         */
        codeActionRecherchePJI: string;
        /**
         * code permettant l'inhibition de l'affichage de l'écran de choix de signature.
         */
        codeActionInhiberChoixSignature: string;
        /**
         * Détermine la demande d'émission d'un CRE fonctionnel  en fin d'acte de gestion.
         */
        indicEmissionCRE: string;
        /**
         * Code indiquant si une restitution papier est possible pour un mode de contractualisation.
         */
        indicRestitutionPapier: boolean;
        /**
         * indique le mode de remise au client des Conditions Générales.
         */
        codeRemiseCG: string;
        listeInfosContractualisation: Array<IInfosContractualisation>;
        /**
         * space?: pas de règle existante 
         * O?: existence règle bloquante 
         * N?: existence règle non bloquante.
         */
        codeRegleRecherchePJI: string;
        /**
         * code action collecte doc complément
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
         * motif de non éligibilité SAG SED
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
         * Renseigné à true si c'est déployé SEMD: Signature électronique mutli dossiers. Donnée optionnelle dans le d.ts, utilisée par le front
         */
        isDeployeSEMD: boolean;
        /**
         * Renseigné à true si c'est déployé MySign
         */
        isDeployeMySign: boolean;
        /**
         * Renseigné à true si il existe un signataire de type visa collaborateur
         */
        isEligibleVisaCollaborateur: boolean;
        /**
         * Code du processus métier
         * Exemple : "001" = processus docs  personne
         */
        codeProcessusMetier: string;
        /**
         * Renseigné à true si c'est déployé SEMD: Signature électronique mutli dossiers. Donnée optionnelle dans le d.ts, utilisée par le front
         */
        isDeployeBulleConfiance: boolean;
        /**
         * Dans un contexte Pro, isDerniereLiasse permet d'indiquer il reste d'autres liasses contractuelles à traiter ou pas.
         */
        isDerniereLiasse: boolean;
        /**
         * Dans un contexte Pro, indicateur pour savoir si le contacturalisationActe est inclus dans un groupe d'autres actes dont au moins l'un deux n'est pas éligible à MySign
         */
        isOffreMixte: boolean;
    }
    
      export interface IDocumentAProduire {
        /**
         * Détermine un document-type.                                                       
         *                                   
         *  Nomenclature gérée dans la table E52I / appli        
         *  CONTELEC
         */
        codeTypeDocument: string;
        /**
         * code décrivant la nature de la pièce justificative
         */
        codeNaturePJ: string;
        /**
         * Détermine une catégorie de justificatifs
         */
        codeTypeJustificatif: string;
        /**
         * Détermine la nature d'un document dans le catalogue de la GED     
         * Correspond au niveau le plus fin caractérisant un 
         * document
         */
        codeNatureGED: string;
        /**
         * code de la maquette IDocXML permettant de générer le document
         */
        codeTechniqueImpression: string;
        /**
         * Cet indicateur précise si le document est obligatoire  
         * pour l'acte
         */
        indicDocumentObligatoire: boolean;
        /**
         * Cet indicateur précise si le document est obligatoire  
         * pour la contractualisation.
         */
        indicNonMaterialisation: boolean;
        /**
         * Détermine un attributaire-type détenteur d'un
         * document                           
         *                                                          
         *             Valeurs :                                    
         *  '01'       Contrat                                      
         *  '02'       Personne                                     
         *  '05'       Relation économique                          
         *  '06'       Demande de financement                       
         *  '07'       Client Bancaire
         */
        codeTypeAttributaireDocument: string;
        /**
         * Libellé de désignation du type de document. Il sera utilisé lors de la contractualisation
         */
        libelleDocContractualisation: string;
        /**
         * code de l'application qui permet la génération du document
         */
        codeApplicationTechniqueEdition: string;
        /**
         * code de la maquette. Elle est à associer au code application (outil) qui permet la génération du document
         */
        codeMaquette: string;
        /**
         * indique si le document fait partie du Référentiel des documents d'entreprise (DOCENTRP)
         */
        indicDocumentEntreprise: boolean;
        /**
         * libellé de description du document dans le Référentiel des documents entreprise (DOCENTRP)
         */
        libelleDocumentEntreprise: string;
        /**
         * libellé externe associé au document entreprise (DOCENTRP)
         */
        libelleExterneDocEntreprise: string;
        /**
         * identifiant dans la GED du document d'entreprise.
         */
        identifiantDocumentGED: string;
        /**
         * typologie des documents telle qu'elle est référencée dans l'ICG. 
         * Un document a un type de document pour l'ICG, lors de la signature électronique
         */
        codeTypeDocumentICG: string;
        /**
         * Indique si les documents rattachés à une classe de 
         * document pourront être utilisés dans le processus  
         * de signature électronique
         */
        indicClasseEligibleSignature: boolean;
        /**
         * Indique si le document est en cours de partage dans    
         * ICG (Interface de Confiance Groupe).                   
         * "true" lorsque le doc est partagé,       
         * 'false" dès que la suppression de partage est ok.
         */
        indicPartageDocumentICG: boolean;
        /**
         * code de comportement du document pour l'acte de gestion, lors de la contractualisation  électronique via l'ICG
         *                                                             
         * Valeurs :                                        
         *   '00'       Document à signer                                
         *   '01'       A présenter au client                            
         *   '02'       Réservé Caisse
         */
        codeActionSignatureDocument: string;
        /**
         * code indiquant le type de fichier associé au type de document. Permettra de savoir sous quelle forme l'application doit fournir le ficher (XML, PDF, ...)
         */
        codeTypeFichier: string;
        /**
         * codeModeUsage
         */
        codeModeUsage: number;
        /**
         * Regroupement d'actes de gestion de niveau
         * processus/opération dans la gestion des pièces justificatives
         */
        codeFamilleActe: string;
        /**
         * Détermine un objet (produit/service ou prestation)
         * traité par un acte de gestion dans la gestion des
         * dossiers de numérisation
         */
        codeObjetActe: string;
        /**
         * identifiant de l'attributaire. Correspond à un identifiant métier du type 
         *  d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond à la référence du contrat
         */
        identifiantAttributaire: string;
        /**
         * libellé d'intitulé de l'attributaire. Par exemple, pour un contrat, correspond à l'intitulé du contrat. Pour une personne, correspond à l'intitulé de la personne
         */
        intituleAttributaire: string;
        /**
         * libellé décrivant le document.
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
         * Nombre mini exemplaires doc/ édition
         */
        nbMiniExemplairesDocEdition: number;
        /**
         * Nombre maxi exemplaires doc/ édition
         */
        nbMaxiExemplairesDocEdition: number;
        /**
         * Nombre exemplaires par défaut / édition
         */
        nbExemplairesParDefautEdition: number;
        /**
         * Indicateur modif édition nombre exemplaires.
         */
        indicModifNbExemplaire: boolean;
        /**
         * Ordre priorité utilisation
         */
        ordrePrioriteUtilisation: number;
        /**
         * libellé section regroupement document
         */
        libelleSectionRegDoc: string;
        /**
         * (valeur par défaut = true) et il sert à indiquer à l’appelant qui récupère la liste des documents à produire s’il a le droit de modifier cet objet ou non.
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
         * prénom du signataire d'acte
         */
        prenomSignataire: string;
        /**
         * Identifiant justificatif identité
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
         * (n'est pas alimenté en entrée)
         */
        codeTypeSignataire: string;
        /**
         * code rôle signataire
         */
        codeRoleSignataire: string;
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
        /**
         * La civilité du signataire
         */
         civiliteSignataire: string;
        /*
         Identifiant permettant de définir l'usage qu'a cette personne le DEI d'un PRO
         */
        numUsagerBAD?: string;
		/**
		* Famille de mail souhaitée, quand elle n'est pas renseignée nous prenons celle du panier.
		*/
		emailFamille?: number;
		/**
		* Numéro de personne externe liée
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
        /**
         * Type Professionnel : EI : Entrepreneur individuel, PM : Personne morale
         */
        typeProfessionnel: string;
		/**
		* Motif Non Eligib venant du Producteur
		*/
		libelleMotifNonEligibProducteur: string;
        /**
         * Renseigné à true si c'est déployé SEMD: Signature électronique mutli dossiers
         */
        isDeployeSEMD?: boolean;
        /**
         * Renseigné à true si c'est déployé MySign
         */
        isDeployeMySign?: boolean;
      }
    
      export interface IMateriel {
        /**
         * Type de périphérique:
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
         * le modèle du matériel
         */
        modele: string;
        /**
         * Code modèle du matériel
         */
        codeModele: string;
        /**
        * Identifiant matériel
        */
        identifiant?: string;
        /**
         * Rang
         */
        rang?: string;
      }
    
      export interface ITitulaireActe {
        /**
         * numéro personne
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
         * prénom du signataire
         */
        prenom?: string;
        /**
         * civilité du signataire
         */
        civilite?: string;
        
      }
    
      export interface ISignataireDocument {
        optionsSignataire: IOptionSignataire;
        /**
         * type au sens numéro de signataire du dossier.
         *         on affecte un type (1, 2,...) à un signataire (personne)
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
          * Contrôle complétude DRC : Valeur par défaut est true.
          */
        controleCompletudeDRC?: boolean;
        /**
         * code Famille Gestion Locale Contrat
         * Exemple : "OFFBAD" pour l'offre ordonance démat
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
			/**
		codeSensCommunication
		*/
	codeSensCommunication?: string;
		
      }
    
      export interface IOperationFinanciere {
        /**
         * numéro de personne: NODAP
         */
        numeroPersonne: string;
        /**
         * libelle du client opération
         */
        libelleClientOperation: string;
        /**
         * libelle du compte opération
         */
        libelleCompteOperation: string;
        /**
         * Date d'opération
         * Type date au format yyyy-MM-dd
         */
        dateOperation: string;
        /**
         * montant d'opération
         */
        montantOperation: number;
        /**
         * Mode de versement d'une opération financière
         */
        modeVersementOpeFinanciere: string;
        /**
         * nature de l'opération
         */
        natureOperation: string;
      }
    
      export interface IInfosContractualisation {
        /**
         * Numéro entité titulaire
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
         * Libellé message erreur
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

        isEligibleVisaCollaborateur ?: boolean;
        /**
         * Renseigné à true si c'est déployé SEMD: Signature électronique mutli dossiers
         */
        isDeployeSEMD?: boolean;
        /**
         * Renseigné à true si c'est déployé MySign
         */
        isDeployeMySign?: boolean;
        /**
         * Renseigné à true si c'est déployé Bulle de confiance
         */
        isDeployeBulleConfiance?: boolean;
      }
    
      export interface IMotifNonEligibiliteSAGSED {
        /**
         * code non éligibilité
         */
        codeNonEligibilite: string;
        /**
         * libellé non éligibilité
         */
        libelleNonEligibilite: string;
      }
    
      export interface IPieceIdentiteManquante {
        /**
         * nom du signataire
         */
        nomSignataire: string;
        /**
         * prénom du signataire
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
