
declare module ProduitServiceChequier {
    var app: any;
}

declare module ProduitServiceChequier.Controleurs {
    interface IPopupAutorisationAvenantControleur extends ng.IScope {
        headerText: string;
        messageFonctionnel: ComposantsCommunsChequier.Modeles.ContratCheque.Information.IMessageFonctionnel;
    }
    class PopupAutorisationAvenantControleur {
        private $scope;
        private $modalInstance;
        private data;
        static $inject: string[];
        constructor($scope: IPopupAutorisationAvenantControleur, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        valider(action: string): void;
        annuler(): void;
    }
}

/**
 * Controleur de gestion du composant "Avenant du produit service chequier présentation".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceChequier.Controleurs {
    interface ICreationProduitServiceChequier extends ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier {
        estModifie: boolean;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface IAvenantProduitServiceChequierPresentationControleurScope extends ng.IScope {
        idBloc: string;
        modeAcces: GestionGeneriqueOffres.Types.ModeAcces;
        modeAffichage: GestionGeneriqueOffres.Types.ModeAffichage;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        personne: GestionGeneriqueOffres.Types.Tiers.Personne;
        offreSouscrite: GestionGeneriqueOffres.Types.IOffreSouscrite;
        caracteristiqueEntiteTitulaire: GestionGeneriqueOffres.Types.ICaracteristiqueEntiteTitulaire;
        listeCodeProduit: Array<string>;
        indicateurAffichage: boolean;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        model: ICreationProduitServiceChequier;
        identifiantPersonne: number;
        numeroCompte: string;
        indicateurModeEcriture: boolean;
        codeActiviteCompte: string;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        estModifie: boolean;
        contexteAppel: string;
        revenir: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class AvenantProduitServiceChequierPresentationControleur {
        private $scope;
        private serviceAgent;
        private $timeout;
        private qService;
        private persistanceService;
        private helperGgoService;
        private contratChequeInformationService;
        private contratChequeServiceControleChequeService;
        private modalService;
        static $inject: string[];
        MODE_PRECEDENT: string;
        constructor($scope: IAvenantProduitServiceChequierPresentationControleurScope, serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService, qService: ng.IQService, persistanceService: ComposantsCommunsChequier.Services.PersistanceProduitChequierService, helperGgoService: ComposantsCommunsChequier.Services.HelperGgoChequierService, contratChequeInformationService: ComposantsCommunsChequier.Services.ContratChequeInformationService, contratChequeServiceControleChequeService: ComposantsCommunsChequier.Services.ContratChequeServiceControleChequeService, modalService: MyWay.UI.ModalService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de mise en gestion du produit service chéquier
         * @return Une promesse avec un compte rendu de mise en gestion
         */
        mettreEnGestion(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour traiter la réponse de la web service
         * @param {information} ComposantsCommunsChequier.Modeles.ContratCheque.Information.IInformation
         * @return Une promesse avec un compte rendu de mise en gestion
         */
        onSuccessRequeteModifierChequier(information: ComposantsCommunsChequier.Modeles.ContratCheque.Information.IInformation): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode de validation du formulaire de l'écran produit service chéquier
         * @return Une promesse avec un retour sur les erreurs du formulaire
         */
        validerFormulaire(): ng.IPromise<Array<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre>>;
        /**
         * Méthode permettant d'effectuer la création du produit/service chéquier
         * @param model Les données permettant la création d'une offre chéquier.
         */
        modifierProduitServiceChequier(model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier): ng.IPromise<ComposantsCommunsChequier.Modeles.ContratChequeService.ControleCheque.IControleCheque>;
        /**
         * Méthode de validation de la modification du produit service chéquier.
         * @param model Modèle de données pour la modification de la création du produit chéquier.
         */
        validerModificationProduitService(model: ComposantsCommunsChequier.Modeles.CreationChequier.ICreationChequier): ng.IPromise<ComposantsCommunsChequier.Modeles.ContratCheque.Information.IInformation>;
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
 * Directive permettant d'encapsuler la gestion du composant "Avenant du produit service chequier présentation".
 * Cette directive est une directive de présentation qui est utilisée par GGO.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceChequier.Directives {
    function avenantProduitServiceChequierPresentation(): ng.IDirective;
}
