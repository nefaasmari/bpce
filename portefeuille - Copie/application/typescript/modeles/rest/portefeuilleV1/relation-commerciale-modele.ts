declare module Portefeuille.Modeles.Rest.PortefeuilleV1.relationCommerciale {
    export interface IClient {
        /**
         * Numéro d'identification de la personne morale.
         */
        identifiantPersonne: number;
        /**
         * Détermine le type de personnalité juridique de la personne.
         * Valeurs :
         * "1" : Entrepreneur individuel
         * "2" : Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * La raison sociale est un nom ou une dénomination attribuée à une société. Elle est pour la personne morale ce que le nom patronymique est pour la Personne Physique. Par contre, elle doit être unique.
         */
        raisonSociale: string;
        /**
         * Numéro SIREN professionnel
         */
        numeroSiren: string;
        /**
         * Code leader espace entreprise
         * Définition : Détermine si la personne de la relation est leader de l'espace entreprise
         * Valeurs : 'L' Leader 'N' Personne sans spécificité
         */
        codeLeaderEspaceEntreprise: string;
        /**
         * Nom Leader de la Relation Economique.
         */
        nomLeaderRelationEco: string;
        /**
         * Détermine la typologie de segmentation clientèle.
         * 
         * Correspond au 2 premiers caractères du code
         * EX : MN : Marché national
         */
        codeTypeSegmentMarche: string;
        /**
         * Détermine un segment de clientèle dans une typologie donnée : MN : Marché national
         */
        codeSegmentMarche: string;
        listeIndicateurClient: Array<IIndicateur>;
    }

    export interface IMessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur.
         * 
         * Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         * 
         * la partie utile du code entité (sur 4 car.) :
         * pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé)
         * pour un segment, elle correspond aux 4 carac. codifiant le segment.
         * le rang de la rubrique (sur 3 car.)
         * le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }

    export interface IRelationCommercialeParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure Suivi Par.
         */
        identifiantEds: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
        /**
         * Permet de filtrer la réponse et de n’inclure que des clients, des prospects (enrichis ou restreints) ou les 2).
         * Valeurs :
         * "00" : Client + Prospect + Tiers.
         * "01" : Client.
         * "02" : Prospect (enrichis/restreints) + Tiers
         * Par défaut "01" : Clients (si non fourni, forcé à "01")
         */
        filtrageClientProspect: string;
        /**
         * En Entrée :
         * - nombreLimiteMaxClient : Nombre de clients maximun à retourner. 
         *  Si non fourni, la ressource va initialiser = 0L, et la QR va prendre la valeur par défaut = 350. 
         *  Si la valeur = 0L : limite = 350. 
         *  Si la valeur = 9999 : aucune limite ne devra être 
         *  appliquée.
         */
        nombreLimiteMaxClient: number;
    }

    export interface IRelationCommerciale {
        /**
         * Numéro d'identification d'un portefeuille de suivi clientèle.
         */
        listePortefeuilles: Array<IPortefeuille>;
        messageInformation: IMessageFonctionnel;
    }

    export interface IRelation {
        /**
         * Numéro d'identification de la relation économique.
         */
        identifiantRelationEco: number;
        /**
         * Désignation courte de la relation Economique.
         */
        libelleRelationEco: string;
        listeIndicateurRelation: Array<IIndicateur>;
        listeClient: Array<IClient>;
    }

    export interface IIndicateur {
        /**
         * Le code indicateur :
         * Valeurs :
         * "dateDernierRdv", "dateProchaineRdv", "pnb", codeTypePersonne".....
         */
        code: string;
        /**
         * Valeur du code indicateur :
         * "codeTypePersonne" (CTDAPR)
         * 0 : Personne connue comme client
         * 1 : Personne connue comme Tiers
         * 2 : Personne connue comme prospect
         * 3 : Personne connue comme Prospect enrichi
         */
        valeur: string;
        /**
         * Date de Maj.
         */
        dateMaj: string;
    }

    export interface IPortefeuille {
        /**
         * Numéro d'identification d'un portefeuille de suivi clientèle.
         */
        identifiantPortefeuille: number;
        /**
         * Libellé du portefeuille de suivi clientèle.
         */
        libellePortefeuille: string;
        /**
         * Nombre total de clients (de type Personne Morale et EI) dans le protefeuille.
         */
        nombreTotalClients: number;
        /**
         * Nombre total de Prospect + Tiers (de type Personne Morale et EI) dans le portefeuille.
         */
        nombreTotalProspectsTiers: number;
        listeRelation: Array<IRelation>;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
    }

    //export interface IClient {
    //    /**
    //     * Numéro d'identification de la personne morale.
    //     */
    //    identifiantPersonne: number;
    //    /**
    //     * Détermine le type de personnalité juridique de la personne.
    //     * Valeurs :
    //     * "1" : Entrepreneur individuel
    //     * "2" : Personne morale ou assimilée morale
    //     */
    //    codePersonnaliteJuridique: string;
    //    /**
    //     * La raison sociale est un nom ou une dénomination attribuée à une société. Elle est pour la personne morale ce que le nom patronymique est pour la Personne Physique. Par contre, elle doit être unique.
    //     */
    //    raisonSociale: string;
    //    /**
    //     * Numéro SIREN professionnel
    //     */
    //    numeroSiren: string;
    //    /**
    //     * Code leader espace entreprise
    //     * Définition : Détermine si la personne de la relation est leader de l'espace entreprise
    //     * Valeurs : 'L' Leader 'N' Personne sans spécificité
    //     */
    //    codeLeaderEspaceEntreprise: string;
    //    /**
    //     * Nom Leader de la Relation Economique.
    //     */
    //    nomLeaderRelationEco: string;
    //    /**
    //     * Détermine la typologie de segmentation clientèle.
    //     * 
    //     * Correspond au 2 premiers caractères du code
    //     * EX : MN : Marché national
    //     */
    //    codeTypeSegmentMarche: string;
    //    /**
    //     * Détermine un segment de clientèle dans une typologie donnée : MN : Marché national
    //     */
    //    codeSegmentMarche: string;
    //    listeIndicateurClient: Array<IIndicateur>;
    //}

    //export interface IMessageFonctionnel {
    //    /**
    //     * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur.
    //     * 
    //     * Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
    //     * 
    //     * la partie utile du code entité (sur 4 car.) :
    //     * pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé)
    //     * pour un segment, elle correspond aux 4 carac. codifiant le segment.
    //     * le rang de la rubrique (sur 3 car.)
    //     * le type de l'erreur (sur 1 car.)
    //     */
    //    code: string;
    //    /**
    //     * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
    //     */
    //    libelle: string;
    //}

    //export interface IRelationCommercialeParametres {
    //    /**
    //     * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
    //     */
    //    codeEtablissement: string;
    //    /**
    //     * Numéro d'identification de l'élément de structure Suivi Par.
    //     */
    //    identifiantEds: number;
    //    /**
    //     * Liste numéro de portefeuille.
    //     */
    //    listeIdentifiantPortefeuille: Array<number>;
    //    /**
    //     * Permet de filtrer la réponse et de n’inclure que des clients, des prospects (enrichis ou restreints) ou les 2).
    //     * Valeurs :
    //     * "00" : Client + Prospect + Tiers.
    //     * "01" : Client.
    //     * "02" : Prospect (enrichis/restreints) + Tiers
    //     * Par défaut "01" : Clients (si non fourni, forcé à "01")
    //     */
    //    filtrageClientProspect: string;
    //    /**
    //     * Nombre de clients maximun à retourner. Par défaut : 350 (si non fourni). Si la valeur est  0  aucune limite ne devra être appliquée.
    //     */
    //    nombreLimiteMaxClient: number;
    //}

    //export interface IRelationCommerciale {
    //    /**
    //     * Numéro d'identification d'un portefeuille de suivi clientèle.
    //     */
    //    identifiantPortefeuille: number;
    //    /**
    //     * Libellé du portefeuille de suivi clientèle.
    //     */
    //    libellePortefeuille: string;
    //    /**
    //     * Nombre total de clients (de type Personne Morale et EI) dans le protefeuille.
    //     */
    //    nombreTotalClients: number;
    //    /**
    //     * Nombre total de Prospect + Tiers (de type Personne Morale et EI) dans le portefeuille.
    //     */
    //    nombreTotalProspectsTiers: number;
    //    listeRelation: Array<IRelation>;
    //    listeMessageFonctionnel: Array<IMessageFonctionnel>;
    //}

    //export interface IRelation {
    //    /**
    //     * Numéro d'identification de la relation économique.
    //     */
    //    identifiantRelationEco: number;
    //    /**
    //     * Désignation courte de la relation Economique.
    //     */
    //    libelleRelationEco: string;
    //    listeIndicateurRelation: Array<IIndicateur>;
    //    listeClient: Array<IClient>;
    //}

    //export interface IIndicateur {
    //    /**
    //     * Le code indicateur :
    //     * Valeurs :
    //     * "dateDernierRdv", "dateProchaineRdv", "pnb", codeTypePersonne".....
    //     */
    //    code: string;
    //    /**
    //     * Valeur du code indicateur :
    //     * "codeTypePersonne" (CTDAPR)
    //     * 0 : Personne connue comme client
    //     * 1 : Personne connue comme Tiers
    //     * 2 : Personne connue comme prospect
    //     * 3 : Personne connue comme Prospect enrichi
    //     */
    //    valeur: string;
    //    /**
    //     * Date de Maj.
    //     */
    //    dateMaj: string;
    //}
};