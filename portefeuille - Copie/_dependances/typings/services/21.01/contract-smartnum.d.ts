declare module SmartNum {

    export interface IEffectueRadLadOutput {
        /**
         * Code nature issu du traitement de RAD
         */
        nature: string;

        /**
         * Taux de confiance associé à la nature
         */
        tauxConfNature: number;

        /**
         * Taux de confiance général du traitement
         */
        tauxConfGeneral: number;

        /**
         * Nb de champs lus par la LAD
         */
        nbChampLus: number;

        /**
         * Nb de champs associés au modèle issu de la RAD
         */
        nbChampModele: number;

        /** 
         * Liste des données lues
         */
        donneesLues: Array<IDonneesLues>;

        /**
         * Durée de traitement de la LAD
         */
        dureeLad: number;
    }

    export interface IDonneesLues {
        /**
         * Nom du champ lu par la LAD normalisé selon le dictionnaire MyWay
         */
        idChamp: string;

        /**
         * Libellé d’affichage du champ
         */
        libAff: string;

        /**
         * Valeur du champ
         */
        valeur: string;

        /**
         * Type du champ
         */
        type: string;

        /**
         * Taux de confiance associé au champ
         */
        tauxConf: number;
    }

    /**
     * Enumération des modes d'acquisition
     */
    export const enum ModeAcquisitionEnum {
        VALIDATION_FONCTIONNELLE = 0,
        VALIDATION_DELEGUEE = 1,
        SCAN = 2
    }

    /**
     * Structure de base de l'acquisition. 
     * Il faut utiliser les interfaces héritées IAcquisitionEntree et IAcquisitionSortie
     */
    export interface IAcquisition {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;

        /**
         * Identifiant de l'application à l'origine de la demande.
         */
        idntCmpstApplf: string;

        /**
         * Précise si l'interface doit offrir la fonctionnalité de visiblité des données issues de la LAD dans le viewer de document.
         */
        indicAfficheLad: boolean;

        /**
         * Permet d'indiquer si on demande à SmartNum d'effectuer un reclassement automatique dans le cas où l'utilisateur acquiert un document 
         * sur un mauvais bloc document.
         */
        indicReclassementAuto?: boolean;

        /**
         * Libelle général d'acquisition. Il sera utilisé à l'affichage dans la solution d'acquisition de document.
         */
        libAffichAcquisition: string;

        /**
         * Mode d'acquisition demandé à la solution.
         */
        modeAcquisition: ModeAcquisitionEnum;
    }

    export interface IAcquisitionEntree extends IAcquisition {
        /**
         * Liste de regroupements
         */
        regroupements: IRegroupementEntree[];
    }

    export interface IAcquisitionSortie extends IAcquisition {
        /**
         * Liste de regroupements
         */
        regroupements: IRegroupementSortie[];
    }

    export interface IRegroupement {
        /**
         * Identifiant fonctionnel du regroupement.
         */
        idFoncRegr: string;

        /**
         * Libelle du regroupement. Il sera utilisé à l'affichage dans la solution d'acquisition de document.
         */
        libAffichRegroupement: string;
    }

    export interface IRegroupementEntree extends IRegroupement {
        /**
         * Liste de documents
         */
        documents: IDocumentEntree[];
    }

    export interface IRegroupementSortie extends IRegroupement {
        /**
         * Liste de documents
         */
        documents: IDocumentSortie[];
    }

    export interface IDocument {
        /**
         * Durée de conservation du document dans l'archivage Draft avant sa purge. Valeur à exprimer en nombre de jours.
         * Obligatoire en mode acquisition VALIDATION_FONCTIONNELLE
         * Valeur par defaut : 1
         */
        dureeConserv?: number;

        /**
         * Identifiant du document au sein de l’application fonctionnelle.
         */
        idntFoncDocument: string;

        /**
         * Précise si le document doit passer à la Lecture Automatique de Document.
         */
        indicLad: boolean;

        /**
         * Précise si le document doit passer à la Reconnaissance Automatique de Document.
         */
        indicRad: boolean; 

        /**
         * Permet de spécifier si la saisie de la date d'émission est obligatoire pour ce document.
         */
        dateEmissionOblig: boolean;

        /**
         * Définit si le document doit être archivé en GED transitoire ou non.
         * Par defaut le document sera archivés en GED Définitive.
         */
        indicTransitoire?: boolean;

        /**
         * Libelle caractérisant le document Il sera utilisé à l'affichage dans la solution d'acquisition de document.
         */
        libAffichDocument: string;

        /**
         * Porteur du document
         * Obligatoire en mode acquisition VALIDATION_DELEGUEE
         */
        porteur?: IPorteur;

        /**
         * Sujet du document
         */
        sujet?: string;
		
		
    }

    export interface IDocumentEntree extends IDocument {
        /**
         * Liste de code nature du document pouvant être acquis.
         * La valeur peut être unique, multiple ou null. 
         * Si des valerus sont spécifiés seules ces natures pourront être utilisées.
         * Si la liste est vide, la liste sera composée dans natures autorisées pour l'application GED utilisatrice filtrée ou non 
         * selon le code type de porteur du doucment si ce denier est fourni.
         */
        listeCodeNature?: string[];
		
		/**
         * Type de document RAD pour le forçage de type
         */
        typeDocumentRAD?: string;
    }

    export interface IDocumentSortie extends IDocument {
        /**
         * Identifiant technique du document acquis généré par la solution d'acquisition de document. 
         * C'est cet identifiant que permettra d'exploiter le document.
         */
        idntDocument: string;

        /**
         * Code nature du document
         */
        codeTypeNatrDoc: string;

        /**
         * Données RADLAD
         */
        resultatRADLAD: IEffectueRadLadOutput;

        /**
         * Date d'émission
         */
        dateEmission: string;

        /**
         * Date de numérisation
         */
        dateNumerisation: string;
    }

    export interface IPorteur {
        /**
         * Définit le type d'attributaire
         */
        typeAttributaire?: string;

        /**
         * Identifiant primaire de l'attributaire.
         */
        idntAttributaire1?: string;

        /**
         * Identifiant secondaire de l'attributaire. Il n'est renseigné que pour certains types d'attributaire
         */
        idntAttributaire2?: string;
    }

}
