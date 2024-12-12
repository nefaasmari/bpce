declare module Portefeuille.Modeles.Rest.AgentV2.recherche {
    export interface IRechercheAgent {
        listeAgents: Array<IAgent>;
    }

    export interface IAgent {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         * 
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceElementStructure: number;
        /**
         * Désignation décrivant l'élément de structure.   
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.              
         * Sauf si l'EDS est un poste fonctionnel (c'est le cas pour rechercheAgent),  on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationAgent: string;
        /**
         * Cette rubrique décrit la date de début de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeAgent: string;
        /**
         * Cette rubrique décrit la date de fin de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque Etablissement.
         * 
         * Exemples :
         * 072 / CHARGE DE CLIENTELE DE NIVEAU 2
         * 081 / AGENT COMMERCIAL
         * 082 / RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Numéro d'identification de l'élément de structure hiérarchiquement supérieur à un élément donné.
         */
        identifiantEDSHierarchique: number;
        /**
         * Référence externe de l'EDS hiérarchiquement supérieur.
         */
        referenceEDSHierarchique: number;
        /**
         * Indique le type organisationnel de l'EDS hiérarchiquement supérieur.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente
         */
        typeEDSHierarchique: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleTypeEDSHierarchique: string;
        /**
         * Désignation décrivant l'élément de structure de rattachement (niveau "hiérarchique" supérieur).
         */
        libelleEDSHierarchique: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Référence unique dans MYSYS.
         */
        identifiantAgent: string;
        /**
         * Détermine si l'agent est générique ou nominatif.
         * Exemple d'agent générique : stagiaire, dépannage, ...
         * 
         * Valeurs possibles :
         * - 'O' : Agent générique
         * - 'N' : Agent nominatif
         * - ' ' : Agent générique et Agent nominatif
         */
        indicateurAgentNonNominatif: string;
        /**
         * Indique si l'agent possède le profil de façon personnalisée.
         * 
         * Valeurs possibles :
         * - 'F' : ?
         * - 'P' : ?
         */
        typePersonnalisation: string;
        /**
         * Indicateur existence affectation temporaire.
         */
        indicateurAffectationTemporaire: string;
        /**
         * Indicateur non éligibilité prise RDV.
         */
        indicateurNonElligibiliteRDV: string;
    }

    export interface IZoneDeTravail {
        /**
         * Code indiquant si d'autres résultats sont disponibles (cas des Qr avec pagination).
         */
        codeSuiteListe: string;
    }

    /**
     * Interface représentant un objet pour la méthode GET
     */
    export interface IRechercheAgentQuery {
        codeEtablissement: string;
        typeRecherche: number;
        codeAction: string;
        nomAgentDebutPlage?: string;
        identifiantAgent?: string;
        identifiantEDSRattachement?: number;
        groupeFonction?: string;
    }
};