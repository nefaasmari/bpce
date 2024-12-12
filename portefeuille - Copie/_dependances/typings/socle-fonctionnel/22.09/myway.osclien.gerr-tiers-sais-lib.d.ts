
declare module gestionTiers {
    var app: any;
}

declare module gestionTiers.Services {
    class TierSaisissantService {
        private serviceAgentExtended;
        private $q;
        private messagesService;
        private modalService;
        static $inject: string[];
        rechercheMultiCrit: Modeles.RechercheMultiCritereTiers;
        parametreTableau: MyWay.UI.ImwTableOptions;
        requetePrecedente: gestionTiers.Modeles.IParametreRequeteListe;
        private _listeTiers;
        listeTiers: Array<Modeles.ITiersSaisissant>;
        private _tierSelectionne;
        tierSelectionne: Modeles.ITiersSaisissant;
        nombreTotalTiers: number;
        nombreTiersSaisissantsEnRejet: number;
        pagePrecedente: boolean;
        pageSuivante: boolean;
        pageCourante: number;
        actionEnCours: boolean;
        methodeQuitterProcessus: () => void;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, messagesService: Services.MessagesService, modalService: MyWay.UI.ModalService);
        init(): void;
        reinitialiserFormulaire(): void;
        afficherRechercheTiers(parametre: Modeles.IParametresRechercheTiers): ng.IPromise<gestionTiers.Modeles.ITiersSaisissant>;
        afficherDetailTiers(idtInterneTiersSaisissantRefer: number, parametre: Modeles.IParametresRechercheTiers): ng.IPromise<any>;
        chargerDetailTiersSaisissant(idtInterneTiersSaisissantRefer: number, codeEtablissement: string): ng.IPromise<Modeles.ITiersSaisissantModification>;
        chargerListeTiersSaisissants(requete: Modeles.IParametreRequeteListe): ng.IPromise<Array<Modeles.ITiersSaisissant>>;
        chargerListeTiersSaisissantsSansMiseAJour(requete: Modeles.IParametreRequeteListe): ng.IPromise<Array<Modeles.ITiersSaisissant>>;
        ajouterTier(tier: Modeles.ITiersSaisissant, codeEtablissement: string): ng.IPromise<Modeles.ITiersSaisissant>;
        modifierTier(tier: Modeles.ITiersSaisissant, codeEtablissement: string): ng.IPromise<Modeles.ITiersSaisissant>;
        supprimerTier(tier: Modeles.ITiersSaisissant, codeEtablissement: string): ng.IPromise<void>;
        codeActionCorrespondant(ascendant: boolean): string;
        chargerTiersPrecedent(): ng.IPromise<void>;
        chargerTiersSuivant(): ng.IPromise<void>;
        recupererNombreTiersEnRejet(requete: Modeles.IParametreRequeteListe): ng.IPromise<gestionTiers.Communs.CompteurErreur>;
    }
}

declare module gestionTiers.Services {
    const enum LogType {
        DEBUG = 1,
        ERROR = 2,
        INFO = 3,
        WARNING = 4,
    }
    class MessagesService {
        private modalService;
        static $inject: string[];
        private CLASS_NAME;
        private logger;
        _logType: string;
        constructor(modalService: MyWay.UI.ModalService);
        /**
         * Méthode d'affichage des logs dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        /**
         * Méthode d'affichage des logs en mode DEBUG dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        debug(message: string, object?: any): void;
        /**
         * Méthode d'affichage des logs en mode ERROR dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        error(message: string, object?: any): void;
        /**
         * Méthode d'affichage des logs en mode INFO dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        info(message: string, object?: any): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warning(message: string, object?: any): void;
        showErrorPopupNonBloquante(titre: string, message: string): ng.IPromise<any>;
        showErrorPopupBloquante(titre: string, message: string): ng.IPromise<any>;
        afficherPopUpConfirmation(titre: string, message: string): ng.IPromise<any>;
    }
}

declare module gestionTiers {
    class PopInDetailTiersControleur {
        private $modalInstance;
        private parametres;
        private tiers;
        private tierSaisissantService;
        private messagesService;
        static $inject: string[];
        private mode;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, parametres: gestionTiers.Modeles.IParametresRechercheTiers, tiers: gestionTiers.Modeles.ITiersSaisissant, tierSaisissantService: gestionTiers.Services.TierSaisissantService, messagesService: gestionTiers.Services.MessagesService);
        valider(): void;
        annuler(): void;
    }
}

declare module gestionTiers {
    class PopInTiersRechercheControleur {
        private $modalInstance;
        private parametres;
        private tierSaisissantService;
        private messagesService;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, parametres: gestionTiers.Modeles.IParametresRechercheTiers, tierSaisissantService: gestionTiers.Services.TierSaisissantService, messagesService: gestionTiers.Services.MessagesService);
        validerDisponible: boolean;
        valider(): void;
        annuler(): void;
        chargementRecherche: boolean;
        chargerPrecedents(): void;
        chargerSuivants(): void;
        actesSuivantsDisponibles: boolean;
        actesPrecedentsDisponibles: boolean;
    }
}

declare module gestionTiers {
    function formulaireTierDirective(): ng.IDirective;
    class FormulaireTierControlleur {
        private serviceAgent;
        private tierSaisissantService;
        static $inject: string[];
        private tier;
        private mode;
        private donnees;
        listCategories: gestionTiers.Communs.CritereCleLibelle[];
        private _categorie;
        categorie: gestionTiers.Communs.CritereCleLibelle;
        private _cp;
        private _ville;
        cp: string;
        ville: string;
        designation: string;
        etageAppartement: string;
        batiment: string;
        voie: string;
        lieuDit: string;
        bic: string;
        ibanExistant: boolean;
        listeErreurs: Array<Communs.IErreurFormulaire>;
        afficherErreur: boolean;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, tierSaisissantService: gestionTiers.Services.TierSaisissantService);
        readOnly(): boolean;
        enEdition(): boolean;
        verificationReferenceExterne(): void;
        goToReferenceExterne(ancre: string): void;
    }
}

declare module gestionTiers {
    class RechercheTiersControlleur implements MyWay.UI.ISelectionChangeHandler, MyWay.UI.IMwTableHandler {
        private serviceAgent;
        private tierSaisissantService;
        private $rootScope;
        private mwEvents;
        private messagesService;
        static $inject: string[];
        donnees: Modeles.IParametresRechercheTiers;
        afficherWarning: boolean;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        listeWarnings: any[];
        listeErreurs: Array<Communs.IErreurFormulaire>;
        tableauComplexeCurrentPage: number;
        masquerTableauPremierAppel: boolean;
        rechercheMultiCrit: Modeles.RechercheMultiCritereTiers;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        critereRecherche: string;
        designation: string;
        constantesRecherche: {
            CODE_ACTION_CATEGORIE_ASC: string;
            CODE_ACTION_CP_ASC: string;
            CODE_ACTION_DESIGNATION_ASC: string;
            CODE_ACTION_IBAN_ASC: string;
            CODE_ACTION_REF_EXTERNE_ASC: string;
            CODE_ACTION_EN_REJET_ASC: string;
        };
        requetePrecedente: gestionTiers.Modeles.IParametreRequeteListe;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, tierSaisissantService: gestionTiers.Services.TierSaisissantService, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, messagesService: Services.MessagesService);
        resetAndClear(): void;
        tableauColonneOptionsType: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsIban: MyWay.UI.ImwTableColumnOptions;
        bic: string;
        tableauColonneOptionsDesignation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsReferenceExterne: MyWay.UI.ImwTableColumnOptions;
        onSelectionChange(selectedObject: Modeles.ITiersSaisissant): void;
        onShowDetail(selectedObject: Object): void;
        onHideDetail(selectedObject: Object): void;
        onPageChange(currentPage: number): void;
        afficherErreur: boolean;
        goToAnchor(ancre: string): void;
        afficherTableauTiers: boolean;
        rechercher(): void;
        titreNombreTier: string;
        titrePagination: string;
        pagesTotales: number;
        modifierRecherche(): void;
        verifierTierEnRejet(): void;
        chargerTiersAVerifier(): void;
    }
}

declare module gestionTiers {
    function rechercheTiersDirective(): ng.IDirective;
}

declare module gestionTiers {
    class SyntheseListeWarningControlleur {
        nbErreurs: number;
        constructor();
    }
}

declare module gestionTiers {
    function SyntheseListeWarningDirective(): ng.IDirective;
}

declare module gestionTiers.Communs {
    class CompteurErreur {
        compteur: number;
        erreurMessage: string;
        constructor(compteur: number, erreurMessage: string);
    }
}

declare module gestionTiers.Communs {
    class ConstantesEtatFormulaire {
        static CREATION: string;
        static SUPPRESSION: string;
        static EDITION: string;
        static CONSULTATION: string;
    }
    module ConstantesUrl {
        const URL_TIER: string;
        const URL_TIER_DETAIL: string;
    }
    module ConstantesHabilitation {
        const SHNC01: string;
    }
    module ConstantesDonneesDelocalisees {
        const CTNCTI: string;
    }
    module ConstantesRecherche {
        const CODE_ACTION_NOMBRE_TIERS_EN_REJET: string;
        const CODE_ACTION_CATEGORIE_ASC: string;
        const CODE_ACTION_CATEGORIE_DESC: string;
        const CODE_ACTION_EN_REJET_DESC: string;
        const CODE_ACTION_EN_REJET_ASC: string;
        const CODE_ACTION_IBAN_DESC: string;
        const CODE_ACTION_IBAN_ASC: string;
        const CODE_ACTION_REF_EXTERNE_ASC: string;
        const CODE_ACTION_REF_EXTERNE_DESC: string;
        const CODE_ACTION_CP_ASC: string;
        const CODE_ACTION_CP_DESC: string;
        const CODE_ACTION_DESIGNATION_ASC: string;
        const CODE_ACTION_DESIGNATION_DESC: string;
        const NOMBRE_TIERS_PAR_PAGE: number;
    }
    module ConstantesEvents {
        const CHARGER_SUIVANT: string;
        const CHARGER_PRECEDENT: string;
        const ACTES_SUIVANT_DISPONIBLE: string;
        const ACTES_PRECECDENT_DISPONIBLE: string;
        const CHARGEMENT_RECHERCHE: string;
    }
    module Lisa {
        const SORTIE: number;
        const ECRAN_RECHE: number;
        const ECRAN_SUPPR: number;
        const ECRAN_MODIF: number;
        const ECRAN_CREAT: number;
    }
}

declare module gestionTiers.Communs {
    class CritereCleLibelle {
        cle: string;
        libelle: string;
        constructor(cle: string, libelle: string);
    }
}

declare module gestionTiers.Communs {
    /**
     * Interface données délocalisées
     */
    interface IDonneesDelocalisees {
        donneesDelocaliseesCTNCTI: Array<IDonneesDelocaliseesItem>;
    }
    /**
     * Interface élément de données délocalisées
     */
    interface IDonneesDelocaliseesItem {
        Key: string;
        Value: string;
    }
}

declare module gestionTiers.Communs {
    /**
     * Interface habilitations
     */
    interface IErreurFormulaire {
        libelle: string;
        ancre: string;
    }
}

declare module gestionTiers.Utilitaires {
    class Mappeur {
        static tierModificationDepuisTier(tier: Modeles.ITiersSaisissant): Modeles.ITiersSaisissantModification;
    }
}

declare module gestionTiers.Modeles {
    /**
     * Interface habilitations
     */
    interface IParametresRechercheTiers {
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        donneeDelocs: gestionTiers.Communs.IDonneesDelocalisees;
    }
}

declare module gestionTiers.Modeles {
    class RechercheMultiCritereTiersData {
        referenceExterne: string;
        designation: string;
        codePostal: string;
        iban: string;
        bic: string;
        rechercheIbanValide: boolean;
        listCategories: Array<Communs.CritereCleLibelle>;
        categorie: Communs.CritereCleLibelle;
        critereRecherche: string;
        constructor(donneesDeloc: Communs.IDonneesDelocalisees);
        resetData(): void;
        isEmpty(): boolean;
    }
    class RechercheMultiCritereTiers {
        data: RechercheMultiCritereTiersData;
        isOpen: boolean;
        isEditable: boolean;
        chargementRecherche: boolean;
        constructor(donneesDeloc: Communs.IDonneesDelocalisees);
        toggleMultiCrit(): void;
        toggleEditMultiCrit(): void;
    }
}

declare module gestionTiers.Modeles {
    interface IListeTiersSaisissant {
        /**
         * Nombre de tiers saisissant en rejet
         */
        nombreTiersSaisissantsEnRejet: number;
        tiersSaisissants: Array<ITiersSaisissant>;
        /**
         * Indicateur signalant la présence d'une page suivante
         */
        pageSuivante: boolean;
        /**
         * Indicateur signalant la présence d'une page précédente
         */
        pagePrecedente: boolean;
        /**
         * Le nombre total de tiers correspondant à la recherche
         */
        nombreTotalTiers: number;
    }
}

declare module gestionTiers.Modeles {
    interface IParametreRequeteListe {
        codeEtab: string;
        codeAction: string;
        typeTiersSaisissant: string;
        numeroCodiquePosteActe: string;
        numeroPersonne: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        idtTiersSaisissant: number;
        codeBic: string;
        numeroIbanCompte: string;
        referenceExterneTiersSaisissant: string;
        codePostalPTT: string;
        libelleTiersSaisissant: string;
        refExtTiersPagination: string;
    }
}

declare module gestionTiers.Modeles {
    interface ITiersSaisissant {
        /**
         * Idt Tiers saisissant
         */
        idtTiersSaisissant: number;
        /**
         * Type Tiers saisissant
         */
        typeTiersSaisissant: string;
        /**
         * Numéro codique poste de l'acte
         */
        numeroCodiquePosteActe: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Libellé Tiers saisissant
         */
        libelleTiersSaisissant: string;
        /**
         * Désignation longue personne
         */
        designationLonguePersonne: string;
        /**
         * Ligne 2 adresse
         */
        etageAppartement: string;
        /**
         * Ligne 3 adresse
         */
        batiment: string;
        /**
         * Ligne 4 adresse
         */
        voie: string;
        /**
         * Ligne 5 adresse
         */
        lieuDit: string;
        /**
         * Ligne 6 adresse
         */
        codePostalEtVille: string;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Code guichet compte prélévement
         */
        codeGuichet: string;
        /**
         * Numéro compte prélèvement
         */
        numeroCompte: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephone: string;
        /**
         * Numéro fax
         */
        numeroFAX: string;
        /**
         * Code rejet adresse Tiers saisissant
         */
        codeRejetAdresseTiersSaisissant: string;
        /**
         * Indicateur liste à suivre
         */
        indicateurListeSuivre: string;
        /**
         * Code BIC
         */
        codeBic: string;
        /**
         * Numéro IBAN compte
         */
        numeroIbanCompte: string;
        /**
         * Idt interne Tiers saisissant Référ
         */
        idtInterneTiersSaisissantRefer: number;
        /**
         * Référence externe Tiers saisissant
         */
        referenceExterneTiersSaisissant: string;
        /**
         * ADRESSE EMAIL trésorerie
         */
        adresseEmailTresorerie: string;
    }
}

declare module gestionTiers.Modeles {
    interface ITiersSaisissantModification {
        /**
         * Type Tiers saisissant
         */
        typeTiersSaisissant: string;
        /**
         * Référence externe Tiers saisissant
         */
        referenceExterneTiersSaisissant: string;
        /**
         * Code BIC
         */
        codeBic: string;
        /**
         * Numéro IBAN compte
         */
        numeroIbanCompte: string;
        /**
         * Libellé Tiers saisissant
         */
        libelleTiersSaisissant: string;
        /**
         * Ligne 2 adresse
         */
        etageAppartement: string;
        /**
         * Ligne 3 adresse
         */
        batiment: string;
        /**
         * Ligne 4 adresse
         */
        voie: string;
        /**
         * Ligne 5 adresse
         */
        lieuDit: string;
        /**
         * Ligne 6 adresse
         */
        codePostalEtVille: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephone: string;
        /**
         * Numéro fax
         */
        numeroFAX: string;
        /**
         * ADRESSE EMAIL trésorerie
         */
        adresseEmailTresorerie: string;
        /**
         * Idt interne Tiers saisissant Référ
         */
        idtInterneTiersSaisissantRefer: number;
    }
}
