declare module Myway.Ressource.DocumentStockage {

  export interface IGetDocumentQueryParams {
    /**
     * Composant applicatif
     */
    idntCmpstApplf: string;

    /**
     * Code �tablissement
     */
    codeEtablissement: string;

    /**
     * Identifiant du document
     */
    idntDocument: string;

    /**
     * Permet d'indiquer si on souhaite r�cup�rer le binaire du document
     */
    indicRecupDoc?: boolean;

    /**
     * Permet d'indiquer si on souhaite r�cup�rer le d�tail du document
     */
    indicRecupDetl?: boolean;
  }

  export interface IPostValiderDocumentInput {

    /**
     * Obligatoire
     * 5 caract�res num�riques
     */
    codeEtablissement: string;

    /**
     * Obligatoire
     * Identifiant du document
     */
    idntDocument: string;

    /**
     * Obligatoire
     * Nature du document doit �tre autoris� par le composant applicatif
     */
    codeTypeNatrDoc: string;

    /**
     * Type attributaire du porteur du document
     */
    typeAttributaire: string;

    /**
     * Identifiant attributaire primaire du porteur du document
     */
    idntAttributaire1: string;

    /**
     * identifiant porteur secondaire du porteur du document
     */
    idntAttributaire2: string;

    /**
     * D�termine si le document doit allez dans l'espace transitoire lors de sa validation
     */
    isTransitoire: boolean;

    /**
     * Code agence de l'utilisateur
     * Obligatoire
     */
    agenceUtilisateur: string;

    /**
     * Matricule de l'utilisateur
     * Obligatoire
     */
    idAgntTech: string;
  }

  export interface IGetDocumentOutput {

    /**
     * Code �tablissement
     */
    codeEtablissement: string;

    /**
     * Identifiant composant applicatif
     */
    idntCmpstApplf: string;

    /**
     * Nature du document
     */
    codeTypeNatrDoc: string;

    /**
     * nom du fichier
     */
    nomFichier: string;

    /**
     * Document �lectronique au format base 64
     */
    docElect: string;

    /**
     * Obligatoire
     * Date de d�livrance de la pi�ce
     */
    dateDelivrance: string;

    /**
     * Donn�es lues par la RAD/LAD
     */
    donneesRadLad: string;

    /**
     * Type attributaire du porteur du document
     */
    typeAttributaire: string;

    /**
     * Identifiant attributaire primaire du porteur du document
     */
    idntAttributaire1: string;

    /**
     * identifiant porteur secondaire du porteur du document
     */
    idntAttributaire2: string;

    /**
     * Description du document
     */
    descriptionDocument: string;

    /**
     * Date de num�risation du document
     * Par d�faut, date du jour
     */
    dateNumerisation: string;

    /**
     * Date de collecte du document
     * Par d�faut, date du jour
     */
    dateCollecte: string;

    /**
     * Date de peremption
     */
    datePeremption: string;

    /**
     * Mode d'acquisition
     */
    modeAcquisition: string;

    /**
     * origine d'acquisition
     */
    origineAcquisition: string;

    /**
     * d�finit le type de signature
     */
    typeSignature: string;

    /**
     * "D" pour Draft
     * "V" pour Valid�
     */
    statutDocument: string;

    /**
     * Identifiant document
     */
    idntDocument: string;

    /**
     * Date de purge
     */
    datePurge: string;

    /**
     * date de cr�ation du document en base Draft
     */
    dateCreation: string;

    /**
     * auteur � l'origine de la cr�ation du document en base Draft
     */
    auteurCreation: string;

    /**
     * date de modification du document en base Draft
     */
    dateModification: string;

    /**
     * auteur de la modification du document en base Draft
     */
    auteurModification: string;

    /**
     * Permet d'indiquer si le document doit allez dans l'espace transitoire lors de la validation
     */
    isTransitoire: boolean;

    /**
     * code de l'agence � l'origine de l'acquisition
     */
    agenceCreation: string;

    /**
     * Document prioritaire � l'injection
     */
    isDocPrioritaire: boolean;

    /**
     * Identifiant du lot d'injection
     */
    idntLotInjection: string;

    /**
     * Date de validation du document
     */
    dateValidation: string;

    /**
     * code de l'agence auteur de la modification
     */
    agenceModification: string;

    /**
     * Auteur de la validation
     */
    auteurValidation: string;

    /**
     * code de l'agence auteur de la validation
     */
    agenceValidation: string;

    /**
     * Mod�le de scanner utilis� pour effectuer la num�risation du document
     */
    modeleScanner: string;

    /**
     * Nature du document d�tect� par la RAD
     */
    codeTypeNatrDocRAD: string;

    /**
     * M�thode de saisie de la nature
     * 1 : Saisie manuelle sur un document non soumis � la RAD
     * 2 : Automatique issue de la RAD
     * 3 : Forc� par rapport � une nature issue de la RAD 
     * 4 : Saisie manuelle sur un document non reconnu par la RAD
     */
    methodeSaisieNature: string;

    /**
     * Dernier auteur ayant apport� la valeur de la nature (au moment de la cr�ation ou de la validation)
     */
    auteurSaisieNature: string;
  }

  export interface IPutDocumentInput {

    /**
     * Obligatoire
     * 5 caract�res num�riques
     */
    codeEtablissement: string;

    /**
     * Obligatoire
     * Composant applicatif au sein du Catalogue GED
     */
    idntCmpstApplf: string;

    /**
     * Obligatoire
     * Nature du document doit �tre autoris� par le composant applicatif
     */
    codeTypeNatrDoc: string;

    /**
     * Obligatoire
     */
    idAgntTech: string;

    /**
     * Obligatoire
     */
    agenceUtilisateur: string;

    /**
     * Obligatoire
     * Nom du fichier avec l'extension
     */
    nomFichier: string;

    /**
     * Obligatoire
     * Document �lectronique au format base 64
     */
    docElect: string;

    /**
     * Obligatoire
     * Date de d�livrance de la pi�ce
     */
    dateDelivrance: string;

    /**
     * Donn�es lues par la RAD/LAD
     */
    donneesRadLad: string;

    /**
     * Dur�e de r�tention en mode Draft avant la purge du document
     * Doit �tre strictement sup�rieur � 1
     * Par d�faut, la valeur est de 1 jour
     */
    dureeAvantPurge: number;

    /**
     * Type attributaire du porteur du document
     */
    typeAttributaire: string;

    /**
     * Identifiant attributaire primaire du porteur du document
     */
    idntAttributaire1: string;

    /**
     * identifiant porteur secondaire du porteur du document
     */
    idntAttributaire2: string;

    /**
     * Description du document
     */
    descriptionDocument: string;

    /**
     * Date de num�risation du document
     * Par d�faut, date du jour
     */
    dateNumerisation: string;

    /**
     * Date de collecte du document
     * Par d�faut, date du jour
     */
    dateCollecte: string;

    /**
     * date de peremption du document
     */
    datePeremption: string;

    /**
     * mode d'acquisition du document
     */
    modeAcquisition: string;

    /**
     * origine de l�acquisition du document
     */
    origineAcquisition: string;

    /**
     * type de signature associ� au document
     */
    typeSignature: string;

    /**
     * "D" pour Draft
     * "V" pour Valid�
     */
    statutDocument: string;

    /**
     * D�termine si le document doit allez dans l'espace transitoire lors de sa validation
     */
    isTransitoire: boolean;

    /**
     * Facultatif : mod�le de scanner utilis� pour la num�risation du document
     */
    modeleScanner: string;
  }

}
