
/**
 * @module ComposantsCommunsServiceAstel
 * @author S0078364 (Safa OUERFELLI)
 */
declare module ComposantsCommunsServiceAstel {
    var app: any;
}

/**
 * Modeles des objets pour le service de mise en gestion de produit/service externe
 * @module ComposantsCommunsServiceAstel.Modeles.ServiceOffre.PSExterneService
 * @author S0078364 (Safa OUERFELLI)
 */
declare module ComposantsCommunsServiceAstel.Modeles.ServiceOffre.PSExterneService {
    interface IPsExternePersonne {
        codeBanque: string;
        codeGuichet: string;
        numeroOffre: number;
        typeProduitService: string;
        identifiantProduitService: number;
        numeroPersonne: number;
        referenceProduitService: string;
    }
}

/**
 * @module ComposantsCommunsServiceAstel.Services
 * @author S0078364 (Safa OUERFELLI)
 */
declare module ComposantsCommunsServiceAstel.Services {
    /**
     * Classe du controleur
     */
    class ServicesAstelService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de réaliser la requête POST du service
         */
        postRequest(query: Modeles.ServiceOffre.PSExterneService.IPsExternePersonne): ng.IPromise<Modeles.ServiceOffre.PSExterneService.IPsExternePersonne>;
        /**
         * Méthode permettant de réaliser la requête DELETE du service
         */
        deleteRequest(query: Modeles.ServiceOffre.PSExterneService.IPsExternePersonne): ng.IPromise<Modeles.ServiceOffre.PSExterneService.IPsExternePersonne>;
    }
    interface IPsExternePersonne {
        postRequest: (query: Modeles.ServiceOffre.PSExterneService.IPsExternePersonne) => ng.IPromise<Modeles.ServiceOffre.PSExterneService.IPsExternePersonne>;
        deleteRequest: (query: Modeles.ServiceOffre.PSExterneService.IPsExternePersonne) => ng.IPromise<Modeles.ServiceOffre.PSExterneService.IPsExternePersonne>;
    }
}
