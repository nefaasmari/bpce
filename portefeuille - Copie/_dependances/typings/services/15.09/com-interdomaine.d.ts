
declare module myway.comInterdomaine {
    var app: ng.IModule;
}

declare module myway.comInterdomaine {
    class SaisirAdvancedSelectController {
        private $scope;
        static $inject: string[];
        private ngModel;
        private advancedSelectModel;
        private list;
        private items;
        private notItemsFoundText;
        private keyList;
        private valueViewList;
        private dropdownSetWidth;
        private padLeftString;
        private ngMaxlength;
        private padLeft;
        private writeNumberOnly;
        private writeStringOnly;
        private required;
        private setFocus;
        private mwsfFocusIfBool;
        private chevronVisible;
        private readOnly;
        private findFullText;
        private static NO_ITEM_FOUND_TEXT;
        constructor($scope: any);
        private initClickEventChevron();
        /**
         * @ngdoc method
         * @name bindingModel
         * @methodOf SaisirAdvancedSelectController.bindingModel
         * @description
         * binding data in to dropdown menu.
         * @param {Object} l'objet selectionne
         * @returns {void}.
         */
        private bindingModel(itemValue);
        private regexData(itemValue);
        private reajusterValeur(itemValue);
        /**
         * @ngdoc method
         * @name isUniqueListValue
         * @methodOf SaisirAdvancedSelectController.isUniqueListValue
         * @description
         * Return true si la liste admet et constituer d'un seul Object, false sinon.
         * @param {Array<Object>} la liste
         * @returns {boolean}.
         */
        isUniqueListValue(list: Array<Object>): boolean;
        searchItemInList(list: Array<Object>, itemValue: string): void;
        /**
         * @ngdoc precedure
         * @name findNotFullTextFunction
         * @methodOf SaisirAdvancedSelectController.findNotFullTextFunction
         * @description
         * change les valeurs du tableau items selon le mode de recherche renseignée comme param.
         * @param {any[]} la liste d'Objects
         * @param {string} query.
         * @param {string} keyList attr.
         * @param {string} valueViewList attr.
         * @param {IAdvancedSelectScope} current $scope.
         * @returns {void} set les Objects a afficher dans la dropdown-menu.
         */
        findNotFullTextFunction(list: any[], query: string, keyList: string, valueViewList: string): Array<Object>;
        /**
         * @ngdoc precedure
         * @name findFullTextFunction
         * @methodOf SaisirAdvancedSelectController.findFullTextFunction
         * @description
         * change les valeurs du tableau items selon le mode de recherche renseignée comme param.
         * @param {any[]} la liste d'Objects
         * @param {string} query.
         * @param {string} keyList attr.
         * @param {string} valueViewList attr.
         * @returns {void} set les Objects a afficher dans la dropdown-menu.
         */
        findFullTextFunction(list: any[], query: string, keyList: string, valueViewList: string): Array<Object>;
    }
}

declare module myway.comInterdomaine {
    function mwsfSaisieAdvancedSelect($timeout: ng.ITimeoutService): ng.IDirective;
}

declare module myway.comInterdomaine {
    interface IBureauRattachementScope extends ng.IScope {
        viewModelBureauRattachementCtrl: SaisirBureauRattachementController;
    }
    class SaisirBureauRattachementController {
        private $scope;
        static MAX_LENGTH: number;
        private bureauRattachement;
        private required;
        private setFocus;
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
        private required;
        private XM041A;
        private XM013A;
        private setWidth;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope);
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirEmailController {
        private $scope;
        private email;
        private required;
        private setFocus;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope);
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirIdentClientController {
        private $scope;
        private saisieIdentifiantClientService;
        private maxLength;
        private identClient;
        private setFocus;
        private enterKeypressEvent;
        private static SIZEMAX;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieIdentifiantClientService: SaisieIdentifiantClientService);
        setValue(identClient: string): void;
        keydown(event: JQueryKeyEventObject, identClient: string): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieIdentifiantClientService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @Returns {ng.IPromise<Object>}.
         * @alias getDataFromN831.
         * @param {void}.
         * @description return Data From N831 pour récupérer la taille du champ
         */
        getDataFromN831(): ng.IPromise<any>;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
        /**
         * @Returns {ng.IPromise<Object>}.
         * @alias getN831.
         * @param {COCXBQ} : string.
         * @description return le code CENAID de la table délocalisée N831 correspendant au currentCOCXBQ.
         */
        getN831(COCXBQ: string): ng.IPromise<Object>;
    }
}

declare module myway.comInterdomaine {
    class LoaderController {
        private $scope;
        static $inject: string[];
        private loadInProgress;
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
        static $inject: string[];
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
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, ruleService: myway.comInterdomaine.RuleService);
        getAllModes(): ng.IPromise<MyWay.Model.ModeFinancier[]>;
        getModesDisponibles(fonctionnalite: MyWay.Model.Fonctionnalite, produit: MyWay.Model.Produit, deviseEuro: boolean, habilitations: string[], canal: string, isMajeur: boolean, modeVente: string): ng.IPromise<MyWay.Model.ModeFinancier[]>;
        getByCTGXM1(CTGXM1: string): ng.IPromise<MyWay.Model.ModeFinancier>;
    }
}

declare module MyWay.Model {
    class Client {
        id: number;
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
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        codeCivilite: string;
        codePersonnaliteJuridique: string;
        indicateurActiviteProfessionnelle: string;
        codeTypeMedia: string;
        codeTypePersonne: string;
        designationCourte: string;
        edsDomiciliation: string;
        indicateuractivitePro: string;
        numeroSiren: string;
        referenceAccesMedia: string;
        sigle: string;
        compte: MyWay.Model.Compte[];
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
        listeParticipants: MyWay.Model.ParticipantInformationClient[];
        constructor(id?: number, libelle?: string, produit?: Produit, rice?: Rice, devise?: Devise, reserveEncaissement?: ReserveEncaissement, estOuvert?: boolean, solde?: number, titulaire?: string, listeParticipants?: MyWay.Model.ParticipantInformationClient[]);
        isDeviseEuro(): boolean;
        toString(): string;
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
    }
}

declare module MyWay.Model {
    class Devise {
        code: string;
        sigle: string;
        libelle: string;
        constructor();
        constructor(devise: Devise);
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
        static OUVERTURE_LIVRET_JEUNE: string;
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
        constructor(mode: ModeFinancier);
        displayLabel(): string;
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
    class FamilleOperationDiverse {
        YNOXCE: string;
        COJOFA: string;
        ULIWFO: string;
        UCGWBD: string;
        UCGWGA: string;
        UCGWBA: string;
        UCGWRT: string;
        UCGWMO: string;
        CIJOAS: string;
        UCGWSR: string;
        constructor(familleOD: FamilleOperationDiverse);
    }
    class RegroupementOperationDiverse {
        YNOXCE: string;
        NOCEEL: string;
        UCGWRT: string;
        constructor();
        constructor(regroupementOD: RegroupementOperationDiverse);
    }
    class TypeOperationDiverse {
        YNOXCE: string;
        COJOFA: string;
        COJXHD: string;
        UCTXS5: string;
        ULIWOD: string;
        UCGWMO: string;
        UCGWBD: string;
        UCGWBA: string;
        UCGWRT: string;
        DDEXPH: string;
        DFJOVA: string;
        IDSEQ3: string;
        CIJMTI: string;
        CIJMOB: string;
        constructor(typeOD: TypeOperationDiverse);
    }
    class OperationDiverse {
        familleOperationDiverse: FamilleOperationDiverse[];
        typeOperationDiverse: TypeOperationDiverse[];
        constructor(familleOperation: FamilleOperationDiverse[], typeOperation: TypeOperationDiverse[]);
    }
}

declare module MyWay.Model {
    class ParticipantInformationClient {
        role: string;
        participant: string;
        dateNaissance: string;
        constructor(role: string, participant: string, dateNaissance: string);
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
        $valid: boolean;
        constructor(codeEtablissement?: string, codeGuichet?: Object, codeActiviteCompte?: string, radical?: string, cleCompte?: string, cleRice?: string, $valid?: boolean);
        isNotEmpty(): boolean;
        clear(): void;
        toString(): string;
        formatRicePourStructureEchange(): string;
    }
}

declare module MyWay.Model {
    interface ISU1P {
        COCXBQ: string;
        COEIO1: string;
        COLIDO: string;
        COSXAP: string;
        CTGXMF: string;
        CTLIME: string;
        CTSFBA: string;
        DDEJDA: string;
        DDLIEE: string;
        DDLIEU: string;
        DFEJDA: string;
        DFLIFR: string;
        LNSMPX: string;
        WLNLU: string;
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
        static $inject: string[];
        constructor($locale: ng.ILocaleService, $scope: IMwsfMontantScope, $element: ng.IAugmentedJQuery, $attrs: any, $parse: ng.IParseService);
        private checkSettings(settings);
        private getSignPrefix();
        private getSignPrefixLength();
        private renderViewValue(isUserTyping?);
        private modelFormatter(modelValue);
        private modelParser(inputValue);
        private formatViewValue(inputValue, isUserTyping);
        private getConvertibleViewValue(viewValue);
        private getAbsoluteViewValue(viewValue);
        private changeSign(isNegative);
        private keydown(event);
        private keyup(event);
        private keypress(event);
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
        private nom;
        private premierAlphabetique;
        private minLength;
        private caractereInvalide;
        private required;
        private setFocus;
        private enterKeypressEvent;
        constructor($scope: ng.IScope);
        premierCaractereAlphabetique(name: string): boolean;
        detectCharDollar(name: string): boolean;
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirNumCarteController {
        private $scope;
        static $inject: string[];
        private numCarte;
        private required;
        private codcar1Validate;
        private codcar2Validate;
        private codcar3Validate;
        private codcar4Validate;
        private setFocus;
        static MAX_LENGTH: number;
        constructor($scope: ng.IScope);
        /**
         * @Returns a {void}.
         * @Alias dataToBinding.
         * @Param {itemName: string, itemValue: string}.
         * @Description set la validité d'un champ CODCAR se déclanche suite à un change event sur le composant.
         * @Return {void}.
         */
        dataToBinding(itemName: string, itemValue: string): void;
        /**
         * @Returns a {void}.
         * @Alias affineValue.
         * @Param {itemName: string, itemValue: number}.
         * @Description se déclanche suite à un blur event -> padLeft avec des 0 si la saisie est < à 4 caractéres.
         * @Return {void}.
         */
        affineValue(itemName: string, itemValue: number): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirNumCarte2Controller {
        private $scope;
        static MAX_LENGTH: number;
        private numCarte;
        private required;
        private setFocus;
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
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirNumCreditController {
        private $scope;
        private numCredit;
        private required;
        private setFocus;
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
        private required;
        private setFocus;
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
        private setFocus;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieNumTelephoneService: SaisieNumTelephoneService);
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieNumTelephoneService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
    class SaisirPrenomController {
        private $scope;
        static $inject: string[];
        private prenom;
        private premierAlphabetique;
        private setFocus;
        private enterKeypressEvent;
        constructor($scope: ng.IScope);
        premierCaractereAlphabetique(prenom: string): boolean;
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
        static LIST_KEY: string;
        static LIST_VALUE: string;
        private rib;
        private listCodeGuichets;
        private cocxprCodardBis;
        private cocxprCodard;
        private codeGuichetValidate;
        private codeGuichetUniqueValue;
        private enterKeypressEvent;
        private cocxprCodardBisValidate;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieRiceService: SaisieRiceService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        keydown(event: JQueryKeyEventObject): void;
        /**
         * @ngdoc function
         * @name isOneObject
         * @description
         * return true si la liste est de taille 1, false sinon.
         * @param {Array<Object>}
         * @returns {boolean}.
         */
        private isOneObject(myArray);
        /**
         * @ngdoc function
         * @name elemementExistInList
         * @description
         * return true si la liste contient obj, false sinon.
         * @param {string, Array<Object>}
         * @returns {boolean}.
         */
        private elemementExistInList(obj, list);
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisirRiceController {
        private $scope;
        private saisieRiceService;
        static PAD_LEFT_CARACTERE: string;
        static LIST_KEY: string;
        static LIST_VALUE: string;
        private rice;
        private listCodeGuichets;
        private required;
        private codeEtablissementValidate;
        private codeGuichetValidate;
        private codeActiviteCompteValidate;
        private radicalValidate;
        private cleCompteValidate;
        private cleRiceValidate;
        private enterKeypressEvent;
        private saisieLibre;
        private readOnly;
        private setReadOnlyItems;
        private msgErreurKeysCalculator;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieRiceService: SaisieRiceService);
        private getListeGuichets(codeEtablissement);
        private normalizedValue(itemName, itemValue, itemSize);
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
        private bindingData(itemName, itemValue, itemSize);
        keydown(event: JQueryKeyEventObject): void;
    }
}

interface IAttributeMswsfSaisieRice extends ng.IAttributes {
    rice: any;
    enterKeypressEvent: any;
    saisieLibre: any;
    readOnly: any;
}
declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieRiceService {
        private serviceAgentExtended;
        private compteKey;
        private riceKey;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        setCompteKey(compteKeyParam: string): void;
        setRiceKey(riceKeyParam: string): void;
        getCompteKey(): string;
        getRiceKey(): string;
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
        getCOCEEA(COCXBQ: string): ng.IPromise<string>;
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
        /**fonction pour le mode externe du composant ///// TO DO -> TO COMPLETE
         * @Returns a any[].
         * @alias transformAlphaToNumeric.
         * @alias agentFonctionnel.transformAlphaToNumeric(data:string).
         * @param {data} : string.
         * @return {any[]) la suite alphanumerique est transforme en suite numerique.
         */
        transformAlphaToNumeric(data: string): any[];
    }
}

declare module myway.comInterdomaine {
    class AgentConnecteService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        estAgenceConnecteLaHenin(): ng.IPromise<boolean>;
        /**
         * @ngdoc method
         * @name getDU8N
         * @methodOf SaisieNumTelephoneService.getDU8N
         * @description
         * fonction quir retourne l'indicatif par défaut --> +33 (France).
         * @param {void}
         * @returns {string} indicatif par défaut.
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
    class InterDomainCoreServiceProvider implements ng.IServiceProvider {
        constructor();
        $get($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended): InterDomainCoreService;
    }
    class InterDomainCoreService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private getFileUrl(filename);
        getFile(filename: string): ng.IPromise<{}>;
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
        constructor($q: ng.IQService, interDomainCoreService: InterDomainCoreService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
        constructor($parse: ng.IParseService, $q: ng.IQService, loadRuleService: LoadRuleService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
    class StringUtils {
        constructor();
        static padLeft(str: string, padString: string, length: number): string;
        static padRight(str: string, padString: string, length: number): string;
        static padLeftNumber(str: string, padString: string, length: number): string;
        static capitalize(str: string): string;
        /**
         * Méthode qui permet de déterminer si une chaine de caractère commence par le motif passé en paramètre
         * @param chaine la chaine sur laquelle on effectue la recherche
         * @param motif le motif que l'on recherche en début de chaine
         */
        static startsWith(chaine: string, motif: string): boolean;
        /**
         * Méthode qui permet de déterminer si une chaine de caractère termine par le motif passé en paramètre
         * @param chaine la chaine sur laquelle on effectue la recherche
         * @param motif le motif que l'on recherche en fin de chaine
         */
        static endsWith(chaine: string, motif: string): boolean;
    }
}

declare module myway.comInterdomaine {
    class SaisirSirenController {
        private $scope;
        private saisieSirenService;
        private siren;
        private required;
        private isValid;
        private setFocus;
        private enterKeypressEvent;
        static $inject: string[];
        constructor($scope: ng.IScope, saisieSirenService: SaisieSirenService);
        keydown(event: JQueryKeyEventObject): void;
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class SaisieSirenService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
    interface IChosenSettings {
        noResultsText?: string;
        allowSingleDeselect?: boolean;
        disableSearchThreshold?: number;
        disableSearch?: boolean;
        enableSplitWordSearch?: boolean;
        fulltextSearch?: boolean;
        inheritSelectClasses?: boolean;
        maxSelectedOptions?: number;
        placeholderTextMultiple?: string;
        placeholderTextSingle?: string;
        searchContains?: boolean;
        singleBackstrokeDelete?: boolean;
        displayDisabledOptions?: boolean;
        displaySelectedOptions?: boolean;
        width?: string;
    }
    interface IMwChosenScope extends ng.IScope {
        settings: IChosenSettings;
    }
    interface IChosenElement extends ng.IAugmentedJQuery {
        chosen: any;
    }
    interface IChosenAttributes extends ng.IAttributes {
        ngOptions: string;
    }
    class MwChosenController {
        private $scope;
        private $element;
        private $attrs;
        private $timeout;
        private settings;
        private inputElement;
        private modelController;
        private chosen;
        private empty;
        private defaultText;
        private origRender;
        static NG_OPTIONS_REGEXP: RegExp;
        static $inject: string[];
        constructor($scope: IMwChosenScope, $element: IChosenElement, $attrs: IChosenAttributes, $timeout: ng.ITimeoutService);
        private isEmpty(value);
        private startLoading();
        private stopLoading();
        private initOrUpdate();
        private removeEmptyMessage();
        private disableWithMessage();
        private checkSettings(settings);
    }
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
        mwsfFocusIfBool: boolean;
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
    interface ITypeChequeScope extends ng.IScope {
        viewModelTypeChequeCtrl: TypeChequeController;
    }
    interface ITypeChequeController {
        reserveEncaissement: MyWay.Model.ReserveEncaissement;
        rice: MyWay.Model.Rice;
        choixTypeCheque: string;
    }
    class TypeChequeController implements ITypeChequeController {
        private $scope;
        private serviceAgentExtended;
        private typeChequeService;
        static $inject: string[];
        reserveEncaissement: MyWay.Model.ReserveEncaissement;
        rice: MyWay.Model.Rice;
        choixTypeCheque: string;
        constructor($scope: ITypeChequeScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, typeChequeService: TypeChequeService);
    }
}

declare module myway.comInterdomaine {
}

declare module myway.comInterdomaine {
    class TypeChequeService {
        private $q;
        private serviceAgentExtended;
        private static MOYEN_PAIEMENT_VERSION;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getReserveEncaissement(codeEtablissement: string, identifiantElementStructure: string, rice: MyWay.Model.Rice): ng.IPromise<MyWay.Model.ReserveEncaissement>;
        calculerReserveEncaissement(encaissementCheque: MyWay.Model.EncaissementCheque, codeEtablissement: string, codeProduit: string): ng.IPromise<MyWay.Model.ReserveEncaissement>;
        private calculerNombreJoursReserveEncaissement(nombreJours);
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

declare module MyWay.Model {
    /**
     * Represensation du segment billeterie
     */
    class SegmentBilleterie {
        monnaieBilleterie: number;
        nombreCoupure: MyWay.Model.Coupure;
        monnaieSansBillet: number;
        constructor();
    }
}

declare module MyWay.Model {
    /**
     * Representation du segment cheque
     */
    class SegmentCheque {
        modeFonctionnement: string;
        montant: number;
        deviseMontant: string;
        S_INFOCHEQUE: MyWay.Model.SegmentInfoCheque[];
        constructor();
    }
}

declare module MyWay.Model {
    /**
     * Representation du segment des informations d'un chèque
     */
    class SegmentInfoCheque {
        deviseCheque: string;
        numeroCheque: string;
        zoneInterBancaire: string;
        zoneInterne: string;
        montantCheque: number;
        constructor();
    }
}

declare module MyWay.Model {
    /**
     * Representation du segment transitant entre le module de versement/remboursement un module appelant
     */
    class SegmentPRVRIO {
        titre: string;
        mfIndicateur: string;
        texteBoutonValidation: string;
        montantMinimum: number;
        montantMaximum: number;
        codeDeviseMontantParametre: string;
        numeroCompteRice: string;
        anneesProrogationPEL: string;
        modeFinancierNumerique: string;
        codeEvenementAtome: string;
        codePrestationTarifaire: string;
        S_CHEQUE: MyWay.Model.SegmentCheque;
        modeFinancierChoisi: string;
        codeDeviseMontantOperation: string;
        montantGlobalOperation: number;
        libelleOperation1: string;
        indicateurLibelleBlocage: string;
        dateDeValeur: string;
        indicateurDateBlocage: string;
        codeRoleParticipant: string;
        nomPatronymiqueParticipant: string;
        prenomParticipant: string;
        identiteParticipant: string;
        numeroTelephoneParticipant: string;
        numeroCheque: string;
        ordreCheque: string;
        chequeGlobal: string;
        derniereContrepartie: string;
        typeCheque: string;
        nombreJourReserveEncaissement: string;
        supportLivret: string;
        presentationLivret: string;
        indicOblig: string;
        ancienSoldeLivret: number;
        indicateurBlocageAncienSolde: string;
        prochainNumeroLigneAImprimer: string;
        ligneBlocage: string;
        codeDeviseSoldeLivret: string;
        indicateurOD: string;
        S_PRVRIOUGR: MyWay.Model.SegmentPRVRIOUGR[];
        S_BILLETERIE: MyWay.Model.SegmentBilleterie;
        libelleOperation2: string;
        numeroPersonneSignataire: string;
        constructor();
    }
}

declare module MyWay.Model {
    /**
     * Representation du segment d'une des répartitions d'une opération,
     * ou d'une des contreparties d'un virement
     */
    class SegmentPRVRIOUGR {
        numeroCompte: string;
        montantVirement: number;
        libelleVirement: string;
        constructor();
    }
}
