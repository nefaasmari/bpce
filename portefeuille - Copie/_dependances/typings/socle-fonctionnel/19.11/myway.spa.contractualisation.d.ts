
declare module MyWay.Contractualisation {
    var app: any;
}

declare module MyWay.Contractualisation.Constantes {
    module Popup {
        var BOUTON_FERMER: string;
        var LIBELLE_ERREUR_DEFAULT: string;
        var LIBELLE_HEADER_DETAIL_FLUX: string;
        var LIBELLE_ERREUR_CHARGEMENT: string;
    }
}

declare module MyWay.Contractualisation {
    class RouteurControleur {
        private $scope;
        private routeurService;
        static $inject: string[];
        private chargementLong;
        constructor($scope: ng.IScope, routeurService: RouteurService);
        estVisible: boolean;
    }
}

declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
    enum ChoixSelectionnerEnum {
        RETENTER_ENVOI_MAILS = 0,
        RETENTER_PLUS_TARD = 1,
        PASSER_EN_SIGNATURE_PAPIER = 2,
    }
    class EnvoiMailProControleur {
        private $scope;
        private serviceAgentExtended;
        private envoiMailProService;
        private mwNotificationService;
        static $inject: string[];
        private chargementLong;
        private titrePage;
        private static TITRE_PAGE_DEFAUT;
        TITRE_PANEL_2: string;
        MESSAGE_PASSER_EN_PAPIER_OBLIGATOIRE: string;
        MESSAGE_ENVOI_MAILS_EN_COURS: string;
        MESSAGE_ERREUR_TECHNIQUE_ENVOI_MAIL: string;
        MESSAGE_NOMBRE_TENTATIVE_ATTEINT: string;
        MESSAGE_SIGNAUTRE_ELECTRONIQUE_INDISPONIBLE: string;
        static MESSAGE_CONFIRMATION_ENVOI_MAILS: string;
        QUITTER_SIGNER_PLUSTARD_MSG_INFO: string;
        PASSER_SINGATURE_PAPIER_MSG_INFO: string;
        RETENTER_IMMEDIATEMENT_ENVOI_MAIL_MSG_INFO: string;
        BOUTTON_RADIO_RETENTER_IMMEDIATEMENT: string;
        BOUTTON_RADIO_QUITTER_SIGNER_PLUS_TARD: string;
        BOUTTON_RADIO_PASSER_SIGNATURE_PAPIER: string;
        private nombreTentative;
        private afficherEcranTentative;
        private forcerPasserPapier;
        private detailsErreur;
        private isLibelleErreur;
        boutonValiderEnvoirMailProTexte: string;
        private static NOMBRE_TENTATIVE_MAX;
        choixSelectionner: string;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, envoiMailProService: EnvoiMailProService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         *
         */
        retenterPlustard(): void;
        /**
         *
         */
        retenterEnvoiMails(): void;
        /**
         *
         */
        passerEnSignaturePapier(): void;
        /**
         *
         */
        valider(): void;
    }
}

declare module MyWay.Contractualisation {
    class IdentificationSignControleur {
        private $scope;
        private serviceAgentExtended;
        private identificationSignService;
        static $inject: string[];
        private contractualisationActe;
        private chargementLong;
        private titrePage;
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
        private static TEXT_CONTINUER;
        private boutonValiderRemiseCGEnable;
        private boutonValiderRemiseCGTexte;
        private chargementLong;
        private titrePage;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, remiseCGService: RemiseCGService);
        /**
         *
         */
        validerRemiseCG(): void;
    }
}

declare module MyWay.Contractualisation.sed {
}

declare module MyWay.Contractualisation.sed {
}

declare module MyWay.Contractualisation {
    /**
     *
     */
    interface IDataClasseurClient {
        acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion;
        listeNumerosDossiers: string[];
    }
}

declare module MyWay.Contractualisation.Modeles.Application {
    /**
     * Modèle de l'objet à passer en paramètre au service d'ouverture d'une fenêtre modale complexe
     */
    interface IPopupData<T> {
        closeButtonText: string;
        actionButtonText: string;
        headerText: string;
        iconName: string;
        bodyText: string;
        model?: T;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    interface IActeReprise {
        codeActeGestion: string;
        codeCanal: string;
        numeroEntiteTitulaire: string;
        codeTypeMarcheEntreprise: string;
        codeModeMiseEnGestion: string;
        indicateurPapier?: boolean;
        indicateurDossierIDNExistant?: boolean;
        referenceOffre: string;
        referenceContrat: string;
        referenceContratCarte?: string;
        codeTypeProduit: string;
        identifiantActeIDN: string;
        listeActeSecondaires: Array<string>;
        listeSignataires: Array<myway.comContract.modeles.ISignataire>;
        listeTitulairesActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>;
        libelleActe: string;
        codeGuichet?: string;
        identifiantAgent?: string;
        referenceEDSExterneClient: string;
        referenceEDSInterneClient: string;
        nbPersonneEntiteTitulaire: number;
        acteGestionCompteSupport: string;
        codeEntite?: string;
        numeroOffreVMC?: string;
        typeProfessionnel?: string;
        identifiantActeExterne?: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
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
     */
    class ContractualisationConstants {
        static CONTRACTULISATION_ACTE_KEY_CONTEXT: string;
        static ACTE_REPRISE_KEY_CONTEXT: string;
        static LISTE_DOSSIER_CC_KEY_CONTEXT: string;
        static DOSSIER_NUMERIQUE_KEY_CONTEXT: string;
        static MODE_KEY_CONTEXT: string;
        static MODE_SIGNATURE_KEY_CONTEXT: string;
        static IDENTIFIANT_ACTE_EXT_KEY_CONTEXT: string;
        static CODE_MODE_MISE_EN_GESTION_KEY_CONTEXT: string;
        static HUBMAIL_KEY_CONTEXT: string;
        static CODE_CANAL_KEY_CONTEXT: string;
        static CODE_ENTITE_KEY_CONTEXT: string;
        static ID_IDN_KEY_CONTEXT: string;
        static LIBELLE_ACTE_KEY_CONTEXT: string;
        static TYPE_PROFESSIONNEL_KEY_CONTEXT: string;
        static MODE_IMPR_IDN_KEY_CONTEXT: string;
        static MODE_PREV_IDN_KEY_CONTEXT: string;
        static POINT_ENTREE_IDN_KEY_CONTEXT: string;
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
        static CONTEXTE_GGO: string;
        static CODE_REMISE_CG_MSI: string;
        static IDNT_PERS: string;
        static IDNT_ETAB: string;
        static LIST_IDNT_DOSS: string;
        static CODE_APPLICATION_CONTELEC: string;
        static CODE_GUICHET_A_BLANC: string;
        static MODE_SIGNIDN_KEY_CONTEXT: string;
        static MODE_SIGNIDN_QUITTER: string;
        static MODE_SIGNIDN_IMPR: string;
        static MODE_SIGNIDN_VADPAPHUB: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    interface IContractualisationContexteModele {
        authenficationInfo?: MyWay.Services.Context.AuthentificationInfo;
        modeSignature?: string;
        contractualisationActe?: Myway.Ressource.ContractualisationActe.IContractualisationActe;
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
     */
    class FinProcessIdenSignProperties {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        modeSignature: string;
        constructor(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les messages erreur que l'application Contractualisation peut retourner.
     * @author S0076222
     */
    class ContractualisationMessageErreur {
        static PB_GET_CONTRACTUALISATION_ACTE_FROM_CONTEXT: string;
        static PB_GET_ACTE_REPRISE_FROM_CONTEXT: string;
        static PB_ADD_CONTRACTUALISATION_ACTE_TO_CONTEXT: string;
        static PB_CONTEXT: string;
        static CODE_ACTE_GESTION_UNDEFINED: string;
        static ID_IDN_UNDEFINED: string;
        static ERREUR_TECHNIQUE: string;
        static CODE_CANAL_UNDEFINED: string;
        static CODE_ENTITE_UNDEFINED: string;
        static INDICATEUR_PAPIER_UNDEFINED: string;
        static CODE_ETABLISSEMENT_FINANACIER_UNDEFINED: string;
        static ACTE_GESTION_UNDEFINED: string;
        static NOMBRE_SIGNATAIRES_ACTE_VIDE: string;
        static PB_CANAL_NUM: string;
        static PB_CONTEXT_ETAPE_ROUTEUR: string;
        static PB_DOSSIER_NUMERIQUE: string;
        static PB_CONTEXT_VALEUR_ENTREE_1: string;
        static PB_CONTEXT_VALEUR_ENTREE_2: string;
        static PB_CONTEXT_VALEUR_ENTREE_3: string;
        static PB_CONTEXT_AUTHENTIFICATION_INFO: string;
        static PB_CONTEXT_VALEUR_ENTREE: string;
        static PB_HUBMAIL_ENTREE: string;
        messageErreur: string;
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

declare module MyWay.Contractualisation {
    /**
     * @author S0079240
     * isLivretA: boolean
     * listeActeSecondaires: Array<string>
     */
    interface ILivretA {
        isLivretA: boolean;
        listeActeSecondaires: Array<string>;
    }
}

declare module MyWay.Contractualisation.sed {
    class SedConstantes {
        static urlAnnulation: string;
    }
}

declare module MyWay.Contractualisation.Services.Application {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupService {
        /**
         * Permet d'ouvrir une popup simple d'informations
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
        /**
         * Ouverture d'une popup demandant la confirmation d'une action
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * @param {validerTexte} Texte du bouton de validation
         * @param {closeTexte} Texte du bouton de fermeture
         */
        showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * La classe RouteurContexteModele présente les contrats d'entrées de l'étape LISA Routeur.
     * @author S0076222
     */
    class RouteurContexteModele implements IContractualisationContexteModele {
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        mode: number;
        idIDN: string;
        codeCanal: string;
        codeEntite: string;
        modeSignature: string;
        acteReprise: MyWay.Contractualisation.IActeReprise;
        valeurEntree: LisaValeurEntreeEtapeRouteurEnum;
        identifiantActeExterne: string;
        codeModeMiseEnGestion: string;
        typeProfessionnel: string;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, valeurEntree: LisaValeurEntreeEtapeRouteurEnum, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, mode: number, idIDN: string, codeCanal: string, modeSignature: string, acteReprise: MyWay.Contractualisation.IActeReprise, codeEntite: string, typeProfessionnel: string, identifiantActeExterne?: string, codeModeMiseEnGestion?: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * La Classe RouteurContexteService a pour objectif d'initialiser l'étape Routeur.
     * Elle récupére les contrats d'entrées: l'objet contractualisationActe et le mode,
     * @author S0076222
     */
    class RouteurContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        contratsContexte: RouteurContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * La méthode init permet de récuperer les contrats d'entrées de l'étape routeur.
         * Cette méthode renvoit une erreur de type "ContractualisationMessageErreur.PB_CONTEXT"
         * si les contrats d'entrées ne sont pas définis.
         * @params
         * @returns {ng.IPromise<void>}
         */
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape routeur en
         * fonction de la valeur d'entrée.
         * Valeur d'entrée == 1, les contrats d'entrées sont : l'objet ContractualisationActe
         * Valeur d'entrée == 2, les contrats d'entrées sont : IdIDN, ModeSignature, CodeCanal, Mode, CodeEntite,
         * identifantActeExterne, ModeMiseEnGestion
         * Valeur d'entrée == 3, les contrats d'entrées sont : l'objet ActeReprise
         * @param valeurEntreeEtapeRouteur
         */
        private getDonneesContexte(valeurEntreeEtapeRouteur);
        /**
         * checkContractualisationActeObjet est une méthode permettant de vérifier la bonne
         * alimentation de l'objet ContractualisationActe envoyé par
         * l'application appelante.
         * @params {MyWay.Contractualisation.Ressources.ContractualisationActe.IContractualisationActe}
         * @returns {boolean}
         */
        private checkContractualisationActeObjet(contractualisationActe);
        private checkActeRepriseObjet(acteReprise);
        private mettreAJourContractualisationActeObjet(contractualisationActe);
        private mettreAJourActeRepriseObjet(acteReprise);
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
        /**
         *
         * @param codeCanal
         * @param modeSignature
         * Règles (Defect ALM-QC 9552):
         *  - Si codeCanal=FF, ModePrevIDN=FAFPAPPE
         *  - Si codeCanal != (FF ou TL), ModePrevIDN=VADPAPPE
         *  - Si codeCanal=TL et ModeSignature !=E, ModePrevIDN=VADPAPPE
         *  - Si codeCanal=TL et ModeSignature=E, ModePrevIDN=VADEAPPE
         */
        private getModePrevisualisationIDN(codeCanal, modeSignature);
        /**
         * La méthode getPointEntreeIDN permettant de déterminer le pointEntreeIDN
         * en fonction du codeCanal passé en entrée
         * @param codeCanal
         */
        private getPointEntreeIDN(codeCanal);
        /**
         *
         */
        addIdMaterielToContexte(): ng.IPromise<void>;
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
        private contractualisationActeService;
        private hubmailService;
        static $inject: string[];
        _chargementLong: boolean;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, routeurContexteService: RouteurContexteService, dossierContratService: DossierContratService, contractualisationActeService: myway.comContract.Services.ContractualisationActeService, hubmailService: HubmailService);
        dispatcher(): void;
        private executerModeUN();
        /**
         * La méthode executerModeActeReprise permet d'executer le mode Contractualisation reprise.
         * @params
         * @returns void
         */
        private executerModeActeReprise();
        /**
         *
         * @param acteReprise
         */
        private getActeFromActeReprise(acteReprise);
        private executerModesVAD();
        private executerModeEchec();
        estVisible: boolean;
    }
}

declare module MyWay.Contractualisation {
    class LivretAService {
        static $inject: string[];
        /**
         * getLivretA vérifie si l'on est dans le cas d'un livret A
         * @params { Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise }
         * @returns isLivretA: boolean, listeActeSecondaires: Array<string>
         * listeActeSecondaires contient les acte secondaires transcodés DO à la place de OU
         */
        getLivretA(acte: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise): ILivretA;
    }
}

declare module MyWay.Contractualisation.sed {
    class ImpressionService {
        private $q;
        private routeurContexteService;
        private alerteImpressionService;
        static $inject: string[];
        constructor($q: ng.IQService, routeurContexteService: RouteurContexteService, alerteImpressionService: AlerteImpressionService);
        /**
         * Permet l'impression papier avec le contôle entité
         * @constructor
         * @returns void
         */
        impression(): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisations.Utils {
    /**
     * La classe ContractualisationUtils propose des fonctions utiles pour l'application.
     * @author S0076222
     */
    class ContractualisationUtils {
        static convertirDateTOYYYYMMDD(date: Date): string;
        convertirDateTOYYMMDD(date: Date): string;
        convertirDateTOHHMMSS(date: Date): string;
        static checkContractualisationActeObject(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): boolean;
        static checkActeRepriseObjet(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, acteReprise: MyWay.Contractualisation.IActeReprise): boolean;
    }
}


declare module MyWay.Contractualisation {
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ActeGestionArcade {
        static DEFAUT: string;
        static LIVRET_A: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeApplication {
        static MYWAY: string;
        static CONTELEC: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeCanalVente {
        static FACE_A_FACE: string;
        static TELEPHONIQUE: string;
        static INTERNET: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeModeVente {
        static MEGI: string;
        static VPC: string;
        static ALL: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeRegleCollecte {
        static POP_IN: string;
        static FORCAGE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class CodeTypeReferenceExterne {
        static DOSSIER_VENTE: string;
        static COMPTE_SUPPORT_CONTRAT: string;
        static CONTRAT_CARTE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
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
    /**
     * TODO
     * @author S0076222
     */
    class HubmailDisponible {
        static OUI: string;
        static NON: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class IconModale {
        static ITCE_WARNING: string;
        static ITCE_INFO: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class IndicateurImpression {
        static OK: string;
        static KO: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    enum LisaValeurEntreeEtapeRouteurEnum {
        CONTRACTUALISATION = 1,
        CONTRACTUALISATION_VAD = 2,
        CONTRACTUALISATION_MODE_REPRISE = 3,
    }
    enum LisaValeurEntreeEtapeRemiseCGEnum {
        CONTRACTUALISATION = 1,
        CONTRACTUALISATION_MODE_REPRISE = 2,
    }
    enum LisaCodeSortieEtapeRouteurEnum {
        CODE_LISA_IDENTIFICATION_SIGNATAIRES = 11,
        CODE_LISA_REMISE_CG = 12,
        CODE_LISA_ENVOI_MAIL_SED_IDN = 20,
        CODE_LISA_ENVOI_MAIL_SED_CONTRACTUALISATION = 21,
        CODE_LISA_IMPRESSION_CONTRACT = 30,
        CODE_LISA_SIGN_IDN = 31,
        CODE_LISA_IMPRESSION_IDN = 40,
        CODE_LISA_ANNULATION = 50,
        CODE_LISA_PREVISUALISATION = 60,
        CODE_LISA_IMPRESSION_IDN_ALERTE = 2,
        CODE_LISA_IDN_SIGNATURE = 13,
        CODE_LISA_REMISE_CG_MODE_REPRISE = 14,
        CODE_LISA_ENVOI_MAIL_PRO = 15,
    }
    enum LisaCodeSortieEtapeIdnSignatairesEnum {
        CODE_LISA_IDN_SIGNATURE = 1,
        CODE_LISA_REMISE_CG = 2,
        CODE_LISA_ENVOI_MAIL_PRO = 3,
    }
    enum LisaCodeSortieEtapeEnvoiMailProEnum {
        CODE_LISA_REMISE_CG = 1,
        CODE_LISA_PROCESS_APPELANT = 2,
    }
    enum LisaCodeEntreeEtapeRemiseCGEnum {
        CONTRACTUALISATION = 1,
        CONTRACTUALISATION_MODE_REPRISE = 2,
    }
    enum LisaCodeSortieEtapeRemiseCGEnum {
        CODE_LISA_IDN_IMPRESSION = 1,
        CODE_LISA_CLA_CLIENT_PAPIER = 2,
    }
    enum LisaValeurEntreeEtapeAnnulationEnum {
        CODE_LISA_IDN_IMPRESSION = 1,
        CONTRACTUALISATION = 50,
    }
    enum LisaCodeSortieEtapeAnnulationEnum {
        CODE_LISA_SIGN_IDN = 3,
        CODE_LISA_IDN_IMPRESSION = 2,
        CODE_LISA_SORTIE_PROCESSUS = 1,
    }
    enum LisaCodeSortieEtapeConfirmationEnum {
        CODE_LISA_IDN_IMPRESSION = 2,
        CODE_LISA_SORTIE_PROCESSUS = 1,
    }
    enum LisaCodeEntreeEtapeClaCliPapierEnum {
        CONTRACTUALISATION = 1,
        CONTRACTUALISATION_MODE_REPRISE = 2,
    }
    enum LisaCodeSortieClaCliPapierEnum {
        CODE_LISA_IDN_SIGNATURE = 1,
        CODE_LISA_REMISE_CG = 2,
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeContractualisation {
        static FAFE: string;
        static FAFP: string;
        static VADE: string;
        static VADP: string;
        static FFPE: string;
        static AUCUN: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeEnvoi {
        static MANUEL: string;
        static HUBMAIL: string;
        static POPUP_HUBMAIL_MESSAGE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeImpressionIDN {
        static FACE_A_FACE: string;
        static TELEPHONIQUE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModePrevisualisationIDN {
        static FACE_A_FACE_ELECTRONIQUE: string;
        static FACE_A_FACE_PAPIER: string;
        static FACE_A_FACE_PRO_PAPIER: string;
        static TELEPHONIQUE_ELECTRONIQUE: string;
        static TELEPHONIQUE_PAPIER: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeSignature {
        static PAPIER: string;
        static ELECTRONIQUE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class ModeUsageDocument {
        static PAPIER: string;
        static ELECTRONIQUE: string;
        static PAPIER_ELECTRONIQUE: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class PointEntreeIDN {
        static PTU: string;
        static VMC: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    enum PorteurClasseurClientEnum {
        CONTRAT = 1,
        PERSONNE = 2,
    }
}

declare module MyWay.Contractualisation {
    /**
     * TODO
     * @author S0076222
     */
    class TypeDocument {
        static CCSE: string;
        static CSEP: string;
    }
}

declare module MyWay.Contractualisation.ImpressionLot {
    /**
     * @author S0076222
     */
    class DocumentImpressionLotFactory {
        /**
         *
         * @param documentAProduire
         */
        createDocumentImpressionLotFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): MyWay.Services.Impression.DocumentImpressionLot;
        private getImpressionParams(documentAProduire);
    }
}

declare module MyWay.Contractualisation {
    class AlerteImpressionService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         * @param modalService
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        /**
         *
         * @param codeEtablissement
         * @param codeCanal
         * @param codeEntiteVente
         */
        getAlerteImpression(codeEtablissement: string, codeCanal: string, codeEntiteVente: string): ng.IPromise<boolean>;
    }
}

declare module MyWay.Contractualisation {
    class RecupererDocumentsIdnAttributaireService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getDocumentsIdnAttributaire(idActeIdn: string, codeApplication: string): ng.IPromise<Myway.Ressource.ConsultationIdn.IRecupererDocumentsIdnOutput>;
    }
}

declare module MyWay.Contractualisation {
    class ContractualisationModaleService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        static STANDARD_MDALE_HEADER: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        afficherModale(headerText: string, bodyText: string, iconModale: string): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    class DocumentEntrepriseService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de récupérer la liste de doc contenant url, cleRattachement, libelle
         * @param clesRattachement ?: Liste de primitives, Liste des clés de rattachement de chaque document
         * @returns {liste ResponseDocumentEntreprise} Result promise.
         */
        getDocumentEntreprise(listClesRattachement: Array<string>): ng.IPromise<Myway.Ressource.DocumentParametre.IResponseDocumentEntreprise[]>;
        findIndexDocumentAProduire(listDocs: Myway.Ressource.ContractualisationActe.IDocumentAProduire[], valeurCle: string): number;
        /**
         * Permet d'ajouter l'url des documents obtenue par getDocumentEntreprise(listClesRattachement)
         * @param contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe
         * @returns {Myway.Ressource.ContractualisationActe.IContractualisationActe} Result promise.
         */
        ajouterDocumentUrl(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
    }
}

declare module MyWay.Contractualisation {
    class DocumentParametreService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet TO DO
         * @param TO DO
         * @returns {Object} Result promise.
         */
        getDocumentParametre(actes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheEntreprise: string): ng.IPromise<Array<Myway.Ressource.DocumentParametre.IDocumentActe>>;
        /**
         * Permet TO DO
         * @param TO DO
         * @returns {Object} Result promise.
         */
        ajouterDocumentsActesSecondaires(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<Myway.Ressource.ContractualisationActe.IContractualisationActe>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape ClasseurClientPapier.
     * @author S0076222
     */
    class DossierContratConstants {
        static ERREUR_TECHNIQUE: string;
        static ENTETE_POPUP: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe DossierContratContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape ClasseurClientPapier.
     * @author S0076222
     */
    class DossierContratContexteModele implements IContractualisationContexteModele {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        modeSignature: string;
        ihmAcquisition: number;
        acteReprise: IActeReprise;
        valeurEntree: number;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        constructor(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature: string, ihmAcquisition: number, acteReprise: IActeReprise, valeurEntree: number, authenficationInfo: MyWay.Services.Context.AuthentificationInfo);
    }
}

declare module MyWay.Contractualisation {
    class DossierContratContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        contratsContexte: DossierContratContexteModele;
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *
         */
        init(): ng.IPromise<void>;
        /**
         *
         * @param valeurSortie
         * @param contrats
         */
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
        private livretAService;
        private su1pService;
        private dossierContratServiService;
        private rechercheProduitETService;
        static $inject: string[];
        private donneesLivretA;
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         * @param contractualisationModaleService
         * @param dossierContratContexteService
         * @param mettreAJourDRCService
         * @param livretAService
         * @param su1pService
         * @param dossierContratServiService
         * @param rechercheProduitETService
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, dossierContratContexteService: DossierContratContexteService, mettreAJourDRCService: MettreAJourDRCService, livretAService: LivretAService, su1pService: Su1pService, dossierContratServiService: DossierContratServiService, rechercheProduitETService: RechercheProduitETService);
        /**
         *
         * @param valeurSortie
         */
        createDossierClasseurClientPapier(valeurSortie: number): ng.IPromise<void>;
        /**
         *
         * @param valeurSortie
         */
        private createCCPapierModeClassique(valeurSortie);
        /**
         *
         * @param valeurSortie
         */
        private createCCPapierModeReprise(valeurSortie);
        /**
         *
         * @param acteGestion
         * @param indicateurPapier
         * @param donneesLivretA
         */
        private putDossierContratFromActeGestion(acteGestion, indicateurPapier, donneesLivretA, typeProfessionnel);
        /**
         *
         * @param acteReprise
         * @param indicateurPapier
         * @param donneesLivretA
         */
        private putDossierContratFromActeReprise(acteReprise, indicateurPapier, donneesLivretA);
        /**
         *
         * @param codeCanal
         */
        private getCodeModeContractualisation(codeCanal, typeProfessionnel);
    }
}

declare module MyWay.Contractualisation {
    class DossierCanalNumeriqueService {
        private $q;
        private serviceAgentExtended;
        private mettreAJourDRCService;
        private popupService;
        private livretAService;
        private su1pService;
        private dossierContratServiService;
        private rechercheProduitETService;
        static $inject: string[];
        private dossierCanalNumeriqueOutput;
        private donneesLivretA;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mettreAJourDRCService: MettreAJourDRCService, popupService: Services.Application.IPopupService, livretAService: LivretAService, su1pService: Su1pService, dossierContratServiService: DossierContratServiService, rechercheProduitETService: RechercheProduitETService);
        /**
         * La méthode createDossierClasseurClientElectronique a pour objectif de créer le classeur client numérique, mettre à jour le DRC,
         * ajouter l'indicateur APPEL_IHM_ACQ_CLACLI au contexte glabal et appeler next LISA afin de passer à l'étape suivante.
         * @params {acteReprise: IActeReprise,
         * acteGestion: IActeGestion,
         * indicateurPapier: boolean
         * indicateurPapier: boolean
         * modeSignature: string
         * ihmAcquisition: number}
         * @returns {{ng.IPromise<void>}}
         */
        createDossierClasseurClientElectronique(acteReprise: IActeReprise, acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion, indicateurPapier: boolean, modeSignature: string, ihmAcquisition: number, typeProfessionnel: string): ng.IPromise<void>;
        /**
         *
         * @param acteGestion
         * @param indicateurPapier
         * @param modeSignature
         * @param ihmAcquisition
         */
        private createCCElectroniqueModeClassique(acteGestion, indicateurPapier, modeSignature, ihmAcquisition, typeProfessionnel);
        /**
         *
         * @param acteReprise
         * @param indicateurPapier
         * @param modeSignature
         * @param ihmAcquisition
         */
        private createCCElectroniqueModeReprise(acteReprise, indicateurPapier, modeSignature, ihmAcquisition, typeProfessionnel);
        /**
         *
         * @param acte
         * @param ihmAcquisition
         */
        private mettreAJourDRC(acte, ihmAcquisition, typeProfessionnel);
        /**
         * La méthode appelCollecteClasseurClient
         * @params { dossierCanalNumeriqueOutput: Ressources.DossierCanalNumerique.IDossierCanalNumeriqueOutput,
         *  acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion,
         *  indicateurPapier: boolean, modeSignature: string }
         * @returns {{ng.IPromise<any>}}
         */
        private appelCollecteClasseurClient(dossierCanalNumeriqueOutput, acteGestion, indicateurPapier, modeSignature);
        /**
         * La méthode createDossierClasseurClientElectronique a pour objectif de créer le classeur client numérique.
         * @params {acteGestion | IActeReprise,
         * indicateurPapier: boolean,
         * acteGestionArcade: string}
         * @returns {{ng.IPromise<void>}}
         */
        private postCreationDossierCanalNum(acte, indicateurPapier, acteGestionArcade, typeProfessionnel, authenficationInfo, codeGuichet);
        /**
         *
         * @param acte
         * @param indicateurPapier
         * @param acteGestionArcade
         * @param typeProfessionnel
         */
        appelerRessourceClasseurClient(acte: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise, indicateurPapier: boolean, acteGestionArcade: string, typeProfessionnel: string): ng.IPromise<string[]>;
        /**
         * La méthode getIdOffre permet de retourner referenceOffre ou 0 (zéro) si referenceOffre est null
         */
        private getIdOffre(referenceOffre);
        /**
         * La méthode getActeFGestionArcade permet de retourner l'acte de gestion arcade
         */
        private getActeGestionArcade(acteGestion);
        /**
         * La méthode getNodapeTitulaire permet de retourner le NODAPE du titulaire
         */
        private getNodapeTitulaire(listeTitulairesActe);
        /**
         * La méthode getCompte retourne le compte bancaire.
         * @params {authenficationInfo: MyWay.Services.Context.AuthentificationInfo, referenceContrat: string, codeGuichet: string}
         * @returns {{string}}
         */
        private getCompte(authenficationInfo, acte, codeGuichet);
        /**
         * La méthode getCodeTypeEDS retourne le typeEdsRattachement.
         * @params {authenficationInfo: MyWay.Services.Context.AuthentificationInfo}
         * @returns {{string}}
         */
        private getCodeTypeEDS(authenficationInfo);
    }
}

declare module MyWay.Contractualisation {
    class DossierContratServiService {
        private $q;
        private serviceAgentExtended;
        private rechercheProduitETService;
        private recupererDocumentsIdnAttributaireService;
        static $inject: string[];
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         * @param rechercheProduitETService
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rechercheProduitETService: RechercheProduitETService, recupererDocumentsIdnAttributaireService: RecupererDocumentsIdnAttributaireService);
        /**
         *
         * @param acteGestion
         * @param indicateurPapier
         * @param donneesLivretA
         */
        postDossierContratService(acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise, indicateurPapier: boolean, modeSignature: string): ng.IPromise<string[]>;
        /**
         *
         * @param codeCanal
         */
        private getCodeModeContractualisation(codeCanal, modeSignature);
    }
}

declare module MyWay.Contractualisation {
    class DossierNumeriqueService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Permet de consommer la ressource dossierNuemrique en mode POST.
         * @param {dossiernumerique: MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique}
         * @returns {ng.IPromise<MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique>}.
         */
        postDossierNumerique(dossiernumerique: Myway.Ressource.DossierNumerique.IDossierNumerique): ng.IPromise<Myway.Ressource.DossierNumerique.IDossierNumerique>;
        /**
         * Permet de consommer la ressource dossierNuemrique en mode PUT.
         * @param {dossiernumerique: MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique}
         * @returns {ng.IPromise<MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique>}.
         */
        putDossierNumerique(dossiernumerique: Myway.Ressource.DossierNumerique.IDossierNumerique): ng.IPromise<Myway.Ressource.DossierNumerique.IDossierNumerique>;
        /**
         * Permet de consommer la ressource dossierNuemrique en mode DELETE.
         * @param {dossiernumerique: MyWay.Contractualisation.Ressources.DossierNumerique.IAnnulationDossier}
         * @returns {ng.IPromise<MyWay.Contractualisation.Ressources.DossierNumerique.IReponseAnnulationDossier>}.
         */
        deleteDossierNumerique(annulationDossier: Myway.Ressource.DossierNumerique.IAnnulationDossier): ng.IPromise<Myway.Ressource.DossierNumerique.IReponseAnnulationDossier>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape LISA envoiMailPro.
     * @author S0076222
     */
    class EnvoiMailProConstants {
        static ERREUR_TECHNIQUE: string;
        static CODE_APPLICATION: string;
        static ENVOI_MAIL_OK: string;
        static ENVOI_MAIL_KO: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe EnvoiMailProContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape EnvoiMailPro.
     * @author S0076222
     */
    class EnvoiMailProContexteModele implements IContractualisationContexteModele {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        acteReprise: IActeReprise;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        idIDN: string;
        libelleActe: string;
        modeSignature: string;
        isMode2: boolean;
        constructor(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, acteReprise: IActeReprise, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, idIDN: string, libelleActe: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service EnvoiMailProContexteService permet d'initialiser l'étape EnvoicMailPro.
     * @author S0076222
     */
    class EnvoiMailProContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private dossierNumeriqueService;
        static $inject: string[];
        contratsContexte: EnvoiMailProContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, dossierNumeriqueService: DossierNumeriqueService);
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape EnvoiMailPro
         */
        private getDonneesContexte();
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    class EnvoiMailProService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private envoiMailProContexteService;
        private initierSignatureService;
        static $inject: string[];
        private identifiantIDN;
        private libelleActe;
        private idTransactionICG;
        private mode2;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, envoiMailProContexteService: EnvoiMailProContexteService, initierSignatureService: InitierSignatureService);
        init(): ng.IPromise<void>;
        /**
         *
         */
        envoiMailPro(): ng.IPromise<{
            isMailEnvoye: boolean;
            libelleErreur: string;
        }>;
        /**
         *
         */
        getContratsContexte(): EnvoiMailProContexteModele;
        /**
         *
         */
        getIdentifiantIDN(): string;
        /**
         *
         */
        getLibelleActe(): string;
        /**
         *
         */
        isMode2(): boolean;
        /**
         *
         * @param valeurSortie
         */
        nextEtape(valeurSortie: number): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'étape ClasseurClientPapier.
     * @author S0076222
     */
    class HubmailConstants {
        static CODE_CARACTERISTIQUE_OFFRE_HUBMAIL_ACTIVE: string;
    }
}

declare module MyWay.Contractualisation {
    class HubmailService {
        private $q;
        private serviceAgentExtended;
        private offresEtabService;
        private parametreEtabService;
        static $inject: string[];
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         * @param offresEtabService
         * @param parametreEtabService
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, offresEtabService: OffresEtabService, parametreEtabService: ParametreEtabService);
        /**
         * Cette méthode permettant de vérifier si la fonctionnalité de Hubmail est disponible ou pas.
         *
         */
        isHubmailDisponible(identifiantActeExterne: string, codeModeMiseEnGestion: string, codeCanal: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Cette méthode permettant de vérifier l'existence du code caractéristique offre hubmail(28)
         * @param offresEtabOutput
         */
        private isCodeCaraOffreHubmailDisponible(offresEtabOutput);
        /**
         * Cette méthode permettant de récuperer le FlagHubmail depuis l'objet ParametresCaisse
         * @param paramEtab
         */
        private getFlagHubmail(paramEtab);
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe IdentificationSignContexteModele implemente l'interface
     * IContractualisationContexteModele afin de présenter les contrats d'entrées
     * de l'étape Identification de signataires.
     * @author S0076222
     */
    class IdentificationSignContexteModele implements IContractualisationContexteModele {
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        idIDN: string;
        idMat: string;
        caisse: string;
        agent: string;
        modeSignature: string;
        indicateurImpression: string;
        constructor(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, idIDN: string, idMat: string, caisse: string, agent: string, modeSignature: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service IdentificationSignContexteService a pour objectif d'intialiser l'étape Identification de signataires.
     * @author S0076222
     */
    class IdentificationSignContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private hubmailService;
        static $inject: string[];
        contratsContexte: IdentificationSignContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, hubmailService: HubmailService);
        init(): ng.IPromise<void>;
        private checkContractualisationActeObject(contractualisationActe);
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
        /**
         *
         * @param codeCanal
         */
        private getPointEntreeIDN(codeCanal);
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    class IdentificationSignService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private identificationSignContexteService;
        private dossierNumeriqueService;
        private documentParametreService;
        private documentEntrepriseService;
        private hubmailService;
        static $inject: string[];
        private static DOCUMENT_BPJI;
        private static DOCUMENT_NOTE_BALE2;
        private static DOCUMENT_INTERO_BDF;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, identificationSignContexteService: IdentificationSignContexteService, dossierNumeriqueService: DossierNumeriqueService, documentParametreService: DocumentParametreService, documentEntrepriseService: DocumentEntrepriseService, hubmailService: HubmailService);
        /**
         * la méthode init a pour objectif d'initialiser le service identificationSignataireContexteService.
         * @params
         * @returns {ng.IPromise<boolean>}
         */
        init(): ng.IPromise<void>;
        /**
         * la méthode getIdentificationSignataireContexte permet de récupérer les contrats de contrats d'entrée
         * de l'étape identificationSignataire
         * @params
         * @returns {IdentificationSignContexteModele}
         */
        getIdentificationSignataireContexte(): IdentificationSignContexteModele;
        alimenterDossierNumerique(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): ng.IPromise<void>;
        private executerModeRepliPapier();
        private getDocumentsAImprimer();
    }
}

declare module MyWay.Contractualisation {
    class InitierSignatureService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *
         * @param codeEtablissement
         * @param identifiantIDN
         * @param codeApplication
         * @param codeModeContractualisation
         * @param emettreEmailInitial
         */
        postInitierSignature(codeEtablissement: string, identifiantIDN: string, codeApplication: string, codeModeContractualisation: string, emettreEmailInitial: boolean): ng.IPromise<Myway.Ressource.DossierNumerique.IInitierSignatureOutput>;
    }
}

declare module MyWay.Contractualisation {
    class MettreAJourDRCService {
        private $q;
        private serviceAgentExtended;
        private numerisationService;
        private completudeDrcService;
        static $inject: string[];
        private static DRC_COMPLET;
        private static TYPE_ENTITE_SUPPORT;
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         * @param numerisationService
         * @param completudeDrcService
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, numerisationService: myway.comEditiqueNumerisation.Services.NumerisationService, completudeDrcService: myway.comEditiqueNumerisation.Services.CompletudeDrcService);
        /**
         *
         * @param listeTitulaires
         */
        mettreAJourDRC(listeTitulaires: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>): ng.IPromise<void>;
        /**
         *
         * @param identifiantPersonne
         */
        private recupereDossierClasseurClient(identifiantPersonne);
        /**
         *
         * @param listeTitulaires
         */
        verifierCompletudeDRC(listeTitulaires: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>): ng.IPromise<boolean>;
        /**
         *
         * @param titulaire
         */
        private isDRCComplet(titulaire);
    }
}

declare module MyWay.Contractualisation {
    class OffresEtabService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *
         */
        getOffresEtab(codeModeMiseEnGestion: string, codeCanal: string, identifiantActeExterne: string): ng.IPromise<Myway.Ressource.OffresEtab.IOffresEtabOutput>;
        /**
         *
         * @param modeMiseEnGestion
         */
        private getFlagVPC(modeMiseEnGestion);
        /**
         *
         * @param modeMiseEnGestion
         */
        private getFlagMEGI(modeMiseEnGestion);
    }
}

declare module MyWay.Contractualisation {
    class ParametreEtabService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *
         */
        getParametreEtab(codeEtablissement: string): ng.IPromise<Myway.Ressource.ParametreEtab.IParametresCaisse>;
    }
}

declare module MyWay.Contractualisation {
    class RechercheProduitETService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        static CODE_GUICHET_A_BLANC: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *
         * @param codeEtablissement
         * @param acteGestion
         */
        getCodeGuichet(codeEtablissement: string, acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise): ng.IPromise<string>;
        /**
         *
         * @param codeAgent
         * @param codeEtablissement
         * @param numeroEntiteTitulaire
         * @param codeGuichetInterbancaire
         * @param codeProduit
         * @param numeroCompte
         */
        private getRechercheProduitET(codeAgent, codeEtablissement, numeroEntiteTitulaire, codeGuichetInterbancaire, codeProduit, numeroCompte);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Cette classe permettant de présenter les  constantes utilisées dans l'application Contractualisation.
     * @author S0076222
     */
    class RemiseCGConstants {
        static ERREUR_TECHNIQUE: string;
        static CODE_REMISE_CG_MSI: string;
        static ENTETE_POPUP: string;
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe RemiseCGContexteModele implemente l'interface IContractualisationContexteModele afin de présenter les contrats d'entrées
     * de l'étape RemiseCG.
     * @author S0076222
     */
    class RemiseCGContexteModele implements IContractualisationContexteModele {
        modeSignature: string;
        contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe;
        acteReprise: IActeReprise;
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        ihmAcquisition: number;
        indicateurImpression: string;
        modeEnvoi: string;
        valeurEntree: number;
        constructor(modeSignature: string, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, acteReprise: IActeReprise, authenficationInfo: MyWay.Services.Context.AuthentificationInfo, ihmAcquisition: number, valeurEntree: number, indicateurImpression: string, modeEnvoi: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service RemiseCGContexteService permet d'initialiser l'étape remiseCG.
     * @author S0076222
     */
    class RemiseCGContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        private dossierCanalNumeriqueService;
        private dossierContratService;
        private alerteImpressionService;
        private contractualisationModaleService;
        static $inject: string[];
        contratsContexte: RemiseCGContexteModele;
        private static POPUP_HUBMAIL_MESSAGE;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dossierCanalNumeriqueService: DossierCanalNumeriqueService, dossierContratService: DossierContratService, alerteImpressionService: AlerteImpressionService, contractualisationModaleService: ContractualisationModaleService);
        init(): ng.IPromise<void>;
        /**
         * La méthode getDonneesContexte permet de récuperer les contrats d'entrées de l'étape routeur en fonction de
         * la valeur d'entrée.
         * Valeur d'entrée == 12, les contrats d'entrées sont : l'objet ContractualisationActe et IndicateurImpression
         * Valeur d'entrée == 14, les contrats d'entrées sont : l'objet ActeReprise
         * Valeur d'entrée == 1, les contrats d'entrées sont : l'objet ActeReprise et ModeSignature
         * Valeur d'entrée == 2, les contrats d'entrées sont : l'objet ContractualisationActe et ModeSignature
         * @param valeurEntreeEtapeRouteur
         */
        private getDonneesContexte(valeurEntreeEtapeRemiseCG);
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
        private nextIDNImpression();
        private nextClasseurClientPapier();
        private nextClasseurClientElectronique();
        private addIdMaterielToContexte();
    }
}

declare module MyWay.Contractualisation {
    /**
     * @author S0076222
     */
    class RemiseCGService {
        private $q;
        private serviceAgentExtended;
        private contractualisationModaleService;
        private remiseCGContexteService;
        private dossierNumeriqueService;
        static $inject: string[];
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         * @param contractualisationModaleService
         * @param remiseCGContexteService
         * @param dossierNumeriqueService
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationModaleService: ContractualisationModaleService, remiseCGContexteService: RemiseCGContexteService, dossierNumeriqueService: DossierNumeriqueService);
        init(): ng.IPromise<boolean>;
        /**
         *
         */
        nextEtape(): ng.IPromise<void>;
        /**
         *
         * @param contractualisationActe
         */
        private getCodeRemiseCG(contractualisationActe);
        /**
         *
         * @param modeVente
         * @param modeSignature
         */
        private getCodeModeContractualistion(modeVente, modeSignature);
        /**
         *
         * @param contractualisationActe
         */
        private getModeVente(contractualisationActe);
        /**
         *
         */
        getRemiseCGContexte(): RemiseCGContexteModele;
        /**
         *
         */
        getIdPersonne(): string;
        /**
         *
         */
        getLibelleActe(): string;
        /**
         *
         * @param listeDocumentAProduire
         */
        getListDocumentsRDE(listeDocumentAProduire: Array<Myway.Ressource.ContractualisationActe.IDocumentAProduire>): Array<myway.comEditiqueNumerisation.Modeles.IDocumentEntreprise>;
        /**
         *
         */
        getDonneesRemiseCG(): myway.comEditiqueNumerisation.Modeles.IRemiseCG;
    }
}

declare module MyWay.Contractualisation {
    class Su1pService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        isBasculeCREDOSCC(codeEtablissement: string, codeActeGestion: string): ng.IPromise<boolean>;
        /**
         *
         * @param datas
         */
        private filtreSU1PParDates(datas);
        private isBasculeAgence(caissesBasculeesCREDOSCC, agenceRattachement);
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe AnnulationContexteModele implemente l'interface IContractualisationContexteModele afin de présenter les contrats d'entrées
     * de l'étape annulation mode électronique.
     * @author S0076222
     */
    class AnnulationContexteModele implements IContractualisationContexteModele {
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        idIDN: string;
        idMat: string;
        caisse: string;
        agent: string;
        codeCanal: string;
        codeEntite: string;
        identifiantActeExterne: string;
        codeModeMiseEnGestion: string;
        modeEnvoi: string;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, idIDN: string, idMat: string, caisse: string, agent: string, codeCanal: string, codeEntite: string, identifiantActeExterne?: string, codeModeMiseEnGestion?: string, modeEnvoi?: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service AnnulationContexteService a pour objectif d'intialiser annulation en mode electronique.
     * @author S0076222
     */
    class AnnulationContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        contratsContexte: AnnulationContexteModele;
        /**
         *
         * @param $q
         * @param serviceAgentExtended
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): ng.IPromise<void>;
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation.sed {
    interface IAnnulationResponse {
    }
    class AnnulationContractualisationService {
        private serviceAgent;
        private alerteImpressionService;
        private annulationContexteService;
        private dossierNumeriqueService;
        private contractualisationModaleService;
        private hubmailService;
        static $inject: string[];
        /**
         *
         * @param serviceAgent
         * @param alerteImpressionService
         * @param annulationContexteService
         * @param dossierNumeriqueService
         * @param contractualisationModaleService
         * @param hubmailService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, alerteImpressionService: AlerteImpressionService, annulationContexteService: AnnulationContexteService, dossierNumeriqueService: DossierNumeriqueService, contractualisationModaleService: ContractualisationModaleService, hubmailService: HubmailService);
        /**
         * Permet l'annulation d'une signature électronique
         * @constructor
         * @returns void
         */
        annulationContractualisationElectronique(): ng.IPromise<void>;
        /**
         *
         *
         */
        private nextEtapeAlerteImpression();
        /**
         * fonction checkEligibleHubmail()
         * @params mode
         * vérifie l'éligibilité à hubmail et retourne boolean
         */
        private checkEligibleHubmail();
    }
}

declare module MyWay.Contractualisation {
    /**
     * la classe ConfirmationContexteModele implemente l'interface IContractualisationContexteModele
     * afin de présenter les contrats d'entrées
     * de l'étape confirmation.
     * @author S0076222
     */
    class ConfirmationContexteModele implements IContractualisationContexteModele {
        authenficationInfo: MyWay.Services.Context.AuthentificationInfo;
        idIDN: string;
        idMat: string;
        caisse: string;
        agent: string;
        codeCanal: string;
        codeEntite: string;
        modeEnvoi: string;
        constructor(authenficationInfo: MyWay.Services.Context.AuthentificationInfo, idIDN: string, idMat: string, caisse: string, agent: string, codeCanal: string, codeEntite: string, modeEnvoi?: string);
    }
}

declare module MyWay.Contractualisation {
    /**
     * Le service ConfirmationContexteService a pour objectif d'intialiser annulation en mode electronique.
     * @author S0076222
     */
    class ConfirmationContexteService implements IContractualisationContexteManager {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        contratsContexte: ConfirmationContexteModele;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): ng.IPromise<void>;
        nextEtape(valeurSortie?: number, ...contrats: Array<IContexteMyWayModele>): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation.sed {
    class ConfirmationService {
        private $q;
        private routeurContexteService;
        private alerteImpressionService;
        private contractualisationModaleService;
        private confirmationContexteService;
        static $inject: string[];
        constructor($q: ng.IQService, routeurContexteService: RouteurContexteService, alerteImpressionService: AlerteImpressionService, contractualisationModaleService: ContractualisationModaleService, confirmationContexteService: ConfirmationContexteService);
        /**
         * Permet l'impression papier avec le contôle entité
         * @constructor
         * @returns void
         */
        controlerImpression(): ng.IPromise<void>;
    }
}

declare module MyWay.Contractualisation.Ressources.AlerteImpression {
    class AlerteImpressionConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.AlerteImpression {
    interface IDetailAlerteImpression {
        codeEtablissement: string;
        codeEntiteVente: string;
        codeCanal: string;
        libelleMessagePopUp: string;
        libelleActionReservee: string;
        indicAlerteImpressionPapier: string;
    }
}

declare module MyWay.Contractualisation.Ressources.AlerteImpression {
    class AlerteImpressionRequestFactory {
        /**
         *
         * @param codeEtablissement
         * @param codeCanal
         * @param codeEntiteVente
         */
        create(codeEtablissement: string, codeCanal: string, codeEntiteVente: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.ConsultationIdn {
    class ConsultationIdnConstants {
        static RESSOURCE_REST_URL_RECUPERER_DOCUMENTS_IDN_ATTRIBUTAIRE: string;
    }
}

declare module MyWay.Contractualisation.Ressources.ConsultationIdn {
    class RecupererDocumentsIdnAttributaireFactory {
        private methode;
        private idActeIdn;
        private codeApplication;
        constructor(methode: MyWay.Services.MethodEnum, idActeIdn: string, codeApplication: string);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentEntreprise {
    class DocumentEntrepriseConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentEntreprise {
    class DocumentEntrepriseRequestFactory {
        create(clesRattachement: string[]): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentAProduireRequestFactory {
        /**
         *
         * @param documentActe
         * @param contractualisationActe
         * @param listeDocumentActe
         */
        createDocumentAProduireFromDocumentActe(documentActe: Myway.Ressource.DocumentParametre.IDocumentActe, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, listeDocumentActe: Array<Myway.Ressource.DocumentParametre.IDocumentActe>): Myway.Ressource.ContractualisationActe.IDocumentAProduire;
        /**
         *
         * @param documentActe
         * @param listeDocumentActe
         * @param codeCanal
         */
        private getCodeModeUsage(documentActe, listeDocumentActe, codeCanal);
        /**
         *
         * @param documentActe
         * @param listeDocumentActe
         * @param codeCanal
         */
        private getCodeModeUsageBIS(documentActe, listeDocumentActe, codeCanal);
        /**
         *
         * @param contractualisationActe
         * @param documentActe
         */
        getListeSignatairesDocument(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentActe: Myway.Ressource.DocumentParametre.IDocumentActe): Array<Myway.Ressource.ContractualisationActe.ISignataireDocument>;
        /**
         *
         * @param signataireActe
         */
        getSignataireDocument(signataireActe: Myway.Ressource.ContractualisationActe.ISignataireActe): Myway.Ressource.ContractualisationActe.ISignataireDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentParametreConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DocumentParametre {
    class DocumentParametreRequestFactory {
        /**
         *
         * @param listeActes
         * @param codeCanal
         * @param codeModeMiseGestion
         * @param codeTypeMarcheDocumentEntreprise
         */
        create(listeActes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheDocumentEntreprise: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class ActeGestionFactory {
        /**
         *
         * @param codeActeGestion
         * @param identifiantActeIDN
         * @param codeCanal
         * @param referenceOffre
         * @param codeTypeProduit
         * @param numeroEntiteTitulaire
         * @param identifiantAgent
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         * @param codeGuichet
         * @param acteGestionArcade
         * @param nodapeTitulaire
         * @param isActeGestionPrincipal
         * @param indicateurPapier
         * @param compte
         * @param codeTypeEDS
         * @param codeEtablissement
         * @param identifiantActeExterne
         * @param typeProfessionnel
         */
        createActeGestion(codeActeGestion: string, identifiantActeIDN: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, isActeGestionPrincipal: boolean, indicateurPapier: boolean, compte: string, codeTypeEDS: string, codeEtablissement: string, identifiantActeExterne: string, typeProfessionnel: string, referenceContrat: string, referenceContratCarte: string): IActeGestion;
        /**
         *
         * @param codeActeGestion
         * @param listeActeSecondaires
         * @param identifiantActeIDN
         * @param codeCanal
         * @param referenceOffre
         * @param codeTypeProduit
         * @param numeroEntiteTitulaire
         * @param identifiantAgent
         * @param referenceEDSInterneClient
         * @param referenceEDSExterneClient
         * @param codeGuichet
         * @param acteGestionArcade
         * @param nodapeTitulaire
         * @param acteGestionCompteSupport
         * @param isActeGestionPrincipal
         * @param indicateurPapier
         * @param compte
         * @param codeTypeEDS
         * @param codeEtablissement
         * @param identifiantActeExterne
         * @param typeProfessionnel
         * @param referenceContrat
         * @param referenceContratCarte
         */
        createListeActeGestion(codeActeGestion: string, listeActeSecondaires: Array<string>, identifiantActeIDN: string, codeCanal: string, referenceOffre: number, codeTypeProduit: string, numeroEntiteTitulaire: number, identifiantAgent: number, referenceEDSInterneClient: number, referenceEDSExterneClient: number, codeGuichet: string, acteGestionArcade: string, nodapeTitulaire: number, acteGestionCompteSupport: string, isActeGestionPrincipal: boolean, indicateurPapier: boolean, compte: string, codeTypeEDS: string, codeEtablissement: string, identifiantActeExterne: string, typeProfessionnel: string, referenceContrat: string, referenceContratCarte: string): Array<IActeGestion>;
        /**
         *
         * @param isActeGestionPrincipal
         */
        private getTopActeGestionPrincipal(isActeGestionPrincipal);
        /**
         *
         * @param codeCanal
         * @param typeProfessionnel
         */
        private getModeContract(codeCanal, typeProfessionnel);
        /**
         *
         * @param codeEtablissementFinancier
         * @param codeGuichet
         * @param identifiantDossierVente
         * @param referenceContrat
         * @param referenceContratCarte
         * @param listeTitulairesActe
         */
        private getListeReferenceExterne(codeEtablissementFinancier, codeGuichet, identifiantDossierVente, referenceContrat, referenceContratCarte, identifiantPersonne);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class DossierCanalNumeriqueConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    interface IDossierCanalNumeriqueOutput {
        listeDossierCanalNumerique: Array<IDossierCanalNumerique>;
    }
    interface IDossierCanalNumerique {
        identifiantDossier: string;
    }
    interface IActeGestion {
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
        listeReferenceExterne: Array<IReferenceExterne>;
    }
    interface IDossierCanalNumeriqueInput {
        listeActeGestion: Array<IActeGestion>;
    }
    interface IReferenceExterne {
        identifiantReferenceExterne: string;
        typeReferenceExterne: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierCanalNumerique {
    class DossierCanalNumeriqueRequestFactory {
        private methode;
        private dossierCanalNumeriqueInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierCanalNumeriqueInput: IDossierCanalNumeriqueInput);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class CodeEvenementMetierFactory {
        /**
         *
         * @param codeActeGestion
         */
        createCodeEvenementMetierFromCodeActeGestion(codeActeGestion: string): Myway.Ressource.DossierContrat.ICodeEvenementMetier;
        createListeCodeEvenementMetierFromListeActeSecondaires(listeActeSecondaires: Array<string>): Array<Myway.Ressource.DossierContrat.ICodeEvenementMetier>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratFactory {
        /**
         *
         * @param acteGestion
         * @param indicateurPapier
         * @param codeEtablissementFinancier
         * @param codeModeContractualisation
         * @param codeGuichet
         */
        createDossierContratFromActeGestion(acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion, indicateurPapier: boolean, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string): Myway.Ressource.DossierContrat.IDossierContratInput;
        /**
         *
         * @param codeEtablissementFinancier
         * @param codeGuichet
         * @param identifiantDossierVente
         * @param referenceContrat
         * @param referenceContratCarte
         * @param listeTitulairesActe
         */
        private getListeReferenceExterne(codeEtablissementFinancier, codeGuichet, identifiantDossierVente, referenceContrat, referenceContratCarte, listeTitulairesActe);
        /**
         *
         * @param acteGestion
         */
        private getIdentifiantPersonne(listeTitulairesActe);
        /**
         *
         * @param acteGestion
         * @param listeTitulairesActe
         */
        private getIdentifiantContrat(acteGestion, listeTitulairesActe);
        /**
         *
         * @param acteGestion
         * @param listeTitulairesActe
         */
        private getIdentifiantContratActeReprise(acteReprise, listeTitulairesActe);
        /**
         *
         * @param acteReprise
         * @param indicateurPapier
         * @param codeEtablissementFinancier
         * @param codeModeContractualisation
         */
        createDossierContratFromActeReprise(acteReprise: IActeReprise, indicateurPapier: boolean, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string): Myway.Ressource.DossierContrat.IDossierContratInput;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContrat {
    class DossierContratRequestFactory {
        private methode;
        private dossierContratInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierContratInput: Myway.Ressource.DossierContrat.IDossierContratInput);
        /**
         *
         */
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContratServi {
    class DossierContratServiConstants {
        static RESSOURCE_REST_URL: string;
        static ACTE_PRINCIPAL: string;
        static ACTE_SECONDAIRE: string;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContratServi {
    class DossierContratServiRequestFactory {
        private methode;
        private dossierContratServiceInput;
        constructor(methode: MyWay.Services.MethodEnum, dossierContratServiceInput: Myway.Ressource.DossierContratServi.IDossierContratServiceInput);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierContratServi {
    enum TypeActeEnum {
        PRINCIPAL = 1,
        SECONDAIRE = 0,
    }
    class DossierContratServiceInputFactory {
        private static CODE_APPLICATION;
        private static CREATION_DOSSIER;
        /**
         *
         * @param acteGestion
         * @param indicateurPapier
         * @param codeEtablissementFinancier
         * @param codeModeContractualisation
         * @param codeGuichet
         */
        createDossierContratServiceInputFromActe(acteGestion: Myway.Ressource.ContractualisationActe.IActeGestion | IActeReprise, indicateurPapier: boolean, codeEtablissementFinancier: string, codeModeContractualisation: string, codeGuichet: string, listeDocuments: Array<Myway.Ressource.ConsultationIdn.IDocumentIdntAttributaire>): Myway.Ressource.DossierContratServi.IDossierContratServiceInput;
        /**
         *
         * @param acteGestion
         */
        private getListeActe(acteGestion, codeEtablissementFinancier, codeGuichet);
        /**
         *
         * @param acteGestion
         * @param codeEtablissementFinancier
         * @param codeGuichet
         */
        private getRice(referenceContrat, codeEtablissementFinancier, codeGuichet);
        /**
         *
         * @param codeActe
         * @param documents
         */
        private getListeDocumentsDossierContratServi(codeActe, documents);
        /**
         *
         * @param codeActe
         * @param actePrincipal
         * @param codeDossier
         * @param idContrat
         * @param codeModeCreationDossier
         * @param idRegroupement
         * @param idOffre
         * @param numeroEntiteTitulaire
         * @param numeroPersonne
         * @param modeMiseAJourDossier
         */
        private getActe(codeActe, actePrincipal, codeDossier, idContrat, idOffre, numeroEntiteTitulaire, numeroPersonne, numeroDossierVente);
        /**
         *
         * @param codeEtablissementFinancier
         * @param codeGuichet
         * @param identifiantDossierVente
         * @param referenceContrat
         * @param referenceContratCarte
         * @param listeTitulairesActe
         */
        private getListeReferenceExterne(codeEtablissementFinancier, codeGuichet, identifiantDossierVente, referenceContrat, referenceContratCarte, listeTitulairesActe);
        /**
         *
         * @param listeTitulairesActe
         */
        private getIdentifiantPersonne(listeTitulairesActe);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ActeFactory {
        /**
         *
         * @param contractualisationActe
         */
        createActeFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): Myway.Ressource.DossierNumerique.IActe;
        /**
         *
         * @param contractualisationActe
         */
        private getReferenceContrat(contractualisationActe);
        /**
         *
         * @param acteGestion
         */
        private isActeGestionBPCEA(codeActeGestion);
        /**
         * Modif ALB 19/08/2019 pour    , pas de set de date de fin de validité par la spa.contract à 1 an pour les actes Impulse, Izivente et Epargne.
         * Ainsi dans IDN, la date de fin de validité est celle établie par le producteur
         * Creation d'une autre fonction car isActeGestionBPCEA est aussi utilisé pour récupérer le code mail signataire
         * Pas propre mais je n'ai pas trouvé mieux pour identifier les actes Impulse, Izivente et Epargne'
         * @param acteGestion
         */
        private isActeGestionWithDateFinValiditeToBeReplaced(codeActeGestion);
        /**
         * Modif ALB 19/08/2019 pour INC001532187,
         * Pas propre mais je n'ai pas trouvé mieux pour identifier les actes Epargne'
         * pour les épargnes, la date de fin de validité doit être à 2 mois, sinon on a un soucis avec les documents
         * @param acteGestion
         */
        private isActeGestionEpargne(libelleActeGestion);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionMSI(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getLibelleMotifNonEligibilite(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionPJI(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionContrat(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionCRE(contractualisationActe);
        private getCodeMailSignataire(contractualisationActe);
        private getDateFinValiditeActe(typeProfessionnel, libelleActe);
        private getTopFAFGXML();
        private getListeReferenceActe(referenceOffre, referenceContratCarte);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class AnnulationDossierFactory {
        /**
         *
         * @param idActeIdn
         * @param codeEtablissementFinancier
         * @param codeApplication
         */
        create(idActeIdn: string, codeEtablissementFinancier: string, codeApplication: string): Myway.Ressource.DossierNumerique.IAnnulationDossier;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ComportementSignatureDocumentFactory {
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         */
        createComportementSignatureDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IComportementSignatureDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ContenuDocumentAlternatifFactory {
        /**
         *
         * @param documentAProduire
         */
        createContenuDocumentAlternatifFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IContenuDocumentAlternatif;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ContenuDocumentFactory {
        /**
         *
         * @param documentAProduire
         * @param codeEtablissementFinancier
         */
        createContenuDocumentFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Myway.Ressource.DossierNumerique.IContenuDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class DocumentFactory {
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         * @param codeEtablissementFinancier
         */
        createDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Myway.Ressource.DossierNumerique.IDocument;
        /**
         *
         * @param contractualisationActe
         * @param codeEtablissementFinancier
         */
        createListeDocumentFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeEtablissementFinancier: string): Array<Myway.Ressource.DossierNumerique.IDocument>;
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         */
        private getReferenceDocumentProducteur(contractualisationActe, documentAProduire);
        /**
         *
         * @param identifiantAgent
         * @param indice
         */
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
        /**
         *
         * @param contractualisationActe
         * @param codeEtablissementFinancier
         * @param codeApplication
         */
        createDossierNumeriqueFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeEtablissementFinancier: string, codeApplication: string): Myway.Ressource.DossierNumerique.IDossierNumerique;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class DossierNumeriqueRequestFactory {
        private methode;
        private dossierNumerique;
        private annulationDossier;
        constructor(methode: MyWay.Services.MethodEnum, dossierNumerique: Myway.Ressource.DossierNumerique.IDossierNumerique, annulationDossier: Myway.Ressource.DossierNumerique.IAnnulationDossier);
        /**
         *
         */
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxBinaireFactory {
        /**
         *
         */
        createFluxBinaireFromDocumentAProduire(): Myway.Ressource.DossierNumerique.IFluxBinaire;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxDocPartageICGFactory {
        /**
         *
         * @param documentAProduire
         */
        createFluxDocPartageICG(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IFluxDocPartageICG;
        /**
         *
         * @param documentAProduire
         */
        private getReferencePartage(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxFilenetFactory {
        private static GED_DOCUMENT_CCSE;
        private static IDENTIFIANT_COMPOSANT_APPLICATIF;
        /**
         *
         * @param documentAProduire
         * @param codeEtablissementFinancier
         */
        createFluxFilenet(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Myway.Ressource.DossierNumerique.IFluxFilenet;
        /**
         *
         * @param documentAProduire
         * @param codeEtablissementFinancier
         */
        private getIdentifiantGEDDocument(documentAProduire, codeEtablissementFinancier);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxGCEDocFactory {
        /**
         *
         * @param nomModeleGcedoc
         * @param fluxXmlGcedoc
         */
        createFluxGCEDoc(nomModeleGcedoc: string, fluxXmlGcedoc: string): Myway.Ressource.DossierNumerique.IFluxGCEDoc;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxGedTemporaireFactory {
        private static IDENTIFIANT_COMPOSANT_APPLICATIF;
        /**
         *
         * @param documentAProduire
         */
        createFluxGedTemporaireFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IFluxGedTemporaire;
        /**
         *
         * @param documentAProduire
         */
        private getIdentifiantDocumentTemporaire(documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxLignesFactory {
        /**
         *
         */
        createFluxLignesFromDocumentAProduire(): Myway.Ressource.DossierNumerique.IFluxLignes;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class FluxXHTMLFactory {
        /**
         *
         */
        createFluxXHTMLFromDocumentAProduire(): Myway.Ressource.DossierNumerique.IFluxXHTML;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ImpressionDocFactory {
        /**
         *
         * @param documentAProduire
         */
        createImpressionDocFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IImpressionDoc;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class InfoDocumentFactory {
        private static LABEL_DOCUMENT_CCSE;
        private static LIBELLE_DESCRIPTION_DOCUMENT_IDN_CCSE;
        private static TYPE_MIME_DOCUMENT;
        /**
         *
         * @param contractualisationActe
         * @param documentAProduire
         */
        createInfoDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IInfoDocument;
        /**
         *
         * @param documentAProduire
         */
        private getLabelDocument(documentAProduire);
        /**
         *
         * @param documentAProduire
         */
        private getLibelleDescriptionDocumentIDN(documentAProduire);
        /**
         *
         * @param documentAProduire
         */
        private getUrlDocument(documentAProduire);
        /**
         *
         * @param documentAProduire
         * @param codeCanal
         */
        private getModeUsageDocument(documentAProduire, codeCanal);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class OperationFinanciereFactory {
        /**
         *
         * @param operationFinanciere
         */
        createOperationFinanciereFromContractualisationActe(operationFinanciere: Myway.Ressource.ContractualisationActe.IOperationFinanciere): Myway.Ressource.DossierNumerique.IOperationFinanciere;
        /**
         *
         * @param listeOperationFinanciere
         */
        createListeOperationFinanciere(listeOperationFinanciere: Array<Myway.Ressource.ContractualisationActe.IOperationFinanciere>): Array<Myway.Ressource.DossierNumerique.IOperationFinanciere>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class OptionSignataireFactory {
        createOptionSignataireFromDocumentAProduire(optionSignataire: Myway.Ressource.ContractualisationActe.IOptionSignataire): Myway.Ressource.DossierNumerique.IOptionSignataire;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class ReferenceActeFactory {
        static TYPE_REFERENCE_ACTE_E01: string;
        static TYPE_REFERENCE_ACTE_E02: string;
        createReferenceActe(typeReferenceActe: string, valReferenceActe: string): Myway.Ressource.DossierNumerique.IReferenceActe;
        createListeReferenceActe(typeReferenceActe: string, valReferenceActe: string): Array<Myway.Ressource.DossierNumerique.IReferenceActe>;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignataireDocumentFactory {
        private static NUMERO_AFFICHAGE_DOC_ENTREPRISE;
        createSignataireDocumentFromSignataireDocument(signataireDocument: Myway.Ressource.ContractualisationActe.ISignataireDocument, numeroAffichageDocument: number, codeIndicateurSignature: boolean): Myway.Ressource.DossierNumerique.ISignataireDocument;
        createListeSignataireDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Array<Myway.Ressource.DossierNumerique.ISignataireDocument>;
        private getCodeIndicateurSignature(documentAProduire);
        private getNumeroAffichageDocument(contractualisationActe, documentAProduire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignataireFactory {
        createSignataireFromSignataireActe(signataireActe: Myway.Ressource.ContractualisationActe.ISignataireActe): Myway.Ressource.DossierNumerique.ISignataire;
        createListeSignataireFromListeSignataireeActe(listeSignataireActe: Array<Myway.Ressource.ContractualisationActe.ISignataireActe>): Array<Myway.Ressource.DossierNumerique.ISignataire>;
        private getCodeTypeSignr(codeTypeSignataire);
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignatureClientFactory {
        /**
         *
         * @param documentAProduire
         */
        createSignatureClientFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.ISignatureClient;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SignatureEntitetFactory {
        createSignatureEntiteFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.ISignatureEntite;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class StockageDocumentFactory {
        createStockageDocumentFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IStockageDocument;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class SuiviActeFactory {
        /**
         *
         * @param contractualisationActe
         */
        createSuiviActeFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): Myway.Ressource.DossierNumerique.ISuiviActe;
    }
}

declare module MyWay.Contractualisation.Ressources.DossierNumerique {
    class TitulaireFactory {
        createTitulaireFromTitulaireActe(titulaireActe: Myway.Ressource.ContractualisationActe.ITitulaireActe): Myway.Ressource.DossierNumerique.ITitulaire;
        createListeTitulaireFromListeTitulaireActe(listeTitulaireActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>): Array<Myway.Ressource.DossierNumerique.ITitulaire>;
    }
}

declare module MyWay.Contractualisation.Ressources.InitierSignature {
    class InitierSignatureConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.InitierSignature {
    class InitierSignatureFactory {
        private methode;
        private initierSignatureInput;
        constructor(methode: MyWay.Services.MethodEnum, initierSignatureInput: Myway.Ressource.DossierNumerique.IInitierSignatureInput);
        create(): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.OffresEtab {
    class OffresEtabConstants {
        static RESSOURCE_REST_URL: string;
        static FLAG_VPC: string;
        static FLAG_MEGI: string;
        static FLAG_ALL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.OffresEtab {
    class OffresEtabFactory {
        create(flagvpc: boolean, flagmegi: boolean, codeCanal: string, dateStandard: Date, idDossierVente: number): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.ParametreEtab {
    class ParametreEtabConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.ParametreEtab {
    class ParametreEtabFactory {
        create(codeEtablissement: string): MyWay.Services.IRequestSettings;
    }
}

declare module MyWay.Contractualisation.Ressources.RechercheProduitET {
    class RechercheProduitETConstants {
        static RESSOURCE_REST_URL: string;
    }
}

declare module MyWay.Contractualisation.Ressources.RechercheProduitET {
    class RechercheProduitETRequestFactory {
        private methode;
        private codeAgent;
        private codeEtablissement;
        private numeroEntiteTitulaire;
        private codeGuichetInterbancaire;
        private codeProduit;
        private numeroCompte;
        constructor(methode: MyWay.Services.MethodEnum, codeAgent: string, codeEtablissement: string, numeroEntiteTitulaire: string, codeGuichetInterbancaire: string, codeProduit: string, numeroCompte: string);
        create(): MyWay.Services.IRequestSettings;
    }
}
