
declare module ConsultationAssuranceCompte {
    var app: ng.IModule;
}

/**
 * Contrôleur de la page de consultation de l'Assurance Compte Professionels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ConsultationAssuranceCompte.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class ConsultationAssCompteControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Code guichet interbanquaire
         */
        codeGuichet: string;
        /**
         * Numéro du compte créé dans l'ouverture d'offre
         */
        numeroCompteCCE: string;
        /**
         * L'identifiant de l'entitée titulaire
         */
        identifiantEntiteTitulaire: number;
        /**
         * Le client bancaire issu du context GGO
         */
        clientBancaire: string;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Le numéro de contrat de l'assurance
         */
        numeroContratAssurance: string;
        /**
         * Objet de données issues de GGO
         */
        donneesContextuellesProduitService: any;
        donneesLisa: any;
        requeteEnCours: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode pour initialiser les données
         */
        initialiserDonnees(): void;
    }
}

/**
 * Contrôleur de la partie header de la page de consultation assurance sur compte
 * @author S0077482 (Thomas Prat)
 */
declare module ConsultationAssuranceCompte {
    class HeaderControleur {
        private serviceAgentExtended;
        private $rootScope;
        static $inject: string[];
        sousTitre: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $rootScope: ng.IRootScopeService);
        /**
         * Méthode permettant de quitter la consultation Assurance sur compte via LISA
         * CODE DEBRANCHEMENT LISA -> 1
         * @return {void}
         */
        quitterAssurancesCompte(): void;
    }
}

declare module ConsultationAssuranceCompte {
}

/**
 * Contrôleur de la directive mw-ass-compte-pro-consultation
 * @author S0077536 (Arnaud Despalins)
 */
declare module ConsultationAssuranceCompte.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAssCompteConsultationControleur {
        private $scope;
        private assuranceCompteService;
        private informationEntiteTitulaireService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         *  Le numéro de l'entité titulaire issu du contexte GGO
         */
        identifiantEntiteTitulaire: number;
        /**
         * Le client bancaire
         */
        clientBancaire: string;
        /**
         * Le numéro de contrat de l'assurance
         */
        numeroContratAssurance: number;
        /**
         * Objet AssuranceSurCompte contenant les informations de l'assurance
         */
        assuranceSurCompte: ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte;
        /**
         * Indicateur pour le type du tableau
         */
        courtTerme: boolean;
        /**
         * Indicateur du type d'acte de gestion
         */
        ouverture: boolean;
        /**
         * Indicateur du type d'acte de gestion
         */
        cloture: boolean;
        /**
         * Indicateur de requète en cours
         */
        indicateurRequeteEnCours: boolean;
        /**
         * Indicateur de la réussite de la requête
         */
        private indicateurRequeteReussie;
        /**
         * Indicateur de succes / echec des requetes
         */
        private indicateurSuccesRequetes;
        /**
         * Indicateur de la réussite de la recupération des données délocalisées
         */
        private indicateurDonneesDelocLien;
        /**
         * L'objet erreur contenant les informations
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Objet du contexte
         */
        contexte: any;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, assuranceCompteService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Application.IAssuranceCompteService, informationEntiteTitulaireService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Rest.EntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaireService);
        /**
         * Méthode pour le chargement de l'objet assuranceSurCompte depuis le service
         */
        private chargerAssuranceSurCompte();
        /**
         * Méthode pour le rechargement des requêtes de la directive
         */
        rechargerDirective(): void;
        /**
         * Méthode pour le rechargement des requêtes des directives filles
         */
        rechargerDirectiveFilleCommune(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la directive de consultation de l'Assurance Compte Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ConsultationAssuranceCompte.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwAssCompteProConsultation(): ng.IDirective;
}
