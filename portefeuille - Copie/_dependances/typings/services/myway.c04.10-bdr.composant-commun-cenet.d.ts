
declare module ComposantCommunCenet {
    var app: any;
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "espaceuniqueproserv/v1/changementGammeAbnt"
 * @module ComposantCommunCenet.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunCenet.Modeles {
    interface IChangementGammeAbnt {
        codeEtablissement: string;
        identifiantClient: string;
        identifiantPersonne: number;
        identifiantAbonnement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        identifiantProduitServiceTransf: number;
        codeEtatContrat: string;
        typeSubstitution: string;
        libelleRetourAction: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "espaceuniqueproserv/v1/clotureServiceCenet"
 * @module ComposantCommunCenet.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunCenet.Modeles {
    interface IClotureServiceCenet {
        listeInformationsAbonnement: Array<IInformationsAbonnement>;
    }
    interface IInformationsAbonnement {
        idtAbonnementEspaceUnique: string;
        codeEtatContratAbntEspaceUnique: string;
        libelleEtatAbonnement: string;
        dateEtatAbonnement: string;
        libelleOptionService: string;
        codeRoleUtilisateurAeu: string;
        libelleCourtRoleUtilisateurAeu: string;
        numeroPersonne: number;
        raisonSociale: string;
        identifiantBad: string;
        identifiantProduitService: number;
        libelleDateEtatAbonnement: string;
        nbCertificatsDeclares: number;
        idtPersRepresLegalSignataire: number;
        indicDemandeClotureAbonnementEu: string;
        dateImpressionContrat: string;
        codeEtatServNumerisation: string;
        nombreCertificatsDetenus: number;
        indicateurServRmpProSouscritAbt: string;
        indicDetentionAuthentifRenforce: string;
        codeProduit: string;
        numeroOffre: number;
    }
    /**
     * Interface de la requête au service REST "espaceuniqueproserv/v1/clotureServiceCenet" de type GET
     */
    interface IClotureServiceCenetGetQuery {
        codeEtablissement: string;
        numeroPersonne: number;
        identifiantProduitService: number;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "contratbqdpro/v1/rmpPro"
 * @module ComposantCommunCenet.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunCenet.Modeles.RmpPro {
    interface IRmpPro {
        codeEtablissement: string;
        numeroPersonne: number;
        dateDebutValidite: Date;
        indicateurNumerisationPapier: string;
        typeSouscriptionNumerisation: string;
        numeroOffre: number;
        referenceProduitService: string;
        dateFinValidite: Date;
        heureDebutEvenement: number;
        heureFinEvenement: number;
    }
    /**
     * Interface de la requête au service REST "contratbqdpro/v1/rmpPro" de type GET
     */
    interface IRmpProRestServiceGetQuery {
        codeEtablissement: string;
        numeroPersonne: number;
    }
}

/***
 * Service concernant le service REST "espaceuniqueproserv/v1/changementGammeAbnt"
 * @module ComposantCommunCenet.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunCenet.Services {
    /**
     * Classe du service
     */
    class ChangementGammeAbntService implements IChangementGammeAbntService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la montée ou descente en gamme
         * @param {Modeles.IChangementGammeAbnt} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.IChangementGammeAbnt>} La promesse contenant le résultat
         */
        sendPutRequest(query: Modeles.IChangementGammeAbnt): ng.IPromise<Modeles.IChangementGammeAbnt>;
    }
    /**
     * Interface du service
     */
    interface IChangementGammeAbntService {
        sendPutRequest(query: Modeles.IChangementGammeAbnt): ng.IPromise<Modeles.IChangementGammeAbnt>;
    }
}

/***
 * Service concernant le service REST "espaceuniqueproserv/v1/clotureServiceCenet"
 * @module ComposantCommunCenet.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunCenet.Services {
    /**
     * Classe du service
     */
    class ClotureServiceCenetService implements IClotureServiceCenetService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de restitue les informations sur l'abonnement d'un service espace unique
         * et permet de donner l'autorisation de la clôture du service
         * @param {Modeles.IClotureServiceCenetGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<IClotureServiceCenet>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.IClotureServiceCenetGetQuery): ng.IPromise<Modeles.IClotureServiceCenet>;
        /**
         * Méthode permettant la Clôture abonnement du service espace unique
         * @param {Modeles.IClotureServiceCenet} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<any>} La promesse contenant le résultat
         */
        sendPutRequest(query: Modeles.IClotureServiceCenet): ng.IPromise<any>;
    }
    /**
     * Interface du service
     */
    interface IClotureServiceCenetService {
        sendGetRequest(query: Modeles.IClotureServiceCenetGetQuery): ng.IPromise<Modeles.IClotureServiceCenet>;
        sendPutRequest(query: Modeles.IClotureServiceCenet): ng.IPromise<any>;
    }
}

/**
 * Service concernant le service REST "contratbqdpro/v1/rmpPro"
 * @module ComposantCommunCenet.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantCommunCenet.Services {
    /**
     * Classe du service
     */
    class RmpProService implements IRmpProService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de restitue les informations d'un abonné au service de numérisation RMP PRO : Contrôle d'éligibilité
         * @param {Modeles.RmpPro.IRmpProRestServiceGetQuery} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.RmpPro.IRmpPro>} La promesse contenant les résultats
         */
        sendGetRequest(query: Modeles.RmpPro.IRmpProRestServiceGetQuery): ng.IPromise<Modeles.RmpPro.IRmpPro>;
        /**
         * Méthode permettant de contrôler l'éligibilité et de valider la création du RMP Pro BAD
         * @param {Modeles.RmpPro.IRmpPro} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.RmpPro.IRmpPro>} La promesse contenant les résultats
         */
        sendPostRequest(query: Modeles.RmpPro.IRmpPro): ng.IPromise<Modeles.RmpPro.IRmpPro>;
        /**
         * Méthode permettant de résilier le Rmp Pro BAD
         * @param {Modeles.RmpPro.IRmpPro} query - le modèle de donnée de la requête
         * @return {MyWay.Services.IPromesse<Modeles.RmpPro.IRmpPro>} La promesse contenant les résultats
         */
        sendDeleteRequest(query: Modeles.RmpPro.IRmpPro): ng.IPromise<Modeles.RmpPro.IRmpPro>;
    }
    /**
     * Interface du service
     */
    interface IRmpProService {
        sendGetRequest(query: Modeles.RmpPro.IRmpProRestServiceGetQuery): ng.IPromise<Modeles.RmpPro.IRmpPro>;
        sendPostRequest(query: Modeles.RmpPro.IRmpPro): ng.IPromise<Modeles.RmpPro.IRmpPro>;
        sendDeleteRequest(query: Modeles.RmpPro.IRmpPro): ng.IPromise<Modeles.RmpPro.IRmpPro>;
    }
}
