
declare module LibrairiePotentielProspect {
    var app: ng.IModule;
}

declare module LibrairiePotentielProspect.Constantes {
    module Classname {
        let POTENTIEL_PROSPECT_CONTROLEUR: string;
        let GESTION_POTENTIEL_SERVICE: string;
        let POTENTIEL_PROSPECT_SERVICE: string;
        let TOOL_SERVICE: string;
    }
    module urlsRest {
        let URL_REST_TIERSCORPORATEV1_POTENTIENTIEL_PROSPECT: string;
    }
}

declare module LibrairiePotentielProspect.Directives.PotentielProspect.Controleur {
    class LibPotentielPropectControleur implements ILibPotentielPropectControleur {
        private $q;
        private $scope;
        private serviceAgentExtended;
        private gestionPotentielService;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        identifiantPersonne: number;
        modificationAutorisee: boolean;
        private valeurPotentielProspect;
        private guid;
        static $inject: string[];
        constructor($q: ng.IQService, $scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionPotentielService: Services.Application.IGestionPotentielService);
        init(): void;
        majNote(): void;
        newGuid(): string;
    }
    interface ILibPotentielPropectControleur {
    }
}

/**
 * Directive Potentiel Prospect
 * @module LibrairiePotentielProspectV2.Directives
 * @author S0005369 (Jean Philippe Dutrieux)
 */
declare module LibrairiePotentielProspect.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwLibPotentielProspectV2(): ng.IDirective;
}

declare module LibrairiePotentielProspect.Modeles.Application {
    interface IChoixQualificationProspect {
        choixQualificationProspect: number;
    }
}

declare module LibrairiePotentielProspect.Services.Application {
    interface IGestionPotentielService {
        load(identifiantPersonne: number): ng.IPromise<Modeles.Rest.TiersCorporateV1.Potentielprospect.IPotentielProspect>;
        sauvegarde(identifiantPersonne: number): ng.IPromise<void>;
        majNote(valeur: number): void;
        aChange(): boolean;
    }
}

declare module LibrairiePotentielProspect.Services.Application {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IToolService {
        MsgBox(header: string, msg: string, icon?: string, size?: any): ng.IPromise<any>;
        DisplayInfo(mes: string): void;
    }
}

declare module LibrairiePotentielProspect.Services.Rest.TiersCorporateV1.Potentielprospect {
    /**
     * Interface pour les paramètres de la méthode GET
     */
    interface IGetQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    /**
     * Interface de la classe PotentielProspectService
     */
    interface IPotentielProspectService {
        getPotentielProspect(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Modeles.Rest.TiersCorporateV1.Potentielprospect.IPotentielProspect>;
        putPotentielProspect(body: Modeles.Rest.TiersCorporateV1.Potentielprospect.IPotentielProspect): ng.IPromise<Modeles.Rest.TiersCorporateV1.Potentielprospect.IPotentielProspect>;
    }
}

declare module LibrairiePotentielProspect.Modeles.Rest.TiersCorporateV1.Potentielprospect {
    interface IPotentielProspect {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne morale ou EI.
         */
        identifiantPersonne: number;
        /**
         * Rang priorité prospect.
         */
        rangPrioriteProspect: number;
        /**
         * TS création enregistrement.
         */
        dateCreation: string;
        /**
         * Identifiant Agent/Application création.
         */
        identifiantAgentAppliCreation: string;
        /**
         * TS modification enregistrement.
         */
        dateMaj: string;
        /**
         * Identifiant Agent/Application maj.
         */
        identifiantAgentAppliMaj: string;
        /**
         * Déterminer si la personne est un prospect.
         */
        estProspect: boolean;
    }
}
