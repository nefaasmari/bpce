
declare module libSynchroSynthese {
    var lib: any;
}

declare module libSynchroSynthese {
    interface IMapping {
        keySynthese: string;
        keyRessource: string;
    }
    class Mapping implements IMapping {
        keySynthese: string;
        keyRessource: string;
        constructor(keySynthese: string, keyRessource: string);
    }
}

declare module libSynchroSynthese {
    interface IRessourceSynchro {
        isMatching: (keyRessource: string, methode: number) => boolean;
        getIdentifiantPersonne: (data: any) => string;
        tabMapping: Array<IMapping>;
        setMapping: (data: any, methode: number, t: ITypePortail) => number;
        majSynthese: (data: any) => void;
        init: ($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService) => void;
    }
    class RessourceSynchro implements IRessourceSynchro {
        $q: ng.IQService;
        serviceAgent: MyWay.Services.ServiceAgentExtended;
        toolsService: IToolsService;
        tabKeyRessource: Array<string>;
        tabMethode: Array<number>;
        tabMapping: Array<IMapping>;
        constructor(tabKeyRessource: Array<string>, tabMethode?: Array<number>);
        init($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService): void;
        isMatching(keyRessource: string, methode: number): boolean;
        addMapping(keySynthese: string, keyRessource: string): void;
        setMapping(data: any, methode: number, t: ITypePortail): number;
        getIdentifiantPersonne(data: any): string;
        majSynthese(data: any): void;
    }
}

declare module libSynchroSynthese {
    interface IContexteClientData {
        identifiantPersonne: string;
        nomCommercial: string;
        raisonSociale: string;
        codeAppartenanceReseau: string;
        codeCivilite: string;
        codeCapaciteJuridique: string;
        codeCategorieSocioProf: string;
        numeroSIREN: string;
        designationCourte: string;
    }
    class ContexteClientData implements IContexteClientData {
        identifiantPersonne: string;
        nomCommercial: string;
        raisonSociale: string;
        codeAppartenanceReseau: string;
        codeCivilite: string;
        codeCapaciteJuridique: string;
        codeCategorieSocioProf: string;
        numeroSIREN: string;
        designationCourte: string;
        constructor(idPersonne: string);
    }
    interface IContexteClientService {
        getClient: (idPersonne: string) => ng.IPromise<IContexteClientData>;
        getAllClient(): ng.IPromise<Array<IContexteClientData>>;
    }
    class ContexteClientService implements IContexteClientService {
        private $q;
        private serviceAgent;
        private toolsService;
        promiseTypePortail: ng.IPromise<ITypePortail>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService);
        getAllClient(): ng.IPromise<Array<IContexteClientData>>;
        getClient(idPersonne: string): ng.IPromise<IContexteClientData>;
        private getClientFromContexteMyWay(idPersonne, data);
        private getClientFromContextePCM(idPersonne, data);
    }
}

declare module libSynchroSynthese {
    interface IForceDBPE {
        tabMethode: Array<number>;
        tabNomRessource: Array<string>;
        isMatch: (nomRessource: string, methode: number) => boolean;
    }
    class ForceDBPE implements IForceDBPE {
        tabMethode: Array<number>;
        tabNomRessource: Array<string>;
        constructor(tabNomRessource: Array<string>, tabMethode?: Array<number>);
        isMatch(nomRessource: string, methode: number): boolean;
    }
    interface IReferentielForceDBPE {
        exist: (nomRessource: string, methode: number) => boolean;
    }
    class ReferentielForceDBPE implements IReferentielForceDBPE {
        tabRef: Array<IForceDBPE>;
        static $inject: string[];
        constructor();
        exist(nomRessource: string, methode: number): boolean;
    }
}

declare module libSynchroSynthese {
    interface IReferentielRessource {
        synchro: (nomRessource: string, data: any, methode: number, t: ITypePortail) => ng.IPromise<any>;
    }
    class ReferentielRessource implements IReferentielRessource {
        private $q;
        private serviceAgent;
        private toolsService;
        private referentielDBPE;
        static KEY_INDICATEUR_SYNCHRO_SYNTHESE: string;
        static STATUS_CC_NO_MODIF: number;
        static STATUS_CC_MAJ_CC: number;
        static STATUS_CC_MAJ_DBPE: number;
        tabRessourceSynchro: Array<IRessourceSynchro>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService, referentielDBPE: IReferentielForceDBPE);
        synchro(nomRessource: string, data: any, methode: number, t: ITypePortail): ng.IPromise<any>;
        private getNODAPE(ress, data);
        private getLibelleMethode(methode);
        private getReferentielSynchro(nomRessource, methode);
    }
}

declare module libSynchroSynthese {
    interface ISynchroSyntheseService {
        SendRequestSynchroSynthese: (param: MyWay.Services.IRequestSettings) => ng.IPromise<any>;
    }
    class SynchroSyntheseService implements ISynchroSyntheseService {
        private $q;
        private serviceAgent;
        private baseURL;
        private referentielRessource;
        private toolsService;
        promiseTypePortail: ng.IPromise<ITypePortail>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, baseURL: string, referentielRessource: IReferentielRessource, toolsService: IToolsService);
        SendRequestSynchroSynthese(param: MyWay.Services.IRequestSettings): ng.IPromise<any>;
        private synchroSynthese(param, t);
    }
}

declare module libSynchroSynthese {
    interface ITypePortail {
        type: number;
    }
    class TypePortail implements ITypePortail {
        static TYPE_PORTAIL_MYWAY: number;
        static TYPE_PORTAIL_PCM: number;
        type: number;
    }
    interface IToolsService {
        getTypePortail: () => ng.IPromise<ITypePortail>;
        extractValue: (key: string, obj: any) => any;
    }
    class ToolsService implements IToolsService {
        private $q;
        private serviceAgent;
        promiseInfoMachine: ng.IPromise<MyWay.Services.Mobilite.IInfoMachine>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        getTypePortail(): ng.IPromise<ITypePortail>;
        extractValue(key: string, obj: any): any;
    }
}

declare module libSynchroSynthese {
    class TiersV1Adresse extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail): number;
    }
}

declare module libSynchroSynthese {
    class TiersV1Media extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail): number;
    }
}

declare module libSynchroSynthese {
    class TiersV1ParticulierInformation extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail): number;
    }
}

declare module libSynchroSynthese {
    class TiersV2CorporateActiviteProfessionnelle extends RessourceSynchro {
        constructor();
        private getActivitePrincipale(data);
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail): number;
    }
}

declare module libSynchroSynthese {
    class TiersV2CorporateInformation extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail): number;
    }
}

declare module libSynchroSynthese {
    class TiersV2Media extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail): number;
    }
}
