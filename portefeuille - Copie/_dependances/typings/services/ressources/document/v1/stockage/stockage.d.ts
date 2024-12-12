declare module Myway.Ressource.DocumentStockage {

  export interface IGetDocumentQueryParams {
    /**
     * Composant applicatif
     */
    idntCmpstApplf: string;

    /**
     * Code établissement
     */
    codeEtablissement: string;

    /**
     * Identifiant du document
     */
    idntDocument: string;

    /**
     * Permet d'indiquer si on souhaite récupérer le binaire du document
     */
    indicRecupDoc?: boolean;

    /**
     * Permet d'indiquer si on souhaite récupérer le détail du document
     */
    indicRecupDetl?: boolean;
  }

  export interface IPostValiderDocumentInput {

    /**
     * Obligatoire
     * 5 caractères numériques
     */
    codeEtablissement: string;

    /**
     * Obligatoire
     * Identifiant du document
     */
    idntDocument: string;

    /**
     * Obligatoire
     * Nature du document doit être autorisé par le composant applicatif
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
     * Détermine si le document doit allez dans l'espace transitoire lors de sa validation
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
     * Code établissement
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
     * Document électronique au format base 64
     */
    docElect: string;

    /**
     * Obligatoire
     * Date de délivrance de la pièce
     */
    dateDelivrance: string;

    /**
     * Données lues par la RAD/LAD
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
     * Date de numérisation du document
     * Par défaut, date du jour
     */
    dateNumerisation: string;

    /**
     * Date de collecte du document
     * Par défaut, date du jour
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
     * définit le type de signature
     */
    typeSignature: string;

    /**
     * "D" pour Draft
     * "V" pour Validé
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
     * date de création du document en base Draft
     */
    dateCreation: string;

    /**
     * auteur à l'origine de la création du document en base Draft
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
     * code de l'agence à l'origine de l'acquisition
     */
    agenceCreation: string;

    /**
     * Document prioritaire à l'injection
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
     * Modèle de scanner utilisé pour effectuer la numérisation du document
     */
    modeleScanner: string;

    /**
     * Nature du document détecté par la RAD
     */
    codeTypeNatrDocRAD: string;

    /**
     * Méthode de saisie de la nature
     * 1 : Saisie manuelle sur un document non soumis à la RAD
     * 2 : Automatique issue de la RAD
     * 3 : Forcé par rapport à une nature issue de la RAD 
     * 4 : Saisie manuelle sur un document non reconnu par la RAD
     */
    methodeSaisieNature: string;

    /**
     * Dernier auteur ayant apporté la valeur de la nature (au moment de la création ou de la validation)
     */
    auteurSaisieNature: string;
  }

  export interface IPutDocumentInput {

    /**
     * Obligatoire
     * 5 caractères numériques
     */
    codeEtablissement: string;

    /**
     * Obligatoire
     * Composant applicatif au sein du Catalogue GED
     */
    idntCmpstApplf: string;

    /**
     * Obligatoire
     * Nature du document doit être autorisé par le composant applicatif
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
     * Document électronique au format base 64
     */
    docElect: string;

    /**
     * Obligatoire
     * Date de délivrance de la pièce
     */
    dateDelivrance: string;

    /**
     * Données lues par la RAD/LAD
     */
    donneesRadLad: string;

    /**
     * Durée de rétention en mode Draft avant la purge du document
     * Doit être strictement supérieur à 1
     * Par défaut, la valeur est de 1 jour
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
     * Date de numérisation du document
     * Par défaut, date du jour
     */
    dateNumerisation: string;

    /**
     * Date de collecte du document
     * Par défaut, date du jour
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
     * origine de l’acquisition du document
     */
    origineAcquisition: string;

    /**
     * type de signature associé au document
     */
    typeSignature: string;

    /**
     * "D" pour Draft
     * "V" pour Validé
     */
    statutDocument: string;

    /**
     * Détermine si le document doit allez dans l'espace transitoire lors de sa validation
     */
    isTransitoire: boolean;

    /**
     * Facultatif : modèle de scanner utilisé pour la numérisation du document
     */
    modeleScanner: string;
  }

}
