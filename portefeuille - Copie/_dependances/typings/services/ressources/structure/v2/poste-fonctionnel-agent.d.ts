declare module myway.ressources.structure.posteFonctionnelAgent {

    export interface IPosteFonctionnelAgent {
        listePosteFonctionnel: IInformationPosteFonctionnel[];
    }

    export interface IInformationPosteFonctionnel {
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque établissement.
         *
         * Exemples de valeurs possibles :
         * '072' - CHARGE DE CLIENTELE DE NIVEAU 2
         * '081' - AGENT COMMERCIAL
         * '082' - RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;

        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;

        /**
         * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant,
         * suppléant ou au titre d'une affectation temporaire.
         *
         * Valeurs possibles :
         * 'T' - Titulaire
         * 'R' - Remplaçant
         * 'S' - Suppléant
         * 'A' - Affectation temporaire
         */
        codeQualiteAgent: string;

        /**
         * Identifiant interne du poste fonctionnel
         */
        identifiantPosteFonctionnel: number;

        /**
         * Désignation longue de l'agent
         * Elle est utilisée pour la constitution de la ligne 1
         * de l'adresse.
         * Elle est constituée en concaténant la civilité, le nom d'usage et le prénom de l'agent.
         */
        designationAgent: string;

        /**
         * Référence externe du poste fonctionnel
         */
        referencePosteFonctionnel: number;

        /**
         * Code civilité de l'agent
         *
         * Valeurs possibles :
         * '1' - MME
         * '2' - MLLE
         * '3' - M
         */
        civiliteAgent: string;

        /**
         * Nom de filiation de la personne physique, correspond :
         * - soit au nom du père
         * - soit au nom de la mère
         * - soit aux 2 noms accolés (ordre quelconque, dans la limite d'un nom de famille par parent)
         * C'est le seul nom mentionné sur les actes d'état civil (acte de naissance, de mariage, livret de famille....).
         * Figure sur toute pièce officielle d'identité.
         * Appelé auparavant nom patronymique.
         */
        nomFamilleAgent: string;

        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         * - soit au nom de famille de l'époux(se) (conjoint)
         * - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         * C'est une information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille.
         * Appelé auparavant nom marital.
         */
        nomUsageAgent: string;

        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        prenomAgent: string;

        /**
         * Date de début de validité du poste fonctionnel
         */
        dateDebutValiditePF: string;

        /**
         * Date de fin de validité du poste fonctionnel
         */
        dateFinValiditePF: string;

        /**
         * Identifie le site de localisation d'un poste fonctionnel.
         * Numéro chronologique attribué par le système.
         * Référence unique dans MYSYS (identifiant interne).
         */
        identSitePosteFonctionnel: number;

        /**
         * Ligne 2 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne2AdresseSite: string;

        /**
         * Ligne 3 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne3AdresseSite: string;

        /**
         * Ligne 4 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne4AdresseSite: string;

        /**
         * Ligne 5 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne5AdresseSite: string;

        /**
         * Ligne 6 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne6AdresseSite: string;

        /**
         * Numéro de téléphone de l'agent.
         */
        telephonePosteFonctionnel: string;

        /**
         * Adresse E-Mail de l'agent.
         */
        emailPosteFonctionnel: string;
        /**
         * Identifie le pays du site de localisation du poste fonctionnel, selon la norme INSEE.
         *
         * Exemples de valeurs possibles :
         * 99000 - France
         * 99132 - Grande Bretagne
         * 99109 - Allemagne
         * 99134 - Espagne
         * ...
         */
        codePaysSite: string;

        /**
         * Canal d'appartenance du poste fonctionnel connecté.
         *
         * Valeurs possibles :
         * 'X' - Si le groupe de fonction du poste fonctionnel connecté est "telemarketing" ou "CRC"
         * 'A' - Si le groupe de fonction du poste fonctionnel connecté n'est pas "telemarketing" et "CRC"
         */

        codeCanalAppartenance: string;

        /**
         * undefined
         */
        informationRattachement: IRattachementPosteFonctionnel;

        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ...
         * Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         */

        codeEtablissement: string;

        /**
         * Numéro d'identification d'un agent au sein d'un établissement bancaires ou financiers de la plateforme MYSYS.
         * Correspond à un individu ou à un acteur générique.
         * Numéro chrono attribué par le système.
         * Référence unique dans MYSYS.
         */
        codeAgent: number;
    }
   
    export interface IRattachementPosteFonctionnel {

        /**
         * Code indiquant si l'EDS de rattachement du poste fonctionnel est le dernier élément de la hiérarchie.
         *
         * Valeurs possibles :
         * '1' - Oui, c'est le dernier
         * '0' - Non
         */

        codeIndicateurFinStructure: string;

        /**
         * Identifiant interne du responsable de l'EDS de rattachement du poste fonctionnel
         */
        identifiantResponsableEDS: number;

        /**
         * Identifiant interne de l'EDS de rattachement du poste fonctionnel
         */
        identifiantEDSRattachement: number;

        /**
         * Libellé de l'EDS de rattachement du poste fonctionnel
         */
        libelleEDSRattachement: string;

        /**
         * Type de l'EDS de rattachement du poste fonctionnel.
         *
         * Valeurs possibles :
         * '001' - Poste fonctionnel
         * '002' - Service
         * '003' - Agence
         * '004' - Unité commerciale
         * '005' - Secteur commercial
         * '006' - Groupe commercial
         * '007' - Direction
         * '008' - Siège
         * '009' - Entité administrative
         * '010' - GAB
         */
        typeEDSRattachement: string;

        /**
         * Libellé du type de l'EDS de rattachement du poste fonctionnel
         */
        libelleTypeEDSRattachement: string;

        /**
         * Date de fin de validité de l'EDS de rattachement du poste fonctionnel
         */
        dateFinValiditeEDSRattachement: string;

        /**
         * Référence externe de l'EDS de rattachement du poste fonctionnel
         */
        referenceEDSRattachement: number;
    }

}
