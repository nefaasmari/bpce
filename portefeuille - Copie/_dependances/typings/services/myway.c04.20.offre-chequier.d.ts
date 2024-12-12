
declare module OffreChequier {
    var app: any;
}

declare module OffreChequier.Controleurs {
    interface IPopupAutorisationControleur extends ng.IScope {
        headerText: string;
        messageFonctionnel: ComposantsCommunsChequier.Modeles.ContratCheque.Information.IMessageFonctionnel;
    }
    class PopupAutorisationControleur {
        private $scope;
        private $modalInstance;
        private data;
        static $inject: string[];
        constructor($scope: IPopupAutorisationControleur, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        valider(action: string): void;
        annuler(): void;
    }
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Personnalisation du produit chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OffreChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IPersonnalisationProduitChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        indicateurAffichage: boolean;
        entiteTitulaire: ComposantsCommunsChequier.Modeles.EntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire;
        modeleDeChequier: ComposantsCommunsChequier.Modeles.X106FORM.IModeleChequier;
        seuilDeRenouvellement: ComposantsCommunsChequier.Modeles.X108SEUI.ISeuilRenouvellement;
        renouvellementAutomatique: ComposantsCommunsChequier.Modeles.X107RNLT.IRenouvellement;
        dotation: number;
        lieuDeLivraison: ComposantsCommunsChequier.Controleurs.ILieuLivraisonItem;
        model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier;
        offreSouscrite: GestionGeneriqueOffres.Types.IOffreSouscrite;
        etablissement: GestionGeneriqueOffres.Types.IEtablissement;
        codeActiviteCompte: string;
        typeChequier: string;
        indicRenouvellementAuto: string;
        valeurSeuilRenouvellement: number;
        dotationTheorique: number;
        edsDomiciliation: number;
        codeRoutageTheorique: string;
        numeroAgenceDistribution: number;
    }
    /**
     * Déclaration du contrôleur
     */
    class PersonnalisationProduitChequierControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static CODE_FAMILLE_CHEQUIER: string;
        static CODE_ROUTAGE_AGENCE: string;
        static CODE_ORIGINE_OPERATION_PDT: string;
        static $inject: string[];
        constructor($scope: IPersonnalisationProduitChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsChequier.Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de callback sur le changement du modèle de chéquier.
         * @param Le nouveau modèle de chéquier sélectionné.
         */
        onChangeModeleChequier(model: ComposantsCommunsChequier.Modeles.X106FORM.IModeleChequier): void;
        /**
         * Méthode de callback sur le changement du seuil de renouvellement
         * @param Le nouveau seuil de renouvellement sélectionné.
         */
        onChangeSeuilRenouvellement(model: ComposantsCommunsChequier.Modeles.X108SEUI.ISeuilRenouvellement): void;
        /**
         * Méthode de callback sur le changement du renouvellement automatique
         * @param Le nouveau seuil de renouvellement sélectionné.
         */
        onChangeRenouvellementAutomatique(model: ComposantsCommunsChequier.Modeles.X107RNLT.IRenouvellement): void;
        /**
         * Méthode de callback sur le changement de la dotation
         * @param La nouvelle dotation sélectionnée.
         */
        onChangeDotation(model: number): void;
        /**
         * Méthode de callback sur le changement du lieu de livraison
         * @param Le nouveau lieu de livraison sélectionné.
         */
        onChangeLieuLivraison(model: ComposantsCommunsChequier.Controleurs.ILieuLivraisonItem): void;
        /**
         * Enrichissement du modèle de sortie avec le modèle de chéquier.
         * @param model Le modèle de chéquier sélectionné
         */
        private fillModelWithModeleChequier(model);
        /**
         * Enrichissement du modèle de sortie avec le seuil de renouvellement.
         * @param model Le seuil de renouvellement sélectionné
         */
        private fillModelWithSeuilRenouvellement(model);
        /**
         * Enrichissement du modèle de sortie avec l'indicateur de renouvellement automatique.
         * @param model L'indicateur de renouvellement automatique sélectionné
         */
        private fillModelWithRenouvellementAutomatique(model);
        /**
         * Enrichissement du modèle de sortie avec la dotation.
         * @param model La dotation sélectionné
         */
        private fillModelWithDotation(model);
        /**
         * Enrichissement du modèle de sortie avec le lieu de livraison.
         * @param model La dotation sélectionné
         */
        private fillModelWithLieuLivraison(model);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Personnalisation du produit chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OffreChequier.Directives {
    function mwPersonnalisationProduitChequier(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Personnalisation du produit chéquier présentation".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OffreChequier {
    /**
     * Interface du scope du contrôleur
     */
    interface IPersonnalisationProduitChequierPresentationControleurScope extends ng.IScope {
        idBloc: string;
        modeAcces: GestionGeneriqueOffres.Types.ModeAcces;
        modeAffichage: GestionGeneriqueOffres.Types.ModeAffichage;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        entiteTitulaire: ComposantsCommunsChequier.Modeles.EntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire;
        model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier;
        indicateurModeEcriture: boolean;
        codeActiviteCompte: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class PersonnalisationProduitChequierPresentationControleur {
        private $scope;
        private serviceAgent;
        private $timeout;
        private qService;
        private contratChequeInformationService;
        private contratChequeServiceControleChequeService;
        private persistanceService;
        private helperGgoService;
        private modalService;
        static $inject: string[];
        constructor($scope: IPersonnalisationProduitChequierPresentationControleurScope, serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService, qService: ng.IQService, contratChequeInformationService: ComposantsCommunsChequier.Services.ContratChequeInformationService, contratChequeServiceControleChequeService: ComposantsCommunsChequier.Services.ContratChequeServiceControleChequeService, persistanceService: ComposantsCommunsChequier.Services.PersistanceProduitChequierService, helperGgoService: ComposantsCommunsChequier.Services.HelperGgoChequierService, modalService: MyWay.UI.ModalService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de mise en gestion du produit service chéquier
         */
        mettreEnGestion(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode permettant de vérifier s'il y a un alert à la création d'un chequier
         * @param {information} ComposantsCommunsChequier.Modeles.ContratCheque.Information.IInformation
         * retour ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>
         */
        traiterAlertCreationChequier(information: ComposantsCommunsChequier.Modeles.ContratCheque.Information.IInformation): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode de validation du formulaire de l'écran produit service chéquier
         */
        validerFormulaire(): ng.IPromise<Array<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre>>;
        /**
         * Méthode permettant d'effectuer la création du produit/service chéquier
         * @param model Les données permettant la création d'une offre chéquier.
         */
        creerProduitServiceChequier(model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier): ng.IPromise<ComposantsCommunsChequier.Modeles.ContratChequeService.ControleCheque.IControleCheque>;
        /**
         * Méthode de validation de la création du produit service chéquier.
         * @param model Modèle de données pour la validation de la création du produit chéquier.
         */
        validerCreationProduitService(model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier): ng.IPromise<ComposantsCommunsChequier.Modeles.ContratCheque.Information.IInformation>;
        /**
         * Permet de générer les données de dossier de vente
         * @Param:
         * @Retrun: ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>
         *
         */
        sauvergarderDossierDeVenteChequier(): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>;
        /**
         * Permet de restaurer le dossier de vente à l'etat avant la dernière sauvegarde
         * @Param:
         * @Return:
         */
        restaurerDossierDeVenteChequier(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Personnalisation du produit chéquier présentation".
 * Cette directive est une directive de présentation qui est utilisée par GGO.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OffreChequier.Directives {
    function blocPersonnalisationProduitChequierPresentation(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Récapitulaitf du produit chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OffreChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IRecapitulaitfProduitChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        indicateurAffichage: boolean;
        entiteTitulaire: ComposantsCommunsChequier.Modeles.EntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire;
        modeleDeChequier: ComposantsCommunsChequier.Modeles.X106FORM.IModeleChequier;
        seuilDeRenouvellement: ComposantsCommunsChequier.Modeles.X108SEUI.ISeuilRenouvellement;
        renouvellementAutomatique: ComposantsCommunsChequier.Modeles.X107RNLT.IRenouvellement;
        dotation: number;
        lieuDeLivraison: ComposantsCommunsChequier.Controleurs.ILieuLivraisonItem;
        model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier;
        offreSouscrite: GestionGeneriqueOffres.Types.IOffreSouscrite;
        etablissement: GestionGeneriqueOffres.Types.IEtablissement;
        codeActiviteCompte: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class RecapitulatifProduitChequierControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static CODE_FAMILLE_CHEQUIER: string;
        static CODE_ROUTAGE_AGENCE: string;
        static CODE_ORIGINE_OPERATION_PDT: string;
        static $inject: string[];
        constructor($scope: IRecapitulaitfProduitChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsChequier.Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Recapitulatif du produit chéquier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module OffreChequier.Directives {
    function mwRecapitulatifProduitChequier(): ng.IDirective;
}
