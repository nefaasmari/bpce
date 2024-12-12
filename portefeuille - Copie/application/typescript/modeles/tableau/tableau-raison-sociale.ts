module Portefeuille.Modeles.Tableaux {

    /* istanbul ignore next */
    export class TableauRaisonsSociales implements MyWay.UI.ImwTableOptions {

        private tableauColonneId: MyWay.UI.ImwTableColumnOptions = {
            title: Constantes.Tableau.TAB_LISTE_CLIENTS_COLONNE_ID,
            bind: "identifiantPersonne",
            cssClass: "col-md-3"
        };

        private tableauColonneRaisonSociale: MyWay.UI.ImwTableColumnOptions = {
            title: Constantes.Tableau.TAB_LISTE_CLIENTS_COLONNE_RAISON_SOCIALE,
            bind: "raisonSociale",
            cssClass: "col-md-3"
        };

        private tableauColonneMarche: MyWay.UI.ImwTableColumnOptions = {
            title: Constantes.Tableau.TAB_LISTE_CLIENTS_COLONNE_MARCHE,
            bind: "libelleSegment",
            cssClass: "col-md-3"
        };


        private tableauColonneObjectifDeFlux: MyWay.UI.ImwTableColumnOptions = {
            title: Constantes.Tableau.TAB_LISTE_CLIENTS_COLONNE_OBJECTIF_DE_FLUX,
            bind: "",
            cssClass: "col-md-3",
            template: "vues/templates-tableau/colonne-objectif-flux.html"
        };

        public width: string = "col-md-12 col-lg-12";
        public orderBy = "raisonSociale";
        public reserve = false;
        public perPage = 10;
        public multiSelect = false;
        public filterEnable = false;
        public sortEnable = false;
        public moreEnable = false;
        public caption = "Infos clients";
        public readOnly = false;
        public theadSticky = "mw-zone-travail";
        public templateUrl: string = "";
        public data: Modeles.ApplicationStats.IClientSimplifie[] = [];
        public selectedItems: Modeles.ApplicationStats.IClientSimplifie[] = [];
        public disabledItems: Modeles.ApplicationStats.IClientSimplifie[] = [];
        public columns: MyWay.UI.ImwTableColumnOptions[] = [
            this.tableauColonneRaisonSociale,
            this.tableauColonneId,
            this.tableauColonneMarche
        ];
        public selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        public tableHandler: MyWay.UI.IMwTableHandler;
        public hasNoneElements = Constantes.Tableau.TAB_LISTE_CLIENTS_NO_ELEMENT;

        constructor(colonneObjectif: boolean) {
            if (colonneObjectif) {
                this.columns = [
                    this.tableauColonneRaisonSociale,
                    this.tableauColonneId,
                    this.tableauColonneMarche,
                    this.tableauColonneObjectifDeFlux   // affiche l'objectif de flux
                ];
            }
        }
    }
}   