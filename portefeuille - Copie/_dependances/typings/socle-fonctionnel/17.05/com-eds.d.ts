
declare module myway.comEds {
    var app: ng.IModule;
}

declare module myway.comEds {
    class SaisirAgenceDestinataireController {
        private $scope;
        private saisieAgenceDestinataireService;
        private serviceAgentExtended;
        private $element;
        static $inject: string[];
        agence: MyWay.Model.Agence;
        listeAgences: MyWay.Model.Agence[];
        libelle: string;
        setLabelWidth: string;
        required: boolean;
        chevronVisible: boolean;
        notItemsFoundText: string;
        dropdownSetWidth: string;
        private enterKeypressEvent;
        private chosenSettings;
        static MAX_LENGTH: number;
        static DEFAULT_ERROR_MESSAGE: string;
        errorMessage: string;
        disable: boolean;
        _onSelect: any;
        placeholder: string;
        private static AGENCES_CONTEXT;
        selected: any;
        constructor($scope: ng.IScope, saisieAgenceDestinataireService: SaisieAgenceDestinataireService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $element: ng.IAugmentedJQuery);
        /**
         * @alias onSelect.
         * @return {void}
         * @param {Agence} agence sélectionnée
         * @description event onSelect
         */
        onSelect(item: MyWay.Model.Agence): void;
        /**
         * @alias onItemSelect.
         * @return {void}
         * @param {Agence} agence sélectionnée
         * @description event onItemSelect
         */
        onItemSelect(item: MyWay.Model.Agence): void;
        /**
         * @alias processError.
         * @return {void}
         * @param {error} erreur à afficher
         * @description méthode de gestion des messages d'erreur
         */
        private processError(error);
        /**
         * @alias keydown.
         * @return {void}
         * @param {JQueryKeyEventObject}
         * @description event keydown
         */
        keydown(event: JQueryKeyEventObject): void;
        /**
         * @alias onblur.
         * @return {void}
         * @param {void}
         * @description event onBlur
         */
        onblur(): void;
    }
}

declare module myway.comEds {
    function mwsfSaisieAgenceDestinataire(): ng.IDirective;
}

declare module myway.comEds {
    class SaisieAgenceDestinataireService {
        private $q;
        private $http;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, $http: ng.IHttpService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @alias getAgencesDestinataires.
         * @return {<MyWay.Model.Agence[]} la liste des agences destinataires.
         */
        getAgencesDestinataires(): ng.IPromise<MyWay.Model.Agence[]>;
        /**
         * @alias affineValue.
         * @return {string} valeur affinée
         * @param {string} valeur à affiner
         * @description ajoute des 0 devant la valeur en entrée jusqu'a la longueur voulue
         */
        affineValue(itemValue: string): string;
        /**
         * @ngdoc function
         * @name getAgenceDTO
         * @methodOf myway.comEds.SaisieAgenceDestinataireService.getAgencesDTO()
         * @description
         * transforme une collection d'object passé en param de type any à un objet de type MyWay.Model.Agence[].
         * @param {MyWay.Model.IAgence[]}.
         * @returns {MyWay.Model.Agence[]}, un tableau d'objets de type MyWay.Model.Agence[].
         */
        private getAgencesDTO(param);
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
    }
}

declare module myway.comEds {
    class ListeGuichetController {
        private $scope;
        private rechercheEdsService;
        static $inject: string[];
        static MAX_LENGTH: number;
        /**
         * Paramètre d'entrée de la directive contenant le code de l'EDS.
         */
        edsGuichetParam: MyWay.Model.EDSGuichetParam;
        /**
         * Renvoie le guichet sélectionné.
         */
        edsGuichet: IGuichet;
        /**
         * Liste des guichets.
         */
        listeGuichet: IGuichet[];
        constructor($scope: ng.IScope, rechercheEdsService: myway.comEds.RechercheEdsGuichetService);
        /**
         * @alias chargerListeGuichet
         * @return {void}
         * @param void
         * @description Charge la liste des guichets
         */
        chargerListeGuichet(): void;
    }
}

declare module myway.comEds {
    function mwsfListeGuichet(): ng.IDirective;
}

declare module myway.comEds {
    class SaisirAgentController {
        private $scope;
        private $timeout;
        private saisieAgentService;
        private serviceAgentExtended;
        private $q;
        private $element;
        static $inject: string[];
        agent: MyWay.Model.Agent;
        listeAgents: MyWay.Model.Agent[];
        required: boolean;
        errorMessage: string;
        noResults: boolean;
        placeholder: string;
        disable: boolean;
        lastRecherche: string;
        static NBRE_CARAC_MATRICULE: number;
        maxReponses: number;
        rechercheMatricule: boolean;
        codeAction: string;
        typeFonction: string;
        agentNonNominatif: string;
        loaderAgent: boolean;
        static ERROR_MESSAGE_AUCUN_RESULTAT: string;
        minLength: number;
        waitTime: number;
        ngFocus: boolean;
        _onSelect: any;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, saisieAgentService: myway.comEds.SaisieAgentService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: angular.IQService, $element: ng.IAugmentedJQuery);
        /**
         * @alias rechercher
         * @return {MyWay.Model.Agent[]}
         * @param critere
         * @description recherche les agents en fonction des criteres
         */
        rechercher(critere: string): ng.IPromise<MyWay.Model.Agent[]>;
        /**
         * @alias processError
         * @return {void}
         * @param error
         * @description affichage des messages d'erreur
         */
        private processError(error);
        /**
         * @alias onSelect
         * @return {void}
         * @param Agent
         * @description event onSelect
         */
        onSelect(item: MyWay.Model.Agent): void;
        /**
         * @alias onItemSelect
         * @return {void}
         * @param Agent : item sélectionné
         * @description event onItemSelect
         */
        onItemSelect(item: MyWay.Model.Agent): void;
        /**
         * @alias onFocus
         * @return {void}
         * @param void
         * @description event onfocus
         */
        onFocus(): void;
    }
}

declare module myway.comEds {
    function mwsfSaisieAgent(): ng.IDirective;
}

declare module myway.comEds {
    class SaisieAgentService {
        private $q;
        private serviceAgentExtended;
        private static MAX_REPONSES;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @alias replaceAll
         * @return {string}
         * @param str, old, rep
         * @description remplace old par rep dans str + retourne str
         */
        private replaceAll(str, old, rep);
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
        /**
         * @alias getRechercheParMatricule
         * @return {MyWay.Model.Agent[]}
         * @param id, codeAction
         * @description recherche les agents ayant le matricule en entrée
         */
        getRechercheParMatricule(id: number, codeAction: string): ng.IPromise<MyWay.Model.Agent[]>;
        /**
         * @alias getRechercheParTypeFonction
         * @return {MyWay.Model.Agent[]}
         * @param typeFonction, codeAction
         * @description recherche les agents ayant le typeFonction en entrée
         */
        getRechercheParTypeFonction(typeFonction: string, codeAction: string): ng.IPromise<MyWay.Model.Agent[]>;
        /**
         * @alias getAgents
         * @return {MyWay.Model.Agent[]} la liste des agents
         */
        getAgents(critere: string, maxRep: number, agentNonNominatif: string, codeAction: string): ng.IPromise<MyWay.Model.Agent[]>;
        /**
         * @alias mapAgent
         * @return {MyWay.Model.Agent[]} la liste des agents mappée
         */
        private mapAgent(param);
    }
}

declare module MyWay.Model {
    interface IAgence {
        id?: string;
        value?: string;
        identifiantElementStructure?: number;
    }
    class Agence implements IAgence {
        id: string;
        value: string;
        identifiantElementStructure: number;
        constructor();
        constructor(id: string, value: string, identifiantEDS: number);
    }
}

declare module MyWay.Model {
    interface IAgent {
        id?: string;
        designation?: string;
        libelle?: string;
    }
    class Agent implements IAgent {
        id: string;
        designation: string;
        libelle: string;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        idEdsHierarchique: number;
        idEds: number;
        indicAgentNonNominatif: string;
        libelleEdsHierarchique: string;
        libelleTypeEdsHierarchique: string;
        libelleFonction: string;
        refEDS: number;
        refEDSHierarchique: number;
        typeEdsHierarchique: string;
        typeFonction: string;
        constructor();
        constructor(idp: string, designationp: string, libelleFonctionp: string, refEDSp: number, libelleEdsHierarchiquep: string);
    }
}

declare module MyWay.Model {
    class EDS {
        codeCaisse: string;
        codeEDS: string;
        constructor();
        constructor(codeCaisse: string, codeEDS: string);
    }
    class EDSGlobal {
        /**
         * Contient le type d'EDS Global renvoyé par le composant
         * "A" pour un Agent
         * "E" pour un EDS
         */
        typeEDSGlobal: string;
        /**
         * EDS Informations
         */
        edsInformations: myway.comEds.DonneesCommunesEDSGuichet;
        /**
         * EDS d'Agent
         */
        edsAgent: MyWay.Model.Agent;
        constructor();
        constructor(typeEDSGlobal: string, edsInformations: myway.comEds.DonneesCommunesEDSGuichet, edsAgent: MyWay.Model.Agent);
    }
    /**
     * Paramètres d'entrée de la directive mwsfListeGuichet
     */
    class EDSGuichetParam {
        /**
         * Code etablissement.
         */
        codeEtablissement: string;
        /**
         * Identifiant Interne EDS.
         */
        identifiantInterneEDS: number;
        /**
         * Indicateur permettant d'indiquer quel type de guichet est recherché.
         * Valeurs possibles : "1" - Tous "2" - Normal (Seulement les guichets) "3" - GAB
         */
        typeGuichet: string;
        constructor();
        constructor(codeEtablissement: string, identifiantInterneEDS: number, typeGuichet: string);
    }
    /**
     * Paramètres d'entrée de la directive mwsfRechercheEdsGuichet
     */
    class EDSRechercheGuichetParam {
        /**
         * Code etablissement.
         */
        codeEtablissement: string;
        /**
         * Code relation.
         */
        codeRelation: string;
        /**
         * Indicateur permettant d'indiquer quel type de guichet est recherché.
         * Valeurs possibles : "1" - Tous "2" - Normal (Seulement les guichets) "3" - GAB
         */
        typeGuichet: string;
        constructor();
        constructor(codeEtablissement: string, codeRelation: string, typeGuichet: string);
    }
    /**
     * Paramètres d'entrée de la directive mwsfRechercheEdsGlobale
     */
    class EDSRechercheGlobaleParam {
        /**
         * Code etablissement.
         */
        codeEtablissement: string;
        /**
         * Code de la relation entre le domaine EDS et les autres domaines applicatifs du SI MYSYS.
         *  Exemples : '001' 'Géré par' '002' 'Suivi par' '003' 'Domicilié à' '004' 'Gestion des stocks de chéquiers' '005' 'CI-Traite'
         */
        codeRelation: string;
        /**
         * Indique si on ajoute le type d'EDS : Poste fonctionnel par fonction
         */
        presencePFParFonction: boolean;
        constructor();
        constructor(codeEtablissement: string, codeRelation: string);
        constructor(codeEtablissement: string, codeRelation: string, presencePFparFonction: boolean);
    }
}

declare module myway.comEds {
    /**
     * Query params de la ressource rest structureparametre/parametreEDS
     */
    interface IStructureFonctionEDSQueryParams {
        codeEtablissement: string;
        typeInterrogation: string;
        dateInterrogation: string;
    }
    interface IParametreEDS {
        organisation: Array<IOrganisation>;
        fonction: Array<IFonction>;
        typeAgence: Array<ITypeAgence>;
        typeEDS: Array<ITypeEDS>;
        typeService: Array<ITypeService>;
    }
    interface IOrganisation {
        libelleOrganisation: string;
        codeOrganisation: string;
    }
    interface ITypeEDS {
        codeTypeEDS: string;
        libelleTypeEDS: string;
        typeOrganisation: string;
        niveauHierarchique: number;
    }
    interface ITypeService {
        codeTypeService: string;
        libelleTypeService: string;
    }
    interface IFonction {
        libelleFonction: string;
        dateFinValiditeFonction: Date;
        codeFonction: string;
    }
    interface ITypeAgence {
        codeTypeAgence: string;
        libelleTypeAgence: string;
    }
}

declare module myway.comEds {
    /**
     * Contrôleur de la directive mwsfRechercheEds
     */
    class RechercheEdsGlobaleController {
        private rechercheEdsGlobaleService;
        /**
         * Objet de paramètre d'entrée contant le code etablissement, le code relation et le type de guichet
         */
        edsRechercheGlobaleParam: MyWay.Model.EDSRechercheGlobaleParam;
        /**
         * EDS sélectionné (paramètre d'entrée de la directive)
         */
        edsSelectionne: MyWay.Model.EDSGlobal;
        /**
         * Fonction contextuelle lors d'une sélection d'eds (paramètre d'entrée de la directive)
         */
        private onSelect;
        static $inject: string[];
        constructor(rechercheEdsGlobaleService: myway.comEds.RechercheEdsGlobaleService);
        /**
         * @alias ouvrirModaleEdsGlobale
         * @return {void}
         * @description ouvre la modale
         * @param void
         */
        ouvrirModaleEdsGlobale(): void;
    }
}

declare module myway.comEds {
}

declare module myway.comEds {
    /**
     * Ce service contient les méthodes relatives aux recherches sur les EDS.
     */
    class RechercheEdsGlobaleService {
        private modalService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.ModalService);
        /**
         * @alias ouvrirModaleRecherche
         * @return {EDSGlobal}
         * @description ouvre la modale
         * @param edsRechercheGlobaleParam
         * @param eds
         */
        ouvrirModaleRecherche(edsRechercheGlobaleParam?: MyWay.Model.EDSRechercheGlobaleParam, eds?: MyWay.Model.EDSGlobal): ng.IPromise<MyWay.Model.EDSGlobal>;
    }
}

declare module myway.comEds {
    interface IGuichetEDS {
        listeGuichet: Array<IGuichet>;
        identifiantInterneEDS: number;
        codeEtablissement: string;
    }
    interface IGuichet {
        identifiantInterneGuichet: number;
        referenceExterneGuichet: number;
        referenceExterneGuichetAffichage: string;
        libelleGuichet: string;
        identifiantInterneGAB: string;
        referenceExterneGAB: string;
        referenceExterneGABAffichage: string;
        libelleGAB: string;
    }
    interface ICaracteristiqueGuichet {
        DonneeCommune: IDonneeCommune;
        DonneeSpecifique: IDonneeSpecifique;
        Localisation: Array<ILocalisation>;
        DonneeRattachement: IDonneeRattachement;
    }
    interface IDonneeCommune {
        codeEtablissement: string;
        identifiantElementStructure: number;
        referenceElementStructure: number;
        typeElementStructure: string;
        libelleElementStructure: string;
        libelleTypeElementStructure: string;
        dateDebutValiditeEDS: Date;
        dateFinValiditeEDS: Date;
    }
    interface IDonneeSpecifique {
        typeGuichet: string;
        designationTypeGuichet: string;
    }
    interface ILocalisation {
        identifiantSite: number;
        typeAdresse: string;
        dateDebutValiditeSite: Date;
        dateFinValiditeSite: Date;
    }
    interface IDonneeRattachement {
        identifiantEDSSuperieur: number;
        referenceEDSSuperieur: number;
        libelleEDSSuperieur: string;
        typeEDSSuperieur: string;
    }
    class Guichet {
        informationGuichet: IGuichet;
        caracteristiqueGuichet: ICaracteristiqueGuichet;
        constructor();
        constructor(informationGuichet: IGuichet, caracteristiqueGuichet: ICaracteristiqueGuichet);
    }
}

declare module myway.comEds {
    /**
     * Contrôleur de la directive mwsfRechercheEds
     */
    class RechercheEdsGuichetController {
        private $scope;
        private serviceAgentExtended;
        private rechercheEdsService;
        /**
         * Objet de paramètre d'entrée contant le code etablissement, le code relation et le type de guichet
         */
        edsRechercheGuichetParam: MyWay.Model.EDSRechercheGuichetParam;
        /**
         * Guichet sélectionné (paramètre de sortie de la directive)
         */
        guichetSelectionne: Guichet;
        /**
         * Fonction contextuelle lors d'une sélection d'eds (paramètre d'entrée de la directive)
         */
        private onSelect;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rechercheEdsService: myway.comEds.RechercheEdsGuichetService);
        /**
         * @alias ouvrirModaleEds
         * @return {void}
         * @description ouvre la modale
         * @param void
         */
        ouvrirModaleEds(): void;
    }
}

declare module myway.comEds {
}

declare module myway.comEds {
    /**
     * Ce service contient les méthodes relatives aux recherches sur les EDS.
     */
    class RechercheEdsGuichetService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        /**
         * @alias ouvrirModaleRecherche
         * @return {Guichet}
         * @description ouvre la modale
         * @param edsRechercheGuichetParam
         * @param guichet
         */
        ouvrirModaleRecherche(edsRechercheGuichetParam?: MyWay.Model.EDSRechercheGuichetParam, guichet?: Guichet): ng.IPromise<Guichet>;
        /**
          * @alias getFonctionPosteFonctionnelGuichet
          * @param {codeEtablissement}
          * @return {IParametreEDS}
          * @description Permet de récupérer les fonctions des postes fonctionnels d'un guichet.
         */
        getFonctionPosteFonctionnelGuichet(codeEtablissement: string): ng.IPromise<IParametreEDS>;
        /**
          * @alias getCaracteristiqueGuichet
          * @param {identifiantElementStructure, typeOrganisation, codeEtablissement}
          * @return {ICaracteristiqueGuichet}
          * @description Permet de récupérer les caractéristiques d'un guichet.
         */
        getCaracteristiqueGuichet(identifiantElementStructure: number, typeOrganisation: string, codeEtablissement: string): ng.IPromise<ICaracteristiqueGuichet>;
        /**
         * @alias getListeGuichets
         * @param {identifiantInterneEDS, codeEtablissement, typeGuichet}
         * @return {IGuichetEDS}
         * @description Permet de récupérer la liste des guichets.
         */
        getListeGuichets(identifiantInterneEDS: number, codeEtablissement: string, typeGuichet?: string): ng.IPromise<IGuichetEDS>;
        /**
         * @alias getTypeEDS
         * @param {codeEtablissement, codeRelation}
         * @return {IValeurTypeEDSGuichet[]}
         * @description Cette ressource, uniquement appelée en GET, permet d'obtenir, pour un établissement, la liste des types EDS paramétrés.
         * Cette recherche peut être affinée par la fourniture d'un code Relation EDS.
         */
        getTypeEDS(codeEtablissement: string, codeRelation?: string): ng.IPromise<IValeurTypeEDSGuichet[]>;
        /**
         * @alias getRecherche
         * @param {IStructureRechercheEDSQueryParams}
         * @return {DonneesCommunesEDSGuichet[]}
         * @description Cette méthode effectue différents types de recherche :
         * - par identifiant interne d’EDS
         * - par référence externe
         * - par type d'EDS
         * - par libellé d'EDS
         * - par type d'EDS
         * Restitution : Liste des éléments de structure répondant aux critères de recherche.
         */
        getRecherche(params: IStructureRechercheEDSQueryParams): ng.IPromise<DonneesCommunesEDSGuichet[]>;
    }
}

declare module myway.comEds {
    enum TypeRechercheEDSEnum {
        IDENTIFIANT_INTERNE = 1,
        REFERENCE_EXTERNE_ET_TYPE = 2,
        LIBELLE_EDS = 3,
        TYPE_EDS = 4,
    }
    /**
     * Query params de la ressource rest structure/recherche
     */
    interface IStructureRechercheEDSQueryParams {
        typeRechercheEDS: TypeRechercheEDSEnum;
        codeEtablissement: string;
        typeEDS: string;
        referenceExterneEDS?: number;
        libelleEDS?: string;
        identifiantEDS?: number;
    }
    /**
     * Query params de la ressource rest structure/caracteristiqueGuichet
     */
    interface IStructureCaracteristiqueGuichetQueryParams {
        codeEtablissement: string;
        identifiantElementStructure?: number;
        referenceElementStructure?: number;
        dateInterrogation: string;
        typeOrganisation: string;
    }
    /**
     * Query params de la ressource rest structure/guichetEDS
     */
    interface IStructureListeGuichetQueryParams {
        codeEtablissement?: string;
        identifiantInterneEDS?: number;
        typeEDS?: string;
        dateInterrogation?: string;
        typeOrganisation?: string;
        positionDansStructure?: number;
        typeGuichetRecherche?: string;
    }
    /**
     * Interface liée à la ressource rest structure/recherche
     */
    class DonneesCommunesEDSGuichet {
        /**
         * Code banque sous lequel l'établissement est répertorié à la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE. Correspond à un type :
         * - siège
         * - agence
         * - service
         * - poste fonctionnel
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE. Typologie gérée dans la table CU1B.
         * Typologie propre à chaque Etablissement du GCE. Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * 008 - Siège
         * 003 - Agence (Point de vente)
         * 010 - GAB
         * 020 - Guichet (au sens arrêté de caisse)
         * 001 - Poste fonctionnel
         * 002 - Service
         * 009 - Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement (exemple : type '003', agence ou point de vente)
         */
        typeElementStructure: string;
        /**
         * Dénomination courte du type de l'élément de  structure. Exemple :
         * EA     - Entité administrative
         * AGENCE - Agence
         * GROUPE - Groupe commercial
         */
        libelleCourtTypeEDS: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleLongTypeEDS: string;
        /**
         * Référence externe d'un élément de structure dans un établissement du GCE. Référence connue de l'Etablissement. Identifiant défini en fonction du type d'élément de structure
         */
        referenceExterneEDS: string;
        /**
         * Libellé de désignation d'un élément de structure appartenant à un Etablissement du GCE.
         */
        libelleElementStructure: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé court du type d'EDS et de la désignation de l'EDS.
         * Sauf si l'EDS est un poste fonctionnel, on trouve alors le Nom + Prénom de l'Agent titulaire du PF.
         */
        libelleCourtEDS: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.
         * Si l'EDS est un poste fonctionnel, on trouve alors le Nom + Prénom de l'Agent titulaire du poste fonctionnel, précédé de la civilité (Mr...).
         */
        libelleLongEDS: string;
        /**
         * Date de début de validité de l’élément de structure.
         */
        dateDebutValiditeEDS: Date;
        /**
         * Date de fin de validité de l’élément de structure.
         */
        dateFinValiditeEDS: Date;
        /**
         * Identifiant de l'élément de structure qui dirige : Responsable hiérarchique (poste fonctionnel).
         */
        identifiantEDSDirigeant: number;
        /**
         * Concaténation de la référence externe EDS et du libellé long (pour le filtre)
         */
        refLibelleEDS: string;
    }
}

declare module myway.comEds {
    /**
     * Query params de la ressource rest structureparametre/typeEDS
     */
    interface ITypeEDSGuichetQueryParams {
        codeEtablissement: string;
        codeRelationEDS?: string;
    }
    /**
     * Interface liée à la ressource rest structureparametre/typeEDS
     */
    interface ITypeEDSGuichet {
        listeValeurTypeEDS: IValeurTypeEDSGuichet[];
    }
    interface IValeurTypeEDSGuichet {
        /**
         * Type d'élément de structure
         */
        typeEDS: string;
        /**
         * Libellé long du type d'élément de structure
         */
        libelleTypeEDS: string;
        /**
         * Identifiant d'un Etablissement du Groupe BPCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Détermine le niveau d'un EDS dans la hiérarchie d'une organisation.
         */
        niveauHierarchique: string;
    }
}

declare module myway.comEds {
    /**
     * Contrôleur de la recherche d'eds dans une modale
     */
    class RechercheEdsGlobaleModaleController implements MyWay.UI.INavcolHandler {
        private $scope;
        private $timeout;
        private modale;
        private serviceAgentExtended;
        private rechercheEdsService;
        private edsRechercheGlobaleParam;
        eds: MyWay.Model.EDSGlobal;
        ID_COLONNE_TYPE: string;
        ID_COLONNE_EDS: string;
        ID_COLONNE_FONCTION: string;
        /**
         * Boolean qui afficher la colonne de recherche agence.
         */
        afficherColonneRechercheAgence: boolean;
        /**
         * Boolean qui affiche la colonne du composant navigation en colonne.
         */
        afficherColonneAutreRecherche: boolean;
        /**
         * Boolean qui affiche la colonne de recherche de poste fonctionnel.
         */
        afficherColonnePosteFonctionnel: boolean;
        /**
         * Boolean qui affiche la colonne de recherche de fonction de poste fonctionnels.
         */
        afficherColonneFonctionsPosteFonctionnels: boolean;
        /**
         * Objet de l'agence sélectionné
         */
        agence: MyWay.Model.Agence;
        /**
         * Objet de l'agent sélectionné.
         */
        agent: MyWay.Model.Agent;
        /**
         * Types des EDS
         */
        types: myway.comEds.IValeurTypeEDSGuichet[];
        /**
         * Liste des eds à partir du type sélectionné
         */
        listeEDS: DonneesCommunesEDSGuichet[];
        /**
         * Liste des fonctions de postes fonctionnels.
         */
        listeFonctions: IFonction[];
        /**
         * Type EDS sélectionné
         */
        typeSelectionne: myway.comEds.IValeurTypeEDSGuichet;
        /**
         * Code de la fonction du poste fonctionnel selectionne.
         */
        codeFonctionPFSelectionne: string;
        /**
         * Boolean qui indique si on a sélectionné une fonction
         */
        estSelectionneFonction: boolean;
        /**
         * Indicateur de chargement (sous forme de promesse vu les besoins du contrôleur)
         */
        loading: ng.IPromise<any>;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, modale: ng.ui.bootstrap.IModalServiceInstance, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rechercheEdsService: myway.comEds.RechercheEdsGuichetService, edsRechercheGlobaleParam: MyWay.Model.EDSRechercheGlobaleParam, eds: MyWay.Model.EDSGlobal);
        /**
         * @alias onSelectionChangeNavcolList
         * @return {any}
         * @param objet, colId
         */
        onSelectionChangeNavcolList(objet: any, colId: string): any;
        /**
         * @alias onNavcolRecherche
         * @return {any}
         * @param critere, id
         */
        onNavcolRecherche(critere: string, id: string): any;
        /**
         * @alias selectionFonction
         * @return {void}
         * @param IFonction
         * @description Sélection d'une fonction dans la deuxième colonne.
         */
        selectionFonction(fonction: IFonction): void;
        /**
         * @alias selectionAgence
         * @return {void}
         * @param MyWay.Model.Agence
         * @description Lorsqu'on sélectionne une agence dans la deuxième colonne
         */
        selectionAgence(agenceSelectionne: MyWay.Model.Agence): void;
        /**
         * @alias selectionType
         * @return {void}
         * @param myway.comEds.IValeurTypeEDSGuichet
         * @description Lorsqu'on sélectionne un type d'EDS dans la première colonne.
         */
        private selectionType(typeEDS);
        /**
         * @alias selectionEDS
         * @return {void}
         * @param myway.comEds.DonneesCommunesEDSGuichet
         * @description Lorsqu'on sélectionne un EDS qui n'est ni Agence ni Poste fonctionnel.
         */
        private selectionEDS(eds?);
    }
}

declare module myway.comEds {
    /**
     * Contrôleur de la recherche de guichet dans une modale
     */
    class RechercheEdsGuichetModaleController implements MyWay.UI.INavcolHandler {
        private $scope;
        private $timeout;
        private modale;
        private serviceAgentExtended;
        private rechercheEdsService;
        private edsRechercheGuichetParam;
        guichet: Guichet;
        private $filter;
        private saisieAgenceDestinataireService;
        ID_COLONNE_TYPE: string;
        ID_COLONNE_EDS: string;
        ID_COLONNE_GUICHET: string;
        static MAX_LENGTH: number;
        /**
         * Boolean qui afficher la colonne de recherche agence.
         */
        afficherColonneRechercheAgence: boolean;
        /**
         * Boolean qui affiche la colonne du composant navigation en colonne.
         */
        afficherColonneAutreRecherche: boolean;
        /**
         * Objet de l'agence sélectionné
         */
        agence: MyWay.Model.Agence;
        /**
         * Objet de l'agent sélectionné.
         */
        agent: MyWay.Model.Agent;
        /**
         * Types des EDS
         */
        types: myway.comEds.IValeurTypeEDSGuichet[];
        /**
         * Liste des eds à partir du type sélectionné
         */
        listeEDS: DonneesCommunesEDSGuichet[];
        /**
         * Liste des guichets.
         */
        listeGuichet: IGuichet[];
        /**
         * Type EDS sélectionné
         */
        typeSelectionne: myway.comEds.IValeurTypeEDSGuichet;
        /**
         * Indicateur de chargement (sous forme de promesse vu les besoins du contrôleur)
         */
        loading: ng.IPromise<any>;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, modale: ng.ui.bootstrap.IModalServiceInstance, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rechercheEdsService: myway.comEds.RechercheEdsGuichetService, edsRechercheGuichetParam: MyWay.Model.EDSRechercheGuichetParam, guichet: Guichet, $filter: ng.IFilterService, saisieAgenceDestinataireService: myway.comEds.SaisieAgenceDestinataireService);
        /**
         * @alias onSelectionChangeNavcolList
         * @return {any}
         * @param objet, colId
         * @description Lorsqu'on sélectionne un élement de la NavColList
         */
        onSelectionChangeNavcolList(objet: any, colId: string): any;
        onNavcolRecherche(critere: string, id: string): any;
        /**
         * Lorsqu'on sélectionne une agence dans la deuxième colonne
         */
        /**
         * @alias selectionType
         * @return {void}
         * @param myway.comEds.IValeurTypeEDSGuichet
         * @description Lorsqu'on sélectionne un type d'EDS dans la première colonne.
         */
        private selectionType(typeEDS);
        /**
         * @alias selectionEDS
         * @return {void}
         * @param myway.comEds.DonneesCommunesEDSGuichet
         * @description Lorsqu'on sélectionne un EDS qui n'est pas Agence
         */
        private selectionEDS(eds?);
    }
}
