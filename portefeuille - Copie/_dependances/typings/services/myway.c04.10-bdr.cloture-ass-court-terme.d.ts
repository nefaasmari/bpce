
declare module ClotureAssuranceCourtTerme {
    var app: ng.IModule;
}

declare module ClotureAssuranceCourtTerme {
}

/**
 * Contrôleur de la page de test de la directive de clôture de l'Assurance Court Terme Professionels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureAssuranceCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevAssCourtTermeClotureControleur {
        static $inject: any[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Code guichet interbanquaire
         */
        codeGuichet: string;
        /**
         * L'identifiant de l'entitée titulaire
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Le client bancaire issu du context GGO
         */
        clientBancaire: string;
        /**
         * Le numéro de contrat de l'assurance
         */
        numeroContratAssurance: string;
        /**
         * Objet de données issues de GGO
         */
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueDirective: boolean;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueReload: boolean;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode pour initialiser les données GGO
         */
        initialiserDonneesGGO(): void;
        /**
         * Méthode permettant d'exécuter la directive
         * @return void
         */
        executerDirective(): void;
        /**
         * Méthode permettant de rafraichir la directive
         * @return void
         */
        rafraichirDirective(): void;
        /**
         * Méthode pour déclencher la mise en gestion
         */
        executerMiseEnGestion(): void;
        /**
         * Méthode pour le chargement des jeux de test par defaut
         * @param {number} id - l'identifiant du jeu de test à charger
         */
        setJeuDonnees(id: number): void;
    }
}

/**
 * Contrôleur de la page de test de la directive de clôture sans IHM de l'Assurance Court Terme Professionels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureAssuranceCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevAssCourtTermeClotureSansIhmControleur {
        static $inject: any[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Code guichet interbanquaire
         */
        codeGuichet: string;
        /**
         * L'identifiant de l'entitée titulaire
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Le client bancaire issu du context GGO
         */
        clientBancaire: string;
        /**
         * Le numéro de contrat de l'assurance
         */
        numeroContratAssurance: string;
        /**
         * Objet de données issues de GGO
         */
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueDirective: boolean;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueReload: boolean;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode pour initialiser les données GGO
         */
        initialiserDonneesGGO(): void;
        /**
         * Méthode permettant d'exécuter la directive
         * @return void
         */
        executerDirective(): void;
        /**
         * Méthode permettant de rafraichir la directive
         * @return void
         */
        rafraichirDirective(): void;
        /**
         * Méthode pour déclencher la mise en gestion
         */
        executerMiseEnGestion(): void;
        /**
         * Méthode pour le chargement des jeux de test par defaut
         * @param {number} id - l'identifiant du jeu de test à charger
         */
        setJeuDonnees(id: number): void;
    }
}

/**
 * Service pour la gestion de la clôture des assurances
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureAssuranceCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IClotureAssuranceCourtTermeService {
        sauvegarderClotureCourtTerme(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, indicateurCloture: string, codeMotifCloture: string, libelleMotifCloture: string, codeMotifClotureCCE: string): MyWay.Services.IPromesse<ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Application.Commun.IErreurService>;
    }
}

/**
 * Contrôleur de la directive mw-ass-court-terme-pro-cloture
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureAssuranceCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAssCourtTermeClotureControleur {
        private $scope;
        private assuranceCourtTermeService;
        private serviceAgent;
        private resilierPersonneService;
        private clotureAssuranceCourtTermeService;
        static $inject: string[];
        /**
         * Correspond à l’identifiant du bloc de votre directive
         */
        idBloc: string;
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
         * Objet AssuranceCourtTerme contenant les informations de l'assurance
         */
        assuranceCourtTerme: ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme;
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
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur de requète en cours
         */
        indicateurRequeteEnCours: boolean;
        /**
         * Indicateur de la réussite de la requête
         */
        private indicateurRequeteReussie;
        /**
         * Indicateur de la réussite de la recupération des données délocalisées
         */
        private indicateurDonneesDelocLien;
        /**
         * L'objet erreur contenant les informations
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, assuranceCourtTermeService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Application.IAssuranceCourtTermeService, serviceAgent: MyWay.Services.ServiceAgentExtended, resilierPersonneService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Application.IResilierPersonneService, clotureAssuranceCourtTermeService: Services.Application.IClotureAssuranceCourtTermeService);
        /**
         * Méthode pour le chargement de l'objet assuranceCourtTerme depuis le service
         */
        private chargerAssuranceCourtTerme();
        /**
         * Permet de lancer la mise en gestion depuis GGO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Méthode pour valider l'avenant de l'assurance court terme
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} le compte rendu de réponse pour GGO
         */
        validerAssurance(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
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
 * Directive pour la gestion de l'affichage de la directive de clôture de l'Assurance Court Terme Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureAssuranceCourtTerme.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwAssCourtTermeProCloture(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-ass-court-terme-pro-cloture
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureAssuranceCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAssCourtTermeClotureSansIhmControleur {
        private $scope;
        private assuranceCourtTermeService;
        private serviceAgent;
        private clotureAssuranceCourtTermeService;
        static $inject: string[];
        /**
         * Correspond à l’identifiant du bloc de votre directive
         */
        idBloc: string;
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
         * Le code motif clôture du compte CCE issu du contexte GGO
         */
        codeMotifClotureCCE: string;
        /**
         * Objet AssuranceCourtTerme contenant les informations de l'assurance
         */
        assuranceCourtTerme: ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur de requète en cours
         */
        indicateurRequeteEnCours: boolean;
        /**
         * Indicateur de la réussite de la requête
         */
        private indicateurRequeteReussie;
        /**
         * L'objet erreur contenant les informations
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, assuranceCourtTermeService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Application.IAssuranceCourtTermeService, serviceAgent: MyWay.Services.ServiceAgentExtended, clotureAssuranceCourtTermeService: Services.Application.IClotureAssuranceCourtTermeService);
        /**
         * Méthode pour le chargement de l'objet assuranceCourtTerme depuis le service
         */
        private chargerAssuranceCourtTerme();
        /**
         * Permet de lancer la mise en gestion depuis GGO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Méthode pour valider l'avenant de l'assurance court terme
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} le compte rendu de réponse pour GGO
         */
        validerAssurance(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
    }
}

/**
 * Directive pour la gestion de l'affichage de la directive de clôture sans IHM de l'Assurance Court Terme Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureAssuranceCourtTerme.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwAssCourtTermeProClotureSansIhm(): ng.IDirective;
}
