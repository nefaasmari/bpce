
declare module AvenantChequier {
    var app: any;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Avenant produit service chequier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IAvenantProduitServiceChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        codeOffre: number;
        offreSouscrite: number;
        codeUsage: string;
        modeComposition: string;
        edsDomiciliation: number;
        modeleDeChequier: ComposantsCommunsChequier.Modeles.X106FORM.IModeleChequier;
        seuilDeRenouvellement: ComposantsCommunsChequier.Modeles.X108SEUI.ISeuilRenouvellement;
        renouvellementAutomatique: any;
        dotation: number;
        lieuDeLivraison: ComposantsCommunsChequier.Controleurs.ILieuLivraisonItem;
        model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier;
        numeroCompte: string;
        indicateurChargement: boolean;
        erreurComposant: boolean;
        contratChequier: ComposantsCommunsChequier.Modeles.ContratChequeService.ControleCheque.IDetailChequier;
        codeActiviteCompte: string;
        periodeDeSuspension: ComposantsCommunsChequier.Controleurs.IDataPeriodeSuspension;
        estModifie: boolean;
        typeChequier: number;
        indicRenouvellementAuto: string;
        valeurSeuilRenouvellement: number;
        dotationTheorique: number;
        numeroAgenceDistribution: number;
        codeRoutageTheorique: string;
        dateDebutSuspensionEnvoi: string;
        dateFinSuspensionEnvoi: string;
        revenir: boolean;
        modeEdition: boolean;
        messageErreur: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class AvenantProduitServiceChequierControleur {
        protected $scope: IAvenantProduitServiceChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsChequier.Services.II18nChequierService;
        protected controleChequeService: ComposantsCommunsChequier.Services.ContratChequeServiceControleChequeService;
        static CODE_FAMILLE_CHEQUIER: string;
        static CODE_ROUTAGE_AGENCE: string;
        static CODE_ORIGINE_OPERATION_PDT: string;
        chequierModifier: boolean;
        dotationChequierModifier: boolean;
        modeleChequierModifier: boolean;
        lieuLivraisonChequieModifier: boolean;
        suspensionChequierModifier: boolean;
        renouvellementAutomatiqueModifier: boolean;
        seuilRenouvellementModifier: boolean;
        static $inject: string[];
        constructor($scope: IAvenantProduitServiceChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsChequier.Services.II18nChequierService, controleChequeService: ComposantsCommunsChequier.Services.ContratChequeServiceControleChequeService);
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
        onChangeRenouvellementAutomatique(model: any): void;
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
         * Méthode de callback sur le changement de la période de suspension
         * @param La nouvelle période de suspension sélectionnée.
         */
        onchangePeriodeSuspension(model: ComposantsCommunsChequier.Controleurs.IDataPeriodeSuspension): void;
        /**
         * Méthode de requêtage du web service de contrôle des chèques. Malgré son nom, cette ressource permet
         * d'interroger la QR restituant les contrats chèques d'un compte.
         */
        sendControleChequeServiceRequest(): void;
        /**
         * Méthode de callback suite au succès de la requête au web service.
         * @param data La réponse du web service
         */
        onSuccessControleChequeServiceRequest(data: ComposantsCommunsChequier.Modeles.ContratChequeService.ControleCheque.IControleCheque): void;
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
        /**
         * Enrichissement du modèle de sortie avec la période de suspension.
         * @param model La période de suspension sélectionnée
         */
        private fillModelWithPeriodeSuspension(model);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Avenant produit service chequier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantChequier.Directives {
    function mwAvenantProduitServiceChequier(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Recapitulatif avenant produit service chequier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IRecapitulatifAvenantProduitServiceChequierControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        codeOffre: number;
        offreSouscrite: number;
        codeUsage: string;
        modeComposition: string;
        edsDomiciliation: number;
        codeActiviteCompte: string;
        typeChequierClient: number;
        renouvellementClient: string;
        seuilClient: number;
        dotationClient: number;
        modeLivraisonClient: string;
        agenceLivraison: number;
        dateDebutSuspensionClient: string;
        dateFinSuspensionClient: string;
        indicateurChargement: boolean;
        erreurComposant: boolean;
        estModifie: boolean;
        model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier;
    }
    /**
     * Déclaration du contrôleur
     */
    class RecapitulatifAvenantProduitServiceChequierControleur {
        protected $scope: IRecapitulatifAvenantProduitServiceChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsChequier.Services.II18nChequierService;
        static $inject: string[];
        constructor($scope: IRecapitulatifAvenantProduitServiceChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsChequier.Services.II18nChequierService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Recapitulatif avenant produit service chequier".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module AvenantChequier.Directives {
    function mwRecapitulatifAvenantProduitServiceChequier(): ng.IDirective;
}
