
declare module myway.comGestionClient {
    var app: ng.IModule;
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
    class CustomEvents {
        static SELECT_CLIENT: string;
    }
}

declare module myway.comGestionClient {
    const enum EtatRechercheEnum {
        NO_SEARCH = 0,
        SEARCH_REQUEST = 1,
        NO_RESULT = 2,
        SUCCESSFUL = 3,
        SERVER_ERROR = 4,
    }
}

declare module myway.comGestionClient {
    const enum TypeRechercheEnum {
        IDENTITE = 0,
        COMPTE = 1,
        NUMERO_PERSONNE = 2,
        NUMERO_CARTE = 3,
        SIREN = 4,
        RAISON_SOCIALE = 5,
        IDENTIFIANT_BAD = 6,
        EMAIL = 7,
        TELEPHONE = 8,
    }
}

declare module myway.comGestionClient {
    class PersonneMorale {
        siren: string;
        raisonSocial: string;
        villeSiege: string;
        bureauRattachement: Object;
        constructor();
        constructor(personneMorale: PersonneMorale);
    }
}

declare module myway.comGestionClient {
    class PersonnePhysique {
        nom: string;
        prenom: string;
        dateNaissance: Date;
        sexe: string;
        bureauRattachement: Object;
        constructor();
        constructor(personnePhysique: PersonnePhysique);
    }
}

declare module myway.comGestionClient {
    class RecherchePersonneResult {
        criteres: MyWay.Model.Client;
        type: TypeRechercheEnum;
        etat: EtatRechercheEnum;
        errorMessage: string;
        personnes: MyWay.Model.Client[];
        personnesMorale: MyWay.Model.Client[];
        personnesPhysique: MyWay.Model.Client[];
        desableBtnCreePersonne: boolean;
        clientListe: Array<MyWay.Model.Client>;
        critereIsEmpty: boolean;
        codeNature: string;
        codeQualite: string;
        constructor();
        isPersonneSelectionnee(): boolean;
        isNoSelectedCriteria(): boolean;
        isTypeRechercheIdentite(): boolean;
        isTypeRechercheRaisonSociale(): boolean;
        isTypeRechercheSIREN(): boolean;
        isNoSearch(): boolean;
        isSearchRequest(): boolean;
        isNoResult(): boolean;
        isSearchError(): boolean;
        isSearchSuccessful(): boolean;
    }
}

declare module myway.comGestionClient {
    class RechercherPersonneController {
        private $scope;
        private serviceAgentExtended;
        private mwgcRechercherPersonneService;
        private $timeout;
        private static EMIT_QUALITE_NATURE_DIRECTIVE;
        private static DEFAULT_ERROR_MESSAGE;
        private static DEFAULT_NO_RESULT_MESSAGE;
        private static DEFAULT_PLUS_CRITERE;
        private clientListe;
        private result;
        private rechercheAvancee;
        private type;
        private sirenValid;
        private modeAppel;
        private recherchePersonnePhysique;
        private recherchePersonneMorale;
        private raisonSocialeRequired;
        private nomRequired;
        private loading;
        private creationPersonneBtnVisibilityBool;
        private restitutionListePP;
        private restitutionListePM;
        private ongletActiverPM;
        private ongletActiverPP;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwgcRechercherPersonneService: RechercherPersonneService, $timeout: ng.ITimeoutService);
        toggleModeAvance(): void;
        isTypeRechercheIdentite(): boolean;
        isTypeRechercheRaisonSociale(): boolean;
        isTypeRechercheSIREN(): boolean;
        isTypeRechercheCompte(): boolean;
        isTypeRechercheCarteBleu(): boolean;
        isTypeRechercheEmail(): boolean;
        isTypeRechercheTelephone(): boolean;
        rechercher(): void;
        keydown(event: JQueryKeyEventObject): void;
        private setClientListe(paramListe, scope);
        private getClientListe();
        private processSearchResults(data, seachMedia);
        private processMediaSearchTrieResults(data, scope);
        private processError(error, scope);
        selectionnerQualite(result: any, codeNature: string, codeQualite: string): void;
        private initTypeRecherche();
        private selectTypeRecherche(typeRecherche);
        private initValueListNoRechercheBDR();
        private initValueListe();
        private clearTelephone();
        private clearEmail();
        private clearIdentifiantBad();
        private clearRaisonSociale();
        private clearIdentite();
        private clearCompte();
        private clearNumeroCarte();
        private clearNumeroPersonne();
        private clearSiren();
    }
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
    class RechercherPersonneService {
        private serviceAgentExtended;
        private modalService;
        private static TIERS_VERSION;
        private paramModeAppel;
        private creationPersonneBtnVisibilityBool;
        private static SIZE_MAX_IDENT_PERSONNE;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        private rechercherPersonneModale(modeAppel, criteres?);
        rechercherPersonne(criteres?: MyWay.Model.Client, creationPersonneBtnVisibilityBool?: boolean): ng.IPromise<MyWay.Model.Client>;
        rechercherPersonnePhysique(criteres?: MyWay.Model.Client, creationPersonneBtnVisibilityBool?: boolean): ng.IPromise<MyWay.Model.Client>;
        rechercherPersonneMorale(criteres?: MyWay.Model.Client, creationPersonneBtnVisibilityBool?: boolean): ng.IPromise<MyWay.Model.Client>;
        setModeAppel(paramModeAppel: string): void;
        getModeAppel(): string;
        setCreationPersonneBtnVisibilityBool(paramBool: boolean): void;
        getCreationPersonneBtnVisibilityBool(): boolean;
        transformeListe(myObject: Array<Object>): Array<MyWay.Model.Client>;
        rechercheGroupeEmail(personne: MyWay.Model.Client): ng.IPromise<Array<MyWay.Model.Client>>;
        rechercheGroupeTelephone(personne: MyWay.Model.Client): ng.IPromise<Array<MyWay.Model.Client>>;
        rechercheGroupeNom(personne: MyWay.Model.Client): ng.IPromise<Array<MyWay.Model.Client>>;
        rechercheGroupeRice(rice: MyWay.Model.Rice): ng.IPromise<Array<MyWay.Model.Client>>;
        rechercheGroupeSiren(client: MyWay.Model.Client): ng.IPromise<Array<MyWay.Model.Client>>;
        rechercheGroupeCarteBleu(client: MyWay.Model.Client): ng.IPromise<Array<MyWay.Model.Client>>;
        rechercheGroupeNumeroPersonne(client: MyWay.Model.Client): ng.IPromise<Array<MyWay.Model.Identification>>;
        rechercheGroupeIdentifiantBad(client: MyWay.Model.Client): ng.IPromise<Array<MyWay.Model.Identification>>;
        rechercheGroupeRaisonSociale(client: MyWay.Model.Client): ng.IPromise<Array<MyWay.Model.Identification>>;
        getFromListMedia_courrierElectronique(obj: any): string;
        getFromListMedia_numTelephonePortable(obj: any): string;
        getFromListMedia_numTelephoneFixe(obj: any): string;
    }
}

declare module myway.comGestionClient {
    class RestituerPersonneController {
        private $scope;
        private mwgcRechercherPersonneService;
        clientListe: MyWay.Model.Client[];
        selectedClient: MyWay.Model.Client[];
        tableOptions: MyWay.UI.ImwTableOptions;
        saisieValidityGroupe: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, mwgcRechercherPersonneService: RechercherPersonneService);
        private initTableOptions(clientListe, selectedClient);
        private keydown(event);
    }
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
    class RestituerPersonneMoraleController {
        private $scope;
        private mwgcRechercherPersonneService;
        clientListe: MyWay.Model.Client[];
        selectedClient: MyWay.Model.Client[];
        tableOptions: MyWay.UI.ImwTableOptions;
        saisieValidityGroupe: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, mwgcRechercherPersonneService: RechercherPersonneService);
        private initTableOptions(clientListe, selectedClient);
        private keydown(event);
    }
}

declare module myway.comGestionClient {
}

declare module myway.comGestionClient {
}
