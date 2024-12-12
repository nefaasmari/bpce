
declare module ContextViewer {
    var app: any;
}


declare module ContextViewer {
    interface IProcessElementInfo {
        text: string;
        peType: string;
        level: MyWay.Services.Context.StorageLevel;
        elementId: string;
        nodeId: string | number;
    }
    interface IKeyValueRawValue extends MyWay.Services.IKeyValuePair<any, any> {
        RawValue: any;
    }
    class ContextViewerControleur {
        private $scope;
        techAgent: MyWay.Services.TechAgent;
        private $timeout;
        private mwNotificationService;
        private version;
        stateTableLoading: boolean;
        data: any;
        treeOptions: MyWay.Services.Common.ITreeOptions;
        treeControl: MyWay.Services.Common.ITreeControl;
        static GLOBAL_STORAGE_PROPERTY: string;
        static PORTAL_PROPERTY: string;
        static PROCESSES_PROPERTY: string;
        static DISPLAY_NAME_PROPERTY: string;
        static SHARED_PROPERTY: string;
        static WAINTING_PROCESSES_PROPERTY: string;
        static CURRENT_PATH_PROPERTY: string;
        static TEMPORAY_CONTEXT_STORAGE_PROPERTY: string;
        static SUB_ELEMENTS_PROPERTY: string;
        static PROCESS_NAME_PROPERTY: string;
        static TYPE_PROPERTY: string;
        static ACTIONS_PROPERTY: string;
        static CONTRATS_PROPERTY: string;
        static CONTEXT_STORAGE_PROPERTY: string;
        static ID_PROPERTY: string;
        static PARENT_PATH_PROPERTY: string;
        static GLOBAL_KEY: string;
        static PROCESS: string;
        static PROCESS_STEP: string;
        static GLOBAL_STORAGE_LABEL: string;
        static PORTAL_LABEL: string;
        static PORTAL_CHILD_LABEL: string;
        static SHARED_LABEL: string;
        static WAINTING_PROCESSES_LABEL: string;
        static TEMPORAY_CONTEXT_STORAGE_LABEL: string;
        static PROCESSES_LABEL: string;
        globalStorageData: any;
        portalsData: any;
        sharedData: any;
        waintingProcessesData: any;
        details: IKeyValueRawValue[];
        actions: any[];
        contrats: MyWay.Services.IKeyValuePair<any, any>[][];
        contextStorage: MyWay.Services.IKeyValuePair<any, any>[];
        processElementInfo: IProcessElementInfo;
        addToContextGlobalForm: {
            key: any;
            keyError: boolean;
            value: any;
            valueError: boolean;
        };
        addToContextProcessForm: {
            key: any;
            keyError: boolean;
            value: any;
            valueError: boolean;
        };
        expandAll: boolean;
        constructor($scope: ng.IScope, techAgent: MyWay.Services.TechAgent, $timeout: ng.ITimeoutService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Chargement de l'arbre
         */
        loadContextTree(): MyWay.Services.IPromesse<any>;
        /**
         * Evènement lors du positionnement d'un noeud
         */
        private onSetNode;
        /**
         * Traitement lors du positionnement d'un noued Process ou Process Step
         */
        private setProcessChildNode(node);
        /**
         * Evènement lors de la sélection d'un noeud
         */
        private onSelectedNode;
        /**
         * Traitement lors de la sélection d'un noued Process ou Process Step
         */
        private selectProcessChildNode(node);
        /**
         * Evènement lors de l'ajout d'un noeud
         */
        private onAddNode;
        /**
         * Initialisation de l'arbre
         */
        private onInitTree;
        /**
         * Test si la valeur est un noeud JSON
         *
         * @param {any} value les données
         * @return {boolean} isJsonNode
         */
        isJsonNode(value: any): boolean;
        /**
         * Transforme un noeud en tableau de clés/valeurs
         *
         * @param {Array} la liste des propriétés à exclure
         * @return {IKeyValueRawValue[]} result
         */
        private transformNodeToKeyValueRawValue(node, excludedProperties?);
        /**
         * Retourne le noeud correspondant à la propriété
         *
         * @return {ChildNode} child
         */
        private getNode(nodes, property);
        /**
         * Ajoute une donnée (Clé/Valeur) au contexte dans le niveau (level) indiqué
         */
        addToContext(level: MyWay.Services.Context.StorageLevel, elementId?: string, nodeId?: string): void;
        /**
         * Reset du formulaire d'ajout de variable au contexte
         */
        private resetAddToContextForm();
        /**
         * Efface le contexte
         */
        clearLocalStorage(): void;
        /**
         * Efface le bus interop
         */
        clearBusInterop(): void;
        /**
         * test s'il y a des informations pour le noeud sélectionné
         */
        hasInfoNode(): boolean;
        /**
         * Permet de déplier l'arbre
         */
        onExpandAll(): void;
        /**
         * Permet de replier l'arbre
         */
        onCollapseAll(): void;
        /**
         * Rafraîchissement de l'arbre
         */
        refreshTreeAndExpand(): void;
    }
}

declare module ContextViewer {
    class CopyToClipboardControlleur {
        private mwNotificationService;
        private scope;
        constructor(mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Méthode qui permet de simuler un copier/coller
         */
        bind(element: ng.IAugmentedJQuery, attrs: any): void;
        /**
         * Méthode d'initialisation du contrôleur
         */
        run(): void;
        /**
         * Renseigne le scope
         * @param pScope Scope du contrôleur
         */
        setScope: (pScope: ICopyToClipboardScope) => void;
    }
}

declare module ContextViewer {
    class TreeFrameworkControlleur {
        private tree;
        private scope;
        private data;
        private options;
        private treeControlOptions;
        private onInit;
        private selected;
        private _expandAll;
        constructor();
        /**
         * Permet de tester l'egalité de deux noeuds
         */
        private equality;
        /**
         * Méthode d'initialisation du contrôleur
         */
        run(): void;
        /**
         * Renseigne le scope
         * @param pScope Scope du contrôleur
         */
        setScope: (pScope: ITreeFrameworkScope) => void;
        /**
         * Evènement lors de la sélection d'un noeud
         */
        onSelectedNode: (node: any) => void;
        /**
         * Ecoute les changements de valeurs de l'arbre
         */
        watchData: (data: any[]) => void;
        /**
         * Ecoute les changements collapse/expanded des noeuds de l'arbre
         */
        watchExpandAll: (expanded: boolean) => void;
        expandAll: boolean;
        private getNodes(list, node);
    }
}

declare module ContextViewer {
}

declare module ContextViewer {
    interface ICopyToClipboardScope extends ng.IScope {
    }
}

declare module ContextViewer {
    interface ITreeFrameworkScope extends ng.IScope {
        root: MyWay.Services.Common.JsonNode;
        data: any;
        expandAll: boolean;
        options: MyWay.Services.Common.ITreeOptions;
        treeControlOptions: any;
        nodes: MyWay.Services.Common.JsonNode[];
        expandedNodes: MyWay.Services.Common.JsonNode[];
        onInit: (control: MyWay.Services.Common.ITreeControl) => void;
    }
}

declare module ContextViewer {
    class DefautService {
        constructor();
        details(serviceUrl: string): void;
        testerTestUnitaire(valeur: string): number;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module ContextViewer {
}

declare module ContextViewer {
    function entete(): ng.IDirective;
}

declare module ContextViewer {
}
