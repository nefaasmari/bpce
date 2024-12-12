
declare module ComposantsCommunsProduitsNonGeres {
    var app: any;
}

declare module ComposantsCommunsProduitsNonGeres {
}

/**
 * Controleur pour la page de test du service REST des produits non gérés
 * @module ComposantsCommunsProduitsNonGeres.Controleurs
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsProduitsNonGeres.Controleurs {
    /**
     * Classe du controleur
     */
    class PageDevServiceRestControleur {
        private $scope;
        private serviceAgentExtended;
        private miseEnGestionPSExterneService;
        static $inject: string[];
        offreMiseEnGestionPSExternePostQuery: Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery;
        offreMiseEnGestionPSExternePostReponse: Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterne;
        offreMiseEnGestionPSExternePostErreur: MyWay.Services.Erreur;
        indicateurMiseEnGestionPSExterneServiceEnCours: boolean;
        indicateurRechercheMiseEnGestionPSExterneServicePost: boolean;
        indicateurSuccesMiseEnGestionPSExterneServicePost: boolean;
        indicateurSuccesMiseEnGestionPSExterneServicePostNull: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService);
        /**
         * Méthode permettant d'initialiser la query
         * @return void
         */
        initialiserQueryServicePost(): void;
        /**
         * Méthode permettant d'envoyer la requête
         * @return void
         */
        envoiRequete(): void;
    }
}

/**
 * Ensemble d'énumérations pour le projet produits non gérés
 * @module ComposantsCommunsProduitsNonGeres.Enumerations
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsProduitsNonGeres.Enumerations {
    enum ProduitsNonGeresCodeActionMAJContenuOffre {
        CREATION,
        ANNULATION,
    }
    enum ProduitsNonGeresCodeAffichageReferenceProduit {
        AFFICHAGE_BANQUE_GUICHET_REFERENCE_SUR_ECRAN_ET_IMPRESSION,
        AFFICHAGE_REFERENCE,
        AFFICHAGE_LIBELLE_SOUSCRIT,
        MODE_COMPTE_AFFICHAGE_ECRAN,
        MODE_COMPTE_AFFICHAGE_IMPRESSION,
        SANS_AFFICHAGE,
    }
}

/**
 * Modeles des objets pour le service de mise en gestion de produit/service externe
 * @module ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne {
    interface IMiseEnGestionPSExterneServicePostQuery {
        identifiantProduitService: number;
        referenceProduitService: string;
        codeActionMajContenuOffre: Enumerations.ProduitsNonGeresCodeActionMAJContenuOffre;
        referenceExterneAgent: number;
        identifiantElementStructure: number;
        numeroOffreSouscrite: number;
        codeEtablissement: string;
        codeTypeProduitService: string;
        codeAffichageReferenceProduitService: Enumerations.ProduitsNonGeresCodeAffichageReferenceProduit;
        codeGuichet: string;
    }
    interface IMiseEnGestionPSExterne {
        codeRetour: number;
        alphanumeriqueBanalisee080: string;
        indicateurAjoutProduitServiceOffre: string;
        referenceProduitService: string;
    }
}

/**
 * Service pour la mise en gestion de produit/service externe
 * @module ComposantsCommunsProduitsNonGeres.Services
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsProduitsNonGeres.Services {
    /**
     * Classe du controleur
     */
    class MiseEnGestionPSExterneService implements IMiseEnGestionPSExterneService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de réaliser la requête POST du service
         * @param {Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery} query - le modèle de donnée de la requête
         * @return {ng.IPromise<Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterne>} Promese contenant le compte rendu de mise en gestion
         */
        postRequest(query: Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery): ng.IPromise<Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterne>;
        /**
         * Méthode permettant de créer la query
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexteGGO - le contexte GGO
         * @param {boolean} enOuverture
         * @return {ng.IPromise<Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery>} Promese contenant le compte rendu de mise en gestion
         */
        creationQueryPSExterne(contexteGGO: GestionGeneriqueOffres.Types.DonneesContextuelles, enOuverture: boolean): ng.IPromise<Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery>;
        /**
         * Méthode permettant de creer une query à partir des Contextes
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} authentificationInfo - authentification info
         * @param {MyWay.Services.Context.AuthentificationInfo} contexteGGO - le contexte GGO
         * @param {MyWay.Services.Context.ParametresComptables} parametresComptables - parametres comptables
         * @param {boolean} enOuverture
         * @return {ng.IPromise<Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery>} Promese contenant le compte rendu de mise en gestion
         */
        private creationQueryDepuisContexte(contexteGGO, authentificationInfo, parametresComptables, enOuverture);
        /**
         * Méthode permettant de filtrer et de récupérer les caractéristiques du produit/ service à partir du tableau fourni par GGO
         * @param {GestionGeneriqueOffres.Types.DonneesContextuelles} contexte - Le contexte GGO
         * @return {GestionGeneriqueOffres.Types.ReferenceProduit} Reference produit
         */
        private filtrerReferencesProduit(contexte);
    }
    interface IMiseEnGestionPSExterneService {
        postRequest: (query: Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery) => ng.IPromise<Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterne>;
        creationQueryPSExterne: (contexteGGO: GestionGeneriqueOffres.Types.DonneesContextuelles, enOuverture: boolean) => ng.IPromise<Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery>;
    }
}
