
declare module creditsGac {
    var app: any;
}

declare module creditsGac.Controleurs {
    /**
     * Interface contenant les données de l'écran actuelle
     * Ces données sont à définir dans le resolve des routes dans app.ts
     */
    interface IRouteActuelle extends ng.route.ICurrentRoute {
        locals: {
            $scope: ng.IScope;
            $template: string;
        };
    }
    /** Service route de l'application */
    interface IApplicationRoute extends ng.route.IRouteService {
        current: IRouteActuelle;
    }
    /** Controleur de l'application */
    class ApplicationControleur {
        private serviceAgentExtended;
        private scope;
        private $route;
        private epsAttributsService;
        private modalService;
        private affichageService;
        private $location;
        private contextService;
        private applicationService;
        private navigationService;
        private toolsService;
        private habilitationService;
        private modificationService;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de l'application */
        caracteristiquesGac: EpsCommun.Modeles.Attributs.ICaracteristiqueGAC;
        raisonSociale: string;
        partenariat: EpsCommun.Modeles.Partenariat.IPartenariatEPS;
        libelleRetourPartenariat: string;
        /** Données internes */
        private habilitations;
        private context;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, scope: ng.IScope, $route: IApplicationRoute, epsAttributsService: EpsCommun.Services.EpsAttributsService, modalService: MyWay.UI.IModalService, affichageService: Services.AffichageService, $location: ng.ILocationService, contextService: Services.ContextService, applicationService: Services.ApplicationService, navigationService: MyWay.UI.INavigationService, toolsService: Services.IToolsService, habilitationService: EpsCommun.Services.HabilitationService, modificationService: Services.ModificationService);
        /**
         * Gestion du passage en mode modification sur l'application
         */
        modifierAttributs(): void;
        /**
         * Gestion du passage en mode consultation sur l'application
         */
        retourEnConsultation(): void;
        /**
         * Lancement de l'enregistrement des modifications
         */
        enregistrerModifications(): void;
        /**
         * Fermer la gestion des attributs client (on revient au point d'entrée)
         */
        fermerAttributsClient(): void;
        /**
         * Watcher sur l'affichage du menu
         */
        private watchAfficherMenu();
    }
}

declare module creditsGac.Controleurs {
    class NavigationControleur {
        private navigationService;
        /** Injection de dépendances */
        static $inject: string[];
        navigation: Array<MyWay.UI.TotemComponent>;
        constructor(navigationService: MyWay.UI.INavigationService);
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran des bibliothèques d'actes
     * @author S0077537
     */
    class BibliothequesActesControleur {
        private serviceAgentExtended;
        private donneesService;
        private bibActesService;
        private affichageService;
        private modificationService;
        /** Injection de dépendances */
        static $inject: string[];
        /** Loader */
        loading: boolean;
        /** Tableaux des actes non filtrés */
        private modelesActesStandard;
        private modelesActesSpecifique;
        private modelesActesElargie;
        /** Tableaux des actes filtrés utiles à l'affichage */
        modelesActesStandardDispo: Modeles.IAffichageActe[];
        modelesActesStandardNonDispo: Modeles.IAffichageActe[];
        modelesActesSpecifiqueDispo: Modeles.IAffichageActe[];
        modelesActesSpecifiqueNonDispo: Modeles.IAffichageActe[];
        modelesActesElargieDispo: Modeles.IAffichageActe[];
        modelesActesElargieNonDispo: Modeles.IAffichageActe[];
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, donneesService: Services.Application.IDonneesService, bibActesService: Services.BibActesService, affichageService: Services.AffichageService, modificationService: Services.ModificationService);
        filtrerModelesActes(): void;
        affecterTableauxActesModifiables(): void;
        toutSelectionnerSpecifique(affecterClient: boolean): void;
        toutSelectionElargie(affecterClient: boolean): void;
    }
}

declare module creditsGac.Modeles {
    /** Interface de l'affichage des modèles d'actes */
    interface IAffichageActe {
        miseADispositionBQL?: boolean;
        utilisableParClient?: boolean;
        affecterClient?: boolean;
        libelleFamilleEnCours?: string;
        referenceActe?: string;
        libelleActe?: string;
    }
}

declare module creditsGac.Services {
    /**
     * Implémentation du service de boite à outils de l'application
     */
    class BibActesService {
        private serviceAgentExtended;
        private donneesService;
        private toolsService;
        private epsAttributsService;
        private qService;
        private engagementParametreService;
        private contextService;
        private applicationService;
        /** Injection de dépendances */
        static $inject: string[];
        /** Données utiles à la création des tableaux de modèles d'actes utiles à l'affichage */
        private listBibModeles;
        private listModelesActes;
        private lignesAutorisations;
        private listBibActesAutoriseClient;
        private listModeleActesAutoriseClient;
        private famillesEPS;
        /** Tableau des modèles d'actes */
        listModeleActesStandard: Modeles.IAffichageActe[];
        listModeleActesSpecifique: Modeles.IAffichageActe[];
        listModeleActesElargie: Modeles.IAffichageActe[];
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, donneesService: Services.Application.IDonneesService, toolsService: Services.IToolsService, epsAttributsService: EpsCommun.Services.EpsAttributsService, qService: ng.IQService, engagementParametreService: EpsCommun.Services.EngagementParametreService, contextService: Services.ContextService, applicationService: Services.ApplicationService);
        init(): ng.IPromise<BibActesService>;
        /**
         * Construit le tableau des modèles d'actes composant la bibliothèque standard
         */
        private definirTableauBibStandard();
        /**
         * Construit le tableau des modèles d'actes composant la bibliothèque spécifique
         */
        private definirTableauBibSpecifique();
        /**
         * Construit le tableau des modèles d'actes composant la bibliothèque élargie
         */
        private definirTableauBibElargie();
        /**
         * Détermine la mise à disposition ou non des modèles d'actes pour l'affichage
         * @param modeleActe {Array<EpsCommun.Modeles.Actes.ISyntheseModeleActe>} modèle acte pour lequel il faut définir sa mise à disposition
         * @param typeModeleActe {string} défini si on est en standard, spécifique ou élargie
         */
        private definirAffichageModeleActes(modeleActes, typeModeleActe);
        /**
         * Détermine la mise à disposition ou non de la ligne d'autorisation
         * @param ligneAutorisation {EpsCommun.Modeles.Attributs.ILigneAutorisation} Ligne autorisation pour laquelle il faut déterminer la dispo
         * @return reponse {boolean} défini si une ligne autorisation est mis à dispo
         */
        private definirLigneAutorisationEligibleMiseADisposition(ligneAutorisation);
        /**
         * Détermine la mise à disposition ou non des modèle d'acte pour l'affichage
         * @param modeleActe {EpsCommun.Modeles.Actes.ISyntheseModeleActe} modele acte pour lequel il faut définir sa mise à disposition
         * @param ligneAutorisationEligible {boolean} disponibilité ligne autorisation
         * @param ligneAutorisationRegleDateButoir {string} règle date butoir de la ligne autorisation liée
         * @return reponse {boolean} retourne la disponibilité du modèle d'acte
         */
        private definirMiseADispositionBQLModeleActe(modeleActe, ligneAutorisationEligible, ligneAutorisationRegleDateButoir);
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran données administratives
     * @author S0077537
     */
    class DonneesAdministrativesControleur {
        private serviceAgentExtended;
        private $location;
        private donneesService;
        private epsAttributsService;
        private entiteTitulaireService;
        private donneesAdminService;
        private contextService;
        private affichageService;
        private scope;
        private applicationService;
        private engagementParametreService;
        private compteFacturationService;
        private modificationService;
        private modalService;
        /** Injection de dépendances */
        static $inject: string[];
        loading: boolean;
        caracteristiquesGAC: EpsCommun.Modeles.Attributs.ICaracteristiqueGAC;
        adresse: EpsCommun.Modeles.Adresse.ILigneAdresse;
        payeurPrincipalExist: boolean;
        payeurSecondaireExist: boolean;
        payeurGacPrincipal: EpsCommun.Modeles.Attributs.IPayeurGAC;
        payeurGacSecondaire: EpsCommun.Modeles.Attributs.IPayeurGAC;
        listeAdresseDisponibles: Modeles.IAffichageAdressesListeTypes[];
        listeModeReglements: EpsCommun.Modeles.ModeReglement.IModeReglement[];
        listeComptesClient: EpsCommun.Modeles.Contrat.IContrat[];
        listePayeurGac: EpsCommun.Modeles.Attributs.IPayeurGAC[];
        informationEntiteTitulaire: EpsCommun.Modeles.EntiteTitulaire.IInformationEntiteTitulaire;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, donneesService: Services.Application.IDonneesService, epsAttributsService: EpsCommun.Services.EpsAttributsService, entiteTitulaireService: EpsCommun.Services.EntiteTitulaireService, donneesAdminService: Services.DonneesAdministrativesService, contextService: Services.ContextService, affichageService: Services.AffichageService, scope: ng.IScope, applicationService: Services.ApplicationService, engagementParametreService: EpsCommun.Services.EngagementParametreService, compteFacturationService: Services.CompteFacturationService, modificationService: Services.ModificationService, modalService: MyWay.UI.IModalService);
        /**
         * Affecte le payeur principal et secondaire pour l'affichage
         */
        private definirComptesDeFacturation();
        /** Méthode appelé lors d'une sélection d'une adresse dans la combobox en mode modification
         * @param $item {Modeles.IAffichageAdressesListeTypes} Item sélectionné dans la combobox
         */
        changementAdresseEvent($item: Modeles.IAffichageAdressesListeTypes): void;
        /** Méthode appelé pour construire la liste des comptes disponibles en prélèvement interne
         * @param codeEtablissement {string} code établissement du client
         */
        private definirListeComptes(codeEtablissement);
    }
}

declare module creditsGac.Services {
    /**
     * Implémentation du service de boite à outils de l'application
     */
    class DonneesAdministrativesService {
        private serviceAgentExtended;
        private tiersService;
        private contratService;
        private toolsService;
        /** Injection de dépendances */
        static $inject: string[];
        /** Données du service */
        contratPrincipal: EpsCommun.Modeles.Contrat.IContrat;
        contratSecondaire: EpsCommun.Modeles.Contrat.IContrat;
        informationsContratPrincipal: EpsCommun.Modeles.Contrat.IInformationContrat;
        informationsContratSecondaire: EpsCommun.Modeles.Contrat.IInformationContrat;
        payeurGacPrincipal: EpsCommun.Modeles.Attributs.IPayeurGAC;
        payeurGacSecondaire: EpsCommun.Modeles.Attributs.IPayeurGAC;
        listeTypesAdressesPossibles: Modeles.IAffichageAdressesListeTypes[];
        listeAdresses: EpsCommun.Modeles.Adresse.ILigneAdresse[];
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, tiersService: EpsCommun.Services.TiersService, contratService: EpsCommun.Services.ContratService, toolsService: Services.IToolsService);
        /** Récupération de la ligne adresse du tiers
         * @param codeEtablissement {string} code de l'établissement
         * @param identifiantTiers {string} identifiant du tiers composant le client bancaire
         * @return response {IPromise<EpsCommun.Modeles.Adresse.ILigneAdresse>} Promesse de la ligne adresse du tiers
         */
        rechercherAdresse(codeEtablissement: string, identifiantTiers: string, identifiantAdresse: number): ng.IPromise<EpsCommun.Modeles.Adresse.ILigneAdresse>;
        /** Construire la liste des adresses disponibles en modifications
         * @param identifiantTiers {number} idnetifiant du tiers principal du client bancaire
         */
        private construireListeAdresse(identifiantTiers);
        /** Filtrer les adresses en fonction de paramètres
         * @param codeTypeAdresse {string} code du type d'adresse (1 adresse légale, 4 correspondance, 6 autre)
         * @param identifiantTiers? {number} identifiant du tiers composant le client bancaire
         * @return response {EpsCommun.Modeles.Adresse.ILigneAdresse[]} Retour d'un tableau d'adresse filtré
         */
        private filtrerAdresse(codeTypeAdresse, identifiantTiers?);
        /** Ajouter les adresses à la liste disponible en modification
         * @param adresses { EpsCommun.Modeles.Adresse.ILigneAdresse[]} Adresses à rajouter
         * @param typeAdresse {string} Code type de l'adresse
         */
        private ajouterAdressePossible(adresses, typeAdresse);
    }
}

declare module creditsGac.Modeles {
    class IAffichageAdressesListeTypes {
        identifiantAdresse: string;
        libelleTypeAdresse: string;
    }
}

declare module EpsGac {
}

declare module creditsGac.Services {
    /**
     * Implémentation du service des lignes d'autorisation
     */
    class LigneAutorisationService {
        private serviceAgentExtended;
        private engagementParametreService;
        private contextService;
        private toolsService;
        private poolsService;
        private qService;
        /** Injection de dépendances */
        static $inject: string[];
        private _listeFamilleEPS;
        private _lignesAutorisationsAffichage;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, engagementParametreService: EpsCommun.Services.EngagementParametreService, contextService: Services.ContextService, toolsService: Services.IToolsService, poolsService: Services.PoolsService, qService: ng.IQService);
        init(): ng.IPromise<any>;
        /**
         * @ngdoc get method
         * @name afficherMenu
         * @methodOf AffichageService.afficherMenu
         * @description Retourne si on doit afficher le menu ou non
         * @returns {boolean} statut de l'affichage du menu
         */
        listeFamilleEPS: EpsCommun.Modeles.Famille.IFamilleEPS[];
        /**
         * Construction du tableau des lignes d'autorisations
         * @return un tableau de lignes d'autorisations pour l'affichage
         */
        definirLignesAutorisations(lignesAutorisations: EpsCommun.Modeles.Attributs.ILigneAutorisation[]): Array<Modeles.Affichage.LigneAutorisation>;
        /**
         * Construction d'une ligne autorisation
         * @param dataLigneAutorisation {ILigneAutorisation} Une ligne d'autorisation
         * @param famille {IRechercheFamilleEPS} la famille EPS lié à la ligne d'autorisation
         * @return une ligne d'autorisation correctement formaté pour l'affichage dans le tableau
         */
        private constructionLigneAutorisation(dataLigneAutorisation, famille);
        definirAffichageDetailLigneAutorisation(ligneAutorisation: EpsCommun.Modeles.Attributs.ILigneAutorisation): ng.IPromise<Modeles.Affichage.LigneAutorisationModale.LigneAutorisationConsultation>;
        /**
         * Récupère les types différents de types date butoir
         * @returns promesse: IDeferred - Promesse de traitement
         */
        listeTypeDateButoir(): ng.IPromise<Modeles.Affichage.LigneAutorisationModale.TypesElementsByCode[]>;
        /**
         * Récupère les types différents de types de périodicités
         * @returns promesse: IDeferred - Promesse de traitement
         */
        listeTypePeriodicite(): ng.IPromise<Modeles.Affichage.LigneAutorisationModale.TypesElementsByCode[]>;
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran des lignes d'autorisations
     */
    class LignesAutorisationsControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgentExtended;
        private $location;
        private donneesService;
        private modalService;
        private toolsService;
        private deviseService;
        private epsAttributsService;
        private engagementParametreService;
        private contextService;
        private affichageService;
        private $scope;
        private applicationService;
        private navigationService;
        private ligneAutorisationService;
        /** Injection de dépendances */
        static $inject: string[];
        loading: boolean;
        /** Tableau des autorisations */
        tableauLignesAuto: Modeles.Tableaux.TableauAutorisation;
        /** Données utiles au controleur */
        private famillesEPS;
        private lignesAutorisations;
        private caracteristiquesGac;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, donneesService: Services.Application.IDonneesService, modalService: MyWay.UI.IModalService, toolsService: Services.IToolsService, deviseService: myway.comInterdomaine.DeviseService, epsAttributsService: EpsCommun.Services.EpsAttributsService, engagementParametreService: EpsCommun.Services.EngagementParametreService, contextService: Services.ContextService, affichageService: Services.AffichageService, $scope: ng.IScope, applicationService: Services.ApplicationService, navigationService: MyWay.UI.INavigationService, ligneAutorisationService: Services.LigneAutorisationService);
        /**
         * Handler de sélection sur les éléments du tableau des éléments d'autorisations
         * @param selectedObject {Object} ligne courante sélectionnée
         */
        onSelectionChange(selectedObject: Modeles.Affichage.LigneAutorisation): void;
        /**
         * Clique sur le bouton de consultation de la tarification
         */
        ouvrirTarification(): void;
    }
}

declare module creditsGac.Modeles.Affichage {
    class LigneAutorisationList {
        lignesAutorisations: LigneAutorisation[];
    }
    class LigneAutorisation {
        reference: string;
        libelleFamilleEnCours: string;
        libelleLongFamilleEnCours: string;
        identifiantFamilleEps: string;
        convention: string;
        plafondGlobal: string;
        plafondUnitaire: string;
        dateFin: string;
        pool: string;
        dateRefButoir: string;
        utilisableBanqueEnLigne: boolean;
        topRetrocession: boolean;
        ligneAutorisationLie: EpsCommun.Modeles.Attributs.ILigneAutorisation;
        constructor();
    }
}

declare module creditsGac.Modeles.Tableaux {
    class TableauAutorisation implements MyWay.UI.ImwTableOptions, MyWay.UI.IMwTableHandler {
        private tableauColonneFamille;
        private tableauColonnePartenariat;
        private tableauColonnePlafondG;
        private tableauColonnePlafondU;
        private tableauColonneDateFin;
        private tableauColonnePool;
        private tableauColonneDateButoir;
        private tableauColonneBql;
        private tableauColonneRetrocession;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.Affichage.LigneAutorisation[];
        selectedItems: Modeles.Affichage.LigneAutorisation[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        moreEnable: boolean;
        constructor(donneesTableaux: Modeles.Affichage.LigneAutorisation[], handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de gestion des partenariats
     * @author S0077537
     */
    class PartenariatControleur {
        private serviceAgentExtended;
        private $location;
        private contextService;
        private affichageService;
        private scope;
        private applicationService;
        private engagementParametreService;
        private modalService;
        private epsAttributsService;
        private navigationService;
        /** Injection de dépendances */
        static $inject: string[];
        loading: boolean;
        private context;
        listePartenariats: EpsCommun.Modeles.Partenariat.IPartenariatEPS[];
        caracteristiquesGAC: EpsCommun.Modeles.Attributs.ICaracteristiqueGAC;
        choixPartenariat: EpsCommun.Modeles.Partenariat.IPartenariatEPS;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, contextService: Services.ContextService, affichageService: Services.AffichageService, scope: ng.IScope, applicationService: Services.ApplicationService, engagementParametreService: EpsCommun.Services.EngagementParametreService, modalService: MyWay.UI.IModalService, epsAttributsService: EpsCommun.Services.EpsAttributsService, navigationService: MyWay.UI.INavigationService);
        /** récupération de la liste des partenariats
         * @param codeEtablissement {string} code de l'établissement
         * @return response {IPromise<EpsCommun.Modeles.Partenariat.IPartenariatEPS[]>} Promesse de la liste de partenariats
         */
        private recupererPartenariat(codeEtablissement);
        /**
         *  Défini le partenariat du client bancaire actuel et le fixe sur la listebox
         */
        private definirPartenariatActuel();
        /** Méthode appelé lors du changement de sélection d'un partenariat
         * @param item {EpsCommun.Modeles.Partenariat.IPartenariatEPS} nouveau partenariat sélectionné dans la listebox
         */
        changementSelection(item: EpsCommun.Modeles.Partenariat.IPartenariatEPS): void;
    }
}

declare module creditsGac.Services {
    /**
     * Implémentation du service de gestion des cadres de financement
     */
    class PoolsService {
        private serviceAgentExtended;
        private donneesService;
        private toolsService;
        private epsAttributsService;
        private cadreFinancementService;
        private qService;
        private contextService;
        private applicationService;
        /** Injection de dépendances */
        static $inject: string[];
        /** Données standards utiles à la construction des objets utiles à l'affichage */
        private lignesAutorisations;
        private lignesCadreFinancement;
        private affichagePoolsClient;
        private codeEtablissement;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, donneesService: Services.Application.IDonneesService, toolsService: Services.IToolsService, epsAttributsService: EpsCommun.Services.EpsAttributsService, cadreFinancementService: EpsCommun.Services.CadreFinancementService, qService: ng.IQService, contextService: Services.ContextService, applicationService: Services.ApplicationService);
        /** Retourne le tableau de cadre de financement à afficher
         * @return reponse {IPromise<Array<Modeles.IPool>>} Promesse du tableau de Pools à afficher
         */
        getAffichagePoolsClient(forceRemoveCache: boolean): ng.IPromise<Array<Modeles.IPool>>;
        /** Retourne le tableau de cadre de financement modèle à afficher
         * @return reponse {Array<EpsCommun.Modeles.Pools.ICadreFinancement>} Liste des pools à afficher
         */
        getAffichagePoolsModeles(): Array<EpsCommun.Modeles.Pools.ICadreFinancement>;
        getAffichagePoolsHorsModeles(): Array<EpsCommun.Modeles.Pools.ICadreFinancement>;
        /**
         * Alimentation du tableau de Pools client à afficher
         * @return reponse {IPromise<Modeles.IPool[]} Retourne les cadres de financement pour l'affichage
         */
        private definirLignesPoolsClient();
        /** Définir le libellé du type de cadre financement
         * @param typeRole {string} type de role envoyé par la base
         * @return reponse {string} le libellé traduit du type de role
         */
        private definirTypeRoleEntiteGestion(typeRole);
        /** Définir le libellé du code nature
         * @param codeNature {string} code nature envoyé par la base
         * @return reponse {string} le libellé traduit du code nature
         */
        private definirCodeNature(codeNature);
        genererPoolByLigneAutorisation(listeCadreFinancement: EpsCommun.Modeles.Attributs.IModeleCadreFinancement[]): ng.IPromise<Modeles.IPool[]>;
        genererPoolsRattachementByCadreFinancement(listeCadreFinancement: EpsCommun.Modeles.Pools.ICadreFinancement[]): Modeles.IPoolModele[];
        genererTableauFamillesUtilisables(poolClient: Modeles.IPool, lignesAutorisation: Modeles.Affichage.LigneAutorisation[]): Modeles.IFamillesUtilisable[];
        /** Modifier les lignes d'autorisations en fonction d'une sélection familles utilisable pour un pool client à lier
         * @param listeFamillesUtilisable {Modeles.IFamillesUtilisable[]} Liste des familles utilisables ou non à ajouter ou supprimer
         * @param poolClient {Modeles.IPool} Pool client à lier
         */
        enregistrerPoolsClientALier(listeFamillesUtilisable: Modeles.IFamillesUtilisable[], poolClient: Modeles.IPool): boolean;
    }
}

declare module creditsGac.Modeles.Tableaux {
    class TableauTarifications implements MyWay.UI.ImwTableOptions {
        private tableauColonneFamille;
        private tableauColonnePartenariat;
        private tableauColonneDateButoir;
        private tableauColonneFraisPeriodique;
        private tableauColonneDateFinFraisPerio;
        private tableauColonneFraisDossier;
        private tableauColonneDateFinFraisDossier;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.Affichage.ITarification[];
        selectedItems: Modeles.Affichage.ITarification[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        moreEnable: boolean;
        constructor(donneesTableaux: Modeles.Affichage.ITarification[]);
    }
}

declare module creditsGac.Modeles.Affichage {
    class TarificationStandardDetail {
        libelleLongFamilleEps: string;
        partenariat: string;
        dateButoir: string;
        receptionPV: string;
        fraisPeriodiquePapier: string;
        fraisPeriodiqueInternet: string;
        montantFacturationPapier: string;
        montantFacturationInternet: string;
        dateFin: string;
        dateModification: string;
        identifiantLigneAutorisation: string;
    }
    interface ITarificationList {
        tarification: ITarification[];
    }
    class ITarification {
        libelleFamilleEncours: string;
        libelleTypePartenariat: string;
        avecDateButoir: string;
        dateFin: string;
        fraisDossierPapier: string;
        fraisPeriodiquePapier: string;
        fraisDossierInternet: string;
        fraisPeriodiqueInternet: string;
        copieConforme: string;
        identifiantLigneAutorisation: string;
    }
    interface IModeleTarification {
        partenariat: string;
        dateButoir: string;
        receptionPV: string;
    }
    class ModeleTarification implements IModeleTarification {
        partenariat: string;
        dateButoir: string;
        receptionPV: string;
        constructor(donnees?: ModeleTarification);
    }
}

declare module creditsGac.Services {
    /**
     * Service de la tarification
     */
    interface ITarificationService {
        /** Récupération des lignes de tarifications globales
         * @return reponse {IPromise<Modeles.Affichage.ITarification[]>} Promesse du tableau des tarifications utiles à l'affichage
         */
        getLignesTarification(): ng.IPromise<Modeles.Affichage.ITarification[]>;
        /** Récupération des lignes de tarifications détaillées
         * @param identifiantAutorisation {string} identifiant de la ligne d'autorisation
         * @return reponse {IPromise<Modeles.Affichage.TarificationStandardDetail[]>} Promesse du tableau des tarifications détaillées en fonction de la ligne d'autorisation liée
         */
        getTarificationsByLigneAutorisations(identifiantAutorisation: string): ng.IPromise<Modeles.Affichage.TarificationStandardDetail[]>;
        /** Récupération du détail d'une ligne de tarification
         * @param identifiantAutorisation {string} identifiant de la ligne d'autorisation
         * @return reponse {Modeles.ITarificationDetail} le modèle de données lié à l'affichage de la tarification détaillé
         */
        getTarificationModaleDetail(identifiantAutorisation: string): Modeles.ITarificationDetail;
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran de tarification
     * @author S0077481
     */
    class TarificationsControleur {
        private serviceAgentExtended;
        private tarificationService;
        private epsAttributsService;
        private contextService;
        private $location;
        private affichageService;
        /** Injection de dépendances */
        static $inject: string[];
        loading: boolean;
        /** declaration des variables */
        tarificationsList: Modeles.Tableaux.TableauTarifications;
        private lignesTarification;
        caracteristiquesGAC: EpsCommun.Modeles.Attributs.ICaracteristiqueGAC;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, tarificationService: Services.ITarificationService, epsAttributsService: EpsCommun.Services.EpsAttributsService, contextService: Services.ContextService, $location: ng.ILocationService, affichageService: Services.AffichageService);
        /** Fermeture de la page de gestion/consultation de la tarification */
        close(): void;
    }
}

declare module creditsGac.Constantes {
    /**
     * Type de compte pour les données administratives
     */
    module TypeCompte {
        var TYPE_COMPTE_SANS: string;
        var TYPE_COMPTE_INTERNE: string;
        var TYPE_COMPTE_EXTERNE: string;
    }
    module MomentFormat {
        var DATE_REST: string;
    }
    /**
     * Ensemble des constantes d'habilitations pour l'utilisation de la SPA GAC
     */
    module Habilitations {
        var SHFCIH: string;
        var SHFCII: string;
        var SHFCIJ: string;
        var SHFCIK: string;
        var SHFCIL: string;
        var SHFCIM: string;
        var SHFCIN: string;
        var SHFCIO: string;
        var SHFCIP: string;
        var SHFCFN: string;
        var SHFCFO: string;
    }
    /**
     * Enumération des règles de dates butoir (lignes autorisations)
     */
    module ReglesDateButoir {
        var NON: string;
        var FIN: string;
        var DEBUT: string;
    }
    /**
     * Enumération d'aide pour l'affichage de la fin de date butoir
     */
    module PeriodiciteLabel {
        var JOUR: string;
        var MOIS: string;
        var TRIMESTRE: string;
        var SEMESTRE: string;
        var ANNEE: string;
    }
    /**
     * Enumération d'aide lors de l'échec de création des attributs GAC
     */
    module ErreurCreation {
        var ERREUR_CLIENT: string;
        var ERREUR_CONTENTIEUX: string;
    }
    /**
     * Enumération des différents libellé des types d'adresses
     */
    module LibelleTypeAdresse {
        var ADRESSE_LEGALE: string;
        var ADRESSE_CORRESPONDANCE: string;
    }
}

declare module creditsGac {
}

declare module creditsGac.Modeles {
    interface IErreur {
        codeRetour: string;
        libelle: string;
        message: string;
    }
}

declare module creditsGac.Services {
    /**
     * Implémentation du service de gestion d'affichage
     */
    class AffichageService {
        private serviceAgentExtended;
        private $location;
        /** Injection de dépendances */
        static $inject: string[];
        private _afficherMenu;
        private _afficherFermer;
        private _modePartenariat;
        private _modeTarification;
        private _modePoolsModeles;
        private _modeConsultation;
        private _modeModification;
        private _pathPrecedent;
        private _pathFilAriane;
        /** Constructeur */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService);
        /**
         * @ngdoc get method
         * @name afficherMenu
         * @methodOf AffichageService.afficherMenu
         * @description Retourne si on doit afficher le menu ou non
         * @returns {boolean} statut de l'affichage du menu
         */
        /**
         * @ngdoc set method
         * @name afficherMenu
         * @methodOf AffichageService.afficherMenu
         * @description Modifie le statut de l'affichage du menu
         * @param {boolean} : statut de l'affichage du menu
         */
        afficherMenu: boolean;
        /**
         * @ngdoc get method
         * @name afficherFermer
         * @methodOf AffichageService.afficherFermer
         * @description Retourne si on doit afficher le bouton fermer ou non
         * @returns {boolean} statut de l'affichage du bouton fermer
         */
        /**
         * @ngdoc set method
         * @name afficherFermer
         * @methodOf AffichageService.afficherFermer
         * @description Modifie le statut de l'affichage dul'affichage du bouton fermer
         * @param {boolean} : statut de l'affichage du bouton fermer
         */
        afficherFermer: boolean;
        /**
         * @ngdoc get method
         * @name modeConsultation
         * @methodOf AffichageService.modeConsultation
         * @description Indique si le mode consultation est actif ou non
         * @returns {boolean} statut du mode de consultation
         */
        /**
         * @ngdoc set method
         * @name modeConsultation
         * @methodOf AffichageService.modeConsultation
         * @description Modifie le statut du mode de consultation
         * @param {boolean} :statut du mode consultation
         */
        modeConsultation: boolean;
        /**
         * @ngdoc get method
         * @name modePartenariat
         * @methodOf AffichageService.modePartenariat
         * @description Indique si le mode Partenariat est actif ou non
         * @returns {boolean} statut du mode Partenariat
         */
        /**
         * @ngdoc set method
         * @name modePartenariat
         * @methodOf AffichageService.modePartenariat
         * @description Modifie le statut du mode Partenariat
         * @param {boolean} :statut du mode Partenariat
         */
        modePartenariat: boolean;
        /**
         * @ngdoc get method
         * @name modeTarification
         * @methodOf AffichageService.modeTarification
         * @description Indique si le mode Tarification est actif ou non
         * @returns {boolean} statut du mode Tarification
         */
        /**
         * @ngdoc set method
         * @name modeTarification
         * @methodOf AffichageService.modeTarification
         * @description Modifie le statut du mode Tarification
         * @param {boolean} :statut du mode Tarification
         */
        modeTarification: boolean;
        /**
         * @ngdoc get method
         * @name modePoolsModeles
         * @methodOf AffichageService.modePoolsModeles
         * @description Indique si le mode pools modèldes est actif ou non
         * @returns {boolean} statut du mode pools modèldes
         */
        /**
         * @ngdoc set method
         * @name modePoolsModeles
         * @methodOf AffichageService.modePoolsModeles
         * @description Modifie le statut du mode pools modèldes
         * @param {boolean} :statut du mode pools modèldes
         */
        modePoolsModeles: boolean;
        /**
         * @ngdoc get method
         * @name modeModification
         * @methodOf AffichageService.modeModification
         * @description Indique si le mode modification est actif ou non
         * @returns {boolean} statut du mode de modification
         */
        /**
         * @ngdoc set method
         * @name modeModification
         * @methodOf AffichageService.modeModification
         * @description Modifie le statut du mode de modification
         * @param {boolean} :statut du mode modification
         */
        modeModification: boolean;
        /**
         * @ngdoc get method
         * @name pathPrecedent
         * @methodOf AffichageService.pathPrecedent
         * @description Récupère le path de la page précédente
         * @returns {string} path précédent
         */
        /**
         * @ngdoc set method
         * @name pathPrecedent
         * @methodOf AffichageService.pathPrecedent
         * @description Modifie le path précédent
         * @param {string} path précédent
         */
        pathPrecedent: string;
        /**
         * @ngdoc get method
         * @name _pathFilAriane
         * @methodOf AffichageService._pathFilAriane
         * @description Récupères le tableau de path du fil d'ariane
         * @returns {string} tableau du fil d'ariane
         */
        /**
         * @ngdoc set method
         * @name pathPrecedent
         * @methodOf AffichageService._pathFilAriane
         * @description Fixe le tableau du fil d'ariane
         * @param {string} tableau fil d'ariane en param
         */
        pathFilAriane: string[];
        /**
         * Exécute le retour au path précédent de navigation
         */
        retourPagePrecedente(): void;
        /**
         * Construit le fil d'ariane
         * @param {string} path courant à ajouter au path précédent dans le fil d'ariane
         */
        construireFilAriane(pathPrecedent: string, pathCourant: string): void;
    }
}

declare module creditsGac.Services {
    /**
     * Implémentation du service de gestion d'affichage
     */
    class ApplicationService {
        private serviceAgentExtended;
        private epsAttributsService;
        private modalService;
        private engagementParametreService;
        private contextService;
        private creationService;
        private toolsService;
        private contentieuxService;
        private entiteTitulaireService;
        private affichageService;
        private $location;
        private habilitationService;
        /** Injection de Dépendances */
        static $inject: string[];
        caracteristiquesGac: EpsCommun.Modeles.Attributs.ICaracteristiqueGAC;
        partenariat: EpsCommun.Modeles.Partenariat.IPartenariatEPS;
        informationsTiers: EpsCommun.Modeles.EntiteTitulaire.IInformationEntiteTitulaire;
        /** Constructeur */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, epsAttributsService: EpsCommun.Services.EpsAttributsService, modalService: MyWay.UI.IModalService, engagementParametreService: EpsCommun.Services.EngagementParametreService, contextService: Services.ContextService, creationService: EpsCommun.Services.CreationService, toolsService: Services.IToolsService, contentieuxService: EpsCommun.Services.ContentieuxService, entiteTitulaireService: EpsCommun.Services.EntiteTitulaireService, affichageService: Services.AffichageService, $location: ng.ILocationService, habilitationService: EpsCommun.Services.HabilitationService);
        /**
         * Rechercher identifiant tiers
         * @return reponse {IPromise<void>} Promesse de fin d'exécution des différentes requêtes/fonctions
         */
        rechercherIdentifiantTiersClientBancaire(): ng.IPromise<void>;
        /**
         * Récupération des attributs du client connu du contexte
         * @param identifiantTiers {number} identifiant de l'entite titulaire du client bancaire
         * @param libelleEDSGestionEntiteTitulaire {string} intitulé de l'entite titulaire (nom/prénom de la personne)
         * @param identifiantClient {string} identifiant du client bancaire
         * @return reponse {IPromise<void>} Promesse de fin d'exécution des différentes requêtes/fonctions
         */
        private rechercheAttributsClient(identifiantTiers, libelleEDSGestionEntiteTitulaire, identifiantClient);
        /** Recherche du contentieux éventuel via un identifiant tiers qui compose le client bancaire
         * @param identifiantTiers {number} Identifiant du tiers
         * @return reponse {IPromise<boolean>} Promesse qui renvoie la présence ou non d'un contentieux
         */
        private rechercherContentieuxClient(identifiantTiers);
        /** Ouvrir la modale de création via le service de création
         * @param identifiantTiers {number} identifiant du tiers (1er de la liste)
         * @param libelleEDSGestionEntiteTitulaire {string} libelle EDS de l'entite titulaire
         * @param identifiantClient {string} identifiant du client bancaire
         * @return reponse {IPromise<void>} Promesse de fin d'exécution des différentes requêtes/fonctions
         */
        private ouvrirModaleCreation(identifiantTiers, libelleEDSGestionEntiteTitulaire, identifiantClient);
        /** Ouvrir la modale de création via le service de création
         * @param caracteristiqueGacRetour {EpsCommun.Modeles.Attributs.ICaracteristiqueGAC} retour des caracteristiques GAC
         * @return reponse {boolean} s'est réalisé correctement
         */
        private verifierCreationParDefautRetour(caracteristiqueGacRetour);
        /** Ouvrir la modale de création via le service de création
         * @return reponse {Promise<boolean>} Retourne la promesse si la validation est OK
         */
        validationAttributsGac(): ng.IPromise<boolean>;
    }
}

declare module creditsGac.Services {
    /**
     * Modèle de données du context courant utile à l'application
     */
    interface IDonneesContexteModele {
        clientBancaire: string;
        codeEtablissement: string;
        nombreEntiteTitulaireActive: string;
    }
    /**
     * Implémentation du service de gestion des informations de context
     */
    class ContextService {
        private serviceAgentExtended;
        private $q;
        private toolsService;
        /** Données du contexte de la page */
        private cache;
        /** Injection de dépendances */
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, toolsService: Services.IToolsService);
        /** Retour le modèle de données des informations de contexte de la page
         * @return reponse {IPromise<IDonneesContextModele>} Informations du context issue du cache ou récupéré directement
         */
        getDonneesContexte(supprimerCache: boolean): ng.IPromise<IDonneesContexteModele>;
    }
}

declare module creditsGac.Services.Application {
    interface IDonneesService {
        /** Chargement des données de test */
        chargerMock(): ng.IPromise<boolean>;
        /** Chargement de la liste des tarifications généré automatiquement */
        listerTypeTarification(): ng.IPromise<Modeles.Affichage.ModeleTarification[]>;
    }
}

declare module creditsGac.Services {
    /**
     * Implémentation du service de gestion d'affichage
     */
    class ModificationService {
        private serviceAgentExtended;
        private $q;
        private applicationService;
        /** Injection de Dépendances */
        static $inject: string[];
        /**
         * Données d'origines
         */
        comptePrincipalInitial: Modeles.IAffichageFacturation;
        compteSecondaireInitial: Modeles.IAffichageFacturation;
        choixListeAdresseInitial: Modeles.IAffichageAdressesListeTypes;
        modelesActesSpecifiqueDispoInitial: Modeles.IAffichageActe[];
        modelesActesElargieDispoInitial: Modeles.IAffichageActe[];
        /**
         * Données Modifiés
         */
        comptePrincipal: Modeles.IAffichageFacturation;
        compteSecondaire: Modeles.IAffichageFacturation;
        choixListeAdresse: Modeles.IAffichageAdressesListeTypes;
        modelesActesSpecifiqueDispo: Modeles.IAffichageActe[];
        modelesActesElargieDispo: Modeles.IAffichageActe[];
        /** Constructeur */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, applicationService: Services.ApplicationService);
        annulerModifications(): void;
        enregistrerModifications(): ng.IPromise<EpsCommun.Modeles.Attributs.ICaracteristiqueGAC>;
        private changerCompteFacturation(caracteristiquesGacModifications);
        private modifierCompteFacturationParTypeDomiciliation(indicePayeur, codeTypeDomicialiation, caracteristiquesGacModifications);
    }
}

declare module creditsGac.Services {
    /**
     * Service de boîte à outils de l'application
     */
    interface IToolsService {
        /**
         * Cast d'une string contenant un nombre
         */
        toNombre(value: string, dec: number): string;
        /**
         * Formate l'affichage des familles utilisables d'une ligne de pool
         */
        definirLibelleUtilisablePools(data: Modeles.IPool[], partenariat: string): void;
        /**
         * Récupére le symbole de la devise en fonction du code ISO de la devise
         */
        recupererSymboleDevise(code: string): ng.IPromise<string>;
        /**
         * Définir le libellé de la date butoir
         */
        definirDateButoir(regle: string, periodicite: string, delai: number): string;
        /**
         * Afficher une popup d'erreur
         */
        popupAlertErreur(textAlerte: string): ng.IPromise<any>;
        /**
         * Afficher une popup d'info
         */
        popupInfo(titre: string, bodyText: string): void;
        /**
         * Retourne le format d'un identifiant à la taille 9
         */
        formaterIdentifiantClientBancaire(identifiant: string): string;
        /**
         * Retourne un pourcentage en fonction de deux nombre dans un format choisi
         */
        calculerPourcent(a: number, b: number, dec: number): string;
    }
}

declare module creditsGac.Directives.Controleurs {
    /**
     * Controleur de la directive d'affichage du compte de facturation
     */
    class MwAdresseControleur {
        private scope;
        private serviceAgentExtended;
        /** Injection de dépendances */
        static $inject: string[];
        adresse: EpsCommun.Modeles.Adresse.ILigneAdresse;
        /** Initialisation */
        constructor(scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module creditsGac.Directives {
    /**
     * Directive d'information des attributs du client courant
     * Affichage sous forme d'entête pour l'ensemble des pages SPA
     */
    function mwAdresseDirective(): ng.IDirective;
}

declare module creditsGac.Directives.Controleurs {
    /**
     * Controleur de la directive d'affichage du compte de facturation
     */
    class MwCompteFacturation {
        private scope;
        private serviceAgentExtended;
        private engagementParametreService;
        private entitetitulaire;
        private affichageService;
        private compteFacturationService;
        private toolsService;
        private modificationService;
        private applicationService;
        /** Injection de dépendances */
        static $inject: string[];
        /** declaration des objets passés en paramètre de directive */
        codeEtablissement: string;
        identifiantClient: string;
        listeModeReglements: EpsCommun.Modeles.ModeReglement.IModeReglement[];
        listeComptesClient: EpsCommun.Modeles.Contrat.IContrat[];
        listePayeurGac: EpsCommun.Modeles.Attributs.IPayeurGAC[];
        informationEntiteTitulaire: EpsCommun.Modeles.EntiteTitulaire.IInformationEntiteTitulaire;
        /** déclaration des variables de conditionnement d'affichage */
        comptePrincipalEnregistree: boolean;
        compteSecondaireEnregistree: boolean;
        compteSecondaireIdentique: boolean;
        comptePrincipalChoisiIdentique: boolean;
        compteSecondaireChoisiIdentique: boolean;
        /** Initialisation */
        constructor(scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, engagementParametreService: EpsCommun.Services.EngagementParametreService, entitetitulaire: EpsCommun.Services.EntiteTitulaireService, affichageService: Services.AffichageService, compteFacturationService: Services.CompteFacturationService, toolsService: Services.IToolsService, modificationService: Services.ModificationService, applicationService: Services.ApplicationService);
        /**
         * Génération de toutes les données d'affichages utiles à la directive
         */
        private genererDonneesAffichage();
        changeModeReglementPrincipal(): void;
        changeCompteFacturationPrincipal(): void;
        changeModeReglementSecondaire(): void;
        changeCompteFacturationSecondaire(): void;
        rechercheBic(indiceCompte: number): void;
        saisirRumDansGMBC(indiceCompte: number): void;
        saisirComptePrincipal(): void;
        saisirCompteSecondaire(): void;
    }
}

declare module creditsGac.Directives {
    /**
     * Directive d'information des attributs du client courant
     * Affichage sous forme d'entête pour l'ensemble des pages SPA
     */
    function mwCompteFacturation(): ng.IDirective;
}

declare module creditsGac.Modeles {
    class IAffichageListeComptes {
        identifiantCompte: string;
        libelleCompte: string;
    }
    class IPersonneEntiteTitulaire {
        identifiantTiers: number;
        designationTiers: string;
    }
    class ISaisieCompteFacturation {
        titulaireCompte: string;
        numeroRice: MyWay.Model.Rice;
        numeroIBAN: string;
        numeroBic: string;
        rum: string;
        dateMandat: Date;
    }
    interface IAffichageFacturation {
        selectionModeReglement?: EpsCommun.Modeles.ModeReglement.IModeReglement;
        selectionCompteFacturation?: EpsCommun.Modeles.Contrat.IContrat;
        titulaireCompte?: string;
        modeReglement?: string;
        libelleModeReglement?: string;
        bicAffichage?: string;
        ibanAffichage?: string;
        riceAffichage?: string;
        riceSaisie?: MyWay.Model.Rice;
        choixPropagation?: string;
        rumSaisie?: string;
        dateMandat?: string;
        domiciliationText?: string;
        tresorerieText?: string;
    }
}

declare module creditsGac.Services {
    /**
     * Implémentation du service de boite à outils de l'application
     */
    class CompteFacturationService {
        private serviceAgentExtended;
        private engagementParametreService;
        private contratService;
        private toolsService;
        /** Injection de dépendances */
        static $inject: string[];
        private listeContratsClient;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, engagementParametreService: EpsCommun.Services.EngagementParametreService, contratService: EpsCommun.Services.ContratService, toolsService: Services.IToolsService);
        /**
         * Définir le mode de réglement Interne/Externe
         */
        rechercherModeReglement(codeModeReglement: string, codeEtablissement: string): ng.IPromise<EpsCommun.Modeles.ModeReglement.IRechercheModeReglement>;
        /**
         * Envoie de la requête pour déterminer le BIC en fonction d'un IBAN
         * @param iban {string} IBAN qui permet de définir le RIB associé
         * @return reponse {IPromise<string>} RIB calculé en fonction de l'IBAN
         */
        sendRequestCalculerBic(iban: string): ng.IPromise<string>;
        /**
         * Défininir l'affichage du rib
         */
        definirAffichageRib(domiciliationPayeurGAC: string): string;
        recupererListeComptesClientBancaire(listePersonnesEntiteTitulaire: Array<Modeles.IPersonneEntiteTitulaire>, codeEtablissement: string): ng.IPromise<EpsCommun.Modeles.Contrat.IContrat[]>;
        private recupererContratsPersonne(identifiantTiers, codeEtablissement, designationTiers);
        /** Retourne le code activite
         * @param rice {string} rice du compte de facturation
         * @return reponse {string} code activite compte
         */
        private codeActiviteCorrect(rice);
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran de détail d'une ligne d'autorisations
     */
    class DetailLigneAutorisationControleur {
        private serviceAgentExtended;
        private data;
        private $modalInstance;
        private ligneAutorisationService;
        private toolsService;
        private affichageService;
        private $filter;
        /** Injection de dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: EpsCommun.Modeles.Attributs.ILigneAutorisation;
        affichageLigneAutorisation: Modeles.Affichage.LigneAutorisationModale.LigneAutorisationConsultation;
        devise: string;
        /** Données en modifications */
        listeDateButoir: Modeles.Affichage.LigneAutorisationModale.TypesElementsByCode[];
        selectionDateButoir: Modeles.Affichage.LigneAutorisationModale.TypesElementsByCode;
        listePeriodicite: Modeles.Affichage.LigneAutorisationModale.TypesElementsByCode[];
        selectionPeriodicite: Modeles.Affichage.LigneAutorisationModale.TypesElementsByCode;
        listeChoixPoolAuto: string;
        loading: boolean;
        /** Initialiation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, data: Modeles.Affichage.LigneAutorisation, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, ligneAutorisationService: Services.LigneAutorisationService, toolsService: Services.IToolsService, affichageService: Services.AffichageService, $filter: angular.IFilterService);
        private determinerSelectionDateButoir();
        private determinerSelectionPeriodicite();
        private determinerChoixPoolAuto();
        upPool(index: number): void;
        downPool(index: number): void;
        /** Fermeture de la modal */
        close(): void;
        /** Validation de la ligne d'autorisation */
        ok(): void;
    }
}

declare module creditsGac.Modeles.Affichage.LigneAutorisationModale {
    class LigneAutorisationConsultation {
        libelleFamilleEnCours: string;
        partenariat: string;
        plafondGlobal: number;
        montantEnCours: number;
        plafondUnitaire: number;
        dateFin: Date;
        dateCloture: Date;
        dateButoir: string;
        utilisableBanqueEnLigne: string;
        topRetrocession: string;
        poolAutomatique: string;
        listePools: Modeles.IPool[];
        dateDerniereMiseAJour: Date;
        lastUser: string;
    }
    class TypesElementsByCode {
        code: string;
        libelle: string;
    }
    class LigneAutorisationModification {
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran des pools
     */
    class PoolsControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgentExtended;
        private donneesService;
        private modalService;
        private toolsService;
        private poolsService;
        private affichageService;
        private $location;
        /** Injection de dépendances */
        static $inject: string[];
        /** Données de la page des pools client */
        poolsClient: Array<Modeles.IPool>;
        tableauPoolsClient: Modeles.Tableaux.TableauPoolsClient;
        poolSelection: boolean;
        poolSelectionne: Modeles.IPool;
        loading: boolean;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, donneesService: Services.Application.IDonneesService, modalService: MyWay.UI.IModalService, toolsService: Services.IToolsService, poolsService: Services.PoolsService, affichageService: Services.AffichageService, $location: ng.ILocationService);
        /**
         * Ouvre la modale qui présente les modèles des cadres de financement
         */
        openPoolsModeles(): void;
        /**
         * Handler de sélection sur le tableau des pools clients
         * @param selectedObject {EpsCommun.Modeles.Pools.ICadreFinancement} ligne courante sélectionnée
         */
        onSelectionChange(selectedObject: Modeles.IPool): void;
        /**
         * Ouvre la modale de modification des familles utilisables rattaché au pool client
         */
        openModifUtilisations(): void;
        /**
         * Débranche la vue sur SynchPool en fonction du pool sélectionné dans le tableau des pools client
         */
        openDetailPool(): void;
    }
}

declare module creditsGac.Modeles {
    interface IPool {
        utilisable: string;
        numeroPool: string;
        libellePool: string;
        typePool: string;
        dateFin: Date;
        utilisation: IUtilisation[];
        risque: string;
        financement: string;
        naturePool: string;
        ordreAffichage: number;
        famillesUtilisables: string[];
        poolLie: EpsCommun.Modeles.Attributs.IModeleCadreFinancement;
    }
    interface IUtilisation {
        code: string;
    }
    interface IPoolModele {
        identifiantCadreFinancement: string;
        libelleLong: string;
        dateFin: Date;
        tauxMiniParticipationRisque: string;
        tauxAppliqueParticipation: string;
    }
    interface IFamillesUtilisable {
        estUtilisable: boolean;
        libelleLongFamilleEnCours: string;
        avecPartenariat: string;
        identifiantLigneAutorisation: string;
    }
}

declare module creditsGac.Modeles.Tableaux {
    class TableauPoolsClient implements MyWay.UI.ImwTableOptions {
        private tableauColonneNumero;
        private tableauColonneLibellePool;
        private tableauColonneTypePool;
        private tableauColonneNaturePool;
        private tableauColonneDateFin;
        private tableauColonneFinancement;
        private tableauColonneRisque;
        private tableauColonneFamilleUtilisable;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.IPool[];
        selectedItems: Modeles.IPool[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        constructor(donneesTableaux: Modeles.IPool[], handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran des pools
     * @author S0077537
     */
    class PoolsModeleControleur {
        private serviceAgentExtended;
        private donneesService;
        private toolsService;
        private poolsService;
        private contextService;
        private affichageService;
        private navigationService;
        /** Injection de dépendances */
        static $inject: string[];
        /** Données de la modale des modèles de pools */
        tableauPoolsModele: Modeles.Tableaux.TableauPoolsModele;
        tableauHorsModeles: Modeles.Tableaux.TableauPoolsHorsModele;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, donneesService: Services.Application.IDonneesService, toolsService: Services.IToolsService, poolsService: Services.PoolsService, contextService: Services.ContextService, affichageService: Services.AffichageService, navigationService: MyWay.UI.INavigationService);
        /**
         * Construit le tableau d'objets cadre de financement en fonction des pools récupérés
         */
        private definirAffichageDonnees(pools);
    }
}

declare module creditsGac.Modeles.Tableaux {
    class TableauPoolsHorsModele implements MyWay.UI.ImwTableOptions {
        private tableauColonneNumero;
        private tableauColonneLibellePool;
        private tableauColonneDateFin;
        private tableauColonneRisqueEtablissement;
        private tableauColonneFinancement;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.IPoolModele[];
        selectedItems: Modeles.IPoolModele[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        constructor(donneesTableaux: Modeles.IPoolModele[]);
    }
}

declare module creditsGac.Modeles.Tableaux {
    class TableauPoolsModele implements MyWay.UI.ImwTableOptions {
        private tableauColonneNumero;
        private tableauColonneLibellePool;
        private tableauColonneDateFin;
        private tableauColonneRisqueEtablissement;
        private tableauColonneFinancement;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.IPoolModele[];
        selectedItems: Modeles.IPoolModele[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        constructor(donneesTableaux: Modeles.IPoolModele[]);
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran de tarification
     * @author S0077481
     */
    class TarificationDetailControleur {
        private donneesService;
        private $modalInstance;
        private serviceAgentExtended;
        private ligneTarification;
        private tarificationService;
        private affichageService;
        private toolsService;
        loading: boolean;
        /** Injection de dépendances */
        static $inject: string[];
        detailTarification: Modeles.ITarificationDetail;
        afficherBtnModalitesDossier: boolean;
        afficherBtnModalitesPerio: boolean;
        fraisPeriodiqueToutesModalites: boolean;
        fraisDossierToutesModalites: boolean;
        /** Initialisation */
        constructor(donneesService: Services.Application.IDonneesService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, ligneTarification: Modeles.Affichage.TarificationStandardDetail, tarificationService: Services.ITarificationService, affichageService: Services.AffichageService, toolsService: Services.IToolsService);
        private definirAffichageBtnModalites();
        calculerRemise(a: number, b: number, dec: number): string;
        /** Valider la modification de la tarification */
        valider(): void;
        /** Fermeture de la modal */
        close(): void;
    }
}

declare module creditsGac.Modeles {
    class ITarificationDetail {
        tarificationDerogatoire: boolean;
        commissionPeriodiquePapier: number;
        commissionPeriodiqueInternet: number;
        fraisPeriodiquePapier: number;
        fraisPeriodiqueInternet: number;
        fraisPeriodiqueStandardInternet: number;
        fraisPeriodiqueStandardPapier: number;
        dateFinCommissionPeriodiquePapier: string;
        dateFinCommissionPeriodiqueInternet: string;
        montantMinimumPerception: number;
        dateFinMontantMinimumPerception: string;
        fraisDossierPapier: number;
        fraisDossierInternet: number;
        fraisStandardDossierPapier: number;
        fraisStandardDossierInternet: number;
        dateFinFraisDossierPapier: string;
        dateFinFraisDossierInternet: string;
        remiseCommissionPeriodiquePapier: string;
        remiseCommissionPeriodiqueInternet: string;
        remiseFraisDossierPapier: string;
        remiseFraisDossierInternet: string;
        fraisCopieConforme: string;
        remiseCopieConforme: string;
    }
}

declare module creditsGac.Directives.Controleurs {
    /**
     * Controleur de la directive détail de la tarification
     */
    class MwDetailTarificationControleur implements MyWay.UI.ISelectionChangeHandler {
        private modalService;
        private scope;
        private tarificationService;
        private serviceAgentExtended;
        /** Injection de dépendances */
        static $inject: string[];
        /** declaration des variables */
        tarificationDetailList: Modeles.Tableaux.TableauDetailTarification;
        identifiantLigneAutorisation: string;
        private lignesTarificationsStandard;
        /** Initialisation */
        constructor(modalService: MyWay.UI.IModalService, scope: ng.IScope, tarificationService: Services.ITarificationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /** ouverture de la modal
         * @param selectedObject {Object} ligne de tarification sélectionné
         */
        onSelectionChange(selectedObject: Object): void;
    }
}

declare module creditsGac.Directives {
    /**
     * Directive affichant le détail d'une tarification
     */
    function mwDetailTarification(): ng.IDirective;
}

declare module creditsGac.Modeles.Tableaux {
    class TableauDetailTarification implements MyWay.UI.ImwTableOptions {
        private tableauColonnePartenariat;
        private tableauColonneDateButoir;
        private tableauColonneFraisReceptionPv;
        private tableauColonneFraisPeriodiquePapier;
        private tableauColonneInternet;
        private tableauColonneFraisDossierPapier;
        private tableauColonneFraisDossierInternet;
        private tableauColonneDateModification;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.Affichage.TarificationStandardDetail[];
        selectedItems: Modeles.Affichage.TarificationStandardDetail[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        constructor(donneesTableaux: Modeles.Affichage.TarificationStandardDetail[], handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsGac.Directives.Controleurs {
    /**
     * Controleur de la directive footer de la gac
     */
    class MwFooterControleur {
        private serviceAgentExtended;
        private affichageService;
        private $location;
        private navigationService;
        private applicationService;
        private habilitationService;
        /** Injection de dépendances */
        static $inject: string[];
        /**
         * Informations utiles au footer
         */
        libelleRetourPartenariat: string;
        caracteristiquesGac: EpsCommun.Modeles.Attributs.ICaracteristiqueGAC;
        validationAutorise: boolean;
        dataListeActions: MyWay.UI.IBoutonActionRiche[];
        private habilitations;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, affichageService: Services.AffichageService, $location: ng.ILocationService, navigationService: MyWay.UI.INavigationService, applicationService: Services.ApplicationService, habilitationService: EpsCommun.Services.HabilitationService);
        /**
         * Validation des attributs du client si celui-ci est en attente
         */
        validerAttributsClient(): void;
        /**
         * Redirection vers la page de modification du partenariat
         */
        private modifierPartenariat();
        /**
         * Redirection vers la page précédente à la demande de changement de partenariat
         */
        retourPartenariat(): void;
        /**
         * Redirection vers la page précédente dans le cas du mode tarification
         */
        retourTarification(): void;
        /**
         * Redirection vers la page précédente dans le cas du mode pool modèles
         */
        retourPoolsModeles(): void;
        private supprimerAttributsClient();
        /**
         * Défini le libellé de retour sur la page de modification du partenariat
         */
        private definirLibelleRetourPartenariat();
        /**
         * Détermine si on peut ou non afficher le bouton de validation des attributs GAC
         */
        private definirValidationAttributs();
        /**
         * Détermine les boutons à ajouter dans le "+ d'actions"
         */
        private definirBoutonPlusActions();
    }
}

declare module creditsGac.Directives {
    /**
     * Directive de gestion du footer et des boutons d'actions de la SPA
     * Affichage sous forme de pied de pages pour l'ensemble des pages de la SPA
     */
    function footer(): ng.IDirective;
}

declare module creditsGac.Directives.Controleurs {
    /**
     * Controleur de la directive informations sur les dernieres modifications
     */
    class MwInformationsControleur {
        private $scope;
        /** Injection de dépendances */
        static $inject: string[];
        /** Initialisation */
        constructor($scope: ng.IScope);
    }
}

declare module creditsGac.Directives {
    /**
     * Directive affichant des informations de dernieres modification
     */
    function mwInformations(): ng.IDirective;
}

declare module creditsGac.Directives.Controleurs {
    /**
     * Controleur de la directive entete-gac
     */
    class MwHeaderControleur {
        private serviceAgentExtended;
        private entitetitulaire;
        private contentieuxService;
        private applicationService;
        /** Injection de dépendances */
        static $inject: string[];
        /**
         * Informations à afficher dans l'entête
         */
        caracteristiquesGac: EpsCommun.Modeles.Attributs.ICaracteristiqueGAC;
        partenariat: EpsCommun.Modeles.Partenariat.IRecherchePartenariatEPS;
        raisonSociale: string;
        notationTiers: EpsCommun.Modeles.Contentieux.INotationTiers;
        libelleAlert: string;
        libelleAgence: string;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, entitetitulaire: EpsCommun.Services.EntiteTitulaireService, contentieuxService: EpsCommun.Services.ContentieuxService, applicationService: Services.ApplicationService);
        /**
         * Définir l'affichage de l'entête de navigation des attributs GAC
         */
        private definirAffichageHeader();
    }
}

declare module creditsGac.Directives {
    /**
     * Directive d'information des attributs du client courant
     * Affichage sous forme d'entête pour l'ensemble des pages de la SPA
     */
    function header(): ng.IDirective;
}

declare module creditsGac.Services {
    class DonneesDelocaliseeService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name getBT2E
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * méthode qui retourne la liste des familles EnCours
         * @param {string} : le code établissement courant dans le contexte
         * @returns {ng.IPromise<Object>} liste des familles Encours
         */
        getBT2E(codeEtablissement: string): ng.IPromise<Object>;
        /**
         * @ngdoc method
         * @name getBT2F
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * méthode qui retourne la liste des types de partenariat
         * @param {string} : le code établissement courant dans le contexte
         * @returns {ng.IPromise<Object>} liste des types de partenariat
         */
        getBT2F(codeEtablissement: string): ng.IPromise<Object>;
        /**
         * @ngdoc method
         * @name getBT2G
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * méthode qui retourne la liste des lignes d'autorisation à créer automatiquement
         * @param {string} : le code établissement courant dans le contexte
         * @returns {ng.IPromise<Object>} liste des lignes d'autorisation
         */
        getBT2G(codeEtablissement: string): ng.IPromise<Object>;
        /**
         * @ngdoc method
         * @name getBT2H
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * méthode qui retourne la liste des pool type automatique
         * @param {string} : le code établissement courant dans le contexte
         * @returns {ng.IPromise<Object>} liste des pool type automatique
         */
        getBT2H(codeEtablissement: string): ng.IPromise<Object>;
        /**
         * @ngdoc method
         * @name getBT2I
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * méthode qui retourne la détermination payeur
         * @param {string} : le code établissement courant dans le contexte
         * @returns {ng.IPromise<Object>} liste de détermination payeur
         */
        getBT2I(codeEtablissement: string): ng.IPromise<Object>;
    }
}

declare module creditsGac.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module creditsGac.Controleurs {
    /**
     * Controleur de l'écran des pools
     * @author S0077537
     */
    class FamillesUtilisablesPoolControleur implements MyWay.UI.ISelectionChangeHandler {
        private serviceAgentExtended;
        private $modalInstance;
        private poolsService;
        private contextService;
        private poolClient;
        private ligneAutorisationService;
        private applicationService;
        /** Injection de dépendances */
        static $inject: string[];
        listeFamillesUtilisables: Modeles.IFamillesUtilisable[];
        private lignesAutorisations;
        /** Initialisation */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, poolsService: Services.PoolsService, contextService: Services.ContextService, poolClient: Modeles.IPool, ligneAutorisationService: Services.LigneAutorisationService, applicationService: Services.ApplicationService);
        /**
         * Handler de sélection sur le tableau des pools modèles
         * @param selectedObject {Object} ligne courante sélectionnée
         */
        onSelectionChange(selectedObject: Modeles.IPoolModele): void;
        /**
         * Gestion de la validation du rattachement d'un pool aux lignes d'autorisations
         */
        ok(): void;
        /** Fermeture de la modal */
        close(): void;
    }
}

declare module creditsGac.Modeles.Tableaux {
    class TableauFamillesUtilisable implements MyWay.UI.ImwTableOptions {
        private tableauColonneUtilisable;
        private tableauColonneLibelleFamille;
        private tableauColonnePartenariat;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.IPoolModele[];
        selectedItems: Modeles.IPoolModele[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        constructor(donneesTableaux: Modeles.IPoolModele[], handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module creditsGac.Directives.Controleurs {
    /**
     * Controleur de la directive détail d'une ligne pool modèle
     */
    class MwDetailLignePoolsControleur {
        private scope;
        private serviceAgentExtended;
        private cadreFinancementService;
        private poolsService;
        /** Injection de dépendances */
        static $inject: string[];
        /** declaration des variables */
        poolModele: Modeles.IPoolModele;
        poolsRattaches: EpsCommun.Modeles.Pools.ICadreFinancement[];
        tableauPoolsRattachement: Modeles.Tableaux.TableauPoolsRattachement;
        /** Initialisation */
        constructor(scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, cadreFinancementService: EpsCommun.Services.CadreFinancementService, poolsService: Services.PoolsService);
    }
}

declare module creditsGac.Directives {
    /**
     * Directive affichant le détail d'une tarification
     */
    function mwDetailLignePool(): ng.IDirective;
}

declare module creditsGac.Modeles.Tableaux {
    class TableauPoolsRattachement implements MyWay.UI.ImwTableOptions {
        private tableauColonneNumero;
        private tableauColonneLibellePool;
        private tableauColonneDateFin;
        private tableauColonneRisqueEtablissement;
        private tableauColonneFinancement;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.IPoolModele[];
        selectedItems: Modeles.IPoolModele[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        templateUrl: string;
        constructor();
    }
}
