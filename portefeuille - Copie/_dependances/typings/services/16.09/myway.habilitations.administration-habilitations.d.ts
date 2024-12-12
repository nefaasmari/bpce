
declare module MonApplication {
    var app: any;
}

declare module MonApplication {
    class AgentPersonnalisationControleur {
        agentPersoService: Service.AgentPersonnalisationService;
        private agentPersoProfilsService;
        private agentPersoHabilitationsService;
        private $rootScope;
        static $inject: string[];
        pageTitre: string;
        tableauProfilsDusAuxFonctions: MyWay.UI.ImwTableOptions;
        chargementProfilsEnCours: boolean;
        chargementApplicationsEnCours: boolean;
        chargementProfilsDusFonctionsEnCours: boolean;
        messagePasProfilsDusFonctions: string;
        profilsDusFonctionsExistants: boolean;
        constructor(agentPersoService: Service.AgentPersonnalisationService, agentPersoProfilsService: Service.AgentPersoProfilsService, agentPersoHabilitationsService: Service.AgentPersoHabilitationsService, $rootScope: ng.IRootScopeService);
        private initDonnees();
        updateAffichageProfilsDusFonctions(): void;
        private initTableauProfilsDusFonctions();
    }
}

declare module MonApplication.Service {
    class AgentPersonnalisationServiceDonnees {
        agentCourant: Modeles.Agent;
        constructor();
    }
}

declare module MonApplication.Service {
    class AgentPersonnalisationService {
        agentPersonnalisationServiceDonnees: Service.AgentPersonnalisationServiceDonnees;
        private $q;
        private mwNotificationService;
        private agentPersoProfilsService;
        private agentPersoHabilitationsService;
        private agentService;
        private fonctionService;
        static $inject: string[];
        constructor(agentPersonnalisationServiceDonnees: Service.AgentPersonnalisationServiceDonnees, $q: ng.IQService, mwNotificationService: MyWay.UI.IMwNotificationService, agentPersoProfilsService: Service.AgentPersoProfilsService, agentPersoHabilitationsService: Service.AgentPersoHabilitationsService, agentService: Service.AgentService, fonctionService: Service.FonctionService);
        initAgent(): ng.IPromise<boolean>;
        getProfilsDusFonction(): ng.IPromise<boolean>;
    }
}

declare module MonApplication {
    class AgentProfilCompletControleur {
        agentProfilCompletService: Service.AgentProfilCompletService;
        private $rootScope;
        private servicePopup;
        static $inject: string[];
        pageTitre: string;
        fonctionSelectionne: Modeles.Fonction;
        code: string;
        libelle: string;
        domaine: Modeles.Domaine;
        application: Modeles.Application;
        chargementDonneesEnCours: boolean;
        showHabilitations: boolean;
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        listHabilitations: Array<Modeles.Habilitation>;
        constructor(agentProfilCompletService: Service.AgentProfilCompletService, $rootScope: ng.IRootScopeService, servicePopup: Service.ServicePopup);
        private initDonnees();
        updateFonctionSelectionne(): void;
        private initDonneesRechercheHabs();
        private updateTableauHabilitations();
    }
}

declare module MonApplication.Service {
    class AgentProfilCompletService {
        private $q;
        private agentService;
        private habilitationService;
        static $inject: string[];
        agentCourant: Modeles.Agent;
        listeFonctions: Array<Modeles.Fonction>;
        constructor($q: ng.IQService, agentService: Service.AgentService, habilitationService: Service.HabilitationService);
        initialisationProfilComplet(): ng.IPromise<boolean>;
        getHabilitations(codeFonction: string): ng.IPromise<number>;
    }
}

declare module MonApplication {
}

declare module MonApplication.Service {
    class DefautService {
        private $q;
        private habilitationService;
        private domaineService;
        private applicationService;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        private _autorisationDescenteReferentiel;
        dateDeMiseAJourRecherche: Date;
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        habilitations: Array<Modeles.Habilitation>;
        descenteEffectuee: boolean;
        constructor($q: ng.IQService, habilitationService: Service.HabilitationService, domaineService: Service.DomaineService, applicationService: Service.ApplicationService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        initDroit(): ng.IPromise<boolean>;
        getHabilitationsModifiees(dateRecherche: Date): ng.IPromise<Array<Modeles.Habilitation>>;
        private initReferentiel();
    }
}

declare module MonApplication {
    class AgentsControleur {
        gestionAgentsService: Service.GestionAgentsService;
        private footerService;
        private serviceNavigation;
        private $scope;
        private $rootScope;
        private $location;
        private servicePopup;
        static $inject: string[];
        private _identifiantAgentConnecte;
        initialisationEnCours: boolean;
        autorisationConsultation: boolean;
        autorisationPersonnalisation: boolean;
        infoAgentStyleCss: string;
        constructor(gestionAgentsService: Service.GestionAgentsService, footerService: Service.FooterService, serviceNavigation: Service.ServiceNavigation, $scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, servicePopup: Service.ServicePopup);
        private gestionDroits();
        voirProfilCompletAgent(): void;
        personnaliserAgent(): void;
        private verificationRechercheAutorise();
        private convertirAgentRechercheToAgent();
    }
}

declare module MonApplication.Service {
    class GestionAgentsService {
        private $q;
        private serviceHabilitationsUtilisateur;
        private authentificationService;
        static $inject: string[];
        private _autorisationConsultation;
        private _autorisationPersonnalisation;
        agentRecherche: any;
        agentSelectionne: Modeles.Agent;
        constructor($q: ng.IQService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur, authentificationService: Service.AuthentificationService);
        initDroit(): ng.IPromise<Array<boolean>>;
        initAgent(): ng.IPromise<string>;
    }
}

declare module MonApplication {
    class FonctionDetailControleur {
        fonctionDetailService: Service.FonctionDetailService;
        private modalService;
        private $location;
        private $rootScope;
        private profilService;
        private fonctionService;
        private servicePopup;
        static $inject: string[];
        pageTitre: string;
        listeFonctions: Array<Modeles.Fonction>;
        fonctionRecherche: Modeles.Fonction;
        chargementEnCours: boolean;
        tabProfilsAssocies: boolean;
        tabProfilsDispos: boolean;
        showResultatsProfilsAssocies: boolean;
        showResultatsProfilsDispos: boolean;
        tableauProfilsDisponibles: MyWay.UI.ImwTableOptions;
        tableauProfilsAffectes: MyWay.UI.ImwTableOptions;
        constructor(fonctionDetailService: Service.FonctionDetailService, modalService: MyWay.UI.IModalService, $location: ng.ILocationService, $rootScope: ng.IRootScopeService, profilService: Service.ProfilService, fonctionService: Service.FonctionService, servicePopup: Service.ServicePopup);
        ajouterProfilDispo(): void;
        retirerProfilAffecte(): void;
        rechercherProfilsParFonction(): void;
        private initDonnees();
        private updateAffichageProfils();
    }
}

declare module MonApplication.Service {
    class FonctionDetailService {
        private $q;
        private profilService;
        private fonctionService;
        private mwNotificationService;
        static $inject: string[];
        private _messageAjoutAssociationsFcts;
        private _messageSuppressionAssociationsFcts;
        fonctionCourante: Modeles.Fonction;
        profilsDispos: Array<Modeles.Profil>;
        constructor($q: ng.IQService, profilService: Service.ProfilService, fonctionService: Service.FonctionService, mwNotificationService: MyWay.UI.IMwNotificationService);
        InitProfils(): ng.IPromise<boolean>;
        getFonctionsRecherche(): ng.IPromise<Array<Modeles.Fonction>>;
        getProfilsAssociesForFonctionRecherche(fonctionRecherche: Modeles.Fonction): ng.IPromise<Array<Modeles.Profil>>;
        verificationProfilsAAffecterAutreFonction(listProfilsAjoutSouhaite: Array<Modeles.Profil>): Array<Modeles.Profil>;
        associerProfils(dataProfils: Array<Object>, action: Enum.ActionAssociation): ng.IPromise<boolean>;
        private verificationProfilAffecte(profil);
        private associerProfil(profil, action);
    }
}

declare module MonApplication {
    class FonctionsControleur {
        gestionFonctionsService: Service.GestionFonctionsService;
        private footerService;
        private serviceNavigation;
        private $location;
        private $rootScope;
        static $inject: string[];
        listeFonctions: Array<Modeles.Fonction>;
        tableauProfilsAffectes: MyWay.UI.ImwTableOptions;
        ouverturePanneauInfos: boolean;
        chargementFonctionsEnCours: boolean;
        chargementProfilsOk: boolean;
        chargementInfosEnCours: boolean;
        constructor(gestionFonctionsService: Service.GestionFonctionsService, footerService: Service.FooterService, serviceNavigation: Service.ServiceNavigation, $location: ng.ILocationService, $rootScope: ng.IRootScopeService);
        updateFonctionSelectionne(): void;
        clickSurVoirInfosDetaillees(): void;
        associerProfils(): void;
    }
}

declare module MonApplication.Service {
    class GestionFonctionsService {
        private $q;
        private fonctionService;
        private profilService;
        static $inject: string[];
        fonctionSelectionne: Modeles.Fonction;
        constructor($q: ng.IQService, fonctionService: Service.FonctionService, profilService: Service.ProfilService);
        getFonctions(): ng.IPromise<Array<Modeles.Fonction>>;
        getProfilsAssocies(): ng.IPromise<boolean>;
    }
}

declare module MonApplication {
    class HabilitationsControleur {
        gestionHabsService: Service.GestionHabilitationsService;
        private footerService;
        private serviceNavigation;
        static $inject: string[];
        rechercheHabilitationsEnCours: boolean;
        constructor(gestionHabsService: Service.GestionHabilitationsService, footerService: Service.FooterService, serviceNavigation: Service.ServiceNavigation);
    }
}

declare module MonApplication.Service {
    class GestionHabilitationsService {
        code: string;
        libelle: string;
        domaine: Modeles.Domaine;
        application: Modeles.Application;
        showResultatsHabilitations: boolean;
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        constructor();
    }
}

declare module MonApplication {
    class ProfilsControleur {
        gestionProfilsService: Service.GestionProfilsService;
        private profilDetailServiceDonnees;
        private footerService;
        private modalService;
        private $location;
        private $rootScope;
        private serviceNavigation;
        private profilService;
        private profilDemandeDuplicationService;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        listeProfils: Array<Modeles.Profil>;
        dataListeActions: Array<any>;
        infosProfilChargees: boolean;
        showDuplication: boolean;
        showDuplicationContenu: boolean;
        showBlocDuplicationDefaut: boolean;
        clickSurDuplicationContenu: boolean;
        tableauDemandesDuplicationProfil: MyWay.UI.ImwTableOptions;
        ouverturePanneauInfos: boolean;
        ouverturePanneauDuplication: boolean;
        chargementProfilsEnCours: boolean;
        chargementInfosProfilsEnCours: boolean;
        chargementDemandesDuplicationProfilsEnCours: boolean;
        autorisationAssociationFonction: boolean;
        constructor(gestionProfilsService: Service.GestionProfilsService, profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees, footerService: Service.FooterService, modalService: MyWay.UI.IModalService, $location: ng.ILocationService, $rootScope: ng.IRootScopeService, serviceNavigation: Service.ServiceNavigation, profilService: Service.ProfilService, profilDemandeDuplicationService: Service.ProfilDemandeDuplicationService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        updateProfilSelectionne(): void;
        clickSurVoirInfosDetaillees(): void;
        clickSurDemandesDuplicationEnCours(): void;
        clickSurContenuDemandesDuplicationEnCours(): void;
        supprimerDemandeDuplicationProfil(): void;
        gererDemandeDuplicationProfil(modeModification: boolean): void;
        dupliquerProfil: () => void;
        voirListeAgentsProfil: () => void;
        cloturerProfil: () => void;
        /** Fin des actions */
        modiferProfil(voirFonctions: boolean): void;
        /**
         * Private
         */
        private initTableauDemandesDuplicationProfil();
        private chargerProfils();
        private chargerDuplications();
        private gestionDroits();
    }
}

declare module MonApplication.Service {
    class GestionProfilsService {
        profilSelectionne: Modeles.Profil;
        constructor();
    }
}

declare module MonApplication {
    class HabilitationRessourcesTssControleur {
        habilitationRessourcesTssService: Service.HabilitationRessourcesTssService;
        private $rootScope;
        private modalService;
        private servicePopup;
        static $inject: string[];
        private _libelleHabilitation;
        pageTitre: string;
        tableauRessourcesDispos: MyWay.UI.ImwTableOptions;
        tableauRessourcesAttachees: MyWay.UI.ImwTableOptions;
        tabRessourcesAttacheesActif: boolean;
        tabRessourcesDisposActif: boolean;
        chargementRessourcesTssEnCours: boolean;
        showResultatsRessourcesTssAttachees: boolean;
        showResultatsRessourcsTssDisponibles: boolean;
        constructor(habilitationRessourcesTssService: Service.HabilitationRessourcesTssService, $rootScope: ng.IRootScopeService, modalService: MyWay.UI.IModalService, servicePopup: Service.ServicePopup);
        ajouterRessourcesDispos(): void;
        retirerRessourcesAttachees(): void;
        private initDonnees();
        private updateAffichageTableaux();
    }
}

declare module MonApplication.Service {
    class HabilitationRessourcesTssService {
        private $q;
        private mwNotificationService;
        private ressourceTssService;
        static $inject: string[];
        private _messageAssociationsOk;
        private _messageAssociationsPartielles;
        private _messageAssociationsErreurs;
        habilitationCourante: Modeles.Habilitation;
        ressourcesTssDispos: Array<Modeles.RessourceTss>;
        constructor($q: ng.IQService, mwNotificationService: MyWay.UI.IMwNotificationService, ressourceTssService: Service.RessourceTssService);
        initRessourcesTss(): ng.IPromise<boolean>;
        associerRessourcesTss(dataRessourcesAGerer: Array<any>, action: Enum.ActionAssociation): ng.IPromise<boolean>;
        private associerRessourceTSS(ressourceTss, action);
        private avertirUtilisateur(etatsRetour);
    }
}

declare module MonApplication {
    class HabilitationListeAgentsControleur {
        private $rootScope;
        private agentService;
        static $inject: string[];
        pageTitre: string;
        habilitationCourante: Modeles.Habilitation;
        tableauAgentsAffectes: MyWay.UI.ImwTableOptions;
        listeAgentsAffectes: Array<Modeles.Agent>;
        showResultatsAgents: boolean;
        chargementAgentsAffectesEnCours: boolean;
        constructor($rootScope: ng.IRootScopeService, agentService: Service.AgentService);
    }
}

declare module MonApplication.ServiceFonctionnels {
    /**
     * Configuration du fichier CSV (utilisé par le service mwCsvService).
     */
    interface ICsvOptions {
        /**
         * Use this characters to "escape" fields, otherwise will use double quotes as deafult
         */
        txtDelimiter?: string;
        /**
         * Defines the decimal separator character (default is ,). If set to "locale", it uses the language sensitive representation of the number.
         */
        decimalSeparator?: string;
        /**
         * Will force escaping of every string field. (it should always true)
         */
        quoteStrings?: boolean;
        /**
         * Add the Byte Order Mark, use this option if you are getting an unexpected char when opening the file on any windows App (default is true).
         */
        addByteOrderMarker?: boolean;
        /**
         * Defines the field separator character (default is ;)
         */
        fieldSeparator?: any;
        /**
         * charset encoding
         */
        charset?: string;
        /**
         * output filename (default is export.csv)
         */
        filename?: string;
        /**
         * Defines whether or not using keys as csv column value (default is false).
         */
        label?: boolean;
        /**
         * If provided, would use this attribute to create a header row. This property should be used along with columnOrder because natural order can eventually change.
         */
        header?: string[];
        /**
         * Defines the column order to be set when creating the body of the CSV (may be according to the csv-headers).
         * It can also be used to filter properties in csv.
         */
        columnOrder?: any;
    }
}

declare module MonApplication.ServiceFonctionnels {
    /**
     * Service de génération d'un fichier CSV à partir d'un tableau
     */
    class CsvService {
        private $q;
        private $parse;
        private $window;
        private $document;
        private $timeout;
        static EOL: string;
        static BOM: string;
        static SPECIAL_CHARS: {
            "\\t": string;
            "\\b": string;
            "\\v": string;
            "\\f": string;
            "\\r": string;
        };
        static DEFAULT_OPTIONS: ICsvOptions;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $window: ng.IWindowService, $document: ng.IDocumentService, $timeout: ng.ITimeoutService);
        /**
         * @ngdoc method
         * @name myway.tools.service:mwsfAdresseService#downloadCsv
         * @methodOf myway.tools.service:mwCsvService
         * @param {any[]} data Tableau de données
         * @param {Myway.Tools.ICsvOptions} options Configuration du fichier csv
         * @description
         * Création et téléchargement d'un fichier csv à partir du tableau passé en paramètre.
         * Le tableau doit être un objet simple sans sous-objets puisque ces derniers ne sont pas gérés.
         * Les options sont toutes détaillées dans l'interface dédiée.
         *
         * #Configuration
         * La configuration fonctionne par surcharge, il faut donc indiquer ce qui diffère de la configuration par défaut.
         * <pre class="prettyprint">
         *   header: [ "Nom", "Prénom", "Age" ],
         *   columnOrder: ["nom", "prenom", "age" ],
         *   filename: "personnes.csv"
         * </pre>
         *
         * ##Configuration par défaut du fichier csv:
         * <pre class="prettyprint">
         *   txtDelimiter: "\"",
         *   decimalSeparator: ",",
         *   quoteStrings: true,
         *   addByteOrderMarker: true,
         *   fieldSeparator: ";",
         *   charset: "utf-8",
         *   label: false,
         *   filename: "export.csv"
         * </pre>
         * @returns {Promise<any>} Promesse résolue lorsque le téléchargement est lancé ou rejetée en cas d'erreur.
         */
        downloadCsv(data: any[], options?: ICsvOptions): ng.IPromise<any>;
        /**
         * Get options
         */
        private getOptions(options?);
        /**
         * Creates a csv from a data array
         */
        private stringify(data, options?);
        /**
         * Helper function to check if input is really a special character
         */
        isSpecialChar(input: string): boolean;
        /**
         * Helper function to get what the special character was supposed to be since Angular escapes the first backslash
         */
        getSpecialChar(input: string): string;
        /**
         * Stringify one field
         */
        private stringifyField(data, options);
        /**
         * Helper function to check if input is float
         */
        private isFloat(input);
    }
}

declare module MonApplication {
    interface IModalErreurControleurScope extends ng.IScope {
        viewModalErreurCtrl: IModalErreurControleur;
    }
    interface IModalErreurControleur {
        modalDatas: any;
        close(): void;
    }
    class ModalErreurControleur implements IModalErreurControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        message: string;
        codeErreur: string;
        libelleErreur: string;
        constructor($scope: IModalErreurControleurScope, $modalInstance: any, data: any, $modal: any);
        close(): void;
    }
}

declare module MonApplication {
    interface IModalFonctionListeProfilsControleurScope extends ng.IScope {
        viewModalFonctionListeProfilsCtrl: IModalFonctionListeProfilsControleur;
    }
    interface IModalFonctionListeProfilsControleur {
        modalDatas: any;
        fonction: Modeles.Fonction;
        tableauProfils: MyWay.UI.ImwTableOptions;
        ok(): void;
        close(): void;
    }
    class ModalFonctionListeProfilsControleur implements IModalFonctionListeProfilsControleur {
        private $scope;
        private $modalInstance;
        private profilService;
        static $inject: string[];
        modalDatas: any;
        fonction: Modeles.Fonction;
        tableauProfils: MyWay.UI.ImwTableOptions;
        constructor($scope: IModalFonctionListeProfilsControleurScope, $modalInstance: any, data: any, $modal: any, profilService: Service.ProfilService);
        ok(): void;
        close(): void;
    }
}

declare module MonApplication {
    interface IModalGererDemandeDuplicationProfilScope extends ng.IScope {
        viewModalGererDemandeDuplicationProfilCtrl: IModalGererDemandeDuplicationProfilControleur;
    }
    interface IModalGererDemandeDuplicationProfilControleur {
        modalDatas: any;
        demandeDuplication: Modeles.DemandeDuplicationPofil;
        ok(): void;
        close(): void;
    }
    class ModalGererDemandeDuplicationProfilControleur implements IModalGererDemandeDuplicationProfilControleur {
        private $scope;
        private $modalInstance;
        private modalService;
        private profilService;
        private profilDemandeDuplicationService;
        static $inject: string[];
        modificationDemande: boolean;
        modalDatas: any;
        demandeDuplication: Modeles.DemandeDuplicationPofil;
        constructor($scope: IModalGererDemandeDuplicationProfilScope, $modalInstance: any, modalService: MyWay.UI.IModalService, data: any, $modal: any, profilService: Service.ProfilService, profilDemandeDuplicationService: Service.ProfilDemandeDuplicationService);
        ok(): void;
        close(): void;
    }
}

declare module MonApplication {
    interface IModalSaisiePlageAutorisationControleurScope extends ng.IScope {
        viewModalSaisiePlageAutorisationCtrl: IModalSaisiePlageAutorisationControleur;
    }
    interface IModalSaisiePlageAutorisationControleur {
        modalDatas: any;
        messageErreur: string;
        dateDebut: Date;
        dateFin: Date;
        verifLogiqueSaisie(): void;
        ok(): void;
        close(): void;
    }
    class ModalSaisiePlageAutorisationControleur implements IModalSaisiePlageAutorisationControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        dateDuJour: Date;
        messageErreur: string;
        modalDatas: any;
        dateDebut: Date;
        dateFin: Date;
        constructor($scope: IModalSaisiePlageAutorisationControleurScope, $modalInstance: any, data: any, $modal: any);
        verifLogiqueSaisie(): void;
        ok(): void;
        close(): void;
    }
}

declare module MonApplication.Service {
    class ModalSaisiePlageAutorisationService {
        private modalService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService);
        genererModalSaisiePlageAutoristation(texte: string, dateDebut: string, dateFin: string, fonctionReussite: any): void;
    }
}

declare module MonApplication {
    interface IIModalValidationAffectationControleurScope extends ng.IScope {
        viewModalValidationAffectationCtrl: IModalValidationAffectationControleur;
    }
    interface IModalValidationAffectationControleur {
        modalDatas: any;
        ok(): void;
        close(): void;
        infoHabilitations: boolean;
        dataHabilitations: Array<Modeles.Habilitation>;
        infoProfils: boolean;
        dataProfils: Array<Modeles.Profil>;
        infoAgents: boolean;
        dataAgents: Array<Modeles.Agent>;
        infoFonctions: boolean;
        dataFonctions: Array<Modeles.Fonction>;
        infoApplications: boolean;
        dataApplications: Array<Modeles.Application>;
    }
    class ModalValidationAffectationControleur implements IModalValidationAffectationControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        infoHabilitations: boolean;
        dataHabilitations: Array<Modeles.Habilitation>;
        infoProfils: boolean;
        dataProfils: Array<Modeles.Profil>;
        infoFonctions: boolean;
        dataFonctions: Array<Modeles.Fonction>;
        infoAgents: boolean;
        dataAgents: Array<Modeles.Agent>;
        infoApplications: boolean;
        dataApplications: Array<Modeles.Application>;
        infoRessourcesTss: boolean;
        dataRessourceTss: Array<Modeles.RessourceTss>;
        constructor($scope: IIModalValidationAffectationControleurScope, $modalInstance: any, data: any, $modal: any);
        ok(): void;
        close(): void;
    }
}

declare module MonApplication {
    class ProfilDetailControleur {
        profilDetailService: Service.ProfilDetailService;
        private $rootScope;
        private $location;
        private $timeout;
        private profilDetailHabilitationsService;
        private serviceNavigation;
        private servicePopup;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        pageTitre: string;
        private _messageErreurProfil;
        private libelleProfil;
        erreurProprietesProfil: boolean;
        chargementDonneesProfilEnCours: boolean;
        autorisationModifierProfil: boolean;
        constructor(profilDetailService: Service.ProfilDetailService, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $timeout: ng.ITimeoutService, profilDetailHabilitationsService: Service.ProfilDetailHabilitationsService, serviceNavigation: Service.ServiceNavigation, servicePopup: Service.ServicePopup, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        private initDonneesVue();
        private initDonnees();
        private verificationDonneesProfil();
    }
}

declare module MonApplication.Service {
    class ProfilDetailServiceDonnees {
        profilCourant: Modeles.Profil;
        vueProfil: Enum.VueProfil;
        constructor();
    }
}

declare module MonApplication.Service {
    class ProfilDetailService {
        profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees;
        private profilDetailFonctionsService;
        private profilDetailHabilitationsService;
        private profilService;
        static $inject: string[];
        constructor(profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees, profilDetailFonctionsService: Service.ProfilDetailFonctionsService, profilDetailHabilitationsService: Service.ProfilDetailHabilitationsService, profilService: Service.ProfilService);
        getProfilDetail(): ng.IPromise<boolean>;
        chargerAffectation(vueProfil: Enum.VueProfil): void;
    }
}

declare module MonApplication {
    class ProfilListeAgentsControleur implements MyWay.UI.ISelectionChangeHandler {
        private $q;
        private modalService;
        private $rootScope;
        private agentService;
        private servicePopup;
        private modalSaisiePlageAutorisationService;
        static $inject: string[];
        pageTitre: string;
        profilCourant: Modeles.Profil;
        tableauAgentsAffectes: MyWay.UI.ImwTableOptions;
        listeAgentsAffectes: Array<Modeles.Agent>;
        showResultatsAgents: boolean;
        chargementAgentsAffectesEnCours: boolean;
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService, $rootScope: ng.IRootScopeService, agentService: Service.AgentService, servicePopup: Service.ServicePopup, modalSaisiePlageAutorisationService: Service.ModalSaisiePlageAutorisationService);
        retirerAgentAffecte(): void;
        modifierAgentAffecte(): void;
        onSelectionChange(selectedObject: Object): void;
        onShowDetail(selectedObject: Object): void;
        private chargerAgents();
    }
}

declare module MonApplication {
    class HabilitationListeProfilsControleur {
        private $rootScope;
        private $q;
        private profilService;
        static $inject: string[];
        pageTitre: string;
        habilitationCourante: Modeles.Habilitation;
        chargementEnCours: boolean;
        tableauProfilsAffectes: MyWay.UI.ImwTableOptions;
        showResultatsProfilsAssocies: boolean;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, profilService: Service.ProfilService);
        private initDonnees();
    }
}

declare module MonApplication {
    class RessourceTssDetailControleur {
        ressourcesTssDetailService: Service.RessourcesTssDetailService;
        private modalService;
        private $rootScope;
        private servicePopup;
        static $inject: string[];
        pageTitre: string;
        tableauHabilitationsAttachees: MyWay.UI.ImwTableOptions;
        chargementHabilitationsEnCours: boolean;
        showHabilitationsAttachees: boolean;
        autorisationListerAgents: boolean;
        autorisationListerProfils: boolean;
        btnListeAgentsStyleCss: string;
        btnListeProfilsStyleCss: string;
        constructor(ressourcesTssDetailService: Service.RessourcesTssDetailService, modalService: MyWay.UI.IModalService, $rootScope: ng.IRootScopeService, servicePopup: Service.ServicePopup);
        private initDonnees();
        voirProfils(): void;
        voirAgents(): void;
        private gestionDroits();
        private genererPopup(dataParam, titre, texte);
    }
}

declare module MonApplication.Service {
    class RessourcesTssDetailService {
        private $q;
        private ressourceTssService;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        private _autorisationListerAgents;
        private _autorisationListerProfils;
        ressourceTssCourante: Modeles.RessourceTss;
        constructor($q: ng.IQService, ressourceTssService: Service.RessourceTssService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        initDroit(): ng.IPromise<Array<boolean>>;
        getHabilitationsAttachees(): ng.IPromise<boolean>;
    }
}

declare module MonApplication {
    class RessourcesTssControleur {
        suiviRessourcesTssService: Service.SuiviRessourcesTssService;
        private footerService;
        private serviceNavigation;
        static $inject: string[];
        rechercheRessourcesTssEnCours: boolean;
        constructor(suiviRessourcesTssService: Service.SuiviRessourcesTssService, footerService: Service.FooterService, serviceNavigation: Service.ServiceNavigation);
    }
}

declare module MonApplication.Service {
    class SuiviRessourcesTssService {
        codeRessourceTss: string;
        libelleRessourceTss: string;
        tableauRessourcesTss: MyWay.UI.ImwTableOptions;
        showResultatsRessourcesTss: boolean;
        constructor();
    }
}

declare module MonApplication {
    class AgentPersoHabilitationsControleur {
        agentPersoService: Service.AgentPersonnalisationService;
        private agentPersoHabilitationsService;
        private $scope;
        private modalSaisiePlageAutorisationService;
        private modalService;
        private servicePopup;
        static $inject: string[];
        private _designationAgent;
        private _contexteMetierApp;
        chargementApplicationsEnCours: boolean;
        showResultatsApplicationsAffectees: boolean;
        showResultatsApplicationsDispos: boolean;
        tabApplicationsAffecteesActif: boolean;
        tabApplicationsDisposActif: boolean;
        constructor(agentPersoService: Service.AgentPersonnalisationService, agentPersoHabilitationsService: Service.AgentPersoHabilitationsService, $scope: any, modalSaisiePlageAutorisationService: Service.ModalSaisiePlageAutorisationService, modalService: MyWay.UI.IModalService, servicePopup: Service.ServicePopup);
        modifierPlageAutoristationApplications(): void;
        modifierHabilitationsForApplication(): void;
        retirerApplications(): void;
        ajouterApplications: (dateDebut: Date, dateFin: Date) => void;
        private initTableauApplicationsAvecDates();
        private initTableauApplications();
    }
}

declare module MonApplication {
    function AgentPersonnalisationHabilitations(): ng.IDirective;
}

declare module MonApplication.Service {
    class AgentPersoHabilitationsService {
        agentPersonnalisationServiceDonnees: Service.AgentPersonnalisationServiceDonnees;
        private $q;
        private mwNotificationService;
        private habilitationService;
        private applicationService;
        private agentService;
        static $inject: string[];
        private _messageAssociationsHabilitationsOk;
        private _messageSupprimerAssociationHabilitations;
        tableauApplicationsAffectees: MyWay.UI.ImwTableOptions;
        tableauApplicationsDispos: MyWay.UI.ImwTableOptions;
        applicationsAffecteesAvecDates: Array<Modeles.GroupeHabilitation>;
        applicationsDispos: Array<Modeles.Application>;
        constructor(agentPersonnalisationServiceDonnees: Service.AgentPersonnalisationServiceDonnees, $q: ng.IQService, mwNotificationService: MyWay.UI.IMwNotificationService, habilitationService: Service.HabilitationService, applicationService: Service.ApplicationService, agentService: Service.AgentService);
        updateAffichageApplications(): void;
        initApplications(): ng.IPromise<boolean>;
        getGroupesForApplication(codeApplication: string): Array<Modeles.GroupeHabilitation>;
        getGroupesForApplications(listApplications: Array<Modeles.Application>): Array<Modeles.GroupeHabilitation>;
        creerApplicationsPersonnalisees(dataApplications: Array<any>, dateDebut: string, dateFin: string): ng.IPromise<boolean>;
        gererApplicationsPersonnalisees(typeAssociation: Enum.ActionAssociation, listApplications: Array<Modeles.Application>, dateDebut: string, dateFin: string): ng.IPromise<boolean>;
        gererGroupesPersonnalisees(typeAssociation: Enum.ActionAssociation, listGroupes: Array<Modeles.GroupeHabilitation>): ng.IPromise<boolean>;
        supprimerApplicationsPersonnalisees(listApplications: Array<Modeles.Application>): ng.IPromise<boolean>;
    }
}

declare module MonApplication {
    class AgentPersoProfilsControleur {
        agentPersoService: Service.AgentPersonnalisationService;
        private agentPersoProfilsService;
        private $scope;
        private modalSaisiePlageAutorisationService;
        private servicePopup;
        private profilService;
        static $inject: string[];
        private _designationAgent;
        contexteMetierProfil: Enum.ContexteMetier;
        chargementProfilsEnCours: boolean;
        tabProfilsAffectesActif: boolean;
        tabProfilsDisposActif: boolean;
        showResultatsProfilsAffectes: boolean;
        showResultatsProfilsDispos: boolean;
        constructor(agentPersoService: Service.AgentPersonnalisationService, agentPersoProfilsService: Service.AgentPersoProfilsService, $scope: any, modalSaisiePlageAutorisationService: Service.ModalSaisiePlageAutorisationService, servicePopup: Service.ServicePopup, profilService: Service.ProfilService);
        modifierPlageAutoristationProfil(): void;
        retirerProfils(): void;
        ajouterProfils: (dateDebut: Date, dateFin: Date) => void;
    }
}

declare module MonApplication {
    function AgentPersonnalisationProfils(): ng.IDirective;
}

declare module MonApplication.Service {
    class AgentPersoProfilsService {
        agentPersonnalisationServiceDonnees: Service.AgentPersonnalisationServiceDonnees;
        private $q;
        private mwNotificationService;
        private agentService;
        private profilService;
        static $inject: string[];
        private _messageAssociationsProfilsOk;
        private _messageAssociationsProfilsPartiel;
        private _messageSuppressionProfils;
        tableauProfilsDisponibles: MyWay.UI.ImwTableOptions;
        tableauProfilsAffectes: MyWay.UI.ImwTableOptions;
        chargementProfilsEnCours: boolean;
        profilsDispos: Array<Modeles.Profil>;
        constructor(agentPersonnalisationServiceDonnees: Service.AgentPersonnalisationServiceDonnees, $q: ng.IQService, mwNotificationService: MyWay.UI.IMwNotificationService, agentService: Service.AgentService, profilService: Service.ProfilService);
        updateAffichageProfils(): void;
        gererProfilsDisponibles(): ng.IPromise<boolean>;
        gererProfilsPersonnalises(typeAssociation: Enum.ActionAssociation, dataProfils: Array<Object>, dateDebut: string, dateFin: string): ng.IPromise<boolean>;
        supprimerProfilsPersonnalises(dataProfils: Array<Object>): ng.IPromise<boolean>;
        private gererProfilPersonnalise(typeAssociation, profil, dateDebut, dateFin);
        private supprimerProfilPersonnalise(profil);
    }
}

declare module MonApplication {
    class AjoutElementsDisposControleur {
        private $scope;
        static $inject: string[];
        private _dateDuJour;
        tableauDonnees: MyWay.UI.ImwTableOptions;
        dateDebut: Date;
        dateFin: Date;
        debutDateMinAutorisee: Date;
        finDateMinAutorisee: Date;
        messageErreur: string;
        fonctionAjouterElement: any;
        constructor($scope: any);
        ajouterElement(): void;
        verifLogiqueSaisie(): void;
    }
}

declare module MonApplication {
    function AjoutElementsDispos(): ng.IDirective;
}

declare module MonApplication {
    interface IModalHabilitationsApplicationControleurScope extends ng.IScope {
        viewModalHabilitationsApplicationCtrl: IModalHabilitationsApplicationControleur;
    }
    interface IModalHabilitationsApplicationControleur {
        modalDatas: any;
        ok(): void;
        close(): void;
    }
    class ModalHabilitationsApplicationControleur implements IModalHabilitationsApplicationControleur {
        private $scope;
        private $modalInstance;
        private modalHabilitationsApplicationService;
        static $inject: string[];
        modalDatas: any;
        chargementHabilitationsEnCours: boolean;
        tableauHabilitationsDisponibles: MyWay.UI.ImwTableOptions;
        tableauHabilitationsAffectees: MyWay.UI.ImwTableOptions;
        tabHabsAffecteesActif: boolean;
        tabHabsDisposActif: boolean;
        constructor($scope: IModalHabilitationsApplicationControleurScope, $modalInstance: any, data: any, $modal: any, modalHabilitationsApplicationService: Service.ModalHabilitationsApplicationService);
        ok(): void;
        close(): void;
        private updateAffichageHabilitations();
        private retirerHabilitations();
        private ajouterHabilitations();
    }
}

declare module MonApplication.Service {
    class ModalHabilitationsApplicationService {
        private $q;
        private habilitationService;
        static $inject: string[];
        private _habsOrdonneesByGroupesApplicationCourante;
        listGroupeHabilitation: Array<Modeles.GroupeHabilitation>;
        habilitationsAffectees: Array<Modeles.Habilitation>;
        habilitationsDispos: Array<Modeles.Habilitation>;
        constructor($q: ng.IQService, habilitationService: Service.HabilitationService);
        gererHabilitationsForApplication(): ng.IPromise<boolean>;
        updateVecteurHabilitation(dataHabilitations: Array<Object>): ng.IPromise<Array<Modeles.GroupeHabilitation>>;
    }
}

declare module MonApplication {
    class BtnExporterTableauControleur {
        private $scope;
        private mwCsvService;
        static $inject: string[];
        referenceElement: string;
        detailExportation: string;
        donneesBrut: Array<Object>;
        colonnes: Array<MyWay.UI.ImwTableColumnOptions>;
        constructor($scope: any, mwCsvService: ServiceFonctionnels.CsvService);
        exporter(): void;
        private getColonnesReferences(colonnesReferencesNonTraitees);
        private getDataTableau(colonnesReferences, dataBrut);
    }
}

declare module MonApplication {
    function BtnExporterTableau(): ng.IDirective;
}

declare module MonApplication {
    class BtnFermerProcessusControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($scope: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        fermerProcessus(): void;
    }
}

declare module MonApplication {
    function BtnFermerProcessus(): ng.IDirective;
}

declare module MonApplication {
    class DomaineApplicationControleur {
        private $scope;
        private domaineService;
        private applicationService;
        static $inject: string[];
        private _allApplications;
        listeDomaines: Array<Modeles.Domaine>;
        domaineSelectionne: Modeles.Domaine;
        listeApplications: Array<Modeles.Application>;
        applicationSelectionnee: Modeles.Application;
        fonctionVerification: () => void;
        constructor($scope: any, domaineService: Service.DomaineService, applicationService: Service.ApplicationService);
        majItemDomaine(): void;
    }
}

declare module MonApplication {
    function DomaineApplication(): ng.IDirective;
}

declare module MonApplication {
    class FooterControleur {
        footerService: Service.FooterService;
        gestionHabsService: Service.GestionHabilitationsService;
        gestionProfilsService: Service.GestionProfilsService;
        gestionAgentsService: Service.GestionAgentsService;
        suiviRessourcesTssService: Service.SuiviRessourcesTssService;
        static $inject: string[];
        constructor(footerService: Service.FooterService, gestionHabsService: Service.GestionHabilitationsService, gestionProfilsService: Service.GestionProfilsService, gestionAgentsService: Service.GestionAgentsService, suiviRessourcesTssService: Service.SuiviRessourcesTssService);
    }
}

declare module MonApplication.Service {
    interface IFooterService {
        showFooterGestionHabilitations: boolean;
        showFooterGestionProfils: boolean;
        showFooterSuivieRessourcesTss: boolean;
        showFooterSimpleFermerProcessus: boolean;
        showFooterSimpleRetour: boolean;
    }
    class FooterService implements IFooterService {
        showFooterGestionHabilitations: boolean;
        showFooterGestionProfils: boolean;
        showFooterSuivieRessourcesTss: boolean;
        showFooterSimpleFermerProcessus: boolean;
        showFooterSimpleRetour: boolean;
        constructor();
        init(): void;
    }
}

declare module MonApplication {
    function FooterFermerProcessus(): ng.IDirective;
}

declare module MonApplication {
    class FooterRetourControleur {
        private $scope;
        private $location;
        private serviceNavigation;
        static $inject: string[];
        constructor($scope: any, $location: ng.ILocationService, serviceNavigation: Service.ServiceNavigation);
        retourPagePrecedente(): void;
    }
}

declare module MonApplication {
    function FooterRetour(): ng.IDirective;
}

declare module MonApplication.HabilitationsUtilisateur {
    interface IHabilitation {
        codeHabilitation: string;
        libelleHabilitation: string;
        commentaire: string;
        habilitationBloquante: boolean;
        autorisationDebug: boolean;
    }
    class Habilitation implements IHabilitation {
        codeHabilitation: string;
        libelleHabilitation: string;
        commentaire: string;
        habilitationBloquante: boolean;
        autorisationDebug: boolean;
        constructor(habilitationDonnees?: Habilitation);
    }
}

declare module MonApplication.HabilitationsUtilisateur {
    module Constantes {
        var SHCHAF: Habilitation;
        var SHCHAG: Habilitation;
        var SHCHAR: Habilitation;
        var SHCHAT: Habilitation;
        var SHCHCE: Habilitation;
        var SHCHCP: Habilitation;
        var SHCHCT: Habilitation;
        var SHCHFO: Habilitation;
        var SHCHFT: Habilitation;
        var SHCHGC: Habilitation;
        var SHCHMT: Habilitation;
        var SHCHPC: Habilitation;
        var SHCHPF: Habilitation;
        var SHCHPT: Habilitation;
        var SHCHRS: Habilitation;
        var SHCHST: Habilitation;
        var SHCHSV: Habilitation;
        var SHCHVT: Habilitation;
    }
}

declare module MonApplication.HabilitationsUtilisateur {
    interface IServiceHabilitationsUtilisateur {
        verifierDroitHabilitation: (habilitation: Habilitation) => ng.IPromise<boolean>;
        verifierDroitsHabilitations: (listHabilitations: Array<Habilitation>) => ng.IPromise<Array<boolean>>;
    }
    class ServiceHabilitationsUtilisateur implements IServiceHabilitationsUtilisateur {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        private _modeDebug;
        private _infoModeDebug;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        verifierDroitHabilitation(habilitation: Habilitation): ng.IPromise<boolean>;
        verifierDroitsHabilitations(listHabilitations: Array<Habilitation>): ng.IPromise<Array<boolean>>;
        private applicationBloque(listHabilitations, droitsUtilisateur);
        private erreurRecuperationHabilitation(erreur, listHabilitations);
        private avertirUtilisateur(nomControleur, nomPopup, templateDatas);
    }
}

declare module MonApplication {
    function PageTitre(): ng.IDirective;
}

declare module MonApplication {
}

declare module MonApplication.Service {
    class ServiceNavigation {
        private $q;
        private navigationService;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        locationPrecedente: string;
        afficherNavPrincipal: boolean;
        afficherNavSecondaire: boolean;
        afficherNavSecondaireBis: boolean;
        gestionDroits: boolean;
        constructor($q: ng.IQService, navigationService: MyWay.UI.INavigationService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        init(): void;
        genererMenu(menu: Array<Object>, titrePage?: string): Array<MyWay.UI.TotemComponent>;
        setActivePage(titrePage: string): void;
        setActiveSection(titrePage: string, titreSection: string): void;
        verifierMenuAvecHabilitations(menu: Array<Object>): void;
        private verifierPagesByChapitre(titreChapitre, pages);
        verifierSectionByPage(titrePage: string, sections: Array<Object>): ng.IPromise<boolean>;
        private verifierElementActif(listHabilitations);
        private supprimerPage(titreChapitre, iPage);
        private supprimerSection(titrePage, iSection);
    }
}

declare module MonApplication {
    class RechercheAgentsControleur {
        private $scope;
        private servicePopup;
        static $inject: string[];
        tableauAgents: MyWay.UI.ImwTableOptions;
        sourceListeAgents: Array<Modeles.Agent>;
        showResultatsAgents: boolean;
        private _titreFenetreModale;
        identifiantAgent: string;
        designationAgent: string;
        personnalisationAgentRecherche: Enum.Personnalisation;
        cbPersoAgentOui: boolean;
        cbPersoAgentNon: boolean;
        limiteTableau: number;
        showErreurIdentifiant: boolean;
        showErreurDesignation: boolean;
        messageErreurTailleChaine: string;
        rechercheAutorisee: boolean;
        constructor($scope: any, servicePopup: Service.ServicePopup);
        rechercherAgents(): void;
        private filtrerAgents(identifiant, designation, personnalisation, sourceRechercheAgents);
        verifLongueurMinimumIdentifiant(): void;
        verifLongueurMinimumDesignation(): void;
        verifSelectionPersonnalisation(): void;
        private verificationRechercheAutorisee();
    }
}

declare module MonApplication {
    function RechercheAgents(): ng.IDirective;
}

declare module MonApplication {
    class RechercheApplicationsControleur {
        private $scope;
        private servicePopup;
        private domaineService;
        static $inject: string[];
        tableauApplications: MyWay.UI.ImwTableOptions;
        sourceListeApplications: Array<Modeles.Application>;
        showResultatsApplications: boolean;
        private _titreFenetreModale;
        libelleApplication: string;
        domaineSelectionne: Modeles.Domaine;
        listeDomaines: Array<Modeles.Domaine>;
        limiteTableau: number;
        showErreurLibelle: boolean;
        messageErreurTailleChaine: string;
        rechercheAutorisee: boolean;
        constructor($scope: any, servicePopup: Service.ServicePopup, domaineService: Service.DomaineService);
        rechercherApplications(): void;
        private filtrerApplications(libelle, domaine, sourceRechercheApplications);
        verifLongueurMinimumLibelle(): void;
        majItemDomaine(): void;
        private verificationRechercheAutorisee();
    }
}

declare module MonApplication {
    function RechercheApplications(): ng.IDirective;
}

declare module MonApplication {
    class RechercheHabilitationsControleur {
        private $scope;
        private habilitationService;
        private applicationService;
        private servicePopup;
        static $inject: string[];
        private _allApplications;
        rechercheObligatoire: boolean;
        code: string;
        libelle: string;
        domaine: Modeles.Domaine;
        application: Modeles.Application;
        showResultatsHabilitations: boolean;
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        rechercheHabilitationsEnCours: boolean;
        sourceListHabilitations: Array<Modeles.Habilitation>;
        private _titreFenetreModale;
        private _premiereRechercheEffectuee;
        limiteTableau: number;
        showErreurCode: boolean;
        showErreurLibelle: boolean;
        messageErreurTailleChaine: string;
        rechercheAutorisee: boolean;
        constructor($scope: any, habilitationService: Service.HabilitationService, applicationService: Service.ApplicationService, servicePopup: Service.ServicePopup);
        rechercherHabilitations(): void;
        verifLongueurMinimumCode(): void;
        verifLongueurMinimumLibelle(): void;
        private verificationRechercheAutorisee;
        private filtrerParDomaineEtApplication(domaineSelectionne, applicationSelectionnee);
        private getHabilitationsOfApplicationDispos(application);
    }
}

declare module MonApplication {
    function RechercheHabilitations(): ng.IDirective;
}

declare module MonApplication {
    class RechercheInfosTableauControleur {
        private $scope;
        static $inject: string[];
        element: string;
        masculin: string;
        tableau: MyWay.UI.ImwTableOptions;
        source: Array<Object>;
        rechercheEffectuee: boolean;
        typeDonneeMasculin: boolean;
        limiteTableau: number;
        constructor($scope: any);
    }
}

declare module MonApplication {
    function RechercheInfosTableau(): ng.IDirective;
}

declare module MonApplication {
    class RechercheProfilsControleur {
        private $scope;
        private servicePopup;
        static $inject: string[];
        tableauProfils: MyWay.UI.ImwTableOptions;
        sourceListeProfils: Array<Modeles.Profil>;
        showResultatsProfils: boolean;
        private _titreFenetreModale;
        codeProfil: string;
        libelleProfil: string;
        limiteTableau: number;
        showErreurCode: boolean;
        showErreurLibelle: boolean;
        messageErreurTailleChaine: string;
        rechercheAutorisee: boolean;
        constructor($scope: any, servicePopup: Service.ServicePopup);
        rechercherProfils(): void;
        private filtrerProfils(code, libelle, sourceRechercheProfils);
        verifLongueurMinimumCode(): void;
        verifLongueurMinimumLibelle(): void;
        private verificationRechercheAutorisee;
    }
}

declare module MonApplication {
    function RechercheProfils(): ng.IDirective;
}

declare module MonApplication {
    class RechercheRessourcesTssControleur {
        private $scope;
        private servicePopup;
        private ressourceTssService;
        static $inject: string[];
        rechercheObligatoire: boolean;
        codeRessourceTss: string;
        libelleRessourceTss: string;
        tableauRessourcesTss: MyWay.UI.ImwTableOptions;
        showResultatsRessourcesTss: boolean;
        rechercheRessourcesTssEnCours: boolean;
        sourceListeRessourcesTss: Array<Modeles.RessourceTss>;
        private _titreFenetreModale;
        private _premiereRechercheEffectuee;
        limiteTableau: number;
        showErreurCode: boolean;
        showErreurLibelle: boolean;
        messageErreurTailleChaine: string;
        rechercheAutorisee: boolean;
        constructor($scope: any, servicePopup: Service.ServicePopup, ressourceTssService: Service.RessourceTssService);
        rechercherRessourcesTss(): void;
        verifLongueurMinimumCode(): void;
        verifLongueurMinimumLibelle(): void;
        private verificationRechercheAutorisee();
    }
}

declare module MonApplication {
    function RechercheRessourcesTss(): ng.IDirective;
}

declare module MonApplication.Constantes {
    module Donnees {
        var DATE_FIN_VALIDITE: string;
        var DATE_INTERROGATION: string;
        var LIMITE_TABLEAU: number;
    }
}

declare module MonApplication.Constantes {
    module Messages {
        module Informations {
            var ERREUR_MODELE_OBJET: string;
            var ERREUR_TAILLE_CHAINE_RECHERCHE: string;
        }
        module Referentiels {
            var INFO_ERREUR_REFERENTIEL: string;
            var ERREUR_DOMAINE: string;
            var ERREUR_APPLICATION: string;
            var ERREUR_HABILITATION: string;
            var ERREUR_RESSOURCES_TSS: string;
        }
        module Habilitation {
            var ERREUR_GET_DETAIL_HABILITATION: string;
            var ERREUR_CORRESPONDANCE_CLE_GROUPE_CENTRAL_VS_IHM: string;
            var ERREUR_CORRESPONDANCE_HABILITATIONS_CENTRAL_VS_IHM: string;
        }
        module Profil {
            var ERREUR_GET_LISTE_PROFILS: string;
            var ERREUR_GET_DETAIL: string;
            var ERREUR_CREATION: string;
            var INFO_CREATION: string;
            var ERREUR_MODIFICATION: string;
            var INFO_MODIFICATION: string;
            var ERREUR_SUPPRESSION: string;
            var INFO_SUPPRESSION: string;
            var ERREUR_ASSOCIER_FONCTION: string;
            var INFO_ASSOCIER_FONCTION: string;
            var ERREUR_ASSOCIER_HABILITATION: string;
            var INFO_ASSOCIER_HABILITATION: string;
            var ERREUR_GET_PROFILS_ASSOCIES_BY_FONCTION: string;
            var ERREUR_GET_PROFILS_ASSOCIES_BY_HABILITATION: string;
            var ERREUR_GET_HABS_AFFECTEES_PAR_DOMAINE: string;
        }
        module DemandeDuplicationProfil {
            var ERREUR_GET_TOUTES: string;
            var ERREUR_GET_DETAIL: string;
            var INFO_CREATION: string;
            var ERREUR_CREATION: string;
            var INFO_MODIFICATION: string;
            var ERREUR_MODIFICATION: string;
            var INFO_SUPPRESSION: string;
            var ERREUR_SUPPRESSION: string;
        }
        module Fonction {
            var ERREUR_GET_FONCTIONS: string;
            var ERREUR_GET_ASSOCIATIONS_PROFIL: string;
        }
        module Agent {
            var ERREUR_GET_AGENTS_BY_HABILITATION: string;
            var ERREUR_GET_AGENTS_BY_PROFIL: string;
            var INFO_MODIFIER_AGENT_PERSONNALISE: string;
            var ERREUR_MODIFIER_AGENT_PERSONNALISE: string;
            var INFO_SUPPRIMER_AGENT_PERSONNALISE: string;
            var ERREUR_SUPPRIMER_AGENT_PERSONNALISE: string;
            var ERREUR_GET_PERSONNALISATION_AGENT: string;
            var ERREUR_GET_COMPETENCES_AGENT: string;
            var ERREUR_GET_HABILITATIONS_PERSOS: string;
        }
        module RessourceTss {
            var ERREUR_GET_RESSOURCES_TSS_LIEES_BY_HABILITATION: string;
            var ERREUR_GET_HABILITATION_ATTACHEES_BY_RESSOURCE_TSS: string;
            var INFO_ASSOCIER_HABILITATION: string;
            var ERREUR_ASSOCIER_HABILITATION: string;
        }
        module TypeRessource {
            var ERREUR_GET_TYPE_RESSOURCES: string;
        }
    }
}

declare module MonApplication.Constantes {
    module Navigation {
        var MENU_PRINCIPAL: Array<Object>;
        var MENU_PROFIL_CREATION: Array<Object>;
        var MENU_PROFIL_MODIFICATION: Array<Object>;
        var MENU_PROFIL_LISTE_AGENTS: Array<Object>;
        var MENU_HABILITATION: Array<Object>;
        var MENU_HABILITATION_LISTE_AGENTS: Array<Object>;
        var MENU_HABILITATION_RESSOURCES_TSS: Array<Object>;
        var MENU_FONCTION: Array<Object>;
        var MENU_AGENT_PERSONNALISATION: Array<Object>;
        var MENU_AGENT_PROFIL_COMPLET: Array<Object>;
        var MENU_RESSOURCE_TSS: Array<Object>;
    }
}

declare module MonApplication.Constantes {
    module Services {
        module Referentiels {
            var URL_REFERENTIEL_DOMAINE: string;
            var URL_REFERENTIEL_APPLICATION: string;
            var URL_REFERENTIEL_HABILITATION: string;
            var URL_REFERENTIEL_TYPE_RESSOURCE: string;
            var URL_REFERENTIEL_RESSOURCE_TSS: string;
        }
        module Profil {
            var URL_PROFIL_TYPE: string;
            var URL_LISTE_PROFIL_TYPE: string;
            var URL_DUPLICATION: string;
            var AIGUILLEUR_GET_PROFILS: string;
            var AIGUILLEUR_PROFIL_ASSOCIES_BY_HABILITATION: string;
            var AIGUILLEUR_GET_GRPS_HABS_AFFECTE_FOR_DOMAINE: string;
            var AIGUILLEUR_PROFIL_ASSOCIES_BY_FONCTION: string;
            var CODE_ACTION_PROFIL_ASSOCIES_BY_FONCTION: number;
            var VALEUR_INITIALE_PROFIL_ASSOCIES_BY_HABILITATION: string;
        }
        module Habilitation {
            var URL_HABILITATION_RECHERCHE: string;
            var URL_HABILITATION_DETAIL: string;
            var URL_HABILITATION_PARAMETRE: string;
        }
        module Fonction {
            var URL_FONCTION: string;
            var URL_LISTE_FONCTION: string;
            var TYPE_INTERROGATION_FONCTIONS: string;
        }
        module Agent {
            var URL_AGENT_RECHERCHE: string;
            var URL_AFFECTATION_PROFIL_AGENT: string;
            var URL_AGENT_PERSONNALISATION: string;
            var URL_COMPETENCE_AGENT: string;
            var URL_SYNTHESE_HABILITATIONS: string;
            var URL_AFFECTATION_HABILITATION_AGENT: string;
            var AIGUILLEUR: string;
            var CODE_ACTION_COMPETENCE_AGENT: number;
            var CODE_ACTION_SYNTHESE_HABILITATION: number;
            var TYPE_RECHERCHE_PAR_PROFIL: number;
            var TYPE_RECHERCHE_PAR_HABILITATION: number;
        }
        module RessourceTss {
            var URL_LISTE_RESSOURCE_TSS: string;
            var URL_AFFECTATION_HABILITTAION_RESSOURCE_TS: string;
            var ACTION_GET_RESSOURCES_TSS_LIEES_BY_HABILITATION: number;
            var ACTION_GET_HABILITATION_ATTACHEES_BY_RESSOURCE_TSS: number;
        }
    }
}

declare module MonApplication.Enum {
    enum ActionAffectationHabilitation {
        Ajouter,
        Supprimer,
    }
}

declare module MonApplication.Enum {
    enum ActionAssociation {
        Ajouter,
        Modifier,
        Supprimer,
    }
}

declare module MonApplication.Enum {
    class CategorieHabilitation {
        code: string;
        libelle: string;
        constructor(code: string, libelle: string);
        toString(): string;
        static AUTOMATE: CategorieHabilitation;
        static CTR: CategorieHabilitation;
        static SELON_AVIS_ETABLISSEMENTS: CategorieHabilitation;
        static GESTION: CategorieHabilitation;
        static INTERROGATION: CategorieHabilitation;
        static PARAMETRAGE: CategorieHabilitation;
        static SPECIFIQUE: CategorieHabilitation;
        static A_DETERMINER: CategorieHabilitation;
        static OBSOLETE: CategorieHabilitation;
        static getCategorieByCode(codeCategorie: string): Enum.CategorieHabilitation;
    }
}

declare module MonApplication.Enum {
    enum ContexteMetier {
        Habilitation = 0,
        Profil = 1,
        Fonction = 2,
        Agent = 3,
        RessourceTss = 4,
        Application = 5,
    }
}

declare module MonApplication.Enum {
    class StatutElement {
        code: string;
        libelle: string;
        constructor(code: string, libelle: string);
        toString(): string;
        static NEUTRE: StatutElement;
        static CREATION_EN_COURS: StatutElement;
        static SUPPRESSION_EN_COURS: StatutElement;
        static getStatutElementByCode(codeEtat: string): Enum.StatutElement;
    }
}

declare module MonApplication.Enum {
    class EtatHabilitation {
        code: string;
        libelle: string;
        constructor(code: string, libelle: string);
        toString(): string;
        static ACTIVE: EtatHabilitation;
        static INACTIVE: EtatHabilitation;
        static A_SUPPRIMER: EtatHabilitation;
        static getEtatByCode(codeEtat: string): Enum.EtatHabilitation;
    }
}

declare module MonApplication.Enum {
    enum EtatHabilitationVecteur {
        Activer,
        Desactiver,
    }
}

declare module MonApplication.Enum {
    enum Personnalisation {
        Oui,
        Non,
    }
}

declare module MonApplication.Enum {
    enum VueAgent {
        Personnalisation = 0,
        ProfilComplet = 1,
    }
}

declare module MonApplication.Enum {
    enum VueProfil {
        CreationProfil = 0,
        ModificationProfil = 1,
        ListeAgentsProfil = 2,
    }
}

declare module MonApplication {
    class TableauHabilitationsControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private habilitationService;
        private $timeout;
        static $inject: string[];
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        id: string;
        constructor($scope: any, habilitationService: Service.HabilitationService, $timeout: ng.ITimeoutService);
        onSelectionChange(selectedObject: Object): void;
        onShowDetail(selectedObject: Object): void;
        private convertirHabilitationToObjetTableau(habilitation, selectedObjet);
    }
}

declare module MonApplication {
    function TableauHabilitations(): ng.IDirective;
}

declare module MonApplication.Modeles {
    interface IAgent {
        codeEtablissement: number;
        identifiantElementStructure: number;
        referenceElementStructure: number;
        designationAgent: string;
        dateDebutValiditeAgent: string;
        dateFinValiditeAgent: string;
        typeFonction: string;
        libelleLong: string;
        libelleFonction: string;
        identifiantEDSHierarchique: number;
        indicateurAffectationTemporaire: string;
        indicateurNonElligibiliteRDV: string;
        referenceEDSHierarchique: number;
        typeEDSHierarchique: string;
        libelleTypeEDSHierarchique: string;
        libelleEDSHierarchique: string;
        identifiantAgent: string;
        indicateurAgentNonNominatif: string;
        typePersonnalisation: string;
        groupesHabilitation: Array<Modeles.GroupeHabilitation>;
        profilsAffectees: Array<Modeles.Profil>;
        habilitationsAffectees: Array<Modeles.Habilitation>;
        profilsDusFonction: Array<Modeles.ProfilDuFonction>;
        profilCompletListeFonctions: Array<Modeles.Fonction>;
        profilCompletListeApplications: Array<Modeles.Application>;
        profilCompletListeGroupes: Array<Modeles.GroupeHabilitation>;
        affectationPersonnalise: Enum.Personnalisation;
    }
    class Agent implements IAgent {
        codeEtablissement: number;
        identifiantElementStructure: number;
        referenceElementStructure: number;
        designationAgent: string;
        dateDebutValiditeAgent: string;
        dateFinValiditeAgent: string;
        typeFonction: string;
        libelleLong: string;
        libelleFonction: string;
        identifiantEDSHierarchique: number;
        indicateurAffectationTemporaire: string;
        indicateurNonElligibiliteRDV: string;
        referenceEDSHierarchique: number;
        typeEDSHierarchique: string;
        libelleTypeEDSHierarchique: string;
        libelleEDSHierarchique: string;
        identifiantAgent: string;
        indicateurAgentNonNominatif: string;
        typePersonnalisation: string;
        groupesHabilitation: Array<Modeles.GroupeHabilitation>;
        habilitationsAffectees: Array<Modeles.Habilitation>;
        profilsAffectees: Array<Modeles.Profil>;
        profilsDusFonction: Array<Modeles.ProfilDuFonction>;
        profilCompletListeFonctions: Array<Modeles.Fonction>;
        profilCompletListeApplications: Array<Modeles.Application>;
        profilCompletListeGroupes: Array<Modeles.GroupeHabilitation>;
        affectationPersonnalise: Enum.Personnalisation;
        constructor();
    }
}

declare module MonApplication.Modeles {
    interface IApplication {
        codeDomaine: string;
        codeApplication: string;
        libelleApplication: string;
        codeEtatApplication: string;
        typeApplication: string;
        listHabilitations: Array<Modeles.Habilitation>;
    }
    class Application implements IApplication {
        codeDomaine: string;
        codeApplication: string;
        libelleApplication: string;
        codeEtatApplication: string;
        typeApplication: string;
        listHabilitations: Array<Modeles.Habilitation>;
        constructor(donnees?: Application);
    }
}

declare module MonApplication.Modeles {
    interface IDemandeDuplicationPofil {
        codeProfilType: string;
        dateCreation: string;
        dateModification: string;
        timestampCreation: string;
        libelleProfilType: string;
        numeroSequence: string;
        referenceExterneAgent: string;
        commentaire: string;
    }
    class DemandeDuplicationPofil implements IDemandeDuplicationPofil {
        codeProfilType: string;
        dateCreation: string;
        dateModification: string;
        timestampCreation: string;
        libelleProfilType: string;
        numeroSequence: string;
        referenceExterneAgent: string;
        commentaire: string;
        constructor(donnees?: DemandeDuplicationPofil);
    }
}

declare module MonApplication.Modeles {
    interface IDomaine {
        codeDomaine: string;
        libelleDomaine: string;
        codeLettreDomaine: string;
    }
    class Domaine implements IDomaine {
        codeDomaine: string;
        libelleDomaine: string;
        codeLettreDomaine: string;
        constructor(donnees?: Domaine);
    }
}

declare module MonApplication.Modeles {
    interface IFonction {
        codeFonction: string;
        libelleFonction: string;
        dateFinValidite: string;
        codeEtablissement: string;
        profilsAssocies: Array<Modeles.Profil>;
    }
    class Fonction implements IFonction {
        codeFonction: string;
        libelleFonction: string;
        dateFinValidite: string;
        codeEtablissement: string;
        profilsAssocies: Array<Modeles.Profil>;
        constructor(donneesFonction?: Fonction);
    }
}

declare module MonApplication.Modeles {
    interface IGroupeHabilitation {
        codeRetourEchanges: string;
        codeDomaine: string;
        codeApplicationCartographie: string;
        codeGroupeHabilitation: string;
        vecteurHabilitation: string;
        codeEtat: string;
        dateDebutValiditeGroupeHabilitation: string;
        dateFinValiditeGroupeHabilitation: string;
        domaine: Modeles.Domaine;
        application: Modeles.Application;
        affectationPersonnalise: Enum.Personnalisation;
    }
    class GroupeHabilitation implements IGroupeHabilitation {
        codeRetourEchanges: string;
        codeDomaine: string;
        codeApplicationCartographie: string;
        codeGroupeHabilitation: string;
        vecteurHabilitation: string;
        codeEtat: string;
        dateDebutValiditeGroupeHabilitation: string;
        dateFinValiditeGroupeHabilitation: string;
        domaine: Modeles.Domaine;
        application: Modeles.Application;
        affectationPersonnalise: Enum.Personnalisation;
        constructor();
    }
}

declare module MonApplication.Modeles {
    interface IHabilitation {
        alphanumeriqueBanalise1: string;
        alphanumeriqueBanalise1A: string;
        alphanumeriqueBanalise1B: string;
        codeApplication: string;
        codeCategorieHabilitation: string;
        codeDomaine: string;
        codeEligibiliteFonctionApplicative: string;
        codeEtatHabilitation: string;
        codeForcabiliteHabilitation: string;
        codeGroupeHabilitation: string;
        codeHabilitation: string;
        codeLocalisationHabilitation: string;
        codeRetourEchanges: string;
        dateCreationGroupe: string;
        dateModificationGroupe: string;
        eligibleFonctionApplicative: string;
        libelleHabilitation: string;
        localisationHabilitation: string;
        numeroOrdre: string;
        typeHabilitation: string;
        valeurInitialeHabilitation: string;
        valeurMinimaleHabilitation: string;
        valeurMaximaleHabilitation: string;
        codeEtablissement: string;
        codeTypeHabilitation: string;
        commentaireHabilitation: string;
        etat: Enum.EtatHabilitation;
        categorie: Enum.CategorieHabilitation;
        domaine: Modeles.Domaine;
        application: Modeles.Application;
        profilsAssocies: Array<Modeles.Profil>;
        ressourcesTssAttachees: Array<Modeles.RessourceTss>;
        affectationPersonnalise: Enum.Personnalisation;
    }
    class Habilitation implements IHabilitation {
        alphanumeriqueBanalise1: string;
        alphanumeriqueBanalise1A: string;
        alphanumeriqueBanalise1B: string;
        codeApplication: string;
        codeCategorieHabilitation: string;
        codeDomaine: string;
        codeEligibiliteFonctionApplicative: string;
        codeEtatHabilitation: string;
        codeForcabiliteHabilitation: string;
        codeGroupeHabilitation: string;
        codeHabilitation: string;
        codeLocalisationHabilitation: string;
        codeRetourEchanges: string;
        dateCreationGroupe: string;
        dateModificationGroupe: string;
        eligibleFonctionApplicative: string;
        libelleHabilitation: string;
        localisationHabilitation: string;
        numeroOrdre: string;
        typeHabilitation: string;
        valeurInitialeHabilitation: string;
        valeurMinimaleHabilitation: string;
        valeurMaximaleHabilitation: string;
        codeEtablissement: string;
        codeTypeHabilitation: string;
        commentaireHabilitation: string;
        etat: Enum.EtatHabilitation;
        categorie: Enum.CategorieHabilitation;
        domaine: Modeles.Domaine;
        application: Modeles.Application;
        profilsAssocies: Array<Modeles.Profil>;
        ressourcesTssAttachees: Array<Modeles.RessourceTss>;
        affectationPersonnalise: Enum.Personnalisation;
        constructor();
    }
}

declare module MonApplication.Modeles {
    interface IProfilDuFonction {
        codeProfilType: string;
        libelleProfilType: string;
        typeFonction: string;
        libelleFonction: string;
    }
    class ProfilDuFonction implements IProfilDuFonction {
        codeProfilType: string;
        libelleProfilType: string;
        typeFonction: string;
        libelleFonction: string;
        constructor();
    }
}

declare module MonApplication.Modeles {
    interface IProfil {
        codeProfilType: string;
        libelleProfilType: string;
        commentaireProfilType: string;
        dateCreation: string;
        dateModification: string;
        dateFinValidite: string;
        codeEtablissement: string;
        alphanumeriqueBanalise1: string;
        codeRetourEchanges: string;
        codeAgentPossedeProfil: string;
        codeDomaine: string;
        statutElement: Enum.StatutElement;
        demandesDuplicationPofil: Array<Modeles.DemandeDuplicationPofil>;
        domainesProfilType: Array<Modeles.Domaine>;
        groupesHabilitation: Array<Modeles.GroupeHabilitation>;
        habilitationsAffectees: Array<Modeles.Habilitation>;
        fonctionsAffectees: Array<Modeles.Fonction>;
        dateDebutValiditeProfilType: string;
        dateFinValiditeProfilType: string;
    }
    class Profil implements IProfil {
        codeProfilType: string;
        libelleProfilType: string;
        commentaireProfilType: string;
        dateCreation: string;
        dateModification: string;
        dateFinValidite: string;
        codeEtablissement: string;
        alphanumeriqueBanalise1: string;
        codeRetourEchanges: string;
        codeAgentPossedeProfil: string;
        codeDomaine: string;
        statutElement: Enum.StatutElement;
        demandesDuplicationPofil: Array<Modeles.DemandeDuplicationPofil>;
        domainesProfilType: Array<Modeles.Domaine>;
        groupesHabilitation: Array<Modeles.GroupeHabilitation>;
        habilitationsAffectees: Array<Modeles.Habilitation>;
        fonctionsAffectees: Array<Modeles.Fonction>;
        dateDebutValiditeProfilType: string;
        dateFinValiditeProfilType: string;
        constructor();
    }
}

declare module MonApplication.Modeles {
    interface IRessourceTss {
        typeRessource: string;
        codeRessource: string;
        typeAccesRessource: string;
        libelleRessource: string;
        facilityAssocieRessource: string;
        habilitationsAttachees: Array<Modeles.Habilitation>;
    }
    class RessourceTss implements IRessourceTss {
        typeRessource: string;
        codeRessource: string;
        typeAccesRessource: string;
        libelleRessource: string;
        facilityAssocieRessource: string;
        habilitationsAttachees: Array<Modeles.Habilitation>;
        constructor();
    }
}

declare module MonApplication.Modeles {
    interface ITypeRessource {
        codeTypeRessource: string;
        libelleTypeRessource: string;
    }
    class TypeRessource implements ITypeRessource {
        codeTypeRessource: string;
        libelleTypeRessource: string;
        constructor();
    }
}

declare module MonApplication {
    class FooterGestionHabilitationsControleur {
        private $scope;
        private $rootScope;
        private $location;
        private footerGestionHabilitationsService;
        static $inject: string[];
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        showResultatsHabilitations: boolean;
        autorisationListerAgents: boolean;
        autorisationListerProfils: boolean;
        autorisationAffecterRessourcesTss: boolean;
        btnFermerProcessusStyleCss: string;
        constructor($scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, footerGestionHabilitationsService: Service.FooterGestionHabilitationsService);
        voirListeProfils(): void;
        voirListeAgentsHabilitations(): void;
        voirRessourcesTSS(): void;
        private gestionDroits();
    }
}

declare module MonApplication {
    function GestionHabilitationsFooter(): ng.IDirective;
}

declare module MonApplication.Service {
    class FooterGestionHabilitationsService {
        private $q;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        private _autorisationListerAgents;
        private _autorisationListerProfils;
        private _autorisationAffecterRessourcesTss;
        constructor($q: ng.IQService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        initDroit(): ng.IPromise<Array<boolean>>;
    }
}

declare module MonApplication {
    class FooterGestionProfilsControleur {
        private $scope;
        private $rootScope;
        private $location;
        private footerGestionProfilsService;
        static $inject: string[];
        profilSelectionne: Modeles.Profil;
        autorisationCreerProfil: boolean;
        constructor($scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, footerGestionProfilsService: Service.FooterGestionProfilsService);
        creerProfil(): void;
    }
}

declare module MonApplication {
    function GestionProfilsFooter(): ng.IDirective;
}

declare module MonApplication.Service {
    class FooterGestionProfilsService {
        private $q;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        private _autorisationCreerProfil;
        constructor($q: ng.IQService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        initDroit(): ng.IPromise<boolean>;
    }
}

declare module MonApplication {
    class ProfilDetailFonctionsControleur {
        profilDetailFonctionsService: Service.ProfilDetailFonctionsService;
        private $scope;
        private servicePopup;
        static $inject: string[];
        private verificationDonneesProfil;
        tabFonctionsDisposActif: boolean;
        tabFonctionsAffecteesActif: boolean;
        enumVueProfilModification: Enum.VueProfil;
        constructor(profilDetailFonctionsService: Service.ProfilDetailFonctionsService, $scope: any, servicePopup: Service.ServicePopup);
        ajouterFonctionsDispos(): void;
        retirerFonctionsAffectees(): void;
    }
}

declare module MonApplication {
    function ProfilDetailFonctions(): ng.IDirective;
}

declare module MonApplication.Service {
    class ProfilDetailFonctionsService {
        profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees;
        private $q;
        private servicePopup;
        private fonctionService;
        private profilService;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        private _messageAjoutAssociationsFctsOk;
        private _messageAjoutAssociationsFctsPartiel;
        private _messageAjoutAssociationsFctsKo;
        private _messageSuppressionAssociationsFctsOk;
        private _messageSuppressionAssociationsFctsPartiel;
        private _messageSuppressionAssociationsFctsKo;
        private _fonctionsAll;
        private _fonctionsDispos;
        private _associationsFonctionsAuProfil;
        private _autorisationListerFonctions;
        private _autorisationAssociationFonction;
        tableauFonctionsDisponibles: MyWay.UI.ImwTableOptions;
        tableauFonctionsAffectees: MyWay.UI.ImwTableOptions;
        chargementFonctionsEnCours: boolean;
        autorisationListerFonctions: boolean;
        autorisationAssociationFonction: boolean;
        constructor(profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees, $q: ng.IQService, servicePopup: Service.ServicePopup, fonctionService: Service.FonctionService, profilService: Service.ProfilService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        chargerFonctions(): void;
        updateAffichageFonctions(): void;
        initFonctions(): ng.IPromise<boolean>;
        associerFonctions(dataFonctions: Array<Object>, action: Enum.ActionAssociation): ng.IPromise<boolean>;
        private initDroit();
        private verifFonctionEstAffectee(fonction);
        private associerFonction(fonction, action);
    }
}

declare module MonApplication {
    class ProfilDetailProprietesControleur {
        profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees;
        private $scope;
        private $location;
        private navigationService;
        private profilService;
        static $inject: string[];
        messageErreurLibelle: string;
        messageCreationProfil: string;
        showErreurLibelle: boolean;
        enumVueProfilCreation: Enum.VueProfil;
        enumVueProfilModification: Enum.VueProfil;
        autorisationModifierProfil: boolean;
        constructor(profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees, $scope: any, $location: ng.ILocationService, navigationService: MyWay.UI.INavigationService, profilService: Service.ProfilService);
        verifLibelleProfilType(): void;
        enregistrerProfil(): void;
    }
}

declare module MonApplication {
    function ProfilDetailProprietes(): ng.IDirective;
}

declare module MonApplication {
    class ProfilDetailHabilitationsControleur {
        private $scope;
        private $location;
        private $rootScope;
        private profilDetailHabilitationsService;
        private servicePopup;
        static $inject: string[];
        private verificationDonneesProfil;
        showResultatsHabilitationsAffectees: boolean;
        showResultatsHabilitationsDisponibles: boolean;
        constructor($scope: any, $location: ng.ILocationService, $rootScope: ng.IRootScopeService, profilDetailHabilitationsService: Service.ProfilDetailHabilitationsService, servicePopup: Service.ServicePopup);
        ajouterHabilitationsDispos(): void;
        retirerHabilitationsAffectees(): void;
    }
}

declare module MonApplication {
    function ProfilDetailHabilitations(): ng.IDirective;
}

declare module MonApplication.Service {
    class ProfilDetailHabilitationsService {
        profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees;
        private $q;
        private profilService;
        private habilitationService;
        private servicePopup;
        static $inject: string[];
        private _messageAjoutAssociationsHabsOk;
        private _messageAjoutAssociationsHabsPartiel;
        private _messageAjoutAssociationsHabsKo;
        private _messageSuppressionAssociationsHabsOk;
        private _messageSuppressionAssociationsHabsPartiel;
        private _messageSuppressionAssociationsHabsKo;
        habilitationsDispos: Array<Modeles.Habilitation>;
        tableauHabilitationsDisponibles: MyWay.UI.ImwTableOptions;
        tableauHabilitationsAffectees: MyWay.UI.ImwTableOptions;
        tabHabsDisposActif: boolean;
        tabHabsAffecteesActif: boolean;
        chargementHabilitationsEnCours: boolean;
        constructor(profilDetailServiceDonnees: Service.ProfilDetailServiceDonnees, $q: ng.IQService, profilService: Service.ProfilService, habilitationService: Service.HabilitationService, servicePopup: Service.ServicePopup);
        chargerHabilitations(nettoyerDispos: boolean, forcerVisibiliteAffectes: boolean): void;
        initHabilitationsDispos(): ng.IPromise<boolean>;
        gererAssocierHabilitations(dataHabilitations: Array<Object>, creationProfil: boolean, action?: Enum.ActionAffectationHabilitation): ng.IPromise<boolean>;
        private updateAffichageHabilitationsAffectees(nettoyerDispos);
        private getGroupesHabilitationsAffectees(avecHabilitations);
        private initHabilitationsAffecteesandDispos();
        private creerProfilAvecHabilitations(habilitationsOrdonneesAAffecter, listCles);
        private modifierAssociationHabilitations(habilitationsOrdonneesAAffecter, listCles, action);
        private verificationEtAdapatationProfil(listeClesGroupesAAjouter);
        private verificationApplicationsProfil(listeClesGroupesAAjouter);
        private associerHabilitations(habilitationsOrdonneesAAffecter, listCles, action);
        private gererAssocierHabilitationsForGroupe(listHabilitationsAAffecter, action, vecteurGroupe, indexHabilitationTraitee);
        private associerHabilitation(habilitation, action, vecteurGroupe);
        private getGoupeHabilitationOfProfilByhabilitation(cleGroupeRecherche);
    }
}

declare module MonApplication {
    class FooterSuiviRessourcesTssControleur {
        private $scope;
        private $rootScope;
        private $location;
        private serviceHabilitationsUtilisateur;
        static $inject: string[];
        tableauRessourcesTss: MyWay.UI.ImwTableOptions;
        showResultatsRessourcesTss: boolean;
        autorisationListerHabilitations: boolean;
        constructor($scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, serviceHabilitationsUtilisateur: HabilitationsUtilisateur.ServiceHabilitationsUtilisateur);
        voirHabilitations(): void;
    }
}

declare module MonApplication {
    function SuiviRessourcesTssFooter(): ng.IDirective;
}

declare module MonApplication {
    interface IModalHabilitationDetailControleurScope extends ng.IScope {
        viewModalHabilitationDetailCtrl: IModalHabilitationDetailControleur;
    }
    interface IModalHabilitationDetailControleur {
        modalDatas: any;
        habilitationCourante: Modeles.Habilitation;
        contexteMetier: Enum.ContexteMetier;
        tableauDonnees: MyWay.UI.ImwTableOptions;
        ok(): void;
        close(): void;
    }
    class ModalHabilitationDetailControleur implements IModalHabilitationDetailControleur {
        private $scope;
        private $modalInstance;
        private modalHabilitationDetailService;
        static $inject: string[];
        modalDatas: any;
        habilitationCourante: Modeles.Habilitation;
        contexteMetier: Enum.ContexteMetier;
        tableauDonnees: MyWay.UI.ImwTableOptions;
        chargementEnCours: boolean;
        constructor($scope: IModalHabilitationDetailControleurScope, $modalInstance: any, data: any, $modal: any, modalHabilitationDetailService: Service.ModalHabilitationDetailService);
        ok(): void;
        close(): void;
    }
}

declare module MonApplication.Service {
    class ModalHabilitationDetailService {
        private $q;
        private profilService;
        private agentService;
        static $inject: string[];
        constructor($q: ng.IQService, profilService: Service.ProfilService, agentService: Service.AgentService);
        getProfilsAssociesByHabilitation(habilitationSelectionne: Modeles.Habilitation): ng.IPromise<Array<Modeles.Profil>>;
        getAgentsAssociesByHabilitation(habilitationSelectionne: Modeles.Habilitation): ng.IPromise<Array<Modeles.Agent>>;
    }
}

declare module MonApplication.HabilitationsUtilisateur {
    interface IModalErreurRecuperationControleurScope extends ng.IScope {
        viewModalErreurRecupCtrl: IModalErreurRecuperationControleur;
    }
    interface IModalErreurRecuperationControleur {
        modalDatas: any;
        close(): void;
    }
    class ModalErreurRecuperationControleur implements IModalErreurRecuperationControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        dataHabilitationsUtilisateur: Array<Habilitation>;
        codeErreur: string;
        libelleErreur: string;
        constructor($scope: IModalErreurRecuperationControleurScope, $modalInstance: any, data: any, $modal: any);
        close(): void;
    }
}

declare module MonApplication.HabilitationsUtilisateur {
    interface IIModalHabilitationBloquanteControleurScope extends ng.IScope {
        viewHabBloquanteCtrl: IModalHabilitationBloquanteControleur;
    }
    interface IModalHabilitationBloquanteControleur {
        modalDatas: any;
        close(): void;
    }
    class ModalHabilitationBloquanteControleur implements IModalHabilitationBloquanteControleur {
        private $scope;
        private $modalInstance;
        static $inject: string[];
        modalDatas: any;
        habilitationBloquante: Habilitation;
        codeErreur: string;
        libelleErreur: string;
        constructor($scope: IIModalHabilitationBloquanteControleurScope, $modalInstance: any, data: any, $modal: any);
        close(): void;
    }
}

declare module MonApplication.Service {
    interface IMonService {
        consommerServiceRecuperation: (urlService: string, messageErreur: string, fonctionReussite: any) => ng.IPromise<any>;
        consommerServiceRecuperationAvecErreur: (urlService: string, messageErreur: string, codeErreurNormale: number, fonctionReussite: any) => ng.IPromise<any>;
        consommerServiceAction: (urlService: string, methodeService: MyWay.Services.MethodEnum, dataParams: any, messageInfo: string, messageErreur: string, messageInfoActif: boolean, fonctionReussite?: any) => ng.IPromise<any>;
        consommerServiceSuppression: (urlService: string, messageInfo: string, messageErreur: string, messageInfoActif: boolean) => ng.IPromise<any>;
        gestionErreur: (erreur: Object, message: string) => void;
    }
    class MonService implements IMonService {
        private serviceAgentExtended;
        private servicePopup;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, servicePopup: Service.ServicePopup);
        consommerServiceRecuperation(urlService: string, messageErreur: string, fonctionReussite: any): ng.IPromise<any>;
        consommerServiceRecuperationAvecErreur(urlService: string, messageErreur: string, codeErreurNormale: number, fonctionReussite: any): ng.IPromise<any>;
        consommerServiceAction(urlService: string, methodeService: MyWay.Services.MethodEnum, dataParams: any, messageInfo: string, messageErreur: string, messageInfoActif: boolean, fonctionReussite?: any): ng.IPromise<any>;
        consommerServiceSuppression(urlService: string, messageInfo: string, messageErreur: string, messageInfoActif: boolean): ng.IPromise<any>;
        gestionErreur(erreurCentral: Object, message: string): void;
    }
}

declare module MonApplication.Service {
    class ServiceControleChaine {
        constructor();
        static verifLongueurMinimum(chaineSaisie: string): boolean;
        static rechercheTermeDansChaine(terme: string, chaine: string): boolean;
        static formateChainePourRecherche(chaine: string): string;
        static replaceCaractere(chaine: string, caractere: string, index: number): string;
    }
}

declare module MonApplication.Service {
    class ServiceDate {
        constructor();
        static formatDateBrutServiceToIHM(chaine: string): string;
        static formatDateCentralToIHM(chaine: string): string;
        static formatDateIHMToCentral(chaine: string): any;
        static formatDateIhmToInputDate(chaine: string): string;
        static formatDateInputDateToIhm(chaineDate: string): string;
        static verifierDateCommune(listeDates: Array<string>): any;
        static ajouterJours(d: Date, nbJours: number): Date;
        static getDateDuJour(): Date;
        static getLibelleMomentActuel(): string;
        static getLibelleDate(dateTraitee: Date): string;
        static formatageDateCorrectionBugComposant(dateACorriger: Date): Date;
    }
}

declare module MonApplication.Service {
    class ServicePopup {
        private modalService;
        private mwNotificationService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, mwNotificationService: MyWay.UI.IMwNotificationService);
        informerUtilisateur(body: string): void;
        informerUtilisateurErreur(body: string): void;
        genererModalAffectation(titre: string, texte: string, dataParams: Array<Object>, fonctionReussite: any): void;
        informerUtilisateurErreurCentral(messageInformation: string, codeErreurCentral: string, libelleErreurCentral: string): void;
        avertirUtilisateurRechercheImpossible(titre: string): void;
        avertirUtilisateurAffinerRecherche(titre: string, nbResultats: number): void;
        private informerUtilisateurErreurRecherche(titre, texte);
        /**
         *   Gère la notification affichée à l'utilisateur (pas au sein d'une popup)
         */
        notifierUtilisateur(etatsRetour: Array<boolean>, messageOk: string, messageReussitePartielle: string, messageErreur: string): boolean;
    }
}

declare module MonApplication.Service {
    class ServiceTableOptions {
        constructor();
        static colonnesHabilitationsVueSimple: {
            title: string;
            bind: string;
            cssClass: string;
        }[];
        static colonnesHabilitationsVueComplete: {
            title: string;
            bind: string;
            cssClass: string;
        }[];
        static colonnesHabilitationsVueDetaillee: {
            title: string;
            bind: string;
            cssClass: string;
        }[];
        static colonnesHabilitationsVueReferentiel: {
            title: string;
            bind: string;
            cssClass: string;
        }[];
        static colonnesHabilitationsVueProfilComplet: {
            title: string;
            bind: string;
            cssClass: string;
        }[];
        static initTableauHabilitationsVue(nbElements: number, colonnes: Array<MyWay.UI.ImwTableColumnOptions>): MyWay.UI.ImwTableOptions;
        static initTableauHabilitationsSelect(nbElements: number, colonnesVueComplete: boolean, avecDetail: boolean): MyWay.UI.ImwTableOptions;
        static initTableauProfilsPersonnalises(): MyWay.UI.ImwTableOptions;
        static initTableauProfils(largeur: string, nbElets: number, multiSelected: boolean, avecCode?: boolean): MyWay.UI.ImwTableOptions;
        static initTableauProfilsFonctions(largeur: string, nbElets: number, multiSelected: boolean, avecCode: boolean): MyWay.UI.ImwTableOptions;
        static initTableauFonctions(multiSelection: boolean): MyWay.UI.ImwTableOptions;
        static initTableauAgentsForProfil(): MyWay.UI.ImwTableOptions;
        static initTableauAgentsForHabilitation(nbElement: number): MyWay.UI.ImwTableOptions;
        static initTableauSuiviRessourcesTss(): MyWay.UI.ImwTableOptions;
        static initTableauRessourcesTss(): MyWay.UI.ImwTableOptions;
        static resetTableOptions(myTab: MyWay.UI.ImwTableOptions): void;
        static majTableaux(tabDonneesARetirer: MyWay.UI.ImwTableOptions, resetTabDonneesARetirer: boolean, tabDonneesAAjouter?: MyWay.UI.ImwTableOptions): void;
        static nettoyerTableauAvecSelection(dataAll: Array<Object>, dataASupprimer: Array<Object>): void;
        static getContenuAutorise(listeObjets: Array<Object>): Array<Object>;
    }
}

declare module MonApplication.Service {
    interface IAgentService {
        getAgentsByProfil: (codeProfil: string) => ng.IPromise<Array<Modeles.Agent>>;
        getAgentsByHabilitation: (habilitation: Modeles.Habilitation) => ng.IPromise<Array<Modeles.Agent>>;
        getPersonnalisationAgent: (agent: Modeles.Agent) => ng.IPromise<Modeles.Agent>;
        getProfilsDusFonction: (agent: Modeles.Agent) => ng.IPromise<Array<Modeles.ProfilDuFonction>>;
        gererPersonnalisationAgentProfil: (typeAssociation: Enum.ActionAssociation, identifiantAgent: string, codeProfil: string, dateDebutValidite: string, dateFinValidite: string) => ng.IPromise<boolean>;
        supprimerPersonnalisationAgentProfil: (identifiantAgent: string, codeProfil: string, dateDebutValidite: string, dateFinValidite: string, messageInfoActif: boolean) => ng.IPromise<boolean>;
        gererPersonnalisationAgentHabilitation: (typeAssociation: Enum.ActionAssociation, identifiantAgent: string, listGroupeHabilitation: Array<Modeles.GroupeHabilitation>) => ng.IPromise<boolean>;
        getCompetencesAgents: (agent: Modeles.Agent) => ng.IPromise<Modeles.Agent>;
        getSyntheseHabilitationsAgent: (identifiantAgent: string, codeFonction: string, application: Modeles.Application, inclureErreur: boolean) => ng.IPromise<Array<Modeles.GroupeHabilitation>>;
        convertirDataAgentToAgent: (agentCourant: Modeles.Agent, agentData: Object, agentCentral: boolean) => Modeles.Agent;
    }
    class AgentService implements IAgentService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        private profilService;
        private domaineService;
        private applicationService;
        static $inject: string[];
        private _urlAgent;
        private _urlPersonnalisationProfilAgent;
        private _urlPersonnalisationHabilitationAgent;
        private _urlAgentPersonnalisation;
        private _urlProfilsDusFonction;
        private _urlCompentencesAgent;
        private _urlSyntheseHabilitationsAgent;
        private _aiguilleur;
        private _codeActionCompetencesAgents;
        private _codeActionSyntheseHabilitationsAgent;
        private _typeRechercheParProfil;
        private _typeRechercheParHabilitation;
        private _erreurGetAgentsByHabilitation;
        private _erreurGetAgentsByProfil;
        private _infoModifierAgentPersonnalise;
        private _erreurModifierAgentPersonnalise;
        private _infoSupprimerAgentPersonnalise;
        private _erreurSupprimerAgentPersonnalise;
        private _erreurGetPersonalisationAgent;
        private _erreurGetCompetencesAgent;
        private _erreurGetHabilitationsPersonnalisees;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService, profilService: Service.ProfilService, domaineService: Service.DomaineService, applicationService: Service.ApplicationService);
        getAgentsByProfil(codeProfil: string): ng.IPromise<Array<Modeles.Agent>>;
        getAgentsByHabilitation(habilitation: Modeles.Habilitation): ng.IPromise<Array<Modeles.Agent>>;
        getPersonnalisationAgent(agent: Modeles.Agent): ng.IPromise<Modeles.Agent>;
        getProfilsDusFonction(agent: Modeles.Agent): ng.IPromise<Array<Modeles.ProfilDuFonction>>;
        gererPersonnalisationAgentProfil(typeAssociation: Enum.ActionAssociation, identifiantAgent: string, codeProfil: string, dateDebutValidite: string, dateFinValidite: string): ng.IPromise<boolean>;
        supprimerPersonnalisationAgentProfil(identifiantAgent: string, codeProfil: string, dateDebutValidite: string, dateFinValidite: string, messageInfoActif: boolean): ng.IPromise<boolean>;
        gererPersonnalisationAgentHabilitation(typeAssociation: Enum.ActionAssociation, identifiantAgent: string, listGroupeHabilitation: Array<Modeles.GroupeHabilitation>): ng.IPromise<boolean>;
        getCompetencesAgents(agent: Modeles.Agent): ng.IPromise<Modeles.Agent>;
        getSyntheseHabilitationsAgent(identifiantAgent: string, codeFonction: string, application: Modeles.Application, inclureErreur: boolean): ng.IPromise<Array<Modeles.GroupeHabilitation>>;
        convertirDataAgentToAgent(agentCourant: Modeles.Agent, agentData: Object, agentCentral: boolean, contexteMetier?: Enum.ContexteMetier): Modeles.Agent;
        private rechercherAgents(promiseUrl, messageErreur, contexteMetier);
        private genererBodyPersonnalisationAgentHabilitation(identifiantAgent, listGroupeHabilitation, codeEtablissement, typeFonction);
        private convertirDataGroupeHabilitationToGroupeHabilitation(groupeHabData);
    }
}

declare module MonApplication.Service {
    interface IApplicationService {
        getApplications: () => ng.IPromise<Array<Modeles.Application>>;
        getApplicationByCode: (codeApplicationRecherche: string) => Modeles.Application;
        getApplicationByCodeAndAffecteHabilitation: (habilitation: Modeles.Habilitation) => Modeles.Application;
    }
    class ApplicationService implements IApplicationService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        static $inject: string[];
        private _applicationsAll;
        private _applicationsAllSansHabs;
        private _urlApplications;
        private _erreurGetListeApplications;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        getApplications(): ng.IPromise<Array<Modeles.Application>>;
        getApplicationByCode(codeApplicationRecherche: string): Modeles.Application;
        getApplicationByCodeAndAffecteHabilitation(habilitation: Modeles.Habilitation): Modeles.Application;
        private triCroissant(application);
    }
}

declare module MonApplication.Service {
    interface IAuthentificationService {
        getContext: () => ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
    }
    class AuthentificationService implements IAuthentificationService {
        private $q;
        private serviceAgentExtended;
        private monService;
        static $inject: string[];
        private _infos;
        private _erreurGetInfos;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, monService: Service.MonService);
        getContext(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
    }
}

declare module MonApplication.Service {
    interface IDomaineService {
        getDomaines: () => ng.IPromise<Array<Modeles.Domaine>>;
        getDomaineByCode: (codeDomaineRecherche: string) => Modeles.Domaine;
    }
    class DomaineService implements IDomaineService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        static $inject: string[];
        /**
         * Données
         */
        private _domainesAll;
        private _urlDomaine;
        private _erreurGetListeDomaines;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        /**
         * Accesseurs
         */
        getDomaines(): ng.IPromise<Array<Modeles.Domaine>>;
        getDomaineByCode(codeDomaineRecherche: string): Modeles.Domaine;
        private triCroissant(domaine);
    }
}

declare module MonApplication.Service {
    interface IFonctionService {
        getFonctions: () => ng.IPromise<Array<Modeles.Fonction>>;
        getFonctionByCode: (fonctions: Array<Modeles.Fonction>, codeFonction: string) => Modeles.Fonction;
        getAssociationsFonctionsByProfil: (profil: Modeles.Profil) => ng.IPromise<Array<Modeles.Fonction>>;
    }
    class FonctionService implements IFonctionService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        static $inject: string[];
        private _urlFonction;
        private _urlListeFonctions;
        private _typeInterrogation;
        private _erreurGetFonctions;
        private _erreurGetAssociationsProfil;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        getFonctions(): ng.IPromise<Array<Modeles.Fonction>>;
        getFonctionByCode(fonctions: Array<Modeles.Fonction>, codeFonction: string): Modeles.Fonction;
        getAssociationsFonctionsByProfil(profil: Modeles.Profil): ng.IPromise<Array<Object>>;
        private creerFiltresFonctions(code, libelle);
        private convertirObjetDelocaliseToFonction(data);
        private convertFonctionCentralToFonctionIHM(data, pCodeEtablissement);
        private triCroissant(fonction);
    }
}

declare module MonApplication.Service {
    interface IHabilitationService {
        getAllHabilitationsBrut: () => ng.IPromise<Array<Modeles.Habilitation>>;
        getAllHabilitationsOrdonnees: () => ng.IPromise<{
            [key: string]: Array<Modeles.Habilitation>;
        }>;
        getHabilitationsFiltrees: (code: string, libelle: string, habilitationsSourceRecherche: Array<Modeles.Habilitation>) => ng.IPromise<Array<Modeles.Habilitation>>;
        getDetailHabilitation: (habilitation: Modeles.Habilitation) => ng.IPromise<Modeles.Habilitation>;
        getHabilitationAffectees: (listGroupeHabilitation: Array<Modeles.GroupeHabilitation>, gererPerso: boolean) => ng.IPromise<Array<Modeles.Habilitation>>;
        setVecteur: (vecteur: string, habilitation: Modeles.Habilitation, action: Enum.ActionAffectationHabilitation) => string;
        getGroupeHabilitationAvecVecteursHabilitationByApplication: (application: Modeles.Application) => Array<Modeles.GroupeHabilitation>;
        convertirDataHabilitationToHabilitation(habCurrent: Modeles.Habilitation, habData: Object, habilitationCentral: boolean): Modeles.Habilitation;
        getCleHabilitationByHabilitation: (habilitation: Modeles.Habilitation) => string;
        getCleHabilitationByGroupe: (groupeHabilitation: Modeles.GroupeHabilitation) => string;
        getHabilitationsDispos: (habilitationsAffectees: Array<Modeles.Habilitation>) => ng.IPromise<Array<Modeles.Habilitation>>;
        erreurCorrespondanceVecteurHabilitation: (cleGroupe: string, vecteurHabilitation: string, listHabilitations: Array<Modeles.Habilitation>) => boolean;
    }
    class HabilitationService implements IHabilitationService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        private domaineService;
        private applicationService;
        static $inject: string[];
        private _habilitationsAll;
        private _habilitationsAllMap;
        private _urlReferentielHabilitation;
        private _urlHabilitationDetail;
        private _erreurGetToutesHabilitations;
        private _erreurGetDetailHabilitation;
        private _erreurCorrespondanceCleGroupeHabsCentralVsIHM;
        private _erreurCorrespondanceHabsCentralVsIHM;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService, domaineService: Service.DomaineService, applicationService: Service.ApplicationService);
        getAllHabilitationsBrut(): ng.IPromise<Array<Modeles.Habilitation>>;
        getAllHabilitationsOrdonnees(): ng.IPromise<{
            [key: string]: Array<Modeles.Habilitation>;
        }>;
        getHabilitationsFiltrees(code: string, libelle: string, habilitationsSourceRecherche: Array<Modeles.Habilitation>): ng.IPromise<Array<Modeles.Habilitation>>;
        getDetailHabilitation(habilitation: Modeles.Habilitation): ng.IPromise<Modeles.Habilitation>;
        getHabilitationAffectees(listGroupeHabilitation: Array<Modeles.GroupeHabilitation>, gererPerso: boolean): ng.IPromise<Array<Modeles.Habilitation>>;
        setVecteur(vecteur: string, habilitation: Modeles.Habilitation, action: Enum.ActionAffectationHabilitation): string;
        getGroupeHabilitationAvecVecteursHabilitationByApplication(application: Modeles.Application): Array<Modeles.GroupeHabilitation>;
        convertirDataHabilitationToHabilitation(habCurrent: Modeles.Habilitation, habData: Object, habilitationCentral: boolean): Modeles.Habilitation;
        getCleHabilitationByHabilitation(habilitation: Modeles.Habilitation): string;
        getCleHabilitationByGroupe(groupeHabilitation: Modeles.GroupeHabilitation): string;
        getHabilitationsDispos(habilitationsAffectees: Array<Modeles.Habilitation>): ng.IPromise<Array<Modeles.Habilitation>>;
        erreurCorrespondanceVecteurHabilitation(cleGroupe: string, vecteurHabilitation: string, listHabilitations: Array<Modeles.Habilitation>): boolean;
        private getAllHabilitations();
        private filterHabilitations(code, libelle, sourceRechercheHabilitations);
        private traitementHabilitationsVecteur(cleGroupe, vecteurHabilitation, listHabilitations);
        private setHabilitationsPersonnalisees(listHabilitations, perso);
    }
}

declare module MonApplication.Service {
    interface IProfilDemandeDuplicationService {
        getDemandesDuplicationProfil: (profil: Modeles.Profil) => ng.IPromise<Array<Modeles.DemandeDuplicationPofil>>;
        getCommentaireDemandeDuplicationProfil: (codeProfil: string, timestampCreation: string) => ng.IPromise<string>;
        creerDemandeDuplicationProfil: (demande: Modeles.DemandeDuplicationPofil) => ng.IPromise<Modeles.DemandeDuplicationPofil>;
        enregistrerDemandeDuplicationProfil: (demande: Modeles.DemandeDuplicationPofil) => ng.IPromise<Modeles.DemandeDuplicationPofil>;
        supprimerDemandeDuplicationProfil: (demande: Modeles.DemandeDuplicationPofil) => ng.IPromise<any>;
        convertirDataDemandeToDemandeDuplicationPofil: (demandeCourante: Modeles.DemandeDuplicationPofil, demandeData: Object, demandeCentral: boolean) => Modeles.DemandeDuplicationPofil;
    }
    class ProfilDemandeDuplicationService implements IProfilDemandeDuplicationService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        static $inject: string[];
        private _urlDuplication;
        private _erreurGetDemandes;
        private _erreurGetDetail;
        private _infoCreerDemande;
        private _erreurCreerDemande;
        private _infoModifierDemande;
        private _erreurModifierDemande;
        private _infoSupprimerDemande;
        private _erreurSupprimerDemande;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        getDemandesDuplicationProfil(profil: Modeles.Profil): ng.IPromise<Array<Modeles.DemandeDuplicationPofil>>;
        getCommentaireDemandeDuplicationProfil(codeProfil: string, timestampCreation: string): ng.IPromise<string>;
        creerDemandeDuplicationProfil(demande: Modeles.DemandeDuplicationPofil): ng.IPromise<Modeles.DemandeDuplicationPofil>;
        enregistrerDemandeDuplicationProfil(demande: Modeles.DemandeDuplicationPofil): ng.IPromise<Modeles.DemandeDuplicationPofil>;
        supprimerDemandeDuplicationProfil(demande: Modeles.DemandeDuplicationPofil): ng.IPromise<any>;
        convertirDataDemandeToDemandeDuplicationPofil(demandeCourante: Modeles.DemandeDuplicationPofil, demandeData: Object, demandeCentral: boolean): Modeles.DemandeDuplicationPofil;
        private convertCommentaireCentralToIHM(objetCHSW73);
        private convertCommentaireIHMToCentral(demande, objetCHSW74);
    }
}

declare module MonApplication.Service {
    interface IProfilService {
        getProfils: () => ng.IPromise<Array<Modeles.Profil>>;
        getProfilDetail: (profil: Modeles.Profil) => ng.IPromise<Modeles.Profil>;
        enregistrerProfil: (profil: Modeles.Profil, applications?: Array<Modeles.Application>) => ng.IPromise<Modeles.Profil>;
        creerProfil: (profil: Modeles.Profil, applications: Array<Modeles.Application>) => ng.IPromise<Modeles.Profil>;
        supprimerProfil: (profil: Modeles.Profil) => ng.IPromise<boolean>;
        gererAssociationFonctionProfil: (profil: Modeles.Profil, fonction: Modeles.Fonction, action: Enum.ActionAssociation) => ng.IPromise<boolean>;
        getGroupesHabilitationsAffecteesAvecVecteur: (profil: Modeles.Profil) => ng.IPromise<Array<Modeles.GroupeHabilitation>>;
        gererAffectationHabilitationProfil: (profil: Modeles.Profil, habilitation: Modeles.Habilitation, action: Enum.ActionAffectationHabilitation, vecteur: string) => ng.IPromise<any>;
        getProfilsAssociesByFonction: (fonction: Modeles.Fonction) => ng.IPromise<Array<Modeles.Profil>>;
        getProfilsAssociesByHabilitation: (habilitation: Modeles.Habilitation) => ng.IPromise<Array<Modeles.Profil>>;
        convertProfilCentralToProfilIHM: (profilCourant: Modeles.Profil, profilData: Object, profilCentral: boolean) => Modeles.Profil;
    }
    class ProfilService implements IProfilService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        static $inject: string[];
        private _urlProfil;
        private _urlListeProfil;
        private _aiguilleurGetListeProfils;
        private _aiguilleurProfilsAssociesByHabilitation;
        private _aiguilleurGetGroupesHabilitationsAffecteesForOnlyDomaine;
        private _aiguilleurProfilsAssociesByFonction;
        private _valeurInitialeProfilsAssociesByHabilitation;
        private _codeActionProfilsAssociesByFonction;
        private _erreurGetListeProfils;
        private _erreurGetDetailProfil;
        private _infoCreationProfil;
        private _erreurCreationProfil;
        private _infoModifierProfil;
        private _erreurModifierProfil;
        private _infoSupprimerProfil;
        private _erreurSupprimerProfil;
        private _infoAssocierFonctions;
        private _erreurAssocierFonctions;
        private _infoAssocierHabilitation;
        private _erreurAssocierHabilitation;
        private _erreurGetProfilsAssociesByFonction;
        private _erreurGetProfilsAssociesByHabilitation;
        private _erreurGetHabilitationsAffecteesParDomaine;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        getProfils(): ng.IPromise<Array<Modeles.Profil>>;
        getProfilDetail(profil: Modeles.Profil): ng.IPromise<Modeles.Profil>;
        creerProfil(profil: Modeles.Profil, applications: Array<Modeles.Application>): ng.IPromise<Modeles.Profil>;
        enregistrerProfil(profil: Modeles.Profil, applications?: Array<Modeles.Application>): ng.IPromise<Modeles.Profil>;
        supprimerProfil(profil: Modeles.Profil): ng.IPromise<boolean>;
        gererAssociationFonctionProfil(profil: Modeles.Profil, fonction: Modeles.Fonction, action: Enum.ActionAssociation): ng.IPromise<boolean>;
        getGroupesHabilitationsAffecteesAvecVecteur(profil: Modeles.Profil): ng.IPromise<Array<Modeles.GroupeHabilitation>>;
        gererAffectationHabilitationProfil(profil: Modeles.Profil, habilitation: Modeles.Habilitation, action: Enum.ActionAffectationHabilitation, vecteur: string): ng.IPromise<any>;
        getProfilsAssociesByFonction(fonction: Modeles.Fonction): ng.IPromise<Array<Modeles.Profil>>;
        getProfilsAssociesByHabilitation(habilitation: Modeles.Habilitation): ng.IPromise<Array<Modeles.Profil>>;
        convertProfilCentralToProfilIHM(profilCourant: Modeles.Profil, profilData: Object, profilCentral: boolean): Modeles.Profil;
        private getGroupesHabilitationsAffecteesForOnlyDomaine(codeProfil, codeDomaine);
        private gererApplicationsProfilExisant(applications, typeFonction, codeEtablissement, codeProfil);
        private gererApplicationsProfilNouveau(applications, typeFonction, codeEtablissement);
        private triCroissant(profil);
    }
}

declare module MonApplication.Service {
    interface IRessourceTssService {
        getRessourcesTss: () => ng.IPromise<Array<Modeles.RessourceTss>>;
        getRessourcesTssFiltrees: (code: string, libelle: string, sourceRechercheHabilitations: Array<Modeles.RessourceTss>) => ng.IPromise<Array<Modeles.RessourceTss>>;
        getHabilitationsAttacheesByRessourceTss: (ressourceTss: Modeles.RessourceTss) => ng.IPromise<Array<Modeles.Habilitation>>;
        getRessourceTssLiesByHabilitation: (habilitation: Modeles.Habilitation) => ng.IPromise<Array<Modeles.RessourceTss>>;
        gererAssociationRessourceTssHabilitation: (ressourceTss: Modeles.RessourceTss, habilitation: Modeles.Habilitation, action: Enum.ActionAssociation) => ng.IPromise<any>;
    }
    class RessourceTssService implements IRessourceTssService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        private domaineService;
        private applicationService;
        static $inject: string[];
        private _ressourcesTss;
        private _actionGetRessourceTssLiesByHabilitation;
        private _actionGetHabilitationsAttacheesByRessourceTss;
        private _urlRessourcesTss;
        private _urlListeRessourcesTss;
        private _urlAffectationHabilitationRessourcesTss;
        private _erreurGetRessourcesTss;
        private _erreurGetRessourceTssLiesByHabilitation;
        private _erreurGetHabilitationsAttacheesByRessourceTss;
        private _infoAssocierHabilitation;
        private _erreurAssocierHabilitation;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService, domaineService: Service.DomaineService, applicationService: Service.ApplicationService);
        getRessourcesTss(): ng.IPromise<Array<Modeles.RessourceTss>>;
        getRessourcesTssFiltrees(code: string, libelle: string, sourceRechercheRessourcesTss: Array<Modeles.RessourceTss>): ng.IPromise<Array<Modeles.RessourceTss>>;
        getRessourceTssLiesByHabilitation(habilitation: Modeles.Habilitation): ng.IPromise<Array<Modeles.RessourceTss>>;
        getHabilitationsAttacheesByRessourceTss(ressourceTss: Modeles.RessourceTss): ng.IPromise<any>;
        gererAssociationRessourceTssHabilitation(ressourceTss: Modeles.RessourceTss, habilitation: Modeles.Habilitation, action: Enum.ActionAssociation): ng.IPromise<any>;
        private filterRessourcesTss(code, libelle, sourceRechercheRessources);
        private triCroissant(ressourceTss);
    }
}

declare module MonApplication.Service {
    interface ITypeRessourceService {
        getTypesRessource: () => ng.IPromise<Array<Modeles.TypeRessource>>;
        getTypeRessourceByCode: (codeTypeRessourceRecherche: string) => Modeles.TypeRessource;
    }
    class TypeRessourceService implements ITypeRessourceService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        static $inject: string[];
        private _typesRessourceAll;
        private _urlTypeRessource;
        private _erreurGetListeTypeRessources;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        getTypesRessource(): ng.IPromise<Array<Modeles.TypeRessource>>;
        getTypeRessourceByCode(codeTypeRessourceRecherche: string): Modeles.TypeRessource;
    }
}
