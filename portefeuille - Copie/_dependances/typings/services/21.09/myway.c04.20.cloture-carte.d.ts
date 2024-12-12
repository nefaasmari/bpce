
declare module ClotureCarte {
    var app: any;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Clôture produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ClotureCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IClotureProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        model: ComposantsCommunsCarte.Modeles.ClotureContratCarte.IData;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        identifiantTitulaire: string;
        edsDomiciliation: number;
        codeCapaciteJuridique: string;
        indicateurChargement: boolean;
        erreurComposant: boolean;
        numeroContratCarte: string;
        numeroCompte: string;
        contratCarte: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IContratCarte;
        carteDuContratCarte: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.ICarteDuContratCarte;
        dataTypeCloture: ComposantsCommunsCarte.Controleurs.IDataTypeClotureCarte;
        motifCloture: ComposantsCommunsCarte.Modeles.KTCLOT.IClotureCarte;
        nomMarital: string;
        codeDActionDeLIdentiteDuPorteur: string;
        revenir: boolean;
        modeEdition: boolean;
        typeDeCloture: ComposantsCommunsCarte.Modeles.ClotureContratCarte.TypeCloture;
        dateDeCloture: string;
        motifDeCloture: string;
        messageErreur: string;
        identifiantDuSupportDeCartePourCodeReconduit: string;
        indicateurPersonneProtegee: string;
        appelant: number;
        codeActeGestionOffre: string;
        serviceDerogatoire: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IServiceDerogatoireDuContratCarte;
        codePinModeEnvoi: string;
        codePinShow: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class ClotureProduitServiceCarteControleur {
        protected $scope: IClotureProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        protected contratCarteRechercheService: ComposantsCommunsCarte.Services.ContratCarteRechercheService;
        static $inject: string[];
        static MOTIF_CLOTURE_KTCLOT_CHANGEMENT_DE_PRODUIT: string;
        static MOTIF_CLOTURE_CARTE_PORTEUR_SOUS_TUTELLE: string;
        constructor($scope: IClotureProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService, contratCarteRechercheService: ComposantsCommunsCarte.Services.ContratCarteRechercheService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Callback de modification du type de clôture.
         */
        onChangeTypeCloture(data: ComposantsCommunsCarte.Controleurs.IDataTypeClotureCarte): void;
        /**
         * Callback de modification du motif de clôture.
         */
        onChangeMotifCloture(data: ComposantsCommunsCarte.Modeles.KTCLOT.IClotureCarte): void;
        /**
         * Méthode de requêtage du service de recherche de contrat carte
         */
        sendContratCarteRechercheRequest(): void;
        /**
         * Méthode de callback suite au succès de la requête de recherche de contrat carte.
         * @param response La réponse du web service contractcarte/recherche
         */
        private onSuccessContratCarteRechercheRequest(response);
        private getCodeVisuelCarte();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Clôture produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ClotureCarte.Directives {
    function mwClotureProduitServiceCarte(): ng.IDirective;
}



/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Résumé clôture produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ClotureCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IResumeClotureProduitServiceCarteControleurScope extends ng.IScope {
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
        messageErreur: string;
        modeEdition: boolean;
        identifiantDuSupportDeCartePourCodeReconduit: string;
        codeActivationECarteBleue: string;
        serviceDerogatoire: ComposantsCommunsCarte.Modeles.ContratCarte.Recherche.IServiceDerogatoireDuContratCarte;
        codePinModeEnvoi: string;
        codePinShow: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class ResumeClotureProduitServiceCarteControleur {
        protected $scope: IResumeClotureProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        static $inject: string[];
        constructor($scope: IResumeClotureProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
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
 * Directive permettant d'encapsuler la gestion du composant "Résumé clôture produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ClotureCarte.Directives {
    function mwResumeClotureProduitServiceCarte(): ng.IDirective;
}

/**
 * Contrôleur permettant d'encapsuler la gestion du composant "Récapitulatif clôture produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ClotureCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IRecapitulatifClotureProduitServiceCarteControleurScope extends ng.IScope {
        idBloc: string;
        index: string;
        codeGuichetInterbancaire: string;
        codeEtablissement: string;
        dateDeFinDeValidite: string;
        typeDeCloture: string;
        dateDeCloture: string;
        motifDeCloture: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class RecapitulatifClotureProduitServiceCarteControleur {
        protected $scope: IRecapitulatifClotureProduitServiceCarteControleurScope;
        protected serviceAgent: MyWay.Services.ServiceAgent;
        protected i18n: ComposantsCommunsCarte.Services.II18nCarteService;
        static $inject: string[];
        constructor($scope: IRecapitulatifClotureProduitServiceCarteControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Récapitulatif clôture produit service carte".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ClotureCarte.Directives {
    function mwRecapitulatifClotureProduitServiceCarte(): ng.IDirective;
}
