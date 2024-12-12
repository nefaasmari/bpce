declare module Portefeuille.Modeles.Rest.AgentV2.gestionAffectation {
    export interface IGestionAffectation {
        /**
         * Code Etablissement de l’agent connecté.
         */
        codeEtablissement: string;
        /**
         * Code de l'agent connecté.
         */
        codeAgent: string;
        /**
         * Identifiant Elément de Structure de l’agent connecté.
         */
        identifiantEDS: number;
        /**
         * Code de l'agent à affecter.
         */
        codeAgentAffectation: number;
        listeGestionAffectationAgent: Array<IGestionAffectationAgent>;
        listeGestionAffectationAgentAvM: Array<IGestionAffectationAgentAvM>;
    }

    export interface IGestionAffectationAgent {
        /**
         * Identifiant interne du Poste Fonctionnel de l'agent affecté.
         */
        identifiantEDSAffectation: number;
        /**
         * Identifiant interne de l'EDS de rattachement temporaire de l'agent
         */
        identifiantEDSRattachement: number;
        /**
         * Libellé de l'EDS de rattachement temporaire de l'agent
         */
        libelleEDSRattachement: string;
        /**
         * Il détermine le type d'affectation d'un agent à un Elément de Structure. Cette typologie spécifique à chaque Etablissement.
         * Valeurs :
         * - 'AG' : AFFECTATION GEOGRAPHIQUE
         * - 'MA' : MULTI AFFECTATION
         * - 'MN' : MANAGEMENT
         * - 'R1' : RENFORT COMMERCIAL
         * - 'R2' : REMPLACEMENT FORMATION
         * - 'R3' : REMPLACEMENT CONGES
         * - 'R4' : REMPLACEMENT MALADIE
         */
        typeAffectation: string;
        /**
         * Il détermine la fonction (métier) associée au poste fonctionnel. Cette typologie est spécifique à chaque Etablissement.   
         * Exemples :
         * - 072 : CHARGE DE CLIENTELE DE NIVEAU 2
         * - 081 : AGENT COMMERCIAL
         * - 082 : RESPONSABLE DEPARTEMENT ORGANISATION
         * etc ...
         */
        typeFonctionAgentAffectation: string;
        /**
         * Permet d'indiquer si l'agent affecté occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         * Valeurs :
         * - 'T' : Titulaire
         * - 'R' : Remplaçant
         * - 'S' : Suppléant
         * - 'A' : Affectation temporaire
         */
        codeQualiteAgentAffectation: string;
        /**
         * Libellé de désignation de la fonction (métier) associée à un poste fonctionnel.
         * ATTENTION : il ne doit pas y avoir dans ce libellé de caractères spéciaux (é,à,ç,ô, etc...).
         */
        libFonctionAgentAffectation: string;
        /**
         * Il détermine le rang du jour dans la semaine.
         * Valeurs :
         * - ' '
         * - '1' : Lundi
         * - '2' : Mardi
         * - '3' : Mercredi
         * - '4' : Jeudi
         * - '5' : Vendredi
         * - '6' : Samedi
         * - '7' : Dimanche
         */
        numeroJourSemaine: string;
        /**
         * Il détermine la plage horaire d'une journée pour l'agent affecté à un poste fonctionnel donné. Ce type est associé au début de la journée ou période. 
         * Valeurs :
         * - 'J' : Journée
         * - 'M' : Matin
         * - 'A' : Après-midi
         */
        typeHoraireDebutPeriode: string;
        /**
         * Il détermine la plage horaire d'une journée pour l'agent affecté à un poste fonctionnel donné. Ce type est associé à la fin de la journée ou période. 
         * Valeurs :
         * - 'J' : Journée
         * - 'M' : Matin
         * - 'A' : Après-midi
         */
        typeHoraireFinPeriode: string;
        /**
         * Date de début d'affectation de l'agent sur un lieu de travail, un poste fonctionnel ...
         * Date au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateDebutPeriodeAffectation: string;
        /**
         * Date de fin d'affectation de l'agent sur un lieu de travail, un poste fonctionnel ...
         * Date au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateFinPeriodeAffectation: string;
        /**
         * Libellé décrivant le motif de l'affectation de l'agent.
         */
        libelleMotifAffectation: string;
        /**
         * Date de modification de l'affectation au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateModificationAffectation: string;
        /**
         * Code civilité de l'agent affecté.
         * Valeurs :
         * - '1' : MME
         * - '2' : MLLE
         * - '3' : M
         */
        codeCiviliteAgentAffectation: string;
        /**
         * Nom de famille (ou patronymique) de l'agent affecté.
         */
        nomFamilleAgentAffectation: string;
        /**
         * Prénom de l'agent affecté.
         */
        prenomAgentAffectation: string;
        /**
         * Libellé de désignation du type d'affectation de l'agent.
         */
        libelleTypeAffectation: string;
        /**
         * Code Agent à l'origine de la création de l'affectation.
         */
        codeAgentCreation: string;
        /**
         * Code civilité de l'agent à l'origine de la création de l'affectation.
         * Valeurs :
         * - '1' : MME
         * - '2' : MLLE
         * - '3' : M
         */
        codeCiviliteAgentCreation: string;
        /**
         * Nom de famille (ou patronymique) de l'agent à l'origine de la création de l'affectation.
         */
        nomFamilleAgentCreation: string;
        /**
         * Prénom de l'agent à l'origine de la création de l'affectation.
         */
        prenomAgentCreation: string;
        /**
         * Numéro de téléphone associé à une adresse, et concernant un particulier ou un lieu d'activité pour un professionnel.
         * Pour un particulier, il s'agit dans la plupart des cas, du numéro de téléphone du domicile.
         */
        numeroTelephoneAdresse: string;
        /**
         * Date de création de l'affectation au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateCreationAffectation: string;
        /**
         * Numéro de fax du particulier ou du lieu d'activité pour un professionnel.
         * Pour un particulier, il s'agit dans la plupart des cas, du numéro de fax du domicile.
         */
        numeroFax: string;
        /**
         * La ligne 4 permet d'identifier la voie de destination : NUMERO-LIBELLE DE LA VOIE
         * Elle peut comprendre :
         *  - Le numéro dans la voie, type et nom de voie
         *  - Le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit
         *  - Un service X
         *  - Une boîte postale
         *  - Un numéro de CEDEX
         */
        ligne4Adresse: string;
        /**
         * La ligne 6 permet d'identifier la destination : CODE POSTAL et LOCALITE DE DESTINATION ou CODE CEDEX et LIBELLE CEDEX
         * Elle peut comprendre :
         * - Le numéro de code postal et nom de la localité
         * - Le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6Adresse: string;
        /**
         * Heures et minutes correspondant à l'heure d'ouverture de l'EDS le matin.
         */
        heureOuvertureMatinEDS: number;
        /**
         * Heures et minutes correspondant à l'heure d'ouverture de l'EDS l'après-midi. Non renseigné si pas de fermeture le midi.
         */
        heureOuvertureApresMidiEDS: number;
        /**
         * Heures et minutes correspondant à l'heure de fermeture de l'EDS le matin. Non renseigné si pas de fermeture le midi.
         */
        heureFermetureMatinEDS: number;
        /**
         * Heures et minutes correspondant à l'heure de fermeture de l'EDS le soir.
         */
        heureFermetureApresMidiEDS: number;
        /**
         * Dénomination courte du type de l'élément de structure de rattachement.
         */
        libelleCourtTypeEDSRattachement: string;
    }

    export interface IGestionAffectationAgentAvM {
        /**
         * Identifiant interne du Poste Fonctionnel affecté à l'agent.
         */
        identifiantEDSAffectationAvM: number;
        /**
         * Identifiant interne de l'EDS de rattachement du Poste Fonctionnel affecté à l’agent.
         */
        identifiantEDSRattachementAvM: number;
        /**
         * Il détermine le rang du jour dans la semaine.
         * Valeurs :
         * - '0'
         * - '1' : Lundi
         * - '2' : Mardi
         * - '3' : Mercredi
         * - '4' : Jeudi
         * - '5' : Vendredi
         * - '6' : Samedi
         * - '7' : Dimanche
         */
        numeroJourSemaineAvM: string;
        /**
         * Il détermine la plage horaire d'une journée pour l'agent affecté à un poste fonctionnel donné. Ce type est associé au début de la journée ou période. 
         * Valeurs :
         * - 'J' : Journée
         * - 'M' : Matin
         * - 'A' : Après-midi
         */
        typeHoraireDebutPeriodeAvM: string;
        /**
         * Il détermine la plage horaire d'une journée pour l'agent affecté à un poste fonctionnel donné. Ce type est associé à la fin de la journée ou période. 
         * Valeurs :
         * - 'J' : Journée
         * - 'M' : Matin
         * - 'A' : Après-midi
         */
        typeHoraireFinPeriodeAvM: string;
        /**
         * Date de début d'affectation de l'agent sur un lieu de travail, un poste fonctionnel ...
         * Type date au format yyyy-MM-dd
         */
        dateDebutPeriodeAffectationAvM: string;
        /**
         * Date de fin d'affectation de l'agent sur un lieu de travail, un poste fonctionnel ...
         * Type date au format yyyy-MM-dd
         */
        dateFinPeriodeAffectationAvM: string;
        /**
         * Libellé décrivant le motif de l'affectation de l'agent.
         */
        libelleMotifAffectationAvM: string;
        /**
         * Date de modification de l'affectation.
         * Type date au format yyyy-MM-dd
         */
        dateModificationAffectationAvM: string;
        /**
         * Il détermine le type d'affectation d'un agent à un Elément de Structure. Cette typologie spécifique à chaque Etablissement.
         * Valeurs :
         * - 'AG' : AFFECTATION GEOGRAPHIQUE
         * - 'MA' : MULTI AFFECTATION
         * - 'MN' : MANAGEMENT
         * - 'R1' : RENFORT COMMERCIAL
         * - 'R2' : REMPLACEMENT FORMATION
         * - 'R3' : REMPLACEMENT CONGES
         * - 'R4' : REMPLACEMENT MALADIE
         */
        typeAffectationAvM: string;
        /**
         * Date de création de l'affectation au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateCreationAffectationAvM: string;
        /**
         * Heures et minutes correspondant à l'heure d'ouverture de l'EDS le matin.
         */
        heureOuvertureMatinEDSAvM: number;
        /**
         * Heures et minutes correspondant à l'heure d'ouverture de l'EDS l'après-midi. Non renseigné si pas de fermeture le midi.
         */
        heureOuvertureApresMidiEDSAvM: number;
        /**
         * Heures et minutes correspondant à l'heure de fermeture de l'EDS le matin. Non renseigné si pas de fermeture le midi.
         */
        heureFermetureMatinEDSAvM: number;
        /**
         * Heures et minutes correspondant à l'heure de fermeture de l'EDS le soir.
         */
        heureFermetureApresMidiEDSAvM: number;
    }

    /**
     * Interface représentant un objet pour la méthode GET
     */
    export interface IGestionAffectationQuery {
        codeEtablissement: string;
        codeAgentAffectation: number;
        dateDebutPeriodeAffectation: string;
    }
};