
declare module MyWay.Contractualisation {
    var app: any;
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
    class IdentificationSignControleur {
        private $scope;
        private serviceAgentExtended;
        private identificationSignService;
        static $inject: string[];
        private identificationSignataireDirectiveShow;
        private contractualisationActe;
        private chargementLong;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, identificationSignService: IdentificationSignService);
    }
}

declare module MyWay.Contractualisation {
    class RemiseCGControleur {
        private $scope;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private remiseCGService;
        static $inject: string[];
        private remiseCGDirectiveShow;
        private idPersonne;
        private donneesRemiseCG;
        private chargementLong;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, remiseCGService: RemiseCGService);
    }
}

declare module MyWay.Contractualisation {
    class RouteurControleur {
        private $scope;
        private routeurService;
        static $inject: string[];
        private chargementLong;
        constructor($scope: ng.IScope, routeurService: RouteurService);
    }
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
    interface IChargementLong {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<boolean>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'application Contractualisation.
     * @author S0076222
     * @version 16.09
     */
    class ContractualisationConstants {
        static CONTRACTULISATION_ACTE_KEY_CONTEXT: string;
        static DOSSIER_NUMERIQUE_KEY_CONTEXT: string;
        static MODE_KEY_CONTEXT: string;
        static MODE_SIGNATURE_KEY_CONTEXT: string;
        static ID_IDN_KEY_CONTEXT: string;
        static ID_MAT_KEY_CONTEXT: string;
        static CAISSE_KEY_CONTEXT: string;
        static AGENT_KEY_CONTEXT: string;
        static MODE_ENVOI_KEY_CONTEXT: string;
        static REMISE_PAPIER_KEY_CONTEXT: string;
        static INDICATEUR_IMPRESSION_KEY_CONTEXT: string;
        static ENVOI_MAIL_KEY_CONTEXT: string;
        static ADRESSE_MAIL_KEY_CONTEXT: string;
        static ID_TRANSACTION_ICG_KEY_CONTEXT: string;
        static APPEL_IHM_ACQ_CLACLI: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     * @version 16.09
     */
    interface IContractualisationContexteModele {
        authenficationInfo?: MyWay.Services.Context.AuthentificationInfo;
        modeSignature?: string;
        contractualisationActe?: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe;
        idIDN?: string;
        idMat?: string;
        caisse?: string;
        agent?: string;
    }
    interface IContexteMyWayModele {
        cle: string;
        valeur: any;
    }
    interface IContractualisationContexteManager {
        contratsContexte: IContractualisationContexteModele;
        init(): ng.IPromise<void>;
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * ContractualisationEvents présente les évenements utilisés pour communiquer avec le composant Identifications signataires.
     * @author S0076222
     * @version 16.05
     */
    class ContractualisationEvents {
        static IDENTIFIER_SIGNATAIRE_EVENT: string;
        static MODIFIER_SIGNATAIRE_EVENT: string;
        static ANNULER_EVENT: string;
        static VALIDER_EVENT: string;
        static BOUTON_IDENTIFIER_SHOW_EVENT: string;
        static BOUTON_VALIDER_SHOW_EVENT: string;
        static BOUTON_ANNULER_SHOW_EVENT: string;
        static BOUTON_MODIFIER_SHOW_EVENT: string;
        static FIN_IDENTIFICATION_SIGNATAIRES_EVENT: string;
        static START_IDENTIFICATION_SIGNATAIRES_EVENT: string;
    }
    class FinProcessIdenSignProperties {
        contractualisationActe: Ressources.ContractualisationActe.IContractualisationActe;
        modeSignature: string;
        constructor(contractualisationActe: Ressources.ContractualisationActe.IContractualisationActe, modeSignature: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les messages erreur que l'application Contractualisation peut retourner.
     * @author S0076222
     * @version 16.09
     */
    class ContractualisationMessageErreur {
        static PB_GET_CONTRACTUALISATION_ACTE_FROM_CONTEXT: string;
        static PB_ADD_CONTRACTUALISATION_ACTE_TO_CONTEXT: string;
        static PB_CONTEXT: string;
        static CODE_ACTE_GESTION_UNDEFINED: string;
        static ERREUR_TECHNIQUE: string;
        static CODE_CANAL_UNDEFINED: string;
        static INDICATEUR_PAPIER_UNDEFINED: string;
        static CODE_ETABLISSEMENT_FINANACIER_UNDEFINED: string;
        static ACTE_GESTION_UNDEFINED: string;
        static NOMBRE_SIGNATAIRES_ACTE_VIDE: string;
        static PB_CANAL_NUM: string;
        private messageErreur;
        private messageComplementaire;
        private action;
        private erreurMyWay;
        private classeTypeScript;
        /**
         * @constructor
         */
        constructor(messageErreur: string, action: string, classe?: string, erreurMyWay?: MyWay.Services.Erreur, messageComplementaire?: string);
    }
}

declare module MyWay.Contractualisations.Utils {
    /**
     * La classe ContractualisationUtils propose des fonctions utils pour l'application.
     * @author S0076222
     * @version 16.05
     */
    class ContractualisationUtils {
        static convertirDateTOYYYYMMDD(date: Date): string;
        convertirDateTOYYMMDD(date: Date): string;
        convertirDateTOHHMMSS(date: Date): string;
    }
}

declare module MyWay.IdentificationSignataires {
    /**
     * mwenIdentificationSignataires est une directive a pour objectif d'identifier les signataires qui n'ont pas une
     * pièce justificative dans le DRC.
     * @author S0076222
     * @version 16.09
     */
    var isApp: any;
    function mwenIdentificationSignataires(): ng.IDirective;
}

declare module MyWay.Contractualisation {
    class ContractualisationModaleService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        static standardModaleHeader: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        afficherModale(headerText: string, bodyText: string): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     * @version 16.09
     */
    class RouteurContexteModele implements IContractualisationContexteModele {
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe;
        mode: number;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, mode: number);
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     * @version 16.09
     */
    class RouteurContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        contratsContexte: RouteurContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): ng.IPromise<void>;
        private checkContractualisationActeObject(contractualisationActe);
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
        private getIdMateriel(contractualisationActe);
    }
}

declare module MyWay.Contractualisation {
    class RouteurService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private routeurContexteService;
        private dossierContratService;
        private mweeGedService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, routeurContexteService: RouteurContexteService, dossierContratService: DossierContratService, mweeGedService: MyWay.PieceJointe.GedService);
        dispatcher(): void;
        private executerModeNumeroUN();
        private executerModeRepliPapier();
        private imprimerDocuments();
    }
}

declare module MyWay.Contractualisation {
    class DocumentParametreService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name getDocumentParametre
         * @description
         * Permet TO DO
         * @param TO DO
         * @returns {Object} Result promise.
         */
        getDocumentParametre(actes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheEntreprise: string): ng.IPromise<Array<Ressources.DocumentParametre.IDocumentActe>>;
        /**
         * @ngdoc method
         * @name ajoutDocumentsActesSecondaires
         * @description
         * Permet TO DO
         * @param TO DO
         * @returns {Object} Result promise.
         */
        ajoutDocumentsActesSecondaires(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe): ng.IPromise<MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe>;
    }
}

declare module MyWay.Contractualisation {
    class DossierCanalNumeriqueService {
        private $q;
        private serviceAgentExtended;
        private mettreAJourDRCService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mettreAJourDRCService: MettreAJourDRCService);
        createDossierClasseurClientElectronique(acteGestion: MyWay.Contractualisation.Ressources.ContractualisationActe.IActeGestion, indicateurPapier: boolean): ng.IPromise<void>;
        private postCreationDossierCanalNum(acteGestion, indicateurPapier);
        private getCompte(authenficationInfo, referenceContrat);
        private getReferenceExterneEDS(authenficationInfo);
        private getCodeTypeEDS(authenficationInfo);
        private getReferenceInterneEDS(authenficationInfo);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'application Contractualisation.
     * @author S0076222
     * @version 16.05
     */
    class DossierContratConstants {
        static ERREUR_TECHNIQUE: string;
        static ENTETE_POPUP: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     * @version 16.09
     */
    class DossierContratContexteModele implements IContractualisationContexteModele {
        modeSignature: string;
        modeEnvoi: string;
        remisePapier: string;
        indicateurImpression: string;
        envoiMail: string;
        adresseMail: string;
        idIDN: string;
        idTransactionIcg: string;
        contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe;
        ihmAcquisition: number;
        constructor(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, modeSignature: string, idIDN: string, modeEnvoi: string, remisePapier: string, indicateurImpression: string, envoiMail: string, adresseMail: string, idTransactionIcg: string, ihmAcquisition: number);
    }
}

declare module MyWay.Contractualisation {
    class DossierContratContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        contratsContexte: DossierContratContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): ng.IPromise<void>;
        nextEtape(valeurSortie: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    class DossierContratService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private dossierContratContexteService;
        private mettreAJourDRCService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, dossierContratContexteService: DossierContratContexteService, mettreAJourDRCService: MettreAJourDRCService);
        createDossierClasseurClientPapier(valeurSortie: number): ng.IPromise<void>;
        private putDossierContrat(acteGestion, indicateurPapier);
        private getReferenceExterneEDS(authenficationInfo);
        private getCodeElementDeStructure(authenficationInfo);
    }
}

declare module MyWay.Contractualisation {
    class DossierNumeriqueService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name postDossierNumerique
         * @description
         * Permet TO DO
         * @param TO DO
         * @returns {Object} Result promise.
         */
        postDossierNumerique(dossiernumerique: MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique): ng.IPromise<MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique>;
        /**
         * @ngdoc method
         * @name putDossierNumerique
         * @description
         * Permet TO DO
         * @param TO DO
         * @returns {Object} Result promise.
         */
        putDossierNumerique(dossiernumerique: MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique): ng.IPromise<MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     * @version 16.09
     */
    class IdentificationSignataireContexteModele implements IContractualisationContexteModele {
        contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe;
        idIDN: string;
        idMat: string;
        caisse: string;
        agent: string;
        modeSignature: string;
        constructor(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, idIDN: string, idMat: string, caisse: string, agent: string, modeSignature: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     * @version 16.09
     */
    class IdentificationSignataireContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        contratsContexte: IdentificationSignataireContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): ng.IPromise<void>;
        private checkContractualisationActeObject(contractualisationActe);
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    class IdentificationSignService {
        private $q;
        private serviceAgentExtended;
        private identificationSignataireContexteService;
        private dossierNumeriqueService;
        private documentParametreService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, identificationSignataireContexteService: IdentificationSignataireContexteService, dossierNumeriqueService: DossierNumeriqueService, documentParametreService: DocumentParametreService);
        init(): ng.IPromise<void>;
        getIdentificationSignataireContexte(): IdentificationSignataireContexteModele;
        alimenterDossierNumerique(contractualisationActe: Ressources.ContractualisationActe.IContractualisationActe, modeSignature: string): ng.IPromise<void>;
        private executerModeRepliPapier(contractualisationActe);
    }
}

declare module MyWay.Contractualisation {
    class MettreAJourDRCService {
        private $q;
        private serviceAgentExtended;
        private numerisationService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, numerisationService: myway.comEditiqueNumerisation.Services.NumerisationService);
        mettreAJourDRC(listeTitulaires: Array<MyWay.Contractualisation.Ressources.ContractualisationActe.ITitulaireActe>): ng.IPromise<void>;
        private recupereDossierClasseurClient(identifiantPersonne);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'application Contractualisation.
     * @author S0076222
     * @version 16.05
     */
    class RemiseCGConstants {
        static ERREUR_TECHNIQUE: string;
        static CODE_REMISE_CG_MSI: string;
        static ENTETE_POPUP: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     * @version 16.09
     */
    class RemiseCGContexteModele implements IContractualisationContexteModele {
        modeSignature: string;
        contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe;
        idIDN: string;
        idMat: string;
        caisse: string;
        agent: string;
        constructor(modeSignature: string, contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, idIDN: string, idMat: string, caisse: string, agent: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     * @version 16.09
     */
    class RemiseCGContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private dossierCanalNumeriqueService;
        private dossierContratService;
        static $inject: string[];
        contratsContexte: RemiseCGContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dossierCanalNumeriqueService: DossierCanalNumeriqueService, dossierContratService: DossierContratService);
        init(): ng.IPromise<void>;
        private checkContractualisationActeObject(contractualisationActe);
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
        private nextIDNImpression();
        private nextClasseurClientPapier();
        private nextClasseurClientElectronique();
    }
}

declare module MyWay.Contractualisation {
    class RemiseCGService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private remiseCGContexteService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, remiseCGContexteService: RemiseCGContexteService);
        init(): ng.IPromise<boolean>;
        nextEtape(): ng.IPromise<void>;
        private getCodeRemiseCG(contractualisationActe);
        private getCodeModeContractualistion(modeVente, modeSignature);
        private getModeVente(contractualisationActe);
        getRemiseCGContexte(): RemiseCGContexteModele;
        getIdPersonne(): string;
        getDonneesRemiseCG(): myway.comEditiqueNumerisation.Modeles.IRemiseCG;
    }
}

declare module MyWay.Contractualisation {
    class CodeCanalVente {
        static FF: string;
        static TL: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     * @version 16.05
     */
    interface IPropriete {
        newValue: boolean;
    }
    class Event {
        private topic;
        private proprietes;
        constructor(topic: string, proprietes: Array<IPropriete>);
    }
}

declare module MyWay.Contractualisation {
    class ModeContractualisation {
        static FAFE: string;
        static FAFP: string;
        static VADE: string;
        static VADP: string;
        static AUCUN: string;
    }
}

declare module MyWay.Contractualisation {
    enum ModeSignature {
        SAG = 0,
        SED = 1,
        FORCAGE_PAPIER = 2,
    }
}

declare module MyWay.IdentificationSignataires {
    class EnregistrementSignataireControleur {
        private $scope;
        private $rootScope;
        private modalService;
        private $modalInstance;
        private data;
        static $inject: string[];
        dataFromModale: any;
        maxDate: Date;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, modalService: MyWay.UI.IModalService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        valider(signataire: ISignataire): void;
        annuler(): void;
    }
}

declare module MyWay.IdentificationSignataires {
    class IdentificationSignatairesControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private modalService;
        private identificationSignatairesService;
        static $inject: string[];
        private contractualisationActe;
        private signatairesIdentifiesTable;
        private signatairesNonIdentifiesTable;
        private signatairesNonIdentifesTableShow;
        private signatairesIdentifesTableShow;
        private chargementLong;
        constructor($scope: ng.IScope, $rootScope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, identificationSignatairesService: IdentificationSignatairesService);
        afficherModaleErreur(headerTex: string, bodyText: string): void;
    }
}

declare module MyWay.IdentificationSignataires {
    class DossierNumeriqueService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @ngdoc method
         * @name postDossierNumerique
         * @description
         * Permet TO DO
         * @param TO DO
         * @returns {Object} Result promise.
         */
        postDossierNumerique(dossiernumerique: MyWay.IdentificationSignataires.Ressource.DossierNumerique.IDossierNumerique): ng.IPromise<MyWay.IdentificationSignataires.Ressource.DossierNumerique.IDossierNumerique>;
        putDossierNumerique(dossiernumerique: MyWay.IdentificationSignataires.Ressource.DossierNumerique.IDossierNumerique): ng.IPromise<MyWay.IdentificationSignataires.Ressource.DossierNumerique.IDossierNumerique>;
    }
}

declare module MyWay.IdentificationSignataires {
    class GenererDocBPJIService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        genererDocument(signataire: ISignataire, codeNatureGed: string): ng.IPromise<MyWay.Services.Impression.DocumentGenere>;
    }
}

declare module MyWay.IdentificationSignataires {
    class IdentificationSignatairesContexteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        identificationSignataireContexte: IIdentificationSignataireContexte;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getIdentificationSignataireContexte(): ng.IPromise<void>;
    }
}

declare module MyWay.IdentificationSignataires {
    class IdentificationSignatairesService implements MyWay.UI.ISelectionChangeHandler {
        private $q;
        private $filter;
        private serviceAgentExtended;
        private modalService;
        private particulierInformationService;
        private genererDocBPJIService;
        private dossierNumeriqueService;
        private identificationSignatairesContexteService;
        static $inject: string[];
        private listeSignatairesNonIdentifies;
        private listeSignatairesIdentifies;
        private typePieceJustificativeIdentiteList;
        private signataireAIdentifier;
        private signataireAModifier;
        boutonValiderEnabled: boolean;
        boutonIdentifierEnabled: boolean;
        boutonModifierEnabled: boolean;
        finProcessIdentificationSignataires: boolean;
        signatairesNonIdentifesTableShow: boolean;
        signatairesIdentifesTableShow: boolean;
        private signatairesIdentifiesTable;
        private signatairesNonIdentifiesTable;
        private signataireIdentifie;
        constructor($q: ng.IQService, $filter: ng.IFilterService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService, particulierInformationService: ParticulierInformationService, genererDocBPJIService: GenererDocBPJIService, dossierNumeriqueService: DossierNumeriqueService, identificationSignatairesContexteService: IdentificationSignatairesContexteService);
        init(contractualisationActe: Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<boolean>;
        private start();
        private mettreAJourCodeTypeActionPJI(codeTypeActionPJI);
        private initialiserSignataires(listeSignataires);
        private getPieceValideDRC(typeDocuments, idPersonne);
        private isSignataitreIdentifie(rechercherPieceValideDRCOutput);
        private getSignataires(codeEtablissementFinancier, identifiantSignataires);
        private getTypesPieceJustificativeIdentite(codeEtablissementFinancier);
        private genererDocumentBPJI(signataire, codeNatureGed);
        identifier(): void;
        modifier(): void;
        valider(): void;
        addDocumentBPJIToContractualisationActe(documentsGenererBPJI: Array<MyWay.Services.Impression.DocumentGenere>): void;
        private getNumeroAffichageDocumentFromContractualisationActe(documentAProduire);
        getDocumentBPJIFromContractualisationActe(): MyWay.IdentificationSignataires.Ressource.ContractualisationActe.IDocumentAProduire;
        annuler(): void;
        ouvrirModaleIdentification(signataire: ISignataire): ng.IPromise<ISignataire>;
        getIdentifiantSignataires(contractualisationActe: MyWay.IdentificationSignataires.Ressource.ContractualisationActe.IContractualisationActe): Array<string>;
        isCodeActionRecherchePJIExiste(contractualisationActe: Ressource.ContractualisationActe.IContractualisationActe): boolean;
        isCodeTypeDocumentBPJIExiste(contractualisationActe: Ressource.ContractualisationActe.IContractualisationActe): boolean;
        getCodeNatureGedBPJI(contractualisationActe: Ressource.ContractualisationActe.IContractualisationActe): string;
        getIndicateurDocumentObligatoire(contractualisationActe: MyWay.IdentificationSignataires.Ressource.ContractualisationActe.IContractualisationActe): boolean;
        getSignatairesIdentifiesList(): Array<Signataire>;
        getSignatairesNonIdentifiesList(): Array<Signataire>;
        /**
         * @ngdoc method
         * @name getTypePieceJustificativeIdentiteList
         * @description
         * @params
         * @returns {}
         */
        getTypePieceJustificativeIdentiteList(): Array<string>;
        getSignatairesIdentifiesTable(): any;
        /**
         * @ngdoc method
         * @name getSignatairesNonIdentifiesTable
         * @description
         * @params
         * @returns {}
         */
        getSignatairesNonIdentifiesTable(): any;
        getIdentificationSignataireContexte(): IIdentificationSignataireContexte;
        onSelectionChange(selectedObject: Object): void;
        initSignatairesAIdentifierTable(): void;
        initSignatairesIdentifiesTable(): void;
        /**
         * @ngdoc method
         * @name onHideDetail
         * @description: cette méthode est de l'interface MyWay.UI.ISelectionChangeHandler.
         * Appelé lorsque le détail d'une ligne est cacché
         * @params
         * @returns {}
         */
        onHideDetail(signataire: ISignataire): void;
        /**
         * @ngdoc method
         * @name onShowDetail
         * @description: cette méthode est de l'interface MyWay.UI.ISelectionChangeHandler.
         * Appelé lorsque l'utilisateur sélectionne une ligne par click.
         * @params
         * @returns {}
         */
        onShowDetail(signataire: ISignataire): void;
    }
}

declare module MyWay.IdentificationSignataires {
    interface IPaysInfo {
        indicatifPays: string;
        codePaysIso: string;
        codeZoneResidencePays: string;
        codeResident: string;
        libellePaysNationalite: string;
        codeInseePays: string;
        codePaysIsoAfnor: string;
        codeRisquePaysBdf: string;
        codeInseePaysNationalite: string;
        codeZoneGeoContrepartie: string;
        ageMajoritePays: string;
        codePaysOmc: string;
        libelleInseePays: string;
    }
    class ParticulierInformationService {
        private $q;
        private serviceAgentExtended;
        private static LIBELLES_PAYS_OBJECT_DATA_NAME;
        private static CODE_INSEE_PAYS;
        private static CODE_INSEE_PAYS_NATIONALITE;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getParticulierInformation(codeEtablissementFinancier: string, identifiantPersonne: number): ng.IPromise<any>;
        getSignataire(codeEtablissementFinancier: string, identifiantPersonne: number): ng.IPromise<ISignataire>;
        getSignataires(codeEtablissementFinancier: string, identifiantSignataires: Array<string>): ng.IPromise<Array<ISignataire>>;
        getLibellePaysNaissance(codeEtablissementFinancier: string, codeInseePays: string): ng.IPromise<IPaysInfo>;
        getLibellePaysNationalite(codeEtablissementFinancier: string, codeInseePaysNationalite: string): ng.IPromise<IPaysInfo>;
        getLibellePieceJustificativeIdentite(codeEtablissementFinancier: string, codePieceJustif: string): ng.IPromise<string>;
    }
}

declare module MyWay.IdentificationSignataires {
    interface IChargementLong {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<boolean>;
    }
}

declare module MyWay.IdentificationSignataires {
    /**
     * TODO
     * @author S0076222
     * @version 16.09
     */
    interface IPropriete {
        newValue: boolean;
    }
    class Event {
        private topic;
        private proprietes;
        constructor(topic: string, proprietes: Array<IPropriete>);
    }
}

declare module MyWay.IdentificationSignataires {
    /**
     * La classe IdentificationSignatairesConstants présente les constants à utiliser dans la directive identification signataires.
     * @author S0076222
     * @version 16.09
     */
    class IdentificationSignatairesConstants {
        static TYPE_DOCUMENT_OBJECT_DATA_NAME: string;
        static CGDAPE: string;
        static CONTRACTULISATION_ACTE_KEY_CONTEXT: string;
        static DOSSIER_NUMERIQUE_KEY_CONTEXT: string;
        static CODE_ACTION_RECHERCHE_PJI: string;
        static CODE_TYPE_ACTION_PJI: string;
        static CODE_TYPE_DOCUMENT_BPJI: string;
        static CODE_TYPE_DOCUMENT_DRC_ID: string;
        static CODE_TYPE_DOCUMENT_DRC_IDMI: string;
        static MODE_SIGNATURE_KEY_CONTEXT: string;
        static CODE_APPLICATION: string;
    }
}

declare module MyWay.IdentificationSignataires {
    /**
     * IIdentificationSignataireContexte répresente les données contexte à utiliser dans la directive identification signataires.
     * @author S0076222
     * @version 16.09
     */
    interface IIdentificationSignataireContexte {
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        contractualisationActe: MyWay.IdentificationSignataires.Ressource.ContractualisationActe.IContractualisationActe;
        modeSignature: string;
    }
    class IdentificationSignataireContexte implements IIdentificationSignataireContexte {
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        contractualisationActe: MyWay.IdentificationSignataires.Ressource.ContractualisationActe.IContractualisationActe;
        modeSignature: string;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, contractualisationActe: MyWay.IdentificationSignataires.Ressource.ContractualisationActe.IContractualisationActe, dossierNumerique: MyWay.IdentificationSignataires.Ressource.DossierNumerique.IDossierNumerique);
    }
}

declare module MyWay.IdentificationSignataires {
    /**
     * Cette classe permettant de présenter les messages erreur que la directive identificationSignataires peut retourner.
     * @author S0076222
     * @version 16.05
     */
    class IdentificationSignatairesMessageErreur {
        static RESSOURCE_PIECE_VALIDE_DRC: string;
        static RESSOURCE_PARTICULIER_INFORMATION: string;
        static TYPE_PJI: string;
        static ERREUR_TECHNIQUE: string;
        static PB_GET_CONTRACTUALISATION_ACTE_FROM_CONTEXT: string;
        static PB_ADD_CONTRACTUALISATION_ACTE_TO_CONTEXT: string;
        static PB_GET_DOSSIER_NUMERIQUE_FROM_CONTEXT: string;
        static PB_ADD_DOSSIER_NUMERIQUE_TO_CONTEXT: string;
        static PB_CONTEXT: string;
        static CODE_CANAL_UNDEFINED: string;
        static CODE_ETABLISSEMENT_FINANACIER_UNDEFINED: string;
        static CODE_NATURE_APPEL_QR_UNDEFINED: string;
        static NOMBRE_SIGNATAIRES_ACTE: string;
        static NOMBRE_SIGNATAIRES_ACTE_VIDE: string;
        private messageErreur;
        private messageComplementaire;
        private action;
        private erreurMyWay;
        private classeTypeScript;
        /**
         * @constructor
         */
        constructor(messageErreur: string, action: string, classe?: string, erreurMyWay?: MyWay.Services.Erreur, messageComplementaire?: string);
    }
}

declare module MyWay.IdentificationSignataires {
    /**
     * IdentificationSignatairesEvents présente les évenements envoyés par le composant Identifications signataires.
     * @author S0076222
     * @version 16.09
     */
    class IdentificationSignatairesEvents {
        static IDENTIFIER_SIGNATAIRE_EVENT: string;
        static MODIFIER_SIGNATAIRE_EVENT: string;
        static ANNULER_EVENT: string;
        static VALIDER_EVENT: string;
        static BOUTON_IDENTIFIER_SHOW_EVENT: string;
        static BOUTON_VALIDER_SHOW_EVENT: string;
        static BOUTON_ANNULER_SHOW_EVENT: string;
        static BOUTON_MODIFIER_SHOW_EVENT: string;
        static FIN_IDENTIFICATION_SIGNATAIRES_EVENT: string;
        static START_IDENTIFICATION_SIGNATAIRES_EVENT: string;
    }
    class FinProcessIdenSignProperties {
        contractualisationActe: Ressource.ContractualisationActe.IContractualisationActe;
        modeSignature: string;
        constructor(contractualisationActe: Ressource.ContractualisationActe.IContractualisationActe, modeSignature: string);
    }
}

declare module MyWay.IdentificationSignataires {
    /**
     * IPieceJustificativeIdentite répresente une pièce justificative d'identité.
     * @author S0076222
     * @version 16.05
     */
    interface IPieceJustificativeIdentite {
        typePJI: string;
        reference: string;
        delivreLe: Date;
    }
    class PieceJustificativeIdentite implements IPieceJustificativeIdentite {
        typePJI: string;
        reference: string;
        delivreLe: Date;
        constructor();
    }
}

declare module MyWay.IdentificationSignataires {
    /**
     * L'interface ISignataire répresente le signataire qui est déja identifié ou à identifier.
     * @author S0076222
     * @version 16.05
     */
    interface ISignataire {
        nom: string;
        prenom: string;
        dateNaissance: string;
        localiteNaissance: string;
        autresPrenom: string;
        sexe: string;
        paysNaissance: string;
        nationalite: string;
        nomMarital: string;
        identifiant: string;
        typesPieceJustificativeIdentite: Array<string>;
        pieceJustificativeIdentite: IPieceJustificativeIdentite;
        expanded: boolean;
        estIdentifie: boolean;
        modifiableIndice: string;
        estModifiable: boolean;
    }
    class Signataire implements ISignataire {
        nom: string;
        prenom: string;
        dateNaissance: string;
        localiteNaissance: string;
        autresPrenom: string;
        sexe: string;
        paysNaissance: string;
        nationalite: string;
        nomMarital: string;
        identifiant: string;
        typesPieceJustificativeIdentite: Array<string>;
        pieceJustificativeIdentite: IPieceJustificativeIdentite;
        expanded: boolean;
        estIdentifie: boolean;
        modifiableIndice: string;
        estModifiable: boolean;
        constructor();
    }
}

declare module MyWay.IdentificationSignataires.Utils {
    /**
     * IdentificationSignatairesUtils définit les fonctions utils.
     * @author S0076222
     * @version 16.05
     */
    class IdentificationSignatairesUtils {
        static convertirDateTOYYYYMMDD(date: Date): string;
        static convertirDateTOYYMMDD(date: Date): string;
        static convertirDateTOHHMMSS(date: Date): string;
    }
}

declare module MyWay.Contractualisation.Ressources.ContractualisationActe {
    interface IDocument {
        codeTechniqueImpression: string;
        codeNaturePieceJustificative: string;
        codeTypeJustificatif: string;
        codeNatureGed: string;
        codeTypeIcg: string;
        indicateurDocumentObligatoire: boolean;
        indicateurDocumentVisualisable: boolean;
        indicateurDocumentSupprimable: boolean;
        codeActionDocument: string;
        indicateurDocumentEligibleIcg: boolean;
        indicateurDocumentScellerIcg: boolean;
        indicateurDocumentArchiverIcg: boolean;
        indicateurDocumentAInjecterGed: boolean;
        indicateurDocumentRestituable: boolean;
        ordrePrioriteUtilisation: string;
        typeDocumentContractualisation: string;
        typeAttributaireClasseurClient: string;
        indicateurSignatureBanque: boolean;
        libelleDocumentContractualisation: string;
        listeZoneSignature: Array<IZoneSignature>;
        codeFamilleActe: string;
        codeObjetActe: string;
        indicateurModificationNbExemplaires: string;
        codeTypeSectionRegroupement: string;
        libelleSectionRegroupement: string;
        indicateurDocumentEntreprise: boolean;
        libelleFichierDocumentEntreprise: string;
        libelleExterneDocumentEntreprise: string;
        identifiantGEDDocumentEntreprise: string;
        nbMiniExemplairesDocEdition: number;
        nbMaxiExemplairesDocEdition: number;
        nbExemplairesParDefautEdition: number;
        indicateurMAJNbExemplaires: boolean;
    }
    interface IModeContractualisationActe {
        codeModeContractualisation: string;
        libelleModeContractualisation: string;
        codeStatutContractualisation: string;
        codeTypeSignature: string;
        codeNiveauAuthentification: string;
        indicateurAuthentificationSolSms: boolean;
        indicateurAuthentificationSolCap: boolean;
        indicateurAuthentificationIdentite: boolean;
        codeMaterielCompatible: string;
        libelleMaterielCompatible: string;
        indicateurConsultationDocumentAuth: boolean;
        indicateurRecapitulatifPresentation: boolean;
        indicateurConsultationDocSignature: boolean;
        indicateurConsultationDocRestitution: boolean;
        indicateurTelechargementRestitution: boolean;
        listeDocuments: Array<IDocument>;
        indicateurModeEmploi: boolean;
        indicateurAuthentifiationSMS: boolean;
        indicateurAuthentficationCAP: boolean;
        indicateurAuthentificationPieceIdentite: boolean;
        codeTypeMailConfirmation: string;
        CodeActivationMSI: string;
        codeActionRecherchePJI: string;
        codeActinInhiberChoixSignature: string;
        indicateurRestitutionPapier: boolean;
        indicateurEmissionCRE: string;
        codeRemiseCG: string;
        listePersonne: Array<IPersonne>;
    }
    interface IZoneSignature {
        numeroBlocSignatureDocument: number;
        codeTypeSignataire: string;
        identifiantLabelSignature: string;
        numeroPageDocument: number;
        abscissePositionSignature: number;
        ordonneePositionSignature: number;
        hauteurSignature: number;
        largeurSignature: number;
        libelleTexteZoneSignature: string;
        codeSensAbcisse: string;
        codeSensOrdonnee: string;
    }
    interface IPersonne {
        numeroPersonne: string;
        typeMoyenRestitution: string;
        identifiantCoffreFortNumerique: string;
        adresseEMail: string;
        indicateurAuthentificationSolSms: boolean;
        indicateurAuthentificationSolCap: boolean;
        indicateurAuthentificationIdentite: boolean;
        numeroTelephoneClient: string;
    }
    interface IContractualisationActe {
        indicateurPapier: boolean;
        acteGestion: IActeGestion;
        libelleNonEligibilite: string;
        listeMateriels: Array<IMateriel>;
    }
    interface IDocumentAProduire {
        codeTypeDocument: string;
        codeNaturePJ: string;
        codeTypeJustificatif: string;
        codeNatureGED: string;
        codeTechniqueImpression: string;
        indicateurDocumentObligatoire: boolean;
        indicateurNonMaterialisation: boolean;
        codeTypeAttributaireDocument: string;
        libelleDocumentContractualisation: string;
        codeApplicationTechniqueEdition: string;
        codeMaquette: string;
        indicateurDocumentEntreprise: boolean;
        libelleDocumentEntreprise: string;
        libelleExterneDocumentEntreprise: string;
        identifiantDocumentGED: string;
        codeTypeDocumentICG: string;
        codeTypeFichier: string;
        codeActionSignatureDocument: string;
        indicateurPartageDocumentICG: boolean;
        indicateurClasseEligibleSignature: boolean;
        codeModeUsage: number;
        codeFamilleActe: string;
        codeObjetActe: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        libelleDescriptionDocument: string;
        listeSignataireDocument: Array<ISignataireDocument>;
        codeClasseDocumentEntreprise: string;
    }
    interface ISignataireActe {
        numeroPersonne: string;
        identifiantJustificatifIdentite: string;
        adresseMailSign: string;
        rangSign: number;
        codeTypeSignataire: string;
        codeRoleSignataire: string;
    }
    interface IContractualisationActeInput {
        acteGestion: IActeGestion;
        indicateurAgenceDeployee: boolean;
        listeMateriels: Array<IMateriel>;
        indicateurCaisseAuto: boolean;
    }
    interface IMateriel {
        typePeripherique: number;
        type: string;
        modele: string;
        codeModele: string;
    }
    interface ITitulaireActe {
        numeroPersonne: string;
        adresseMail: string;
    }
    interface ISignataireDocument {
        optionsSignataire: IOptionSignataire;
        codeTypeSignataire: string;
        numeroAffichageDocument: number;
        codeIndicateurSignature: boolean;
    }
    interface IOptionSignataire {
        idOptSignr: string;
        msgOptSignr: string;
    }
    interface IActeGestion {
        libelleActe: string;
        codeActeGestion: string;
        codeEtablissementFinancier: string;
        numeroEntiteTitulaire: string;
        codeCanal: string;
        codeModeMiseGestion: string;
        codeTypeMarcheEntreprise: string;
        identifiantActeIDN: string;
        modeVersementOperationFinanciere: string;
        codeGuichet: string;
        topFAFGXML: boolean;
        identifiantActeExterne: string;
        identifiantAgence: string;
        identifiantAgent: string;
        referenceContrat: string;
        referenceActeProducteur: string;
        codeEntite: string;
        referenceOffre: string;
        referenceContratCarte: string;
        listeDocumentAProduire: Array<IDocumentAProduire>;
        listeModeContractualisation: Array<IModeContractualisationActe>;
        listeActeSecondaires: Array<string>;
        listeSignatairesActe: Array<ISignataireActe>;
        listeTitulairesActe: Array<ITitulaireActe>;
        codeTypeProduit: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentAProduireRequestFactory {
        constructor();
        createDocumentAProduireFromDocumentActe(documentActe: MyWay.Contractualisation.Ressources.DocumentParametre.IDocumentActe): MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentParametreConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    interface IDocumentParametre {
        listeDocumentActe: Array<IDocumentActe>;
        codeEtablissementFinancier: string;
        codeModeMiseGestion: string;
        codeCanal: string;
        codeTypeMarcheEntreprise: string;
        listeActes: Array<string>;
    }
    interface IDocumentActe {
        codeTypeDocument: string;
        codeNaturePJ: string;
        codeTypeJustificatif: string;
        codeNatureGED: string;
        codeTechniqueImpression: string;
        indicateurDocumentObligatoire: boolean;
        indicateurNonMaterialisation: boolean;
        codeTypeAttributaireDocument: string;
        codeApplicationTechniqueEdition: string;
        codeMaquette: string;
        indicateurDocumentEntreprise: boolean;
        libelleDocumentEntreprise: string;
        libelleExterneDocumentEntreprise: string;
        identifiantDocumentGED: string;
        codeTypeDocumentICG: string;
        codeTypeFichier: string;
        codeModeContractualisation: string;
        codeActionSignatureDocument: string;
        indicateurPartageDocumentICG: boolean;
        codeFamilleActe: string;
        codeObjetActe: string;
        libelleDocumentContract: string;
        indicClasseEligibleSignature: boolean;
        codeClasseDocumentEntreprise: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentParametreRequestFactory {
        constructor();
        create(listeActes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheDocumentEntreprise: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class DossierCanalNumeriqueConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    interface IQstnSegmentActeGestion {
        acteGestionClasseurClient: string;
        acteGestionArcade: string;
        topActeGestionPrincipal: string;
        idOffre: number;
        compte: string;
        codeIPR: string;
        isMAJDrcDemandee: string;
        nodapeTitulaire: number;
        codeAgent: number;
        codeEtablissement: string;
        codeClientBancaire: number;
        referenceInterneEDS: number;
        codeTypeEDS: string;
        referenceExterneEDS: number;
        codeApplication: string;
        codeGuichet: string;
        codeCanal: string;
        idIDN: string;
        modeContract: string;
        typeDRC: string;
    }
    interface IDossierCanalNumeriqueOutput {
        isValide: boolean;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class DossierCanalNumeriqueRequestFactory {
        private methode;
        private listeQstnSegmentActeGestion;
        constructor(methode: MyWay.Services.MethodEnum, listeQstnSegmentActeGestion: Array<IQstnSegmentActeGestion>);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class QstnSegmentActeGestionFactory {
        private static CODE_APPLICATION;
        private static CODE_NATURE_PJ;
        private static CODE_TYPE_JUSTIFICATIF;
        constructor();
        createQstnSegmentActeGestionFromActeGestion(acteGestion: MyWay.Contractualisation.Ressources.ContractualisationActe.IActeGestion, codeActeGestion: string, isActeGestionPrincipal: boolean, indicateurPapier: boolean, compte: string, referenceInterneEDS: string, codeTypeEDS: string, referenceExterneEDS: string): IQstnSegmentActeGestion;
        createListeQstnSegmentActeGestionFromActeGestion(acteGestion: MyWay.Contractualisation.Ressources.ContractualisationActe.IActeGestion, indicateurPapier: boolean, compte: string, referenceInterneEDS: string, codeTypeEDS: string, referenceExterneEDS: string): Array<IQstnSegmentActeGestion>;
        private getTopActeGestionPrincipal(isActeGestionPrincipal);
        private getModeContract(indicateurPapier, codeCanal);
        private getNodapeTitulaire(acteGestion);
        private getActeGestionArcade(acteGestion);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class CodeEvenementMetierFactory {
        private static CODE_APPLICATION;
        constructor();
        createCodeEvenementMetierFromCodeActeGestion(codeActeGestion: string): ICodeEvenementMetier;
        createListeCodeEvenementMetierFromListeActeSecondaires(listeActeSecondaires: Array<string>): Array<ICodeEvenementMetier>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratFactory {
        private static CODE_APPLICATION;
        constructor();
        createDossierContratFromActeGestion(acteGestion: MyWay.Contractualisation.Ressources.ContractualisationActe.IActeGestion, indicateurPapier: boolean, referenceExterneEDS: string, codeElementDeStructure: string): IDonneesDossierContrat;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    interface IDonneesDossierContrat {
        codeEtablissement: string;
        codeGuichet: string;
        clientBancaire: number;
        identifiantContrat: string;
        codeElementDeStructure: string;
        codeApplication: string;
        referenceExterneEDS: string;
        codeEvenementMetierPrincipal: ICodeEvenementMetier;
        listCodeEvenementMetier: Array<ICodeEvenementMetier>;
    }
    interface IEligibiliteResponse {
        IdentifiantPorteur: string;
        typePorteur: string;
        codeEtablissement: string;
        libelle: string;
        codeMotifOF: string;
        codeMotif: string;
    }
    interface IInfoClientBancaire {
        numero: string;
        libelleCourt: string;
    }
    interface ICodeEvenementMetier {
        code: string;
    }
    interface IEvenementMetier {
        libelle: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        codeFamilleActeGestion: string;
        codeObjetActeGestion: string;
        codeActeGestion: string;
        codeSousFamilleActeGestion: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratRequestFactory {
        private methode;
        private donneesDossierContrat;
        constructor(methode: MyWay.Services.MethodEnum, donneesDossierContrat: IDonneesDossierContrat);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ActeFactory {
        constructor();
        createActeFromContractualisationActe(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe): IActe;
        private getCodeTypeActionMSI(contractualisationActe);
        private getCodeTypeActionPJI(contractualisationActe);
        private getCodeTypeActionContrat(contractualisationActe);
        private getCodeTypeActionCRE(contractualisationActe);
        private getCodeMailSignataire(contractualisationActe);
        private getDateFinValiditeActe();
        private getTopFAFGXML();
        private getListeReferenceActe(referenceOffre, referenceContratCarte);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ComportementSignatureDocumentFactory {
        constructor();
        createComportementSignatureDocumentFromDocumentAProduire(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): IComportementSignatureDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ContenuDocumentAlternatifFactory {
        constructor();
        createContenuDocumentAlternatifFromDocumentAProduire(documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): IContenuDocumentAlternatif;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ContenuDocumentFactory {
        constructor();
        createContenuDocumentFromDocumentAProduire(documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): IContenuDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class DocumentFactory {
        constructor();
        createDocumentFromDocumentAProduire(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): IDocument;
        createListeDocumentFromContractualisationActe(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe): Array<IDocument>;
        private getReferenceDocumentProducteur(contractualisationActe, documentAProduire);
        private getReferenceDocumentProducteurContractuel(identifiantAgent, indice);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class DossierNumeriqueConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class DossierNumeriqueFactory {
        private static CODE_APPLICATION;
        constructor();
        createDossierNumeriqueFromContractualisationActe(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe): IDossierNumerique;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    interface IActe {
        libelleActe: string;
        codeActe: string;
        codeEntite: string;
        codeCanal: string;
        dateFinValiditeActe: Date;
        codeMailSignataire: string;
        codeGuichet: string;
        topFAFGXML: boolean;
        identifiantActeExterne: string;
        identifiantAgence: string;
        identifiantAgent: string;
        referenceContrat: string;
        referenceActeProducteur: string;
        codeTypeActionContrat: string;
        libelleMotifNonEligibilite: string;
        numreroEntiteTitulaire: string;
        codeMessageConsentement: string;
        codeTypeActionMSI: string;
        codeTypeActionPJI: string;
        codeTypeActionCRE: string;
        identifiantActeIDN: string;
        listeSignataire: Array<ISignataire>;
        listeTitulaire: Array<ITitulaire>;
        listeReferenceActe: Array<IReferenceActe>;
        listeOperationFinanciere: Array<IOperationFinanciere>;
        suiviActe: ISuiviActe;
    }
    interface IReferenceActe {
        typeReferenceActe: string;
        valReferenceActe: string;
    }
    interface ITitulaire {
        idPersonne: string;
        adresseMailContr: string;
    }
    interface IFluxGCEDoc {
        nomModeleGcedoc: string;
        fluxXmlGcedoc: string;
    }
    interface IFluxBinaire {
        documentElectronique: string;
    }
    interface IFluxFilenet {
        identifiantComposantApplicatif: string;
        identifiantGEDDocument: string;
    }
    interface IFluxGedTemporaire {
        identifiantComposantApplicatif: string;
        identifiantDocumentTemporaire: string;
    }
    interface IFluxDocPartageICG {
        referencePartage: string;
    }
    interface IFluxXHTML {
        contenuDocumentAlternatif: string;
    }
    interface IFluxLignes {
        ligne1DocumentAlternatif: string;
        ligne2DocumentAlternatif: string;
        ligne3DocumentAlternatif: string;
        ligne4DocumentAlternatif: string;
        ligne5DocumentAlternatif: string;
        ligne6DocumentAlternatif: string;
        ligne7DocumentAlternatif: string;
        ligne8DocumentAlternatif: string;
        ligne9DocumentAlternatif: string;
        ligne10DocumentAlternatif: string;
    }
    interface IDocument {
        nomDocument: string;
        identifiantDocumentIDN: string;
        referenceDocumentProducteur: string;
        donneesStockageDocument: IStockageDocument;
        donneesContenuDocument: IContenuDocument;
        donneesDocumentAlternatif: IContenuDocumentAlternatif;
        donneesComportementSignatureDocument: IComportementSignatureDocument;
    }
    interface ISignataire {
        codeTypeSignr: string;
        idPersonne: string;
        adresseMailContr: string;
        idJustificatifIdGed: string;
        rangSignr: number;
    }
    interface IOptionSignataire {
        idOptSignr: string;
        msgOptSignr: string;
    }
    interface IContenuDocument {
        fluxBinaire: IFluxBinaire;
        fluxGCEDoc: IFluxGCEDoc;
        fluxFilenet: IFluxFilenet;
        fluxGedTemporaire: IFluxGedTemporaire;
        fluxDocPartageICG: IFluxDocPartageICG;
    }
    interface IContenuDocumentAlternatif {
        fluxXHTML: IFluxXHTML;
        listeFluxLignes: Array<IFluxLignes>;
    }
    interface IStockageDocument {
        codeTypeFichier: string;
        codeTypeAttributaire: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        identifiantNaturePieceJointe: string;
        libelleDescriptionDocument: string;
        codeForcageAccessibilite: number;
    }
    interface ISignatureEntite {
        codeTypeSignataire: string;
        identifiantEntiteSignataire: string;
        numeroPageDocument: number;
        numeroAbscisseSignature: number;
        numeroOrdonneeSignature: number;
        hauteurSignature: number;
        largeurSignature: number;
        imageSignatureEntite: string;
    }
    interface ISignatureClient {
        codeTypeSignr: string;
        numeroOrdreSigne: number;
        lablSigne: string;
        numeroPageDoc: number;
        numeroAbscSigne: number;
        numeroOrdnSigne: number;
        hautSigne: number;
        largSigne: number;
    }
    interface ISignataireDocument {
        optionsSignataire: IOptionSignataire;
        codeTypeSignataire: string;
        numeroAffichageDocument: number;
        codeIndicateurSignature: boolean;
    }
    interface IImpressionDoc {
        exmpImpr: number;
        exmpImprMinimum: number;
        exmpImprMaximum: number;
    }
    interface IInfoDocument {
        codeTypeDocument: string;
        typeMimDocument: string;
        labelDocument: string;
        modeUsageDocument: string;
        referenceContratProducteur: string;
        referenceContratDistributeur: string;
        libelleDescriptionDocumentIDN: string;
        libelleSectionRegroupement: string;
    }
    interface IOperationFinanciere {
        libelleClientOpe: string;
        libelleCompteOpe: string;
        dtOpe: Date;
        montantOpe: number;
        natureOpe: string;
        idPersonne: string;
    }
    interface IDossierNumerique {
        acte: IActe;
        codeApplication: string;
        codeEtablissementFinancier: string;
        listeDocument: Array<IDocument>;
    }
    interface IComportementSignatureDocument {
        descriptionDocument: IInfoDocument;
        impressionDocument: IImpressionDoc;
        listeSignataireDocument: Array<ISignataireDocument>;
        listeSignatureClient: Array<ISignatureClient>;
        listeSignatureEntite: Array<ISignatureEntite>;
    }
    interface ISuiviActe {
        codeEtatActe: string;
        identifiantTransactionICG: string;
        codeModeContractualisation: string;
        dateContractualisation: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class DossierNumeriqueRequestFactory {
        private methode;
        private dossierNumerique;
        constructor(methode: MyWay.Services.MethodEnum, dossierNumerique: IDossierNumerique);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxBinaireFactory {
        constructor();
        createFluxBinaireFromDocumentAProduire(): IFluxBinaire;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxDocPartageICGFactory {
        constructor();
        createFluxDocPartageICG(documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): IFluxDocPartageICG;
        private getReferencePartage(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxFilenetFactory {
        private static TYPE_DOCUMENT_CCSE;
        private static GED_DOCUMENT_CCSE;
        private static IDENTIFIANT_COMPOSANT_APPLICATIF;
        constructor();
        createFluxFilenet(documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): IFluxFilenet;
        private getIdentifiantComposantApplicatif(documentAProduire);
        private getIdentifiantGEDDocument(documentAProduire, codeEtablissementFinancier);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxGCEDocFactory {
        constructor();
        createFluxGCEDoc(nomModeleGcedoc: string, fluxXmlGcedoc: string): IFluxGCEDoc;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxGedTemporaireFactory {
        private static IDENTIFIANT_COMPOSANT_APPLICATIF;
        constructor();
        createFluxGedTemporaireFromDocumentAProduire(documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): IFluxGedTemporaire;
        private getIdentifiantDocumentTemporaire(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxLignesFactory {
        constructor();
        createFluxLignesFromDocumentAProduire(): IFluxLignes;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxXHTMLFactory {
        constructor();
        createFluxXHTMLFromDocumentAProduire(): IFluxXHTML;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ImpressionDocFactory {
        constructor();
        createImpressionDocFromDocumentAProduire(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): IImpressionDoc;
        private getExmpImpr(contractualisationActe, codeTypeDocument);
        private getExmpImprMinimum(contractualisationActe, codeTypeDocument);
        private getexmpImprMaximum(contractualisationActe, codeTypeDocument);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class InfoDocumentFactory {
        private static TYPE_DOCUMENT_CCSE;
        private static LABEL_DOCUMENT_CCSE;
        private static LIBELLE_DESCRIPTION_DOCUMENT_IDN_CCSE;
        private static TYPE_MIME_DOCUMENT;
        constructor();
        createInfoDocumentFromDocumentAProduire(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): IInfoDocument;
        private getLibelleSectionRegroupement(contractualisationActe, codeTypeDocument);
        private getLabelDocument(documentAProduire);
        private getLibelleDescriptionDocumentIDN(documentAProduire);
        private getModeUsageDocument(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class OperationFinanciereFactory {
        constructor();
        createOperationFinanciereFromContractualisationActe(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe): IOperationFinanciere;
        createListeOperationFinanciere(): Array<IOperationFinanciere>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class OptionSignataireFactory {
        constructor();
        createOptionSignataireFromDocumentAProduire(optionSignataire: MyWay.Contractualisation.Ressources.ContractualisationActe.IOptionSignataire): IOptionSignataire;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ReferenceActeFactory {
        static TYPE_REFERENCE_ACTE_E01: string;
        static TYPE_REFERENCE_ACTE_E02: string;
        constructor();
        createReferenceActe(typeReferenceActe: string, valReferenceActe: string): IReferenceActe;
        createListeReferenceActe(typeReferenceActe: string, valReferenceActe: string): Array<IReferenceActe>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignataireDocumentFactory {
        private static TYPE_DOCUMENT_CCSE;
        constructor();
        createSignataireDocumentFromSignataireDocument(signataireDocument: MyWay.Contractualisation.Ressources.ContractualisationActe.ISignataireDocument, numeroAffichageDocument: number): ISignataireDocument;
        createListeSignataireDocumentFromDocumentAProduire(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe, documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): Array<ISignataireDocument>;
        private getCodeTypeSignataire(signataireDocument, codeTypeDocument);
        private getCodeIndicateurSignature(signataireDocument, codeTypeDocument);
        private getNumeroAffichageDocument(contractualisationActe, documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignataireFactory {
        constructor();
        createSignataireFromSignataireActe(signataireActe: MyWay.Contractualisation.Ressources.ContractualisationActe.ISignataireActe): ISignataire;
        createListeSignataireFromListeSignataireeActe(listeSignataireActe: Array<MyWay.Contractualisation.Ressources.ContractualisationActe.ISignataireActe>): Array<ISignataire>;
        private getCodeTypeSignr(codeTypeSignataire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignatureClientFactory {
        constructor();
        createSignatureClientFromDocumentAProduire(documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): ISignatureClient;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignatureEntitetFactory {
        constructor();
        createSignatureEntiteFromDocumentAProduire(documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): ISignatureEntite;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class StockageDocumentFactory {
        private static TYPE_DOCUMENT_CCSE;
        private static LIBELLE_DOCUMENT_CCSE;
        constructor();
        createStockageDocumentFromDocumentAProduire(documentAProduire: MyWay.Contractualisation.Ressources.ContractualisationActe.IDocumentAProduire): IStockageDocument;
        private getLibelleDescriptionDocument(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SuiviActeFactory {
        constructor();
        createSuiviActeFromContractualisationActe(contractualisationActe: MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe): ISuiviActe;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class TitulaireFactory {
        constructor();
        createTitulaireFromTitulaireActe(titulaireActe: MyWay.Contractualisation.Ressources.ContractualisationActe.ITitulaireActe): ITitulaire;
        createListeTitulaireFromListeTitulaireActe(listeTitulaireActe: Array<MyWay.Contractualisation.Ressources.ContractualisationActe.ITitulaireActe>): Array<ITitulaire>;
    }
}

declare module MyWay.IdentificationSignataires.BPJIDocument {
    interface ISIPRGCE_BORDEREAUPJI {
        GENERIC_ENTETEETS: MyWay.IdentificationSignataires.BPJIDocument.SIPRGCE_BORDEREAUPJIGENERIC_ENTETEETS[];
        SECTION1: MyWay.IdentificationSignataires.BPJIDocument.SIPRGCE_BORDEREAUPJISECTION1[];
        GENERIC_PIEDPAGEETS: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIPRGCE_BORDEREAUPJIGENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: MyWay.IdentificationSignataires.BPJIDocument.SIPRGCE_BORDEREAUPJIGENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface SIPRGCE_BORDEREAUPJIGENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface SIPRGCE_BORDEREAUPJISECTION1 {
        _blocChoice_: (choice_SIPRGCE_BORDEREAUPJISECTION1_BL_DONNEES | choice_SIPRGCE_BORDEREAUPJISECTION1_BL_TITRE | choice_SIPRGCE_BORDEREAUPJISECTION1_GENERIC_SIGNAT_SANS_CNIL)[];
    }
    interface choice_SIPRGCE_BORDEREAUPJISECTION1_BL_DONNEES {
        BL_DONNEES: SIPRGCE_BORDEREAUPJISECTION1BL_DONNEES;
    }
    interface choice_SIPRGCE_BORDEREAUPJISECTION1_BL_TITRE {
        BL_TITRE: number;
    }
    interface choice_SIPRGCE_BORDEREAUPJISECTION1_GENERIC_SIGNAT_SANS_CNIL {
        GENERIC_SIGNAT_SANS_CNIL: GENERIC_SIGNAT_SANS_CNIL;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB10175[];
        b13135: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB13135[];
        b13705: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB13705[];
        b14445: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB14445[];
        b14505: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB14505[];
        b15135: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB15135[];
        b15905: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB15905[];
        b15965: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB15965[];
        b16275: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB16275[];
        b18025: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB18025[];
        b18279: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB18279[];
        b43199: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB43199[];
        b18715: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB18715[];
        b13335: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB13335[];
        b17515: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB17515[];
        b62108: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB62108[];
        b12579: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB12579[];
        b13825: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB13825[];
        b16705: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB16705[];
        b12135: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB12135[];
        b14265: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB14265[];
        b13485: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB13485[];
        b18315: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB18315[];
        b11315: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB11315[];
        b11425: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB11425[];
        b12548: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB12548[];
        b30051: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETSB30051[];
    }
    interface GENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13135 {
        d13135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14445 {
        d14445_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15135 {
        d15135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18025 {
        d18025_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13335 {
        d13335_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB62108 {
        d62108_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13825 {
        d13825_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12135 {
        d12135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13485 {
        d13485_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11315 {
        d11315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12548 {
        d12548_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
    }
    interface GENERIC_SIGNAT_SANS_CNIL {
        LIB_DELADU_ETS: string;
        PRENOM_NOM_AGENT: string;
    }
    interface SIPRGCE_BORDEREAUPJISECTION1BL_DONNEES {
        OFFRE: string;
        TYPE_JUSTIF_ID: string;
        REF_JUSTIF_ID: string;
        DATE_DELIV_JUSTIF: string;
        NOM: string;
        PRENOM: string;
        DATE_NAISS: string;
        PAYS_NAISS: string;
        LIEU_NAISS: string;
        NATIONALITE: string;
        NOM_MARITAL: string;
        SEXE: string;
    }
    class SIPRGCE_BORDEREAUPJI implements ISIPRGCE_BORDEREAUPJI {
        GENERIC_ENTETEETS: MyWay.IdentificationSignataires.BPJIDocument.SIPRGCE_BORDEREAUPJIGENERIC_ENTETEETS[];
        SECTION1: MyWay.IdentificationSignataires.BPJIDocument.SIPRGCE_BORDEREAUPJISECTION1[];
        GENERIC_PIEDPAGEETS: MyWay.IdentificationSignataires.BPJIDocument.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIPRGCE_BORDEREAUPJIGenerationParams {
        private codeNatureGed;
        private identifiantSignataire;
        private nomSignataire;
        private prenomSignataire;
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        private static CODE_TYPE_STOCKAGE;
        private static CODE_TYPE_ATTRIBUTAIRE;
        constructor(codeNatureGed: string, identifiantSignataire: string, nomSignataire: string, prenomSignataire: string);
        private getInttAttr();
    }
    class SIPRGCE_BORDEREAUPJIImpressionParams {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class SIPRGCE_BORDEREAUPJIGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

declare module MyWay.IdentificationSignataires.BPJIDocument {
    function createDocument(signataire: MyWay.IdentificationSignataires.ISignataire): SIPRGCE_BORDEREAUPJI;
}

declare module MyWay.IdentificationSignataires.Ressource.DossierNumerique {
    class DossierNumeriqueConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.DossierNumerique {
    interface IActe {
        libelleActe: string;
        codeActe: string;
        codeEntite: string;
        codeCanal: string;
        dateFinValiditeActe: Date;
        codeMailSignataire: string;
        codeGuichet: string;
        topFAFGXML: boolean;
        identifiantActeExterne: string;
        identifiantAgence: string;
        identifiantAgent: string;
        referenceContrat: string;
        referenceActeProducteur: string;
        codeTypeActionContrat: string;
        libelleMotifNonEligibilite: string;
        numreroEntiteTitulaire: string;
        codeMessageConsentement: string;
        codeTypeActionMSI: string;
        codeTypeActionPJI: string;
        codeTypeActionCRE: string;
        identifiantActeIDN: string;
        listeSignataire: Array<ISignataire>;
        listeTitulaire: Array<ITitulaire>;
        listeReferenceActe: Array<IReferenceActe>;
        listeOperationFinanciere: Array<IOperationFinanciere>;
        suiviActe: ISuiviActe;
    }
    interface IReferenceActe {
        typeReferenceActe: string;
        valReferenceActe: string;
    }
    interface ITitulaire {
        idPersonne: string;
        adresseMailContr: string;
    }
    interface IFluxGCEDoc {
        nomModeleGcedoc: string;
        fluxXmlGcedoc: string;
    }
    interface IFluxBinaire {
        documentElectronique: string;
    }
    interface IFluxFilenet {
        identifiantComposantApplicatif: string;
        identifiantGEDDocument: string;
    }
    interface IFluxGedTemporaire {
        identifiantComposantApplicatif: string;
        identifiantDocumentTemporaire: string;
    }
    interface IFluxDocPartageICG {
        referencePartage: string;
    }
    interface IFluxXHTML {
        contenuDocumentAlternatif: string;
    }
    interface IFluxLignes {
        ligne1DocumentAlternatif: string;
        ligne2DocumentAlternatif: string;
        ligne3DocumentAlternatif: string;
        ligne4DocumentAlternatif: string;
        ligne5DocumentAlternatif: string;
        ligne6DocumentAlternatif: string;
        ligne7DocumentAlternatif: string;
        ligne8DocumentAlternatif: string;
        ligne9DocumentAlternatif: string;
        ligne10DocumentAlternatif: string;
    }
    interface IDocument {
        nomDocument: string;
        identifiantDocumentIDN: string;
        referenceDocumentProducteur: string;
        donneesStockageDocument: IStockageDocument;
        donneesContenuDocument: IContenuDocument;
        donneesDocumentAlternatif: IContenuDocumentAlternatif;
        donneesComportementSignatureDocument: IComportementSignatureDocument;
    }
    interface ISignataire {
        codeTypeSignr: string;
        idPersonne: string;
        adresseMailContr: string;
        idJustificatifIdGed: string;
        rangSignr: number;
    }
    interface IOptionSignataire {
        idOptSignr: string;
        msgOptSignr: string;
    }
    interface IContenuDocument {
        fluxBinaire: IFluxBinaire;
        fluxGCEDoc: IFluxGCEDoc;
        fluxFilenet: IFluxFilenet;
        fluxGedTemporaire: IFluxGedTemporaire;
        fluxDocPartageICG: IFluxDocPartageICG;
    }
    interface IContenuDocumentAlternatif {
        fluxXHTML: IFluxXHTML;
        listeFluxLignes: Array<IFluxLignes>;
    }
    interface IStockageDocument {
        codeTypeFichier: string;
        codeTypeAttributaire: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        identifiantNaturePieceJointe: string;
        libelleDescriptionDocument: string;
        codeForcageAccessibilite: number;
    }
    interface ISignatureEntite {
        codeTypeSignataire: string;
        identifiantEntiteSignataire: string;
        numeroPageDocument: number;
        numeroAbscisseSignature: number;
        numeroOrdonneeSignature: number;
        hauteurSignature: number;
        largeurSignature: number;
        imageSignatureEntite: string;
    }
    interface ISignatureClient {
        codeTypeSignr: string;
        numeroOrdreSigne: number;
        lablSigne: string;
        numeroPageDoc: number;
        numeroAbscSigne: number;
        numeroOrdnSigne: number;
        hautSigne: number;
        largSigne: number;
    }
    interface ISignataireDocument {
        optionsSignataire: IOptionSignataire;
        codeTypeSignataire: string;
        numeroAffichageDocument: number;
        codeIndicateurSignature: boolean;
    }
    interface IImpressionDoc {
        exmpImpr: number;
        exmpImprMinimum: number;
        exmpImprMaximum: number;
    }
    interface IInfoDocument {
        codeTypeDocument: string;
        typeMimDocument: string;
        labelDocument: string;
        modeUsageDocument: string;
        referenceContratProducteur: string;
        referenceContratDistributeur: string;
        libelleDescriptionDocumentIDN: string;
        libelleSectionRegroupement: string;
    }
    interface IOperationFinanciere {
        libelleClientOpe: string;
        libelleCompteOpe: string;
        dtOpe: Date;
        montantOpe: number;
        natureOpe: string;
        idPersonne: string;
    }
    interface IDossierNumerique {
        acte: IActe;
        codeApplication: string;
        codeEtablissementFinancier: string;
        listeDocument: Array<IDocument>;
    }
    interface IComportementSignatureDocument {
        descriptionDocument: IInfoDocument;
        impressionDocument: IImpressionDoc;
        listeSignataireDocument: Array<ISignataireDocument>;
        listeSignatureClient: Array<ISignatureClient>;
        listeSignatureEntite: Array<ISignatureEntite>;
    }
    interface ISuiviActe {
        codeEtatActe: string;
        identifiantTransactionICG: string;
        codeModeContractualisation: string;
        dateContractualisation: string;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.DossierNumerique {
    class DossierNumeriqueRequestFactory {
        private methode;
        private dossierNumerique;
        constructor(methode: MyWay.Services.MethodEnum, dossierNumerique: IDossierNumerique);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.ContractualisationActe {
    interface IDocument {
        codeTechniqueImpression: string;
        codeNaturePieceJustificative: string;
        codeTypeJustificatif: string;
        codeNatureGed: string;
        codeTypeIcg: string;
        indicateurDocumentObligatoire: boolean;
        indicateurDocumentVisualisable: boolean;
        indicateurDocumentSupprimable: boolean;
        codeActionDocument: string;
        indicateurDocumentEligibleIcg: boolean;
        indicateurDocumentScellerIcg: boolean;
        indicateurDocumentArchiverIcg: boolean;
        indicateurDocumentAInjecterGed: boolean;
        indicateurDocumentRestituable: boolean;
        ordrePrioriteUtilisation: string;
        typeDocumentContractualisation: string;
        typeAttributaireClasseurClient: string;
        indicateurSignatureBanque: boolean;
        libelleDocumentContractualisation: string;
        listeZoneSignature: Array<IZoneSignature>;
        codeFamilleActe: string;
        codeObjetActe: string;
        indicateurModificationNbExemplaires: string;
        codeTypeSectionRegroupement: string;
        libelleSectionRegroupement: string;
        indicateurDocumentEntreprise: boolean;
        libelleFichierDocumentEntreprise: string;
        libelleExterneDocumentEntreprise: string;
        identifiantGEDDocumentEntreprise: string;
        nbMiniExemplairesDocEdition: number;
        nbMaxiExemplairesDocEdition: number;
        nbExemplairesParDefautEdition: number;
        indicateurMAJNbExemplaires: boolean;
    }
    interface IModeContractualisationActe {
        codeModeContractualisation: string;
        libelleModeContractualisation: string;
        codeStatutContractualisation: string;
        codeTypeSignature: string;
        codeNiveauAuthentification: string;
        indicateurAuthentificationSolSms: boolean;
        indicateurAuthentificationSolCap: boolean;
        indicateurAuthentificationIdentite: boolean;
        codeMaterielCompatible: string;
        libelleMaterielCompatible: string;
        indicateurConsultationDocumentAuth: boolean;
        indicateurRecapitulatifPresentation: boolean;
        indicateurConsultationDocSignature: boolean;
        indicateurConsultationDocRestitution: boolean;
        indicateurTelechargementRestitution: boolean;
        listeDocuments: Array<IDocument>;
        indicateurModeEmploi: boolean;
        indicateurAuthentifiationSMS: boolean;
        indicateurAuthentficationCAP: boolean;
        indicateurAuthentificationPieceIdentite: boolean;
        codeTypeMailConfirmation: string;
        CodeActivationMSI: string;
        codeActionRecherchePJI: string;
        codeActinInhiberChoixSignature: string;
        indicateurRestitutionPapier: boolean;
        indicateurEmissionCRE: string;
        codeRemiseCG: string;
        listePersonne: Array<IPersonne>;
    }
    interface IZoneSignature {
        numeroBlocSignatureDocument: number;
        codeTypeSignataire: string;
        identifiantLabelSignature: string;
        numeroPageDocument: number;
        abscissePositionSignature: number;
        ordonneePositionSignature: number;
        hauteurSignature: number;
        largeurSignature: number;
        libelleTexteZoneSignature: string;
        codeSensAbcisse: string;
        codeSensOrdonnee: string;
    }
    interface IPersonne {
        numeroPersonne: string;
        typeMoyenRestitution: string;
        identifiantCoffreFortNumerique: string;
        adresseEMail: string;
        indicateurAuthentificationSolSms: boolean;
        indicateurAuthentificationSolCap: boolean;
        indicateurAuthentificationIdentite: boolean;
        numeroTelephoneClient: string;
    }
    interface IContractualisationActe {
        indicateurPapier: boolean;
        acteGestion: IActeGestion;
        libelleNonEligibilite: string;
        listeMateriels: Array<IMateriel>;
    }
    interface IDocumentAProduire {
        codeTypeDocument: string;
        codeNaturePJ: string;
        codeTypeJustificatif: string;
        codeNatureGED: string;
        codeTechniqueImpression: string;
        indicateurDocumentObligatoire: boolean;
        indicateurNonMaterialisation: boolean;
        codeTypeAttributaireDocument: string;
        libelleDocumentContractualisation: string;
        codeApplicationTechniqueEdition: string;
        codeMaquette: string;
        indicateurDocumentEntreprise: boolean;
        libelleDocumentEntreprise: string;
        libelleExterneDocumentEntreprise: string;
        identifiantDocumentGED: string;
        codeTypeDocumentICG: string;
        codeTypeFichier: string;
        codeActionSignatureDocument: string;
        indicateurPartageDocumentICG: boolean;
        indicateurClasseEligibleSignature: boolean;
        codeModeUsage: number;
        codeFamilleActe: string;
        codeObjetActe: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        libelleDescriptionDocument: string;
        listeSignataireDocument: Array<ISignataireDocument>;
        codeClasseDocumentEntreprise: string;
    }
    interface ISignataireActe {
        numeroPersonne: string;
        identifiantJustificatifIdentite: string;
        adresseMailSign: string;
        rangSign: number;
        codeTypeSignataire: string;
        codeRoleSignataire: string;
    }
    interface IContractualisationActeInput {
        acteGestion: IActeGestion;
        indicateurAgenceDeployee: boolean;
        listeMateriels: Array<IMateriel>;
        indicateurCaisseAuto: boolean;
    }
    interface IMateriel {
        typePeripherique: number;
        type: string;
        modele: string;
        codeModele: string;
    }
    interface ITitulaireActe {
        numeroPersonne: string;
        adresseMail: string;
    }
    interface ISignataireDocument {
        optionsSignataire: IOptionSignataire;
        codeTypeSignataire: string;
        numeroAffichageDocument: number;
        codeIndicateurSignature: boolean;
    }
    interface IOptionSignataire {
        idOptSignr: string;
        msgOptSignr: string;
    }
    interface IActeGestion {
        libelleActe: string;
        codeActeGestion: string;
        codeEtablissementFinancier: string;
        numeroEntiteTitulaire: string;
        codeCanal: string;
        codeModeMiseGestion: string;
        codeTypeMarcheEntreprise: string;
        identifiantActeIDN: string;
        modeVersementOperationFinanciere: string;
        codeGuichet: string;
        topFAFGXML: boolean;
        identifiantActeExterne: string;
        identifiantAgence: string;
        identifiantAgent: string;
        referenceContrat: string;
        referenceActeProducteur: string;
        codeEntite: string;
        referenceOffre: string;
        referenceContratCarte: string;
        listeDocumentAProduire: Array<IDocumentAProduire>;
        listeModeContractualisation: Array<IModeContractualisationActe>;
        listeActeSecondaires: Array<string>;
        listeSignatairesActe: Array<ISignataireActe>;
        listeTitulairesActe: Array<ITitulaireActe>;
        codeTypeProduit: string;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.DRC {
    class DRCConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.DRC {
    interface IRechercherPieceValideDRCOutput {
        documents: Array<Document>;
    }
    interface IDocument {
        idDocument: string;
        typeDocument: string;
        codeNature: string;
        idPersonne: string;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.DRC {
    class DRCRequestFactory {
        constructor();
        create(idPersonne: string, typesDocuments: Array<string>): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.DRC {
    class DRCResponseHandler {
        private listeSignatairesNonIdentifies;
        private listeSignatairesIdentifies;
        constructor();
        responseHandler(listeIdentifiantSignataires: Array<string>, rechercherPieceValideDRCOutput: Array<IRechercherPieceValideDRCOutput>): void;
        private isSignataitreIdentifie(rechercherPieceValideDRCOutput);
        getListeSignatairesNonIdentifies(): Array<MyWay.IdentificationSignataires.Signataire>;
        getListeSignatairesIdentifies(): Array<MyWay.IdentificationSignataires.Signataire>;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.ParticulierInformation {
    class ParticulierInformationConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.ParticulierInformation {
    interface IParticulierInformation {
        identifiantPersonne: number;
        situationProfessionnelle: ISituationProfessionnellle;
        codeEtablissement: string;
        etatCivil: IEtatCivil;
        situationFiscale: ISituationFiscale;
        donneesAdministratives: IDonneesAdministratives;
    }
    interface IEtatCivil {
        codeCivilite: string;
        nomFamillePersonnePhysique: string;
        prenom: string;
        dateNaissance: Date;
        codeDepartementNaissance: string;
        codeInseePaysNationalite: string;
        dateNaturalisation: Date;
        codeSituationFamiliale: string;
        codeSexe: string;
        nomMarital: string;
        designationCourte: string;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        dateDeces: Date;
        codeCapaciteJuridique: string;
        codePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleInseePaysDoubleNationalite: string;
        dateEffetSituationFamiliale: Date;
        codeRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        libelleCapaciteJuridique: string;
        libelleCivilite: string;
        libelleDepartementNaissance: string;
        libellePaysNationalite: string;
        libellePaysNaissance: string;
        libelleRegimeMatrimonial: string;
        libelleSexe: string;
        libelleCodeSituationFamiliale: string;
        autresPrenom: string;
    }
    interface ISituationProfessionnellle {
        catégorieSocioProfessionnelle: string;
        denominationEmployeur: string;
        sirenEmployeur: string;
        dateEffetCSP: Date;
        dateEmbaucheEmployeurActuel: Date;
        codeTypeContratTravail: string;
        dateFinContratTravail: Date;
        codeNAFInsee: string;
        libelleCategorieSocioProfessionnelle: string;
        libelleNAFInsee: string;
        libelleTypeContratTravail: string;
        libelleProfession: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        codeSecteurEmploi: string;
    }
    interface ISituationFiscale {
        codeResident: string;
    }
    interface IDonneesAdministratives {
        codeAppartenanceReseau: string;
        indicateurSocietaire: string;
        libelleAppartenanceReseau: string;
        identifiantRelationEconomique: number;
        EDSDomiciliation: number;
        domiciliationRevenu: string;
        horsPresenceClient: string;
    }
}

declare module MyWay.IdentificationSignataires.Ressource.ParticulierInformation {
    class ParticulierInformationRequestFactory {
        constructor();
        create(codeEtablissement: string, idPersonne: number): MyWay.Services.IRequestSettings;
    }
}
