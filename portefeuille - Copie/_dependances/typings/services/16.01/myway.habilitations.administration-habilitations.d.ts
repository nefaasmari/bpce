
declare module MonApplication {
    var app: any;
}

declare module MonApplication {
    class AgentPersonnalisationControleur {
        private agentPersoService;
        private modalService;
        private $location;
        private $rootScope;
        private profilService;
        private habilitationService;
        private servicePopup;
        static $inject: string[];
        pageTitre: string;
        agentCourant: Modeles.Agent;
        showResultatsHabilitationsDisponibles: boolean;
        tableauHabilitationsDisponibles: MyWay.UI.ImwTableOptions;
        tableauHabilitationsAffectees: MyWay.UI.ImwTableOptions;
        tableauProfilsDisponibles: MyWay.UI.ImwTableOptions;
        tableauProfilsAffectes: MyWay.UI.ImwTableOptions;
        tableauProfilsDusAuxFonctions: MyWay.UI.ImwTableOptions;
        contexteMetierHab: Enum.ContexteMetier;
        contexteMetierProfil: Enum.ContexteMetier;
        constructor(agentPersoService: Service.AgentPersonnalisationService, modalService: MyWay.UI.IModalService, $location: ng.ILocationService, $rootScope: ng.IRootScopeService, profilService: Service.ProfilService, habilitationService: Service.HabilitationService, servicePopup: Service.ServicePopup);
        private initDonnees();
        private updateTableauProfilsAffectes();
    }
}

declare module MonApplication.Service {
    class AgentPersonnalisationService {
        private $q;
        private agentService;
        private profilService;
        private habilitationService;
        private fonctionService;
        private mwNotificationService;
        static $inject: string[];
        agentCourant: Modeles.Agent;
        profilsDispos: Array<Modeles.Profil>;
        habilitationsDispos: Array<Modeles.Habilitation>;
        constructor($q: ng.IQService, agentService: Service.AgentService, profilService: Service.ProfilService, habilitationService: Service.HabilitationService, fonctionService: Service.FonctionService, mwNotificationService: MyWay.UI.IMwNotificationService);
        InitAgent(): ng.IPromise<boolean>;
        private getAssociationsPersonnaliseesAgent();
    }
}

declare module MonApplication {
    class AgentProfilCompletControleur {
        private $rootScope;
        private fonctionService;
        private habilitationService;
        static $inject: string[];
        pageTitre: string;
        agentCourant: Modeles.Agent;
        listeFonctions: Array<Modeles.Fonction>;
        fonctionSelectionne: Modeles.Fonction;
        showHabilitations: boolean;
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        constructor($rootScope: ng.IRootScopeService, fonctionService: Service.FonctionService, habilitationService: Service.HabilitationService);
        updateFonctionSelectionne(): void;
        private initDonnees();
        private updateTableauHabilitations();
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
        static $inject: string[];
        habilitations: Array<Modeles.Habilitation>;
        descenteEffectuee: boolean;
        constructor($q: ng.IQService, habilitationService: Service.HabilitationService, domaineService: Service.DomaineService, applicationService: Service.ApplicationService);
        getHabilitationsModifiees(dateRecherche: Date): ng.IPromise<Array<Modeles.Habilitation>>;
        private initReferentiel();
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
        private _profilsAssocies;
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
    class AgentsControleur {
        gestionAgentsService: Service.GestionAgentsService;
        private footerService;
        private $scope;
        private $rootScope;
        private $location;
        private agentService;
        static $inject: string[];
        constructor(gestionAgentsService: Service.GestionAgentsService, footerService: Service.FooterService, $scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, agentService: Service.AgentService);
        voirProfilCompletAgent(): void;
        personnaliserAgent(): void;
        private convertirAgentRechercheToAgent();
    }
}

declare module MonApplication.Service {
    class GestionAgentsService {
        agentRecherche: any;
        agentSelectionne: Modeles.Agent;
        constructor();
    }
}

declare module MonApplication {
    class FonctionsControleur {
        gestionFonctionsService: Service.GestionFonctionsService;
        private footerService;
        private serviceNavigation;
        private $location;
        private $rootScope;
        private fonctionService;
        private profilService;
        static $inject: string[];
        listeFonctions: Array<Modeles.Fonction>;
        tableauProfilsAffectes: MyWay.UI.ImwTableOptions;
        ouverturePanneauInfos: boolean;
        chargementProfilsOk: boolean;
        chargementInfosEnCours: boolean;
        constructor(gestionFonctionsService: Service.GestionFonctionsService, footerService: Service.FooterService, serviceNavigation: Service.ServiceNavigation, $location: ng.ILocationService, $rootScope: ng.IRootScopeService, fonctionService: Service.FonctionService, profilService: Service.ProfilService);
        updateFonctionSelectionne(): void;
        clickSurVoirInfosDetaillees(): void;
        affecterProfils(): void;
    }
}

declare module MonApplication.Service {
    class GestionFonctionsService {
        private $q;
        private profilService;
        static $inject: string[];
        fonctionSelectionne: Modeles.Fonction;
        constructor($q: ng.IQService, profilService: Service.ProfilService);
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
        showResultatsHabilitations: boolean;
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        constructor();
    }
}

declare module MonApplication {
    class ProfilsControleur {
        gestionProfilsService: Service.GestionProfilsService;
        private footerService;
        private modalService;
        private $location;
        private $rootScope;
        private $timeout;
        private serviceNavigation;
        private profilService;
        private profilDemandeDuplicationService;
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
        actionAssociation: Enum.ActionAssociation;
        constructor(gestionProfilsService: Service.GestionProfilsService, footerService: Service.FooterService, modalService: MyWay.UI.IModalService, $location: ng.ILocationService, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, serviceNavigation: Service.ServiceNavigation, profilService: Service.ProfilService, profilDemandeDuplicationService: Service.ProfilDemandeDuplicationService);
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
    }
}

declare module MonApplication.Service {
    class GestionProfilsService {
        profilSelectionne: Modeles.Profil;
        codeDemandeProfilSelectionneDefaut: string;
        constructor();
    }
}

declare module MonApplication {
    class HabilitationDetailControleur {
        habilitationDetailService: Service.HabilitationDetailService;
        private modalService;
        private $location;
        private $rootScope;
        private profilService;
        private servicePopup;
        static $inject: string[];
        pageTitre: string;
        chargementEnCours: boolean;
        private _libelleHabilitation;
        tableauProfilsDisponibles: MyWay.UI.ImwTableOptions;
        tableauProfilsAffectes: MyWay.UI.ImwTableOptions;
        tabProfilsAffectes: boolean;
        tabProfilsDispos: boolean;
        constructor(habilitationDetailService: Service.HabilitationDetailService, modalService: MyWay.UI.IModalService, $location: ng.ILocationService, $rootScope: ng.IRootScopeService, profilService: Service.ProfilService, servicePopup: Service.ServicePopup);
        ajouterProfilDispo(): void;
        retirerProfilAffecte(): void;
        private initDonnees();
        private updateAffichageProfils();
    }
}

declare module MonApplication.Service {
    class HabilitationDetailService {
        private $q;
        private profilService;
        private mwNotificationService;
        static $inject: string[];
        private _messageAjoutAssociationsProfils;
        private _messageSuppressionAssociationsProfils;
        habilitationCourante: Modeles.Habilitation;
        profilsDispos: Array<Modeles.Profil>;
        constructor($q: ng.IQService, profilService: Service.ProfilService, mwNotificationService: MyWay.UI.IMwNotificationService);
        InitProfils(): ng.IPromise<boolean>;
        associerHabilitations(dataProfils: Array<any>, action: Enum.ActionAffectationHabilitation): ng.IPromise<boolean>;
        private associerProfil(profil, action);
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
        chargementAgentsAffectesEnCours: boolean;
        constructor($rootScope: ng.IRootScopeService, agentService: Service.AgentService);
    }
}

declare module MonApplication {
    class HabilitationRessourcesTssControleur {
        private $rootScope;
        private modalService;
        private servicePopup;
        static $inject: string[];
        pageTitre: string;
        habilitationCourante: Modeles.Habilitation;
        tableauRessourcesDispos: MyWay.UI.ImwTableOptions;
        tableauRessourcesAttachees: MyWay.UI.ImwTableOptions;
        codeRessourceDispoRecherche: string;
        libelleRessourceDispoRecherche: string;
        constructor($rootScope: ng.IRootScopeService, modalService: MyWay.UI.IModalService, servicePopup: Service.ServicePopup);
        rechercherRessourcesDispos(): void;
        ajouterRessourcesDispos(): void;
        retirerRessourcesAttachees(): void;
        private initDonnees();
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
        messageErreur: string;
        modalDatas: any;
        dateDebut: Date;
        dateDebutIHM: string;
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
        constructor($scope: IIModalValidationAffectationControleurScope, $modalInstance: any, data: any, $modal: any);
        ok(): void;
        close(): void;
    }
}

declare module MonApplication {
    class ProfilDetailControleur {
        private modalService;
        private $rootScope;
        private $timeout;
        private $location;
        private profilService;
        private habilitationService;
        profilDetailService: Service.ProfilDetailService;
        private servicePopup;
        private gestionProfilsService;
        static $inject: string[];
        pageTitre: string;
        private _messageErreurProfil;
        private _detailProfilCharge;
        private libelleProfil;
        erreurProprietesProfil: boolean;
        rechercheHabilitationsEnCours: boolean;
        showResultatsHabilitationsDisponibles: boolean;
        tableauHabilitationsDisponibles: MyWay.UI.ImwTableOptions;
        tableauHabilitationsAffectees: MyWay.UI.ImwTableOptions;
        tabHabsDisposActif: boolean;
        tabHabsAffecteesActif: boolean;
        tableauFonctionsDisponibles: MyWay.UI.ImwTableOptions;
        tableauFonctionsAffectees: MyWay.UI.ImwTableOptions;
        tabFonctionsDisposActif: boolean;
        tabFonctionsAffecteesActif: boolean;
        vueProfil: Enum.VueProfil;
        enumVueProfilModification: Enum.VueProfil;
        chargementDonnesProfilEnCours: boolean;
        chargementHabilitationsEnCours: boolean;
        chargementFonctionsEnCours: boolean;
        constructor(modalService: MyWay.UI.IModalService, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, $location: ng.ILocationService, profilService: Service.ProfilService, habilitationService: Service.HabilitationService, profilDetailService: Service.ProfilDetailService, servicePopup: Service.ServicePopup, gestionProfilsService: Service.GestionProfilsService);
        ajouterHabilitationsDispos(): void;
        retirerHabilitationsAffectees(): void;
        ajouterFonctionsDispos(): void;
        retirerFonctionsAffectees(): void;
        private initDonneesVue();
        private initDonnees();
        private chargerAffectation();
        private chargerHabilitations(nettoyerDispos, forcerVisibiliteAffectes);
        private chargerFonctions();
        private updateAffichageHabilitationsAffectees(nettoyerDispos);
        private updateAffichageFonctions();
        private verificationDonneesProfil();
    }
}

declare module MonApplication.Service {
    class ProfilDetailService {
        private $q;
        private fonctionService;
        private profilService;
        private habilitationService;
        private mwNotificationService;
        static $inject: string[];
        private _messageAjoutAssociationsFcts;
        private _messageSuppressionAssociationsFcts;
        private _messageAjoutAssociationsHabs;
        private _messageSuppressionAssociationsHabs;
        private _fonctionsAll;
        private _associationsFonctionsAuProfil;
        profilCourant: Modeles.Profil;
        fonctionsDispos: Array<Modeles.Fonction>;
        habilitationsDispos: Array<Modeles.Habilitation>;
        constructor($q: ng.IQService, fonctionService: Service.FonctionService, profilService: Service.ProfilService, habilitationService: Service.HabilitationService, mwNotificationService: MyWay.UI.IMwNotificationService);
        initHabilitations(): ng.IPromise<boolean>;
        initHabilitationsDispos(): ng.IPromise<boolean>;
        gererAssocierHabilitations(dataHabilitations: Array<any>, action: Enum.ActionAffectationHabilitation): ng.IPromise<boolean>;
        creerProfilAvecHabilitations(dataHabilitations: Array<any>): ng.IPromise<boolean>;
        InitFonctions(): ng.IPromise<boolean>;
        associerFonctions(dataFonctions: Array<Object>, action: Enum.ActionAssociation): ng.IPromise<boolean>;
        private associerHabilitations(dataHabilitations, action);
        private getGroupesHabilitationsAffectees(avecHabilitations);
        private getHabilitationsAffectees();
        private verificationEtAdapatationProfil(dataHabilitations);
        private verifApplicationsProfil(dataHabilitations);
        private associerHabilitation(habilitation, action);
        private setVecteurHabilitation(habilitation, action);
        private verifFonctionEstAffectee(fonction);
        private associerFonction(fonction, action);
    }
}

declare module MonApplication {
    class ProfilListeAgentsControleur {
        private $q;
        private modalService;
        private $rootScope;
        private profilService;
        private agentService;
        private servicePopup;
        private modalSaisiePlageAutorisationService;
        static $inject: string[];
        pageTitre: string;
        profilCourant: Modeles.Profil;
        tableauAgentsAffectes: MyWay.UI.ImwTableOptions;
        chargementAgentsAffectesEnCours: boolean;
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService, $rootScope: ng.IRootScopeService, profilService: Service.ProfilService, agentService: Service.AgentService, servicePopup: Service.ServicePopup, modalSaisiePlageAutorisationService: Service.ModalSaisiePlageAutorisationService);
        retirerAgentAffecte(): void;
        modifierAgentAffecte(): void;
        private chargerAgents();
    }
}

declare module MonApplication {
    class RessourceTssDetailControleur {
        private modalService;
        private $rootScope;
        private habilitationService;
        private servicePopup;
        static $inject: string[];
        pageTitre: string;
        ressourceTssCourante: Modeles.RessourceTss;
        tableauHabilitationsAttachees: MyWay.UI.ImwTableOptions;
        constructor(modalService: MyWay.UI.IModalService, $rootScope: ng.IRootScopeService, habilitationService: Service.HabilitationService, servicePopup: Service.ServicePopup);
        private initDonnees();
    }
}

declare module MonApplication {
    class RessourcesTssControleur {
        suiviRessourcesTssService: Service.SuiviRessourcesTssService;
        private footerService;
        private modalService;
        static $inject: string[];
        codeRessourceTss: string;
        libelleRessourceTss: string;
        constructor(suiviRessourcesTssService: Service.SuiviRessourcesTssService, footerService: Service.FooterService, modalService: MyWay.UI.IModalService);
        rechercherRessourcesTss(): void;
    }
}

declare module MonApplication.Service {
    class SuiviRessourcesTssService {
        showResultatsRessourcesTss: boolean;
        tableauRessourcesTss: MyWay.UI.ImwTableOptions;
        constructor();
    }
}

declare module MonApplication {
    class AjoutElementsDisposControleur {
        private $scope;
        private servicePopup;
        private ajoutElementsDisposService;
        static $inject: string[];
        private _contexteMetier;
        tableauDonnees: MyWay.UI.ImwTableOptions;
        dateDebut: Date;
        dateFin: Date;
        minDate: string;
        messageErreur: string;
        constructor($scope: any, servicePopup: Service.ServicePopup, ajoutElementsDisposService: Service.AjoutElementsDisposService);
        ajouter(): void;
        verifLogiqueSaisie(): void;
    }
}

declare module MonApplication {
    function AjoutElementsDispos(): ng.IDirective;
}

declare module MonApplication.Service {
    class AjoutElementsDisposService {
        private $q;
        private mwNotificationService;
        static $inject: string[];
        private _messageAssociationsHabs;
        private _messageAssociationsProfils;
        private _dateDebut;
        private _dateFin;
        constructor($q: ng.IQService, mwNotificationService: MyWay.UI.IMwNotificationService);
        associerElements(dataElements: Array<Object>, contexteMetier: Enum.ContexteMetier, dateDebut: Date, dateFin: Date): ng.IPromise<boolean>;
        private creerProfilPersonnalise(profil);
        private creerHabilitationPersonnalisee(hab);
    }
}

declare module MonApplication {
    class RetirerElementsAffectesControleur {
        private $scope;
        private servicePopup;
        private modalService;
        private modalSaisiePlageAutorisationService;
        static $inject: string[];
        private _contexteMetier;
        tableauDonnees: MyWay.UI.ImwTableOptions;
        dateDebut: Date;
        dateFin: Date;
        minDate: string;
        messageErreur: string;
        constructor($scope: any, servicePopup: Service.ServicePopup, modalService: MyWay.UI.IModalService, modalSaisiePlageAutorisationService: Service.ModalSaisiePlageAutorisationService);
        modifierPlageAutoristation(): void;
        retirerElement(): void;
    }
}

declare module MonApplication {
    function RetirerElementsAffectes(): ng.IDirective;
}

declare module MonApplication {
    class DomaineApplicationControleur {
        private $scope;
        private domaineService;
        private applicationService;
        static $inject: string[];
        listeDomaines: Array<Modeles.Domaine>;
        domaineSelectionne: Modeles.Domaine;
        listeApplicationsAll: Array<Modeles.Application>;
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
    function entete(): ng.IDirective;
}

declare module MonApplication {
    class FooterControleur {
        private serviceNavigation;
        private $location;
        footerService: Service.FooterService;
        gestionHabsService: Service.GestionHabilitationsService;
        gestionProfilsService: Service.GestionProfilsService;
        gestionAgentsService: Service.GestionAgentsService;
        suiviRessourcesTssService: Service.SuiviRessourcesTssService;
        static $inject: string[];
        constructor(serviceNavigation: Service.ServiceNavigation, $location: ng.ILocationService, footerService: Service.FooterService, gestionHabsService: Service.GestionHabilitationsService, gestionProfilsService: Service.GestionProfilsService, gestionAgentsService: Service.GestionAgentsService, suiviRessourcesTssService: Service.SuiviRessourcesTssService);
        retourPagePrecedente(): void;
    }
}

declare module MonApplication.Service {
    interface IFooterService {
        sansFooter: boolean;
        showFooterGestionHabilitations: boolean;
        showFooterGestionProfils: boolean;
        showFooterGestionAgents: boolean;
        showFooterSuivieRessourcesTss: boolean;
        showFooterSimpleRetour: boolean;
    }
    class FooterService implements IFooterService {
        sansFooter: boolean;
        showFooterGestionHabilitations: boolean;
        showFooterGestionProfils: boolean;
        showFooterGestionAgents: boolean;
        showFooterSuivieRessourcesTss: boolean;
        showFooterSimpleRetour: boolean;
        constructor();
        init(): void;
    }
}

declare module MonApplication {
    class HabilitationRechercheControleur {
        private $scope;
        private habilitationService;
        private modalService;
        static $inject: string[];
        code: string;
        libelle: string;
        domaine: Modeles.Domaine;
        application: Modeles.Application;
        showResultatsHabilitations: boolean;
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        rechercheHabilitationsEnCours: boolean;
        habilitationsDispos: Array<Modeles.Habilitation>;
        showErreurCode: boolean;
        showErreurLibelle: boolean;
        messageErreurTailleChaine: string;
        rechercheAutorisee: boolean;
        constructor($scope: any, habilitationService: Service.HabilitationService, modalService: MyWay.UI.IModalService);
        rechercherHabilitations(): void;
        verifLongueurMinimumCode(): void;
        verifLongueurMinimumLibelle(): void;
        private verifLongueurMinimum(chaineSaisie);
        private verificationRechercehAutorisee;
    }
}

declare module MonApplication {
    function HabilitationRecherche(): ng.IDirective;
}

declare module MonApplication {
}

declare module MonApplication.Service {
    class ServiceNavigation {
        private navigationService;
        static $inject: string[];
        locationPrecedente: string;
        constructor(navigationService: MyWay.UI.INavigationService);
        setActivePage(titrePage: string): void;
        static MENU_PRINCIPAL: Array<Object>;
        static MENU_PROFIL_CREATION: Array<Object>;
        static MENU_PROFIL_MODIFICATION: Array<Object>;
        static MENU_PROFIL_LISTE_AGENTS: Array<Object>;
        static MENU_HABILITATION: Array<Object>;
        static MENU_HABILITATION_LISTE_AGENTS: Array<Object>;
        static MENU_HABILITATION_RESSOURCES_TSS: Array<Object>;
        static MENU_FONCTION: Array<Object>;
        static MENU_AGENT_PERSONNALISATION: Array<Object>;
        static MENU_AGENT_PROFIL_COMPLET: Array<Object>;
        static MENU_RESSOURCE_TSS: Array<Object>;
        genererMenu(menu: any): any;
        genererMiniTotem(menu: any, titrePage?: string, titreChapitre?: string): any;
    }
}

declare module MonApplication {
    function PageTitre(): ng.IDirective;
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

declare module MonApplication.Constantes {
    class Donnees {
        static DATE_FIN_VALIDITE: string;
        static DATE_INTERROGATION: string;
        static RESSOURCES_TSS: Array<Modeles.RessourceTss>;
    }
}

declare module MonApplication.Constantes {
    class Messages {
        static ERREUR_MODELE_OBJET: string;
        static ERREUR_GET_AGENTS_BY_PROFIL: string;
        static INFO_MODIFIER_AGENT_PERSONNALISE: string;
        static ERREUR_MODIFIER_AGENT_PERSONNALISE: string;
        static INFO_SUPPRIMER_AGENT_PERSONNALISE: string;
        static ERREUR_SUPPRIMER_AGENT_PERSONNALISE: string;
        static ERREUR_GET_PERSONNALISATION_AGENT: string;
    }
}

declare module MonApplication.Constantes {
    class Services {
        private static BASE_URL_HABILITATION;
        private static BASE_URL_HABILITATION_PARAMETRE;
        private static BASE_URL_HABILITATION_SERVICE;
        private static BASE_URL_STRUCTURE_PARAMETRE;
        private static BASE_URL_AGENT;
        static URL_DOMAINE: string;
        static URL_APPLICATION: string;
        static URL_HABILITATION: string;
        static URL_PROFIL_TYPE: string;
        static URL_LISTE_PROFIL_TYPE: string;
        static URL_DUPLICATION: string;
        static URL_HABILITATION_RECHERCHE: string;
        static URL_HABILITATION_DETAIL: string;
        static URL_HABILITATION_PARAMETRE: string;
        static URL_FONCTION: string;
        static URL_AGENT_RECHERCHE: string;
        static URL_AFFECTATION_PROFIL_AGENT: string;
        static URL_AGENT_PERSONNALISATION: string;
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
    enum Civilite {
        Monsieur,
        Madame,
        Mademoiselle,
    }
}

declare module MonApplication.Enum {
    enum ContexteMetier {
        Habilitation = 0,
        Profil = 1,
        Fonction = 2,
        Agent = 3,
        RessourceTss = 4,
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
        referenceEDSHierarchique: number;
        typeEDSHierarchique: string;
        libelleTypeEDSHierarchique: string;
        libelleEDSHierarchique: string;
        identifiantAgent: number;
        indicateurAgentNonNominatif: string;
        groupesHabilitation: Array<Modeles.GroupeHabilitation>;
        habilitationsAffectees: Array<Modeles.Habilitation>;
        profilsAffectees: Array<Modeles.Profil>;
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
        referenceEDSHierarchique: number;
        typeEDSHierarchique: string;
        libelleTypeEDSHierarchique: string;
        libelleEDSHierarchique: string;
        identifiantAgent: number;
        indicateurAgentNonNominatif: string;
        groupesHabilitation: Array<Modeles.GroupeHabilitation>;
        habilitationsAffectees: Array<Modeles.Habilitation>;
        profilsAffectees: Array<Modeles.Profil>;
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
    }
    class Application implements IApplication {
        codeDomaine: string;
        codeApplication: string;
        libelleApplication: string;
        codeEtatApplication: string;
        typeApplication: string;
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
        constructor(donnees?: Fonction);
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
        typeRessourceTss: string;
        code: string;
        libelle: string;
        cics: string;
    }
    class RessourceTss implements IRessourceTss {
        typeRessourceTss: string;
        code: string;
        libelle: string;
        cics: string;
        constructor(donnees?: RessourceTss);
    }
}

declare module MonApplication {
    class FooterGestionAgentsControleur {
        private $scope;
        private $rootScope;
        private $location;
        static $inject: string[];
        tableauAgents: MyWay.UI.ImwTableOptions;
        showResultatsAgents: boolean;
        constructor($scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        voirProfilCompletAgent(): void;
        personnaliserAgent(): void;
    }
}

declare module MonApplication {
    function GestionAgentsFooter(): ng.IDirective;
}

declare module MonApplication {
    class FooterGestionHabilitationsControleur {
        private $scope;
        private $rootScope;
        private $location;
        static $inject: string[];
        tableauHabilitations: MyWay.UI.ImwTableOptions;
        showResultatsHabilitations: boolean;
        constructor($scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        associerProfil(): void;
        voirListeAgentsHabilitations(): void;
        voirRessourcesTSS(): void;
    }
}

declare module MonApplication {
    function GestionHabilitationsFooter(): ng.IDirective;
}

declare module MonApplication {
    class FooterGestionProfilsControleur {
        private $scope;
        private $rootScope;
        private $location;
        static $inject: string[];
        profilSelectionne: Modeles.Profil;
        constructor($scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        creerProfil(): void;
    }
}

declare module MonApplication {
    function GestionProfilsFooter(): ng.IDirective;
}

declare module MonApplication {
    class ProfilProprieteControleur {
        private $scope;
        private $location;
        private navigationService;
        private profilService;
        static $inject: string[];
        profil: Modeles.Profil;
        vueProfil: Enum.VueProfil;
        messageErreurLibelle: string;
        showErreurLibelle: boolean;
        enumVueProfilCreation: Enum.VueProfil;
        enumVueProfilModification: Enum.VueProfil;
        constructor($scope: any, $location: ng.ILocationService, navigationService: MyWay.UI.INavigationService, profilService: Service.ProfilService);
        verifLibelleProfilType(): void;
        enregistrerProfil(): void;
    }
}

declare module MonApplication {
    function ProfilProprietes(): ng.IDirective;
}

declare module MonApplication {
    class FooterSuiviRessourcesTssControleur {
        private $scope;
        private $rootScope;
        private $location;
        static $inject: string[];
        tableauRessourcesTss: MyWay.UI.ImwTableOptions;
        showResultatsRessourcesTss: boolean;
        constructor($scope: any, $rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        voirHabilitations(): void;
    }
}

declare module MonApplication {
    function SuiviRessourcesTssFooter(): ng.IDirective;
}

declare module MonApplication.Service {
    interface IMonService {
        consommerServiceRecuperation: (urlService: string, messageErreur: string, fonctionReussite: any) => ng.IPromise<any>;
        consommerServiceAction: (urlService: string, methodeService: MyWay.Services.MethodEnum, dataParams: any, messageInfo: string, messageErreur: string, messageInfoActif: boolean, fonctionReussite?: any) => ng.IPromise<any>;
        consommerServiceSuppression: (urlService: string, messageInfo: string, messageErreur: string) => ng.IPromise<any>;
        gestionErreur: (erreur: Object, message: string) => void;
    }
    class MonService implements IMonService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        consommerServiceRecuperation(urlService: string, messageErreur: string, fonctionReussite: any): ng.IPromise<any>;
        consommerServiceAction(urlService: string, methodeService: MyWay.Services.MethodEnum, dataParams: any, messageInfo: string, messageErreur: string, messageInfoActif: boolean, fonctionReussite?: any): ng.IPromise<any>;
        consommerServiceSuppression(urlService: string, messageInfo: string, messageErreur: string): ng.IPromise<any>;
        gestionErreur(erreur: Object, message: string): void;
    }
}

declare module MonApplication.Service {
    class ServiceDate {
        constructor();
        static formatDateBrutServiceToIHM(chaine: string): any;
        static formatDateCentralToIHM(chaine: string): any;
        static formatDateIHMToCentral(chaine: string): any;
        static formatDateIhmToInputDate(chaine: string): any;
        static formatDateInputDateToIhm(chaineDate: string): any;
        static verifierDateCommune(listeDates: Array<string>): any;
    }
}

declare module MonApplication.Service {
    class ServicePopup {
        private modalService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService);
        informerUtilisateur(body: string): void;
        genererModalAffectation(titre: string, texte: string, dataParams: Array<Object>, fonctionReussite: any): void;
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
        static colonnesHabilitationsVueDetaillee: {
            title: string;
            bind: string;
            cssClass: string;
        }[];
        static initTableauHabilitationsVue(nbElements: number, colonnes: Array<MyWay.UI.ImwTableColumnOptions>): MyWay.UI.ImwTableOptions;
        static initTableauHabilitationsSelect(avecDetail: boolean): MyWay.UI.ImwTableOptions;
        static initTableauProfilsPersonnalises(): MyWay.UI.ImwTableOptions;
        static initTableauProfils(largeur: string, nbElets: number, multiSelected: boolean, avecCode?: boolean): MyWay.UI.ImwTableOptions;
        static initTableauFonctions(multiSelection: boolean): MyWay.UI.ImwTableOptions;
        static initTableauAgents(multiSelection: boolean, filtrable: boolean): MyWay.UI.ImwTableOptions;
        static initTableauAgentsVue(): MyWay.UI.ImwTableOptions;
        static initTableauSuiviRessourcesTss(): MyWay.UI.ImwTableOptions;
        static initTableauRessourcesTss(): MyWay.UI.ImwTableOptions;
        static resetTableOptions(myTab: MyWay.UI.ImwTableOptions): void;
        static majTableaux(tabDonneesARetirer: MyWay.UI.ImwTableOptions, resetTabDonneesARetirer: boolean, tabDonneesAAjouter?: MyWay.UI.ImwTableOptions): void;
        static nettoyerTableauAvecSelection(dataAll: Array<Object>, dataASupprimer: Array<Object>): void;
    }
}

declare module MonApplication.Service {
    interface IAgentService {
        getAgentsByProfil: (codeProfil: string) => ng.IPromise<Array<Modeles.Agent>>;
        modifierAgentPersonnalise: (agent: Modeles.Agent, codeProfil: string) => ng.IPromise<Modeles.Agent>;
        supprimerAgentPersonnalise: (agent: Modeles.Agent, codeProfil: string) => ng.IPromise<any>;
        getAgentsByHabilitation: (habilitation: Modeles.Habilitation) => ng.IPromise<Array<Modeles.Agent>>;
        convertirDataAgentToAgent: (agentCourant: Modeles.Agent, agentData: Object, agentCentral: boolean) => Modeles.Agent;
        getPersonnalisationAgent: (agent: Modeles.Agent) => ng.IPromise<Modeles.Agent>;
    }
    class AgentService implements IAgentService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private profilService;
        private monService;
        static $inject: string[];
        private _urlAgent;
        private _urlPersonnalisationProfilAgent;
        private _urlAgentPersonnalisation;
        /**
         * Données
         */
        private _typeRechercheParProfil;
        private _typeRechercheParHabilitation;
        private _erreurGetAgentsByProfil;
        private _infoModifierAgentPersonnalise;
        private _erreurModifierAgentPersonnalise;
        private _infoSupprimerAgentPersonnalise;
        private _erreurSupprimerAgentPersonnalise;
        private _erreurGetPersonalisationAgent;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, profilService: Service.ProfilService, monService: Service.MonService);
        getAgentsByProfil(codeProfil: string): ng.IPromise<Array<Modeles.Agent>>;
        modifierAgentPersonnalise(agent: Modeles.Agent, codeProfil: string): ng.IPromise<Modeles.Agent>;
        supprimerAgentPersonnalise(agent: Modeles.Agent, codeProfil: string): ng.IPromise<any>;
        getAgentsByHabilitation(habilitation: Modeles.Habilitation): ng.IPromise<Array<Modeles.Agent>>;
        convertirDataAgentToAgent(agentCourant: Modeles.Agent, agentData: Object, agentCentral: boolean): Modeles.Agent;
        getPersonnalisationAgent(agent: Modeles.Agent): ng.IPromise<Modeles.Agent>;
        private rechercherAgents(promiseUrl, messageErreur);
    }
}

declare module MonApplication.Service {
    interface IApplicationService {
        getApplications: () => ng.IPromise<Array<Modeles.Application>>;
        getApplicationByCode: (codeApplicationRecherche: string) => Modeles.Application;
    }
    class ApplicationService implements IApplicationService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        static $inject: string[];
        /**
         * Données
         */
        private _applicationsAll;
        private _urlApplications;
        private _erreurGetListeApplications;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        getApplications(): ng.IPromise<Array<Modeles.Application>>;
        getApplicationByCode(codeApplicationRecherche: string): Modeles.Application;
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
        /**
         * Constructeur
         */
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
        /**
         * Constructeur
         */
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
        getFonctions: (codeRecherche: string, libelleRecherche: string) => ng.IPromise<Array<Modeles.Fonction>>;
        getAssociationsFonctionsByProfil: (profil: Modeles.Profil) => ng.IPromise<Array<Modeles.Fonction>>;
    }
    class FonctionService implements IFonctionService {
        private $q;
        private serviceAgentExtended;
        private authentificationService;
        private monService;
        static $inject: string[];
        private _urlFonction;
        private _erreurGetFonctions;
        private _erreurGetAssociationsProfil;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        getFonctions(codeRecherche: string, libelleRecherche: string): ng.IPromise<Array<Modeles.Fonction>>;
        getAssociationsFonctionsByProfil(profil: Modeles.Profil): ng.IPromise<Array<Object>>;
        private creerFiltresFonctions(code, libelle);
        private convertObjetDelocaliseToFonction(data);
        private triCroissant(fonction);
    }
}

declare module MonApplication.Service {
    interface IHabilitationService {
        getAllHabilitationsBrut: () => ng.IPromise<Array<Modeles.Habilitation>>;
        getAllHabilitationsOrdonnees: () => ng.IPromise<{
            [key: string]: Array<Modeles.Habilitation>;
        }>;
        getHabilitationsFiltrees: (code: string, libelle: string, domaine: string, application: string, habilitationsSourceRecherche?: Array<Modeles.Habilitation>) => ng.IPromise<Array<Modeles.Habilitation>>;
        getDetailHabilitation: (habilitation: Modeles.Habilitation) => ng.IPromise<Modeles.Habilitation>;
        getHabilitationAffectees: (listGroupeHabilitation?: Array<Modeles.GroupeHabilitation>) => ng.IPromise<Array<Modeles.Habilitation>>;
        setVecteur: (vecteur: string, habilitation: Modeles.Habilitation, action: Enum.ActionAffectationHabilitation) => string;
        convertirDataHabilitationToHabilitation(habCurrent: Modeles.Habilitation, habData: Object, habilitationCentral: boolean): Modeles.Habilitation;
        getCleHabilitationByHabilitation: (habilitation: Modeles.Habilitation) => string;
        getCleHabilitationByGroupe: (groupeHabilitation: Modeles.GroupeHabilitation) => string;
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
        private _urlHabilitationRecherche;
        private _urlHabilitationDetail;
        private _erreurGetToutesHabilitations;
        private _erreurGetHabilitationsFiltrees;
        private _erreurParametresGetHabilitationsFiltrees;
        private _erreurGetDetailHabilitation;
        private _erreurCorrespondanceCleGroupeHabsCentralVsIHM;
        private _erreurCorrespondanceHabsCentralVsIHM;
        private _infosGetHabilitationAffectees;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService, domaineService: Service.DomaineService, applicationService: Service.ApplicationService);
        getAllHabilitationsBrut(): ng.IPromise<Array<Modeles.Habilitation>>;
        getAllHabilitationsOrdonnees(): ng.IPromise<{
            [key: string]: Array<Modeles.Habilitation>;
        }>;
        getHabilitationsFiltrees(code: string, libelle: string, domaine: string, application: string, habilitationsSourceRecherche?: Array<Modeles.Habilitation>): ng.IPromise<Array<Modeles.Habilitation>>;
        getDetailHabilitation(habilitation: Modeles.Habilitation): ng.IPromise<Modeles.Habilitation>;
        getHabilitationAffectees(listGroupeHabilitation?: Array<Modeles.GroupeHabilitation>): ng.IPromise<Array<Modeles.Habilitation>>;
        setVecteur(vecteur: string, habilitation: Modeles.Habilitation, action: Enum.ActionAffectationHabilitation): string;
        private replaceCaractere(chaine, caractere, index);
        private getAllHabilitations();
        convertirDataHabilitationToHabilitation(habCurrent: Modeles.Habilitation, habData: Object, habilitationCentral: boolean): Modeles.Habilitation;
        getCleHabilitationByHabilitation(habilitation: Modeles.Habilitation): string;
        getCleHabilitationByGroupe(groupeHabilitation: Modeles.GroupeHabilitation): string;
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
        /**
         * Constructeur
         */
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
        enregistrerProfil: (profil: Modeles.Profil, applications?: Array<Modeles.GroupeHabilitation>) => ng.IPromise<Modeles.Profil>;
        creerProfil: (profil: Modeles.Profil, applications: Array<Modeles.GroupeHabilitation>) => ng.IPromise<Modeles.Profil>;
        supprimerProfil: (profil: Modeles.Profil) => ng.IPromise<any>;
        gererAssociationFonctionProfil: (profil: Modeles.Profil, fonction: Modeles.Fonction, action: Enum.ActionAssociation) => ng.IPromise<any>;
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
        private _aiguilleurProfilsAssociesByHabilitation;
        private _valeurInitialeProfilsAssociesByHabilitation;
        private _aiguilleurProfilsAssociesByFonction;
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
        private _infoAssocierApplication;
        private _erreurAssocierApplication;
        private _infoAssocierHabilitation;
        private _erreurAssocierHabilitation;
        private _erreurGetProfilsAssociesByFonction;
        private _erreurGetProfilsAssociesByHabilitation;
        private _erreurGetHabilitationsAffecteesParDomaine;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, authentificationService: Service.AuthentificationService, monService: Service.MonService);
        getProfils(): ng.IPromise<Array<Modeles.Profil>>;
        getProfilDetail(profil: Modeles.Profil): ng.IPromise<Modeles.Profil>;
        creerProfil(profil: Modeles.Profil, applications: Array<Modeles.GroupeHabilitation>): ng.IPromise<Modeles.Profil>;
        enregistrerProfil(profil: Modeles.Profil, applications?: Array<Modeles.GroupeHabilitation>): ng.IPromise<Modeles.Profil>;
        supprimerProfil(profil: Modeles.Profil): ng.IPromise<any>;
        gererAssociationFonctionProfil(profil: Modeles.Profil, fonction: Modeles.Fonction, action: Enum.ActionAssociation): ng.IPromise<any>;
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
