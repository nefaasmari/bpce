
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
        setMapping: (data: any, methode: number, t: ITypePortail, dataRetour: any) => ng.IPromise<IndicateurSynchroSyntheseEnum>;
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
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
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
        /**
         * Définit un client dans le contexte client.
         * @param idPersonne Identifiant de la personne
         * @param designation Désignation courte de la personne
         */
        setClient(idPersonne: string | number): ng.IPromise<void>;
        /**
         * Définit un client dans le contexte client et met à jour le nom du processus avec la désignation du client.
         * @param idPersonne Identifiant de la personne
         * @param designation Désignation courte de la personne
         */
        setClient(idPersonne: string | number, designation: string): ng.IPromise<void>;
        /**
         * Définit un client dans le contexte client et met à jour le nom du processus avec la désignation du client.
         * @param idPersonne Identifiant de la personne
         * @param civilite Civilité ou code civilité
         * @param nomUsage Nom d'usage (marital)
         * @param nomPatronymique nom patronymique (de famille)
         * @param prenom Prénom
         */
        setClient(idPersonne: string | number, civilite: string, nomUsage: string, nomPatronymique: string, prenom: string): ng.IPromise<void>;
        getAllClient(): ng.IPromise<Array<IContexteClientData>>;
        /**
         * Renvoie la désignation du client à partir de ses informations.
         * @param civilite Civilité ou code civilité
         * @param nomUsage Nom d'usage (marital)
         * @param nomPatronymique nom patronymique (de famille)
         * @param prenom Prénom
         */
        getDesignationClient(civilite: string, nomUsage: string, nomPatronymique: string, prenom: string): string;
    }
    class ContexteClientService implements IContexteClientService {
        private $q;
        private serviceAgent;
        private toolsService;
        private detailPersonneService;
        promiseTypePortail: ng.IPromise<ITypePortail>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService, detailPersonneService: IDetailPersonneService);
        /**
         * Renvoie l'indicateur synchro-synthèse du contexte client.
         */
        getIndicateurSynchroSynthese(): ng.IPromise<IndicateurSynchroSyntheseEnum>;
        /**
         * Met à jour l'indicateur synchro-synthèse dans le contexte client.
         * @param indicateur Valeur de l'indicateur.
         */
        setIndicateurSynchroSynthese(indicateur: IndicateurSynchroSyntheseEnum): ng.IPromise<boolean>;
        getAllClient(): ng.IPromise<Array<IContexteClientData>>;
        getClient(idPersonne: string): ng.IPromise<IContexteClientData>;
        /**
         * Définit un client dans le contexte client.
         * @param idPersonne Identifiant de la personne
         * @param designation Désignation courte de la personne
         */
        setClient(idPersonne: string | number): ng.IPromise<void>;
        /**
         * Définit un client dans le contexte client et met à jour le nom du processus avec la désignation du client.
         * @param idPersonne Identifiant de la personne
         * @param designation Désignation courte de la personne
         */
        setClient(idPersonne: string | number, designation: string): ng.IPromise<void>;
        /**
         * Définit un client dans le contexte client et met à jour le nom du processus avec la désignation du client.
         * @param idPersonne Identifiant de la personne
         * @param civilite Civilité ou code civilité
         * @param nomUsage Nom d'usage (marital)
         * @param nomPatronymique nom patronymique (de famille)
         * @param prenom Prénom
         */
        setClient(idPersonne: string | number, civilite: string, nomUsage: string, nomPatronymique: string, prenom: string): ng.IPromise<void>;
        /**
         * Renvoie la désignation du client à partir de ses informations.
         * @param civilite Civilité ou code civilité
         * @param nomUsage Nom d'usage (marital)
         * @param nomPatronymique nom patronymique (de famille)
         * @param prenom Prénom
         */
        getDesignationClient(civilite: string, nomUsage: string, nomPatronymique: string, prenom: string): string;
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
    const enum IndicateurSynchroSyntheseEnum {
        /**
         * Pas de mise à jour de la synthèse
         */
        PAS_DE_MAJ = 0,
        /**
         * Mise à jour de la synthèse à partir du client contexte
         */
        MAJ_CONTEXTE_CLIENT = 1,
        /**
         * Mise à jour de la synthèse par un appel de la DBPE
         */
        MAJ_DBPE = 2,
    }
    class ReferentielRessource implements IReferentielRessource {
        private $q;
        private serviceAgent;
        private toolsService;
        private referentielDBPE;
        private contexteClientService;
        static KEY_INDICATEUR_SYNCHRO_SYNTHESE: string;
        static PAD_NODAPE: string;
        tabRessourceSynchro: Array<IRessourceSynchro>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended, toolsService: IToolsService, referentielDBPE: IReferentielForceDBPE, contexteClientService: ContexteClientService);
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
        getIdentifiantPersonne(id: string | number): string;
        getTypePortail: () => ng.IPromise<ITypePortail>;
        extractValue: (key: string, obj: any) => any;
    }
    class ToolsService implements IToolsService {
        private $q;
        private serviceAgent;
        promiseInfoMachine: ng.IPromise<MyWay.Services.Mobilite.IInfoMachine>;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        getIdentifiantPersonne(id: string | number): string;
        getTypePortail(): ng.IPromise<ITypePortail>;
        extractValue(key: string, obj: any): any;
    }
}

declare module libSynchroSynthese {
    class EntiteTitulaireV2InformationEntiteTitulaire extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
    }
}

declare module libSynchroSynthese {
    class TiersV1Adresse extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
    }
}

declare module libSynchroSynthese {
    class TiersV1Client extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
        private setMappingParticulierInformation(t);
        private setMappingAdresse(t, data);
        private setMappingMedia(t, data);
    }
}

declare module libSynchroSynthese {
    class TiersV1Media extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
    }
}

declare module libSynchroSynthese {
    class TiersV1ParticulierInformation extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
    }
}

declare module libSynchroSynthese {
    class TiersV2CorporateActiviteProfessionnelle extends RessourceSynchro {
        constructor();
        private getActivitePrincipale(data);
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
    }
}

declare module libSynchroSynthese {
    class TiersV2CorporateInformation extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
    }
}

declare module libSynchroSynthese {
    class TiersV2Media extends RessourceSynchro {
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
    }
}

declare module libSynchroSynthese {
    class AgendaV1Occupation extends RessourceSynchro {
        _typePortail: number;
        constructor();
        getIdentifiantPersonne(data: any): string;
        setMapping(data: any, methode: number, t: ITypePortail, dataRetour: any): ng.IPromise<IndicateurSynchroSyntheseEnum>;
        private getDateFormat(dateRdv);
    }
}
