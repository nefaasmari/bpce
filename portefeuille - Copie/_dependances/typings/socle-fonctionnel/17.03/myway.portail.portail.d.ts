
declare module MonPortail {
    var app: any;
}

declare module MonPortail {
    class ModalRafraichirControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private $window;
        modalDatas: any;
        titre: string;
        message: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: MyWay.UI.IModalService, $window: ng.IWindowService);
        afficherTitre(): string;
        /**
         * Recharge le portail
         * @function
         * @return {void}
         */
        reload(): void;
    }
}

declare module MonPortail {
    class ModalUserInfosControleur {
        private $scope;
        private $modalInstance;
        private data;
        private modalService;
        private $window;
        private portailService;
        private processusService;
        static $inject: string[];
        _showProcessus: boolean;
        modalDatas: any;
        model: any;
        authInfos: any;
        agentPrenomNom: string;
        versionMySys: string;
        guichetEtGuichetDebutJournee: string;
        dateOperationJourneeComptable: string;
        constructor($scope: ng.IScope, $modalInstance: any, data: any, modalService: MyWay.UI.IModalService, $window: ng.IWindowService, portailService: PortailService, processusService: libContexteClient.IProcessusService);
        showProcessus: boolean;
        /**
         * Retourne le nombre de processus lancés
         * @function
         * @return {number}
         */
        getNbProcess(): number;
        closeModal: () => void;
        /**
         * Lance les processus portail de type Début de journée dans une 1 seule iframe
         * @function
         * @param {string} url
         * @return {void}
         */
        lancerProcessusPortail: (url: string) => void;
        /**
         * Afficher ou masquer la liste des processus dans la fenêtre modale des informations de l'utilisateur
         * @function
         * @return {void}
         */
        voirProcessus(): void;
    }
}

declare module MonPortail {
    class OuvertureGuichetControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        listeProcessusClients: Array<string>;
        listeProcessusNonClients: Array<string>;
        static $inject: string[];
        constructor($scope: ng.IScope, $modalInstance: any, data: any, $modal: MyWay.UI.IModalService);
        /**
         * Fermer la fenêtre
         * @function
         */
        fermer: () => void;
    }
}

declare module MonPortail {
    class PortailControleur implements libContexteClient.IEventListener {
        private $q;
        private $scope;
        private $windows;
        private $filter;
        private $timeout;
        private serviceManager;
        private mwNotificationService;
        private portailService;
        private toggleContactService;
        private barreRechercheGlobaleService;
        private modalService;
        private processusService;
        private global;
        private referentielProcessusService;
        private toolsService;
        private navigationManager;
        private _dateOperationJourneeComptable;
        private voitureBalaisTerminee;
        private static codeProcessusRecherche;
        private _totemElement;
        private _totemProcessusScrollZone;
        private _decalageListe;
        private _depassementZoneScroll;
        private _tailleDeLaZoneFixeHorsScroll;
        /**
         * TODO private or public
         */
        versionMySys: string;
        codeGuichetInterbancaire: string;
        edsExterneGuichetComptable: string;
        edsExterneRattachementGuichetComptable: string;
        clientCourant: string;
        motCleRecherche: string;
        majBandeauClient: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, $scope: ng.IScope, $windows: ng.IWindowService, $filter: ng.IFilterService, $timeout: ng.ITimeoutService, serviceManager: MyWay.Services.ServiceManagerExtended, mwNotificationService: MyWay.UI.IMwNotificationService, portailService: MonPortail.PortailService, toggleContactService: MonPortail.ToggleContactService, barreRechercheGlobaleService: myway.comServiceRecherche.Communs.BarreRechercheGlobaleService, modalService: MyWay.UI.IModalService, processusService: libContexteClient.IProcessusService, global: libContexteClient.IGlobal, referentielProcessusService: libContexteClient.IReferentielProcessusService, toolsService: libContexteClient.ITools, navigationManager: libContexteClient.NavigationManager);
        nbAllProcess: number;
        private onchangeContext(event);
        onEvent(event: MyWay.Services.Component.ManagerEvent): void;
        private refreshIHM();
        private initControleur();
        private initRoute(target);
        private verifProcessRunning();
        echecHabilitation: boolean;
        dateOperationJourneeComptable: string;
        totemProcessusScrollZone: any;
        totemElement: any;
        decalageListe: number;
        depassementZoneScroll: number;
        tailleDeLaZoneFixeHorsScroll: number;
        listeProcessClient: Array<libContexteClient.IProcessPortail>;
        listeProcessHorsClient: Array<libContexteClient.IProcessPortail>;
        listeAllProcess: Array<libContexteClient.IProcessPortail>;
        /**
         * Disable ou non le bouton de scroll vers le bas
         * @function
         */
        scrollDownDisable: () => boolean;
        /**
         * Disable ou non le bouton de scroll vers le haut
         * @function
         */
        scrollUpDisable: () => boolean;
        /**
         * Retourne la date : Opération journée comptable
         * @return {string} getDate
         */
        private majVueParametresComptables;
        /**
         * Affiche une modale de confirmation de fermeture de processus
         * @function
         */
        confirmationFermetureProcessus(processus: libContexteClient.ProcessPortail): void;
        startFromRelation(p: libContexteClient.IPersonneRelationEconomique): void;
        /**
         * Retourne la concaténation de plusieurs données pour l'affichage dans la vue
         * @function
         */
        getGuichetEtGuichetDebutJournee: () => string;
        /**
         * Retourne une chaine de caractères contenant des informations sur l'agent connecté
         * Cette chaine de caractères est constituée de :
         * - code établissement
         * - code guichet interbancaire
         * - numéro EDS externe guichet comptable
         * @return {string} infosAgent
         */
        getInfosAgent: () => string;
        private afficherActionsExternes(currentProcessStep);
        /**
         * Execute une action : Lisa.Next(action) -> code 100% socle technique
         * @function
         */
        ExecuterAction(action: number): void;
        /**
         * Redirige la vue centrale sur ma journée
         * @function
         */
        retourMaJournee(): void;
        /**
         * Redirige la vue centrale sur début journée
         * @function
         */
        retourDebutJournee(): void;
        /**
         * Lance le processus de recherche par mot clés
         * @function
         * @return {void}
         */
        lancerProcessusRecherche(): void;
        /**
         * Lance le processus de recherche & recherche collaborateur
         * @function
         * @param {string} matricule
         * @return {void}
         */
        lancerProcessusRechercheCollaborateur(matricule: string): void;
        /**
         * Lance le processus sélectionné dans la barre déroulante de la recherche
         * @function
         */
        lancerProcessus(code: string): void;
        lancerIdentificationPersonne(): void;
        lancerProcessusCode(code: string): void;
        test(code: string, idPersonne: number): void;
        testLocal(): void;
        /**
         * Clos un processus spécifique
         * @function
         */
        fermerProcessus(processus: libContexteClient.IProcessPortail): void;
        fermerProcessusClient(processus: libContexteClient.IProcessPortail): void;
        /**
         * Permet de passer d'un processus à l'autre, switch d'iframe
         * @function
         */
        basculerProcessus(processus: libContexteClient.IProcessPortail): void;
        basculerProcessusClient(processus: libContexteClient.IProcessPortail): void;
        /**
         * TODO - Extrait un processus donné du contexte du portail, nouvel onglet, processus "à vide"
         * @function
         */
        extraireProcessus(processus: MyWay.Services.Context.IProcess): void;
        /**
         * Permet de savoir si le processus est le processus courant ou non
         * @function
         */
        estProcessusCourant(processus: libContexteClient.IProcessPortail): string;
        /**
         * Permet de savoir si un processus est de type client ou non
         * @function
         */
        estProcessusClient(processus: libContexteClient.IProcessPortail): boolean;
        /**
         * Détermine le visuel du bandeau client
         * @function
         */
        fondBandeauClient(): string;
        /**
         * Affiche ou non le bandeau client
         * @function
         */
        private afficheBandeauClient();
        /**
         * Permet de savoir s'il y a des processus clients dans la liste de processus ou non
         * @function
         */
        afficherZoneProcessusClients(): boolean;
        /**
         * Permet de savoir s'il y a des processus autres dans la liste de processus ou non
         * @function
         */
        afficherZoneProcessusAutres(): boolean;
        /**
         * Liste les clients
         * @function
         */
        /**
         * Scrolle vers le haut la zone d'affichage des processus
         * @function
         */
        scrollUp(position?: number): void;
        /**
         * Scrolle vers le bas la zone d'affichage des processus
         * @function
         */
        scrollDown(): void;
        /**
         * Scrolle jusqu'à se trouver sur le dernier client de la liste
         * @function
         */
        /**
         * Scrolle jusqu'à se trouver sur le dernier processus de la liste
         * @function
         */
        scrollToLastApplication(): void;
        /**
         * Retourne le nombre de processus clients actuel
         * @function
         */
        getNombreProcessusClients(): number;
        /**
         * Retourne le nombre de processus hors clients actuel
         * @function
         */
        getNombreProcessusNonClients(): number;
        /**
         * Détermine si on affiche ou non les boutons de scroll
         * @function
         */
        scrollButtonDisplayed(): boolean;
        scrollButtonIsDisplayed(tailleScrollMax: number): boolean;
        /**
         * Scrolle vers le haut la zone d'affichage des processus client (dans le bandeau client)
         * @function
         */
        /**
         * Scrolle vers le bas la zone d'affichage des processus client (dans le bandeau client)
         * @function
         */
        /**
         * Disable ou non le bouton de scroll vers le haut (dans le bandeau client)
         * @function
         */
        /**
         * Disable ou non le bouton de scroll vers le bas (dans le bandeau client)
         * @function
         */
        /**
         * Redimensionne dynamiquement la zone de scroll
         * @function
         */
        private onWindowResized();
        /**
         * Lance les processus portail de type Début de journée dans une 1 seule iframe
         * @function
         */
        lancerProcessusPortail: (url: string) => void;
        /**
         * Retourne le nom de l'agent connecté
         * Si le totem est replié, l'initiale du nom est retourné
         * @function
         * @return {string} nomAgent
         */
        getNomAgent: () => string;
        /**
         * Retourne le nom de l'agent connecté
         * Si le totem est replié, l'initiale du prénom est retourné
         * @function
         * @return {string} prenomAgent
         */
        getPrenomAgent: () => string;
        isPersonnePhysique(process: libContexteClient.IProcessPortail): boolean;
        isPersonneMorale(process: libContexteClient.IProcessPortail): boolean;
        /**
         * Retourne le nom du processus
         * Si le totem est replié, les 3 premières lettres du processus sont retournées
         * @function
         * @param {string} chaine
         * @return {string} nomProcessus
         */
        afficherNomClient: (process: libContexteClient.IProcessPortail) => string;
        afficherNomProcessus: (process: libContexteClient.IProcessPortail) => string;
        private adapteAffichageMenuClient;
        private adapteAffichageMenuProcessus;
        /**
         * Détermine si le visuel de la zone du processus est en surbrillance ou non
         * @function
         * @param {string} libelle
         * @return {string}
         */
        estActif(libelle: string): string;
        /**
         * Affiche une fenêtre modale pour signaler l'échec de l'authentification
         * @function
         * @return {void}
         */
        private afficherModalEchecAuthentification;
        /**
         * Affiche une fenêtre modale pour signaler l'échec des habilitations
         * @function
         * @return {void}
         */
        private afficherModalEchecHabilitations;
        /**
         * Affiche une fenêtre modale pour signaler l'échec des habilitations
         * @function
         * @return {void}
         */
        afficherModalEchecContext: () => void;
        /**
         * Affiche une fenêtre modale pour voir les informations de l'utilisateur
         * @function
         * @return {void}
         */
        voirModalUserInfos: () => void;
        /**
         * Affiche une fenêtre modale générique pour informer l'utilisateur  de :
         * - l'échec d'authentification
         * - l'échec des habilitations
         * - etc.
         * @function
         * @param {string} titre
         * @param {string} message
         * @param {any} modelDatas
         * @return {void}
         */
        afficherModalReload(titre: string, message: string, modelDatas?: any): void;
    }
}

declare module MonPortail {
    class PosteFonctionnelModalControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        constructor($scope: ng.IScope, $modalInstance: any);
        /**
         * Fermer la fenêtre
         * @function
         */
        fermer: () => void;
    }
}

declare module MonPortail {
    interface IRattachementPosteFonctionnel {
        /**
         * Code indiquant si l'EDS de rattachement du poste fonctionnel est le dernier élément de la hiérarchie.
         *
         * Valeurs possibles :
         * '1' - Oui, c'est le dernier
         * '0' - Non
         */
        codeIndicateurFinStructure: string;
        /**
         * Identifiant interne du responsable de l'EDS de rattachement du poste fonctionnel
         */
        identifiantResponsableEDS: number;
        /**
         * Identifiant interne de l'EDS de rattachement du poste fonctionnel
         * ATTENTION : le typage d'origine est number -> identifiantEDSRattachement: number;
         * MODIFICATION du typage en string pour se conformer au service REST qui attend une chaine codifiée sur 9 caractères
         * avec des 0 sur la gauche pour compléter la longueur de la chaine si le nombre de caractères est inférieur à 9.
         */
        identifiantEDSRattachement: string;
        /**
         * Libellé de l'EDS de rattachement du poste fonctionnel
         */
        libelleEDSRattachement: string;
        /**
         * Type de l'EDS de rattachement du poste fonctionnel.
         *
         * Valeurs possibles :
         * '001' - Poste fonctionnel
         * '002' - Service
         * '003' - Agence
         * '004' - Unité commerciale
         * '005' - Secteur commercial
         * '006' - Groupe commercial
         * '007' - Direction
         * '008' - Siège
         * '009' - Entité administrative
         * '010' - GAB
         */
        typeEDSRattachement: string;
        /**
         * Libellé du type de l'EDS de rattachement du poste fonctionnel
         */
        libelleTypeEDSRattachement: string;
        /**
         * Date de fin de validité de l'EDS de rattachement du poste fonctionnel
         */
        dateFinValiditeEDSRattachement: Date;
        /**
         * Référence externe de l'EDS de rattachement du poste fonctionnel
         * ATTENTION : le typage d'origine est number -> referenceEDSRattachement: number;
         * MODIFICATION du typage en string pour se conformer au service REST qui attend une chaine codifiée sur 9 caractères
         * avec des 0 sur la gauche pour compléter la longueur de la chaine si le nombre de caractères est inférieur à 9.
         */
        referenceEDSRattachement: string;
    }
    interface IInformationPosteFonctionnel {
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque établissement.
         *
         * Exemples de valeurs possibles :
         * '072' - CHARGE DE CLIENTELE DE NIVEAU 2
         * '081' - AGENT COMMERCIAL
         * '082' - RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant,
         * suppléant ou au titre d'une affectation temporaire.
         *
         * Valeurs possibles :
         * 'T' - Titulaire
         * 'R' - Remplaçant
         * 'S' - Suppléant
         * 'A' - Affectation temporaire
         */
        codeQualiteAgent: string;
        /**
         * Identifiant interne du poste fonctionnel
         * ATTENTION : le typage d'origine est number -> identifiantPosteFonctionnel: number;
         * MODIFICATION du typage en string pour se conformer au service REST qui attend une chaine codifiée sur 9 caractères
         * avec des 0 sur la gauche pour compléter la longueur de la chaine si le nombre de caractères est inférieur à 9.
         */
        identifiantPosteFonctionnel: string;
        /**
         * Désignation longue de l'agent
         * Elle est utilisée pour la constitution de la ligne 1
         * de l'adresse.
         * Elle est constituée en concaténant la civilité, le nom d'usage et le prénom de l'agent.
         */
        designationAgent: string;
        /**
         * Référence externe du poste fonctionnel
         * ATTENTION : le typage d'origine est number -> referencePosteFonctionnel: number;
         * MODIFICATION du typage en string pour se conformer au service REST qui attend une chaine codifiée sur 9 caractères
         * avec des 0 sur la gauche pour compléter la longueur de la chaine si le nombre de caractères est inférieur à 9.
         */
        referencePosteFonctionnel: string;
        /**
         * Code civilité de l'agent
         *
         * Valeurs possibles :
         * '1' - MME
         * '2' - MLLE
         * '3' - M
         */
        civiliteAgent: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         * - soit au nom du père
         * - soit au nom de la mère
         * - soit aux 2 noms accolés (ordre quelconque, dans la limite d'un nom de famille par parent)
         * C'est le seul nom mentionné sur les actes d'état civil (acte de naissance, de mariage, livret de famille....).
         * Figure sur toute pièce officielle d'identité.
         * Appelé auparavant nom patronymique.
         */
        nomFamilleAgent: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         * - soit au nom de famille de l'époux(se) (conjoint)
         * - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         * C'est une information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille.
         * Appelé auparavant nom marital.
         */
        nomUsageAgent: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        prenomAgent: string;
        /**
         * Date de début de validité du poste fonctionnel
         */
        dateDebutValiditePF: Date;
        /**
         * Date de fin de validité du poste fonctionnel
         */
        dateFinValiditePF: Date;
        /**
         * Identifie le site de localisation d'un poste fonctionnel.
         * Numéro chronologique attribué par le système.
         * Référence unique dans MYSYS (identifiant interne).
         * ATTENTION : le typage d'origine est number -> identSitePosteFonctionnel: number;
         * MODIFICATION du typage en string pour se conformer au service REST qui attend une chaine codifiée sur 9 caractères
         * avec des 0 sur la gauche pour compléter la longueur de la chaine si le nombre de caractères est inférieur à 9.
         */
        identSitePosteFonctionnel: string;
        /**
         * Ligne 2 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne2AdresseSite: string;
        /**
         * Ligne 3 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne3AdresseSite: string;
        /**
         * Ligne 4 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne4AdresseSite: string;
        /**
         * Ligne 5 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne5AdresseSite: string;
        /**
         * Ligne 6 de l'adresse du site de localisation du poste fonctionnel.
         */
        ligne6AdresseSite: string;
        /**
         * Numéro de téléphone de l'agent.
         */
        telephonePosteFonctionnel: string;
        /**
         * Adresse E-Mail de l'agent.
         */
        emailPosteFonctionnel: string;
        /**
         * Identifie le pays du site de localisation du poste fonctionnel, selon la norme INSEE.
         *
         * Exemples de valeurs possibles :
         * 99000 - France
         * 99132 - Grande Bretagne
         * 99109 - Allemagne
         * 99134 - Espagne
         * ...
         */
        codePaysSite: string;
        /**
         * Canal d'appartenance du poste fonctionnel connecté.
         *
         * Valeurs possibles :
         * 'X' - Si le groupe de fonction du poste fonctionnel connecté est "telemarketing" ou "CRC"
         * 'A' - Si le groupe de fonction du poste fonctionnel connecté n'est pas "telemarketing" et "CRC"
         */
        codeCanalAppartenance: string;
        /**
         * undefined
         */
        informationRattachement: IRattachementPosteFonctionnel;
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ...
         * Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un agent au sein d'un établissement bancaires ou financiers de la plateforme MYSYS.
         * Correspond à un individu ou à un acteur générique.
         * Numéro chrono attribué par le système.
         * Référence unique dans MYSYS.
         * ATTENTION : le typage d'origine est number -> codeAgent: number;
         * MODIFICATION du typage en string pour se conformer au service REST qui attend une chaine codifiée sur 9 caractères
         * avec des 0 sur la gauche pour compléter la longueur de la chaine si le nombre de caractères est inférieur à 9.
         */
        codeAgent: string;
    }
    interface IPosteFonctionnelAgent {
        /**
         * undefined
         */
        listePosteFonctionnel: Array<IInformationPosteFonctionnel>;
    }
}

declare module MonPortail {
    var portailConfig: {
        "containerId": string;
        "portaitBreakpoint": number;
        "cssOpeningAnimClass": string;
        "navigation": {
            "id": string;
            "cssClass": string;
            "cssExpandClass": string;
            "cssExpandAnimClass": string;
            "cssClosingAnimClass": string;
            "width": number;
            "openWidth": number;
        };
    };
    class PortailService {
        private $q;
        private $timeout;
        private $http;
        private $filter;
        private serviceManager;
        private _parametresComptables;
        private _authentificationInfo;
        private _echecHabilitation;
        codeAgent: string;
        _iframeElement: HTMLElement;
        _navigationElement: ng.IAugmentedJQuery;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, $http: ng.IHttpService, $filter: ng.IFilterService, serviceManager: MyWay.Services.ServiceManagerExtended);
        echecHabilitation: boolean;
        parametresComptables: any;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        initialisation: () => ng.IPromise<string>;
        /**
         * Cette méthode permet La vérification des habilitations pour le code "SHOR0S"
         * Si l'habilitation est validée elle renvoi un booléen à "true", sinon "false"
         * Si le service de vérification n'est pas dispponible ou renvoi une erreur,
         * un message d'erreur de type "string" est renvoyé par la méthode
         * @param {any} environnement (DUA, VFO, UTI, null, undefined, etc.)
         * @return {ng.IPromise<boolean | string>} deferred.promise
         */
        verifierHabilitation(environnement: any): ng.IPromise<boolean | string>;
        /**
         * setContainerWidth() fixe la taille du conteneur principal
         * en fonction de la taille de la navigation.
         * @param {number} navWidth - La largeur en pixel de la navigation principale
         * @param {boolean} async - Defini si la fonction doit retourner une promesse
         * @return {promise} deferred.promise - en mode async seulement.
         */
        setContainerWidth(navWidth: number, async: boolean): ng.IPromise<any>;
        /**
         * Retourne true si l'orientation de l'écran est en mode portrait
         * @return {boolean}
         */
        isPortrait(): boolean;
        /**
         * getTransitionDuration() retourne, pour un élément HTML
         * donné, le temps de la transition CSS qui lui est associé
         * @param {HTMLElement} elem - L'élement HTML ciblé
         * @return {number} convertInMs(duration) - La durée en ms de la transition
         */
        getTransitionDuration(elem: HTMLElement): number;
        /**
         * isNavigationExpanded() verifie si la
         * navigation principale est en mode étendu ou non.
         * @return {boolean}
         */
        isNavigationExpanded(): boolean;
        promisePosteFonctionnelAgent(codeEtablissement: string, referenceExterneAgent: string, authentificationInfo: any): MyWay.Services.IPromesse<IPosteFonctionnelAgent>;
        /**
         * Retourne une chaine de caractères contenant des informations sur l'agent connecté
         * Cette chaine de caractères est constituée de :
         * - code établissement
         * - code guichet interbancaire
         * - numéro EDS externe guichet comptable
         * @return {string} infosAgent
         */
        getInfosAgent(): string;
        /**
         * Retourne la date : Opération journée comptable
         * @return {string} getDate
         */
        getDateOperationJourneeComptable: () => string;
        /**
         * Lecture du ou des postes fonctionnels rattaché(s) à l'utilisateur
         * Un tableau contenant un ou plusieurs objects est renvoyé par la méthode
         * @param {any} values
         * @param {string} codeEtablissement
         * @return {Array<any>} utilisateurPostesFonctionnels
         */
        lecturePostesFonctionnels: (values: IPosteFonctionnelAgent, codeEtablissement: string) => IInformationPosteFonctionnel[];
        /**
         * Mise à jour des paramétres "AuthentificationInfo" dans le context
         * @method
         * @param {IInformationPosteFonctionnel} pf : Objebt Poste Fonctionnel
         * @return {boolean}
         */
        majContextPosteFonctionnel: (pf: IInformationPosteFonctionnel) => boolean;
        /**
         * Identification de l'utilisateur
         * @method
         * @param {string} codeEtablissement
         * @param {string} typeFonction
         * @param {string} numeroInterneEds
         * @param {string} referenceExterneGuichet
         * @param {string} referenceExterneGuichet
         * @return {MyWay.Services.IPromesse<any>} Service de Promesse MyWay
         */
        promiseCtrlDebutJournee(codeEtablissement: string, typeFonction: string, numeroInterneEds: string, referenceExterneGuichet: string, numeroEdsSuperieur: string): MyWay.Services.IPromesse<any>;
        /**
         * Initialisation du poste fonctionnel au chargement de la SPA
         * @method
         * @param {array} utilisateurPosteFonctionnels
         * @return {ng.IPromise<any>} deferred
         */
        initialisationParametresComptables: () => ng.IPromise<string>;
        /**
         * Rechargement des habilitations si le poste fonctionnel retourné est différent du poste fonctionnel stocké dans le context
         * @method
         * @param {array} utilisateurPosteFonctionnels
         * @return {ng.IPromise<any>} deferred
         */
        rechargerHabilitations: (utilisateurPosteFonctionnels: any) => ng.IPromise<any>;
        /**
         * Retourne le Numéro de Station de Travail (nom du poste Windows)
         * Si la chaine passé en argument est > 10 caractères
         * on retourne les 10 derniers caractères ce cette chaine
         * Cette méthode a été implémentée pour réduire le calcul de la taille de la clé qui sauvegarde
         * les informations du guichet de l'utilisateur connecté
         * Cette clé est constituée des informations suivantes :
         * codeEtablissement + "/" + agentConnecte.referenceExterneAgent + "/" + agentConnecte.numeroInterneEds + "/" + numeroStationTravail
         *
         * La longueur de cette clé ne doit pas dépasser 32 caractères
         */
        getNumeroStationTravail(numeroStationTravail?: string): string;
    }
}

declare module MonPortail {
    class ToggleContactService {
        $animate: any;
        private _contact;
        private _contactContext;
        private _expandedElement;
        private _composedNumber;
        private _client;
        static $inject: string[];
        constructor($animate: any);
        showContact(): void;
        showContactContext(client: any): void;
        show(item: any): void;
        close(item: any): void;
        toggleContact(): void;
        private closeItems();
        private isExpanded(element);
        private setTopPosition(element);
        toggleCall(num: any): void;
        onCall(): boolean;
        isCalling(num: any): boolean;
        startLync(mail: any): void;
        sendMail(mail: any): void;
    }
}

declare module MonPortail {
    class Tools {
        static leftPad(stringToPad: string, myLength?: number, padString?: string): string;
        static stringEmptyIsNull(stringToEmpty: string): string;
    }
}

declare module MonPortail {
    function toggleContactContext(toggleContactService: MonPortail.ToggleContactService): {
        templateUrl: string;
        restrict: string;
        replace: boolean;
        scope: {
            client: string;
        };
        link: (scope: any, element: any, attrs: any) => void;
    };
}

declare module MonPortail {
}
