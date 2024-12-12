
declare module myway.comGestCommerciale {
    var app: ng.IModule;
}

declare module myway.comGestCommerciale {
    interface ISaisieConseillerPortefeuilleScope extends ng.IScope {
        viewModelConseillerPortefeuillCtrl: SaisieConseillerPortefeuilleController;
    }
    class Portefeuille {
        id: string;
        value: string;
        idSuiviPar: string;
        libelleSuiviPar: string;
        libelle: string;
        type: string;
        constructor(idp: string, valuep: string);
        constructor(idp: string, valuep: string, suiviPar: string, libelleSuiviParp: string);
        constructor(idp: string, valuep: string, suiviPar?: string, libelleSuiviParp?: string, codeTypePortefeuille?: string);
    }
    interface IConseillerPortefeuilleScopeController {
        portefeuille: Portefeuille;
        listPortefeuilles: Array<Portefeuille>;
        ngModel: Object;
        required: boolean;
        agence: string;
    }
    class SaisieConseillerPortefeuilleController implements IConseillerPortefeuilleScopeController {
        private $scope;
        private saisieConseillerPortefeuilleService;
        private serviceAgentExtended;
        static $inject: string[];
        portefeuille: Portefeuille;
        listPortefeuilles: Array<Portefeuille>;
        ngModel: Object;
        required: boolean;
        agence: string;
        static LIBELLE_NON_AFFECTE: string;
        static DEFAULT_ERROR_MESSAGE: string;
        errorMessage: string;
        habilitations: Object;
        constructor($scope: ISaisieConseillerPortefeuilleScope, saisieConseillerPortefeuilleService: SaisieConseillerPortefeuilleService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private verfication(habilitation);
        /**
         * @alias onSelectPTF.
         * @return {void}
         * @param {void}
         * @description event onSelect portefeuille
         */
        onSelectPTF(): void;
        /**
         * @alias processError.
         * @return {MyWay.Services.Erreur} Erreur à afficher
         * @param {void}
         */
        private processError(error);
    }
}

declare module myway.comGestCommerciale {
}

declare module myway.comGestCommerciale {
    class SaisieConseillerPortefeuilleService {
        private $q;
        private $http;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, $http: ng.IHttpService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @alias getPortefeuilles.
         * @return {Array<Object>} la liste des portefeuille.
         * @param {number} id Element de structure
         * @description récupère la liste des portefeuilles correspondant à l'id EDS en entrée
         */
        getPortefeuilles(idElementStructure: number): ng.IPromise<Array<Object>>;
        /**
         * @alias getReferenceExterneAgentConnecte.
         * @return {string} Id de l'agent connecté
         * @param {void}
         * @description récupère la référence de l'agent connecté (contexte)
         */
        getReferenceExterneAgentConnecte(): ng.IPromise<string>;
    }
}

declare module myway.comGestCommerciale {
    interface IPortefeuilleRattachement {
        codeTypePortefeuille: string;
        identifiantElementStructurePortefeuille: number;
        libelleElementStructurePortefeuille: string;
        identifiantElementStructureSuiviPortefeuille: number;
        libelleElementStructureSuiviPortefeuille: string;
        identifiantPortefeuille: number;
        codeMotifPortefeuille: string;
        libellePortefeuille: string;
    }
    interface IPortefeuilleTransfert {
        identifiantPortefeuilleTransfert: number;
        indicateurEnvoiMessage: string;
        codeTypeMotifTransfert: string;
        identifiantElementStructurePortefeuilleTransfert: number;
    }
    interface ITiersPortefeuille {
        portefeuilleRattachement: IPortefeuilleRattachement;
        portefeuilleTransfert: IPortefeuilleTransfert;
        codeEtablissement: string;
        identifiantRelationEconomique: number;
        identifiantTiers: number;
    }
}

declare module myway.comGestCommerciale {
    interface ISuiviParModificationScope extends ng.IScope {
        openRechercheEDS(_rechercheEDS: Object): void;
    }
    class SuiviParModificationController {
        private $scope;
        private suiviParModificationService;
        private modalService;
        private serviceAgentExtended;
        private mwNotificationService;
        private $q;
        static $inject: string[];
        private requiredPortefeuille;
        private requiredAgence;
        private chevronVisible;
        private notItemsFoundText;
        private libellePortefeuilleOrigine;
        private libelleConseillerOrigine;
        private libelleAgenceOrigine;
        private libellePortefeuilleDestinataire;
        private libelleAgenceDestinataire;
        private conseillerOrigine;
        private portefeuilleOrigine;
        private agenceOrigine;
        private portefeuilleDestinataire;
        private agenceDestinataire;
        private rechercheEDS;
        private idPersonne;
        private habilitations;
        private visibleLink;
        private informationMessage;
        private envoiManager;
        private cacheEnvoiManager;
        private modeCreationPmProspect;
        private nonEnregistrement;
        private peutModifier;
        private agentId;
        private tableauHabilitation;
        private TIERS_VERSION;
        private codeMarche;
        constructor($scope: ISuiviParModificationScope, suiviParModificationService: SuiviParModificationService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, $q: ng.IQService);
        /**
         * @alias initModale.
         * @description initialise toutes les données pour l'ouverture de la modale
         * @return {void}
         * @param {void}
         */
        private initModale();
        /**
         * @alias getHabilitationSHDQ38.
         * @description récupère l'habilitation SHDQ38
         * @return {boolean}
         * @param {void}
         */
        private getHabilitationSHDQ38();
        /**
         * @alias peutModifierSuivi.
         * @description vérifie les droits de modification
         * @return {boolean}
         * @param {void}
         */
        private peutModifierSuivi();
        private verfication(habilitation);
        /**
         * @ngdoc function
         * @name getCodeMarche
         * @methodOf myway.recherchePersonne.CodeMarcheService
         * @description
         * appel a la ressource tier-v1/identification pour recuperer les infos de code marche du client.
         * @param {codeEtablissement: string, numeroPersonne: string}.
         * @returns {ng.IPromise<ICodeMarche>} une promesse de type ICodeMarche.
         */
        private getCodeMarche(codeEtablissement, numeroPersonne);
        /**
         * @alias openRechercheEDS.
         * @description ouvre la modale
         * @return {void}
         * @param {void}
         */
        openRechercheEDS(): void;
    }
    class SuiviParModaleController {
        private $scope;
        private $modalInstance;
        private suiviParModificationService;
        private data;
        private $modal;
        static $inject: string[];
        constructor($scope: any, $modalInstance: any, suiviParModificationService: SuiviParModificationService, data: any, $modal: any);
        verificationSHDQ24(destinataire: string, origine: string, agent: string): boolean;
        verificationSHDQ23(origine: string, destinataire: any): boolean;
    }
}

declare module myway.comGestCommerciale {
}

declare module myway.comGestCommerciale {
    class SuiviParModificationService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @alias savePortefeuilles.
         * @description permet d'enregistrer un portefeuille
         * @return {myway.comGestCommerciale.ITiersPortefeuille} : portefeuille enregistré
         * @param {any} : portefeuille à enregistrer
         */
        savePortefeuilles(dataToSave: any): ng.IPromise<myway.comGestCommerciale.ITiersPortefeuille>;
    }
}

declare module myway.comGestCommerciale {
    class RestitueSuiviCommercialController {
        private $scope;
        private restitueSuiviCommercialService;
        static $inject: string[];
        conseiller: Object;
        portefeuille: Object;
        agence: Object;
        valueConseiller: string;
        valuePortefeuille: string;
        valueAgence: string;
        libellePortefeuille: string;
        libelleConseiller: string;
        libelleAgence: string;
        setLabelWidth: string;
        setWidth: string;
        idPersonne: number;
        static DEFAULT_ERROR_MESSAGE: string;
        errorMessage: string;
        private horsPortefeuille;
        constructor($scope: ng.IScope, restitueSuiviCommercialService: RestitueSuiviCommercialService);
        /**
         * @alias processError.
         * @param {MyWay.Services.Erreur} : erreur à afficher
         * @return {void}
         */
        private processError(error);
    }
}

declare module myway.comGestCommerciale {
}

declare module myway.comGestCommerciale {
    class RestitueSuiviCommercialService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @alias getInfoSuiviCommercial.
         * @param idPersonne (si vide consultation de identifiantPersonne dans le contexte)
         * @return {Object} les infos portefeuille du client actuel.
         */
        getInfoSuiviCommercial(idPersonne?: number): ng.IPromise<Object>;
        /**
         * @alias appelleRessourceREST.
         * @param {string} URL d'appel de la ressource REST
         * @return {Object} les infos portefeuille du client actuel.
         */
        private appelleRessourceREST(urlTiers);
    }
}
