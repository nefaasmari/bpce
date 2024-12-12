
declare namespace ContentieuxDirectives.Commun.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
        const $modalInstance: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
        const modalService: string;
        const mwNotificationService: string;
    }
    namespace Services {
        const smsService: string;
    }
    namespace Modal {
        const dataModalInput: string;
        const listeNumeros: string;
        const modeleSMS: string;
    }
}

declare namespace ContentieuxDirectives {
    var app: any;
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
    }
    namespace Tuile {
        const depuisLe: string;
        const provision: string;
        const montantReporte: string;
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
