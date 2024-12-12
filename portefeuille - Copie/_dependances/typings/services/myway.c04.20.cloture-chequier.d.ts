
declare module ClotureChequier {
    var app: any;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Clôture produit service chqeuier".
 */
declare module ClotureChequier.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IClotureProduitServiceChequierControleurScope extends ng.IScope {
        idBloc: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
    }
    /**
     * Déclaration du contrôleur
     */
    class ClotureProduitServiceChequierControleur {
        protected $scope: IClotureProduitServiceChequierControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        private qService;
        private contratChequeServiceClotureChequeService;
        private helperGgoService;
        private $timeout;
        static $inject: string[];
        constructor($scope: IClotureProduitServiceChequierControleurScope, serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService, contratChequeServiceClotureChequeService: ComposantsCommunsChequier.Services.ContratChequeServiceClotureChequeService, helperGgoService: ComposantsCommunsChequier.Services.HelperGgoChequierService, $timeout: ng.ITimeoutService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        mettreEnGestion(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        clotureChequier(): ng.IPromise<ComposantsCommunsChequier.Modeles.ContratCheque.FamilleChequier.IFamilleChequier>;
        /**
         * Permet de générer les données de dossier de vente
         * @Param:
         * @Retrun: ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>
         *
         */
        sauvergarderDossierDeVenteChequier(): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Clôture produit service chéquier".
 */
declare module ClotureChequier.Directives {
    function mwClotureProduitServiceChequier(): ng.IDirective;
}
