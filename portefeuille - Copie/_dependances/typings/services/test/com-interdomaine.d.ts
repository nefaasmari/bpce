
declare module myway.comInterdomaine {
    var app: ng.IModule;
}

declare module myway.comInterdomaine {
    class SaisirBicController {
        private $scope;
        private bic;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope);
        /**
         * @alias keydown
         * @description : event keydown
         * @param {JQueryKeyEventObject}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieBicIbanController {
        private $scope;
        private saisieBicIbanService;
        private iban;
        private bic;
        private readOnly;
        private enterKeypressEvent;
        private msgErreur;
        private isValid;
        private champUnique;
        private longueurIban;
        private iban1Keydown;
        private iban2Keydown;
        private iban3Keydown;
        private iban4Keydown;
        private iban5Keydown;
        private iban6Keydown;
        private iban7Keydown;
        private iban1;
        private iban2;
        private iban3;
        private iban4;
        private iban5;
        private iban6;
        private iban7;
        private iban8;
        private iban1BackFocus;
        private iban2BackFocus;
        private iban3BackFocus;
        private iban4BackFocus;
        private iban5BackFocus;
        private iban6BackFocus;
        private iban7BackFocus;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieBicIbanService: myway.comInterdomaine.SaisieBicIbanService);
        /**
         * @alias initIban
         * @description : initialise l'iban
         * @param {void}
         * @return {void}
         */
        private initIban();
        /**
         * @alias keydown
         * @description : event keydown
         * @param {JQueryKeyEventObject, numIban} : capture l'event + indique quel champ iban est concerné par le keydown
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject, numIban: number): void;
        /**
         * @alias backspaceIban
         * @description : retourne True si le backspace est possible/déclenchable d'un champ à l'autre
         * @param {champIban} : indique quel champ iban est concerné par le backspace
         * @return {boolean}
         */
        private backspaceIban(champIban);
        /**
         * @alias getIbanReconstruit
         * @description : construit l'iban : concaténation de tous les champs
         * @param {void}
         * @return {void}
         */
        private getIbanReconstruit();
        /**
         * @alias onBlur
         * @description : event onBlur
         * @param {void}
         * @return {void}
         */
        onBlur(): void;
        /**
         * @alias testeLongueurIbanPourGenererBic
         * @description : si la longueur de l'IBAN est valide, le bic peut être généré
         * @param {void}
         * @return {void}
         */
        private testeLongueurIbanPourGenererBic();
        /**
         * @alias controleGenrationBic
         * @description : Contrôle la validité de la clé de l'IBAN puis génère le bic.
         * @param {void}
         * @return {void}
         */
        private controleGenrationBic();
        /**
         * @alias genereBic
         * @description : génère le BIC
         * @param {void}
         * @return {void}
         */
        private genereBic();
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieBicIbanService {
        private serviceAgentExtended;
        private $q;
        private static OPE_FI_VERSION;
        static $inject: string[];
        constructor(serviceAgentExtended: core.AgentService, $q: ng.IQService);
        /**
         * @alias : getBic
         * @description : Méthode permettant de détermine le BIC à partir de l'IBAN passé en paramètre
         * @param {string} : IBAN
         * @return {ng.IPromise<string>} : BIC
         */
        getBic(iban: string): ng.IPromise<string>;
        /**
         * @alias : getValidationCleIban
         * @description : Méthode permettant de vaider la clé de l'IBAN
         * @param {string} : IBAN
         * @return {ng.IPromise<string>} : le compte
         */
        getValidationCleIban(iban: string): ng.IPromise<string>;
        /**
         * @alias : getLongueurIban
         * @description : Méthode retournant la longueur de l'IBAN d'un pays
         * @param {string} codePays code du pays.
         * @return {ng.IPromise<number>} : longueur de l'IBAN
         */
        getLongueurIban(codePays: string): ng.IPromise<number>;
    }
}

declare module myway.comInterdomaine {
    class IdentifiantBordereauService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: core.AgentService);
        /**
         * @alias getNumeroBordereau.
         * @return {string} identifant bordereau.
         */
        getNumeroBordereau(numeroPersonne: string, eligibiliteSag: boolean): ng.IPromise<string>;
        /**
         * @alias getIdentifiantBordereau.
         * @return {string} identifant bordereau.
         */
        getIdentifiantBordereau(numeroPersonne: string, eligibiliteSag: boolean): ng.IPromise<string>;
        /**
         * @Returns string
         * @alias getNumBordereau.
         * @param {void}
         * @description le numéro de bordereau
         */
        private getNumBordereau();
        /**
         * @Returns a currentPoste from the context {ng.IPromise<string>}.
         * @alias getCurrentPoste.
         * @param {void}
         * @description return le nom Poste du context.
         */
        private getCurrentPoste();
        /**
         * numéro de bordereau PTU
         */
        private getNumBordPTU();
    }
}

declare module myway.comInterdomaine {
    interface IBureauRattachementScope extends ng.IScope {
        viewModelBureauRattachementCtrl: SaisirBureauRattachementController;
    }
    class SaisirBureauRattachementController {
        private $scope;
        static MAX_LENGTH: number;
        private bureauRattachement;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: IBureauRattachementScope);
        /**
         * @ngdoc procedure
         * @name affineValue
         * @methodOf  myway.comInterdomaine.SaisirBureauRattachementController
         * @description
         * appplique un paddLeft sur le string en param si ca taille est < à 7
         * @param {string} la chaine de caractére a appliquer le paddLeft si ca taille n'est pas 7
         * @returns {void}.
         */
        affineValue(itemValue: string): void;
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirDateDeNaissanceController {
        private $scope;
        private date;
        private XM041A;
        private XM013A;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope);
        /**
         * @alias : keydown
         * @description : event keydown
         * @param {JQueryKeyEventObject}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirEmailController {
        private $scope;
        private email;
        private enterKeypressEvent;
        private onBlurMessageDerreur;
        static $inject: string[];
        constructor($scope: ng.IScope);
        /**
         * @alias : keydown
         * @description : event keydown
         * @param {JQueryKeyEventObject}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
        /**
         * @alias : onBlur
         * @description : event onblur
         * @param {JQueryKeyEventObject}
         * @return {void}
         */
        onBlur(): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirIbanController {
        private $scope;
        private iban;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope);
        /**
         * @alias : keydown
         * @description : event keydown
         * @param {JQueryKeyEventObject}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirIdentClientController {
        private $scope;
        private saisieIdentifiantClientService;
        private maxLength;
        private identClient;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieIdentifiantClientService: SaisieIdentifiantClientService);
        /**
         * @alias : setValue
         * @description : ajuste la longueur de l'identifiant client passé en paramètre
         * @param {identClient}
         * @return {void}
         */
        setValue(identClient: string): void;
        /**
         * @alias : keydown
         * @description : event keydown
         * @param {JQueryKeyEventObject}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject, identClient: string): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieIdentifiantClientService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: core.AgentService);
        /**
         * @Returns {ng.IPromise<Object>}.
         * @alias getDataFromN831.
         * @param {void}.
         * @description return Data From N831 pour récupérer la taille du champ
         */
        getDataFromN831(): ng.IPromise<Object>;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        private getCurrentCOCXBQ();
        /**
         * @Returns {ng.IPromise<Object>}.
         * @alias getN831.
         * @param {COCXBQ} : string.
         * @description return le code CENAID de la table délocalisée N831 correspendant au currentCOCXBQ.
         */
        private getN831(COCXBQ);
    }
}

declare module MyWay.UI {
}

declare module myway.comInterdomaine {
    class ListeCompteController {
        private $scope;
        private serviceAgentExtended;
        private listeCompteService;
        private mwsfDeviseService;
        private $q;
        static $inject: string[];
        listeCompte: MyWay.Model.Contrat[];
        listeCompteOrigine: MyWay.Model.Contrat[];
        compteSelectionne: MyWay.Model.Contrat;
        placeHolder: string;
        listeGrisee: boolean;
        _onSelect: any;
        _onBottomAction: any;
        parametres: MyWay.Model.ParametresListeComptes;
        errorService: fwkManager.Services.Erreur;
        nombreComptes: number;
        messagesRetour: MyWay.Model.MessageRetour[];
        constructor($scope: ng.IScope, serviceAgentExtended: core.AgentService, listeCompteService: myway.comInterdomaine.ListeCompteService, mwsfDeviseService: myway.comInterdomaine.DeviseService, $q: ng.IQService);
        /**
         * @alias : padLeftZero
         * @description : ajuste la longueur de l'idPersonne et ajoute des 0 devant
         * @param {string} : idPersonne
         * @return {string} : idPersonne modifié
         */
        private padLeftZero(entree);
        /**
         * @alias : getListeComptes
         * @description : récupère la liste des comptes
         * @param {void}
         * @return {void}
         */
        private getListeComptes();
        /**
         * @alias : determinerPlaceHolder
         * @description : détermine le placeholder de la liste en fonction de la liste passé en paramètre
         * @param {MyWay.Model.Contrat[]} : liste des comptes
         * @return {void}
         */
        private determinerPlaceHolder(listeCompte);
        /**
         * @alias : onSelect
         * @description : event onSelect de la liste des comptes
         * @param {MyWay.Model.Contrat} : compte sélectionné
         * @return {void}
         */
        onSelect(item: MyWay.Model.Contrat): void;
        /**
         * @alias : formatteRicePourCompte
         * @description : extrait le guichet + radical du RICE en entrée
         * @param {string}: rice
         * @return {string} : guichet + radical
         */
        formatteRicePourCompte(rice: string): string;
        /**
         * @alias : onBottomAction
         * @description : action qui se déclenche lors du clic sur l'élément bottomAction de la liste
         * @param {MyWay.Model.Contrat} : élément bottom de la liste
         * @return {void}
         */
        onBottomAction(item: MyWay.Model.Contrat): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class ListeCompteService {
        private $q;
        private serviceAgentExtended;
        private saisieRiceService;
        private $filter;
        private static MINI_PROFIL_VERSION;
        private messagesRetour;
        listeCompteCharge: ng.IPromise<boolean>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: core.AgentService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, $filter: ng.IFilterService);
        /**
         * @alias getListeCompte
         * @description : Méthode permettant de récupérer la liste des comptes clients à partir d'un compte passé en paramètre
         * @param {MyWay.Model.ParametresListeComptes} : paramètres
         * @return {ng.IPromise<MyWay.Model.Contrat[]>} : liste des comptes
         */
        getListeCompte(parametres: MyWay.Model.ParametresListeComptes): ng.IPromise<MyWay.Model.Contrat[]>;
        getMessageRetour(): MyWay.Model.MessageRetour[];
        /**
         * @alias compileEtTrieListeContrats
         * @description : met en forme les comptes + récupères les libellés des produits qui n'en ont pas via la ressource
         * @param etab : le code établissmement
         * @param listeClients : la liste des clients dont les comptes sont demandés
         * @param produits : tableau contenant les produits à filtrer
         * @param listeExternes : liste des comptes externes
         * @param idET : id Entite Titulaire à filtrer
         * @return {ng.IPromise<MyWay.Model.Contrat[]>} : liste des comptes filtrée
         */
        private compileEtTrieListeContrats(etab, listeClients, produits, listeExternes?, idET?);
        /**
         * @alias getCurrentEtablissement
         * @description : récupère l'établissement de l'agent connecté (contexte)
         * @param {void}
         * @return {ng.IPromise<string>} : code etablissement
         */
        private getCurrentEtablissement();
        /**
         * @alias recupererLibelleProduit
         * @description : récupère le libellé du produit si le libellé de base du compte en entrée est vide (table déloc PRODUIT)
         * @param codeEtablissement le code de l'établissement
         * @param compte le compte du client
         * @return compte avec le libellé produit
         */
        private recupererLibelleProduit(codeEtablissement, compte);
        setListeCompteCharge(termine: ng.IPromise<boolean>): void;
        getListeCompteCharge(): ng.IPromise<boolean>;
    }
}

declare module myway.comInterdomaine {
    class MwsfInfobulleAideController {
        private $scope;
        private $q;
        private $document;
        private $timeout;
        private $element;
        private $attrs;
        private serviceAgentExtended;
        private infobulleAideService;
        nouveaute: boolean;
        /**
         * id du champ (correspond en fait au nom du champ en bdd)
         */
        idChamp: string;
        /**
         * véritable id du champ
         */
        id: number;
        ouvert: boolean;
        message: string;
        image: string;
        showPicto: boolean;
        flottante: boolean;
        private autofocus;
        private autoclose;
        private processus;
        private codeProcessus;
        private codeEtape;
        private codeEtablissement;
        private date;
        private params;
        private estClique;
        private contenuInfobullePromise;
        private closeEvent;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, $document: ng.IDocumentService, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, $attrs: IInfobulleAttributes, serviceAgentExtended: core.AgentService, infobulleAideService: InfobulleAideService);
        toggleOuvert(): void;
        private openInfobulle();
        private closeInfobulle();
        private getContenuInfobulle();
    }
}

declare module myway.comInterdomaine {
    interface IInfobulleAttributes extends ng.IAttributes {
        flottante: string;
        processus: string;
        autoclose: string;
        autofocus: string;
    }
}

declare module myway.comInterdomaine {
    class InfobulleConstantes {
        static EMPTY_CODE_PROCESSUS: string;
        static EMPTY_CODE_ETAPE: string;
        static URL_SERVICE_RECHERCHE: string;
    }
    interface IRecherchePresenceInfobulleQueryParams {
        codeEtablissement: string;
        processus: string;
        etape: string;
        date: string;
    }
    interface IPresenceInfoBulleDTO {
        idChamp: number;
        nomChamp: string;
        nouveaute: boolean;
    }
    interface IRechercheInfobulleQueryParams {
        codeEtablissement: string;
        processus?: string;
        etape?: string;
        date?: string;
        nomChamp: string;
    }
    interface IInfoBullePartielDTO {
        contenu: string;
        /**
         * Image en base 64
         */
        image: string;
        token: boolean;
        nomChamp: string;
        nouveaute: boolean;
    }
    class InfobulleSpecialParams {
        processus: boolean;
        codeProcessus: string;
        codeEtape: string;
        codeEtablissement: string;
        date: Date;
        constructor(processus: boolean, codeProcessus: string, codeEtape: string, codeEtablissement: string, date: Date | string);
        isDefined(): boolean;
    }
}

declare module myway.comInterdomaine {
    class InfobulleAideService {
        private $q;
        private serviceAgentExtended;
        private presenceInfobullePromise;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: core.AgentService);
        /**
         * Supprime le cache interne de la présence des infobulles
         */
        clearCacheInfobullesAffichables(): void;
        /**
         * Renvoie les indicateurs de présence des infobulles affichables du processus courant.
         * Le résultat est stocké localement dans le service s'il n'y a pas de paramètres spécifiques définis (c'est à dire le cas nominal).
         */
        getInfobullesAffichables(params: InfobulleSpecialParams): ng.IPromise<{
            [idChamp: string]: IPresenceInfoBulleDTO;
        }>;
        /**
         * Renvoie l'indicateur de présence de l'infobulle à partir de l'id champ fourni.
         */
        getInfobulleAffichable(idChamp: string, params: InfobulleSpecialParams): ng.IPromise<IPresenceInfoBulleDTO>;
        /**
         * Renvoie le contenu d'une infobulle.
         */
        getContenuInfobulle(idChamp: string, params: InfobulleSpecialParams): ng.IPromise<IInfoBullePartielDTO>;
        lirePreferenceUtilisateurInfobulle(idChamp: number): ng.IPromise<any>;
        ecrirePreferenceUtilisateurInfobulle(idChamp: number): ng.IPromise<any>;
        private getIdChampPreference(idChamp);
        private getPresenceInfobulle(params);
    }
}

declare module myway.comInterdomaine {
    class LoaderController {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class MwsfSaisirModeFinancierController {
        private $scope;
        private modeFinancierService;
        required: boolean;
        modes: MyWay.Model.ModeFinancier[];
        mode: MyWay.Model.ModeFinancier;
        fonctionnalite: MyWay.Model.Fonctionnalite;
        produit: MyWay.Model.Produit;
        deviseEuro: boolean;
        habilitations: string[];
        canal: string;
        majeur: boolean;
        modeVente: string;
        codeModeFinancierDefaut: string;
        /**
         * Les règles des Modes financiers sont dans le service (services-communs/) core-service.
         */
        static $inject: string[];
        /**
         * @alias setModes
         * @description : permet de récupérer les modes financiers en fonction des critères passés en paramètre de la directive
         * @param {void}
         * @return {void}
         */
        private setModes();
        constructor($scope: ng.IScope, modeFinancierService: ModeFinancierService);
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class ModeFinancierRule {
        static fonctionnalite: () => {};
        static produit: () => {};
        static habilitation: () => {};
        static deviseEuro: () => {};
    }
    class ModeFinancierService {
        private $q;
        private serviceAgentExtended;
        private ruleService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: core.AgentService, ruleService: myway.comInterdomaine.RuleService);
        /**
         * @alias getAllModes
         * @description : permet de récupérer tous les modes financiers
         * @param {void}
         * @return {ng.IPromise<MyWay.Model.ModeFinancier[]}
         */
        getAllModes(): ng.IPromise<MyWay.Model.ModeFinancier[]>;
        /**
         * @alias getHabilitationSHJM25
         * @description : retourne True si l'utilisateur a l'habilitation SHJM25
         * @param {void}
         * @return {boolean}
         */
        getHabilitationsSHJM25etSHLX13(): ng.IPromise<boolean[]>;
        /**
         * @alias getModesDisponibles
         * @description : retourne les modes financiers répondant aux critères passés en paramètre
         * @params {fonctionnalite, produit, deviseEuro, habilitations, canal, isMajeur, modeVente} : critères pour les modes financiers
         * @return {ng.IPromise<MyWay.Model.ModeFinancier[]}
         */
        getModesDisponibles(fonctionnalite: MyWay.Model.Fonctionnalite, produit: MyWay.Model.Produit, deviseEuro: boolean, habilitations: string[], canal: string, isMajeur: boolean, modeVente: string): ng.IPromise<MyWay.Model.ModeFinancier[]>;
        /**
         * @alias getByCTGXM1
         * @description : filtre les modes financiers par CTGXM1
         * @params {CTGXM1}
         * @return {ng.IPromise<MyWay.Model.ModeFinancier}
         */
        getByCTGXM1(CTGXM1: string): ng.IPromise<MyWay.Model.ModeFinancier>;
    }
}

declare module angular {
    interface INgModelControllerExtended extends INgModelController {
        $$writeModelToScope(): void;
    }
}

declare module MyWay.Model {
    class Client {
        personneMorale: boolean;
        personnePhysique: boolean;
        courrierElectronique: string;
        numTelephoneFixe: string;
        numTelephonePortable: string;
        id: number;
        numeroCredit: string;
        identifiantPersonne: string;
        nomFamille: string;
        nomMarital: string;
        prenom: string;
        dateNaissance: Date;
        sexe: string;
        rice: Rice;
        bureauRatachement: Object;
        numeroCarte: NumCarte;
        numeroAbonne: string;
        numeroPersonne: string;
        dossierCredit: string;
        numeroTelephone: NumTelephone;
        email: string;
        siren: string;
        raisonSociale: string;
        villeSiege: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        codeCivilite: string;
        codePersonnaliteJuridique: string;
        indicateurActiviteProfessionnelle: string;
        codeTypeMedia: string;
        codeTypePersonne: string;
        designationCourte: string;
        edsDomiciliation: string;
        numeroSiren: string;
        referenceAccesMedia: string;
        sigle: string;
        compte: MyWay.Model.Compte[];
        etat: string;
        constructor();
        constructor(client: Client);
    }
}

declare module MyWay.Model {
    class CodeFinancierAtome {
        static OUVERTURE_SIMPLE: string;
        static OUVERTURE_TRANSFERT_RESEAU: string;
        static OUVERTURE_TRANSFERT_BANQUE: string;
        static OUVERTURE_TRANSFORMATION: string;
        static OUVERTURE_COMPTE_EUROS_APRES_TRANSFORMATION: string;
        static VERSEMENT_SIMPLE: string;
        static VERSEMENT_TRANSFERT_RESEAU: string;
        static VERSEMENT_TRANSFERT_BANQUE: string;
        static VERSEMENT_OAD_INTERNE_CTR: string;
        static VERSEMENT_OAD_EXTERNE: string;
        static VERSEMENT_INTERETS_ANTICIPE: string;
        static REMBOURSEMENT_SIMPLE: string;
        static REMBOURSEMENT_OAD_INTERNE_CTR: string;
        static REMBOURSEMENT_OAD_EXTERNE: string;
        static REMBOURSEMENT_INTERETS_ANTICIPE: string;
        static CLOTURE_SIMPLE: string;
        static CLOTURE_TRANSFERT_RESEAU: string;
        static CLOTURE_TRANSFERT_BANQUE: string;
        static CLOTURE_TRANSFORMATION: string;
        static CLOTURE_COMPTE_FRF: string;
        static COMPLEMENT_INTERETS_PRODUCTIF_PEL_LEE: string;
        static VERSEMENT_HORS_DEPOSANT: string;
        static REMBOURSEMENT_HORS_DEPOSANT: string;
    }
}

declare module MyWay.Model {
    class Compte {
        id: number;
        libelle: string;
        produit: Produit;
        rice: Rice;
        devise: Devise;
        reserveEncaissement: ReserveEncaissement;
        estOuvert: boolean;
        solde: number;
        titulaire: string;
        montantImpayePret: number;
        chargeMensuelEndettement: number;
        listeParticipant: MyWay.Model.ParticipantInformationClient[];
        decouvertAutorise: number;
        delaiEncaissement: number;
        ecartes: number;
        constructor(id?: number, libelle?: string, produit?: Produit, rice?: Rice, devise?: Devise, reserveEncaissement?: ReserveEncaissement, estOuvert?: boolean, solde?: number, titulaire?: string, montantImpayePret?: number, chargeMensuelleEndettement?: number, listeParticipant?: MyWay.Model.ParticipantInformationClient[], decouvertAutorise?: number, delaiEncaissement?: number, ecartes?: number);
        isDeviseEuro(): boolean;
        toString(): string;
    }
    class Contrat {
        identifiantContrat: string;
        riceContrat: string;
        codeEtatContrat: string;
        dateDebutEffet: Date;
        dateFinEffet: Date;
        identifiantEntiteTitulaire: string;
        libelleEntiteTitulaire: string;
        indicateurResponsableET: boolean;
        modeCompositionET: string;
        codeUsageET: string;
        identifiantProduit: number;
        libelleProduit: string;
        codeDeviseContrat: string;
        valeurProduit: number;
        devise: MyWay.Model.Devise;
        valeurProduitDevise: number;
        deviseContrat: MyWay.Model.Devise;
        identifiantPersonne: string;
        itemSupplementaireSelectionne: boolean;
        itemBottomSelectionne: boolean;
    }
    class ParametresListeComptes {
        identifiantsPersonnes: string[];
        identifiantsEntitesTitulaires: string[];
        typesProduits: string[];
        typeRecherche: string;
        codeEtatRecherche: string;
        codeDevise: string;
        itemSupplementaire: ItemSupplementaireListeCompte;
        itemBottomText: string;
        listeComptesExternes: IParametreComptesExternes[];
        compteAEnlever: MyWay.Model.Contrat;
        parametreComptesCCI: ParametreComptesCCI;
        constructor();
        constructor(identifiantsPersonnes: string[], typeRecherche: string, codeEtatRecherche: string);
        constructor(identifiantsPersonnes: string[], typeRecherche: string, codeEtatRecherche: string, typesProduits: string[], codeDevise?: string);
        constructor(identifiantsPersonnes: string[], typeRecherche: string, codeEtatRecherche: string, typesProduits: string[], codeDevise?: string, itemSup?: ItemSupplementaireListeCompte);
        constructor(identifiantsPersonnes: string[], typeRecherche: string, codeEtatRecherche: string, typesProduits: string[], codeDevise?: string, itemSup?: ItemSupplementaireListeCompte, itemBottom?: string);
        constructor(identifiantsPersonnes?: string[], typeRecherche?: string, codeEtatRecherche?: string, typesProduits?: string[], codeDevise?: string, itemSup?: ItemSupplementaireListeCompte, itemBottom?: string, listeExternes?: IParametreComptesExternes[]);
        constructor(identifiantsPersonnes?: string[], typeRecherche?: string, codeEtatRecherche?: string, typesProduits?: string[], codeDevise?: string, itemSup?: ItemSupplementaireListeCompte, itemBottom?: string, listeExternes?: IParametreComptesExternes[], compteAEnlever?: MyWay.Model.Contrat);
        constructor(identifiantsPersonnes?: string[], typeRecherche?: string, codeEtatRecherche?: string, typesProduits?: string[], codeDevise?: string, itemSup?: ItemSupplementaireListeCompte, itemBottom?: string, listeExternes?: IParametreComptesExternes[], compteAEnlever?: MyWay.Model.Contrat, identifiantsEntitesTitulaires?: string[]);
        constructor(identifiantsPersonnes?: string[], typeRecherche?: string, codeEtatRecherche?: string, typesProduits?: string[], codeDevise?: string, itemSup?: ItemSupplementaireListeCompte, itemBottom?: string, listeExternes?: IParametreComptesExternes[], compteAEnlever?: MyWay.Model.Contrat, identifiantsEntitesTitulaires?: string[], parametreComptesCCI?: ParametreComptesCCI);
        padLeftIdentifiantsPersonne(): void;
        padLeftIdentifiantsET(): void;
    }
    class ItemSupplementaireListeCompte {
        libelle: string;
        parDefaut: boolean;
        constructor(libelle: string);
        constructor(libelle: string, parDefaut: boolean);
    }
    class ParametreComptesCCI {
        restituerComptesCCI: boolean;
        constructor(restituerComptesCCI?: boolean);
    }
    class MessageRetour {
        codeEtablissement: string;
        identifiantTiers: string;
        listeMessagesRetour: string[];
        constructor(codeEtablissement?: string, identifiantTiers?: string, listeMessagesRetour?: string[]);
    }
    class ContratExterne extends Contrat {
        bic: string;
        iban: string;
        libelleEtablissement: string;
        libelleGuichet: string;
    }
    interface IParametreComptesExternes {
        codeServiceBAD: string;
        numeroPersonne: string;
    }
    class ParametreComptesExternesPart implements IParametreComptesExternes {
        codeServiceBAD: string;
        numeroPersonne: string;
        constructor(numeroPersonne?: string, codeServiceBad?: string);
    }
    class ParametreComptesExternesPro implements IParametreComptesExternes {
        codeServiceBAD: string;
        numeroPersonne: string;
        codeNatureJuridique: string;
        codeTypeServiceMedia: string;
        identifiantAbonne: string;
        constructor(numeroPersonne?: string, codeServiceBad?: string, codeNatureJuridique?: string, codeTypeServiceMedia?: string, identifiantAbonne?: string);
    }
}
declare module myway.compteabonnement {
    interface ICompteAbonnement {
        listeTitre: Array<ITitre>;
        listeProduitDAT: Array<IProduitDAT>;
        listeCompteCourantEntreprise: Array<ICompteCourantEntreprise>;
        listeEpargneLiquide: Array<IEpargneLiquide>;
        listeCarteCreditConso: Array<ICarteCreditConso>;
        listeCompteExterne: Array<ICompteExterne>;
        typeTarification: string;
        listeCompteAssocie: Array<ICompteAssocie>;
        listeAssurance: Array<IAssurance>;
    }
    interface IEpargneLiquide {
        rice: IRice;
        codeEtatProduitService: string;
        codeTypeProduitService: string;
        sousCodeProduitService: string;
        codeTypeUsage: string;
        codeStatutAbonne: string;
        dateDebutEffetMandat: Date;
        codeDevise: string;
        codeSigne: string;
        soldeCompte: number;
        indicateurVersementDirect: string;
        dateDerniereOperation: Date;
        designationBancaireCourte: string;
        indicateur: IIndicateur;
        LibellePersonnaliseCDD: string;
    }
    interface ICompteCourantEntreprise {
        codeEtatProduitService: string;
        codeTypeProduitService: string;
        typeNatureCompte: string;
        rice: IRice;
        codeTypeUsage: string;
        codeStatutAbonne: string;
        dateDebutEffetMandat: Date;
        codeDevise: string;
        codeSigne: string;
        soldeCompte: number;
        montantDecouvert: number;
        designationBancaireCourte: string;
        libelleCompteCCE: string;
        codeNatureCompte: string;
        indicateur: IIndicateur;
    }
    interface ITitre {
        codeEtatProduitService: string;
        codeTypeProduitService: string;
        rice: IRice;
        codeEntiteAdministrative: string;
        codeTypeUsage: string;
        codeStatutAbonne: string;
        dateDebutEffetMandat: Date;
        codeDevise: string;
        codeSigne: string;
        soldeCompte: number;
        designationBancaireCourte: string;
        sousCodeProduitService: string;
        indicateur: IIndicateur;
    }
    interface IProduitDAT {
        codeEtatProduitService: string;
        codeTypeProduitService: string;
        rice: IRice;
        codeTypeUsage: string;
        codeStatutAbonne: string;
        dateDebutEffetMandat: Date;
        codedevise: string;
        codeSigne: string;
        soldeCompte: number;
        designationBancaireCourte: string;
        sousCodeProduitService: string;
        indicateur: IIndicateur;
    }
    interface IAssurance {
        codeEtatProduitService: string;
        codeTypeProduitService: string;
        numeroContratCNP: string;
        soldeCompte: number;
        codeDevise: string;
        numeroAdhesionProduit: string;
        libelleTypeProduitService: string;
        dateOuvertureProduitService: Date;
        rice: IRice;
        periodiciteVersement: string;
        montantVersementPeriodique: number;
        dateArreteInformation: Date;
        montantValeurRachat: number;
        montantCumulVersLibreOrigine: number;
        montantCumulVersLibreAnnee: number;
        codeDoubleTriple: number;
        montantGarantiFiacre: number;
        montantPrimeAnnuelle: number;
        montantValeurRachatTotal: number;
        dateValeurVersement: Date;
        dureePlanVersement: number;
        codeStatutAbonne: string;
        codeEtablissement: string;
        codeGuichet: string;
        indicateur: IIndicateur;
    }
    interface ICarteCreditConso {
        codeEtatProduitService: string;
        codeTypeProduitService: string;
        rice: IRice;
        designationBancaireCourte: string;
        numeroCarteRevolving: string;
        codeStatutAbonne: string;
        indicateur: IIndicateur;
    }
    interface IRice {
        codeEtablissement: string;
        codeGuichet: string;
        referenceProduitService: string;
    }
    interface IIndicateur {
        indicateurInterrogationBQD: string;
        indicateurPrelevementBQD: string;
        indicateurVirementBQD: string;
        indicateurSupportFactBQD: string;
        indicateurIterroBQDEffectif: string;
        indicateurPrelevBQDEffectif: string;
        indicateurVirementBQDEffectif: string;
        indicateurSuppFactBQDEffectif: string;
        indicateurCreditPrelevExtBQD: string;
        indicateurCrdtPrelevExtBQDEff: string;
    }
    interface ICompteExterne {
        identifiantPersonne: string;
        referenceRib: string;
        designationBancaireCourte: string;
        libelleEtablissement: string;
        libelleGuichet: string;
        codeIbanBanque: string;
        indicateurCompteSiris: string;
        sousCodeProduitService: string;
        typeNatureCompte: string;
        codeDevise: string;
        ibanBeneficiaire: string;
        codeBicDestinataire: string;
        indicateurCpteExterneInclus: string;
        codeStatutAbonne: string;
        codeCanal: string;
        codeNatureCompte: string;
        codeTypeEnrolement: string;
    }
    interface ICompteAssocie {
        ribCompte: string;
        designationBancaire: string;
        libelleEtablissementBancaire: string;
        libelleGuichet: string;
        codeIban: string;
        indicateurCompteGereSiris: string;
        sousCodeProduit: string;
        typeNatureCompte: string;
        codeDevise: string;
        numeroIbanBeneficiaire: string;
        codeBicDestinataire: string;
        codeCanalGestion: string;
        codeNatureCompte: string;
        codeTypeEnrolement: string;
    }
}
declare module myway.compteserviceassocie {
    interface ICompteServiceAssocie {
        codeEtablissement: string;
        identifiantClientBAD: string;
        codeServiceBAD: string;
        listeCompteExterne: Array<ICompteExterne>;
        identifiantPersonne: number;
    }
    interface ICompteExterne {
        identifiantPersonne: number;
        designationBancaire: string;
        libelleEtablissementBancaire: string;
        libelleGuichet: string;
        indiccompteGereParSiris: string;
        sousCodeProduitService: string;
        typeNatureCompteEntreprise: string;
        codeDevise: string;
        indiccpteExterneInclusDsAbon: string;
        codeStatutLAbonne: string;
        comptePerimetreBAD: string;
        codeIBanBeneficiaire: string;
        codeBicBeneficiaire: string;
        codeIbanBanque: string;
        codeCanalGestion: string;
        codeNatureCompte: string;
        codeTypeEnrolement: string;
        timestampDispo: string;
        delaiSecurite: number;
        timestampMAJ: string;
    }
}

declare module myway.comInterdomaine {
    class InterdomaineConstants {
        static assetFolder: string;
    }
}

declare module MyWay.Model {
    class Coupure {
        b500: number;
        b200: number;
        b100: number;
        b50: number;
        b20: number;
        b10: number;
        b5: number;
        constructor();
    }
}

declare module MyWay.Model {
    interface IDevise {
        code: string;
        /**
         * @deprecated use symboleDevise
         */
        sigle?: string;
        libelle: string;
        nombreDecimalesGerees?: number;
        nombreDecimalesReelles?: number;
        symboleDevise?: string;
    }
    class Devise {
        code: string;
        /**
         * @deprecated use symboleDevise
         */
        sigle: string;
        libelle: string;
        nombreDecimalesGerees: number;
        nombreDecimalesReelles: number;
        symboleDevise: string;
        view: string;
        label: string;
        $valid: boolean;
        constructor();
        constructor(devise: IDevise);
    }
}

declare module MyWay.Model {
    class EncaissementCheque {
        codeEtatRemiseCheque: string;
        codeSegmentRisqueCategorieClient: string;
        delaiMaxiAlerteAprèsOuvertureCompte: number;
        delaiMiniAlerteApresOuvertureCompte: number;
        indicePresenceListeBlanche: string;
        montantSeuilCheque: number;
        noteBPCE: string;
        constructor();
    }
}

declare module myway.equipementclient {
    interface IEquipementClient {
        listeClient: Array<IClient>;
    }
    interface IClient {
        codeEtablissement: string;
        identifiantTiers: string;
        listeContrat: Array<IContrat>;
        listeMessagesRetour: Array<string>;
    }
    interface IContrat {
        identifiantContrat: string;
        riceContrat: string;
        codeEtatContrat: string;
        dateDebutEffet: string;
        dateFinEffet: string;
        identifiantEntiteTitulaire: string;
        libelleEntiteTitulaire: string;
        indicateurResponsableET: boolean;
        modeCompositionET: string;
        codeUsageET: string;
        identifiantProduit: number;
        libelleProduit: string;
        valeurProduit: number;
        codeDeviseContrat: string;
        valeurProduitDevise: number;
    }
}

declare module MyWay.Model {
    class Fonctionnalite {
        static VERSEMENT_GENERIQUE: string;
        static VERSEMENT_SIMPLE: string;
        static OAD: string;
        static CORRECTION_OAD: string;
        static RECYCLAGE: string;
        static RECYCLAGE_OAD: string;
        static OUVERTURE_CDD: string;
        static ANNULATION_OUVERTURE_CDD: string;
        static CLOTURE_CDD: string;
        static ANNULATION_CLOTURE_CDD: string;
        static CLOTURE_CDD_SANS_MISE_EN_CONTENTIEUX: string;
        static ANNULATION_CLOTURE_CDD_SANS_MISE_EN_CONTENTIEUX: string;
        static CLOTURE_CDD_AVEC_MISE_EN_CONTENTIEUX: string;
        static ANNULATION_CLOTURE_CDD_AVEC_MISE_EN_CONTENTIEUX: string;
        static OUVERTURE_COMPTE_INSTANCE: string;
        static ANNULATION_OUVERTURE_COMPTE_INSTANCE: string;
        static CLOTURE_COMPTE_INSTANCE: string;
        static ANNULATION_CLOTURE_COMPTE_INSTANCE: string;
        static OUVERTURE_COMPTE_ATTENTE: string;
        static ANNULATION_OUVERTURE_COMPTE_ATTENTE: string;
        static CLOTURE_COMPTE_ATTENTE: string;
        static ANNULATION_CLOTURE_COMPTE_ATTENTE: string;
        static CLOTURE_PAR_VIREMENT_TRANSFERT_COMPTE_ATTENTE: string;
        static ANNULATION_CLOTURE_PAR_VIREMENT_TRANSFERT_COMPTE_ATTENTE: string;
        static ABONNEMENT_CDD: string;
        static OUVERTURE_PEL: string;
        static OUVERTURE_CEL: string;
        static OUVERTURE_LIVRET_JEUNE: string;
        static OUVERTURE_EPARGNE: string;
        static COMPTE_CANTONNEMENT: string;
        static GENERIQUE_VAD: string;
        static OUVERTURE_DAT: string;
        static LIVRET_A: string;
        static OUVERTURE_PEA: string;
        static EXTOURNE_OUVERTURE_PEA: string;
        static EXTOURNE_CLOTURE_PEA: string;
        static OPERATION_RETRAIT: string;
        static OPERATION_DEPOT: string;
        static OPERATION_DEPOT_DEVISE: string;
        static OPERATION_RETRAIT_DEVISE: string;
        static OPERATION_DEPOT_HORS_CLIENTELE: string;
        static OPERATION_RETRAIT_HORS_CLIENTELE: string;
        static OPERATION_RETRAIT_OAD: string;
        static OPERATION_DEPOT_OAD: string;
        static OPERATION_RETRAIT_HORS_CLIENTELE_COMPTE_88: string;
        static OPERATION_DEPOT_HORS_CLIENTELE_COMPTE_88: string;
        static OPERATION_DEPOT_COMPTE_88: string;
        static OPERATION_RETRAIT_COMPTE_88: string;
        static OUVERTURE_CDD_CCOOP: string;
        static OUVERTURE_CDD_ENJOY: string;
    }
}

declare module MyWay.Model.H81E {
    interface ITableModel {
        datemaj: string;
        id: string;
        nom: string;
        referentiel: string;
        donnees: Array<IRowModel>;
    }
    interface IRowModel {
        CDDDPY: string;
        CDHJAP: string;
        CDHMDE: string;
        COLIPB: string;
        CTHJPA: string;
        DFHJIB: string;
        LIDGPY: string;
        MCHDEC: string;
        QLHDI1: string;
        QLHDIB: string;
    }
}

declare module MyWay.Model {
    interface IIdentification {
        codeEtablissement: number;
        identifiantPersonne: number;
        codePersonneJuridique: number;
        libellePersonneJuridique: string;
        codeEtatPersonne: number;
        codeTypeRelation: number;
        libelleTypeRelation: string;
        dateEntreeRelation: string;
    }
    class Identification implements IIdentification {
        codeEtablissement: number;
        identifiantPersonne: number;
        codePersonneJuridique: number;
        libellePersonneJuridique: string;
        codeEtatPersonne: number;
        codeTypeRelation: number;
        libelleTypeRelation: string;
        dateEntreeRelation: string;
        constructor();
        constructor(identification: IIdentification);
    }
}

declare module MyWay.Model {
    class IndicateurModeFinancier {
        static MAP_INDICATEUR_FINANCIER: {
            "OUVERTURE_CDD": string;
            "OUVERTURE_CDD_DIVERS": string;
            "ANNULATION_OUVERTURE_CDD": string;
            "ANNULATION_OUVERTURE_CDD_DIVERS": string;
            "CLOTURE_CDD": string;
            "CLOTURE_CDD_DIVERS": string;
            "CLOTURE_CDD_CONTENTIEUX": string;
            "ANNULATION_CLOTURE_CDD": string;
            "ANNULATION_CLOTURE_CDD_DIVERS": string;
            "ANNULATION_CLOTURE_CDD_CONTENTIEUX": string;
            "ANNULATION_OUVERTURE_COMPTE_INSTANCE": string;
            "ANNULATION_OUVERTURE_COMPTE_INSTANCE_DIVERS": string;
            "CLOTURE_COMPTE_INSTANCE": string;
            "CLOTURE_COMPTE_INSTANCE_DIVERS": string;
            "ANNULATION_CLOTURE_COMPTE_INSTANCE": string;
            "ANNULATION_CLOTURE_COMPTE_INSTANCE_DIVERS": string;
            "OUVERTURE_COMPTE_ATTENTE": string;
            "OUVERTURE_COMPTE_ATTENTE_DIVERS": string;
            "ANNULATION_OUVERTURE_COMPTE_ATTENTE": string;
            "ANNULATION_OUVERTURE_COMPTE_ATTENTE_DIVERS": string;
            "CLOTURE_COMPTE_ATTENTE": string;
            "CLOTURE_COMPTE_ATTENTE_DIVERS": string;
            "ANNULATION_CLOTURE_COMPTE_ATTENTE": string;
            "ANNULATION_CLOTURE_COMPTE_ATTENTE_DIVERS": string;
            "CLOTURE_TRANSFERT_COMPTE_ATTENTE": string;
            "ANNULATION_CLOTURE_TRANSFERT_COMPTE_ATTENTE": string;
            "ANNULATION_CLOTURE_TRANSFERT_COMPTE_ATTENTE_DIVERS": string;
            "OUVERTURE_NORMALE_EPARGNE": string;
            "OUVERTURE_NORMALE_EPARGNE_DIVERS": string;
            "VERSEMENT_SIMPLE": string;
            "VERSEMENT_GENERIQUE": string;
            "VERSEMENT_GENERIQUE_DIVERS": string;
            "OAD": string;
            "OAD_DIVERS": string;
            "CORRECTION_OAD": string;
            "RECYCLAGE": string;
            "RECYCLAGE_DIVERS": string;
            "RECYCLAGE_OAD": string;
            "RECYCLAGE_OAD_DIVERS": string;
        };
    }
}

declare module MyWay.Model {
    class ModeFinancier {
        CIJMMC: string;
        CIJMMS: string;
        CTGXM1: string;
        CTGXMF: string;
        LIJMMI: string;
        constructor(mode?: ModeFinancier);
        displayLabel(): string;
    }
}

declare module MyWay.Model {
    interface IMontantDevise {
        montant?: number;
        codeDevise?: string;
        devise?: MyWay.Model.Devise;
        $valid?: boolean;
    }
    class MontantDevise implements IMontantDevise {
        montant: number;
        codeDevise: string;
        devise: MyWay.Model.Devise;
        $valid: boolean;
        constructor();
        constructor(montant: number);
        constructor(montant: number, codeDevise: string);
    }
}

declare module MyWay.Model {
    class NumCarte {
        CODCAR1: string;
        CODCAR2: string;
        CODCAR3: string;
        CODCAR4: string;
        concatinate: string;
        constructor(CODCAR1?: string, CODCAR2?: string, CODCAR3?: string, CODCAR4?: string, concatinate?: string);
        isNotEmpty(): boolean;
        toString(): string;
    }
}

declare module MyWay.Model {
    class NumTelephone {
        indicatif: any;
        numero: string;
        constructor();
        constructor(indicatif: any, numero: string);
        toString(): string;
    }
}

declare module MyWay.Model {
    /**
     * Modèle permettant la gestion des familles d'Operation Diverses.
     */
    class FamilleOperationDiverse {
        /**
         * Code etablissement.
         */
        YNOXCE: string;
        /**
         * Code famille.
         */
        COJOFA: string;
        /**
         * Libelle famille.
         */
        ULIWFO: string;
        /**
         * Code autor autorisation acces par bureau DOM
         */
        UCGWBD: string;
        /**
         * Code autorisation acces par GAB
         */
        UCGWGA: string;
        UCGWBA: string;
        UCGWRT: string;
        UCGWMO: string;
        CIJOAS: string;
        UCGWSR: string;
        constructor();
        constructor(familleOD: FamilleOperationDiverse);
    }
    /**
     * Modele permettant la gestion des code de regroupement.
     */
    class RegroupementOperationDiverse {
        /**
         * Code caisse epargne.
         */
        YNOXCE: string;
        /**
         * Identifiant element de structure
         */
        NOCEEL: string;
        /**
         * Code regroupement Back Office
         */
        UCGWRT: string;
        constructor();
        constructor(regroupementOD: RegroupementOperationDiverse);
    }
    /**
     * Modele permettant la gestion des codes de regroupement filtre
     * par code back office et code caisse d'epargne
     */
    class TableauDeRegroupementOperationDiverse {
        /**
         * Tableau de regroupement des codes back office (UCGWRT)
         */
        tableauRegroupementBackOffice: Array<string>;
        /**
         * Tableau de regroupement des codes caisse epargne (YNOXCE)
         */
        tableauRegroupementCodeCaisseEpargne: Array<string>;
        constructor();
        constructor(tableauDeRegroupementOperationDiverse: TableauDeRegroupementOperationDiverse);
    }
    /**
     * Modele permettant la gestion des type d'operation diverses.
     */
    class TypeOperationDiverse {
        /**
         * Code retour echanges
         */
        WCORE3: string;
        /**
         * Etat de fin / reprise de transfert
         */
        CESGFR: string;
        /**
         * Code caisse epargne
         */
        YNOXCE: string;
        /**
         * Code Famille
         */
        COJOFA: string;
        /**
         * Code Operation Diverse
         */
        COJXHD: string;
        /**
         * Sens Operation Diverse
         */
        UCTXS5: string;
        /**
         * Libelle Operation Diverse
         */
        ULIWOD: string;
        /**
         * Code autorisation Agence ou BO
         */
        UCGWBD: string;
        /**
         * Code autorisation acces par gab
         */
        UCGWGA: string;
        /**
         * Code autorisation acces par bureau back off
         */
        UCGWBA: string;
        /**
         * Code regroupement Back Office
         */
        UCGWRT: string;
        /**
         * Code mode apparition
         */
        UCGWMO: string;
        /**
         * Indr autor op diverse serie
         */
        UCGWSR: string;
        /**
         * Code autor mode financier especes
         */
        COJOMA: string;
        /**
         * Code autor mode financier cheque recus
         */
        COJOMB: string;
        /**
         * Code autor mode financier Div
         */
        COJOMC: string;
        /**
         * Code autor mode financier cheque CNCE
         */
        COJOMD: string;
        /**
         * Code autor mode financier cheque banque
         */
        COJOME: string;
        /**
         * Libelle zone tiers
         */
        LIJMTI: string;
        /**
         * Indicateur zone tiers
         */
        CIJMTI: string;
        /**
         * Libelle zone objet
         */
        LIJMOB: string;
        /**
         * Indicateur zone objet obligatoire
         */
        CIJMOB: string;
        /**
         * Code schema comptable multiple
         */
        COJCSC: string;
        /**
         * Libelle associé au montant schema multi
         */
        LIJCSC: string;
        /**
         * Indicateur montant SCM Obligatoire
         */
        COJCIN: string;
        /**
         * Date de lancement du produit/nature
         */
        DDEXPH: string;
        /**
         * Identification requete
         */
        IDSEQ3: string;
        /**
         * Date de fin de validite OD
         */
        DFJOVA: string;
        constructor();
        constructor(typeOD: TypeOperationDiverse);
    }
    /**
     * Modele permettant la gestion d'un objet comprenant la famille et le type séléctionné
     */
    class OperationDiverse {
        /**
         * Famille d'Operation diverse
         */
        familleOperationDiverse: FamilleOperationDiverse;
        /**
         * Type d'operation diverse
         */
        typeOperationDiverse: TypeOperationDiverse;
        constructor();
        constructor(familleOperation: FamilleOperationDiverse, typeOperation: TypeOperationDiverse);
    }
}

declare module MyWay.Model {
    class ParticipantInformationClient {
        codeRole: string;
        identifiantParticipant: string;
        dateNaissance: string;
        nomParticipant: string;
        prenomParticipant: string;
        nomPrenomParticipant: string;
        codePersonnaliteJuridique: string;
        libelleRole: string;
        constructor(codeRole: string, identifiantParticipant: string, dateNaissance: string, nomParticipant: string, prenomParticipant: string, codePersonnaliteJuridique: string, designationCourte?: string, libelleRole?: string);
    }
}

declare module MyWay.Model {
    class Produit {
        CODIPR: string;
        COEXSP: string;
        IDEGPS: string;
        LCEGCO: string;
        LNEGCO: string;
        constructor();
        constructor(produit: Produit);
    }
}

declare module MyWay.Model {
    class ReserveEncaissement {
        sansReserve: boolean;
        delaiEncaissement: number;
        constructor(sansReserve: boolean, delaiEncaissement: number);
    }
}

declare module MyWay.Model {
    class Rice {
        codeEtablissement: string;
        codeGuichet: Object;
        codeActiviteCompte: string;
        radical: string;
        cleCompte: string;
        cleRice: string;
        riceNonExistant: boolean;
        $valid: boolean;
        erreurBloquante: boolean;
        constructor(codeEtablissement?: string, codeGuichet?: Object, codeActiviteCompte?: string, radical?: string, cleCompte?: string, cleRice?: string, riceNonExistant?: boolean, $valid?: boolean, erreurBloquante?: boolean);
        isNotEmpty(): boolean;
        isComplete(): boolean;
        peutCalculerCleRice(): boolean;
        clear(): void;
        getGuichet(): string;
        toString(): string;
        formatRicePourRib(): string;
        formatRicePourStructureEchange(): string;
        formatRICEPourCompte(): string;
    }
}

declare module myway.comInterdomaine {
    interface IMwMontantSettings {
        groupSeparator?: string;
        groupSize?: number;
        fractionSeparator?: string;
        fractionSize?: number;
        negativePrefix?: string;
        positivePrefix?: string;
    }
    interface IMwsfMontantScope extends ng.IScope {
        settings: IMwMontantSettings;
        forcePositive: string;
        nullable: string;
    }
    class MwsfMontantController {
        private $locale;
        private $scope;
        private $element;
        private $attrs;
        private $parse;
        private settings;
        private inputElement;
        private modelController;
        private isNegative;
        private forcePositive;
        private nullable;
        static $inject: string[];
        constructor($locale: ng.ILocaleService, $scope: IMwsfMontantScope, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes, $parse: ng.IParseService);
        checkSettings(settings: IMwMontantSettings): void;
        getSignPrefix(): string;
        getSignPrefixLength(): number;
        renderViewValue(isUserTyping?: boolean): void;
        modelFormatter(modelValue: number): string;
        modelParser(inputValue: string): number;
        formatViewValue(inputValue: string, isUserTyping: boolean): string;
        getConvertibleViewValue(viewValue: string): string;
        getAbsoluteViewValue(viewValue: string): string;
        changeSign(isNegative: boolean): void;
        keydown(event: JQueryKeyEventObject): void;
        keyup(event: JQueryKeyEventObject): void;
        keypress(event: JQueryKeyEventObject): void;
        private alignLeft();
        private alignRight();
        private log(...args);
    }
}

declare module myway.comInterdomaine {
    interface IMwsfSaisieMontantMessages {
        required?: string;
        min?: string;
        max?: string;
    }
    class MwsfSaisieMontantController {
        private $scope;
        private $attrs;
        private $element;
        private $interpolate;
        formName: string;
        value: number;
        required: boolean;
        devise: MyWay.Model.Devise;
        settings: IMwMontantSettings;
        min: number;
        max: number;
        messages: IMwsfSaisieMontantMessages;
        desactive: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $attrs: ng.IAttributes, $element: ng.IAugmentedJQuery, $interpolate: ng.IInterpolateService);
        private checkDirectiveAttributes();
        isFloat(): boolean;
        isNull(): boolean;
    }
}

declare module myway.comInterdomaine {
    class SaisirNomController {
        private $scope;
        static $inject: string[];
        private errorMsgRequiredInput;
        private nom;
        private premierAlphabetique;
        private minLength;
        private caractereInvalide;
        private enterKeypressEvent;
        constructor($scope: ng.IScope);
        /**
         * @alias premierCaractereAlphabetique
         * @description : retourne True si le 1er caractère est alphabétique
         * @param {string} : nom
         * @return {boolean}
         */
        premierCaractereAlphabetique(name: string): boolean;
        /**
         * @alias detectCharDollar
         * @description : retourne True si un $ est saisi
         * @param {string} : nom
         * @return {boolean}
         */
        detectCharDollar(name: string): boolean;
        /**
         * @alias keydown
         * @description : event keydown
         * @param {event}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirNumCarteController {
        private $scope;
        static MAX_LENGTH: number;
        private numCarte;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope);
        /**
         * @Returns a {void}.
         * @alias bindingData.
         * @param {data} : string.
         * @description binding data on change event.
         */
        bindingData(numCarteValue: string): void;
        /**
         * @alias keydown
         * @description : event keydown
         * @param {event}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirNumCreditController {
        private $scope;
        private numCredit;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope);
        /**
         * @Returns a {void}.
         * @Alias bindingData.
         * @Param {currentNumCredit: string}.
         * @Description binding data et application des regles de contrôle de saisie.
         * @Return {void}.
         */
        bindingData(numCredit: string): void;
        /**
         * @alias keydown
         * @description : event keydown
         * @param {event}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirNumPersonneController {
        private $scope;
        static MAX_LENGTH: number;
        private numPersonne;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope);
        /**
         * @Returns a {void}.
         * @Alias affineValue.
         * @Param {numPersonne: string}.
         * @Description binding data et application des regles de contrôle de saisie.
         * @Return {void}.
         */
        affineValue(numPersonne: string): void;
        /**
         * @alias keydown
         * @description : event keydown
         * @param {event}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject, numPersonne: string): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirNumTelephoneController {
        private $scope;
        private saisieNumTelephoneService;
        static LIST_KEY: string;
        static LIST_VALUE: string;
        private numTelephone;
        private listIndicatifs;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieNumTelephoneService: SaisieNumTelephoneService);
        /**
         * @alias keydown
         * @description : event keydown
         * @param {event}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieNumTelephoneService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: core.AgentService);
        /**
         * @ngdoc function
         * @name getListIndicatifs
         * @methodOf SaisieNumTelephoneService.getListIndicatifs
         * @description
         * fonction qui retourne la liste des indicatifs mondial.
         * @param {void}
         * @returns {ng.IPromise<Array<Object>>} une promise contenant un tableau d'indicatifs.
         */
        getListIndicatifs(): ng.IPromise<Array<Object>>;
        /**
         * @ngdoc method
         * @name setDefaultIndicatif
         * @methodOf SaisieNumTelephoneService.setDefaultIndicatif
         * @description
         * méthode qui retourne l'indicatif par défaut --> +33 (France).
         * @param {void}
         * @returns {string} indicatif par défaut.
         */
        setDefaultIndicatif(): Object;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
        /**
         * @ngdoc method
         * @name getDU8N
         * @methodOf SaisieNumTelephoneService.getDU8N
         * @description
         * fonction quir retourne l'indicatif par défaut --> +33 (France).
         * @param {void}
         * @returns {string} indicatif par défaut.
         */
        getDU8N(COCXBQ: string): ng.IPromise<Object>;
    }
}

declare module myway.comInterdomaine {
    class OppositionController {
        private $scope;
        private oppositionService;
        private $q;
        static $inject: string[];
        numeroCompte: string;
        codeDevise: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        donneesCharge: boolean;
        tableauOpposition: MyWay.UI.ImwTableOptions;
        oppositionData: any;
        constructor($scope: ng.IScope, oppositionService: myway.comInterdomaine.Service.OppositionService, $q: ng.IQService);
        tableauColonneCodeModif: MyWay.UI.ImwTableColumnOptions;
        tableauColonneLibelle: MyWay.UI.ImwTableColumnOptions;
        tableauColonneDateDebut: MyWay.UI.ImwTableColumnOptions;
        tableauColonneDateFin: MyWay.UI.ImwTableColumnOptions;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine.Model {
    interface IRequeteOpposition {
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
    interface IRecherche {
        listeOpposition: Array<IOpposition>;
        client: IClient;
        indicateurOppoNivPers: boolean;
        indicateurOppoNivEntit: boolean;
    }
    interface IOpposition {
        codeNiveau: string;
        codeDiffusion: string;
        codeMotif: string;
        numeroIdentification: string;
        numeroCompte: string;
        codeGuichet: string;
        codeTypeProduit: string;
        libelle: string;
        dateDebut: string;
        dateFin: string;
        dateCreation: string;
        heureCreation: string;
        indicateurInitiativeCaisse: boolean;
        nomAgentCreation: string;
        edsAgentCreation: string;
        numeroBureauOperantCreation: number;
        nomAgentSuppression: string;
        numeroBureauOperantSuppression: number;
        heureSuppression: string;
        dateHeureEcritureDB2: string;
        zone100: string;
        libelleNiveau: string;
        libelleDiffusion: string;
        libelleMotif: string;
        motifOpposition: string;
        perteVolLivret: IPerteVolLivret;
        livretConditionnel: ILivretConditionnel;
        prelevementNNE: IPrelevementNNE;
        virementSoldeMin: IVirementSoldeMin;
        prelevementSaufNNE: IPrelevementSaufNNE;
        formulePerteVol: IFormulePerteVol;
        paiementCheque: IPaiementCheque;
        prelevementCreancierMandatSepa: IPrelevementCreancierMandatSepa;
        toutPrelevementSepa: IToutPrelevementSepa;
        tutelle: ITutelle;
        dateSuppression: string;
    }
    interface IClient {
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        designationBancaire: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
        localite: string;
    }
    interface IPerteVolLivret {
        numeroDuplicataLivret: number;
        indicateurPerteVol: string;
        indicateurAvecSansPI: string;
    }
    interface ILivretConditionnel {
        commentaireLivretConditionnel: string;
    }
    interface IPrelevementNNE {
        numeroNationalEmetteur: number;
        mtOperationBloquee: number;
        codeMonnaieMontant: string;
        indicateurMotifOpposition: string;
        libelleNationalEmetteur: string;
    }
    interface IVirementSoldeMin {
        mtOperationBloquee: number;
        codeMonnaie: string;
    }
    interface IPrelevementSaufNNE {
        numeroNationalEmetteur: number;
        indicateurMotifOpposition: string;
        libelleNationalEmetteur: string;
    }
    interface IFormulePerteVol {
        numeroPremiereFormule: number;
        numeroDerniereFormule: number;
        indicateurMotifOpposition: string;
    }
    interface IPaiementCheque {
        numeroCheque: number;
        indicateurMotifOpposition: string;
        dateEmissionCheque: string;
        montantCheque: number;
        nomBeneficiaire: string;
        codeMonnaie: string;
    }
    interface IPrelevementCreancierMandatSepa {
        identifiantCreancier: string;
        referenceMandat: string;
        indicateurMotifOpposition: string;
    }
    interface IToutPrelevementSepa {
        indicateurMotifOpposition: string;
    }
    interface ITutelle {
        capaciteJuridique: string;
    }
    interface ITableDelocDU2C {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: IDonneeDelocaliseeDU2C[];
    }
    interface IDonneeDelocaliseeDU2C {
        LBDCMT: string;
        CODEFM: string;
        LIDECA: string;
        DDDAVA: string;
        DFDAVA: string;
        CTDECA: string;
    }
}

declare module myway.comInterdomaine.Service {
    class OppositionService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        codeDevise: string;
        oppositionData: myway.comInterdomaine.Model.IRecherche;
        tableCapaciteJuridique: Model.ITableDelocDU2C;
        constructor($q: ng.IQService, serviceAgentExtended: core.AgentService, modalService: MyWay.UI.ModalService);
        /**
         * Paramètre:
         *  Cette fonction appelle la requête Blocage Nantissement
         *
         *  return : ng.IPromise<Model.IListeContrat>
         */
        requeteOpposition(codeEtablissement: string, codeGuichet: string, numeroCompte: string, numeroPersonne: number, numeroEntiteTitulaire: number): ng.IPromise<myway.comInterdomaine.Model.IRecherche>;
        findCapaciteJuridique(capacitejuridique: string): string;
    }
}

declare module myway.comInterdomaine {
    class OppositionTemplateController {
        private $scope;
        private oppositionService;
        private $q;
        static $inject: string[];
        codeDevise: string;
        reference: boolean;
        constructor($scope: ng.IScope, oppositionService: myway.comInterdomaine.Service.OppositionService, $q: ng.IQService);
        getCapaciteJuridique(data: string): string;
        perteVol(data: string): string;
        carteIdendite(data: string): string;
        montantLibelle(codeMotif: string): string;
        afficheBloc(data: myway.comInterdomaine.Model.IOpposition, bloc: string): boolean;
    }
}

declare module myway.comInterdomaine {
    class SaisirPrenomController {
        private $scope;
        static $inject: string[];
        private prenom;
        private premierAlphabetique;
        private enterKeypressEvent;
        constructor($scope: ng.IScope);
        /**
         * @alias premierCaractereAlphabetique
         * @description : retourne True si le 1er caractère est alphabétique
         * @param {string} : prénom
         * @return {boolean}
         */
        premierCaractereAlphabetique(prenom: string): boolean;
        /**
         * @alias keydown
         * @description : event keydown
         * @param {event}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirRibController {
        private $scope;
        private saisieRiceService;
        private serviceAgentExtended;
        private $timeout;
        static LIST_KEY: string;
        static LIST_VALUE: string;
        private rib;
        private listCodeGuichets;
        private codeGuichetValidate;
        private cocxprCodard;
        private codeGuichetUniqueValue;
        private enterKeypressEvent;
        private errorMessage;
        private modeSupp;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieRiceService: SaisieRiceService, serviceAgentExtended: core.AgentService, $timeout: ng.ITimeoutService);
        /**
         * @alias keydown
         * @description : event keydown
         * @param {event}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
        /**
         * @alias setListCodeGuichet
         * @description : setter listCodeGuichets
         * @param {event Array<Object>}
         * @return {void}
         */
        setListCodeGuichet(param: Array<Object>): void;
        /**
         * @alias getListCodeGuichet
         * @description : Getter listCodeGuichets
         * @param {void}
         * @return {Array<Object>}
         */
        getListCodeGuichet(): Array<Object>;
        /**
         * @methodOf SaisirRiceController.listeGuichetsCallBack
         * @description
         * si le code etablissement est connu, on regarde les codes guichet correspondant.
         * @param {string} le code etablissement.
         * @return {void).
         */
        listeGuichetsCallBack(codeEtablissement: string): void;
        /**
         * @ngdoc function
         * @name isOneObject
         * @description
         * return true si la liste est de taille 1, false sinon.
         * @param {Array<Object>}
         * @returns {boolean}.
         */
        isOneObject(myArray: Array<Object>): boolean;
        /**
         * @ngdoc function
         * @name elemementExistInList
         * @description
         * return true si la liste contient obj, false sinon.
         * @param {string, Array<Object>}
         * @returns {boolean}.
         */
        elemementExistInList(obj: string, list: Array<Object>): boolean;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirRiceController {
        private $scope;
        private saisieRiceService;
        private $q;
        private enterKeypressEvent;
        private modeAppel;
        private rice;
        private isUniqueCodeGuichet;
        static PAD_LEFT_CARACTERE: string;
        static LIST_KEY: string;
        static LIST_VALUE: string;
        private modeExterne;
        private modeEtablissement;
        private codeEtablissementValidate;
        private codeEtablissementKeydown;
        private codeGuichetValidate;
        private codeGuichetKeydown;
        private cocxprCodard;
        private cocxprCodardValidate;
        private cocxprCodardKeydown;
        private cleRiceValidate;
        private cleRiceKeydown;
        private listCodeGuichets;
        private msgErreurKeys;
        private bindingGuichet;
        private bindingEtablissement;
        private selectedGuichet;
        private msgErreurEts;
        private calculCleCompteAutoEffectue;
        private controle;
        private msgErreurControle;
        private static msgErreurNonTrouve;
        private calculAutoCleRiceModeExterne;
        private codeEtablissementBackFocus;
        private codeGuichetBackFocus;
        private radicalBackFocus;
        private promesses;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieRiceService: SaisieRiceService, $q: ng.IQService);
        /**
         * @alias setValidRice
         * @description : modifie $valid du RICE si ce dernier est complet et valide
         * @param {void}
         * @return {void}
         */
        private setValidRice();
        private getFinAppel();
        /**
         * @alias getKeydown
         * @description : retourne True si un champs du RICE est en mode keydown
         * @param {void}
         * @return {boolean}
         */
        private getKeydown();
        /**
         * @alias valideControleAsynchrone
         * @description : controle l'existence du RICE (REST)
         * @param {void}
         * @return {void}
         */
        valideControleAsynchrone(): ng.IPromise<void>;
        /**
         * @deprecated use valideControleAsynchrone
         * @alias valideControle
         * @description : controle l'existence du RICE (REST)
         * @param {void}
         * @return {void}
         */
        valideControle(): void;
        /**
         * @alias onItemSelect
         * @description : event select de la liste des guichets
         * @param {Object} : item sélection
         * @return {void}
         */
        onItemSelect(item: Object): void;
        /**
         * @alias setListeGuichet
         * @description : setter listCodeGuichets
         * @param {Array<any>}
         * @return {void}
         */
        setListeGuichet(param: Array<any>): void;
        /**
         * @alias getListeGuichet
         * @description : getter listCodeGuichets
         * @param {void}
         * @return {Array<any>}
         */
        getListeGuichet(): Array<any>;
        /**
         * @methodOf SaisirRiceController.listeGuichetsCallBack
         * @description
         * si le code etablissement est connu, on regarde les codes guichet correspondant.
         * @param {string} le code etablissement.
         * @return {void).
         */
        listeGuichetsCallBack(codeEtablissement: string): ng.IPromise<void>;
        /**
         * @methodOf SaisirRiceController.isValideModeAppel
         * @description
         * renvoie true si le mode d'appel est valide false sinon.
         * @param {string} le mode d'appel passé au paramètre de la directive.
         * @return {boolean) : si le mode d'appel est valide ou non.
         */
        isValideModeAppel(paramModeAppel: string): boolean;
        /**
         * @ngdoc method
         * @name bindingData
         * @description
         * controle les champs saisi aprés un change event pour valider la saisie.
         * @param {string} nom du champs input
         * @param {string} valeur saisie.
         * @param {number} taille attendue.
         * @returns {void}.
         */
        bindingData(itemName: string, itemValue: string, itemSize: number): void;
        /**
         * @ngdoc method
         * @name normalizedValue
         * @description
         * controle les champs saisi aprés un blur event pour auto-completer la saisie.
         * @param {string} nom du champs input
         * @param {string} valeur saisie.
         * @param {number} taille attendue.
         * @returns {void}.
         */
        normalizedValue(itemName: string, itemValue: string, itemSize: number): void;
        /**
         * @alias keydown
         * @description : event keydown
         * @param {event}
         * @return {void}
         */
        keydown(event: JQueryKeyEventObject): void;
        /**
         * @ngdoc method
         * @name backspaceRice
         * @description
         * Si le champs en param est null ou d'une longueur = 0 ou 1 (avec un appui backspace) renvoie vrai
         * @param {string} valeur du champs
         * @returns {boolean}.
         */
        private backspaceRice(champ);
        /**
         * @ngdoc method
         * @name keydownBack
         * @description
         * capture l'event Backspace et passe le focus au champ d'avant en fonction si la méthode backspaceRice retourne vrai.
         * @param {JQueryKeyEventObject} event
         * @param {number} numero du champs en cours de modification
         * @returns {void}.
         */
        keydownBack(event: JQueryKeyEventObject, numChamps: number): void;
    }
}

interface IAttributeMswsfSaisieRice extends ng.IAttributes {
    rice: MyWay.Model.Rice;
    enterKeypressEvent: any;
    readOnly: boolean;
}
declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieRiceService {
        private serviceAgentExtended;
        private $q;
        private compteKey;
        private riceKey;
        private appelTermine;
        private static CONTRAT_VERSION;
        static $inject: string[];
        constructor(serviceAgentExtended: core.AgentService, $q: ng.IQService);
        /**
         * @Returns la cle du key.
         * @methodOf SaisieRiceService.isUniqueCodeGuichet
         * @description
         * renvoie true si la la liste des codes guichet contient un seul element, false sinon.
         * @param {MyWay.Model.Rice} rice valide.
         * @return {boolean).
         */
        isUniqueCodeGuichet(codeGuichetList: string[]): boolean;
        /**
         * @Returns la cle du key.
         * @methodOf SaisieRiceService.compteKeyCalculatorAsynchrone
         * @description
         * renvoie la clé du Compte pour un Rice d'un compte titre.
         * dans le cas d'un compte non titre, les cles seront automatiquement calculées et affectées par le service
         * @param {MyWay.Model.Rice} rice valide.
         * @return {string) la cle du compte.
         */
        compteKeyCalculatorAsynchrone(rice: MyWay.Model.Rice): ng.IPromise<string>;
        /**
         * @Returns la cle du key.
         * @methodOf SaisieRiceService.compteKeyCalculator
         * @description
         * renvoie la clé du Compte pour un Rice d'un compte titre.
         * dans le cas d'un compte non titre, les cles seront automatiquement calculer et affecté par le service
         * @param {MyWay.Model.Rice} rice valide.
         * @return {string) la cle du compte.
         */
        compteKeyCalculator(rice: MyWay.Model.Rice): string;
        /**
         * @alias setCompteKey
         * @description : setter compteKey
         * @param {string}
         * @return {void}
         */
        private setCompteKey(compteKeyParam);
        /**
         * @alias setRiceKey
         * @description : setter riceKey
         * @param {string}
         * @return {void}
         */
        private setRiceKey(riceKeyParam);
        /**
         * @Returns true si un compte titre.
         * @alias isCompteTitres.
         * @alias agentFonctionnel.isCompteTitres(COGXPR_Value : string).
         * @param {COGXPR} : string.
         * @return {boolean) true ->  pour un compte Titre.
         */
        isCompteTitres(COGXPR: string): boolean;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getParametresComptables().
         * @param {void} : string.
         * @description return l'object Context.GetParametresComptables().
         */
        getParametresComptables(): ng.IPromise<any>;
        /**
         * @ngdoc method
         * @name getCU3E
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * méthode qui retourne la liste de codes guichets COCXGU pour le code etablissement passé en param.
         * @param {string} : le code établissement courant dans le contexte
         * @returns {ng.IPromise<Object>} liste de codes guichet COCXGU.
         */
        getCU3E(COCXBQ: string): ng.IPromise<Object>;
        /**
         * @Returns ng.IPromise<string>.
         * @description
         * renvoie le code COCEEA de la table délocalisé CU3E.
         * @param {string} COCXBQ valide.
         * @return {ng.IPromise<string>.
         */
        private getCOCEEA(COCXBQ);
        /**
         * Crée un rib à partir d'un numéro de compte.
         * La clé est calculée si omise.
         * Un rib vide sera renvoyé si le numéro de compte est vide ou invalide.
         * @param numeroCompte Numéro du compte avec ou sans clé
         */
        createRibFromNumeroCompte(numeroCompte: string): MyWay.Model.Rice;
        /**
         * @Returns la cle du Rice.
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * renvoie la clé du Rice.
         * @param {string} COCXBQ valide.
         * @param {string} COCXGU valide.
         * @param {string} COGXPR valide.
         * @param {string} CODARD valide.
         * @param {string} NOGXCL valide.
         * @return {string) la cle du rice.
         */
        riceKeyCalculator(rice: MyWay.Model.Rice): string;
        /**
         * @Returns la cle du compteKeyCalculatorNoCompteTitre.
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * renvoie la clé du Compte pour un Rice Non compte titre.
         * @param {MyWay.Model.Rice} Rice valide.
         * @return {string) la cle du compte.
         */
        compteKeyCalculatorNoCompteTitre(rice: MyWay.Model.Rice): string;
        /**
         * @Returns la cle du compteKeyCalculatorCompteTitre.
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * renvoie la clé du Compte pour un Rice d'un compte titre.
         * @param {MyWay.Model.Rice} rice valide.
         * @return {ng.IPromise<string>) une promesse de cle du compte.
         */
        compteKeyCalculatorCompteTitre(rice: MyWay.Model.Rice): ng.IPromise<string>;
        /**fonction pour le mode externe du composant
         * @Returns a any[].
         * @alias transformAlphaToNumeric.
         * @alias agentFonctionnel.transformAlphaToNumeric(data:string).
         * @param {data} : string.
         * @return {any[]) la suite alphanumerique est transforme en suite numerique.
         */
        transformAlphaToNumeric(data: string): any[];
        /**
         * fonction qui formatte un RICE
         * @Returns a MyWay.Model.Rice.
         * @alias formatteRICE.
         * @param {codeEtablissement} : string.
         * @param {codeGuichet} : string.
         * @param {numeroCompte} : string.
         * @return {MyWay.Model.Rice)
         */
        formatteRICEAsynchrone(codeEtablissement: string, codeGuichet: string, numeroCompte: string, cleCompte?: string): ng.IPromise<MyWay.Model.Rice>;
        /**
         * @alias setAppelTermine.
         * @description : setter AppelTermine
         * @param enCours {boolean}
         * @return {void}
         */
        setAppelTermine(termine: ng.IPromise<boolean>): void;
        /**
         *
         * @alias getAppelTermine
         * @description : getter AppelTermine
         * @return {boolean}
         */
        getAppelTermine(): ng.IPromise<boolean>;
        /**
         * @deprecated use formatteRICEAsynchrone
         * fonction qui formatte un RICE
         * @Returns a MyWay.Model.Rice.
         * @alias formatteRICE.
         * @param {codeEtablissement} : string.
         * @param {codeGuichet} : string.
         * @param {numeroCompte} : string.
         * @return {MyWay.Model.Rice)
         */
        formatteRICE(codeEtablissement: string, codeGuichet: string, numeroCompte: string, cleCompte?: string): MyWay.Model.Rice;
        /**fonction qui vérifie l'existence du rib
         * @alias verifieExistenceRICE.
         * @return ng.IPromise<string> => le code état
         * @param string => rib
         */
        verifieExistenceRICE(rib: string): ng.IPromise<any>;
    }
}

declare module myway.comInterdomaine {
    class AffectationRadicalService {
        private serviceAgentExtended;
        private saisieRiceService;
        rice: MyWay.Model.Rice;
        static $inject: string[];
        constructor(serviceAgentExtended: core.AgentService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * @alias getAffectationAutoRadical.
         * @description calcule le radical avec l'établissement, le code produit et le code guichet passés en entrée puis calcule les clés
         * @param codeEts : etablissement
         * @param codeProduit : produit
         * @param codeGuichet : guichet
         * @return {Object} le rice complet.
         */
        getAffectationAutoRadical(codeEts: string, codeProduit: string, codeGuichet: string): ng.IPromise<Object>;
        /**
         * @Returns {MyWay.Model.Rice}
         * @alias getKeyRice.
         * @param {void}
         * @description le RICE avec les clés calculées.
         */
        getKeyRice(): MyWay.Model.Rice;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
        /**
         * @ngdoc method
         * @name getCU3E
         * @methodOf AffectationRadicalService.getCU3E
         * @param {void}
         * @description
         * Récupère les infos de la table délocalisées CU3E
         * @returns {Object}
         */
        private getCU3E(COCXBQ);
    }
}

declare module myway.comInterdomaine {
    class AgentConnecteService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: core.AgentService);
        /**
         * @alias estAgenceConnecteLaHenin
         * @description : retourne true si l'agent connecté est un agent de La Hénin
         * @param {void}
         * @return {boolean}
         */
        estAgenceConnecteLaHenin(): ng.IPromise<boolean>;
        /**
         * @ngdoc method
         * @name getCU1T
         * @methodOf AgentConnecteService.getCU1T
         * @param {void}
         * @returns {Object}
         */
        private getCU1T(COCXBQ);
    }
}

declare module MyWay.Services {
    class BlobUtils {
        /**
         * @ngdoc method
         * @name b64toBlob
         * @methodOf myWay.EntrepriseNumerique.mweePieceJointeService
         * @description
         * Renvoie un Blob à partir d'une chaine base64.
         * @param {string} b64Data données encodés en base 64.
         * @param {string=} contentType type MIME des données.
         * @param {number=} sliceSize taille du découpage pour la conversion en tableau d'entiers non signés.
         * @returns {Blob} Blob.
         */
        static b64toBlob(b64Data: string, contentType?: string, sliceSize?: number): Blob;
    }
}

declare module myway.comInterdomaine {
    class CompteService {
        private $q;
        private serviceAgentExtended;
        private saisieRiceService;
        private static MINI_PROFIL_VERSION;
        static $inject: string[];
        private listeCodeProduit;
        constructor($q: ng.IQService, serviceAgentExtended: core.AgentService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * OBSOLETE
         * Méthode permettant de récupérer la liste des comptes clients à partir d'un compte passé en paramètre
         * @param codeEtablissement le code établissmement
         * @param codeTransaction le code de la transaction
         * @param filtreColdeProduit tableau contenant les codes produits à filtrer
         */
        getListeCompteDuClientParRice(codeEtablissement: string, compte: MyWay.Model.Compte, codeTransaction: string, filtreCodeProduit: string[], exclusionCompteIdentique: boolean, exclusionIntituleCompte: boolean): ng.IPromise<MyWay.Model.Compte[]>;
        /**
         * OBSOLETE
         * Méthode permettant de récupérer la liste des comptes clients à partir d'un numero de client passé en paramètre
         * @param codeEtablissement le code établissement
         * @param numeroClient le numéro du client
         * @param filtreCodeProduit le tableau contenant les codes produit à filtrer
         * @param exclusionIntituleCompte indique si l'intitulé du compte doit être exclu de la restitution ou pas
         */
        getListeCompteDuClientParNumeroClient(codeEtablissement: string, numeroClient: string, codeTransaction: string, filtreCodeProduit: string[], exclusionIntituleCompte: boolean): ng.IPromise<MyWay.Model.Compte[]>;
        /**
         * OBSOLETE
         * Méthode permettant de récupérer un compte client à partir d'un rice
         * Renvoie le compte du client
         * @param codeEtablissement le code établissement
         * @param rice le rice du client
         */
        getCompteDuClientParRice(codeEtablissement: string, rice: MyWay.Model.Rice): ng.IPromise<MyWay.Model.Compte>;
        /**
         * Traitement des informations du mini profil
         * @param miniProfil le mini profil renvoyé par la QR
         * Renvoie une liste de compte
         */
        traitementInformationMiniProfil(miniProfil: Object[]): MyWay.Model.Compte[];
        /**
         * Filtre les comptes pour ne renvoyer que ceux éligibles au virement
         * @param listeCompte Liste des comptes du client
         * @param codeTransaction le code de la transaction
         * @param compte le compte du client
         */
        getComptesEligibleAuVirement(listeCompte: MyWay.Model.Compte[], codeTransaction: string, compte: MyWay.Model.Compte): MyWay.Model.Compte[];
        /**
         * Méthode permettant de filtrer une liste de compte client par code produit
         * @param listeCompte la liste des comptes clients à filtrer
         * @param exclusionCompteIdentique indique si le compte qui a servi à rechercher la liste des comptes clients doit être exclu ou pas
         */
        filtrerCompteParCodeProduit(listeCompte: MyWay.Model.Compte[], compte: MyWay.Model.Compte, filtreCodeProduit: string[], exclusionCompteIdentique: boolean): MyWay.Model.Compte[];
        /**
         * Méthode pour récupérer le libellé des produits associés au compte
         * @param codeEtablissement le code de l'établissement
         * @param listeCompte la liste des comptes du client
         */
        recupererLibelleProduit(codeEtablissement: string, listeCompte: MyWay.Model.Compte[]): ng.IPromise<MyWay.Model.Compte[]>;
        /**
         * Formate le libelle des comptes que l'on peut choisir dans une liste deroulante
         * @param listeCompte la liste des comptes à formater
         */
        getListeCompteFormatesPourListeDeroulante(listeCompte: MyWay.Model.Compte[]): Object[];
    }
}

declare module myway.comInterdomaine {
    /**
     * Règles pour les modes financiers
     */
    class RuleFileContent {
        static modeFinancier: any;
        static modeFinancierVAD: any;
    }
    class InterDomainCoreServiceProvider implements ng.IServiceProvider {
        constructor();
        $get($q: ng.IQService, $http: ng.IHttpService, serviceAgentExtended: core.AgentService): InterDomainCoreService;
    }
    class InterDomainCoreService {
        private $q;
        private $http;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, $http: ng.IHttpService, serviceAgentExtended: core.AgentService);
        getFile(filename: string): any;
        /**
         * @ngdoc method
         * @name isApplicationBascule
         * @methodOf myWay.SocleFonctionnel.InterDomainCoreService
         * @description
         * Renvoie l'état de bascule d'une application pour l'établissement dans le contexte (true/false).
         * @param {string} codeApplication Code application concerné par la bascule.
         * @returns {Object} Promesse contenant un booléen.
         */
        isApplicationBascule(codeApplication: string): ng.IPromise<boolean>;
    }
}

declare module MyWay.Services {
    class DateUtils {
        static getDate(jour: string, mois: string, annee: string): Date;
        static fromJJMMAAAA(date: string): Date;
        static fromAAAAMMJJ(date: string): Date;
        /**
         * Méthode permettant de convertir une date ayant comme format JJ/MM/AAAA au format JJMMAAAA
         * @param date la date que l'on veut convertir
         * @return string la date convertit
         */
        static conversionDateEnJJMMAAAA(date: string): string;
    }
}

declare module myway.comInterdomaine {
    class DeviseService {
        private serviceAgentExtended;
        static $inject: string[];
        private static URI_GET_DEVISES;
        private static URI_GET_DEVISE_BY_CODE;
        private static CODE_EUR_DEVISE;
        constructor(serviceAgentExtended: core.AgentService);
        /**
         * @ngdoc function
         * @name getDevisesDTO
         * @methodOf myway.comInterdomaine.DeviseService.getDevisesDTO()
         * @description
         * transforme une collection d'object passé en param de type any à un objet de type MyWay.Model.Devise[].
         * @param {any[]}.
         * @returns {MyWay.Model.Devise[]}, un tableau d'objets de type MyWay.Model.Devise[].
         */
        private getDevisesDTO(param);
        /**
         * @ngdoc function
         * @name getDevises
         * @methodOf myway.comInterdomaine.DeviseService.getDevises()
         * @description
         * Récupère toutes les devises du référentiel.
         * @param {void}.
         * @returns {ng.IPromise<DevisesModel[]>}, une promesse contenant le tableau des devises.
         */
        getDevises(): ng.IPromise<MyWay.Model.Devise[]>;
        /**
         * @ngdoc function
         * @name getDeviseByCode
         * @methodOf myway.comInterdomaine.DeviseService.getDeviseByCode()
         * @description
         * Récupère une devise à partir de son code.
         * @param {string}, code de la devise.
         * @returns {ng.IPromise<MyWay.Model.Devise>}, une promesse contenant l'objet de type MyWay.Model.Devise.
         */
        getDeviseByCode(code: string): ng.IPromise<MyWay.Model.Devise>;
        /**
         * @ngdoc function
         * @name getDeviseEuro
         * @methodOf myway.comInterdomaine.DeviseService.getDeviseEuro()
         * @description
         * Récupère la devise euro.
         * @param {void}.
         * @returns {ng.IPromise<MyWay.Model.Devise>}, une promesse contenant l'objet de type MyWay.Model.Devise pour la devise EUR.
         */
        getDeviseEuro(): ng.IPromise<MyWay.Model.Devise>;
    }
}

declare module myway.comInterdomaine {
    class ImpressionService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: core.AgentService);
        derogationImpression(): ng.IPromise<boolean>;
    }
}

declare module MyWay.Services {
    /**
     * @name MyWay.Services.LabelValueEnum
     * @description
     * Cette classe permet de créer une énumération avec des méthodes à l'image des énums en java.
     * De plus, on peut associer à chaque valeur un libellé qui pourra par exemple être utilisé dans une vue.
     *
     * Voici un exemple d'implémentation:
     * <code>
     * export class EtatLieuOccupationEnum extends MyWay.Services.LabelValueEnum<string> {
     *   public static EN_COURS = new EtatLieuOccupationEnum("En cours", "EN_COURS");
     *   public static A_VENIR = new EtatLieuOccupationEnum("A venir", "A_VENIR");
     *   public static TERMINE = new EtatLieuOccupationEnum("Terminé", "TERMINE");
     * }
     *
     * var etat: EtatLieuOccupationEnum = EtatLieuOccupationEnum.EN_COURS;
     * console.log("etat", etat.value, etat.label);
     * </code>
     *
     * Le 1er argument du constructeur correspond au label et le 2nd à la valeur.
     * Les méthodes statiques renverront des types any au lieu du type générique. C'est à cause d'une limitation de typescript !
     */
    class LabelValueEnum<U> {
        label: string;
        value: U;
        constructor(label: string, value: U);
        /**
         * @name toString
         * @methodOf MyWay.Services.LabelValueEnum
         * @description
         * Renvoie la valeur de l'objet.
         * @returns {string} Valeur.
         */
        toString(): string;
        /**
         * @name values
         * @methodOf MyWay.Services.LabelValueEnum
         * @static
         * @description
         * Renvoie toutes les valeurs de l'énumération.
         * @returns {any[]} Valeurs.
         */
        static values<T extends LabelValueEnum<any>>(): any[];
        /**
         * @name valuesFromList
         * @methodOf MyWay.Services.LabelValueEnum
         * @static
         * @description
         * Renvoie les valeurs d'une liste énumérée.
         * @param {Object[]} items Liste énumérée (chaque élément doit être une instance héritée de LabelValueEnum).
         * @returns {any[]} Valeurs.
         */
        static valuesFromList<T extends LabelValueEnum<any>>(items: T[]): any[];
        /**
         * @name fromValue
         * @methodOf MyWay.Services.LabelValueEnum
         * @static
         * @description
         * Renvoie un élément de l'énumération à partir d'une valeur donnée.
         * @param {any} value Valeur à chercher.
         * @returns {Object} Element de l'énumération correspondant à la valeur (instance héritée de LabelValueEnum).
         */
        static fromValue<T extends LabelValueEnum<any>>(value: any): T;
        /**
         * @name list
         * @methodOf MyWay.Services.LabelValueEnum
         * @static
         * @description
         * Renvoie une liste énumérée. Il est possible d'effectuer une transformation via une fonction.
         * @param {function=} transform Fonction de transformation.
         * @returns {array} Liste énumérée.
         */
        static list<T extends LabelValueEnum<any>>(transform?: (item: T) => any): any[];
    }
}

declare module myway.comInterdomaine {
    class RuleFileName {
        static modeFinancier: string;
        static modeFinancierVAD: string;
    }
    class LoadRuleService {
        private $q;
        private interDomainCoreService;
        private serviceAgentExtended;
        static $inject: string[];
        private rules;
        constructor($q: ng.IQService, interDomainCoreService: InterDomainCoreService, serviceAgentExtended: core.AgentService);
        private addConfiguration(ruleFile, configuration);
        private addRuleSets(ruleFile, ruleSets);
        private addRuleSet(ruleFile, ruleSet);
        private addRules(ruleSet, rules);
        private addRule(ruleSet, rule);
        /**
         * Charge un fichier contenant un ensemble de règles et renvoie un objet typé après contrôle de l'intégrité du fichier.
         * Les règles de chaque ruleset sont ré-ordonnées comme suit:
         * - règles core
         * - règles base
         * - autres règles (reprenant l'ordre du fichier)
         * Cet ordre a pour but d'optimiser le temps de traitement et de réduire le risque d'erreur.
         * @memberOf loadRuleService
         * @param {string} ruleFilename Fichier de règle. Voir la classe RuleFileName qui contient un ensemble de constantes.
         * @returns {promise} Renvoie une promesse d'un objet de type MyWay.Model.RuleFile.
         * @throws Une exception sera levée si le fichier est invalide
         * @example
         * this.loadRuleService.getRuleFile(RuleFileName.ModeFinancier).then((ruleFile) => {
         *       console.log(ruleFile);
         * });
         */
        getRuleFile(ruleFilename: string): ng.IPromise<MyWay.Model.RuleFile>;
    }
}

declare module MyWay.Services {
    class ObjectUtils {
        /**
         * Check if value is present within object direct attribute values.
         * @static
         * @memberOf MyWay.ObjectUtils
         * @category Utility
         * @param {Object} object The object to inspect.
         * @param {any} value The value to search for.
         * @returns {boolean} Returns true if value is found.
         * @example
         * var Article = { Le: "le", La: "la", Les: "les" };
         * MyWay.ObjectUtils.hasOwnValue(Article, "les");
         * // => true
         * MyWay.ObjectUtils.hasOwnValue(Article, "lse");
         * // => false
         */
        static hasOwnValue: (object: any, value: any) => boolean;
    }
}

declare module myway.comInterdomaine {
    class RuleService {
        private $parse;
        private $q;
        private loadRuleService;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($parse: ng.IParseService, $q: ng.IQService, loadRuleService: LoadRuleService, serviceAgentExtended: core.AgentService);
        /**
         * Valide une règle et renvoie son état de validation (booléen).
         *
         * @memberOf ruleService
         * @param {MyWay.Model.Rule} rule Règle à valider.
         * @param {Object} context Contexte de filtrage (l'objet contient un ensemble de clé/valeur).
         * @returns {boolean} Renvoie true si la règle est validée.
         * @throws Une exception sera levée si l'opérateur n'a pas de code associé ou si la valeur du contexte n'est pas définie
         */
        private validateRule(rule, context);
        /**
         * Renvoie le résultat d'une opération sur 2 ensembles: celui fourni en paramètre (ensemble)
         * et celui contenu dans la règle (rule.output).
         * @memberOf ruleService
         * @param {array} ensemble Ensemble initial.
         * @param {MyWay.Model.Rule} rule Règle.
         * @returns {array} Renvoie un tableau (résultat d'une opération sur 2 ensembles).
         * @throws Une exception sera levée si le type d'opération n'a pas de code associé
         */
        private getResultSet(ensemble, rule);
        /**
         * Renvoie un tableau d'objets filtrés à partir d'un ensemble d'éléments et d'un tableau d'objet.
         * Chaque objet sera intégré si sa valeur existe dans l'ensemble. La valeur est extraite à partir de la configuration.
         * @memberOf ruleService
         * @param {array} ensemble Ensemble finalisé.
         * @param {MyWay.Model.RuleConfiguration} ruleConfiguration Configuration du fichier de règle, contient notamment
         *                      le nécessaire pour faire le lien entre l'ensemble d'éléments et le tableau d'objets à filtrer.
         * @param {array}  items Tableau d'objets à filtrer.
         * @returns {array} Renvoie un tableau d'objets filtrés.
         */
        private getOutputItems<T>(filter, ruleConfiguration, items);
        /**
         * Traite un ruleset et renvoie un tableau d'objets filtrés.
         * Les règles du ruleset doivent avoir être triées préalablement (étape réalisée par le service LoadRuleService).
         * Le traitement est stoppé dès qu'une erreur bloquante apparait et un tableau vide est alors renvoyé.
         * @throws Une exception sera levée en cas d'erreur grave ou fonctionnelle.
         * @memberOf ruleService
         * @param {MyWay.Model.RuleSet} ruleset Ruleset à traiter.
         * @param {MyWay.Model.RuleConfiguration} ruleConfiguration Configuration du fichier de règle.
         * @param {Object} context Contexte de filtrage (l'objet contient un ensemble de clé/valeur).
         * @param {array} items Tableau d'objets à filtrer.
         * @returns {array} Renvoie un tableau d'objets filtrés.
         */
        private processRuleSet<T>(ruleSet, ruleConfiguration, context, items);
        /**
         * Filtre une liste d'objets par rapport à un contexte donné et un fichier de règles.
         * La finalité est de filtrer par le biais d'un unique ruleset qui correspondra au contexte.
         * Chaque ruleset est testé en respectant l'ordre naturel du fichier.
         * Dès qu'un ruleset répond positivement aux tests, la liste est filtrée par rapport à ce ruleset et le processus s'arrête.
         * De fait, l'ordre des rulesets doit être décroissant par priorité (de la plus élevée vers la moins élevée).
         * @memberOf ruleService
         * @param {string} ruleFilename Fichier de règle. Voir la classe RuleFileName qui contient un ensemble de constantes.
         * @param {Object} context Contexte de filtrage (l'objet contient un ensemble de clé/valeur).
         * @param {array}  items Tableau d'objets à filtrer.
         * @returns {promise} Renvoie une promesse d'un nouveau tableau d'objets filtrés.
         * @throws La promesse échouera en cas d'erreur ou si aucun ruleset n'est validé
         * @example
         *  var context: { [index: string]: any } = {
         *      fonctionnalite: "VERSEMENT",
         *      produit: { CODIPR: "0000", COEXSP: "0060", IDEGPS: "0001238", LCEGCO: "LIVRET A", LNEGCO: "LIVRET A PERSONNE PHYSIQUE" },
         *      deviseEuro: true,
         *      habilitation: [ "SHJM25" ]
         *  };
         *  var modes = [ ... ];
         *  this.ruleService.applyRules<MyWay.Model.ModeFinancier>(RuleFileName.ModeFinancier, context, modes).then((modes) => {
         *      console.log("modes filtres", modes);
         *      return modes;
         *  });
         */
        applyRules<T>(ruleFilename: string, context: {
            [index: string]: any;
        }, items: T[]): ng.IPromise<T[]>;
    }
}

declare module MyWay.Services {
    /**
     * @name MyWay.Services.StringEnum
     * @description
     * Cette classe permet de créer une énumération de string, avec des méthodes à l'image des énums en java. L'unique attrait de cette classe
     * est la possibilité d'utiliser ou d'ajouter des méthodes.
     *
     * Voici un exemple d'implémentation:
     * <code>
     * class TypeDocumentEnum extends MyWay.Services.StringEnum {
     *    public static JUSTIFICATIF_IDENTITE = new TypeDocumentEnum("JUSTIFICATIF_IDENTITE", "ID");
     *    public static JUSTIFICATIF_IDENTITE_MINEUR = new TypeDocumentEnum("JUSTIFICATIF_IDENTITE_MINEUR", "IDMI");
     *    public static JUSTIFICATIF_DOMICILE = new TypeDocumentEnum("JUSTIFICATIF_DOMICILE", "JD");
     *    public static JUSTIFICATIF_REVENU = new TypeDocumentEnum("JUSTIFICATIF_REVENU", "JR");
     * }
     * var type: TypeDocumentEnum = TypeDocumentEnum.JUSTIFICATIF_IDENTITE;
     * console.log("type", type.value);
     * </code>
     *
     * Le 1er argument du constructeur correspond à la clé de l'énumération. Il sert uniquement en phase de debug parce que la valeur n'est pas forcément parlante.
     *
     * Si Typescript n'autorise pas les énum de type string, il est possible de tromper le compilateur par un cast <any> des valeurs string.
     * Etant donné la nature des énumérations Typescript, on ne peut pas utiliser de méthode associée.
     * <code>
     * enum TypeDocumentEnum {
     *    JUSTIFICATIF_IDENTITE = <any> "ID",
     *    JUSTIFICATIF_IDENTITE_MINEUR = <any> "IDMI",
     *    JUSTIFICATIF_DOMICILE = <any> "JD",
     *    JUSTIFICATIF_REVENU = <any> "JR"
     * }
     * var type: TypeDocumentEnum = TypeDocumentEnum.JUSTIFICATIF_IDENTITE;
     * console.log("type", type);
     * </code>*
     *
     *
     *
     */
    class StringEnum {
        key: string;
        value: string;
        constructor(key: string, value: string);
        /**
         * @name toString
         * @methodOf MyWay.Services.StringEnum
         * @description
         * Renvoie la valeur de l'objet.
         * @returns {string} Valeur.
         */
        toString(): string;
        /**
         * @name values
         * @methodOf MyWay.Services.StringEnum
         * @static
         * @description
         * Renvoie toutes les valeurs de l'énumération.
         * @returns {string[]} Valeurs.
         */
        static values<T extends StringEnum>(): string[];
        /**
         * @name valuesFromList
         * @methodOf MyWay.Services.StringEnum
         * @static
         * @description
         * Renvoie les valeurs d'une liste énumérée.
         * @param {Object[]} items Liste énumérée (chaque élément doit être une instance héritée de StringEnum).
         * @returns {string[]} Valeurs.
         */
        static valuesFromList<T extends StringEnum>(items: T[]): string[];
        /**
         * @name fromValue
         * @methodOf MyWay.Services.StringEnum
         * @static
         * @description
         * Renvoie un élément de l'énumération à partir d'une valeur donnée.
         * @param {string} value Valeur à chercher.
         * @returns {Object} Element de l'énumération correspondant à la valeur (instance héritée de StringEnum).
         */
        static fromValue<T extends StringEnum>(value: string): T;
        /**
         * @name list
         * @methodOf MyWay.Services.StringEnum
         * @static
         * @description
         * Renvoie une liste énumérée. Il est possible d'effectuer une transformation via une fonction.
         * @param {function=} transform Fonction de transformation.
         * @returns {array} Liste énumérée.
         */
        static list<T extends StringEnum>(transform?: (item: T) => any): any[];
    }
}

declare module MyWay.Services {
    /**
     * Service de manipulation des strings.
     */
    class StringUtils {
        constructor();
        /**
         * @deprecated use lodash padLeft (_.padLeft)
         */
        static padLeft(str: string, padString: string, length: number): string;
        /**
         * @deprecated use lodash padRight (_.padRight)
         */
        static padRight(str: string, padString: string, length: number): string;
        /**
         * @deprecated use lodash padLeft (_.padLeft)
         */
        static padLeftNumber(str: string, padString: string, length: number): string;
        static capitalize(str: string): string;
        /**
         * Méthode qui permet de déterminer si une chaine de caractère commence par le motif passé en paramètre
         * @param chaine la chaine sur laquelle on effectue la recherche
         * @param motif le motif que l'on recherche en début de chaine
         *
         * @deprecated use lodash startsWith (_.startsWith)
         */
        static startsWith(chaine: string, motif: string): boolean;
        /**
         * Méthode qui permet de déterminer si une chaine de caractère termine par le motif passé en paramètre
         * @param chaine la chaine sur laquelle on effectue la recherche
         * @param motif le motif que l'on recherche en fin de chaine
         *
         * @deprecated use lodash endsWith (_.endsWith)
         */
        static endsWith(chaine: string, motif: string): boolean;
        /**
         * Retourne une chaîne de caractère sans les accents.
         * @param chaine La chaine à convertir
         */
        static stripAccents(str: string): string;
    }
}

declare module myway.comInterdomaine {
    class SaisirSirenController {
        private $scope;
        private saisieSirenService;
        private siren;
        private isValid;
        private enterKeypressEvent;
        static MAX_LENGTH: number;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieSirenService: SaisieSirenService);
        /**
         * @Alias affineValue.
         * @Param {siren: string}.
         * @Description binding data et application des regles de contrôle de saisie.
         * @Return {void}.
         */
        affineValue(siren: string): void;
        /**
         * @Alias keydown.
         * @Param {JQueryKeyEventObject}.
         * @Description event keydown
         * @Return {void}.
         */
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieSirenService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: core.AgentService);
        /**
         * @Returns a {boolean}.
         * @alias getSirenValidity.
         * @param {currentSiren} : string.
         * @return {boolean} true si le siren est valide false sinon.
         */
        getSirenValidity(currentSiren: string): boolean;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module MyWay.Context {
    class ApplicationName {
        static client: string;
        static versement: string;
        static operation: string;
    }
    class DataKey {
        static financier: string;
        static client: string;
        static operation: string;
        static agences: string;
    }
    class OriginePortefeuille {
        static autresMotifs: string;
        static propPtf: string;
    }
}

declare module MyWay {
    class CustomEvents {
        static ENTER_KEYPRESS: string;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    enum KeyCode {
        DOWN_ARROW = 40,
        RIGHT_ARROW = 39,
        UP_ARROW = 38,
        LEFT_ARROW = 37,
        ESCAPE = 27,
        ENTER = 13,
        BACKSPACE = 8,
        DELETE = 46,
        TABULATION = 9,
        SPACE = 32,
        ZERO = 48,
        PLUS = 107,
        MINUS = 109,
        HOME = 36,
        END = 35,
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    interface IFocusIfBoolDirectiveScope extends ng.IAttributes {
        mwsfFocusIfBool: any;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    /**
     * Interface pour la configuration de la directive mwUppercase
     */
    interface IMwUppercaseSettings {
        /**
         * Indicateur d'acceptation des accents.<br>
         * Si false, les caractères accentués sont convertis par leur équivalent sans accent
         */
        accent?: boolean;
    }
}

declare module myway.comInterdomaine {
    interface ITypologieDirectiveScope extends ng.IScope {
        listTypos: Object;
        modeOnglet: boolean;
        list: Array<string>;
        keyList: string;
        valueViewList: string;
        monModel: string;
        isSelected: Object;
        ngModel: string;
    }
}

declare module MyWay.Model {
    /**
     * Interface qui correspond à la structure d'un fichier de règles.
     * Ce fichier permet de filtrer une liste d'objets par rapport à un contexte donné.
     * La finalité est de filtrer par le biais d'un unique ruleset qui correspondra au contexte.
     * - configuration: contient la configuration générale relative à l'application des règles et l'exploitation des données en sortie.
     * - ruleSet: un ruleSet est un ensemble de règles. Un fichier contient un ou plusieurs ruleSets.
     *            La valeur est donc un objet ou un tableau d'objet.
     */
    interface IRuleFile {
        configuration: RuleConfiguration;
        ruleSet: any;
    }
    /**
     * Interface qui correspond à la configuration d'un fichier de règles.
     * - outputField: attribut de l'objet dans la liste à filtrer (correspondance avec les valeurs du tableau output dans l'objet Rule).
     */
    interface IRuleConfiguration {
        outputField: string;
    }
    /**
     * Interface qui correspond à la structure d'un ensemble de règles.
     * - description: description du ruleset, ce champ est uniquement informatif, d'une part pour la lisibilité du fichier de règles
     *                   et d'autre part pour la gestion des erreurs.
     * - rule: un ruleset contient une ou plusieurs règles. La valeur est donc un objet ou un tableau d'objet.
     */
    interface IRuleSet {
        description: string;
        rule: any;
    }
    /**
     * Interface qui correspond à la structure d'une règle.
     * - context: correspond à un attribut de l'objet contexte.
     * - field: champ optionnel. Si précisé, il indique que le contexte de la règle est un objet dont l'attribut est indiqué par ce champ.
     * - operator: opérateur de validation de la règle (voir la classe des opérateurs plus bas).
     * - value: valeur à tester avec le contexte donné.
     * - type: type de règle (voir la classe des types plus bas).
     * - output: valeur ou tableau de valeurs à filtrer si la règle est validée.
     *
     * Il y a 4 types de règles:
     * - core. Pas associé à un ensemble d'éléments. Il permet uniquement d'indiquer qu'une règle est obligatoire.
     *         La non-validation de cette règle arrêtera immédiatement l'analyse du ruleset correspondant.
     * - base. Définit un ensemble initial d'éléments qui pourra éventuellement être modifié par d'autres règles.
     * - union. Définit un ensemble d'éléments qui sera ajouté à l'ensemble courant
     * - intersect. Définit un ensemble d'éléments qui fera l'objet d'une intersection avec l'ensemble courant
     *              (seuls les éléments communs aux deux ensembles seront conservés)
     *
     * Un ruleset est validé si toutes ses règles core sont valides et si une règle de base est validée dans le cas où elle est définie.
     * Par contre, une exception sera levée si plusieurs règles de base sont validées.
     *
     * Un ruleset aura généralement une règle de base qui définira son ensemble d'éléments par défaut.
     * Cependant, certains rulesets peuvent avoir uniquement des cas spécifiques, on utilise alors une règle core.
     * Si une règle de base est définie et qu'elle ne suffit pas à décrire les conditions de validation du ruleset, on peut
     * ajouter une ou plusieurs règles core.
     * Pour affiner le filtre d'un ruleset ou pour gérer des rulesets très spécifiques, on peut ajouter des règles secondaires
     * de type union ou intersection.
     * Un ruleset peut également contenir plusieurs règles de base mais une seule pourra être validée.
     *
     * La valeur du contexte est comparée à celle de la règle via un opérateur.
     * La valeur du contexte peut être un tableau et dans ce cas, la comparaison se fera sur chacun de ses éléments jusqu'à
     * ce que l'un d'eux réussisse le test. L'inverse est également possible (le tableau de valeur est dans la règle), mais dans ce cas,
     * les opérateurs autorisés sont restreints à "in" et "notIn".
     */
    interface IRule {
        context: string;
        field: string;
        operator: string;
        value: any;
        type: string;
        output: any;
    }
    /**
     * Enumération des opérateurs de règle
     */
    class RuleOperator {
        static equal: string;
        static different: string;
        static in: string;
        static notIn: string;
    }
    /**
     * Enumération des types de règle
     */
    class RuleType {
        static core: string;
        static base: string;
        static union: string;
        static intersect: string;
    }
}

declare module MyWay.Model {
    class RuleConfiguration {
        outputField: string;
        constructor(configuration: IRuleConfiguration);
    }
    class RuleFile {
        configuration: RuleConfiguration;
        ruleSets: RuleSet[];
        constructor();
    }
    class RuleSet {
        private rules;
        coreRuleCount: number;
        baseRuleCount: number;
        description: string;
        constructor(ruleSet: IRuleSet);
        addRule(rule: Rule): void;
        getRules(): Rule[];
        validateRuleCount(): boolean;
        sortRules(): void;
    }
    class Rule {
        context: string;
        field: string;
        operator: RuleOperator;
        value: any;
        type: string;
        output: any[];
        constructor(rule: IRule);
        isPrimary(): boolean;
    }
}

declare module myway.comInterdomaine {
    interface IMwsfSaisieMontantDeviseMessages {
        required?: string;
        min?: string;
        max?: string;
        devise?: string;
    }
    class MwsfSaisieMontantDeviseController {
        private $scope;
        private $attrs;
        private $interpolate;
        private $element;
        private $filter;
        private $q;
        private mwsfDeviseService;
        id: string;
        name: string;
        value: MyWay.Model.MontantDevise;
        messages: IMwsfSaisieMontantDeviseMessages;
        settings: IMwMontantSettings;
        forcePositive: boolean;
        readOnly: boolean;
        required: string;
        isRequired: boolean;
        maxLength: number;
        min: number;
        max: number;
        loading: boolean;
        montantController: ng.INgModelControllerExtended;
        private formController;
        _onBlur: any;
        private onBlurMessageDerreur;
        ngFocus: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $attrs: ng.IAttributes, $interpolate: ng.IInterpolateService, $element: ng.IAugmentedJQuery, $filter: ng.IFilterService, $q: ng.IQService, mwsfDeviseService: DeviseService);
        /**
         * @ngdoc function
         * @name checkDirectiveAttributes
         * @methodOf myway.comInterdomaine.MwsfSaisieMontantDeviseController
         * @description
         * fonction de controle des params d'entrées.
         * @returns {void}.
         */
        private checkDirectiveAttributes();
        /**
         * @ngdoc function
         * @name initDevise
         * @methodOf myway.comInterdomaine.MwsfSaisieMontantDeviseController
         * @description
         * Initialise la devise dans le modèle.
         */
        private initDevise();
        /**
         * @name onBlur
         * @methodOf myway.comInterdomaine.MwsfSaisieMontantDeviseController
         * @description event onBlur
         * @param {MyWay.Model.MontantDevise}
         * @returns {void}.
         */
        onBlur(item: MyWay.Model.MontantDevise): void;
        /**
         * @name donneFocus
         * @methodOf myway.comInterdomaine.MwsfSaisieMontantDeviseController
         * @description indique si on donne le focus au montant en fonction du mode lecture et du parametre ngfocus de la directive
         * @param {void}
         * @returns {boolean}.
         */
        donneFocus(): boolean;
        /**
         * @name isReadOnly
         * @methodOf myway.comInterdomaine.MwsfSaisieMontantDeviseController
         * @description mode lecture (champs grisé) du montant tant que la devise n'est pas renseignée
         * @param {void}
         * @returns {boolean}.
         */
        isReadOnly(): boolean;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirMwsfMontantDeviseCtrl {
        private $scope;
        static $inject: string[];
        private montant;
        private min;
        private max;
        private readOnly;
        private forcePositive;
        private isMinError;
        private isMaxError;
        constructor($scope: ng.IScope);
        getReadOnly(): boolean;
        setReadOnly(param: boolean): void;
        transformeToBoolean(param: any): boolean;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}
