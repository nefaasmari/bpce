
declare module administrationAide {
    var app: any;
}

declare module administrationAide.Modele {
    interface IAction {
        titreAction: string;
        clicAction: any;
    }
    class Action implements IAction {
        titreAction: string;
        clicAction: any;
        constructor(titre?: string, clic?: any);
    }
}

declare module administrationAide.Modele {
    interface IEtablissement {
        cenfe: boolean;
        ceidf: boolean;
        celc: boolean;
        cera: boolean;
        cen: boolean;
        cepac: boolean;
        cemp: boolean;
        celr: boolean;
        cecaz: boolean;
        cepal: boolean;
        cff: boolean;
        cebfc: boolean;
        ceapc: boolean;
        celda: boolean;
        celca: boolean;
    }
    class EtablissementRecherche {
        cenfe: boolean;
        ceidf: boolean;
        celc: boolean;
        cera: boolean;
        cen: boolean;
        cepac: boolean;
        cemp: boolean;
        celr: boolean;
        cecaz: boolean;
        cepal: boolean;
        cff: boolean;
        cebfc: boolean;
        ceapc: boolean;
        celda: boolean;
        celca: boolean;
        /**
         * Construction d'un objet Etablissement
         * @param cenfe: boolean
         * @param ceidf: boolean
         * @param celc: boolean
         * @param cenra: boolean
         * @param cen: boolean
         */
        constructor();
    }
    class Etablissement {
        codeEtablissement: string;
        libelleEtablissement: string;
        designationEtablissement: string;
        actif: boolean;
        /**
         * Constructeur de la classe
         * @param code: string
         * @param libelle: string
         * @param designation: string
         */
        constructor(code?: string, libelle?: string, designation?: string);
    }
}

declare module administrationAide.Service {
    import Etablissement = administrationAide.Modele.Etablissement;
    class EtablissementService {
        private $http;
        private serviceAgent;
        static $inject: string[];
        constructor($http: ng.IHttpService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne la liste des établissements connus en base
         * @return promise: ng.IPromise
         */
        listerEtablissement(): ng.IPromise<Etablissement[]>;
    }
}

declare module administrationAide.Service {
    interface IPointEntree {
        code: string;
        name: string;
    }
    /**
     * Service de récupération de la liste des processus & étapes Lisa
     */
    class ProcessusEtapesService {
        private defautService;
        private serviceAgent;
        static $inject: string[];
        /**
         * Constructeur du service
         */
        constructor(defautService: administrationAide.Service.DefautService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Récupère la ressource Lisa (ImportExport) pour ensuite stocker les processus & étapes de l'application
         */
        recupererRessourceLisa(): void;
        /**
         * Extrait la liste des processus de l'objet ressource Lisa
         * @param ressource - Ressource Lisa
         */
        private extraireProcessus(ressource);
        /**
         * Extrait la liste des étapes de l'objet ressource Lisa
         * @param ressource - Ressource Lisa
         */
        private extraireEtapes(ressource);
    }
}

declare module administrationAide.Modele {
    interface IEtat {
        archive: boolean;
        enCours: boolean;
        aVenir: boolean;
        permanent: boolean;
    }
    class Etat {
        archive: boolean;
        enCours: boolean;
        aVenir: boolean;
        permanent: boolean;
        /**
         * Construction d'un objet Etat
         * @param archive: boolean - Recherche par archive
         * @param enCours: boolean - Recherche par enCours
         * @param aVenir: boolean - Recherche par aVenir
         * @param permanent: boolean - Recherche par permanent
         */
        constructor();
    }
}

declare module administrationAide.Modele {
    interface IOrigine {
        mysys: boolean;
        etablissement: boolean;
    }
    class Origine {
        mysys: boolean;
        etablissement: boolean;
        /**
         * Construction d'une Tuile d'arborecence
         * @param mysys: boolean - Recherche par message MySys
         * @param etablissement: boolean - Recherche par message Etablissement
         */
        constructor();
    }
}

declare module administrationAide.Modele {
    interface IBagageDTO {
        id: number;
        etablissement: string;
        processus: string;
        etape: string;
        idCategorie: number;
        codeAccesSecondaire: string;
        codeAccesTertiaire: string;
        libelleTitreTuile: string;
        libelleURL: string;
        dateDebut: Date;
        dateFin: Date;
        nouveaute: boolean;
        dateFinNouveaute: Date;
        numeroOrdre: number;
        codeTypeBagage: string;
        majDate: Date;
    }
    /**
     * Classe représentant un bagage
     */
    class Bagage implements IBagageDTO {
        id: number;
        etablissement: string;
        processus: string;
        etape: string;
        idCategorie: number;
        codeAccesSecondaire: string;
        codeAccesTertiaire: string;
        libelleTitreTuile: string;
        libelleURL: string;
        dateDebut: Date;
        dateFin: Date;
        nouveaute: boolean;
        dateFinNouveaute: Date;
        numeroOrdre: number;
        codeTypeBagage: string;
        majDate: Date;
        constructor(donnees?: Bagage);
    }
}

declare module administrationAide.Service {
    import Bagage = administrationAide.Modele.Bagage;
    import Categorie = administrationAide.Modele.Categorie;
    class BagageService {
        private defautService;
        private serviceAgent;
        private notificationService;
        static $inject: string[];
        constructor(defautService: administrationAide.Service.DefautService, serviceAgent: MyWay.Services.ServiceAgentExtended, notificationService: MyWay.UI.MwNotificationService);
        /**
         * Récupère la liste des bagages en base de données, suivant le code établissement renseigné
         * @returns :ng.IPromise - Promesse contenant la liste des bagages
         */
        listerBagage(): ng.IPromise<Bagage[]>;
        /**
         * Créé un bagage en base de données
         * @param bagage: Bagage - Le bagage à créer
         * @returns :ng.IPromise<Bagage> - Promesse de traitement, avec le bagage nouvellement créé
         */
        creerBagage(bagage: Bagage): ng.IPromise<Bagage>;
        /**
         * Modifie le bagage en base de données
         * @param bagage: Bagage - Le bagage à modifier
         * @returns :ng.IPromise<Bagage> - Promesse de traitement, avec le bagage modifié
         */
        modifierBagage(bagage: Bagage): ng.IPromise<Bagage>;
        /**
         * Supprime le bagage en base de données
         * @param idBagage: number - Identifiant du bagage à supprimer
         */
        supprimerBagage(idBagage: number): void;
        /**
         * Liste les catégories disponibles pour l'établissement
         * @returns :ng.IPromise<Categorie[]> - Promesse de récupération des catégories
         */
        listerCategories(): ng.IPromise<Categorie[]>;
    }
}

declare module administrationAide.Modele {
    interface ICategorieDTO {
        id: number;
        etablissement: string;
        libelle: string;
        majDate: Date;
    }
    class Categorie implements ICategorieDTO {
        id: number;
        etablissement: string;
        libelle: string;
        majDate: Date;
        constructor(donnees?: Categorie);
    }
}

declare module administrationAide.Modele {
    interface IFlashDTO {
        id: number;
        etablissement: string;
        processus: string;
        etape: string;
        dateDebut: Date;
        dateFin: Date;
        majUser: string;
        majDate: Date;
        exclusion: Array<string>;
        titre: string;
        contenu: string;
    }
    class Flash implements IFlashDTO {
        id: number;
        etablissement: string;
        processus: string;
        libelleProcessus: string;
        entree: string;
        etape: string;
        titre: string;
        contenu: string;
        dateDebut: Date;
        sDateDebut: string;
        dateFin: Date;
        sDateFin: string;
        majUser: string;
        majDate: Date;
        exclusion: string[];
        actif: string;
        /**
         * Constructeur
         * @param publicationDateDebut: string - Date de début du message
         * @param publicationDateFin: string - Date de fin du message
         * @param majUtilisateur: string - Nom de l'utilisateur qui à fait la dernière MAJ
         * @param majDate: string - Date de la dernière MAJ utilisateur
         * @param etablissement: string - Recherche dans le etablissement
         * @param processus: string - Recherche par type processus
         * @param etat: string - affichage de l'état actif ou inactif
         * @param contenu: string - affichage du contenu
         */
        constructor(donnees?: Flash);
        /**
         * Vérifie si l'objet flash est valide
         */
        estValide(): boolean;
    }
}

declare module administrationAide.Service {
    import Flash = administrationAide.Modele.Flash;
    class FlashService {
        private serviceAgent;
        private defautService;
        private notificationService;
        static $inject: string[];
        flash: Flash;
        codeEtablissement: string;
        /**
         * Récupère la liste des flashs existants en base, avec des critères de recherche si nécessaire
         * @param params: any[] - Paramètres de recherche
         * @returns ng.IPromise<Flash[]> - La promesse de la requête, contenant les données trouvées
         */
        listerFlash(params?: any[]): ng.IPromise<Flash[]>;
        /**
         * Constructeur
         * @param serviceAgent: MyWay.Services.ServiceAgentExtended: Objet ServiceAgent
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, defautService: administrationAide.Service.DefautService, notificationService: MyWay.UI.MwNotificationService);
        /**
         * @method creerFlash: Crée un flash en base
         * @param flash: Le flash à créer
         * @returns ng.IPromise<Flash> : promesse du traitement ajax
         */
        creerFlash(flash: Flash): ng.IPromise<Flash>;
        /**
         * @method: Mets à jour un Flash en base
         * @param flash: Flash : Flash à mettre à jour
         * @returns: ng.IPromise<Flash> - promesse de la requête
         */
        modifierFlash(flash: Flash): ng.IPromise<Flash>;
        /**
         * Supprime un flash en base de données
         * @param id: number - L'identifiant du flash à supprimer
         * @returns: ng.IPromise<string> - promesse de la requête
         */
        supprimerFlash(idFlash: number): ng.IPromise<string>;
        /**
         * Active ou désactive le flash pour cet établissement
         * @param flash: administrationAide.Modele.Flash - Le flash à activer/désactiver pour cet établissement
         * @param action: string - Action pour déterminer le message de notification une fois l'activation ou la désactivation effectuée
         * @returns: ng.IPromise<Boolean> - promesse de la requête
         */
        activationFlash(flash: administrationAide.Modele.Flash, action: string): ng.IPromise<void>;
        /**
         * Active ou désactive le flash pour l'établissement de l'utilisateur connecté (mode établissement)
         * @param action: string - L'action à effectuer
         * @param flash: Flash - Le flash concerné
         * @returns flash - Le flash activé ou désactivé
         */
        private activationEtablissement(action, flash);
        /**
         * Active ou désactive le flash pour tous les établissements (mode communautaire)
         * @param action: string - L'action à effectuer
         * @param flash: Flash - Le flash concerné
         * @returns flash - Le flash activé ou désactivé
         */
        private activationTousEtablissements(action, flash);
    }
    interface IFlashService {
        listerFlash: () => ng.IPromise<Flash[]>;
    }
}

declare module administrationAide.Modele {
    interface IChamp {
        id: number;
        nom: string;
        libelle: string;
    }
    class Champ implements IChamp {
        id: number;
        nom: string;
        libelle: string;
        /**
         * Constructeur de l'objet Champ
         * @param donnees? : Champ - Champ à partir duquel le nouvel objet Champ sera construit
         */
        constructor(donnees?: Champ);
    }
}

declare module administrationAide.Modele {
    interface IInfobulleDTO {
        id: number;
        idChamp: number;
        etablissement: string;
        processus: string;
        etape: string;
        dateDebut: Date;
        dateFin: Date;
        majUser: string;
        majDate: Date;
        dateFinNouveaute: Date;
        exclusion: string[];
        contenu: string;
        image: string;
        token: boolean;
        nomChamp: string;
        nouveaute: boolean;
    }
    class Infobulle implements IInfobulleDTO {
        id: number;
        idChamp: number;
        etablissement: string;
        processus: string;
        etape: string;
        dateDebut: Date;
        dateFin: Date;
        majUser: string;
        majDate: Date;
        dateFinNouveaute: Date;
        exclusion: string[];
        contenu: string;
        contenuCommunautaire: string;
        contenuEtablissement: string;
        image: string;
        token: boolean;
        nomChamp: string;
        nouveaute: boolean;
        libelleChamp: string;
        /**
         * Construction
         * id: number;
         * idChamp: number;
         * etablissement: string;
         * processus: string;
         * etape: string;
         * dateDebut: Date;
         * dateFin: Date;
         * majUser: string;
         * majDate: Date;
         * dateFinNouveaute: Date;
         * exclusion: string[];
         * champs: string;
         * contenu: string;
         * image: string;
         * token: boolean;
         * nomChamp: string;
         * nouveaute: boolean;
         */
        constructor(donnees?: Infobulle);
        /**
         * Vérifie si l'objet infobulle est valide
         */
        estValide(): boolean;
    }
}

declare module administrationAide.Service {
    import Infobulle = administrationAide.Modele.Infobulle;
    import RechercheInfobulle = administrationAide.Modele.RechercheInfobulle;
    class InfobulleService {
        private $http;
        private serviceAgent;
        private defautService;
        private notificationServce;
        static $inject: string[];
        infobulle: Infobulle;
        contenuCommunautaire: string;
        dateDebutCommunautaire: Date;
        dateFinNouveauteCommunautaire: Date;
        listeZonesDeSaisie: administrationAide.Modele.Champ[];
        precedenteRecherche: RechercheInfobulle;
        garderRechercheSimple: boolean;
        garderRechercheAvancee: boolean;
        rechercheInfobulleAvanceeSauvegardee: administrationAide.Modele.RechercheInfobulle;
        rechercheInfobulleSimpleSauvegardee: administrationAide.Modele.Champ;
        duplication: boolean;
        /**
         * Constructeur
         * @param $http: ng.IHttpService - Service $http d'angular
         * @param serviceAgent: MyWay.Services.ServiceAgentExtended - ServiceAgentExtended MyWay
         * @param defautService: administrationAide.Service.DefautService - Service par défaut de l'application
         * @param notificationServce: MyWay.UI.MwNotificationService - Service de notification MyWay
         */
        constructor($http: ng.IHttpService, serviceAgent: MyWay.Services.ServiceAgentExtended, defautService: administrationAide.Service.DefautService, notificationServce: MyWay.UI.MwNotificationService);
        /**
         * Télécharge une image pour l'infobulle
         * @param fichier: File - Le fichier à télécharger, de type image
         * @param idInfobulle: number - L'identifiant de l'infobulle à mettre à jour.
         */
        telechargerImage(fichier: File, idInfobulle: number): void;
        /**
         * Méthode de récupération des champs de saisie des formulaires MyWay
         */
        listerChampsMyWay(): ng.IPromise<administrationAide.Modele.Champ[]>;
        /**
         * Méthode de récupération des différents tokens disponibles
         * @returns promesse: ng.IPromise<administrationAide.Modele.Token[]> - Promesse de traitement
         */
        listerTokens(): ng.IPromise<administrationAide.Modele.Token[]>;
        /**
         * Fonction pour appeler le service rest de création d'une infobulle en base de données
         * @param infobulle: Infobulle - L'infobulle à créer
         * @returns :ng.IPromise<Infobulle> - Une promesse retournant l'infobulle créée en cas de réussite, ou rien en cas d'échec
         */
        listerInfobulle(criteres?: any[]): ng.IPromise<Infobulle[]>;
        /**
         * Fonction pour appeler le service rest de création d'une infobulle en base de données
         * @param infobulle: Infobulle - L'infobulle à créer
         * @returns :ng.IPromise<Infobulle> - Une promesse retournant l'infobulle créée en cas de réussite, ou rien en cas d'échec
         */
        creerInfobulle(infobulle: Infobulle): ng.IPromise<Infobulle>;
        /**
         * Fonction pour appeler le service rest de modification d'une infobulle en base de données
         * @param infobulle: Infobulle - L'infobulle à modifier
         * @returns :ng.IPromise<Infobulle> - Une promesse retournant l'infobulle modifiée en cas de réussite, ou rien en cas d'échec
         */
        modifierInfobulle(infobulle: Infobulle): ng.IPromise<Infobulle>;
        /**
         * Fonction pour appeler le service rest de suppression d'une infobulle en base de données
         * Une suppression de l'infobulle par le communautaire entraînera la suppression de toutes les personnalisations établissements
         * @param idInfobulle: number - L'identifiant de l'infobulle à supprimer
         * @returns : ng.IPromise<void> - Promesse ne retournant aucun type en cas de succès
         */
        supprimerInfobulle(idInfobulle: number): ng.IPromise<void>;
        /**
         * Trie les infobulles en fonction des processus & étapes
         * @param a: Infobulle - L'infobulle à trier
         * @returns :number - Le résultat du tri
         */
        trierInfobulleProcessusEtapes(a: Infobulle): number;
    }
}

declare module administrationAide.Modele {
    interface IToken {
        id: number;
        nom: string;
        libelle: string;
    }
    class Token implements IToken {
        /**
         * Identifiant token
         */
        id: number;
        /**
         * Nom du token
         */
        nom: string;
        /**
         * Libelle token
         */
        libelle: string;
        /**
         * Constructeur de la classe
         */
        constructor(donnees: Token);
    }
}

declare module administrationAide {
    class DefautControleur {
        footerService: administrationAide.Service.FooterService;
        defautService: administrationAide.Service.DefautService;
        private processusEtapesService;
        private etablissementService;
        private infobulleService;
        private $http;
        static $inject: string[];
        localite: string;
        version: string;
        $animate: ng.IAnimateService;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgentExtended;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, footerService: administrationAide.Service.FooterService, defautService: administrationAide.Service.DefautService, processusEtapesService: administrationAide.Service.ProcessusEtapesService, etablissementService: administrationAide.Service.EtablissementService, infobulleService: administrationAide.Service.InfobulleService, $animate: ng.IAnimateService, $timeout: ng.ITimeoutService, $http: ng.IHttpService);
        secouerMoi(event: any): void;
        testerServiceAgent(): void;
        /**
         * Récupération de la référence externe agent & du code établissement
         */
        private recupererAuthentificationInfo();
    }
}

declare module administrationAide.Service {
    class DefautService {
        private $http;
        private $q;
        static $inject: string[];
        CODE_COMMUNAUTAIRE: string;
        URL_TELECHARGEMENT_IMAGE: string;
        habilitations: string[];
        referenceExterneAgent: string;
        codeEtablissement: string;
        codeUtilisateur: string;
        listeProcessus: any[];
        listeEtapes: any[];
        listeEtablissements: administrationAide.Modele.Etablissement[];
        rechercheFlashSauvegardee: administrationAide.Modele.RechercheFlash;
        garderResultats: boolean;
        resultatsRechercheInfobulles: any[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $http: ng.IHttpService, $q: ng.IQService);
        details(serviceUrl: string): void;
        /**
         * Retourne le code établissement de l'utilisateur
         * @returns :string - Le code établissement
         */
        retournerCodeEtablissement(): string;
        /**
         * Récupère les habilitations de l'utilisateur
         * @returns :any[] - Habilitations de l'utilisateur /!\ BOUCHONNE
         */
        recupererHabilitations(): ng.IPromise<any>;
        /**
         * Fonction de tri des objets processus et étapes
         */
        trierOrdreAlphabetique(a: any, b: any): number;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module administrationAide {
}

declare module administrationAide {
    class FooterControleur {
        private serviceAgent;
        footerService: administrationAide.Service.FooterService;
        private defautService;
        private $timeout;
        private $document;
        static $inject: string[];
        private $scope;
        private $rootScope;
        private $location;
        afficheActions: string;
        /**
         * Contruction du formulaire projet
         * @param serviceAgent: MyWay.Services.ServiceAgentExtended
         * @param $scope: ng.IScope
         * @param $rootScope: ng.IRootScope
         * @param footerService: administrationAide.Service.FooterService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, footerService: administrationAide.Service.FooterService, defautService: administrationAide.Service.DefautService, $timeout: ng.ITimeoutService, $document: ng.IDocumentService);
        /**
         * Demande au rootScope le broadcast du message 'ValiderFlash', pour la validation du flash via le controleur dédié
         */
        validerFlash(): void;
        /**
         * Demande au rootScope le broadcast du message 'AnnulerFlash', pour l'annulation du flash en cours de création/modification
         */
        annulerFlash(): void;
        /**
         * Demande au rootScope le broadcast du message 'ModifierSelectionFlash', pour la modification du flash sélectionné
         */
        modifierFlash(): void;
        /**
         * Redirige l'utilisateur sur la page de création d'un flash
         */
        creerFlash(): void;
        /**
         * Demande au rootScope le broadcast du message 'SupprimerFlash', pour la suppression du flash sélectionné
         */
        supprimerFlash(): void;
        /**
         * Demande au rootScope le broadcast du message 'ApercuFlash', pour l'aperçu du flash sélectionné
         */
        apercuFlash(): void;
        /**
         * Demande au rootScope le broadcast du message 'ParametrerFlash', pour déclencher l'activation ou la désactivation du flash pour cet établissement
         */
        activationFlash(): void;
        /**
         * Demande au rootScope le broadcast du message 'CreerInfobulle', pour la création d'une infobulle via le champ sélectionné
         */
        creerInfobulle(): void;
        /**
         * Demande au rootScope le broadcast du message 'ValiderInfobulle', pour valider la création ou modification d'une infobulle
         */
        validerInfobulle(): void;
        annulerInfobulle(): void;
        /**
         * Demande au rootScope le broadcast du message 'ModifierSelectionInfobulle', pour la modification de l'infobulle sélectionnée via son identifiant
         */
        modifierInfobulle(idInfobulle: number): void;
        /**
         * Demande au rootScope le broadcast du message 'PersonnalisationInfobulle',
         * pour afficher la liste des personnalisations effectuées par les établissements sur l'infobulle, via son identifiant
         */
        personnalisationEtablissementInfobulle(idInfobulle: number): void;
        private submit();
    }
}

declare module administrationAide.Service {
    class FooterService {
        private serviceAgent;
        static $inject: string[];
        libelleActiver: string;
        afficheApercuFlash: boolean;
        afficheCreerFlash: boolean;
        afficheModifierFlash: boolean;
        afficheSupprimerFlash: boolean;
        afficheValiderFlash: boolean;
        afficheAnnulerFlash: boolean;
        afficheAjouterInfobulle: boolean;
        afficheCreerInfobulle: boolean;
        afficheModifierInfobulle: boolean;
        afficheSupprimerInfobulle: boolean;
        affichePersonnalisationInfobulle: boolean;
        afficheValiderInfobulle: boolean;
        afficheAnnulerInfobulle: boolean;
        /**
         * Constructeur
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Masque tous les boutons & libellés associés si nécessaire
         */
        masqueTout(): void;
    }
    interface IFooterService {
        libelleActiver: () => string;
        afficheApercuFlash: () => boolean;
        afficheCreerFlash: () => boolean;
        afficheModifierFlash: () => boolean;
        afficheSupprimerFlash: () => boolean;
        afficheValiderFlash: () => boolean;
        afficheAnnulerFlash: () => boolean;
        afficheCreerInfobulle: () => boolean;
        afficheModifierInfobulle: () => boolean;
        afficheSupprimerFlashInfobulle: () => boolean;
    }
}

declare module administrationAide {
    class NavigationControleur {
        $routeParams: ng.route.IRouteParamsService;
        private flashService;
        private infobulleService;
        private navigationService;
        static $inject: string[];
        afficherTotemPrincipal: boolean;
        afficherTotemSecondaire: boolean;
        navigation: MyWay.UI.TotemPage[];
        navigationSection: MyWay.UI.TotemComponent[];
        sectionsFlash: MyWay.UI.TotemSection[];
        sectionsInfobulles: MyWay.UI.TotemSection[];
        constructor($routeParams: ng.route.IRouteParamsService, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, flashService: administrationAide.Service.FlashService, infobulleService: administrationAide.Service.InfobulleService, navigationService: MyWay.UI.NavigationService);
        /**
         * Détermine si oui ou non la page courante est une page de détails d'un objet aide
         * @param routeCourante: any - L'objet $route courant
         * @returns :boolean - le résultat du test
         */
        private estPageDetail(routeCourante);
        /**
         * Récupère le titre de la page active, parmi la liste des pages disponibles
         * @param lien: string - le chemin de la route
         * @returns titrePage: string - le titre de la page active
         */
        private titrePageCourante(lien);
        /**
         * Initialise le totme principal
         */
        initialiserTotem(): void;
        /**
         * Active la page du Totem de navigation, à partir de son titre
         * @param titrePage: string - titre de la page à activer
         */
        private setActivePage(titrePage?);
        /**
         * Charge les sections de la page détail du flash
         */
        chargerSectionFlash(titre: string): void;
        chargerSectionInfobulle(titre: string): void;
    }
}

declare module administrationAide {
    class ListeBagagesControleur {
        private $scope;
        private footerService;
        private bagageService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, footerService: administrationAide.Service.FooterService, bagageService: administrationAide.Service.BagageService);
    }
}

declare module administrationAide {
    class ApercuFlashControleur {
        private $scope;
        private $modalInstance;
        private $sce;
        private defautService;
        flash: administrationAide.Modele.Flash;
        static $inject: string[];
        private desactiver;
        private imgUrl;
        autorise: boolean;
        /**
         * Constructeur du controleur de la modal
         * @param $scope: ng.IScope - Scope de la modal
         * @param $modalInstance: ng.ui.bootstrap.IModalServiceInstance - Instance de la modal bootstrap
         * @param $compile: ng.ICompileService - Service de compilation du code html correspondant au contenu du flash
         * @param defautService: administrationAide.Service.DefautService - Service par défaut de l'application
         * @param flash: Flash - Flash dont le contenu sera affiché
         */
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, $sce: ng.ISCEService, defautService: administrationAide.Service.DefautService, flash: administrationAide.Modele.Flash);
        /**
         * Compile le contenu du flash en tant qu'élément html
         */
        private compilerContenu();
        /**
         * Ferme la modal
         */
        private fermerModal();
    }
}

declare module administrationAide {
    import Etablissement = administrationAide.Modele.Etablissement;
    class DetailFlashControleur {
        private serviceAgent;
        private defautService;
        private flashService;
        private modalService;
        footerService: administrationAide.Service.FooterService;
        private etablissementService;
        listeProcessus: any[];
        static $inject: string[];
        private libelleSelection;
        private toutSelectionne;
        private flash;
        titre: string;
        private previsualiserFlash;
        $scope: ng.IScope;
        private $location;
        listeEtablissements: Etablissement[];
        listeEtapes: any[];
        tinymceOptions: Object;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param flashService: administrationAide.Service.FlashService
         * @param modalService: MyWay.UI.IModalService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, defautService: administrationAide.Service.DefautService, flashService: administrationAide.Service.FlashService, modalService: MyWay.UI.IModalService, footerService: administrationAide.Service.FooterService, etablissementService: administrationAide.Service.EtablissementService, $location: ng.ILocationService, listeProcessus: any[]);
        /**
         * Initialise les listeners du $scope, en cas de diffusion de message
         */
        private initialiserListeners();
        /**
         * Récupère le flash sélectionné via la recherche
         */
        private recupererFlash();
        /**
         * Décoche les établissements exclus du flash
         */
        private decocheEtablissements(exclus, codeEtablissements);
        /**
         * Récupère la liste des établissements
         */
        private recupererListeEtablissement();
        /**
         * Sélectionne (ou désélectionne) tous les établissements
         */
        toutSelectionner(): void;
        /**
         * Met à jour la case tout sélectionner en fonction de ce qui est coché à la main
         */
        selectionner(): void;
        /**
         * Construit la popin de prévisualisation
         */
        previsualiser(): void;
        /**
         * Vérifie que le flash est valide
         */
        flashValide(): boolean;
        /**
         * Fonction appelé par le bouton de validation
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        validerFlash(): void;
        /**
         * Exclut les établissements qui ne sont pas cochés par l'utilisateur
         */
        private exclureEtablissements();
        /**
         * Annule la création/modification du flash en cours puis redirige sur la page de liste des flashs
         */
        annulerFlash(): void;
        /**
         * Récupère les étapes en fonction du processus sélectionné
         * @param processus: any - Processus sélectionné
         */
        recupererEtapes(processus: any): void;
        logCode(code: string): void;
    }
}

declare module administrationAide {
    class ListeFlashControleur implements MyWay.UI.ISelectionChangeHandler {
        private $sce;
        private $rootScope;
        private serviceAgent;
        private flashService;
        footerService: administrationAide.Service.FooterService;
        defautService: administrationAide.Service.DefautService;
        private modalService;
        private etablissementService;
        listeProcessus: any[];
        static $inject: string[];
        private afficheResultat;
        private rechercheFlash;
        private listeResultatFlash;
        private resultatSelectionne;
        private nombreResultat;
        private tableau;
        private idFlashSelectionne;
        private url;
        private $scope;
        private $location;
        private $route;
        libelleActivation: string;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param $rootScope: ng.IRootScopeService
         * @param $location: ng.ILocationService
         * @param $route: ng.route.IRouteService
         * @param serviceAgent: MyWay.Services.ServiceAgent
         * @param flashService: administrationAide.Service.FlashService
         * @param footerService: administrationAide.Service.FootkerService
         * @parma defautService: administrationAide.Service.DefautService
         * @param modalService: MyWay.UI.ModalService
         * @param listeProcessus: any[]
         */
        constructor($scope: ng.IScope, $sce: ng.ISCEService, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $route: ng.route.IRouteService, serviceAgent: MyWay.Services.ServiceAgent, flashService: administrationAide.Service.FlashService, footerService: administrationAide.Service.FooterService, defautService: administrationAide.Service.DefautService, modalService: MyWay.UI.ModalService, etablissementService: administrationAide.Service.EtablissementService, listeProcessus: any[]);
        /**
         * Prépare les listeners du contrôleur
         */
        private preparerListener();
        /**
         * Sauvegarde la recherche effectuée
         */
        private sauvegarderRecherche();
        /**
         * Fonction d'appel du service rest de recherche
         */
        rechercherFlashs(): void;
        private completerInformationsFlash(flashs);
        /**
         * Filtre les résultats de la recherche, en fonction de ce qui est coché par l'utilisateur
         * @param rechercheFlash: RechercheFlash - Objet contenant les critères de recherche
         * @param listeResultats: Flash[] - Les resultats de la recherche
         * @returns listeFiltree: Flash[] - Les résultats filtrés
         */
        private filtrerFlashs(rechercheFlash, listeResultats);
        /**
         * Récupère les paramètres s'ils ne sont pas vides, sous forme d'un dictionnaire
         * @param rechercheFlash: RechercheFlash - L'objet contenant les critères de recherche
         * @returns :any[] - La liste des paramètres
         */
        private construireParametres(rechercheFlash);
        /**
         * Fonction d'affichage du nombre de résultats
         * @parma nombre: number - Le onmbre de résultats
         */
        nombreResultats(nombre: number): void;
        /**
         * Fonction pour construire le tableau composant MyWay simple mono-sélection ou complexe
         * Voir application guide de style pour plus d'information
         */
        construireTableau(tableau: administrationAide.Modele.IRechercheFlash[], codeUtilisateur: string): void;
        /**
         * Fonction déclenchée à la sélection/déselection d'une ligne du tableau
         */
        onSelectionChange(flashSelectionne: administrationAide.Modele.Flash): void;
        /**
         * Fonction pour supprimer le flash sélectionné
         */
        supprimerFlash(): void;
        /**
         * Fonction pour modifier le flash sélectionné
         */
        modifierFlash(): void;
        /**
         * Fonction pour modifier l'activation du flash pour l'établissement
         * @param action: string - Action à réaliser sur le flash (Activer ou Désactiver)
         */
        activationFlash(action: string): void;
        /**
         * Construit la popin de prévisualisation
         */
        previsualiser(): void;
    }
}

declare module administrationAide.Modele {
    interface IRechercheFlash {
        processus?: string;
        publicationDateDebut?: string;
        publicationDateFin?: string;
        etatArchive?: boolean;
        etatEnCours?: boolean;
        etatAVenir?: boolean;
        etatPermanent?: boolean;
    }
    class RechercheFlash {
        processus: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        /**
         * Construction
         * @param publicationDateDebut: string - Date de début du message
         * @param publicationDateFin: string - Date de fin du message
         * @param processus: string - Recherche par type processus
         * @param etatArchive: string - Recherche par Etat archivé
         * @param etatEnCours: string - Recherche par Etat en cours
         * @param etatAVenir: string - Recherche par Etat à venir
         * @param etatPermanent: string - Recherche par Etat permanent
         */
        constructor(donnees?: RechercheFlash);
    }
}

declare module administrationAide {
    class DetailInfobulleControleur {
        private $location;
        private $sce;
        private $scope;
        private infobulleService;
        private modalService;
        private defautService;
        private footerService;
        private notificationService;
        listeProcessus: any[];
        static $inject: string[];
        private titre;
        private libelleSelection;
        private selection;
        private infobulle;
        private infobullePrevisaulisation;
        private etablissementRecherche;
        private toutSelectionne;
        private previsualiserInfobulle;
        private test;
        private listeEtapes;
        private listeTokens;
        private token;
        private montrerApercu;
        compteurContenu: string;
        formatOK: boolean;
        tailleOK: boolean;
        private informationsImage;
        private sDateDebut;
        private sDateFinNouveaute;
        limiteContenu: number;
        /**
         * Contruction du controleur detailInfobulle
         * @param $scope: ng.IScope
         * @param infobulleService: administrationAide.Service.InfobulleService
         * @param modalService: MyWay.UI.IModalService
         * @parem footerService: administrationAide.Service.FooterService
         */
        constructor($location: ng.ILocationService, $sce: ng.ISCEService, $scope: ng.IScope, infobulleService: administrationAide.Service.InfobulleService, modalService: MyWay.UI.IModalService, defautService: administrationAide.Service.DefautService, footerService: administrationAide.Service.FooterService, notificationService: MyWay.UI.IMwNotificationService, listeProcessus: any[]);
        /**
         * Récupère les tokens en base de données
         */
        private recupererTokens();
        /**
         * Complète le contenu de l'infobulle par le token sélectionné
         */
        private ajouterToken();
        /**
         * Prépare les listeners
         */
        private preparerListeners();
        /**
         * Annule l'action sur l'infobulle
         */
        private annulerInfobulle();
        /**
         * Créé ou modifie l'infobulle en base via le service et redirige sur la page de recherche d'infobulles
         */
        private validerInfobulle();
        /**
         * Prépare l'objet infobulle pour l'envoyer via le service REST
         * @param infobulle: Infobulle - L'infobulle qui sera créée ou modifiée
         * @returns infobulle: Infobulle - L'infobulle préparée
         */
        private preparerInfobulle(infobulle);
        /**
         * Télécharge l'image liée à l'infobulle
         * @param idInfobulle: number - L'identifiant de l'infobulle à laquelle lier l'image
         */
        telechargerImage(idInfobulle: number, image: any): void;
        /**
         * Récupère l'infobulle sélectionnée en page de recherche
         */
        private recupererInfobulle();
        /**
         * Récupère les informations communautaire à laquelle la personnalisation infobulle établissement est liée
         */
        private recupererInformationsCommunautaire();
        /**
         * Récupère les étapes après avoir choisi un processus
         * @param processus: any - Le processus sélectionné
         */
        private recupererEtapes(processus);
        /**
         * Permet une prévisualisation de l'infobulle, telle qu'elle sera présente pour l'utilisateur
         */
        previsualiser(): void;
        /**
         * Génère l'image à la volée pour le rendu
         */
        genererImage(): void;
        /**
         * Sélectionne l'input type 'file' pour ouvrir une fenetre de sélection de fichier
         */
        private selectionImage();
        private apercuDisponible();
    }
}

declare module administrationAide {
    import Infobulle = administrationAide.Modele.Infobulle;
    import Champ = administrationAide.Modele.Champ;
    import Action = administrationAide.Modele.Action;
    class ListeInfobulleControleur {
        private $sce;
        private $scope;
        private $location;
        private serviceAgent;
        private defautService;
        private infobulleService;
        footerService: administrationAide.Service.FooterService;
        private modalService;
        private notificationService;
        private listeEtablissements;
        listeZonesDeSaisie: Champ[];
        static $inject: string[];
        private idInfobulleSelectionne;
        private afficheCriteres;
        private libelleResultats;
        private afficheResultat;
        private afficheSupprimer;
        private rechercheInfobulle;
        private listeProcessus;
        zoneSelectionnee: administrationAide.Modele.Champ;
        private listeResultatInfobulle;
        resultatSelectionne: administrationAide.Modele.Infobulle;
        private nombreResultat;
        tableau: MyWay.UI.ImwTableOptions;
        resultatsInfobulles: administrationAide.Modele.Infobulle[];
        private resultatsTemporaires;
        listeApercuInfobulle: any[];
        listePersonnalisations: any[];
        codeUtilisateur: string;
        codeEtablissement: string;
        listeActions: Action[][];
        private longueurTableau;
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param administrationInfobulleService: administrationAide.Service.AdministrationInfobulleService
         */
        constructor($sce: ng.ISCEService, $scope: ng.IScope, $location: ng.ILocationService, serviceAgent: MyWay.Services.ServiceAgentExtended, defautService: administrationAide.Service.DefautService, infobulleService: administrationAide.Service.InfobulleService, footerService: administrationAide.Service.FooterService, modalService: MyWay.UI.ModalService, notificationService: MyWay.UI.IMwNotificationService, listeEtablissements: administrationAide.Modele.Etablissement[], listeZonesDeSaisie: Champ[]);
        /**
         * Prépare les listeners du scope controleur
         */
        private preparerListeners();
        /**
         * Construit un objet JSON data pour afficher l'infobulle dans les résultats de recherche
         */
        construireInfobulle(infobulle: Infobulle): any;
        /**
         * Fonction d'afficage des autres critères de recherche
         */
        afficherCriteres(): void;
        /**
         * Fonction d'afficage du nombre de résultats
         */
        nombreResultats(): void;
        /**
         * Effectue une recherche simple d'infobulles, en fonction du champ saisi
         */
        rechercheInfobullesSimple(): void;
        private construireActions(infobulle);
        /**
         * Effectue une recherche avec les différents critères de recherche avancée
         */
        rechercheInfobullesAvancee(): void;
        /**
         * Complète les informations de l'infobulle
         * @param infobulle: Infobulle - L'infobulle à compléter
         * @returns infobulle: Infobulle - L'infobulle complétée
         */
        private completerInformationsInfobulle(infobulle);
        /**
         * Récupère le contenu communautaire de l'infobulle, en fonction de l'id de la zone de saisie liée à l'infobulle
         * @param idChamp: number - L'identifiant de la zone de saisie
         * @returns contenuCommunautaire :string - Le contenu communautaire
         */
        private recupererContenuCommunautaire(idChamp, infobulles);
        /**
         * Prépare les données à afficher dans la popup, puis affiche cette dernière
         */
        afficherDonneesPersonnalisees(): void;
        /**
         * Affiche la fenêtre de personnalisation établissements
         * @param personnalisation: any[] - Liste de personnalisations établissement
         */
        private afficherModalPersonnalisation(personnalisation);
        /**
         * Affiche les personnalisation de la ligne infobulle sélectionnée
         * @param infobulleSelectionne: Infobulle - L'infobulle sélectionnée
         */
        private afficherPersonnalisationLigneInfobulle(infobulleSelectionnee);
        /**
         * Recherche les infobulles en fonction des critères de recherche
         * @param parametres: any[] - Paramètres de recherche
         * @returns :Infobulle[] - La liste d'infobulles
         */
        rechercherInfobulles(parametres: any[]): ng.IPromise<Infobulle[]>;
        /**
         * Filtre les résultats de la recherche par origine de l'infobulle
         * @param rechercheInfobulle: rechercheInfobulle - Objet contenant les critères de recherche
         * @param listeResultats: Infobulle[] - Les resultats de la recherche
         * @returns listeFiltree: Infobulle[] - Les résultats filtrés
         */
        private filtrerOrigineInfobulles(rechercheInfobulle, listeResultats);
        /**
         * Filtre les résultats de la recherche en fonction de l'état de l'infobulle (Archivé, En cours, A venir, Permanent)
         * @param rechercheInfobulle: rechercheInfobulle - Objet contenant les critères de recherche
         * @param listeResultats: Infobulle[] - Les resultats de la recherche
         * @returns listeFiltree: Infobulle[] - Les résultats filtrés
         */
        private filtrerEtatInfobulles(rechercheInfobulle, listeResultats);
        /**
         * Récupère les paramètres s'ils ne sont pas vides, sous forme d'un dictionnaire
         * @param rechercheFlash: RechercheFlash - L'objet contenant les critères de recherche
         * @returns :any[] - La liste des paramètres
         */
        private construireParametres(rechercheInfobulle);
        /**
         * Fonction pour construire le tableau composant MyWay simple mono-sélection
         * Voir application guide de style pour plus d'information
         */
        construireTableau(infobulles: Infobulle[]): void;
        /**
         * Fonction déclenchée à la sélection d'une ligne du tableau
         */
        onSelectionChange(infobulleSelectionnee: administrationAide.Modele.Infobulle): void;
        /**
         * Fonction pour créer une nouvelle infobulle (Communautaire) ou ajouter une personnalisation établissement
         */
        creerInfobulle(): void;
        /**
         * Sauvegarde la recherche si l'utilisateur va modifier ou créer une infobulle, et reviens sur la page de recherche
         */
        private sauvegardeRecherche();
        private preparerInformationsCommunautaire();
        /**
         * Fonction pour modifier l'infobulle sélectionnée
         * @param infobulle: Infobulle - L'infobulle à modifier
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        modifierInfobulle(infobulle: Infobulle): void;
        /**
         * Permet de créer une infobulle à partir d'une existante
         * @param infobulle: Infobulle - L'infobulle à dupliquer
         */
        dupliquerInfobulle(infobulle: Infobulle): void;
        /**
         * Fonction pour suprimer l'infobulle sélectionnée
         * /!\ A modifier avec les appels BDD et/ou l'installation de LISA
         */
        supprimerInfobulle(infobulle: Infobulle): void;
        /**
         * Détermine si l'aide a été complétée par un établissement
         * @param idChamp: number - L'identifiant de la zone de saisie
         * @returns :boolean - Le résultat du test
         */
        private personnalisationsExistantes(infobulle);
        /**
         * Retourne le détail de l'établissement du complément infobulle (Code & Libellé)
         * @param infobulle: Infobulle - Le complément établissement de l'infobulle
         * @returns codeLibelle: string - Le détail
         */
        private afficherDetailsEtablissement(infobulle);
    }
}

declare module administrationAide.Modele {
    interface IRechercheInfobulle {
        idChamp: number;
        nomChamp: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        origineCommunautaire: boolean;
        origineEtablissement: boolean;
    }
    class RechercheInfobulle implements IRechercheInfobulle {
        idChamp: number;
        nomChamp: string;
        publicationDateDebut: Date;
        publicationDateFin: Date;
        etatArchive: boolean;
        etatEnCours: boolean;
        etatAVenir: boolean;
        etatPermanent: boolean;
        origineCommunautaire: boolean;
        origineEtablissement: boolean;
        /**
         * Constructeur de la classe
         * @param nomChamp: string - Nom du champ sur lequel s'applique l'infobulle
         * @param publicationDateDebut: string - Date de début du message
         * @param publicationDateFin: string - Date de fin du message
         * @param processus: string - Recherche par type processus
         * @param etatArchive: string - Recherche par Etat archivé
         * @param etatEnCours: string - Recherche par Etat en cours
         * @param etatAVenir: string - Recherche par Etat à venir
         * @param etatPermanent: string - Recherche par Etat permanent
         * @param origineCommunautaire: string - Recherche par Origine Communautaire
         * @param origineEtablissement: string - Recherche Origine Etablissement
         */
        constructor(donnees?: IRechercheInfobulle);
    }
}

declare module administrationAide {
    class PersonnalisationEtablissementsControleur {
        private modalInstance;
        personnalisations: any[];
        static $inject: string[];
        tableau: MyWay.UI.ImwTableOptions;
        constructor(modalInstance: ng.ui.bootstrap.IModalServiceInstance, personnalisations: any[]);
        fermer(): void;
        construireTableau(personnalisations: any[]): void;
    }
}

declare module administrationAide {
    import Infobulle = administrationAide.Modele.Infobulle;
    import Champ = administrationAide.Modele.Champ;
    class SuppressionInfobulleControleur {
        private modalInstance;
        private defautService;
        infobulle: Infobulle;
        zone: Champ;
        complement: boolean;
        static $inject: string[];
        constructor(modalInstance: ng.ui.bootstrap.IModalServiceInstance, defautService: administrationAide.Service.DefautService, infobulle: Infobulle, zone: Champ, complement: boolean);
        valider(): void;
        annuler(): void;
    }
}

declare module administrationAide {
    interface ICompteurScope extends ng.IScope {
        limite: number;
        texte: string;
    }
    function compteur(): ng.IDirective;
}

declare module administrationAide {
    function entete(): ng.IDirective;
}

declare module administrationAide {
    function lireFichier(): ng.IDirective;
}

declare module administrationAide {
    function uiTinymce(uiTinymceConfig: any): ng.IDirective;
}
