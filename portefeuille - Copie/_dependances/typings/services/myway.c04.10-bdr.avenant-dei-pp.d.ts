
declare module AvenantDeiPP {
    var app: any;
}

declare module AvenantDeiPP.Filtres {
}

declare module AvenantDeiPP.Filtres {
}

/**
 * Contrôleur de la page d'avenant DEI PP
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP {
    class DeiPPAvenantControleur {
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Identifiant personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
        /**
         * Identifiant abonnement issu du contexte GGO/Contexte
         */
        identifiantAbonnement: string;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Identifiant client
         */
        identifiantClient: string;
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
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, modaleService: MyWay.UI.ModalService);
        /**
         * Méthode pour initialiser les données GGO
         */
        initialiserDonneesGGO(): void;
        /**
         * Méthode pour rafraichir la directive avec de nouvelles données entrées à partir du formulaire
         */
        executerDirective(): void;
        /**
         * Méthode permettant de rafraichir la directive
         * @return void
         */
        rafraichirDirective(): void;
        /**
         * Méthode pour le chargement des jeux de test par defaut
         * @param {number} id - l'identifiant du jeu de test à charger
         */
        setJeuDonnees(id: number): void;
        /**
         * Méthode permettant la mise en gestion
         * @return void
         */
        executerMiseEnGestion(): void;
    }
}

declare module AvenantDeiPP {
}

/**
 * Contrôleur de la directive mw-dei-pp-avenant
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantDeiPP.Controleurs {
    class MwDeiPPAvenantControleur {
        private $scope;
        private $rootScope;
        private avenantCaracteristiqueAbonnementService;
        private deiPPValiderAvenantService;
        private parametreMesureService;
        private serviceAgent;
        static $inject: string[];
        /**
         * Correspond à l’identifiant du bloc de votre directive
         */
        idBloc: string;
        /**
         * Code établissement issu du contexte GGO/Contexte
         */
        codeEtablissement: string;
        /**
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Identifiant client issu du contexte GGO/Contexte
         */
        identifiantClient: string;
        /**
         * Identifiant abonnement issu du contexte GGO/Contexte
         */
        identifiantAbonnement: string;
        /**
         * Identifiant personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Le code service Banque à Distance du projet
         */
        codeServiceBad: string;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * La référence externe de l'agent issus du context PDT
         */
        referenceExterneAgent: number;
        /**
         * L'identifiant de l'élément Structure issus du context PDT
         */
        identifiantElementStructure: number;
        /**
         * L'identifiant de l'élément Structure 2 issus du context PDT
         */
        identifiantElementStructure2: number;
        /**
         * Indicateur de blocage de l'abonnement
         */
        private indicateurErreurBlocageAbonnement;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * Indicateur de requète de suppression réussie
         */
        indicateurRequeteReussie: boolean;
        /**
         * Indicateur de requète de suppression en cours
         */
        indicateurRequeteEnCours: boolean;
        /**
         * L'objet erreur contenant les informations
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur de succes / echec de la récupération des variables du portail / GGO
         */
        private indicateurErreurParametresPortail;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, avenantCaracteristiqueAbonnementService: ComposantsCommunsDeiPro.Services.Application.IAvenantCaracteristiqueAbonnementService, deiPPValiderAvenantService: Services.Application.IDeiPPValiderAvenantService, parametreMesureService: Services.Application.IDeiPPParametreMesureService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode qui déclenche le chargement des informations venant du portail et de GGO
         */
        chargerAvenantDeiPP(): void;
        /**
         * Permet de lancer la mise en gestion depuis GGO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Méthode pour valider les modifications d'un abonnement DEI PP
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} le compte rendu de réponse pour GGO
         */
        validerModificationsAbonnement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour le rechargement des requêtes de la directive
         */
        rechargerDirective(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la page d'avenant DEI PP
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantDeiPP.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiPpAvenant(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pp-comptes-tiers
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Controleurs {
    /**
     * Interface des éléments se rapportant à une requête REST
     */
    interface IRequeteRestElement {
        indicateurRequeteEnCours: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
    }
    /**
     * Déclaration du contrôleur
     */
    class MwDeiPPComptesTiersControleur {
        private $scope;
        private deiPPAvenantCaracteristiqueAbonnementService;
        private deiPPCompteAbonnementService;
        private $timeout;
        private $filter;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO/Contexte
         */
        codeEtablissement: string;
        /**
         * Identifiant client issu du contexte GGO/Contexte
         */
        identifiantClient: string;
        /**
         * Identifiant personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Liste des comptes tiers
         */
        private listeCompteTiers;
        /**
         * Liste des comptes tiers filtree
         */
        private listeCompteTiersFiltree;
        /**
         * Éléments se rapportant à la requête de récupération de la liste des comptes tiers
         */
        private elementRequeteRecuperationListe;
        /**
         * Éléments se rapportant à la requête d'ajout d'un compte tiers
         */
        private elementRequeteAjoutCompte;
        /**
         * Éléments se rapportant à la requête de suppression d'un compte tiers
         */
        private elementRequeteSuppression;
        /**
         * Nombre indiquant le numéro de la page du tableau affiché
         */
        currentPage: number;
        /**
         * Nombre indiquant le nombre maximum d'élément affiché par page du tableau
         */
        itemPerPage: number;
        /**
         * Indicateur de la sélection de la totalité des comptes
         */
        private indicateurSelectionTotalite;
        /**
         * Indicateur de la sélection d'au moins un des comptes, mais pas de tous
         */
        private indicateurSelectionIndetermine;
        /**
         * Boolean qui permet d'affiche la ligne filtre ou non
         */
        private mwTableFiltre;
        /**
         * Contient des valeur entrées dans les champs de filtrage
         */
        private search;
        /**
         * Indicateur qui permet de savoir si la liste des compte tiers filtrée est vide ou non
         */
        indicateurRetourFiltreVide: boolean;
        /**
         * Numéro de la colonne qui doit afficher le filtre
         */
        private indexColumnFilter;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        constructor($scope: ng.IScope, deiPPAvenantCaracteristiqueAbonnementService: Services.Application.IDeiPPAvenantCaracteristiqueAbonnementService, deiPPCompteAbonnementService: Services.Application.IDeiPPCompteAbonnementService, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Méthode pour la récupération de la liste des comptes tiers
         */
        recupererListeComptesTiers(): void;
        /**
         * Méthode pour l'initalisation de l'ajout d'un compte
         */
        initierAjoutCompte(): void;
        /**
         * Méthode pour la suppression de comptes
         */
        supprimerCompte(): void;
        /**
         * Méthode pour la mise à jour des indicateurs de multi-sélection
         */
        mettreAjourMultiSelection(): void;
        /**
         * filtre l'affichage de l'IBAN
         */
        filtreAffichageIBAN(value: string): string;
        /**
         * Méthode d'activation du filtrage d'une colonne
         * @param {number} index - l'index
         * @param {string} id - l'id
         * @param {any} event - l'événement
         */
        onClickPictoFilter(index: number, id: string, event: any): void;
    }
}

/**
 * Directive pour la gestion de l'affichage des comptes tiers
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiPPComptesTiers(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pp-gestion-comptes
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiPPGestionComptesControleur {
        private $scope;
        private parametreMesureService;
        private modalService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant client issu du contexte GGO
         */
        identifiantClient: string;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantPersonne: number;
        /**
         * Etat du bouton Par Mesure (true = désactivé)
         */
        etatParMesure: boolean;
        /**
         * Etat du bouton Toutes Mesures (true = désactivé)
         */
        etatToutesMesures: boolean;
        /**
         * Booléen indiquant si la requête du service REST "/geranttutelle/v1/parametreMesure" est en cours
         */
        private indicateurRequeteEnCours;
        /**
         * Booléen indiquant si la requête du service REST "/geranttutelle/v1/parametreMesure" est réussi
         */
        private indicateurRequeteReussie;
        /**
         * Objet erreur de la requête REST en cas d'échec de cette drnière
         */
        private reason;
        /**
         * Objet de paramètrages de la gestion des mesures, issu du service REST "/geranttutelle/v1/parametreMesure" avec le paramètre recherche à "C"
         */
        private parametreMesureTypeCompte;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * Indicateur toute autorisation
         */
        indicateurTouteAutorisation: boolean;
        constructor($scope: ng.IScope, parametreMesureService: Services.Application.IDeiPPParametreMesureService, modalService: MyWay.UI.ModalService);
        /**
         * Méthode pour l'initialisation des paramétrages de la gestion des mesures
         */
        private initialiserParametrageGestionMesures();
        /**
         * Méthode pour la gestion et la sauvegarde du changement d'onglet
         * @param {string} nouvelOnglet - le nouvel onglet actif
         */
        changerOngletActif(nouvelOnglet: string): void;
        /**
         *
         */
        popChoixAutorisationDesMesures(): void;
        choixBoutonRadioParMesure(): void;
        choixBoutonRadioToutesMesures(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la gestion des comptes de mesures
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiPPGestionComptes(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pp-gestion-par-mesure
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Controleurs {
    /**
     * Interface pour la gestion des indicateurs et des erreurs du composant
     */
    interface IIndicateurErreurGestionParMesure {
        requeteListeMesureEnCours: boolean;
        requeteListeMesureReussie: boolean;
        erreurListeMesure: MyWay.Services.Erreur;
        requeteCompteEpargneMesureEnCours: boolean;
        requeteCompteEpargneMesureReussie: boolean;
        erreurCompteEpargneMesure: MyWay.Services.Erreur;
    }
    /**
     * Déclaration du contrôleur
     */
    class MwDeiPPGestionParMesureControleur {
        private $scope;
        private listeMesureRestService;
        private compteEpargneMesureItemService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant client issu du contexte GGO
         */
        identifiantClient: string;
        /**
         * Identifiant personne issu du contexte GGO
         */
        identifiantPersonne: number;
        /**
         * Liste des types de comptes issu du paramétrage de la gestion des mesures
         */
        listeTypeCompte: Array<Modeles.Rest.GerantTutelle.ParametreMesure.ITypeCompte>;
        /**
         * Ensemble des indicateurs du composants
         */
        private indicateur;
        /**
         * Objet de la liste des mesures, issu du service REST "/geranttutelle/v1/listeMesure"
         */
        private listeMesure;
        /**
         * Mesure sélectionnée
         */
        private mesureSelectionnee;
        /**
         * Liste des comptes épargne mesure associés à la mesure sélectionnée
         */
        private listeCompteEpargneMesureItem;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        constructor($scope: ng.IScope, listeMesureRestService: Services.Rest.GerantTutelle.ListeMesure.IListeMesureRestService, compteEpargneMesureItemService: Services.Application.ICompteEpargneMesureItemService);
        /**
         * Méthode pour l'initialisation de la liste des mesures
         */
        initialiserListeMesure(): void;
        /**
         * Méthode pour la modification de l'objet compte épargne mesure affiché
         */
        chargerCompteEpargneMesure(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la gestion des comptes par mesure
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiPPGestionParMesure(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-dei-pp-gestion-toutes-mesures
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantDeiPP.Controleurs {
    /**
     * Interface pour la gestion des indicateurs et des erreurs du composant
     */
    interface IIndicateurErreurGestionToutesMesures {
        requeteAutorisationsMesuresEnCours: boolean;
        requeteAutorisationsMesuresReussie: boolean;
        erreurAutorisationsMesures: MyWay.Services.Erreur;
    }
    /**
     * Interface des objets utilisés pour les listes déroulante bloc "Toutes Mesures"
     */
    interface ITypeCompteConverti {
        nomCommercial: string;
        codeTypeProduit: string;
        sousCodeProduit: string;
        isPrelevement: boolean;
        isVirement: boolean;
        isCheckedPrelevement: boolean;
        isCheckedVirement: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class MwDeiPPGestionToutesMesuresControleur {
        private $scope;
        private parametreMesureService;
        private $filter;
        static $inject: string[];
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Identifiant client
         */
        identifiantClient: string;
        /**
         * La liste des types de comptes reçus du service
         */
        listeTypeCompte: Array<Modeles.Rest.GerantTutelle.ParametreMesure.ITypeCompte>;
        /**
         * La liste des autorisations reçus du service
         */
        listeAutorisation: Array<Modeles.Rest.GerantTutelle.ParametreMesure.ITypeCompte>;
        /**
         * La liste des types de comptes autorisés en prélèvement et/ou en virement
         */
        listeComptesAutorises: Array<ITypeCompteConverti>;
        /**
         * Etat de la checkbox de selection / déselection totale de la liste des comptes autorisés au prélèvement (true tout sélectionné et false rien n'est sélectionné)
         */
        triStatePrelevement: boolean;
        /**
         * Etat de la checkbox de selection / déselection totale de la liste des comptes autorisés au virement (true tout sélectionné et false rien n'est sélectionné)
         */
        triStateVirement: boolean;
        /**
         * Etat de la checkbox de selection / déselection totale de la liste des comptes autorisés au prélèvement (true quand on est dans un état autre que tout ou rien sélectionné)
         */
        triStateIndeterminatePrelevement: boolean;
        /**
         * Etat de la checkbox de selection / déselection totale de la liste des comptes autorisés au virement (true quand on est dans un état autre que tout ou rien sélectionné)
         */
        triStateIndeterminateVirement: boolean;
        /**
         * Libelé du bouton Sélectionner tout / Désélectionner tout pour la liste des comptes autorisés au prélèvement
         */
        triStateLabelPrelevement: string;
        /**
         * Libelé du bouton Sélectionner tout / Désélectionner tout pour la liste des comptes autorisés au virement
         */
        triStateLabelVirement: string;
        /**
         * Ensemble des indicateurs du composants
         */
        private indicateur;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * Indicateur toute autorisation
         */
        indicateurTouteAutorisation: boolean;
        /**
         * Compteur Compte autorisé au prélèvement
         */
        compteurAutorisePrelevement: number;
        /**
         * Compteur Compte autorisé au virement
         */
        compteurAutoriseVirement: number;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, parametreMesureService: Services.Application.IDeiPPParametreMesureService, $filter: ng.IFilterService);
        /**
         * Méthode pour la récupération du statut des types de comptes
         */
        private initialiserAutorisationsMesures();
        /**
         * Méthode pour la création des deux listes déroulantes du composants toutes mesures
         */
        initialiserListeTypesComptes(): void;
        /**
         * Méthode de gestion de la multisélection pour la liste déroulante des type de comptes autorisés en prélèvement
         */
        multiselectionChangePrelevement(): void;
        /**
         * Méthode de gestion de la multisélection pour la liste déroulante des type de comptes autorisés en virement
         */
        multiselectionChangeVirement(): void;
        /**
         * Méthode de gestion de l'option "Sélectionnez / déselectionner tout" pour la liste déroulante des type de comptes autorisés en prélèvement
         * @param {any} event - l'événement
         */
        forceMultiSelectionPrelevement(event: any): void;
        /**
         * Méthode de gestion de l'option "Sélectionnez / déselectionner tout" pour la liste déroulante des type de comptes autorisés en virement
         * @param {any} event - l'événement
         */
        forceMultiSelectionVirement(event: any): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la gestion des comptes toutes mesures
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiPPGestionToutesMesures(): ng.IDirective;
}

/**
 * Service pour la gestion de l'objet issu du service REST "/contratbqdpro/v1/caracteristiqueAbonnement" pour DEI-PP Avenant
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Services.Application {
    /**
     * Interface du service
     */
    interface IDeiPPAvenantCaracteristiqueAbonnementService {
        recupererCaracteristiqueAbonnement: (codeEtablissement: string, identifiantClient: string, identifiantTiers: number) => MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
        sauvegarderModificationListeComptesTiers: (codeEtablissement: string, identifiantClient: string, identifiantTiers: number, codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum, identifiantAbonnement: string, numeroOffre: number, identifiantProduitService: number) => MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
    }
}

/**
 * Service contenant les fonctionnalités pour le service REST "/contratbqdpro/v1/compteAbonnement" dans le cadre de DEI PP
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Services.Application {
    /**
     * Interface des objets utilisés pour le bloc de listes des comptes de tiers de DEI PP avenant
     */
    interface ICompteTiers {
        indicateurSelection: boolean;
        compteAssocie: ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteAssocie;
    }
    /**
     * Interface du service
     */
    interface IDeiPPCompteAbonnementService {
        recupererCompteAbonnement: (codeEtablissement: string, identifiantPersonne: number, identifiantAbonne: string, codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum) => MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CompteAbonnement.ICompteAbonnement>;
        recupererListeCompteTiers: (codeEtablissement: string, identifiantPersonne: number, identifiantAbonne: string, codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum) => MyWay.Services.IPromesse<Array<ICompteTiers>>;
        ajouterCompteTiers: (afficherMessageInformation: boolean) => MyWay.Services.IPromesse<ICompteTiers>;
        supprimerCompteTiers: (listeComptetiersAJour: Array<ICompteTiers>) => Array<ICompteTiers>;
        getListeCompteTiers: () => Array<ICompteTiers>;
        setListeCompteTiers: (liste: Array<ICompteTiers>) => void;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des comptes épargne mesure affiché dans le tableau des comptes épargne mesure
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Services.Application {
    interface ICompteEpargneMesureItem {
        libelleCompte: string;
        compteEpagneMesure: Modeles.Rest.GerantTutelle.CompteEpargneMesure.ICompteEpargneMesure;
        indicateurModificationPrelevement: boolean;
        indicateurModificationVirement: boolean;
    }
    /**
     * Interface du service
     */
    interface ICompteEpargneMesureItemService {
        recuperListeItem: (query: Rest.GerantTutelle.CompteEpargneMesure.ICompteEpargneMesureRestServiceGetQuery, typeCompte: Array<Modeles.Rest.GerantTutelle.ParametreMesure.ITypeCompte>, identifiantClient: string) => MyWay.Services.IPromesse<Array<ICompteEpargneMesureItem>>;
        sauvegarderModification: (identifiantClient: string) => MyWay.Services.IPromesse<void>;
    }
}

/**
 * Service contenant les fonctionnalités pour le service REST "/geranttutelle/v1/parametreMesure" dans le cadre de DEI PP
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantDeiPP.Services.Application {
    /**
     * Interface du service
     */
    interface IDeiPPParametreMesureService {
        recupererParametreMesure: (codeEtablissement: string, identifiantClient: string, typeRecherche: Enumerations.Rest.GerantTutelle.ParametreMesure.TypeRechercheEnum) => MyWay.Services.IPromesse<Modeles.Rest.GerantTutelle.ParametreMesure.IParametreMesure>;
        getListeTypesComptesAutorises: () => Array<AvenantDeiPP.Controleurs.ITypeCompteConverti>;
        setListeTypesComptesAutorises: (listeTypesComptesAutorises: Array<AvenantDeiPP.Controleurs.ITypeCompteConverti>) => void;
        getParametreMesure: () => Modeles.Rest.GerantTutelle.ParametreMesure.IParametreMesure;
        setParametreMesure: (parametreMesure: Modeles.Rest.GerantTutelle.ParametreMesure.IParametreMesure) => void;
        getOngletActif: () => Enumerations.Rest.GerantTutelle.ParametreMesure.IndicateurAutorisationTuteurEnum;
        setOngletActif: (ongletActif: Enumerations.Rest.GerantTutelle.ParametreMesure.IndicateurAutorisationTuteurEnum) => void;
    }
}

/**
 * Service contenant les fonctionnalités pour la sauvegarde des modifications sur la page d'avenant DEI PP
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantDeiPP.Services.Application {
    /**
     * Interface du service
     */
    interface IDeiPPValiderAvenantService {
        sauvegarderModifications: (codeEtablissement: string, identifiantTiers: number, identifiantAbonnement: string, codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum, numeroOffre: number, identifiantProduitService: number, identifiantPersonne: number, identifiantClient: string, caracteristiqueAbonnement: ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement, referenceExterneAgent: number, identifiantElementStructure: number, identifiantElementStructure2: number, ongletMesureActif: Enumerations.Rest.GerantTutelle.ParametreMesure.IndicateurAutorisationTuteurEnum) => MyWay.Services.IPromesse<Array<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IErreurService>>;
    }
}

/**
 * Ensemble d'énumérations communes pour les services REST de la ressource primaire "/geranttutelle"
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Enumerations.Rest.GerantTutelle.Communs {
    /**
     * Détermine la capacité juridique d'une personne donnée
     * Pouvoir pour une personne physique de contracter seule et en son nom un produit/service bancaire
     * '00' MINEUR SOUS MESURE AIDE GESTION BUDGET FAMILIAL MAGBF
     * '01' MINEUR EMANCIPE
     * '02' MINEUR SOUS ADMINISTRATION LEGALE PURE ET SIMPLE
     * '03' MINEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE
     * '04' MINEUR SS TUTELLE COMPLETE(TUTEUR+SUBROGE TUT.+ JUGE)
     * '05' MINEUR SOUS TUTELLE D'ETAT
     * '06' MINEUR SOUS ADMINISTRATION AD HOC
     * '07' MAJEUR CAPABLE
     * '08' MAJEUR SOUS SAUVEGARDE DE JUSTICE
     * '09' MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT DONNE
     * '10' MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT SPECIAL
     * '11' MAJEUR SOUS CURATELLE SIMPLE
     * '12' MAJEUR SOUS CURATELLE RENFORCEE
     * '13' MAJEUR SOUS TUTELLE COMPLETE
     * '14' MAJEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE
     * '15' MAJEUR SOUS TUTELLE
     * '16' MAJEUR SS MESURE ACCOMP. SOCIAL PERSONNALISE (MASP)
     * '17' MAJEUR SS MESURE ACCOMP. JUDICIAIRE (MAJ)
     * '18' MAJEUR SS MESURE AIDE GESTION BUDGET FAMILIAL (MAGBF)
     * '19' MAJEUR SS MANDAT DE PROTECTION FUTURE SIMPLE
     * '20' MAJEUR SS MANDAT DE PROTECTION FUTURE ETENDU
     * Valeurs obsolètes :
     * 09 / MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT DONNE
     */
    enum CodeCapaciteEnum {
        MINEUR_SS_MAGBF,
        MINEUR_EMANCIPE,
        MINEUR_SS_ADMINISTRATION_LEGALE_SIMPLE,
        MINEUR_SS_ADMINISTRATION_LEGALE_SS_CONT_JUDICIAIRE,
        MINEUR_SS_TUTELLE_COMPLETE,
        MINEUR_SS_TUTELLE_ETAT,
        MINEUR_SS_ADMINISTRATION_AD_HOC,
        MAJEUR_CAPABLE,
        MAJEUR_SS_SAUVEGARDE_DE_JUSTICE,
        MAJEUR_SS_SAUVEGARDE_DE_JUSTICE_MANDAT_DONNE,
        MAJEUR_SS_SAUVEGARDE_DE_JUSTICE_MANDAT_SPECIAL,
        MAJEUR_SS_CURATELLE_SIMPLE,
        MAJEUR_SS_CURATELLE_RENFORCEE,
        MAJEUR_SS_TUTELLE_COMPLETE,
        MAJEUR_SS_ADMINISTRATION_LEGALE_SS_CONT_JUDICIAIRE,
        MAJEUR_SS_TUTELLE,
        MAJEUR_SS_MASP,
        MAJEUR_SS_MAJ,
        MAJEUR_SS_MAGBF,
        MAJEUR_SS_MANDAT_DE_PROTECTION_FUTURE_SIMPLE,
        MAJEUR_SS_MANDAT_DE_PROTECTION_FUTURE_ETENDU,
    }
    /**
     * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
     * 'TIT' Titulaire
     * 'REP' Représentant légal
     * 'PRO' Mandataire
     * 'GER' Gérant de tutelle
     * 'AUT' Autres
     */
    enum CodeStatutAbonneEnum {
        TITULAIRE,
        REPRESENTANT_LEGAL,
        MANDATAIRE,
        GERANT_DE_TUTELLE,
        AUTRES,
    }
}

/**
 * Ensemble d'énumérations concernant le service REST "/geranttutelle/v1/parametreMesure"
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Enumerations.Rest.GerantTutelle.ParametreMesure {
    /**
     * Indicateur du type de recherche pour la requête du service REST "/geranttutelle/v1/parametreMesure"
     * 'A' pour restitution de la liste des autorisations
     * 'C' pour restitution de la liste des types de compte épargne
     */
    enum TypeRechercheEnum {
        LISTE_AUTORISATIONS,
        LISTE_TYPES_COMPTES_EPARGNE,
    }
    /**
     * Indicateur du type d'autorisation mise en place.
     * 'M' autorisations positionnées mesure par mesure
     * 'T' autorisations positionnées pour toutes les mesures
     * 'N' Néant, aucune autorisation n'est positionnée
     */
    enum IndicateurAutorisationTuteurEnum {
        MESURE_PAR_MESURE,
        TOUTES_MESURES,
        NEANT,
    }
    /**
     * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
     * 'T' Titulaire
     * 'R' Remplaçant
     * 'S' Suppléant
     * 'A' Affectation temporaire
     */
    enum CodeQualiteAgentEnum {
        TITULAIRE,
        REMPLACANT,
        SUPPLEANT,
        AFFECTATION_TEMPORAIRE,
    }
}

/**
 * Ensemble d'énumérations concernant le service REST "/geranttutelle/v1/compteEpargneMesure"
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Modeles.Rest.GerantTutelle.CompteEpargneMesure {
    interface ICompteEpargneMesure {
        /**
         * Numéro de RIB sur 21 caractères
         */
        numeroRIB: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire: string;
        /**
         * Indicateur produit interrogeable sur BQD
         */
        indicateurInterroBQD: ComposantsCommunsDeiPro.Enumerations.Rest.Communs.indicateurEnum;
        /**
         * Indicateur produit prélevable sur BQD
         */
        indicateurPrelevement: ComposantsCommunsDeiPro.Enumerations.Rest.Communs.indicateurEnum;
        /**
         * Indicateur produit virable sur BQD
         */
        indicateurVirement: ComposantsCommunsDeiPro.Enumerations.Rest.Communs.indicateurEnum;
        /**
         * Indicateur qui permet de déroger à l'option de prélèvement par défaut appliquée à l'abonné
         */
        indicateurDerogPrelevement: ComposantsCommunsDeiPro.Enumerations.Rest.Communs.indicateurEnum;
        /**
         * Indicateur qui permet de déroger à l'option de virement par défaut appliquée à l'abonné
         */
        indicateurDerogVirement: ComposantsCommunsDeiPro.Enumerations.Rest.Communs.indicateurEnum;
        /**
         * Identifiant d'un Etablissement bancaire géré par le système Mysys
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         * Référence externe connue du client abonné
         */
        identifiantClient: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         * Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect
         */
        identifiantPersonne: number;
        /**
         * Rice du compte
         */
        rice: IRice;
        /**
         * Détermine un service de Banque à Distance.
         * Direct Ecureuil, Phone Ecureuil ...
         * Ex : BLS, DEIPP, DEISP, DEM, DEMP, PHONE, PHONP, WEB0, WEB0P
         */
        codeServiceBAD: string;
    }
    interface IRice {
        /**
         * Identifiant d'un Etablissement bancaire géré par le système Mysys
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Référence d'identification d'un compte, service, crédit ... détenu par un client d'un Etablissement du GCE.
         */
        referenceProduitService: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/geranttutelle/v1/listeMesure"
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Modeles.Rest.GerantTutelle.ListeMesure {
    interface IListeMesure {
        /**
         * Liste de mesures
         */
        mesure: Array<IMesure>;
    }
    interface IMesure {
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement
         * Référence interne MYSYS
         */
        identifiantPersonne: number;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         * Référence externe connue du client abonné
         */
        identifiantClient: string;
        /**
         * Dénomination banalisée de la personne :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designation: string;
        /**
         * Détermine la capacité juridique d'une personne donnée
         * Pouvoir pour une personne physique de contracter seule et en son nom un produit/service bancaire
         * '00' MINEUR SOUS MESURE AIDE GESTION BUDGET FAMILIAL MAGBF
         * '01' MINEUR EMANCIPE
         * '02' MINEUR SOUS ADMINISTRATION LEGALE PURE ET SIMPLE
         * '03' MINEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE
         * '04' MINEUR SS TUTELLE COMPLETE(TUTEUR+SUBROGE TUT.+ JUGE)
         * '05' MINEUR SOUS TUTELLE D'ETAT
         * '06' MINEUR SOUS ADMINISTRATION AD HOC
         * '07' MAJEUR CAPABLE
         * '08' MAJEUR SOUS SAUVEGARDE DE JUSTICE
         * '09' MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT DONNE
         * '10' MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT SPECIAL
         * '11' MAJEUR SOUS CURATELLE SIMPLE
         * '12' MAJEUR SOUS CURATELLE RENFORCEE
         * '13' MAJEUR SOUS TUTELLE COMPLETE
         * '14' MAJEUR SS ADMINISTRATION LEGALE SS CONT. JUDICIAIRE
         * '15' MAJEUR SOUS TUTELLE
         * '16' MAJEUR SS MESURE ACCOMP. SOCIAL PERSONNALISE (MASP)
         * '17' MAJEUR SS MESURE ACCOMP. JUDICIAIRE (MAJ)
         * '18' MAJEUR SS MESURE AIDE GESTION BUDGET FAMILIAL (MAGBF)
         * '19' MAJEUR SS MANDAT DE PROTECTION FUTURE SIMPLE
         * '20' MAJEUR SS MANDAT DE PROTECTION FUTURE ETENDU
         * Valeurs obsolètes :
         * 09 / MAJEUR SOUS SAUVEGARDE DE JUSTICE MANDAT DONNE
         */
        codeCapacite: Enumerations.Rest.GerantTutelle.Communs.CodeCapaciteEnum;
        /**
         * Indique à quel titre l'abonné de la BAD intervient sur le compte affiché.
         * 'TIT' Titulaire
         * 'REP' Représentant légal
         * 'PRO' Mandataire
         * 'GER' Gérant de tutelle
         * 'AUT' Autres
         */
        codeStatutAbonne: Enumerations.Rest.GerantTutelle.Communs.CodeStatutAbonneEnum;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/geranttutelle/v1/parametreMesure"
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Modeles.Rest.GerantTutelle.ParametreMesure {
    interface IParametreMesure {
        /**
         * Liste des types de comptes
         */
        typeCompte: Array<ITypeCompte>;
        /**
         * Indicateur du type d'autorisation mise en place.
         * 'M' autorisations positionnées mesure par mesure
         * 'T' autorisations positionnées pour toutes les mesures
         * 'N' Néant, aucune autorisation n'est positionnée
         */
        indicateurAutorisationTuteur: Enumerations.Rest.GerantTutelle.ParametreMesure.IndicateurAutorisationTuteurEnum;
    }
    interface ITypeCompte {
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         * 'ACFF'     ASSURANCE CFF
         * 'AEEP'     ASSURANCE SUR EPARGNE
         * 'AEMO'     SECUR'MEDIA FORMULE 1
         * 'AENO'     SECUR'MEDIA FORMULE 2
         * 'AEOO'     SECUR'MEDIA FORMULE 1 FAMILLE
         * ...
         */
        codeTypeProduit: string;
        /**
         * Détermine une variante ou une version de produit service dans le Catalogue avec des caractéristiques spécifiques.
         */
        sousCodeProduit: string;
        /**
         * Désignation commerciale du produit / service
         * Libellé affiché dans Contrat dans les listes :
         *   - Offre du client.
         *   - Offre Catalogue,
         *   - P/S de substitution,
         */
        nomCommercial: string;
        /**
         * Indicateur qui permet de déroger à l'option de prélèvement par défaut appliquée à l'abonné
         */
        indicateurDerogPrelevement: string;
        /**
         * Indicateur qui permet de déroger à l'option de virement par défaut appliquée à l'abonné
         */
        indicateurDerogVirement: string;
        /**
         * Détermine une action faisant l'objet d'un traitement
         * (programme, sous-programme).
         * Code générique défini dans le cadre d'un contexte
         */
        codeAction: string;
    }
    interface IAutorisationMesure {
        /**
         * undefined
         */
        typeCompte: ITypeCompte;
        /**
         * Référence d'identification d'un client pour utiliser un service de la BAD / banque à distance.
         * Référence externe connue du client abonné
         */
        identifiantClient: string;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        identifiantElementStructure: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        identifiantElementStructure2: number;
        /**
         * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         * 'T' Titulaire
         * 'R' Remplaçant
         * 'S' Suppléant
         * 'A' Affectation temporaire
         */
        codeQualiteAgent: Enumerations.Rest.GerantTutelle.ParametreMesure.CodeQualiteAgentEnum;
        /**
         * Indicateur qui permet de déroger à l'option de prélèvement par défaut appliquée à l'abonné
         */
        indicateurPrelevement: string;
        /**
         * Indicateur qui permet de déroger à l'option de virement par défaut appliquée à l'abonné
         */
        indicateurVirement: string;
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/geranttutelle/v1/compteEpargneMesure"
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Services.Rest.GerantTutelle.CompteEpargneMesure {
    /**
     * Interface de la requête au service REST "/geranttutelle/v1/compteEpargneMesure" de type GET
     */
    interface ICompteEpargneMesureRestServiceGetQuery {
        codeEtablissement: string;
        identifiantClient: string;
        identifiantPersonne: number;
        codeCapacite: Enumerations.Rest.GerantTutelle.Communs.CodeCapaciteEnum;
        codeStatutAbonne: Enumerations.Rest.GerantTutelle.Communs.CodeStatutAbonneEnum;
    }
    /**
     * Interface du service
     */
    interface ICompteEpargneMesureRestService {
        sendGetRequest: (query: ICompteEpargneMesureRestServiceGetQuery) => MyWay.Services.IPromesse<Array<Modeles.Rest.GerantTutelle.CompteEpargneMesure.ICompteEpargneMesure>>;
        sendPostRequest: (data: Modeles.Rest.GerantTutelle.CompteEpargneMesure.ICompteEpargneMesure) => MyWay.Services.IPromesse<Modeles.Rest.GerantTutelle.CompteEpargneMesure.ICompteEpargneMesure>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/v1/geranttutelle/listeMesure"
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Services.Rest.GerantTutelle.ListeMesure {
    /**
     * Interface de la requête au service REST "/geranttutelle/v1/parametreMesure" de type GET
     */
    interface IListeMesureRestServiceGetQuery {
        codeEtablissement: string;
        identifiantClient: string;
        identifiantPersonne: number;
    }
    /**
     * Interface du service
     */
    interface IListeMesureRestService {
        sendGetRequest: (query: IListeMesureRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.GerantTutelle.ListeMesure.IListeMesure>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "/geranttutelle/v1/parametreMesure"
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantDeiPP.Services.Rest.GerantTutelle.ParametreMesure {
    /**
     * Interface de la requête au service REST "/geranttutelle/v1/parametreMesure" de type GET
     */
    interface IParametreMesureRestServiceGetQuery {
        codeEtablissement: string;
        identifiantClient: string;
        typeRecherche?: Enumerations.Rest.GerantTutelle.ParametreMesure.TypeRechercheEnum;
    }
    /**
     * Interface du service
     */
    interface IParametreMesureRestService {
        sendGetRequest: (query: IParametreMesureRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Rest.GerantTutelle.ParametreMesure.IParametreMesure>;
        sendPostRequest: (data: Array<Modeles.Rest.GerantTutelle.ParametreMesure.IAutorisationMesure>) => MyWay.Services.IPromesse<void>;
    }
}
