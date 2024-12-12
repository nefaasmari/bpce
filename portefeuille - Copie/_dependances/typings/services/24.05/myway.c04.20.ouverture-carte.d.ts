
declare module OuvertureCarte {
    var app: any;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Personnalisation produit service carte".
 * @author S0076105 (Nicolas Le Roux), voilà ! ! !
 */
declare module OuvertureCarte.Controleurs {
    /**
     * Ensemble de données permettant la création d'un contrat carte. rien fait
     */
    interface IDataContratCarte {
        produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        plafond: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.Plafond.INiveauDeServiceDuProduitCarte;
        numeroVictoriaTap: string;
        eCarteBleue: boolean;
        tarification: ComposantsCommunsCarte.Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        nomCarte: ComposantsCommunsCarte.Modeles.DonneesDelocalisees.IDonneeDelocalisee;
        memeCodeQue: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.ICarteDuContratCarte;
        tutelle: any;
        transportCitevia: boolean;
        livraison: ComposantsCommunsCarte.Modeles.Structure.Recherche.IDonneesCommunesEDS;
        livraisonEcheance: ComposantsCommunsCarte.Modeles.Structure.Recherche.IDonneesCommunesEDS;
        codePinModeEnvoi: string;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface IPersonnalisationProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        indicateurInitialisation: boolean;
        index: string;
        model: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        dataContratCarte: IDataContratCarte;
        codeProduitCarteSelectionne: number;
        codeVisuelSelectionne: string;
        familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        listeProduitCarteVisuel: Array<ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        listeDeCodeProduitCarte: Array<string>;
        identifiantTitulaire: string;
        indicateurChargement: boolean;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        erreurComposant: boolean;
        nomMarital: string;
        modeEdition: boolean;
        codeProduitCarte: string;
        revenir: boolean;
        codePlafondCarte: string;
        codeNomUsage: string;
        edsLivraison: number;
        saisieRestreinte: boolean;
        messageErreur: string;
        numeroDuCompte: string;
        nomPorteur: string;
        identifiantTiers: number;
        designationEntiteTitulaire: string;
        libelleCompte: string;
        appelant: number;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitService: string;
        carteAgirClient: ComposantsCommunsCarte.Modeles.CarteAgir.IDonneesDePartage;
        codeLieuAdressage: string;
        codePinModeEnvoi: string;
        codePinShow: boolean;
        identifiantPersonne: number;
        isSecurPassActif: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class PersonnalisationProduitServiceCarteControleur {
        protected $scope: IPersonnalisationProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        private helperContratCarteService;
        static $inject: string[];
        constructor($scope: IPersonnalisationProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService, helperContratCarteService: ComposantsCommunsCarte.Services.HelperContratCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode d'initialisation du model
         */
        private initialisationModel();
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         * Méthode en plusieurs partie puisque la complexité cyclomatique doit être inférieur à 10.
         */
        private onChangeContratCarteSuite(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de tutelle
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTutelle(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de nom sur la carte
         * sélectionnés par l'utilisateur
         */
        private fillModelWithNomCarte(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de même code que
         * sélectionnés par l'utilisateur
         */
        private fillModelWithMemeCodeQue(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments du plafond
         * sélectionnés par l'utilisateur
         */
        private fillModelWithPlafond(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de E-Carte bleue
         * sélectionnés par l'utilisateur
         */
        private fillModelWithECarteBleue(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de transport citevia
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTransportCitevia(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de numero victoria tap
         * sélectionnés par l'utilisateur
         */
        private fillModelWithNumeroVictoriaTap(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de livraison
         * sélectionnés par l'utilisateur
         */
        private fillModelWithLivraison(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de livraison à échéance
         * sélectionnés par l'utilisateur
         */
        private fillModelWithLivraisonEcheance(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de tarification
         * sélectionnés par l'utilisateur
         */
        private fillModelWithTarification(data);
        private fillModelWithParametreDePartage(data);
        /**
         * Méthode permettant de valoriser les données du modèles à partir des éléments de carte visuel
         * sélectionnés par l'utilisateur
         */
        private fillModelWithCarteVisuel(data);
        /**
         * Méthode permettant d'extraire une liste de produit carte à partir
         * de la sélection de l'utilisateur.
         */
        private extractListeProduitCarteWithSameOptions(produitCarte);
        /**
         * Méthode permettant d'extraire un produit carte à partir de la
         * sélection de l'utilisateur.
         */
        private extractProduitCarteFromSelection();
        /**
         * Méthode permettant d'effectuer le traitement spécifique au composant Transport Citevia.
         */
        private doTransportCiteviaTraitement();
        /**
         * Setter sur le produit carte
         */
        setProduitCarteVisuel(produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Setter sur la famille de carte
         */
        setFamilleCarte(familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Setter sur les options du produit carte
         */
        setOptionsProduitCarte(optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage): void;
        /**
         * Setter sur le type de produit carte
         */
        setTypeProduitCarte(typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage): void;
        setDonneesPartage(data: any): void;
        afficherDirectiveTarification(): boolean;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Personnalisation produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OuvertureCarte.Directives {
    function mwPersonnalisationProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Sélection produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OuvertureCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface ISelectionProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        indicateurInitialisation: boolean;
        index: string;
        model: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        codeEtablissement: string;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        listeDeCodeProduitCarte: Array<string>;
        familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        listeProduitCarteVisuel: Array<ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille>;
        indicateurChargement: boolean;
        erreurComposant: boolean;
        messageErreur: string;
        numeroOffreFamille?: string;
        typeTitulaire?: string;
        identifiantPersonne: number;
        showEligibiliteCR: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class SelectionProduitServiceCarteControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        constructor($scope: ISelectionProduitServiceCarteControleurScope, i18n: ComposantsCommunsCarte.Services.II18nCarteService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
        /**
         * Méthode permettant d'extraire une liste de produit carte à partir
         * de la sélection de l'utilisateur.
         */
        private extractListeProduitCarteWithSameOptions(produitCarte);
        /**
         * Méthode permettant d'extraire un produit carte à partir de la
         * sélection de l'utilisateur.
         */
        private extractProduitCarteFromSelection();
        /**
         * Setter sur le produit carte
         */
        setProduitCarteVisuel(produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille): void;
        /**
         * Setter sur la famille de carte
         */
        setFamilleCarte(familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte): void;
        /**
         * Setter sur les options du produit carte
         */
        setOptionsProduitCarte(optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage): void;
        /**
         * Setter sur le type de produit carte
         */
        setTypeProduitCarte(typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Selection produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OuvertureCarte.Directives {
    function mwSelectionProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Récapitulatif ouverture produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OuvertureCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IRecapitulatifOuvertureProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        indicateurInitialisation: boolean;
        index: string;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        familleCarte: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.IFamilleDeCarte;
        typeProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurTypeDeFiltrage;
        optionsProduitCarte: ComposantsCommunsCarte.Controleurs.IValeurOptionsDeFiltrage;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        numeroDuCompte: string;
        listeDeCodeProduitCarte: Array<string>;
        identifiantTitulaire: string;
        indicateurChargement: boolean;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        erreurComposant: boolean;
        produitCarteVisuel: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        codePlafondCarte: string;
        codeNomUsage: string;
        identifiantTiers: string;
        edsLivraison: number;
        nomMarital: string;
        identifiantSupportCarte: string;
        messageErreur: string;
        codeActivationECarteBleue: string;
        model: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        numeroVictoriaTap: string;
        codeCaractereForfaitaireOffre: string;
        codeDeTarification: string;
        carteAgirClient: ComposantsCommunsCarte.Modeles.CarteAgir.IDonneesDePartage;
        codeLieuAdressage: string;
        typeLivraison: string;
        codePinModeEnvoi: string;
        codePinShow: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class RecapitulatifOuvertureProduitServiceCarteControleur {
        private $scope;
        private i18n;
        private serviceAgent;
        static $inject: string[];
        constructor($scope: IRecapitulatifOuvertureProduitServiceCarteControleurScope, i18n: ComposantsCommunsCarte.Services.II18nCarteService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode permettant d'enregistrer les données du contrat carte.
         */
        private onChangeContratCarte(data);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Récapitulatif ouverture produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OuvertureCarte.Directives {
    function mwRecapitulatifOuvertureProduitServiceCarte(): ng.IDirective;
}
