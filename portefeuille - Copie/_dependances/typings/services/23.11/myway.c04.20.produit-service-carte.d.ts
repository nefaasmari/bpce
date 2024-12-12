
declare module ProduitServiceCarte {
    var app: any;
}

declare module ComposantsCommunsCarte.Popup {
}

declare module ComposantsCommunsCarte.Popup {
}

declare module ComposantsCommunsCarte.Popup {
}

/**
 * Controleur de gestion du composant "Personnalisation du produit service carte présentation".
 * @author S0076105 (Nicolas Le Roux), voila !
 */
declare module ProduitServiceCarte.Controleurs {
    interface IAvenantContratCarteIData extends ComposantsCommunsCarte.Modeles.AvenantContratCarte.IData {
        estModifie: boolean;
    }
    /**
     * Interface du scope du contrôleur
     */
    interface IAvenantProduitServiceCartePresentationControleurScope extends ng.IScope {
        idBloc: string;
        modeAcces: GestionGeneriqueOffres.Types.ModeAcces;
        modeAffichage: GestionGeneriqueOffres.Types.ModeAffichage;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        personne: GestionGeneriqueOffres.Types.Tiers.Personne;
        listeCodeProduit: Array<string>;
        indicateurAffichage: boolean;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        model: IAvenantContratCarteIData;
        identifiantPersonne: number;
        numeroContratCarte: string;
        numeroCompte: string;
        indicateurModeEcriture: boolean;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        estModifie: boolean;
        contexteAppel: string;
        revenir: boolean;
        codeDuTypeDeProduitOuService: string;
        chargementEnCours: boolean;
        messageErreurDeChragement: string;
        codeCaractereForfaitaireOffre: string;
        appelant: number;
        afficherBlocAction: boolean;
        codeActeDeGestionOffre: string;
        codePinModeEnvoi: string;
        codePinShow: boolean;
        codePinModeEnvoiEcheance: string;
        indicActivServDons: string;
        idtPersRepresOrgBenef: number;
        montantDonUnitaireClientCarte: number;
        montantSeuilAlerteDonsCarte: number;
        indicateurSuspensionDons: string;
        isSecurPassActif: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class AvenantProduitServiceCartePresentationControleur {
        private $scope;
        private serviceAgent;
        private $timeout;
        private qService;
        private i18n;
        private helperGgoService;
        private persistanceService;
        private informationService;
        private helperContratCarteService;
        private contratCarteRechercheService;
        private modalService;
        private tiersParticulierInformationService;
        static $inject: string[];
        MODE_PRECEDENT: string;
        constructor($scope: IAvenantProduitServiceCartePresentationControleurScope, serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService, qService: ng.IQService, i18n: ComposantsCommunsCarte.Services.II18nCarteService, helperGgoService: ComposantsCommunsCarte.Services.HelperGgoCarteService, persistanceService: ComposantsCommunsCarte.Services.PersistanceProduitCarteService, informationService: ComposantsCommunsCarte.Services.ContratCarteInformationService, helperContratCarteService: ComposantsCommunsCarte.Services.HelperContratCarteService, contratCarteRechercheService: ComposantsCommunsCarte.Services.ContratCarteRechercheService, modalService: MyWay.UI.ModalService, tiersParticulierInformationService: ComposantsCommunsCarte.Services.TiersParticulierInformationService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de mise en gestion du produit service carte
         * @return Une promesse avec un compte rendu de mise en gestion
         */
        mettreEnGestion(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        private versionSegment(identifiantDossierVente);
        /**
         * Méthode de mise en gestion Bis du produit service carte
         * @return Une promesse avec un compte rendu de mise en gestion
         */
        mettreEnGestionBis(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour appeller enregistrer les modifications de la carte
         * @param {requestData} de type   ComposantsCommunsCarte.Modeles.ContratCarte.Information.IInformation
         * @return Une promesse avec un compte rendu de mise en gestion
         */
        enregistrerModificationCarte(requestData: ComposantsCommunsCarte.Modeles.ContratCarte.Information.IInformation): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         *  Méthode pour afficher une pop'in au utilisateur pour forcer ou non la fabriquation de la carte
         *  @param {libelleMotifBlocageContratCarte} de type string
         *  @return Une promesse avec un boolean
         */
        forcerModificationCarte(libelleMotifBlocageContratCarte: string): ng.IPromise<boolean>;
        /**
         * Méthode de validation du formulaire de l'écran produit service carte
         * @return Une promesse avec un retour sur les erreurs du formulaire
         */
        validerFormulaire(): ng.IPromise<Array<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre>>;
        /**
         * Méthode des données génériques de l'écran produit service carte
         * @return Une promesse avec un retour sur les données métiers
         */
        sauvergarderDossierDeVente(): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>;
        /**
         * Permet de restaurer le dossier de vente à l'etat avant la dernière sauvegarde
         * @param:
         * @return:
         */
        restaurerDossierDeVente(): void;
        private getDonneesDeSauvegardeProduitService();
        private verifierModificationCarte();
        getVisuelCarteDuProduitCarte(codeEtablissement: string, codeProduitCarte: string, codeDuVisuel: string): ng.IPromise<string>;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Avenant du produit service carte présentation".
 * Cette directive est une directive de présentation qui est utilisée par GGO.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceCarte.Directives {
    function avenantProduitServiceCartePresentation(): ng.IDirective;
}

/**
 * Controleur de gestion du composant "Clôture du produit service carte présentation".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IClotureProduitServiceCartePresentationControleurScope extends ng.IScope {
        idBloc: string;
        modeAcces: GestionGeneriqueOffres.Types.ModeAcces;
        modeAffichage: GestionGeneriqueOffres.Types.ModeAffichage;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        personne: GestionGeneriqueOffres.Types.Tiers.Personne;
        etablissement: GestionGeneriqueOffres.Types.Etablissement;
        indicateurAffichage: boolean;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        model: ComposantsCommunsCarte.Modeles.ClotureContratCarte.IData;
        identifiantPersonne: number;
        numeroContratCarte: string;
        numeroCompte: string;
        indicateurModeEcriture: boolean;
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        contexteAppel: string;
        revenir: boolean;
        codeDuTypeDeProduitOuService: string;
        chargementEnCours: boolean;
        messageErreurDeChragement: string;
        codePersonnaliteJuridiqueClient: string;
        designationEntiteTitulaire: string;
        appelant: number;
        codeActeDeGestionOffre: string;
        indicateurPersonneProtegee: string;
        codePinModeEnvoi: string;
        codePinShow: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class ClotureProduitServiceCartePresentationControleur {
        private $scope;
        private serviceAgent;
        private $timeout;
        private qService;
        private i18n;
        private helperGgoService;
        private persistanceService;
        private informationService;
        private helperContratCarteService;
        private entretienCommercialService;
        private tiersParticulierInformationService;
        static $inject: string[];
        private eventPS;
        MODE_PRECEDENT: string;
        constructor($scope: IClotureProduitServiceCartePresentationControleurScope, serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService, qService: ng.IQService, i18n: ComposantsCommunsCarte.Services.II18nCarteService, helperGgoService: ComposantsCommunsCarte.Services.HelperGgoCarteService, persistanceService: ComposantsCommunsCarte.Services.PersistanceProduitCarteService, informationService: ComposantsCommunsCarte.Services.ContratCarteInformationService, helperContratCarteService: ComposantsCommunsCarte.Services.HelperContratCarteService, entretienCommercialService: ComposantsCommunsCarte.Services.EntretienCommercialService, tiersParticulierInformationService: ComposantsCommunsCarte.Services.TiersParticulierInformationService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        /**
         * Méthode de mise en gestion du produit service carte
         * @return Une promesse avec un compte rendu de mise en gestion
         */
        mettreEnGestion(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode de validation du formulaire de l'écran produit service carte
         * @return Une promesse avec un retour sur les erreurs du formulaire
         */
        validerFormulaire(): ng.IPromise<Array<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre>>;
        /**
         * Méthode pour d'enregistrer le resulat commercial du cloture produit service carte.
         * @param  pas de paramètre d'entrée
         * @return pas de retoutre
         */
        enregistrerResultatCommercial(): void;
        /**
         * Permet de générer les données de dossier de vente
         * @param:
         * @return: ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>
         */
        sauvergarderDossierDeVente(): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>;
        /**
         * Permet de restaurer le dossier de vente à l'etat avant la dernière sauvegarde
         * @param:
         * @return:
         */
        restaurerDossierDeVente(): void;
        buildDonneesDeSauvegardeProduitService(): ComposantsCommunsCarte.Modeles.ContratCarte.Information.IInformation;
        private verifierPossibiliteClotureContratCartre(situationCarte, typeCloture);
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Clôture du produit service carte présentation".
 * Cette directive est une directive de présentation qui est utilisée par GGO.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceCarte.Directives {
    function clotureProduitServiceCartePresentation(): ng.IDirective;
}


declare module ProduitServiceCarte.Directives {
    function controlesPreRequisProduitServiceCarte(serviceAgent: MyWay.Services.ServiceAgent): ng.IDirective;
}

/**
 * Controleur de gestion du composant "Personnalisation du produit service carte présentation".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface IPersonnalisationProduitServiceCartePresentationControleurScope extends ng.IScope {
        idBloc: string;
        modeAcces: GestionGeneriqueOffres.Types.ModeAcces;
        modeAffichage: GestionGeneriqueOffres.Types.ModeAffichage;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        personne: GestionGeneriqueOffres.Types.Tiers.Personne;
        etablissement: GestionGeneriqueOffres.Types.Etablissement;
        listeCodeProduit: Array<string>;
        indicateurAffichage: boolean;
        codeProduitCarteSelectionne: string;
        codeVisuelSelectionne: string;
        indicateurModeEcriture: boolean;
        model: ComposantsCommunsCarte.Services.IContratCarteServiceEligibiliteProduitQuery;
        eligibiliteContratCarte: ComposantsCommunsCarte.Modeles.ContratCarteService.EligibiliteProduit.IEligibiliteProduit;
        contexteAppel: string;
        revenir: boolean;
        numeroDuCompte: string;
        codeDuTypeDeProduitOuService: string;
        designationEntiteTitulaire: string;
        appelant: number;
        codeCaractereForfaitaireOffre: string;
        chargementEnCours: boolean;
        messageErreurDeChragement: string;
        identifiantProduitService: number;
        carteAgirClient: ComposantsCommunsCarte.Modeles.CarteAgir.IDonneesDePartage;
        identifiantPersonne: number;
        organismeBeneficiaireCarteAgir: ComposantsCommunsCarte.Modeles.CarteAgir.ICarteAgir;
        messageErreurAnalyserComportementBancaire: string;
        codePersonnaliteJuridiqueClient: string;
        contexteEditiqueCarte: any;
        estIziCarte: boolean;
        dataEditiqueContratCartePro: ComposantsCommunsCarte.Modeles.ContratCartePro.IContratCarte;
        codeLieuAdressage: string;
        referenceExterneAgent: string;
        typeLivraison: string;
        codePinModeEnvoi: string;
        codePinShow: boolean;
        isSecurPassActif: boolean;
        typeCarteRetraitPaiement: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class PersonnalisationProduitServiceCartePresentationControleur {
        private $scope;
        private serviceAgent;
        private $timeout;
        private i18n;
        private qService;
        private persistanceService;
        private eligibiliteService;
        private informationService;
        private helperContratCarteService;
        private helperGgoService;
        private modalService;
        private entiteTitulaireServiceIntervenantEntiteTit;
        private entretienCommercialService;
        private creditConsoControleCompteService;
        private tiersParticulierInformationService;
        private donneesDelocaliseesService;
        private demandeMultiCanalTacheService;
        private demandeMultiCanalRechercheService;
        static $inject: string[];
        showDirective: boolean;
        MODE_PRECEDENT: string;
        compteur: number;
        constructor($scope: IPersonnalisationProduitServiceCartePresentationControleurScope, serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService, i18n: ComposantsCommunsCarte.Services.II18nCarteService, qService: ng.IQService, persistanceService: ComposantsCommunsCarte.Services.PersistanceProduitCarteService, eligibiliteService: ComposantsCommunsCarte.Services.ContratCarteServiceEligibiliteProduit, informationService: ComposantsCommunsCarte.Services.ContratCarteInformationService, helperContratCarteService: ComposantsCommunsCarte.Services.HelperContratCarteService, helperGgoService: ComposantsCommunsCarte.Services.HelperGgoCarteService, modalService: MyWay.UI.ModalService, entiteTitulaireServiceIntervenantEntiteTit: ComposantsCommunsCarte.Services.EntiteTitulaireServiceIntervenantEntiteTit, entretienCommercialService: ComposantsCommunsCarte.Services.EntretienCommercialService, creditConsoControleCompteService: ComposantsCommunsCarte.Services.CreditConsoService.CreditConsoControleCompteService, tiersParticulierInformationService: ComposantsCommunsCarte.Services.TiersParticulierInformationService, donneesDelocaliseesService: ComposantsCommunsCarte.Services.DonneesDelocaliseesService, demandeMultiCanalTacheService: ComposantsCommunsCarte.Services.DemandeMultiCanalTacheService, demandeMultiCanalRechercheService: ComposantsCommunsCarte.Services.DemandeMultiCanalRechercheService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
        private initialiserDataGgho();
        private initialiserDataNotGgho();
        private finInitialisationData();
        /**
         * Méthode de validation du formulaire de l'écran produit service carte
         */
        private validerFormulaire();
        /**
         * Méthode d'analyse du comportement bancaire du client.
         */
        private analyserComportementBancaire();
        /**
         * Méthode de traitement suite au succès de la requête d'éligibilité.
         * TODO: Code métier, à déplacer dans un service métier !
         * @param data La réponse du web service d'éligibilité
         * @return  ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre>
         */
        private onSuccessEligibiliteRequest(data);
        /**
         * Méthode  pour afficher un popup pour choisir entre rattacher ou transformer la carte
         * @return ng.IPromise<string>
         */
        private transformerOuRattacherCarte();
        /**
         * Méthode de traitement la resultat de de comportement banacaire.
         * @param {comportementBancaire} de type  ComposantsCommunsCarte.Modeles.ContratCarteService.EligibiliteProduit.IComportementBancaire
         * @return Une erreur GGO
         */
        traiterResultatAnalyseConnaissanceClient(comportementBancaire: ComposantsCommunsCarte.Modeles.ContratCarteService.EligibiliteProduit.IComportementBancaire): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre>;
        controleCompteCreditConso(): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre>;
        /**
         * Méthode pour afficher popup pour choisir l'emprunteur principal.
         * @param  pas de paramètre d'entrée
         * @return ng.IPromise<number> retour l'identifiant d'emprunteur principal
         */
        selectionEmprunteurPrincipal(): ng.IPromise<number>;
        /**
         * Méthode permettant d'effectuer la mise en gestion du produit service carte
         */
        private mettreEnGestion();
        /**
         * Méthode permettant d'effectuer la mise en gestion du produit service carte
         */
        private mettreEnGestionBis();
        /**
         * Clôture automatique d'une tâche MyFlow
         */
        private clotureTacheMyflow(numeroDuCompte);
        /**
         * Génération de l'identifiant pour la demande de clôture de la tâche MyFlow
         *
         * @param numCompte
         */
        private genererIdentifiantDemande(numCompte);
        /**
         * Méthode pour determiner la version segment de QR KT11 (souscription carte).
         * @param  pas de paramètre d'entrée
         * @return string version segment
         */
        private versionSegmentKT11(identifiantDossierVente);
        /**
         * Méthode pour d'enregistrer le resulat commercial du création produit service carte .
         * @param  pas de paramètre d'entrée
         * @return pas de retoutre
         */
        enregistrerResultatCommercial(): void;
        /**
         * Permet de générer les données de dossier de vente
         * @Param:
         * @Retrun: ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>
         *
         */
        sauvergarderDossierDeVenteCarte(): ng.IPromise<GestionGeneriqueOffres.Types.DossierDeVente.ISauvegardeDonneesGeneriques>;
        /**
         * Permet de restaurer le dossier de vente à l'etat avant la dernière sauvegarde
         * @Param:
         * @Return:
         */
        restaurerDossierDeVente(): void;
        buildDonneesDeSauvegardeProduitService(): ComposantsCommunsCarte.Modeles.ContratCarte.Information.IInformation;
        valoriserValeurDeCodeDEcritureEnBaseDesInstances(): ng.IPromise<boolean>;
        private genererDonneesEditiqueContratCarte(personnne);
        private verifierServiceBLSDansPanier();
        /**
         * Mise en place d'une popup non bloquante uniquement pour les cartes PROs, avec le message :
         *
         * Pour valider ses paiements à distance, vous devez vous assurer que le porteur carte Business soit obligatoirement utilisateur :
         *   - De *CE net* avec a minima la seule habilitation « Carte bancaire 3DS »
         *   - Ou de DEI PRO (pour les EI sans usager secondaire)
         *   - Ou d’un lecteur SOL PRO CAP
         *
         * "CE Net" sera remplacer par :
         *   - *Smart Entreprises* pour BCP                (Code etab 12579)
         *   - *Coop@ccess* pour le Crédit Coopératif      (Code etab 42559)
         *   - *BTP net* pour BTP Banque                   (Code etab 30258)
         *
         * Test des cartes PROs avec this.$scope.codeProduitCarteSelectionne.substr(0, 1) :
         *
         *  - TYPE_CARTE_PRO_IMMEDIAT = 2
         *  - TYPE_CARTE_PRO_DIFFERE  = 3
         *
         * Toutes les cartes PROs sauf les cartes de type retrait (typeCarteRetraitPaiement = 1) ou de type dépôt (typeCarteRetraitPaiement = 5)
         */
        private affichagePopupSouscriptionCarteBusiness();
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Personnalisation du produit service carte présentation".
 * Cette directive est une directive de présentation qui est utilisée par GGO.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceCarte.Directives {
    function personnalisationProduitServiceCartePresentation(): ng.IDirective;
}

/**
 * Controleur de gestion du composant "Selection du produit service carte présentation".
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceCarte.Controleurs {
    /**
     * Interface du scope du contrôleur
     */
    interface ISelectionProduitServiceCartePresentationControleurScope extends ng.IScope {
        idBloc: string;
        modeAcces: GestionGeneriqueOffres.Types.ModeAcces;
        modeAppel: GestionGeneriqueOffres.Types.ModeAppel;
        detenteur: GestionGeneriqueOffres.Types.Tiers.Personne | GestionGeneriqueOffres.Types.Tiers.Procuration;
        assemblage: GestionGeneriqueOffres.Types.CatalogueNode;
        listeProduitsServices: Array<GestionGeneriqueOffres.Types.CleValeur>;
        produitParDefaut: GestionGeneriqueOffres.Types.CatalogueNode;
        produitSelectionne: GestionGeneriqueOffres.Types.CleValeur;
        donneesSelection: ComposantsCommunsCarte.Modeles.ProduitCarteParametre.CarteEtablissement.ICarteVisuelDeLaFamille;
        indicateurAffichage: boolean;
        indicateurSelection: boolean;
        listeCodeProduit: Array<string>;
        codeProduitCarteSelectionne: any;
        contexteAppel: string;
        codeEtablissement: string;
        numeroOffreFamille?: string;
        typeTitulaire?: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class SelectionProduitServiceCartePresentationControleur {
        private $scope;
        private serviceAgent;
        private i18n;
        static $inject: string[];
        constructor($scope: ISelectionProduitServiceCartePresentationControleurScope, serviceAgent: MyWay.Services.ServiceAgent, i18n: ComposantsCommunsCarte.Services.II18nCarteService);
        /**
         * Méthode d'initialisation des données du controleur.
         */
        initialiserData(): void;
    }
}

/**
 * Directive permettant d'encapsuler la gestion du composant "Selection du produit service carte présentation".
 * Cette directive est une directive de présentation qui est utilisée par GGO.
 * @author S0076105 (Nicolas Le Roux)
 */
declare module ProduitServiceCarte.Directives {
    function selectionProduitServiceCartePresentation(): ng.IDirective;
}
