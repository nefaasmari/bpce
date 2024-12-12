
declare module Operation2Librairie {
    var app: any;
}

declare module Operation2Librairie.Constantes {
    module Habilitations {
        var CREER_ANNULATION_REVERSEMENT: string;
        var CREER_RECALL_ACVS: string;
        var ANNULER_PRELEVEMENT: string;
        var REVERSER_PRELEVEMENT: string;
    }
}

declare module Operation2Librairie.Constantes {
    module Contexte {
        var CLE_PRIMAIRE_TRANSACTION: string;
        var CODE_APPLICATION: string;
    }
}

declare module Operation2Librairie.Constantes {
    /**
     * les listes d'alimentation des combo-box
     */
    module ListeParametrage {
        var STATUT_ALLER_SDD: string;
        var STATUT_ALLER_SCT: string;
        var STATUT_RETOUR: string;
        var STATUT_COMPLEMENTAIRE: string;
        var CANAL: string;
        var FILTRAGE_CONNEXE: string;
        var ORIGINE_RECALL: string;
        var MOTIF_RECALL: string;
        var MOTIF_RECALL_FRAUDE: string;
        var MOTIF_RECALL_COMPLET: string;
        var MOTIF_ACVS: string;
        var STATUT_ALLER_ACVS: string;
        var STATUT_COMPLEMENTAIRE_ACVS: string;
        var STATUT_COMPLEMENTAIRE_RAPPEL: string;
        var MOTIF_RETOUR_ACVS: string;
        var MOTIF_REMBOURSEMENT_ACVS: string;
        var TYPE_REPONSE_RECALL: string;
        var STATUT_ABS_INST_ENTRANT_ALLER: string;
        var STATUT_ABS_INST_SORTANT_ALLER: string;
        var STATUT_ABS_INST_ENTRANT_RETOUR: string;
        var STATUT_COMPLEMENTAIRE_INST: string;
        var CANAL_INST: string;
        var OFFRE_SCT: string;
        var TYPE_TRANSACTION_ALLER_INST: string;
        var TYPE_INSTRUCTION_ALLER: string;
        var TYPE_INSTRUCTION_RETOUR: string;
        var SENS_ECHANGE: string;
        var MOTIF_RETOUR_SCT: string;
        var STATUT_TRN_RETOUR_SCT: string;
        var STATUT_TRN_RECALL_ALLER: string;
        var STATUT_TRN_RECALL_RETOUR: string;
        var FRAIS_AUTRES_BANQUES: string;
        var TRANSACTION_INTERNE: string;
        var TYPE_COMPTE_IMPUTER: string;
        var TYPE_TRANSACTION_PAIEMENT: string;
        var STATUT_COMPL_SDD_ALLER: string;
        var OFFRE_SDD: string;
        var FILTRAGE_CONNEXE_SDD: string;
        var MOTIF_ANNULATION_SDD: string;
        var MOTIF_REVERSEMENT_SDD: string;
        var MANDAT_MODIFIE_SDD: string;
        var STATUT_ABS_INST_ENTRANT_SDD_ALLER: string;
        var STATUT_ABS_INST_SORTANT_SDD_ALLER: string;
        var STATUT_ABS_INST_ENTRANT_RETOUR_SDD: string;
        var STATUT_ABS_INST_ENTRANT_ALLER_AUTHORISE: string;
        var STATUT_COMPL_INST_SDD_ALLER: string;
        var TYPE_INSTRUCTION_ALLER_SDD: string;
        var TYPE_INSTRUCTION_RETOUR_SDD: string;
        var STATUT_TRANS_SDD_ANNU_REVERS: string;
        var STATUT_COMPL_SDD_ANNU_REVERS: string;
        var MOTIF_REPONSE_NEGATIV: string;
        var TYPE_INSTRUCTION_ALLER_SDD_SORTANT: string;
        var TYPE_INSTRUCTION_ALLER_SORTANT_SCT: string;
        var STATUT_PRELEVEMENT: string;
        var TYPE_TRANSACTION_ON_US: string;
        var TYPE_TRANSACTION_NOT_ON_US: string;
        var STATUT_COURRIER: string;
        var TARIFICATION_CLIENT: string;
        var ENVOI_COURRIER_AUTOMATIQUE: string;
        var ETAT_RETOUR: string;
        var TYPE_COMPTE_A_CREDITER: string;
        var STATUT_ABS_INST_SORTANT_ALLER_COMPLET: string;
        var STATUT_ABS_INST_RETOUR_COMPLET: string;
        var MOTIF_RECALL_RFRO: string;
        var TYPE_TRANSACTION_LIE: string;
        var STATUT_TRANSACTION_CONNEXE: string;
        var TYPE_TRANSACTION_CONNEXE: string;
        var MOTIF_RETOUR_REMBOURSEMENT: string;
        var MOTIF_REJET_SDD: string;
        var MOTIF_RETOUR_SDD: string;
        var MOTIF_REMBOURSEMENT_SDD: string;
        var TYPE_REPONSE_RECLAMATION_FOND: string;
        var STATUT_RECLAMATION: string;
        var MOTIF_REPONSE_RECLAMATION_FOND: string;
        var MOTIF_REPONSE_RECLAMATION_DATE: string;
        var DEMANDE_SORT: string;
        var TYPE_REPONSE_RECLAMATION_DATE: string;
        var STATUT_RECHERCHE_INST_ALLER_SORTANT_SDD: string;
        var STATUT_RECHERCHE_INST_RETOUR_SDD: string;
        var DATE_ACTIVATION_ABS: string;
        var MOTIF_LIEN_TRANSACTION: string;
    }
}

declare module Operation2Librairie.Constantes {
    module Popup {
        var BOUTON_FERMER: string;
        var LIBELLE_ERREUR_DEFAULT: string;
        var LIBELLE_HEADER_DETAIL_FLUX: string;
        var LIBELLE_ERREUR_CHARGEMENT: string;
    }
}

declare module Operation2Librairie.Constantes {
    module Url {
        var TOKEN_REST: string;
        var SEPA_PAIEMENT_DETAIL_TRANSACTION: string;
        var SEPA_PAIEMENT_LIEN_TRANSACTION: string;
        var SEPA_RECHERCHE_TYPE_PAIEMENT: string;
        var SEPA_PAIEMENT_RECHERCHE_HISTORIQUE: string;
        var SEPA_PAIEMENT_RECHRECHE_TRANSACTION: string;
        var SEPA_PAIEMENT_DETAIL_IMPUTATION: string;
        var SEPA_PAIEMENT_RECHRECHE_INSTRUCTION: string;
        var SEPA_PAIEMENT_PARAMETRAGE_SEPA: string;
        var SEPA_PAIEMENT_TYPOLOGIE_FLUX_ABS: string;
        var SEPA_PAIEMENT_ANN_UNIT_VIREMENT: string;
        var SEPA_PAIEMENT_ANN_MULTI_VIREMENT: string;
        var SEPA_PAIEMENT_DEMANDE_MULTI_COURRIER: string;
        var SEPA_PAIEMENT_ACTION_MULTI_RAPPEL_VIR: string;
        var OPERATION_FINANCIERE_CONVERSION_RIB: string;
        var SEPA_PAIEMENT_RECHERCHE_DEMANDE_CONNEXE: string;
        var SEPA_PAIEMENT_ANN_UNIT_PRELEVEMENT: string;
        var SEPA_PAIEMENT_RECHRECHE_RAPPEL: string;
        var SEPA_PAIEMENT_EXPORT_TRANSACTION: string;
        var SEPA_PAIEMENT_EXPORT_INSTRUCTION: string;
        var SEPA_PAIEMENT_EXPORT_TRANS_INSTRUCTION: string;
        var SEPA_PAIEMENT_RECH_TRANS_INSTRUCTION: string;
        var SEPA_PAIEMENT_RECHERCHE_COURRIER: string;
        var SYNTHESE_SERVICE_EQUIPEMENT_CLIENT: string;
        var SYNTHESE_SERVICE_MINI_PROFIL: string;
        var STRUCTURE_SERVICE_INFO_EDS: string;
        var STRUCTURE_SERVICE_ETABLISSEMENT_MYSYS: string;
        var STRUCTURE_SERVICE_COORDONNEE_EDS: string;
        var STRUCTURE_SERVICE_GUICHET_EDS: string;
        var TIERS_ADRESSE: string;
        var TIERS_IDENTIFICATION: string;
        var ENTITE_TITULAIRE_ADRESSE_ET: string;
        var ENTITE_TITULAIRE_INFO_ENTITE_TITULAIRE: string;
        var SEPA_PAIEMENT_DETAIL_TRN_INSTRUCTION: string;
        var SEPA_PAIEMENT_RECLAM_UNIT_VIREMENT: string;
        var SEPA_PAIEMENT_DEMANDE_SORT: string;
    }
}

declare module Operation2Librairie.Enumerations {
    /**
     * Enumeration Boolean
     */
    enum OuiNonEnum {
        OUI,
        NON,
    }
}

declare module Operation2Librairie.ParcoursSct.Constantes {
    module RechercheHistorique {
        var TYPE_APPEL_VIREMENT: string;
        var TYPE_APPEL_INSTRUCTION: string;
    }
}

declare module Operation2Librairie.Directives.Aiguillage.Controleur {
    class AiguillageControleurDirective {
        static NOM_CLASSE: string;
        infosFieldset: Array<Operation2Librairie.Directives.Aiguillage.Modele.IInfosFieldset>;
        sousProcessusChoisi: string;
        static $inject: any[];
        constructor();
    }
}

declare module Operation2Librairie.Directives.Aiguillage {
    function aiguillage(): ng.IDirective;
}

declare module Operation2Librairie.Directives.Aiguillage.Modele {
    interface IInfosFieldset {
        libelleProcessus: string;
        estValide: boolean;
        infosSousProcessus: Array<IInformationSousProcessus>;
    }
    interface IInformationSousProcessus {
        label: string;
        value: string;
        identifiantInfobulle: string;
    }
}

declare module Operation2Librairie.Directives.ListeMultiSelection.Controleurs {
    class ListeMultiSelectionControleur {
        private $scope;
        static $inject: string[];
        liste: Array<Operation2Librairie.Modeles.Application.IListeMultiSelection>;
        smsOpenAcScroll2: boolean;
        triState: boolean;
        desactiveToutSelection: boolean;
        triStateIndeterminate: boolean;
        triStateLabel: string;
        titreListe: string;
        cacherSelectionerTout: boolean;
        constructor($scope: ng.IScope);
        multiselectionChange(): void;
        forceMultiSelection(): void;
    }
}

declare module Operation2Librairie.Directives.ListeMultiSelection {
    /**
     *
     */
    function listeMultiSelection(): ng.IDirective;
}

declare module Operation2Librairie.Directives.SyntheseErreursFormulaire.Controleur {
    class SyntheseErreursFormulaireControleur {
        private $rootScope;
        private mwEvents;
        static NOM_CLASSE: string;
        private static logger;
        syntheseErreurs: Operation2Librairie.Directives.SyntheseErreursFormulaire.Modele.ISyntheseErreurs;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents);
        /**
         * Scroll vers une ancre passée en paramètre
         * @param ancre
         */
        allerVersAncre(ancre: string): void;
    }
}

declare module Operation2Librairie.Directives.SyntheseErreursFormulaire {
    function syntheseErreursFormulaire(): ng.IDirective;
}

declare module Operation2Librairie.Directives.SyntheseErreursFormulaire.Modele {
    interface ISyntheseErreurs {
        id: string;
        titre: string;
        listeErreurs: Array<Operation2Librairie.Modeles.Application.IErreurForm>;
    }
}

declare module Operation2Librairie.Modeles.Application {
    interface IErreurForm {
        champ: string;
        libelle: string;
        ancre: string;
    }
    interface IInformationEds {
        libelleEtablissement: string;
        telephone: string;
        fax: string;
        adresse: Operation2Librairie.Modeles.Rest.Structure.CoordonneeEDS.IAdresseEDS;
    }
}

declare module Operation2Librairie.Modeles.Application.ListeParametrage {
    interface ICleValeur {
        cle: string;
        valeur: string;
    }
}

declare module Operation2Librairie.Modeles.Application {
    class DateComparator implements MyWay.UI.IMwTableComparator {
        private $filter;
        private $parse;
        constructor($filter: ng.IFilterService, $parse: ng.IParseService);
        comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean;
    }
}

declare module Operation2Librairie.Modeles.Application {
    /**
     * Modèle de l'objet à passer en paramètre pour la création d'une navigation
     */
    interface IDonneesNavigationLisa {
        allerVersModeLisa: number;
        allerVersModeLocal: string;
    }
    interface IDonneesNavigationLisaEtendue extends IDonneesNavigationLisa {
        serviceLisa: Operation2Librairie.Services.Utilitaire.ILisaService;
    }
}

declare module Operation2Librairie.Modeles.Application {
    interface IListeMultiSelection extends Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur {
        selectionne: boolean;
        desactive: boolean;
    }
}

declare module Operation2Librairie.Modeles.Application {
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

declare module Operation2Librairie.Services.Application {
    /**
     * Service pour caluculer le Iban
     */
    class DeterminerIbanService implements IDeterminerIbanService {
        private $q;
        private conversionRibBicIbanService;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        constructor($q: ng.IQService, conversionRibBicIbanService: Operation2Librairie.Services.Rest.OperationFinanciereService.IConversionRibBicIbanService);
        /**
         * Si RICE est renseigné, et Iban n'est pas renseigné, on chercher le IBAN à partir du Rice. Si iban renseigné, on retourne le Iban
         * @param rice
         * @param iban
         */
        determinerIban(rice: MyWay.Model.Rice, iban: string): ng.IPromise<string>;
    }
    interface IDeterminerIbanService {
        determinerIban(rice: MyWay.Model.Rice, iban: string): ng.IPromise<string>;
    }
}

declare module Operation2Librairie.Services.Application {
    /**
     * Service pour get informations EDS
     */
    class InformationEdsService implements IInformationEdsService {
        private $q;
        private coordonneeEDSService;
        private etablissementMysysService;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        constructor($q: ng.IQService, coordonneeEDSService: Operation2Librairie.Services.Rest.Structure.ICoordonneeEDSService, etablissementMysysService: Operation2Librairie.Services.Rest.Structure.IEtablissementMysysService);
        /**
         * Get informations EDS
         * @param codeEtablissement
         * @param identifiantInterneSite
         */
        getInformationEds(codeEtablissement: string, identifiantInterneSite: number): ng.IPromise<Operation2Librairie.Modeles.Application.IInformationEds>;
    }
    interface IInformationEdsService {
        getInformationEds(codeEtablissement: string, identifiantInterneSite: number): ng.IPromise<Operation2Librairie.Modeles.Application.IInformationEds>;
    }
}

declare module Operation2Librairie.Services.Application {
    interface ISelectionApplicationService {
        /**
         * Methode pour sauvegarder le choix de la selection de l'application sur laquelle debrancher à partir de la page aiguillage
         * @param {string} selectionApplication
         */
        sauvegarderChoixSelectionApplication(selectionApplication: string): void;
        /**
         * Methode pour récupérer le choix de la selection de l'application sur laquelle debrancher à partir de la page aiguillage
         * @returns string
         */
        recupererChoixSelectionApplication(): string;
        getTitreSousProcesus(): string;
        setTitreSousProcessus(titre: string): void;
    }
}

declare module Operation2Librairie.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module Operation2Librairie.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module Operation2Librairie.Services.Utilitaire {
    /**
     * Interface du service
     */
    interface ICacheService {
        setToCache<T>(key: string, data: T): void;
        getFromCache<T>(key: string): T;
    }
}

declare module Operation2Librairie.Services.Utilitaire {
    interface IContexteService {
        authInfo: MyWay.Services.Context.AuthentificationInfo;
        getAuthInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        initialiserApplication(): ng.IPromise<boolean>;
    }
}

declare module Operation2Librairie.Services.Utilitaire {
    interface IDateTargetService {
        getTargetDay(dateDebut: Date, numberOfDays: number, afterDay: boolean): Date;
        isTargetDay(dateJour: Date): boolean;
    }
}

declare module Operation2Librairie.Services.Utilitaire {
    /**
     * Service de gestion de l'export Excel
     */
    class ExcelService implements IExcelService {
        private serviceAgent;
        private static CLASS_NAME;
        private static logger;
        private listeContenu;
        private bExport;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Génération du fichier Excel
         */
        exportExcel(nomFichier: string, tableau: any[]): boolean;
        /**
         * Alimentation des colonnes de contenu
         */
        private construireTableauContenu(tableau);
    }
    /**
     * Interface de la classe HabilitationsService
     */
    interface IExcelService {
        exportExcel(nomFichier: string, tableau: any[]): boolean;
    }
}

declare module Operation2Librairie.Services.Utilitaire {
    /**
     * Service contenant des méthodes utiles pour gérer le Habilitation applicatif
     */
    interface IHabilitationService {
        isHabiliteCreerAnnulRevers: boolean;
        isHabiliteCreerRecallAcvs: boolean;
        isHabiliteAnnulerPrelevement: boolean;
        isHabiliteReverserPrelevement: boolean;
        /**
         * Chargement des habilitations
         * Retour : tableau de booléens correspondant à chaque habilitations.
         */
        chargerHabilitation(): ng.IPromise<Array<boolean>>;
        estHabilite(codeHabilitation: string): ng.IPromise<boolean>;
    }
}

declare module Operation2Librairie.Services.Utilitaire {
    /**
     * Service Lisa
     */
    interface ILisaService {
        /**
         * Appelle la prochaine étape (code sortie : valeurSortie
         * urlLocal est appelé si travail en local ou en DUA sans utiliser le code processus
         */
        next(valeurSortie: number, urlLocal: string): ng.IPromise<void>;
    }
}

declare module Operation2Librairie.Services.Utilitaire {
    /**
     * Interface de la classe RechercheListeTransactionService
     */
    interface IListeMultiSelectionService {
        convertirEnListeMultiSelection(listeParametre: Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur[]): Array<Operation2Librairie.Modeles.Application.IListeMultiSelection>;
        construirLibelleListe(liste: Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur[]): string;
        getListeCleValeurSelectionne(listeMultiSelection: Array<Operation2Librairie.Modeles.Application.IListeMultiSelection>): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
    }
}

declare module Operation2Librairie.Services.Utilitaire {
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
        showModal(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>, dimension: string): ng.IPromise<any>;
    }
}

declare module Operation2Librairie.ParcoursSct.Modeles.Application {
    interface IHistoriqueEvenement {
        dateHeure: Date;
        evenement: string;
        acteur: string;
        description: string;
    }
}

declare module Operation2Librairie.ParcoursSct.Modeles.Application {
    interface ITransactionConnexe {
        dateReglement: string;
        typeTransaction: string;
        referenceTransaction: string;
        statut: string;
        motif: string;
        montant: number;
        instructionEntrante: string;
        instructionSortante: string;
        clePrimaireTransaction: number;
    }
    interface IInfosDemandeConnexe {
        origine: string;
        tarificationClient: string;
        frais: string;
        montantFrais: number;
        envoiCourrierAutomatique: string;
        dateEnvoiCourrier: Date;
        statutCourrierReponse: string;
        typeCompteCrediter: string;
        dateReceptionReponse: Date;
        motifReponseNegative: string;
        dateCreationDemande: Date;
        motifDemandeConnexe: string;
        motifRetourRemboursement: string;
        dateReceptionConnexe: Date;
        motifConnexeRecu: string;
        referenceAgent: number;
        justificationDemandeConnexe: string;
        ibanFraisReclamation: string;
        dateCreationDemandeSort: Date;
        indicateurDemandeSort: string;
        dateValeurCorrigee: Date;
        motifConnexeRecuReclamFond: string;
        motifConnexeRecuReclamDate: string;
        ibanInteretsCompensatoires: string;
        montantInteretsCompensatoires: number;
        utilisateur: string;
        blockNote: string;
        dateReglementTransInitiale: string;
        typeDonneurOrdreConnexe: string;
        infoReponseNegativeRecallFraude: string;
        infoReponseNegativeMotifLegal: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.EntiteTitulaire.AdresseEt {
    interface IAdresseET {
        /**
         * La ligne 2 correspond à tout ce qui est situé à
         * l'intérieur d'un bâtiment, cela peut être
         * l'indication d'étage, d'appartement, de porte,
         * de numéro de boite aux lettres, etc ...
         */
        ligne2adresseAfnor: string;
        /**
         * La ligne 3 correspond à tout ce qui est à l'extérieur
         * du batiment.
         * entrée, batiment, bloc, tour etc ...
         */
        ligne3adresseAfnor: string;
        /**
         * La ligne 4 permet d'identifier la voie de destination
         *
         * Peut comprendre :
         * - Le numéro dans la voie, type et nom de voie
         * - Le nom d'une résidence ou d'un ensemble immobilier
         *   qui ne peut être assimilé à une commune ou à un
         *   lieu-dit
         * - Un service X
         * - Une boîte postale
         * - Un numéro de CEDEX
         */
        ligne4adresseAfnor: string;
        /**
         * La ligne 5 permet d'identifier la destination :
         *
         * Peut comprendre :
         * - Nom d'un quartier, d'un lieu dit, d'un hameau
         * - Nom d'un ensemble immobilier pouvant être assimilé à
         *   une commune ou à un lieu dit et possédant plusieurs
         *   voies internes.
         */
        ligne5adresseAfnor: string;
        /**
         * Peut comprendre :
         * - Le numéro de code postal et nom de la localité
         * - Le numéro de code spécifique et nom de la localité
         *   complétés éventuellement par la mention CEDEX
         */
        ligne6adresseAfnor: string;
        /**
         * Numéro de téléphone associé à une adresse et
         * concernant un particulier ou un lieu d'activité
         * pour un professionnel.
         *
         * Pour un particulier, il s'agit dans la plupart des
         * cas, du numéro de téléphone du domicile.
         */
        telephoneAdresse: string;
        /**
         * Correspond au code Banque sous lequel un Etablissement
         * est répertorié par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Désignation courte de l'entité titulaire, optionnelle
         * et choisie au niveau de l'entité titulaire, lorsque
         * la désignation bancaire calculée sur 32 caractères
         * ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1
         * de l'adresse.
         */
        designationBancaire: string;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement bancaire ou financier sur la plateforme
         * Mysys
         * Synonyme : Client bancaire
         * Une ET se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * 1          mode simple
         * 2          mode joint entre époux
         * 3          mode joint entre tiers
         * 4          mode indivision
         */
        modeCompositionET: string;
        /**
         * 1          Usage privé
         * 2          Usage professionnel
         */
        codeTypeUsageET: string;
        /**
         * Numéro d'identification interne d'un élément de
         * structure d'un Etablissement bancaire ou financier
         * sur la plateforme bancaire Mysys.
         */
        identifiantElementDeStructure: number;
    }
}

declare module Operation2Librairie.Modeles.Rest.EntiteTitulaire.InformationEntiteTitulaire {
    interface IInformationEntiteTitulaire {
        /**
         * Caractéristiques de l'entité titulaire (libellé, mode de composition, code usage, ...)
         */
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
        listePersonneMandataire: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne  V1 de l'adresse.
         */
        designationEntiteTitulaire: string;
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         * Valeurs :
         *  - 1 Usage privé
         *  - 2 Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Valeurs :
         *  - 1 mode simple
         *  - 2 mode joint entre époux
         *  - 3 mode joint entre tiers
         *  - 4 mode indivision
         */
        modeCompositionEntiteTitulaire: string;
        /**
         * Complément désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'ET, lorsque la désignation bancaire calculée sur 2x32 caractères
         * ne convient pas au client (cas de forçage).
         * Ce complément de désignation sera utilisée dans la ligne V2 de l'adresse.
         */
        complementDesignationBancaire: string;
        /**
         * Définit l'état de l'entité titulaire à une date donnée dans la gestion administrative.
         * Valeurs :
         *  - 0 Actif
         *  - 1 Clôturé
         */
        codeEtatEntiteTitulaire: string;
        /**
         * Date enregistrement de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateMAJEntiteTitulaire: string;
        /**
         * Code indiquant le motif de la clôture administrative d'une entité titulaire.
         * Valeurs :
         *  - ' ' Non clôturé
         *  - '1' Plus d'activité bancaire
         *  - '2' Décédé
         *  - '3' Transféré
         *  - '4' Incident
         *  - '5' Indésirable
         *  - '6' Séparé
         *  - '7' Fusionné
         */
        codeMotifClotureEntiteTitulaire: string;
        /**
         * Date de fermeture de l'entité titulaire.
         * Type date au format yyyy-MM-dd
         */
        dateClotureEntiteTitulaire: string;
        /**
         * Spécifie le type d'indivision.
         * Valeurs :
         *  - 1 Mode indivision successorale
         *  - 2 Mode indivision conventionnel avec solidarité
         *  - 3 Mode indivision conventionnel sans solidarité
         */
        sousCodeModeCompositionET: string;
        /**
         * Numéro d'identification de l' agent de gestion de l'entité titulaire.
         */
        codeAgentGestionEntiteTitulaire: number;
        /**
         * Libellé de l'EDS de Gestion de l'entité titulaire.
         */
        libelleEDSGestionEntiteTitulaire: string;
        /**
         * Libellé associé au Code Etat de l'entité titulaire.
         */
        libelleEtatEntiteTitulaire: string;
        /**
         * Libellé associé au Type de désignation de l'entité titulaire.
         */
        libelleTypeDesignationEntiteTitulaire: string;
        /**
         * Libellé associé au Code usage de l"entité titulaire.
         */
        libelleUsageEntiteTitulaire: string;
        /**
         * Libellé associé au Mode de composition de l'entité titulaire.
         */
        libelleModeCompositionEntiteTitulaire: string;
        /**
         * Libellé associé au Sous-code Mode de composition de l'entité titulaire.
         */
        libelleSousCodeModeCompositionET: string;
        /**
         * Libellé de l'EDS de Domiciliation de l'entité titulaire.
         */
        libelleEDSDomiciliationEntiteTitulaire: string;
        /**
         * Libellé associé au Code Motif de clôture de l'entité titulaire.
         */
        libelleMotifClotureEntiteTitulaire: string;
        /**
         * Identifiant de l'agence de domiciliation de l'entité titulaire.
         */
        identifiantEDSDomiciliationEntiteTitulaire: number;
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique.
         */
        identifiantAdresseEntiteTitulaire: number;
        /**
         * Identifiant de l'EDS de gestion de l'entité titulaire.
         */
        identifiantEDSGestionEntiteTitulaire: number;
        /**
         * Référence externe du Géré par = EDS de gestion de l'entité titulaire
         */
        refExterneEDSGestionET: number;
        /**
         * Référence externe du Domicilié à = EDS de domiciliation de l'entité titulaire
         */
        refExterneEDSDomiciliationET: number;
        /**
         * Le type de désignation bancaire codifie toutes les désignations bancaires standards (première ligne de l'intitulé bancaire) que le client est susceptible de choisir.
         * Le type de désignation bancaire est fonction des personnes composant l'entité titulaire, du mode de composition et de l'usage.
         * Valeurs :
         *  * POUR ET MODE SIMPLE
         *  11 Désignation de la personne
         *  * POUR ET A USAGE PROFESSIONNEL
         *  21 Nom commercial
         *  22 Désignation courte de l'établissement
         *  23 Enseigne commerciale de l'établissement
         *  * POUR ET MODE JOINT ENTRE EPOUX ET USAGE
         *  PRIVE
         *  31 Mr ou Mme+nom patronymique Mr+prénom Mr
         *  32 Mr ou Mme+nom patronymique Mr+nom
         *  patronymique Mme+prénom Mme
         *  * POUR ET MODE JOINT ET USAGE PRIVE
         *  41 Désignation personne 1 ou désignation
         *  personne 2
         *  42 Désignation personne 2 ou désignation
         *  personne 1
         *
         *  99 Forçage
         */
        codeTypeDesignationEntiteTitulaire: string;
        /**
         * Type élément structure
         */
        typeElementStructure: string;
        /**
         * Nouvelle identifiant élement de structure gestion de l'entité titulaire
         */
        identEDSGestionETNouveau: number;
        /**
         * Nouvelle identifiant élement de structure domicilation de l'entité titulaire
         */
        identEDSDomiciliationETNouveau: number;
        /**
         * identifiant élement de structure du guichet de l'entité titulaire
         */
        identifiantEDSGuichet: number;
    }
    interface IPersonneEntiteTitulaire {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe BPCE.
         * Numéro chrono attribué par le système.
         * Une personne morale est enregistrée sous une seule activité : valeur 1.
         * Une personne physique peut avoir plusieurs activités en tant que professionnel : enregistrement chrono.
         * Un professionnel est référencé dans le SI d'un Etablissement du Groupe BPCE par :
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         * Constitue une référence unique dans MYSYS.
         */
        identifiantProfessionnel: number;
        /**
         * Numéro d'identification du lieu d'activité d'un
         * professionnel dans le SI d'un Etablissement du Groupe BPCE.
         * Implantation d'une activité d'un professionnel.
         * Peut correspondre à un établissement au sens INSEE.
         * Numéro chrono attribué par le système.
         * Identification du lieu :
         *  - NODAPE / Numéro de personne
         *  - NODAPS / Numéro chrono Professionnel
         *  - NODALS / Numéro chrono Lieu d'activité
         * Constitue une référence unique dans MYSYS.
         */
        identifiantLieuActivite: number;
        /**
         * Dénomination commerciale se rapportant à un fonds
         * de commerce exploité par une société ou assimilée
         * Nom commercial du professionnel. C'est la dénomination vis à vis de la clientèle. Elle peut correspondre à l'enseigne. Une société peut avoir un nom commercial différent pour chacun des fonds de commerce qu'elle exploite.
         * Exemples :  La Samaritaine, But ...
         */
        nomCommercialProfessionnel: string;
        /**
         * Enseigne du lieu d'activité d'un professionnel.
         * Signe/marque/appellation apposé sur un établissement commercial le distinguant des autres établissements. L'enseigne peut être commune.
         * Elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         * Exemple : Café du Commerce
         */
        enseigneCommercialeLieuActivite: string;
        /**
         * Libellé court du lieu d'activité du Professionnel.
         */
        designationCourteLieuActivite: string;
        /**
         * Permet de désigner la personne responsable d'une entité titulaire
         * Gestion des incidents sur le compte de dépôts : les co-titulaires d'un compte collectif peuvent désigner celui d'entre eux qui sera considéré comme responsable des incidents pouvant survenir sur le compte.
         * En cas de survenance d'incidents :
         *  - le co-titulaire désigné : interdiction bancaire sur l'ensemble de ses comptes
         *  - pour les autres co-titulaires : interdiction bancaire sur le seul compte collectif en cause.
         * Valeurs :
         * '0' non responsable
         * '1' responsable
         */
        indicateurResponsableCompteET: string;
        /**
         * Détermine le numéro d'ordre d'une personne donnée dans la composition d'une Entité Titulaire.
         * Numéro chrono attribué par le système à chaque création de personne dans l'ET.
         */
        codeRangEntiteTitulaire: string;
        /**
         * Désignation de la personne physique, du professionnel ou du lieu d'activité :
         *  - Désignation courte du particulier si personne physique
         *  - Nom commercial si professionnel
         *  - Désignation courte du lieu d'activité si lieu d'activité
         */
        designationTiers: string;
        /**
         * Indique quelle est la nature du lien Personne / Entité titulaire.
         * Valeurs :
         * PE : Lien Entité Titulaire / Personne
         * PR : Lien Entité Titulaire / Professionnel
         * LA : Lien Entité Titulaire / Lieu d'activité
         */
        natureLienET: string;
        /**
         * Pourcentage de Nue Propriété (valeur max 100,00 %)
         */
        pourcentageNuePropriete: number;
        /**
         * Pourcentage de pleine propriété (valeur max 100,00 %)
         */
        pourcentagePleinePropriete: number;
        /**
         * Pourcentage d'usufruit (valeur max 100,00 %)
         */
        pourcentageUsufruit: number;
        /**
         * Personne titulaire à qui on a affecté l'adresse de l'entité titulaire. (Notion non applicable aux usufruitiers).
         */
        indicateurAffectationAdresse: boolean;
        /**
         * Le type de mandat permet d'enregistrer une
         * procuration qu'accorde un client sur tout
         * ou partie de ses comptes à une autre personne.
         *
         *            Valeurs :
         * 'G'        Procuration générale (sauf CDD,cpte titre,coffre)
         *            On donne procuration sur tous les comptes
         *            de la personne.
         * 'P'        Procuration générale par compte
         *            On donne procuration sur un compte
         *            en disposition
         * 'PS'       Procuration spéciale d'administration
         *            On donne le droit de gérer le compte, mais
         *            pas d'en bénéficier.
         * 'K'        Procuration spéciale porteur de carte pro
         *            On donne procuration sur les comptes support
         *            pour détention de carte
         */
        typeMandat: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.OperationFinanciereService {
    interface IConversionRibBicIban {
        /**
         * Référence d'identification d'un établissement financier ou assimilé au niveau international.
         * BIC = Bank Identifier Code ; norme ISO 9362
         *
         * Format : de 8 à 11 car
         *    - Code banque sur 4 caractère
         *    - Code pays sur 2 caractères ISO 3166
         *    - Code emplacement sur 2 caractères (ville, état, province)
         *    - Code branche sur 3 caractères optionnel (agence)
         *       * Si BIC sur 8 car : siège central national de la banque
         * Codification Caisse Epargne :
         *    CEPAFRPPXXX XXX : 2/3/4ème chiffres du code établissement
         */
        codeBic: string;
        /**
         * Numéro IBAN du compte pour lequel on recherche le BIC
         * Référence d'identification du compte bancaire au niveau international
         * IBAN = International Bank Account Number Format : norme ISO 13616
         *
         * Code pays : 2 caractères - norme ISO 3166
         * Clé de contrôle : 2 caractères - norme ISO 7604
         * Numéro de base (BBAN) : référence du compte dans le pays d'origine jusqu'à 30 caractères, format fixe par pays
         * France : RIB du compte sur 23 caractères, clé inclue
         *
         * Exemple pour France (format fixe 27 caractères) : FRKK BBBB BGGG GGCC CCCC CCCC Ckk
         *    - FR - Pays
         *    - KK - Clé
         *    - IBAN :
         *       * B - Banque
         *       * G - Guichet
         *       * C - Compte
         *       * K - Clé
         *
         * Pas d'espace sous forme électronique
         */
        numeroIbanCompteBeneficiaire: string;
        /**
         * Numéro d'identification d'un compte géré par un établissement du Groupe BPCE.
         */
        numeroCompte: string;
        /**
         * Référence d'identification d'un établissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ...
         * Correspond au code Banque sous lequel un établissement est répertorié par la Banque de France.
         *
         * Exemples :
         * '17515' - CE Ile de France
         * '16275' - CE Nord France Europe
         * '43199' - Crédit Foncier de France
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'un établissement du Groupe BPCE est répertorié par la Banque de France.
         * Un établissement bancaire peut disposer de plusieurs guichets.
         *
         * Exemples :
         * '90000' - IDF PARIS de la CE Ile de France
         * '00600' - LILLE de la CE Nord France Europe
         */
        codeGuichet: string;
        /**
         * clé RIB du compte.
         */
        cleRib: number;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.ActionMultiRappelVir {
    interface IParametreAppel {
        affectation: IAffectation;
        listeRappel: Array<IRappel>;
    }
    interface IAffectation {
        /**
         * "Code établissement source de saisie de la demande de connexe unitaire
         *
         * Alimentation Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
        /**
         * "Type de connexe fournit par l'IHM :
         * - 'REPPOS' ou 'REPNEG'
         *
         * Permet d'alimenter après analyse, les rubriques suivantes de la table HH06 :
         * COHYTM
         * CTHDTD
         * MTHYOP
         * MTHYFR"
         */
        typeConnexe: string;
        /**
         * "Précise le choix d'approbation sur un rappel de Virement :
         * TRUE : REPONSE POSITIVE
         * FALSE : REPONSE NEGATIVE"
         *
         * WS18 NPS : approbationRecall ==> choixActionRappel /
         */
        choixActionRappel: boolean;
        /**
         * "Motif de la réponse Négative :
         * CUST
         * LEGL
         * ARDT
         * AC04
         * AM04
         * NOAS
         * NOOR"
         *
         * WS18 NPS : reasonCode ==> motifReponseNegative /
         *
         *
         * Alimentation Table HH06 : Rubrique CMHYCX
         */
        motifReponseNegative: string;
        /**
         * Libellé du choix d'approbation (Réponse négative ou positive)
         *
         * WS18 NPS : messageText ==> libelleChoixActionRappel /
         *
         *
         *
         * Alimentation Table HH06 : Rubrique LMH4BN
         */
        libelleChoixActionRappel: string;
        /**
         * Montant des frais associé à la réponse positive
         *
         * WS18 NPS : charges ==> montantFraisReponsePositive /
         */
        montantFraisReponsePositive: number;
        /**
         * Libellé associé à une réponse négative pour motif règlementaire (LEGL)
         *
         * WS18 NPS : additionalInformation ==> libelle1ReponseNegative /
         */
        libelle1ReponseNegative: string;
        /**
         * Libellé associé à une réponse négative pour motif règlementaire (LEGL)
         *
         * WS18 NPS : additionalInformation2 ==> libelle2ReponseNegative /
         */
        libelle2ReponseNegative: string;
        /**
         * "Code déterminant un type d'opération SEPA.
         * Les flux émis/reçus SEPA sont identifiés par un Scheme
         * (règles métiers applicables au traitement des ordres
         * de paiement). Ce code est transmis dans les flux de
         * paiement échangés.
         * ''SCT    '  Virement
         * 'SDDCORE'  Prélèvement CORE
         * 'SDDB2B '  Prélèvement B2B
         *
         * Table HH06 : Rubrique CTH4SC"
         */
        schemeOperation: string;
        /**
         * "Canal à partir duquel les demandes de connexes sont créées
         * ='T'  Pour les demandes via IHM et WEBSERVICE
         * ='B' pour les demandes créées en BATCH
         *
         * Alimentation Table HH06 : Rubrique COSFBT"
         */
        canalDemande: string;
        /**
         * "Précise le circuit d'échange de la demande
         * ='O' ON US
         * ='N' Not ON US
         *
         * Alimentation Table HH06 : Rubrique CIH4CE"
         */
        circuitEchange: string;
        /**
         * "Origine de la création de la demande
         * ='O' unitaire
         * ='N' masse
         *
         * Alimentation Table HH06 : Rubrique CIH4OD"
         */
        origineCreationDemande: string;
        /**
         * "Propriété de l'annuation de virement pour identifier l'initiateur de l'annulation.
         * Soit le CLIENT bénéficiaire du virement, soit la BANQUE (Etablissement du client bénéficiaire)
         * Valeurs
         * ='C'   CLIENT
         * ='B'    BANQUE
         *
         * Alimentation Table HH06 : Rubrique CTHDDD"
         */
        origineReponse: string;
    }
    interface IRappel {
        /**
         * Clé primaire de l'entité TRANSACTION(paymentTransactionKey) pour effectuer une approbation de rappel de virement
         *
         * WS18 NPS : id ==> refActionRappelEntiteCle /
         */
        refActionRappelEntiteCle: number;
        /**
         * "Référence de l'instruction de la transaction d'origine associée à la connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4IO"
         */
        referenceInstructionOrigine: string;
        /**
         * "Date de règlement de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYRG"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransConnexe: string;
        /**
         * "Montant de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOP"
         */
        montantTransactionConnexe: number;
        /**
         * "Montant des frais associé à la réponse positive
         *
         * Alimentation Table HH06 : Rubrique MTHYFR"
         */
        montantFraisReponsePositive: number;
        /**
         * "Référence de la transaction initiale ABS à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4TA"
         */
        referenceTransactionInitiale: string;
        /**
         * "ID Transaction de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4ID"
         */
        identifiantTransactionInitiale: string;
        /**
         * "Date de règlement de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYDD"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransInitiale: string;
        /**
         * "Montant de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOO"
         */
        montantTransInitiale: number;
        /**
         * "BIC du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB2"
         */
        bicDonneurOrdre: string;
        /**
         * "IBAN du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII1"
         */
        ibanDonneurOrdre: string;
        /**
         * "BIC du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB1"
         */
        bicDestinataire: string;
        /**
         * "IBAN du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII2"
         */
        ibanDestinataire: string;
        /**
         * "Référence de la transaction connexe du RECALL sur lequel une répone est saisie
         *
         * Alimentation Table HH06 : Rubrique IRH4O2"
         */
        referenceTransactionConnexeInit: string;
    }
    interface ITraitementRappelVirement {
        /**
         * Code de l'évènement pour lequel l'approbation a été demandé
         *
         *
         * WS18 NPS : eventCode ==> codeEvenementActionRappel /
         */
        codeEvenementActionRappel: string;
        /**
         * Référence de la transaction
         */
        refActionRappelEntiteCle: string;
        /**
         * Référence ABS de la transaction
         *
         *
         * WS18 NPS : displayTransactionId ==> referenceTransaction /
         *
         * Alimentation Table HH06: Rubrique IRH4O1
         */
        referenceTransaction: string;
        /**
         * Clé primaire de la transaction dont l'approbation a été demandé
         *
         * WS18 NPS : paymentTransactionKey ==> cleTransactionActionRappel /
         */
        cleTransactionActionRappel: number;
        analyseTraitement: IAnalyseTraitement;
    }
    interface IAnalyseTraitement {
        /**
         * Permet de déterminer comment l'occurence de la liste a été traitée TRUE : Correctement traitée FALSE : Erreur de traitement
         */
        etat: boolean;
        /**
         * Libellé associé au code erreur de traitement de l’occurrence de rappel de virement
         */
        libelleErreur: string;
    }
    interface IActionMultiRappelVir {
        parametreAppel: IParametreAppel;
        listeTraitementRappelVirement: Array<ITraitementRappelVirement>;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.AnnMultiVirement {
    interface IParametreAppel {
        /**
         * Type de connexe fournit par l'IHM :
         * - 'RECALL' ou
         * - 'ACVS'
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         */
        affectation: IAffectation;
        listeVirement: Array<IVirement>;
    }
    interface IAnnMultiVirement {
        parametreAppel: IParametreAppel;
        listeTransactionAnnulationVirement: Array<ITraitementAnnulationVirement>;
    }
    interface IAnalyseTraitement {
        /**
         * Permet de déterminer comment l'occurence de la liste a été traitée
         * TRUE : Correctement traitée
         * FALSE : Erreur de traitement
         */
        etat: boolean;
        /**
         * Libellé associé au code erreur de traitement de l’occurrence de transaction
         *
         * Un libellé est associé fonctionnellement à un code erreur.
         * Cf. Règles de gestion
         */
        libelleErreur: string;
    }
    interface IAffectation {
        /**
         * "Code établissement source de saisie de la demande de connexe unitaire
         *
         * Alimentation Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
        /**
         * Motif d'annulation (RECALL / ACVS) du virement
         *
         * WS13 NPS : reasonCode ==> motifAnnulationVirement /
         * WS16 NPS : reasonCode ==> motifAnnulationVirement /
         * WS17 NPS : reasonCode ==> motifAnnulationVirement /
         *
         * Table HH06 : CMHYCX
         */
        motifAnnulationVirement: string;
        /**
         * Justification de la création de l'annulation (RECALL / ACVS) des virements
         *
         * WS13 NPS : messageText ==> justificationAnnulationVirement /
         * WS16 NPS : messageText ==> justificationAnnulationVirement /
         * WS17 NPS : messageText ==> justificationAnnulationVirement /
         *
         * Table HH06 : LMH4BN
         */
        justificationAnnulationVirement: string;
        /**
         * "Propriété de l'annuation de virement pour identifier l'initiateur de l'annulation.
         * Soit le CLIENT bénéficiaire du virement, soit la BANQUE (Etablissement du client bénéficiaire)
         * ='C'  CLIENT
         * ='B' BANQUE
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         * Alimentation Table HH06 : Rubrique CTHDDD"
         */
        origineAnnulVirement: string;
        /**
         * "Propriété de l'annulation de virement pour identifier si les frais bancaires éventuels des banques consoeurs seront supportés par le client bénéficiaire du virement ou par l'établissement du client bénéficiaire.
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         *
         * Alimentation Table HH06 : Rubrique COHDFR"
         */
        fraisAnnulVirementReponse: string;
        /**
         * "Propriété de l'annulation de virement pour identifier si l'envoi de l'annulation est à tarifer, si oui, cette tarification est supportée par le client bénéficiaire du virement.
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         * Alimentation Table HH06 : Rubrique CIHCTA"
         */
        tarificationAnnulVirement: string;
        /**
         * "Propriété de l'annulation de virement pour identifier si un courrier est à produire,
         * à destination du client bénéficiaire du virement initial, lors de la réception de réponses négatives ou positives suite une annulation de virement.
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         * Alimentation Table HH06 : Rubrique CIHDGC"
         */
        courrierAnnulVirementReponse: string;
        /**
         * Type de connexe fournit par l'IHM :
         * - 'RECALL' ou
         * - 'ACVS'
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         */
        typeConnexe: string;
        /**
         * "Code déterminant un type d'opération SEPA.
         * Les flux émis/reçus SEPA sont identifiés par un Scheme
         * (règles métiers applicables au traitement des ordres
         * de paiement). Ce code est transmis dans les flux de
         * paiement échangés.
         * ''SCT    '  Virement
         * 'SDDCORE'  Prélèvement CORE
         * 'SDDB2B '  Prélèvement B2B
         *
         * Table HH06 : Rubrique CTH4SC"
         */
        schemeOperation: string;
        /**
         * "Canal à partir duquel les demandes de connexes sont créées
         * ='WS'  Pour les demandes via IHM et WEBSERVICE
         *
         * Alimentation Table HH06 : Rubrique COSFBT
         */
        canalDemande: string;
        /**
         * "Précise le circuit d'échange de la demande
         * ='O' ON US
         * ='N' Not ON US
         *
         * Alimentation Table HH06 : Rubrique CIH4CE"
         */
        circuitEchange: string;
        /**
         * "Origine de la création de la demande
         * ='O' unitaire
         * ='N' masse
         *
         * Alimentation Table HH06 : Rubrique CIH4OD"
         */
        origineCreationDemande: string;
        /**
         * "Permet d'indiquer, le compte à imputer
         * =SPACES ==> Compte CLIENT
         * ='TEC' ==> Compte Technique
         *
         * Alimentation Table HH06 : Rubrique CTHYNC"
         */
        typeCompteImputation: string;
    }
    interface IVirement {
        /**
         * "Référence de la transaction initiale ABS à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4TA"
         */
        referenceTransactionInitiale: string;
        /**
         * "ID Transaction de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4ID"
         */
        identifiantTransactionInitiale: string;
        /**
         * "Référence de l'instruction de la transaction d'origine associée à la connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4IO"
         */
        referenceInstructionOrigine: string;
        /**
         * "Date de règlement de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYRG"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransConnexe: string;
        /**
         * "Montant de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOP"
         */
        montantTransactionConnexe: number;
        /**
         * "Date de règlement de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYDD"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransInitiale: string;
        /**
         * "Montant de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOO"
         */
        montantTransInitiale: number;
        /**
         * "BIC du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB2"
         */
        bicDonneurOrdre: string;
        /**
         * "IBAN du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII1"
         */
        ibanDonneurOrdre: string;
        /**
         * "BIC du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB1"
         */
        bicDestinataire: string;
        /**
         * "IBAN du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII2"
         */
        ibanDestinataire: string;
        /**
         * Référence de la transaction de virement à annuler (RECALL ou ACVS)
         * Pour appel du WS ABS
         * WS13 NPS : id ==> referenceTransactionVirement /
         * WS14 NPS : id ==> referenceInstructionVirement /
         * WS17 NPS : id ==> referenceTransactionVirement /
         */
        referenceTransactionVirement: number;
        /**
         * "Numéro de compte à imputer
         *
         * Alimentation Table HH06 : Rubrique CODIRF"
         */
        numeroCompteImputation: string;
        /**
         * "Guichet du RICE à imputer
         *
         * Alimentation Table HH06 : Rubrique COHCGU"
         */
        guichetImputation: string;
    }
    interface ITraitementAnnulationVirement {
        /**
         * Code évènement restitué suite à la demande d'annulation des virements (RECALL/ACVS)
         *
         * WS13 NPS : eventCode ==> codeEvenementAnnulationVirement /
         * WS16 NPS : eventCode ==> codeEvenementAnnulationVirement /
         * WS17 NPS : eventCode ==> codeEvenementAnnulationVirement /
         */
        codeEvenementAnnulationVirement: string;
        /**
         * Référence de la transaction
         */
        referenceTransactionVirement: string;
        /**
         * Référence de la transaction contenant les Rappels de virements (RECALL) ou ACVS, attribuée par ABS
         *
         * WS13 NPS : displayTransactionId ==> refTransactionAnnulVirement /
         * WS16 NPS : displayTransactionId ==> refTransactionAnnulVirement /
         * WS17 NPS : displayTransactionId ==> refTransactionAnnulVirement /
         *
         * Alimentation Table HH06: Rubrique IRH4TC
         */
        refTransactionAnnulVirement: string;
        /**
         * Clé primaire d'accès WS ESP pour la table des Transactions de type annulation du virement (RECALL ou ACVS)
         *
         * WS13 NPS : paymentTransactionKey ==> cleTransactionAnnulVirement /
         * WS16 NPS : paymentTransactionKey ==> cleTransactionAnnulVirement /
         * WS17 NPS : paymentTransactionKey ==> cleTransactionAnnulVirement /
         */
        cleTransactionAnnulVirement: number;
        analyseTraitement: IAnalyseTraitement;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.AnnUnitPrelevement {
    interface IParametreAppel {
        /**
         * "Code établissement source de saisie de la demande de connexe unitaire
         *
         * Alimentation Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
        /**
         * Référence de la transaction contenant le prélèvement à annuler ou à reverser
         *
         * WS21 NPS : id ==> referenceTransactionPrelevement /
         * WS22 NPS : id ==> referenceTransactionPrelevement /
         */
        referenceTransactionPrelevement: number;
        /**
         * Motif d'annulation ou de reversement du prélèvement  contenue dans l'instruction
         *
         * WS21 NPS : reasonCode ==> motifAnnulationPrelevement /
         * WS22 NPS : reasonCode ==> motifAnnulationPrelevement /
         *
         * Alimentation Table HH06 : Rubrique CMHYCX
         */
        motifAnnulationPrelevement: string;
        /**
         * Justification de la création de l'annulation ou reversement des prélèvements
         *
         * WS21 NPS : messageText ==> justificationAnnulPrelevement /
         * WS22 NPS : messageText ==> justificationAnnulPrelevement /
         *
         * Alimentation Table HH06 : Rubrique LMH4BN
         */
        justificationAnnulPrelevement: string;
        /**
         * Type de connexe fournit par l'IHM :
         * ='ANNSDD'
         * ='REVSDD'
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         */
        typeConnexe: string;
        /**
         * "Référence de l'instruction de la transaction d'origine associée à la connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4IO"
         */
        referenceInstructionOrigine: string;
        /**
         * "Code déterminant un type d'opération SEPA.
         * Les flux émis/reçus SEPA sont identifiés par un Scheme
         * (règles métiers applicables au traitement des ordres
         * de paiement). Ce code est transmis dans les flux de
         * paiement échangés.
         * ''SCT    '  Virement
         * 'SDDCORE'  Prélèvement CORE
         * 'SDDB2B '  Prélèvement B2B
         *
         * Table HH06 : Rubrique CTH4SC"
         */
        schemeOperation: string;
        /**
         * "Précise le circuit d'échange de la demande
         * ='O' ON US
         * ='N' Not ON US
         *
         * Alimentation Table HH06 : Rubrique CIH4CE"
         */
        circuitEchange: string;
        /**
         * "Origine de la création de la demande
         * ='U' unitaire
         * ='M' masse
         *
         * Alimentation Table HH06 : Rubrique CIH4OD"
         */
        origineCreationDemande: string;
        /**
         * "Canal à partir duquel les demandes de connexes sont créées
         * ='WS'  Pour les demandes via IHM et WEBSERVICE
         *
         * Alimentation Table HH06 : Rubrique COSFBT"
         */
        canalDemande: string;
        /**
         * "Propriété de l'annuation de virement pour identifier l'initiateur de l'annulation. Soit le CLIENT bénéficiaire du virement, soit la BANQUE (Etablissement du client bénéficiaire)
         *
         * Alimentation Table HH06 : Rubrique CTHDDD"
         */
        origineAnnulPrelevement: string;
        /**
         * "Date de règlement de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYRG"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransConnexe: string;
        /**
         * "Montant de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOP"
         */
        montantTransactionConnexe: number;
        /**
         * "Référence de la transaction initiale ABS à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4TA"
         */
        referenceTransactionInitiale: string;
        /**
         * "ID Transaction de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4ID"
         */
        identifiantTransactionInitiale: string;
        /**
         * "Date de règlement de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYDD"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransInitiale: string;
        /**
         * "Montant de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOO"
         */
        montantTransInitiale: number;
        /**
         * "BIC du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB2"
         */
        bicDonneurOrdre: string;
        /**
         * "IBAN du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII1"
         */
        ibanDonneurOrdre: string;
        /**
         * "BIC du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB1"
         */
        bicDestinataire: string;
        /**
         * "IBAN du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII2"
         */
        ibanDestinataire: string;
    }
    interface IAnnUnitPrelevement {
        parametreAppel: IParametreAppel;
        transactionAnnulPrelevement: ITransactionAnnulPrelevement;
    }
    interface ITransactionAnnulPrelevement {
        /**
         * Code évènement restitué suite à la demande d'annulation ou de reversement du prélèvement
         *
         * WS21 NPS : eventCode ==> codeEvenementAnnulPrelevement /
         * WS22 NPS : eventCode ==> codeEvenementAnnulPrelevement /
         */
        codeEvenementAnnulPrelevement: string;
        /**
         * Référence de l'Instruction des annulations ou reversement des prélèvements, attribuée par ABS
         *
         * WS21 NPS : displayTransactionId ==> refTransactionAnnulPrelevement /
         * WS22 NPS : displayTransactionId ==> refTransactionAnnulPrelevement /
         */
        refTransactionAnnulPrelevement: string;
        /**
         * Clé primaire d'accès WS ESP pour la table des Transactions de type Annulation de prélèvement ou reversement de prélèvement
         *
         *
         * WS21 NPS : paymentTransactionKey ==> cleTransactionAnnulPrelevement /
         * WS22 NPS : paymentTransactionKey ==> cleTransactionAnnulPrelevement /
         */
        cleTransactionAnnulPrelevement: number;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.AnnUnitVirement {
    interface IParametreAppel {
        /**
         * "Code établissement source de saisie de la demande de connexe unitaire
         *
         * Alimentation Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
        /**
         * Motif d'annulation du virement (RECALL ou ACVS)
         *
         * WS13 NPS : reasonCode ==> motifAnnulationVirement /
         * WS16 NPS : reasonCode ==> motifAnnulationVirement /
         * WS17 NPS : reasonCode ==> motifAnnulationVirement /
         *
         * Alimentation Table HH06 : Rubrique CMHYCX
         */
        motifAnnulationVirement: string;
        /**
         * Justification de la création de l'annulation des virements (RECALL / ACVS)
         *
         * WS13 NPS : messageText ==> justificationAnnulationVirement /
         * WS16 NPS : messageText ==> justificationAnnulationVirement /
         * WS17 NPS : messageText ==> justificationAnnulationVirement /
         *
         *
         * Permet d'alimenter la table HH06 : LMH4BN
         */
        justificationAnnulationVirement: string;
        /**
         * Propriété de l'annuation de virement pour identifier l'initiateur de l'annulation.
         * Soit le CLIENT bénéficiaire du virement, soit la BANQUE (Etablissement du client bénéficiaire)
         *
         * Valeurs :
         * ='C'   pour CLIENT
         * ='B' pour BANQUE
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         * Alimentation Table HH06 : Rubrique CTHDDD
         */
        origineAnnulVirement: string;
        /**
         * Propriété de l'annulation de virement pour identifier si les frais bancaires éventuels des banques consoeurs seront supportés par le client bénéficiaire du virement ou par l'établissement du client bénéficiaire.
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         * Alimentation Table HH06 : Rubrique COHDFR
         */
        fraisAnnulVirementReponse: string;
        /**
         * Propriété de l'annulation de virement pour identifier si l'envoi de l'annulation est à tarifer, si oui, cette tarification est supportée par le client bénéficiaire du virement.
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         *
         * Alimentation Table HH06 : Rubrique CIHCTA
         */
        tarificationAnnulVirement: string;
        /**
         * Propriété de l'annulation de virement pour identifier si un courrier est à produire,
         * à destination du client bénéficiaire du virement initial, lors de la réception de réponses négatives ou positives suite une annulation de virement.
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         * Alimentation Table HH06 : Rubrique CIHDGC
         */
        courrierAnnulVirementReponse: string;
        /**
         * Type de connexe fournit par l'IHM :
         * - 'RECALL' ou
         * - 'ACVS'
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         * Permet d'alimenter après analyse, les rubriques suivantes de la table HH06 :
         * COHYTM
         * CTHDTD
         * MTHYOP
         * MTHYFR
         */
        typeConnexe: string;
        /**
         * "Code déterminant un type d'opération SEPA.
         * Les flux émis/reçus SEPA sont identifiés par un Scheme (règles métiers applicables au traitement des ordres
         * de paiement). Ce code est transmis dans les flux de
         * paiement échangés.
         * ''SCT ' Virement
         * 'SDDCORE' Prélèvement CORE
         * 'SDDB2B ' Prélèvement B2B
         *
         * Alimentation Table HH06 : Rubrique CTH4SC"
         */
        schemeOperation: string;
        /**
         * "Canal à partir duquel les demandes de connexes sont créées ='WS' Pour les demandes via IHM et WEBSERVICE
         *
         * Alimentation Table HH06 : Rubrique COSFBT
         */
        canalDemande: string;
        /**
         * "Précise le circuit d'échange de la demande ='O' ON US ='N' Not ON US
         *
         * Alimentation Table HH06 : Rubrique CIH4CE"
         */
        circuitEchange: string;
        /**
         * "Origine de la création de la demande ='O' unitaire ='N' masse
         *
         * Alimentation Table HH06 : Rubrique CIH4OD"
         */
        origineCreationDemande: string;
        /**
         * "Permet d'indiquer, le compte à imputer =SPACES ==> Compte CLIENT ='TEC' ==> Compte Technique
         *
         * Alimentation Table HH06 : Rubrique CTHYNC"
         */
        typeCompteImputation: string;
        virement: IVirement;
    }
    interface IAnnUnitVirement {
        parametreAppel: IParametreAppel;
        transactionAnnulationVirement: ITransactionAnnulationVirement;
    }
    interface ITransactionAnnulationVirement {
        /**
         * Code évènement restitué suite à la demande d'annulation des virements (RECALL/ACVS)
         *
         * WS13 NPS : eventCode ==> codeEvenementAnnulationVirement /
         * WS16 NPS : eventCode ==> codeEvenementAnnulationVirement /
         * WS17 NPS : eventCode ==> codeEvenementAnnulationVirement /
         */
        codeEvenementAnnulationVirement: string;
        /**
         * Référence de la transaction contenant les Rappels de virements (RECALL) ou ACVS, attribuée par ABS
         *
         * WS13 NPS : displayTransactionId ==> refTransactionAnnulVirement /
         * WS16 NPS : displayTransactionId ==> refTransactionAnnulVirement /
         * WS17 NPS : displayTransactionId ==> refTransactionAnnulVirement /
         */
        refTransactionAnnulVirement: string;
        /**
         * Clé primaire d'accès WS ESP pour la table des Transactions de type annulation du virement (RECALL ou ACVS)
         *
         * WS13 NPS : paymentTransactionKey ==> cleTransactionAnnulVirement /
         * WS16 NPS : paymentTransactionKey ==> cleTransactionAnnulVirement /
         * WS17 NPS : paymentTransactionKey ==> cleTransactionAnnulVirement /
         */
        cleTransactionAnnulVirement: number;
    }
    interface IVirement {
        /**
         * Référence de la transaction de virement à annuler (RECALL ou ACVS)
         * Pour appel du WS ABS
         * WS13 NPS : id ==> referenceTransactionVirement /
         * WS14 NPS : id ==> referenceInstructionVirement /
         * WS17 NPS : id ==> referenceTransactionVirement /
         */
        referenceTransactionVirement: number;
        /**
         * "Référence de la transaction initiale ABS à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4TA"
         */
        referenceTransactionInitiale: string;
        /**
         * "ID Transaction de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4ID"
         */
        identifiantTransactionInitiale: string;
        /**
         * "Référence de l'instruction de la transaction d'origine associée à la connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4IO"
         */
        referenceInstructionOrigine: string;
        /**
         * "Date de règlement de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYRG"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransConnexe: string;
        /**
         * "Montant de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOP"
         */
        montantTransactionConnexe: number;
        /**
         * "Date de règlement de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYDD"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransInitiale: string;
        /**
         * "Montant de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOO"
         */
        montantTransInitiale: number;
        /**
         * "BIC du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB2"
         */
        bicDonneurOrdre: string;
        /**
         * "IBAN du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII1"
         */
        ibanDonneurOrdre: string;
        /**
         * "BIC du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB1"
         */
        bicDestinataire: string;
        /**
         * "IBAN du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII2"
         */
        ibanDestinataire: string;
        /**
         * "Numéro de compte à imputer
         *
         * Alimentation Table HH06 : Rubrique CODIRF"
         */
        numeroCompteImputation: string;
        /**
         * "Guichet du RICE à imputer
         *
         * Alimentation Table HH06 : Rubrique COHCGU"
         */
        guichetImputation: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.DemandeMultiCourrier {
    interface IDemandeMultiCourrier {
        parametreAppel: IParametreAppel;
        analyseTraitement: Array<IAnalyseTraitement>;
    }
    interface IParametreAppel {
        affectation: IAffectation;
        listeDemande: Array<IDemande>;
    }
    interface IAffectation {
        /**
         * Permet d'orienter le traitement de demande de courrier manuel. "1" : Courrier manuel sur Réponse reçue / Recall EMIS "2" : Courrier manuel sur RECALL reçu
         */
        typeDemandeCourrier: string;
        /**
         * "Code établissement source de saisie de la demande de connexe unitaire
         *
         * Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
    }
    interface IDemande {
        /**
         * "Référence de la transaction connexe fournie en retour d'ABS pour les demandes unitaires
         *
         * Table HH06: Rubrique IRH4O1
         */
        referenceTransactionConnexe: string;
    }
    interface IAnalyseTraitement {
        /**
         * "Référence de la transaction connexe fournie en retour d'ABS pour les demandes unitaires
         *
         * Table HH06: Rubrique IRH4O1
         */
        referenceTransactionConnexe: string;
        /**
         * Permet de déterminer comment l'occurence de la liste a été traitée TRUE : Correctement traitée FALSE : Erreur de traitement
         */
        etat: boolean;
        /**
         * Libellé associé au code erreur de traitement de l’occurrence de transaction
         *
         * Un libellé est associé fonctionnellement à un code erreur. Cf. Règles de gestion
         */
        libelleErreur: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.DemandeSort {
    interface IParametreAppel {
        /**
         * Clé primaire de la transaction de RAPPEL ou de la RECLAMATION sur laquelle porte la demande de Sort
         *
         * WS25 NPS : id ==> cleTransactionARelancer /
         */
        cleTransactionARelancer: number;
        /**
         * "Code établissement source de saisie de la demande de connexe RAPPEL OU RECLAMATION
         *
         * Accès Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
        /**
         * "Référence de la transaction de RECALL ou RECLAMATION ABS à l'origine de la demande de Sort
         *
         * Acces Table HH06 : Rubrique IRH4O1"
         */
        referenceTransactionARelancer: string;
    }
    interface IDemandeSort {
        parametreAppel: IParametreAppel;
        transactionDemandeSort: ITransactionDemandeSort;
    }
    interface ITransactionDemandeSort {
        /**
         * Code évènement restitué suite à la création de la demande de SORT par ABS
         *
         * WS25 NPS : eventCode ==> codeEvenementDemandeSort /
         */
        codeEvenementDemandeSort: string;
        /**
         * Référence de la transaction de demande de Sort attribuée par ABS
         *
         * WS25 NPS : displayTransactionId ==> refTransactionDemandeSort /
         */
        refTransactionDemandeSort: string;
        /**
         * Clé primaire d'accès WS ESP pour la table des Transactions de type demande de Sort
         *
         * WS25 NPS : paymentTransactionKey ==> cleTransactionDemandeSort /
         */
        cleTransactionDemandeSort: number;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.DetailImputation {
    interface IParametreAppel {
        /**
         * code établissement de la transaction pour laquelle le statut est à rechercher
         *
         * Recherche HH13 : COHCBQ
         */
        codeEtablissement: string;
        /**
         * 'Référence transaction pour rechercher le statut d'imputation
         *
         * Recherche HH13 : IRH7AE
         */
        referenceTransaction: string;
    }
    interface IDetailImputation {
        parametreAppel: IParametreAppel;
        imputation: IImputation;
    }
    interface IImputation {
        /**
         * code établissement de la transaction pour laquelle le statut est à rechercher
         */
        codeEtablissement: string;
        /**
         * Référence transaction pour rechercher le statut d'imputation
         */
        rechercheTransaction: string;
        /**
         * Date de règlement de la transaction
         * Type date au format yyyy-MM-dd
         */
        dateReglement: string;
        /**
         * Code statut de l'imputation de la transaction
         */
        codeStatutImputation: string;
        /**
         * Référence transaction pour rechercher le statut d'imputation
         * A ne pas Imputer
         * A imputer
         * Remis à l'imputation
         * Imputé
         */
        statutImputation: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.DetailTransaction {
    interface IParametreAppel {
        /**
         * Clé primaire technique attribuée par ABS pour la transaction
         *
         *
         * WS7 NPS : id ==> clePrimaireTransaction /
         */
        clePrimaireTransaction: number;
    }
    interface IDetailTransaction {
        parametreAppel: IParametreAppel;
        transaction: ITransaction;
    }
    interface ITransaction {
        /**
         * Référence de la Transaction, attribuée par ABS
         *
         * WS7 NPS : displayTransactionId ==> referenceTransaction /
         */
        referenceTransaction: string;
        /**
         * Clé primaire de la table Détail Transaction
         *
         * WS7 NPS : entityKey ==> clePrimaireDetailTransaction /
         */
        clePrimaireDetailTransaction: number;
        /**
         * Référence client transaction (instructingAgentTransactionId)
         *
         * WS7 NPS : instructingAgentTransactionId ==> refRemiseClient /
         */
        refRemiseClient: string;
        /**
         * Transaction ID (TX-ID) de l'opération initiale émise et calculée par ABS
         *
         * WS7 NPS : firstInstructingAgentTransactionId ==> identificationTransaction /
         */
        identificationTransaction: string;
        /**
         * WS7 NPS : incomingInstructionReference ==> referenceMessageEntrant /
         */
        referenceMessageEntrant: string;
        /**
         * WS7 NPS : endToEndId ==> refClientBoutEnBout /
         */
        refClientBoutEnBout: string;
        /**
         * Montant total de la Transaction
         *
         * WS7 NPS : settlementAmount ==> montantTransaction /
         */
        montantTransaction: number;
        /**
         * Date de règlement de la transaction d'origine
         *
         * WS7 NPS : originalSettlementDay ==> dateReglementOrigine /
         * Type date au format yyyy-MM-dd
         */
        dateReglementOrigine: string;
        /**
         * Date de règlement prévisionnelle
         *
         * WS7 NPS : settlementDay ==> dateReglementTransaction /
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransaction: string;
        /**
         * La classification du paiement indique la nature du paiement utilisé
         *
         * WS7 NPS : classification ==> classificationPaiement /
         */
        classificationPaiement: string;
        /**
         * Montant de la transaction échangé entre les deux parties
         *
         * WS7 NPS : instructedAmount ==> montantTransactionEchange /
         */
        montantTransactionEchange: number;
        /**
         * Par convention, une transaction est un débit quand le résultat du traitement de la transaction génère un débit du compte destinataire.
         *
         *
         * WS7 NPS : debitCreditIndicator ==> indicateurDebitCredit /
         */
        indicateurDebitCredit: string;
        /**
         * "Détermine le scheme associé à la transaction
         * Valeurs :
         * ‘SCT’
         * ‘SDDB2B’
         * ‘SDDCORE’
         * "
         *
         * WS7 NPS : processingScheme ==> schemaTransaction /
         */
        schemaTransaction: string;
        /**
         * WS7 NPS : instructedDay ==> dateExecution /
         * Type date au format yyyy-MM-dd
         */
        dateExecution: string;
        /**
         * Status de la transaction
         *
         * WS7 NPS : status ==> statusTransaction /
         */
        statusTransaction: string;
        /**
         * Liste des transactions liées à la transaction consultée
         *
         * WS7 NPS : linkedTransactions ==> transactionLiee /
         */
        transactionLiee: Array<number>;
        /**
         * Dernier délai pour lequel la transaction peut-être soumise
         *
         * WS7 NPS : latestSubmissionTime ==> dateMaxExecution /
         * Type date au format yyyy-MM-dd
         */
        dateMaxExecution: string;
        /**
         * Libellé de l'établissement MYSYS
         *
         * WS7 NPS : bankName ==> libelleEtablissement /
         */
        libelleEtablissement: string;
        /**
         * "Code Etablissement MYSYS
         * Ex : 13335 CE APC / 13135 CE MP"
         *
         * WS7 NPS : bankId ==> codeEtablissement /
         */
        codeEtablissement: string;
        /**
         * Clé primaire d'accès WS ESP
         *
         * WS7 NPS : bankKey ==> clePrimaireEtablisssement /
         */
        clePrimaireEtablisssement: number;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         *
         * Cette notion d'offre est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         *
         * WS7 NPS : offer ==> offreClient /
         */
        offreClient: string;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         *
         * Cette notion de produit est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         *
         * WS7 NPS : product ==> categorieProduitBancaire /
         */
        categorieProduitBancaire: string;
        /**
         * Abonnement du contrat flux du client
         *
         * WS7 NPS : customerSubscription ==> abonnementClient /
         */
        abonnementClient: string;
        /**
         * "Canal d'acquisition
         * par exemple = « PARME » dans le cadre de l’étape 1"
         *
         * WS7 NPS : channel ==> canalAcquisition /
         */
        canalAcquisition: string;
        /**
         * "Sous Canal d'acquisition
         * sous-canal d’acquisition client ; par exemple = « EBICST », « PESIT », « FILEACT »…)"
         *
         * WS7 NPS : subChannel ==> sousCanalAcquisition /
         */
        sousCanalAcquisition: string;
        /**
         * Permet d'identifier si la transaction est à destination de l'interbancaire ou si elle reste interne à la plateforme ABS
         *
         * WS7 NPS : onUsFlag ==> transactionInterne /
         */
        transactionInterne: boolean;
        /**
         * Indique le niveau d'importance du paiement en cours
         *
         * WS7 NPS : importance ==> importanceTransaction /
         */
        importanceTransaction: number;
        /**
         * Unique reference, as assigned by the account servicing institution, to unambiguously identify the instruction. (servicerTxnId)
         *
         * WS7 NPS : accountServicerReference ==> referenceComptable /
         */
        referenceComptable: string;
        /**
         * Contient la display Id de la Routing Rule qui a été appliquée lorsque l'opération a été traitée (routingRuleDisplayId)
         *
         * WS7 NPS : matchedRoutingrule ==> refRegleRoutage /
         */
        refRegleRoutage: string;
        /**
         * Contient la clé primaire (RoutingRule.RoutingRuleKey) de la Routing Rule qui a été appliquée lorsque l'opération a été traitée
         *
         * WS7 NPS : matchedRoutingruleKey ==> cleRefRegleRoutage /
         */
        cleRefRegleRoutage: number;
        /**
         * "Permet de définir, d’un point de vue ABS, quelle est la provenance des flux.
         *
         * Sens Client vers Banque (Reçu d'un distributeur) (TRUE) - ALLER
         * Sens Interbancaire, via ESP vers Banque (FALSE) - RETOUR"
         *
         * WS7 NPS : outbound ==> sensEchangeABS /
         */
        sensEchangeABS: boolean;
        /**
         * Pour les instructions ayant fait l'objet d'une R-instruction, cet attribut permet de préciser le type de connexe associé
         *
         * WS7 NPS : connexeType ==> typeConnexe /
         */
        typeConnexe: string;
        /**
         * Indique si une transaction est une R-Transaction (TRUE) ou non (FALSE or EMPTY)
         *
         * WS7 NPS : rtransactionFlag ==> typeTransaction /
         */
        typeTransaction: boolean;
        /**
         * Indique le niveau de la R-Transaction (généralement le niveau est 1). Une R-transaction consécutive à une autre R-transaction serait à 2.
         *
         * WS7 NPS : rTransactionLevel ==> niveauConnexe /
         */
        niveauConnexe: number;
        /**
         * "Pour les Rtransactions, la qualification est une « sous-classification » qui permet d’affiner la granularité de la recherche
         * Cancellation
         * Refund
         * Refusal
         * Rejection
         * Resolution
         * Return
         * Reversal
         * "
         *
         * WS7 NPS : qualification ==> typeTransactionConnexe /
         */
        typeTransactionConnexe: string;
        /**
         * Indique si la R-transaction est un remboursement (True) ou non (False)
         *
         * WS7 NPS : rTransactionRefundFlag ==> indicateurRemboursement /
         */
        indicateurRemboursement: boolean;
        /**
         * WS7 NPS : originalInstructionReference ==> referenceMessageOrigine /
         */
        referenceMessageOrigine: string;
        /**
         * Format SEPA de l'instruction d'origine contenant la transaction
         *
         * WS7 NPS : originalInstructionType ==> formatInstructionOrigine /
         */
        formatInstructionOrigine: string;
        /**
         * WS7 NPS : originalCreationDateTime ==> dateCreationOrigine /
         * Type date au format yyyy-MM-dd
         */
        dateCreationOrigine: string;
        /**
         * Référence de la remise client (PmtInfId), pour une connexe c'est l'opération d'origine
         *
         * WS7 NPS : originalInstructingAgentTransactionId ==> refRemiseClientOpeOrgine /
         */
        refRemiseClientOpeOrgine: string;
        /**
         * WS7 NPS : originalEndToEndId ==> refClientBoutEnBoutOrigine /
         */
        refClientBoutEnBoutOrigine: string;
        /**
         * Transaction ID (TX-ID) de l'opération initiale émise et calculée par ABS, associée à une opération connexe
         *
         * WS7 NPS : originalFirstInstructingAgentTransactionId ==> identTransactionOpeOrigine /
         */
        identTransactionOpeOrigine: string;
        /**
         * WS7 NPS : transactionStatusCode ==> statusCodeTransaction /
         */
        statusCodeTransaction: string;
        /**
         * WS7 NPS : statusReasonCode   OU
         * WS7 NPS : statusReasonProprietaryCode
         * ==> codeMotifTransaction
         */
        codeMotifTransaction: string;
        /**
         * Raison pour laquelle le statut n'est pas dans la liste des codes disponible
         *
         * WS7 NPS : statusReasonProprietaryCode ==> motifErreurStatut /
         */
        motifErreurStatut: string;
        /**
         * Nom du client qui a initié une connexe, pour une RECALL de type CLIENT
         *
         *
         * WS7 NPS : statusOriginatorName ==> nomDonneurOrdreConnexe /
         */
        nomDonneurOrdreConnexe: string;
        /**
         * BIC du client qui a initié une connexe, pour une RECALL de type BANQUE
         *
         *
         * WS7 NPS : statusOriginatorId ==> bicDonneurOrdreConnexe /
         */
        bicDonneurOrdreConnexe: string;
        /**
         * WS7 NPS : internalReason ==> detailMotifConnexe /
         */
        detailMotifConnexe: string;
        /**
         * Montant de la transaction d'origine échangé entre le Credit Party et le Debit Party
         *
         * WS7 NPS : originalInstructedAmount ==> montantTransOrigineEchange /
         */
        montantTransOrigineEchange: number;
        /**
         * PaymentMethod de la transaction d'origine
         *
         * WS7 NPS : originalPaymentMethod ==> methodeReglementTransaction /
         */
        methodeReglementTransaction: string;
        /**
         * Date d'exécution SCT ou d'échéance SDD demandée par le Client
         *
         * WS7 NPS : originalInstructedDay ==> dateReglementOpeInitiale /
         * Type date au format yyyy-MM-dd
         */
        dateReglementOpeInitiale: string;
        /**
         * Indique la priorité de traitement appliquée au paiement
         *
         * WS7 NPS : priorityLevel ==> prioritePaiement /
         */
        prioritePaiement: number;
        /**
         * Indique le Clearing channel utilisé pour le règlement de la transaction
         *
         * WS7 NPS : clearingChannel ==> canalEchangePaiement /
         */
        canalEchangePaiement: string;
        /**
         * Spécifie le Service Level utilisé (= SEPA)
         *
         * WS7 NPS : serviceLevelCode ==> niveauService /
         */
        niveauService: string;
        /**
         * Spécifie leserviceLevel comme code propriétaire
         *
         * WS7 NPS : serviceLevelProprietaryCode ==> niveauServiceProprietaire /
         */
        niveauServiceProprietaire: string;
        /**
         * "CORE" pour le Core Scheme , "B2B" pour le BusinesstoBusiness
         *
         * WS7 NPS : LocalInstrumentCode ==> codeIdentificationScheme /
         */
        codeIdentificationScheme: string;
        /**
         * "CORE" pour le Core Scheme , "B2B" pour le BusinesstoBusiness
         *
         * WS7 NPS : LocalInstrumentProprietaryCode ==> codeProprietaireIdentificScheme /
         */
        codeProprietaireIdentificScheme: string;
        /**
         * Donnée liée à la séquence du SDD (FRST, RCUR…)
         *
         * WS7 NPS : sequenceType ==> sequencePrelevement /
         */
        sequencePrelevement: string;
        /**
         * Catégorie de paiement / Type de Service attaché au paiement
         *
         *
         * WS7 NPS : categoryPurpose ==> categoriePaiement /
         */
        categoriePaiement: string;
        /**
         * Code niveau "proprietary" de la catégorie du paiement
         *
         *
         * WS7 NPS : categoryPurposeProprietaryCode ==> codeNaturePaiement /
         */
        codeNaturePaiement: string;
        /**
         * code nature paiement
         *
         *
         * WS7 NPS : purposeCode ==> codeCategoriePaiement /
         */
        codeCategoriePaiement: string;
        /**
         * Code identifiant que le type de Service attaché au paiement utilise un code propriétaire
         *
         * WS7 NPS : purposeProprietaryCode ==> codeNatureProprietaire /
         */
        codeNatureProprietaire: string;
        /**
         * WS7 NPS : equivalentAmount ==> montantConverti /
         */
        montantConverti: number;
        /**
         * WS7 NPS : equivalentAmountCurrencyOfTransfer ==> deviseMontantTransfert /
         */
        deviseMontantTransfert: string;
        /**
         * Code de répartition des frais (doit contenir la valeur SLEV)
         *
         * WS7 NPS : chargeBearer ==> codeRepartitionFrais /
         */
        codeRepartitionFrais: string;
        /**
         * Montant des frais
         *
         * WS7 NPS : chargeAmount ==> montantFrais /
         */
        montantFrais: number;
        /**
         * Identifiant de l'initiateur des frais
         *
         * WS7 NPS : chargePartyId ==> refInitiateurFrais /
         */
        refInitiateurFrais: string;
        /**
         * Frais compensatoire
         *
         * WS7 NPS : compensationAmount ==> montantCompasation /
         */
        montantCompasation: number;
        /**
         * Type Identifiant débiteur
         *
         * WS7 NPS : debitPartyIdType ==> typeDebiteur /
         */
        typeDebiteur: string;
        /**
         * Référence du débiteur
         *
         * WS7 NPS : debitPartyId ==> referenceDebiteur /
         */
        referenceDebiteur: string;
        /**
         * Nom du Client débité
         *
         * WS7 NPS : debitPartyName ==> nomDebiteur /
         */
        nomDebiteur: string;
        /**
         * WS7 NPS : debitPartyaddressLine1 ==> adresse1Debiteur /
         */
        adresse1Debiteur: string;
        /**
         * WS7 NPS : debitPartyaddressLine2 ==> adresse2Debiteur /
         */
        adresse2Debiteur: string;
        /**
         * WS7 NPS : debitPartycountry ==> paysDebiteur /
         */
        paysDebiteur: string;
        /**
         * Numéro du compte débiteur (IBAN)
         *
         * WS7 NPS : debitPartyAccount ==> ibanDebiteur /
         */
        ibanDebiteur: string;
        /**
         * Devise du compte
         *
         * WS7 NPS : debitPartyAccountCurrency ==> deviseIbanDebiteur /
         */
        deviseIbanDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentIdType ==> typeIdentificationBanqueDebit /
         */
        typeIdentificationBanqueDebit: string;
        /**
         * BIC du client débité
         *
         * WS7 NPS : debitPartyAgentId ==> bicClientDebiteur /
         */
        bicClientDebiteur: string;
        /**
         * Libelle Banque débiteur
         *
         * WS7 NPS : debitPartyAgentName ==> nomBanqueDebiteur /
         */
        nomBanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentAddressLine1 ==> adresse1BanqueDebiteur /
         */
        adresse1BanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentAddressLine2 ==> adresse2BanqueDebiteur /
         */
        adresse2BanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentCountry ==> paysBanqueDebiteur /
         */
        paysBanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentAccount ==> ibanBanqueDebiteur /
         */
        ibanBanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentAccountCurrency ==> deviseIbanBanquedebiteur /
         */
        deviseIbanBanquedebiteur: string;
        /**
         * WS7 NPS : ultimateDebitPartyIdType ==> typeIdentDebiteurUltime /
         */
        typeIdentDebiteurUltime: string;
        /**
         * WS7 NPS : ultimateDebitPartyId ==> referenceDebiteurUltime /
         */
        referenceDebiteurUltime: string;
        /**
         * Nom du Client d'origine débité
         *
         * WS7 NPS : ultimateDebitPartyName ==> nomDebiteurUltime /
         */
        nomDebiteurUltime: string;
        /**
         * WS7 NPS : ultimateDebitPartyaddressLine1 ==> adresse1DebiteurUltime /
         */
        adresse1DebiteurUltime: string;
        /**
         * WS7 NPS : ultimateDebitPartyaddressLine2 ==> adresse2DebiteurUltime /
         */
        adresse2DebiteurUltime: string;
        /**
         * WS7 NPS : ultimateDebitPartycountry ==> paysDebiteurUltime /
         */
        paysDebiteurUltime: string;
        /**
         * WS7 NPS : creditPartyIdType ==> typeCrediteur /
         */
        typeCrediteur: string;
        /**
         * WS7 NPS : creditPartyId ==> referenceCrediteur /
         */
        referenceCrediteur: string;
        /**
         * WS7 NPS : creditPartyName ==> nomCrediteur /
         */
        nomCrediteur: string;
        /**
         * WS7 NPS : creditPartyaddressLine1 ==> adresse1Crediteur /
         */
        adresse1Crediteur: string;
        /**
         * WS7 NPS : creditPartyaddressLine2 ==> adresse2Crediteur /
         */
        adresse2Crediteur: string;
        /**
         * WS7 NPS : creditPartycountry ==> paysCrediteur /
         */
        paysCrediteur: string;
        /**
         * Numéro du compte Crédité (IBAN)
         *
         * WS7 NPS : creditPartyAccount ==> ibanCrediteur /
         */
        ibanCrediteur: string;
        /**
         * Devise compte créditeur
         *
         * WS7 NPS : creditPartyAccountCurrency ==> deviseIbanCrediteur /
         */
        deviseIbanCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentIdType ==> typeIdentificationBanqueCredit /
         */
        typeIdentificationBanqueCredit: string;
        /**
         * BIC du client crédité
         *
         * WS7 NPS : creditPartyAgentId ==> bicCrediteur /
         */
        bicCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentName ==> nomBanqueCrediteur /
         */
        nomBanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentAddressLine1 ==> adresse1DebiteurUltime /
         */
        adresse1BanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentAddressLine2 ==> adresse2DebiteurUltime /
         */
        adresse2BanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentCountry ==> paysDebiteurUltime /
         */
        paysBanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentAccount ==> ibanBanqueCrediteur /
         */
        ibanBanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentAccountCurrency ==> deviseIbanBanqueCrediteur /
         */
        deviseIbanBanqueCrediteur: string;
        /**
         * WS7 NPS : ultimateCreditPartyIdType ==> typeIdentificationCrediteurUlti /
         */
        typeIdentificationCrediteurUlti: string;
        /**
         * WS7 NPS : ultimateCreditPartyId ==> referenceCrediteurUltime /
         */
        referenceCrediteurUltime: string;
        /**
         * WS7 NPS : ultimateCreditPartyName ==> nomCrediteurUltime /
         */
        nomCrediteurUltime: string;
        /**
         * WS7 NPS : ultimateCreditPartyAddressLine1 ==> adresse1CrediteurUltime /
         */
        adresse1CrediteurUltime: string;
        /**
         * WS7 NPS : ultimateCreditPartyAddressLine2 ==> adresse2CrediteurUltime /
         */
        adresse2CrediteurUltime: string;
        /**
         * WS7 NPS : ultimateCreditPartyCountry ==> paysCrediteurUltime /
         */
        paysCrediteurUltime: string;
        /**
         * Type d’identification (par exemple BIC, permis de conduire)
         *
         * WS7 NPS : initiatingPartyIdType ==> typeDonneurOrdre /
         */
        typeDonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartyId ==> identifiantDonneurOrdre /
         */
        identifiantDonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartyName ==> nomDonneurOrdre /
         */
        nomDonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartyaddressLine1 ==> adresse1DonneurOrdre /
         */
        adresse1DonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartyaddressLine2 ==> adresse2DonneurOrdre /
         */
        adresse2DonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartycountry ==> paysDonneurOrdre /
         */
        paysDonneurOrdre: string;
        /**
         * Référence du mandat de prélèvement SDD signé entre les parties
         *
         * WS7 NPS : mandateReference ==> referenceMandatSDD /
         */
        referenceMandatSDD: string;
        /**
         * WS7 NPS : mandateDateOfSignature ==> dateSignatureMandat /
         * Type date au format yyyy-MM-dd
         */
        dateSignatureMandat: string;
        /**
         * WS7 NPS : mandateAmendmentFlag ==> typeAmendementMandat /
         */
        typeAmendementMandat: boolean;
        /**
         * Ancienne référence de mandat
         *
         * WS7 NPS : mandateOldMandateReference ==> referenceMandatOrigine /
         */
        referenceMandatOrigine: string;
        /**
         * WS7 NPS : creditPartySchemePartyIdType ==> typeIdentCreancierSepa /
         */
        typeIdentCreancierSepa: string;
        /**
         * ICS
         *
         * WS7 NPS : creditPartySchemePartyId ==> identifiantCreancierSepa /
         */
        identifiantCreancierSepa: string;
        /**
         * WS7 NPS : creditPartySchemePartyName ==> nomCreancier /
         */
        nomCreancier: string;
        /**
         * WS7 NPS : creditPartySchemePartyaddressLine1 ==> adresse1Creancier /
         */
        adresse1Creancier: string;
        /**
         * WS7 NPS : creditPartySchemePartyaddressLine2 ==> adresse2Creancier /
         */
        adresse2Creancier: string;
        /**
         * WS7 NPS : creditPartySchemePartycountry ==> paysCreancier /
         */
        paysCreancier: string;
        /**
         * WS7 NPS : preNotificationId ==> referenceNotification /
         */
        referenceNotification: string;
        /**
         * WS7 NPS : preNotificationDate ==> dateNotificationPaiement /
         * Type date au format yyyy-MM-dd
         */
        dateNotificationPaiement: string;
        /**
         * WS7 NPS : remittanceUnstructured ==> libelleTransaction /
         */
        libelleTransaction: string;
        /**
         * Référence de l'instruction entrante ABS
         *
         * WS7 NPS : incomingDisplayInstructionId ==> refInstructionEntrante /
         */
        refInstructionEntrante: string;
        /**
         * Partenaire d'échange qui effectue le règlement (Participant de la condition d'échange sélectionné ex : PARME, BVA…)
         *
         * WS7 NPS : incomingSettlementParticipantName ==> nomParticipantEchangeEntrant /
         */
        nomParticipantEchangeEntrant: string;
        /**
         * Partenaire d'échange dont le contrat spécifique (processing agreement) conditionne le processing du paiement (ex : PARME, BVA…)
         *
         * WS7 NPS : incomingBusinessParticipantName ==> participantBancaireEntrant /
         */
        participantBancaireEntrant: string;
        /**
         * Partenaire d'échange avec lequel le message est échangé (ex : PARME, BVA…)
         *
         * WS7 NPS : incomingClearingParticipantName ==> participantEchangeEntrant /
         */
        participantEchangeEntrant: string;
        /**
         * WS7 NPS : incomingBankingEntityName ==> nomBanqueEntrante /
         */
        nomBanqueEntrante: string;
        /**
         * WS7 NPS : incomingTransactionScheme ==> schemeTransactionEntrante /
         */
        schemeTransactionEntrante: string;
        /**
         * Format SEPA de l'instruction Entrante dans ABS
         *
         * WS7 NPS : incomingInstructionType ==> formatInstructionEntrante /
         */
        formatInstructionEntrante: string;
        /**
         * Référence de l'instruction sortante ABS
         *
         * WS7 NPS : outgoingDisplayInstructionId ==> refInstructionSortante /
         */
        refInstructionSortante: string;
        /**
         * Partenaire d'échange qui effectue le règlement (OPE3 ou lui-même pour le "vrai" on-us)
         *
         * WS7 NPS : outgoingSettlementParticipantName ==> partenaireEchangeSortant /
         */
        partenaireEchangeSortant: string;
        /**
         * Partenaire d'échange dont le contrat spécifique (processing agreement) conditionne le processing du paiement (OPE3 ou lui-même pour le "vrai" on-us)
         *
         * WS7 NPS : outgoingBusinessParticipantName ==> nomParticipantEchangeSortant /
         */
        nomParticipantEchangeSortant: string;
        /**
         * Partenaire d'échange avec lequel le message est échangé (OPE3 ou lui-même pour le "vrai" on-us)
         *
         * WS7 NPS : outgoingClearingParticipantName ==> partenaireEchangeMessage /
         */
        partenaireEchangeMessage: string;
        /**
         * WS7 NPS : outgoingBankingEntityName ==> nomBanqueSortante /
         */
        nomBanqueSortante: string;
        /**
         * WS7 NPS : outgoingTransactionScheme ==> schemeTransactionSortante /
         */
        schemeTransactionSortante: string;
        /**
         * Format SEPA de l'instruction Sortante d'ABS
         *
         * WS7 NPS : outgoingInstructionType ==> formatInstructionSortante /
         */
        formatInstructionSortante: string;
        /**
         * "Pour les Rtransactions, la qualification est une « sous-classification » qui permet d’affiner la granularité de la recherche
         * Cancellation
         * Refund
         * Refusal
         * Rejection
         * Resolution
         * Return
         * Reversal
         * "
         *
         * WS7 NPS : rTransactionQualification ==> sousTypeTransactionConnexe /
         */
        sousTypeTransactionConnexe: string;
        /**
         * Date de règlement initiale, si un report de date de règlement a été effectué par ESP
         *
         *
         * WS7 NPS : initialSettlementDay ==> dateReglementInitiale
         * Type date au format yyyy-MM-dd
         */
        dateReglementInitiale: string;
        /**
         * Type de réponse au RECALL
         *
         * WS7 NPS : recallResponse ==> typeReponseRecall
         */
        typeReponseRecall: string;
        /**
         * Référence de l'instruction entrante ABS
         *
         * WS7 NPS : incomingInstructionKey ==> cleRefInstructionEntrante
         */
        cleRefInstructionEntrante: number;
        /**
         * WS7 NPS : whenModified ==> dateDerniereMajTransaction
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDerniereMajTransaction: string;
        /**
         * WS7 NPS : remittance1CreditPartyReferenceTypeCode ==> libelleCodeReferenceCrediteur
         */
        libelleCodeReferenceCrediteur: string;
        /**
         * WS7 NPS : remittance1CreditPartyReference ==> libelleReferenceCrediteur
         */
        libelleReferenceCrediteur: string;
        /**
         * WS7 NPS : remittance1CreditPartyReferenceTypeIssuer ==> libelleTypeActionRefCrediteur
         */
        libelleTypeActionRefCrediteur: string;
        /**
         * WS7 NPS : compensationDebitPartyAgentId  ==> compensationIdBanqueDebit
         */
        compensationIdBanqueDebit: string;
        /**
         * WS7 NPS : compensationCreditPartyAgentId ==> compensationIdBanqueCredit
         */
        compensationIdBanqueCredit: string;
        /**
         * Modification de la date de règlement suite à une Réclamation Client
         *
         * WS7 NPS : modifiedSettlementDay  ==> evolDateReglement
         * Type date au format yyyy-MM-dd
         */
        evolDateReglement: string;
        /**
         * WS7 NPS : mandateOldDebitPartyAgentId ==> idBanqueDebitMandatOrigine
         */
        idBanqueDebitMandatOrigine: string;
        /**
         * WS7 NPS : mandateOldDebitPartyAccount ==> ibanDebiteurMandatOrigine
         */
        ibanDebiteurMandatOrigine: string;
        /**
         * WS7 NPS : detailMotifInstruction ==> additionalStatusReasonInformation1
         */
        detailMotifInstruction: string;
        /**
         * WS7 NPS : detailMotifAnnInst2 ==> additionalStatusReasonInformation2
         */
        detailMotifAnnInst2: string;
        /**
         * WS7 NPS : detailMotifAnnInst3 ==> additionalStatusReasonInformation3
         */
        detailMotifAnnInst3: string;
        /**
         * WS7 NPS : detailMotifAnnInst4 ==> additionalStatusReasonInformation4
         */
        detailMotifAnnInst4: string;
        /**
         * WS7 NPS : detailMotifAnnInst5 ==> additionalStatusReasonInformation5
         */
        detailMotifAnnInst5: string;
        /**
         * WS7 NPS : detailMotifAnnInst6 ==> additionalStatusReasonInformation6
         */
        detailMotifAnnInst6: string;
        /**
         * WS7 NPS : detailMotifAnnInst7 ==> additionalStatusReasonInformation7
         */
        detailMotifAnnInst7: string;
        /**
         * WS7 NPS : detailMotifAnnInst8 ==> additionalStatusReasonInformation8
         */
        detailMotifAnnInst8: string;
        /**
         * WS7 NPS : detailMotifAnnInst9 ==> additionalStatusReasonInformation9
         */
        detailMotifAnnInst9: string;
        /**
         * WS7 NPS : detailMotifAnnInst10 ==> additionalStatusReasonInformation10
         */
        detailMotifAnnInst10: string;
        /**
         * WS7 NPS : detailMotifAnnInst11 ==> additionalStatusReasonInformation11
         */
        detailMotifAnnInst11: string;
        /**
         * IBAN de l'émetteur
         */
        ibanEmetteur: string;
        /**
         * BIC de l'émetteur
         */
        bicEmetteur: string;
        /**
         * Nom de l'émetteur
         */
        nomEmetteur: string;
        /**
         * IBAN du destinataire
         */
        ibanDestinataire: string;
        /**
         * BIC du destinataire
         */
        bicDestinataire: string;
        /**
         * Nom du destinataire
         */
        nomDestinataire: string;
        /**
         * Origine du rappel d'un virement RECALL.
         *
         * Valeurs :
         * 'B' pour banque (BicDonneurOrdreConnexe / WS7 NPS : statusOriginatorId
         * 'C' pour client (NomDonneurOrdreConnexe / WS7 NPS : statusOriginatorName)
         */
        origineRappel: string;
        /**
         * IBAN qui supporte un éventuel montant de compensation suite à une réclamation pour correction date de valeur, qui a été acceptée sous condition d'une compensation financière
         *
         * WS7 NPS : compensationCreditPartyAccount ==> ibanCompensationReclamation /
         */
        ibanCompensationReclamation: string;
        /**
         * IBAN qui supporte un éventuel montant de frais suite à une réclamation pour correction date de valeur ou non réception de fonds, qui a été acceptée.
         *
         * WS7 NPS : charges1PartyAccount ==> ibanFraisReclamation /
         */
        ibanFraisReclamation: string;
        /**
         * modificationOriginalPartyName
         *
         * WS7 NPS : modificationOriginalPartyName ==> nomClientAvantCorrection /
         */
        nomClientAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, pays du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyCountry ==> paysClientAvantCorrection /
         */
        paysClientAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, adresse1 du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyAddressLine1 ==> adresse1ClientAvantCorrection /
         */
        adresse1ClientAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, adresse2 du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyAddressLine2 ==> adresse2ClientAvantCorrection /
         */
        adresse2ClientAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, IBAN du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyAccount ==> ibanAvantCorrection /
         */
        ibanAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, BIC du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyAgentId ==> bicAvantCorrection /
         */
        bicAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, nom du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyName ==> nomClientApresCorrection /
         */
        nomClientApresCorrection: string;
        /**
         * Suite à correction de domiciliation, pays du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyCountry ==> paysClientApresCorrection /
         */
        paysClientApresCorrection: string;
        /**
         * Suite à correction de domiciliation, adresse1 du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyAddressLine1 ==> adresse1ClientApresCorrection /
         */
        adresse1ClientApresCorrection: string;
        /**
         * Suite à correction de domiciliation, adresse2 du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyAddressLine2 ==> adresse2ClientApresCorrection /
         */
        adresse2ClientApresCorrection: string;
        /**
         * Suite à correction de domiciliation, IBAN du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyAccount ==> ibanApresCorrection /
         */
        ibanApresCorrection: string;
        /**
         * Suite à correction de domiciliation, BIC du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyAgentId ==> bicApresCorrection /
         */
        bicApresCorrection: string;
        /**
         * Suite à correction de domiciliation, informations complémentaires concernant la correction
         *
         * WS7 NPS : remittance1AdditionalInformation ==> libelleCorrectionDomicilation /
         */
        libelleCorrectionDomicilation: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.DetailTrnInstruction {
    interface IParametreAppel {
        /**
         * Clé primaire technique attribuée par ABS pour la transaction
         *
         *
         * WS7 NPS : id ==> clePrimaireTransaction /
         */
        clePrimaireTransaction: number;
    }
    interface IDetailTransaction {
        parametreAppel: IParametreAppel;
        transaction: ITransaction;
    }
    interface ITransaction {
        /**
         * Référence de la Transaction, attribuée par ABS
         *
         * WS7 NPS : displayTransactionId ==> referenceTransaction /
         */
        referenceTransaction: string;
        /**
         * Clé primaire de la table Détail Transaction
         *
         * WS7 NPS : entityKey ==> clePrimaireDetailTransaction /
         */
        clePrimaireDetailTransaction: number;
        /**
         * Référence client transaction (instructingAgentTransactionId)
         *
         * WS7 NPS : instructingAgentTransactionId ==> refRemiseClient /
         */
        refRemiseClient: string;
        /**
         * Transaction ID (TX-ID) de l'opération initiale émise et calculée par ABS
         *
         * WS7 NPS : firstInstructingAgentTransactionId ==> identificationTransaction /
         */
        identificationTransaction: string;
        /**
         * WS7 NPS : incomingInstructionReference ==> referenceMessageEntrant /
         */
        referenceMessageEntrant: string;
        /**
         * WS7 NPS : endToEndId ==> refClientBoutEnBout /
         */
        refClientBoutEnBout: string;
        /**
         * Montant total de la Transaction
         *
         * WS7 NPS : settlementAmount ==> montantTransaction /
         */
        montantTransaction: number;
        /**
         * Date de règlement de la transaction d'origine
         *
         * WS7 NPS : originalSettlementDay ==> dateReglementOrigine /
         * Type date au format yyyy-MM-dd
         */
        dateReglementOrigine: string;
        /**
         * Date de règlement prévisionnelle
         *
         * WS7 NPS : settlementDay ==> dateReglementTransaction /
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransaction: string;
        /**
         * La classification du paiement indique la nature du paiement utilisé
         *
         * WS7 NPS : classification ==> classificationPaiement /
         */
        classificationPaiement: string;
        /**
         * Montant de la transaction échangé entre les deux parties
         *
         * WS7 NPS : instructedAmount ==> montantTransactionEchange /
         */
        montantTransactionEchange: number;
        /**
         * Par convention, une transaction est un débit quand le résultat du traitement de la transaction génère un débit du compte destinataire.
         *
         *
         * WS7 NPS : debitCreditIndicator ==> indicateurDebitCredit /
         */
        indicateurDebitCredit: string;
        /**
         * "Détermine le scheme associé à la transaction
         * Valeurs :
         * ‘SCT’
         * ‘SDDB2B’
         * ‘SDDCORE’
         * "
         *
         * WS7 NPS : processingScheme ==> schemaTransaction /
         */
        schemaTransaction: string;
        /**
         * WS7 NPS : instructedDay ==> dateExecution /
         * Type date au format yyyy-MM-dd
         */
        dateExecution: string;
        /**
         * Status de la transaction
         *
         * WS7 NPS : status ==> statusTransaction /
         */
        statusTransaction: string;
        /**
         * Liste des transactions liées à la transaction consultée
         *
         * WS7 NPS : linkedTransactions ==> transactionLiee /
         */
        transactionLiee: Array<number>;
        /**
         * Dernier délai pour lequel la transaction peut-être soumise
         *
         * WS7 NPS : latestSubmissionTime ==> dateMaxExecution /
         * Type date au format yyyy-MM-dd
         */
        dateMaxExecution: string;
        /**
         * Libellé de l'établissement MYSYS
         *
         * WS7 NPS : bankName ==> libelleEtablissement /
         */
        libelleEtablissement: string;
        /**
         * "Code Etablissement MYSYS
         * Ex : 13335 CE APC / 13135 CE MP"
         *
         * WS7 NPS : bankId ==> codeEtablissement /
         */
        codeEtablissement: string;
        /**
         * Clé primaire d'accès WS ESP
         *
         * WS7 NPS : bankKey ==> clePrimaireEtablisssement /
         */
        clePrimaireEtablisssement: number;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         *
         * Cette notion d'offre est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         *
         * WS7 NPS : offer ==> offreClient /
         */
        offreClient: string;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         *
         * Cette notion de produit est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         *
         * WS7 NPS : product ==> categorieProduitBancaire /
         */
        categorieProduitBancaire: string;
        /**
         * Abonnement du contrat flux du client
         *
         * WS7 NPS : customerSubscription ==> abonnementClient /
         */
        abonnementClient: string;
        /**
         * "Canal d'acquisition
         * par exemple = « PARME » dans le cadre de l’étape 1"
         *
         * WS7 NPS : channel ==> canalAcquisition /
         */
        canalAcquisition: string;
        /**
         * "Sous Canal d'acquisition
         * sous-canal d’acquisition client ; par exemple = « EBICST », « PESIT », « FILEACT »…)"
         *
         * WS7 NPS : subChannel ==> sousCanalAcquisition /
         */
        sousCanalAcquisition: string;
        /**
         * Permet d'identifier si la transaction est à destination de l'interbancaire ou si elle reste interne à la plateforme ABS
         *
         * WS7 NPS : onUsFlag ==> transactionInterne /
         */
        transactionInterne: boolean;
        /**
         * Indique le niveau d'importance du paiement en cours
         *
         * WS7 NPS : importance ==> importanceTransaction /
         */
        importanceTransaction: number;
        /**
         * Unique reference, as assigned by the account servicing institution, to unambiguously identify the instruction. (servicerTxnId)
         *
         * WS7 NPS : accountServicerReference ==> referenceComptable /
         */
        referenceComptable: string;
        /**
         * Contient la display Id de la Routing Rule qui a été appliquée lorsque l'opération a été traitée (routingRuleDisplayId)
         *
         * WS7 NPS : matchedRoutingrule ==> refRegleRoutage /
         */
        refRegleRoutage: string;
        /**
         * Contient la clé primaire (RoutingRule.RoutingRuleKey) de la Routing Rule qui a été appliquée lorsque l'opération a été traitée
         *
         * WS7 NPS : matchedRoutingruleKey ==> cleRefRegleRoutage /
         */
        cleRefRegleRoutage: number;
        /**
         * "Permet de définir, d’un point de vue ABS, quelle est la provenance des flux.
         *
         * Sens Client vers Banque (Reçu d'un distributeur) (TRUE) - ALLER
         * Sens Interbancaire, via ESP vers Banque (FALSE) - RETOUR"
         *
         * WS7 NPS : outbound ==> sensEchangeABS /
         */
        sensEchangeABS: boolean;
        /**
         * Pour les instructions ayant fait l'objet d'une R-instruction, cet attribut permet de préciser le type de connexe associé
         *
         * WS7 NPS : connexeType ==> typeConnexe /
         */
        typeConnexe: string;
        /**
         * Indique si une transaction est une R-Transaction (TRUE) ou non (FALSE or EMPTY)
         *
         * WS7 NPS : rtransactionFlag ==> typeTransaction /
         */
        typeTransaction: boolean;
        /**
         * Indique le niveau de la R-Transaction (généralement le niveau est 1). Une R-transaction consécutive à une autre R-transaction serait à 2.
         *
         * WS7 NPS : rTransactionLevel ==> niveauConnexe /
         */
        niveauConnexe: number;
        /**
         * "Pour les Rtransactions, la qualification est une « sous-classification » qui permet d’affiner la granularité de la recherche
         * Cancellation
         * Refund
         * Refusal
         * Rejection
         * Resolution
         * Return
         * Reversal
         * "
         *
         * WS7 NPS : qualification ==> typeTransactionConnexe /
         */
        typeTransactionConnexe: string;
        /**
         * Indique si la R-transaction est un remboursement (True) ou non (False)
         *
         * WS7 NPS : rTransactionRefundFlag ==> indicateurRemboursement /
         */
        indicateurRemboursement: boolean;
        /**
         * WS7 NPS : originalInstructionReference ==> referenceMessageOrigine /
         */
        referenceMessageOrigine: string;
        /**
         * Format SEPA de l'instruction d'origine contenant la transaction
         *
         * WS7 NPS : originalInstructionType ==> formatInstructionOrigine /
         */
        formatInstructionOrigine: string;
        /**
         * WS7 NPS : originalCreationDateTime ==> dateCreationOrigine /
         * Type date au format yyyy-MM-dd
         */
        dateCreationOrigine: string;
        /**
         * Référence de la remise client (PmtInfId), pour une connexe c'est l'opération d'origine
         *
         * WS7 NPS : originalInstructingAgentTransactionId ==> refRemiseClientOpeOrgine /
         */
        refRemiseClientOpeOrgine: string;
        /**
         * WS7 NPS : originalEndToEndId ==> refClientBoutEnBoutOrigine /
         */
        refClientBoutEnBoutOrigine: string;
        /**
         * Transaction ID (TX-ID) de l'opération initiale émise et calculée par ABS, associée à une opération connexe
         *
         * WS7 NPS : originalFirstInstructingAgentTransactionId ==> identTransactionOpeOrigine /
         */
        identTransactionOpeOrigine: string;
        /**
         * WS7 NPS : transactionStatusCode ==> statusCodeTransaction /
         */
        statusCodeTransaction: string;
        /**
         * WS7 NPS : statusReasonCode
         * WS7 NPS : statusReasonProprietaryCode
         * ==> codeMotifTransaction
         *
         * Alimentation de la donnée en fonction de l'une au de l'autre propriété alimentée par ABS.
         */
        codeMotifTransaction: string;
        /**
         * Raison pour laquelle le statut n'est pas dans la liste des codes disponible
         *
         * WS7 NPS : statusReasonProprietaryCode ==> motifErreurStatut /
         */
        motifErreurStatut: string;
        /**
         * Nom du client qui a initié une connexe, pour une RECALL de type CLIENT
         *
         *
         * WS7 NPS : statusOriginatorName ==> nomDonneurOrdreConnexe /
         */
        nomDonneurOrdreConnexe: string;
        /**
         * BIC du client qui a initié une connexe, pour une RECALL de type BANQUE
         *
         *
         * WS7 NPS : statusOriginatorId ==> bicDonneurOrdreConnexe /
         */
        bicDonneurOrdreConnexe: string;
        /**
         * WS7 NPS : internalReason ==> detailMotifConnexe /
         */
        detailMotifConnexe: string;
        /**
         * Montant de la transaction d'origine échangé entre le Credit Party et le Debit Party
         *
         * WS7 NPS : originalInstructedAmount ==> montantTransOrigineEchange /
         */
        montantTransOrigineEchange: number;
        /**
         * PaymentMethod de la transaction d'origine
         *
         * WS7 NPS : originalPaymentMethod ==> methodeReglementTransaction /
         */
        methodeReglementTransaction: string;
        /**
         * Jour de traitement de la transaction d'origine
         *
         * WS7 NPS : originalInstructedDay ==> dateReglementOpeInitiale /
         * Type date au format yyyy-MM-dd
         */
        dateReglementOpeInitiale: string;
        /**
         * Indique la priorité de traitement appliquée au paiement
         *
         * WS7 NPS : priorityLevel ==> prioritePaiement /
         */
        prioritePaiement: number;
        /**
         * Indique le Clearing channel utilisé pour le règlement de la transaction
         *
         * WS7 NPS : clearingChannel ==> canalEchangePaiement /
         */
        canalEchangePaiement: string;
        /**
         * Spécifie le Service Level utilisé (= SEPA)
         *
         * WS7 NPS : serviceLevelCode ==> niveauService /
         */
        niveauService: string;
        /**
         * Spécifie leserviceLevel comme code propriétaire
         *
         * WS7 NPS : serviceLevelProprietaryCode ==> niveauServiceProprietaire /
         */
        niveauServiceProprietaire: string;
        /**
         * "CORE" pour le Core Scheme , "B2B" pour le BusinesstoBusiness
         *
         * WS7 NPS : LocalInstrumentCode ==> codeIdentificationScheme /
         */
        codeIdentificationScheme: string;
        /**
         * "CORE" pour le Core Scheme , "B2B" pour le BusinesstoBusiness
         *
         * WS7 NPS : LocalInstrumentProprietaryCode ==> codeProprietaireIdentificScheme /
         */
        codeProprietaireIdentificScheme: string;
        /**
         * Donnée liée à la séquence du SDD (FRST, RCUR…)
         *
         * WS7 NPS : sequenceType ==> sequencePrelevement /
         */
        sequencePrelevement: string;
        /**
         * Catégorie de paiement / Type de Service attaché au paiement
         *
         *
         * WS7 NPS : categoryPurpose ==> categoriePaiement /
         */
        categoriePaiement: string;
        /**
         * Code Nature du paiement
         *
         *
         *
         * WS7 NPS : categoryPurposeProprietaryCode ==> codeNaturePaiement /
         */
        codeNaturePaiement: string;
        /**
         * Code identifiant la catégorie de paiement
         *
         * WS7 NPS : purposeCode ==> codeCategoriePaiement /
         */
        codeCategoriePaiement: string;
        /**
         * Code identifiant que le type de Service attaché au paiement utilise un code propriétaire
         *
         * WS7 NPS : purposeProprietaryCode ==> codeNatureProprietaire /
         */
        codeNatureProprietaire: string;
        /**
         * WS7 NPS : equivalentAmount ==> montantConverti /
         */
        montantConverti: number;
        /**
         * WS7 NPS : equivalentAmountCurrencyOfTransfer ==> deviseMontantTransfert /
         */
        deviseMontantTransfert: string;
        /**
         * Code de répartition des frais (doit contenir la valeur SLEV)
         *
         * WS7 NPS : chargeBearer ==> codeRepartitionFrais /
         */
        codeRepartitionFrais: string;
        /**
         * Montant des frais
         *
         * WS7 NPS : chargeAmount ==> montantFrais /
         */
        montantFrais: number;
        /**
         * Identifiant de l'initiateur des frais
         *
         * WS7 NPS : chargePartyId ==> refInitiateurFrais /
         */
        refInitiateurFrais: string;
        /**
         * Frais compensatoire
         *
         * WS7 NPS : compensationAmount ==> montantCompasation /
         */
        montantCompasation: number;
        /**
         * Type Identifiant débiteur
         *
         * WS7 NPS : debitPartyIdType ==> typeDebiteur /
         */
        typeDebiteur: string;
        /**
         * Référence du débiteur
         *
         * WS7 NPS : debitPartyId ==> referenceDebiteur /
         */
        referenceDebiteur: string;
        /**
         * Nom du Client débité
         *
         * WS7 NPS : debitPartyName ==> nomDebiteur /
         */
        nomDebiteur: string;
        /**
         * WS7 NPS : debitPartyaddressLine1 ==> adresse1Debiteur /
         */
        adresse1Debiteur: string;
        /**
         * WS7 NPS : debitPartyaddressLine2 ==> adresse2Debiteur /
         */
        adresse2Debiteur: string;
        /**
         * WS7 NPS : debitPartycountry ==> paysDebiteur /
         */
        paysDebiteur: string;
        /**
         * Numéro du compte débiteur (IBAN)
         *
         * WS7 NPS : debitPartyAccount ==> ibanDebiteur /
         */
        ibanDebiteur: string;
        /**
         * Devise du compte
         *
         * WS7 NPS : debitPartyAccountCurrency ==> deviseIbanDebiteur /
         */
        deviseIbanDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentIdType ==> typeIdentificationBanqueDebit /
         */
        typeIdentificationBanqueDebit: string;
        /**
         * BIC du client débité
         *
         * WS7 NPS : debitPartyAgentId ==> bicClientDebiteur /
         */
        bicClientDebiteur: string;
        /**
         * Libelle Banque débiteur
         *
         * WS7 NPS : debitPartyAgentName ==> nomBanqueDebiteur /
         */
        nomBanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentAddressLine1 ==> adresse1BanqueDebiteur /
         */
        adresse1BanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentAddressLine2 ==> adresse2BanqueDebiteur /
         */
        adresse2BanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentCountry ==> paysBanqueDebiteur /
         */
        paysBanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentAccount ==> ibanBanqueDebiteur /
         */
        ibanBanqueDebiteur: string;
        /**
         * WS7 NPS : debitPartyAgentAccountCurrency ==> deviseIbanBanquedebiteur /
         */
        deviseIbanBanquedebiteur: string;
        /**
         * WS7 NPS : ultimateDebitPartyIdType ==> typeIdentDebiteurUltime /
         */
        typeIdentDebiteurUltime: string;
        /**
         * WS7 NPS : ultimateDebitPartyId ==> referenceDebiteurUltime /
         */
        referenceDebiteurUltime: string;
        /**
         * Nom du Client d'origine débité
         *
         * WS7 NPS : ultimateDebitPartyName ==> nomDebiteurUltime /
         */
        nomDebiteurUltime: string;
        /**
         * WS7 NPS : ultimateDebitPartyaddressLine1 ==> adresse1DebiteurUltime /
         */
        adresse1DebiteurUltime: string;
        /**
         * WS7 NPS : ultimateDebitPartyaddressLine2 ==> adresse2DebiteurUltime /
         */
        adresse2DebiteurUltime: string;
        /**
         * WS7 NPS : ultimateDebitPartycountry ==> paysDebiteurUltime /
         */
        paysDebiteurUltime: string;
        /**
         * WS7 NPS : creditPartyIdType ==> typeCrediteur /
         */
        typeCrediteur: string;
        /**
         * WS7 NPS : creditPartyId ==> referenceCrediteur /
         */
        referenceCrediteur: string;
        /**
         * WS7 NPS : creditPartyName ==> nomCrediteur /
         */
        nomCrediteur: string;
        /**
         * WS7 NPS : creditPartyaddressLine1 ==> adresse1Crediteur /
         */
        adresse1Crediteur: string;
        /**
         * WS7 NPS : creditPartyaddressLine2 ==> adresse2Crediteur /
         */
        adresse2Crediteur: string;
        /**
         * WS7 NPS : creditPartycountry ==> paysCrediteur /
         */
        paysCrediteur: string;
        /**
         * Numéro du compte Crédité (IBAN)
         *
         * WS7 NPS : creditPartyAccount ==> ibanCrediteur /
         */
        ibanCrediteur: string;
        /**
         * Devise compte créditeur
         *
         * WS7 NPS : creditPartyAccountCurrency ==> deviseIbanCrediteur /
         */
        deviseIbanCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentIdType ==> typeIdentificationBanqueCredit /
         */
        typeIdentificationBanqueCredit: string;
        /**
         * BIC du client crédité
         *
         * WS7 NPS : creditPartyAgentId ==> bicCrediteur /
         */
        bicCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentName ==> nomBanqueCrediteur /
         */
        nomBanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentAddressLine1 ==> adresse1DebiteurUltime /
         */
        adresse1BanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentAddressLine2 ==> adresse2DebiteurUltime /
         */
        adresse2BanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentCountry ==> paysDebiteurUltime /
         */
        paysBanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentAccount ==> ibanBanqueCrediteur /
         */
        ibanBanqueCrediteur: string;
        /**
         * WS7 NPS : creditPartyAgentAccountCurrency ==> deviseIbanBanqueCrediteur /
         */
        deviseIbanBanqueCrediteur: string;
        /**
         * WS7 NPS : ultimateCreditPartyIdType ==> typeIdentificationCrediteurUlti /
         */
        typeIdentificationCrediteurUlti: string;
        /**
         * WS7 NPS : ultimateCreditPartyId ==> referenceCrediteurUltime /
         */
        referenceCrediteurUltime: string;
        /**
         * WS7 NPS : ultimateCreditPartyName ==> nomCrediteurUltime /
         */
        nomCrediteurUltime: string;
        /**
         * WS7 NPS : ultimateCreditPartyAddressLine1 ==> adresse1CrediteurUltime /
         */
        adresse1CrediteurUltime: string;
        /**
         * WS7 NPS : ultimateCreditPartyAddressLine2 ==> adresse2CrediteurUltime /
         */
        adresse2CrediteurUltime: string;
        /**
         * WS7 NPS : ultimateCreditPartyCountry ==> paysCrediteurUltime /
         */
        paysCrediteurUltime: string;
        /**
         * Type d’identification (par exemple BIC, permis de conduire)
         *
         * WS7 NPS : initiatingPartyIdType ==> typeDonneurOrdre /
         */
        typeDonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartyId ==> identifiantDonneurOrdre /
         */
        identifiantDonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartyName ==> nomDonneurOrdre /
         */
        nomDonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartyaddressLine1 ==> adresse1DonneurOrdre /
         */
        adresse1DonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartyaddressLine2 ==> adresse2DonneurOrdre /
         */
        adresse2DonneurOrdre: string;
        /**
         * WS7 NPS : initiatingPartycountry ==> paysDonneurOrdre /
         */
        paysDonneurOrdre: string;
        /**
         * Référence du mandat de prélèvement SDD signé entre les parties
         *
         * WS7 NPS : mandateReference ==> referenceMandatSDD /
         */
        referenceMandatSDD: string;
        /**
         * WS7 NPS : mandateDateOfSignature ==> dateSignatureMandat /
         * Type date au format yyyy-MM-dd
         */
        dateSignatureMandat: string;
        /**
         * WS7 NPS : mandateAmendmentFlag ==> typeAmendementMandat /
         */
        typeAmendementMandat: boolean;
        /**
         * Ancienne référence de mandat
         *
         * WS7 NPS : mandateOldMandateReference ==> referenceMandatOrigine /
         */
        referenceMandatOrigine: string;
        /**
         * WS7 NPS : creditPartySchemePartyIdType ==> typeIdentCreancierSepa /
         */
        typeIdentCreancierSepa: string;
        /**
         * ICS
         *
         * WS7 NPS : creditPartySchemePartyId ==> identifiantCreancierSepa /
         */
        identifiantCreancierSepa: string;
        /**
         * WS7 NPS : creditPartySchemePartyName ==> nomCreancier /
         */
        nomCreancier: string;
        /**
         * WS7 NPS : creditPartySchemePartyaddressLine1 ==> adresse1Creancier /
         */
        adresse1Creancier: string;
        /**
         * WS7 NPS : creditPartySchemePartyaddressLine2 ==> adresse2Creancier /
         */
        adresse2Creancier: string;
        /**
         * WS7 NPS : creditPartySchemePartycountry ==> paysCreancier /
         */
        paysCreancier: string;
        /**
         * WS7 NPS : preNotificationId ==> referenceNotification /
         */
        referenceNotification: string;
        /**
         * WS7 NPS : preNotificationDate ==> dateNotificationPaiement /
         * Type date au format yyyy-MM-dd
         */
        dateNotificationPaiement: string;
        /**
         * WS7 NPS : remittanceUnstructured ==> libelleTransaction /
         */
        libelleTransaction: string;
        /**
         * Référence de l'instruction entrante ABS
         *
         * WS7 NPS : incomingDisplayInstructionId ==> refInstructionEntrante /
         */
        refInstructionEntrante: string;
        /**
         * Partenaire d'échange qui effectue le règlement (Participant de la condition d'échange sélectionné ex : PARME, BVA…)
         *
         * WS7 NPS : incomingSettlementParticipantName ==> nomParticipantEchangeEntrant /
         */
        nomParticipantEchangeEntrant: string;
        /**
         * Partenaire d'échange dont le contrat spécifique (processing agreement) conditionne le processing du paiement (ex : PARME, BVA…)
         *
         * WS7 NPS : incomingBusinessParticipantName ==> participantBancaireEntrant /
         */
        participantBancaireEntrant: string;
        /**
         * Partenaire d'échange avec lequel le message est échangé (ex : PARME, BVA…)
         *
         * WS7 NPS : incomingClearingParticipantName ==> participantEchangeEntrant /
         */
        participantEchangeEntrant: string;
        /**
         * WS7 NPS : incomingBankingEntityName ==> nomBanqueEntrante /
         */
        nomBanqueEntrante: string;
        /**
         * WS7 NPS : incomingTransactionScheme ==> schemeTransactionEntrante /
         */
        schemeTransactionEntrante: string;
        /**
         * Format SEPA de l'instruction Entrante dans ABS
         *
         * WS7 NPS : incomingInstructionType ==> formatInstructionEntrante /
         */
        formatInstructionEntrante: string;
        /**
         * Référence de l'instruction sortante ABS
         *
         * WS7 NPS : outgoingDisplayInstructionId ==> refInstructionSortante /
         */
        refInstructionSortante: string;
        /**
         * Partenaire d'échange qui effectue le règlement (OPE3 ou lui-même pour le "vrai" on-us)
         *
         * WS7 NPS : outgoingSettlementParticipantName ==> partenaireEchangeSortant /
         */
        partenaireEchangeSortant: string;
        /**
         * Partenaire d'échange dont le contrat spécifique (processing agreement) conditionne le processing du paiement (OPE3 ou lui-même pour le "vrai" on-us)
         *
         * WS7 NPS : outgoingBusinessParticipantName ==> nomParticipantEchangeSortant /
         */
        nomParticipantEchangeSortant: string;
        /**
         * Partenaire d'échange avec lequel le message est échangé (OPE3 ou lui-même pour le "vrai" on-us)
         *
         * WS7 NPS : outgoingClearingParticipantName ==> partenaireEchangeMessage /
         */
        partenaireEchangeMessage: string;
        /**
         * WS7 NPS : outgoingBankingEntityName ==> nomBanqueSortante /
         */
        nomBanqueSortante: string;
        /**
         * WS7 NPS : outgoingTransactionScheme ==> schemeTransactionSortante /
         */
        schemeTransactionSortante: string;
        /**
         * Format SEPA de l'instruction Sortante d'ABS
         *
         * WS7 NPS : outgoingInstructionType ==> formatInstructionSortante /
         */
        formatInstructionSortante: string;
        /**
         * "Pour les Rtransactions, la qualification est une « sous-classification » qui permet d’affiner la granularité de la recherche
         * Cancellation
         * Refund
         * Refusal
         * Rejection
         * Resolution
         * Return
         * Reversal
         * "
         *
         * WS7 NPS : rTransactionQualification ==> sousTypeTransactionConnexe /
         */
        sousTypeTransactionConnexe: string;
        /**
         * Date de règlement initiale de la transaction
         *
         * WS7 NPS : initialSettlementDay ==> dateReglementInitiale
         * Type date au format yyyy-MM-dd
         */
        dateReglementInitiale: string;
        /**
         * Type de réponse au RECALL
         *
         * WS7 NPS : recallResponse ==> typeReponseRecall
         */
        typeReponseRecall: string;
        /**
         * Référence de l'instruction entrante ABS
         *
         * WS7 NPS : incomingInstructionKey ==> cleRefInstructionEntrante
         */
        cleRefInstructionEntrante: number;
        /**
         * WS7 NPS : whenModified ==> dateDerniereMajTransaction
         * Type date au format yyyy-MM-dd
         */
        dateDerniereMajTransaction: string;
        /**
         * WS7 NPS : remittance1CreditPartyReferenceTypeCode ==> libelleCodeReferenceCrediteur
         */
        libelleCodeReferenceCrediteur: string;
        /**
         * WS7 NPS : remittance1CreditPartyReference ==> libelleReferenceCrediteur
         */
        libelleReferenceCrediteur: string;
        /**
         * WS7 NPS : remittance1CreditPartyReferenceTypeIssuer ==> libelleTypeActionRefCrediteur
         */
        libelleTypeActionRefCrediteur: string;
        /**
         * WS7 NPS : compensationDebitPartyAgentId ==> compensationIdBanqueDebit
         */
        compensationIdBanqueDebit: string;
        /**
         * WS7 NPS : compensationCreditPartyAgentId ==> compensationIdBanqueCredit
         */
        compensationIdBanqueCredit: string;
        /**
         * Modification de la date de règlement suite à une Réclamation Client
         *
         * WS7 NPS : modifiedSettlementDay ==> evolDateReglement
         * Type date au format yyyy-MM-dd
         */
        evolDateReglement: string;
        /**
         * WS7 NPS : mandateOldDebitPartyAgentId ==> idBanqueDebitMandatOrigine
         */
        idBanqueDebitMandatOrigine: string;
        /**
         * WS7 NPS : mandateOldDebitPartyAccount ==> ibanDebiteurMandatOrigine
         */
        ibanDebiteurMandatOrigine: string;
        /**
         * WS7 NPS : detailMotifInstruction ==> additionalStatusReasonInformation1
         */
        detailMotifInstruction: string;
        /**
         * WS7 NPS : detailMotifAnnInst2 ==> additionalStatusReasonInformation2
         */
        detailMotifAnnInst2: string;
        /**
         * WS7 NPS : detailMotifAnnInst3 ==> additionalStatusReasonInformation3
         */
        detailMotifAnnInst3: string;
        /**
         * WS7 NPS : detailMotifAnnInst4 ==> additionalStatusReasonInformation4
         */
        detailMotifAnnInst4: string;
        /**
         * WS7 NPS : detailMotifAnnInst5 ==> additionalStatusReasonInformation5
         */
        detailMotifAnnInst5: string;
        /**
         * WS7 NPS : detailMotifAnnInst6 ==> additionalStatusReasonInformation6
         */
        detailMotifAnnInst6: string;
        /**
         * WS7 NPS : detailMotifAnnInst7 ==> additionalStatusReasonInformation7
         */
        detailMotifAnnInst7: string;
        /**
         * WS7 NPS : detailMotifAnnInst8 ==> additionalStatusReasonInformation8
         */
        detailMotifAnnInst8: string;
        /**
         * WS7 NPS : detailMotifAnnInst9 ==> additionalStatusReasonInformation9
         */
        detailMotifAnnInst9: string;
        /**
         * WS7 NPS : detailMotifAnnInst10 ==> additionalStatusReasonInformation10
         */
        detailMotifAnnInst10: string;
        /**
         * WS7 NPS : detailMotifAnnInst11 ==> additionalStatusReasonInformation11
         */
        detailMotifAnnInst11: string;
        /**
         * Origine du rappel d'un virement RECALL.
         *
         * Valeurs :
         * 'B' pour banque (BicDonneurOrdreConnexe / WS7 NPS : statusOriginatorId
         * 'C' pour client (NomDonneurOrdreConnexe / WS7 NPS : statusOriginatorName)
         */
        origineRappel: string;
        /**
         * IBAN qui supporte un éventuel montant de compensation suite à une réclamation pour correction date de valeur, qui a été acceptée sous condition d'une compensation financière
         *
         * WS7 NPS : compensationCreditPartyAccount ==> ibanCompensationReclamation /
         */
        ibanCompensationReclamation: string;
        /**
         * IBAN qui supporte un éventuel montant de frais suite à une réclamation pour correction date de valeur ou non réception de fonds, qui a été acceptée.
         *
         * WS7 NPS : charges1PartyAccount ==> ibanFraisReclamation /
         */
        ibanFraisReclamation: string;
        /**
         * modificationOriginalPartyName
         *
         * WS7 NPS : modificationOriginalPartyName ==> nomClientAvantCorrection /
         */
        nomClientAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, pays du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyCountry ==> paysClientAvantCorrection /
         */
        paysClientAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, adresse1 du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyAddressLine1 ==> adresse1ClientAvantCorrection /
         */
        adresse1ClientAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, adresse2 du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyAddressLine2 ==> adresse2ClientAvantCorrection /
         */
        adresse2ClientAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, IBAN du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyAccount ==> ibanAvantCorrection /
         */
        ibanAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, BIC du client avant modification
         *
         * WS7 NPS : modificationOriginalPartyAgentId ==> bicAvantCorrection /
         */
        bicAvantCorrection: string;
        /**
         * Suite à correction de domiciliation, nom du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyName ==> nomClientApresCorrection /
         */
        nomClientApresCorrection: string;
        /**
         * Suite à correction de domiciliation, pays du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyCountry ==> paysClientApresCorrection /
         */
        paysClientApresCorrection: string;
        /**
         * Suite à correction de domiciliation, adresse1 du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyAddressLine1 ==> adresse1ClientApresCorrection /
         */
        adresse1ClientApresCorrection: string;
        /**
         * Suite à correction de domiciliation, adresse2 du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyAddressLine2 ==> adresse2ClientApresCorrection /
         */
        adresse2ClientApresCorrection: string;
        /**
         * Suite à correction de domiciliation, IBAN du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyAccount ==> ibanApresCorrection /
         */
        ibanApresCorrection: string;
        /**
         * Suite à correction de domiciliation, BIC du client après modification
         *
         * WS7 NPS : modificationUpdatedPartyAgentId ==> bicApresCorrection /
         */
        bicApresCorrection: string;
        /**
         * Suite à correction de domiciliation, informations complémentaires concernant la correction
         *
         * WS7 NPS : remittance1AdditionalInformation ==> libelleCorrectionDomicilation /
         */
        libelleCorrectionDomicilation: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.ExportInstruction {
    interface ICritereTri {
        /**
         * Nom du champ sur lequel le tri doit être appliqué
         */
        nomChamp: string;
        /**
         * Sens du tri
         *
         * Valeurs :
         *  - 'asc', tri croissant (valeur par défaut)
         *  - 'desc', tri décroissant
         */
        sens: string;
    }
    interface IParametreAppel {
        /**
         * Référence de l'instruction
         */
        listeReferencesInstructions: Array<string>;
        /**
         * Référence du message XML
         */
        listeReferencesMessages: Array<string>;
        /**
         * Liste de formats SEPA pour les instructions
         */
        listeFormatsInstruction: Array<string>;
        /**
         * Sens du flux vis à vis d'ABS.
         *
         * Valeurs :
         *  - TRUE : Un flux entrant s'il est reçu de PARME (ou autres canaux), s'il est reçu de l'interbancaire via ESP
         *  - FALSE : Un flux sortant s'il est à destination de l'interbancaire via ESP, s'il est à destination de PARME (ou autres canaux)
         */
        directionEchangeABS: boolean;
        /**
         * Permet de définir, d'un point de vue ABS, quelle est la provenance des flux.
         *
         * Valeurs :
         *  - TRUE : Sens Client vers Banque (Reçu d'un distributeur) - ALLER
         *  - FALSE : Sens Interbancaire, via ESP vers Banque - RETOUR
         */
        sensEchangeABS: boolean;
        /**
         * Liste de statuts de l'instruction
         */
        listeStatutsInstruction: Array<string>;
        /**
         * Date de règlement prévisionnelle
         * Type date au format yyyy-MM-dd
         */
        dateReglementInstructionMin: string;
        /**
         * Date de règlement prévisionnelle
         * Type date au format yyyy-MM-dd
         */
        dateReglementInstructionMax: string;
        /**
         * Montant total de l'instruction
         */
        montantInstructionMin: number;
        /**
         * Montant total de l'instruction
         */
        montantInstructionMax: number;
        /**
         * Date de réception de l'instruction dans ABS
         * Type date au format yyyy-MM-dd
         */
        dateHeureEchangeInstructionMin: string;
        /**
         * Date de réception de l'instruction dans ABS
         * Type date au format yyyy-MM-dd
         */
        dateHeureEchangeInstructionMax: string;
        /**
         * Référence ABS de l'interchange
         */
        referenceInterchange: string;
        /**
         * Liste IBAN des donneurs d'ordre
         */
        listeIbansDonneursOrdre: Array<string>;
        /**
         * Date minimale de création de la remise
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemiseMin: string;
        /**
         * Date maximale de création de la remise
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemiseMax: string;
        /**
         * Date de règlement recalculée minimale
         * Type date au format yyyy-MM-dd
         */
        dateReglementRecalculeeMin: string;
        /**
         * Date de règlement recalculée maximale
         * Type date au format yyyy-MM-dd
         */
        dateReglementRecalculeeMax: string;
        /**
         * Un flux est ALLER
         *  - s’il est reçu de PARME (ou autres canaux) (flux entrant)
         *  - s’il est à destination de l’interbancaire via ESP  (flux sortant)
         *
         * Un flux est RETOUR
         *  - s’il est reçu de l’interbancaire via ESP (flux entrant)
         *  - s’il est à destination de PARME (ou autres canaux) (flux sortant)
         */
        cycleFlux: string;
        /**
         * Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d'offres’ paramétrable pour l'ensemble du groupe BPCE est mis en œuvre et accessible.
         *
         * Cette notion d'offre est fournie par la plateforme d'acquisition
         */
        offreClient: string;
        /**
         * Canal d'acquisition
         *
         * Par exemple = "PARME" dans le cadre de l'étape 1
         */
        canalAcquisition: string;
        /**
         * Cette propriété n'est pas liée au WS6 ABS. Elle permet d'orienter le traitement de la ressource en fonction des appelants.
         *
         * Valeurs :
         *  - '1' : Traitements Standard Echanges MySys ABS
         *  - '2' : Traitements EDI MySys
         */
        typeTraitementRechInstruction: string;
        /**
         * Détermine le scheme associé à l'instruction.
         *
         * Valeurs :
         *  - SCT
         *  - SDDB2B
         *  - SDDCORE
         */
        listeSchemasInstruction: Array<string>;
        /**
         * Référence communiquée par la plateforme émettant le flux à ABS (Référence Externe PARME).
         */
        listeRefExternesRemises: Array<string>;
        /**
         * Clé technique de l’interchange dans la base de données
         * WS3 NPS : interchangeKey ==> clePrimaireInterchange
         */
        clePrimaireInterchange: number;
        /**
         * Abonnement du contrat flux du client
         * WS3 NPS : customerSubscription ==> abonnementClient
         */
        listeAbonnementsClient: Array<string>;
        /**
         * Id du donneur d’ordre
         * WS3 NPS : initiatingPartyId ==> identifiantDonneurOrdre
         */
        identifiantDonneurOrdre: string;
        listeCriteresTri: Array<ICritereTri>;
        /**
         * WS3 NPS : bankName ==> libelleEtablissement
         */
        libelleEtablissement: string;
        /**
         * WS3 NPS : bankId ==> codeEtablissement
         */
        codeEtablissement: string;
        /**
         * WS3 NPS : bankKey ==> clePrimaireEtablisssement
         */
        clePrimaireEtablisssement: number;
        /**
         * WS3 NPS : classification ==> classificationPaiement
         */
        classificationPaiement: string;
        /**
         * WS3 NPS : settlementCurrency ==> deviseInstruction
         */
        deviseInstruction: string;
        /**
         * WS3 NPS : instructedAgentId ==> bicParticipantDirectDstinataire
         */
        bicParticipantDirectDstinataire: string;
        /**
         * WS3 NPS : instructingAgentId ==> bicParticipantDirectEmetteur
         */
        bicParticipantDirectEmetteur: string;
        /**
         * WS3 NPS : clearingParticipantName ==> nomParticipantEchange
         */
        nomParticipantEchange: string;
        /**
         * WS3 NPS : clearingParticipantKey ==> clePrimaireParticipantEchange
         */
        clePrimaireParticipantEchange: number;
        /**
         * WS3 NPS : businessParticipantName ==> nomParticipantBancaire
         */
        nomParticipantBancaire: string;
        /**
         * WS3 NPS : businessParticipantKey ==> clePrimaireParticipantBancaire
         */
        clePrimaireParticipantBancaire: number;
        /**
         * WS3 NPS : subChannel ==> sousCanalAcquisition
         */
        sousCanalAcquisition: string;
        /**
         * WS3 NPS : connexeType ==> typeConnexe
         */
        typeConnexe: string;
        /**
         * Liste des IBAN émetteurs
         */
        listeIbansEmetteurs: Array<string>;
    }
    interface IExportInstruction {
        /**
         * rechercheInstruction - referenceInstruction
         */
        referenceInstruction: string;
        /**
         * rechercheInstruction - referenceInterchange
         */
        referenceInterchange: string;
        /**
         * rechercheInstruction - formatInstruction
         */
        formatInstruction: string;
        /**
         * rechercheInstruction - dateReglementInstruction
         * Type date au format yyyy-MM-dd
         */
        dateReglementInstruction: string;
        /**
         * rechercheInstruction - montantInstruction
         */
        montantInstruction: number;
        /**
         * rechercheInstruction - statusInstruction
         */
        statutInstruction: string;
        /**
         * rechercheInstruction - ibanDonneurOrdre
         */
        ibanDonneurOrdre: string;
        /**
         * rechercheInstruction - nombreTransactions
         */
        nombreTransactions: number;
        /**
         * rechercheInstruction - dateCreationRemise
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemise: string;
        /**
         * rechercheInstruction - dateReglementRecalculee
         * Type date au format yyyy-MM-dd
         */
        dateReglementRecalculee: string;
        /**
         * rechercheInstruction - dateHeureEchangeInstruction
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateHeureEchangeInstruction: string;
        /**
         * rechercheInstruction - offreClient
         */
        offreClient: string;
        /**
         * rechercheInstruction - canalAcquisition
         */
        canalAcquisition: string;
        /**
         * rechercheInstruction - refExterneRemise
         */
        refExterneRemise: string;
        /**
         * rechercheInstruction - typeConnexe
         */
        typeConnexe: string;
        /**
         * rechercheInstruction - referenceMessage
         */
        referenceMessage: string;
        /**
         * rechercheInstruction - clePrimaireListeInstruction
         */
        clePrimaireListeInstruction: number;
        /**
         * rechercheInstruction - clePrimaireInterchange
         */
        clePrimaireInterchange: number;
        /**
         * rechercheInstruction - classificationPaiement
         */
        classificationPaiement: string;
        /**
         * rechercheInstruction - deviseInstruction
         */
        deviseInstruction: string;
        /**
         * rechercheInstruction - directionEchangeABS
         */
        directionEchangeABS: boolean;
        /**
         * rechercheInstruction - sensEchangeABS
         */
        sensEchangeABS: boolean;
        /**
         * rechercheInstruction - libelleEtablissement
         */
        libelleEtablissement: string;
        /**
         * rechercheInstruction - codeEtablissement
         */
        codeEtablissement: string;
        /**
         * rechercheInstruction - clePrimaireEtablisssement
         */
        clePrimaireEtablisssement: number;
        /**
         * rechercheInstruction - statusInstruction
         */
        statusInstruction: string;
        /**
         * rechercheInstruction - nomParticipantEchange
         */
        nomParticipantEchange: string;
        /**
         * rechercheInstruction - clePrimaireParticipantEchange
         */
        clePrimaireParticipantEchange: number;
        /**
         * rechercheInstruction - nomParticipantBancaire
         */
        nomParticipantBancaire: string;
        /**
         * rechercheInstruction - clePrimaireParticipantBancaire
         */
        clePrimaireParticipantBancaire: number;
        /**
         * rechercheInstruction - nomDonneurOrdre
         */
        nomDonneurOrdre: string;
        /**
         * rechercheInstruction - identifiantDonneurOrdre
         */
        identifiantDonneurOrdre: string;
        /**
         * rechercheInstruction - cycleFlux
         */
        cycleFlux: string;
        /**
         * rechercheInstruction - categorieProduitBancaire
         */
        categorieProduitBancaire: string;
        /**
         * rechercheInstruction - abonnementClient
         */
        abonnementClient: string;
        /**
         * rechercheInstruction - sousCanalAcquisition
         */
        sousCanalAcquisition: string;
        /**
         * rechercheInstruction - codeIdentificationScheme
         */
        codeIdentificationScheme: string;
        /**
         * rechercheInstruction - codeProprietaireIdentificScheme
         */
        codeProprietaireIdentificScheme: string;
        /**
         * rechercheInstruction - bicParticipantDirectDstinataire
         */
        bicParticipantDirectDstinataire: string;
        /**
         * rechercheInstruction - schemeInstruction
         */
        schemeInstruction: string;
        /**
         * rechercheInstruction - motifAccordBanque
         */
        motifAccordBanque: string;
        /**
         * rechercheInstruction - libelleAccordBanque
         */
        libelleAccordBanque: string;
        /**
         * rechercheInstruction - montantInitialParme
         */
        montantInitialParme: number;
        /**
         * rechercheInstruction - nbTrnInitialeParme
         */
        nbTrnInitialeParme: number;
        /**
         * rechercheInstruction - ibanEmetteur
         */
        ibanEmetteur: string;
        /**
         * Pour une instruction de virement TUTELLE, cette propriété contient le RICE initiateur TUTELLE (Gérant)
         */
        riceGerantTutelle: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.ExportTransInstruction {
    interface IParametreAppel {
        /**
         * Indique le type d'export souhaité
         *
         * Valeurs :
         * - TRANSINSTRUCTIONSDD
         * - TRANSINSTRUCTIONSCT
         */
        typeExport: string;
        /**
         * Référence de l'instruction entrante
         */
        refInstructionEntrante: string;
        /**
         * Référence de l'instruction sortante
         */
        refInstructionSortante: string;
        /**
         * Détermine le scheme associé à la transaction
         *
         * Valeurs :
         *  - SCT
         *  - SDDB2B
         *  - SDDCORE
         */
        listeSchemasTransaction: Array<string>;
        listeCriteresTri: Array<ICritereTri>;
    }
    interface ICritereTri {
        /**
         * Nom du champ sur lequel le tri doit être appliqué
         */
        nomChamp: string;
        /**
         * Sens du tri
         *
         * Valeurs :
         *  - 'asc', tri croissant (valeur par défaut)
         *  - 'desc', tri décroissant
         */
        sens: string;
    }
    interface IExportTrnInstruction {
        /**
         * rechTransInstruction - referenceTransaction
         */
        referenceTransaction: string;
        /**
         * rechTransInstruction - montantTransaction
         */
        montantTransaction: number;
        /**
         * rechTransInstruction - refInstructionEntrante
         */
        refInstructionEntrante: string;
        /**
         * rechTransInstruction - refInstructionSortante
         */
        refInstructionSortante: string;
        /**
         * rechTransInstruction - sensEchangeABS
         */
        sensEchangeABS: boolean;
        /**
         * rechTransInstruction / rechTypePaiement – typePaiementSEPA
         */
        typePaiementSEPA: string;
        /**
         * rechTransInstruction- dateReglementTransaction
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransaction: string;
        /**
         * rechTransInstruction - statusTransaction
         */
        statusTransaction: string;
        /**
         * rechTransInstruction- offreClient
         */
        offreClient: string;
        /**
         * rechTransInstruction - ibanEmetteur
         */
        ibanEmetteur: string;
        /**
         * rechTransInstruction - bicEmetteur
         */
        bicEmetteur: string;
        /**
         * rechTransInstruction - ibanDestinataire
         */
        ibanDestinataire: string;
        /**
         * rechTransInstruction - bicDestinataire
         */
        bicDestinataire: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.ExportTransaction {
    interface IParametreAppel {
        /**
         * Indique le type d'export souhaité
         *
         * Valeurs :
         *  - SCTA   : SCT ALLER
         *  - SCTR : SCT RETOUR
         *  - RECALLA : RECALL ALLER
         *  - RECALLR : RECALL RETOUR
         *  - ACVS : ACVS
         *  - INSTRUCTION
         *  - SDDA : SDD ALLER
         *  - ANNSDDA : ANNULATION SDD ALLER
         *  - REVSDDA : REVERSEMENT SDD ALLER
         * - CLAIMFONDSA : RECLAMATION DE FONDS ALLER
         * - CLAIMDATEVA : RECLAMATION VALEUR ALLER
         */
        typeExport: string;
        /**
         * Référence de la transaction
         */
        referenceTransaction: string;
        /**
         * Référence de l'instruction entrante
         */
        refInstructionEntrante: string;
        /**
         * Référence de l'instruction sortante
         */
        refInstructionSortante: string;
        /**
         * Liste des numéros de comptes débités (IBAN)
         */
        listeIbansDebiteurs: Array<string>;
        /**
         * Liste des numéros de comptes crédités (IBAN)
         */
        listeIbansCrediteurs: Array<string>;
        /**
         * Liste de statuts possibles pour la transaction
         */
        listeStatutsTransaction: Array<string>;
        /**
         * Permet de définir, d’un point de vue ABS, quelle est la provenance des flux :
         *  - TRUE : Sens Client vers Banque (Reçu d'un distributeur) - ALLER
         *  - FALSE : Sens Interbancaire, via ESP vers Banque - RETOUR
         */
        sensEchangeABS: boolean;
        /**
         * Détermine le scheme associé à la transaction
         *
         * Valeurs :
         *  - SCT
         *  - SDDB2B
         *  - SDDCORE
         */
        listeSchemasTransaction: Array<string>;
        /**
         * Date de règlement prévisionnelle minimale
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransactionMin: string;
        /**
         * Date de règlement prévisionnelle maximale
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransactionMax: string;
        /**
         * Montant total de la transaction
         */
        montantTransactionMin: number;
        /**
         * Montant total de la transaction
         */
        montantTransactionMax: number;
        /**
         * BIC du client débité
         */
        bicClientDebiteur: string;
        /**
         * BIC du client crédité
         */
        bicClientCrediteur: string;
        /**
         * La classification du paiement indique la nature du paiement utilisé
         */
        classificationPaiement: string;
        /**
         * Pour les transactions, la qualification est une sous-classification qui permet d'affiner la granularité de la recherche
         */
        typeTransactionConnexe: string;
        /**
         * Permet d'identifier si la transaction est à destination de l'interbancaire ou si elle reste interne à la plateforme ABS
         *
         * Valeurs :
         *  - TRUE, on us
         *  - FALSE, not on us
         */
        transactionInterne: boolean;
        /**
         * Canal d'acquisition
         *
         * Par exemple = « PARME » dans le cadre de l’étape 1
         */
        canalAcquisition: string;
        /**
         * Type de connexe associé
         */
        typeConnexe: string;
        /**
         * Cette propriété n'est pas liée au WS6 ABS. Elle permet d'orienter le traitement de la ressource en fonction des appelants
         * Valeurs :
         *  - SPACES aucune spécificité
         *  - '1' : Traitements Standard Echanges MySys ABS
         *  - '2' : Traitements EDI MySys
         */
        typeTraitementRechTransaction: string;
        /**
         * Motif de la transaction
         */
        codeMotifTransaction: string;
        /**
         * Transaction ID (TX-ID) de l'opération initiale émise et calculée par ABS.
         */
        identificationTransaction: string;
        /**
         * WS6 NPS : incomingInstructionReference ==> referenceMessageEntrant
         */
        listeReferencesMessagesEntrants: Array<string>;
        /**
         * Indique le type de la réponse au RECALL.
         *
         * Valeurs :
         *  - NotExpected
         *  - FOCR
         *  - ROI
         */
        typeReponseRecall: string;
        /**
         * Liste de clés de références d'instruction entrante
         *
         * WS6 NPS : incomingInstructionKey ==> cleRefInstructionEntrante
         */
        listeClesRefInstructionEntrante: Array<number>;
        /**
         * Clé primaire d'accès WS ESP
         * WS6 NPS : bankKey ==> clePrimaireEtablissement
         */
        clePrimaireEtablissement: number;
        listeCriteresTri: Array<ICritereTri>;
        /**
         * Date d'exécution calculée par le système
         * Type date au format yyyy-MM-dd
         */
        dateExecutionMin: string;
        /**
         * Date d'exécution calculée par le système
         * Type date au format yyyy-MM-dd
         */
        dateExecutionMax: string;
        /**
         * WS6 NPS : localInstrumentCode ==> codeIdentificationScheme
         */
        codeIdentificationScheme: string;
        /**
         * WS6 NPS : bankName ==> libelleEtablissement
         */
        libelleEtablissement: string;
        /**
         * WS6 NPS : bankId ==> codeEtablissement
         */
        codeEtablissement: string;
        /**
         * WS6 NPS : endToEndId ==> refClientBoutEnBout
         */
        refClientBoutEnBout: string;
        /**
         * WS6 NPS : sendingParty ==> refDonneurOrdreInterchange
         */
        refDonneurOrdreInterchange: string;
        /**
         * WS6 NPS : receivingParty ==> refRecepteurInterchange
         */
        refRecepteurInterchange: string;
        /**
         * WS6 NPS : instructionType ==> formatInstruction
         */
        formatInstruction: string;
        /**
         * WS6 NPS : settlementCurrency ==> deviseTransaction
         */
        deviseTransaction: string;
        /**
         * WS6 NPS : debitCreditIndicator ==> indicateurDebitCredit
         */
        indicateurDebitCredit: string;
        /**
         * WS6 NPS : offer ==> offreClient
         */
        offreClient: string;
        /**
         * WS6 NPS : subChannel ==> sousCanalAcquisition
         */
        sousCanalAcquisition: string;
        /**
         * Liste des IBAN émetteurs
         */
        listeIbansEmetteurs: Array<string>;
        /**
         * BIC émetteur
         */
        bicEmetteur: string;
        /**
         * Liste des IBAN destinataires
         */
        listeIbansDestinataires: Array<string>;
        /**
         * BIC destinataire
         */
        bicDestinataire: string;
    }
    interface ICritereTri {
        /**
         * Nom du champ sur lequel le tri doit être appliqué
         */
        nomChamp: string;
        /**
         * Sens du tri
         *
         * Valeurs :
         *  - 'asc', tri croissant (valeur par défaut)
         *  - 'desc', tri décroissant
         */
        sens: string;
    }
    interface IExportTransaction {
        /**
         * rechercheTransaction - referenceTransaction
         */
        referenceTransaction: string;
        /**
         * rechercheTransaction - montantTransaction
         */
        montantTransaction: number;
        /**
         * rechercheTransaction - statusTransaction
         */
        statutTransaction: string;
        /**
         * rechercheTransaction - refInstructionEntrante
         */
        refInstructionEntrante: string;
        /**
         * rechercheTransaction - refInstructionSortante
         */
        refInstructionSortante: string;
        /**
         * rechercheTransaction - sensEchangeABS
         */
        sensEchangeABS: boolean;
        /**
         * rechercheTransaction - transactionInterne
         */
        transactionInterne: boolean;
        /**
         * rechercheTransaction - codeMotifTransaction
         */
        codeMotifTransaction: string;
        /**
         * rechercheTransaction - typeConnexe
         */
        typeConnexe: string;
        /**
         * detailImputation - statutImputation
         */
        statutImputation: string;
        /**
         * rechDemandeConnexe - dateCreationDemande
         * Type date au format yyyy-MM-dd
         */
        dateCreationDemande: string;
        /**
         * rechDemandeConnexe - motifDemandeConnexe
         */
        motifDemandeConnexe: string;
        /**
         * rechDemandeConnexe - typeDonneurOrdreConnexe
         */
        typeDonneurOrdreConnexe: string;
        /**
         * rechDemandeConnexe - indicateurTarifClient
         */
        indicateurTarifClient: string;
        /**
         * rechDemandeConnexe - typeCompteImputation
         */
        typeCompteImputation: string;
        /**
         * rechDemandeConnexe - fraisAnnulVirementReponse
         */
        fraisAnnulVirementReponse: string;
        /**
         * rechDemandeConnexe - typeEnvoiCourrier
         */
        typeEnvoiCourrier: string;
        /**
         * rechDemandeConnexe - statutCourrier
         */
        statutCourrier: string;
        /**
         * rechDemandeConnexe - dateEnvoiCourrier
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiCourrier: string;
        /**
         * rechDemandeConnexe - montantFrais
         */
        montantFrais: number;
        /**
         * rechDemandeConnexe - dateReceptionConnexe
         * Type date au format yyyy-MM-dd
         */
        dateReceptionConnexe: string;
        /**
         * rechDemandeConnexe - motifConnexeRecu
         */
        motifConnexeRecu: string;
        /**
         * rechDemandeConnexe - referenceAgent
         */
        referenceAgent: number;
        /**
         * rechDemandeConnexe - justificationDemandeConnexe
         */
        justificationDemandeConnexe: string;
        /**
         * rechDemandeConnexe - dateReglementTransInitiale
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransInitiale: string;
        /**
         * rechTypePaiement – typePaiementSEPA
         */
        typePaiementSEPA: string;
        /**
         * rechercheTransaction - clePrimaireListeTransaction
         */
        clePrimaireListeTransaction: number;
        /**
         * rechercheTransaction - formatInstruction
         */
        formatInstruction: string;
        /**
         * rechercheTransaction - identificationTransaction
         */
        identificationTransaction: string;
        /**
         * rechercheTransaction - referenceMessageEntrant
         */
        referenceMessageEntrant: string;
        /**
         * rechercheTransaction - dateReglementTransaction
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransaction: string;
        /**
         * rechercheTransaction - classificationPaiement
         */
        classificationPaiement: string;
        /**
         * rechercheTransaction - typeTransactionConnexe
         */
        typeTransactionConnexe: string;
        /**
         * rechercheTransaction - bicClientDebiteur
         */
        bicClientDebiteur: string;
        /**
         * rechercheTransaction - bicClientCrediteur
         */
        bicClientCrediteur: string;
        /**
         * rechercheTransaction - deviseTransaction
         */
        deviseTransaction: string;
        /**
         * rechercheTransaction - statusTransaction
         */
        statusTransaction: string;
        /**
         * rechercheTransaction - libelleEtablissement
         */
        libelleEtablissement: string;
        /**
         * rechercheTransaction - codeEtablissement
         */
        codeEtablissement: string;
        /**
         * rechercheTransaction - clePrimaireEtablissement
         */
        clePrimaireEtablissement: number;
        /**
         * rechercheTransaction - cleRefInstructionEntrante
         */
        cleRefInstructionEntrante: number;
        /**
         * rechercheTransaction - cleRefInstructionSortante
         */
        cleRefInstructionSortante: number;
        /**
         * rechercheTransaction - refClientBoutEnBout
         */
        refClientBoutEnBout: string;
        /**
         * rechercheTransaction - ibanDebiteur
         */
        ibanDebiteur: string;
        /**
         * rechercheTransaction - ibanCrediteur
         */
        ibanCrediteur: string;
        /**
         * rechercheTransaction - schemaTransaction
         */
        schemaTransaction: string;
        /**
         * rechercheTransaction - offreClient
         */
        offreClient: string;
        /**
         * rechercheTransaction - categorieProduitBancaire
         */
        categorieProduitBancaire: string;
        /**
         * rechercheTransaction - abonnementClient
         */
        abonnementClient: string;
        /**
         * rechercheTransaction - canalAcquisition
         */
        canalAcquisition: string;
        /**
         * rechercheTransaction - sousCanalAcquisition
         */
        sousCanalAcquisition: string;
        /**
         * rechercheTransaction - codeIdentificationScheme
         */
        codeIdentificationScheme: string;
        /**
         * rechercheTransaction - codeProprietaireIdentificScheme
         */
        codeProprietaireIdentificScheme: string;
        /**
         * rechercheTransaction - referenceMandatSDD
         */
        referenceMandatSDD: string;
        /**
         * rechercheTransaction - nomDebiteur
         */
        nomDebiteur: string;
        /**
         * rechercheTransaction - refDonneurOrdreInterchange
         */
        refDonneurOrdreInterchange: string;
        /**
         * rechercheTransaction - refRecepteurInterchange
         */
        refRecepteurInterchange: string;
        /**
         * rechercheTransaction - indicateurDebitCredit
         */
        indicateurDebitCredit: string;
        /**
         * rechercheTransaction - dateExecution
         * Type date au format yyyy-MM-dd
         */
        dateExecution: string;
        /**
         * rechercheTransaction - typeReponseRecall
         */
        typeReponseRecall: string;
        /**
         * rechercheTransaction - nomDonneurOrdreConnexe
         */
        nomDonneurOrdreConnexe: string;
        /**
         * rechercheTransaction - bicDonneurOrdreConnexe
         */
        bicDonneurOrdreConnexe: string;
        /**
         * rechercheTransaction - nomCrediteur
         */
        nomCrediteur: string;
        /**
         * rechercheTransaction - libelleTransaction
         */
        libelleTransaction: string;
        /**
         * rechercheTransaction - identifiantCreancierSepa
         */
        identifiantCreancierSepa: string;
        /**
         * rechercheTransaction - libelleTransCrediteur
         */
        libelleTransCrediteur: string;
        /**
         * rechercheTransaction - ibanEmetteur
         */
        ibanEmetteur: string;
        /**
         * rechercheTransaction - bicEmetteur
         */
        bicEmetteur: string;
        /**
         * rechercheTransaction - nomEmetteur
         */
        nomEmetteur: string;
        /**
         * rechercheTransaction - ibanDestinataire
         */
        ibanDestinataire: string;
        /**
         * rechercheTransaction - bicDestinataire
         */
        bicDestinataire: string;
        /**
         * rechercheTransaction - nomDestinataire
         */
        nomDestinataire: string;
        /**
         * rechercheTransaction - origineRappel
         */
        origineRappel: string;
        /**
         * 'Date de valeur demandée dans une réclamation pour correction de date (camt.087.001.05).
         *
         * rechDemandeConnexe
         * Table HH06 : Rubrique DVHYRE
         * Type date au format yyyy-MM-dd
         */
        dateValeurCorrigee: string;
        /**
         * "IBAN de la banque confère sur lequel des frais sont demandés suite au traitement positif d'une réclamation (ces frais sont règlés par Virement SWIFT)
         *
         * rechDemandeConnexe
         * Table HH06 : Rubrique IDLIID"
         */
        ibanFraisReclamation: string;
        /**
         * "IBAN de la banque confère sur lequel des intérêts compensatoires sont demandés suite au traitement positif d'une réclamation pour correction date de valeur (ces intérêts sont règlés par Virement SWIFT)
         *
         * rechDemandeConnexe
         * Table HH06 : Rubrique IDLIIC"
         */
        ibanInteretsCompensatoires: string;
        /**
         * "Montant des intérêts compensatoires demandés par la banque confère suite au traitement positif d'une réclamation pour correction date de valeur (ces intérêts sont règlés par Virement SWIFT)
         *
         * rechDemandeConnexe
         * Table HH06 : Rubrique MTH4CR"
         */
        montantInteretsCompensatoires: number;
        /**
         * "Permet d'indiquer sur une transaction connexe, soit de RECALL ou de RECLAMATION, si une demande de Sort est en cours (demande Automatique via ABS ou manuelle via saisie IHM)
         *
         * rechDemandeConnexe
         * Table HH06 : Rubrique CIH4DS"
         */
        indicateurDemandeSort: string;
        /**
         * "Permet d'indiquer sur une transaction connexe, soit de RECALL ou de RECLAMATION, la date de création de la dernière demande de Sort en cours (demande Automatique via ABS ou manuelle via saisie IHM)
         *
         * rechDemandeConnexe
         * Table HH06 : Rubrique DAH4DS"
         * Type date au format yyyy-MM-dd
         */
        dateCreationDemandeSort: string;
        /**
         * "Zones additionnelles associées à une réponse négative reçue, sur RECALL émis. Données facultatives, alimentées uniquement pour les réponses négatives de motif ""Décision Légale""
         *
         * Table HH06 : Rubrique LBH4AO"
         */
        infoReponseNegativeMotifLegal: string;
        /**
         * "Zones additionnelles associées à une réponse négative reçue, sur RECALL émis. Données facultatives, alimentées uniquement pour les réponses négatives associées à un RECALL de motif FRAUDE
         *
         * Table HH06 : Rubrique LBH4AP"
         */
        infoReponseNegativeRecallFraude: string;
        /**
         * "Partenaire d'échange avec lequel le message est échangé en sortie d'ABS Valeurs : ESP / ONUS / BIP"
         *
         * outgoingClearingParticipantName ==> nomParticipantSortant
         */
        nomParticipantSortant: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.ParametrageSepa {
    interface IParametreAppel {
        /**
         * "Code nature de paiement pour spécifier l'habilitation
         * de saisie en fonction de l'opération.
         *
         * Table H71L : CNHMPA"
         */
        naturePaiement: string;
        /**
         * "Code nature du canal pour spécifier l'habilitation
         * de saisie en fonction de l'opération.
         *
         * Table H71L : CNHMCA"
         */
        natureCanal: string;
        /**
         * "Etablissement
         *
         * Table H71L : COHCBQ"
         */
        codeEtablissement: string;
        /**
         * "Détermine le sens de transmission d'une opération
         * entre deux systèmes
         *
         * Table H71L : COHXSO"
         */
        sensOperation: string;
        /**
         * "Code définissant le type de paramétrage
         * Ce code est utilisé dans la table de paramétrage H71L.
         *
         * Table H71L : COHDFR"
         */
        typeParametrage: string;
        /**
         * "Détermine une classe de produits ou services
         * de dépots / épargne.
         * Compose la référence de certains contrats de
         * produit/service (notamment Dépots Epargne) :
         *
         * Table H71L : COGXPR"
         */
        codeProduit: string;
        /**
         * "Détermine la nature d'un mouvement interbancaire
         * selon la norme d'échange du SIT
         * Tous les mouvements au format SIT sont décrits
         * dans le Manuel Interbancaire des Normes d'Opérations
         * SIT.
         *
         * Table H71L : COHDOS"
         */
        codeOperation: string;
    }
    interface IParametrageSEPA {
        parametreAppel: IParametreAppel;
        detailsParametre: IDetailsParametre;
    }
    interface IDetailsParametre {
        /**
         * "Code définissant le type de paramétrage
         * Ce code est utilisé dans la table de paramétrage H71L.
         *
         * Table H71L : CTHDPR"
         */
        typeParametrage: string;
        /**
         * "Détermine une classe de produits ou services
         * de dépots / épargne.
         * Compose la référence de certains contrats de
         * produit/service (notamment Dépots Epargne) :
         *
         * Table H71L : COGXPR"
         */
        codeProduit: string;
        /**
         * "Détermine la nature d'un mouvement interbancaire
         * selon la norme d'échange du SIT
         * Tous les mouvements au format SIT sont décrits
         * dans le Manuel Interbancaire des Normes d'Opérations
         * SIT.
         *
         * Table H71L : COHDOS"
         */
        codeOperation: string;
        /**
         * Description du code paramétrage
         *
         * Table H71L : LDHDPA
         */
        lilbelleParametrage: string;
        /**
         * Valeur du premier paramètre défini
         *
         * Table H71L : QVHDP1
         */
        valeurParametre1: number;
        /**
         * Valeur du troisième paramètre défini
         *
         * Table H71L : QVHDP3
         */
        valeurParametre3: number;
        /**
         * Code indiquant l'unité de mesure d'un paramétre
         *
         * Table H71L : CUEIVA
         */
        uniteMesureValeur: string;
        /**
         * Information complémentaire sur le paramètre
         *
         * Table H71L : LIHDCO
         */
        libelleComplementaire: string;
        /**
         * Valeur du deuxième paramètre défini
         *
         * Table H71L : QVHDP2
         */
        valeurParametre2: number;
        /**
         * WCORE3
         */
        codeRetourEchange: number;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechDemandeConnexe {
    interface IParametreAppel {
        /**
         * "Code établissement de la demande de connexe
         *
         * Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
        /**
         * "Référence de la transaction connexe
         *
         * Table HH06: Rubrique IRH4O1"
         */
        referenceTransactionConnexe: string;
        /**
         * "Référence de la transaction connexe initiale, lors de recherche de données sur RECALL reçu (OnUs)
         *
         * Table HH06: Rubrique IRH4O2"
         */
        referenceTransactionConnexeInit: string;
        /**
         * "Indicateur permettant de déterminer si une
         * transaction connexe est rattachée soit :
         * - A une autre connexe (RECALL ou ACVS)
         *    - Réponse positive ou négative suite à RECALL
         *    - Retour ou remboursement ACVS suite à ACVS
         * - A une transaction initiale
         *    - RECALL/ACVS/ Retour sur virement
         *    - Annulation, reversement sur prélèvement
         *    - Rejet, retour, remboursement sur prélèvement
         *
         * 'O'        Connexe liée à une transaction connexe
         * 'N'        Connexe liée à une transaction initiale "
         */
        lienTransactionConnexe: string;
    }
    interface IDetailsConnexe {
        /**
         * "Code établissement de la demande de connexe
         *
         * Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
        /**
         * "Référence de la transaction connexe
         *
         * Table HH06: Rubrique IRH4O1"
         */
        referenceTransactionConnexe: string;
        /**
         * """Référence de l'instruction de la transaction d'origine associée à la connexe
         *
         * Table HH06 : Rubrique IRH4IO"
         */
        referenceInstructionOrigine: string;
        /**
         * "Référence de l'instruction contenant les demandes de connexes en masse
         *
         * Table HH06 : Rubrique IRH4I1"
         */
        referenceInstrucConnexeMasse: string;
        /**
         * "Date de création de la demande de connexe
         *
         * Table HH06 : Rubrique DDDECR"
         * Type date au format yyyy-MM-dd
         */
        dateCreationDemande: string;
        /**
         * "Heure de création de la demande de connexe
         *
         * Table HH06 : Rubrique HDEHER"
         */
        heureCreationDemande: number;
        /**
         * "Code déterminant un type d'opération SEPA.
         * Les flux émis/reçus SEPA sont identifiés par un Scheme
         * (règles métiers applicables au traitement des ordres
         * de paiement). Ce code est transmis dans les flux de
         * paiement échangés.
         * ''SCT    '  Virement
         * 'SDDCORE'  Prélèvement CORE
         * 'SDDB2B '  Prélèvement B2B
         *
         * Table HH06 : Rubrique CTH4SC"
         */
        schemeOperation: string;
        /**
         * 'Permet d'identifier le type de transaction de la connexe demandée
         *
         * 'pacs.004' => Réponse positive SCT / RETOUR SCT / RETOUR ACVS / REMBOURSEMENT ACVS
         * 'pacs.007' => Reversement SDD  - ACVS
         * 'camt.056' => Annulation SDD
         * 'camt.056' => Rappel SCT
         * 'camt.029' => Réponse négative SCT
         * 'camt.027.001.06' => RECLAMATION FONDS
         * 'camt.087.001.05' => RECLAMATION DATE VALEUR
         * 'pacs.028.001.01' => DEMANDE DE SORT
         *
         * Table HH06 : Rubrique COHYTM
         */
        typeTransactionDemande: string;
        /**
         * "Type de demande connexe qui permet de déterminer pour un pacs.004 batterie Virement, si il s'agit d'un Retour de virement ou d'une réponse positive
         * 'DRJ'      Toutes connexes (hors RECALL et hors réponses
         *            associées)
         * 'REC'      Connexes de type RECALL ou réponses associées
         *
         * Table HH06 : Rubrique CTHDTD"
         */
        typeDemandeConnexe: string;
        /**
         * "Motif SEPA de la demande de connexe
         *
         * Table HH06 : Rubrique CMHYCX"
         */
        motifDemandeConnexe: string;
        /**
         * "Précise le circuit d'échange de la demande
         * ='O' ON US
         * ='N' Not ON US
         *
         * Table HH06 : Rubrique CIH4CE"
         */
        circuitEchange: string;
        /**
         * "Origine de la création de la demande
         * '='O'  Unitaire
         * ='N'   Masse
         *
         * Table HH06 : Rubrique CIH4OD"
         */
        origineCreationDemande: string;
        /**
         * "Canal à partir duquel les demandes de connexes sont créées
         * 'B'        Batch
         * 'T'        TP
         *
         * Table HH06 : Rubrique COSFBT"
         */
        canalDemande: string;
        /**
         * "Donneur d'ordre de la demande
         * Soit le CLIENT bénéficiaire du virement, soit la BANQUE (Etablissement du client bénéficiaire)
         * 'B'        Banque (BIC)
         * 'C'        Client (Nom)
         *
         * Table HH06 : Rubrique CTHDDD"
         */
        typeDonneurOrdreConnexe: string;
        /**
         * 'Permet d'indiquer si la demande de connexe, ou ses connexes associées (réponses positives) vont faire l'objet d'une tarification client
         *
         * Table HH06 : Rubrique CIHCTA
         */
        indicateurTarifClient: string;
        /**
         * "Permet d'indiquer, le compte à imputer
         * =SPACES ==> Compte CLIENT
         * ='TEC' ==> Compte Technique
         *
         * Table HH06 : Rubrique CTHYNC"
         */
        typeCompteImputation: string;
        /**
         * "Numéro de compte à imputer
         *
         * Table HH06 : Rubrique CODIRF"
         */
        numeroCompte: string;
        /**
         * "Guichet du RICE à imputer
         *
         * Table HH06 : Rubrique COHCGU"
         */
        guichetImputation: string;
        /**
         * "Permet d'indiquer si les éventuels frais lors de la réception d'une réponse positive suite à un RECALL émis, sont supportés par le client ou la banque
         *
         * Table HH06 : Rubrique COHDFR"
         */
        fraisAnnulVirementReponse: string;
        /**
         * "Lors de la réception d'une réponse sur recall, permet de savoir si un courrier est à envoyer automatiquement au client ou non
         * 'O'        Envoi du Courrier automatique à réception réponse
         * 'N'        Envoi du Courrier géré manuellement
         * Table HH06 : Rubrique CIHDGC"
         */
        typeEnvoiCourrier: string;
        /**
         * "Indique le statut d'une demande de courrier manuel effectuée par l'IHM
         * mise à jour IHM et BATCH
         *
         * Table HH06 : Rubrique CEHYGC"
         */
        statutCourrier: string;
        /**
         * "Date de la demande manuelle de courrier
         *
         * Table HH06 : Rubrique DAH4CR"
         * Type date au format yyyy-MM-dd
         */
        dateDemandeCourrierManuel: string;
        /**
         * "Date d'envoi du courrier (dernier envoyé)
         * mise à jour en batch
         *
         * Table HH06 : Rubrique DAGEEC"
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiCourrier: string;
        /**
         * "Date de règlement de la transaction connexe
         *
         * Table HH06 : Rubrique DAHYRG"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransConnexe: string;
        /**
         * "Montant de la transaction connexe
         *
         * Table HH06 : Rubrique MTHYOP"
         */
        montantTransactionConnexe: number;
        /**
         * "Montant des frais liés à une transaction connexe
         *
         * Table HH06 : Rubrique MTHYFR"
         */
        montantFrais: number;
        /**
         * 'Permet de définir le type de connexe reçue :
         * - suite à un rappel de virement émis (RECALL)
         *   (Réponse positive ou négative)
         * - suite à une annulation de virement émis (ACVS)
         *   (Retour ou Remboursement)
         * - suite à une réclamation de virement émis
         *   (Non réception de fonds ou correction date valeur)
         *
         * ' '        Aucune connexe reçue
         * 'N'        Réponse Négative reçue sur RECALL émis
         * 'P'        Réponse Positive reçue sur RECALL émis
         * 'T'        Retour ACVS sur ACVS émis
         * 'B'        Remboursement ACVS sur ACVS émis
         * 'A'        Réponse positive réclamation fonds
         * 'C'        Réponse négative réclamation fonds
         * 'D'        Réponse positive réclamation date valeur
         * 'E'        Réponse négative réclamation date valeur
         *
         * Table HH06 : Rubrique CRH4RC
         */
        typeConnexeRecu: string;
        /**
         * 'Date de réception d'une réponse suite à recall émis ou réclamation émise, ou retour/remboursement suite à ACVS émis, mise à jour en batch
         *
         * Table HH06 : Rubrique DRH4RP
         * Type date au format yyyy-MM-dd
         */
        dateReceptionConnexe: string;
        /**
         * 'Motif d'une réponse négative reçue suite à recall émis, ou retour/remboursement suite à ACVS émis, mise à jour en batch
         * 'Réponse négative :
         * 'CUST'     Décision du client
         * 'LEGL'     Légal
         * 'ARDT'     Opération de retour déjà traitée
         * 'AC04'     Compte soldé viré clôturé
         * 'AM04'     Provisions insuffisantes
         * 'NOAS'     Pas de réponse du client
         * 'NOOR'     Pas d'opération initiale reçue
         * Retour ACVS :
         * 'AC01'     Coord bancaires inexploitables
         * 'AC04'     Compte soldé viré clôturé
         * 'AC06'     Compte bloqué
         * 'AM04'     Provisions insuffisantes
         * 'AM05'     Doublon
         * 'MD07'     Titulaire décédé
         * 'RC07'     BIC destinataire incorrect
         * 'RR04'     Raison reglementaire
         * 'NOAS'     Pas de réponse du client
         * 'NOOR'     Pas d'opération initiale reçue
         * Remboursement ACVS :
         * 'ARDT'     Opération déjà retournée / rejetée
         * 'MD06'     Contestation opération autorisée
         * 'NOOR'     Pas d'opération initiale reçue
         *            Réponses sur RECLAMATION FONDS :
         *            -----------------------------------
         * 'RPNR'     SCT Incorrect
         * 'ARJT'     SCT déjà rejeté
         * 'ARDT'     SCT déjà retourné
         * 'RR04'     Raison règlementaire
         * 'NOOR'     Pas d'opération initiale reçue
         * 'ACNR'     Réponse positive
         *            Réponses sur Réclamations DDV :
         *            -----------------------------------
         * 'CVAA'     Correction déjà appliquée
         * 'RJVA'     Correction de date refusée
         * 'MODI'     Correction de date acceptée
         * 'ACVA'     En attente compensation
         *
         * Table HH06 : Rubrique CMHYC5
         */
        motifConnexeRecu: string;
        /**
         * "Date de règlement d'une connexe ACVS suite à ACVS émis, mise à jour en batch
         *
         * Table HH06 : Rubrique DAHYRK"
         * Type date au format yyyy-MM-dd
         */
        dateReglementConnexeRecu: string;
        /**
         * "Référence ABS du RECALL ou ACVS, suite à la création d'une réponse positive/négative ou retour/remboursement
         *
         * Table HH06 : Rubrique IRH4O2"
         */
        referenceTransactionConnexInit: string;
        /**
         * "Référence de la transaction initiale ABS à l'origine de la demande de connexe
         *
         * Table HH06 : Rubrique IRH4TA"
         */
        referenceTransactionInitiale: string;
        /**
         * "ID Transaction de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4ID"
         */
        identifiantTransactionInitiale: string;
        /**
         * "Date de règlement de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYDD"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransInitiale: string;
        /**
         * "Montant de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOO"
         */
        montantTransInitiale: number;
        /**
         * "BIC du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB2"
         */
        bicDonneurOrdre: string;
        /**
         * "IBAN du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII1"
         */
        ibanDonneurOrdre: string;
        /**
         * "BIC du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB1"
         */
        bicDestinataire: string;
        /**
         * "IBAN du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII2"
         */
        ibanDestinataire: string;
        /**
         * "Type Elément de structure de l'agent qui a saisie la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique CTCEEL"
         */
        typeElementStructure: string;
        /**
         * "Identifiant Elément de structure de l'agent qui a saisie la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique NOCEEL"
         */
        identElementStructure: number;
        /**
         * "Référence de l'agent qui a saisie la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique NOCEAG"
         */
        referenceAgent: number;
        /**
         * 'Libellé contenant les d'informations (Bloc Note) sur la création de la demande de connexe
         * Pour les réclamations, cette donnée contient les "Informations Complémentaires" qui sont transmises à la banque confrère.
         *
         * Alimentation Table HH06 : Rubrique LMH4BN
         */
        justificationDemandeConnexe: string;
        /**
         * 'Précise le type de transaction à laquelle se rattache une demande de Sort
         * RecalInquiry : Demande de Sort sur RECALL
         * ClaimNonReceiptInquiry :  Demande de Sort sur Réclamation fonds
         * ClaimValueDateCorrectionInquiry : Demande de Sort sur Réclamation date de valeur
         *
         * Table HH06 : Rubrique CTH4QL
         */
        typeRattachementDemandeSort: string;
        /**
         * 'Date de valeur demandée dans une réclamation pour correction de date (camt.087.001.05).
         *
         * Table HH06 : Rubrique DVHYRE
         * Type date au format yyyy-MM-dd
         */
        dateValeurCorrigee: string;
        /**
         * 'IBAN de la banque confère sur lequel des frais sont demandés suite au traitement positif d'une réclamation (ces frais sont règlés par Virement SWIFT)
         *
         * Table HH06 : Rubrique IDLIID
         */
        ibanFraisReclamation: string;
        /**
         * 'IBAN de la banque confère sur lequel des intérêts compensatoires sont demandés suite au traitement positif d'une réclamation pour correction date de valeur (ces intérêts sont règlés par Virement SWIFT)
         *
         * Table HH06 : Rubrique IDLIIC
         */
        ibanInteretsCompensatoires: string;
        /**
         * 'Montant des intérêts compensatoires demandés par la banque confère suite au traitement positif d'une réclamation pour correction date de valeur (ces intérêts sont règlés par Virement SWIFT)
         *
         * Table HH06 : Rubrique MTH4CR
         */
        montantInteretsCompensatoires: number;
        /**
         * 'Permet d'indiquer sur une transaction connexe, soit de RECALL ou de RECLAMATION, si une demande de Sort est en cours (demande Automatique via ABS ou manuelle via saisie IHM)
         *
         * Table HH06 : Rubrique CIH4DS
         */
        indicateurDemandeSort: string;
        /**
         * 'Permet d'indiquer sur une transaction connexe, soit de RECALL ou de RECLAMATION, la date de création de la dernière demande de Sort en cours (demande Automatique via ABS ou manuelle via saisie IHM)
         *
         * Table HH06 : Rubrique DAH4DS
         * Type date au format yyyy-MM-dd
         */
        dateCreationDemandeSort: string;
        /**
         * "Zones additionnelles associées à une réponse négative reçue, sur RECALL émis.
         * Données facultatives, alimentées uniquement pour les réponses négatives de motif ""Décision Légale""
         *
         * Table HH06 : Rubrique LBH4AO"
         */
        infoReponseNegativeMotifLegal: string;
        /**
         * "Zones additionnelles associées à une réponse négative reçue, sur RECALL émis.
         * Données facultatives, alimentées uniquement pour les réponses négatives associées à un RECALL de motif FRAUDE
         *
         * Table HH06 : Rubrique LBH4AP"
         */
        infoReponseNegativeRecallFraude: string;
    }
    interface IRechDemandeConnexe {
        detailsConnexe: IDetailsConnexe;
        parametreAppel: IParametreAppel;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechercheHistoriqueTransaction {
    interface IParametreAppel {
        /**
         * "Clé primaire de l'entité INTERCHANGE (paymentInterchangeKey)
         * Clé primaire de l'entité INSTRUCTION  (paymentInstructionKey)
         * Clé primaire de de l'entité TRANSACTION(paymentTransactionKey) pour recherche de l'historique"
         *
         *
         *
         * WS9 NPS : id ==> refHistoriqueEntiteCle /
         */
        refHistoriqueEntiteCle: number;
        /**
         * Elle permet d'orienter le traitement de la ressource en fonction des IHM appelants.
         * Elle est obligatoire pour appeler le WS
         * Valeurs :
         * '1' : Traitement Echanges MySys ABS
         * '2' : Traitement EDI
         */
        typeTraitementRechHistorique: string;
        /**
         * Le type d'appel permet d'orienter l'appel technique et de formater le chemin d'accès vers ABS
         * Valeurs
         * '1' - Historique niveau Interchange
         * '2' - Historique niveau Instruction
         * '3' - Historique niveau Transaction
         */
        typeAppelABS: string;
    }
    interface IListeHistorique {
        /**
         * Numéro de séquence incrémenté à chaque évènement
         *
         * WS9 NPS : sequenceNumber ==> numSequenceHistorique /
         */
        numSequenceHistorique: number;
        /**
         * Référence associée à l'entité dont l'historique est listé
         *
         * WS9 NPS : displayEntityId ==> referenceEntiteHistorique /
         */
        referenceEntiteHistorique: string;
        /**
         * Référence clé table primaire associée à l'entité dont l'historique est listé
         *
         * WS9 NPS : paymentEntityKey ==> referenceEntiteClePrimaire /
         */
        referenceEntiteClePrimaire: number;
        /**
         * Identifiant de l'historique de paiement
         *
         * WS9 NPS : eventNumber ==> referenceHistorique /
         */
        referenceHistorique: number;
        /**
         * Service d'origine de l'évènement historique
         *
         *
         * WS9 NPS : eventType ==> typeHistorique /
         */
        typeHistorique: string;
        /**
         * Date de création de l'historique
         *
         *
         * WS9 NPS : eventTimestamp ==> dateCreationEvenementHistorique /
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCreationHistorique: string;
        /**
         * Description de l'historique, uniquement en Anglais
         *
         *
         * WS9 NPS : messageText ==> descriptionHistorique /
         */
        descriptionHistorique: string;
        /**
         * "Type d'entité liée à l'historique :
         * - INTERCHANGE
         * - INSTRUCTION
         * - TRANSACTION"
         *
         * WS9 NPS : entity ==> entiteHistorique /
         */
        entiteHistorique: string;
        /**
         * Permet d'identifier l'adresse mèl de l'utilisateur qui est à l'origine de l'évènement
         *
         * WS9 NPS : emailAddress ==> melUtilisateurHistorique /
         */
        melUtilisateurHistorique: string;
    }
    interface IRechercheHistorique {
        parametreAppel: IParametreAppel;
        listeHistorique: Array<IListeHistorique>;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechLienTransaction {
    interface IParametreAppel {
        /**
         * WS8 NPS : id ==> clePrimaireTransaction /
         */
        clePrimaireTransaction: number;
    }
    interface IRechLienTransaction {
        parametreAppel: IParametreAppel;
        transactionLiee: Array<ITransactionLiee>;
    }
    interface ITransactionLiee {
        /**
         * Référence de la Transaction, attribuée par ABS
         *
         * WS8 NPS : displayTransactionId ==> referenceTransaction /
         */
        referenceTransaction: string;
        /**
         * WS8 NPS : entityKey ==> clePrimaireListeTransactionLiee /
         */
        clePrimaireListeTransactionLiee: number;
        /**
         * La classification du paiement indique la nature du paiement utilisé
         *
         * WS8 NPS : classification ==> classificationPaiement /
         */
        classificationPaiement: string;
        /**
         * Référence de la remise client (PmtInfId)
         *
         * WS8 NPS : instructingAgentTransactionId ==> refRemiseClient /
         */
        refRemiseClient: string;
        /**
         * WS8 NPS : settlementDay ==> dateRecalculeTransLiee /
         * Type date au format yyyy-MM-dd
         */
        dateRecalculeTransLiee: string;
        /**
         * BIC du client crédité
         *
         * WS8 NPS : creditPartyAgentId ==> bicClientCrediteur /
         */
        bicClientCrediteur: string;
        /**
         * WS8 NPS : debitPartyAgentId ==> bicClientDebiteur /
         */
        bicClientDebiteur: string;
        /**
         * WS8 NPS : settlementAmount ==> montantTransactionLiee /
         */
        montantTransactionLiee: number;
        /**
         * WS8 NPS : status ==> statusTransaction /
         */
        statusTransaction: string;
        /**
         * Libellé de l'établissement MYSYS
         *
         * WS8 NPS : bankName ==> libelleEtablissement /
         */
        libelleEtablissement: string;
        /**
         * "Code Etablissement MYSYS
         * Ex : 13335 CE APC / 13135 CE MP"
         *
         * WS8 NPS : bankId ==> codeEtablissement /
         */
        codeEtablissement: string;
        /**
         * Clé primaire d'accès WS ESP
         *
         * WS8 NPS : bankKey ==> clePrimaireEtablisssement /
         */
        clePrimaireEtablisssement: number;
        /**
         * WS8 NPS : incomingDisplayInstructionId ==> referenceInstructionEntrante /
         */
        referenceInstructionEntrante: string;
        /**
         * WS8 NPS : outgoingDisplayInstructionId ==> referenceInstructionSortante /
         */
        referenceInstructionSortante: string;
        /**
         * WS8 NPS : originalTransactionKey ==> clePrimaireTransactionInitiale /
         */
        clePrimaireTransactionInitiale: number;
        /**
         * WS8 NPS : reconcilingTransactionKey ==> clePrimaireTransactionLiee /
         */
        clePrimaireTransactionLiee: number;
        /**
         * WS8 NPS : originalInstructionKey ==> clePrimaireInstructionInitiale /
         */
        clePrimaireInstructionInitiale: number;
        /**
         * WS8 NPS : reconcilingInstructionKey ==> clePrimaireInstructionLiee /
         */
        clePrimaireInstructionLiee: number;
        /**
         * Détermine le scheme associé à la transaction
         * Valeurs :
         *  - SCT
         *  - SDDB2B
         *  - SDDCORE
         *
         * WS8 NPS : processingScheme ==> schemaTransaction
         */
        schemaTransaction: string;
        /**
         * Pour les Rtransactions, la qualification est une « sous-classification » qui permet d’affiner la granularité de la recherche
         *
         * WS8 NPS : rTransactionQualification ==> sousTypeTransactionConnexe
         */
        sousTypeTransactionConnexe: string;
        /**
         * Nom du client qui a initié une connexe, pour une RECALL de type CLIENT
         *
         * WS8 NPS : statusOriginatorName ==> nomDonneurOrdreConnexe
         */
        nomDonneurOrdreConnexe: string;
        /**
         * BIC du client qui a initié une connexe, pour une RECALL de type BANQUE
         *
         * WS8 NPS : statusOriginatorId ==> bicDonneurOrdreConnexe
         */
        bicDonneurOrdreConnexe: string;
        /**
         * WS8 NPS : statusReasonCode / statusReasonProprietaryCode ==> codeMotifTransaction
         */
        codeMotifTransaction: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechTransInstruction {
    interface IParametreAppel {
        /**
         * rechercheTransaction - referenceTransaction
         */
        referenceTransaction: string;
        /**
         * rechercheTransaction - refInstructionEntrante
         */
        refInstructionEntrante: string;
        /**
         * rechercheTransaction - refInstructionSortante
         */
        refInstructionSortante: string;
        /**
         * rechercheTransaction - ibanDebiteur
         */
        listeIbansDebiteurs: Array<string>;
        /**
         * rechercheTransaction - ibanCrediteur
         */
        listeIbansCrediteurs: Array<string>;
        /**
         * rechercheTransaction - statusTransaction
         */
        listeStatutsTransaction: Array<string>;
        /**
         * rechercheTransaction - sensEchangeABS
         *
         * Valeurs :
         *  - true, ALLER, sens Client vers Banque (reçu d'un distributeur)
         *  - false, RETOUR, sens interbancaire, via ESP vers Banque
         */
        sensEchangeABS: boolean;
        /**
         * rechercheTransaction - schemaTransaction
         *
         * Valeurs :
         *  - SCT
         *  - SDDB2B
         *  - SDDCORE
         */
        listeSchemasTransaction: Array<string>;
        /**
         * rechercheTransaction - dateReglementTransactionMin
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransactionMin: string;
        /**
         * rechercheTransaction - dateReglementTransactionMax
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransactionMax: string;
        /**
         * rechercheTransaction - montantTransactionMin
         */
        montantTransactionMin: number;
        /**
         * rechercheTransaction - montantTransactionMax
         */
        montantTransactionMax: number;
        /**
         * rechercheTransaction - bicClientDebiteur
         */
        bicClientDebiteur: string;
        /**
         * rechercheTransaction - bicClientCrediteur
         */
        bicClientCrediteur: string;
        /**
         * rechercheTransaction - classificationPaiement
         *
         * Valeurs :
         *  - Cancellation
         *  - Credit Transfer
         *  - Direct Debit
         *  - Refund
         *  - Rejection
         *  - Resolution
         *  - Return
         *  - Reversal
         */
        classificationPaiement: string;
        /**
         * rechercheTransaction - typeTransactionConnexe
         *
         * Valeurs :
         *  - Cancellation
         *  - Refund
         *  - Refusal
         *  - Rejection
         *  - Resolution
         *  - Return
         *  - Reversal
         */
        typeTransactionConnexe: string;
        /**
         * rechercheTransaction - transactionInterne
         *
         * Valeurs :
         *  - true, "on us"
         *  - false, "not on us"
         */
        transactionInterne: boolean;
        /**
         * rechercheTransaction - canalAcquisition
         */
        canalAcquisition: string;
        /**
         * rechercheTransaction - typeConnexe
         */
        typeConnexe: string;
        /**
         * rechercheTransaction - typeTraitementRechTransaction
         *
         * Valeurs :
         *  - SPACES aucune spécificité
         *  - '1' : Traitements Standard Echanges MySys ABS
         *  - '2' : Traitements EDI MySys
         */
        typeTraitementRechTransaction: string;
        /**
         * rechercheTransaction - codeMotifTransaction
         */
        codeMotifTransaction: string;
        /**
         * rechercheTransaction - identificationTransaction
         */
        identificationTransaction: string;
        /**
         * rechercheTransaction - referenceMessageEntrant
         */
        listeReferencesMessagesEntrants: Array<string>;
        /**
         * rechercheTransaction - typeReponseRecall
         *
         * Valeurs :
         *  - NotExpected
         *  - FOCR
         *  - ROI
         */
        typeReponseRecall: string;
        /**
         * Liste de clés de références d'instruction entrante
         */
        listeClesRefInstructionEntrante: Array<number>;
        /**
         * Clé primaire d'accès WS ESP
         */
        clePrimaireEtablissement: number;
        listeCriteresTri: Array<ICritereTri>;
        /**
         * Date d'exécution calculée par le système
         * Type date au format yyyy-MM-dd
         */
        dateExecutionMin: string;
        /**
         * Date d'exécution calculée par le système
         * Type date au format yyyy-MM-dd
         */
        dateExecutionMax: string;
        /**
         * Valeurs :
         *  - "CORE" pour le Core Scheme
         *  - "B2B" pour le BusinesstoBusiness
         */
        codeIdentificationScheme: string;
        /**
         * Libellé de l'établissement MYSYS
         */
        libelleEtablissement: string;
        /**
         * Code Etablissement MYSYS
         * Ex : 13335 CE APC / 13135 CE MP
         */
        codeEtablissement: string;
        refClientBoutEnBout: string;
        /**
         * Référence identifiant la partie qui a envoyé l'INTERCHANGE
         */
        refDonneurOrdreInterchange: string;
        /**
         * Référence identifiant la partie qui a reçu l'INTERCHANGE
         */
        refRecepteurInterchange: string;
        /**
         * Format SEPA de l'instruction
         */
        formatInstruction: string;
        /**
         * Devise des transactions de la transaction
         */
        deviseTransaction: string;
        /**
         * Par convention, une transaction est un débit quand le résultat du traitement de la transaction génère un débit du compte destinataire.
         *
         * Valeurs :
         *  - D : Débit
         *  - C : Crédit
         */
        indicateurDebitCredit: string;
        /**
         * Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         *
         * Cette notion d'offre est fournie par la plateforme d'acquisition, dans l'en-tête du fichier.
         */
        offreClient: string;
        /**
         * Sous-canal d’acquisition client.
         *
         * Exemple : « EBICST », « PESIT », « FILEACT »…
         */
        sousCanalAcquisition: string;
        /**
         * Liste des IBAN émetteurs
         */
        listeIbansEmetteurs: Array<string>;
        /**
         * BIC de l'émetteur
         */
        bicEmetteur: string;
        /**
         * Liste des IBAN destinataires
         */
        listeIbansDestinataires: Array<string>;
        /**
         * BIC du destinataire
         */
        bicDestinataire: string;
    }
    interface ITransaction {
        /**
         * rechercheTransaction - referenceTransaction
         */
        referenceTransaction: string;
        /**
         * rechercheTransaction - clePrimaireListeTransaction
         */
        clePrimaireListeTransaction: number;
        /**
         * rechercheTransaction - identificationTransaction
         */
        identificationTransaction: string;
        /**
         * rechercheTransaction - dateReglementTransaction
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransaction: string;
        /**
         * rechercheTransaction - bicClientDebiteur
         */
        bicClientDebiteur: string;
        /**
         * rechercheTransaction - bicClientCrediteur
         */
        bicClientCrediteur: string;
        /**
         * rechercheTransaction - montantTransaction
         */
        montantTransaction: number;
        /**
         * rechercheTransaction - deviseTransaction
         */
        deviseTransaction: string;
        /**
         * rechercheTransaction - statusTransaction
         */
        statutTransaction: string;
        /**
         * rechercheTransaction - refInstructionEntrante
         */
        refInstructionEntrante: string;
        /**
         * rechercheTransaction - refInstructionSortante
         */
        refInstructionSortante: string;
        /**
         * rechercheTransaction - ibanDebiteur
         */
        ibanDebiteur: string;
        /**
         * rechercheTransaction - ibanCrediteur
         */
        ibanCrediteur: string;
        /**
         * rechercheTransaction - schemaTransaction
         */
        schemaTransaction: string;
        /**
         * rechercheTransaction - sensEchangeABS
         */
        sensEchangeABS: boolean;
        /**
         * rechercheTransaction - offreClient
         */
        offreClient: string;
        /**
         * rechercheTransaction - typeConnexe
         */
        typeConnexe: string;
        /**
         * rechercheTransaction - dateExecution
         * Type date au format yyyy-MM-dd
         */
        dateExecution: string;
        /**
         * rechercheTransaction - typeReponseRecall
         */
        typeReponseRecall: string;
        /**
         * rechercheTransaction - nomDonneurOrdreConnexe
         */
        nomDonneurOrdreConnexe: string;
        /**
         * rechercheTransaction - bicDonneurOrdreConnexe
         */
        bicDonneurOrdreConnexe: string;
        /**
         * rechercheTransaction - nomCrediteur
         */
        nomCrediteur: string;
        /**
         * rechercheTransaction - libelleTransaction
         */
        libelleTransaction: string;
        /**
         * rechercheTransaction - identifiantCreancierSepa
         */
        identifiantCreancierSepa: string;
        /**
         * rechercheTransaction - libelleTransCrediteur
         */
        libelleTransCrediteur: string;
        /**
         * rechTypePaiement - typePaiementSEPA
         */
        typePaiementSEPA: string;
        /**
         * IBAN de l'émetteur
         */
        ibanEmetteur: string;
        /**
         * BIC de l'émetteur
         */
        bicEmetteur: string;
        /**
         * Nom de l'émetteur
         */
        nomEmetteur: string;
        /**
         * IBAN du destinataire
         */
        ibanDestinataire: string;
        /**
         * BIC du destinataire
         */
        bicDestinataire: string;
        /**
         * Nom du destinataire
         */
        nomDestinataire: string;
        /**
         * Origine du rappel
         *
         * Valeurs :
         *  - 'B' pour banque
         *  - 'C' pour client
         */
        origineRappel: string;
    }
    interface ICritereTri {
        /**
         * Nom du champ sur lequel le tri doit être appliqué
         */
        nomChamp: string;
        /**
         * Sens du tri
         *
         * Valeurs :
         *  - 'asc', tri croissant (valeur par défaut)
         *  - 'desc', tri décroissant
         */
        sens: string;
    }
    interface IRechTransInstruction {
        parametreAppel: IParametreAppel;
        /**
         * Nombre d'enregistrement correspondants aux paramètres d'appel
         */
        nombreEnregistrements: number;
        /**
         * Nombre d'enregistrements restitués dans la page
         */
        taillePage: number;
        /**
         * Nombre total de pages d'enregistrements correspondants aux paramètres d'appel
         */
        nombrePages: number;
        /**
         * Numéro de la page restituée
         */
        numeroPage: number;
        /**
         * Montant total des enregistrements restitués
         */
        montantTotal: number;
        /**
         * Nombre d'enregistrement total en stock dans le modèle de donnée ABS.
         */
        nombreEnregistrementsTotal: number;
        listeTransactions: Array<ITransaction>;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechTypePaiement {
    interface IParametreAppel {
        /**
         * "Code déterminant un type d'opération SEPA.
         * Les flux émis/reçus SEPA sont identifiés par un Scheme
         * (règles métiers applicables au traitement des ordres
         * de paiement). Ce code est transmis dans les flux de
         * paiement échangés.
         * ''SCT    '  Virement
         * 'SDDCORE'  Prélèvement CORE
         * 'SDDB2B '  Prélèvement B2B
         *
         * Table HH08 : Rubrique CTH4SC"
         */
        schemeOperation: string;
        /**
         * "Code déterminant un type de classification ABS pour
         * un paiement traité dans un flux ABS.
         * Ces valeurs sont attribuées par ABS.
         *
         * 'CreditTransfer': Virement Initial
         * 'Cancel'   Annulation
         * 'Reject'   Rejet
         * DirectDebit : Prélèvement initial
         *
         * Table HH08 : Rubrique CTH4CL"
         */
        classificationPaiement: string;
        /**
         * "Code déterminant un type de qualification pour un
         * paiement traité dans un flux ABS.
         * Ces valeurs sont attribuées par ABS.
         *
         * Cancellation : Annulation ou Rappel
         * 'Reversal' Reversement SDD ou ACVS
         * Rejection : Rejet pré-règlement
         * 'Return'   Retour SCT, retour ACVS, réponse positive / Retour SDD
         * 'Refund'   Remboursement ACVS, remboursement SDD
         * Resolution : Réponse négative
         * 'Refusal'  Refusal : Rejet SDD
         *
         * Table HH08 : Rubrique CTH4QL"
         */
        qualificationPaiement: string;
        /**
         * "Indique le donneur d'ordre du paiement, l'entité à l'initiative
         *
         * 'B' : BANQUE
         * 'C' : CLIENT
         *
         * Table HH08 : Rubrique CTHDDD"
         */
        donneurOrdrePaiement: string;
        /**
         * "Motif qui permet de différencier une réponse positive de RECALL d'une réponse négative
         *
         * Table HH08 : Rubrique CMHYCX"
         */
        motifPaiement: string;
        /**
         * "Code déterminant le niveau d'un flux échangé
         * avec NPS (NATIXIS).
         *
         * ='T' La transaction désigne une opération unitaire.
         * ='I' L'instruction désigne un groupe de transactions.
         *
         * Table HH08 : CVH4IT"
         */
        niveauEntiteABS: string;
        /**
         * "Permet d'orienter le traitement
         * 'E'        Recherche par Entité (liste des paiements)
         * 'T'        Recherche Unitaire (Type de paiement)
         * "
         */
        typeRecherchePaiement: string;
    }
    interface IRechTypePaiement {
        parametreAppel: IParametreAppel;
        typePaiement: Array<ITypePaiement>;
    }
    interface ITypePaiement {
        /**
         * "Code déterminant un type d'opération SEPA.
         * Les flux émis/reçus SEPA sont identifiés par un Scheme
         * (règles métiers applicables au traitement des ordres
         * de paiement). Ce code est transmis dans les flux de
         * paiement échangés.
         * ''SCT    '  Virement
         * 'SDDCORE'  Prélèvement CORE
         * 'SDDB2B '  Prélèvement B2B
         *
         * Table HH08 : Rubrique CTH4SC"
         */
        schemeOperation: string;
        /**
         * "Code déterminant un type de classification ABS pour
         * un paiement traité dans un flux ABS.
         * Ces valeurs sont attribuées par ABS.
         *
         * 'CreditTransfer': Virement Initial
         * 'Cancel'   Annulation
         * 'Reject'   Rejet
         * DirectDebit : Prélèvement initial
         *
         * Table HH08 : Rubrique CTH4CL"
         */
        classificationPaiement: string;
        /**
         * "Code déterminant un type de qualification pour un
         * paiement traité dans un flux ABS.
         * Ces valeurs sont attribuées par ABS.
         *
         * Cancellation : Annulation ou Rappel
         * 'Reversal' Reversement SDD ou ACVS
         * Rejection : Rejet pré-règlement
         * 'Return'   Retour SCT, retour ACVS, réponse positive / Retour SDD
         * 'Refund'   Remboursement ACVS, remboursement SDD
         * Resolution : Réponse négative
         * 'Refusal'  Refusal : Rejet SDD
         *
         * Table HH08 : Rubrique CTH4QL"
         */
        qualificationPaiement: string;
        /**
         * "Indique le donneur d'ordre du paiement, l'entité à l'initiative
         *
         * 'B' : BANQUE
         * 'C' : CLIENT
         *
         * Table HH08 : Rubrique CTHDDD"
         */
        donneurOrdrePaiement: string;
        /**
         * "Motif qui permet de différencier une réponse positive de RECALL d'une réponse négative
         *
         * Table HH08 : Rubrique CMHYCX"
         */
        motifPaiement: string;
        /**
         * "Le libellé du type de paiement SEPA est déterminé
         * par l'agrégation d'information fournies par ABS.
         * Il est associé au libellé de type de paiement ABS
         * Valeurs :
         * ---------
         * SCT
         * Recall Banque
         * Recall Client
         * ACVS
         * Retour SCT ou Retour ACVS
         * Réponse négative
         * Réponse positive
         * Annulation SDD CORE / SDD B2B
         * Reversement SDD CORE / SDD B2B
         * Rejet SDD CORE / SDD B2B
         * Retour SDD CORE / SDD B2B
         * CAI
         *
         * Table HH08 : Rubrique LIH4TP"
         */
        typePaiementSEPA: string;
        /**
         * "Libellé contenant la désignation d'un type de
         * paiement, renseigné dans ABS par NPS (Natixis).
         * Ce libellé est associé au type de paiement SEPA
         * Valeurs:
         * --------
         * ACVS
         * BankRecall
         * CustomerRecall
         * CreditTransfer
         * DirectDebit
         * RecallPositiveAnswer
         * Refund
         * Reject
         * Return
         * Reversal
         * RFC
         * Resolution
         *
         * Table HH08 : Rubrique LIH7TP"
         */
        typePaiementABS: string;
        /**
         * "Code déterminant le niveau d'un flux échangé
         * avec NPS (NATIXIS).
         *
         * ='T' La transaction désigne une opération unitaire.
         * ='I' L'instruction désigne un groupe de transactions.
         *
         * Table HH08 : CVH4IT"
         */
        niveauEntiteABS: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechercheCourrier {
    interface IParametreAppel {
        /**
         * Code établissement associé au courrier édité suite à la réception d'un rappel de virement (RECALL)
         *
         * Table HH35 : COHCBQ
         */
        codeEtablissement: string;
        /**
         * Clé primaire de la transaction de rappel de virement (RECALL) pour lequel un courrier a été édité
         *
         * Table HH35 : NOH4TT
         */
        clePrimaireTransactionRappel: number;
    }
    interface IRechercheCourrier {
        parametreAppel: IParametreAppel;
        courrier: ICourrier;
    }
    interface ICourrier {
        /**
         * Code établissement associé au courrier édité suite à la réception d'un rappel de virement (RECALL)
         *
         * Table HH35 : COHCBQ
         */
        codeEtablissement: string;
        /**
         * Clé primaire de la transaction de rappel de virement (RECALL) pour lequel un courrier a été édité
         *
         * Table HH35 : NOH4TT
         */
        clePrimaireTransactionRappel: number;
        /**
         * Statut du courrier associé à un rappel de virement (RECALL) reçu
         * '3'        Demande de courrier manuelle
         * '4'        Courrier Envoyé
         *
         * Table HH35 : CEHYGC
         */
        statutCourrier: string;
        /**
         * Date de la demande de courrier associé à un rappel de virement (RECALL) reçu
         *
         * Table HH35 : DAH4CR
         * Type date au format yyyy-MM-dd
         */
        dateDemandeCourrier: string;
        /**
         * Date d'envoi du courrier associé à un rappel de virement (RECALL) reçu
         *
         * Table HH35 : DLDEMJ
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiCourrier: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechercheInstruction {
    interface IRechercheInstruction {
        parametreAppel: IParametreAppel;
        /**
         * Nombre d'enregistrement correspondants aux paramètres d'appel
         */
        nombreEnregistrements: number;
        /**
         * Nombre d'enregistrements restitués dans la page
         */
        taillePage: number;
        /**
         * Nombre total de pages d'enregistrements correspondants aux paramètres d'appel
         */
        nombrePages: number;
        /**
         * Numéro de la page restituée
         */
        numeroPage: number;
        /**
         * Montant total des enregistrements restitués
         */
        montantTotal: number;
        listeInstructions: Array<IInstruction>;
    }
    interface IParametreAppel {
        /**
         * Référence de l'Instruction, attribuée par ABS
         * WS3 NPS : displayInstructionId ==> referenceInstruction /
         */
        listeReferencesInstructions: Array<string>;
        /**
         * Référence du message XML
         * WS3 NPS : instructionReference ==> referenceMessage /
         */
        listeReferencesMessages: Array<string>;
        /**
         * Liste de formats SEPA
         * WS3 NPS : instructionType ==> formatInstruction
         */
        listeFormatsInstruction: Array<string>;
        /**
         * "Sens du flux vis à vis d'ABS, il peut être entrant ou sortant
         * • Un flux entrant  (TRUE)
         * s’il est reçu de PARME (ou autres canaux),
         * s’il est reçu de l’interbancaire via ESP,
         * • Un flux sortant  (FALSE)
         * s’il est à destination de l’interbancaire via ESP,
         * s’il est à destination de PARME (ou autres canaux)."
         * WS3 NPS : incoming ==> directionEchangeABS /
         */
        directionEchangeABS: boolean;
        /**
         * "Permet de définir, d’un point de vue ABS, quelle est la provenance des flux.
         * Sens Client vers Banque (Reçu d'un distributeur) (TRUE) - ALLER
         * Sens Interbancaire, via ESP vers Banque (FALSE) - RETOUR"
         * WS3 NPS : outbound ==> sensEchangeABS /
         */
        sensEchangeABS: boolean;
        /**
         * Liste de statuts de l'instruction
         * WS3 NPS : status ==> statusInstruction /
         */
        listeStatutsInstruction: Array<string>;
        /**
         * Date de règlement prévisionnelle
         * WS3 NPS : settlementDay ==> dateReglementInstruction /
         * Type date au format yyyy-MM-dd
         */
        dateReglementInstructionMin: string;
        /**
         * Date de règlement prévisionnelle
         *
         * "WS3 NPS : settlementDay ==>
         * dateReglementInstructionMax /
         * Type date au format yyyy-MM-dd
         */
        dateReglementInstructionMax: string;
        /**
         * Montant total de l'instruction
         * WS3 NPS : settlementAmount ==> montantInstruction /
         */
        montantInstructionMin: number;
        /**
         * Montant total de l'instruction
         *
         * "WS3 NPS : settlementAmount ==> montantInstructionMax / "
         */
        montantInstructionMax: number;
        /**
         * Date de réception de l'instruction ans ABS
         * WS3 NPS : transportTime ==> dateHeureEchangeInstruction /
         * Type date au format yyyy-MM-dd
         */
        dateHeureEchangeInstructionMin: string;
        /**
         * Date de réception de l'instruction ans ABS
         *
         * "WS3 NPS : transportTime ==> dateHeureEchangeInstructionMax / "
         * Type date au format yyyy-MM-dd
         */
        dateHeureEchangeInstructionMax: string;
        /**
         * Référence ABS de l'interchange
         * WS3 NPS : displayInterchangeId ==> referenceInterchange /
         */
        referenceInterchange: string;
        /**
         * Liste IBAN des donneurs d'ordre
         * WS3 NPS : originatingPartyAccount ==> ibanDonneurOrdre /
         */
        listeIbansDonneursOrdre: Array<string>;
        /**
         * Erreur de conception au départ, le nom de la propriété ne correspond pas à ce qu'elle contient réellement.
         *
         * Cette propriété véhicule la
         * Date Exécution demandée par le client
         *
         * WS3 NPS : requestedCustomerDate ==> dateCreationRemiseMin /
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemiseMin: string;
        /**
         * Erreur de conception au départ, le nom de la propriété ne correspond pas à ce qu'elle contient réellement.
         *
         * Cette propriété véhicule la
         * Date Exécution demandée par le client
         *
         * WS3 NPS : requestedCustomerDate ==> dateCreationRemiseMax /
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemiseMax: string;
        /**
         * Date de règlement recalculée
         *
         * Date Exécution ABS
         *
         * WS3 NPS : instructedDay ==> dateReglementRecalculeeMin /
         * Type date au format yyyy-MM-dd
         */
        dateReglementRecalculeeMin: string;
        /**
         * Date de règlement recalculée
         *
         * Date Exécution ABS
         *
         * WS3 NPS : instructedDay ==> dateReglementRecalculeeMax /
         * Type date au format yyyy-MM-dd
         */
        dateReglementRecalculeeMax: string;
        /**
         * "• Un flux est ALLER
         * - s’il est reçu de PARME (ou autres canaux), - Flux ENTRANT
         * - s’il est à destination de l’interbancaire via ESP - Flux SORTANT
         * • Un flux est RETOUR
         * - s’il est reçu de l’interbancaire via ESP - Flux ENTRANT
         * - s’il est à destination de PARME (ou autres canaux)."" - Flux SORTANT
         * WS3 NPS : allerRetour ==> cycleFlux /
         */
        cycleFlux: string;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         * Cette notion d'offre est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         * WS3 NPS : offer ==> offreClient /
         */
        offreClient: string;
        /**
         * "Canal d'acquisition
         * par exemple = « PARME » dans le cadre de l’étape 1"
         * WS3 NPS : channel ==> canalAcquisition /
         */
        canalAcquisition: string;
        /**
         * Cette propriété n'est pas liée au WS6 ABS : typeTraitementRechTransaction
         * Elle permet d'orienter le traitement de la ressource en fonction des appelants.
         * Elle est obligatoire pour appeler le WS
         *
         * Valeurs :
         * '1' : Traitements Standard Echanges MySys ABS
         * '2' : Traitements EDI MySys
         */
        typeTraitementRechInstruction: string;
        /**
         * Détermine le scheme associé à l'instruction.
         *
         * Valeurs :
         *  - SCT
         *  - SDDB2B
         *  - SDDCORE
         * WS3 NPS : processingScheme ==> schemeInstruction
         */
        listeSchemasInstruction: Array<string>;
        /**
         * Référence communiquée par la plateforme émettant le flux à ABS (Référence Externe PARME).
         * WS3 NPS : externalReference ==> refExterneRemise
         */
        listeRefExternesRemises: Array<string>;
        /**
         * Clé technique de l’interchange dans la base de données
         * WS3 NPS : interchangeKey ==> clePrimaireInterchange
         */
        clePrimaireInterchange: number;
        /**
         * Abonnement du contrat flux du client
         * WS3 NPS : customerSubscription ==> abonnementClient
         */
        listeAbonnementsClient: Array<string>;
        /**
         * Id du donneur d’ordre
         * Pour une instruction de virement TUTELLE, cette propriété contient le RICE de l'initiateur TUTELLE (Gérant)
         * WS3 NPS : initiatingPartyId ==> identifiantDonneurOrdre
         */
        identifiantDonneurOrdre: string;
        listeCriteresTri: Array<ICritereTri>;
        /**
         * WS3 NPS : bankName ==> libelleEtablissement
         */
        libelleEtablissement: string;
        /**
         * WS3 NPS : bankId ==> codeEtablissement
         */
        codeEtablissement: string;
        /**
         * WS3 NPS : bankKey ==> clePrimaireEtablisssement
         */
        clePrimaireEtablisssement: number;
        /**
         * WS3 NPS : classification ==> classificationPaiement
         */
        classificationPaiement: string;
        /**
         * WS3 NPS : settlementCurrency ==> deviseInstruction
         */
        deviseInstruction: string;
        /**
         * WS3 NPS : instructedAgentId ==> bicParticipantDirectDstinataire
         */
        bicParticipantDirectDstinataire: string;
        /**
         * WS3 NPS : instructingAgentId ==> bicParticipantDirectEmetteur
         */
        bicParticipantDirectEmetteur: string;
        /**
         * WS3 NPS : clearingParticipantName ==> nomParticipantEchange
         */
        nomParticipantEchange: string;
        /**
         * WS3 NPS : clearingParticipantKey ==> clePrimaireParticipantEchange
         */
        clePrimaireParticipantEchange: number;
        /**
         * WS3 NPS : businessParticipantName ==> nomParticipantBancaire
         */
        nomParticipantBancaire: string;
        /**
         * WS3 NPS : businessParticipantKey ==> clePrimaireParticipantBancaire
         */
        clePrimaireParticipantBancaire: number;
        /**
         * WS3 NPS : subChannel ==> sousCanalAcquisition
         */
        sousCanalAcquisition: string;
        /**
         * WS3 NPS : connexeType ==> typeConnexe
         */
        typeConnexe: string;
        /**
         * Liste des IBAN émetteurs
         */
        listeIbansEmetteurs: Array<string>;
    }
    interface IInstruction {
        /**
         * Référence de l'Instruction, attribuée par ABS
         * WS3 NPS : displayInstructionId ==> referenceInstruction /
         */
        referenceInstruction: string;
        /**
         * Clé primaire de la table Liste Instruction	NON
         * NPS : entityKey ==> clePrimaireListeInstruction /
         */
        clePrimaireListeInstruction: number;
        /**
         * Référence ABS de l'interchange
         * WS3 NPS : displayInterchangeId ==> referenceInterchange /
         */
        referenceInterchange: string;
        /**
         * Clé technique de l’interchange dans la base de données
         * WS3 NPS : interchangeKey ==> clePrimaireInterchange /
         */
        clePrimaireInterchange: number;
        /**
         * Format SEPA de l'instruction
         * WS3 NPS : instructionType ==> formatInstruction /
         */
        formatInstruction: string;
        /**
         * La classification du paiement indique la nature du paiement utilisé
         * WS3 NPS : classification ==> classificationPaiement /
         */
        classificationPaiement: string;
        /**
         * Référence du message XML
         * WS3 NPS : instructionReference ==> referenceMessage /
         */
        referenceMessage: string;
        /**
         * Date de règlement prévisionnelle
         * WS3 NPS : settlementDay ==> dateReglementInstruction /
         * Type date au format yyyy-MM-dd
         */
        dateReglementInstruction: string;
        /**
         * Montant total de l'instruction
         * WS3 NPS : settlementAmount ==> montantInstruction /
         */
        montantInstruction: number;
        /**
         * Devise des transactions de  l'instruction
         *
         * WS3 NPS : settlementCurrency ==> deviseInstruction /
         */
        deviseInstruction: string;
        /**
         * "Sens du flux vis à vis d'ABS, il peut être entrant ou sortant
         * • Un flux entrant  (TRUE)
         * s’il est reçu de PARME (ou autres canaux),
         * s’il est reçu de l’interbancaire via ESP,
         * • Un flux sortant  (FALSE)
         * s’il est à destination de l’interbancaire via ESP,
         * s’il est à destination de PARME (ou autres canaux)."	WS3 NPS : incoming ==> directionEchangeABS /
         */
        directionEchangeABS: boolean;
        /**
         * "Permet de définir, d’un point de vue ABS, quelle est la provenance des flux.
         * Sens Client vers Banque (Reçu d'un distributeur) (TRUE) - ALLER
         * Sens Interbancaire, via ESP vers Banque (FALSE) - RETOUR"
         * NPS : outbound ==> sensEchangeABS /
         */
        sensEchangeABS: boolean;
        /**
         * Libellé de l'établissement MYSYS
         * WS3 NPS : bankName ==> libelleEtablissement /
         */
        libelleEtablissement: string;
        /**
         * "Code Etablissement MYSYS
         * Ex : 13335 CE APC / 13135 CE MP"
         * WS3 NPS : bankId ==> codeEtablissement /
         */
        codeEtablissement: string;
        /**
         * Clé primaire d'accès WS ESP
         * WS3 NPS : bankKey ==> clePrimaireEtablisssement /
         */
        clePrimaireEtablisssement: number;
        /**
         * Status de l'instruction (valeurs à traduire)
         * WS3 NPS : status ==> statusInstruction /
         */
        statusInstruction: string;
        /**
         * "Partie avec laquelle le message est échangé
         *  Le ‘Clearing Participant’ ou ‘Participant d’échange’ : participant avec lequel le paiement est échangé, il est déduit de la Condition d’échange,"
         * WS3 NPS : clearingParticipantName ==> nomParticipantEchange /
         */
        nomParticipantEchange: string;
        /**
         * Le ‘Clearing Participant’ ou ‘Participant d’échange’ : participant avec lequel le paiement est échangé, il est déduit de la Condition d’échange,
         * WS3 NPS : clearingParticipantKey ==> clePrimaireParticipantEchange /
         */
        clePrimaireParticipantEchange: number;
        /**
         * "Partie dont le contrat spécifique (processing agreement) conditionne le traitement du paiement
         * • Le ‘Business Participant’ ou ‘Participant bancaire’ : participant final (Banque initiale émettrice à l’Aller / Banque destinataire finale au Retour) lors de l’échange d’un paiement. "
         * WS3 NPS : businessParticipantName ==> nomParticipantBancaire /
         */
        nomParticipantBancaire: string;
        /**
         * "Partie dont le contrat spécifique (processing agreement) conditionne le traitement du paiement
         * • Le ‘Business Participant’ ou ‘Participant bancaire’ : participant final (Banque initiale émettrice à l’Aller / Banque destinataire finale au Retour) lors de l’échange d’un paiement. "
         * WS3 NPS : businessParticipantKey ==> clePrimaireParticipantBancaire /
         */
        clePrimaireParticipantBancaire: number;
        /**
         * Numéro du compte du donneur d’ordre (IBAN)
         * WS3 NPS : originatingPartyAccount ==> ibanDonneurOrdre /
         */
        ibanDonneurOrdre: string;
        /**
         * Nom du donneur d’ordre
         * WS3 NPS : initiatingPartyName ==> nomDonneurOrdre /
         */
        nomDonneurOrdre: string;
        /**
         * Id du donneur d’ordre
         * Pour une instruction de virement TUTELLE, cette propriété contient le RICE de l'initiateur TUTELLE (Gérant)
         *
         * WS3 NPS : initiatingPartyId ==> identifiantDonneurOrdre /
         */
        identifiantDonneurOrdre: string;
        /**
         * Nombre d’ordres dans l’instruction
         * WS3 NPS : numberOfTransactions ==> nombreTransactions /
         */
        nombreTransactions: number;
        /**
         * Erreur de conception au départ, le nom de la propriété ne correspond pas à ce qu'elle contient réellement.
         *
         * Cette propriété véhicule la
         * Date Exécution demandée par le client
         *
         * WS3 NPS : requestedCustomerDate ==> dateCreationRemise
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemise: string;
        /**
         * Date de règlement recalculée
         *
         * Date Exécution ABS
         *
         * WS3 NPS : instructedDay ==> dateReglementRecalculee /
         * Type date au format yyyy-MM-dd
         */
        dateReglementRecalculee: string;
        /**
         * Date de réception de l'instruction ans ABS
         * WS3 NPS : transportTime ==> dateHeureEchangeInstruction /
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateHeureEchangeInstruction: string;
        /**
         * "• Un flux est ALLER
         * - s’il est reçu de PARME (ou autres canaux), - Flux ENTRANT
         * - s’il est à destination de l’interbancaire via ESP - Flux SORTANT
         * • Un flux est RETOUR
         * - s’il est reçu de l’interbancaire via ESP - Flux ENTRANT
         * - s’il est à destination de PARME (ou autres canaux)."" - Flux SORTANT
         * WS3 NPS : allerRetour ==> cycleFlux /
         */
        cycleFlux: string;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         * Cette notion d'offre est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         * WS3 NPS : offer ==> offreClient /
         */
        offreClient: string;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         * Cette notion de produit est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         * WS3 NPS : product ==> categorieProduitBancaire /
         */
        categorieProduitBancaire: string;
        /**
         * Abonnement du contrat flux du client
         * WS3 NPS : customerSubscription ==> abonnementClient /
         */
        abonnementClient: string;
        /**
         * "Canal d'acquisition
         * par exemple = « PARME » dans le cadre de l’étape 1"
         * WS3 NPS : channel ==> canalAcquisition /
         */
        canalAcquisition: string;
        /**
         * "Sous Canal d'acquisition
         * sous-canal d’acquisition client ; par exemple = « EBICST », « PESIT », « FILEACT »…)"
         * WS3 NPS : subChannel ==> sousCanalAcquisition /
         */
        sousCanalAcquisition: string;
        /**
         * "CORE" pour le Core Scheme , "B2B" pour le BusinesstoBusiness
         * WS3 NPS : LocalInstrumentCode ==> codeIdentificationScheme /
         */
        codeIdentificationScheme: string;
        /**
         * "CORE" pour le Core Scheme , "B2B" pour le BusinesstoBusiness
         * WS3 NPS : LocalInstrumentProprietaryCode ==> codeProprietaireIdentificScheme /
         */
        codeProprietaireIdentificScheme: string;
        /**
         * Référence communiquée par la plateforme émettant le flux à ABS (Référence Externe PARME).
         * WS3 NPS : externalReference ==> refExterneRemise /
         */
        refExterneRemise: string;
        /**
         * Pour les instructions ayant fait l'objet d'une R-instruction, cet attribut permet de préciser le type de connexe associé
         * WS3 NPS : connexeType ==> typeConnexe /
         */
        typeConnexe: string;
        /**
         * BIC du participant direct du destinataire du message.
         * WS3 NPS : instructedAgentId ==> bicParticipantDirectDstinataire /
         */
        bicParticipantDirectDstinataire: string;
        /**
         * Détermine le scheme associé à l’instruction
         * WS3 NPS : processingScheme ==> schemeInstruction /
         */
        schemeInstruction: string;
        /**
         * Raison de l'accord banque (DispositionCheck)
         * WS3 NPS : DCReasonCode ==> motifAccordBanque
         */
        motifAccordBanque: string;
        /**
         * Libellé de l'accord banque (DispositionCheck)
         * WS3 NPS : DCReasonInformation ==> libelleAccordBanque
         */
        libelleAccordBanque: string;
        /**
         * Montant reçu par PARME pour l'instruction.
         * WS3 NPS : initialParmeAmount ==> montantInitialParme
         */
        montantInitialParme: number;
        /**
         * Nombre de transactions reçues par PARME pour l'instruction.
         * WS3 NPS : initialParmeNbTrn ==> nbTrnInitialeParme
         */
        nbTrnInitialeParme: number;
        /**
         * IBAN de l'émetteur
         */
        ibanEmetteur: string;
        /**
         * Pour une instruction de virement TUTELLE, cette propriété contient le RICE de l'initiateur TUTELLE (Gérant)
         *
         * WS3 NPS : initiatingPartyId ==> riceGerantTutelle
         */
        riceGerantTutelle: string;
    }
    interface ICritereTri {
        /**
         * Nom du champ sur lequel le tri doit être appliqué
         */
        nomChamp: string;
        /**
         * Sens du tri
         *
         * Valeurs :
         *  - 'asc', tri croissant (valeur par défaut)
         *  - 'desc', tri décroissant
         */
        sens: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechercheRappel {
    interface IParametreAppel {
        /**
         * Référence de la transaction
         */
        referenceTransaction: string;
        /**
         * Référence de l'instruction entrante
         */
        refInstructionEntrante: string;
        /**
         * Référence de l'instruction sortante
         */
        refInstructionSortante: string;
        /**
         * Liste des numéros de comptes débités (IBAN)
         */
        listeIbansDebiteurs: Array<string>;
        /**
         * Liste des numéros de comptes crédités (IBAN)
         */
        listeIbansCrediteurs: Array<string>;
        /**
         * Statut de la transaction
         */
        listeStatutsTransaction: Array<string>;
        /**
         * Permet de définir, d’un point de vue ABS, quelle est la provenance des flux :
         *  - TRUE : Sens Client vers Banque (Reçu d'un distributeur) - ALLER
         *  - FALSE : Sens Interbancaire, via ESP vers Banque - RETOUR
         */
        sensEchangeABS: boolean;
        /**
         * Détermine le scheme associé à la transaction
         *
         * Valeurs :
         *  - SCT
         *  - SDDB2B
         *  - SDDCORE
         */
        listeSchemasTransaction: Array<string>;
        /**
         * Date de règlement prévisionnelle minimale
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransactionMin: string;
        /**
         * Date de règlement prévisionnelle maximale
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransactionMax: string;
        /**
         * Montant total de la transaction
         */
        montantTransactionMin: number;
        /**
         * Montant total de la transaction
         */
        montantTransactionMax: number;
        /**
         * BIC du client débité
         */
        bicClientDebiteur: string;
        /**
         * BIC du client crédité
         */
        bicClientCrediteur: string;
        /**
         * La classification du paiement indique la nature du paiement utilisé
         */
        classificationPaiement: string;
        /**
         * Pour les transactions, la qualification est une sous-classification qui permet d'affiner la granularité de la recherche
         */
        typeTransactionConnexe: string;
        /**
         * Permet d'identifier si la transaction est à destination de l'interbancaire ou si elle reste interne à la plateforme ABS
         *
         * Valeurs :
         *  - TRUE, on us
         *  - FALSE, not on us
         */
        transactionInterne: boolean;
        /**
         * Canal d'acquisition
         *
         * Par exemple = « PARME » dans le cadre de l’étape 1
         */
        canalAcquisition: string;
        /**
         * Type de connexe associé
         */
        typeConnexe: string;
        /**
         * Cette propriété n'est pas liée au WS6 ABS. Elle permet d'orienter le traitement de la ressource en fonction des appelants
         *
         * Valeurs :
         *  - SPACES : aucune spécificité
         *  - '1' : Traitements Standard Echanges MySys ABS
         *  - '2' : Traitements EDI MySys
         */
        typeTraitementRechTransaction: string;
        /**
         * Motif de la transaction
         */
        codeMotifTransaction: string;
        /**
         * Transaction ID (TX-ID) de l'opération initiale émise et calculée par ABS.
         */
        identificationTransaction: string;
        /**
         * Liste des références des messages porteurs des transactions
         */
        listeReferencesMessagesEntrants: Array<string>;
        /**
         * Indique le type de la réponse au RECALL.
         *
         * Valeurs :
         *  - NotExpected
         *  - FOCR
         *  - ROI
         */
        typeReponseRecall: string;
        listeCriteresTri: Array<ICritereTri>;
    }
    interface ICritereTri {
        /**
         * Nom du champ sur lequel le tri doit être appliqué
         */
        nomChamp: string;
        /**
         * Sens du tri
         *
         * Valeurs :
         *  - 'asc', tri croissant (valeur par défaut)
         *  - 'desc', tri décroissant
         */
        sens: string;
    }
    interface IRechercheRappel {
        parametreAppel: IParametreAppel;
        /**
         * Nombre d'enregistrement correspondants aux paramètres d'appel
         */
        nombreEnregistrements: number;
        /**
         * Nombre d'enregistrements restitués dans la page
         */
        taillePage: number;
        /**
         * Nombre total de pages d'enregistrements correspondants aux paramètres d'appel
         */
        nombrePages: number;
        /**
         * Numéro de la page restituée
         */
        numeroPage: number;
        /**
         * Montant total des enregistrements restitués
         */
        montantTotal: number;
        listeTransactions: Array<ITransaction>;
    }
    interface ITransaction {
        /**
         * rechercheTransaction - clePrimaireListeTransaction
         */
        clePrimaireListeTransaction: number;
        /**
         * rechercheTransaction - identificationTransaction
         */
        identificationTransaction: string;
        /**
         * rechercheTransaction - dateReglementTransaction
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransaction: string;
        /**
         * rechercheTransaction - codeMotifTransaction
         */
        codeMotifTransaction: string;
        /**
         * rechercheTransaction - montantTransaction
         */
        montantTransaction: number;
        /**
         * rechercheTransaction - bicClientDebiteur
         */
        bicClientDebiteur: string;
        /**
         * rechercheTransaction - bicClientCrediteur
         */
        bicClientCrediteur: string;
        /**
         * rechercheTransaction - typeReponseRappel
         */
        typeReponseRappel: string;
        /**
         * detailTransaction - nomDonneurOrdreConnexe
         */
        nomDonneurOrdreConnexe: string;
        /**
         * detailTransaction - bicDonneurOrdreConnexe
         */
        bicDonneurOrdreConnexe: string;
        /**
         * detailTransaction - referenceTransaction
         */
        referenceTransaction: string;
        /**
         * detailTransaction - offreClient
         */
        offreClient: string;
        /**
         * detailTransaction - dateReglementOpeInitiale
         * Type date au format yyyy-MM-dd
         */
        dateReglementOpeInitiale: string;
        dateReglementTransInitiale: string;
        /**
         * detailTransaction - refInstructionEntrante
         */
        refInstructionEntrante: string;
        /**
         * detailTransaction - ibanDebiteur
         */
        ibanDebiteur: string;
        /**
         * detailTransaction - nomDebiteur
         */
        nomDebiteur: string;
        /**
         * detailTransaction - ibanCrediteur
         */
        ibanCrediteur: string;
        /**
         * detailTransaction - nomCrediteur
         */
        nomCrediteur: string;
        /**
         * detailTransaction - transactionInterne
         */
        transactionInterne: boolean;
        /**
         * detailTransaction - statusTransaction
         */
        statutTransaction: string;
        /**
         * detailTransaction - refInstructionSortante
         */
        refInstructionSortante: string;
        /**
         * detailTransaction - typeConnexe
         */
        typeConnexe: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.RechercheTransaction {
    interface IParametreAppel {
        /**
         * referenceTransaction
         * WS6 NPS : displayTransactionId ==> referenceTransaction /
         */
        referenceTransaction: string;
        /**
         * Référence de l'instruction entrante ABS
         * WS6 NPS : incomingDisplayInstructionId ==> refInstructionEntrante /
         */
        refInstructionEntrante: string;
        /**
         * Référence de l'instruction sortante ABS
         * WS6 NPS : outgoingDisplayInstructionId ==> refInstructionSortante /
         */
        refInstructionSortante: string;
        /**
         * Liste des numéros de comptes débités (IBAN)
         * WS6 NPS : debitPartyAccount ==> ibanDebiteur /
         */
        listeIbansDebiteurs: Array<string>;
        /**
         * Liste de numéros de comptes crédités (IBAN)
         * WS6 NPS : creditPartyAccount ==> ibanCrediteur /
         */
        listeIbansCrediteurs: Array<string>;
        /**
         * Liste de statuts possible pour la transaction
         * WS6 NPS : status ==> statusTransaction /
         */
        listeStatutsTransaction: Array<string>;
        /**
         * "Permet de définir, d’un point de vue ABS, quelle est la provenance des flux.
         * Sens Client vers Banque (Reçu d'un distributeur) (TRUE) - ALLER
         * Sens Interbancaire, via ESP vers Banque (FALSE) - RETOUR"
         * WS6 NPS : outbound ==> sensEchangeABS /
         */
        sensEchangeABS: boolean;
        /**
         * Détermine le scheme associé à la transaction
         *
         * Valeurs :
         *  - SCT
         *  - SDDB2B
         *  - SDDCORE
         *
         * WS6 NPS : processingScheme ==> schemaTransaction
         */
        listeSchemasTransaction: Array<string>;
        /**
         * Date de réglement prévisionnelle
         * WS6 NPS : settlementDay ==> dateReglementTransactionMin /
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransactionMin: string;
        /**
         * Date de réglement prévisionnelle
         * WS6 NPS : settlementDay ==> dateReglementTransactionMax /
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransactionMax: string;
        /**
         * Montant total de la Transaction
         * WS6 NPS : settlementAmount ==> montantTransactionMin /
         */
        montantTransactionMin: number;
        /**
         * Montant total de la Transaction
         * WS6 NPS : settlementAmount ==> montantTransactionMax /
         */
        montantTransactionMax: number;
        /**
         * BIC du client débité
         * WS6 NPS : debitPartyAgentId ==> bicClientDebiteur /
         */
        bicClientDebiteur: string;
        /**
         * BIC du client crédité
         *
         * WS6 NPS : creditPartyAgentId ==> bicClientCrediteur /
         */
        bicClientCrediteur: string;
        /**
         * "La classification du paiement indique la nature du paiement utilisé
         * Cancellation
         * Credit Transfer
         * Direct Debit
         * Refund
         * Rejection
         * Resolution
         * Return
         * Reversal
         * WS6 NPS : classification ==> classificationPaiement /
         */
        classificationPaiement: string;
        /**
         * Pour les Rtransactions, la qualification est une é sous-classification é qui permet déaffiner la granularité de la recherche
         * Cancellation
         * Refund
         * Refusal
         * Rejection
         * Resolution
         * Return
         * Reversal
         * WS6 NPS : qualification ==> typeTransactionConnexe /
         */
        typeTransactionConnexe: string;
        /**
         * Permet d'identifier si la transaction est é destination de l'interbancaire ou si elle reste interne é la plateforme ABS
         * 'true (on us)
         * false (not on us)"
         * WS6 NPS : onUsFlag ==> transactionInterne /
         */
        transactionInterne: boolean;
        /**
         * "Canal d'acquisition
         * par exemple = « PARME » dans le cadre de l’étape 1"
         *
         * WS6 NPS : channel ==> canalAcquisition /
         */
        canalAcquisition: string;
        /**
         * Pour les instructions ayant fait l'objet d'une R-instruction, cet attribut permet de préciser le type de connexe associé
         * WS6 NPS : connexeType ==> typeConnexe /
         */
        typeConnexe: string;
        /**
         * Cette propriété n'est pas liée au WS6 ABS : typeTraitementRechTransaction Elle permet d'orienter le traitement de la ressource en fonction des appelants. Elle est obligatoire pour appeler le WS
         *
         * Valeurs :
         * SPACES aucune spécificité
         * '1' : Traitements Standard Echanges MySys ABS '2' : Traitements EDI MySys
         */
        typeTraitementRechTransaction: string;
        /**
         * WS6 NPS : statusReasonCode ==> codeMotifTransaction
         */
        codeMotifTransaction: string;
        /**
         * Transaction ID (TX-ID) de l'opération initiale émise et calculée par ABS.
         * WS6 NPS : firstInstructingAgentTransactionId ==> identificationTransaction
         */
        identificationTransaction: string;
        /**
         * WS6 NPS : incomingInstructionReference ==> referenceMessageEntrant
         */
        listeReferencesMessagesEntrants: Array<string>;
        /**
         * Indique la réponse au RECALL.
         * WS6 NPS : recallResponse ==> typeReponseRecall
         *
         * Valeurs :
         *  - NotExpected
         *  - FOCR
         *  - ROI
         */
        typeReponseRecall: string;
        /**
         * Liste de clés de références d'instruction entrante
         *
         * WS6 NPS : incomingInstructionKey ==> cleRefInstructionEntrante
         */
        listeClesRefInstructionEntrante: Array<number>;
        /**
         * Clé primaire d'accès WS ESP
         * WS6 NPS : bankKey ==> clePrimaireEtablissement
         */
        clePrimaireEtablissement: number;
        listeCriteresTri: Array<ICritereTri>;
        /**
         * Date d'exécution calculée par le système
         *
         * WS6 NPS : instructedDay ==> dateExecution
         * Type date au format yyyy-MM-dd
         */
        dateExecutionMin: string;
        /**
         * Date d'exécution calculée par le système
         *
         * WS6 NPS : instructedDay ==> dateExecution
         * Type date au format yyyy-MM-dd
         */
        dateExecutionMax: string;
        /**
         * WS6 NPS : localInstrumentCode ==> codeIdentificationScheme
         */
        codeIdentificationScheme: string;
        /**
         * WS6 NPS : bankName ==> libelleEtablissement
         */
        libelleEtablissement: string;
        /**
         * WS6 NPS : bankId ==> codeEtablissement
         */
        codeEtablissement: string;
        /**
         * WS6 NPS : endToEndId ==> refClientBoutEnBout
         */
        refClientBoutEnBout: string;
        /**
         * WS6 NPS : sendingParty ==> refDonneurOrdreInterchange
         */
        refDonneurOrdreInterchange: string;
        /**
         * WS6 NPS : receivingParty ==> refRecepteurInterchange
         */
        refRecepteurInterchange: string;
        /**
         * WS6 NPS : instructionType ==> formatInstruction
         */
        formatInstruction: string;
        /**
         * WS6 NPS : settlementCurrency ==> deviseTransaction
         */
        deviseTransaction: string;
        /**
         * WS6 NPS : debitCreditIndicator ==> indicateurDebitCredit
         */
        indicateurDebitCredit: string;
        /**
         * WS6 NPS : offer ==> offreClient
         */
        offreClient: string;
        /**
         * WS6 NPS : subChannel ==> sousCanalAcquisition
         */
        sousCanalAcquisition: string;
        /**
         * Liste des IBAN émetteurs
         */
        listeIbansEmetteurs: Array<string>;
        /**
         * BIC de l'émetteur
         */
        bicEmetteur: string;
        /**
         * Liste des IBAN destinataires
         */
        listeIbansDestinataires: Array<string>;
        /**
         * BIC du destinataire
         */
        bicDestinataire: string;
    }
    interface IRechercheTransaction {
        parametreAppel: IParametreAppel;
        /**
         * Nombre d'enregistrement correspondants aux paramètres d'appel
         */
        nombreEnregistrements: number;
        /**
         * Nombre d'enregistrements restitués dans la page
         */
        taillePage: number;
        /**
         * Nombre total de pages d'enregistrements correspondants aux paramètres d'appel
         */
        nombrePages: number;
        /**
         * Numéro de la page restituée
         */
        numeroPage: number;
        /**
         * Montant total des enregistrements restitués
         */
        montantTotal: number;
        /**
         * Nombre d'enregistrement total en stock dans le modèle de donnée ABS.
         */
        nombreEnregistrementsTotal: number;
        listeTransactions: Array<ITransaction>;
    }
    interface ITransaction {
        /**
         * referenceTransaction
         * WS6 NPS : displayTransactionId ==> referenceTransaction /
         */
        referenceTransaction: string;
        /**
         * Clé primaire de la table Liste Transaction
         * WS6 NPS : entityKey ==> clePrimaireListeTransaction /
         */
        clePrimaireListeTransaction: number;
        /**
         * Format SEPA de l'instruction
         * WS6 NPS : instructionType ==> formatInstruction /
         */
        formatInstruction: string;
        /**
         * Transaction ID (TX-ID) de l'opération initiale émise et calculée par ABS
         *
         * WS6 NPS : firstInstructingAgentTransactionId ==> identificationTransaction /
         */
        identificationTransaction: string;
        /**
         * WS6 NPS : incomingInstructionReference ==> referenceMessageEntrant /
         */
        referenceMessageEntrant: string;
        /**
         * Date de règlement prévisionnelle
         * WS6 NPS : settlementDay ==> dateReglementTransaction /
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransaction: string;
        /**
         * La classification du paiement indique la nature du paiement utilisé
         * WS6 NPS : classification ==> classificationPaiement /
         */
        classificationPaiement: string;
        /**
         * "Pour les Rtransactions, la qualification est une « sous-classification » qui permet d’affiner la granularité de la recherche
         * Cancellation
         * Refund
         * Refusal
         * Rejection
         * Resolution
         * Return
         * Reversal
         * "
         *
         * WS6 NPS : qualification ==> typeTransactionConnexe /
         */
        typeTransactionConnexe: string;
        /**
         * BIC du client débité
         * WS6 NPS : debitPartyAgentId ==> bicClientDebiteur /
         */
        bicClientDebiteur: string;
        /**
         * BIC du client crédité
         * WS6 NPS : creditPartyAgentId ==> bicClientCrediteur /
         */
        bicClientCrediteur: string;
        /**
         * Montant total de la Transaction
         * WS6 NPS : settlementAmount ==> montantTransaction /
         */
        montantTransaction: number;
        /**
         * Devise de la transaction
         *
         * WS6 NPS : settlementCurrency ==> deviseTransaction /
         */
        deviseTransaction: string;
        /**
         * Status de la transaction
         * WS6 NPS : status ==> statusTransaction /
         */
        statusTransaction: string;
        /**
         * Libellé de l'établissement MYSYS
         * WS6 NPS : bankName ==> libelleEtablissement /
         */
        libelleEtablissement: string;
        /**
         * "Code Etablissement MYSYS
         * Ex : 13335 CE APC / 13135 CE MP"
         * WS6 NPS : bankId ==> codeEtablissement /
         */
        codeEtablissement: string;
        /**
         * Clé primaire d'accès WS ESP
         * WS6 NPS : bankKey ==> clePrimaireEtablissement /
         */
        clePrimaireEtablissement: number;
        /**
         * Référence de l'instruction entrante ABS
         * WS6 NPS : incomingDisplayInstructionId ==> refInstructionEntrante /
         */
        refInstructionEntrante: string;
        /**
         * Référence de l'instruction entrante ABS
         * WS6 NPS : incomingInstructionKey ==> cleRefInstructionEntrante /
         */
        cleRefInstructionEntrante: number;
        /**
         * Référence de l'instruction sortante ABS
         * WS6 NPS : outgoingDisplayInstructionId ==> refInstructionSortante /
         */
        refInstructionSortante: string;
        /**
         * Référence de l'instruction sortante ABS
         * WS6 NPS : outgoingInstructionKey ==> cleRefInstructionSortante /
         */
        cleRefInstructionSortante: number;
        /**
         * WS6 NPS : endToEndId ==> refClientBoutEnBout /
         */
        refClientBoutEnBout: string;
        /**
         * Numéro du compte débiteur (IBAN)
         * WS6 NPS : debitPartyAccount ==> ibanDebiteur /
         */
        ibanDebiteur: string;
        /**
         * Numéro du compte Crédité (IBAN)
         * WS6 NPS : creditPartyAccount ==> ibanCrediteur /
         */
        ibanCrediteur: string;
        /**
         * "Détermine le scheme associé à la transaction
         * Valeurs :
         * ‘SCT’
         * ‘SDDB2B’
         * ‘SDDCORE’
         * "
         * WS6 NPS : processingScheme ==> schemaTransaction /
         */
        schemaTransaction: string;
        /**
         * "Permet de définir, d’un point de vue ABS, quelle est la provenance des flux.
         * Sens Client vers Banque (Reçu d'un distributeur) (TRUE) - ALLER
         * Sens Interbancaire, via ESP vers Banque (FALSE) - RETOUR"
         * WS6 NPS : outbound ==> sensEchangeABS /
         */
        sensEchangeABS: boolean;
        /**
         * Permet d'identifier si la transaction est à destination de l'interbancaire ou si elle reste interne à la plateforme ABS
         * WS6 NPS : onUsFlag ==> transactionInterne /
         */
        transactionInterne: boolean;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         * Cette notion d'offre est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         * WS6 NPS : offer ==> offreClient /
         */
        offreClient: string;
        /**
         * "Dans le cadre des travaux inhérents à la plateforme ABS, un ‘Catalogue d’offres’ paramétrable pour l’ensemble du groupe BPCE est mis en œuvre et accessible.
         * Cette notion de produit est fournie par la plateforme d'acquisition, dans l'en-tête du fichier."
         * WS6 NPS : product ==> categorieProduitBancaire /
         */
        categorieProduitBancaire: string;
        /**
         * Abonnement du contrat flux du client
         * WS6 NPS : customerSubscription ==> abonnementClient /
         */
        abonnementClient: string;
        /**
         * "Canal d'acquisition
         * par exemple = « PARME » dans le cadre de l’étape 1"
         * WS6 NPS : channel ==> canalAcquisition /
         */
        canalAcquisition: string;
        /**
         * "Sous Canal d'acquisition
         * sous-canal d’acquisition client ; par exemple = « EBICST », « PESIT », « FILEACT »…)"
         * WS6 NPS : subChannel ==> sousCanalAcquisition /
         */
        sousCanalAcquisition: string;
        /**
         * "CORE" pour le Core Scheme , "B2B" pour le BusinesstoBusiness
         * WS6 NPS : LocalInstrumentCode ==> codeIdentificationScheme /
         */
        codeIdentificationScheme: string;
        /**
         * "CORE" pour le Core Scheme , "B2B" pour le BusinesstoBusiness
         * WS6 NPS : LocalInstrumentProprietaryCode ==> codeProprietaireIdentificScheme /
         */
        codeProprietaireIdentificScheme: string;
        /**
         * Référence du mandat de prélèvement SDD signé entre les parties
         * WS6 NPS : mandateReference ==> referenceMandatSDD /
         */
        referenceMandatSDD: string;
        /**
         * Nom du Client débité
         * WS6 NPS : debitPartyName ==> nomDebiteur /
         */
        nomDebiteur: string;
        /**
         * WS6 NPS : statusReasonCode ou statusReasonProprietaryCode ==> codeMotifTransaction /
         */
        codeMotifTransaction: string;
        /**
         * Référence identifiant la partie qui a envoyé l'INTERCHANGE
         *
         * WS6 NPS : sendingParty ==> refDonneurOrdreInterchange /
         */
        refDonneurOrdreInterchange: string;
        /**
         * Référence identifiant la partie qui a reçu l'INTERCHANGE
         *
         * WS6 NPS : receivingParty ==> refRecepteurInterchange /
         */
        refRecepteurInterchange: string;
        /**
         * "D : Débit
         * C : Crédit
         * Par convention, une transaction est un débit quand le résultat du traitement de la transaction génère un débit du compte destinataire.
         * "
         *
         * WS6 NPS : debitCreditIndicator ==> indicateurDebitCredit /
         */
        indicateurDebitCredit: string;
        /**
         * Pour les instructions ayant fait l'objet d'une R-instruction, cet attribut permet de préciser le type de connexe associé
         *
         * WS6 NPS : connexeType ==> typeConnexe /
         */
        typeConnexe: string;
        /**
         * Date d'exécution calculée par le système
         *
         * WS6 NPS : instructedDay ==> dateExecution
         * Type date au format yyyy-MM-dd
         */
        dateExecution: string;
        /**
         * Indique la réponse au RECALL.
         * WS6 NPS : recallResponse ==> typeReponseRecall
         *
         * Valeurs :
         *  - NotExpected
         *  - FOCR
         *  - ROI
         */
        typeReponseRecall: string;
        /**
         * Nom du client qui a initié une connexe, pour une RECALL de type CLIENT
         *
         * WS6 NPS : statusOriginatorName ==> nomDonneurOrdreConnexe
         */
        nomDonneurOrdreConnexe: string;
        /**
         * BIC du client qui a initié une connexe, pour une RECALL de type BANQUE
         *
         * WS6 NPS : statusOriginatorId ==> bicDonneurOrdreConnexe
         */
        bicDonneurOrdreConnexe: string;
        /**
         * WS6 NPS : creditPartyName ==> nomCrediteur
         */
        nomCrediteur: string;
        /**
         * WS6 NPS : remittanceUnstructured ==> libelleTransaction
         */
        libelleTransaction: string;
        /**
         * WS6 NPS : creditPartySchemePartyId ==> identifiantCreancierSepa
         */
        identifiantCreancierSepa: string;
        /**
         * WS6 NPS : remittance1CreditPartyReference ==> libelleTransCrediteur
         */
        libelleTransCrediteur: string;
        /**
         * IBAN de l'émetteur
         */
        ibanEmetteur: string;
        /**
         * BIC de l'émetteur
         */
        bicEmetteur: string;
        /**
         * Nom de l'émetteur
         */
        nomEmetteur: string;
        /**
         * IBAN du destinataire
         */
        ibanDestinataire: string;
        /**
         * BIC du destinataire
         */
        bicDestinataire: string;
        /**
         * Nom du destinataire
         */
        nomDestinataire: string;
        /**
         * Origine du rappel
         *
         * Valeurs :
         *  - 'B' pour banque
         *  - 'C' pour client
         */
        origineRappel: string;
        /**
         * "Partenaire d'échange avec lequel le message est échangé en sortie d'ABS
         * Valeur pour SCT INTRADAY : ESP / ONUS / BIP"
         *
         * WS6 NPS : outgoingClearingParticipantName ==> nomParticipantSortant /
         */
        nomParticipantSortant: string;
    }
    interface ICritereTri {
        /**
         * Nom du champ sur lequel le tri doit être appliqué
         */
        nomChamp: string;
        /**
         * Sens du tri
         *
         * Valeurs :
         *  - 'asc', tri croissant (valeur par défaut)
         *  - 'desc', tri décroissant
         */
        sens: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.ReclamUnitVirement {
    interface IParametreAppel {
        affectation: IAffectation;
        virement: IVirement;
    }
    interface IVirement {
        /**
         * Référence de la transaction de virement à  réclamer
         * Pour appel du WS ABS
         * WS26 NPS : id ==> referenceTransactionVirement /
         */
        referenceTransactionVirement: number;
        /**
         * "Référence de la transaction initiale ABS à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4TA"
         */
        referenceTransactionInitiale: string;
        /**
         * "ID Transaction de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4ID"
         */
        identifiantTransactionInitiale: string;
        /**
         * "Référence de l'instruction de la transaction d'origine associée à la connexe
         *
         * Alimentation Table HH06 : Rubrique IRH4IO"
         */
        referenceInstructionOrigine: string;
        /**
         * "Date de règlement de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYRG"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransConnexe: string;
        /**
         * "Montant de la transaction connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOP"
         */
        montantTransactionConnexe: number;
        /**
         * "Date de règlement de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique DAHYDD"
         * Type date au format yyyy-MM-dd
         */
        dateReglementTransInitiale: string;
        /**
         * "Montant de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique MTHYOO"
         */
        montantTransInitiale: number;
        /**
         * "BIC du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB2"
         */
        bicDonneurOrdre: string;
        /**
         * "IBAN du donneur d'ordre de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII1"
         */
        ibanDonneurOrdre: string;
        /**
         * "BIC du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDHMB1"
         */
        bicDestinataire: string;
        /**
         * "IBAN du destinataire de la transaction initiale à l'origine de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique IDLII2"
         */
        ibanDestinataire: string;
    }
    interface IReclamUnitVirement {
        parametreAppel: IParametreAppel;
        transactionReclamationVirement: ITransactionReclamationVirement;
    }
    interface ITransactionReclamationVirement {
        /**
         * Code évènement restitué suite à la demande de réclamation du virement
         *
         * WS26 NPS : eventCode ==> codeEvenementReclamVirement /
         */
        codeEvenementReclamVirement: string;
        /**
         * Référence de la transaction de réclamation attribuée par ABS
         *
         *
         * WS26 NPS : displayTransactionId ==> refTransactionReclamVirement
         */
        refTransactionReclamVirement: string;
        /**
         * Clé primaire d'accès WS ESP pour la table des Transactions de type Réclamation
         *
         *
         * WS26 NPS : paymentTransactionKey ==> cleTransactionReclamVirement /
         */
        cleTransactionReclamVirement: number;
        analyseTraitement: IAnalyseTraitement;
    }
    interface IAnalyseTraitement {
        /**
         * Permet de déterminer comment l'occurence de la liste a été traitée TRUE : Correctement traitée FALSE : Erreur de traitement
         */
        etat: boolean;
        /**
         * Libellé associé au code erreur de traitement de l’occurrence de transaction
         *
         * Un libellé est associé fonctionnellement à un code erreur. Cf. Règles de gestion
         */
        libelleErreur: string;
    }
    interface IAffectation {
        /**
         * "Code établissement source de saisie de la demande de connexe unitaire
         *
         * Alimentation Table HH06 : Rubrique COHCBQ"
         */
        codeEtablissement: string;
        /**
         * "Permet de différencier les types de réclamations à créer
         *
         * 'ClaimNonReceipt’  ==> Réclamation pour non réception de fonds
         * or ‘ClaimValueDateCorrection’ ==> Réclamation pour correction date de valeur
         * "
         *
         * WS26 NPS : claimType ==> typeReclamation /
         */
        typeReclamation: string;
        /**
         * Propriété de l'annulation de virement pour identifier si l'envoi de l'annulation est à tarifer, si oui, cette tarification est supportée par le client bénéficiaire du virement.
         *
         * Cette propriété n'est pas liée à un WEB SERVICE ABS
         *
         *
         * Alimentation Table HH06 : Rubrique CIHCTA
         */
        tarificationReclamlVirement: string;
        /**
         * Une réclamation pour correction date de valeur demande la modification de la date de règlement du virement initial.
         *
         * WS26 NPS : modifiedSettlementDay ==> dateValeurCorrigee /
         */
        dateValeurCorrigee: string;
        /**
         * "Libellé informatif à destination du destinataire initial du virement
         *
         * Alimentation Table HH06 : Rubrique LMH4BN"
         */
        informationsComplementaires: string;
        /**
         * "Type de connexe fournit par l'IHM :
         * - 'CLAIMF' ou
         * - 'CLAIMD'
         *
         * Permet d'alimenter après analyse, les rubriques suivantes de la table HH06 :
         * COHYTM
         * CTHDTD
         * MTHYFR"
         */
        typeConnexe: string;
        /**
         * Justification de la création de la réclamation, libellé information
         *
         * WS26 NPS : messageText ==> justificationReclamVirement /
         */
        justificationReclamVirement: string;
        /**
         * "Code déterminant un type d'opération SEPA.
         * Les flux émis/reçus SEPA sont identifiés par un Scheme (règles métiers applicables au traitement des ordres
         * de paiement). Ce code est transmis dans les flux de
         * paiement échangés.
         * ''SCT ' Virement
         *
         * Alimentation Table HH06 : Rubrique CTH4SC"
         */
        schemeOperation: string;
        /**
         * "Canal à partir duquel les demandes de connexes sont créées ='T' Pour les demandes via IHM et WEBSERVICE
         *
         * Alimentation Table HH06 : Rubrique COSFBT
         */
        canalDemande: string;
        /**
         * "Précise le circuit d'échange de la demande ='O' ON US ='N' Not ON US
         *
         * Pour une réclamation le circuit NOT ON US est le seul accepté.
         *
         * Alimentation Table HH06 : Rubrique CIH4CE"
         */
        circuitEchange: string;
        /**
         * "Origine de la création de la demande ='O' unitaire ='N' masse
         *
         * Alimentation Table HH06 : Rubrique CIH4OD"
         */
        origineCreationDemande: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.TypologieFluxAbs {
    interface ITypologieFluxABS {
        parametrage: Array<IParametrage>;
    }
    interface IParametrage {
        /**
         * Contient la valeur du libellé court associé à un
         * processus/étape/écran et éventuellement code valeur
         * dans les IHM MyWay destiné à la gestion des flux
         *
         * Table HH09 : Rubrique LCH4TM
         */
        libelleCourt: string;
        /**
         * Contient la valeur du libellé long associé à un
         * processus/étape/écran et éventuellement code valeur
         * dans les IHM MyWay destiné à la gestion des flux
         * ABS pour MySys.
         *
         * Table HH09 : Rubrique LLH4TM"
         */
        libelleLong: string;
        /**
         * Code d'une rubrique PACBASE telle qu'elle est
         * définie au dictionnaire
         * Cette propriété permet de cibler le champs qui sera alimenté avec le paramétrage
         *
         * Table HH09 : Rubrique COSFPA
         */
        codeRubriqueParametre: string;
        /**
         * Contient la valeur du code associé à un libellé
         * pour les typologies délocalisées dans les IHM
         * de gestion des flux ABS pour MySys.
         *
         * Table HH09 : Rubrique NSEHPA
         */
        numeroSequence: number;
        /**
         * Contient la valeur du statut ABS à traduire, si nécessaire dans le paramétrage en question
         *
         * Table HH09 : Rubrique LVH4TE
         */
        libelleLongABS: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.Structure.CoordonneeEDS {
    interface ICoordonneeEDS {
        IdentificationSite: IIdentificationSite;
        AdresseEDS: IAdresseEDS;
        MediaEDS: IMediaEDS;
    }
    interface IAdresseEDS {
        /**
         * Ligne 2 de l'adresse de l'EDS.
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identification du destinataire : N° APP ou BAL-ETAGE-COULOIR-ESC.
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2AdresseEDS: string;
        /**
         * Ligne 3 de l'adresse de l'EDS.
         * La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution) : ENTREE-BATIMENT-IMMEUBLE-RESIDENCE.
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment : entrée, bâtiment, bloc, tour, etc.
         */
        ligne3AdresseEDS: string;
        /**
         * Ligne 4 de l'adresse de l'EDS.
         * La ligne 4 permet d'identifier la voie de destination NUMERO-LIBELLE DE LA VOIE.
         * Peut comprendre :
         * - Le numéro dans la voie, type et nom de voie
         * - Le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit
         * - Un service X
         * - Une boîte postale
         * - Un numéro de CEDEX
         */
        ligne4AdresseEDS: string;
        /**
         * Ligne 5 de l'adresse de l'EDS.
         * La ligne 5 permet d'identifier la destination : LIEU DIT ou SERVICE PARTICULIER DE DISTRIBUTION.
         * Peut comprendre :
         * - Nom d'un quartier, d'un lieu dit, d'un hameau
         * - Nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu dit et possédant plusieurs voies internes.
         */
        ligne5AdresseEDS: string;
        /**
         * Ligne 6 de l'adresse de l'EDS.
         * La ligne 6 permet d'identifier la destination : CODE POSTAL et LOCALITE DE DESTINATION ou CODE CEDEX et LIBELLE CEDEX
         * Peut comprendre :
         * - Le numéro de code postal et nom de la localité
         * - Le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6AdresseEDS: string;
        /**
         * Identifie un pays ou territoire selon la norme INSEE.
         *
         * Exemples :
         * 99000 France
         * 99132 Grande Bretagne
         * 99109 Allemagne
         * 99134 Espagne
         * ...
         */
        codePaysINSEE: string;
    }
    interface IMediaEDS {
        /**
         * Numéro de téléphone public d'un site.
         */
        numeroTelephonePublic: string;
        /**
         * Numéro de téléphone interne d'un site.
         */
        numeroTelephoneInterne: string;
        /**
         * Numéro de fax d'un site.
         */
        numeroFAX: string;
        /**
         * Cette donnée permet de mémoriser l'adresse de messagerie d'un site.
         */
        adresseEMail: string;
    }
    interface IIdentificationSite {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Identifie un site de localisation d'un EDS.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantSite: number;
    }
}

declare module Operation2Librairie.Modeles.Rest.Structure.EtablissementMysys {
    interface IListeEtablissement {
        Etablissement: Array<IEtablissement>;
    }
    interface IEtablissement {
        /**
         * Identifiant d'un Etablissement du Groupe CE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Désignation d'un Etablissement (Caisse) du GCE comme
         * personne morale.
         * Cette information figure dans les statuts.
         */
        libelleEtablissement: string;
        /**
         * Cette propriété correspond à l'acronyme / abréviation de la Caisse utilisé comme suffixe d'adresse email.
         *
         * Exemples :
         * 11315 / cepac
         * 11425 / cen
         * 13135 / cemp
         * 13485 / celr
         * 14445 / cebpl
         * 14505 / celc
         * 16275 / cenfe
         * 18025 / picardie
         * 18315 / cecaz
         * 18715 / cepal
         */
        sigleEtablissement: string;
        /**
         * Référence d'identification de l'adresse d'un site ou d'une page web à saisir dans la barre d'adresses d'un navigateur pour accéder à cette ressource ou document.
         */
        sitwebEtablissement: string;
        /**
         * Ce libellé a été crée afin que certaines applications aient accès au dernier libellé historique de l'établissement (pré-fusions).
         */
        libellehistoEtablissement: string;
        /**
         * Ce libellé a été crée afin que certaines applications aient accès au dernier libellé court en date de l'établissement (post-fusions).
         */
        libelleactuelEtablissement: string;
        /**
         * Cette rubrique est le nom de l'enseigne à laquelle appartient l'établissement.
         * Cette information pourra être exploitée par toutes applications utilisant des maquettes pour l'envoi de mail ou de courrier.
         *
         * Exemples :
         * pour les CE   = "Caisse d'Epargne"
         * pour le CFF   = "Crédit Foncier"
         * pour la BCP   = "Banque BCP"
         * pour le CCOOP = "Crédit Coopératif"
         * ...
         */
        libelleenseigneEtablissement: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.Structure.GuichetEds {
    interface IGuichetEDS {
        listeGuichet: Array<IGuichet>;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du SI MYSYS.
         */
        identifiantInterneEDS: number;
        /**
         * Identifiant d'un Etablissement du SI MYSYS.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement est répertoriée par la Banque de France
         */
        codeEtablissement: string;
    }
    interface IGuichet {
        /**
         * Identifiant interne du guichet
         */
        identifiantInterneGuichet: number;
        /**
         * Référence externe du guichet
         */
        referenceExterneGuichet: number;
        /**
         * Libellé du guichet
         */
        libelleGuichet: string;
        /**
         * Identifiant interne du GAB de rattachement
         */
        identifiantInterneGAB: number;
        /**
         * Référence externe du GAB de rattachement
         */
        referenceExterneGAB: number;
        /**
         * Libelle du GAB de rattachement
         */
        libelleGAB: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.Structure.InfoEds {
    interface IInformation {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code CTR de rattachement
         */
        codeCtrRattachement: string;
        /**
         * Type d'EDS
         */
        typeEDS: string;
        /**
         * Libellé de l'EDS
         */
        libelleEDS: string;
        /**
         * Libellé court du type d'EDS
         */
        libelleCourtTypeEDS: string;
        /**
         * Date début validité de l'EDS
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeEds: string;
        /**
         * Date fin validité de l'EDS
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEds: string;
        /**
         * Identifiant de l'EDS qui dirige
         */
        identifiantResponsableEDS: number;
        /**
         * Identifiant interne de l'EDS de rattachement
         */
        identifiantEDSRattachement: number;
        /**
         * Désignation de l'EDS de rattachement
         */
        designationEDSRattachement: string;
        /**
         * Numéro téléphone
         */
        numeroTelephone: string;
        /**
         * Numéro téléphone interne
         */
        numeroTelephoneInterne: string;
        /**
         * Num SIRET établissement entreprise
         */
        numSiretEtablissementEntreprise: string;
        /**
         * Prix TTC appel
         */
        prixTtcAppel: number;
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Code civilité personne physique
         */
        civilite: string;
        /**
         * Nom usage Personne Physique
         */
        nomUsage: string;
        /**
         * Premier prénom état civil Personne
         */
        prenom: string;
        /**
         * Type fonction (métier) associée au poste fonctionnel
         */
        typeFonction: string;
        /**
         * Libellé fonction poste fonctionnel
         */
        libelleFonction: string;
        /**
         * Désignation longue agent interne
         */
        nomAgentTraitement: string;
        /**
         * Adresse messagerie
         */
        adresseEMail: string;
        /**
         * Date création
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Indicateur agent non nominatif
         */
        indicAgentNonNominatif: string;
        /**
         * Indicateur agent affectable
         */
        indicAgentAffectable: string;
        /**
         * Taux d'occupation d'un poste fonctionnel
         */
        tauxOccupationPosteFonctionnel: number;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Référence externe agent
         */
        referenceExterneAgent1: number;
        /**
         * Numéro Caisse
         */
        numeroCaisse: string;
        /**
         * Code entité administrative
         */
        codeEntiteAdministrative: string;
        /**
         * Code entité administrative
         */
        codeEntiteAdministrative1: string;
        /**
         * Numéro téléphone
         */
        numeroTelephone1: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephone2: string;
        /**
         * Num SIRET établissement entreprise
         */
        numeroSIRET: string;
        /**
         * Numéro téléphone interne
         */
        numeroTelephoneInterne1: string;
        /**
         * Prix TTC appel
         */
        prixTtcAppel1: number;
        /**
         * Identifiant site
         */
        identifiantSite: number;
        /**
         * Code pays INSEE
         */
        codePays: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephoneAdresse: string;
        /**
         * Numéro téléphone interne
         */
        numeroTelephoneInterne2: string;
        /**
         * Prix TTC appel
         */
        prixTtcAppel2: number;
        /**
         * Adresse messagerie
         */
        adresseMessageriePI: string;
        /**
         * Identifiant site de correspondance
         */
        identifiantSiteCorrespondance: number;
        /**
         * Adresse 1 SITE CORRESPONDANCE
         */
        adresse1SiteCorrespondance: string;
        /**
         * Adresse 2 SITE CORRESPONDANCE
         */
        adresse2SiteCorrespondance: string;
        /**
         * Adresse 3 SITE CORRESPONDANCE
         */
        adresse3SiteCorrespondance: string;
        /**
         * Adresse 4 SITE CORRESPONDANCE
         */
        adresse4SiteCorrespondance: string;
        /**
         * Adresse 5 SITE CORRESPONDANCE
         */
        adresse5SiteCorrespondance: string;
        /**
         * Code INSEE pays résidence fiscale
         */
        codeInseePaysResidenceFiscale: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephoneAdresse1: string;
        /**
         * Numéro téléphone interne
         */
        numeroTelephoneInterne3: string;
        /**
         * Prix TTC appel
         */
        prixTtcAppel3: number;
        /**
         * Adresse messagerie
         */
        adresseMessagerie: string;
        /**
         * Type d'agence
         */
        typeAgence: string;
        /**
         * Désignation du type d'agence
         */
        libelleTypeAgence: string;
        /**
         * Type service (EDS)
         */
        typeService: string;
        /**
         * Désignation type service (EDS)
         */
        libelleTypeService: string;
        /**
         * Date modification
         * Type date au format yyyy-MM-dd
         */
        dateModification: string;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Référence interne de l'EDS
         */
        referenceInterneEDS: number;
        /**
         * Référence externe de l'EDS
         */
        referenceExterneEDS: number;
        /**
         * Libellé long du type d'EDS
         */
        libelleLongTypeEDS: string;
        /**
         * Niveau hiérarchique de l'EDS
         */
        niveauHierarchiqueEDS: number;
        /**
         * Identifiant externe de l'EDS de rattachement
         */
        identifiantExtEDSRattachement: number;
        /**
         * Type d'EDS de rattachement
         */
        typeEDSRattachement: string;
        /**
         * Groupe identifiant EDS
         */
        groupeIdentifiantEDS: string;
        /**
         * Nom famille Personne Physique
         */
        nomFamille: string;
        /**
         * Ligne 2 adresse site
         */
        ligneAdresseSite2: string;
        /**
         * Ligne 3 adresse site
         */
        ligneAdresseSite3: string;
        /**
         * Ligne 4 adresse site
         */
        ligneAdresseSite4: string;
        /**
         * Ligne 5 adresse site
         */
        ligneAdresseSite5: string;
        /**
         * Ligne 6 adresse site
         */
        ligneAdresseSite6: string;
        /**
         * Numéro fax
         */
        numeroFax1: string;
        /**
         * Code INSEE localité
         */
        codeInseeLocalite1: string;
        /**
         * Code INSEE localité
         */
        codeInseeLocalite: string;
        /**
         * Numéro fax
         */
        numeroFax: string;
        /**
         * Libellé long type d'EDS de rattachement
         */
        libelleLongTypeEDS1: string;
        /**
         * Libellé court du type d'EDS de rattachement
         */
        libelleCourtTypeEDS1: string;
        /**
         * Libellé tarif tel EDS
         */
        libelleTarifTelEDS: string;
        /**
         * Libellé tarif tel EDS
         */
        libelleTarifTelEDS1: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInformation;
        infoEDSRattachement: IInformation;
    }
}

declare module Operation2Librairie.Modeles.Rest.SyntheseService.EquipementClient {
    interface IEquipementClient {
        listeClient: Array<IClient>;
    }
    interface IClient {
        /**
         * Correspond au code Banque sous lequel un Etablissement du Groupe BPCE est répertoriée par la
         * Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         */
        identifiantTiers: string;
        listeContrat: Array<IContrat>;
        /**
         * Messages provenant du central suite aux différents appels
         */
        listeMessagesRetour: Array<string>;
    }
    interface IContrat {
        /**
         * Identifie un contrat souscrit dans un Etablissement.
         * Cet identifiant doit être unique pour un établissement donné.
         */
        identifiantContrat: string;
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte.
         * Uniquement pour les comptes de dépôt / épargne.
         */
        riceContrat: string;
        /**
         * Ce code indique l'état du contrat.
         *
         * Valeurs :
         *      O - Ouvert
         *      F - Fermé / clos
         *      I  - En instance d'ouverture
         *      K - En instance de clôture
         *      X - Indéterminé
         */
        codeEtatContrat: string;
        /**
         * Date à laquelle le contrat prend effet.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffet: string;
        /**
         * Date de fin d'effet du contrat.
         * Correspond à l'échéance du contrat.
         * Ce n'est pas la date de clôture administrative.
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Identifiant de l'entité titulaire affecté par le système.
         * Doit être unique au sein d'un établissement.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Désignation bancaire de l'entité titulaire.
         * Ce libellé constitue la première ligne de l'intitulé bancaire. Elle constitue notamment la ligne 1 de l'adresse.
         * Selon les Communautés et les entités titulaires, cette
         *  désignation pourra être soit calculée automatiquement
         *  par assemblage des civilités et noms patronymiques (exemple: "M et Mme Dupond"), soit être choisie spécifiquement par l'entité titulaire lorsque le résultat de l'assemblage précédent ne lui convient pas.
         */
        libelleEntiteTitulaire: string;
        /**
         * Indicateur permettant de designer la personne responsable d'une entité titulaire parmi les cotitulaires d'un compte collectif.
         *
         * Valeurs :
         *      N : Non responsable
         *      O : Responsable
         */
        indicateurResponsableET: boolean;
        /**
         * Indique le mode de composition de l'entité titulaire.
         * Le mode qualifie le client qui détient des produits ou  services.
         *
         * Valeurs :
         *      1 : Mode simple
         *      2 : Mode joint entre époux
         *      3 : Mode joint
         *      4 : Mode indivision
         */
        modeCompositionET: string;
        /**
         * Indique le type d'usage de l'entité titulaire.
         *
         * Valeurs :
         *      1 - Usage privé
         *      2 - Usage professionnel
         */
        codeUsageET: string;
        /**
         * Identifiant du code produit service régional.
         */
        identifiantProduit: number;
        /**
         * Libellé du PS régional.
         */
        libelleProduit: string;
        /**
         * Code de la devise dans laquelle le contrat est libellé.
         */
        codeDeviseContrat: string;
        /**
         * Valeur monétaire du contrat, exprimée en euros.
         *
         * Ce montant n'est pas valorisé pour les services.
         *
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         *
         * Pour les crédits amortissables, ce montant correspond au montant du capital restant du de l'engagement.
         *
         * Pour les crédits par autorisation, ce montant correspond au montant utilisé sur l'engagement d'autorisation.
         *
         * Pour les comptes Titre, ce montant correspond au montant estimé de la position Valeur. Il s'agit de la quantité multipliée par le cours.
         *
         * Pour les assurances hors épargne, ce montant correspond au montant du contrat calculé à la date de calcul valeur de rachat.
         *
         * Pour l'épargne salariale, ce montant correspond au montant des avoirs investis et valorisés sur les comptes des salariés (y compris l'abondement s'il a été versé et investi).
         */
        valeurProduit: number;
        /**
         * Valeur monétaire du contrat, exprimée en devise de tenue de compte.
         *
         * Ce montant n'est pas valorisé que pour les CDD/CCE et pour les crédits par autorisation.
         *
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         *
         * Pour les crédits par autorisation, ce montant correspond au montant utilisé sur l'engagement d'autorisation.
         */
        valeurProduitDevise: number;
        /**
         * Référence interne de la gestion du compte ou service.
         */
        referenceCompteService: string;
        /**
         * Identifiant de l'offre.
         */
        identifiantOffre: string;
        /**
         * Indique le caractère forfaitaire de l'offre :
         * 'F': Forfaitaire
         * 'U': Unitaire
         */
        indicateurForfaitaireOffre: string;
        /**
         * Libellé du forfait dans le cadre d'une offre forfaitaire.
         */
        libelleForfaitOffre: string;
        /**
         * Identifie l'établissement producteur du contrat
         */
        identifiantEtabProducteur: string;
        /**
         * NUMERO COMPTE IBAN
         */
        numeroCompteIBAN: string;
    }
}

declare module Operation2Librairie.Modeles.Rest.SyntheseService.MiniProfil {
    interface IParticipantProduit {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantTiers: number;
        /**
         * Code rôle des participants dans le mini-profil.
         *
         * Valeurs :
         * '01'       Titulaire
         * '02'       Cotitulaire
         * '03'       Procuration générale
         * '04'       Procuration générale par compte
         * '05'       Représentant légal
         * '06'       Représentant légal personne morale
         * '07'       Procuration spéciale porteur de carte pro
         */
        codeRolePersonne: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         *    - soit au nom de famille de l'époux(se) (conjoint)
         *    - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque.
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         * Donnée réglementaire : information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille.
         * Appelée auparavant nom marital.
         */
        nomUsage: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         * Nom joint au patronyme qui distingue les personnes d'un même groupe familial entre elles.
         * Donnée réglementaire.
         */
        prenom: string;
        /**
         * Désignation de la personne morale.
         * Identique à celle de l'INSEE ou du Registre du Commerce et des Sociétés (RCS).
         * Figure impérativement dans les statuts.
         * La nature et la composition de ce nom ainsi que les principes le régissant varient selon que la société est commerciale ou civile.
         * Désignation propre à la personne : contrôle de l'unicité.
         */
        raisonSociale: string;
        /**
         * Date de naissance de la personne physique.
         * Donnée réglementaire : information figurant sur toute pièce officielle d'identité.
         * Règle dérogatoire pour les personnes physiques
         * appartenant à un pays sans état civil : le 1er du mois de l'année de naissance supposée.
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Détermine le type de personnalité juridique de la personne.
         * Il existe principalement deux types de personnalité :
         *            - PJ physique : concerne les individus,
         *            - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations, ...),
         * La personnalité juridique conditionne les droits et obligations.
         *
         * Valeurs :
         * '1'        Personne physique
         * '2'        Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Code qui permet de respecter la dénomination de la personne suivant sa situation de famille.
         * Donnée réglementaire.
         *
         * Valeurs :
         * '1'        MME
         * '2'        MLLE
         * '3'        M
         */
        codeCivilite: string;
    }
    interface IIdentificationProduit {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France.
         * Un Etablissement bancaire peut disposer de plusieurs guichets.
         *
         * Exemples :
         * '90000' : IDF PARIS de la CE Ile de France
         * '00600' : LILLE de la CE Nord France Europe
         */
        codeGuichetInterbancaire: string;
        /**
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S.
         * Détermine le format de la référence du contrat (produit ou service en gestion : compte, crédit ...).
         *
         * Exemples :
         * '0000'     LIVRET A
         * '0001'     LIVRET EPARGNE SUPPLEMENTAIRE
         * '0002'     COMPTE D INSTANCE
         * '0003'     PLAN EPARGNE RETRAITE
         * '0004'     CDD
         * '0005'     LIVRET EPARGNE POPULAIRE
         * '0006'     CODEVI
         * '0007'     CREDIT PERMANENT ECUREUIL
         * '0008'     COMPTE COURANT ENTREPRISE
         * '0009'     COMPTE A TERME
         */
        codeProduitService: string;
        /**
         * Référence d'identification d'un compte, service, crédit, etc, détenu par un client d'un Etablissement du GCE.
         * Codification spécifique au GCE.
         * Référence établie par le système de gestion spécifique à chaque type de P/S.
         * Exemples de format :
         * Pour les produits radicalisables (hors CCE), le numéro de compte :
         *   - Code produit/service : '00' à '01', '10' à '17', '19' à '21', '48' et '88'
         *   - Radical : Numéro chronologique attribué par le système
         *                     Référence unique par Etablissement et par guichet.
         *   - Clé Modulo 97
         * Pour les prêts de type P000
         *   - Numéro de dossier (7car)
         */
        referenceProduitService: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire.
         * Une ET se compose d'une ou plusieurs personnes.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantEntiteTitulaire: number;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         * Numéro chronologique attribué par le système :
         *   - P/S simple : référence unique dans MYSYS,
         *   - autres P/S : référence unique par Etablissement.
         */
        identifiantProduitService: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         * Numéro chrono attribué par le système : référence unique dans MYSYS.
         */
        numeroOffre: number;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire, lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaireCourte: string;
    }
    interface IDonneeCommuneProduit {
        /**
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha.
         * Nomenclature adoptée par BPCE.
         *
         * Exemples :
         * USD / dollar - USA
         * JPY / yen - JAPON
         * CNY / yuan - CHINE
         * DKK / couronne - DANEMARK
         */
        deviseTenueCompte: string;
        /**
         * Détermine la situation de gestion à un instant donné d'un contrat de produit ou service.
         * Produit ou service souscrit auprès de la clientèle.
         * Situation établie par l'application de gestion.
         *
         * Valeurs :
         * '0'        Produit/Service ouvert
         * '1'        Clôture demandée
         * '2'        Clôture en cours
         * '3'        Produit/Service fermé
         * '8'        Produit/Service en cours d'ouverture
         * '9'        Versements non autorisés
         */
        codeEtatProduitService: string;
        /**
         * Précise s'il existe une opposition active sur un contrat donné (compte, crédit, service, ...).
         *
         * Valeurs :
         * '0'        pas d'opposition
         * '1'        opposition
         */
        indicateurExistenceOpposition: string;
        /**
         * Détermine une variante ou une version de produit/service dans le Catalogue avec des caractéristiques spécifiques.
         * Ce sous code est ajouté au code produit pour déterminer une variante ou version de P/S.
         * Concerne essentiellement des P/S de dépôt-épargne.
         */
        sousCodeProduitService: string;
        /**
         * Détermine si le livret est géré avec un support (matérialisé) ou avec une tenue de compte (dématérialisé).
         *
         * Valeurs :
         * '0'        Support Livret
         * '1'        Relevés de Comptes
         */
        indicateurModeGestionLivret: string;
        /**
         * Le solde du compte est la position du compte en capital à un instant donné (solde magnétique).
         * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
         * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
         * Le solde calculé 'fin de période' sert de base pour établir celui de la période suivante.
         */
        soldeMinuteCompte: number;
        /**
         * Montant reprenant le total des échéances prêts Crédécureuil en Impayé ayant pour compte de prélèvement un CCE donné.
         */
        montantCumuleImpayePret: number;
        /**
         * Charge mensuelle d'endettement.
         */
        chargeMensuelleEndettement: number;
        participantProduit: Array<IParticipantProduit>;
        /**
         * Fonds mis à disposition. Les fonds sont mis à disposition tant que le donneur d'ordre n'est pas crédité ( INSTANT PAYMENT)
         */
        cumulFondsMisADispoinstpay: number;
        /**
         * Fonds réservés . Les fonds sont réservés tant que le compte donneur d'ordre n'est pas imputé( INSTANT PAYMENT).
         */
        cumulReservesFondsInstpay: number;
    }
    interface IDonneeSpecifiqueProfilComplet {
        /**
         * Détermine si le compte PEL était en respect au dernier anniversaire contractuel.
         * Donnée établie lors de chaque traitement anniversaire si le terme du contrat n'est pas atteint.
         * Elle peut être modifiée lors de versements rétroactifs à une date anniversaire.
         * Un PEL est considéré "en respect total", à un anniversaire donné, si le solde du compte est >= au solde minimum réglementaire qui varie selon l'ancienneté du compte.
         *
         * Plage de valeurs :
         * 'RT'       Respect au dernier anniversaire
         * 'NR'       Non-Respect au dernier anniversaire
         */
        codeEtatContractuelAnniversaire: string;
        /**
         * Montant du découvert autorisé.
         */
        montantDecouvertAutorise: number;
        /**
         * Montant reprenant le total des opérations en attente de décision dans le MAD pour un CCE donné.
         */
        montantCumuleOperationEcartee: number;
        /**
         * Le montant à régulariser correspond à tout ce qui n'a pas été versé depuis l'ouverture jusqu'à la date de l'opération e en ajoutant
         * au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
         * Elle est obtenue en ajoutant au solde de début de la période considérée le cumul des opérations de débit et de crédit réalisées.
         * Le solde calculé 'fin de période' sert de base pour établir celui de la période suivante.
         */
        montantARegulariser: number;
        /**
         * Montant du versement périodique alimentant un contrat donné.
         * Peut être cadré par la réglementation : fonction de la date de souscription et de la périodicité.
         * Contrôle catalogue possible des montants mini / maxi.
         * Peut faire l'objet d'un engagement du client.
         */
        montantVersementRegulier: number;
        /**
         * Montant des effets encaissement Crédit du mois.
         */
        montantEffetEncaissement: number;
    }
    interface IDonneeSpecifiqueMiniProfil {
        /**
         * Détermine si l'entité titulaire est privée ou professionnelle.
         *
         * Valeurs :
         * 1          Usage privé
         * 2          Usage professionnel
         */
        codeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une entité titulaire.
         * Permet de qualifier le client détenteur d'un contrat.
         *
         * Valeurs :
         * 1          mode simple
         * 2          mode joint entre époux
         * 3          mode joint entre tiers
         * 4          mode indivision
         */
        modeCompositionEntiteTitulaire: string;
    }
    interface ICaracteristiqueMiniProfil {
        identificationProduit: Array<IIdentificationProduit>;
        donneeCommuneProduit: Array<IDonneeCommuneProduit>;
        donneeSpecfiqueMiniProfil: Array<IDonneeSpecifiqueMiniProfil>;
        donneeSpecifiqueProfilComplet: Array<IDonneeSpecifiqueProfilComplet>;
        detailSoldeDisponible: IDetailSoldeDisponible;
        /**
         * Message à remonter si aucun compte trouvé
         */
        messageRetour: string;
    }
    interface IDetailSoldeDisponible {
        /**
         * MTGXDE, Montant du Découvert Autorisé
         */
        montantDecouvertAutorise: number;
        /**
         * MCDYCN, Montant effets encaissement Crédit
         */
        montantEffetEncaissement: number;
        /**
         * MCPCEC, Cumul Montants opérations ecartées
         */
        montantCumuleOperationEcartee: number;
        /**
         * MCPCCR, Cumul Montants impayés prêts Credec
         */
        montantCumuleImpayePret: number;
        /**
         * MTGLS1, Solde du compte (solde minute)
         */
        soldeMinuteCompte: number;
        /**
         * Détermine si le compte PEL était en respect au dernier anniversaire contractuel.
         * Donnée établie lors de chaque traitement anniversaire si le terme du contrat n'est pas atteint.
         * Elle peut être modifiée lors de versements rétroactifs à une date anniversaire.
         * Un PEL est considéré "en respect total", à un anniversaire donné, si le solde du compte est >= au solde minimum réglementaire qui varie selon l'ancienneté du compte.
         *
         * Plage de valeurs :
         * 'RT'       Respect au dernier anniversaire
         * 'NR'       Non-Respect au dernier anniversaire
         */
        codeEtatContractuelAnniversaire: string;
        /**
         * Fonds mis à disposition. Les fonds sont mis à disposition tant que le donneur d'ordre n'est pas crédité ( INSTANT PAYMENT).
         */
        cumulFondsMisADispoinstpay: number;
        /**
         * Fonds réservés . Les fonds sont réservés tant que le compte donneur d'ordre n'est pas imputé( INSTANT PAYMENT).
         */
        cumulReservesFondsInstpay: number;
    }
}

declare module Operation2Librairie.Modeles.Rest.Tiers.Adresse {
    interface IAdresse {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        codeValiditeAdresseUNIVERS: string;
        indicateurEnvoiCourrier: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        numeroVoiePTT: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: string;
        nombreRetourPTT: number;
    }
}

declare module Operation2Librairie.Modeles.Rest.Tiers.Identification {
    interface ICodeMarche {
        /**
         * Code Marché de la personne.
         *
         * Exemple :
         * MN 101102 /  Particuliers : Particuliers non Professionnels
         * MN 102102 /  Professionnels : Professions Libérales
         * MN 206101 /  Professionnels Privé : Promoteurs
         */
        codeMarche: string;
        /**
         * Libellé de désignation d'un segment clientèle.
         */
        libelleLongCodeMarche: string;
        /**
         * Libellé court de la segmentation clientèle pour affichage sur le poste de travail.
         * Libellé à caractère confidentiel pour ne pas être interprété par la clientèle.
         */
        libelleCourtCodeMarche: string;
        /**
         * Ce libellé permet de restituer le libellé de la famille du code marché.
         *
         * Exemple :
         * 101 : Particuliers
         */
        libelleFamilleCodeMarche: string;
        /**
         * Détermine la typologie de segmentation clientèle. Correspond au 2 premiers caractères du code segmentation sur 8 caractères.
         *
         * Exemple :
         * 'MN' : Marché National
         */
        codeTypeSegmentation: string;
    }
    interface IDonneeIdentification {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou
         * un Etablissement du réseau CE est répertoriée par la
         * Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le
         *  SI d'un Etablissement.
         *  Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
        /**
         * Détermine le type de personnalité juridique de la personne.
         *
         * Valeurs :
         * 1=personne physique
         * 2=personne morale / assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Libelle du code qui indique le type de personnalité juridique de la personne.
         */
        libellePersonnaliteJuridique: string;
        /**
         * Définit l'état de la personne ou de l'entité titulaire à une date donnée dans la gestion administrative des personnes :
         *
         *            Valeurs :
         * '0'        Actif
         * '1'        Cloturé
         */
        codeEtatPersonne: string;
        /**
         * Détermine la relation de la personne connue avec
         * l'Etablissement :
         * - client : personne détentrice de contrat(s) de produit / service
         * - tiers : personne non 'client' en lien avec une personne 'client' - lien particulier ou professionnel (ex : participant à un contrat, représentant légal)
         * - prospect : personne n'étant ni client ni tiers
         *
         * Valeurs possibles :
         * '0'        Personne connue comme client
         * '1'        Personne connue comme tiers
         * '2'        Personne connue comme prospect
         */
        codeTypeRelation: string;
        /**
         * Libelle du code qui indique le type de relation de la personne avec l’établissement
         */
        libelleTypeRelation: string;
        /**
         * Date de première entrée en relation d'une personne
         * donnée avec l'Etablissement (CE).
         * Type date au format yyyy-MM-dd
         */
        dateEntreeRelation: string;
        identifiantClientBad: string;
    }
    interface IIdentification {
        donneeIdentification: IDonneeIdentification;
        lutteAntiBlanchiment: ILutteAntiBlanchiment;
        listMarche: Array<ICodeMarche>;
        suiviComercial: ISuiviCommercial;
        informationsEAI: IInformationsEAI;
    }
    interface ILutteAntiBlanchiment {
        /**
         * Code alerte VAO. Il indique si une alerte est détectée lors du filtrage.
         * Valeurs :
         * - 'O' : Alerte
         * - 'N' : Pas d'alerte
         */
        codeAlerteVAO: boolean;
        /**
         * Message VAO. Il permet de de préciser à l'agent s'il y a alerte ou non sur la personne filtrée.
         */
        messageAlerteVAO: string;
    }
    interface ISuiviCommercial {
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Correspond à un type : siège, agence, service, poste fonctionnel, ...
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantEDSSuiviCommercial: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente.
         *
         * Valeurs :
         * '001'      poste fonctionnel
         * '002'      service
         * '003'      agence
         * '004'      unité commerciale
         * '005'      secteur commercial
         * '006'      groupe commercial
         * '007'      direction
         * '008'      siège
         * '009'      entité administrative
         * '010'      GAB
         */
        typeEDSSuiviCommercial: string;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceExterneEDSSuiviCommercial: number;
        /**
         * Alimenté uniquement pour les EDS de type Poste fonctionnel (001)
         *
         * Numéro d'identification d'un agent au sein d'un établissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Numéro chrono attribué par le système, pour les établissements.
         * Référence unique dans MYSYS.
         */
        identifiantAgent: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation :
         *      - Si l'EDS n'est pas un Poste fonctionnel, du libellé court du type d'EDS et de la désignation de l'EDS.
         *      - Si c'est un Poste fonctionnel, du nom et du prénom de l'agent titulaire du Poste fonctionnel.
         */
        designationCourteEDS: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation :
         *      - Si l'EDS n'est pas un Poste fonctionnel, du libellé long du type d'EDS et de la désignation de l'EDS.
         *      - Si c'est un Poste fonctionnel, de la civilité, du nom et du prénom de l'agent titulaire du Poste fonctionnel.
         */
        designationLongueEDS: string;
    }
    interface IInformationsEAI {
        /**
         * Indique l'état du dossier EAI pour OVAD/VMC.
         *
         * Valeurs :
         * - 'O' : Eligible EAI – auto certification signée
         * - 'R' : Eligible EAI - auto certification non renseignée ou à confirmer
         * - 'S' : Eligible EAI - auto certification non signée
         * - 'N' : Offre non éligible EAI
         */
        codeStatutEAI: string;
        /**
         * Libellé correspondant au code statut EAI :
         *
         * - Eligible EAI – auto certification signée
         * - Eligible EAI - auto certification non renseignée ou à confirmer
         * - Eligible EAI - auto certification non signée
         * - Offre non éligible EAI
         */
        libelleCodeStatutEAI: string;
        /**
         * Indique le mode de signature de l'auto-certification EAI choisi par le client.
         *
         * Valeurs :
         * - 'P' : Signature papier
         * - 'S' : Signature SED
         * - 'G' : Signature SAG
         */
        codeModeSignatureEAI: string;
        /**
         * Libellé correspondant au code du mode de signature :
         *
         * - Papier
         * - Electronique
         * - Electronique en agence
         */
        libelleCodeModeSignatureEAI: string;
        /**
         * Détermine si l'ouverture d'un compte éligible FATCA est autorisée au poste de travail. Si les personnes d'un CB ne sont pas en conformité avec la législation FATCA, l'ouverture du compte sera impossible.
         *
         * Valeurs :
         * - 'O' : Ouverture autorisée
         * - 'N' : Ouverture impossible
         */
        indicateurOuvertureCompte: string;
    }
}

declare module Operation2Librairie.ParcoursSct.Modeles.Tableaux {
    /**
     * Classe de definition du tableau Historique Evenement
     */
    class TableauHistoriqueEvenement implements MyWay.UI.ImwTableOptions {
        tableauColonneDateHeure: MyWay.UI.ImwTableColumnOptions;
        tableauColonneEvenement: MyWay.UI.ImwTableColumnOptions;
        tableauColonneActeur: MyWay.UI.ImwTableColumnOptions;
        tableauColonneDescription: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: any[];
        selectedItems: any[];
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module Operation2Librairie.ParcoursSct.Modeles.Tableaux {
    /**
     * Classe de definition du tableau Transactions Connexes
     */
    class TableauTransactionConnexe implements MyWay.UI.ImwTableOptions {
        tableauColonneTypeTransaction: MyWay.UI.ImwTableColumnOptions;
        tableauColonneDateReglement: MyWay.UI.ImwTableColumnOptions;
        tableauColonneRefTransactionAbs: MyWay.UI.ImwTableColumnOptions;
        tableauColonneStatus: MyWay.UI.ImwTableColumnOptions;
        tableauColonneMotif: MyWay.UI.ImwTableColumnOptions;
        tableauColonneMontant: MyWay.UI.ImwTableColumnOptions;
        tableauColonneInstructionEntrante: MyWay.UI.ImwTableColumnOptions;
        tableauColonneInstructionSortante: MyWay.UI.ImwTableColumnOptions;
        width: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: any[];
        selectedItems: any[];
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module Operation2Librairie.Services.Application {
    /**
     * Interface de la classe GestionListeCleValeurService
     */
    interface IGestionListeParametreService {
        chargerListesParametres(): ng.IPromise<boolean>;
        getListeCanaux(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsAllerSDD(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsAllerSCT(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsRetour(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsComplementaires(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeFiltragesConnexes(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeOriginesRecall(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifsRecall(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifsRecallFraude(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifsAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutAllerAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutComplementaireAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutComplementaireRappel(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifRetourAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifRemboursementAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypesReponseRecall(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsAbsInstEntrantAller(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsAbsInstSortantAller(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsAbsInstEntrantRetour(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsComplementairesInst(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeOffresSct(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypesTransactionAllerInst(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypesInstructionAller(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypesInstructionRetour(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeSensEchange(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifsRetourSct(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeCanalInst(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsTrnRestourSct(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsTrnRecallAller(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsTrnRecallRetour(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeFraisAutresBanques(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTransactionInterne(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypesCompteImputer(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypesTransactionPaiement(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutComplAllerSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeOffreSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeFiltrageConnexeSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifAnulationSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifReversementSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMandatModifieSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutSddAnnuRevers(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutComplSddAnnuRevers(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifReponseNegative(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutInstructionEntranteSddAller(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutInstructionSortanteSddAller(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutInstructionEntranteSddRetour(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutComplInstructionSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeInstructionAllerSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeInstructionRetourSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutPrelevement(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeInstructionAllerSddSortant(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeInstructionAllerSortantSct(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeTransactionOnUs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeTransactionNotOnUs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutCourrier(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTarificationClient(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeEnvoiCourrierAutomatique(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeEtatRetour(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeCompteACrediter(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutInstructionEntranteAllerAuthorise(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsAbsInstSortantAllerComplet(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsAbsInstEntrantRetourComplet(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifsRecallRfro(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifsRecallComplet(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeTransactionLie(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutTransactionConnexe(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getlisteMotifRetourRemboursement(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeTransactionConnexe(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifRejetSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifRetourSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifRemboursementSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeReponseReclamationFond(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeTypeReponseReclamationDate(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutReclamation(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getlisteMotifReponseReclamationsFond(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifLienTransaction(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getlisteMotifReponseReclamationsDate(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeDemandeDeSort(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutRechercheInstAllerSortantSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutRechercheInstRetourSdd(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeDateActivationAbs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getValeurViaCle(listeAExplorer: Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>, cleARechercher: string): string;
        getCleViaValeur(listeAExplorer: Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>, valeurARechercher: string): string;
        getValeurViaCleEtParametre(listeAExplorer: Array<Operation2Librairie.Modeles.Rest.SepaPaiement.TypologieFluxAbs.IParametrage>, cle: string, parametre: string): string;
        getToutesLesListes(): Array<Operation2Librairie.Modeles.Rest.SepaPaiement.TypologieFluxAbs.IParametrage>;
    }
}

declare module Operation2Librairie.ParcoursSct.Services.Application {
    /**
     * Interface de la classe ListeQuotiteService
     */
    interface IHistoriqueEvenementService {
        getListeHistoriqueEvenement(clePrimaireTransaction: number, typeAppel: string): ng.IPromise<Modeles.Application.IHistoriqueEvenement[]>;
    }
}

declare module Operation2Librairie.ParcoursSct.Services.Application {
    /**
     * Interface de la classe ListeQuotiteService
     */
    interface IInfosDemandeConnexeService {
        getInfosDemandeConnexe(parametresAppel: Operation2Librairie.Modeles.Rest.SepaPaiement.RechDemandeConnexe.IParametreAppel): ng.IPromise<Modeles.Application.IInfosDemandeConnexe>;
    }
}

declare module Operation2Librairie.ParcoursSct.Services.Application {
    /**
     * Interface de la classe RechercheTypeTransactionService
     */
    interface IRechercheTypeTransactionService {
        getTypeTransaction(query: Operation2Librairie.Modeles.Rest.SepaPaiement.RechTypePaiement.IParametreAppel): ng.IPromise<string>;
    }
}

declare module Operation2Librairie.ParcoursSct.Services.Application {
    /**
     * Interface de la classe ListeQuotiteService
     */
    interface ITransactionConnexeService {
        getListeTransactionConnexe(clePrimaireTransaction: number): ng.IPromise<Operation2Librairie.ParcoursSct.Modeles.Application.ITransactionConnexe[]>;
    }
}

declare module Operation2Librairie.Services.Rest.EntiteTitulaire {
    /**
     * Interface de la classe
     */
    interface IAdresseEtService {
        getAdresseET(codeEtablissement: string, identifiantTiers: number): ng.IPromise<Array<Modeles.Rest.EntiteTitulaire.AdresseEt.IAdresseET>>;
    }
}

declare module Operation2Librairie.Services.Rest.EntiteTitulaire {
    /**
     * Interface de la classe
     */
    interface IInformationEntiteTitulaireService {
        getInformationEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Operation2Librairie.Modeles.Rest.EntiteTitulaire.InformationEntiteTitulaire.IInformationEntiteTitulaire>;
    }
}

declare module Operation2Librairie.Services.Rest.OperationFinanciereService {
    interface IParametreAppel {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        cleRib: number;
    }
    /**
     * Interface de la classe lzcture quotités
     */
    interface IConversionRibBicIbanService {
        conversionRibBicIban(query: IParametreAppel): ng.IPromise<Modeles.Rest.OperationFinanciereService.IConversionRibBicIban>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe demande multi courrier
     */
    interface IActionMultiRappelVirService {
        postActionMultiRappelVir(body: Operation2Librairie.Modeles.Rest.SepaPaiement.ActionMultiRappelVir.IParametreAppel): ng.IPromise<Array<Operation2Librairie.Modeles.Rest.SepaPaiement.ActionMultiRappelVir.ITraitementRappelVirement>>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe lzcture quotités
     */
    interface IAnnMultiVirementService {
        postAnnMultiVirement(body: Operation2Librairie.Modeles.Rest.SepaPaiement.AnnMultiVirement.IParametreAppel): ng.IPromise<Array<Operation2Librairie.Modeles.Rest.SepaPaiement.AnnMultiVirement.ITraitementAnnulationVirement>>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe lzcture quotités
     */
    interface IAnnUnitPrelevementService {
        postAnnUnitPrelevement(body: Operation2Librairie.Modeles.Rest.SepaPaiement.AnnUnitPrelevement.IParametreAppel): ng.IPromise<Operation2Librairie.Modeles.Rest.SepaPaiement.AnnUnitPrelevement.ITransactionAnnulPrelevement>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe lzcture quotités
     */
    interface IAnnUnitVirementService {
        postAnnUnitVirement(body: Operation2Librairie.Modeles.Rest.SepaPaiement.AnnUnitVirement.IParametreAppel): ng.IPromise<Operation2Librairie.Modeles.Rest.SepaPaiement.AnnUnitVirement.ITransactionAnnulationVirement>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe demande multi courrier
     */
    interface IDemandeMultiCourrierService {
        postDemandeMultiCourrier(body: Operation2Librairie.Modeles.Rest.SepaPaiement.DemandeMultiCourrier.IParametreAppel): ng.IPromise<Array<Operation2Librairie.Modeles.Rest.SepaPaiement.DemandeMultiCourrier.IAnalyseTraitement>>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe demande multi courrier
     */
    interface IDemandeSortService {
        postDemandeSort(body: Operation2Librairie.Modeles.Rest.SepaPaiement.DemandeSort.IParametreAppel): ng.IPromise<Operation2Librairie.Modeles.Rest.SepaPaiement.DemandeSort.ITransactionDemandeSort>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IDetailImputationService {
        getDetailImputation(query: Modeles.Rest.SepaPaiement.DetailImputation.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.DetailImputation.IImputation>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe lecture Détail d'une transaction
     */
    interface IDetailTransactionService {
        getDetailTransaction(query: Modeles.Rest.SepaPaiement.DetailTransaction.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.DetailTransaction.ITransaction>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IDetailTrnInstructionService {
        getDetailTransactions(clePrimaireTransaction: number): ng.IPromise<Array<Modeles.Rest.SepaPaiement.DetailTrnInstruction.ITransaction>>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IExportInstructionService {
        postExportInstruction(body: Operation2Librairie.Modeles.Rest.SepaPaiement.ExportInstruction.IParametreAppel): ng.IPromise<Array<Operation2Librairie.Modeles.Rest.SepaPaiement.ExportInstruction.IExportInstruction>>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IExportTransInstructionService {
        postExportTransInstruction(body: Operation2Librairie.Modeles.Rest.SepaPaiement.ExportTransInstruction.IParametreAppel): ng.IPromise<Array<Operation2Librairie.Modeles.Rest.SepaPaiement.ExportTransInstruction.IExportTrnInstruction>>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IExportTransactionService {
        postExportTransaction(body: Operation2Librairie.Modeles.Rest.SepaPaiement.ExportTransaction.IParametreAppel): ng.IPromise<Array<Operation2Librairie.Modeles.Rest.SepaPaiement.ExportTransaction.IExportTransaction>>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IParametrageSepaService {
        getParametrageSepa(query: Modeles.Rest.SepaPaiement.ParametrageSepa.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.ParametrageSepa.IDetailsParametre>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe lecture Détail d'une connexe
     */
    interface IRechDemandeConnexeService {
        getRechDemandeConnexe(query: Modeles.Rest.SepaPaiement.RechDemandeConnexe.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.RechDemandeConnexe.IDetailsConnexe>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IRechercheHistoriqueService {
        getRechercheHistorique(query: Modeles.Rest.SepaPaiement.RechercheHistoriqueTransaction.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.RechercheHistoriqueTransaction.IListeHistorique[]>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IRechLienTransactionService {
        getRechLienTransaction(query: Modeles.Rest.SepaPaiement.RechLienTransaction.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.RechLienTransaction.ITransactionLiee[]>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IRechTransInstructionlService {
        postRechTransInstruction(body: Operation2Librairie.Modeles.Rest.SepaPaiement.RechTransInstruction.IParametreAppel): ng.IPromise<Operation2Librairie.Modeles.Rest.SepaPaiement.RechTransInstruction.IRechTransInstruction>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IRechTypePaiementService {
        postRechTypePaiement(body: Modeles.Rest.SepaPaiement.RechTypePaiement.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.RechTypePaiement.ITypePaiement[]>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe demande multi courrier
     */
    interface IRechercheCourrierService {
        getRechercheCourrier(query: Modeles.Rest.SepaPaiement.RechercheCourrier.IParametreAppel): ng.IPromise<Operation2Librairie.Modeles.Rest.SepaPaiement.RechercheCourrier.ICourrier>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IRechercheInstructionService {
        postRechercheInstruction(body: Modeles.Rest.SepaPaiement.RechercheInstruction.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.RechercheInstruction.IRechercheInstruction>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IRechercheRappelService {
        postRechercheRappel(body: Operation2Librairie.Modeles.Rest.SepaPaiement.RechercheRappel.IParametreAppel): ng.IPromise<Operation2Librairie.Modeles.Rest.SepaPaiement.RechercheRappel.IRechercheRappel>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe
     */
    interface IRechercheTransactionService {
        postRechercheTransaction(body: Modeles.Rest.SepaPaiement.RechercheTransaction.IParametreAppel): ng.IPromise<Modeles.Rest.SepaPaiement.RechercheTransaction.IRechercheTransaction>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe créa réclamation unitaire
     */
    interface IReclamUnitVirementService {
        postActionReclaCreation(body: Operation2Librairie.Modeles.Rest.SepaPaiement.ReclamUnitVirement.IParametreAppel): ng.IPromise<Operation2Librairie.Modeles.Rest.SepaPaiement.ReclamUnitVirement.ITransactionReclamationVirement>;
    }
}

declare module Operation2Librairie.Services.Rest.SepaPaiement {
    /**
     * Interface de la classe lecture des typologies de flux ABS
     */
    interface ITypologieFluxAbsService {
        getTypologieFluxAbs(codeRubriqueParametre: string, numeroSequence?: number, libelleLongABS?: string): ng.IPromise<Modeles.Rest.SepaPaiement.TypologieFluxAbs.ITypologieFluxABS>;
    }
}

declare module Operation2Librairie.Services.Rest.Structure {
    interface IParametreAppelCoordonneeEds {
        codeEtablissement: string;
        identifiantSite: number;
    }
    /**
     * Interface de la classe
     */
    interface ICoordonneeEDSService {
        getCoordonneeEde(query: IParametreAppelCoordonneeEds): ng.IPromise<Modeles.Rest.Structure.CoordonneeEDS.ICoordonneeEDS>;
    }
}

declare module Operation2Librairie.Services.Rest.Structure {
    interface IParametreAppelEtablissementMysys {
        typeListe: string;
    }
    /**
     * Interface de la classe
     */
    interface IEtablissementMysysService {
        getListeEtablissement(query: IParametreAppelEtablissementMysys): ng.IPromise<Modeles.Rest.Structure.EtablissementMysys.IListeEtablissement>;
    }
}

declare module Operation2Librairie.Services.Rest.Structure {
    interface IParametreAppelGuichetEds {
        codeEtablissement: string;
        identifiantInterneEDS: number;
        typeGuichetRecherche: string;
    }
    /**
     * Interface de la classe
     */
    interface IGuichetEdsService {
        getGuichet(query: IParametreAppelGuichetEds): ng.IPromise<Modeles.Rest.Structure.GuichetEds.IGuichetEDS>;
    }
}

declare module Operation2Librairie.Services.Rest.Structure {
    interface IParametreAppelInfoEds {
        codeEtablissement: string;
        typeRechercheEDS: string;
        referenceInterneEDS: number;
        typeEDS: string;
        referenceExterneEDS: number;
    }
    /**
     * Interface de la classe
     */
    interface IInfoEdsService {
        getInformation(query: IParametreAppelInfoEds): ng.IPromise<Modeles.Rest.Structure.InfoEds.ICaracteristiqueEDS>;
    }
}

declare module Operation2Librairie.Services.Rest.SyntheseService {
    interface IParametreAppel {
        typeRecherche: string;
        codeEtatRecherche: string;
        indicRestitComptes88: string;
    }
    /**
     * Interface de la classe
     */
    interface IEquipementClientService {
        postEquipementClient(body: Array<Operation2Librairie.Modeles.Rest.SyntheseService.EquipementClient.IClient>, query: IParametreAppel): ng.IPromise<Operation2Librairie.Modeles.Rest.SyntheseService.EquipementClient.IEquipementClient>;
    }
}

declare module Operation2Librairie.Services.Rest.SyntheseService {
    interface IParametreAppelMiniProfil {
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        codeProduitService: string;
        referenceProduitService: string;
        numeroCarteBancaire: string;
        identifiantEntiteTitulaire: number;
        identifiantTiers: number;
        typeRecherche: string;
        typeRestitution: string;
    }
    /**
     * Interface de la classe
     */
    interface IMiniProfilService {
        getMiniProfil(query: IParametreAppelMiniProfil): ng.IPromise<Array<Operation2Librairie.Modeles.Rest.SyntheseService.MiniProfil.ICaracteristiqueMiniProfil>>;
    }
}

declare module Operation2Librairie.Services.Rest.Tiers {
    /**
     * Interface de la classe
     */
    interface IAdresseService {
        getAdresse(codeEtablissement: string, idPersonne: number): ng.IPromise<Array<Modeles.Rest.Tiers.Adresse.IAdresse>>;
    }
}

declare module Operation2Librairie.Services.Rest.Tiers {
    /**
     * Interface de la classe
     */
    interface IIdentificationService {
        getIdentification(codeEtablissement: string, numeroPersonne: number): ng.IPromise<Modeles.Rest.Tiers.Identification.IDonneeIdentification>;
    }
}
