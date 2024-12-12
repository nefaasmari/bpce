
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
    interface IMappingData {
        keySynthese: string;
        value: any;
    }
    class MappingData implements IMappingData {
        keySynthese: string;
        value: any;
        constructor(keySynthese: string, value: any);
    }
}

declare module libSynchroSynthese {
    interface IRessourceSynchro {
        isMatching: (keyRessource: string, methode: number) => boolean;
        getIdentifiantPersonne: (data: any) => string;
        tabMapping: Array<IMapping>;
        tabMappingData: Array<IMappingData>;
        setMapping: (data: any, methode: number, t: ITypePortail, dataRetour: any) => ng.IPromise<number>;
        majSynthese: (data: any) => void;
        init: ($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService) => void;
    }
    abstract class RessourceSynchro implements IRessourceSynchro {
        $q: ng.IQService;
        serviceAgent: MyWay.Services.ServiceAgentExtended;
        toolsService: IToolsService;
        tabKeyRessource: string[];
        tabMethode: number[];
        tabMapping: IMapping[];
        tabMappingData: IMappingData[];
        constructor(tabKeyRessource: string[], tabMethode?: number[]);
        init($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService): void;
        isMatching(keyRessource: string, methode: number): boolean;
        addMapping(keySynthese: string, keyRessource: string): void;
        addMappingData(keySynthese: string, value: any): void;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
        abstract getIdentifiantPersonne(data: any): string;
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
        private detailPersonneService;
        promiseTypePortail: ng.IPromise<ITypePortail>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService, detailPersonneService: IDetailPersonneService);
        getAllClient(): ng.IPromise<Array<IContexteClientData>>;
        getClient(idPersonne: string): ng.IPromise<IContexteClientData>;
        private getClientFromContexteMyWay(def, idPersonne, data);
        private getClientFromContextePCM(def, idPersonne, data);
    }
}

declare module libSynchroSynthese {
    interface IDetailPersonneService {
        getDetailPersonne: (idPersonne: number) => ng.IPromise<IContexteClientData>;
    }
    class DetailPersonneService implements IDetailPersonneService {
        private $q;
        private serviceAgent;
        private urlParticulierInformation;
        private urlIdentification;
        private urlCorporateInformation;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, urlParticulierInformation: string, urlIdentification: string, urlCorporateInformation: string);
        getDetailPersonne(idPersonne: number): ng.IPromise<IContexteClientData>;
        getDetailPersonnePhysique(def: ng.IDeferred<IContexteClientData>, idPersonne: number, codeEtablissement: string): void;
        getDetailPersonneMorale(def: ng.IDeferred<IContexteClientData>, idPersonne: number, codeEtablissement: string): void;
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
        synchro: (nomRessource: string, data: any, methode: number, t: ITypePortail, dataRetour: any) => ng.IPromise<any>;
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
        static PAD_NODAPE: string;
        tabRessourceSynchro: Array<IRessourceSynchro>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService, referentielDBPE: IReferentielForceDBPE);
        synchro(nomRessource: string, data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<any>;
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
        private synchroSynthese(param, t, dataRetour);
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
    class AgendaV1Occupation extends RessourceSynchro {
        _typePortail: number;
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
        private getDateFormat(dateRdv);
    }
}

declare module libSynchroSynthese {
    class EntiteTitulaireV2InformationEntiteTitulaire extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
    }
}

declare module libSynchroSynthese {
    class TiersV1Adresse extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
    }
}

declare module libSynchroSynthese {
    class TiersV1Client extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
        private setMappingParticulierInformation(t);
        private setMappingAdresse(t, data);
        private setMappingMedia(t, data);
    }
}

declare module libSynchroSynthese {
    class TiersV1Media extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
    }
}

declare module libSynchroSynthese {
    class TiersV1ParticulierInformation extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
    }
}

declare module libSynchroSynthese {
    class TiersV2CorporateActiviteProfessionnelle extends RessourceSynchro {
        constructor();
        private getActivitePrincipale(data);
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
    }
}

declare module libSynchroSynthese {
    class TiersV2CorporateInformation extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
    }
}

declare module libSynchroSynthese {
    class TiersV2Media extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<number>;
    }
}
