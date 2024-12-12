
declare module myway.operationsFinancieres {
    var app: any;
}

declare module myway.operationsFinancieres {
    class BilletsPresumesFauxOuMutiles {
        private commonService;
        private navigationService;
        static $inject: string[];
        habilitations: myway.operationsFinancieres.model.IHabilitations;
        constructor(commonService: myway.operationsFinancieres.CommonService, navigationService: MyWay.UI.INavigationService);
    }
}

declare module myway.operationsFinancieres {
    class DeblocageFinJourneeControleur {
        private $scope;
        private modalService;
        private serviceAgentExtended;
        private operationsDiversesService;
        private commonService;
        static $inject: string[];
        dateJour: Date;
        agenceEnCours: string;
        private edsGlobaleParam;
        private edsSelectionne;
        private edsSelectSaisi;
        private chargementEnCours;
        private authentificationInfo;
        private parametresComptables;
        private habilitationSHJO1H;
        private entreeDeblocage;
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
        controlerFormulaire(): void;
        reinitialiserFormulaire(): void;
    }
}

declare module myway.operationsFinancieres {
    class DelestageFondsControleur {
        private commonService;
        private navigationService;
        static $inject: string[];
        constructor(commonService: myway.operationsFinancieres.CommonService, navigationService: MyWay.UI.INavigationService);
    }
}

declare module myway.operationsFinancieres {
    class DifferencesCaissesControleur {
        private navigationService;
        private serviceAgentExtended;
        private commonService;
        static $inject: string[];
        habilitations: myway.operationsFinancieres.model.IHabilitations;
        private parametresComptables;
        constructor(navigationService: MyWay.UI.INavigationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, commonService: myway.operationsFinancieres.CommonService);
    }
}

declare module myway.operationsFinancieres {
    class GestionCaisseAutomatique {
        private $scope;
        private serviceAgentExtended;
        private $timeout;
        private commonService;
        private operationsDiversesService;
        private modalService;
        static $inject: string[];
        tableauColonneOptionsNom: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsPrenom: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNaissance: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLocalite: MyWay.UI.ImwTableColumnOptions;
        phases: {
            "nom": string;
            "prenom": string;
            "datnai": Date;
            "localite": string;
            "adresse": {
                "rue": string;
                "rue2": string;
                "cp": string;
                "ville": string;
                "pays": string;
            };
        }[];
        tableauSimple: MyWay.UI.ImwTableOptions;
        onSelectionChange(selectedObject: Object): void;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService, commonService: myway.operationsFinancieres.CommonService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, modalService: MyWay.UI.IModalService);
    }
}

declare module myway.operationsFinancieres {
    class GestionApprovisionnementsControleur {
        private $scope;
        private $timeout;
        private modalService;
        private serviceAgentExtended;
        private initialisationService;
        private operationsDiversesService;
        private commonService;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: myway.composantsCommuns.InitialisationService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
    }
}

declare module myway.operationsFinancieres {
    class GestionFondsControleur {
        private commonService;
        private navigationService;
        static $inject: string[];
        constructor(commonService: myway.operationsFinancieres.CommonService, navigationService: MyWay.UI.INavigationService);
    }
}

declare module myway.operationsFinancieres {
    class GestionMouvementsInternesControleur {
        private commonService;
        private navigationService;
        static $inject: string[];
        constructor(commonService: myway.operationsFinancieres.CommonService, navigationService: MyWay.UI.INavigationService);
    }
}

declare module myway.operationsFinancieres {
    class MainController {
        private $scope;
        private serviceAgentExtended;
        private commonService;
        private initialisationService;
        private modalService;
        private $location;
        static $inject: string[];
        chargementEnCours: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, commonService: myway.operationsFinancieres.CommonService, initialisationService: myway.composantsCommuns.InitialisationService, modalService: MyWay.UI.IModalService, $location: ng.ILocationService);
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ReceptionFondsControleur {
        private serviceAgentExtended;
        private commonService;
        private navigationService;
        static $inject: string[];
        habilitations: myway.operationsFinancieres.model.IHabilitations;
        contextesOD: Array<MyWay.composantsCommuns.model.IContexteOD>;
        contextRCDF: Array<MyWay.composantsCommuns.model.IContexteOD>;
        private contextAgentConnecte;
        private caracteristiqueEDS;
        private parametresComptables;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, commonService: myway.operationsFinancieres.CommonService, navigationService: MyWay.UI.INavigationService);
    }
}

declare module myway.operationsFinancieres {
    class RegulariserOperationControleur {
        private $scope;
        private serviceAgentExtended;
        private commonService;
        private navigationService;
        static $inject: string[];
        codeMouvementInterne: string;
        codeEnvoiFondGab: string;
        codeReceptionFondGab: string;
        codeDelestageFond: string;
        codeBilletsPresumesFaux: string;
        codeDifferenceCaisseMoins: string;
        codeDifferenceCaissePlus: string;
        codeReceptionFond: string;
        titre: string;
        titreOperation: string;
        habilitations: myway.operationsFinancieres.model.IHabilitations;
        contextesOD: Array<MyWay.composantsCommuns.model.IContexteOD>;
        contextRCDF: Array<MyWay.composantsCommuns.model.IContexteOD>;
        private parametresComptables;
        private listeOperations;
        private operationSelectionne;
        private contextAgentConnecte;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, commonService: myway.operationsFinancieres.CommonService, navigationService: MyWay.UI.INavigationService);
    }
}

declare module myway.operationsFinancieres {
    class CommonService {
        private $q;
        private serviceAgentExtended;
        private initialisationService;
        private modalService;
        private gcedocService;
        private identifiantBordereauService;
        private $rootScope;
        private $location;
        static $inject: string[];
        private habilitations;
        private isInit;
        private contextesOd;
        private codesARecuperer;
        private entreesContextesOd;
        private caracteristiqueEDS;
        private contextAgentConnecte;
        private parametresComptables;
        private location;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, initialisationService: myway.composantsCommuns.InitialisationService, modalService: MyWay.UI.IModalService, gcedocService: myway.composantsCommuns.GcedocService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService, $rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        /**
         * Renvoie une promesse pour dire que les habilitation ont été chargée
         */
        lancerInitialisation(): ng.IPromise<any[]>;
        /**
         * Renvoie toutes les habilitations stockées dans le service.
         * Si des codes sont fournis en paramètres, ils seront ajoutés à la liste.
         * Dans le header (...codes : permet de créer un tableau à partir des parametres d'entrées.
         */
        getHabilitations(...codes: string[]): string[];
        lancerInitialisationRoute(): ng.IPromise<string>;
        lancerInitialisationHabilitation(): ng.IPromise<boolean[]>;
        getContextesODFromRest(): ng.IPromise<Array<MyWay.composantsCommuns.model.IContexteOD>>;
        getContexteAgentConnecte(): ng.IPromise<void>;
        getParametresComptables(): ng.IPromise<void>;
        /**
         * Restitution des données stockées dans le service.
         */
        IsInitDone(): boolean;
        returnHabilitations(): myway.operationsFinancieres.model.IHabilitations;
        returnRoute(): ng.ILocationService;
        returnContextesOD(): Array<MyWay.composantsCommuns.model.IContexteOD>;
        returnContexteODParCode(code: string): MyWay.composantsCommuns.model.IContexteOD;
        returnContextesODParCode(code: string): Array<MyWay.composantsCommuns.model.IContexteOD>;
        returnContexteAgentConnecte(): MyWay.Services.Context.AuthentificationInfo;
        returnParametresComptables(): MyWay.Services.Context.ParametresComptables;
        desactiverBtn(): void;
        lancerImpression(typeBordereau: string, refAgent: string, dataTransfertFondImpression: any, contexteOd: MyWay.composantsCommuns.model.IContexteOD, modeExtourne: boolean, habilitationEditionBordereau: boolean): void;
    }
}

declare module myway.Constant {
    class Route {
        static PATH_INDEX: string;
        static PATH_RECEPTION_FONDS: string;
        static PATH_DELESTAGE_FONDS: string;
        static PATH_GESTION_FONDS: string;
        static PATH_DIFFERENCES_CAISSES: string;
        static PATH_BILLETS_PRESUMES: string;
        static PATH_GESTION_DES_APPROVISIONNEMENTS: string;
        static PATH_GESTION_CAISSE_AUTOMATIQUE: string;
        static PATH_GESTION_MOUVEMENTS_INTERNES: string;
        static PATH_REGULARISER_OPERATION: string;
        static PATH_EXTOURNE_OPERATION: string;
        static PATH_DEBLOCAGE_FIN_JOURNEE: string;
        static PATH_CONSULTER_TOTAUX_CENTRAUX: string;
        static path: Array<Object>;
        static getPaths(): Array<Object>;
        static getPathsFromName(route: string): Object;
        static getPathsById(id: number): Object;
        static getTitreTotemPageByUrl(url: string): string;
    }
    class ChoixListeGuichet {
        static GUICHET_DESTINATAIRE_NORMAL: string;
        static GUICHET_DESTINATAIRE_TOUS: string;
        static GUICHET_DESTINATAIRE_GAB: string;
    }
    class UrlRest {
        static URL_TRANSFERT_FONDS_SANS_BORDEREAU: string;
    }
    class CodeOperation {
        static DELESTAGE_FONDS_BDF: string;
        static GESTION_FONDS_GAB: string;
        static DIFFERENCE_CAISSE_EN_MOINS: string;
        static DIFFERENCE_CAISSE_EN_PLUS: string;
        static RECEPTION_FONDS_BDF: string;
        static BILLETS_PRESUMES_FAUX: string;
        static ENVOI_FONDS_GAB: string;
        static RECEPTION_FONDS_GAB: string;
        static MOUVEMENT_INTERNE: string;
    }
    class Operations {
        static typeOperation: Array<Object>;
        static popinMessageDemandeImpression: string;
        static popinMessageValidation: string;
        static codeFamilleOperationDiverse: string;
        static popinMessageRegulariser: string;
    }
}

declare module myway.operationsFinancieres.model {
    /**
     * Conteneur pour les habilitations.
     */
    interface IHabilitations {
        [code: string]: boolean;
    }
    /**
     * Liste des codes habilitations utilisés par lapplication
     */
    class CodeHabilitation {
        static SHJO0J: string;
        static SHOPSE: string;
        static SHJE08: string;
        static SHJO0E: string;
        static SHJO1G: string;
        static SHJO1H: string;
    }
}

declare module myway.operationsFinancieres {
    function entete(): ng.IDirective;
}

declare module myway.operationsFinancieres {
    class MwBilletsPmfControleur {
        private $scope;
        private serviceAgentExtended;
        private commonService;
        private operationsDiversesService;
        private modalService;
        static $inject: string[];
        titre: string;
        titreAffiche: string;
        extourne: boolean;
        contextesOD: Array<MyWay.composantsCommuns.model.IContexteOD>;
        contextBilletsPresumesFauxOuMutiles: Array<MyWay.composantsCommuns.model.IContexteOD>;
        versementODGeneral: MyWay.composantsCommuns.model.IVersementODGeneral;
        montantOperationSaisi: boolean;
        libelleOperationSaisi: boolean;
        libelleOperationComplementaireSaisi: boolean;
        montantBilletterie: number;
        coupure: MyWay.Model.Coupure;
        habilitationEditionBordereau: boolean;
        private chargementEnCours;
        private contextAgentConnecte;
        dataVersementODGeneralImpression: any;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, commonService: myway.operationsFinancieres.CommonService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, modalService: MyWay.UI.IModalService);
        validerBPFM(): void;
        controlerFormulaire(): void;
        reinitialiserFormulaire(): void;
        impression(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class MwDelestageFondsControleur {
        private $scope;
        private initialisationService;
        private modalService;
        private serviceAgentExtended;
        private operationsDiversesService;
        private commonService;
        static $inject: string[];
        titre: string;
        titreAffiche: string;
        extourne: boolean;
        guichetEmetteurSelectionne: myway.comEds.IGuichet;
        habilitationBackOffice: boolean;
        habilitationEditionBordereau: boolean;
        dataTransfertFondImpression: any;
        contexteOd: MyWay.composantsCommuns.model.IContexteOD;
        private montantOperationSaisi;
        private guichetEmetteurSelectionneSaisi;
        private controleFormulaireBoolean;
        private libelleGuichetSelectionne;
        private intitule1OperationSaisi;
        private intitule2OperationSaisi;
        private chargementEnCours;
        private edsSelectionne;
        private paramListeGuichet;
        private paramEdsGuichet;
        private identifiantBordereau;
        private entreeTransfertFond;
        private parametresComptables;
        private authentificationInfo;
        constructor($scope: ng.IScope, initialisationService: myway.composantsCommuns.InitialisationService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
        validerDelestage(): void;
        controlerFormulaire(): void;
        reinitialiserFormulaire(): void;
        impression(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class MwDifferencesCaissesControleur {
        private $scope;
        private modalService;
        private serviceAgentExtended;
        private operationsDiversesService;
        private commonService;
        static $inject: string[];
        titre: string;
        titreAffiche: string;
        extourne: boolean;
        codeOperation: string;
        desactiveSensOperation: boolean;
        contextesOD: Array<MyWay.composantsCommuns.model.IContexteOD>;
        contextDfcmDfcp: Array<MyWay.composantsCommuns.model.IContexteOD>;
        contextOd: Array<MyWay.composantsCommuns.model.IContexteOD>;
        isLoaded: boolean;
        habilitationEditionBordereau: boolean;
        naturesErreurEspece: Array<MyWay.composantsCommuns.model.INatureErreurEspece>;
        natureErreurEspece: MyWay.composantsCommuns.model.INatureErreurEspece;
        listTypeDifferenceDfcmDfcp: Array<MyWay.composantsCommuns.model.IListeTypeDifferenceCaisse>;
        typeDifferenceDfcmDfcp: MyWay.composantsCommuns.model.IListeTypeDifferenceCaisse;
        differenceCaisseAvecConstat: MyWay.composantsCommuns.model.IDifferenceCaisseAvecConstat;
        paramListeGuichet: MyWay.Model.EDSGuichetParam;
        paramEdsGuichet: MyWay.Model.EDSRechercheGuichetParam;
        guichetEmetteurSelectionne: any;
        agent: any;
        agentSaisi: boolean;
        chargementEnCours: boolean;
        today: Date;
        private parametresComptables;
        private contextAgentConnecte;
        private edsSelectionne;
        private montantOperationSaisi;
        private contexteOperationDiverseSaisi;
        private codeNatureErreurEspeceSaisi;
        private dateConstatEcartInitialSaisi;
        private libelleOperationSaisi;
        private libelleOperationComplementaireSaisi;
        private identifiantSaisi;
        typeDifferenceSaisi: boolean;
        dataDifferenceCaisseAvecConstatImpression: any;
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
        watchTDC(typeDifferenceDfcmDfcp: MyWay.composantsCommuns.model.IListeTypeDifferenceCaisse): void;
        watchNatureErreur(nature: MyWay.composantsCommuns.model.INatureErreurEspece): void;
        watchIdentifiantEcart(identifiantEcart: string): void;
        watchDateErreurInitiale(dateConstatEcartInitial: Date): void;
        validerPDC(): void;
        updateDifferenceCaisseAvecConstatFromContext(context: MyWay.composantsCommuns.model.IContexteOD, differenceCaisseAvecConstat: MyWay.composantsCommuns.model.IDifferenceCaisseAvecConstat): void;
        controlerFormulaire(): void;
        reinitialiserFormulaire(): void;
        impression(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ExtourneResultatRechercheControleur {
        private $scope;
        private $timeout;
        private modalService;
        private serviceAgentExtended;
        private operationsDiversesService;
        private commonService;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        tableauComplexeData: {
            "libelleOperation": string;
            "modeFinancier": string;
            "sens": string;
            "montant": string;
            "devise": string;
            "numCompte": string;
            "codeNomAgent": string;
            "billetterie": string;
            "sagPapier": string;
            "detail": {
                "HeureOperation": string;
                "DateValeur": string;
                "NumBorderau": string;
                "Designation": string;
                "NumSac": string;
            };
        }[];
        tableauColonneOptionsLibelleOperation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsModeFinancier: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsSens: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMontant: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDevise: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNumCompte: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCodeNomAgent: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsBilletterie: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsSagPapier: MyWay.UI.ImwTableColumnOptions;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
        buildDataTable(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class MwFooterNavigationControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        $rootScope: ng.IRootScopeService;
        contexteReception: MyWay.composantsCommuns.model.IContexteOD;
        locationService: ng.ILocationService;
        routeConstant: Array<Object>;
        routeConstantObj: any;
        desactiverBtnValiderReception: boolean;
        desactiverBtnAnnulerReception: boolean;
        desactiverBtnValiderROF: boolean;
        desactiverBtnAnnulerROF: boolean;
        private desactiverBtnValiderBPFM;
        private desactiverBtnAnnulerBPFM;
        private desactiverBtnValiderPDC;
        private desactiverBtnAnnulerPDC;
        private desactiverBtnValiderGMI;
        private desactiverBtnAnnulerGMI;
        private desactiverBtnValiderDFI;
        private desactiverBtnAnnulerDFI;
        private visibleBtnValiderROF;
        private desactiverBtnValiderDelestage;
        private desactiverBtnAnnulerDelestage;
        private desactiverBtnValiderGestionFond;
        private desactiverBtnAnnulerGestionFond;
        private codeOperation;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        /**
         * fonction commun pour le bouton Valider et Annuler
         */
        valider(avalider: string): void;
        annuler(aAnnuler: string): void;
        extourner(avalider: string): void;
        regulariser(): void;
        annulerRegulariser(): void;
    }
}

declare module myway.operationsFinancieres {
    function mwFooterNavigation(): ng.IDirective;
}

declare module myway.operationsFinancieres {
    class MwGestionFondsControleur {
        private $scope;
        private modalService;
        private serviceAgentExtended;
        private operationsDiversesService;
        private commonService;
        static $inject: string[];
        titre: string;
        titreAffiche: string;
        extourne: boolean;
        codeOperation: string;
        desactiveSensOperation: boolean;
        dataTransfertFondImpression: any;
        habilitationEditionBordereau: boolean;
        private chargementEnCours;
        private guichetEmetteurSelectionne;
        private guichetDestinataireSelectionne;
        private edsSelectionneEmetteur;
        private edsSelectionneDestinataire;
        private paramListeGuichet;
        private paramEdsGuichet;
        private identifiantBordereau;
        private libelleGuichetEmetteurSelectionne;
        private libelleGuichetDestinataireSelectionne;
        private montantOperationSaisi;
        private sensOperationSaisi;
        private guichetDestinataireSelectionneSaisi;
        private guichetEmetteurSelectionneSaisi;
        private intitule1OperationSaisi;
        private intitule2OperationSaisi;
        private sensOperationSelectionne;
        private listSensOperation;
        private entreeTransfertFond;
        private parametresComptables;
        private authentificationInfo;
        private habilitationBackOffice;
        private contexteOdBDFI;
        private contexteOdSlectionne;
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
        WatchSensOperationSelectionne(): void;
        validerGestionFond(): void;
        controlerFormulaire(): void;
        reinitialiserFormulaire(): void;
        impression(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class MwGestionMouvementsInternesControleur {
        private $scope;
        private modalService;
        private serviceAgentExtended;
        private operationsDiversesService;
        private commonService;
        static $inject: string[];
        titre: string;
        titreAffiche: string;
        extourne: boolean;
        habilitationEditionBordereau: boolean;
        libelleOperationSaisi: boolean;
        libelleOperationComplementaireSaisi: boolean;
        private chargementEnCours;
        private guichetEmetteurSelectionne;
        private guichetDestinataireSelectionne;
        private paramListeGuichet;
        private paramEdsGuichet;
        private libelleGuichetEmetteurSelectionne;
        private libelleGuichetDestinataireSelectionne;
        private edsSelectionneEmetteur;
        private edsSelectionneDestinataire;
        private entreeMouvementInternes;
        private parametresComptables;
        private authentificationInfo;
        private contexteOd;
        private habilitationBackOffice;
        private identifiantBordereau;
        private dataMouvementsInternesImpression;
        private montantOperationSaisi;
        private guichetDestinataireSelectionneSaisi;
        private guichetEmetteurSelectionneSaisi;
        private afficherListeGuichetEmetteurSimple;
        private afficherListeGuichetDestinataireSimple;
        private libelleCommentaire1;
        private libelleCommentaire2;
        contextesOD: Array<MyWay.composantsCommuns.model.IContexteOD>;
        contextMVIT: Array<MyWay.composantsCommuns.model.IContexteOD>;
        constructor($scope: ng.IScope, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
        validerMouvementsInternes(): void;
        controlerFormulaire(): void;
        reinitialiserFormulaire(): void;
        impression(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ReceptionFondsControleur1006 {
        private $scope;
        private serviceAgentExtended;
        private modalService;
        private operationsDiversesService;
        private commonService;
        static $inject: string[];
        titre: string;
        titreAffiche: string;
        extourne: boolean;
        contextOd: Array<MyWay.composantsCommuns.model.IContexteOD>;
        guichetDestinataireSelectionne: any;
        paramListeGuichet: MyWay.Model.EDSGuichetParam;
        habilitationBackOffice: boolean;
        habilitationEditionBordereau: boolean;
        paramEdsGuichet: MyWay.Model.EDSRechercheGuichetParam;
        private entreeTransfertFond;
        private montantOperationSaisi;
        private identifiantGuichetDestinataireSaisi;
        private contextAgentConnecte;
        private parametresComptables;
        private chargementEnCours;
        private libelleOperationSaisi;
        private libelleOperationComplementaireSaisi;
        private edsSelectionne;
        private identifiantBordereau;
        dataTransfertFondImpression: any;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
        validerReception(): void;
        controlerFormulaire(): void;
        reinitialiserFormulaire(): void;
        impression(): void;
    }
}

declare module myway.composantsCommuns {
}

declare module myway.operationsFinancieres {
    class ReceptionFondsControleur1198 {
        private $scope;
        private serviceAgentExtended;
        private modalService;
        private operationsDiversesService;
        private commonService;
        static $inject: string[];
        titre: string;
        titreAffiche: string;
        extourne: boolean;
        contextOd: Array<MyWay.composantsCommuns.model.IContexteOD>;
        chargementEnCours: boolean;
        listeReferencesSize: number;
        habilitationEditionBordereau: boolean;
        private entreeTransfertFond;
        private montantOperationSaisi;
        private isReferenceLivraisonSaisi;
        private contextAgentConnecte;
        private typeReceptionFondInput;
        private typeReceptionFond;
        private parametresComptables;
        private libelleOperationComplementaireSaisi;
        private libelleOperationSaisi;
        paramEdsGuichet: MyWay.Model.EDSRechercheGuichetParam;
        private identifiantBordereau;
        dataTransfertFondImpression: any;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, commonService: myway.operationsFinancieres.CommonService);
        watchReferenceLivraison(referenceLivraison: string): void;
        validerReception(): void;
        controlerFormulaire(): void;
        reinitialiserFormulaire(): void;
        impression(): void;
    }
}

declare module myway.composantsCommuns {
}

declare module myway.operationsFinancieres {
    class ExtourneBilletsControleur {
        private $scope;
        private commonService;
        objetExtourne: MyWay.composantsCommuns.model.IExtourne;
        static $inject: string[];
        constructor($scope: ng.IScope, commonService: myway.operationsFinancieres.CommonService);
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ExtourneDelestageFondsControleur {
        private $scope;
        private commonService;
        private serviceAgentExtended;
        private modalService;
        private operationsDiversesService;
        objetExtourne: MyWay.composantsCommuns.model.IExtourne;
        entreeTransfertFond: MyWay.composantsCommuns.model.ITransfertFondsSansBordereau;
        extourne: MyWay.composantsCommuns.model.IExtourne;
        static $inject: string[];
        constructor($scope: ng.IScope, commonService: myway.operationsFinancieres.CommonService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService);
        validerExtourne(): void;
        getExtourne(): MyWay.composantsCommuns.model.IExtourne;
        retourMwRechercheExtourne(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ExtourneDifferencesCaissesControleur {
        private $scope;
        private commonService;
        objetExtourne: MyWay.composantsCommuns.model.IExtourne;
        static $inject: string[];
        constructor($scope: ng.IScope, commonService: myway.operationsFinancieres.CommonService);
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ExtourneGestionFondsControleur {
        private $scope;
        private commonService;
        private serviceAgentExtended;
        private modalService;
        private operationsDiversesService;
        objetExtourne: MyWay.composantsCommuns.model.IExtourne;
        entreeTransfertFond: MyWay.composantsCommuns.model.ITransfertFondsSansBordereau;
        extourne: MyWay.composantsCommuns.model.IExtourne;
        contexteOD: MyWay.composantsCommuns.model.IContexteOD;
        static $inject: string[];
        constructor($scope: ng.IScope, commonService: myway.operationsFinancieres.CommonService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService);
        validerExtourne(): void;
        getExtourne(): MyWay.composantsCommuns.model.IExtourne;
        retourMwRechercheExtourne(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ExtourneMouvementsInternesControleur {
        private $scope;
        private commonService;
        objetExtourne: MyWay.composantsCommuns.model.IExtourne;
        static $inject: string[];
        constructor($scope: ng.IScope, commonService: myway.operationsFinancieres.CommonService);
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ExtourneReceptionFonds1198Controleur {
        private $scope;
        private commonService;
        private serviceAgentExtended;
        private modalService;
        private operationsDiversesService;
        objetExtourne: MyWay.composantsCommuns.model.IExtourne;
        entreeTransfertFond: MyWay.composantsCommuns.model.ITransfertFondsSansBordereau;
        extourne: MyWay.composantsCommuns.model.IExtourne;
        static $inject: string[];
        constructor($scope: ng.IScope, commonService: myway.operationsFinancieres.CommonService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService);
        validerExtourne(): void;
        getExtourne(): MyWay.composantsCommuns.model.IExtourne;
        retourMwRechercheExtourne(): void;
    }
}

declare module myway.operationsFinancieres {
}

declare module myway.operationsFinancieres {
    class ExtourneReceptionFonds1006Controleur {
        private $scope;
        private commonService;
        private serviceAgentExtended;
        private modalService;
        private operationsDiversesService;
        private gcedocService;
        private identifiantBordereauService;
        objetExtourne: MyWay.composantsCommuns.model.IExtourne;
        entreeTransfertFond: MyWay.composantsCommuns.model.ITransfertFondsSansBordereau;
        extourne: MyWay.composantsCommuns.model.IExtourne;
        private identifiantBordereau;
        private authentificationInfo;
        habilitationEditionBordereau: boolean;
        contexteOd: MyWay.composantsCommuns.model.IContexteOD;
        private dataTransfertFondImpression;
        private modeExtourne;
        static $inject: string[];
        constructor($scope: ng.IScope, commonService: myway.operationsFinancieres.CommonService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, operationsDiversesService: myway.composantsCommuns.OperationsDiversesService, gcedocService: myway.composantsCommuns.GcedocService, identifiantBordereauService: myway.comInterdomaine.IdentifiantBordereauService);
        validerExtourne(): void;
        getExtourne(): MyWay.composantsCommuns.model.IExtourne;
        retourMwRechercheExtourne(): void;
        impression(): void;
    }
}

declare module myway.operationsFinancieres {
}
