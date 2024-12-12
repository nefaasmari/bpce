
declare module myway.gestionEpargne.depotATerme.gestionGeneriqueHorsOffre {
    var depotATermeGGHOModule: any;
}


declare module myway.gestionEpargne.depotATerme.gestionGeneriqueHorsOffre {
    class DepotATermeControleur {
        private serviceAgentExtended;
        private contexteProcessusService;
        private batOpeFiService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        contexteAppel: string;
        codeActeGestion: string;
        idBloc: string;
        modeAcces: string;
        modeAffichage: string;
        operationFinanciere: myway.comOpesFinancieres.Model.OperationFinanciere;
        codeModeFinancierParDefaut: string;
        donneesOuverture: myway.gestionEpargne.horsOffre.commun.DonneesOuvertureDAT;
        riceVersementInterets: MyWay.Model.Rice;
        compteVersementIneteret: MyWay.Model.Contrat;
        riceRemboursementEcheance: MyWay.Model.Rice;
        compteRemboursementEcheance: MyWay.Model.Contrat;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteProcessusService: myway.gestionEpargne.horsOffre.commun.ContexteProcessusService, batOpeFiService: myway.gestionEpargne.commun.BatOpeFiService);
    }
}

declare module myway.gestionEpargne.depotATerme.gestionGeneriqueHorsOffre {
    /**
     * Composant de dépot a terme pour intégration à GGHO
     */
    function mwDepotATerme(): ng.IDirective;
}
