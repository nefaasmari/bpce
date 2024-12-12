declare module ContextViewer {
    /**
     * Détail pour afficher les (Clés/Valeurs)
     */
    class Detail {
        private lines;
        private excludedLinesKeys;
        constructor(lines: MyWay.Services.Context.IContextKeyValuePair[], excludedLinesKeys: Array<string>);
        private setLines(lines);
        /**
         * Retourne les lignes
         *
         * @returns MyWay.Services.Context.IContextKeyValuePair[] les lignes (Clés/Valeurs)
         */
        getLines(): MyWay.Services.Context.IContextKeyValuePair[];
        /**
         * retourne la ligne correspondant à la clé
         *
         * @param string la clé
         * @returns IContextKeyValuePair la ligne
         */
        getLine(key: string): MyWay.Services.Context.IContextKeyValuePair;
        /**
         * Ajoute une ligne (Clé/Valeur)
         *
         * @param MyWay.Services.Context.IContextKeyValuePair la ligne à ajouter
         */
        addLine(line: MyWay.Services.Context.IContextKeyValuePair): void;
        /**
         * Ajoute une clé à exclure
         *
         * @param string la clé à supprimer
         */
        addExcludedLinesKey(key: string): void;
    }
}

declare module ContextViewer {
    /**
     * Détail d'une action
     */
    class ActionDetail {
        private actions;
        constructor(actions: Array<MyWay.Services.Context.IStepAction>);
        getActions(): Detail[];
    }
}

declare module ContextViewer {
    /**
     * Détail d'un contrat
     */
    class ContratDetail {
        private contrats;
        constructor(contrats: Array<MyWay.Services.Context.IStepContrat>);
        getContrats(): Detail[];
    }
}

declare module ContextViewer {
    /**
     * Noeud générique de l'arbre du contexte
     */
    class GenericNode {
        private key;
        private label;
        private classes;
        private children;
        private detail;
        constructor(key: string, label: string, classes: Array<string>, children: Array<GenericNode>);
        protected addChild(child: GenericNode): void;
        getKey(): string;
        setDetail(detail: DetailNode): void;
        getDetail(): DetailNode;
        getChildren(): GenericNode[];
        getLabel(): string;
        getNode(key: string): GenericNode;
    }
}

declare module ContextViewer {
    /**
     * Détail d'un noeud
     */
    class DetailNode extends Detail {
    }
}

declare module ContextViewer {
    /**
     * Noeud "global" de l'arbre
     *
     * Il contient un ensemble de (clé/valeur)
     */
    class GlobalNode extends GenericNode {
        static GLOBAL_KEY: string;
        static GLOBAL_LABEL: string;
        constructor(label: string, classes: Array<string>, data: Array<MyWay.Services.Context.IContextKeyValuePair>);
    }
}

declare module ContextViewer {
    /**
     * Noeud portals de l'arbre
     *
     * Il contient :
     * - un noeud "Processes"
     * - un noeud "TemporayContextStorage"
     */
    class PortalNode extends GenericNode {
        static PORTAL_KEY: string;
        static PROCESSES_KEY: string;
        static TEMPORAY_CONTEXT_STORAGE_KEY: string;
        static PORTAL_LABEL: string;
        static PROCESSES_LABEL: string;
        static TEMPORAY_CONTEXT_STORAGE_LABEL: string;
        constructor(key: string, label: string, classes: Array<string>, data: Array<any>);
    }
}

declare module ContextViewer {
    /**
     * Noeud "portals" de l'arbre
     *
     * Il contient un ensemble de noeud "portal"
     */
    class PortalsNode extends GenericNode {
        static PORTALS_KEY: string;
        static PORTALS_LABEL: string;
        constructor(label: string, classes: Array<string>, data: Array<any>);
        private handlePortalNodes(data);
    }
}

declare module ContextViewer {
    /**
     * Noeud "shared" de l'arbre
     *
     * Il contient un ensemble de noeud "portal"
     */
    class SharedNode extends GenericNode {
        static SHARED_KEY: string;
        static SHARED_LABEL: string;
        constructor(label: string, classes: Array<string>, data: Array<MyWay.Services.Context.IContextKeyValuePair>);
    }
}

declare module ContextViewer {
    /**
     * Noeud "global" de l'arbre
     *
     * Il contient un ensemble de (clé/valeur)
     */
    class WaintingProcessesNode extends GenericNode {
        static WAINTING_PROCESSES_KEY: string;
        static WAINTING_PROCESSES_KEY_LABEL: string;
        constructor(label: string, classes: Array<string>, data: Array<MyWay.Services.Context.IContextKeyValuePair>);
    }
}

declare module ContextViewer {
    /**
     * Noeud "context" de l'arbre
     *
     * Il contient :
     * - un noeud "global"
     * - un noeud "portals"
     * - un noeud "shared"
     * - un noeud "waitingProcesses"
     */
    class ContextNode extends GenericNode {
        static CONTEXT_KEY: string;
        static CONTEXT_LABEL: string;
        constructor(label: string, classes: Array<string>);
        addGlobalNode(node: GlobalNode): void;
        addPortalsNode(node: PortalsNode): void;
        addSharedNode(node: SharedNode): void;
        addWaintingProcessesNode(node: WaintingProcessesNode): void;
        getGlobalNode(): GlobalNode;
    }
}

declare module ContextViewer {
    /**
     * Noeud "Processelement"
     */
    class ProcessElementNode extends GenericNode {
        static TYPE: string;
        constructor(key: string, label: string, classes: Array<string>);
    }
}

declare module ContextViewer {
    /**
     * Noeud "processStep" de l'arbre
     */
    class ProcessStepNode extends ProcessElementNode {
        static PROCESS_NAME_KEY: string;
        static NEXT_STEP_KEY: string;
        static ACTIONS_KEY: string;
        static CONTRATS_KEY: string;
        private detailAction;
        private detailContrat;
        constructor(data: MyWay.Services.Context.IProcessStep);
        getDetailAction(): ActionDetail;
        getDetailContrat(): ContratDetail;
    }
}

declare module ContextViewer {
    /**
     * Fabrique permettant de créer un noeud "Process" ou un noeud "ProcessStep" suivant le type
     */
    class ProcessElementNodeFactory {
        static PROCESS_TYPE: string;
        static PROCESS_STEP_TYPE: string;
        static create(processType: string, data: any): ProcessNode;
    }
}

declare module ContextViewer {
    /**
     * Noeud "process" de l'arbre
     */
    class ProcessNode extends ProcessElementNode {
        static DISPLAY_SUB_ELEMENTS_KEY: string;
        static DISPLAY_NAME_KEY: string;
        constructor(data: MyWay.Services.Context.IProcess);
    }
}

declare module ContextViewer {
    /**
     * Noeud "processes" de l'arbre
     *
     * Il contient un ensemble de noeud "process"
     */
    class ProcessesNode extends GenericNode {
        constructor(key: string, label: string, classes: Array<string>, data: Array<any>);
        private handleProcessNodes(data);
    }
}

declare module ContextViewer {
    /**
     * Noeud "temporayContextStorage" de l'arbre
     */
    class TemporayContextStorageNode extends GenericNode {
        constructor(key: string, label: string, classes: Array<string>, data: Array<any>);
    }
}


declare module ContextViewer {
    var app: any;
}


declare module ContextViewer {
    class ContextViewerControleur {
        private $scope;
        techAgent: MyWay.Services.TechAgent;
        private $timeout;
        private version;
        private contextNode;
        contextTree: any;
        treeData: any[];
        selectedNode: any;
        details: MyWay.Services.Context.IContextKeyValuePair[];
        addToContextForm: {
            key: any;
            keyError: boolean;
            value: any;
            valueError: boolean;
        };
        constructor($scope: ng.IScope, techAgent: MyWay.Services.TechAgent, $timeout: ng.ITimeoutService);
        /**
         * Chargement de l'arbre
         */
        loadContextTree(): void;
        /**
         * Click sur un noeud de l'arbre
         */
        treeSelectHandler(node: GenericNode): void;
        /**
         * Rafraichissement de l'arbre et on positionne la sélection sur le noeud passé en paramètre
         */
        refreshTreeAndExpand(nodeKey: string): void;
        /**
         * Ajoute une donnée (Clé/Valeur) au contexte dans le bon niveau (level)
         */
        addToContext(level: MyWay.Services.Context.LEVEL): void;
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
         * Indique si il y a le détail (Clé/Valeur) à afficher pour le noeud sélectionné
         */
        isDetailEmpty(): boolean;
        /**
         * Indique si il y a des actions à afficher pour le noeud sélectionné
         */
        hasActions(): boolean;
        /**
         * Retourne les actions s'il s'agit d'un "ProcessStepNode"
         */
        getActions(): Detail[];
        /**
         * Indique si il y a des contrats à afficher pour le noeud sélectionné
         */
        hasContrats(): boolean;
        /**
         * Retourne les contrats s'il s'agit d'un "ProcessStepNode"
         */
        getContrats(): Detail[];
        /**
         * Retourne le label du noeud sélectionné
         */
        getNodeName(): any;
    }
}

declare module ContextViewer {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module ContextViewer {
}

declare module ContextViewer {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module ContextViewer {
    function entete(): ng.IDirective;
}
