
declare module et.osclien.decouver.decouvert.gestionGeneriqueHorsOffre {
    var app: any;
}

declare module et.osclien.decouver.decouvert.gestionGeneriqueHorsOffre {
    class DecouvertOuvertureControleur {
        protected $scope: ng.IScope;
        protected $q: ng.IQService;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        contexteAppel: string;
        codeActeGestion: string;
        idBloc: string;
        modeAcces: string;
        modeAffichage: string;
        estInitialise: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module et.osclien.decouver.decouvert.gestionGeneriqueHorsOffre {
    /**
     * Composant de découvert pour intégration à GGHO
     */
    function mwDecouvertOuverture(): ng.IDirective;
}
