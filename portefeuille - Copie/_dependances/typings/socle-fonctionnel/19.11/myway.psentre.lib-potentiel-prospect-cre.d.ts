
declare module LibrairiePotentielProspectCreBdr {
    var app: any;
}

declare module LibrairiePotentielProspectCreBdr.Constantes {
    module Application {
    }
    module urlsRest {
        var URL_REST_TIERSCORPORATEV1_POTENTIENTIEL_PROSPECT: string;
    }
}

declare module LibrairiePotentielProspectCreBdr.Directives {
    class PotentielPropectCreControleur {
        private $q;
        private $scope;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        choixQualificationProspect: Modeles.potentielprospect.IQualificationProspect;
        listeQualificationProspect: any;
        static $inject: any[];
        constructor($q: ng.IQService, $scope: ng.IScope);
        init(): void;
    }
}

/**
 * Directive Potentiel Prospect
 * @module PotentielProspectCre.Directives
 * @author S0062172 (Sothea CHANH)
 */
declare module LibrairiePotentielProspectCreBdr.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPotentielProspect(): ng.IDirective;
}

declare module LibrairiePotentielProspectCreBdr.Modeles.potentielprospect {
    interface IQualificationProspect {
        libelle: string;
        value: string;
    }
}

declare module LibrairiePotentielProspectCreBdr.Modeles.Rest.TiersCorporateV1.potentielprospect {
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

declare module LibrairiePotentielProspectCreBdr.Services.Rest {
    /**
     * Interface pour les paramètres de la méthode GET
     */
    interface IGetQuery {
        identifiantAgent: number;
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
     * Interface de la classe CorporateTiersLiesService
     */
    interface IPotentielProspectService {
        getPotentielProspect(query: IGetQuery): any;
        majPotentielProspect(query: IPutQuery): any;
    }
}
