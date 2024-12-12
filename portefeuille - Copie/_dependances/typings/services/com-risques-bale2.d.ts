
declare module myway.comRisquesBale2 {
    var app: ng.IModule;
}

declare module myway.comRisquesBale2 {
    class EchelleNotationController {
        private $scope;
        private echelleNotationService;
        private $timeout;
        static $inject: string[];
        noteCourante: string;
        items: Object[];
        libelle: string;
        messageError: string;
        idPersonne: number;
        noteBale: string;
        constructor($scope: ng.IScope, echelleNotationService: EchelleNotationService, $timeout: ng.ITimeoutService);
    }
}

declare module myway.comRisquesBale2 {
    function mwsfEchelleNotation(): ng.IDirective;
}

declare module myway.comRisquesBale2 {
    class EchelleNotationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @alias getEchelleNotation.
         * @return {Object} l'échelle de notation.
         * @param idPersonne
         * @param noteBale2
         * @description retourne l'échelle en fonction de la personne et de la noteBale2
         */
        getEchelleNotation(idPersonne: number, noteBale2: string): ng.IPromise<Object>;
        /**
         * @alias getEchelle.
         * @return {Object} l'échelle de notation.
         * @param idPersonne
         * @param noteBale2
         * @param codeEtablissement
         * @description retourne l'échelle de notation (appelle ressource REST)
         */
        private getEchelle(idPersonne, noteBale2, codeEtablissementContext);
        /**
         * @alias getNoteBale2.
         * @return {Object} la notebale2
         * @param idPersonne
         * @param codeEtablissement
         * @description retourne la noteBale2
         */
        private getNoteBale2(idPersonne, codeEtablissementContext);
    }
}
