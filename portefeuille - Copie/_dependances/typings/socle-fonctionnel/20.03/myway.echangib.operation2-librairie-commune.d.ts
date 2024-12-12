
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
        var STATUT_ALLER: string;
        var STATUT_RETOUR: string;
        var STATUT_COMPLEMENTAIRE: string;
        var CANAL: string;
        var FILTRAGE_CONNEXE: string;
        var ORIGINE_RECALL: string;
        var MOTIF_RECALL: string;
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
        var SEPA_PAIEMENT_RECH_TRANS_INSTRUCTION: string;
        var SEPA_PAIEMENT_RECHERCHE_COURRIER: string;
        var SYNTHESE_SERVICE_EQUIPEMENT_CLIENT: string;
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
        var TYPE_APPEL_ABS: string;
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
        dateHeure: string;
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
        utilisateur: string;
        blockNote: string;
        dateReglementTransInitiale: string;
        typeDonneurOrdreConnexe: string;
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
        cleRefRegleRoutage: string;
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
         * WS7 NPS : statusReasonCode ==> codeMotifTransaction /
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
         * Origine du rappel
         *
         * Valeurs :
         *  - 'B' pour banque
         *  - 'C' pour client
         */
        origineRappel: string;
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
        referenceInstruction: string;
        /**
         * Référence du message XML
         */
        referenceMessage: string;
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
        refExterneRemise: string;
        listeCriteresTri: Array<ICritereTri>;
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
    }
}

declare module Operation2Librairie.Modeles.Rest.SepaPaiement.ExportTransaction {
    interface IParametreAppel {
        /**
         * Indique le type d'export souhaité
         *
         * Valeurs :
         *  - SCTA
         *  - SCTR
         *  - RECALLA
         *  - RECALLR
         *  - ACVS
         *  - INSTRUCTION
         *  - SDDA
         *  - ANNSDDA
         *  - REVSDDA
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
         * "Permet d'identifier le type de transaction de la connexe demandée
         *
         * 'pacs.004.001.02' => Réponse positive (921)
         * 'pacs.007.001.02' => Reversement SDD (986/996)
         * 'camt.056.001.01' => Annulation SDD (983/993)
         * 'camt.056.001.01' => Rappel SCT (922)
         * 'camt.029.001.03' => Réponse négative SCT (923)
         *
         * Table HH06 : Rubrique COHYTM"
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
         * "Permet d'indiquer si la demande de connexe, ou ses connexes associées (réponses positives) vont faire l'objet d'une tarification client
         *
         * Table HH06 : Rubrique CIHCTA"
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
         * "Précise si une réponse à été reçue sur une demande de RECALL émis ou si un retour/remboursement à été reçu sur ACVS émis
         * Mise à jour en BATCH
         * 'SPACES      Aucune connexe reçue
         * 'N'        Réponse Négative reçue sur RECALL émis
         * 'P'        Réponse Positive reçue sur RECALL émis
         * 'T'        Retour ACVS sur ACVS émis
         * 'B'        Remboursement ACVS sur ACVS émis
         *
         * Table HH06 : Rubrique CRH4RC"
         */
        typeConnexeRecu: string;
        /**
         * "Date de réception d'une réponse suite à recall émis, ou retour/remboursement suite à ACVS émis, mise à jour en batch
         *
         * Table HH06 : Rubrique DRH4RP"
         * Type date au format yyyy-MM-dd
         */
        dateReceptionConnexe: string;
        /**
         * "Motif d'une réponse négative reçue suite à recall émis, ou retour/remboursement suite à ACVS émis, mise à jour en batch
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
         * Table HH06 : Rubrique CMHYC5"
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
         * "Libellé saisie d'information sur la création de la demande de connexe
         *
         * Alimentation Table HH06 : Rubrique LMH4BN"
         */
        justificationDemandeConnexe: string;
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
        listeCriteresTri: Array<ICritereTri>;
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
         * rechTypePaiement - typePaiementSEPA
         */
        typePaiementSEPA: string;
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
        referenceInstruction: string;
        /**
         * Référence du message XML
         * WS3 NPS : instructionReference ==> referenceMessage /
         */
        referenceMessage: string;
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
         * Date de création de la remise Client
         * WS3 NPS : requestedCustomerDate ==> dateCreationRemiseMin /
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemiseMin: string;
        /**
         * Date de création de la remise Client
         * WS3 NPS : requestedCustomerDate ==> dateCreationRemiseMax /
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemiseMax: string;
        /**
         * Date de règlement recalculée
         * WS3 NPS : instructedDay ==> dateReglementRecalculeeMin /
         * Type date au format yyyy-MM-dd
         */
        dateReglementRecalculeeMin: string;
        /**
         * Date de règlement recalculée
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
        refExterneRemise: string;
        listeCriteresTri: Array<ICritereTri>;
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
         * WS3 NPS : initiatingPartyId ==> identifiantDonneurOrdre /
         */
        identifiantDonneurOrdre: string;
        /**
         * Nombre d’ordres dans l’instruction
         * WS3 NPS : numberOfTransactions ==> nombreTransactions /
         */
        nombreTransactions: number;
        /**
         * Date de création de la remise Client
         * WS3 NPS : requestedCustomerDate ==> dateCreationRemise /
         * Type date au format yyyy-MM-dd
         */
        dateCreationRemise: string;
        /**
         * Date de règlement recalculée
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
        typeReponseRappel: string;
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
        tableauColonneMontant: MyWay.UI.ImwTableColumnOptions;
        tableauColonneInstructionEntrante: MyWay.UI.ImwTableColumnOptions;
        tableauColonneInstructionSortante: MyWay.UI.ImwTableColumnOptions;
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

declare module Operation2Librairie.Services.Application {
    /**
     * Interface de la classe GestionListeCleValeurService
     */
    interface IGestionListeParametreService {
        chargerListesParametres(): ng.IPromise<boolean>;
        getListeCanaux(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsAller(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsRetour(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutsComplementaires(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeFiltragesConnexes(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeOriginesRecall(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifsRecall(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeMotifsAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutAllerAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutComplementaireAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeStatutComplementaireRappel(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
        getListeRetourAcvs(): Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>;
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
        getValeurViaCle(listeAExplorer: Array<Operation2Librairie.Modeles.Application.ListeParametrage.ICleValeur>, cleARechercher: string): string;
    }
}

declare module Operation2Librairie.ParcoursSct.Services.Application {
    /**
     * Interface de la classe ListeQuotiteService
     */
    interface IHistoriqueEvenementService {
        getListeHistoriqueEvenement(clePrimaireTransaction: number): ng.IPromise<Modeles.Application.IHistoriqueEvenement[]>;
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
    interface IExportInstructionService {
        postExportInstruction(body: Operation2Librairie.Modeles.Rest.SepaPaiement.ExportInstruction.IParametreAppel): ng.IPromise<Array<Operation2Librairie.Modeles.Rest.SepaPaiement.ExportInstruction.IExportInstruction>>;
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
     * Interface de la classe lecture des typologies de flux ABS
     */
    interface ITypologieFluxAbsService {
        getTypologieFluxAbs(codeRubriqueParametre: string, numeroSequence?: number, libelleLongABS?: string): ng.IPromise<Modeles.Rest.SepaPaiement.TypologieFluxAbs.ITypologieFluxABS>;
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
