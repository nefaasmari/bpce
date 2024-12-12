
declare module ComposantsCommunsSeuilIntDeb {
    var app: any;
}

declare module ComposantsCommunsSeuilIntDeb {
}

/**
 * Contrôleur de la page de tests pour l'utilisation des services REST du projet
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSeuilIntDeb.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevServiceRestControleur {
        private $scope;
        private seuilFranchiseAgioCceService;
        static $inject: string[];
        seuilFranchiseAgioCceServiceGetQuery: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilFranchiseAgioCceServiceGetQuery;
        seuilFranchiseAgioCceServiceGetReponse: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert;
        seuilFranchiseAgioCceServiceGetErreur: MyWay.Services.Erreur;
        indicateurSeuilFranchiseAgioCceServiceGetEnCours: boolean;
        indicateurRechercheSeuilFranchiseAgioCceServiceGet: boolean;
        indicateurSuccesSeuilFranchiseAgioCceServiceGet: boolean;
        indicateurSuccesSeuilFranchiseAgioCceServiceGetNull: boolean;
        seuilFranchiseAgioCceServicePostQuery: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert;
        seuilFranchiseAgioCceServicePostReponse: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert;
        seuilFranchiseAgioCceServicePostErreur: MyWay.Services.Erreur;
        indicateurSeuilFranchiseAgioCceServicePostEnCours: boolean;
        indicateurRechercheSeuilFranchiseAgioCceServicePost: boolean;
        indicateurSuccesSeuilFranchiseAgioCceServicePost: boolean;
        indicateurSuccesSeuilFranchiseAgioCceServicePostNull: boolean;
        seuilFranchiseAgioCceServicePutQuery: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert;
        seuilFranchiseAgioCceServicePutReponse: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert;
        seuilFranchiseAgioCceServicePutErreur: MyWay.Services.Erreur;
        indicateurSeuilFranchiseAgioCceServicePutEnCours: boolean;
        indicateurRechercheSeuilFranchiseAgioCceServicePut: boolean;
        indicateurSuccesSeuilFranchiseAgioCceServicePut: boolean;
        indicateurSuccesSeuilFranchiseAgioCceServicePutNull: boolean;
        seuilFranchiseAgioCceServiceDeleteQuery: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert;
        seuilFranchiseAgioCceServiceDeleteReponse: any;
        seuilFranchiseAgioCceServiceDeleteErreur: MyWay.Services.Erreur;
        indicateurSeuilFranchiseAgioCceServiceDeleteEnCours: boolean;
        indicateurRechercheSeuilFranchiseAgioCceServiceDelete: boolean;
        indicateurSuccesSeuilFranchiseAgioCceServiceDelete: boolean;
        indicateurSuccesSeuilFranchiseAgioCceServiceDeleteNull: boolean;
        constructor($scope: ng.IScope, seuilFranchiseAgioCceService: Services.ISeuilFranchiseAgioCceService);
        private initTestSeuilFranchiseAgioCceGet();
        private initTestSeuilFranchiseAgioCcePost();
        private initTestSeuilFranchiseAgioCcePut();
        private initTestSeuilFranchiseAgioCceDelete();
        recupererSeuilFranchiseAgioCce(): void;
        creerSeuilFranchiseAgioCce(): void;
        modifierSeuilFranchiseAgioCce(): void;
        supprimerSeuilFranchiseAgioCce(): void;
    }
}

/**
 * Ensemble d'énumérations pour le projet
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSeuilIntDeb.Enumerations {
    enum CodeActionServiceSeuilIntDeb {
        OUVERTURE,
        AVENANT,
        CLOTURE,
    }
    enum EvenementSeuilIntDeb {
        AVENANT_SEUIL_INT_DEB_ANNULATION = 0,
        AVENANT_SEUIL_INT_DEB_VALIDATION = 1,
        OUVERTURE_SEUIL_INT_DEB_ANNULATION = 2,
        OUVERTURE_SEUIL_INT_DEB_VALIDATION = 3,
        CLOTURE_SEUIL_INT_DEB_VALIDATION = 4,
    }
    class Listes {
        static periodicites: any;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/contratcceservice/v1/seuilFranchiseAgioCce"
 * @author S0080162 (François Galopin)
 */
declare module ComposantsCommunsSeuilIntDeb.Modeles.ContratCceService.SeuilFranchiseAgioCce {
    interface ISeuilFranchiseAgioCceServiceGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
    interface ISeuilDecouvert {
        indicateurContratPS: string;
        typeFranchiseAgio: string;
        montantFranchiseAgio: number;
        libelleFamilleMarche: string;
        codeDevise: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        identifiantProduitService: number;
        numeroOffreSouscrite: number;
    }
}

declare module ComposantsCommunsSeuilIntDeb.Services {
    class SeuilFranchiseAgioCceService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilFranchiseAgioCceServiceGetQuery): ng.IPromise<Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert>;
        putRequest(query: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert): ng.IPromise<Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert>;
        postRequest(query: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert): ng.IPromise<Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert>;
        deleteRequest(query: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert): ng.IPromise<any>;
    }
    interface ISeuilFranchiseAgioCceService {
        getRequest: (query: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilFranchiseAgioCceServiceGetQuery) => ng.IPromise<Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert>;
        putRequest: (query: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert) => ng.IPromise<Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert>;
        postRequest: (query: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert) => ng.IPromise<Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert>;
        deleteRequest: (query: Modeles.ContratCceService.SeuilFranchiseAgioCce.ISeuilDecouvert) => ng.IPromise<any>;
    }
}

/**
 * Contrôleur de la directive mw-erreur-seuil-int-deb
 * @author S0080162 (François GALOPIN
 */
declare module ComposantsCommunsSeuilIntDeb.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwErreurSeuilIntDebControleur {
        static $inject: any[];
        mwErreur: MyWay.Services.Erreur;
        constructor();
    }
}

declare module ComposantsCommunsSeuilIntDeb.Directives {
    function mwErreurSeuilIntDeb(): ng.IDirective;
}
