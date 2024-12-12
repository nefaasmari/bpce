
declare module ComposantsCommunsReleveEnLigne {
    var app: any;
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "contratbqdpro/v1/rmpPro"
 * @module ComposantsCommunsReleveEnLigne.Modeles.RmpPro
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsReleveEnLigne.Modeles.RmpPro {
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

/**
 * Service concernant le service REST "contratbqdpro/v1/rmpPro"
 * @module ComposantsCommunsReleveEnLigne.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComposantsCommunsReleveEnLigne.Services {
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
