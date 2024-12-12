declare module Portefeuille.Modeles.Rest.PropositionCorporateV1.rechercheRevue {
    export interface IRechercheRevueParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
        /**
         * Liste identifiant de la relation économique.
         */
        listeIdentifiantRelationEco: Array<number>;
        /**
         * Liste numéro de personne.
         */
        listeIdentifiantPersonne: Array<number>;
        /**
         * Indique si il faut récupérer l'équipement.
         */
        codeActionEquipement: string;
    }

    export interface IRechercheRevue {
        listeBilanRevue: Array<IBilanRevue>;
        messageInformation: IMessageFonctionnel;
    }

    export interface IBilanRevue {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Code Famille produit porteFeuille BDR.
         */
        codeFamilleProduitPtf: string;
        /**
         * Code sous famille produit portefeuille BDR.
         */
        codeSousFamilleProduitPtf: string;
        /**
         * Numéro d'identification d'un portefeuille.
         */
        identifiantPortefeuille: number;
        /**
         * Numéro d'identification de la relation économique.
         */
        identifiantRelationEco: number;
        /**
         * Numéro d'identification de la personne morale ou EI.
         */
        identifiantPersonne: number;
        /**
         * Raison Sociale.
         */
        raisonSociale: string;
        /**
         * Indicateur client équipé sous famille produit. Valeurs : O/N.
         */
        indicateurClientEquipe: string;
        /**
         * Indicateur sous-famille produit BDR à proposer. Valeurs : O/N.
         */
        indicateurClientAEquiper: string;
        /**
         * Taux objectif flux.
         */
        tauxObjectifFlux: number;
        /**
         * Indicateur client à activer. Valeurs : O/N.
         */
        indicateurClientAActiver: string;
        /**
         * Indicateur tarif à renégocier. Valeurs : O/N.
         */
        indicateurTarifARenegocier: string;
        /**
         * Indicateur client équipé à la concurrence.
         * Valeurs : O/N.
         */
        indicateurClientEquipeConcurren: string;
        /**
         * Indicateur client non intéressé produit.
         * Valeur : O/N
         */
        indicateurClientNonInteresse: string;
        /**
         * Code type segment clientèle.
         */
        codeTypeSegment: string;
        /**
         * Code segment clientèle.
         */
        codeSegment: string;
        /**
         * Libellé segment clientèle.
         */
        libelleSegment: string;
    }

    export interface IMessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur.
         * 
         * Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         * 
         * la partie utile du code entité (sur 4 car.) :
         * - pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé)
         * - pour un segment, elle correspond aux 4 carac. codifiant le segment. le rang de la rubrique (sur 3 car.) le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
};