
declare module gestionTiers {
    var app: any;
}

declare module gestionTiers.Services {
    class TierSaisissantService {
        private serviceAgentExtended;
        private $q;
        private modalService;
        static $inject: string[];
        rechercheMultiCrit: Modeles.RechercheMultiCritereTiers;
        private _listeTiers;
        listeTiers: Array<Modeles.ITiersSaisissant>;
        private _tierSelectionne;
        tierSelectionne: Modeles.ITiersSaisissant;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, modalService: MyWay.UI.ModalService);
        afficherRechercheTiers(parametre: Modeles.IParametresRechercheTiers): ng.IPromise<gestionTiers.Modeles.ITiersSaisissant>;
        chargerListeTiersSaisissants(requete: Modeles.IParametreRequeteListe): ng.IPromise<Array<Modeles.ITiersSaisissant>>;
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
    }
}

declare module gestionTiers {
    class PopInTiersRechercheControleur {
        private $modalInstance;
        private parametres;
        private tierSaisissantService;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, parametres: gestionTiers.Modeles.IParametresRechercheTiers, tierSaisissantService: gestionTiers.Services.TierSaisissantService);
        validerDisponible: boolean;
        valider(): void;
        annuler(): void;
    }
}

declare module gestionTiers {
    class RechercheTiersControlleur implements MyWay.UI.ISelectionChangeHandler, MyWay.UI.IMwTableHandler {
        private serviceAgent;
        private $location;
        private tierSaisissantService;
        private $rootScope;
        private mwEvents;
        private messagesService;
        static $inject: string[];
        private donnees;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        rechercheMultiCrit: Modeles.RechercheMultiCritereTiers;
        tableauComplexeCurrentPage: number;
        masquerTableauPremierAppel: boolean;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        listeErreurs: Array<Communs.IErreurFormulaire>;
        constantesRecherche: {
            CODE_ACTION_CATEGORIE: string;
            CODE_ACTION_CP: string;
            CODE_ACTION_DESIGNATION: string;
            CODE_ACTION_IBAN: string;
            CODE_ACTION_REF_EXTERNE: string;
        };
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $location: ng.ILocationService, tierSaisissantService: gestionTiers.Services.TierSaisissantService, $rootScope: ng.IRootScopeService, mwEvents: MyWay.UI.IMwEvents, messagesService: Services.MessagesService);
        modifier(): void;
        supprimer(): void;
        tableauColonneOptionsType: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsIban: MyWay.UI.ImwTableColumnOptions;
        bic: string;
        tableauColonneOptionsDesignation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCodePostal: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsReferenceExterne: MyWay.UI.ImwTableColumnOptions;
        onSelectionChange(selectedObject: Modeles.ITiersSaisissant): void;
        onShowDetail(selectedObject: Object): void;
        onHideDetail(selectedObject: Object): void;
        onPageChange(currentPage: number): void;
        afficherErreur: boolean;
        goToAnchor(ancre: string): void;
        afficherTableauTiers: boolean;
        rechercher(): void;
    }
}

declare module gestionTiers {
    function rechercheTiersDirective(): ng.IDirective;
}

declare module gestionTiers.Communs {
    class ConstantesUrl {
        static URL_TIER: string;
    }
    class ConstantesHabilitation {
        static SHNC03: string;
        static SHNC02: string;
    }
    class ConstantesDonneesDelocalisees {
        static CTNCTI: string;
    }
    class ConstantesRecherche {
        static CODE_ACTION_CATEGORIE: string;
        static CODE_ACTION_CP: string;
        static CODE_ACTION_DESIGNATION: string;
        static CODE_ACTION_IBAN: string;
        static CODE_ACTION_REF_EXTERNE: string;
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
        ligne2: string;
        /**
         * Ligne 3 adresse
         */
        ligne3: string;
        /**
         * Ligne 4 adresse
         */
        ligne4: string;
        /**
         * Ligne 5 adresse
         */
        ligne5: string;
        /**
         * Ligne 6 adresse
         */
        ligne6: string;
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
        ligne2: string;
        /**
         * Ligne 3 adresse
         */
        ligne3: string;
        /**
         * Ligne 4 adresse
         */
        ligne4: string;
        /**
         * Ligne 5 adresse
         */
        ligne5: string;
        /**
         * Ligne 6 adresse
         */
        ligne6: string;
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
