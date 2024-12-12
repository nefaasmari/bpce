declare module Portefeuille.Modeles.Rest.PortefeuilleV1.recherche {
    export interface IPortefeuilleRecherche {
        /**
         * Code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France
         */
        CodeEtablissement: string;
        /**
         * Numéro d'identification interne de l'élément de structure pouvant être  
         *    - de type agence (type3) 
         *    - de type poste fonctionnel (type1)
         */
        IdentifiantElementStructure: number;
        DonneeSignifiante: Array<IDonneeSignifiante>;
    }

    export interface IDonneeSignifiante {
        /**
         * Numéro d'identification d'un portefeuille de suivi clientèle
         */
        identifiantPortefeuille: number;
        /**
         * indique le type de portefeuille de suivi clientèle, à pour valeur :
         * •H : hors portefeuille
         * •R : portefeuille réservoir
         * •C : portefeuille collectif
         * •N: portefeuille nominatif
         */
        codeTypePortefeuille: string;
        /**
         * indique si le portefeuille est affecté :
         *  - O : oui
         *  - N : non
         */
        indicateurAffectation: string;
        /**
         * Numéro d'identification interne de l'élément de structure de type agence (type3) propriétaire du portefeuille de suivi clientèle.
         */
        identifiantElementStructurePortefeuille: number;
        /**
         * Libellé de l'élément de structure propriétaire du portefeuille de suivi de clientèle
         */
        libelleElementStructurePortefeuille: string;
        /**
         * numéro d'identification interne de l'élément de structure assurant le suivi du portefeuille clientèle, correspond à :
         *  - un poste fonctionnel pour un portefeuille nominatif affecté
         */
        identifiantElementStructureSuiviPortefeuille: number;
        /**
         * Libellé de l'élément de structure assurant le suivi du portefeuille clientèle
         */
        libelleElementStructureSuiviPortefeuille: string;
        /**
         * libellé du portefeuille de suivi clientèle
         */
        libellePortefeuille: string;
        /**
         * code du SuiviPar Complémentaire 'SPC'
         */
        codeSuiviComplementaire?: string;
        /**
         * libellé du SuiviPar Complémentaire 'SPC'
         */
        libelleSuiviComplementaire?: string;
    }

    export interface IPortefeuilleInfo {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Numéro portefeuille
         */
        identifiantPortefeuille: number;
        /**
         * Libellé portefeuille
         */
        libellePortefeuille: string;
        /**
         * Type portefeuille
         */
        codeTypePortefeuille: string;
        /**
         * Code origine mise en portefeuille
         */
        codeMotifPortefeuille: string;
        /**
         * Indicateur d'affectation
         */
        indicateurAffectation: string;
        /**
         * Type de transfert de portefeuille
         */
        typeTransfertPortefeuille: string;
        /**
         * Nombre relations en PTF
         */
        nombreRelationsEnPtf: number;
        /**
         * Date modification enregistrement
         * Type date au format yyyy-MM-dd
         */
        dateModification: string;
        /**
         * Référence externe agent
         */
        codeAgent: number;
        /**
         * Libellé calculé court EDS
         */
        libelleCalculeCourtEds: string;
        /**
         * Libellé fonction poste fonctionnel
         */
        libelleFonctionPosteFonctionnel: string;
        /**
         * Libellé Elément Structure
         */
        libelleElementStructure: string;
        /**
         * Idt EDS propriétaire portefeuille
         */
        identifiantEdsPortefeuille: number;
        /**
         * Type élément structure
         */
        typeElementStructure: string;
        /**
         * Libellé calculé court EDS
         */
        libelleEdsPortefeuille: string;
        /**
         * EDS d'affectation du portefeuille
         */
        identifiantEdsSuiviPortefeuille: number;
        /**
         * Référence externe EDS
         */
        edsDomiciliation: number;
        /**
         * Libellé calculé court EDS
         */
        libelleCourtEDS: string;
        /**
         * Type élément structure
         */
        typeEDS: string;
        /**
         * Libellé fonction poste fonctionnel
         */
        libelleFonction: string;
        /**
         * Libellé Elément Structure
         */
        libelleEDS: string;
        /**
         * Numéro de portefeuille cible
         */
        identifiantPtfTransfert: number;
        /**
         * Libellé du portefeuille cible
         */
        libellePortefeuilleCible: string;
        /**
         * Indicateur d'affectation cible
         */
        indicateurAffectationCible: string;
        /**
         * Type de portefeuille cible
         */
        typePortefeuilleCible: string;
        /**
         * Origine de mise en PTF cible
         */
        codeTypeMotifTransfert: string;
        /**
         * EDS d'affectation cible du portefeui
         */
        identifiantEdsPtfTransfert: number;
        /**
         * Référence externe EDS
         */
        referenceExterneEDSNiveau2: number;
        /**
         * Libellé calculé court EDS
         */
        libelleCalculeCourtEds1: string;
        /**
         * Type élément structure
         */
        typeElementStructure1: string;
        /**
         * Libellé fonction poste fonctionnel
         */
        libelleFonctionPf1: string;
        /**
         * Libellé Elément Structure
         */
        libelleEDSDomEntiteTitulaire: string;
        /**
         * EDS propriétaire du port cible
         */
        edsProprietairePortCible: number;
        /**
         * Type élément structure
         */
        typeElementStructure2: string;
        /**
         * Libellé calculé court EDS
         */
        libelleCalculeCourtEds2: string;
        /**
         * Code professionnel relation
         */
        codeProfessionnelRelation: string;
        /**
         * Groupe de fonctions
         */
        groupeFonctions: string;
    }

    export interface IListePortefeuille {
        /**
         * le code banque
         */
        codeEtablissement: string;
        /**
         * l'identifiant eds
         */
        identifiantElementStructure: number;
        donneePortefeuille: Array<IPortefeuilleInfo>;
    }
};