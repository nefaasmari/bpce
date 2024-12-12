
declare module MyWay.ComContractAppTest {
    var app: any;
}

declare module MyWay.ComContractAppTest {
}

declare module MyWay.ComContractAppTest {
    /**
     * ContractualisationActeControleur est un contrôleur angularJs a pour objectif
     * de tester le service ContractualisationActeService.
     * @author S0076222
     * @version 16.09
     */
    class ContractualisationActeControleur {
        private serviceAgentExtended;
        private contractualisationActeService;
        static $inject: string[];
        private contractualisationActePost;
        private contractualisationActePut;
        private contractualisationActePostErreur;
        private contractualisationActePutErreur;
        /**
         * Les parametres d'entrée sont en dur afin de tester le service contractualisationActe (A améliorer)
         */
        private acte;
        private signataireA;
        private signataireB;
        private signataireC;
        private listeSignataires;
        private titulaireA;
        private listeTitulaires;
        /**
         * @constructor
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationActeService: myway.comContract.Services.ContractualisationActeService);
        /**
         * @ngdoc method
         * @name verifierELigibiliteSAGSEDReduitTest
         * @description
         * Permettant simplement de tester le service verifierELigibiliteSAGSEDReduit
         * @param {ContractualisationActe.Modeles.IContractualisationActeInput} input
         * @returns {ng.IPromise<ContractualisationActe.Modeles.IContractualisationActe>}
         */
        verifierELigibiliteSAGSEDReduitTest(acte: myway.comContract.ContractualisationActe.Modeles.IActe, listeSignataires: Array<myway.comContract.modeles.ISignataire>): void;
        /**
         * @ngdoc method
         * @name verifierELigibiliteSAGSEDCompletTest
         * @description
         * Permettant simplement de tester le service verifierELigibiliteSAGSEDComplet
         * @param {ContractualisationActe.Modeles.IContractualisationActeInput} input
         * @returns {ng.IPromise<ContractualisationActe.Modeles.IContractualisationActe>}
         */
        verifierELigibiliteSAGSEDCompletTest(acte: myway.comContract.ContractualisationActe.Modeles.IActe, listeSignataires: Array<myway.comContract.modeles.ISignataire>, listeTitulaires: Array<myway.comContract.ContractualisationActe.Modeles.ITitulaire>): void;
    }
}

declare module MyWay.ComContractAppTest {
}

declare module MyWay.ComContractAppTest {
}

declare module MyWay.ComContractAppTest {
}

declare module MyWay.ComContractAppTest {
    function entete(): ng.IDirective;
}
