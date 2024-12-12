declare module Portefeuille.Modeles.Rest.StructureV2.edsniveauinferieur {
    export interface IEdsniveauinferieurQuery {
        /**
         * Identifiant interne de l'EDS de rattachement de l'EDS identifié
         */
        codeEtablissement: string;
        /**
         * Référence externe de l'EDS de rattachement de l'EDS identifié
         */
        identifiantInterneEDS: number;
    }

    export interface IInfoRattachementEDS {
        /**
         * Identifiant interne de l'EDS de rattachement de l'EDS identifié
         */
        identifiantEDSRattachement: number;
        /**
         * Référence externe de l'EDS de rattachement de l'EDS identifié
         */
        referenceEDSRattachement: number;
        /**
         * Libellé de l'EDS de rattachement de l'EDS identifié
         */
        libelleEDSRattachement: string;
        /**
         * Type de l'EDS de rattachement de l'EDS identifié
         */
        typeEDSRattachement: string;
        /**
         * Libellé long type de l'EDS de rattachement
         */
        libelleTypeEDSRattachement: string;
    }

    export interface IInfoEDS {
        /**
         * Identifiant interne de l'élément de structure
         */
        identifiantInterneEDS: number;
        /**
         * Référence externe de l'élément de structure
         */
        referenceExterneEDS: number;
        /**
         * Libellé de l'élément de structure
         */
        libelleEDS: string;
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Libellé long type de l'EDS
         */
        libelleTypeEDS: string;
    }

    export interface IInfoPosteFonctionnel {
        /**
         * Identifiant interne du poste fonctionnel
         */
        identifiantPosteFonctionnel: number;
        /**
         * Référence externe du poste fonctionnel
         */
        referencePosteFonctionnel: number;
        /**
         * Libellé du poste fonctionnel
         */
        libellePosteFonctionnel: string;
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Libellé long type de l'EDS
         */
        libelleTypeEDS: string;
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Désignation longue de l'agent Elle est utilisée pour la constitution de la ligne 1 de l'adresse. 
         * Elle est constituée en concaténant la civilité, le nom d'usage et le prénom de l'agent.
         */
        designationAgent: string;
        /**
         * Type de fonction de l'agent
         */
        typeFonction: string;
        /**
         * Libellé de fonction de l'agent
         */
        libelleFonction: string;
        /**
         * Code civilité de l'agent
         */
        civiliteAgent: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         * 
         * soit au nom du père
         * soit au nom de la mère
         * soit aux 2 noms accolés (ordre quelconque, dans la limite d'un nom de famille par parent) 
         * C'est le seul nom mentionné sur les actes d'état civil (acte de naissance, de mariage, livret de famille....). 
         * Figure sur toute pièce officielle d'identité. Appelé auparavant nom patronymique.
         */
        nomFamilleAgent: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        prenomAgent: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         * 
         * soit au nom de famille de l'époux(se) (conjoint)
         * soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque Dénomination 
         * utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique. 
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs. 
         * C'est une information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille. 
         * Appelé auparavant nom marital.
         */
        nomUsageAgent: string;
    }

    export interface IEdsNiveauInferieur {
        infoRattachementEDS: IInfoRattachementEDS;
        infoEDS: Array<IInfoEDS>;
        infoPosteFonctionnel: Array<IInfoPosteFonctionnel>;
    }

};