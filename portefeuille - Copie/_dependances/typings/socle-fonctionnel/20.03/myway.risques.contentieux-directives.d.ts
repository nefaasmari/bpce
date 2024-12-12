
declare namespace ContentieuxDirectives.Commun.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
        const $modalInstance: string;
        const $http: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
        const modalService: string;
        const mwNotificationService: string;
    }
    namespace Services {
        const smsService: string;
        const tuileContratService: string;
        const echeanceService: string;
        const adresseCourrierService: string;
        const recherchePersonneService: string;
        const pointBudgetService: string;
        const optionEditiqueService: string;
        const telephoneService: string;
        const mediaService: string;
    }
    namespace Modal {
        const dataModalInput: string;
        const listeNumeros: string;
        const modeleSMS: string;
        const echeance: string;
        const isModeLecture: string;
        const adresseCourrier: string;
        const recherchePersonne: string;
        const inputPointBudget: string;
        const afficherSignatureGestionnaire: string;
        const optionSignature: string;
    }
}

declare namespace ContentieuxDirectives {
    var app: any;
}

declare namespace ContentieuxDirectives.Modeles {
    abstract class Media {
        indicateurPreference: boolean;
        private libelleTypeMedia;
        private libelleTypeUsageMedia;
        constructor(indicateurPref: boolean, libelleType: string, libelleTypeUsage: string);
        libelle: string;
    }
    class Telephone extends Media {
        numero: string;
        constructor(indicateurPref: boolean, libelleType: string, libelleTypeUsage: string, referenceAcces: string, isMobile: boolean, indicatif: string);
    }
    class Mail extends Media {
        mail: string;
        constructor(indicateurPref: boolean, libelleType: string, libelleTypeUsage: string, referenceAcces: string);
    }
    class IAdresse {
        ligne1adresseAfnor: string;
        ligne2adresseAfnor: string;
        ligne3adresseAfnor: string;
        ligne4adresseAfnor: string;
        ligne5adresseAfnor: string;
        ligne6adresseAfnor: string;
        npai: boolean;
    }
}

declare namespace ContentieuxDirectives.Modeles {
    interface ISmsModalInput {
        identifiantPersonne: number;
        designation: string;
        role: string;
    }
    interface IInfoFromSynthese {
        identifiantPersonne: number;
        designation: string;
        role: string;
        codeEtablissement: string;
        numeroDossier: number;
        identifiantCreance: string;
        identifiantEntiteTitulaire: number;
        identifiantAgent: string;
        designationLonguePersonne: string;
        idEds: number;
    }
}

declare namespace ContentieuxDirectives.Modeles {
    interface ITuileContrat {
        titre: string;
        sousTitre?: string;
        ligne1?: string;
        ligne2?: string;
        templateTitre?: string;
        contenuTemplateTitre?: Object;
        templateSousTitre?: string;
        contenuTemplateSousTitre?: Object;
        templateLigne1?: string;
        contenuTemplateLigne1?: Object;
        templateLigne2?: string;
        contenuTemplateLigne2?: Object;
        texteMarqueur?: string;
        couleurMarqueur?: string;
        detailVueListe1?: string;
        detailVueListe2?: string;
        detailVueListe3?: string;
        identifiantCreance?: string;
    }
}

declare namespace ContentieuxDirectives.Services.AdresseCourrier {
    interface IAdresseCourrierService {
        ouvrirModaleModifierAdresseCourrier(adresse: ContentieuxServices.Modeles.Personne.IAdressePostale): ng.IPromise<ContentieuxServices.Modeles.Personne.IAdressePostale>;
    }
    class AdresseCourrierService implements IAdresseCourrierService {
        private $q;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService);
        ouvrirModaleModifierAdresseCourrier(adresseCourrier: ContentieuxServices.Modeles.Personne.IAdressePostale): ng.IPromise<ContentieuxServices.Modeles.Personne.IAdressePostale>;
    }
}

declare namespace ContentieuxDirectives.Services.Echeance {
    interface IEcheanceService {
        ouvrirModaleDetailEcheance(echeance: ContentieuxServices.Modeles.Echeancier.Tableau.IEcheance): ng.IPromise<any>;
    }
    class EcheanceService implements IEcheanceService {
        private $q;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService);
        ouvrirModaleDetailEcheance(echeance: ContentieuxServices.Modeles.Echeancier.Tableau.IEcheance): ng.IPromise<boolean>;
    }
}

declare namespace ContentieuxDirectives.Services.Media {
    class MediaService {
        private modalService;
        private personneRestService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, personneRestService: Contentieux.RestServices.Services.IPersonneService);
        ouvrirModaleMedias(identifiantPersonne: number, libellePersonne: string, codeEtablissement: string): ng.IPromise<any>;
        getMedias(idPersonne: number, codeEtablissement: string): ng.IPromise<Modeles.Media[]>;
        getAdressePostale(idPersonne: number, codeEtablissement: string): ng.IPromise<Modeles.IAdresse>;
    }
}

declare namespace ContentieuxDirectives.Services.OptionEditique {
    interface IOptionEditiqueService {
        ouvrirModaleModifierOptionEditique(adresse: ContentieuxServices.Modeles.Personne.IAdressePostale, afficherSignatureGestionnaire: boolean, optionSignature: boolean): ng.IPromise<[ContentieuxServices.Modeles.Personne.IAdressePostale, boolean]>;
    }
    class OptionEditiqueService implements IOptionEditiqueService {
        private $q;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService);
        ouvrirModaleModifierOptionEditique(adresseCourrier: ContentieuxServices.Modeles.Personne.IAdressePostale, afficherSignatureGestionnaire: boolean, optionSignature: boolean): ng.IPromise<[ContentieuxServices.Modeles.Personne.IAdressePostale, boolean]>;
    }
}

declare namespace ContentieuxDirectives.Services.PointBudget {
    interface IPointBudgetService {
        ouvrirModalePointBudget(isModeLecture: boolean, pointBudget: ContentieuxServices.Modeles.Echeancier.IEcheancier): ng.IPromise<any>;
    }
    class PointBudgetService implements IPointBudgetService {
        private $q;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService);
        ouvrirModalePointBudget(isModeLecture: boolean, pointBudget: ContentieuxServices.Modeles.Echeancier.IEcheancier): ng.IPromise<boolean>;
    }
}

declare namespace ContentieuxDirectives.Services.RecherchePersonne {
    interface IRecherchePersonneService {
        ouvrirModaleRecherchePersonne(): ng.IPromise<MyWay.Model.Client>;
    }
    class RecherchePersonneService implements IRecherchePersonneService {
        private $q;
        private modalService;
        private mwgcRechercherPersonneService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService, mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService);
        ouvrirModaleRecherchePersonne(): ng.IPromise<MyWay.Model.Client>;
    }
}

declare namespace ContentieuxDirectives.Services.Sms {
    interface ISmsService {
        ouvrirModaleSMS(infoFromSynthese: Modeles.IInfoFromSynthese): ng.IPromise<any>;
        getRetourRelanceSms(codeEtablissement: string, numeroDossier: number, codeAction: string, identifiantAgent: string): ng.IPromise<Contentieux.RestServices.Modeles.IRetourRelance>;
        retourRelanceRecu(codeEtablissement: string, numeroDossier: number, codeAction: string, identifiantAgent: string): ng.IPromise<Contentieux.RestServices.Modeles.IRetourRelance>;
        envoyerSMS(inputData: Contentieux.RestServices.Modeles.IInfoSmsAEmettreParamEntree, afficherNotification: boolean): ng.IPromise<void>;
        getListeModelesSMS(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, idEds: number): ng.IPromise<Contentieux.RestServices.Modeles.IModeleSms[]>;
    }
    interface IZoneBanalisee {
        rubrique: string;
        taille: number;
    }
    class SmsService implements ISmsService {
        private $q;
        private modalService;
        private smsService;
        private personneService;
        private mwNotificationService;
        private edsService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService, smsService: Contentieux.RestServices.Services.ISmsService, personneService: Contentieux.RestServices.Services.IPersonneService, mwNotificationService: MyWay.UI.IMwNotificationService, edsService: ContentieuxServices.Services.EDS.IEDSService);
        ouvrirModaleSMS(infoFromSynthese: Modeles.IInfoFromSynthese): ng.IPromise<Contentieux.RestServices.Modeles.IInfosSmsSortie>;
        envoyerSMS(inputData: Contentieux.RestServices.Modeles.IInfoSmsAEmettreParamEntree, afficherNotification: boolean): ng.IPromise<void>;
        getListeModelesSMS(codeEtablissement: string, numeroDossier: number, identifiantCreance: string, idEds: number): ng.IPromise<Contentieux.RestServices.Modeles.IModeleSms[]>;
        getListeNumeroMobile(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<string[]>;
        getRetourRelanceSms(codeEtablissement: string, numeroDossier: number, codeAction: string, identifiantAgent: string): ng.IPromise<Contentieux.RestServices.Modeles.IRetourRelance>;
        retourRelanceRecu(codeEtablissement: string, numeroDossier: number, codeAction: string, identifiantAgent: string): ng.IPromise<Contentieux.RestServices.Modeles.IRetourRelance>;
        envoiMessageReel(codeNatureFlux: string, codeModeEchange: string, creFonctionnel: Contentieux.RestServices.Modeles.ICreFonctionnel): ng.IPromise<Contentieux.RestServices.Modeles.IEnteteApplicativeRetour>;
        creFonctionnelConstruct(dateEvenement: string, identifiantEntiteEvenement: string, zoneBanalisee: string): Contentieux.RestServices.Modeles.ICreFonctionnel;
        /**
         * Méthode qui construit un champs de 3000 caractères ordonnés et placés dans le bon ordre pour l'envoi réel du SMS
         * @param codeEtab
         * @param idPersonne
         * @param adresseMessagerie
         * @param message
         */
        zoneBanaliseeCreConstruct(codeEtab: string, idPersonne: number, adresseMessagerie: string, message: string, codeMessageType: string): string;
    }
}

declare namespace ContentieuxDirectives.Services {
    class TelephoneService {
        private $q;
        private boiteOutilService;
        private $http;
        static $inject: string[];
        constructor($q: ng.IQService, boiteOutilService: Contentieux.RestServices.Services.IBoiteOutilService, $http: ng.IHttpService);
        composerAppel(numeroDestinataire: string, codeEtablissement: string): ng.IPromise<void>;
        protected call(url: string, numeroDestinataire: string): ng.IPromise<string>;
        protected getUrlTelephonie(codeEtablissement: string): ng.IPromise<Contentieux.RestServices.Modeles.IUrl>;
    }
}

declare namespace ContentieuxDirectives.Services.TuileContrat {
    interface ITuileContratService {
        mappeContratsEnTuiles(contrat: ContentieuxServices.Modeles.Contrat.IContratTuile): ContentieuxDirectives.Modeles.ITuileContrat;
    }
    class TuileContratService implements ITuileContratService {
        private tuileService;
        static $inject: string[];
        constructor(tuileService: ContentieuxParametrage.Services.TuileService);
        mappeContratsEnTuiles(contrat: ContentieuxServices.Modeles.Contrat.IContratTuile): ContentieuxDirectives.Modeles.ITuileContrat;
        private getMontantReporte(contrat, tuile);
    }
}

declare namespace ContentieuxDirectives.Commun.Constantes {
    namespace Metier {
        const typeRelance: string;
        const typeEnvoiRelance: string;
        const tailleMaxSMS: number;
    }
    /**
     * CompteRenduEvenement
     */
    namespace CRE {
        const codeComposantApplicatif: string;
        const codeEvenement: string;
        const numeroVersion: string;
        const codeServiceInitiateur: string;
        const numeroVersionServiceInitiateur: string;
        const codeTypeEntiteEvenement: string;
        const numeroSegmentCre: number;
        const codeStructureDonneeEvenement: string;
        const numeroSegmentCre2: number;
        const codeStructureDonneeEvenement2: string;
        const codeNatureFlux: string;
        const codeModeEchange: string;
        const codeOrigineDemande: string;
        const codeAction: string;
        const codeMediaEnvoiReponse: string;
        const codeModeUtilisation: string;
        const typeEntiteDestinataire: string;
        const dateEffetEvenement: string;
        const heureDeTraitement: string;
        const dateDebutValidite: string;
        const heureTraitementDemande: string;
        const codePrioriteEnvoiMessage: string;
        const codeMessageType: string;
        const messageDescriptifEvenement: string;
    }
    namespace Sms {
        const modificationRetourRelance: string;
        const informationRetourRelance: string;
        const codeActionSMSUnitaire: string;
    }
    namespace Medias {
        const codeDistributionNPAI: string;
    }
    namespace Tuile {
        const depuisLe: string;
        const provision: string;
        const montantReporte: string;
        const dontMontantReporte: string;
    }
    namespace PointBudget {
        const modalTitlePointBudget: string;
    }
    namespace Modal {
        const TITRE_MODAL_MODIFICATION_ADRESSE_COURRIER: string;
        const TITRE_MODAL_OPTION_EDITIQUE: string;
        const TITRE_MODAL_RECHERCHE_PERONNE: string;
    }
}

declare namespace ContentieuxDirectives {
    class DetailEcheanceModalControleur {
        private $modalInstance;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        static $inject: Array<string>;
        echeance: ContentieuxServices.Modeles.Echeancier.Tableau.IEcheance;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, echeance: ContentieuxServices.Modeles.Echeancier.Tableau.IEcheance);
        fermer(): void;
    }
}

declare namespace ContentieuxDirectives {
    class EnvoiContratEcheancierModalControleur {
        private $modalInstance;
        private windowService;
        private serviceAgent;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        static $inject: Array<string>;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, windowService: ng.IWindowService, serviceAgent: MyWay.Services.IServiceAgent);
        valider(): void;
        annuler(): void;
        visualiserContrat(): void;
        envoyerContratMail(): ng.IPromise<void>;
    }
}

declare namespace ContentieuxDirectives {
    namespace Controleur {
        const ctrlTemplateUrl: string;
        const ctrlName: string;
        const ctrlAs: string;
    }
    class MediaControleur {
        private telephoneService;
        private mwNotificationService;
        private $modalInstance;
        private medias;
        private identifiantPersonne;
        private adresse;
        title: string;
        telephones: Modeles.Telephone[];
        mails: Modeles.Mail[];
        static $inject: string[];
        constructor(telephoneService: Services.TelephoneService, mwNotificationService: MyWay.UI.IMwNotificationService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, medias: Modeles.Media[], identifiantPersonne: number, libellePersonne: string, adresse: Modeles.IAdresse);
        composerAppel(telephone: Modeles.Telephone, codeEtablissement: string): void;
        closeModale(): void;
    }
}

declare namespace ContentieuxDirectives {
    class ModifierAdresseCourrierModalControleur {
        private $modalInstance;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        static $inject: Array<string>;
        titreModal: string;
        adresseCourrierActuelle: ContentieuxServices.Modeles.Personne.IAdressePostale;
        adresseCourrierModifiee: ContentieuxServices.Modeles.Personne.IAdressePostale;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, adresseCourrier: ContentieuxServices.Modeles.Personne.IAdressePostale);
        valider(): void;
        annuler(): void;
        fermer(): void;
    }
}

declare namespace ContentieuxDirectives {
    class OptionEditiqueModalControleur {
        private $modalInstance;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        static $inject: Array<string>;
        titreModal: string;
        adresseCourrierActuelle: ContentieuxServices.Modeles.Personne.IAdressePostale;
        adresseCourrierModifiee: ContentieuxServices.Modeles.Personne.IAdressePostale;
        afficherSignatureGestionnaire: boolean;
        optionSignature: boolean;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, adresseCourrier: ContentieuxServices.Modeles.Personne.IAdressePostale, afficherSignatureGestionnaire: boolean, optionSignature: boolean);
        valider(): void;
        annuler(): void;
        fermer(): void;
    }
}

declare namespace ContentieuxDirectives {
    class PointBudgetModalControleur {
        private $modalInstance;
        private pointBudgetService;
        dateDuJour: string;
        pointBudget: ContentieuxServices.Modeles.PointBudget.PointBudget;
        isModeLecture: boolean;
        inputPointBudget: ContentieuxServices.Modeles.Echeancier.IEcheancier;
        montantTotalRevenus: number;
        montantTotalCharges: number;
        montantDifferenceRevenusCharges: number;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        static $inject: Array<string>;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, isModeLecture: boolean, pointBudgetService: ContentieuxServices.Services.PointBudget.PointBudgetService, inputPointBudget: ContentieuxServices.Modeles.Echeancier.IEcheancier);
        /**
         * Initialise le point budget
         * @param pointBudget
         * @param isModeLecture
         */
        initPointBudget(isModeLecture: boolean, inputPointBudget: ContentieuxServices.Modeles.Echeancier.IEcheancier): ContentieuxServices.Modeles.PointBudget.PointBudget;
        /**
         * Somme les revenus
         * @param autresRevenus
         * @param revenusLocatifs
         * @param salaire
         */
        calculerMontantRevenus(autresRevenus: number, revenusLocatifs: number, salaire: number): number;
        private calculMontantDifferenceRevenusCharges();
        /**
         * Controle que le montant est positif
         * @param montant
         */
        controlerMontant(montant: number): number;
        onChangeSalaire(): void;
        onChangeRevenusLocatif(): void;
        onChangeAutresRevenus(): void;
        onChangeCharges(): void;
        valider(): void;
        annuler(): void;
    }
}

declare namespace ContentieuxDirectives {
    class RecherchePersonneModalControleur {
        private $modalInstance;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        static $inject: Array<string>;
        titreModal: string;
        nodape: string;
        result: myway.comGestionClient.RecherchePersonneResult;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance);
        valider(): void;
        annuler(): void;
        fermer(): void;
    }
}

declare namespace ContentieuxDirectives {
    class RetourSmsModalControleur {
        private $modalInstance;
        retourModal: boolean;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        static $inject: Array<string>;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance);
        valider(): void;
        annuler(): void;
        nouveauMessage(): void;
    }
}

declare namespace ContentieuxDirectives {
    class SmsModalControleur {
        private $modalInstance;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        static $inject: Array<string>;
        designationParticipant: string;
        roleParticipant: string;
        listeNumerosMobiles: string[];
        choixNumeroTelephone: string;
        listeModelesSms: Contentieux.RestServices.Modeles.IModeleSms[];
        choixModeleSMS: Contentieux.RestServices.Modeles.IModeleSms;
        contenuMessage: string;
        caracteresRestants: number;
        erreur: string;
        afficherMessageErreur: boolean;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, dataModalInput: Modeles.ISmsModalInput, listeNumeros: string[], modeleSMS: Contentieux.RestServices.Modeles.IModeleSms[]);
        calculTailleMessage(): void;
        changementModele(modele: Contentieux.RestServices.Modeles.IModeleSms): void;
        valider(): void;
        annuler(): void;
    }
}

declare namespace ContentieuxDirectives {
    class SoldeRestantDuModalControleur {
        private $modalInstance;
        private ongletsEcheanciers;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        soldeRestantDu: string;
        listeEcheanciers: ContentieuxServices.Modeles.Echeancier.IEcheancier[];
        typeRestantDu: string[];
        static $inject: Array<string>;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, ongletsEcheanciers: ContentieuxServices.Modeles.Echeancier.IEcheancier[]);
        formulaireValide(): boolean;
        valider(): void;
        annuler(): void;
    }
}

declare namespace ContentieuxDirectives {
    class TuileContratControleur {
        private serviceAgent;
        static parametres: ContentieuxCommun.Controleur.IControleurParametre;
        tuiles: ContentieuxDirectives.Modeles.ITuileContrat[];
        static $inject: Array<string>;
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
    }
}

declare namespace ContentieuxDirectives {
}
