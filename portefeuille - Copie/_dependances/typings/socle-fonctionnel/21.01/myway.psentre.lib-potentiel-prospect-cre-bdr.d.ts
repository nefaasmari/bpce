
declare module LibrairiePotentielProspectCreBdr {
    var app: ng.IModule;
}

declare module LibrairiePotentielProspectCreBdr.Constantes {
    module Application {
    }
    module urlsRest {
        var URL_REST_TIERSCORPORATEV1_POTENTIENTIEL_PROSPECT: string;
    }
}

declare module LibrairiePotentielProspectCreBdr.Directives.PotentielProspect.Controleur {
    class LibPotentielPropectCreControleur {
        private $q;
        private $scope;
        private serviceAgentExtended;
        private potentielProspectService;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        gestionPotentielProspect: LibrairiePotentielProspectCreBdr.Directives.GestionPotentielProspect.IGetPotentielProspect;
        private valeurPotentielProspect;
        private estProspect;
        private isHabiliteSHPIQ2;
        modifier: boolean;
        notePotentielProspect: number;
        private guid;
        private valeurPotentielProspectInitiale;
        static $inject: string[];
        constructor($q: ng.IQService, $scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, potentielProspectService: Services.Rest.TiersCorporateV1.Potentielprospect.IPotentielProspectService);
        init(): void;
        majNote(): void;
        newGuid(): string;
    }
}

/**
 * Directive Potentiel Prospect
 * @module LibrairiePotentielProspectCreBdr.Directives
 * @author S0062172 (Sothea CHANH)
 */
declare module LibrairiePotentielProspectCreBdr.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwLibPotentielProspect(): ng.IDirective;
}

/**
 * Ensemble d'interfaces des modèles applicatifs liés à la gestion du bloc potentiel prospect
 * @module LibrairiePotentielProspectCreBdr.Directives.GestionPotentielProspect
 * @author S0062172 (Chanh Sothea)
 */
declare module LibrairiePotentielProspectCreBdr.Directives.GestionPotentielProspect {
    interface IQualificationProspect {
        value: number;
    }
    interface IGetPotentielProspect {
        codeEtablissement: string;
        identifiantAgent: number;
        identifiantPersonne: number;
    }
    interface IPutPotentielProspect {
        codeEtablissement: string;
        identifiantPersonne: number;
        rangPrioriteProspect: number;
    }
    interface IPotentielProspectService {
        getPotentielProspect(query: IGetPotentielProspect): any;
        majPotentielProspect(query: IPutPotentielProspect): any;
        getChoixQualificationProspect(): any;
    }
}

declare module LibrairiePotentielProspectCreBdr.Modeles.Application {
    interface IChoixQualificationProspect {
        choixQualificationProspect: number;
    }
}

declare module LibrairiePotentielProspectCreBdr.Services.Rest.TiersCorporateV1.Potentielprospect {
    /**
     * Interface pour les paramètres de la méthode GET
     */
    interface IGetQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    /**
     * Interface pour les paramètres de la méthode PUT
     */
    interface IPutQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
        rangPrioriteProspect: number;
    }
    /**
     * Interface de la classe PotentielProspectService
     */
    interface IPotentielProspectService {
        getPotentielProspect(codeEtablissement: string, identifiantPersonne: number): MyWay.Services.IPromesse<Modeles.Rest.TiersCorporateV1.Potentielprospect.IPotentielProspect>;
        putPotentielProspect(query: IPutQuery): ng.IPromise<Modeles.Rest.TiersCorporateV1.Potentielprospect.IPotentielProspect>;
    }
}

declare module LibrairiePotentielProspectCreBdr.Modeles.Rest.TiersCorporateV1.Potentielprospect {
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
